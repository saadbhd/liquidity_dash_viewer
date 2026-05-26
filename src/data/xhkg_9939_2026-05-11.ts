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
      "ticker": "9939",
      "name": "KINTOR PHARMA-B",
      "marketCap": 1396248280.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "719",
      "name": "SHANDONG XINHUA",
      "marketCap": 1275300000.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "6660",
      "name": "AIM VACCINE",
      "marketCap": 1462100287.6799998,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "2511",
      "name": "HIGHTIDE-B",
      "marketCap": 2319582212.08,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "6996",
      "name": "ANTENGENE-B",
      "marketCap": 3396220660.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "1763",
      "name": "CIRC",
      "marketCap": 1528203768.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "3880",
      "name": "MEDTIDE",
      "marketCap": 3079896000.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "9989",
      "name": "HEPALINK",
      "marketCap": 1093869665.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "6896",
      "name": "GOLDEN THROAT",
      "marketCap": 2631915120.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "9939",
    "company": "KINTOR PHARMA-B",
    "asof_date": "2026-05-11",
    "industry": "Healthcare - Pharmaceuticals & Biotechnology",
    "sector": "Pharmaceuticals",
    "market_cap_display": "1.4B",
    "market_cap_category": "mid",
    "universe_total": 2570,
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
          "score_pca": 70.3112840466926,
          "score_pca_percentile": 70.3112840466926,
          "rank_pca": 764,
          "total": 2570,
          "adv_notional_sgd": 4022199.9999999995,
          "adv_volume_shares": 1436500.0,
          "free_float_shares": 392909590.0,
          "turnover_ratio": 0.0036560573642399515,
          "votes": 280.0,
          "trades": 280.0,
          "spread_pct": 0.01021907668166195,
          "spread_ticks": 2.9155963302752292,
          "amihud": 1.0217266772154284e-08,
          "volatility": 0.6577513753850458
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5376758410868582,
          "loadings": {
            "log_adv": 0.5406568831777169,
            "log_trades": 0.5009940282523603,
            "log_turnover": 0.5005486227737025,
            "neg_spread": 0.3895727224163878,
            "neg_amihud": 0.05177173838592633,
            "neg_vol": -0.2273740873999558
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
          "peer_median_adv": 2342704.0,
          "peer_median_score_pca": 64.8443579766537,
          "peer_median_trades": 262.0,
          "peer_median_volatility": 0.3287861491758403,
          "peer_median_spread_pct": 0.006641227636694169,
          "peer_median_spread_ticks": 2.421207034760446,
          "peer_median_amihud": 3.2490241278273224e-09,
          "peer_median_turnover_ratio": 0.002995126081403268,
          "target_vs_peer": {
            "score_pca_delta": 5.47,
            "adv_delta_pct": 71.7,
            "trades_delta_pct": 6.87,
            "volatility_delta_pct": -100.05,
            "spread_pct_delta_pct": -53.87,
            "spread_ticks_delta_pct": 20.42,
            "amihud_delta_pct": -214.47,
            "turnover_ratio_delta_pct": 22.07
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9939",
            "score_pca": 70.3112840466926,
            "rank_pca": 764,
            "adv": 4022199.9999999995,
            "trades": 280.0,
            "volatility": 0.6577513753850458,
            "spread_pct": 0.01021907668166195,
            "spread_ticks": 2.9155963302752292,
            "amihud": 1.0217266772154284e-08,
            "turnover_ratio": 0.0036560573642399515,
            "is_target": true
          },
          {
            "ticker": "719",
            "score_pca": 88.56031128404669,
            "rank_pca": 295,
            "adv": 45453000.0,
            "trades": 1487.0,
            "volatility": 0.7748039860804418,
            "spread_pct": 0.0032527856870859673,
            "spread_ticks": 2.132447954055994,
            "amihud": 1.1691218757476405e-09,
            "turnover_ratio": 0.039903038487198304,
            "is_target": false
          },
          {
            "ticker": "6660",
            "score_pca": 89.72762645914398,
            "rank_pca": 265,
            "adv": 17803584.0,
            "trades": 1195.0,
            "volatility": 1.5235446288046002,
            "spread_pct": 0.008506647332328551,
            "spread_ticks": 2.5030549898167007,
            "amihud": 3.476224271154183e-09,
            "turnover_ratio": 0.01715327059397019,
            "is_target": false
          },
          {
            "ticker": "2511",
            "score_pca": 66.42023346303502,
            "rank_pca": 864,
            "adv": 2243150.0,
            "trades": 304.0,
            "volatility": 0.42066883856167436,
            "spread_pct": 0.008552530956104296,
            "spread_ticks": 3.4904458598726116,
            "amihud": 8.614524885801002e-09,
            "turnover_ratio": 0.002073569728539135,
            "is_target": false
          },
          {
            "ticker": "6996",
            "score_pca": 81.78988326848248,
            "rank_pca": 469,
            "adv": 13542500.0,
            "trades": 993.0,
            "volatility": 0.9736631394820835,
            "spread_pct": 0.004775807941059787,
            "spread_ticks": 2.3393590797041908,
            "amihud": 1.8157772888629239e-09,
            "turnover_ratio": 0.006935226317674436,
            "is_target": false
          },
          {
            "ticker": "1763",
            "score_pca": 60.311284046692606,
            "rank_pca": 1021,
            "adv": 2442258.0,
            "trades": 93.0,
            "volatility": 0.23690345979000627,
            "spread_pct": 0.017058665630746803,
            "spread_ticks": null,
            "amihud": 3.021823984500462e-09,
            "turnover_ratio": 0.0023556474712732663,
            "is_target": false
          },
          {
            "ticker": "3880",
            "score_pca": 63.26848249027237,
            "rank_pca": 945,
            "adv": 2182860.0,
            "trades": 161.0,
            "volatility": 0.1308983524194738,
            "spread_pct": 0.0037570761003722845,
            "spread_ticks": null,
            "amihud": 2.0995168818499423e-09,
            "turnover_ratio": 0.00363460469153327,
            "is_target": false
          },
          {
            "ticker": "9989",
            "score_pca": 62.52918287937743,
            "rank_pca": 964,
            "adv": 1590400.0,
            "trades": 220.0,
            "volatility": 0.1349573495830146,
            "spread_pct": 0.004050087166694568,
            "spread_ticks": 2.0,
            "amihud": 3.8184573025194325e-09,
            "turnover_ratio": 0.0017297718052601278,
            "is_target": false
          },
          {
            "ticker": "6896",
            "score_pca": 49.64980544747082,
            "rank_pca": 1295,
            "adv": 911360.0,
            "trades": 38.0,
            "volatility": 0.21424752335923616,
            "spread_pct": 0.012513495583854745,
            "spread_ticks": 4.453703703703703,
            "amihud": 6.129951038855117e-09,
            "turnover_ratio": 0.00034627256520339457,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Pharmaceuticals",
          "sector_count": 53,
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
              "mean": 76147738.84295587,
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
              "mean": 3.2672345372303994e-06,
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
              "mean": 0.46948306364847203,
              "median": 0.3467150657358996,
              "min": 0.0,
              "max": 1.7259461155419464,
              "p5": 0.0,
              "p95": 1.2721915152428052,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 97612761.25018868,
              "median": 10673856.0,
              "min": 0.0,
              "max": 1322020388.25,
              "p5": 684.0000000000001,
              "p95": 457223029.31199986,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.020327755331413455,
              "median": 0.008021947954148373,
              "min": 0.0007752191254066996,
              "max": 0.17749469214437363,
              "p5": 0.0012363061532015573,
              "p95": 0.0772919254658385,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009466431009988924,
              "median": 0.003791468953582795,
              "min": 0.0,
              "max": 0.1513407605016992,
              "p5": 1.627749416278886e-05,
              "p95": 0.02991271353910499,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.176417449956269e-07,
              "median": 9.026131272356822e-10,
              "min": 0.0,
              "max": 1.8864365214110528e-05,
              "p5": 6.618657380604147e-12,
              "p95": 4.91794678693748e-07,
              "count": 50
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2242.698113207547,
              "median": 568.0,
              "min": 0.0,
              "max": 17161.0,
              "p5": 1.2000000000000002,
              "p95": 10353.199999999999,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 10771139.0,
              "median": 2342704.0,
              "min": 911360.0,
              "max": 45453000.0,
              "p5": 1149024.0,
              "p95": 35775704.39999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 561.375,
              "median": 262.0,
              "min": 38.0,
              "max": 1487.0,
              "p5": 57.25,
              "p95": 1384.7999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5512109097600663,
              "median": 0.3287861491758403,
              "min": 0.1308983524194738,
              "max": 1.5235446288046002,
              "p5": 0.1323190014267131,
              "p95": 1.331086107541719,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007808387049780876,
              "median": 0.006641227636694169,
              "min": 0.0032527856870859673,
              "max": 0.017058665630746803,
              "p5": 0.0034292873317361785,
              "p95": 0.01546785611433458,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.8198352645255333,
              "median": 2.421207034760446,
              "min": 2.0,
              "max": 4.453703703703703,
              "p5": 2.0331119885139985,
              "p95": 4.212889242745931,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.768174691161338e-09,
              "median": 3.2490241278273224e-09,
              "min": 1.1691218757476405e-09,
              "max": 8.614524885801002e-09,
              "p5": 1.3954512703379898e-09,
              "p95": 7.74492403936994e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009266425207581514,
              "median": 0.002995126081403268,
              "min": 0.00034627256520339457,
              "max": 0.039903038487198304,
              "p5": 0.0008304972992232512,
              "p95": 0.03194061972456845,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.04109589041095896,
            "market": 0.0058650586380804,
            "sector": 0.006072874493926905,
            "peers": 0.0007449615366059703,
            "vs_market": -0.04696094904903936,
            "vs_sector": -0.04716876490488586,
            "vs_peers": -0.04184085194756493
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 72.7237354085603,
          "score_pca_percentile": 72.7237354085603,
          "rank_pca": 702,
          "total": 2570,
          "adv_notional_sgd": 4872010.0,
          "adv_volume_shares": 1703500.0,
          "free_float_shares": 392909590.0,
          "turnover_ratio": 0.0043356030072974295,
          "votes": 291.0,
          "trades": 291.0,
          "spread_pct": 0.00903920141755563,
          "spread_ticks": 2.6335403726708075,
          "amihud": 4.460732528410985e-09,
          "volatility": 0.7516897742438249
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5610854440459763,
          "loadings": {
            "log_adv": 0.5285114754178943,
            "log_trades": 0.4851220159244424,
            "log_turnover": 0.47738354970043945,
            "neg_spread": 0.4539732955039902,
            "neg_amihud": 0.21575574480463186,
            "neg_vol": 0.06924523121096733
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
          "peer_median_adv": 2431563.0,
          "peer_median_score_pca": 69.74708171206225,
          "peer_median_trades": 161.0,
          "peer_median_volatility": 0.329670326506681,
          "peer_median_spread_pct": 0.009379973700408255,
          "peer_median_spread_ticks": 2.5871696772189807,
          "peer_median_amihud": 3.079575050855203e-09,
          "peer_median_turnover_ratio": 0.002668486135960978,
          "target_vs_peer": {
            "score_pca_delta": 2.98,
            "adv_delta_pct": 100.4,
            "trades_delta_pct": 80.75,
            "volatility_delta_pct": -128.01,
            "spread_pct_delta_pct": 3.63,
            "spread_ticks_delta_pct": 1.79,
            "amihud_delta_pct": -44.85,
            "turnover_ratio_delta_pct": 62.47
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9939",
            "score_pca": 72.7237354085603,
            "rank_pca": 702,
            "adv": 4872010.0,
            "trades": 291.0,
            "volatility": 0.7516897742438249,
            "spread_pct": 0.00903920141755563,
            "spread_ticks": 2.6335403726708075,
            "amihud": 4.460732528410985e-09,
            "turnover_ratio": 0.0043356030072974295,
            "is_target": true
          },
          {
            "ticker": "719",
            "score_pca": 70.19455252918287,
            "rank_pca": 767,
            "adv": 2855660.0,
            "trades": 106.0,
            "volatility": 0.21978709756051112,
            "spread_pct": 0.00371934446553792,
            "spread_ticks": 2.3342175066313,
            "amihud": 2.1406163456664778e-09,
            "turnover_ratio": 0.002606615751537846,
            "is_target": false
          },
          {
            "ticker": "6660",
            "score_pca": 69.8443579766537,
            "rank_pca": 776,
            "adv": 2624400.0,
            "trades": 205.0,
            "volatility": 1.1981895841509487,
            "spread_pct": 0.010389453886576777,
            "spread_ticks": 2.7369614512471654,
            "amihud": 1.5964363708754805e-08,
            "turnover_ratio": 0.0033713843494894333,
            "is_target": false
          },
          {
            "ticker": "2511",
            "score_pca": 69.64980544747081,
            "rank_pca": 781,
            "adv": 2719796.0,
            "trades": 226.0,
            "volatility": 0.8543933542622152,
            "spread_pct": 0.016159090544819253,
            "spread_ticks": 6.158850226928895,
            "amihud": 8.331300618501557e-09,
            "turnover_ratio": 0.00273035652038411,
            "is_target": false
          },
          {
            "ticker": "6996",
            "score_pca": 78.52140077821012,
            "rank_pca": 553,
            "adv": 10379110.799999999,
            "trades": 893.0,
            "volatility": 0.4786935405399073,
            "spread_pct": 0.004475805767559693,
            "spread_ticks": 2.4373779031907965,
            "amihud": 1.952740910539253e-09,
            "turnover_ratio": 0.005012820502644002,
            "is_target": false
          },
          {
            "ticker": "1763",
            "score_pca": 67.2762645914397,
            "rank_pca": 842,
            "adv": 2184840.0,
            "trades": 101.0,
            "volatility": 0.3318794169574278,
            "spread_pct": 0.012856517245415066,
            "spread_ticks": null,
            "amihud": 2.2949559846186225e-09,
            "turnover_ratio": 0.002130773456018698,
            "is_target": false
          },
          {
            "ticker": "3880",
            "score_pca": 70.62256809338521,
            "rank_pca": 756,
            "adv": 2238726.0,
            "trades": 161.0,
            "volatility": 0.19061532746474666,
            "spread_pct": 0.008988542662082415,
            "spread_ticks": null,
            "amihud": 2.3406927991909733e-09,
            "turnover_ratio": 0.0036924690448313117,
            "is_target": false
          },
          {
            "ticker": "9989",
            "score_pca": 69.1828793774319,
            "rank_pca": 793,
            "adv": 1435070.0,
            "trades": 161.0,
            "volatility": 0.152855044766955,
            "spread_pct": 0.0048459516384476015,
            "spread_ticks": 2.3630573248407645,
            "amihud": 3.8184573025194325e-09,
            "turnover_ratio": 0.00157030846696271,
            "is_target": false
          },
          {
            "ticker": "6896",
            "score_pca": 61.71206225680934,
            "rank_pca": 985,
            "adv": 1138110.0,
            "trades": 47.0,
            "volatility": 0.3274612360559342,
            "spread_pct": 0.009771404738734094,
            "spread_ticks": 3.4959349593495936,
            "amihud": 9.669372253716953e-09,
            "turnover_ratio": 0.00043486964731598185,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Pharmaceuticals",
          "sector_count": 53,
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
              "mean": 57709613.774198756,
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
              "mean": 1.241507714895192e-06,
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
              "mean": 0.49893177669831723,
              "median": 0.36399396538490264,
              "min": 0.14922972078455754,
              "max": 2.34251912260224,
              "p5": 0.1967223173790892,
              "p95": 1.2337219997819793,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 68733701.1162264,
              "median": 4872010.0,
              "min": 0.0,
              "max": 950925805.6999999,
              "p5": 7804.400000000001,
              "p95": 330662480.9879999,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.020715348454733676,
              "median": 0.008068222248576859,
              "min": 0.0007405663939203457,
              "max": 0.17749469214437363,
              "p5": 0.0014567775063355493,
              "p95": 0.08394825265802182,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004464543343656875,
              "median": 0.00273035652038411,
              "min": 0.0,
              "max": 0.0385317488405679,
              "p5": 9.189492651057327e-05,
              "p95": 0.012966830496710314,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9811769579298473e-07,
              "median": 2.1406163456664778e-09,
              "min": 0.0,
              "max": 2.92223874421941e-06,
              "p5": 3.600070892273993e-11,
              "p95": 1.2716671264887776e-06,
              "count": 53
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1678.0566037735848,
              "median": 289.0,
              "min": 0.0,
              "max": 17161.0,
              "p5": 2.0,
              "p95": 7028.199999999996,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3196964.0999999996,
              "median": 2431563.0,
              "min": 1138110.0,
              "max": 10379110.799999999,
              "p5": 1242046.0,
              "p95": 7745903.019999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 237.5,
              "median": 161.0,
              "min": 47.0,
              "max": 893.0,
              "p5": 65.9,
              "p95": 659.5499999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4692343252198307,
              "median": 0.329670326506681,
              "min": 0.152855044766955,
              "max": 1.1981895841509487,
              "p5": 0.1660711437111821,
              "p95": 1.0778609036898918,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008900763868646602,
              "median": 0.009379973700408255,
              "min": 0.00371934446553792,
              "max": 0.016159090544819253,
              "p5": 0.003984105921245541,
              "p95": 0.015003189890027786,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.2543998953647524,
              "median": 2.5871696772189807,
              "min": 2.3342175066313,
              "max": 6.158850226928895,
              "p5": 2.341427461183666,
              "p95": 5.49312141003407,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.814062490438509e-09,
              "median": 3.079575050855203e-09,
              "min": 1.952740910539253e-09,
              "max": 1.5964363708754805e-08,
              "p5": 2.0184973128337816e-09,
              "p95": 1.3761116699491554e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026936997173980116,
              "median": 0.002668486135960978,
              "min": 0.00043486964731598185,
              "max": 0.005012820502644002,
              "p5": 0.0008322732341923367,
              "p95": 0.0045506974924095596,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.04477611940298476,
            "market": 0.054164598055107094,
            "sector": -0.05346356780149686,
            "peers": -0.05943136059808074,
            "vs_market": -0.009388478652122334,
            "vs_sector": 0.09823968720448162,
            "vs_peers": 0.1042074800010655
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 72.25680933852139,
          "score_pca_percentile": 72.25680933852139,
          "rank_pca": 714,
          "total": 2570,
          "adv_notional_sgd": 6142475.0,
          "adv_volume_shares": 2217500.0,
          "free_float_shares": 392909590.0,
          "turnover_ratio": 0.005643791998052275,
          "votes": 347.0,
          "trades": 347.0,
          "spread_pct": 0.009127988961501726,
          "spread_ticks": 2.6280623608017817,
          "amihud": 4.16454109604627e-09,
          "volatility": 1.1316428775023035
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6106320128629137,
          "loadings": {
            "log_adv": 0.5032599475646604,
            "log_trades": 0.4580227867403358,
            "log_turnover": 0.4557004855468642,
            "neg_spread": 0.46197692150792097,
            "neg_amihud": 0.3166788926354883,
            "neg_vol": 0.12479351918032573
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
          "peer_median_adv": 2333392.0,
          "peer_median_score_pca": 69.5136186770428,
          "peer_median_trades": 126.5,
          "peer_median_volatility": 0.43322226162452765,
          "peer_median_spread_pct": 0.010070189192866653,
          "peer_median_spread_ticks": 2.799553992623724,
          "peer_median_amihud": 3.6469051786435125e-09,
          "peer_median_turnover_ratio": 0.0024938427151759675,
          "target_vs_peer": {
            "score_pca_delta": 2.74,
            "adv_delta_pct": 163.2,
            "trades_delta_pct": 174.31,
            "volatility_delta_pct": -161.22,
            "spread_pct_delta_pct": 9.36,
            "spread_ticks_delta_pct": -6.13,
            "amihud_delta_pct": -14.19,
            "turnover_ratio_delta_pct": 126.31
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9939",
            "score_pca": 72.25680933852139,
            "rank_pca": 714,
            "adv": 6142475.0,
            "trades": 347.0,
            "volatility": 1.1316428775023035,
            "spread_pct": 0.009127988961501726,
            "spread_ticks": 2.6280623608017817,
            "amihud": 4.16454109604627e-09,
            "turnover_ratio": 0.005643791998052275,
            "is_target": true
          },
          {
            "ticker": "719",
            "score_pca": 71.71206225680933,
            "rank_pca": 728,
            "adv": 3732720.0,
            "trades": 117.0,
            "volatility": 0.19683845511028805,
            "spread_pct": 0.0037943707668478426,
            "spread_ticks": 2.5436046511627906,
            "amihud": 1.7990770880843622e-09,
            "turnover_ratio": 0.00328410618916222,
            "is_target": false
          },
          {
            "ticker": "6660",
            "score_pca": 65.29182879377431,
            "rank_pca": 893,
            "adv": 1072848.0,
            "trades": 117.0,
            "volatility": 0.7455127734500022,
            "spread_pct": 0.011525163273146356,
            "spread_ticks": 3.358108108108108,
            "amihud": 1.5733030361318545e-08,
            "turnover_ratio": 0.0009761753202883808,
            "is_target": false
          },
          {
            "ticker": "2511",
            "score_pca": 66.30350194552528,
            "rank_pca": 867,
            "adv": 2008889.9999999998,
            "trades": 136.0,
            "volatility": 0.88302560082997,
            "spread_pct": 0.019628531045328787,
            "spread_ticks": 6.414156626506024,
            "amihud": 1.5782663168386902e-08,
            "turnover_ratio": 0.002488283674246962,
            "is_target": false
          },
          {
            "ticker": "6996",
            "score_pca": 78.21011673151752,
            "rank_pca": 561,
            "adv": 11429398.860000001,
            "trades": 1013.0,
            "volatility": 0.8239549321717337,
            "spread_pct": 0.004848132476860139,
            "spread_ticks": 2.1482254697286014,
            "amihud": 2.5653203865278216e-09,
            "turnover_ratio": 0.006659648052051504,
            "is_target": false
          },
          {
            "ticker": "1763",
            "score_pca": 69.45525291828794,
            "rank_pca": 786,
            "adv": 2732940.0,
            "trades": 114.0,
            "volatility": 0.3461982090778136,
            "spread_pct": 0.013081942411370135,
            "spread_ticks": null,
            "amihud": 3.2517895085434484e-09,
            "turnover_ratio": 0.002495732923399063,
            "is_target": false
          },
          {
            "ticker": "3880",
            "score_pca": 69.57198443579766,
            "rank_pca": 783,
            "adv": 2326644.0,
            "trades": 144.0,
            "volatility": 0.5202463141712417,
            "spread_pct": 0.014499793004890696,
            "spread_ticks": null,
            "amihud": 7.484851151187506e-09,
            "turnover_ratio": 0.00371055165523695,
            "is_target": false
          },
          {
            "ticker": "9989",
            "score_pca": 71.82879377431907,
            "rank_pca": 725,
            "adv": 2340140.0,
            "trades": 203.0,
            "volatility": 0.20042007093341843,
            "spread_pct": 0.005077822342788179,
            "spread_ticks": 2.606741573033708,
            "amihud": 2.7437825658409473e-09,
            "turnover_ratio": 0.002491952506952872,
            "is_target": false
          },
          {
            "ticker": "6896",
            "score_pca": 65.4863813229572,
            "rank_pca": 888,
            "adv": 1760130.0,
            "trades": 62.0,
            "volatility": 0.3449416873014301,
            "spread_pct": 0.008615215112586951,
            "spread_ticks": 2.9923664122137406,
            "amihud": 4.042020848743577e-09,
            "turnover_ratio": 0.0006452031781328875,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Pharmaceuticals",
          "sector_count": 53,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7136059200020168,
              "median": 0.5771913897031643,
              "min": 0.0,
              "max": 16.13816484322152,
              "p5": 0.21737869284240213,
              "p95": 1.5924946068978272,
              "count": 2569
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 58948629.38783966,
              "median": 217845.0,
              "min": 0.0,
              "max": 12656870800.0,
              "p5": 0.0,
              "p95": 229789572.23299825,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.043222025157217014,
              "median": 0.02844254316021523,
              "min": 0.0005724969246679898,
              "max": 0.586235634471959,
              "p5": 0.0014568478359118448,
              "p95": 0.13632423678868924,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0037788444362741886,
              "median": 0.0008667610870891976,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.01440020431807212,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.183652589759332e-07,
              "median": 4.771888783500076e-08,
              "min": 0.0,
              "max": 4.914515513019252e-05,
              "p5": 4.559976206235381e-11,
              "p95": 3.6680681124084397e-06,
              "count": 2569
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1057.6597276264592,
              "median": 20.0,
              "min": 0.0,
              "max": 68934.0,
              "p5": 0.0,
              "p95": 5794.349999999989,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5415507111345469,
              "median": 0.44624842568985956,
              "min": 0.16110766125588705,
              "max": 1.807925042253614,
              "p5": 0.19950381937441797,
              "p95": 0.9781378737804164,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 64483239.339056596,
              "median": 6142475.0,
              "min": 0.0,
              "max": 920380470.0999999,
              "p5": 10176.0,
              "p95": 331599991.35599995,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.018622749908097713,
              "median": 0.007632750694406789,
              "min": 0.0007951198471750473,
              "max": 0.10231254379817795,
              "p5": 0.0014988857123717765,
              "p95": 0.07201912882408881,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004130749845218331,
              "median": 0.0025879111441316155,
              "min": 0.0,
              "max": 0.017927553412391425,
              "p5": 7.98862323417143e-05,
              "p95": 0.013128416705035789,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.0741119485704193e-07,
              "median": 2.5653203865278216e-09,
              "min": 1.7944108676292362e-11,
              "max": 4.126182542550786e-06,
              "p5": 4.834740544337869e-11,
              "p95": 1.251022226665688e-06,
              "count": 53
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1615.5283018867924,
              "median": 347.0,
              "min": 0.0,
              "max": 15045.0,
              "p5": 1.6,
              "p95": 6978.399999999996,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3425463.8575,
              "median": 2333392.0,
              "min": 1072848.0,
              "max": 11429398.860000001,
              "p5": 1313396.7,
              "p95": 8735561.258999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 238.25,
              "median": 126.5,
              "min": 62.0,
              "max": 1013.0,
              "p5": 80.2,
              "p95": 729.4999999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5076422553807373,
              "median": 0.43322226162452765,
              "min": 0.19683845511028805,
              "max": 0.88302560082997,
              "p5": 0.1980920206483837,
              "p95": 0.8623508667995872,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.010133871304227385,
              "median": 0.010070189192866653,
              "min": 0.0037943707668478426,
              "max": 0.019628531045328787,
              "p5": 0.004163187365352147,
              "p95": 0.017833472731175453,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.343867140125495,
              "median": 2.799553992623724,
              "min": 2.1482254697286014,
              "max": 6.414156626506024,
              "p5": 2.2470702650871486,
              "p95": 5.650144496906545,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.675316884829139e-09,
              "median": 3.6469051786435125e-09,
              "min": 1.7990770880843622e-09,
              "max": 1.5782663168386902e-08,
              "p5": 2.067262242539573e-09,
              "p95": 1.5765291685912976e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028439566874338554,
              "median": 0.0024938427151759675,
              "min": 0.0006452031781328875,
              "max": 0.006659648052051504,
              "p5": 0.0007610434278873101,
              "p95": 0.005627464313166409,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.0370370370370372,
            "market": 0.07414002315221047,
            "sector": -0.09588533774256058,
            "peers": -0.10037081753138388,
            "vs_market": -0.037102986115173264,
            "vs_sector": 0.13292237477959779,
            "vs_peers": 0.13740785456842108
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 71.55642023346303,
          "score_pca_percentile": 71.55642023346303,
          "rank_pca": 732,
          "total": 2570,
          "adv_notional_sgd": 4658540.0,
          "adv_volume_shares": 1786500.0,
          "free_float_shares": 392909590.0,
          "turnover_ratio": 0.004546847533041889,
          "votes": 258.0,
          "trades": 258.0,
          "spread_pct": 0.009617541076730993,
          "spread_ticks": 2.384826466577772,
          "amihud": 5.005441101477253e-09,
          "volatility": 0.8870886189361297
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.631258232291617,
          "loadings": {
            "log_adv": 0.4954733133071609,
            "log_trades": 0.4488991287716463,
            "log_turnover": 0.4493030934869945,
            "neg_spread": 0.45947913476637864,
            "neg_amihud": 0.3536616053726186,
            "neg_vol": 0.12216747427650607
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
          "peer_median_adv": 2925030.7225,
          "peer_median_score_pca": 70.46692607003891,
          "peer_median_trades": 166.5,
          "peer_median_volatility": 0.4277535064142982,
          "peer_median_spread_pct": 0.009227223100376766,
          "peer_median_spread_ticks": 2.5485725437566424,
          "peer_median_amihud": 3.2447767008784574e-09,
          "peer_median_turnover_ratio": 0.0031091735758761035,
          "target_vs_peer": {
            "score_pca_delta": 1.09,
            "adv_delta_pct": 59.3,
            "trades_delta_pct": 54.95,
            "volatility_delta_pct": -107.38,
            "spread_pct_delta_pct": -4.23,
            "spread_ticks_delta_pct": -6.43,
            "amihud_delta_pct": -54.26,
            "turnover_ratio_delta_pct": 46.24
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9939",
            "score_pca": 71.55642023346303,
            "rank_pca": 732,
            "adv": 4658540.0,
            "trades": 258.0,
            "volatility": 0.8870886189361297,
            "spread_pct": 0.009617541076730993,
            "spread_ticks": 2.384826466577772,
            "amihud": 5.005441101477253e-09,
            "turnover_ratio": 0.004546847533041889,
            "is_target": true
          },
          {
            "ticker": "719",
            "score_pca": 73.26848249027236,
            "rank_pca": 688,
            "adv": 6096292.0,
            "trades": 168.5,
            "volatility": 0.22853886335829549,
            "spread_pct": 0.0034412512661495787,
            "spread_ticks": 2.3360591697484243,
            "amihud": 1.1229325143325152e-09,
            "turnover_ratio": 0.005247680169395575,
            "is_target": false
          },
          {
            "ticker": "6660",
            "score_pca": 67.0817120622568,
            "rank_pca": 847,
            "adv": 1368171.0,
            "trades": 166.0,
            "volatility": 0.6033384752637614,
            "spread_pct": 0.010040454284992836,
            "spread_ticks": 3.0894366720546977,
            "amihud": 1.12743905647976e-08,
            "turnover_ratio": 0.001192054910733054,
            "is_target": false
          },
          {
            "ticker": "2511",
            "score_pca": 65.25291828793775,
            "rank_pca": 894,
            "adv": 1529002.5,
            "trades": 111.0,
            "volatility": 0.7513022913063092,
            "spread_pct": 0.01939103507075136,
            "spread_ticks": 6.038600288600289,
            "amihud": 1.6073219451522547e-08,
            "turnover_ratio": 0.0019065582300414128,
            "is_target": false
          },
          {
            "ticker": "6996",
            "score_pca": 77.97665369649806,
            "rank_pca": 567,
            "adv": 9470357.765,
            "trades": 1012.5,
            "volatility": 0.6904991430528052,
            "spread_pct": 0.005076449089311417,
            "spread_ticks": 2.1351785346085843,
            "amihud": 2.2368775307390398e-09,
            "turnover_ratio": 0.00567415968985289,
            "is_target": false
          },
          {
            "ticker": "1763",
            "score_pca": 70.1556420233463,
            "rank_pca": 768,
            "adv": 3562126.0,
            "trades": 148.0,
            "volatility": 0.43620999438033653,
            "spread_pct": 0.011573161075010023,
            "spread_ticks": null,
            "amihud": 3.186447288576121e-09,
            "turnover_ratio": 0.0031980034136612806,
            "is_target": false
          },
          {
            "ticker": "3880",
            "score_pca": 70.77821011673151,
            "rank_pca": 752,
            "adv": 2849122.0,
            "trades": 167.0,
            "volatility": 0.41929701844825984,
            "spread_pct": 0.009952310637150368,
            "spread_ticks": null,
            "amihud": 3.3031061131807936e-09,
            "turnover_ratio": 0.00396189993987532,
            "is_target": false
          },
          {
            "ticker": "9989",
            "score_pca": 72.37354085603113,
            "rank_pca": 711,
            "adv": 3000939.4450000003,
            "trades": 239.5,
            "volatility": 0.2493362002386812,
            "spread_pct": 0.003995302848654674,
            "spread_ticks": 2.1263540901982063,
            "amihud": 2.2542673524342667e-09,
            "turnover_ratio": 0.0030203437380909265,
            "is_target": false
          },
          {
            "ticker": "6896",
            "score_pca": 65.95330739299611,
            "rank_pca": 876,
            "adv": 1869767.5,
            "trades": 77.0,
            "volatility": 0.27353394001897163,
            "spread_pct": 0.008502135563603165,
            "spread_ticks": 2.76108591776486,
            "amihud": 3.678277953194606e-09,
            "turnover_ratio": 0.000766939626837206,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Pharmaceuticals",
          "sector_count": 53,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7455325821577238,
              "median": 0.5985001072551156,
              "min": 0.0,
              "max": 33.691723975352446,
              "p5": 0.2239014647331629,
              "p95": 1.6040741191345989,
              "count": 2569
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 55571410.25833596,
              "median": 213045.0,
              "min": 0.0,
              "max": 11666203850.0,
              "p5": 0.0,
              "p95": 212446976.29999977,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04214861306507454,
              "median": 0.02739257019617594,
              "min": 0.0005765024385770602,
              "max": 0.586235634471959,
              "p5": 0.001413433138861203,
              "p95": 0.13497255469806757,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034931597352893364,
              "median": 0.00085505418372027,
              "min": 0.0,
              "max": 0.19261622386446692,
              "p5": 0.0,
              "p95": 0.013978538379547403,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.271422085561612e-07,
              "median": 4.696158542312372e-08,
              "min": 0.0,
              "max": 1.9778481012658228e-05,
              "p5": 5.247755042603508e-11,
              "p95": 3.2600547837572618e-06,
              "count": 2569
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1015.6400778210117,
              "median": 19.5,
              "min": 0.0,
              "max": 87680.5,
              "p5": 0.0,
              "p95": 5610.39999999999,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5226616737134321,
              "median": 0.4487144710814805,
              "min": 0.19523620029830427,
              "max": 1.5160711525082864,
              "p5": 0.22592683800251362,
              "p95": 1.0552345019700518,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 64401448.26867925,
              "median": 6096292.0,
              "min": 0.0,
              "max": 934582467.3,
              "p5": 10884.791000000001,
              "p95": 324077279.87599987,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01783637147818374,
              "median": 0.007798203762305377,
              "min": 0.0008371754719917032,
              "max": 0.10404284187649346,
              "p5": 0.001367334453830472,
              "p95": 0.06914797665593538,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004091278729706795,
              "median": 0.0030717913495389216,
              "min": 0.0,
              "max": 0.01790376103891778,
              "p5": 7.300668152859107e-05,
              "p95": 0.013286859364292589,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.0629735804514856e-07,
              "median": 2.2368775307390398e-09,
              "min": 1.779018177836386e-11,
              "max": 4.642008318478903e-06,
              "p5": 4.691765585846938e-11,
              "p95": 1.1000921388039786e-06,
              "count": 53
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1625.4811320754718,
              "median": 258.0,
              "min": 0.0,
              "max": 15381.5,
              "p5": 1.8,
              "p95": 7294.199999999995,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3718222.27625,
              "median": 2925030.7225,
              "min": 1368171.0,
              "max": 9470357.765,
              "p5": 1424462.025,
              "p95": 8289434.747249998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 261.1875,
              "median": 166.5,
              "min": 77.0,
              "max": 1012.5,
              "p5": 88.9,
              "p95": 741.9499999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4565069907584275,
              "median": 0.4277535064142982,
              "min": 0.22853886335829549,
              "max": 0.7513022913063092,
              "p5": 0.2358179312664305,
              "p95": 0.7300211894175828,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008996512479452927,
              "median": 0.009227223100376766,
              "min": 0.0034412512661495787,
              "max": 0.01939103507075136,
              "p5": 0.0036351693200263623,
              "p95": 0.01665477917224189,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.08111911216251,
              "median": 2.5485725437566424,
              "min": 2.1263540901982063,
              "max": 6.038600288600289,
              "p5": 2.1285602013008007,
              "p95": 5.301309384463892,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.391189846097187e-09,
              "median": 3.2447767008784574e-09,
              "min": 1.1229325143325152e-09,
              "max": 1.6073219451522547e-08,
              "p5": 1.5128132700747988e-09,
              "p95": 1.4393629341168813e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003120954964810958,
              "median": 0.0031091735758761035,
              "min": 0.000766939626837206,
              "max": 0.00567415968985289,
              "p5": 0.0009157299762007527,
              "p95": 0.00552489185769283,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.3793103448275874,
            "market": 0.1632851008133398,
            "sector": -0.16925365092610856,
            "peers": -0.2267518477677788,
            "vs_market": 0.2160252440142476,
            "vs_sector": 0.548563995753696,
            "vs_peers": 0.6060621925953662
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 70.3 vs peer median 64.8 (+5.5 pts).",
        "market_comparison": "The stock has outperformed broader comparison groups over 1M, with a 4.5% return compared with peers at -5.9% and the market at +5.4%, which supports a firmer trading backdrop."
      },
      "30d": {
        "liquidity": "Monthly tradability is average for the company’s size, with access looking broadly in line with peers rather than clearly better or worse.",
        "market_comparison": "The stock rose 4.5% over 1M while peers fell 5.9%, which matters because stronger price performance can help keep attention and turnover supported."
      },
      "3m": {
        "liquidity": "Tradability appears broadly steady over the medium term, with no clear sign that access has materially improved or deteriorated from the monthly picture.",
        "market_comparison": "Recent price strength relative to peers points to a firmer backdrop, which helps explain why liquidity is holding around peer levels rather than slipping."
      },
      "6m": {
        "liquidity": "Six-month tradability is average to slightly above average for its size, with a liquidity score of 71.6 compared with the peer median of 70.5.",
        "market_comparison": "Primary average daily volume is HK$4.7M compared with a peer median of HK$2.9M, which supports reasonable market access even though the displayed buy side is thinner."
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
          "median": 0.07054880654934438,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "7.1%",
          "display_range": null,
          "display_text": "7.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 7.1,
          "plain_english": "Market explains about 7.1% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.6340447161279307,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "63.4%",
          "display_range": null,
          "display_text": "63.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 63.4,
          "plain_english": "Sector explains about 63.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.2954064773227249,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "29.5%",
          "display_range": null,
          "display_text": "29.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 29.5,
          "plain_english": "Company-specific explains about 29.5% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -1.1603484017716368,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.16",
          "display_range": null,
          "display_text": "-1.16",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.16% stock move in the opposite direction in this state.",
          "value_num": -1.16
        },
        "beta_stock_lag": {
          "median": -2.6437582717417194,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.64",
          "display_range": null,
          "display_text": "-2.64",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -2.64
        },
        "beta_sector": {
          "median": -24.91890778919423,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-24.92",
          "display_range": null,
          "display_text": "-24.92",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 24.92% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": -24.92
        },
        "beta_market_lag": {
          "median": -1.873063300379731,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.87",
          "display_range": null,
          "display_text": "-1.87",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.87
        },
        "beta_sector_lag": {
          "median": -26.689478583093585,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-26.69",
          "display_range": null,
          "display_text": "-26.69",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -26.69
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
          "period_label": "2025-04-24 to 2025-04-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5883360880212569,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.8%",
            "display_range": null,
            "display_text": "58.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 58.8,
            "plain_english": "Sector explains about 58.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2818190814100829,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.2%",
              "display_range": null,
              "display_text": "28.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 28.2,
              "plain_english": "Market explains about 28.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5883360880212569,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.8%",
              "display_range": null,
              "display_text": "58.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 58.8,
              "plain_english": "Sector explains about 58.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.1298448305686602,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Company-specific explains about 13.0% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly sector-driven, though based on only 5 trading days."
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
            "median": 0.5125772812561501,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.3%",
            "display_range": null,
            "display_text": "51.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 51.3,
            "plain_english": "Company-specific explains about 51.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.09045472006748621,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.0%",
              "display_range": null,
              "display_text": "9.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 9.0,
              "plain_english": "Market explains about 9.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.39696799867636356,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.7%",
              "display_range": null,
              "display_text": "39.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 39.7,
              "plain_english": "Sector explains about 39.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5125772812561501,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.3%",
              "display_range": null,
              "display_text": "51.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 51.3,
              "plain_english": "Company-specific explains about 51.3% of price moves in the current state."
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
            "median": 0.460372804697801,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.0%",
            "display_range": null,
            "display_text": "46.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 46.0,
            "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.14927538201485052,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.9%",
              "display_range": null,
              "display_text": "14.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 14.9,
              "plain_english": "Market explains about 14.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3903518132873485,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.0%",
              "display_range": null,
              "display_text": "39.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 39.0,
              "plain_english": "Sector explains about 39.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.460372804697801,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.0%",
              "display_range": null,
              "display_text": "46.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 46.0,
              "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
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
            "median": 0.5621576761324658,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.2%",
            "display_range": null,
            "display_text": "56.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 56.2,
            "plain_english": "Company-specific explains about 56.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12173478063668676,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.2%",
              "display_range": null,
              "display_text": "12.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.2,
              "plain_english": "Market explains about 12.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.31610754323084733,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.6%",
              "display_range": null,
              "display_text": "31.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.6,
              "plain_english": "Sector explains about 31.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5621576761324658,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.2%",
              "display_range": null,
              "display_text": "56.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 56.2,
              "plain_english": "Company-specific explains about 56.2% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.520697605366551,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.1%",
            "display_range": null,
            "display_text": "52.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.1,
            "plain_english": "Sector explains about 52.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.08032564278693655,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.0%",
              "display_range": null,
              "display_text": "8.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 8.0,
              "plain_english": "Market explains about 8.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.520697605366551,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Sector explains about 52.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3989767518465124,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.9%",
              "display_range": null,
              "display_text": "39.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 39.9,
              "plain_english": "Company-specific explains about 39.9% of price moves in the current state."
            }
          },
          "summary": "Aug: Mostly sector-driven."
        },
        {
          "month_key": "2025-09",
          "month_label": "September 2025",
          "month_short_label": "Sep",
          "period_label": "2025-09-01 to 2025-09-30",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.36886627629747687,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.9%",
            "display_range": null,
            "display_text": "36.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 36.9,
            "plain_english": "Sector explains about 36.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3048790358617456,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.5%",
              "display_range": null,
              "display_text": "30.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 30.5,
              "plain_english": "Market explains about 30.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.36886627629747687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.9%",
              "display_range": null,
              "display_text": "36.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.9,
              "plain_english": "Sector explains about 36.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3262546878407776,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.6%",
              "display_range": null,
              "display_text": "32.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 32.6,
              "plain_english": "Company-specific explains about 32.6% of price moves in the current state."
            }
          },
          "summary": "Sep: Much more balanced across company, sector, and market factors."
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
            "median": 0.40896716899717256,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.9%",
            "display_range": null,
            "display_text": "40.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 40.9,
            "plain_english": "Company-specific explains about 40.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.28553363258057757,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.6%",
              "display_range": null,
              "display_text": "28.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 28.6,
              "plain_english": "Market explains about 28.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.30549919842224976,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.5%",
              "display_range": null,
              "display_text": "30.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 30.5,
              "plain_english": "Sector explains about 30.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.40896716899717256,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.9%",
              "display_range": null,
              "display_text": "40.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.9,
              "plain_english": "Company-specific explains about 40.9% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.41743114464787995,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.7%",
            "display_range": null,
            "display_text": "41.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 41.7,
            "plain_english": "Company-specific explains about 41.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23517710276320647,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.5%",
              "display_range": null,
              "display_text": "23.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 23.5,
              "plain_english": "Market explains about 23.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.34739175258891364,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.7%",
              "display_range": null,
              "display_text": "34.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.7,
              "plain_english": "Sector explains about 34.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.41743114464787995,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.7%",
              "display_range": null,
              "display_text": "41.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.7,
              "plain_english": "Company-specific explains about 41.7% of price moves in the current state."
            }
          },
          "summary": "Nov: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.46349620717448775,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.3%",
            "display_range": null,
            "display_text": "46.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 46.3,
            "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.25501616892868134,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.5%",
              "display_range": null,
              "display_text": "25.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 25.5,
              "plain_english": "Market explains about 25.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2814876238968308,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.1%",
              "display_range": null,
              "display_text": "28.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 28.1,
              "plain_english": "Sector explains about 28.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.46349620717448775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
            }
          },
          "summary": "Dec: Mostly company-driven."
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
            "median": 0.5286965684358876,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.9%",
            "display_range": null,
            "display_text": "52.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.9,
            "plain_english": "Company-specific explains about 52.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2540154435777651,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.4%",
              "display_range": null,
              "display_text": "25.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 25.4,
              "plain_english": "Market explains about 25.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2172879879863473,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.7%",
              "display_range": null,
              "display_text": "21.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 21.7,
              "plain_english": "Sector explains about 21.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5286965684358876,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.9%",
              "display_range": null,
              "display_text": "52.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.9,
              "plain_english": "Company-specific explains about 52.9% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.43165428318452775,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.2%",
            "display_range": null,
            "display_text": "43.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 43.2,
            "plain_english": "Sector explains about 43.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20381785588592305,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.4%",
              "display_range": null,
              "display_text": "20.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 20.4,
              "plain_english": "Market explains about 20.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.43165428318452775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Sector explains about 43.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3645278609295492,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.5%",
              "display_range": null,
              "display_text": "36.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 36.5,
              "plain_english": "Company-specific explains about 36.5% of price moves in the current state."
            }
          },
          "summary": "Feb: More mixed, though sector-driven still has the largest share."
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
            "median": 0.43359636882252184,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.4%",
            "display_range": null,
            "display_text": "43.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 43.4,
            "plain_english": "Sector explains about 43.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26185345718706726,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.2%",
              "display_range": null,
              "display_text": "26.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 26.2,
              "plain_english": "Market explains about 26.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.43359636882252184,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.4%",
              "display_range": null,
              "display_text": "43.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 43.4,
              "plain_english": "Sector explains about 43.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3045501739904109,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.5%",
              "display_range": null,
              "display_text": "30.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 30.5,
              "plain_english": "Company-specific explains about 30.5% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though sector-driven still has the largest share."
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
            "median": 0.6740849947538075,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "67.4%",
            "display_range": null,
            "display_text": "67.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 67.4,
            "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20211279446872393,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.2%",
              "display_range": null,
              "display_text": "20.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 20.2,
              "plain_english": "Market explains about 20.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12380221077746847,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.4%",
              "display_range": null,
              "display_text": "12.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 12.4,
              "plain_english": "Sector explains about 12.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6740849947538075,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.4%",
              "display_range": null,
              "display_text": "67.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 67.4,
              "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly company-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-11",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5732376402868539,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.3%",
            "display_range": null,
            "display_text": "57.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 57.3,
            "plain_english": "Sector explains about 57.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2227859875740291,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.3%",
              "display_range": null,
              "display_text": "22.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 22.3,
              "plain_english": "Market explains about 22.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5732376402868539,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Sector explains about 57.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.20397637213911704,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.4%",
              "display_range": null,
              "display_text": "20.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 20.4,
              "plain_english": "Company-specific explains about 20.4% of price moves in the current state."
            }
          },
          "summary": "May: Mostly sector-driven, though based on only 6 trading days."
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
            "median": 0.030764443551826223,
            "low": 0.030764443551826223,
            "high": 0.030764443551826223
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
            "median": 0.06380772692427404,
            "low": 0.06380772692427404,
            "high": 0.06380772692427404
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
        "market_link_display": "-1.16",
        "sector_link_display": "-24.92",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.16% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 24.92% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-2.64",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 63.4,
        "driver_share_display": "63.4%",
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
            "median": 0.030764443551826223,
            "low": 0.030764443551826223,
            "high": 0.030764443551826223
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
            "median": 0.06380772692427404,
            "low": 0.06380772692427404,
            "high": 0.06380772692427404
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
        "text": "Liquidity score: 71.6 — Strong",
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
        "text": "Execution: thin buy-side",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Six-month liquidity sits close to peers, but current trading conditions look less supportive on the buy side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is strong, with the stock up 4.5% over one month while peers fell 5.9% and the market rose 5.4%.",
    "perf_insight": "The return backdrop is firmer than the main comparison groups, but trading quality is less comfortable in the book because the spread is 5 ticks and displayed bid depth is only 0.37x of ask depth.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main driver of the tape, with sector factors explaining 63.4% of trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 63.4% of price changes. Other influences are market 7.1%, and company-specific 29.5%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 7.1%, sector 63.4%, and company-specific 29.5%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been mostly sector-driven across Mar to May, with some variation in the middle months."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 7.1%, sector 63.4%, and company-specific 29.5%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the stock is still moving mainly with its group, while the thin bid side can make downside trading feel less forgiving.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors are leading, accounting for 63.4% of recent price moves.",
      "The driver mix has been mostly sector-driven across Mar to May, with some variation in the middle months."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop is being set mainly by sector direction rather than company-specific trading.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 12, 2025 to May 11, 2026 (241 trading days • 131,701 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The current book is thinner on the bid than the six-month liquidity profile would suggest, with displayed bid depth at 0.37x of ask depth and a 5-tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 25.5% of total trades.",
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
    "intraday_insight": "The clearest near-term feature is the imbalance in the book, with displayed bid depth at 0.37x of ask depth alongside a 5-tick spread. That matters because immediate sell-side execution may feel worse than the six-month liquidity score implies.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading is better explained by sector direction and book depth than by short activity.",
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
    "exec_subtitle": "Liquidity is mixed for its size, but the displayed book shows thin buy-side support.",
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
        "value": "71.6/100",
        "sub": "Peer median 70.5 (+1.1 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$4.7M",
        "sub": "Peer median HK$2.9M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.96%",
        "sub": "2.38 ticks; peers 0.92%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 71.6 vs peer median 70.5 (+1.1 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "2.835",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.76%",
        "note": "5.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.37x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.22% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-2.86% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-4.69% with 64.4% fill.",
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
        "subtext": "Rank 732/2570",
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
        "value": "0.96",
        "suffix": "%",
        "bar_pct": 10,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.96% • 2.38 ticks vs peers 0.92%",
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
        "value": "4.7M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$2.9M",
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
        "value": "63.4",
        "suffix": "sector",
        "bar_pct": 63,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 7.1% • Company 29.5%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is mixed for the stock’s size, with a six-month liquidity score of 71.6 compared with a peer median of 70.5. That keeps peer-relative access close to the middle rather than establishing a clear advantage.",
      "The return backdrop is firm, with the stock up 4.5% over one month while peers fell 5.9% and the market rose 5.4%. That matters because price performance is holding up better than the main comparison groups.",
      "The main watchpoint is the live book, with displayed bid depth at 0.37x of ask depth and a 5-tick spread. That matters because buy-side support looks thin even as sector factors still explain 63.4% of trading."
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
      "overall": "6M liquidity is strong: score 71.6 vs peer median 70.5 (+1.1 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 71.6 vs peer median 70.5 (+1.1 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +1.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 37.9%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 37.9% vs market 16.3%.",
        "vs_sector": "Better than sector: 37.9% vs sector -16.9%.",
        "vs_peers": "Better than peers: 37.9% vs peers -22.7%."
      },
      "adv": {
        "insight": "ADV is HK$4.7M, better than market and peers, but worse than sector, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$4.7M vs market HK$213.0K.",
        "vs_sector": "Worse than sector: HK$4.7M vs sector HK$6.1M.",
        "vs_peers": "Better than peers: HK$4.7M vs peers HK$2.9M."
      },
      "spread": {
        "insight": "Spread is 0.96%, better than market, but worse than sector, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.96% vs market 2.74%.",
        "vs_sector": "Worse than sector: 0.96% vs sector 0.78%.",
        "vs_peers": "In line with peers: 0.96% vs peers 0.92%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.45%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.45% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.45% vs sector 0.31%.",
        "vs_peers": "Better than peers: 0.45% vs peers 0.31%."
      },
      "volatility": {
        "insight": "Volatility is 88.71%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 88.71% vs market 59.85%.",
        "vs_sector": "Worse than sector: 88.71% vs sector 44.87%.",
        "vs_peers": "Worse than peers: 88.71% vs peers 42.78%."
      },
      "trades": {
        "insight": "Trades is 258, better than market and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 258 vs market 20.",
        "vs_sector": "In line with sector: 258 vs secto.",
        "vs_peers": "Better than peers: 258 vs peers 166."
      },
      "amihud": {
        "insight": "Price impact is 5.01e-09, better than market, but worse than sector and peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 5.01e-09 vs market 4.70e-08.",
        "vs_sector": "Worse than sector: 5.01e-09 vs sectoe-09.",
        "vs_peers": "Worse than peers: 5.01e-09 vs peers 3.24e-09."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to peers and the market, with the stock up 4.5% over one month compared with a 5.9% drop for peers and a 5.4% gain for the market. Liquidity gives a mixed read on that move because the six-month score of 71.6 is only modestly above the 70.5 peer median, while the displayed book shows weaker buy-side support with bid depth at 0.37x of ask depth and a 5-tick spread.",
      "conclusion": "The move looks mainly sector-linked, with relative outperformance supported by only mixed liquidity conditions."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock right now, with 63.4% of recent price action explained by the sector. That matters because the shares are trading more with the group than on stock-specific news, even after a stronger 1M return of +4.5% compared with peers at -5.9%.",
      "beta": "The current trading backdrop looks more externally driven than internally driven, and that makes the tape more sensitive to sector direction. Thin displayed bid depth at 0.37x of ask depth, alongside a 5-tick spread, means that pressure on the way down can show up more quickly in execution.",
      "rolling_change": "Mar: More mixed, though sector-driven still has the largest share. | Apr: Still clearly company-driven. | May: Mostly sector-driven, though based on only 6 trading days."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop, and that matters because conditions can feel less steady even when longer-term liquidity is broadly in line with peers. Thin displayed buy-side depth at 0.37x of ask depth reinforces that fragility on the downside.",
      "current": "High volatility is in place now, pointing to a market backdrop with larger price swings than a calmer trading state.",
      "transitions": "This looks more persistent than fleeting, with a typical run length of about 8.3 days, although the read is mixed.",
      "trading_implications": "Trading conditions are likely to stay less steady in the near term, with a 5-tick spread and thin bid depth leaving execution more exposed when selling pressure builds."
    },
    "execution": {
      "overall": "Displayed liquidity is thin buy-side because bid depth is only 0.37x of ask depth and the spread is 5 ticks. That leaves the book less supportive on the downside than the broader liquidity profile implies.",
      "concern": "Trade-size percentiles use May 12, 2025 to May 11, 2026 history (241 trading days • 131,701 trades).",
      "peer_context": "The broader picture still looks mixed rather than weak, with a six-month liquidity score of 71.6 compared with a peer median of 70.5. Even so, the current book suggests immediate execution conditions are less robust than that peer-relative standing."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 36.7% of trade count and 62.6% of trade value, compared with retail-like trades at 24.5% of count and 6.0% of value. That gap shows larger value is coming from institution-like flow rather than from retail activity.",
      "institutional_gap": "The read is still mixed at the margin because 23.9% of trade count is ambiguous or unclear, so the institution-like signal is meaningful but not absolute.",
      "peer_comparison": "Relative to peers, the trader mix comparison points to an institution-like profile being the key reference point for this name."
    },
    "price_moving": {
      "overall": "Price-moving activity is meaningful, with 25.5% of total trades moving price. That suggests the tape is being shaped by a material share of trades rather than by isolated prints. Ambiguous or unclear flow is 23.9% of trade count, so the read is not fully clean. The cleaner read is that institution-like flow dominates trade value, so when prices do move, larger-value participation is likely to matter more than retail-sized activity.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main issue in the tape, as the clearer signals are stronger 1M price performance and a market backdrop still led by sector moves. That matters because the current trading picture looks driven more by broader positioning and book shape than by short pressure.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short trend is not showing a clear change in the current picture, while the stock has still returned +4.5% over 1M compared with peers at -5.9%. That matters because there is no sign here that rising short pressure is overriding the broader trading backdrop.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity appears through the continuous session rather than at the edges of the day, with 99.3% of trading there compared with 0.3% at the open and 0.5% at the close. That makes intraday access look steadier.",
      "hhi_interpretation": "Ambiguous or unclear flow is 23.9% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is clearly the main window for liquidity because it carries 99.3% of trading. That matters more than the open or close for assessing where flow is consistently available.",
      "peer_ranking": "Compared with peers, the intraday profile is best judged by how consistently activity sits in the continuous session rather than by auction-driven bursts."
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
        "9939",
        "719",
        "6660",
        "2511",
        "6996",
        "1763",
        "3880",
        "9989",
        "6896"
      ],
      "scores": [
        71.55642023346303,
        73.26848249027236,
        67.0817120622568,
        65.25291828793775,
        77.97665369649806,
        70.1556420233463,
        70.77821011673151,
        72.37354085603113,
        65.95330739299611
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
        4658540.0,
        6096292.0,
        1368171.0,
        1529002.5,
        9470357.765,
        3562126.0,
        2849122.0,
        3000939.4450000003,
        1869767.5
      ],
      "total": 2570
    },
    "market_comparison": {
      "sector_name": "Pharmaceuticals",
      "sector_count": 53,
      "market_count": 2570,
      "company": {
        "volatility": 0.8870886189361297,
        "adv": 4658540.0,
        "spread_pct": 0.009617541076730993,
        "turnover_ratio": 0.004546847533041889,
        "amihud": 5.005441101477253e-09,
        "trades": 258.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7455325821577238,
          "median": 0.5985001072551156,
          "min": 0.0,
          "max": 33.691723975352446,
          "p5": 0.2239014647331629,
          "p95": 1.6040741191345989,
          "count": 2569
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 55571410.25833596,
          "median": 213045.0,
          "min": 0.0,
          "max": 11666203850.0,
          "p5": 0.0,
          "p95": 212446976.29999977,
          "count": 2570
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04214861306507454,
          "median": 0.02739257019617594,
          "min": 0.0005765024385770602,
          "max": 0.586235634471959,
          "p5": 0.001413433138861203,
          "p95": 0.13497255469806757,
          "count": 2570
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0034931597352893364,
          "median": 0.00085505418372027,
          "min": 0.0,
          "max": 0.19261622386446692,
          "p5": 0.0,
          "p95": 0.013978538379547403,
          "count": 2554
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.271422085561612e-07,
          "median": 4.696158542312372e-08,
          "min": 0.0,
          "max": 1.9778481012658228e-05,
          "p5": 5.247755042603508e-11,
          "p95": 3.2600547837572618e-06,
          "count": 2569
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1015.6400778210117,
          "median": 19.5,
          "min": 0.0,
          "max": 87680.5,
          "p5": 0.0,
          "p95": 5610.39999999999,
          "count": 2570
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5226616737134321,
          "median": 0.4487144710814805,
          "min": 0.19523620029830427,
          "max": 1.5160711525082864,
          "p5": 0.22592683800251362,
          "p95": 1.0552345019700518,
          "count": 53
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 64401448.26867925,
          "median": 6096292.0,
          "min": 0.0,
          "max": 934582467.3,
          "p5": 10884.791000000001,
          "p95": 324077279.87599987,
          "count": 53
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.01783637147818374,
          "median": 0.007798203762305377,
          "min": 0.0008371754719917032,
          "max": 0.10404284187649346,
          "p5": 0.001367334453830472,
          "p95": 0.06914797665593538,
          "count": 53
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004091278729706795,
          "median": 0.0030717913495389216,
          "min": 0.0,
          "max": 0.01790376103891778,
          "p5": 7.300668152859107e-05,
          "p95": 0.013286859364292589,
          "count": 53
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.0629735804514856e-07,
          "median": 2.2368775307390398e-09,
          "min": 1.779018177836386e-11,
          "max": 4.642008318478903e-06,
          "p5": 4.691765585846938e-11,
          "p95": 1.1000921388039786e-06,
          "count": 53
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1625.4811320754718,
          "median": 258.0,
          "min": 0.0,
          "max": 15381.5,
          "p5": 1.8,
          "p95": 7294.199999999995,
          "count": 53
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 3718222.27625,
          "median": 2925030.7225,
          "min": 1368171.0,
          "max": 9470357.765,
          "p5": 1424462.025,
          "p95": 8289434.747249998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 261.1875,
          "median": 166.5,
          "min": 77.0,
          "max": 1012.5,
          "p5": 88.9,
          "p95": 741.9499999999996,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4565069907584275,
          "median": 0.4277535064142982,
          "min": 0.22853886335829549,
          "max": 0.7513022913063092,
          "p5": 0.2358179312664305,
          "p95": 0.7300211894175828,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.008996512479452927,
          "median": 0.009227223100376766,
          "min": 0.0034412512661495787,
          "max": 0.01939103507075136,
          "p5": 0.0036351693200263623,
          "p95": 0.01665477917224189,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.08111911216251,
          "median": 2.5485725437566424,
          "min": 2.1263540901982063,
          "max": 6.038600288600289,
          "p5": 2.1285602013008007,
          "p95": 5.301309384463892,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.391189846097187e-09,
          "median": 3.2447767008784574e-09,
          "min": 1.1229325143325152e-09,
          "max": 1.6073219451522547e-08,
          "p5": 1.5128132700747988e-09,
          "p95": 1.4393629341168813e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003120954964810958,
          "median": 0.0031091735758761035,
          "min": 0.000766939626837206,
          "max": 0.00567415968985289,
          "p5": 0.0009157299762007527,
          "p95": 0.00552489185769283,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.04477611940298476,
        "market": 0.054164598055107094,
        "sector": -0.05346356780149686,
        "peers": -0.05943136059808074
      },
      {
        "horizon": "3M",
        "stock": 0.0370370370370372,
        "market": 0.07414002315221047,
        "sector": -0.09588533774256058,
        "peers": -0.10037081753138388
      },
      {
        "horizon": "6M",
        "stock": 0.3793103448275874,
        "market": 0.1632851008133398,
        "sector": -0.16925365092610856,
        "peers": -0.2267518477677788
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
      "share_market": 0.07054880654934438,
      "share_sector": 0.6340447161279307,
      "share_idio": 0.2954064773227249,
      "beta_market": -1.1603484017716368,
      "beta_sector": -24.91890778919423,
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
            "median": 0.07054880654934438,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "7.1%",
            "display_range": null,
            "display_text": "7.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 7.1,
            "plain_english": "Market explains about 7.1% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.6340447161279307,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.4%",
            "display_range": null,
            "display_text": "63.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 63.4,
            "plain_english": "Sector explains about 63.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.2954064773227249,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "29.5%",
            "display_range": null,
            "display_text": "29.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 29.5,
            "plain_english": "Company-specific explains about 29.5% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -1.1603484017716368,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.16",
            "display_range": null,
            "display_text": "-1.16",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.16% stock move in the opposite direction in this state.",
            "value_num": -1.16
          },
          "beta_stock_lag": {
            "median": -2.6437582717417194,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.64",
            "display_range": null,
            "display_text": "-2.64",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -2.64
          },
          "beta_sector": {
            "median": -24.91890778919423,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-24.92",
            "display_range": null,
            "display_text": "-24.92",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 24.92% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": -24.92
          },
          "beta_market_lag": {
            "median": -1.873063300379731,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.87",
            "display_range": null,
            "display_text": "-1.87",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.87
          },
          "beta_sector_lag": {
            "median": -26.689478583093585,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-26.69",
            "display_range": null,
            "display_text": "-26.69",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -26.69
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
            "period_label": "2025-04-24 to 2025-04-30",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5883360880212569,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.8%",
              "display_range": null,
              "display_text": "58.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 58.8,
              "plain_english": "Sector explains about 58.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2818190814100829,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.2%",
                "display_range": null,
                "display_text": "28.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 28.2,
                "plain_english": "Market explains about 28.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5883360880212569,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.8%",
                "display_range": null,
                "display_text": "58.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 58.8,
                "plain_english": "Sector explains about 58.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.1298448305686602,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Company-specific explains about 13.0% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly sector-driven, though based on only 5 trading days."
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
              "median": 0.5125772812561501,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.3%",
              "display_range": null,
              "display_text": "51.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 51.3,
              "plain_english": "Company-specific explains about 51.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.09045472006748621,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.0%",
                "display_range": null,
                "display_text": "9.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 9.0,
                "plain_english": "Market explains about 9.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.39696799867636356,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.7%",
                "display_range": null,
                "display_text": "39.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 39.7,
                "plain_english": "Sector explains about 39.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5125772812561501,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.3%",
                "display_range": null,
                "display_text": "51.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 51.3,
                "plain_english": "Company-specific explains about 51.3% of price moves in the current state."
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
              "median": 0.460372804697801,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.0%",
              "display_range": null,
              "display_text": "46.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 46.0,
              "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.14927538201485052,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.9%",
                "display_range": null,
                "display_text": "14.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 14.9,
                "plain_english": "Market explains about 14.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3903518132873485,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.0%",
                "display_range": null,
                "display_text": "39.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 39.0,
                "plain_english": "Sector explains about 39.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.460372804697801,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.0%",
                "display_range": null,
                "display_text": "46.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 46.0,
                "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
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
              "median": 0.5621576761324658,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.2%",
              "display_range": null,
              "display_text": "56.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 56.2,
              "plain_english": "Company-specific explains about 56.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12173478063668676,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.2%",
                "display_range": null,
                "display_text": "12.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.2,
                "plain_english": "Market explains about 12.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.31610754323084733,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.6%",
                "display_range": null,
                "display_text": "31.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.6,
                "plain_english": "Sector explains about 31.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5621576761324658,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.2%",
                "display_range": null,
                "display_text": "56.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 56.2,
                "plain_english": "Company-specific explains about 56.2% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.520697605366551,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Sector explains about 52.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.08032564278693655,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.0%",
                "display_range": null,
                "display_text": "8.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 8.0,
                "plain_english": "Market explains about 8.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.520697605366551,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.1%",
                "display_range": null,
                "display_text": "52.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.1,
                "plain_english": "Sector explains about 52.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3989767518465124,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.9%",
                "display_range": null,
                "display_text": "39.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 39.9,
                "plain_english": "Company-specific explains about 39.9% of price moves in the current state."
              }
            },
            "summary": "Aug: Mostly sector-driven."
          },
          {
            "month_key": "2025-09",
            "month_label": "September 2025",
            "month_short_label": "Sep",
            "period_label": "2025-09-01 to 2025-09-30",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.36886627629747687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.9%",
              "display_range": null,
              "display_text": "36.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.9,
              "plain_english": "Sector explains about 36.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3048790358617456,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.5%",
                "display_range": null,
                "display_text": "30.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 30.5,
                "plain_english": "Market explains about 30.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.36886627629747687,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.9%",
                "display_range": null,
                "display_text": "36.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.9,
                "plain_english": "Sector explains about 36.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3262546878407776,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.6%",
                "display_range": null,
                "display_text": "32.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 32.6,
                "plain_english": "Company-specific explains about 32.6% of price moves in the current state."
              }
            },
            "summary": "Sep: Much more balanced across company, sector, and market factors."
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
              "median": 0.40896716899717256,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.9%",
              "display_range": null,
              "display_text": "40.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.9,
              "plain_english": "Company-specific explains about 40.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.28553363258057757,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.6%",
                "display_range": null,
                "display_text": "28.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 28.6,
                "plain_english": "Market explains about 28.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.30549919842224976,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.5%",
                "display_range": null,
                "display_text": "30.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 30.5,
                "plain_english": "Sector explains about 30.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.40896716899717256,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.9%",
                "display_range": null,
                "display_text": "40.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 40.9,
                "plain_english": "Company-specific explains about 40.9% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.41743114464787995,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.7%",
              "display_range": null,
              "display_text": "41.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.7,
              "plain_english": "Company-specific explains about 41.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23517710276320647,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.5%",
                "display_range": null,
                "display_text": "23.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 23.5,
                "plain_english": "Market explains about 23.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.34739175258891364,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.7%",
                "display_range": null,
                "display_text": "34.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.7,
                "plain_english": "Sector explains about 34.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.41743114464787995,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.7%",
                "display_range": null,
                "display_text": "41.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 41.7,
                "plain_english": "Company-specific explains about 41.7% of price moves in the current state."
              }
            },
            "summary": "Nov: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 15,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.46349620717448775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.25501616892868134,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.5%",
                "display_range": null,
                "display_text": "25.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 25.5,
                "plain_english": "Market explains about 25.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2814876238968308,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.1%",
                "display_range": null,
                "display_text": "28.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 28.1,
                "plain_english": "Sector explains about 28.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.46349620717448775,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.3%",
                "display_range": null,
                "display_text": "46.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 46.3,
                "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
              }
            },
            "summary": "Dec: Mostly company-driven."
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
              "median": 0.5286965684358876,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.9%",
              "display_range": null,
              "display_text": "52.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.9,
              "plain_english": "Company-specific explains about 52.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2540154435777651,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.4%",
                "display_range": null,
                "display_text": "25.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 25.4,
                "plain_english": "Market explains about 25.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2172879879863473,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.7%",
                "display_range": null,
                "display_text": "21.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 21.7,
                "plain_english": "Sector explains about 21.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5286965684358876,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.9%",
                "display_range": null,
                "display_text": "52.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.9,
                "plain_english": "Company-specific explains about 52.9% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.43165428318452775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Sector explains about 43.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20381785588592305,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.4%",
                "display_range": null,
                "display_text": "20.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 20.4,
                "plain_english": "Market explains about 20.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.43165428318452775,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.2%",
                "display_range": null,
                "display_text": "43.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 43.2,
                "plain_english": "Sector explains about 43.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3645278609295492,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.5%",
                "display_range": null,
                "display_text": "36.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 36.5,
                "plain_english": "Company-specific explains about 36.5% of price moves in the current state."
              }
            },
            "summary": "Feb: More mixed, though sector-driven still has the largest share."
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
              "median": 0.43359636882252184,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.4%",
              "display_range": null,
              "display_text": "43.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 43.4,
              "plain_english": "Sector explains about 43.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26185345718706726,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.2%",
                "display_range": null,
                "display_text": "26.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 26.2,
                "plain_english": "Market explains about 26.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.43359636882252184,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.4%",
                "display_range": null,
                "display_text": "43.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 43.4,
                "plain_english": "Sector explains about 43.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3045501739904109,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.5%",
                "display_range": null,
                "display_text": "30.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 30.5,
                "plain_english": "Company-specific explains about 30.5% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though sector-driven still has the largest share."
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
              "median": 0.6740849947538075,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.4%",
              "display_range": null,
              "display_text": "67.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 67.4,
              "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20211279446872393,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.2%",
                "display_range": null,
                "display_text": "20.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 20.2,
                "plain_english": "Market explains about 20.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12380221077746847,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.4%",
                "display_range": null,
                "display_text": "12.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 12.4,
                "plain_english": "Sector explains about 12.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6740849947538075,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "67.4%",
                "display_range": null,
                "display_text": "67.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 67.4,
                "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly company-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-11",
            "n_obs": 6,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5732376402868539,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Sector explains about 57.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2227859875740291,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.3%",
                "display_range": null,
                "display_text": "22.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 22.3,
                "plain_english": "Market explains about 22.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5732376402868539,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.3%",
                "display_range": null,
                "display_text": "57.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 57.3,
                "plain_english": "Sector explains about 57.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.20397637213911704,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.4%",
                "display_range": null,
                "display_text": "20.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 20.4,
                "plain_english": "Company-specific explains about 20.4% of price moves in the current state."
              }
            },
            "summary": "May: Mostly sector-driven, though based on only 6 trading days."
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
              "median": 0.030764443551826223,
              "low": 0.030764443551826223,
              "high": 0.030764443551826223
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
              "median": 0.06380772692427404,
              "low": 0.06380772692427404,
              "high": 0.06380772692427404
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
          "market_link_display": "-1.16",
          "sector_link_display": "-24.92",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.16% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 24.92% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-2.64",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 63.4,
          "driver_share_display": "63.4%",
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
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-24 to 2025-04-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven, though based on only 5 trading days.",
          "share_market": 0.2818190814100829,
          "share_sector": 0.5883360880212569,
          "share_company": 0.1298448305686602,
          "share_market_display": "28.2%",
          "share_sector_display": "58.8%",
          "share_company_display": "13.0%",
          "dominant_share_display": "58.8%"
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
          "share_market": 0.09045472006748621,
          "share_sector": 0.39696799867636356,
          "share_company": 0.5125772812561501,
          "share_market_display": "9.0%",
          "share_sector_display": "39.7%",
          "share_company_display": "51.3%",
          "dominant_share_display": "51.3%"
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
          "share_market": 0.14927538201485052,
          "share_sector": 0.3903518132873485,
          "share_company": 0.460372804697801,
          "share_market_display": "14.9%",
          "share_sector_display": "39.0%",
          "share_company_display": "46.0%",
          "dominant_share_display": "46.0%"
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
          "share_market": 0.12173478063668676,
          "share_sector": 0.31610754323084733,
          "share_company": 0.5621576761324658,
          "share_market_display": "12.2%",
          "share_sector_display": "31.6%",
          "share_company_display": "56.2%",
          "dominant_share_display": "56.2%"
        },
        {
          "month_key": "2025-08",
          "month_label": "August 2025",
          "month_short_label": "Aug",
          "period_label": "2025-08-01 to 2025-08-29",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Aug: Mostly sector-driven.",
          "share_market": 0.08032564278693655,
          "share_sector": 0.520697605366551,
          "share_company": 0.3989767518465124,
          "share_market_display": "8.0%",
          "share_sector_display": "52.1%",
          "share_company_display": "39.9%",
          "dominant_share_display": "52.1%"
        },
        {
          "month_key": "2025-09",
          "month_label": "September 2025",
          "month_short_label": "Sep",
          "period_label": "2025-09-01 to 2025-09-30",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Sep: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3048790358617456,
          "share_sector": 0.36886627629747687,
          "share_company": 0.3262546878407776,
          "share_market_display": "30.5%",
          "share_sector_display": "36.9%",
          "share_company_display": "32.6%",
          "dominant_share_display": "36.9%"
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
          "share_market": 0.28553363258057757,
          "share_sector": 0.30549919842224976,
          "share_company": 0.40896716899717256,
          "share_market_display": "28.6%",
          "share_sector_display": "30.5%",
          "share_company_display": "40.9%",
          "dominant_share_display": "40.9%"
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
          "summary": "Nov: More mixed, though company-driven still has the largest share.",
          "share_market": 0.23517710276320647,
          "share_sector": 0.34739175258891364,
          "share_company": 0.41743114464787995,
          "share_market_display": "23.5%",
          "share_sector_display": "34.7%",
          "share_company_display": "41.7%",
          "dominant_share_display": "41.7%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Dec: Mostly company-driven.",
          "share_market": 0.25501616892868134,
          "share_sector": 0.2814876238968308,
          "share_company": 0.46349620717448775,
          "share_market_display": "25.5%",
          "share_sector_display": "28.1%",
          "share_company_display": "46.3%",
          "dominant_share_display": "46.3%"
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
          "share_market": 0.2540154435777651,
          "share_sector": 0.2172879879863473,
          "share_company": 0.5286965684358876,
          "share_market_display": "25.4%",
          "share_sector_display": "21.7%",
          "share_company_display": "52.9%",
          "dominant_share_display": "52.9%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Feb: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.20381785588592305,
          "share_sector": 0.43165428318452775,
          "share_company": 0.3645278609295492,
          "share_market_display": "20.4%",
          "share_sector_display": "43.2%",
          "share_company_display": "36.5%",
          "dominant_share_display": "43.2%"
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
          "share_market": 0.26185345718706726,
          "share_sector": 0.43359636882252184,
          "share_company": 0.3045501739904109,
          "share_market_display": "26.2%",
          "share_sector_display": "43.4%",
          "share_company_display": "30.5%",
          "dominant_share_display": "43.4%"
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
          "summary": "Apr: Still clearly company-driven.",
          "share_market": 0.20211279446872393,
          "share_sector": 0.12380221077746847,
          "share_company": 0.6740849947538075,
          "share_market_display": "20.2%",
          "share_sector_display": "12.4%",
          "share_company_display": "67.4%",
          "dominant_share_display": "67.4%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-11",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "May: Mostly sector-driven, though based on only 6 trading days.",
          "share_market": 0.2227859875740291,
          "share_sector": 0.5732376402868539,
          "share_company": 0.20397637213911704,
          "share_market_display": "22.3%",
          "share_sector_display": "57.3%",
          "share_company_display": "20.4%",
          "dominant_share_display": "57.3%"
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
              "median": 0.030764443551826223,
              "low": 0.030764443551826223,
              "high": 0.030764443551826223
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
              "median": 0.06380772692427404,
              "low": 0.06380772692427404,
              "high": 0.06380772692427404
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
          "price": 2.81,
          "quantity": 1000.0,
          "value": 2810.0
        },
        {
          "level": 2,
          "price": 2.8,
          "quantity": 136500.0,
          "value": 382200.0
        },
        {
          "level": 3,
          "price": 2.79,
          "quantity": 20000.0,
          "value": 55800.0
        },
        {
          "level": 4,
          "price": 2.78,
          "quantity": 32000.0,
          "value": 88960.0
        },
        {
          "level": 5,
          "price": 2.77,
          "quantity": 11000.0,
          "value": 30470.0
        },
        {
          "level": 6,
          "price": 2.76,
          "quantity": 2500.0,
          "value": 6899.999999999999
        },
        {
          "level": 7,
          "price": 2.75,
          "quantity": 52500.0,
          "value": 144375.0
        },
        {
          "level": 8,
          "price": 2.74,
          "quantity": 2500.0,
          "value": 6850.000000000001
        },
        {
          "level": 9,
          "price": 2.73,
          "quantity": 2500.0,
          "value": 6825.0
        },
        {
          "level": 10,
          "price": 2.72,
          "quantity": 12500.0,
          "value": 34000.0
        },
        {
          "level": 11,
          "price": 2.71,
          "quantity": 12500.0,
          "value": 33875.0
        },
        {
          "level": 12,
          "price": 2.7,
          "quantity": 6000.0,
          "value": 16200.000000000002
        },
        {
          "level": 13,
          "price": 2.69,
          "quantity": 10000.0,
          "value": 26900.0
        },
        {
          "level": 14,
          "price": 2.68,
          "quantity": 10000.0,
          "value": 26800.0
        },
        {
          "level": 15,
          "price": 2.66,
          "quantity": 23000.0,
          "value": 61180.0
        },
        {
          "level": 16,
          "price": 2.65,
          "quantity": 150000.0,
          "value": 397500.0
        },
        {
          "level": 17,
          "price": 2.6,
          "quantity": 59000.0,
          "value": 153400.0
        },
        {
          "level": 18,
          "price": 2.58,
          "quantity": 50000.0,
          "value": 129000.0
        },
        {
          "level": 19,
          "price": 2.5,
          "quantity": 2000.0,
          "value": 5000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 2.86,
          "quantity": 1000000.0,
          "value": 2860000.0
        },
        {
          "level": 2,
          "price": 2.87,
          "quantity": 10000.0,
          "value": 28700.0
        },
        {
          "level": 3,
          "price": 2.9,
          "quantity": 120000.0,
          "value": 348000.0
        },
        {
          "level": 4,
          "price": 2.94,
          "quantity": 20000.0,
          "value": 58800.0
        },
        {
          "level": 5,
          "price": 2.95,
          "quantity": 17000.0,
          "value": 50150.0
        },
        {
          "level": 6,
          "price": 2.96,
          "quantity": 11500.0,
          "value": 34040.0
        },
        {
          "level": 7,
          "price": 2.97,
          "quantity": 10000.0,
          "value": 29700.000000000004
        },
        {
          "level": 8,
          "price": 2.98,
          "quantity": 3000.0,
          "value": 8940.0
        },
        {
          "level": 9,
          "price": 2.99,
          "quantity": 31000.0,
          "value": 92690.0
        },
        {
          "level": 10,
          "price": 3.0,
          "quantity": 103500.0,
          "value": 310500.0
        },
        {
          "level": 11,
          "price": 3.03,
          "quantity": 2000.0,
          "value": 6060.0
        },
        {
          "level": 12,
          "price": 3.04,
          "quantity": 10500.0,
          "value": 31920.0
        },
        {
          "level": 13,
          "price": 3.05,
          "quantity": 3000.0,
          "value": 9150.0
        },
        {
          "level": 14,
          "price": 3.06,
          "quantity": 10000.0,
          "value": 30600.0
        },
        {
          "level": 15,
          "price": 3.07,
          "quantity": 10000.0,
          "value": 30700.0
        },
        {
          "level": 16,
          "price": 3.1,
          "quantity": 7000.0,
          "value": 21700.0
        },
        {
          "level": 17,
          "price": 3.12,
          "quantity": 15000.0,
          "value": 46800.0
        },
        {
          "level": 18,
          "price": 3.15,
          "quantity": 6000.0,
          "value": 18900.0
        },
        {
          "level": 19,
          "price": 3.18,
          "quantity": 33000.0,
          "value": 104940.0
        },
        {
          "level": 20,
          "price": 3.2,
          "quantity": 50000.0,
          "value": 160000.0
        },
        {
          "level": 21,
          "price": 3.3,
          "quantity": 500.0,
          "value": 1650.0
        },
        {
          "level": 22,
          "price": 3.33,
          "quantity": 20000.0,
          "value": 66600.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-11 07:59:57.744000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 2.835,
        "spread_pct": 0.017636684303350907,
        "spread_ticks": 5.0,
        "tick_size": 0.01,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 1609045.0,
        "ask_depth_notional_displayed": 4350540.0,
        "bid_depth_notional_top10": 1609045.0,
        "ask_depth_notional_top10": 4350540.0,
        "bid_ask_depth_ratio": 0.3698
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 241,
        "n_trades_used": 131701,
        "first_trade_date": "2025-05-12",
        "last_trade_date": "2026-05-11",
        "window_label": "May 12, 2025 to May 11, 2026",
        "window_short_label": "May 12, 2025 to May 11, 2026",
        "trade_days_label": "241 trading days",
        "trade_count_label": "131,701 trades",
        "window_detail_label": "241 trading days • 131,701 trades",
        "history_note": "Trade-size percentiles use May 12, 2025 to May 11, 2026 history (241 trading days • 131,701 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 41990.0,
            "impact_pct": -0.012110000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 2.61,
            "pct_of_adv": 0.89
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 65160.0,
            "impact_pct": -0.012194,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 4.05,
            "pct_of_adv": 1.38
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 1280614.8,
            "impact_pct": -0.036888000000000004,
            "filled_pct": 100.0,
            "levels_consumed": 16,
            "pct_of_bid_depth": 79.59,
            "pct_of_adv": 27.13
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
            "order_id": "5014692353",
            "timestamp": "2026-05-11 07:26:23.848000000",
            "local_timestamp": "2026-05-11 15:26:23",
            "posted_price": 2.86,
            "size_shares": 1000000.0,
            "notional": 2860000.0,
            "impact_pct": -0.046910999999999994,
            "filled_pct": 56.3,
            "levels_consumed": 19,
            "pct_of_bid_depth": 177.75,
            "price_vs_mid_pct": 0.882,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "61237505",
            "timestamp": "2026-05-11 01:30:33.423000000",
            "local_timestamp": "2026-05-11 09:30:33",
            "posted_price": 3.03,
            "size_shares": 200000.0,
            "notional": 606000.0,
            "impact_pct": -0.01554,
            "filled_pct": 100.0,
            "levels_consumed": 7,
            "pct_of_bid_depth": 37.66,
            "price_vs_mid_pct": 6.878,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "54741761",
            "timestamp": "2026-05-11 01:30:26.428000000",
            "local_timestamp": "2026-05-11 09:30:26",
            "posted_price": 3.0,
            "size_shares": 156500.0,
            "notional": 469500.0,
            "impact_pct": -0.013179000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 29.18,
            "price_vs_mid_pct": 5.82,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-11",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.01,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.013888888888888902,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 1648275.0,
            "ask_depth_notional": 2506755.0,
            "mid_price": 2.88
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.006944444444444451,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1696060.0,
            "ask_depth_notional": 2636040.0,
            "mid_price": 2.88
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.013986013986014,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 1832000.0,
            "ask_depth_notional": 2550585.0,
            "mid_price": 2.86
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.006993006993006998,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 2349165.0,
            "ask_depth_notional": 2495975.0,
            "mid_price": 2.8600000000000003
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0035149384885765312,
            "spread_ticks": 1.000000000000023,
            "bid_depth_notional": 1931840.0,
            "ask_depth_notional": 2505360.0,
            "mid_price": 2.8449999999999998
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.010471204188481607,
            "spread_ticks": 2.9999999999999805,
            "bid_depth_notional": 2935905.0,
            "ask_depth_notional": 2556540.0,
            "mid_price": 2.865
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.010471204188481607,
            "spread_ticks": 2.9999999999999805,
            "bid_depth_notional": 2947485.0,
            "ask_depth_notional": 2677900.0,
            "mid_price": 2.865
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.010471204188481607,
            "spread_ticks": 2.9999999999999805,
            "bid_depth_notional": 3037940.0,
            "ask_depth_notional": 2691200.0,
            "mid_price": 2.865
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.006993006993006998,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 2966675.0,
            "ask_depth_notional": 2033055.0,
            "mid_price": 2.8600000000000003
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0035149384885765312,
            "spread_ticks": 1.000000000000023,
            "bid_depth_notional": 2599830.0,
            "ask_depth_notional": 4972545.0,
            "mid_price": 2.8449999999999998
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.017636684303350907,
            "spread_ticks": 4.999999999999982,
            "bid_depth_notional": 1609045.0,
            "ask_depth_notional": 4350540.0,
            "mid_price": 2.835
          }
        ],
        "summary": {
          "median_spread_pct": 0.010471204188481607,
          "median_spread_ticks": 2.9999999999999805,
          "median_bid_depth_notional": 2349165.0,
          "median_ask_depth_notional": 2556540.0,
          "tightest_bucket": "11:30",
          "widest_bucket": "15:30",
          "deepest_bid_bucket": "14:00",
          "thinnest_bid_bucket": "15:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 1.1,
      "peers": [
        {
          "ticker": "6996",
          "pct": 9.7
        },
        {
          "ticker": "6660",
          "pct": 33.4
        },
        {
          "ticker": "719",
          "pct": 33.8
        },
        {
          "ticker": "2511",
          "pct": 37.5
        },
        {
          "ticker": "3880",
          "pct": 44.7
        },
        {
          "ticker": "1763",
          "pct": 46.0
        },
        {
          "ticker": "9989",
          "pct": 72.0
        },
        {
          "ticker": "6896",
          "pct": 77.0
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 271,
          "n_runs": 116,
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
            "retail_pct": 0.3025830258302583,
            "mixed_pct": 0.17712177121771217,
            "instit_pct": 0.3210332103321033,
            "ambiguous_pct": 0.1992619926199262,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1992619926199262,
            "retail_qty_pct": 0.047116736990154715,
            "mixed_qty_pct": 0.2071026722925457,
            "instit_qty_pct": 0.5576652601969058,
            "ambiguous_qty_pct": 0.1881153305203938,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1881153305203938,
            "retail_notional_pct": 0.047465090275550625,
            "mixed_notional_pct": 0.20691866965996064,
            "instit_notional_pct": 0.5563638660051041,
            "ambiguous_notional_pct": 0.1892523740593846,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1892523740593846
          },
          "run_composition": {
            "retail_pct": 0.5603448275862069,
            "mixed_pct": 0.25,
            "instit_pct": 0.10344827586206896,
            "ambiguous_pct": 0.08620689655172414,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.08620689655172414,
            "retail_notional_pct": 0.049883185997857946,
            "mixed_notional_pct": 0.3091066827228114,
            "instit_notional_pct": 0.5305408959994673,
            "unclear_notional_pct": 0.11046923527986341
          },
          "counts": {
            "trades": {
              "retail": 82,
              "mixed": 48,
              "institutional": 87,
              "ambiguous": 54,
              "unobservable": 0,
              "unclear": 54
            },
            "runs": {
              "retail": 65,
              "mixed": 29,
              "institutional": 12,
              "ambiguous": 10,
              "unobservable": 0,
              "unclear": 10
            }
          },
          "confidence": {
            "high": 0.6637931034482759,
            "medium": 0.25,
            "low": 0.08620689655172414,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 77,
            "medium": 29,
            "low": 10,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.42066420664206644,
            "medium": 0.17712177121771217,
            "low": 0.4022140221402214,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 114,
            "medium": 48,
            "low": 109,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8590517241379306,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.08620689655172414,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5603448275862069,
          "dominance_gap": 0.31034482758620685,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 138,
              "UNOBSERVABLE": 93,
              "WALK_BOOK": 40
            },
            "d2_information": {
              "UNOBSERVABLE": 271
            },
            "d3_urgency": {
              "UNOBSERVABLE": 116
            },
            "participant_confidence": {
              "HIGH": 77,
              "MEDIUM": 29,
              "LOW": 10
            }
          },
          "trade_size": {
            "avg": 14900.055350553506,
            "median": 5760.0
          },
          "run_size": {
            "avg": 23301.853448275862,
            "median": 2905.0,
            "avg_length": 1.0775862068965518
          },
          "recent_trades": [
            {
              "trade_id": "272",
              "timestamp": "2026-05-11T07:59:53.042220",
              "price": 2.85,
              "size": 1000.0,
              "notional": 2850.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37790,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "271",
              "timestamp": "2026-05-11T07:57:49.025561",
              "price": 2.8,
              "size": 1000.0,
              "notional": 2800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37789,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "270",
              "timestamp": "2026-05-11T07:57:48.396029",
              "price": 2.83,
              "size": 5000.0,
              "notional": 14150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37788,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "269",
              "timestamp": "2026-05-11T07:57:48.396029",
              "price": 2.83,
              "size": 5000.0,
              "notional": 14150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37788,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "268",
              "timestamp": "2026-05-11T07:55:53.902630",
              "price": 2.83,
              "size": 1500.0,
              "notional": 4245.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "267",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 1000.0,
              "notional": 2830.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "266",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 6500.0,
              "notional": 18395.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "265",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 1000.0,
              "notional": 2830.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37787,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "264",
              "timestamp": "2026-05-11T07:55:44.541317",
              "price": 2.82,
              "size": 1000.0,
              "notional": 2820.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37787,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "263",
              "timestamp": "2026-05-11T07:55:15.860011",
              "price": 2.8,
              "size": 1000.0,
              "notional": 2800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37786,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "262",
              "timestamp": "2026-05-11T07:55:14.900748",
              "price": 2.83,
              "size": 13500.0,
              "notional": 38205.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "261",
              "timestamp": "2026-05-11T07:55:14.900748",
              "price": 2.83,
              "size": 500.0,
              "notional": 1415.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37785,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "260",
              "timestamp": "2026-05-11T07:55:14.014208",
              "price": 2.82,
              "size": 500.0,
              "notional": 1410.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37784,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "259",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 2500.0,
              "notional": 7075.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "258",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 33000.0,
              "notional": 93390.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "257",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 4000.0,
              "notional": 11320.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "256",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 6000.0,
              "notional": 16980.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "255",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 14500.0,
              "notional": 41035.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "254",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 1500.0,
              "notional": 4215.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "253",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 7500.0,
              "notional": 21075.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "252",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 4000.0,
              "notional": 11240.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37782,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "251",
              "timestamp": "2026-05-11T07:52:37.691533",
              "price": 2.8,
              "size": 1500.0,
              "notional": 4200.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37781,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "250",
              "timestamp": "2026-05-11T07:52:37.340222",
              "price": 2.8,
              "size": 5000.0,
              "notional": 14000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37781,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "249",
              "timestamp": "2026-05-11T07:50:37.349256",
              "price": 2.8,
              "size": 10000.0,
              "notional": 28000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 37780,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "248",
              "timestamp": "2026-05-11T07:50:37.349256",
              "price": 2.8,
              "size": 10000.0,
              "notional": 28000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 37780,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "247",
              "timestamp": "2026-05-11T07:50:20.578463",
              "price": 2.81,
              "size": 7500.0,
              "notional": 21075.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37779,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "246",
              "timestamp": "2026-05-11T07:49:04.796246",
              "price": 2.81,
              "size": 3000.0,
              "notional": 8430.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "245",
              "timestamp": "2026-05-11T07:48:38.517270",
              "price": 2.81,
              "size": 2500.0,
              "notional": 7025.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "244",
              "timestamp": "2026-05-11T07:48:38.517270",
              "price": 2.81,
              "size": 14500.0,
              "notional": 40745.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37778,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "243",
              "timestamp": "2026-05-11T07:48:32.610520",
              "price": 2.8,
              "size": 2500.0,
              "notional": 7000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 7908,
          "n_runs": 2661,
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
            "retail_pct": 0.25012645422357105,
            "mixed_pct": 0.1306272129489125,
            "instit_pct": 0.37670713201820943,
            "ambiguous_pct": 0.24253920080930702,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24253920080930702,
            "retail_qty_pct": 0.05741288517897683,
            "mixed_qty_pct": 0.10839408274078872,
            "instit_qty_pct": 0.6445762607547709,
            "ambiguous_qty_pct": 0.1896167713254635,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1896167713254635,
            "retail_notional_pct": 0.057615247390905455,
            "mixed_notional_pct": 0.10788284612827677,
            "instit_notional_pct": 0.644951193222117,
            "ambiguous_notional_pct": 0.18955071325870088,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.18955071325870088
          },
          "run_composition": {
            "retail_pct": 0.47538519353626457,
            "mixed_pct": 0.2055618188650883,
            "instit_pct": 0.18752348741074784,
            "ambiguous_pct": 0.13152950018789927,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13152950018789927,
            "retail_notional_pct": 0.06566738161042365,
            "mixed_notional_pct": 0.16278346453410117,
            "instit_notional_pct": 0.6774121278914089,
            "unclear_notional_pct": 0.09413702596406624
          },
          "counts": {
            "trades": {
              "retail": 1978,
              "mixed": 1033,
              "institutional": 2979,
              "ambiguous": 1918,
              "unobservable": 0,
              "unclear": 1918
            },
            "runs": {
              "retail": 1265,
              "mixed": 547,
              "institutional": 499,
              "ambiguous": 350,
              "unobservable": 0,
              "unclear": 350
            }
          },
          "confidence": {
            "high": 0.6625328823750469,
            "medium": 0.20593761743705374,
            "low": 0.13152950018789927,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 1763,
            "medium": 548,
            "low": 350,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.46307536671724836,
            "medium": 0.13075366717248357,
            "low": 0.4061709661102681,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 3662,
            "medium": 1034,
            "low": 3212,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8709319804584742,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.13152950018789927,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.47538519353626457,
          "dominance_gap": 0.26982337467117623,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 3537,
              "UNOBSERVABLE": 2521,
              "WALK_BOOK": 1850
            },
            "d2_information": {
              "UNOBSERVABLE": 7908
            },
            "d3_urgency": {
              "UNOBSERVABLE": 2661
            },
            "participant_confidence": {
              "HIGH": 1763,
              "MEDIUM": 548,
              "LOW": 350
            }
          },
          "trade_size": {
            "avg": 17468.9064491654,
            "median": 7200.0
          },
          "run_size": {
            "avg": 34405.637805336344,
            "median": 11480.0,
            "avg_length": 1.2190905674558437
          },
          "recent_trades": [
            {
              "trade_id": "272",
              "timestamp": "2026-05-11T07:59:53.042220",
              "price": 2.85,
              "size": 1000.0,
              "notional": 2850.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37790,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "271",
              "timestamp": "2026-05-11T07:57:49.025561",
              "price": 2.8,
              "size": 1000.0,
              "notional": 2800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37789,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "270",
              "timestamp": "2026-05-11T07:57:48.396029",
              "price": 2.83,
              "size": 5000.0,
              "notional": 14150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37788,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "269",
              "timestamp": "2026-05-11T07:57:48.396029",
              "price": 2.83,
              "size": 5000.0,
              "notional": 14150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37788,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "268",
              "timestamp": "2026-05-11T07:55:53.902630",
              "price": 2.83,
              "size": 1500.0,
              "notional": 4245.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "267",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 1000.0,
              "notional": 2830.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "266",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 6500.0,
              "notional": 18395.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "265",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 1000.0,
              "notional": 2830.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37787,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "264",
              "timestamp": "2026-05-11T07:55:44.541317",
              "price": 2.82,
              "size": 1000.0,
              "notional": 2820.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37787,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "263",
              "timestamp": "2026-05-11T07:55:15.860011",
              "price": 2.8,
              "size": 1000.0,
              "notional": 2800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37786,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "262",
              "timestamp": "2026-05-11T07:55:14.900748",
              "price": 2.83,
              "size": 13500.0,
              "notional": 38205.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "261",
              "timestamp": "2026-05-11T07:55:14.900748",
              "price": 2.83,
              "size": 500.0,
              "notional": 1415.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37785,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "260",
              "timestamp": "2026-05-11T07:55:14.014208",
              "price": 2.82,
              "size": 500.0,
              "notional": 1410.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37784,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "259",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 2500.0,
              "notional": 7075.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "258",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 33000.0,
              "notional": 93390.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "257",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 4000.0,
              "notional": 11320.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "256",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 6000.0,
              "notional": 16980.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "255",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 14500.0,
              "notional": 41035.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "254",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 1500.0,
              "notional": 4215.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "253",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 7500.0,
              "notional": 21075.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "252",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 4000.0,
              "notional": 11240.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37782,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "251",
              "timestamp": "2026-05-11T07:52:37.691533",
              "price": 2.8,
              "size": 1500.0,
              "notional": 4200.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37781,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "250",
              "timestamp": "2026-05-11T07:52:37.340222",
              "price": 2.8,
              "size": 5000.0,
              "notional": 14000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37781,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "249",
              "timestamp": "2026-05-11T07:50:37.349256",
              "price": 2.8,
              "size": 10000.0,
              "notional": 28000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 37780,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "248",
              "timestamp": "2026-05-11T07:50:37.349256",
              "price": 2.8,
              "size": 10000.0,
              "notional": 28000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 37780,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "247",
              "timestamp": "2026-05-11T07:50:20.578463",
              "price": 2.81,
              "size": 7500.0,
              "notional": 21075.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37779,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "246",
              "timestamp": "2026-05-11T07:49:04.796246",
              "price": 2.81,
              "size": 3000.0,
              "notional": 8430.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "245",
              "timestamp": "2026-05-11T07:48:38.517270",
              "price": 2.81,
              "size": 2500.0,
              "notional": 7025.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "244",
              "timestamp": "2026-05-11T07:48:38.517270",
              "price": 2.81,
              "size": 14500.0,
              "notional": 40745.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37778,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "243",
              "timestamp": "2026-05-11T07:48:32.610520",
              "price": 2.8,
              "size": 2500.0,
              "notional": 7000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 34348,
          "n_runs": 11385,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-03",
          "last_trade_date": "2026-05-11",
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
            "retail_pct": 0.2407418190287644,
            "mixed_pct": 0.14227902643530918,
            "instit_pct": 0.37926516827762896,
            "ambiguous_pct": 0.23771398625829743,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23771398625829743,
            "retail_qty_pct": 0.05845780542685412,
            "mixed_qty_pct": 0.12030209642523466,
            "instit_qty_pct": 0.6337375538688897,
            "ambiguous_qty_pct": 0.1875025442790214,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1875025442790214,
            "retail_notional_pct": 0.0589763148783032,
            "mixed_notional_pct": 0.1220766335965175,
            "instit_notional_pct": 0.6332851483517328,
            "ambiguous_notional_pct": 0.18566190317344647,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.18566190317344647
          },
          "run_composition": {
            "retail_pct": 0.4639437856829161,
            "mixed_pct": 0.2080808080808081,
            "instit_pct": 0.19051383399209487,
            "ambiguous_pct": 0.13746157224418093,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13746157224418093,
            "retail_notional_pct": 0.07020737996593718,
            "mixed_notional_pct": 0.17382927692052355,
            "instit_notional_pct": 0.6470348602810423,
            "unclear_notional_pct": 0.108928482832497
          },
          "counts": {
            "trades": {
              "retail": 8269,
              "mixed": 4887,
              "institutional": 13027,
              "ambiguous": 8165,
              "unobservable": 0,
              "unclear": 8165
            },
            "runs": {
              "retail": 5282,
              "mixed": 2369,
              "institutional": 2169,
              "ambiguous": 1565,
              "unobservable": 0,
              "unclear": 1565
            }
          },
          "confidence": {
            "high": 0.6543697848045674,
            "medium": 0.20816864295125165,
            "low": 0.13746157224418093,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 7450,
            "medium": 2370,
            "low": 1565,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.45181669966228016,
            "medium": 0.1377081635029696,
            "low": 0.4104751368347502,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 15519,
            "medium": 4730,
            "low": 14099,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8734211682037767,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.13746157224418093,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4639437856829161,
          "dominance_gap": 0.255862977602108,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 15149,
              "UNOBSERVABLE": 10992,
              "WALK_BOOK": 8204,
              "MULTI_FILL_SINGLE_PRICE": 3
            },
            "d2_information": {
              "UNOBSERVABLE": 34348
            },
            "d3_urgency": {
              "UNOBSERVABLE": 11385
            },
            "participant_confidence": {
              "HIGH": 7450,
              "MEDIUM": 2370,
              "LOW": 1565
            }
          },
          "trade_size": {
            "avg": 20828.59709357168,
            "median": 8880.0
          },
          "run_size": {
            "avg": 41017.15770487484,
            "median": 14500.0,
            "avg_length": 1.2362758014931927
          },
          "recent_trades": [
            {
              "trade_id": "272",
              "timestamp": "2026-05-11T07:59:53.042220",
              "price": 2.85,
              "size": 1000.0,
              "notional": 2850.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37790,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "271",
              "timestamp": "2026-05-11T07:57:49.025561",
              "price": 2.8,
              "size": 1000.0,
              "notional": 2800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37789,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "270",
              "timestamp": "2026-05-11T07:57:48.396029",
              "price": 2.83,
              "size": 5000.0,
              "notional": 14150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37788,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "269",
              "timestamp": "2026-05-11T07:57:48.396029",
              "price": 2.83,
              "size": 5000.0,
              "notional": 14150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37788,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "268",
              "timestamp": "2026-05-11T07:55:53.902630",
              "price": 2.83,
              "size": 1500.0,
              "notional": 4245.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "267",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 1000.0,
              "notional": 2830.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "266",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 6500.0,
              "notional": 18395.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "265",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 1000.0,
              "notional": 2830.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37787,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "264",
              "timestamp": "2026-05-11T07:55:44.541317",
              "price": 2.82,
              "size": 1000.0,
              "notional": 2820.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37787,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "263",
              "timestamp": "2026-05-11T07:55:15.860011",
              "price": 2.8,
              "size": 1000.0,
              "notional": 2800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37786,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "262",
              "timestamp": "2026-05-11T07:55:14.900748",
              "price": 2.83,
              "size": 13500.0,
              "notional": 38205.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "261",
              "timestamp": "2026-05-11T07:55:14.900748",
              "price": 2.83,
              "size": 500.0,
              "notional": 1415.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37785,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "260",
              "timestamp": "2026-05-11T07:55:14.014208",
              "price": 2.82,
              "size": 500.0,
              "notional": 1410.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37784,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "259",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 2500.0,
              "notional": 7075.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "258",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 33000.0,
              "notional": 93390.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "257",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 4000.0,
              "notional": 11320.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "256",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 6000.0,
              "notional": 16980.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "255",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 14500.0,
              "notional": 41035.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "254",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 1500.0,
              "notional": 4215.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "253",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 7500.0,
              "notional": 21075.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "252",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 4000.0,
              "notional": 11240.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37782,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "251",
              "timestamp": "2026-05-11T07:52:37.691533",
              "price": 2.8,
              "size": 1500.0,
              "notional": 4200.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37781,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "250",
              "timestamp": "2026-05-11T07:52:37.340222",
              "price": 2.8,
              "size": 5000.0,
              "notional": 14000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37781,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "249",
              "timestamp": "2026-05-11T07:50:37.349256",
              "price": 2.8,
              "size": 10000.0,
              "notional": 28000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 37780,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "248",
              "timestamp": "2026-05-11T07:50:37.349256",
              "price": 2.8,
              "size": 10000.0,
              "notional": 28000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 37780,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "247",
              "timestamp": "2026-05-11T07:50:20.578463",
              "price": 2.81,
              "size": 7500.0,
              "notional": 21075.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37779,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "246",
              "timestamp": "2026-05-11T07:49:04.796246",
              "price": 2.81,
              "size": 3000.0,
              "notional": 8430.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "245",
              "timestamp": "2026-05-11T07:48:38.517270",
              "price": 2.81,
              "size": 2500.0,
              "notional": 7025.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "244",
              "timestamp": "2026-05-11T07:48:38.517270",
              "price": 2.81,
              "size": 14500.0,
              "notional": 40745.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37778,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "243",
              "timestamp": "2026-05-11T07:48:32.610520",
              "price": 2.8,
              "size": 2500.0,
              "notional": 7000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 51991,
          "n_runs": 17890,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-23",
          "last_trade_date": "2026-05-11",
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
            "retail_pct": 0.24473466561520263,
            "mixed_pct": 0.1490834952203266,
            "instit_pct": 0.3669673597353388,
            "ambiguous_pct": 0.23921447942913196,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23921447942913196,
            "retail_qty_pct": 0.0594756441762998,
            "mixed_qty_pct": 0.12459130402502203,
            "instit_qty_pct": 0.6252262300781524,
            "ambiguous_qty_pct": 0.19070682172052586,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.19070682172052586,
            "retail_notional_pct": 0.05981290937265283,
            "mixed_notional_pct": 0.12498200172849395,
            "instit_notional_pct": 0.6263539040889362,
            "ambiguous_notional_pct": 0.18885118480991694,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.18885118480991694
          },
          "run_composition": {
            "retail_pct": 0.4678591391839016,
            "mixed_pct": 0.2169927333705981,
            "instit_pct": 0.17562884292901063,
            "ambiguous_pct": 0.13951928451648965,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13951928451648965,
            "retail_notional_pct": 0.07376057403490117,
            "mixed_notional_pct": 0.18216777426149508,
            "instit_notional_pct": 0.6244120307208216,
            "unclear_notional_pct": 0.11965962098278206
          },
          "counts": {
            "trades": {
              "retail": 12724,
              "mixed": 7751,
              "institutional": 19079,
              "ambiguous": 12437,
              "unobservable": 0,
              "unclear": 12437
            },
            "runs": {
              "retail": 8370,
              "mixed": 3882,
              "institutional": 3142,
              "ambiguous": 2496,
              "unobservable": 0,
              "unclear": 2496
            }
          },
          "confidence": {
            "high": 0.6434320849636669,
            "medium": 0.2170486305198435,
            "low": 0.13951928451648965,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 11511,
            "medium": 3883,
            "low": 2496,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.44048008309130426,
            "medium": 0.14606374180146564,
            "low": 0.4134561751072301,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 22901,
            "medium": 7594,
            "low": 21496,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8703297931805477,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.13951928451648965,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4678591391839016,
          "dominance_gap": 0.2508664058133035,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 23306,
              "UNOBSERVABLE": 16548,
              "WALK_BOOK": 12134,
              "MULTI_FILL_SINGLE_PRICE": 3
            },
            "d2_information": {
              "UNOBSERVABLE": 51991
            },
            "d3_urgency": {
              "UNOBSERVABLE": 17890
            },
            "participant_confidence": {
              "HIGH": 11511,
              "MEDIUM": 3883,
              "LOW": 2496
            }
          },
          "trade_size": {
            "avg": 20225.06972225962,
            "median": 8760.0
          },
          "run_size": {
            "avg": 38435.31641084404,
            "median": 14015.0,
            "avg_length": 1.2018446059250978
          },
          "recent_trades": [
            {
              "trade_id": "272",
              "timestamp": "2026-05-11T07:59:53.042220",
              "price": 2.85,
              "size": 1000.0,
              "notional": 2850.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37790,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "271",
              "timestamp": "2026-05-11T07:57:49.025561",
              "price": 2.8,
              "size": 1000.0,
              "notional": 2800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37789,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "270",
              "timestamp": "2026-05-11T07:57:48.396029",
              "price": 2.83,
              "size": 5000.0,
              "notional": 14150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37788,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "269",
              "timestamp": "2026-05-11T07:57:48.396029",
              "price": 2.83,
              "size": 5000.0,
              "notional": 14150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37788,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "268",
              "timestamp": "2026-05-11T07:55:53.902630",
              "price": 2.83,
              "size": 1500.0,
              "notional": 4245.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "267",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 1000.0,
              "notional": 2830.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "266",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 6500.0,
              "notional": 18395.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "265",
              "timestamp": "2026-05-11T07:55:53.902279",
              "price": 2.83,
              "size": 1000.0,
              "notional": 2830.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37787,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "264",
              "timestamp": "2026-05-11T07:55:44.541317",
              "price": 2.82,
              "size": 1000.0,
              "notional": 2820.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37787,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "263",
              "timestamp": "2026-05-11T07:55:15.860011",
              "price": 2.8,
              "size": 1000.0,
              "notional": 2800.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37786,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "262",
              "timestamp": "2026-05-11T07:55:14.900748",
              "price": 2.83,
              "size": 13500.0,
              "notional": 38205.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "261",
              "timestamp": "2026-05-11T07:55:14.900748",
              "price": 2.83,
              "size": 500.0,
              "notional": 1415.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37785,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "260",
              "timestamp": "2026-05-11T07:55:14.014208",
              "price": 2.82,
              "size": 500.0,
              "notional": 1410.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 37784,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "259",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 2500.0,
              "notional": 7075.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "258",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 33000.0,
              "notional": 93390.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "257",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 4000.0,
              "notional": 11320.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "256",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 6000.0,
              "notional": 16980.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "255",
              "timestamp": "2026-05-11T07:54:50.532206",
              "price": 2.83,
              "size": 14500.0,
              "notional": 41035.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37783,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "254",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 1500.0,
              "notional": 4215.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "253",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 7500.0,
              "notional": 21075.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "252",
              "timestamp": "2026-05-11T07:53:52.364785",
              "price": 2.81,
              "size": 4000.0,
              "notional": 11240.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37782,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "251",
              "timestamp": "2026-05-11T07:52:37.691533",
              "price": 2.8,
              "size": 1500.0,
              "notional": 4200.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37781,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "250",
              "timestamp": "2026-05-11T07:52:37.340222",
              "price": 2.8,
              "size": 5000.0,
              "notional": 14000.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37781,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "249",
              "timestamp": "2026-05-11T07:50:37.349256",
              "price": 2.8,
              "size": 10000.0,
              "notional": 28000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 37780,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "248",
              "timestamp": "2026-05-11T07:50:37.349256",
              "price": 2.8,
              "size": 10000.0,
              "notional": 28000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 37780,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "247",
              "timestamp": "2026-05-11T07:50:20.578463",
              "price": 2.81,
              "size": 7500.0,
              "notional": 21075.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 37779,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "246",
              "timestamp": "2026-05-11T07:49:04.796246",
              "price": 2.81,
              "size": 3000.0,
              "notional": 8430.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "245",
              "timestamp": "2026-05-11T07:48:38.517270",
              "price": 2.81,
              "size": 2500.0,
              "notional": 7025.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "244",
              "timestamp": "2026-05-11T07:48:38.517270",
              "price": 2.81,
              "size": 14500.0,
              "notional": 40745.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 37778,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "243",
              "timestamp": "2026-05-11T07:48:32.610520",
              "price": 2.8,
              "size": 2500.0,
              "notional": 7000.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 51991,
      "n_runs": 17890,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-23",
      "last_trade_date": "2026-05-11",
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
        "retail_pct": 0.24473466561520263,
        "mixed_pct": 0.1490834952203266,
        "instit_pct": 0.3669673597353388,
        "ambiguous_pct": 0.23921447942913196,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.23921447942913196,
        "retail_qty_pct": 0.0594756441762998,
        "mixed_qty_pct": 0.12459130402502203,
        "instit_qty_pct": 0.6252262300781524,
        "ambiguous_qty_pct": 0.19070682172052586,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.19070682172052586,
        "retail_notional_pct": 0.05981290937265283,
        "mixed_notional_pct": 0.12498200172849395,
        "instit_notional_pct": 0.6263539040889362,
        "ambiguous_notional_pct": 0.18885118480991694,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.18885118480991694
      },
      "run_composition": {
        "retail_pct": 0.4678591391839016,
        "mixed_pct": 0.2169927333705981,
        "instit_pct": 0.17562884292901063,
        "ambiguous_pct": 0.13951928451648965,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.13951928451648965
      },
      "trade_size": {
        "avg": 20225.06972225962,
        "median": 8760.0
      },
      "run_size": {
        "avg": 38435.31641084404,
        "median": 14015.0,
        "avg_length": 1.2018446059250978
      },
      "confidence": {
        "high": 0.6434320849636669,
        "medium": 0.2170486305198435,
        "low": 0.13951928451648965,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 11511,
        "medium": 3883,
        "low": 2496,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.44048008309130426,
        "medium": 0.14606374180146564,
        "low": 0.4134561751072301,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 22901,
        "medium": 7594,
        "low": 21496,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 12724,
          "mixed": 7751,
          "institutional": 19079,
          "ambiguous": 12437,
          "unobservable": 0,
          "unclear": 12437
        },
        "runs": {
          "retail": 8370,
          "mixed": 3882,
          "institutional": 3142,
          "ambiguous": 2496,
          "unobservable": 0,
          "unclear": 2496
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8703297931805477,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.13951928451648965,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.4678591391839016,
      "dominance_gap": 0.2508664058133035,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 1190,
            "n_runs": 505,
            "retail_pct": 0.2747899159663866,
            "mixed_pct": 0.18067226890756302,
            "instit_pct": 0.25210084033613445,
            "ambiguous_pct": 0.292436974789916,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.292436974789916,
            "avg_trade_size": 16410.232235294116,
            "avg_run_notional": 27031.695762376236,
            "retail_qty_pct": 0.04914013063477759,
            "mixed_qty_pct": 0.13474644006478345,
            "instit_qty_pct": 0.6110359205189149,
            "ambiguous_qty_pct": 0.2050775087815241,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2050775087815241,
            "retail_notional_pct": 0.049051500884745185,
            "mixed_notional_pct": 0.13560994898757664,
            "instit_notional_pct": 0.6108501777172602,
            "ambiguous_notional_pct": 0.20448837241041795,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20448837241041795,
            "run_retail_pct": 0.4198019801980198,
            "run_mixed_pct": 0.2693069306930693,
            "run_instit_pct": 0.14653465346534653,
            "run_ambiguous_pct": 0.16435643564356436,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.16435643564356436,
            "avg_feature_coverage": 0.8612871287128712,
            "high_confidence_pct": 0.5663366336633663,
            "medium_confidence_pct": 0.2693069306930693,
            "low_confidence_pct": 0.16435643564356436,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 9441,
            "n_runs": 3302,
            "retail_pct": 0.24351233979451328,
            "mixed_pct": 0.15803410655650885,
            "instit_pct": 0.3606609469335875,
            "ambiguous_pct": 0.23779260671539032,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23779260671539032,
            "avg_trade_size": 22763.36999046711,
            "avg_run_notional": 42746.492804361,
            "retail_qty_pct": 0.0613117585952004,
            "mixed_qty_pct": 0.1281633471168786,
            "instit_qty_pct": 0.6207082935505324,
            "ambiguous_qty_pct": 0.18981660073738862,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.18981660073738862,
            "retail_notional_pct": 0.06169883790737569,
            "mixed_notional_pct": 0.12866050317836494,
            "instit_notional_pct": 0.6189492752991576,
            "ambiguous_notional_pct": 0.1906913836151017,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1906913836151017,
            "run_retail_pct": 0.483343428225318,
            "run_mixed_pct": 0.2225923682616596,
            "run_instit_pct": 0.14778921865536038,
            "run_ambiguous_pct": 0.14627498485766202,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.14627498485766202,
            "avg_feature_coverage": 0.8643095093882494,
            "high_confidence_pct": 0.6311326468806784,
            "medium_confidence_pct": 0.2225923682616596,
            "low_confidence_pct": 0.14627498485766202,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 3805,
            "n_runs": 1655,
            "retail_pct": 0.29750328515111696,
            "mixed_pct": 0.1521681997371879,
            "instit_pct": 0.31537450722733246,
            "ambiguous_pct": 0.2349540078843627,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2349540078843627,
            "avg_trade_size": 19050.393955321946,
            "avg_run_notional": 26716.760725075528,
            "retail_qty_pct": 0.05970259947343049,
            "mixed_qty_pct": 0.13503541365372493,
            "instit_qty_pct": 0.5948381354989432,
            "ambiguous_qty_pct": 0.21042385137390143,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21042385137390143,
            "retail_notional_pct": 0.05955700951631863,
            "mixed_notional_pct": 0.13494963058696424,
            "instit_notional_pct": 0.5952882505463171,
            "ambiguous_notional_pct": 0.21020510935040004,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21020510935040004,
            "run_retail_pct": 0.5099697885196375,
            "run_mixed_pct": 0.229607250755287,
            "run_instit_pct": 0.12809667673716013,
            "run_ambiguous_pct": 0.1323262839879154,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1323262839879154,
            "avg_feature_coverage": 0.8611480362537763,
            "high_confidence_pct": 0.6380664652567976,
            "medium_confidence_pct": 0.229607250755287,
            "low_confidence_pct": 0.1323262839879154,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 21780,
            "n_runs": 6848,
            "retail_pct": 0.22814508723599633,
            "mixed_pct": 0.1460973370064279,
            "instit_pct": 0.3920569329660239,
            "ambiguous_pct": 0.2337006427915519,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2337006427915519,
            "avg_trade_size": 22436.98281772268,
            "avg_run_notional": 46871.37460134346,
            "retail_qty_pct": 0.06020652528953976,
            "mixed_qty_pct": 0.1234803836406108,
            "instit_qty_pct": 0.6361277671779331,
            "ambiguous_qty_pct": 0.18018532389191633,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.18018532389191633,
            "retail_notional_pct": 0.060588511568825075,
            "mixed_notional_pct": 0.12578259017426882,
            "instit_notional_pct": 0.634491813883018,
            "ambiguous_notional_pct": 0.1791370843738881,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1791370843738881,
            "run_retail_pct": 0.4484521028037383,
            "run_mixed_pct": 0.20808995327102803,
            "run_instit_pct": 0.2044392523364486,
            "run_ambiguous_pct": 0.13901869158878505,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.13901869158878505,
            "avg_feature_coverage": 0.8772999415887848,
            "high_confidence_pct": 0.6528913551401869,
            "medium_confidence_pct": 0.20808995327102803,
            "low_confidence_pct": 0.13901869158878505,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 6737,
            "n_runs": 2338,
            "retail_pct": 0.25278313789520557,
            "mixed_pct": 0.1292860323586166,
            "instit_pct": 0.3682648062936025,
            "ambiguous_pct": 0.24966602345257533,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24966602345257533,
            "avg_trade_size": 18240.816862104795,
            "avg_run_notional": 33517.976133447395,
            "retail_qty_pct": 0.050885933426620164,
            "mixed_qty_pct": 0.10431567422629484,
            "instit_qty_pct": 0.6516954683640122,
            "ambiguous_qty_pct": 0.19310292398307283,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.19310292398307283,
            "retail_notional_pct": 0.050848567108497854,
            "mixed_notional_pct": 0.10411980910495044,
            "instit_notional_pct": 0.6527185313314464,
            "ambiguous_notional_pct": 0.19231309245510522,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.19231309245510522,
            "run_retail_pct": 0.481180496150556,
            "run_mixed_pct": 0.19674935842600513,
            "run_instit_pct": 0.1804961505560308,
            "run_ambiguous_pct": 0.14157399486740804,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.14157399486740804,
            "avg_feature_coverage": 0.8695893926432847,
            "high_confidence_pct": 0.6612489307100086,
            "medium_confidence_pct": 0.1971770744225834,
            "low_confidence_pct": 0.14157399486740804,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-05",
            "n_trades": 2806,
            "n_runs": 928,
            "retail_pct": 0.2626514611546686,
            "mixed_pct": 0.1322166785459729,
            "instit_pct": 0.3734853884533143,
            "ambiguous_pct": 0.2316464718460442,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2316464718460442,
            "avg_trade_size": 15597.294725588026,
            "avg_run_notional": 32930.419181034486,
            "retail_qty_pct": 0.07142514609066185,
            "mixed_qty_pct": 0.11146049557788876,
            "instit_qty_pct": 0.6071068910948065,
            "ambiguous_qty_pct": 0.2100074672366429,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2100074672366429,
            "retail_notional_pct": 0.07115633961506519,
            "mixed_notional_pct": 0.11042827779887356,
            "instit_notional_pct": 0.6096999842960321,
            "ambiguous_notional_pct": 0.20871539829002914,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20871539829002914,
            "run_retail_pct": 0.4827586206896552,
            "run_mixed_pct": 0.21443965517241378,
            "run_instit_pct": 0.1896551724137931,
            "run_ambiguous_pct": 0.11314655172413793,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.11314655172413793,
            "avg_feature_coverage": 0.8708512931034481,
            "high_confidence_pct": 0.6724137931034483,
            "medium_confidence_pct": 0.21443965517241378,
            "low_confidence_pct": 0.11314655172413793,
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
          "trade_id": "272",
          "timestamp": "2026-05-11T07:59:53.042220",
          "price": 2.85,
          "size": 1000.0,
          "notional": 2850.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 37790,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "271",
          "timestamp": "2026-05-11T07:57:49.025561",
          "price": 2.8,
          "size": 1000.0,
          "notional": 2800.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 37789,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "270",
          "timestamp": "2026-05-11T07:57:48.396029",
          "price": 2.83,
          "size": 5000.0,
          "notional": 14150.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 37788,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "269",
          "timestamp": "2026-05-11T07:57:48.396029",
          "price": 2.83,
          "size": 5000.0,
          "notional": 14150.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 37788,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "268",
          "timestamp": "2026-05-11T07:55:53.902630",
          "price": 2.83,
          "size": 1500.0,
          "notional": 4245.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "267",
          "timestamp": "2026-05-11T07:55:53.902279",
          "price": 2.83,
          "size": 1000.0,
          "notional": 2830.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "266",
          "timestamp": "2026-05-11T07:55:53.902279",
          "price": 2.83,
          "size": 6500.0,
          "notional": 18395.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "265",
          "timestamp": "2026-05-11T07:55:53.902279",
          "price": 2.83,
          "size": 1000.0,
          "notional": 2830.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 37787,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "264",
          "timestamp": "2026-05-11T07:55:44.541317",
          "price": 2.82,
          "size": 1000.0,
          "notional": 2820.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 37787,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "263",
          "timestamp": "2026-05-11T07:55:15.860011",
          "price": 2.8,
          "size": 1000.0,
          "notional": 2800.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 37786,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "262",
          "timestamp": "2026-05-11T07:55:14.900748",
          "price": 2.83,
          "size": 13500.0,
          "notional": 38205.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "261",
          "timestamp": "2026-05-11T07:55:14.900748",
          "price": 2.83,
          "size": 500.0,
          "notional": 1415.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 37785,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "260",
          "timestamp": "2026-05-11T07:55:14.014208",
          "price": 2.82,
          "size": 500.0,
          "notional": 1410.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 37784,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "259",
          "timestamp": "2026-05-11T07:54:50.532206",
          "price": 2.83,
          "size": 2500.0,
          "notional": 7075.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 37783,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "258",
          "timestamp": "2026-05-11T07:54:50.532206",
          "price": 2.83,
          "size": 33000.0,
          "notional": 93390.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 37783,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "257",
          "timestamp": "2026-05-11T07:54:50.532206",
          "price": 2.83,
          "size": 4000.0,
          "notional": 11320.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 37783,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "256",
          "timestamp": "2026-05-11T07:54:50.532206",
          "price": 2.83,
          "size": 6000.0,
          "notional": 16980.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 37783,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "255",
          "timestamp": "2026-05-11T07:54:50.532206",
          "price": 2.83,
          "size": 14500.0,
          "notional": 41035.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 37783,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "254",
          "timestamp": "2026-05-11T07:53:52.364785",
          "price": 2.81,
          "size": 1500.0,
          "notional": 4215.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "253",
          "timestamp": "2026-05-11T07:53:52.364785",
          "price": 2.81,
          "size": 7500.0,
          "notional": 21075.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "252",
          "timestamp": "2026-05-11T07:53:52.364785",
          "price": 2.81,
          "size": 4000.0,
          "notional": 11240.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 37782,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "251",
          "timestamp": "2026-05-11T07:52:37.691533",
          "price": 2.8,
          "size": 1500.0,
          "notional": 4200.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 37781,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "250",
          "timestamp": "2026-05-11T07:52:37.340222",
          "price": 2.8,
          "size": 5000.0,
          "notional": 14000.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 37781,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "249",
          "timestamp": "2026-05-11T07:50:37.349256",
          "price": 2.8,
          "size": 10000.0,
          "notional": 28000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 37780,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "248",
          "timestamp": "2026-05-11T07:50:37.349256",
          "price": 2.8,
          "size": 10000.0,
          "notional": 28000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 37780,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "247",
          "timestamp": "2026-05-11T07:50:20.578463",
          "price": 2.81,
          "size": 7500.0,
          "notional": 21075.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 37779,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "246",
          "timestamp": "2026-05-11T07:49:04.796246",
          "price": 2.81,
          "size": 3000.0,
          "notional": 8430.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "245",
          "timestamp": "2026-05-11T07:48:38.517270",
          "price": 2.81,
          "size": 2500.0,
          "notional": 7025.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "244",
          "timestamp": "2026-05-11T07:48:38.517270",
          "price": 2.81,
          "size": 14500.0,
          "notional": 40745.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 37778,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "243",
          "timestamp": "2026-05-11T07:48:32.610520",
          "price": 2.8,
          "size": 2500.0,
          "notional": 7000.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
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
      "total_trades": 51990,
      "price_moving_trades": 13267,
      "pct_price_moving": 25.518368917099444,
      "all_movers": {
        "count": 13267,
        "avg_size": 20213.7427896284,
        "median_size": 8660.0,
        "retail_count": 5003,
        "mixed_count": 2703,
        "institutional_count": 3781,
        "ambiguous_count": 1780,
        "unobservable_count": 0,
        "retail_pct": 37.71010778623653,
        "mixed_pct": 20.373859953267505,
        "instit_pct": 28.49928393758951,
        "unclear_pct": 13.41674832290646
      },
      "positive_movers": {
        "count": 6595,
        "avg_size": 20414.10581046247,
        "median_size": 8300.0,
        "retail_count": 2512,
        "mixed_count": 1373,
        "institutional_count": 1851,
        "ambiguous_count": 859,
        "unobservable_count": 0,
        "retail_pct": 38.08946171341926,
        "mixed_pct": 20.81880212282032,
        "instit_pct": 28.06671721000758,
        "unclear_pct": 13.025018953752843
      },
      "negative_movers": {
        "count": 6672,
        "avg_size": 20015.692111810553,
        "median_size": 8910.0,
        "retail_count": 2491,
        "mixed_count": 1330,
        "institutional_count": 1930,
        "ambiguous_count": 921,
        "unobservable_count": 0,
        "retail_pct": 37.33513189448441,
        "mixed_pct": 19.934052757793765,
        "instit_pct": 28.926858513189448,
        "unclear_pct": 13.803956834532375
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
          "opening": 0.0007355257722101201,
          "continuous": 0.9899968494979424,
          "closing": 0.009267624729847513,
          "auctions": 0.010003150502057632,
          "other": 0.0
        },
        "1M": {
          "opening": 0.002234220651117441,
          "continuous": 0.9934042716410225,
          "closing": 0.004361507707860091,
          "auctions": 0.006595728358977532,
          "other": 0.0
        },
        "3M": {
          "opening": 0.003419261553505435,
          "continuous": 0.9912081515534904,
          "closing": 0.005192661874345168,
          "auctions": 0.008611923427850603,
          "other": 0.00017992501865896684
        },
        "6M": {
          "opening": 0.002585516424943169,
          "continuous": 0.9926277108533226,
          "closing": 0.004661125126019436,
          "auctions": 0.007246641550962605,
          "other": 0.00012564759571486245
        }
      },
      "hhi": {
        "1D": 0.24411836684676916,
        "1M": 0.16315802150428946,
        "3M": 0.16310524645785995,
        "6M": 0.1715442259940329
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0025
        },
        {
          "time": "09:30",
          "avg_share": 0.1625
        },
        {
          "time": "10:00",
          "avg_share": 0.1568
        },
        {
          "time": "10:30",
          "avg_share": 0.1045
        },
        {
          "time": "11:00",
          "avg_share": 0.0625
        },
        {
          "time": "11:30",
          "avg_share": 0.0584
        },
        {
          "time": "12:00",
          "avg_share": 0.0021
        },
        {
          "time": "13:00",
          "avg_share": 0.0782
        },
        {
          "time": "13:30",
          "avg_share": 0.0717
        },
        {
          "time": "14:00",
          "avg_share": 0.0755
        },
        {
          "time": "14:30",
          "avg_share": 0.0561
        },
        {
          "time": "15:00",
          "avg_share": 0.0712
        },
        {
          "time": "15:30",
          "avg_share": 0.0951
        },
        {
          "time": "16:00",
          "avg_share": 0.003
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "9939",
          "auctions_pct": 0.9194800225533335,
          "hhi": 0.16464986768700418,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "719",
          "auctions_pct": 1.096662719295045,
          "hhi": 0.17091191707467762,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6660",
          "auctions_pct": 0.4973322537390901,
          "hhi": 0.21834204675072688,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2511",
          "auctions_pct": 0.7479757178868638,
          "hhi": 0.23409450472936355,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6996",
          "auctions_pct": 1.1508409515724305,
          "hhi": 0.15266952420845634,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1763",
          "auctions_pct": 0.6776354806964946,
          "hhi": 0.1970934349669572,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "3880",
          "auctions_pct": 0.9211926167189171,
          "hhi": 0.14228755435557508,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "9989",
          "auctions_pct": 2.1488942864701146,
          "hhi": 0.1635106186061097,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6896",
          "auctions_pct": 1.9264375319973277,
          "hhi": 0.21954678470803415,
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
