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
      "marketCap": 31571850.0,
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
      "marketCap": 37968515.550000004,
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
      "marketCap": 245100000.0,
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
    "asof_date": "2026-05-20",
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
          "score_pca": 73.38129496402878,
          "score_pca_percentile": 73.38129496402878,
          "rank_pca": 149,
          "total": 556,
          "adv_notional_sgd": 442896.0,
          "adv_volume_shares": 1845400.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0032361741347528426,
          "votes": 56.0,
          "trades": 56.0,
          "spread_pct": 0.023309053069719015,
          "spread_ticks": 1.0980392156862746,
          "amihud": 4.803971077788188e-08,
          "volatility": 0.20071506748399928
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5088937460015243,
          "loadings": {
            "log_adv": 0.5588114140248785,
            "log_trades": 0.5165602126296036,
            "log_turnover": 0.5167858944359326,
            "neg_spread": 0.3525529550071954,
            "neg_amihud": 0.04955498687965167,
            "neg_vol": -0.16455517854713603
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
          "peer_median_adv": 0.0,
          "peer_median_score_pca": 24.235611510791365,
          "peer_median_trades": 0.0,
          "peer_median_volatility": 0.0,
          "peer_median_spread_pct": 0.042863657090743246,
          "peer_median_spread_ticks": 2.34119804400978,
          "peer_median_amihud": 1.6202954317066548e-07,
          "peer_median_turnover_ratio": 0.0,
          "target_vs_peer": {
            "score_pca_delta": 49.15,
            "adv_delta_pct": null,
            "trades_delta_pct": null,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": 45.62,
            "spread_ticks_delta_pct": -53.1,
            "amihud_delta_pct": 70.35,
            "turnover_ratio_delta_pct": null
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.38129496402878,
            "rank_pca": 149,
            "adv": 442896.0,
            "trades": 56.0,
            "volatility": 0.20071506748399928,
            "spread_pct": 0.023309053069719015,
            "spread_ticks": 1.0980392156862746,
            "amihud": 4.803971077788188e-08,
            "turnover_ratio": 0.0032361741347528426,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 4.676258992805756,
            "rank_pca": 530,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4,
            "spread_ticks": 15.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 1.70863309352518,
            "rank_pca": 546,
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
            "ticker": "U77",
            "score_pca": 26.258992805755394,
            "rank_pca": 411,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.017320427916454422,
            "spread_ticks": 3.4,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 84.89208633093526,
            "rank_pca": 85,
            "adv": 685746.0,
            "trades": 183.0,
            "volatility": 1.0044664411209465,
            "spread_pct": 0.03712918660287083,
            "spread_ticks": 1.0505415162454874,
            "amihud": 1.6202954317066548e-07,
            "turnover_ratio": 0.03908380136593835,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 19.244604316546763,
            "rank_pca": 450,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.0702402957486137,
            "spread_ticks": 5.428571428571429,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 60.61151079136691,
            "rank_pca": 220,
            "adv": 37767.5,
            "trades": 15.0,
            "volatility": 0.3739151228838485,
            "spread_pct": 0.0392156862745097,
            "spread_ticks": 1.0,
            "amihud": 1.0183766058526066e-06,
            "turnover_ratio": 0.001842216267995189,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 22.21223021582734,
            "rank_pca": 433,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.04651162790697679,
            "spread_ticks": 8.11111111111111,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 81.65467625899281,
            "rank_pca": 103,
            "adv": 383230.0,
            "trades": 443.0,
            "volatility": 0.2017771310469963,
            "spread_pct": 0.006777996388083901,
            "spread_ticks": 1.28239608801956,
            "amihud": 1.3806344208452747e-08,
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
              "mean": 0.2487307817329193,
              "median": 0.12796988870012244,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8448926206552636,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3972750.683976146,
              "median": 14494.0,
              "min": 0.0,
              "max": 479623460.0,
              "p5": 0.0,
              "p95": 15446558.25,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10299427728271789,
              "median": 0.030769230769230795,
              "min": 0.0002900530277874263,
              "max": 1.7037037037037037,
              "p5": 0.003382858408670563,
              "p95": 0.4666307554187505,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00801938073825671,
              "median": 0.0002735576313625659,
              "min": 0.0,
              "max": 2.9365236306110343,
              "p5": 0.0,
              "p95": 0.01381873054151049,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.622565613489625e-05,
              "median": 1.7281263871454603e-08,
              "min": 0.0,
              "max": 0.008514261387824618,
              "p5": 0.0,
              "p95": 5.1046698872785786e-05,
              "count": 407
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 568.091726618705,
              "median": 9.0,
              "min": 0.0,
              "max": 16382.0,
              "p5": 0.0,
              "p95": 3770.5,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.06844191786363957,
              "median": 0.0,
              "min": 0.0,
              "max": 0.2017771310469963,
              "p5": 0.0,
              "p95": 0.20140540879994734,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 925736.0,
              "median": 0.0,
              "min": 0.0,
              "max": 6579762.0,
              "p5": 0.0,
              "p95": 4431858.899999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15403129455086348,
              "median": 0.0349103404883479,
              "min": 0.0014242887103933456,
              "max": 0.6666666666666666,
              "p5": 0.00329808639758504,
              "p95": 0.5733333333333331,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001711355515723626,
              "median": 0.0,
              "min": 0.0,
              "max": 0.00597464994831054,
              "p5": 0.0,
              "p95": 0.005451529481355819,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.109047844939481e-08,
              "median": 1.3806344208452747e-08,
              "min": 1.4253803618498034e-09,
              "max": 4.803971077788188e-08,
              "p5": 2.663476746510098e-09,
              "p95": 4.461637412093896e-08,
              "count": 3
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 243.5,
              "median": 0.0,
              "min": 0.0,
              "max": 1449.0,
              "p5": 0.0,
              "p95": 1096.8999999999994,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 138342.9375,
              "median": 0.0,
              "min": 0.0,
              "max": 685746.0,
              "p5": 0.0,
              "p95": 579865.3999999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 80.125,
              "median": 0.0,
              "min": 0.0,
              "max": 443.0,
              "p5": 0.0,
              "p95": 351.9999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1975198368814739,
              "median": 0.0,
              "min": 0.0,
              "max": 1.0044664411209465,
              "p5": 0.0,
              "p95": 0.7837734797379619,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16048273593802198,
              "median": 0.042863657090743246,
              "min": 0.006777996388083901,
              "max": 0.6666666666666666,
              "p5": 0.010467847423013585,
              "p95": 0.5733333333333331,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.534077517993448,
              "median": 2.34119804400978,
              "min": 1.0,
              "max": 15.0,
              "p5": 1.0,
              "p95": 12.588888888888885,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00586258344778051,
              "median": 0.0,
              "min": 0.0,
              "max": 0.03908380136593835,
              "p5": 0.0,
              "p95": 0.0274955983697686,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.9807083107724164e-07,
              "median": 1.6202954317066548e-07,
              "min": 1.3806344208452747e-08,
              "max": 1.0183766058526066e-06,
              "p5": 2.862866410467402e-08,
              "p95": 9.327418995844124e-07,
              "count": 3
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.02127659574468077,
            "market": -0.00540769907871963,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.0266842948234004,
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
          "score_pca": 74.28057553956835,
          "score_pca_percentile": 74.28057553956835,
          "rank_pca": 144,
          "total": 556,
          "adv_notional_sgd": 552438.0,
          "adv_volume_shares": 2302900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.004038466140090127,
          "votes": 58.0,
          "trades": 58.0,
          "spread_pct": 0.021532416502946974,
          "spread_ticks": 1.0316455696202531,
          "amihud": 7.388399518246806e-08,
          "volatility": 0.5725991881619134
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.511392288315751,
          "loadings": {
            "log_adv": 0.5551640550582927,
            "log_trades": 0.509620754339011,
            "log_turnover": 0.5092554799699979,
            "neg_spread": 0.3904213651585246,
            "neg_amihud": 0.12667915670672186,
            "neg_vol": 0.06528371713165107
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
          "peer_median_adv": 19646.85,
          "peer_median_score_pca": 45.50359712230216,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.29978692221293385,
          "peer_median_spread_pct": 0.04199954564386052,
          "peer_median_spread_ticks": 1.938686313686314,
          "peer_median_amihud": 3.972172942451649e-07,
          "peer_median_turnover_ratio": 0.000795365536586728,
          "target_vs_peer": {
            "score_pca_delta": 28.78,
            "adv_delta_pct": 2711.8,
            "trades_delta_pct": 1350.0,
            "volatility_delta_pct": -91.0,
            "spread_pct_delta_pct": 48.73,
            "spread_ticks_delta_pct": -46.79,
            "amihud_delta_pct": 81.4,
            "turnover_ratio_delta_pct": 407.75
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 74.28057553956835,
            "rank_pca": 144,
            "adv": 552438.0,
            "trades": 58.0,
            "volatility": 0.5725991881619134,
            "spread_pct": 0.021532416502946974,
            "spread_ticks": 1.0316455696202531,
            "amihud": 7.388399518246806e-08,
            "turnover_ratio": 0.004038466140090127,
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
            "spread_ticks": 20.833333333333332,
            "amihud": 0.035985552115583075,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.697841726618705,
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
            "ticker": "U77",
            "score_pca": 40.647482014388494,
            "rank_pca": 331,
            "adv": 4156.7,
            "trades": 3.0,
            "volatility": 0.21694391641466892,
            "spread_pct": 0.013081395348837219,
            "spread_ticks": 2.5714285714285716,
            "amihud": 2.2645152903464397e-06,
            "turnover_ratio": 6.535037588545113e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 79.31654676258992,
            "rank_pca": 116,
            "adv": 615225.0,
            "trades": 183.0,
            "volatility": 1.3833164631120698,
            "spread_pct": 0.038544545833175556,
            "spread_ticks": 1.0505415162454874,
            "amihud": 1.4776559942962483e-07,
            "turnover_ratio": 0.035064486989875875,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 50.35971223021583,
            "rank_pca": 277,
            "adv": 35137.0,
            "trades": 5.0,
            "volatility": 0.2629903217040026,
            "spread_pct": 0.07108118219229327,
            "spread_ticks": 5.588235294117647,
            "amihud": 4.805572332917642e-07,
            "turnover_ratio": 0.001525380697288005,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 59.71223021582733,
            "rank_pca": 225,
            "adv": 37767.5,
            "trades": 15.0,
            "volatility": 0.6880264882512285,
            "spread_pct": 0.03773584905660381,
            "spread_ticks": 1.0,
            "amihud": 3.972172942451649e-07,
            "turnover_ratio": 0.001842216267995189,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 35.431654676258994,
            "rank_pca": 360,
            "adv": 2700.0,
            "trades": 2.0,
            "volatility": 0.07888106377466128,
            "spread_pct": 0.04545454545454549,
            "spread_ticks": 8.0,
            "amihud": 0.0,
            "turnover_ratio": 2.0739213740597384e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 81.65467625899281,
            "rank_pca": 103,
            "adv": 454639.5,
            "trades": 348.0,
            "volatility": 0.3365835227218651,
            "spread_pct": 0.007003548464555373,
            "spread_ticks": 1.305944055944056,
            "amihud": 2.0217642926099477e-08,
            "turnover_ratio": 0.007125443951740706,
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
              "mean": 0.5404895681866105,
              "median": 0.27304983614305905,
              "min": 0.0,
              "max": 9.72111104761179,
              "p5": 0.0,
              "p95": 1.8823180784335065,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3881010.1474679494,
              "median": 19202.7,
              "min": 0.0,
              "max": 422672600.0,
              "p5": 0.0,
              "p95": 17043850.625,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09851636409472445,
              "median": 0.03042876901798066,
              "min": 0.0002900530277874263,
              "max": 1.7037037037037037,
              "p5": 0.003296821844808268,
              "p95": 0.41500700671169194,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007827091576464492,
              "median": 0.0003225749625581253,
              "min": 0.0,
              "max": 2.7190033616768834,
              "p5": 0.0,
              "p95": 0.015569356810609078,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00022558766826276337,
              "median": 1.022968842169499e-07,
              "min": 0.0,
              "max": 0.035985552115583075,
              "p5": 0.0,
              "p95": 8.731962685503542e-05,
              "count": 513
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 598.7284172661871,
              "median": 9.0,
              "min": 0.0,
              "max": 14844.0,
              "p5": 0.0,
              "p95": 3745.75,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5984815105450287,
              "median": 0.23996711905933577,
              "min": 0.0,
              "max": 3.2062328764420243,
              "p5": 0.02760837232113145,
              "p95": 2.284461085543984,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1009835.1499999999,
              "median": 19646.85,
              "min": 0.0,
              "max": 7029609.999999999,
              "p5": 0.0,
              "p95": 4762599.799999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16294848002298906,
              "median": 0.03349348097874623,
              "min": 0.0012594350350367293,
              "max": 0.6666666666666666,
              "p5": 0.003269874735368255,
              "p95": 0.600461361014994,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0021945174742017126,
              "median": 0.000795365536586728,
              "min": 0.0,
              "max": 0.007125443951740706,
              "p5": 0.0,
              "p95": 0.006304804363835542,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00514119887287622,
              "median": 7.388399518246806e-08,
              "min": 0.0,
              "max": 0.035985552115583075,
              "p5": 2.4611661332967113e-10,
              "p95": 0.02519056583549523,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 313.625,
              "median": 4.0,
              "min": 0.0,
              "max": 2093.0,
              "p5": 0.0,
              "p95": 1482.249999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 143703.2125,
              "median": 19646.85,
              "min": 0.0,
              "max": 615225.0,
              "p5": 0.0,
              "p95": 559020.075,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 69.5,
              "median": 4.0,
              "min": 0.0,
              "max": 348.0,
              "p5": 0.0,
              "p95": 290.2499999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7716218315525651,
              "median": 0.29978692221293385,
              "min": 0.0,
              "max": 3.2062328764420243,
              "p5": 0.02760837232113145,
              "p95": 2.568212131776539,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16963454794196353,
              "median": 0.04199954564386052,
              "min": 0.007003548464555373,
              "max": 0.6666666666666666,
              "p5": 0.00913079487405402,
              "p95": 0.600461361014994,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.168685346383637,
              "median": 1.938686313686314,
              "min": 1.0,
              "max": 20.833333333333332,
              "p5": 1.0,
              "p95": 16.341666666666658,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.005141266055520474,
              "median": 3.972172942451649e-07,
              "min": 0.0,
              "max": 0.035985552115583075,
              "p5": 6.065292877829844e-09,
              "p95": 0.02519056583549523,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005705452187065728,
              "median": 0.000795365536586728,
              "min": 0.0,
              "max": 0.035064486989875875,
              "p5": 0.0,
              "p95": 0.02528582192652855,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.0769230769230772,
            "market": 0.008183557748697057,
            "sector": -0.014649320936856225,
            "peers": -0.007537688442211032,
            "vs_market": -0.08510663467177426,
            "vs_sector": -0.06227375598622098,
            "vs_peers": -0.06938538848086617
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 73.38129496402878,
          "score_pca_percentile": 73.38129496402878,
          "rank_pca": 149,
          "total": 556,
          "adv_notional_sgd": 432900.0,
          "adv_volume_shares": 1731600.0,
          "free_float_shares": null,
          "turnover_ratio": 0.003036609478561841,
          "votes": 56.0,
          "trades": 56.0,
          "spread_pct": 0.023309053069719015,
          "spread_ticks": 1.1176470588235294,
          "amihud": 4.803971077788188e-08,
          "volatility": 0.4998829595636956
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5253554068579189,
          "loadings": {
            "log_adv": 0.5429949356481152,
            "log_trades": 0.4956937932042196,
            "log_turnover": 0.49334394357764794,
            "neg_spread": 0.40749595342332673,
            "neg_amihud": 0.1432136220781386,
            "neg_vol": 0.17173474595853147
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
          "peer_median_adv": 5025.0,
          "peer_median_score_pca": 42.17625899280576,
          "peer_median_trades": 3.5,
          "peer_median_volatility": 0.46685877738371784,
          "peer_median_spread_pct": 0.04252548210326702,
          "peer_median_spread_ticks": 1.9107905982905982,
          "peer_median_amihud": 5.265908475187126e-07,
          "peer_median_turnover_ratio": 0.00016616824779873532,
          "target_vs_peer": {
            "score_pca_delta": 31.21,
            "adv_delta_pct": 8514.9,
            "trades_delta_pct": 1500.0,
            "volatility_delta_pct": -7.07,
            "spread_pct_delta_pct": 45.19,
            "spread_ticks_delta_pct": -41.51,
            "amihud_delta_pct": 90.88,
            "turnover_ratio_delta_pct": 1727.43
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.38129496402878,
            "rank_pca": 149,
            "adv": 432900.0,
            "trades": 56.0,
            "volatility": 0.4998829595636956,
            "spread_pct": 0.023309053069719015,
            "spread_ticks": 1.1176470588235294,
            "amihud": 4.803971077788188e-08,
            "turnover_ratio": 0.003036609478561841,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.9784172661870503,
            "rank_pca": 546,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 3.9754781418752874,
            "spread_pct": 0.5592417061611374,
            "spread_ticks": 27.0,
            "amihud": 0.00020127517325246142,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.237410071942446,
            "rank_pca": 539,
            "adv": 3.0,
            "trades": 1.0,
            "volatility": 3.9496835316263006,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 3.252175546599001e-07,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 43.52517985611511,
            "rank_pca": 315,
            "adv": 4156.7,
            "trades": 4.0,
            "volatility": 0.20585714325116128,
            "spread_pct": 0.012983347445667525,
            "spread_ticks": 2.5555555555555554,
            "amihud": 2.164495085955182e-06,
            "turnover_ratio": 6.535037588545113e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 69.60431654676259,
            "rank_pca": 170,
            "adv": 239186.19999999998,
            "trades": 83.0,
            "volatility": 1.603627300801554,
            "spread_pct": 0.04367165386170642,
            "spread_ticks": 1.0655737704918034,
            "amihud": 1.4776559942962483e-07,
            "turnover_ratio": 0.0185895213459773,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 40.827338129496404,
            "rank_pca": 330,
            "adv": 5550.0,
            "trades": 2.0,
            "volatility": 0.35091735877501307,
            "spread_pct": 0.04137931034482763,
            "spread_ticks": 3.0,
            "amihud": 1.3594645296144612e-06,
            "turnover_ratio": 0.0002669861197120195,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 71.40287769784173,
            "rank_pca": 160,
            "adv": 145662.8,
            "trades": 50.0,
            "volatility": 0.5748472057333633,
            "spread_pct": 0.037027894347074826,
            "spread_ticks": 1.0,
            "amihud": 9.118963998147742e-08,
            "turnover_ratio": 0.0057299303634446245,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 37.589928057553955,
            "rank_pca": 348,
            "adv": 4500.0,
            "trades": 3.0,
            "volatility": 0.3588703490340723,
            "spread_pct": 0.04545454545454549,
            "spread_ticks": 8.0,
            "amihud": 9.054160956078003e-07,
            "turnover_ratio": 3.4565356234328974e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 84.17266187050359,
            "rank_pca": 89,
            "adv": 986968.0,
            "trades": 443.0,
            "volatility": 0.32415686427012325,
            "spread_pct": 0.009513832305125525,
            "spread_ticks": 1.266025641025641,
            "amihud": 1.4590318448290466e-08,
            "turnover_ratio": 0.013661420704813193,
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
              "mean": 0.6296701408723757,
              "median": 0.4027956343980236,
              "min": 0.0,
              "max": 5.558776843874919,
              "p5": 0.09074873360314997,
              "p95": 1.8936243473153438,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3518113.783901886,
              "median": 19833.95,
              "min": 0.0,
              "max": 312928590.0,
              "p5": 0.0,
              "p95": 15865029.5,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09866117863169194,
              "median": 0.02922155688622757,
              "min": 0.0002872245650042818,
              "max": 1.4782608695652175,
              "p5": 0.00331138803586771,
              "p95": 0.44580498866213125,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006558196431238766,
              "median": 0.00034183842025659495,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.014786947497789674,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.493360127403007e-05,
              "median": 9.99864785355803e-08,
              "min": 0.0,
              "max": 0.009312117810749816,
              "p5": 0.0,
              "p95": 4.2992789085982066e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 527.3705035971223,
              "median": 9.0,
              "min": 0.0,
              "max": 12362.0,
              "p5": 0.0,
              "p95": 3041.25,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.2328140551988778,
              "median": 0.35489385390454264,
              "min": 0.19766609319536768,
              "max": 3.9754781418752874,
              "p5": 0.20053296071489543,
              "p95": 3.966450028288142,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1413552.8375,
              "median": 5025.0,
              "min": 0.0,
              "max": 9874345.0,
              "p5": 1.05,
              "p95": 6763763.049999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16997658212248115,
              "median": 0.03234418170727332,
              "min": 0.0012641955321598915,
              "max": 0.6666666666666666,
              "p5": 0.004151568402697863,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002939672149238445,
              "median": 0.00016616824779873532,
              "min": 0.0,
              "max": 0.013661420704813193,
              "p5": 1.1382614413096504e-07,
              "p95": 0.011138165437529695,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5720954474075837e-05,
              "median": 4.767279031928411e-07,
              "min": 0.0,
              "max": 0.00020127517325246142,
              "p5": 1.5987990958441108e-10,
              "p95": 0.00013158643589418413,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 325.25,
              "median": 3.5,
              "min": 0.0,
              "max": 2093.0,
              "p5": 0.35000000000000003,
              "p95": 1515.499999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 173253.3375,
              "median": 5025.0,
              "min": 0.0,
              "max": 986968.0,
              "p5": 1.05,
              "p95": 725244.3699999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 73.25,
              "median": 3.5,
              "min": 0.0,
              "max": 443.0,
              "p5": 0.35000000000000003,
              "p95": 316.9999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.4179297369208594,
              "median": 0.46685877738371784,
              "min": 0.20585714325116128,
              "max": 3.9754781418752874,
              "p5": 0.24726204560779796,
              "p95": 3.966450028288142,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17699236957334394,
              "median": 0.04252548210326702,
              "min": 0.009513832305125525,
              "max": 0.6666666666666666,
              "p5": 0.010728162604315226,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.610894370884125,
              "median": 1.9107905982905982,
              "min": 1.0,
              "max": 27.0,
              "p5": 1.0,
              "p95": 20.34999999999999,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5744761815187285e-05,
              "median": 5.265908475187126e-07,
              "min": 0.0,
              "max": 0.00020127517325246142,
              "p5": 5.106611456901663e-09,
              "p95": 0.00013158643589418413,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004793512435452697,
              "median": 0.00016616824779873532,
              "min": 0.0,
              "max": 0.0185895213459773,
              "p5": 1.1382614413096504e-07,
              "p95": 0.01686468612156986,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.021276595744680105,
            "market": 0.008161423294613224,
            "sector": -0.04477781304364603,
            "peers": -0.0452137793539481,
            "vs_market": 0.013115172450066881,
            "vs_sector": 0.06605440878832614,
            "vs_peers": 0.06649037509862821
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
          "votes": 57.0,
          "trades": 57.0,
          "spread_pct": 0.024100349578449535,
          "spread_ticks": 1.150753768844221,
          "amihud": 7.83519022118116e-08,
          "volatility": 0.5203043609718948
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5545905888628269,
          "loadings": {
            "log_adv": 0.5238201140662769,
            "log_trades": 0.47227696132388197,
            "log_turnover": 0.47869115504878756,
            "neg_spread": 0.4152409133630766,
            "neg_amihud": 0.2139993182487344,
            "neg_vol": 0.23494895964614346
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
          "peer_median_adv": 6548.5,
          "peer_median_score_pca": 48.20143884892086,
          "peer_median_trades": 5.0,
          "peer_median_volatility": 0.5595878201188518,
          "peer_median_spread_pct": 0.042421150293191975,
          "peer_median_spread_ticks": 1.6502970297029704,
          "peer_median_amihud": 5.64416876112294e-07,
          "peer_median_turnover_ratio": 0.00013235581221346854,
          "target_vs_peer": {
            "score_pca_delta": 23.74,
            "adv_delta_pct": 2977.8,
            "trades_delta_pct": 1040.0,
            "volatility_delta_pct": 7.02,
            "spread_pct_delta_pct": 43.19,
            "spread_ticks_delta_pct": -30.27,
            "amihud_delta_pct": 86.12,
            "turnover_ratio_delta_pct": 1012.69
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.94244604316546,
            "rank_pca": 157,
            "adv": 201552.0,
            "trades": 57.0,
            "volatility": 0.5203043609718948,
            "spread_pct": 0.024100349578449535,
            "spread_ticks": 1.150753768844221,
            "amihud": 7.83519022118116e-08,
            "turnover_ratio": 0.0014727100023655777,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 0.8992805755395683,
            "rank_pca": 552,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.4261024794970627,
            "spread_pct": 0.47943262411347515,
            "spread_ticks": 20.692307692307693,
            "amihud": 0.00036013640690511566,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.776978417266187,
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
            "score_pca": 48.381294964028775,
            "rank_pca": 288,
            "adv": 5600.0,
            "trades": 5.0,
            "volatility": 0.323028360295343,
            "spread_pct": 0.017320427916454422,
            "spread_ticks": 2.0,
            "amihud": 1.436039027347683e-06,
            "turnover_ratio": 8.672087795225743e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 50.719424460431654,
            "rank_pca": 275,
            "adv": 21751.5,
            "trades": 16.0,
            "volatility": 1.3406862289852743,
            "spread_pct": 0.06843124596513879,
            "spread_ticks": 1.08,
            "amihud": 1.885442873856309e-07,
            "turnover_ratio": 0.0024794349669154704,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 40.46762589928058,
            "rank_pca": 332,
            "adv": 3550.0,
            "trades": 1.0,
            "volatility": 0.36482871331237005,
            "spread_pct": 0.043276661514683186,
            "spread_ticks": 3.25,
            "amihud": 1.5365538898466613e-06,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 64.74820143884892,
            "rank_pca": 197,
            "adv": 67485.6,
            "trades": 29.0,
            "volatility": 0.6141994085583383,
            "spread_pct": 0.04156563907170076,
            "spread_ticks": 1.0379746835443038,
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
            "spread_pct": 0.01976794155565107,
            "spread_ticks": 3.088888888888889,
            "amihud": 9.40289464838957e-07,
            "turnover_ratio": 6.774809821928479e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.09352517985612,
            "rank_pca": 95,
            "adv": 657712.0,
            "trades": 369.0,
            "volatility": 0.5049762316793651,
            "spread_pct": 0.010698983624287645,
            "spread_ticks": 1.3005940594059406,
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
              "mean": 0.6924260121169268,
              "median": 0.4795149483649227,
              "min": 0.0,
              "max": 7.013811259728677,
              "p5": 0.15895878516444056,
              "p95": 2.224117777819183,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3360815.586440859,
              "median": 13503.9,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13779679.499999998,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10101557848886356,
              "median": 0.03205574912891988,
              "min": 0.00027922363866170034,
              "max": 1.2507433102081267,
              "p5": 0.003478092322077301,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00674258083502073,
              "median": 0.00027572576081325213,
              "min": 0.0,
              "max": 2.4059060048777274,
              "p5": 0.0,
              "p95": 0.012173435180465762,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2213082242798907e-05,
              "median": 1.369656521284005e-07,
              "min": 0.0,
              "max": 0.0009417815230654576,
              "p5": 0.0,
              "p95": 3.099002869718706e-05,
              "count": 550
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 494.8480215827338,
              "median": 7.0,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 2897.5,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8751797100887304,
              "median": 0.43490247249586755,
              "min": 0.2552823823211978,
              "max": 2.4261024794970627,
              "p5": 0.27899347461214863,
              "p95": 2.3646234060997315,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1830147.6249999998,
              "median": 6548.5,
              "min": 0.0,
              "max": 13765269.999999998,
              "p5": 0.0,
              "p95": 9177624.699999992,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15782655800576156,
              "median": 0.021934145567050305,
              "min": 0.0013488090764248568,
              "max": 0.6666666666666666,
              "p5": 0.004621370168176833,
              "p95": 0.6011347517730495,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024953288883526902,
              "median": 0.00013235581221346854,
              "min": 0.0,
              "max": 0.009669927990213068,
              "p5": 0.0,
              "p95": 0.009256089880697323,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.551857441008874e-05,
              "median": 5.093206835253844e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 2.6632522498327656e-10,
              "p95": 0.00023462645834977132,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 449.75,
              "median": 5.0,
              "min": 0.0,
              "max": 3161.0,
              "p5": 0.0,
              "p95": 2183.7999999999984,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 95449.5125,
              "median": 6548.5,
              "min": 0.0,
              "max": 657712.0,
              "p5": 0.0,
              "p95": 451132.75999999966,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 53.125,
              "median": 5.0,
              "min": 0.0,
              "max": 369.0,
              "p5": 0.0,
              "p95": 249.99999999999983,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0225920718700454,
              "median": 0.5595878201188518,
              "min": 0.323028360295343,
              "max": 2.4261024794970627,
              "p5": 0.33473194318674554,
              "p95": 2.3646234060997315,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1683950238035072,
              "median": 0.042421150293191975,
              "min": 0.010698983624287645,
              "max": 0.6666666666666666,
              "p5": 0.013016489126546018,
              "p95": 0.6011347517730495,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.181220665518353,
              "median": 1.6502970297029704,
              "min": 1.0,
              "max": 20.692307692307693,
              "p5": 1.0132911392405064,
              "p95": 14.587499999999991,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.5532253342083684e-05,
              "median": 5.64416876112294e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.00023462645834977132,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019511058365621727,
              "median": 0.00013235581221346854,
              "min": 0.0,
              "max": 0.009669927990213068,
              "p5": 0.0,
              "p95": 0.007379911598091407,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.040000000000001035,
            "market": 0.02153049590022449,
            "sector": -0.08590416029131964,
            "peers": -0.02842515020348846,
            "vs_market": -0.061530495900225524,
            "vs_sector": 0.04590416029131861,
            "vs_peers": -0.011574849796512576
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks strong, but the displayed book is uneven because bid depth is far lighter than ask depth.",
        "market_comparison": "Return 2.1% vs peers 0.0%."
      },
      "1w": {
        "liquidity": "1W score 74.3 vs peer median 45.5 (+28.8 pts).",
        "market_comparison": "The stock fell 7.7% compared with a 0.8% drop for peers, which matters because weaker relative performance can make trading feel less comfortable even when structural liquidity is sound."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong for the company’s size, supported by a 1M liquidity score of 73.4 compared with a peer median of 42.2.",
        "market_comparison": "The stock gained 2.1% while peers fell 4.5%, which supports a firmer trading backdrop than the sector."
      },
      "3m": {
        "liquidity": "Structural liquidity is strong over 3M, with a score of 71.9 compared with a peer median of 48.2, so access screens well relative to similar names.",
        "market_comparison": "The stock was down 4.0% compared with a 2.8% drop for peers, which matters because relative underperformance can offset some of the benefit of otherwise strong access."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "regime_method": "hmm_jump_aware",
      "estimation_window_days": 79,
      "reporting_window_days": 63,
      "available_history_days": 79,
      "n_regimes": 3,
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9999653590545967,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.30771347281126726,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "30.8%",
          "display_range": null,
          "display_text": "30.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
          "kind": "share_pct",
          "value_pct": 30.8,
          "plain_english": "Market explains about 30.8% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.17940797267775901,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "17.9%",
          "display_range": null,
          "display_text": "17.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
          "kind": "share_pct",
          "value_pct": 17.9,
          "plain_english": "Sector explains about 17.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.5128785545109736,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "51.3%",
          "display_range": null,
          "display_text": "51.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
          "kind": "share_pct",
          "value_pct": 51.3,
          "plain_english": "Company-specific explains about 51.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.3686737535000844,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.37",
          "display_range": null,
          "display_text": "1.37",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.37% stock move in the same direction in this state.",
          "value_num": 1.37
        },
        "beta_stock_lag": {
          "median": -0.9910488520143684,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.99",
          "display_range": null,
          "display_text": "-0.99",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
          "kind": "lag_beta",
          "value_num": -0.99
        },
        "beta_sector": {
          "median": 1.7189132037303405,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.72",
          "display_range": null,
          "display_text": "1.72",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 1.72% stock move in the same direction in this state.",
          "value_num": 1.72
        },
        "beta_market_lag": {
          "median": 1.5556658127913578,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.56",
          "display_range": null,
          "display_text": "1.56",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
          "kind": "lag_beta",
          "value_num": 1.56
        },
        "beta_sector_lag": {
          "median": 0.0075636721401156955,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.01",
          "display_range": null,
          "display_text": "0.01",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
          "kind": "lag_beta",
          "value_num": 0.01
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 79 trading days relative to the 252-day target."
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
          "period_label": "2026-05-04 to 2026-05-20",
          "n_obs": 13,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.547035044029189,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.7%",
            "display_range": null,
            "display_text": "54.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
            "kind": "share_pct",
            "value_pct": 54.7,
            "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.09648560277559451,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.6%",
              "display_range": null,
              "display_text": "9.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 9.6,
              "plain_english": "Market explains about 9.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.35647935319521656,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.6%",
              "display_range": null,
              "display_text": "35.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 35.6,
              "plain_english": "Sector explains about 35.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.547035044029189,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.7%",
              "display_range": null,
              "display_text": "54.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 54.7,
              "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
            }
          },
          "summary": "May: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.35554419562937445,
          "expected_duration_days": 3.015968637681087,
          "current_probability": 0.9999653590545967,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 28.087991454720584,
          "volatility": {
            "median": 0.019931023005859874,
            "low": 0.019931023005859874,
            "high": 0.019931023005859874
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.11574309287201046,
          "jump_rate": 1.1297425327179532e-27,
          "risk_score": 0.0,
          "metrics": {
            "rolling_vol_10d": 0.026221436545041145,
            "downside_vol_10d": 0.014824780728150841,
            "drawdown_21d": 0.05123086615665645,
            "amihud_stress": 1.2501956819256994,
            "spread_rel": 221.44659173135082,
            "spread_ticks": 1.0821111855800798,
            "log_notional": 12.892154236671708,
            "log_trade_count": 4.612672041355939
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.3776207487639298,
          "expected_duration_days": 3.446591446088339,
          "current_probability": 4.6311008572433725e-06,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 29.832039152350454,
          "volatility": {
            "median": 0.013125674729129939,
            "low": 0.013125674729129939,
            "high": 0.013125674729129939
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.13926575357159066,
          "jump_rate": 1.9643140340549128e-27,
          "risk_score": 0.698154625970748,
          "metrics": {
            "rolling_vol_10d": 0.038364686051238314,
            "downside_vol_10d": 0.01929859836719973,
            "drawdown_21d": 0.09691965013511163,
            "amihud_stress": 1.448731677165946,
            "spread_rel": 253.05031956724525,
            "spread_ticks": 1.1968117982881552,
            "log_notional": 12.294964205819785,
            "log_trade_count": 4.163186930372914
          }
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "pct_time": 0.2668350556066958,
          "expected_duration_days": 1.4109933288733318,
          "current_probability": 3.0009844546049692e-05,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 21.07996939292897,
          "volatility": {
            "median": 0.058382363196121626,
            "low": 0.058382363196121626,
            "high": 0.058382363196121626
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.42640753303228857,
          "jump_rate": 0.23719199524441395,
          "risk_score": 0.9383281887076913,
          "metrics": {
            "rolling_vol_10d": 0.03852563219875162,
            "downside_vol_10d": 0.021511925773241528,
            "drawdown_21d": 0.07767627687429177,
            "amihud_stress": 2.6247777818469626,
            "spread_rel": 243.47762162540957,
            "spread_ticks": 1.157206382258896,
            "log_notional": 12.995331184772468,
            "log_trade_count": 4.567357053387856
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.66843156539954,
            0.037210995827359365,
            0.29435743877310083
          ],
          [
            0.05583537559596054,
            0.7098582713843452,
            0.23430635301969435
          ],
          [
            0.34657084535118476,
            0.36214972726732153,
            0.2912794273814938
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            18.0,
            1.0,
            8.0
          ],
          [
            2.0,
            21.0,
            7.0
          ],
          [
            7.0,
            8.0,
            6.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9999653590545967,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 4.6311008572433725e-06,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "probability": 3.0009844546049692e-05,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.11575252479937978,
        "current_score": 0.8114206229029761,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 3,
        "criterion": "bic_with_min_state_support",
        "bic": 3927.227552846587,
        "loglik": -1657.752426750602,
        "n_params": 140,
        "bic_delta_vs_next_best": 6.2570784396348245,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 3933.484631286222,
            "loglik": -1767.9324383558614,
            "n_params": 91,
            "converged": true,
            "iterations": 7,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 3933.484631286222,
                "loglik": -1767.9324383558614,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 3933.4846312956724,
                "loglik": -1767.9324383605867,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 3933.4846317638057,
                "loglik": -1767.9324385946534,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 3927.227552846587,
            "loglik": -1657.752426750602,
            "n_params": 140,
            "converged": true,
            "iterations": 16,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3927.227576932387,
                "loglik": -1657.752438793502,
                "n_params": 140,
                "converged": true,
                "iterations": 19
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3927.227552846587,
                "loglik": -1657.752426750602,
                "n_params": 140,
                "converged": true,
                "iterations": 16
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3960.564306156837,
                "loglik": -1674.4208034057272,
                "n_params": 140,
                "converged": true,
                "iterations": 40
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
              "bic": 3927.227576932387,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 3927.227552846587,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 2,
              "bic": 3933.4846317638057,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 2,
            "2": 1
          },
          "selected_state_share": 0.6666666666666666,
          "stable": false,
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
        "history_used_days": 79,
        "n_features": 22,
        "candidate_states": [
          2,
          3
        ],
        "selected_states": 3,
        "bic_delta_vs_next_best": 6.2570784396348245,
        "state_count_interpretation": "79 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 6.26 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 140,
          "observations_per_parameter": 0.5642857142857143,
          "parameter_pressure_label": "underidentified_pressure"
        },
        "state_occupancy": {
          "min_effective_days_required": 3.0,
          "min_effective_days_observed": 21.07996939292897,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 28.087991454720584,
              "pct_time": 0.35554419562937445,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 29.832039152350454,
              "pct_time": 0.3776207487639298,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "effective_days": 21.07996939292897,
              "pct_time": 0.2668350556066958,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.66843156539954,
            0.7098582713843452,
            0.2912794273814938
          ],
          "expected_duration_days": [
            3.015968637681087,
            3.446591446088339,
            1.4109933288733318
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
              "bic": 3927.227576932387,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 3927.227552846587,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 2,
              "bic": 3933.4846317638057,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 2,
            "2": 1
          },
          "selected_state_share": 0.6666666666666666,
          "stable": false,
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
            "jump_probability": 0.11574309287201046,
            "jump_rate": 1.1297425327179532e-27,
            "rolling_vol_10d": 0.026221436545041145,
            "downside_vol_10d": 0.014824780728150841,
            "drawdown_21d": 0.05123086615665645,
            "amihud_stress": 1.2501956819256994,
            "spread_rel": 221.44659173135082,
            "spread_ticks": 1.0821111855800798,
            "log_notional": 12.892154236671708,
            "log_trade_count": 4.612672041355939
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.698154625970748,
            "jump_probability": 0.13926575357159066,
            "jump_rate": 1.9643140340549128e-27,
            "rolling_vol_10d": 0.038364686051238314,
            "downside_vol_10d": 0.01929859836719973,
            "drawdown_21d": 0.09691965013511163,
            "amihud_stress": 1.448731677165946,
            "spread_rel": 253.05031956724525,
            "spread_ticks": 1.1968117982881552,
            "log_notional": 12.294964205819785,
            "log_trade_count": 4.163186930372914
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "risk_score": 0.9383281887076913,
            "jump_probability": 0.42640753303228857,
            "jump_rate": 0.23719199524441395,
            "rolling_vol_10d": 0.03852563219875162,
            "downside_vol_10d": 0.021511925773241528,
            "drawdown_21d": 0.07767627687429177,
            "amihud_stress": 2.6247777818469626,
            "spread_rel": 243.47762162540957,
            "spread_ticks": 1.157206382258896,
            "log_notional": 12.995331184772468,
            "log_trade_count": 4.567357053387856
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
          "trade_date": "2026-05-07",
          "state": 0,
          "probabilities": [
            0.9982491443160261,
            0.0017492173167655111,
            1.638367208317892e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.979450542113602,
            0.020546357472064267,
            3.1004143337040595e-06
          ],
          "jump_probability": 0.13851661208222518,
          "jump_score": 0.6607256419362596
        },
        {
          "trade_date": "2026-05-08",
          "state": 0,
          "probabilities": [
            0.999999999695846,
            1.2823530583654354e-13,
            3.040258538863177e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999994120958,
            1.5349691481814818e-12,
            5.863691403185799e-10
          ],
          "jump_probability": 0.15312251142057853,
          "jump_score": 0.7627672057495393
        },
        {
          "trade_date": "2026-05-11",
          "state": 0,
          "probabilities": [
            0.999999438234495,
            5.617655034911501e-07,
            1.5461140798353352e-15
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999932954485663,
            6.7045514306736186e-06,
            2.981258824147167e-15
          ],
          "jump_probability": 0.08479231528164409,
          "jump_score": 0.181351217094366
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.999986494673383,
            1.3492404627887462e-05,
            1.2921989178458248e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9998384763001157,
            0.00016149878093371309,
            2.4918950562632788e-08
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.9999999661963824,
            3.380361684110463e-08,
            7.680343964255906e-16
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999995953224616,
            4.0467753693878457e-07,
            1.4813078454629905e-15
          ],
          "jump_probability": 0.12001558716856794,
          "jump_score": 0.5175803763428214
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999999849962923,
            1.4354241006191544e-08,
            6.494667331900267e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999813105374,
            1.8033132902449597e-08,
            6.563297833860209e-10
          ],
          "jump_probability": 0.17699088928045315,
          "jump_score": 0.9135921630507442
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            3.602055933559562e-10,
            1.1588040752136887e-13,
            0.9999999996396786
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.8681575675090372e-10,
            7.167849897484156e-13,
            0.9999999998124675
          ],
          "jump_probability": 0.4129553242945577,
          "jump_score": 1.9441204243737138
        },
        {
          "trade_date": "2026-05-18",
          "state": 0,
          "probabilities": [
            0.999686717204692,
            0.0003091163796563807,
            4.166415651556879e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9996074748029445,
            0.00038831505842295004,
            4.210138632529736e-06
          ],
          "jump_probability": 0.15832255162199024,
          "jump_score": 0.7971630914048492
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            1.4633309685593345e-05,
            3.649616565105827e-11,
            0.9999853666538182
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            7.587327098798862e-06,
            2.264948801289761e-10,
            0.9999924124464064
          ],
          "jump_probability": 0.40299903138104465,
          "jump_score": 1.9082742804819266
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999653590545967,
            4.6311008572433725e-06,
            3.0009844546049692e-05
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999653590545967,
            4.6311008572433725e-06,
            3.0009844546049692e-05
          ],
          "jump_probability": 0.16051970670540766,
          "jump_score": 0.8114206229029761
        }
      ],
      "methodology": {
        "estimation_window_days": 79,
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
        "market_link_display": "1.37",
        "sector_link_display": "1.72",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.37% stock move in the same direction in this state. This is a point estimate from 79 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.72% stock move in the same direction in this state. This is a point estimate from 79 trading days.",
        "stock_persistence_display": "-0.99",
        "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
        "history_limited_note": "Read is based on 79 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Calm / Liquid",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 51.3,
        "driver_share_display": "51.3%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 79 trading days relative to the 252-day target.",
        "history_days": 79,
        "history_limited": true,
        "volatility_label": "Calm / Liquid",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 11.6,
        "jump_risk_score": 0.81,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.66843156539954,
        "effective_days": 28.1,
        "persistence_note": "This state looks more persistent, with a typical run length of about 3.0 days.",
        "expected_duration_days": 3.0
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
          "pct_time": 0.35554419562937445,
          "expected_duration_days": 3.015968637681087,
          "current_probability": 0.9999653590545967,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 28.087991454720584,
          "volatility": {
            "median": 0.019931023005859874,
            "low": 0.019931023005859874,
            "high": 0.019931023005859874
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.11574309287201046,
          "jump_rate": 1.1297425327179532e-27,
          "risk_score": 0.0,
          "metrics": {
            "rolling_vol_10d": 0.026221436545041145,
            "downside_vol_10d": 0.014824780728150841,
            "drawdown_21d": 0.05123086615665645,
            "amihud_stress": 1.2501956819256994,
            "spread_rel": 221.44659173135082,
            "spread_ticks": 1.0821111855800798,
            "log_notional": 12.892154236671708,
            "log_trade_count": 4.612672041355939
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.3776207487639298,
          "expected_duration_days": 3.446591446088339,
          "current_probability": 4.6311008572433725e-06,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 29.832039152350454,
          "volatility": {
            "median": 0.013125674729129939,
            "low": 0.013125674729129939,
            "high": 0.013125674729129939
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.13926575357159066,
          "jump_rate": 1.9643140340549128e-27,
          "risk_score": 0.698154625970748,
          "metrics": {
            "rolling_vol_10d": 0.038364686051238314,
            "downside_vol_10d": 0.01929859836719973,
            "drawdown_21d": 0.09691965013511163,
            "amihud_stress": 1.448731677165946,
            "spread_rel": 253.05031956724525,
            "spread_ticks": 1.1968117982881552,
            "log_notional": 12.294964205819785,
            "log_trade_count": 4.163186930372914
          }
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "pct_time": 0.2668350556066958,
          "expected_duration_days": 1.4109933288733318,
          "current_probability": 3.0009844546049692e-05,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 21.07996939292897,
          "volatility": {
            "median": 0.058382363196121626,
            "low": 0.058382363196121626,
            "high": 0.058382363196121626
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.42640753303228857,
          "jump_rate": 0.23719199524441395,
          "risk_score": 0.9383281887076913,
          "metrics": {
            "rolling_vol_10d": 0.03852563219875162,
            "downside_vol_10d": 0.021511925773241528,
            "drawdown_21d": 0.07767627687429177,
            "amihud_stress": 2.6247777818469626,
            "spread_rel": 243.47762162540957,
            "spread_ticks": 1.157206382258896,
            "log_notional": 12.995331184772468,
            "log_trade_count": 4.567357053387856
          }
        }
      ],
      "transitions": [
        [
          0.66843156539954,
          0.037210995827359365,
          0.29435743877310083
        ],
        [
          0.05583537559596054,
          0.7098582713843452,
          0.23430635301969435
        ],
        [
          0.34657084535118476,
          0.36214972726732153,
          0.2912794273814938
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.66843156539954,
            0.037210995827359365,
            0.29435743877310083
          ],
          [
            0.05583537559596054,
            0.7098582713843452,
            0.23430635301969435
          ],
          [
            0.34657084535118476,
            0.36214972726732153,
            0.2912794273814938
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            18.0,
            1.0,
            8.0
          ],
          [
            2.0,
            21.0,
            7.0
          ],
          [
            7.0,
            8.0,
            6.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9999653590545967,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9999653590545967,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 4.6311008572433725e-06,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "probability": 3.0009844546049692e-05,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.11575252479937978,
        "current_score": 0.8114206229029761,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 3,
        "criterion": "bic_with_min_state_support",
        "bic": 3927.227552846587,
        "loglik": -1657.752426750602,
        "n_params": 140,
        "bic_delta_vs_next_best": 6.2570784396348245,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 3933.484631286222,
            "loglik": -1767.9324383558614,
            "n_params": 91,
            "converged": true,
            "iterations": 7,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 3933.484631286222,
                "loglik": -1767.9324383558614,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 3933.4846312956724,
                "loglik": -1767.9324383605867,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 3933.4846317638057,
                "loglik": -1767.9324385946534,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 3927.227552846587,
            "loglik": -1657.752426750602,
            "n_params": 140,
            "converged": true,
            "iterations": 16,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3927.227576932387,
                "loglik": -1657.752438793502,
                "n_params": 140,
                "converged": true,
                "iterations": 19
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3927.227552846587,
                "loglik": -1657.752426750602,
                "n_params": 140,
                "converged": true,
                "iterations": 16
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3960.564306156837,
                "loglik": -1674.4208034057272,
                "n_params": 140,
                "converged": true,
                "iterations": 40
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
              "bic": 3927.227576932387,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 3927.227552846587,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 2,
              "bic": 3933.4846317638057,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 2,
            "2": 1
          },
          "selected_state_share": 0.6666666666666666,
          "stable": false,
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
        "history_used_days": 79,
        "n_features": 22,
        "candidate_states": [
          2,
          3
        ],
        "selected_states": 3,
        "bic_delta_vs_next_best": 6.2570784396348245,
        "state_count_interpretation": "79 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 6.26 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 140,
          "observations_per_parameter": 0.5642857142857143,
          "parameter_pressure_label": "underidentified_pressure"
        },
        "state_occupancy": {
          "min_effective_days_required": 3.0,
          "min_effective_days_observed": 21.07996939292897,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 28.087991454720584,
              "pct_time": 0.35554419562937445,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 29.832039152350454,
              "pct_time": 0.3776207487639298,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "effective_days": 21.07996939292897,
              "pct_time": 0.2668350556066958,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.66843156539954,
            0.7098582713843452,
            0.2912794273814938
          ],
          "expected_duration_days": [
            3.015968637681087,
            3.446591446088339,
            1.4109933288733318
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
              "bic": 3927.227576932387,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 3927.227552846587,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 2,
              "bic": 3933.4846317638057,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 2,
            "2": 1
          },
          "selected_state_share": 0.6666666666666666,
          "stable": false,
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
            "jump_probability": 0.11574309287201046,
            "jump_rate": 1.1297425327179532e-27,
            "rolling_vol_10d": 0.026221436545041145,
            "downside_vol_10d": 0.014824780728150841,
            "drawdown_21d": 0.05123086615665645,
            "amihud_stress": 1.2501956819256994,
            "spread_rel": 221.44659173135082,
            "spread_ticks": 1.0821111855800798,
            "log_notional": 12.892154236671708,
            "log_trade_count": 4.612672041355939
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.698154625970748,
            "jump_probability": 0.13926575357159066,
            "jump_rate": 1.9643140340549128e-27,
            "rolling_vol_10d": 0.038364686051238314,
            "downside_vol_10d": 0.01929859836719973,
            "drawdown_21d": 0.09691965013511163,
            "amihud_stress": 1.448731677165946,
            "spread_rel": 253.05031956724525,
            "spread_ticks": 1.1968117982881552,
            "log_notional": 12.294964205819785,
            "log_trade_count": 4.163186930372914
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "risk_score": 0.9383281887076913,
            "jump_probability": 0.42640753303228857,
            "jump_rate": 0.23719199524441395,
            "rolling_vol_10d": 0.03852563219875162,
            "downside_vol_10d": 0.021511925773241528,
            "drawdown_21d": 0.07767627687429177,
            "amihud_stress": 2.6247777818469626,
            "spread_rel": 243.47762162540957,
            "spread_ticks": 1.157206382258896,
            "log_notional": 12.995331184772468,
            "log_trade_count": 4.567357053387856
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
          "trade_date": "2026-05-07",
          "state": 0,
          "probabilities": [
            0.9982491443160261,
            0.0017492173167655111,
            1.638367208317892e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.979450542113602,
            0.020546357472064267,
            3.1004143337040595e-06
          ],
          "jump_probability": 0.13851661208222518,
          "jump_score": 0.6607256419362596
        },
        {
          "trade_date": "2026-05-08",
          "state": 0,
          "probabilities": [
            0.999999999695846,
            1.2823530583654354e-13,
            3.040258538863177e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999994120958,
            1.5349691481814818e-12,
            5.863691403185799e-10
          ],
          "jump_probability": 0.15312251142057853,
          "jump_score": 0.7627672057495393
        },
        {
          "trade_date": "2026-05-11",
          "state": 0,
          "probabilities": [
            0.999999438234495,
            5.617655034911501e-07,
            1.5461140798353352e-15
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999932954485663,
            6.7045514306736186e-06,
            2.981258824147167e-15
          ],
          "jump_probability": 0.08479231528164409,
          "jump_score": 0.181351217094366
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.999986494673383,
            1.3492404627887462e-05,
            1.2921989178458248e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9998384763001157,
            0.00016149878093371309,
            2.4918950562632788e-08
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.9999999661963824,
            3.380361684110463e-08,
            7.680343964255906e-16
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999995953224616,
            4.0467753693878457e-07,
            1.4813078454629905e-15
          ],
          "jump_probability": 0.12001558716856794,
          "jump_score": 0.5175803763428214
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999999849962923,
            1.4354241006191544e-08,
            6.494667331900267e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999813105374,
            1.8033132902449597e-08,
            6.563297833860209e-10
          ],
          "jump_probability": 0.17699088928045315,
          "jump_score": 0.9135921630507442
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            3.602055933559562e-10,
            1.1588040752136887e-13,
            0.9999999996396786
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.8681575675090372e-10,
            7.167849897484156e-13,
            0.9999999998124675
          ],
          "jump_probability": 0.4129553242945577,
          "jump_score": 1.9441204243737138
        },
        {
          "trade_date": "2026-05-18",
          "state": 0,
          "probabilities": [
            0.999686717204692,
            0.0003091163796563807,
            4.166415651556879e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9996074748029445,
            0.00038831505842295004,
            4.210138632529736e-06
          ],
          "jump_probability": 0.15832255162199024,
          "jump_score": 0.7971630914048492
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            1.4633309685593345e-05,
            3.649616565105827e-11,
            0.9999853666538182
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            7.587327098798862e-06,
            2.264948801289761e-10,
            0.9999924124464064
          ],
          "jump_probability": 0.40299903138104465,
          "jump_score": 1.9082742804819266
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999653590545967,
            4.6311008572433725e-06,
            3.0009844546049692e-05
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999653590545967,
            4.6311008572433725e-06,
            3.0009844546049692e-05
          ],
          "jump_probability": 0.16051970670540766,
          "jump_score": 0.8114206229029761
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
    "liq_subtitle": "Monthly liquidity screens well for the stock’s size, although displayed buy-side depth is thin.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is ahead of both peers and the market, with the stock up 2.1% over one month.",
    "perf_insight": "Performance has been firm, with a 1M return of +2.1% compared with peers at -4.5% and the market at +0.8%. That stronger tape matters because it sits alongside a liquidity score of 71.9, well above the peer median of 48.2.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price action is being driven mainly by company-specific factors, so stock news is setting the tone.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 51.3% of price changes. Other influences are market 30.8%, and sector 17.9%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 30.8%, sector 17.9%, and company-specific 51.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 30.8%, sector 17.9%, and company-specific 51.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Company-specific drivers account for 51.3% of moves, while displayed bid depth is only 0.23x ask depth. That matters because stock-led moves can meet a thinner buy-side book even with a 1-tick spread.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price moves are primarily company-driven at 51.3%.",
      "Monthly change: the pattern has stayed company-driven from March through"
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The stock is trading with solid underlying liquidity, but the displayed book remains uneven.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to May 20, 2026 (81 trading days • 12,478 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The key execution watchpoint is the thin bid, with displayed bid depth at 0.23x ask depth despite a 1-tick spread.",
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
    "intraday_subtitle": "The live execution picture is defined more by book imbalance than by spread.",
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
    "intraday_insight": "Execution quality looks acceptable on spread, with the market at 1 tick. The more important feature is the thinner bid, with displayed buy-side depth at just 0.23x of the ask, which can make selling conditions feel worse than the broader liquidity profile implies.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by liquidity strength and book imbalance than by short activity.",
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
    "exec_subtitle": "Liquid for its size, but the displayed book shows thin buy-side support.",
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
        "sub": "Peer median 48.2 (+23.7 pts)",
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
        "value": "2.41%",
        "sub": "1.15 ticks; peers 4.24%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is strong relative to peers, with a 3M score of 71.9 compared with a peer median of 48.2. The near-term execution picture is less supportive, because displayed bid depth is only 0.23x ask depth even though the spread is 1 tick. That leaves the stock accessible on a monthly view, while the live book looks thinner for sellers than the headline score implies.",
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
        "value": "0.23x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-2.03% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-5.55% with 55.6% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-5.55% with 22.2% fill.",
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
        "value": "2.41",
        "suffix": "%",
        "bar_pct": 24,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.41% • 1.15 ticks vs peers 4.24%",
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
        "value": "51.3",
        "suffix": "company-specific",
        "bar_pct": 51,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 30.8% • Sector 17.9%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a 3M liquidity score of 71.9 compared with a peer median of 48.2. That keeps the name looking accessible relative to peers on a monthly average basis.",
      "Price performance has been firmer than the main comparison groups, with the stock up 2.1% over 1M compared with peers down 4.5% and the market up 0.8%. That stronger return backdrop supports the view that trading conditions have held up well.",
      "The main watchpoint is the displayed book, where bid depth is only 0.23x of ask depth even with a 1-tick spread. With company-specific factors driving 51.3% of moves, stock news can translate into sharper execution conditions on the downside."
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
      "overall": "3M liquidity is strong: score 71.9 vs peer median 48.2 (+23.7 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "3M score 71.9 vs peer median 48.2 (+23.7 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +23.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is -4.0%, better than sector, but worse than market and peers, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -4.0% vs market 2.2%.",
        "vs_sector": "Better than sector: -4.0% vs sector -8.6%.",
        "vs_peers": "Worse than peers: -4.0% vs peers -2.8%."
      },
      "adv": {
        "insight": "ADV is S$201.6K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$201.6K vs market S$13.5K.",
        "vs_sector": "Better than sector: S$201.6K vs sector S$6.5K.",
        "vs_peers": "Better than peers: S$201.6K vs peers S$6.5K."
      },
      "spread": {
        "insight": "Spread is 2.41%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.41% vs market 3.21%.",
        "vs_sector": "In line with sector: 2.41% vs secto%.",
        "vs_peers": "Better than peers: 2.41% vs peers 4.24%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.15%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.15% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.15% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.15% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 52.03%, worse than sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "In line with market: 52.03% vs market 47.95%.",
        "vs_sector": "Worse than sector: 52.03% vs sector 43.49%.",
        "vs_peers": "In line with peers: 52.03% vs peers 55.96%."
      },
      "trades": {
        "insight": "Trades is 57, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 57 vs market 7.",
        "vs_sector": "Better than sector: 57 vs sector 5.",
        "vs_peers": "Better than peers: 57 vs peers 5."
      },
      "amihud": {
        "insight": "Price impact is 7.84e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.84e-08 vs market 1.37e-07.",
        "vs_sector": "Better than sector: 7.84e-08 vs sector 5.09e-07.",
        "vs_peers": "Better than peers: 7.84e-08 vs peers 5.64e-07."
      }
    },
    "performance": {
      "overall": "Recent returns are stronger than the main comparison groups, with the stock up 2.1% over one month while peers fell 4.5% and the market rose 0.8%. That move is partly confirmed by liquidity, as the 3M liquidity score of 71.9 sits 23.7 points above the peer median, which supports access relative to similar names. The read is not fully clean, however, because displayed bid depth is only 0.23x ask depth even with a 1 tick spread, so immediate buy-side support looks thinner than the broader liquidity profile.",
      "conclusion": "The move looks mainly company-specific, with stronger relative returns supported by solid structural liquidity but tempered by thin buy-side depth."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by company-specific factors, with 51.3% of recent price moves tied to its own story rather than broader market or sector moves. That matters because stock-specific trading can keep attention focused on company developments, and the current buy-side depth is thin enough to make negative moves feel sharper.",
      "beta": "The current read looks directionally clear but not deeply established, as the trade-size history spans 81 trading days and 12,478 trades rather than a full year. Even so, the recent return backdrop is firmer than the main comparison groups, with the stock up 2.1% over one month compared with peers down 4.5% and the market up 0.8%.",
      "rolling_change": "This does not look like a short-lived shift, because the stock was mostly company-driven in March, April, and May. That consistency suggests the current pattern is stable for now, with stock-specific developments continuing to matter more than broader market moves."
    },
    "regime": {
      "overall": "Calm / Liquid points to a steadier trading backdrop, and that matters because the stock’s 3M liquidity score of 71.9 sits well above the peer median of 48.2, supporting access relative to similar names.",
      "current": "The active state is Calm / Liquid, which fits with a stock that has outperformed over the past month at +2.1% compared with peers at -4.5%.",
      "transitions": "This state looks fairly settled rather than fleeting, with a typical run length of about 3.0 days, although the read comes from 81 trading days rather than a full year.",
      "trading_implications": "Trading conditions may feel broadly orderly, but the displayed book is less robust than the state label suggests because bid depth is only 0.23x ask depth even with a 1 tick spread."
    },
    "execution": {
      "overall": "The current book reads as thin buy-side because displayed bid depth is only 0.23x ask depth while the spread remains 1 tick. That means the quoted market still looks orderly, but immediate visible support on the buy side is light.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with materially less size bid than offered. Trade-size percentile context is based on 81 trading days and 12,478 trades, which makes the historical size framing less complete than a full-year view.",
      "peer_context": "The broader liquidity picture still screens well, with a 3M score of 71.9 compared with a peer median of 48.2, but the displayed book is weaker than that headline suggests. In practice, the stock looks accessible for its size over time while the current screen shows thinner near-term buy-side support."
    },
    "trader_composition": {
      "overall": "Flow looks mainly retail-like, although the signal is mixed on value. Retail-like trades account for 87.0% of count and 34.1% of value, while institution-like trades are 1.3% of count and 19.0% of value, so day-to-day activity is broad but larger tickets still matter.",
      "retail_heavy": "The clearest read is retail-heavy participation. Retail-like trades make up 87.0% of count and 34.1% of value, compared with institution-like at 1.3% of count and 19.0% of value, which means the tape is driven by many smaller decisions rather than a deep pool of large orders.",
      "institutional_gap": "Institution-like participation is limited in count at 1.3% even though it reaches 19.0% of value. That leaves the flow looking mixed in depth, with some larger trades present but not enough to define the market day.",
      "peer_comparison": "The mix looks more retail-leaning than a market dominated by larger tickets, because count is overwhelmingly retail-like while value is more balanced. That makes the shareholder flow profile stand out more for breadth of participation than for institutional depth."
    },
    "price_moving": {
      "overall": "Price moves are being shaped more by stock-specific factors than by broad market direction. Company-specific drivers account for 51.3%, so trading is more likely to react to name-level developments. The signal is reasonably clean because the stock has outperformed while company-specific drivers lead. A 1M return of +2.1%, compared with peers at -4.5% and the market at +0.8%, points to buying interest that is tied more to the company than to sector or index moves.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low and is not a meaningful driver of current trading conditions. The stock has still returned 2.1% over one month, ahead of peers at -4.5% and the market at 0.8%, which points away from short pressure as the main influence on trading.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "The short trend looks stable rather than rising, so it does not suggest a new source of pressure in the market. That leaves the broader picture driven more by the stock’s own news flow and underlying liquidity than by short positioning.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 2.3%, continuous 96.0%, and close 1.1%. Current trading concentration score is 0.306.",
      "hhi_interpretation": "Intraday activity looks reasonably well distributed rather than heavily concentrated at the open or close. That supports a steadier trading pattern through the main session.",
      "best_times": "The main session is the clearest source of liquidity because 96.0% of trading happens in continuous hours. That matters more than auction windows for assessing day-to-day access.",
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
        0.8992805755395683,
        3.776978417266187,
        48.381294964028775,
        50.719424460431654,
        40.46762589928058,
        64.74820143884892,
        48.02158273381295,
        83.09352517985612
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
        5600.0,
        21751.5,
        3550.0,
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
        "volatility": 0.5203043609718948,
        "adv": 201552.0,
        "spread_pct": 0.024100349578449535,
        "turnover_ratio": 0.0014727100023655777,
        "amihud": 7.83519022118116e-08,
        "trades": 57.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6924260121169268,
          "median": 0.4795149483649227,
          "min": 0.0,
          "max": 7.013811259728677,
          "p5": 0.15895878516444056,
          "p95": 2.224117777819183,
          "count": 556
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3360815.586440859,
          "median": 13503.9,
          "min": 0.0,
          "max": 285980477.7,
          "p5": 0.0,
          "p95": 13779679.499999998,
          "count": 556
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.10101557848886356,
          "median": 0.03205574912891988,
          "min": 0.00027922363866170034,
          "max": 1.2507433102081267,
          "p5": 0.003478092322077301,
          "p95": 0.44957360805416136,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00674258083502073,
          "median": 0.00027572576081325213,
          "min": 0.0,
          "max": 2.4059060048777274,
          "p5": 0.0,
          "p95": 0.012173435180465762,
          "count": 549
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.2213082242798907e-05,
          "median": 1.369656521284005e-07,
          "min": 0.0,
          "max": 0.0009417815230654576,
          "p5": 0.0,
          "p95": 3.099002869718706e-05,
          "count": 550
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 494.8480215827338,
          "median": 7.0,
          "min": 0.0,
          "max": 11430.0,
          "p5": 0.0,
          "p95": 2897.5,
          "count": 556
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8751797100887304,
          "median": 0.43490247249586755,
          "min": 0.2552823823211978,
          "max": 2.4261024794970627,
          "p5": 0.27899347461214863,
          "p95": 2.3646234060997315,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1830147.6249999998,
          "median": 6548.5,
          "min": 0.0,
          "max": 13765269.999999998,
          "p5": 0.0,
          "p95": 9177624.699999992,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15782655800576156,
          "median": 0.021934145567050305,
          "min": 0.0013488090764248568,
          "max": 0.6666666666666666,
          "p5": 0.004621370168176833,
          "p95": 0.6011347517730495,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0024953288883526902,
          "median": 0.00013235581221346854,
          "min": 0.0,
          "max": 0.009669927990213068,
          "p5": 0.0,
          "p95": 0.009256089880697323,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.551857441008874e-05,
          "median": 5.093206835253844e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 2.6632522498327656e-10,
          "p95": 0.00023462645834977132,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 449.75,
          "median": 5.0,
          "min": 0.0,
          "max": 3161.0,
          "p5": 0.0,
          "p95": 2183.7999999999984,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 95449.5125,
          "median": 6548.5,
          "min": 0.0,
          "max": 657712.0,
          "p5": 0.0,
          "p95": 451132.75999999966,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 53.125,
          "median": 5.0,
          "min": 0.0,
          "max": 369.0,
          "p5": 0.0,
          "p95": 249.99999999999983,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.0225920718700454,
          "median": 0.5595878201188518,
          "min": 0.323028360295343,
          "max": 2.4261024794970627,
          "p5": 0.33473194318674554,
          "p95": 2.3646234060997315,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1683950238035072,
          "median": 0.042421150293191975,
          "min": 0.010698983624287645,
          "max": 0.6666666666666666,
          "p5": 0.013016489126546018,
          "p95": 0.6011347517730495,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.181220665518353,
          "median": 1.6502970297029704,
          "min": 1.0,
          "max": 20.692307692307693,
          "p5": 1.0132911392405064,
          "p95": 14.587499999999991,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.5532253342083684e-05,
          "median": 5.64416876112294e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.00023462645834977132,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0019511058365621727,
          "median": 0.00013235581221346854,
          "min": 0.0,
          "max": 0.009669927990213068,
          "p5": 0.0,
          "p95": 0.007379911598091407,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.0769230769230772,
        "market": 0.008183557748697057,
        "sector": -0.014649320936856225,
        "peers": -0.007537688442211032
      },
      {
        "horizon": "1M",
        "stock": 0.021276595744680105,
        "market": 0.008161423294613224,
        "sector": -0.04477781304364603,
        "peers": -0.0452137793539481
      },
      {
        "horizon": "3M",
        "stock": -0.040000000000001035,
        "market": 0.02153049590022449,
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
      "share_market": 0.30771347281126726,
      "share_sector": 0.17940797267775901,
      "share_idio": 0.5128785545109736,
      "beta_market": 1.3686737535000844,
      "beta_sector": 1.7189132037303405,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 79,
        "reporting_window_days": 63,
        "available_history_days": 79,
        "n_regimes": 3,
        "current_regime": 0,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9999653590545967,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.30771347281126726,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "30.8%",
            "display_range": null,
            "display_text": "30.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
            "kind": "share_pct",
            "value_pct": 30.8,
            "plain_english": "Market explains about 30.8% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.17940797267775901,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "17.9%",
            "display_range": null,
            "display_text": "17.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
            "kind": "share_pct",
            "value_pct": 17.9,
            "plain_english": "Sector explains about 17.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.5128785545109736,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.3%",
            "display_range": null,
            "display_text": "51.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
            "kind": "share_pct",
            "value_pct": 51.3,
            "plain_english": "Company-specific explains about 51.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.3686737535000844,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.37",
            "display_range": null,
            "display_text": "1.37",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.37% stock move in the same direction in this state.",
            "value_num": 1.37
          },
          "beta_stock_lag": {
            "median": -0.9910488520143684,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.99",
            "display_range": null,
            "display_text": "-0.99",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
            "kind": "lag_beta",
            "value_num": -0.99
          },
          "beta_sector": {
            "median": 1.7189132037303405,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.72",
            "display_range": null,
            "display_text": "1.72",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 1.72% stock move in the same direction in this state.",
            "value_num": 1.72
          },
          "beta_market_lag": {
            "median": 1.5556658127913578,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.56",
            "display_range": null,
            "display_text": "1.56",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
            "kind": "lag_beta",
            "value_num": 1.56
          },
          "beta_sector_lag": {
            "median": 0.0075636721401156955,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.01",
            "display_range": null,
            "display_text": "0.01",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
            "kind": "lag_beta",
            "value_num": 0.01
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 79 trading days relative to the 252-day target."
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
            "period_label": "2026-05-04 to 2026-05-20",
            "n_obs": 13,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.547035044029189,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.7%",
              "display_range": null,
              "display_text": "54.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 54.7,
              "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.09648560277559451,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.6%",
                "display_range": null,
                "display_text": "9.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 9.6,
                "plain_english": "Market explains about 9.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.35647935319521656,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.6%",
                "display_range": null,
                "display_text": "35.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 35.6,
                "plain_english": "Sector explains about 35.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.547035044029189,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.7%",
                "display_range": null,
                "display_text": "54.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 54.7,
                "plain_english": "Company-specific explains about 54.7% of price moves in the current state."
              }
            },
            "summary": "May: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.35554419562937445,
            "expected_duration_days": 3.015968637681087,
            "current_probability": 0.9999653590545967,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 28.087991454720584,
            "volatility": {
              "median": 0.019931023005859874,
              "low": 0.019931023005859874,
              "high": 0.019931023005859874
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.11574309287201046,
            "jump_rate": 1.1297425327179532e-27,
            "risk_score": 0.0,
            "metrics": {
              "rolling_vol_10d": 0.026221436545041145,
              "downside_vol_10d": 0.014824780728150841,
              "drawdown_21d": 0.05123086615665645,
              "amihud_stress": 1.2501956819256994,
              "spread_rel": 221.44659173135082,
              "spread_ticks": 1.0821111855800798,
              "log_notional": 12.892154236671708,
              "log_trade_count": 4.612672041355939
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.3776207487639298,
            "expected_duration_days": 3.446591446088339,
            "current_probability": 4.6311008572433725e-06,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 29.832039152350454,
            "volatility": {
              "median": 0.013125674729129939,
              "low": 0.013125674729129939,
              "high": 0.013125674729129939
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.13926575357159066,
            "jump_rate": 1.9643140340549128e-27,
            "risk_score": 0.698154625970748,
            "metrics": {
              "rolling_vol_10d": 0.038364686051238314,
              "downside_vol_10d": 0.01929859836719973,
              "drawdown_21d": 0.09691965013511163,
              "amihud_stress": 1.448731677165946,
              "spread_rel": 253.05031956724525,
              "spread_ticks": 1.1968117982881552,
              "log_notional": 12.294964205819785,
              "log_trade_count": 4.163186930372914
            }
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "pct_time": 0.2668350556066958,
            "expected_duration_days": 1.4109933288733318,
            "current_probability": 3.0009844546049692e-05,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 21.07996939292897,
            "volatility": {
              "median": 0.058382363196121626,
              "low": 0.058382363196121626,
              "high": 0.058382363196121626
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.42640753303228857,
            "jump_rate": 0.23719199524441395,
            "risk_score": 0.9383281887076913,
            "metrics": {
              "rolling_vol_10d": 0.03852563219875162,
              "downside_vol_10d": 0.021511925773241528,
              "drawdown_21d": 0.07767627687429177,
              "amihud_stress": 2.6247777818469626,
              "spread_rel": 243.47762162540957,
              "spread_ticks": 1.157206382258896,
              "log_notional": 12.995331184772468,
              "log_trade_count": 4.567357053387856
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.66843156539954,
              0.037210995827359365,
              0.29435743877310083
            ],
            [
              0.05583537559596054,
              0.7098582713843452,
              0.23430635301969435
            ],
            [
              0.34657084535118476,
              0.36214972726732153,
              0.2912794273814938
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              18.0,
              1.0,
              8.0
            ],
            [
              2.0,
              21.0,
              7.0
            ],
            [
              7.0,
              8.0,
              6.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 0.9999653590545967,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 4.6311008572433725e-06,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "probability": 3.0009844546049692e-05,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.11575252479937978,
          "current_score": 0.8114206229029761,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 3,
          "criterion": "bic_with_min_state_support",
          "bic": 3927.227552846587,
          "loglik": -1657.752426750602,
          "n_params": 140,
          "bic_delta_vs_next_best": 6.2570784396348245,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 3933.484631286222,
              "loglik": -1767.9324383558614,
              "n_params": 91,
              "converged": true,
              "iterations": 7,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 3933.484631286222,
                  "loglik": -1767.9324383558614,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 7
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 3933.4846312956724,
                  "loglik": -1767.9324383605867,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 7
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 3933.4846317638057,
                  "loglik": -1767.9324385946534,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 7
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 3927.227552846587,
              "loglik": -1657.752426750602,
              "n_params": 140,
              "converged": true,
              "iterations": 16,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 3927.227576932387,
                  "loglik": -1657.752438793502,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 19
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 3927.227552846587,
                  "loglik": -1657.752426750602,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 16
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 3960.564306156837,
                  "loglik": -1674.4208034057272,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 40
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
                "bic": 3927.227576932387,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 3927.227552846587,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 2,
                "bic": 3933.4846317638057,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "3": 2,
              "2": 1
            },
            "selected_state_share": 0.6666666666666666,
            "stable": false,
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
          "history_used_days": 79,
          "n_features": 22,
          "candidate_states": [
            2,
            3
          ],
          "selected_states": 3,
          "bic_delta_vs_next_best": 6.2570784396348245,
          "state_count_interpretation": "79 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 6.26 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 140,
            "observations_per_parameter": 0.5642857142857143,
            "parameter_pressure_label": "underidentified_pressure"
          },
          "state_occupancy": {
            "min_effective_days_required": 3.0,
            "min_effective_days_observed": 21.07996939292897,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 28.087991454720584,
                "pct_time": 0.35554419562937445,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 29.832039152350454,
                "pct_time": 0.3776207487639298,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Jump / Tail Shock",
                "effective_days": 21.07996939292897,
                "pct_time": 0.2668350556066958,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.66843156539954,
              0.7098582713843452,
              0.2912794273814938
            ],
            "expected_duration_days": [
              3.015968637681087,
              3.446591446088339,
              1.4109933288733318
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
                "bic": 3927.227576932387,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 3927.227552846587,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 2,
                "bic": 3933.4846317638057,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "3": 2,
              "2": 1
            },
            "selected_state_share": 0.6666666666666666,
            "stable": false,
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
              "jump_probability": 0.11574309287201046,
              "jump_rate": 1.1297425327179532e-27,
              "rolling_vol_10d": 0.026221436545041145,
              "downside_vol_10d": 0.014824780728150841,
              "drawdown_21d": 0.05123086615665645,
              "amihud_stress": 1.2501956819256994,
              "spread_rel": 221.44659173135082,
              "spread_ticks": 1.0821111855800798,
              "log_notional": 12.892154236671708,
              "log_trade_count": 4.612672041355939
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.698154625970748,
              "jump_probability": 0.13926575357159066,
              "jump_rate": 1.9643140340549128e-27,
              "rolling_vol_10d": 0.038364686051238314,
              "downside_vol_10d": 0.01929859836719973,
              "drawdown_21d": 0.09691965013511163,
              "amihud_stress": 1.448731677165946,
              "spread_rel": 253.05031956724525,
              "spread_ticks": 1.1968117982881552,
              "log_notional": 12.294964205819785,
              "log_trade_count": 4.163186930372914
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "risk_score": 0.9383281887076913,
              "jump_probability": 0.42640753303228857,
              "jump_rate": 0.23719199524441395,
              "rolling_vol_10d": 0.03852563219875162,
              "downside_vol_10d": 0.021511925773241528,
              "drawdown_21d": 0.07767627687429177,
              "amihud_stress": 2.6247777818469626,
              "spread_rel": 243.47762162540957,
              "spread_ticks": 1.157206382258896,
              "log_notional": 12.995331184772468,
              "log_trade_count": 4.567357053387856
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
            "trade_date": "2026-05-07",
            "state": 0,
            "probabilities": [
              0.9982491443160261,
              0.0017492173167655111,
              1.638367208317892e-06
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.979450542113602,
              0.020546357472064267,
              3.1004143337040595e-06
            ],
            "jump_probability": 0.13851661208222518,
            "jump_score": 0.6607256419362596
          },
          {
            "trade_date": "2026-05-08",
            "state": 0,
            "probabilities": [
              0.999999999695846,
              1.2823530583654354e-13,
              3.040258538863177e-10
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999994120958,
              1.5349691481814818e-12,
              5.863691403185799e-10
            ],
            "jump_probability": 0.15312251142057853,
            "jump_score": 0.7627672057495393
          },
          {
            "trade_date": "2026-05-11",
            "state": 0,
            "probabilities": [
              0.999999438234495,
              5.617655034911501e-07,
              1.5461140798353352e-15
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999932954485663,
              6.7045514306736186e-06,
              2.981258824147167e-15
            ],
            "jump_probability": 0.08479231528164409,
            "jump_score": 0.181351217094366
          },
          {
            "trade_date": "2026-05-12",
            "state": 0,
            "probabilities": [
              0.999986494673383,
              1.3492404627887462e-05,
              1.2921989178458248e-08
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9998384763001157,
              0.00016149878093371309,
              2.4918950562632788e-08
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 0,
            "probabilities": [
              0.9999999661963824,
              3.380361684110463e-08,
              7.680343964255906e-16
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999995953224616,
              4.0467753693878457e-07,
              1.4813078454629905e-15
            ],
            "jump_probability": 0.12001558716856794,
            "jump_score": 0.5175803763428214
          },
          {
            "trade_date": "2026-05-14",
            "state": 0,
            "probabilities": [
              0.9999999849962923,
              1.4354241006191544e-08,
              6.494667331900267e-10
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999813105374,
              1.8033132902449597e-08,
              6.563297833860209e-10
            ],
            "jump_probability": 0.17699088928045315,
            "jump_score": 0.9135921630507442
          },
          {
            "trade_date": "2026-05-15",
            "state": 2,
            "probabilities": [
              3.602055933559562e-10,
              1.1588040752136887e-13,
              0.9999999996396786
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              1.8681575675090372e-10,
              7.167849897484156e-13,
              0.9999999998124675
            ],
            "jump_probability": 0.4129553242945577,
            "jump_score": 1.9441204243737138
          },
          {
            "trade_date": "2026-05-18",
            "state": 0,
            "probabilities": [
              0.999686717204692,
              0.0003091163796563807,
              4.166415651556879e-06
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9996074748029445,
              0.00038831505842295004,
              4.210138632529736e-06
            ],
            "jump_probability": 0.15832255162199024,
            "jump_score": 0.7971630914048492
          },
          {
            "trade_date": "2026-05-19",
            "state": 2,
            "probabilities": [
              1.4633309685593345e-05,
              3.649616565105827e-11,
              0.9999853666538182
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              7.587327098798862e-06,
              2.264948801289761e-10,
              0.9999924124464064
            ],
            "jump_probability": 0.40299903138104465,
            "jump_score": 1.9082742804819266
          },
          {
            "trade_date": "2026-05-20",
            "state": 0,
            "probabilities": [
              0.9999653590545967,
              4.6311008572433725e-06,
              3.0009844546049692e-05
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999653590545967,
              4.6311008572433725e-06,
              3.0009844546049692e-05
            ],
            "jump_probability": 0.16051970670540766,
            "jump_score": 0.8114206229029761
          }
        ],
        "methodology": {
          "estimation_window_days": 79,
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
          "market_link_display": "1.37",
          "sector_link_display": "1.72",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.37% stock move in the same direction in this state. This is a point estimate from 79 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.72% stock move in the same direction in this state. This is a point estimate from 79 trading days.",
          "stock_persistence_display": "-0.99",
          "point_estimate_note": "Point estimate only because the current state has 79 trading days.",
          "history_limited_note": "Read is based on 79 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Calm / Liquid",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 51.3,
          "driver_share_display": "51.3%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 79 trading days relative to the 252-day target.",
          "history_days": 79,
          "history_limited": true,
          "volatility_label": "Calm / Liquid",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 11.6,
          "jump_risk_score": 0.81,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.66843156539954,
          "effective_days": 28.1,
          "persistence_note": "This state looks more persistent, with a typical run length of about 3.0 days.",
          "expected_duration_days": 3.0
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
          "period_label": "2026-05-04 to 2026-05-20",
          "n_obs": 13,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.09648560277559451,
          "share_sector": 0.35647935319521656,
          "share_company": 0.547035044029189,
          "share_market_display": "9.6%",
          "share_sector_display": "35.6%",
          "share_company_display": "54.7%",
          "dominant_share_display": "54.7%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 3,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9999653590545967,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.35554419562937445,
          0.3776207487639298,
          0.2668350556066958
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.35554419562937445,
            "expected_duration_days": 3.015968637681087,
            "current_probability": 0.9999653590545967,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 28.087991454720584,
            "volatility": {
              "median": 0.019931023005859874,
              "low": 0.019931023005859874,
              "high": 0.019931023005859874
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.11574309287201046,
            "jump_rate": 1.1297425327179532e-27,
            "risk_score": 0.0,
            "metrics": {
              "rolling_vol_10d": 0.026221436545041145,
              "downside_vol_10d": 0.014824780728150841,
              "drawdown_21d": 0.05123086615665645,
              "amihud_stress": 1.2501956819256994,
              "spread_rel": 221.44659173135082,
              "spread_ticks": 1.0821111855800798,
              "log_notional": 12.892154236671708,
              "log_trade_count": 4.612672041355939
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.3776207487639298,
            "expected_duration_days": 3.446591446088339,
            "current_probability": 4.6311008572433725e-06,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 29.832039152350454,
            "volatility": {
              "median": 0.013125674729129939,
              "low": 0.013125674729129939,
              "high": 0.013125674729129939
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.13926575357159066,
            "jump_rate": 1.9643140340549128e-27,
            "risk_score": 0.698154625970748,
            "metrics": {
              "rolling_vol_10d": 0.038364686051238314,
              "downside_vol_10d": 0.01929859836719973,
              "drawdown_21d": 0.09691965013511163,
              "amihud_stress": 1.448731677165946,
              "spread_rel": 253.05031956724525,
              "spread_ticks": 1.1968117982881552,
              "log_notional": 12.294964205819785,
              "log_trade_count": 4.163186930372914
            }
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "pct_time": 0.2668350556066958,
            "expected_duration_days": 1.4109933288733318,
            "current_probability": 3.0009844546049692e-05,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 21.07996939292897,
            "volatility": {
              "median": 0.058382363196121626,
              "low": 0.058382363196121626,
              "high": 0.058382363196121626
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.42640753303228857,
            "jump_rate": 0.23719199524441395,
            "risk_score": 0.9383281887076913,
            "metrics": {
              "rolling_vol_10d": 0.03852563219875162,
              "downside_vol_10d": 0.021511925773241528,
              "drawdown_21d": 0.07767627687429177,
              "amihud_stress": 2.6247777818469626,
              "spread_rel": 243.47762162540957,
              "spread_ticks": 1.157206382258896,
              "log_notional": 12.995331184772468,
              "log_trade_count": 4.567357053387856
            }
          }
        ],
        "transitions": [
          [
            0.66843156539954,
            0.037210995827359365,
            0.29435743877310083
          ],
          [
            0.05583537559596054,
            0.7098582713843452,
            0.23430635301969435
          ],
          [
            0.34657084535118476,
            0.36214972726732153,
            0.2912794273814938
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.235,
          "quantity": 230000.0,
          "value": 54050.0
        },
        {
          "level": 2,
          "price": 0.23,
          "quantity": 751100.0,
          "value": 172753.0
        },
        {
          "level": 3,
          "price": 0.225,
          "quantity": 600000.0,
          "value": 135000.0
        },
        {
          "level": 4,
          "price": 0.22,
          "quantity": 395400.0,
          "value": 86988.0
        },
        {
          "level": 5,
          "price": 0.215,
          "quantity": 445000.0,
          "value": 95675.0
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
          "quantity": 50000.0,
          "value": 10000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.24,
          "quantity": 346500.0,
          "value": 83160.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 370600.0,
          "value": 90797.0
        },
        {
          "level": 3,
          "price": 0.25,
          "quantity": 348700.0,
          "value": 87175.0
        },
        {
          "level": 4,
          "price": 0.255,
          "quantity": 174000.0,
          "value": 44370.0
        },
        {
          "level": 5,
          "price": 0.26,
          "quantity": 693300.0,
          "value": 180258.0
        },
        {
          "level": 6,
          "price": 0.265,
          "quantity": 940500.0,
          "value": 249232.5
        },
        {
          "level": 7,
          "price": 0.27,
          "quantity": 735700.0,
          "value": 198639.0
        },
        {
          "level": 8,
          "price": 0.275,
          "quantity": 160000.0,
          "value": 44000.0
        },
        {
          "level": 9,
          "price": 0.28,
          "quantity": 173800.0,
          "value": 48664.00000000001
        },
        {
          "level": 10,
          "price": 0.285,
          "quantity": 255000.0,
          "value": 72675.0
        },
        {
          "level": 11,
          "price": 0.29,
          "quantity": 316000.0,
          "value": 91640.0
        },
        {
          "level": 12,
          "price": 0.295,
          "quantity": 167200.0,
          "value": 49324.0
        },
        {
          "level": 13,
          "price": 0.3,
          "quantity": 3500000.0,
          "value": 1050000.0
        },
        {
          "level": 14,
          "price": 0.305,
          "quantity": 222000.0,
          "value": 67710.0
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
          "quantity": 136000.0,
          "value": 47600.0
        },
        {
          "level": 19,
          "price": 0.355,
          "quantity": 10000.0,
          "value": 3550.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-20 08:59:58.377600000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2375,
        "spread_pct": 0.02105263157894739,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 555516.0,
        "ask_depth_notional_displayed": 2430954.5,
        "bid_depth_notional_top10": 555516.0,
        "ask_depth_notional_top10": 2430954.5,
        "bid_ask_depth_ratio": 0.2285
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 119,
        "history_limited": true,
        "trade_days_used": 81,
        "n_trades_used": 12478,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-05-20",
        "window_label": "Jan 22, 2026 to May 20, 2026",
        "window_short_label": "Jan 22-May 20",
        "trade_days_label": "81 trading days",
        "trade_count_label": "12,478 trades",
        "window_detail_label": "81 trading days • 12,478 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to May 20, 2026 (81 trading days • 12,478 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10939.5,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.97,
            "pct_of_adv": 2.92
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14500.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.61,
            "pct_of_adv": 3.88
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 165768.58,
            "impact_pct": -0.024814,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 29.84,
            "pct_of_adv": 44.32
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-20",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8146327279925059584",
            "timestamp": "2026-05-19 22:59:01.737300000",
            "local_timestamp": "2026-05-20 06:59:01",
            "posted_price": 0.3,
            "size_shares": 3284000.0,
            "notional": 985200.0,
            "impact_pct": -0.055515999999999996,
            "filled_pct": 56.4,
            "levels_consumed": 7,
            "pct_of_bid_depth": 177.35,
            "price_vs_mid_pct": 26.316,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8151077170159746048",
            "timestamp": "2026-05-20 06:22:37.542700000",
            "local_timestamp": "2026-05-20 14:22:37",
            "posted_price": 0.26,
            "size_shares": 384500.0,
            "notional": 99970.0,
            "impact_pct": -0.020309,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 18.0,
            "price_vs_mid_pct": 9.474,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8149098049227101184",
            "timestamp": "2026-05-19 22:59:01.737300000",
            "local_timestamp": "2026-05-20 06:59:01",
            "posted_price": 0.27,
            "size_shares": 250000.0,
            "notional": 67500.0,
            "impact_pct": -0.014794,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 12.15,
            "price_vs_mid_pct": 13.684,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-20",
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
            "bid_depth_notional": 501098.0,
            "ask_depth_notional": 2345675.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 489348.0,
            "ask_depth_notional": 2357675.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 466105.0,
            "ask_depth_notional": 2353615.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 518741.0,
            "ask_depth_notional": 2326075.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 537541.0,
            "ask_depth_notional": 2326075.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 535740.0,
            "ask_depth_notional": 2330421.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 438622.5,
            "ask_depth_notional": 2376852.5,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 476032.5,
            "ask_depth_notional": 2386873.0,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 503448.5,
            "ask_depth_notional": 2486843.0,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 508241.5,
            "ask_depth_notional": 2449371.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 520931.5,
            "ask_depth_notional": 2449371.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 546631.5,
            "ask_depth_notional": 2456821.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 536086.0,
            "ask_depth_notional": 2465683.5,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 555516.0,
            "ask_depth_notional": 2430954.5,
            "mid_price": 0.2375
          }
        ],
        "summary": {
          "median_spread_pct": 0.02105263157894739,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 513491.25,
          "median_ask_depth_notional": 2381862.75,
          "tightest_bucket": "09:00",
          "widest_bucket": "13:00",
          "deepest_bid_bucket": "16:30",
          "thinnest_bid_bucket": "13:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 13.4,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 104.4
        },
        {
          "ticker": "J03",
          "pct": 335.8
        },
        {
          "ticker": "42F",
          "pct": 767.3
        },
        {
          "ticker": "NXR",
          "pct": 15100.0
        },
        {
          "ticker": "U77",
          "pct": 24762.6
        },
        {
          "ticker": "LVR",
          "pct": 27777.8
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
          "n_trades": 24,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-20",
          "last_trade_date": "2026-05-20",
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
            "retail_pct": 0.75,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.08333333333333333,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.14639860520867387,
            "mixed_qty_pct": 0.26735316552250193,
            "instit_qty_pct": 0.5862482292688243,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.14640256328813112,
            "mixed_notional_pct": 0.2673519258278637,
            "instit_notional_pct": 0.5862455108840052,
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
              "retail": 18,
              "mixed": 4,
              "institutional": 2,
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
            "avg": 17971.708333333332,
            "median": 4582.5
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
              "retail_pct": 0.75,
              "mixed_pct": 0.16666666666666666,
              "instit_pct": 0.08333333333333333,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.14639860520867387,
              "mixed_qty_pct": 0.26735316552250193,
              "instit_qty_pct": 0.5862482292688243,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.14640256328813112,
              "mixed_notional_pct": 0.2673519258278637,
              "instit_notional_pct": 0.5862455108840052,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 17971.708333333332,
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
              "retail_pct": 0.9933333333333333,
              "mixed_pct": 0.006666666666666667,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8930643127364439,
              "mixed_qty_pct": 0.10693568726355612,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8934191072467481,
              "mixed_notional_pct": 0.10658089275325189,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1249.02,
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
              "retail_pct": 0.8725490196078431,
              "mixed_pct": 0.12745098039215685,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5426698743126472,
              "mixed_qty_pct": 0.4573301256873527,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5412499838708984,
              "mixed_notional_pct": 0.4587500161291016,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5698.504901960784,
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
              "retail_pct": 0.8571428571428571,
              "mixed_pct": 0.14285714285714285,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2504684572142411,
              "mixed_qty_pct": 0.749531542785759,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.25048343818237234,
              "mixed_notional_pct": 0.7495165618176276,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2858.9857142857145,
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
          "n_trades": 167,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-05-14",
          "last_trade_date": "2026-05-20",
          "period_days": 6,
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
            "retail_pct": 0.7485029940119761,
            "mixed_pct": 0.2215568862275449,
            "instit_pct": 0.029940119760479042,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2284417705555211,
            "mixed_qty_pct": 0.5057681572908268,
            "instit_qty_pct": 0.26579007215365213,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2314002575274848,
            "mixed_notional_pct": 0.5086884110118551,
            "instit_notional_pct": 0.25991133146066003,
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
              "retail": 125,
              "mixed": 37,
              "institutional": 5,
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
            "avg": 14295.31736526946,
            "median": 5300.0
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
              "retail_pct": 0.7485029940119761,
              "mixed_pct": 0.2215568862275449,
              "instit_pct": 0.029940119760479042,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2284417705555211,
              "mixed_qty_pct": 0.5057681572908268,
              "instit_qty_pct": 0.26579007215365213,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2314002575274848,
              "mixed_notional_pct": 0.5086884110118551,
              "instit_notional_pct": 0.25991133146066003,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 14295.31736526946,
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
              "avg_trade_size": 1165.2578947368422,
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
              "avg_trade_size": 2895.0,
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
              "retail_pct": 0.9545844044558698,
              "mixed_pct": 0.044558697514995714,
              "instit_pct": 0.000856898029134533,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.47262247838616717,
              "mixed_qty_pct": 0.5005542008423853,
              "instit_qty_pct": 0.026823320771447574,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4711379657271576,
              "mixed_notional_pct": 0.5020839679698602,
              "instit_notional_pct": 0.0267780663029822,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2601.9837189374466,
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
              "retail_pct": 0.9484915378955114,
              "mixed_pct": 0.051508462104488596,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.44339910527375814,
              "mixed_qty_pct": 0.5566008947262419,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4396801967985046,
              "mixed_notional_pct": 0.5603198032014954,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2090.6253127299483,
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
              "retail_pct": 0.9473684210526315,
              "mixed_pct": 0.05263157894736842,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7419354838709677,
              "mixed_qty_pct": 0.25806451612903225,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7430767205027988,
              "mixed_notional_pct": 0.2569232794972011,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8194.131578947368,
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
              "retail_pct": 0.8095238095238095,
              "mixed_pct": 0.19047619047619047,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.466462577726855,
              "mixed_qty_pct": 0.533537422273145,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.463484749287465,
              "mixed_notional_pct": 0.536515250712535,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7070.942063492063,
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
          "n_trades": 894,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-21",
          "last_trade_date": "2026-05-20",
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
            "retail_pct": 0.814317673378076,
            "mixed_pct": 0.16331096196868009,
            "instit_pct": 0.02237136465324385,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2712172712305486,
            "mixed_qty_pct": 0.48302883849381273,
            "instit_qty_pct": 0.24575389027563865,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27075441249364846,
            "mixed_notional_pct": 0.4828224564876792,
            "instit_notional_pct": 0.24642313101867233,
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
              "retail": 728,
              "mixed": 146,
              "institutional": 20,
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
            "avg": 10608.414988814318,
            "median": 3160.0
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
              "retail_pct": 0.814317673378076,
              "mixed_pct": 0.16331096196868009,
              "instit_pct": 0.02237136465324385,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2712172712305486,
              "mixed_qty_pct": 0.48302883849381273,
              "instit_qty_pct": 0.24575389027563865,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.27075441249364846,
              "mixed_notional_pct": 0.4828224564876792,
              "instit_notional_pct": 0.24642313101867233,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10608.414988814318,
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
              "avg_trade_size": 359.43730158730165,
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
              "avg_trade_size": 460.62777777777774,
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
              "retail_pct": 0.989010989010989,
              "mixed_pct": 0.01098901098901099,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8778588206205958,
              "mixed_qty_pct": 0.12214117937940414,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8785035352926892,
              "mixed_notional_pct": 0.12149646470731074,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1760.4274725274724,
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
              "retail_qty_pct": 0.86919555264879,
              "mixed_qty_pct": 0.13080444735120994,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.867523053221497,
              "mixed_notional_pct": 0.13247694677850302,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2442.9636363636364,
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
              "retail_pct": 0.9427470017133067,
              "mixed_pct": 0.05296973158195317,
              "instit_pct": 0.004283266704740148,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.37953618257978544,
              "mixed_qty_pct": 0.47706609784828374,
              "instit_qty_pct": 0.14339771957193082,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3803759171078278,
              "mixed_notional_pct": 0.4752181280952435,
              "instit_notional_pct": 0.14440595479692866,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3154.8695745288405,
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
              "retail_pct": 0.92829754601227,
              "mixed_pct": 0.07170245398773006,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5466260359660198,
              "mixed_qty_pct": 0.4533739640339802,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.542270639067142,
              "mixed_notional_pct": 0.45772936093285804,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3514.4550996932517,
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
              "retail_pct": 0.8620689655172413,
              "mixed_pct": 0.13154533844189017,
              "instit_pct": 0.006385696040868455,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4380026521038598,
              "mixed_qty_pct": 0.46551038740678424,
              "instit_qty_pct": 0.09648696048935594,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.43980960240992395,
              "mixed_notional_pct": 0.4620445858973498,
              "instit_notional_pct": 0.09814581169272626,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6296.993103448277,
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
          "n_trades": 2889,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-19",
          "last_trade_date": "2026-05-20",
          "period_days": 90,
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
            "retail_pct": 0.8695050190377294,
            "mixed_pct": 0.11768778123918311,
            "instit_pct": 0.012807199723087574,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34499806224408985,
            "mixed_qty_pct": 0.4677709067012654,
            "instit_qty_pct": 0.18723103105464473,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3410775186634009,
            "mixed_notional_pct": 0.46912217821508984,
            "instit_notional_pct": 0.18980030312150925,
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
              "retail": 2512,
              "mixed": 340,
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
            "avg": 7501.729664243683,
            "median": 2250.0
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
              "retail_pct": 0.8695050190377294,
              "mixed_pct": 0.11768778123918311,
              "instit_pct": 0.012807199723087574,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.34499806224408985,
              "mixed_qty_pct": 0.4677709067012654,
              "instit_qty_pct": 0.18723103105464473,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3410775186634009,
              "mixed_notional_pct": 0.46912217821508984,
              "instit_notional_pct": 0.18980030312150925,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7501.729664243683,
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
              "avg_trade_size": 421.9048109965636,
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
              "retail_pct": 0.9929203539823008,
              "mixed_pct": 0.007079646017699115,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8867461220578547,
              "mixed_qty_pct": 0.1132538779421453,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8868254081467053,
              "mixed_notional_pct": 0.11317459185329476,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1198.564778761062,
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
              "retail_pct": 0.9814814814814815,
              "mixed_pct": 0.009259259259259259,
              "instit_pct": 0.009259259259259259,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.39544807965860596,
              "mixed_qty_pct": 0.03556187766714083,
              "instit_qty_pct": 0.5689900426742532,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.40235671927881855,
              "mixed_notional_pct": 0.037825524096277305,
              "instit_notional_pct": 0.5598177566249042,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9791.546296296296,
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
              "retail_pct": 0.9320130062075082,
              "mixed_pct": 0.06798699379249187,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.599711021709333,
              "mixed_qty_pct": 0.400288978290667,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5831944188612752,
              "mixed_notional_pct": 0.4168055811387249,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3630.457493349099,
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
              "retail_qty_pct": 0.5778638755565836,
              "mixed_qty_pct": 0.4221361244434164,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5823219647151907,
              "mixed_notional_pct": 0.4176780352848093,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4089.5785714285716,
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
              "retail_pct": 0.9270310192023634,
              "mixed_pct": 0.06629246676514032,
              "instit_pct": 0.0066765140324963074,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3736581579932947,
              "mixed_qty_pct": 0.4570076603629986,
              "instit_qty_pct": 0.16933418164370664,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.37366395681227077,
              "mixed_notional_pct": 0.45636546033283504,
              "instit_notional_pct": 0.1699705828548942,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4028.3886262924666,
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
              "retail_pct": 0.8912300683371298,
              "mixed_pct": 0.10250569476082004,
              "instit_pct": 0.006264236902050114,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.45870780003207395,
              "mixed_qty_pct": 0.4169019838156703,
              "instit_qty_pct": 0.12439021615225579,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.45288915329603563,
              "mixed_notional_pct": 0.4214531657570856,
              "instit_notional_pct": 0.1256576809468788,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5670.388781321184,
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
      "n_trades": 2889,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-02-19",
      "last_trade_date": "2026-05-20",
      "period_days": 90,
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
        "retail_pct": 0.8695050190377294,
        "mixed_pct": 0.11768778123918311,
        "instit_pct": 0.012807199723087574,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.3410775186634009,
        "mixed_notional_pct": 0.46912217821508984,
        "instit_notional_pct": 0.18980030312150925,
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
        "avg": 7501.729664243683,
        "median": 2250.0
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
            "n_trades": 501,
            "n_runs": 0,
            "retail_pct": 0.7904191616766467,
            "mixed_pct": 0.18562874251497005,
            "instit_pct": 0.023952095808383235,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 12081.279441117764,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2675435115842936,
            "mixed_qty_pct": 0.5006035444137683,
            "instit_qty_pct": 0.23185294400193804,
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
            "total_quantity": 23941900.0
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
          "retail_pct": 0.8695050190377294,
          "mixed_pct": 0.11768778123918311,
          "instit_pct": 0.012807199723087574,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.34499806224408985,
          "mixed_qty_pct": 0.4677709067012654,
          "instit_qty_pct": 0.18723103105464473,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3410775186634009,
          "mixed_notional_pct": 0.46912217821508984,
          "instit_notional_pct": 0.18980030312150925,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 7501.729664243683,
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
          "avg_trade_size": 421.9048109965636,
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
          "retail_pct": 0.9929203539823008,
          "mixed_pct": 0.007079646017699115,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8867461220578547,
          "mixed_qty_pct": 0.1132538779421453,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8868254081467053,
          "mixed_notional_pct": 0.11317459185329476,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1198.564778761062,
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
          "retail_pct": 0.9814814814814815,
          "mixed_pct": 0.009259259259259259,
          "instit_pct": 0.009259259259259259,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.39544807965860596,
          "mixed_qty_pct": 0.03556187766714083,
          "instit_qty_pct": 0.5689900426742532,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.40235671927881855,
          "mixed_notional_pct": 0.037825524096277305,
          "instit_notional_pct": 0.5598177566249042,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 9791.546296296296,
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
          "retail_pct": 0.9320130062075082,
          "mixed_pct": 0.06798699379249187,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.599711021709333,
          "mixed_qty_pct": 0.400288978290667,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5831944188612752,
          "mixed_notional_pct": 0.4168055811387249,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3630.457493349099,
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
          "retail_qty_pct": 0.5778638755565836,
          "mixed_qty_pct": 0.4221361244434164,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5823219647151907,
          "mixed_notional_pct": 0.4176780352848093,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4089.5785714285716,
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
          "retail_pct": 0.9270310192023634,
          "mixed_pct": 0.06629246676514032,
          "instit_pct": 0.0066765140324963074,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3736581579932947,
          "mixed_qty_pct": 0.4570076603629986,
          "instit_qty_pct": 0.16933418164370664,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.37366395681227077,
          "mixed_notional_pct": 0.45636546033283504,
          "instit_notional_pct": 0.1699705828548942,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4028.3886262924666,
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
          "retail_pct": 0.8912300683371298,
          "mixed_pct": 0.10250569476082004,
          "instit_pct": 0.006264236902050114,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.45870780003207395,
          "mixed_qty_pct": 0.4169019838156703,
          "instit_qty_pct": 0.12439021615225579,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.45288915329603563,
          "mixed_notional_pct": 0.4214531657570856,
          "instit_notional_pct": 0.1256576809468788,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5670.388781321184,
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
            "retail_pct": 0.75,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.08333333333333333,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.14639860520867387,
            "mixed_qty_pct": 0.26735316552250193,
            "instit_qty_pct": 0.5862482292688243,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.14640256328813112,
            "mixed_notional_pct": 0.2673519258278637,
            "instit_notional_pct": 0.5862455108840052,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 17971.708333333332,
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
            "retail_pct": 0.9933333333333333,
            "mixed_pct": 0.006666666666666667,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8930643127364439,
            "mixed_qty_pct": 0.10693568726355612,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8934191072467481,
            "mixed_notional_pct": 0.10658089275325189,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1249.02,
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
            "retail_pct": 0.8725490196078431,
            "mixed_pct": 0.12745098039215685,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5426698743126472,
            "mixed_qty_pct": 0.4573301256873527,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5412499838708984,
            "mixed_notional_pct": 0.4587500161291016,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5698.504901960784,
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
            "retail_pct": 0.8571428571428571,
            "mixed_pct": 0.14285714285714285,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2504684572142411,
            "mixed_qty_pct": 0.749531542785759,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.25048343818237234,
            "mixed_notional_pct": 0.7495165618176276,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2858.9857142857145,
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
            "retail_pct": 0.7485029940119761,
            "mixed_pct": 0.2215568862275449,
            "instit_pct": 0.029940119760479042,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2284417705555211,
            "mixed_qty_pct": 0.5057681572908268,
            "instit_qty_pct": 0.26579007215365213,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2314002575274848,
            "mixed_notional_pct": 0.5086884110118551,
            "instit_notional_pct": 0.25991133146066003,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 14295.31736526946,
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
            "avg_trade_size": 1165.2578947368422,
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
            "avg_trade_size": 2895.0,
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
            "retail_pct": 0.9545844044558698,
            "mixed_pct": 0.044558697514995714,
            "instit_pct": 0.000856898029134533,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.47262247838616717,
            "mixed_qty_pct": 0.5005542008423853,
            "instit_qty_pct": 0.026823320771447574,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4711379657271576,
            "mixed_notional_pct": 0.5020839679698602,
            "instit_notional_pct": 0.0267780663029822,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2601.9837189374466,
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
            "retail_pct": 0.9484915378955114,
            "mixed_pct": 0.051508462104488596,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.44339910527375814,
            "mixed_qty_pct": 0.5566008947262419,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4396801967985046,
            "mixed_notional_pct": 0.5603198032014954,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2090.6253127299483,
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
            "retail_pct": 0.9473684210526315,
            "mixed_pct": 0.05263157894736842,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7419354838709677,
            "mixed_qty_pct": 0.25806451612903225,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7430767205027988,
            "mixed_notional_pct": 0.2569232794972011,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8194.131578947368,
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
            "retail_pct": 0.8095238095238095,
            "mixed_pct": 0.19047619047619047,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.466462577726855,
            "mixed_qty_pct": 0.533537422273145,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.463484749287465,
            "mixed_notional_pct": 0.536515250712535,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7070.942063492063,
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
            "retail_pct": 0.814317673378076,
            "mixed_pct": 0.16331096196868009,
            "instit_pct": 0.02237136465324385,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2712172712305486,
            "mixed_qty_pct": 0.48302883849381273,
            "instit_qty_pct": 0.24575389027563865,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27075441249364846,
            "mixed_notional_pct": 0.4828224564876792,
            "instit_notional_pct": 0.24642313101867233,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10608.414988814318,
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
            "avg_trade_size": 359.43730158730165,
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
            "avg_trade_size": 460.62777777777774,
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
            "retail_pct": 0.989010989010989,
            "mixed_pct": 0.01098901098901099,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8778588206205958,
            "mixed_qty_pct": 0.12214117937940414,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8785035352926892,
            "mixed_notional_pct": 0.12149646470731074,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1760.4274725274724,
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
            "retail_qty_pct": 0.86919555264879,
            "mixed_qty_pct": 0.13080444735120994,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.867523053221497,
            "mixed_notional_pct": 0.13247694677850302,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2442.9636363636364,
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
            "retail_pct": 0.9427470017133067,
            "mixed_pct": 0.05296973158195317,
            "instit_pct": 0.004283266704740148,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.37953618257978544,
            "mixed_qty_pct": 0.47706609784828374,
            "instit_qty_pct": 0.14339771957193082,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3803759171078278,
            "mixed_notional_pct": 0.4752181280952435,
            "instit_notional_pct": 0.14440595479692866,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3154.8695745288405,
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
            "retail_pct": 0.92829754601227,
            "mixed_pct": 0.07170245398773006,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5466260359660198,
            "mixed_qty_pct": 0.4533739640339802,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.542270639067142,
            "mixed_notional_pct": 0.45772936093285804,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3514.4550996932517,
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
            "retail_pct": 0.8620689655172413,
            "mixed_pct": 0.13154533844189017,
            "instit_pct": 0.006385696040868455,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4380026521038598,
            "mixed_qty_pct": 0.46551038740678424,
            "instit_qty_pct": 0.09648696048935594,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.43980960240992395,
            "mixed_notional_pct": 0.4620445858973498,
            "instit_notional_pct": 0.09814581169272626,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6296.993103448277,
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
            "retail_pct": 0.8695050190377294,
            "mixed_pct": 0.11768778123918311,
            "instit_pct": 0.012807199723087574,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34499806224408985,
            "mixed_qty_pct": 0.4677709067012654,
            "instit_qty_pct": 0.18723103105464473,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3410775186634009,
            "mixed_notional_pct": 0.46912217821508984,
            "instit_notional_pct": 0.18980030312150925,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7501.729664243683,
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
            "avg_trade_size": 421.9048109965636,
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
            "retail_pct": 0.9929203539823008,
            "mixed_pct": 0.007079646017699115,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8867461220578547,
            "mixed_qty_pct": 0.1132538779421453,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8868254081467053,
            "mixed_notional_pct": 0.11317459185329476,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1198.564778761062,
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
            "retail_pct": 0.9814814814814815,
            "mixed_pct": 0.009259259259259259,
            "instit_pct": 0.009259259259259259,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.39544807965860596,
            "mixed_qty_pct": 0.03556187766714083,
            "instit_qty_pct": 0.5689900426742532,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.40235671927881855,
            "mixed_notional_pct": 0.037825524096277305,
            "instit_notional_pct": 0.5598177566249042,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9791.546296296296,
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
            "retail_pct": 0.9320130062075082,
            "mixed_pct": 0.06798699379249187,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.599711021709333,
            "mixed_qty_pct": 0.400288978290667,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5831944188612752,
            "mixed_notional_pct": 0.4168055811387249,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3630.457493349099,
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
            "retail_qty_pct": 0.5778638755565836,
            "mixed_qty_pct": 0.4221361244434164,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5823219647151907,
            "mixed_notional_pct": 0.4176780352848093,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4089.5785714285716,
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
            "retail_pct": 0.9270310192023634,
            "mixed_pct": 0.06629246676514032,
            "instit_pct": 0.0066765140324963074,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3736581579932947,
            "mixed_qty_pct": 0.4570076603629986,
            "instit_qty_pct": 0.16933418164370664,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.37366395681227077,
            "mixed_notional_pct": 0.45636546033283504,
            "instit_notional_pct": 0.1699705828548942,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4028.3886262924666,
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
            "retail_pct": 0.8912300683371298,
            "mixed_pct": 0.10250569476082004,
            "instit_pct": 0.006264236902050114,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.45870780003207395,
            "mixed_qty_pct": 0.4169019838156703,
            "instit_qty_pct": 0.12439021615225579,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.45288915329603563,
            "mixed_notional_pct": 0.4214531657570856,
            "instit_notional_pct": 0.1256576809468788,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5670.388781321184,
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
      "total_trades": 7000,
      "price_moving_trades": 1369,
      "pct_price_moving": 19.557142857142857,
      "all_movers": {
        "count": 1369,
        "avg_size": 7215.939006574142,
        "median_size": 980.0,
        "retail_count": 1163,
        "mixed_count": 187,
        "institutional_count": 19,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 84.95252008765523,
        "mixed_pct": 13.659605551497444,
        "instit_pct": 1.3878743608473338,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 684,
        "avg_size": 5248.25730994152,
        "median_size": 75.0,
        "retail_count": 605,
        "mixed_count": 73,
        "institutional_count": 6,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.45029239766082,
        "mixed_pct": 10.67251461988304,
        "instit_pct": 0.8771929824561403,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 685,
        "avg_size": 9180.748175182482,
        "median_size": 2450.0,
        "retail_count": 558,
        "mixed_count": 114,
        "institutional_count": 13,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.45985401459855,
        "mixed_pct": 16.642335766423358,
        "instit_pct": 1.897810218978102,
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
        "n_days_short_data": 64,
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
            "avg_short_ratio": 0.0024051263187419665,
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
          "avg_short_ratio": 0.00046958263111466006,
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
          "avg_short_ratio": 0.006073788297512149,
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
          "opening": 0.002065707575853428,
          "continuous": 0.9975125437940765,
          "closing": 0.00042174863007007484,
          "auctions": 0.0024874562059235025,
          "other": 0.0
        },
        "1W": {
          "opening": 0.021046482476413313,
          "continuous": 0.9724041375529604,
          "closing": 0.006475182201895839,
          "auctions": 0.02759586244703956,
          "other": 0.0
        },
        "1M": {
          "opening": 0.03297134563361885,
          "continuous": 0.9399666970696742,
          "closing": 0.017971129997968675,
          "auctions": 0.06003330293032586,
          "other": 0.0
        },
        "3M": {
          "opening": 0.02253587842655827,
          "continuous": 0.9603245884038417,
          "closing": 0.01140079024513794,
          "auctions": 0.039675411596158325,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.4266595914670157,
        "1W": 0.3291211570059668,
        "1M": 0.32668710627631864,
        "3M": 0.3055092237408745
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0174
        },
        {
          "time": "09:00",
          "avg_share": 0.1277
        },
        {
          "time": "09:30",
          "avg_share": 0.1069
        },
        {
          "time": "10:00",
          "avg_share": 0.0841
        },
        {
          "time": "10:30",
          "avg_share": 0.0701
        },
        {
          "time": "11:00",
          "avg_share": 0.0453
        },
        {
          "time": "11:30",
          "avg_share": 0.0616
        },
        {
          "time": "12:00",
          "avg_share": 0.0023
        },
        {
          "time": "12:30",
          "avg_share": 0.0023
        },
        {
          "time": "13:00",
          "avg_share": 0.0801
        },
        {
          "time": "13:30",
          "avg_share": 0.0556
        },
        {
          "time": "14:00",
          "avg_share": 0.0569
        },
        {
          "time": "14:30",
          "avg_share": 0.0591
        },
        {
          "time": "15:00",
          "avg_share": 0.0555
        },
        {
          "time": "15:30",
          "avg_share": 0.0468
        },
        {
          "time": "16:00",
          "avg_share": 0.0412
        },
        {
          "time": "16:30",
          "avg_share": 0.0587
        },
        {
          "time": "17:00",
          "avg_share": 0.0282
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.143484708507983,
          "hhi": 0.27290229825307194,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 14.7916889411597,
          "hhi": 0.6958445833335156,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 11.686846680837736,
          "hhi": 0.8280716951498073,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 3.971689228851626,
          "hhi": 0.5583386067706197,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 4.626811012771225,
          "hhi": 0.5263524105627593,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.3225995080366393,
          "hhi": 0.7618821717851404,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 9.896206861827148,
          "hhi": 0.46250495771883116,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 3.0711681143659875,
          "hhi": 0.49364350899722176,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.152704111724362,
          "hhi": 0.18808621163504927,
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
