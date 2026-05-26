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
      "marketCap": 9650800000.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "6088",
      "name": "FIT HON TENG",
      "marketCap": 72014862319.92,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "6613",
      "name": "LENS",
      "marketCap": 6236988736.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "2382",
      "name": "SUNNY OPTICAL",
      "marketCap": 70348504960.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "2018",
      "name": "AAC TECH",
      "marketCap": 45727444320.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "1415",
      "name": "COWELL",
      "marketCap": 27516956544.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "1478",
      "name": "Q TECH",
      "marketCap": 10713023265.75,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "3808",
      "name": "SINOTRUK",
      "marketCap": 106298243551.5,
      "sector": "Commercial Vehicles & Trucks",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "2050",
      "name": "SANHUA",
      "marketCap": 16783612008.0,
      "sector": "Industrial Components & Equipment",
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
    "asof_date": "2026-05-11",
    "industry": "Industrials - Industrial Engineering",
    "sector": "Electronic Components",
    "market_cap_display": "9.7B",
    "market_cap_category": "large",
    "universe_total": 2570,
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
          "score_pca": 97.7431906614786,
          "score_pca_percentile": 97.7431906614786,
          "rank_pca": 59,
          "total": 2570,
          "adv_notional_sgd": 471525500.0,
          "adv_volume_shares": 2247500.0,
          "free_float_shares": 32518456.0,
          "turnover_ratio": 0.06911459756883906,
          "votes": 8030.0,
          "trades": 8030.0,
          "spread_pct": 0.0031142292032119933,
          "spread_ticks": 3.2642595063375586,
          "amihud": 1.4931994826431696e-10,
          "volatility": 0.8303272785333138
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5376756251945368,
          "loadings": {
            "log_adv": 0.5406567182892426,
            "log_trades": 0.5009940328471856,
            "log_turnover": 0.5005485489370146,
            "neg_spread": 0.38957308749347613,
            "neg_amihud": 0.05177178254428196,
            "neg_vol": -0.22737399633699676
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
          "peer_median_adv": 446827758.0,
          "peer_median_score_pca": 94.94163424124514,
          "peer_median_trades": 12360.0,
          "peer_median_volatility": 0.5189514358832102,
          "peer_median_spread_pct": 0.0013017522849739756,
          "peer_median_spread_ticks": 1.4919755292195158,
          "peer_median_amihud": 5.037471709892405e-11,
          "peer_median_turnover_ratio": 0.021453092149928514,
          "target_vs_peer": {
            "score_pca_delta": 2.8,
            "adv_delta_pct": 5.5,
            "trades_delta_pct": -35.03,
            "volatility_delta_pct": -60.0,
            "spread_pct_delta_pct": -139.23,
            "spread_ticks_delta_pct": 118.79,
            "amihud_delta_pct": -196.42,
            "turnover_ratio_delta_pct": 222.17
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1989",
            "score_pca": 97.7431906614786,
            "rank_pca": 59,
            "adv": 471525500.0,
            "trades": 8030.0,
            "volatility": 0.8303272785333138,
            "spread_pct": 0.0031142292032119933,
            "spread_ticks": 3.2642595063375586,
            "amihud": 1.4931994826431696e-10,
            "turnover_ratio": 0.06911459756883906,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 99.37743190661479,
            "rank_pca": 17,
            "adv": 1269869400.0,
            "trades": 24390.0,
            "volatility": 0.9443041713263807,
            "spread_pct": 0.0013766483747429071,
            "spread_ticks": null,
            "amihud": 6.764717985994498e-11,
            "turnover_ratio": 0.07516591110850754,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 99.14396887159533,
            "rank_pca": 23,
            "adv": 643908010.68,
            "trades": 20293.0,
            "volatility": 0.9853901715046849,
            "spread_pct": 0.0012268561952050443,
            "spread_ticks": null,
            "amihud": 9.821134929404721e-11,
            "turnover_ratio": 0.11296237573998485,
            "is_target": false
          },
          {
            "ticker": "2382",
            "score_pca": 98.3657587548638,
            "rank_pca": 43,
            "adv": 1120149040.0,
            "trades": 21800.0,
            "volatility": 0.5815430274349506,
            "spread_pct": 0.0009125684376192233,
            "spread_ticks": 1.1721126484152684,
            "amihud": 3.041923249255656e-11,
            "turnover_ratio": 0.027312719707744074,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 92.60700389105058,
            "rank_pca": 191,
            "adv": 263229210.24,
            "trades": 6425.0,
            "volatility": 0.47210620149103494,
            "spread_pct": 0.0012197549376819134,
            "spread_ticks": null,
            "amihud": 3.310225433790311e-11,
            "turnover_ratio": 0.009257483102320758,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 88.91050583657587,
            "rank_pca": 286,
            "adv": 129000960.0,
            "trades": 2270.0,
            "volatility": 0.5657966702753855,
            "spread_pct": 0.003594334644478002,
            "spread_ticks": null,
            "amihud": 7.271932735539075e-11,
            "turnover_ratio": 0.015593464592112954,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 83.26848249027238,
            "rank_pca": 431,
            "adv": 50789673.870000005,
            "trades": 2046.0,
            "volatility": 0.27728347428124445,
            "spread_pct": 0.002026558377361518,
            "spread_ticks": 1.8118384100237632,
            "amihud": 2.1707873833499628e-10,
            "turnover_ratio": 0.012849705480686622,
            "is_target": false
          },
          {
            "ticker": "3808",
            "score_pca": 92.80155642023347,
            "rank_pca": 186,
            "adv": 309609300.0,
            "trades": 7900.0,
            "volatility": 0.34798072966917576,
            "spread_pct": 0.0015469908641523027,
            "spread_ticks": null,
            "amihud": 6.725407889023648e-12,
            "turnover_ratio": 0.010043611677913546,
            "is_target": false
          },
          {
            "ticker": "2050",
            "score_pca": 97.08171206225681,
            "rank_pca": 76,
            "adv": 584046216.0,
            "trades": 16820.0,
            "volatility": 0.3270213372790334,
            "spread_pct": 0.0008920391378776553,
            "spread_ticks": null,
            "amihud": 1.5416484135581235e-11,
            "turnover_ratio": 0.04452571207629849,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4973404070736909,
              "median": 0.35313717009689455,
              "min": 0.0,
              "max": 8.346380628758805,
              "p5": 0.0,
              "p95": 1.469613012006543,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 76147763.171594,
              "median": 355230.0,
              "min": 0.0,
              "max": 12911991840.0,
              "p5": 0.0,
              "p95": 345490467.99999946,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0441877635081615,
              "median": 0.024028883614192684,
              "min": 0.0004578800251034113,
              "max": 1.2705087700185207,
              "p5": 0.0013609149485816327,
              "p95": 0.14339663449391074,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006894077958596212,
              "median": 0.0014144385889136152,
              "min": 0.0,
              "max": 1.462212623033101,
              "p5": 0.0,
              "p95": 0.02562525721826223,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.2672334352980934e-06,
              "median": 8.248606545935009e-09,
              "min": 0.0,
              "max": 0.002382697947214076,
              "p5": 0.0,
              "p95": 4.6966380551831105e-06,
              "count": 2279
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1380.9875486381322,
              "median": 32.0,
              "min": 0.0,
              "max": 83202.0,
              "p5": 0.0,
              "p95": 7374.549999999988,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5757994767973557,
              "median": 0.5546552039477237,
              "min": 0.0,
              "max": 1.2305706409562296,
              "p5": 0.0,
              "p95": 1.1450347897344162,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 168929775.62291667,
              "median": 4383760.0,
              "min": 0.0,
              "max": 1269869400.0,
              "p5": 4630.0,
              "p95": 1048712885.6019989,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.038632687320980956,
              "median": 0.017659244680768446,
              "min": 0.0009125684376192233,
              "max": 0.34508348794063076,
              "p5": 0.001220820126310383,
              "p95": 0.13492527118331393,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0193737414943633,
              "median": 0.008095640001109676,
              "min": 0.0,
              "max": 0.11296237573998485,
              "p5": 9.41077295993085e-05,
              "p95": 0.07425821407755726,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.3961134570860973e-07,
              "median": 3.889726842715771e-09,
              "min": 0.0,
              "max": 4.830917874396118e-06,
              "p5": 3.0687534677091215e-11,
              "p95": 2.8779811921876905e-07,
              "count": 23
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3712.0,
              "median": 168.5,
              "min": 0.0,
              "max": 24390.0,
              "p5": 1.7500000000000007,
              "p95": 21573.949999999997,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 546325226.34875,
              "median": 446827758.0,
              "min": 50789673.870000005,
              "max": 1269869400.0,
              "p5": 78163624.01550001,
              "p95": 1217467274.0,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 12743.0,
              "median": 12360.0,
              "min": 2046.0,
              "max": 24390.0,
              "p5": 2124.4,
              "p95": 23483.5,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5626782229077363,
              "median": 0.5189514358832102,
              "min": 0.27728347428124445,
              "max": 0.9853901715046849,
              "p5": 0.2946917263304706,
              "p95": 0.9710100714422784,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0015994688711398206,
              "median": 0.0013017522849739756,
              "min": 0.0008920391378776553,
              "max": 0.003594334644478002,
              "p5": 0.0008992243927872041,
              "p95": 0.0030456129509872317,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.766499671243046e-11,
              "median": 5.037471709892405e-11,
              "min": 6.725407889023648e-12,
              "max": 2.1707873833499628e-10,
              "p5": 9.767284575318803e-12,
              "p95": 1.7547515217066405e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0384638729356961,
              "median": 0.021453092149928514,
              "min": 0.009257483102320758,
              "max": 0.11296237573998485,
              "p5": 0.009532628103778234,
              "p95": 0.09973361311896778,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.4919755292195158,
              "median": 1.4919755292195158,
              "min": 1.1721126484152684,
              "max": 1.8118384100237632,
              "p5": 1.204098936495693,
              "p95": 1.7798521219433385,
              "count": 2
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.07040816326530619,
            "market": 0.0058650586380804,
            "sector": 0.005893060295790509,
            "peers": -0.003460845197337581,
            "vs_market": 0.06454310462722579,
            "vs_sector": 0.06451510296951568,
            "vs_peers": 0.07386900846264377
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 96.80933852140078,
          "score_pca_percentile": 96.80933852140078,
          "rank_pca": 83,
          "total": 2570,
          "adv_notional_sgd": 401520000.0,
          "adv_volume_shares": 1912000.0,
          "free_float_shares": 32518456.0,
          "turnover_ratio": 0.058797379555782105,
          "votes": 6708.0,
          "trades": 6708.0,
          "spread_pct": 0.003671470783805311,
          "spread_ticks": 4.0964289675058225,
          "amihud": 1.9575049172523518e-10,
          "volatility": 1.3027108425474005
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.536164140270072,
          "loadings": {
            "log_adv": 0.5437052257711609,
            "log_trades": 0.5029030265179708,
            "log_turnover": 0.49102024519209586,
            "neg_spread": 0.4459021697653603,
            "neg_amihud": 0.10187082496315411,
            "neg_vol": 0.034145017492473555
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
          "peer_median_adv": 317115601.48,
          "peer_median_score_pca": 96.98443579766537,
          "peer_median_trades": 9021.5,
          "peer_median_volatility": 0.5225387979392683,
          "peer_median_spread_pct": 0.001444591314624535,
          "peer_median_spread_ticks": 1.5867787144802332,
          "peer_median_amihud": 7.018325360766786e-11,
          "peer_median_turnover_ratio": 0.01715518132797117,
          "target_vs_peer": {
            "score_pca_delta": -0.18,
            "adv_delta_pct": 26.6,
            "trades_delta_pct": -25.64,
            "volatility_delta_pct": -149.3,
            "spread_pct_delta_pct": -154.15,
            "spread_ticks_delta_pct": 158.16,
            "amihud_delta_pct": -178.91,
            "turnover_ratio_delta_pct": 242.74
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1989",
            "score_pca": 96.80933852140078,
            "rank_pca": 83,
            "adv": 401520000.0,
            "trades": 6708.0,
            "volatility": 1.3027108425474005,
            "spread_pct": 0.003671470783805311,
            "spread_ticks": 4.0964289675058225,
            "amihud": 1.9575049172523518e-10,
            "turnover_ratio": 0.058797379555782105,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 99.26070038910507,
            "rank_pca": 20,
            "adv": 767764053.12,
            "trades": 17438.0,
            "volatility": 0.7688197800044961,
            "spread_pct": 0.0017520168236987309,
            "spread_ticks": 1.5867787144802332,
            "amihud": 6.764717985994498e-11,
            "turnover_ratio": 0.054913155259136495,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 98.13229571984435,
            "rank_pca": 49,
            "adv": 324621902.96000004,
            "trades": 10143.0,
            "volatility": 0.5342321286192512,
            "spread_pct": 0.001137165805550339,
            "spread_ticks": null,
            "amihud": 1.3524437551332232e-10,
            "turnover_ratio": 0.06159570853456856,
            "is_target": false
          },
          {
            "ticker": "2382",
            "score_pca": 98.75486381322958,
            "rank_pca": 33,
            "adv": 720781215.0,
            "trades": 15801.0,
            "volatility": 0.3739485652935581,
            "spread_pct": 0.0008863995131633487,
            "spread_ticks": 1.1563579674728237,
            "amihud": 2.395632253993624e-11,
            "turnover_ratio": 0.017507758252259763,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 94.59143968871595,
            "rank_pca": 140,
            "adv": 269286750.36,
            "trades": 6425.0,
            "volatility": 0.5344941991390851,
            "spread_pct": 0.0011276946288209116,
            "spread_ticks": null,
            "amihud": 1.2396974163218285e-10,
            "turnover_ratio": 0.009877044868224834,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 90.38910505836576,
            "rank_pca": 248,
            "adv": 129000960.0,
            "trades": 2270.0,
            "volatility": 0.39237546319139854,
            "spread_pct": 0.003341653601491812,
            "spread_ticks": null,
            "amihud": 7.271932735539075e-11,
            "turnover_ratio": 0.015593464592112954,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 88.79377431906615,
            "rank_pca": 289,
            "adv": 62415720.0,
            "trades": 2234.0,
            "volatility": 0.5108454672592854,
            "spread_pct": 0.002026558377361518,
            "spread_ticks": 1.8118384100237632,
            "amihud": 5.682720242831048e-10,
            "turnover_ratio": 0.016802604403682572,
            "is_target": false
          },
          {
            "ticker": "3808",
            "score_pca": 95.83657587548639,
            "rank_pca": 108,
            "adv": 309609300.0,
            "trades": 7900.0,
            "volatility": 0.24046109987756825,
            "spread_pct": 0.0018728164862467853,
            "spread_ticks": null,
            "amihud": 2.327627913984797e-11,
            "turnover_ratio": 0.010043611677913546,
            "is_target": false
          },
          {
            "ticker": "2050",
            "score_pca": 99.1828793774319,
            "rank_pca": 22,
            "adv": 632317042.0,
            "trades": 17984.0,
            "volatility": 0.561074447855379,
            "spread_pct": 0.0009399324520872988,
            "spread_ticks": null,
            "amihud": 5.796573098798104e-11,
            "turnover_ratio": 0.0507413433861752,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6179665137478993,
              "median": 0.4281340047575918,
              "min": 0.0,
              "max": 11.237888961035182,
              "p5": 0.07335634849415656,
              "p95": 1.7201355340975615,
              "count": 2569
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 69986468.79723884,
              "median": 271170.0,
              "min": 0.0,
              "max": 12911991840.0,
              "p5": 0.0,
              "p95": 271231852.66199905,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04383375828035716,
              "median": 0.026911678572613416,
              "min": 0.0004578800251034113,
              "max": 0.600790513833992,
              "p5": 0.0014246442212438159,
              "p95": 0.1400421352506986,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0049356849705152,
              "median": 0.0011590456516397786,
              "min": 0.0,
              "max": 0.2582205535454848,
              "p5": 0.0,
              "p95": 0.01971366337425813,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.9681601901799077e-06,
              "median": 3.015304721870694e-08,
              "min": 0.0,
              "max": 0.002382697947214076,
              "p5": 0.0,
              "p95": 5.310110450297379e-06,
              "count": 2521
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1209.9385214007782,
              "median": 25.0,
              "min": 0.0,
              "max": 83202.0,
              "p5": 0.0,
              "p95": 6763.499999999992,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7817419099423999,
              "median": 0.590454968568445,
              "min": 0.15354033698917544,
              "max": 2.1699905322860857,
              "p5": 0.17771891556363345,
              "p95": 1.9861428181435552,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 113528930.51833333,
              "median": 2872092.0,
              "min": 0.0,
              "max": 767764053.12,
              "p5": 447.0000000000004,
              "p95": 672892032.7499993,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03184173669726567,
              "median": 0.018293642374912503,
              "min": 0.0008863995131633487,
              "max": 0.15108834827144682,
              "p5": 0.0011291153053303257,
              "p95": 0.1350783616153241,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.014364533076170555,
              "median": 0.010717021757219523,
              "min": 0.0,
              "max": 0.06159570853456856,
              "p5": 2.591680704937154e-05,
              "p95": 0.058214745911285254,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2574900627893993e-06,
              "median": 7.332544514978582e-09,
              "min": 2.395632253993624e-11,
              "max": 2.4952675959387362e-05,
              "p5": 6.840800198426184e-11,
              "p95": 2.367358478393683e-06,
              "count": 24
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2653.8333333333335,
              "median": 125.5,
              "min": 0.0,
              "max": 17438.0,
              "p5": 0.6000000000000005,
              "p95": 14952.299999999988,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 401974617.93,
              "median": 317115601.48,
              "min": 62415720.0,
              "max": 767764053.12,
              "p5": 85720554.0,
              "p95": 751320059.778,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 10024.375,
              "median": 9021.5,
              "min": 2234.0,
              "max": 17984.0,
              "p5": 2246.6,
              "p95": 17792.9,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.48953139390500267,
              "median": 0.5225387979392683,
              "min": 0.24046109987756825,
              "max": 0.7688197800044961,
              "p5": 0.2871817127731647,
              "p95": 0.696108913752305,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.001635529711052593,
              "median": 0.001444591314624535,
              "min": 0.0008863995131633487,
              "max": 0.003341653601491812,
              "p5": 0.0009051360417867313,
              "p95": 0.0028813702730462083,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.51832503065894,
              "median": 1.5867787144802332,
              "min": 1.1563579674728237,
              "max": 1.8118384100237632,
              "p5": 1.1994000421735647,
              "p95": 1.7893324404694102,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3413137266396384e-10,
              "median": 7.018325360766786e-11,
              "min": 2.327627913984797e-11,
              "max": 5.682720242831048e-10,
              "p5": 2.3514294329878864e-11,
              "p95": 4.167123472136807e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.029634336371759242,
              "median": 0.01715518132797117,
              "min": 0.009877044868224834,
              "max": 0.06159570853456856,
              "p5": 0.009935343251615884,
              "p95": 0.059256814888167336,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.15021929824561409,
            "market": 0.023019799456921453,
            "sector": 0.026322022448189486,
            "peers": 0.019698126928947346,
            "vs_market": 0.12719949878869263,
            "vs_sector": 0.1238972757974246,
            "vs_peers": 0.13052117131666674
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 97.12062256809338,
          "score_pca_percentile": 97.12062256809338,
          "rank_pca": 75,
          "total": 2570,
          "adv_notional_sgd": 322701090.0,
          "adv_volume_shares": 1743750.0,
          "free_float_shares": 32518456.0,
          "turnover_ratio": 0.05362339466547858,
          "votes": 5769.5,
          "trades": 5769.5,
          "spread_pct": 0.0037337737438142343,
          "spread_ticks": 6.208199922023653,
          "amihud": 1.163738131439546e-10,
          "volatility": 0.9050939118008985
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5421537899416615,
          "loadings": {
            "log_adv": 0.541453849233108,
            "log_trades": 0.49991742428611974,
            "log_turnover": 0.48516069442277193,
            "neg_spread": 0.4604359978012063,
            "neg_amihud": 0.08914843347095623,
            "neg_vol": 0.03975735619326973
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
          "peer_median_adv": 282414122.35,
          "peer_median_score_pca": 96.55642023346303,
          "peer_median_trades": 7667.0,
          "peer_median_volatility": 0.6116677566848517,
          "peer_median_spread_pct": 0.001522960190797427,
          "peer_median_spread_ticks": 1.5466352355112751,
          "peer_median_amihud": 1.0248553675687456e-10,
          "peer_median_turnover_ratio": 0.018328344330119394,
          "target_vs_peer": {
            "score_pca_delta": 0.56,
            "adv_delta_pct": 14.3,
            "trades_delta_pct": -24.75,
            "volatility_delta_pct": -47.97,
            "spread_pct_delta_pct": -145.17,
            "spread_ticks_delta_pct": 301.4,
            "amihud_delta_pct": -13.55,
            "turnover_ratio_delta_pct": 192.57
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1989",
            "score_pca": 97.12062256809338,
            "rank_pca": 75,
            "adv": 322701090.0,
            "trades": 5769.5,
            "volatility": 0.9050939118008985,
            "spread_pct": 0.0037337737438142343,
            "spread_ticks": 6.208199922023653,
            "amihud": 1.163738131439546e-10,
            "turnover_ratio": 0.05362339466547858,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 98.91050583657588,
            "rank_pca": 29,
            "adv": 599604380.04,
            "trades": 13304.5,
            "volatility": 1.0413987264155795,
            "spread_pct": 0.0018650140537889478,
            "spread_ticks": 1.5466352355112751,
            "amihud": 9.802338274990937e-11,
            "turnover_ratio": 0.04128298308368847,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 96.73151750972762,
            "rank_pca": 85,
            "adv": 180548231.92000002,
            "trades": 6928.0,
            "volatility": 0.5765339408873997,
            "spread_pct": 0.0012132398224446186,
            "spread_ticks": null,
            "amihud": 1.7555525164153268e-10,
            "turnover_ratio": 0.03816072040365806,
            "is_target": false
          },
          {
            "ticker": "2382",
            "score_pca": 98.8715953307393,
            "rank_pca": 30,
            "adv": 723690722.5,
            "trades": 14952.5,
            "volatility": 0.5401667591751413,
            "spread_pct": 0.000873179494974696,
            "spread_ticks": 1.138277437744922,
            "amihud": 3.063621083150017e-11,
            "turnover_ratio": 0.017532876759109646,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 94.78599221789882,
            "rank_pca": 135,
            "adv": 246129165.12,
            "trades": 5922.0,
            "volatility": 0.6468015724823037,
            "spread_pct": 0.001290821812389874,
            "spread_ticks": null,
            "amihud": 1.1360308956551135e-10,
            "turnover_ratio": 0.009031979396618683,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 92.10116731517509,
            "rank_pca": 204,
            "adv": 156039073.0,
            "trades": 2606.5,
            "volatility": 0.7953607726865878,
            "spread_pct": 0.0032414940131292726,
            "spread_ticks": null,
            "amihud": 1.0694769076383975e-10,
            "turnover_ratio": 0.018451947314309103,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 89.92217898832685,
            "rank_pca": 260,
            "adv": 70388863.22,
            "trades": 2198.5,
            "volatility": 0.7075107499412822,
            "spread_pct": 0.002295917540127727,
            "spread_ticks": 1.933645637544229,
            "amihud": 6.338981420450689e-10,
            "turnover_ratio": 0.018204741345929688,
            "is_target": false
          },
          {
            "ticker": "3808",
            "score_pca": 96.38132295719845,
            "rank_pca": 94,
            "adv": 318699079.58,
            "trades": 8406.0,
            "volatility": 0.4362740060368476,
            "spread_pct": 0.0017550985692049799,
            "spread_ticks": null,
            "amihud": 6.268031572943231e-11,
            "turnover_ratio": 0.010188186082179206,
            "is_target": false
          },
          {
            "ticker": "2050",
            "score_pca": 99.22178988326849,
            "rank_pca": 21,
            "adv": 554555323.0,
            "trades": 15146.0,
            "volatility": 0.49442570987310336,
            "spread_pct": 0.000982821379411761,
            "spread_ticks": null,
            "amihud": 7.165742894491608e-11,
            "turnover_ratio": 0.044360447007775916,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.651956817237412,
              "median": 0.47245477092825405,
              "min": 0.0,
              "max": 10.248597451755739,
              "p5": 0.1296121317729516,
              "p95": 1.67548466106511,
              "count": 2569
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 64262713.872858554,
              "median": 238217.5,
              "min": 0.0,
              "max": 12563491130.0,
              "p5": 0.0,
              "p95": 239705941.62549868,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04426484168812618,
              "median": 0.027627758115354402,
              "min": 0.00045621210006606725,
              "max": 0.6158641972336829,
              "p5": 0.0014716224286573315,
              "p95": 0.14267726443290585,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0043609304516051125,
              "median": 0.0010066138036813799,
              "min": 0.0,
              "max": 0.2407420695209901,
              "p5": 0.0,
              "p95": 0.017256419721854016,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.428421594915902e-06,
              "median": 3.9842502924491544e-08,
              "min": 0.0,
              "max": 0.002382697947214076,
              "p5": 1.5185367280105103e-11,
              "p95": 4.787706159975464e-06,
              "count": 2544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1099.2568093385214,
              "median": 22.0,
              "min": 0.0,
              "max": 83602.0,
              "p5": 0.0,
              "p95": 6094.299999999987,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.1363806223415465,
              "median": 0.7629616372749504,
              "min": 0.111554670204543,
              "max": 9.13318896831901,
              "p5": 0.19894990142794777,
              "p95": 1.6084637094604481,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 97889103.0625,
              "median": 3303162.25,
              "min": 0.0,
              "max": 723690722.5,
              "p5": 641.2500000000006,
              "p95": 558068886.5339993,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0324185897154993,
              "median": 0.018023645447381657,
              "min": 0.000873179494974696,
              "max": 0.1624419998737488,
              "p5": 0.0012248771209364068,
              "p95": 0.1434491509032607,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.013343242164801586,
              "median": 0.009075731693618347,
              "min": 0.0,
              "max": 0.05362339466547858,
              "p5": 4.211481145522875e-05,
              "p95": 0.0408146436816839,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.937042292771508e-07,
              "median": 1.0293485204794601e-08,
              "min": 3.063621083150017e-11,
              "max": 6.581256581256583e-06,
              "p5": 9.936202895199892e-11,
              "p95": 4.322376850127112e-06,
              "count": 24
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2243.75,
              "median": 161.25,
              "min": 0.0,
              "max": 14952.5,
              "p5": 0.7500000000000007,
              "p95": 12348.024999999987,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 356206854.7975,
              "median": 282414122.35,
              "min": 70388863.22,
              "max": 723690722.5,
              "p5": 100366436.643,
              "p95": 680260502.6389999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 8683.0,
              "median": 7667.0,
              "min": 2198.5,
              "max": 15146.0,
              "p5": 2341.3,
              "p95": 15078.275,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6548090296872806,
              "median": 0.6116677566848517,
              "min": 0.4362740060368476,
              "max": 1.0413987264155795,
              "p5": 0.4566271023795371,
              "p95": 0.9552854426104322,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0016896983356839846,
              "median": 0.001522960190797427,
              "min": 0.000873179494974696,
              "max": 0.0032414940131292726,
              "p5": 0.0009115541545276687,
              "p95": 0.0029105422475787313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.5395194369334755,
              "median": 1.5466352355112751,
              "min": 1.138277437744922,
              "max": 1.933645637544229,
              "p5": 1.1791132175215573,
              "p95": 1.8949445973409336,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6162518903396383e-10,
              "median": 1.0248553675687456e-10,
              "min": 3.063621083150017e-11,
              "max": 6.338981420450689e-10,
              "p5": 4.185164754577642e-11,
              "p95": 4.73478130403831e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0246517351741586,
              "median": 0.018328344330119394,
              "min": 0.009031979396618683,
              "max": 0.044360447007775916,
              "p5": 0.009436651736564865,
              "p95": 0.043283334634345305,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": 0.2555356074207058,
            "market": 0.03398499545217737,
            "sector": 0.020035732791642946,
            "peers": 0.045992528323894,
            "vs_market": 0.22155061196852843,
            "vs_sector": 0.23549987462906286,
            "vs_peers": 0.2095430790968118
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 97.70428015564202,
          "score_pca_percentile": 97.70428015564202,
          "rank_pca": 60,
          "total": 2570,
          "adv_notional_sgd": 348186650.0,
          "adv_volume_shares": 2174200.0,
          "free_float_shares": 32518456.0,
          "turnover_ratio": 0.06686049300741707,
          "votes": 6708.0,
          "trades": 6708.0,
          "spread_pct": 0.0034448591484553402,
          "spread_ticks": 5.044701611073292,
          "amihud": 8.605311782194798e-11,
          "volatility": 0.9756435644237575
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5610852638839554,
          "loadings": {
            "log_adv": 0.5285113351032965,
            "log_trades": 0.48512193827750627,
            "log_turnover": 0.4773833861431582,
            "neg_spread": 0.45397364929824624,
            "neg_amihud": 0.2157558128883316,
            "neg_vol": 0.06924544209857199
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
          "peer_median_adv": 233639418.56,
          "peer_median_score_pca": 96.98443579766537,
          "peer_median_trades": 7869.5,
          "peer_median_volatility": 0.5141747095705668,
          "peer_median_spread_pct": 0.0014165238574967843,
          "peer_median_spread_ticks": 1.5472098371231637,
          "peer_median_amihud": 8.182764081747654e-11,
          "peer_median_turnover_ratio": 0.014337923875515964,
          "target_vs_peer": {
            "score_pca_delta": 0.72,
            "adv_delta_pct": 49.0,
            "trades_delta_pct": -14.76,
            "volatility_delta_pct": -89.75,
            "spread_pct_delta_pct": -143.19,
            "spread_ticks_delta_pct": 226.05,
            "amihud_delta_pct": -5.16,
            "turnover_ratio_delta_pct": 366.32
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1989",
            "score_pca": 97.70428015564202,
            "rank_pca": 60,
            "adv": 348186650.0,
            "trades": 6708.0,
            "volatility": 0.9756435644237575,
            "spread_pct": 0.0034448591484553402,
            "spread_ticks": 5.044701611073292,
            "amihud": 8.605311782194798e-11,
            "turnover_ratio": 0.06686049300741707,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 98.67704280155642,
            "rank_pca": 35,
            "adv": 491836040.0,
            "trades": 12494.0,
            "volatility": 0.8633628876178289,
            "spread_pct": 0.0018955746141036463,
            "spread_ticks": 1.5472098371231637,
            "amihud": 7.105929290640467e-11,
            "turnover_ratio": 0.03689602118532207,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 96.96498054474708,
            "rank_pca": 79,
            "adv": 195470129.11999997,
            "trades": 7353.0,
            "volatility": 0.6901520119259555,
            "spread_pct": 0.0011777092877508694,
            "spread_ticks": null,
            "amihud": 1.1524038476481344e-10,
            "turnover_ratio": 0.03939076016102192,
            "is_target": false
          },
          {
            "ticker": "2382",
            "score_pca": 98.40466926070039,
            "rank_pca": 42,
            "adv": 597658500.0,
            "trades": 12722.0,
            "volatility": 0.4164264644039499,
            "spread_pct": 0.000856513524379859,
            "spread_ticks": 1.106199005298573,
            "amihud": 2.295332451048712e-11,
            "turnover_ratio": 0.014076220465204571,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 93.11284046692607,
            "rank_pca": 178,
            "adv": 195372537.56,
            "trades": 3648.0,
            "volatility": 0.4654268056387982,
            "spread_pct": 0.0013618886870978347,
            "spread_ticks": null,
            "amihud": 9.259598872854843e-11,
            "turnover_ratio": 0.007113205273006885,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 90.35019455252919,
            "rank_pca": 249,
            "adv": 101088550.24,
            "trades": 2319.0,
            "volatility": 0.6257274286389058,
            "spread_pct": 0.0031413344247667326,
            "spread_ticks": null,
            "amihud": 1.3002553560310145e-10,
            "turnover_ratio": 0.013985266014089875,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 87.85992217898833,
            "rank_pca": 313,
            "adv": 53527593.57,
            "trades": 1700.0,
            "volatility": 0.5043953598273063,
            "spread_pct": 0.0023243356969930317,
            "spread_ticks": 1.9112166605772745,
            "amihud": 3.617144645666637e-10,
            "turnover_ratio": 0.014599627285827359,
            "is_target": false
          },
          {
            "ticker": "3808",
            "score_pca": 97.00389105058366,
            "rank_pca": 78,
            "adv": 362667338.88,
            "trades": 9480.0,
            "volatility": 0.5239540593138272,
            "spread_pct": 0.0014711590278957342,
            "spread_ticks": null,
            "amihud": 5.451325153499899e-11,
            "turnover_ratio": 0.010892554018524056,
            "is_target": false
          },
          {
            "ticker": "2050",
            "score_pca": 97.35408560311284,
            "rank_pca": 69,
            "adv": 271808708.0,
            "trades": 8386.0,
            "volatility": 0.4095424402341135,
            "spread_pct": 0.0009935038801592343,
            "spread_ticks": null,
            "amihud": 6.176966623084601e-11,
            "turnover_ratio": 0.02364941788031104,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6716813576219359,
              "median": 0.5028360511984492,
              "min": 0.0,
              "max": 27.99633822125436,
              "p5": 0.16268232036822874,
              "p95": 1.6518199205192146,
              "count": 2569
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 57709633.197192274,
              "median": 222725.0,
              "min": 0.0,
              "max": 11632693680.0,
              "p5": 0.0,
              "p95": 233667371.29999977,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04433522520534753,
              "median": 0.02823487983886933,
              "min": 0.0004584442003279162,
              "max": 0.5912209998910793,
              "p5": 0.0014145412336685449,
              "p95": 0.14320317700283175,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0041733008157417185,
              "median": 0.0009125005628878337,
              "min": 0.0,
              "max": 0.3058299844695711,
              "p5": 0.0,
              "p95": 0.015257430587448334,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.241506939220839e-06,
              "median": 4.4478366612047235e-08,
              "min": 0.0,
              "max": 0.00020885547201336674,
              "p5": 2.4647283162135803e-11,
              "p95": 4.41583783239631e-06,
              "count": 2563
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1045.092412451362,
              "median": 20.0,
              "min": 0.0,
              "max": 63327.0,
              "p5": 0.0,
              "p95": 5708.149999999985,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0483999483561675,
              "median": 0.6751881046138226,
              "min": 0.1884600757219755,
              "max": 6.512297715158232,
              "p5": 0.24411965552093104,
              "p95": 3.3893186085637286,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 84557072.23541667,
              "median": 1474540.0,
              "min": 0.0,
              "max": 597658500.0,
              "p5": 324.0000000000003,
              "p95": 470288631.4999997,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03618874722963105,
              "median": 0.019707996004700898,
              "min": 0.000856513524379859,
              "max": 0.25637321777278443,
              "p5": 0.0012053361976529142,
              "p95": 0.12611244742545807,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.011348410192488697,
              "median": 0.0033606999318677765,
              "min": 0.0,
              "max": 0.06686049300741707,
              "p5": 2.591680704937154e-05,
              "p95": 0.039016549314666936,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.881913143978224e-07,
              "median": 1.1394236008693612e-08,
              "min": 2.295332451048712e-11,
              "max": 7.42166663474302e-06,
              "p5": 7.330836664373616e-11,
              "p95": 6.222504857618758e-06,
              "count": 24
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2016.1666666666667,
              "median": 74.0,
              "min": 0.0,
              "max": 12722.0,
              "p5": 0.6000000000000005,
              "p95": 11722.84999999999,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 283678674.67125,
              "median": 233639418.56,
              "min": 53527593.57,
              "max": 597658500.0,
              "p5": 70173928.40450001,
              "p95": 560620639.0,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7262.75,
              "median": 7869.5,
              "min": 1700.0,
              "max": 12722.0,
              "p5": 1916.65,
              "p95": 12642.2,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5623734322000857,
              "median": 0.5141747095705668,
              "min": 0.4095424402341135,
              "max": 0.8633628876178289,
              "p5": 0.4119518486935563,
              "p95": 0.8027390811256732,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0016527523928933678,
              "median": 0.0014165238574967843,
              "min": 0.000856513524379859,
              "max": 0.0031413344247667326,
              "p5": 0.0009044601489026404,
              "p95": 0.002855384870045937,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.5215418343330036,
              "median": 1.5472098371231637,
              "min": 1.106199005298573,
              "max": 1.9112166605772745,
              "p5": 1.1503000884810322,
              "p95": 1.8748159782318634,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1373398860573298e-10,
              "median": 8.182764081747654e-11,
              "min": 2.295332451048712e-11,
              "max": 3.617144645666637e-10,
              "p5": 3.399929896906628e-11,
              "p95": 2.806233394294168e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.020075384035413472,
              "median": 0.014337923875515964,
              "min": 0.007113205273006885,
              "max": 0.03939076016102192,
              "p5": 0.008435977333937895,
              "p95": 0.038517601519526976,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.7809847198641773,
            "market": 0.054164598055107094,
            "sector": 0.02320043825972551,
            "peers": 0.04367437235093541,
            "vs_market": 0.7268201218090702,
            "vs_sector": 0.7577842816044518,
            "vs_peers": 0.7373103475132419
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks solid, with a 1D liquidity score of 97.7 and a 1 tick spread, although the lighter bid side points to thinner buy-side access intraday.",
        "market_comparison": "The 1D score is 2.8 points above the peer median, which suggests access is holding up better than peers on the day."
      },
      "1w": {
        "liquidity": "Weekly tradability looks broadly average, with a 1W liquidity score of 96.8 leaving access close to peer norms.",
        "market_comparison": "The 1W score sits 0.2 points below the peer median, so peer-relative access is essentially in line rather than clearly ahead."
      },
      "2w": {
        "liquidity": "Two-week tradability looks steady, with a 2W liquidity score of 97.1 indicating accessible trading conditions.",
        "market_comparison": "Return 25.6% vs peers 4.6%."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average for the company’s size, with a 1M score of 97.7 showing accessible but not standout liquidity.",
        "market_comparison": "The 1M score is 0.7 points above the peer median and primary average daily volume is HK$348.2M compared with a peer median of HK$233.6M, which supports reasonable peer-relative access."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 31,
      "reporting_window_days": 31,
      "available_history_days": 31,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.5147584839026245,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "51.5%",
          "display_range": null,
          "display_text": "51.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "share_pct",
          "value_pct": 51.5,
          "plain_english": "Market explains about 51.5% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.3723828342093795,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "37.2%",
          "display_range": null,
          "display_text": "37.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "share_pct",
          "value_pct": 37.2,
          "plain_english": "Sector explains about 37.2% of price moves in the current state."
        },
        "company_share": {
          "median": 0.11285868188799604,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "11.3%",
          "display_range": null,
          "display_text": "11.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "share_pct",
          "value_pct": 11.3,
          "plain_english": "Company-specific explains about 11.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -4.414945961142562,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-4.41",
          "display_range": null,
          "display_text": "-4.41",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 4.41% stock move in the opposite direction in this state.",
          "value_num": -4.41
        },
        "beta_stock_lag": {
          "median": 0.3108969442985226,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.31",
          "display_range": null,
          "display_text": "0.31",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "lag_beta",
          "value_num": 0.31
        },
        "beta_sector": {
          "median": -3.0424273811274305,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-3.04",
          "display_range": null,
          "display_text": "-3.04",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.04% stock move in the opposite direction in this state.",
          "value_num": -3.04
        },
        "beta_market_lag": {
          "median": -5.358236822144589,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-5.36",
          "display_range": null,
          "display_text": "-5.36",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "lag_beta",
          "value_num": -5.36
        },
        "beta_sector_lag": {
          "median": -2.574495383631143,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.57",
          "display_range": null,
          "display_text": "-2.57",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "kind": "lag_beta",
          "value_num": -2.57
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 31 trading days relative to the 252-day target."
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
            "median": 0.4430524270823559,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.3%",
            "display_range": null,
            "display_text": "44.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 44.3,
            "plain_english": "Sector explains about 44.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.40920949410327245,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.9%",
              "display_range": null,
              "display_text": "40.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 40.9,
              "plain_english": "Market explains about 40.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4430524270823559,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.3%",
              "display_range": null,
              "display_text": "44.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 44.3,
              "plain_english": "Sector explains about 44.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.1477380788143716,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.8%",
              "display_range": null,
              "display_text": "14.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 14.8,
              "plain_english": "Company-specific explains about 14.8% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though sector-driven still has the largest share, though based on only 6 trading days."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5023326350172204,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.2%",
            "display_range": null,
            "display_text": "50.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 50.2,
            "plain_english": "Company-specific explains about 50.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1693103770255435,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.9%",
              "display_range": null,
              "display_text": "16.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 16.9,
              "plain_english": "Market explains about 16.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.32835698795723617,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.8%",
              "display_range": null,
              "display_text": "32.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 32.8,
              "plain_english": "Sector explains about 32.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5023326350172204,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.2%",
              "display_range": null,
              "display_text": "50.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 50.2,
              "plain_english": "Company-specific explains about 50.2% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-11",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5135049928618332,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.4%",
            "display_range": null,
            "display_text": "51.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 51.4,
            "plain_english": "Market explains about 51.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5135049928618332,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.4%",
              "display_range": null,
              "display_text": "51.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 51.4,
              "plain_english": "Market explains about 51.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2767888846861282,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.7%",
              "display_range": null,
              "display_text": "27.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 27.7,
              "plain_english": "Sector explains about 27.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.20970612245203862,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.0%",
              "display_range": null,
              "display_text": "21.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 21.0,
              "plain_english": "Company-specific explains about 21.0% of price moves in the current state."
            }
          },
          "summary": "May: Mostly market-driven, though based on only 6 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5172413793103449,
          "expected_duration_days": 5.0,
          "current_probability": 1.0,
          "n_days_effective": 15.0,
          "volatility": {
            "median": 0.05346754397910224,
            "low": 0.05346754397910224,
            "high": 0.05346754397910224
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4827586206896552,
          "expected_duration_days": 7.0,
          "current_probability": 0.0,
          "n_days_effective": 14.0,
          "volatility": {
            "median": 0.08397058772316038,
            "low": 0.08397058772316038,
            "high": 0.08397058772316038
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8571428571428571,
            0.14285714285714285
          ],
          [
            0.14285714285714285,
            0.8571428571428571
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            12.0,
            2.0
          ],
          [
            2.0,
            12.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 31,
        "reporting_window_days": 31,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "-4.41",
        "sector_link_display": "-3.04",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 4.41% stock move in the opposite direction in this state. This is a point estimate from 31 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.04% stock move in the opposite direction in this state. This is a point estimate from 31 trading days.",
        "stock_persistence_display": "0.31",
        "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
        "history_limited_note": "Read is based on 31 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 51.5,
        "driver_share_display": "51.5%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 31 trading days relative to the 252-day target.",
        "history_days": 31,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8571428571428571,
        "effective_days": 15.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.0 days.",
        "expected_duration_days": 5.0
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
          "pct_time": 0.5172413793103449,
          "expected_duration_days": 5.0,
          "current_probability": 1.0,
          "n_days_effective": 15.0,
          "volatility": {
            "median": 0.05346754397910224,
            "low": 0.05346754397910224,
            "high": 0.05346754397910224
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4827586206896552,
          "expected_duration_days": 7.0,
          "current_probability": 0.0,
          "n_days_effective": 14.0,
          "volatility": {
            "median": 0.08397058772316038,
            "low": 0.08397058772316038,
            "high": 0.08397058772316038
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8571428571428571,
          0.14285714285714285
        ],
        [
          0.14285714285714285,
          0.8571428571428571
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8571428571428571,
            0.14285714285714285
          ],
          [
            0.14285714285714285,
            0.8571428571428571
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            12.0,
            2.0
          ],
          [
            2.0,
            12.0
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
        "text": "Liquidity score: 97.7 — Strong",
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
    "liq_subtitle": "Trading access looks close to peer norms for its size, while the displayed book points to thinner buy-side support day to day.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns are well ahead of peers and the market, with a stronger backdrop than the main comparison groups.",
    "perf_insight": "Performance is notably stronger, with a 1M return of +78.1% compared with +4.4% for peers and +5.4% for the market. That matters because the tape has a firmer return backdrop even though liquidity only sits modestly above the peer median.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market factors are the main current driver, accounting for 51.5% of trading. That matters because the stock is still moving meaningfully with the broader backdrop rather than on company news alone.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 51.5% of price changes. Other influences are sector 37.2%, and company-specific 11.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 51.5%, sector 37.2%, and company-specific 11.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from sector-driven to market-driven over Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 51.5%, sector 37.2%, and company-specific 11.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The tape is being shaped more by the market than by a pure stock story, while bid depth at 0.66x of ask depth points to thinner buy-side support in the book.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market factors lead at 51.5% of price moves.",
      "Monthly liquidity is mixed for the stock’s size: the 1M score is 97.7 versus a peer median of 97.0, while recent trend context versus that 1M baseline is limited. Immediate buy-side depth is lighter, with displayed bid depth at 0.66x ask depth and the spread at 1 tick. Market factors remain the main driver at 51.5%. The 1M return is +78.1%, versus peers at +4.4% and the market at +5.4%."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look balanced at the monthly level, although the live book is less supportive on the bid side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Mar 20, 2026 to May 11, 2026 (33 trading days • 333,325 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The clearest execution watchpoint is the bid side, with displayed bid depth at 0.66x of ask depth while the spread remains 1 tick.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 35.9% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The current read is driven more by peer standing, price strength, and displayed depth than by a clear intraday imbalance.",
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
    "intraday_insight": "The most relevant near-term signal is the displayed book, where bid depth is 0.66x of ask depth and the spread is 1 tick. That matters because day-to-day trading conditions can feel less supported on the buy side even with a strong 1M return backdrop.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by price strength, peer-relative liquidity, and a bid-light book.",
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
    "exec_subtitle": "Liquidity is near peer levels for its size, but the current book shows lighter buy-side support than the monthly score implies.",
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
        "value": "97.7/100",
        "sub": "Peer median 97.0 (+0.7 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$348.2M",
        "sub": "Peer median HK$233.6M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.34%",
        "sub": "5.04 ticks; peers 0.14%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks middle-of-the-pack for its size. The 1M liquidity score is 97.7, only 0.7 points above the peer median of 97.0, which keeps peer-relative access close to average rather than clearly strong. The more important near-term signal is the displayed book, where bid depth is 0.66x of ask depth despite a 1 tick spread. That matters because buy-side access can feel thinner day to day than the monthly standing implies.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "209.700",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.10%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.66x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.05% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.05% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.16% with 100.0% fill.",
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
        "subtext": "Rank 60/2570",
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
        "value": "0.34",
        "suffix": "%",
        "bar_pct": 3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.34% • 5.04 ticks vs peers 0.14%",
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
        "value": "348.2M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$233.6M",
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
        "value": "51.5",
        "suffix": "market",
        "bar_pct": 51,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 37.2% • Company 11.3%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is broadly in line with peers for its size, with a 1M score of 97.7 compared with a peer median of 97.0. That matters because peer-relative access looks competitive but not clearly stronger than the group.",
      "The live book is less supportive than the monthly score, with displayed bid depth at 0.66x of ask depth while the spread remains 1",
      "The return backdrop is strong, with a 1M gain of +78.1% compared with +4.4% for peers and +5.4% for the market, while market factors account for 51.5% of trading. That matters because trading is being supported by strong performance and broader market moves at the same time."
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
      "overall": "1M liquidity is strong: score 97.7 vs peer median 97.0 (+0.7 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "1M score 97.7 vs peer median 97.0 (+0.7 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +0.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is 78.1%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 78.1% vs market 5.4%.",
        "vs_sector": "Better than sector: 78.1% vs secto%.",
        "vs_peers": "Better than peers: 78.1% vs peers 4.4%."
      },
      "adv": {
        "insight": "ADV is HK$348.2M, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$348.2M vs market HK$222.7K.",
        "vs_sector": "Better than sector: HK$348.2M vs sector HK$1.5M.",
        "vs_peers": "Better than peers: HK$348.2M vs peers HK$233.6M."
      },
      "spread": {
        "insight": "Spread is 0.34%, better than market and sector, but worse than peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.34% vs market 2.82%.",
        "vs_sector": "Better than sector: 0.34% vs sector 1.97%.",
        "vs_peers": "Worse than peers: 0.34% vs peers 0.14%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 6.69%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 6.69% vs market 0.09%.",
        "vs_sector": "Better than sector: 6.69% vs sector 0.34%.",
        "vs_peers": "Better than peers: 6.69% vs peers 1.43%."
      },
      "volatility": {
        "insight": "Volatility is 97.56%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 97.56% vs market 50.28%.",
        "vs_sector": "Worse than sector: 97.56% vs sector 67.52%.",
        "vs_peers": "Worse than peers: 97.56% vs peers 51.42%."
      },
      "trades": {
        "insight": "Trades is 6708, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 6708 vs market 20.",
        "vs_sector": "Better than sector: 6708 vs sector 74.",
        "vs_peers": "Worse than peers: 6708 vs peers 7870."
      },
      "amihud": {
        "insight": "Price impact is 8.61e-11, better than market and sector, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 8.61e-11 vs market 4.45e-08.",
        "vs_sector": "Better than sector: 8.61e-11 vs sector 1.14e-08.",
        "vs_peers": "In line with peers: 8.61e-11 vs peers 8.18e-11."
      }
    },
    "performance": {
      "overall": "Recent returns are exceptionally strong relative to both peers and the market, with a 1M gain of 78.1% compared with 4.4% for peers and 5.4% for the market. Liquidity only partly confirms that strength because the 1M liquidity score is modestly above the peer median at 97.7 compared with 97.0, while the order book is less supportive on the bid side with displayed bid depth at 0.66x ask depth despite a 1 tick spread.",
      "conclusion": "The move looks broad-market or sector-linked more than purely company-specific, with strong returns but only mixed liquidity confirmation."
    },
    "drivers": {
      "overall": "The stock is being led mainly by the market right now, with market factors driving 51.5% of recent moves. That matters because day-to-day trading is being shaped more by the broader backdrop than by company-specific news.",
      "beta": "The return backdrop is still firm, with the stock up 78.1% over one month compared with 4.4% for peers and 5.4% for the market. That helps explain why broader market moves are carrying more weight in the tape.",
      "rolling_change": "The pattern has shifted over the past few months, moving from more mixed in March to mostly market in April and then mostly market-driven in May. That points to a driver mix that has changed quickly rather than one that looks fully settled."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a Low Volatility state, which signals a calmer tape than a higher-volatility backdrop. That matters because day-to-day trading conditions may be more orderly.",
      "transitions": "This state looks reasonably stable rather than short-lived, with a typical run length of about 5.0 days. That matters because the current backdrop appears settled enough to shape near-term trading conditions.",
      "trading_implications": "Trading conditions look steadier on price action, but they are not uniformly strong because displayed bid depth is only 0.66x ask depth even with a 1 tick spread. That matters because buying interest can feel thinner than the calmer volatility backdrop alone would suggest."
    },
    "execution": {
      "overall": "Displayed liquidity looks bid-light today because the spread is only 1 tick but bid depth is just 0.66x of ask depth. That matters because the headline monthly profile is respectable, yet the visible book is not offering the same visible support on the buy side right now.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with materially less size on the bid than on the ask. That matters because near-term selling pressure would meet a thinner buy-side buffer even though the quoted spread remains tight.",
      "peer_context": "The broader picture still reads near peers on a monthly basis, with a 1M liquidity score of 97.7 compared with a peer median of 97.0, but the current book is less supportive than that standing implies. Trade-size context may also be read with some care because the percentile history spans Ma, 2026 to May 11, 2026, covering 33 trading days and 333,325 trades rather than a full year."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 42.7% of trade count and 57.0% of trade value, while retail-like trades account fo% of count and 8.4% of value. That gap shows larger participation is carrying more of the tape.",
      "institutional_gap": "",
      "peer_comparison": "The mix stands out as institution-leaning relative to the peer set, which supports a steadier flow profile than a market driven mainly by smaller tickets."
    },
    "price_moving": {
      "overall": "Price-moving activity is meaningful, with 35.9% of total trades moving price. That indicates the tape is active enough for individual trades to register. By trade count and value, flow looks mainly institution-like. Price-moving pressure is two-sided rather than clearly one-way, which fits a market still influenced by broader market moves.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not stand out as a separate driver of trading conditions. The stronger signal is a sharp 1M share price gain of 78.1%, ahead of peers and the market, while broader market moves still explain 51.5% of trading, so the tape looks driven more by momentum and market factors than by short pressure.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is rising or falling in a way that changes the picture. Near-term trading quality still looks more influenced by lighter displayed bid depth at 0.66x of ask depth, even with a 1 tick spread, so any short effect does not appear to be the main source of day-to-day friction.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.4%, continuous 98.7%, and close 0.5%. Current trading concentration score is 0.151.",
      "hhi_interpretation": "Activity is present through the day rather than confined to a few short windows, which supports a more usable intraday profile.",
      "best_times": "The continuous session is the clearest source of liquidity because almost all trading happens there. That matters more than the open or close for day-to-day access.",
      "peer_ranking": "Relative to peers, the intraday profile looks anchored by the main session, which is consistent with a steadier trading pattern."
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
        "6613",
        "2382",
        "2018",
        "1415",
        "1478",
        "3808",
        "2050"
      ],
      "scores": [
        97.70428015564202,
        98.67704280155642,
        96.96498054474708,
        98.40466926070039,
        93.11284046692607,
        90.35019455252919,
        87.85992217898833,
        97.00389105058366,
        97.35408560311284
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
        348186650.0,
        491836040.0,
        195470129.11999997,
        597658500.0,
        195372537.56,
        101088550.24,
        53527593.57,
        362667338.88,
        271808708.0
      ],
      "total": 2570
    },
    "market_comparison": {
      "sector_name": "Electronic Components",
      "sector_count": 24,
      "market_count": 2570,
      "company": {
        "volatility": 0.9756435644237575,
        "adv": 348186650.0,
        "spread_pct": 0.0034448591484553402,
        "turnover_ratio": 0.06686049300741707,
        "amihud": 8.605311782194798e-11,
        "trades": 6708.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6716813576219359,
          "median": 0.5028360511984492,
          "min": 0.0,
          "max": 27.99633822125436,
          "p5": 0.16268232036822874,
          "p95": 1.6518199205192146,
          "count": 2569
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 57709633.197192274,
          "median": 222725.0,
          "min": 0.0,
          "max": 11632693680.0,
          "p5": 0.0,
          "p95": 233667371.29999977,
          "count": 2570
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04433522520534753,
          "median": 0.02823487983886933,
          "min": 0.0004584442003279162,
          "max": 0.5912209998910793,
          "p5": 0.0014145412336685449,
          "p95": 0.14320317700283175,
          "count": 2570
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0041733008157417185,
          "median": 0.0009125005628878337,
          "min": 0.0,
          "max": 0.3058299844695711,
          "p5": 0.0,
          "p95": 0.015257430587448334,
          "count": 2554
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.241506939220839e-06,
          "median": 4.4478366612047235e-08,
          "min": 0.0,
          "max": 0.00020885547201336674,
          "p5": 2.4647283162135803e-11,
          "p95": 4.41583783239631e-06,
          "count": 2563
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1045.092412451362,
          "median": 20.0,
          "min": 0.0,
          "max": 63327.0,
          "p5": 0.0,
          "p95": 5708.149999999985,
          "count": 2570
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.0483999483561675,
          "median": 0.6751881046138226,
          "min": 0.1884600757219755,
          "max": 6.512297715158232,
          "p5": 0.24411965552093104,
          "p95": 3.3893186085637286,
          "count": 24
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 84557072.23541667,
          "median": 1474540.0,
          "min": 0.0,
          "max": 597658500.0,
          "p5": 324.0000000000003,
          "p95": 470288631.4999997,
          "count": 24
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03618874722963105,
          "median": 0.019707996004700898,
          "min": 0.000856513524379859,
          "max": 0.25637321777278443,
          "p5": 0.0012053361976529142,
          "p95": 0.12611244742545807,
          "count": 24
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.011348410192488697,
          "median": 0.0033606999318677765,
          "min": 0.0,
          "max": 0.06686049300741707,
          "p5": 2.591680704937154e-05,
          "p95": 0.039016549314666936,
          "count": 24
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.881913143978224e-07,
          "median": 1.1394236008693612e-08,
          "min": 2.295332451048712e-11,
          "max": 7.42166663474302e-06,
          "p5": 7.330836664373616e-11,
          "p95": 6.222504857618758e-06,
          "count": 24
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2016.1666666666667,
          "median": 74.0,
          "min": 0.0,
          "max": 12722.0,
          "p5": 0.6000000000000005,
          "p95": 11722.84999999999,
          "count": 24
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 283678674.67125,
          "median": 233639418.56,
          "min": 53527593.57,
          "max": 597658500.0,
          "p5": 70173928.40450001,
          "p95": 560620639.0,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 7262.75,
          "median": 7869.5,
          "min": 1700.0,
          "max": 12722.0,
          "p5": 1916.65,
          "p95": 12642.2,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5623734322000857,
          "median": 0.5141747095705668,
          "min": 0.4095424402341135,
          "max": 0.8633628876178289,
          "p5": 0.4119518486935563,
          "p95": 0.8027390811256732,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0016527523928933678,
          "median": 0.0014165238574967843,
          "min": 0.000856513524379859,
          "max": 0.0031413344247667326,
          "p5": 0.0009044601489026404,
          "p95": 0.002855384870045937,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.5215418343330036,
          "median": 1.5472098371231637,
          "min": 1.106199005298573,
          "max": 1.9112166605772745,
          "p5": 1.1503000884810322,
          "p95": 1.8748159782318634,
          "count": 3
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.1373398860573298e-10,
          "median": 8.182764081747654e-11,
          "min": 2.295332451048712e-11,
          "max": 3.617144645666637e-10,
          "p5": 3.399929896906628e-11,
          "p95": 2.806233394294168e-10,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.020075384035413472,
          "median": 0.014337923875515964,
          "min": 0.007113205273006885,
          "max": 0.03939076016102192,
          "p5": 0.008435977333937895,
          "p95": 0.038517601519526976,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.15021929824561409,
        "market": 0.023019799456921453,
        "sector": 0.026322022448189486,
        "peers": 0.019698126928947346
      },
      {
        "horizon": "2W",
        "stock": 0.2555356074207058,
        "market": 0.03398499545217737,
        "sector": 0.020035732791642946,
        "peers": 0.045992528323894
      },
      {
        "horizon": "1M",
        "stock": 0.7809847198641773,
        "market": 0.054164598055107094,
        "sector": 0.02320043825972551,
        "peers": 0.04367437235093541
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
      "share_market": 0.5147584839026245,
      "share_sector": 0.3723828342093795,
      "share_idio": 0.11285868188799604,
      "beta_market": -4.414945961142562,
      "beta_sector": -3.0424273811274305,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 31,
        "reporting_window_days": 31,
        "available_history_days": 31,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.5147584839026245,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.5%",
            "display_range": null,
            "display_text": "51.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "share_pct",
            "value_pct": 51.5,
            "plain_english": "Market explains about 51.5% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.3723828342093795,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.2%",
            "display_range": null,
            "display_text": "37.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "share_pct",
            "value_pct": 37.2,
            "plain_english": "Sector explains about 37.2% of price moves in the current state."
          },
          "company_share": {
            "median": 0.11285868188799604,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "11.3%",
            "display_range": null,
            "display_text": "11.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "share_pct",
            "value_pct": 11.3,
            "plain_english": "Company-specific explains about 11.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -4.414945961142562,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-4.41",
            "display_range": null,
            "display_text": "-4.41",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 4.41% stock move in the opposite direction in this state.",
            "value_num": -4.41
          },
          "beta_stock_lag": {
            "median": 0.3108969442985226,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.31",
            "display_range": null,
            "display_text": "0.31",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "lag_beta",
            "value_num": 0.31
          },
          "beta_sector": {
            "median": -3.0424273811274305,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-3.04",
            "display_range": null,
            "display_text": "-3.04",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.04% stock move in the opposite direction in this state.",
            "value_num": -3.04
          },
          "beta_market_lag": {
            "median": -5.358236822144589,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-5.36",
            "display_range": null,
            "display_text": "-5.36",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "lag_beta",
            "value_num": -5.36
          },
          "beta_sector_lag": {
            "median": -2.574495383631143,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.57",
            "display_range": null,
            "display_text": "-2.57",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
            "kind": "lag_beta",
            "value_num": -2.57
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 31 trading days relative to the 252-day target."
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
              "median": 0.4430524270823559,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.3%",
              "display_range": null,
              "display_text": "44.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 44.3,
              "plain_english": "Sector explains about 44.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.40920949410327245,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.9%",
                "display_range": null,
                "display_text": "40.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 40.9,
                "plain_english": "Market explains about 40.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4430524270823559,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.3%",
                "display_range": null,
                "display_text": "44.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 44.3,
                "plain_english": "Sector explains about 44.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.1477380788143716,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.8%",
                "display_range": null,
                "display_text": "14.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 14.8,
                "plain_english": "Company-specific explains about 14.8% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though sector-driven still has the largest share, though based on only 6 trading days."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5023326350172204,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.2%",
              "display_range": null,
              "display_text": "50.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 50.2,
              "plain_english": "Company-specific explains about 50.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1693103770255435,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.9%",
                "display_range": null,
                "display_text": "16.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 16.9,
                "plain_english": "Market explains about 16.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.32835698795723617,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.8%",
                "display_range": null,
                "display_text": "32.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 32.8,
                "plain_english": "Sector explains about 32.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5023326350172204,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.2%",
                "display_range": null,
                "display_text": "50.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 50.2,
                "plain_english": "Company-specific explains about 50.2% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-11",
            "n_obs": 6,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5135049928618332,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.4%",
              "display_range": null,
              "display_text": "51.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 51.4,
              "plain_english": "Market explains about 51.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5135049928618332,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.4%",
                "display_range": null,
                "display_text": "51.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 51.4,
                "plain_english": "Market explains about 51.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2767888846861282,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.7%",
                "display_range": null,
                "display_text": "27.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 27.7,
                "plain_english": "Sector explains about 27.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.20970612245203862,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.0%",
                "display_range": null,
                "display_text": "21.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 21.0,
                "plain_english": "Company-specific explains about 21.0% of price moves in the current state."
              }
            },
            "summary": "May: Mostly market-driven, though based on only 6 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5172413793103449,
            "expected_duration_days": 5.0,
            "current_probability": 1.0,
            "n_days_effective": 15.0,
            "volatility": {
              "median": 0.05346754397910224,
              "low": 0.05346754397910224,
              "high": 0.05346754397910224
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4827586206896552,
            "expected_duration_days": 7.0,
            "current_probability": 0.0,
            "n_days_effective": 14.0,
            "volatility": {
              "median": 0.08397058772316038,
              "low": 0.08397058772316038,
              "high": 0.08397058772316038
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8571428571428571,
              0.14285714285714285
            ],
            [
              0.14285714285714285,
              0.8571428571428571
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              12.0,
              2.0
            ],
            [
              2.0,
              12.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 31,
          "reporting_window_days": 31,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "-4.41",
          "sector_link_display": "-3.04",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 4.41% stock move in the opposite direction in this state. This is a point estimate from 31 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.04% stock move in the opposite direction in this state. This is a point estimate from 31 trading days.",
          "stock_persistence_display": "0.31",
          "point_estimate_note": "Point estimate only because the current state has 31 trading days.",
          "history_limited_note": "Read is based on 31 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 51.5,
          "driver_share_display": "51.5%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 31 trading days relative to the 252-day target.",
          "history_days": 31,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8571428571428571,
          "effective_days": 15.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.0 days.",
          "expected_duration_days": 5.0
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
          "share_market": 0.40920949410327245,
          "share_sector": 0.4430524270823559,
          "share_company": 0.1477380788143716,
          "share_market_display": "40.9%",
          "share_sector_display": "44.3%",
          "share_company_display": "14.8%",
          "dominant_share_display": "44.3%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.1693103770255435,
          "share_sector": 0.32835698795723617,
          "share_company": 0.5023326350172204,
          "share_market_display": "16.9%",
          "share_sector_display": "32.8%",
          "share_company_display": "50.2%",
          "dominant_share_display": "50.2%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-11",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "May: Mostly market-driven, though based on only 6 trading days.",
          "share_market": 0.5135049928618332,
          "share_sector": 0.2767888846861282,
          "share_company": 0.20970612245203862,
          "share_market_display": "51.4%",
          "share_sector_display": "27.7%",
          "share_company_display": "21.0%",
          "dominant_share_display": "51.4%"
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
          0.5172413793103449,
          0.4827586206896552
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5172413793103449,
            "expected_duration_days": 5.0,
            "current_probability": 1.0,
            "n_days_effective": 15.0,
            "volatility": {
              "median": 0.05346754397910224,
              "low": 0.05346754397910224,
              "high": 0.05346754397910224
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4827586206896552,
            "expected_duration_days": 7.0,
            "current_probability": 0.0,
            "n_days_effective": 14.0,
            "volatility": {
              "median": 0.08397058772316038,
              "low": 0.08397058772316038,
              "high": 0.08397058772316038
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8571428571428571,
            0.14285714285714285
          ],
          [
            0.14285714285714285,
            0.8571428571428571
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 209.6,
          "quantity": 7200.0,
          "value": 1509120.0
        },
        {
          "level": 2,
          "price": 209.4,
          "quantity": 200.0,
          "value": 41880.0
        },
        {
          "level": 3,
          "price": 209.2,
          "quantity": 300.0,
          "value": 62760.0
        },
        {
          "level": 4,
          "price": 209.0,
          "quantity": 12900.0,
          "value": 2696100.0
        },
        {
          "level": 5,
          "price": 208.8,
          "quantity": 300.0,
          "value": 62640.0
        },
        {
          "level": 6,
          "price": 208.6,
          "quantity": 11100.0,
          "value": 2315460.0
        },
        {
          "level": 7,
          "price": 208.4,
          "quantity": 400.0,
          "value": 83360.0
        },
        {
          "level": 8,
          "price": 208.2,
          "quantity": 100.0,
          "value": 20820.0
        },
        {
          "level": 9,
          "price": 208.0,
          "quantity": 2500.0,
          "value": 520000.0
        },
        {
          "level": 10,
          "price": 207.8,
          "quantity": 2400.0,
          "value": 498720.0
        },
        {
          "level": 11,
          "price": 207.6,
          "quantity": 200.0,
          "value": 41520.0
        },
        {
          "level": 12,
          "price": 207.4,
          "quantity": 100.0,
          "value": 20740.0
        },
        {
          "level": 13,
          "price": 207.2,
          "quantity": 300.0,
          "value": 62160.0
        },
        {
          "level": 14,
          "price": 207.0,
          "quantity": 500.0,
          "value": 103500.0
        },
        {
          "level": 15,
          "price": 206.6,
          "quantity": 500.0,
          "value": 103300.0
        },
        {
          "level": 16,
          "price": 206.4,
          "quantity": 15400.0,
          "value": 3178560.0
        },
        {
          "level": 17,
          "price": 206.2,
          "quantity": 100.0,
          "value": 20620.0
        },
        {
          "level": 18,
          "price": 206.0,
          "quantity": 7400.0,
          "value": 1524400.0
        },
        {
          "level": 19,
          "price": 205.6,
          "quantity": 100.0,
          "value": 20560.0
        },
        {
          "level": 20,
          "price": 205.2,
          "quantity": 100.0,
          "value": 20520.0
        },
        {
          "level": 21,
          "price": 205.0,
          "quantity": 3200.0,
          "value": 656000.0
        },
        {
          "level": 22,
          "price": 204.8,
          "quantity": 200.0,
          "value": 40960.0
        },
        {
          "level": 23,
          "price": 204.0,
          "quantity": 1400.0,
          "value": 285600.0
        },
        {
          "level": 24,
          "price": 203.8,
          "quantity": 200.0,
          "value": 40760.0
        },
        {
          "level": 25,
          "price": 203.6,
          "quantity": 300.0,
          "value": 61080.0
        },
        {
          "level": 26,
          "price": 203.0,
          "quantity": 2100.0,
          "value": 426300.0
        },
        {
          "level": 27,
          "price": 202.8,
          "quantity": 100.0,
          "value": 20280.0
        },
        {
          "level": 28,
          "price": 202.6,
          "quantity": 1300.0,
          "value": 263380.0
        },
        {
          "level": 29,
          "price": 202.4,
          "quantity": 400.0,
          "value": 80960.0
        },
        {
          "level": 30,
          "price": 202.0,
          "quantity": 3900.0,
          "value": 787800.0
        },
        {
          "level": 31,
          "price": 201.8,
          "quantity": 500.0,
          "value": 100900.0
        },
        {
          "level": 32,
          "price": 201.6,
          "quantity": 200.0,
          "value": 40320.0
        },
        {
          "level": 33,
          "price": 201.0,
          "quantity": 1500.0,
          "value": 301500.0
        },
        {
          "level": 34,
          "price": 200.8,
          "quantity": 600.0,
          "value": 120480.0
        },
        {
          "level": 35,
          "price": 200.2,
          "quantity": 100.0,
          "value": 20020.0
        },
        {
          "level": 36,
          "price": 200.0,
          "quantity": 2800.0,
          "value": 560000.0
        },
        {
          "level": 37,
          "price": 199.5,
          "quantity": 100.0,
          "value": 19950.0
        },
        {
          "level": 38,
          "price": 198.8,
          "quantity": 200.0,
          "value": 39760.0
        },
        {
          "level": 39,
          "price": 198.2,
          "quantity": 1000.0,
          "value": 198200.0
        },
        {
          "level": 40,
          "price": 198.0,
          "quantity": 1300.0,
          "value": 257400.0
        },
        {
          "level": 41,
          "price": 196.0,
          "quantity": 1600.0,
          "value": 313600.0
        },
        {
          "level": 42,
          "price": 195.6,
          "quantity": 1000.0,
          "value": 195600.0
        },
        {
          "level": 43,
          "price": 195.2,
          "quantity": 400.0,
          "value": 78080.0
        },
        {
          "level": 44,
          "price": 195.0,
          "quantity": 700.0,
          "value": 136500.0
        },
        {
          "level": 45,
          "price": 191.8,
          "quantity": 100.0,
          "value": 19180.0
        },
        {
          "level": 46,
          "price": 190.1,
          "quantity": 100.0,
          "value": 19010.0
        },
        {
          "level": 47,
          "price": 190.0,
          "quantity": 2100.0,
          "value": 399000.0
        },
        {
          "level": 48,
          "price": 189.0,
          "quantity": 100.0,
          "value": 18900.0
        },
        {
          "level": 49,
          "price": 188.6,
          "quantity": 100.0,
          "value": 18860.0
        },
        {
          "level": 50,
          "price": 186.0,
          "quantity": 200.0,
          "value": 37200.0
        },
        {
          "level": 51,
          "price": 185.0,
          "quantity": 300.0,
          "value": 55500.0
        },
        {
          "level": 52,
          "price": 183.0,
          "quantity": 200.0,
          "value": 36600.0
        },
        {
          "level": 53,
          "price": 180.5,
          "quantity": 100.0,
          "value": 18050.0
        },
        {
          "level": 54,
          "price": 180.0,
          "quantity": 800.0,
          "value": 144000.0
        },
        {
          "level": 55,
          "price": 176.0,
          "quantity": 1000.0,
          "value": 176000.0
        },
        {
          "level": 56,
          "price": 175.4,
          "quantity": 1500.0,
          "value": 263100.0
        },
        {
          "level": 57,
          "price": 173.7,
          "quantity": 100.0,
          "value": 17370.0
        },
        {
          "level": 58,
          "price": 166.6,
          "quantity": 1200.0,
          "value": 199920.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 209.8,
          "quantity": 1600.0,
          "value": 335680.0
        },
        {
          "level": 2,
          "price": 210.0,
          "quantity": 2100.0,
          "value": 441000.0
        },
        {
          "level": 3,
          "price": 210.2,
          "quantity": 500.0,
          "value": 105100.0
        },
        {
          "level": 4,
          "price": 211.2,
          "quantity": 200.0,
          "value": 42240.0
        },
        {
          "level": 5,
          "price": 212.0,
          "quantity": 100.0,
          "value": 21200.0
        },
        {
          "level": 6,
          "price": 212.8,
          "quantity": 200.0,
          "value": 42560.0
        },
        {
          "level": 7,
          "price": 213.0,
          "quantity": 2100.0,
          "value": 447300.0
        },
        {
          "level": 8,
          "price": 213.4,
          "quantity": 100.0,
          "value": 21340.0
        },
        {
          "level": 9,
          "price": 214.0,
          "quantity": 200.0,
          "value": 42800.0
        },
        {
          "level": 10,
          "price": 214.2,
          "quantity": 100.0,
          "value": 21420.0
        },
        {
          "level": 11,
          "price": 214.8,
          "quantity": 400.0,
          "value": 85920.0
        },
        {
          "level": 12,
          "price": 215.0,
          "quantity": 3600.0,
          "value": 774000.0
        },
        {
          "level": 13,
          "price": 215.2,
          "quantity": 1100.0,
          "value": 236720.0
        },
        {
          "level": 14,
          "price": 215.6,
          "quantity": 4000.0,
          "value": 862400.0
        },
        {
          "level": 15,
          "price": 215.8,
          "quantity": 500.0,
          "value": 107900.0
        },
        {
          "level": 16,
          "price": 216.0,
          "quantity": 9500.0,
          "value": 2052000.0
        },
        {
          "level": 17,
          "price": 216.2,
          "quantity": 4400.0,
          "value": 951280.0
        },
        {
          "level": 18,
          "price": 216.4,
          "quantity": 100.0,
          "value": 21640.0
        },
        {
          "level": 19,
          "price": 216.6,
          "quantity": 11200.0,
          "value": 2425920.0
        },
        {
          "level": 20,
          "price": 216.8,
          "quantity": 7300.0,
          "value": 1582640.0
        },
        {
          "level": 21,
          "price": 217.0,
          "quantity": 1000.0,
          "value": 217000.0
        },
        {
          "level": 22,
          "price": 217.2,
          "quantity": 15900.0,
          "value": 3453480.0
        },
        {
          "level": 23,
          "price": 217.4,
          "quantity": 9500.0,
          "value": 2065300.0
        },
        {
          "level": 24,
          "price": 217.6,
          "quantity": 400.0,
          "value": 87040.0
        },
        {
          "level": 25,
          "price": 217.8,
          "quantity": 600.0,
          "value": 130680.0
        },
        {
          "level": 26,
          "price": 218.0,
          "quantity": 3500.0,
          "value": 763000.0
        },
        {
          "level": 27,
          "price": 218.2,
          "quantity": 4300.0,
          "value": 938260.0
        },
        {
          "level": 28,
          "price": 218.4,
          "quantity": 100.0,
          "value": 21840.0
        },
        {
          "level": 29,
          "price": 218.6,
          "quantity": 100.0,
          "value": 21860.0
        },
        {
          "level": 30,
          "price": 218.8,
          "quantity": 200.0,
          "value": 43760.0
        },
        {
          "level": 31,
          "price": 219.0,
          "quantity": 9900.0,
          "value": 2168100.0
        },
        {
          "level": 32,
          "price": 219.4,
          "quantity": 100.0,
          "value": 21940.0
        },
        {
          "level": 33,
          "price": 219.6,
          "quantity": 300.0,
          "value": 65880.0
        },
        {
          "level": 34,
          "price": 219.8,
          "quantity": 300.0,
          "value": 65940.0
        },
        {
          "level": 35,
          "price": 220.0,
          "quantity": 30600.0,
          "value": 6732000.0
        },
        {
          "level": 36,
          "price": 220.2,
          "quantity": 100.0,
          "value": 22020.0
        },
        {
          "level": 37,
          "price": 220.4,
          "quantity": 300.0,
          "value": 66120.0
        },
        {
          "level": 38,
          "price": 221.0,
          "quantity": 100.0,
          "value": 22100.0
        },
        {
          "level": 39,
          "price": 221.2,
          "quantity": 400.0,
          "value": 88480.0
        },
        {
          "level": 40,
          "price": 221.6,
          "quantity": 200.0,
          "value": 44320.0
        },
        {
          "level": 41,
          "price": 221.8,
          "quantity": 500.0,
          "value": 110900.0
        },
        {
          "level": 42,
          "price": 222.0,
          "quantity": 2900.0,
          "value": 643800.0
        },
        {
          "level": 43,
          "price": 222.8,
          "quantity": 600.0,
          "value": 133680.0
        },
        {
          "level": 44,
          "price": 223.0,
          "quantity": 200.0,
          "value": 44600.0
        },
        {
          "level": 45,
          "price": 223.8,
          "quantity": 100.0,
          "value": 22380.0
        },
        {
          "level": 46,
          "price": 224.0,
          "quantity": 300.0,
          "value": 67200.0
        },
        {
          "level": 47,
          "price": 224.2,
          "quantity": 100.0,
          "value": 22420.0
        },
        {
          "level": 48,
          "price": 224.8,
          "quantity": 100.0,
          "value": 22480.0
        },
        {
          "level": 49,
          "price": 225.0,
          "quantity": 1400.0,
          "value": 315000.0
        },
        {
          "level": 50,
          "price": 225.2,
          "quantity": 500.0,
          "value": 112600.0
        },
        {
          "level": 51,
          "price": 225.4,
          "quantity": 100.0,
          "value": 22540.0
        },
        {
          "level": 52,
          "price": 226.0,
          "quantity": 200.0,
          "value": 45200.0
        },
        {
          "level": 53,
          "price": 228.0,
          "quantity": 100.0,
          "value": 22800.0
        },
        {
          "level": 54,
          "price": 229.0,
          "quantity": 100.0,
          "value": 22900.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-11 07:59:59.958000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 209.7,
        "spread_pct": 0.0009537434430139106,
        "spread_ticks": 1.0,
        "tick_size": 0.2,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 19374860.0,
        "ask_depth_notional_displayed": 29268680.0,
        "bid_depth_notional_top10": 19374860.0,
        "ask_depth_notional_top10": 29268680.0,
        "bid_ask_depth_ratio": 0.662
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 53,
        "history_limited": true,
        "trade_days_used": 33,
        "n_trades_used": 333325,
        "first_trade_date": "2026-03-20",
        "last_trade_date": "2026-05-11",
        "window_label": "Mar 20, 2026 to May 11, 2026",
        "window_short_label": "Mar 20-May 11",
        "trade_days_label": "33 trading days",
        "trade_count_label": "333,325 trades",
        "window_detail_label": "33 trading days • 333,325 trades",
        "history_note": "Trade-size percentiles use available history from Mar 20, 2026 to May 11, 2026 (33 trading days • 333,325 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 94230.0,
            "impact_pct": -0.000477,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.49,
            "pct_of_adv": 0.03
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 157800.0,
            "impact_pct": -0.000477,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.81,
            "pct_of_adv": 0.05
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 4115007.0,
            "impact_pct": -0.0022570000000000003,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 21.24,
            "pct_of_adv": 1.19
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-11",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "4867258625",
            "timestamp": "2026-05-11 07:08:43.404000000",
            "local_timestamp": "2026-05-11 15:08:43",
            "posted_price": 214.8,
            "size_shares": 60000.0,
            "notional": 12888000.0,
            "impact_pct": -0.008861,
            "filled_pct": 100.0,
            "levels_consumed": 20,
            "pct_of_bid_depth": 66.52,
            "price_vs_mid_pct": 2.432,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "4873756929",
            "timestamp": "2026-05-11 07:09:21.369000000",
            "local_timestamp": "2026-05-11 15:09:21",
            "posted_price": 214.0,
            "size_shares": 60000.0,
            "notional": 12840000.0,
            "impact_pct": -0.008824,
            "filled_pct": 100.0,
            "levels_consumed": 18,
            "pct_of_bid_depth": 66.27,
            "price_vs_mid_pct": 2.051,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 3,
            "order_id": "4882684417",
            "timestamp": "2026-05-11 07:10:18.107000000",
            "local_timestamp": "2026-05-11 15:10:18",
            "posted_price": 213.0,
            "size_shares": 59900.0,
            "notional": 12758700.0,
            "impact_pct": -0.008767,
            "filled_pct": 100.0,
            "levels_consumed": 18,
            "pct_of_bid_depth": 65.85,
            "price_vs_mid_pct": 1.574,
            "executed_event_count": 0,
            "event_count": 19
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-11",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.2,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.001928640308582477,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 11782350.0,
            "ask_depth_notional": 19435200.0,
            "mid_price": 207.39999999999998
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.00097991180793723,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 11856290.0,
            "ask_depth_notional": 20470820.0,
            "mid_price": 204.1
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0019569471624266426,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 17309870.0,
            "ask_depth_notional": 22289100.0,
            "mid_price": 204.39999999999998
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0009685230024212524,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 15296320.0,
            "ask_depth_notional": 21832880.0,
            "mid_price": 206.5
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0019417475728154235,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 13086060.0,
            "ask_depth_notional": 22709720.0,
            "mid_price": 206.0
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0018796992481203273,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 22628940.0,
            "ask_depth_notional": 14412340.0,
            "mid_price": 212.8
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0018850141376060589,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 21292280.0,
            "ask_depth_notional": 24982720.0,
            "mid_price": 212.2
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.001860465116278964,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 24017820.0,
            "ask_depth_notional": 19414040.0,
            "mid_price": 215.0
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0018416206261510392,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 23329160.0,
            "ask_depth_notional": 14240280.0,
            "mid_price": 217.2
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0018761726078799516,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 19791500.0,
            "ask_depth_notional": 17539220.0,
            "mid_price": 213.2
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0009537434430139107,
            "spread_ticks": 1.0000000000000853,
            "bid_depth_notional": 19374860.0,
            "ask_depth_notional": 29268680.0,
            "mid_price": 209.7
          }
        ],
        "summary": {
          "median_spread_pct": 0.0018761726078799516,
          "median_spread_ticks": 2.0000000000000284,
          "median_bid_depth_notional": 19374860.0,
          "median_ask_depth_notional": 20470820.0,
          "tightest_bucket": "15:30",
          "widest_bucket": "10:30",
          "deepest_bid_bucket": "14:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "2382",
          "pct": 0.2
        },
        {
          "ticker": "6088",
          "pct": 0.2
        },
        {
          "ticker": "3808",
          "pct": 0.3
        },
        {
          "ticker": "2050",
          "pct": 0.3
        },
        {
          "ticker": "6613",
          "pct": 0.5
        },
        {
          "ticker": "2018",
          "pct": 0.5
        },
        {
          "ticker": "1415",
          "pct": 1.0
        },
        {
          "ticker": "1478",
          "pct": 1.9
        }
      ]
    },
    "trader_composition": {
      "primary_period": "30d",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 7913,
          "n_runs": 2049,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-11",
          "last_trade_date": "2026-05-11",
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
            "retail_pct": 0.21079236699102744,
            "mixed_pct": 0.24314419309996207,
            "instit_pct": 0.42550233792493364,
            "ambiguous_pct": 0.12056110198407684,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12056110198407684,
            "retail_qty_pct": 0.09675611513072947,
            "mixed_qty_pct": 0.2784721121043117,
            "instit_qty_pct": 0.549020718275848,
            "ambiguous_qty_pct": 0.07575105448911079,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07575105448911079,
            "retail_notional_pct": 0.09667554539596579,
            "mixed_notional_pct": 0.27784046520638883,
            "instit_notional_pct": 0.5497221269076041,
            "ambiguous_notional_pct": 0.07576186249004119,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07576186249004119
          },
          "run_composition": {
            "retail_pct": 0.4367984382625671,
            "mixed_pct": 0.19570522205954125,
            "instit_pct": 0.21473889702293802,
            "ambiguous_pct": 0.15275744265495364,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15275744265495364,
            "retail_notional_pct": 0.09248522906198733,
            "mixed_notional_pct": 0.16785176067904373,
            "instit_notional_pct": 0.6550657855371798,
            "unclear_notional_pct": 0.08459722472178932
          },
          "counts": {
            "trades": {
              "retail": 1668,
              "mixed": 1924,
              "institutional": 3367,
              "ambiguous": 954,
              "unobservable": 0,
              "unclear": 954
            },
            "runs": {
              "retail": 895,
              "mixed": 401,
              "institutional": 440,
              "ambiguous": 313,
              "unobservable": 0,
              "unclear": 313
            }
          },
          "confidence": {
            "high": 0.6515373352855052,
            "medium": 0.19570522205954125,
            "low": 0.15275744265495364,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 1335,
            "medium": 401,
            "low": 313,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.4819916592948313,
            "medium": 0.14242385947175534,
            "low": 0.37558448123341337,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 3814,
            "medium": 1127,
            "low": 2972,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.9057345046364079,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.15275744265495364,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4367984382625671,
          "dominance_gap": 0.22205954123962907,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 4567,
              "UNOBSERVABLE": 2272,
              "WALK_BOOK": 1074
            },
            "d2_information": {
              "UNOBSERVABLE": 7913
            },
            "d3_urgency": {
              "UNOBSERVABLE": 2049
            },
            "participant_confidence": {
              "HIGH": 1335,
              "MEDIUM": 401,
              "LOW": 313
            }
          },
          "trade_size": {
            "avg": 58482.69193731834,
            "median": 21500.0
          },
          "run_size": {
            "avg": 151599.10488042946,
            "median": 63660.0,
            "avg_length": 1.724743777452416
          },
          "recent_trades": [
            {
              "trade_id": "7987",
              "timestamp": "2026-05-11T07:59:59.803704",
              "price": 209.8,
              "size": 500.0,
              "notional": 104900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7986",
              "timestamp": "2026-05-11T07:59:56.566286",
              "price": 209.8,
              "size": 200.0,
              "notional": 41960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7985",
              "timestamp": "2026-05-11T07:59:53.812726",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7984",
              "timestamp": "2026-05-11T07:59:48.834118",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7983",
              "timestamp": "2026-05-11T07:59:48.775700",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7982",
              "timestamp": "2026-05-11T07:59:48.247988",
              "price": 210.0,
              "size": 400.0,
              "notional": 84000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7981",
              "timestamp": "2026-05-11T07:59:48.247988",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7980",
              "timestamp": "2026-05-11T07:59:47.323454",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7979",
              "timestamp": "2026-05-11T07:59:42.253429",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7978",
              "timestamp": "2026-05-11T07:59:42.239915",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7977",
              "timestamp": "2026-05-11T07:59:39.025630",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7976",
              "timestamp": "2026-05-11T07:59:38.957535",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7975",
              "timestamp": "2026-05-11T07:59:38.957535",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7974",
              "timestamp": "2026-05-11T07:59:36.571082",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7973",
              "timestamp": "2026-05-11T07:59:35.474226",
              "price": 209.6,
              "size": 200.0,
              "notional": 41920.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77216,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7972",
              "timestamp": "2026-05-11T07:59:35.191853",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7971",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7970",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7969",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 1000.0,
              "notional": 210000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7968",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7967",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 209.8,
              "size": 1000.0,
              "notional": 209800.0,
              "bucket": "MIXED",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7966",
              "timestamp": "2026-05-11T07:59:33.405523",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7965",
              "timestamp": "2026-05-11T07:59:32.721880",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7964",
              "timestamp": "2026-05-11T07:59:32.721880",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7963",
              "timestamp": "2026-05-11T07:59:31.545526",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7962",
              "timestamp": "2026-05-11T07:59:31.453985",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7961",
              "timestamp": "2026-05-11T07:59:31.044233",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7960",
              "timestamp": "2026-05-11T07:59:28.504198",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7959",
              "timestamp": "2026-05-11T07:59:28.260597",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7958",
              "timestamp": "2026-05-11T07:59:28.039265",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "1w": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 32845,
          "n_runs": 8792,
          "n_trade_days": 5,
          "first_trade_date": "2026-05-05",
          "last_trade_date": "2026-05-11",
          "period_days": 5,
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
            "retail_pct": 0.21793271426396713,
            "mixed_pct": 0.2390318161059522,
            "instit_pct": 0.4253006545897397,
            "ambiguous_pct": 0.117734815040341,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.117734815040341,
            "retail_qty_pct": 0.09345152107115665,
            "mixed_qty_pct": 0.27755678191860583,
            "instit_qty_pct": 0.5583165535357762,
            "ambiguous_qty_pct": 0.07067514347446122,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07067514347446122,
            "retail_notional_pct": 0.09295295110377313,
            "mixed_notional_pct": 0.27789935094177587,
            "instit_notional_pct": 0.5585952085380951,
            "ambiguous_notional_pct": 0.07055248941635585,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07055248941635585
          },
          "run_composition": {
            "retail_pct": 0.4512056414922657,
            "mixed_pct": 0.19062784349408554,
            "instit_pct": 0.21474067333939945,
            "ambiguous_pct": 0.14342584167424932,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14342584167424932,
            "retail_notional_pct": 0.08988549703255055,
            "mixed_notional_pct": 0.15776345243056658,
            "instit_notional_pct": 0.673435267269932,
            "unclear_notional_pct": 0.07891578326695088
          },
          "counts": {
            "trades": {
              "retail": 7158,
              "mixed": 7851,
              "institutional": 13969,
              "ambiguous": 3867,
              "unobservable": 0,
              "unclear": 3867
            },
            "runs": {
              "retail": 3967,
              "mixed": 1676,
              "institutional": 1888,
              "ambiguous": 1261,
              "unobservable": 0,
              "unclear": 1261
            }
          },
          "confidence": {
            "high": 0.6659463148316651,
            "medium": 0.19062784349408554,
            "low": 0.14342584167424932,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 5855,
            "medium": 1676,
            "low": 1261,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.4761455320444512,
            "medium": 0.13868168671030598,
            "low": 0.3851727812452428,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 15639,
            "medium": 4555,
            "low": 12651,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.9051808462238398,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.14342584167424932,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4512056414922657,
          "dominance_gap": 0.23646496815286627,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 18759,
              "UNOBSERVABLE": 9831,
              "WALK_BOOK": 4255
            },
            "d2_information": {
              "UNOBSERVABLE": 32845
            },
            "d3_urgency": {
              "UNOBSERVABLE": 8792
            },
            "participant_confidence": {
              "HIGH": 5855,
              "MEDIUM": 1676,
              "LOW": 1261
            }
          },
          "trade_size": {
            "avg": 59171.948613183136,
            "median": 21360.0
          },
          "run_size": {
            "avg": 145317.96540036396,
            "median": 59145.0,
            "avg_length": 1.7246360327570518
          },
          "recent_trades": [
            {
              "trade_id": "7987",
              "timestamp": "2026-05-11T07:59:59.803704",
              "price": 209.8,
              "size": 500.0,
              "notional": 104900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7986",
              "timestamp": "2026-05-11T07:59:56.566286",
              "price": 209.8,
              "size": 200.0,
              "notional": 41960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7985",
              "timestamp": "2026-05-11T07:59:53.812726",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7984",
              "timestamp": "2026-05-11T07:59:48.834118",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7983",
              "timestamp": "2026-05-11T07:59:48.775700",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7982",
              "timestamp": "2026-05-11T07:59:48.247988",
              "price": 210.0,
              "size": 400.0,
              "notional": 84000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7981",
              "timestamp": "2026-05-11T07:59:48.247988",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7980",
              "timestamp": "2026-05-11T07:59:47.323454",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7979",
              "timestamp": "2026-05-11T07:59:42.253429",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7978",
              "timestamp": "2026-05-11T07:59:42.239915",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7977",
              "timestamp": "2026-05-11T07:59:39.025630",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7976",
              "timestamp": "2026-05-11T07:59:38.957535",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7975",
              "timestamp": "2026-05-11T07:59:38.957535",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7974",
              "timestamp": "2026-05-11T07:59:36.571082",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7973",
              "timestamp": "2026-05-11T07:59:35.474226",
              "price": 209.6,
              "size": 200.0,
              "notional": 41920.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77216,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7972",
              "timestamp": "2026-05-11T07:59:35.191853",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7971",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7970",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7969",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 1000.0,
              "notional": 210000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7968",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7967",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 209.8,
              "size": 1000.0,
              "notional": 209800.0,
              "bucket": "MIXED",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7966",
              "timestamp": "2026-05-11T07:59:33.405523",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7965",
              "timestamp": "2026-05-11T07:59:32.721880",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7964",
              "timestamp": "2026-05-11T07:59:32.721880",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7963",
              "timestamp": "2026-05-11T07:59:31.545526",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7962",
              "timestamp": "2026-05-11T07:59:31.453985",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7961",
              "timestamp": "2026-05-11T07:59:31.044233",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7960",
              "timestamp": "2026-05-11T07:59:28.504198",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7959",
              "timestamp": "2026-05-11T07:59:28.260597",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7958",
              "timestamp": "2026-05-11T07:59:28.039265",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "2w": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 54841,
          "n_runs": 15249,
          "n_trade_days": 10,
          "first_trade_date": "2026-04-27",
          "last_trade_date": "2026-05-11",
          "period_days": 10,
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
            "retail_pct": 0.22419357779763316,
            "mixed_pct": 0.2352619390601922,
            "instit_pct": 0.416403785488959,
            "ambiguous_pct": 0.12414069765321566,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12414069765321566,
            "retail_qty_pct": 0.0929936370877588,
            "mixed_qty_pct": 0.27965483579358713,
            "instit_qty_pct": 0.5520136283337638,
            "ambiguous_qty_pct": 0.07533789878489029,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07533789878489029,
            "retail_notional_pct": 0.09273769095753076,
            "mixed_notional_pct": 0.27947721435743816,
            "instit_notional_pct": 0.5529174733301883,
            "ambiguous_notional_pct": 0.07486762135484279,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07486762135484279
          },
          "run_composition": {
            "retail_pct": 0.4490786281067611,
            "mixed_pct": 0.18676634533412026,
            "instit_pct": 0.2229654403567447,
            "ambiguous_pct": 0.14118958620237393,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14118958620237393,
            "retail_notional_pct": 0.08750318691794966,
            "mixed_notional_pct": 0.14964743736820108,
            "instit_notional_pct": 0.6851313601143254,
            "unclear_notional_pct": 0.07771801559952388
          },
          "counts": {
            "trades": {
              "retail": 12295,
              "mixed": 12902,
              "institutional": 22836,
              "ambiguous": 6808,
              "unobservable": 0,
              "unclear": 6808
            },
            "runs": {
              "retail": 6848,
              "mixed": 2848,
              "institutional": 3400,
              "ambiguous": 2153,
              "unobservable": 0,
              "unclear": 2153
            }
          },
          "confidence": {
            "high": 0.6719784903928127,
            "medium": 0.18683192340481344,
            "low": 0.14118958620237393,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 10247,
            "medium": 2849,
            "low": 2153,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.4797505515946099,
            "medium": 0.13624842727156689,
            "low": 0.38400102113382323,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 26310,
            "medium": 7472,
            "low": 21059,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.903114958357925,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.14118958620237393,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4490786281067611,
          "dominance_gap": 0.22611318775001638,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 30898,
              "UNOBSERVABLE": 16422,
              "WALK_BOOK": 7521
            },
            "d2_information": {
              "UNOBSERVABLE": 54841
            },
            "d3_urgency": {
              "UNOBSERVABLE": 15249
            },
            "participant_confidence": {
              "HIGH": 10247,
              "MEDIUM": 2849,
              "LOW": 2153
            }
          },
          "trade_size": {
            "avg": 57499.18888058204,
            "median": 21140.0
          },
          "run_size": {
            "avg": 137018.0726342711,
            "median": 51970.0,
            "avg_length": 1.6823398255623319
          },
          "recent_trades": [
            {
              "trade_id": "7987",
              "timestamp": "2026-05-11T07:59:59.803704",
              "price": 209.8,
              "size": 500.0,
              "notional": 104900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7986",
              "timestamp": "2026-05-11T07:59:56.566286",
              "price": 209.8,
              "size": 200.0,
              "notional": 41960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7985",
              "timestamp": "2026-05-11T07:59:53.812726",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7984",
              "timestamp": "2026-05-11T07:59:48.834118",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7983",
              "timestamp": "2026-05-11T07:59:48.775700",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7982",
              "timestamp": "2026-05-11T07:59:48.247988",
              "price": 210.0,
              "size": 400.0,
              "notional": 84000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7981",
              "timestamp": "2026-05-11T07:59:48.247988",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7980",
              "timestamp": "2026-05-11T07:59:47.323454",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7979",
              "timestamp": "2026-05-11T07:59:42.253429",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7978",
              "timestamp": "2026-05-11T07:59:42.239915",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7977",
              "timestamp": "2026-05-11T07:59:39.025630",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7976",
              "timestamp": "2026-05-11T07:59:38.957535",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7975",
              "timestamp": "2026-05-11T07:59:38.957535",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7974",
              "timestamp": "2026-05-11T07:59:36.571082",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7973",
              "timestamp": "2026-05-11T07:59:35.474226",
              "price": 209.6,
              "size": 200.0,
              "notional": 41920.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77216,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7972",
              "timestamp": "2026-05-11T07:59:35.191853",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7971",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7970",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7969",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 1000.0,
              "notional": 210000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7968",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7967",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 209.8,
              "size": 1000.0,
              "notional": 209800.0,
              "bucket": "MIXED",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7966",
              "timestamp": "2026-05-11T07:59:33.405523",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7965",
              "timestamp": "2026-05-11T07:59:32.721880",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7964",
              "timestamp": "2026-05-11T07:59:32.721880",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7963",
              "timestamp": "2026-05-11T07:59:31.545526",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7962",
              "timestamp": "2026-05-11T07:59:31.453985",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7961",
              "timestamp": "2026-05-11T07:59:31.044233",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7960",
              "timestamp": "2026-05-11T07:59:28.504198",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7959",
              "timestamp": "2026-05-11T07:59:28.260597",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7958",
              "timestamp": "2026-05-11T07:59:28.039265",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
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
          "n_trades": 152681,
          "n_runs": 40770,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-10",
          "last_trade_date": "2026-05-11",
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
            "retail_pct": 0.21060904762216648,
            "mixed_pct": 0.23213104446525762,
            "instit_pct": 0.4270668910997439,
            "ambiguous_pct": 0.130193016812832,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.130193016812832,
            "retail_qty_pct": 0.08363586822712228,
            "mixed_qty_pct": 0.26635402596402297,
            "instit_qty_pct": 0.570679814317453,
            "ambiguous_qty_pct": 0.07933029149140178,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07933029149140178,
            "retail_notional_pct": 0.08437186131115598,
            "mixed_notional_pct": 0.26712853118942664,
            "instit_notional_pct": 0.570095354172103,
            "ambiguous_notional_pct": 0.07840425332731435,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07840425332731435
          },
          "run_composition": {
            "retail_pct": 0.4297032131469218,
            "mixed_pct": 0.19386804022565612,
            "instit_pct": 0.22631837135148394,
            "ambiguous_pct": 0.15011037527593818,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15011037527593818,
            "retail_notional_pct": 0.07592501019273636,
            "mixed_notional_pct": 0.1489605871875405,
            "instit_notional_pct": 0.6956472478934236,
            "unclear_notional_pct": 0.07946715472629955
          },
          "counts": {
            "trades": {
              "retail": 32156,
              "mixed": 35442,
              "institutional": 65205,
              "ambiguous": 19878,
              "unobservable": 0,
              "unclear": 19878
            },
            "runs": {
              "retail": 17519,
              "mixed": 7904,
              "institutional": 9227,
              "ambiguous": 6120,
              "unobservable": 0,
              "unclear": 6120
            }
          },
          "confidence": {
            "high": 0.6559970566593083,
            "medium": 0.1938925680647535,
            "low": 0.15011037527593818,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 26745,
            "medium": 7905,
            "low": 6120,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.4880371493506068,
            "medium": 0.14375069589536354,
            "low": 0.36821215475402963,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 74514,
            "medium": 21948,
            "low": 56219,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.9062803532008828,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.15011037527593818,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4297032131469218,
          "dominance_gap": 0.20338484179543784,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 88124,
              "UNOBSERVABLE": 42309,
              "WALK_BOOK": 22248
            },
            "d2_information": {
              "UNOBSERVABLE": 152681
            },
            "d3_urgency": {
              "UNOBSERVABLE": 40770
            },
            "participant_confidence": {
              "HIGH": 26745,
              "MEDIUM": 7905,
              "LOW": 6120
            }
          },
          "trade_size": {
            "avg": 56046.52778603755,
            "median": 21520.0
          },
          "run_size": {
            "avg": 145073.30538876625,
            "median": 53420.0,
            "avg_length": 1.769364728967378
          },
          "recent_trades": [
            {
              "trade_id": "7987",
              "timestamp": "2026-05-11T07:59:59.803704",
              "price": 209.8,
              "size": 500.0,
              "notional": 104900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7986",
              "timestamp": "2026-05-11T07:59:56.566286",
              "price": 209.8,
              "size": 200.0,
              "notional": 41960.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7985",
              "timestamp": "2026-05-11T07:59:53.812726",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7984",
              "timestamp": "2026-05-11T07:59:48.834118",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7983",
              "timestamp": "2026-05-11T07:59:48.775700",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7982",
              "timestamp": "2026-05-11T07:59:48.247988",
              "price": 210.0,
              "size": 400.0,
              "notional": 84000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7981",
              "timestamp": "2026-05-11T07:59:48.247988",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7980",
              "timestamp": "2026-05-11T07:59:47.323454",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7979",
              "timestamp": "2026-05-11T07:59:42.253429",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7978",
              "timestamp": "2026-05-11T07:59:42.239915",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7977",
              "timestamp": "2026-05-11T07:59:39.025630",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7976",
              "timestamp": "2026-05-11T07:59:38.957535",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7975",
              "timestamp": "2026-05-11T07:59:38.957535",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7974",
              "timestamp": "2026-05-11T07:59:36.571082",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7973",
              "timestamp": "2026-05-11T07:59:35.474226",
              "price": 209.6,
              "size": 200.0,
              "notional": 41920.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77216,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7972",
              "timestamp": "2026-05-11T07:59:35.191853",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7971",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 200.0,
              "notional": 42000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7970",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7969",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 1000.0,
              "notional": 210000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7968",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7967",
              "timestamp": "2026-05-11T07:59:35.151257",
              "price": 209.8,
              "size": 1000.0,
              "notional": 209800.0,
              "bucket": "MIXED",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7966",
              "timestamp": "2026-05-11T07:59:33.405523",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7965",
              "timestamp": "2026-05-11T07:59:32.721880",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7964",
              "timestamp": "2026-05-11T07:59:32.721880",
              "price": 209.8,
              "size": 100.0,
              "notional": 20980.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 77214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7963",
              "timestamp": "2026-05-11T07:59:31.545526",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7962",
              "timestamp": "2026-05-11T07:59:31.453985",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7961",
              "timestamp": "2026-05-11T07:59:31.044233",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7960",
              "timestamp": "2026-05-11T07:59:28.504198",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7959",
              "timestamp": "2026-05-11T07:59:28.260597",
              "price": 210.0,
              "size": 300.0,
              "notional": 63000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "7958",
              "timestamp": "2026-05-11T07:59:28.039265",
              "price": 210.0,
              "size": 100.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 77213,
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
      "n_trades": 152681,
      "n_runs": 40770,
      "n_trade_days": 21,
      "first_trade_date": "2026-04-10",
      "last_trade_date": "2026-05-11",
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
        "retail_pct": 0.21060904762216648,
        "mixed_pct": 0.23213104446525762,
        "instit_pct": 0.4270668910997439,
        "ambiguous_pct": 0.130193016812832,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.130193016812832,
        "retail_qty_pct": 0.08363586822712228,
        "mixed_qty_pct": 0.26635402596402297,
        "instit_qty_pct": 0.570679814317453,
        "ambiguous_qty_pct": 0.07933029149140178,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.07933029149140178,
        "retail_notional_pct": 0.08437186131115598,
        "mixed_notional_pct": 0.26712853118942664,
        "instit_notional_pct": 0.570095354172103,
        "ambiguous_notional_pct": 0.07840425332731435,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.07840425332731435
      },
      "run_composition": {
        "retail_pct": 0.4297032131469218,
        "mixed_pct": 0.19386804022565612,
        "instit_pct": 0.22631837135148394,
        "ambiguous_pct": 0.15011037527593818,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.15011037527593818
      },
      "trade_size": {
        "avg": 56046.52778603755,
        "median": 21520.0
      },
      "run_size": {
        "avg": 145073.30538876625,
        "median": 53420.0,
        "avg_length": 1.769364728967378
      },
      "confidence": {
        "high": 0.6559970566593083,
        "medium": 0.1938925680647535,
        "low": 0.15011037527593818,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 26745,
        "medium": 7905,
        "low": 6120,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.4880371493506068,
        "medium": 0.14375069589536354,
        "low": 0.36821215475402963,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 74514,
        "medium": 21948,
        "low": 56219,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 32156,
          "mixed": 35442,
          "institutional": 65205,
          "ambiguous": 19878,
          "unobservable": 0,
          "unclear": 19878
        },
        "runs": {
          "retail": 17519,
          "mixed": 7904,
          "institutional": 9227,
          "ambiguous": 6120,
          "unobservable": 0,
          "unclear": 6120
        }
      },
      "observability": {
        "avg_feature_coverage": 0.9062803532008828,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.15011037527593818,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.4297032131469218,
      "dominance_gap": 0.20338484179543784,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-03",
            "n_trades": 117440,
            "n_runs": 28870,
            "retail_pct": 0.18781505449591282,
            "mixed_pct": 0.22010388283378746,
            "instit_pct": 0.43807050408719345,
            "ambiguous_pct": 0.15401055858310628,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15401055858310628,
            "avg_trade_size": 41583.43237440395,
            "avg_run_notional": 129423.92985625217,
            "retail_qty_pct": 0.07506354204874481,
            "mixed_qty_pct": 0.24420047496028963,
            "instit_qty_pct": 0.5896489040734071,
            "ambiguous_qty_pct": 0.09108707891755842,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.09108707891755842,
            "retail_notional_pct": 0.07418795707725379,
            "mixed_notional_pct": 0.24395448058349403,
            "instit_notional_pct": 0.5909915689861701,
            "ambiguous_notional_pct": 0.09086599335308206,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09086599335308206,
            "run_retail_pct": 0.3948735711811569,
            "run_mixed_pct": 0.21610668514028403,
            "run_instit_pct": 0.2190162798753031,
            "run_ambiguous_pct": 0.17000346380325598,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.17000346380325598,
            "avg_feature_coverage": 0.913746103221337,
            "high_confidence_pct": 0.6137166608936613,
            "medium_confidence_pct": 0.21617596120540353,
            "low_confidence_pct": 0.17010737790093522,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 148554,
            "n_runs": 39016,
            "retail_pct": 0.20706275159201368,
            "mixed_pct": 0.22768824804448215,
            "instit_pct": 0.42903590613514275,
            "ambiguous_pct": 0.1362130942283614,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1362130942283614,
            "avg_trade_size": 53701.50104137216,
            "avg_run_notional": 143324.000804798,
            "retail_qty_pct": 0.08083909932042228,
            "mixed_qty_pct": 0.26157549729848134,
            "instit_qty_pct": 0.5760435874686909,
            "ambiguous_qty_pct": 0.08154181591240547,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08154181591240547,
            "retail_notional_pct": 0.08095480344067228,
            "mixed_notional_pct": 0.26223529775246485,
            "instit_notional_pct": 0.5757558285188332,
            "ambiguous_notional_pct": 0.0810540702880296,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0810540702880296,
            "run_retail_pct": 0.4230572072995694,
            "run_mixed_pct": 0.1954582735288087,
            "run_instit_pct": 0.227342628665163,
            "run_ambiguous_pct": 0.15414189050645888,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15414189050645888,
            "avg_feature_coverage": 0.9070599241336887,
            "high_confidence_pct": 0.6503742054541727,
            "medium_confidence_pct": 0.19548390403936847,
            "low_confidence_pct": 0.15414189050645888,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-05",
            "n_trades": 34837,
            "n_runs": 9334,
            "retail_pct": 0.2199098659471252,
            "mixed_pct": 0.2360421391049746,
            "instit_pct": 0.42632832907540835,
            "ambiguous_pct": 0.11771966587249189,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11771966587249189,
            "avg_trade_size": 58002.42501076441,
            "avg_run_notional": 141759.92925862435,
            "retail_qty_pct": 0.0950181449855457,
            "mixed_qty_pct": 0.2759482469023025,
            "instit_qty_pct": 0.5579618483773504,
            "ambiguous_qty_pct": 0.07107175973480132,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07107175973480132,
            "retail_notional_pct": 0.09436406551214825,
            "mixed_notional_pct": 0.2764594729721953,
            "instit_notional_pct": 0.5582579775517265,
            "ambiguous_notional_pct": 0.07091848396392998,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07091848396392998,
            "run_retail_pct": 0.4533961859867152,
            "run_mixed_pct": 0.19102206985215342,
            "run_instit_pct": 0.2151274908935076,
            "run_ambiguous_pct": 0.14045425326762373,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.14045425326762373,
            "avg_feature_coverage": 0.9043711163488324,
            "high_confidence_pct": 0.6685236768802229,
            "medium_confidence_pct": 0.19102206985215342,
            "low_confidence_pct": 0.14045425326762373,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [],
      "peer_comparison_periods": {
        "1d": [],
        "1w": [],
        "2w": [],
        "30d": []
      },
      "peer_activity_enabled": false,
      "peer_activity_reason": "Disabled for XHKG to avoid fetching peer L2/L3 history.",
      "recent_trades": [
        {
          "trade_id": "7987",
          "timestamp": "2026-05-11T07:59:59.803704",
          "price": 209.8,
          "size": 500.0,
          "notional": 104900.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77219,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7986",
          "timestamp": "2026-05-11T07:59:56.566286",
          "price": 209.8,
          "size": 200.0,
          "notional": 41960.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77219,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7985",
          "timestamp": "2026-05-11T07:59:53.812726",
          "price": 209.8,
          "size": 100.0,
          "notional": 20980.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77219,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7984",
          "timestamp": "2026-05-11T07:59:48.834118",
          "price": 209.8,
          "size": 100.0,
          "notional": 20980.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 77218,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7983",
          "timestamp": "2026-05-11T07:59:48.775700",
          "price": 210.0,
          "size": 100.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77217,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7982",
          "timestamp": "2026-05-11T07:59:48.247988",
          "price": 210.0,
          "size": 400.0,
          "notional": 84000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77217,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7981",
          "timestamp": "2026-05-11T07:59:48.247988",
          "price": 210.0,
          "size": 300.0,
          "notional": 63000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77217,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7980",
          "timestamp": "2026-05-11T07:59:47.323454",
          "price": 210.0,
          "size": 100.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77217,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7979",
          "timestamp": "2026-05-11T07:59:42.253429",
          "price": 210.0,
          "size": 100.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77217,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7978",
          "timestamp": "2026-05-11T07:59:42.239915",
          "price": 210.0,
          "size": 200.0,
          "notional": 42000.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7977",
          "timestamp": "2026-05-11T07:59:39.025630",
          "price": 210.0,
          "size": 100.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77217,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7976",
          "timestamp": "2026-05-11T07:59:38.957535",
          "price": 210.0,
          "size": 200.0,
          "notional": 42000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77217,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7975",
          "timestamp": "2026-05-11T07:59:38.957535",
          "price": 210.0,
          "size": 300.0,
          "notional": 63000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77217,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7974",
          "timestamp": "2026-05-11T07:59:36.571082",
          "price": 210.0,
          "size": 100.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77217,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7973",
          "timestamp": "2026-05-11T07:59:35.474226",
          "price": 209.6,
          "size": 200.0,
          "notional": 41920.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 77216,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7972",
          "timestamp": "2026-05-11T07:59:35.191853",
          "price": 210.0,
          "size": 100.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77215,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7971",
          "timestamp": "2026-05-11T07:59:35.151257",
          "price": 210.0,
          "size": 200.0,
          "notional": 42000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77215,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7970",
          "timestamp": "2026-05-11T07:59:35.151257",
          "price": 210.0,
          "size": 300.0,
          "notional": 63000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77215,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7969",
          "timestamp": "2026-05-11T07:59:35.151257",
          "price": 210.0,
          "size": 1000.0,
          "notional": 210000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77215,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7968",
          "timestamp": "2026-05-11T07:59:35.151257",
          "price": 210.0,
          "size": 300.0,
          "notional": 63000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77215,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7967",
          "timestamp": "2026-05-11T07:59:35.151257",
          "price": 209.8,
          "size": 1000.0,
          "notional": 209800.0,
          "bucket": "MIXED",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7966",
          "timestamp": "2026-05-11T07:59:33.405523",
          "price": 209.8,
          "size": 100.0,
          "notional": 20980.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77215,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7965",
          "timestamp": "2026-05-11T07:59:32.721880",
          "price": 209.8,
          "size": 100.0,
          "notional": 20980.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7964",
          "timestamp": "2026-05-11T07:59:32.721880",
          "price": 209.8,
          "size": 100.0,
          "notional": 20980.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 77214,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7963",
          "timestamp": "2026-05-11T07:59:31.545526",
          "price": 210.0,
          "size": 100.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77213,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7962",
          "timestamp": "2026-05-11T07:59:31.453985",
          "price": 210.0,
          "size": 100.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77213,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7961",
          "timestamp": "2026-05-11T07:59:31.044233",
          "price": 210.0,
          "size": 100.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77213,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7960",
          "timestamp": "2026-05-11T07:59:28.504198",
          "price": 210.0,
          "size": 100.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77213,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7959",
          "timestamp": "2026-05-11T07:59:28.260597",
          "price": 210.0,
          "size": 300.0,
          "notional": 63000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77213,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "7958",
          "timestamp": "2026-05-11T07:59:28.039265",
          "price": 210.0,
          "size": 100.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 77213,
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
      "total_trades": 152680,
      "price_moving_trades": 54750,
      "pct_price_moving": 35.85931359706576,
      "all_movers": {
        "count": 54750,
        "avg_size": 53588.253802739724,
        "median_size": 21120.0,
        "retail_count": 15031,
        "mixed_count": 10372,
        "institutional_count": 22047,
        "ambiguous_count": 7300,
        "unobservable_count": 0,
        "retail_pct": 27.453881278538812,
        "mixed_pct": 18.944292237442923,
        "instit_pct": 40.26849315068493,
        "unclear_pct": 13.333333333333334
      },
      "positive_movers": {
        "count": 27096,
        "avg_size": 55103.256034100974,
        "median_size": 21340.0,
        "retail_count": 7304,
        "mixed_count": 5221,
        "institutional_count": 10975,
        "ambiguous_count": 3596,
        "unobservable_count": 0,
        "retail_pct": 26.956008266902863,
        "mixed_pct": 19.268526719811042,
        "instit_pct": 40.50413345143195,
        "unclear_pct": 13.271331561854149
      },
      "negative_movers": {
        "count": 27654,
        "avg_size": 52103.8211542634,
        "median_size": 21000.0,
        "retail_count": 7727,
        "mixed_count": 5151,
        "institutional_count": 11072,
        "ambiguous_count": 3704,
        "unobservable_count": 0,
        "retail_pct": 27.94170825197078,
        "mixed_pct": 18.626600130180083,
        "instit_pct": 40.03760757937369,
        "unclear_pct": 13.394084038475446
      }
    },
    "short_selling": {
      "data_available": false
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1M",
        "1W",
        "2W"
      ],
      "session": {
        "1D": {
          "opening": 0.009092945115101062,
          "continuous": 0.9809529398119591,
          "closing": 0.008859769822971186,
          "auctions": 0.017952714938072246,
          "other": 0.001094345249968776
        },
        "1W": {
          "opening": 0.0056044670956797455,
          "continuous": 0.9849612503470234,
          "closing": 0.007690043710321055,
          "auctions": 0.0132945108060008,
          "other": 0.00174423884697579
        },
        "2W": {
          "opening": 0.004985651552738501,
          "continuous": 0.9860208016044715,
          "closing": 0.006557949957307866,
          "auctions": 0.011543601510046367,
          "other": 0.00243559688548231
        },
        "1M": {
          "opening": 0.003934113541909031,
          "continuous": 0.9874486625819633,
          "closing": 0.004819097367050144,
          "auctions": 0.008753210908959176,
          "other": 0.003798126509077659
        }
      },
      "hhi": {
        "1D": 0.12121399029402562,
        "1W": 0.1291603289137969,
        "2W": 0.14210363717540322,
        "1M": 0.1505558947106154
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.003
        },
        {
          "time": "09:30",
          "avg_share": 0.267
        },
        {
          "time": "10:00",
          "avg_share": 0.1376
        },
        {
          "time": "10:30",
          "avg_share": 0.0696
        },
        {
          "time": "11:00",
          "avg_share": 0.0645
        },
        {
          "time": "11:30",
          "avg_share": 0.0318
        },
        {
          "time": "13:00",
          "avg_share": 0.1003
        },
        {
          "time": "13:30",
          "avg_share": 0.0789
        },
        {
          "time": "14:00",
          "avg_share": 0.0551
        },
        {
          "time": "14:30",
          "avg_share": 0.0498
        },
        {
          "time": "15:00",
          "avg_share": 0.0446
        },
        {
          "time": "15:30",
          "avg_share": 0.0931
        },
        {
          "time": "16:00",
          "avg_share": 0.0047
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1989",
          "auctions_pct": 1.3806462000112878,
          "hhi": 0.15890540810900128,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "6088",
          "auctions_pct": 1.6664015793510796,
          "hhi": 0.14817728527722593,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6613",
          "auctions_pct": 2.109923664834302,
          "hhi": 0.131814073835523,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2382",
          "auctions_pct": 7.939676524063423,
          "hhi": 0.11633471246770977,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2018",
          "auctions_pct": 8.926964813541556,
          "hhi": 0.1158289276105594,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1415",
          "auctions_pct": 2.877372158563816,
          "hhi": 0.11944182882133036,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1478",
          "auctions_pct": 2.8479590171054476,
          "hhi": 0.14025766277405133,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3808",
          "auctions_pct": 7.315349278588283,
          "hhi": 0.11876957962329898,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2050",
          "auctions_pct": 3.2099285369430763,
          "hhi": 0.14126016870656544,
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
