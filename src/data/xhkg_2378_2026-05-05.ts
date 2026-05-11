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
      "marketCap": 290791009311.8,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1828",
      "name": "FWD",
      "marketCap": 38363069838.48,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "945",
      "name": "MANULIFE-S",
      "marketCap": 505011785712.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "376",
      "name": "YUNFENG FIN",
      "marketCap": 11081866267.289999,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "82318",
      "name": "PING AN-R",
      "marketCap": 411106245542.4,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1508",
      "name": "CHINA RE",
      "marketCap": 8082094207.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "6963",
      "name": "SUNSHINE INS",
      "marketCap": 12627929702.19,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "81299",
      "name": "AIA-R",
      "marketCap": 781292023512.3999,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "6060",
      "name": "ZA ONLINE",
      "marketCap": 19552362284.0,
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
    "asof_date": "2026-05-05",
    "industry": "Financials - Insurance",
    "sector": "Insurance",
    "market_cap_display": "290.8B",
    "market_cap_category": "large",
    "universe_total": 2570,
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
          "score_pca": 72.99610894941634,
          "score_pca_percentile": 72.99610894941634,
          "rank_pca": 695,
          "total": 2570,
          "adv_notional_sgd": 14292290.0,
          "adv_volume_shares": 123850.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 4.8426017955561985e-05,
          "votes": 578.0,
          "trades": 578.0,
          "spread_pct": 0.0035719041902417758,
          "spread_ticks": 4.075871195412439,
          "amihud": 6.733558460800795e-10,
          "volatility": 0.46432261223477633
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5348373349240532,
          "loadings": {
            "log_adv": 0.5413775679184412,
            "log_trades": 0.5034186215745444,
            "log_turnover": 0.5012351021253021,
            "neg_spread": 0.39692556874547086,
            "neg_amihud": 0.07036679844879323,
            "neg_vol": -0.19935395495522287
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
          "peer_median_adv": 9164216.5,
          "peer_median_score_pca": 78.32684824902724,
          "peer_median_trades": 553.5,
          "peer_median_volatility": 0.24604843963514791,
          "peer_median_spread_pct": 0.0027584212530892345,
          "peer_median_spread_ticks": 2.0138628508985574,
          "peer_median_amihud": 1.7087748922262662e-09,
          "peer_median_turnover_ratio": 0.001481648609131689,
          "target_vs_peer": {
            "score_pca_delta": -5.33,
            "adv_delta_pct": 56.0,
            "trades_delta_pct": 4.43,
            "volatility_delta_pct": -88.71,
            "spread_pct_delta_pct": -29.49,
            "spread_ticks_delta_pct": 102.39,
            "amihud_delta_pct": 60.59,
            "turnover_ratio_delta_pct": -96.73
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 72.99610894941634,
            "rank_pca": 695,
            "adv": 14292290.0,
            "trades": 578.0,
            "volatility": 0.46432261223477633,
            "spread_pct": 0.0035719041902417758,
            "spread_ticks": 4.075871195412439,
            "amihud": 6.733558460800795e-10,
            "turnover_ratio": 4.8426017955561985e-05,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 80.8171206225681,
            "rank_pca": 494,
            "adv": 11275478.0,
            "trades": 785.0,
            "volatility": 0.2036630413980895,
            "spread_pct": 0.002143640048081484,
            "spread_ticks": null,
            "amihud": 1.5120583205314081e-09,
            "turnover_ratio": 0.0013658128941576317,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 43.57976653696498,
            "rank_pca": 1451,
            "adv": 1479800.0,
            "trades": 29.0,
            "volatility": 0.08862652794991903,
            "spread_pct": 0.007011356718517132,
            "spread_ticks": 10.557471264367816,
            "amihud": 6.207833292361648e-09,
            "turnover_ratio": 2.868812645002964e-06,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 75.83657587548637,
            "rank_pca": 622,
            "adv": 7052955.0,
            "trades": 322.0,
            "volatility": 0.3137486872764378,
            "spread_pct": 0.005109670653636548,
            "spread_ticks": 1.3921282798833818,
            "amihud": 2.5500817048728164e-09,
            "turnover_ratio": 0.002031611842523441,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 33.85214007782101,
            "rank_pca": 1701,
            "adv": 474931.21470265905,
            "trades": 9.0,
            "volatility": 0.10419353506090663,
            "spread_pct": 0.0023996641553552392,
            "spread_ticks": 2.6355974219137335,
            "amihud": 1.9054914639211245e-09,
            "turnover_ratio": 1.3240174608005e-06,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 91.40077821011673,
            "rank_pca": 222,
            "adv": 42316312.39,
            "trades": 1938.0,
            "volatility": 0.40232187194921065,
            "spread_pct": 0.00853344690487259,
            "spread_ticks": 1.0101444820166001,
            "amihud": 1.9692957308119788e-10,
            "turnover_ratio": 0.00560152544932088,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 92.76264591439688,
            "rank_pca": 187,
            "adv": 38556045.0,
            "trades": 2750.0,
            "volatility": 0.42854916101679064,
            "spread_pct": 0.00311717835082323,
            "spread_ticks": 1.121900826446281,
            "amihud": 5.099828405199392e-10,
            "turnover_ratio": 0.004446869896844965,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 17.704280155642024,
            "rank_pca": 2116,
            "adv": 34117.03943298811,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.001967058342841352,
            "spread_ticks": 2.924437891632879,
            "amihud": 5.606960016714788e-07,
            "turnover_ratio": 4.087427570967377e-08,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 88.52140077821011,
            "rank_pca": 296,
            "adv": 23745384.0,
            "trades": 2045.0,
            "volatility": 0.28843383787220633,
            "spread_pct": 0.0015416083292034315,
            "spread_ticks": null,
            "amihud": 1.0590137863965369e-10,
            "turnover_ratio": 0.0015974843241057463,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.47647009579942395,
              "median": 0.295976534595778,
              "min": 0.0,
              "max": 9.718212131658548,
              "p5": 0.0,
              "p95": 1.577950695606247,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 30477689.68184798,
              "median": 247195.0,
              "min": 0.0,
              "max": 6138127800.0,
              "p5": 0.0,
              "p95": 98670147.61599998,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0478638315339299,
              "median": 0.02774065820885813,
              "min": 0.0004719772506389261,
              "max": 0.974472807991121,
              "p5": 0.0016423999073913763,
              "p95": 0.1539838334220761,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0032557210508444455,
              "median": 0.0008867954251179029,
              "min": 0.0,
              "max": 0.5707496368632508,
              "p5": 0.0,
              "p95": 0.011397382488624506,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.4499268127930395e-06,
              "median": 1.235506893502109e-08,
              "min": 0.0,
              "max": 0.002032520325203245,
              "p5": 0.0,
              "p95": 5.8873791555632215e-06,
              "count": 2222
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 526.8898832684824,
              "median": 24.0,
              "min": 0.0,
              "max": 34828.0,
              "p5": 0.0,
              "p95": 2606.7499999999986,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2698955140385278,
              "median": 0.2625890213176625,
              "min": 0.0,
              "max": 1.1736802786491973,
              "p5": 0.0,
              "p95": 0.46432261223477633,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 163657929.4173398,
              "median": 23745384.0,
              "min": 0.0,
              "max": 1213655673.6000001,
              "p5": 9360.0,
              "p95": 798163504.0,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01711402840481169,
              "median": 0.0023996641553552392,
              "min": 0.0006823878588190443,
              "max": 0.2014276731885934,
              "p5": 0.0008385711695330583,
              "p95": 0.08725870184266905,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0016814835960163627,
              "median": 0.0014437513567909265,
              "min": 0.0,
              "max": 0.00560152544932088,
              "p5": 4.087427570967377e-08,
              "p95": 0.004446869896844965,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0405928841724618e-07,
              "median": 3.5345620680056854e-10,
              "min": 9.58089450713158e-13,
              "max": 5.899120323177372e-07,
              "p5": 4.752380050089037e-12,
              "p95": 5.621568032037917e-07,
              "count": 20
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2077.2380952380954,
              "median": 1600.0,
              "min": 0.0,
              "max": 9484.0,
              "p5": 1.0,
              "p95": 7708.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 15616877.830516957,
              "median": 9164216.5,
              "min": 34117.03943298811,
              "max": 42316312.39,
              "p5": 188402.00077737297,
              "p95": 41000218.8035,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 984.875,
              "median": 553.5,
              "min": 1.0,
              "max": 2750.0,
              "p5": 3.8000000000000003,
              "p95": 2503.2499999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22869208281544506,
              "median": 0.24604843963514791,
              "min": 0.0,
              "max": 0.42854916101679064,
              "p5": 0.03101928478247166,
              "p95": 0.41936960984313765,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0039779529379163755,
              "median": 0.0027584212530892345,
              "min": 0.0015416083292034315,
              "max": 0.00853344690487259,
              "p5": 0.0016905158339767037,
              "p95": 0.00800071533964818,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.171053503067582e-08,
              "median": 1.7087748922262662e-09,
              "min": 1.0590137863965369e-10,
              "max": 5.606960016714788e-07,
              "p5": 1.3776124669419417e-10,
              "p95": 3.666251427387875e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018809422639167721,
              "median": 0.001481648609131689,
              "min": 4.087427570967377e-08,
              "max": 0.00560152544932088,
              "p5": 4.89974390491463e-07,
              "p95": 0.005197396005954309,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.2736133610434486,
              "median": 2.0138628508985574,
              "min": 1.0101444820166001,
              "max": 10.557471264367816,
              "p5": 1.0380835681240204,
              "p95": 8.649212921184082,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.00962379702537186,
            "market": 0.004408259457868713,
            "sector": -0.0009049773755656076,
            "peers": -0.005045664540801242,
            "vs_market": 0.005215537567503148,
            "vs_sector": 0.010528774400937468,
            "vs_peers": 0.014669461566173103
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 66.65369649805447,
          "score_pca_percentile": 66.65369649805447,
          "rank_pca": 858,
          "total": 2570,
          "adv_notional_sgd": 7577640.0,
          "adv_volume_shares": 65100.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.5454451101389465e-05,
          "votes": 265.0,
          "trades": 265.0,
          "spread_pct": 0.0033612727954605588,
          "spread_ticks": 3.991310644460536,
          "amihud": 1.984825860215468e-09,
          "volatility": 0.32014765202316253
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5657928128432981,
          "loadings": {
            "log_adv": 0.5249534586731096,
            "log_trades": 0.4814205672907148,
            "log_turnover": 0.4773679781368873,
            "neg_spread": 0.45714817806760044,
            "neg_amihud": 0.22698845711587326,
            "neg_vol": 0.06534294676363578
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
          "peer_median_adv": 8652620.0,
          "peer_median_score_pca": 75.1556420233463,
          "peer_median_trades": 580.0,
          "peer_median_volatility": 0.3454218535793602,
          "peer_median_spread_pct": 0.00335766709834962,
          "peer_median_spread_ticks": 1.8925447569946785,
          "peer_median_amihud": 1.3833460141187386e-09,
          "peer_median_turnover_ratio": 0.001944978860779616,
          "target_vs_peer": {
            "score_pca_delta": -8.5,
            "adv_delta_pct": -12.4,
            "trades_delta_pct": -54.31,
            "volatility_delta_pct": 7.32,
            "spread_pct_delta_pct": -0.11,
            "spread_ticks_delta_pct": 110.9,
            "amihud_delta_pct": -43.48,
            "turnover_ratio_delta_pct": -98.69
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 66.65369649805447,
            "rank_pca": 858,
            "adv": 7577640.0,
            "trades": 265.0,
            "volatility": 0.32014765202316253,
            "spread_pct": 0.0033612727954605588,
            "spread_ticks": 3.991310644460536,
            "amihud": 1.984825860215468e-09,
            "turnover_ratio": 2.5454451101389465e-05,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 74.12451361867704,
            "rank_pca": 666,
            "adv": 6110440.0,
            "trades": 634.0,
            "volatility": 0.31666561822703726,
            "spread_pct": 0.003622316382493332,
            "spread_ticks": null,
            "amihud": 1.5799091019152336e-09,
            "turnover_ratio": 0.0007066928721166582,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 59.88326848249027,
            "rank_pca": 1032,
            "adv": 4021919.9999999995,
            "trades": 77.0,
            "volatility": 0.22320693826402443,
            "spread_pct": 0.00532989999823632,
            "spread_ticks": 7.829015544041451,
            "amihud": 1.3645069190507145e-09,
            "turnover_ratio": 7.845324376130555e-06,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 76.18677042801556,
            "rank_pca": 613,
            "adv": 11194800.0,
            "trades": 526.0,
            "volatility": 0.5388309589513696,
            "spread_pct": 0.004760862591552156,
            "spread_ticks": 1.3259521700620018,
            "amihud": 1.4021851091867626e-09,
            "turnover_ratio": 0.003183264849442574,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 55.75875486381323,
            "rank_pca": 1138,
            "adv": 3826809.885424795,
            "trades": 24.0,
            "volatility": 0.29821268992742817,
            "spread_pct": 0.002250185432676576,
            "spread_ticks": 2.459137343927355,
            "amihud": 2.7523482530029086e-09,
            "turnover_ratio": 1.1033478840004166e-05,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 83.85214007782102,
            "rank_pca": 416,
            "adv": 42316312.39,
            "trades": 1660.0,
            "volatility": 0.3883755341253393,
            "spread_pct": 0.007503105424140774,
            "spread_ticks": 1.0290817494847722,
            "amihud": 3.2091203681460606e-10,
            "turnover_ratio": 0.00498420097346484,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 88.67704280155641,
            "rank_pca": 292,
            "adv": 55850475.0,
            "trades": 2827.0,
            "volatility": 0.36354882870846633,
            "spread_pct": 0.0030930178142059075,
            "spread_ticks": 1.121900826446281,
            "amihud": 3.2697684654257743e-10,
            "turnover_ratio": 0.006311821359020354,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 31.05058365758755,
            "rank_pca": 1773,
            "adv": 208143.7671392523,
            "trades": 3.0,
            "volatility": 0.3272948784502541,
            "spread_pct": 0.0019988762308385585,
            "spread_ticks": 2.955357142857143,
            "amihud": 2.6149085886631012e-08,
            "turnover_ratio": 2.452456542580426e-07,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 92.37354085603113,
            "rank_pca": 197,
            "adv": 92219788.0,
            "trades": 4795.0,
            "volatility": 0.4400430182281287,
            "spread_pct": 0.0011639567169556035,
            "spread_ticks": null,
            "amihud": 1.7803108384813867e-10,
            "turnover_ratio": 0.006087079887541449,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6836215259955822,
              "median": 0.5166360338992498,
              "min": 0.0,
              "max": 28.000443481783236,
              "p5": 0.1631243359329768,
              "p95": 1.66364340518133,
              "count": 2569
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 56337665.80831801,
              "median": 219625.0,
              "min": 0.0,
              "max": 10534340250.0,
              "p5": 0.0,
              "p95": 219156485.10999998,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0451979479952332,
              "median": 0.02862411287606848,
              "min": 0.0004719772506389261,
              "max": 0.5912209998910793,
              "p5": 0.0014523579212069601,
              "p95": 0.14396038885664517,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004088230459690176,
              "median": 0.000885753361588621,
              "min": 0.0,
              "max": 0.2778405506031397,
              "p5": 0.0,
              "p95": 0.015416574289459372,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2281707720701324e-06,
              "median": 4.569280602226794e-08,
              "min": 0.0,
              "max": 0.00022428229665071768,
              "p5": 3.1217817494808544e-11,
              "p95": 4.8065588589531225e-06,
              "count": 2565
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1031.7727626459143,
              "median": 20.0,
              "min": 0.0,
              "max": 66111.0,
              "p5": 0.0,
              "p95": 5812.699999999996,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4342930922768695,
              "median": 0.3204297656455112,
              "min": 0.15846280850695751,
              "max": 2.400798970315606,
              "p5": 0.22320693826402443,
              "p95": 0.5388309589513696,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 324281489.33202684,
              "median": 42316312.39,
              "min": 0.0,
              "max": 1879756569.6000001,
              "p5": 10320.0,
              "p95": 1703821289.5,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008829779368020431,
              "median": 0.002335935963056067,
              "min": 0.0006567526873819095,
              "max": 0.050345656747820856,
              "p5": 0.0008619261420315018,
              "p95": 0.04235284328477225,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0033923929857658506,
              "median": 0.003183264849442574,
              "min": 0.0,
              "max": 0.010301486361053689,
              "p5": 2.452456542580426e-07,
              "p95": 0.007955956625566094,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.973167407980098e-08,
              "median": 3.2697684654257743e-10,
              "min": 4.952079555319346e-12,
              "max": 3.7814331631688475e-07,
              "p5": 7.132333414484544e-12,
              "p95": 1.470626904347672e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4398.285714285715,
              "median": 1660.0,
              "min": 0.0,
              "max": 15818.0,
              "p5": 2.0,
              "p95": 14593.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 26968586.130320504,
              "median": 8652620.0,
              "min": 208143.7671392523,
              "max": 92219788.0,
              "p5": 1474676.9085391923,
              "p95": 79490528.44999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1318.25,
              "median": 580.0,
              "min": 3.0,
              "max": 4795.0,
              "p5": 10.350000000000001,
              "p95": 4106.199999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.362022308110256,
              "median": 0.3454218535793602,
              "min": 0.22320693826402443,
              "max": 0.5388309589513696,
              "p5": 0.24945895134621573,
              "p95": 0.5042551796982352,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003715277573887403,
              "median": 0.00335766709834962,
              "min": 0.0011639567169556035,
              "max": 0.007503105424140774,
              "p5": 0.0014561785468146377,
              "p95": 0.006742483525074214,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.259244404623995e-09,
              "median": 1.3833460141187386e-09,
              "min": 1.7803108384813867e-10,
              "max": 2.6149085886631012e-08,
              "p5": 2.2803941738640226e-10,
              "p95": 1.7960227714861165e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026615229988070335,
              "median": 0.001944978860779616,
              "min": 2.452456542580426e-07,
              "max": 0.006311821359020354,
              "p5": 2.9052732069134225e-06,
              "p95": 0.006233161844002737,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.7867407961365007,
              "median": 1.8925447569946785,
              "min": 1.0290817494847722,
              "max": 7.829015544041451,
              "p5": 1.0522865187251493,
              "p95": 6.610600943745374,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.07348837209302217,
            "market": 0.061637587977822816,
            "sector": 0.0369669548770839,
            "peers": -0.027075209681488355,
            "vs_market": 0.011850784115199353,
            "vs_sector": 0.03652141721593827,
            "vs_peers": 0.10056358177451052
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 67.62645914396887,
          "score_pca_percentile": 67.62645914396887,
          "rank_pca": 833,
          "total": 2570,
          "adv_notional_sgd": 7388370.0,
          "adv_volume_shares": 65100.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.5454451101389465e-05,
          "votes": 254.0,
          "trades": 254.0,
          "spread_pct": 0.0036488016316969527,
          "spread_ticks": 4.37045203969129,
          "amihud": 1.984825860215468e-09,
          "volatility": 0.3826314994108481
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6173236059188587,
          "loadings": {
            "log_adv": 0.500108193383364,
            "log_trades": 0.4538044548119494,
            "log_turnover": 0.45381406159321896,
            "neg_spread": 0.4605365259307305,
            "neg_amihud": 0.3294908451439469,
            "neg_vol": 0.13171180833131446
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
          "peer_median_adv": 13728614.0,
          "peer_median_score_pca": 77.49027237354086,
          "peer_median_trades": 800.5,
          "peer_median_volatility": 0.373626618667393,
          "peer_median_spread_pct": 0.002846220734729132,
          "peer_median_spread_ticks": 1.9464357173280447,
          "peer_median_amihud": 1.0005615464131023e-09,
          "peer_median_turnover_ratio": 0.0021917563174398908,
          "target_vs_peer": {
            "score_pca_delta": -9.86,
            "adv_delta_pct": -46.2,
            "trades_delta_pct": -68.27,
            "volatility_delta_pct": -2.41,
            "spread_pct_delta_pct": -28.2,
            "spread_ticks_delta_pct": 124.54,
            "amihud_delta_pct": -98.37,
            "turnover_ratio_delta_pct": -98.84
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 67.62645914396887,
            "rank_pca": 833,
            "adv": 7388370.0,
            "trades": 254.0,
            "volatility": 0.3826314994108481,
            "spread_pct": 0.0036488016316969527,
            "spread_ticks": 4.37045203969129,
            "amihud": 1.984825860215468e-09,
            "turnover_ratio": 2.5454451101389465e-05,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 76.7704280155642,
            "rank_pca": 598,
            "adv": 9313680.0,
            "trades": 858.0,
            "volatility": 0.26389483021507576,
            "spread_pct": 0.0024244412726778866,
            "spread_ticks": null,
            "amihud": 9.654491802022797e-10,
            "turnover_ratio": 0.001030987185991363,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 60.62256809338521,
            "rank_pca": 1013,
            "adv": 3780919.9999999995,
            "trades": 65.0,
            "volatility": 0.2679460139925926,
            "spread_pct": 0.004945549359841873,
            "spread_ticks": 7.292517006802721,
            "amihud": 3.1162808132282643e-09,
            "turnover_ratio": 7.66968278562017e-06,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 78.21011673151752,
            "rank_pca": 561,
            "adv": 18143548.0,
            "trades": 743.0,
            "volatility": 0.6250349584156409,
            "spread_pct": 0.004640975666235684,
            "spread_ticks": 1.3394415357766143,
            "amihud": 1.035673912623925e-09,
            "turnover_ratio": 0.004902290778514082,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 59.221789883268485,
            "rank_pca": 1049,
            "adv": 3924864.8264313405,
            "trades": 32.0,
            "volatility": 0.33653993877080496,
            "spread_pct": 0.002254698630896886,
            "spread_ticks": 2.5534298988794752,
            "amihud": 2.7523482530029086e-09,
            "turnover_ratio": 1.1033478840004166e-05,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 81.86770428015564,
            "rank_pca": 467,
            "adv": 33684190.0,
            "trades": 1543.0,
            "volatility": 0.43512158804394147,
            "spread_pct": 0.006943367352214332,
            "spread_ticks": 1.0820845448445537,
            "amihud": 3.974522388004641e-10,
            "turnover_ratio": 0.003352525448888419,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 86.57587548638132,
            "rank_pca": 346,
            "adv": 46244585.0,
            "trades": 2193.0,
            "volatility": 0.35590178612560897,
            "spread_pct": 0.0032680001967803777,
            "spread_ticks": 1.2254625905068384,
            "amihud": 3.457033293739452e-10,
            "turnover_ratio": 0.005165930203565412,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 37.704280155642024,
            "rank_pca": 1602,
            "adv": 396464.3183604806,
            "trades": 4.0,
            "volatility": 0.42717051064083533,
            "spread_pct": 0.002011494290217908,
            "spread_ticks": 2.9881753312945976,
            "amihud": 2.943224994540642e-08,
            "turnover_ratio": 4.904913085160852e-07,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 94.59143968871595,
            "rank_pca": 140,
            "adv": 124651331.99999999,
            "trades": 6710.0,
            "volatility": 0.39135145120917697,
            "spread_pct": 0.0011907216370160157,
            "spread_ticks": null,
            "amihud": 1.4393356444561903e-10,
            "turnover_ratio": 0.007310417837763256,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7122430307357936,
              "median": 0.5762681407295099,
              "min": 0.0,
              "max": 16.13862380852955,
              "p5": 0.22314394354863964,
              "p95": 1.587343798982137,
              "count": 2569
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59576441.40157237,
              "median": 218440.0,
              "min": 0.0,
              "max": 13012759200.0,
              "p5": 0.0,
              "p95": 234278071.66499972,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.043224772675050246,
              "median": 0.028252699333992357,
              "min": 0.0005766037246855124,
              "max": 0.586235634471959,
              "p5": 0.0014679437791874366,
              "p95": 0.13566970675414702,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038068653272779977,
              "median": 0.0008701696351082154,
              "min": 0.0,
              "max": 0.4102056640783613,
              "p5": 0.0,
              "p95": 0.01455008997835171,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.023188076585877e-07,
              "median": 4.692873639544753e-08,
              "min": 0.0,
              "max": 4.629629629629633e-05,
              "p5": 4.90556141413179e-11,
              "p95": 3.776547932605868e-06,
              "count": 2570
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1056.65,
              "median": 20.0,
              "min": 0.0,
              "max": 72100.0,
              "p5": 0.0,
              "p95": 5835.899999999995,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.48557495310083515,
              "median": 0.39135145120917697,
              "min": 0.18736326638995207,
              "max": 2.691572391359211,
              "p5": 0.26389483021507576,
              "p95": 0.6250349584156409,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 400204484.74356145,
              "median": 33684190.0,
              "min": 0.0,
              "max": 2426074624.4,
              "p5": 22000.0,
              "p95": 2279749736.7000003,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00795668099612031,
              "median": 0.002254698630896886,
              "min": 0.0006695136869400823,
              "max": 0.044361666102268896,
              "p5": 0.0008488999185669237,
              "p95": 0.03378760283866104,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035439282804753127,
              "median": 0.003352525448888419,
              "min": 0.0,
              "max": 0.009976558210001108,
              "p5": 4.904913085160852e-07,
              "p95": 0.009144998652503974,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.61287373186546e-08,
              "median": 3.974522388004641e-10,
              "min": 5.678413011391941e-12,
              "max": 3.7054668719444715e-07,
              "p5": 7.494294684821568e-12,
              "p95": 1.470626904347672e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5001.666666666667,
              "median": 1543.0,
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
              "mean": 30017448.018098973,
              "median": 13728614.0,
              "min": 396464.3183604806,
              "max": 124651331.99999999,
              "p5": 1581023.8069343125,
              "p95": 97208970.54999995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1518.5,
              "median": 800.5,
              "min": 4.0,
              "max": 6710.0,
              "p5": 13.8,
              "p95": 5129.049999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3878701346767096,
              "median": 0.373626618667393,
              "min": 0.26389483021507576,
              "max": 0.6250349584156409,
              "p5": 0.26531274453720666,
              "p95": 0.5585652787855461,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00345990605073512,
              "median": 0.002846220734729132,
              "min": 0.0011907216370160157,
              "max": 0.006943367352214332,
              "p5": 0.001477992065636678,
              "p95": 0.006244131054883971,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.773636404635477e-09,
              "median": 1.0005615464131023e-09,
              "min": 1.4393356444561903e-10,
              "max": 2.943224994540642e-08,
              "p5": 2.1455298217053318e-10,
              "p95": 2.022166074914405e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002722668138457084,
              "median": 0.0021917563174398908,
              "min": 4.904913085160852e-07,
              "max": 0.007310417837763256,
              "p5": 3.003208325502515e-06,
              "p95": 0.006559847165794009,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.7468518180174666,
              "median": 1.9464357173280447,
              "min": 1.0820845448445537,
              "max": 7.292517006802721,
              "p5": 1.117929056260125,
              "p95": 6.21643158792569,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.08339952343129542,
            "market": 0.04184276437556522,
            "sector": -0.11921446832342297,
            "peers": -0.1928598352178036,
            "vs_market": -0.12524228780686064,
            "vs_sector": 0.035814944892127554,
            "vs_peers": 0.10946031178650817
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 67.47081712062257,
          "score_pca_percentile": 67.47081712062257,
          "rank_pca": 837,
          "total": 2570,
          "adv_notional_sgd": 7871677.5,
          "adv_volume_shares": 68925.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.695004673061857e-05,
          "votes": 264.5,
          "trades": 264.5,
          "spread_pct": 0.0035401170946083383,
          "spread_ticks": 4.156856528762557,
          "amihud": 1.330364410805972e-09,
          "volatility": 0.3237076081130601
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.633672288547273,
          "loadings": {
            "log_adv": 0.4946721424742218,
            "log_trades": 0.4475476572321867,
            "log_turnover": 0.4499991630312764,
            "neg_spread": 0.4593053505417985,
            "neg_amihud": 0.355598313646143,
            "neg_vol": 0.12284035791542487
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
          "peer_median_adv": 20222279.0,
          "peer_median_score_pca": 78.59922178988327,
          "peer_median_trades": 941.25,
          "peer_median_volatility": 0.35688756674148225,
          "peer_median_spread_pct": 0.0027692053093815636,
          "peer_median_spread_ticks": 1.9582609478502433,
          "peer_median_amihud": 7.705990559811574e-10,
          "peer_median_turnover_ratio": 0.002064316998153081,
          "target_vs_peer": {
            "score_pca_delta": -11.13,
            "adv_delta_pct": -61.1,
            "trades_delta_pct": -71.9,
            "volatility_delta_pct": 9.3,
            "spread_pct_delta_pct": -27.84,
            "spread_ticks_delta_pct": 112.27,
            "amihud_delta_pct": -72.64,
            "turnover_ratio_delta_pct": -98.69
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 67.47081712062257,
            "rank_pca": 837,
            "adv": 7871677.5,
            "trades": 264.5,
            "volatility": 0.3237076081130601,
            "spread_pct": 0.0035401170946083383,
            "spread_ticks": 4.156856528762557,
            "amihud": 1.330364410805972e-09,
            "turnover_ratio": 2.695004673061857e-05,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 77.1206225680934,
            "rank_pca": 589,
            "adv": 11601638.0,
            "trades": 864.0,
            "volatility": 0.21797050446133018,
            "spread_pct": 0.0021718878586147747,
            "spread_ticks": null,
            "amihud": 6.440971094070327e-10,
            "turnover_ratio": 0.0011484667050713933,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 59.53307392996109,
            "rank_pca": 1041,
            "adv": 3392360.0,
            "trades": 59.0,
            "volatility": 0.2187146042335629,
            "spread_pct": 0.004225994461612143,
            "spread_ticks": 5.966060398078243,
            "amihud": 2.5092866268628036e-09,
            "turnover_ratio": 7.201305210925808e-06,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 80.9727626459144,
            "rank_pca": 490,
            "adv": 28842920.0,
            "trades": 1018.5,
            "volatility": 0.6359905638859137,
            "spread_pct": 0.00427173567552446,
            "spread_ticks": 1.3600535086125745,
            "amihud": 8.971010025552821e-10,
            "turnover_ratio": 0.006580424965448483,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 59.10505836575876,
            "rank_pca": 1052,
            "adv": 4622993.636449425,
            "trades": 32.5,
            "volatility": 0.3231672275733205,
            "spread_pct": 0.00227739327960181,
            "spread_ticks": 2.556468387087912,
            "amihud": 2.1292969017077155e-09,
            "turnover_ratio": 1.204855889328455e-05,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 80.07782101167315,
            "rank_pca": 513,
            "adv": 30258669.785,
            "trades": 1137.0,
            "volatility": 0.36780283018476634,
            "spread_pct": 0.006642108829882296,
            "spread_ticks": 1.0770572149604944,
            "amihud": 4.2320166367483765e-10,
            "turnover_ratio": 0.002980167291234769,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 86.84824902723736,
            "rank_pca": 339,
            "adv": 48105238.239999995,
            "trades": 2266.0,
            "volatility": 0.35595620219574575,
            "spread_pct": 0.0032610173391613173,
            "spread_ticks": 1.2282011313364558,
            "amihud": 2.8544883905968443e-10,
            "turnover_ratio": 0.005235847566722509,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 36.10894941634241,
            "rank_pca": 1643,
            "adv": 362324.3353905503,
            "trades": 3.0,
            "volatility": 0.3823217041317,
            "spread_pct": 0.0020388105506287764,
            "spread_ticks": 3.023476692407418,
            "amihud": 3.0064483120439544e-08,
            "turnover_ratio": 4.2917989495157457e-07,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 95.17509727626458,
            "rank_pca": 125,
            "adv": 147201748.5,
            "trades": 7189.5,
            "volatility": 0.3578189312872188,
            "spread_pct": 0.001076986982866866,
            "spread_ticks": null,
            "amihud": 9.598714543429525e-11,
            "turnover_ratio": 0.007775123726444264,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7416606057286959,
              "median": 0.5912170545820724,
              "min": 0.0,
              "max": 33.69155621232454,
              "p5": 0.22348888921203908,
              "p95": 1.5809927341651657,
              "count": 2569
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 55229928.17930393,
              "median": 207318.75,
              "min": 0.0,
              "max": 11376396450.0,
              "p5": 0.0,
              "p95": 209657798.41999984,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04217445621348828,
              "median": 0.027138195265564782,
              "min": 0.0005747861018128454,
              "max": 0.586235634471959,
              "p5": 0.0014165617123665353,
              "p95": 0.13479365462597875,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003488285187683442,
              "median": 0.0008330789487093023,
              "min": 0.0,
              "max": 0.20377282466782026,
              "p5": 0.0,
              "p95": 0.013754188819693645,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.354611216137465e-07,
              "median": 4.75800576131515e-08,
              "min": 0.0,
              "max": 2.024037584382411e-05,
              "p5": 5.146952110101268e-11,
              "p95": 3.475302158416067e-06,
              "count": 2570
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1010.6484435797665,
              "median": 19.5,
              "min": 0.0,
              "max": 88929.0,
              "p5": 0.0,
              "p95": 5614.799999999963,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.43444582029548695,
              "median": 0.35797086670343664,
              "min": 0.21797050446133018,
              "max": 1.9571164205487641,
              "p5": 0.2187146042335629,
              "p95": 0.6359905638859137,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 395133650.2327066,
              "median": 30258669.785,
              "min": 0.0,
              "max": 2286237750.3,
              "p5": 50320.0,
              "p95": 2106529895.55,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00851839082400369,
              "median": 0.0021718878586147747,
              "min": 0.0006765261455938876,
              "max": 0.05035057826935165,
              "p5": 0.0008478694874768748,
              "p95": 0.03724201108557803,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0037603251067991946,
              "median": 0.002980167291234769,
              "min": 0.0,
              "max": 0.010445971514741054,
              "p5": 4.2917989495157457e-07,
              "p95": 0.009905727432507984,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.3581301941882305e-08,
              "median": 4.2320166367483765e-10,
              "min": 4.883409595552578e-12,
              "max": 1.479553823217473e-07,
              "p5": 7.214710232545567e-12,
              "p95": 1.4526121598163848e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4964.285714285715,
              "median": 1137.0,
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
              "mean": 34298486.562105,
              "median": 20222279.0,
              "min": 362324.3353905503,
              "max": 147201748.5,
              "p5": 1422836.818003858,
              "p95": 112517969.90899995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1571.1875,
              "median": 941.25,
              "min": 3.0,
              "max": 7189.5,
              "p5": 13.325000000000001,
              "p95": 5466.274999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3574678209941948,
              "median": 0.35688756674148225,
              "min": 0.21797050446133018,
              "max": 0.6359905638859137,
              "p5": 0.21823093938161164,
              "p95": 0.5472064629719388,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0032457418722365555,
              "median": 0.0027692053093815636,
              "min": 0.001076986982866866,
              "max": 0.006642108829882296,
              "p5": 0.0014136252315835346,
              "p95": 0.005812478225857052,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.631112801142649e-09,
              "median": 7.705990559811574e-10,
              "min": 9.598714543429525e-11,
              "max": 3.0064483120439544e-08,
              "p5": 1.6229873820318147e-10,
              "p95": 2.042016434768767e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029674636623650726,
              "median": 0.002064316998153081,
              "min": 4.2917989495157457e-07,
              "max": 0.007775123726444264,
              "p5": 2.7994237555425565e-06,
              "p95": 0.00735697916009574,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.5352195554138497,
              "median": 1.9582609478502433,
              "min": 1.0770572149604944,
              "max": 5.966060398078243,
              "p5": 1.1148431940544847,
              "p95": 5.230414471660537,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.10642377756471588,
            "market": 0.13255104778532756,
            "sector": -0.07271020565986053,
            "peers": -0.17713068024066558,
            "vs_market": -0.026127270220611676,
            "vs_sector": 0.1791339832245764,
            "vs_peers": 0.28355445780538147
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term trading looks balanced, with stronger bid depth than ask depth and a 3-tick spread supporting orderly access today.",
        "market_comparison": "The stock rose 1.0% while peers fell 0.5%, which matters because firmer price action can help keep interest in the name."
      },
      "30d": {
        "liquidity": "Monthly tradability is weak, with a 1M score of 66.7 against a peer median of 75.2, leaving access below the group.",
        "market_comparison": "The stock returned 7.3% compared with peers at -2.7%, which matters because stronger performance gives the tape a firmer backdrop than the sector."
      },
      "3m": {
        "liquidity": "Quarterly liquidity remains weak, with a 3M score of 67.6 compared with a peer median of 77.5, showing little improvement in access.",
        "market_comparison": "The stock fell 8.3% while peers fell 19.3%, which matters because relative resilience has been better than the group even as liquidity stayed behind."
      },
      "6m": {
        "liquidity": "Six-month tradability is weak and broadly stable, with a score of 67.5 against a peer median of 78.6 keeping the stock below its peer set.",
        "market_comparison": "The stock returned 10.6% compared with peers at -17.7%, which matters because returns have outperformed even though structural access remains thinner than peers."
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
          "median": 0.3801295988601146,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "38.0%",
          "display_range": null,
          "display_text": "38.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 38.0,
          "plain_english": "Market explains about 38.0% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.548190181445419,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "54.8%",
          "display_range": null,
          "display_text": "54.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 54.8,
          "plain_english": "Sector explains about 54.8% of price moves in the current state."
        },
        "company_share": {
          "median": 0.07168021969446656,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "7.2%",
          "display_range": null,
          "display_text": "7.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 7.2,
          "plain_english": "Company-specific explains about 7.2% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.3641938747389038,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.36",
          "display_range": null,
          "display_text": "0.36",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.36% stock move in the same direction in this state.",
          "value_num": 0.36
        },
        "beta_stock_lag": {
          "median": -0.4321923772950901,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.43",
          "display_range": null,
          "display_text": "-0.43",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.43
        },
        "beta_sector": {
          "median": -1.0982977104066185,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.10",
          "display_range": null,
          "display_text": "-1.10",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.10% stock move in the opposite direction in this state.",
          "value_num": -1.1
        },
        "beta_market_lag": {
          "median": 1.6847066866196958,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.68",
          "display_range": null,
          "display_text": "1.68",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.68
        },
        "beta_sector_lag": {
          "median": -1.810193510720913,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.81",
          "display_range": null,
          "display_text": "-1.81",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.81
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
          "period_label": "2025-04-16 to 2025-04-30",
          "n_obs": 9,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.44853451165027164,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.9%",
            "display_range": null,
            "display_text": "44.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
            "kind": "share_pct",
            "value_pct": 44.9,
            "plain_english": "Sector explains about 44.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.44180233565068044,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.2%",
              "display_range": null,
              "display_text": "44.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 44.2,
              "plain_english": "Market explains about 44.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.44853451165027164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.9%",
              "display_range": null,
              "display_text": "44.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 44.9,
              "plain_english": "Sector explains about 44.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.10966315269904803,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.0%",
              "display_range": null,
              "display_text": "11.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 11.0,
              "plain_english": "Company-specific explains about 11.0% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though sector-driven still has the largest share."
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
            "median": 0.49658006904737745,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.7%",
            "display_range": null,
            "display_text": "49.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 49.7,
            "plain_english": "Company-specific explains about 49.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2728355123871307,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.3%",
              "display_range": null,
              "display_text": "27.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.3,
              "plain_english": "Market explains about 27.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.23058441856549178,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.1%",
              "display_range": null,
              "display_text": "23.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 23.1,
              "plain_english": "Sector explains about 23.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.49658006904737745,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.7%",
              "display_range": null,
              "display_text": "49.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.7,
              "plain_english": "Company-specific explains about 49.7% of price moves in the current state."
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
            "median": 0.48357015027222794,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.4%",
            "display_range": null,
            "display_text": "48.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 48.4,
            "plain_english": "Company-specific explains about 48.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3279751387715093,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.8%",
              "display_range": null,
              "display_text": "32.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 32.8,
              "plain_english": "Market explains about 32.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18845471095626268,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.8%",
              "display_range": null,
              "display_text": "18.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 18.8,
              "plain_english": "Sector explains about 18.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48357015027222794,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.4%",
              "display_range": null,
              "display_text": "48.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.4,
              "plain_english": "Company-specific explains about 48.4% of price moves in the current state."
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
            "median": 0.5008234517522971,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.1%",
            "display_range": null,
            "display_text": "50.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 50.1,
            "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.35077796219238266,
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
              "plain_english": "Market explains about 35.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1483985860553203,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.8%",
              "display_range": null,
              "display_text": "14.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 14.8,
              "plain_english": "Sector explains about 14.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5008234517522971,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.1%",
              "display_range": null,
              "display_text": "50.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.1,
              "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
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
            "median": 0.6497538985383248,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.0%",
            "display_range": null,
            "display_text": "65.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 65.0,
            "plain_english": "Company-specific explains about 65.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2990499134041498,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.9%",
              "display_range": null,
              "display_text": "29.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 29.9,
              "plain_english": "Market explains about 29.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.05119618805752543,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.1%",
              "display_range": null,
              "display_text": "5.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 5.1,
              "plain_english": "Sector explains about 5.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6497538985383248,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.0%",
              "display_range": null,
              "display_text": "65.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 65.0,
              "plain_english": "Company-specific explains about 65.0% of price moves in the current state."
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
            "median": 0.5908857199349608,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.1%",
            "display_range": null,
            "display_text": "59.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 59.1,
            "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12345500450202974,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.3%",
              "display_range": null,
              "display_text": "12.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.3,
              "plain_english": "Market explains about 12.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2856592755630095,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.6%",
              "display_range": null,
              "display_text": "28.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.6,
              "plain_english": "Sector explains about 28.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5908857199349608,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.1%",
              "display_range": null,
              "display_text": "59.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 59.1,
              "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
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
            "median": 0.4742043242562581,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.4%",
            "display_range": null,
            "display_text": "47.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 47.4,
            "plain_english": "Market explains about 47.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4742043242562581,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Market explains about 47.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13641556961667814,
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
              "median": 0.38938010612706375,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.9%",
              "display_range": null,
              "display_text": "38.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 38.9,
              "plain_english": "Company-specific explains about 38.9% of price moves in the current state."
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
            "median": 0.5639588247684831,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.4%",
            "display_range": null,
            "display_text": "56.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 56.4,
            "plain_english": "Market explains about 56.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5639588247684831,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.4%",
              "display_range": null,
              "display_text": "56.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.4,
              "plain_english": "Market explains about 56.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14604157294403794,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.6%",
              "display_range": null,
              "display_text": "14.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 14.6,
              "plain_english": "Sector explains about 14.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.28999960228747884,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.0%",
              "display_range": null,
              "display_text": "29.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.0,
              "plain_english": "Company-specific explains about 29.0% of price moves in the current state."
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
            "median": 0.645341450172899,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.5%",
            "display_range": null,
            "display_text": "64.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 64.5,
            "plain_english": "Company-specific explains about 64.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2151243077841728,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.5%",
              "display_range": null,
              "display_text": "21.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 21.5,
              "plain_english": "Market explains about 21.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13953424204292808,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.0%",
              "display_range": null,
              "display_text": "14.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 14.0,
              "plain_english": "Sector explains about 14.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.645341450172899,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.5%",
              "display_range": null,
              "display_text": "64.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 64.5,
              "plain_english": "Company-specific explains about 64.5% of price moves in the current state."
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
            "median": 0.4792643398890535,
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
              "median": 0.1459391717148258,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.6%",
              "display_range": null,
              "display_text": "14.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 14.6,
              "plain_english": "Market explains about 14.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37479648839612056,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.5%",
              "display_range": null,
              "display_text": "37.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 37.5,
              "plain_english": "Sector explains about 37.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4792643398890535,
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
            "median": 0.4019534366807012,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.2%",
            "display_range": null,
            "display_text": "40.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 40.2,
            "plain_english": "Market explains about 40.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4019534366807012,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.2%",
              "display_range": null,
              "display_text": "40.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 40.2,
              "plain_english": "Market explains about 40.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2870279287110003,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.7%",
              "display_range": null,
              "display_text": "28.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 28.7,
              "plain_english": "Sector explains about 28.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3110186346082986,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.1%",
              "display_range": null,
              "display_text": "31.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 31.1,
              "plain_english": "Company-specific explains about 31.1% of price moves in the current state."
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
            "median": 0.39301363813234713,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.3%",
            "display_range": null,
            "display_text": "39.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 39.3,
            "plain_english": "Market explains about 39.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.39301363813234713,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.3%",
              "display_range": null,
              "display_text": "39.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.3,
              "plain_english": "Market explains about 39.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3668984645816529,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.7%",
              "display_range": null,
              "display_text": "36.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.7,
              "plain_english": "Sector explains about 36.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.24008789728599997,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.0%",
              "display_range": null,
              "display_text": "24.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.0,
              "plain_english": "Company-specific explains about 24.0% of price moves in the current state."
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
            "median": 0.49380207549010285,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.4%",
            "display_range": null,
            "display_text": "49.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 49.4,
            "plain_english": "Market explains about 49.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.49380207549010285,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.4%",
              "display_range": null,
              "display_text": "49.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 49.4,
              "plain_english": "Market explains about 49.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.23999742947783295,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.0%",
              "display_range": null,
              "display_text": "24.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 24.0,
              "plain_english": "Sector explains about 24.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.26620049503206417,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.6%",
              "display_range": null,
              "display_text": "26.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 26.6,
              "plain_english": "Company-specific explains about 26.6% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven."
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
            "median": 0.012305000841650472,
            "low": 0.012305000841650472,
            "high": 0.012305000841650472
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 8.857142857142858,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.022754214639951274,
            "low": 0.022754214639951274,
            "high": 0.022754214639951274
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
            0.11290322580645161,
            0.8870967741935484
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
            14.0,
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
        "market_link_display": "0.36",
        "sector_link_display": "-1.10",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.36% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.10% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.43",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 54.8,
        "driver_share_display": "54.8%",
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
            "median": 0.012305000841650472,
            "low": 0.012305000841650472,
            "high": 0.012305000841650472
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 8.857142857142858,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.022754214639951274,
            "low": 0.022754214639951274,
            "high": 0.022754214639951274
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
          0.11290322580645161,
          0.8870967741935484
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8951612903225806,
            0.10483870967741936
          ],
          [
            0.11290322580645161,
            0.8870967741935484
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
            14.0,
            110.0
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
        "text": "Liquidity score: 67.5 — Weak",
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
    "liq_subtitle": "Liquidity screens weak for size, with peer standing still the main constraint on access.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Performance has been strong, with the stock up 7.3% over one month compared with peers down 2.7% and the market up 6.2%.",
    "perf_insight": "The return backdrop is firmer than the liquidity backdrop. The stock has outperformed over one month, but the 6M liquidity score is 67.5 against a peer median of 78.6, which means stronger price performance is coming from a weaker access base than peers.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main driver of trading, accounting for 54.8% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 54.8% of price changes. Other influences are market 38.0%, and company-specific 7.2%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 38.0%, sector 54.8%, and company-specific 7.2%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently market-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 38.0%, sector 54.8%, and company-specific 7.2%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader group moves are still setting much of the tone, while displayed bid depth at 1.78x ask depth and a 3-tick spread point to orderly near-term trading.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors account for 54.8% of recent price moves.",
      "Monthly change: the pattern has shifted from more mixed in February and March to mostly market-driven in April, so the current read still looks externally led."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current market state is Low Volatility. The market has been in this state about 50.2% of the time. Based on 251 trading days relative to the 252-day target. This state looks more persistent, with a typical run length of about 8.9 days.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 6, 2025 to May 5, 2026 (241 trading days • 145,790 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Near-term trading looks balanced. Displayed bid depth is 1.78x ask depth and the spread is 3 ticks, which matters because the live book appears orderly despite weaker structural liquidity.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 28.5% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The displayed book is supportive in the near term, with stronger bid depth than ask depth and a contained spread.",
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
    "intraday_insight": "Session split is open 0.5%, continuous 87.2%, and close 6.1%. Current trading concentration score is 0.194.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by sector leadership and displayed depth than by short activity.",
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
    "exec_subtitle": "Liquidity is weak for its size.",
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
        "value": "67.5/100",
        "sub": "Peer median 78.6 (-11.1 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$7.9M",
        "sub": "Peer median HK$20.2M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.35%",
        "sub": "4.16 ticks; peers 0.28%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity remains weak relative to peers. The 6M score is 67.5 compared with a peer median of 78.6, which means the stock screens below peers on structural access for its size. Near-term conditions are more balanced than that longer-term standing implies, with displayed bid depth at 1.78x ask depth and a 3-tick spread, which matters because the current book looks orderly even as the broader liquidity profile stays behind peers.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "115.650",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.26%",
        "note": "3.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.78x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.17% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-1.42% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-4.30% with 91.9% fill.",
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
        "value": "67",
        "suffix": "/100",
        "bar_pct": 67,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 837/2570",
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
        "bar_pct": 4,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.35% • 4.16 ticks vs peers 0.28%",
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
        "value": "7.9M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$20.2M",
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
        "value": "54.8",
        "suffix": "sector",
        "bar_pct": 55,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 38.0% • Company 7.2%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the company’s size. The 6M liquidity score is 67.5 compared with a peer median of 78.6, which means access starts from a weaker base than comparable names.",
      "Price performance has been stronger than the main comparison groups. The stock returned +7.3% over one month, compared with -2.7% for peers and +6.2% for the market, which matters because the tape has a firmer return backdrop than peers despite weaker underlying liquidity.",
      "Near-term trading conditions look balanced. Displayed bid depth is 1.78x ask depth, the spread is 3 ticks, and sector factors account for 54.8% of trading, which matters because execution is orderly while broader group moves remain the main influence."
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
      "overall": "6M liquidity is weak: score 67.5 vs peer median 78.6 (-11.1 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 67.5 vs peer median 78.6 (-11.1 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -11.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 10.6%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: 10.6% vs market 13.3%.",
        "vs_sector": "Better than sector: 10.6% vs sector -7.3%.",
        "vs_peers": "Better than peers: 10.6% vs peers -17.7%."
      },
      "adv": {
        "insight": "ADV is HK$7.9M, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$7.9M vs market HK$207.3K.",
        "vs_sector": "Worse than sector: HK$7.9M vs sector HK$30.3M.",
        "vs_peers": "Worse than peers: HK$7.9M vs peers HK$20.2M."
      },
      "spread": {
        "insight": "Spread is 0.35%, better than market, but worse than sector and peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.35% vs market 2.71%.",
        "vs_sector": "Worse than sector: 0.35% vs sector 0.22%.",
        "vs_peers": "Worse than peers: 0.35% vs peers 0.28%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.00%, worse than market, sector, and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "Worse than market: 0.00% vs market 0.08%.",
        "vs_sector": "Worse than sector: 0.00% vs sector 0.30%.",
        "vs_peers": "Worse than peers: 0.00% vs peers 0.21%."
      },
      "volatility": {
        "insight": "Volatility is 32.37%, better than market, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 32.37% vs market 59.12%.",
        "vs_sector": "In line with sector: 32.37% vs sector 35.80%.",
        "vs_peers": "In line with peers: 32.37% vs peers 35.69%."
      },
      "trades": {
        "insight": "Trades is 264, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 264 vs market 20.",
        "vs_sector": "Worse than sector: 264 vs sector 1137.",
        "vs_peers": "Worse than peers: 264 vs peers 941."
      },
      "amihud": {
        "insight": "Price impact is 1.33e-09, better than market, but worse than sector and peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 1.33e-09 vs market 4.76e-08.",
        "vs_sector": "Worse than sector: 1.33e-09 vs sector 4.23e-10.",
        "vs_peers": "Worse than peers: 1.33e-09 vs peers 7.71e-10."
      }
    },
    "performance": {
      "overall": "Recent returns are strong, with the stock up 7.3% over one month compared with peers down 2.7% and ahead of the market at 6.2%. Liquidity does not fully confirm that strength because the 6M liquidity score of 67.5 sits 11.1 points below the peer median of 78.6, which means the rally is happening despite weaker access for the company’s size. The driver mix also points to a broader backdrop, with sector factors explaining 54.8% of trading, so the move looks more sector-linked than driven by company news alone.",
      "conclusion": "The recent outperformance looks real, but it appears more sector-linked than company-specific and is not fully backed by relative liquidity."
    },
    "drivers": {
      "overall": "Sector factors are the main force behind the stock now, accounting for 54.8% of recent price moves. That means current trading is being shaped more by the wider group than by company-specific news, which matters because the stock's recent strength is arriving in a market-led tape rather than on a standalone catalyst.",
      "beta": "Based on the last 5 trading days, current mix is market 38.0%, sector 54.8%, and company-specific 7.2%.",
      "rolling_change": "The monthly pattern has become more externally driven over time, moving from a more mixed backdrop in February and March to mostly market-driven in April. That suggests the current sector-led read is not a one-day anomaly, although the signal is still mixed rather than fully settled."
    },
    "regime": {
      "overall": "The market is in a calmer phase, and that matters because trading conditions are usually more orderly when volatility stays low for more than a few days. The picture is still mixed because monthly liquidity remains weak for the stock's size.",
      "current": "Low volatility is the active state, pointing to a steadier tape than a high-volatility backdrop would imply.",
      "transitions": "This phase looks reasonably stable rather than short-lived, with a typical run length of about 8.9 days.",
      "trading_implications": "That steadier state supports more predictable trading conditions, and the current order book also looks balanced with bid depth at 1.78 times ask depth and a 3-tick spread."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced on screen, with bid depth at 1.78x ask depth and a 3 tick spread. That matters because the immediate book shows usable two-way interest even though the wider liquidity profile is not strong for its size.",
      "concern": "Trade-size percentiles use May 6, 2025 to May 5, 2026 history (241 trading days • 145,790 trades).",
      "peer_context": "The displayed book is more supportive than the broader peer picture, because the six-month liquidity score of 67.5 sits 11.1 points below the peer median of 78.6 while the live book appears balanced. That matters because the weaker structural ranking is not being fully reinforced by current displayed depth."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 37.0% of trade count and 49.7% of trade value, compared with retail-like trades at 31.8% of count and 17.4% of value. That gap in value matters because the larger share of value is coming from institution-like flow, not just a higher number of prints.",
      "institutional_gap": "The institutional lead is clearer in trade value than in trade count, with a 32.3 point value gap compared with a 5.2 point count gap. That matters because the larger tickets are aligning with the institution-like read.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the signal is mixed because the trader read is partly obscured by unclear Ambiguous or unclear flow is 15.6% of trade count, so the read is not fully clean. The cleaner signal is the institution-like share of trade value at 49.7% compared with 17.4% for retail-like flow. That matters because the larger value behind the tape is more consistent with institution-like participation than with retail-driven price moves.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not stand out as a separate driver of trading conditions.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short trend is not showing a clear change that alters the broader picture. With the stock still outperforming and displayed bid depth running at 1.78 times ask depth despite a 3 tick spread, current conditions point more to underlying market support than to rising short activity.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.5%, continuous 87.2%, and close 6.1%. Current trading concentration score is 0.194.",
      "hhi_interpretation": "A concentration score of 0.194 points to activity being reasonably spread through the session rather than packed into a few moments. That matters because access looks less dependent on narrow time windows.",
      "best_times": "The continuous session is the clearest source of liquidity because it carries 87.2% of activity. That matters more than the open or close, where participation is much lighter.",
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
        "1828",
        "945",
        "376",
        "82318",
        "1508",
        "6963",
        "81299",
        "6060"
      ],
      "scores": [
        67.47081712062257,
        77.1206225680934,
        59.53307392996109,
        80.9727626459144,
        59.10505836575876,
        80.07782101167315,
        86.84824902723736,
        36.10894941634241,
        95.17509727626458
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
        7871677.5,
        11601638.0,
        3392360.0,
        28842920.0,
        4622993.636449425,
        30258669.785,
        48105238.239999995,
        362324.3353905503,
        147201748.5
      ],
      "total": 2570
    },
    "market_comparison": {
      "sector_name": "Insurance",
      "sector_count": 21,
      "market_count": 2570,
      "company": {
        "volatility": 0.3237076081130601,
        "adv": 7871677.5,
        "spread_pct": 0.0035401170946083383,
        "turnover_ratio": 2.695004673061857e-05,
        "amihud": 1.330364410805972e-09,
        "trades": 264.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7416606057286959,
          "median": 0.5912170545820724,
          "min": 0.0,
          "max": 33.69155621232454,
          "p5": 0.22348888921203908,
          "p95": 1.5809927341651657,
          "count": 2569
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 55229928.17930393,
          "median": 207318.75,
          "min": 0.0,
          "max": 11376396450.0,
          "p5": 0.0,
          "p95": 209657798.41999984,
          "count": 2570
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04217445621348828,
          "median": 0.027138195265564782,
          "min": 0.0005747861018128454,
          "max": 0.586235634471959,
          "p5": 0.0014165617123665353,
          "p95": 0.13479365462597875,
          "count": 2570
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003488285187683442,
          "median": 0.0008330789487093023,
          "min": 0.0,
          "max": 0.20377282466782026,
          "p5": 0.0,
          "p95": 0.013754188819693645,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.354611216137465e-07,
          "median": 4.75800576131515e-08,
          "min": 0.0,
          "max": 2.024037584382411e-05,
          "p5": 5.146952110101268e-11,
          "p95": 3.475302158416067e-06,
          "count": 2570
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1010.6484435797665,
          "median": 19.5,
          "min": 0.0,
          "max": 88929.0,
          "p5": 0.0,
          "p95": 5614.799999999963,
          "count": 2570
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.43444582029548695,
          "median": 0.35797086670343664,
          "min": 0.21797050446133018,
          "max": 1.9571164205487641,
          "p5": 0.2187146042335629,
          "p95": 0.6359905638859137,
          "count": 21
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 395133650.2327066,
          "median": 30258669.785,
          "min": 0.0,
          "max": 2286237750.3,
          "p5": 50320.0,
          "p95": 2106529895.55,
          "count": 21
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.00851839082400369,
          "median": 0.0021718878586147747,
          "min": 0.0006765261455938876,
          "max": 0.05035057826935165,
          "p5": 0.0008478694874768748,
          "p95": 0.03724201108557803,
          "count": 21
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0037603251067991946,
          "median": 0.002980167291234769,
          "min": 0.0,
          "max": 0.010445971514741054,
          "p5": 4.2917989495157457e-07,
          "p95": 0.009905727432507984,
          "count": 21
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.3581301941882305e-08,
          "median": 4.2320166367483765e-10,
          "min": 4.883409595552578e-12,
          "max": 1.479553823217473e-07,
          "p5": 7.214710232545567e-12,
          "p95": 1.4526121598163848e-07,
          "count": 21
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 4964.285714285715,
          "median": 1137.0,
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
          "mean": 34298486.562105,
          "median": 20222279.0,
          "min": 362324.3353905503,
          "max": 147201748.5,
          "p5": 1422836.818003858,
          "p95": 112517969.90899995,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1571.1875,
          "median": 941.25,
          "min": 3.0,
          "max": 7189.5,
          "p5": 13.325000000000001,
          "p95": 5466.274999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3574678209941948,
          "median": 0.35688756674148225,
          "min": 0.21797050446133018,
          "max": 0.6359905638859137,
          "p5": 0.21823093938161164,
          "p95": 0.5472064629719388,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0032457418722365555,
          "median": 0.0027692053093815636,
          "min": 0.001076986982866866,
          "max": 0.006642108829882296,
          "p5": 0.0014136252315835346,
          "p95": 0.005812478225857052,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.631112801142649e-09,
          "median": 7.705990559811574e-10,
          "min": 9.598714543429525e-11,
          "max": 3.0064483120439544e-08,
          "p5": 1.6229873820318147e-10,
          "p95": 2.042016434768767e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0029674636623650726,
          "median": 0.002064316998153081,
          "min": 4.2917989495157457e-07,
          "max": 0.007775123726444264,
          "p5": 2.7994237555425565e-06,
          "p95": 0.00735697916009574,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.5352195554138497,
          "median": 1.9582609478502433,
          "min": 1.0770572149604944,
          "max": 5.966060398078243,
          "p5": 1.1148431940544847,
          "p95": 5.230414471660537,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.07348837209302217,
        "market": 0.061637587977822816,
        "sector": 0.0369669548770839,
        "peers": -0.027075209681488355
      },
      {
        "horizon": "3M",
        "stock": -0.08339952343129542,
        "market": 0.04184276437556522,
        "sector": -0.11921446832342297,
        "peers": -0.1928598352178036
      },
      {
        "horizon": "6M",
        "stock": 0.10642377756471588,
        "market": 0.13255104778532756,
        "sector": -0.07271020565986053,
        "peers": -0.17713068024066558
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
      "share_market": 0.3801295988601146,
      "share_sector": 0.548190181445419,
      "share_idio": 0.07168021969446656,
      "beta_market": 0.3641938747389038,
      "beta_sector": -1.0982977104066185,
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
            "median": 0.3801295988601146,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.0%",
            "display_range": null,
            "display_text": "38.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 38.0,
            "plain_english": "Market explains about 38.0% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.548190181445419,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.8%",
            "display_range": null,
            "display_text": "54.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 54.8,
            "plain_english": "Sector explains about 54.8% of price moves in the current state."
          },
          "company_share": {
            "median": 0.07168021969446656,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "7.2%",
            "display_range": null,
            "display_text": "7.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 7.2,
            "plain_english": "Company-specific explains about 7.2% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.3641938747389038,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.36",
            "display_range": null,
            "display_text": "0.36",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.36% stock move in the same direction in this state.",
            "value_num": 0.36
          },
          "beta_stock_lag": {
            "median": -0.4321923772950901,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.43",
            "display_range": null,
            "display_text": "-0.43",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.43
          },
          "beta_sector": {
            "median": -1.0982977104066185,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.10",
            "display_range": null,
            "display_text": "-1.10",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.10% stock move in the opposite direction in this state.",
            "value_num": -1.1
          },
          "beta_market_lag": {
            "median": 1.6847066866196958,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.68",
            "display_range": null,
            "display_text": "1.68",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.68
          },
          "beta_sector_lag": {
            "median": -1.810193510720913,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.81",
            "display_range": null,
            "display_text": "-1.81",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.81
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
            "period_label": "2025-04-16 to 2025-04-30",
            "n_obs": 9,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.44853451165027164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.9%",
              "display_range": null,
              "display_text": "44.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 44.9,
              "plain_english": "Sector explains about 44.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.44180233565068044,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.2%",
                "display_range": null,
                "display_text": "44.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 44.2,
                "plain_english": "Market explains about 44.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.44853451165027164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.9%",
                "display_range": null,
                "display_text": "44.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 44.9,
                "plain_english": "Sector explains about 44.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.10966315269904803,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.0%",
                "display_range": null,
                "display_text": "11.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 11.0,
                "plain_english": "Company-specific explains about 11.0% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though sector-driven still has the largest share."
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
              "median": 0.49658006904737745,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.7%",
              "display_range": null,
              "display_text": "49.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.7,
              "plain_english": "Company-specific explains about 49.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2728355123871307,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.3%",
                "display_range": null,
                "display_text": "27.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.3,
                "plain_english": "Market explains about 27.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.23058441856549178,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.1%",
                "display_range": null,
                "display_text": "23.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 23.1,
                "plain_english": "Sector explains about 23.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.49658006904737745,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.7%",
                "display_range": null,
                "display_text": "49.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 49.7,
                "plain_english": "Company-specific explains about 49.7% of price moves in the current state."
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
              "median": 0.48357015027222794,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.4%",
              "display_range": null,
              "display_text": "48.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.4,
              "plain_english": "Company-specific explains about 48.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3279751387715093,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.8%",
                "display_range": null,
                "display_text": "32.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 32.8,
                "plain_english": "Market explains about 32.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18845471095626268,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.8%",
                "display_range": null,
                "display_text": "18.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 18.8,
                "plain_english": "Sector explains about 18.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48357015027222794,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.4%",
                "display_range": null,
                "display_text": "48.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 48.4,
                "plain_english": "Company-specific explains about 48.4% of price moves in the current state."
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
              "median": 0.5008234517522971,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.1%",
              "display_range": null,
              "display_text": "50.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.1,
              "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.35077796219238266,
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
                "plain_english": "Market explains about 35.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1483985860553203,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.8%",
                "display_range": null,
                "display_text": "14.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 14.8,
                "plain_english": "Sector explains about 14.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5008234517522971,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.1%",
                "display_range": null,
                "display_text": "50.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 50.1,
                "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
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
              "median": 0.6497538985383248,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.0%",
              "display_range": null,
              "display_text": "65.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 65.0,
              "plain_english": "Company-specific explains about 65.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2990499134041498,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.9%",
                "display_range": null,
                "display_text": "29.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 29.9,
                "plain_english": "Market explains about 29.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.05119618805752543,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.1%",
                "display_range": null,
                "display_text": "5.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 5.1,
                "plain_english": "Sector explains about 5.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6497538985383248,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "65.0%",
                "display_range": null,
                "display_text": "65.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 65.0,
                "plain_english": "Company-specific explains about 65.0% of price moves in the current state."
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
              "median": 0.5908857199349608,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.1%",
              "display_range": null,
              "display_text": "59.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 59.1,
              "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12345500450202974,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.3%",
                "display_range": null,
                "display_text": "12.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.3,
                "plain_english": "Market explains about 12.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2856592755630095,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.6%",
                "display_range": null,
                "display_text": "28.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.6,
                "plain_english": "Sector explains about 28.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5908857199349608,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.1%",
                "display_range": null,
                "display_text": "59.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 59.1,
                "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
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
              "median": 0.4742043242562581,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Market explains about 47.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4742043242562581,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.4%",
                "display_range": null,
                "display_text": "47.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 47.4,
                "plain_english": "Market explains about 47.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13641556961667814,
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
                "median": 0.38938010612706375,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.9%",
                "display_range": null,
                "display_text": "38.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 38.9,
                "plain_english": "Company-specific explains about 38.9% of price moves in the current state."
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
              "median": 0.5639588247684831,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.4%",
              "display_range": null,
              "display_text": "56.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.4,
              "plain_english": "Market explains about 56.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5639588247684831,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.4%",
                "display_range": null,
                "display_text": "56.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 56.4,
                "plain_english": "Market explains about 56.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14604157294403794,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.6%",
                "display_range": null,
                "display_text": "14.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 14.6,
                "plain_english": "Sector explains about 14.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.28999960228747884,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.0%",
                "display_range": null,
                "display_text": "29.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.0,
                "plain_english": "Company-specific explains about 29.0% of price moves in the current state."
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
              "median": 0.645341450172899,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.5%",
              "display_range": null,
              "display_text": "64.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 64.5,
              "plain_english": "Company-specific explains about 64.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2151243077841728,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.5%",
                "display_range": null,
                "display_text": "21.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 21.5,
                "plain_english": "Market explains about 21.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13953424204292808,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.0%",
                "display_range": null,
                "display_text": "14.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 14.0,
                "plain_english": "Sector explains about 14.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.645341450172899,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.5%",
                "display_range": null,
                "display_text": "64.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 64.5,
                "plain_english": "Company-specific explains about 64.5% of price moves in the current state."
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
              "median": 0.4792643398890535,
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
                "median": 0.1459391717148258,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.6%",
                "display_range": null,
                "display_text": "14.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 14.6,
                "plain_english": "Market explains about 14.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37479648839612056,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.5%",
                "display_range": null,
                "display_text": "37.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 37.5,
                "plain_english": "Sector explains about 37.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4792643398890535,
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
              "median": 0.4019534366807012,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.2%",
              "display_range": null,
              "display_text": "40.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 40.2,
              "plain_english": "Market explains about 40.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4019534366807012,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.2%",
                "display_range": null,
                "display_text": "40.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 40.2,
                "plain_english": "Market explains about 40.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2870279287110003,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.7%",
                "display_range": null,
                "display_text": "28.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 28.7,
                "plain_english": "Sector explains about 28.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3110186346082986,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.1%",
                "display_range": null,
                "display_text": "31.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 31.1,
                "plain_english": "Company-specific explains about 31.1% of price moves in the current state."
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
              "median": 0.39301363813234713,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.3%",
              "display_range": null,
              "display_text": "39.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.3,
              "plain_english": "Market explains about 39.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.39301363813234713,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.3%",
                "display_range": null,
                "display_text": "39.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 39.3,
                "plain_english": "Market explains about 39.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3668984645816529,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.7%",
                "display_range": null,
                "display_text": "36.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.7,
                "plain_english": "Sector explains about 36.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.24008789728599997,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.0%",
                "display_range": null,
                "display_text": "24.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.0,
                "plain_english": "Company-specific explains about 24.0% of price moves in the current state."
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
              "median": 0.49380207549010285,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.4%",
              "display_range": null,
              "display_text": "49.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 49.4,
              "plain_english": "Market explains about 49.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.49380207549010285,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.4%",
                "display_range": null,
                "display_text": "49.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 49.4,
                "plain_english": "Market explains about 49.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.23999742947783295,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.0%",
                "display_range": null,
                "display_text": "24.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 24.0,
                "plain_english": "Sector explains about 24.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.26620049503206417,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.6%",
                "display_range": null,
                "display_text": "26.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 26.6,
                "plain_english": "Company-specific explains about 26.6% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven."
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
              "median": 0.012305000841650472,
              "low": 0.012305000841650472,
              "high": 0.012305000841650472
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 8.857142857142858,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.022754214639951274,
              "low": 0.022754214639951274,
              "high": 0.022754214639951274
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
              0.11290322580645161,
              0.8870967741935484
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
              14.0,
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
          "market_link_display": "0.36",
          "sector_link_display": "-1.10",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.36% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.10% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.43",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 54.8,
          "driver_share_display": "54.8%",
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
          "period_label": "2025-04-16 to 2025-04-30",
          "n_obs": 9,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.44180233565068044,
          "share_sector": 0.44853451165027164,
          "share_company": 0.10966315269904803,
          "share_market_display": "44.2%",
          "share_sector_display": "44.9%",
          "share_company_display": "11.0%",
          "dominant_share_display": "44.9%"
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
          "share_market": 0.2728355123871307,
          "share_sector": 0.23058441856549178,
          "share_company": 0.49658006904737745,
          "share_market_display": "27.3%",
          "share_sector_display": "23.1%",
          "share_company_display": "49.7%",
          "dominant_share_display": "49.7%"
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
          "share_market": 0.3279751387715093,
          "share_sector": 0.18845471095626268,
          "share_company": 0.48357015027222794,
          "share_market_display": "32.8%",
          "share_sector_display": "18.8%",
          "share_company_display": "48.4%",
          "dominant_share_display": "48.4%"
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
          "share_market": 0.35077796219238266,
          "share_sector": 0.1483985860553203,
          "share_company": 0.5008234517522971,
          "share_market_display": "35.1%",
          "share_sector_display": "14.8%",
          "share_company_display": "50.1%",
          "dominant_share_display": "50.1%"
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
          "share_market": 0.2990499134041498,
          "share_sector": 0.05119618805752543,
          "share_company": 0.6497538985383248,
          "share_market_display": "29.9%",
          "share_sector_display": "5.1%",
          "share_company_display": "65.0%",
          "dominant_share_display": "65.0%"
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
          "share_market": 0.12345500450202974,
          "share_sector": 0.2856592755630095,
          "share_company": 0.5908857199349608,
          "share_market_display": "12.3%",
          "share_sector_display": "28.6%",
          "share_company_display": "59.1%",
          "dominant_share_display": "59.1%"
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
          "share_market": 0.4742043242562581,
          "share_sector": 0.13641556961667814,
          "share_company": 0.38938010612706375,
          "share_market_display": "47.4%",
          "share_sector_display": "13.6%",
          "share_company_display": "38.9%",
          "dominant_share_display": "47.4%"
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
          "share_market": 0.5639588247684831,
          "share_sector": 0.14604157294403794,
          "share_company": 0.28999960228747884,
          "share_market_display": "56.4%",
          "share_sector_display": "14.6%",
          "share_company_display": "29.0%",
          "dominant_share_display": "56.4%"
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
          "share_market": 0.2151243077841728,
          "share_sector": 0.13953424204292808,
          "share_company": 0.645341450172899,
          "share_market_display": "21.5%",
          "share_sector_display": "14.0%",
          "share_company_display": "64.5%",
          "dominant_share_display": "64.5%"
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
          "share_market": 0.1459391717148258,
          "share_sector": 0.37479648839612056,
          "share_company": 0.4792643398890535,
          "share_market_display": "14.6%",
          "share_sector_display": "37.5%",
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
          "share_market": 0.4019534366807012,
          "share_sector": 0.2870279287110003,
          "share_company": 0.3110186346082986,
          "share_market_display": "40.2%",
          "share_sector_display": "28.7%",
          "share_company_display": "31.1%",
          "dominant_share_display": "40.2%"
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
          "share_market": 0.39301363813234713,
          "share_sector": 0.3668984645816529,
          "share_company": 0.24008789728599997,
          "share_market_display": "39.3%",
          "share_sector_display": "36.7%",
          "share_company_display": "24.0%",
          "dominant_share_display": "39.3%"
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
          "share_market": 0.49380207549010285,
          "share_sector": 0.23999742947783295,
          "share_company": 0.26620049503206417,
          "share_market_display": "49.4%",
          "share_sector_display": "24.0%",
          "share_company_display": "26.6%",
          "dominant_share_display": "49.4%"
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
              "median": 0.012305000841650472,
              "low": 0.012305000841650472,
              "high": 0.012305000841650472
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 8.857142857142858,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.022754214639951274,
              "low": 0.022754214639951274,
              "high": 0.022754214639951274
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
            0.11290322580645161,
            0.8870967741935484
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 115.5,
          "quantity": 500.0,
          "value": 57750.0
        },
        {
          "level": 2,
          "price": 115.4,
          "quantity": 3000.0,
          "value": 346200.0
        },
        {
          "level": 3,
          "price": 115.0,
          "quantity": 100.0,
          "value": 11500.0
        },
        {
          "level": 4,
          "price": 114.7,
          "quantity": 100.0,
          "value": 11470.0
        },
        {
          "level": 5,
          "price": 114.6,
          "quantity": 50.0,
          "value": 5730.0
        },
        {
          "level": 6,
          "price": 114.5,
          "quantity": 200.0,
          "value": 22900.0
        },
        {
          "level": 7,
          "price": 114.4,
          "quantity": 300.0,
          "value": 34320.0
        },
        {
          "level": 8,
          "price": 114.2,
          "quantity": 200.0,
          "value": 22840.0
        },
        {
          "level": 9,
          "price": 114.1,
          "quantity": 200.0,
          "value": 22820.0
        },
        {
          "level": 10,
          "price": 114.0,
          "quantity": 200.0,
          "value": 22800.0
        },
        {
          "level": 11,
          "price": 113.9,
          "quantity": 200.0,
          "value": 22780.0
        },
        {
          "level": 12,
          "price": 113.8,
          "quantity": 200.0,
          "value": 22760.0
        },
        {
          "level": 13,
          "price": 113.7,
          "quantity": 300.0,
          "value": 34110.0
        },
        {
          "level": 14,
          "price": 113.3,
          "quantity": 100.0,
          "value": 11330.0
        },
        {
          "level": 15,
          "price": 113.0,
          "quantity": 200.0,
          "value": 22600.0
        },
        {
          "level": 16,
          "price": 112.9,
          "quantity": 500.0,
          "value": 56450.0
        },
        {
          "level": 17,
          "price": 112.7,
          "quantity": 100.0,
          "value": 11270.0
        },
        {
          "level": 18,
          "price": 112.4,
          "quantity": 100.0,
          "value": 11240.0
        },
        {
          "level": 19,
          "price": 112.3,
          "quantity": 1000.0,
          "value": 112300.0
        },
        {
          "level": 20,
          "price": 112.2,
          "quantity": 200.0,
          "value": 22440.0
        },
        {
          "level": 21,
          "price": 112.0,
          "quantity": 4000.0,
          "value": 448000.0
        },
        {
          "level": 22,
          "price": 111.1,
          "quantity": 300.0,
          "value": 33330.0
        },
        {
          "level": 23,
          "price": 111.0,
          "quantity": 450.0,
          "value": 49950.0
        },
        {
          "level": 24,
          "price": 110.5,
          "quantity": 500.0,
          "value": 55250.0
        },
        {
          "level": 25,
          "price": 110.3,
          "quantity": 1000.0,
          "value": 110300.0
        },
        {
          "level": 26,
          "price": 110.2,
          "quantity": 500.0,
          "value": 55100.0
        },
        {
          "level": 27,
          "price": 110.0,
          "quantity": 1250.0,
          "value": 137500.0
        },
        {
          "level": 28,
          "price": 109.0,
          "quantity": 600.0,
          "value": 65400.0
        },
        {
          "level": 29,
          "price": 108.0,
          "quantity": 100.0,
          "value": 10800.0
        },
        {
          "level": 30,
          "price": 107.8,
          "quantity": 200.0,
          "value": 21560.0
        },
        {
          "level": 31,
          "price": 105.5,
          "quantity": 700.0,
          "value": 73850.0
        },
        {
          "level": 32,
          "price": 105.0,
          "quantity": 600.0,
          "value": 63000.0
        },
        {
          "level": 33,
          "price": 104.8,
          "quantity": 500.0,
          "value": 52400.0
        },
        {
          "level": 34,
          "price": 104.0,
          "quantity": 500.0,
          "value": 52000.0
        },
        {
          "level": 35,
          "price": 103.2,
          "quantity": 400.0,
          "value": 41280.0
        },
        {
          "level": 36,
          "price": 101.0,
          "quantity": 1000.0,
          "value": 101000.0
        },
        {
          "level": 37,
          "price": 100.6,
          "quantity": 400.0,
          "value": 40240.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 115.8,
          "quantity": 850.0,
          "value": 98430.0
        },
        {
          "level": 2,
          "price": 116.1,
          "quantity": 3500.0,
          "value": 406350.0
        },
        {
          "level": 3,
          "price": 116.2,
          "quantity": 600.0,
          "value": 69720.0
        },
        {
          "level": 4,
          "price": 116.3,
          "quantity": 300.0,
          "value": 34890.0
        },
        {
          "level": 5,
          "price": 116.4,
          "quantity": 500.0,
          "value": 58200.0
        },
        {
          "level": 6,
          "price": 116.5,
          "quantity": 600.0,
          "value": 69900.0
        },
        {
          "level": 7,
          "price": 116.6,
          "quantity": 300.0,
          "value": 34980.0
        },
        {
          "level": 8,
          "price": 116.8,
          "quantity": 200.0,
          "value": 23360.0
        },
        {
          "level": 9,
          "price": 116.9,
          "quantity": 300.0,
          "value": 35070.0
        },
        {
          "level": 10,
          "price": 117.0,
          "quantity": 200.0,
          "value": 23400.0
        },
        {
          "level": 11,
          "price": 117.2,
          "quantity": 300.0,
          "value": 35160.0
        },
        {
          "level": 12,
          "price": 117.4,
          "quantity": 100.0,
          "value": 11740.0
        },
        {
          "level": 13,
          "price": 117.7,
          "quantity": 100.0,
          "value": 11770.0
        },
        {
          "level": 14,
          "price": 117.9,
          "quantity": 100.0,
          "value": 11790.0
        },
        {
          "level": 15,
          "price": 119.1,
          "quantity": 100.0,
          "value": 11910.0
        },
        {
          "level": 16,
          "price": 119.5,
          "quantity": 1050.0,
          "value": 125475.0
        },
        {
          "level": 17,
          "price": 120.0,
          "quantity": 1000.0,
          "value": 120000.0
        },
        {
          "level": 18,
          "price": 122.0,
          "quantity": 650.0,
          "value": 79300.0
        },
        {
          "level": 19,
          "price": 126.0,
          "quantity": 100.0,
          "value": 12600.0
        },
        {
          "level": 20,
          "price": 126.1,
          "quantity": 50.0,
          "value": 6305.0
        },
        {
          "level": 21,
          "price": 131.0,
          "quantity": 50.0,
          "value": 6550.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-05 07:59:58.138000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 115.65,
        "spread_pct": 0.002594033722438367,
        "spread_ticks": 3.0,
        "tick_size": 0.1,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2296570.0,
        "ask_depth_notional_displayed": 1286900.0,
        "bid_depth_notional_top10": 2296570.0,
        "ask_depth_notional_top10": 1286900.0,
        "bid_ask_depth_ratio": 1.7846
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 241,
        "n_trades_used": 145790,
        "first_trade_date": "2025-05-06",
        "last_trade_date": "2026-05-05",
        "window_label": "May 6, 2025 to May 5, 2026",
        "window_short_label": "May 6, 2025 to May 5, 2026",
        "trade_days_label": "241 trading days",
        "trade_count_label": "145,790 trades",
        "window_detail_label": "241 trading days • 145,790 trades",
        "history_note": "Trade-size percentiles use May 6, 2025 to May 5, 2026 history (241 trading days • 145,790 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 35260.0,
            "impact_pct": -0.0012970000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.54,
            "pct_of_adv": 0.5
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 54400.0,
            "impact_pct": -0.0012970000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.37,
            "pct_of_adv": 0.77
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 8262035.44,
            "impact_pct": -0.042991,
            "filled_pct": 27.8,
            "levels_consumed": 37,
            "pct_of_bid_depth": 359.76,
            "pct_of_adv": 116.31
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
            "order_id": "16032771",
            "timestamp": "2026-05-05 01:20:20.888000000",
            "local_timestamp": "2026-05-05 09:20:20",
            "posted_price": 116.5,
            "size_shares": 10500.0,
            "notional": 1223250.0,
            "impact_pct": -0.017415,
            "filled_pct": 100.0,
            "levels_consumed": 21,
            "pct_of_bid_depth": 53.26,
            "price_vs_mid_pct": 0.735,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "3345098499",
            "timestamp": "2026-05-05 07:59:30.515000000",
            "local_timestamp": "2026-05-05 15:59:30",
            "posted_price": 116.1,
            "size_shares": 3000.0,
            "notional": 348300.0,
            "impact_pct": -0.0020180000000000003,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 15.17,
            "price_vs_mid_pct": 0.389,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "3310446851",
            "timestamp": "2026-05-05 07:55:02.318000000",
            "local_timestamp": "2026-05-05 15:55:02",
            "posted_price": 116.0,
            "size_shares": 3000.0,
            "notional": 348000.0,
            "impact_pct": -0.0020180000000000003,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 15.15,
            "price_vs_mid_pct": 0.303,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-05",
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
            "spread_pct": 0.0061919504643963095,
            "spread_ticks": 7.000000000000028,
            "bid_depth_notional": 1323380.0,
            "ask_depth_notional": 735200.0,
            "mid_price": 113.05000000000001
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.00264666960741065,
            "spread_ticks": 2.9999999999999716,
            "bid_depth_notional": 1578620.0,
            "ask_depth_notional": 955680.0,
            "mid_price": 113.35
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.001759014951627114,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 1658255.0,
            "ask_depth_notional": 951300.0,
            "mid_price": 113.69999999999999
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.002637362637362737,
            "spread_ticks": 3.0000000000001137,
            "bid_depth_notional": 1703730.0,
            "ask_depth_notional": 871785.0,
            "mid_price": 113.75
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0035180299032542277,
            "spread_ticks": 4.000000000000057,
            "bid_depth_notional": 1198290.0,
            "ask_depth_notional": 734175.0,
            "mid_price": 113.7
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0008722197993895204,
            "spread_ticks": 1.0000000000000853,
            "bid_depth_notional": 1786560.0,
            "ask_depth_notional": 875575.0,
            "mid_price": 114.65
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.003493449781659438,
            "spread_ticks": 4.000000000000057,
            "bid_depth_notional": 1713335.0,
            "ask_depth_notional": 973200.0,
            "mid_price": 114.5
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0026212319790301195,
            "spread_ticks": 2.9999999999999716,
            "bid_depth_notional": 1763340.0,
            "ask_depth_notional": 771080.0,
            "mid_price": 114.44999999999999
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.004387889425186485,
            "spread_ticks": 5.0,
            "bid_depth_notional": 1600860.0,
            "ask_depth_notional": 1137535.0,
            "mid_price": 113.95
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.001742160278745669,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 2870840.0,
            "ask_depth_notional": 981180.0,
            "mid_price": 114.80000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.002594033722438367,
            "spread_ticks": 2.9999999999999716,
            "bid_depth_notional": 2296570.0,
            "ask_depth_notional": 1286900.0,
            "mid_price": 115.65
          }
        ],
        "summary": {
          "median_spread_pct": 0.002637362637362737,
          "median_spread_ticks": 2.9999999999999716,
          "median_bid_depth_notional": 1703730.0,
          "median_ask_depth_notional": 951300.0,
          "tightest_bucket": "13:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "11:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.7,
      "peers": [
        {
          "ticker": "6060",
          "pct": 1.1
        },
        {
          "ticker": "6963",
          "pct": 1.8
        },
        {
          "ticker": "1508",
          "pct": 2.6
        },
        {
          "ticker": "376",
          "pct": 9.0
        },
        {
          "ticker": "1828",
          "pct": 16.7
        },
        {
          "ticker": "945",
          "pct": 21.3
        },
        {
          "ticker": "82318",
          "pct": 27.0
        },
        {
          "ticker": "81299",
          "pct": 492.6
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 1100,
          "n_runs": 288,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-05",
          "last_trade_date": "2026-05-05",
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
            "retail_pct": 0.2190909090909091,
            "mixed_pct": 0.1290909090909091,
            "instit_pct": 0.4036363636363636,
            "ambiguous_pct": 0.24818181818181817,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24818181818181817,
            "retail_qty_pct": 0.14787271306550265,
            "mixed_qty_pct": 0.15021690512758332,
            "instit_qty_pct": 0.48601568183655325,
            "ambiguous_qty_pct": 0.2158946999703608,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2158946999703608,
            "retail_notional_pct": 0.14774554692463537,
            "mixed_notional_pct": 0.14983915778954712,
            "instit_notional_pct": 0.4860879644664825,
            "ambiguous_notional_pct": 0.21632733081933495,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21632733081933495
          },
          "run_composition": {
            "retail_pct": 0.3958333333333333,
            "mixed_pct": 0.1527777777777778,
            "instit_pct": 0.2777777777777778,
            "ambiguous_pct": 0.1736111111111111,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1736111111111111,
            "retail_notional_pct": 0.09634677437321224,
            "mixed_notional_pct": 0.11676224015476852,
            "instit_notional_pct": 0.6479267796630539,
            "unclear_notional_pct": 0.1389642058089653
          },
          "counts": {
            "trades": {
              "retail": 241,
              "mixed": 142,
              "institutional": 444,
              "ambiguous": 273,
              "unobservable": 0,
              "unclear": 273
            },
            "runs": {
              "retail": 114,
              "mixed": 44,
              "institutional": 80,
              "ambiguous": 50,
              "unobservable": 0,
              "unclear": 50
            }
          },
          "confidence": {
            "high": 0.6736111111111112,
            "medium": 0.1527777777777778,
            "low": 0.1736111111111111,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 194,
            "medium": 44,
            "low": 50,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5,
            "medium": 0.11363636363636363,
            "low": 0.38636363636363635,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 550,
            "medium": 125,
            "low": 425,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8838541666666665,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1736111111111111,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.3958333333333333,
          "dominance_gap": 0.11805555555555552,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 503,
              "UNOBSERVABLE": 308,
              "WALK_BOOK": 289
            },
            "d2_information": {
              "UNOBSERVABLE": 1100
            },
            "d3_urgency": {
              "UNOBSERVABLE": 288
            },
            "participant_confidence": {
              "HIGH": 194,
              "LOW": 50,
              "MEDIUM": 44
            }
          },
          "trade_size": {
            "avg": 15372.180272727273,
            "median": 11240.0
          },
          "run_size": {
            "avg": 42065.68854166667,
            "median": 23040.0,
            "avg_length": 1.4166666666666667
          },
          "recent_trades": [
            {
              "trade_id": "1101",
              "timestamp": "2026-05-05T07:59:36.797219",
              "price": 115.8,
              "size": 50.0,
              "notional": 5790.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46555,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1100",
              "timestamp": "2026-05-05T07:59:30.215434",
              "price": 115.5,
              "size": 800.0,
              "notional": 92400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46554,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1099",
              "timestamp": "2026-05-05T07:59:00.032787",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46553,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1098",
              "timestamp": "2026-05-05T07:58:06.512397",
              "price": 115.6,
              "size": 100.0,
              "notional": 11560.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1097",
              "timestamp": "2026-05-05T07:58:06.512397",
              "price": 115.6,
              "size": 50.0,
              "notional": 5780.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46552,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1096",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1095",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1094",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1093",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 300.0,
              "notional": 34710.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1092",
              "timestamp": "2026-05-05T07:57:02.422111",
              "price": 115.6,
              "size": 50.0,
              "notional": 5780.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46550,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1091",
              "timestamp": "2026-05-05T07:56:00.762882",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1090",
              "timestamp": "2026-05-05T07:56:00.715195",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1089",
              "timestamp": "2026-05-05T07:56:00.668567",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1088",
              "timestamp": "2026-05-05T07:56:00.613256",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1087",
              "timestamp": "2026-05-05T07:56:00.575446",
              "price": 115.7,
              "size": 100.0,
              "notional": 11570.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1086",
              "timestamp": "2026-05-05T07:56:00.564533",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1085",
              "timestamp": "2026-05-05T07:56:00.519110",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1084",
              "timestamp": "2026-05-05T07:56:00.444906",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1083",
              "timestamp": "2026-05-05T07:56:00.421953",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1082",
              "timestamp": "2026-05-05T07:56:00.421953",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1081",
              "timestamp": "2026-05-05T07:56:00.363607",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1080",
              "timestamp": "2026-05-05T07:56:00.313988",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1079",
              "timestamp": "2026-05-05T07:56:00.268096",
              "price": 115.7,
              "size": 100.0,
              "notional": 11570.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1078",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1077",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1076",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 100.0,
              "notional": 11550.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1075",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1074",
              "timestamp": "2026-05-05T07:54:55.552062",
              "price": 115.4,
              "size": 200.0,
              "notional": 23080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1073",
              "timestamp": "2026-05-05T07:54:55.551763",
              "price": 115.4,
              "size": 300.0,
              "notional": 34620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1072",
              "timestamp": "2026-05-05T07:54:55.499318",
              "price": 115.4,
              "size": 50.0,
              "notional": 5770.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
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
          "n_trades": 13338,
          "n_runs": 4928,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-01",
          "last_trade_date": "2026-05-05",
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
            "retail_pct": 0.31676413255360625,
            "mixed_pct": 0.1473984105563053,
            "instit_pct": 0.36332283700704754,
            "ambiguous_pct": 0.17251461988304093,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17251461988304093,
            "retail_qty_pct": 0.1654588403481312,
            "mixed_qty_pct": 0.1619259483664149,
            "instit_qty_pct": 0.5209731120041106,
            "ambiguous_qty_pct": 0.15164209928134334,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.15164209928134334,
            "retail_notional_pct": 0.1651809621352715,
            "mixed_notional_pct": 0.16149172526388045,
            "instit_notional_pct": 0.5223288589461548,
            "ambiguous_notional_pct": 0.15099845365469325,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.15099845365469325
          },
          "run_composition": {
            "retail_pct": 0.4981737012987013,
            "mixed_pct": 0.19703733766233766,
            "instit_pct": 0.18405032467532467,
            "ambiguous_pct": 0.12073863636363637,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12073863636363637,
            "retail_notional_pct": 0.11383970760898512,
            "mixed_notional_pct": 0.14196667820309616,
            "instit_notional_pct": 0.6478682319590982,
            "unclear_notional_pct": 0.09632538222882055
          },
          "counts": {
            "trades": {
              "retail": 4225,
              "mixed": 1966,
              "institutional": 4846,
              "ambiguous": 2301,
              "unobservable": 0,
              "unclear": 2301
            },
            "runs": {
              "retail": 2455,
              "mixed": 971,
              "institutional": 907,
              "ambiguous": 595,
              "unobservable": 0,
              "unclear": 595
            }
          },
          "confidence": {
            "high": 0.682224025974026,
            "medium": 0.19703733766233766,
            "low": 0.12073863636363637,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 3362,
            "medium": 971,
            "low": 595,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5104213525266157,
            "medium": 0.13150397360923677,
            "low": 0.35807467386414754,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 6808,
            "medium": 1754,
            "low": 4776,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8783685064935064,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.12073863636363637,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4981737012987013,
          "dominance_gap": 0.30113636363636365,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7330,
              "UNOBSERVABLE": 3665,
              "WALK_BOOK": 2343
            },
            "d2_information": {
              "UNOBSERVABLE": 13338
            },
            "d3_urgency": {
              "UNOBSERVABLE": 4928
            },
            "participant_confidence": {
              "HIGH": 3362,
              "MEDIUM": 971,
              "LOW": 595
            }
          },
          "trade_size": {
            "avg": 17608.30514319988,
            "median": 5955.0
          },
          "run_size": {
            "avg": 34779.54222808442,
            "median": 11820.0,
            "avg_length": 1.3098620129870129
          },
          "recent_trades": [
            {
              "trade_id": "1101",
              "timestamp": "2026-05-05T07:59:36.797219",
              "price": 115.8,
              "size": 50.0,
              "notional": 5790.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46555,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1100",
              "timestamp": "2026-05-05T07:59:30.215434",
              "price": 115.5,
              "size": 800.0,
              "notional": 92400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46554,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1099",
              "timestamp": "2026-05-05T07:59:00.032787",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46553,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1098",
              "timestamp": "2026-05-05T07:58:06.512397",
              "price": 115.6,
              "size": 100.0,
              "notional": 11560.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1097",
              "timestamp": "2026-05-05T07:58:06.512397",
              "price": 115.6,
              "size": 50.0,
              "notional": 5780.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46552,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1096",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1095",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1094",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1093",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 300.0,
              "notional": 34710.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1092",
              "timestamp": "2026-05-05T07:57:02.422111",
              "price": 115.6,
              "size": 50.0,
              "notional": 5780.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46550,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1091",
              "timestamp": "2026-05-05T07:56:00.762882",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1090",
              "timestamp": "2026-05-05T07:56:00.715195",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1089",
              "timestamp": "2026-05-05T07:56:00.668567",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1088",
              "timestamp": "2026-05-05T07:56:00.613256",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1087",
              "timestamp": "2026-05-05T07:56:00.575446",
              "price": 115.7,
              "size": 100.0,
              "notional": 11570.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1086",
              "timestamp": "2026-05-05T07:56:00.564533",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1085",
              "timestamp": "2026-05-05T07:56:00.519110",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1084",
              "timestamp": "2026-05-05T07:56:00.444906",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1083",
              "timestamp": "2026-05-05T07:56:00.421953",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1082",
              "timestamp": "2026-05-05T07:56:00.421953",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1081",
              "timestamp": "2026-05-05T07:56:00.363607",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1080",
              "timestamp": "2026-05-05T07:56:00.313988",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1079",
              "timestamp": "2026-05-05T07:56:00.268096",
              "price": 115.7,
              "size": 100.0,
              "notional": 11570.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1078",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1077",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1076",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 100.0,
              "notional": 11550.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1075",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1074",
              "timestamp": "2026-05-05T07:54:55.552062",
              "price": 115.4,
              "size": 200.0,
              "notional": 23080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1073",
              "timestamp": "2026-05-05T07:54:55.551763",
              "price": 115.4,
              "size": 300.0,
              "notional": 34620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1072",
              "timestamp": "2026-05-05T07:54:55.499318",
              "price": 115.4,
              "size": 50.0,
              "notional": 5770.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
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
          "n_trades": 37170,
          "n_runs": 13755,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-28",
          "last_trade_date": "2026-05-05",
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
            "retail_pct": 0.3268227064837234,
            "mixed_pct": 0.15404896421845574,
            "instit_pct": 0.36287328490718324,
            "ambiguous_pct": 0.15625504439063762,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15625504439063762,
            "retail_qty_pct": 0.18854164268364282,
            "mixed_qty_pct": 0.18827507137347899,
            "instit_qty_pct": 0.4870272226507189,
            "ambiguous_qty_pct": 0.1361560632921593,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1361560632921593,
            "retail_notional_pct": 0.18715177872209046,
            "mixed_notional_pct": 0.18885052822727716,
            "instit_notional_pct": 0.48832566118876464,
            "ambiguous_notional_pct": 0.13567203186186777,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13567203186186777
          },
          "run_composition": {
            "retail_pct": 0.49909123954925483,
            "mixed_pct": 0.20319883678662304,
            "instit_pct": 0.1896764812795347,
            "ambiguous_pct": 0.10803344238458742,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10803344238458742,
            "retail_notional_pct": 0.14126022601650734,
            "mixed_notional_pct": 0.15428611828638444,
            "instit_notional_pct": 0.6109151274743356,
            "unclear_notional_pct": 0.0935385282227726
          },
          "counts": {
            "trades": {
              "retail": 12148,
              "mixed": 5726,
              "institutional": 13488,
              "ambiguous": 5808,
              "unobservable": 0,
              "unclear": 5808
            },
            "runs": {
              "retail": 6865,
              "mixed": 2795,
              "institutional": 2609,
              "ambiguous": 1486,
              "unobservable": 0,
              "unclear": 1486
            }
          },
          "confidence": {
            "high": 0.6885496183206107,
            "medium": 0.2034169392948019,
            "low": 0.10803344238458742,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 9471,
            "medium": 2798,
            "low": 1486,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5072370191014259,
            "medium": 0.13666935700834007,
            "low": 0.3560936238902341,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 18854,
            "medium": 5080,
            "low": 13236,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8768084332969828,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10803344238458742,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.49909123954925483,
          "dominance_gap": 0.2958924027626318,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 19820,
              "UNOBSERVABLE": 10495,
              "WALK_BOOK": 6855
            },
            "d2_information": {
              "UNOBSERVABLE": 37170
            },
            "d3_urgency": {
              "UNOBSERVABLE": 13755
            },
            "participant_confidence": {
              "HIGH": 9471,
              "MEDIUM": 2798,
              "LOW": 1486
            }
          },
          "trade_size": {
            "avg": 17489.3856881894,
            "median": 6480.0
          },
          "run_size": {
            "avg": 32963.234484187575,
            "median": 11820.0,
            "avg_length": 1.282079243911305
          },
          "recent_trades": [
            {
              "trade_id": "1101",
              "timestamp": "2026-05-05T07:59:36.797219",
              "price": 115.8,
              "size": 50.0,
              "notional": 5790.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46555,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1100",
              "timestamp": "2026-05-05T07:59:30.215434",
              "price": 115.5,
              "size": 800.0,
              "notional": 92400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46554,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1099",
              "timestamp": "2026-05-05T07:59:00.032787",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46553,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1098",
              "timestamp": "2026-05-05T07:58:06.512397",
              "price": 115.6,
              "size": 100.0,
              "notional": 11560.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1097",
              "timestamp": "2026-05-05T07:58:06.512397",
              "price": 115.6,
              "size": 50.0,
              "notional": 5780.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46552,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1096",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1095",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1094",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1093",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 300.0,
              "notional": 34710.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1092",
              "timestamp": "2026-05-05T07:57:02.422111",
              "price": 115.6,
              "size": 50.0,
              "notional": 5780.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46550,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1091",
              "timestamp": "2026-05-05T07:56:00.762882",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1090",
              "timestamp": "2026-05-05T07:56:00.715195",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1089",
              "timestamp": "2026-05-05T07:56:00.668567",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1088",
              "timestamp": "2026-05-05T07:56:00.613256",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1087",
              "timestamp": "2026-05-05T07:56:00.575446",
              "price": 115.7,
              "size": 100.0,
              "notional": 11570.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1086",
              "timestamp": "2026-05-05T07:56:00.564533",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1085",
              "timestamp": "2026-05-05T07:56:00.519110",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1084",
              "timestamp": "2026-05-05T07:56:00.444906",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1083",
              "timestamp": "2026-05-05T07:56:00.421953",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1082",
              "timestamp": "2026-05-05T07:56:00.421953",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1081",
              "timestamp": "2026-05-05T07:56:00.363607",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1080",
              "timestamp": "2026-05-05T07:56:00.313988",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1079",
              "timestamp": "2026-05-05T07:56:00.268096",
              "price": 115.7,
              "size": 100.0,
              "notional": 11570.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1078",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1077",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1076",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 100.0,
              "notional": 11550.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1075",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1074",
              "timestamp": "2026-05-05T07:54:55.552062",
              "price": 115.4,
              "size": 200.0,
              "notional": 23080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1073",
              "timestamp": "2026-05-05T07:54:55.551763",
              "price": 115.4,
              "size": 300.0,
              "notional": 34620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1072",
              "timestamp": "2026-05-05T07:54:55.499318",
              "price": 115.4,
              "size": 50.0,
              "notional": 5770.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
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
          "n_trades": 79299,
          "n_runs": 28342,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-17",
          "last_trade_date": "2026-05-05",
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
            "retail_pct": 0.3180367974375465,
            "mixed_pct": 0.1556513953517699,
            "instit_pct": 0.3700677183823251,
            "ambiguous_pct": 0.1562440888283585,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1562440888283585,
            "retail_qty_pct": 0.1750116957656392,
            "mixed_qty_pct": 0.19065474983185984,
            "instit_qty_pct": 0.49640570632118675,
            "ambiguous_qty_pct": 0.1379278480813142,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1379278480813142,
            "retail_notional_pct": 0.17446712830064523,
            "mixed_notional_pct": 0.19067282459625481,
            "instit_notional_pct": 0.4969708108208684,
            "ambiguous_notional_pct": 0.1378892362822315,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1378892362822315
          },
          "run_composition": {
            "retail_pct": 0.499682450074095,
            "mixed_pct": 0.2068661350645685,
            "instit_pct": 0.18488462352692117,
            "ambiguous_pct": 0.10856679133441535,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10856679133441535,
            "retail_notional_pct": 0.12934557787579878,
            "mixed_notional_pct": 0.15906119746803396,
            "instit_notional_pct": 0.6184338500023752,
            "unclear_notional_pct": 0.09315937465379212
          },
          "counts": {
            "trades": {
              "retail": 25220,
              "mixed": 12343,
              "institutional": 29346,
              "ambiguous": 12390,
              "unobservable": 0,
              "unclear": 12390
            },
            "runs": {
              "retail": 14162,
              "mixed": 5863,
              "institutional": 5240,
              "ambiguous": 3077,
              "unobservable": 0,
              "unclear": 3077
            }
          },
          "confidence": {
            "high": 0.6844612236257145,
            "medium": 0.20697198503987016,
            "low": 0.10856679133441535,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 19399,
            "medium": 5866,
            "low": 3077,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5066520384872445,
            "medium": 0.13890465201326624,
            "low": 0.35444330949948927,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 40177,
            "medium": 11015,
            "low": 28107,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8778526568343801,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10856679133441535,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.499682450074095,
          "dominance_gap": 0.29281631500952654,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 42132,
              "UNOBSERVABLE": 22289,
              "WALK_BOOK": 14878
            },
            "d2_information": {
              "UNOBSERVABLE": 79299
            },
            "d3_urgency": {
              "UNOBSERVABLE": 28342
            },
            "participant_confidence": {
              "HIGH": 19399,
              "MEDIUM": 5866,
              "LOW": 3077
            }
          },
          "trade_size": {
            "avg": 16863.92263622492,
            "median": 6390.0
          },
          "run_size": {
            "avg": 33062.246709124265,
            "median": 11960.0,
            "avg_length": 1.3025545127372804
          },
          "recent_trades": [
            {
              "trade_id": "1101",
              "timestamp": "2026-05-05T07:59:36.797219",
              "price": 115.8,
              "size": 50.0,
              "notional": 5790.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46555,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1100",
              "timestamp": "2026-05-05T07:59:30.215434",
              "price": 115.5,
              "size": 800.0,
              "notional": 92400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46554,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1099",
              "timestamp": "2026-05-05T07:59:00.032787",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46553,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1098",
              "timestamp": "2026-05-05T07:58:06.512397",
              "price": 115.6,
              "size": 100.0,
              "notional": 11560.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1097",
              "timestamp": "2026-05-05T07:58:06.512397",
              "price": 115.6,
              "size": 50.0,
              "notional": 5780.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46552,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1096",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1095",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1094",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1093",
              "timestamp": "2026-05-05T07:57:11.407821",
              "price": 115.7,
              "size": 300.0,
              "notional": 34710.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46551,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1092",
              "timestamp": "2026-05-05T07:57:02.422111",
              "price": 115.6,
              "size": 50.0,
              "notional": 5780.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46550,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1091",
              "timestamp": "2026-05-05T07:56:00.762882",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1090",
              "timestamp": "2026-05-05T07:56:00.715195",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1089",
              "timestamp": "2026-05-05T07:56:00.668567",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1088",
              "timestamp": "2026-05-05T07:56:00.613256",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1087",
              "timestamp": "2026-05-05T07:56:00.575446",
              "price": 115.7,
              "size": 100.0,
              "notional": 11570.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1086",
              "timestamp": "2026-05-05T07:56:00.564533",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1085",
              "timestamp": "2026-05-05T07:56:00.519110",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1084",
              "timestamp": "2026-05-05T07:56:00.444906",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1083",
              "timestamp": "2026-05-05T07:56:00.421953",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1082",
              "timestamp": "2026-05-05T07:56:00.421953",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1081",
              "timestamp": "2026-05-05T07:56:00.363607",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1080",
              "timestamp": "2026-05-05T07:56:00.313988",
              "price": 115.7,
              "size": 50.0,
              "notional": 5785.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1079",
              "timestamp": "2026-05-05T07:56:00.268096",
              "price": 115.7,
              "size": 100.0,
              "notional": 11570.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46549,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1078",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1077",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1076",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 100.0,
              "notional": 11550.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1075",
              "timestamp": "2026-05-05T07:56:00.086277",
              "price": 115.5,
              "size": 50.0,
              "notional": 5775.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46548,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1074",
              "timestamp": "2026-05-05T07:54:55.552062",
              "price": 115.4,
              "size": 200.0,
              "notional": 23080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1073",
              "timestamp": "2026-05-05T07:54:55.551763",
              "price": 115.4,
              "size": 300.0,
              "notional": 34620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "1072",
              "timestamp": "2026-05-05T07:54:55.499318",
              "price": 115.4,
              "size": 50.0,
              "notional": 5770.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46547,
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
      "n_trades": 79299,
      "n_runs": 28342,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-17",
      "last_trade_date": "2026-05-05",
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
        "retail_pct": 0.3180367974375465,
        "mixed_pct": 0.1556513953517699,
        "instit_pct": 0.3700677183823251,
        "ambiguous_pct": 0.1562440888283585,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.1562440888283585,
        "retail_qty_pct": 0.1750116957656392,
        "mixed_qty_pct": 0.19065474983185984,
        "instit_qty_pct": 0.49640570632118675,
        "ambiguous_qty_pct": 0.1379278480813142,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.1379278480813142,
        "retail_notional_pct": 0.17446712830064523,
        "mixed_notional_pct": 0.19067282459625481,
        "instit_notional_pct": 0.4969708108208684,
        "ambiguous_notional_pct": 0.1378892362822315,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.1378892362822315
      },
      "run_composition": {
        "retail_pct": 0.499682450074095,
        "mixed_pct": 0.2068661350645685,
        "instit_pct": 0.18488462352692117,
        "ambiguous_pct": 0.10856679133441535,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.10856679133441535
      },
      "trade_size": {
        "avg": 16863.92263622492,
        "median": 6390.0
      },
      "run_size": {
        "avg": 33062.246709124265,
        "median": 11960.0,
        "avg_length": 1.3025545127372804
      },
      "confidence": {
        "high": 0.6844612236257145,
        "medium": 0.20697198503987016,
        "low": 0.10856679133441535,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 19399,
        "medium": 5866,
        "low": 3077,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5066520384872445,
        "medium": 0.13890465201326624,
        "low": 0.35444330949948927,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 40177,
        "medium": 11015,
        "low": 28107,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 25220,
          "mixed": 12343,
          "institutional": 29346,
          "ambiguous": 12390,
          "unobservable": 0,
          "unclear": 12390
        },
        "runs": {
          "retail": 14162,
          "mixed": 5863,
          "institutional": 5240,
          "ambiguous": 3077,
          "unobservable": 0,
          "unclear": 3077
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8778526568343801,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.10856679133441535,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.499682450074095,
      "dominance_gap": 0.29281631500952654,
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
            "n_trades": 2443,
            "n_runs": 671,
            "retail_pct": 0.25501432664756446,
            "mixed_pct": 0.1322144903806795,
            "instit_pct": 0.42898076135898483,
            "ambiguous_pct": 0.18379042161277118,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18379042161277118,
            "avg_trade_size": 14127.318829308228,
            "avg_run_notional": 33966.11758569299,
            "retail_qty_pct": 0.16710064117660717,
            "mixed_qty_pct": 0.1520845702988951,
            "instit_qty_pct": 0.5055111998593591,
            "ambiguous_qty_pct": 0.17530358866513862,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17530358866513862,
            "retail_notional_pct": 0.1671137899388573,
            "mixed_notional_pct": 0.15189650100917365,
            "instit_notional_pct": 0.5055232761458373,
            "ambiguous_notional_pct": 0.17546643290613181,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.17546643290613181,
            "run_retail_pct": 0.42921013412816694,
            "run_mixed_pct": 0.18181818181818182,
            "run_instit_pct": 0.2488822652757079,
            "run_ambiguous_pct": 0.14008941877794337,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.14008941877794337,
            "avg_feature_coverage": 0.8853204172876303,
            "high_confidence_pct": 0.6780923994038748,
            "medium_confidence_pct": 0.18181818181818182,
            "low_confidence_pct": 0.14008941877794337,
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
          "trade_id": "1101",
          "timestamp": "2026-05-05T07:59:36.797219",
          "price": 115.8,
          "size": 50.0,
          "notional": 5790.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46555,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1100",
          "timestamp": "2026-05-05T07:59:30.215434",
          "price": 115.5,
          "size": 800.0,
          "notional": 92400.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46554,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1099",
          "timestamp": "2026-05-05T07:59:00.032787",
          "price": 115.5,
          "size": 50.0,
          "notional": 5775.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46553,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1098",
          "timestamp": "2026-05-05T07:58:06.512397",
          "price": 115.6,
          "size": 100.0,
          "notional": 11560.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1097",
          "timestamp": "2026-05-05T07:58:06.512397",
          "price": 115.6,
          "size": 50.0,
          "notional": 5780.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46552,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1096",
          "timestamp": "2026-05-05T07:57:11.407821",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 46551,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1095",
          "timestamp": "2026-05-05T07:57:11.407821",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 46551,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1094",
          "timestamp": "2026-05-05T07:57:11.407821",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 46551,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1093",
          "timestamp": "2026-05-05T07:57:11.407821",
          "price": 115.7,
          "size": 300.0,
          "notional": 34710.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 46551,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1092",
          "timestamp": "2026-05-05T07:57:02.422111",
          "price": 115.6,
          "size": 50.0,
          "notional": 5780.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46550,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1091",
          "timestamp": "2026-05-05T07:56:00.762882",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1090",
          "timestamp": "2026-05-05T07:56:00.715195",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1089",
          "timestamp": "2026-05-05T07:56:00.668567",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1088",
          "timestamp": "2026-05-05T07:56:00.613256",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1087",
          "timestamp": "2026-05-05T07:56:00.575446",
          "price": 115.7,
          "size": 100.0,
          "notional": 11570.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1086",
          "timestamp": "2026-05-05T07:56:00.564533",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1085",
          "timestamp": "2026-05-05T07:56:00.519110",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1084",
          "timestamp": "2026-05-05T07:56:00.444906",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1083",
          "timestamp": "2026-05-05T07:56:00.421953",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1082",
          "timestamp": "2026-05-05T07:56:00.421953",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1081",
          "timestamp": "2026-05-05T07:56:00.363607",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1080",
          "timestamp": "2026-05-05T07:56:00.313988",
          "price": 115.7,
          "size": 50.0,
          "notional": 5785.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1079",
          "timestamp": "2026-05-05T07:56:00.268096",
          "price": 115.7,
          "size": 100.0,
          "notional": 11570.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46549,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1078",
          "timestamp": "2026-05-05T07:56:00.086277",
          "price": 115.5,
          "size": 50.0,
          "notional": 5775.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46548,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1077",
          "timestamp": "2026-05-05T07:56:00.086277",
          "price": 115.5,
          "size": 50.0,
          "notional": 5775.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46548,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1076",
          "timestamp": "2026-05-05T07:56:00.086277",
          "price": 115.5,
          "size": 100.0,
          "notional": 11550.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46548,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1075",
          "timestamp": "2026-05-05T07:56:00.086277",
          "price": 115.5,
          "size": 50.0,
          "notional": 5775.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46548,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1074",
          "timestamp": "2026-05-05T07:54:55.552062",
          "price": 115.4,
          "size": 200.0,
          "notional": 23080.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46547,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1073",
          "timestamp": "2026-05-05T07:54:55.551763",
          "price": 115.4,
          "size": 300.0,
          "notional": 34620.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46547,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "1072",
          "timestamp": "2026-05-05T07:54:55.499318",
          "price": 115.4,
          "size": 50.0,
          "notional": 5770.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46547,
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
      "total_trades": 79298,
      "price_moving_trades": 22570,
      "pct_price_moving": 28.462256299023935,
      "all_movers": {
        "count": 22570,
        "avg_size": 18327.199367744794,
        "median_size": 6300.0,
        "retail_count": 9592,
        "mixed_count": 4442,
        "institutional_count": 6111,
        "ambiguous_count": 2425,
        "unobservable_count": 0,
        "retail_pct": 42.49889233495791,
        "mixed_pct": 19.680992467877715,
        "instit_pct": 27.075764288879046,
        "unclear_pct": 10.744350908285334
      },
      "positive_movers": {
        "count": 11353,
        "avg_size": 17874.322394961684,
        "median_size": 6355.0,
        "retail_count": 4530,
        "mixed_count": 2456,
        "institutional_count": 3091,
        "ambiguous_count": 1276,
        "unobservable_count": 0,
        "retail_pct": 39.90134766141108,
        "mixed_pct": 21.63304853342729,
        "instit_pct": 27.226283801638335,
        "unclear_pct": 11.239320003523298
      },
      "negative_movers": {
        "count": 11217,
        "avg_size": 18785.567226531155,
        "median_size": 6250.0,
        "retail_count": 5062,
        "mixed_count": 1986,
        "institutional_count": 3020,
        "ambiguous_count": 1149,
        "unobservable_count": 0,
        "retail_pct": 45.127930819292146,
        "mixed_pct": 17.70526878844611,
        "instit_pct": 26.923419809218153,
        "unclear_pct": 10.243380583043594
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
          "opening": 0.017788017247280328,
          "continuous": 0.9434450285795335,
          "closing": 0.0028350062526362224,
          "auctions": 0.02062302349991655,
          "other": 0.0359319479205497
        },
        "1M": {
          "opening": 0.005259119868002959,
          "continuous": 0.8708336104511177,
          "closing": 0.011745100576827405,
          "auctions": 0.017004220444830364,
          "other": 0.1121621691040518
        },
        "3M": {
          "opening": 0.004095759704196938,
          "continuous": 0.8494955836487249,
          "closing": 0.06054368992983095,
          "auctions": 0.06463944963402789,
          "other": 0.08586496671724725
        },
        "6M": {
          "opening": 0.004985923014431287,
          "continuous": 0.8716566343259744,
          "closing": 0.061084393114861316,
          "auctions": 0.06607031612929261,
          "other": 0.06227304954473304
        }
      },
      "hhi": {
        "1D": 0.14543396922492924,
        "1M": 0.18533767123687853,
        "3M": 0.2057639540953969,
        "6M": 0.19394646303376528
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.007
        },
        {
          "time": "09:30",
          "avg_share": 0.1363
        },
        {
          "time": "10:00",
          "avg_share": 0.0479
        },
        {
          "time": "10:30",
          "avg_share": 0.0486
        },
        {
          "time": "11:00",
          "avg_share": 0.0313
        },
        {
          "time": "11:30",
          "avg_share": 0.0328
        },
        {
          "time": "12:00",
          "avg_share": 0.0319
        },
        {
          "time": "13:00",
          "avg_share": 0.0869
        },
        {
          "time": "13:30",
          "avg_share": 0.0542
        },
        {
          "time": "14:00",
          "avg_share": 0.0545
        },
        {
          "time": "14:30",
          "avg_share": 0.084
        },
        {
          "time": "15:00",
          "avg_share": 0.1054
        },
        {
          "time": "15:30",
          "avg_share": 0.2486
        },
        {
          "time": "16:00",
          "avg_share": 0.0306
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "2378",
          "auctions_pct": 4.9202657898039215,
          "hhi": 0.20262853171088474,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "1828",
          "auctions_pct": 8.191027060778612,
          "hhi": 0.16728848404669158,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "945",
          "auctions_pct": 2.999924850203015,
          "hhi": 0.21072223526368475,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "376",
          "auctions_pct": 1.2597945983518555,
          "hhi": 0.15053957244445124,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "82318",
          "auctions_pct": 0.2194216026280462,
          "hhi": 0.23597958730529697,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1508",
          "auctions_pct": 4.146478371636627,
          "hhi": 0.1492500654046926,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6963",
          "auctions_pct": 4.353867094516565,
          "hhi": 0.14324668116401748,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "81299",
          "auctions_pct": 3.576713187521125,
          "hhi": 0.6007355705924442,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "6060",
          "auctions_pct": 4.411264837908146,
          "hhi": 0.12316901432615193,
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
