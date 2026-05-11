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
      "ticker": "CRPU",
      "name": "Sasseur Reit",
      "marketCap": 825508995.96,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "ODBU",
      "name": "UtdHampshReitUSD",
      "marketCap": 309587528.77500004,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "D5IU",
      "name": "LANDMARK REIT",
      "marketCap": 53877669.853,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "BMGU",
      "name": "BHG Retail Reit",
      "marketCap": 231223157.445,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "AU8U",
      "name": "CapLand China T",
      "marketCap": 1169849784.4,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "JYEU",
      "name": "Lendlease Reit",
      "marketCap": 1380966532.7099998,
      "sector": "REIT - Diversified",
      "industry": "Real Estate"
    },
    {
      "ticker": "AJBU",
      "name": "Keppel DC Reit",
      "marketCap": 4883769648.63,
      "sector": "REIT - Office",
      "industry": "Real Estate"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "CRPU",
    "company": "Sasseur Reit",
    "asof_date": "2026-04-23",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "825.5M",
    "market_cap_category": "small",
    "universe_total": 558,
    "peers_count": 6,
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
          "score_pca": 76.16487455197132,
          "score_pca_percentile": 76.16487455197132,
          "rank_pca": 134,
          "total": 558,
          "adv_notional_sgd": 399696.0,
          "adv_volume_shares": 605600.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.001324987832417508,
          "votes": 391.0,
          "trades": 391.0,
          "spread_pct": 0.007546964433115941,
          "spread_ticks": 1.0,
          "amihud": 3.7341812613407196e-08,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5109075930476993,
          "loadings": {
            "log_adv": 0.5575995091425805,
            "log_trades": 0.5107044794590626,
            "log_turnover": 0.5147553438779644,
            "neg_spread": 0.3681520733975362,
            "neg_amihud": 0.049046406544740115,
            "neg_vol": -0.15921419180344035
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 391323.7027261098,
          "peer_median_score_pca": 72.58064516129032,
          "peer_median_trades": 550.0,
          "peer_median_volatility": 0.08028356249235596,
          "peer_median_spread_pct": 0.009156345241919302,
          "peer_median_spread_ticks": 1.000174672489083,
          "peer_median_amihud": 1.2418297888453624e-10,
          "peer_median_turnover_ratio": 0.0006943047457794354,
          "target_vs_peer": {
            "score_pca_delta": 3.58,
            "adv_delta_pct": 2.1,
            "trades_delta_pct": -28.91,
            "volatility_delta_pct": -78.57,
            "spread_pct_delta_pct": 17.58,
            "spread_ticks_delta_pct": -0.02,
            "amihud_delta_pct": -29969.99,
            "turnover_ratio_delta_pct": 90.84
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 76.16487455197132,
            "rank_pca": 134,
            "adv": 399696.0,
            "trades": 391.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.007546964433115941,
            "spread_ticks": 1.0,
            "amihud": 3.7341812613407196e-08,
            "turnover_ratio": 0.001324987832417508,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.59139784946237,
            "rank_pca": 193,
            "adv": 74699.90545221961,
            "trades": 129.0,
            "volatility": 0.09123144800174565,
            "spread_pct": 0.00956937799043063,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0001890822289632458,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 41.21863799283154,
            "rank_pca": 329,
            "adv": 11830.0,
            "trades": 6.0,
            "volatility": 0.0,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0005332195251454535,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 15.232974910394265,
            "rank_pca": 474,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.12435233160621756,
            "spread_ticks": 10.666666666666666,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 79.56989247311827,
            "rank_pca": 115,
            "adv": 707947.5,
            "trades": 971.0,
            "volatility": 0.06933567698296626,
            "spread_pct": 0.007347102686027575,
            "spread_ticks": 1.0100376411543288,
            "amihud": 1.0386280305348295e-08,
            "turnover_ratio": 0.0008553899664134171,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 90.68100358422939,
            "rank_pca": 53,
            "adv": 5696237.999999999,
            "trades": 1460.0,
            "volatility": 0.24980329284859662,
            "spread_pct": 0.008743312493407974,
            "spread_ticks": 1.0,
            "amihud": 1.5265605429255425e-09,
            "turnover_ratio": 0.0118646103236948,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 96.95340501792114,
            "rank_pca": 18,
            "adv": 33977356.0,
            "trades": 4338.0,
            "volatility": 0.20241978158123536,
            "spread_pct": 0.004247786822960312,
            "spread_ticks": 1.000349344978166,
            "amihud": 1.2418297888453624e-10,
            "turnover_ratio": 0.008772748432393236,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.29402090701850314,
              "median": 0.12799295118592058,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.0322674825326292,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4040503.0774088367,
              "median": 18930.5,
              "min": 0.0,
              "max": 295171716.0,
              "p5": 0.0,
              "p95": 14505938.399999982,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10962241037493935,
              "median": 0.02650228383196805,
              "min": 0.00035714437390094487,
              "max": 1.2400835073068897,
              "p5": 0.003383064075278625,
              "p95": 0.5412542973226377,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008497144820937295,
              "median": 0.0003960011244902274,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.018071973134697862,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0009883847991368087,
              "median": 1.4696261200608526e-08,
              "min": 0.0,
              "max": 0.4166666666666667,
              "p5": 0.0,
              "p95": 3.1424421620499895e-05,
              "count": 429
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 570.5806451612904,
              "median": 9.5,
              "min": 0.0,
              "max": 18452.0,
              "p5": 0.0,
              "p95": 2930.149999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.08379046893442206,
              "median": 0.08875454133042993,
              "min": 0.0,
              "max": 0.15439387734152651,
              "p5": 0.0,
              "p95": 0.15053387933449128,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11045568.425681528,
              "median": 329385.0,
              "min": 0.0,
              "max": 68220088.0,
              "p5": 4140.5,
              "p95": 50884981.399999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0400557697396964,
              "median": 0.008298369094386028,
              "min": 0.00410224384944351,
              "max": 0.15384615384615383,
              "p5": 0.0042877319148224,
              "p95": 0.1435233160621761,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002751820342604829,
              "median": 0.0006943047457794354,
              "min": 0.0,
              "max": 0.01101437223821962,
              "p5": 6.617878013713603e-05,
              "p95": 0.00987370249853588,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.826708878824885e-09,
              "median": 0.0,
              "min": 0.0,
              "max": 3.7341812613407196e-08,
              "p5": 0.0,
              "p95": 2.9255152920989507e-08,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1206.0,
              "median": 260.0,
              "min": 0.0,
              "max": 6054.0,
              "p5": 2.1,
              "p95": 4627.049999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 6744678.56757537,
              "median": 391323.7027261098,
              "min": 0.0,
              "max": 33977356.0,
              "p5": 2957.5,
              "p95": 26907076.5,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1150.6666666666667,
              "median": 550.0,
              "min": 0.0,
              "max": 4338.0,
              "p5": 1.5,
              "p95": 3618.5,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.10213169990242399,
              "median": 0.08028356249235596,
              "min": 0.0,
              "max": 0.24980329284859662,
              "p5": 0.0,
              "p95": 0.2379574150317563,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.051351010907532975,
              "median": 0.009156345241919302,
              "min": 0.004247786822960312,
              "max": 0.15384615384615383,
              "p5": 0.005022615788727128,
              "p95": 0.14647269828616977,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.6128422754665266,
              "median": 1.000174672489083,
              "min": 1.0,
              "max": 10.666666666666666,
              "p5": 1.0,
              "p95": 8.252509410288582,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.4074047654316743e-09,
              "median": 1.2418297888453624e-10,
              "min": 0.0,
              "max": 1.0386280305348295e-08,
              "p5": 0.0,
              "p95": 8.614336352863743e-09,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003702508412768359,
              "median": 0.0006943047457794354,
              "min": 0.0,
              "max": 0.0118646103236948,
              "p5": 4.727055724081145e-05,
              "p95": 0.011091644850869409,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.014925373134328401,
            "market": -0.011715696470211423,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.0032096766641169783,
            "vs_sector": -0.014925373134328401,
            "vs_peers": -0.014925373134328401
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 84.05017921146953,
          "score_pca_percentile": 84.05017921146953,
          "rank_pca": 90,
          "total": 558,
          "adv_notional_sgd": 758584.5,
          "adv_volume_shares": 1176100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002573180630294305,
          "votes": 413.0,
          "trades": 413.0,
          "spread_pct": 0.007798798237736787,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.12727894789801095
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5360361125724605,
          "loadings": {
            "log_adv": 0.5373534259864879,
            "log_trades": 0.4906610434691526,
            "log_turnover": 0.48974830716587575,
            "neg_spread": 0.4103719606586876,
            "neg_amihud": 0.1473215870768261,
            "neg_vol": 0.20134754907079278
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 580399.7360789013,
          "peer_median_score_pca": 77.8673835125448,
          "peer_median_trades": 439.5,
          "peer_median_volatility": 0.18937749286368866,
          "peer_median_spread_pct": 0.00958748806312272,
          "peer_median_spread_ticks": 1.004635325667694,
          "peer_median_amihud": 4.0168927001113114e-09,
          "peer_median_turnover_ratio": 0.000820478779480801,
          "target_vs_peer": {
            "score_pca_delta": 6.18,
            "adv_delta_pct": 30.7,
            "trades_delta_pct": -6.03,
            "volatility_delta_pct": 32.79,
            "spread_pct_delta_pct": 18.66,
            "spread_ticks_delta_pct": -0.46,
            "amihud_delta_pct": -25.99,
            "turnover_ratio_delta_pct": 213.62
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.05017921146953,
            "rank_pca": 90,
            "adv": 758584.5,
            "trades": 413.0,
            "volatility": 0.12727894789801095,
            "spread_pct": 0.007798798237736787,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.002573180630294305,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 70.43010752688173,
            "rank_pca": 166,
            "adv": 169029.47215780275,
            "trades": 39.0,
            "volatility": 0.1438759246630447,
            "spread_pct": 0.01022912047302292,
            "spread_ticks": 1.03,
            "amihud": 2.1698931587901967e-08,
            "turnover_ratio": 0.0004278515369275957,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 39.784946236559136,
            "rank_pca": 337,
            "adv": 5131.0,
            "trades": 13.0,
            "volatility": 1.4619900704130642,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00023127213723764348,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 21.32616487455197,
            "rank_pca": 440,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.20805081479575477,
            "spread_pct": 0.1030927835051546,
            "spread_ticks": 8.75,
            "amihud": 5.949406249256326e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.30465949820788,
            "rank_pca": 83,
            "adv": 991770.0,
            "trades": 840.0,
            "volatility": 0.17727105031599955,
            "spread_pct": 0.007678057883690838,
            "spread_ticks": 1.0081615120274914,
            "amihud": 7.015741183414496e-09,
            "turnover_ratio": 0.0012131060220340064,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.16129032258065,
            "rank_pca": 28,
            "adv": 7043114.5,
            "trades": 2568.0,
            "volatility": 0.20148393541137777,
            "spread_pct": 0.008945855653222522,
            "spread_ticks": 1.0,
            "amihud": 1.018044216808127e-09,
            "turnover_ratio": 0.015107806435252136,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.4910394265233,
            "rank_pca": 15,
            "adv": 25242931.0,
            "trades": 3666.0,
            "volatility": 0.15606834009585396,
            "spread_pct": 0.004363767696390546,
            "spread_ticks": 1.001109139307897,
            "amihud": 2.416790685381635e-10,
            "turnover_ratio": 0.006955974309001116,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6508818825268847,
              "median": 0.37636549800762253,
              "min": 0.0,
              "max": 9.165151389911681,
              "p5": 0.03406439854584801,
              "p95": 2.18214876993533,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3102945.3169128834,
              "median": 11809.25,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 12635258.149999961,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10690813564218452,
              "median": 0.03195239175916152,
              "min": 0.00024245657871967925,
              "max": 1.2394366197183098,
              "p5": 0.003329744753170141,
              "p95": 0.49255127041658764,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038980434765030184,
              "median": 0.00021506029331885872,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.011486748035937303,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.2052199673926166e-05,
              "median": 1.2628553387181644e-07,
              "min": 0.0,
              "max": 0.004342162396873648,
              "p5": 0.0,
              "p95": 0.00010566629384610838,
              "count": 544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 467.90860215053766,
              "median": 6.0,
              "min": 0.0,
              "max": 11222.0,
              "p5": 0.0,
              "p95": 2744.599999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.32404893850618344,
              "median": 0.17383825034508577,
              "min": 0.1262481992734215,
              "max": 1.4619900704130642,
              "p5": 0.1266089612920278,
              "p95": 1.0231113309470052,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9664216.434019726,
              "median": 815558.0,
              "min": 0.0,
              "max": 65900017.0,
              "p5": 1795.8500000000001,
              "p95": 45850844.849999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03757083053824517,
              "median": 0.00842717394185044,
              "min": 0.004329596189360625,
              "max": 0.15384615384615383,
              "p5": 0.004402042106791582,
              "p95": 0.13608247422680408,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023329210553701784,
              "median": 0.0011825961084356612,
              "min": 0.0,
              "max": 0.007755315839123227,
              "p5": 8.094524803317522e-05,
              "p95": 0.006899649924307663,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.488854891600187e-07,
              "median": 6.038237422832909e-09,
              "min": 0.0,
              "max": 5.949406249256326e-06,
              "p5": 2.928400997950012e-11,
              "p95": 3.874708688072374e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1220.625,
              "median": 468.0,
              "min": 0.0,
              "max": 6054.0,
              "p5": 4.550000000000001,
              "p95": 4594.149999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5575329.328692967,
              "median": 580399.7360789013,
              "min": 0.0,
              "max": 25242931.0,
              "p5": 1282.75,
              "p95": 20692976.875,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1187.6666666666667,
              "median": 439.5,
              "min": 0.0,
              "max": 3666.0,
              "p5": 3.25,
              "p95": 3391.5,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3914566892825158,
              "median": 0.18937749286368866,
              "min": 0.1438759246630447,
              "max": 1.4619900704130642,
              "p5": 0.146924028521247,
              "p95": 1.1485052565087368,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04802595650960587,
              "median": 0.00958748806312272,
              "min": 0.004363767696390546,
              "max": 0.15384615384615383,
              "p5": 0.005192340243215619,
              "p95": 0.14115781126090401,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.298211775222565,
              "median": 1.004635325667694,
              "min": 1.0,
              "max": 8.75,
              "p5": 1.0,
              "p95": 6.82,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.96563440885498e-07,
              "median": 4.0168927001113114e-09,
              "min": 0.0,
              "max": 5.949406249256326e-06,
              "p5": 6.041976713454087e-11,
              "p95": 4.46747941983922e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00398933507340875,
              "median": 0.000820478779480801,
              "min": 0.0,
              "max": 0.015107806435252136,
              "p5": 5.781803430941087e-05,
              "p95": 0.01306984840368938,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.03937007874015741,
            "market": 0.016798120393960447,
            "sector": 0.036358083528796215,
            "peers": 0.027938875483716652,
            "vs_market": 0.022571958346196963,
            "vs_sector": 0.003011995211361196,
            "vs_peers": 0.011431203256440758
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 84.40860215053763,
          "score_pca_percentile": 84.40860215053763,
          "rank_pca": 88,
          "total": 558,
          "adv_notional_sgd": 720015.0,
          "adv_volume_shares": 1043500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0022830660553627307,
          "votes": 406.0,
          "trades": 406.0,
          "spread_pct": 0.00753503641683852,
          "spread_ticks": 1.0,
          "amihud": 5.306741041703646e-09,
          "volatility": 0.1799290172241517
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5677496891751185,
          "loadings": {
            "log_adv": 0.512015359382943,
            "log_trades": 0.46005733433951934,
            "log_turnover": 0.46804178646528327,
            "neg_spread": 0.42842124962408107,
            "neg_amihud": 0.25514520397759244,
            "neg_vol": 0.2418275516903115
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 757274.1756729368,
          "peer_median_score_pca": 76.25448028673836,
          "peer_median_trades": 461.0,
          "peer_median_volatility": 0.21002796334502588,
          "peer_median_spread_pct": 0.009573136947475323,
          "peer_median_spread_ticks": 1.0024494277010672,
          "peer_median_amihud": 3.2592184084476305e-09,
          "peer_median_turnover_ratio": 0.0014408812486453137,
          "target_vs_peer": {
            "score_pca_delta": 8.15,
            "adv_delta_pct": -4.9,
            "trades_delta_pct": -11.93,
            "volatility_delta_pct": 14.33,
            "spread_pct_delta_pct": 21.29,
            "spread_ticks_delta_pct": -0.24,
            "amihud_delta_pct": -62.82,
            "turnover_ratio_delta_pct": 58.45
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.40860215053763,
            "rank_pca": 88,
            "adv": 720015.0,
            "trades": 406.0,
            "volatility": 0.1799290172241517,
            "spread_pct": 0.00753503641683852,
            "spread_ticks": 1.0,
            "amihud": 5.306741041703646e-09,
            "turnover_ratio": 0.0022830660553627307,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.94982078853047,
            "rank_pca": 191,
            "adv": 118713.35134587377,
            "trades": 26.0,
            "volatility": 0.19772726829255585,
            "spread_pct": 0.010412649440802169,
            "spread_ticks": 1.0909090909090908,
            "amihud": 3.223496438313094e-08,
            "turnover_ratio": 0.0003033794687132258,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 44.2652329749104,
            "rank_pca": 312,
            "adv": 25568.8,
            "trades": 21.0,
            "volatility": 1.369160781033735,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0011444973405400109,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 20.60931899641577,
            "rank_pca": 444,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3549035711002078,
            "spread_pct": 0.1047503045066991,
            "spread_ticks": 8.75,
            "amihud": 8.237503706876742e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.55913978494624,
            "rank_pca": 76,
            "adv": 1395835.0,
            "trades": 896.0,
            "volatility": 0.2023629214613204,
            "spread_pct": 0.007493574058804418,
            "spread_ticks": 1.0038948393378773,
            "amihud": 5.578398633091523e-09,
            "turnover_ratio": 0.0017372651567506168,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.6989247311828,
            "rank_pca": 25,
            "adv": 8533513.5,
            "trades": 2495.0,
            "volatility": 0.2176930052287314,
            "spread_pct": 0.00873362445414848,
            "spread_ticks": 1.0,
            "amihud": 9.400381838037385e-10,
            "turnover_ratio": 0.017124222687354848,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.84946236559139,
            "rank_pca": 13,
            "adv": 26369527.0,
            "trades": 3666.0,
            "volatility": 0.14961389806314945,
            "spread_pct": 0.004423019955295874,
            "spread_ticks": 1.001004016064257,
            "amihud": 2.0660391036526782e-10,
            "turnover_ratio": 0.007301570036041782,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6901665209178499,
              "median": 0.4572607987302596,
              "min": 0.0,
              "max": 7.957548658045471,
              "p5": 0.1555406459927586,
              "p95": 2.2155172716379976,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3239680.530581935,
              "median": 11930.4,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13584595.799999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09908096010890495,
              "median": 0.0295413398861675,
              "min": 0.0002652156920799096,
              "max": 1.3542204201990415,
              "p5": 0.003566278539362127,
              "p95": 0.48340715372179116,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005821161812385302,
              "median": 0.0003017604147856788,
              "min": 0.0,
              "max": 1.9774569903104608,
              "p5": 0.0,
              "p95": 0.010301631636607375,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1812678862742594e-05,
              "median": 1.4133756633122515e-07,
              "min": 0.0,
              "max": 0.0007493839420353828,
              "p5": 0.0,
              "p95": 4.525046554154886e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 460.921146953405,
              "median": 6.5,
              "min": 0.0,
              "max": 11380.0,
              "p5": 0.0,
              "p95": 2625.0499999999943,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35158136226401926,
              "median": 0.2000450948769381,
              "min": 0.11178694889984206,
              "max": 1.369160781033735,
              "p5": 0.13563667281335043,
              "p95": 1.0141707575569998,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10327690.768918235,
              "median": 764780.0,
              "min": 0.0,
              "max": 68686620.0,
              "p5": 8949.08,
              "p95": 48449133.14999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.037731134649106296,
              "median": 0.008290628742999722,
              "min": 0.004249022843416297,
              "max": 0.15384615384615383,
              "p5": 0.004342505102061891,
              "p95": 0.13666260657734464,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002651241785622673,
              "median": 0.0014408812486453137,
              "min": 0.0,
              "max": 0.008113139420650676,
              "p5": 0.00010618281404962904,
              "p95": 0.007565896180993237,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0360301258141656e-06,
              "median": 5.442569837397585e-09,
              "min": 0.0,
              "max": 8.237503706876742e-06,
              "p5": 3.3546345031443875e-11,
              "p95": 5.365659647003973e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1232.5,
              "median": 494.0,
              "min": 0.0,
              "max": 6041.0,
              "p5": 7.3500000000000005,
              "p95": 4587.449999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 6073859.608557645,
              "median": 757274.1756729368,
              "min": 0.0,
              "max": 26369527.0,
              "p5": 6392.2,
              "p95": 21910523.625,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1184.0,
              "median": 461.0,
              "min": 0.0,
              "max": 3666.0,
              "p5": 5.25,
              "p95": 3373.25,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.41524357419661667,
              "median": 0.21002796334502588,
              "min": 0.14961389806314945,
              "max": 1.369160781033735,
              "p5": 0.16164224062050106,
              "p95": 1.1155964785503532,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04827655437698398,
              "median": 0.009573136947475323,
              "min": 0.004423019955295874,
              "max": 0.15384615384615383,
              "p5": 0.00519065848117301,
              "p95": 0.14157219151129014,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3076346577185376,
              "median": 1.0024494277010672,
              "min": 1.0,
              "max": 8.75,
              "p5": 1.0,
              "p95": 6.8352272727272725,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3794106186645222e-06,
              "median": 3.2592184084476305e-09,
              "min": 0.0,
              "max": 8.237503706876742e-06,
              "p5": 5.1650977591316955e-11,
              "p95": 6.186186521253339e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004601822448233413,
              "median": 0.0014408812486453137,
              "min": 0.0,
              "max": 0.017124222687354848,
              "p5": 7.584486717830645e-05,
              "p95": 0.014668559524526581,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.04347826086956552,
            "market": 0.02790713775377296,
            "sector": -0.02024628842312437,
            "peers": -0.02336367010069229,
            "vs_market": -0.07138539862333848,
            "vs_sector": -0.02323197244644115,
            "vs_peers": -0.02011459076887323
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.12544802867383,
          "score_pca_percentile": 85.12544802867383,
          "rank_pca": 84,
          "total": 558,
          "adv_notional_sgd": 585161.25,
          "adv_volume_shares": 860500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018826816872444942,
          "votes": 383.5,
          "trades": 383.5,
          "spread_pct": 0.007434173966949893,
          "spread_ticks": 1.0,
          "amihud": 4.541135179291274e-09,
          "volatility": 0.14329049622107579
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5788008676754416,
          "loadings": {
            "log_adv": 0.5008471855354241,
            "log_trades": 0.4461151870142538,
            "log_turnover": 0.45441130901282223,
            "neg_spread": 0.4339374072835606,
            "neg_amihud": 0.26530099578336974,
            "neg_vol": 0.29147453935825857
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 617455.1701212648,
          "peer_median_score_pca": 76.88172043010752,
          "peer_median_trades": 390.75,
          "peer_median_volatility": 0.19171872264811793,
          "peer_median_spread_pct": 0.009058146731406766,
          "peer_median_spread_ticks": 1.0044196454159877,
          "peer_median_amihud": 3.2399767993657754e-09,
          "peer_median_turnover_ratio": 0.001216083700504102,
          "target_vs_peer": {
            "score_pca_delta": 8.24,
            "adv_delta_pct": -5.2,
            "trades_delta_pct": -1.86,
            "volatility_delta_pct": 25.26,
            "spread_pct_delta_pct": 17.93,
            "spread_ticks_delta_pct": -0.44,
            "amihud_delta_pct": -40.16,
            "turnover_ratio_delta_pct": 54.82
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 585161.25,
            "trades": 383.5,
            "volatility": 0.14329049622107579,
            "spread_pct": 0.007434173966949893,
            "spread_ticks": 1.0,
            "amihud": 4.541135179291274e-09,
            "turnover_ratio": 0.0018826816872444942,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 66.48745519713262,
            "rank_pca": 188,
            "adv": 97370.8402425296,
            "trades": 22.0,
            "volatility": 0.1713750007809978,
            "spread_pct": 0.009996302491099887,
            "spread_ticks": 1.015401332262484,
            "amihud": 3.247000555561621e-08,
            "turnover_ratio": 0.00024250007840129282,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 49.10394265232975,
            "rank_pca": 285,
            "adv": 34990.25,
            "trades": 33.0,
            "volatility": 1.2958525615515653,
            "spread_pct": 0.11843832611002202,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0011204866861828694,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 18.817204301075268,
            "rank_pca": 454,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5679791886585934,
            "spread_pct": 0.10895241863685819,
            "spread_ticks": 9.126984126984127,
            "amihud": 6.330000391958183e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.27598566308244,
            "rank_pca": 72,
            "adv": 1137539.5,
            "trades": 748.5,
            "volatility": 0.1787938087055215,
            "spread_pct": 0.006607161074580962,
            "spread_ticks": 1.0080843147326068,
            "amihud": 5.458407282732866e-09,
            "turnover_ratio": 0.0013116807148253347,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 96.05734767025089,
            "rank_pca": 23,
            "adv": 7929828.0,
            "trades": 1893.5,
            "volatility": 0.20464363659071436,
            "spread_pct": 0.008119990971713646,
            "spread_ticks": 1.000170750459421,
            "amihud": 1.0215463159986848e-09,
            "turnover_ratio": 0.015566973289644933,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.4910394265233,
            "rank_pca": 15,
            "adv": 19553516.0,
            "trades": 3287.5,
            "volatility": 0.13693764357673216,
            "spread_pct": 0.004428487683346552,
            "spread_ticks": 1.0007549760993686,
            "amihud": 2.6972829512577055e-10,
            "turnover_ratio": 0.005222096457973478,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6942568396270915,
              "median": 0.44098857700559946,
              "min": 0.0,
              "max": 6.936569757452167,
              "p5": 0.15200414164246542,
              "p95": 2.1348110223568884,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2585991.139840956,
              "median": 11889.75,
              "min": 0.0,
              "max": 246202433.5,
              "p5": 0.0,
              "p95": 10511060.3125,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09513490142064546,
              "median": 0.028697502776803503,
              "min": 0.00027281479518183793,
              "max": 1.267605633802817,
              "p5": 0.003578612812111497,
              "p95": 0.48213174723043983,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003254556452291205,
              "median": 0.0002686096118065866,
              "min": 0.0,
              "max": 0.856898029134533,
              "p5": 0.0,
              "p95": 0.007039283413825809,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.853095912889193e-06,
              "median": 1.7425132770987974e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 4.1873119589947175e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 376.6173835125448,
              "median": 6.75,
              "min": 0.0,
              "max": 10053.0,
              "p5": 0.0,
              "p95": 2025.224999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3487308917613014,
              "median": 0.16970804541466822,
              "min": 0.11480397946747602,
              "max": 1.2958525615515653,
              "p5": 0.12477426033123594,
              "p95": 1.0410968810390246,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8644067.886280317,
              "median": 654270.0,
              "min": 0.0,
              "max": 56048300.0,
              "p5": 12246.587500000001,
              "p95": 40115425.87499998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.033612381706200525,
              "median": 0.008083899210549186,
              "min": 0.004267253241731738,
              "max": 0.11843832611002202,
              "p5": 0.0043381423931001875,
              "p95": 0.11511825849441468,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023198004946853546,
              "median": 0.001216083700504102,
              "min": 0.0,
              "max": 0.00674964888539918,
              "p5": 8.48750274404525e-05,
              "p95": 0.006599685500638035,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.974578832352258e-07,
              "median": 4.99977123101207e-09,
              "min": 0.0,
              "max": 6.330000391958183e-06,
              "p5": 3.1177409481615966e-11,
              "p95": 4.125864756717281e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1101.75,
              "median": 404.0,
              "min": 0.0,
              "max": 5407.0,
              "p5": 7.700000000000001,
              "p95": 4142.9749999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4792207.431707088,
              "median": 617455.1701212648,
              "min": 0.0,
              "max": 19553516.0,
              "p5": 8747.5625,
              "p95": 16647594.0,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 997.4166666666666,
              "median": 390.75,
              "min": 0.0,
              "max": 3287.5,
              "p5": 5.5,
              "p95": 2939.0,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4259303066440207,
              "median": 0.19171872264811793,
              "min": 0.13693764357673216,
              "max": 1.2958525615515653,
              "p5": 0.14554698287779858,
              "p95": 1.1138842183283222,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04275711449460354,
              "median": 0.009058146731406766,
              "min": 0.004428487683346552,
              "max": 0.11843832611002202,
              "p5": 0.004973156031155154,
              "p95": 0.11606684924173105,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.358565916756335,
              "median": 1.0044196454159877,
              "min": 1.0,
              "max": 9.126984126984127,
              "p5": 1.0000426876148554,
              "p95": 7.099088428303716,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.061536679901276e-06,
              "median": 3.2399767993657754e-09,
              "min": 0.0,
              "max": 6.330000391958183e-06,
              "p5": 6.743207378144264e-11,
              "p95": 4.755617795357541e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003910622871171317,
              "median": 0.001216083700504102,
              "min": 0.0,
              "max": 0.015566973289644933,
              "p5": 6.0625019600323205e-05,
              "p95": 0.012980754081727068,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.02222222222222181,
            "market": 0.12521619674203666,
            "sector": -0.020120979246038617,
            "peers": -0.0388927768308418,
            "vs_market": -0.14743841896425847,
            "vs_sector": -0.002101242976183193,
            "vs_peers": 0.016670554608619992
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is softer, as average volume is 47.3% below the one-month average and points to thinner immediate access.",
        "market_comparison": "The stock fell 1.5% on the day while peers were flat, which matters because weaker price action can coincide with a less supportive trading backdrop."
      },
      "30d": {
        "liquidity": "Monthly tradability is solid, supported by a 1M liquidity score of 84.1 and a one-tick spread that keeps execution conditions straightforward.",
        "market_comparison": "The stock rose 3.9% over one month compared with 2.8% for peers, which matters because stronger returns can help sustain market participation."
      },
      "3m": {
        "liquidity": "Three-month tradability looks solid, with a 3M liquidity score of 84.4 showing access has held up over a broader window.",
        "market_comparison": "The stock is down 4.3% over three months compared with a 2.3% drop for peers, which matters because weaker relative performance can weigh on trading interest."
      },
      "6m": {
        "liquidity": "6M score 85.1 vs peer median 76.9 (+8.2 pts).",
        "market_comparison": "The stock is down 2.2% over six months compared with a 3.9% drop for peers, which matters because better relative performance supports a firmer trading backdrop."
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
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.28395178670948,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "28.4%",
          "display_range": null,
          "display_text": "28.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 28.4,
          "plain_english": "Market explains about 28.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5244129258363893,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "52.4%",
          "display_range": null,
          "display_text": "52.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 52.4,
          "plain_english": "Sector explains about 52.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.19163528745413067,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "19.2%",
          "display_range": null,
          "display_text": "19.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 19.2,
          "plain_english": "Company-specific explains about 19.2% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.3068710793487635,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.31",
          "display_range": null,
          "display_text": "0.31",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.31% stock move in the same direction in this state.",
          "value_num": 0.31
        },
        "beta_stock_lag": {
          "median": -0.38051009527738044,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.38",
          "display_range": null,
          "display_text": "-0.38",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.38
        },
        "beta_sector": {
          "median": 0.43220404399518875,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.43",
          "display_range": null,
          "display_text": "0.43",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.43% stock move in the same direction in this state.",
          "value_num": 0.43
        },
        "beta_market_lag": {
          "median": 1.0485269285207917,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.05",
          "display_range": null,
          "display_text": "1.05",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.05
        },
        "beta_sector_lag": {
          "median": 1.0172555173169877,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.02",
          "display_range": null,
          "display_text": "1.02",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.02
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
          "period_label": "2025-04-28 to 2025-04-30",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5778670878526426,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.8%",
            "display_range": null,
            "display_text": "57.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
            "kind": "share_pct",
            "value_pct": 57.8,
            "plain_english": "Market explains about 57.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5778670878526426,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.8%",
              "display_range": null,
              "display_text": "57.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 57.8,
              "plain_english": "Market explains about 57.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.0,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "0.0%",
              "display_range": null,
              "display_text": "0.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 0.0,
              "plain_english": "Sector explains about 0.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4221329121473572,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Company-specific explains about 42.2% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven, though based on only 3 trading days."
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
            "median": 0.5595856147097945,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.0%",
            "display_range": null,
            "display_text": "56.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 56.0,
            "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.32623166932132414,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.6%",
              "display_range": null,
              "display_text": "32.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 32.6,
              "plain_english": "Market explains about 32.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11418271596888128,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.4%",
              "display_range": null,
              "display_text": "11.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 11.4,
              "plain_english": "Sector explains about 11.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5595856147097945,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.0%",
              "display_range": null,
              "display_text": "56.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.0,
              "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
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
            "median": 0.623404724325774,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.3%",
            "display_range": null,
            "display_text": "62.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 62.3,
            "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1986365726091789,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.9%",
              "display_range": null,
              "display_text": "19.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.9,
              "plain_english": "Market explains about 19.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17795870306504716,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.8%",
              "display_range": null,
              "display_text": "17.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 17.8,
              "plain_english": "Sector explains about 17.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            }
          },
          "summary": "Jun: Still clearly company-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6156446349712698,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.6%",
            "display_range": null,
            "display_text": "61.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 61.6,
            "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15572514972889717,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.6%",
              "display_range": null,
              "display_text": "15.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 15.6,
              "plain_english": "Market explains about 15.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22863021529983313,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.9%",
              "display_range": null,
              "display_text": "22.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 22.9,
              "plain_english": "Sector explains about 22.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6156446349712698,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            }
          },
          "summary": "Jul: Still clearly company-driven."
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
            "median": 0.4539874874240681,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.4%",
            "display_range": null,
            "display_text": "45.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 45.4,
            "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3380759283078133,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Market explains about 33.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20793658426811862,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.8%",
              "display_range": null,
              "display_text": "20.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.8,
              "plain_english": "Sector explains about 20.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4539874874240681,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
            "median": 0.47594380520699603,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.6%",
            "display_range": null,
            "display_text": "47.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 47.6,
            "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3064722257863164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.6%",
              "display_range": null,
              "display_text": "30.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 30.6,
              "plain_english": "Market explains about 30.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2175839690066876,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.8%",
              "display_range": null,
              "display_text": "21.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.8,
              "plain_english": "Sector explains about 21.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47594380520699603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
            }
          },
          "summary": "Sep: Mostly company-driven."
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-01 to 2025-10-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.48281505654789303,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.3%",
            "display_range": null,
            "display_text": "48.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 48.3,
            "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.31423525143745396,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.4%",
              "display_range": null,
              "display_text": "31.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.4,
              "plain_english": "Market explains about 31.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20294969201465304,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.3%",
              "display_range": null,
              "display_text": "20.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.3,
              "plain_english": "Sector explains about 20.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48281505654789303,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.3%",
              "display_range": null,
              "display_text": "48.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.3,
              "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4219146512462775,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.2%",
            "display_range": null,
            "display_text": "42.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 42.2,
            "plain_english": "Market explains about 42.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4219146512462775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27759022888224905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Sector explains about 27.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.30049511987147337,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.0%",
              "display_range": null,
              "display_text": "30.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 30.0,
              "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
            }
          },
          "summary": "Nov: More mixed, though market-driven still has the largest share."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.7687417314818246,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "76.9%",
            "display_range": null,
            "display_text": "76.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 76.9,
            "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12378967681730312,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.4%",
              "display_range": null,
              "display_text": "12.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.4,
              "plain_english": "Market explains about 12.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10746859170087232,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.7%",
              "display_range": null,
              "display_text": "10.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.7,
              "plain_english": "Sector explains about 10.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7687417314818246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
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
            "median": 0.6344784334204319,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.4%",
            "display_range": null,
            "display_text": "63.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 63.4,
            "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20419511848433786,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.4%",
              "display_range": null,
              "display_text": "20.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.4,
              "plain_english": "Market explains about 20.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16132644809523028,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.1%",
              "display_range": null,
              "display_text": "16.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.1,
              "plain_english": "Sector explains about 16.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6344784334204319,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
            }
          },
          "summary": "Jan: Still clearly company-driven."
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
            "median": 0.8241639016384482,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.4%",
            "display_range": null,
            "display_text": "82.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 82.4,
            "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12970195459975553,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Market explains about 13.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.04613414376179617,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.6%",
              "display_range": null,
              "display_text": "4.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 4.6,
              "plain_english": "Sector explains about 4.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8241639016384482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
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
            "median": 0.45949639356129446,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.9%",
            "display_range": null,
            "display_text": "45.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 45.9,
            "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23035600504921908,
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
              "median": 0.31014760138948644,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.0%",
              "display_range": null,
              "display_text": "31.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.0,
              "plain_english": "Sector explains about 31.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.45949639356129446,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 16,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.45206159828226905,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.2%",
            "display_range": null,
            "display_text": "45.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 45.2,
            "plain_english": "Sector explains about 45.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.153371216023019,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.3%",
              "display_range": null,
              "display_text": "15.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 15.3,
              "plain_english": "Market explains about 15.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.45206159828226905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.2%",
              "display_range": null,
              "display_text": "45.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 45.2,
              "plain_english": "Sector explains about 45.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3945671856947118,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.5%",
              "display_range": null,
              "display_text": "39.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 39.5,
              "plain_english": "Company-specific explains about 39.5% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly sector-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 11.363636363636363,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005585309480740528,
            "low": 0.005585309480740528,
            "high": 0.005585309480740528
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010915109669939546,
            "low": 0.010915109669939546,
            "high": 0.010915109669939546
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            11.0
          ],
          [
            11.0,
            112.0
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
        "market_link_display": "0.31",
        "sector_link_display": "0.43",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.31% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.43% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.38",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 52.4,
        "driver_share_display": "52.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9105691056910569,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 10.3 days.",
        "expected_duration_days": 10.3
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
          "expected_duration_days": 11.363636363636363,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005585309480740528,
            "low": 0.005585309480740528,
            "high": 0.005585309480740528
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010915109669939546,
            "low": 0.010915109669939546,
            "high": 0.010915109669939546
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.912,
          0.088
        ],
        [
          0.08943089430894309,
          0.9105691056910569
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            11.0
          ],
          [
            11.0,
            112.0
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
        "text": "Liquidity score: 85.1 — Strong",
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
        "text": "Moderate short interest",
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
    "liq_subtitle": "Underlying liquidity is solid in peer terms, but the latest session is less active, leaving trading conditions balanced rather than clearly strong.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is firm, with the stock up 3.9% over one month and ahead of both peers and the market.",
    "perf_insight": "The return backdrop is stronger than the main comparison groups, with one-month performance 2.8% ahead of peers and 1.7% ahead of the market. That matters because price momentum is supportive even as liquidity signals remain balanced.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence now, accounting for 52.4% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 52.4% of price changes. Other influences are market 28.4%, and company-specific 19.2%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 28.4%, sector 52.4%, and company-specific 19.2%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 28.4%, sector 52.4%, and company-specific 19.2%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "This keeps the stock tied closely to its group, which matters because broader sector direction is still shaping trading more than company-specific moves.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves account for 52.4% of recent price action.",
      "Monthly change: the pattern has moved from clearly company-driven in February to mostly sector-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look balanced, with a firm return backdrop but no clear sign of uniformly stronger liquidity.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 23, 2025 to Apr 23, 2026 (254 trading days • 99,780 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Execution looks balanced, with a 1 tick spread and displayed bid depth at 0.77x of ask depth. That matters because immediate liquidity is orderly even with a slightly thinner bid side.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 27.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed trading conditions are balanced, with a tight spread but a lighter bid side.",
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
    "intraday_insight": "The order book is orderly, with a 1 tick spread, while bid depth is 0.77x of ask depth. That matters because immediate liquidity is available, but buying interest is not as deep as the offer side.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Recent trading conditions remain balanced rather than stretched.",
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
    "exec_subtitle": "Liquidity is balanced overall: six-month peer standing is good, while today’s lighter volume and a slightly thinner bid keep the near-term picture mixed.",
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
        "value": "85.1/100",
        "sub": "Peer median 76.9 (+8.2 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$585.2K",
        "sub": "Peer median S$617.5K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.74%",
        "sub": "1.00 ticks; peers 0.91%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is balanced for the stock’s size, with stronger medium-term standing than the latest session suggests. The six-month liquidity score is 85.1, which is 8.2 points above the peer median of 76.9, while one-day average volume is 47.3% below the one-month average. That matters because underlying access looks solid in peer terms, but current participation is lighter.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.663",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.75%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.77x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.38% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.38% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.32% with 100.0% fill.",
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
        "value": "85",
        "suffix": "/100",
        "bar_pct": 85,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 84/558",
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
        "value": "0.74",
        "suffix": "%",
        "bar_pct": 7,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.74% • 1.00 ticks vs peers 0.91%",
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
        "value": "585.2K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$617.5K",
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
        "value": "52.4",
        "suffix": "sector",
        "bar_pct": 52,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 28.4% • Company 19.2%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is respectable in peer terms, with a six-month liquidity score of 85.1 compared with a peer median of 76.9. That matters because underlying market access is better than the peer group even if the overall picture is not outright strong.",
      "Near-term activity is lighter, with one-day average volume down 47.3% from the one-month average. That matters because current trading support is thinner than the broader monthly backdrop.",
      "The tape has a firmer price backdrop, with the stock up 3.9% over one month and ahead of both peers and the market. Sector moves still explain 52.4% of trading, which matters because recent performance is constructive but still closely tied to the group."
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
      "overall": "6M liquidity is strong: score 85.1 vs peer median 76.9 (+8.2 pts). 1D average volume down -47.3% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 85.1 vs peer median 76.9 (+8.2 pts)."
      ],
      "concerns": [
        "1D average volume down -47.3% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +8.2 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -2.2%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -2.2% vs market 12.5%.",
        "vs_sector": "Worse than sector: -2.2% vs sector -2.0%.",
        "vs_peers": "Better than peers: -2.2% vs peers -3.9%."
      },
      "adv": {
        "insight": "ADV is S$585.2K, better than market, but worse than sector, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$585.2K vs market S$11.9K.",
        "vs_sector": "Worse than sector: S$585.2K vs sector S$654.3K.",
        "vs_peers": "In line with peers: S$585.2K vs peers S$617.5K."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.74% vs market 2.87%.",
        "vs_sector": "In line with sector: 0.74% vs sector 0.81%.",
        "vs_peers": "Better than peers: 0.74% vs peers 0.91%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.12%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.33%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.33% vs market 44.10%.",
        "vs_sector": "Better than sector: 14.33% vs sector 16.97%.",
        "vs_peers": "Better than peers: 14.33% vs peers 19.17%."
      },
      "trades": {
        "insight": "Trades is 384, better than market, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 384 vs market 7.",
        "vs_sector": "In line with sector: 384 vs sector 404.",
        "vs_peers": "In line with peers: 384 vs peers 391."
      },
      "amihud": {
        "insight": "Price impact is 4.54e-09, better than market, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 4.54e-09 vs market 1.74e-07.",
        "vs_sector": "In line with sector: 4.54e-09 vs sector 5.00e-09.",
        "vs_peers": "Worse than peers: 4.54e-09 vs peers 3.24e-09."
      }
    },
    "performance": {
      "overall": "Recent returns are stronger than the main comparison groups, with 1M performance at +3.9%, 2.8% above peers and 1.7% above the market. Liquidity gives a mixed confirmation to that move because the 6M liquidity score is 85.1 compared with a 76.9 peer median, but 1D average volume is 47.3% below the 1M average.",
      "conclusion": "The move looks mainly sector-linked, with solid medium-term liquidity but thinner recent volume giving only partial confirmation."
    },
    "drivers": {
      "overall": "Sector moves are the main force now, accounting for 52.4% of recent price action, so the stock is currently moving more with its group than on company-specific developments. That matters because the recent tape is being set by broader sector direction while average volume on the day is 47.3% below the 1M average, leaving the near-term read mixed.",
      "beta": "The current pattern looks more market-linked than it did earlier in the quarter, and that fits with a stock that has outperformed over 1M by 2.8% relative to peers and 1.7% relative to the market. That stronger return backdrop means sector strength is arriving alongside firmer recent price performance rather than against it.",
      "rolling_change": "The monthly picture has shifted clearly toward the sector. February was still clearly company-driven, March was mostly sector, and April is mostly sector-driven, which suggests the current pattern is a real change in what is moving the stock rather than a one-off day."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop that appears durable, with a typical spell lasting about 10.3 days. That matters because trading conditions are more likely to stay uneven than snap back quickly.",
      "current": "High volatility is in place now, while the stock has still outperformed over one month with a 3.9% return, ahead of peers at 2.8% and the market at 1.7%. That points to a firmer price backdrop even as day-to-day trading remains more variable.",
      "transitions": "This state looks fairly settled because high-volatility periods typically last about 10.3 days. Sector moves accounting for 52.4% of the tape also suggest the backdrop is being held by broader market forces rather than a brief company-specific swing.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 10.3 days."
    },
    "execution": {
      "overall": "displayed bid depth is 0.77x ask depth; spread is 1 tick. Immediate displayed depth broadly matches the stronger monthly liquidity read.",
      "concern": "Trade-size percentiles use Ap, 2025 to Ap, 2026 history (254 trading days • 99,780 trades).",
      "peer_context": "The current book broadly supports the stock’s stronger 6M liquidity score of 85.1 compared with the peer median of 76.9, but it does not show that advantage cleanly on the bid side. That matters because the peer-relative liquidity standing remains intact overall, while immediate depth is more mixed than the longer-term profile."
    },
    "trader_composition": {
      "overall": "Flow looks mixed by trade count and value.",
      "retail_heavy": "Retail-like trades dominate activity by count at 96.6%, but they account fo% of trade value, while institution-like trades are only 0.6% of count and 37.5% of value. That split matters because participation is broad, but a meaningful share of value still comes from a small number of larger trades.",
      "institutional_gap": "Institution-like participation is small by count at 0.6% but meaningful by value at 37.5%. That keeps the flow from reading as purely retail-driven.",
      "peer_comparison": "The mix stands out more by the gap between trade count and trade value than by a clear bias in one direction. That makes the stock look less cleanly skewed than names where both measures point the same way."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that trading is split between many small trades and fewer larger-value trades. That matters because price formation is being shaped by both breadth of participation and concentrated value. The read is mixed because trade count is overwhelmingly retail-like while trade value has a stronger institutional-like share. That makes the price signal less one-dimensional than a market driven by only one participant group.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Moderate short interest Recent flow does not show a clear deterioration from the monthly baseline.",
      "level": "Moderate short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning is falling sharply, with shorts covering by 80% month on month. That reduces the chance that short activity is adding fresh pressure to trading conditions, so the broader picture still looks driven more by the underlying tape than by short sellers.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 3.7%, continuous 87.3%, and close 7.9%. Current trading concentration score is 0.228.",
      "hhi_interpretation": "A concentration score of 0.228 indicates activity is relatively well distributed through the day. That supports a steadier intraday liquidity profile.",
      "best_times": "The continuous session is the clearest source of liquidity because it carries the large majority of trading activity. That makes the middle of the day the most representative window for observed flow.",
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
        "CRPU",
        "ODBU",
        "D5IU",
        "BMGU",
        "AU8U",
        "JYEU",
        "AJBU"
      ],
      "scores": [
        85.12544802867383,
        66.48745519713262,
        49.10394265232975,
        18.817204301075268,
        87.27598566308244,
        96.05734767025089,
        97.4910394265233
      ],
      "is_target": [
        true,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      "adv": [
        585161.25,
        97370.8402425296,
        34990.25,
        0.0,
        1137539.5,
        7929828.0,
        19553516.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.14329049622107579,
        "adv": 585161.25,
        "spread_pct": 0.007434173966949893,
        "turnover_ratio": 0.0018826816872444942,
        "amihud": 4.541135179291274e-09,
        "trades": 383.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6942568396270915,
          "median": 0.44098857700559946,
          "min": 0.0,
          "max": 6.936569757452167,
          "p5": 0.15200414164246542,
          "p95": 2.1348110223568884,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2585991.139840956,
          "median": 11889.75,
          "min": 0.0,
          "max": 246202433.5,
          "p5": 0.0,
          "p95": 10511060.3125,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09513490142064546,
          "median": 0.028697502776803503,
          "min": 0.00027281479518183793,
          "max": 1.267605633802817,
          "p5": 0.003578612812111497,
          "p95": 0.48213174723043983,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003254556452291205,
          "median": 0.0002686096118065866,
          "min": 0.0,
          "max": 0.856898029134533,
          "p5": 0.0,
          "p95": 0.007039283413825809,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.853095912889193e-06,
          "median": 1.7425132770987974e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 4.1873119589947175e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 376.6173835125448,
          "median": 6.75,
          "min": 0.0,
          "max": 10053.0,
          "p5": 0.0,
          "p95": 2025.224999999998,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3487308917613014,
          "median": 0.16970804541466822,
          "min": 0.11480397946747602,
          "max": 1.2958525615515653,
          "p5": 0.12477426033123594,
          "p95": 1.0410968810390246,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8644067.886280317,
          "median": 654270.0,
          "min": 0.0,
          "max": 56048300.0,
          "p5": 12246.587500000001,
          "p95": 40115425.87499998,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.033612381706200525,
          "median": 0.008083899210549186,
          "min": 0.004267253241731738,
          "max": 0.11843832611002202,
          "p5": 0.0043381423931001875,
          "p95": 0.11511825849441468,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023198004946853546,
          "median": 0.001216083700504102,
          "min": 0.0,
          "max": 0.00674964888539918,
          "p5": 8.48750274404525e-05,
          "p95": 0.006599685500638035,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.974578832352258e-07,
          "median": 4.99977123101207e-09,
          "min": 0.0,
          "max": 6.330000391958183e-06,
          "p5": 3.1177409481615966e-11,
          "p95": 4.125864756717281e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1101.75,
          "median": 404.0,
          "min": 0.0,
          "max": 5407.0,
          "p5": 7.700000000000001,
          "p95": 4142.9749999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 4792207.431707088,
          "median": 617455.1701212648,
          "min": 0.0,
          "max": 19553516.0,
          "p5": 8747.5625,
          "p95": 16647594.0,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 997.4166666666666,
          "median": 390.75,
          "min": 0.0,
          "max": 3287.5,
          "p5": 5.5,
          "p95": 2939.0,
          "count": 6
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4259303066440207,
          "median": 0.19171872264811793,
          "min": 0.13693764357673216,
          "max": 1.2958525615515653,
          "p5": 0.14554698287779858,
          "p95": 1.1138842183283222,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04275711449460354,
          "median": 0.009058146731406766,
          "min": 0.004428487683346552,
          "max": 0.11843832611002202,
          "p5": 0.004973156031155154,
          "p95": 0.11606684924173105,
          "count": 6
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.358565916756335,
          "median": 1.0044196454159877,
          "min": 1.0,
          "max": 9.126984126984127,
          "p5": 1.0000426876148554,
          "p95": 7.099088428303716,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.061536679901276e-06,
          "median": 3.2399767993657754e-09,
          "min": 0.0,
          "max": 6.330000391958183e-06,
          "p5": 6.743207378144264e-11,
          "p95": 4.755617795357541e-06,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003910622871171317,
          "median": 0.001216083700504102,
          "min": 0.0,
          "max": 0.015566973289644933,
          "p5": 6.0625019600323205e-05,
          "p95": 0.012980754081727068,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.03937007874015741,
        "market": 0.016798120393960447,
        "sector": 0.036358083528796215,
        "peers": 0.027938875483716652
      },
      {
        "horizon": "3M",
        "stock": -0.04347826086956552,
        "market": 0.02790713775377296,
        "sector": -0.02024628842312437,
        "peers": -0.02336367010069229
      },
      {
        "horizon": "6M",
        "stock": -0.02222222222222181,
        "market": 0.12521619674203666,
        "sector": -0.020120979246038617,
        "peers": -0.0388927768308418
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
      "share_market": 0.28395178670948,
      "share_sector": 0.5244129258363893,
      "share_idio": 0.19163528745413067,
      "beta_market": 0.3068710793487635,
      "beta_sector": 0.43220404399518875,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.28395178670948,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "28.4%",
            "display_range": null,
            "display_text": "28.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 28.4,
            "plain_english": "Market explains about 28.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5244129258363893,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.4%",
            "display_range": null,
            "display_text": "52.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 52.4,
            "plain_english": "Sector explains about 52.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.19163528745413067,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "19.2%",
            "display_range": null,
            "display_text": "19.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 19.2,
            "plain_english": "Company-specific explains about 19.2% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.3068710793487635,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.31",
            "display_range": null,
            "display_text": "0.31",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.31% stock move in the same direction in this state.",
            "value_num": 0.31
          },
          "beta_stock_lag": {
            "median": -0.38051009527738044,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.38",
            "display_range": null,
            "display_text": "-0.38",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.38
          },
          "beta_sector": {
            "median": 0.43220404399518875,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.43",
            "display_range": null,
            "display_text": "0.43",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.43% stock move in the same direction in this state.",
            "value_num": 0.43
          },
          "beta_market_lag": {
            "median": 1.0485269285207917,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.05",
            "display_range": null,
            "display_text": "1.05",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.05
          },
          "beta_sector_lag": {
            "median": 1.0172555173169877,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.02",
            "display_range": null,
            "display_text": "1.02",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.02
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
            "period_label": "2025-04-28 to 2025-04-30",
            "n_obs": 3,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5778670878526426,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.8%",
              "display_range": null,
              "display_text": "57.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 57.8,
              "plain_english": "Market explains about 57.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5778670878526426,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.8%",
                "display_range": null,
                "display_text": "57.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 57.8,
                "plain_english": "Market explains about 57.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.0,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "0.0%",
                "display_range": null,
                "display_text": "0.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 0.0,
                "plain_english": "Sector explains about 0.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4221329121473572,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.2%",
                "display_range": null,
                "display_text": "42.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 42.2,
                "plain_english": "Company-specific explains about 42.2% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven, though based on only 3 trading days."
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
              "median": 0.5595856147097945,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.0%",
              "display_range": null,
              "display_text": "56.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.0,
              "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.32623166932132414,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.6%",
                "display_range": null,
                "display_text": "32.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 32.6,
                "plain_english": "Market explains about 32.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11418271596888128,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.4%",
                "display_range": null,
                "display_text": "11.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 11.4,
                "plain_english": "Sector explains about 11.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5595856147097945,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.0%",
                "display_range": null,
                "display_text": "56.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 56.0,
                "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
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
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1986365726091789,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.9%",
                "display_range": null,
                "display_text": "19.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.9,
                "plain_english": "Market explains about 19.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17795870306504716,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.8%",
                "display_range": null,
                "display_text": "17.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 17.8,
                "plain_english": "Sector explains about 17.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.623404724325774,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.3%",
                "display_range": null,
                "display_text": "62.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 62.3,
                "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
              }
            },
            "summary": "Jun: Still clearly company-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-01 to 2025-07-31",
            "n_obs": 23,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6156446349712698,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15572514972889717,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.6%",
                "display_range": null,
                "display_text": "15.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 15.6,
                "plain_english": "Market explains about 15.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22863021529983313,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.9%",
                "display_range": null,
                "display_text": "22.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 22.9,
                "plain_english": "Sector explains about 22.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6156446349712698,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.6%",
                "display_range": null,
                "display_text": "61.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 61.6,
                "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
              }
            },
            "summary": "Jul: Still clearly company-driven."
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
              "median": 0.4539874874240681,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3380759283078133,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Market explains about 33.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20793658426811862,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.8%",
                "display_range": null,
                "display_text": "20.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.8,
                "plain_english": "Sector explains about 20.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4539874874240681,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.4%",
                "display_range": null,
                "display_text": "45.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.4,
                "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
              "median": 0.47594380520699603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3064722257863164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.6%",
                "display_range": null,
                "display_text": "30.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 30.6,
                "plain_english": "Market explains about 30.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2175839690066876,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.8%",
                "display_range": null,
                "display_text": "21.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.8,
                "plain_english": "Sector explains about 21.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47594380520699603,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.6%",
                "display_range": null,
                "display_text": "47.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 47.6,
                "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
              }
            },
            "summary": "Sep: Mostly company-driven."
          },
          {
            "month_key": "2025-10",
            "month_label": "October 2025",
            "month_short_label": "Oct",
            "period_label": "2025-10-01 to 2025-10-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.48281505654789303,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.3%",
              "display_range": null,
              "display_text": "48.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.3,
              "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.31423525143745396,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.4%",
                "display_range": null,
                "display_text": "31.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.4,
                "plain_english": "Market explains about 31.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20294969201465304,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.3%",
                "display_range": null,
                "display_text": "20.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.3,
                "plain_english": "Sector explains about 20.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48281505654789303,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.3%",
                "display_range": null,
                "display_text": "48.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 48.3,
                "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4219146512462775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4219146512462775,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.2%",
                "display_range": null,
                "display_text": "42.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 42.2,
                "plain_english": "Market explains about 42.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27759022888224905,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Sector explains about 27.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.30049511987147337,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.0%",
                "display_range": null,
                "display_text": "30.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 30.0,
                "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
              }
            },
            "summary": "Nov: More mixed, though market-driven still has the largest share."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.7687417314818246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12378967681730312,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.4%",
                "display_range": null,
                "display_text": "12.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.4,
                "plain_english": "Market explains about 12.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10746859170087232,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.7%",
                "display_range": null,
                "display_text": "10.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.7,
                "plain_english": "Sector explains about 10.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7687417314818246,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "76.9%",
                "display_range": null,
                "display_text": "76.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 76.9,
                "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
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
              "median": 0.6344784334204319,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20419511848433786,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.4%",
                "display_range": null,
                "display_text": "20.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.4,
                "plain_english": "Market explains about 20.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16132644809523028,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.1%",
                "display_range": null,
                "display_text": "16.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.1,
                "plain_english": "Sector explains about 16.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6344784334204319,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "63.4%",
                "display_range": null,
                "display_text": "63.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 63.4,
                "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
              }
            },
            "summary": "Jan: Still clearly company-driven."
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
              "median": 0.8241639016384482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12970195459975553,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Market explains about 13.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.04613414376179617,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.6%",
                "display_range": null,
                "display_text": "4.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 4.6,
                "plain_english": "Sector explains about 4.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8241639016384482,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "82.4%",
                "display_range": null,
                "display_text": "82.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 82.4,
                "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
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
              "median": 0.45949639356129446,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23035600504921908,
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
                "median": 0.31014760138948644,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.0%",
                "display_range": null,
                "display_text": "31.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.0,
                "plain_english": "Sector explains about 31.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.45949639356129446,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.9%",
                "display_range": null,
                "display_text": "45.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 45.9,
                "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-23",
            "n_obs": 16,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.45206159828226905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.2%",
              "display_range": null,
              "display_text": "45.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 45.2,
              "plain_english": "Sector explains about 45.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.153371216023019,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.3%",
                "display_range": null,
                "display_text": "15.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 15.3,
                "plain_english": "Market explains about 15.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.45206159828226905,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.2%",
                "display_range": null,
                "display_text": "45.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 45.2,
                "plain_english": "Sector explains about 45.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3945671856947118,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.5%",
                "display_range": null,
                "display_text": "39.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 39.5,
                "plain_english": "Company-specific explains about 39.5% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly sector-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 11.363636363636363,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005585309480740528,
              "low": 0.005585309480740528,
              "high": 0.005585309480740528
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010915109669939546,
              "low": 0.010915109669939546,
              "high": 0.010915109669939546
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.912,
              0.088
            ],
            [
              0.08943089430894309,
              0.9105691056910569
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              114.0,
              11.0
            ],
            [
              11.0,
              112.0
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
          "market_link_display": "0.31",
          "sector_link_display": "0.43",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.31% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.43% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.38",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 52.4,
          "driver_share_display": "52.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9105691056910569,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 10.3 days.",
          "expected_duration_days": 10.3
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
          "period_label": "2025-04-28 to 2025-04-30",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven, though based on only 3 trading days.",
          "share_market": 0.5778670878526426,
          "share_sector": 0.0,
          "share_company": 0.4221329121473572,
          "share_market_display": "57.8%",
          "share_sector_display": "0.0%",
          "share_company_display": "42.2%",
          "dominant_share_display": "57.8%"
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
          "share_market": 0.32623166932132414,
          "share_sector": 0.11418271596888128,
          "share_company": 0.5595856147097945,
          "share_market_display": "32.6%",
          "share_sector_display": "11.4%",
          "share_company_display": "56.0%",
          "dominant_share_display": "56.0%"
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
          "summary": "Jun: Still clearly company-driven.",
          "share_market": 0.1986365726091789,
          "share_sector": 0.17795870306504716,
          "share_company": 0.623404724325774,
          "share_market_display": "19.9%",
          "share_sector_display": "17.8%",
          "share_company_display": "62.3%",
          "dominant_share_display": "62.3%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jul: Still clearly company-driven.",
          "share_market": 0.15572514972889717,
          "share_sector": 0.22863021529983313,
          "share_company": 0.6156446349712698,
          "share_market_display": "15.6%",
          "share_sector_display": "22.9%",
          "share_company_display": "61.6%",
          "dominant_share_display": "61.6%"
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
          "share_market": 0.3380759283078133,
          "share_sector": 0.20793658426811862,
          "share_company": 0.4539874874240681,
          "share_market_display": "33.8%",
          "share_sector_display": "20.8%",
          "share_company_display": "45.4%",
          "dominant_share_display": "45.4%"
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
          "share_market": 0.3064722257863164,
          "share_sector": 0.2175839690066876,
          "share_company": 0.47594380520699603,
          "share_market_display": "30.6%",
          "share_sector_display": "21.8%",
          "share_company_display": "47.6%",
          "dominant_share_display": "47.6%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-01 to 2025-10-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Oct: Mostly company-driven.",
          "share_market": 0.31423525143745396,
          "share_sector": 0.20294969201465304,
          "share_company": 0.48281505654789303,
          "share_market_display": "31.4%",
          "share_sector_display": "20.3%",
          "share_company_display": "48.3%",
          "dominant_share_display": "48.3%"
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
          "summary": "Nov: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4219146512462775,
          "share_sector": 0.27759022888224905,
          "share_company": 0.30049511987147337,
          "share_market_display": "42.2%",
          "share_sector_display": "27.8%",
          "share_company_display": "30.0%",
          "dominant_share_display": "42.2%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Dec: Still clearly company-driven.",
          "share_market": 0.12378967681730312,
          "share_sector": 0.10746859170087232,
          "share_company": 0.7687417314818246,
          "share_market_display": "12.4%",
          "share_sector_display": "10.7%",
          "share_company_display": "76.9%",
          "dominant_share_display": "76.9%"
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
          "share_market": 0.20419511848433786,
          "share_sector": 0.16132644809523028,
          "share_company": 0.6344784334204319,
          "share_market_display": "20.4%",
          "share_sector_display": "16.1%",
          "share_company_display": "63.4%",
          "dominant_share_display": "63.4%"
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
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.12970195459975553,
          "share_sector": 0.04613414376179617,
          "share_company": 0.8241639016384482,
          "share_market_display": "13.0%",
          "share_sector_display": "4.6%",
          "share_company_display": "82.4%",
          "dominant_share_display": "82.4%"
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
          "share_market": 0.23035600504921908,
          "share_sector": 0.31014760138948644,
          "share_company": 0.45949639356129446,
          "share_market_display": "23.0%",
          "share_sector_display": "31.0%",
          "share_company_display": "45.9%",
          "dominant_share_display": "45.9%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 16,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven.",
          "share_market": 0.153371216023019,
          "share_sector": 0.45206159828226905,
          "share_company": 0.3945671856947118,
          "share_market_display": "15.3%",
          "share_sector_display": "45.2%",
          "share_company_display": "39.5%",
          "dominant_share_display": "45.2%"
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
          0.5020080321285141,
          0.4979919678714859
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 11.363636363636363,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005585309480740528,
              "low": 0.005585309480740528,
              "high": 0.005585309480740528
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010915109669939546,
              "low": 0.010915109669939546,
              "high": 0.010915109669939546
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.66,
          "quantity": 1530500.0,
          "value": 1010130.0
        },
        {
          "level": 2,
          "price": 0.655,
          "quantity": 667100.0,
          "value": 436950.5
        },
        {
          "level": 3,
          "price": 0.65,
          "quantity": 942600.0,
          "value": 612690.0
        },
        {
          "level": 4,
          "price": 0.645,
          "quantity": 507200.0,
          "value": 327144.0
        },
        {
          "level": 5,
          "price": 0.64,
          "quantity": 276600.0,
          "value": 177024.0
        },
        {
          "level": 6,
          "price": 0.635,
          "quantity": 208500.0,
          "value": 132397.5
        },
        {
          "level": 7,
          "price": 0.63,
          "quantity": 661600.0,
          "value": 416808.0
        },
        {
          "level": 8,
          "price": 0.625,
          "quantity": 172300.0,
          "value": 107687.5
        },
        {
          "level": 9,
          "price": 0.62,
          "quantity": 147900.0,
          "value": 91698.0
        },
        {
          "level": 10,
          "price": 0.615,
          "quantity": 12500.0,
          "value": 7687.5
        },
        {
          "level": 11,
          "price": 0.61,
          "quantity": 64100.0,
          "value": 39101.0
        },
        {
          "level": 12,
          "price": 0.605,
          "quantity": 5300.0,
          "value": 3206.5
        },
        {
          "level": 13,
          "price": 0.6,
          "quantity": 53100.0,
          "value": 31860.0
        },
        {
          "level": 14,
          "price": 0.595,
          "quantity": 6400.0,
          "value": 3808.0
        },
        {
          "level": 15,
          "price": 0.58,
          "quantity": 400.0,
          "value": 231.99999999999997
        },
        {
          "level": 16,
          "price": 0.57,
          "quantity": 39000.0,
          "value": 22229.999999999996
        },
        {
          "level": 17,
          "price": 0.565,
          "quantity": 500.0,
          "value": 282.5
        },
        {
          "level": 18,
          "price": 0.55,
          "quantity": 3000.0,
          "value": 1650.0000000000002
        },
        {
          "level": 19,
          "price": 0.535,
          "quantity": 1000.0,
          "value": 535.0
        },
        {
          "level": 20,
          "price": 0.52,
          "quantity": 17000.0,
          "value": 8840.0
        },
        {
          "level": 21,
          "price": 0.51,
          "quantity": 6000.0,
          "value": 3060.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 559900.0,
          "value": 372333.5
        },
        {
          "level": 2,
          "price": 0.67,
          "quantity": 1206200.0,
          "value": 808154.0
        },
        {
          "level": 3,
          "price": 0.675,
          "quantity": 533300.0,
          "value": 359977.5
        },
        {
          "level": 4,
          "price": 0.68,
          "quantity": 368700.0,
          "value": 250716.00000000003
        },
        {
          "level": 5,
          "price": 0.685,
          "quantity": 719700.0,
          "value": 492994.50000000006
        },
        {
          "level": 6,
          "price": 0.69,
          "quantity": 1778200.0,
          "value": 1226958.0
        },
        {
          "level": 7,
          "price": 0.695,
          "quantity": 72700.0,
          "value": 50526.5
        },
        {
          "level": 8,
          "price": 0.7,
          "quantity": 155400.0,
          "value": 108780.0
        },
        {
          "level": 9,
          "price": 0.705,
          "quantity": 101000.0,
          "value": 71205.0
        },
        {
          "level": 10,
          "price": 0.71,
          "quantity": 71300.0,
          "value": 50623.0
        },
        {
          "level": 11,
          "price": 0.715,
          "quantity": 22100.0,
          "value": 15801.5
        },
        {
          "level": 12,
          "price": 0.72,
          "quantity": 15200.0,
          "value": 10944.0
        },
        {
          "level": 13,
          "price": 0.73,
          "quantity": 200.0,
          "value": 146.0
        },
        {
          "level": 14,
          "price": 0.75,
          "quantity": 25000.0,
          "value": 18750.0
        },
        {
          "level": 15,
          "price": 0.765,
          "quantity": 500.0,
          "value": 382.5
        },
        {
          "level": 16,
          "price": 0.775,
          "quantity": 12400.0,
          "value": 9610.0
        },
        {
          "level": 17,
          "price": 0.78,
          "quantity": 600000.0,
          "value": 468000.0
        },
        {
          "level": 18,
          "price": 0.82,
          "quantity": 3400.0,
          "value": 2788.0
        },
        {
          "level": 19,
          "price": 0.85,
          "quantity": 150000.0,
          "value": 127500.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-23 08:59:51.388300000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6625000000000001,
        "spread_pct": 0.007547169811320759,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 3435022.0,
        "ask_depth_notional_displayed": 4446190.0,
        "bid_depth_notional_top10": 3435022.0,
        "ask_depth_notional_top10": 4446190.0,
        "bid_ask_depth_ratio": 0.7726
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 99780,
        "first_trade_date": "2025-04-23",
        "last_trade_date": "2026-04-23",
        "window_label": "Apr 23, 2025 to Apr 23, 2026",
        "window_short_label": "Apr 23, 2025 to Apr 23, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "99,780 trades",
        "window_detail_label": "254 trading days • 99,780 trades",
        "history_note": "Trade-size percentiles use Apr 23, 2025 to Apr 23, 2026 history (254 trading days • 99,780 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.1,
            "pct_of_adv": 0.44
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7877.5,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.23,
            "pct_of_adv": 1.01
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 9.9,
            "pct_of_adv": 43.64
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
            "order_id": "8137223323647089664",
            "timestamp": "2026-04-22 22:59:01.808500000",
            "local_timestamp": "2026-04-23 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 20.09,
            "price_vs_mid_pct": 4.151,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8137619147835821056",
            "timestamp": "2026-04-22 22:59:01.808500000",
            "local_timestamp": "2026-04-23 06:59:01",
            "posted_price": 0.78,
            "size_shares": 600000.0,
            "notional": 468000.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 13.62,
            "price_vs_mid_pct": 17.736,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8140389917135380480",
            "timestamp": "2026-04-23 01:28:59.810800000",
            "local_timestamp": "2026-04-23 09:28:59",
            "posted_price": 0.675,
            "size_shares": 300000.0,
            "notional": 202500.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 5.9,
            "price_vs_mid_pct": 1.887,
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
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3356302.5,
            "ask_depth_notional": 4225202.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3399496.5,
            "ask_depth_notional": 4207114.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3370604.5,
            "ask_depth_notional": 4327984.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3385342.0,
            "ask_depth_notional": 4341384.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3392490.5,
            "ask_depth_notional": 4341251.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3419253.0,
            "ask_depth_notional": 4341053.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3457531.5,
            "ask_depth_notional": 4343427.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3471655.5,
            "ask_depth_notional": 4420700.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3468861.0,
            "ask_depth_notional": 4418107.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3462789.0,
            "ask_depth_notional": 4413550.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3460425.0,
            "ask_depth_notional": 4426917.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3479693.0,
            "ask_depth_notional": 4425271.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3471905.0,
            "ask_depth_notional": 4478029.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3435022.0,
            "ask_depth_notional": 4446190.0,
            "mid_price": 0.6625000000000001
          }
        ],
        "summary": {
          "median_spread_pct": 0.00754716981132076,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 3446276.75,
          "median_ask_depth_notional": 4378489.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "15:30",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 6.4,
      "peers": [
        {
          "ticker": "AJBU",
          "pct": 4.1
        },
        {
          "ticker": "JYEU",
          "pct": 14.2
        },
        {
          "ticker": "AU8U",
          "pct": 100.6
        },
        {
          "ticker": "ODBU",
          "pct": 582.3
        },
        {
          "ticker": "D5IU",
          "pct": 22061.2
        },
        {
          "ticker": "BMGU",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 352,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-23",
          "last_trade_date": "2026-04-23",
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
            "retail_pct": 0.9943181818181818,
            "mixed_pct": 0.005681818181818182,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6853965466783728,
            "mixed_qty_pct": 0.31460345332162715,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6846999825782819,
            "mixed_notional_pct": 0.31530001742171804,
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
              "retail": 350,
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
            "avg": 644.1150568181819,
            "median": 66.5
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9943181818181818,
              "mixed_pct": 0.005681818181818182,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6853965466783728,
              "mixed_qty_pct": 0.31460345332162715,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6846999825782819,
              "mixed_notional_pct": 0.31530001742171804,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 644.1150568181819,
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
              "ticker": "D5IU",
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
              "avg_trade_size": 700.0,
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
              "ticker": "ODBU",
              "currency": "USD",
              "is_target": false,
              "retail_pct": 0.9904761904761905,
              "mixed_pct": 0.009523809523809525,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8198198198198198,
              "mixed_qty_pct": 0.18018018018018017,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8189561529044606,
              "mixed_notional_pct": 0.18104384709553942,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 552.3523809523809,
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
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9890776699029126,
              "mixed_pct": 0.009708737864077669,
              "instit_pct": 0.0012135922330097086,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5924501922404753,
              "mixed_qty_pct": 0.29104042875451475,
              "instit_qty_pct": 0.1165093790050099,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5929324338434347,
              "mixed_notional_pct": 0.29076885333713637,
              "instit_notional_pct": 0.11629871281942884,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 714.8064320388349,
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
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.951061865189289,
              "mixed_pct": 0.0332409972299169,
              "instit_pct": 0.01569713758079409,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.16048087125849744,
              "mixed_qty_pct": 0.23868658247921548,
              "instit_qty_pct": 0.6008325462622871,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.16049390022769677,
              "mixed_notional_pct": 0.23912797246168674,
              "instit_notional_pct": 0.6003781273106165,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4524.410895660203,
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
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9370334307043168,
              "mixed_pct": 0.0379746835443038,
              "instit_pct": 0.024991885751379422,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1782743404375176,
              "mixed_qty_pct": 0.14642756548680874,
              "instit_qty_pct": 0.6752980940756736,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.17887598080113057,
              "mixed_notional_pct": 0.14633104449455625,
              "instit_notional_pct": 0.6747929747043132,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8128.3862382343395,
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
          "n_trades": 7758,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-25",
          "last_trade_date": "2026-04-23",
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
            "retail_pct": 0.9729311678267595,
            "mixed_pct": 0.022815158546017015,
            "instit_pct": 0.004253673627223511,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.28540797758039416,
            "mixed_qty_pct": 0.3654894179272209,
            "instit_qty_pct": 0.34910260449238495,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.28568798541844953,
            "mixed_notional_pct": 0.36601422167671316,
            "instit_notional_pct": 0.3482977929048373,
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
              "retail": 7548,
              "mixed": 177,
              "institutional": 33,
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
            "avg": 1779.4331013147719,
            "median": 127.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9729311678267595,
              "mixed_pct": 0.022815158546017015,
              "instit_pct": 0.004253673627223511,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.28540797758039416,
              "mixed_qty_pct": 0.3654894179272209,
              "instit_qty_pct": 0.34910260449238495,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.28568798541844953,
              "mixed_notional_pct": 0.36601422167671316,
              "instit_notional_pct": 0.3482977929048373,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1779.4331013147719,
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
              "ticker": "BMGU",
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
              "avg_trade_size": 573.5666666666667,
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
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9730420636765048,
              "mixed_pct": 0.02478890696413355,
              "instit_pct": 0.0021690293593616856,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3725058245891065,
              "mixed_qty_pct": 0.4712083775391155,
              "instit_qty_pct": 0.15628579787177796,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3720498362722841,
              "mixed_notional_pct": 0.47250648104087933,
              "instit_notional_pct": 0.15544368268683656,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1458.7110930358665,
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
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9657931491608077,
              "mixed_pct": 0.02071349099259049,
              "instit_pct": 0.013493359846601804,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.20021897349157444,
              "mixed_qty_pct": 0.180565049865598,
              "instit_qty_pct": 0.6192159766428276,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.19991026116364582,
              "mixed_notional_pct": 0.18034800903519607,
              "instit_notional_pct": 0.619741729801158,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3727.3819804464647,
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
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9655172413793104,
              "mixed_pct": 0.034482758620689655,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.31832113881903484,
              "mixed_qty_pct": 0.6816788611809652,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.32243722736687674,
              "mixed_notional_pct": 0.6775627726331233,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1620.846896551724,
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
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9217891249269148,
              "mixed_pct": 0.05437536542584292,
              "instit_pct": 0.023835509647242254,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.22465109683528178,
              "mixed_qty_pct": 0.20372001421431182,
              "instit_qty_pct": 0.5716288889504064,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.22346254249727296,
              "mixed_notional_pct": 0.20282953471870335,
              "instit_notional_pct": 0.5737079227840237,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7915.964159033327,
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
              "ticker": "ODBU",
              "currency": "USD",
              "is_target": false,
              "retail_pct": 0.8921694480102695,
              "mixed_pct": 0.0975609756097561,
              "instit_pct": 0.010269576379974325,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2464494850912028,
              "mixed_qty_pct": 0.49284848892777816,
              "instit_qty_pct": 0.26070202598101905,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.24646096023797823,
              "mixed_notional_pct": 0.4938518113509635,
              "instit_notional_pct": 0.25968722841105824,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3895.028241335045,
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
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "3m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 19233,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-22",
          "last_trade_date": "2026-04-23",
          "period_days": 91,
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
            "retail_pct": 0.9589767586959913,
            "mixed_pct": 0.033068164092965216,
            "instit_pct": 0.007955077211043519,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2409825447974221,
            "mixed_qty_pct": 0.3590163890732404,
            "instit_qty_pct": 0.4000010661293375,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.23998035308816856,
            "mixed_notional_pct": 0.3582998990001971,
            "instit_notional_pct": 0.40171974791163434,
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
              "retail": 18444,
              "mixed": 636,
              "institutional": 153,
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
            "avg": 2603.229839338637,
            "median": 130.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9589767586959913,
              "mixed_pct": 0.033068164092965216,
              "instit_pct": 0.007955077211043519,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2409825447974221,
              "mixed_qty_pct": 0.3590163890732404,
              "instit_qty_pct": 0.4000010661293375,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.23998035308816856,
              "mixed_notional_pct": 0.3582998990001971,
              "instit_notional_pct": 0.40171974791163434,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2603.229839338637,
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
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9981447124304267,
              "mixed_pct": 0.0018552875695732839,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8565279770444764,
              "mixed_qty_pct": 0.14347202295552366,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.868810054944578,
              "mixed_notional_pct": 0.13118994505542197,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 213.7421150278293,
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
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9622416623563541,
              "mixed_pct": 0.03429509523916612,
              "instit_pct": 0.0034632424044797267,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.35573469163454724,
              "mixed_qty_pct": 0.4512281180478968,
              "instit_qty_pct": 0.19303719031755598,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3558267133596972,
              "mixed_notional_pct": 0.4500098908889501,
              "instit_notional_pct": 0.19416339575135272,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2074.9484336699124,
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
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9534348690123773,
              "mixed_pct": 0.02964435025686273,
              "instit_pct": 0.016920780730760032,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1913633941789473,
              "mixed_qty_pct": 0.196135253130401,
              "instit_qty_pct": 0.6125013526906518,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.18993446090900584,
              "mixed_notional_pct": 0.19604138896765602,
              "instit_notional_pct": 0.6140241501233381,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4769.292580254141,
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
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9359953024075162,
              "mixed_pct": 0.05637110980622431,
              "instit_pct": 0.007633587786259542,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3066870373499088,
              "mixed_qty_pct": 0.4961972569073364,
              "instit_qty_pct": 0.19711570574275475,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3049453054258288,
              "mixed_notional_pct": 0.49291933979726604,
              "instit_notional_pct": 0.20213535477690517,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3435.283499706401,
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
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9191036559457612,
              "mixed_pct": 0.05556273977326609,
              "instit_pct": 0.025333604280972703,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.19892567098948746,
              "mixed_qty_pct": 0.1966687010527865,
              "instit_qty_pct": 0.604405627957726,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.1987052427613212,
              "mixed_notional_pct": 0.1964765685014942,
              "instit_notional_pct": 0.6048181887371846,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8405.710547868443,
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
              "ticker": "ODBU",
              "currency": "USD",
              "is_target": false,
              "retail_pct": 0.8730251609128145,
              "mixed_pct": 0.11059098888238736,
              "instit_pct": 0.016383850204798128,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.24288129992808413,
              "mixed_qty_pct": 0.4580393528866774,
              "instit_qty_pct": 0.29907934718523843,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.24302732099402247,
              "mixed_notional_pct": 0.4572388644212662,
              "instit_notional_pct": 0.2997338145847113,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4765.548858981861,
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
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "6m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 40842,
          "n_runs": 0,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-23",
          "last_trade_date": "2026-04-23",
          "period_days": 182,
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
            "retail_pct": 0.9663091915185349,
            "mixed_pct": 0.027496204887125997,
            "instit_pct": 0.00619460359433916,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2691168657731344,
            "mixed_qty_pct": 0.3568691156391659,
            "instit_qty_pct": 0.3740140185876997,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2686559309884677,
            "mixed_notional_pct": 0.3562299102703234,
            "instit_notional_pct": 0.37511415874120885,
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
              "retail": 39466,
              "mixed": 1123,
              "institutional": 253,
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
            "avg": 2151.9033225601097,
            "median": 136.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9663091915185349,
              "mixed_pct": 0.027496204887125997,
              "instit_pct": 0.00619460359433916,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2691168657731344,
              "mixed_qty_pct": 0.3568691156391659,
              "instit_qty_pct": 0.3740140185876997,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2686559309884677,
              "mixed_notional_pct": 0.3562299102703234,
              "instit_notional_pct": 0.37511415874120885,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2151.9033225601097,
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
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9960906958561376,
              "mixed_pct": 0.003909304143862392,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6704275534441805,
              "mixed_qty_pct": 0.32957244655581946,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6757147540417896,
              "mixed_notional_pct": 0.3242852459582104,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 226.57154026583268,
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
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9627201099888953,
              "mixed_pct": 0.03378985775474592,
              "instit_pct": 0.003490032256358733,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3650308941994197,
              "mixed_qty_pct": 0.4461147309023653,
              "instit_qty_pct": 0.188854374898215,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.36549614086797977,
              "mixed_notional_pct": 0.44514896515589475,
              "instit_notional_pct": 0.18935489397612554,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2107.2883506953626,
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
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9605263157894737,
              "mixed_pct": 0.03618421052631579,
              "instit_pct": 0.003289473684210526,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.42333358239991425,
              "mixed_qty_pct": 0.44023214927401094,
              "instit_qty_pct": 0.13643426832607478,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4608150294252391,
              "mixed_notional_pct": 0.4165041374515796,
              "instit_notional_pct": 0.12268083312318127,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2359.663486842105,
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
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9550725434161355,
              "mixed_pct": 0.02898530812632813,
              "instit_pct": 0.015942148457536456,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1966125451656196,
              "mixed_qty_pct": 0.20147894276963066,
              "instit_qty_pct": 0.6019085120647497,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.19620604795929414,
              "mixed_notional_pct": 0.20176721929974245,
              "instit_notional_pct": 0.6020267327409634,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4515.1211621601815,
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
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9264209409632765,
              "mixed_pct": 0.051330252894763145,
              "instit_pct": 0.02224880614196028,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.21015797599131344,
              "mixed_qty_pct": 0.2088413328492224,
              "instit_qty_pct": 0.5810006911594642,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.21009738341595743,
              "mixed_notional_pct": 0.20917837271387393,
              "instit_notional_pct": 0.5807242438701686,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7275.932050856257,
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
              "ticker": "ODBU",
              "currency": "USD",
              "is_target": false,
              "retail_pct": 0.8969072164948454,
              "mixed_pct": 0.08906071019473082,
              "instit_pct": 0.014032073310423826,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2599289720615878,
              "mixed_qty_pct": 0.4532248121239169,
              "instit_qty_pct": 0.2868462158144953,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2594532297465933,
              "mixed_notional_pct": 0.45284914289586387,
              "instit_notional_pct": 0.28769762735754284,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3926.0591351660937,
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
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        }
      },
      "valid": true,
      "currency": "SGD",
      "n_trades": 40842,
      "n_runs": 0,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-23",
      "last_trade_date": "2026-04-23",
      "period_days": 182,
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
        "retail_pct": 0.9663091915185349,
        "mixed_pct": 0.027496204887125997,
        "instit_pct": 0.00619460359433916,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.2686559309884677,
        "mixed_notional_pct": 0.3562299102703234,
        "instit_notional_pct": 0.37511415874120885,
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
        "avg": 2151.9033225601097,
        "median": 136.0
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
            "month": "2026-04",
            "n_trades": 5848,
            "n_runs": 0,
            "retail_pct": 0.9716142270861833,
            "mixed_pct": 0.02359781121751026,
            "instit_pct": 0.0047879616963064295,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1891.5625,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2583568703527899,
            "mixed_qty_pct": 0.35105636501937015,
            "instit_qty_pct": 0.3905867646278399,
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
            "total_quantity": 16959100.0
          },
          {
            "month": "2026-03",
            "n_trades": 7834,
            "n_runs": 0,
            "retail_pct": 0.9527699770232321,
            "mixed_pct": 0.04008169517487874,
            "instit_pct": 0.007148327801889201,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2774.2507658922646,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2656893457830226,
            "mixed_qty_pct": 0.40913044800632625,
            "instit_qty_pct": 0.3251802062106512,
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
            "total_quantity": 32879000.0
          },
          {
            "month": "2026-02",
            "n_trades": 3981,
            "n_runs": 0,
            "retail_pct": 0.9500125596583773,
            "mixed_pct": 0.037176588796784725,
            "instit_pct": 0.01281085154483798,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 3258.591183119819,
            "avg_run_notional": null,
            "retail_qty_pct": 0.1956225434258907,
            "mixed_qty_pct": 0.324019483538312,
            "instit_qty_pct": 0.4803579730357973,
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
            "total_quantity": 18928800.0
          },
          {
            "month": "2026-01",
            "n_trades": 4399,
            "n_runs": 0,
            "retail_pct": 0.9581723118890657,
            "mixed_pct": 0.031370766083200725,
            "instit_pct": 0.010456922027733576,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2736.767219822687,
            "avg_run_notional": null,
            "retail_qty_pct": 0.21909625644065478,
            "mixed_qty_pct": 0.30213510555834205,
            "instit_qty_pct": 0.47876863800100317,
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
            "total_quantity": 17544800.0
          },
          {
            "month": "2025-12",
            "n_trades": 6567,
            "n_runs": 0,
            "retail_pct": 0.979442667884879,
            "mixed_pct": 0.019186843307446324,
            "instit_pct": 0.0013704888076747374,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1122.695523069895,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4231022558867117,
            "mixed_qty_pct": 0.46414000036591835,
            "instit_qty_pct": 0.11275774374736997,
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
            "total_quantity": 10931400.0
          },
          {
            "month": "2025-11",
            "n_trades": 8665,
            "n_runs": 0,
            "retail_pct": 0.9749567224466243,
            "mixed_pct": 0.020657818811309868,
            "instit_pct": 0.004385458742065782,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1786.9442008078477,
            "avg_run_notional": null,
            "retail_qty_pct": 0.32405704279091513,
            "mixed_qty_pct": 0.31817279572311397,
            "instit_qty_pct": 0.3577701614859709,
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
            "total_quantity": 22670700.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.9663091915185349,
          "mixed_pct": 0.027496204887125997,
          "instit_pct": 0.00619460359433916,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.2691168657731344,
          "mixed_qty_pct": 0.3568691156391659,
          "instit_qty_pct": 0.3740140185876997,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.2686559309884677,
          "mixed_notional_pct": 0.3562299102703234,
          "instit_notional_pct": 0.37511415874120885,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2151.9033225601097,
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
          "ticker": "BMGU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9960906958561376,
          "mixed_pct": 0.003909304143862392,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6704275534441805,
          "mixed_qty_pct": 0.32957244655581946,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6757147540417896,
          "mixed_notional_pct": 0.3242852459582104,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 226.57154026583268,
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
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9627201099888953,
          "mixed_pct": 0.03378985775474592,
          "instit_pct": 0.003490032256358733,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3650308941994197,
          "mixed_qty_pct": 0.4461147309023653,
          "instit_qty_pct": 0.188854374898215,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.36549614086797977,
          "mixed_notional_pct": 0.44514896515589475,
          "instit_notional_pct": 0.18935489397612554,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2107.2883506953626,
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
          "ticker": "D5IU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9605263157894737,
          "mixed_pct": 0.03618421052631579,
          "instit_pct": 0.003289473684210526,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.42333358239991425,
          "mixed_qty_pct": 0.44023214927401094,
          "instit_qty_pct": 0.13643426832607478,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.4608150294252391,
          "mixed_notional_pct": 0.4165041374515796,
          "instit_notional_pct": 0.12268083312318127,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2359.663486842105,
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
          "ticker": "JYEU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9550725434161355,
          "mixed_pct": 0.02898530812632813,
          "instit_pct": 0.015942148457536456,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.1966125451656196,
          "mixed_qty_pct": 0.20147894276963066,
          "instit_qty_pct": 0.6019085120647497,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.19620604795929414,
          "mixed_notional_pct": 0.20176721929974245,
          "instit_notional_pct": 0.6020267327409634,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4515.1211621601815,
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
          "ticker": "AJBU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9264209409632765,
          "mixed_pct": 0.051330252894763145,
          "instit_pct": 0.02224880614196028,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.21015797599131344,
          "mixed_qty_pct": 0.2088413328492224,
          "instit_qty_pct": 0.5810006911594642,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.21009738341595743,
          "mixed_notional_pct": 0.20917837271387393,
          "instit_notional_pct": 0.5807242438701686,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 7275.932050856257,
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
          "ticker": "ODBU",
          "currency": "USD",
          "is_target": false,
          "retail_pct": 0.8969072164948454,
          "mixed_pct": 0.08906071019473082,
          "instit_pct": 0.014032073310423826,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.2599289720615878,
          "mixed_qty_pct": 0.4532248121239169,
          "instit_qty_pct": 0.2868462158144953,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.2594532297465933,
          "mixed_notional_pct": 0.45284914289586387,
          "instit_notional_pct": 0.28769762735754284,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3926.0591351660937,
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
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9943181818181818,
            "mixed_pct": 0.005681818181818182,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6853965466783728,
            "mixed_qty_pct": 0.31460345332162715,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6846999825782819,
            "mixed_notional_pct": 0.31530001742171804,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 644.1150568181819,
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
            "ticker": "D5IU",
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
            "avg_trade_size": 700.0,
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
            "ticker": "ODBU",
            "currency": "USD",
            "is_target": false,
            "retail_pct": 0.9904761904761905,
            "mixed_pct": 0.009523809523809525,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8198198198198198,
            "mixed_qty_pct": 0.18018018018018017,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8189561529044606,
            "mixed_notional_pct": 0.18104384709553942,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 552.3523809523809,
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
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9890776699029126,
            "mixed_pct": 0.009708737864077669,
            "instit_pct": 0.0012135922330097086,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5924501922404753,
            "mixed_qty_pct": 0.29104042875451475,
            "instit_qty_pct": 0.1165093790050099,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5929324338434347,
            "mixed_notional_pct": 0.29076885333713637,
            "instit_notional_pct": 0.11629871281942884,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 714.8064320388349,
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
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.951061865189289,
            "mixed_pct": 0.0332409972299169,
            "instit_pct": 0.01569713758079409,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.16048087125849744,
            "mixed_qty_pct": 0.23868658247921548,
            "instit_qty_pct": 0.6008325462622871,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.16049390022769677,
            "mixed_notional_pct": 0.23912797246168674,
            "instit_notional_pct": 0.6003781273106165,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4524.410895660203,
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
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9370334307043168,
            "mixed_pct": 0.0379746835443038,
            "instit_pct": 0.024991885751379422,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1782743404375176,
            "mixed_qty_pct": 0.14642756548680874,
            "instit_qty_pct": 0.6752980940756736,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.17887598080113057,
            "mixed_notional_pct": 0.14633104449455625,
            "instit_notional_pct": 0.6747929747043132,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8128.3862382343395,
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
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9729311678267595,
            "mixed_pct": 0.022815158546017015,
            "instit_pct": 0.004253673627223511,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.28540797758039416,
            "mixed_qty_pct": 0.3654894179272209,
            "instit_qty_pct": 0.34910260449238495,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.28568798541844953,
            "mixed_notional_pct": 0.36601422167671316,
            "instit_notional_pct": 0.3482977929048373,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1779.4331013147719,
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
            "ticker": "BMGU",
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
            "avg_trade_size": 573.5666666666667,
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
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9730420636765048,
            "mixed_pct": 0.02478890696413355,
            "instit_pct": 0.0021690293593616856,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3725058245891065,
            "mixed_qty_pct": 0.4712083775391155,
            "instit_qty_pct": 0.15628579787177796,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3720498362722841,
            "mixed_notional_pct": 0.47250648104087933,
            "instit_notional_pct": 0.15544368268683656,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1458.7110930358665,
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
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9657931491608077,
            "mixed_pct": 0.02071349099259049,
            "instit_pct": 0.013493359846601804,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.20021897349157444,
            "mixed_qty_pct": 0.180565049865598,
            "instit_qty_pct": 0.6192159766428276,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19991026116364582,
            "mixed_notional_pct": 0.18034800903519607,
            "instit_notional_pct": 0.619741729801158,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3727.3819804464647,
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
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9655172413793104,
            "mixed_pct": 0.034482758620689655,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.31832113881903484,
            "mixed_qty_pct": 0.6816788611809652,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.32243722736687674,
            "mixed_notional_pct": 0.6775627726331233,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1620.846896551724,
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
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9217891249269148,
            "mixed_pct": 0.05437536542584292,
            "instit_pct": 0.023835509647242254,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.22465109683528178,
            "mixed_qty_pct": 0.20372001421431182,
            "instit_qty_pct": 0.5716288889504064,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.22346254249727296,
            "mixed_notional_pct": 0.20282953471870335,
            "instit_notional_pct": 0.5737079227840237,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7915.964159033327,
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
            "ticker": "ODBU",
            "currency": "USD",
            "is_target": false,
            "retail_pct": 0.8921694480102695,
            "mixed_pct": 0.0975609756097561,
            "instit_pct": 0.010269576379974325,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2464494850912028,
            "mixed_qty_pct": 0.49284848892777816,
            "instit_qty_pct": 0.26070202598101905,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.24646096023797823,
            "mixed_notional_pct": 0.4938518113509635,
            "instit_notional_pct": 0.25968722841105824,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3895.028241335045,
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
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9589767586959913,
            "mixed_pct": 0.033068164092965216,
            "instit_pct": 0.007955077211043519,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2409825447974221,
            "mixed_qty_pct": 0.3590163890732404,
            "instit_qty_pct": 0.4000010661293375,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.23998035308816856,
            "mixed_notional_pct": 0.3582998990001971,
            "instit_notional_pct": 0.40171974791163434,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2603.229839338637,
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
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9981447124304267,
            "mixed_pct": 0.0018552875695732839,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8565279770444764,
            "mixed_qty_pct": 0.14347202295552366,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.868810054944578,
            "mixed_notional_pct": 0.13118994505542197,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 213.7421150278293,
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
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9622416623563541,
            "mixed_pct": 0.03429509523916612,
            "instit_pct": 0.0034632424044797267,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.35573469163454724,
            "mixed_qty_pct": 0.4512281180478968,
            "instit_qty_pct": 0.19303719031755598,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3558267133596972,
            "mixed_notional_pct": 0.4500098908889501,
            "instit_notional_pct": 0.19416339575135272,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2074.9484336699124,
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
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9534348690123773,
            "mixed_pct": 0.02964435025686273,
            "instit_pct": 0.016920780730760032,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1913633941789473,
            "mixed_qty_pct": 0.196135253130401,
            "instit_qty_pct": 0.6125013526906518,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.18993446090900584,
            "mixed_notional_pct": 0.19604138896765602,
            "instit_notional_pct": 0.6140241501233381,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4769.292580254141,
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
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9359953024075162,
            "mixed_pct": 0.05637110980622431,
            "instit_pct": 0.007633587786259542,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3066870373499088,
            "mixed_qty_pct": 0.4961972569073364,
            "instit_qty_pct": 0.19711570574275475,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3049453054258288,
            "mixed_notional_pct": 0.49291933979726604,
            "instit_notional_pct": 0.20213535477690517,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3435.283499706401,
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
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9191036559457612,
            "mixed_pct": 0.05556273977326609,
            "instit_pct": 0.025333604280972703,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.19892567098948746,
            "mixed_qty_pct": 0.1966687010527865,
            "instit_qty_pct": 0.604405627957726,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1987052427613212,
            "mixed_notional_pct": 0.1964765685014942,
            "instit_notional_pct": 0.6048181887371846,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8405.710547868443,
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
            "ticker": "ODBU",
            "currency": "USD",
            "is_target": false,
            "retail_pct": 0.8730251609128145,
            "mixed_pct": 0.11059098888238736,
            "instit_pct": 0.016383850204798128,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.24288129992808413,
            "mixed_qty_pct": 0.4580393528866774,
            "instit_qty_pct": 0.29907934718523843,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.24302732099402247,
            "mixed_notional_pct": 0.4572388644212662,
            "instit_notional_pct": 0.2997338145847113,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4765.548858981861,
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
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "6m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9663091915185349,
            "mixed_pct": 0.027496204887125997,
            "instit_pct": 0.00619460359433916,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2691168657731344,
            "mixed_qty_pct": 0.3568691156391659,
            "instit_qty_pct": 0.3740140185876997,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2686559309884677,
            "mixed_notional_pct": 0.3562299102703234,
            "instit_notional_pct": 0.37511415874120885,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2151.9033225601097,
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
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9960906958561376,
            "mixed_pct": 0.003909304143862392,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6704275534441805,
            "mixed_qty_pct": 0.32957244655581946,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6757147540417896,
            "mixed_notional_pct": 0.3242852459582104,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 226.57154026583268,
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
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9627201099888953,
            "mixed_pct": 0.03378985775474592,
            "instit_pct": 0.003490032256358733,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3650308941994197,
            "mixed_qty_pct": 0.4461147309023653,
            "instit_qty_pct": 0.188854374898215,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.36549614086797977,
            "mixed_notional_pct": 0.44514896515589475,
            "instit_notional_pct": 0.18935489397612554,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2107.2883506953626,
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
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9605263157894737,
            "mixed_pct": 0.03618421052631579,
            "instit_pct": 0.003289473684210526,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.42333358239991425,
            "mixed_qty_pct": 0.44023214927401094,
            "instit_qty_pct": 0.13643426832607478,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4608150294252391,
            "mixed_notional_pct": 0.4165041374515796,
            "instit_notional_pct": 0.12268083312318127,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2359.663486842105,
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
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9550725434161355,
            "mixed_pct": 0.02898530812632813,
            "instit_pct": 0.015942148457536456,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1966125451656196,
            "mixed_qty_pct": 0.20147894276963066,
            "instit_qty_pct": 0.6019085120647497,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19620604795929414,
            "mixed_notional_pct": 0.20176721929974245,
            "instit_notional_pct": 0.6020267327409634,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4515.1211621601815,
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
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9264209409632765,
            "mixed_pct": 0.051330252894763145,
            "instit_pct": 0.02224880614196028,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.21015797599131344,
            "mixed_qty_pct": 0.2088413328492224,
            "instit_qty_pct": 0.5810006911594642,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.21009738341595743,
            "mixed_notional_pct": 0.20917837271387393,
            "instit_notional_pct": 0.5807242438701686,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7275.932050856257,
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
            "ticker": "ODBU",
            "currency": "USD",
            "is_target": false,
            "retail_pct": 0.8969072164948454,
            "mixed_pct": 0.08906071019473082,
            "instit_pct": 0.014032073310423826,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2599289720615878,
            "mixed_qty_pct": 0.4532248121239169,
            "instit_qty_pct": 0.2868462158144953,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2594532297465933,
            "mixed_notional_pct": 0.45284914289586387,
            "instit_notional_pct": 0.28769762735754284,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3926.0591351660937,
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
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "peer_activity_enabled": true,
      "peer_activity_reason": null,
      "recent_trades": [],
      "currency_thresholds": {
        "USD": {
          "retail_max": 10000.0,
          "instit_min": 50000.0
        },
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
      "total_trades": 39404,
      "price_moving_trades": 10903,
      "pct_price_moving": 27.669779717795144,
      "all_movers": {
        "count": 10903,
        "avg_size": 2131.5678253691644,
        "median_size": 201.0,
        "retail_count": 10554,
        "mixed_count": 283,
        "institutional_count": 66,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 96.79904613409154,
        "mixed_pct": 2.595615885536091,
        "instit_pct": 0.6053379803723746,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 5447,
        "avg_size": 2301.4578667156234,
        "median_size": 202.5,
        "retail_count": 5248,
        "mixed_count": 164,
        "institutional_count": 35,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 96.34661281439324,
        "mixed_pct": 3.0108316504497887,
        "instit_pct": 0.6425555351569672,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 5456,
        "avg_size": 1961.9580278592375,
        "median_size": 201.0,
        "retail_count": 5306,
        "mixed_count": 119,
        "institutional_count": 31,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.25073313782991,
        "mixed_pct": 2.18108504398827,
        "instit_pct": 0.5681818181818182,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "Sasseur Reit",
      "mapping": {
        "ticker_to_security": "Sasseur Reit",
        "confidence": "high"
      },
      "coverage": {
        "n_days_short_data": 100,
        "window_days": 126
      },
      "periods": {
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0804896744228743,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06454886118965254,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06135373814418215,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.13194261856925965,
        "interpretation": "Moderate negative - shorts somewhat predict drops"
      },
      "peaks": [
        {
          "date": "2026-03-25",
          "short_ratio": 0.36836158192090396,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-27",
          "short_ratio": 0.26441708229426436,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-24",
          "short_ratio": 0.2476085356880059,
          "return_pct": 0.7936507936507908
        },
        {
          "date": "2025-12-02",
          "short_ratio": 0.23535638673253353,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-09",
          "short_ratio": 0.20926869577193224,
          "return_pct": -0.7407407407407418
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.028539233445392907
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.03425148828958405
          }
        ],
        "mom_change": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.028539233445392907,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 409.328536613381
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306,
            "change_pct": -86.54362251882017
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978,
            "change_pct": -13.175978023528142
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508,
            "change_pct": 363.4885487569835
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344,
            "change_pct": -15.008538631225035
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901,
            "change_pct": -3.2825191323453518
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607,
            "change_pct": 7.664814402874552
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169,
            "change_pct": -22.95440661798473
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575,
            "change_pct": -56.329848434615435
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631,
            "change_pct": 5.067221970287669
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.03425148828958405,
            "change_pct": 39.08434243757299
          }
        ],
        "interpretation": "Shorts covering significantly (-80% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-04-23",
            "short_ratio": 0.001321003963011889,
            "short_vol": 800,
            "total_vol": 605600,
            "close": 0.66,
            "return": -0.014925373134328401
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0046252848907360235,
            "short_vol": 6900,
            "total_vol": 1491800,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.023340669523919843,
            "short_vol": 40300,
            "total_vol": 1726600,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.007475209763539283,
            "short_vol": 4900,
            "total_vol": 655500,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0030158914279085954,
            "short_vol": 2600,
            "total_vol": 862100,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.006643180674383493,
            "short_vol": 6600,
            "total_vol": 993500,
            "close": 0.67,
            "return": 0.015151515151515138
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.008671713695801789,
            "short_vol": 18900,
            "total_vol": 2179500,
            "close": 0.66,
            "return": 0.007633587786259444
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.04148936170212766,
            "short_vol": 35100,
            "total_vol": 846000,
            "close": 0.655,
            "return": 0.0
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.05741664069803677,
            "short_vol": 73700,
            "total_vol": 1283600,
            "close": 0.655,
            "return": 0.015503875968992276
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.016528313074414467,
            "short_vol": 22300,
            "total_vol": 1349200,
            "close": 0.645,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.00303905181583346,
            "short_vol": 4000,
            "total_vol": 1316200,
            "close": 0.645,
            "return": 0.0
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.010373267579287476,
            "short_vol": 12200,
            "total_vol": 1176100,
            "close": 0.645,
            "return": 0.015748031496062964
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.043985045084671215,
            "short_vol": 20000,
            "total_vol": 454700,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.1613056945437217,
            "short_vol": 203100,
            "total_vol": 1259100,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.05267156242086604,
            "short_vol": 41600,
            "total_vol": 789800,
            "close": 0.635,
            "return": -0.0078125
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.01472584426802682,
            "short_vol": 35800,
            "total_vol": 2431100,
            "close": 0.64,
            "return": 0.007874015748031482
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.10057279872119355,
            "short_vol": 151000,
            "total_vol": 1501400,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.06768748912476075,
            "short_vol": 38900,
            "total_vol": 574700,
            "close": 0.63,
            "return": -0.007874015748031482
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.26441708229426436,
            "short_vol": 339300,
            "total_vol": 1283200,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.1595657756507529,
            "short_vol": 136700,
            "total_vol": 856700,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.36836158192090396,
            "short_vol": 97800,
            "total_vol": 265500,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.2476085356880059,
            "short_vol": 134600,
            "total_vol": 543600,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.18642151319994102,
            "short_vol": 379200,
            "total_vol": 2034100,
            "close": 0.63,
            "return": -0.015625
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.1987347631538343,
            "short_vol": 386400,
            "total_vol": 1944300,
            "close": 0.64,
            "return": 0.0
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.17494422918868147,
            "short_vol": 149000,
            "total_vol": 851700,
            "close": 0.64,
            "return": -0.015384615384615441
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.11682385153635534,
            "short_vol": 192000,
            "total_vol": 1643500,
            "close": 0.65,
            "return": 0.007751937984496138
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.13784764207980654,
            "short_vol": 114000,
            "total_vol": 827000,
            "close": 0.645,
            "return": 0.015748031496062964
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.18052071005917159,
            "short_vol": 762700,
            "total_vol": 4225000,
            "close": 0.635,
            "return": -0.06617647058823539
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.17986120035985093,
            "short_vol": 559800,
            "total_vol": 3112400,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.16983923463852452,
            "short_vol": 172200,
            "total_vol": 1013900,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.11613756613756614,
            "short_vol": 131700,
            "total_vol": 1134000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.1979909267660402,
            "short_vol": 183300,
            "total_vol": 925800,
            "close": 0.68,
            "return": 0.014925373134328401
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.20926869577193224,
            "short_vol": 607800,
            "total_vol": 2904400,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.02449013707790037,
            "short_vol": 29300,
            "total_vol": 1196400,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0008945998698763826,
            "short_vol": 1100,
            "total_vol": 1229600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0033744990977901718,
            "short_vol": 14400,
            "total_vol": 4267300,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.03416203059805285,
            "short_vol": 39300,
            "total_vol": 1150400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.05836125856291332,
            "short_vol": 196800,
            "total_vol": 3372100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0067413905133203375,
            "short_vol": 16600,
            "total_vol": 2462400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0060887923385246154,
            "short_vol": 39800,
            "total_vol": 6536600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0008496176720475786,
            "short_vol": 800,
            "total_vol": 941600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 382700,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1809900,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.09221772379667116,
            "short_vol": 20500,
            "total_vol": 222300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.04595755760968624,
            "short_vol": 105900,
            "total_vol": 2304300,
            "close": 0.69,
            "return": 0.014705882352941124
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.06251680559290132,
            "short_vol": 46500,
            "total_vol": 743800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.009060706735125339,
            "short_vol": 18000,
            "total_vol": 1986600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.022450728363324766,
            "short_vol": 13100,
            "total_vol": 583500,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.006556033599672198,
            "short_vol": 3200,
            "total_vol": 488100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 726400,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.002091020910209102,
            "short_vol": 1700,
            "total_vol": 813000,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.030951223464592448,
            "short_vol": 19100,
            "total_vol": 617100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.01563966218329684,
            "short_vol": 10000,
            "total_vol": 639400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 775000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.025183823529411765,
            "short_vol": 13700,
            "total_vol": 544000,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.025774609267891418,
            "short_vol": 9400,
            "total_vol": 364700,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.004020369874028411,
            "short_vol": 4500,
            "total_vol": 1119300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.03738632536207477,
            "short_vol": 11100,
            "total_vol": 296900,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0007983273141988215,
            "short_vol": 2100,
            "total_vol": 2630500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.025203641590800192,
            "short_vol": 26300,
            "total_vol": 1043500,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.016331658291457288,
            "short_vol": 3900,
            "total_vol": 238800,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.09597292724196277,
            "short_vol": 141800,
            "total_vol": 1477500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 285400,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.018341650418057437,
            "short_vol": 55500,
            "total_vol": 3025900,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.043049733771383256,
            "short_vol": 38000,
            "total_vol": 882700,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.012526652452025586,
            "short_vol": 14100,
            "total_vol": 1125600,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.05860180641490648,
            "short_vol": 82400,
            "total_vol": 1406100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.008310957678046285,
            "short_vol": 6500,
            "total_vol": 782100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0022742213456994117,
            "short_vol": 12800,
            "total_vol": 5628300,
            "close": 0.68,
            "return": -0.014492753623188248
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 540300,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 319100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0015347885402455662,
            "short_vol": 900,
            "total_vol": 586400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.007297551789077213,
            "short_vol": 6200,
            "total_vol": 849600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 772400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0003454231433506045,
            "short_vol": 200,
            "total_vol": 579000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0045684058667949026,
            "short_vol": 3800,
            "total_vol": 831800,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.020073603211776515,
            "short_vol": 6000,
            "total_vol": 298900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.00038550501156515033,
            "short_vol": 200,
            "total_vol": 518800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0137524557956778,
            "short_vol": 7700,
            "total_vol": 559900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.023554603854389723,
            "short_vol": 4400,
            "total_vol": 186800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0009287925696594427,
            "short_vol": 300,
            "total_vol": 323000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0002644802962179318,
            "short_vol": 100,
            "total_vol": 378100,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.002872737719046251,
            "short_vol": 2000,
            "total_vol": 696200,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.013897662665824383,
            "short_vol": 4400,
            "total_vol": 316600,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.04928861788617886,
            "short_vol": 58200,
            "total_vol": 1180800,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.10728476821192053,
            "short_vol": 24300,
            "total_vol": 226500,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.13839969372128638,
            "short_vol": 72300,
            "total_vol": 522400,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.04323945307935024,
            "short_vol": 37000,
            "total_vol": 855700,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.01097147416716537,
            "short_vol": 5500,
            "total_vol": 501300,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.03396362760448031,
            "short_vol": 28200,
            "total_vol": 830300,
            "close": 0.67,
            "return": 0.0
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.04602865135203865,
            "short_vol": 54300,
            "total_vol": 1179700,
            "close": 0.67,
            "return": 0.0
          },
          {
            "date": "2025-12-10",
            "short_ratio": 0.16329378925331473,
            "short_vol": 23400,
            "total_vol": 143300,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2025-12-09",
            "short_ratio": 0.08530183727034121,
            "short_vol": 84500,
            "total_vol": 990600,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.1941747572815534,
            "short_vol": 98000,
            "total_vol": 504700,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2025-12-05",
            "short_ratio": 0.09750975097509751,
            "short_vol": 130000,
            "total_vol": 1333200,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-12-04",
            "short_ratio": 0.20565704183853858,
            "short_vol": 69800,
            "total_vol": 339400,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-03",
            "short_ratio": 0.1316745876432765,
            "short_vol": 47100,
            "total_vol": 357700,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2025-12-02",
            "short_ratio": 0.23535638673253353,
            "short_vol": 66700,
            "total_vol": 283400,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-01",
            "short_ratio": 0.1338889874091151,
            "short_vol": 75500,
            "total_vol": 563900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-28",
            "short_ratio": 0.09212067955477446,
            "short_vol": 62900,
            "total_vol": 682800,
            "close": 0.68,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06454886118965254,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "BMGU",
          "avg_short_ratio": 1.976597090449083e-05,
          "max_short_ratio": 0.007352941176470588,
          "is_target": false
        },
        {
          "ticker": "ODBU",
          "avg_short_ratio": 0.0008335682616543102,
          "max_short_ratio": 0.1091703056768559,
          "is_target": false
        },
        {
          "ticker": "D5IU",
          "avg_short_ratio": 0.0014637631039160618,
          "max_short_ratio": 0.2702329197017246,
          "is_target": false
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06307626725341907,
          "max_short_ratio": 0.583009889700239,
          "is_target": false
        },
        {
          "ticker": "AJBU",
          "avg_short_ratio": 0.08187014923644607,
          "max_short_ratio": 0.4312404120096428,
          "is_target": false
        },
        {
          "ticker": "JYEU",
          "avg_short_ratio": 0.10510610039719205,
          "max_short_ratio": 0.6966426355939308,
          "is_target": false
        }
      ]
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
          "opening": 0.03358472396412203,
          "continuous": 0.8841063567377165,
          "closing": 0.07373225138171785,
          "auctions": 0.11589364326228348,
          "other": 0.0
        },
        "1M": {
          "opening": 0.05811420892106272,
          "continuous": 0.8702020838327684,
          "closing": 0.06110661984079905,
          "auctions": 0.12979791616723158,
          "other": 0.0
        },
        "3M": {
          "opening": 0.049232028610203954,
          "continuous": 0.8549129701166011,
          "closing": 0.0827539253211002,
          "auctions": 0.14508702988339894,
          "other": 0.0
        },
        "6M": {
          "opening": 0.036896337776484246,
          "continuous": 0.8725321217429112,
          "closing": 0.07893335691817792,
          "auctions": 0.12746787825708897,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.16935371262744162,
        "1M": 0.2059208636642807,
        "3M": 0.23796134126703708,
        "6M": 0.22786670176479865
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0181
        },
        {
          "time": "09:00",
          "avg_share": 0.0991
        },
        {
          "time": "09:30",
          "avg_share": 0.0383
        },
        {
          "time": "10:00",
          "avg_share": 0.0446
        },
        {
          "time": "10:30",
          "avg_share": 0.0351
        },
        {
          "time": "11:00",
          "avg_share": 0.0316
        },
        {
          "time": "11:30",
          "avg_share": 0.0407
        },
        {
          "time": "12:00",
          "avg_share": 0.2338
        },
        {
          "time": "12:30",
          "avg_share": 0.0093
        },
        {
          "time": "13:00",
          "avg_share": 0.0182
        },
        {
          "time": "13:30",
          "avg_share": 0.0194
        },
        {
          "time": "14:00",
          "avg_share": 0.0372
        },
        {
          "time": "14:30",
          "avg_share": 0.0335
        },
        {
          "time": "15:00",
          "avg_share": 0.0282
        },
        {
          "time": "15:30",
          "avg_share": 0.0496
        },
        {
          "time": "16:00",
          "avg_share": 0.0447
        },
        {
          "time": "16:30",
          "avg_share": 0.1046
        },
        {
          "time": "17:00",
          "avg_share": 0.1139
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.700818142233137,
          "hhi": 0.2276923191449827,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ODBU",
          "auctions_pct": 7.117782604206356,
          "hhi": 0.3905704206181323,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D5IU",
          "auctions_pct": 12.843612512062885,
          "hhi": 0.42183110312198085,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BMGU",
          "auctions_pct": 0.7570181584120349,
          "hhi": 0.7504933693917757,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.58941935224144,
          "hhi": 0.17315348659651464,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "JYEU",
          "auctions_pct": 13.340219777279994,
          "hhi": 0.21052572256831212,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "AJBU",
          "auctions_pct": 20.508069952300108,
          "hhi": 0.14735637756926317,
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
