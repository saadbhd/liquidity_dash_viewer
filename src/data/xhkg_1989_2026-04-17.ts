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
      "ticker": "1989",
      "name": "DELTON",
      "marketCap": 6141000000.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "6088",
      "name": "FIT HON TENG",
      "marketCap": 57042198247.32,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "2382",
      "name": "SUNNY OPTICAL",
      "marketCap": 67003714080.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "6613",
      "name": "LENS",
      "marketCap": 5971584960.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "2018",
      "name": "AAC TECH",
      "marketCap": 41955359250.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "1415",
      "name": "COWELL",
      "marketCap": 24015623508.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "1478",
      "name": "Q TECH",
      "marketCap": 10008376250.5,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "2208",
      "name": "GOLDWIND",
      "marketCap": 10845344833.98,
      "sector": "Environmental Engineering",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "1072",
      "name": "DONGFANG ELEC",
      "marketCap": 16417920000.0,
      "sector": "Environmental Engineering",
      "industry": "Industrials - Industrial Engineering"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1989",
    "company": "DELTON",
    "asof_date": "2026-04-17",
    "industry": "Industrials - Industrial Engineering",
    "sector": "Electronic Components",
    "market_cap_display": "6.1B",
    "market_cap_category": "large",
    "universe_total": 2575,
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
          "score_pca": 99.57281553398059,
          "score_pca_percentile": 99.57281553398059,
          "rank_pca": 12,
          "total": 2575,
          "adv_notional_sgd": 1159262560.0,
          "adv_volume_shares": 7323200.0,
          "free_float_shares": 29285200.0,
          "turnover_ratio": 0.2500648791881223,
          "votes": 17823.0,
          "trades": 17823.0,
          "spread_pct": 0.0028009599338342794,
          "spread_ticks": 4.268786918593279,
          "amihud": 1.1275641103624167e-10,
          "volatility": 1.4489997854606311
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5414164227370362,
          "loadings": {
            "log_adv": 0.5411431316364753,
            "log_trades": 0.5028440244640013,
            "log_turnover": 0.5022157258266974,
            "neg_spread": 0.4030272109250826,
            "neg_amihud": 0.029431837528738278,
            "neg_vol": -0.19696242552707743
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
          "peer_median_adv": 412133610.5,
          "peer_median_score_pca": 96.81553398058253,
          "peer_median_trades": 11350.5,
          "peer_median_volatility": 0.3564657588445151,
          "peer_median_spread_pct": 0.0014020694514502805,
          "peer_median_spread_ticks": 1.5330370504739015,
          "peer_median_amihud": 6.22574729892009e-11,
          "peer_median_turnover_ratio": 0.01993478240324626,
          "target_vs_peer": {
            "score_pca_delta": 2.76,
            "adv_delta_pct": 181.3,
            "trades_delta_pct": 57.02,
            "volatility_delta_pct": -306.49,
            "spread_pct_delta_pct": -99.77,
            "spread_ticks_delta_pct": 178.45,
            "amihud_delta_pct": -81.11,
            "turnover_ratio_delta_pct": 1154.41
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1989",
            "score_pca": 99.57281553398059,
            "rank_pca": 12,
            "adv": 1159262560.0,
            "trades": 17823.0,
            "volatility": 1.4489997854606311,
            "spread_pct": 0.0028009599338342794,
            "spread_ticks": 4.268786918593279,
            "amihud": 1.1275641103624167e-10,
            "turnover_ratio": 0.2500648791881223,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 99.06796116504854,
            "rank_pca": 25,
            "adv": 788086151.7099999,
            "trades": 17476.0,
            "volatility": 0.9798635537549253,
            "spread_pct": 0.0018955746141036463,
            "spread_ticks": 1.5330370504739015,
            "amihud": 9.673927357346543e-12,
            "turnover_ratio": 0.05800150887906386,
            "is_target": false
          },
          {
            "ticker": "2382",
            "score_pca": 96.58252427184466,
            "rank_pca": 89,
            "adv": 494512269.99999994,
            "trades": 11221.0,
            "volatility": 0.3219350905084556,
            "spread_pct": 0.0008463910379723057,
            "spread_ticks": 1.0799439521320913,
            "amihud": 2.0715940658118404e-11,
            "turnover_ratio": 0.012222586211914488,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 98.01941747572815,
            "rank_pca": 52,
            "adv": 386560380.8,
            "trades": 11495.0,
            "volatility": 0.4975188042425349,
            "spread_pct": 0.0011093047057137576,
            "spread_ticks": null,
            "amihud": 6.478594828275798e-11,
            "turnover_ratio": 0.08070919158248378,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 91.37864077669903,
            "rank_pca": 223,
            "adv": 195372537.56,
            "trades": 3398.0,
            "volatility": 0.41194833718443385,
            "spread_pct": 0.0015136738126703762,
            "spread_ticks": null,
            "amihud": 1.1282553335275474e-10,
            "turnover_ratio": 0.007094742012644098,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 86.99029126213593,
            "rank_pca": 336,
            "adv": 92263380.0,
            "trades": 1867.0,
            "volatility": 0.29626606943795,
            "spread_pct": 0.004302632840895183,
            "spread_ticks": null,
            "amihud": 1.1579632876836558e-10,
            "turnover_ratio": 0.012466062477405022,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 82.52427184466019,
            "rank_pca": 451,
            "adv": 37308531.68,
            "trades": 1286.0,
            "volatility": 0.22727211095802852,
            "spread_pct": 0.002042784324253474,
            "spread_ticks": 1.7169741697416974,
            "amihud": 3.5225654403178323e-10,
            "turnover_ratio": 0.00998441208954649,
            "is_target": false
          },
          {
            "ticker": "2208",
            "score_pca": 98.873786407767,
            "rank_pca": 30,
            "adv": 773589741.87,
            "trades": 27693.0,
            "volatility": 0.35142418589259383,
            "spread_pct": 0.0011125404467997465,
            "spread_ticks": null,
            "amihud": 1.7742595917701453e-11,
            "turnover_ratio": 0.0680653006957733,
            "is_target": false
          },
          {
            "ticker": "1072",
            "score_pca": 97.04854368932038,
            "rank_pca": 77,
            "adv": 437706840.2,
            "trades": 11480.0,
            "volatility": 0.36150733179643635,
            "spread_pct": 0.001290465090230185,
            "spread_ticks": null,
            "amihud": 5.97289976956438e-11,
            "turnover_ratio": 0.0274035023290875,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2575,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4606083327846296,
              "median": 0.29743321154702856,
              "min": 0.0,
              "max": 14.47512907154,
              "p5": 0.0,
              "p95": 1.5351663917752916,
              "count": 2575
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61874683.598444775,
              "median": 259600.0,
              "min": 0.0,
              "max": 7015444150.0,
              "p5": 0.0,
              "p95": 272825684.62999994,
              "count": 2575
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.046854686613493,
              "median": 0.027648554974235982,
              "min": 0.0005202294325766778,
              "max": 0.7648559970834851,
              "p5": 0.001340978222259295,
              "p95": 0.15664967142989358,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006784061498978354,
              "median": 0.0010535360233514944,
              "min": 0.0,
              "max": 1.8839653158976088,
              "p5": 0.0,
              "p95": 0.020805457425247174,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5493919141099805e-05,
              "median": 8.679816414938958e-09,
              "min": 0.0,
              "max": 0.021212121212121206,
              "p5": 0.0,
              "p95": 6.919964849284608e-06,
              "count": 2187
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1143.6753398058252,
              "median": 23.0,
              "min": 0.0,
              "max": 56653.0,
              "p5": 0.0,
              "p95": 6264.49999999998,
              "count": 2575
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.1657606571578467,
              "median": 0.41786713187310626,
              "min": 0.0,
              "max": 8.581790455065843,
              "p5": 0.022310000610603453,
              "p95": 5.16882498265569,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 139269387.36458334,
              "median": 2116484.0,
              "min": 0.0,
              "max": 1159262560.0,
              "p5": 6736.500000000001,
              "p95": 744050069.4534993,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0357293990969102,
              "median": 0.01979598507356363,
              "min": 0.0008463910379723057,
              "max": 0.20507897908467448,
              "p5": 0.0011699600717572504,
              "p95": 0.12337690378875253,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.030159693622229335,
              "median": 0.003232468161641707,
              "min": 0.0,
              "max": 0.2500648791881223,
              "p5": 4.591666666666667e-05,
              "p95": 0.21305925898100275,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.195719438104293e-06,
              "median": 1.3714795559851351e-08,
              "min": 0.0,
              "max": 1.0012415395089921e-05,
              "p5": 1.077812868742373e-11,
              "p95": 8.71278385898269e-06,
              "count": 23
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2797.9583333333335,
              "median": 105.0,
              "min": 0.0,
              "max": 17823.0,
              "p5": 2.1500000000000004,
              "p95": 16578.849999999988,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 400674979.22749996,
              "median": 412133610.5,
              "min": 37308531.68,
              "max": 788086151.7099999,
              "p5": 56542728.592,
              "p95": 783012408.2659999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 10739.5,
              "median": 11350.5,
              "min": 1286.0,
              "max": 27693.0,
              "p5": 1489.35,
              "p95": 24117.049999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4309669354719198,
              "median": 0.3564657588445151,
              "min": 0.22727211095802852,
              "max": 0.9798635537549253,
              "p5": 0.25141999642600105,
              "p95": 0.8110428914255884,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0017641708590798344,
              "median": 0.0014020694514502805,
              "min": 0.0008463910379723057,
              "max": 0.004302632840895183,
              "p5": 0.0009384108216818138,
              "p95": 0.003511685860070584,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.4433183907825633,
              "median": 1.5330370504739015,
              "min": 1.0799439521320913,
              "max": 1.7169741697416974,
              "p5": 1.1252532619662723,
              "p95": 1.6985804578149177,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.419072700805896e-11,
              "median": 6.22574729892009e-11,
              "min": 9.673927357346543e-12,
              "max": 3.5225654403178323e-10,
              "p5": 1.2497961353470762e-11,
              "p95": 2.694954686895869e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.034493413284739816,
              "median": 0.01993478240324626,
              "min": 0.007094742012644098,
              "max": 0.08070919158248378,
              "p5": 0.008106126539559935,
              "p95": 0.0762838297721351,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.13071428571428578,
            "market": -0.0014824289551570446,
            "sector": 0.011912967558128873,
            "peers": 0.011912967558128873,
            "vs_market": 0.13219671466944283,
            "vs_sector": 0.11880131815615691,
            "vs_peers": 0.11880131815615691
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 98.09708737864078,
          "score_pca_percentile": 98.09708737864078,
          "rank_pca": 50,
          "total": 2575,
          "adv_notional_sgd": 348186650.0,
          "adv_volume_shares": 2688700.0,
          "free_float_shares": 29285200.0,
          "turnover_ratio": 0.09181088058131752,
          "votes": 6817.0,
          "trades": 6817.0,
          "spread_pct": 0.0030168612064208613,
          "spread_ticks": 4.042046377334657,
          "amihud": 1.1275641103624167e-10,
          "volatility": 1.2555752260930548
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5432830029966449,
          "loadings": {
            "log_adv": 0.5392916966458509,
            "log_trades": 0.49780581692586323,
            "log_turnover": 0.4925285924997889,
            "neg_spread": 0.442348622364023,
            "neg_amihud": 0.15177475043338814,
            "neg_vol": 0.007844842721364624
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
          "peer_median_adv": 334690425.17,
          "peer_median_score_pca": 97.7864077669903,
          "peer_median_trades": 10863.5,
          "peer_median_volatility": 0.4347376869512977,
          "peer_median_spread_pct": 0.0013749910495444262,
          "peer_median_spread_ticks": 1.6323737032717451,
          "peer_median_amihud": 8.511153658761055e-11,
          "peer_median_turnover_ratio": 0.020143824340403474,
          "target_vs_peer": {
            "score_pca_delta": 0.31,
            "adv_delta_pct": 4.0,
            "trades_delta_pct": -37.25,
            "volatility_delta_pct": -188.81,
            "spread_pct_delta_pct": -119.41,
            "spread_ticks_delta_pct": 147.62,
            "amihud_delta_pct": -32.48,
            "turnover_ratio_delta_pct": 355.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1989",
            "score_pca": 98.09708737864078,
            "rank_pca": 50,
            "adv": 348186650.0,
            "trades": 6817.0,
            "volatility": 1.2555752260930548,
            "spread_pct": 0.0030168612064208613,
            "spread_ticks": 4.042046377334657,
            "amihud": 1.1275641103624167e-10,
            "turnover_ratio": 0.09181088058131752,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 98.79611650485437,
            "rank_pca": 32,
            "adv": 523972162.5,
            "trades": 12494.0,
            "volatility": 0.5757916958193812,
            "spread_pct": 0.0021386789288654986,
            "spread_ticks": 1.6323737032717451,
            "amihud": 2.0322947838543992e-11,
            "turnover_ratio": 0.04077422676688922,
            "is_target": false
          },
          {
            "ticker": "2382",
            "score_pca": 97.70873786407766,
            "rank_pca": 60,
            "adv": 467461530.0,
            "trades": 11722.0,
            "volatility": 0.2093169256677439,
            "spread_pct": 0.0008493192098502901,
            "spread_ticks": 1.0799439521320913,
            "amihud": 2.0715940658118404e-11,
            "turnover_ratio": 0.01179592769416674,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 97.86407766990291,
            "rank_pca": 56,
            "adv": 231674010.14000002,
            "trades": 10005.0,
            "volatility": 0.9644345552167428,
            "spread_pct": 0.0012735732953767817,
            "spread_ticks": null,
            "amihud": 1.0954667936496656e-10,
            "turnover_ratio": 0.043302415935202815,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 90.09708737864077,
            "rank_pca": 256,
            "adv": 140171646.0,
            "trades": 2755.0,
            "volatility": 0.330916397915062,
            "spread_pct": 0.001459517008858667,
            "spread_ticks": null,
            "amihud": 1.331854297358978e-10,
            "turnover_ratio": 0.005202384370932301,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 89.35922330097087,
            "rank_pca": 275,
            "adv": 92263380.0,
            "trades": 2138.0,
            "volatility": 0.2844996375671251,
            "spread_pct": 0.0035319388365714277,
            "spread_ticks": null,
            "amihud": 1.5182420210050718e-10,
            "turnover_ratio": 0.012466062477405022,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 85.35922330097088,
            "rank_pca": 378,
            "adv": 44594649.42,
            "trades": 1543.0,
            "volatility": 0.1781543564703181,
            "spread_pct": 0.0022227614959305997,
            "spread_ticks": 1.8529051987767584,
            "amihud": 1.8147836050056063e-10,
            "turnover_ratio": 0.012005088665566502,
            "is_target": false
          },
          {
            "ticker": "2208",
            "score_pca": 98.873786407767,
            "rank_pca": 30,
            "adv": 457368215.43,
            "trades": 16362.0,
            "volatility": 0.5385589759875334,
            "spread_pct": 0.0011186582012908753,
            "spread_ticks": null,
            "amihud": 1.882350201157855e-11,
            "turnover_ratio": 0.04169375816049016,
            "is_target": false
          },
          {
            "ticker": "1072",
            "score_pca": 98.48543689320388,
            "rank_pca": 40,
            "adv": 437706840.2,
            "trades": 12328.0,
            "volatility": 0.8086109355190371,
            "spread_pct": 0.001290465090230185,
            "spread_ticks": null,
            "amihud": 6.067639381025453e-11,
            "turnover_ratio": 0.027821586203401926,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2575,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6070809292231268,
              "median": 0.39039048579477803,
              "min": 0.0,
              "max": 57.93821884055763,
              "p5": 0.06120082534240955,
              "p95": 1.688725505251723,
              "count": 2575
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59017235.65511437,
              "median": 240380.0,
              "min": 0.0,
              "max": 10120884167.0,
              "p5": 0.0,
              "p95": 265915648.2519999,
              "count": 2575
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.045959613864307906,
              "median": 0.02743103713977501,
              "min": 0.0005394359351211663,
              "max": 0.5759493670886077,
              "p5": 0.0014080487938885188,
              "p95": 0.15014827541321332,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005624150310343489,
              "median": 0.0009689316746890042,
              "min": 0.0,
              "max": 1.3257192548600834,
              "p5": 0.0,
              "p95": 0.01804831931774169,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.509601234857746e-06,
              "median": 3.13540710204197e-08,
              "min": 0.0,
              "max": 0.001058201058201058,
              "p5": 0.0,
              "p95": 9.439884104026736e-06,
              "count": 2517
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1125.871067961165,
              "median": 21.0,
              "min": 0.0,
              "max": 60783.0,
              "p5": 0.0,
              "p95": 6269.0999999999985,
              "count": 2575
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8162238505230931,
              "median": 0.441754542479631,
              "min": 0.08986450303442424,
              "max": 4.939331203586902,
              "p5": 0.1502615683676993,
              "p95": 2.9018125401000585,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 78779893.16916667,
              "median": 1442044.0,
              "min": 0.0,
              "max": 523972162.5,
              "p5": 0.0,
              "p95": 449570297.99999976,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.043585555639939925,
              "median": 0.021306607294285566,
              "min": 0.0008493192098502901,
              "max": 0.3778045838359469,
              "p5": 0.0013014648523990645,
              "p95": 0.12633775003992526,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.01382746790394094,
              "median": 0.0019519860275484604,
              "min": 0.0,
              "max": 0.09181088058131752,
              "p5": 0.0,
              "p95": 0.07173593418698089,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.1268810763895545e-06,
              "median": 1.1728340976924144e-08,
              "min": 0.0,
              "max": 7.582564984112102e-05,
              "p5": 2.0381896761480155e-11,
              "p95": 9.852823301859021e-06,
              "count": 24
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2037.2916666666667,
              "median": 58.5,
              "min": 0.0,
              "max": 12494.0,
              "p5": 0.0,
              "p95": 11464.449999999997,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 299401554.21124995,
              "median": 334690425.17,
              "min": 44594649.42,
              "max": 523972162.5,
              "p5": 61278705.123,
              "p95": 504193441.125,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 8668.375,
              "median": 10863.5,
              "min": 1543.0,
              "max": 16362.0,
              "p5": 1751.25,
              "p95": 15008.199999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4862854350203679,
              "median": 0.4347376869512977,
              "min": 0.1781543564703181,
              "max": 0.9644345552167428,
              "p5": 0.18906125568941715,
              "p95": 0.9098962883225458,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0017356140083717906,
              "median": 0.0013749910495444262,
              "min": 0.0008493192098502901,
              "max": 0.0035319388365714277,
              "p5": 0.0009435878568544949,
              "p95": 0.0030737267673471374,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.5217409513935316,
              "median": 1.6323737032717451,
              "min": 1.0799439521320913,
              "max": 1.8529051987767584,
              "p5": 1.1351869272460566,
              "p95": 1.830852049226257,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.707168200255345e-11,
              "median": 8.511153658761055e-11,
              "min": 1.882350201157855e-11,
              "max": 1.8147836050056063e-10,
              "p5": 1.9348308051016454e-11,
              "p95": 1.710994050605419e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.024382681284256837,
              "median": 0.020143824340403474,
              "min": 0.005202384370932301,
              "max": 0.043302415935202815,
              "p5": 0.007510124534064355,
              "p95": 0.042739385714053384,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.35068259385665534,
            "market": 0.013168381613536395,
            "sector": 0.015787736316018375,
            "peers": 0.02536755631791765,
            "vs_market": 0.33751421224311895,
            "vs_sector": 0.33489485754063697,
            "vs_peers": 0.3253150375387377
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 98.25242718446601,
          "score_pca_percentile": 98.25242718446601,
          "rank_pca": 46,
          "total": 2575,
          "adv_notional_sgd": 385486965.0,
          "adv_volume_shares": 3354050.0,
          "free_float_shares": 29285200.0,
          "turnover_ratio": 0.11453054785352328,
          "votes": 7790.5,
          "trades": 7790.5,
          "spread_pct": 0.0030692947633251225,
          "spread_ticks": 3.9954520567877854,
          "amihud": 1.7816760276751017e-10,
          "volatility": 1.4171416101854677
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.557763824903278,
          "loadings": {
            "log_adv": 0.5282486483576772,
            "log_trades": 0.48360940320322776,
            "log_turnover": 0.47988053980360706,
            "neg_spread": 0.4600935688491383,
            "neg_amihud": 0.2060132184134155,
            "neg_vol": 0.05159883624766007
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
          "peer_median_adv": 318266358.265,
          "peer_median_score_pca": 97.88349514563107,
          "peer_median_trades": 11089.0,
          "peer_median_volatility": 0.5788724378715668,
          "peer_median_spread_pct": 0.0013582572315709181,
          "peer_median_spread_ticks": 1.6290507722742165,
          "peer_median_amihud": 1.0306169812194802e-10,
          "peer_median_turnover_ratio": 0.022738072566807398,
          "target_vs_peer": {
            "score_pca_delta": 0.37,
            "adv_delta_pct": 21.1,
            "trades_delta_pct": -29.75,
            "volatility_delta_pct": -144.81,
            "spread_pct_delta_pct": -125.97,
            "spread_ticks_delta_pct": 145.26,
            "amihud_delta_pct": -72.87,
            "turnover_ratio_delta_pct": 403.7
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1989",
            "score_pca": 98.25242718446601,
            "rank_pca": 46,
            "adv": 385486965.0,
            "trades": 7790.5,
            "volatility": 1.4171416101854677,
            "spread_pct": 0.0030692947633251225,
            "spread_ticks": 3.9954520567877854,
            "amihud": 1.7816760276751017e-10,
            "turnover_ratio": 0.11453054785352328,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 98.71844660194175,
            "rank_pca": 34,
            "adv": 522504201.25,
            "trades": 12630.0,
            "volatility": 1.2928506163085938,
            "spread_pct": 0.0021486499663439305,
            "spread_ticks": 1.6290507722742165,
            "amihud": 8.355882164670917e-11,
            "turnover_ratio": 0.04087744142807121,
            "is_target": false
          },
          {
            "ticker": "2382",
            "score_pca": 98.67961165048543,
            "rank_pca": 35,
            "adv": 636643700.0,
            "trades": 13696.5,
            "volatility": 0.4726123457835029,
            "spread_pct": 0.0008633758677670068,
            "spread_ticks": 1.0930714787153322,
            "amihud": 2.6035781915762895e-11,
            "turnover_ratio": 0.016201378891252824,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 97.12621359223301,
            "rank_pca": 75,
            "adv": 213572069.63,
            "trades": 9548.0,
            "volatility": 1.0423216955621977,
            "spread_pct": 0.001304427858242873,
            "spread_ticks": null,
            "amihud": 1.2256457459718687e-10,
            "turnover_ratio": 0.03911930591719002,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 90.09708737864077,
            "rank_pca": 256,
            "adv": 147701283.75,
            "trades": 2973.0,
            "volatility": 0.4635500790054655,
            "spread_pct": 0.0014120866048989635,
            "spread_ticks": null,
            "amihud": 1.3599974192427357e-10,
            "turnover_ratio": 0.0056907779980332265,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 88.58252427184466,
            "rank_pca": 295,
            "adv": 90658827.16,
            "trades": 2002.5,
            "volatility": 0.4667246447168207,
            "spread_pct": 0.003223485468145328,
            "spread_ticks": null,
            "amihud": 1.6314720812030286e-10,
            "turnover_ratio": 0.012383633467240291,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 85.94174757281553,
            "rank_pca": 363,
            "adv": 49972034.995000005,
            "trades": 1739.0,
            "volatility": 0.6184112501375341,
            "spread_pct": 0.0022880939478281755,
            "spread_ticks": 1.8415722363520755,
            "amihud": 3.5408835928241575e-10,
            "turnover_ratio": 0.01359402636095791,
            "is_target": false
          },
          {
            "ticker": "2208",
            "score_pca": 99.06796116504854,
            "rank_pca": 25,
            "adv": 422960646.9,
            "trades": 15293.5,
            "volatility": 0.5393336256055996,
            "spread_pct": 0.0010939981031108082,
            "spread_ticks": null,
            "amihud": 3.886374274605018e-11,
            "turnover_ratio": 0.04072803479633673,
            "is_target": false
          },
          {
            "ticker": "1072",
            "score_pca": 98.64077669902913,
            "rank_pca": 36,
            "adv": 454120604.1,
            "trades": 13339.0,
            "volatility": 0.8455811757013826,
            "spread_pct": 0.0011665203412281593,
            "spread_ticks": null,
            "amihud": 6.864072756019482e-11,
            "turnover_ratio": 0.029274766242361968,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2575,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6785187584446521,
              "median": 0.5031591150787664,
              "min": 0.0,
              "max": 40.51557948897079,
              "p5": 0.13071026148057963,
              "p95": 1.6197167588917487,
              "count": 2575
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61355807.55782702,
              "median": 235750.0,
              "min": 0.0,
              "max": 10390458100.0,
              "p5": 0.0,
              "p95": 264209010.80599993,
              "count": 2575
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04671361783103118,
              "median": 0.028824467679845214,
              "min": 0.000564553133063189,
              "max": 0.5107771887131434,
              "p5": 0.0014033528311199147,
              "p95": 0.15146393367655442,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004928382399536928,
              "median": 0.0009860556386844662,
              "min": 0.0,
              "max": 0.5314984294109198,
              "p5": 0.0,
              "p95": 0.017638794959200677,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.355054732430693e-06,
              "median": 4.245835116073869e-08,
              "min": 0.0,
              "max": 0.0005375993919246796,
              "p5": 1.9807293568104015e-11,
              "p95": 6.487600393473062e-06,
              "count": 2559
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1149.590291262136,
              "median": 21.0,
              "min": 0.0,
              "max": 73556.5,
              "p5": 0.0,
              "p95": 6427.349999999993,
              "count": 2575
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8752457405476942,
              "median": 0.5611543869745337,
              "min": 0.2555396580317517,
              "max": 4.627807417676754,
              "p5": 0.28805935428319485,
              "p95": 2.0240231524425973,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 86224701.68010415,
              "median": 756679.3375,
              "min": 0.0,
              "max": 636643700.0,
              "p5": 0.0,
              "p95": 501951615.8124997,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04392777993028652,
              "median": 0.021226749182315555,
              "min": 0.0008633758677670068,
              "max": 0.33045586868035015,
              "p5": 0.0013205766702412865,
              "p95": 0.153321307780804,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.011709054341935107,
              "median": 0.0015721030154082054,
              "min": 0.0,
              "max": 0.11453054785352328,
              "p5": 0.0,
              "p95": 0.04061372110143903,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.719839926806084e-06,
              "median": 1.2991923513734967e-08,
              "min": 0.0,
              "max": 7.582564984112102e-05,
              "p5": 3.4664237875404844e-11,
              "p95": 1.371611341613292e-05,
              "count": 24
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2141.8333333333335,
              "median": 38.0,
              "min": 0.0,
              "max": 13696.5,
              "p5": 0.0,
              "p95": 12167.699999999993,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 317266670.973125,
              "median": 318266358.265,
              "min": 49972034.995000005,
              "max": 636643700.0,
              "p5": 64212412.25275,
              "p95": 596694875.4375,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 8902.6875,
              "median": 11089.0,
              "min": 1739.0,
              "max": 15293.5,
              "p5": 1831.225,
              "p95": 14734.55,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7176731791026372,
              "median": 0.5788724378715668,
              "min": 0.4635500790054655,
              "max": 1.2928506163085938,
              "p5": 0.4646611770044398,
              "p95": 1.205165494047355,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0016875797696956556,
              "median": 0.0013582572315709181,
              "min": 0.0008633758677670068,
              "max": 0.003223485468145328,
              "p5": 0.0009440936501373373,
              "p95": 0.0028960984360343243,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.5212314957805415,
              "median": 1.6290507722742165,
              "min": 1.0930714787153322,
              "max": 1.8415722363520755,
              "p5": 1.1466694080712205,
              "p95": 1.8203200899442895,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.24112369724112e-10,
              "median": 1.0306169812194802e-10,
              "min": 2.6035781915762895e-11,
              "max": 3.5408835928241575e-10,
              "p5": 3.0525568206363446e-11,
              "p95": 2.872589563756761e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.024733670637680522,
              "median": 0.022738072566807398,
              "min": 0.0056907779980332265,
              "max": 0.04087744142807121,
              "p5": 0.0080332774122557,
              "p95": 0.040825149106964144,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": 0.6876332622601289,
            "market": 0.04485357370993892,
            "sector": 0.07373204372814346,
            "peers": 0.1310464751960989,
            "vs_market": 0.64277968855019,
            "vs_sector": 0.6139012185319854,
            "vs_peers": 0.55658678706403
          }
        }
      },
      "max": {
        "label": "18D",
        "window_days": 18,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 18,
          "score_pca": 98.01941747572815,
          "score_pca_percentile": 98.01941747572815,
          "rank_pca": 52,
          "total": 2575,
          "adv_notional_sgd": 390318485.0,
          "adv_volume_shares": 3820150.0,
          "free_float_shares": 29285200.0,
          "turnover_ratio": 0.13044643710816384,
          "votes": 8472.0,
          "trades": 8472.0,
          "spread_pct": 0.003213944886899352,
          "spread_ticks": 3.9988527886147764,
          "amihud": 1.4901604223179666e-10,
          "volatility": 1.4067450195738007
        },
        "pca": {
          "valid": true,
          "window_days": 18,
          "variance_explained": 0.5633352851155758,
          "loadings": {
            "log_adv": 0.525943140848607,
            "log_trades": 0.48106578794565547,
            "log_turnover": 0.4808074002061959,
            "neg_spread": 0.4662341524754885,
            "neg_amihud": 0.19145296262659975,
            "neg_vol": 0.08219028127734411
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
          "peer_median_adv": 309174940.2075,
          "peer_median_score_pca": 97.02912621359224,
          "peer_median_trades": 9835.5,
          "peer_median_volatility": 0.6422499426952675,
          "peer_median_spread_pct": 0.0015056916518990265,
          "peer_median_spread_ticks": 1.6420305599168539,
          "peer_median_amihud": 1.1573069665979124e-10,
          "peer_median_turnover_ratio": 0.02523907074986569,
          "target_vs_peer": {
            "score_pca_delta": 0.99,
            "adv_delta_pct": 26.2,
            "trades_delta_pct": -13.86,
            "volatility_delta_pct": -119.03,
            "spread_pct_delta_pct": -113.45,
            "spread_ticks_delta_pct": 143.53,
            "amihud_delta_pct": -28.76,
            "turnover_ratio_delta_pct": 416.84
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1989",
            "score_pca": 98.01941747572815,
            "rank_pca": 52,
            "adv": 390318485.0,
            "trades": 8472.0,
            "volatility": 1.4067450195738007,
            "spread_pct": 0.003213944886899352,
            "spread_ticks": 3.9988527886147764,
            "amihud": 1.4901604223179666e-10,
            "turnover_ratio": 0.13044643710816384,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 98.44660194174757,
            "rank_pca": 41,
            "adv": 563832552.85,
            "trades": 13627.5,
            "volatility": 1.2643077526576716,
            "spread_pct": 0.0021736507097246224,
            "spread_ticks": 1.6420305599168539,
            "amihud": 1.0526420374308439e-10,
            "turnover_ratio": 0.04260288340940648,
            "is_target": false
          },
          {
            "ticker": "2382",
            "score_pca": 98.79611650485437,
            "rank_pca": 32,
            "adv": 728820852.5,
            "trades": 13551.5,
            "volatility": 0.4801977279237052,
            "spread_pct": 0.0009707187826150995,
            "spread_ticks": 1.1198800991041367,
            "amihud": 2.9817024936882515e-11,
            "turnover_ratio": 0.020079091684099118,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 95.68932038834951,
            "rank_pca": 112,
            "adv": 166941732.7,
            "trades": 6294.0,
            "volatility": 0.8385654916365525,
            "spread_pct": 0.0014947074131775363,
            "spread_ticks": null,
            "amihud": 1.6906325514614995e-10,
            "turnover_ratio": 0.03039904981563226,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 90.67961165048544,
            "rank_pca": 241,
            "adv": 158309374.82999998,
            "trades": 3451.5,
            "volatility": 0.5662275424205144,
            "spread_pct": 0.0015166758906205165,
            "spread_ticks": null,
            "amihud": 1.2619718957649809e-10,
            "turnover_ratio": 0.006195678047239636,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 88.46601941747572,
            "rank_pca": 298,
            "adv": 90658827.16,
            "trades": 2238.0,
            "volatility": 0.6567249883121524,
            "spread_pct": 0.0029471259700617923,
            "spread_ticks": null,
            "amihud": 2.2104523559595121e-10,
            "turnover_ratio": 0.012589152861457911,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 84.66019417475728,
            "rank_pca": 396,
            "adv": 42961649.71,
            "trades": 1515.5,
            "volatility": 0.5867150870113352,
            "spread_pct": 0.0026176648501992647,
            "spread_ticks": 2.0527141734823413,
            "amihud": 4.649340633686441e-10,
            "turnover_ratio": 0.01175659666470345,
            "is_target": false
          },
          {
            "ticker": "2208",
            "score_pca": 99.06796116504854,
            "rank_pca": 25,
            "adv": 451408147.71500003,
            "trades": 16014.0,
            "volatility": 0.6277748970783825,
            "spread_pct": 0.0011406626186854251,
            "spread_ticks": null,
            "amihud": 6.360792676100082e-11,
            "turnover_ratio": 0.041642963187467956,
            "is_target": false
          },
          {
            "ticker": "1072",
            "score_pca": 98.36893203883496,
            "rank_pca": 43,
            "adv": 454120604.1,
            "trades": 13377.0,
            "volatility": 0.7913536717882551,
            "spread_pct": 0.0012075982977756531,
            "spread_ticks": null,
            "amihud": 6.810515794767004e-11,
            "turnover_ratio": 0.030897763062558082,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2575,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7054881877887546,
              "median": 0.5515932522054436,
              "min": 0.0,
              "max": 30.19196489505355,
              "p5": 0.19714207316184468,
              "p95": 1.6058239386308877,
              "count": 2575
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 64378520.80560672,
              "median": 234105.0,
              "min": 0.0,
              "max": 10884567975.1,
              "p5": 0.0,
              "p95": 241711433.40649983,
              "count": 2575
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.046971852321218546,
              "median": 0.02938484746743884,
              "min": 0.0005953433012943406,
              "max": 0.610412445741231,
              "p5": 0.001476158809387328,
              "p95": 0.1495418331336119,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004470791667232748,
              "median": 0.0009210777062896449,
              "min": 0.0,
              "max": 0.5766395420386184,
              "p5": 0.0,
              "p95": 0.016781072094314783,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5577820355505525e-06,
              "median": 4.997045486252404e-08,
              "min": 0.0,
              "max": 0.0005375993919246796,
              "p5": 4.042280677790148e-11,
              "p95": 5.3099284656661524e-06,
              "count": 2567
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1172.0508737864077,
              "median": 20.0,
              "min": 0.0,
              "max": 78783.5,
              "p5": 0.0,
              "p95": 6140.399999999981,
              "count": 2575
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8667769119366383,
              "median": 0.6622497164301232,
              "min": 0.22814984065694785,
              "max": 3.8115753785457662,
              "p5": 0.30139743913885436,
              "p95": 1.6673740049427785,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 90293495.0671875,
              "median": 1038378.0,
              "min": 0.0,
              "max": 728820852.5,
              "p5": 0.0,
              "p95": 537805442.6724997,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.044681707003825476,
              "median": 0.021423431612551256,
              "min": 0.0009707187826150995,
              "max": 0.33045586868035015,
              "p5": 0.0014980026847939833,
              "p95": 0.1616741095545892,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.013141822317548596,
              "median": 0.0017774660452694023,
              "min": 0.0,
              "max": 0.13044643710816384,
              "p5": 0.0,
              "p95": 0.04077230837034032,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.15316106362678e-06,
              "median": 2.7364460847518337e-08,
              "min": 2.9817024936882515e-11,
              "max": 7.582564984112102e-05,
              "p5": 1.0840415161809645e-10,
              "p95": 1.0416972109329052e-05,
              "count": 24
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2101.8125,
              "median": 51.5,
              "min": 0.0,
              "max": 13627.5,
              "p5": 0.0,
              "p95": 12789.57499999999,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 332131717.695625,
              "median": 309174940.2075,
              "min": 42961649.71,
              "max": 728820852.5,
              "p5": 59655661.8175,
              "p95": 671074947.6225,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 8758.625,
              "median": 9835.5,
              "min": 1515.5,
              "max": 16014.0,
              "p5": 1768.375,
              "p95": 15178.724999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7264833948535712,
              "median": 0.6422499426952675,
              "min": 0.4801977279237052,
              "max": 1.2643077526576716,
              "p5": 0.5103081629975884,
              "p95": 1.1152979613002796,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0017586005666074887,
              "median": 0.0015056916518990265,
              "min": 0.0009707187826150995,
              "max": 0.0029471259700617923,
              "p5": 0.0010301991252397134,
              "p95": 0.0028318145781099074,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.6048749441677774,
              "median": 1.6420305599168539,
              "min": 1.1198800991041367,
              "max": 2.0527141734823413,
              "p5": 1.1720951451854085,
              "p95": 2.0116458121257925,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5600425713448514e-10,
              "median": 1.1573069665979124e-10,
              "min": 2.9817024936882515e-11,
              "max": 4.649340633686441e-10,
              "p5": 4.164384057532392e-11,
              "p95": 3.7957297364820147e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.02452039734157061,
              "median": 0.02523907074986569,
              "min": 0.006195678047239636,
              "max": 0.04260288340940648,
              "p5": 0.008141999563351971,
              "p95": 0.042266911331727997,
              "count": 8
            }
          },
          "returns": {
            "window_days": 18,
            "n_obs": 17,
            "stock": 0.6489583333333342,
            "market": 0.02437032919018911,
            "sector": 0.033227287591862664,
            "peers": 0.05183133421769748,
            "vs_market": 0.6245880041431451,
            "vs_sector": 0.6157310457414715,
            "vs_peers": 0.5971269991156367
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term access looks decent, but thinner bid depth means buying can feel less supported even with a 1 tick spread.",
        "market_comparison": "The stock rose 13.1% in the day compared with 1.2% for peers, which matters because stronger price momentum can keep trading interest firm."
      },
      "1w": {
        "liquidity": "Weekly tradability looks broadly steady rather than improving, with accessibility supported by a strong baseline but tempered by lighter buy-side depth.",
        "market_comparison": "The stock returned 35.1% over the week compared with 2.5% for peers, which matters because stronger performance can help sustain market attention."
      },
      "2w": {
        "liquidity": "Two-week tradability still reads as average to solid, with no clear sign of a break from the broader monthly profile.",
        "market_comparison": "The stock gained 68.8% over two weeks compared with 13.1% for peers, which matters because sustained outperformance usually keeps participation elevated."
      },
      "max": {
        "liquidity": "Longer-term tradability is average to solid for the company’s size, with a MAX score of 98.0 compared with a peer median of 97.0.",
        "market_comparison": "Primary average daily volume is HK$390.3M compared with a peer median of HK$309.2M, which matters because higher trading volume usually supports easier access."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 16,
      "reporting_window_days": 16,
      "available_history_days": 16,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.34668563599972,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "34.7%",
          "display_range": null,
          "display_text": "34.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
          "kind": "share_pct",
          "value_pct": 34.7,
          "plain_english": "Market explains about 34.7% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.43630353475627026,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "43.6%",
          "display_range": null,
          "display_text": "43.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
          "kind": "share_pct",
          "value_pct": 43.6,
          "plain_english": "Sector explains about 43.6% of price moves in the current state."
        },
        "company_share": {
          "median": 0.21701082924400977,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "21.7%",
          "display_range": null,
          "display_text": "21.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
          "kind": "share_pct",
          "value_pct": 21.7,
          "plain_english": "Company-specific explains about 21.7% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -9.30636330130654,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-9.31",
          "display_range": null,
          "display_text": "-9.31",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 9.31% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 16 trading days of history.",
          "value_num": -9.31
        },
        "beta_stock_lag": {
          "median": -1.0311758636138204,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.03",
          "display_range": null,
          "display_text": "-1.03",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
          "kind": "lag_beta",
          "value_num": -1.03
        },
        "beta_sector": {
          "median": 10.632484038441861,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "10.63",
          "display_range": null,
          "display_text": "10.63",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 10.63% stock move in the same direction in this state. The multiplier is unusually large and comes from only 16 trading days of history.",
          "value_num": 10.63
        },
        "beta_market_lag": {
          "median": -0.6875956069066652,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.69",
          "display_range": null,
          "display_text": "-0.69",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
          "kind": "lag_beta",
          "value_num": -0.69
        },
        "beta_sector_lag": {
          "median": -7.814836531472244,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-7.81",
          "display_range": null,
          "display_text": "-7.81",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
          "kind": "lag_beta",
          "value_num": -7.81
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 16 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-24 to 2026-03-31",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4470593335482103,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.7%",
            "display_range": null,
            "display_text": "44.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 44.7,
            "plain_english": "Sector explains about 44.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.407222182806259,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.7%",
              "display_range": null,
              "display_text": "40.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 40.7,
              "plain_english": "Market explains about 40.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4470593335482103,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.7%",
              "display_range": null,
              "display_text": "44.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 44.7,
              "plain_english": "Sector explains about 44.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.14571848364553058,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.6%",
              "display_range": null,
              "display_text": "14.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 14.6,
              "plain_english": "Company-specific explains about 14.6% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though sector-driven still has the largest share, though based on only 6 trading days."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-17",
          "n_obs": 10,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4088313953407047,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.9%",
            "display_range": null,
            "display_text": "40.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
            "kind": "share_pct",
            "value_pct": 40.9,
            "plain_english": "Sector explains about 40.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.31628369072307194,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.6%",
              "display_range": null,
              "display_text": "31.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 31.6,
              "plain_english": "Market explains about 31.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4088313953407047,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.9%",
              "display_range": null,
              "display_text": "40.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 40.9,
              "plain_english": "Sector explains about 40.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2748849139362234,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.5%",
              "display_range": null,
              "display_text": "27.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 27.5,
              "plain_english": "Company-specific explains about 27.5% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though sector-driven still has the largest share."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 3.5,
          "current_probability": 0.0,
          "n_days_effective": 7.0,
          "volatility": {
            "median": 0.06333332066762885,
            "low": 0.06333332066762885,
            "high": 0.06333332066762885
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 3.5,
          "current_probability": 1.0,
          "n_days_effective": 7.0,
          "volatility": {
            "median": 0.09604194027978157,
            "low": 0.09604194027978157,
            "high": 0.09604194027978157
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.7142857142857143,
            0.2857142857142857
          ],
          [
            0.16666666666666666,
            0.8333333333333334
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            5.0,
            2.0
          ],
          [
            1.0,
            5.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 16,
        "reporting_window_days": 16,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "-9.31",
        "sector_link_display": "10.63",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 9.31% stock move in the opposite direction in this state. This is a point estimate from 16 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 10.63% stock move in the same direction in this state. This is a point estimate from 16 trading days.",
        "stock_persistence_display": "-1.03",
        "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
        "history_limited_note": "Read is based on 16 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 43.6,
        "driver_share_display": "43.6%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 16 trading days relative to the 252-day target.",
        "history_days": 16,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8333333333333334,
        "effective_days": 7.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 3.5 days. It is inferred from about 7.0 effective trading days in this state.",
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
          "pct_time": 0.5,
          "expected_duration_days": 3.5,
          "current_probability": 0.0,
          "n_days_effective": 7.0,
          "volatility": {
            "median": 0.06333332066762885,
            "low": 0.06333332066762885,
            "high": 0.06333332066762885
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 3.5,
          "current_probability": 1.0,
          "n_days_effective": 7.0,
          "volatility": {
            "median": 0.09604194027978157,
            "low": 0.09604194027978157,
            "high": 0.09604194027978157
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.7142857142857143,
          0.2857142857142857
        ],
        [
          0.16666666666666666,
          0.8333333333333334
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.7142857142857143,
            0.2857142857142857
          ],
          [
            0.16666666666666666,
            0.8333333333333334
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            5.0,
            2.0
          ],
          [
            1.0,
            5.0
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
        "text": "Liquidity score: 98.0 — Strong",
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
    "liq_subtitle": "Monthly access is close to peers, but lighter bid depth makes day-to-day buying conditions less even.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns are well ahead of peers and the market, giving the tape a much firmer near-term backdrop.",
    "perf_insight": "Performance is notably stronger than the main comparison groups, with a 1W return of 35.1% compared with 2.5% for peers and 1.3% for the market. That matters because the return backdrop is clearly supportive, even though the monthly liquidity score is only modestly ahead of peers and the bid side of the book is lighter.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main current influence, accounting for 43.6% of trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 43.6% of price changes. Other influences are market 34.7%, and company-specific 21.7%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 34.7%, sector 43.6%, and company-specific 21.7%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently sector-driven across Mar to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 34.7%, sector 43.6%, and company-specific 21.7%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The stock is moving in a strong sector-led tape, which helps explain the recent outperformance. That matters because broader market forces remain a meaningful part of trading while the bid side of the book stays thinner than the ask.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Sector is the main driver now, accounting for 43.6% of recent price moves.",
      "The mix looks more balanced across Mar and Apr, but sector influence has remained the largest share."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market state is supportive on price, but the displayed book points to less even execution conditions.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Mar 20, 2026 to Apr 17, 2026 (18 trading days • 230,483 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate buy-side support looks lighter than the headline liquidity score suggests, with top-10 bid depth at 0.66x of ask depth and a 1 tick spread. That matters because monthly access looks sound, but buying conditions can still feel thinner on the day.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 33.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity is orderly on spread, but the bid side is lighter than the ask.",
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
    "intraday_insight": "The order book is easy to read with a 1 tick spread, but top-10 bid depth is only 0.66x of ask depth. That matters because visible trading costs look contained while immediate buy-side depth remains thinner.",
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
    "exec_subtitle": "Liquidity is balanced relative to peers, while recent returns are much stronger than the underlying book",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last full history of trading data, except for price driver mix which uses the last 5 trading days.",
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
        "value": "98.0/100",
        "sub": "Peer median 97.0 (+1.0 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$390.3M",
        "sub": "Peer median HK$309.2M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.32%",
        "sub": "4.00 ticks; peers 0.15%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is balanced for the stock's size, with a MAX score of 98.0 compared with a peer median of 97.0. That points to solid monthly access, but top-10 bid depth at 0.66x of ask depth shows thinner buy-side support in the displayed book. This matters because the structural profile is respectable while immediate execution can still feel less even on the day.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "158.150",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.06%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.66x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.04% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.35% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.52% with 100.0% fill.",
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
        "value": "98",
        "suffix": "/100",
        "bar_pct": 98,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 52/2575",
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
        "value": "0.32",
        "suffix": "%",
        "bar_pct": 3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.32% • 4.00 ticks vs peers 0.15%",
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
        "value": "390.3M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$309.2M",
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
        "value": "43.6",
        "suffix": "sector",
        "bar_pct": 44,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 34.7% • Company 21.7%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is broadly in line with peers, with a MAX score of 98.0 compared with a peer median of 97.0. That keeps baseline access balanced rather than clearly strong for the stock's size.",
      "The tape is much firmer on price, with a 1W return of 35.1% compared with 2.5% for peers and 1.3% for the market. That matters because recent trading has a stronger return backdrop than the main comparison groups.",
      "The main watchpoint is the displayed book, where top-10 bid depth is 0.66x of ask depth despite a 1 tick spread. With sector moves accounting for 43.6% of trading, day-to-day buying conditions can feel thinner than the monthly liquidity score implies."
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
      "overall": "MAX liquidity is strong: score 98.0 vs peer median 97.0 (+1.0 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "MAX score 98.0 vs peer median 97.0 (+1.0 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +1.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "MAX return is 64.9%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 64.9% vs market 2.4%.",
        "vs_sector": "Better than sector: 64.9% vs sector 3.3%.",
        "vs_peers": "Better than peers: 64.9% vs peers 5.2%."
      },
      "adv": {
        "insight": "ADV is HK$390.3M, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$390.3M vs market HK$234.1K.",
        "vs_sector": "Better than sector: HK$390.3M vs sector HK$1.0M.",
        "vs_peers": "Better than peers: HK$390.3M vs peers HK$309.2M."
      },
      "spread": {
        "insight": "Spread is 0.32%, better than market and sector, but worse than peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.32% vs market 2.94%.",
        "vs_sector": "Better than sector: 0.32% vs secto%.",
        "vs_peers": "Worse than peers: 0.32% vs peers 0.15%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 13.04%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 13.04% vs market 0.09%.",
        "vs_sector": "Better than sector: 13.04% vs sector 0.18%.",
        "vs_peers": "Better than peers: 13.04% vs peers 2.52%."
      },
      "volatility": {
        "insight": "Volatility is 140.67%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 140.67% vs market 55.16%.",
        "vs_sector": "Worse than sector: 140.67% vs sector 66.22%.",
        "vs_peers": "Worse than peers: 140.67% vs peers 64.22%."
      },
      "trades": {
        "insight": "Trades is 8472, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 8472 vs market 20.",
        "vs_sector": "Better than sector: 8472 vs sector 52.",
        "vs_peers": "Worse than peers: 8472 vs peers 9836."
      },
      "amihud": {
        "insight": "Price impact is 1.49e-10, better than market and sector, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 1.49e-10 vs market 5.00e-08.",
        "vs_sector": "Better than sector: 1.49e-10 vs sectoe-08.",
        "vs_peers": "Worse than peers: 1.49e-10 vs peers 1.16e-10."
      }
    },
    "performance": {
      "overall": "Recent returns are clearly stronger than peers and the market, with the stock up 35.1% over one week compared with 2.5% for peers and 1.3% for the market. Liquidity only partly confirms that strength because the monthly score is modestly ahead of peers at 98.0 compared with a 97.0 peer median, yet the order book is less supportive on the buy side with top-10 bid depth at 0.66x of ask depth.",
      "conclusion": "The move looks strong but only partly backed by liquidity, and it reads as more sector-linked than company-specific."
    },
    "drivers": {
      "overall": "Sector factors are driving the stock most clearly right now, with 43.6% of recent price moves tied to the sector. That matters because the stock’s 1W return of 35.1% is well ahead of peers at 2.5% and the market at 1.3%, so the tape has strong momentum even though it is not being driven by company news alone.",
      "beta": "The current pattern looks mixed rather than fully settled, because sector influence leads but buying interest is not especially deep, with top-10 bid depth at 0.66x of ask depth. That matters because trading can feel less supported on the buy side even though the spread remains at 1 tick.",
      "rolling_change": "The monthly picture is more balanced now, but sector influence has stayed the largest component through both Mar and Apr. That matters because the stock is still moving mainly with its group rather than shifting into a clearly company-driven phase."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop, which matters because price moves can stay larger even though monthly liquidity still sits close to peers at a MAX score of 98.0 compared with a peer median of 97.0.",
      "current": "Current market state is High Volatility. The market has been in this state about 50.0% of the time. Based on 16 trading days relative to the 252-day target.",
      "transitions": "This state looks more persistent than short-lived, with a typical run length of about 3.5 days, although the read is still mixed because it is inferred from about 7.0 effective trading days in this state.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 3.5 days. It is inferred from about 7.0 effective trading days in this state."
    },
    "execution": {
      "overall": "The displayed book looks bid-light rather than fully balanced because top-10 bid depth is only 0.66x ask depth while the spread remains 1 tick. That matters because the headline liquidity profile is supported by a tight spread, but not by even depth on both sides of the book.",
      "concern": "Trade-size percentiles use available history from Ma, 2026 to Apr 17, 2026 (18 trading days • 230,483 trades), not a full year.",
      "peer_context": "The broader monthly picture remains solid relative to peers, with a MAX score of 98.0 compared with a peer median of 97.0, but the current book is less supportive than that ranking suggests. Trade-size context is also based on 18 trading days and 230,483 trades, which makes the displayed imbalance the cleaner read on current conditions."
    },
    "trader_composition": {
      "overall": "Flow looks mainly institution-like, with a mixed edge from the share of unclear activity.",
      "retail_heavy": "Institution-like trades account for 73.5% of trade count and 81.8% of trade value, compared with retail-like at 1.2% of count and 0.5% of value. That points to a market driven primarily by larger participants, which usually makes day-to-day flow look steadier.",
      "institutional_gap": "The read is not fully clean because unclear flow still represents 19.7% of trade count. That leaves the overall mix institution-like, but not unequivocal.",
      "peer_comparison": "The mix stands out as institution-like relative to peers, with the comparison framed on trade count and trade value."
    },
    "price_moving": {
      "overall": "Price-moving activity is meaningful, but the signal is mixed. Unclear flow accounts for 19.7% of trade count, so the read on who is driving price is less clean than the headline mix suggests. That matters because price moves may not map neatly to one participant type. Recent returns are strong, with the stock up 35.1% over one week compared with 2.5% for peers and 1.3% for the market. That firmer tape suggests buying pressure has had more influence than selling pressure.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main factor in trading conditions. The clearer signals are a strong 1W share price gain of 35.1% and a lighter bid side, with top-10 bid depth at 0.66x of ask depth, which matter more for near-term access.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is becoming a separate driver of liquidity. The broader picture is still better explained by strong recent price performance compared with peers and sector-led trading, with the sector accounting for 43.6% of current moves.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity appears through the continuous session rather than at the open or close.",
      "hhi_interpretation": "Ambiguous or unclear flow is 19.7% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session carries 98.5% of trading, compared with 0.5% at the open and 0.6% at the close. That means the deepest flow is available during the main session.",
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
        "1989",
        "6088",
        "2382",
        "6613",
        "2018",
        "1415",
        "1478",
        "2208",
        "1072"
      ],
      "scores": [
        98.01941747572815,
        98.44660194174757,
        98.79611650485437,
        95.68932038834951,
        90.67961165048544,
        88.46601941747572,
        84.66019417475728,
        99.06796116504854,
        98.36893203883496
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
        390318485.0,
        563832552.85,
        728820852.5,
        166941732.7,
        158309374.82999998,
        90658827.16,
        42961649.71,
        451408147.71500003,
        454120604.1
      ],
      "total": 2575
    },
    "market_comparison": {
      "sector_name": "Electronic Components",
      "sector_count": 24,
      "market_count": 2575,
      "company": {
        "volatility": 1.4067450195738007,
        "adv": 390318485.0,
        "spread_pct": 0.003213944886899352,
        "turnover_ratio": 0.13044643710816384,
        "amihud": 1.4901604223179666e-10,
        "trades": 8472.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7054881877887546,
          "median": 0.5515932522054436,
          "min": 0.0,
          "max": 30.19196489505355,
          "p5": 0.19714207316184468,
          "p95": 1.6058239386308877,
          "count": 2575
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 64378520.80560672,
          "median": 234105.0,
          "min": 0.0,
          "max": 10884567975.1,
          "p5": 0.0,
          "p95": 241711433.40649983,
          "count": 2575
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.046971852321218546,
          "median": 0.02938484746743884,
          "min": 0.0005953433012943406,
          "max": 0.610412445741231,
          "p5": 0.001476158809387328,
          "p95": 0.1495418331336119,
          "count": 2575
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004470791667232748,
          "median": 0.0009210777062896449,
          "min": 0.0,
          "max": 0.5766395420386184,
          "p5": 0.0,
          "p95": 0.016781072094314783,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.5577820355505525e-06,
          "median": 4.997045486252404e-08,
          "min": 0.0,
          "max": 0.0005375993919246796,
          "p5": 4.042280677790148e-11,
          "p95": 5.3099284656661524e-06,
          "count": 2567
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1172.0508737864077,
          "median": 20.0,
          "min": 0.0,
          "max": 78783.5,
          "p5": 0.0,
          "p95": 6140.399999999981,
          "count": 2575
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8667769119366383,
          "median": 0.6622497164301232,
          "min": 0.22814984065694785,
          "max": 3.8115753785457662,
          "p5": 0.30139743913885436,
          "p95": 1.6673740049427785,
          "count": 24
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 90293495.0671875,
          "median": 1038378.0,
          "min": 0.0,
          "max": 728820852.5,
          "p5": 0.0,
          "p95": 537805442.6724997,
          "count": 24
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.044681707003825476,
          "median": 0.021423431612551256,
          "min": 0.0009707187826150995,
          "max": 0.33045586868035015,
          "p5": 0.0014980026847939833,
          "p95": 0.1616741095545892,
          "count": 24
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.013141822317548596,
          "median": 0.0017774660452694023,
          "min": 0.0,
          "max": 0.13044643710816384,
          "p5": 0.0,
          "p95": 0.04077230837034032,
          "count": 24
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.15316106362678e-06,
          "median": 2.7364460847518337e-08,
          "min": 2.9817024936882515e-11,
          "max": 7.582564984112102e-05,
          "p5": 1.0840415161809645e-10,
          "p95": 1.0416972109329052e-05,
          "count": 24
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2101.8125,
          "median": 51.5,
          "min": 0.0,
          "max": 13627.5,
          "p5": 0.0,
          "p95": 12789.57499999999,
          "count": 24
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 332131717.695625,
          "median": 309174940.2075,
          "min": 42961649.71,
          "max": 728820852.5,
          "p5": 59655661.8175,
          "p95": 671074947.6225,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 8758.625,
          "median": 9835.5,
          "min": 1515.5,
          "max": 16014.0,
          "p5": 1768.375,
          "p95": 15178.724999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7264833948535712,
          "median": 0.6422499426952675,
          "min": 0.4801977279237052,
          "max": 1.2643077526576716,
          "p5": 0.5103081629975884,
          "p95": 1.1152979613002796,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0017586005666074887,
          "median": 0.0015056916518990265,
          "min": 0.0009707187826150995,
          "max": 0.0029471259700617923,
          "p5": 0.0010301991252397134,
          "p95": 0.0028318145781099074,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.6048749441677774,
          "median": 1.6420305599168539,
          "min": 1.1198800991041367,
          "max": 2.0527141734823413,
          "p5": 1.1720951451854085,
          "p95": 2.0116458121257925,
          "count": 3
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.5600425713448514e-10,
          "median": 1.1573069665979124e-10,
          "min": 2.9817024936882515e-11,
          "max": 4.649340633686441e-10,
          "p5": 4.164384057532392e-11,
          "p95": 3.7957297364820147e-10,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.02452039734157061,
          "median": 0.02523907074986569,
          "min": 0.006195678047239636,
          "max": 0.04260288340940648,
          "p5": 0.008141999563351971,
          "p95": 0.042266911331727997,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.35068259385665534,
        "market": 0.013168381613536395,
        "sector": 0.015787736316018375,
        "peers": 0.02536755631791765
      },
      {
        "horizon": "2W",
        "stock": 0.6876332622601289,
        "market": 0.04485357370993892,
        "sector": 0.07373204372814346,
        "peers": 0.1310464751960989
      },
      {
        "horizon": "MAX",
        "stock": 0.6489583333333342,
        "market": 0.02437032919018911,
        "sector": 0.033227287591862664,
        "peers": 0.05183133421769748
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
      "share_market": 0.34668563599972,
      "share_sector": 0.43630353475627026,
      "share_idio": 0.21701082924400977,
      "beta_market": -9.30636330130654,
      "beta_sector": 10.632484038441861,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 16,
        "reporting_window_days": 16,
        "available_history_days": 16,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.34668563599972,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.7%",
            "display_range": null,
            "display_text": "34.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 34.7,
            "plain_english": "Market explains about 34.7% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.43630353475627026,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.6%",
            "display_range": null,
            "display_text": "43.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 43.6,
            "plain_english": "Sector explains about 43.6% of price moves in the current state."
          },
          "company_share": {
            "median": 0.21701082924400977,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "21.7%",
            "display_range": null,
            "display_text": "21.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 21.7,
            "plain_english": "Company-specific explains about 21.7% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -9.30636330130654,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-9.31",
            "display_range": null,
            "display_text": "-9.31",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 9.31% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 16 trading days of history.",
            "value_num": -9.31
          },
          "beta_stock_lag": {
            "median": -1.0311758636138204,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.03",
            "display_range": null,
            "display_text": "-1.03",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "lag_beta",
            "value_num": -1.03
          },
          "beta_sector": {
            "median": 10.632484038441861,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "10.63",
            "display_range": null,
            "display_text": "10.63",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 10.63% stock move in the same direction in this state. The multiplier is unusually large and comes from only 16 trading days of history.",
            "value_num": 10.63
          },
          "beta_market_lag": {
            "median": -0.6875956069066652,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.69",
            "display_range": null,
            "display_text": "-0.69",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "lag_beta",
            "value_num": -0.69
          },
          "beta_sector_lag": {
            "median": -7.814836531472244,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-7.81",
            "display_range": null,
            "display_text": "-7.81",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "lag_beta",
            "value_num": -7.81
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 16 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-24 to 2026-03-31",
            "n_obs": 6,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4470593335482103,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.7%",
              "display_range": null,
              "display_text": "44.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 44.7,
              "plain_english": "Sector explains about 44.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.407222182806259,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.7%",
                "display_range": null,
                "display_text": "40.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 40.7,
                "plain_english": "Market explains about 40.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4470593335482103,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.7%",
                "display_range": null,
                "display_text": "44.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 44.7,
                "plain_english": "Sector explains about 44.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.14571848364553058,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.6%",
                "display_range": null,
                "display_text": "14.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 14.6,
                "plain_english": "Company-specific explains about 14.6% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though sector-driven still has the largest share, though based on only 6 trading days."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-17",
            "n_obs": 10,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4088313953407047,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.9%",
              "display_range": null,
              "display_text": "40.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 40.9,
              "plain_english": "Sector explains about 40.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.31628369072307194,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.6%",
                "display_range": null,
                "display_text": "31.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 31.6,
                "plain_english": "Market explains about 31.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4088313953407047,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.9%",
                "display_range": null,
                "display_text": "40.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 40.9,
                "plain_english": "Sector explains about 40.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2748849139362234,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.5%",
                "display_range": null,
                "display_text": "27.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 27.5,
                "plain_english": "Company-specific explains about 27.5% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though sector-driven still has the largest share."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 3.5,
            "current_probability": 0.0,
            "n_days_effective": 7.0,
            "volatility": {
              "median": 0.06333332066762885,
              "low": 0.06333332066762885,
              "high": 0.06333332066762885
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 3.5,
            "current_probability": 1.0,
            "n_days_effective": 7.0,
            "volatility": {
              "median": 0.09604194027978157,
              "low": 0.09604194027978157,
              "high": 0.09604194027978157
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.7142857142857143,
              0.2857142857142857
            ],
            [
              0.16666666666666666,
              0.8333333333333334
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              5.0,
              2.0
            ],
            [
              1.0,
              5.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 16,
          "reporting_window_days": 16,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "-9.31",
          "sector_link_display": "10.63",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 9.31% stock move in the opposite direction in this state. This is a point estimate from 16 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 10.63% stock move in the same direction in this state. This is a point estimate from 16 trading days.",
          "stock_persistence_display": "-1.03",
          "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
          "history_limited_note": "Read is based on 16 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 43.6,
          "driver_share_display": "43.6%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 16 trading days relative to the 252-day target.",
          "history_days": 16,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8333333333333334,
          "effective_days": 7.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 3.5 days. It is inferred from about 7.0 effective trading days in this state.",
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
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-24 to 2026-03-31",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Mar: More mixed, though sector-driven still has the largest share, though based on only 6 trading days.",
          "share_market": 0.407222182806259,
          "share_sector": 0.4470593335482103,
          "share_company": 0.14571848364553058,
          "share_market_display": "40.7%",
          "share_sector_display": "44.7%",
          "share_company_display": "14.6%",
          "dominant_share_display": "44.7%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-17",
          "n_obs": 10,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.31628369072307194,
          "share_sector": 0.4088313953407047,
          "share_company": 0.2748849139362234,
          "share_market_display": "31.6%",
          "share_sector_display": "40.9%",
          "share_company_display": "27.5%",
          "dominant_share_display": "40.9%"
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
          0.5,
          0.5
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 3.5,
            "current_probability": 0.0,
            "n_days_effective": 7.0,
            "volatility": {
              "median": 0.06333332066762885,
              "low": 0.06333332066762885,
              "high": 0.06333332066762885
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 3.5,
            "current_probability": 1.0,
            "n_days_effective": 7.0,
            "volatility": {
              "median": 0.09604194027978157,
              "low": 0.09604194027978157,
              "high": 0.09604194027978157
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.7142857142857143,
            0.2857142857142857
          ],
          [
            0.16666666666666666,
            0.8333333333333334
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 158.1,
          "quantity": 500.0,
          "value": 79050.0
        },
        {
          "level": 2,
          "price": 158.0,
          "quantity": 1400.0,
          "value": 221200.0
        },
        {
          "level": 3,
          "price": 157.8,
          "quantity": 1500.0,
          "value": 236700.00000000003
        },
        {
          "level": 4,
          "price": 157.2,
          "quantity": 7000.0,
          "value": 1100400.0
        },
        {
          "level": 5,
          "price": 157.1,
          "quantity": 5800.0,
          "value": 911180.0
        },
        {
          "level": 6,
          "price": 157.0,
          "quantity": 1000.0,
          "value": 157000.0
        },
        {
          "level": 7,
          "price": 156.9,
          "quantity": 500.0,
          "value": 78450.0
        },
        {
          "level": 8,
          "price": 156.8,
          "quantity": 200.0,
          "value": 31360.000000000004
        },
        {
          "level": 9,
          "price": 156.5,
          "quantity": 3000.0,
          "value": 469500.0
        },
        {
          "level": 10,
          "price": 156.3,
          "quantity": 200.0,
          "value": 31260.000000000004
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 158.2,
          "quantity": 2400.0,
          "value": 379680.0
        },
        {
          "level": 2,
          "price": 158.3,
          "quantity": 300.0,
          "value": 47490.0
        },
        {
          "level": 3,
          "price": 158.4,
          "quantity": 500.0,
          "value": 79200.0
        },
        {
          "level": 4,
          "price": 158.5,
          "quantity": 4100.0,
          "value": 649850.0
        },
        {
          "level": 5,
          "price": 158.6,
          "quantity": 100.0,
          "value": 15860.0
        },
        {
          "level": 6,
          "price": 158.8,
          "quantity": 6300.0,
          "value": 1000440.0000000001
        },
        {
          "level": 7,
          "price": 158.9,
          "quantity": 400.0,
          "value": 63560.0
        },
        {
          "level": 8,
          "price": 159.0,
          "quantity": 17200.0,
          "value": 2734800.0
        },
        {
          "level": 9,
          "price": 159.1,
          "quantity": 100.0,
          "value": 15910.0
        },
        {
          "level": 10,
          "price": 159.3,
          "quantity": 300.0,
          "value": 47790.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-17 07:59:59.106000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 158.14999999999998,
        "spread_pct": 0.0006323110970597176,
        "spread_ticks": 1.0,
        "tick_size": 0.1,
        "bid_depth_notional_top10": 3316100.0,
        "ask_depth_notional_top10": 5034580.0,
        "bid_ask_depth_ratio": 0.6587
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 29,
        "history_limited": true,
        "trade_days_used": 18,
        "n_trades_used": 230483,
        "first_trade_date": "2026-03-20",
        "last_trade_date": "2026-04-17",
        "window_label": "Mar 20, 2026 to Apr 17, 2026",
        "window_short_label": "Mar 20-Apr 17",
        "trade_days_label": "18 trading days",
        "trade_count_label": "230,483 trades",
        "window_detail_label": "18 trading days • 230,483 trades",
        "history_note": "Trade-size percentiles use available history from Mar 20, 2026 to Apr 17, 2026 (18 trading days • 230,483 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 87594.0,
            "impact_pct": -0.000378,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 2.64,
            "pct_of_adv": 0.02
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 145575.0,
            "impact_pct": -0.000605,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 4.39,
            "pct_of_adv": 0.04
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 3791940.94,
            "impact_pct": -0.006253,
            "filled_pct": 87.5,
            "levels_consumed": 10,
            "pct_of_bid_depth": 114.35,
            "pct_of_adv": 0.97
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-17",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "2759719683.0",
            "timestamp": "2026-04-17 05:54:38.156000000",
            "local_timestamp": "2026-04-17 13:54:38",
            "posted_price": 160.0,
            "size_shares": 200000.0,
            "notional": 32000000.0,
            "impact_pct": -0.006253,
            "filled_pct": 10.4,
            "levels_consumed": 10,
            "pct_of_bid_depth": 964.99,
            "price_vs_mid_pct": 1.17,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "2781001731.0",
            "timestamp": "2026-04-17 05:56:29.067000000",
            "local_timestamp": "2026-04-17 13:56:29",
            "posted_price": 158.8,
            "size_shares": 200000.0,
            "notional": 31760000.0,
            "impact_pct": -0.006253,
            "filled_pct": 10.4,
            "levels_consumed": 10,
            "pct_of_bid_depth": 957.75,
            "price_vs_mid_pct": 0.411,
            "executed_event_count": 0,
            "event_count": 23
          },
          {
            "rank": 3,
            "order_id": "2791275523.0",
            "timestamp": "2026-04-17 05:57:15.422000000",
            "local_timestamp": "2026-04-17 13:57:15",
            "posted_price": 158.8,
            "size_shares": 143100.0,
            "notional": 22724280.0,
            "impact_pct": -0.006253,
            "filled_pct": 14.6,
            "levels_consumed": 10,
            "pct_of_bid_depth": 685.27,
            "price_vs_mid_pct": 0.411,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-17",
        "bucket_minutes": 30,
        "tick_size": 0.1,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0006985679357317103,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 2897670.0,
            "ask_depth_notional": 1539660.0,
            "mid_price": 143.14999999999998
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.004087193460490424,
            "spread_ticks": 5.999999999999943,
            "bid_depth_notional": 3351070.0,
            "ask_depth_notional": 1172620.0,
            "mid_price": 146.8
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0013531799729365158,
            "spread_ticks": 2.0000000000001705,
            "bid_depth_notional": 1455430.0,
            "ask_depth_notional": 1427300.0,
            "mid_price": 147.8
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0013651877133105026,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 3866660.0,
            "ask_depth_notional": 4209870.0,
            "mid_price": 146.5
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0020387359836901895,
            "spread_ticks": 3.0000000000001137,
            "bid_depth_notional": 1090370.0,
            "ask_depth_notional": 4936460.0,
            "mid_price": 147.15
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0006371455877667685,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 1000860.0,
            "ask_depth_notional": 7722150.0,
            "mid_price": 156.95
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.001256281407035283,
            "spread_ticks": 2.0000000000001705,
            "bid_depth_notional": 760690.0,
            "ask_depth_notional": 17862390.0,
            "mid_price": 159.2
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0031959092361776927,
            "spread_ticks": 5.0,
            "bid_depth_notional": 1865340.0,
            "ask_depth_notional": 2124980.0,
            "mid_price": 156.45
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0012771392081736184,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 873700.0,
            "ask_depth_notional": 1979650.0,
            "mid_price": 156.6
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0018945374171140598,
            "spread_ticks": 3.0000000000001137,
            "bid_depth_notional": 2337170.0,
            "ask_depth_notional": 5164420.0,
            "mid_price": 158.35
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0006323110970597176,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 3316100.0,
            "ask_depth_notional": 5034580.0,
            "mid_price": 158.14999999999998
          }
        ],
        "summary": {
          "median_spread_pct": 0.0013531799729365158,
          "median_spread_ticks": 2.0000000000001705,
          "median_bid_depth_notional": 1865340.0,
          "median_ask_depth_notional": 4209870.0,
          "tightest_bucket": "15:30",
          "widest_bucket": "10:00",
          "deepest_bid_bucket": "11:00",
          "thinnest_bid_bucket": "13:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "2382",
          "pct": 0.1
        },
        {
          "ticker": "6088",
          "pct": 0.2
        },
        {
          "ticker": "1072",
          "pct": 0.2
        },
        {
          "ticker": "2208",
          "pct": 0.2
        },
        {
          "ticker": "6613",
          "pct": 0.6
        },
        {
          "ticker": "2018",
          "pct": 0.6
        },
        {
          "ticker": "1415",
          "pct": 1.2
        },
        {
          "ticker": "1478",
          "pct": 2.3
        }
      ]
    },
    "trader_composition": {
      "primary_period": "max",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 17380,
          "n_runs": 1077,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-17",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.01139240506329114,
            "mixed_pct": 0.0,
            "instit_pct": 0.8295166858457997,
            "ambiguous_pct": 0.14102416570771,
            "unobservable_pct": 0.01806674338319908,
            "unclear_pct": 0.1590909090909091,
            "retail_qty_pct": 0.0042503468116861,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8723234583147582,
            "ambiguous_qty_pct": 0.11295954279005502,
            "unobservable_qty_pct": 0.010466652083500625,
            "unclear_qty_pct": 0.12342619487355565,
            "retail_notional_pct": 0.0042467380748518425,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8723811642895578,
            "ambiguous_notional_pct": 0.11292877216913441,
            "unobservable_notional_pct": 0.010443325466455922,
            "unclear_notional_pct": 0.12337209763559033
          },
          "run_composition": {
            "retail_pct": 0.11049210770659239,
            "mixed_pct": 0.0,
            "instit_pct": 0.28133704735376047,
            "ambiguous_pct": 0.40575673166202414,
            "unobservable_pct": 0.20241411327762301,
            "unclear_pct": 0.6081708449396471,
            "retail_notional_pct": 0.0042467380748518425,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8723811642895578,
            "unclear_notional_pct": 0.12337209763559033
          },
          "counts": {
            "trades": {
              "retail": 198,
              "mixed": 0,
              "institutional": 14417,
              "ambiguous": 2451,
              "unobservable": 314,
              "unclear": 2765
            },
            "runs": {
              "retail": 119,
              "mixed": 0,
              "institutional": 303,
              "ambiguous": 437,
              "unobservable": 218,
              "unclear": 655
            }
          },
          "confidence": {
            "high": 0.019498607242339833,
            "medium": 0.2395543175487465,
            "low": 0.1327762302692665,
            "na": 0.6081708449396471
          },
          "confidence_counts": {
            "high": 21,
            "medium": 258,
            "low": 143,
            "na": 655
          },
          "trade_confidence": {
            "high": 0.0012082853855005754,
            "medium": 0.7620253164556962,
            "low": 0.07767548906789414,
            "na": 0.1590909090909091
          },
          "trade_confidence_counts": {
            "high": 21,
            "medium": 13244,
            "low": 1350,
            "na": 2765
          },
          "observability": {
            "avg_feature_coverage": 0.7498607242339832,
            "observable_run_pct": 0.797585886722377,
            "ambiguous_run_pct": 0.40575673166202414,
            "unobservable_run_pct": 0.20241411327762301
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.40575673166202414,
          "dominance_gap": 0.12441968430826367,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 17380
            },
            "d2_information": {
              "UNOBSERVABLE": 17380
            },
            "d3_urgency": {
              "IMMEDIATE": 704,
              "ADAPTIVE": 369,
              "SCHEDULED": 4
            },
            "participant_confidence": {
              "NA": 655,
              "MEDIUM": 258,
              "LOW": 143,
              "HIGH": 21
            }
          },
          "trade_size": {
            "avg": 63136.388607594934,
            "median": 29420.0
          },
          "run_size": {
            "avg": 1018858.3416898793,
            "median": 176160.0,
            "avg_length": 16.137418755803157
          },
          "recent_trades": [
            {
              "trade_id": "17744",
              "timestamp": "2026-04-17T07:59:58.598083",
              "price": 158.1,
              "size": 500.0,
              "notional": 79050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17743",
              "timestamp": "2026-04-17T07:59:58.509187",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17742",
              "timestamp": "2026-04-17T07:59:58.509187",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17741",
              "timestamp": "2026-04-17T07:59:57.103359",
              "price": 158.2,
              "size": 400.0,
              "notional": 63279.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17740",
              "timestamp": "2026-04-17T07:59:52.519040",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17739",
              "timestamp": "2026-04-17T07:59:51.516210",
              "price": 158.2,
              "size": 400.0,
              "notional": 63279.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17738",
              "timestamp": "2026-04-17T07:59:49.075741",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17737",
              "timestamp": "2026-04-17T07:59:47.799815",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17736",
              "timestamp": "2026-04-17T07:59:46.182646",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17735",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17734",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17733",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 1500.0,
              "notional": 237000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17732",
              "timestamp": "2026-04-17T07:59:43.925090",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17731",
              "timestamp": "2026-04-17T07:59:43.480345",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17730",
              "timestamp": "2026-04-17T07:59:43.480345",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17729",
              "timestamp": "2026-04-17T07:59:42.107192",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17728",
              "timestamp": "2026-04-17T07:59:42.098519",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17727",
              "timestamp": "2026-04-17T07:59:42.098519",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17726",
              "timestamp": "2026-04-17T07:59:41.498148",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17725",
              "timestamp": "2026-04-17T07:59:41.498148",
              "price": 158.1,
              "size": 300.0,
              "notional": 47430.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17724",
              "timestamp": "2026-04-17T07:59:38.828479",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17723",
              "timestamp": "2026-04-17T07:59:37.738602",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17722",
              "timestamp": "2026-04-17T07:59:37.738602",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17721",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17720",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17719",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17718",
              "timestamp": "2026-04-17T07:59:35.356998",
              "price": 158.0,
              "size": 200.0,
              "notional": 31600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17717",
              "timestamp": "2026-04-17T07:59:34.895859",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17716",
              "timestamp": "2026-04-17T07:59:34.895859",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17715",
              "timestamp": "2026-04-17T07:59:31.847201",
              "price": 158.0,
              "size": 200.0,
              "notional": 31600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            }
          ],
          "peer_comparison": []
        },
        "1w": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 42536,
          "n_runs": 5324,
          "n_trade_days": 5,
          "first_trade_date": "2026-04-13",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.01854899379349257,
            "mixed_pct": 0.0,
            "instit_pct": 0.7414190332894489,
            "ambiguous_pct": 0.18633627985706225,
            "unobservable_pct": 0.05369569305999624,
            "unclear_pct": 0.2400319729170585,
            "retail_qty_pct": 0.0069854467274811805,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8175434770844925,
            "ambiguous_qty_pct": 0.1409488309507186,
            "unobservable_qty_pct": 0.034522245237307694,
            "unclear_qty_pct": 0.17547107618802632,
            "retail_notional_pct": 0.006806780554148537,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8215419278308346,
            "ambiguous_notional_pct": 0.13878592528822042,
            "unobservable_notional_pct": 0.03286536632679638,
            "unclear_notional_pct": 0.1716512916150168
          },
          "run_composition": {
            "retail_pct": 0.11908339594290007,
            "mixed_pct": 0.0,
            "instit_pct": 0.2526296018031555,
            "ambiguous_pct": 0.3549962434259955,
            "unobservable_pct": 0.2732907588279489,
            "unclear_pct": 0.6282870022539444,
            "retail_notional_pct": 0.006806780554148537,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8215419278308346,
            "unclear_notional_pct": 0.1716512916150168
          },
          "counts": {
            "trades": {
              "retail": 789,
              "mixed": 0,
              "institutional": 31537,
              "ambiguous": 7926,
              "unobservable": 2284,
              "unclear": 10210
            },
            "runs": {
              "retail": 634,
              "mixed": 0,
              "institutional": 1345,
              "ambiguous": 1890,
              "unobservable": 1455,
              "unclear": 3345
            }
          },
          "confidence": {
            "high": 0.03737791134485349,
            "medium": 0.2469947407963937,
            "low": 0.08734034560480841,
            "na": 0.6282870022539444
          },
          "confidence_counts": {
            "high": 199,
            "medium": 1315,
            "low": 465,
            "na": 3345
          },
          "trade_confidence": {
            "high": 0.006418092909535452,
            "medium": 0.6816108707917999,
            "low": 0.07193906338160617,
            "na": 0.2400319729170585
          },
          "trade_confidence_counts": {
            "high": 273,
            "medium": 28993,
            "low": 3060,
            "na": 10210
          },
          "observability": {
            "avg_feature_coverage": 0.7179470323065364,
            "observable_run_pct": 0.726709241172051,
            "ambiguous_run_pct": 0.3549962434259955,
            "unobservable_run_pct": 0.2732907588279489
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.3549962434259955,
          "dominance_gap": 0.08170548459804661,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 42536
            },
            "d2_information": {
              "UNOBSERVABLE": 42536
            },
            "d3_urgency": {
              "IMMEDIATE": 4241,
              "ADAPTIVE": 1076,
              "SCHEDULED": 7
            },
            "participant_confidence": {
              "NA": 3345,
              "MEDIUM": 1315,
              "LOW": 465,
              "HIGH": 199
            }
          },
          "trade_size": {
            "avg": 56931.3674393455,
            "median": 25860.000000000004
          },
          "run_size": {
            "avg": 454852.1122088655,
            "median": 89670.0,
            "avg_length": 7.989481592787378
          },
          "recent_trades": [
            {
              "trade_id": "17744",
              "timestamp": "2026-04-17T07:59:58.598083",
              "price": 158.1,
              "size": 500.0,
              "notional": 79050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17743",
              "timestamp": "2026-04-17T07:59:58.509187",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17742",
              "timestamp": "2026-04-17T07:59:58.509187",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17741",
              "timestamp": "2026-04-17T07:59:57.103359",
              "price": 158.2,
              "size": 400.0,
              "notional": 63279.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17740",
              "timestamp": "2026-04-17T07:59:52.519040",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17739",
              "timestamp": "2026-04-17T07:59:51.516210",
              "price": 158.2,
              "size": 400.0,
              "notional": 63279.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17738",
              "timestamp": "2026-04-17T07:59:49.075741",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17737",
              "timestamp": "2026-04-17T07:59:47.799815",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17736",
              "timestamp": "2026-04-17T07:59:46.182646",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17735",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17734",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17733",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 1500.0,
              "notional": 237000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17732",
              "timestamp": "2026-04-17T07:59:43.925090",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17731",
              "timestamp": "2026-04-17T07:59:43.480345",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17730",
              "timestamp": "2026-04-17T07:59:43.480345",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17729",
              "timestamp": "2026-04-17T07:59:42.107192",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17728",
              "timestamp": "2026-04-17T07:59:42.098519",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17727",
              "timestamp": "2026-04-17T07:59:42.098519",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17726",
              "timestamp": "2026-04-17T07:59:41.498148",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17725",
              "timestamp": "2026-04-17T07:59:41.498148",
              "price": 158.1,
              "size": 300.0,
              "notional": 47430.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17724",
              "timestamp": "2026-04-17T07:59:38.828479",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17723",
              "timestamp": "2026-04-17T07:59:37.738602",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17722",
              "timestamp": "2026-04-17T07:59:37.738602",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17721",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17720",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17719",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17718",
              "timestamp": "2026-04-17T07:59:35.356998",
              "price": 158.0,
              "size": 200.0,
              "notional": 31600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17717",
              "timestamp": "2026-04-17T07:59:34.895859",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17716",
              "timestamp": "2026-04-17T07:59:34.895859",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17715",
              "timestamp": "2026-04-17T07:59:31.847201",
              "price": 158.0,
              "size": 200.0,
              "notional": 31600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            }
          ],
          "peer_comparison": []
        },
        "2w": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 81018,
          "n_runs": 10732,
          "n_trade_days": 10,
          "first_trade_date": "2026-04-01",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.011404872991187144,
            "mixed_pct": 0.0,
            "instit_pct": 0.7071514971981535,
            "ambiguous_pct": 0.20604063294576513,
            "unobservable_pct": 0.07540299686489423,
            "unclear_pct": 0.28144362981065935,
            "retail_qty_pct": 0.0039927419585096754,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7953053974972834,
            "ambiguous_qty_pct": 0.1511023560819482,
            "unobservable_qty_pct": 0.04959950446225878,
            "unclear_qty_pct": 0.20070186054420697,
            "retail_notional_pct": 0.004220850579672884,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8002271577394392,
            "ambiguous_notional_pct": 0.14906361144484556,
            "unobservable_notional_pct": 0.04648838023604233,
            "unclear_notional_pct": 0.19555199168088788
          },
          "run_composition": {
            "retail_pct": 0.06522549385016772,
            "mixed_pct": 0.0,
            "instit_pct": 0.22269847185985836,
            "ambiguous_pct": 0.35901975400670894,
            "unobservable_pct": 0.353056280283265,
            "unclear_pct": 0.7120760342899739,
            "retail_notional_pct": 0.004220850579672884,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8002271577394392,
            "unclear_notional_pct": 0.19555199168088788
          },
          "counts": {
            "trades": {
              "retail": 924,
              "mixed": 0,
              "institutional": 57292,
              "ambiguous": 16693,
              "unobservable": 6109,
              "unclear": 22802
            },
            "runs": {
              "retail": 700,
              "mixed": 0,
              "institutional": 2390,
              "ambiguous": 3853,
              "unobservable": 3789,
              "unclear": 7642
            }
          },
          "confidence": {
            "high": 0.03149459560193813,
            "medium": 0.20890793887439432,
            "low": 0.04752143123369363,
            "na": 0.7120760342899739
          },
          "confidence_counts": {
            "high": 338,
            "medium": 2242,
            "low": 510,
            "na": 7642
          },
          "trade_confidence": {
            "high": 0.07161371547063615,
            "medium": 0.6049766718506998,
            "low": 0.04196598286800464,
            "na": 0.28144362981065935
          },
          "trade_confidence_counts": {
            "high": 5802,
            "medium": 49014,
            "low": 3400,
            "na": 22802
          },
          "observability": {
            "avg_feature_coverage": 0.6762812150577712,
            "observable_run_pct": 0.6469437197167349,
            "ambiguous_run_pct": 0.35901975400670894,
            "unobservable_run_pct": 0.353056280283265
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.35901975400670894,
          "dominance_gap": 0.005963473723443913,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 81018
            },
            "d2_information": {
              "UNOBSERVABLE": 81018
            },
            "d3_urgency": {
              "IMMEDIATE": 8625,
              "ADAPTIVE": 2097,
              "SCHEDULED": 10
            },
            "participant_confidence": {
              "NA": 7642,
              "MEDIUM": 2242,
              "LOW": 510,
              "HIGH": 338
            }
          },
          "trade_size": {
            "avg": 52910.029560097755,
            "median": 23200.0
          },
          "run_size": {
            "avg": 399428.3241613865,
            "median": 80840.0,
            "avg_length": 7.549198658218412
          },
          "recent_trades": [
            {
              "trade_id": "17744",
              "timestamp": "2026-04-17T07:59:58.598083",
              "price": 158.1,
              "size": 500.0,
              "notional": 79050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17743",
              "timestamp": "2026-04-17T07:59:58.509187",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17742",
              "timestamp": "2026-04-17T07:59:58.509187",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17741",
              "timestamp": "2026-04-17T07:59:57.103359",
              "price": 158.2,
              "size": 400.0,
              "notional": 63279.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17740",
              "timestamp": "2026-04-17T07:59:52.519040",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17739",
              "timestamp": "2026-04-17T07:59:51.516210",
              "price": 158.2,
              "size": 400.0,
              "notional": 63279.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17738",
              "timestamp": "2026-04-17T07:59:49.075741",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17737",
              "timestamp": "2026-04-17T07:59:47.799815",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17736",
              "timestamp": "2026-04-17T07:59:46.182646",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17735",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17734",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17733",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 1500.0,
              "notional": 237000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17732",
              "timestamp": "2026-04-17T07:59:43.925090",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17731",
              "timestamp": "2026-04-17T07:59:43.480345",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17730",
              "timestamp": "2026-04-17T07:59:43.480345",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17729",
              "timestamp": "2026-04-17T07:59:42.107192",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17728",
              "timestamp": "2026-04-17T07:59:42.098519",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17727",
              "timestamp": "2026-04-17T07:59:42.098519",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17726",
              "timestamp": "2026-04-17T07:59:41.498148",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17725",
              "timestamp": "2026-04-17T07:59:41.498148",
              "price": 158.1,
              "size": 300.0,
              "notional": 47430.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17724",
              "timestamp": "2026-04-17T07:59:38.828479",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17723",
              "timestamp": "2026-04-17T07:59:37.738602",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17722",
              "timestamp": "2026-04-17T07:59:37.738602",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17721",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17720",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17719",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17718",
              "timestamp": "2026-04-17T07:59:35.356998",
              "price": 158.0,
              "size": 200.0,
              "notional": 31600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17717",
              "timestamp": "2026-04-17T07:59:34.895859",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17716",
              "timestamp": "2026-04-17T07:59:34.895859",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17715",
              "timestamp": "2026-04-17T07:59:31.847201",
              "price": 158.0,
              "size": 200.0,
              "notional": 31600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            }
          ],
          "peer_comparison": []
        },
        "max": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 197817,
          "n_runs": 19113,
          "n_trade_days": 18,
          "first_trade_date": "2026-03-20",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.012491343008942609,
            "mixed_pct": 0.0,
            "instit_pct": 0.7352704772592851,
            "ambiguous_pct": 0.19666661611489406,
            "unobservable_pct": 0.055571563616878226,
            "unclear_pct": 0.25223817973177226,
            "retail_qty_pct": 0.0052149516039257295,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8134552203008145,
            "ambiguous_qty_pct": 0.14540288404250867,
            "unobservable_qty_pct": 0.03592694405275107,
            "unclear_qty_pct": 0.18132982809525974,
            "retail_notional_pct": 0.005173533445393578,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8176592684894095,
            "ambiguous_notional_pct": 0.14207949254744406,
            "unobservable_notional_pct": 0.035087705517752865,
            "unclear_notional_pct": 0.17716719806519693
          },
          "run_composition": {
            "retail_pct": 0.05734316957044943,
            "mixed_pct": 0.0,
            "instit_pct": 0.20818291215403129,
            "ambiguous_pct": 0.3798984984042275,
            "unobservable_pct": 0.35457541987129176,
            "unclear_pct": 0.7344739182755193,
            "retail_notional_pct": 0.005173533445393578,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8176592684894095,
            "unclear_notional_pct": 0.17716719806519693
          },
          "counts": {
            "trades": {
              "retail": 2471,
              "mixed": 0,
              "institutional": 145449,
              "ambiguous": 38904,
              "unobservable": 10993,
              "unclear": 49897
            },
            "runs": {
              "retail": 1096,
              "mixed": 0,
              "institutional": 3979,
              "ambiguous": 7261,
              "unobservable": 6777,
              "unclear": 14038
            }
          },
          "confidence": {
            "high": 0.02249777638256684,
            "medium": 0.19955004447234867,
            "low": 0.043478260869565216,
            "na": 0.7344739182755193
          },
          "confidence_counts": {
            "high": 430,
            "medium": 3814,
            "low": 831,
            "na": 14038
          },
          "trade_confidence": {
            "high": 0.05507615624541875,
            "medium": 0.6226866245064884,
            "low": 0.06999903951632064,
            "na": 0.2522381797317723
          },
          "trade_confidence_counts": {
            "high": 10895,
            "medium": 123178,
            "low": 13847,
            "na": 49897
          },
          "observability": {
            "avg_feature_coverage": 0.6632318317375608,
            "observable_run_pct": 0.6454245801287082,
            "ambiguous_run_pct": 0.3798984984042275,
            "unobservable_run_pct": 0.35457541987129176
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.3798984984042275,
          "dominance_gap": 0.02532307853293575,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 197817
            },
            "d2_information": {
              "UNOBSERVABLE": 197817
            },
            "d3_urgency": {
              "IMMEDIATE": 14941,
              "ADAPTIVE": 4142,
              "SCHEDULED": 30
            },
            "participant_confidence": {
              "NA": 14038,
              "MEDIUM": 3814,
              "LOW": 831,
              "HIGH": 430
            }
          },
          "trade_size": {
            "avg": 46263.135429462585,
            "median": 16900.0
          },
          "run_size": {
            "avg": 478817.2794040705,
            "median": 81020.0,
            "avg_length": 10.34986658295401
          },
          "recent_trades": [
            {
              "trade_id": "17744",
              "timestamp": "2026-04-17T07:59:58.598083",
              "price": 158.1,
              "size": 500.0,
              "notional": 79050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17743",
              "timestamp": "2026-04-17T07:59:58.509187",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17742",
              "timestamp": "2026-04-17T07:59:58.509187",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17741",
              "timestamp": "2026-04-17T07:59:57.103359",
              "price": 158.2,
              "size": 400.0,
              "notional": 63279.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17740",
              "timestamp": "2026-04-17T07:59:52.519040",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17739",
              "timestamp": "2026-04-17T07:59:51.516210",
              "price": 158.2,
              "size": 400.0,
              "notional": 63279.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17738",
              "timestamp": "2026-04-17T07:59:49.075741",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17737",
              "timestamp": "2026-04-17T07:59:47.799815",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17736",
              "timestamp": "2026-04-17T07:59:46.182646",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17735",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17734",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17733",
              "timestamp": "2026-04-17T07:59:46.173225",
              "price": 158.0,
              "size": 1500.0,
              "notional": 237000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17732",
              "timestamp": "2026-04-17T07:59:43.925090",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17731",
              "timestamp": "2026-04-17T07:59:43.480345",
              "price": 158.0,
              "size": 100.0,
              "notional": 15800.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17730",
              "timestamp": "2026-04-17T07:59:43.480345",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17729",
              "timestamp": "2026-04-17T07:59:42.107192",
              "price": 158.2,
              "size": 100.0,
              "notional": 15819.999999999998,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17728",
              "timestamp": "2026-04-17T07:59:42.098519",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17727",
              "timestamp": "2026-04-17T07:59:42.098519",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17726",
              "timestamp": "2026-04-17T07:59:41.498148",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17725",
              "timestamp": "2026-04-17T07:59:41.498148",
              "price": 158.1,
              "size": 300.0,
              "notional": 47430.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17724",
              "timestamp": "2026-04-17T07:59:38.828479",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17723",
              "timestamp": "2026-04-17T07:59:37.738602",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17722",
              "timestamp": "2026-04-17T07:59:37.738602",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17721",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17720",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17719",
              "timestamp": "2026-04-17T07:59:37.721906",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17718",
              "timestamp": "2026-04-17T07:59:35.356998",
              "price": 158.0,
              "size": 200.0,
              "notional": 31600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17717",
              "timestamp": "2026-04-17T07:59:34.895859",
              "price": 158.1,
              "size": 100.0,
              "notional": 15810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17716",
              "timestamp": "2026-04-17T07:59:34.895859",
              "price": 158.1,
              "size": 200.0,
              "notional": 31620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "17715",
              "timestamp": "2026-04-17T07:59:31.847201",
              "price": 158.0,
              "size": 200.0,
              "notional": 31600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 19112,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 197817,
      "n_runs": 19113,
      "n_trade_days": 18,
      "first_trade_date": "2026-03-20",
      "last_trade_date": "2026-04-17",
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
        "retail_pct": 0.012491343008942609,
        "mixed_pct": 0.0,
        "instit_pct": 0.7352704772592851,
        "ambiguous_pct": 0.19666661611489406,
        "unobservable_pct": 0.055571563616878226,
        "unclear_pct": 0.25223817973177226,
        "retail_qty_pct": 0.0052149516039257295,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.8134552203008145,
        "ambiguous_qty_pct": 0.14540288404250867,
        "unobservable_qty_pct": 0.03592694405275107,
        "unclear_qty_pct": 0.18132982809525974,
        "retail_notional_pct": 0.005173533445393578,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.8176592684894095,
        "ambiguous_notional_pct": 0.14207949254744406,
        "unobservable_notional_pct": 0.035087705517752865,
        "unclear_notional_pct": 0.17716719806519693
      },
      "run_composition": {
        "retail_pct": 0.05734316957044943,
        "mixed_pct": 0.0,
        "instit_pct": 0.20818291215403129,
        "ambiguous_pct": 0.3798984984042275,
        "unobservable_pct": 0.35457541987129176,
        "unclear_pct": 0.7344739182755193
      },
      "trade_size": {
        "avg": 46263.135429462585,
        "median": 16900.0
      },
      "run_size": {
        "avg": 478817.2794040705,
        "median": 81020.0,
        "avg_length": 10.34986658295401
      },
      "confidence": {
        "high": 0.02249777638256684,
        "medium": 0.19955004447234867,
        "low": 0.043478260869565216,
        "na": 0.7344739182755193
      },
      "confidence_counts": {
        "high": 430,
        "medium": 3814,
        "low": 831,
        "na": 14038
      },
      "trade_confidence": {
        "high": 0.05507615624541875,
        "medium": 0.6226866245064884,
        "low": 0.06999903951632064,
        "na": 0.2522381797317723
      },
      "trade_confidence_counts": {
        "high": 10895,
        "medium": 123178,
        "low": 13847,
        "na": 49897
      },
      "counts": {
        "trades": {
          "retail": 2471,
          "mixed": 0,
          "institutional": 145449,
          "ambiguous": 38904,
          "unobservable": 10993,
          "unclear": 49897
        },
        "runs": {
          "retail": 1096,
          "mixed": 0,
          "institutional": 3979,
          "ambiguous": 7261,
          "unobservable": 6777,
          "unclear": 14038
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6632318317375608,
        "observable_run_pct": 0.6454245801287082,
        "ambiguous_run_pct": 0.3798984984042275,
        "unobservable_run_pct": 0.35457541987129176
      },
      "dominant_bucket": "AMBIGUOUS",
      "dominant_label": "Mixed, mostly unclassified",
      "dominant_share": 0.3798984984042275,
      "dominance_gap": 0.02532307853293575,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-03",
            "n_trades": 116799,
            "n_runs": 8381,
            "retail_pct": 0.013244976412469285,
            "mixed_pct": 0.0,
            "instit_pct": 0.7547752977337134,
            "ambiguous_pct": 0.190164299351878,
            "unobservable_pct": 0.04181542650193923,
            "unclear_pct": 0.23197972585381724,
            "avg_trade_size": 41652.496051764145,
            "avg_run_notional": 580476.0632800381,
            "retail_qty_pct": 0.006073104372187032,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8261987956282701,
            "ambiguous_qty_pct": 0.1414011011023913,
            "unobservable_qty_pct": 0.02632699889715149,
            "unclear_qty_pct": 0.16772809999954277,
            "retail_notional_pct": 0.006012969696292886,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8330192022299484,
            "ambiguous_notional_pct": 0.13592558467944152,
            "unobservable_notional_pct": 0.02504224339431712,
            "unclear_notional_pct": 0.16096782807375865,
            "run_retail_pct": 0.04724973153561628,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1895955136618542,
            "run_ambiguous_pct": 0.40663405321560675,
            "run_unobservable_pct": 0.3565207015869228,
            "run_unclear_pct": 0.7631547548025295,
            "avg_feature_coverage": 0.6465218947619615,
            "high_confidence_pct": 0.010977210356759337,
            "medium_confidence_pct": 0.18756711609593127,
            "low_confidence_pct": 0.03830091874477986,
            "na_confidence_pct": 0.7631547548025295,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 81018,
            "n_runs": 10732,
            "retail_pct": 0.011404872991187144,
            "mixed_pct": 0.0,
            "instit_pct": 0.7071514971981535,
            "ambiguous_pct": 0.20604063294576513,
            "unobservable_pct": 0.07540299686489423,
            "unclear_pct": 0.28144362981065935,
            "avg_trade_size": 52910.029560097755,
            "avg_run_notional": 399428.3241613865,
            "retail_qty_pct": 0.0039927419585096754,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7953053974972834,
            "ambiguous_qty_pct": 0.1511023560819482,
            "unobservable_qty_pct": 0.04959950446225878,
            "unclear_qty_pct": 0.20070186054420697,
            "retail_notional_pct": 0.004220850579672884,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8002271577394392,
            "ambiguous_notional_pct": 0.14906361144484556,
            "unobservable_notional_pct": 0.04648838023604233,
            "unclear_notional_pct": 0.19555199168088788,
            "run_retail_pct": 0.06522549385016772,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.22269847185985836,
            "run_ambiguous_pct": 0.35901975400670894,
            "run_unobservable_pct": 0.353056280283265,
            "run_unclear_pct": 0.7120760342899739,
            "avg_feature_coverage": 0.6762812150577712,
            "high_confidence_pct": 0.03149459560193813,
            "medium_confidence_pct": 0.20890793887439432,
            "low_confidence_pct": 0.04752143123369363,
            "na_confidence_pct": 0.7120760342899739,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [],
      "peer_comparison_periods": {
        "1d": [],
        "1w": [],
        "2w": [],
        "max": []
      },
      "peer_activity_enabled": false,
      "peer_activity_reason": "Disabled for XHKG to avoid fetching peer L2/L3 history.",
      "recent_trades": [
        {
          "trade_id": "17744",
          "timestamp": "2026-04-17T07:59:58.598083",
          "price": 158.1,
          "size": 500.0,
          "notional": 79050.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17743",
          "timestamp": "2026-04-17T07:59:58.509187",
          "price": 158.2,
          "size": 100.0,
          "notional": 15819.999999999998,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17742",
          "timestamp": "2026-04-17T07:59:58.509187",
          "price": 158.2,
          "size": 100.0,
          "notional": 15819.999999999998,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17741",
          "timestamp": "2026-04-17T07:59:57.103359",
          "price": 158.2,
          "size": 400.0,
          "notional": 63279.99999999999,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17740",
          "timestamp": "2026-04-17T07:59:52.519040",
          "price": 158.0,
          "size": 100.0,
          "notional": 15800.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17739",
          "timestamp": "2026-04-17T07:59:51.516210",
          "price": 158.2,
          "size": 400.0,
          "notional": 63279.99999999999,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17738",
          "timestamp": "2026-04-17T07:59:49.075741",
          "price": 158.2,
          "size": 100.0,
          "notional": 15819.999999999998,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17737",
          "timestamp": "2026-04-17T07:59:47.799815",
          "price": 158.2,
          "size": 100.0,
          "notional": 15819.999999999998,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17736",
          "timestamp": "2026-04-17T07:59:46.182646",
          "price": 158.2,
          "size": 100.0,
          "notional": 15819.999999999998,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17735",
          "timestamp": "2026-04-17T07:59:46.173225",
          "price": 158.0,
          "size": 100.0,
          "notional": 15800.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17734",
          "timestamp": "2026-04-17T07:59:46.173225",
          "price": 158.0,
          "size": 100.0,
          "notional": 15800.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17733",
          "timestamp": "2026-04-17T07:59:46.173225",
          "price": 158.0,
          "size": 1500.0,
          "notional": 237000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17732",
          "timestamp": "2026-04-17T07:59:43.925090",
          "price": 158.0,
          "size": 100.0,
          "notional": 15800.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17731",
          "timestamp": "2026-04-17T07:59:43.480345",
          "price": 158.0,
          "size": 100.0,
          "notional": 15800.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17730",
          "timestamp": "2026-04-17T07:59:43.480345",
          "price": 158.1,
          "size": 100.0,
          "notional": 15810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17729",
          "timestamp": "2026-04-17T07:59:42.107192",
          "price": 158.2,
          "size": 100.0,
          "notional": 15819.999999999998,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17728",
          "timestamp": "2026-04-17T07:59:42.098519",
          "price": 158.1,
          "size": 100.0,
          "notional": 15810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17727",
          "timestamp": "2026-04-17T07:59:42.098519",
          "price": 158.1,
          "size": 100.0,
          "notional": 15810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17726",
          "timestamp": "2026-04-17T07:59:41.498148",
          "price": 158.1,
          "size": 100.0,
          "notional": 15810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17725",
          "timestamp": "2026-04-17T07:59:41.498148",
          "price": 158.1,
          "size": 300.0,
          "notional": 47430.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17724",
          "timestamp": "2026-04-17T07:59:38.828479",
          "price": 158.1,
          "size": 200.0,
          "notional": 31620.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17723",
          "timestamp": "2026-04-17T07:59:37.738602",
          "price": 158.1,
          "size": 100.0,
          "notional": 15810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17722",
          "timestamp": "2026-04-17T07:59:37.738602",
          "price": 158.1,
          "size": 100.0,
          "notional": 15810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17721",
          "timestamp": "2026-04-17T07:59:37.721906",
          "price": 158.1,
          "size": 100.0,
          "notional": 15810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17720",
          "timestamp": "2026-04-17T07:59:37.721906",
          "price": 158.1,
          "size": 200.0,
          "notional": 31620.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17719",
          "timestamp": "2026-04-17T07:59:37.721906",
          "price": 158.1,
          "size": 100.0,
          "notional": 15810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17718",
          "timestamp": "2026-04-17T07:59:35.356998",
          "price": 158.0,
          "size": 200.0,
          "notional": 31600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17717",
          "timestamp": "2026-04-17T07:59:34.895859",
          "price": 158.1,
          "size": 100.0,
          "notional": 15810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17716",
          "timestamp": "2026-04-17T07:59:34.895859",
          "price": 158.1,
          "size": 200.0,
          "notional": 31620.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "17715",
          "timestamp": "2026-04-17T07:59:31.847201",
          "price": 158.0,
          "size": 200.0,
          "notional": 31600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 19112,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
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
      "total_trades": 197816,
      "price_moving_trades": 66699,
      "pct_price_moving": 33.71769725401383,
      "all_movers": {
        "count": 66699,
        "avg_size": 46034.53224860942,
        "median_size": 17540.0,
        "retail_count": 1015,
        "mixed_count": 0,
        "institutional_count": 49016,
        "ambiguous_count": 12758,
        "unobservable_count": 3910,
        "retail_pct": 1.5217619454564537,
        "mixed_pct": 0.0,
        "instit_pct": 73.48835814629905,
        "unclear_pct": 24.9898799082445
      },
      "positive_movers": {
        "count": 33013,
        "avg_size": 47031.098900433164,
        "median_size": 17090.0,
        "retail_count": 418,
        "mixed_count": 0,
        "institutional_count": 24348,
        "ambiguous_count": 6137,
        "unobservable_count": 2110,
        "retail_pct": 1.2661678732620483,
        "mixed_pct": 0.0,
        "instit_pct": 73.75276406264199,
        "unclear_pct": 24.98106806409596
      },
      "negative_movers": {
        "count": 33686,
        "avg_size": 45057.875629341564,
        "median_size": 18500.0,
        "retail_count": 597,
        "mixed_count": 0,
        "institutional_count": 24668,
        "ambiguous_count": 6621,
        "unobservable_count": 1800,
        "retail_pct": 1.7722495992400402,
        "mixed_pct": 0.0,
        "instit_pct": 73.22923469690673,
        "unclear_pct": 24.998515703853233
      }
    },
    "short_selling": {
      "data_available": false
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
          "opening": 0.0019013817219832385,
          "continuous": 0.9862207594535617,
          "closing": 0.003444592391575276,
          "auctions": 0.005345974113558515,
          "other": 0.008433266432879864
        },
        "1W": {
          "opening": 0.00305258889012091,
          "continuous": 0.9887826972731885,
          "closing": 0.003035865660528743,
          "auctions": 0.006088454550649653,
          "other": 0.005128848176162017
        },
        "2W": {
          "opening": 0.0038350661117308883,
          "continuous": 0.9864881240069929,
          "closing": 0.0050651917641466775,
          "auctions": 0.008900257875877567,
          "other": 0.004611618117129482
        },
        "18D": {
          "opening": 0.0048940157921810844,
          "continuous": 0.9853608546206368,
          "closing": 0.005667611935669467,
          "auctions": 0.010561627727850551,
          "other": 0.004077517651512592
        }
      },
      "hhi": {
        "1D": 0.1275032071268633,
        "1W": 0.14676402521902138,
        "2W": 0.14262845750317826,
        "18D": 0.16253647732016824
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0064
        },
        {
          "time": "09:30",
          "avg_share": 0.2821
        },
        {
          "time": "10:00",
          "avg_share": 0.1443
        },
        {
          "time": "10:30",
          "avg_share": 0.0934
        },
        {
          "time": "11:00",
          "avg_share": 0.0648
        },
        {
          "time": "11:30",
          "avg_share": 0.0383
        },
        {
          "time": "13:00",
          "avg_share": 0.0777
        },
        {
          "time": "13:30",
          "avg_share": 0.0645
        },
        {
          "time": "14:00",
          "avg_share": 0.0415
        },
        {
          "time": "14:30",
          "avg_share": 0.0449
        },
        {
          "time": "15:00",
          "avg_share": 0.0521
        },
        {
          "time": "15:30",
          "avg_share": 0.0844
        },
        {
          "time": "16:00",
          "avg_share": 0.0056
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1989",
          "auctions_pct": 1.5850431680032404,
          "hhi": 0.16438872002759183,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "6088",
          "auctions_pct": 1.6276572833335265,
          "hhi": 0.1517243403180911,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2382",
          "auctions_pct": 8.028599117083564,
          "hhi": 0.10967823120237555,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6613",
          "auctions_pct": 2.014150940595612,
          "hhi": 0.1287215108211416,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2018",
          "auctions_pct": 8.474619592352592,
          "hhi": 0.11571310890484796,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1415",
          "auctions_pct": 3.006340226645843,
          "hhi": 0.11476599454933607,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1478",
          "auctions_pct": 3.1003607835692235,
          "hhi": 0.13227430382366245,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2208",
          "auctions_pct": 2.3011990304448253,
          "hhi": 0.1406734551489809,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1072",
          "auctions_pct": 1.6804430697563377,
          "hhi": 0.1414575279395994,
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
