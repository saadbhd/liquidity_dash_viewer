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
      "marketCap": 263160000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 98736916.8,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 127347680.94,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 68122409.4,
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
      "ticker": "S69",
      "name": "Serial System",
      "marketCap": 61529250.152,
      "sector": "Electronics & Computer Distribution",
      "industry": "Technology"
    },
    {
      "ticker": "S71",
      "name": "Sunright",
      "marketCap": 52806580.0,
      "sector": "Semiconductors",
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
    "asof_date": "2026-04-06",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "125.5M",
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
          "score_pca": 79.03225806451613,
          "score_pca_percentile": 79.03225806451613,
          "rank_pca": 118,
          "total": 558,
          "adv_notional_sgd": 268620.0,
          "adv_volume_shares": 1221000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.002141198991293606,
          "votes": 93.0,
          "trades": 93.0,
          "spread_pct": 0.028172420047155568,
          "spread_ticks": 1.2594594594594595,
          "amihud": 1.618578693677511e-07,
          "volatility": 0.6288177763533505
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5152824414129847,
          "loadings": {
            "log_adv": 0.5557545370459273,
            "log_trades": 0.518119824928134,
            "log_turnover": 0.5168652642831851,
            "neg_spread": 0.353351294132773,
            "neg_amihud": 0.0188223036121847,
            "neg_vol": -0.17414828155398185
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
          "peer_median_adv": 1660.0,
          "peer_median_score_pca": 37.54480286738351,
          "peer_median_trades": 3.0,
          "peer_median_volatility": 0.1121653346315393,
          "peer_median_spread_pct": 0.02643473745700009,
          "peer_median_spread_ticks": 2.0,
          "peer_median_amihud": 4.5835596681198676e-07,
          "peer_median_turnover_ratio": 2.5706545964419166e-05,
          "target_vs_peer": {
            "score_pca_delta": 41.49,
            "adv_delta_pct": 16081.9,
            "trades_delta_pct": 3000.0,
            "volatility_delta_pct": -460.62,
            "spread_pct_delta_pct": -6.57,
            "spread_ticks_delta_pct": -37.03,
            "amihud_delta_pct": 64.69,
            "turnover_ratio_delta_pct": 8229.39
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 79.03225806451613,
            "rank_pca": 118,
            "adv": 268620.0,
            "trades": 93.0,
            "volatility": 0.6288177763533505,
            "spread_pct": 0.028172420047155568,
            "spread_ticks": 1.2594594594594595,
            "amihud": 1.618578693677511e-07,
            "turnover_ratio": 0.002141198991293606,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 75.98566308243727,
            "rank_pca": 135,
            "adv": 131172.0,
            "trades": 105.0,
            "volatility": 0.2846066143911051,
            "spread_pct": 0.012108590554109346,
            "spread_ticks": 1.8511904761904763,
            "amihud": 2.3101752129288474e-07,
            "turnover_ratio": 0.0019046603454455514,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 25.985663082437277,
            "rank_pca": 414,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.028169014084507067,
            "spread_ticks": 2.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 27.77777777777778,
            "rank_pca": 404,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.013793103448275874,
            "spread_ticks": 2.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 47.31182795698925,
            "rank_pca": 295,
            "adv": 3320.0,
            "trades": 6.0,
            "volatility": 0.4389651166087884,
            "spread_pct": 0.029275808936825912,
            "spread_ticks": 5.7,
            "amihud": 1.2550200803212874e-05,
            "turnover_ratio": 5.141309192883833e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 1.702508960573477,
            "rank_pca": 547,
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
            "score_pca": 3.046594982078853,
            "rank_pca": 542,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6021978021978023,
            "spread_ticks": 27.4,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 65.77060931899642,
            "rank_pca": 192,
            "adv": 44193.200000000004,
            "trades": 23.0,
            "volatility": 0.43016079377582994,
            "spread_pct": 0.022628700735432793,
            "spread_ticks": 1.5,
            "amihud": 6.856944123310888e-07,
            "turnover_ratio": 0.0010955567580925667,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 56.81003584229391,
            "rank_pca": 242,
            "adv": 9503.0,
            "trades": 12.0,
            "volatility": 0.2243306692630786,
            "spread_pct": 0.02470046082949311,
            "spread_ticks": 2.09375,
            "amihud": 0.0,
            "turnover_ratio": 0.0004704800887397829,
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
              "mean": 0.24383308453615124,
              "median": 0.08869309203663919,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8881110962463872,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2293736.4798603957,
              "median": 9567.5,
              "min": 0.0,
              "max": 232041432.0,
              "p5": 0.0,
              "p95": 11466100.949999994,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11049300854193582,
              "median": 0.03300635008261086,
              "min": 0.00026170922585241186,
              "max": 1.2704402515723272,
              "p5": 0.003358439243305416,
              "p95": 0.5056306306306306,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0072652148276420745,
              "median": 0.0001674418899664362,
              "min": 0.0,
              "max": 2.4059060048777274,
              "p5": 0.0,
              "p95": 0.011941364928125241,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0011162155690917434,
              "median": 2.020588993609274e-08,
              "min": 0.0,
              "max": 0.4166666666666667,
              "p5": 0.0,
              "p95": 0.0001194457716196852,
              "count": 401
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 316.9695340501792,
              "median": 6.5,
              "min": 0.0,
              "max": 7289.0,
              "p5": 0.0,
              "p95": 1868.35,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.20125880312888347,
              "median": 0.1288404588389119,
              "min": 0.0,
              "max": 0.6288177763533505,
              "p5": 0.0,
              "p95": 0.5623693454427536,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1184610.625,
              "median": 1660.0,
              "min": 0.0,
              "max": 9073773.0,
              "p5": 0.0,
              "p95": 5991969.4499999955,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17272719782446183,
              "median": 0.028170717065831317,
              "min": 0.0014341766603521936,
              "max": 0.6666666666666666,
              "p5": 0.005170221523167197,
              "p95": 0.6441025641025641,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001256752806104683,
              "median": 2.5706545964419166e-05,
              "min": 0.0,
              "max": 0.00595675002016947,
              "p5": 0.0,
              "p95": 0.004621307160062916,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.2359867274096762e-06,
              "median": 1.9643769533031792e-07,
              "min": 8.707157651952422e-10,
              "max": 1.2550200803212874e-05,
              "p5": 2.501878880557862e-08,
              "p95": 1.0702323310924872e-05,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 343.625,
              "median": 3.0,
              "min": 0.0,
              "max": 2545.0,
              "p5": 0.0,
              "p95": 1690.9999999999986,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 23523.525,
              "median": 1660.0,
              "min": 0.0,
              "max": 131172.0,
              "p5": 0.0,
              "p95": 100729.41999999995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 18.25,
              "median": 3.0,
              "min": 0.0,
              "max": 105.0,
              "p5": 0.0,
              "p95": 76.29999999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.17225789925485024,
              "median": 0.1121653346315393,
              "min": 0.0,
              "max": 0.4389651166087884,
              "p5": 0.0,
              "p95": 0.4358836036172529,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1749425184316391,
              "median": 0.02643473745700009,
              "min": 0.012108590554109346,
              "max": 0.6666666666666666,
              "p5": 0.012698170067067631,
              "p95": 0.6441025641025641,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.4431175595238095,
              "median": 2.0,
              "min": 1.0,
              "max": 27.4,
              "p5": 1.175,
              "p95": 19.804999999999986,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.366728184209212e-06,
              "median": 4.5835596681198676e-07,
              "min": 0.0,
              "max": 1.2550200803212874e-05,
              "p5": 3.465262819393272e-08,
              "p95": 1.0770524844580603e-05,
              "count": 4
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00044026378552584243,
              "median": 2.5706545964419166e-05,
              "min": 0.0,
              "max": 0.0019046603454455514,
              "p5": 0.0,
              "p95": 0.0016214740898720062,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.0434782608695653,
            "market": 0.005032825132642804,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.048511086002208104,
            "vs_sector": -0.0434782608695653,
            "vs_peers": -0.0434782608695653
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 72.04301075268818,
          "score_pca_percentile": 72.04301075268818,
          "rank_pca": 157,
          "total": 558,
          "adv_notional_sgd": 130072.5,
          "adv_volume_shares": 578100.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0010137814388753756,
          "votes": 46.0,
          "trades": 46.0,
          "spread_pct": 0.025406504065040632,
          "spread_ticks": 1.1627906976744187,
          "amihud": 1.528287843845656e-07,
          "volatility": 0.3958342204745805
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5167414893127699,
          "loadings": {
            "log_adv": 0.5513169481166852,
            "log_trades": 0.5073298400957165,
            "log_turnover": 0.507954394172611,
            "neg_spread": 0.4023803769377374,
            "neg_amihud": 0.09268470626269544,
            "neg_vol": 0.10073711822827564
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
          "peer_median_adv": 2585.0,
          "peer_median_score_pca": 44.623655913978496,
          "peer_median_trades": 5.0,
          "peer_median_volatility": 0.24033180150212186,
          "peer_median_spread_pct": 0.026728508166164757,
          "peer_median_spread_ticks": 2.1875,
          "peer_median_amihud": 5.271375691999859e-07,
          "peer_median_turnover_ratio": 3.4347885023001406e-05,
          "target_vs_peer": {
            "score_pca_delta": 27.42,
            "adv_delta_pct": 4931.8,
            "trades_delta_pct": 820.0,
            "volatility_delta_pct": -64.7,
            "spread_pct_delta_pct": 4.95,
            "spread_ticks_delta_pct": -46.84,
            "amihud_delta_pct": 71.01,
            "turnover_ratio_delta_pct": 2851.51
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.04301075268818,
            "rank_pca": 157,
            "adv": 130072.5,
            "trades": 46.0,
            "volatility": 0.3958342204745805,
            "spread_pct": 0.025406504065040632,
            "spread_ticks": 1.1627906976744187,
            "amihud": 1.528287843845656e-07,
            "turnover_ratio": 0.0010137814388753756,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 79.56989247311827,
            "rank_pca": 115,
            "adv": 226215.0,
            "trades": 197.0,
            "volatility": 0.2374052975456158,
            "spread_pct": 0.007787235775668969,
            "spread_ticks": 1.4199475065616798,
            "amihud": 4.420573348363287e-08,
            "turnover_ratio": 0.0033842526355700505,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 26.344086021505376,
            "rank_pca": 412,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.2432583054586279,
            "spread_pct": 0.028169014084507067,
            "spread_ticks": 2.0,
            "amihud": 3.259951040976812e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 42.473118279569896,
            "rank_pca": 322,
            "adv": 1850.0,
            "trades": 4.0,
            "volatility": 0.17017381223175038,
            "spread_pct": 0.025288002247822447,
            "spread_ticks": 3.7333333333333334,
            "amihud": 3.356532960283989e-06,
            "turnover_ratio": 1.7282678117164487e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.774193548387096,
            "rank_pca": 298,
            "adv": 3320.0,
            "trades": 6.0,
            "volatility": 0.4720842557597875,
            "spread_pct": 0.011994949494949505,
            "spread_ticks": 2.375,
            "amihud": 8.297754123289287e-06,
            "turnover_ratio": 5.141309192883833e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.315412186379928,
            "rank_pca": 538,
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
            "score_pca": 4.480286738351254,
            "rank_pca": 534,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6021978021978023,
            "spread_ticks": 27.4,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 65.94982078853047,
            "rank_pca": 191,
            "adv": 44193.200000000004,
            "trades": 24.0,
            "volatility": 0.5785150612786264,
            "spread_pct": 0.022995899332636505,
            "spread_ticks": 1.5714285714285714,
            "amihud": 5.271375691999859e-07,
            "turnover_ratio": 0.0010955567580925667,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 62.365591397849464,
            "rank_pca": 211,
            "adv": 28028.0,
            "trades": 13.0,
            "volatility": 0.4271000762432777,
            "spread_pct": 0.03700349333678357,
            "spread_ticks": 3.25,
            "amihud": 3.9642896785753787e-07,
            "turnover_ratio": 0.0013113834147679016,
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
              "mean": 0.5898784200169783,
              "median": 0.3086381866626672,
              "min": 0.0,
              "max": 10.648943609579309,
              "p5": 0.0,
              "p95": 2.204601903519424,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3332941.64093798,
              "median": 9556.75,
              "min": 0.0,
              "max": 270730200.0,
              "p5": 0.0,
              "p95": 12578224.174999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11377457680768252,
              "median": 0.03362659326254279,
              "min": 0.0002671610380959682,
              "max": 1.3400402414486918,
              "p5": 0.0034925958116755807,
              "p95": 0.5493461859150347,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006875182049305811,
              "median": 0.0001768336509281291,
              "min": 0.0,
              "max": 2.2707797772065126,
              "p5": 0.0,
              "p95": 0.01061123329175598,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.003342791455218088,
              "median": 1.6824094876965509e-07,
              "min": 0.0,
              "max": 0.8333333333333331,
              "p5": 0.0,
              "p95": 0.00039426357839686394,
              "count": 504
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 453.0501792114695,
              "median": 6.0,
              "min": 0.0,
              "max": 10655.0,
              "p5": 0.0,
              "p95": 2643.5499999999993,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22798399525350926,
              "median": 0.24033180150212186,
              "min": 0.0,
              "max": 0.4720842557597875,
              "p5": 0.0,
              "p95": 0.44539674340996505,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1809326.4375000002,
              "median": 2585.0,
              "min": 0.0,
              "max": 14113154.000000002,
              "p5": 0.0,
              "p95": 9252725.349999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1711180438991012,
              "median": 0.02534725315643154,
              "min": 0.0014341766603521936,
              "max": 0.6666666666666666,
              "p5": 0.003657747350713065,
              "p95": 0.6441025641025641,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0016910968871377949,
              "median": 3.4347885023001406e-05,
              "min": 0.0,
              "max": 0.00906204525261093,
              "p5": 0.0,
              "p95": 0.007074817836646619,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.1588827493617764e-06,
              "median": 1.528287843845656e-07,
              "min": 0.0,
              "max": 8.297754123289287e-06,
              "p5": 2.719809342441592e-10,
              "p95": 6.8153877743876945e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 492.875,
              "median": 5.0,
              "min": 0.0,
              "max": 3690.0,
              "p5": 0.0,
              "p95": 2467.449999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 37950.775,
              "median": 2585.0,
              "min": 0.0,
              "max": 226215.0,
              "p5": 0.0,
              "p95": 162507.3699999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 30.5,
              "median": 5.0,
              "min": 0.0,
              "max": 197.0,
              "p5": 0.0,
              "p95": 136.4499999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26606710106471076,
              "median": 0.24033180150212186,
              "min": 0.0,
              "max": 0.5785150612786264,
              "p5": 0.0,
              "p95": 0.5412642793470327,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1752628828921046,
              "median": 0.026728508166164757,
              "min": 0.007787235775668969,
              "max": 0.6666666666666666,
              "p5": 0.009259935577417156,
              "p95": 0.6441025641025641,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.343713676415447,
              "median": 2.1875,
              "min": 1.0,
              "max": 27.4,
              "p5": 1.146981627296588,
              "p95": 19.116666666666653,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2688586278701776e-06,
              "median": 5.271375691999859e-07,
              "min": 0.0,
              "max": 8.297754123289287e-06,
              "p5": 1.3261720045089862e-08,
              "p95": 6.8153877743876945e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0007324860723095652,
              "median": 3.4347885023001406e-05,
              "min": 0.0,
              "max": 0.0033842526355700505,
              "p5": 0.0,
              "p95": 0.002658748408289297,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.04347826086956541,
            "market": 0.015152510503691596,
            "sector": 0.005050505050505194,
            "peers": -0.0067656292656290695,
            "vs_market": -0.05863077137325701,
            "vs_sector": -0.048528765920070605,
            "vs_peers": -0.03671263160393634
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 68.63799283154121,
          "score_pca_percentile": 68.63799283154121,
          "rank_pca": 176,
          "total": 558,
          "adv_notional_sgd": 119868.25,
          "adv_volume_shares": 527450.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0009249593840768326,
          "votes": 38.5,
          "trades": 38.5,
          "spread_pct": 0.02580567894413647,
          "spread_ticks": 1.1778865769073847,
          "amihud": 1.3765828005227433e-07,
          "volatility": 0.3954346352343386
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5197654000626889,
          "loadings": {
            "log_adv": 0.5507439087278603,
            "log_trades": 0.5025578612660043,
            "log_turnover": 0.5080505046142195,
            "neg_spread": 0.4135721891261015,
            "neg_amihud": 0.08802265697523316,
            "neg_vol": 0.08492045737394104
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
          "peer_median_adv": 5467.5,
          "peer_median_score_pca": 47.939068100358426,
          "peer_median_trades": 4.5,
          "peer_median_volatility": 0.3383359430065379,
          "peer_median_spread_pct": 0.02322322423752314,
          "peer_median_spread_ticks": 1.9083333333333332,
          "peer_median_amihud": 4.841395843358494e-07,
          "peer_median_turnover_ratio": 0.00017003971556446112,
          "target_vs_peer": {
            "score_pca_delta": 20.7,
            "adv_delta_pct": 2092.4,
            "trades_delta_pct": 755.56,
            "volatility_delta_pct": -16.88,
            "spread_pct_delta_pct": -11.12,
            "spread_ticks_delta_pct": -38.28,
            "amihud_delta_pct": 71.57,
            "turnover_ratio_delta_pct": 443.97
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 68.63799283154121,
            "rank_pca": 176,
            "adv": 119868.25,
            "trades": 38.5,
            "volatility": 0.3954346352343386,
            "spread_pct": 0.02580567894413647,
            "spread_ticks": 1.1778865769073847,
            "amihud": 1.3765828005227433e-07,
            "turnover_ratio": 0.0009249593840768326,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.43727598566308,
            "rank_pca": 99,
            "adv": 463915.0,
            "trades": 294.5,
            "volatility": 0.24470102823630085,
            "spread_pct": 0.010067239077559265,
            "spread_ticks": 1.420712008314397,
            "amihud": 1.675269663547139e-08,
            "turnover_ratio": 0.0068869911402191395,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 44.44444444444444,
            "rank_pca": 311,
            "adv": 5325.0,
            "trades": 1.0,
            "volatility": 0.5582135050564498,
            "spread_pct": 0.02560202578573677,
            "spread_ticks": 1.8166666666666667,
            "amihud": 2.2539148236729925e-06,
            "turnover_ratio": 0.0002669861197120195,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 47.491039426523294,
            "rank_pca": 294,
            "adv": 5610.0,
            "trades": 4.5,
            "volatility": 0.28488079321328624,
            "spread_pct": 0.017883755588673635,
            "spread_ticks": 2.7272727272727275,
            "amihud": 3.0852770578797915e-06,
            "turnover_ratio": 5.184803435149346e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 48.38709677419355,
            "rank_pca": 289,
            "adv": 4720.0,
            "trades": 4.5,
            "volatility": 0.3917910927997895,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 2.0,
            "amihud": 3.024254521260512e-06,
            "turnover_ratio": 7.30933114169027e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.867383512544803,
            "rank_pca": 541,
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
            "spread_pct": 0.42044728434504797,
            "spread_ticks": 16.458333333333332,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 67.74193548387096,
            "rank_pca": 181,
            "adv": 63634.05,
            "trades": 33.0,
            "volatility": 0.5131969829171523,
            "spread_pct": 0.022606411878242385,
            "spread_ticks": 1.55943859290316,
            "amihud": 4.841395843358494e-07,
            "turnover_ratio": 0.0015907403212402685,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 72.75985663082437,
            "rank_pca": 153,
            "adv": 109755.0,
            "trades": 39.0,
            "volatility": 0.5787380178505462,
            "spread_pct": 0.023840036596803896,
            "spread_ticks": 2.0238486842105265,
            "amihud": 2.564171618715225e-07,
            "turnover_ratio": 0.00527427339299915,
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
              "mean": 0.6341311242993388,
              "median": 0.3666364780930299,
              "min": 0.0,
              "max": 14.959820685717194,
              "p5": 0.0,
              "p95": 1.8246379791645329,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3177577.5982014826,
              "median": 9835.925,
              "min": 0.0,
              "max": 257346153.5,
              "p5": 0.0,
              "p95": 14089784.624999993,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11211075682410017,
              "median": 0.03378812719185599,
              "min": 0.0002896686179728066,
              "max": 1.3609347955788451,
              "p5": 0.003571351826859642,
              "p95": 0.5340889168685452,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007406258982787904,
              "median": 0.00021909409678329462,
              "min": 0.0,
              "max": 2.5130182585195437,
              "p5": 0.0,
              "p95": 0.010753010979386333,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0014464839591682868,
              "median": 1.58024670906656e-07,
              "min": 0.0,
              "max": 0.4166666666666667,
              "p5": 0.0,
              "p95": 0.0001912555937922442,
              "count": 526
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 468.43279569892474,
              "median": 5.0,
              "min": 0.0,
              "max": 10929.5,
              "p5": 0.0,
              "p95": 3026.0749999999985,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2751886833619819,
              "median": 0.3056846027844881,
              "min": 0.0,
              "max": 0.5582135050564498,
              "p5": 0.0,
              "p95": 0.5012409006187108,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1639981.15625,
              "median": 5467.5,
              "min": 0.0,
              "max": 12520411.0,
              "p5": 0.0,
              "p95": 8300637.399999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1472400185942354,
              "median": 0.021742890687205203,
              "min": 0.001397247089780917,
              "max": 0.6666666666666666,
              "p5": 0.004425798548056092,
              "p95": 0.5804898828541,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002053670453044923,
              "median": 0.00017003971556446112,
              "min": 0.0,
              "max": 0.008225485634582997,
              "p5": 0.0,
              "p95": 0.007757012561555646,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2170090275330819e-06,
              "median": 1.3765828005227433e-07,
              "min": 0.0,
              "max": 3.0852770578797915e-06,
              "p5": 3.617439691594115e-10,
              "p95": 3.0669702968940075e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 461.0,
              "median": 4.5,
              "min": 0.0,
              "max": 3345.0,
              "p5": 0.0,
              "p95": 2277.3249999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 81619.88125,
              "median": 5467.5,
              "min": 0.0,
              "max": 463915.0,
              "p5": 0.0,
              "p95": 339958.9999999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 47.0625,
              "median": 4.5,
              "min": 0.0,
              "max": 294.5,
              "p5": 0.0,
              "p95": 205.07499999999987,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3214401775091906,
              "median": 0.3383359430065379,
              "min": 0.0,
              "max": 0.5787380178505462,
              "p5": 0.0,
              "p95": 0.5715544383726124,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1496454588993765,
              "median": 0.02322322423752314,
              "min": 0.010050251256281416,
              "max": 0.6666666666666666,
              "p5": 0.010056196993728663,
              "p95": 0.5804898828541,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.6257840015876015,
              "median": 1.9083333333333332,
              "min": 1.0,
              "max": 16.458333333333332,
              "p5": 1.147249202910039,
              "p95": 11.652462121212114,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3029651208080198e-06,
              "median": 4.841395843358494e-07,
              "min": 0.0,
              "max": 3.0852770578797915e-06,
              "p5": 5.025808990641418e-09,
              "p95": 3.0669702968940075e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0017679915399923718,
              "median": 0.00017003971556446112,
              "min": 0.0,
              "max": 0.0068869911402191395,
              "p5": 0.0,
              "p95": 0.006322539928692143,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -0.04347826086956541,
            "market": 0.004754577226533385,
            "sector": 0.009463859573717981,
            "peers": -0.02012528788853518,
            "vs_market": -0.048232838096098796,
            "vs_sector": -0.05294212044328339,
            "vs_peers": -0.02335297298103023
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 71.14695340501792,
          "score_pca_percentile": 71.14695340501792,
          "rank_pca": 162,
          "total": 558,
          "adv_notional_sgd": 145406.0,
          "adv_volume_shares": 632200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0011086535645338392,
          "votes": 46.0,
          "trades": 46.0,
          "spread_pct": 0.025405786873676804,
          "spread_ticks": 1.170940170940171,
          "amihud": 1.2248777571998307e-07,
          "volatility": 0.4660397259715721
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5300170077054485,
          "loadings": {
            "log_adv": 0.5442258934488241,
            "log_trades": 0.4995880067876183,
            "log_turnover": 0.5019850703150761,
            "neg_spread": 0.4154040524439197,
            "neg_amihud": 0.07778461992834784,
            "neg_vol": 0.1537205766003475
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
          "peer_median_adv": 7478.75,
          "peer_median_score_pca": 51.4336917562724,
          "peer_median_trades": 6.0,
          "peer_median_volatility": 0.3608427354621778,
          "peer_median_spread_pct": 0.023575630818673088,
          "peer_median_spread_ticks": 1.875,
          "peer_median_amihud": 3.990258779851174e-07,
          "peer_median_turnover_ratio": 8.604180000127051e-05,
          "target_vs_peer": {
            "score_pca_delta": 19.71,
            "adv_delta_pct": 1844.3,
            "trades_delta_pct": 666.67,
            "volatility_delta_pct": -29.15,
            "spread_pct_delta_pct": -7.76,
            "spread_ticks_delta_pct": -37.55,
            "amihud_delta_pct": 69.3,
            "turnover_ratio_delta_pct": 1188.51
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.14695340501792,
            "rank_pca": 162,
            "adv": 145406.0,
            "trades": 46.0,
            "volatility": 0.4660397259715721,
            "spread_pct": 0.025405786873676804,
            "spread_ticks": 1.170940170940171,
            "amihud": 1.2248777571998307e-07,
            "turnover_ratio": 0.0011086535645338392,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.07885304659499,
            "rank_pca": 101,
            "adv": 496000.0,
            "trades": 273.0,
            "volatility": 0.3563184271142233,
            "spread_pct": 0.01304000336516217,
            "spread_ticks": 1.4241164241164241,
            "amihud": 3.6499536747879674e-08,
            "turnover_ratio": 0.007202459766642081,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 33.87096774193548,
            "rank_pca": 370,
            "adv": 74.0,
            "trades": 1.0,
            "volatility": 0.4435207580228546,
            "spread_pct": 0.05007085498346713,
            "spread_ticks": 3.533333333333333,
            "amihud": 2.012072434607639e-06,
            "turnover_ratio": 3.5598149294935937e-06,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 52.867383512544805,
            "rank_pca": 264,
            "adv": 9157.5,
            "trades": 7.0,
            "volatility": 0.3136460028822271,
            "spread_pct": 0.019672131147541,
            "spread_ticks": 3.0,
            "amihud": 1.0852619974348715e-06,
            "turnover_ratio": 8.226554783770296e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 50.0,
            "rank_pca": 280,
            "adv": 5800.0,
            "trades": 5.0,
            "volatility": 0.36536704381013235,
            "spread_pct": 0.01833180568285978,
            "spread_ticks": 1.75,
            "amihud": 1.365669336393555e-06,
            "turnover_ratio": 8.981805216483805e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.225806451612903,
            "rank_pca": 539,
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
            "score_pca": 8.781362007168457,
            "rank_pca": 510,
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
            "ticker": "S69",
            "score_pca": 69.35483870967742,
            "rank_pca": 172,
            "adv": 97659.4,
            "trades": 39.0,
            "volatility": 0.7517476365510325,
            "spread_pct": 0.022450800807853062,
            "spread_ticks": 1.551948051948052,
            "amihud": 3.6756626451535687e-07,
            "turnover_ratio": 0.0022551713047795595,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 68.99641577060932,
            "rank_pca": 174,
            "adv": 95472.0,
            "trades": 29.0,
            "volatility": 0.7244239648818479,
            "spread_pct": 0.02470046082949311,
            "spread_ticks": 2.0,
            "amihud": 3.990258779851174e-07,
            "turnover_ratio": 0.0049176878053796315,
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
              "mean": 0.6472370493162689,
              "median": 0.4034013159639276,
              "min": 0.0,
              "max": 10.33172044141643,
              "p5": 0.0,
              "p95": 2.002191103403035,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3308777.8979608407,
              "median": 8932.5,
              "min": 0.0,
              "max": 270730200.0,
              "p5": 0.0,
              "p95": 13765455.499999994,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11050490347360561,
              "median": 0.03508218119822047,
              "min": 0.00028468976419645744,
              "max": 1.3716475095785436,
              "p5": 0.0036409657461023022,
              "p95": 0.5115096833985253,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007378630126277346,
              "median": 0.00021524958028112956,
              "min": 0.0,
              "max": 2.831059257794476,
              "p5": 0.0,
              "p95": 0.009711780348739272,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0012868258883812394,
              "median": 1.6795132636201003e-07,
              "min": 0.0,
              "max": 0.4166666666666667,
              "p5": 0.0,
              "p95": 0.00013819789939192924,
              "count": 541
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 483.6254480286738,
              "median": 5.5,
              "min": 0.0,
              "max": 11380.0,
              "p5": 0.0,
              "p95": 2920.449999999997,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2807662074330818,
              "median": 0.3349822149982252,
              "min": 0.0,
              "max": 0.4660397259715721,
              "p5": 0.0,
              "p95": 0.458158087189521,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1828050.6875,
              "median": 7478.75,
              "min": 0.0,
              "max": 13967968.0,
              "p5": 0.0,
              "p95": 9252779.199999992,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15161972764216305,
              "median": 0.0225389590106089,
              "min": 0.001403225479155513,
              "max": 0.6666666666666666,
              "p5": 0.005476097739257843,
              "p95": 0.5797619047619046,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002207376809772346,
              "median": 8.604180000127051e-05,
              "min": 0.0,
              "max": 0.009172257732070813,
              "p5": 0.0,
              "p95": 0.008482828444170755,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.604561012547375e-07,
              "median": 1.2248777571998307e-07,
              "min": 0.0,
              "max": 2.012072434607639e-06,
              "p5": 3.6048836377019974e-10,
              "p95": 1.8181515051434132e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 447.375,
              "median": 6.0,
              "min": 0.0,
              "max": 3247.0,
              "p5": 0.0,
              "p95": 2206.0999999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 88020.3625,
              "median": 7478.75,
              "min": 0.0,
              "max": 496000.0,
              "p5": 0.0,
              "p95": 356580.7899999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 44.25,
              "median": 6.0,
              "min": 0.0,
              "max": 273.0,
              "p5": 0.0,
              "p95": 191.09999999999988,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3693779791577897,
              "median": 0.3608427354621778,
              "min": 0.0,
              "max": 0.7517476365510325,
              "p5": 0.0,
              "p95": 0.7421843514668178,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1541625088027273,
              "median": 0.023575630818673088,
              "min": 0.01304000336516217,
              "max": 0.6666666666666666,
              "p5": 0.014892134176356334,
              "p95": 0.5797619047619046,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.832424726174726,
              "median": 1.875,
              "min": 1.0,
              "max": 16.4,
              "p5": 1.1484407484407484,
              "p95": 11.896666666666658,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.522993496692029e-07,
              "median": 3.990258779851174e-07,
              "min": 0.0,
              "max": 2.012072434607639e-06,
              "p5": 1.0949861024363904e-08,
              "p95": 1.8181515051434132e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018188702864666633,
              "median": 8.604180000127051e-05,
              "min": 0.0,
              "max": 0.007202459766642081,
              "p5": 0.0,
              "p95": 0.006402789580200223,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -3.3306690738754696e-16,
            "market": 0.02596477547551812,
            "sector": -0.029371271274008737,
            "peers": -0.05315204644342364,
            "vs_market": -0.025964775475518453,
            "vs_sector": 0.029371271274008404,
            "vs_peers": 0.053152046443423306
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks strong on score, but the current book is less supportive because bid depth is much thinner than ask depth.",
        "market_comparison": "The stock fell 4.3% on the day while peers were flat, which matters because weaker tape can make thin buy-side support more visible."
      },
      "1w": {
        "liquidity": "Weekly tradability still reads strong relative to peers, pointing to accessible liquidity over the period.",
        "market_comparison": "The stock is down 4.3% over the week compared with a 0.7% drop for peers, which matters because weaker relative performance can test depth."
      },
      "2w": {
        "liquidity": "Two-week liquidity remains solid for its size, supporting the view that access has held up over this window.",
        "market_comparison": "Return -4.3% vs peers -2.0%."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong, with a liquidity score 19.7 points above the peer median, which keeps the name accessible relative to its group.",
        "market_comparison": "The stock was flat over the month while peers fell 5.3%, which matters because relative price resilience sits alongside stronger structural liquidity."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 48,
      "reporting_window_days": 48,
      "available_history_days": 48,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.3544386445988225,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "35.4%",
          "display_range": null,
          "display_text": "35.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
          "kind": "share_pct",
          "value_pct": 35.4,
          "plain_english": "Market explains about 35.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5673096016673316,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "56.7%",
          "display_range": null,
          "display_text": "56.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
          "kind": "share_pct",
          "value_pct": 56.7,
          "plain_english": "Sector explains about 56.7% of price moves in the current state."
        },
        "company_share": {
          "median": 0.078251753733846,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "7.8%",
          "display_range": null,
          "display_text": "7.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
          "kind": "share_pct",
          "value_pct": 7.8,
          "plain_english": "Company-specific explains about 7.8% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 2.2119849114448678,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.21",
          "display_range": null,
          "display_text": "2.21",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 2.21% stock move in the same direction in this state.",
          "value_num": 2.21
        },
        "beta_stock_lag": {
          "median": -0.3765236315151163,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.38",
          "display_range": null,
          "display_text": "-0.38",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
          "kind": "lag_beta",
          "value_num": -0.38
        },
        "beta_sector": {
          "median": -1.1437906179734822,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.14",
          "display_range": null,
          "display_text": "-1.14",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.14% stock move in the opposite direction in this state.",
          "value_num": -1.14
        },
        "beta_market_lag": {
          "median": -0.15821477045492693,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.16",
          "display_range": null,
          "display_text": "-0.16",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
          "kind": "lag_beta",
          "value_num": -0.16
        },
        "beta_sector_lag": {
          "median": 1.2400334429933342,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.24",
          "display_range": null,
          "display_text": "1.24",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
          "kind": "lag_beta",
          "value_num": 1.24
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 48 trading days relative to the 252-day target."
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
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5379214653603349,
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
              "median": 0.22982068067655406,
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
              "median": 0.5379214653603349,
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
          "period_label": "2026-04-01 to 2026-04-06",
          "n_obs": 3,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5610913167718892,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.1%",
            "display_range": null,
            "display_text": "56.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
            "kind": "share_pct",
            "value_pct": 56.1,
            "plain_english": "Sector explains about 56.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.36573044024822676,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.6%",
              "display_range": null,
              "display_text": "36.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 36.6,
              "plain_english": "Market explains about 36.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5610913167718892,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.1%",
              "display_range": null,
              "display_text": "56.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 56.1,
              "plain_english": "Sector explains about 56.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.07317824297988415,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.3%",
              "display_range": null,
              "display_text": "7.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 7.3,
              "plain_english": "Company-specific explains about 7.3% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly sector-driven, though based on only 3 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 5.75,
          "current_probability": 1.0,
          "n_days_effective": 23.0,
          "volatility": {
            "median": 0.029244889243610742,
            "low": 0.029244889243610742,
            "high": 0.029244889243610742
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 7.666666666666667,
          "current_probability": 0.0,
          "n_days_effective": 23.0,
          "volatility": {
            "median": 0.04274460038844288,
            "low": 0.04274460038844288,
            "high": 0.04274460038844288
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8636363636363636,
            0.13636363636363635
          ],
          [
            0.13043478260869565,
            0.8695652173913043
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            19.0,
            3.0
          ],
          [
            3.0,
            20.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 48,
        "reporting_window_days": 48,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "2.21",
        "sector_link_display": "-1.14",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.21% stock move in the same direction in this state. This is a point estimate from 48 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.14% stock move in the opposite direction in this state. This is a point estimate from 48 trading days.",
        "stock_persistence_display": "-0.38",
        "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
        "history_limited_note": "Read is based on 48 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 56.7,
        "driver_share_display": "56.7%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 48 trading days relative to the 252-day target.",
        "history_days": 48,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8636363636363636,
        "effective_days": 23.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.8 days.",
        "expected_duration_days": 5.8
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
          "expected_duration_days": 5.75,
          "current_probability": 1.0,
          "n_days_effective": 23.0,
          "volatility": {
            "median": 0.029244889243610742,
            "low": 0.029244889243610742,
            "high": 0.029244889243610742
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 7.666666666666667,
          "current_probability": 0.0,
          "n_days_effective": 23.0,
          "volatility": {
            "median": 0.04274460038844288,
            "low": 0.04274460038844288,
            "high": 0.04274460038844288
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8636363636363636,
          0.13636363636363635
        ],
        [
          0.13043478260869565,
          0.8695652173913043
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8636363636363636,
            0.13636363636363635
          ],
          [
            0.13043478260869565,
            0.8695652173913043
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            19.0,
            3.0
          ],
          [
            3.0,
            20.0
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
        "text": "Liquidity score: 71.1 — Strong",
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
    "liq_subtitle": "Liquidity screens well relative to peers, although current buy-side depth is light.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The stock was flat over 1M, ahead of weaker peers but behind a stronger market.",
    "perf_insight": "Price performance is holding up better than peers, with a 1M return of -0.0% compared with peers at -5.3%, but it still trails the market at +2.6%. That matters because relative resilience has not translated into a more supportive buy-side book.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the tape, with sector factors explaining 56.7% of trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 56.7% of price changes. Other influences are market 35.4%, and company-specific 7.8%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 35.4%, sector 56.7%, and company-specific 7.8%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 35.4%, sector 56.7%, and company-specific 7.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Sector direction is setting much of the tone, and the thin bid book means down moves can feel less well supported even with a 1-tick spread.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves are leading, accounting for 56.7% of recent price action.",
      "Monthly change: the stock was mostly sector in February and March, and is now more sector-driven in early April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look accessible at the monthly level, but the displayed book remains the key watchpoint on the buy side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Apr 6, 2026 (50 trading days • 9,994 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The book is skewed to the sell side, with top-10 bid depth at 0.34x of ask depth despite a 1-tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 12.7% of total trades.",
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
    "intraday_insight": "Top-10 bid depth is only 0.34x of ask depth while the spread is 1 tick. That matters because screen liquidity can look orderly, but downside execution may still feel thinner in the moment.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading is better explained by sector direction and book balance than by short activity.",
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
    "exec_subtitle": "Monthly liquidity looks strong for the stock’s size, but the live book is thinner on the bid side.",
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
        "value": "71.1/100",
        "sub": "Peer median 51.4 (+19.7 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$145.4K",
        "sub": "Peer median S$7.5K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.54%",
        "sub": "1.17 ticks; peers 2.36%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks strong relative to peers, with a 1M score of 71.1 compared with a peer median of 51.4. The monthly picture points to accessible trading for the stock’s size, but the displayed book is less supportive because top-10 bid depth is only 0.34x of ask depth despite a 1-tick spread. That matters because overall liquidity can screen well while downside execution still feels thinner in the moment.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.217",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.30%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.34x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.55% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-3.34% with 22.4% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-3.34% with 9.0% fill.",
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
        "value": "71",
        "suffix": "/100",
        "bar_pct": 71,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 162/558",
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
        "subtext": "2.54% • 1.17 ticks vs peers 2.36%",
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
        "value": "145.4K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$7.5K",
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
        "value": "56.7",
        "suffix": "sector",
        "bar_pct": 57,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 35.4% • Company 7.8%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a 1M liquidity score of 71.1 compared with a peer median of 51.4. That points to better baseline access than peers under normal conditions.",
      "The main execution caveat is the displayed book, where top-10 bid depth is only 0.34x of ask depth even with a 1-tick spread. That matters because immediate sell pressure may face thinner buy-side support than the monthly score implies.",
      "Price action is being driven mainly by the sector, which explains 56.7% of the tape, while the stock was flat over 1M compared with peers at -5.3% and the market at +2.6%. That matters because trading is moving with the group rather than being supported by stronger market-relative momentum."
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
      "overall": "1M liquidity is strong: score 71.1 vs peer median 51.4 (+19.7 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "1M score 71.1 vs peer median 51.4 (+19.7 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +19.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is -0.0%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -0.0% vs market 2.6%.",
        "vs_sector": "Better than sector: -0.0% vs sector -2.9%.",
        "vs_peers": "Better than peers: -0.0% vs peers -5.3%."
      },
      "adv": {
        "insight": "ADV is S$145.4K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$145.4K vs market S$8.9K.",
        "vs_sector": "Better than sector: S$145.4K vs sector S$7.5K.",
        "vs_peers": "Better than peers: S$145.4K vs peers S$7.5K."
      },
      "spread": {
        "insight": "Spread is 2.54%, better than market, but worse than sector, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 2.54% vs market 3.51%.",
        "vs_sector": "Worse than sector: 2.54% vs secto%.",
        "vs_peers": "In line with peers: 2.54% vs peers 2.36%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.11%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.11% vs market 0.02%.",
        "vs_sector": "Better than sector: 0.11% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.11% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 46.60%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 46.60% vs market 40.34%.",
        "vs_sector": "Worse than sector: 46.60% vs sector 33.50%.",
        "vs_peers": "Worse than peers: 46.60% vs peers 36.08%."
      },
      "trades": {
        "insight": "Trades is 46, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 46 vs market 6.",
        "vs_sector": "Better than sector: 46 vs sector 6.",
        "vs_peers": "Better than peers: 46 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 1.22e-07, better than market and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 1.22e-07 vs market 1.68e-07.",
        "vs_sector": "In line with sector: 1.22e-07 vs sector 1.22e-07.",
        "vs_peers": "Better than peers: 1.22e-07 vs peers 3.99e-07."
      }
    },
    "performance": {
      "overall": "Performance is mixed relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "conclusion": "The move looks mixed but mainly sector-linked, with solid underlying liquidity offset by thin buy-side support."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock right now, accounting for 56.7% of recent price action. That matters because the tape is being shaped more by broader group moves than by stock-specific news, which can make trading conditions feel more tied to sector sentiment.",
      "beta": "Based on the last 5 trading days, current mix is market 35.4%, sector 56.7%, and company-specific 7.8%.",
      "rolling_change": "Feb: mostly sector. | Mar: mostly sector. | Apr: Mostly sector-driven, though based on only 3 trading days."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "Low volatility is in place now, pointing to a quieter trading backdrop. That calmer setting fits with a 1 tick spread, even though the order book is still unbalanced with top-10 bid depth at 0.34x of ask depth.",
      "transitions": "This state looks fairly settled rather than fleeting, with a typical run length of about 5.8 days. The read is still mixed, so the backdrop looks stable but not deeply entrenched.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 5.8 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks thin buy-side, because top-10 bid depth is only 0.34x ask depth while the spread remains 1 tick. That means the quote looks orderly at the touch, but visible support below the market is materially lighter than supply on the ask side.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with bids at just 0.34x of asks. That leaves downside execution more exposed if selling pressure picks up, even though the spread itself is not wide.",
      "peer_context": "This book does not fully match the stronger monthly liquidity picture, because the 1M liquidity score of 71.1 sits 19.7 points above the peer median of 51.4 while the live depth is still skewed to the sell side. Trade-size context is based on 50 trading days and 9,994 trades, so the broader read is stronger than the precision of any size-based interpretation."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Retail is active by count but not by value, so the mix does not read as mixed. Retail-like trades are 29.3% of count but only 6.8% of value, while institution-like trades take 51.0% of value.",
      "institutional_gap": "The institutional read is directionally clear, but it is not fully clean because 21.2% of trade count is ambiguous or unclear. That leaves some uncertainty around how consistent the mix is day to day.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "Price-moving trades account for 12.7% of total trades, so most activity is not aggressively shifting the price. That points to a market that is trading rather than lurching. The signal is mixed rather than fully clean because 21.2% of trade count is ambiguous or unclear. That matters because the price-moving read may be treated as directional, not definitive. The balance between positive and negative price-moving trades is available in the report tables.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears modest, with a 1M average short ratio of 0.66%, so it does not look like the main force shaping trading conditions. That matters because the stock’s flat 1M return, compared with peers down 5.3% and the market up 2.6%, points more to broader market positioning than to heavy short pressure.",
      "level": "Low short interest",
      "correlation": "",
      "trend": "Short positioning has fallen sharply, with shorts covering significantly month on month, which further reduces the case for short selling as a current driver. The broader picture is still mixed, but this trend does not suggest an added source of pressure in the market.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, with 97.9% of trading there and only 0.9% at both the open and close. That makes the day look more usable outside the auction windows.",
      "hhi_interpretation": "Ambiguous or unclear flow is 21.2% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest source of liquidity because it carries 97.9% of activity. That matters more than the open or close for judging when access is most reliable.",
      "peer_ranking": "The peer comparison in the report shows how this intraday concentration ranks relative to comparable names. That matters because a similar session profile can still be stronger or weaker than peers."
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
        "NXR",
        "LVR",
        "U77",
        "532",
        "KUX",
        "S69",
        "S71"
      ],
      "scores": [
        71.14695340501792,
        82.07885304659499,
        33.87096774193548,
        52.867383512544805,
        50.0,
        3.225806451612903,
        8.781362007168457,
        69.35483870967742,
        68.99641577060932
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
        145406.0,
        496000.0,
        74.0,
        9157.5,
        5800.0,
        0.0,
        0.0,
        97659.4,
        95472.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.4660397259715721,
        "adv": 145406.0,
        "spread_pct": 0.025405786873676804,
        "turnover_ratio": 0.0011086535645338392,
        "amihud": 1.2248777571998307e-07,
        "trades": 46.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6472370493162689,
          "median": 0.4034013159639276,
          "min": 0.0,
          "max": 10.33172044141643,
          "p5": 0.0,
          "p95": 2.002191103403035,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3308777.8979608407,
          "median": 8932.5,
          "min": 0.0,
          "max": 270730200.0,
          "p5": 0.0,
          "p95": 13765455.499999994,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.11050490347360561,
          "median": 0.03508218119822047,
          "min": 0.00028468976419645744,
          "max": 1.3716475095785436,
          "p5": 0.0036409657461023022,
          "p95": 0.5115096833985253,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.007378630126277346,
          "median": 0.00021524958028112956,
          "min": 0.0,
          "max": 2.831059257794476,
          "p5": 0.0,
          "p95": 0.009711780348739272,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.0012868258883812394,
          "median": 1.6795132636201003e-07,
          "min": 0.0,
          "max": 0.4166666666666667,
          "p5": 0.0,
          "p95": 0.00013819789939192924,
          "count": 541
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 483.6254480286738,
          "median": 5.5,
          "min": 0.0,
          "max": 11380.0,
          "p5": 0.0,
          "p95": 2920.449999999997,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.2807662074330818,
          "median": 0.3349822149982252,
          "min": 0.0,
          "max": 0.4660397259715721,
          "p5": 0.0,
          "p95": 0.458158087189521,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1828050.6875,
          "median": 7478.75,
          "min": 0.0,
          "max": 13967968.0,
          "p5": 0.0,
          "p95": 9252779.199999992,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15161972764216305,
          "median": 0.0225389590106089,
          "min": 0.001403225479155513,
          "max": 0.6666666666666666,
          "p5": 0.005476097739257843,
          "p95": 0.5797619047619046,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002207376809772346,
          "median": 8.604180000127051e-05,
          "min": 0.0,
          "max": 0.009172257732070813,
          "p5": 0.0,
          "p95": 0.008482828444170755,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.604561012547375e-07,
          "median": 1.2248777571998307e-07,
          "min": 0.0,
          "max": 2.012072434607639e-06,
          "p5": 3.6048836377019974e-10,
          "p95": 1.8181515051434132e-06,
          "count": 7
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 447.375,
          "median": 6.0,
          "min": 0.0,
          "max": 3247.0,
          "p5": 0.0,
          "p95": 2206.0999999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 88020.3625,
          "median": 7478.75,
          "min": 0.0,
          "max": 496000.0,
          "p5": 0.0,
          "p95": 356580.7899999998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 44.25,
          "median": 6.0,
          "min": 0.0,
          "max": 273.0,
          "p5": 0.0,
          "p95": 191.09999999999988,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3693779791577897,
          "median": 0.3608427354621778,
          "min": 0.0,
          "max": 0.7517476365510325,
          "p5": 0.0,
          "p95": 0.7421843514668178,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1541625088027273,
          "median": 0.023575630818673088,
          "min": 0.01304000336516217,
          "max": 0.6666666666666666,
          "p5": 0.014892134176356334,
          "p95": 0.5797619047619046,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.832424726174726,
          "median": 1.875,
          "min": 1.0,
          "max": 16.4,
          "p5": 1.1484407484407484,
          "p95": 11.896666666666658,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.522993496692029e-07,
          "median": 3.990258779851174e-07,
          "min": 0.0,
          "max": 2.012072434607639e-06,
          "p5": 1.0949861024363904e-08,
          "p95": 1.8181515051434132e-06,
          "count": 7
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0018188702864666633,
          "median": 8.604180000127051e-05,
          "min": 0.0,
          "max": 0.007202459766642081,
          "p5": 0.0,
          "p95": 0.006402789580200223,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.04347826086956541,
        "market": 0.015152510503691596,
        "sector": 0.005050505050505194,
        "peers": -0.0067656292656290695
      },
      {
        "horizon": "2W",
        "stock": -0.04347826086956541,
        "market": 0.004754577226533385,
        "sector": 0.009463859573717981,
        "peers": -0.02012528788853518
      },
      {
        "horizon": "1M",
        "stock": -3.3306690738754696e-16,
        "market": 0.02596477547551812,
        "sector": -0.029371271274008737,
        "peers": -0.05315204644342364
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
      "share_market": 0.3544386445988225,
      "share_sector": 0.5673096016673316,
      "share_idio": 0.078251753733846,
      "beta_market": 2.2119849114448678,
      "beta_sector": -1.1437906179734822,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 48,
        "reporting_window_days": 48,
        "available_history_days": 48,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.3544386445988225,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "35.4%",
            "display_range": null,
            "display_text": "35.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
            "kind": "share_pct",
            "value_pct": 35.4,
            "plain_english": "Market explains about 35.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5673096016673316,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.7%",
            "display_range": null,
            "display_text": "56.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
            "kind": "share_pct",
            "value_pct": 56.7,
            "plain_english": "Sector explains about 56.7% of price moves in the current state."
          },
          "company_share": {
            "median": 0.078251753733846,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "7.8%",
            "display_range": null,
            "display_text": "7.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
            "kind": "share_pct",
            "value_pct": 7.8,
            "plain_english": "Company-specific explains about 7.8% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 2.2119849114448678,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.21",
            "display_range": null,
            "display_text": "2.21",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 2.21% stock move in the same direction in this state.",
            "value_num": 2.21
          },
          "beta_stock_lag": {
            "median": -0.3765236315151163,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.38",
            "display_range": null,
            "display_text": "-0.38",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
            "kind": "lag_beta",
            "value_num": -0.38
          },
          "beta_sector": {
            "median": -1.1437906179734822,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.14",
            "display_range": null,
            "display_text": "-1.14",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.14% stock move in the opposite direction in this state.",
            "value_num": -1.14
          },
          "beta_market_lag": {
            "median": -0.15821477045492693,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.16",
            "display_range": null,
            "display_text": "-0.16",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
            "kind": "lag_beta",
            "value_num": -0.16
          },
          "beta_sector_lag": {
            "median": 1.2400334429933342,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.24",
            "display_range": null,
            "display_text": "1.24",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
            "kind": "lag_beta",
            "value_num": 1.24
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 48 trading days relative to the 252-day target."
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
            "period_label": "2026-03-02 to 2026-03-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5379214653603349,
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
                "median": 0.22982068067655406,
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
                "median": 0.5379214653603349,
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
            "period_label": "2026-04-01 to 2026-04-06",
            "n_obs": 3,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5610913167718892,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.1%",
              "display_range": null,
              "display_text": "56.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 56.1,
              "plain_english": "Sector explains about 56.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.36573044024822676,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.6%",
                "display_range": null,
                "display_text": "36.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 36.6,
                "plain_english": "Market explains about 36.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5610913167718892,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.1%",
                "display_range": null,
                "display_text": "56.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 56.1,
                "plain_english": "Sector explains about 56.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.07317824297988415,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.3%",
                "display_range": null,
                "display_text": "7.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 7.3,
                "plain_english": "Company-specific explains about 7.3% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly sector-driven, though based on only 3 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 5.75,
            "current_probability": 1.0,
            "n_days_effective": 23.0,
            "volatility": {
              "median": 0.029244889243610742,
              "low": 0.029244889243610742,
              "high": 0.029244889243610742
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 7.666666666666667,
            "current_probability": 0.0,
            "n_days_effective": 23.0,
            "volatility": {
              "median": 0.04274460038844288,
              "low": 0.04274460038844288,
              "high": 0.04274460038844288
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8636363636363636,
              0.13636363636363635
            ],
            [
              0.13043478260869565,
              0.8695652173913043
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              19.0,
              3.0
            ],
            [
              3.0,
              20.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 48,
          "reporting_window_days": 48,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "2.21",
          "sector_link_display": "-1.14",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.21% stock move in the same direction in this state. This is a point estimate from 48 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.14% stock move in the opposite direction in this state. This is a point estimate from 48 trading days.",
          "stock_persistence_display": "-0.38",
          "point_estimate_note": "Point estimate only because the current state has 48 trading days.",
          "history_limited_note": "Read is based on 48 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 56.7,
          "driver_share_display": "56.7%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 48 trading days relative to the 252-day target.",
          "history_days": 48,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8636363636363636,
          "effective_days": 23.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.8 days.",
          "expected_duration_days": 5.8
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
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Mar: Mostly company-driven.",
          "share_market": 0.22982068067655406,
          "share_sector": 0.23225785396311108,
          "share_company": 0.5379214653603349,
          "share_market_display": "23.0%",
          "share_sector_display": "23.2%",
          "share_company_display": "53.8%",
          "dominant_share_display": "53.8%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-06",
          "n_obs": 3,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven, though based on only 3 trading days.",
          "share_market": 0.36573044024822676,
          "share_sector": 0.5610913167718892,
          "share_company": 0.07317824297988415,
          "share_market_display": "36.6%",
          "share_sector_display": "56.1%",
          "share_company_display": "7.3%",
          "dominant_share_display": "56.1%"
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
          0.5,
          0.5
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 5.75,
            "current_probability": 1.0,
            "n_days_effective": 23.0,
            "volatility": {
              "median": 0.029244889243610742,
              "low": 0.029244889243610742,
              "high": 0.029244889243610742
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 7.666666666666667,
            "current_probability": 0.0,
            "n_days_effective": 23.0,
            "volatility": {
              "median": 0.04274460038844288,
              "low": 0.04274460038844288,
              "high": 0.04274460038844288
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8636363636363636,
            0.13636363636363635
          ],
          [
            0.13043478260869565,
            0.8695652173913043
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.215,
          "quantity": 386300.0,
          "value": 83054.5
        },
        {
          "level": 2,
          "price": 0.21,
          "quantity": 487800.0,
          "value": 102438.0
        },
        {
          "level": 3,
          "price": 0.205,
          "quantity": 50000.0,
          "value": 10250.0
        },
        {
          "level": 4,
          "price": 0.2,
          "quantity": 131000.0,
          "value": 26200.0
        },
        {
          "level": 5,
          "price": 0.199,
          "quantity": 10000.0,
          "value": 1990.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.22,
          "quantity": 898700.0,
          "value": 197714.0
        },
        {
          "level": 2,
          "price": 0.225,
          "quantity": 171000.0,
          "value": 38475.0
        },
        {
          "level": 3,
          "price": 0.23,
          "quantity": 173000.0,
          "value": 39790.0
        },
        {
          "level": 4,
          "price": 0.235,
          "quantity": 218200.0,
          "value": 51277.0
        },
        {
          "level": 5,
          "price": 0.24,
          "quantity": 140700.0,
          "value": 33768.0
        },
        {
          "level": 6,
          "price": 0.245,
          "quantity": 80000.0,
          "value": 19600.0
        },
        {
          "level": 7,
          "price": 0.25,
          "quantity": 185000.0,
          "value": 46250.0
        },
        {
          "level": 8,
          "price": 0.255,
          "quantity": 300000.0,
          "value": 76500.0
        },
        {
          "level": 9,
          "price": 0.26,
          "quantity": 339500.0,
          "value": 88270.0
        },
        {
          "level": 10,
          "price": 0.265,
          "quantity": 220500.0,
          "value": 58432.5
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-06 08:59:57.171900",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2175,
        "spread_pct": 0.022988505747126457,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 223932.5,
        "ask_depth_notional_top10": 650076.5,
        "bid_ask_depth_ratio": 0.3445
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 75,
        "history_limited": true,
        "trade_days_used": 50,
        "n_trades_used": 9994,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-04-06",
        "window_label": "Jan 22, 2026 to Apr 6, 2026",
        "window_short_label": "Jan 22-Apr 6",
        "trade_days_label": "50 trading days",
        "trade_count_label": "9,994 trades",
        "window_detail_label": "50 trading days • 9,994 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Apr 6, 2026 (50 trading days • 9,994 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9632.7,
            "impact_pct": -0.011493999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 4.3,
            "pct_of_adv": 6.7
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13636.48,
            "impact_pct": -0.011493999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 6.09,
            "pct_of_adv": 9.48
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 103982.94,
            "impact_pct": -0.016209,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 46.43,
            "pct_of_adv": 72.32
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-06",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8133448150474834944",
            "timestamp": "2026-04-06 09:00:32.023100000",
            "local_timestamp": "2026-04-06 17:00:32",
            "posted_price": 0.22,
            "size_shares": 860700.0,
            "notional": 189354.0,
            "impact_pct": -0.025022000000000003,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 84.56,
            "price_vs_mid_pct": 1.149,
            "executed_event_count": 0,
            "event_count": 4
          },
          {
            "rank": 2,
            "order_id": "8133448150474809344",
            "timestamp": "2026-04-06 08:59:17.086600000",
            "local_timestamp": "2026-04-06 16:59:17",
            "posted_price": 0.22,
            "size_shares": 653100.0,
            "notional": 143682.0,
            "impact_pct": -0.021327,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 64.16,
            "price_vs_mid_pct": 1.149,
            "executed_event_count": 0,
            "event_count": 3
          },
          {
            "rank": 3,
            "order_id": "8133448150474782720",
            "timestamp": "2026-04-06 08:54:24.845800000",
            "local_timestamp": "2026-04-06 16:54:24",
            "posted_price": 0.225,
            "size_shares": 191900.0,
            "notional": 43177.5,
            "impact_pct": -0.011493999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 19.28,
            "price_vs_mid_pct": 3.448,
            "executed_event_count": 0,
            "event_count": 6
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-06",
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
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 222112.0,
            "ask_depth_notional": 475055.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 222112.0,
            "ask_depth_notional": 467603.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 233609.5,
            "ask_depth_notional": 457640.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 252234.5,
            "ask_depth_notional": 463515.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 193680.0,
            "ask_depth_notional": 456668.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 193680.0,
            "ask_depth_notional": 451695.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 256083.0,
            "ask_depth_notional": 478180.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 244759.0,
            "ask_depth_notional": 484518.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 244297.0,
            "ask_depth_notional": 477756.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0454545454545455,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 226772.0,
            "ask_depth_notional": 484656.5,
            "mid_price": 0.22
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0454545454545455,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 235347.0,
            "ask_depth_notional": 484656.5,
            "mid_price": 0.22
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0454545454545455,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 241912.0,
            "ask_depth_notional": 547206.5,
            "mid_price": 0.22
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.0454545454545455,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 241159.5,
            "ask_depth_notional": 551256.5,
            "mid_price": 0.22
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.022988505747126457,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 223932.5,
            "ask_depth_notional": 650076.5,
            "mid_price": 0.2175
          }
        ],
        "summary": {
          "median_spread_pct": 0.02247191011235957,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 234478.25,
          "median_ask_depth_notional": 477968.25,
          "tightest_bucket": "09:00",
          "widest_bucket": "14:30",
          "deepest_bid_bucket": "13:00",
          "thinnest_bid_bucket": "11:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 34.8,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 198.7
        },
        {
          "ticker": "S69",
          "pct": 1014.5
        },
        {
          "ticker": "S71",
          "pct": 1020.6
        },
        {
          "ticker": "LVR",
          "pct": 11060.4
        },
        {
          "ticker": "U77",
          "pct": 13742.4
        },
        {
          "ticker": "NXR",
          "pct": 55187.6
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
          "n_trades": 93,
          "n_runs": 55,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-06",
          "last_trade_date": "2026-04-06",
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
            "retail_pct": 0.43010752688172044,
            "mixed_pct": 0.0,
            "instit_pct": 0.46236559139784944,
            "ambiguous_pct": 0.10752688172043011,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10752688172043011,
            "retail_qty_pct": 0.05544635544635545,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7742833742833742,
            "ambiguous_qty_pct": 0.17027027027027028,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17027027027027028,
            "retail_notional_pct": 0.05669448208814518,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7737689282347395,
            "ambiguous_notional_pct": 0.16953658967711524,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.16953658967711524
          },
          "run_composition": {
            "retail_pct": 0.7272727272727273,
            "mixed_pct": 0.0,
            "instit_pct": 0.14545454545454545,
            "ambiguous_pct": 0.12727272727272726,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12727272727272726,
            "retail_notional_pct": 0.05669448208814518,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7737689282347395,
            "unclear_notional_pct": 0.16953658967711524
          },
          "counts": {
            "trades": {
              "retail": 40,
              "mixed": 0,
              "institutional": 43,
              "ambiguous": 10,
              "unobservable": 0,
              "unclear": 10
            },
            "runs": {
              "retail": 40,
              "mixed": 0,
              "institutional": 8,
              "ambiguous": 7,
              "unobservable": 0,
              "unclear": 7
            }
          },
          "confidence": {
            "high": 0.4,
            "medium": 0.45454545454545453,
            "low": 0.01818181818181818,
            "na": 0.12727272727272726
          },
          "confidence_counts": {
            "high": 22,
            "medium": 25,
            "low": 1,
            "na": 7
          },
          "trade_confidence": {
            "high": 0.3548387096774194,
            "medium": 0.5268817204301075,
            "low": 0.010752688172043012,
            "na": 0.10752688172043011
          },
          "trade_confidence_counts": {
            "high": 33,
            "medium": 49,
            "low": 1,
            "na": 10
          },
          "observability": {
            "avg_feature_coverage": 0.833636363636364,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.12727272727272726,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.7272727272727273,
          "dominance_gap": 0.5818181818181818,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 48,
              "MULTI_FILL_SINGLE_PRICE": 45
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 67,
              "PERSISTENT_POSITIVE_IMPACT": 26
            },
            "d3_urgency": {
              "IMMEDIATE": 55
            },
            "participant_confidence": {
              "MEDIUM": 25,
              "HIGH": 22,
              "NA": 7,
              "LOW": 1
            }
          },
          "trade_size": {
            "avg": 2919.9139784946237,
            "median": 660.0
          },
          "run_size": {
            "avg": 4937.309090909091,
            "median": 414.0,
            "avg_length": 1.0
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-93",
              "timestamp": "2026-04-06T08:58:17.963100",
              "price": 0.22,
              "size": 2000.0,
              "notional": 440.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1300,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-92",
              "timestamp": "2026-04-06T08:53:45.652500",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1299,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-91",
              "timestamp": "2026-04-06T08:22:42.863500",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1298,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-90",
              "timestamp": "2026-04-06T08:12:45.673200",
              "price": 0.22,
              "size": 800.0,
              "notional": 176.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1297,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-04-06T08:12:33.153800",
              "price": 0.22,
              "size": 700.0,
              "notional": 154.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1296,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-04-06T07:45:13.423400",
              "price": 0.22,
              "size": 19100.0,
              "notional": 4202.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1295,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-04-06T07:43:46.265400",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1294,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-04-06T07:39:17.185500",
              "price": 0.22,
              "size": 15000.0,
              "notional": 3300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1293,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 18000.0,
              "notional": 3960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 35200.0,
              "notional": 7744.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-04-06T06:46:52.386600",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-04-06T06:46:16.368700",
              "price": 0.22,
              "size": 2200.0,
              "notional": 484.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1291,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-04-06T06:45:46.366600",
              "price": 0.22,
              "size": 3000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1290,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-04-06T06:45:06.341700",
              "price": 0.22,
              "size": 3000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1289,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-04-06T06:44:24.297300",
              "price": 0.22,
              "size": 2400.0,
              "notional": 528.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1288,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-04-06T06:43:49.276500",
              "price": 0.22,
              "size": 1400.0,
              "notional": 308.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1287,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-04-06T06:43:28.263900",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1286,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 54000.0,
              "notional": 11880.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 24000.0,
              "notional": 5280.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 1000.0,
              "notional": 220.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 1000.0,
              "notional": 220.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 15100.0,
              "notional": 3322.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 31000.0,
              "notional": 6820.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 5000.0,
              "notional": 1100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.43010752688172044,
              "mixed_pct": 0.0,
              "instit_pct": 0.46236559139784944,
              "ambiguous_pct": 0.10752688172043011,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.10752688172043011,
              "retail_qty_pct": 0.05544635544635545,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7742833742833742,
              "ambiguous_qty_pct": 0.17027027027027028,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.17027027027027028,
              "retail_notional_pct": 0.05669448208814518,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7737689282347395,
              "ambiguous_notional_pct": 0.16953658967711524,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.16953658967711524,
              "run_retail_pct": 0.7272727272727273,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.14545454545454545,
              "run_unclear_pct": 0.12727272727272726,
              "avg_trade_size": 2919.9139784946237,
              "avg_run_notional": 4937.309090909091,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4,
              "medium_confidence_pct": 0.45454545454545453,
              "low_confidence_pct": 0.01818181818181818,
              "na_confidence_pct": 0.12727272727272726,
              "avg_feature_coverage": 0.833636363636364,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.16666666666666666,
              "mixed_pct": 0.0,
              "instit_pct": 0.4166666666666667,
              "ambiguous_pct": 0.4166666666666667,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4166666666666667,
              "retail_qty_pct": 0.00904977375565611,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8371040723981901,
              "ambiguous_qty_pct": 0.15384615384615385,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.15384615384615385,
              "retail_notional_pct": 0.008943218500291051,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.836640736624861,
              "ambiguous_notional_pct": 0.15441604487484786,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.15441604487484786,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.25,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 787.375,
              "avg_run_notional": 1181.0625,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.83125,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3333333333333333,
              "mixed_pct": 0.047619047619047616,
              "instit_pct": 0.2857142857142857,
              "ambiguous_pct": 0.3333333333333333,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3333333333333333,
              "retail_qty_pct": 0.13441700531416068,
              "mixed_qty_pct": 0.025633010315723664,
              "instit_qty_pct": 0.45451703657392933,
              "ambiguous_qty_pct": 0.3854329477961863,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3854329477961863,
              "retail_notional_pct": 0.13393916940205347,
              "mixed_notional_pct": 0.02554233812448822,
              "instit_notional_pct": 0.4564489448210928,
              "ambiguous_notional_pct": 0.38406954765236556,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.38406954765236556,
              "run_retail_pct": 0.4375,
              "run_mixed_pct": 0.0625,
              "run_instit_pct": 0.1875,
              "run_unclear_pct": 0.3125,
              "avg_trade_size": 2017.9380952380955,
              "avg_run_notional": 2648.5437500000003,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.625,
              "na_confidence_pct": 0.375,
              "avg_feature_coverage": 0.8125,
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
              "retail_pct": 0.2127659574468085,
              "mixed_pct": 0.0425531914893617,
              "instit_pct": 0.11702127659574468,
              "ambiguous_pct": 0.6276595744680851,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.6276595744680851,
              "retail_qty_pct": 0.022727272727272728,
              "mixed_qty_pct": 0.005681818181818182,
              "instit_qty_pct": 0.20941558441558442,
              "ambiguous_qty_pct": 0.7621753246753247,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.7621753246753247,
              "retail_notional_pct": 0.02271938532561762,
              "mixed_notional_pct": 0.005706076527606273,
              "instit_notional_pct": 0.21022089860616772,
              "ambiguous_notional_pct": 0.7613536395406084,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.7613536395406084,
              "run_retail_pct": 0.5128205128205128,
              "run_mixed_pct": 0.05128205128205128,
              "run_instit_pct": 0.10256410256410256,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 1318.1170212765958,
              "avg_run_notional": 3177.0,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.48717948717948717,
              "low_confidence_pct": 0.1282051282051282,
              "na_confidence_pct": 0.38461538461538464,
              "avg_feature_coverage": 0.8500000000000002,
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
              "retail_pct": 0.2,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.4,
              "unobservable_pct": 0.4,
              "unclear_pct": 0.8,
              "retail_qty_pct": 0.01282051282051282,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.6666666666666666,
              "unobservable_qty_pct": 0.32051282051282054,
              "unclear_qty_pct": 0.9871794871794872,
              "retail_notional_pct": 0.01265989713833575,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.6583146511934591,
              "unobservable_notional_pct": 0.32902545166820524,
              "unclear_notional_pct": 0.9873401028616644,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.75,
              "avg_trade_size": 606.64,
              "avg_run_notional": 758.3,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.25,
              "na_confidence_pct": 0.75,
              "avg_feature_coverage": 0.7500000000000001,
              "observable_run_pct": 0.75,
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
          "n_trades": 250,
          "n_runs": 129,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-30",
          "last_trade_date": "2026-04-06",
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
            "retail_pct": 0.324,
            "mixed_pct": 0.04,
            "instit_pct": 0.464,
            "ambiguous_pct": 0.172,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.172,
            "retail_qty_pct": 0.08444960409596952,
            "mixed_qty_pct": 0.0658748586057034,
            "instit_qty_pct": 0.6337143537536465,
            "ambiguous_qty_pct": 0.2159611835446806,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2159611835446806,
            "retail_notional_pct": 0.08488726667898724,
            "mixed_notional_pct": 0.06599321487974233,
            "instit_notional_pct": 0.6327283047759854,
            "ambiguous_notional_pct": 0.216391213665285,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.216391213665285
          },
          "run_composition": {
            "retail_pct": 0.5658914728682171,
            "mixed_pct": 0.046511627906976744,
            "instit_pct": 0.20155038759689922,
            "ambiguous_pct": 0.18604651162790697,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18604651162790697,
            "retail_notional_pct": 0.08488726667898724,
            "mixed_notional_pct": 0.06599321487974233,
            "instit_notional_pct": 0.6327283047759854,
            "unclear_notional_pct": 0.216391213665285
          },
          "counts": {
            "trades": {
              "retail": 81,
              "mixed": 10,
              "institutional": 116,
              "ambiguous": 43,
              "unobservable": 0,
              "unclear": 43
            },
            "runs": {
              "retail": 73,
              "mixed": 6,
              "institutional": 26,
              "ambiguous": 24,
              "unobservable": 0,
              "unclear": 24
            }
          },
          "confidence": {
            "high": 0.17054263565891473,
            "medium": 0.1937984496124031,
            "low": 0.40310077519379844,
            "na": 0.23255813953488372
          },
          "confidence_counts": {
            "high": 22,
            "medium": 25,
            "low": 52,
            "na": 30
          },
          "trade_confidence": {
            "high": 0.132,
            "medium": 0.196,
            "low": 0.46,
            "na": 0.212
          },
          "trade_confidence_counts": {
            "high": 33,
            "medium": 49,
            "low": 115,
            "na": 53
          },
          "observability": {
            "avg_feature_coverage": 0.8511627906976744,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.18604651162790697,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5658914728682171,
          "dominance_gap": 0.3643410852713178,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 143,
              "SINGLE_FILL": 107
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 187,
              "PERSISTENT_POSITIVE_IMPACT": 60,
              "MOMENTUM_REACTIVE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 129
            },
            "participant_confidence": {
              "LOW": 52,
              "NA": 30,
              "MEDIUM": 25,
              "HIGH": 22
            }
          },
          "trade_size": {
            "avg": 3030.16,
            "median": 2127.25
          },
          "run_size": {
            "avg": 5872.403100775194,
            "median": 2092.5,
            "avg_length": 1.124031007751938
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-93",
              "timestamp": "2026-04-06T08:58:17.963100",
              "price": 0.22,
              "size": 2000.0,
              "notional": 440.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1300,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-92",
              "timestamp": "2026-04-06T08:53:45.652500",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1299,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-91",
              "timestamp": "2026-04-06T08:22:42.863500",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1298,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-90",
              "timestamp": "2026-04-06T08:12:45.673200",
              "price": 0.22,
              "size": 800.0,
              "notional": 176.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1297,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-04-06T08:12:33.153800",
              "price": 0.22,
              "size": 700.0,
              "notional": 154.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1296,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-04-06T07:45:13.423400",
              "price": 0.22,
              "size": 19100.0,
              "notional": 4202.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1295,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-04-06T07:43:46.265400",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1294,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-04-06T07:39:17.185500",
              "price": 0.22,
              "size": 15000.0,
              "notional": 3300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1293,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 18000.0,
              "notional": 3960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 35200.0,
              "notional": 7744.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-04-06T06:46:52.386600",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-04-06T06:46:16.368700",
              "price": 0.22,
              "size": 2200.0,
              "notional": 484.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1291,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-04-06T06:45:46.366600",
              "price": 0.22,
              "size": 3000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1290,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-04-06T06:45:06.341700",
              "price": 0.22,
              "size": 3000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1289,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-04-06T06:44:24.297300",
              "price": 0.22,
              "size": 2400.0,
              "notional": 528.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1288,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-04-06T06:43:49.276500",
              "price": 0.22,
              "size": 1400.0,
              "notional": 308.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1287,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-04-06T06:43:28.263900",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1286,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 54000.0,
              "notional": 11880.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 24000.0,
              "notional": 5280.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 1000.0,
              "notional": 220.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 1000.0,
              "notional": 220.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 15100.0,
              "notional": 3322.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 31000.0,
              "notional": 6820.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 5000.0,
              "notional": 1100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.324,
              "mixed_pct": 0.04,
              "instit_pct": 0.464,
              "ambiguous_pct": 0.172,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.172,
              "retail_qty_pct": 0.08444960409596952,
              "mixed_qty_pct": 0.0658748586057034,
              "instit_qty_pct": 0.6337143537536465,
              "ambiguous_qty_pct": 0.2159611835446806,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2159611835446806,
              "retail_notional_pct": 0.08488726667898724,
              "mixed_notional_pct": 0.06599321487974233,
              "instit_notional_pct": 0.6327283047759854,
              "ambiguous_notional_pct": 0.216391213665285,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.216391213665285,
              "run_retail_pct": 0.5658914728682171,
              "run_mixed_pct": 0.046511627906976744,
              "run_instit_pct": 0.20155038759689922,
              "run_unclear_pct": 0.18604651162790697,
              "avg_trade_size": 3030.16,
              "avg_run_notional": 5872.403100775194,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.17054263565891473,
              "medium_confidence_pct": 0.1937984496124031,
              "low_confidence_pct": 0.40310077519379844,
              "na_confidence_pct": 0.23255813953488372,
              "avg_feature_coverage": 0.8511627906976744,
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
              "instit_pct": 1.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 1.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 1.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 1.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 4893.333333333333,
              "avg_run_notional": 7340.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 1.0,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2191780821917808,
              "mixed_pct": 0.0136986301369863,
              "instit_pct": 0.3424657534246575,
              "ambiguous_pct": 0.4246575342465753,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4246575342465753,
              "retail_qty_pct": 0.0332027606789778,
              "mixed_qty_pct": 0.003171050177205745,
              "instit_qty_pct": 0.5719082260772244,
              "ambiguous_qty_pct": 0.39171796306659207,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.39171796306659207,
              "retail_notional_pct": 0.03298220870612779,
              "mixed_notional_pct": 0.0030684052897460277,
              "instit_notional_pct": 0.5667713954108242,
              "ambiguous_notional_pct": 0.397177990593302,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.397177990593302,
              "run_retail_pct": 0.3018867924528302,
              "run_mixed_pct": 0.018867924528301886,
              "run_instit_pct": 0.22641509433962265,
              "run_unclear_pct": 0.4528301886792453,
              "avg_trade_size": 3263.486301369863,
              "avg_run_notional": 4494.990566037736,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5283018867924528,
              "na_confidence_pct": 0.4716981132075472,
              "avg_feature_coverage": 0.8160377358490567,
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
              "retail_pct": 0.32050333086602517,
              "mixed_pct": 0.22057735011102886,
              "instit_pct": 0.2842339008142117,
              "ambiguous_pct": 0.17468541820873426,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.17468541820873426,
              "retail_qty_pct": 0.07487765089722676,
              "mixed_qty_pct": 0.14755301794453507,
              "instit_qty_pct": 0.5279771615008156,
              "ambiguous_qty_pct": 0.2495921696574225,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2495921696574225,
              "retail_notional_pct": 0.07486025026552963,
              "mixed_notional_pct": 0.14754490378274437,
              "instit_notional_pct": 0.5277923753448803,
              "ambiguous_notional_pct": 0.24980247060684563,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24980247060684563,
              "run_retail_pct": 0.6310240963855421,
              "run_mixed_pct": 0.17319277108433734,
              "run_instit_pct": 0.09337349397590361,
              "run_unclear_pct": 0.10240963855421686,
              "avg_trade_size": 900.7457438934123,
              "avg_run_notional": 1832.692018072289,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.11897590361445783,
              "medium_confidence_pct": 0.4367469879518072,
              "low_confidence_pct": 0.1686746987951807,
              "na_confidence_pct": 0.2756024096385542,
              "avg_feature_coverage": 0.875602409638554,
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
              "retail_pct": 0.15789473684210525,
              "mixed_pct": 0.0,
              "instit_pct": 0.3684210526315789,
              "ambiguous_pct": 0.2631578947368421,
              "unobservable_pct": 0.21052631578947367,
              "unclear_pct": 0.47368421052631576,
              "retail_qty_pct": 0.07784431137724551,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.41916167664670656,
              "ambiguous_qty_pct": 0.2754491017964072,
              "unobservable_qty_pct": 0.2275449101796407,
              "unclear_qty_pct": 0.5029940119760479,
              "retail_notional_pct": 0.07730101539469375,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.41946446118571895,
              "ambiguous_notional_pct": 0.275262037340321,
              "unobservable_notional_pct": 0.2279724860792663,
              "unclear_notional_pct": 0.5032345234195873,
              "run_retail_pct": 0.2,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.4666666666666667,
              "avg_trade_size": 642.7368421052631,
              "avg_run_notional": 814.1333333333333,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5333333333333333,
              "na_confidence_pct": 0.4666666666666667,
              "avg_feature_coverage": 0.7833333333333333,
              "observable_run_pct": 0.8666666666666667,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.27586206896551724,
              "mixed_pct": 0.06896551724137931,
              "instit_pct": 0.20689655172413793,
              "ambiguous_pct": 0.3793103448275862,
              "unobservable_pct": 0.06896551724137931,
              "unclear_pct": 0.4482758620689655,
              "retail_qty_pct": 0.12617159336697908,
              "mixed_qty_pct": 0.05118961788031723,
              "instit_qty_pct": 0.37635183850036047,
              "ambiguous_qty_pct": 0.4102379235760634,
              "unobservable_qty_pct": 0.03604902667627974,
              "unclear_qty_pct": 0.44628695025234316,
              "retail_notional_pct": 0.1267975684069533,
              "mixed_notional_pct": 0.05100163381857255,
              "instit_notional_pct": 0.37750040477487157,
              "ambiguous_notional_pct": 0.40797627283298254,
              "unobservable_notional_pct": 0.03672412016662006,
              "unclear_notional_pct": 0.4447003929996026,
              "run_retail_pct": 0.29411764705882354,
              "run_mixed_pct": 0.11764705882352941,
              "run_instit_pct": 0.11764705882352941,
              "run_unclear_pct": 0.47058823529411764,
              "avg_trade_size": 937.0896551724138,
              "avg_run_notional": 1598.5647058823529,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4117647058823529,
              "na_confidence_pct": 0.5882352941176471,
              "avg_feature_coverage": 0.7999999999999999,
              "observable_run_pct": 0.9411764705882353,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2916666666666667,
              "mixed_pct": 0.058333333333333334,
              "instit_pct": 0.15833333333333333,
              "ambiguous_pct": 0.48333333333333334,
              "unobservable_pct": 0.008333333333333333,
              "unclear_pct": 0.4916666666666667,
              "retail_qty_pct": 0.07209029922266,
              "mixed_qty_pct": 0.03612501331061655,
              "instit_qty_pct": 0.28519327015227347,
              "ambiguous_qty_pct": 0.5811681397082313,
              "unobservable_qty_pct": 0.02542327760621872,
              "unclear_qty_pct": 0.6065914173144501,
              "retail_notional_pct": 0.07107037807874836,
              "mixed_notional_pct": 0.03558973984621037,
              "instit_notional_pct": 0.2872982711163198,
              "ambiguous_notional_pct": 0.579898880657117,
              "unobservable_notional_pct": 0.02614273030160447,
              "unclear_notional_pct": 0.6060416109587216,
              "run_retail_pct": 0.43037974683544306,
              "run_mixed_pct": 0.0759493670886076,
              "run_instit_pct": 0.11392405063291139,
              "run_unclear_pct": 0.379746835443038,
              "avg_trade_size": 2100.4883333333332,
              "avg_run_notional": 3190.615189873418,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5443037974683544,
              "na_confidence_pct": 0.45569620253164556,
              "avg_feature_coverage": 0.79873417721519,
              "observable_run_pct": 0.9873417721518988,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.13513513513513514,
              "mixed_pct": 0.08108108108108109,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.21621621621621623,
              "unobservable_pct": 0.5675675675675675,
              "unclear_pct": 0.7837837837837838,
              "retail_qty_pct": 0.06439994854864298,
              "mixed_qty_pct": 0.1282710914833712,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.17865054524146406,
              "unobservable_qty_pct": 0.6286784147265218,
              "unclear_qty_pct": 0.8073289599679858,
              "retail_notional_pct": 0.06441331999428326,
              "mixed_notional_pct": 0.12826925825353724,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.17864799199656997,
              "unobservable_notional_pct": 0.6286694297556096,
              "unclear_notional_pct": 0.8073174217521796,
              "run_retail_pct": 0.22727272727272727,
              "run_mixed_pct": 0.13636363636363635,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.6363636363636364,
              "avg_trade_size": 378.2162162162162,
              "avg_run_notional": 636.0909090909091,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.22727272727272727,
              "na_confidence_pct": 0.7727272727272727,
              "avg_feature_coverage": 0.7272727272727273,
              "observable_run_pct": 0.5909090909090908,
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
          "n_trades": 433,
          "n_runs": 234,
          "n_trade_days": 10,
          "first_trade_date": "2026-03-23",
          "last_trade_date": "2026-04-06",
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
            "retail_pct": 0.3094688221709007,
            "mixed_pct": 0.050808314087759814,
            "instit_pct": 0.4665127020785219,
            "ambiguous_pct": 0.17321016166281755,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17321016166281755,
            "retail_qty_pct": 0.07722001325381048,
            "mixed_qty_pct": 0.05995692511597084,
            "instit_qty_pct": 0.6335984095427435,
            "ambiguous_qty_pct": 0.22922465208747514,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.22922465208747514,
            "retail_notional_pct": 0.07752733526542636,
            "mixed_notional_pct": 0.06004709705275989,
            "instit_notional_pct": 0.6328232310362338,
            "ambiguous_notional_pct": 0.22960233664557986,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.22960233664557986
          },
          "run_composition": {
            "retail_pct": 0.5341880341880342,
            "mixed_pct": 0.0641025641025641,
            "instit_pct": 0.21367521367521367,
            "ambiguous_pct": 0.18803418803418803,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18803418803418803,
            "retail_notional_pct": 0.07752733526542636,
            "mixed_notional_pct": 0.06004709705275989,
            "instit_notional_pct": 0.6328232310362338,
            "unclear_notional_pct": 0.22960233664557986
          },
          "counts": {
            "trades": {
              "retail": 134,
              "mixed": 22,
              "institutional": 202,
              "ambiguous": 75,
              "unobservable": 0,
              "unclear": 75
            },
            "runs": {
              "retail": 125,
              "mixed": 15,
              "institutional": 50,
              "ambiguous": 44,
              "unobservable": 0,
              "unclear": 44
            }
          },
          "confidence": {
            "high": 0.09401709401709402,
            "medium": 0.10683760683760683,
            "low": 0.5470085470085471,
            "na": 0.25213675213675213
          },
          "confidence_counts": {
            "high": 22,
            "medium": 25,
            "low": 128,
            "na": 59
          },
          "trade_confidence": {
            "high": 0.07621247113163972,
            "medium": 0.11316397228637413,
            "low": 0.5866050808314087,
            "na": 0.22401847575057737
          },
          "trade_confidence_counts": {
            "high": 33,
            "medium": 49,
            "low": 254,
            "na": 97
          },
          "observability": {
            "avg_feature_coverage": 0.851282051282051,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.18803418803418803,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5341880341880342,
          "dominance_gap": 0.3205128205128205,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 223,
              "SINGLE_FILL": 210
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 334,
              "PERSISTENT_POSITIVE_IMPACT": 96,
              "MOMENTUM_REACTIVE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 234
            },
            "participant_confidence": {
              "LOW": 128,
              "NA": 59,
              "MEDIUM": 25,
              "HIGH": 22
            }
          },
          "trade_size": {
            "avg": 3158.433025404157,
            "median": 1978.0
          },
          "run_size": {
            "avg": 5844.4508547008545,
            "median": 1980.0,
            "avg_length": 1.1837606837606838
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-93",
              "timestamp": "2026-04-06T08:58:17.963100",
              "price": 0.22,
              "size": 2000.0,
              "notional": 440.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1300,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-92",
              "timestamp": "2026-04-06T08:53:45.652500",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1299,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-91",
              "timestamp": "2026-04-06T08:22:42.863500",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1298,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-90",
              "timestamp": "2026-04-06T08:12:45.673200",
              "price": 0.22,
              "size": 800.0,
              "notional": 176.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1297,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-04-06T08:12:33.153800",
              "price": 0.22,
              "size": 700.0,
              "notional": 154.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1296,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-04-06T07:45:13.423400",
              "price": 0.22,
              "size": 19100.0,
              "notional": 4202.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1295,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-04-06T07:43:46.265400",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1294,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-04-06T07:39:17.185500",
              "price": 0.22,
              "size": 15000.0,
              "notional": 3300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1293,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 18000.0,
              "notional": 3960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 35200.0,
              "notional": 7744.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-04-06T06:46:52.386600",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-04-06T06:46:16.368700",
              "price": 0.22,
              "size": 2200.0,
              "notional": 484.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1291,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-04-06T06:45:46.366600",
              "price": 0.22,
              "size": 3000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1290,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-04-06T06:45:06.341700",
              "price": 0.22,
              "size": 3000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1289,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-04-06T06:44:24.297300",
              "price": 0.22,
              "size": 2400.0,
              "notional": 528.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1288,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-04-06T06:43:49.276500",
              "price": 0.22,
              "size": 1400.0,
              "notional": 308.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1287,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-04-06T06:43:28.263900",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1286,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 54000.0,
              "notional": 11880.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 24000.0,
              "notional": 5280.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 1000.0,
              "notional": 220.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 1000.0,
              "notional": 220.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 15100.0,
              "notional": 3322.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 31000.0,
              "notional": 6820.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 5000.0,
              "notional": 1100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.3094688221709007,
              "mixed_pct": 0.050808314087759814,
              "instit_pct": 0.4665127020785219,
              "ambiguous_pct": 0.17321016166281755,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.17321016166281755,
              "retail_qty_pct": 0.07722001325381048,
              "mixed_qty_pct": 0.05995692511597084,
              "instit_qty_pct": 0.6335984095427435,
              "ambiguous_qty_pct": 0.22922465208747514,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.22922465208747514,
              "retail_notional_pct": 0.07752733526542636,
              "mixed_notional_pct": 0.06004709705275989,
              "instit_notional_pct": 0.6328232310362338,
              "ambiguous_notional_pct": 0.22960233664557986,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.22960233664557986,
              "run_retail_pct": 0.5341880341880342,
              "run_mixed_pct": 0.0641025641025641,
              "run_instit_pct": 0.21367521367521367,
              "run_unclear_pct": 0.18803418803418803,
              "avg_trade_size": 3158.433025404157,
              "avg_run_notional": 5844.4508547008545,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.09401709401709402,
              "medium_confidence_pct": 0.10683760683760683,
              "low_confidence_pct": 0.5470085470085471,
              "na_confidence_pct": 0.25213675213675213,
              "avg_feature_coverage": 0.851282051282051,
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
              "retail_pct": 0.16666666666666666,
              "mixed_pct": 0.08333333333333333,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.25,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25,
              "retail_qty_pct": 0.007768361581920904,
              "mixed_qty_pct": 0.041666666666666664,
              "instit_qty_pct": 0.6546610169491526,
              "ambiguous_qty_pct": 0.2959039548022599,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2959039548022599,
              "retail_notional_pct": 0.007812890269854432,
              "mixed_notional_pct": 0.040083523993166226,
              "instit_notional_pct": 0.6534853283512004,
              "ambiguous_notional_pct": 0.29861825738577896,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.29861825738577896,
              "run_retail_pct": 0.18181818181818182,
              "run_mixed_pct": 0.09090909090909091,
              "run_instit_pct": 0.45454545454545453,
              "run_unclear_pct": 0.2727272727272727,
              "avg_trade_size": 4170.458333333333,
              "avg_run_notional": 4549.590909090909,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6363636363636364,
              "na_confidence_pct": 0.36363636363636365,
              "avg_feature_coverage": 0.8363636363636363,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2288329519450801,
              "mixed_pct": 0.07093821510297482,
              "instit_pct": 0.36384439359267734,
              "ambiguous_pct": 0.33638443935926776,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.33638443935926776,
              "retail_qty_pct": 0.050724637681159424,
              "mixed_qty_pct": 0.021286231884057972,
              "instit_qty_pct": 0.6211881038647343,
              "ambiguous_qty_pct": 0.3068010265700483,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3068010265700483,
              "retail_notional_pct": 0.0497580392531044,
              "mixed_notional_pct": 0.02098024274063298,
              "instit_notional_pct": 0.6209910478662709,
              "ambiguous_notional_pct": 0.3082706701399917,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3082706701399917,
              "run_retail_pct": 0.36981132075471695,
              "run_mixed_pct": 0.04905660377358491,
              "run_instit_pct": 0.23018867924528302,
              "run_unclear_pct": 0.35094339622641507,
              "avg_trade_size": 2626.094965675057,
              "avg_run_notional": 4330.579245283019,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.007547169811320755,
              "medium_confidence_pct": 0.2,
              "low_confidence_pct": 0.39245283018867927,
              "na_confidence_pct": 0.4,
              "avg_feature_coverage": 0.8364150943396226,
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
              "retail_pct": 0.2749827705031013,
              "mixed_pct": 0.19538249483115094,
              "instit_pct": 0.33563059958649205,
              "ambiguous_pct": 0.19400413507925568,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.19400413507925568,
              "retail_qty_pct": 0.06190689441920969,
              "mixed_qty_pct": 0.12268355618109313,
              "instit_qty_pct": 0.5615123792463694,
              "ambiguous_qty_pct": 0.2538971701533278,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2538971701533278,
              "retail_notional_pct": 0.06201263215728376,
              "mixed_notional_pct": 0.12328179351259146,
              "instit_notional_pct": 0.5613170323170177,
              "ambiguous_notional_pct": 0.2533885420131071,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2533885420131071,
              "run_retail_pct": 0.5828173374613003,
              "run_mixed_pct": 0.16718266253869968,
              "run_instit_pct": 0.12074303405572756,
              "run_unclear_pct": 0.12925696594427244,
              "avg_trade_size": 1610.6214679531358,
              "avg_run_notional": 3617.6652476780187,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.12151702786377709,
              "medium_confidence_pct": 0.4295665634674923,
              "low_confidence_pct": 0.15247678018575853,
              "na_confidence_pct": 0.2964396284829721,
              "avg_feature_coverage": 0.8708204334365325,
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
              "retail_pct": 0.2,
              "mixed_pct": 0.05454545454545454,
              "instit_pct": 0.45454545454545453,
              "ambiguous_pct": 0.21818181818181817,
              "unobservable_pct": 0.07272727272727272,
              "unclear_pct": 0.2909090909090909,
              "retail_qty_pct": 0.1116584564860427,
              "mixed_qty_pct": 0.17323481116584566,
              "instit_qty_pct": 0.5172413793103449,
              "ambiguous_qty_pct": 0.16666666666666666,
              "unobservable_qty_pct": 0.031198686371100164,
              "unclear_qty_pct": 0.1978653530377668,
              "retail_notional_pct": 0.11173382559190212,
              "mixed_notional_pct": 0.17311093002500097,
              "instit_notional_pct": 0.5183959466276408,
              "ambiguous_notional_pct": 0.16589335506366654,
              "unobservable_notional_pct": 0.03086594269178959,
              "unclear_notional_pct": 0.19675929775545614,
              "run_retail_pct": 0.2682926829268293,
              "run_mixed_pct": 0.07317073170731707,
              "run_instit_pct": 0.34146341463414637,
              "run_unclear_pct": 0.3170731707317073,
              "avg_trade_size": 1639.9363636363637,
              "avg_run_notional": 2199.9146341463415,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6097560975609756,
              "na_confidence_pct": 0.3902439024390244,
              "avg_feature_coverage": 0.8036585365853659,
              "observable_run_pct": 0.9512195121951219,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.17543859649122806,
              "mixed_pct": 0.10526315789473684,
              "instit_pct": 0.2982456140350877,
              "ambiguous_pct": 0.38596491228070173,
              "unobservable_pct": 0.03508771929824561,
              "unclear_pct": 0.42105263157894735,
              "retail_qty_pct": 0.061259217243335225,
              "mixed_qty_pct": 0.11939875212705615,
              "instit_qty_pct": 0.44781622234827,
              "ambiguous_qty_pct": 0.35734543391945545,
              "unobservable_qty_pct": 0.014180374361883154,
              "unclear_qty_pct": 0.3715258082813386,
              "retail_notional_pct": 0.06102458558870592,
              "mixed_notional_pct": 0.11973631104533836,
              "instit_notional_pct": 0.4493818537802955,
              "ambiguous_notional_pct": 0.3555736207997115,
              "unobservable_notional_pct": 0.014283628785948802,
              "unclear_notional_pct": 0.3698572495856603,
              "run_retail_pct": 0.21212121212121213,
              "run_mixed_pct": 0.18181818181818182,
              "run_instit_pct": 0.18181818181818182,
              "run_unclear_pct": 0.4242424242424242,
              "avg_trade_size": 1225.7929824561404,
              "avg_run_notional": 2117.2787878787876,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3939393939393939,
              "na_confidence_pct": 0.6060606060606061,
              "avg_feature_coverage": 0.8196969696969698,
              "observable_run_pct": 0.9696969696969697,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2342857142857143,
              "mixed_pct": 0.04,
              "instit_pct": 0.34285714285714286,
              "ambiguous_pct": 0.3657142857142857,
              "unobservable_pct": 0.017142857142857144,
              "unclear_pct": 0.38285714285714284,
              "retail_qty_pct": 0.08614869500782171,
              "mixed_qty_pct": 0.025861990101636614,
              "instit_qty_pct": 0.4421878859401158,
              "ambiguous_qty_pct": 0.4286027938633806,
              "unobservable_qty_pct": 0.01719863508704522,
              "unclear_qty_pct": 0.44580142895042585,
              "retail_notional_pct": 0.08566872727112752,
              "mixed_notional_pct": 0.02546980168631753,
              "instit_notional_pct": 0.44549823181553555,
              "ambiguous_notional_pct": 0.4259496184408968,
              "unobservable_notional_pct": 0.017413620786122536,
              "unclear_notional_pct": 0.4433632392270193,
              "run_retail_pct": 0.39361702127659576,
              "run_mixed_pct": 0.05319148936170213,
              "run_instit_pct": 0.19680851063829788,
              "run_unclear_pct": 0.35638297872340424,
              "avg_trade_size": 2143.199142857143,
              "avg_run_notional": 3989.9984042553187,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.03723404255319149,
              "low_confidence_pct": 0.5531914893617021,
              "na_confidence_pct": 0.4095744680851064,
              "avg_feature_coverage": 0.8170212765957445,
              "observable_run_pct": 0.9840425531914894,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1282051282051282,
              "mixed_pct": 0.07692307692307693,
              "instit_pct": 0.02564102564102564,
              "ambiguous_pct": 0.20512820512820512,
              "unobservable_pct": 0.5641025641025641,
              "unclear_pct": 0.7692307692307692,
              "retail_qty_pct": 0.060104442473272464,
              "mixed_qty_pct": 0.11971535090936981,
              "instit_qty_pct": 0.06669378880744836,
              "ambiguous_qty_pct": 0.1667344720186209,
              "unobservable_qty_pct": 0.5867519457912884,
              "unclear_qty_pct": 0.7534864178099093,
              "retail_notional_pct": 0.06011697934520911,
              "mixed_notional_pct": 0.11971375407660347,
              "instit_notional_pct": 0.06669289920702143,
              "ambiguous_notional_pct": 0.16673224801755357,
              "unobservable_notional_pct": 0.5867441193536125,
              "unclear_notional_pct": 0.7534763673711661,
              "run_retail_pct": 0.20833333333333334,
              "run_mixed_pct": 0.125,
              "run_instit_pct": 0.041666666666666664,
              "run_unclear_pct": 0.625,
              "avg_trade_size": 384.4641025641026,
              "avg_run_notional": 624.7541666666667,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.25,
              "na_confidence_pct": 0.75,
              "avg_feature_coverage": 0.71875,
              "observable_run_pct": 0.5833333333333333,
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
          "n_trades": 1186,
          "n_runs": 633,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-06",
          "last_trade_date": "2026-04-06",
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
            "retail_pct": 0.2925801011804384,
            "mixed_pct": 0.11973018549747048,
            "instit_pct": 0.3760539629005059,
            "ambiguous_pct": 0.21163575042158517,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21163575042158517,
            "retail_qty_pct": 0.06805569319195323,
            "mixed_qty_pct": 0.1435809136854623,
            "instit_qty_pct": 0.5094329105143197,
            "ambiguous_qty_pct": 0.2789304826082648,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2789304826082648,
            "retail_notional_pct": 0.06787625639815752,
            "mixed_notional_pct": 0.1453858972385736,
            "instit_notional_pct": 0.5104803031811977,
            "ambiguous_notional_pct": 0.27625754318207113,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.27625754318207113
          },
          "run_composition": {
            "retail_pct": 0.5197472353870458,
            "mixed_pct": 0.11532385466034756,
            "instit_pct": 0.18325434439178515,
            "ambiguous_pct": 0.18167456556082148,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18167456556082148,
            "retail_notional_pct": 0.06787625639815752,
            "mixed_notional_pct": 0.1453858972385736,
            "instit_notional_pct": 0.5104803031811977,
            "unclear_notional_pct": 0.27625754318207113
          },
          "counts": {
            "trades": {
              "retail": 347,
              "mixed": 142,
              "institutional": 446,
              "ambiguous": 251,
              "unobservable": 0,
              "unclear": 251
            },
            "runs": {
              "retail": 329,
              "mixed": 73,
              "institutional": 116,
              "ambiguous": 115,
              "unobservable": 0,
              "unclear": 115
            }
          },
          "confidence": {
            "high": 0.07740916271721959,
            "medium": 0.20695102685624012,
            "low": 0.4186413902053712,
            "na": 0.296998420221169
          },
          "confidence_counts": {
            "high": 49,
            "medium": 131,
            "low": 265,
            "na": 188
          },
          "trade_confidence": {
            "high": 0.050590219224283306,
            "medium": 0.163575042158516,
            "low": 0.45446880269814505,
            "na": 0.33136593591905567
          },
          "trade_confidence_counts": {
            "high": 60,
            "medium": 194,
            "low": 539,
            "na": 393
          },
          "observability": {
            "avg_feature_coverage": 0.8573459715639811,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.18167456556082148,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5197472353870458,
          "dominance_gap": 0.3364928909952607,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 601,
              "SINGLE_FILL": 585
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 919,
              "PERSISTENT_POSITIVE_IMPACT": 197,
              "MOMENTUM_REACTIVE": 68,
              "UNOBSERVABLE": 2
            },
            "d3_urgency": {
              "IMMEDIATE": 631,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "LOW": 265,
              "NA": 188,
              "MEDIUM": 131,
              "HIGH": 49
            }
          },
          "trade_size": {
            "avg": 3166.4232715008434,
            "median": 1322.5
          },
          "run_size": {
            "avg": 5932.666666666667,
            "median": 1800.0,
            "avg_length": 1.2180094786729858
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-93",
              "timestamp": "2026-04-06T08:58:17.963100",
              "price": 0.22,
              "size": 2000.0,
              "notional": 440.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1300,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-92",
              "timestamp": "2026-04-06T08:53:45.652500",
              "price": 0.22,
              "size": 500.0,
              "notional": 110.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1299,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-91",
              "timestamp": "2026-04-06T08:22:42.863500",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1298,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-90",
              "timestamp": "2026-04-06T08:12:45.673200",
              "price": 0.22,
              "size": 800.0,
              "notional": 176.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1297,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-04-06T08:12:33.153800",
              "price": 0.22,
              "size": 700.0,
              "notional": 154.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1296,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-04-06T07:45:13.423400",
              "price": 0.22,
              "size": 19100.0,
              "notional": 4202.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1295,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-04-06T07:43:46.265400",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1294,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-04-06T07:39:17.185500",
              "price": 0.22,
              "size": 15000.0,
              "notional": 3300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1293,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 18000.0,
              "notional": 3960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-04-06T06:46:52.386700",
              "price": 0.22,
              "size": 35200.0,
              "notional": 7744.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-04-06T06:46:52.386600",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1292,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-04-06T06:46:16.368700",
              "price": 0.22,
              "size": 2200.0,
              "notional": 484.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1291,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-04-06T06:45:46.366600",
              "price": 0.22,
              "size": 3000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1290,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-04-06T06:45:06.341700",
              "price": 0.22,
              "size": 3000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1289,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-04-06T06:44:24.297300",
              "price": 0.22,
              "size": 2400.0,
              "notional": 528.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1288,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-04-06T06:43:49.276500",
              "price": 0.22,
              "size": 1400.0,
              "notional": 308.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1287,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-04-06T06:43:28.263900",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1286,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 54000.0,
              "notional": 11880.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-04-06T05:48:06.257900",
              "price": 0.22,
              "size": 24000.0,
              "notional": 5280.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1285,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 1000.0,
              "notional": 220.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 1000.0,
              "notional": 220.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-04-06T05:45:28.211300",
              "price": 0.22,
              "size": 15100.0,
              "notional": 3322.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 31000.0,
              "notional": 6820.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-04-06T05:45:28.211200",
              "price": 0.22,
              "size": 5000.0,
              "notional": 1100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 1284,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2925801011804384,
              "mixed_pct": 0.11973018549747048,
              "instit_pct": 0.3760539629005059,
              "ambiguous_pct": 0.21163575042158517,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.21163575042158517,
              "retail_qty_pct": 0.06805569319195323,
              "mixed_qty_pct": 0.1435809136854623,
              "instit_qty_pct": 0.5094329105143197,
              "ambiguous_qty_pct": 0.2789304826082648,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2789304826082648,
              "retail_notional_pct": 0.06787625639815752,
              "mixed_notional_pct": 0.1453858972385736,
              "instit_notional_pct": 0.5104803031811977,
              "ambiguous_notional_pct": 0.27625754318207113,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.27625754318207113,
              "run_retail_pct": 0.5197472353870458,
              "run_mixed_pct": 0.11532385466034756,
              "run_instit_pct": 0.18325434439178515,
              "run_unclear_pct": 0.18167456556082148,
              "avg_trade_size": 3166.4232715008434,
              "avg_run_notional": 5932.666666666667,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.07740916271721959,
              "medium_confidence_pct": 0.20695102685624012,
              "low_confidence_pct": 0.4186413902053712,
              "na_confidence_pct": 0.296998420221169,
              "avg_feature_coverage": 0.8573459715639811,
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
              "retail_pct": 0.0625,
              "mixed_pct": 0.03125,
              "instit_pct": 0.53125,
              "ambiguous_pct": 0.375,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.375,
              "retail_qty_pct": 0.0005826579797658775,
              "mixed_qty_pct": 0.0031251655278351606,
              "instit_qty_pct": 0.9408337306001378,
              "ambiguous_qty_pct": 0.055458445892261246,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.055458445892261246,
              "retail_notional_pct": 0.0005611330007197141,
              "mixed_notional_pct": 0.0028788562645620116,
              "instit_notional_pct": 0.9413931741255976,
              "ambiguous_notional_pct": 0.05516683660912063,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.05516683660912063,
              "run_retail_pct": 0.07692307692307693,
              "run_mixed_pct": 0.038461538461538464,
              "run_instit_pct": 0.46153846153846156,
              "run_unclear_pct": 0.4230769230769231,
              "avg_trade_size": 21775.140625,
              "avg_run_notional": 26800.173076923078,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5384615384615384,
              "na_confidence_pct": 0.46153846153846156,
              "avg_feature_coverage": 0.8384615384615386,
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
              "retail_pct": 0.317650984317651,
              "mixed_pct": 0.18351685018351685,
              "instit_pct": 0.31614948281614946,
              "ambiguous_pct": 0.1798465131798465,
              "unobservable_pct": 0.0028361695028361693,
              "unclear_pct": 0.18268268268268267,
              "retail_qty_pct": 0.06710405272894532,
              "mixed_qty_pct": 0.131215818683596,
              "instit_qty_pct": 0.5355081327523984,
              "ambiguous_qty_pct": 0.2616734565966782,
              "unobservable_qty_pct": 0.004498539238382143,
              "unclear_qty_pct": 0.26617199583506035,
              "retail_notional_pct": 0.06738300621504653,
              "mixed_notional_pct": 0.1318896816040262,
              "instit_notional_pct": 0.5349897126588345,
              "ambiguous_notional_pct": 0.26118946989930253,
              "unobservable_notional_pct": 0.004548129622790185,
              "unclear_notional_pct": 0.2657375995220927,
              "run_retail_pct": 0.6267893660531697,
              "run_mixed_pct": 0.1523517382413088,
              "run_instit_pct": 0.10497614178595774,
              "run_unclear_pct": 0.11588275391956374,
              "avg_trade_size": 1674.5233566900233,
              "avg_run_notional": 3420.9587593728697,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.21847307430129517,
              "medium_confidence_pct": 0.39536468984321743,
              "low_confidence_pct": 0.11792774369461487,
              "na_confidence_pct": 0.26823449216087253,
              "avg_feature_coverage": 0.8666155419222904,
              "observable_run_pct": 0.9993183367416496,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23922413793103448,
              "mixed_pct": 0.09375,
              "instit_pct": 0.2995689655172414,
              "ambiguous_pct": 0.36637931034482757,
              "unobservable_pct": 0.0010775862068965517,
              "unclear_pct": 0.36745689655172414,
              "retail_qty_pct": 0.05966617754952311,
              "mixed_qty_pct": 0.03338224504768892,
              "instit_qty_pct": 0.4968085106382979,
              "ambiguous_qty_pct": 0.4088591342626559,
              "unobservable_qty_pct": 0.0012839325018341892,
              "unclear_qty_pct": 0.4101430667644901,
              "retail_notional_pct": 0.05603513522702873,
              "mixed_notional_pct": 0.0314659534917949,
              "instit_notional_pct": 0.5034818043063429,
              "ambiguous_notional_pct": 0.4080227049690757,
              "unobservable_notional_pct": 0.0009944020057577505,
              "unclear_notional_pct": 0.40901710697483346,
              "run_retail_pct": 0.398876404494382,
              "run_mixed_pct": 0.07303370786516854,
              "run_instit_pct": 0.1891385767790262,
              "run_unclear_pct": 0.3389513108614232,
              "avg_trade_size": 2313.5980603448274,
              "avg_run_notional": 4020.6348314606744,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.003745318352059925,
              "medium_confidence_pct": 0.24344569288389514,
              "low_confidence_pct": 0.3408239700374532,
              "na_confidence_pct": 0.41198501872659177,
              "avg_feature_coverage": 0.8370786516853933,
              "observable_run_pct": 0.99812734082397,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24493243243243243,
              "mixed_pct": 0.0777027027027027,
              "instit_pct": 0.31841216216216217,
              "ambiguous_pct": 0.34459459459459457,
              "unobservable_pct": 0.014358108108108109,
              "unclear_pct": 0.3589527027027027,
              "retail_qty_pct": 0.08372453626457445,
              "mixed_qty_pct": 0.060192143156436846,
              "instit_qty_pct": 0.44865351756461436,
              "ambiguous_qty_pct": 0.39178335846566487,
              "unobservable_qty_pct": 0.01564644454870947,
              "unclear_qty_pct": 0.4074298030143743,
              "retail_notional_pct": 0.08401112523265156,
              "mixed_notional_pct": 0.0606281105168666,
              "instit_notional_pct": 0.45033214115392933,
              "ambiguous_notional_pct": 0.38987612377308317,
              "unobservable_notional_pct": 0.015152499323469371,
              "unclear_notional_pct": 0.4050286230965525,
              "run_retail_pct": 0.4158878504672897,
              "run_mixed_pct": 0.06853582554517133,
              "run_instit_pct": 0.1822429906542056,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 2410.6996621621624,
              "avg_run_notional": 4445.900934579439,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.06386292834890965,
              "medium_confidence_pct": 0.19158878504672897,
              "low_confidence_pct": 0.3426791277258567,
              "na_confidence_pct": 0.40186915887850466,
              "avg_feature_coverage": 0.824532710280374,
              "observable_run_pct": 0.9890965732087228,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6013071895424836,
              "mixed_pct": 0.10784313725490197,
              "instit_pct": 0.12745098039215685,
              "ambiguous_pct": 0.1568627450980392,
              "unobservable_pct": 0.006535947712418301,
              "unclear_pct": 0.16339869281045752,
              "retail_qty_pct": 0.0811310494834149,
              "mixed_qty_pct": 0.08863512778684067,
              "instit_qty_pct": 0.4059815116911365,
              "ambiguous_qty_pct": 0.41881457313757475,
              "unobservable_qty_pct": 0.005437737901033171,
              "unclear_qty_pct": 0.42425231103860794,
              "retail_notional_pct": 0.08130115705061954,
              "mixed_notional_pct": 0.09002176081978232,
              "instit_notional_pct": 0.40485324331699774,
              "ambiguous_notional_pct": 0.41840940397271953,
              "unobservable_notional_pct": 0.005414434839880839,
              "unclear_notional_pct": 0.4238238388126004,
              "run_retail_pct": 0.7003891050583657,
              "run_mixed_pct": 0.11284046692607004,
              "run_instit_pct": 0.05058365758754864,
              "run_unclear_pct": 0.13618677042801558,
              "avg_trade_size": 602.3598039215685,
              "avg_run_notional": 717.2066147859921,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6459143968871596,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.10505836575875487,
              "na_confidence_pct": 0.2490272373540856,
              "avg_feature_coverage": 0.8396887159533072,
              "observable_run_pct": 0.9961089494163424,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.18404907975460122,
              "mixed_pct": 0.06134969325153374,
              "instit_pct": 0.294478527607362,
              "ambiguous_pct": 0.43558282208588955,
              "unobservable_pct": 0.024539877300613498,
              "unclear_pct": 0.4601226993865031,
              "retail_qty_pct": 0.08537693006357856,
              "mixed_qty_pct": 0.0820466242809567,
              "instit_qty_pct": 0.368755676657584,
              "ambiguous_qty_pct": 0.45231607629427795,
              "unobservable_qty_pct": 0.011504692703602786,
              "unclear_qty_pct": 0.4638207689978807,
              "retail_notional_pct": 0.08491795804081347,
              "mixed_notional_pct": 0.07963555093109488,
              "instit_notional_pct": 0.3672334878500739,
              "ambiguous_notional_pct": 0.45736370668708703,
              "unobservable_notional_pct": 0.010849296490930666,
              "unclear_notional_pct": 0.46821300317801773,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.05,
              "run_instit_pct": 0.225,
              "run_unclear_pct": 0.475,
              "avg_trade_size": 1574.2730061349694,
              "avg_run_notional": 2138.3875,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.475,
              "na_confidence_pct": 0.525,
              "avg_feature_coverage": 0.8241666666666665,
              "observable_run_pct": 0.9833333333333333,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.11904761904761904,
              "mixed_pct": 0.07142857142857142,
              "instit_pct": 0.023809523809523808,
              "ambiguous_pct": 0.19047619047619047,
              "unobservable_pct": 0.5952380952380952,
              "unclear_pct": 0.7857142857142857,
              "retail_qty_pct": 0.05970623894420925,
              "mixed_qty_pct": 0.11892221360947137,
              "instit_qty_pct": 0.06625192958744923,
              "ambiguous_qty_pct": 0.16562982396862308,
              "unobservable_qty_pct": 0.589489793890247,
              "unclear_qty_pct": 0.7551196178588702,
              "retail_notional_pct": 0.059718698034331295,
              "mixed_notional_pct": 0.1189206378651261,
              "instit_notional_pct": 0.06625105173544629,
              "ambiguous_notional_pct": 0.16562762933861574,
              "unobservable_notional_pct": 0.5894819830264806,
              "unclear_notional_pct": 0.7551096123650963,
              "run_retail_pct": 0.2,
              "run_mixed_pct": 0.12,
              "run_instit_pct": 0.04,
              "run_unclear_pct": 0.64,
              "avg_trade_size": 359.3833333333333,
              "avg_run_notional": 603.764,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.24,
              "na_confidence_pct": 0.76,
              "avg_feature_coverage": 0.7120000000000002,
              "observable_run_pct": 0.56,
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
      "n_trades": 1186,
      "n_runs": 633,
      "n_trade_days": 21,
      "first_trade_date": "2026-03-06",
      "last_trade_date": "2026-04-06",
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
        "retail_pct": 0.2925801011804384,
        "mixed_pct": 0.11973018549747048,
        "instit_pct": 0.3760539629005059,
        "ambiguous_pct": 0.21163575042158517,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.21163575042158517,
        "retail_qty_pct": 0.06805569319195323,
        "mixed_qty_pct": 0.1435809136854623,
        "instit_qty_pct": 0.5094329105143197,
        "ambiguous_qty_pct": 0.2789304826082648,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2789304826082648,
        "retail_notional_pct": 0.06787625639815752,
        "mixed_notional_pct": 0.1453858972385736,
        "instit_notional_pct": 0.5104803031811977,
        "ambiguous_notional_pct": 0.27625754318207113,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.27625754318207113
      },
      "run_composition": {
        "retail_pct": 0.5197472353870458,
        "mixed_pct": 0.11532385466034756,
        "instit_pct": 0.18325434439178515,
        "ambiguous_pct": 0.18167456556082148,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.18167456556082148
      },
      "trade_size": {
        "avg": 3166.4232715008434,
        "median": 1322.5
      },
      "run_size": {
        "avg": 5932.666666666667,
        "median": 1800.0,
        "avg_length": 1.2180094786729858
      },
      "confidence": {
        "high": 0.07740916271721959,
        "medium": 0.20695102685624012,
        "low": 0.4186413902053712,
        "na": 0.296998420221169
      },
      "confidence_counts": {
        "high": 49,
        "medium": 131,
        "low": 265,
        "na": 188
      },
      "trade_confidence": {
        "high": 0.050590219224283306,
        "medium": 0.163575042158516,
        "low": 0.45446880269814505,
        "na": 0.33136593591905567
      },
      "trade_confidence_counts": {
        "high": 60,
        "medium": 194,
        "low": 539,
        "na": 393
      },
      "counts": {
        "trades": {
          "retail": 347,
          "mixed": 142,
          "institutional": 446,
          "ambiguous": 251,
          "unobservable": 0,
          "unclear": 251
        },
        "runs": {
          "retail": 329,
          "mixed": 73,
          "institutional": 116,
          "ambiguous": 115,
          "unobservable": 0,
          "unclear": 115
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8573459715639811,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.18167456556082148,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5197472353870458,
      "dominance_gap": 0.3364928909952607,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-02",
            "n_trades": 1009,
            "n_runs": 469,
            "retail_pct": 0.26362735381565905,
            "mixed_pct": 0.155599603567889,
            "instit_pct": 0.41129831516352827,
            "ambiguous_pct": 0.1694747274529237,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1694747274529237,
            "avg_trade_size": 3885.792864222002,
            "avg_run_notional": 8359.840085287846,
            "retail_qty_pct": 0.07449967150149088,
            "mixed_qty_pct": 0.1957029868095214,
            "instit_qty_pct": 0.4838151311467125,
            "ambiguous_qty_pct": 0.24598221054227523,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24598221054227523,
            "retail_notional_pct": 0.0744034646299893,
            "mixed_notional_pct": 0.19597208707994485,
            "instit_notional_pct": 0.4849164640063865,
            "ambiguous_notional_pct": 0.24470798428367932,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24470798428367932,
            "run_retail_pct": 0.5437100213219617,
            "run_mixed_pct": 0.13859275053304904,
            "run_instit_pct": 0.14712153518123666,
            "run_ambiguous_pct": 0.17057569296375266,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.17057569296375266,
            "avg_feature_coverage": 0.8474413646055435,
            "high_confidence_pct": 0.06183368869936034,
            "medium_confidence_pct": 0.3880597014925373,
            "low_confidence_pct": 0.24093816631130063,
            "na_confidence_pct": 0.3091684434968017,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 1431,
            "n_runs": 745,
            "retail_pct": 0.27113906359189377,
            "mixed_pct": 0.14255765199161424,
            "instit_pct": 0.3941299790356394,
            "ambiguous_pct": 0.19217330538085256,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19217330538085256,
            "avg_trade_size": 3185.088749126485,
            "avg_run_notional": 6117.935570469798,
            "retail_qty_pct": 0.06899682251475261,
            "mixed_qty_pct": 0.16353083384761333,
            "instit_qty_pct": 0.5271616335232344,
            "ambiguous_qty_pct": 0.24031071011439967,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24031071011439967,
            "retail_notional_pct": 0.06849428525918512,
            "mixed_notional_pct": 0.16450322541577608,
            "instit_notional_pct": 0.5287911305783282,
            "ambiguous_notional_pct": 0.23821135874671062,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23821135874671062,
            "run_retail_pct": 0.4966442953020134,
            "run_mixed_pct": 0.13691275167785236,
            "run_instit_pct": 0.19731543624161074,
            "run_ambiguous_pct": 0.1691275167785235,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1691275167785235,
            "avg_feature_coverage": 0.8594630872483221,
            "high_confidence_pct": 0.036241610738255034,
            "medium_confidence_pct": 0.23221476510067113,
            "low_confidence_pct": 0.425503355704698,
            "na_confidence_pct": 0.30604026845637583,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 176,
            "n_runs": 87,
            "retail_pct": 0.3409090909090909,
            "mixed_pct": 0.0,
            "instit_pct": 0.4772727272727273,
            "ambiguous_pct": 0.18181818181818182,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18181818181818182,
            "avg_trade_size": 2970.8551136363635,
            "avg_run_notional": 6010.005747126437,
            "retail_qty_pct": 0.061297558450521955,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7245276507635234,
            "ambiguous_qty_pct": 0.2141747907859546,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2141747907859546,
            "retail_notional_pct": 0.062200870005096866,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7233617119344082,
            "ambiguous_notional_pct": 0.2144374180604949,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2144374180604949,
            "run_retail_pct": 0.632183908045977,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1839080459770115,
            "run_ambiguous_pct": 0.1839080459770115,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1839080459770115,
            "avg_feature_coverage": 0.8431034482758617,
            "high_confidence_pct": 0.25287356321839083,
            "medium_confidence_pct": 0.28735632183908044,
            "low_confidence_pct": 0.27586206896551724,
            "na_confidence_pct": 0.1839080459770115,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.2925801011804384,
          "mixed_pct": 0.11973018549747048,
          "instit_pct": 0.3760539629005059,
          "ambiguous_pct": 0.21163575042158517,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.21163575042158517,
          "retail_qty_pct": 0.06805569319195323,
          "mixed_qty_pct": 0.1435809136854623,
          "instit_qty_pct": 0.5094329105143197,
          "ambiguous_qty_pct": 0.2789304826082648,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2789304826082648,
          "retail_notional_pct": 0.06787625639815752,
          "mixed_notional_pct": 0.1453858972385736,
          "instit_notional_pct": 0.5104803031811977,
          "ambiguous_notional_pct": 0.27625754318207113,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.27625754318207113,
          "run_retail_pct": 0.5197472353870458,
          "run_mixed_pct": 0.11532385466034756,
          "run_instit_pct": 0.18325434439178515,
          "run_unclear_pct": 0.18167456556082148,
          "avg_trade_size": 3166.4232715008434,
          "avg_run_notional": 5932.666666666667,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.07740916271721959,
          "medium_confidence_pct": 0.20695102685624012,
          "low_confidence_pct": 0.4186413902053712,
          "na_confidence_pct": 0.296998420221169,
          "avg_feature_coverage": 0.8573459715639811,
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
          "retail_pct": 0.0625,
          "mixed_pct": 0.03125,
          "instit_pct": 0.53125,
          "ambiguous_pct": 0.375,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.375,
          "retail_qty_pct": 0.0005826579797658775,
          "mixed_qty_pct": 0.0031251655278351606,
          "instit_qty_pct": 0.9408337306001378,
          "ambiguous_qty_pct": 0.055458445892261246,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.055458445892261246,
          "retail_notional_pct": 0.0005611330007197141,
          "mixed_notional_pct": 0.0028788562645620116,
          "instit_notional_pct": 0.9413931741255976,
          "ambiguous_notional_pct": 0.05516683660912063,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.05516683660912063,
          "run_retail_pct": 0.07692307692307693,
          "run_mixed_pct": 0.038461538461538464,
          "run_instit_pct": 0.46153846153846156,
          "run_unclear_pct": 0.4230769230769231,
          "avg_trade_size": 21775.140625,
          "avg_run_notional": 26800.173076923078,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5384615384615384,
          "na_confidence_pct": 0.46153846153846156,
          "avg_feature_coverage": 0.8384615384615386,
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
          "retail_pct": 0.317650984317651,
          "mixed_pct": 0.18351685018351685,
          "instit_pct": 0.31614948281614946,
          "ambiguous_pct": 0.1798465131798465,
          "unobservable_pct": 0.0028361695028361693,
          "unclear_pct": 0.18268268268268267,
          "retail_qty_pct": 0.06710405272894532,
          "mixed_qty_pct": 0.131215818683596,
          "instit_qty_pct": 0.5355081327523984,
          "ambiguous_qty_pct": 0.2616734565966782,
          "unobservable_qty_pct": 0.004498539238382143,
          "unclear_qty_pct": 0.26617199583506035,
          "retail_notional_pct": 0.06738300621504653,
          "mixed_notional_pct": 0.1318896816040262,
          "instit_notional_pct": 0.5349897126588345,
          "ambiguous_notional_pct": 0.26118946989930253,
          "unobservable_notional_pct": 0.004548129622790185,
          "unclear_notional_pct": 0.2657375995220927,
          "run_retail_pct": 0.6267893660531697,
          "run_mixed_pct": 0.1523517382413088,
          "run_instit_pct": 0.10497614178595774,
          "run_unclear_pct": 0.11588275391956374,
          "avg_trade_size": 1674.5233566900233,
          "avg_run_notional": 3420.9587593728697,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.21847307430129517,
          "medium_confidence_pct": 0.39536468984321743,
          "low_confidence_pct": 0.11792774369461487,
          "na_confidence_pct": 0.26823449216087253,
          "avg_feature_coverage": 0.8666155419222904,
          "observable_run_pct": 0.9993183367416496,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "S71",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.23922413793103448,
          "mixed_pct": 0.09375,
          "instit_pct": 0.2995689655172414,
          "ambiguous_pct": 0.36637931034482757,
          "unobservable_pct": 0.0010775862068965517,
          "unclear_pct": 0.36745689655172414,
          "retail_qty_pct": 0.05966617754952311,
          "mixed_qty_pct": 0.03338224504768892,
          "instit_qty_pct": 0.4968085106382979,
          "ambiguous_qty_pct": 0.4088591342626559,
          "unobservable_qty_pct": 0.0012839325018341892,
          "unclear_qty_pct": 0.4101430667644901,
          "retail_notional_pct": 0.05603513522702873,
          "mixed_notional_pct": 0.0314659534917949,
          "instit_notional_pct": 0.5034818043063429,
          "ambiguous_notional_pct": 0.4080227049690757,
          "unobservable_notional_pct": 0.0009944020057577505,
          "unclear_notional_pct": 0.40901710697483346,
          "run_retail_pct": 0.398876404494382,
          "run_mixed_pct": 0.07303370786516854,
          "run_instit_pct": 0.1891385767790262,
          "run_unclear_pct": 0.3389513108614232,
          "avg_trade_size": 2313.5980603448274,
          "avg_run_notional": 4020.6348314606744,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.003745318352059925,
          "medium_confidence_pct": 0.24344569288389514,
          "low_confidence_pct": 0.3408239700374532,
          "na_confidence_pct": 0.41198501872659177,
          "avg_feature_coverage": 0.8370786516853933,
          "observable_run_pct": 0.99812734082397,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "S69",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.24493243243243243,
          "mixed_pct": 0.0777027027027027,
          "instit_pct": 0.31841216216216217,
          "ambiguous_pct": 0.34459459459459457,
          "unobservable_pct": 0.014358108108108109,
          "unclear_pct": 0.3589527027027027,
          "retail_qty_pct": 0.08372453626457445,
          "mixed_qty_pct": 0.060192143156436846,
          "instit_qty_pct": 0.44865351756461436,
          "ambiguous_qty_pct": 0.39178335846566487,
          "unobservable_qty_pct": 0.01564644454870947,
          "unclear_qty_pct": 0.4074298030143743,
          "retail_notional_pct": 0.08401112523265156,
          "mixed_notional_pct": 0.0606281105168666,
          "instit_notional_pct": 0.45033214115392933,
          "ambiguous_notional_pct": 0.38987612377308317,
          "unobservable_notional_pct": 0.015152499323469371,
          "unclear_notional_pct": 0.4050286230965525,
          "run_retail_pct": 0.4158878504672897,
          "run_mixed_pct": 0.06853582554517133,
          "run_instit_pct": 0.1822429906542056,
          "run_unclear_pct": 0.3333333333333333,
          "avg_trade_size": 2410.6996621621624,
          "avg_run_notional": 4445.900934579439,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.06386292834890965,
          "medium_confidence_pct": 0.19158878504672897,
          "low_confidence_pct": 0.3426791277258567,
          "na_confidence_pct": 0.40186915887850466,
          "avg_feature_coverage": 0.824532710280374,
          "observable_run_pct": 0.9890965732087228,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6013071895424836,
          "mixed_pct": 0.10784313725490197,
          "instit_pct": 0.12745098039215685,
          "ambiguous_pct": 0.1568627450980392,
          "unobservable_pct": 0.006535947712418301,
          "unclear_pct": 0.16339869281045752,
          "retail_qty_pct": 0.0811310494834149,
          "mixed_qty_pct": 0.08863512778684067,
          "instit_qty_pct": 0.4059815116911365,
          "ambiguous_qty_pct": 0.41881457313757475,
          "unobservable_qty_pct": 0.005437737901033171,
          "unclear_qty_pct": 0.42425231103860794,
          "retail_notional_pct": 0.08130115705061954,
          "mixed_notional_pct": 0.09002176081978232,
          "instit_notional_pct": 0.40485324331699774,
          "ambiguous_notional_pct": 0.41840940397271953,
          "unobservable_notional_pct": 0.005414434839880839,
          "unclear_notional_pct": 0.4238238388126004,
          "run_retail_pct": 0.7003891050583657,
          "run_mixed_pct": 0.11284046692607004,
          "run_instit_pct": 0.05058365758754864,
          "run_unclear_pct": 0.13618677042801558,
          "avg_trade_size": 602.3598039215685,
          "avg_run_notional": 717.2066147859921,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6459143968871596,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.10505836575875487,
          "na_confidence_pct": 0.2490272373540856,
          "avg_feature_coverage": 0.8396887159533072,
          "observable_run_pct": 0.9961089494163424,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.18404907975460122,
          "mixed_pct": 0.06134969325153374,
          "instit_pct": 0.294478527607362,
          "ambiguous_pct": 0.43558282208588955,
          "unobservable_pct": 0.024539877300613498,
          "unclear_pct": 0.4601226993865031,
          "retail_qty_pct": 0.08537693006357856,
          "mixed_qty_pct": 0.0820466242809567,
          "instit_qty_pct": 0.368755676657584,
          "ambiguous_qty_pct": 0.45231607629427795,
          "unobservable_qty_pct": 0.011504692703602786,
          "unclear_qty_pct": 0.4638207689978807,
          "retail_notional_pct": 0.08491795804081347,
          "mixed_notional_pct": 0.07963555093109488,
          "instit_notional_pct": 0.3672334878500739,
          "ambiguous_notional_pct": 0.45736370668708703,
          "unobservable_notional_pct": 0.010849296490930666,
          "unclear_notional_pct": 0.46821300317801773,
          "run_retail_pct": 0.25,
          "run_mixed_pct": 0.05,
          "run_instit_pct": 0.225,
          "run_unclear_pct": 0.475,
          "avg_trade_size": 1574.2730061349694,
          "avg_run_notional": 2138.3875,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.475,
          "na_confidence_pct": 0.525,
          "avg_feature_coverage": 0.8241666666666665,
          "observable_run_pct": 0.9833333333333333,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "532",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.11904761904761904,
          "mixed_pct": 0.07142857142857142,
          "instit_pct": 0.023809523809523808,
          "ambiguous_pct": 0.19047619047619047,
          "unobservable_pct": 0.5952380952380952,
          "unclear_pct": 0.7857142857142857,
          "retail_qty_pct": 0.05970623894420925,
          "mixed_qty_pct": 0.11892221360947137,
          "instit_qty_pct": 0.06625192958744923,
          "ambiguous_qty_pct": 0.16562982396862308,
          "unobservable_qty_pct": 0.589489793890247,
          "unclear_qty_pct": 0.7551196178588702,
          "retail_notional_pct": 0.059718698034331295,
          "mixed_notional_pct": 0.1189206378651261,
          "instit_notional_pct": 0.06625105173544629,
          "ambiguous_notional_pct": 0.16562762933861574,
          "unobservable_notional_pct": 0.5894819830264806,
          "unclear_notional_pct": 0.7551096123650963,
          "run_retail_pct": 0.2,
          "run_mixed_pct": 0.12,
          "run_instit_pct": 0.04,
          "run_unclear_pct": 0.64,
          "avg_trade_size": 359.3833333333333,
          "avg_run_notional": 603.764,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.24,
          "na_confidence_pct": 0.76,
          "avg_feature_coverage": 0.7120000000000002,
          "observable_run_pct": 0.56,
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
            "retail_pct": 0.43010752688172044,
            "mixed_pct": 0.0,
            "instit_pct": 0.46236559139784944,
            "ambiguous_pct": 0.10752688172043011,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10752688172043011,
            "retail_qty_pct": 0.05544635544635545,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7742833742833742,
            "ambiguous_qty_pct": 0.17027027027027028,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17027027027027028,
            "retail_notional_pct": 0.05669448208814518,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7737689282347395,
            "ambiguous_notional_pct": 0.16953658967711524,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.16953658967711524,
            "run_retail_pct": 0.7272727272727273,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.14545454545454545,
            "run_unclear_pct": 0.12727272727272726,
            "avg_trade_size": 2919.9139784946237,
            "avg_run_notional": 4937.309090909091,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4,
            "medium_confidence_pct": 0.45454545454545453,
            "low_confidence_pct": 0.01818181818181818,
            "na_confidence_pct": 0.12727272727272726,
            "avg_feature_coverage": 0.833636363636364,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.16666666666666666,
            "mixed_pct": 0.0,
            "instit_pct": 0.4166666666666667,
            "ambiguous_pct": 0.4166666666666667,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4166666666666667,
            "retail_qty_pct": 0.00904977375565611,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8371040723981901,
            "ambiguous_qty_pct": 0.15384615384615385,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.15384615384615385,
            "retail_notional_pct": 0.008943218500291051,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.836640736624861,
            "ambiguous_notional_pct": 0.15441604487484786,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.15441604487484786,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.25,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 787.375,
            "avg_run_notional": 1181.0625,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.83125,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3333333333333333,
            "mixed_pct": 0.047619047619047616,
            "instit_pct": 0.2857142857142857,
            "ambiguous_pct": 0.3333333333333333,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3333333333333333,
            "retail_qty_pct": 0.13441700531416068,
            "mixed_qty_pct": 0.025633010315723664,
            "instit_qty_pct": 0.45451703657392933,
            "ambiguous_qty_pct": 0.3854329477961863,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3854329477961863,
            "retail_notional_pct": 0.13393916940205347,
            "mixed_notional_pct": 0.02554233812448822,
            "instit_notional_pct": 0.4564489448210928,
            "ambiguous_notional_pct": 0.38406954765236556,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.38406954765236556,
            "run_retail_pct": 0.4375,
            "run_mixed_pct": 0.0625,
            "run_instit_pct": 0.1875,
            "run_unclear_pct": 0.3125,
            "avg_trade_size": 2017.9380952380955,
            "avg_run_notional": 2648.5437500000003,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.625,
            "na_confidence_pct": 0.375,
            "avg_feature_coverage": 0.8125,
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
            "retail_pct": 0.2127659574468085,
            "mixed_pct": 0.0425531914893617,
            "instit_pct": 0.11702127659574468,
            "ambiguous_pct": 0.6276595744680851,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.6276595744680851,
            "retail_qty_pct": 0.022727272727272728,
            "mixed_qty_pct": 0.005681818181818182,
            "instit_qty_pct": 0.20941558441558442,
            "ambiguous_qty_pct": 0.7621753246753247,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.7621753246753247,
            "retail_notional_pct": 0.02271938532561762,
            "mixed_notional_pct": 0.005706076527606273,
            "instit_notional_pct": 0.21022089860616772,
            "ambiguous_notional_pct": 0.7613536395406084,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.7613536395406084,
            "run_retail_pct": 0.5128205128205128,
            "run_mixed_pct": 0.05128205128205128,
            "run_instit_pct": 0.10256410256410256,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 1318.1170212765958,
            "avg_run_notional": 3177.0,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.48717948717948717,
            "low_confidence_pct": 0.1282051282051282,
            "na_confidence_pct": 0.38461538461538464,
            "avg_feature_coverage": 0.8500000000000002,
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
            "retail_pct": 0.2,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.4,
            "unobservable_pct": 0.4,
            "unclear_pct": 0.8,
            "retail_qty_pct": 0.01282051282051282,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.6666666666666666,
            "unobservable_qty_pct": 0.32051282051282054,
            "unclear_qty_pct": 0.9871794871794872,
            "retail_notional_pct": 0.01265989713833575,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.6583146511934591,
            "unobservable_notional_pct": 0.32902545166820524,
            "unclear_notional_pct": 0.9873401028616644,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.75,
            "avg_trade_size": 606.64,
            "avg_run_notional": 758.3,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.25,
            "na_confidence_pct": 0.75,
            "avg_feature_coverage": 0.7500000000000001,
            "observable_run_pct": 0.75,
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
            "retail_pct": 0.324,
            "mixed_pct": 0.04,
            "instit_pct": 0.464,
            "ambiguous_pct": 0.172,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.172,
            "retail_qty_pct": 0.08444960409596952,
            "mixed_qty_pct": 0.0658748586057034,
            "instit_qty_pct": 0.6337143537536465,
            "ambiguous_qty_pct": 0.2159611835446806,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2159611835446806,
            "retail_notional_pct": 0.08488726667898724,
            "mixed_notional_pct": 0.06599321487974233,
            "instit_notional_pct": 0.6327283047759854,
            "ambiguous_notional_pct": 0.216391213665285,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.216391213665285,
            "run_retail_pct": 0.5658914728682171,
            "run_mixed_pct": 0.046511627906976744,
            "run_instit_pct": 0.20155038759689922,
            "run_unclear_pct": 0.18604651162790697,
            "avg_trade_size": 3030.16,
            "avg_run_notional": 5872.403100775194,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.17054263565891473,
            "medium_confidence_pct": 0.1937984496124031,
            "low_confidence_pct": 0.40310077519379844,
            "na_confidence_pct": 0.23255813953488372,
            "avg_feature_coverage": 0.8511627906976744,
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
            "instit_pct": 1.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 1.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 1.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 1.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 4893.333333333333,
            "avg_run_notional": 7340.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 1.0,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2191780821917808,
            "mixed_pct": 0.0136986301369863,
            "instit_pct": 0.3424657534246575,
            "ambiguous_pct": 0.4246575342465753,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4246575342465753,
            "retail_qty_pct": 0.0332027606789778,
            "mixed_qty_pct": 0.003171050177205745,
            "instit_qty_pct": 0.5719082260772244,
            "ambiguous_qty_pct": 0.39171796306659207,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.39171796306659207,
            "retail_notional_pct": 0.03298220870612779,
            "mixed_notional_pct": 0.0030684052897460277,
            "instit_notional_pct": 0.5667713954108242,
            "ambiguous_notional_pct": 0.397177990593302,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.397177990593302,
            "run_retail_pct": 0.3018867924528302,
            "run_mixed_pct": 0.018867924528301886,
            "run_instit_pct": 0.22641509433962265,
            "run_unclear_pct": 0.4528301886792453,
            "avg_trade_size": 3263.486301369863,
            "avg_run_notional": 4494.990566037736,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5283018867924528,
            "na_confidence_pct": 0.4716981132075472,
            "avg_feature_coverage": 0.8160377358490567,
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
            "retail_pct": 0.32050333086602517,
            "mixed_pct": 0.22057735011102886,
            "instit_pct": 0.2842339008142117,
            "ambiguous_pct": 0.17468541820873426,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17468541820873426,
            "retail_qty_pct": 0.07487765089722676,
            "mixed_qty_pct": 0.14755301794453507,
            "instit_qty_pct": 0.5279771615008156,
            "ambiguous_qty_pct": 0.2495921696574225,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2495921696574225,
            "retail_notional_pct": 0.07486025026552963,
            "mixed_notional_pct": 0.14754490378274437,
            "instit_notional_pct": 0.5277923753448803,
            "ambiguous_notional_pct": 0.24980247060684563,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24980247060684563,
            "run_retail_pct": 0.6310240963855421,
            "run_mixed_pct": 0.17319277108433734,
            "run_instit_pct": 0.09337349397590361,
            "run_unclear_pct": 0.10240963855421686,
            "avg_trade_size": 900.7457438934123,
            "avg_run_notional": 1832.692018072289,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.11897590361445783,
            "medium_confidence_pct": 0.4367469879518072,
            "low_confidence_pct": 0.1686746987951807,
            "na_confidence_pct": 0.2756024096385542,
            "avg_feature_coverage": 0.875602409638554,
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
            "retail_pct": 0.15789473684210525,
            "mixed_pct": 0.0,
            "instit_pct": 0.3684210526315789,
            "ambiguous_pct": 0.2631578947368421,
            "unobservable_pct": 0.21052631578947367,
            "unclear_pct": 0.47368421052631576,
            "retail_qty_pct": 0.07784431137724551,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.41916167664670656,
            "ambiguous_qty_pct": 0.2754491017964072,
            "unobservable_qty_pct": 0.2275449101796407,
            "unclear_qty_pct": 0.5029940119760479,
            "retail_notional_pct": 0.07730101539469375,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.41946446118571895,
            "ambiguous_notional_pct": 0.275262037340321,
            "unobservable_notional_pct": 0.2279724860792663,
            "unclear_notional_pct": 0.5032345234195873,
            "run_retail_pct": 0.2,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.4666666666666667,
            "avg_trade_size": 642.7368421052631,
            "avg_run_notional": 814.1333333333333,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5333333333333333,
            "na_confidence_pct": 0.4666666666666667,
            "avg_feature_coverage": 0.7833333333333333,
            "observable_run_pct": 0.8666666666666667,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.27586206896551724,
            "mixed_pct": 0.06896551724137931,
            "instit_pct": 0.20689655172413793,
            "ambiguous_pct": 0.3793103448275862,
            "unobservable_pct": 0.06896551724137931,
            "unclear_pct": 0.4482758620689655,
            "retail_qty_pct": 0.12617159336697908,
            "mixed_qty_pct": 0.05118961788031723,
            "instit_qty_pct": 0.37635183850036047,
            "ambiguous_qty_pct": 0.4102379235760634,
            "unobservable_qty_pct": 0.03604902667627974,
            "unclear_qty_pct": 0.44628695025234316,
            "retail_notional_pct": 0.1267975684069533,
            "mixed_notional_pct": 0.05100163381857255,
            "instit_notional_pct": 0.37750040477487157,
            "ambiguous_notional_pct": 0.40797627283298254,
            "unobservable_notional_pct": 0.03672412016662006,
            "unclear_notional_pct": 0.4447003929996026,
            "run_retail_pct": 0.29411764705882354,
            "run_mixed_pct": 0.11764705882352941,
            "run_instit_pct": 0.11764705882352941,
            "run_unclear_pct": 0.47058823529411764,
            "avg_trade_size": 937.0896551724138,
            "avg_run_notional": 1598.5647058823529,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4117647058823529,
            "na_confidence_pct": 0.5882352941176471,
            "avg_feature_coverage": 0.7999999999999999,
            "observable_run_pct": 0.9411764705882353,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2916666666666667,
            "mixed_pct": 0.058333333333333334,
            "instit_pct": 0.15833333333333333,
            "ambiguous_pct": 0.48333333333333334,
            "unobservable_pct": 0.008333333333333333,
            "unclear_pct": 0.4916666666666667,
            "retail_qty_pct": 0.07209029922266,
            "mixed_qty_pct": 0.03612501331061655,
            "instit_qty_pct": 0.28519327015227347,
            "ambiguous_qty_pct": 0.5811681397082313,
            "unobservable_qty_pct": 0.02542327760621872,
            "unclear_qty_pct": 0.6065914173144501,
            "retail_notional_pct": 0.07107037807874836,
            "mixed_notional_pct": 0.03558973984621037,
            "instit_notional_pct": 0.2872982711163198,
            "ambiguous_notional_pct": 0.579898880657117,
            "unobservable_notional_pct": 0.02614273030160447,
            "unclear_notional_pct": 0.6060416109587216,
            "run_retail_pct": 0.43037974683544306,
            "run_mixed_pct": 0.0759493670886076,
            "run_instit_pct": 0.11392405063291139,
            "run_unclear_pct": 0.379746835443038,
            "avg_trade_size": 2100.4883333333332,
            "avg_run_notional": 3190.615189873418,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5443037974683544,
            "na_confidence_pct": 0.45569620253164556,
            "avg_feature_coverage": 0.79873417721519,
            "observable_run_pct": 0.9873417721518988,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.13513513513513514,
            "mixed_pct": 0.08108108108108109,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.21621621621621623,
            "unobservable_pct": 0.5675675675675675,
            "unclear_pct": 0.7837837837837838,
            "retail_qty_pct": 0.06439994854864298,
            "mixed_qty_pct": 0.1282710914833712,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.17865054524146406,
            "unobservable_qty_pct": 0.6286784147265218,
            "unclear_qty_pct": 0.8073289599679858,
            "retail_notional_pct": 0.06441331999428326,
            "mixed_notional_pct": 0.12826925825353724,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.17864799199656997,
            "unobservable_notional_pct": 0.6286694297556096,
            "unclear_notional_pct": 0.8073174217521796,
            "run_retail_pct": 0.22727272727272727,
            "run_mixed_pct": 0.13636363636363635,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.6363636363636364,
            "avg_trade_size": 378.2162162162162,
            "avg_run_notional": 636.0909090909091,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.22727272727272727,
            "na_confidence_pct": 0.7727272727272727,
            "avg_feature_coverage": 0.7272727272727273,
            "observable_run_pct": 0.5909090909090908,
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
            "retail_pct": 0.3094688221709007,
            "mixed_pct": 0.050808314087759814,
            "instit_pct": 0.4665127020785219,
            "ambiguous_pct": 0.17321016166281755,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17321016166281755,
            "retail_qty_pct": 0.07722001325381048,
            "mixed_qty_pct": 0.05995692511597084,
            "instit_qty_pct": 0.6335984095427435,
            "ambiguous_qty_pct": 0.22922465208747514,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.22922465208747514,
            "retail_notional_pct": 0.07752733526542636,
            "mixed_notional_pct": 0.06004709705275989,
            "instit_notional_pct": 0.6328232310362338,
            "ambiguous_notional_pct": 0.22960233664557986,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.22960233664557986,
            "run_retail_pct": 0.5341880341880342,
            "run_mixed_pct": 0.0641025641025641,
            "run_instit_pct": 0.21367521367521367,
            "run_unclear_pct": 0.18803418803418803,
            "avg_trade_size": 3158.433025404157,
            "avg_run_notional": 5844.4508547008545,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.09401709401709402,
            "medium_confidence_pct": 0.10683760683760683,
            "low_confidence_pct": 0.5470085470085471,
            "na_confidence_pct": 0.25213675213675213,
            "avg_feature_coverage": 0.851282051282051,
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
            "retail_pct": 0.16666666666666666,
            "mixed_pct": 0.08333333333333333,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25,
            "retail_qty_pct": 0.007768361581920904,
            "mixed_qty_pct": 0.041666666666666664,
            "instit_qty_pct": 0.6546610169491526,
            "ambiguous_qty_pct": 0.2959039548022599,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2959039548022599,
            "retail_notional_pct": 0.007812890269854432,
            "mixed_notional_pct": 0.040083523993166226,
            "instit_notional_pct": 0.6534853283512004,
            "ambiguous_notional_pct": 0.29861825738577896,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.29861825738577896,
            "run_retail_pct": 0.18181818181818182,
            "run_mixed_pct": 0.09090909090909091,
            "run_instit_pct": 0.45454545454545453,
            "run_unclear_pct": 0.2727272727272727,
            "avg_trade_size": 4170.458333333333,
            "avg_run_notional": 4549.590909090909,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6363636363636364,
            "na_confidence_pct": 0.36363636363636365,
            "avg_feature_coverage": 0.8363636363636363,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2288329519450801,
            "mixed_pct": 0.07093821510297482,
            "instit_pct": 0.36384439359267734,
            "ambiguous_pct": 0.33638443935926776,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.33638443935926776,
            "retail_qty_pct": 0.050724637681159424,
            "mixed_qty_pct": 0.021286231884057972,
            "instit_qty_pct": 0.6211881038647343,
            "ambiguous_qty_pct": 0.3068010265700483,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3068010265700483,
            "retail_notional_pct": 0.0497580392531044,
            "mixed_notional_pct": 0.02098024274063298,
            "instit_notional_pct": 0.6209910478662709,
            "ambiguous_notional_pct": 0.3082706701399917,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3082706701399917,
            "run_retail_pct": 0.36981132075471695,
            "run_mixed_pct": 0.04905660377358491,
            "run_instit_pct": 0.23018867924528302,
            "run_unclear_pct": 0.35094339622641507,
            "avg_trade_size": 2626.094965675057,
            "avg_run_notional": 4330.579245283019,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.007547169811320755,
            "medium_confidence_pct": 0.2,
            "low_confidence_pct": 0.39245283018867927,
            "na_confidence_pct": 0.4,
            "avg_feature_coverage": 0.8364150943396226,
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
            "retail_pct": 0.2749827705031013,
            "mixed_pct": 0.19538249483115094,
            "instit_pct": 0.33563059958649205,
            "ambiguous_pct": 0.19400413507925568,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19400413507925568,
            "retail_qty_pct": 0.06190689441920969,
            "mixed_qty_pct": 0.12268355618109313,
            "instit_qty_pct": 0.5615123792463694,
            "ambiguous_qty_pct": 0.2538971701533278,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2538971701533278,
            "retail_notional_pct": 0.06201263215728376,
            "mixed_notional_pct": 0.12328179351259146,
            "instit_notional_pct": 0.5613170323170177,
            "ambiguous_notional_pct": 0.2533885420131071,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2533885420131071,
            "run_retail_pct": 0.5828173374613003,
            "run_mixed_pct": 0.16718266253869968,
            "run_instit_pct": 0.12074303405572756,
            "run_unclear_pct": 0.12925696594427244,
            "avg_trade_size": 1610.6214679531358,
            "avg_run_notional": 3617.6652476780187,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.12151702786377709,
            "medium_confidence_pct": 0.4295665634674923,
            "low_confidence_pct": 0.15247678018575853,
            "na_confidence_pct": 0.2964396284829721,
            "avg_feature_coverage": 0.8708204334365325,
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
            "retail_pct": 0.2,
            "mixed_pct": 0.05454545454545454,
            "instit_pct": 0.45454545454545453,
            "ambiguous_pct": 0.21818181818181817,
            "unobservable_pct": 0.07272727272727272,
            "unclear_pct": 0.2909090909090909,
            "retail_qty_pct": 0.1116584564860427,
            "mixed_qty_pct": 0.17323481116584566,
            "instit_qty_pct": 0.5172413793103449,
            "ambiguous_qty_pct": 0.16666666666666666,
            "unobservable_qty_pct": 0.031198686371100164,
            "unclear_qty_pct": 0.1978653530377668,
            "retail_notional_pct": 0.11173382559190212,
            "mixed_notional_pct": 0.17311093002500097,
            "instit_notional_pct": 0.5183959466276408,
            "ambiguous_notional_pct": 0.16589335506366654,
            "unobservable_notional_pct": 0.03086594269178959,
            "unclear_notional_pct": 0.19675929775545614,
            "run_retail_pct": 0.2682926829268293,
            "run_mixed_pct": 0.07317073170731707,
            "run_instit_pct": 0.34146341463414637,
            "run_unclear_pct": 0.3170731707317073,
            "avg_trade_size": 1639.9363636363637,
            "avg_run_notional": 2199.9146341463415,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6097560975609756,
            "na_confidence_pct": 0.3902439024390244,
            "avg_feature_coverage": 0.8036585365853659,
            "observable_run_pct": 0.9512195121951219,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.17543859649122806,
            "mixed_pct": 0.10526315789473684,
            "instit_pct": 0.2982456140350877,
            "ambiguous_pct": 0.38596491228070173,
            "unobservable_pct": 0.03508771929824561,
            "unclear_pct": 0.42105263157894735,
            "retail_qty_pct": 0.061259217243335225,
            "mixed_qty_pct": 0.11939875212705615,
            "instit_qty_pct": 0.44781622234827,
            "ambiguous_qty_pct": 0.35734543391945545,
            "unobservable_qty_pct": 0.014180374361883154,
            "unclear_qty_pct": 0.3715258082813386,
            "retail_notional_pct": 0.06102458558870592,
            "mixed_notional_pct": 0.11973631104533836,
            "instit_notional_pct": 0.4493818537802955,
            "ambiguous_notional_pct": 0.3555736207997115,
            "unobservable_notional_pct": 0.014283628785948802,
            "unclear_notional_pct": 0.3698572495856603,
            "run_retail_pct": 0.21212121212121213,
            "run_mixed_pct": 0.18181818181818182,
            "run_instit_pct": 0.18181818181818182,
            "run_unclear_pct": 0.4242424242424242,
            "avg_trade_size": 1225.7929824561404,
            "avg_run_notional": 2117.2787878787876,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3939393939393939,
            "na_confidence_pct": 0.6060606060606061,
            "avg_feature_coverage": 0.8196969696969698,
            "observable_run_pct": 0.9696969696969697,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2342857142857143,
            "mixed_pct": 0.04,
            "instit_pct": 0.34285714285714286,
            "ambiguous_pct": 0.3657142857142857,
            "unobservable_pct": 0.017142857142857144,
            "unclear_pct": 0.38285714285714284,
            "retail_qty_pct": 0.08614869500782171,
            "mixed_qty_pct": 0.025861990101636614,
            "instit_qty_pct": 0.4421878859401158,
            "ambiguous_qty_pct": 0.4286027938633806,
            "unobservable_qty_pct": 0.01719863508704522,
            "unclear_qty_pct": 0.44580142895042585,
            "retail_notional_pct": 0.08566872727112752,
            "mixed_notional_pct": 0.02546980168631753,
            "instit_notional_pct": 0.44549823181553555,
            "ambiguous_notional_pct": 0.4259496184408968,
            "unobservable_notional_pct": 0.017413620786122536,
            "unclear_notional_pct": 0.4433632392270193,
            "run_retail_pct": 0.39361702127659576,
            "run_mixed_pct": 0.05319148936170213,
            "run_instit_pct": 0.19680851063829788,
            "run_unclear_pct": 0.35638297872340424,
            "avg_trade_size": 2143.199142857143,
            "avg_run_notional": 3989.9984042553187,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.03723404255319149,
            "low_confidence_pct": 0.5531914893617021,
            "na_confidence_pct": 0.4095744680851064,
            "avg_feature_coverage": 0.8170212765957445,
            "observable_run_pct": 0.9840425531914894,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1282051282051282,
            "mixed_pct": 0.07692307692307693,
            "instit_pct": 0.02564102564102564,
            "ambiguous_pct": 0.20512820512820512,
            "unobservable_pct": 0.5641025641025641,
            "unclear_pct": 0.7692307692307692,
            "retail_qty_pct": 0.060104442473272464,
            "mixed_qty_pct": 0.11971535090936981,
            "instit_qty_pct": 0.06669378880744836,
            "ambiguous_qty_pct": 0.1667344720186209,
            "unobservable_qty_pct": 0.5867519457912884,
            "unclear_qty_pct": 0.7534864178099093,
            "retail_notional_pct": 0.06011697934520911,
            "mixed_notional_pct": 0.11971375407660347,
            "instit_notional_pct": 0.06669289920702143,
            "ambiguous_notional_pct": 0.16673224801755357,
            "unobservable_notional_pct": 0.5867441193536125,
            "unclear_notional_pct": 0.7534763673711661,
            "run_retail_pct": 0.20833333333333334,
            "run_mixed_pct": 0.125,
            "run_instit_pct": 0.041666666666666664,
            "run_unclear_pct": 0.625,
            "avg_trade_size": 384.4641025641026,
            "avg_run_notional": 624.7541666666667,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.25,
            "na_confidence_pct": 0.75,
            "avg_feature_coverage": 0.71875,
            "observable_run_pct": 0.5833333333333333,
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
            "retail_pct": 0.2925801011804384,
            "mixed_pct": 0.11973018549747048,
            "instit_pct": 0.3760539629005059,
            "ambiguous_pct": 0.21163575042158517,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21163575042158517,
            "retail_qty_pct": 0.06805569319195323,
            "mixed_qty_pct": 0.1435809136854623,
            "instit_qty_pct": 0.5094329105143197,
            "ambiguous_qty_pct": 0.2789304826082648,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2789304826082648,
            "retail_notional_pct": 0.06787625639815752,
            "mixed_notional_pct": 0.1453858972385736,
            "instit_notional_pct": 0.5104803031811977,
            "ambiguous_notional_pct": 0.27625754318207113,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.27625754318207113,
            "run_retail_pct": 0.5197472353870458,
            "run_mixed_pct": 0.11532385466034756,
            "run_instit_pct": 0.18325434439178515,
            "run_unclear_pct": 0.18167456556082148,
            "avg_trade_size": 3166.4232715008434,
            "avg_run_notional": 5932.666666666667,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.07740916271721959,
            "medium_confidence_pct": 0.20695102685624012,
            "low_confidence_pct": 0.4186413902053712,
            "na_confidence_pct": 0.296998420221169,
            "avg_feature_coverage": 0.8573459715639811,
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
            "retail_pct": 0.0625,
            "mixed_pct": 0.03125,
            "instit_pct": 0.53125,
            "ambiguous_pct": 0.375,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.375,
            "retail_qty_pct": 0.0005826579797658775,
            "mixed_qty_pct": 0.0031251655278351606,
            "instit_qty_pct": 0.9408337306001378,
            "ambiguous_qty_pct": 0.055458445892261246,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.055458445892261246,
            "retail_notional_pct": 0.0005611330007197141,
            "mixed_notional_pct": 0.0028788562645620116,
            "instit_notional_pct": 0.9413931741255976,
            "ambiguous_notional_pct": 0.05516683660912063,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.05516683660912063,
            "run_retail_pct": 0.07692307692307693,
            "run_mixed_pct": 0.038461538461538464,
            "run_instit_pct": 0.46153846153846156,
            "run_unclear_pct": 0.4230769230769231,
            "avg_trade_size": 21775.140625,
            "avg_run_notional": 26800.173076923078,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5384615384615384,
            "na_confidence_pct": 0.46153846153846156,
            "avg_feature_coverage": 0.8384615384615386,
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
            "retail_pct": 0.317650984317651,
            "mixed_pct": 0.18351685018351685,
            "instit_pct": 0.31614948281614946,
            "ambiguous_pct": 0.1798465131798465,
            "unobservable_pct": 0.0028361695028361693,
            "unclear_pct": 0.18268268268268267,
            "retail_qty_pct": 0.06710405272894532,
            "mixed_qty_pct": 0.131215818683596,
            "instit_qty_pct": 0.5355081327523984,
            "ambiguous_qty_pct": 0.2616734565966782,
            "unobservable_qty_pct": 0.004498539238382143,
            "unclear_qty_pct": 0.26617199583506035,
            "retail_notional_pct": 0.06738300621504653,
            "mixed_notional_pct": 0.1318896816040262,
            "instit_notional_pct": 0.5349897126588345,
            "ambiguous_notional_pct": 0.26118946989930253,
            "unobservable_notional_pct": 0.004548129622790185,
            "unclear_notional_pct": 0.2657375995220927,
            "run_retail_pct": 0.6267893660531697,
            "run_mixed_pct": 0.1523517382413088,
            "run_instit_pct": 0.10497614178595774,
            "run_unclear_pct": 0.11588275391956374,
            "avg_trade_size": 1674.5233566900233,
            "avg_run_notional": 3420.9587593728697,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.21847307430129517,
            "medium_confidence_pct": 0.39536468984321743,
            "low_confidence_pct": 0.11792774369461487,
            "na_confidence_pct": 0.26823449216087253,
            "avg_feature_coverage": 0.8666155419222904,
            "observable_run_pct": 0.9993183367416496,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23922413793103448,
            "mixed_pct": 0.09375,
            "instit_pct": 0.2995689655172414,
            "ambiguous_pct": 0.36637931034482757,
            "unobservable_pct": 0.0010775862068965517,
            "unclear_pct": 0.36745689655172414,
            "retail_qty_pct": 0.05966617754952311,
            "mixed_qty_pct": 0.03338224504768892,
            "instit_qty_pct": 0.4968085106382979,
            "ambiguous_qty_pct": 0.4088591342626559,
            "unobservable_qty_pct": 0.0012839325018341892,
            "unclear_qty_pct": 0.4101430667644901,
            "retail_notional_pct": 0.05603513522702873,
            "mixed_notional_pct": 0.0314659534917949,
            "instit_notional_pct": 0.5034818043063429,
            "ambiguous_notional_pct": 0.4080227049690757,
            "unobservable_notional_pct": 0.0009944020057577505,
            "unclear_notional_pct": 0.40901710697483346,
            "run_retail_pct": 0.398876404494382,
            "run_mixed_pct": 0.07303370786516854,
            "run_instit_pct": 0.1891385767790262,
            "run_unclear_pct": 0.3389513108614232,
            "avg_trade_size": 2313.5980603448274,
            "avg_run_notional": 4020.6348314606744,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.003745318352059925,
            "medium_confidence_pct": 0.24344569288389514,
            "low_confidence_pct": 0.3408239700374532,
            "na_confidence_pct": 0.41198501872659177,
            "avg_feature_coverage": 0.8370786516853933,
            "observable_run_pct": 0.99812734082397,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24493243243243243,
            "mixed_pct": 0.0777027027027027,
            "instit_pct": 0.31841216216216217,
            "ambiguous_pct": 0.34459459459459457,
            "unobservable_pct": 0.014358108108108109,
            "unclear_pct": 0.3589527027027027,
            "retail_qty_pct": 0.08372453626457445,
            "mixed_qty_pct": 0.060192143156436846,
            "instit_qty_pct": 0.44865351756461436,
            "ambiguous_qty_pct": 0.39178335846566487,
            "unobservable_qty_pct": 0.01564644454870947,
            "unclear_qty_pct": 0.4074298030143743,
            "retail_notional_pct": 0.08401112523265156,
            "mixed_notional_pct": 0.0606281105168666,
            "instit_notional_pct": 0.45033214115392933,
            "ambiguous_notional_pct": 0.38987612377308317,
            "unobservable_notional_pct": 0.015152499323469371,
            "unclear_notional_pct": 0.4050286230965525,
            "run_retail_pct": 0.4158878504672897,
            "run_mixed_pct": 0.06853582554517133,
            "run_instit_pct": 0.1822429906542056,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 2410.6996621621624,
            "avg_run_notional": 4445.900934579439,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.06386292834890965,
            "medium_confidence_pct": 0.19158878504672897,
            "low_confidence_pct": 0.3426791277258567,
            "na_confidence_pct": 0.40186915887850466,
            "avg_feature_coverage": 0.824532710280374,
            "observable_run_pct": 0.9890965732087228,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6013071895424836,
            "mixed_pct": 0.10784313725490197,
            "instit_pct": 0.12745098039215685,
            "ambiguous_pct": 0.1568627450980392,
            "unobservable_pct": 0.006535947712418301,
            "unclear_pct": 0.16339869281045752,
            "retail_qty_pct": 0.0811310494834149,
            "mixed_qty_pct": 0.08863512778684067,
            "instit_qty_pct": 0.4059815116911365,
            "ambiguous_qty_pct": 0.41881457313757475,
            "unobservable_qty_pct": 0.005437737901033171,
            "unclear_qty_pct": 0.42425231103860794,
            "retail_notional_pct": 0.08130115705061954,
            "mixed_notional_pct": 0.09002176081978232,
            "instit_notional_pct": 0.40485324331699774,
            "ambiguous_notional_pct": 0.41840940397271953,
            "unobservable_notional_pct": 0.005414434839880839,
            "unclear_notional_pct": 0.4238238388126004,
            "run_retail_pct": 0.7003891050583657,
            "run_mixed_pct": 0.11284046692607004,
            "run_instit_pct": 0.05058365758754864,
            "run_unclear_pct": 0.13618677042801558,
            "avg_trade_size": 602.3598039215685,
            "avg_run_notional": 717.2066147859921,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6459143968871596,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.10505836575875487,
            "na_confidence_pct": 0.2490272373540856,
            "avg_feature_coverage": 0.8396887159533072,
            "observable_run_pct": 0.9961089494163424,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.18404907975460122,
            "mixed_pct": 0.06134969325153374,
            "instit_pct": 0.294478527607362,
            "ambiguous_pct": 0.43558282208588955,
            "unobservable_pct": 0.024539877300613498,
            "unclear_pct": 0.4601226993865031,
            "retail_qty_pct": 0.08537693006357856,
            "mixed_qty_pct": 0.0820466242809567,
            "instit_qty_pct": 0.368755676657584,
            "ambiguous_qty_pct": 0.45231607629427795,
            "unobservable_qty_pct": 0.011504692703602786,
            "unclear_qty_pct": 0.4638207689978807,
            "retail_notional_pct": 0.08491795804081347,
            "mixed_notional_pct": 0.07963555093109488,
            "instit_notional_pct": 0.3672334878500739,
            "ambiguous_notional_pct": 0.45736370668708703,
            "unobservable_notional_pct": 0.010849296490930666,
            "unclear_notional_pct": 0.46821300317801773,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.05,
            "run_instit_pct": 0.225,
            "run_unclear_pct": 0.475,
            "avg_trade_size": 1574.2730061349694,
            "avg_run_notional": 2138.3875,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.475,
            "na_confidence_pct": 0.525,
            "avg_feature_coverage": 0.8241666666666665,
            "observable_run_pct": 0.9833333333333333,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.11904761904761904,
            "mixed_pct": 0.07142857142857142,
            "instit_pct": 0.023809523809523808,
            "ambiguous_pct": 0.19047619047619047,
            "unobservable_pct": 0.5952380952380952,
            "unclear_pct": 0.7857142857142857,
            "retail_qty_pct": 0.05970623894420925,
            "mixed_qty_pct": 0.11892221360947137,
            "instit_qty_pct": 0.06625192958744923,
            "ambiguous_qty_pct": 0.16562982396862308,
            "unobservable_qty_pct": 0.589489793890247,
            "unclear_qty_pct": 0.7551196178588702,
            "retail_notional_pct": 0.059718698034331295,
            "mixed_notional_pct": 0.1189206378651261,
            "instit_notional_pct": 0.06625105173544629,
            "ambiguous_notional_pct": 0.16562762933861574,
            "unobservable_notional_pct": 0.5894819830264806,
            "unclear_notional_pct": 0.7551096123650963,
            "run_retail_pct": 0.2,
            "run_mixed_pct": 0.12,
            "run_instit_pct": 0.04,
            "run_unclear_pct": 0.64,
            "avg_trade_size": 359.3833333333333,
            "avg_run_notional": 603.764,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.24,
            "na_confidence_pct": 0.76,
            "avg_feature_coverage": 0.7120000000000002,
            "observable_run_pct": 0.56,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "peer_activity_enabled": true,
      "peer_activity_reason": null,
      "recent_trades": [
        {
          "trade_id": "BMLL-93",
          "timestamp": "2026-04-06T08:58:17.963100",
          "price": 0.22,
          "size": 2000.0,
          "notional": 440.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1300,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-92",
          "timestamp": "2026-04-06T08:53:45.652500",
          "price": 0.22,
          "size": 500.0,
          "notional": 110.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1299,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-91",
          "timestamp": "2026-04-06T08:22:42.863500",
          "price": 0.22,
          "size": 10000.0,
          "notional": 2200.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1298,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-90",
          "timestamp": "2026-04-06T08:12:45.673200",
          "price": 0.22,
          "size": 800.0,
          "notional": 176.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1297,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-89",
          "timestamp": "2026-04-06T08:12:33.153800",
          "price": 0.22,
          "size": 700.0,
          "notional": 154.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1296,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-88",
          "timestamp": "2026-04-06T07:45:13.423400",
          "price": 0.22,
          "size": 19100.0,
          "notional": 4202.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1295,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-87",
          "timestamp": "2026-04-06T07:43:46.265400",
          "price": 0.22,
          "size": 30000.0,
          "notional": 6600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1294,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-86",
          "timestamp": "2026-04-06T07:39:17.185500",
          "price": 0.22,
          "size": 15000.0,
          "notional": 3300.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1293,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-85",
          "timestamp": "2026-04-06T06:46:52.386700",
          "price": 0.22,
          "size": 18000.0,
          "notional": 3960.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1292,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-84",
          "timestamp": "2026-04-06T06:46:52.386700",
          "price": 0.22,
          "size": 10000.0,
          "notional": 2200.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1292,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-83",
          "timestamp": "2026-04-06T06:46:52.386700",
          "price": 0.22,
          "size": 30000.0,
          "notional": 6600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1292,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-82",
          "timestamp": "2026-04-06T06:46:52.386700",
          "price": 0.22,
          "size": 35200.0,
          "notional": 7744.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1292,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-81",
          "timestamp": "2026-04-06T06:46:52.386600",
          "price": 0.22,
          "size": 2700.0,
          "notional": 594.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1292,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-80",
          "timestamp": "2026-04-06T06:46:16.368700",
          "price": 0.22,
          "size": 2200.0,
          "notional": 484.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1291,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-79",
          "timestamp": "2026-04-06T06:45:46.366600",
          "price": 0.22,
          "size": 3000.0,
          "notional": 660.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1290,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-78",
          "timestamp": "2026-04-06T06:45:06.341700",
          "price": 0.22,
          "size": 3000.0,
          "notional": 660.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1289,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-77",
          "timestamp": "2026-04-06T06:44:24.297300",
          "price": 0.22,
          "size": 2400.0,
          "notional": 528.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1288,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-76",
          "timestamp": "2026-04-06T06:43:49.276500",
          "price": 0.22,
          "size": 1400.0,
          "notional": 308.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 1287,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-75",
          "timestamp": "2026-04-06T06:43:28.263900",
          "price": 0.22,
          "size": 100.0,
          "notional": 22.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 1286,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-74",
          "timestamp": "2026-04-06T05:48:06.257900",
          "price": 0.22,
          "size": 54000.0,
          "notional": 11880.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1285,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-73",
          "timestamp": "2026-04-06T05:48:06.257900",
          "price": 0.22,
          "size": 30000.0,
          "notional": 6600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1285,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-72",
          "timestamp": "2026-04-06T05:48:06.257900",
          "price": 0.22,
          "size": 24000.0,
          "notional": 5280.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1285,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-71",
          "timestamp": "2026-04-06T05:45:28.211300",
          "price": 0.22,
          "size": 1000.0,
          "notional": 220.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 1284,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-70",
          "timestamp": "2026-04-06T05:45:28.211300",
          "price": 0.22,
          "size": 1000.0,
          "notional": 220.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 1284,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-69",
          "timestamp": "2026-04-06T05:45:28.211300",
          "price": 0.22,
          "size": 15100.0,
          "notional": 3322.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 1284,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-68",
          "timestamp": "2026-04-06T05:45:28.211200",
          "price": 0.22,
          "size": 20000.0,
          "notional": 4400.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 1284,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-67",
          "timestamp": "2026-04-06T05:45:28.211200",
          "price": 0.22,
          "size": 30000.0,
          "notional": 6600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 1284,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-66",
          "timestamp": "2026-04-06T05:45:28.211200",
          "price": 0.22,
          "size": 10000.0,
          "notional": 2200.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 1284,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-65",
          "timestamp": "2026-04-06T05:45:28.211200",
          "price": 0.22,
          "size": 31000.0,
          "notional": 6820.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 1284,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-64",
          "timestamp": "2026-04-06T05:45:28.211200",
          "price": 0.22,
          "size": 5000.0,
          "notional": 1100.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 1284,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
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
      "total_trades": 1185,
      "price_moving_trades": 150,
      "pct_price_moving": 12.658227848101266,
      "all_movers": {
        "count": 150,
        "avg_size": 2865.6566666666668,
        "median_size": 712.5,
        "retail_count": 83,
        "mixed_count": 19,
        "institutional_count": 26,
        "ambiguous_count": 22,
        "unobservable_count": 0,
        "retail_pct": 55.333333333333336,
        "mixed_pct": 12.666666666666668,
        "instit_pct": 17.333333333333336,
        "unclear_pct": 14.666666666666666
      },
      "positive_movers": {
        "count": 76,
        "avg_size": 1869.9013157894738,
        "median_size": 118.75,
        "retail_count": 54,
        "mixed_count": 10,
        "institutional_count": 7,
        "ambiguous_count": 5,
        "unobservable_count": 0,
        "retail_pct": 71.05263157894737,
        "mixed_pct": 13.157894736842104,
        "instit_pct": 9.210526315789473,
        "unclear_pct": 6.578947368421052
      },
      "negative_movers": {
        "count": 74,
        "avg_size": 3888.324324324324,
        "median_size": 2250.0,
        "retail_count": 29,
        "mixed_count": 9,
        "institutional_count": 19,
        "ambiguous_count": 17,
        "unobservable_count": 0,
        "retail_pct": 39.189189189189186,
        "mixed_pct": 12.162162162162163,
        "instit_pct": 25.675675675675674,
        "unclear_pct": 22.972972972972975
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
        "n_days_short_data": 22,
        "window_days": 21
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
            "avg_short_ratio": 0.006038795776146891,
            "max_short_ratio": 0.03807390817469205,
            "interpretation": "Low short interest"
          }
        },
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.006612163267179861,
            "max_short_ratio": 0.07371154614462645,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": false,
        "correlation": null,
        "interpretation": ""
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
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
        "interpretation": "Shorts covering significantly (-100% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.006038795776146891,
          "max_short_ratio": 0.03807390817469205,
          "is_target": true
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.705697209154375e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "S69",
          "avg_short_ratio": 0.0001144289657517006,
          "max_short_ratio": 0.02815622161671208,
          "is_target": false
        },
        {
          "ticker": "S71",
          "avg_short_ratio": 0.0003717450485101468,
          "max_short_ratio": 0.05687909469922573,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.0032722795488666313,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0036202968406150115,
          "max_short_ratio": 1.0,
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
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        },
        "1W": {
          "opening": 3.0351296462226494e-05,
          "continuous": 0.9996661357389155,
          "closing": 0.0,
          "auctions": 0.0003338642610844914,
          "other": 0.0
        },
        "2W": {
          "opening": 0.016373673549074638,
          "continuous": 0.9834282172255072,
          "closing": 0.0,
          "auctions": 0.016571782774492734,
          "other": 0.0
        },
        "1M": {
          "opening": 0.008864114193535444,
          "continuous": 0.979078283144514,
          "closing": 0.008989092496778662,
          "auctions": 0.02092171685548608,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.19200437776908827,
        "1W": 0.28628381994737395,
        "2W": 0.31148084187055936,
        "1M": 0.27346145462921734
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0019
        },
        {
          "time": "09:00",
          "avg_share": 0.0743
        },
        {
          "time": "09:30",
          "avg_share": 0.0582
        },
        {
          "time": "10:00",
          "avg_share": 0.0466
        },
        {
          "time": "10:30",
          "avg_share": 0.0557
        },
        {
          "time": "11:00",
          "avg_share": 0.099
        },
        {
          "time": "11:30",
          "avg_share": 0.0695
        },
        {
          "time": "12:30",
          "avg_share": 0.0017
        },
        {
          "time": "13:00",
          "avg_share": 0.0345
        },
        {
          "time": "13:30",
          "avg_share": 0.0689
        },
        {
          "time": "14:00",
          "avg_share": 0.0387
        },
        {
          "time": "14:30",
          "avg_share": 0.0812
        },
        {
          "time": "15:00",
          "avg_share": 0.1687
        },
        {
          "time": "15:30",
          "avg_share": 0.0686
        },
        {
          "time": "16:00",
          "avg_share": 0.0451
        },
        {
          "time": "16:30",
          "avg_share": 0.0544
        },
        {
          "time": "17:00",
          "avg_share": 0.0328
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.6957626043981495,
          "hhi": 0.227687236552766,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.9948693991576976,
          "hhi": 0.19922906636882562,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.719261985519046,
          "hhi": 0.7825908187622324,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 3.317128500668925,
          "hhi": 0.42195477642977786,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 3.2818304047792277,
          "hhi": 0.5500403391378744,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 6.274689631091161,
          "hhi": 0.8746836899763305,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 0.17702248185519562,
          "hhi": 0.4768537923706675,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "S69",
          "auctions_pct": 3.9169161425365897,
          "hhi": 0.24155158982181674,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "S71",
          "auctions_pct": 1.5421992219643725,
          "hhi": 0.4309380681720966,
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
