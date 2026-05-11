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
      "ticker": "1836",
      "name": "STELLA HOLDINGS",
      "marketCap": 12822120660.0,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "1440",
      "name": "STAR SHINE HLDG",
      "marketCap": 19526435000.0,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "1361",
      "name": "361 DEGREES",
      "marketCap": 14763249480.0,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "551",
      "name": "YUE YUEN IND",
      "marketCap": 24292985198.04,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "1368",
      "name": "XTEP INT'L",
      "marketCap": 12599264878.44,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "933",
      "name": "VIVA GOODS",
      "marketCap": 5377630631.76,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "2331",
      "name": "LI NING",
      "marketCap": 53247163311.8,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "82331",
      "name": "LI NING-R",
      "marketCap": 45983836665.869995,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "2583",
      "name": "HIPINE",
      "marketCap": 5888382500.0,
      "sector": "Jewellery & Timepieces",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1836",
    "company": "STELLA HOLDINGS",
    "asof_date": "2026-04-23",
    "industry": "Consumer Discretionary - Textiles & Clothing",
    "sector": "Footwear",
    "market_cap_display": "12.8B",
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
          "score_pca": 70.4006223259432,
          "score_pca_percentile": 70.4006223259432,
          "rank_pca": 762,
          "total": 2571,
          "adv_notional_sgd": 9468225.0,
          "adv_volume_shares": 622500.0,
          "free_float_shares": 614758989.0,
          "turnover_ratio": 0.001012591944385542,
          "votes": 478.0,
          "trades": 478.0,
          "spread_pct": 0.003576426923085223,
          "spread_ticks": null,
          "amihud": 2.0790633270838733e-10,
          "volatility": 0.2193172461925527
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5503977061314171,
          "loadings": {
            "log_adv": 0.5363720935166331,
            "log_trades": 0.49859717164827566,
            "log_turnover": 0.5027289183245505,
            "neg_spread": 0.4003313164622275,
            "neg_amihud": 0.045628599611344335,
            "neg_vol": -0.22050473999050255
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
          "peer_median_adv": 85442722.67500001,
          "peer_median_score_pca": 87.08673667833528,
          "peer_median_trades": 2457.5,
          "peer_median_volatility": 0.3455408307794278,
          "peer_median_spread_pct": 0.002768233403540683,
          "peer_median_spread_ticks": 1.7304933781863217,
          "peer_median_amihud": 9.382723673616614e-11,
          "peer_median_turnover_ratio": 0.011903031417846995,
          "target_vs_peer": {
            "score_pca_delta": -16.69,
            "adv_delta_pct": -88.9,
            "trades_delta_pct": -80.55,
            "volatility_delta_pct": 36.53,
            "spread_pct_delta_pct": -29.2,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": -121.58,
            "turnover_ratio_delta_pct": -91.49
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1836",
            "score_pca": 70.4006223259432,
            "rank_pca": 762,
            "adv": 9468225.0,
            "trades": 478.0,
            "volatility": 0.2193172461925527,
            "spread_pct": 0.003576426923085223,
            "spread_ticks": null,
            "amihud": 2.0790633270838733e-10,
            "turnover_ratio": 0.001012591944385542,
            "is_target": true
          },
          {
            "ticker": "1440",
            "score_pca": 65.18864255153638,
            "rank_pca": 896,
            "adv": 11548600.0,
            "trades": 121.0,
            "volatility": 0.35609392882716706,
            "spread_pct": 0.016671117431887757,
            "spread_ticks": null,
            "amihud": 1.787676540041449e-09,
            "turnover_ratio": 0.0008377900704661785,
            "is_target": false
          },
          {
            "ticker": "1361",
            "score_pca": 86.26993387786854,
            "rank_pca": 354,
            "adv": 100883900.0,
            "trades": 1403.0,
            "volatility": 0.2814060726696032,
            "spread_pct": 0.002823227136114014,
            "spread_ticks": 2.0040331139885375,
            "amihud": 5.55315654565151e-11,
            "turnover_ratio": 0.019811642630738625,
            "is_target": false
          },
          {
            "ticker": "551",
            "score_pca": 87.90353947880202,
            "rank_pca": 312,
            "adv": 92644288.0,
            "trades": 3512.0,
            "volatility": 0.19067862739149713,
            "spread_pct": 0.0012064542038709087,
            "spread_ticks": null,
            "amihud": 1.2832993726614828e-10,
            "turnover_ratio": 0.0103250168174997,
            "is_target": false
          },
          {
            "ticker": "1368",
            "score_pca": 90.39284325165305,
            "rank_pca": 248,
            "adv": 78241157.35000001,
            "trades": 4507.0,
            "volatility": 0.34436659582295603,
            "spread_pct": 0.0024660499298896294,
            "spread_ticks": 1.0883636363636364,
            "amihud": 3.415856668237125e-10,
            "turnover_ratio": 0.013481046018194292,
            "is_target": false
          },
          {
            "ticker": "933",
            "score_pca": 51.5363671723065,
            "rank_pca": 1247,
            "adv": 276480.0,
            "trades": 59.0,
            "volatility": 0.3467150657358996,
            "spread_pct": 0.0263346899688772,
            "spread_ticks": 1.4569536423841059,
            "amihud": 0.0,
            "turnover_ratio": 0.00014770571086357326,
            "is_target": false
          },
          {
            "ticker": "2331",
            "score_pca": 97.0439517697394,
            "rank_pca": 77,
            "adv": 621887776.0,
            "trades": 14944.0,
            "volatility": 0.47535337016674417,
            "spread_pct": 0.0007338252892660392,
            "spread_ticks": null,
            "amihud": 5.932453620618402e-11,
            "turnover_ratio": 0.017261870858262588,
            "is_target": false
          },
          {
            "ticker": "82331",
            "score_pca": 33.216647218980945,
            "rank_pca": 1718,
            "adv": 98865.291547433,
            "trades": 5.0,
            "volatility": 0.2457956884772063,
            "spread_pct": 0.0027132396709673517,
            "spread_ticks": null,
            "amihud": 3.1839645780380203e-07,
            "turnover_ratio": 2.753515433530002e-06,
            "is_target": false
          },
          {
            "ticker": "2583",
            "score_pca": 99.33877868533645,
            "rank_pca": 18,
            "adv": 106468450.0,
            "trades": 3516.0,
            "volatility": 2.696352196383973,
            "spread_pct": 0.007222183829118998,
            "spread_ticks": 8.447996183206106,
            "amihud": 1.876614150015268e-11,
            "turnover_ratio": 0.07996132930003819,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Footwear",
          "sector_count": 14,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4468101755190163,
              "median": 0.3002961195058443,
              "min": 0.0,
              "max": 8.637276202991943,
              "p5": 0.0,
              "p95": 1.4784486156144698,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 66471607.423283085,
              "median": 228140.0,
              "min": 0.0,
              "max": 11632693680.0,
              "p5": 0.0,
              "p95": 287950638.48,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04588274828357715,
              "median": 0.026607538802660594,
              "min": 0.0004200936271142237,
              "max": 0.7648559970834851,
              "p5": 0.0013444125121212184,
              "p95": 0.1509589329656546,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007049921167545383,
              "median": 0.0009461002343483544,
              "min": 0.0,
              "max": 1.1297316442194167,
              "p5": 0.0,
              "p95": 0.0246515983048129,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.386517848833201e-06,
              "median": 6.477453907708708e-09,
              "min": 0.0,
              "max": 0.003047619047619048,
              "p5": 0.0,
              "p95": 6.112867763724547e-06,
              "count": 2154
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1211.3049397121742,
              "median": 21.0,
              "min": 0.0,
              "max": 70283.0,
              "p5": 0.0,
              "p95": 6507.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.31834288749809436,
              "median": 0.26360088057340475,
              "min": 0.0,
              "max": 1.384109178213352,
              "p5": 0.0,
              "p95": 0.7934179029830566,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 65467433.68868196,
              "median": 531500.0,
              "min": 0.0,
              "max": 621887776.0,
              "p5": 6864.0,
              "p95": 283235256.5999998,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02904836308131192,
              "median": 0.01571674718450075,
              "min": 0.0007338252892660392,
              "max": 0.15962441314553985,
              "p5": 0.0010410340837592044,
              "p95": 0.11355343206074595,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004686058008659108,
              "median": 0.0007791526242901743,
              "min": 0.0,
              "max": 0.019811642630738625,
              "p5": 1.7897850317945015e-06,
              "p95": 0.018154290978629202,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.3664695143762994e-07,
              "median": 3.415856668237125e-10,
              "min": 0.0,
              "max": 3.787878787878791e-06,
              "p5": 0.0,
              "p95": 2.41687216209509e-06,
              "count": 13
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1796.5714285714287,
              "median": 69.5,
              "min": 0.0,
              "max": 14944.0,
              "p5": 3.25,
              "p95": 8159.949999999996,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 126506189.58019343,
              "median": 85442722.67500001,
              "min": 98865.291547433,
              "max": 621887776.0,
              "p5": 161030.43950583145,
              "p95": 441491011.89999974,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3508.375,
              "median": 2457.5,
              "min": 5.0,
              "max": 14944.0,
              "p5": 23.900000000000002,
              "p95": 11291.049999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6170951931843808,
              "median": 0.3455408307794278,
              "min": 0.19067862739149713,
              "max": 2.696352196383973,
              "p5": 0.20996959877149535,
              "p95": 1.9190026072079418,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007521348432498987,
              "median": 0.002768233403540683,
              "min": 0.0007338252892660392,
              "max": 0.0263346899688772,
              "p5": 0.0008992454093777435,
              "p95": 0.02295243958093089,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.009845902388702e-08,
              "median": 9.382723673616614e-11,
              "min": 0.0,
              "max": 3.1839645780380203e-07,
              "p5": 6.568149525053438e-12,
              "p95": 2.0758338436148566e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.017728644365187084,
              "median": 0.011903031417846995,
              "min": 2.753515433530002e-06,
              "max": 0.07996132930003819,
              "p5": 5.3486783834045145e-05,
              "p95": 0.05890893896578331,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.2493366439855964,
              "median": 1.7304933781863217,
              "min": 1.0883636363636364,
              "max": 8.447996183206106,
              "p5": 1.1436521372667068,
              "p95": 7.481401722823469,
              "count": 4
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.0019685039370078705,
            "market": -0.003281577241697975,
            "sector": -0.003785372416683197,
            "peers": -0.008745638281732804,
            "vs_market": 0.0013130733046901044,
            "vs_sector": 0.0018168684796753265,
            "vs_peers": 0.006777134344724933
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 77.44068455853753,
          "score_pca_percentile": 77.44068455853753,
          "rank_pca": 581,
          "total": 2571,
          "adv_notional_sgd": 15757895.0,
          "adv_volume_shares": 1041500.0,
          "free_float_shares": 614758989.0,
          "turnover_ratio": 0.001694159855546252,
          "votes": 832.0,
          "trades": 832.0,
          "spread_pct": 0.002359662872482326,
          "spread_ticks": null,
          "amihud": 3.5554134072831895e-10,
          "volatility": 0.24458014642973105
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5859254082487187,
          "loadings": {
            "log_adv": 0.5129299436054158,
            "log_trades": 0.4653245204941875,
            "log_turnover": 0.4704589730845336,
            "neg_spread": 0.4604137498762654,
            "neg_amihud": 0.28490822029245005,
            "neg_vol": 0.07675156779317978
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
          "peer_median_adv": 39845400.0,
          "peer_median_score_pca": 80.39673278879813,
          "peer_median_trades": 1067.5,
          "peer_median_volatility": 0.41840213300001705,
          "peer_median_spread_pct": 0.002838240412039052,
          "peer_median_spread_ticks": 1.637257695867017,
          "peer_median_amihud": 7.520948282657735e-10,
          "peer_median_turnover_ratio": 0.005648984325118263,
          "target_vs_peer": {
            "score_pca_delta": -2.96,
            "adv_delta_pct": -60.5,
            "trades_delta_pct": -22.06,
            "volatility_delta_pct": 41.54,
            "spread_pct_delta_pct": 16.86,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 52.73,
            "turnover_ratio_delta_pct": -70.01
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1836",
            "score_pca": 77.44068455853753,
            "rank_pca": 581,
            "adv": 15757895.0,
            "trades": 832.0,
            "volatility": 0.24458014642973105,
            "spread_pct": 0.002359662872482326,
            "spread_ticks": null,
            "amihud": 3.5554134072831895e-10,
            "turnover_ratio": 0.001694159855546252,
            "is_target": true
          },
          {
            "ticker": "1440",
            "score_pca": 71.10073901205757,
            "rank_pca": 744,
            "adv": 16797000.0,
            "trades": 191.0,
            "volatility": 0.7627400736433283,
            "spread_pct": 0.01719169715923968,
            "spread_ticks": null,
            "amihud": 2.031478910737264e-09,
            "turnover_ratio": 0.0014690017673927515,
            "is_target": false
          },
          {
            "ticker": "1361",
            "score_pca": 87.43679502139246,
            "rank_pca": 324,
            "adv": 62893800.0,
            "trades": 1870.0,
            "volatility": 0.40426671576101475,
            "spread_pct": 0.0029065547882079854,
            "spread_ticks": 2.0040331139885375,
            "amihud": 2.2892636266377769e-10,
            "turnover_ratio": 0.012820610457431322,
            "is_target": false
          },
          {
            "ticker": "551",
            "score_pca": 87.67016725009724,
            "rank_pca": 318,
            "adv": 66406350.0,
            "trades": 2639.0,
            "volatility": 0.5163073962769962,
            "spread_pct": 0.0018967140933398956,
            "spread_ticks": null,
            "amihud": 3.328400887753257e-10,
            "turnover_ratio": 0.006778251497149113,
            "is_target": false
          },
          {
            "ticker": "1368",
            "score_pca": 91.87086736678334,
            "rank_pca": 210,
            "adv": 70941400.0,
            "trades": 4884.0,
            "volatility": 0.431135009809444,
            "spread_pct": 0.0027699260358701183,
            "spread_ticks": 1.2704822777454967,
            "amihud": 2.225607124915104e-10,
            "turnover_ratio": 0.011608282607070051,
            "is_target": false
          },
          {
            "ticker": "933",
            "score_pca": 62.97160637884092,
            "rank_pca": 953,
            "adv": 1248160.0,
            "trades": 102.0,
            "volatility": 0.6875600739306074,
            "spread_pct": 0.02021206096752818,
            "spread_ticks": 1.1550468262226847,
            "amihud": 2.051762018392736e-08,
            "turnover_ratio": 0.0006208255659734563,
            "is_target": false
          },
          {
            "ticker": "2331",
            "score_pca": 97.86075457020614,
            "rank_pca": 56,
            "adv": 517234420.8,
            "trades": 10424.0,
            "volatility": 0.39301108928057005,
            "spread_pct": 0.0010742156003695719,
            "spread_ticks": null,
            "amihud": 3.428140936345194e-11,
            "turnover_ratio": 0.012970974138668045,
            "is_target": false
          },
          {
            "ticker": "82331",
            "score_pca": 22.287047841306883,
            "rank_pca": 1999,
            "adv": 10844.770808162992,
            "trades": 1.0,
            "volatility": 0.40566925619059013,
            "spread_pct": 0.0026144797135789054,
            "spread_ticks": null,
            "amihud": 8.421069937156181e-07,
            "turnover_ratio": 2.753515433530002e-07,
            "is_target": false
          },
          {
            "ticker": "2583",
            "score_pca": 73.35667055620381,
            "rank_pca": 686,
            "adv": 6600000.0,
            "trades": 265.0,
            "volatility": 0.21519356960465208,
            "spread_pct": 0.01085863019135798,
            "spread_ticks": 11.632052330335242,
            "amihud": 1.1713495677562213e-09,
            "turnover_ratio": 0.004519717153087415,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Footwear",
          "sector_count": 14,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.691586338290945,
              "median": 0.5444324049115428,
              "min": 0.0,
              "max": 27.98817803324715,
              "p5": 0.20268038135212688,
              "p95": 1.6150945009605304,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61642147.34457229,
              "median": 219719.115,
              "min": 0.0,
              "max": 11207547960.0,
              "p5": 0.0,
              "p95": 254705463.97000003,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04609339969830235,
              "median": 0.029277218664226883,
              "min": 0.000587472082824556,
              "max": 0.5912209998910793,
              "p5": 0.001433872608045646,
              "p95": 0.14494036154523443,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004285687752335215,
              "median": 0.0009057884076621849,
              "min": 0.0,
              "max": 0.4466650060282735,
              "p5": 0.0,
              "p95": 0.01644105451830562,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2753339030770793e-06,
              "median": 4.939757109255996e-08,
              "min": 0.0,
              "max": 0.00014832162373145977,
              "p5": 3.862469631402861e-11,
              "p95": 5.339285346387629e-06,
              "count": 2566
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1121.2969661610268,
              "median": 20.0,
              "min": 0.0,
              "max": 67896.0,
              "p5": 0.0,
              "p95": 5967.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.41916952339336,
              "median": 0.39863890252079237,
              "min": 0.07996443273385516,
              "max": 0.7627400736433283,
              "p5": 0.1456344878782821,
              "p95": 0.7488365824878764,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 53742127.183629155,
              "median": 918780.0,
              "min": 0.0,
              "max": 517234420.8,
              "p5": 0.0,
              "p95": 227143957.27999985,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.025058592735297164,
              "median": 0.018701879063383928,
              "min": 0.0010742156003695719,
              "max": 0.11971830985915506,
              "p5": 0.0016088396208002822,
              "p95": 0.07592716665593893,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003533031474993069,
              "median": 0.0006619544626311419,
              "min": 0.0,
              "max": 0.012970974138668045,
              "p5": 0.0,
              "p95": 0.012873237745864175,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6915653914892182e-07,
              "median": 1.7682337939053817e-08,
              "min": 3.428140936345194e-11,
              "max": 9.79362721660879e-07,
              "p5": 1.5666295639668995e-10,
              "p95": 8.901464984964593e-07,
              "count": 14
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1500.7142857142858,
              "median": 68.0,
              "min": 0.0,
              "max": 10424.0,
              "p5": 0.0,
              "p95": 6822.999999999998,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 92766496.94635102,
              "median": 39845400.0,
              "min": 10844.770808162992,
              "max": 517234420.8,
              "p5": 443905.1010253059,
              "p95": 361031863.51999974,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2547.0,
              "median": 1067.5,
              "min": 1.0,
              "max": 10424.0,
              "p5": 36.35,
              "p95": 8484.999999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.47698539806215035,
              "median": 0.41840213300001705,
              "min": 0.21519356960465208,
              "max": 0.7627400736433283,
              "p5": 0.27742970149122337,
              "p95": 0.736427073743876,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007440534818686539,
              "median": 0.002838240412039052,
              "min": 0.0010742156003695719,
              "max": 0.02021206096752818,
              "p5": 0.0013620900729091852,
              "p95": 0.019154933634627204,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0833075636891664e-07,
              "median": 7.520948282657735e-10,
              "min": 3.428140936345194e-11,
              "max": 8.421069937156181e-07,
              "p5": 1.0017916545827242e-10,
              "p95": 5.545507129795259e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0063484923172894385,
              "median": 0.005648984325118263,
              "min": 2.753515433530002e-07,
              "max": 0.012970974138668045,
              "p5": 0.00021746792659388918,
              "p95": 0.012918346850235192,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.01540363707299,
              "median": 1.637257695867017,
              "min": 1.1550468262226847,
              "max": 11.632052330335242,
              "p5": 1.1723621439511065,
              "p95": 10.187849447883233,
              "count": 4
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.0787234042553191,
            "market": 0.02409148729213495,
            "sector": 0.017386441800175012,
            "peers": -0.012740349326260558,
            "vs_market": 0.054631916963184146,
            "vs_sector": 0.061336962455144084,
            "vs_peers": 0.09146375358157965
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 80.31894204589653,
          "score_pca_percentile": 80.31894204589653,
          "rank_pca": 507,
          "total": 2571,
          "adv_notional_sgd": 20899765.12,
          "adv_volume_shares": 1451000.0,
          "free_float_shares": 614758989.0,
          "turnover_ratio": 0.002360274556310717,
          "votes": 1034.0,
          "trades": 1034.0,
          "spread_pct": 0.0017870116790548415,
          "spread_ticks": null,
          "amihud": 3.3409773558845345e-10,
          "volatility": 0.1993747338235142
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6256276025219251,
          "loadings": {
            "log_adv": 0.4961524380735906,
            "log_trades": 0.4485467394023611,
            "log_turnover": 0.4508718789178002,
            "neg_spread": 0.45649202510262943,
            "neg_amihud": 0.35037409050031926,
            "neg_vol": 0.13493019413774301
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
          "peer_median_adv": 16322705.0,
          "peer_median_score_pca": 77.59626604434072,
          "peer_median_trades": 697.0,
          "peer_median_volatility": 0.4281564619718758,
          "peer_median_spread_pct": 0.003006297328211636,
          "peer_median_spread_ticks": 1.746952630766857,
          "peer_median_amihud": 8.142193935841919e-10,
          "peer_median_turnover_ratio": 0.004780340530508775,
          "target_vs_peer": {
            "score_pca_delta": 2.72,
            "adv_delta_pct": 28.0,
            "trades_delta_pct": 48.35,
            "volatility_delta_pct": 53.43,
            "spread_pct_delta_pct": 40.56,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 58.97,
            "turnover_ratio_delta_pct": -50.63
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1836",
            "score_pca": 80.31894204589653,
            "rank_pca": 507,
            "adv": 20899765.12,
            "trades": 1034.0,
            "volatility": 0.1993747338235142,
            "spread_pct": 0.0017870116790548415,
            "spread_ticks": null,
            "amihud": 3.3409773558845345e-10,
            "turnover_ratio": 0.002360274556310717,
            "is_target": true
          },
          {
            "ticker": "1440",
            "score_pca": 70.12835472578763,
            "rank_pca": 769,
            "adv": 10943549.999999998,
            "trades": 188.0,
            "volatility": 0.6313111069883397,
            "spread_pct": 0.01719169715923968,
            "spread_ticks": 18.80016934801016,
            "amihud": 2.157133879659228e-09,
            "turnover_ratio": 0.0014288337503156059,
            "is_target": false
          },
          {
            "ticker": "1361",
            "score_pca": 81.75807078957604,
            "rank_pca": 470,
            "adv": 21701860.0,
            "trades": 1088.0,
            "volatility": 0.3093939833381355,
            "spread_pct": 0.0030169857124661146,
            "spread_ticks": 1.746952630766857,
            "amihud": 3.73574203111888e-10,
            "turnover_ratio": 0.0056134614139878745,
            "is_target": false
          },
          {
            "ticker": "551",
            "score_pca": 89.22598210812913,
            "rank_pca": 278,
            "adv": 68584985.0,
            "trades": 3066.0,
            "volatility": 0.43900134892150705,
            "spread_pct": 0.0019522171445939065,
            "spread_ticks": null,
            "amihud": 2.021899738561646e-10,
            "turnover_ratio": 0.006778251497149113,
            "is_target": false
          },
          {
            "ticker": "1368",
            "score_pca": 88.05912096460521,
            "rank_pca": 308,
            "adv": 46312370.0,
            "trades": 2706.0,
            "volatility": 0.34177507093690346,
            "spread_pct": 0.0027592406770654203,
            "spread_ticks": 1.3652894772028346,
            "amihud": 2.8419177779531174e-10,
            "turnover_ratio": 0.007148566960950495,
            "is_target": false
          },
          {
            "ticker": "933",
            "score_pca": 62.62154803578374,
            "rank_pca": 962,
            "adv": 1177884.8,
            "trades": 73.0,
            "volatility": 0.561847537784898,
            "spread_pct": 0.01877065432914735,
            "spread_ticks": 1.1550468262226847,
            "amihud": 1.6657770084819767e-08,
            "turnover_ratio": 0.0005677438261318598,
            "is_target": false
          },
          {
            "ticker": "2331",
            "score_pca": 97.93854531310774,
            "rank_pca": 54,
            "adv": 462306126.90000004,
            "trades": 10414.0,
            "volatility": 0.41731157502224453,
            "spread_pct": 0.0010825581278976308,
            "spread_ticks": null,
            "amihud": 4.0938117946152935e-11,
            "turnover_ratio": 0.011952742304550512,
            "is_target": false
          },
          {
            "ticker": "82331",
            "score_pca": 27.49902761571373,
            "rank_pca": 1865,
            "adv": 22653.52124371825,
            "trades": 1.0,
            "volatility": 0.4108725217590173,
            "spread_pct": 0.0029956089439571575,
            "spread_ticks": null,
            "amihud": 3.1839645780380203e-07,
            "turnover_ratio": 5.507030867060004e-07,
            "is_target": false
          },
          {
            "ticker": "2583",
            "score_pca": 73.43446129910541,
            "rank_pca": 684,
            "adv": 7553920.0,
            "trades": 306.0,
            "volatility": 0.4392860296633468,
            "spread_pct": 0.011168766905740122,
            "spread_ticks": 13.779359430604982,
            "amihud": 1.2548645840564959e-09,
            "turnover_ratio": 0.003947219647029676,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Footwear",
          "sector_count": 14,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7083693278260472,
              "median": 0.5729038849412829,
              "min": 0.0,
              "max": 16.135908972680973,
              "p5": 0.22639189100382076,
              "p95": 1.5615311460100023,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59954730.73526423,
              "median": 225600.0,
              "min": 0.0,
              "max": 13045753760.0,
              "p5": 0.0,
              "p95": 235099798.49,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042955822774348666,
              "median": 0.027759166027212664,
              "min": 0.0005681922931204329,
              "max": 0.586235634471959,
              "p5": 0.0014446798678041423,
              "p95": 0.1350928766249152,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0039408152711833,
              "median": 0.0008616014497243163,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.01538017009361563,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.887607333290114e-07,
              "median": 4.4341297675806585e-08,
              "min": 0.0,
              "max": 2.0997788670380663e-05,
              "p5": 4.8089264371464525e-11,
              "p95": 3.6788223749430563e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1072.6361338000777,
              "median": 20.0,
              "min": 0.0,
              "max": 78392.0,
              "p5": 0.0,
              "p95": 5790.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4090568534548719,
              "median": 0.4140920483906309,
              "min": 0.1993747338235142,
              "max": 0.6313111069883397,
              "p5": 0.22111194161430747,
              "p95": 0.6074021423863469,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 45219056.81294598,
              "median": 887512.4,
              "min": 0.0,
              "max": 462306126.90000004,
              "p5": 6864.0,
              "p95": 206387384.66499987,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.024867406866203673,
              "median": 0.017981175744193514,
              "min": 0.0010825581278976308,
              "max": 0.1273166800966963,
              "p5": 0.0015404529361498177,
              "p95": 0.0750346534951903,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002669830776272802,
              "median": 0.0005618125798922294,
              "min": 0.0,
              "max": 0.011952742304550512,
              "p5": 3.5795700635890025e-07,
              "p95": 0.008830028331210498,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.886035369263145e-08,
              "median": 2.1681916768145e-08,
              "min": 4.0938117946152935e-11,
              "max": 5.15357658214796e-07,
              "p5": 1.4575182428766052e-10,
              "p95": 3.8733287794764984e-07,
              "count": 14
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1331.9285714285713,
              "median": 53.5,
              "min": 0.0,
              "max": 10414.0,
              "p5": 0.65,
              "p95": 5637.799999999997,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 77325418.77765547,
              "median": 16322705.0,
              "min": 22653.52124371825,
              "max": 462306126.90000004,
              "p5": 426984.468808417,
              "p95": 324503727.2349998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2230.25,
              "median": 697.0,
              "min": 1.0,
              "max": 10414.0,
              "p5": 26.200000000000003,
              "p95": 7842.199999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.44384989680179904,
              "median": 0.4281564619718758,
              "min": 0.3093939833381355,
              "max": 0.6313111069883397,
              "p5": 0.3207273639977043,
              "p95": 0.6069988577671351,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007367216125013423,
              "median": 0.003006297328211636,
              "min": 0.0010825581278976308,
              "max": 0.01877065432914735,
              "p5": 0.0013869387837413274,
              "p95": 0.018218019319679663,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 7.369363542561504,
              "median": 1.746952630766857,
              "min": 1.1550468262226847,
              "max": 18.80016934801016,
              "p5": 1.1970953564187148,
              "p95": 17.796007364529125,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.242089005313088e-08,
              "median": 8.142193935841919e-10,
              "min": 4.0938117946152935e-11,
              "max": 3.1839645780380203e-07,
              "p5": 9.737626751465702e-11,
              "p95": 2.1278791710215808e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004679671262900231,
              "median": 0.004780340530508775,
              "min": 5.507030867060004e-07,
              "max": 0.011952742304550512,
              "p5": 0.00019906829615250982,
              "p95": 0.010271280934290503,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.029790115098172087,
            "market": 0.0420090494699672,
            "sector": 0.009639332678123003,
            "peers": -0.011575899953517155,
            "vs_market": -0.01221893437179511,
            "vs_sector": 0.020150782420049085,
            "vs_peers": 0.04136601505168924
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 79.463243873979,
          "score_pca_percentile": 79.463243873979,
          "rank_pca": 529,
          "total": 2571,
          "adv_notional_sgd": 18790505.0,
          "adv_volume_shares": 1204500.0,
          "free_float_shares": 614758989.0,
          "turnover_ratio": 0.0019593044128713016,
          "votes": 1052.0,
          "trades": 1052.0,
          "spread_pct": 0.0019316937174095755,
          "spread_ticks": null,
          "amihud": 4.284018590795504e-10,
          "volatility": 0.2156502066188608
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6305304280613672,
          "loadings": {
            "log_adv": 0.49572422017890017,
            "log_trades": 0.44926767146482127,
            "log_turnover": 0.4495732800348332,
            "neg_spread": 0.46032257397494986,
            "neg_amihud": 0.35225276682338047,
            "neg_vol": 0.11967054331651217
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
          "peer_median_adv": 16103135.0,
          "peer_median_score_pca": 77.47957992998832,
          "peer_median_trades": 695.0,
          "peer_median_volatility": 0.3815909068111376,
          "peer_median_spread_pct": 0.0031034001955106806,
          "peer_median_spread_ticks": 1.674160295516751,
          "peer_median_amihud": 7.815594064468452e-10,
          "peer_median_turnover_ratio": 0.00495252823379326,
          "target_vs_peer": {
            "score_pca_delta": 1.98,
            "adv_delta_pct": 16.7,
            "trades_delta_pct": 51.37,
            "volatility_delta_pct": 43.49,
            "spread_pct_delta_pct": 37.76,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 45.19,
            "turnover_ratio_delta_pct": -60.44
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1836",
            "score_pca": 79.463243873979,
            "rank_pca": 529,
            "adv": 18790505.0,
            "trades": 1052.0,
            "volatility": 0.2156502066188608,
            "spread_pct": 0.0019316937174095755,
            "spread_ticks": null,
            "amihud": 4.284018590795504e-10,
            "turnover_ratio": 0.0019593044128713016,
            "is_target": true
          },
          {
            "ticker": "1440",
            "score_pca": 69.38934266822248,
            "rank_pca": 788,
            "adv": 9422000.0,
            "trades": 167.5,
            "volatility": 0.5829035431237631,
            "spread_pct": 0.01653962340787154,
            "spread_ticks": 15.073679468145762,
            "amihud": 1.9748646604781154e-09,
            "turnover_ratio": 0.0013944040213923383,
            "is_target": false
          },
          {
            "ticker": "1361",
            "score_pca": 81.09684947491247,
            "rank_pca": 487,
            "adv": 21721580.0,
            "trades": 1057.0,
            "volatility": 0.33712051901577655,
            "spread_pct": 0.0028986760263033278,
            "spread_ticks": 1.674160295516751,
            "amihud": 4.349318490518879e-10,
            "turnover_ratio": 0.005125455578196578,
            "is_target": false
          },
          {
            "ticker": "551",
            "score_pca": 89.84830805134189,
            "rank_pca": 262,
            "adv": 66166625.0,
            "trades": 3049.5,
            "volatility": 0.36972292563112613,
            "spread_pct": 0.0016006450762100688,
            "spread_ticks": null,
            "amihud": 1.6760222312456416e-10,
            "turnover_ratio": 0.006732537688595532,
            "is_target": false
          },
          {
            "ticker": "1368",
            "score_pca": 87.00894593543367,
            "rank_pca": 335,
            "adv": 41034034.94,
            "trades": 2296.0,
            "volatility": 0.29653094819203496,
            "spread_pct": 0.002617324577627212,
            "spread_ticks": 1.3594850648960102,
            "amihud": 2.7189982695640055e-10,
            "turnover_ratio": 0.005797703150828094,
            "is_target": false
          },
          {
            "ticker": "933",
            "score_pca": 63.360560093348894,
            "rank_pca": 943,
            "adv": 1307196.0,
            "trades": 95.5,
            "volatility": 0.4977192908051501,
            "spread_pct": 0.018980812906259494,
            "spread_ticks": 1.1735155871984517,
            "amihud": 1.3923023686518304e-08,
            "turnover_ratio": 0.0005763984576277723,
            "is_target": false
          },
          {
            "ticker": "2331",
            "score_pca": 97.31621936989498,
            "rank_pca": 70,
            "adv": 348654447.56,
            "trades": 9237.5,
            "volatility": 0.378102448380628,
            "spread_pct": 0.0009279346373635511,
            "spread_ticks": null,
            "amihud": 4.4410957331522404e-11,
            "turnover_ratio": 0.009923275319032046,
            "is_target": false
          },
          {
            "ticker": "82331",
            "score_pca": 30.688448074679116,
            "rank_pca": 1783,
            "adv": 48213.32630454473,
            "trades": 1.0,
            "volatility": 0.3850793652416472,
            "spread_pct": 0.003308124364718033,
            "spread_ticks": null,
            "amihud": 1.453357450667664e-07,
            "turnover_ratio": 1.376757716765001e-06,
            "is_target": false
          },
          {
            "ticker": "2583",
            "score_pca": 73.86231038506418,
            "rank_pca": 673,
            "adv": 10484690.0,
            "trades": 333.0,
            "volatility": 0.42820709638750004,
            "spread_pct": 0.01014490206190944,
            "spread_ticks": 14.49953078078078,
            "amihud": 1.1281869638418024e-09,
            "turnover_ratio": 0.004779600889389941,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Footwear",
          "sector_count": 14,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7410014474990879,
              "median": 0.5942981433242553,
              "min": 0.0,
              "max": 33.69227034911436,
              "p5": 0.22075809221467163,
              "p95": 1.552970999798418,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 56123888.36950483,
              "median": 216320.0,
              "min": 0.0,
              "max": 11463870050.0,
              "p5": 0.0,
              "p95": 210809636.25,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042120964152236914,
              "median": 0.027087963292653946,
              "min": 0.0005616996269061497,
              "max": 0.586235634471959,
              "p5": 0.0014031756098933932,
              "p95": 0.1346904325574228,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0036029047373763875,
              "median": 0.0008381450893946623,
              "min": 0.0,
              "max": 0.18345863604845108,
              "p5": 0.0,
              "p95": 0.014331697415401683,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.381731162008967e-07,
              "median": 4.661678670489221e-08,
              "min": 0.0,
              "max": 2.961485977790332e-05,
              "p5": 5.154284353112252e-11,
              "p95": 3.527891875138013e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1030.8090237261765,
              "median": 20.0,
              "min": 0.0,
              "max": 89671.5,
              "p5": 0.0,
              "p95": 5626.75,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4949119735089758,
              "median": 0.3815909068111376,
              "min": 0.2156502066188608,
              "max": 1.8910854455596173,
              "p5": 0.22104361690091492,
              "p95": 1.0407672089763116,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 36334878.459021755,
              "median": 1130931.75,
              "min": 0.0,
              "max": 348654447.56,
              "p5": 646.165,
              "p95": 165037362.8959999,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02449084519814993,
              "median": 0.017760218157065515,
              "min": 0.0009279346373635511,
              "max": 0.11679195645423074,
              "p5": 0.0013651964226137877,
              "p95": 0.08184632766301175,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023778511400436133,
              "median": 0.0007490201163956949,
              "min": 0.0,
              "max": 0.009923275319032046,
              "p5": 8.948925158972507e-07,
              "p95": 0.00784929585924831,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1960299047783488e-07,
              "median": 1.815238708739245e-08,
              "min": 4.4410957331522404e-11,
              "max": 7.204270597127733e-07,
              "p5": 1.2448528009699956e-10,
              "p95": 6.247055033267552e-07,
              "count": 14
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1220.107142857143,
              "median": 83.0,
              "min": 0.0,
              "max": 9237.5,
              "p5": 0.65,
              "p95": 5215.299999999997,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 62354848.35328807,
              "median": 16103135.0,
              "min": 48213.32630454473,
              "max": 348654447.56,
              "p5": 488857.26209795417,
              "p95": 249783709.66399986,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2029.625,
              "median": 695.0,
              "min": 1.0,
              "max": 9237.5,
              "p5": 34.075,
              "p95": 7071.699999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4094232670972033,
              "median": 0.3815909068111376,
              "min": 0.29653094819203496,
              "max": 0.5829035431237631,
              "p5": 0.3107372979803445,
              "p95": 0.5530890548122486,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007127255382282833,
              "median": 0.0031034001955106806,
              "min": 0.0009279346373635511,
              "max": 0.018980812906259494,
              "p5": 0.0011633832909598322,
              "p95": 0.018126396581823707,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.7560742393075515,
              "median": 1.674160295516751,
              "min": 1.1735155871984517,
              "max": 15.073679468145762,
              "p5": 1.2107094827379634,
              "p95": 14.958849730672766,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.0410083154258625e-08,
              "median": 7.815594064468452e-10,
              "min": 4.4410957331522404e-11,
              "max": 1.453357450667664e-07,
              "p5": 8.752790035908702e-11,
              "p95": 9.934129258367949e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004291343982847383,
              "median": 0.00495252823379326,
              "min": 1.376757716765001e-06,
              "max": 0.009923275319032046,
              "p5": 0.00020263435268561757,
              "p95": 0.008806517148379265,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.005882352941177338,
            "market": 0.09531099833042789,
            "sector": -0.002080593906619521,
            "peers": 0.11591758675087527,
            "vs_market": -0.10119335127160523,
            "vs_sector": -0.0038017590345578167,
            "vs_peers": -0.1217999396920526
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is weaker today, with average volume down 39.9% from the monthly average and bid depth only half of ask depth. That matters because immediate access on the buy side is thinner even with a 1 tick spread.",
        "market_comparison": "Price held up better than peers on the day, down 0.2% compared with peers down 0.9%. That matters because relative resilience in the tape has not translated into stronger immediate liquidity."
      },
      "30d": {
        "liquidity": "1M score 77.4 vs peer median 80.4 (-3.0 pts).",
        "market_comparison": "Return 7.9% vs peers -1.3%."
      },
      "3m": {
        "liquidity": "Three-month tradability looks slightly better than average. The score is 80.3, opoints above the peer median, which suggests access has been reasonably solid over the quarter.",
        "market_comparison": "Returns were also ahead of peers over three months, up 3.0% compared with peers down 1.2%. That matters because stronger relative performance has come alongside steadier trading access."
      },
      "6m": {
        "liquidity": "Six-month tradability is modestly above peers, with a score of 79.5 compared with a 77.5 peer median. That supports the view that structural access is sound for the company’s size.",
        "market_comparison": "Over six months the stock fell 0.6% while peers rose 11.6%. That matters because the liquidity profile has held up even without matching peer returns."
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
          "median": 0.3879754804784715,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "38.8%",
          "display_range": null,
          "display_text": "38.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 38.8,
          "plain_english": "Market explains about 38.8% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.379450539628822,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "37.9%",
          "display_range": null,
          "display_text": "37.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 37.9,
          "plain_english": "Sector explains about 37.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.2325739798927064,
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
          "plain_english": "Company-specific explains about 23.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.2550149760311658,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.26",
          "display_range": null,
          "display_text": "0.26",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.26% stock move in the same direction in this state.",
          "value_num": 0.26
        },
        "beta_stock_lag": {
          "median": -0.6532154834585993,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.65",
          "display_range": null,
          "display_text": "-0.65",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.65
        },
        "beta_sector": {
          "median": 1.2440518983612248,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.24",
          "display_range": null,
          "display_text": "1.24",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.24% stock move in the same direction in this state.",
          "value_num": 1.24
        },
        "beta_market_lag": {
          "median": 1.0645956984995542,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.06",
          "display_range": null,
          "display_text": "1.06",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.06
        },
        "beta_sector_lag": {
          "median": -0.1254762786324488,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.13",
          "display_range": null,
          "display_text": "-0.13",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.13
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
          "period_label": "2025-04-07 to 2025-04-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5306336588089423,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.1%",
            "display_range": null,
            "display_text": "53.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 53.1,
            "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4385090827555005,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.9%",
              "display_range": null,
              "display_text": "43.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 43.9,
              "plain_english": "Market explains about 43.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.030857258435557217,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "3.1%",
              "display_range": null,
              "display_text": "3.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 3.1,
              "plain_english": "Sector explains about 3.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5306336588089423,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.1%",
              "display_range": null,
              "display_text": "53.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 53.1,
              "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
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
            "median": 0.5090294323234174,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.9%",
            "display_range": null,
            "display_text": "50.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 50.9,
            "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2979331463815467,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.8%",
              "display_range": null,
              "display_text": "29.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.8,
              "plain_english": "Market explains about 29.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1930374212950359,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.3%",
              "display_range": null,
              "display_text": "19.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 19.3,
              "plain_english": "Sector explains about 19.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5090294323234174,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.9%",
              "display_range": null,
              "display_text": "50.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 50.9,
              "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
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
            "median": 0.5910693025638105,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.1%",
            "display_range": null,
            "display_text": "59.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 59.1,
            "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12155405721770819,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.2%",
              "display_range": null,
              "display_text": "12.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.2,
              "plain_english": "Market explains about 12.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28737664021848125,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.7%",
              "display_range": null,
              "display_text": "28.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 28.7,
              "plain_english": "Sector explains about 28.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5910693025638105,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.1%",
              "display_range": null,
              "display_text": "59.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 59.1,
              "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
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
            "median": 0.3678272653440301,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.8%",
            "display_range": null,
            "display_text": "36.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 36.8,
            "plain_english": "Company-specific explains about 36.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3446862127980463,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.5%",
              "display_range": null,
              "display_text": "34.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 34.5,
              "plain_english": "Market explains about 34.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28748652185792367,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.7%",
              "display_range": null,
              "display_text": "28.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.7,
              "plain_english": "Sector explains about 28.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3678272653440301,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.8%",
              "display_range": null,
              "display_text": "36.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.8,
              "plain_english": "Company-specific explains about 36.8% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.627994321253183,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.8%",
            "display_range": null,
            "display_text": "62.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 62.8,
            "plain_english": "Company-specific explains about 62.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24346412397968903,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.3%",
              "display_range": null,
              "display_text": "24.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 24.3,
              "plain_english": "Market explains about 24.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12854155476712792,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.9%",
              "display_range": null,
              "display_text": "12.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.9,
              "plain_english": "Sector explains about 12.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.627994321253183,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.8%",
              "display_range": null,
              "display_text": "62.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.8,
              "plain_english": "Company-specific explains about 62.8% of price moves in the current state."
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
            "median": 0.47191787047863804,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.2%",
            "display_range": null,
            "display_text": "47.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 47.2,
            "plain_english": "Company-specific explains about 47.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.30927626963324295,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.9%",
              "display_range": null,
              "display_text": "30.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 30.9,
              "plain_english": "Market explains about 30.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21880585988811896,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.9%",
              "display_range": null,
              "display_text": "21.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.9,
              "plain_english": "Sector explains about 21.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47191787047863804,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.2%",
              "display_range": null,
              "display_text": "47.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.2,
              "plain_english": "Company-specific explains about 47.2% of price moves in the current state."
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
            "median": 0.4993036073472473,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.9%",
            "display_range": null,
            "display_text": "49.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 49.9,
            "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.25163976469429483,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.2%",
              "display_range": null,
              "display_text": "25.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 25.2,
              "plain_english": "Market explains about 25.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2490566279584579,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.9%",
              "display_range": null,
              "display_text": "24.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 24.9,
              "plain_english": "Sector explains about 24.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4993036073472473,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
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
            "median": 0.6575541240759774,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.8%",
            "display_range": null,
            "display_text": "65.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 65.8,
            "plain_english": "Company-specific explains about 65.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12644939711002018,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.6%",
              "display_range": null,
              "display_text": "12.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 12.6,
              "plain_english": "Market explains about 12.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21599647881400247,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.6%",
              "display_range": null,
              "display_text": "21.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 21.6,
              "plain_english": "Sector explains about 21.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6575541240759774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.8%",
              "display_range": null,
              "display_text": "65.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 65.8,
              "plain_english": "Company-specific explains about 65.8% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.44552223199823815,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.6%",
            "display_range": null,
            "display_text": "44.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 44.6,
            "plain_english": "Sector explains about 44.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2783747334039787,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Market explains about 27.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.44552223199823815,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Sector explains about 44.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2761030345977833,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.6%",
              "display_range": null,
              "display_text": "27.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 27.6,
              "plain_english": "Company-specific explains about 27.6% of price moves in the current state."
            }
          },
          "summary": "Dec: More mixed, though sector-driven still has the largest share."
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
            "median": 0.6104552673622947,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.0%",
            "display_range": null,
            "display_text": "61.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 61.0,
            "plain_english": "Company-specific explains about 61.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2639018470171781,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.4%",
              "display_range": null,
              "display_text": "26.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 26.4,
              "plain_english": "Market explains about 26.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1256428856205271,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.6%",
              "display_range": null,
              "display_text": "12.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.6,
              "plain_english": "Sector explains about 12.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6104552673622947,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.0%",
              "display_range": null,
              "display_text": "61.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 61.0,
              "plain_english": "Company-specific explains about 61.0% of price moves in the current state."
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
            "median": 0.5471162716552728,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.7%",
            "display_range": null,
            "display_text": "54.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 54.7,
            "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.17897431938973007,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.9%",
              "display_range": null,
              "display_text": "17.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 17.9,
              "plain_english": "Market explains about 17.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27390940895499716,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.4%",
              "display_range": null,
              "display_text": "27.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 27.4,
              "plain_english": "Sector explains about 27.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5471162716552728,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.7%",
              "display_range": null,
              "display_text": "54.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 54.7,
              "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4211544673136346,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.1%",
            "display_range": null,
            "display_text": "42.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 42.1,
            "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.27025366461981265,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.0%",
              "display_range": null,
              "display_text": "27.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 27.0,
              "plain_english": "Market explains about 27.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3085918680665528,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.9%",
              "display_range": null,
              "display_text": "30.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 30.9,
              "plain_english": "Sector explains about 30.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4211544673136346,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.1%",
              "display_range": null,
              "display_text": "42.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.1,
              "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4624301111927753,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.2%",
            "display_range": null,
            "display_text": "46.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 46.2,
            "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34479385711259314,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.5%",
              "display_range": null,
              "display_text": "34.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 34.5,
              "plain_english": "Market explains about 34.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19277603169463167,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.3%",
              "display_range": null,
              "display_text": "19.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 19.3,
              "plain_english": "Sector explains about 19.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4624301111927753,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.2%",
              "display_range": null,
              "display_text": "46.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 46.2,
              "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 9.615384615384615,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.012054102673575613,
            "low": 0.012054102673575613,
            "high": 0.012054102673575613
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
            "median": 0.024587179034688492,
            "low": 0.024587179034688492,
            "high": 0.024587179034688492
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9032258064516129,
            0.0967741935483871
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
            112.0,
            12.0
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
        "market_link_display": "0.26",
        "sector_link_display": "1.24",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.26% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.24% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.65",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 38.8,
        "driver_share_display": "38.8%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9032258064516129,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 9.6 days.",
        "expected_duration_days": 9.6
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
          "expected_duration_days": 9.615384615384615,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.012054102673575613,
            "low": 0.012054102673575613,
            "high": 0.012054102673575613
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
            "median": 0.024587179034688492,
            "low": 0.024587179034688492,
            "high": 0.024587179034688492
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9032258064516129,
          0.0967741935483871
        ],
        [
          0.10483870967741936,
          0.8951612903225806
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9032258064516129,
            0.0967741935483871
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
            112.0,
            12.0
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
        "text": "Liquidity score: 79.5 — Strong",
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
    "liq_subtitle": "Overall tradability is around peer levels, while current trading conditions are thinner than the medium-term profile.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is strong, with the stock up 7.9% over one month compared with peers down 1.3% and the market up 2.4%.",
    "perf_insight": "The return backdrop is firm, but trading support is less convincing. The six-month liquidity score is 79.5, opoints above the peer median, while one-day average volume is 39.9% below the one-month average.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Broader market moves remain the main influence on the tape, with market factors accounting for 38.8% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 38.8% of price changes. Other influences are sector 37.9%, and company-specific 23.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 38.8%, sector 37.9%, and company-specific 23.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 38.8%, sector 37.9%, and company-specific 23.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the stock is moving with external conditions at a time when one-day average volume is 39.9% below the one-month average, which can leave day-to-day trading feeling thinner.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: broader market moves are the largest influence at 38.8% of current price action.",
      "Monthly change: the pattern was mostly market in February and April, with March more mixed."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Conditions look orderly on spread, but the order book is less supportive on the bid side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 23, 2025 to Apr 23, 2026 (241 trading days • 311,162 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Near-term execution is less supported than the medium-term liquidity score suggests, with displayed bid depth at 0.50x of ask depth and the spread at 1 tick. That matters because trading costs remain contained, but immediate buy-side support is thinner.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 25.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Near-term execution conditions are defined more by order-book balance than by spread.",
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
    "intraday_insight": "The spread is 1 tick, which keeps headline trading costs",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Recent trading is better explained by market direction and order-book balance than by short activity.",
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
    "exec_subtitle": "Liquidity is broadly in line for the stock’s size, but near-term trading feels less supported than the six-month score",
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
        "value": "79.5/100",
        "sub": "Peer median 77.5 (+2.0 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$18.8M",
        "sub": "Peer median HK$16.1M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.19%",
        "sub": "N/A ticks; peers 0.31%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks balanced rather than clearly strong or weak for the stock’s",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "15.180",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.13%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.50x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.07% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.53% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.14% with 100.0% fill.",
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
        "value": "79",
        "suffix": "/100",
        "bar_pct": 79,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 529/2571",
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
        "value": "0.19",
        "suffix": "%",
        "bar_pct": 2,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.19% vs peers 0.31%",
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
        "value": "18.8M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$16.1M",
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
        "value": "38.8",
        "suffix": "market",
        "bar_pct": 39,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 37.9% • Company 23.3%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is solid relative to peers, with a six-month liquidity score of 79.5 compared with a peer median of 77.5. That matters because access to liquidity is credible for the stock’s size.",
      "Recent trading is weaker than the monthly average, with one-day average volume 39.9% below the one-month",
      "The clearest execution watchpoint is lighter buy-side support, with displayed bid depth at 0.50x of ask depth while the spread is 1 tick. That matters because the order book is less supportive than the medium-term liquidity score implies."
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
      "overall": "6M liquidity is strong: score 79.5 vs peer median 77.5 (+2.0 pts). 1D average volume down -39.9% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 79.5 vs peer median 77.5 (+2.0 pts)."
      ],
      "concerns": [
        "1D average volume down -39.9% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +2.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -0.6%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -0.6% vs market 9.5%.",
        "vs_sector": "Worse than sector: -0.6% vs sector -0.2%.",
        "vs_peers": "Worse than peers: -0.6% vs peers 11.6%."
      },
      "adv": {
        "insight": "ADV is HK$18.8M, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$18.8M vs market HK$216.3K.",
        "vs_sector": "Better than sector: HK$18.8M vs sector HK$1.1M.",
        "vs_peers": "Better than peers: HK$18.8M vs peers HK$16.1M."
      },
      "spread": {
        "insight": "Spread is 0.19%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 2.71%.",
        "vs_sector": "Better than sector: 0.19% vs sector 1.78%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.31%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.20%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.20% vs market 0.08%.",
        "vs_sector": "Better than sector: 0.20% vs sector 0.07%.",
        "vs_peers": "Worse than peers: 0.20% vs peers 0.50%."
      },
      "volatility": {
        "insight": "Volatility is 21.57%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 21.57% vs market 59.43%.",
        "vs_sector": "Better than sector: 21.57% vs sector 38.16%.",
        "vs_peers": "Better than peers: 21.57% vs peers 38.16%."
      },
      "trades": {
        "insight": "Trades is 1052, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 1052 vs market 20.",
        "vs_sector": "Better than sector: 1052 vs sector 83.",
        "vs_peers": "Better than peers: 1052 vs peers 695."
      },
      "amihud": {
        "insight": "Price impact is 4.28e-10, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 4.28e-10 vs market 4.66e-08.",
        "vs_sector": "Better than sector: 4.28e-10 vs sector 1.82e-08.",
        "vs_peers": "Better than peers: 4.28e-10 vs peers 7.82e-10."
      }
    },
    "performance": {
      "overall": "Recent performance is ahead of both peers and the market, with a one-month return of 7.9% compared with peers down 1.3% and the market up 2.4%. Liquidity gives mixed confirmation to that move because the six-month liquidity score is 79.5, opoints above the peer median, while one-day average volume is 39.9% below the one-month average and displayed bid depth is only half of ask depth.",
      "conclusion": "Performance is weak relative to comparison groups."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by the market right now, with 38.8% of recent price moves explained by broader conditions. That matters because trading is more exposed to external swings at a time when average volume is 39.9% below the 1M average.",
      "beta": "This is a mixed driver picture rather than a pure stock-specific one, and the recent 1M return of +7.9% compared with peers at -1.3% shows the shares have been moving on a firmer backdrop than the peer group. That matters because strong recent performance can persist even when the immediate driver is broader market direction.",
      "rolling_change": "The monthly pattern has not stayed in one lane: February was mostly market, March became more mixed, and April moved back to mostly market. That matters because the current market-led read looks more temporary than structural."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a low-volatility state, which signals a calmer tape than a high-volatility backdrop.",
      "transitions": "This state looks reasonably settled because low volatility has tended to persist for about 9.6 days, though the recent 39.9% drop in average volume compared with the 1M average leaves it open to change.",
      "trading_implications": "Trading conditions may feel steadier while this state holds, but the lighter recent volume and bid depth at 0.50x of ask depth mean day-to-day liquidity can still feel thinner than the calm price action implies."
    },
    "execution": {
      "overall": "Displayed liquidity looks bid-light rather than balanced because bid depth is only half of ask depth while the spread remains 1",
      "concern": "The clearest stress point is the imbalance on the bid side, with displayed bid depth at 0.50x ask depth. With 1D average volume down 39.9% from the 1M average, that thinner buy-side depth matters more for near-term access.",
      "peer_context": "The broader standing still looks reasonable, with a 6M liquidity score of 79.5 compared with a peer median of 77.5, but the current book does not fully visible support that relative position. Historical trade-size context is grounded in 241 trading days and 311,162 trades, so the immediate read is that current access is weaker than the longer-term profile."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 47.6% of trade count and 64.7% of trade value, compared with retail-like trades at 25.5% of count and 12.8% of value. That mix suggests the tape is being set more by larger-value participation than by smaller tickets.",
      "institutional_gap": "The gap is clearer in value than in count, with institution-like activity leading retail-like by 51.9 points on trade value and 22.1 points on trade count. That makes the flow base look steadier than a count-only read would imply.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that the tape is being shaped by institution-like flow. By trade count and value, flow looks mainly institution-like. The broader backdrop is constructive, with the stock up 7.9% over one month compared with peers down 1.3%. That suggests price pressure has recently been stronger on the upside.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "N/A",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, where 82.7% of trading takes place, while the open contributes 0.2% and the close 10.9%. That points to the middle of the day as the most reliable source of access.",
      "hhi_interpretation": "A concentration score of 0.134 indicates trading is not heavily confined to a small number of intervals. That supports a steadier intraday flow picture.",
      "best_times": "The continuous session is the clearest window for usable liquidity because it carries the large majority of activity. The open is minimal, while the close is meaningful but still well behind the main session.",
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
        "1836",
        "1440",
        "1361",
        "551",
        "1368",
        "933",
        "2331",
        "82331",
        "2583"
      ],
      "scores": [
        79.463243873979,
        69.38934266822248,
        81.09684947491247,
        89.84830805134189,
        87.00894593543367,
        63.360560093348894,
        97.31621936989498,
        30.688448074679116,
        73.86231038506418
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
        18790505.0,
        9422000.0,
        21721580.0,
        66166625.0,
        41034034.94,
        1307196.0,
        348654447.56,
        48213.32630454473,
        10484690.0
      ],
      "total": 2571
    },
    "market_comparison": {
      "sector_name": "Footwear",
      "sector_count": 14,
      "market_count": 2571,
      "company": {
        "volatility": 0.2156502066188608,
        "adv": 18790505.0,
        "spread_pct": 0.0019316937174095755,
        "turnover_ratio": 0.0019593044128713016,
        "amihud": 4.284018590795504e-10,
        "trades": 1052.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7410014474990879,
          "median": 0.5942981433242553,
          "min": 0.0,
          "max": 33.69227034911436,
          "p5": 0.22075809221467163,
          "p95": 1.552970999798418,
          "count": 2571
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 56123888.36950483,
          "median": 216320.0,
          "min": 0.0,
          "max": 11463870050.0,
          "p5": 0.0,
          "p95": 210809636.25,
          "count": 2571
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042120964152236914,
          "median": 0.027087963292653946,
          "min": 0.0005616996269061497,
          "max": 0.586235634471959,
          "p5": 0.0014031756098933932,
          "p95": 0.1346904325574228,
          "count": 2571
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0036029047373763875,
          "median": 0.0008381450893946623,
          "min": 0.0,
          "max": 0.18345863604845108,
          "p5": 0.0,
          "p95": 0.014331697415401683,
          "count": 2552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.381731162008967e-07,
          "median": 4.661678670489221e-08,
          "min": 0.0,
          "max": 2.961485977790332e-05,
          "p5": 5.154284353112252e-11,
          "p95": 3.527891875138013e-06,
          "count": 2571
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1030.8090237261765,
          "median": 20.0,
          "min": 0.0,
          "max": 89671.5,
          "p5": 0.0,
          "p95": 5626.75,
          "count": 2571
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4949119735089758,
          "median": 0.3815909068111376,
          "min": 0.2156502066188608,
          "max": 1.8910854455596173,
          "p5": 0.22104361690091492,
          "p95": 1.0407672089763116,
          "count": 14
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 36334878.459021755,
          "median": 1130931.75,
          "min": 0.0,
          "max": 348654447.56,
          "p5": 646.165,
          "p95": 165037362.8959999,
          "count": 14
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.02449084519814993,
          "median": 0.017760218157065515,
          "min": 0.0009279346373635511,
          "max": 0.11679195645423074,
          "p5": 0.0013651964226137877,
          "p95": 0.08184632766301175,
          "count": 14
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023778511400436133,
          "median": 0.0007490201163956949,
          "min": 0.0,
          "max": 0.009923275319032046,
          "p5": 8.948925158972507e-07,
          "p95": 0.00784929585924831,
          "count": 14
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.1960299047783488e-07,
          "median": 1.815238708739245e-08,
          "min": 4.4410957331522404e-11,
          "max": 7.204270597127733e-07,
          "p5": 1.2448528009699956e-10,
          "p95": 6.247055033267552e-07,
          "count": 14
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1220.107142857143,
          "median": 83.0,
          "min": 0.0,
          "max": 9237.5,
          "p5": 0.65,
          "p95": 5215.299999999997,
          "count": 14
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 62354848.35328807,
          "median": 16103135.0,
          "min": 48213.32630454473,
          "max": 348654447.56,
          "p5": 488857.26209795417,
          "p95": 249783709.66399986,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2029.625,
          "median": 695.0,
          "min": 1.0,
          "max": 9237.5,
          "p5": 34.075,
          "p95": 7071.699999999997,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4094232670972033,
          "median": 0.3815909068111376,
          "min": 0.29653094819203496,
          "max": 0.5829035431237631,
          "p5": 0.3107372979803445,
          "p95": 0.5530890548122486,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.007127255382282833,
          "median": 0.0031034001955106806,
          "min": 0.0009279346373635511,
          "max": 0.018980812906259494,
          "p5": 0.0011633832909598322,
          "p95": 0.018126396581823707,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 6.7560742393075515,
          "median": 1.674160295516751,
          "min": 1.1735155871984517,
          "max": 15.073679468145762,
          "p5": 1.2107094827379634,
          "p95": 14.958849730672766,
          "count": 5
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.0410083154258625e-08,
          "median": 7.815594064468452e-10,
          "min": 4.4410957331522404e-11,
          "max": 1.453357450667664e-07,
          "p5": 8.752790035908702e-11,
          "p95": 9.934129258367949e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004291343982847383,
          "median": 0.00495252823379326,
          "min": 1.376757716765001e-06,
          "max": 0.009923275319032046,
          "p5": 0.00020263435268561757,
          "p95": 0.008806517148379265,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.0787234042553191,
        "market": 0.02409148729213495,
        "sector": 0.017386441800175012,
        "peers": -0.012740349326260558
      },
      {
        "horizon": "3M",
        "stock": 0.029790115098172087,
        "market": 0.0420090494699672,
        "sector": 0.009639332678123003,
        "peers": -0.011575899953517155
      },
      {
        "horizon": "6M",
        "stock": -0.005882352941177338,
        "market": 0.09531099833042789,
        "sector": -0.002080593906619521,
        "peers": 0.11591758675087527
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
      "share_market": 0.3879754804784715,
      "share_sector": 0.379450539628822,
      "share_idio": 0.2325739798927064,
      "beta_market": 0.2550149760311658,
      "beta_sector": 1.2440518983612248,
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
            "median": 0.3879754804784715,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.8%",
            "display_range": null,
            "display_text": "38.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 38.8,
            "plain_english": "Market explains about 38.8% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.379450539628822,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.9%",
            "display_range": null,
            "display_text": "37.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 37.9,
            "plain_english": "Sector explains about 37.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.2325739798927064,
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
            "plain_english": "Company-specific explains about 23.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.2550149760311658,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.26",
            "display_range": null,
            "display_text": "0.26",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.26% stock move in the same direction in this state.",
            "value_num": 0.26
          },
          "beta_stock_lag": {
            "median": -0.6532154834585993,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.65",
            "display_range": null,
            "display_text": "-0.65",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.65
          },
          "beta_sector": {
            "median": 1.2440518983612248,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.24",
            "display_range": null,
            "display_text": "1.24",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.24% stock move in the same direction in this state.",
            "value_num": 1.24
          },
          "beta_market_lag": {
            "median": 1.0645956984995542,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.06",
            "display_range": null,
            "display_text": "1.06",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.06
          },
          "beta_sector_lag": {
            "median": -0.1254762786324488,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.13",
            "display_range": null,
            "display_text": "-0.13",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.13
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
            "period_label": "2025-04-07 to 2025-04-30",
            "n_obs": 16,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5306336588089423,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.1%",
              "display_range": null,
              "display_text": "53.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 53.1,
              "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4385090827555005,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.9%",
                "display_range": null,
                "display_text": "43.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 43.9,
                "plain_english": "Market explains about 43.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.030857258435557217,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "3.1%",
                "display_range": null,
                "display_text": "3.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 3.1,
                "plain_english": "Sector explains about 3.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5306336588089423,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.1%",
                "display_range": null,
                "display_text": "53.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 53.1,
                "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
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
              "median": 0.5090294323234174,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.9%",
              "display_range": null,
              "display_text": "50.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 50.9,
              "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2979331463815467,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.8%",
                "display_range": null,
                "display_text": "29.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.8,
                "plain_english": "Market explains about 29.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1930374212950359,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.3%",
                "display_range": null,
                "display_text": "19.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 19.3,
                "plain_english": "Sector explains about 19.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5090294323234174,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.9%",
                "display_range": null,
                "display_text": "50.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 50.9,
                "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
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
              "median": 0.5910693025638105,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.1%",
              "display_range": null,
              "display_text": "59.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 59.1,
              "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12155405721770819,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.2%",
                "display_range": null,
                "display_text": "12.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.2,
                "plain_english": "Market explains about 12.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28737664021848125,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.7%",
                "display_range": null,
                "display_text": "28.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 28.7,
                "plain_english": "Sector explains about 28.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5910693025638105,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.1%",
                "display_range": null,
                "display_text": "59.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 59.1,
                "plain_english": "Company-specific explains about 59.1% of price moves in the current state."
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
              "median": 0.3678272653440301,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.8%",
              "display_range": null,
              "display_text": "36.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.8,
              "plain_english": "Company-specific explains about 36.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3446862127980463,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.5%",
                "display_range": null,
                "display_text": "34.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 34.5,
                "plain_english": "Market explains about 34.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28748652185792367,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.7%",
                "display_range": null,
                "display_text": "28.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.7,
                "plain_english": "Sector explains about 28.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3678272653440301,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.8%",
                "display_range": null,
                "display_text": "36.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.8,
                "plain_english": "Company-specific explains about 36.8% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.627994321253183,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.8%",
              "display_range": null,
              "display_text": "62.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.8,
              "plain_english": "Company-specific explains about 62.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24346412397968903,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.3%",
                "display_range": null,
                "display_text": "24.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 24.3,
                "plain_english": "Market explains about 24.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12854155476712792,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.9%",
                "display_range": null,
                "display_text": "12.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.9,
                "plain_english": "Sector explains about 12.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.627994321253183,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.8%",
                "display_range": null,
                "display_text": "62.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 62.8,
                "plain_english": "Company-specific explains about 62.8% of price moves in the current state."
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
              "median": 0.47191787047863804,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.2%",
              "display_range": null,
              "display_text": "47.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.2,
              "plain_english": "Company-specific explains about 47.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.30927626963324295,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.9%",
                "display_range": null,
                "display_text": "30.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 30.9,
                "plain_english": "Market explains about 30.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21880585988811896,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.9%",
                "display_range": null,
                "display_text": "21.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.9,
                "plain_english": "Sector explains about 21.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47191787047863804,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.2%",
                "display_range": null,
                "display_text": "47.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 47.2,
                "plain_english": "Company-specific explains about 47.2% of price moves in the current state."
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
              "median": 0.4993036073472473,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.25163976469429483,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.2%",
                "display_range": null,
                "display_text": "25.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 25.2,
                "plain_english": "Market explains about 25.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2490566279584579,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.9%",
                "display_range": null,
                "display_text": "24.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 24.9,
                "plain_english": "Sector explains about 24.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4993036073472473,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.9%",
                "display_range": null,
                "display_text": "49.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 49.9,
                "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
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
              "median": 0.6575541240759774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.8%",
              "display_range": null,
              "display_text": "65.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 65.8,
              "plain_english": "Company-specific explains about 65.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12644939711002018,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.6%",
                "display_range": null,
                "display_text": "12.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 12.6,
                "plain_english": "Market explains about 12.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21599647881400247,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.6%",
                "display_range": null,
                "display_text": "21.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 21.6,
                "plain_english": "Sector explains about 21.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6575541240759774,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "65.8%",
                "display_range": null,
                "display_text": "65.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 65.8,
                "plain_english": "Company-specific explains about 65.8% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.44552223199823815,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Sector explains about 44.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2783747334039787,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Market explains about 27.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.44552223199823815,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.6%",
                "display_range": null,
                "display_text": "44.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 44.6,
                "plain_english": "Sector explains about 44.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2761030345977833,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.6%",
                "display_range": null,
                "display_text": "27.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 27.6,
                "plain_english": "Company-specific explains about 27.6% of price moves in the current state."
              }
            },
            "summary": "Dec: More mixed, though sector-driven still has the largest share."
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
              "median": 0.6104552673622947,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.0%",
              "display_range": null,
              "display_text": "61.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 61.0,
              "plain_english": "Company-specific explains about 61.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2639018470171781,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.4%",
                "display_range": null,
                "display_text": "26.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 26.4,
                "plain_english": "Market explains about 26.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1256428856205271,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.6%",
                "display_range": null,
                "display_text": "12.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.6,
                "plain_english": "Sector explains about 12.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6104552673622947,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.0%",
                "display_range": null,
                "display_text": "61.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 61.0,
                "plain_english": "Company-specific explains about 61.0% of price moves in the current state."
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
              "median": 0.5471162716552728,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.7%",
              "display_range": null,
              "display_text": "54.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 54.7,
              "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.17897431938973007,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.9%",
                "display_range": null,
                "display_text": "17.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 17.9,
                "plain_english": "Market explains about 17.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27390940895499716,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.4%",
                "display_range": null,
                "display_text": "27.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 27.4,
                "plain_english": "Sector explains about 27.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5471162716552728,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.7%",
                "display_range": null,
                "display_text": "54.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 54.7,
                "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4211544673136346,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.1%",
              "display_range": null,
              "display_text": "42.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.1,
              "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.27025366461981265,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.0%",
                "display_range": null,
                "display_text": "27.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 27.0,
                "plain_english": "Market explains about 27.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3085918680665528,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.9%",
                "display_range": null,
                "display_text": "30.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 30.9,
                "plain_english": "Sector explains about 30.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4211544673136346,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.1%",
                "display_range": null,
                "display_text": "42.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.1,
                "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-23",
            "n_obs": 14,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4624301111927753,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.2%",
              "display_range": null,
              "display_text": "46.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 46.2,
              "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34479385711259314,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.5%",
                "display_range": null,
                "display_text": "34.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 34.5,
                "plain_english": "Market explains about 34.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19277603169463167,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.3%",
                "display_range": null,
                "display_text": "19.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 19.3,
                "plain_english": "Sector explains about 19.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4624301111927753,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.2%",
                "display_range": null,
                "display_text": "46.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 46.2,
                "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 9.615384615384615,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.012054102673575613,
              "low": 0.012054102673575613,
              "high": 0.012054102673575613
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
              "median": 0.024587179034688492,
              "low": 0.024587179034688492,
              "high": 0.024587179034688492
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9032258064516129,
              0.0967741935483871
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
              112.0,
              12.0
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
          "market_link_display": "0.26",
          "sector_link_display": "1.24",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.26% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.24% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.65",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 38.8,
          "driver_share_display": "38.8%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9032258064516129,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 9.6 days.",
          "expected_duration_days": 9.6
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
          "period_label": "2025-04-07 to 2025-04-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.4385090827555005,
          "share_sector": 0.030857258435557217,
          "share_company": 0.5306336588089423,
          "share_market_display": "43.9%",
          "share_sector_display": "3.1%",
          "share_company_display": "53.1%",
          "dominant_share_display": "53.1%"
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
          "share_market": 0.2979331463815467,
          "share_sector": 0.1930374212950359,
          "share_company": 0.5090294323234174,
          "share_market_display": "29.8%",
          "share_sector_display": "19.3%",
          "share_company_display": "50.9%",
          "dominant_share_display": "50.9%"
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
          "share_market": 0.12155405721770819,
          "share_sector": 0.28737664021848125,
          "share_company": 0.5910693025638105,
          "share_market_display": "12.2%",
          "share_sector_display": "28.7%",
          "share_company_display": "59.1%",
          "dominant_share_display": "59.1%"
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
          "summary": "Jul: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3446862127980463,
          "share_sector": 0.28748652185792367,
          "share_company": 0.3678272653440301,
          "share_market_display": "34.5%",
          "share_sector_display": "28.7%",
          "share_company_display": "36.8%",
          "dominant_share_display": "36.8%"
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
          "share_market": 0.24346412397968903,
          "share_sector": 0.12854155476712792,
          "share_company": 0.627994321253183,
          "share_market_display": "24.3%",
          "share_sector_display": "12.9%",
          "share_company_display": "62.8%",
          "dominant_share_display": "62.8%"
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
          "share_market": 0.30927626963324295,
          "share_sector": 0.21880585988811896,
          "share_company": 0.47191787047863804,
          "share_market_display": "30.9%",
          "share_sector_display": "21.9%",
          "share_company_display": "47.2%",
          "dominant_share_display": "47.2%"
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
          "share_market": 0.25163976469429483,
          "share_sector": 0.2490566279584579,
          "share_company": 0.4993036073472473,
          "share_market_display": "25.2%",
          "share_sector_display": "24.9%",
          "share_company_display": "49.9%",
          "dominant_share_display": "49.9%"
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
          "share_market": 0.12644939711002018,
          "share_sector": 0.21599647881400247,
          "share_company": 0.6575541240759774,
          "share_market_display": "12.6%",
          "share_sector_display": "21.6%",
          "share_company_display": "65.8%",
          "dominant_share_display": "65.8%"
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
          "summary": "Dec: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.2783747334039787,
          "share_sector": 0.44552223199823815,
          "share_company": 0.2761030345977833,
          "share_market_display": "27.8%",
          "share_sector_display": "44.6%",
          "share_company_display": "27.6%",
          "dominant_share_display": "44.6%"
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
          "share_market": 0.2639018470171781,
          "share_sector": 0.1256428856205271,
          "share_company": 0.6104552673622947,
          "share_market_display": "26.4%",
          "share_sector_display": "12.6%",
          "share_company_display": "61.0%",
          "dominant_share_display": "61.0%"
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
          "share_market": 0.17897431938973007,
          "share_sector": 0.27390940895499716,
          "share_company": 0.5471162716552728,
          "share_market_display": "17.9%",
          "share_sector_display": "27.4%",
          "share_company_display": "54.7%",
          "dominant_share_display": "54.7%"
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
          "share_market": 0.27025366461981265,
          "share_sector": 0.3085918680665528,
          "share_company": 0.4211544673136346,
          "share_market_display": "27.0%",
          "share_sector_display": "30.9%",
          "share_company_display": "42.1%",
          "dominant_share_display": "42.1%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.34479385711259314,
          "share_sector": 0.19277603169463167,
          "share_company": 0.4624301111927753,
          "share_market_display": "34.5%",
          "share_sector_display": "19.3%",
          "share_company_display": "46.2%",
          "dominant_share_display": "46.2%"
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
            "expected_duration_days": 9.615384615384615,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.012054102673575613,
              "low": 0.012054102673575613,
              "high": 0.012054102673575613
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
              "median": 0.024587179034688492,
              "low": 0.024587179034688492,
              "high": 0.024587179034688492
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9032258064516129,
            0.0967741935483871
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
          "price": 15.17,
          "quantity": 9000.0,
          "value": 136530.0
        },
        {
          "level": 2,
          "price": 15.16,
          "quantity": 3500.0,
          "value": 53060.0
        },
        {
          "level": 3,
          "price": 15.15,
          "quantity": 3000.0,
          "value": 45450.0
        },
        {
          "level": 4,
          "price": 15.14,
          "quantity": 2500.0,
          "value": 37850.0
        },
        {
          "level": 5,
          "price": 15.13,
          "quantity": 3000.0,
          "value": 45390.0
        },
        {
          "level": 6,
          "price": 15.12,
          "quantity": 2000.0,
          "value": 30240.0
        },
        {
          "level": 7,
          "price": 15.11,
          "quantity": 1000.0,
          "value": 15110.0
        },
        {
          "level": 8,
          "price": 15.1,
          "quantity": 4500.0,
          "value": 67950.0
        },
        {
          "level": 9,
          "price": 15.09,
          "quantity": 6500.0,
          "value": 98085.0
        },
        {
          "level": 10,
          "price": 15.08,
          "quantity": 9000.0,
          "value": 135720.0
        },
        {
          "level": 11,
          "price": 15.07,
          "quantity": 7500.0,
          "value": 113025.0
        },
        {
          "level": 12,
          "price": 15.06,
          "quantity": 1500.0,
          "value": 22590.0
        },
        {
          "level": 13,
          "price": 15.05,
          "quantity": 4000.0,
          "value": 60200.0
        },
        {
          "level": 14,
          "price": 15.04,
          "quantity": 17000.0,
          "value": 255680.0
        },
        {
          "level": 15,
          "price": 15.03,
          "quantity": 2500.0,
          "value": 37575.0
        },
        {
          "level": 16,
          "price": 15.02,
          "quantity": 1000.0,
          "value": 15020.0
        },
        {
          "level": 17,
          "price": 15.0,
          "quantity": 36500.0,
          "value": 547500.0
        },
        {
          "level": 18,
          "price": 14.99,
          "quantity": 7500.0,
          "value": 112425.0
        },
        {
          "level": 19,
          "price": 14.98,
          "quantity": 3000.0,
          "value": 44940.0
        },
        {
          "level": 20,
          "price": 14.97,
          "quantity": 1000.0,
          "value": 14970.0
        },
        {
          "level": 21,
          "price": 14.95,
          "quantity": 8500.0,
          "value": 127075.0
        },
        {
          "level": 22,
          "price": 14.94,
          "quantity": 1000.0,
          "value": 14940.0
        },
        {
          "level": 23,
          "price": 14.92,
          "quantity": 4000.0,
          "value": 59680.0
        },
        {
          "level": 24,
          "price": 14.91,
          "quantity": 1000.0,
          "value": 14910.0
        },
        {
          "level": 25,
          "price": 14.9,
          "quantity": 2000.0,
          "value": 29800.0
        },
        {
          "level": 26,
          "price": 14.88,
          "quantity": 2500.0,
          "value": 37200.0
        },
        {
          "level": 27,
          "price": 14.85,
          "quantity": 1000.0,
          "value": 14850.0
        },
        {
          "level": 28,
          "price": 14.82,
          "quantity": 1000.0,
          "value": 14820.0
        },
        {
          "level": 29,
          "price": 14.8,
          "quantity": 20500.0,
          "value": 303400.0
        },
        {
          "level": 30,
          "price": 14.79,
          "quantity": 1000.0,
          "value": 14790.0
        },
        {
          "level": 31,
          "price": 14.53,
          "quantity": 500.0,
          "value": 7265.0
        },
        {
          "level": 32,
          "price": 14.5,
          "quantity": 2500.0,
          "value": 36250.0
        },
        {
          "level": 33,
          "price": 14.48,
          "quantity": 500.0,
          "value": 7240.0
        },
        {
          "level": 34,
          "price": 14.44,
          "quantity": 500.0,
          "value": 7220.0
        },
        {
          "level": 35,
          "price": 14.4,
          "quantity": 500.0,
          "value": 7200.0
        },
        {
          "level": 36,
          "price": 14.22,
          "quantity": 1500.0,
          "value": 21330.0
        },
        {
          "level": 37,
          "price": 14.2,
          "quantity": 1000.0,
          "value": 14200.0
        },
        {
          "level": 38,
          "price": 14.02,
          "quantity": 1000.0,
          "value": 14020.0
        },
        {
          "level": 39,
          "price": 14.0,
          "quantity": 1000.0,
          "value": 14000.0
        },
        {
          "level": 40,
          "price": 13.8,
          "quantity": 1000.0,
          "value": 13800.0
        },
        {
          "level": 41,
          "price": 13.74,
          "quantity": 2000.0,
          "value": 27480.0
        },
        {
          "level": 42,
          "price": 13.7,
          "quantity": 1000.0,
          "value": 13700.0
        },
        {
          "level": 43,
          "price": 13.5,
          "quantity": 500.0,
          "value": 6750.0
        },
        {
          "level": 44,
          "price": 13.2,
          "quantity": 2000.0,
          "value": 26400.0
        },
        {
          "level": 45,
          "price": 13.19,
          "quantity": 500.0,
          "value": 6595.0
        },
        {
          "level": 46,
          "price": 13.0,
          "quantity": 1500.0,
          "value": 19500.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 15.19,
          "quantity": 1000.0,
          "value": 15190.0
        },
        {
          "level": 2,
          "price": 15.22,
          "quantity": 14500.0,
          "value": 220690.0
        },
        {
          "level": 3,
          "price": 15.23,
          "quantity": 2000.0,
          "value": 30460.0
        },
        {
          "level": 4,
          "price": 15.24,
          "quantity": 2000.0,
          "value": 30480.0
        },
        {
          "level": 5,
          "price": 15.25,
          "quantity": 2000.0,
          "value": 30500.0
        },
        {
          "level": 6,
          "price": 15.26,
          "quantity": 3500.0,
          "value": 53410.0
        },
        {
          "level": 7,
          "price": 15.27,
          "quantity": 11500.0,
          "value": 175605.0
        },
        {
          "level": 8,
          "price": 15.28,
          "quantity": 8500.0,
          "value": 129880.0
        },
        {
          "level": 9,
          "price": 15.29,
          "quantity": 4500.0,
          "value": 68805.0
        },
        {
          "level": 10,
          "price": 15.3,
          "quantity": 10000.0,
          "value": 153000.0
        },
        {
          "level": 11,
          "price": 15.31,
          "quantity": 9500.0,
          "value": 145445.0
        },
        {
          "level": 12,
          "price": 15.32,
          "quantity": 2500.0,
          "value": 38300.0
        },
        {
          "level": 13,
          "price": 15.33,
          "quantity": 1500.0,
          "value": 22995.0
        },
        {
          "level": 14,
          "price": 15.34,
          "quantity": 1000.0,
          "value": 15340.0
        },
        {
          "level": 15,
          "price": 15.35,
          "quantity": 4000.0,
          "value": 61400.0
        },
        {
          "level": 16,
          "price": 15.36,
          "quantity": 3000.0,
          "value": 46080.0
        },
        {
          "level": 17,
          "price": 15.38,
          "quantity": 1000.0,
          "value": 15380.0
        },
        {
          "level": 18,
          "price": 15.39,
          "quantity": 500.0,
          "value": 7695.0
        },
        {
          "level": 19,
          "price": 15.4,
          "quantity": 17000.0,
          "value": 261800.0
        },
        {
          "level": 20,
          "price": 15.42,
          "quantity": 9500.0,
          "value": 146490.0
        },
        {
          "level": 21,
          "price": 15.44,
          "quantity": 2000.0,
          "value": 30880.0
        },
        {
          "level": 22,
          "price": 15.45,
          "quantity": 2500.0,
          "value": 38625.0
        },
        {
          "level": 23,
          "price": 15.46,
          "quantity": 1000.0,
          "value": 15460.0
        },
        {
          "level": 24,
          "price": 15.48,
          "quantity": 1000.0,
          "value": 15480.0
        },
        {
          "level": 25,
          "price": 15.5,
          "quantity": 18000.0,
          "value": 279000.0
        },
        {
          "level": 26,
          "price": 15.58,
          "quantity": 500.0,
          "value": 7790.0
        },
        {
          "level": 27,
          "price": 15.59,
          "quantity": 2000.0,
          "value": 31180.0
        },
        {
          "level": 28,
          "price": 15.6,
          "quantity": 10000.0,
          "value": 156000.0
        },
        {
          "level": 29,
          "price": 15.66,
          "quantity": 2500.0,
          "value": 39150.0
        },
        {
          "level": 30,
          "price": 15.68,
          "quantity": 3000.0,
          "value": 47040.0
        },
        {
          "level": 31,
          "price": 15.7,
          "quantity": 1000.0,
          "value": 15700.0
        },
        {
          "level": 32,
          "price": 15.75,
          "quantity": 20000.0,
          "value": 315000.0
        },
        {
          "level": 33,
          "price": 15.79,
          "quantity": 4000.0,
          "value": 63160.0
        },
        {
          "level": 34,
          "price": 15.8,
          "quantity": 3000.0,
          "value": 47400.0
        },
        {
          "level": 35,
          "price": 15.85,
          "quantity": 4000.0,
          "value": 63400.0
        },
        {
          "level": 36,
          "price": 15.88,
          "quantity": 4500.0,
          "value": 71460.0
        },
        {
          "level": 37,
          "price": 15.89,
          "quantity": 1000.0,
          "value": 15890.0
        },
        {
          "level": 38,
          "price": 15.96,
          "quantity": 3000.0,
          "value": 47880.0
        },
        {
          "level": 39,
          "price": 15.98,
          "quantity": 20000.0,
          "value": 319600.0
        },
        {
          "level": 40,
          "price": 16.0,
          "quantity": 4000.0,
          "value": 64000.0
        },
        {
          "level": 41,
          "price": 16.18,
          "quantity": 500.0,
          "value": 8090.0
        },
        {
          "level": 42,
          "price": 16.2,
          "quantity": 4000.0,
          "value": 64800.0
        },
        {
          "level": 43,
          "price": 16.3,
          "quantity": 5000.0,
          "value": 81500.0
        },
        {
          "level": 44,
          "price": 16.62,
          "quantity": 3000.0,
          "value": 49860.0
        },
        {
          "level": 45,
          "price": 16.78,
          "quantity": 500.0,
          "value": 8390.0
        },
        {
          "level": 46,
          "price": 16.8,
          "quantity": 500.0,
          "value": 8400.0
        },
        {
          "level": 47,
          "price": 16.94,
          "quantity": 90000.0,
          "value": 1524600.0
        },
        {
          "level": 48,
          "price": 16.98,
          "quantity": 20000.0,
          "value": 339600.0
        },
        {
          "level": 49,
          "price": 17.5,
          "quantity": 2000.0,
          "value": 35000.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-23 07:59:54.608000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 15.18,
        "spread_pct": 0.0013175230566534633,
        "spread_ticks": 1.0,
        "tick_size": 0.02,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2763725.0,
        "ask_depth_notional_displayed": 5473280.0,
        "bid_depth_notional_top10": 2763725.0,
        "ask_depth_notional_top10": 5473280.0,
        "bid_ask_depth_ratio": 0.5049
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 241,
        "n_trades_used": 311162,
        "first_trade_date": "2025-04-23",
        "last_trade_date": "2026-04-23",
        "window_label": "Apr 23, 2025 to Apr 23, 2026",
        "window_short_label": "Apr 23, 2025 to Apr 23, 2026",
        "trade_days_label": "241 trading days",
        "trade_count_label": "311,162 trades",
        "window_detail_label": "241 trading days • 311,162 trades",
        "history_note": "Trade-size percentiles use Apr 23, 2025 to Apr 23, 2026 history (241 trading days • 311,162 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 34700.0,
            "impact_pct": -0.000659,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.26,
            "pct_of_adv": 0.23
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 57600.0,
            "impact_pct": -0.000659,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.08,
            "pct_of_adv": 0.37
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 4007748.67,
            "impact_pct": -0.018525,
            "filled_pct": 69.0,
            "levels_consumed": 46,
            "pct_of_bid_depth": 145.01,
            "pct_of_adv": 26.08
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-23",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "120323",
            "timestamp": "2026-04-23 01:20:17.608000000",
            "local_timestamp": "2026-04-23 09:20:17",
            "posted_price": 16.94,
            "size_shares": 30000.0,
            "notional": 508200.0,
            "impact_pct": -0.002957,
            "filled_pct": 100.0,
            "levels_consumed": 9,
            "pct_of_bid_depth": 18.39,
            "price_vs_mid_pct": 11.594,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "120579",
            "timestamp": "2026-04-23 01:20:17.608000000",
            "local_timestamp": "2026-04-23 09:20:17",
            "posted_price": 16.94,
            "size_shares": 30000.0,
            "notional": 508200.0,
            "impact_pct": -0.002957,
            "filled_pct": 100.0,
            "levels_consumed": 9,
            "pct_of_bid_depth": 18.39,
            "price_vs_mid_pct": 11.594,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "119811",
            "timestamp": "2026-04-23 01:20:17.608000000",
            "local_timestamp": "2026-04-23 09:20:17",
            "posted_price": 16.94,
            "size_shares": 30000.0,
            "notional": 508200.0,
            "impact_pct": -0.002957,
            "filled_pct": 100.0,
            "levels_consumed": 9,
            "pct_of_bid_depth": 18.39,
            "price_vs_mid_pct": 11.594,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-23",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.02,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.003949967083607669,
            "spread_ticks": 3.000000000000025,
            "bid_depth_notional": 2147035.0,
            "ask_depth_notional": 4449680.0,
            "mid_price": 15.190000000000001
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.003965631196298777,
            "spread_ticks": 3.000000000000025,
            "bid_depth_notional": 2474390.0,
            "ask_depth_notional": 5073655.0,
            "mid_price": 15.129999999999999
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0046311610982467935,
            "spread_ticks": 3.500000000000014,
            "bid_depth_notional": 2187180.0,
            "ask_depth_notional": 5323540.0,
            "mid_price": 15.115
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.001990049751243739,
            "spread_ticks": 1.499999999999968,
            "bid_depth_notional": 2890455.0,
            "ask_depth_notional": 5976970.0,
            "mid_price": 15.075
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.001988730527013547,
            "spread_ticks": 1.499999999999968,
            "bid_depth_notional": 2447675.0,
            "ask_depth_notional": 5469855.0,
            "mid_price": 15.085
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0006624710168929969,
            "spread_ticks": 0.49999999999998934,
            "bid_depth_notional": 2863010.0,
            "ask_depth_notional": 5692655.0,
            "mid_price": 15.094999999999999
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.003965631196298777,
            "spread_ticks": 3.000000000000025,
            "bid_depth_notional": 3045675.0,
            "ask_depth_notional": 5673515.0,
            "mid_price": 15.129999999999999
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0032948929159801604,
            "spread_ticks": 2.4999999999999467,
            "bid_depth_notional": 3207045.0,
            "ask_depth_notional": 5541600.0,
            "mid_price": 15.175
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0026350461133069266,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 3067210.0,
            "ask_depth_notional": 6266790.0,
            "mid_price": 15.18
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0013157894736842994,
            "spread_ticks": 1.0000000000000675,
            "bid_depth_notional": 3280445.0,
            "ask_depth_notional": 5978220.0,
            "mid_price": 15.2
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0013175230566534633,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 2763725.0,
            "ask_depth_notional": 5473280.0,
            "mid_price": 15.18
          }
        ],
        "summary": {
          "median_spread_pct": 0.0026350461133069266,
          "median_spread_ticks": 1.9999999999999574,
          "median_bid_depth_notional": 2863010.0,
          "median_ask_depth_notional": 5541600.0,
          "tightest_bucket": "13:00",
          "widest_bucket": "10:30",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.3,
      "peers": [
        {
          "ticker": "2331",
          "pct": 0.2
        },
        {
          "ticker": "1368",
          "pct": 1.4
        },
        {
          "ticker": "551",
          "pct": 1.5
        },
        {
          "ticker": "1361",
          "pct": 1.5
        },
        {
          "ticker": "1440",
          "pct": 5.9
        },
        {
          "ticker": "2583",
          "pct": 13.3
        },
        {
          "ticker": "933",
          "pct": 72.2
        },
        {
          "ticker": "82331",
          "pct": 9182.2
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 451,
          "n_runs": 124,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-23",
          "last_trade_date": "2026-04-23",
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
            "retail_pct": 0.22172949002217296,
            "mixed_pct": 0.18403547671840353,
            "instit_pct": 0.4878048780487805,
            "ambiguous_pct": 0.10643015521064302,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10643015521064302,
            "retail_qty_pct": 0.10774410774410774,
            "mixed_qty_pct": 0.20454545454545456,
            "instit_qty_pct": 0.5858585858585859,
            "ambiguous_qty_pct": 0.10185185185185185,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.10185185185185185,
            "retail_notional_pct": 0.10790127850783288,
            "mixed_notional_pct": 0.20453567198127007,
            "instit_notional_pct": 0.5857562326561709,
            "ambiguous_notional_pct": 0.10180681685472615,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10180681685472615
          },
          "run_composition": {
            "retail_pct": 0.47580645161290325,
            "mixed_pct": 0.1935483870967742,
            "instit_pct": 0.25,
            "ambiguous_pct": 0.08064516129032258,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.08064516129032258,
            "retail_notional_pct": 0.08750078215708496,
            "mixed_notional_pct": 0.18102521674441888,
            "instit_notional_pct": 0.6598367551257361,
            "unclear_notional_pct": 0.07163724597276007
          },
          "counts": {
            "trades": {
              "retail": 100,
              "mixed": 83,
              "institutional": 220,
              "ambiguous": 48,
              "unobservable": 0,
              "unclear": 48
            },
            "runs": {
              "retail": 59,
              "mixed": 24,
              "institutional": 31,
              "ambiguous": 10,
              "unobservable": 0,
              "unclear": 10
            }
          },
          "confidence": {
            "high": 0.7258064516129032,
            "medium": 0.1935483870967742,
            "low": 0.08064516129032258,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 90,
            "medium": 24,
            "low": 10,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5720620842572062,
            "medium": 0.16851441241685144,
            "low": 0.25942350332594233,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 258,
            "medium": 76,
            "low": 117,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.869354838709677,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.08064516129032258,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.47580645161290325,
          "dominance_gap": 0.22580645161290325,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 193,
              "WALK_BOOK": 169,
              "UNOBSERVABLE": 89
            },
            "d2_information": {
              "UNOBSERVABLE": 451
            },
            "d3_urgency": {
              "UNOBSERVABLE": 124
            },
            "participant_confidence": {
              "HIGH": 90,
              "MEDIUM": 24,
              "LOW": 10
            }
          },
          "trade_size": {
            "avg": 19935.587583148557,
            "median": 7600.0
          },
          "run_size": {
            "avg": 57997.17741935484,
            "median": 22807.5,
            "avg_length": 1.2096774193548387
          },
          "recent_trades": [
            {
              "trade_id": "451",
              "timestamp": "2026-04-23T07:59:54.200502",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76889,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "450",
              "timestamp": "2026-04-23T07:59:37.323097",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 76888,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "449",
              "timestamp": "2026-04-23T07:59:33.054472",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 76888,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "448",
              "timestamp": "2026-04-23T07:59:22.852833",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "447",
              "timestamp": "2026-04-23T07:59:18.617663",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "446",
              "timestamp": "2026-04-23T07:59:09.227522",
              "price": 15.19,
              "size": 1000.0,
              "notional": 15190.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "445",
              "timestamp": "2026-04-23T07:59:09.227522",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "444",
              "timestamp": "2026-04-23T07:59:01.857658",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "443",
              "timestamp": "2026-04-23T07:59:00.053865",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "442",
              "timestamp": "2026-04-23T07:59:00.053865",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "441",
              "timestamp": "2026-04-23T07:57:27.053969",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "440",
              "timestamp": "2026-04-23T07:55:50.788530",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76886,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "439",
              "timestamp": "2026-04-23T07:55:50.788530",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76886,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "438",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 1500.0,
              "notional": 22785.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "437",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "436",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "435",
              "timestamp": "2026-04-23T07:54:47.421953",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76884,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "434",
              "timestamp": "2026-04-23T07:54:30.027979",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76883,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "433",
              "timestamp": "2026-04-23T07:51:57.137369",
              "price": 15.17,
              "size": 1000.0,
              "notional": 15170.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76882,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "432",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "431",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 4500.0,
              "notional": 68310.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "430",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "429",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1000.0,
              "notional": 15180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "428",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "427",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "426",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "425",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1000.0,
              "notional": 15180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "424",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "423",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1500.0,
              "notional": 22770.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "422",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 18000.0,
              "notional": 273240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 18364,
          "n_runs": 5532,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-23",
          "last_trade_date": "2026-04-23",
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
            "retail_pct": 0.2541929862774995,
            "mixed_pct": 0.17006098889130908,
            "instit_pct": 0.46144630799390113,
            "ambiguous_pct": 0.11429971683729034,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11429971683729034,
            "retail_qty_pct": 0.13618234151500444,
            "mixed_qty_pct": 0.16008304831627762,
            "instit_qty_pct": 0.6027472917717399,
            "ambiguous_qty_pct": 0.1009873183969781,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1009873183969781,
            "retail_notional_pct": 0.13701107261177498,
            "mixed_notional_pct": 0.15989593889540174,
            "instit_notional_pct": 0.6021471433317799,
            "ambiguous_notional_pct": 0.10094584516104328,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10094584516104328
          },
          "run_composition": {
            "retail_pct": 0.5258496023138105,
            "mixed_pct": 0.20119305856832972,
            "instit_pct": 0.1681127982646421,
            "ambiguous_pct": 0.10484454085321765,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10484454085321765,
            "retail_notional_pct": 0.11572538059648405,
            "mixed_notional_pct": 0.1666700873319938,
            "instit_notional_pct": 0.6248292855224857,
            "unclear_notional_pct": 0.09277524654903646
          },
          "counts": {
            "trades": {
              "retail": 4668,
              "mixed": 3123,
              "institutional": 8474,
              "ambiguous": 2099,
              "unobservable": 0,
              "unclear": 2099
            },
            "runs": {
              "retail": 2909,
              "mixed": 1113,
              "institutional": 930,
              "ambiguous": 580,
              "unobservable": 0,
              "unclear": 580
            }
          },
          "confidence": {
            "high": 0.6939624005784526,
            "medium": 0.20119305856832972,
            "low": 0.10484454085321765,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 3839,
            "medium": 1113,
            "low": 580,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5489544761489872,
            "medium": 0.16102156392942715,
            "low": 0.2900239599215857,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 10081,
            "medium": 2957,
            "low": 5326,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8815347071583514,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10484454085321765,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5258496023138105,
          "dominance_gap": 0.3246565437454808,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 10178,
              "WALK_BOOK": 4406,
              "UNOBSERVABLE": 3780
            },
            "d2_information": {
              "UNOBSERVABLE": 18364
            },
            "d3_urgency": {
              "UNOBSERVABLE": 5532
            },
            "participant_confidence": {
              "HIGH": 3839,
              "MEDIUM": 1113,
              "LOW": 580
            }
          },
          "trade_size": {
            "avg": 18543.757220104555,
            "median": 7590.0
          },
          "run_size": {
            "avg": 49407.020135574836,
            "median": 15150.0,
            "avg_length": 1.3326102675343456
          },
          "recent_trades": [
            {
              "trade_id": "451",
              "timestamp": "2026-04-23T07:59:54.200502",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76889,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "450",
              "timestamp": "2026-04-23T07:59:37.323097",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 76888,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "449",
              "timestamp": "2026-04-23T07:59:33.054472",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 76888,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "448",
              "timestamp": "2026-04-23T07:59:22.852833",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "447",
              "timestamp": "2026-04-23T07:59:18.617663",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "446",
              "timestamp": "2026-04-23T07:59:09.227522",
              "price": 15.19,
              "size": 1000.0,
              "notional": 15190.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "445",
              "timestamp": "2026-04-23T07:59:09.227522",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "444",
              "timestamp": "2026-04-23T07:59:01.857658",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "443",
              "timestamp": "2026-04-23T07:59:00.053865",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "442",
              "timestamp": "2026-04-23T07:59:00.053865",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "441",
              "timestamp": "2026-04-23T07:57:27.053969",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "440",
              "timestamp": "2026-04-23T07:55:50.788530",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76886,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "439",
              "timestamp": "2026-04-23T07:55:50.788530",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76886,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "438",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 1500.0,
              "notional": 22785.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "437",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "436",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "435",
              "timestamp": "2026-04-23T07:54:47.421953",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76884,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "434",
              "timestamp": "2026-04-23T07:54:30.027979",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76883,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "433",
              "timestamp": "2026-04-23T07:51:57.137369",
              "price": 15.17,
              "size": 1000.0,
              "notional": 15170.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76882,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "432",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "431",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 4500.0,
              "notional": 68310.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "430",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "429",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1000.0,
              "notional": 15180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "428",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "427",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "426",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "425",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1000.0,
              "notional": 15180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "424",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "423",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1500.0,
              "notional": 22770.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "422",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 18000.0,
              "notional": 273240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 68878,
          "n_runs": 18557,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-19",
          "last_trade_date": "2026-04-23",
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
            "retail_pct": 0.21815383721943146,
            "mixed_pct": 0.1637823397891925,
            "instit_pct": 0.5107000783994889,
            "ambiguous_pct": 0.1073637445918871,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1073637445918871,
            "retail_qty_pct": 0.10451832767456587,
            "mixed_qty_pct": 0.1423843829043563,
            "instit_qty_pct": 0.6682161899324252,
            "ambiguous_qty_pct": 0.08488109948865269,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08488109948865269,
            "retail_notional_pct": 0.10473426736871493,
            "mixed_notional_pct": 0.14241158849470748,
            "instit_notional_pct": 0.6679787165567173,
            "ambiguous_notional_pct": 0.08487542757986039,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08487542757986039
          },
          "run_composition": {
            "retail_pct": 0.5288570350811015,
            "mixed_pct": 0.19760737188123081,
            "instit_pct": 0.16769952039661584,
            "ambiguous_pct": 0.1058360726410519,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1058360726410519,
            "retail_notional_pct": 0.08975706637824571,
            "mixed_notional_pct": 0.15067731348499724,
            "instit_notional_pct": 0.6803403873245069,
            "unclear_notional_pct": 0.07922523281225027
          },
          "counts": {
            "trades": {
              "retail": 15026,
              "mixed": 11281,
              "institutional": 35176,
              "ambiguous": 7395,
              "unobservable": 0,
              "unclear": 7395
            },
            "runs": {
              "retail": 9814,
              "mixed": 3667,
              "institutional": 3112,
              "ambiguous": 1964,
              "unobservable": 0,
              "unclear": 1964
            }
          },
          "confidence": {
            "high": 0.6965565554777173,
            "medium": 0.19760737188123081,
            "low": 0.1058360726410519,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 12926,
            "medium": 3667,
            "low": 1964,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5689625134295421,
            "medium": 0.15679897790295885,
            "low": 0.27423850866749905,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 39189,
            "medium": 10800,
            "low": 18889,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8871261518564422,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1058360726410519,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5288570350811015,
          "dominance_gap": 0.3312496631998707,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 40937,
              "WALK_BOOK": 14664,
              "UNOBSERVABLE": 13277
            },
            "d2_information": {
              "UNOBSERVABLE": 68878
            },
            "d3_urgency": {
              "UNOBSERVABLE": 18557
            },
            "participant_confidence": {
              "HIGH": 12926,
              "MEDIUM": 3667,
              "LOW": 1964
            }
          },
          "trade_size": {
            "avg": 20941.04848993873,
            "median": 7560.0
          },
          "run_size": {
            "avg": 63825.406700436484,
            "median": 15140.0,
            "avg_length": 1.4378940561513176
          },
          "recent_trades": [
            {
              "trade_id": "451",
              "timestamp": "2026-04-23T07:59:54.200502",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76889,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "450",
              "timestamp": "2026-04-23T07:59:37.323097",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 76888,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "449",
              "timestamp": "2026-04-23T07:59:33.054472",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 76888,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "448",
              "timestamp": "2026-04-23T07:59:22.852833",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "447",
              "timestamp": "2026-04-23T07:59:18.617663",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "446",
              "timestamp": "2026-04-23T07:59:09.227522",
              "price": 15.19,
              "size": 1000.0,
              "notional": 15190.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "445",
              "timestamp": "2026-04-23T07:59:09.227522",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "444",
              "timestamp": "2026-04-23T07:59:01.857658",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "443",
              "timestamp": "2026-04-23T07:59:00.053865",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "442",
              "timestamp": "2026-04-23T07:59:00.053865",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "441",
              "timestamp": "2026-04-23T07:57:27.053969",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "440",
              "timestamp": "2026-04-23T07:55:50.788530",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76886,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "439",
              "timestamp": "2026-04-23T07:55:50.788530",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76886,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "438",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 1500.0,
              "notional": 22785.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "437",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "436",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "435",
              "timestamp": "2026-04-23T07:54:47.421953",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76884,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "434",
              "timestamp": "2026-04-23T07:54:30.027979",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76883,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "433",
              "timestamp": "2026-04-23T07:51:57.137369",
              "price": 15.17,
              "size": 1000.0,
              "notional": 15170.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76882,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "432",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "431",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 4500.0,
              "notional": 68310.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "430",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "429",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1000.0,
              "notional": 15180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "428",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "427",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "426",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "425",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1000.0,
              "notional": 15180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "424",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "423",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1500.0,
              "notional": 22770.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "422",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 18000.0,
              "notional": 273240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 137492,
          "n_runs": 43442,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-08",
          "last_trade_date": "2026-04-23",
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
            "retail_pct": 0.255069385855177,
            "mixed_pct": 0.16965350711314112,
            "instit_pct": 0.47578768219241846,
            "ambiguous_pct": 0.09948942483926337,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09948942483926337,
            "retail_qty_pct": 0.12642159628436087,
            "mixed_qty_pct": 0.1426579361950139,
            "instit_qty_pct": 0.6483308908707195,
            "ambiguous_qty_pct": 0.08258957664990574,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08258957664990574,
            "retail_notional_pct": 0.12803843108086296,
            "mixed_notional_pct": 0.1428620454654994,
            "instit_notional_pct": 0.646607594464648,
            "ambiguous_notional_pct": 0.08249192898898955,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08249192898898955
          },
          "run_composition": {
            "retail_pct": 0.5370839279959486,
            "mixed_pct": 0.20441047833893466,
            "instit_pct": 0.16939827816398878,
            "ambiguous_pct": 0.08910731550112794,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.08910731550112794,
            "retail_notional_pct": 0.10700255523010134,
            "mixed_notional_pct": 0.15023938304407497,
            "instit_notional_pct": 0.668728838986148,
            "unclear_notional_pct": 0.07402922273967572
          },
          "counts": {
            "trades": {
              "retail": 35070,
              "mixed": 23326,
              "institutional": 65417,
              "ambiguous": 13679,
              "unobservable": 0,
              "unclear": 13679
            },
            "runs": {
              "retail": 23332,
              "mixed": 8880,
              "institutional": 7359,
              "ambiguous": 3871,
              "unobservable": 0,
              "unclear": 3871
            }
          },
          "confidence": {
            "high": 0.7064822061599374,
            "medium": 0.20441047833893466,
            "low": 0.08910731550112794,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 30691,
            "medium": 8880,
            "low": 3871,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5802664882320426,
            "medium": 0.16335495883396853,
            "low": 0.25637855293398887,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 79782,
            "medium": 22460,
            "low": 35250,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8859525344137009,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.08910731550112794,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5370839279959486,
          "dominance_gap": 0.33267344965701395,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 84871,
              "WALK_BOOK": 27426,
              "UNOBSERVABLE": 25195
            },
            "d2_information": {
              "UNOBSERVABLE": 137492
            },
            "d3_urgency": {
              "UNOBSERVABLE": 43442
            },
            "participant_confidence": {
              "HIGH": 30691,
              "MEDIUM": 8880,
              "LOW": 3871
            }
          },
          "trade_size": {
            "avg": 18837.771279638087,
            "median": 7920.0
          },
          "run_size": {
            "avg": 49046.75749182818,
            "median": 14930.0,
            "avg_length": 1.4086368030937801
          },
          "recent_trades": [
            {
              "trade_id": "451",
              "timestamp": "2026-04-23T07:59:54.200502",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76889,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "450",
              "timestamp": "2026-04-23T07:59:37.323097",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 76888,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "449",
              "timestamp": "2026-04-23T07:59:33.054472",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 76888,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "448",
              "timestamp": "2026-04-23T07:59:22.852833",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "447",
              "timestamp": "2026-04-23T07:59:18.617663",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "446",
              "timestamp": "2026-04-23T07:59:09.227522",
              "price": 15.19,
              "size": 1000.0,
              "notional": 15190.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "445",
              "timestamp": "2026-04-23T07:59:09.227522",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "444",
              "timestamp": "2026-04-23T07:59:01.857658",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76887,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "443",
              "timestamp": "2026-04-23T07:59:00.053865",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "442",
              "timestamp": "2026-04-23T07:59:00.053865",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "441",
              "timestamp": "2026-04-23T07:57:27.053969",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "440",
              "timestamp": "2026-04-23T07:55:50.788530",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76886,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "439",
              "timestamp": "2026-04-23T07:55:50.788530",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76886,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "438",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 1500.0,
              "notional": 22785.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "437",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "436",
              "timestamp": "2026-04-23T07:55:02.108063",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 76885,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "435",
              "timestamp": "2026-04-23T07:54:47.421953",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76884,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "434",
              "timestamp": "2026-04-23T07:54:30.027979",
              "price": 15.19,
              "size": 500.0,
              "notional": 7595.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76883,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "433",
              "timestamp": "2026-04-23T07:51:57.137369",
              "price": 15.17,
              "size": 1000.0,
              "notional": 15170.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 76882,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "432",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "431",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 4500.0,
              "notional": 68310.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "430",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "429",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1000.0,
              "notional": 15180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "428",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "427",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "426",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "425",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1000.0,
              "notional": 15180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "424",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 500.0,
              "notional": 7590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "423",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 1500.0,
              "notional": 22770.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "422",
              "timestamp": "2026-04-23T07:51:57.079319",
              "price": 15.18,
              "size": 18000.0,
              "notional": 273240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 76881,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 137492,
      "n_runs": 43442,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-08",
      "last_trade_date": "2026-04-23",
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
        "retail_pct": 0.255069385855177,
        "mixed_pct": 0.16965350711314112,
        "instit_pct": 0.47578768219241846,
        "ambiguous_pct": 0.09948942483926337,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09948942483926337,
        "retail_qty_pct": 0.12642159628436087,
        "mixed_qty_pct": 0.1426579361950139,
        "instit_qty_pct": 0.6483308908707195,
        "ambiguous_qty_pct": 0.08258957664990574,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.08258957664990574,
        "retail_notional_pct": 0.12803843108086296,
        "mixed_notional_pct": 0.1428620454654994,
        "instit_notional_pct": 0.646607594464648,
        "ambiguous_notional_pct": 0.08249192898898955,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.08249192898898955
      },
      "run_composition": {
        "retail_pct": 0.5370839279959486,
        "mixed_pct": 0.20441047833893466,
        "instit_pct": 0.16939827816398878,
        "ambiguous_pct": 0.08910731550112794,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.08910731550112794
      },
      "trade_size": {
        "avg": 18837.771279638087,
        "median": 7920.0
      },
      "run_size": {
        "avg": 49046.75749182818,
        "median": 14930.0,
        "avg_length": 1.4086368030937801
      },
      "confidence": {
        "high": 0.7064822061599374,
        "medium": 0.20441047833893466,
        "low": 0.08910731550112794,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 30691,
        "medium": 8880,
        "low": 3871,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5802664882320426,
        "medium": 0.16335495883396853,
        "low": 0.25637855293398887,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 79782,
        "medium": 22460,
        "low": 35250,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 35070,
          "mixed": 23326,
          "institutional": 65417,
          "ambiguous": 13679,
          "unobservable": 0,
          "unclear": 13679
        },
        "runs": {
          "retail": 23332,
          "mixed": 8880,
          "institutional": 7359,
          "ambiguous": 3871,
          "unobservable": 0,
          "unclear": 3871
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8859525344137009,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.08910731550112794,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5370839279959486,
      "dominance_gap": 0.33267344965701395,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 21693,
            "n_runs": 8634,
            "retail_pct": 0.3278937906237035,
            "mixed_pct": 0.1802885723505278,
            "instit_pct": 0.4088415617941271,
            "ambiguous_pct": 0.08297607523164155,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.08297607523164155,
            "avg_trade_size": 15717.198629972801,
            "avg_run_notional": 32458.50911744267,
            "retail_qty_pct": 0.1832124717443755,
            "mixed_qty_pct": 0.14119827270600954,
            "instit_qty_pct": 0.6036652024285913,
            "ambiguous_qty_pct": 0.07192405312102362,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07192405312102362,
            "retail_notional_pct": 0.18327915894259122,
            "mixed_notional_pct": 0.14141894527213625,
            "instit_notional_pct": 0.6033986573711418,
            "ambiguous_notional_pct": 0.07190323841413065,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07190323841413065,
            "run_retail_pct": 0.5496872828353023,
            "run_mixed_pct": 0.2123002084781098,
            "run_instit_pct": 0.16886726893676163,
            "run_ambiguous_pct": 0.06914523974982627,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.06914523974982627,
            "avg_feature_coverage": 0.8845784109335185,
            "high_confidence_pct": 0.718554551772064,
            "medium_confidence_pct": 0.2123002084781098,
            "low_confidence_pct": 0.06914523974982627,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 14058,
            "n_runs": 5416,
            "retail_pct": 0.29200455256793284,
            "mixed_pct": 0.16076255512875232,
            "instit_pct": 0.4468629961587708,
            "ambiguous_pct": 0.10036989614454403,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10036989614454403,
            "avg_trade_size": 14594.282385830134,
            "avg_run_notional": 31500.998297636634,
            "retail_qty_pct": 0.17668438917884435,
            "mixed_qty_pct": 0.14170721141767917,
            "instit_qty_pct": 0.5876848443850687,
            "ambiguous_qty_pct": 0.0939235550184078,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0939235550184078,
            "retail_notional_pct": 0.17666339845253015,
            "mixed_notional_pct": 0.1417426289726073,
            "instit_notional_pct": 0.587770437354069,
            "ambiguous_notional_pct": 0.09382353522079348,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09382353522079348,
            "run_retail_pct": 0.5245568685376661,
            "run_mixed_pct": 0.2010709010339734,
            "run_instit_pct": 0.18962333825701624,
            "run_ambiguous_pct": 0.08474889217134417,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.08474889217134417,
            "avg_feature_coverage": 0.8841765140324963,
            "high_confidence_pct": 0.7141802067946824,
            "medium_confidence_pct": 0.2010709010339734,
            "low_confidence_pct": 0.08474889217134417,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 30606,
            "n_runs": 8758,
            "retail_pct": 0.22521727765797556,
            "mixed_pct": 0.16571914003790106,
            "instit_pct": 0.5099980396000784,
            "ambiguous_pct": 0.09906554270404495,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09906554270404495,
            "avg_trade_size": 22530.458199045937,
            "avg_run_notional": 65600.85313656085,
            "retail_qty_pct": 0.09814603553112584,
            "mixed_qty_pct": 0.12500234076026923,
            "instit_qty_pct": 0.7090355499785937,
            "ambiguous_qty_pct": 0.06781607373001115,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.06781607373001115,
            "retail_notional_pct": 0.09883159197573929,
            "mixed_notional_pct": 0.12509671881819195,
            "instit_notional_pct": 0.7080250829401235,
            "ambiguous_notional_pct": 0.0680466062659453,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0680466062659453,
            "run_retail_pct": 0.5364238410596026,
            "run_mixed_pct": 0.2003882164877826,
            "run_instit_pct": 0.16567709522722082,
            "run_ambiguous_pct": 0.09751084722539392,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09751084722539392,
            "avg_feature_coverage": 0.8904544416533454,
            "high_confidence_pct": 0.7021009362868235,
            "medium_confidence_pct": 0.2003882164877826,
            "low_confidence_pct": 0.09751084722539392,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 16624,
            "n_runs": 4208,
            "retail_pct": 0.20019249278152068,
            "mixed_pct": 0.15748315688161693,
            "instit_pct": 0.5445139557266603,
            "ambiguous_pct": 0.09781039461020212,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09781039461020212,
            "avg_trade_size": 20608.35146053898,
            "avg_run_notional": 64916.3557081749,
            "retail_qty_pct": 0.09957666849860015,
            "mixed_qty_pct": 0.14001303219175204,
            "instit_qty_pct": 0.6813248241042363,
            "ambiguous_qty_pct": 0.07908547520541145,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07908547520541145,
            "retail_notional_pct": 0.09951247143524007,
            "mixed_notional_pct": 0.14027950506637832,
            "instit_notional_pct": 0.6813546295449572,
            "ambiguous_notional_pct": 0.07885339395342435,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07885339395342435,
            "run_retail_pct": 0.5332699619771863,
            "run_mixed_pct": 0.19557984790874525,
            "run_instit_pct": 0.16682509505703422,
            "run_ambiguous_pct": 0.10432509505703422,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10432509505703422,
            "avg_feature_coverage": 0.8892110266159695,
            "high_confidence_pct": 0.7000950570342205,
            "medium_confidence_pct": 0.19557984790874525,
            "low_confidence_pct": 0.10432509505703422,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 24903,
            "n_runs": 6592,
            "retail_pct": 0.21808617435650324,
            "mixed_pct": 0.1677709512910091,
            "instit_pct": 0.4979319760671405,
            "ambiguous_pct": 0.11621089828534714,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11621089828534714,
            "avg_trade_size": 19779.853138176124,
            "avg_run_notional": 61606.34681128641,
            "retail_qty_pct": 0.10627627102078098,
            "mixed_qty_pct": 0.15764302002097214,
            "instit_qty_pct": 0.6321334858334345,
            "ambiguous_qty_pct": 0.10394722312481242,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.10394722312481242,
            "retail_notional_pct": 0.10633698334218097,
            "mixed_notional_pct": 0.157733457338383,
            "instit_notional_pct": 0.6317692780846728,
            "ambiguous_notional_pct": 0.1041602812347633,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1041602812347633,
            "run_retail_pct": 0.5279126213592233,
            "run_mixed_pct": 0.19720873786407767,
            "run_instit_pct": 0.16656553398058252,
            "run_ambiguous_pct": 0.1083131067961165,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1083131067961165,
            "avg_feature_coverage": 0.8853610436893202,
            "high_confidence_pct": 0.6944781553398058,
            "medium_confidence_pct": 0.19720873786407767,
            "low_confidence_pct": 0.1083131067961165,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 10346,
            "n_runs": 3426,
            "retail_pct": 0.2809781558090083,
            "mixed_pct": 0.16702107094529287,
            "instit_pct": 0.439106901217862,
            "ambiguous_pct": 0.11289387202783685,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11289387202783685,
            "avg_trade_size": 18066.677760487146,
            "avg_run_notional": 44305.46938412143,
            "retail_qty_pct": 0.15517862352610096,
            "mixed_qty_pct": 0.15668447264944246,
            "instit_qty_pct": 0.5874457494132804,
            "ambiguous_qty_pct": 0.1006911544111762,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1006911544111762,
            "retail_notional_pct": 0.15495757041325806,
            "mixed_notional_pct": 0.1565908381460448,
            "instit_notional_pct": 0.5876926206391687,
            "ambiguous_notional_pct": 0.10075897080152833,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10075897080152833,
            "run_retail_pct": 0.5326911850554582,
            "run_mixed_pct": 0.202276707530648,
            "run_instit_pct": 0.1692936368943374,
            "run_ambiguous_pct": 0.09573847051955633,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09573847051955633,
            "avg_feature_coverage": 0.878064798598949,
            "high_confidence_pct": 0.7019848219497957,
            "medium_confidence_pct": 0.202276707530648,
            "low_confidence_pct": 0.09573847051955633,
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
          "trade_id": "451",
          "timestamp": "2026-04-23T07:59:54.200502",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 76889,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "450",
          "timestamp": "2026-04-23T07:59:37.323097",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 76888,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "449",
          "timestamp": "2026-04-23T07:59:33.054472",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 76888,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "448",
          "timestamp": "2026-04-23T07:59:22.852833",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "447",
          "timestamp": "2026-04-23T07:59:18.617663",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 76887,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "446",
          "timestamp": "2026-04-23T07:59:09.227522",
          "price": 15.19,
          "size": 1000.0,
          "notional": 15190.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 76887,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "445",
          "timestamp": "2026-04-23T07:59:09.227522",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 76887,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "444",
          "timestamp": "2026-04-23T07:59:01.857658",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 76887,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "443",
          "timestamp": "2026-04-23T07:59:00.053865",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "442",
          "timestamp": "2026-04-23T07:59:00.053865",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "441",
          "timestamp": "2026-04-23T07:57:27.053969",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "440",
          "timestamp": "2026-04-23T07:55:50.788530",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 76886,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "439",
          "timestamp": "2026-04-23T07:55:50.788530",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 76886,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "438",
          "timestamp": "2026-04-23T07:55:02.108063",
          "price": 15.19,
          "size": 1500.0,
          "notional": 22785.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 76885,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "437",
          "timestamp": "2026-04-23T07:55:02.108063",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 76885,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "436",
          "timestamp": "2026-04-23T07:55:02.108063",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 76885,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "435",
          "timestamp": "2026-04-23T07:54:47.421953",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 76884,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "434",
          "timestamp": "2026-04-23T07:54:30.027979",
          "price": 15.19,
          "size": 500.0,
          "notional": 7595.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 76883,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "433",
          "timestamp": "2026-04-23T07:51:57.137369",
          "price": 15.17,
          "size": 1000.0,
          "notional": 15170.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 76882,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "432",
          "timestamp": "2026-04-23T07:51:57.079319",
          "price": 15.18,
          "size": 500.0,
          "notional": 7590.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 76881,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "431",
          "timestamp": "2026-04-23T07:51:57.079319",
          "price": 15.18,
          "size": 4500.0,
          "notional": 68310.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 76881,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "430",
          "timestamp": "2026-04-23T07:51:57.079319",
          "price": 15.18,
          "size": 500.0,
          "notional": 7590.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 76881,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "429",
          "timestamp": "2026-04-23T07:51:57.079319",
          "price": 15.18,
          "size": 1000.0,
          "notional": 15180.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 76881,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "428",
          "timestamp": "2026-04-23T07:51:57.079319",
          "price": 15.18,
          "size": 500.0,
          "notional": 7590.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 76881,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "427",
          "timestamp": "2026-04-23T07:51:57.079319",
          "price": 15.18,
          "size": 500.0,
          "notional": 7590.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 76881,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "426",
          "timestamp": "2026-04-23T07:51:57.079319",
          "price": 15.18,
          "size": 500.0,
          "notional": 7590.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 76881,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "425",
          "timestamp": "2026-04-23T07:51:57.079319",
          "price": 15.18,
          "size": 1000.0,
          "notional": 15180.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 76881,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "424",
          "timestamp": "2026-04-23T07:51:57.079319",
          "price": 15.18,
          "size": 500.0,
          "notional": 7590.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 76881,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "423",
          "timestamp": "2026-04-23T07:51:57.079319",
          "price": 15.18,
          "size": 1500.0,
          "notional": 22770.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 76881,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "422",
          "timestamp": "2026-04-23T07:51:57.079319",
          "price": 15.18,
          "size": 18000.0,
          "notional": 273240.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 76881,
          "d1": "WALK_BOOK",
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
      "total_trades": 137491,
      "price_moving_trades": 34765,
      "pct_price_moving": 25.285291400891698,
      "all_movers": {
        "count": 34765,
        "avg_size": 21066.34218783259,
        "median_size": 7960.0,
        "retail_count": 13476,
        "mixed_count": 7033,
        "institutional_count": 11276,
        "ambiguous_count": 2980,
        "unobservable_count": 0,
        "retail_pct": 38.763123831439664,
        "mixed_pct": 20.23011649647634,
        "instit_pct": 32.434920178340285,
        "unclear_pct": 8.571839493743708
      },
      "positive_movers": {
        "count": 17147,
        "avg_size": 20205.126695048697,
        "median_size": 7945.0,
        "retail_count": 6449,
        "mixed_count": 3360,
        "institutional_count": 5979,
        "ambiguous_count": 1359,
        "unobservable_count": 0,
        "retail_pct": 37.61007756458856,
        "mixed_pct": 19.595264477751208,
        "instit_pct": 34.86907330728407,
        "unclear_pct": 7.925584650376159
      },
      "negative_movers": {
        "count": 17618,
        "avg_size": 21904.533926665907,
        "median_size": 7970.0,
        "retail_count": 7027,
        "mixed_count": 3673,
        "institutional_count": 5297,
        "ambiguous_count": 1621,
        "unobservable_count": 0,
        "retail_pct": 39.885344533999316,
        "mixed_pct": 20.847996367351573,
        "instit_pct": 30.065841752752863,
        "unclear_pct": 9.200817345896242
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
          "opening": 0.00042686157972629703,
          "continuous": 0.9247882183288304,
          "closing": 0.07371604047273986,
          "auctions": 0.07414290205246615,
          "other": 0.0010688796187033813
        },
        "1M": {
          "opening": 0.004023628589119273,
          "continuous": 0.9128998464938918,
          "closing": 0.07306587914115108,
          "auctions": 0.07708950773027035,
          "other": 0.01001064577583774
        },
        "3M": {
          "opening": 0.002405815596608018,
          "continuous": 0.8166470096537216,
          "closing": 0.13151939059528647,
          "auctions": 0.1339252061918945,
          "other": 0.04942778415438399
        },
        "6M": {
          "opening": 0.0019937170524952437,
          "continuous": 0.827104347211566,
          "closing": 0.10908447462882963,
          "auctions": 0.11107819168132488,
          "other": 0.0618174611071091
        }
      },
      "hhi": {
        "1D": 0.1135342022255666,
        "1M": 0.11962863332763234,
        "3M": 0.12843806515338177,
        "6M": 0.1343193629190232
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0015
        },
        {
          "time": "09:30",
          "avg_share": 0.1078
        },
        {
          "time": "10:00",
          "avg_share": 0.0899
        },
        {
          "time": "10:30",
          "avg_share": 0.0799
        },
        {
          "time": "11:00",
          "avg_share": 0.0674
        },
        {
          "time": "11:30",
          "avg_share": 0.0428
        },
        {
          "time": "12:00",
          "avg_share": 0.0432
        },
        {
          "time": "13:00",
          "avg_share": 0.0711
        },
        {
          "time": "13:30",
          "avg_share": 0.0679
        },
        {
          "time": "14:00",
          "avg_share": 0.0851
        },
        {
          "time": "14:30",
          "avg_share": 0.0705
        },
        {
          "time": "15:00",
          "avg_share": 0.0653
        },
        {
          "time": "15:30",
          "avg_share": 0.1339
        },
        {
          "time": "16:00",
          "avg_share": 0.0738
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1836",
          "auctions_pct": 9.943760564524936,
          "hhi": 0.13231721835688726,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "1440",
          "auctions_pct": 2.1684000138478883,
          "hhi": 0.14661680337899968,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1361",
          "auctions_pct": 3.350366206917102,
          "hhi": 0.1596039866379572,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "551",
          "auctions_pct": 10.4688216468525,
          "hhi": 0.11739001374712078,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1368",
          "auctions_pct": 5.737629531904065,
          "hhi": 0.12403993925046572,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "933",
          "auctions_pct": 8.554496242694452,
          "hhi": 0.2475857605409923,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2331",
          "auctions_pct": 8.260880445491575,
          "hhi": 0.1140395538010011,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "82331",
          "auctions_pct": 0.11315214121387224,
          "hhi": 0.6994493403365026,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2583",
          "auctions_pct": 2.6189511245488104,
          "hhi": 0.1687102216262492,
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
