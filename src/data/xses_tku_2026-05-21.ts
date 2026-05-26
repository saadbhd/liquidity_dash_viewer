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
      "marketCap": 134006694.925,
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
      "marketCap": 239940000.0,
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
    "asof_date": "2026-05-21",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "134.0M",
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
          "score_pca": 70.32374100719424,
          "score_pca_percentile": 70.32374100719424,
          "rank_pca": 166,
          "total": 556,
          "adv_notional_sgd": 201583.0,
          "adv_volume_shares": 857800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0015042755894608152,
          "votes": 30.0,
          "trades": 30.0,
          "spread_pct": 0.02196361252253731,
          "spread_ticks": 1.046875,
          "amihud": 1.0334866200688238e-07,
          "volatility": 0.39729138362738226
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.515950020858109,
          "loadings": {
            "log_adv": 0.5538980875634414,
            "log_trades": 0.5062909697128168,
            "log_turnover": 0.5167727741948217,
            "neg_spread": 0.36014279037202845,
            "neg_amihud": 0.0483033329944251,
            "neg_vol": -0.1943610583334144
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
          "peer_median_adv": 29.700000000000003,
          "peer_median_score_pca": 24.46043165467626,
          "peer_median_trades": 0.5,
          "peer_median_volatility": 0.0,
          "peer_median_spread_pct": 0.0435775982167735,
          "peer_median_spread_ticks": 2.415859564164649,
          "peer_median_amihud": 2.141649787789272e-08,
          "peer_median_turnover_ratio": 4.6457613188709336e-07,
          "target_vs_peer": {
            "score_pca_delta": 45.86,
            "adv_delta_pct": 678630.6,
            "trades_delta_pct": 5900.0,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": 49.6,
            "spread_ticks_delta_pct": -56.67,
            "amihud_delta_pct": -382.57,
            "turnover_ratio_delta_pct": 323695.28
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 70.32374100719424,
            "rank_pca": 166,
            "adv": 201583.0,
            "trades": 30.0,
            "volatility": 0.39729138362738226,
            "spread_pct": 0.02196361252253731,
            "spread_ticks": 1.046875,
            "amihud": 1.0334866200688238e-07,
            "turnover_ratio": 0.0015042755894608152,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.9784172661870503,
            "rank_pca": 546,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.7072243346007605,
            "spread_ticks": 31.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.6079136690647484,
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
            "score_pca": 26.798561151079138,
            "rank_pca": 408,
            "adv": 59.400000000000006,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.018348623853211024,
            "spread_ticks": 3.6,
            "amihud": 0.0,
            "turnover_ratio": 9.291522637741867e-07,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 75.35971223021582,
            "rank_pca": 138,
            "adv": 159899.4,
            "trades": 67.0,
            "volatility": 0.6812621482457916,
            "spread_pct": 0.04029484029484029,
            "spread_ticks": 1.1495327102803738,
            "amihud": 6.253932159845502e-07,
            "turnover_ratio": 0.010125998042250051,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 22.12230215827338,
            "rank_pca": 434,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.0468603561387067,
            "spread_ticks": 3.5714285714285716,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 64.20863309352518,
            "rank_pca": 200,
            "adv": 42365.0,
            "trades": 21.0,
            "volatility": 0.3739151228838485,
            "spread_pct": 0.0392156862745097,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0020664722894980126,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 21.402877697841728,
            "rank_pca": 438,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.05323193916349816,
            "spread_ticks": 9.333333333333334,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 81.29496402877699,
            "rank_pca": 105,
            "adv": 491505.0,
            "trades": 429.0,
            "volatility": 0.25289582490582113,
            "spread_pct": 0.006715197569369371,
            "spread_ticks": 1.2602905569007263,
            "amihud": 4.283299575578544e-08,
            "turnover_ratio": 0.007827472726034011,
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
              "mean": 0.2639507977918531,
              "median": 0.1447812643997891,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8614217354412144,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4422986.167986185,
              "median": 15508.099999999999,
              "min": 0.0,
              "max": 555118410.0,
              "p5": 0.0,
              "p95": 17892852.0,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10465659197501,
              "median": 0.03126301048408462,
              "min": 0.0003314123276262361,
              "max": 1.7037037037037037,
              "p5": 0.003324644150862077,
              "p95": 0.4540999820176206,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005857039753954105,
              "median": 0.00030355537564165727,
              "min": 0.0,
              "max": 1.6478808252587174,
              "p5": 0.0,
              "p95": 0.015273092879172018,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.663154613760724e-05,
              "median": 1.3969128435694071e-08,
              "min": 0.0,
              "max": 0.01685515441496303,
              "p5": 0.0,
              "p95": 5.5118645048055765e-05,
              "count": 417
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 586.1942446043165,
              "median": 8.0,
              "min": 0.0,
              "max": 32345.0,
              "p5": 0.0,
              "p95": 3761.75,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.09909100962038044,
              "median": 0.0,
              "min": 0.0,
              "max": 0.39729138362738226,
              "p5": 0.0,
              "p95": 0.34675293807483576,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 850074.9250000002,
              "median": 29.700000000000003,
              "min": 0.0,
              "max": 6107452.000000001,
              "p5": 0.0,
              "p95": 4141870.549999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.19029948034960475,
              "median": 0.034411984330622,
              "min": 0.0013851122820883494,
              "max": 0.7072243346007605,
              "p5": 0.003250642132636707,
              "p95": 0.6930291508238277,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001680421057121881,
              "median": 4.6457613188709336e-07,
              "min": 0.0,
              "max": 0.007827472726034011,
              "p5": 0.0,
              "p95": 0.006526599118147862,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.702083372592308e-08,
              "median": 2.2367336448404974e-08,
              "min": 0.0,
              "max": 1.0334866200688238e-07,
              "p5": 2.852515711536765e-10,
              "p95": 9.427131206921782e-08,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 293.0,
              "median": 0.5,
              "min": 0.0,
              "max": 1884.0,
              "p5": 0.0,
              "p95": 1374.749999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 86728.6,
              "median": 29.700000000000003,
              "min": 0.0,
              "max": 491505.0,
              "p5": 0.0,
              "p95": 375443.0399999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 64.75,
              "median": 0.5,
              "min": 0.0,
              "max": 429.0,
              "p5": 0.0,
              "p95": 302.29999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.16350913700443265,
              "median": 0.0,
              "min": 0.0,
              "max": 0.6812621482457916,
              "p5": 0.0,
              "p95": 0.5736906893691114,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1973197055701953,
              "median": 0.0435775982167735,
              "min": 0.006715197569369371,
              "max": 0.7072243346007605,
              "p5": 0.01078689676871395,
              "p95": 0.6930291508238277,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.489323146492876,
              "median": 2.415859564164649,
              "min": 1.0,
              "max": 31.0,
              "p5": 1.0,
              "p95": 23.416666666666657,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025026090262557314,
              "median": 4.6457613188709336e-07,
              "min": 0.0,
              "max": 0.010125998042250051,
              "p5": 0.0,
              "p95": 0.009321514181574436,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.670565529350839e-07,
              "median": 2.141649787789272e-08,
              "min": 0.0,
              "max": 6.253932159845502e-07,
              "p5": 0.0,
              "p95": 5.380091829502353e-07,
              "count": 4
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.02083333333333337,
            "market": 0.00015853695362832987,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.0209918702869617,
            "vs_sector": -0.02083333333333337,
            "vs_peers": -0.02083333333333337
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 74.10071942446042,
          "score_pca_percentile": 74.10071942446042,
          "rank_pca": 145,
          "total": 556,
          "adv_notional_sgd": 442896.0,
          "adv_volume_shares": 1845400.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0032361741347528426,
          "votes": 56.0,
          "trades": 56.0,
          "spread_pct": 0.02196361252253731,
          "spread_ticks": 1.046875,
          "amihud": 8.565967889270133e-08,
          "volatility": 0.5733955467735358
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5101839428061993,
          "loadings": {
            "log_adv": 0.5558688437753877,
            "log_trades": 0.5119757420319443,
            "log_turnover": 0.5101483365690729,
            "neg_spread": 0.3877940217774503,
            "neg_amihud": 0.11625605208774938,
            "neg_vol": 0.068845259917457
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
          "peer_median_adv": 9322.5,
          "peer_median_score_pca": 39.83812949640287,
          "peer_median_trades": 2.0,
          "peer_median_volatility": 0.2218122271797971,
          "peer_median_spread_pct": 0.042741019630659446,
          "peer_median_spread_ticks": 2.152972027972028,
          "peer_median_amihud": 6.097560975609734e-07,
          "peer_median_turnover_ratio": 0.00040319404554147267,
          "target_vs_peer": {
            "score_pca_delta": 34.26,
            "adv_delta_pct": 4650.8,
            "trades_delta_pct": 2700.0,
            "volatility_delta_pct": -158.5,
            "spread_pct_delta_pct": 48.61,
            "spread_ticks_delta_pct": -51.38,
            "amihud_delta_pct": 85.95,
            "turnover_ratio_delta_pct": 702.63
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 74.10071942446042,
            "rank_pca": 145,
            "adv": 442896.0,
            "trades": 56.0,
            "volatility": 0.5733955467735358,
            "spread_pct": 0.02196361252253731,
            "spread_ticks": 1.046875,
            "amihud": 8.565967889270133e-08,
            "turnover_ratio": 0.0032361741347528426,
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
            "score_pca": 37.05035971223021,
            "rank_pca": 351,
            "adv": 1485.0,
            "trades": 3.0,
            "volatility": 0.18280595235916394,
            "spread_pct": 0.015293118096856427,
            "spread_ticks": 3.0,
            "amihud": 2.2645152903464397e-06,
            "turnover_ratio": 2.322880659435467e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 77.33812949640287,
            "rank_pca": 127,
            "adv": 510718.5,
            "trades": 146.0,
            "volatility": 1.4155087008303489,
            "spread_pct": 0.038970411354342094,
            "spread_ticks": 1.0505415162454874,
            "amihud": 1.6202954317066548e-07,
            "turnover_ratio": 0.0323424261200535,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 42.62589928057554,
            "rank_pca": 320,
            "adv": 17160.0,
            "trades": 1.0,
            "volatility": 0.21474706009986422,
            "spread_pct": 0.0702402957486137,
            "spread_ticks": 5.428571428571429,
            "amihud": 6.097560975609734e-07,
            "turnover_ratio": 0.0007831592844885906,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 60.61151079136691,
            "rank_pca": 220,
            "adv": 37767.5,
            "trades": 15.0,
            "volatility": 0.44041508124379736,
            "spread_pct": 0.038509627406851675,
            "spread_ticks": 1.0,
            "amihud": 4.8126704136514066e-08,
            "turnover_ratio": 0.001842216267995189,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 23.201438848920862,
            "rank_pca": 428,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.07888106377466128,
            "spread_pct": 0.04651162790697679,
            "spread_ticks": 8.11111111111111,
            "amihud": 1.0762409057643424e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 82.19424460431655,
            "rank_pca": 100,
            "adv": 454639.5,
            "trades": 426.0,
            "volatility": 0.22887739425973,
            "spread_pct": 0.006777996388083901,
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
              "mean": 0.5106801693549132,
              "median": 0.2737901764738821,
              "min": 0.0,
              "max": 10.648943609579309,
              "p5": 0.0,
              "p95": 1.6701746969642168,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3689804.3305189568,
              "median": 15671.6,
              "min": 0.0,
              "max": 313263925.0,
              "p5": 0.0,
              "p95": 16691058.875,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09862914500080555,
              "median": 0.030989272943980843,
              "min": 0.00032858456351623653,
              "max": 1.7037037037037037,
              "p5": 0.0034671656421810175,
              "p95": 0.41500700671169194,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0075971202294129936,
              "median": 0.0002574118274103853,
              "min": 0.0,
              "max": 2.7190033616768834,
              "p5": 0.0,
              "p95": 0.013207790163943795,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00019319469749521493,
              "median": 9.188833182996673e-08,
              "min": 0.0,
              "max": 0.035985552115583075,
              "p5": 0.0,
              "p95": 6.466147206489517e-05,
              "count": 515
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 578.0881294964029,
              "median": 8.0,
              "min": 0.0,
              "max": 12629.0,
              "p5": 0.0,
              "p95": 3806.75,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5776197900638518,
              "median": 0.1987765062295141,
              "min": 0.0,
              "max": 3.2062328764420243,
              "p5": 0.02760837232113145,
              "p95": 2.284739811058052,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 936992.8125,
              "median": 9322.5,
              "min": 0.0,
              "max": 6579762.0,
              "p5": 0.0,
              "p95": 4435969.124999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1632793731107342,
              "median": 0.03423762021475705,
              "min": 0.0012730170371081137,
              "max": 0.6666666666666666,
              "p5": 0.0031997598099496394,
              "p95": 0.600461361014994,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001956003277537765,
              "median": 0.00040319404554147267,
              "min": 0.0,
              "max": 0.007125443951740706,
              "p5": 0.0,
              "p95": 0.006199545583585426,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0051413727849870475,
              "median": 6.097560975609734e-07,
              "min": 9.897107691492026e-10,
              "max": 0.035985552115583075,
              "p5": 6.758090416234286e-09,
              "p95": 0.02519056583549523,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 296.25,
              "median": 2.0,
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
              "mean": 127721.3125,
              "median": 9322.5,
              "min": 0.0,
              "max": 510718.5,
              "p5": 0.0,
              "p95": 491090.85,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 73.875,
              "median": 2.0,
              "min": 0.0,
              "max": 426.0,
              "p5": 0.0,
              "p95": 327.9999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7209335161261987,
              "median": 0.2218122271797971,
              "min": 0.0,
              "max": 3.2062328764420243,
              "p5": 0.02760837232113145,
              "p95": 2.579479414977937,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17005979926092776,
              "median": 0.042741019630659446,
              "min": 0.006777996388083901,
              "max": 0.6666666666666666,
              "p5": 0.009758288986154285,
              "p95": 0.600461361014994,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.247437680650677,
              "median": 2.152972027972028,
              "min": 1.0,
              "max": 21.083333333333332,
              "p5": 1.0,
              "p95": 16.543055555555547,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.005141390428823854,
              "median": 6.097560975609734e-07,
              "min": 2.0217642926099477e-08,
              "max": 0.035985552115583075,
              "p5": 2.8590361289223856e-08,
              "p95": 0.02519056583549523,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005264559303859042,
              "median": 0.00040319404554147267,
              "min": 0.0,
              "max": 0.0323424261200535,
              "p5": 0.0,
              "p95": 0.02351648236114401,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.07843137254901988,
            "market": 0.009962093242706471,
            "sector": -0.014649320936856225,
            "peers": -0.007537688442211032,
            "vs_market": -0.08839346579172636,
            "vs_sector": -0.06378205161216366,
            "vs_peers": -0.07089368410680885
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 73.02158273381295,
          "score_pca_percentile": 73.02158273381295,
          "rank_pca": 151,
          "total": 556,
          "adv_notional_sgd": 315120.0,
          "adv_volume_shares": 1212000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0021254161977459873,
          "votes": 54.0,
          "trades": 54.0,
          "spread_pct": 0.023309053069719015,
          "spread_ticks": 1.1176470588235294,
          "amihud": 6.222341691182671e-08,
          "volatility": 0.40159547308393617
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5284128021743696,
          "loadings": {
            "log_adv": 0.5403657911114578,
            "log_trades": 0.4918309199813251,
            "log_turnover": 0.4913623230306036,
            "neg_spread": 0.4125106515472486,
            "neg_amihud": 0.15258977648899127,
            "neg_vol": 0.17669620234709368
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
          "peer_median_adv": 4735.0,
          "peer_median_score_pca": 40.91726618705036,
          "peer_median_trades": 2.5,
          "peer_median_volatility": 0.4664385946495246,
          "peer_median_spread_pct": 0.04205214465937762,
          "peer_median_spread_ticks": 1.9107905982905982,
          "peer_median_amihud": 5.877418549548106e-07,
          "peer_median_turnover_ratio": 0.000164464801981816,
          "target_vs_peer": {
            "score_pca_delta": 32.1,
            "adv_delta_pct": 6555.1,
            "trades_delta_pct": 2060.0,
            "volatility_delta_pct": 13.9,
            "spread_pct_delta_pct": 44.57,
            "spread_ticks_delta_pct": -41.51,
            "amihud_delta_pct": 89.41,
            "turnover_ratio_delta_pct": 1192.32
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.02158273381295,
            "rank_pca": 151,
            "adv": 315120.0,
            "trades": 54.0,
            "volatility": 0.40159547308393617,
            "spread_pct": 0.023309053069719015,
            "spread_ticks": 1.1176470588235294,
            "amihud": 6.222341691182671e-08,
            "turnover_ratio": 0.0021254161977459873,
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
            "score_pca": 1.618705035971223,
            "rank_pca": 548,
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
            "score_pca": 41.007194244604314,
            "rank_pca": 329,
            "adv": 3920.0,
            "trades": 3.0,
            "volatility": 0.20585714325116133,
            "spread_pct": 0.012983347445667525,
            "spread_ticks": 2.5555555555555554,
            "amihud": 2.164495085955182e-06,
            "turnover_ratio": 6.194348425161246e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 69.60431654676259,
            "rank_pca": 170,
            "adv": 239186.19999999998,
            "trades": 79.0,
            "volatility": 1.614894326606213,
            "spread_pct": 0.04272497897392762,
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
            "spread_ticks": 3.111111111111111,
            "amihud": 1.3594645296144612e-06,
            "turnover_ratio": 0.0002669861197120195,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 67.98561151079137,
            "rank_pca": 179,
            "adv": 115003.8,
            "trades": 36.0,
            "volatility": 0.5748472057333632,
            "spread_pct": 0.037027894347074826,
            "spread_ticks": 1.0,
            "amihud": 9.118963998147742e-08,
            "turnover_ratio": 0.005194106024954463,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 35.25179856115108,
            "rank_pca": 361,
            "adv": 2700.0,
            "trades": 2.0,
            "volatility": 0.35802998356568594,
            "spread_pct": 0.04651162790697679,
            "spread_ticks": 8.11111111111111,
            "amihud": 1.0277181104799964e-06,
            "turnover_ratio": 2.0739213740597384e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 84.17266187050359,
            "rank_pca": 89,
            "adv": 928957.0,
            "trades": 429.0,
            "volatility": 0.3042547876670478,
            "spread_pct": 0.007561748389300486,
            "spread_ticks": 1.266025641025641,
            "amihud": 1.4590318448290466e-08,
            "turnover_ratio": 0.013357800665298155,
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
              "mean": 0.6291066036026941,
              "median": 0.4015346701125927,
              "min": 0.0,
              "max": 5.558776843874918,
              "p5": 0.09372100043682362,
              "p95": 1.930148131362441,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3548756.6804583743,
              "median": 19211.2,
              "min": 0.0,
              "max": 313263925.0,
              "p5": 0.0,
              "p95": 15824757.749999998,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0980219980910365,
              "median": 0.029619336673126866,
              "min": 0.0002879945579246963,
              "max": 1.4782608695652175,
              "p5": 0.003311744120331952,
              "p95": 0.44812671337191584,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006547735366889225,
              "median": 0.0003456286374160352,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.014863052330420479,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.695353856444104e-05,
              "median": 1.0396613600051675e-07,
              "min": 0.0,
              "max": 0.007957957957957958,
              "p5": 0.0,
              "p95": 4.3160627880283356e-05,
              "count": 548
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 535.7661870503597,
              "median": 8.0,
              "min": 0.0,
              "max": 12629.0,
              "p5": 0.0,
              "p95": 3043.5,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.2189636541788402,
              "median": 0.3544736711703495,
              "min": 0.20585714325116133,
              "max": 3.9754781418752874,
              "p5": 0.20586962786845642,
              "p95": 3.9664500282881416,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1391324.0,
              "median": 4735.0,
              "min": 0.0,
              "max": 9874345.0,
              "p5": 0.0,
              "p95": 6743459.1999999955,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16986470693955694,
              "median": 0.03234418170727332,
              "min": 0.0012641955321598915,
              "max": 0.6666666666666666,
              "p5": 0.0034683390321591,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002785625702736805,
              "median": 0.000164464801981816,
              "min": 0.0,
              "max": 0.013357800665298155,
              "p5": 0.0,
              "p95": 0.01094081241184492,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5738026515687947e-05,
              "median": 5.449707636959116e-07,
              "min": 0.0,
              "max": 0.00020127517325246142,
              "p5": 1.915940713445849e-10,
              "p95": 0.00013158643589418413,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 322.875,
              "median": 2.5,
              "min": 0.0,
              "max": 2093.0,
              "p5": 0.0,
              "p95": 1510.599999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 161914.625,
              "median": 4735.0,
              "min": 0.0,
              "max": 928957.0,
              "p5": 0.0,
              "p95": 687537.2199999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 68.875,
              "median": 2.5,
              "min": 0.0,
              "max": 429.0,
              "p5": 0.0,
              "p95": 306.49999999999983,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.416745309887509,
              "median": 0.4664385946495246,
              "min": 0.20585714325116133,
              "max": 3.9754781418752874,
              "p5": 0.2402963187967216,
              "p95": 3.9664500282881416,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1767621600294474,
              "median": 0.04205214465937762,
              "min": 0.007561748389300486,
              "max": 0.6666666666666666,
              "p5": 0.00945930805902895,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.638672148661903,
              "median": 1.9107905982905982,
              "min": 1.0,
              "max": 27.0,
              "p5": 1.0,
              "p95": 20.38888888888888,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.576004956704631e-05,
              "median": 5.877418549548106e-07,
              "min": 0.0,
              "max": 0.00020127517325246142,
              "p5": 5.106611456901663e-09,
              "p95": 0.00013158643589418413,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004686387106741768,
              "median": 0.000164464801981816,
              "min": 0.0,
              "max": 0.0185895213459773,
              "p5": 0.0,
              "p95": 0.016758419107739595,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.0784313725490201,
            "market": 0.00613165413872041,
            "sector": -0.04477781304364603,
            "peers": -0.0452137793539481,
            "vs_market": -0.08456302668774052,
            "vs_sector": -0.033653559505374075,
            "vs_peers": -0.033217593195072004
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
          "votes": 56.0,
          "trades": 56.0,
          "spread_pct": 0.02406252744357603,
          "spread_ticks": 1.1504424778761062,
          "amihud": 7.93307656608847e-08,
          "volatility": 0.5204364145972824
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5525215089933044,
          "loadings": {
            "log_adv": 0.5258931774117703,
            "log_trades": 0.4748506688132198,
            "log_turnover": 0.48048945611813915,
            "neg_spread": 0.41386606680200205,
            "neg_amihud": 0.2045875727507478,
            "neg_vol": 0.23225394434644972
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
          "peer_median_score_pca": 47.48201438848921,
          "peer_median_trades": 4.5,
          "peer_median_volatility": 0.5567708814374212,
          "peer_median_spread_pct": 0.04239782442822769,
          "peer_median_spread_ticks": 1.6480061349693251,
          "peer_median_amihud": 5.797514938764653e-07,
          "peer_median_turnover_ratio": 0.00013173637737095244,
          "target_vs_peer": {
            "score_pca_delta": 24.46,
            "adv_delta_pct": 2991.1,
            "trades_delta_pct": 1144.44,
            "volatility_delta_pct": 6.53,
            "spread_pct_delta_pct": 43.25,
            "spread_ticks_delta_pct": -30.19,
            "amihud_delta_pct": 86.32,
            "turnover_ratio_delta_pct": 1017.92
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.94244604316546,
            "rank_pca": 157,
            "adv": 201552.0,
            "trades": 56.0,
            "volatility": 0.5204364145972824,
            "spread_pct": 0.02406252744357603,
            "spread_ticks": 1.1504424778761062,
            "amihud": 7.93307656608847e-08,
            "turnover_ratio": 0.0014727100023655777,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.618705035971223,
            "rank_pca": 548,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.4261024794970623,
            "spread_pct": 0.4901185770750986,
            "spread_ticks": 20.833333333333332,
            "amihud": 0.00036013640690511566,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.8669064748201443,
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
            "volatility": 0.3203710268082389,
            "spread_pct": 0.017320427916454422,
            "spread_ticks": 2.0,
            "amihud": 1.436039027347683e-06,
            "turnover_ratio": 8.548200826722518e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 52.15827338129496,
            "rank_pca": 267,
            "adv": 27124.5,
            "trades": 16.0,
            "volatility": 1.3601298723289832,
            "spread_pct": 0.066193853427896,
            "spread_ticks": 1.08,
            "amihud": 1.9253151018828551e-07,
            "turnover_ratio": 0.0030918986626255053,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 41.18705035971223,
            "rank_pca": 328,
            "adv": 3550.0,
            "trades": 1.0,
            "volatility": 0.36482871331237,
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
            "volatility": 0.6072105482625458,
            "spread_pct": 0.04151898734177219,
            "spread_ticks": 1.037037037037037,
            "amihud": 0.0,
            "turnover_ratio": 0.003127024012722621,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 47.84172661870504,
            "rank_pca": 291,
            "adv": 7497.0,
            "trades": 5.0,
            "volatility": 0.356467168556493,
            "spread_pct": 0.01981599433828735,
            "spread_ticks": 3.1025641025641026,
            "amihud": 9.66971477564645e-07,
            "turnover_ratio": 6.774809821928479e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.27338129496404,
            "rank_pca": 94,
            "adv": 657712.0,
            "trades": 371.0,
            "volatility": 0.5063312146122965,
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
              "mean": 0.6926041787403202,
              "median": 0.4764662895324073,
              "min": 0.0,
              "max": 7.013811259728676,
              "p5": 0.1591077817118035,
              "p95": 2.2320494622153784,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3357216.8998488514,
              "median": 13424.5,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13869777.625,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10111334164067089,
              "median": 0.03205574912891988,
              "min": 0.0002805689255457263,
              "max": 1.246661981728742,
              "p5": 0.003473730480762897,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006562372400952674,
              "median": 0.00026322939118916995,
              "min": 0.0,
              "max": 2.3103289170127215,
              "p5": 0.0,
              "p95": 0.011946076955592232,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4015503698557682e-05,
              "median": 1.3935396338180557e-07,
              "min": 0.0,
              "max": 0.0010537018191403248,
              "p5": 0.0,
              "p95": 3.080752025444165e-05,
              "count": 550
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 495.67446043165467,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2961.25,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8751391215406725,
              "median": 0.4355799639623332,
              "min": 0.2561279708655206,
              "max": 2.4261024794970623,
              "p5": 0.278613040445472,
              "p95": 2.364623406099731,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1687583.875,
              "median": 6520.5,
              "min": 0.0,
              "max": 12624816.0,
              "p5": 0.0,
              "p95": 8436329.599999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15916390678075976,
              "median": 0.02193926089093169,
              "min": 0.0013514156670242764,
              "max": 0.6666666666666666,
              "p5": 0.004623064452066456,
              "p95": 0.6048748353096177,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002474142791872788,
              "median": 0.00013173637737095244,
              "min": 0.0,
              "max": 0.009669927990213068,
              "p5": 0.0,
              "p95": 0.009197202414943359,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.5522035910309207e-05,
              "median": 5.231511216127649e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 2.772191811278055e-10,
              "p95": 0.00023462645834977132,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 442.5,
              "median": 4.5,
              "min": 0.0,
              "max": 3103.0,
              "p5": 0.0,
              "p95": 2146.7999999999984,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 96114.1375,
              "median": 6520.5,
              "min": 0.0,
              "max": 657712.0,
              "p5": 0.0,
              "p95": 451132.75999999966,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 53.25,
              "median": 4.5,
              "min": 0.0,
              "max": 371.0,
              "p5": 0.0,
              "p95": 251.2999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0239861259317633,
              "median": 0.5567708814374212,
              "min": 0.3203710268082389,
              "max": 2.4261024794970623,
              "p5": 0.3330046764201279,
              "p95": 2.364623406099731,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16945126898814322,
              "median": 0.04239782442822769,
              "min": 0.010698983624287645,
              "max": 0.6666666666666666,
              "p5": 0.013016489126546018,
              "p95": 0.6048748353096177,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.199868342859141,
              "median": 1.6480061349693251,
              "min": 1.0,
              "max": 20.833333333333332,
              "p5": 1.0129629629629628,
              "p95": 14.679166666666656,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.553608699652473e-05,
              "median": 5.797514938764653e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.00023462645834977132,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002027508939815298,
              "median": 0.00013173637737095244,
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
            "stock": -0.04081632653061351,
            "market": 0.008827226270709199,
            "sector": -0.08590416029131964,
            "peers": -0.02842515020348846,
            "vs_market": -0.04964355280132271,
            "vs_sector": 0.04508783376070613,
            "vs_peers": -0.012391176327125053
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Current trading looks accessible, but the visible book is unbalanced because bid depth is far lighter than ask depth.",
        "market_comparison": "The stock fell 2.1% while peers were flat, which matters because weaker price action can make liquidity feel less supportive on the day."
      },
      "1w": {
        "liquidity": "Weekly tradability still reads as strong, though the buy side of the book remains thinner than the sell side.",
        "market_comparison": "The stock fell 7.8% compared with a 0.8% drop for peers, which matters because weaker relative performance can make access feel less resilient."
      },
      "30d": {
        "liquidity": "Monthly liquidity remains strong for the company’s size, supported by a 1M score of 73.0 and strong average daily volume.",
        "market_comparison": "The stock is down 7.8% compared with a 4.5% drop for peers and a 0.6% gain for the market, which matters because weaker momentum is not helping the tape."
      },
      "3m": {
        "liquidity": "Structural liquidity is strong, with a 3M score of 71.9 compared with the peer median of 47.5, so the name stands out as accessible in its peer set.",
        "market_comparison": "Average daily volume is S$201.6K compared with a peer median of S$6.5K, which matters because it reinforces the stock’s stronger access relative to similar names."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "regime_method": "hmm_jump_aware",
      "estimation_window_days": 80,
      "reporting_window_days": 63,
      "available_history_days": 80,
      "n_regimes": 3,
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9999515193268519,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.17586593223793473,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "17.6%",
          "display_range": null,
          "display_text": "17.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
          "kind": "share_pct",
          "value_pct": 17.6,
          "plain_english": "Market explains about 17.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.4766203569744197,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "47.7%",
          "display_range": null,
          "display_text": "47.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
          "kind": "share_pct",
          "value_pct": 47.7,
          "plain_english": "Sector explains about 47.7% of price moves in the current state."
        },
        "company_share": {
          "median": 0.3475137107876456,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "34.8%",
          "display_range": null,
          "display_text": "34.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
          "kind": "share_pct",
          "value_pct": 34.8,
          "plain_english": "Company-specific explains about 34.8% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.8261082843606712,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.83",
          "display_range": null,
          "display_text": "-0.83",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.83% stock move in the opposite direction in this state.",
          "value_num": -0.83
        },
        "beta_stock_lag": {
          "median": -0.3955662273052247,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.40",
          "display_range": null,
          "display_text": "-0.40",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
          "kind": "lag_beta",
          "value_num": -0.4
        },
        "beta_sector": {
          "median": 2.571857222727189,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.57",
          "display_range": null,
          "display_text": "2.57",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 2.57% stock move in the same direction in this state.",
          "value_num": 2.57
        },
        "beta_market_lag": {
          "median": 0.5080453115085293,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.51",
          "display_range": null,
          "display_text": "0.51",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
          "kind": "lag_beta",
          "value_num": 0.51
        },
        "beta_sector_lag": {
          "median": -0.5417384922659243,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.54",
          "display_range": null,
          "display_text": "-0.54",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
          "kind": "lag_beta",
          "value_num": -0.54
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 80 trading days relative to the 252-day target."
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
          "period_label": "2026-05-04 to 2026-05-21",
          "n_obs": 14,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6073553933214906,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "60.7%",
            "display_range": null,
            "display_text": "60.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 60.7,
            "plain_english": "Company-specific explains about 60.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.034068457857488674,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "3.4%",
              "display_range": null,
              "display_text": "3.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 3.4,
              "plain_english": "Market explains about 3.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3585761488210208,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.9%",
              "display_range": null,
              "display_text": "35.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 35.9,
              "plain_english": "Sector explains about 35.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6073553933214906,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.7%",
              "display_range": null,
              "display_text": "60.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 60.7,
              "plain_english": "Company-specific explains about 60.7% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.3663850689691007,
          "expected_duration_days": 3.151378050972844,
          "current_probability": 0.9999515193268519,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 29.310805517528056,
          "volatility": {
            "median": 0.020256199237867242,
            "low": 0.020256199237867242,
            "high": 0.020256199237867242
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.11769939006285354,
          "jump_rate": 9.52995100474301e-28,
          "risk_score": 0.0,
          "metrics": {
            "rolling_vol_10d": 0.026352866580499186,
            "downside_vol_10d": 0.01501343797091022,
            "drawdown_21d": 0.05338584449752346,
            "amihud_stress": 1.3033271460777314,
            "spread_rel": 221.49649062995462,
            "spread_ticks": 1.0811742125454715,
            "log_notional": 12.858807068038756,
            "log_trade_count": 4.564197663502162
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.3697143611408228,
          "expected_duration_days": 3.491409329990533,
          "current_probability": 2.113013671316392e-09,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 29.57714889126582,
          "volatility": {
            "median": 0.013141092861663371,
            "low": 0.013141092861663371,
            "high": 0.013141092861663371
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.13849133612791692,
          "jump_rate": 1.0245991316673012e-27,
          "risk_score": 0.6983784138842292,
          "metrics": {
            "rolling_vol_10d": 0.03841769833586895,
            "downside_vol_10d": 0.019375291794893473,
            "drawdown_21d": 0.09705856540925271,
            "amihud_stress": 1.436706450369479,
            "spread_rel": 253.24363185074398,
            "spread_ticks": 1.1976127858115462,
            "log_notional": 12.29957743906951,
            "log_trade_count": 4.166358164817966
          }
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "pct_time": 0.2639005698900765,
          "expected_duration_days": 1.4134100431658703,
          "current_probability": 4.847856013436039e-05,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 21.11204559120612,
          "volatility": {
            "median": 0.05835159537074669,
            "low": 0.05835159537074669,
            "high": 0.05835159537074669
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.42572922531841295,
          "jump_rate": 0.23683162194774102,
          "risk_score": 0.9358974962157847,
          "metrics": {
            "rolling_vol_10d": 0.038517294123569856,
            "downside_vol_10d": 0.021505785472691278,
            "drawdown_21d": 0.07753237746161723,
            "amihud_stress": 2.6239511083926366,
            "spread_rel": 243.3998528063369,
            "spread_ticks": 1.1569867740875586,
            "log_notional": 12.995675341419206,
            "log_trade_count": 4.569025594066626
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.6826785032372439,
            0.03564561513376416,
            0.281675881628992
          ],
          [
            0.05017855937293912,
            0.7135827095923148,
            0.23623873103474613
          ],
          [
            0.3546581742899655,
            0.3528505948992778,
            0.29249123081075673
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            20.0,
            1.0,
            8.0
          ],
          [
            1.0,
            21.0,
            7.0
          ],
          [
            8.0,
            7.0,
            6.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9999515193268519,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 2.113013671316392e-09,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "probability": 4.847856013436039e-05,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.11771432294967882,
        "current_score": 0.7295769218629071,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 3,
        "criterion": "bic_with_min_state_support",
        "bic": 3995.807245206188,
        "loglik": -1691.1617581759222,
        "n_params": 140,
        "bic_delta_vs_next_best": 8.712193432705135,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 4004.519438638893,
            "loglik": -1802.877507441785,
            "n_params": 91,
            "converged": true,
            "iterations": 8,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4004.5194389190992,
                "loglik": -1802.877507581888,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4004.5194400797404,
                "loglik": -1802.8775081622086,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4004.519438638893,
                "loglik": -1802.877507441785,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 3995.807245206188,
            "loglik": -1691.1617581759222,
            "n_params": 140,
            "converged": true,
            "iterations": 17,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3995.807279897206,
                "loglik": -1691.1617755214315,
                "n_params": 140,
                "converged": true,
                "iterations": 15
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3995.8072626876783,
                "loglik": -1691.1617669166674,
                "n_params": 140,
                "converged": true,
                "iterations": 15
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3995.807245206188,
                "loglik": -1691.1617581759222,
                "n_params": 140,
                "converged": true,
                "iterations": 17
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
              "bic": 3995.807279897206,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 3995.8072626876783,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 3995.807245206188,
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
        "history_used_days": 80,
        "n_features": 22,
        "candidate_states": [
          2,
          3
        ],
        "selected_states": 3,
        "bic_delta_vs_next_best": 8.712193432705135,
        "state_count_interpretation": "80 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 8.71 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 140,
          "observations_per_parameter": 0.5714285714285714,
          "parameter_pressure_label": "underidentified_pressure"
        },
        "state_occupancy": {
          "min_effective_days_required": 3.0,
          "min_effective_days_observed": 21.11204559120612,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 29.310805517528056,
              "pct_time": 0.3663850689691007,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 29.57714889126582,
              "pct_time": 0.3697143611408228,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "effective_days": 21.11204559120612,
              "pct_time": 0.2639005698900765,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.6826785032372439,
            0.7135827095923148,
            0.29249123081075673
          ],
          "expected_duration_days": [
            3.151378050972844,
            3.491409329990533,
            1.4134100431658703
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
              "bic": 3995.807279897206,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 3995.8072626876783,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 3995.807245206188,
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
            "jump_probability": 0.11769939006285354,
            "jump_rate": 9.52995100474301e-28,
            "rolling_vol_10d": 0.026352866580499186,
            "downside_vol_10d": 0.01501343797091022,
            "drawdown_21d": 0.05338584449752346,
            "amihud_stress": 1.3033271460777314,
            "spread_rel": 221.49649062995462,
            "spread_ticks": 1.0811742125454715,
            "log_notional": 12.858807068038756,
            "log_trade_count": 4.564197663502162
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.6983784138842292,
            "jump_probability": 0.13849133612791692,
            "jump_rate": 1.0245991316673012e-27,
            "rolling_vol_10d": 0.03841769833586895,
            "downside_vol_10d": 0.019375291794893473,
            "drawdown_21d": 0.09705856540925271,
            "amihud_stress": 1.436706450369479,
            "spread_rel": 253.24363185074398,
            "spread_ticks": 1.1976127858115462,
            "log_notional": 12.29957743906951,
            "log_trade_count": 4.166358164817966
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "risk_score": 0.9358974962157847,
            "jump_probability": 0.42572922531841295,
            "jump_rate": 0.23683162194774102,
            "rolling_vol_10d": 0.038517294123569856,
            "downside_vol_10d": 0.021505785472691278,
            "drawdown_21d": 0.07753237746161723,
            "amihud_stress": 2.6239511083926366,
            "spread_rel": 243.3998528063369,
            "spread_ticks": 1.1569867740875586,
            "log_notional": 12.995675341419206,
            "log_trade_count": 4.569025594066626
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
          "trade_date": "2026-05-08",
          "state": 0,
          "probabilities": [
            0.9999999995822559,
            1.389430991695765e-13,
            4.1760511402981643e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999991942728,
            1.890054506638097e-12,
            8.038370573210909e-10
          ],
          "jump_probability": 0.15342342320669214,
          "jump_score": 0.7647834005312865
        },
        {
          "trade_date": "2026-05-11",
          "state": 0,
          "probabilities": [
            0.9999994849642732,
            5.150357250976399e-07,
            1.7623216169507092e-15
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999930172554895,
            6.982744507059261e-06,
            3.3914718791909832e-15
          ],
          "jump_probability": 0.08465912494854519,
          "jump_score": 0.17985770611557708
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.9999871781558111,
            1.2806201546724218e-05,
            1.5642642252028527e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9998257716204245,
            0.0001741982740668688,
            3.010550856787446e-08
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.999999962369134,
            3.763086493151571e-08,
            1.0076617515925439e-15
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999994880344906,
            5.119655075317287e-07,
            1.9396382192848373e-15
          ],
          "jump_probability": 0.11954441942542748,
          "jump_score": 0.5136943776258901
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999999881526304,
            1.1274117949315933e-08,
            5.732517068775531e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999860054115,
            1.3442533721521202e-08,
            5.520547716758682e-10
          ],
          "jump_probability": 0.1761035251487376,
          "jump_score": 0.9082844769410316
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            7.337826397467771e-10,
            7.862620845540375e-14,
            0.9999999992661388
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.813015768509174e-10,
            5.538075496652683e-13,
            0.9999999996181446
          ],
          "jump_probability": 0.4129553242945577,
          "jump_score": 1.9441204243737138
        },
        {
          "trade_date": "2026-05-18",
          "state": 0,
          "probabilities": [
            0.9997370428198795,
            0.0002588502413068543,
            4.106938813626766e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9996874061546137,
            0.0003086388391130007,
            3.955006273149911e-06
          ],
          "jump_probability": 0.15746080633751697,
          "jump_score": 0.7915273015955989
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            6.308944854646689e-05,
            2.3642254006165127e-11,
            0.9999369105278113
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.277671495046284e-05,
            1.6710012407114533e-10,
            0.9999672231179494
          ],
          "jump_probability": 0.4020900394710912,
          "jump_score": 1.904987710770918
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999919219217441,
            1.44319718975012e-07,
            7.933758536882818e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999827667974964,
            1.9624579804939073e-06,
            1.5270744523195436e-05
          ],
          "jump_probability": 0.15976564994621897,
          "jump_score": 0.8065454022671728
        },
        {
          "trade_date": "2026-05-21",
          "state": 0,
          "probabilities": [
            0.9999515193268519,
            2.113013671316392e-09,
            4.847856013436039e-05
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999515193268519,
            2.113013671316392e-09,
            4.847856013436039e-05
          ],
          "jump_probability": 0.14823819128605287,
          "jump_score": 0.7295769218629071
        }
      ],
      "methodology": {
        "estimation_window_days": 80,
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
        "market_link_display": "-0.83",
        "sector_link_display": "2.57",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.83% stock move in the opposite direction in this state. This is a point estimate from 80 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.57% stock move in the same direction in this state. This is a point estimate from 80 trading days.",
        "stock_persistence_display": "-0.40",
        "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
        "history_limited_note": "Read is based on 80 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Calm / Liquid",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 47.7,
        "driver_share_display": "47.7%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 80 trading days relative to the 252-day target.",
        "history_days": 80,
        "history_limited": true,
        "volatility_label": "Calm / Liquid",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 11.8,
        "jump_risk_score": 0.73,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.6826785032372439,
        "effective_days": 29.3,
        "persistence_note": "This state looks more persistent, with a typical run length of about 3.2 days.",
        "expected_duration_days": 3.2
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
          "pct_time": 0.3663850689691007,
          "expected_duration_days": 3.151378050972844,
          "current_probability": 0.9999515193268519,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 29.310805517528056,
          "volatility": {
            "median": 0.020256199237867242,
            "low": 0.020256199237867242,
            "high": 0.020256199237867242
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.11769939006285354,
          "jump_rate": 9.52995100474301e-28,
          "risk_score": 0.0,
          "metrics": {
            "rolling_vol_10d": 0.026352866580499186,
            "downside_vol_10d": 0.01501343797091022,
            "drawdown_21d": 0.05338584449752346,
            "amihud_stress": 1.3033271460777314,
            "spread_rel": 221.49649062995462,
            "spread_ticks": 1.0811742125454715,
            "log_notional": 12.858807068038756,
            "log_trade_count": 4.564197663502162
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.3697143611408228,
          "expected_duration_days": 3.491409329990533,
          "current_probability": 2.113013671316392e-09,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 29.57714889126582,
          "volatility": {
            "median": 0.013141092861663371,
            "low": 0.013141092861663371,
            "high": 0.013141092861663371
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.13849133612791692,
          "jump_rate": 1.0245991316673012e-27,
          "risk_score": 0.6983784138842292,
          "metrics": {
            "rolling_vol_10d": 0.03841769833586895,
            "downside_vol_10d": 0.019375291794893473,
            "drawdown_21d": 0.09705856540925271,
            "amihud_stress": 1.436706450369479,
            "spread_rel": 253.24363185074398,
            "spread_ticks": 1.1976127858115462,
            "log_notional": 12.29957743906951,
            "log_trade_count": 4.166358164817966
          }
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "pct_time": 0.2639005698900765,
          "expected_duration_days": 1.4134100431658703,
          "current_probability": 4.847856013436039e-05,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 21.11204559120612,
          "volatility": {
            "median": 0.05835159537074669,
            "low": 0.05835159537074669,
            "high": 0.05835159537074669
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.42572922531841295,
          "jump_rate": 0.23683162194774102,
          "risk_score": 0.9358974962157847,
          "metrics": {
            "rolling_vol_10d": 0.038517294123569856,
            "downside_vol_10d": 0.021505785472691278,
            "drawdown_21d": 0.07753237746161723,
            "amihud_stress": 2.6239511083926366,
            "spread_rel": 243.3998528063369,
            "spread_ticks": 1.1569867740875586,
            "log_notional": 12.995675341419206,
            "log_trade_count": 4.569025594066626
          }
        }
      ],
      "transitions": [
        [
          0.6826785032372439,
          0.03564561513376416,
          0.281675881628992
        ],
        [
          0.05017855937293912,
          0.7135827095923148,
          0.23623873103474613
        ],
        [
          0.3546581742899655,
          0.3528505948992778,
          0.29249123081075673
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.6826785032372439,
            0.03564561513376416,
            0.281675881628992
          ],
          [
            0.05017855937293912,
            0.7135827095923148,
            0.23623873103474613
          ],
          [
            0.3546581742899655,
            0.3528505948992778,
            0.29249123081075673
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            20.0,
            1.0,
            8.0
          ],
          [
            1.0,
            21.0,
            7.0
          ],
          [
            8.0,
            7.0,
            6.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9999515193268519,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9999515193268519,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 2.113013671316392e-09,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "probability": 4.847856013436039e-05,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.11771432294967882,
        "current_score": 0.7295769218629071,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 3,
        "criterion": "bic_with_min_state_support",
        "bic": 3995.807245206188,
        "loglik": -1691.1617581759222,
        "n_params": 140,
        "bic_delta_vs_next_best": 8.712193432705135,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 4004.519438638893,
            "loglik": -1802.877507441785,
            "n_params": 91,
            "converged": true,
            "iterations": 8,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4004.5194389190992,
                "loglik": -1802.877507581888,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4004.5194400797404,
                "loglik": -1802.8775081622086,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4004.519438638893,
                "loglik": -1802.877507441785,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 3995.807245206188,
            "loglik": -1691.1617581759222,
            "n_params": 140,
            "converged": true,
            "iterations": 17,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3995.807279897206,
                "loglik": -1691.1617755214315,
                "n_params": 140,
                "converged": true,
                "iterations": 15
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3995.8072626876783,
                "loglik": -1691.1617669166674,
                "n_params": 140,
                "converged": true,
                "iterations": 15
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 3995.807245206188,
                "loglik": -1691.1617581759222,
                "n_params": 140,
                "converged": true,
                "iterations": 17
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
              "bic": 3995.807279897206,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 3995.8072626876783,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 3995.807245206188,
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
        "history_used_days": 80,
        "n_features": 22,
        "candidate_states": [
          2,
          3
        ],
        "selected_states": 3,
        "bic_delta_vs_next_best": 8.712193432705135,
        "state_count_interpretation": "80 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 8.71 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 140,
          "observations_per_parameter": 0.5714285714285714,
          "parameter_pressure_label": "underidentified_pressure"
        },
        "state_occupancy": {
          "min_effective_days_required": 3.0,
          "min_effective_days_observed": 21.11204559120612,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 29.310805517528056,
              "pct_time": 0.3663850689691007,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 29.57714889126582,
              "pct_time": 0.3697143611408228,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "effective_days": 21.11204559120612,
              "pct_time": 0.2639005698900765,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.6826785032372439,
            0.7135827095923148,
            0.29249123081075673
          ],
          "expected_duration_days": [
            3.151378050972844,
            3.491409329990533,
            1.4134100431658703
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
              "bic": 3995.807279897206,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 3995.8072626876783,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 3995.807245206188,
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
            "jump_probability": 0.11769939006285354,
            "jump_rate": 9.52995100474301e-28,
            "rolling_vol_10d": 0.026352866580499186,
            "downside_vol_10d": 0.01501343797091022,
            "drawdown_21d": 0.05338584449752346,
            "amihud_stress": 1.3033271460777314,
            "spread_rel": 221.49649062995462,
            "spread_ticks": 1.0811742125454715,
            "log_notional": 12.858807068038756,
            "log_trade_count": 4.564197663502162
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.6983784138842292,
            "jump_probability": 0.13849133612791692,
            "jump_rate": 1.0245991316673012e-27,
            "rolling_vol_10d": 0.03841769833586895,
            "downside_vol_10d": 0.019375291794893473,
            "drawdown_21d": 0.09705856540925271,
            "amihud_stress": 1.436706450369479,
            "spread_rel": 253.24363185074398,
            "spread_ticks": 1.1976127858115462,
            "log_notional": 12.29957743906951,
            "log_trade_count": 4.166358164817966
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "risk_score": 0.9358974962157847,
            "jump_probability": 0.42572922531841295,
            "jump_rate": 0.23683162194774102,
            "rolling_vol_10d": 0.038517294123569856,
            "downside_vol_10d": 0.021505785472691278,
            "drawdown_21d": 0.07753237746161723,
            "amihud_stress": 2.6239511083926366,
            "spread_rel": 243.3998528063369,
            "spread_ticks": 1.1569867740875586,
            "log_notional": 12.995675341419206,
            "log_trade_count": 4.569025594066626
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
          "trade_date": "2026-05-08",
          "state": 0,
          "probabilities": [
            0.9999999995822559,
            1.389430991695765e-13,
            4.1760511402981643e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999991942728,
            1.890054506638097e-12,
            8.038370573210909e-10
          ],
          "jump_probability": 0.15342342320669214,
          "jump_score": 0.7647834005312865
        },
        {
          "trade_date": "2026-05-11",
          "state": 0,
          "probabilities": [
            0.9999994849642732,
            5.150357250976399e-07,
            1.7623216169507092e-15
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999930172554895,
            6.982744507059261e-06,
            3.3914718791909832e-15
          ],
          "jump_probability": 0.08465912494854519,
          "jump_score": 0.17985770611557708
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.9999871781558111,
            1.2806201546724218e-05,
            1.5642642252028527e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9998257716204245,
            0.0001741982740668688,
            3.010550856787446e-08
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.999999962369134,
            3.763086493151571e-08,
            1.0076617515925439e-15
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999994880344906,
            5.119655075317287e-07,
            1.9396382192848373e-15
          ],
          "jump_probability": 0.11954441942542748,
          "jump_score": 0.5136943776258901
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999999881526304,
            1.1274117949315933e-08,
            5.732517068775531e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999860054115,
            1.3442533721521202e-08,
            5.520547716758682e-10
          ],
          "jump_probability": 0.1761035251487376,
          "jump_score": 0.9082844769410316
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            7.337826397467771e-10,
            7.862620845540375e-14,
            0.9999999992661388
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.813015768509174e-10,
            5.538075496652683e-13,
            0.9999999996181446
          ],
          "jump_probability": 0.4129553242945577,
          "jump_score": 1.9441204243737138
        },
        {
          "trade_date": "2026-05-18",
          "state": 0,
          "probabilities": [
            0.9997370428198795,
            0.0002588502413068543,
            4.106938813626766e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9996874061546137,
            0.0003086388391130007,
            3.955006273149911e-06
          ],
          "jump_probability": 0.15746080633751697,
          "jump_score": 0.7915273015955989
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            6.308944854646689e-05,
            2.3642254006165127e-11,
            0.9999369105278113
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.277671495046284e-05,
            1.6710012407114533e-10,
            0.9999672231179494
          ],
          "jump_probability": 0.4020900394710912,
          "jump_score": 1.904987710770918
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999919219217441,
            1.44319718975012e-07,
            7.933758536882818e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999827667974964,
            1.9624579804939073e-06,
            1.5270744523195436e-05
          ],
          "jump_probability": 0.15976564994621897,
          "jump_score": 0.8065454022671728
        },
        {
          "trade_date": "2026-05-21",
          "state": 0,
          "probabilities": [
            0.9999515193268519,
            2.113013671316392e-09,
            4.847856013436039e-05
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999515193268519,
            2.113013671316392e-09,
            4.847856013436039e-05
          ],
          "jump_probability": 0.14823819128605287,
          "jump_score": 0.7295769218629071
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
    "liq_subtitle": "Structural liquidity is strong for size, although the displayed book is notably thinner on the bid.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is weak, with the stock down 7.8% over one month compared with peers down 4.5% and the market up 0.6%.",
    "perf_insight": "The stock is underperforming, and the current tape is still being driven by the sector. Sector factors account for 47.7% of the driver mix, which matters because broader weakness can weigh more heavily when the shares are already lagging peers and the market.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on trading, with 47.7% of the current driver mix coming from the sector.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 47.7% of price changes. Other influences are market 17.6%, and company-specific 34.8%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 17.6%, sector 47.7%, and company-specific 34.8%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 17.6%, sector 47.7%, and company-specific 34.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Current driver: Sector at 47.7%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves account for 47.7% of recent price action.",
      "Liquidity is strong for the stock’s size, with a 3M score of 71.9 versus a 47.5 peer median, but recent change versus the 1M baseline is unclear. The displayed book shows thin buy-side support, with bid depth at 0.22x ask depth and a 1-tick spread, so selling may feel harder than the monthly liquidity score suggests. Sector remains the main driver at 47.7%. The stock is also underperforming, down 7.8% over 1M versus peers down 4.5% and the market up 0.6%."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market state still looks liquid overall, but the visible book remains unbalanced on the buy side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to May 21, 2026 (82 trading days • 12,508 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The key execution watchpoint is the thin bid. Displayed bid depth is only 0.22x ask depth, so immediate buy-side support looks light even with a 1 tick spread.",
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
    "intraday_subtitle": "The visible book is the clearest near-term signal, with buy-side support looking materially thinner than sell-side depth.",
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
    "intraday_insight": "Displayed bid depth is only 0.22x ask depth while the spread is 1 tick. That matters because trading may still look orderly on the surface, but downside execution can feel worse when visible buying interest is this light.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading conditions are better explained by sector influence and thin displayed bid depth.",
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
    "exec_subtitle": "Liquidity looks strong relative to peers, but the visible book is offering limited buy-side support.",
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
        "sub": "Peer median 47.5 (+24.5 pts)",
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
    "liq_insight": "Liquidity screens well for the stock’s size, with a 3M liquidity score of 71.9 compared with a peer median of 47.5. The visible book is less supportive because displayed bid depth is only 0.22x ask depth, even with a 1 tick spread. That leaves the stock accessible relative to peers, but immediate buy-side support is thin.",
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
        "value": "0.22x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.14% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-5.40% with 55.2% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-5.40% with 22.1% fill.",
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
        "value": "47.7",
        "suffix": "sector",
        "bar_pct": 48,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 17.6% • Company 34.8%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size. The 3M liquidity score is 71.9 compared with a peer median of 47.5, which means the name still screens as accessible relative to peers on a monthly average basis.",
      "Recent price performance is weak. The stock is down 7.8% over one month, compared with a 4.5% drop for peers and a 0.6% gain for the market, which leaves the tape looking less supportive than the medium-term liquidity profile.",
      "The main near-term watchpoint is the visible book. Displayed bid depth is only 0.22x ask depth and sector factors account for 47.7% of the current driver mix, which means broader moves can meet thin buy-side support."
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
      "overall": "3M liquidity is strong: score 71.9 vs peer median 47.5 (+24.5 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "3M score 71.9 vs peer median 47.5 (+24.5 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +24.5 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is -4.1%, better than sector, but worse than market and peers, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -4.1% vs market 0.9%.",
        "vs_sector": "Better than sector: -4.1% vs sector -8.6%.",
        "vs_peers": "Worse than peers: -4.1% vs peers -2.8%."
      },
      "adv": {
        "insight": "ADV is S$201.6K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$201.6K vs market S$13.4K.",
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
        "insight": "Volatility is 52.04%, worse than sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "In line with market: 52.04% vs market 47.65%.",
        "vs_sector": "Worse than sector: 52.04% vs sector 43.56%.",
        "vs_peers": "In line with peers: 52.04% vs peers 55.68%."
      },
      "trades": {
        "insight": "Trades is 56, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 56 vs market 7.",
        "vs_sector": "Better than sector: 56 vs sector 4.",
        "vs_peers": "Better than peers: 56 vs peers 4."
      },
      "amihud": {
        "insight": "Price impact is 7.93e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.93e-08 vs market 1.39e-07.",
        "vs_sector": "Better than sector: 7.93e-08 vs sector 5.23e-07.",
        "vs_peers": "Better than peers: 7.93e-08 vs peers 5.80e-07."
      }
    },
    "performance": {
      "overall": "Recent performance has been weak relative to peers and the market, with a 1M return of -7.8% compared with peers at -4.5% and the market at +0.6%. Liquidity does not fully confirm that weakness because the 3M liquidity score of 71.9 remains well above the peer median of 47.5, although the displayed book shows thin buy-side support with bid depth at 0.22x of ask depth. The move looks more sector-linked than company-specific because sector factors explain 47.7% of the current driver mix.",
      "conclusion": "The recent decline looks primarily sector-linked, with solid structural liquidity but thinner buy-side support making the tape feel weaker on the way down."
    },
    "drivers": {
      "overall": "Sector moves are the main force right now, with 47.7% of recent price action tied to the sector. That matters because the stock has fallen 7.8% over one month, which is weaker than the 4.5% drop for peers and the 0.6% rise in the market, leaving it exposed when the group is under pressure.",
      "beta": "The current read is more balanced than a pure stock-specific tape, because sector influence is now the largest driver. That means near-term trading conditions are being shaped as much by the group backdrop as by company news.",
      "rolling_change": "The broader monthly pattern still looks company-driven, with March and April mostly company-led and May still clearly company-driven. That suggests the current sector-led spell looks more like a near-term shift in tone than a full change in how the stock usually trades."
    },
    "regime": {
      "overall": "The backdrop is broadly supportive because liquidity remains strong for the stock's size, with a 3M score of 71.9 compared with a peer median of 47.5. That matters because access may generally hold up better than peers even as the tape stays under pressure.",
      "current": "The active state is calm and liquid, but recent price action is still weak, with a 1M return of -7.8% compared with -4.5% for peers and +0.6% for the market.",
      "transitions": "This state looks reasonably settled rather than fleeting, with a typical run length of about 3.2 days, although the read is mixed rather than fully clean.",
      "trading_implications": "Trading conditions may feel orderly overall, but they are not especially robust because displayed bid depth is only 0.22x ask depth even with a 1-tick spread."
    },
    "execution": {
      "overall": "Displayed liquidity looks thin buy-side at present, with bid depth at 0.22x of ask depth while the spread remains 1 tick. That means the top of book is orderly on price but not well supported on the buy side.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with materially less buying interest than selling interest at the touch. That matters because selling pressure can meet a thinner buffer even when the quoted spread is still tight.",
      "peer_context": "This sits uneasily with the broader liquidity picture, because the 3M liquidity score of 71.9 is well above the peer median of 47.5, yet the live book is offering less immediate buy-side support than that ranking implies. Trade-size context is informative but based on 82 trading days and 12,508 trades, so the displayed imbalance carries more weight in the near-term read."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like.",
      "retail_heavy": "Retail-like trades account for 86.9% of trade count and 34.0% of trade value, compared with institution-like trades at 1.3% of count and 19.4% of value. That leaves the tape led by many smaller tickets rather than a large institutional presence, which makes participation look broad but mixed in depth.",
      "institutional_gap": "Institution-like activity is small in count at 1.3% even though it reaches 19.4% of trade value. That gap suggests institutions are present in value terms but are not setting the overall flow pattern.",
      "peer_comparison": "The mix stands out as retail-leaning relative to the peer comparison in the report tables, which matters because the stock’s liquidity is being supported more by breadth of participation than by institutional scale."
    },
    "price_moving": {
      "overall": "The cleanest read is that price formation is being set in a market with broad retail-like participation and thinner institutional presence. Because trade count and trade value both lean retail-like, the signal points to a tape driven by many individual trades rather than a dominant institutional flow. That makes day-to-day activity look present, but it can leave trading quality more exposed when displayed buy-side depth is thin. Positive and negative price-moving trade asymmetry is available in the report data.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears immaterial to the current trading picture. The primary read is low short interest, which suggests the recent 1M underperformance of -7.8% compared with peers at -4.5% and the market at +0.6% is not being driven by a clear build in short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "The short trend looks stable rather than rising. That matters because it points away from short selling as a new source of trading stress, leaving the broader market and sector backdrop more relevant to how the stock is trading.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity appears through the continuous session rather than around the auctions, with 95.6% of activity during continuous trading. That matters because access looks available across the day, not just at the open or close.",
      "hhi_interpretation": "The concentration score of 0.306 indicates trading is not heavily concentrated in a few time windows. That gives the intraday profile a steadier feel.",
      "best_times": "Peak buckets show where activity clusters through the day.",
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
        1.618705035971223,
        3.8669064748201443,
        47.122302158273385,
        52.15827338129496,
        41.18705035971223,
        64.74820143884892,
        47.84172661870504,
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
        27124.5,
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
        "volatility": 0.5204364145972824,
        "adv": 201552.0,
        "spread_pct": 0.02406252744357603,
        "turnover_ratio": 0.0014727100023655777,
        "amihud": 7.93307656608847e-08,
        "trades": 56.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6926041787403202,
          "median": 0.4764662895324073,
          "min": 0.0,
          "max": 7.013811259728676,
          "p5": 0.1591077817118035,
          "p95": 2.2320494622153784,
          "count": 556
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3357216.8998488514,
          "median": 13424.5,
          "min": 0.0,
          "max": 285980477.7,
          "p5": 0.0,
          "p95": 13869777.625,
          "count": 556
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.10111334164067089,
          "median": 0.03205574912891988,
          "min": 0.0002805689255457263,
          "max": 1.246661981728742,
          "p5": 0.003473730480762897,
          "p95": 0.44957360805416136,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.006562372400952674,
          "median": 0.00026322939118916995,
          "min": 0.0,
          "max": 2.3103289170127215,
          "p5": 0.0,
          "p95": 0.011946076955592232,
          "count": 549
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.4015503698557682e-05,
          "median": 1.3935396338180557e-07,
          "min": 0.0,
          "max": 0.0010537018191403248,
          "p5": 0.0,
          "p95": 3.080752025444165e-05,
          "count": 550
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 495.67446043165467,
          "median": 7.0,
          "min": 0.0,
          "max": 11391.0,
          "p5": 0.0,
          "p95": 2961.25,
          "count": 556
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8751391215406725,
          "median": 0.4355799639623332,
          "min": 0.2561279708655206,
          "max": 2.4261024794970623,
          "p5": 0.278613040445472,
          "p95": 2.364623406099731,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1687583.875,
          "median": 6520.5,
          "min": 0.0,
          "max": 12624816.0,
          "p5": 0.0,
          "p95": 8436329.599999994,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15916390678075976,
          "median": 0.02193926089093169,
          "min": 0.0013514156670242764,
          "max": 0.6666666666666666,
          "p5": 0.004623064452066456,
          "p95": 0.6048748353096177,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002474142791872788,
          "median": 0.00013173637737095244,
          "min": 0.0,
          "max": 0.009669927990213068,
          "p5": 0.0,
          "p95": 0.009197202414943359,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.5522035910309207e-05,
          "median": 5.231511216127649e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 2.772191811278055e-10,
          "p95": 0.00023462645834977132,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 442.5,
          "median": 4.5,
          "min": 0.0,
          "max": 3103.0,
          "p5": 0.0,
          "p95": 2146.7999999999984,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 96114.1375,
          "median": 6520.5,
          "min": 0.0,
          "max": 657712.0,
          "p5": 0.0,
          "p95": 451132.75999999966,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 53.25,
          "median": 4.5,
          "min": 0.0,
          "max": 371.0,
          "p5": 0.0,
          "p95": 251.2999999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.0239861259317633,
          "median": 0.5567708814374212,
          "min": 0.3203710268082389,
          "max": 2.4261024794970623,
          "p5": 0.3330046764201279,
          "p95": 2.364623406099731,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16945126898814322,
          "median": 0.04239782442822769,
          "min": 0.010698983624287645,
          "max": 0.6666666666666666,
          "p5": 0.013016489126546018,
          "p95": 0.6048748353096177,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.199868342859141,
          "median": 1.6480061349693251,
          "min": 1.0,
          "max": 20.833333333333332,
          "p5": 1.0129629629629628,
          "p95": 14.679166666666656,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.553608699652473e-05,
          "median": 5.797514938764653e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.00023462645834977132,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002027508939815298,
          "median": 0.00013173637737095244,
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
        "stock": -0.07843137254901988,
        "market": 0.009962093242706471,
        "sector": -0.014649320936856225,
        "peers": -0.007537688442211032
      },
      {
        "horizon": "1M",
        "stock": -0.0784313725490201,
        "market": 0.00613165413872041,
        "sector": -0.04477781304364603,
        "peers": -0.0452137793539481
      },
      {
        "horizon": "3M",
        "stock": -0.04081632653061351,
        "market": 0.008827226270709199,
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
      "share_market": 0.17586593223793473,
      "share_sector": 0.4766203569744197,
      "share_idio": 0.3475137107876456,
      "beta_market": -0.8261082843606712,
      "beta_sector": 2.571857222727189,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 80,
        "reporting_window_days": 63,
        "available_history_days": 80,
        "n_regimes": 3,
        "current_regime": 0,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9999515193268519,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.17586593223793473,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "17.6%",
            "display_range": null,
            "display_text": "17.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
            "kind": "share_pct",
            "value_pct": 17.6,
            "plain_english": "Market explains about 17.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.4766203569744197,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.7%",
            "display_range": null,
            "display_text": "47.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
            "kind": "share_pct",
            "value_pct": 47.7,
            "plain_english": "Sector explains about 47.7% of price moves in the current state."
          },
          "company_share": {
            "median": 0.3475137107876456,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.8%",
            "display_range": null,
            "display_text": "34.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
            "kind": "share_pct",
            "value_pct": 34.8,
            "plain_english": "Company-specific explains about 34.8% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.8261082843606712,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.83",
            "display_range": null,
            "display_text": "-0.83",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.83% stock move in the opposite direction in this state.",
            "value_num": -0.83
          },
          "beta_stock_lag": {
            "median": -0.3955662273052247,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.40",
            "display_range": null,
            "display_text": "-0.40",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
            "kind": "lag_beta",
            "value_num": -0.4
          },
          "beta_sector": {
            "median": 2.571857222727189,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.57",
            "display_range": null,
            "display_text": "2.57",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 2.57% stock move in the same direction in this state.",
            "value_num": 2.57
          },
          "beta_market_lag": {
            "median": 0.5080453115085293,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.51",
            "display_range": null,
            "display_text": "0.51",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
            "kind": "lag_beta",
            "value_num": 0.51
          },
          "beta_sector_lag": {
            "median": -0.5417384922659243,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.54",
            "display_range": null,
            "display_text": "-0.54",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
            "kind": "lag_beta",
            "value_num": -0.54
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 80 trading days relative to the 252-day target."
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
            "period_label": "2026-05-04 to 2026-05-21",
            "n_obs": 14,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6073553933214906,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.7%",
              "display_range": null,
              "display_text": "60.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 60.7,
              "plain_english": "Company-specific explains about 60.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.034068457857488674,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "3.4%",
                "display_range": null,
                "display_text": "3.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 3.4,
                "plain_english": "Market explains about 3.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3585761488210208,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.9%",
                "display_range": null,
                "display_text": "35.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 35.9,
                "plain_english": "Sector explains about 35.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6073553933214906,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "60.7%",
                "display_range": null,
                "display_text": "60.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 60.7,
                "plain_english": "Company-specific explains about 60.7% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.3663850689691007,
            "expected_duration_days": 3.151378050972844,
            "current_probability": 0.9999515193268519,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 29.310805517528056,
            "volatility": {
              "median": 0.020256199237867242,
              "low": 0.020256199237867242,
              "high": 0.020256199237867242
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.11769939006285354,
            "jump_rate": 9.52995100474301e-28,
            "risk_score": 0.0,
            "metrics": {
              "rolling_vol_10d": 0.026352866580499186,
              "downside_vol_10d": 0.01501343797091022,
              "drawdown_21d": 0.05338584449752346,
              "amihud_stress": 1.3033271460777314,
              "spread_rel": 221.49649062995462,
              "spread_ticks": 1.0811742125454715,
              "log_notional": 12.858807068038756,
              "log_trade_count": 4.564197663502162
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.3697143611408228,
            "expected_duration_days": 3.491409329990533,
            "current_probability": 2.113013671316392e-09,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 29.57714889126582,
            "volatility": {
              "median": 0.013141092861663371,
              "low": 0.013141092861663371,
              "high": 0.013141092861663371
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.13849133612791692,
            "jump_rate": 1.0245991316673012e-27,
            "risk_score": 0.6983784138842292,
            "metrics": {
              "rolling_vol_10d": 0.03841769833586895,
              "downside_vol_10d": 0.019375291794893473,
              "drawdown_21d": 0.09705856540925271,
              "amihud_stress": 1.436706450369479,
              "spread_rel": 253.24363185074398,
              "spread_ticks": 1.1976127858115462,
              "log_notional": 12.29957743906951,
              "log_trade_count": 4.166358164817966
            }
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "pct_time": 0.2639005698900765,
            "expected_duration_days": 1.4134100431658703,
            "current_probability": 4.847856013436039e-05,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 21.11204559120612,
            "volatility": {
              "median": 0.05835159537074669,
              "low": 0.05835159537074669,
              "high": 0.05835159537074669
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.42572922531841295,
            "jump_rate": 0.23683162194774102,
            "risk_score": 0.9358974962157847,
            "metrics": {
              "rolling_vol_10d": 0.038517294123569856,
              "downside_vol_10d": 0.021505785472691278,
              "drawdown_21d": 0.07753237746161723,
              "amihud_stress": 2.6239511083926366,
              "spread_rel": 243.3998528063369,
              "spread_ticks": 1.1569867740875586,
              "log_notional": 12.995675341419206,
              "log_trade_count": 4.569025594066626
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.6826785032372439,
              0.03564561513376416,
              0.281675881628992
            ],
            [
              0.05017855937293912,
              0.7135827095923148,
              0.23623873103474613
            ],
            [
              0.3546581742899655,
              0.3528505948992778,
              0.29249123081075673
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              20.0,
              1.0,
              8.0
            ],
            [
              1.0,
              21.0,
              7.0
            ],
            [
              8.0,
              7.0,
              6.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 0.9999515193268519,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 2.113013671316392e-09,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "probability": 4.847856013436039e-05,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.11771432294967882,
          "current_score": 0.7295769218629071,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 3,
          "criterion": "bic_with_min_state_support",
          "bic": 3995.807245206188,
          "loglik": -1691.1617581759222,
          "n_params": 140,
          "bic_delta_vs_next_best": 8.712193432705135,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 4004.519438638893,
              "loglik": -1802.877507441785,
              "n_params": 91,
              "converged": true,
              "iterations": 8,
              "best_seed": 2027,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4004.5194389190992,
                  "loglik": -1802.877507581888,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 7
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4004.5194400797404,
                  "loglik": -1802.8775081622086,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 7
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4004.519438638893,
                  "loglik": -1802.877507441785,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 8
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 3995.807245206188,
              "loglik": -1691.1617581759222,
              "n_params": 140,
              "converged": true,
              "iterations": 17,
              "best_seed": 2027,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 3995.807279897206,
                  "loglik": -1691.1617755214315,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 15
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 3995.8072626876783,
                  "loglik": -1691.1617669166674,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 15
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 3995.807245206188,
                  "loglik": -1691.1617581759222,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 17
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
                "bic": 3995.807279897206,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 3995.8072626876783,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 3995.807245206188,
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
          "history_used_days": 80,
          "n_features": 22,
          "candidate_states": [
            2,
            3
          ],
          "selected_states": 3,
          "bic_delta_vs_next_best": 8.712193432705135,
          "state_count_interpretation": "80 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 8.71 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 140,
            "observations_per_parameter": 0.5714285714285714,
            "parameter_pressure_label": "underidentified_pressure"
          },
          "state_occupancy": {
            "min_effective_days_required": 3.0,
            "min_effective_days_observed": 21.11204559120612,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 29.310805517528056,
                "pct_time": 0.3663850689691007,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 29.57714889126582,
                "pct_time": 0.3697143611408228,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Jump / Tail Shock",
                "effective_days": 21.11204559120612,
                "pct_time": 0.2639005698900765,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.6826785032372439,
              0.7135827095923148,
              0.29249123081075673
            ],
            "expected_duration_days": [
              3.151378050972844,
              3.491409329990533,
              1.4134100431658703
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
                "bic": 3995.807279897206,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 3995.8072626876783,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 3995.807245206188,
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
              "jump_probability": 0.11769939006285354,
              "jump_rate": 9.52995100474301e-28,
              "rolling_vol_10d": 0.026352866580499186,
              "downside_vol_10d": 0.01501343797091022,
              "drawdown_21d": 0.05338584449752346,
              "amihud_stress": 1.3033271460777314,
              "spread_rel": 221.49649062995462,
              "spread_ticks": 1.0811742125454715,
              "log_notional": 12.858807068038756,
              "log_trade_count": 4.564197663502162
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.6983784138842292,
              "jump_probability": 0.13849133612791692,
              "jump_rate": 1.0245991316673012e-27,
              "rolling_vol_10d": 0.03841769833586895,
              "downside_vol_10d": 0.019375291794893473,
              "drawdown_21d": 0.09705856540925271,
              "amihud_stress": 1.436706450369479,
              "spread_rel": 253.24363185074398,
              "spread_ticks": 1.1976127858115462,
              "log_notional": 12.29957743906951,
              "log_trade_count": 4.166358164817966
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "risk_score": 0.9358974962157847,
              "jump_probability": 0.42572922531841295,
              "jump_rate": 0.23683162194774102,
              "rolling_vol_10d": 0.038517294123569856,
              "downside_vol_10d": 0.021505785472691278,
              "drawdown_21d": 0.07753237746161723,
              "amihud_stress": 2.6239511083926366,
              "spread_rel": 243.3998528063369,
              "spread_ticks": 1.1569867740875586,
              "log_notional": 12.995675341419206,
              "log_trade_count": 4.569025594066626
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
            "trade_date": "2026-05-08",
            "state": 0,
            "probabilities": [
              0.9999999995822559,
              1.389430991695765e-13,
              4.1760511402981643e-10
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999991942728,
              1.890054506638097e-12,
              8.038370573210909e-10
            ],
            "jump_probability": 0.15342342320669214,
            "jump_score": 0.7647834005312865
          },
          {
            "trade_date": "2026-05-11",
            "state": 0,
            "probabilities": [
              0.9999994849642732,
              5.150357250976399e-07,
              1.7623216169507092e-15
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999930172554895,
              6.982744507059261e-06,
              3.3914718791909832e-15
            ],
            "jump_probability": 0.08465912494854519,
            "jump_score": 0.17985770611557708
          },
          {
            "trade_date": "2026-05-12",
            "state": 0,
            "probabilities": [
              0.9999871781558111,
              1.2806201546724218e-05,
              1.5642642252028527e-08
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9998257716204245,
              0.0001741982740668688,
              3.010550856787446e-08
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 0,
            "probabilities": [
              0.999999962369134,
              3.763086493151571e-08,
              1.0076617515925439e-15
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999994880344906,
              5.119655075317287e-07,
              1.9396382192848373e-15
            ],
            "jump_probability": 0.11954441942542748,
            "jump_score": 0.5136943776258901
          },
          {
            "trade_date": "2026-05-14",
            "state": 0,
            "probabilities": [
              0.9999999881526304,
              1.1274117949315933e-08,
              5.732517068775531e-10
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999860054115,
              1.3442533721521202e-08,
              5.520547716758682e-10
            ],
            "jump_probability": 0.1761035251487376,
            "jump_score": 0.9082844769410316
          },
          {
            "trade_date": "2026-05-15",
            "state": 2,
            "probabilities": [
              7.337826397467771e-10,
              7.862620845540375e-14,
              0.9999999992661388
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              3.813015768509174e-10,
              5.538075496652683e-13,
              0.9999999996181446
            ],
            "jump_probability": 0.4129553242945577,
            "jump_score": 1.9441204243737138
          },
          {
            "trade_date": "2026-05-18",
            "state": 0,
            "probabilities": [
              0.9997370428198795,
              0.0002588502413068543,
              4.106938813626766e-06
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9996874061546137,
              0.0003086388391130007,
              3.955006273149911e-06
            ],
            "jump_probability": 0.15746080633751697,
            "jump_score": 0.7915273015955989
          },
          {
            "trade_date": "2026-05-19",
            "state": 2,
            "probabilities": [
              6.308944854646689e-05,
              2.3642254006165127e-11,
              0.9999369105278113
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              3.277671495046284e-05,
              1.6710012407114533e-10,
              0.9999672231179494
            ],
            "jump_probability": 0.4020900394710912,
            "jump_score": 1.904987710770918
          },
          {
            "trade_date": "2026-05-20",
            "state": 0,
            "probabilities": [
              0.9999919219217441,
              1.44319718975012e-07,
              7.933758536882818e-06
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999827667974964,
              1.9624579804939073e-06,
              1.5270744523195436e-05
            ],
            "jump_probability": 0.15976564994621897,
            "jump_score": 0.8065454022671728
          },
          {
            "trade_date": "2026-05-21",
            "state": 0,
            "probabilities": [
              0.9999515193268519,
              2.113013671316392e-09,
              4.847856013436039e-05
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999515193268519,
              2.113013671316392e-09,
              4.847856013436039e-05
            ],
            "jump_probability": 0.14823819128605287,
            "jump_score": 0.7295769218629071
          }
        ],
        "methodology": {
          "estimation_window_days": 80,
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
          "market_link_display": "-0.83",
          "sector_link_display": "2.57",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.83% stock move in the opposite direction in this state. This is a point estimate from 80 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.57% stock move in the same direction in this state. This is a point estimate from 80 trading days.",
          "stock_persistence_display": "-0.40",
          "point_estimate_note": "Point estimate only because the current state has 80 trading days.",
          "history_limited_note": "Read is based on 80 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Calm / Liquid",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 47.7,
          "driver_share_display": "47.7%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 80 trading days relative to the 252-day target.",
          "history_days": 80,
          "history_limited": true,
          "volatility_label": "Calm / Liquid",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 11.8,
          "jump_risk_score": 0.73,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.6826785032372439,
          "effective_days": 29.3,
          "persistence_note": "This state looks more persistent, with a typical run length of about 3.2 days.",
          "expected_duration_days": 3.2
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
          "period_label": "2026-05-04 to 2026-05-21",
          "n_obs": 14,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.034068457857488674,
          "share_sector": 0.3585761488210208,
          "share_company": 0.6073553933214906,
          "share_market_display": "3.4%",
          "share_sector_display": "35.9%",
          "share_company_display": "60.7%",
          "dominant_share_display": "60.7%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 3,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9999515193268519,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.3663850689691007,
          0.3697143611408228,
          0.2639005698900765
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.3663850689691007,
            "expected_duration_days": 3.151378050972844,
            "current_probability": 0.9999515193268519,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 29.310805517528056,
            "volatility": {
              "median": 0.020256199237867242,
              "low": 0.020256199237867242,
              "high": 0.020256199237867242
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.11769939006285354,
            "jump_rate": 9.52995100474301e-28,
            "risk_score": 0.0,
            "metrics": {
              "rolling_vol_10d": 0.026352866580499186,
              "downside_vol_10d": 0.01501343797091022,
              "drawdown_21d": 0.05338584449752346,
              "amihud_stress": 1.3033271460777314,
              "spread_rel": 221.49649062995462,
              "spread_ticks": 1.0811742125454715,
              "log_notional": 12.858807068038756,
              "log_trade_count": 4.564197663502162
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.3697143611408228,
            "expected_duration_days": 3.491409329990533,
            "current_probability": 2.113013671316392e-09,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 29.57714889126582,
            "volatility": {
              "median": 0.013141092861663371,
              "low": 0.013141092861663371,
              "high": 0.013141092861663371
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.13849133612791692,
            "jump_rate": 1.0245991316673012e-27,
            "risk_score": 0.6983784138842292,
            "metrics": {
              "rolling_vol_10d": 0.03841769833586895,
              "downside_vol_10d": 0.019375291794893473,
              "drawdown_21d": 0.09705856540925271,
              "amihud_stress": 1.436706450369479,
              "spread_rel": 253.24363185074398,
              "spread_ticks": 1.1976127858115462,
              "log_notional": 12.29957743906951,
              "log_trade_count": 4.166358164817966
            }
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "pct_time": 0.2639005698900765,
            "expected_duration_days": 1.4134100431658703,
            "current_probability": 4.847856013436039e-05,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 21.11204559120612,
            "volatility": {
              "median": 0.05835159537074669,
              "low": 0.05835159537074669,
              "high": 0.05835159537074669
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.42572922531841295,
            "jump_rate": 0.23683162194774102,
            "risk_score": 0.9358974962157847,
            "metrics": {
              "rolling_vol_10d": 0.038517294123569856,
              "downside_vol_10d": 0.021505785472691278,
              "drawdown_21d": 0.07753237746161723,
              "amihud_stress": 2.6239511083926366,
              "spread_rel": 243.3998528063369,
              "spread_ticks": 1.1569867740875586,
              "log_notional": 12.995675341419206,
              "log_trade_count": 4.569025594066626
            }
          }
        ],
        "transitions": [
          [
            0.6826785032372439,
            0.03564561513376416,
            0.281675881628992
          ],
          [
            0.05017855937293912,
            0.7135827095923148,
            0.23623873103474613
          ],
          [
            0.3546581742899655,
            0.3528505948992778,
            0.29249123081075673
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.235,
          "quantity": 408800.0,
          "value": 96068.0
        },
        {
          "level": 2,
          "price": 0.23,
          "quantity": 536000.0,
          "value": 123280.0
        },
        {
          "level": 3,
          "price": 0.225,
          "quantity": 661000.0,
          "value": 148725.0
        },
        {
          "level": 4,
          "price": 0.22,
          "quantity": 345400.0,
          "value": 75988.0
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
          "quantity": 51000.0,
          "value": 10200.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.24,
          "quantity": 398000.0,
          "value": 95520.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 300500.0,
          "value": 73622.5
        },
        {
          "level": 3,
          "price": 0.25,
          "quantity": 378700.0,
          "value": 94675.0
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
          "quantity": 933300.0,
          "value": 242658.0
        },
        {
          "level": 6,
          "price": 0.265,
          "quantity": 1100500.0,
          "value": 291632.5
        },
        {
          "level": 7,
          "price": 0.27,
          "quantity": 635700.0,
          "value": 171639.0
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
          "quantity": 192800.0,
          "value": 53984.00000000001
        },
        {
          "level": 10,
          "price": 0.285,
          "quantity": 264000.0,
          "value": 75240.0
        },
        {
          "level": 11,
          "price": 0.29,
          "quantity": 316500.0,
          "value": 91785.0
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
          "quantity": 3520000.0,
          "value": 1056000.0
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
          "quantity": 10000.0,
          "value": 3350.0
        },
        {
          "level": 18,
          "price": 0.34,
          "quantity": 2000.0,
          "value": 680.0
        },
        {
          "level": 19,
          "price": 0.35,
          "quantity": 136000.0,
          "value": 47600.0
        },
        {
          "level": 20,
          "price": 0.355,
          "quantity": 10000.0,
          "value": 3550.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-21 08:59:58.040300000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2375,
        "spread_pct": 0.02105263157894739,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 552061.0,
        "ask_depth_notional_displayed": 2525480.0,
        "bid_depth_notional_top10": 552061.0,
        "ask_depth_notional_top10": 2525480.0,
        "bid_ask_depth_ratio": 0.2186
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 120,
        "history_limited": true,
        "trade_days_used": 82,
        "n_trades_used": 12508,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-05-21",
        "window_label": "Jan 22, 2026 to May 21, 2026",
        "window_short_label": "Jan 22-May 21",
        "trade_days_label": "82 trading days",
        "trade_count_label": "12,508 trades",
        "window_detail_label": "82 trading days • 12,508 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to May 21, 2026 (82 trading days • 12,508 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10946.1,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.98,
            "pct_of_adv": 3.97
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14500.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.63,
            "pct_of_adv": 5.26
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 165705.22,
            "impact_pct": -0.019483999999999998,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 30.02,
            "pct_of_adv": 60.14
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-21",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8146327279925059584",
            "timestamp": "2026-05-20 22:59:01.513800000",
            "local_timestamp": "2026-05-21 06:59:01",
            "posted_price": 0.3,
            "size_shares": 3284000.0,
            "notional": 985200.0,
            "impact_pct": -0.054018,
            "filled_pct": 56.0,
            "levels_consumed": 7,
            "pct_of_bid_depth": 178.46,
            "price_vs_mid_pct": 26.316,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8151472994343089152",
            "timestamp": "2026-05-21 00:39:49.476500000",
            "local_timestamp": "2026-05-21 08:39:49",
            "posted_price": 0.24,
            "size_shares": 500000.0,
            "notional": 120000.0,
            "impact_pct": -0.014798,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 21.74,
            "price_vs_mid_pct": 1.053,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 3,
            "order_id": "8151077170159746048",
            "timestamp": "2026-05-20 22:59:01.513800000",
            "local_timestamp": "2026-05-21 06:59:01",
            "posted_price": 0.26,
            "size_shares": 384500.0,
            "notional": 99970.0,
            "impact_pct": -0.011365,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 18.11,
            "price_vs_mid_pct": 9.474,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-21",
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
            "bid_depth_notional": 486778.5,
            "ask_depth_notional": 2482113.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 554278.5,
            "ask_depth_notional": 2482113.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 569433.5,
            "ask_depth_notional": 2483313.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 571827.5,
            "ask_depth_notional": 2481183.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 572052.5,
            "ask_depth_notional": 2481993.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 557917.5,
            "ask_depth_notional": 2474364.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 572033.5,
            "ask_depth_notional": 2466548.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 569097.5,
            "ask_depth_notional": 2528548.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 572985.5,
            "ask_depth_notional": 2528548.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 561985.5,
            "ask_depth_notional": 2530388.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 582119.0,
            "ask_depth_notional": 2530388.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 582119.0,
            "ask_depth_notional": 2544938.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 577419.0,
            "ask_depth_notional": 2537688.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 552061.0,
            "ask_depth_notional": 2525480.0,
            "mid_price": 0.2375
          }
        ],
        "summary": {
          "median_spread_pct": 0.02105263157894739,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 570630.5,
          "median_ask_depth_notional": 2504396.75,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 18.1,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 123.9
        },
        {
          "ticker": "J03",
          "pct": 436.8
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
          "pct": 25136.0
        },
        {
          "ticker": "LVR",
          "pct": 49800.8
        },
        {
          "ticker": "KUX",
          "pct": null
        },
        {
          "ticker": "532",
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
          "n_trades": 16,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-21",
          "last_trade_date": "2026-05-21",
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
            "retail_pct": 0.875,
            "mixed_pct": 0.125,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.47337137422729436,
            "mixed_qty_pct": 0.5266286257727056,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4727733451023758,
            "mixed_notional_pct": 0.5272266548976242,
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
              "retail": 14,
              "mixed": 2,
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
            "avg": 6301.84375,
            "median": 3312.0
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
              "retail_pct": 0.875,
              "mixed_pct": 0.125,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.47337137422729436,
              "mixed_qty_pct": 0.5266286257727056,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4727733451023758,
              "mixed_notional_pct": 0.5272266548976242,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6301.84375,
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
              "avg_trade_size": 59.400000000000006,
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
              "retail_pct": 0.9834437086092715,
              "mixed_pct": 0.016556291390728478,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7035486003967379,
              "mixed_qty_pct": 0.29645139960326206,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.703242435043661,
              "mixed_notional_pct": 0.2967575649563389,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1407.4023178807947,
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
              "retail_pct": 0.9411764705882353,
              "mixed_pct": 0.058823529411764705,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5916828946541868,
              "mixed_qty_pct": 0.40831710534581317,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.597762320849526,
              "mixed_notional_pct": 0.40223767915047404,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2376.4117647058824,
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
              "retail_pct": 0.9210526315789473,
              "mixed_pct": 0.07894736842105263,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6240398625676818,
              "mixed_qty_pct": 0.37596013743231815,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6256287278025762,
              "mixed_notional_pct": 0.37437127219742383,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4155.739473684211,
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
          "n_trades": 141,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-05-15",
          "last_trade_date": "2026-05-21",
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
            "retail_pct": 0.7446808510638298,
            "mixed_pct": 0.22695035460992907,
            "instit_pct": 0.028368794326241134,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.22244355088153417,
            "mixed_qty_pct": 0.49175378905041756,
            "instit_qty_pct": 0.2858026600680483,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.22409195245377364,
            "mixed_notional_pct": 0.4944191664229992,
            "instit_notional_pct": 0.2814888811232271,
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
              "retail": 105,
              "mixed": 32,
              "institutional": 4,
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
            "avg": 13922.397163120568,
            "median": 5000.0
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
              "retail_pct": 0.7446808510638298,
              "mixed_pct": 0.22695035460992907,
              "instit_pct": 0.028368794326241134,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.22244355088153417,
              "mixed_qty_pct": 0.49175378905041756,
              "instit_qty_pct": 0.2858026600680483,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.22409195245377364,
              "mixed_notional_pct": 0.4944191664229992,
              "instit_notional_pct": 0.2814888811232271,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 13922.397163120568,
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
              "avg_trade_size": 1657.525,
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
              "avg_trade_size": 2963.3333333333335,
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
              "retail_pct": 0.967843137254902,
              "mixed_pct": 0.03137254901960784,
              "instit_pct": 0.000784313725490196,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5338652124150003,
              "mixed_qty_pct": 0.43762202921968624,
              "instit_qty_pct": 0.028512758365313404,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5322908635771759,
              "mixed_notional_pct": 0.43899233378056185,
              "instit_notional_pct": 0.02871680264226228,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2220.7945098039218,
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
              "retail_pct": 0.9524200164068909,
              "mixed_pct": 0.0475799835931091,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4544027779256153,
              "mixed_qty_pct": 0.5455972220743848,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4499714471025459,
              "mixed_notional_pct": 0.550028552897454,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1982.8488105004103,
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
              "retail_pct": 0.9230769230769231,
              "mixed_pct": 0.07692307692307693,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6686547382372432,
              "mixed_qty_pct": 0.3313452617627568,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6685449121644017,
              "mixed_notional_pct": 0.3314550878355983,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9283.076923076924,
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
              "retail_pct": 0.7818181818181819,
              "mixed_pct": 0.21818181818181817,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3924951382430033,
              "mixed_qty_pct": 0.6075048617569967,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.39117833833194726,
              "mixed_notional_pct": 0.6088216616680526,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7159.257272727273,
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
          "n_trades": 831,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-22",
          "last_trade_date": "2026-05-21",
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
            "retail_pct": 0.8098676293622142,
            "mixed_pct": 0.16726835138387486,
            "instit_pct": 0.02286401925391095,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2742474362759028,
            "mixed_qty_pct": 0.4789811869414916,
            "instit_qty_pct": 0.24677137678260558,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2735343384318182,
            "mixed_notional_pct": 0.4790724494044748,
            "instit_notional_pct": 0.247393212163707,
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
              "retail": 673,
              "mixed": 139,
              "institutional": 19,
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
            "avg": 10990.8146811071,
            "median": 3900.0
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
              "retail_pct": 0.8098676293622142,
              "mixed_pct": 0.16726835138387486,
              "instit_pct": 0.02286401925391095,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2742474362759028,
              "mixed_qty_pct": 0.4789811869414916,
              "instit_qty_pct": 0.24677137678260558,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2735343384318182,
              "mixed_notional_pct": 0.4790724494044748,
              "instit_notional_pct": 0.247393212163707,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10990.8146811071,
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
              "avg_trade_size": 363.7558232931727,
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
              "retail_pct": 0.9875,
              "mixed_pct": 0.0125,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8640803411748521,
              "mixed_qty_pct": 0.1359196588251479,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8648065375411983,
              "mixed_notional_pct": 0.13519346245880176,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1799.60625,
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
              "retail_pct": 0.9807692307692307,
              "mixed_pct": 0.019230769230769232,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8602375960866527,
              "mixed_qty_pct": 0.13976240391334732,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8579335719730073,
              "mixed_notional_pct": 0.14206642802699262,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2409.4903846153848,
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
              "retail_pct": 0.9430144323761345,
              "mixed_pct": 0.053265883053117094,
              "instit_pct": 0.0037196845707484004,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.39304699784797076,
              "mixed_qty_pct": 0.4842493313507428,
              "instit_qty_pct": 0.12270367080128647,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.39417749200817864,
              "mixed_notional_pct": 0.48348068209312334,
              "instit_notional_pct": 0.12234182589869799,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3126.429400386847,
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
              "retail_pct": 0.9281598155973876,
              "mixed_pct": 0.07184018440261238,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5437587158215822,
              "mixed_qty_pct": 0.4562412841784178,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5401754029897573,
              "mixed_notional_pct": 0.4598245970102428,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3508.986630810603,
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
              "retail_pct": 0.871967654986523,
              "mixed_pct": 0.12264150943396226,
              "instit_pct": 0.005390835579514825,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4695506155839032,
              "mixed_qty_pct": 0.45652214883322384,
              "instit_qty_pct": 0.07392723558287297,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.470478879257034,
              "mixed_notional_pct": 0.45256834177757843,
              "instit_notional_pct": 0.07695277896538745,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6040.015229110513,
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
          "n_trades": 2835,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-20",
          "last_trade_date": "2026-05-21",
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
            "retail_pct": 0.8694885361552028,
            "mixed_pct": 0.11746031746031746,
            "instit_pct": 0.013051146384479718,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34410366260651737,
            "mixed_qty_pct": 0.4650735188889105,
            "instit_qty_pct": 0.1908228185045721,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3401034132458783,
            "mixed_notional_pct": 0.4663788632333631,
            "instit_notional_pct": 0.19351772352075863,
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
              "retail": 2465,
              "mixed": 333,
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
            "avg": 7497.768783068783,
            "median": 2200.0
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
              "retail_pct": 0.8694885361552028,
              "mixed_pct": 0.11746031746031746,
              "instit_pct": 0.013051146384479718,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.34410366260651737,
              "mixed_qty_pct": 0.4650735188889105,
              "instit_qty_pct": 0.1908228185045721,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3401034132458783,
              "mixed_notional_pct": 0.4663788632333631,
              "instit_notional_pct": 0.19351772352075863,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7497.768783068783,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9928057553956835,
              "mixed_pct": 0.007194244604316547,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8816053092912597,
              "mixed_qty_pct": 0.1183946907087403,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8812305988122223,
              "mixed_notional_pct": 0.1187694011877777,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1160.59190647482,
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
              "retail_pct": 0.9318912598655364,
              "mixed_pct": 0.06810874013446361,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5999889444474926,
              "mixed_qty_pct": 0.4000110555525074,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5837331067222397,
              "mixed_notional_pct": 0.4162668932777603,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3636.2922537269806,
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
              "retail_pct": 0.9281609195402298,
              "mixed_pct": 0.07183908045977011,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5771057814853435,
              "mixed_qty_pct": 0.4228942185146565,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5814788420329737,
              "mixed_notional_pct": 0.4185211579670262,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4104.795977011494,
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
              "retail_pct": 0.9275133204520171,
              "mixed_pct": 0.06587036711751273,
              "instit_pct": 0.006616312430470168,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3730500252774501,
              "mixed_qty_pct": 0.4575579575820313,
              "instit_qty_pct": 0.16939201714051855,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.37300930857795517,
              "mixed_notional_pct": 0.4569239659159363,
              "instit_notional_pct": 0.17006672550610852,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3989.808156215235,
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
              "retail_pct": 0.8913412563667232,
              "mixed_pct": 0.10243350311262026,
              "instit_pct": 0.00622524052065648,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4587505767767085,
              "mixed_qty_pct": 0.41727233283465265,
              "instit_qty_pct": 0.12397709038863883,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4530391033728826,
              "mixed_notional_pct": 0.42171126431046013,
              "instit_notional_pct": 0.12524963231665728,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5653.447707979626,
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
      "n_trades": 2835,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-02-20",
      "last_trade_date": "2026-05-21",
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
        "retail_pct": 0.8694885361552028,
        "mixed_pct": 0.11746031746031746,
        "instit_pct": 0.013051146384479718,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.3401034132458783,
        "mixed_notional_pct": 0.4663788632333631,
        "instit_notional_pct": 0.19351772352075863,
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
        "avg": 7497.768783068783,
        "median": 2200.0
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
            "n_trades": 525,
            "n_runs": 0,
            "retail_pct": 0.7885714285714286,
            "mixed_pct": 0.18476190476190477,
            "instit_pct": 0.02666666666666667,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 12350.55619047619,
            "avg_run_notional": null,
            "retail_qty_pct": 0.25891772994068424,
            "mixed_qty_pct": 0.4839956085392962,
            "instit_qty_pct": 0.2570866615200196,
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
            "total_quantity": 25777300.0
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
          "retail_pct": 0.8694885361552028,
          "mixed_pct": 0.11746031746031746,
          "instit_pct": 0.013051146384479718,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.34410366260651737,
          "mixed_qty_pct": 0.4650735188889105,
          "instit_qty_pct": 0.1908228185045721,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3401034132458783,
          "mixed_notional_pct": 0.4663788632333631,
          "instit_notional_pct": 0.19351772352075863,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 7497.768783068783,
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
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9928057553956835,
          "mixed_pct": 0.007194244604316547,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8816053092912597,
          "mixed_qty_pct": 0.1183946907087403,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8812305988122223,
          "mixed_notional_pct": 0.1187694011877777,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1160.59190647482,
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
          "retail_pct": 0.9318912598655364,
          "mixed_pct": 0.06810874013446361,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5999889444474926,
          "mixed_qty_pct": 0.4000110555525074,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5837331067222397,
          "mixed_notional_pct": 0.4162668932777603,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3636.2922537269806,
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
          "retail_pct": 0.9281609195402298,
          "mixed_pct": 0.07183908045977011,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5771057814853435,
          "mixed_qty_pct": 0.4228942185146565,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5814788420329737,
          "mixed_notional_pct": 0.4185211579670262,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4104.795977011494,
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
          "retail_pct": 0.9275133204520171,
          "mixed_pct": 0.06587036711751273,
          "instit_pct": 0.006616312430470168,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3730500252774501,
          "mixed_qty_pct": 0.4575579575820313,
          "instit_qty_pct": 0.16939201714051855,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.37300930857795517,
          "mixed_notional_pct": 0.4569239659159363,
          "instit_notional_pct": 0.17006672550610852,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3989.808156215235,
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
          "retail_pct": 0.8913412563667232,
          "mixed_pct": 0.10243350311262026,
          "instit_pct": 0.00622524052065648,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.4587505767767085,
          "mixed_qty_pct": 0.41727233283465265,
          "instit_qty_pct": 0.12397709038863883,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.4530391033728826,
          "mixed_notional_pct": 0.42171126431046013,
          "instit_notional_pct": 0.12524963231665728,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5653.447707979626,
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
            "retail_pct": 0.875,
            "mixed_pct": 0.125,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.47337137422729436,
            "mixed_qty_pct": 0.5266286257727056,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4727733451023758,
            "mixed_notional_pct": 0.5272266548976242,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6301.84375,
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
            "avg_trade_size": 59.400000000000006,
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
            "retail_pct": 0.9834437086092715,
            "mixed_pct": 0.016556291390728478,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7035486003967379,
            "mixed_qty_pct": 0.29645139960326206,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.703242435043661,
            "mixed_notional_pct": 0.2967575649563389,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1407.4023178807947,
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
            "retail_pct": 0.9411764705882353,
            "mixed_pct": 0.058823529411764705,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5916828946541868,
            "mixed_qty_pct": 0.40831710534581317,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.597762320849526,
            "mixed_notional_pct": 0.40223767915047404,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2376.4117647058824,
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
            "retail_pct": 0.9210526315789473,
            "mixed_pct": 0.07894736842105263,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6240398625676818,
            "mixed_qty_pct": 0.37596013743231815,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6256287278025762,
            "mixed_notional_pct": 0.37437127219742383,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4155.739473684211,
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
            "retail_pct": 0.7446808510638298,
            "mixed_pct": 0.22695035460992907,
            "instit_pct": 0.028368794326241134,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.22244355088153417,
            "mixed_qty_pct": 0.49175378905041756,
            "instit_qty_pct": 0.2858026600680483,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.22409195245377364,
            "mixed_notional_pct": 0.4944191664229992,
            "instit_notional_pct": 0.2814888811232271,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 13922.397163120568,
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
            "avg_trade_size": 1657.525,
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
            "avg_trade_size": 2963.3333333333335,
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
            "retail_pct": 0.967843137254902,
            "mixed_pct": 0.03137254901960784,
            "instit_pct": 0.000784313725490196,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5338652124150003,
            "mixed_qty_pct": 0.43762202921968624,
            "instit_qty_pct": 0.028512758365313404,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5322908635771759,
            "mixed_notional_pct": 0.43899233378056185,
            "instit_notional_pct": 0.02871680264226228,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2220.7945098039218,
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
            "retail_pct": 0.9524200164068909,
            "mixed_pct": 0.0475799835931091,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4544027779256153,
            "mixed_qty_pct": 0.5455972220743848,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4499714471025459,
            "mixed_notional_pct": 0.550028552897454,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1982.8488105004103,
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
            "retail_pct": 0.9230769230769231,
            "mixed_pct": 0.07692307692307693,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6686547382372432,
            "mixed_qty_pct": 0.3313452617627568,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6685449121644017,
            "mixed_notional_pct": 0.3314550878355983,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9283.076923076924,
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
            "retail_pct": 0.7818181818181819,
            "mixed_pct": 0.21818181818181817,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3924951382430033,
            "mixed_qty_pct": 0.6075048617569967,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.39117833833194726,
            "mixed_notional_pct": 0.6088216616680526,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7159.257272727273,
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
            "retail_pct": 0.8098676293622142,
            "mixed_pct": 0.16726835138387486,
            "instit_pct": 0.02286401925391095,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2742474362759028,
            "mixed_qty_pct": 0.4789811869414916,
            "instit_qty_pct": 0.24677137678260558,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2735343384318182,
            "mixed_notional_pct": 0.4790724494044748,
            "instit_notional_pct": 0.247393212163707,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10990.8146811071,
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
            "avg_trade_size": 363.7558232931727,
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
            "retail_pct": 0.9875,
            "mixed_pct": 0.0125,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8640803411748521,
            "mixed_qty_pct": 0.1359196588251479,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8648065375411983,
            "mixed_notional_pct": 0.13519346245880176,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1799.60625,
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
            "retail_pct": 0.9807692307692307,
            "mixed_pct": 0.019230769230769232,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8602375960866527,
            "mixed_qty_pct": 0.13976240391334732,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8579335719730073,
            "mixed_notional_pct": 0.14206642802699262,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2409.4903846153848,
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
            "retail_pct": 0.9430144323761345,
            "mixed_pct": 0.053265883053117094,
            "instit_pct": 0.0037196845707484004,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.39304699784797076,
            "mixed_qty_pct": 0.4842493313507428,
            "instit_qty_pct": 0.12270367080128647,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.39417749200817864,
            "mixed_notional_pct": 0.48348068209312334,
            "instit_notional_pct": 0.12234182589869799,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3126.429400386847,
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
            "retail_pct": 0.9281598155973876,
            "mixed_pct": 0.07184018440261238,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5437587158215822,
            "mixed_qty_pct": 0.4562412841784178,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5401754029897573,
            "mixed_notional_pct": 0.4598245970102428,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3508.986630810603,
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
            "retail_pct": 0.871967654986523,
            "mixed_pct": 0.12264150943396226,
            "instit_pct": 0.005390835579514825,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4695506155839032,
            "mixed_qty_pct": 0.45652214883322384,
            "instit_qty_pct": 0.07392723558287297,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.470478879257034,
            "mixed_notional_pct": 0.45256834177757843,
            "instit_notional_pct": 0.07695277896538745,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6040.015229110513,
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
            "retail_pct": 0.8694885361552028,
            "mixed_pct": 0.11746031746031746,
            "instit_pct": 0.013051146384479718,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34410366260651737,
            "mixed_qty_pct": 0.4650735188889105,
            "instit_qty_pct": 0.1908228185045721,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3401034132458783,
            "mixed_notional_pct": 0.4663788632333631,
            "instit_notional_pct": 0.19351772352075863,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7497.768783068783,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9928057553956835,
            "mixed_pct": 0.007194244604316547,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8816053092912597,
            "mixed_qty_pct": 0.1183946907087403,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8812305988122223,
            "mixed_notional_pct": 0.1187694011877777,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1160.59190647482,
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
            "retail_pct": 0.9318912598655364,
            "mixed_pct": 0.06810874013446361,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5999889444474926,
            "mixed_qty_pct": 0.4000110555525074,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5837331067222397,
            "mixed_notional_pct": 0.4162668932777603,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3636.2922537269806,
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
            "retail_pct": 0.9281609195402298,
            "mixed_pct": 0.07183908045977011,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5771057814853435,
            "mixed_qty_pct": 0.4228942185146565,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5814788420329737,
            "mixed_notional_pct": 0.4185211579670262,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4104.795977011494,
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
            "retail_pct": 0.9275133204520171,
            "mixed_pct": 0.06587036711751273,
            "instit_pct": 0.006616312430470168,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3730500252774501,
            "mixed_qty_pct": 0.4575579575820313,
            "instit_qty_pct": 0.16939201714051855,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.37300930857795517,
            "mixed_notional_pct": 0.4569239659159363,
            "instit_notional_pct": 0.17006672550610852,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3989.808156215235,
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
            "retail_pct": 0.8913412563667232,
            "mixed_pct": 0.10243350311262026,
            "instit_pct": 0.00622524052065648,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4587505767767085,
            "mixed_qty_pct": 0.41727233283465265,
            "instit_qty_pct": 0.12397709038863883,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4530391033728826,
            "mixed_notional_pct": 0.42171126431046013,
            "instit_notional_pct": 0.12524963231665728,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5653.447707979626,
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
      "total_trades": 7024,
      "price_moving_trades": 1376,
      "pct_price_moving": 19.58997722095672,
      "all_movers": {
        "count": 1376,
        "avg_size": 7213.644622093023,
        "median_size": 977.5,
        "retail_count": 1169,
        "mixed_count": 188,
        "institutional_count": 19,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 84.9563953488372,
        "mixed_pct": 13.662790697674417,
        "instit_pct": 1.380813953488372,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 688,
        "avg_size": 5217.883720930233,
        "median_size": 73.5,
        "retail_count": 609,
        "mixed_count": 73,
        "institutional_count": 6,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.51744186046511,
        "mixed_pct": 10.61046511627907,
        "instit_pct": 0.872093023255814,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 688,
        "avg_size": 9209.405523255815,
        "median_size": 2450.0,
        "retail_count": 560,
        "mixed_count": 115,
        "institutional_count": 13,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.3953488372093,
        "mixed_pct": 16.71511627906977,
        "instit_pct": 1.88953488372093,
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
        "n_days_short_data": 65,
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
            "avg_short_ratio": 0.0023681243753767055,
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
          "avg_short_ratio": 0.006064370008885524,
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
          "opening": 0.07942347393823837,
          "continuous": 0.9110725324661304,
          "closing": 0.007552454869628909,
          "auctions": 0.08892746753386958,
          "other": 0.0
        },
        "1W": {
          "opening": 0.049106061771185275,
          "continuous": 0.9407796892223531,
          "closing": 0.009346737052315937,
          "auctions": 0.05922031077764693,
          "other": 0.0
        },
        "1M": {
          "opening": 0.040151178185161764,
          "continuous": 0.9322983583999499,
          "closing": 0.018419635842245333,
          "auctions": 0.06770164160005009,
          "other": 0.0
        },
        "3M": {
          "opening": 0.026132990447200626,
          "continuous": 0.956405875058998,
          "closing": 0.01167487011103143,
          "auctions": 0.043594124941002003,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.33644734893901135,
        "1W": 0.34112857997763063,
        "1M": 0.3261529039387178,
        "3M": 0.3056460118758072
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0203
        },
        {
          "time": "09:00",
          "avg_share": 0.1338
        },
        {
          "time": "09:30",
          "avg_share": 0.1096
        },
        {
          "time": "10:00",
          "avg_share": 0.0703
        },
        {
          "time": "10:30",
          "avg_share": 0.0679
        },
        {
          "time": "11:00",
          "avg_share": 0.0465
        },
        {
          "time": "11:30",
          "avg_share": 0.0548
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
          "avg_share": 0.078
        },
        {
          "time": "13:30",
          "avg_share": 0.057
        },
        {
          "time": "14:00",
          "avg_share": 0.0584
        },
        {
          "time": "14:30",
          "avg_share": 0.0634
        },
        {
          "time": "15:00",
          "avg_share": 0.0569
        },
        {
          "time": "15:30",
          "avg_share": 0.048
        },
        {
          "time": "16:00",
          "avg_share": 0.0384
        },
        {
          "time": "16:30",
          "avg_share": 0.0602
        },
        {
          "time": "17:00",
          "avg_share": 0.0316
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.318205866772105,
          "hhi": 0.273408373305004,
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
          "auctions_pct": 11.760964129271862,
          "hhi": 0.823878321860778,
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
          "auctions_pct": 4.653695511745813,
          "hhi": 0.5158162520454164,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.1085823045040994,
          "hhi": 0.7598975982786323,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 9.888668514668606,
          "hhi": 0.46102551118815666,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 3.135030601028587,
          "hhi": 0.498610647728599,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.1962032893647256,
          "hhi": 0.1873911293762873,
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
