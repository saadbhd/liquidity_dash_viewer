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
      "marketCap": 806747427.87,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "ODBU",
      "name": "UtdHampshReitUSD",
      "marketCap": 306639076.12,
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
      "marketCap": 1144044274.45,
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
      "marketCap": 4760129910.690001,
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
    "asof_date": "2026-04-13",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "806.7M",
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
          "score_pca": 84.22939068100358,
          "score_pca_percentile": 84.22939068100358,
          "rank_pca": 89,
          "total": 558,
          "adv_notional_sgd": 840758.0,
          "adv_volume_shares": 1283600.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002808379097904745,
          "votes": 1115.0,
          "trades": 1115.0,
          "spread_pct": 0.00772030539296625,
          "spread_ticks": 1.0,
          "amihud": 1.8440354976095707e-08,
          "volatility": 0.14667387091967607
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5076314060074202,
          "loadings": {
            "log_adv": 0.5589631221600231,
            "log_trades": 0.5149119620124044,
            "log_turnover": 0.5136774052532106,
            "neg_spread": 0.35611862226325813,
            "neg_amihud": 0.06600990590356645,
            "neg_vol": -0.16548003497070424
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
          "peer_median_adv": 754862.4370905892,
          "peer_median_score_pca": 77.95698924731184,
          "peer_median_trades": 461.5,
          "peer_median_volatility": 0.10404031430274441,
          "peer_median_spread_pct": 0.009947068464073186,
          "peer_median_spread_ticks": 1.008753101043863,
          "peer_median_amihud": 0.0,
          "peer_median_turnover_ratio": 0.0011316380290432703,
          "target_vs_peer": {
            "score_pca_delta": 6.27,
            "adv_delta_pct": 11.4,
            "trades_delta_pct": 141.6,
            "volatility_delta_pct": -40.98,
            "spread_pct_delta_pct": 22.39,
            "spread_ticks_delta_pct": -0.87,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 148.17
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.22939068100358,
            "rank_pca": 89,
            "adv": 840758.0,
            "trades": 1115.0,
            "volatility": 0.14667387091967607,
            "spread_pct": 0.00772030539296625,
            "spread_ticks": 1.0,
            "amihud": 1.8440354976095707e-08,
            "turnover_ratio": 0.002808379097904745,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 73.11827956989248,
            "rank_pca": 151,
            "adv": 296153.8741811784,
            "trades": 83.0,
            "volatility": 0.18693958878551895,
            "spread_pct": 0.011083564240921695,
            "spread_ticks": 1.1343283582089552,
            "amihud": 3.2467529394878576e-08,
            "turnover_ratio": 0.0007641296176756822,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 31.36200716845878,
            "rank_pca": 384,
            "adv": 252.0,
            "trades": 4.0,
            "volatility": 0.0,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 1.1358522429133922e-05,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 16.845878136200717,
            "rank_pca": 465,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.100983606557377,
            "spread_ticks": 8.555555555555555,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 82.79569892473118,
            "rank_pca": 97,
            "adv": 1213571.0,
            "trades": 840.0,
            "volatility": 0.21424752335923616,
            "spread_pct": 0.007661334988909877,
            "spread_ticks": 1.0170998632010944,
            "amihud": 6.1955971199717675e-09,
            "turnover_ratio": 0.0014991464404108586,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 93.36917562724014,
            "rank_pca": 38,
            "adv": 4109756.9999999995,
            "trades": 3356.0,
            "volatility": 0.08399713863977587,
            "spread_pct": 0.008810572687224677,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00856015239006463,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 92.1146953405018,
            "rank_pca": 45,
            "adv": 7874790.0,
            "trades": 2739.0,
            "volatility": 0.12408348996571295,
            "spread_pct": 0.0043398822308969905,
            "spread_ticks": 1.0004063388866316,
            "amihud": 0.0,
            "turnover_ratio": 0.002094836119277437,
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
              "mean": 0.2310622929907628,
              "median": 0.08910178640665076,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8848513704784596,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2550274.401881042,
              "median": 10849.9,
              "min": 0.0,
              "max": 203948664.0,
              "p5": 0.0,
              "p95": 11566494.40999998,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10805107207881111,
              "median": 0.02911112781020911,
              "min": 0.00022251652530667204,
              "max": 1.2520325203252034,
              "p5": 0.003227520554665631,
              "p95": 0.5216519647153168,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004424884491843785,
              "median": 0.0002450335085081181,
              "min": 0.0,
              "max": 0.5240261024322721,
              "p5": 0.0,
              "p95": 0.012645558797535424,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.008030652186634122,
              "median": 9.820776974567706e-09,
              "min": 0.0,
              "max": 2.5,
              "p5": 0.0,
              "p95": 6.244920679780562e-05,
              "count": 409
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 451.8440860215054,
              "median": 7.0,
              "min": 0.0,
              "max": 9480.0,
              "p5": 0.0,
              "p95": 2608.199999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.11073777414185523,
              "median": 0.11589799304301293,
              "min": 0.0,
              "max": 0.21424752335923616,
              "p5": 0.0,
              "p95": 0.2046897462584351,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 6601323.734272648,
              "median": 1027164.5,
              "min": 0.0,
              "max": 41238404.0,
              "p5": 88.2,
              "p95": 29538453.849999983,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03741280242479539,
              "median": 0.008482781978895536,
              "min": 0.004250621484741657,
              "max": 0.15384615384615383,
              "p5": 0.004341954977945875,
              "p95": 0.1353442622950819,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0020671709849188766,
              "median": 0.0016817396781814609,
              "min": 0.0,
              "max": 0.00492638944315512,
              "p5": 3.975482850196873e-06,
              "p95": 0.004834424282689021,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.157711633556882e-09,
              "median": 6.1955971199717675e-09,
              "min": 0.0,
              "max": 3.2467529394878576e-08,
              "p5": 3.095647796361906e-11,
              "p95": 2.8259377069243706e-08,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1345.5,
              "median": 780.5,
              "min": 0.0,
              "max": 6041.0,
              "p5": 1.4000000000000001,
              "p95": 4612.649999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2249087.3123635296,
              "median": 754862.4370905892,
              "min": 0.0,
              "max": 7874790.0,
              "p5": 63.0,
              "p95": 6933531.75,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1170.3333333333333,
              "median": 461.5,
              "min": 0.0,
              "max": 3356.0,
              "p5": 1.0,
              "p95": 3201.75,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.10154462345837399,
              "median": 0.10404031430274441,
              "min": 0.0,
              "max": 0.21424752335923616,
              "p5": 0.0,
              "p95": 0.20742053971580687,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.047787519091914005,
              "median": 0.009947068464073186,
              "min": 0.0043398822308969905,
              "max": 0.15384615384615383,
              "p5": 0.0051702454204002124,
              "p95": 0.14063051702395962,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.2845650193087064,
              "median": 1.008753101043863,
              "min": 1.0,
              "max": 8.555555555555555,
              "p5": 1.0,
              "p95": 6.7002487562189055,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.732625302970068e-09,
              "median": 0.0,
              "min": 0.0,
              "max": 3.2467529394878576e-08,
              "p5": 0.0,
              "p95": 2.7213142939897212e-08,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0021549371816429568,
              "median": 0.0011316380290432703,
              "min": 0.0,
              "max": 0.00856015239006463,
              "p5": 2.8396306072834804e-06,
              "p95": 0.006943823322367831,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.015503875968992276,
            "market": -0.0010502713168281108,
            "sector": 0.0021276595744681437,
            "peers": 0.0,
            "vs_market": 0.016554147285820386,
            "vs_sector": 0.013376216394524132,
            "vs_peers": 0.015503875968992276
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 83.87096774193549,
          "score_pca_percentile": 83.87096774193549,
          "rank_pca": 91,
          "total": 558,
          "adv_notional_sgd": 814832.0,
          "adv_volume_shares": 1283200.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0028075039408159614,
          "votes": 431.0,
          "trades": 431.0,
          "spread_pct": 0.007843137254901968,
          "spread_ticks": 1.0,
          "amihud": 7.256500418427968e-09,
          "volatility": 0.2746764618759098
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5278616986307217,
          "loadings": {
            "log_adv": 0.5447219004153119,
            "log_trades": 0.5001384087870463,
            "log_turnover": 0.5029065585094966,
            "neg_spread": 0.4107101314446878,
            "neg_amihud": 0.10870747659378817,
            "neg_vol": 0.1404439003065826
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
          "peer_median_adv": 607578.9525547957,
          "peer_median_score_pca": 75.98566308243727,
          "peer_median_trades": 430.5,
          "peer_median_volatility": 0.22147202849510814,
          "peer_median_spread_pct": 0.009850632101743258,
          "peer_median_spread_ticks": 1.0025019893228873,
          "peer_median_amihud": 4.0168927001113114e-09,
          "peer_median_turnover_ratio": 0.000855162111669708,
          "target_vs_peer": {
            "score_pca_delta": 7.89,
            "adv_delta_pct": 34.1,
            "trades_delta_pct": 0.12,
            "volatility_delta_pct": -24.02,
            "spread_pct_delta_pct": 20.38,
            "spread_ticks_delta_pct": -0.25,
            "amihud_delta_pct": -80.65,
            "turnover_ratio_delta_pct": 228.3
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 814832.0,
            "trades": 431.0,
            "volatility": 0.2746764618759098,
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0,
            "amihud": 7.256500418427968e-09,
            "turnover_ratio": 0.0028075039408159614,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 66.12903225806451,
            "rank_pca": 190,
            "adv": 118722.40510959137,
            "trades": 21.0,
            "volatility": 0.15520574908521398,
            "spread_pct": 0.010667804565820364,
            "spread_ticks": 1.0869565217391304,
            "amihud": 3.1300532189414394e-08,
            "turnover_ratio": 0.0003033794687132258,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 43.01075268817204,
            "rank_pca": 319,
            "adv": 4140.6,
            "trades": 17.0,
            "volatility": 1.3484685190759098,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00021773656467625888,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 21.50537634408602,
            "rank_pca": 439,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.39537322906012096,
            "spread_pct": 0.0981475463113422,
            "spread_ticks": 8.38888888888889,
            "amihud": 2.223951962637611e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.84229390681004,
            "rank_pca": 80,
            "adv": 1096435.5,
            "trades": 840.0,
            "volatility": 0.20875916062234648,
            "spread_pct": 0.007759232454974888,
            "spread_ticks": 1.0038948393378773,
            "amihud": 7.015741183414496e-09,
            "turnover_ratio": 0.0014069447546261903,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.6989247311828,
            "rank_pca": 25,
            "adv": 8353694.499999999,
            "trades": 2800.0,
            "volatility": 0.2341848963678698,
            "spread_pct": 0.00903345963766615,
            "spread_ticks": 1.0,
            "amihud": 1.018044216808127e-09,
            "turnover_ratio": 0.01787990388404784,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 96.95340501792114,
            "rank_pca": 18,
            "adv": 20019465.0,
            "trades": 3450.0,
            "volatility": 0.18769957797942732,
            "spread_pct": 0.004474984142267051,
            "spread_ticks": 1.001109139307897,
            "amihud": 3.120990590179181e-10,
            "turnover_ratio": 0.005467552996396528,
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
              "mean": 0.6316136097851205,
              "median": 0.3806516179187508,
              "min": 0.0,
              "max": 10.345938508287322,
              "p5": 0.0,
              "p95": 1.858754148901324,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3153118.0794065106,
              "median": 9864.75,
              "min": 0.0,
              "max": 270730200.0,
              "p5": 0.0,
              "p95": 12736565.400484825,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11088021957242412,
              "median": 0.034262655906089484,
              "min": 0.0002674471588617271,
              "max": 1.3614536015574303,
              "p5": 0.0034260156658703893,
              "p95": 0.5417690417690416,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006673135203536352,
              "median": 0.00018037467566378633,
              "min": 0.0,
              "max": 2.2707797772065126,
              "p5": 0.0,
              "p95": 0.009837597332501068,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.345403725054353e-05,
              "median": 1.6663310126536243e-07,
              "min": 0.0,
              "max": 0.0182648401826484,
              "p5": 0.0,
              "p95": 0.00012961185793710034,
              "count": 538
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 466.163082437276,
              "median": 6.0,
              "min": 0.0,
              "max": 10826.0,
              "p5": 0.0,
              "p95": 2847.4999999999955,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3633140434781812,
              "median": 0.20751934801106997,
              "min": 0.14024128862662727,
              "max": 1.3484685190759098,
              "p5": 0.14547884978713263,
              "p95": 1.0148851675703832,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8303415.000638699,
              "median": 843681.75,
              "min": 0.0,
              "max": 54903990.0,
              "p5": 1449.2100000000003,
              "p95": 38703427.299999975,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.037048417372695396,
              "median": 0.008544197909863396,
              "min": 0.004332557752007294,
              "max": 0.15384615384615383,
              "p5": 0.004407139419842962,
              "p95": 0.13435164120896972,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022231267527672276,
              "median": 0.0012795154747317532,
              "min": 0.0,
              "max": 0.006586807015961539,
              "p5": 7.620779763669062e-05,
              "p95": 0.006140119189252566,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.8496198747895593e-07,
              "median": 7.136120800921232e-09,
              "min": 0.0,
              "max": 2.223951962637611e-06,
              "p5": 3.098517348471139e-11,
              "p95": 1.4565239619807408e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1185.125,
              "median": 520.5,
              "min": 0.0,
              "max": 5927.0,
              "p5": 5.95,
              "p95": 4424.799999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4932076.334184932,
              "median": 607578.9525547957,
              "min": 0.0,
              "max": 20019465.0,
              "p5": 1035.15,
              "p95": 17103022.375,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1188.0,
              "median": 430.5,
              "min": 0.0,
              "max": 3450.0,
              "p5": 4.25,
              "p95": 3287.5,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.42161518869848136,
              "median": 0.22147202849510814,
              "min": 0.15520574908521398,
              "max": 1.3484685190759098,
              "p5": 0.16332920630876732,
              "p95": 1.1101946965719627,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.047321530159704084,
              "median": 0.009850632101743258,
              "min": 0.004474984142267051,
              "max": 0.15384615384615383,
              "p5": 0.005296046220444011,
              "p95": 0.13992150196245093,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.246808231545632,
              "median": 1.0025019893228873,
              "min": 1.0,
              "max": 8.38888888888889,
              "p5": 1.0,
              "p95": 6.563405797101449,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.77266396547711e-07,
              "median": 4.0168927001113114e-09,
              "min": 0.0,
              "max": 2.223951962637611e-06,
              "p5": 7.802476475447953e-11,
              "p95": 1.6757891050255618e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0042125862780766745,
              "median": 0.000855162111669708,
              "min": 0.0,
              "max": 0.01787990388404784,
              "p5": 5.443414116906472e-05,
              "p95": 0.014776816162135012,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.029629629629629783,
            "market": 0.026535753836895992,
            "sector": 0.010482800253857949,
            "peers": 0.002373529874609037,
            "vs_market": -0.056165383466525776,
            "vs_sector": -0.04011242988348773,
            "vs_peers": -0.03200315950423882
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
          "adv_notional_sgd": 758584.5,
          "adv_volume_shares": 1119300.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002448908323687115,
          "votes": 335.0,
          "trades": 335.0,
          "spread_pct": 0.007380073800738015,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.1777698211930954
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5500968952532476,
          "loadings": {
            "log_adv": 0.5254577493406578,
            "log_trades": 0.4745363311874542,
            "log_turnover": 0.47959432428064835,
            "neg_spread": 0.42125239936188397,
            "neg_amihud": 0.16971816933761888,
            "neg_vol": 0.24988170638790677
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
          "peer_median_adv": 755986.8683266903,
          "peer_median_score_pca": 75.89605734767025,
          "peer_median_trades": 461.5,
          "peer_median_volatility": 0.20664666433818063,
          "peer_median_spread_pct": 0.009414598288559776,
          "peer_median_spread_ticks": 1.0012153934558894,
          "peer_median_amihud": 2.7682480788202e-09,
          "peer_median_turnover_ratio": 0.0016382829030283036,
          "target_vs_peer": {
            "score_pca_delta": 8.51,
            "adv_delta_pct": 0.3,
            "trades_delta_pct": -27.41,
            "volatility_delta_pct": 13.97,
            "spread_pct_delta_pct": 21.61,
            "spread_ticks_delta_pct": -0.12,
            "amihud_delta_pct": -82.81,
            "turnover_ratio_delta_pct": 49.48
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.40860215053763,
            "rank_pca": 88,
            "adv": 758584.5,
            "trades": 335.0,
            "volatility": 0.1777698211930954,
            "spread_pct": 0.007380073800738015,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.002448908323687115,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.05376344086021,
            "rank_pca": 196,
            "adv": 116138.73665338068,
            "trades": 20.0,
            "volatility": 0.2005046780344761,
            "spread_pct": 0.01022912047302292,
            "spread_ticks": 1.0649350649350648,
            "amihud": 3.223250614661947e-08,
            "turnover_ratio": 0.0002911696745559579,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 49.46236559139785,
            "rank_pca": 283,
            "adv": 34615.0,
            "trades": 39.0,
            "volatility": 1.399489753732679,
            "spread_pct": 0.14388210199728524,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0015393006493059907,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 20.25089605734767,
            "rank_pca": 446,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.4481823577753397,
            "spread_pct": 0.09756097560975605,
            "spread_ticks": 8.0,
            "amihud": 9.38399344574169e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.73835125448028,
            "rank_pca": 75,
            "adv": 1395835.0,
            "trades": 884.0,
            "volatility": 0.19597173421046993,
            "spread_pct": 0.007270795845797217,
            "spread_ticks": 1.0019406709176601,
            "amihud": 4.74073977995082e-09,
            "turnover_ratio": 0.0017372651567506168,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 96.05734767025089,
            "rank_pca": 23,
            "adv": 8533513.5,
            "trades": 2568.0,
            "volatility": 0.21278865064188518,
            "spread_pct": 0.008600076104096632,
            "spread_ticks": 1.0,
            "amihud": 7.957563776895805e-10,
            "turnover_ratio": 0.01651362278247,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.67025089605734,
            "rank_pca": 14,
            "adv": 25054129.999999996,
            "trades": 3468.0,
            "volatility": 0.14596265805418487,
            "spread_pct": 0.004451741230701149,
            "spread_ticks": 1.0004901159941186,
            "amihud": 2.1777614946632588e-10,
            "turnover_ratio": 0.006693827905808462,
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
              "mean": 0.6758123793087313,
              "median": 0.45238679922205444,
              "min": 0.0,
              "max": 8.046237349461608,
              "p5": 0.1559398607395784,
              "p95": 1.996968480571118,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3090694.806540244,
              "median": 13805.400000000001,
              "min": 0.0,
              "max": 280084950.0,
              "p5": 0.0,
              "p95": 12584496.799999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0980177079270279,
              "median": 0.02827420084359777,
              "min": 0.000267315276395102,
              "max": 1.3542204201990415,
              "p5": 0.003536940461532936,
              "p95": 0.49603594080338265,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005766421876150904,
              "median": 0.00029896535558343205,
              "min": 0.0,
              "max": 1.9906400369125306,
              "p5": 0.0,
              "p95": 0.00915369066523149,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.042269001018762e-05,
              "median": 1.4656846579457811e-07,
              "min": 0.0,
              "max": 0.0031520882584712374,
              "p5": 0.0,
              "p95": 5.399691736576961e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 441.6200716845878,
              "median": 7.0,
              "min": 0.0,
              "max": 11330.0,
              "p5": 0.0,
              "p95": 2549.75,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3648969832952068,
              "median": 0.198238206122473,
              "min": 0.1128871459071258,
              "max": 1.399489753732679,
              "p5": 0.1342433415090647,
              "p95": 1.0665321651476096,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9752570.092081673,
              "median": 775153.0,
              "min": 0.0,
              "max": 64247854.0,
              "p5": 12115.250000000002,
              "p95": 45497639.29999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03550308853058712,
              "median": 0.008159329825037621,
              "min": 0.004249022843416297,
              "max": 0.14388210199728524,
              "p5": 0.004341775987090983,
              "p95": 0.12766970776165,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026424866317240826,
              "median": 0.0016382829030283036,
              "min": 0.0,
              "max": 0.007512096170210739,
              "p5": 0.00010190938609458527,
              "p95": 0.007174042453024312,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1792004325993687e-06,
              "median": 4.900736721101071e-09,
              "min": 0.0,
              "max": 9.38399344574169e-06,
              "p5": 3.611589095755556e-11,
              "p95": 6.1108771168834094e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1171.5,
              "median": 444.0,
              "min": 0.0,
              "max": 5689.0,
              "p5": 7.000000000000001,
              "p95": 4346.049999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5855705.372775562,
              "median": 755986.8683266903,
              "min": 0.0,
              "max": 25054129.999999996,
              "p5": 8653.75,
              "p95": 20923975.874999996,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1163.1666666666667,
              "median": 461.5,
              "min": 0.0,
              "max": 3468.0,
              "p5": 5.0,
              "p95": 3243.0,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4338166387415057,
              "median": 0.20664666433818063,
              "min": 0.14596265805418487,
              "max": 1.399489753732679,
              "p5": 0.15846492709325613,
              "p95": 1.161662904743344,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0453324685434432,
              "median": 0.009414598288559776,
              "min": 0.004451741230701149,
              "max": 0.14388210199728524,
              "p5": 0.005156504884475166,
              "p95": 0.13230182040040295,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.1778943086411404,
              "median": 1.0012153934558894,
              "min": 1.0,
              "max": 8.0,
              "p5": 1.0,
              "p95": 6.266233766233766,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5703300373659026e-06,
              "median": 2.7682480788202e-09,
              "min": 0.0,
              "max": 9.38399344574169e-06,
              "p5": 5.444403736658147e-11,
              "p95": 7.046053210842922e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004462531028148505,
              "median": 0.0016382829030283036,
              "min": 0.0,
              "max": 0.01651362278247,
              "p5": 7.279241863898947e-05,
              "p95": 0.014058674063304615,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.03676470588235203,
            "market": 0.0504798568785807,
            "sector": -0.031199006338661572,
            "peers": -0.04283140457754797,
            "vs_market": -0.08724456276093273,
            "vs_sector": -0.005565699543690461,
            "vs_peers": 0.006066698695195938
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.66308243727599,
          "score_pca_percentile": 85.66308243727599,
          "rank_pca": 81,
          "total": 558,
          "adv_notional_sgd": 631275.0,
          "adv_volume_shares": 921600.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002016361932556102,
          "votes": 383.5,
          "trades": 383.5,
          "spread_pct": 0.007380073800738015,
          "spread_ticks": 1.0,
          "amihud": 5.056605737842221e-09,
          "volatility": 0.1423558726386715
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5681985008283781,
          "loadings": {
            "log_adv": 0.5108156982825359,
            "log_trades": 0.45680777392259475,
            "log_turnover": 0.46146463832063134,
            "neg_spread": 0.42917317372212094,
            "neg_amihud": 0.20586250811789308,
            "neg_vol": 0.30145544009075337
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
          "peer_median_adv": 665593.2448737966,
          "peer_median_score_pca": 76.52329749103943,
          "peer_median_trades": 392.5,
          "peer_median_volatility": 0.18914193141785707,
          "peer_median_spread_pct": 0.009072449670791662,
          "peer_median_spread_ticks": 1.0040359722023293,
          "peer_median_amihud": 3.090918696782162e-09,
          "peer_median_turnover_ratio": 0.0012577547642075963,
          "target_vs_peer": {
            "score_pca_delta": 9.14,
            "adv_delta_pct": -5.2,
            "trades_delta_pct": -2.29,
            "volatility_delta_pct": 24.74,
            "spread_pct_delta_pct": 18.65,
            "spread_ticks_delta_pct": -0.4,
            "amihud_delta_pct": -63.6,
            "turnover_ratio_delta_pct": 60.31
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.66308243727599,
            "rank_pca": 81,
            "adv": 631275.0,
            "trades": 383.5,
            "volatility": 0.1423558726386715,
            "spread_pct": 0.007380073800738015,
            "spread_ticks": 1.0,
            "amihud": 5.056605737842221e-09,
            "turnover_ratio": 0.002016361932556102,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.77060931899642,
            "rank_pca": 192,
            "adv": 91723.73974759325,
            "trades": 21.0,
            "volatility": 0.1710318464793135,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 1.0134169363538295,
            "amihud": 3.223250614661947e-08,
            "turnover_ratio": 0.00023368189373215492,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 50.7168458781362,
            "rank_pca": 276,
            "adv": 38861.2,
            "trades": 36.5,
            "volatility": 1.245359223982035,
            "spread_pct": 0.1176470588235293,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0011732880397527462,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 19.892473118279568,
            "rank_pca": 448,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5693601892628347,
            "spread_pct": 0.10752268329781241,
            "spread_ticks": 8.953125,
            "amihud": 4.170734868870207e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.27598566308244,
            "rank_pca": 72,
            "adv": 1239462.75,
            "trades": 748.5,
            "volatility": 0.17674242731944984,
            "spread_pct": 0.006548845474861532,
            "spread_ticks": 1.0074285399266794,
            "amihud": 5.164666225731466e-09,
            "turnover_ratio": 0.0013422214886624467,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 96.05734767025089,
            "rank_pca": 23,
            "adv": 7933299.75,
            "trades": 1899.0,
            "volatility": 0.20154143551626427,
            "spread_pct": 0.008094648085301907,
            "spread_ticks": 1.0001882897257566,
            "amihud": 1.0171711678328577e-09,
            "turnover_ratio": 0.01579213423065487,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.4910394265233,
            "rank_pca": 15,
            "adv": 18307937.0,
            "trades": 3146.0,
            "volatility": 0.13545458900038526,
            "spread_pct": 0.004428487683346552,
            "spread_ticks": 1.0006434044779793,
            "amihud": 2.7130394186595765e-10,
            "turnover_ratio": 0.004815695792827062,
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
              "mean": 0.6918800377457258,
              "median": 0.4350771718142345,
              "min": 0.0,
              "max": 6.712244201623048,
              "p5": 0.15054728276788712,
              "p95": 2.0944971464463293,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2545166.1263587023,
              "median": 11814.875,
              "min": 0.0,
              "max": 246202433.5,
              "p5": 0.0,
              "p95": 10450881.099999994,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09319153952810182,
              "median": 0.028942514341707453,
              "min": 0.0002757763415459278,
              "max": 1.267605633802817,
              "p5": 0.003571385116897667,
              "p95": 0.46743397104407935,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0032342496546674364,
              "median": 0.00028117250160749957,
              "min": 0.0,
              "max": 0.8816162415134138,
              "p5": 0.0,
              "p95": 0.006943484482249607,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.125835757905566e-05,
              "median": 1.7583128636410755e-07,
              "min": 0.0,
              "max": 0.0012875000252631538,
              "p5": 0.0,
              "p95": 4.3034211728419724e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 369.80645161290323,
              "median": 7.0,
              "min": 0.0,
              "max": 10176.5,
              "p5": 0.0,
              "p95": 2012.0249999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3416287160964081,
              "median": 0.16996671935509047,
              "min": 0.11526999066971153,
              "max": 1.245359223982035,
              "p5": 0.12475004935884752,
              "p95": 1.0087595618303147,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8572559.836218448,
              "median": 672991.25,
              "min": 0.0,
              "max": 55454011.0,
              "p5": 13601.42,
              "p95": 39688760.274999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03332670713141154,
              "median": 0.008056849127443248,
              "min": 0.004270758868815006,
              "max": 0.1176470588235293,
              "p5": 0.004337119641016913,
              "p95": 0.11410352738952838,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023170506334817473,
              "median": 0.0012577547642075963,
              "min": 0.0,
              "max": 0.006654469842597678,
              "p5": 8.178866280625423e-05,
              "p95": 0.0064933573565972595,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.275233020030362e-07,
              "median": 5.110635981786844e-09,
              "min": 0.0,
              "max": 4.170734868870207e-06,
              "p5": 3.6255109248452725e-11,
              "p95": 2.7222590419169493e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1090.4375,
              "median": 402.75,
              "min": 0.0,
              "max": 5340.0,
              "p5": 7.3500000000000005,
              "p95": 4091.199999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4601880.739957932,
              "median": 665593.2448737966,
              "min": 0.0,
              "max": 18307937.0,
              "p5": 9715.3,
              "p95": 15714277.6875,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 975.1666666666666,
              "median": 392.5,
              "min": 0.0,
              "max": 3146.0,
              "p5": 5.25,
              "p95": 2834.25,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4165816185933804,
              "median": 0.18914193141785707,
              "min": 0.13545458900038526,
              "max": 1.245359223982035,
              "p5": 0.14434890337011733,
              "p95": 1.076359465302235,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042381995770188856,
              "median": 0.009072449670791662,
              "min": 0.004428487683346552,
              "max": 0.1176470588235293,
              "p5": 0.004958577131225297,
              "p95": 0.11511596494210008,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3291336950807078,
              "median": 1.0040359722023293,
              "min": 1.0,
              "max": 8.953125,
              "p5": 1.0000470724314392,
              "p95": 6.968197984088457,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.015700860587095e-07,
              "median": 3.090918696782162e-09,
              "min": 0.0,
              "max": 4.170734868870207e-06,
              "p5": 6.782598546648941e-11,
              "p95": 3.1361092781893105e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00389283690760488,
              "median": 0.0012577547642075963,
              "min": 0.0,
              "max": 0.01579213423065487,
              "p5": 5.842047343303873e-05,
              "p95": 0.013048024621197918,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.0367647058823527,
            "market": 0.12243439294561531,
            "sector": -0.02636486311935926,
            "peers": -0.048826024144676294,
            "vs_market": -0.159199098827968,
            "vs_sector": -0.010399842762993439,
            "vs_peers": 0.012061318262323595
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term access looks mixed, with a 1 tick spread but lighter buy-side depth that can make entry feel less supported.",
        "market_comparison": "The stock rose 1.6% compared with peers at 0.0%, which matters because price strength did not translate into clearly stronger immediate depth."
      },
      "30d": {
        "liquidity": "1M score 83.9 vs peer median 76.0 (+7.9 pts).",
        "market_comparison": "The stock fell 3.0% compared with peers up 0.2% and the market up 2.7%, which matters because weaker price performance can leave liquidity feeling less resilient."
      },
      "3m": {
        "liquidity": "Quarterly access appears steady to slightly above average, supported by a liquidity score above peers.",
        "market_comparison": "The stock fell 3.7% compared with peers down 4.3%, which matters because relative performance was slightly better even as trading conditions stayed mixed."
      },
      "6m": {
        "liquidity": "Six-month tradability is solid for its size, with a liquidity score of 85.7 compared with the peer median at 76.5.",
        "market_comparison": "The stock fell 3.7% compared with peers down 4.9%, which matters because peer-relative liquidity held up despite weak absolute performance."
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
          "median": 0.2627016662823655,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "26.3%",
          "display_range": null,
          "display_text": "26.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 26.3,
          "plain_english": "Market explains about 26.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5040214292401951,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "50.4%",
          "display_range": null,
          "display_text": "50.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 50.4,
          "plain_english": "Sector explains about 50.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.23327690447743935,
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
          "median": 0.701420434002601,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.70",
          "display_range": null,
          "display_text": "0.70",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.70% stock move in the same direction in this state.",
          "value_num": 0.7
        },
        "beta_stock_lag": {
          "median": -3.030607940804375,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-3.03",
          "display_range": null,
          "display_text": "-3.03",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -3.03
        },
        "beta_sector": {
          "median": -0.5781110247328718,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.58",
          "display_range": null,
          "display_text": "-0.58",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.58% stock move in the opposite direction in this state.",
          "value_num": -0.58
        },
        "beta_market_lag": {
          "median": -1.8834124883574055,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.88",
          "display_range": null,
          "display_text": "-1.88",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.88
        },
        "beta_sector_lag": {
          "median": 2.1283297045845964,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.13",
          "display_range": null,
          "display_text": "2.13",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 2.13
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
          "period_label": "2025-04-15 to 2025-04-30",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6429368355019048,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.3%",
            "display_range": null,
            "display_text": "64.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
            "kind": "share_pct",
            "value_pct": 64.3,
            "plain_english": "Company-specific explains about 64.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.06893817540645243,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.9%",
              "display_range": null,
              "display_text": "6.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 6.9,
              "plain_english": "Market explains about 6.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28812498909164264,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.8%",
              "display_range": null,
              "display_text": "28.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 28.8,
              "plain_english": "Sector explains about 28.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6429368355019048,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.3%",
              "display_range": null,
              "display_text": "64.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 64.3,
              "plain_english": "Company-specific explains about 64.3% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly company-driven."
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
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 8,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.42725952050897076,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.7%",
            "display_range": null,
            "display_text": "42.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
            "kind": "share_pct",
            "value_pct": 42.7,
            "plain_english": "Sector explains about 42.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3710523304557946,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.1%",
              "display_range": null,
              "display_text": "37.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 37.1,
              "plain_english": "Market explains about 37.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.42725952050897076,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.7%",
              "display_range": null,
              "display_text": "42.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 42.7,
              "plain_english": "Sector explains about 42.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.20168814903523477,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.2%",
              "display_range": null,
              "display_text": "20.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 20.2,
              "plain_english": "Company-specific explains about 20.2% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though sector-driven still has the largest share."
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
            "median": 0.005585309480740537,
            "low": 0.005585309480740537,
            "high": 0.005585309480740537
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
            "median": 0.011326149346922623,
            "low": 0.011326149346922623,
            "high": 0.011326149346922623
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
        "market_link_display": "0.70",
        "sector_link_display": "-0.58",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.70% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.58% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-3.03",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 50.4,
        "driver_share_display": "50.4%",
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
            "median": 0.005585309480740537,
            "low": 0.005585309480740537,
            "high": 0.005585309480740537
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
            "median": 0.011326149346922623,
            "low": 0.011326149346922623,
            "high": 0.011326149346922623
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
        "text": "Liquidity score: 85.7 — Strong",
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
        "text": "Elevated short interest",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Structural liquidity is solid relative to peers, but the displayed book is less supportive on the bid side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance has lagged, with the stock down 3.0% over one month compared with peers up 0.2% and the market up 2.7%.",
    "perf_insight": "The tape is weak rather than supported by momentum. The stock is down 3.0% over one month while peers are up 0.2% and the market is up 2.7%, and sector factors account for 50.4% of current trading. That matters because broader group moves are shaping trading more than stock-specific strength.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main driver now, accounting for 50.4% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 50.4% of price changes. Other influences are market 26.3%, and company-specific 23.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 26.3%, sector 50.4%, and company-specific 23.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 26.3%, sector 50.4%, and company-specific 23.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the stock is already underperforming, down 3.0% over one month while peers are up 0.2%, so broader sector pressure can carry through more directly into the tape.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Sector is the main driver now, accounting for 50.4% of recent price moves.",
      "The pattern has become more mixed since February, shifting from clearly company-driven to sector-led in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current trading conditions look balanced at the top of book, but buy-side depth is lighter than sell-side depth.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 14, 2025 to Apr 13, 2026 (252 trading days • 97,451 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Near-term access looks less supportive than the longer-term score suggests. Top-10 bid depth is only 0.54x of ask depth even with a 1-tick spread, so immediate buy-side support is thinner than the broader liquidity profile implies.",
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
    "intraday_subtitle": "The displayed order book is tradable on spread, but depth is uneven across sides.",
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
    "intraday_insight": "Session split is open 3.8%, continuous 86.8%, and close 8.2%. Current trading concentration score is 0.227.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Recent price weakness stands out more than any clear change in positioning.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, with peer standing above median but current buy-side depth thinner than the broader profile",
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
        "value": "85.7/100",
        "sub": "Peer median 76.5 (+9.1 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$631.3K",
        "sub": "Peer median S$665.6K",
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
    "liq_insight": "Liquidity is mixed rather than clearly strong. The 6M liquidity score is 85.7, which is 9.1 points above the peer median of 76.5, but the displayed book is less supportive with top-10 bid depth at only 0.54x of ask depth. That matters because structural access looks sound while immediate buy-side support is thinner.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.647",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.77%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.54x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.39% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.69% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.53% with 92.8% fill.",
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
        "value": "86",
        "suffix": "/100",
        "bar_pct": 86,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 81/558",
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
        "value": "631.3K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$665.6K",
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
        "value": "50.4",
        "suffix": "sector",
        "bar_pct": 50,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 26.3% • Company 23.3%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is solid relative to peers. The 6M liquidity score is 85.7, or 9.1 points above the peer median of 76.5, so medium-term access stands up well for the stock’s size.",
      "Near-term execution looks less supportive than that medium-term score. Top-10 bid depth is only 0.54x of ask depth despite a 1-tick spread, so immediate buy-side support is thinner on screen.",
      "The tape is under pressure and sector moves are a meaningful driver. The stock is down 3.0% over one month compared with peers up 0.2% and the market up 2.7%, while sector factors account for 50.4% of current trading."
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
      "overall": "6M liquidity is strong: score 85.7 vs peer median 76.5 (+9.1 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 85.7 vs peer median 76.5 (+9.1 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +9.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -3.7%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -3.7% vs market 12.2%.",
        "vs_sector": "Worse than sector: -3.7% vs sector -2.6%.",
        "vs_peers": "Better than peers: -3.7% vs peers -4.9%."
      },
      "adv": {
        "insight": "ADV is S$631.3K, better than market, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$631.3K vs market S$11.8K.",
        "vs_sector": "In line with sector: S$631.3K vs sector S$673.0K.",
        "vs_peers": "In line with peers: S$631.3K vs peers S$665.6K."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.74% vs market 2.89%.",
        "vs_sector": "In line with sector: 0.74% vs sector 0.81%.",
        "vs_peers": "Better than peers: 0.74% vs peers 0.91%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.20%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.20% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.20% vs sector 0.13%.",
        "vs_peers": "Better than peers: 0.20% vs peers 0.13%."
      },
      "volatility": {
        "insight": "Volatility is 14.24%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.24% vs market 43.51%.",
        "vs_sector": "Better than sector: 14.24% vs sector 17.00%.",
        "vs_peers": "Better than peers: 14.24% vs peers 18.91%."
      },
      "trades": {
        "insight": "Trades is 384, better than market, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 384 vs market 7.",
        "vs_sector": "In line with sector: 384 vs sector 403.",
        "vs_peers": "In line with peers: 384 vs peers 392."
      },
      "amihud": {
        "insight": "Price impact is 5.06e-09, better than market, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 5.06e-09 vs market 1.76e-07.",
        "vs_sector": "In line with sector: 5.06e-09 vs sector 5.11e-09.",
        "vs_peers": "Worse than peers: 5.06e-09 vs peers 3.09e-09."
      }
    },
    "performance": {
      "overall": "Recent performance has been weak relative to peers and the market, with the stock down 3.0% over one month compared with peers up 0.2% and the market up 2.7%. Liquidity does not fully explain that underperformance because the 6M liquidity score of 85.7 sits 9.1 points above the peer median, although the top of book is less supportive day to day with bid depth at 0.54x of ask depth.",
      "conclusion": "Performance is mixed relative to comparison groups."
    },
    "drivers": {
      "overall": "Sector moves are the main force right now, with the sector explaining 50.4% of recent price action. That matters because the stock has underperformed over the past month, down 3.0% while peers rose 0.2%, so sector weakness is landing on an already weaker tape.",
      "beta": "Based on the last 5 trading days, current mix is market 26.3%, sector 50.4%, and company-specific 23.3%.",
      "rolling_change": "The driver mix has become more balanced over the past three months. February was still clearly company-driven, March remained mostly sector, and April is more mixed with sector moves now the largest influence."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop, and that matters because conditions can feel less steady even when the quoted spread remains at 1 tick.",
      "current": "High volatility is in place now, while top-10 bid depth at 0.54x of ask depth shows the buy side of the book is thinner than the sell side.",
      "transitions": "This looks more persistent than fleeting, with a typical run length of about 10.3 days, although the overall read is still mixed.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 10.3 days."
    },
    "execution": {
      "overall": "The displayed book is bid-light because top-10 bid depth is only 0.54x ask depth even with a 1-tick spread. That leaves the screen looking orderly on spread but less balanced on immediate depth, which can make current liquidity feel weaker than the broader profile.",
      "concern": "Trade-size percentiles use Apr 14, 2025 to Apr 13, 2026 history (252 trading days • 97,451 trades).",
      "peer_context": "This tempers the stronger medium-term standing, with the 6M liquidity score at 85.7 compared with a peer median of 76.5. The stock screens well on the broader measure, but the current book does not fully visible support that strength in day-to-day terms."
    },
    "trader_composition": {
      "overall": "Flow looks mixed by trade count and value.",
      "retail_heavy": "Retail-like trades account for 60.5% of trade count but only 9.9% of trade value, while institution-like trades are 10.7% of count and 48.2% of value. That split shows frequent smaller tickets alongside a meaningful share of value from larger participants, so the flow does not read as clearly retail-led or institution-led.",
      "institutional_gap": "Institution-like activity is a small share of trade count but nearly half of trade value at 48.2%. That matters because larger participants are present in value terms even if they are not driving most individual prints.",
      "peer_comparison": "The mix looks mixed rather than unusual, with high retail-like participation by count alongside strong institution-like participation by value. Relative to peers, the key read is that both ends of the market are contributing to turnover."
    },
    "price_moving": {
      "overall": "Price-moving activity looks meaningful but not dominant, with sector moves still the largest current driver at 50.4%. That suggests the tape is being shaped more by broader market flow than by a single trader cohort. The signal is mixed because trade count leans retail-like while trade value leans institution-like. That makes it harder to tie price moves to one type of participant and points instead to a market influenced by both larger value trades and broader sector direction.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears material, but it is not the clearest driver of the current trading picture. The stock has underperformed over 1M at -3.0% compared with peers at +0.2% and the market at +2.7%, yet the sharp pullback in short positioning points to less pressure from this source now.",
      "level": "Elevated short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning is falling quickly, with shorts covering by 69% month on month. That reduces the case for short selling as an escalating source of trading pressure, even with short interest still elevated.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, which accounts for 86.8% of activity, while the open is 3.8% and the close is 8.2%. That profile suggests trading access is available through most of the day rather than being confined to the auction windows.",
      "hhi_interpretation": "Concentrated - liquidity clustered at open/close",
      "best_times": "The continuous session is the clearest source of liquidity, with far more activity than either the open or the close. That matters because access appears broadest during regular trading hours.",
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
        85.66308243727599,
        65.77060931899642,
        50.7168458781362,
        19.892473118279568,
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
        631275.0,
        91723.73974759325,
        38861.2,
        0.0,
        1239462.75,
        7933299.75,
        18307937.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.1423558726386715,
        "adv": 631275.0,
        "spread_pct": 0.007380073800738015,
        "turnover_ratio": 0.002016361932556102,
        "amihud": 5.056605737842221e-09,
        "trades": 383.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6918800377457258,
          "median": 0.4350771718142345,
          "min": 0.0,
          "max": 6.712244201623048,
          "p5": 0.15054728276788712,
          "p95": 2.0944971464463293,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2545166.1263587023,
          "median": 11814.875,
          "min": 0.0,
          "max": 246202433.5,
          "p5": 0.0,
          "p95": 10450881.099999994,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09319153952810182,
          "median": 0.028942514341707453,
          "min": 0.0002757763415459278,
          "max": 1.267605633802817,
          "p5": 0.003571385116897667,
          "p95": 0.46743397104407935,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0032342496546674364,
          "median": 0.00028117250160749957,
          "min": 0.0,
          "max": 0.8816162415134138,
          "p5": 0.0,
          "p95": 0.006943484482249607,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.125835757905566e-05,
          "median": 1.7583128636410755e-07,
          "min": 0.0,
          "max": 0.0012875000252631538,
          "p5": 0.0,
          "p95": 4.3034211728419724e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 369.80645161290323,
          "median": 7.0,
          "min": 0.0,
          "max": 10176.5,
          "p5": 0.0,
          "p95": 2012.0249999999999,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3416287160964081,
          "median": 0.16996671935509047,
          "min": 0.11526999066971153,
          "max": 1.245359223982035,
          "p5": 0.12475004935884752,
          "p95": 1.0087595618303147,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8572559.836218448,
          "median": 672991.25,
          "min": 0.0,
          "max": 55454011.0,
          "p5": 13601.42,
          "p95": 39688760.274999976,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03332670713141154,
          "median": 0.008056849127443248,
          "min": 0.004270758868815006,
          "max": 0.1176470588235293,
          "p5": 0.004337119641016913,
          "p95": 0.11410352738952838,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023170506334817473,
          "median": 0.0012577547642075963,
          "min": 0.0,
          "max": 0.006654469842597678,
          "p5": 8.178866280625423e-05,
          "p95": 0.0064933573565972595,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.275233020030362e-07,
          "median": 5.110635981786844e-09,
          "min": 0.0,
          "max": 4.170734868870207e-06,
          "p5": 3.6255109248452725e-11,
          "p95": 2.7222590419169493e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1090.4375,
          "median": 402.75,
          "min": 0.0,
          "max": 5340.0,
          "p5": 7.3500000000000005,
          "p95": 4091.199999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 4601880.739957932,
          "median": 665593.2448737966,
          "min": 0.0,
          "max": 18307937.0,
          "p5": 9715.3,
          "p95": 15714277.6875,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 975.1666666666666,
          "median": 392.5,
          "min": 0.0,
          "max": 3146.0,
          "p5": 5.25,
          "p95": 2834.25,
          "count": 6
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4165816185933804,
          "median": 0.18914193141785707,
          "min": 0.13545458900038526,
          "max": 1.245359223982035,
          "p5": 0.14434890337011733,
          "p95": 1.076359465302235,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042381995770188856,
          "median": 0.009072449670791662,
          "min": 0.004428487683346552,
          "max": 0.1176470588235293,
          "p5": 0.004958577131225297,
          "p95": 0.11511596494210008,
          "count": 6
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.3291336950807078,
          "median": 1.0040359722023293,
          "min": 1.0,
          "max": 8.953125,
          "p5": 1.0000470724314392,
          "p95": 6.968197984088457,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.015700860587095e-07,
          "median": 3.090918696782162e-09,
          "min": 0.0,
          "max": 4.170734868870207e-06,
          "p5": 6.782598546648941e-11,
          "p95": 3.1361092781893105e-06,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00389283690760488,
          "median": 0.0012577547642075963,
          "min": 0.0,
          "max": 0.01579213423065487,
          "p5": 5.842047343303873e-05,
          "p95": 0.013048024621197918,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.029629629629629783,
        "market": 0.026535753836895992,
        "sector": 0.010482800253857949,
        "peers": 0.002373529874609037
      },
      {
        "horizon": "3M",
        "stock": -0.03676470588235203,
        "market": 0.0504798568785807,
        "sector": -0.031199006338661572,
        "peers": -0.04283140457754797
      },
      {
        "horizon": "6M",
        "stock": -0.0367647058823527,
        "market": 0.12243439294561531,
        "sector": -0.02636486311935926,
        "peers": -0.048826024144676294
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
      "share_market": 0.2627016662823655,
      "share_sector": 0.5040214292401951,
      "share_idio": 0.23327690447743935,
      "beta_market": 0.701420434002601,
      "beta_sector": -0.5781110247328718,
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
            "median": 0.2627016662823655,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "26.3%",
            "display_range": null,
            "display_text": "26.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 26.3,
            "plain_english": "Market explains about 26.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5040214292401951,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.4%",
            "display_range": null,
            "display_text": "50.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 50.4,
            "plain_english": "Sector explains about 50.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.23327690447743935,
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
            "median": 0.701420434002601,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.70",
            "display_range": null,
            "display_text": "0.70",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.70% stock move in the same direction in this state.",
            "value_num": 0.7
          },
          "beta_stock_lag": {
            "median": -3.030607940804375,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-3.03",
            "display_range": null,
            "display_text": "-3.03",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -3.03
          },
          "beta_sector": {
            "median": -0.5781110247328718,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.58",
            "display_range": null,
            "display_text": "-0.58",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.58% stock move in the opposite direction in this state.",
            "value_num": -0.58
          },
          "beta_market_lag": {
            "median": -1.8834124883574055,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.88",
            "display_range": null,
            "display_text": "-1.88",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.88
          },
          "beta_sector_lag": {
            "median": 2.1283297045845964,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.13",
            "display_range": null,
            "display_text": "2.13",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 2.13
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
            "period_label": "2025-04-15 to 2025-04-30",
            "n_obs": 11,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6429368355019048,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.3%",
              "display_range": null,
              "display_text": "64.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 64.3,
              "plain_english": "Company-specific explains about 64.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.06893817540645243,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.9%",
                "display_range": null,
                "display_text": "6.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 6.9,
                "plain_english": "Market explains about 6.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28812498909164264,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.8%",
                "display_range": null,
                "display_text": "28.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 28.8,
                "plain_english": "Sector explains about 28.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6429368355019048,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.3%",
                "display_range": null,
                "display_text": "64.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 64.3,
                "plain_english": "Company-specific explains about 64.3% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly company-driven."
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
            "period_label": "2026-04-01 to 2026-04-13",
            "n_obs": 8,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.42725952050897076,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.7%",
              "display_range": null,
              "display_text": "42.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 42.7,
              "plain_english": "Sector explains about 42.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3710523304557946,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.1%",
                "display_range": null,
                "display_text": "37.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 37.1,
                "plain_english": "Market explains about 37.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.42725952050897076,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.7%",
                "display_range": null,
                "display_text": "42.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 42.7,
                "plain_english": "Sector explains about 42.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.20168814903523477,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.2%",
                "display_range": null,
                "display_text": "20.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 20.2,
                "plain_english": "Company-specific explains about 20.2% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though sector-driven still has the largest share."
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
              "median": 0.005585309480740537,
              "low": 0.005585309480740537,
              "high": 0.005585309480740537
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
              "median": 0.011326149346922623,
              "low": 0.011326149346922623,
              "high": 0.011326149346922623
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
          "market_link_display": "0.70",
          "sector_link_display": "-0.58",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.70% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.58% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-3.03",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 50.4,
          "driver_share_display": "50.4%",
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
          "period_label": "2025-04-15 to 2025-04-30",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Still clearly company-driven.",
          "share_market": 0.06893817540645243,
          "share_sector": 0.28812498909164264,
          "share_company": 0.6429368355019048,
          "share_market_display": "6.9%",
          "share_sector_display": "28.8%",
          "share_company_display": "64.3%",
          "dominant_share_display": "64.3%"
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
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 8,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.3710523304557946,
          "share_sector": 0.42725952050897076,
          "share_company": 0.20168814903523477,
          "share_market_display": "37.1%",
          "share_sector_display": "42.7%",
          "share_company_display": "20.2%",
          "dominant_share_display": "42.7%"
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
              "median": 0.005585309480740537,
              "low": 0.005585309480740537,
              "high": 0.005585309480740537
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
              "median": 0.011326149346922623,
              "low": 0.011326149346922623,
              "high": 0.011326149346922623
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
          "price": 0.645,
          "quantity": 956700.0,
          "value": 617071.5
        },
        {
          "level": 2,
          "price": 0.64,
          "quantity": 578000.0,
          "value": 369920.0
        },
        {
          "level": 3,
          "price": 0.635,
          "quantity": 327600.0,
          "value": 208026.0
        },
        {
          "level": 4,
          "price": 0.63,
          "quantity": 712200.0,
          "value": 448686.0
        },
        {
          "level": 5,
          "price": 0.625,
          "quantity": 217700.0,
          "value": 136062.5
        },
        {
          "level": 6,
          "price": 0.62,
          "quantity": 269800.0,
          "value": 167276.0
        },
        {
          "level": 7,
          "price": 0.615,
          "quantity": 149200.0,
          "value": 91758.0
        },
        {
          "level": 8,
          "price": 0.61,
          "quantity": 173100.0,
          "value": 105591.0
        },
        {
          "level": 9,
          "price": 0.605,
          "quantity": 108800.0,
          "value": 65824.0
        },
        {
          "level": 10,
          "price": 0.6,
          "quantity": 181600.0,
          "value": 108960.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.65,
          "quantity": 2563300.0,
          "value": 1666145.0
        },
        {
          "level": 2,
          "price": 0.655,
          "quantity": 702600.0,
          "value": 460203.0
        },
        {
          "level": 3,
          "price": 0.66,
          "quantity": 272900.0,
          "value": 180114.0
        },
        {
          "level": 4,
          "price": 0.665,
          "quantity": 112800.0,
          "value": 75012.0
        },
        {
          "level": 5,
          "price": 0.67,
          "quantity": 297800.0,
          "value": 199526.0
        },
        {
          "level": 6,
          "price": 0.675,
          "quantity": 125000.0,
          "value": 84375.0
        },
        {
          "level": 7,
          "price": 0.68,
          "quantity": 1150000.0,
          "value": 782000.0
        },
        {
          "level": 8,
          "price": 0.685,
          "quantity": 150200.0,
          "value": 102887.00000000001
        },
        {
          "level": 9,
          "price": 0.69,
          "quantity": 1111100.0,
          "value": 766658.9999999999
        },
        {
          "level": 10,
          "price": 0.695,
          "quantity": 20800.0,
          "value": 14455.999999999998
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-13 08:59:52.729500",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6475,
        "spread_pct": 0.007722007722007728,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 2319175.0,
        "ask_depth_notional_top10": 4331377.0,
        "bid_ask_depth_ratio": 0.5354
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 252,
        "n_trades_used": 97451,
        "first_trade_date": "2025-04-14",
        "last_trade_date": "2026-04-13",
        "window_label": "Apr 14, 2025 to Apr 13, 2026",
        "window_short_label": "Apr 14, 2025 to Apr 13, 2026",
        "trade_days_label": "252 trading days",
        "trade_count_label": "97,451 trades",
        "window_detail_label": "252 trading days • 97,451 trades",
        "history_note": "Trade-size percentiles use Apr 14, 2025 to Apr 13, 2026 history (252 trading days • 97,451 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.003861,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.15,
            "pct_of_adv": 0.42
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7825.0,
            "impact_pct": -0.003861,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.34,
            "pct_of_adv": 0.97
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.003861,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 14.66,
            "pct_of_adv": 42.12
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-13",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8136218919777374208",
            "timestamp": "2026-04-13 08:30:28.109700000",
            "local_timestamp": "2026-04-13 16:30:28",
            "posted_price": 0.655,
            "size_shares": 2550900.0,
            "notional": 1670839.5,
            "impact_pct": -0.014313,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 72.04,
            "price_vs_mid_pct": 1.158,
            "executed_event_count": 0,
            "event_count": 8
          },
          {
            "rank": 2,
            "order_id": "8136218919777347584",
            "timestamp": "2026-04-13 07:35:44.742200000",
            "local_timestamp": "2026-04-13 15:35:44",
            "posted_price": 0.65,
            "size_shares": 2000000.0,
            "notional": 1300000.0,
            "impact_pct": -0.010457000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 56.05,
            "price_vs_mid_pct": 0.386,
            "executed_event_count": 0,
            "event_count": 3
          },
          {
            "rank": 3,
            "order_id": "8125135567689201664",
            "timestamp": "2026-04-12 22:59:00.903800000",
            "local_timestamp": "2026-04-13 06:59:00",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.004683,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 29.75,
            "price_vs_mid_pct": 6.564,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-13",
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
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2360036.5,
            "ask_depth_notional": 3396814.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2528614.0,
            "ask_depth_notional": 3435218.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2521197.0,
            "ask_depth_notional": 3429238.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2527795.0,
            "ask_depth_notional": 3427352.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2524886.5,
            "ask_depth_notional": 3434787.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2518455.0,
            "ask_depth_notional": 3441482.5,
            "mid_price": 0.6475
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2550326.5,
            "ask_depth_notional": 3412567.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2547101.5,
            "ask_depth_notional": 3413817.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2613601.0,
            "ask_depth_notional": 3425517.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2609795.5,
            "ask_depth_notional": 3445827.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2601881.5,
            "ask_depth_notional": 3396968.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2438369.0,
            "ask_depth_notional": 4352757.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2354380.5,
            "ask_depth_notional": 4368252.0,
            "mid_price": 0.6475
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007722007722007729,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2319175.0,
            "ask_depth_notional": 4331377.0,
            "mid_price": 0.6475
          }
        ],
        "summary": {
          "median_spread_pct": 0.007722007722007729,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2526340.75,
          "median_ask_depth_notional": 3432013.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "14:00",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 6.2,
      "peers": [
        {
          "ticker": "AJBU",
          "pct": 5.4
        },
        {
          "ticker": "JYEU",
          "pct": 10.3
        },
        {
          "ticker": "AU8U",
          "pct": 86.6
        },
        {
          "ticker": "ODBU",
          "pct": 682.2
        },
        {
          "ticker": "D5IU",
          "pct": 24747.6
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
          "n_trades": 1073,
          "n_runs": 730,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-13",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.49860205032618826,
            "mixed_pct": 0.39049394221808015,
            "instit_pct": 0.010251630941286114,
            "ambiguous_pct": 0.10065237651444547,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10065237651444547,
            "retail_qty_pct": 0.2528389538885065,
            "mixed_qty_pct": 0.19365106675843083,
            "instit_qty_pct": 0.23554714384033035,
            "ambiguous_qty_pct": 0.3179628355127323,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3179628355127323,
            "retail_notional_pct": 0.25245622774292015,
            "mixed_notional_pct": 0.19348821434627778,
            "instit_notional_pct": 0.23577931575377312,
            "ambiguous_notional_pct": 0.318276242157029,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.318276242157029
          },
          "run_composition": {
            "retail_pct": 0.726027397260274,
            "mixed_pct": 0.2602739726027397,
            "instit_pct": 0.0013698630136986301,
            "ambiguous_pct": 0.012328767123287671,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.012328767123287671,
            "retail_notional_pct": 0.25245622774292015,
            "mixed_notional_pct": 0.19348821434627778,
            "instit_notional_pct": 0.23577931575377312,
            "unclear_notional_pct": 0.318276242157029
          },
          "counts": {
            "trades": {
              "retail": 535,
              "mixed": 419,
              "institutional": 11,
              "ambiguous": 108,
              "unobservable": 0,
              "unclear": 108
            },
            "runs": {
              "retail": 530,
              "mixed": 190,
              "institutional": 1,
              "ambiguous": 9,
              "unobservable": 0,
              "unclear": 9
            }
          },
          "confidence": {
            "high": 0.2808219178082192,
            "medium": 0.35753424657534244,
            "low": 0.08904109589041095,
            "na": 0.2726027397260274
          },
          "confidence_counts": {
            "high": 205,
            "medium": 261,
            "low": 65,
            "na": 199
          },
          "trade_confidence": {
            "high": 0.19105312208760486,
            "medium": 0.255358807082945,
            "low": 0.06244175209692451,
            "na": 0.4911463187325256
          },
          "trade_confidence_counts": {
            "high": 205,
            "medium": 274,
            "low": 67,
            "na": 527
          },
          "observability": {
            "avg_feature_coverage": 0.8884246575342465,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.012328767123287671,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.726027397260274,
          "dominance_gap": 0.4657534246575343,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 980,
              "MULTI_FILL_SINGLE_PRICE": 93
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 1050,
              "MOMENTUM_REACTIVE": 23
            },
            "d3_urgency": {
              "IMMEDIATE": 725,
              "ADAPTIVE": 5
            },
            "participant_confidence": {
              "MEDIUM": 261,
              "HIGH": 205,
              "NA": 199,
              "LOW": 65
            }
          },
          "trade_size": {
            "avg": 703.4631873252563,
            "median": 195.0
          },
          "run_size": {
            "avg": 1033.9945205479453,
            "median": 260.0,
            "avg_length": 1.3808219178082193
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-1115",
              "timestamp": "2026-04-13T09:06:10.739000",
              "price": 0.655,
              "size": 100.0,
              "notional": 65.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57613,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1089",
              "timestamp": "2026-04-13T08:59:52.729500",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57612,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1088",
              "timestamp": "2026-04-13T08:59:51.492100",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57612,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1087",
              "timestamp": "2026-04-13T08:59:37.855400",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57611,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1086",
              "timestamp": "2026-04-13T08:59:30.274100",
              "price": 0.645,
              "size": 700.0,
              "notional": 451.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57610,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1085",
              "timestamp": "2026-04-13T08:59:30.152400",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57609,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1084",
              "timestamp": "2026-04-13T08:59:30.027000",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57608,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1083",
              "timestamp": "2026-04-13T08:59:25.431900",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57608,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1082",
              "timestamp": "2026-04-13T08:59:24.887000",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1081",
              "timestamp": "2026-04-13T08:59:24.766300",
              "price": 0.65,
              "size": 400.0,
              "notional": 260.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1080",
              "timestamp": "2026-04-13T08:59:24.645500",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1079",
              "timestamp": "2026-04-13T08:59:15.145100",
              "price": 0.65,
              "size": 700.0,
              "notional": 455.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57606,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1078",
              "timestamp": "2026-04-13T08:59:14.148800",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57606,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1077",
              "timestamp": "2026-04-13T08:59:08.895100",
              "price": 0.65,
              "size": 400.0,
              "notional": 260.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57605,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1076",
              "timestamp": "2026-04-13T08:59:08.744300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57604,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1075",
              "timestamp": "2026-04-13T08:59:00.311300",
              "price": 0.65,
              "size": 1200.0,
              "notional": 780.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57603,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1074",
              "timestamp": "2026-04-13T08:58:48.397800",
              "price": 0.65,
              "size": 1300.0,
              "notional": 845.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57602,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1073",
              "timestamp": "2026-04-13T08:58:48.186500",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57602,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1072",
              "timestamp": "2026-04-13T08:58:40.886200",
              "price": 0.65,
              "size": 500.0,
              "notional": 325.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57601,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1071",
              "timestamp": "2026-04-13T08:58:40.765600",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57601,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1070",
              "timestamp": "2026-04-13T08:58:34.344700",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57600,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1069",
              "timestamp": "2026-04-13T08:58:32.023900",
              "price": 0.65,
              "size": 1700.0,
              "notional": 1105.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57600,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1068",
              "timestamp": "2026-04-13T08:58:20.027100",
              "price": 0.65,
              "size": 1200.0,
              "notional": 780.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57599,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1067",
              "timestamp": "2026-04-13T08:58:19.906400",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57599,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1066",
              "timestamp": "2026-04-13T08:58:10.946600",
              "price": 0.65,
              "size": 1100.0,
              "notional": 715.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57598,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1065",
              "timestamp": "2026-04-13T08:57:58.794600",
              "price": 0.65,
              "size": 2100.0,
              "notional": 1365.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 57597,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1064",
              "timestamp": "2026-04-13T08:57:48.366800",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57596,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1063",
              "timestamp": "2026-04-13T08:57:46.649200",
              "price": 0.65,
              "size": 1000.0,
              "notional": 650.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57596,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1062",
              "timestamp": "2026-04-13T08:57:34.798600",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57595,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1061",
              "timestamp": "2026-04-13T08:57:34.527300",
              "price": 0.65,
              "size": 1100.0,
              "notional": 715.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57595,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.49860205032618826,
              "mixed_pct": 0.39049394221808015,
              "instit_pct": 0.010251630941286114,
              "ambiguous_pct": 0.10065237651444547,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.10065237651444547,
              "retail_qty_pct": 0.2528389538885065,
              "mixed_qty_pct": 0.19365106675843083,
              "instit_qty_pct": 0.23554714384033035,
              "ambiguous_qty_pct": 0.3179628355127323,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3179628355127323,
              "retail_notional_pct": 0.25245622774292015,
              "mixed_notional_pct": 0.19348821434627778,
              "instit_notional_pct": 0.23577931575377312,
              "ambiguous_notional_pct": 0.318276242157029,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.318276242157029,
              "run_retail_pct": 0.726027397260274,
              "run_mixed_pct": 0.2602739726027397,
              "run_instit_pct": 0.0013698630136986301,
              "run_unclear_pct": 0.012328767123287671,
              "avg_trade_size": 703.4631873252563,
              "avg_run_notional": 1033.9945205479453,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.2808219178082192,
              "medium_confidence_pct": 0.35753424657534244,
              "low_confidence_pct": 0.08904109589041095,
              "na_confidence_pct": 0.2726027397260274,
              "avg_feature_coverage": 0.8884246575342465,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4875,
              "mixed_pct": 0.18125,
              "instit_pct": 0.20625,
              "ambiguous_pct": 0.125,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.125,
              "retail_qty_pct": 0.08645833333333333,
              "mixed_qty_pct": 0.1463235294117647,
              "instit_qty_pct": 0.5016544117647059,
              "ambiguous_qty_pct": 0.2655637254901961,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2655637254901961,
              "retail_notional_pct": 0.08621267984556369,
              "mixed_notional_pct": 0.146532751919526,
              "instit_notional_pct": 0.5010502350547986,
              "ambiguous_notional_pct": 0.2662043331801117,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2662043331801117,
              "run_retail_pct": 0.8217391304347826,
              "run_mixed_pct": 0.1391304347826087,
              "run_instit_pct": 0.02826086956521739,
              "run_unclear_pct": 0.010869565217391304,
              "avg_trade_size": 1358.326875,
              "avg_run_notional": 2362.307608695652,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6,
              "medium_confidence_pct": 0.25,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.15,
              "avg_feature_coverage": 0.867282608695652,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.49326465927099844,
              "mixed_pct": 0.4235340729001585,
              "instit_pct": 0.05784469096671949,
              "ambiguous_pct": 0.025356576862123614,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.025356576862123614,
              "retail_qty_pct": 0.18981237589658387,
              "mixed_qty_pct": 0.34846213072901894,
              "instit_qty_pct": 0.40969323661709284,
              "ambiguous_qty_pct": 0.05203225675730437,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.05203225675730437,
              "retail_notional_pct": 0.1896584462392761,
              "mixed_notional_pct": 0.3485186139571436,
              "instit_notional_pct": 0.40985801367395436,
              "ambiguous_notional_pct": 0.05196492612962591,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.05196492612962591,
              "run_retail_pct": 0.747381392483056,
              "run_mixed_pct": 0.24091189155884166,
              "run_instit_pct": 0.004313000616142945,
              "run_unclear_pct": 0.0073937153419593345,
              "avg_trade_size": 2255.551901743265,
              "avg_run_notional": 3507.709796672828,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6494146642020949,
              "medium_confidence_pct": 0.10227972889710413,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.24830560690080097,
              "avg_feature_coverage": 0.8833641404805914,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3493975903614458,
              "mixed_pct": 0.39759036144578314,
              "instit_pct": 0.04819277108433735,
              "ambiguous_pct": 0.20481927710843373,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.20481927710843373,
              "retail_qty_pct": 0.0525965379494008,
              "mixed_qty_pct": 0.6109631602308033,
              "instit_qty_pct": 0.02463382157123835,
              "ambiguous_qty_pct": 0.3118064802485575,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3118064802485575,
              "retail_notional_pct": 0.052300399363615704,
              "mixed_notional_pct": 0.6131129798586534,
              "instit_notional_pct": 0.024507289197701225,
              "ambiguous_notional_pct": 0.31007933158002965,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.31007933158002965,
              "run_retail_pct": 0.45714285714285713,
              "run_mixed_pct": 0.3142857142857143,
              "run_instit_pct": 0.02857142857142857,
              "run_unclear_pct": 0.2,
              "avg_trade_size": 2783.0421686746986,
              "avg_run_notional": 6599.785714285715,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.11428571428571428,
              "medium_confidence_pct": 0.37142857142857144,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.5142857142857142,
              "avg_feature_coverage": 0.9528571428571431,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5707102451288498,
              "mixed_pct": 0.40886235072281585,
              "instit_pct": 0.01005656819610308,
              "ambiguous_pct": 0.010370835952231301,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.010370835952231301,
              "retail_qty_pct": 0.38874788494077833,
              "mixed_qty_pct": 0.5733824832809604,
              "instit_qty_pct": 0.023547659334461363,
              "ambiguous_qty_pct": 0.014321972443799855,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.014321972443799855,
              "retail_notional_pct": 0.388527771049119,
              "mixed_notional_pct": 0.5736189062918444,
              "instit_notional_pct": 0.023459004946215323,
              "ambiguous_notional_pct": 0.014394317712821162,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.014394317712821162,
              "run_retail_pct": 0.759793370641412,
              "run_mixed_pct": 0.2376237623762376,
              "run_instit_pct": 0.00043047783039173483,
              "run_unclear_pct": 0.002152389151958674,
              "avg_trade_size": 884.8164676304211,
              "avg_run_notional": 1212.004304778304,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3151097718467499,
              "medium_confidence_pct": 0.36074042186827376,
              "low_confidence_pct": 0.08437365475678002,
              "na_confidence_pct": 0.23977615152819629,
              "avg_feature_coverage": 0.887128712871287,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 1.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 1.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 1.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 1.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 35.0,
              "avg_run_notional": 35.0,
              "dominant_bucket": "MIXED",
              "dominant_label": "Mixed",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
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
          "n_trades": 9019,
          "n_runs": 6256,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-13",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.5675795542743098,
            "mixed_pct": 0.25856525113648965,
            "instit_pct": 0.12340614258787005,
            "ambiguous_pct": 0.05044905200133053,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05044905200133053,
            "retail_qty_pct": 0.08779731564794904,
            "mixed_qty_pct": 0.28901600686283185,
            "instit_qty_pct": 0.46456447561271164,
            "ambiguous_qty_pct": 0.1586222018765075,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1586222018765075,
            "retail_notional_pct": 0.08799359845776578,
            "mixed_notional_pct": 0.289325963756111,
            "instit_notional_pct": 0.46442868366541834,
            "ambiguous_notional_pct": 0.1582517541207048,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1582517541207048
          },
          "run_composition": {
            "retail_pct": 0.8117007672634271,
            "mixed_pct": 0.16592071611253198,
            "instit_pct": 0.014546035805626599,
            "ambiguous_pct": 0.007832480818414322,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.007832480818414322,
            "retail_notional_pct": 0.08799359845776578,
            "mixed_notional_pct": 0.289325963756111,
            "instit_notional_pct": 0.46442868366541834,
            "unclear_notional_pct": 0.1582517541207048
          },
          "counts": {
            "trades": {
              "retail": 5119,
              "mixed": 2332,
              "institutional": 1113,
              "ambiguous": 455,
              "unobservable": 0,
              "unclear": 455
            },
            "runs": {
              "retail": 5078,
              "mixed": 1038,
              "institutional": 91,
              "ambiguous": 49,
              "unobservable": 0,
              "unclear": 49
            }
          },
          "confidence": {
            "high": 0.4913682864450128,
            "medium": 0.3062659846547315,
            "low": 0.028612531969309463,
            "na": 0.1737531969309463
          },
          "confidence_counts": {
            "high": 3074,
            "medium": 1916,
            "low": 179,
            "na": 1087
          },
          "trade_confidence": {
            "high": 0.3845215655837676,
            "medium": 0.2759729460028828,
            "low": 0.030491185275529437,
            "na": 0.30901430313782013
          },
          "trade_confidence_counts": {
            "high": 3468,
            "medium": 2489,
            "low": 275,
            "na": 2787
          },
          "observability": {
            "avg_feature_coverage": 0.8673353580562658,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.007832480818414322,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8117007672634271,
          "dominance_gap": 0.6457800511508951,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 6869,
              "MULTI_FILL_SINGLE_PRICE": 2084,
              "WALK_BOOK": 66
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 8642,
              "MOMENTUM_REACTIVE": 220,
              "PERSISTENT_POSITIVE_IMPACT": 150,
              "UNOBSERVABLE": 6,
              "SHORT_HORIZON_POSITIVE_IMPACT": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 6209,
              "ADAPTIVE": 47
            },
            "participant_confidence": {
              "HIGH": 3074,
              "MEDIUM": 1916,
              "NA": 1087,
              "LOW": 179
            }
          },
          "trade_size": {
            "avg": 1857.5050449052,
            "median": 127.0
          },
          "run_size": {
            "avg": 2677.8833120204604,
            "median": 127.0,
            "avg_length": 1.1656010230179028
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-1115",
              "timestamp": "2026-04-13T09:06:10.739000",
              "price": 0.655,
              "size": 100.0,
              "notional": 65.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57613,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1089",
              "timestamp": "2026-04-13T08:59:52.729500",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57612,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1088",
              "timestamp": "2026-04-13T08:59:51.492100",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57612,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1087",
              "timestamp": "2026-04-13T08:59:37.855400",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57611,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1086",
              "timestamp": "2026-04-13T08:59:30.274100",
              "price": 0.645,
              "size": 700.0,
              "notional": 451.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57610,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1085",
              "timestamp": "2026-04-13T08:59:30.152400",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57609,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1084",
              "timestamp": "2026-04-13T08:59:30.027000",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57608,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1083",
              "timestamp": "2026-04-13T08:59:25.431900",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57608,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1082",
              "timestamp": "2026-04-13T08:59:24.887000",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1081",
              "timestamp": "2026-04-13T08:59:24.766300",
              "price": 0.65,
              "size": 400.0,
              "notional": 260.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1080",
              "timestamp": "2026-04-13T08:59:24.645500",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1079",
              "timestamp": "2026-04-13T08:59:15.145100",
              "price": 0.65,
              "size": 700.0,
              "notional": 455.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57606,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1078",
              "timestamp": "2026-04-13T08:59:14.148800",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57606,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1077",
              "timestamp": "2026-04-13T08:59:08.895100",
              "price": 0.65,
              "size": 400.0,
              "notional": 260.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57605,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1076",
              "timestamp": "2026-04-13T08:59:08.744300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57604,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1075",
              "timestamp": "2026-04-13T08:59:00.311300",
              "price": 0.65,
              "size": 1200.0,
              "notional": 780.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57603,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1074",
              "timestamp": "2026-04-13T08:58:48.397800",
              "price": 0.65,
              "size": 1300.0,
              "notional": 845.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57602,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1073",
              "timestamp": "2026-04-13T08:58:48.186500",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57602,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1072",
              "timestamp": "2026-04-13T08:58:40.886200",
              "price": 0.65,
              "size": 500.0,
              "notional": 325.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57601,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1071",
              "timestamp": "2026-04-13T08:58:40.765600",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57601,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1070",
              "timestamp": "2026-04-13T08:58:34.344700",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57600,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1069",
              "timestamp": "2026-04-13T08:58:32.023900",
              "price": 0.65,
              "size": 1700.0,
              "notional": 1105.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57600,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1068",
              "timestamp": "2026-04-13T08:58:20.027100",
              "price": 0.65,
              "size": 1200.0,
              "notional": 780.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57599,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1067",
              "timestamp": "2026-04-13T08:58:19.906400",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57599,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1066",
              "timestamp": "2026-04-13T08:58:10.946600",
              "price": 0.65,
              "size": 1100.0,
              "notional": 715.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57598,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1065",
              "timestamp": "2026-04-13T08:57:58.794600",
              "price": 0.65,
              "size": 2100.0,
              "notional": 1365.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 57597,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1064",
              "timestamp": "2026-04-13T08:57:48.366800",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57596,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1063",
              "timestamp": "2026-04-13T08:57:46.649200",
              "price": 0.65,
              "size": 1000.0,
              "notional": 650.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57596,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1062",
              "timestamp": "2026-04-13T08:57:34.798600",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57595,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1061",
              "timestamp": "2026-04-13T08:57:34.527300",
              "price": 0.65,
              "size": 1100.0,
              "notional": 715.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57595,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5675795542743098,
              "mixed_pct": 0.25856525113648965,
              "instit_pct": 0.12340614258787005,
              "ambiguous_pct": 0.05044905200133053,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.05044905200133053,
              "retail_qty_pct": 0.08779731564794904,
              "mixed_qty_pct": 0.28901600686283185,
              "instit_qty_pct": 0.46456447561271164,
              "ambiguous_qty_pct": 0.1586222018765075,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1586222018765075,
              "retail_notional_pct": 0.08799359845776578,
              "mixed_notional_pct": 0.289325963756111,
              "instit_notional_pct": 0.46442868366541834,
              "ambiguous_notional_pct": 0.1582517541207048,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.1582517541207048,
              "run_retail_pct": 0.8117007672634271,
              "run_mixed_pct": 0.16592071611253198,
              "run_instit_pct": 0.014546035805626599,
              "run_unclear_pct": 0.007832480818414322,
              "avg_trade_size": 1857.5050449052,
              "avg_run_notional": 2677.8833120204604,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4913682864450128,
              "medium_confidence_pct": 0.3062659846547315,
              "low_confidence_pct": 0.028612531969309463,
              "na_confidence_pct": 0.1737531969309463,
              "avg_feature_coverage": 0.8673353580562658,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3914403590696831,
              "mixed_pct": 0.32795333303108615,
              "instit_pct": 0.24229647428631879,
              "ambiguous_pct": 0.03772045155732874,
              "unobservable_pct": 0.0005893820555832616,
              "unclear_pct": 0.038309833612912,
              "retail_qty_pct": 0.10735693407176379,
              "mixed_qty_pct": 0.23900732016667886,
              "instit_qty_pct": 0.5908071325261909,
              "ambiguous_qty_pct": 0.048699393872498935,
              "unobservable_qty_pct": 0.014129219362867568,
              "unclear_qty_pct": 0.06282861323536651,
              "retail_notional_pct": 0.10722309029791818,
              "mixed_notional_pct": 0.2392519872093755,
              "instit_notional_pct": 0.5909988486510036,
              "ambiguous_notional_pct": 0.04849960656257951,
              "unobservable_notional_pct": 0.014026467279123251,
              "unclear_notional_pct": 0.06252607384170276,
              "run_retail_pct": 0.735492857566238,
              "run_mixed_pct": 0.23258846541402406,
              "run_instit_pct": 0.016537253274850335,
              "run_unclear_pct": 0.015381423744887676,
              "avg_trade_size": 5454.931440359071,
              "avg_run_notional": 10697.595529014287,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.38785489893900776,
              "medium_confidence_pct": 0.33219726157311363,
              "low_confidence_pct": 0.031977950328966866,
              "na_confidence_pct": 0.24796988915891174,
              "avg_feature_coverage": 0.8815837828225949,
              "observable_run_pct": 0.9996739967992413,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4754976522716752,
              "mixed_pct": 0.2775610078698499,
              "instit_pct": 0.2043515640499967,
              "ambiguous_pct": 0.042589775808478274,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.042589775808478274,
              "retail_qty_pct": 0.08874381512961702,
              "mixed_qty_pct": 0.2824852289100108,
              "instit_qty_pct": 0.5363301799336557,
              "ambiguous_qty_pct": 0.09244077602671641,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.09244077602671641,
              "retail_notional_pct": 0.08854175457294075,
              "mixed_notional_pct": 0.28247387141013325,
              "instit_notional_pct": 0.5358655236177612,
              "ambiguous_notional_pct": 0.09311885039916482,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.09311885039916482,
              "run_retail_pct": 0.7880416526704737,
              "run_mixed_pct": 0.18150263128429067,
              "run_instit_pct": 0.02239390885679095,
              "run_unclear_pct": 0.008061807188444743,
              "avg_trade_size": 1539.894385291978,
              "avg_run_notional": 2607.1820624790057,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4893069085208823,
              "medium_confidence_pct": 0.2954876273653566,
              "low_confidence_pct": 0.02564102564102564,
              "na_confidence_pct": 0.1895644384727354,
              "avg_feature_coverage": 0.8717668794088007,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23422159887798036,
              "mixed_pct": 0.10659186535764376,
              "instit_pct": 0.2805049088359046,
              "ambiguous_pct": 0.37868162692847124,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.37868162692847124,
              "retail_qty_pct": 0.0586740275697238,
              "mixed_qty_pct": 0.11564809048524734,
              "instit_qty_pct": 0.4841869624492956,
              "ambiguous_qty_pct": 0.34149091949573324,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.34149091949573324,
              "retail_notional_pct": 0.058846122468364535,
              "mixed_notional_pct": 0.11649995258962423,
              "instit_notional_pct": 0.4831593877260246,
              "ambiguous_notional_pct": 0.3414945372159866,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3414945372159866,
              "run_retail_pct": 0.423728813559322,
              "run_mixed_pct": 0.13898305084745763,
              "run_instit_pct": 0.1288135593220339,
              "run_unclear_pct": 0.30847457627118646,
              "avg_trade_size": 4237.71458625526,
              "avg_run_notional": 10242.340677966102,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.030508474576271188,
              "medium_confidence_pct": 0.13220338983050847,
              "low_confidence_pct": 0.3898305084745763,
              "na_confidence_pct": 0.44745762711864406,
              "avg_feature_coverage": 0.8454237288135594,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4787228175952648,
              "mixed_pct": 0.34664803955809637,
              "instit_pct": 0.12418889358651496,
              "ambiguous_pct": 0.050311575154868476,
              "unobservable_pct": 0.0001286741052554181,
              "unclear_pct": 0.050440249260123894,
              "retail_qty_pct": 0.08127152700372696,
              "mixed_qty_pct": 0.26031666573392637,
              "instit_qty_pct": 0.4052125221344601,
              "ambiguous_qty_pct": 0.04029143677902557,
              "unobservable_qty_pct": 0.21290784834886106,
              "unclear_qty_pct": 0.25319928512788664,
              "retail_notional_pct": 0.08173142454850883,
              "mixed_notional_pct": 0.261206599689249,
              "instit_notional_pct": 0.40628809534615573,
              "ambiguous_notional_pct": 0.04057519178590336,
              "unobservable_notional_pct": 0.21019868863018318,
              "unclear_notional_pct": 0.25077388041608656,
              "run_retail_pct": 0.7629485108069384,
              "run_mixed_pct": 0.22400390208212664,
              "run_instit_pct": 0.005182452824436789,
              "run_unclear_pct": 0.007865134286498186,
              "avg_trade_size": 4455.837372290951,
              "avg_run_notional": 7389.629268359602,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3651800140231076,
              "medium_confidence_pct": 0.3559430539889644,
              "low_confidence_pct": 0.04700789561930311,
              "na_confidence_pct": 0.23186903636862483,
              "avg_feature_coverage": 0.8856217419138492,
              "observable_run_pct": 0.9997866048836996,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.10502958579881656,
              "mixed_pct": 0.3609467455621302,
              "instit_pct": 0.07840236686390532,
              "ambiguous_pct": 0.4467455621301775,
              "unobservable_pct": 0.008875739644970414,
              "unclear_pct": 0.4556213017751479,
              "retail_qty_pct": 0.053171044202434334,
              "mixed_qty_pct": 0.1672005124919923,
              "instit_qty_pct": 0.4196028187059577,
              "ambiguous_qty_pct": 0.31326073030108903,
              "unobservable_qty_pct": 0.04676489429852659,
              "unclear_qty_pct": 0.3600256245996156,
              "retail_notional_pct": 0.05461799044686745,
              "mixed_notional_pct": 0.17741972822186725,
              "instit_notional_pct": 0.39948761873895566,
              "ambiguous_notional_pct": 0.32401169834324917,
              "unobservable_notional_pct": 0.04446296424906051,
              "unclear_notional_pct": 0.36847466259230965,
              "run_retail_pct": 0.4041095890410959,
              "run_mixed_pct": 0.2876712328767123,
              "run_instit_pct": 0.07534246575342465,
              "run_unclear_pct": 0.2328767123287671,
              "avg_trade_size": 95.85133136094674,
              "avg_run_notional": 443.80479452054794,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.2808219178082192,
              "low_confidence_pct": 0.19863013698630136,
              "na_confidence_pct": 0.5205479452054794,
              "avg_feature_coverage": 0.9181506849315068,
              "observable_run_pct": 0.9931506849315068,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7559912854030502,
              "mixed_pct": 0.23311546840958605,
              "instit_pct": 0.010893246187363835,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.10919347425451827,
              "mixed_qty_pct": 0.7282436971933501,
              "instit_qty_pct": 0.16256282855213164,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.10959430414974983,
              "mixed_notional_pct": 0.7328127690047329,
              "instit_notional_pct": 0.15759292684551723,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8427518427518428,
              "run_mixed_pct": 0.1547911547911548,
              "run_instit_pct": 0.002457002457002457,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 912.3945533769062,
              "avg_run_notional": 1028.9658476658478,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6461916461916462,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.19901719901719903,
              "na_confidence_pct": 0.1547911547911548,
              "avg_feature_coverage": 0.8518427518427515,
              "observable_run_pct": 1.0,
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
          "n_trades": 21309,
          "n_runs": 14824,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-12",
          "last_trade_date": "2026-04-13",
          "period_days": 63,
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
            "retail_pct": 0.5757661082171852,
            "mixed_pct": 0.24712562766906002,
            "instit_pct": 0.1283495236754423,
            "ambiguous_pct": 0.04875874043831245,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04875874043831245,
            "retail_qty_pct": 0.07678617061643181,
            "mixed_qty_pct": 0.2993854008833088,
            "instit_qty_pct": 0.4814665197066651,
            "ambiguous_qty_pct": 0.14236190879359434,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14236190879359434,
            "retail_notional_pct": 0.07674175363867243,
            "mixed_notional_pct": 0.3000624790966561,
            "instit_notional_pct": 0.481163444311238,
            "ambiguous_notional_pct": 0.14203232295343343,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14203232295343343
          },
          "run_composition": {
            "retail_pct": 0.8227199136535348,
            "mixed_pct": 0.15393955747436588,
            "instit_pct": 0.015178089584457636,
            "ambiguous_pct": 0.008162439287641663,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.008162439287641663,
            "retail_notional_pct": 0.07674175363867243,
            "mixed_notional_pct": 0.3000624790966561,
            "instit_notional_pct": 0.481163444311238,
            "unclear_notional_pct": 0.14203232295343343
          },
          "counts": {
            "trades": {
              "retail": 12269,
              "mixed": 5266,
              "institutional": 2735,
              "ambiguous": 1039,
              "unobservable": 0,
              "unclear": 1039
            },
            "runs": {
              "retail": 12196,
              "mixed": 2282,
              "institutional": 225,
              "ambiguous": 121,
              "unobservable": 0,
              "unclear": 121
            }
          },
          "confidence": {
            "high": 0.5248246087425796,
            "medium": 0.29000269832703723,
            "low": 0.023070696168375607,
            "na": 0.16210199676200757
          },
          "confidence_counts": {
            "high": 7780,
            "medium": 4299,
            "low": 342,
            "na": 2403
          },
          "trade_confidence": {
            "high": 0.40593176592050306,
            "medium": 0.2750950302689005,
            "low": 0.02308883570322399,
            "na": 0.29588436810737245
          },
          "trade_confidence_counts": {
            "high": 8650,
            "medium": 5862,
            "low": 492,
            "na": 6305
          },
          "observability": {
            "avg_feature_coverage": 0.8647328656233134,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.008162439287641663,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8227199136535348,
          "dominance_gap": 0.668780356179169,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 15965,
              "MULTI_FILL_SINGLE_PRICE": 5230,
              "WALK_BOOK": 114
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 20510,
              "MOMENTUM_REACTIVE": 508,
              "PERSISTENT_POSITIVE_IMPACT": 280,
              "UNOBSERVABLE": 10,
              "SHORT_HORIZON_POSITIVE_IMPACT": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 14715,
              "ADAPTIVE": 109
            },
            "participant_confidence": {
              "HIGH": 7780,
              "MEDIUM": 4299,
              "NA": 2403,
              "LOW": 342
            }
          },
          "trade_size": {
            "avg": 2435.99235064996,
            "median": 135.0
          },
          "run_size": {
            "avg": 3501.656840259039,
            "median": 129.0,
            "avg_length": 1.1473961144090663
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-1115",
              "timestamp": "2026-04-13T09:06:10.739000",
              "price": 0.655,
              "size": 100.0,
              "notional": 65.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57613,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1089",
              "timestamp": "2026-04-13T08:59:52.729500",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57612,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1088",
              "timestamp": "2026-04-13T08:59:51.492100",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57612,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1087",
              "timestamp": "2026-04-13T08:59:37.855400",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57611,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1086",
              "timestamp": "2026-04-13T08:59:30.274100",
              "price": 0.645,
              "size": 700.0,
              "notional": 451.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57610,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1085",
              "timestamp": "2026-04-13T08:59:30.152400",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57609,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1084",
              "timestamp": "2026-04-13T08:59:30.027000",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57608,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1083",
              "timestamp": "2026-04-13T08:59:25.431900",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57608,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1082",
              "timestamp": "2026-04-13T08:59:24.887000",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1081",
              "timestamp": "2026-04-13T08:59:24.766300",
              "price": 0.65,
              "size": 400.0,
              "notional": 260.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1080",
              "timestamp": "2026-04-13T08:59:24.645500",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1079",
              "timestamp": "2026-04-13T08:59:15.145100",
              "price": 0.65,
              "size": 700.0,
              "notional": 455.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57606,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1078",
              "timestamp": "2026-04-13T08:59:14.148800",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57606,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1077",
              "timestamp": "2026-04-13T08:59:08.895100",
              "price": 0.65,
              "size": 400.0,
              "notional": 260.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57605,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1076",
              "timestamp": "2026-04-13T08:59:08.744300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57604,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1075",
              "timestamp": "2026-04-13T08:59:00.311300",
              "price": 0.65,
              "size": 1200.0,
              "notional": 780.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57603,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1074",
              "timestamp": "2026-04-13T08:58:48.397800",
              "price": 0.65,
              "size": 1300.0,
              "notional": 845.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57602,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1073",
              "timestamp": "2026-04-13T08:58:48.186500",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57602,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1072",
              "timestamp": "2026-04-13T08:58:40.886200",
              "price": 0.65,
              "size": 500.0,
              "notional": 325.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57601,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1071",
              "timestamp": "2026-04-13T08:58:40.765600",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57601,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1070",
              "timestamp": "2026-04-13T08:58:34.344700",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57600,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1069",
              "timestamp": "2026-04-13T08:58:32.023900",
              "price": 0.65,
              "size": 1700.0,
              "notional": 1105.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57600,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1068",
              "timestamp": "2026-04-13T08:58:20.027100",
              "price": 0.65,
              "size": 1200.0,
              "notional": 780.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57599,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1067",
              "timestamp": "2026-04-13T08:58:19.906400",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57599,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1066",
              "timestamp": "2026-04-13T08:58:10.946600",
              "price": 0.65,
              "size": 1100.0,
              "notional": 715.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57598,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1065",
              "timestamp": "2026-04-13T08:57:58.794600",
              "price": 0.65,
              "size": 2100.0,
              "notional": 1365.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 57597,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1064",
              "timestamp": "2026-04-13T08:57:48.366800",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57596,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1063",
              "timestamp": "2026-04-13T08:57:46.649200",
              "price": 0.65,
              "size": 1000.0,
              "notional": 650.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57596,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1062",
              "timestamp": "2026-04-13T08:57:34.798600",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57595,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1061",
              "timestamp": "2026-04-13T08:57:34.527300",
              "price": 0.65,
              "size": 1100.0,
              "notional": 715.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57595,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5757661082171852,
              "mixed_pct": 0.24712562766906002,
              "instit_pct": 0.1283495236754423,
              "ambiguous_pct": 0.04875874043831245,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04875874043831245,
              "retail_qty_pct": 0.07678617061643181,
              "mixed_qty_pct": 0.2993854008833088,
              "instit_qty_pct": 0.4814665197066651,
              "ambiguous_qty_pct": 0.14236190879359434,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.14236190879359434,
              "retail_notional_pct": 0.07674175363867243,
              "mixed_notional_pct": 0.3000624790966561,
              "instit_notional_pct": 0.481163444311238,
              "ambiguous_notional_pct": 0.14203232295343343,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.14203232295343343,
              "run_retail_pct": 0.8227199136535348,
              "run_mixed_pct": 0.15393955747436588,
              "run_instit_pct": 0.015178089584457636,
              "run_unclear_pct": 0.008162439287641663,
              "avg_trade_size": 2435.99235064996,
              "avg_run_notional": 3501.656840259039,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5248246087425796,
              "medium_confidence_pct": 0.29000269832703723,
              "low_confidence_pct": 0.023070696168375607,
              "na_confidence_pct": 0.16210199676200757,
              "avg_feature_coverage": 0.8647328656233134,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3817847017215678,
              "mixed_pct": 0.3437777063299525,
              "instit_pct": 0.22808581533335281,
              "ambiguous_pct": 0.04597667553269225,
              "unobservable_pct": 0.00037510108243455216,
              "unclear_pct": 0.04635177661512681,
              "retail_qty_pct": 0.09938980831998226,
              "mixed_qty_pct": 0.2321812873573581,
              "instit_qty_pct": 0.6064226293261669,
              "ambiguous_qty_pct": 0.04870100095401901,
              "unobservable_qty_pct": 0.013305274042473728,
              "unclear_qty_pct": 0.062006274996492736,
              "retail_notional_pct": 0.09928894431946092,
              "mixed_notional_pct": 0.23222462060119053,
              "instit_notional_pct": 0.6064201795695578,
              "ambiguous_notional_pct": 0.04882427312327468,
              "unobservable_notional_pct": 0.013241982386515987,
              "unclear_notional_pct": 0.06206625550979066,
              "run_retail_pct": 0.7226600795832452,
              "run_mixed_pct": 0.2471021318313758,
              "run_instit_pct": 0.015436073893235425,
              "run_unclear_pct": 0.014801714692143558,
              "avg_trade_size": 6430.478126004735,
              "avg_run_notional": 12687.527044366698,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3253109321235655,
              "medium_confidence_pct": 0.36357432575306126,
              "low_confidence_pct": 0.04921089559985391,
              "na_confidence_pct": 0.26190384652351933,
              "avg_feature_coverage": 0.8858278387574248,
              "observable_run_pct": 0.999625151381173,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.46922884594778014,
              "mixed_pct": 0.28920955816694643,
              "instit_pct": 0.19782476693931492,
              "ambiguous_pct": 0.0437368289459585,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0437368289459585,
              "retail_qty_pct": 0.10436682378110318,
              "mixed_qty_pct": 0.27336022043898806,
              "instit_qty_pct": 0.5506159213495462,
              "ambiguous_qty_pct": 0.07165703443036252,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07165703443036252,
              "retail_notional_pct": 0.10542981551223306,
              "mixed_notional_pct": 0.2743419471809985,
              "instit_notional_pct": 0.5489323091035323,
              "ambiguous_notional_pct": 0.07129592820323614,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07129592820323614,
              "run_retail_pct": 0.7811465358675659,
              "run_mixed_pct": 0.1923053341508277,
              "run_instit_pct": 0.0187614960147149,
              "run_unclear_pct": 0.007786633966891478,
              "avg_trade_size": 1671.7068971675537,
              "avg_run_notional": 2869.575597792765,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4583077866339669,
              "medium_confidence_pct": 0.31477621091354996,
              "low_confidence_pct": 0.02682403433476395,
              "na_confidence_pct": 0.2000919681177192,
              "avg_feature_coverage": 0.8735606989576945,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.46460509058263255,
              "mixed_pct": 0.3336302489181284,
              "instit_pct": 0.15459015128667317,
              "ambiguous_pct": 0.046837849021932006,
              "unobservable_pct": 0.00033666019063383296,
              "unclear_pct": 0.047174509212565836,
              "retail_qty_pct": 0.08392572728647214,
              "mixed_qty_pct": 0.23347454279663457,
              "instit_qty_pct": 0.5360784475530272,
              "ambiguous_qty_pct": 0.04411942594501745,
              "unobservable_qty_pct": 0.1024018564188486,
              "unclear_qty_pct": 0.14652128236386605,
              "retail_notional_pct": 0.08363129732503094,
              "mixed_notional_pct": 0.2313517858820675,
              "instit_notional_pct": 0.5439721865380358,
              "ambiguous_notional_pct": 0.04416150171634374,
              "unobservable_notional_pct": 0.09688322853852196,
              "unclear_notional_pct": 0.1410447302548657,
              "run_retail_pct": 0.7612054258479378,
              "run_mixed_pct": 0.2219133629997256,
              "run_instit_pct": 0.007551806826451605,
              "run_unclear_pct": 0.009329404325884921,
              "avg_trade_size": 4352.470648772242,
              "avg_run_notional": 7403.421668674913,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3688097254864533,
              "medium_confidence_pct": 0.3546963171520263,
              "low_confidence_pct": 0.045251190035909855,
              "na_confidence_pct": 0.23124276732561053,
              "avg_feature_coverage": 0.8847639612984811,
              "observable_run_pct": 0.9994870020639219,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3581183611532625,
              "mixed_pct": 0.1537683358624178,
              "instit_pct": 0.19878603945371776,
              "ambiguous_pct": 0.2893272635306019,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2893272635306019,
              "retail_qty_pct": 0.08432218390653887,
              "mixed_qty_pct": 0.15035991975559548,
              "instit_qty_pct": 0.3971639109968925,
              "ambiguous_qty_pct": 0.36815398534097316,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.36815398534097316,
              "retail_notional_pct": 0.08531275512790609,
              "mixed_notional_pct": 0.15178505222022437,
              "instit_notional_pct": 0.3938000548657827,
              "ambiguous_notional_pct": 0.36910213778608686,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.36910213778608686,
              "run_retail_pct": 0.5663176265270506,
              "run_mixed_pct": 0.17015706806282724,
              "run_instit_pct": 0.07417102966841187,
              "run_unclear_pct": 0.1893542757417103,
              "avg_trade_size": 4075.7943854324735,
              "avg_run_notional": 7031.278795811519,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.18324607329842932,
              "medium_confidence_pct": 0.1300174520069808,
              "low_confidence_pct": 0.32722513089005234,
              "na_confidence_pct": 0.35951134380453753,
              "avg_feature_coverage": 0.8428010471204188,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5993474714518761,
              "mixed_pct": 0.20717781402936378,
              "instit_pct": 0.15921696574225122,
              "ambiguous_pct": 0.03425774877650897,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.03425774877650897,
              "retail_qty_pct": 0.1140682528643476,
              "mixed_qty_pct": 0.4627927267795445,
              "instit_qty_pct": 0.38357013422866354,
              "ambiguous_qty_pct": 0.03956888612744435,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.03956888612744435,
              "retail_notional_pct": 0.11189846630167652,
              "mixed_notional_pct": 0.4586641452127977,
              "instit_notional_pct": 0.3869280172200324,
              "ambiguous_notional_pct": 0.042509371265493444,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.042509371265493444,
              "run_retail_pct": 0.8164470695138574,
              "run_mixed_pct": 0.1485688323489323,
              "run_instit_pct": 0.019990913221263062,
              "run_unclear_pct": 0.014993184915947297,
              "avg_trade_size": 2247.786101141925,
              "avg_run_notional": 3130.151930940481,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.44161744661517494,
              "medium_confidence_pct": 0.22126306224443434,
              "low_confidence_pct": 0.17355747387551113,
              "na_confidence_pct": 0.1635620172648796,
              "avg_feature_coverage": 0.8547705588368921,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.11432325886990802,
              "mixed_pct": 0.3324572930354796,
              "instit_pct": 0.09724047306176084,
              "ambiguous_pct": 0.44152431011826543,
              "unobservable_pct": 0.01445466491458607,
              "unclear_pct": 0.4559789750328515,
              "retail_qty_pct": 0.056622851365015166,
              "mixed_qty_pct": 0.14020896528479945,
              "instit_qty_pct": 0.3977081226828446,
              "ambiguous_qty_pct": 0.363329962925514,
              "unobservable_qty_pct": 0.04213009774182676,
              "unclear_qty_pct": 0.40546006066734075,
              "retail_notional_pct": 0.05853983306810431,
              "mixed_notional_pct": 0.14766490208177716,
              "instit_notional_pct": 0.38102448767496994,
              "ambiguous_notional_pct": 0.37187814621155535,
              "unobservable_notional_pct": 0.04089263096359326,
              "unclear_notional_pct": 0.4127707771751486,
              "run_retail_pct": 0.3492822966507177,
              "run_mixed_pct": 0.23923444976076555,
              "run_instit_pct": 0.10526315789473684,
              "run_unclear_pct": 0.3062200956937799,
              "avg_trade_size": 161.8449408672799,
              "avg_run_notional": 589.3014354066986,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.19617224880382775,
              "low_confidence_pct": 0.2583732057416268,
              "na_confidence_pct": 0.5454545454545454,
              "avg_feature_coverage": 0.8858851674641147,
              "observable_run_pct": 0.9808612440191388,
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
          "n_trades": 48379,
          "n_runs": 34952,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-10",
          "last_trade_date": "2026-04-13",
          "period_days": 126,
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
            "retail_pct": 0.6050145724384547,
            "mixed_pct": 0.24551975030488435,
            "instit_pct": 0.10707124992248702,
            "ambiguous_pct": 0.042394427334173916,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.042394427334173916,
            "retail_qty_pct": 0.09851410396091273,
            "mixed_qty_pct": 0.3042539020820866,
            "instit_qty_pct": 0.4816926705356479,
            "ambiguous_qty_pct": 0.11553932342135279,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.11553932342135279,
            "retail_notional_pct": 0.09857883484505998,
            "mixed_notional_pct": 0.3044470420144791,
            "instit_notional_pct": 0.481812804417176,
            "ambiguous_notional_pct": 0.11516131872328492,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.11516131872328492
          },
          "run_composition": {
            "retail_pct": 0.8285648889906158,
            "mixed_pct": 0.15203707942320896,
            "instit_pct": 0.012960631723506524,
            "ambiguous_pct": 0.006437399862668803,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.006437399862668803,
            "retail_notional_pct": 0.09857883484505998,
            "mixed_notional_pct": 0.3044470420144791,
            "instit_notional_pct": 0.481812804417176,
            "unclear_notional_pct": 0.11516131872328492
          },
          "counts": {
            "trades": {
              "retail": 29270,
              "mixed": 11878,
              "institutional": 5180,
              "ambiguous": 2051,
              "unobservable": 0,
              "unclear": 2051
            },
            "runs": {
              "retail": 28960,
              "mixed": 5314,
              "institutional": 453,
              "ambiguous": 225,
              "unobservable": 0,
              "unclear": 225
            }
          },
          "confidence": {
            "high": 0.48795490959029525,
            "medium": 0.32418745708400093,
            "low": 0.029383154039826047,
            "na": 0.15847447928587777
          },
          "confidence_counts": {
            "high": 17055,
            "medium": 11331,
            "low": 1027,
            "na": 5539
          },
          "trade_confidence": {
            "high": 0.38489840633332645,
            "medium": 0.2981665598710184,
            "low": 0.029020856156596872,
            "na": 0.28791417763905824
          },
          "trade_confidence_counts": {
            "high": 18621,
            "medium": 14425,
            "low": 1404,
            "na": 13929
          },
          "observability": {
            "avg_feature_coverage": 0.8650334744792857,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.006437399862668803,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8285648889906158,
          "dominance_gap": 0.6765278095674068,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 37987,
              "MULTI_FILL_SINGLE_PRICE": 10192,
              "WALK_BOOK": 200
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 47067,
              "MOMENTUM_REACTIVE": 878,
              "PERSISTENT_POSITIVE_IMPACT": 403,
              "UNOBSERVABLE": 27,
              "SHORT_HORIZON_POSITIVE_IMPACT": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 34662,
              "ADAPTIVE": 284,
              "SCHEDULED": 6
            },
            "participant_confidence": {
              "HIGH": 17055,
              "MEDIUM": 11331,
              "NA": 5539,
              "LOW": 1027
            }
          },
          "trade_size": {
            "avg": 1856.7200541557288,
            "median": 136.0
          },
          "run_size": {
            "avg": 2569.9891136415654,
            "median": 137.0,
            "avg_length": 1.148861295490959
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-1115",
              "timestamp": "2026-04-13T09:06:10.739000",
              "price": 0.655,
              "size": 100.0,
              "notional": 65.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57613,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1089",
              "timestamp": "2026-04-13T08:59:52.729500",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57612,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1088",
              "timestamp": "2026-04-13T08:59:51.492100",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57612,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1087",
              "timestamp": "2026-04-13T08:59:37.855400",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57611,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1086",
              "timestamp": "2026-04-13T08:59:30.274100",
              "price": 0.645,
              "size": 700.0,
              "notional": 451.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57610,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1085",
              "timestamp": "2026-04-13T08:59:30.152400",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57609,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1084",
              "timestamp": "2026-04-13T08:59:30.027000",
              "price": 0.645,
              "size": 100.0,
              "notional": 64.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57608,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1083",
              "timestamp": "2026-04-13T08:59:25.431900",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57608,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1082",
              "timestamp": "2026-04-13T08:59:24.887000",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1081",
              "timestamp": "2026-04-13T08:59:24.766300",
              "price": 0.65,
              "size": 400.0,
              "notional": 260.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1080",
              "timestamp": "2026-04-13T08:59:24.645500",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57607,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1079",
              "timestamp": "2026-04-13T08:59:15.145100",
              "price": 0.65,
              "size": 700.0,
              "notional": 455.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57606,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1078",
              "timestamp": "2026-04-13T08:59:14.148800",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57606,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1077",
              "timestamp": "2026-04-13T08:59:08.895100",
              "price": 0.65,
              "size": 400.0,
              "notional": 260.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57605,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1076",
              "timestamp": "2026-04-13T08:59:08.744300",
              "price": 0.645,
              "size": 200.0,
              "notional": 129.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57604,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1075",
              "timestamp": "2026-04-13T08:59:00.311300",
              "price": 0.65,
              "size": 1200.0,
              "notional": 780.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57603,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1074",
              "timestamp": "2026-04-13T08:58:48.397800",
              "price": 0.65,
              "size": 1300.0,
              "notional": 845.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57602,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1073",
              "timestamp": "2026-04-13T08:58:48.186500",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57602,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1072",
              "timestamp": "2026-04-13T08:58:40.886200",
              "price": 0.65,
              "size": 500.0,
              "notional": 325.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57601,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1071",
              "timestamp": "2026-04-13T08:58:40.765600",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57601,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1070",
              "timestamp": "2026-04-13T08:58:34.344700",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57600,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1069",
              "timestamp": "2026-04-13T08:58:32.023900",
              "price": 0.65,
              "size": 1700.0,
              "notional": 1105.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57600,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1068",
              "timestamp": "2026-04-13T08:58:20.027100",
              "price": 0.65,
              "size": 1200.0,
              "notional": 780.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57599,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1067",
              "timestamp": "2026-04-13T08:58:19.906400",
              "price": 0.65,
              "size": 200.0,
              "notional": 130.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57599,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1066",
              "timestamp": "2026-04-13T08:58:10.946600",
              "price": 0.65,
              "size": 1100.0,
              "notional": 715.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57598,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1065",
              "timestamp": "2026-04-13T08:57:58.794600",
              "price": 0.65,
              "size": 2100.0,
              "notional": 1365.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 57597,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1064",
              "timestamp": "2026-04-13T08:57:48.366800",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57596,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1063",
              "timestamp": "2026-04-13T08:57:46.649200",
              "price": 0.65,
              "size": 1000.0,
              "notional": 650.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57596,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1062",
              "timestamp": "2026-04-13T08:57:34.798600",
              "price": 0.65,
              "size": 100.0,
              "notional": 65.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57595,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1061",
              "timestamp": "2026-04-13T08:57:34.527300",
              "price": 0.65,
              "size": 1100.0,
              "notional": 715.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57595,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.6050145724384547,
              "mixed_pct": 0.24551975030488435,
              "instit_pct": 0.10707124992248702,
              "ambiguous_pct": 0.042394427334173916,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.042394427334173916,
              "retail_qty_pct": 0.09851410396091273,
              "mixed_qty_pct": 0.3042539020820866,
              "instit_qty_pct": 0.4816926705356479,
              "ambiguous_qty_pct": 0.11553932342135279,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.11553932342135279,
              "retail_notional_pct": 0.09857883484505998,
              "mixed_notional_pct": 0.3044470420144791,
              "instit_notional_pct": 0.481812804417176,
              "ambiguous_notional_pct": 0.11516131872328492,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.11516131872328492,
              "run_retail_pct": 0.8285648889906158,
              "run_mixed_pct": 0.15203707942320896,
              "run_instit_pct": 0.012960631723506524,
              "run_unclear_pct": 0.006437399862668803,
              "avg_trade_size": 1856.7200541557288,
              "avg_run_notional": 2569.9891136415654,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.48795490959029525,
              "medium_confidence_pct": 0.32418745708400093,
              "low_confidence_pct": 0.029383154039826047,
              "na_confidence_pct": 0.15847447928587777,
              "avg_feature_coverage": 0.8650334744792857,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.36475929911475674,
              "mixed_pct": 0.33232153009014864,
              "instit_pct": 0.23154897263055307,
              "ambiguous_pct": 0.07103011045236741,
              "unobservable_pct": 0.0003400877121741249,
              "unclear_pct": 0.07137019816454154,
              "retail_qty_pct": 0.09912080249557295,
              "mixed_qty_pct": 0.22739822811859878,
              "instit_qty_pct": 0.61275045207085,
              "ambiguous_qty_pct": 0.04598573723549017,
              "unobservable_qty_pct": 0.014744780079488137,
              "unclear_qty_pct": 0.060730517314978305,
              "retail_notional_pct": 0.09902775169086922,
              "mixed_notional_pct": 0.22742208139760017,
              "instit_notional_pct": 0.612866477407375,
              "ambiguous_notional_pct": 0.04593328501963279,
              "unobservable_notional_pct": 0.01475040448452287,
              "unclear_notional_pct": 0.06068368950415566,
              "run_retail_pct": 0.721551520248075,
              "run_mixed_pct": 0.2462828160723202,
              "run_instit_pct": 0.015157806217643812,
              "run_unclear_pct": 0.01700785746196095,
              "avg_trade_size": 5573.065886283805,
              "avg_run_notional": 11541.151174677423,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.31326833626783696,
              "medium_confidence_pct": 0.3708932278663969,
              "low_confidence_pct": 0.05254776233148503,
              "na_confidence_pct": 0.26329067353428115,
              "avg_feature_coverage": 0.8865269492549864,
              "observable_run_pct": 0.9995953012903056,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4446547564561047,
              "mixed_pct": 0.3111807554166117,
              "instit_pct": 0.16482557463016548,
              "ambiguous_pct": 0.07907516154806879,
              "unobservable_pct": 0.00026375194904932936,
              "unclear_pct": 0.07933891349711812,
              "retail_qty_pct": 0.08278391483776143,
              "mixed_qty_pct": 0.21740057219441017,
              "instit_qty_pct": 0.5688145692222842,
              "ambiguous_qty_pct": 0.06528170415099362,
              "unobservable_qty_pct": 0.06571923959455049,
              "unclear_qty_pct": 0.1310009437455441,
              "retail_notional_pct": 0.08258978961010417,
              "mixed_notional_pct": 0.21561398438556323,
              "instit_notional_pct": 0.5745302498668248,
              "ambiguous_notional_pct": 0.06620833833500861,
              "unobservable_notional_pct": 0.06105763780249919,
              "unclear_notional_pct": 0.12726597613750779,
              "run_retail_pct": 0.7645215211032177,
              "run_mixed_pct": 0.21398523471235548,
              "run_instit_pct": 0.00911686864465803,
              "run_unclear_pct": 0.01237637553976877,
              "avg_trade_size": 4094.4402291151123,
              "avg_run_notional": 7352.140903955983,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.37792868087477366,
              "medium_confidence_pct": 0.35391419417746206,
              "low_confidence_pct": 0.04179551469564006,
              "na_confidence_pct": 0.22636161025212426,
              "avg_feature_coverage": 0.8835851093467055,
              "observable_run_pct": 0.999575149742304,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.48835213466648747,
              "mixed_pct": 0.26749247774342644,
              "instit_pct": 0.20076928644546235,
              "ambiguous_pct": 0.04338610114462378,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04338610114462378,
              "retail_qty_pct": 0.11768624877075565,
              "mixed_qty_pct": 0.2637795540892226,
              "instit_qty_pct": 0.5403212365355907,
              "ambiguous_qty_pct": 0.07821296060443107,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07821296060443107,
              "retail_notional_pct": 0.11906794370893926,
              "mixed_notional_pct": 0.2635236689214097,
              "instit_notional_pct": 0.5390261839716926,
              "ambiguous_notional_pct": 0.07838220339795841,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07838220339795841,
              "run_retail_pct": 0.7951905547356541,
              "run_mixed_pct": 0.1768035419741297,
              "run_instit_pct": 0.019897560552131262,
              "run_unclear_pct": 0.008108342738084903,
              "avg_trade_size": 1705.5349125763858,
              "avg_run_notional": 2863.9187082211997,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4617588332320514,
              "medium_confidence_pct": 0.3294730445351159,
              "low_confidence_pct": 0.02385623752061811,
              "na_confidence_pct": 0.1849118847122146,
              "avg_feature_coverage": 0.8702916919871515,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5310021045815121,
              "mixed_pct": 0.20997247854945766,
              "instit_pct": 0.18002266472397604,
              "ambiguous_pct": 0.07900275214505423,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.07900275214505423,
              "retail_qty_pct": 0.11440738952046312,
              "mixed_qty_pct": 0.4176995156242226,
              "instit_qty_pct": 0.3969571011723994,
              "ambiguous_qty_pct": 0.07093599368291491,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07093599368291491,
              "retail_notional_pct": 0.10971304490576828,
              "mixed_notional_pct": 0.391016261096188,
              "instit_notional_pct": 0.41041018402780727,
              "ambiguous_notional_pct": 0.08886050997023652,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.08886050997023652,
              "run_retail_pct": 0.7729610580455547,
              "run_mixed_pct": 0.16164584864070536,
              "run_instit_pct": 0.030614744060739652,
              "run_unclear_pct": 0.034778349253000246,
              "avg_trade_size": 1828.5328476606767,
              "avg_run_notional": 2766.3108988488852,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.36051922605927017,
              "medium_confidence_pct": 0.2162625520450649,
              "low_confidence_pct": 0.22679402400195933,
              "na_confidence_pct": 0.1964241978937056,
              "avg_feature_coverage": 0.8546289493019835,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.41909005628517826,
              "mixed_pct": 0.18925891181988744,
              "instit_pct": 0.14868667917448405,
              "ambiguous_pct": 0.24296435272045028,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.24296435272045028,
              "retail_qty_pct": 0.09297991543750801,
              "mixed_qty_pct": 0.1700373892010048,
              "instit_qty_pct": 0.3741094342699399,
              "ambiguous_qty_pct": 0.3628732610915473,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3628732610915473,
              "retail_notional_pct": 0.09329781383504882,
              "mixed_notional_pct": 0.17039764007587496,
              "instit_notional_pct": 0.3727586665767268,
              "ambiguous_notional_pct": 0.36354587951234946,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.36354587951234946,
              "run_retail_pct": 0.6462135922330097,
              "run_mixed_pct": 0.16,
              "run_instit_pct": 0.05436893203883495,
              "run_unclear_pct": 0.13941747572815533,
              "avg_trade_size": 3127.3066369606004,
              "avg_run_notional": 5178.576893203884,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.22174757281553398,
              "medium_confidence_pct": 0.189126213592233,
              "low_confidence_pct": 0.2897087378640777,
              "na_confidence_pct": 0.29941747572815536,
              "avg_feature_coverage": 0.8485436893203884,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1426056338028169,
              "mixed_pct": 0.19483568075117372,
              "instit_pct": 0.2153755868544601,
              "ambiguous_pct": 0.44014084507042256,
              "unobservable_pct": 0.007042253521126761,
              "unclear_pct": 0.4471830985915493,
              "retail_qty_pct": 0.008578305707440082,
              "mixed_qty_pct": 0.015965792627729097,
              "instit_qty_pct": 0.07960844114102492,
              "ambiguous_qty_pct": 0.05435867241346992,
              "unobservable_qty_pct": 0.841488788110336,
              "unclear_qty_pct": 0.8958474605238059,
              "retail_notional_pct": 0.008619642994523651,
              "mixed_notional_pct": 0.015857858761129218,
              "instit_notional_pct": 0.07677173010690702,
              "ambiguous_notional_pct": 0.05418057716839671,
              "unobservable_notional_pct": 0.8445701909690434,
              "unclear_notional_pct": 0.8987507681374401,
              "run_retail_pct": 0.4837310195227766,
              "run_mixed_pct": 0.18004338394793926,
              "run_instit_pct": 0.08893709327548807,
              "run_unclear_pct": 0.2472885032537961,
              "avg_trade_size": 1166.3364436619718,
              "avg_run_notional": 4311.143817787419,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.19956616052060738,
              "medium_confidence_pct": 0.1648590021691974,
              "low_confidence_pct": 0.20824295010845986,
              "na_confidence_pct": 0.42733188720173537,
              "avg_feature_coverage": 0.8805856832971799,
              "observable_run_pct": 0.9891540130151844,
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
      "n_trades": 48379,
      "n_runs": 34952,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-10",
      "last_trade_date": "2026-04-13",
      "period_days": 126,
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
        "retail_pct": 0.6050145724384547,
        "mixed_pct": 0.24551975030488435,
        "instit_pct": 0.10707124992248702,
        "ambiguous_pct": 0.042394427334173916,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.042394427334173916,
        "retail_qty_pct": 0.09851410396091273,
        "mixed_qty_pct": 0.3042539020820866,
        "instit_qty_pct": 0.4816926705356479,
        "ambiguous_qty_pct": 0.11553932342135279,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.11553932342135279,
        "retail_notional_pct": 0.09857883484505998,
        "mixed_notional_pct": 0.3044470420144791,
        "instit_notional_pct": 0.481812804417176,
        "ambiguous_notional_pct": 0.11516131872328492,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.11516131872328492
      },
      "run_composition": {
        "retail_pct": 0.8285648889906158,
        "mixed_pct": 0.15203707942320896,
        "instit_pct": 0.012960631723506524,
        "ambiguous_pct": 0.006437399862668803,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.006437399862668803
      },
      "trade_size": {
        "avg": 1856.7200541557288,
        "median": 136.0
      },
      "run_size": {
        "avg": 2569.9891136415654,
        "median": 137.0,
        "avg_length": 1.148861295490959
      },
      "confidence": {
        "high": 0.48795490959029525,
        "medium": 0.32418745708400093,
        "low": 0.029383154039826047,
        "na": 0.15847447928587777
      },
      "confidence_counts": {
        "high": 17055,
        "medium": 11331,
        "low": 1027,
        "na": 5539
      },
      "trade_confidence": {
        "high": 0.38489840633332645,
        "medium": 0.2981665598710184,
        "low": 0.029020856156596872,
        "na": 0.28791417763905824
      },
      "trade_confidence_counts": {
        "high": 18621,
        "medium": 14425,
        "low": 1404,
        "na": 13929
      },
      "counts": {
        "trades": {
          "retail": 29270,
          "mixed": 11878,
          "institutional": 5180,
          "ambiguous": 2051,
          "unobservable": 0,
          "unclear": 2051
        },
        "runs": {
          "retail": 28960,
          "mixed": 5314,
          "institutional": 453,
          "ambiguous": 225,
          "unobservable": 0,
          "unclear": 225
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8650334744792857,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.006437399862668803,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.8285648889906158,
      "dominance_gap": 0.6765278095674068,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 9842,
            "n_runs": 7179,
            "retail_pct": 0.6181670392196708,
            "mixed_pct": 0.23470839260312945,
            "instit_pct": 0.09185124974598659,
            "ambiguous_pct": 0.05527331843121317,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05527331843121317,
            "avg_trade_size": 1573.244411704938,
            "avg_run_notional": 2156.8284580025074,
            "retail_qty_pct": 0.13906937147948673,
            "mixed_qty_pct": 0.2441389105762063,
            "instit_qty_pct": 0.5242361285712396,
            "ambiguous_qty_pct": 0.09255558937306745,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.09255558937306745,
            "retail_notional_pct": 0.13879874939545966,
            "mixed_notional_pct": 0.2440253395282956,
            "instit_notional_pct": 0.5245362569690661,
            "ambiguous_notional_pct": 0.09263965410717856,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09263965410717856,
            "run_retail_pct": 0.8322886195849004,
            "run_mixed_pct": 0.15043877977434184,
            "run_instit_pct": 0.011561498815991085,
            "run_ambiguous_pct": 0.005711101824766681,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.005711101824766681,
            "avg_feature_coverage": 0.865900543251149,
            "high_confidence_pct": 0.45048056832427913,
            "medium_confidence_pct": 0.3535311324697033,
            "low_confidence_pct": 0.03983841760690904,
            "na_confidence_pct": 0.1561498815991085,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 7506,
            "n_runs": 5481,
            "retail_pct": 0.6020516919797495,
            "mixed_pct": 0.2740474287236877,
            "instit_pct": 0.09592326139088729,
            "ambiguous_pct": 0.027977617905675458,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.027977617905675458,
            "avg_trade_size": 982.2464028776978,
            "avg_run_notional": 1345.1453201970444,
            "retail_qty_pct": 0.12156722835135482,
            "mixed_qty_pct": 0.3816528532484403,
            "instit_qty_pct": 0.4224436028322081,
            "ambiguous_qty_pct": 0.07433631556799677,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07433631556799677,
            "retail_notional_pct": 0.12161432758764158,
            "mixed_notional_pct": 0.3815530491608854,
            "instit_notional_pct": 0.42238596050058175,
            "ambiguous_notional_pct": 0.07444666275089123,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07444666275089123,
            "run_retail_pct": 0.8137201240649516,
            "run_mixed_pct": 0.16894727239554827,
            "run_instit_pct": 0.011859149790184273,
            "run_ambiguous_pct": 0.005473453749315818,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.005473453749315818,
            "avg_feature_coverage": 0.8674329501915709,
            "high_confidence_pct": 0.4796569968983762,
            "medium_confidence_pct": 0.3061485130450648,
            "low_confidence_pct": 0.039773763911694945,
            "na_confidence_pct": 0.17442072614486406,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 5045,
            "n_runs": 3679,
            "retail_pct": 0.6166501486620416,
            "mixed_pct": 0.25867195242814667,
            "instit_pct": 0.08126858275520317,
            "ambiguous_pct": 0.043409316154608524,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.043409316154608524,
            "avg_trade_size": 2718.34271555996,
            "avg_run_notional": 3727.6539820603425,
            "retail_qty_pct": 0.06846663473818647,
            "mixed_qty_pct": 0.3614054517879949,
            "instit_qty_pct": 0.4431423611111111,
            "ambiguous_qty_pct": 0.12698555236270753,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12698555236270753,
            "retail_notional_pct": 0.06868578250360817,
            "mixed_notional_pct": 0.362438884707853,
            "instit_notional_pct": 0.4414249879266057,
            "ambiguous_notional_pct": 0.1274503448619331,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1274503448619331,
            "run_retail_pct": 0.8426202772492525,
            "run_mixed_pct": 0.13998369122044033,
            "run_instit_pct": 0.010872519706441968,
            "run_ambiguous_pct": 0.006523511823865181,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.006523511823865181,
            "avg_feature_coverage": 0.8626393041587386,
            "high_confidence_pct": 0.6588746942103832,
            "medium_confidence_pct": 0.19189997281870072,
            "low_confidence_pct": 0.002718129926610492,
            "na_confidence_pct": 0.1465072030443055,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 4649,
            "n_runs": 3458,
            "retail_pct": 0.6263712626371263,
            "mixed_pct": 0.22628522262852227,
            "instit_pct": 0.12088621208862121,
            "ambiguous_pct": 0.026457302645730263,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.026457302645730263,
            "avg_trade_size": 2790.37459668746,
            "avg_run_notional": 3751.431897050318,
            "retail_qty_pct": 0.08098770128058831,
            "mixed_qty_pct": 0.2951639829254892,
            "instit_qty_pct": 0.5494220447149317,
            "ambiguous_qty_pct": 0.07442627107899075,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07442627107899075,
            "retail_notional_pct": 0.08103094469075486,
            "mixed_notional_pct": 0.2955381640856395,
            "instit_notional_pct": 0.5487301686963332,
            "ambiguous_notional_pct": 0.0747007225272725,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0747007225272725,
            "run_retail_pct": 0.8403701561596298,
            "run_mixed_pct": 0.137941006362059,
            "run_instit_pct": 0.0167727009832273,
            "run_ambiguous_pct": 0.004916136495083863,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.004916136495083863,
            "avg_feature_coverage": 0.8607142857142854,
            "high_confidence_pct": 0.5326778484673221,
            "medium_confidence_pct": 0.30624638519375363,
            "low_confidence_pct": 0.018218623481781375,
            "na_confidence_pct": 0.14285714285714285,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 9747,
            "n_runs": 6347,
            "retail_pct": 0.5349338257925516,
            "mixed_pct": 0.24612701344003282,
            "instit_pct": 0.1694880476043911,
            "ambiguous_pct": 0.04945111316302452,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04945111316302452,
            "avg_trade_size": 2229.761003385657,
            "avg_run_notional": 3424.2130927997478,
            "retail_qty_pct": 0.07765442987925424,
            "mixed_qty_pct": 0.30682198363697194,
            "instit_qty_pct": 0.4704583472733356,
            "ambiguous_qty_pct": 0.14506523921043826,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14506523921043826,
            "retail_notional_pct": 0.07757777223026933,
            "mixed_notional_pct": 0.307640209767598,
            "instit_notional_pct": 0.4683636843164628,
            "ambiguous_notional_pct": 0.1464183336856699,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1464183336856699,
            "run_retail_pct": 0.8134551756735465,
            "run_mixed_pct": 0.15944540727902945,
            "run_instit_pct": 0.01780368678115645,
            "run_ambiguous_pct": 0.009295730266267527,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.009295730266267527,
            "avg_feature_coverage": 0.8650543563888449,
            "high_confidence_pct": 0.45753899480069327,
            "medium_confidence_pct": 0.34110603434693554,
            "low_confidence_pct": 0.03261383330707421,
            "na_confidence_pct": 0.168741137545297,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 3364,
            "n_runs": 2551,
            "retail_pct": 0.6132580261593341,
            "mixed_pct": 0.2794292508917955,
            "instit_pct": 0.038941736028537455,
            "ambiguous_pct": 0.06837098692033294,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.06837098692033294,
            "avg_trade_size": 1647.2809155766945,
            "avg_run_notional": 2172.266954135633,
            "retail_qty_pct": 0.09051010364194315,
            "mixed_qty_pct": 0.2911470094377859,
            "instit_qty_pct": 0.35014764634358175,
            "ambiguous_qty_pct": 0.26819524057668925,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26819524057668925,
            "retail_notional_pct": 0.09072665598715716,
            "mixed_notional_pct": 0.2908274237821741,
            "instit_notional_pct": 0.35136037425563293,
            "ambiguous_notional_pct": 0.2670855459750358,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2670855459750358,
            "run_retail_pct": 0.8059584476675813,
            "run_mixed_pct": 0.17796942375539004,
            "run_instit_pct": 0.007448059584476676,
            "run_ambiguous_pct": 0.00862406899255194,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.00862406899255194,
            "avg_feature_coverage": 0.8706977655821245,
            "high_confidence_pct": 0.5350842806742454,
            "medium_confidence_pct": 0.2524500196001568,
            "low_confidence_pct": 0.025872206977655823,
            "na_confidence_pct": 0.18659349274794199,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.6050145724384547,
          "mixed_pct": 0.24551975030488435,
          "instit_pct": 0.10707124992248702,
          "ambiguous_pct": 0.042394427334173916,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.042394427334173916,
          "retail_qty_pct": 0.09851410396091273,
          "mixed_qty_pct": 0.3042539020820866,
          "instit_qty_pct": 0.4816926705356479,
          "ambiguous_qty_pct": 0.11553932342135279,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.11553932342135279,
          "retail_notional_pct": 0.09857883484505998,
          "mixed_notional_pct": 0.3044470420144791,
          "instit_notional_pct": 0.481812804417176,
          "ambiguous_notional_pct": 0.11516131872328492,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.11516131872328492,
          "run_retail_pct": 0.8285648889906158,
          "run_mixed_pct": 0.15203707942320896,
          "run_instit_pct": 0.012960631723506524,
          "run_unclear_pct": 0.006437399862668803,
          "avg_trade_size": 1856.7200541557288,
          "avg_run_notional": 2569.9891136415654,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.48795490959029525,
          "medium_confidence_pct": 0.32418745708400093,
          "low_confidence_pct": 0.029383154039826047,
          "na_confidence_pct": 0.15847447928587777,
          "avg_feature_coverage": 0.8650334744792857,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AJBU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.36475929911475674,
          "mixed_pct": 0.33232153009014864,
          "instit_pct": 0.23154897263055307,
          "ambiguous_pct": 0.07103011045236741,
          "unobservable_pct": 0.0003400877121741249,
          "unclear_pct": 0.07137019816454154,
          "retail_qty_pct": 0.09912080249557295,
          "mixed_qty_pct": 0.22739822811859878,
          "instit_qty_pct": 0.61275045207085,
          "ambiguous_qty_pct": 0.04598573723549017,
          "unobservable_qty_pct": 0.014744780079488137,
          "unclear_qty_pct": 0.060730517314978305,
          "retail_notional_pct": 0.09902775169086922,
          "mixed_notional_pct": 0.22742208139760017,
          "instit_notional_pct": 0.612866477407375,
          "ambiguous_notional_pct": 0.04593328501963279,
          "unobservable_notional_pct": 0.01475040448452287,
          "unclear_notional_pct": 0.06068368950415566,
          "run_retail_pct": 0.721551520248075,
          "run_mixed_pct": 0.2462828160723202,
          "run_instit_pct": 0.015157806217643812,
          "run_unclear_pct": 0.01700785746196095,
          "avg_trade_size": 5573.065886283805,
          "avg_run_notional": 11541.151174677423,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.31326833626783696,
          "medium_confidence_pct": 0.3708932278663969,
          "low_confidence_pct": 0.05254776233148503,
          "na_confidence_pct": 0.26329067353428115,
          "avg_feature_coverage": 0.8865269492549864,
          "observable_run_pct": 0.9995953012903056,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "JYEU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4446547564561047,
          "mixed_pct": 0.3111807554166117,
          "instit_pct": 0.16482557463016548,
          "ambiguous_pct": 0.07907516154806879,
          "unobservable_pct": 0.00026375194904932936,
          "unclear_pct": 0.07933891349711812,
          "retail_qty_pct": 0.08278391483776143,
          "mixed_qty_pct": 0.21740057219441017,
          "instit_qty_pct": 0.5688145692222842,
          "ambiguous_qty_pct": 0.06528170415099362,
          "unobservable_qty_pct": 0.06571923959455049,
          "unclear_qty_pct": 0.1310009437455441,
          "retail_notional_pct": 0.08258978961010417,
          "mixed_notional_pct": 0.21561398438556323,
          "instit_notional_pct": 0.5745302498668248,
          "ambiguous_notional_pct": 0.06620833833500861,
          "unobservable_notional_pct": 0.06105763780249919,
          "unclear_notional_pct": 0.12726597613750779,
          "run_retail_pct": 0.7645215211032177,
          "run_mixed_pct": 0.21398523471235548,
          "run_instit_pct": 0.00911686864465803,
          "run_unclear_pct": 0.01237637553976877,
          "avg_trade_size": 4094.4402291151123,
          "avg_run_notional": 7352.140903955983,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.37792868087477366,
          "medium_confidence_pct": 0.35391419417746206,
          "low_confidence_pct": 0.04179551469564006,
          "na_confidence_pct": 0.22636161025212426,
          "avg_feature_coverage": 0.8835851093467055,
          "observable_run_pct": 0.999575149742304,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.48835213466648747,
          "mixed_pct": 0.26749247774342644,
          "instit_pct": 0.20076928644546235,
          "ambiguous_pct": 0.04338610114462378,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.04338610114462378,
          "retail_qty_pct": 0.11768624877075565,
          "mixed_qty_pct": 0.2637795540892226,
          "instit_qty_pct": 0.5403212365355907,
          "ambiguous_qty_pct": 0.07821296060443107,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.07821296060443107,
          "retail_notional_pct": 0.11906794370893926,
          "mixed_notional_pct": 0.2635236689214097,
          "instit_notional_pct": 0.5390261839716926,
          "ambiguous_notional_pct": 0.07838220339795841,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.07838220339795841,
          "run_retail_pct": 0.7951905547356541,
          "run_mixed_pct": 0.1768035419741297,
          "run_instit_pct": 0.019897560552131262,
          "run_unclear_pct": 0.008108342738084903,
          "avg_trade_size": 1705.5349125763858,
          "avg_run_notional": 2863.9187082211997,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.4617588332320514,
          "medium_confidence_pct": 0.3294730445351159,
          "low_confidence_pct": 0.02385623752061811,
          "na_confidence_pct": 0.1849118847122146,
          "avg_feature_coverage": 0.8702916919871515,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "D5IU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5310021045815121,
          "mixed_pct": 0.20997247854945766,
          "instit_pct": 0.18002266472397604,
          "ambiguous_pct": 0.07900275214505423,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.07900275214505423,
          "retail_qty_pct": 0.11440738952046312,
          "mixed_qty_pct": 0.4176995156242226,
          "instit_qty_pct": 0.3969571011723994,
          "ambiguous_qty_pct": 0.07093599368291491,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.07093599368291491,
          "retail_notional_pct": 0.10971304490576828,
          "mixed_notional_pct": 0.391016261096188,
          "instit_notional_pct": 0.41041018402780727,
          "ambiguous_notional_pct": 0.08886050997023652,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.08886050997023652,
          "run_retail_pct": 0.7729610580455547,
          "run_mixed_pct": 0.16164584864070536,
          "run_instit_pct": 0.030614744060739652,
          "run_unclear_pct": 0.034778349253000246,
          "avg_trade_size": 1828.5328476606767,
          "avg_run_notional": 2766.3108988488852,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.36051922605927017,
          "medium_confidence_pct": 0.2162625520450649,
          "low_confidence_pct": 0.22679402400195933,
          "na_confidence_pct": 0.1964241978937056,
          "avg_feature_coverage": 0.8546289493019835,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ODBU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.41909005628517826,
          "mixed_pct": 0.18925891181988744,
          "instit_pct": 0.14868667917448405,
          "ambiguous_pct": 0.24296435272045028,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.24296435272045028,
          "retail_qty_pct": 0.09297991543750801,
          "mixed_qty_pct": 0.1700373892010048,
          "instit_qty_pct": 0.3741094342699399,
          "ambiguous_qty_pct": 0.3628732610915473,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.3628732610915473,
          "retail_notional_pct": 0.09329781383504882,
          "mixed_notional_pct": 0.17039764007587496,
          "instit_notional_pct": 0.3727586665767268,
          "ambiguous_notional_pct": 0.36354587951234946,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.36354587951234946,
          "run_retail_pct": 0.6462135922330097,
          "run_mixed_pct": 0.16,
          "run_instit_pct": 0.05436893203883495,
          "run_unclear_pct": 0.13941747572815533,
          "avg_trade_size": 3127.3066369606004,
          "avg_run_notional": 5178.576893203884,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.22174757281553398,
          "medium_confidence_pct": 0.189126213592233,
          "low_confidence_pct": 0.2897087378640777,
          "na_confidence_pct": 0.29941747572815536,
          "avg_feature_coverage": 0.8485436893203884,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "BMGU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.1426056338028169,
          "mixed_pct": 0.19483568075117372,
          "instit_pct": 0.2153755868544601,
          "ambiguous_pct": 0.44014084507042256,
          "unobservable_pct": 0.007042253521126761,
          "unclear_pct": 0.4471830985915493,
          "retail_qty_pct": 0.008578305707440082,
          "mixed_qty_pct": 0.015965792627729097,
          "instit_qty_pct": 0.07960844114102492,
          "ambiguous_qty_pct": 0.05435867241346992,
          "unobservable_qty_pct": 0.841488788110336,
          "unclear_qty_pct": 0.8958474605238059,
          "retail_notional_pct": 0.008619642994523651,
          "mixed_notional_pct": 0.015857858761129218,
          "instit_notional_pct": 0.07677173010690702,
          "ambiguous_notional_pct": 0.05418057716839671,
          "unobservable_notional_pct": 0.8445701909690434,
          "unclear_notional_pct": 0.8987507681374401,
          "run_retail_pct": 0.4837310195227766,
          "run_mixed_pct": 0.18004338394793926,
          "run_instit_pct": 0.08893709327548807,
          "run_unclear_pct": 0.2472885032537961,
          "avg_trade_size": 1166.3364436619718,
          "avg_run_notional": 4311.143817787419,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.19956616052060738,
          "medium_confidence_pct": 0.1648590021691974,
          "low_confidence_pct": 0.20824295010845986,
          "na_confidence_pct": 0.42733188720173537,
          "avg_feature_coverage": 0.8805856832971799,
          "observable_run_pct": 0.9891540130151844,
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
            "retail_pct": 0.49860205032618826,
            "mixed_pct": 0.39049394221808015,
            "instit_pct": 0.010251630941286114,
            "ambiguous_pct": 0.10065237651444547,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10065237651444547,
            "retail_qty_pct": 0.2528389538885065,
            "mixed_qty_pct": 0.19365106675843083,
            "instit_qty_pct": 0.23554714384033035,
            "ambiguous_qty_pct": 0.3179628355127323,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3179628355127323,
            "retail_notional_pct": 0.25245622774292015,
            "mixed_notional_pct": 0.19348821434627778,
            "instit_notional_pct": 0.23577931575377312,
            "ambiguous_notional_pct": 0.318276242157029,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.318276242157029,
            "run_retail_pct": 0.726027397260274,
            "run_mixed_pct": 0.2602739726027397,
            "run_instit_pct": 0.0013698630136986301,
            "run_unclear_pct": 0.012328767123287671,
            "avg_trade_size": 703.4631873252563,
            "avg_run_notional": 1033.9945205479453,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.2808219178082192,
            "medium_confidence_pct": 0.35753424657534244,
            "low_confidence_pct": 0.08904109589041095,
            "na_confidence_pct": 0.2726027397260274,
            "avg_feature_coverage": 0.8884246575342465,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4875,
            "mixed_pct": 0.18125,
            "instit_pct": 0.20625,
            "ambiguous_pct": 0.125,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.125,
            "retail_qty_pct": 0.08645833333333333,
            "mixed_qty_pct": 0.1463235294117647,
            "instit_qty_pct": 0.5016544117647059,
            "ambiguous_qty_pct": 0.2655637254901961,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2655637254901961,
            "retail_notional_pct": 0.08621267984556369,
            "mixed_notional_pct": 0.146532751919526,
            "instit_notional_pct": 0.5010502350547986,
            "ambiguous_notional_pct": 0.2662043331801117,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2662043331801117,
            "run_retail_pct": 0.8217391304347826,
            "run_mixed_pct": 0.1391304347826087,
            "run_instit_pct": 0.02826086956521739,
            "run_unclear_pct": 0.010869565217391304,
            "avg_trade_size": 1358.326875,
            "avg_run_notional": 2362.307608695652,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6,
            "medium_confidence_pct": 0.25,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.15,
            "avg_feature_coverage": 0.867282608695652,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.49326465927099844,
            "mixed_pct": 0.4235340729001585,
            "instit_pct": 0.05784469096671949,
            "ambiguous_pct": 0.025356576862123614,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.025356576862123614,
            "retail_qty_pct": 0.18981237589658387,
            "mixed_qty_pct": 0.34846213072901894,
            "instit_qty_pct": 0.40969323661709284,
            "ambiguous_qty_pct": 0.05203225675730437,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.05203225675730437,
            "retail_notional_pct": 0.1896584462392761,
            "mixed_notional_pct": 0.3485186139571436,
            "instit_notional_pct": 0.40985801367395436,
            "ambiguous_notional_pct": 0.05196492612962591,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.05196492612962591,
            "run_retail_pct": 0.747381392483056,
            "run_mixed_pct": 0.24091189155884166,
            "run_instit_pct": 0.004313000616142945,
            "run_unclear_pct": 0.0073937153419593345,
            "avg_trade_size": 2255.551901743265,
            "avg_run_notional": 3507.709796672828,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6494146642020949,
            "medium_confidence_pct": 0.10227972889710413,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.24830560690080097,
            "avg_feature_coverage": 0.8833641404805914,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3493975903614458,
            "mixed_pct": 0.39759036144578314,
            "instit_pct": 0.04819277108433735,
            "ambiguous_pct": 0.20481927710843373,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20481927710843373,
            "retail_qty_pct": 0.0525965379494008,
            "mixed_qty_pct": 0.6109631602308033,
            "instit_qty_pct": 0.02463382157123835,
            "ambiguous_qty_pct": 0.3118064802485575,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3118064802485575,
            "retail_notional_pct": 0.052300399363615704,
            "mixed_notional_pct": 0.6131129798586534,
            "instit_notional_pct": 0.024507289197701225,
            "ambiguous_notional_pct": 0.31007933158002965,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.31007933158002965,
            "run_retail_pct": 0.45714285714285713,
            "run_mixed_pct": 0.3142857142857143,
            "run_instit_pct": 0.02857142857142857,
            "run_unclear_pct": 0.2,
            "avg_trade_size": 2783.0421686746986,
            "avg_run_notional": 6599.785714285715,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.11428571428571428,
            "medium_confidence_pct": 0.37142857142857144,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.5142857142857142,
            "avg_feature_coverage": 0.9528571428571431,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5707102451288498,
            "mixed_pct": 0.40886235072281585,
            "instit_pct": 0.01005656819610308,
            "ambiguous_pct": 0.010370835952231301,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.010370835952231301,
            "retail_qty_pct": 0.38874788494077833,
            "mixed_qty_pct": 0.5733824832809604,
            "instit_qty_pct": 0.023547659334461363,
            "ambiguous_qty_pct": 0.014321972443799855,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.014321972443799855,
            "retail_notional_pct": 0.388527771049119,
            "mixed_notional_pct": 0.5736189062918444,
            "instit_notional_pct": 0.023459004946215323,
            "ambiguous_notional_pct": 0.014394317712821162,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.014394317712821162,
            "run_retail_pct": 0.759793370641412,
            "run_mixed_pct": 0.2376237623762376,
            "run_instit_pct": 0.00043047783039173483,
            "run_unclear_pct": 0.002152389151958674,
            "avg_trade_size": 884.8164676304211,
            "avg_run_notional": 1212.004304778304,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3151097718467499,
            "medium_confidence_pct": 0.36074042186827376,
            "low_confidence_pct": 0.08437365475678002,
            "na_confidence_pct": 0.23977615152819629,
            "avg_feature_coverage": 0.887128712871287,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 1.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 1.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 1.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 1.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 35.0,
            "avg_run_notional": 35.0,
            "dominant_bucket": "MIXED",
            "dominant_label": "Mixed",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.5675795542743098,
            "mixed_pct": 0.25856525113648965,
            "instit_pct": 0.12340614258787005,
            "ambiguous_pct": 0.05044905200133053,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05044905200133053,
            "retail_qty_pct": 0.08779731564794904,
            "mixed_qty_pct": 0.28901600686283185,
            "instit_qty_pct": 0.46456447561271164,
            "ambiguous_qty_pct": 0.1586222018765075,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1586222018765075,
            "retail_notional_pct": 0.08799359845776578,
            "mixed_notional_pct": 0.289325963756111,
            "instit_notional_pct": 0.46442868366541834,
            "ambiguous_notional_pct": 0.1582517541207048,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1582517541207048,
            "run_retail_pct": 0.8117007672634271,
            "run_mixed_pct": 0.16592071611253198,
            "run_instit_pct": 0.014546035805626599,
            "run_unclear_pct": 0.007832480818414322,
            "avg_trade_size": 1857.5050449052,
            "avg_run_notional": 2677.8833120204604,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4913682864450128,
            "medium_confidence_pct": 0.3062659846547315,
            "low_confidence_pct": 0.028612531969309463,
            "na_confidence_pct": 0.1737531969309463,
            "avg_feature_coverage": 0.8673353580562658,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3914403590696831,
            "mixed_pct": 0.32795333303108615,
            "instit_pct": 0.24229647428631879,
            "ambiguous_pct": 0.03772045155732874,
            "unobservable_pct": 0.0005893820555832616,
            "unclear_pct": 0.038309833612912,
            "retail_qty_pct": 0.10735693407176379,
            "mixed_qty_pct": 0.23900732016667886,
            "instit_qty_pct": 0.5908071325261909,
            "ambiguous_qty_pct": 0.048699393872498935,
            "unobservable_qty_pct": 0.014129219362867568,
            "unclear_qty_pct": 0.06282861323536651,
            "retail_notional_pct": 0.10722309029791818,
            "mixed_notional_pct": 0.2392519872093755,
            "instit_notional_pct": 0.5909988486510036,
            "ambiguous_notional_pct": 0.04849960656257951,
            "unobservable_notional_pct": 0.014026467279123251,
            "unclear_notional_pct": 0.06252607384170276,
            "run_retail_pct": 0.735492857566238,
            "run_mixed_pct": 0.23258846541402406,
            "run_instit_pct": 0.016537253274850335,
            "run_unclear_pct": 0.015381423744887676,
            "avg_trade_size": 5454.931440359071,
            "avg_run_notional": 10697.595529014287,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.38785489893900776,
            "medium_confidence_pct": 0.33219726157311363,
            "low_confidence_pct": 0.031977950328966866,
            "na_confidence_pct": 0.24796988915891174,
            "avg_feature_coverage": 0.8815837828225949,
            "observable_run_pct": 0.9996739967992413,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4754976522716752,
            "mixed_pct": 0.2775610078698499,
            "instit_pct": 0.2043515640499967,
            "ambiguous_pct": 0.042589775808478274,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.042589775808478274,
            "retail_qty_pct": 0.08874381512961702,
            "mixed_qty_pct": 0.2824852289100108,
            "instit_qty_pct": 0.5363301799336557,
            "ambiguous_qty_pct": 0.09244077602671641,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.09244077602671641,
            "retail_notional_pct": 0.08854175457294075,
            "mixed_notional_pct": 0.28247387141013325,
            "instit_notional_pct": 0.5358655236177612,
            "ambiguous_notional_pct": 0.09311885039916482,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09311885039916482,
            "run_retail_pct": 0.7880416526704737,
            "run_mixed_pct": 0.18150263128429067,
            "run_instit_pct": 0.02239390885679095,
            "run_unclear_pct": 0.008061807188444743,
            "avg_trade_size": 1539.894385291978,
            "avg_run_notional": 2607.1820624790057,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4893069085208823,
            "medium_confidence_pct": 0.2954876273653566,
            "low_confidence_pct": 0.02564102564102564,
            "na_confidence_pct": 0.1895644384727354,
            "avg_feature_coverage": 0.8717668794088007,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23422159887798036,
            "mixed_pct": 0.10659186535764376,
            "instit_pct": 0.2805049088359046,
            "ambiguous_pct": 0.37868162692847124,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.37868162692847124,
            "retail_qty_pct": 0.0586740275697238,
            "mixed_qty_pct": 0.11564809048524734,
            "instit_qty_pct": 0.4841869624492956,
            "ambiguous_qty_pct": 0.34149091949573324,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.34149091949573324,
            "retail_notional_pct": 0.058846122468364535,
            "mixed_notional_pct": 0.11649995258962423,
            "instit_notional_pct": 0.4831593877260246,
            "ambiguous_notional_pct": 0.3414945372159866,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3414945372159866,
            "run_retail_pct": 0.423728813559322,
            "run_mixed_pct": 0.13898305084745763,
            "run_instit_pct": 0.1288135593220339,
            "run_unclear_pct": 0.30847457627118646,
            "avg_trade_size": 4237.71458625526,
            "avg_run_notional": 10242.340677966102,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.030508474576271188,
            "medium_confidence_pct": 0.13220338983050847,
            "low_confidence_pct": 0.3898305084745763,
            "na_confidence_pct": 0.44745762711864406,
            "avg_feature_coverage": 0.8454237288135594,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4787228175952648,
            "mixed_pct": 0.34664803955809637,
            "instit_pct": 0.12418889358651496,
            "ambiguous_pct": 0.050311575154868476,
            "unobservable_pct": 0.0001286741052554181,
            "unclear_pct": 0.050440249260123894,
            "retail_qty_pct": 0.08127152700372696,
            "mixed_qty_pct": 0.26031666573392637,
            "instit_qty_pct": 0.4052125221344601,
            "ambiguous_qty_pct": 0.04029143677902557,
            "unobservable_qty_pct": 0.21290784834886106,
            "unclear_qty_pct": 0.25319928512788664,
            "retail_notional_pct": 0.08173142454850883,
            "mixed_notional_pct": 0.261206599689249,
            "instit_notional_pct": 0.40628809534615573,
            "ambiguous_notional_pct": 0.04057519178590336,
            "unobservable_notional_pct": 0.21019868863018318,
            "unclear_notional_pct": 0.25077388041608656,
            "run_retail_pct": 0.7629485108069384,
            "run_mixed_pct": 0.22400390208212664,
            "run_instit_pct": 0.005182452824436789,
            "run_unclear_pct": 0.007865134286498186,
            "avg_trade_size": 4455.837372290951,
            "avg_run_notional": 7389.629268359602,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3651800140231076,
            "medium_confidence_pct": 0.3559430539889644,
            "low_confidence_pct": 0.04700789561930311,
            "na_confidence_pct": 0.23186903636862483,
            "avg_feature_coverage": 0.8856217419138492,
            "observable_run_pct": 0.9997866048836996,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.10502958579881656,
            "mixed_pct": 0.3609467455621302,
            "instit_pct": 0.07840236686390532,
            "ambiguous_pct": 0.4467455621301775,
            "unobservable_pct": 0.008875739644970414,
            "unclear_pct": 0.4556213017751479,
            "retail_qty_pct": 0.053171044202434334,
            "mixed_qty_pct": 0.1672005124919923,
            "instit_qty_pct": 0.4196028187059577,
            "ambiguous_qty_pct": 0.31326073030108903,
            "unobservable_qty_pct": 0.04676489429852659,
            "unclear_qty_pct": 0.3600256245996156,
            "retail_notional_pct": 0.05461799044686745,
            "mixed_notional_pct": 0.17741972822186725,
            "instit_notional_pct": 0.39948761873895566,
            "ambiguous_notional_pct": 0.32401169834324917,
            "unobservable_notional_pct": 0.04446296424906051,
            "unclear_notional_pct": 0.36847466259230965,
            "run_retail_pct": 0.4041095890410959,
            "run_mixed_pct": 0.2876712328767123,
            "run_instit_pct": 0.07534246575342465,
            "run_unclear_pct": 0.2328767123287671,
            "avg_trade_size": 95.85133136094674,
            "avg_run_notional": 443.80479452054794,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.2808219178082192,
            "low_confidence_pct": 0.19863013698630136,
            "na_confidence_pct": 0.5205479452054794,
            "avg_feature_coverage": 0.9181506849315068,
            "observable_run_pct": 0.9931506849315068,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7559912854030502,
            "mixed_pct": 0.23311546840958605,
            "instit_pct": 0.010893246187363835,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.10919347425451827,
            "mixed_qty_pct": 0.7282436971933501,
            "instit_qty_pct": 0.16256282855213164,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.10959430414974983,
            "mixed_notional_pct": 0.7328127690047329,
            "instit_notional_pct": 0.15759292684551723,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8427518427518428,
            "run_mixed_pct": 0.1547911547911548,
            "run_instit_pct": 0.002457002457002457,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 912.3945533769062,
            "avg_run_notional": 1028.9658476658478,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6461916461916462,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.19901719901719903,
            "na_confidence_pct": 0.1547911547911548,
            "avg_feature_coverage": 0.8518427518427515,
            "observable_run_pct": 1.0,
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
            "retail_pct": 0.5757661082171852,
            "mixed_pct": 0.24712562766906002,
            "instit_pct": 0.1283495236754423,
            "ambiguous_pct": 0.04875874043831245,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04875874043831245,
            "retail_qty_pct": 0.07678617061643181,
            "mixed_qty_pct": 0.2993854008833088,
            "instit_qty_pct": 0.4814665197066651,
            "ambiguous_qty_pct": 0.14236190879359434,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14236190879359434,
            "retail_notional_pct": 0.07674175363867243,
            "mixed_notional_pct": 0.3000624790966561,
            "instit_notional_pct": 0.481163444311238,
            "ambiguous_notional_pct": 0.14203232295343343,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14203232295343343,
            "run_retail_pct": 0.8227199136535348,
            "run_mixed_pct": 0.15393955747436588,
            "run_instit_pct": 0.015178089584457636,
            "run_unclear_pct": 0.008162439287641663,
            "avg_trade_size": 2435.99235064996,
            "avg_run_notional": 3501.656840259039,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5248246087425796,
            "medium_confidence_pct": 0.29000269832703723,
            "low_confidence_pct": 0.023070696168375607,
            "na_confidence_pct": 0.16210199676200757,
            "avg_feature_coverage": 0.8647328656233134,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3817847017215678,
            "mixed_pct": 0.3437777063299525,
            "instit_pct": 0.22808581533335281,
            "ambiguous_pct": 0.04597667553269225,
            "unobservable_pct": 0.00037510108243455216,
            "unclear_pct": 0.04635177661512681,
            "retail_qty_pct": 0.09938980831998226,
            "mixed_qty_pct": 0.2321812873573581,
            "instit_qty_pct": 0.6064226293261669,
            "ambiguous_qty_pct": 0.04870100095401901,
            "unobservable_qty_pct": 0.013305274042473728,
            "unclear_qty_pct": 0.062006274996492736,
            "retail_notional_pct": 0.09928894431946092,
            "mixed_notional_pct": 0.23222462060119053,
            "instit_notional_pct": 0.6064201795695578,
            "ambiguous_notional_pct": 0.04882427312327468,
            "unobservable_notional_pct": 0.013241982386515987,
            "unclear_notional_pct": 0.06206625550979066,
            "run_retail_pct": 0.7226600795832452,
            "run_mixed_pct": 0.2471021318313758,
            "run_instit_pct": 0.015436073893235425,
            "run_unclear_pct": 0.014801714692143558,
            "avg_trade_size": 6430.478126004735,
            "avg_run_notional": 12687.527044366698,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3253109321235655,
            "medium_confidence_pct": 0.36357432575306126,
            "low_confidence_pct": 0.04921089559985391,
            "na_confidence_pct": 0.26190384652351933,
            "avg_feature_coverage": 0.8858278387574248,
            "observable_run_pct": 0.999625151381173,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.46922884594778014,
            "mixed_pct": 0.28920955816694643,
            "instit_pct": 0.19782476693931492,
            "ambiguous_pct": 0.0437368289459585,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0437368289459585,
            "retail_qty_pct": 0.10436682378110318,
            "mixed_qty_pct": 0.27336022043898806,
            "instit_qty_pct": 0.5506159213495462,
            "ambiguous_qty_pct": 0.07165703443036252,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07165703443036252,
            "retail_notional_pct": 0.10542981551223306,
            "mixed_notional_pct": 0.2743419471809985,
            "instit_notional_pct": 0.5489323091035323,
            "ambiguous_notional_pct": 0.07129592820323614,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07129592820323614,
            "run_retail_pct": 0.7811465358675659,
            "run_mixed_pct": 0.1923053341508277,
            "run_instit_pct": 0.0187614960147149,
            "run_unclear_pct": 0.007786633966891478,
            "avg_trade_size": 1671.7068971675537,
            "avg_run_notional": 2869.575597792765,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4583077866339669,
            "medium_confidence_pct": 0.31477621091354996,
            "low_confidence_pct": 0.02682403433476395,
            "na_confidence_pct": 0.2000919681177192,
            "avg_feature_coverage": 0.8735606989576945,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.46460509058263255,
            "mixed_pct": 0.3336302489181284,
            "instit_pct": 0.15459015128667317,
            "ambiguous_pct": 0.046837849021932006,
            "unobservable_pct": 0.00033666019063383296,
            "unclear_pct": 0.047174509212565836,
            "retail_qty_pct": 0.08392572728647214,
            "mixed_qty_pct": 0.23347454279663457,
            "instit_qty_pct": 0.5360784475530272,
            "ambiguous_qty_pct": 0.04411942594501745,
            "unobservable_qty_pct": 0.1024018564188486,
            "unclear_qty_pct": 0.14652128236386605,
            "retail_notional_pct": 0.08363129732503094,
            "mixed_notional_pct": 0.2313517858820675,
            "instit_notional_pct": 0.5439721865380358,
            "ambiguous_notional_pct": 0.04416150171634374,
            "unobservable_notional_pct": 0.09688322853852196,
            "unclear_notional_pct": 0.1410447302548657,
            "run_retail_pct": 0.7612054258479378,
            "run_mixed_pct": 0.2219133629997256,
            "run_instit_pct": 0.007551806826451605,
            "run_unclear_pct": 0.009329404325884921,
            "avg_trade_size": 4352.470648772242,
            "avg_run_notional": 7403.421668674913,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3688097254864533,
            "medium_confidence_pct": 0.3546963171520263,
            "low_confidence_pct": 0.045251190035909855,
            "na_confidence_pct": 0.23124276732561053,
            "avg_feature_coverage": 0.8847639612984811,
            "observable_run_pct": 0.9994870020639219,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3581183611532625,
            "mixed_pct": 0.1537683358624178,
            "instit_pct": 0.19878603945371776,
            "ambiguous_pct": 0.2893272635306019,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2893272635306019,
            "retail_qty_pct": 0.08432218390653887,
            "mixed_qty_pct": 0.15035991975559548,
            "instit_qty_pct": 0.3971639109968925,
            "ambiguous_qty_pct": 0.36815398534097316,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.36815398534097316,
            "retail_notional_pct": 0.08531275512790609,
            "mixed_notional_pct": 0.15178505222022437,
            "instit_notional_pct": 0.3938000548657827,
            "ambiguous_notional_pct": 0.36910213778608686,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.36910213778608686,
            "run_retail_pct": 0.5663176265270506,
            "run_mixed_pct": 0.17015706806282724,
            "run_instit_pct": 0.07417102966841187,
            "run_unclear_pct": 0.1893542757417103,
            "avg_trade_size": 4075.7943854324735,
            "avg_run_notional": 7031.278795811519,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.18324607329842932,
            "medium_confidence_pct": 0.1300174520069808,
            "low_confidence_pct": 0.32722513089005234,
            "na_confidence_pct": 0.35951134380453753,
            "avg_feature_coverage": 0.8428010471204188,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5993474714518761,
            "mixed_pct": 0.20717781402936378,
            "instit_pct": 0.15921696574225122,
            "ambiguous_pct": 0.03425774877650897,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.03425774877650897,
            "retail_qty_pct": 0.1140682528643476,
            "mixed_qty_pct": 0.4627927267795445,
            "instit_qty_pct": 0.38357013422866354,
            "ambiguous_qty_pct": 0.03956888612744435,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.03956888612744435,
            "retail_notional_pct": 0.11189846630167652,
            "mixed_notional_pct": 0.4586641452127977,
            "instit_notional_pct": 0.3869280172200324,
            "ambiguous_notional_pct": 0.042509371265493444,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.042509371265493444,
            "run_retail_pct": 0.8164470695138574,
            "run_mixed_pct": 0.1485688323489323,
            "run_instit_pct": 0.019990913221263062,
            "run_unclear_pct": 0.014993184915947297,
            "avg_trade_size": 2247.786101141925,
            "avg_run_notional": 3130.151930940481,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.44161744661517494,
            "medium_confidence_pct": 0.22126306224443434,
            "low_confidence_pct": 0.17355747387551113,
            "na_confidence_pct": 0.1635620172648796,
            "avg_feature_coverage": 0.8547705588368921,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.11432325886990802,
            "mixed_pct": 0.3324572930354796,
            "instit_pct": 0.09724047306176084,
            "ambiguous_pct": 0.44152431011826543,
            "unobservable_pct": 0.01445466491458607,
            "unclear_pct": 0.4559789750328515,
            "retail_qty_pct": 0.056622851365015166,
            "mixed_qty_pct": 0.14020896528479945,
            "instit_qty_pct": 0.3977081226828446,
            "ambiguous_qty_pct": 0.363329962925514,
            "unobservable_qty_pct": 0.04213009774182676,
            "unclear_qty_pct": 0.40546006066734075,
            "retail_notional_pct": 0.05853983306810431,
            "mixed_notional_pct": 0.14766490208177716,
            "instit_notional_pct": 0.38102448767496994,
            "ambiguous_notional_pct": 0.37187814621155535,
            "unobservable_notional_pct": 0.04089263096359326,
            "unclear_notional_pct": 0.4127707771751486,
            "run_retail_pct": 0.3492822966507177,
            "run_mixed_pct": 0.23923444976076555,
            "run_instit_pct": 0.10526315789473684,
            "run_unclear_pct": 0.3062200956937799,
            "avg_trade_size": 161.8449408672799,
            "avg_run_notional": 589.3014354066986,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.19617224880382775,
            "low_confidence_pct": 0.2583732057416268,
            "na_confidence_pct": 0.5454545454545454,
            "avg_feature_coverage": 0.8858851674641147,
            "observable_run_pct": 0.9808612440191388,
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
            "retail_pct": 0.6050145724384547,
            "mixed_pct": 0.24551975030488435,
            "instit_pct": 0.10707124992248702,
            "ambiguous_pct": 0.042394427334173916,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.042394427334173916,
            "retail_qty_pct": 0.09851410396091273,
            "mixed_qty_pct": 0.3042539020820866,
            "instit_qty_pct": 0.4816926705356479,
            "ambiguous_qty_pct": 0.11553932342135279,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.11553932342135279,
            "retail_notional_pct": 0.09857883484505998,
            "mixed_notional_pct": 0.3044470420144791,
            "instit_notional_pct": 0.481812804417176,
            "ambiguous_notional_pct": 0.11516131872328492,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.11516131872328492,
            "run_retail_pct": 0.8285648889906158,
            "run_mixed_pct": 0.15203707942320896,
            "run_instit_pct": 0.012960631723506524,
            "run_unclear_pct": 0.006437399862668803,
            "avg_trade_size": 1856.7200541557288,
            "avg_run_notional": 2569.9891136415654,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.48795490959029525,
            "medium_confidence_pct": 0.32418745708400093,
            "low_confidence_pct": 0.029383154039826047,
            "na_confidence_pct": 0.15847447928587777,
            "avg_feature_coverage": 0.8650334744792857,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.36475929911475674,
            "mixed_pct": 0.33232153009014864,
            "instit_pct": 0.23154897263055307,
            "ambiguous_pct": 0.07103011045236741,
            "unobservable_pct": 0.0003400877121741249,
            "unclear_pct": 0.07137019816454154,
            "retail_qty_pct": 0.09912080249557295,
            "mixed_qty_pct": 0.22739822811859878,
            "instit_qty_pct": 0.61275045207085,
            "ambiguous_qty_pct": 0.04598573723549017,
            "unobservable_qty_pct": 0.014744780079488137,
            "unclear_qty_pct": 0.060730517314978305,
            "retail_notional_pct": 0.09902775169086922,
            "mixed_notional_pct": 0.22742208139760017,
            "instit_notional_pct": 0.612866477407375,
            "ambiguous_notional_pct": 0.04593328501963279,
            "unobservable_notional_pct": 0.01475040448452287,
            "unclear_notional_pct": 0.06068368950415566,
            "run_retail_pct": 0.721551520248075,
            "run_mixed_pct": 0.2462828160723202,
            "run_instit_pct": 0.015157806217643812,
            "run_unclear_pct": 0.01700785746196095,
            "avg_trade_size": 5573.065886283805,
            "avg_run_notional": 11541.151174677423,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.31326833626783696,
            "medium_confidence_pct": 0.3708932278663969,
            "low_confidence_pct": 0.05254776233148503,
            "na_confidence_pct": 0.26329067353428115,
            "avg_feature_coverage": 0.8865269492549864,
            "observable_run_pct": 0.9995953012903056,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4446547564561047,
            "mixed_pct": 0.3111807554166117,
            "instit_pct": 0.16482557463016548,
            "ambiguous_pct": 0.07907516154806879,
            "unobservable_pct": 0.00026375194904932936,
            "unclear_pct": 0.07933891349711812,
            "retail_qty_pct": 0.08278391483776143,
            "mixed_qty_pct": 0.21740057219441017,
            "instit_qty_pct": 0.5688145692222842,
            "ambiguous_qty_pct": 0.06528170415099362,
            "unobservable_qty_pct": 0.06571923959455049,
            "unclear_qty_pct": 0.1310009437455441,
            "retail_notional_pct": 0.08258978961010417,
            "mixed_notional_pct": 0.21561398438556323,
            "instit_notional_pct": 0.5745302498668248,
            "ambiguous_notional_pct": 0.06620833833500861,
            "unobservable_notional_pct": 0.06105763780249919,
            "unclear_notional_pct": 0.12726597613750779,
            "run_retail_pct": 0.7645215211032177,
            "run_mixed_pct": 0.21398523471235548,
            "run_instit_pct": 0.00911686864465803,
            "run_unclear_pct": 0.01237637553976877,
            "avg_trade_size": 4094.4402291151123,
            "avg_run_notional": 7352.140903955983,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.37792868087477366,
            "medium_confidence_pct": 0.35391419417746206,
            "low_confidence_pct": 0.04179551469564006,
            "na_confidence_pct": 0.22636161025212426,
            "avg_feature_coverage": 0.8835851093467055,
            "observable_run_pct": 0.999575149742304,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.48835213466648747,
            "mixed_pct": 0.26749247774342644,
            "instit_pct": 0.20076928644546235,
            "ambiguous_pct": 0.04338610114462378,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04338610114462378,
            "retail_qty_pct": 0.11768624877075565,
            "mixed_qty_pct": 0.2637795540892226,
            "instit_qty_pct": 0.5403212365355907,
            "ambiguous_qty_pct": 0.07821296060443107,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07821296060443107,
            "retail_notional_pct": 0.11906794370893926,
            "mixed_notional_pct": 0.2635236689214097,
            "instit_notional_pct": 0.5390261839716926,
            "ambiguous_notional_pct": 0.07838220339795841,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07838220339795841,
            "run_retail_pct": 0.7951905547356541,
            "run_mixed_pct": 0.1768035419741297,
            "run_instit_pct": 0.019897560552131262,
            "run_unclear_pct": 0.008108342738084903,
            "avg_trade_size": 1705.5349125763858,
            "avg_run_notional": 2863.9187082211997,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4617588332320514,
            "medium_confidence_pct": 0.3294730445351159,
            "low_confidence_pct": 0.02385623752061811,
            "na_confidence_pct": 0.1849118847122146,
            "avg_feature_coverage": 0.8702916919871515,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5310021045815121,
            "mixed_pct": 0.20997247854945766,
            "instit_pct": 0.18002266472397604,
            "ambiguous_pct": 0.07900275214505423,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.07900275214505423,
            "retail_qty_pct": 0.11440738952046312,
            "mixed_qty_pct": 0.4176995156242226,
            "instit_qty_pct": 0.3969571011723994,
            "ambiguous_qty_pct": 0.07093599368291491,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07093599368291491,
            "retail_notional_pct": 0.10971304490576828,
            "mixed_notional_pct": 0.391016261096188,
            "instit_notional_pct": 0.41041018402780727,
            "ambiguous_notional_pct": 0.08886050997023652,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08886050997023652,
            "run_retail_pct": 0.7729610580455547,
            "run_mixed_pct": 0.16164584864070536,
            "run_instit_pct": 0.030614744060739652,
            "run_unclear_pct": 0.034778349253000246,
            "avg_trade_size": 1828.5328476606767,
            "avg_run_notional": 2766.3108988488852,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.36051922605927017,
            "medium_confidence_pct": 0.2162625520450649,
            "low_confidence_pct": 0.22679402400195933,
            "na_confidence_pct": 0.1964241978937056,
            "avg_feature_coverage": 0.8546289493019835,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.41909005628517826,
            "mixed_pct": 0.18925891181988744,
            "instit_pct": 0.14868667917448405,
            "ambiguous_pct": 0.24296435272045028,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24296435272045028,
            "retail_qty_pct": 0.09297991543750801,
            "mixed_qty_pct": 0.1700373892010048,
            "instit_qty_pct": 0.3741094342699399,
            "ambiguous_qty_pct": 0.3628732610915473,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3628732610915473,
            "retail_notional_pct": 0.09329781383504882,
            "mixed_notional_pct": 0.17039764007587496,
            "instit_notional_pct": 0.3727586665767268,
            "ambiguous_notional_pct": 0.36354587951234946,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.36354587951234946,
            "run_retail_pct": 0.6462135922330097,
            "run_mixed_pct": 0.16,
            "run_instit_pct": 0.05436893203883495,
            "run_unclear_pct": 0.13941747572815533,
            "avg_trade_size": 3127.3066369606004,
            "avg_run_notional": 5178.576893203884,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.22174757281553398,
            "medium_confidence_pct": 0.189126213592233,
            "low_confidence_pct": 0.2897087378640777,
            "na_confidence_pct": 0.29941747572815536,
            "avg_feature_coverage": 0.8485436893203884,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1426056338028169,
            "mixed_pct": 0.19483568075117372,
            "instit_pct": 0.2153755868544601,
            "ambiguous_pct": 0.44014084507042256,
            "unobservable_pct": 0.007042253521126761,
            "unclear_pct": 0.4471830985915493,
            "retail_qty_pct": 0.008578305707440082,
            "mixed_qty_pct": 0.015965792627729097,
            "instit_qty_pct": 0.07960844114102492,
            "ambiguous_qty_pct": 0.05435867241346992,
            "unobservable_qty_pct": 0.841488788110336,
            "unclear_qty_pct": 0.8958474605238059,
            "retail_notional_pct": 0.008619642994523651,
            "mixed_notional_pct": 0.015857858761129218,
            "instit_notional_pct": 0.07677173010690702,
            "ambiguous_notional_pct": 0.05418057716839671,
            "unobservable_notional_pct": 0.8445701909690434,
            "unclear_notional_pct": 0.8987507681374401,
            "run_retail_pct": 0.4837310195227766,
            "run_mixed_pct": 0.18004338394793926,
            "run_instit_pct": 0.08893709327548807,
            "run_unclear_pct": 0.2472885032537961,
            "avg_trade_size": 1166.3364436619718,
            "avg_run_notional": 4311.143817787419,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.19956616052060738,
            "medium_confidence_pct": 0.1648590021691974,
            "low_confidence_pct": 0.20824295010845986,
            "na_confidence_pct": 0.42733188720173537,
            "avg_feature_coverage": 0.8805856832971799,
            "observable_run_pct": 0.9891540130151844,
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
          "trade_id": "BMLL-1115",
          "timestamp": "2026-04-13T09:06:10.739000",
          "price": 0.655,
          "size": 100.0,
          "notional": 65.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57613,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1089",
          "timestamp": "2026-04-13T08:59:52.729500",
          "price": 0.65,
          "size": 200.0,
          "notional": 130.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57612,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1088",
          "timestamp": "2026-04-13T08:59:51.492100",
          "price": 0.65,
          "size": 100.0,
          "notional": 65.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57612,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1087",
          "timestamp": "2026-04-13T08:59:37.855400",
          "price": 0.65,
          "size": 100.0,
          "notional": 65.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57611,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1086",
          "timestamp": "2026-04-13T08:59:30.274100",
          "price": 0.645,
          "size": 700.0,
          "notional": 451.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57610,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1085",
          "timestamp": "2026-04-13T08:59:30.152400",
          "price": 0.65,
          "size": 200.0,
          "notional": 130.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57609,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1084",
          "timestamp": "2026-04-13T08:59:30.027000",
          "price": 0.645,
          "size": 100.0,
          "notional": 64.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57608,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1083",
          "timestamp": "2026-04-13T08:59:25.431900",
          "price": 0.645,
          "size": 200.0,
          "notional": 129.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57608,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1082",
          "timestamp": "2026-04-13T08:59:24.887000",
          "price": 0.65,
          "size": 100.0,
          "notional": 65.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57607,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1081",
          "timestamp": "2026-04-13T08:59:24.766300",
          "price": 0.65,
          "size": 400.0,
          "notional": 260.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57607,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1080",
          "timestamp": "2026-04-13T08:59:24.645500",
          "price": 0.65,
          "size": 200.0,
          "notional": 130.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57607,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1079",
          "timestamp": "2026-04-13T08:59:15.145100",
          "price": 0.65,
          "size": 700.0,
          "notional": 455.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57606,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1078",
          "timestamp": "2026-04-13T08:59:14.148800",
          "price": 0.65,
          "size": 200.0,
          "notional": 130.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57606,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1077",
          "timestamp": "2026-04-13T08:59:08.895100",
          "price": 0.65,
          "size": 400.0,
          "notional": 260.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57605,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1076",
          "timestamp": "2026-04-13T08:59:08.744300",
          "price": 0.645,
          "size": 200.0,
          "notional": 129.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57604,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1075",
          "timestamp": "2026-04-13T08:59:00.311300",
          "price": 0.65,
          "size": 1200.0,
          "notional": 780.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57603,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1074",
          "timestamp": "2026-04-13T08:58:48.397800",
          "price": 0.65,
          "size": 1300.0,
          "notional": 845.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57602,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1073",
          "timestamp": "2026-04-13T08:58:48.186500",
          "price": 0.65,
          "size": 100.0,
          "notional": 65.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57602,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1072",
          "timestamp": "2026-04-13T08:58:40.886200",
          "price": 0.65,
          "size": 500.0,
          "notional": 325.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57601,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1071",
          "timestamp": "2026-04-13T08:58:40.765600",
          "price": 0.65,
          "size": 200.0,
          "notional": 130.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57601,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1070",
          "timestamp": "2026-04-13T08:58:34.344700",
          "price": 0.65,
          "size": 100.0,
          "notional": 65.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57600,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1069",
          "timestamp": "2026-04-13T08:58:32.023900",
          "price": 0.65,
          "size": 1700.0,
          "notional": 1105.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57600,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1068",
          "timestamp": "2026-04-13T08:58:20.027100",
          "price": 0.65,
          "size": 1200.0,
          "notional": 780.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57599,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1067",
          "timestamp": "2026-04-13T08:58:19.906400",
          "price": 0.65,
          "size": 200.0,
          "notional": 130.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57599,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1066",
          "timestamp": "2026-04-13T08:58:10.946600",
          "price": 0.65,
          "size": 1100.0,
          "notional": 715.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57598,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1065",
          "timestamp": "2026-04-13T08:57:58.794600",
          "price": 0.65,
          "size": 2100.0,
          "notional": 1365.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 57597,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1064",
          "timestamp": "2026-04-13T08:57:48.366800",
          "price": 0.65,
          "size": 100.0,
          "notional": 65.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57596,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1063",
          "timestamp": "2026-04-13T08:57:46.649200",
          "price": 0.65,
          "size": 1000.0,
          "notional": 650.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57596,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1062",
          "timestamp": "2026-04-13T08:57:34.798600",
          "price": 0.65,
          "size": 100.0,
          "notional": 65.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57595,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1061",
          "timestamp": "2026-04-13T08:57:34.527300",
          "price": 0.65,
          "size": 1100.0,
          "notional": 715.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57595,
          "d1": "MULTI_FILL_SINGLE_PRICE",
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
      "total_trades": 48378,
      "price_moving_trades": 12229,
      "pct_price_moving": 25.278018934226303,
      "all_movers": {
        "count": 12229,
        "avg_size": 1430.3054624253823,
        "median_size": 202.5,
        "retail_count": 9939,
        "mixed_count": 2011,
        "institutional_count": 214,
        "ambiguous_count": 65,
        "unobservable_count": 0,
        "retail_pct": 81.2740207703001,
        "mixed_pct": 16.444517131408944,
        "instit_pct": 1.7499386703737019,
        "unclear_pct": 0.5315234279172459
      },
      "positive_movers": {
        "count": 6108,
        "avg_size": 1375.3958742632612,
        "median_size": 138.0,
        "retail_count": 4971,
        "mixed_count": 1012,
        "institutional_count": 100,
        "ambiguous_count": 25,
        "unobservable_count": 0,
        "retail_pct": 81.38506876227898,
        "mixed_pct": 16.568434839554683,
        "instit_pct": 1.6371971185330716,
        "unclear_pct": 0.4092992796332679
      },
      "negative_movers": {
        "count": 6121,
        "avg_size": 1485.0984316288188,
        "median_size": 204.00000000000003,
        "retail_count": 4968,
        "mixed_count": 999,
        "institutional_count": 114,
        "ambiguous_count": 40,
        "unobservable_count": 0,
        "retail_pct": 81.1632086260415,
        "mixed_pct": 16.32086260414965,
        "instit_pct": 1.8624407776507108,
        "unclear_pct": 0.6534879921581441
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
            "avg_short_ratio": 0.13242053759549569,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Elevated short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0652563361329787,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0661275065068771,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.14188935021562415,
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
            "avg_short_ratio": 0.045005677435607246
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
            "avg_short_ratio": 0.045005677435607246,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 222.97805154932013
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
        "interpretation": "Shorts covering significantly (-69% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-11-27",
            "short_ratio": 0.06048687147868608,
            "short_vol": 56900,
            "total_vol": 940700,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-26",
            "short_ratio": 0.0897165991902834,
            "short_vol": 55400,
            "total_vol": 617500,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-25",
            "short_ratio": 0.0633817215293396,
            "short_vol": 93000,
            "total_vol": 1467300,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-24",
            "short_ratio": 0.16246397694524495,
            "short_vol": 135300,
            "total_vol": 832800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-21",
            "short_ratio": 0.15066529020417527,
            "short_vol": 262700,
            "total_vol": 1743600,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2025-11-20",
            "short_ratio": 0.06797493793592624,
            "short_vol": 57500,
            "total_vol": 845900,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2025-11-19",
            "short_ratio": 0.12824858757062146,
            "short_vol": 90800,
            "total_vol": 708000,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-11-18",
            "short_ratio": 0.18656074147633234,
            "short_vol": 281800,
            "total_vol": 1510500,
            "close": 0.675,
            "return": -0.007352941176470562
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.0652563361329787,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "BMGU",
          "avg_short_ratio": 1.981924845409862e-05,
          "max_short_ratio": 0.007352941176470588,
          "is_target": false
        },
        {
          "ticker": "ODBU",
          "avg_short_ratio": 0.0008428188576365614,
          "max_short_ratio": 0.1091703056768559,
          "is_target": false
        },
        {
          "ticker": "D5IU",
          "avg_short_ratio": 0.0014677085570263474,
          "max_short_ratio": 0.2702329197017246,
          "is_target": false
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06242844382032891,
          "max_short_ratio": 0.583009889700239,
          "is_target": false
        },
        {
          "ticker": "AJBU",
          "avg_short_ratio": 0.08225803269357936,
          "max_short_ratio": 0.4312404120096428,
          "is_target": false
        },
        {
          "ticker": "JYEU",
          "avg_short_ratio": 0.10294433098526108,
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
          "opening": 0.005568218469843013,
          "continuous": 0.9050345375824771,
          "closing": 0.0808129071400052,
          "auctions": 0.09496546241752286,
          "other": 0.0
        },
        "1M": {
          "opening": 0.05731047213602462,
          "continuous": 0.8748976252900028,
          "closing": 0.054057780488045964,
          "auctions": 0.12510237470999716,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04869144268422146,
          "continuous": 0.8526542586603783,
          "closing": 0.08526582659342653,
          "auctions": 0.14734574133962178,
          "other": 0.0
        },
        "6M": {
          "opening": 0.0380412854616068,
          "continuous": 0.8680606344978563,
          "closing": 0.0818620622549149,
          "auctions": 0.1319393655021438,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.25794125657830536,
        "1M": 0.2054054900550789,
        "3M": 0.2419192445370436,
        "6M": 0.2273126581849948
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0187
        },
        {
          "time": "09:00",
          "avg_share": 0.0932
        },
        {
          "time": "09:30",
          "avg_share": 0.0399
        },
        {
          "time": "10:00",
          "avg_share": 0.0436
        },
        {
          "time": "10:30",
          "avg_share": 0.04
        },
        {
          "time": "11:00",
          "avg_share": 0.0322
        },
        {
          "time": "11:30",
          "avg_share": 0.041
        },
        {
          "time": "12:00",
          "avg_share": 0.2316
        },
        {
          "time": "12:30",
          "avg_share": 0.0098
        },
        {
          "time": "13:00",
          "avg_share": 0.0227
        },
        {
          "time": "13:30",
          "avg_share": 0.0198
        },
        {
          "time": "14:00",
          "avg_share": 0.0364
        },
        {
          "time": "14:30",
          "avg_share": 0.0336
        },
        {
          "time": "15:00",
          "avg_share": 0.0276
        },
        {
          "time": "15:30",
          "avg_share": 0.0505
        },
        {
          "time": "16:00",
          "avg_share": 0.0404
        },
        {
          "time": "16:30",
          "avg_share": 0.1012
        },
        {
          "time": "17:00",
          "avg_share": 0.1176
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.757292136929912,
          "hhi": 0.22961485025912268,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ODBU",
          "auctions_pct": 6.906510075702175,
          "hhi": 0.38758564348993796,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D5IU",
          "auctions_pct": 11.65586288705912,
          "hhi": 0.4113580413847978,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BMGU",
          "auctions_pct": 0.8136385670633051,
          "hhi": 0.7504921273020454,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.329314669400638,
          "hhi": 0.1745074849909427,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "JYEU",
          "auctions_pct": 13.410233098412624,
          "hhi": 0.21015068998871575,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "AJBU",
          "auctions_pct": 19.941458659754904,
          "hhi": 0.14881674581386012,
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
