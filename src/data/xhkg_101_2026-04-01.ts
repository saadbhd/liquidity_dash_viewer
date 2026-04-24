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
      "ticker": "101",
      "name": "HANG LUNG PPT",
      "marketCap": 44144523438.66,
      "sector": "Property Investment",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "1972",
      "name": "SWIREPROPERTIES",
      "marketCap": 130925204351.99998,
      "sector": "Property Investment",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "1997",
      "name": "WHARF REIC",
      "marketCap": 68679462136.740005,
      "sector": "Property Investment",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "14",
      "name": "HYSAN DEV",
      "marketCap": 19256404181.25,
      "sector": "Property Investment",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "10",
      "name": "HANG LUNG GROUP",
      "marketCap": 20301727988.22,
      "sector": "Property Investment",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "41",
      "name": "GREAT EAGLE H",
      "marketCap": 12338318389.05,
      "sector": "Property Investment",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "71",
      "name": "MIRAMAR HOTEL",
      "marketCap": 7282715185.299999,
      "sector": "Property Investment",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "2007",
      "name": "COUNTRY GARDEN",
      "marketCap": 13439789544.51,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    },
    {
      "ticker": "1908",
      "name": "C&D INTL GROUP",
      "marketCap": 28248343604.52,
      "sector": "Property Development",
      "industry": "Properties & Construction - Properties"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "101",
    "company": "HANG LUNG PPT",
    "asof_date": "2026-04-01",
    "industry": "Properties & Construction - Properties",
    "sector": "Property Investment",
    "market_cap_display": "44.1B",
    "market_cap_category": "large",
    "universe_total": 2607,
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
          "score_pca": 82.70042194092827,
          "score_pca_percentile": 82.70042194092827,
          "rank_pca": 452,
          "total": 2607,
          "adv_notional_sgd": 61767246.39999999,
          "adv_volume_shares": 6832660.0,
          "free_float_shares": 1766114623.0,
          "turnover_ratio": 0.0038687522944539938,
          "votes": 2515.0,
          "trades": 2515.0,
          "spread_pct": 0.0014955833391149629,
          "spread_ticks": 1.3447488584474885,
          "amihud": 5.748958972641568e-10,
          "volatility": 0.33154436955171734
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5495416588409058,
          "loadings": {
            "log_adv": 0.5356484085715254,
            "log_trades": 0.4964819672465921,
            "log_turnover": 0.5004793728776782,
            "neg_spread": 0.4022061112581351,
            "neg_amihud": 0.049081029685999394,
            "neg_vol": -0.22787745063802015
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
          "peer_median_adv": 47814470.6,
          "peer_median_score_pca": 81.39624088991178,
          "peer_median_trades": 1907.5,
          "peer_median_volatility": 0.2716602893981639,
          "peer_median_spread_pct": 0.003800779463839567,
          "peer_median_spread_ticks": 1.0,
          "peer_median_amihud": 4.1185060398507264e-10,
          "peer_median_turnover_ratio": 0.004036165989795758,
          "target_vs_peer": {
            "score_pca_delta": 1.3,
            "adv_delta_pct": 29.2,
            "trades_delta_pct": 31.85,
            "volatility_delta_pct": -22.04,
            "spread_pct_delta_pct": 60.65,
            "spread_ticks_delta_pct": 34.47,
            "amihud_delta_pct": -39.59,
            "turnover_ratio_delta_pct": -4.15
          }
        },
        "peer_liquidity": [
          {
            "ticker": "101",
            "score_pca": 82.70042194092827,
            "rank_pca": 452,
            "adv": 61767246.39999999,
            "trades": 2515.0,
            "volatility": 0.33154436955171734,
            "spread_pct": 0.0014955833391149629,
            "spread_ticks": 1.3447488584474885,
            "amihud": 5.748958972641568e-10,
            "turnover_ratio": 0.0038687522944539938,
            "is_target": true
          },
          {
            "ticker": "1972",
            "score_pca": 81.20444955887994,
            "rank_pca": 491,
            "adv": 47749080.0,
            "trades": 3429.0,
            "volatility": 0.22162648159400783,
            "spread_pct": 0.0018829132544632692,
            "spread_ticks": null,
            "amihud": 4.2364527114892e-10,
            "turnover_ratio": 0.0021423018332941933,
            "is_target": false
          },
          {
            "ticker": "1997",
            "score_pca": 82.50863060989643,
            "rank_pca": 457,
            "adv": 114624651.98,
            "trades": 2677.0,
            "volatility": 0.18034888488355083,
            "spread_pct": 0.0012009586993841667,
            "spread_ticks": null,
            "amihud": 2.468364792929678e-10,
            "turnover_ratio": 0.003182448671516592,
            "is_target": false
          },
          {
            "ticker": "14",
            "score_pca": 81.58803222094362,
            "rank_pca": 481,
            "adv": 71989932.78,
            "trades": 1449.0,
            "volatility": 0.32169409720232,
            "spread_pct": 0.002550641567357244,
            "spread_ticks": null,
            "amihud": 4.000559368212253e-10,
            "turnover_ratio": 0.006284094068910051,
            "is_target": false
          },
          {
            "ticker": "10",
            "score_pca": 79.82355197545071,
            "rank_pca": 527,
            "adv": 47838810.0,
            "trades": 552.0,
            "volatility": 0.7065167684798622,
            "spread_pct": 0.00505091736032189,
            "spread_ticks": null,
            "amihud": 1.0935448289746064e-09,
            "turnover_ratio": 0.0048898833080749235,
            "is_target": false
          },
          {
            "ticker": "41",
            "score_pca": 59.992328346758725,
            "rank_pca": 1044,
            "adv": 2963451.66,
            "trades": 83.0,
            "volatility": 0.12627487339413745,
            "spread_pct": 0.006909289916541278,
            "spread_ticks": null,
            "amihud": 4.5019863903714615e-09,
            "turnover_ratio": 0.0007733756571017716,
            "is_target": false
          },
          {
            "ticker": "71",
            "score_pca": 44.72573839662447,
            "rank_pca": 1442,
            "adv": 625820.0,
            "trades": 18.0,
            "volatility": 0.07977965856064922,
            "spread_pct": 0.017717281303807744,
            "spread_ticks": null,
            "amihud": 3.790093810582749e-08,
            "turnover_ratio": 0.00021010757786922826,
            "is_target": false
          },
          {
            "ticker": "2007",
            "score_pca": 88.10893747602609,
            "rank_pca": 311,
            "adv": 47790131.2,
            "trades": 2366.0,
            "volatility": 1.0863005364018385,
            "spread_pct": 0.015740605467987223,
            "spread_ticks": 1.0,
            "amihud": 3.32140035493684e-10,
            "turnover_ratio": 0.005920149107332613,
            "is_target": false
          },
          {
            "ticker": "1908",
            "score_pca": 90.21864211737629,
            "rank_pca": 256,
            "adv": 131758639.47,
            "trades": 3926.0,
            "volatility": 0.5797518706085599,
            "spread_pct": 0.0017202277904048782,
            "spread_ticks": null,
            "amihud": 3.972370493099436e-10,
            "turnover_ratio": 0.013181486235343784,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Property Investment",
          "sector_count": 53,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4815050482238079,
              "median": 0.343149098399249,
              "min": 0.0,
              "max": 10.150540723275236,
              "p5": 0.0,
              "p95": 1.4498345274708844,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 86183438.37309761,
              "median": 286000.0,
              "min": 0.0,
              "max": 10561587990.2,
              "p5": 0.0,
              "p95": 301975342.42199993,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05029979686568031,
              "median": 0.027869940278699424,
              "min": 0.0005061340649462837,
              "max": 0.7648559970834851,
              "p5": 0.0013698726131500202,
              "p95": 0.1722648239018552,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0064885491965258795,
              "median": 0.0011941199235876348,
              "min": 0.0,
              "max": 0.6098615669688484,
              "p5": 0.0,
              "p95": 0.024815763803591302,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.434243215363578e-06,
              "median": 1.0601641751867905e-08,
              "min": 0.0,
              "max": 0.003349282296650716,
              "p5": 0.0,
              "p95": 6.334044895486184e-06,
              "count": 2216
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1503.1388569236672,
              "median": 25.0,
              "min": 0.0,
              "max": 84077.0,
              "p5": 0.0,
              "p95": 8087.199999999979,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.24586177573807794,
              "median": 0.08424455610721178,
              "min": 0.0,
              "max": 2.204560060690888,
              "p5": 0.0,
              "p95": 0.8968737556411903,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 6881010.511867925,
              "median": 27740.0,
              "min": 0.0,
              "max": 114624651.98,
              "p5": 0.0,
              "p95": 53410184.55999997,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.07568282542639654,
              "median": 0.03510447761194022,
              "min": 0.0012009586993841667,
              "max": 0.47383601153687693,
              "p5": 0.002225557939822086,
              "p95": 0.251954962811547,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0013916272487136379,
              "median": 0.0001751748399468705,
              "min": 0.0,
              "max": 0.020058831335842492,
              "p5": 0.0,
              "p95": 0.005664430337108032,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.635306255553413e-07,
              "median": 2.7978985351185604e-08,
              "min": 0.0,
              "max": 1.2240026928059258e-05,
              "p5": 0.0,
              "p95": 5.330295225212129e-06,
              "count": 34
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 228.56603773584905,
              "median": 6.0,
              "min": 0.0,
              "max": 3429.0,
              "p5": 0.0,
              "p95": 1875.3999999999985,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 58167564.636250004,
              "median": 47814470.6,
              "min": 625820.0,
              "max": 131758639.47,
              "p5": 1443991.0810000002,
              "p95": 125761743.8485,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1812.5,
              "median": 1907.5,
              "min": 18.0,
              "max": 3926.0,
              "p5": 40.75,
              "p95": 3752.0499999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.41278664639061574,
              "median": 0.2716602893981639,
              "min": 0.07977965856064922,
              "max": 1.0863005364018385,
              "p5": 0.0960529837523701,
              "p95": 0.9533762176291466,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006596604420033462,
              "median": 0.003800779463839567,
              "min": 0.0012009586993841667,
              "max": 0.017717281303807744,
              "p5": 0.0013827028812414158,
              "p95": 0.01702544476127056,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.662048012155038e-09,
              "median": 4.1185060398507264e-10,
              "min": 2.468364792929678e-10,
              "max": 3.790093810582749e-08,
              "p5": 2.766927239632185e-10,
              "p95": 2.6211305005417864e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004572980807430394,
              "median": 0.004036165989795758,
              "min": 0.00021010757786922826,
              "max": 0.013181486235343784,
              "p5": 0.0004072514056006185,
              "p95": 0.010767398977091974,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0,
              "median": 1.0,
              "min": 1.0,
              "max": 1.0,
              "p5": 1.0,
              "p95": 1.0,
              "count": 1
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.03550973654066425,
            "market": 0.013147967527018523,
            "sector": 0.0,
            "peers": 0.026006355310157048,
            "vs_market": 0.022361769013645727,
            "vs_sector": 0.03550973654066425,
            "vs_peers": 0.009503381230507202
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 88.83774453394706,
          "score_pca_percentile": 88.83774453394706,
          "rank_pca": 292,
          "total": 2607,
          "adv_notional_sgd": 77713032.46,
          "adv_volume_shares": 8573281.0,
          "free_float_shares": 1766114623.0,
          "turnover_ratio": 0.004854317431241834,
          "votes": 3355.0,
          "trades": 3355.0,
          "spread_pct": 0.0013883512650191127,
          "spread_ticks": 1.239270881402861,
          "amihud": 1.7800257224939047e-10,
          "volatility": 0.3634516630761591
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5724814763823942,
          "loadings": {
            "log_adv": 0.5214752824918063,
            "log_trades": 0.4763550371692524,
            "log_turnover": 0.48014363818837885,
            "neg_spread": 0.4554944926057694,
            "neg_amihud": 0.2436592042531785,
            "neg_vol": 0.06137144620520919
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
          "peer_median_adv": 68030788.39,
          "peer_median_score_pca": 84.96355964710395,
          "peer_median_trades": 1657.5,
          "peer_median_volatility": 0.3500239568969661,
          "peer_median_spread_pct": 0.0030759466879243793,
          "peer_median_spread_ticks": 1.000213265088505,
          "peer_median_amihud": 2.3570709475144333e-10,
          "peer_median_turnover_ratio": 0.0034684960938478745,
          "target_vs_peer": {
            "score_pca_delta": 3.87,
            "adv_delta_pct": 14.2,
            "trades_delta_pct": 102.41,
            "volatility_delta_pct": -3.84,
            "spread_pct_delta_pct": 54.86,
            "spread_ticks_delta_pct": 23.9,
            "amihud_delta_pct": 24.48,
            "turnover_ratio_delta_pct": 39.95
          }
        },
        "peer_liquidity": [
          {
            "ticker": "101",
            "score_pca": 88.83774453394706,
            "rank_pca": 292,
            "adv": 77713032.46,
            "trades": 3355.0,
            "volatility": 0.3634516630761591,
            "spread_pct": 0.0013883512650191127,
            "spread_ticks": 1.239270881402861,
            "amihud": 1.7800257224939047e-10,
            "turnover_ratio": 0.004854317431241834,
            "is_target": true
          },
          {
            "ticker": "1972",
            "score_pca": 89.45147679324894,
            "rank_pca": 276,
            "adv": 86879628.0,
            "trades": 4369.0,
            "volatility": 0.3898493985698008,
            "spread_pct": 0.0020353713282571543,
            "spread_ticks": null,
            "amihud": 1.9270409202185313e-10,
            "turnover_ratio": 0.003806055811545263,
            "is_target": false
          },
          {
            "ticker": "1997",
            "score_pca": 86.84311469121596,
            "rank_pca": 344,
            "adv": 114662377.76,
            "trades": 2102.0,
            "volatility": 0.35089871522730587,
            "spread_pct": 0.0013561412882035963,
            "spread_ticks": null,
            "amihud": 1.2774521305227047e-10,
            "turnover_ratio": 0.003130936376150486,
            "is_target": false
          },
          {
            "ticker": "14",
            "score_pca": 83.08400460299194,
            "rank_pca": 442,
            "adv": 58514954.0,
            "trades": 1213.0,
            "volatility": 0.3491491985666263,
            "spread_pct": 0.0019596910974380797,
            "spread_ticks": null,
            "amihud": 2.7507464463643864e-10,
            "turnover_ratio": 0.004806358310722834,
            "is_target": false
          },
          {
            "ticker": "10",
            "score_pca": 75.22056003068661,
            "rank_pca": 647,
            "adv": 16507755.6,
            "trades": 441.0,
            "volatility": 0.33477413948241375,
            "spread_pct": 0.004328159893765328,
            "spread_ticks": null,
            "amihud": 8.91129638874659e-10,
            "turnover_ratio": 0.001775625845643894,
            "is_target": false
          },
          {
            "ticker": "41",
            "score_pca": 73.3410049865746,
            "rank_pca": 696,
            "adv": 8305046.4,
            "trades": 244.0,
            "volatility": 0.2501328645025846,
            "spread_pct": 0.004116522047591604,
            "spread_ticks": null,
            "amihud": 9.56602602561819e-10,
            "turnover_ratio": 0.0021557673098741817,
            "is_target": false
          },
          {
            "ticker": "71",
            "score_pca": 55.389336401994626,
            "rank_pca": 1164,
            "adv": 625820.0,
            "trades": 20.0,
            "volatility": 0.26228784674721334,
            "spread_pct": 0.010359842125253883,
            "spread_ticks": null,
            "amihud": 1.377485278618043e-08,
            "turnover_ratio": 0.00021010757786922826,
            "is_target": false
          },
          {
            "ticker": "2007",
            "score_pca": 87.30341388569236,
            "rank_pca": 332,
            "adv": 78559260.0,
            "trades": 3406.0,
            "volatility": 0.4784452296997638,
            "spread_pct": 0.016250345086465275,
            "spread_ticks": 1.000213265088505,
            "amihud": 1.8936831903101504e-10,
            "turnover_ratio": 0.010380553949162584,
            "is_target": false
          },
          {
            "ticker": "1908",
            "score_pca": 89.10625239739164,
            "rank_pca": 285,
            "adv": 77546622.78,
            "trades": 2873.0,
            "volatility": 0.3732911085175498,
            "spread_pct": 0.0018386234979082523,
            "spread_ticks": null,
            "amihud": 1.9633954486644803e-10,
            "turnover_ratio": 0.007759262280677112,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Property Investment",
          "sector_count": 53,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6705629443083656,
              "median": 0.5505121850438891,
              "min": 0.0,
              "max": 12.575339065692916,
              "p5": 0.2137048460675019,
              "p95": 1.530535888280091,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 71755060.10210612,
              "median": 221400.0,
              "min": 0.0,
              "max": 13520726500.0,
              "p5": 0.0,
              "p95": 253237799.44399986,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04631721433300971,
              "median": 0.029033677110318085,
              "min": 0.0005766037246855124,
              "max": 0.8484231943031536,
              "p5": 0.0014499608623189312,
              "p95": 0.14580575733118092,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004612597812088855,
              "median": 0.0008804158222755281,
              "min": 0.0,
              "max": 0.8831474735556349,
              "p5": 0.0,
              "p95": 0.01625981097505356,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2059373702050112e-06,
              "median": 4.786843640975599e-08,
              "min": 0.0,
              "max": 0.00021538348509114532,
              "p5": 3.5895116541956826e-11,
              "p95": 4.939319395129787e-06,
              "count": 2600
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1234.9733410049867,
              "median": 20.0,
              "min": 0.0,
              "max": 108394.0,
              "p5": 0.0,
              "p95": 6115.399999999976,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5089973195037627,
              "median": 0.3450553897197476,
              "min": 0.0,
              "max": 3.7408015429654755,
              "p5": 0.1460917168447833,
              "p95": 1.2486063409371886,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 7043846.991320755,
              "median": 16704.0,
              "min": 0.0,
              "max": 114662377.76,
              "p5": 0.0,
              "p95": 66194185.38399997,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06940485041407779,
              "median": 0.038709677419354875,
              "min": 0.0013561412882035963,
              "max": 0.3807659637330577,
              "p5": 0.0020050992359295244,
              "p95": 0.2593188854489164,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.000811847609451668,
              "median": 4.592581869386415e-05,
              "min": 0.0,
              "max": 0.006349342629520128,
              "p5": 0.0,
              "p95": 0.004825541958930434,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.593012371008219e-06,
              "median": 9.177281109946497e-08,
              "min": 0.0,
              "max": 4.2971734148204725e-05,
              "p5": 0.0,
              "p95": 1.1486858722394189e-05,
              "count": 52
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 237.9245283018868,
              "median": 3.0,
              "min": 0.0,
              "max": 4369.0,
              "p5": 0.0,
              "p95": 1568.5999999999988,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 55200183.0675,
              "median": 68030788.39,
              "min": 625820.0,
              "max": 114662377.76,
              "p5": 3313549.24,
              "p95": 104938415.34399998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1833.5,
              "median": 1657.5,
              "min": 20.0,
              "max": 4369.0,
              "p5": 98.4,
              "p95": 4031.9499999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34860356266415726,
              "median": 0.3500239568969661,
              "min": 0.2501328645025846,
              "max": 0.4784452296997638,
              "p5": 0.25438710828820466,
              "p95": 0.44743668880427667,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.005280587045610396,
              "median": 0.0030759466879243793,
              "min": 0.0013561412882035963,
              "max": 0.016250345086465275,
              "p5": 0.001525010061600226,
              "p95": 0.014188669050041285,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.0754771051531167e-09,
              "median": 2.3570709475144333e-10,
              "min": 1.2774521305227047e-10,
              "max": 1.377485278618043e-08,
              "p5": 1.4931330014483107e-10,
              "p95": 9.28846522191391e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004253083432705698,
              "median": 0.0034684960938478745,
              "min": 0.00021010757786922826,
              "max": 0.010380553949162584,
              "p5": 0.0007580389715903613,
              "p95": 0.009463101865192667,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.000213265088505,
              "median": 1.000213265088505,
              "min": 1.000213265088505,
              "max": 1.000213265088505,
              "p5": 1.000213265088505,
              "p95": 1.000213265088505,
              "count": 1
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.063212435233161,
            "market": -0.01934411605736608,
            "sector": -0.02973169990887925,
            "peers": -0.08263344163356268,
            "vs_market": -0.04386831917579492,
            "vs_sector": -0.03348073532428175,
            "vs_peers": 0.019421006400401675
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 90.52550824702723,
          "score_pca_percentile": 90.52550824702723,
          "rank_pca": 248,
          "total": 2607,
          "adv_notional_sgd": 83965632.17,
          "adv_volume_shares": 9280255.0,
          "free_float_shares": 1766114623.0,
          "turnover_ratio": 0.005254616477970241,
          "votes": 3355.0,
          "trades": 3355.0,
          "spread_pct": 0.0013196351336841024,
          "spread_ticks": 1.2353236083612351,
          "amihud": 1.4716824429406401e-10,
          "volatility": 0.3317565377118505
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6196774910555123,
          "loadings": {
            "log_adv": 0.49851203593978743,
            "log_trades": 0.4508471222417868,
            "log_turnover": 0.45203761050946806,
            "neg_spread": 0.46020974856788227,
            "neg_amihud": 0.33459393092888134,
            "neg_vol": 0.14191021733125717
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
          "peer_median_adv": 66044548.135,
          "peer_median_score_pca": 85.27042577675488,
          "peer_median_trades": 1589.0,
          "peer_median_volatility": 0.31191374277936784,
          "peer_median_spread_pct": 0.0032206527766322933,
          "peer_median_spread_ticks": 1.0020973617397064,
          "peer_median_amihud": 2.459854642523232e-10,
          "peer_median_turnover_ratio": 0.0031689308689805662,
          "target_vs_peer": {
            "score_pca_delta": 5.26,
            "adv_delta_pct": 27.1,
            "trades_delta_pct": 111.14,
            "volatility_delta_pct": -6.36,
            "spread_pct_delta_pct": 59.03,
            "spread_ticks_delta_pct": 23.27,
            "amihud_delta_pct": 40.17,
            "turnover_ratio_delta_pct": 65.82
          }
        },
        "peer_liquidity": [
          {
            "ticker": "101",
            "score_pca": 90.52550824702723,
            "rank_pca": 248,
            "adv": 83965632.17,
            "trades": 3355.0,
            "volatility": 0.3317565377118505,
            "spread_pct": 0.0013196351336841024,
            "spread_ticks": 1.2353236083612351,
            "amihud": 1.4716824429406401e-10,
            "turnover_ratio": 0.005254616477970241,
            "is_target": true
          },
          {
            "ticker": "1972",
            "score_pca": 92.0981971614883,
            "rank_pca": 207,
            "adv": 100855547.52,
            "trades": 4858.0,
            "volatility": 0.31551080775467716,
            "spread_pct": 0.0018829132544632692,
            "spread_ticks": null,
            "amihud": 1.3826026456456945e-10,
            "turnover_ratio": 0.004120064393649188,
            "is_target": false
          },
          {
            "ticker": "1997",
            "score_pca": 87.87878787878788,
            "rank_pca": 317,
            "adv": 114624651.98,
            "trades": 2091.0,
            "volatility": 0.3083166778040585,
            "spread_pct": 0.001260764242270439,
            "spread_ticks": null,
            "amihud": 1.2456374111001878e-10,
            "turnover_ratio": 0.002751298780046823,
            "is_target": false
          },
          {
            "ticker": "14",
            "score_pca": 82.66206367472189,
            "rank_pca": 453,
            "adv": 45080600.67,
            "trades": 1087.0,
            "volatility": 0.34809892139556836,
            "spread_pct": 0.002390415053161759,
            "spread_ticks": null,
            "amihud": 2.670922936666102e-10,
            "turnover_ratio": 0.0035865629579143097,
            "is_target": false
          },
          {
            "ticker": "10",
            "score_pca": 74.60682777138473,
            "rank_pca": 663,
            "adv": 11789569.000000002,
            "trades": 347.0,
            "volatility": 0.2613165719534911,
            "spread_pct": 0.004050890500102827,
            "spread_ticks": null,
            "amihud": 8.65838992233769e-10,
            "turnover_ratio": 0.0011390188499981737,
            "is_target": false
          },
          {
            "ticker": "41",
            "score_pca": 72.95742232451093,
            "rank_pca": 706,
            "adv": 6535620.0,
            "trades": 217.0,
            "volatility": 0.23268575614742404,
            "spread_pct": 0.004677593098452535,
            "spread_ticks": null,
            "amihud": 1.2767020086636136e-09,
            "turnover_ratio": 0.0016483935266905917,
            "is_target": false
          },
          {
            "ticker": "71",
            "score_pca": 58.64978902953587,
            "rank_pca": 1079,
            "adv": 643200.0,
            "trades": 22.0,
            "volatility": 0.193474371386511,
            "spread_pct": 0.00991054646550013,
            "spread_ticks": null,
            "amihud": 8.907791221861987e-09,
            "turnover_ratio": 0.00021735266676127063,
            "is_target": false
          },
          {
            "ticker": "2007",
            "score_pca": 88.26237054085155,
            "rank_pca": 307,
            "adv": 122984390.09,
            "trades": 4386.0,
            "volatility": 0.80047627412268,
            "spread_pct": 0.0162716341471526,
            "spread_ticks": 1.0020973617397064,
            "amihud": 2.248786348380362e-10,
            "turnover_ratio": 0.015677936059625794,
            "is_target": false
          },
          {
            "ticker": "1908",
            "score_pca": 90.18028385116993,
            "rank_pca": 257,
            "adv": 87008495.6,
            "trades": 2852.0,
            "volatility": 0.3888248423291758,
            "spread_pct": 0.0022625167760848158,
            "spread_ticks": null,
            "amihud": 1.9131598347378512e-10,
            "turnover_ratio": 0.007779088154990768,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Property Investment",
          "sector_count": 53,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7059322862146338,
              "median": 0.575564587224027,
              "min": 0.0,
              "max": 8.183697405562258,
              "p5": 0.22330552283354,
              "p95": 1.5782313809539008,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 66215616.09624845,
              "median": 228456.0,
              "min": 0.0,
              "max": 13968603216.0,
              "p5": 0.0,
              "p95": 242448277.40299994,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04325488702652863,
              "median": 0.027397260273972525,
              "min": 0.0005617553716258445,
              "max": 0.5518881068100528,
              "p5": 0.0014262511987463344,
              "p95": 0.13685612377246612,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003847582234451719,
              "median": 0.0008899112114782459,
              "min": 0.0,
              "max": 0.3433986721729665,
              "p5": 0.0,
              "p95": 0.015306235491922626,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.138111373489436e-07,
              "median": 4.705466057591155e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.3395212257094994e-11,
              "p95": 3.527007194011162e-06,
              "count": 2607
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1117.2721518987341,
              "median": 20.0,
              "min": 0.0,
              "max": 103821.0,
              "p5": 0.0,
              "p95": 5842.899999999999,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5402938509150792,
              "median": 0.3573788567087176,
              "min": 0.009756097560975396,
              "max": 2.221360122319349,
              "p5": 0.18512445128113658,
              "p95": 1.4254795683628525,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 7097176.81773585,
              "median": 8520.0,
              "min": 0.0,
              "max": 114624651.98,
              "p5": 0.0,
              "p95": 60634613.26999995,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05805927953665822,
              "median": 0.04529201430274133,
              "min": 0.001260764242270439,
              "max": 0.24526600541027957,
              "p5": 0.0021874143336823634,
              "p95": 0.17915775350303142,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009340837131453008,
              "median": 4.866693005209211e-05,
              "min": 0.0,
              "max": 0.012586307513385032,
              "p5": 0.0,
              "p95": 0.004809981571347484,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5909662861604515e-06,
              "median": 1.2666780942052253e-07,
              "min": 0.0,
              "max": 1.4922184733505506e-05,
              "p5": 1.436050524022662e-10,
              "p95": 8.59781488907717e-06,
              "count": 53
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 242.66037735849056,
              "median": 2.0,
              "min": 0.0,
              "max": 4858.0,
              "p5": 0.0,
              "p95": 1488.5999999999985,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 61190259.3575,
              "median": 66044548.135,
              "min": 643200.0,
              "max": 122984390.09,
              "p5": 2705547.0,
              "p95": 120058481.7515,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1982.5,
              "median": 1589.0,
              "min": 22.0,
              "max": 4858.0,
              "p5": 90.25,
              "p95": 4692.8,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35608802786169824,
              "median": 0.31191374277936784,
              "min": 0.193474371386511,
              "max": 0.80047627412268,
              "p5": 0.20719835605283057,
              "p95": 0.6563982729949533,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.005338409192148547,
              "median": 0.0032206527766322933,
              "min": 0.001260764242270439,
              "max": 0.0162716341471526,
              "p5": 0.0014785163965379295,
              "p95": 0.014045253458574231,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4995553925515487e-09,
              "median": 2.459854642523232e-10,
              "min": 1.2456374111001878e-10,
              "max": 8.907791221861987e-09,
              "p5": 1.2935752431911152e-10,
              "p95": 6.236909997242552e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004614964423709615,
              "median": 0.0031689308689805662,
              "min": 0.00021735266676127063,
              "max": 0.015677936059625794,
              "p5": 0.0005399358308941867,
              "p95": 0.01291333929300353,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0020973617397064,
              "median": 1.0020973617397064,
              "min": 1.0020973617397064,
              "max": 1.0020973617397064,
              "p5": 1.0020973617397064,
              "p95": 1.0020973617397064,
              "count": 1
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.05730994152046698,
            "market": 0.0744907328886586,
            "sector": -0.02369567536470163,
            "peers": -0.005374509752552603,
            "vs_market": -0.017180791368191617,
            "vs_sector": 0.08100561688516861,
            "vs_peers": 0.06268445127301958
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 90.64058304564634,
          "score_pca_percentile": 90.64058304564634,
          "rank_pca": 245,
          "total": 2607,
          "adv_notional_sgd": 82433373.1,
          "adv_volume_shares": 9194307.5,
          "free_float_shares": 1766114623.0,
          "turnover_ratio": 0.005205951743031347,
          "votes": 3288.0,
          "trades": 3288.0,
          "spread_pct": 0.0013414695080090136,
          "spread_ticks": 1.2261788299745646,
          "amihud": 1.5471139271023214e-10,
          "volatility": 0.3032122365080385
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6229304169078096,
          "loadings": {
            "log_adv": 0.49875508928466344,
            "log_trades": 0.45372832787823847,
            "log_turnover": 0.45012640281174693,
            "neg_spread": 0.46229051949270444,
            "neg_amihud": 0.3395679405145867,
            "neg_vol": 0.11722318988608826
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
          "peer_median_adv": 53871360.067499995,
          "peer_median_score_pca": 83.77445339470657,
          "peer_median_trades": 1440.0,
          "peer_median_volatility": 0.276802806982859,
          "peer_median_spread_pct": 0.0030219513964239893,
          "peer_median_spread_ticks": 3.983612679231064,
          "peer_median_amihud": 2.5996854282152743e-10,
          "peer_median_turnover_ratio": 0.0028456619488852206,
          "target_vs_peer": {
            "score_pca_delta": 6.87,
            "adv_delta_pct": 53.0,
            "trades_delta_pct": 128.33,
            "volatility_delta_pct": -9.54,
            "spread_pct_delta_pct": 55.61,
            "spread_ticks_delta_pct": -69.22,
            "amihud_delta_pct": 40.49,
            "turnover_ratio_delta_pct": 82.94
          }
        },
        "peer_liquidity": [
          {
            "ticker": "101",
            "score_pca": 90.64058304564634,
            "rank_pca": 245,
            "adv": 82433373.1,
            "trades": 3288.0,
            "volatility": 0.3032122365080385,
            "spread_pct": 0.0013414695080090136,
            "spread_ticks": 1.2261788299745646,
            "amihud": 1.5471139271023214e-10,
            "turnover_ratio": 0.005205951743031347,
            "is_target": true
          },
          {
            "ticker": "1972",
            "score_pca": 91.06252397391637,
            "rank_pca": 234,
            "adv": 81282354.51,
            "trades": 4564.5,
            "volatility": 0.26557302250947923,
            "spread_pct": 0.0016915940297899201,
            "spread_ticks": null,
            "amihud": 1.2397778551234515e-10,
            "turnover_ratio": 0.0037528550297744982,
            "is_target": false
          },
          {
            "ticker": "1997",
            "score_pca": 86.80475642500959,
            "rank_pca": 345,
            "adv": 94697569.75999999,
            "trades": 1939.5,
            "volatility": 0.2988646685414644,
            "spread_pct": 0.001188693493252163,
            "spread_ticks": null,
            "amihud": 1.2615447708114463e-10,
            "turnover_ratio": 0.0025127449178580052,
            "is_target": false
          },
          {
            "ticker": "14",
            "score_pca": 81.28116609129268,
            "rank_pca": 489,
            "adv": 34086717.65,
            "trades": 940.5,
            "volatility": 0.2880325914562387,
            "spread_pct": 0.0022755578959231747,
            "spread_ticks": null,
            "amihud": 2.710834691515244e-10,
            "turnover_ratio": 0.003178578979912436,
            "is_target": false
          },
          {
            "ticker": "10",
            "score_pca": 73.2259301879555,
            "rank_pca": 699,
            "adv": 10107822.3,
            "trades": 306.0,
            "volatility": 0.24894023395772624,
            "spread_pct": 0.0037683448969248034,
            "spread_ticks": null,
            "amihud": 9.409928721131857e-10,
            "turnover_ratio": 0.0010669055003925362,
            "is_target": false
          },
          {
            "ticker": "41",
            "score_pca": 72.34369006520906,
            "rank_pca": 722,
            "adv": 6442025.0,
            "trades": 209.5,
            "volatility": 0.24047914835587658,
            "spread_pct": 0.004112952061803479,
            "spread_ticks": null,
            "amihud": 1.3963045112925155e-09,
            "turnover_ratio": 0.0018061792377474233,
            "is_target": false
          },
          {
            "ticker": "71",
            "score_pca": 58.22784810126582,
            "rank_pca": 1090,
            "adv": 636494.6,
            "trades": 24.0,
            "volatility": 0.16126967010732088,
            "spread_pct": 0.008513494213055537,
            "spread_ticks": 6.966101694915254,
            "amihud": 8.289773062612241e-09,
            "turnover_ratio": 0.00022459775565331297,
            "is_target": false
          },
          {
            "ticker": "2007",
            "score_pca": 86.26774069812045,
            "rank_pca": 359,
            "adv": 81287011.77,
            "trades": 3412.0,
            "volatility": 0.652852139569579,
            "spread_pct": 0.016769715366103857,
            "spread_ticks": 1.001123663546874,
            "amihud": 2.4885361649153046e-10,
            "turnover_ratio": 0.007922965981614908,
            "is_target": false
          },
          {
            "ticker": "1908",
            "score_pca": 88.37744533947065,
            "rank_pca": 304,
            "adv": 73656002.485,
            "trades": 2281.5,
            "volatility": 0.3353452646045029,
            "spread_pct": 0.0022574247866491703,
            "spread_ticks": null,
            "amihud": 1.744720098741751e-10,
            "turnover_ratio": 0.006411237575322442,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Property Investment",
          "sector_count": 53,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7396079631025353,
              "median": 0.598586141375593,
              "min": 0.026427624109509794,
              "max": 33.692481563841405,
              "p5": 0.22513373713696208,
              "p95": 1.5576225875696148,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 63437686.65700392,
              "median": 219920.0,
              "min": 0.0,
              "max": 13711894082.25,
              "p5": 0.0,
              "p95": 228498387.5579998,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04214684744415255,
              "median": 0.026717477958095707,
              "min": 0.000558678699550006,
              "max": 0.5518881068100528,
              "p5": 0.0013636630694224892,
              "p95": 0.1346544414496083,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035181285746970483,
              "median": 0.0008772740160740871,
              "min": 0.0,
              "max": 0.1465769815616509,
              "p5": 0.0,
              "p95": 0.014294882844372893,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.309446460702591e-07,
              "median": 4.7383929462885906e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.59368247619184e-11,
              "p95": 3.4430568123930607e-06,
              "count": 2607
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1090.711162255466,
              "median": 21.0,
              "min": 0.0,
              "max": 113413.5,
              "p5": 0.0,
              "p95": 5806.59999999998,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5339286535556775,
              "median": 0.40813315097443675,
              "min": 0.15261504368879975,
              "max": 1.7109970160395178,
              "p5": 0.17131790774784966,
              "p95": 1.293996346807953,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 6082540.918962265,
              "median": 11407.0,
              "min": 0.0,
              "max": 94697569.75999999,
              "p5": 0.0,
              "p95": 52964972.393999934,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.057847318367261036,
              "median": 0.04007965412721167,
              "min": 0.001188693493252163,
              "max": 0.23686926007342582,
              "p5": 0.0020419723494698727,
              "p95": 0.16231350917261056,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009374200640049832,
              "median": 4.929803879541314e-05,
              "min": 0.0,
              "max": 0.012586307513385032,
              "p5": 0.0,
              "p95": 0.004778990844345447,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3590281021821313e-06,
              "median": 1.4081241252028884e-07,
              "min": 0.0,
              "max": 1.5151515151515138e-05,
              "p5": 1.4328862645859715e-10,
              "p95": 6.479102491117007e-06,
              "count": 53
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 232.20754716981133,
              "median": 2.0,
              "min": 0.0,
              "max": 4564.5,
              "p5": 0.0,
              "p95": 1340.0999999999985,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 47774499.75937499,
              "median": 53871360.067499995,
              "min": 636494.6,
              "max": 94697569.75999999,
              "p5": 2668430.24,
              "p95": 90003874.4635,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1709.6875,
              "median": 1440.0,
              "min": 24.0,
              "max": 4564.5,
              "p5": 88.92500000000001,
              "p95": 4161.124999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3114195923877735,
              "median": 0.276802806982859,
              "min": 0.16126967010732088,
              "max": 0.652852139569579,
              "p5": 0.18899298749431537,
              "p95": 0.5417247333318022,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.005072222092937763,
              "median": 0.0030219513964239893,
              "min": 0.001188693493252163,
              "max": 0.016769715366103857,
              "p5": 0.001364708681040378,
              "p95": 0.01388003796253694,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4464514755160827e-09,
              "median": 2.5996854282152743e-10,
              "min": 1.2397778551234515e-10,
              "max": 8.289773062612241e-09,
              "p5": 1.2473962756142498e-10,
              "p95": 5.877059069650333e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0033595081222844454,
              "median": 0.0028456619488852206,
              "min": 0.00022459775565331297,
              "max": 0.007922965981614908,
              "p5": 0.0005194054663120412,
              "p95": 0.007393861039412544,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.983612679231064,
              "median": 3.983612679231064,
              "min": 1.001123663546874,
              "max": 6.966101694915254,
              "p5": 1.2993725651152932,
              "p95": 6.667852793346835,
              "count": 2
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.0066815144766141366,
            "market": 0.09749550653948869,
            "sector": -0.036656594077827065,
            "peers": -0.05441952373626846,
            "vs_market": -0.09081399206287455,
            "vs_sector": 0.0433381085544412,
            "vs_peers": 0.0611010382128826
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Tradability is still serviceable today, but it is thinner than the monthly average as volume has dropped 20.5%.",
        "market_comparison": "The stock outperformed both peers and the market over 1M, but that stronger relative return has not translated into better day-to-day access."
      },
      "30d": {
        "liquidity": "Monthly tradability looks solid, supported by average daily volume of HK$82.4M and a liquidity score above the peer median.",
        "market_comparison": "The stock fell 6.3% over 1M, which was better than peers at -8.3% but worse than the market at -1.9%, so relative resilience has only partly supported trading conditions."
      },
      "3m": {
        "liquidity": "Medium-term tradability appears firm, with liquidity holding above peer levels and supporting more reliable access.",
        "market_comparison": "Stronger performance compared with peers over 3M points to a healthier trading backdrop, which matters because relative strength often supports steadier participation."
      },
      "6m": {
        "liquidity": "Six-month tradability is strong for the company’s size, with a liquidity score of 90.6 compared with the peer median of 83.8.",
        "market_comparison": "The stock also outperformed peers over 6M, which reinforces that access has been better than the peer group over time."
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
          "median": 0.5377017053378982,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "53.8%",
          "display_range": null,
          "display_text": "53.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 53.8,
          "plain_english": "Market explains about 53.8% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.3875240010003236,
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
          "plain_english": "Sector explains about 38.8% of price moves in the current state."
        },
        "company_share": {
          "median": 0.07477429366177829,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "7.5%",
          "display_range": null,
          "display_text": "7.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 7.5,
          "plain_english": "Company-specific explains about 7.5% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.0341299281980778,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.03",
          "display_range": null,
          "display_text": "1.03",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.03% stock move in the same direction in this state.",
          "value_num": 1.03
        },
        "beta_stock_lag": {
          "median": -0.5668898488217398,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.57",
          "display_range": null,
          "display_text": "-0.57",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.57
        },
        "beta_sector": {
          "median": 1.4967015915473652,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.50",
          "display_range": null,
          "display_text": "1.50",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.50% stock move in the same direction in this state.",
          "value_num": 1.5
        },
        "beta_market_lag": {
          "median": 3.5142980568354947,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.51",
          "display_range": null,
          "display_text": "3.51",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 3.51
        },
        "beta_sector_lag": {
          "median": -3.05372560261594,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-3.05",
          "display_range": null,
          "display_text": "-3.05",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -3.05
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-03",
          "month_label": "March 2025",
          "month_short_label": "Mar",
          "period_label": "2025-03-18 to 2025-03-31",
          "n_obs": 10,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3726152374350138,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.3%",
            "display_range": null,
            "display_text": "37.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
            "kind": "share_pct",
            "value_pct": 37.3,
            "plain_english": "Sector explains about 37.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3472155606104763,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.7%",
              "display_range": null,
              "display_text": "34.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 34.7,
              "plain_english": "Market explains about 34.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3726152374350138,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.3%",
              "display_range": null,
              "display_text": "37.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 37.3,
              "plain_english": "Sector explains about 37.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.28016920195450995,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.0%",
              "display_range": null,
              "display_text": "28.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 28.0,
              "plain_english": "Company-specific explains about 28.0% of price moves in the current state."
            }
          },
          "summary": "Mar: Much more balanced across company, sector, and market factors."
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.41602881622670485,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.6%",
            "display_range": null,
            "display_text": "41.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 41.6,
            "plain_english": "Market explains about 41.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.41602881622670485,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.6%",
              "display_range": null,
              "display_text": "41.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 41.6,
              "plain_english": "Market explains about 41.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2303452040658085,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.0%",
              "display_range": null,
              "display_text": "23.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 23.0,
              "plain_english": "Sector explains about 23.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.35362597970748666,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.4%",
              "display_range": null,
              "display_text": "35.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 35.4,
              "plain_english": "Company-specific explains about 35.4% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though market-driven still has the largest share."
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
            "median": 0.39378669761047347,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.4%",
            "display_range": null,
            "display_text": "39.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 39.4,
            "plain_english": "Company-specific explains about 39.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.38471295040761927,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.5%",
              "display_range": null,
              "display_text": "38.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 38.5,
              "plain_english": "Market explains about 38.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22150035198190718,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.2%",
              "display_range": null,
              "display_text": "22.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.2,
              "plain_english": "Sector explains about 22.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.39378669761047347,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.4%",
              "display_range": null,
              "display_text": "39.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 39.4,
              "plain_english": "Company-specific explains about 39.4% of price moves in the current state."
            }
          },
          "summary": "May: More mixed, though company-driven still has the largest share."
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
            "median": 0.5399074543936702,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.0%",
            "display_range": null,
            "display_text": "54.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 54.0,
            "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3514015106558869,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.1%",
              "display_range": null,
              "display_text": "35.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 35.1,
              "plain_english": "Market explains about 35.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10869103495044302,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.9%",
              "display_range": null,
              "display_text": "10.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 10.9,
              "plain_english": "Sector explains about 10.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5399074543936702,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.0%",
              "display_range": null,
              "display_text": "54.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.0,
              "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
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
            "median": 0.5137858628291848,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.4%",
            "display_range": null,
            "display_text": "51.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 51.4,
            "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.36643329509236866,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.6%",
              "display_range": null,
              "display_text": "36.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.6,
              "plain_english": "Market explains about 36.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11978084207844646,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.0%",
              "display_range": null,
              "display_text": "12.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.0,
              "plain_english": "Sector explains about 12.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5137858628291848,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.4%",
              "display_range": null,
              "display_text": "51.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.4,
              "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
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
            "median": 0.5456584969338959,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.6%",
            "display_range": null,
            "display_text": "54.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 54.6,
            "plain_english": "Company-specific explains about 54.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15483356012408225,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.5%",
              "display_range": null,
              "display_text": "15.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 15.5,
              "plain_english": "Market explains about 15.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2995079429420218,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.0%",
              "display_range": null,
              "display_text": "30.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 30.0,
              "plain_english": "Sector explains about 30.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5456584969338959,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.6%",
              "display_range": null,
              "display_text": "54.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.6,
              "plain_english": "Company-specific explains about 54.6% of price moves in the current state."
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
            "median": 0.47358137259628114,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.4%",
            "display_range": null,
            "display_text": "47.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 47.4,
            "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.35122906292662015,
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
              "median": 0.1751895644770987,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.5%",
              "display_range": null,
              "display_text": "17.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 17.5,
              "plain_english": "Sector explains about 17.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47358137259628114,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
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
            "median": 0.4084575885944104,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.8%",
            "display_range": null,
            "display_text": "40.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 40.8,
            "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3043689445640922,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.4%",
              "display_range": null,
              "display_text": "30.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 30.4,
              "plain_english": "Market explains about 30.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28717346684149736,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.7%",
              "display_range": null,
              "display_text": "28.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 28.7,
              "plain_english": "Sector explains about 28.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4084575885944104,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.8%",
              "display_range": null,
              "display_text": "40.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.8,
              "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
            }
          },
          "summary": "Oct: More mixed, though company-driven still has the largest share."
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
            "median": 0.4315289504191055,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.2%",
            "display_range": null,
            "display_text": "43.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 43.2,
            "plain_english": "Market explains about 43.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4315289504191055,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Market explains about 43.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.24431858552972535,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.4%",
              "display_range": null,
              "display_text": "24.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 24.4,
              "plain_english": "Sector explains about 24.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.32415246405116915,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.4%",
              "display_range": null,
              "display_text": "32.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 32.4,
              "plain_english": "Company-specific explains about 32.4% of price moves in the current state."
            }
          },
          "summary": "Nov: More mixed, though market-driven still has the largest share."
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
            "median": 0.43177132833857024,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.2%",
            "display_range": null,
            "display_text": "43.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 43.2,
            "plain_english": "Sector explains about 43.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.14100778079828896,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.1%",
              "display_range": null,
              "display_text": "14.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 14.1,
              "plain_english": "Market explains about 14.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.43177132833857024,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Sector explains about 43.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.42722089086314086,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.7%",
              "display_range": null,
              "display_text": "42.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 42.7,
              "plain_english": "Company-specific explains about 42.7% of price moves in the current state."
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
            "median": 0.5112334269385046,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.1%",
            "display_range": null,
            "display_text": "51.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 51.1,
            "plain_english": "Company-specific explains about 51.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.17771689941505434,
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
              "plain_english": "Market explains about 17.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.31104967364644104,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.1%",
              "display_range": null,
              "display_text": "31.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 31.1,
              "plain_english": "Sector explains about 31.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5112334269385046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.1%",
              "display_range": null,
              "display_text": "51.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 51.1,
              "plain_english": "Company-specific explains about 51.1% of price moves in the current state."
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
            "median": 0.48896329397362803,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.9%",
            "display_range": null,
            "display_text": "48.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 48.9,
            "plain_english": "Market explains about 48.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.48896329397362803,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.9%",
              "display_range": null,
              "display_text": "48.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 48.9,
              "plain_english": "Market explains about 48.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.06545566721460801,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.5%",
              "display_range": null,
              "display_text": "6.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 6.5,
              "plain_english": "Sector explains about 6.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44558103881176403,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
            }
          },
          "summary": "Feb: Mostly market-driven."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.446917980428963,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.7%",
            "display_range": null,
            "display_text": "44.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 44.7,
            "plain_english": "Sector explains about 44.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1071499809173688,
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
              "plain_english": "Market explains about 10.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.446917980428963,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.7%",
              "display_range": null,
              "display_text": "44.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.7,
              "plain_english": "Sector explains about 44.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44593203865366815,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though sector-driven still has the largest share."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 8.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.013324337376938061,
            "low": 0.013324337376938061,
            "high": 0.013324337376938061
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 8.266666666666667,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.023761938368637346,
            "low": 0.023761938368637346,
            "high": 0.023761938368637346
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.88,
            0.12
          ],
          [
            0.11382113821138211,
            0.8861788617886179
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            110.0,
            15.0
          ],
          [
            14.0,
            109.0
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
        "market_link_display": "1.03",
        "sector_link_display": "1.50",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.03% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.50% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.57",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 53.8,
        "driver_share_display": "53.8%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8861788617886179,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 8.3 days.",
        "expected_duration_days": 8.3
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
          "expected_duration_days": 8.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.013324337376938061,
            "low": 0.013324337376938061,
            "high": 0.013324337376938061
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 8.266666666666667,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.023761938368637346,
            "low": 0.023761938368637346,
            "high": 0.023761938368637346
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.88,
          0.12
        ],
        [
          0.11382113821138211,
          0.8861788617886179
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.88,
            0.12
          ],
          [
            0.11382113821138211,
            0.8861788617886179
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            110.0,
            15.0
          ],
          [
            14.0,
            109.0
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
        "text": "Liquidity score: 90.6 — Strong",
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
    "liq_subtitle": "Medium-term liquidity stands above peers, but current trading conditions are less supportive on the buy side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The stock has fallen over one month and has lagged the market, even though it has held up better than peers.",
    "perf_insight": "The one-month return is -6.3%, compared with -1.9% for the market and -8.3% for peers. That leaves the stock under pressure in absolute terms, which can weigh on trading conditions even as relative peer performance is less weak.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market factors are the main driver of trading, so the tape is moving more with broader sentiment than on stock-specific news.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 53.8% of price changes. Other influences are sector 38.8%, and company-specific 7.5%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 53.8%, sector 38.8%, and company-specific 7.5%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 53.8%, sector 38.8%, and company-specific 7.5%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Market explains 53.8% of current trading. That matters because day-to-day moves are still being set mainly by broader conditions rather than a company-specific catalyst.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price moves are mainly market-led, with market factors at 53.8%.",
      "Monthly change: the pattern has shifted from mostly market in January to market-driven in February and more mixed in March."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current conditions look balanced overall, but the order book is less supportive on the bid side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 1, 2025 to Apr 1, 2026 (241 trading days • 788,198 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate buy-side access looks thinner than the broader liquidity profile suggests, with top-10 bid depth at 0.63x ask depth and a 2-tick spread. That matters because execution can feel less comfortable day to day even with a six-month liquidity score above peers.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 17.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Current trading conditions are defined more by order-book balance than by a broad improvement in flow.",
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
    "intraday_insight": "One-day average volume is 20.5% below the one-month average, while top-10 bid depth is only 0.63x ask depth. That points to a session that can feel thinner on the buy side even without a sharp break from the recent baseline.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by market direction and order-book balance.",
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
    "exec_subtitle": "Liquidity is mixed for its size, with stronger medium-term peer standing offset by thinner near-term buy-side conditions.",
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
        "value": "90.6/100",
        "sub": "Peer median 83.8 (+6.9 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$82.4M",
        "sub": "Peer median HK$53.9M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.13%",
        "sub": "1.23 ticks; peers 0.30%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks sound on a medium-term peer comparison, with a six-month score of 90.6 against a peer median of 83.8. Near-term conditions are less supportive, with one-day average volume down 20.5% from the one-month average and top-10 bid depth at 0.63x ask depth. That leaves access reasonable overall, but less comfortable for buyers in the current session.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "9.010",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.22%",
        "note": "2.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.63x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.11% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.23% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.40% with 100.0% fill.",
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
        "value": "91",
        "suffix": "/100",
        "bar_pct": 91,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 245/2607",
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
        "value": "0.13",
        "suffix": "%",
        "bar_pct": 1,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.13% • 1.23 ticks vs peers 0.30%",
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
        "value": "82.4M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$53.9M",
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
        "value": "53.8",
        "suffix": "market",
        "bar_pct": 54,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 38.8% • Company 7.5%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Medium-term liquidity is better than peers, with a six-month score of 90.6 compared with the peer median of 83.8. That supports solid peer-relative access even if the overall picture remains mixed for its size.",
      "Recent flow is lighter, with one-day average volume down 20.5% from the one-month average. That points to less active trading in the current session than the recent monthly average.",
      "The clearest execution watchpoint is on the bid side, with top-10 bid depth at 0.63x ask depth and market driving 53.8% of trading. That matters because buy-side liquidity is thinner while broader sentiment is still setting the tone."
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
      "overall": "6M liquidity is strong: score 90.6 vs peer median 83.8 (+6.9 pts). 1D average volume down -20.5% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 90.6 vs peer median 83.8 (+6.9 pts)."
      ],
      "concerns": [
        "1D average volume down -20.5% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +6.9 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 0.7%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: 0.7% vs market 9.7%.",
        "vs_sector": "Better than sector: 0.7% vs sector -3.7%.",
        "vs_peers": "Better than peers: 0.7% vs peers -5.4%."
      },
      "adv": {
        "insight": "ADV is HK$82.4M, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$82.4M vs market HK$219.9K.",
        "vs_sector": "Better than sector: HK$82.4M vs sector HK$11.4K.",
        "vs_peers": "Better than peers: HK$82.4M vs peers HK$53.9M."
      },
      "spread": {
        "insight": "Spread is 0.13%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.13% vs market 2.67%.",
        "vs_sector": "Better than sector: 0.13% vs sector 4.01%.",
        "vs_peers": "Better than peers: 0.13% vs peers 0.30%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.52%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.52% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.52% vs sector 0.00%.",
        "vs_peers": "Better than peers: 0.52% vs peers 0.28%."
      },
      "volatility": {
        "insight": "Volatility is 30.32%, better than market and sector, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 30.32% vs market 59.86%.",
        "vs_sector": "Better than sector: 30.32% vs sector 40.81%.",
        "vs_peers": "In line with peers: 30.32% vs peers 27.68%."
      },
      "trades": {
        "insight": "Trades is 3288, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 3288 vs market 21.",
        "vs_sector": "Better than sector: 3288 vs sector 2.",
        "vs_peers": "Better than peers: 3288 vs peers 1440."
      },
      "amihud": {
        "insight": "Price impact is 1.55e-10, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 1.55e-10 vs market 4.74e-08.",
        "vs_sector": "Better than sector: 1.55e-10 vs sector 1.41e-07.",
        "vs_peers": "Better than peers: 1.55e-10 vs peers 2.60e-10."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to the market, with the stock down 6.3% over one month compared with a 1.9% market decline, although it has held up better than peers at -8.3%. Liquidity gives a mixed read on that move because the six-month liquidity score is 90.6 against a peer median of 83.8, while one-day average volume is 20.5% below the monthly average and top-10 bid depth is only 0.63 times ask depth.",
      "conclusion": "The move looks mainly broad-market in character, with mixed liquidity signals rather than a clear company-specific break."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by broader market moves, with market factors accounting for 53.8% of current price action. That matters because the tape is being set more by external sentiment than by company-specific news, which can make trading conditions feel more dependent on the wider market.",
      "beta": "This market-led pattern looks real but not fully settled, because average volume is 20.5% below the 1M average. That matters because lighter recent activity can make the current driver mix feel less durable from day to day.",
      "rolling_change": "The monthly picture has become more balanced after a clear shift in recent months, moving from mostly market in January to market-driven in February and then to a more mixed pattern in March. That matters because the stock is no longer trading on a single clear company narrative, even though broader forces still have the strongest pull."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "Current market state is High Volatility. The market has been in this state about 49.8% of the time. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This looks more stable than fleeting, as the typical high-volatility spell lasts about 8.3 days, although the picture is mixed with 1D average volume down 20.5% from the 1M average.",
      "trading_implications": "That combination points to conditions that can stay unsettled for a period, with lighter recent activity making day-to-day liquidity feel less steady even if the state itself is not brief."
    },
    "execution": {
      "overall": "Displayed liquidity is mixed in the near term because the book is bid-light, with top-10 bid depth at 0.63x ask depth and a 2-tick",
      "concern": "Trade-size percentiles use Apr 1, 2025 to Apr 1, 2026 history (241 trading days • 788,198 trades).",
      "peer_context": "This tempers the stronger medium-term picture because the 6M liquidity score of 90.6 sits 6.9 points above the peer median, yet the current book does not show that advantage evenly on both sides. The result is a better peer-relative backdrop than the displayed buy-side depth alone would suggest."
    },
    "trader_composition": {
      "overall": "Flow looks mainly institution-like on both trade count and trade value, which supports a steadier liquidity base.",
      "retail_heavy": "Institution-like trades account for 52.3% of trade count and 65.7% of trade value, compared with retail-like trades at 5.5% of count and 2.8% of value. That gap shows the tape is being driven more by larger-value participation than by small-ticket activity.",
      "institutional_gap": "The read is still mixed at the margin because unclear flow represents 29.5% of trade count. That leaves the overall signal institution-like, but not fully clean.",
      "peer_comparison": "The mix appears more institution-like than retail-heavy, and the peer comparison in the report tables shows how unusual that balance is relative to the group."
    },
    "price_moving": {
      "overall": "Price-moving activity is present but not dominant, with 17.3% of total trades moving price. The signal is mixed because 29.5% of trade count is unclear flow. That means the price impact read may be treated as directionally useful rather than fully definitive. Positive and negative price-moving trade asymmetry is shown in the report tables, which helps indicate whether pressure is balanced or one-sided.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be a defining factor in current trading. The clearer signals are that average volume is down 20.5% from the 1M average while the stock has still outperformed peers over 1M, which points more to ordinary flow conditions than to short pressure driving liquidity.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short trend does not point to a meaningful change in market conditions. Broader market moves explain 53.8% of trading and the stock's recent return is better than peers, so the current picture still looks more market-led than short-led.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, where 85.6% of trading takes place, while the open contributes 0.2% and the close 9.7%. That points to the middle of the day as the main source of usable flow.",
      "hhi_interpretation": "Ambiguous or unclear flow is 29.5% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest source of liquidity because it carries the large majority of trading activity. The very small open share means early-session access is less representative of the day’s overall flow.",
      "peer_ranking": "Peer concentration comparisons in the report tables show whether this intraday profile is broader or narrower than the peer set."
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
        "101",
        "1972",
        "1997",
        "14",
        "10",
        "41",
        "71",
        "2007",
        "1908"
      ],
      "scores": [
        90.64058304564634,
        91.06252397391637,
        86.80475642500959,
        81.28116609129268,
        73.2259301879555,
        72.34369006520906,
        58.22784810126582,
        86.26774069812045,
        88.37744533947065
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
        82433373.1,
        81282354.51,
        94697569.75999999,
        34086717.65,
        10107822.3,
        6442025.0,
        636494.6,
        81287011.77,
        73656002.485
      ],
      "total": 2607
    },
    "market_comparison": {
      "sector_name": "Property Investment",
      "sector_count": 53,
      "market_count": 2607,
      "company": {
        "volatility": 0.3032122365080385,
        "adv": 82433373.1,
        "spread_pct": 0.0013414695080090136,
        "turnover_ratio": 0.005205951743031347,
        "amihud": 1.5471139271023214e-10,
        "trades": 3288.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7396079631025353,
          "median": 0.598586141375593,
          "min": 0.026427624109509794,
          "max": 33.692481563841405,
          "p5": 0.22513373713696208,
          "p95": 1.5576225875696148,
          "count": 2607
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 63437686.65700392,
          "median": 219920.0,
          "min": 0.0,
          "max": 13711894082.25,
          "p5": 0.0,
          "p95": 228498387.5579998,
          "count": 2607
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04214684744415255,
          "median": 0.026717477958095707,
          "min": 0.000558678699550006,
          "max": 0.5518881068100528,
          "p5": 0.0013636630694224892,
          "p95": 0.1346544414496083,
          "count": 2607
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035181285746970483,
          "median": 0.0008772740160740871,
          "min": 0.0,
          "max": 0.1465769815616509,
          "p5": 0.0,
          "p95": 0.014294882844372893,
          "count": 2584
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.309446460702591e-07,
          "median": 4.7383929462885906e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 4.59368247619184e-11,
          "p95": 3.4430568123930607e-06,
          "count": 2607
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1090.711162255466,
          "median": 21.0,
          "min": 0.0,
          "max": 113413.5,
          "p5": 0.0,
          "p95": 5806.59999999998,
          "count": 2607
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5339286535556775,
          "median": 0.40813315097443675,
          "min": 0.15261504368879975,
          "max": 1.7109970160395178,
          "p5": 0.17131790774784966,
          "p95": 1.293996346807953,
          "count": 53
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 6082540.918962265,
          "median": 11407.0,
          "min": 0.0,
          "max": 94697569.75999999,
          "p5": 0.0,
          "p95": 52964972.393999934,
          "count": 53
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.057847318367261036,
          "median": 0.04007965412721167,
          "min": 0.001188693493252163,
          "max": 0.23686926007342582,
          "p5": 0.0020419723494698727,
          "p95": 0.16231350917261056,
          "count": 53
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0009374200640049832,
          "median": 4.929803879541314e-05,
          "min": 0.0,
          "max": 0.012586307513385032,
          "p5": 0.0,
          "p95": 0.004778990844345447,
          "count": 53
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.3590281021821313e-06,
          "median": 1.4081241252028884e-07,
          "min": 0.0,
          "max": 1.5151515151515138e-05,
          "p5": 1.4328862645859715e-10,
          "p95": 6.479102491117007e-06,
          "count": 53
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 232.20754716981133,
          "median": 2.0,
          "min": 0.0,
          "max": 4564.5,
          "p5": 0.0,
          "p95": 1340.0999999999985,
          "count": 53
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 47774499.75937499,
          "median": 53871360.067499995,
          "min": 636494.6,
          "max": 94697569.75999999,
          "p5": 2668430.24,
          "p95": 90003874.4635,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1709.6875,
          "median": 1440.0,
          "min": 24.0,
          "max": 4564.5,
          "p5": 88.92500000000001,
          "p95": 4161.124999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3114195923877735,
          "median": 0.276802806982859,
          "min": 0.16126967010732088,
          "max": 0.652852139569579,
          "p5": 0.18899298749431537,
          "p95": 0.5417247333318022,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.005072222092937763,
          "median": 0.0030219513964239893,
          "min": 0.001188693493252163,
          "max": 0.016769715366103857,
          "p5": 0.001364708681040378,
          "p95": 0.01388003796253694,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.4464514755160827e-09,
          "median": 2.5996854282152743e-10,
          "min": 1.2397778551234515e-10,
          "max": 8.289773062612241e-09,
          "p5": 1.2473962756142498e-10,
          "p95": 5.877059069650333e-09,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0033595081222844454,
          "median": 0.0028456619488852206,
          "min": 0.00022459775565331297,
          "max": 0.007922965981614908,
          "p5": 0.0005194054663120412,
          "p95": 0.007393861039412544,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.983612679231064,
          "median": 3.983612679231064,
          "min": 1.001123663546874,
          "max": 6.966101694915254,
          "p5": 1.2993725651152932,
          "p95": 6.667852793346835,
          "count": 2
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.063212435233161,
        "market": -0.01934411605736608,
        "sector": -0.02973169990887925,
        "peers": -0.08263344163356268
      },
      {
        "horizon": "3M",
        "stock": 0.05730994152046698,
        "market": 0.0744907328886586,
        "sector": -0.02369567536470163,
        "peers": -0.005374509752552603
      },
      {
        "horizon": "6M",
        "stock": 0.0066815144766141366,
        "market": 0.09749550653948869,
        "sector": -0.036656594077827065,
        "peers": -0.05441952373626846
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
      "share_market": 0.5377017053378982,
      "share_sector": 0.3875240010003236,
      "share_idio": 0.07477429366177829,
      "beta_market": 1.0341299281980778,
      "beta_sector": 1.4967015915473652,
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
            "median": 0.5377017053378982,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.8%",
            "display_range": null,
            "display_text": "53.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 53.8,
            "plain_english": "Market explains about 53.8% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.3875240010003236,
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
            "plain_english": "Sector explains about 38.8% of price moves in the current state."
          },
          "company_share": {
            "median": 0.07477429366177829,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "7.5%",
            "display_range": null,
            "display_text": "7.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 7.5,
            "plain_english": "Company-specific explains about 7.5% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.0341299281980778,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.03",
            "display_range": null,
            "display_text": "1.03",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.03% stock move in the same direction in this state.",
            "value_num": 1.03
          },
          "beta_stock_lag": {
            "median": -0.5668898488217398,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.57",
            "display_range": null,
            "display_text": "-0.57",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.57
          },
          "beta_sector": {
            "median": 1.4967015915473652,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.50",
            "display_range": null,
            "display_text": "1.50",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.50% stock move in the same direction in this state.",
            "value_num": 1.5
          },
          "beta_market_lag": {
            "median": 3.5142980568354947,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.51",
            "display_range": null,
            "display_text": "3.51",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 3.51
          },
          "beta_sector_lag": {
            "median": -3.05372560261594,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-3.05",
            "display_range": null,
            "display_text": "-3.05",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -3.05
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-03",
            "month_label": "March 2025",
            "month_short_label": "Mar",
            "period_label": "2025-03-18 to 2025-03-31",
            "n_obs": 10,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3726152374350138,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.3%",
              "display_range": null,
              "display_text": "37.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 37.3,
              "plain_english": "Sector explains about 37.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3472155606104763,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.7%",
                "display_range": null,
                "display_text": "34.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 34.7,
                "plain_english": "Market explains about 34.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3726152374350138,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.3%",
                "display_range": null,
                "display_text": "37.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 37.3,
                "plain_english": "Sector explains about 37.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.28016920195450995,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.0%",
                "display_range": null,
                "display_text": "28.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 28.0,
                "plain_english": "Company-specific explains about 28.0% of price moves in the current state."
              }
            },
            "summary": "Mar: Much more balanced across company, sector, and market factors."
          },
          {
            "month_key": "2025-04",
            "month_label": "April 2025",
            "month_short_label": "Apr",
            "period_label": "2025-04-01 to 2025-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.41602881622670485,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.6%",
              "display_range": null,
              "display_text": "41.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 41.6,
              "plain_english": "Market explains about 41.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.41602881622670485,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.6%",
                "display_range": null,
                "display_text": "41.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 41.6,
                "plain_english": "Market explains about 41.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2303452040658085,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.0%",
                "display_range": null,
                "display_text": "23.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 23.0,
                "plain_english": "Sector explains about 23.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.35362597970748666,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.4%",
                "display_range": null,
                "display_text": "35.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 35.4,
                "plain_english": "Company-specific explains about 35.4% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though market-driven still has the largest share."
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
              "median": 0.39378669761047347,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.4%",
              "display_range": null,
              "display_text": "39.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 39.4,
              "plain_english": "Company-specific explains about 39.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.38471295040761927,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.5%",
                "display_range": null,
                "display_text": "38.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 38.5,
                "plain_english": "Market explains about 38.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22150035198190718,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.2%",
                "display_range": null,
                "display_text": "22.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.2,
                "plain_english": "Sector explains about 22.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.39378669761047347,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.4%",
                "display_range": null,
                "display_text": "39.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 39.4,
                "plain_english": "Company-specific explains about 39.4% of price moves in the current state."
              }
            },
            "summary": "May: More mixed, though company-driven still has the largest share."
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
              "median": 0.5399074543936702,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.0%",
              "display_range": null,
              "display_text": "54.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.0,
              "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3514015106558869,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.1%",
                "display_range": null,
                "display_text": "35.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 35.1,
                "plain_english": "Market explains about 35.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10869103495044302,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.9%",
                "display_range": null,
                "display_text": "10.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 10.9,
                "plain_english": "Sector explains about 10.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5399074543936702,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.0%",
                "display_range": null,
                "display_text": "54.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 54.0,
                "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
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
              "median": 0.5137858628291848,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.4%",
              "display_range": null,
              "display_text": "51.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.4,
              "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.36643329509236866,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.6%",
                "display_range": null,
                "display_text": "36.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.6,
                "plain_english": "Market explains about 36.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11978084207844646,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.0%",
                "display_range": null,
                "display_text": "12.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.0,
                "plain_english": "Sector explains about 12.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5137858628291848,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.4%",
                "display_range": null,
                "display_text": "51.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 51.4,
                "plain_english": "Company-specific explains about 51.4% of price moves in the current state."
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
              "median": 0.5456584969338959,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.6%",
              "display_range": null,
              "display_text": "54.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.6,
              "plain_english": "Company-specific explains about 54.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15483356012408225,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.5%",
                "display_range": null,
                "display_text": "15.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 15.5,
                "plain_english": "Market explains about 15.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2995079429420218,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.0%",
                "display_range": null,
                "display_text": "30.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 30.0,
                "plain_english": "Sector explains about 30.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5456584969338959,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.6%",
                "display_range": null,
                "display_text": "54.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 54.6,
                "plain_english": "Company-specific explains about 54.6% of price moves in the current state."
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
              "median": 0.47358137259628114,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.35122906292662015,
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
                "median": 0.1751895644770987,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.5%",
                "display_range": null,
                "display_text": "17.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 17.5,
                "plain_english": "Sector explains about 17.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47358137259628114,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.4%",
                "display_range": null,
                "display_text": "47.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 47.4,
                "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
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
              "median": 0.4084575885944104,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.8%",
              "display_range": null,
              "display_text": "40.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.8,
              "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3043689445640922,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.4%",
                "display_range": null,
                "display_text": "30.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 30.4,
                "plain_english": "Market explains about 30.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28717346684149736,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.7%",
                "display_range": null,
                "display_text": "28.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 28.7,
                "plain_english": "Sector explains about 28.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4084575885944104,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.8%",
                "display_range": null,
                "display_text": "40.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 40.8,
                "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
              }
            },
            "summary": "Oct: More mixed, though company-driven still has the largest share."
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
              "median": 0.4315289504191055,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Market explains about 43.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4315289504191055,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.2%",
                "display_range": null,
                "display_text": "43.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 43.2,
                "plain_english": "Market explains about 43.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.24431858552972535,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.4%",
                "display_range": null,
                "display_text": "24.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 24.4,
                "plain_english": "Sector explains about 24.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.32415246405116915,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.4%",
                "display_range": null,
                "display_text": "32.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 32.4,
                "plain_english": "Company-specific explains about 32.4% of price moves in the current state."
              }
            },
            "summary": "Nov: More mixed, though market-driven still has the largest share."
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
              "median": 0.43177132833857024,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Sector explains about 43.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.14100778079828896,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.1%",
                "display_range": null,
                "display_text": "14.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 14.1,
                "plain_english": "Market explains about 14.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.43177132833857024,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.2%",
                "display_range": null,
                "display_text": "43.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 43.2,
                "plain_english": "Sector explains about 43.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.42722089086314086,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.7%",
                "display_range": null,
                "display_text": "42.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 42.7,
                "plain_english": "Company-specific explains about 42.7% of price moves in the current state."
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
              "median": 0.5112334269385046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.1%",
              "display_range": null,
              "display_text": "51.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 51.1,
              "plain_english": "Company-specific explains about 51.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.17771689941505434,
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
                "plain_english": "Market explains about 17.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.31104967364644104,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.1%",
                "display_range": null,
                "display_text": "31.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 31.1,
                "plain_english": "Sector explains about 31.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5112334269385046,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.1%",
                "display_range": null,
                "display_text": "51.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 51.1,
                "plain_english": "Company-specific explains about 51.1% of price moves in the current state."
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
              "median": 0.48896329397362803,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.9%",
              "display_range": null,
              "display_text": "48.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 48.9,
              "plain_english": "Market explains about 48.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.48896329397362803,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.9%",
                "display_range": null,
                "display_text": "48.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 48.9,
                "plain_english": "Market explains about 48.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.06545566721460801,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.5%",
                "display_range": null,
                "display_text": "6.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 6.5,
                "plain_english": "Sector explains about 6.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44558103881176403,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.6%",
                "display_range": null,
                "display_text": "44.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 44.6,
                "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
              }
            },
            "summary": "Feb: Mostly market-driven."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.446917980428963,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.7%",
              "display_range": null,
              "display_text": "44.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.7,
              "plain_english": "Sector explains about 44.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1071499809173688,
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
                "plain_english": "Market explains about 10.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.446917980428963,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.7%",
                "display_range": null,
                "display_text": "44.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 44.7,
                "plain_english": "Sector explains about 44.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44593203865366815,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.6%",
                "display_range": null,
                "display_text": "44.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 44.6,
                "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though sector-driven still has the largest share."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 8.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.013324337376938061,
              "low": 0.013324337376938061,
              "high": 0.013324337376938061
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 8.266666666666667,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.023761938368637346,
              "low": 0.023761938368637346,
              "high": 0.023761938368637346
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.88,
              0.12
            ],
            [
              0.11382113821138211,
              0.8861788617886179
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              110.0,
              15.0
            ],
            [
              14.0,
              109.0
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
          "market_link_display": "1.03",
          "sector_link_display": "1.50",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.03% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.50% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.57",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 53.8,
          "driver_share_display": "53.8%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8861788617886179,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 8.3 days.",
          "expected_duration_days": 8.3
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
          "month_key": "2025-03",
          "month_label": "March 2025",
          "month_short_label": "Mar",
          "period_label": "2025-03-18 to 2025-03-31",
          "n_obs": 10,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Mar: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3472155606104763,
          "share_sector": 0.3726152374350138,
          "share_company": 0.28016920195450995,
          "share_market_display": "34.7%",
          "share_sector_display": "37.3%",
          "share_company_display": "28.0%",
          "dominant_share_display": "37.3%"
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: More mixed, though market-driven still has the largest share.",
          "share_market": 0.41602881622670485,
          "share_sector": 0.2303452040658085,
          "share_company": 0.35362597970748666,
          "share_market_display": "41.6%",
          "share_sector_display": "23.0%",
          "share_company_display": "35.4%",
          "dominant_share_display": "41.6%"
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
          "summary": "May: More mixed, though company-driven still has the largest share.",
          "share_market": 0.38471295040761927,
          "share_sector": 0.22150035198190718,
          "share_company": 0.39378669761047347,
          "share_market_display": "38.5%",
          "share_sector_display": "22.2%",
          "share_company_display": "39.4%",
          "dominant_share_display": "39.4%"
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
          "share_market": 0.3514015106558869,
          "share_sector": 0.10869103495044302,
          "share_company": 0.5399074543936702,
          "share_market_display": "35.1%",
          "share_sector_display": "10.9%",
          "share_company_display": "54.0%",
          "dominant_share_display": "54.0%"
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
          "share_market": 0.36643329509236866,
          "share_sector": 0.11978084207844646,
          "share_company": 0.5137858628291848,
          "share_market_display": "36.6%",
          "share_sector_display": "12.0%",
          "share_company_display": "51.4%",
          "dominant_share_display": "51.4%"
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
          "share_market": 0.15483356012408225,
          "share_sector": 0.2995079429420218,
          "share_company": 0.5456584969338959,
          "share_market_display": "15.5%",
          "share_sector_display": "30.0%",
          "share_company_display": "54.6%",
          "dominant_share_display": "54.6%"
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
          "share_market": 0.35122906292662015,
          "share_sector": 0.1751895644770987,
          "share_company": 0.47358137259628114,
          "share_market_display": "35.1%",
          "share_sector_display": "17.5%",
          "share_company_display": "47.4%",
          "dominant_share_display": "47.4%"
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
          "summary": "Oct: More mixed, though company-driven still has the largest share.",
          "share_market": 0.3043689445640922,
          "share_sector": 0.28717346684149736,
          "share_company": 0.4084575885944104,
          "share_market_display": "30.4%",
          "share_sector_display": "28.7%",
          "share_company_display": "40.8%",
          "dominant_share_display": "40.8%"
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
          "share_market": 0.4315289504191055,
          "share_sector": 0.24431858552972535,
          "share_company": 0.32415246405116915,
          "share_market_display": "43.2%",
          "share_sector_display": "24.4%",
          "share_company_display": "32.4%",
          "dominant_share_display": "43.2%"
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
          "share_market": 0.14100778079828896,
          "share_sector": 0.43177132833857024,
          "share_company": 0.42722089086314086,
          "share_market_display": "14.1%",
          "share_sector_display": "43.2%",
          "share_company_display": "42.7%",
          "dominant_share_display": "43.2%"
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
          "share_market": 0.17771689941505434,
          "share_sector": 0.31104967364644104,
          "share_company": 0.5112334269385046,
          "share_market_display": "17.8%",
          "share_sector_display": "31.1%",
          "share_company_display": "51.1%",
          "dominant_share_display": "51.1%"
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
          "summary": "Feb: Mostly market-driven.",
          "share_market": 0.48896329397362803,
          "share_sector": 0.06545566721460801,
          "share_company": 0.44558103881176403,
          "share_market_display": "48.9%",
          "share_sector_display": "6.5%",
          "share_company_display": "44.6%",
          "dominant_share_display": "48.9%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Mar: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.1071499809173688,
          "share_sector": 0.446917980428963,
          "share_company": 0.44593203865366815,
          "share_market_display": "10.7%",
          "share_sector_display": "44.7%",
          "share_company_display": "44.6%",
          "dominant_share_display": "44.7%"
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
            "expected_duration_days": 8.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.013324337376938061,
              "low": 0.013324337376938061,
              "high": 0.013324337376938061
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 8.266666666666667,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.023761938368637346,
              "low": 0.023761938368637346,
              "high": 0.023761938368637346
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.88,
            0.12
          ],
          [
            0.11382113821138211,
            0.8861788617886179
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 9.0,
          "quantity": 31000.0,
          "value": 279000.0
        },
        {
          "level": 2,
          "price": 8.99,
          "quantity": 41000.0,
          "value": 368590.0
        },
        {
          "level": 3,
          "price": 8.98,
          "quantity": 39000.0,
          "value": 350220.0
        },
        {
          "level": 4,
          "price": 8.97,
          "quantity": 87000.0,
          "value": 780390.0
        },
        {
          "level": 5,
          "price": 8.96,
          "quantity": 59000.0,
          "value": 528640.0
        },
        {
          "level": 6,
          "price": 8.95,
          "quantity": 213000.0,
          "value": 1906349.9999999998
        },
        {
          "level": 7,
          "price": 8.94,
          "quantity": 12000.0,
          "value": 107280.0
        },
        {
          "level": 8,
          "price": 8.93,
          "quantity": 49000.0,
          "value": 437570.0
        },
        {
          "level": 9,
          "price": 8.92,
          "quantity": 158000.0,
          "value": 1409360.0
        },
        {
          "level": 10,
          "price": 8.91,
          "quantity": 10000.0,
          "value": 89100.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 9.02,
          "quantity": 63000.0,
          "value": 568260.0
        },
        {
          "level": 2,
          "price": 9.03,
          "quantity": 36000.0,
          "value": 325080.0
        },
        {
          "level": 3,
          "price": 9.04,
          "quantity": 32000.0,
          "value": 289280.0
        },
        {
          "level": 4,
          "price": 9.05,
          "quantity": 40000.0,
          "value": 362000.0
        },
        {
          "level": 5,
          "price": 9.06,
          "quantity": 187000.0,
          "value": 1694220.0
        },
        {
          "level": 6,
          "price": 9.07,
          "quantity": 281000.0,
          "value": 2548670.0
        },
        {
          "level": 7,
          "price": 9.08,
          "quantity": 27000.0,
          "value": 245160.0
        },
        {
          "level": 8,
          "price": 9.09,
          "quantity": 291000.0,
          "value": 2645190.0
        },
        {
          "level": 9,
          "price": 9.1,
          "quantity": 78000.0,
          "value": 709800.0
        },
        {
          "level": 10,
          "price": 9.11,
          "quantity": 54000.0,
          "value": 491939.99999999994
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-01 07:59:57.420000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 9.01,
        "spread_pct": 0.0022197558268589983,
        "spread_ticks": 2.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 6256500.0,
        "ask_depth_notional_top10": 9879600.0,
        "bid_ask_depth_ratio": 0.6333
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 241,
        "n_trades_used": 788198,
        "first_trade_date": "2025-04-01",
        "last_trade_date": "2026-04-01",
        "window_label": "Apr 1, 2025 to Apr 1, 2026",
        "window_short_label": "Apr 1, 2025 to Apr 1, 2026",
        "trade_days_label": "241 trading days",
        "trade_count_label": "788,198 trades",
        "window_detail_label": "241 trading days • 788,198 trades",
        "history_note": "Trade-size percentiles use Apr 1, 2025 to Apr 1, 2026 history (241 trading days • 788,198 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 54600.0,
            "impact_pct": -0.00111,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.87,
            "pct_of_adv": 0.07
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 84800.0,
            "impact_pct": -0.00111,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.36,
            "pct_of_adv": 0.12
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 3727747.28,
            "impact_pct": -0.004873,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 59.58,
            "pct_of_adv": 5.06
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-01",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "2578686721.0",
            "timestamp": "2026-04-01 03:18:37.561000000",
            "local_timestamp": "2026-04-01 11:18:37",
            "posted_price": 9.09,
            "size_shares": 247000.0,
            "notional": 2245230.0,
            "impact_pct": -0.003721,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 35.89,
            "price_vs_mid_pct": 0.888,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "4096832257.0",
            "timestamp": "2026-04-01 06:29:07.722000000",
            "local_timestamp": "2026-04-01 14:29:07",
            "posted_price": 9.12,
            "size_shares": 233000.0,
            "notional": 2124960.0,
            "impact_pct": -0.003618,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 33.96,
            "price_vs_mid_pct": 1.221,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "4425357057.0",
            "timestamp": "2026-04-01 06:49:57.348000000",
            "local_timestamp": "2026-04-01 14:49:57",
            "posted_price": 9.14,
            "size_shares": 224000.0,
            "notional": 2047360.0,
            "impact_pct": -0.003544,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 32.72,
            "price_vs_mid_pct": 1.443,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-01",
        "bucket_minutes": 30,
        "tick_size": 0.01,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0011179429849077459,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 8100680.0,
            "ask_depth_notional": 8615370.0,
            "mid_price": 8.945
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.002234636871508531,
            "spread_ticks": 2.000000000000135,
            "bid_depth_notional": 9203730.0,
            "ask_depth_notional": 9432870.0,
            "mid_price": 8.95
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0022246941045605756,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 9179390.0,
            "ask_depth_notional": 9361350.0,
            "mid_price": 8.99
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0011104941699055845,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 7633000.0,
            "ask_depth_notional": 12057160.0,
            "mid_price": 9.004999999999999
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0011104941699055845,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 4972970.0,
            "ask_depth_notional": 9615400.0,
            "mid_price": 9.004999999999999
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0022197558268589983,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 12388880.0,
            "ask_depth_notional": 10848170.0,
            "mid_price": 9.01
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0011104941699055845,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 11627280.0,
            "ask_depth_notional": 12045910.0,
            "mid_price": 9.004999999999999
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0011055831951356067,
            "spread_ticks": 1.0000000000001563,
            "bid_depth_notional": 13050800.0,
            "ask_depth_notional": 9913550.0,
            "mid_price": 9.045
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0011043622308116827,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 13292870.0,
            "ask_depth_notional": 14070270.0,
            "mid_price": 9.055
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0011080332409972064,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 12225670.0,
            "ask_depth_notional": 14353770.0,
            "mid_price": 9.024999999999999
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0022197558268589983,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 6256500.0,
            "ask_depth_notional": 9879600.0,
            "mid_price": 9.01
          }
        ],
        "summary": {
          "median_spread_pct": 0.0011104941699055845,
          "median_spread_ticks": 0.9999999999999787,
          "median_bid_depth_notional": 9203730.0,
          "median_ask_depth_notional": 9913550.0,
          "tightest_bucket": "14:30",
          "widest_bucket": "10:00",
          "deepest_bid_bucket": "14:30",
          "thinnest_bid_bucket": "11:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.1,
      "peers": [
        {
          "ticker": "1997",
          "pct": 0.9
        },
        {
          "ticker": "1972",
          "pct": 1.2
        },
        {
          "ticker": "1908",
          "pct": 1.3
        },
        {
          "ticker": "2007",
          "pct": 1.3
        },
        {
          "ticker": "14",
          "pct": 1.8
        },
        {
          "ticker": "10",
          "pct": 6.5
        },
        {
          "ticker": "41",
          "pct": 12.6
        },
        {
          "ticker": "71",
          "pct": 165.5
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 2368,
          "n_runs": 711,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-01",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.03462837837837838,
            "mixed_pct": 0.0,
            "instit_pct": 0.4907094594594595,
            "ambiguous_pct": 0.27618243243243246,
            "unobservable_pct": 0.19847972972972974,
            "unclear_pct": 0.47466216216216217,
            "retail_qty_pct": 0.020351335250119014,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5841467121029147,
            "ambiguous_qty_pct": 0.2527723014607198,
            "unobservable_qty_pct": 0.14272965118624648,
            "unclear_qty_pct": 0.39550195264696625,
            "retail_notional_pct": 0.020377811291988915,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5837328287555632,
            "ambiguous_notional_pct": 0.2529739513754072,
            "unobservable_notional_pct": 0.14291540857704063,
            "unclear_notional_pct": 0.3958893599524478
          },
          "run_composition": {
            "retail_pct": 0.10829817158931083,
            "mixed_pct": 0.0,
            "instit_pct": 0.18424753867791843,
            "ambiguous_pct": 0.25035161744022505,
            "unobservable_pct": 0.4571026722925457,
            "unclear_pct": 0.7074542897327707,
            "retail_notional_pct": 0.020377811291988915,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5837328287555632,
            "unclear_notional_pct": 0.3958893599524478
          },
          "counts": {
            "trades": {
              "retail": 82,
              "mixed": 0,
              "institutional": 1162,
              "ambiguous": 654,
              "unobservable": 470,
              "unclear": 1124
            },
            "runs": {
              "retail": 77,
              "mixed": 0,
              "institutional": 131,
              "ambiguous": 178,
              "unobservable": 325,
              "unclear": 503
            }
          },
          "confidence": {
            "high": 0.09282700421940929,
            "medium": 0.19971870604781997,
            "low": 0.0,
            "na": 0.7074542897327707
          },
          "confidence_counts": {
            "high": 66,
            "medium": 142,
            "low": 0,
            "na": 503
          },
          "trade_confidence": {
            "high": 0.10641891891891891,
            "medium": 0.4189189189189189,
            "low": 0.0,
            "na": 0.47466216216216217
          },
          "trade_confidence_counts": {
            "high": 252,
            "medium": 992,
            "low": 0,
            "na": 1124
          },
          "observability": {
            "avg_feature_coverage": 0.6613924050632911,
            "observable_run_pct": 0.5428973277074542,
            "ambiguous_run_pct": 0.25035161744022505,
            "unobservable_run_pct": 0.4571026722925457
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.4571026722925457,
          "dominance_gap": 0.20675105485232065,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 2368
            },
            "d2_information": {
              "UNOBSERVABLE": 2368
            },
            "d3_urgency": {
              "IMMEDIATE": 677,
              "ADAPTIVE": 34
            },
            "participant_confidence": {
              "NA": 503,
              "MEDIUM": 142,
              "HIGH": 66
            }
          },
          "trade_size": {
            "avg": 22579.25668918919,
            "median": 9050.0
          },
          "run_size": {
            "avg": 75200.67488045007,
            "median": 26790.0,
            "avg_length": 3.330520393811533
          },
          "recent_trades": [
            {
              "trade_id": "2428",
              "timestamp": "2026-04-01T07:59:56.278385",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2427",
              "timestamp": "2026-04-01T07:59:56.277949",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2426",
              "timestamp": "2026-04-01T07:59:56.277193",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2425",
              "timestamp": "2026-04-01T07:59:51.552128",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2424",
              "timestamp": "2026-04-01T07:59:49.041960",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2423",
              "timestamp": "2026-04-01T07:59:30.090780",
              "price": 9.02,
              "size": 3000.0,
              "notional": 27060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2422",
              "timestamp": "2026-04-01T07:59:28.012412",
              "price": 9.02,
              "size": 2000.0,
              "notional": 18040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2421",
              "timestamp": "2026-04-01T07:59:28.012412",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2420",
              "timestamp": "2026-04-01T07:59:25.427296",
              "price": 9.01,
              "size": 4000.0,
              "notional": 36040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2419",
              "timestamp": "2026-04-01T07:59:13.641827",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154840,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2418",
              "timestamp": "2026-04-01T07:59:12.659689",
              "price": 9.0,
              "size": 3000.0,
              "notional": 27000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154840,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2417",
              "timestamp": "2026-04-01T07:59:04.549538",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2416",
              "timestamp": "2026-04-01T07:59:00.351490",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2415",
              "timestamp": "2026-04-01T07:59:00.351490",
              "price": 9.01,
              "size": 2000.0,
              "notional": 18020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2414",
              "timestamp": "2026-04-01T07:58:36.154220",
              "price": 8.99,
              "size": 1000.0,
              "notional": 8990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 154838,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2413",
              "timestamp": "2026-04-01T07:58:30.825918",
              "price": 8.99,
              "size": 5000.0,
              "notional": 44950.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 154837,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2412",
              "timestamp": "2026-04-01T07:58:25.061779",
              "price": 8.99,
              "size": 11000.0,
              "notional": 98890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2411",
              "timestamp": "2026-04-01T07:58:24.393232",
              "price": 8.99,
              "size": 2000.0,
              "notional": 17980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2409",
              "timestamp": "2026-04-01T07:58:19.524001",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2408",
              "timestamp": "2026-04-01T07:58:18.844788",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2407",
              "timestamp": "2026-04-01T07:58:18.844788",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2406",
              "timestamp": "2026-04-01T07:58:14.115630",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2405",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2404",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 2000.0,
              "notional": 18020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2403",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 5000.0,
              "notional": 45050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2402",
              "timestamp": "2026-04-01T07:58:09.980724",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2401",
              "timestamp": "2026-04-01T07:58:09.980724",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2400",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2399",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2398",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 64961,
          "n_runs": 15155,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-04",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.05603362017210326,
            "mixed_pct": 0.0,
            "instit_pct": 0.522051692553994,
            "ambiguous_pct": 0.29222148673819676,
            "unobservable_pct": 0.12969320053570604,
            "unclear_pct": 0.4219146872739028,
            "retail_qty_pct": 0.02597017005876128,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.659703507734771,
            "ambiguous_qty_pct": 0.22104192959406452,
            "unobservable_qty_pct": 0.09328439261240314,
            "unclear_qty_pct": 0.31432632220646767,
            "retail_notional_pct": 0.025807704547844607,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6601354014635984,
            "ambiguous_notional_pct": 0.22077837093142302,
            "unobservable_notional_pct": 0.09327852305713402,
            "unclear_notional_pct": 0.3140568939885571
          },
          "run_composition": {
            "retail_pct": 0.21689211481359288,
            "mixed_pct": 0.0,
            "instit_pct": 0.16186077202243485,
            "ambiguous_pct": 0.2931705707687232,
            "unobservable_pct": 0.3280765423952491,
            "unclear_pct": 0.6212471131639723,
            "retail_notional_pct": 0.025807704547844607,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6601354014635984,
            "unclear_notional_pct": 0.3140568939885571
          },
          "counts": {
            "trades": {
              "retail": 3640,
              "mixed": 0,
              "institutional": 33913,
              "ambiguous": 18983,
              "unobservable": 8425,
              "unclear": 27408
            },
            "runs": {
              "retail": 3287,
              "mixed": 0,
              "institutional": 2453,
              "ambiguous": 4443,
              "unobservable": 4972,
              "unclear": 9415
            }
          },
          "confidence": {
            "high": 0.035895743978884856,
            "medium": 0.19412735070933684,
            "low": 0.14872979214780602,
            "na": 0.6212471131639723
          },
          "confidence_counts": {
            "high": 544,
            "medium": 2942,
            "low": 2254,
            "na": 9415
          },
          "trade_confidence": {
            "high": 0.04427271747663983,
            "medium": 0.26974646326257296,
            "low": 0.26406613198688444,
            "na": 0.4219146872739028
          },
          "trade_confidence_counts": {
            "high": 2876,
            "medium": 17523,
            "low": 17154,
            "na": 27408
          },
          "observability": {
            "avg_feature_coverage": 0.6932893434510062,
            "observable_run_pct": 0.6719234576047509,
            "ambiguous_run_pct": 0.2931705707687232,
            "unobservable_run_pct": 0.3280765423952491
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Mixed, partly unobservable",
          "dominant_share": 0.3280765423952491,
          "dominance_gap": 0.03490597162652587,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 64961
            },
            "d2_information": {
              "UNOBSERVABLE": 64961
            },
            "d3_urgency": {
              "IMMEDIATE": 14336,
              "ADAPTIVE": 817,
              "SCHEDULED": 2
            },
            "participant_confidence": {
              "NA": 9415,
              "MEDIUM": 2942,
              "LOW": 2254,
              "HIGH": 544
            }
          },
          "trade_size": {
            "avg": 26944.497956928004,
            "median": 9430.0
          },
          "run_size": {
            "avg": 115495.97702276475,
            "median": 26460.0,
            "avg_length": 4.286440118772682
          },
          "recent_trades": [
            {
              "trade_id": "2428",
              "timestamp": "2026-04-01T07:59:56.278385",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2427",
              "timestamp": "2026-04-01T07:59:56.277949",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2426",
              "timestamp": "2026-04-01T07:59:56.277193",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2425",
              "timestamp": "2026-04-01T07:59:51.552128",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2424",
              "timestamp": "2026-04-01T07:59:49.041960",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2423",
              "timestamp": "2026-04-01T07:59:30.090780",
              "price": 9.02,
              "size": 3000.0,
              "notional": 27060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2422",
              "timestamp": "2026-04-01T07:59:28.012412",
              "price": 9.02,
              "size": 2000.0,
              "notional": 18040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2421",
              "timestamp": "2026-04-01T07:59:28.012412",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2420",
              "timestamp": "2026-04-01T07:59:25.427296",
              "price": 9.01,
              "size": 4000.0,
              "notional": 36040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2419",
              "timestamp": "2026-04-01T07:59:13.641827",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154840,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2418",
              "timestamp": "2026-04-01T07:59:12.659689",
              "price": 9.0,
              "size": 3000.0,
              "notional": 27000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154840,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2417",
              "timestamp": "2026-04-01T07:59:04.549538",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2416",
              "timestamp": "2026-04-01T07:59:00.351490",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2415",
              "timestamp": "2026-04-01T07:59:00.351490",
              "price": 9.01,
              "size": 2000.0,
              "notional": 18020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2414",
              "timestamp": "2026-04-01T07:58:36.154220",
              "price": 8.99,
              "size": 1000.0,
              "notional": 8990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 154838,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2413",
              "timestamp": "2026-04-01T07:58:30.825918",
              "price": 8.99,
              "size": 5000.0,
              "notional": 44950.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 154837,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2412",
              "timestamp": "2026-04-01T07:58:25.061779",
              "price": 8.99,
              "size": 11000.0,
              "notional": 98890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2411",
              "timestamp": "2026-04-01T07:58:24.393232",
              "price": 8.99,
              "size": 2000.0,
              "notional": 17980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2409",
              "timestamp": "2026-04-01T07:58:19.524001",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2408",
              "timestamp": "2026-04-01T07:58:18.844788",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2407",
              "timestamp": "2026-04-01T07:58:18.844788",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2406",
              "timestamp": "2026-04-01T07:58:14.115630",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2405",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2404",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 2000.0,
              "notional": 18020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2403",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 5000.0,
              "notional": 45050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2402",
              "timestamp": "2026-04-01T07:58:09.980724",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2401",
              "timestamp": "2026-04-01T07:58:09.980724",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2400",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2399",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2398",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 220120,
          "n_runs": 47312,
          "n_trade_days": 63,
          "first_trade_date": "2025-12-30",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.05810012720334363,
            "mixed_pct": 0.0,
            "instit_pct": 0.532636743594403,
            "ambiguous_pct": 0.3064646556423769,
            "unobservable_pct": 0.10279847355987642,
            "unclear_pct": 0.40926312920225333,
            "retail_qty_pct": 0.029522735430488004,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6643770743921609,
            "ambiguous_qty_pct": 0.2323560153789552,
            "unobservable_qty_pct": 0.07374417479839593,
            "unclear_qty_pct": 0.30610019017735113,
            "retail_notional_pct": 0.029343802723866455,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6648598261866111,
            "ambiguous_notional_pct": 0.23187167963377017,
            "unobservable_notional_pct": 0.07392469145575231,
            "unclear_notional_pct": 0.3057963710895225
          },
          "run_composition": {
            "retail_pct": 0.2286946229286439,
            "mixed_pct": 0.0,
            "instit_pct": 0.16737825498816367,
            "ambiguous_pct": 0.3147404463983767,
            "unobservable_pct": 0.2891866756848157,
            "unclear_pct": 0.6039271220831924,
            "retail_notional_pct": 0.029343802723866455,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6648598261866111,
            "unclear_notional_pct": 0.3057963710895225
          },
          "counts": {
            "trades": {
              "retail": 12789,
              "mixed": 0,
              "institutional": 117244,
              "ambiguous": 67459,
              "unobservable": 22628,
              "unclear": 90087
            },
            "runs": {
              "retail": 10820,
              "mixed": 0,
              "institutional": 7919,
              "ambiguous": 14891,
              "unobservable": 13682,
              "unclear": 28573
            }
          },
          "confidence": {
            "high": 0.033818058843422386,
            "medium": 0.20635356780520797,
            "low": 0.1559012512681772,
            "na": 0.6039271220831924
          },
          "confidence_counts": {
            "high": 1600,
            "medium": 9763,
            "low": 7376,
            "na": 28573
          },
          "trade_confidence": {
            "high": 0.022292385971288388,
            "medium": 0.31841722696710884,
            "low": 0.2500272578593494,
            "na": 0.40926312920225333
          },
          "trade_confidence_counts": {
            "high": 4907,
            "medium": 70090,
            "low": 55036,
            "na": 90087
          },
          "observability": {
            "avg_feature_coverage": 0.7037728271897193,
            "observable_run_pct": 0.7108133243151843,
            "ambiguous_run_pct": 0.3147404463983767,
            "unobservable_run_pct": 0.2891866756848157
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.3147404463983767,
          "dominance_gap": 0.02555377071356102,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 220120
            },
            "d2_information": {
              "UNOBSERVABLE": 220120
            },
            "d3_urgency": {
              "IMMEDIATE": 44192,
              "ADAPTIVE": 3108,
              "SCHEDULED": 11,
              "OPPORTUNISTIC": 1
            },
            "participant_confidence": {
              "NA": 28573,
              "MEDIUM": 9763,
              "LOW": 7376,
              "HIGH": 1600
            }
          },
          "trade_size": {
            "avg": 27263.11111098492,
            "median": 10220.0
          },
          "run_size": {
            "avg": 126842.15458551742,
            "median": 28230.0,
            "avg_length": 4.6525194453838346
          },
          "recent_trades": [
            {
              "trade_id": "2428",
              "timestamp": "2026-04-01T07:59:56.278385",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2427",
              "timestamp": "2026-04-01T07:59:56.277949",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2426",
              "timestamp": "2026-04-01T07:59:56.277193",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2425",
              "timestamp": "2026-04-01T07:59:51.552128",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2424",
              "timestamp": "2026-04-01T07:59:49.041960",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2423",
              "timestamp": "2026-04-01T07:59:30.090780",
              "price": 9.02,
              "size": 3000.0,
              "notional": 27060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2422",
              "timestamp": "2026-04-01T07:59:28.012412",
              "price": 9.02,
              "size": 2000.0,
              "notional": 18040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2421",
              "timestamp": "2026-04-01T07:59:28.012412",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2420",
              "timestamp": "2026-04-01T07:59:25.427296",
              "price": 9.01,
              "size": 4000.0,
              "notional": 36040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2419",
              "timestamp": "2026-04-01T07:59:13.641827",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154840,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2418",
              "timestamp": "2026-04-01T07:59:12.659689",
              "price": 9.0,
              "size": 3000.0,
              "notional": 27000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154840,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2417",
              "timestamp": "2026-04-01T07:59:04.549538",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2416",
              "timestamp": "2026-04-01T07:59:00.351490",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2415",
              "timestamp": "2026-04-01T07:59:00.351490",
              "price": 9.01,
              "size": 2000.0,
              "notional": 18020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2414",
              "timestamp": "2026-04-01T07:58:36.154220",
              "price": 8.99,
              "size": 1000.0,
              "notional": 8990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 154838,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2413",
              "timestamp": "2026-04-01T07:58:30.825918",
              "price": 8.99,
              "size": 5000.0,
              "notional": 44950.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 154837,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2412",
              "timestamp": "2026-04-01T07:58:25.061779",
              "price": 8.99,
              "size": 11000.0,
              "notional": 98890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2411",
              "timestamp": "2026-04-01T07:58:24.393232",
              "price": 8.99,
              "size": 2000.0,
              "notional": 17980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2409",
              "timestamp": "2026-04-01T07:58:19.524001",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2408",
              "timestamp": "2026-04-01T07:58:18.844788",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2407",
              "timestamp": "2026-04-01T07:58:18.844788",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2406",
              "timestamp": "2026-04-01T07:58:14.115630",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2405",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2404",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 2000.0,
              "notional": 18020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2403",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 5000.0,
              "notional": 45050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2402",
              "timestamp": "2026-04-01T07:58:09.980724",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2401",
              "timestamp": "2026-04-01T07:58:09.980724",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2400",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2399",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2398",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 399193,
          "n_runs": 95424,
          "n_trade_days": 126,
          "first_trade_date": "2025-09-17",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.055474419641626985,
            "mixed_pct": 0.0,
            "instit_pct": 0.5231078701279832,
            "ambiguous_pct": 0.29514545595739405,
            "unobservable_pct": 0.12627225427299577,
            "unclear_pct": 0.4214177102303898,
            "retail_qty_pct": 0.02819902089780169,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6562541065662068,
            "ambiguous_qty_pct": 0.22541001582315068,
            "unobservable_qty_pct": 0.09013685671284088,
            "unclear_qty_pct": 0.31554687253599156,
            "retail_notional_pct": 0.028042153681601255,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6568799260322071,
            "ambiguous_notional_pct": 0.22522190879605147,
            "unobservable_notional_pct": 0.08985601149014022,
            "unclear_notional_pct": 0.3150779202861917
          },
          "run_composition": {
            "retail_pct": 0.2025381455399061,
            "mixed_pct": 0.0,
            "instit_pct": 0.16287307176391683,
            "ambiguous_pct": 0.29663397048960427,
            "unobservable_pct": 0.33795481220657275,
            "unclear_pct": 0.634588782696177,
            "retail_notional_pct": 0.028042153681601255,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6568799260322071,
            "unclear_notional_pct": 0.3150779202861917
          },
          "counts": {
            "trades": {
              "retail": 22145,
              "mixed": 0,
              "institutional": 208821,
              "ambiguous": 117820,
              "unobservable": 50407,
              "unclear": 168227
            },
            "runs": {
              "retail": 19327,
              "mixed": 0,
              "institutional": 15542,
              "ambiguous": 28306,
              "unobservable": 32249,
              "unclear": 60555
            }
          },
          "confidence": {
            "high": 0.047367538564721666,
            "medium": 0.1956426056338028,
            "low": 0.12240107310529846,
            "na": 0.634588782696177
          },
          "confidence_counts": {
            "high": 4520,
            "medium": 18669,
            "low": 11680,
            "na": 60555
          },
          "trade_confidence": {
            "high": 0.047192711295037736,
            "medium": 0.31447194715338195,
            "low": 0.2169176313211905,
            "na": 0.4214177102303898
          },
          "trade_confidence_counts": {
            "high": 18839,
            "medium": 125535,
            "low": 86592,
            "na": 168227
          },
          "observability": {
            "avg_feature_coverage": 0.6918458668678739,
            "observable_run_pct": 0.6620451877934272,
            "ambiguous_run_pct": 0.29663397048960427,
            "unobservable_run_pct": 0.33795481220657275
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Mixed, partly unobservable",
          "dominant_share": 0.33795481220657275,
          "dominance_gap": 0.04132084171696848,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 399193
            },
            "d2_information": {
              "UNOBSERVABLE": 399193
            },
            "d3_urgency": {
              "IMMEDIATE": 89770,
              "ADAPTIVE": 5639,
              "SCHEDULED": 14,
              "OPPORTUNISTIC": 1
            },
            "participant_confidence": {
              "NA": 60555,
              "MEDIUM": 18669,
              "LOW": 11680,
              "HIGH": 4520
            }
          },
          "trade_size": {
            "avg": 25891.76535923726,
            "median": 9970.0
          },
          "run_size": {
            "avg": 108314.59055426306,
            "median": 26369.999999999996,
            "avg_length": 4.183360580147552
          },
          "recent_trades": [
            {
              "trade_id": "2428",
              "timestamp": "2026-04-01T07:59:56.278385",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2427",
              "timestamp": "2026-04-01T07:59:56.277949",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2426",
              "timestamp": "2026-04-01T07:59:56.277193",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2425",
              "timestamp": "2026-04-01T07:59:51.552128",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2424",
              "timestamp": "2026-04-01T07:59:49.041960",
              "price": 9.02,
              "size": 1000.0,
              "notional": 9020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154842,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2423",
              "timestamp": "2026-04-01T07:59:30.090780",
              "price": 9.02,
              "size": 3000.0,
              "notional": 27060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2422",
              "timestamp": "2026-04-01T07:59:28.012412",
              "price": 9.02,
              "size": 2000.0,
              "notional": 18040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2421",
              "timestamp": "2026-04-01T07:59:28.012412",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2420",
              "timestamp": "2026-04-01T07:59:25.427296",
              "price": 9.01,
              "size": 4000.0,
              "notional": 36040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154841,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2419",
              "timestamp": "2026-04-01T07:59:13.641827",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154840,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2418",
              "timestamp": "2026-04-01T07:59:12.659689",
              "price": 9.0,
              "size": 3000.0,
              "notional": 27000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154840,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2417",
              "timestamp": "2026-04-01T07:59:04.549538",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2416",
              "timestamp": "2026-04-01T07:59:00.351490",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2415",
              "timestamp": "2026-04-01T07:59:00.351490",
              "price": 9.01,
              "size": 2000.0,
              "notional": 18020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 154839,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2414",
              "timestamp": "2026-04-01T07:58:36.154220",
              "price": 8.99,
              "size": 1000.0,
              "notional": 8990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 154838,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2413",
              "timestamp": "2026-04-01T07:58:30.825918",
              "price": 8.99,
              "size": 5000.0,
              "notional": 44950.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 154837,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2412",
              "timestamp": "2026-04-01T07:58:25.061779",
              "price": 8.99,
              "size": 11000.0,
              "notional": 98890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2411",
              "timestamp": "2026-04-01T07:58:24.393232",
              "price": 8.99,
              "size": 2000.0,
              "notional": 17980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2409",
              "timestamp": "2026-04-01T07:58:19.524001",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2408",
              "timestamp": "2026-04-01T07:58:18.844788",
              "price": 9.0,
              "size": 1000.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2407",
              "timestamp": "2026-04-01T07:58:18.844788",
              "price": 9.0,
              "size": 2000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2406",
              "timestamp": "2026-04-01T07:58:14.115630",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2405",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2404",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 2000.0,
              "notional": 18020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2403",
              "timestamp": "2026-04-01T07:58:14.114722",
              "price": 9.01,
              "size": 5000.0,
              "notional": 45050.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2402",
              "timestamp": "2026-04-01T07:58:09.980724",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2401",
              "timestamp": "2026-04-01T07:58:09.980724",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2400",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2399",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 1000.0,
              "notional": 9010.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "2398",
              "timestamp": "2026-04-01T07:58:08.570576",
              "price": 9.01,
              "size": 3000.0,
              "notional": 27030.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 154836,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 399193,
      "n_runs": 95424,
      "n_trade_days": 126,
      "first_trade_date": "2025-09-17",
      "last_trade_date": "2026-04-01",
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
        "retail_pct": 0.055474419641626985,
        "mixed_pct": 0.0,
        "instit_pct": 0.5231078701279832,
        "ambiguous_pct": 0.29514545595739405,
        "unobservable_pct": 0.12627225427299577,
        "unclear_pct": 0.4214177102303898,
        "retail_qty_pct": 0.02819902089780169,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.6562541065662068,
        "ambiguous_qty_pct": 0.22541001582315068,
        "unobservable_qty_pct": 0.09013685671284088,
        "unclear_qty_pct": 0.31554687253599156,
        "retail_notional_pct": 0.028042153681601255,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.6568799260322071,
        "ambiguous_notional_pct": 0.22522190879605147,
        "unobservable_notional_pct": 0.08985601149014022,
        "unclear_notional_pct": 0.3150779202861917
      },
      "run_composition": {
        "retail_pct": 0.2025381455399061,
        "mixed_pct": 0.0,
        "instit_pct": 0.16287307176391683,
        "ambiguous_pct": 0.29663397048960427,
        "unobservable_pct": 0.33795481220657275,
        "unclear_pct": 0.634588782696177
      },
      "trade_size": {
        "avg": 25891.76535923726,
        "median": 9970.0
      },
      "run_size": {
        "avg": 108314.59055426306,
        "median": 26369.999999999996,
        "avg_length": 4.183360580147552
      },
      "confidence": {
        "high": 0.047367538564721666,
        "medium": 0.1956426056338028,
        "low": 0.12240107310529846,
        "na": 0.634588782696177
      },
      "confidence_counts": {
        "high": 4520,
        "medium": 18669,
        "low": 11680,
        "na": 60555
      },
      "trade_confidence": {
        "high": 0.047192711295037736,
        "medium": 0.31447194715338195,
        "low": 0.2169176313211905,
        "na": 0.4214177102303898
      },
      "trade_confidence_counts": {
        "high": 18839,
        "medium": 125535,
        "low": 86592,
        "na": 168227
      },
      "counts": {
        "trades": {
          "retail": 22145,
          "mixed": 0,
          "institutional": 208821,
          "ambiguous": 117820,
          "unobservable": 50407,
          "unclear": 168227
        },
        "runs": {
          "retail": 19327,
          "mixed": 0,
          "institutional": 15542,
          "ambiguous": 28306,
          "unobservable": 32249,
          "unclear": 60555
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6918458668678739,
        "observable_run_pct": 0.6620451877934272,
        "ambiguous_run_pct": 0.29663397048960427,
        "unobservable_run_pct": 0.33795481220657275
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Mixed, partly unobservable",
      "dominant_share": 0.33795481220657275,
      "dominance_gap": 0.04132084171696848,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 57470,
            "n_runs": 13756,
            "retail_pct": 0.04753784583260832,
            "mixed_pct": 0.0,
            "instit_pct": 0.5236297198538368,
            "ambiguous_pct": 0.29123020706455544,
            "unobservable_pct": 0.13760222724899948,
            "unclear_pct": 0.4288324343135549,
            "avg_trade_size": 24514.915150861314,
            "avg_run_notional": 102418.73900261702,
            "retail_qty_pct": 0.02315391616161889,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6492801188672853,
            "ambiguous_qty_pct": 0.22766788609665392,
            "unobservable_qty_pct": 0.09989807887444188,
            "unclear_qty_pct": 0.3275659649710958,
            "retail_notional_pct": 0.02286166106535742,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6497795664973778,
            "ambiguous_notional_pct": 0.22721156209280008,
            "unobservable_notional_pct": 0.10014721034446467,
            "unclear_notional_pct": 0.32735877243726474,
            "run_retail_pct": 0.17955801104972377,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.16196568769991276,
            "run_ambiguous_pct": 0.29369002617039836,
            "run_unobservable_pct": 0.3647862750799651,
            "run_unclear_pct": 0.6584763012503634,
            "avg_feature_coverage": 0.686220558301832,
            "high_confidence_pct": 0.05619366094794999,
            "medium_confidence_pct": 0.20020354754289038,
            "low_confidence_pct": 0.08512649025879616,
            "na_confidence_pct": 0.6584763012503635,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 36636,
            "n_runs": 10217,
            "retail_pct": 0.052052625832514465,
            "mixed_pct": 0.0,
            "instit_pct": 0.5155311715252757,
            "ambiguous_pct": 0.25401244677366525,
            "unobservable_pct": 0.1784037558685446,
            "unclear_pct": 0.4324162026422098,
            "avg_trade_size": 22398.58557593624,
            "avg_run_notional": 80316.5881530782,
            "retail_qty_pct": 0.029275580230736408,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6359552418257464,
            "ambiguous_qty_pct": 0.2057795627473527,
            "unobservable_qty_pct": 0.12898961519616456,
            "unclear_qty_pct": 0.33476917794351724,
            "retail_notional_pct": 0.029036169781084885,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6368077551905145,
            "ambiguous_notional_pct": 0.20497401427173717,
            "unobservable_notional_pct": 0.12918206075666355,
            "unclear_notional_pct": 0.3341560750284007,
            "run_retail_pct": 0.16854262503670353,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1645297053929725,
            "run_ambiguous_pct": 0.2476265048448664,
            "run_unobservable_pct": 0.4193011647254576,
            "run_unclear_pct": 0.666927669570324,
            "avg_feature_coverage": 0.6722668102182637,
            "high_confidence_pct": 0.05001468141333072,
            "medium_confidence_pct": 0.18469217970049917,
            "low_confidence_pct": 0.09836546931584614,
            "na_confidence_pct": 0.666927669570324,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 93398,
            "n_runs": 17797,
            "retail_pct": 0.06397353262382492,
            "mixed_pct": 0.0,
            "instit_pct": 0.5358037645345725,
            "ambiguous_pct": 0.33479303625345297,
            "unobservable_pct": 0.06542966658814964,
            "unclear_pct": 0.4002227028416026,
            "avg_trade_size": 27603.4002009679,
            "avg_run_notional": 144861.62678934654,
            "retail_qty_pct": 0.035209916421501314,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6658104559390663,
            "ambiguous_qty_pct": 0.25422026481102666,
            "unobservable_qty_pct": 0.04475936282840571,
            "unclear_qty_pct": 0.29897962763943237,
            "retail_notional_pct": 0.03496972637712196,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6662930307059152,
            "ambiguous_notional_pct": 0.2540132560289271,
            "unobservable_notional_pct": 0.044723986888035694,
            "unclear_notional_pct": 0.2987372429169628,
            "run_retail_pct": 0.26762937573748385,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1633421363151093,
            "run_ambiguous_pct": 0.3571388436253301,
            "run_unobservable_pct": 0.21188964432207674,
            "run_unclear_pct": 0.5690284879474068,
            "avg_feature_coverage": 0.7239703320784402,
            "high_confidence_pct": 0.026296566837107377,
            "medium_confidence_pct": 0.22734168680114625,
            "low_confidence_pct": 0.1773332584143395,
            "na_confidence_pct": 0.5690284879474069,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 51603,
            "n_runs": 11841,
            "retail_pct": 0.05119857372633374,
            "mixed_pct": 0.0,
            "instit_pct": 0.5424103249811058,
            "ambiguous_pct": 0.2804488111156328,
            "unobservable_pct": 0.1259422901769277,
            "unclear_pct": 0.4063911012925605,
            "avg_trade_size": 27215.941338294288,
            "avg_run_notional": 118606.89307322017,
            "retail_qty_pct": 0.024004497850445315,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6747878751237789,
            "ambiguous_qty_pct": 0.207492974107393,
            "unobservable_qty_pct": 0.0937146529183827,
            "unclear_qty_pct": 0.3012076270257757,
            "retail_notional_pct": 0.024189852506753925,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6746601677492424,
            "ambiguous_notional_pct": 0.20708220431983693,
            "unobservable_notional_pct": 0.0940677754241666,
            "unclear_notional_pct": 0.30114997974400354,
            "run_retail_pct": 0.1968583734481885,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1776876952960054,
            "run_ambiguous_pct": 0.29076936069588716,
            "run_unobservable_pct": 0.3346845705599189,
            "run_unclear_pct": 0.6254539312558061,
            "avg_feature_coverage": 0.6910438307575374,
            "high_confidence_pct": 0.04121273541086057,
            "medium_confidence_pct": 0.19896968161472847,
            "low_confidence_pct": 0.13436365171860484,
            "na_confidence_pct": 0.6254539312558061,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 69416,
            "n_runs": 16021,
            "retail_pct": 0.05635588336982828,
            "mixed_pct": 0.0,
            "instit_pct": 0.5227613230379163,
            "ambiguous_pct": 0.2927279013483923,
            "unobservable_pct": 0.1281548922438631,
            "unclear_pct": 0.42088279359225544,
            "avg_trade_size": 27343.6426655238,
            "avg_run_notional": 118474.89540415704,
            "retail_qty_pct": 0.02568256737807767,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6609237964732645,
            "ambiguous_qty_pct": 0.22103958390400574,
            "unobservable_qty_pct": 0.09235405224465207,
            "unclear_qty_pct": 0.3133936361486578,
            "retail_notional_pct": 0.025493951349109145,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.661223426070086,
            "ambiguous_notional_pct": 0.22084773812508884,
            "unobservable_notional_pct": 0.09243488445571597,
            "unclear_notional_pct": 0.3132826225808048,
            "run_retail_pct": 0.21852568503838712,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.16091380063666438,
            "run_ambiguous_pct": 0.29361463079707883,
            "run_unobservable_pct": 0.3269458835278697,
            "run_unclear_pct": 0.6205605143249485,
            "avg_feature_coverage": 0.6946164409212907,
            "high_confidence_pct": 0.03539104924786218,
            "medium_confidence_pct": 0.18975095187566318,
            "low_confidence_pct": 0.15429748455152612,
            "na_confidence_pct": 0.6205605143249485,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 2368,
            "n_runs": 711,
            "retail_pct": 0.03462837837837838,
            "mixed_pct": 0.0,
            "instit_pct": 0.4907094594594595,
            "ambiguous_pct": 0.27618243243243246,
            "unobservable_pct": 0.19847972972972974,
            "unclear_pct": 0.47466216216216217,
            "avg_trade_size": 22579.25668918919,
            "avg_run_notional": 75200.67488045007,
            "retail_qty_pct": 0.020351335250119014,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5841467121029147,
            "ambiguous_qty_pct": 0.2527723014607198,
            "unobservable_qty_pct": 0.14272965118624648,
            "unclear_qty_pct": 0.39550195264696625,
            "retail_notional_pct": 0.020377811291988915,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5837328287555632,
            "ambiguous_notional_pct": 0.2529739513754072,
            "unobservable_notional_pct": 0.14291540857704063,
            "unclear_notional_pct": 0.3958893599524478,
            "run_retail_pct": 0.10829817158931083,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18424753867791843,
            "run_ambiguous_pct": 0.25035161744022505,
            "run_unobservable_pct": 0.4571026722925457,
            "run_unclear_pct": 0.7074542897327707,
            "avg_feature_coverage": 0.6613924050632911,
            "high_confidence_pct": 0.09282700421940929,
            "medium_confidence_pct": 0.19971870604781997,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.7074542897327707,
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
          "trade_id": "2428",
          "timestamp": "2026-04-01T07:59:56.278385",
          "price": 9.02,
          "size": 1000.0,
          "notional": 9020.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 154842,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2427",
          "timestamp": "2026-04-01T07:59:56.277949",
          "price": 9.0,
          "size": 1000.0,
          "notional": 9000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 154842,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2426",
          "timestamp": "2026-04-01T07:59:56.277193",
          "price": 9.0,
          "size": 1000.0,
          "notional": 9000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 154842,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2425",
          "timestamp": "2026-04-01T07:59:51.552128",
          "price": 9.02,
          "size": 1000.0,
          "notional": 9020.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 154842,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2424",
          "timestamp": "2026-04-01T07:59:49.041960",
          "price": 9.02,
          "size": 1000.0,
          "notional": 9020.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 154842,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2423",
          "timestamp": "2026-04-01T07:59:30.090780",
          "price": 9.02,
          "size": 3000.0,
          "notional": 27060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154841,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2422",
          "timestamp": "2026-04-01T07:59:28.012412",
          "price": 9.02,
          "size": 2000.0,
          "notional": 18040.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154841,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2421",
          "timestamp": "2026-04-01T07:59:28.012412",
          "price": 9.01,
          "size": 1000.0,
          "notional": 9010.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154841,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2420",
          "timestamp": "2026-04-01T07:59:25.427296",
          "price": 9.01,
          "size": 4000.0,
          "notional": 36040.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154841,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2419",
          "timestamp": "2026-04-01T07:59:13.641827",
          "price": 9.01,
          "size": 1000.0,
          "notional": 9010.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 154840,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2418",
          "timestamp": "2026-04-01T07:59:12.659689",
          "price": 9.0,
          "size": 3000.0,
          "notional": 27000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 154840,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2417",
          "timestamp": "2026-04-01T07:59:04.549538",
          "price": 9.0,
          "size": 2000.0,
          "notional": 18000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 154839,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2416",
          "timestamp": "2026-04-01T07:59:00.351490",
          "price": 9.01,
          "size": 1000.0,
          "notional": 9010.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 154839,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2415",
          "timestamp": "2026-04-01T07:59:00.351490",
          "price": 9.01,
          "size": 2000.0,
          "notional": 18020.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 154839,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2414",
          "timestamp": "2026-04-01T07:58:36.154220",
          "price": 8.99,
          "size": 1000.0,
          "notional": 8990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 154838,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2413",
          "timestamp": "2026-04-01T07:58:30.825918",
          "price": 8.99,
          "size": 5000.0,
          "notional": 44950.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 154837,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2412",
          "timestamp": "2026-04-01T07:58:25.061779",
          "price": 8.99,
          "size": 11000.0,
          "notional": 98890.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2411",
          "timestamp": "2026-04-01T07:58:24.393232",
          "price": 8.99,
          "size": 2000.0,
          "notional": 17980.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2409",
          "timestamp": "2026-04-01T07:58:19.524001",
          "price": 9.0,
          "size": 2000.0,
          "notional": 18000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2408",
          "timestamp": "2026-04-01T07:58:18.844788",
          "price": 9.0,
          "size": 1000.0,
          "notional": 9000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2407",
          "timestamp": "2026-04-01T07:58:18.844788",
          "price": 9.0,
          "size": 2000.0,
          "notional": 18000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2406",
          "timestamp": "2026-04-01T07:58:14.115630",
          "price": 9.01,
          "size": 3000.0,
          "notional": 27030.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2405",
          "timestamp": "2026-04-01T07:58:14.114722",
          "price": 9.01,
          "size": 3000.0,
          "notional": 27030.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2404",
          "timestamp": "2026-04-01T07:58:14.114722",
          "price": 9.01,
          "size": 2000.0,
          "notional": 18020.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2403",
          "timestamp": "2026-04-01T07:58:14.114722",
          "price": 9.01,
          "size": 5000.0,
          "notional": 45050.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2402",
          "timestamp": "2026-04-01T07:58:09.980724",
          "price": 9.01,
          "size": 3000.0,
          "notional": 27030.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2401",
          "timestamp": "2026-04-01T07:58:09.980724",
          "price": 9.01,
          "size": 1000.0,
          "notional": 9010.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2400",
          "timestamp": "2026-04-01T07:58:08.570576",
          "price": 9.01,
          "size": 1000.0,
          "notional": 9010.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2399",
          "timestamp": "2026-04-01T07:58:08.570576",
          "price": 9.01,
          "size": 1000.0,
          "notional": 9010.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "2398",
          "timestamp": "2026-04-01T07:58:08.570576",
          "price": 9.01,
          "size": 3000.0,
          "notional": 27030.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 154836,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
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
      "total_trades": 399192,
      "price_moving_trades": 68995,
      "pct_price_moving": 17.283662999258503,
      "all_movers": {
        "count": 68995,
        "avg_size": 22398.389381984198,
        "median_size": 9430.0,
        "retail_count": 8026,
        "mixed_count": 0,
        "institutional_count": 23285,
        "ambiguous_count": 26298,
        "unobservable_count": 11386,
        "retail_pct": 11.632727009203565,
        "mixed_pct": 0.0,
        "instit_pct": 33.74882237843322,
        "unclear_pct": 54.61845061236321
      },
      "positive_movers": {
        "count": 34287,
        "avg_size": 21704.04750138537,
        "median_size": 9410.0,
        "retail_count": 423,
        "mixed_count": 0,
        "institutional_count": 11764,
        "ambiguous_count": 11616,
        "unobservable_count": 10484,
        "retail_pct": 1.233703736109896,
        "mixed_pct": 0.0,
        "instit_pct": 34.31038002741564,
        "unclear_pct": 64.45591623647447
      },
      "negative_movers": {
        "count": 34708,
        "avg_size": 23084.30905641351,
        "median_size": 9470.0,
        "retail_count": 7603,
        "mixed_count": 0,
        "institutional_count": 11521,
        "ambiguous_count": 14682,
        "unobservable_count": 902,
        "retail_pct": 21.905612538895934,
        "mixed_pct": 0.0,
        "instit_pct": 33.19407629364988,
        "unclear_pct": 44.90031116745419
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
          "opening": 0.007378335097217093,
          "continuous": 0.8433537326890513,
          "closing": 0.11445710443390589,
          "auctions": 0.12183543953112298,
          "other": 0.034810827779825845
        },
        "1M": {
          "opening": 0.003996676698213642,
          "continuous": 0.8327217933620221,
          "closing": 0.11260906429591398,
          "auctions": 0.11660574099412763,
          "other": 0.050672465643850424
        },
        "3M": {
          "opening": 0.0021824064041249883,
          "continuous": 0.8578259453309947,
          "closing": 0.09430089078238227,
          "auctions": 0.09648329718650725,
          "other": 0.04569075748249808
        },
        "6M": {
          "opening": 0.001791081635812642,
          "continuous": 0.8556259085357077,
          "closing": 0.09713721849752574,
          "auctions": 0.09892830013333838,
          "other": 0.045445791330953944
        }
      },
      "hhi": {
        "1D": 0.11620534798057795,
        "1M": 0.11888749746227126,
        "3M": 0.11364063629685092,
        "6M": 0.11233261462849177
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0018
        },
        {
          "time": "09:30",
          "avg_share": 0.1128
        },
        {
          "time": "10:00",
          "avg_share": 0.0631
        },
        {
          "time": "10:30",
          "avg_share": 0.0586
        },
        {
          "time": "11:00",
          "avg_share": 0.0571
        },
        {
          "time": "11:30",
          "avg_share": 0.0407
        },
        {
          "time": "12:00",
          "avg_share": 0.1389
        },
        {
          "time": "13:00",
          "avg_share": 0.0647
        },
        {
          "time": "13:30",
          "avg_share": 0.0492
        },
        {
          "time": "14:00",
          "avg_share": 0.0674
        },
        {
          "time": "14:30",
          "avg_share": 0.0653
        },
        {
          "time": "15:00",
          "avg_share": 0.0783
        },
        {
          "time": "15:30",
          "avg_share": 0.1208
        },
        {
          "time": "16:00",
          "avg_share": 0.0814
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "101",
          "auctions_pct": 8.655900360704779,
          "hhi": 0.11355114980159631,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "1972",
          "auctions_pct": 14.005413888056154,
          "hhi": 0.1293123018920254,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1997",
          "auctions_pct": 19.02539134636205,
          "hhi": 0.1333120900753519,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "14",
          "auctions_pct": 14.129260229445192,
          "hhi": 0.13494525216132422,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "10",
          "auctions_pct": 17.061057387409846,
          "hhi": 0.16060388936003797,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "41",
          "auctions_pct": 5.395713374484849,
          "hhi": 0.1790235951617653,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "71",
          "auctions_pct": 1.0304610684867113,
          "hhi": 0.2960367804090543,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2007",
          "auctions_pct": 4.315728031671414,
          "hhi": 0.17030243909929751,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1908",
          "auctions_pct": 8.21179549851931,
          "hhi": 0.13542245116380522,
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
