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
      "marketCap": 136857901.2,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 9857201.58,
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
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 67406733.30600001,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "J03",
      "name": "Jadason",
      "marketCap": 28414665.0,
      "sector": "Electronic Components",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 108471542.4,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "42F",
      "name": "Totm Tech",
      "marketCap": 39487256.172,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 155939867.26,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 237360000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-05-22",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "136.9M",
    "market_cap_category": "small",
    "universe_total": 556,
    "peers_count": 8,
    "page_title_template": "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },
  "q01": {
    "primary_liquidity_period": "3m",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 70.86330935251799,
          "score_pca_percentile": 70.86330935251799,
          "rank_pca": 163,
          "total": 556,
          "adv_notional_sgd": 187968.0,
          "adv_volume_shares": 783200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001373453767388331,
          "votes": 32.0,
          "trades": 32.0,
          "spread_pct": 0.022742125212390562,
          "spread_ticks": 1.0875,
          "amihud": 1.1319264845442187e-07,
          "volatility": 0.39729138362738226
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5307426162249501,
          "loadings": {
            "log_adv": 0.5433264285619307,
            "log_trades": 0.4989579080232194,
            "log_turnover": 0.5042074523820749,
            "neg_spread": 0.3447327245640723,
            "neg_amihud": 0.04679895628940573,
            "neg_vol": -0.2838687184500265
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
          "peer_median_adv": 491.9,
          "peer_median_score_pca": 35.25179856115108,
          "peer_median_trades": 2.0,
          "peer_median_volatility": 0.0,
          "peer_median_spread_pct": 0.042721459985303675,
          "peer_median_spread_ticks": 2.590909090909091,
          "peer_median_amihud": 0.0,
          "peer_median_turnover_ratio": 3.2296585632734686e-05,
          "target_vs_peer": {
            "score_pca_delta": 35.61,
            "adv_delta_pct": 38112.6,
            "trades_delta_pct": 1500.0,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": 46.77,
            "spread_ticks_delta_pct": -58.03,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 4152.63
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 70.86330935251799,
            "rank_pca": 163,
            "adv": 187968.0,
            "trades": 32.0,
            "volatility": 0.39729138362738226,
            "spread_pct": 0.022742125212390562,
            "spread_ticks": 1.0875,
            "amihud": 1.1319264845442187e-07,
            "turnover_ratio": 0.001373453767388331,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 3.0575539568345325,
            "rank_pca": 540,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6000000000000001,
            "spread_ticks": 24.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 28.05755395683453,
            "rank_pca": 401,
            "adv": 300.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 3.252175546599001e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 26.258992805755394,
            "rank_pca": 411,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.020408163265306138,
            "spread_ticks": 4.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 69.60431654676259,
            "rank_pca": 170,
            "adv": 71031.6,
            "trades": 28.0,
            "volatility": 0.3467150657358996,
            "spread_pct": 0.042345276872964216,
            "spread_ticks": 1.1818181818181819,
            "amihud": 0.0,
            "turnover_ratio": 0.004498239784126073,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 17.62589928057554,
            "rank_pca": 459,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.09680365296803646,
            "spread_ticks": 7.571428571428571,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 42.44604316546763,
            "rank_pca": 321,
            "adv": 683.8,
            "trades": 3.0,
            "volatility": 0.3739151228838485,
            "spread_pct": 0.0392156862745097,
            "spread_ticks": 1.0,
            "amihud": 5.8496636443404235e-05,
            "turnover_ratio": 3.2071415799479366e-05,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 45.32374100719424,
            "rank_pca": 305,
            "adv": 13350.0,
            "trades": 6.0,
            "volatility": 0.0,
            "spread_pct": 0.043097643097643135,
            "spread_ticks": 7.529411764705882,
            "amihud": 0.0,
            "turnover_ratio": 0.00010369606870298692,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 77.51798561151078,
            "rank_pca": 126,
            "adv": 203412.0,
            "trades": 419.0,
            "volatility": 0.20503184979157077,
            "spread_pct": 0.006098578710182693,
            "spread_ticks": 1.132300357568534,
            "amihud": 5.2861621595790814e-08,
            "turnover_ratio": 0.0032746532066719393,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.19447477580197697,
              "median": 0.10142524721531723,
              "min": 0.0,
              "max": 3.8655476541403457,
              "p5": 0.0,
              "p95": 0.6863781097790387,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3436056.9985602633,
              "median": 11168.900000000001,
              "min": 0.0,
              "max": 341626356.0,
              "p5": 0.0,
              "p95": 15113699.250000002,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10654212937852364,
              "median": 0.033551628240782276,
              "min": 0.000269725108291675,
              "max": 1.7037037037037037,
              "p5": 0.0034119738583874887,
              "p95": 0.48829619890592313,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006891928261115186,
              "median": 0.00021664948455712892,
              "min": 0.0,
              "max": 2.4751169995385935,
              "p5": 0.0,
              "p95": 0.01067838182949719,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00015648896861746983,
              "median": 1.2186023917961165e-08,
              "min": 0.0,
              "max": 0.030303030303030328,
              "p5": 0.0,
              "p95": 9.745896464646464e-05,
              "count": 406
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 532.0557553956835,
              "median": 7.0,
              "min": 0.0,
              "max": 20864.0,
              "p5": 0.0,
              "p95": 2951.5,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.08886346315332486,
              "median": 0.0,
              "min": 0.0,
              "max": 0.39729138362738226,
              "p5": 0.0,
              "p95": 0.33000054678484814,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 652798.875,
              "median": 6825.0,
              "min": 0.0,
              "max": 4817361.0,
              "p5": 0.0,
              "p95": 3202478.8499999978,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.18213732984709438,
              "median": 0.03291988415501685,
              "min": 0.0012818088565294324,
              "max": 0.6666666666666666,
              "p5": 0.002967678305308074,
              "p95": 0.6433333333333333,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0010005653003591955,
              "median": 6.810891208448847e-05,
              "min": 0.0,
              "max": 0.0032746532066719393,
              "p5": 0.0,
              "p95": 0.0032555937459622713,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.349684601912408e-08,
              "median": 1.4299600454076956e-09,
              "min": 0.0,
              "max": 1.1319264845442187e-07,
              "p5": 0.0,
              "p95": 1.0112644308269565e-07,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 249.875,
              "median": 3.5,
              "min": 0.0,
              "max": 1541.0,
              "p5": 0.0,
              "p95": 1148.2999999999993,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 36097.175,
              "median": 491.9,
              "min": 0.0,
              "max": 203412.0,
              "p5": 0.0,
              "p95": 157078.85999999993,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 57.125,
              "median": 2.0,
              "min": 0.0,
              "max": 419.0,
              "p5": 0.0,
              "p95": 282.14999999999975,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.11570775480141486,
              "median": 0.0,
              "min": 0.0,
              "max": 0.3739151228838485,
              "p5": 0.0,
              "p95": 0.36439510288206634,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.18932945848191363,
              "median": 0.042721459985303675,
              "min": 0.006098578710182693,
              "max": 0.6666666666666666,
              "p5": 0.011106933304475899,
              "p95": 0.6433333333333333,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.926869859440146,
              "median": 2.590909090909091,
              "min": 1.0,
              "max": 24.0,
              "p5": 1.0,
              "p95": 18.24999999999999,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009926477788458085,
              "median": 3.2296585632734686e-05,
              "min": 0.0,
              "max": 0.004498239784126073,
              "p5": 0.0,
              "p95": 0.0040699844820171254,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1709899613000006e-05,
              "median": 0.0,
              "min": 0.0,
              "max": 5.8496636443404235e-05,
              "p5": 0.0,
              "p95": 4.680788147904254e-05,
              "count": 5
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.02127659574468077,
            "market": 0.0044473308176598,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.01682926492702097,
            "vs_sector": 0.02127659574468077,
            "vs_peers": 0.02127659574468077
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 70.50359712230215,
          "score_pca_percentile": 70.50359712230215,
          "rank_pca": 165,
          "total": 556,
          "adv_notional_sgd": 201583.0,
          "adv_volume_shares": 857800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0015042755894608152,
          "votes": 32.0,
          "trades": 32.0,
          "spread_pct": 0.022742125212390562,
          "spread_ticks": 1.0875,
          "amihud": 1.0334866200688238e-07,
          "volatility": 0.4654515465006298
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5118362487989079,
          "loadings": {
            "log_adv": 0.5546276880336308,
            "log_trades": 0.5097684075901684,
            "log_turnover": 0.5095684919282611,
            "neg_spread": 0.3907378785040381,
            "neg_amihud": 0.12086535650351943,
            "neg_vol": 0.07469756503964237
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
          "peer_median_adv": 2343.7,
          "peer_median_score_pca": 34.622302158273385,
          "peer_median_trades": 1.5,
          "peer_median_volatility": 0.1794930010793216,
          "peer_median_spread_pct": 0.043403234100908544,
          "peer_median_spread_ticks": 2.34119804400978,
          "peer_median_amihud": 3.4764059908261293e-07,
          "peer_median_turnover_ratio": 1.843856137373816e-05,
          "target_vs_peer": {
            "score_pca_delta": 35.88,
            "adv_delta_pct": 8501.1,
            "trades_delta_pct": 2033.33,
            "volatility_delta_pct": -159.31,
            "spread_pct_delta_pct": 47.6,
            "spread_ticks_delta_pct": -53.55,
            "amihud_delta_pct": 70.27,
            "turnover_ratio_delta_pct": 8058.31
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 70.50359712230215,
            "rank_pca": 165,
            "adv": 201583.0,
            "trades": 32.0,
            "volatility": 0.4654515465006298,
            "spread_pct": 0.022742125212390562,
            "spread_ticks": 1.0875,
            "amihud": 1.0334866200688238e-07,
            "turnover_ratio": 0.0015042755894608152,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 0.3597122302158274,
            "rank_pca": 555,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 3.2062328764420243,
            "spread_pct": 0.4775086505190309,
            "spread_ticks": 21.083333333333332,
            "amihud": 0.035985552115583075,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.4280575539568345,
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
            "ticker": "U77",
            "score_pca": 30.215827338129497,
            "rank_pca": 389,
            "adv": 59.400000000000006,
            "trades": 1.0,
            "volatility": 0.07272176756534884,
            "spread_pct": 0.017320427916454422,
            "spread_ticks": 3.4,
            "amihud": 2.467440579404388e-06,
            "turnover_ratio": 9.291522637741867e-07,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 76.2589928057554,
            "rank_pca": 133,
            "adv": 356335.2,
            "trades": 99.0,
            "volatility": 1.347732477476287,
            "spread_pct": 0.04029484029484029,
            "spread_ticks": 1.1306122448979592,
            "amihud": 1.6202954317066548e-07,
            "turnover_ratio": 0.023433661201689472,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 21.762589928057555,
            "rank_pca": 436,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.17748239349298867,
            "spread_pct": 0.0702402957486137,
            "spread_ticks": 5.428571428571429,
            "amihud": 7.284382284382291e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 60.79136690647482,
            "rank_pca": 219,
            "adv": 37767.5,
            "trades": 15.0,
            "volatility": 0.5225463372335613,
            "spread_pct": 0.0392156862745097,
            "spread_ticks": 1.0,
            "amihud": 5.332516549945604e-07,
            "turnover_ratio": 0.001842216267995189,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 39.02877697841727,
            "rank_pca": 340,
            "adv": 4628.0,
            "trades": 2.0,
            "volatility": 0.07888106377466128,
            "spread_pct": 0.04651162790697679,
            "spread_ticks": 8.11111111111111,
            "amihud": 0.0,
            "turnover_ratio": 3.5947970483702135e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 82.73381294964028,
            "rank_pca": 97,
            "adv": 383230.0,
            "trades": 426.0,
            "volatility": 0.18150360866565454,
            "spread_pct": 0.006777996388083901,
            "spread_ticks": 1.28239608801956,
            "amihud": 2.3031883917877102e-08,
            "turnover_ratio": 0.00597464994831054,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4669641817853958,
              "median": 0.2520548277337399,
              "min": 0.0,
              "max": 12.037441588643327,
              "p5": 0.0,
              "p95": 1.427357979991549,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3554912.8141711745,
              "median": 13817.5,
              "min": 0.0,
              "max": 313263925.0,
              "p5": 0.0,
              "p95": 15283018.125,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10158222990131151,
              "median": 0.031304347826086945,
              "min": 0.0002900530277874263,
              "max": 1.7037037037037037,
              "p5": 0.003428515909417669,
              "p95": 0.46785436506721323,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006876300323202488,
              "median": 0.00024721325381528176,
              "min": 0.0,
              "max": 2.4751169995385935,
              "p5": 0.0,
              "p95": 0.010596186161666285,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00022437877661998383,
              "median": 8.990040832765486e-08,
              "min": 0.0,
              "max": 0.035985552115583075,
              "p5": 0.0,
              "p95": 0.00015976271974306946,
              "count": 513
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 552.5827338129496,
              "median": 7.0,
              "min": 0.0,
              "max": 12774.0,
              "p5": 0.0,
              "p95": 3489.0,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5402260940392232,
              "median": 0.15850894468273313,
              "min": 0.0,
              "max": 3.2062328764420243,
              "p5": 0.025452618647872096,
              "p95": 2.2469594109625346,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 896157.8,
              "median": 2343.7,
              "min": 0.0,
              "max": 6579762.0,
              "p5": 0.0,
              "p95": 4410975.799999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16363119990184327,
              "median": 0.034626876559683675,
              "min": 0.0012818088565294324,
              "max": 0.6666666666666666,
              "p5": 0.0032054744925734966,
              "p95": 0.600461361014994,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0014994778379055574,
              "median": 1.843856137373816e-05,
              "min": 0.0,
              "max": 0.00597464994831054,
              "p5": 0.0,
              "p95": 0.005451529481355819,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.004498609475039651,
              "median": 6.319027296237974e-08,
              "min": 0.0,
              "max": 0.035985552115583075,
              "p5": 0.0,
              "p95": 0.023391472479331772,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 293.125,
              "median": 1.5,
              "min": 0.0,
              "max": 1884.0,
              "p5": 0.0,
              "p95": 1373.6999999999994,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 97752.51250000001,
              "median": 2343.7,
              "min": 0.0,
              "max": 383230.0,
              "p5": 0.0,
              "p95": 373816.82,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 67.875,
              "median": 1.5,
              "min": 0.0,
              "max": 426.0,
              "p5": 0.0,
              "p95": 311.54999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6983875655813158,
              "median": 0.1794930010793216,
              "min": 0.0,
              "max": 3.2062328764420243,
              "p5": 0.025452618647872096,
              "p95": 2.5557577368040154,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17056702396439702,
              "median": 0.043403234100908544,
              "min": 0.006777996388083901,
              "max": 0.6666666666666666,
              "p5": 0.010467847423013585,
              "p95": 0.600461361014994,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.304503025741674,
              "median": 2.34119804400978,
              "min": 1.0,
              "max": 21.083333333333332,
              "p5": 1.0,
              "p95": 16.543055555555547,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.004498683288434125,
              "median": 3.4764059908261293e-07,
              "min": 0.0,
              "max": 0.035985552115583075,
              "p5": 0.0,
              "p95": 0.023391472479331772,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003910925567592835,
              "median": 1.843856137373816e-05,
              "min": 0.0,
              "max": 0.023433661201689472,
              "p5": 0.0,
              "p95": 0.017323007263006836,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -3.3306690738754696e-16,
            "market": 0.01584857789022842,
            "sector": -0.004645760743321681,
            "peers": 0.002538071065989911,
            "vs_market": -0.015848577890228754,
            "vs_sector": 0.004645760743321348,
            "vs_peers": -0.002538071065990244
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 71.94244604316546,
          "score_pca_percentile": 71.94244604316546,
          "rank_pca": 157,
          "total": 556,
          "adv_notional_sgd": 235900.5,
          "adv_volume_shares": 925100.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001622295812322453,
          "votes": 50.0,
          "trades": 50.0,
          "spread_pct": 0.023309053069719015,
          "spread_ticks": 1.1176470588235294,
          "amihud": 7.388399518246806e-08,
          "volatility": 0.40284889562452575
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5220154401382764,
          "loadings": {
            "log_adv": 0.5454595515708723,
            "log_trades": 0.49774010644966316,
            "log_turnover": 0.49341720376516746,
            "neg_spread": 0.4100283902270644,
            "neg_amihud": 0.1315220531788913,
            "neg_vol": 0.16076938699751295
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
          "peer_median_adv": 4675.0,
          "peer_median_score_pca": 41.09712230215827,
          "peer_median_trades": 2.5,
          "peer_median_volatility": 0.47019341898396966,
          "peer_median_spread_pct": 0.04228016264805401,
          "peer_median_spread_ticks": 1.9107905982905982,
          "peer_median_amihud": 2.9329565465577065e-07,
          "peer_median_turnover_ratio": 0.00016291621487552567,
          "target_vs_peer": {
            "score_pca_delta": 30.85,
            "adv_delta_pct": 4946.0,
            "trades_delta_pct": 1900.0,
            "volatility_delta_pct": 14.32,
            "spread_pct_delta_pct": 44.87,
            "spread_ticks_delta_pct": -41.51,
            "amihud_delta_pct": 74.81,
            "turnover_ratio_delta_pct": 895.79
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.94244604316546,
            "rank_pca": 157,
            "adv": 235900.5,
            "trades": 50.0,
            "volatility": 0.40284889562452575,
            "spread_pct": 0.023309053069719015,
            "spread_ticks": 1.1176470588235294,
            "amihud": 7.388399518246806e-08,
            "turnover_ratio": 0.001622295812322453,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 2.5179856115107913,
            "rank_pca": 543,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.6631841094723936,
            "spread_pct": 0.5592417061611374,
            "spread_ticks": 24.0,
            "amihud": 8.49125552310683e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 1.2589928057553956,
            "rank_pca": 550,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 3.9496835316263,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 41.36690647482014,
            "rank_pca": 327,
            "adv": 3800.0,
            "trades": 3.0,
            "volatility": 0.19312679559045157,
            "spread_pct": 0.012983347445667525,
            "spread_ticks": 2.5555555555555554,
            "amihud": 2.0615900012884913e-06,
            "turnover_ratio": 5.884631003903183e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 69.7841726618705,
            "rank_pca": 169,
            "adv": 218727.69999999998,
            "trades": 74.0,
            "volatility": 1.5485555174187486,
            "spread_pct": 0.042345276872964216,
            "spread_ticks": 1.0672268907563025,
            "amihud": 1.3388326150764117e-07,
            "turnover_ratio": 0.01626038107156019,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 40.827338129496404,
            "rank_pca": 330,
            "adv": 5550.0,
            "trades": 2.0,
            "volatility": 0.35091735877501307,
            "spread_pct": 0.04221504842314381,
            "spread_ticks": 3.1481481481481484,
            "amihud": 1.3594645296144612e-06,
            "turnover_ratio": 0.0002669861197120195,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 68.16546762589928,
            "rank_pca": 178,
            "adv": 115003.8,
            "trades": 36.0,
            "volatility": 0.5832405952266239,
            "spread_pct": 0.037027894347074826,
            "spread_ticks": 1.0,
            "amihud": 9.118963998147742e-08,
            "turnover_ratio": 0.005194106024954463,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 35.79136690647482,
            "rank_pca": 358,
            "adv": 2700.0,
            "trades": 2.0,
            "volatility": 0.35714624274131546,
            "spread_pct": 0.04651162790697679,
            "spread_ticks": 8.11111111111111,
            "amihud": 4.5270804780390017e-07,
            "turnover_ratio": 2.0739213740597384e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.45323741007195,
            "rank_pca": 93,
            "adv": 685386.0,
            "trades": 426.0,
            "volatility": 0.3043989871817049,
            "spread_pct": 0.007486126809762643,
            "spread_ticks": 1.266025641025641,
            "amihud": 1.689503402575383e-08,
            "turnover_ratio": 0.01005056384462948,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.617189638685603,
              "median": 0.39560020723816114,
              "min": 0.0,
              "max": 5.873670062235366,
              "p5": 0.08811715448362553,
              "p95": 1.855511738378278,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3522536.092848252,
              "median": 18711.4,
              "min": 0.0,
              "max": 313263925.0,
              "p5": 0.0,
              "p95": 15147616.375,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09723363160566463,
              "median": 0.030390143737166267,
              "min": 0.0002879945579246963,
              "max": 1.4782608695652175,
              "p5": 0.003311744120331952,
              "p95": 0.4356284569902718,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006489828449770089,
              "median": 0.00034183842025659495,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.013742670822071904,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.6657275593381676e-05,
              "median": 1.0813370949446431e-07,
              "min": 0.0,
              "max": 0.011904761904761915,
              "p5": 0.0,
              "p95": 4.221505994906925e-05,
              "count": 549
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 536.7823741007194,
              "median": 8.0,
              "min": 0.0,
              "max": 12629.0,
              "p5": 0.0,
              "p95": 3203.25,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9286020890133544,
              "median": 0.35403180075816426,
              "min": 0.19312679559045157,
              "max": 3.9496835316263,
              "p5": 0.19816119401708907,
              "p95": 3.1494087338724315,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1290181.8125,
              "median": 4675.0,
              "min": 0.0,
              "max": 9388118.0,
              "p5": 0.0,
              "p95": 6342161.799999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16996082419002276,
              "median": 0.03276205074643141,
              "min": 0.0012730170371081137,
              "max": 0.6666666666666666,
              "p5": 0.0034476054575371994,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022649028811592186,
              "median": 0.00016291621487552567,
              "min": 0.0,
              "max": 0.01005056384462948,
              "p5": 0.0,
              "p95": 0.008667793611099718,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1109718692235942e-05,
              "median": 2.6329602149318414e-07,
              "min": 0.0,
              "max": 8.49125552310683e-05,
              "p5": 2.2844461645260412e-10,
              "p95": 5.5914717400645325e-05,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 318.5,
              "median": 2.5,
              "min": 0.0,
              "max": 2065.0,
              "p5": 0.0,
              "p95": 1491.349999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 128895.9375,
              "median": 4675.0,
              "min": 0.0,
              "max": 685386.0,
              "p5": 0.0,
              "p95": 522055.59499999974,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 67.875,
              "median": 2.5,
              "min": 0.0,
              "max": 426.0,
              "p5": 0.0,
              "p95": 302.79999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.1187816422540688,
              "median": 0.47019341898396966,
              "min": 0.19312679559045157,
              "max": 3.9496835316263,
              "p5": 0.23207206264739022,
              "p95": 3.1494087338724315,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17680971182917424,
              "median": 0.04228016264805401,
              "min": 0.007486126809762643,
              "max": 0.6666666666666666,
              "p5": 0.009410154032329351,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.268508418324595,
              "median": 1.9107905982905982,
              "min": 1.0,
              "max": 24.0,
              "p5": 1.0,
              "p95": 18.43888888888888,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1128535718161253e-05,
              "median": 2.9329565465577065e-07,
              "min": 0.0,
              "max": 8.49125552310683e-05,
              "p5": 5.9132619090138406e-09,
              "p95": 5.5914717400645325e-05,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0039814528230794725,
              "median": 0.00016291621487552567,
              "min": 0.0,
              "max": 0.01626038107156019,
              "p5": 0.0,
              "p95": 0.014086945042134438,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.07692307692307743,
            "market": 0.013078822058819606,
            "sector": -0.0467720138514881,
            "peers": -0.0452137793539481,
            "vs_market": -0.09000189898189703,
            "vs_sector": -0.030151063071589324,
            "vs_peers": -0.031709297569129324
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 71.94244604316546,
          "score_pca_percentile": 71.94244604316546,
          "rank_pca": 157,
          "total": 556,
          "adv_notional_sgd": 201552.0,
          "adv_volume_shares": 839800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0014727100023655777,
          "votes": 54.0,
          "trades": 54.0,
          "spread_pct": 0.023967896212412753,
          "spread_ticks": 1.15,
          "amihud": 8.557943697288424e-08,
          "volatility": 0.5221956198708652
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5570168630086365,
          "loadings": {
            "log_adv": 0.5226852327707812,
            "log_trades": 0.471193415348787,
            "log_turnover": 0.4792638847940171,
            "neg_spread": 0.41379398327122346,
            "neg_amihud": 0.2211269557613723,
            "neg_vol": 0.23443645269387872
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
          "peer_median_adv": 6520.5,
          "peer_median_score_pca": 47.57194244604317,
          "peer_median_trades": 4.5,
          "peer_median_volatility": 0.5587828761644456,
          "peer_median_spread_pct": 0.042065884201522116,
          "peer_median_spread_ticks": 1.6480061349693251,
          "peer_median_amihud": 5.757642710738107e-07,
          "peer_median_turnover_ratio": 7.661505324325498e-05,
          "target_vs_peer": {
            "score_pca_delta": 24.37,
            "adv_delta_pct": 2991.1,
            "trades_delta_pct": 1100.0,
            "volatility_delta_pct": 6.55,
            "spread_pct_delta_pct": 43.02,
            "spread_ticks_delta_pct": -30.22,
            "amihud_delta_pct": 85.14,
            "turnover_ratio_delta_pct": 1822.22
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.94244604316546,
            "rank_pca": 157,
            "adv": 201552.0,
            "trades": 54.0,
            "volatility": 0.5221956198708652,
            "spread_pct": 0.023967896212412753,
            "spread_ticks": 1.15,
            "amihud": 8.557943697288424e-08,
            "turnover_ratio": 0.0014727100023655777,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.079136690647482,
            "rank_pca": 551,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.4261024794970623,
            "spread_pct": 0.49504950495049505,
            "spread_ticks": 21.083333333333332,
            "amihud": 0.00036013640690511566,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.9568345323741005,
            "rank_pca": 535,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.250447984076117,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 47.122302158273385,
            "rank_pca": 295,
            "adv": 5544.0,
            "trades": 4.0,
            "volatility": 0.3165962924050557,
            "spread_pct": 0.017320427916454422,
            "spread_ticks": 2.0,
            "amihud": 1.4078062858550678e-06,
            "turnover_ratio": 8.548200826722518e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 54.13669064748201,
            "rank_pca": 256,
            "adv": 40587.799999999996,
            "trades": 21.0,
            "volatility": 1.3553241236785312,
            "spread_pct": 0.06305367378843153,
            "spread_ticks": 1.08,
            "amihud": 1.8455706458297627e-07,
            "turnover_ratio": 0.003154478705235743,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 37.410071942446045,
            "rank_pca": 349,
            "adv": 852.0,
            "trades": 1.0,
            "volatility": 0.35647604358918167,
            "spread_pct": 0.043276661514683186,
            "spread_ticks": 3.25,
            "amihud": 1.5081625527762664e-06,
            "turnover_ratio": 4.271777915392312e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 64.74820143884892,
            "rank_pca": 197,
            "adv": 67485.6,
            "trades": 29.0,
            "volatility": 0.6117252726449104,
            "spread_pct": 0.040855106888361054,
            "spread_ticks": 1.0344827586206897,
            "amihud": 0.0,
            "turnover_ratio": 0.003127024012722621,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 48.02158273381295,
            "rank_pca": 290,
            "adv": 7497.0,
            "trades": 5.0,
            "volatility": 0.3564671685564931,
            "spread_pct": 0.02006435737270492,
            "spread_ticks": 3.1578947368421053,
            "amihud": 9.66971477564645e-07,
            "turnover_ratio": 6.774809821928479e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.27338129496404,
            "rank_pca": 94,
            "adv": 657712.0,
            "trades": 376.0,
            "volatility": 0.5058404796839806,
            "spread_pct": 0.010698983624287645,
            "spread_ticks": 1.2960122699386503,
            "amihud": 2.0193162134896955e-08,
            "turnover_ratio": 0.009669927990213068,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6921910150449248,
              "median": 0.4717218703060321,
              "min": 0.0,
              "max": 7.013811259728677,
              "p5": 0.15949070695961898,
              "p95": 2.2301976168661084,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3346234.1441047685,
              "median": 13170.0,
              "min": 0.0,
              "max": 284335480.0,
              "p5": 0.0,
              "p95": 14058606.0,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10124315154572552,
              "median": 0.03217061268751127,
              "min": 0.0002805689255457263,
              "max": 1.2394366197183098,
              "p5": 0.0034758312328819923,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0067263761538879936,
              "median": 0.00026665202488717206,
              "min": 0.0,
              "max": 2.4059060048777274,
              "p5": 0.0,
              "p95": 0.011873658779405062,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3812505372463205e-05,
              "median": 1.487180622012699e-07,
              "min": 0.0,
              "max": 0.0007680491551459317,
              "p5": 0.0,
              "p95": 3.370700222460994e-05,
              "count": 551
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 497.69874100719426,
              "median": 7.0,
              "min": 0.0,
              "max": 11380.0,
              "p5": 0.0,
              "p95": 2997.75,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8737525215437303,
              "median": 0.4311582616365811,
              "min": 0.2558941046710879,
              "max": 2.4261024794970623,
              "p5": 0.27713987037797666,
              "p95": 2.364623406099731,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1646515.6249999998,
              "median": 6520.5,
              "min": 0.0,
              "max": 12298967.999999998,
              "p5": 0.0,
              "p95": 8224528.399999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1597994892405911,
              "median": 0.022016126792558835,
              "min": 0.0013514156670242764,
              "max": 0.6666666666666666,
              "p5": 0.004623064452066456,
              "p95": 0.6066006600660064,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024426510357100097,
              "median": 7.661505324325498e-05,
              "min": 0.0,
              "max": 0.009669927990213068,
              "p5": 0.0,
              "p95": 0.009156371036249843,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.5515742526141315e-05,
              "median": 5.262754572687647e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 2.871360488846163e-10,
              "p95": 0.00023461652138179667,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 437.5,
              "median": 4.5,
              "min": 0.0,
              "max": 3060.0,
              "p5": 0.0,
              "p95": 2120.5999999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 97459.8,
              "median": 6520.5,
              "min": 0.0,
              "max": 657712.0,
              "p5": 0.0,
              "p95": 451132.75999999966,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 54.5,
              "median": 4.5,
              "min": 0.0,
              "max": 376.0,
              "p5": 0.0,
              "p95": 254.5499999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0223724805164165,
              "median": 0.5587828761644456,
              "min": 0.3165962924050557,
              "max": 2.4261024794970623,
              "p5": 0.3305510990580588,
              "p95": 2.364623406099731,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16962317284026054,
              "median": 0.042065884201522116,
              "min": 0.010698983624287645,
              "max": 0.6666666666666666,
              "p5": 0.013016489126546018,
              "p95": 0.6066006600660064,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.237715387341847,
              "median": 1.6480061349693251,
              "min": 1.0,
              "max": 21.083333333333332,
              "p5": 1.0120689655172415,
              "p95": 14.841666666666656,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.5528012181003685e-05,
              "median": 5.757642710738107e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.00023461652138179667,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002018422324226483,
              "median": 7.661505324325498e-05,
              "min": 0.0,
              "max": 0.009669927990213068,
              "p5": 0.0,
              "p95": 0.007389520740471001,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.020408163265307477,
            "market": 0.010074498505991514,
            "sector": -0.08590416029131964,
            "peers": -0.02842515020348846,
            "vs_market": -0.03048266177129899,
            "vs_sector": 0.06549599702601216,
            "vs_peers": 0.008016986938180981
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity looks strong on the day, which supports basic tradability, but the thin bid side means access can feel less reliable when selling.",
        "market_comparison": "The stock rose 2.1% on the day compared with 0.0% for peers, which matters because stronger price action can help keep attention on the name."
      },
      "1w": {
        "liquidity": "Liquidity is still solid in the week, but trading has pulled back, with trade count down 36.0% from the 1M average, so immediate access is weaker than the monthly picture implies.",
        "market_comparison": "Return -0.0% vs peers 0.3%."
      },
      "30d": {
        "liquidity": "1M score 71.9 vs peer median 41.1 (+30.8 pts).",
        "market_comparison": "The stock fell 7.7% over the month compared with a 4.5% drop for peers, which matters because weaker relative performance can make trading conditions feel less supportive."
      },
      "3m": {
        "liquidity": "Liquidity is strong over three months, with a score of 71.9 compared with a peer median of 47.6, which confirms solid structural access relative to peers.",
        "market_comparison": "Return -2.0% vs peers -2.8%."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "regime_method": "hmm_jump_aware",
      "estimation_window_days": 81,
      "reporting_window_days": 63,
      "available_history_days": 81,
      "n_regimes": 3,
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9999993552249735,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.13258897550350474,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "13.3%",
          "display_range": null,
          "display_text": "13.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
          "kind": "share_pct",
          "value_pct": 13.3,
          "plain_english": "Market explains about 13.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.21665634551123378,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "21.7%",
          "display_range": null,
          "display_text": "21.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
          "kind": "share_pct",
          "value_pct": 21.7,
          "plain_english": "Sector explains about 21.7% of price moves in the current state."
        },
        "company_share": {
          "median": 0.6507546789852615,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "65.1%",
          "display_range": null,
          "display_text": "65.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
          "kind": "share_pct",
          "value_pct": 65.1,
          "plain_english": "Company-specific explains about 65.1% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.4237142717454006,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.42",
          "display_range": null,
          "display_text": "-0.42",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.42% stock move in the opposite direction in this state.",
          "value_num": -0.42
        },
        "beta_stock_lag": {
          "median": -1.2030130294515624,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.20",
          "display_range": null,
          "display_text": "-1.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
          "kind": "lag_beta",
          "value_num": -1.2
        },
        "beta_sector": {
          "median": 0.7000470630904286,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.70",
          "display_range": null,
          "display_text": "0.70",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.70% stock move in the same direction in this state.",
          "value_num": 0.7
        },
        "beta_market_lag": {
          "median": -1.2093704011531667,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.21",
          "display_range": null,
          "display_text": "-1.21",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
          "kind": "lag_beta",
          "value_num": -1.21
        },
        "beta_sector_lag": {
          "median": 2.1766364434575456,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.18",
          "display_range": null,
          "display_text": "2.18",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
          "kind": "lag_beta",
          "value_num": 2.18
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 81 trading days relative to the 252-day target."
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
            "median": 0.47931948471963903,
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
              "median": 0.47931948471963903,
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
              "median": 0.2984396411024004,
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
              "median": 0.2222408741779605,
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
            "median": 0.5656898926629685,
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
              "median": 0.26479317957873116,
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
              "median": 0.16951692775830024,
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
              "median": 0.5656898926629685,
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
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.537921465360335,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.8%",
            "display_range": null,
            "display_text": "53.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 53.8,
            "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22982068067655398,
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
              "median": 0.23225785396311108,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.2%",
              "display_range": null,
              "display_text": "23.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.2,
              "plain_english": "Sector explains about 23.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.537921465360335,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
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
            "median": 0.5202476822091704,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.0%",
            "display_range": null,
            "display_text": "52.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.0,
            "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34425966677405034,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Market explains about 34.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1354926510167792,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.5%",
              "display_range": null,
              "display_text": "13.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.5,
              "plain_english": "Sector explains about 13.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5202476822091704,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
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
            "median": 0.6154426772812237,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.5%",
            "display_range": null,
            "display_text": "61.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 61.5,
            "plain_english": "Company-specific explains about 61.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.0329764531497494,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "3.3%",
              "display_range": null,
              "display_text": "3.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 3.3,
              "plain_english": "Market explains about 3.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.35158086956902684,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.2%",
              "display_range": null,
              "display_text": "35.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 35.2,
              "plain_english": "Sector explains about 35.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6154426772812237,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.5%",
              "display_range": null,
              "display_text": "61.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 61.5,
              "plain_english": "Company-specific explains about 61.5% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.31024682195757464,
          "expected_duration_days": 2.6994519231566643,
          "current_probability": 0.9999993552249735,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 25.129992578563545,
          "volatility": {
            "median": 0.015325479991482495,
            "low": 0.015325479991482495,
            "high": 0.015325479991482495
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.1254378494727643,
          "jump_rate": 3.780348805294935e-37,
          "risk_score": 0.0,
          "metrics": {
            "rolling_vol_10d": 0.024802006483192723,
            "downside_vol_10d": 0.014621924794553836,
            "drawdown_21d": 0.06190871720417266,
            "amihud_stress": 1.3308716352321104,
            "spread_rel": 226.3591060915242,
            "spread_ticks": 1.0912021157324867,
            "log_notional": 12.599487605869824,
            "log_trade_count": 4.244660271338869
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.368540224257269,
          "expected_duration_days": 3.402989107963893,
          "current_probability": 1.006895783545199e-14,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 29.851758164838788,
          "volatility": {
            "median": 0.013106369934852934,
            "low": 0.013106369934852934,
            "high": 0.013106369934852934
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.1397963780663108,
          "jump_rate": 1.2573190203249631e-26,
          "risk_score": 0.7087216289437599,
          "metrics": {
            "rolling_vol_10d": 0.03842193346660287,
            "downside_vol_10d": 0.01929850419141048,
            "drawdown_21d": 0.09686198240415902,
            "amihud_stress": 1.4486751200113486,
            "spread_rel": 252.9923696611187,
            "spread_ticks": 1.196760650316604,
            "log_notional": 12.295876967738415,
            "log_trade_count": 4.165093441601425
          }
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "pct_time": 0.32121295378515635,
          "expected_duration_days": 1.6339150364584565,
          "current_probability": 6.447750163848963e-07,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 26.018249256597667,
          "volatility": {
            "median": 0.05475830630266463,
            "low": 0.05475830630266463,
            "high": 0.05475830630266463
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.36267174404382047,
          "jump_rate": 0.2306073687290289,
          "risk_score": 0.8473651244491712,
          "metrics": {
            "rolling_vol_10d": 0.037997391732243,
            "downside_vol_10d": 0.021135700461831948,
            "drawdown_21d": 0.06691088109666311,
            "amihud_stress": 2.379602660624377,
            "spread_rel": 234.75390112022106,
            "spread_ticks": 1.1329972821090497,
            "log_notional": 13.203008777502832,
            "log_trade_count": 4.84135752303033
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.6295544323565401,
            0.00041403946282973146,
            0.37003152818063006
          ],
          [
            0.05951018441991595,
            0.7061406991695225,
            0.23434911641056166
          ],
          [
            0.2754893833852258,
            0.3365375443842377,
            0.3879730722305365
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            15.0,
            0.0,
            9.0
          ],
          [
            2.0,
            21.0,
            7.0
          ],
          [
            7.0,
            9.0,
            10.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9999993552249735,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 1.006895783545199e-14,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "probability": 6.447750163848963e-07,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.12543800243525272,
        "current_score": 0.7602019405760291,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 3,
        "criterion": "bic_with_min_state_support",
        "bic": 4055.9821835602584,
        "loglik": -1720.3796509530584,
        "n_params": 140,
        "bic_delta_vs_next_best": 20.61394106252783,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 4076.596124622786,
            "loglik": -1838.3506257737972,
            "n_params": 91,
            "converged": true,
            "iterations": 8,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4076.596124622786,
                "loglik": -1838.3506257737972,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4076.5961246423176,
                "loglik": -1838.350625783563,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4076.5961246719717,
                "loglik": -1838.3506257983897,
                "n_params": 91,
                "converged": true,
                "iterations": 10
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 4055.9821835602584,
            "loglik": -1720.3796509530584,
            "n_params": 140,
            "converged": true,
            "iterations": 23,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4063.3686994323,
                "loglik": -1724.0729088890794,
                "n_params": 140,
                "converged": true,
                "iterations": 17
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4055.9821835602584,
                "loglik": -1720.3796509530584,
                "n_params": 140,
                "converged": true,
                "iterations": 23
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4063.368707596919,
                "loglik": -1724.0729129713889,
                "n_params": 140,
                "converged": true,
                "iterations": 20
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
              "selected_states": 3,
              "bic": 4063.3686994323,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4055.9821835602584,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4063.368707596919,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "insufficient_history",
          "minimum_history_days": 160,
          "windows": [],
          "stable": null
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 81,
        "n_features": 22,
        "candidate_states": [
          2,
          3
        ],
        "selected_states": 3,
        "bic_delta_vs_next_best": 20.61394106252783,
        "state_count_interpretation": "81 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 20.61 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 140,
          "observations_per_parameter": 0.5785714285714286,
          "parameter_pressure_label": "underidentified_pressure"
        },
        "state_occupancy": {
          "min_effective_days_required": 3.0,
          "min_effective_days_observed": 25.129992578563545,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 25.129992578563545,
              "pct_time": 0.31024682195757464,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 29.851758164838788,
              "pct_time": 0.368540224257269,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "effective_days": 26.018249256597667,
              "pct_time": 0.32121295378515635,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.6295544323565401,
            0.7061406991695225,
            0.3879730722305365
          ],
          "expected_duration_days": [
            2.6994519231566643,
            3.402989107963893,
            1.6339150364584565
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [
            2
          ],
          "warnings": [
            "fast_switching_states"
          ]
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
              "selected_states": 3,
              "bic": 4063.3686994323,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4055.9821835602584,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4063.368707596919,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "insufficient_history",
          "minimum_history_days": 160,
          "windows": [],
          "stable": null
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.0,
            "jump_probability": 0.1254378494727643,
            "jump_rate": 3.780348805294935e-37,
            "rolling_vol_10d": 0.024802006483192723,
            "downside_vol_10d": 0.014621924794553836,
            "drawdown_21d": 0.06190871720417266,
            "amihud_stress": 1.3308716352321104,
            "spread_rel": 226.3591060915242,
            "spread_ticks": 1.0912021157324867,
            "log_notional": 12.599487605869824,
            "log_trade_count": 4.244660271338869
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.7087216289437599,
            "jump_probability": 0.1397963780663108,
            "jump_rate": 1.2573190203249631e-26,
            "rolling_vol_10d": 0.03842193346660287,
            "downside_vol_10d": 0.01929850419141048,
            "drawdown_21d": 0.09686198240415902,
            "amihud_stress": 1.4486751200113486,
            "spread_rel": 252.9923696611187,
            "spread_ticks": 1.196760650316604,
            "log_notional": 12.295876967738415,
            "log_trade_count": 4.165093441601425
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8473651244491712,
            "jump_probability": 0.36267174404382047,
            "jump_rate": 0.2306073687290289,
            "rolling_vol_10d": 0.037997391732243,
            "downside_vol_10d": 0.021135700461831948,
            "drawdown_21d": 0.06691088109666311,
            "amihud_stress": 2.379602660624377,
            "spread_rel": 234.75390112022106,
            "spread_ticks": 1.1329972821090497,
            "log_notional": 13.203008777502832,
            "log_trade_count": 4.84135752303033
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
          "state": 0,
          "probabilities": [
            0.9999999967901688,
            3.2045270769129716e-09,
            5.3040729038429035e-12
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999661528772,
            3.383500427300949e-08,
            1.211856889934072e-11
          ],
          "jump_probability": 0.0846582515848772,
          "jump_score": 0.17984790574083828
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.999999680420515,
            1.0721081863270059e-07,
            2.1236866628085272e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999983805246611,
            1.1341667555523653e-06,
            4.853085833807243e-07
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.9999999995925242,
            3.996691945430923e-10,
            7.806730176538479e-12
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999957541085,
            4.228051516171014e-09,
            1.784009964677559e-11
          ],
          "jump_probability": 0.12094546015934368,
          "jump_score": 0.5252110940316976
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999998167691092,
            2.476210175120811e-10,
            1.8298326970101007e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999998250876749,
            3.9098753895509037e-10,
            1.7452133750646706e-07
          ],
          "jump_probability": 0.1750813778593889,
          "jump_score": 0.9021444700316497
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            2.1804480762205057e-16,
            7.797812676220815e-16,
            0.9999999999999991
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            9.542032116095452e-17,
            3.60819909082743e-15,
            0.9999999999999962
          ],
          "jump_probability": 0.4129553242945577,
          "jump_score": 1.9441204243737138
        },
        {
          "trade_date": "2026-05-18",
          "state": 0,
          "probabilities": [
            0.9999430317169684,
            5.042453313232944e-05,
            6.543749899318741e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999141422351296,
            7.961680637542626e-05,
            6.2409584948342525e-06
          ],
          "jump_probability": 0.15772472035734003,
          "jump_score": 0.7932559487182633
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            1.633300508895635e-08,
            3.7650616817227507e-13,
            0.9999999836666184
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            7.1472828666890656e-09,
            1.742911803059262e-12,
            0.9999999928509742
          ],
          "jump_probability": 0.4106731925135145,
          "jump_score": 1.9359277086619966
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999870418921889,
            5.022091694786231e-08,
            1.2907886894033302e-05
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999699722576322,
            5.312461939788919e-07,
            2.9496496173972372e-05
          ],
          "jump_probability": 0.16015372924226157,
          "jump_score": 0.8090567805491445
        },
        {
          "trade_date": "2026-05-21",
          "state": 0,
          "probabilities": [
            0.9999905548373571,
            3.842288256889354e-13,
            9.445162258756914e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999784159836672,
            4.064667876123004e-12,
            2.158401226822002e-05
          ],
          "jump_probability": 0.14820284286340976,
          "jump_score": 0.7293334567705635
        },
        {
          "trade_date": "2026-05-22",
          "state": 0,
          "probabilities": [
            0.9999993552249735,
            1.006895783545199e-14,
            6.447750163848963e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999993552249735,
            1.006895783545199e-14,
            6.447750163848963e-07
          ],
          "jump_probability": 0.1527403514160002,
          "jump_score": 0.7602019405760291
        }
      ],
      "methodology": {
        "estimation_window_days": 81,
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
        "market_link_display": "-0.42",
        "sector_link_display": "0.70",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.42% stock move in the opposite direction in this state. This is a point estimate from 81 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.70% stock move in the same direction in this state. This is a point estimate from 81 trading days.",
        "stock_persistence_display": "-1.20",
        "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
        "history_limited_note": "Read is based on 81 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Calm / Liquid",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 65.1,
        "driver_share_display": "65.1%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 81 trading days relative to the 252-day target.",
        "history_days": 81,
        "history_limited": true,
        "volatility_label": "Calm / Liquid",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 12.5,
        "jump_risk_score": 0.76,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.6295544323565401,
        "effective_days": 25.1,
        "persistence_note": "This state looks more persistent, with a typical run length of about 2.7 days.",
        "expected_duration_days": 2.7
      },
      "display_notes": {
        "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "hmm_jump_aware",
      "n_regimes": 3,
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.31024682195757464,
          "expected_duration_days": 2.6994519231566643,
          "current_probability": 0.9999993552249735,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 25.129992578563545,
          "volatility": {
            "median": 0.015325479991482495,
            "low": 0.015325479991482495,
            "high": 0.015325479991482495
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.1254378494727643,
          "jump_rate": 3.780348805294935e-37,
          "risk_score": 0.0,
          "metrics": {
            "rolling_vol_10d": 0.024802006483192723,
            "downside_vol_10d": 0.014621924794553836,
            "drawdown_21d": 0.06190871720417266,
            "amihud_stress": 1.3308716352321104,
            "spread_rel": 226.3591060915242,
            "spread_ticks": 1.0912021157324867,
            "log_notional": 12.599487605869824,
            "log_trade_count": 4.244660271338869
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.368540224257269,
          "expected_duration_days": 3.402989107963893,
          "current_probability": 1.006895783545199e-14,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 29.851758164838788,
          "volatility": {
            "median": 0.013106369934852934,
            "low": 0.013106369934852934,
            "high": 0.013106369934852934
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.1397963780663108,
          "jump_rate": 1.2573190203249631e-26,
          "risk_score": 0.7087216289437599,
          "metrics": {
            "rolling_vol_10d": 0.03842193346660287,
            "downside_vol_10d": 0.01929850419141048,
            "drawdown_21d": 0.09686198240415902,
            "amihud_stress": 1.4486751200113486,
            "spread_rel": 252.9923696611187,
            "spread_ticks": 1.196760650316604,
            "log_notional": 12.295876967738415,
            "log_trade_count": 4.165093441601425
          }
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "pct_time": 0.32121295378515635,
          "expected_duration_days": 1.6339150364584565,
          "current_probability": 6.447750163848963e-07,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 26.018249256597667,
          "volatility": {
            "median": 0.05475830630266463,
            "low": 0.05475830630266463,
            "high": 0.05475830630266463
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.36267174404382047,
          "jump_rate": 0.2306073687290289,
          "risk_score": 0.8473651244491712,
          "metrics": {
            "rolling_vol_10d": 0.037997391732243,
            "downside_vol_10d": 0.021135700461831948,
            "drawdown_21d": 0.06691088109666311,
            "amihud_stress": 2.379602660624377,
            "spread_rel": 234.75390112022106,
            "spread_ticks": 1.1329972821090497,
            "log_notional": 13.203008777502832,
            "log_trade_count": 4.84135752303033
          }
        }
      ],
      "transitions": [
        [
          0.6295544323565401,
          0.00041403946282973146,
          0.37003152818063006
        ],
        [
          0.05951018441991595,
          0.7061406991695225,
          0.23434911641056166
        ],
        [
          0.2754893833852258,
          0.3365375443842377,
          0.3879730722305365
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.6295544323565401,
            0.00041403946282973146,
            0.37003152818063006
          ],
          [
            0.05951018441991595,
            0.7061406991695225,
            0.23434911641056166
          ],
          [
            0.2754893833852258,
            0.3365375443842377,
            0.3879730722305365
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            15.0,
            0.0,
            9.0
          ],
          [
            2.0,
            21.0,
            7.0
          ],
          [
            7.0,
            9.0,
            10.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9999993552249735,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9999993552249735,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 1.006895783545199e-14,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "probability": 6.447750163848963e-07,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.12543800243525272,
        "current_score": 0.7602019405760291,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 3,
        "criterion": "bic_with_min_state_support",
        "bic": 4055.9821835602584,
        "loglik": -1720.3796509530584,
        "n_params": 140,
        "bic_delta_vs_next_best": 20.61394106252783,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 4076.596124622786,
            "loglik": -1838.3506257737972,
            "n_params": 91,
            "converged": true,
            "iterations": 8,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4076.596124622786,
                "loglik": -1838.3506257737972,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4076.5961246423176,
                "loglik": -1838.350625783563,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4076.5961246719717,
                "loglik": -1838.3506257983897,
                "n_params": 91,
                "converged": true,
                "iterations": 10
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 4055.9821835602584,
            "loglik": -1720.3796509530584,
            "n_params": 140,
            "converged": true,
            "iterations": 23,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4063.3686994323,
                "loglik": -1724.0729088890794,
                "n_params": 140,
                "converged": true,
                "iterations": 17
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4055.9821835602584,
                "loglik": -1720.3796509530584,
                "n_params": 140,
                "converged": true,
                "iterations": 23
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4063.368707596919,
                "loglik": -1724.0729129713889,
                "n_params": 140,
                "converged": true,
                "iterations": 20
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
              "selected_states": 3,
              "bic": 4063.3686994323,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4055.9821835602584,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4063.368707596919,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "insufficient_history",
          "minimum_history_days": 160,
          "windows": [],
          "stable": null
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 81,
        "n_features": 22,
        "candidate_states": [
          2,
          3
        ],
        "selected_states": 3,
        "bic_delta_vs_next_best": 20.61394106252783,
        "state_count_interpretation": "81 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 20.61 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 140,
          "observations_per_parameter": 0.5785714285714286,
          "parameter_pressure_label": "underidentified_pressure"
        },
        "state_occupancy": {
          "min_effective_days_required": 3.0,
          "min_effective_days_observed": 25.129992578563545,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 25.129992578563545,
              "pct_time": 0.31024682195757464,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 29.851758164838788,
              "pct_time": 0.368540224257269,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "effective_days": 26.018249256597667,
              "pct_time": 0.32121295378515635,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.6295544323565401,
            0.7061406991695225,
            0.3879730722305365
          ],
          "expected_duration_days": [
            2.6994519231566643,
            3.402989107963893,
            1.6339150364584565
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [
            2
          ],
          "warnings": [
            "fast_switching_states"
          ]
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
              "selected_states": 3,
              "bic": 4063.3686994323,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4055.9821835602584,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4063.368707596919,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "insufficient_history",
          "minimum_history_days": 160,
          "windows": [],
          "stable": null
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.0,
            "jump_probability": 0.1254378494727643,
            "jump_rate": 3.780348805294935e-37,
            "rolling_vol_10d": 0.024802006483192723,
            "downside_vol_10d": 0.014621924794553836,
            "drawdown_21d": 0.06190871720417266,
            "amihud_stress": 1.3308716352321104,
            "spread_rel": 226.3591060915242,
            "spread_ticks": 1.0912021157324867,
            "log_notional": 12.599487605869824,
            "log_trade_count": 4.244660271338869
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.7087216289437599,
            "jump_probability": 0.1397963780663108,
            "jump_rate": 1.2573190203249631e-26,
            "rolling_vol_10d": 0.03842193346660287,
            "downside_vol_10d": 0.01929850419141048,
            "drawdown_21d": 0.09686198240415902,
            "amihud_stress": 1.4486751200113486,
            "spread_rel": 252.9923696611187,
            "spread_ticks": 1.196760650316604,
            "log_notional": 12.295876967738415,
            "log_trade_count": 4.165093441601425
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8473651244491712,
            "jump_probability": 0.36267174404382047,
            "jump_rate": 0.2306073687290289,
            "rolling_vol_10d": 0.037997391732243,
            "downside_vol_10d": 0.021135700461831948,
            "drawdown_21d": 0.06691088109666311,
            "amihud_stress": 2.379602660624377,
            "spread_rel": 234.75390112022106,
            "spread_ticks": 1.1329972821090497,
            "log_notional": 13.203008777502832,
            "log_trade_count": 4.84135752303033
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
          "state": 0,
          "probabilities": [
            0.9999999967901688,
            3.2045270769129716e-09,
            5.3040729038429035e-12
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999661528772,
            3.383500427300949e-08,
            1.211856889934072e-11
          ],
          "jump_probability": 0.0846582515848772,
          "jump_score": 0.17984790574083828
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.999999680420515,
            1.0721081863270059e-07,
            2.1236866628085272e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999983805246611,
            1.1341667555523653e-06,
            4.853085833807243e-07
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.9999999995925242,
            3.996691945430923e-10,
            7.806730176538479e-12
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999957541085,
            4.228051516171014e-09,
            1.784009964677559e-11
          ],
          "jump_probability": 0.12094546015934368,
          "jump_score": 0.5252110940316976
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999998167691092,
            2.476210175120811e-10,
            1.8298326970101007e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999998250876749,
            3.9098753895509037e-10,
            1.7452133750646706e-07
          ],
          "jump_probability": 0.1750813778593889,
          "jump_score": 0.9021444700316497
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            2.1804480762205057e-16,
            7.797812676220815e-16,
            0.9999999999999991
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            9.542032116095452e-17,
            3.60819909082743e-15,
            0.9999999999999962
          ],
          "jump_probability": 0.4129553242945577,
          "jump_score": 1.9441204243737138
        },
        {
          "trade_date": "2026-05-18",
          "state": 0,
          "probabilities": [
            0.9999430317169684,
            5.042453313232944e-05,
            6.543749899318741e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999141422351296,
            7.961680637542626e-05,
            6.2409584948342525e-06
          ],
          "jump_probability": 0.15772472035734003,
          "jump_score": 0.7932559487182633
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            1.633300508895635e-08,
            3.7650616817227507e-13,
            0.9999999836666184
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            7.1472828666890656e-09,
            1.742911803059262e-12,
            0.9999999928509742
          ],
          "jump_probability": 0.4106731925135145,
          "jump_score": 1.9359277086619966
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999870418921889,
            5.022091694786231e-08,
            1.2907886894033302e-05
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999699722576322,
            5.312461939788919e-07,
            2.9496496173972372e-05
          ],
          "jump_probability": 0.16015372924226157,
          "jump_score": 0.8090567805491445
        },
        {
          "trade_date": "2026-05-21",
          "state": 0,
          "probabilities": [
            0.9999905548373571,
            3.842288256889354e-13,
            9.445162258756914e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999784159836672,
            4.064667876123004e-12,
            2.158401226822002e-05
          ],
          "jump_probability": 0.14820284286340976,
          "jump_score": 0.7293334567705635
        },
        {
          "trade_date": "2026-05-22",
          "state": 0,
          "probabilities": [
            0.9999993552249735,
            1.006895783545199e-14,
            6.447750163848963e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999993552249735,
            1.006895783545199e-14,
            6.447750163848963e-07
          ],
          "jump_probability": 0.1527403514160002,
          "jump_score": 0.7602019405760291
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 71.9 — Strong",
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
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Monthly liquidity remains strong for the stock’s size, but recent trading has dropped and near-term access looks less robust.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance has lagged, with the stock down 7.7% over one month compared with peers down 4.5% and the market up 1.3%.",
    "perf_insight": "The stock has underperformed peers and the market over one month, and current moves are being driven mainly by company-specific factors at 65.1%. That matters because weaker performance is being shaped more by stock-specific developments than by a broader market move.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price action is being driven mainly by company-specific factors rather than broader market moves.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 65.1% of price changes. Other influences are market 13.3%, and secto%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 13.3%, secto%, and company-specific 65.1%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 13.3%, secto%, and company-specific 65.1%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Company-specific drivers account for 65.1% of the mix, so stock news is carrying more weight in current price moves. With 1W trades down 36.0% from the 1M average, those moves may feel sharper in thinner trading.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price moves are primarily company-specific, at 65.1% of the current mix.",
      "Monthly change: the stock has remained clearly company-driven from March through May, even as recent trading activity has dropped relative to the 1M average."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The stock still screens as liquid for its size, but the recent drop in activity and thin bid depth make current conditions less forgiving.",
    "regime_badge_text": "Calm / Liquid",
    "regime_pie_title": "State Mix",
    "transition_title": "State Transitions",
    "transition_cols": [
      "From \\",
      "Calm / Liquid",
      "Normal / Active",
      "Jump / Tail Shock"
    ],
    "transition_note_template": "Rows sum to 100%. Each row shows how states tend to transition across the observed sample.",
    "market_state_strip": [],
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to May 22, 2026 (83 trading days • 12,540 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The order book is skewed to the sell side, with displayed bid depth at 0.26x of ask depth despite a 1 tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 19.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Current execution conditions are defined more by book imbalance than by spread.",
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
    "intraday_insight": "The spread is 1 tick, but displayed bid depth is only 0.26x of ask depth. That matters because the headline spread looks orderly while buy-side support remains thin.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading conditions are being shaped more by liquidity and stock-specific drivers than by short activity.",
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
    "exec_subtitle": "Liquid for its size, but recent daily volume has pulled back, and the displayed book shows thin buy-side support.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last 3 months of trading data, except for price driver mix which uses the last 5 trading days.",
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
        "value": "71.9/100",
        "sub": "Peer median 47.6 (+24.4 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$201.6K",
        "sub": "Peer median S$6.5K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.40%",
        "sub": "1.15 ticks; peers 4.21%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity remains strong in relative terms, with a 3M score of 71.9 against a peer median of 47.6, which leaves the stock well placed for its size. Recent trading has dropped, with 1W trades down 36.0% from the 1M average, so immediate access looks weaker than the broader profile. The displayed book reinforces that caution, with bid depth at 0.26x of ask depth despite a 1 tick spread.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.237",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.11%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.26x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.05% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-4.93% with 61.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-4.93% with 24.4% fill.",
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
        "value": "72",
        "suffix": "/100",
        "bar_pct": 72,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 157/556",
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
        "value": "2.40",
        "suffix": "%",
        "bar_pct": 24,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.40% • 1.15 ticks vs peers 4.21%",
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
        "value": "201.6K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$6.5K",
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
        "value": "65.1",
        "suffix": "company-specific",
        "bar_pct": 65,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 13.3% • Secto%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for the stock’s size, with a 3M liquidity score of 71.9 compared with a peer median of 47.6. That keeps the name looking accessible relative to peers.",
      "Recent trading has pulled back, with 1W trades down 36.0% compared with the 1M",
      "The displayed book is skewed to the sell side, with bid depth at 0.26x of ask depth despite a 1 tick spread. That means screen liquidity looks orderly, but buy-side support is thin."
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
      "overall": "3M liquidity is strong: score 71.9 vs peer median 47.6 (+24.4",
      "strengths": [
        "3M score 71.9 vs peer median 47.6 (+24.4 pts)."
      ],
      "concerns": [
        "1W trades down -36.0% vs 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +24.4 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is -2.0%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -2.0% vs market 1.0%.",
        "vs_sector": "Better than sector: -2.0% vs sector -8.6%.",
        "vs_peers": "Better than peers: -2.0% vs peers -2.8%."
      },
      "adv": {
        "insight": "ADV is S$201.6K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$201.6K vs market S$13.2K.",
        "vs_sector": "Better than sector: S$201.6K vs sector S$6.5K.",
        "vs_peers": "Better than peers: S$201.6K vs peers S$6.5K."
      },
      "spread": {
        "insight": "Spread is 2.40%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.40% vs market 3.22%.",
        "vs_sector": "In line with sector: 2.40% vs secto%.",
        "vs_peers": "Better than peers: 2.40% vs peers 4.21%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.15%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.15% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.15% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.15% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 52.22%, worse than market and sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 52.22% vs market 47.17%.",
        "vs_sector": "Worse than sector: 52.22% vs sector 43.12%.",
        "vs_peers": "In line with peers: 52.22% vs peers 55.88%."
      },
      "trades": {
        "insight": "Trades is 54, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 54 vs market 7.",
        "vs_sector": "Better than sector: 54 vs sector 4.",
        "vs_peers": "Better than peers: 54 vs peers 4."
      },
      "amihud": {
        "insight": "Price impact is 8.56e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 8.56e-08 vs market 1.49e-07.",
        "vs_sector": "Better than sector: 8.56e-08 vs sector 5.26e-07.",
        "vs_peers": "Better than peers: 8.56e-08 vs peers 5.76e-07."
      }
    },
    "performance": {
      "overall": "Recent performance has lagged peers and the market, with the stock down 7.7% over one month compared with peers down 4.5% and the market up 1.3%. Liquidity gives a mixed read on that move because the three-month score of 71.9 still sits well above the 47.6 peer median, while one-week trades are down 36.0% from the monthly average, pointing to weaker near-term participation. The move looks more stock-driven than market-led because company-specific factors account for 65.1% of the current driver mix.",
      "conclusion": "The recent move looks primarily company-specific rather than broad-market, with weaker near-term trading activity reinforcing the pressure."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by company-specific factors, with 65.1% of current moves coming from stock-level influences. That matters because recent performance has been weak at -7.7% over one month, compared with -4.5% for peers and +1.3% for the market, so broad market strength is not offsetting stock-specific pressure.",
      "beta": "The current read is still more about the company than the market or sector. That matters for trading conditions because 1W trades are down 36.0% compared with the 1M average, which can make stock-specific moves feel more abrupt.",
      "rolling_change": "This has been a stable pattern rather than a one-off shift, with the stock mostly company-driven in March and April and still clearly company-driven in May. That consistency matters because the recent pullback is still being shaped more by company factors than by a broader market reset."
    },
    "regime": {
      "overall": "The backdrop is broadly orderly, which supports steadier trading conditions than the recent share-price weakness might imply. That matters because a calm state can still feel less dependable day to day when trading activity is running below the monthly average.",
      "current": "The active state is calm and liquid, with a 3M liquidity score of 71.9 compared with a peer median of 47.6, showing the stock still trades well for its size.",
      "transitions": "This state looks fairly settled rather than fleeting, with a typical run length of about 2.7 days, although 1W trades are down 36.0% compared with the 1M average.",
      "trading_implications": "Trading conditions may remain broadly orderly, but the drop in recent activity and bid depth at just 0.26x of ask depth mean liquidity can feel less steady on the buy side even while the overall state stays calm."
    },
    "execution": {
      "overall": "Displayed liquidity looks mixed because the spread is only 1 tick, but bid depth is just 0.26x of ask depth. That matters because access may still look orderly on the screen while buy-side support is materially thinner than sell-side supply.",
      "concern": "Trade-size percentiles use available history from Jan 22, 2026 to May 22, 2026 (83 trading days • 12,540 trades), not a full year.",
      "peer_context": "The broader picture still screens well, with a 3M liquidity score of 71.9 compared with a peer median of 47.6, but the current book is less supportive than that ranking suggests. In practice, the stock can look liquid for its size over time while the displayed book remains uneven right now."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like.",
      "retail_heavy": "Retail-like trades account for 86.8% of trade count and 33.7% of trade value, compared with institution-like trades at 1.3% of count and 19.3% of value. That leaves the tape looking retail-led overall, even though institutions still account for a meaningful share of value.",
      "institutional_gap": "Institution-like activity is limited in participation at 1.3% of trades, even though it contributes 19.3% of value. That gap suggests institutions are present in value terms but are not setting the day-to-day flow.",
      "peer_comparison": "The mix stands out as retail-leaning relative to peers, with the comparison framed by a much higher share of trade count coming from retail-like activity than institution-like activity."
    },
    "price_moving": {
      "overall": "Price-moving activity looks meaningful rather than dominant, with company-specific factors currently the main driver of the tape. The signal is mixed: flow is retail-like by count and value, while company-specific drivers account for 65.1% of price action. That means trading is active enough to move the stock, but the direction is being shaped more by stock-specific news than by a strong institutional flow signal.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low and is not the main issue in the stock today. The bigger change is that trading activity is weaker, with 1W trades down 36.0% compared with the 1M average, while the shares have also underperformed peers and the market over the past month, which points more to weaker demand than to short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short interest looks stable rather than rising, so there is no clear sign that short selling is adding fresh stress. That matters because the recent weakness in trading conditions is more consistent with lower participation and weaker price performance than with a change in short activity.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 2.6%, continuous 95.7%, and close 1.2%. Current trading concentration score is 0.306.",
      "hhi_interpretation": "A concentration score of 0.306 suggests activity is not heavily bunched into a few moments, so trading conditions look steadier through the session.",
      "best_times": "The continuous session is the clearest source of usable liquidity because it carries almost all trading activity at 95.7% of the day.",
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
        "TKU",
        "KUX",
        "532",
        "U77",
        "J03",
        "NXR",
        "42F",
        "LVR",
        "ITS"
      ],
      "scores": [
        71.94244604316546,
        1.079136690647482,
        3.9568345323741005,
        47.122302158273385,
        54.13669064748201,
        37.410071942446045,
        64.74820143884892,
        48.02158273381295,
        83.27338129496404
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
        201552.0,
        0.0,
        0.0,
        5544.0,
        40587.799999999996,
        852.0,
        67485.6,
        7497.0,
        657712.0
      ],
      "total": 556
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 556,
      "company": {
        "volatility": 0.5221956198708652,
        "adv": 201552.0,
        "spread_pct": 0.023967896212412753,
        "turnover_ratio": 0.0014727100023655777,
        "amihud": 8.557943697288424e-08,
        "trades": 54.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6921910150449248,
          "median": 0.4717218703060321,
          "min": 0.0,
          "max": 7.013811259728677,
          "p5": 0.15949070695961898,
          "p95": 2.2301976168661084,
          "count": 556
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3346234.1441047685,
          "median": 13170.0,
          "min": 0.0,
          "max": 284335480.0,
          "p5": 0.0,
          "p95": 14058606.0,
          "count": 556
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.10124315154572552,
          "median": 0.03217061268751127,
          "min": 0.0002805689255457263,
          "max": 1.2394366197183098,
          "p5": 0.0034758312328819923,
          "p95": 0.44957360805416136,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0067263761538879936,
          "median": 0.00026665202488717206,
          "min": 0.0,
          "max": 2.4059060048777274,
          "p5": 0.0,
          "p95": 0.011873658779405062,
          "count": 549
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.3812505372463205e-05,
          "median": 1.487180622012699e-07,
          "min": 0.0,
          "max": 0.0007680491551459317,
          "p5": 0.0,
          "p95": 3.370700222460994e-05,
          "count": 551
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 497.69874100719426,
          "median": 7.0,
          "min": 0.0,
          "max": 11380.0,
          "p5": 0.0,
          "p95": 2997.75,
          "count": 556
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8737525215437303,
          "median": 0.4311582616365811,
          "min": 0.2558941046710879,
          "max": 2.4261024794970623,
          "p5": 0.27713987037797666,
          "p95": 2.364623406099731,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1646515.6249999998,
          "median": 6520.5,
          "min": 0.0,
          "max": 12298967.999999998,
          "p5": 0.0,
          "p95": 8224528.399999993,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1597994892405911,
          "median": 0.022016126792558835,
          "min": 0.0013514156670242764,
          "max": 0.6666666666666666,
          "p5": 0.004623064452066456,
          "p95": 0.6066006600660064,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0024426510357100097,
          "median": 7.661505324325498e-05,
          "min": 0.0,
          "max": 0.009669927990213068,
          "p5": 0.0,
          "p95": 0.009156371036249843,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.5515742526141315e-05,
          "median": 5.262754572687647e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 2.871360488846163e-10,
          "p95": 0.00023461652138179667,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 437.5,
          "median": 4.5,
          "min": 0.0,
          "max": 3060.0,
          "p5": 0.0,
          "p95": 2120.5999999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 97459.8,
          "median": 6520.5,
          "min": 0.0,
          "max": 657712.0,
          "p5": 0.0,
          "p95": 451132.75999999966,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 54.5,
          "median": 4.5,
          "min": 0.0,
          "max": 376.0,
          "p5": 0.0,
          "p95": 254.5499999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.0223724805164165,
          "median": 0.5587828761644456,
          "min": 0.3165962924050557,
          "max": 2.4261024794970623,
          "p5": 0.3305510990580588,
          "p95": 2.364623406099731,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16962317284026054,
          "median": 0.042065884201522116,
          "min": 0.010698983624287645,
          "max": 0.6666666666666666,
          "p5": 0.013016489126546018,
          "p95": 0.6066006600660064,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.237715387341847,
          "median": 1.6480061349693251,
          "min": 1.0,
          "max": 21.083333333333332,
          "p5": 1.0120689655172415,
          "p95": 14.841666666666656,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.5528012181003685e-05,
          "median": 5.757642710738107e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.00023461652138179667,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002018422324226483,
          "median": 7.661505324325498e-05,
          "min": 0.0,
          "max": 0.009669927990213068,
          "p5": 0.0,
          "p95": 0.007389520740471001,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -3.3306690738754696e-16,
        "market": 0.01584857789022842,
        "sector": -0.004645760743321681,
        "peers": 0.002538071065989911
      },
      {
        "horizon": "1M",
        "stock": -0.07692307692307743,
        "market": 0.013078822058819606,
        "sector": -0.0467720138514881,
        "peers": -0.0452137793539481
      },
      {
        "horizon": "3M",
        "stock": -0.020408163265307477,
        "market": 0.010074498505991514,
        "sector": -0.08590416029131964,
        "peers": -0.02842515020348846
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
      "share_market": 0.13258897550350474,
      "share_sector": 0.21665634551123378,
      "share_idio": 0.6507546789852615,
      "beta_market": -0.4237142717454006,
      "beta_sector": 0.7000470630904286,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 81,
        "reporting_window_days": 63,
        "available_history_days": 81,
        "n_regimes": 3,
        "current_regime": 0,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9999993552249735,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.13258897550350474,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "13.3%",
            "display_range": null,
            "display_text": "13.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
            "kind": "share_pct",
            "value_pct": 13.3,
            "plain_english": "Market explains about 13.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.21665634551123378,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "21.7%",
            "display_range": null,
            "display_text": "21.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
            "kind": "share_pct",
            "value_pct": 21.7,
            "plain_english": "Sector explains about 21.7% of price moves in the current state."
          },
          "company_share": {
            "median": 0.6507546789852615,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.1%",
            "display_range": null,
            "display_text": "65.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
            "kind": "share_pct",
            "value_pct": 65.1,
            "plain_english": "Company-specific explains about 65.1% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.4237142717454006,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.42",
            "display_range": null,
            "display_text": "-0.42",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.42% stock move in the opposite direction in this state.",
            "value_num": -0.42
          },
          "beta_stock_lag": {
            "median": -1.2030130294515624,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.20",
            "display_range": null,
            "display_text": "-1.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
            "kind": "lag_beta",
            "value_num": -1.2
          },
          "beta_sector": {
            "median": 0.7000470630904286,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.70",
            "display_range": null,
            "display_text": "0.70",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.70% stock move in the same direction in this state.",
            "value_num": 0.7
          },
          "beta_market_lag": {
            "median": -1.2093704011531667,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.21",
            "display_range": null,
            "display_text": "-1.21",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
            "kind": "lag_beta",
            "value_num": -1.21
          },
          "beta_sector_lag": {
            "median": 2.1766364434575456,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.18",
            "display_range": null,
            "display_text": "2.18",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
            "kind": "lag_beta",
            "value_num": 2.18
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 81 trading days relative to the 252-day target."
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
              "median": 0.47931948471963903,
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
                "median": 0.47931948471963903,
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
                "median": 0.2984396411024004,
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
                "median": 0.2222408741779605,
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
              "median": 0.5656898926629685,
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
                "median": 0.26479317957873116,
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
                "median": 0.16951692775830024,
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
                "median": 0.5656898926629685,
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
            "period_label": "2026-03-02 to 2026-03-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.537921465360335,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22982068067655398,
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
                "median": 0.23225785396311108,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.2%",
                "display_range": null,
                "display_text": "23.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.2,
                "plain_english": "Sector explains about 23.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.537921465360335,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.8%",
                "display_range": null,
                "display_text": "53.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 53.8,
                "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
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
              "median": 0.5202476822091704,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34425966677405034,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Market explains about 34.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1354926510167792,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.5%",
                "display_range": null,
                "display_text": "13.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.5,
                "plain_english": "Sector explains about 13.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5202476822091704,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.0%",
                "display_range": null,
                "display_text": "52.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.0,
                "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
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
              "median": 0.6154426772812237,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.5%",
              "display_range": null,
              "display_text": "61.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 61.5,
              "plain_english": "Company-specific explains about 61.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.0329764531497494,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "3.3%",
                "display_range": null,
                "display_text": "3.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 3.3,
                "plain_english": "Market explains about 3.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.35158086956902684,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.2%",
                "display_range": null,
                "display_text": "35.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 35.2,
                "plain_english": "Sector explains about 35.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6154426772812237,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.5%",
                "display_range": null,
                "display_text": "61.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 61.5,
                "plain_english": "Company-specific explains about 61.5% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.31024682195757464,
            "expected_duration_days": 2.6994519231566643,
            "current_probability": 0.9999993552249735,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 25.129992578563545,
            "volatility": {
              "median": 0.015325479991482495,
              "low": 0.015325479991482495,
              "high": 0.015325479991482495
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.1254378494727643,
            "jump_rate": 3.780348805294935e-37,
            "risk_score": 0.0,
            "metrics": {
              "rolling_vol_10d": 0.024802006483192723,
              "downside_vol_10d": 0.014621924794553836,
              "drawdown_21d": 0.06190871720417266,
              "amihud_stress": 1.3308716352321104,
              "spread_rel": 226.3591060915242,
              "spread_ticks": 1.0912021157324867,
              "log_notional": 12.599487605869824,
              "log_trade_count": 4.244660271338869
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.368540224257269,
            "expected_duration_days": 3.402989107963893,
            "current_probability": 1.006895783545199e-14,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 29.851758164838788,
            "volatility": {
              "median": 0.013106369934852934,
              "low": 0.013106369934852934,
              "high": 0.013106369934852934
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.1397963780663108,
            "jump_rate": 1.2573190203249631e-26,
            "risk_score": 0.7087216289437599,
            "metrics": {
              "rolling_vol_10d": 0.03842193346660287,
              "downside_vol_10d": 0.01929850419141048,
              "drawdown_21d": 0.09686198240415902,
              "amihud_stress": 1.4486751200113486,
              "spread_rel": 252.9923696611187,
              "spread_ticks": 1.196760650316604,
              "log_notional": 12.295876967738415,
              "log_trade_count": 4.165093441601425
            }
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "pct_time": 0.32121295378515635,
            "expected_duration_days": 1.6339150364584565,
            "current_probability": 6.447750163848963e-07,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 26.018249256597667,
            "volatility": {
              "median": 0.05475830630266463,
              "low": 0.05475830630266463,
              "high": 0.05475830630266463
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.36267174404382047,
            "jump_rate": 0.2306073687290289,
            "risk_score": 0.8473651244491712,
            "metrics": {
              "rolling_vol_10d": 0.037997391732243,
              "downside_vol_10d": 0.021135700461831948,
              "drawdown_21d": 0.06691088109666311,
              "amihud_stress": 2.379602660624377,
              "spread_rel": 234.75390112022106,
              "spread_ticks": 1.1329972821090497,
              "log_notional": 13.203008777502832,
              "log_trade_count": 4.84135752303033
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.6295544323565401,
              0.00041403946282973146,
              0.37003152818063006
            ],
            [
              0.05951018441991595,
              0.7061406991695225,
              0.23434911641056166
            ],
            [
              0.2754893833852258,
              0.3365375443842377,
              0.3879730722305365
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              15.0,
              0.0,
              9.0
            ],
            [
              2.0,
              21.0,
              7.0
            ],
            [
              7.0,
              9.0,
              10.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 0.9999993552249735,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 1.006895783545199e-14,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "probability": 6.447750163848963e-07,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.12543800243525272,
          "current_score": 0.7602019405760291,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 3,
          "criterion": "bic_with_min_state_support",
          "bic": 4055.9821835602584,
          "loglik": -1720.3796509530584,
          "n_params": 140,
          "bic_delta_vs_next_best": 20.61394106252783,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 4076.596124622786,
              "loglik": -1838.3506257737972,
              "n_params": 91,
              "converged": true,
              "iterations": 8,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4076.596124622786,
                  "loglik": -1838.3506257737972,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 8
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4076.5961246423176,
                  "loglik": -1838.350625783563,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 8
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4076.5961246719717,
                  "loglik": -1838.3506257983897,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 10
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 4055.9821835602584,
              "loglik": -1720.3796509530584,
              "n_params": 140,
              "converged": true,
              "iterations": 23,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4063.3686994323,
                  "loglik": -1724.0729088890794,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 17
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4055.9821835602584,
                  "loglik": -1720.3796509530584,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 23
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4063.368707596919,
                  "loglik": -1724.0729129713889,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 20
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
                "selected_states": 3,
                "bic": 4063.3686994323,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 4055.9821835602584,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 4063.368707596919,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "3": 3
            },
            "selected_state_share": 1.0,
            "stable": true,
            "majority_support": true
          },
          "rolling_window_stability": {
            "status": "insufficient_history",
            "minimum_history_days": 160,
            "windows": [],
            "stable": null
          }
        },
        "robustness_diagnostics": {
          "history_used_days": 81,
          "n_features": 22,
          "candidate_states": [
            2,
            3
          ],
          "selected_states": 3,
          "bic_delta_vs_next_best": 20.61394106252783,
          "state_count_interpretation": "81 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 20.61 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 140,
            "observations_per_parameter": 0.5785714285714286,
            "parameter_pressure_label": "underidentified_pressure"
          },
          "state_occupancy": {
            "min_effective_days_required": 3.0,
            "min_effective_days_observed": 25.129992578563545,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 25.129992578563545,
                "pct_time": 0.31024682195757464,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 29.851758164838788,
                "pct_time": 0.368540224257269,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Jump / Tail Shock",
                "effective_days": 26.018249256597667,
                "pct_time": 0.32121295378515635,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.6295544323565401,
              0.7061406991695225,
              0.3879730722305365
            ],
            "expected_duration_days": [
              2.6994519231566643,
              3.402989107963893,
              1.6339150364584565
            ],
            "nearly_absorbing_state_ids": [],
            "fast_switching_state_ids": [
              2
            ],
            "warnings": [
              "fast_switching_states"
            ]
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
                "selected_states": 3,
                "bic": 4063.3686994323,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 4055.9821835602584,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 4063.368707596919,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "3": 3
            },
            "selected_state_share": 1.0,
            "stable": true,
            "majority_support": true
          },
          "rolling_window_stability": {
            "status": "insufficient_history",
            "minimum_history_days": 160,
            "windows": [],
            "stable": null
          },
          "feature_profile_by_state": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "risk_score": 0.0,
              "jump_probability": 0.1254378494727643,
              "jump_rate": 3.780348805294935e-37,
              "rolling_vol_10d": 0.024802006483192723,
              "downside_vol_10d": 0.014621924794553836,
              "drawdown_21d": 0.06190871720417266,
              "amihud_stress": 1.3308716352321104,
              "spread_rel": 226.3591060915242,
              "spread_ticks": 1.0912021157324867,
              "log_notional": 12.599487605869824,
              "log_trade_count": 4.244660271338869
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.7087216289437599,
              "jump_probability": 0.1397963780663108,
              "jump_rate": 1.2573190203249631e-26,
              "rolling_vol_10d": 0.03842193346660287,
              "downside_vol_10d": 0.01929850419141048,
              "drawdown_21d": 0.09686198240415902,
              "amihud_stress": 1.4486751200113486,
              "spread_rel": 252.9923696611187,
              "spread_ticks": 1.196760650316604,
              "log_notional": 12.295876967738415,
              "log_trade_count": 4.165093441601425
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "risk_score": 0.8473651244491712,
              "jump_probability": 0.36267174404382047,
              "jump_rate": 0.2306073687290289,
              "rolling_vol_10d": 0.037997391732243,
              "downside_vol_10d": 0.021135700461831948,
              "drawdown_21d": 0.06691088109666311,
              "amihud_stress": 2.379602660624377,
              "spread_rel": 234.75390112022106,
              "spread_ticks": 1.1329972821090497,
              "log_notional": 13.203008777502832,
              "log_trade_count": 4.84135752303033
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
            "state": 0,
            "probabilities": [
              0.9999999967901688,
              3.2045270769129716e-09,
              5.3040729038429035e-12
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999661528772,
              3.383500427300949e-08,
              1.211856889934072e-11
            ],
            "jump_probability": 0.0846582515848772,
            "jump_score": 0.17984790574083828
          },
          {
            "trade_date": "2026-05-12",
            "state": 0,
            "probabilities": [
              0.999999680420515,
              1.0721081863270059e-07,
              2.1236866628085272e-07
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999983805246611,
              1.1341667555523653e-06,
              4.853085833807243e-07
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 0,
            "probabilities": [
              0.9999999995925242,
              3.996691945430923e-10,
              7.806730176538479e-12
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999957541085,
              4.228051516171014e-09,
              1.784009964677559e-11
            ],
            "jump_probability": 0.12094546015934368,
            "jump_score": 0.5252110940316976
          },
          {
            "trade_date": "2026-05-14",
            "state": 0,
            "probabilities": [
              0.9999998167691092,
              2.476210175120811e-10,
              1.8298326970101007e-07
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999998250876749,
              3.9098753895509037e-10,
              1.7452133750646706e-07
            ],
            "jump_probability": 0.1750813778593889,
            "jump_score": 0.9021444700316497
          },
          {
            "trade_date": "2026-05-15",
            "state": 2,
            "probabilities": [
              2.1804480762205057e-16,
              7.797812676220815e-16,
              0.9999999999999991
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              9.542032116095452e-17,
              3.60819909082743e-15,
              0.9999999999999962
            ],
            "jump_probability": 0.4129553242945577,
            "jump_score": 1.9441204243737138
          },
          {
            "trade_date": "2026-05-18",
            "state": 0,
            "probabilities": [
              0.9999430317169684,
              5.042453313232944e-05,
              6.543749899318741e-06
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999141422351296,
              7.961680637542626e-05,
              6.2409584948342525e-06
            ],
            "jump_probability": 0.15772472035734003,
            "jump_score": 0.7932559487182633
          },
          {
            "trade_date": "2026-05-19",
            "state": 2,
            "probabilities": [
              1.633300508895635e-08,
              3.7650616817227507e-13,
              0.9999999836666184
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              7.1472828666890656e-09,
              1.742911803059262e-12,
              0.9999999928509742
            ],
            "jump_probability": 0.4106731925135145,
            "jump_score": 1.9359277086619966
          },
          {
            "trade_date": "2026-05-20",
            "state": 0,
            "probabilities": [
              0.9999870418921889,
              5.022091694786231e-08,
              1.2907886894033302e-05
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999699722576322,
              5.312461939788919e-07,
              2.9496496173972372e-05
            ],
            "jump_probability": 0.16015372924226157,
            "jump_score": 0.8090567805491445
          },
          {
            "trade_date": "2026-05-21",
            "state": 0,
            "probabilities": [
              0.9999905548373571,
              3.842288256889354e-13,
              9.445162258756914e-06
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999784159836672,
              4.064667876123004e-12,
              2.158401226822002e-05
            ],
            "jump_probability": 0.14820284286340976,
            "jump_score": 0.7293334567705635
          },
          {
            "trade_date": "2026-05-22",
            "state": 0,
            "probabilities": [
              0.9999993552249735,
              1.006895783545199e-14,
              6.447750163848963e-07
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999993552249735,
              1.006895783545199e-14,
              6.447750163848963e-07
            ],
            "jump_probability": 0.1527403514160002,
            "jump_score": 0.7602019405760291
          }
        ],
        "methodology": {
          "estimation_window_days": 81,
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
          "market_link_display": "-0.42",
          "sector_link_display": "0.70",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.42% stock move in the opposite direction in this state. This is a point estimate from 81 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.70% stock move in the same direction in this state. This is a point estimate from 81 trading days.",
          "stock_persistence_display": "-1.20",
          "point_estimate_note": "Point estimate only because the current state has 81 trading days.",
          "history_limited_note": "Read is based on 81 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Calm / Liquid",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 65.1,
          "driver_share_display": "65.1%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 81 trading days relative to the 252-day target.",
          "history_days": 81,
          "history_limited": true,
          "volatility_label": "Calm / Liquid",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 12.5,
          "jump_risk_score": 0.76,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.6295544323565401,
          "effective_days": 25.1,
          "persistence_note": "This state looks more persistent, with a typical run length of about 2.7 days.",
          "expected_duration_days": 2.7
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
          "share_market": 0.47931948471963903,
          "share_sector": 0.2984396411024004,
          "share_company": 0.2222408741779605,
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
          "share_market": 0.26479317957873116,
          "share_sector": 0.16951692775830024,
          "share_company": 0.5656898926629685,
          "share_market_display": "26.5%",
          "share_sector_display": "17.0%",
          "share_company_display": "56.6%",
          "dominant_share_display": "56.6%"
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
          "share_market": 0.22982068067655398,
          "share_sector": 0.23225785396311108,
          "share_company": 0.537921465360335,
          "share_market_display": "23.0%",
          "share_sector_display": "23.2%",
          "share_company_display": "53.8%",
          "dominant_share_display": "53.8%"
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
          "share_market": 0.34425966677405034,
          "share_sector": 0.1354926510167792,
          "share_company": 0.5202476822091704,
          "share_market_display": "34.4%",
          "share_sector_display": "13.5%",
          "share_company_display": "52.0%",
          "dominant_share_display": "52.0%"
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
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.0329764531497494,
          "share_sector": 0.35158086956902684,
          "share_company": 0.6154426772812237,
          "share_market_display": "3.3%",
          "share_sector_display": "35.2%",
          "share_company_display": "61.5%",
          "dominant_share_display": "61.5%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 3,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9999993552249735,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.31024682195757464,
          0.368540224257269,
          0.32121295378515635
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.31024682195757464,
            "expected_duration_days": 2.6994519231566643,
            "current_probability": 0.9999993552249735,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 25.129992578563545,
            "volatility": {
              "median": 0.015325479991482495,
              "low": 0.015325479991482495,
              "high": 0.015325479991482495
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.1254378494727643,
            "jump_rate": 3.780348805294935e-37,
            "risk_score": 0.0,
            "metrics": {
              "rolling_vol_10d": 0.024802006483192723,
              "downside_vol_10d": 0.014621924794553836,
              "drawdown_21d": 0.06190871720417266,
              "amihud_stress": 1.3308716352321104,
              "spread_rel": 226.3591060915242,
              "spread_ticks": 1.0912021157324867,
              "log_notional": 12.599487605869824,
              "log_trade_count": 4.244660271338869
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.368540224257269,
            "expected_duration_days": 3.402989107963893,
            "current_probability": 1.006895783545199e-14,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 29.851758164838788,
            "volatility": {
              "median": 0.013106369934852934,
              "low": 0.013106369934852934,
              "high": 0.013106369934852934
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.1397963780663108,
            "jump_rate": 1.2573190203249631e-26,
            "risk_score": 0.7087216289437599,
            "metrics": {
              "rolling_vol_10d": 0.03842193346660287,
              "downside_vol_10d": 0.01929850419141048,
              "drawdown_21d": 0.09686198240415902,
              "amihud_stress": 1.4486751200113486,
              "spread_rel": 252.9923696611187,
              "spread_ticks": 1.196760650316604,
              "log_notional": 12.295876967738415,
              "log_trade_count": 4.165093441601425
            }
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "pct_time": 0.32121295378515635,
            "expected_duration_days": 1.6339150364584565,
            "current_probability": 6.447750163848963e-07,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 26.018249256597667,
            "volatility": {
              "median": 0.05475830630266463,
              "low": 0.05475830630266463,
              "high": 0.05475830630266463
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.36267174404382047,
            "jump_rate": 0.2306073687290289,
            "risk_score": 0.8473651244491712,
            "metrics": {
              "rolling_vol_10d": 0.037997391732243,
              "downside_vol_10d": 0.021135700461831948,
              "drawdown_21d": 0.06691088109666311,
              "amihud_stress": 2.379602660624377,
              "spread_rel": 234.75390112022106,
              "spread_ticks": 1.1329972821090497,
              "log_notional": 13.203008777502832,
              "log_trade_count": 4.84135752303033
            }
          }
        ],
        "transitions": [
          [
            0.6295544323565401,
            0.00041403946282973146,
            0.37003152818063006
          ],
          [
            0.05951018441991595,
            0.7061406991695225,
            0.23434911641056166
          ],
          [
            0.2754893833852258,
            0.3365375443842377,
            0.3879730722305365
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.235,
          "quantity": 743100.0,
          "value": 174628.5
        },
        {
          "level": 2,
          "price": 0.23,
          "quantity": 475400.0,
          "value": 109342.0
        },
        {
          "level": 3,
          "price": 0.225,
          "quantity": 706500.0,
          "value": 158962.5
        },
        {
          "level": 4,
          "price": 0.22,
          "quantity": 245600.0,
          "value": 54032.0
        },
        {
          "level": 5,
          "price": 0.215,
          "quantity": 450000.0,
          "value": 96750.0
        },
        {
          "level": 6,
          "price": 0.21,
          "quantity": 5000.0,
          "value": 1050.0
        },
        {
          "level": 7,
          "price": 0.2,
          "quantity": 75000.0,
          "value": 15000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.24,
          "quantity": 365000.0,
          "value": 87600.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 244500.0,
          "value": 59902.5
        },
        {
          "level": 3,
          "price": 0.25,
          "quantity": 380000.0,
          "value": 95000.0
        },
        {
          "level": 4,
          "price": 0.255,
          "quantity": 224000.0,
          "value": 57120.0
        },
        {
          "level": 5,
          "price": 0.26,
          "quantity": 893300.0,
          "value": 232258.0
        },
        {
          "level": 6,
          "price": 0.265,
          "quantity": 960500.0,
          "value": 254532.5
        },
        {
          "level": 7,
          "price": 0.27,
          "quantity": 535700.0,
          "value": 144639.0
        },
        {
          "level": 8,
          "price": 0.275,
          "quantity": 180000.0,
          "value": 49500.00000000001
        },
        {
          "level": 9,
          "price": 0.28,
          "quantity": 191800.0,
          "value": 53704.00000000001
        },
        {
          "level": 10,
          "price": 0.285,
          "quantity": 314000.0,
          "value": 89489.99999999999
        },
        {
          "level": 11,
          "price": 0.29,
          "quantity": 116000.0,
          "value": 33640.0
        },
        {
          "level": 12,
          "price": 0.295,
          "quantity": 107200.0,
          "value": 31624.0
        },
        {
          "level": 13,
          "price": 0.3,
          "quantity": 3485000.0,
          "value": 1045500.0
        },
        {
          "level": 14,
          "price": 0.305,
          "quantity": 190000.0,
          "value": 57950.0
        },
        {
          "level": 15,
          "price": 0.31,
          "quantity": 50000.0,
          "value": 15500.0
        },
        {
          "level": 16,
          "price": 0.33,
          "quantity": 8000.0,
          "value": 2640.0
        },
        {
          "level": 17,
          "price": 0.335,
          "quantity": 12000.0,
          "value": 4020.0000000000005
        },
        {
          "level": 18,
          "price": 0.35,
          "quantity": 86000.0,
          "value": 30099.999999999996
        },
        {
          "level": 19,
          "price": 0.355,
          "quantity": 10000.0,
          "value": 3550.0
        },
        {
          "level": 20,
          "price": 0.385,
          "quantity": 1000.0,
          "value": 385.0
        },
        {
          "level": 21,
          "price": 0.39,
          "quantity": 10000.0,
          "value": 3900.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-22 08:59:58.690200000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2375,
        "spread_pct": 0.02105263157894739,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 609765.0,
        "ask_depth_notional_displayed": 2352555.0,
        "bid_depth_notional_top10": 609765.0,
        "ask_depth_notional_top10": 2352555.0,
        "bid_ask_depth_ratio": 0.2592
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 121,
        "history_limited": true,
        "trade_days_used": 83,
        "n_trades_used": 12540,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-05-22",
        "window_label": "Jan 22, 2026 to May 22, 2026",
        "window_short_label": "Jan 22-May 22",
        "trade_days_label": "83 trading days",
        "trade_count_label": "12,540 trades",
        "window_detail_label": "83 trading days • 12,540 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to May 22, 2026 (83 trading days • 12,540 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 11000.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.8,
            "pct_of_adv": 5.03
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14510.02,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.38,
            "pct_of_adv": 6.63
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 165637.63,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 27.16,
            "pct_of_adv": 75.72
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
            "order_id": "8146327279925059584",
            "timestamp": "2026-05-21 22:59:01.181600000",
            "local_timestamp": "2026-05-22 06:59:01",
            "posted_price": 0.3,
            "size_shares": 3284000.0,
            "notional": 985200.0,
            "impact_pct": -0.049311,
            "filled_pct": 61.9,
            "levels_consumed": 7,
            "pct_of_bid_depth": 161.57,
            "price_vs_mid_pct": 26.316,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8151077170159746048",
            "timestamp": "2026-05-21 22:59:01.181600000",
            "local_timestamp": "2026-05-22 06:59:01",
            "posted_price": 0.26,
            "size_shares": 384500.0,
            "notional": 99970.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 16.39,
            "price_vs_mid_pct": 9.474,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8149098049227101184",
            "timestamp": "2026-05-21 22:59:01.181600000",
            "local_timestamp": "2026-05-22 06:59:01",
            "posted_price": 0.27,
            "size_shares": 250000.0,
            "notional": 67500.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 11.07,
            "price_vs_mid_pct": 13.684,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-22",
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
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 562666.5,
            "ask_depth_notional": 2389014.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 552112.0,
            "ask_depth_notional": 2389014.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 561726.5,
            "ask_depth_notional": 2384514.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 576854.5,
            "ask_depth_notional": 2384264.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 616237.5,
            "ask_depth_notional": 2332464.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 628140.5,
            "ask_depth_notional": 2259722.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 654108.5,
            "ask_depth_notional": 2295971.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 607190.0,
            "ask_depth_notional": 2326664.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 607415.0,
            "ask_depth_notional": 2342885.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 607415.0,
            "ask_depth_notional": 2341985.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 607415.0,
            "ask_depth_notional": 2357835.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 607415.0,
            "ask_depth_notional": 2365179.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 609765.0,
            "ask_depth_notional": 2352555.0,
            "mid_price": 0.2375
          }
        ],
        "summary": {
          "median_spread_pct": 0.02105263157894739,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 607415.0,
          "median_ask_depth_notional": 2352555.0,
          "tightest_bucket": "11:30",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "13:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 22.9,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 151.3
        },
        {
          "ticker": "J03",
          "pct": 436.8
        },
        {
          "ticker": "42F",
          "pct": 919.2
        },
        {
          "ticker": "NXR",
          "pct": 15100.0
        },
        {
          "ticker": "U77",
          "pct": 25136.0
        },
        {
          "ticker": "LVR",
          "pct": 49800.8
        },
        {
          "ticker": "532",
          "pct": 66666666.7
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "3m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 17,
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
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.7058823529411765,
            "mixed_pct": 0.29411764705882354,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.26293326435592346,
            "mixed_qty_pct": 0.7370667356440765,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.26349727543244744,
            "mixed_notional_pct": 0.7365027245675525,
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
              "retail": 12,
              "mixed": 5,
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
            "avg": 10892.176470588236,
            "median": 4800.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.7058823529411765,
              "mixed_pct": 0.29411764705882354,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.26293326435592346,
              "mixed_qty_pct": 0.7370667356440765,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.26349727543244744,
              "mixed_notional_pct": 0.7365027245675525,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10892.176470588236,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 327.55,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3337.5,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 300.0,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9968152866242038,
              "mixed_pct": 0.0031847133757961785,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9132023755139334,
              "mixed_qty_pct": 0.08679762448606669,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9134877836874632,
              "mixed_notional_pct": 0.08651221631253676,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 646.9761146496816,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9444444444444444,
              "mixed_pct": 0.05555555555555555,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7689485566844058,
              "mixed_qty_pct": 0.23105144331559427,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7687557732518845,
              "mixed_notional_pct": 0.23124422674811543,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3855.1833333333334,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        },
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 101,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-05-18",
          "last_trade_date": "2026-05-22",
          "period_days": 4,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.7326732673267327,
            "mixed_pct": 0.2376237623762376,
            "instit_pct": 0.0297029702970297,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1885216067765204,
            "mixed_qty_pct": 0.4881874131427437,
            "instit_qty_pct": 0.32329098008073587,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1889069827314151,
            "mixed_notional_pct": 0.49024558873195767,
            "instit_notional_pct": 0.32084742853662723,
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
              "retail": 74,
              "mixed": 24,
              "institutional": 3,
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
            "avg": 14306.29702970297,
            "median": 4800.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.7326732673267327,
              "mixed_pct": 0.2376237623762376,
              "instit_pct": 0.0297029702970297,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1885216067765204,
              "mixed_qty_pct": 0.4881874131427437,
              "instit_qty_pct": 0.32329098008073587,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.1889069827314151,
              "mixed_notional_pct": 0.49024558873195767,
              "instit_notional_pct": 0.32084742853662723,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 14306.29702970297,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6723.333333333333,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 934.3666666666667,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3177.1428571428573,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 300.0,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 296.5400000000001,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9864768683274021,
              "mixed_pct": 0.013523131672597865,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7227781047675103,
              "mixed_qty_pct": 0.2772218952324897,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7223936981075888,
              "mixed_notional_pct": 0.2776063018924112,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1254.7775800711743,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8786885245901639,
              "mixed_pct": 0.12131147540983607,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5182108510966185,
              "mixed_qty_pct": 0.4817891489033815,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5176981192294974,
              "mixed_notional_pct": 0.4823018807705026,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5518.526557377049,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7857142857142857,
              "mixed_pct": 0.21428571428571427,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.39303297661326564,
              "mixed_qty_pct": 0.6069670233867344,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3916843679322342,
              "mixed_notional_pct": 0.6083156320677658,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7037.262500000002,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        },
        "30d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 707,
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
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.7991513437057991,
            "mixed_pct": 0.17963224893917965,
            "instit_pct": 0.021216407355021217,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.28140148397575315,
            "mixed_qty_pct": 0.5018228930329498,
            "instit_qty_pct": 0.21677562299129705,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.28108101052710993,
            "mixed_notional_pct": 0.5023038259955158,
            "instit_notional_pct": 0.21661516347737428,
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
              "retail": 565,
              "mixed": 127,
              "institutional": 15,
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
            "avg": 11324.099717114568,
            "median": 4800.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.7991513437057991,
              "mixed_pct": 0.17963224893917965,
              "instit_pct": 0.021216407355021217,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.28140148397575315,
              "mixed_qty_pct": 0.5018228930329498,
              "instit_qty_pct": 0.21677562299129705,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.28108101052710993,
              "mixed_notional_pct": 0.5023038259955158,
              "instit_notional_pct": 0.21661516347737428,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11324.099717114568,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 354.2720647773279,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 308.39285714285717,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.987012987012987,
              "mixed_pct": 0.012987012987012988,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8602348281227896,
              "mixed_qty_pct": 0.13976517187721035,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8610185612297796,
              "mixed_notional_pct": 0.13898143877022034,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1818.761038961039,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9821428571428571,
              "mixed_pct": 0.017857142857142856,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8512347515620351,
              "mixed_qty_pct": 0.1487652484379649,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8480762657146113,
              "mixed_notional_pct": 0.15192373428538875,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4701.607142857143,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9818181818181818,
              "mixed_pct": 0.01818181818181818,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8718770019218449,
              "mixed_qty_pct": 0.12812299807815503,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8698630637744098,
              "mixed_notional_pct": 0.1301369362255902,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2486.890909090909,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9415259537210757,
              "mixed_pct": 0.05456535334584115,
              "instit_pct": 0.003908692933083177,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3869840416432464,
              "mixed_qty_pct": 0.48677142647669785,
              "instit_qty_pct": 0.12624453188005572,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3867400282298397,
              "mixed_notional_pct": 0.48687508614265207,
              "instit_notional_pct": 0.12638488562750824,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3180.1959818636647,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9279171644763042,
              "mixed_pct": 0.07208283552369574,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5383339029084303,
              "mixed_qty_pct": 0.4616660970915697,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5354967637355957,
              "mixed_notional_pct": 0.4645032362644041,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3464.9150139386697,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8719346049046321,
              "mixed_pct": 0.1226158038147139,
              "instit_pct": 0.005449591280653951,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.46973625193467894,
              "mixed_qty_pct": 0.4559221706307843,
              "instit_qty_pct": 0.07434157743453679,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4706724065249933,
              "mixed_notional_pct": 0.45194644183021976,
              "instit_notional_pct": 0.07738115164478693,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6072.04523160763,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        },
        "3m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 2809,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-23",
          "last_trade_date": "2026-05-22",
          "period_days": 88,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.867568529725881,
            "mixed_pct": 0.11925952296190816,
            "instit_pct": 0.013171947312210752,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3406403352449581,
            "mixed_qty_pct": 0.4688365532227662,
            "instit_qty_pct": 0.19052311153227566,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3366354078598616,
            "mixed_notional_pct": 0.47011996895925295,
            "instit_notional_pct": 0.19324462318088545,
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
              "retail": 2437,
              "mixed": 335,
              "institutional": 37,
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
            "avg": 7577.862050551797,
            "median": 2208.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.867568529725881,
              "mixed_pct": 0.11925952296190816,
              "instit_pct": 0.013171947312210752,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3406403352449581,
              "mixed_qty_pct": 0.4688365532227662,
              "instit_qty_pct": 0.19052311153227566,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3366354078598616,
              "mixed_notional_pct": 0.47011996895925295,
              "instit_notional_pct": 0.19324462318088545,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7577.862050551797,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 421.4873287671233,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 416.74090909090916,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9927927927927928,
              "mixed_pct": 0.007207207207207207,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8814197027654104,
              "mixed_qty_pct": 0.11858029723458957,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.881027791373682,
              "mixed_notional_pct": 0.11897220862631797,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1160.701081081081,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9813084112149533,
              "mixed_pct": 0.009345794392523364,
              "instit_pct": 0.009345794392523364,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.39307390217779364,
              "mixed_qty_pct": 0.03570153516601214,
              "instit_qty_pct": 0.5712245626561943,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.39982830531265906,
              "mixed_notional_pct": 0.03798555029666715,
              "instit_notional_pct": 0.5621861443906738,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9841.420560747663,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9319569642337889,
              "mixed_pct": 0.06804303576621111,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.60084577471455,
              "mixed_qty_pct": 0.39915422528544997,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5847595021471125,
              "mixed_notional_pct": 0.4152404978528875,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3637.437947077638,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9287694974003466,
              "mixed_pct": 0.06470248411322935,
              "instit_pct": 0.006528018486424032,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3736190913677679,
              "mixed_qty_pct": 0.4568207661548425,
              "instit_qty_pct": 0.16956014247738962,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3734836500495641,
              "mixed_notional_pct": 0.45627103308012457,
              "instit_notional_pct": 0.17024531687031133,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3932.4350664355866,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9285714285714286,
              "mixed_pct": 0.07142857142857142,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5733173076923077,
              "mixed_qty_pct": 0.4266826923076923,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5772428601352105,
              "mixed_notional_pct": 0.4227571398647894,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4077.8541666666665,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8912181303116147,
              "mixed_pct": 0.10254957507082153,
              "instit_pct": 0.006232294617563739,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4582977655169581,
              "mixed_qty_pct": 0.4176214244042374,
              "instit_qty_pct": 0.1240808100788045,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.45267297285265984,
              "mixed_notional_pct": 0.4219935538955802,
              "instit_notional_pct": 0.12533347325175995,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5656.06776203966,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        }
      },
      "valid": true,
      "currency": "SGD",
      "n_trades": 2809,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-02-23",
      "last_trade_date": "2026-05-22",
      "period_days": 88,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 13500.0,
        "instit_min": 67500.0
      },
      "composition": {
        "retail_pct": 0.867568529725881,
        "mixed_pct": 0.11925952296190816,
        "instit_pct": 0.013171947312210752,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.3366354078598616,
        "mixed_notional_pct": 0.47011996895925295,
        "instit_notional_pct": 0.19324462318088545,
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
        "avg": 7577.862050551797,
        "median": 2208.0
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
            "n_trades": 541,
            "n_runs": 0,
            "retail_pct": 0.7911275415896488,
            "mixed_pct": 0.18299445471349354,
            "instit_pct": 0.025878003696857672,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 12171.666358595194,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2623607235694464,
            "mixed_qty_pct": 0.4846800697765851,
            "instit_qty_pct": 0.2529592066539684,
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
            "total_quantity": 26197900.0
          },
          {
            "month": "2026-04",
            "n_trades": 913,
            "n_runs": 0,
            "retail_pct": 0.8499452354874042,
            "mixed_pct": 0.13143483023001096,
            "instit_pct": 0.018619934282584884,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 8334.989594742607,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27906226883902663,
            "mixed_qty_pct": 0.48092862697494454,
            "instit_qty_pct": 0.24000910418602886,
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
            "total_quantity": 31633800.0
          },
          {
            "month": "2026-03",
            "n_trades": 1026,
            "n_runs": 0,
            "retail_pct": 0.928849902534113,
            "mixed_pct": 0.06920077972709551,
            "instit_pct": 0.001949317738791423,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 4442.360623781677,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5525152116368385,
            "mixed_qty_pct": 0.4064222944197647,
            "instit_qty_pct": 0.0410624939433969,
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
            "total_quantity": 19606700.0
          },
          {
            "month": "2026-02",
            "n_trades": 2084,
            "n_runs": 0,
            "retail_pct": 0.9021113243761996,
            "mixed_pct": 0.09213051823416507,
            "instit_pct": 0.005758157389635317,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 5392.230326295586,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4015510527645414,
            "mixed_qty_pct": 0.4952392567491049,
            "instit_qty_pct": 0.1032096904863537,
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
            "total_quantity": 45917200.0
          },
          {
            "month": "2026-01",
            "n_trades": 2477,
            "n_runs": 0,
            "retail_pct": 0.8389180460234155,
            "mixed_pct": 0.14937424303593055,
            "instit_pct": 0.011707710940654016,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 7226.47779572063,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27654494081056014,
            "mixed_qty_pct": 0.5780789376207284,
            "instit_qty_pct": 0.1453761215687115,
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
            "total_quantity": 65332600.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.867568529725881,
          "mixed_pct": 0.11925952296190816,
          "instit_pct": 0.013171947312210752,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3406403352449581,
          "mixed_qty_pct": 0.4688365532227662,
          "instit_qty_pct": 0.19052311153227566,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3366354078598616,
          "mixed_notional_pct": 0.47011996895925295,
          "instit_notional_pct": 0.19324462318088545,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 7577.862050551797,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "532",
          "currency": "SGD",
          "is_target": false,
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
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 421.4873287671233,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "KUX",
          "currency": "SGD",
          "is_target": false,
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
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 416.74090909090916,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9927927927927928,
          "mixed_pct": 0.007207207207207207,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8814197027654104,
          "mixed_qty_pct": 0.11858029723458957,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.881027791373682,
          "mixed_notional_pct": 0.11897220862631797,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1160.701081081081,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9813084112149533,
          "mixed_pct": 0.009345794392523364,
          "instit_pct": 0.009345794392523364,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.39307390217779364,
          "mixed_qty_pct": 0.03570153516601214,
          "instit_qty_pct": 0.5712245626561943,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.39982830531265906,
          "mixed_notional_pct": 0.03798555029666715,
          "instit_notional_pct": 0.5621861443906738,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 9841.420560747663,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "J03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9319569642337889,
          "mixed_pct": 0.06804303576621111,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.60084577471455,
          "mixed_qty_pct": 0.39915422528544997,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5847595021471125,
          "mixed_notional_pct": 0.4152404978528875,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3637.437947077638,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9287694974003466,
          "mixed_pct": 0.06470248411322935,
          "instit_pct": 0.006528018486424032,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3736190913677679,
          "mixed_qty_pct": 0.4568207661548425,
          "instit_qty_pct": 0.16956014247738962,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3734836500495641,
          "mixed_notional_pct": 0.45627103308012457,
          "instit_notional_pct": 0.17024531687031133,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3932.4350664355866,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9285714285714286,
          "mixed_pct": 0.07142857142857142,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5733173076923077,
          "mixed_qty_pct": 0.4266826923076923,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5772428601352105,
          "mixed_notional_pct": 0.4227571398647894,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4077.8541666666665,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "42F",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8912181303116147,
          "mixed_pct": 0.10254957507082153,
          "instit_pct": 0.006232294617563739,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.4582977655169581,
          "mixed_qty_pct": 0.4176214244042374,
          "instit_qty_pct": 0.1240808100788045,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.45267297285265984,
          "mixed_notional_pct": 0.4219935538955802,
          "instit_notional_pct": 0.12533347325175995,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5656.06776203966,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.7058823529411765,
            "mixed_pct": 0.29411764705882354,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.26293326435592346,
            "mixed_qty_pct": 0.7370667356440765,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.26349727543244744,
            "mixed_notional_pct": 0.7365027245675525,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10892.176470588236,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 327.55,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3337.5,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 300.0,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9968152866242038,
            "mixed_pct": 0.0031847133757961785,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9132023755139334,
            "mixed_qty_pct": 0.08679762448606669,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9134877836874632,
            "mixed_notional_pct": 0.08651221631253676,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 646.9761146496816,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9444444444444444,
            "mixed_pct": 0.05555555555555555,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7689485566844058,
            "mixed_qty_pct": 0.23105144331559427,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7687557732518845,
            "mixed_notional_pct": 0.23124422674811543,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3855.1833333333334,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.7326732673267327,
            "mixed_pct": 0.2376237623762376,
            "instit_pct": 0.0297029702970297,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1885216067765204,
            "mixed_qty_pct": 0.4881874131427437,
            "instit_qty_pct": 0.32329098008073587,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1889069827314151,
            "mixed_notional_pct": 0.49024558873195767,
            "instit_notional_pct": 0.32084742853662723,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 14306.29702970297,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6723.333333333333,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 934.3666666666667,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3177.1428571428573,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 300.0,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 296.5400000000001,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9864768683274021,
            "mixed_pct": 0.013523131672597865,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7227781047675103,
            "mixed_qty_pct": 0.2772218952324897,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7223936981075888,
            "mixed_notional_pct": 0.2776063018924112,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1254.7775800711743,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8786885245901639,
            "mixed_pct": 0.12131147540983607,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5182108510966185,
            "mixed_qty_pct": 0.4817891489033815,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5176981192294974,
            "mixed_notional_pct": 0.4823018807705026,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5518.526557377049,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7857142857142857,
            "mixed_pct": 0.21428571428571427,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.39303297661326564,
            "mixed_qty_pct": 0.6069670233867344,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3916843679322342,
            "mixed_notional_pct": 0.6083156320677658,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7037.262500000002,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.7991513437057991,
            "mixed_pct": 0.17963224893917965,
            "instit_pct": 0.021216407355021217,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.28140148397575315,
            "mixed_qty_pct": 0.5018228930329498,
            "instit_qty_pct": 0.21677562299129705,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.28108101052710993,
            "mixed_notional_pct": 0.5023038259955158,
            "instit_notional_pct": 0.21661516347737428,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11324.099717114568,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 354.2720647773279,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 308.39285714285717,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.987012987012987,
            "mixed_pct": 0.012987012987012988,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8602348281227896,
            "mixed_qty_pct": 0.13976517187721035,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8610185612297796,
            "mixed_notional_pct": 0.13898143877022034,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1818.761038961039,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9821428571428571,
            "mixed_pct": 0.017857142857142856,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8512347515620351,
            "mixed_qty_pct": 0.1487652484379649,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8480762657146113,
            "mixed_notional_pct": 0.15192373428538875,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4701.607142857143,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9818181818181818,
            "mixed_pct": 0.01818181818181818,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8718770019218449,
            "mixed_qty_pct": 0.12812299807815503,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8698630637744098,
            "mixed_notional_pct": 0.1301369362255902,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2486.890909090909,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9415259537210757,
            "mixed_pct": 0.05456535334584115,
            "instit_pct": 0.003908692933083177,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3869840416432464,
            "mixed_qty_pct": 0.48677142647669785,
            "instit_qty_pct": 0.12624453188005572,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3867400282298397,
            "mixed_notional_pct": 0.48687508614265207,
            "instit_notional_pct": 0.12638488562750824,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3180.1959818636647,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9279171644763042,
            "mixed_pct": 0.07208283552369574,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5383339029084303,
            "mixed_qty_pct": 0.4616660970915697,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5354967637355957,
            "mixed_notional_pct": 0.4645032362644041,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3464.9150139386697,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8719346049046321,
            "mixed_pct": 0.1226158038147139,
            "instit_pct": 0.005449591280653951,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.46973625193467894,
            "mixed_qty_pct": 0.4559221706307843,
            "instit_qty_pct": 0.07434157743453679,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4706724065249933,
            "mixed_notional_pct": 0.45194644183021976,
            "instit_notional_pct": 0.07738115164478693,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6072.04523160763,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.867568529725881,
            "mixed_pct": 0.11925952296190816,
            "instit_pct": 0.013171947312210752,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3406403352449581,
            "mixed_qty_pct": 0.4688365532227662,
            "instit_qty_pct": 0.19052311153227566,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3366354078598616,
            "mixed_notional_pct": 0.47011996895925295,
            "instit_notional_pct": 0.19324462318088545,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7577.862050551797,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 421.4873287671233,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 416.74090909090916,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9927927927927928,
            "mixed_pct": 0.007207207207207207,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8814197027654104,
            "mixed_qty_pct": 0.11858029723458957,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.881027791373682,
            "mixed_notional_pct": 0.11897220862631797,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1160.701081081081,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9813084112149533,
            "mixed_pct": 0.009345794392523364,
            "instit_pct": 0.009345794392523364,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.39307390217779364,
            "mixed_qty_pct": 0.03570153516601214,
            "instit_qty_pct": 0.5712245626561943,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.39982830531265906,
            "mixed_notional_pct": 0.03798555029666715,
            "instit_notional_pct": 0.5621861443906738,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9841.420560747663,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9319569642337889,
            "mixed_pct": 0.06804303576621111,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.60084577471455,
            "mixed_qty_pct": 0.39915422528544997,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5847595021471125,
            "mixed_notional_pct": 0.4152404978528875,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3637.437947077638,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9287694974003466,
            "mixed_pct": 0.06470248411322935,
            "instit_pct": 0.006528018486424032,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3736190913677679,
            "mixed_qty_pct": 0.4568207661548425,
            "instit_qty_pct": 0.16956014247738962,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3734836500495641,
            "mixed_notional_pct": 0.45627103308012457,
            "instit_notional_pct": 0.17024531687031133,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3932.4350664355866,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9285714285714286,
            "mixed_pct": 0.07142857142857142,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5733173076923077,
            "mixed_qty_pct": 0.4266826923076923,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5772428601352105,
            "mixed_notional_pct": 0.4227571398647894,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4077.8541666666665,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8912181303116147,
            "mixed_pct": 0.10254957507082153,
            "instit_pct": 0.006232294617563739,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4582977655169581,
            "mixed_qty_pct": 0.4176214244042374,
            "instit_qty_pct": 0.1240808100788045,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.45267297285265984,
            "mixed_notional_pct": 0.4219935538955802,
            "instit_notional_pct": 0.12533347325175995,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5656.06776203966,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ]
      },
      "peer_activity_enabled": true,
      "peer_activity_reason": null,
      "recent_trades": [],
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
      "total_trades": 7040,
      "price_moving_trades": 1381,
      "pct_price_moving": 19.616477272727273,
      "all_movers": {
        "count": 1381,
        "avg_size": 7216.06698044895,
        "median_size": 975.0,
        "retail_count": 1173,
        "mixed_count": 189,
        "institutional_count": 19,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 84.93845039826213,
        "mixed_pct": 13.685734974656047,
        "instit_pct": 1.3758146270818248,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 690,
        "avg_size": 5202.829710144928,
        "median_size": 72.75,
        "retail_count": 611,
        "mixed_count": 73,
        "institutional_count": 6,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.55072463768116,
        "mixed_pct": 10.579710144927535,
        "instit_pct": 0.8695652173913043,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 691,
        "avg_size": 9226.390738060782,
        "median_size": 2450.0,
        "retail_count": 562,
        "mixed_count": 116,
        "institutional_count": 13,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.33140376266282,
        "mixed_pct": 16.78726483357453,
        "instit_pct": 1.881331403762663,
        "unclear_pct": null
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
        "n_days_short_data": 66,
        "window_days": 63
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
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0,
            "max_short_ratio": 0.0,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.002332243703022513,
            "max_short_ratio": 0.07371154614462645,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": false,
        "correlation": null,
        "interpretation": "No clear relationship (correlation undefined)"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-05",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539
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
            "month": "2026-05",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205,
            "change_pct": 110.85800341128693
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": -38.527221284554955
          }
        ],
        "interpretation": "Short interest stable"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 783200,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-05-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 857800,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-05-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1845400,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-05-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2350800,
            "close": 0.235,
            "return": -0.04081632653061229
          },
          {
            "date": "2026-05-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 666400,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2026-05-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2861300,
            "close": 0.24,
            "return": -0.05882352941176472
          },
          {
            "date": "2026-05-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2302900,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-05-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2771200,
            "close": 0.26,
            "return": 0.0
          },
          {
            "date": "2026-05-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1212000,
            "close": 0.26,
            "return": 0.019607843137254832
          },
          {
            "date": "2026-05-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 925100,
            "close": 0.255,
            "return": 0.0
          },
          {
            "date": "2026-05-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8857000,
            "close": 0.255,
            "return": 0.020000000000000018
          },
          {
            "date": "2026-05-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1731600,
            "close": 0.25,
            "return": 0.020408163265306145
          },
          {
            "date": "2026-05-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 439300,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2026-05-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 570000,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-05-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 674700,
            "close": 0.245,
            "return": 0.042553191489361764
          },
          {
            "date": "2026-04-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 757800,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-04-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 460300,
            "close": 0.24,
            "return": 0.0
          },
          {
            "date": "2026-04-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 417500,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1888200,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 444200,
            "close": 0.25,
            "return": -0.019607843137254943
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1814600,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5476800,
            "close": 0.26,
            "return": 0.019607843137254832
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 7842700,
            "close": 0.255,
            "return": 0.08510638297872353
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 824200,
            "close": 0.235,
            "return": 0.021739130434782483
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 818600,
            "close": 0.23,
            "return": -0.061224489795918324
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9893900,
            "close": 0.245,
            "return": 0.06521739130434767
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 550400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 512100,
            "close": 0.23,
            "return": 0.045454545454545414
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1064200,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 777400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1029700,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1591000,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 730200,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1221000,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 466000,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 632200,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 578100,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 463200,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 476800,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 458600,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.03807390817469205,
            "short_vol": 17000,
            "total_vol": 446500,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.02231404958677686,
            "short_vol": 13500,
            "total_vol": 605000,
            "close": 0.235,
            "return": 0.04444444444444429
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 788800,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 586700,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 581900,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0020242914979757085,
            "short_vol": 1700,
            "total_vol": 839800,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.07371154614462645,
            "short_vol": 36900,
            "total_vol": 500600,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 921800,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.007331217857533647,
            "short_vol": 6700,
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
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.0,
          "max_short_ratio": 0.0,
          "is_target": true
        },
        {
          "ticker": "42F",
          "avg_short_ratio": 2.9105003043885707e-05,
          "max_short_ratio": 0.0071947622131088565,
          "is_target": false
        },
        {
          "ticker": "532",
          "avg_short_ratio": 7.741077330155511e-05,
          "max_short_ratio": 0.0287968076681785,
          "is_target": false
        },
        {
          "ticker": "J03",
          "avg_short_ratio": 0.0005149740742103129,
          "max_short_ratio": 0.04373162853885592,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.00473133507639712,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.006037296928488712,
          "max_short_ratio": 0.28210566910914,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1M",
        "3M",
        "1W"
      ],
      "session": {
        "1D": {
          "opening": 0.11852405558135934,
          "continuous": 0.8676332201192135,
          "closing": 0.011000275777984209,
          "auctions": 0.1323667798807865,
          "other": 0.0
        },
        "1W": {
          "opening": 0.057187645045228865,
          "continuous": 0.9308363414531386,
          "closing": 0.0110672229903804,
          "auctions": 0.06916365854686138,
          "other": 0.0
        },
        "1M": {
          "opening": 0.039727713386471235,
          "continuous": 0.9331442374578679,
          "closing": 0.018137218929238474,
          "auctions": 0.06685576254213213,
          "other": 0.0
        },
        "3M": {
          "opening": 0.026030238589519843,
          "continuous": 0.9566405430452544,
          "closing": 0.011586668301050722,
          "auctions": 0.043359456954745655,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.33044060526929925,
        "1W": 0.34954071436873263,
        "1M": 0.32599768997035916,
        "3M": 0.30590028091856936
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0196
        },
        {
          "time": "09:00",
          "avg_share": 0.1368
        },
        {
          "time": "09:30",
          "avg_share": 0.1098
        },
        {
          "time": "10:00",
          "avg_share": 0.0704
        },
        {
          "time": "10:30",
          "avg_share": 0.0641
        },
        {
          "time": "11:00",
          "avg_share": 0.0465
        },
        {
          "time": "11:30",
          "avg_share": 0.0633
        },
        {
          "time": "12:00",
          "avg_share": 0.0024
        },
        {
          "time": "12:30",
          "avg_share": 0.0026
        },
        {
          "time": "13:00",
          "avg_share": 0.0823
        },
        {
          "time": "13:30",
          "avg_share": 0.0574
        },
        {
          "time": "14:00",
          "avg_share": 0.0485
        },
        {
          "time": "14:30",
          "avg_share": 0.0607
        },
        {
          "time": "15:00",
          "avg_share": 0.0571
        },
        {
          "time": "15:30",
          "avg_share": 0.0481
        },
        {
          "time": "16:00",
          "avg_share": 0.0385
        },
        {
          "time": "16:30",
          "avg_share": 0.0603
        },
        {
          "time": "17:00",
          "avg_share": 0.0317
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.300243799668001,
          "hhi": 0.27399896843022215,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 15.934272660959033,
          "hhi": 0.7438413332008367,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 11.73863780225345,
          "hhi": 0.8238783218607778,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 4.0469833868807665,
          "hhi": 0.5641254205509523,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 4.6584549460219,
          "hhi": 0.5124721950272797,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 1.736361942094805,
          "hhi": 0.7707294273411096,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 9.948942540032803,
          "hhi": 0.4691962980602845,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 3.210416925217839,
          "hhi": 0.5008706755951673,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.1945274367076975,
          "hhi": 0.1862579549683838,
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
