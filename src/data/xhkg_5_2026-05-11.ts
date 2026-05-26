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
      "ticker": "5",
      "name": "HSBC HOLDINGS",
      "marketCap": 2426318746836.0,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "939",
      "name": "CCB",
      "marketCap": 2125289107739.2,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "1398",
      "name": "ICBC",
      "marketCap": 605822430959.0,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "3988",
      "name": "BANK OF CHINA",
      "marketCap": 432327168962.15,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "3968",
      "name": "CM BANK",
      "marketCap": 217884169623.12,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "1288",
      "name": "ABC",
      "marketCap": 184432938576.0,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "998",
      "name": "CITIC BANK",
      "marketCap": 127242493453.35,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "3328",
      "name": "BANKCOMM",
      "marketCap": 254536241320.09998,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "2888",
      "name": "STANCHART",
      "marketCap": 449277124009.0,
      "sector": "Banks",
      "industry": "Financials - Banks"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "5",
    "company": "HSBC HOLDINGS",
    "asof_date": "2026-05-11",
    "industry": "Financials - Banks",
    "sector": "Banks",
    "market_cap_display": "2426.3B",
    "market_cap_category": "large",
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
          "score_pca": 89.92217898832685,
          "score_pca_percentile": 89.92217898832685,
          "rank_pca": 260,
          "total": 2570,
          "adv_notional_sgd": 1280769143.6,
          "adv_volume_shares": 9070603.0,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0005281208922193043,
          "votes": 7352.0,
          "trades": 7352.0,
          "spread_pct": 0.0007726730603297554,
          "spread_ticks": 1.0816749585406302,
          "amihud": 1.407319455516887e-11,
          "volatility": 0.2948421842512685
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
          "peer_median_adv": 669952202.4000001,
          "peer_median_score_pca": 92.33463035019454,
          "peer_median_trades": 7198.0,
          "peer_median_volatility": 0.25752013451843425,
          "peer_median_spread_pct": 0.0015640791921118329,
          "peer_median_spread_ticks": 1.1388325760223699,
          "peer_median_amihud": 1.8662492593562303e-11,
          "peer_median_turnover_ratio": 0.0033566224508002045,
          "target_vs_peer": {
            "score_pca_delta": -2.41,
            "adv_delta_pct": 91.2,
            "trades_delta_pct": 2.14,
            "volatility_delta_pct": -14.49,
            "spread_pct_delta_pct": 50.6,
            "spread_ticks_delta_pct": -5.02,
            "amihud_delta_pct": 24.59,
            "turnover_ratio_delta_pct": -84.27
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 89.92217898832685,
            "rank_pca": 260,
            "adv": 1280769143.6,
            "trades": 7352.0,
            "volatility": 0.2948421842512685,
            "spread_pct": 0.0007726730603297554,
            "spread_ticks": 1.0816749585406302,
            "amihud": 1.407319455516887e-11,
            "turnover_ratio": 0.0005281208922193043,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 94.28015564202335,
            "rank_pca": 148,
            "adv": 1606982688.48,
            "trades": 12966.0,
            "volatility": 0.3161808281925457,
            "spread_pct": 0.0011514896851660163,
            "spread_ticks": 1.0135384373896323,
            "amihud": 5.6829610902419935e-12,
            "turnover_ratio": 0.0020206945728064203,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 92.21789883268482,
            "rank_pca": 201,
            "adv": 1127043464.1000001,
            "trades": 7326.0,
            "volatility": 0.27635597470403234,
            "spread_pct": 0.0014738037449579479,
            "spread_ticks": 1.021550201370734,
            "amihud": 7.693155150975193e-12,
            "turnover_ratio": 0.002549008807054365,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 93.2295719844358,
            "rank_pca": 175,
            "adv": 1043612343.18,
            "trades": 9018.0,
            "volatility": 0.298532839607464,
            "spread_pct": 0.0019717771847924956,
            "spread_ticks": 1.0149556972741125,
            "amihud": 1.1251000480486264e-11,
            "turnover_ratio": 0.0035740676364454035,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 92.45136186770428,
            "rank_pca": 195,
            "adv": 795306204.0,
            "trades": 7070.0,
            "volatility": 0.19203305640707946,
            "spread_pct": 0.0004974660987076044,
            "spread_ticks": null,
            "amihud": 5.8556946444041465e-12,
            "turnover_ratio": 0.006483624815533196,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 89.10505836575877,
            "rank_pca": 281,
            "adv": 387398022.0,
            "trades": 5375.0,
            "volatility": 0.2243306692630786,
            "spread_pct": 0.0019075905793760192,
            "spread_ticks": 1.1388325760223699,
            "amihud": 2.607398470663834e-11,
            "turnover_ratio": 0.0035448495393010163,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 93.30739299610894,
            "rank_pca": 173,
            "adv": 544598200.8000001,
            "trades": 9381.0,
            "volatility": 0.29267227778538024,
            "spread_pct": 0.001760474615221315,
            "spread_ticks": 1.4974505281048927,
            "amihud": 4.623565791829545e-11,
            "turnover_ratio": 0.007006765947700092,
            "is_target": false
          },
          {
            "ticker": "3328",
            "score_pca": 86.10894941634241,
            "rank_pca": 358,
            "adv": 181714602.36999997,
            "trades": 3981.0,
            "volatility": 0.23868429433283622,
            "spread_pct": 0.001654354639265718,
            "spread_ticks": 1.1961860465116279,
            "amihud": 3.044611377213142e-11,
            "turnover_ratio": 0.003168395362299393,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 76.30350194552528,
            "rank_pca": 610,
            "adv": 121536100.0,
            "trades": 1589.0,
            "volatility": 0.23704884967859643,
            "spread_pct": 0.0013605796788716852,
            "spread_ticks": 2.1463730569948187,
            "amihud": 1.6538709496654e-10,
            "turnover_ratio": 0.0003294783228556402,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
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
              "mean": 0.2237841225817287,
              "median": 0.23704884967859643,
              "min": 0.0,
              "max": 0.5907667980140534,
              "p5": 0.0,
              "p95": 0.37804222993386194,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 206819685.83435866,
              "median": 15816211.450000001,
              "min": 0.0,
              "max": 1606982688.48,
              "p5": 880.0,
              "p95": 1157788599.9999995,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04601677311543381,
              "median": 0.0031831510318874275,
              "min": 0.0004974660987076044,
              "max": 1.2705087700185207,
              "p5": 0.0010757263601987642,
              "p95": 0.0551563029893714,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004665091714119408,
              "median": 0.0015735143533765325,
              "min": 0.0,
              "max": 0.06722361177071559,
              "p5": 8.129246896405958e-07,
              "p95": 0.01593930657550819,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.439623816631283e-07,
              "median": 1.5334774912584654e-10,
              "min": 0.0,
              "max": 2.4135156878519546e-05,
              "p5": 0.0,
              "p95": 6.440861558971775e-07,
              "count": 35
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2334.972972972973,
              "median": 935.0,
              "min": 0.0,
              "max": 12966.0,
              "p5": 0.8,
              "p95": 9090.599999999999,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 726023953.11625,
              "median": 669952202.4000001,
              "min": 121536100.0,
              "max": 1606982688.48,
              "p5": 142598575.8295,
              "p95": 1439003959.9469998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7088.25,
              "median": 7198.0,
              "min": 1589.0,
              "max": 12966.0,
              "p5": 2426.2,
              "p95": 11711.249999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.25947984874637664,
              "median": 0.25752013451843425,
              "min": 0.19203305640707946,
              "max": 0.3161808281925457,
              "p5": 0.20333722090667916,
              "p95": 0.3100040321877671,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0014721920282948502,
              "median": 0.0015640791921118329,
              "min": 0.0004974660987076044,
              "max": 0.0019717771847924956,
              "p5": 0.0007263743539680486,
              "p95": 0.0019493118728967289,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.289840934809741,
              "median": 1.1388325760223699,
              "min": 1.0135384373896323,
              "max": 2.1463730569948187,
              "p5": 1.0139636153549765,
              "p95": 1.9516962983278405,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.73282078412141e-11,
              "median": 1.8662492593562303e-11,
              "min": 5.6829610902419935e-12,
              "max": 1.6538709496654e-10,
              "p5": 5.743417834198747e-12,
              "p95": 1.2368409199965433e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035846106254994407,
              "median": 0.0033566224508002045,
              "min": 0.0003294783228556402,
              "max": 0.007006765947700092,
              "p5": 0.0009214040103384133,
              "p95": 0.006823666551441678,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.018024513338139814,
            "market": 0.0058650586380804,
            "sector": 0.0039215686274509665,
            "peers": 0.009616715096167017,
            "vs_market": 0.012159454700059413,
            "vs_sector": 0.014102944710688847,
            "vs_peers": 0.008407798241972797
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 95.99221789883269,
          "score_pca_percentile": 95.99221789883269,
          "rank_pca": 104,
          "total": 2570,
          "adv_notional_sgd": 1901465290.8,
          "adv_volume_shares": 13287668.0,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0007736525432403885,
          "votes": 8579.0,
          "trades": 8579.0,
          "spread_pct": 0.0007726730603297554,
          "spread_ticks": 1.090168429298864,
          "amihud": 4.2814872134032325e-12,
          "volatility": 0.295614792685392
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
          "peer_median_adv": 564469352.455,
          "peer_median_score_pca": 95.9727626459144,
          "peer_median_trades": 6584.5,
          "peer_median_volatility": 0.18931860810098788,
          "peer_median_spread_pct": 0.0014950554196818773,
          "peer_median_spread_ticks": 1.0867742888877236,
          "peer_median_amihud": 1.3589184117264669e-11,
          "peer_median_turnover_ratio": 0.0029435534020717607,
          "target_vs_peer": {
            "score_pca_delta": 0.02,
            "adv_delta_pct": 236.9,
            "trades_delta_pct": 30.29,
            "volatility_delta_pct": -56.15,
            "spread_pct_delta_pct": 48.32,
            "spread_ticks_delta_pct": 0.31,
            "amihud_delta_pct": 68.49,
            "turnover_ratio_delta_pct": -73.72
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 95.99221789883269,
            "rank_pca": 104,
            "adv": 1901465290.8,
            "trades": 8579.0,
            "volatility": 0.295614792685392,
            "spread_pct": 0.0007726730603297554,
            "spread_ticks": 1.090168429298864,
            "amihud": 4.2814872134032325e-12,
            "turnover_ratio": 0.0007736525432403885,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 98.44357976653697,
            "rank_pca": 41,
            "adv": 1988859731.95,
            "trades": 14292.0,
            "volatility": 0.19243593336666764,
            "spread_pct": 0.0011765711712479012,
            "spread_ticks": 1.0229899711031787,
            "amihud": 4.248426198148669e-12,
            "turnover_ratio": 0.002486818763742493,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 98.13229571984435,
            "rank_pca": 49,
            "adv": 1395667737.57,
            "trades": 12153.0,
            "volatility": 0.17938997797671785,
            "spread_pct": 0.0014771809277039805,
            "spread_ticks": 1.0403377110694183,
            "amihud": 5.4267588249817704e-12,
            "turnover_ratio": 0.0031520344647547444,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 96.84824902723736,
            "rank_pca": 82,
            "adv": 887094918.18,
            "trades": 8900.0,
            "volatility": 0.18620128283530815,
            "spread_pct": 0.001993961061888889,
            "spread_ticks": 1.017917058113005,
            "amihud": 8.54613587042566e-12,
            "turnover_ratio": 0.003061729574508888,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 96.34241245136187,
            "rank_pca": 95,
            "adv": 649468936.1600001,
            "trades": 6226.0,
            "volatility": 0.20839408228112008,
            "spread_pct": 0.0006746177868068434,
            "spread_ticks": 1.1180729500387014,
            "amihud": 1.3201087737785167e-11,
            "turnover_ratio": 0.00531936429955709,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 95.60311284046693,
            "rank_pca": 114,
            "adv": 479469768.75,
            "trades": 6943.0,
            "volatility": 0.18231104451705696,
            "spread_pct": 0.0018044832692289707,
            "spread_ticks": 1.0737402098418798,
            "amihud": 1.397728049674417e-11,
            "turnover_ratio": 0.0042118497479259566,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 92.91828793774319,
            "rank_pca": 183,
            "adv": 211125521.4,
            "trades": 4905.0,
            "volatility": 0.2019312366267523,
            "spread_pct": 0.001760474615221315,
            "spread_ticks": 1.4500770541000891,
            "amihud": 4.623565791829545e-11,
            "turnover_ratio": 0.0028253772296346334,
            "is_target": false
          },
          {
            "ticker": "3328",
            "score_pca": 89.92217898832685,
            "rank_pca": 260,
            "adv": 151905557.9,
            "trades": 2852.0,
            "volatility": 0.146074367334959,
            "spread_pct": 0.001512929911659774,
            "spread_ticks": 1.0998083679335675,
            "amihud": 3.4487998936034075e-11,
            "turnover_ratio": 0.002712059835465735,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 86.18677042801556,
            "rank_pca": 356,
            "adv": 166186800.0,
            "trades": 2976.0,
            "volatility": 0.33199149843619846,
            "spread_pct": 0.0011901922620281974,
            "spread_ticks": 2.1422438702220754,
            "amihud": 9.523523857308298e-11,
            "turnover_ratio": 0.0004674717911303216,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
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
              "mean": 0.2321300724238566,
              "median": 0.2019312366267523,
              "min": 0.08772313440616056,
              "max": 0.49110269539617124,
              "p5": 0.1478754878252817,
              "p95": 0.36838652062091876,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 223688152.45131582,
              "median": 8397905.0,
              "min": 0.0,
              "max": 1988859731.95,
              "p5": 0.0,
              "p95": 1496827248.2159977,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.013811107015932461,
              "median": 0.0034750474109586597,
              "min": 0.0006746177868068434,
              "max": 0.08010563380281696,
              "p5": 0.0010957915490642722,
              "p95": 0.05805351265157184,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002948588567138965,
              "median": 0.0009862218472185963,
              "min": 0.0,
              "max": 0.0409388402109865,
              "p5": 0.0,
              "p95": 0.00652138925200453,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.917588725951518e-08,
              "median": 8.990419970307342e-10,
              "min": 4.248426198148669e-12,
              "max": 5.569479253689788e-07,
              "p5": 5.197704502666063e-12,
              "p95": 4.408787418248396e-07,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2295.5135135135133,
              "median": 550.0,
              "min": 0.0,
              "max": 14292.0,
              "p5": 0.0,
              "p95": 9550.599999999986,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 741222371.4887501,
              "median": 564469352.455,
              "min": 151905557.9,
              "max": 1988859731.95,
              "p5": 156903992.635,
              "p95": 1781242533.9169998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7405.875,
              "median": 6584.5,
              "min": 2852.0,
              "max": 14292.0,
              "p5": 2895.4,
              "p95": 13543.349999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.20359117792184755,
              "median": 0.18931860810098788,
              "min": 0.146074367334959,
              "max": 0.33199149843619846,
              "p5": 0.1577348310595746,
              "p95": 0.28873240278192097,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0014488013757232338,
              "median": 0.0014950554196818773,
              "min": 0.0006746177868068434,
              "max": 0.001993961061888889,
              "p5": 0.0008503014713612137,
              "p95": 0.0019276438344579174,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2456483990527394,
              "median": 1.0867742888877236,
              "min": 1.017917058113005,
              "max": 2.1422438702220754,
              "p5": 1.0196925776595658,
              "p95": 1.8999854845793798,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.7669823069437245e-11,
              "median": 1.3589184117264669e-11,
              "min": 4.248426198148669e-12,
              "max": 9.523523857308298e-11,
              "p5": 4.660842617540254e-12,
              "p95": 7.808538534390732e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003029588213339983,
              "median": 0.0029435534020717607,
              "min": 0.0004674717911303216,
              "max": 0.00531936429955709,
              "p5": 0.0011742432315445816,
              "p95": 0.004931734206486193,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.016558675305975434,
            "market": 0.054164598055107094,
            "sector": 0.022728917225650402,
            "peers": 0.029095517795996173,
            "vs_market": -0.03760592274913166,
            "vs_sector": -0.006170241919674968,
            "vs_peers": -0.012536842490020739
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 97.08171206225681,
          "score_pca_percentile": 97.08171206225681,
          "rank_pca": 76,
          "total": 2570,
          "adv_notional_sgd": 2125987663.2000003,
          "adv_volume_shares": 15748453.0,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0009169276893094955,
          "votes": 10729.0,
          "trades": 10729.0,
          "spread_pct": 0.0008040270884819966,
          "spread_ticks": 1.0944872265004277,
          "amihud": 5.959088066914185e-12,
          "volatility": 0.3975107779765257
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6106318373428345,
          "loadings": {
            "log_adv": 0.5032598478561606,
            "log_trades": 0.45802270752308405,
            "log_turnover": 0.45570030422505237,
            "neg_spread": 0.461977236372836,
            "neg_amihud": 0.31667886738819884,
            "neg_vol": 0.12479377260607737
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
          "peer_median_adv": 569975583.27,
          "peer_median_score_pca": 96.84824902723736,
          "peer_median_trades": 7060.5,
          "peer_median_volatility": 0.19922520835688345,
          "peer_median_spread_pct": 0.0015688890361443256,
          "peer_median_spread_ticks": 1.0715656872697252,
          "peer_median_amihud": 1.455640599258058e-11,
          "peer_median_turnover_ratio": 0.0028933327056403996,
          "target_vs_peer": {
            "score_pca_delta": 0.23,
            "adv_delta_pct": 273.0,
            "trades_delta_pct": 51.96,
            "volatility_delta_pct": -99.53,
            "spread_pct_delta_pct": 48.75,
            "spread_ticks_delta_pct": 2.14,
            "amihud_delta_pct": 59.06,
            "turnover_ratio_delta_pct": -68.31
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 97.08171206225681,
            "rank_pca": 76,
            "adv": 2125987663.2000003,
            "trades": 10729.0,
            "volatility": 0.3975107779765257,
            "spread_pct": 0.0008040270884819966,
            "spread_ticks": 1.0944872265004277,
            "amihud": 5.959088066914185e-12,
            "turnover_ratio": 0.0009169276893094955,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 98.94941634241246,
            "rank_pca": 28,
            "adv": 1864728827.7,
            "trades": 14238.0,
            "volatility": 0.20493645707985148,
            "spread_pct": 0.0012534756164494993,
            "spread_ticks": 1.02150614206872,
            "amihud": 4.805848255114337e-12,
            "turnover_ratio": 0.0024589702958660053,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 98.56031128404669,
            "rank_pca": 38,
            "adv": 1320000393.1000001,
            "trades": 11432.0,
            "volatility": 0.190547078694723,
            "spread_pct": 0.0015781103810465406,
            "spread_ticks": 1.0329824879774976,
            "amihud": 6.102111759760619e-12,
            "turnover_ratio": 0.0030886672451031845,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 97.54863813229572,
            "rank_pca": 64,
            "adv": 887094918.18,
            "trades": 9318.0,
            "volatility": 0.1762614410293095,
            "spread_pct": 0.002149231597191721,
            "spread_ticks": 1.0177891387135478,
            "amihud": 7.112519749539374e-12,
            "turnover_ratio": 0.003255006131986287,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 97.47081712062257,
            "rank_pca": 66,
            "adv": 717220808.16,
            "trades": 7298.0,
            "volatility": 0.19351395963391546,
            "spread_pct": 0.0005724969246679898,
            "spread_ticks": 1.1180729500387014,
            "amihud": 1.0514897767060902e-11,
            "turnover_ratio": 0.005623289581177341,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 96.22568093385215,
            "rank_pca": 98,
            "adv": 422730358.38000005,
            "trades": 6823.0,
            "volatility": 0.21323596707147846,
            "spread_pct": 0.0019150972640098669,
            "spread_ticks": 1.0473058814737315,
            "amihud": 1.859791421810026e-11,
            "turnover_ratio": 0.004284640722510657,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 92.72373540856032,
            "rank_pca": 188,
            "adv": 176523872.88,
            "trades": 4511.0,
            "volatility": 0.2409913621097117,
            "spread_pct": 0.0017698794044622883,
            "spread_ticks": 1.3541357672561323,
            "amihud": 5.235114020376243e-11,
            "turnover_ratio": 0.002570746250111199,
            "is_target": false
          },
          {
            "ticker": "3328",
            "score_pca": 91.47859922178988,
            "rank_pca": 220,
            "adv": 151221025.6,
            "trades": 3417.0,
            "volatility": 0.17485913481974572,
            "spread_pct": 0.0015596676912421105,
            "spread_ticks": 1.095825493065719,
            "amihud": 4.776363507186718e-11,
            "turnover_ratio": 0.002697998166177615,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 87.15953307392996,
            "rank_pca": 331,
            "adv": 191691850.0,
            "trades": 3234.0,
            "volatility": 0.4527381755392616,
            "spread_pct": 0.001212255963656902,
            "spread_ticks": 2.131377312651841,
            "amihud": 9.121839250580533e-11,
            "turnover_ratio": 0.0006359256321627443,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
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
              "mean": 58948650.91658712,
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
              "mean": 7.183644711310012e-07,
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
              "mean": 0.2794906176128582,
              "median": 0.2616489669093099,
              "min": 0.11835353598896947,
              "max": 0.6479614458499264,
              "p5": 0.17141868575908392,
              "p95": 0.4836442757428289,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 225749296.18325225,
              "median": 9686070.0,
              "min": 0.0,
              "max": 2125987663.2000003,
              "p5": 0.0,
              "p95": 1428946080.0199978,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.014810011104524639,
              "median": 0.003550934664590002,
              "min": 0.0005724969246679898,
              "max": 0.07600487210718633,
              "p5": 0.001130610188621921,
              "p95": 0.06256489497282688,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028785817292572187,
              "median": 0.001189480198771551,
              "min": 0.0,
              "max": 0.03485097449762202,
              "p5": 0.0,
              "p95": 0.0069003411805785226,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.172616361922753e-08,
              "median": 9.795627575300167e-10,
              "min": 4.805848255114337e-12,
              "max": 5.941770647653006e-07,
              "p5": 6.0735070211913324e-12,
              "p95": 4.220992484536363e-07,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2413.054054054054,
              "median": 707.0,
              "min": 0.0,
              "max": 14238.0,
              "p5": 0.0,
              "p95": 10869.599999999997,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 716401506.75,
              "median": 569975583.27,
              "min": 151221025.6,
              "max": 1864728827.7,
              "p5": 160077022.148,
              "p95": 1674073875.5899997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7533.875,
              "median": 7060.5,
              "min": 3234.0,
              "max": 14238.0,
              "p5": 3298.05,
              "p95": 13255.899999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2308854469972496,
              "median": 0.19922520835688345,
              "min": 0.17485913481974572,
              "max": 0.4527381755392616,
              "p5": 0.17534994199309303,
              "p95": 0.37862679083891904,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.001501276855340865,
              "median": 0.0015688890361443256,
              "min": 0.0005724969246679898,
              "max": 0.002149231597191721,
              "p5": 0.000796412588314109,
              "p95": 0.002067284580578072,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2273743966557362,
              "median": 1.0715656872697252,
              "min": 1.0177891387135478,
              "max": 2.131377312651841,
              "p5": 1.019090089887858,
              "p95": 1.8593427717633424,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.980830744137631e-11,
              "median": 1.455640599258058e-11,
              "min": 4.805848255114337e-12,
              "max": 9.121839250580533e-11,
              "p5": 5.259540481740536e-12,
              "p95": 7.761485420009029e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003076905503136879,
              "median": 0.0028933327056403996,
              "min": 0.0006359256321627443,
              "max": 0.005623289581177341,
              "p5": 0.0012739912644588857,
              "p95": 0.0051547624806440005,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.04825538233110649,
            "market": 0.07414002315221047,
            "sector": 0.017563447531263154,
            "peers": 0.07213574133312783,
            "vs_market": -0.025884640821103977,
            "vs_sector": 0.030691934799843335,
            "vs_peers": -0.023880359002021345
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 96.22568093385215,
          "score_pca_percentile": 96.22568093385215,
          "rank_pca": 98,
          "total": 2570,
          "adv_notional_sgd": 1643316611.4,
          "adv_volume_shares": 13415436.0,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0007810916242096556,
          "votes": 8300.5,
          "trades": 8300.5,
          "spread_pct": 0.0008507270700114619,
          "spread_ticks": 1.0783672025974442,
          "amihud": 6.318778803234968e-12,
          "volatility": 0.31924431600273423
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6312580455260144,
          "loadings": {
            "log_adv": 0.4954732173358579,
            "log_trades": 0.44889904226967425,
            "log_turnover": 0.4493029050119597,
            "neg_spread": 0.45947945055440903,
            "neg_amihud": 0.35366160665816637,
            "neg_vol": 0.12216768310081018
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
          "peer_median_adv": 654230157.7925,
          "peer_median_score_pca": 97.08171206225681,
          "peer_median_trades": 7261.0,
          "peer_median_volatility": 0.21294936286366162,
          "peer_median_spread_pct": 0.0015807337775132148,
          "peer_median_spread_ticks": 1.062277843754449,
          "peer_median_amihud": 1.3200513119452323e-11,
          "peer_median_turnover_ratio": 0.00305694321726749,
          "target_vs_peer": {
            "score_pca_delta": -0.86,
            "adv_delta_pct": 151.2,
            "trades_delta_pct": 14.32,
            "volatility_delta_pct": -49.92,
            "spread_pct_delta_pct": 46.18,
            "spread_ticks_delta_pct": 1.51,
            "amihud_delta_pct": 52.13,
            "turnover_ratio_delta_pct": -74.45
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 96.22568093385215,
            "rank_pca": 98,
            "adv": 1643316611.4,
            "trades": 8300.5,
            "volatility": 0.31924431600273423,
            "spread_pct": 0.0008507270700114619,
            "spread_ticks": 1.0783672025974442,
            "amihud": 6.318778803234968e-12,
            "turnover_ratio": 0.0007810916242096556,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 98.8715953307393,
            "rank_pca": 30,
            "adv": 1806468617.33,
            "trades": 13776.0,
            "volatility": 0.22202958691671212,
            "spread_pct": 0.0012705498984327103,
            "spread_ticks": 1.0187227134029047,
            "amihud": 4.766860062189818e-12,
            "turnover_ratio": 0.0024892978930779893,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 98.24902723735408,
            "rank_pca": 46,
            "adv": 1249983979.3,
            "trades": 10875.0,
            "volatility": 0.2038691388106111,
            "spread_pct": 0.001599114223780633,
            "spread_ticks": 1.0269982673313358,
            "amihud": 6.102556716869196e-12,
            "turnover_ratio": 0.0031379938176075753,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 97.47081712062257,
            "rank_pca": 66,
            "adv": 892382751.49,
            "trades": 8907.5,
            "volatility": 0.18959311248712132,
            "spread_pct": 0.002190800614492607,
            "spread_ticks": 1.0146509863950368,
            "amihud": 7.490758611595447e-12,
            "turnover_ratio": 0.0033499491568630105,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 97.8988326848249,
            "rank_pca": 55,
            "adv": 792541284.48,
            "trades": 7265.5,
            "volatility": 0.2001529464402685,
            "spread_pct": 0.0006943420432823363,
            "spread_ticks": 1.1400946557694174,
            "amihud": 8.571866006797755e-12,
            "turnover_ratio": 0.0062875850636677786,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 96.69260700389106,
            "rank_pca": 86,
            "adv": 515919031.105,
            "trades": 7256.5,
            "volatility": 0.22384773445935593,
            "spread_pct": 0.0018731996234545242,
            "spread_ticks": 1.0456445950670763,
            "amihud": 1.782916023210689e-11,
            "turnover_ratio": 0.005064773890311761,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 92.21789883268482,
            "rank_pca": 201,
            "adv": 174016772.81,
            "trades": 4527.5,
            "volatility": 0.22398206014387337,
            "spread_pct": 0.0018844620349092707,
            "spread_ticks": 1.3825208711294938,
            "amihud": 4.8723354808853e-11,
            "turnover_ratio": 0.002567960624939702,
            "is_target": false
          },
          {
            "ticker": "3328",
            "score_pca": 91.71206225680933,
            "rank_pca": 214,
            "adv": 162289619.5,
            "trades": 3477.0,
            "volatility": 0.18091379695723803,
            "spread_pct": 0.0015623533312457965,
            "spread_ticks": 1.0789110924418215,
            "amihud": 4.003085241102796e-11,
            "turnover_ratio": 0.0029758926169274045,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 85.09727626459144,
            "rank_pca": 384,
            "adv": 151170805.0,
            "trades": 2663.5,
            "volatility": 0.35949556328668847,
            "spread_pct": 0.0011547131292440145,
            "spread_ticks": 1.985690957721943,
            "amihud": 8.578589228549353e-11,
            "turnover_ratio": 0.0004501228615695665,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
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
              "mean": 55571432.03684967,
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
              "mean": 6.271415846601767e-07,
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
              "mean": 0.26961734392583225,
              "median": 0.2576341235564419,
              "min": 0.11052431914132163,
              "max": 0.5204809406905576,
              "p5": 0.1784668038571852,
              "p95": 0.48565174086315466,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 213048021.42534214,
              "median": 10518045.95,
              "min": 0.0,
              "max": 1806468617.33,
              "p5": 2156.0,
              "p95": 1328650505.7199984,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.014415934023490453,
              "median": 0.003485473766621018,
              "min": 0.0006943420432823363,
              "max": 0.07058564131580446,
              "p5": 0.001093915917397504,
              "p95": 0.06532767793633103,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028877152977331098,
              "median": 0.00110716067265396,
              "min": 0.0,
              "max": 0.03545770435756882,
              "p5": 1.5782171268373148e-06,
              "p95": 0.0069961358959004065,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.545798364283288e-08,
              "median": 8.842190973278754e-10,
              "min": 4.766860062189818e-12,
              "max": 1.3033051819414093e-06,
              "p5": 6.275534385961813e-12,
              "p95": 4.009102793578308e-07,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2324.391891891892,
              "median": 666.5,
              "min": 0.0,
              "max": 13776.0,
              "p5": 0.8,
              "p95": 9300.99999999999,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 718096607.626875,
              "median": 654230157.7925,
              "min": 151170805.0,
              "max": 1806468617.33,
              "p5": 155062390.075,
              "p95": 1611698994.0194995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7343.5625,
              "median": 7261.0,
              "min": 2663.5,
              "max": 13776.0,
              "p5": 2948.225,
              "p95": 12760.649999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2254854924377336,
              "median": 0.21294936286366162,
              "min": 0.18091379695723803,
              "max": 0.35949556328668847,
              "p5": 0.18395155739269717,
              "p95": 0.3120658371867031,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0015286918623552367,
              "median": 0.0015807337775132148,
              "min": 0.0006943420432823363,
              "max": 0.002190800614492607,
              "p5": 0.0008554719233689236,
              "p95": 0.002083582111638439,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2116542674073787,
              "median": 1.062277843754449,
              "min": 1.0146509863950368,
              "max": 1.985690957721943,
              "p5": 1.0160760908477906,
              "p95": 1.7745814274145855,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.74126626418667e-11,
              "median": 1.3200513119452323e-11,
              "min": 4.766860062189818e-12,
              "max": 8.578589228549353e-11,
              "p5": 5.234353891327601e-12,
              "p95": 7.281400416866933e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0032904469906205984,
              "median": 0.00305694321726749,
              "min": 0.0004501228615695665,
              "max": 0.0062875850636677786,
              "p5": 0.0011638341225975145,
              "p95": 0.005859601152993172,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.3775609756097571,
            "market": 0.1632851008133398,
            "sector": -0.008351954217426738,
            "peers": 0.10201635424919342,
            "vs_market": 0.2142758747964173,
            "vs_sector": 0.38591292982718384,
            "vs_peers": 0.2755446213605637
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Tradability is a little softer today. Average volume is 32.6% below the monthly average and bid depth is lighter than ask depth, which can make immediate access feel thinner.",
        "market_comparison": "The stock still has a firm tape, with a 1M return of 1.7% compared with 2.9% for peers and 5.4% for the market. That matters because trading is happening against a stronger recent price backdrop than the main comparison groups."
      },
      "30d": {
        "liquidity": "Tradability looks average over the past month. A one-tick spread supports clean execution, but the current order book is less supportive because bid depth is only 0.58x ask depth.",
        "market_comparison": "Primary average daily volume is HK$1.6B compared with a peer median of HK$654.2M. That matters because the stock offers more natural turnover than many peers even though overall liquidity quality is not clearly ahead."
      },
      "3m": {
        "liquidity": "3M score 97.1 vs peer median 96.8 (+0.2 pts).",
        "market_comparison": "Recent returns remain firm at 1.7% over one month, compared with 2.9% for peers and 5.4% for the market. That matters because liquidity is being assessed in a constructive price environment."
      },
      "6m": {
        "liquidity": "Tradability is average over six months. The liquidity score of 96.2 is just below the peer median of 97.1, which suggests access is broadly in line with the group rather than clearly stronger or weaker.",
        "market_comparison": "Primary average daily volume of HK$1.6B is well above the peer median of HK$654.2M. That matters because the stock offers meaningful trading capacity even though its overall liquidity score is only around the middle of the peer set."
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
          "median": 0.30410520563950044,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "30.4%",
          "display_range": null,
          "display_text": "30.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 30.4,
          "plain_english": "Market explains about 30.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5544276000425353,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "55.4%",
          "display_range": null,
          "display_text": "55.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 55.4,
          "plain_english": "Sector explains about 55.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.14146719431796428,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "14.1%",
          "display_range": null,
          "display_text": "14.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 14.1,
          "plain_english": "Company-specific explains about 14.1% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 2.0000665175357484,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.00",
          "display_range": null,
          "display_text": "2.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 2.00% stock move in the same direction in this state.",
          "value_num": 2.0
        },
        "beta_stock_lag": {
          "median": 0.40146989451065374,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.40",
          "display_range": null,
          "display_text": "0.40",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.4
        },
        "beta_sector": {
          "median": 3.2193306972027202,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.22",
          "display_range": null,
          "display_text": "3.22",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.22% stock move in the same direction in this state.",
          "value_num": 3.22
        },
        "beta_market_lag": {
          "median": 1.1550230443579852,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.16",
          "display_range": null,
          "display_text": "1.16",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.16
        },
        "beta_sector_lag": {
          "median": -6.6577154751472705,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-6.66",
          "display_range": null,
          "display_text": "-6.66",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -6.66
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
            "median": 0.4580541394651524,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.8%",
            "display_range": null,
            "display_text": "45.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 45.8,
            "plain_english": "Sector explains about 45.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34793147925361084,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.8%",
              "display_range": null,
              "display_text": "34.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 34.8,
              "plain_english": "Market explains about 34.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4580541394651524,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.8%",
              "display_range": null,
              "display_text": "45.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 45.8,
              "plain_english": "Sector explains about 45.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.1940143812812366,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.4%",
              "display_range": null,
              "display_text": "19.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 19.4,
              "plain_english": "Company-specific explains about 19.4% of price moves in the current state."
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
            "median": 0.49897083135652526,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.9%",
            "display_range": null,
            "display_text": "49.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 49.9,
            "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22144416962053892,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.1%",
              "display_range": null,
              "display_text": "22.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.1,
              "plain_english": "Market explains about 22.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2795849990229359,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.0%",
              "display_range": null,
              "display_text": "28.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 28.0,
              "plain_english": "Sector explains about 28.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.49897083135652526,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4795216556500341,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.0%",
            "display_range": null,
            "display_text": "48.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 48.0,
            "plain_english": "Market explains about 48.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4795216556500341,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.0%",
              "display_range": null,
              "display_text": "48.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.0,
              "plain_english": "Market explains about 48.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16438385512435458,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.4%",
              "display_range": null,
              "display_text": "16.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.4,
              "plain_english": "Sector explains about 16.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.35609448922561143,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.6%",
              "display_range": null,
              "display_text": "35.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 35.6,
              "plain_english": "Company-specific explains about 35.6% of price moves in the current state."
            }
          },
          "summary": "Jun: Mostly market-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4031676321258524,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.3%",
            "display_range": null,
            "display_text": "40.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 40.3,
            "plain_english": "Market explains about 40.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4031676321258524,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.3%",
              "display_range": null,
              "display_text": "40.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 40.3,
              "plain_english": "Market explains about 40.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2116193629594962,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.2%",
              "display_range": null,
              "display_text": "21.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.2,
              "plain_english": "Sector explains about 21.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.38521300491465144,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.5%",
              "display_range": null,
              "display_text": "38.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.5,
              "plain_english": "Company-specific explains about 38.5% of price moves in the current state."
            }
          },
          "summary": "Jul: More mixed, though market-driven still has the largest share."
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
            "median": 0.3841333359546984,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.4%",
            "display_range": null,
            "display_text": "38.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 38.4,
            "plain_english": "Company-specific explains about 38.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23586434382952232,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.6%",
              "display_range": null,
              "display_text": "23.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 23.6,
              "plain_english": "Market explains about 23.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3800023202157792,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.0%",
              "display_range": null,
              "display_text": "38.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 38.0,
              "plain_english": "Sector explains about 38.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3841333359546984,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.4%",
              "display_range": null,
              "display_text": "38.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 38.4,
              "plain_english": "Company-specific explains about 38.4% of price moves in the current state."
            }
          },
          "summary": "Aug: More mixed, though company-driven still has the largest share."
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
            "median": 0.528673518388129,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.9%",
            "display_range": null,
            "display_text": "52.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 52.9,
            "plain_english": "Company-specific explains about 52.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.09128391344734582,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.1%",
              "display_range": null,
              "display_text": "9.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 9.1,
              "plain_english": "Market explains about 9.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3800425681645252,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.0%",
              "display_range": null,
              "display_text": "38.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.0,
              "plain_english": "Sector explains about 38.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.528673518388129,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.9%",
              "display_range": null,
              "display_text": "52.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.9,
              "plain_english": "Company-specific explains about 52.9% of price moves in the current state."
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
            "median": 0.46316083534165087,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.3%",
            "display_range": null,
            "display_text": "46.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 46.3,
            "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2668418325389407,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.7%",
              "display_range": null,
              "display_text": "26.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.7,
              "plain_english": "Market explains about 26.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2699973321194086,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.0%",
              "display_range": null,
              "display_text": "27.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.0,
              "plain_english": "Sector explains about 27.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.46316083534165087,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
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
            "median": 0.5692014146443202,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.9%",
            "display_range": null,
            "display_text": "56.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 56.9,
            "plain_english": "Market explains about 56.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5692014146443202,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.9%",
              "display_range": null,
              "display_text": "56.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.9,
              "plain_english": "Market explains about 56.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14972640362627154,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.0%",
              "display_range": null,
              "display_text": "15.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 15.0,
              "plain_english": "Sector explains about 15.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.28107218172940823,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.1%",
              "display_range": null,
              "display_text": "28.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 28.1,
              "plain_english": "Company-specific explains about 28.1% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly market-driven."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5019767885103921,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.2%",
            "display_range": null,
            "display_text": "50.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 50.2,
            "plain_english": "Market explains about 50.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5019767885103921,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.2%",
              "display_range": null,
              "display_text": "50.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 50.2,
              "plain_english": "Market explains about 50.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2816169847722451,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.2%",
              "display_range": null,
              "display_text": "28.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 28.2,
              "plain_english": "Sector explains about 28.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2164062267173628,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.6%",
              "display_range": null,
              "display_text": "21.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 21.6,
              "plain_english": "Company-specific explains about 21.6% of price moves in the current state."
            }
          },
          "summary": "Dec: Mostly market-driven."
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
            "median": 0.38616591810018597,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.6%",
            "display_range": null,
            "display_text": "38.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 38.6,
            "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.35112250785948984,
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
              "median": 0.2627115740403242,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.3%",
              "display_range": null,
              "display_text": "26.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 26.3,
              "plain_english": "Sector explains about 26.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.38616591810018597,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.6%",
              "display_range": null,
              "display_text": "38.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 38.6,
              "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
            }
          },
          "summary": "Jan: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3859492846459145,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.6%",
            "display_range": null,
            "display_text": "38.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 38.6,
            "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34914951311784903,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.9%",
              "display_range": null,
              "display_text": "34.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 34.9,
              "plain_english": "Market explains about 34.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2649012022362365,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.5%",
              "display_range": null,
              "display_text": "26.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 26.5,
              "plain_english": "Sector explains about 26.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3859492846459145,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.6%",
              "display_range": null,
              "display_text": "38.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 38.6,
              "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
            }
          },
          "summary": "Feb: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5173882524871721,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.7%",
            "display_range": null,
            "display_text": "51.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 51.7,
            "plain_english": "Market explains about 51.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5173882524871721,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.7%",
              "display_range": null,
              "display_text": "51.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.7,
              "plain_english": "Market explains about 51.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13942178396526053,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.9%",
              "display_range": null,
              "display_text": "13.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 13.9,
              "plain_english": "Sector explains about 13.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.34318996354756737,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.3%",
              "display_range": null,
              "display_text": "34.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 34.3,
              "plain_english": "Company-specific explains about 34.3% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5718478390456561,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.2%",
            "display_range": null,
            "display_text": "57.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 57.2,
            "plain_english": "Market explains about 57.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5718478390456561,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.2%",
              "display_range": null,
              "display_text": "57.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 57.2,
              "plain_english": "Market explains about 57.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11280551786737343,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.3%",
              "display_range": null,
              "display_text": "11.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 11.3,
              "plain_english": "Sector explains about 11.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3153466430869705,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.5%",
              "display_range": null,
              "display_text": "31.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 31.5,
              "plain_english": "Company-specific explains about 31.5% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven."
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
            "median": 0.6192949976780948,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.9%",
            "display_range": null,
            "display_text": "61.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 61.9,
            "plain_english": "Sector explains about 61.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3664322356211918,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.6%",
              "display_range": null,
              "display_text": "36.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 36.6,
              "plain_english": "Market explains about 36.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.6192949976780948,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.9%",
              "display_range": null,
              "display_text": "61.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 61.9,
              "plain_english": "Sector explains about 61.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.014272766700713417,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "1.4%",
              "display_range": null,
              "display_text": "1.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 1.4,
              "plain_english": "Company-specific explains about 1.4% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly sector-driven, though based on only 6 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 12.5,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.008775947753541388,
            "low": 0.008775947753541388,
            "high": 0.008775947753541388
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 12.4,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.020075277563527883,
            "low": 0.020075277563527883,
            "high": 0.020075277563527883
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.92,
            0.08
          ],
          [
            0.07317073170731707,
            0.926829268292683
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            115.0,
            10.0
          ],
          [
            9.0,
            114.0
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
        "market_link_display": "2.00",
        "sector_link_display": "3.22",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.22% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.40",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 55.4,
        "driver_share_display": "55.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.926829268292683,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 12.4 days.",
        "expected_duration_days": 12.4
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
          "expected_duration_days": 12.5,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.008775947753541388,
            "low": 0.008775947753541388,
            "high": 0.008775947753541388
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 12.4,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.020075277563527883,
            "low": 0.020075277563527883,
            "high": 0.020075277563527883
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.92,
          0.08
        ],
        [
          0.07317073170731707,
          0.926829268292683
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.92,
            0.08
          ],
          [
            0.07317073170731707,
            0.926829268292683
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            115.0,
            10.0
          ],
          [
            9.0,
            114.0
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
        "text": "Liquidity score: 96.2 — Strong",
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
    "liq_subtitle": "Structural liquidity is close to peers, while today’s book points to thinner immediate buy-side access.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The return backdrop is firm, with the stock up 1.7% over one month compared with peers at 2.9% and the market at 5.4%.",
    "perf_insight": "Performance is strong relative to the main comparison groups. With sector factors explaining 55.4% of the tape, the move is being supported by a constructive market backdrop as well as stock-specific trading.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main driver of trading, accounting for 55.4% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 55.4% of price changes. Other influences are market 30.4%, and company-specific 14.1%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 30.4%, sector 55.4%, and company-specific 14.1%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to sector-driven over Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 30.4%, sector 55.4%, and company-specific 14.1%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader sector conditions are setting much of the near-term tone, which can outweigh company-specific signals in day-to-day trading.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors account for 55.4% of recent price moves.",
      "Liquidity looks mixed for its size: the 6M score is 96.2 versus a 97.1 peer median, recent flow looks stable despite 1D average volume being 32.6% below 1M, and immediate buy-side depth is lighter, with displayed bid depth at 0.58x ask depth and the spread at 1 tick. Trading is now clearly sector-driven after being mostly market-driven in March and April, with sector at 55.4%. The 1M return is +1.7%, versus peers at +2.9% and the market at +5.4%."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look broadly steady, but the current book is less balanced on the bid side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 12, 2025 to May 11, 2026 (241 trading days • 2,255,192 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The immediate watchpoint is lighter buy-side",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 41.0% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The current picture is defined more by overall liquidity and book balance than by intraday timing.",
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
    "intraday_insight": "Near-term trading quality is being shaped by a lighter bid side rather than a wider spread. With displayed bid depth at 0.58x of ask depth and the spread still at 1 tick, access looks orderly but less supported for buyers.",
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
    "exec_subtitle": "Liquidity looks mixed for the company’s size, with peer-relative conditions broadly in line but a lighter bid side today.",
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
        "value": "96.2/100",
        "sub": "Peer median 97.1 (-0.9 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$1.6B",
        "sub": "Peer median HK$654.2M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.09%",
        "sub": "1.08 ticks; peers 0.16%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks serviceable rather than standout. The six-month liquidity score is 96.2, just 0.9 points below the peer median of 97.1, which places peer-relative access close to the middle of the pack. Near-term conditions are less supportive. One-day average volume is 32.6% below the one-month average and displayed bid depth is only 0.58x ask depth, so immediate buy-side access may feel thinner than the broader score implies.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "141.050",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.07%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.58x",
        "note": "Bid depth / ask depth on the displayed order book",
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
        "text": "Estimated impact ~-0.09% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.10% with 100.0% fill.",
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
        "value": "96",
        "suffix": "/100",
        "bar_pct": 96,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 98/2570",
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
        "value": "0.09",
        "suffix": "%",
        "bar_pct": 1,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.09% • 1.08 ticks vs peers 0.16%",
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
        "value": "1.6B",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$654.2M",
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
        "value": "55.4",
        "suffix": "sector",
        "bar_pct": 55,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 30.4% • Company 14.1%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is broadly in line with peers. The six-month liquidity score is 96.2 compared with a peer median of 97.1, which leaves access looking adequate rather than clearly advantaged.",
      "Recent flow looks stable rather than broken. One-day average volume is 32.6% below the one-month average, but the broader liquidity picture still sits close to peers.",
      "The main near-term watchpoint is book balance. Displayed bid depth is only 0.58x ask depth while the spread is 1 tick, which leaves trading orderly but less supported for buyers."
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
      "overall": "6M liquidity is strong: score 96.2 vs peer median 97.1 (-0.9 pts). 1D average volume down -32.6% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 96.2 vs peer median 97.1 (-0.9 pts)."
      ],
      "concerns": [
        "1D average volume down -32.6% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -0.9 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 37.8%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 37.8% vs market 16.3%.",
        "vs_sector": "Better than sector: 37.8% vs sector -0.8%.",
        "vs_peers": "Better than peers: 37.8% vs peers 10.2%."
      },
      "adv": {
        "insight": "ADV is HK$1.6B, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$1.6B vs market HK$213.0K.",
        "vs_sector": "Better than sector: HK$1.6B vs sector HK$10.5M.",
        "vs_peers": "Better than peers: HK$1.6B vs peers HK$654.2M."
      },
      "spread": {
        "insight": "Spread is 0.09%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.09% vs market 2.74%.",
        "vs_sector": "Better than sector: 0.09% vs sector 0.35%.",
        "vs_peers": "Better than peers: 0.09% vs peers 0.16%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.08%, worse than sector and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "In line with market: 0.08% vs market 0.09%.",
        "vs_sector": "Worse than sector: 0.08% vs sector 0.11%.",
        "vs_peers": "Worse than peers: 0.08% vs peers 0.31%."
      },
      "volatility": {
        "insight": "Volatility is 31.92%, better than market, but worse than sector and peers, which shows price variability is mixed across comparison groups.",
        "vs_market": "Better than market: 31.92% vs market 59.85%.",
        "vs_sector": "Worse than sector: 31.92% vs secto%.",
        "vs_peers": "Worse than peers: 31.92% vs peers 21.29%."
      },
      "trades": {
        "insight": "Trades is 8300, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 8300 vs market 20.",
        "vs_sector": "Better than sector: 8300 vs sector 666.",
        "vs_peers": "Better than peers: 8300 vs peers 7261."
      },
      "amihud": {
        "insight": "Price impact is 6.32e-12, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 6.32e-12 vs market 4.70e-08.",
        "vs_sector": "Better than sector: 6.32e-12 vs sector 8.84e-10.",
        "vs_peers": "Better than peers: 6.32e-12 vs peers 1.32e-11."
      }
    },
    "performance": {
      "overall": "Performance is strong relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent flow does not show a clear deterioration from the monthly baseline.",
      "conclusion": "The recent gain looks mixed in confirmation and is driven more by sector conditions than by company-specific trading."
    },
    "drivers": {
      "overall": "Sector factors are the main force in the stock right now, accounting for 55.4% of recent price moves. That matters because the tape is being shaped more by broader sector direction than by company-specific news, which can keep the stock moving with its group.",
      "beta": "The current read is mixed rather than fully settled because average volume is down 32.6% from the 1M average. That lower activity can make the sector-led pattern feel less stable from day to day even as the sector remains the clearest driver.",
      "rolling_change": "Mar: Mostly market-driven. | Apr: Mostly market-driven. | May: Still clearly sector-driven, though based on only 6 trading days."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop, which matters because conditions can feel less steady even when underlying liquidity is broadly in line with peers over time.",
      "current": "Current market state is High Volatility. The market has been in this state about 49.8% of the time. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This state looks fairly persistent, with a typical run length of about 12.4 days, so the current backdrop appears more settled than fleeting.",
      "trading_implications": "Trading conditions look mixed: the spread remains at 1 tick, but displayed bid depth is only 0.58x ask depth, which can make liquidity feel thinner on the buy side while volatility stays elevated."
    },
    "execution": {
      "overall": "Displayed liquidity looks bid-light because the spread is only 1 tick but bid depth is just 0.58x of ask depth. That matters because the top of book appears orderly while buy-side support is still thinner than the sell side.",
      "concern": "Trade-size percentiles use May 12, 2025 to May 11, 2026 history (241 trading days • 2,255,192 trades).",
      "peer_context": "This book does not contradict the broader picture, but it does lean weaker at the margin because the 6M liquidity score of 96.2 sits just below the 97.1 peer median and the current depth is skewed to the ask side. That matters because a broadly middle-of-pack liquidity profile can still feel less supportive when the displayed book is uneven."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and value, so the trading base does not read as clearly retail-led or institution-led.",
      "retail_heavy": "Retail-like trades make up 47.4% of individual trade count but only 5.9% of trade value, while institution-like trades are 16.0% of count and 78.1% of value. That split matters because activity is broad in participation but most value still comes from larger tickets.",
      "institutional_gap": "",
      "peer_comparison": "The mix looks unusual only in that value is concentrated with institution-like trades while count is much more evenly distributed, leaving the peer read centered on a mixed profile."
    },
    "price_moving": {
      "overall": "Price-moving activity sits alongside a mixed flow profile rather than a clean one-way signal. The clearest read is mixed participation: nearly half of individual trades are retail-like by count, but more than three quarters of value is institution-like. That matters because price formation is likely being shaped by larger-value trades even as day-to-day activity stays broad. The signal is mixed rather than one-sided, because trade count and trade value point to different parts of the market driving activity.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main issue in the tape, as the clearer near-term signal is average volume running 32.6% below the 1M average while bid depth is only 0.58x of ask depth. That matters because day-to-day access looks more affected by thinner buying interest than by any clear short-driven pressure.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short backdrop looks stable rather than rising as the stock still shows a positive 1M return of 1.7% and sector moves explain 55.4% of trading. That matters because the broader picture still points to normal market-led trading conditions rather than a new short-led source of stress.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 1.6%, continuous 88.1%, and close 7.9%. Current trading concentration score is 0.118.",
      "hhi_interpretation": "Activity is reasonably well distributed through the day, with a concentration score of 0.118 indicating no single interval dominates the session.",
      "best_times": "The continuous session is the clearest source of liquidity because it carries the large majority of trading activity.",
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
        "5",
        "939",
        "1398",
        "3988",
        "3968",
        "1288",
        "998",
        "3328",
        "2888"
      ],
      "scores": [
        96.22568093385215,
        98.8715953307393,
        98.24902723735408,
        97.47081712062257,
        97.8988326848249,
        96.69260700389106,
        92.21789883268482,
        91.71206225680933,
        85.09727626459144
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
        1643316611.4,
        1806468617.33,
        1249983979.3,
        892382751.49,
        792541284.48,
        515919031.105,
        174016772.81,
        162289619.5,
        151170805.0
      ],
      "total": 2570
    },
    "market_comparison": {
      "sector_name": "Banks",
      "sector_count": 37,
      "market_count": 2570,
      "company": {
        "volatility": 0.31924431600273423,
        "adv": 1643316611.4,
        "spread_pct": 0.0008507270700114619,
        "turnover_ratio": 0.0007810916242096556,
        "amihud": 6.318778803234968e-12,
        "trades": 8300.5
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
          "mean": 55571432.03684967,
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
          "mean": 6.271415846601767e-07,
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
          "mean": 0.26961734392583225,
          "median": 0.2576341235564419,
          "min": 0.11052431914132163,
          "max": 0.5204809406905576,
          "p5": 0.1784668038571852,
          "p95": 0.48565174086315466,
          "count": 37
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 213048021.42534214,
          "median": 10518045.95,
          "min": 0.0,
          "max": 1806468617.33,
          "p5": 2156.0,
          "p95": 1328650505.7199984,
          "count": 37
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.014415934023490453,
          "median": 0.003485473766621018,
          "min": 0.0006943420432823363,
          "max": 0.07058564131580446,
          "p5": 0.001093915917397504,
          "p95": 0.06532767793633103,
          "count": 37
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0028877152977331098,
          "median": 0.00110716067265396,
          "min": 0.0,
          "max": 0.03545770435756882,
          "p5": 1.5782171268373148e-06,
          "p95": 0.0069961358959004065,
          "count": 37
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 8.545798364283288e-08,
          "median": 8.842190973278754e-10,
          "min": 4.766860062189818e-12,
          "max": 1.3033051819414093e-06,
          "p5": 6.275534385961813e-12,
          "p95": 4.009102793578308e-07,
          "count": 37
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2324.391891891892,
          "median": 666.5,
          "min": 0.0,
          "max": 13776.0,
          "p5": 0.8,
          "p95": 9300.99999999999,
          "count": 37
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 718096607.626875,
          "median": 654230157.7925,
          "min": 151170805.0,
          "max": 1806468617.33,
          "p5": 155062390.075,
          "p95": 1611698994.0194995,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 7343.5625,
          "median": 7261.0,
          "min": 2663.5,
          "max": 13776.0,
          "p5": 2948.225,
          "p95": 12760.649999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.2254854924377336,
          "median": 0.21294936286366162,
          "min": 0.18091379695723803,
          "max": 0.35949556328668847,
          "p5": 0.18395155739269717,
          "p95": 0.3120658371867031,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0015286918623552367,
          "median": 0.0015807337775132148,
          "min": 0.0006943420432823363,
          "max": 0.002190800614492607,
          "p5": 0.0008554719233689236,
          "p95": 0.002083582111638439,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.2116542674073787,
          "median": 1.062277843754449,
          "min": 1.0146509863950368,
          "max": 1.985690957721943,
          "p5": 1.0160760908477906,
          "p95": 1.7745814274145855,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.74126626418667e-11,
          "median": 1.3200513119452323e-11,
          "min": 4.766860062189818e-12,
          "max": 8.578589228549353e-11,
          "p5": 5.234353891327601e-12,
          "p95": 7.281400416866933e-11,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0032904469906205984,
          "median": 0.00305694321726749,
          "min": 0.0004501228615695665,
          "max": 0.0062875850636677786,
          "p5": 0.0011638341225975145,
          "p95": 0.005859601152993172,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.016558675305975434,
        "market": 0.054164598055107094,
        "sector": 0.022728917225650402,
        "peers": 0.029095517795996173
      },
      {
        "horizon": "3M",
        "stock": 0.04825538233110649,
        "market": 0.07414002315221047,
        "sector": 0.017563447531263154,
        "peers": 0.07213574133312783
      },
      {
        "horizon": "6M",
        "stock": 0.3775609756097571,
        "market": 0.1632851008133398,
        "sector": -0.008351954217426738,
        "peers": 0.10201635424919342
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
      "share_market": 0.30410520563950044,
      "share_sector": 0.5544276000425353,
      "share_idio": 0.14146719431796428,
      "beta_market": 2.0000665175357484,
      "beta_sector": 3.2193306972027202,
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
            "median": 0.30410520563950044,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "30.4%",
            "display_range": null,
            "display_text": "30.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 30.4,
            "plain_english": "Market explains about 30.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5544276000425353,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.4%",
            "display_range": null,
            "display_text": "55.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 55.4,
            "plain_english": "Sector explains about 55.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.14146719431796428,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "14.1%",
            "display_range": null,
            "display_text": "14.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 14.1,
            "plain_english": "Company-specific explains about 14.1% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 2.0000665175357484,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.00",
            "display_range": null,
            "display_text": "2.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 2.00% stock move in the same direction in this state.",
            "value_num": 2.0
          },
          "beta_stock_lag": {
            "median": 0.40146989451065374,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.40",
            "display_range": null,
            "display_text": "0.40",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.4
          },
          "beta_sector": {
            "median": 3.2193306972027202,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.22",
            "display_range": null,
            "display_text": "3.22",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.22% stock move in the same direction in this state.",
            "value_num": 3.22
          },
          "beta_market_lag": {
            "median": 1.1550230443579852,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.16",
            "display_range": null,
            "display_text": "1.16",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.16
          },
          "beta_sector_lag": {
            "median": -6.6577154751472705,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-6.66",
            "display_range": null,
            "display_text": "-6.66",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -6.66
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
              "median": 0.4580541394651524,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.8%",
              "display_range": null,
              "display_text": "45.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 45.8,
              "plain_english": "Sector explains about 45.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34793147925361084,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.8%",
                "display_range": null,
                "display_text": "34.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 34.8,
                "plain_english": "Market explains about 34.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4580541394651524,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.8%",
                "display_range": null,
                "display_text": "45.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 45.8,
                "plain_english": "Sector explains about 45.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.1940143812812366,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.4%",
                "display_range": null,
                "display_text": "19.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 19.4,
                "plain_english": "Company-specific explains about 19.4% of price moves in the current state."
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
              "median": 0.49897083135652526,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22144416962053892,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.1%",
                "display_range": null,
                "display_text": "22.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.1,
                "plain_english": "Market explains about 22.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2795849990229359,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.0%",
                "display_range": null,
                "display_text": "28.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 28.0,
                "plain_english": "Sector explains about 28.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.49897083135652526,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.9%",
                "display_range": null,
                "display_text": "49.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 49.9,
                "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4795216556500341,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.0%",
              "display_range": null,
              "display_text": "48.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.0,
              "plain_english": "Market explains about 48.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4795216556500341,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.0%",
                "display_range": null,
                "display_text": "48.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 48.0,
                "plain_english": "Market explains about 48.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16438385512435458,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.4%",
                "display_range": null,
                "display_text": "16.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.4,
                "plain_english": "Sector explains about 16.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.35609448922561143,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.6%",
                "display_range": null,
                "display_text": "35.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 35.6,
                "plain_english": "Company-specific explains about 35.6% of price moves in the current state."
              }
            },
            "summary": "Jun: Mostly market-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-02 to 2025-07-31",
            "n_obs": 22,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4031676321258524,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.3%",
              "display_range": null,
              "display_text": "40.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 40.3,
              "plain_english": "Market explains about 40.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4031676321258524,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.3%",
                "display_range": null,
                "display_text": "40.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 40.3,
                "plain_english": "Market explains about 40.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2116193629594962,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.2%",
                "display_range": null,
                "display_text": "21.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.2,
                "plain_english": "Sector explains about 21.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.38521300491465144,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.5%",
                "display_range": null,
                "display_text": "38.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.5,
                "plain_english": "Company-specific explains about 38.5% of price moves in the current state."
              }
            },
            "summary": "Jul: More mixed, though market-driven still has the largest share."
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
              "median": 0.3841333359546984,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.4%",
              "display_range": null,
              "display_text": "38.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 38.4,
              "plain_english": "Company-specific explains about 38.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23586434382952232,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.6%",
                "display_range": null,
                "display_text": "23.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 23.6,
                "plain_english": "Market explains about 23.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3800023202157792,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.0%",
                "display_range": null,
                "display_text": "38.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 38.0,
                "plain_english": "Sector explains about 38.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3841333359546984,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.4%",
                "display_range": null,
                "display_text": "38.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 38.4,
                "plain_english": "Company-specific explains about 38.4% of price moves in the current state."
              }
            },
            "summary": "Aug: More mixed, though company-driven still has the largest share."
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
              "median": 0.528673518388129,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.9%",
              "display_range": null,
              "display_text": "52.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.9,
              "plain_english": "Company-specific explains about 52.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.09128391344734582,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.1%",
                "display_range": null,
                "display_text": "9.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 9.1,
                "plain_english": "Market explains about 9.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3800425681645252,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.0%",
                "display_range": null,
                "display_text": "38.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.0,
                "plain_english": "Sector explains about 38.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.528673518388129,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.9%",
                "display_range": null,
                "display_text": "52.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 52.9,
                "plain_english": "Company-specific explains about 52.9% of price moves in the current state."
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
              "median": 0.46316083534165087,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2668418325389407,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.7%",
                "display_range": null,
                "display_text": "26.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.7,
                "plain_english": "Market explains about 26.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2699973321194086,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.0%",
                "display_range": null,
                "display_text": "27.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.0,
                "plain_english": "Sector explains about 27.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.46316083534165087,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.3%",
                "display_range": null,
                "display_text": "46.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 46.3,
                "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
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
              "median": 0.5692014146443202,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.9%",
              "display_range": null,
              "display_text": "56.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.9,
              "plain_english": "Market explains about 56.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5692014146443202,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.9%",
                "display_range": null,
                "display_text": "56.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 56.9,
                "plain_english": "Market explains about 56.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14972640362627154,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.0%",
                "display_range": null,
                "display_text": "15.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 15.0,
                "plain_english": "Sector explains about 15.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.28107218172940823,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.1%",
                "display_range": null,
                "display_text": "28.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 28.1,
                "plain_english": "Company-specific explains about 28.1% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly market-driven."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 15,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5019767885103921,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.2%",
              "display_range": null,
              "display_text": "50.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 50.2,
              "plain_english": "Market explains about 50.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5019767885103921,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.2%",
                "display_range": null,
                "display_text": "50.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 50.2,
                "plain_english": "Market explains about 50.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2816169847722451,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.2%",
                "display_range": null,
                "display_text": "28.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 28.2,
                "plain_english": "Sector explains about 28.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2164062267173628,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.6%",
                "display_range": null,
                "display_text": "21.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 21.6,
                "plain_english": "Company-specific explains about 21.6% of price moves in the current state."
              }
            },
            "summary": "Dec: Mostly market-driven."
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
              "median": 0.38616591810018597,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.6%",
              "display_range": null,
              "display_text": "38.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 38.6,
              "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.35112250785948984,
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
                "median": 0.2627115740403242,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.3%",
                "display_range": null,
                "display_text": "26.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 26.3,
                "plain_english": "Sector explains about 26.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.38616591810018597,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.6%",
                "display_range": null,
                "display_text": "38.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 38.6,
                "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
              }
            },
            "summary": "Jan: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-02",
            "month_label": "February 2026",
            "month_short_label": "Feb",
            "period_label": "2026-02-02 to 2026-02-27",
            "n_obs": 17,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3859492846459145,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.6%",
              "display_range": null,
              "display_text": "38.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 38.6,
              "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34914951311784903,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.9%",
                "display_range": null,
                "display_text": "34.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 34.9,
                "plain_english": "Market explains about 34.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2649012022362365,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.5%",
                "display_range": null,
                "display_text": "26.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 26.5,
                "plain_english": "Sector explains about 26.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3859492846459145,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.6%",
                "display_range": null,
                "display_text": "38.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 38.6,
                "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
              }
            },
            "summary": "Feb: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5173882524871721,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.7%",
              "display_range": null,
              "display_text": "51.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.7,
              "plain_english": "Market explains about 51.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5173882524871721,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.7%",
                "display_range": null,
                "display_text": "51.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 51.7,
                "plain_english": "Market explains about 51.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13942178396526053,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.9%",
                "display_range": null,
                "display_text": "13.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 13.9,
                "plain_english": "Sector explains about 13.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.34318996354756737,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.3%",
                "display_range": null,
                "display_text": "34.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 34.3,
                "plain_english": "Company-specific explains about 34.3% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5718478390456561,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.2%",
              "display_range": null,
              "display_text": "57.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 57.2,
              "plain_english": "Market explains about 57.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5718478390456561,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.2%",
                "display_range": null,
                "display_text": "57.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 57.2,
                "plain_english": "Market explains about 57.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11280551786737343,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.3%",
                "display_range": null,
                "display_text": "11.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 11.3,
                "plain_english": "Sector explains about 11.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3153466430869705,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.5%",
                "display_range": null,
                "display_text": "31.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 31.5,
                "plain_english": "Company-specific explains about 31.5% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven."
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
              "median": 0.6192949976780948,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.9%",
              "display_range": null,
              "display_text": "61.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 61.9,
              "plain_english": "Sector explains about 61.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3664322356211918,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.6%",
                "display_range": null,
                "display_text": "36.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 36.6,
                "plain_english": "Market explains about 36.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.6192949976780948,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.9%",
                "display_range": null,
                "display_text": "61.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 61.9,
                "plain_english": "Sector explains about 61.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.014272766700713417,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "1.4%",
                "display_range": null,
                "display_text": "1.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 1.4,
                "plain_english": "Company-specific explains about 1.4% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly sector-driven, though based on only 6 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 12.5,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.008775947753541388,
              "low": 0.008775947753541388,
              "high": 0.008775947753541388
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 12.4,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.020075277563527883,
              "low": 0.020075277563527883,
              "high": 0.020075277563527883
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.92,
              0.08
            ],
            [
              0.07317073170731707,
              0.926829268292683
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              115.0,
              10.0
            ],
            [
              9.0,
              114.0
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
          "market_link_display": "2.00",
          "sector_link_display": "3.22",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.22% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.40",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 55.4,
          "driver_share_display": "55.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.926829268292683,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 12.4 days.",
          "expected_duration_days": 12.4
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
          "share_market": 0.34793147925361084,
          "share_sector": 0.4580541394651524,
          "share_company": 0.1940143812812366,
          "share_market_display": "34.8%",
          "share_sector_display": "45.8%",
          "share_company_display": "19.4%",
          "dominant_share_display": "45.8%"
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
          "share_market": 0.22144416962053892,
          "share_sector": 0.2795849990229359,
          "share_company": 0.49897083135652526,
          "share_market_display": "22.1%",
          "share_sector_display": "28.0%",
          "share_company_display": "49.9%",
          "dominant_share_display": "49.9%"
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jun: Mostly market-driven.",
          "share_market": 0.4795216556500341,
          "share_sector": 0.16438385512435458,
          "share_company": 0.35609448922561143,
          "share_market_display": "48.0%",
          "share_sector_display": "16.4%",
          "share_company_display": "35.6%",
          "dominant_share_display": "48.0%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jul: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4031676321258524,
          "share_sector": 0.2116193629594962,
          "share_company": 0.38521300491465144,
          "share_market_display": "40.3%",
          "share_sector_display": "21.2%",
          "share_company_display": "38.5%",
          "dominant_share_display": "40.3%"
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
          "summary": "Aug: More mixed, though company-driven still has the largest share.",
          "share_market": 0.23586434382952232,
          "share_sector": 0.3800023202157792,
          "share_company": 0.3841333359546984,
          "share_market_display": "23.6%",
          "share_sector_display": "38.0%",
          "share_company_display": "38.4%",
          "dominant_share_display": "38.4%"
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
          "share_market": 0.09128391344734582,
          "share_sector": 0.3800425681645252,
          "share_company": 0.528673518388129,
          "share_market_display": "9.1%",
          "share_sector_display": "38.0%",
          "share_company_display": "52.9%",
          "dominant_share_display": "52.9%"
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
          "summary": "Oct: Mostly company-driven.",
          "share_market": 0.2668418325389407,
          "share_sector": 0.2699973321194086,
          "share_company": 0.46316083534165087,
          "share_market_display": "26.7%",
          "share_sector_display": "27.0%",
          "share_company_display": "46.3%",
          "dominant_share_display": "46.3%"
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
          "summary": "Nov: Mostly market-driven.",
          "share_market": 0.5692014146443202,
          "share_sector": 0.14972640362627154,
          "share_company": 0.28107218172940823,
          "share_market_display": "56.9%",
          "share_sector_display": "15.0%",
          "share_company_display": "28.1%",
          "dominant_share_display": "56.9%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Dec: Mostly market-driven.",
          "share_market": 0.5019767885103921,
          "share_sector": 0.2816169847722451,
          "share_company": 0.2164062267173628,
          "share_market_display": "50.2%",
          "share_sector_display": "28.2%",
          "share_company_display": "21.6%",
          "dominant_share_display": "50.2%"
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
          "summary": "Jan: More mixed, though company-driven still has the largest share.",
          "share_market": 0.35112250785948984,
          "share_sector": 0.2627115740403242,
          "share_company": 0.38616591810018597,
          "share_market_display": "35.1%",
          "share_sector_display": "26.3%",
          "share_company_display": "38.6%",
          "dominant_share_display": "38.6%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Feb: More mixed, though company-driven still has the largest share.",
          "share_market": 0.34914951311784903,
          "share_sector": 0.2649012022362365,
          "share_company": 0.3859492846459145,
          "share_market_display": "34.9%",
          "share_sector_display": "26.5%",
          "share_company_display": "38.6%",
          "dominant_share_display": "38.6%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven.",
          "share_market": 0.5173882524871721,
          "share_sector": 0.13942178396526053,
          "share_company": 0.34318996354756737,
          "share_market_display": "51.7%",
          "share_sector_display": "13.9%",
          "share_company_display": "34.3%",
          "dominant_share_display": "51.7%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven.",
          "share_market": 0.5718478390456561,
          "share_sector": 0.11280551786737343,
          "share_company": 0.3153466430869705,
          "share_market_display": "57.2%",
          "share_sector_display": "11.3%",
          "share_company_display": "31.5%",
          "dominant_share_display": "57.2%"
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
          "summary": "May: Still clearly sector-driven, though based on only 6 trading days.",
          "share_market": 0.3664322356211918,
          "share_sector": 0.6192949976780948,
          "share_company": 0.014272766700713417,
          "share_market_display": "36.6%",
          "share_sector_display": "61.9%",
          "share_company_display": "1.4%",
          "dominant_share_display": "61.9%"
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
            "expected_duration_days": 12.5,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.008775947753541388,
              "low": 0.008775947753541388,
              "high": 0.008775947753541388
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 12.4,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.020075277563527883,
              "low": 0.020075277563527883,
              "high": 0.020075277563527883
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.92,
            0.08
          ],
          [
            0.07317073170731707,
            0.926829268292683
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 141.0,
          "quantity": 1200.0,
          "value": 169200.0
        },
        {
          "level": 2,
          "price": 140.9,
          "quantity": 97200.0,
          "value": 13695480.0
        },
        {
          "level": 3,
          "price": 140.8,
          "quantity": 120000.0,
          "value": 16896000.0
        },
        {
          "level": 4,
          "price": 140.7,
          "quantity": 115200.0,
          "value": 16208639.999999998
        },
        {
          "level": 5,
          "price": 140.6,
          "quantity": 40000.0,
          "value": 5624000.0
        },
        {
          "level": 6,
          "price": 140.5,
          "quantity": 44400.0,
          "value": 6238200.0
        },
        {
          "level": 7,
          "price": 140.4,
          "quantity": 23600.0,
          "value": 3313440.0
        },
        {
          "level": 8,
          "price": 140.3,
          "quantity": 56000.0,
          "value": 7856800.000000001
        },
        {
          "level": 9,
          "price": 140.2,
          "quantity": 5200.0,
          "value": 729039.9999999999
        },
        {
          "level": 10,
          "price": 140.1,
          "quantity": 26000.0,
          "value": 3642600.0
        },
        {
          "level": 11,
          "price": 140.0,
          "quantity": 52000.0,
          "value": 7280000.0
        },
        {
          "level": 12,
          "price": 139.9,
          "quantity": 48000.0,
          "value": 6715200.0
        },
        {
          "level": 13,
          "price": 139.8,
          "quantity": 46400.0,
          "value": 6486720.000000001
        },
        {
          "level": 14,
          "price": 139.7,
          "quantity": 6000.0,
          "value": 838199.9999999999
        },
        {
          "level": 15,
          "price": 139.6,
          "quantity": 61200.0,
          "value": 8543520.0
        },
        {
          "level": 16,
          "price": 139.5,
          "quantity": 76000.0,
          "value": 10602000.0
        },
        {
          "level": 17,
          "price": 139.4,
          "quantity": 10800.0,
          "value": 1505520.0
        },
        {
          "level": 18,
          "price": 139.3,
          "quantity": 4400.0,
          "value": 612920.0
        },
        {
          "level": 19,
          "price": 139.2,
          "quantity": 13200.0,
          "value": 1837439.9999999998
        },
        {
          "level": 20,
          "price": 139.1,
          "quantity": 33200.0,
          "value": 4618120.0
        },
        {
          "level": 21,
          "price": 139.0,
          "quantity": 112400.0,
          "value": 15623600.0
        },
        {
          "level": 22,
          "price": 138.9,
          "quantity": 15200.0,
          "value": 2111280.0
        },
        {
          "level": 23,
          "price": 138.8,
          "quantity": 32800.0,
          "value": 4552640.0
        },
        {
          "level": 24,
          "price": 138.7,
          "quantity": 10400.0,
          "value": 1442479.9999999998
        },
        {
          "level": 25,
          "price": 138.6,
          "quantity": 20800.0,
          "value": 2882880.0
        },
        {
          "level": 26,
          "price": 138.5,
          "quantity": 138800.0,
          "value": 19223800.0
        },
        {
          "level": 27,
          "price": 138.4,
          "quantity": 4400.0,
          "value": 608960.0
        },
        {
          "level": 28,
          "price": 138.3,
          "quantity": 32000.0,
          "value": 4425600.0
        },
        {
          "level": 29,
          "price": 138.2,
          "quantity": 19600.0,
          "value": 2708720.0
        },
        {
          "level": 30,
          "price": 138.1,
          "quantity": 12800.0,
          "value": 1767680.0
        },
        {
          "level": 31,
          "price": 138.0,
          "quantity": 166800.0,
          "value": 23018400.0
        },
        {
          "level": 32,
          "price": 137.9,
          "quantity": 6400.0,
          "value": 882560.0
        },
        {
          "level": 33,
          "price": 137.8,
          "quantity": 15200.0,
          "value": 2094560.0000000002
        },
        {
          "level": 34,
          "price": 137.7,
          "quantity": 1200.0,
          "value": 165240.0
        },
        {
          "level": 35,
          "price": 137.6,
          "quantity": 2000.0,
          "value": 275200.0
        },
        {
          "level": 36,
          "price": 137.5,
          "quantity": 16400.0,
          "value": 2255000.0
        },
        {
          "level": 37,
          "price": 137.4,
          "quantity": 1600.0,
          "value": 219840.0
        },
        {
          "level": 38,
          "price": 137.3,
          "quantity": 4800.0,
          "value": 659040.0
        },
        {
          "level": 39,
          "price": 137.2,
          "quantity": 1200.0,
          "value": 164640.0
        },
        {
          "level": 40,
          "price": 137.1,
          "quantity": 12800.0,
          "value": 1754880.0
        },
        {
          "level": 41,
          "price": 137.0,
          "quantity": 50400.0,
          "value": 6904800.0
        },
        {
          "level": 42,
          "price": 136.9,
          "quantity": 2800.0,
          "value": 383320.0
        },
        {
          "level": 43,
          "price": 136.8,
          "quantity": 17200.0,
          "value": 2352960.0
        },
        {
          "level": 44,
          "price": 136.7,
          "quantity": 1200.0,
          "value": 164040.0
        },
        {
          "level": 45,
          "price": 136.6,
          "quantity": 26800.0,
          "value": 3660880.0
        },
        {
          "level": 46,
          "price": 136.5,
          "quantity": 26800.0,
          "value": 3658200.0
        },
        {
          "level": 47,
          "price": 136.4,
          "quantity": 2000.0,
          "value": 272800.0
        },
        {
          "level": 48,
          "price": 136.3,
          "quantity": 17600.0,
          "value": 2398880.0
        },
        {
          "level": 49,
          "price": 136.2,
          "quantity": 24400.0,
          "value": 3323279.9999999995
        },
        {
          "level": 50,
          "price": 136.1,
          "quantity": 23600.0,
          "value": 3211960.0
        },
        {
          "level": 51,
          "price": 136.0,
          "quantity": 195200.0,
          "value": 26547200.0
        },
        {
          "level": 52,
          "price": 135.9,
          "quantity": 25200.0,
          "value": 3424680.0
        },
        {
          "level": 53,
          "price": 135.8,
          "quantity": 1600.0,
          "value": 217280.00000000003
        },
        {
          "level": 54,
          "price": 135.7,
          "quantity": 1200.0,
          "value": 162840.0
        },
        {
          "level": 55,
          "price": 135.6,
          "quantity": 5200.0,
          "value": 705120.0
        },
        {
          "level": 56,
          "price": 135.5,
          "quantity": 6800.0,
          "value": 921400.0
        },
        {
          "level": 57,
          "price": 135.4,
          "quantity": 400.0,
          "value": 54160.0
        },
        {
          "level": 58,
          "price": 135.3,
          "quantity": 2800.0,
          "value": 378840.00000000006
        },
        {
          "level": 59,
          "price": 135.2,
          "quantity": 2400.0,
          "value": 324480.0
        },
        {
          "level": 60,
          "price": 135.1,
          "quantity": 8400.0,
          "value": 1134840.0
        },
        {
          "level": 61,
          "price": 135.0,
          "quantity": 112400.0,
          "value": 15174000.0
        },
        {
          "level": 62,
          "price": 134.8,
          "quantity": 2800.0,
          "value": 377440.00000000006
        },
        {
          "level": 63,
          "price": 134.6,
          "quantity": 1600.0,
          "value": 215360.0
        },
        {
          "level": 64,
          "price": 134.5,
          "quantity": 9600.0,
          "value": 1291200.0
        },
        {
          "level": 65,
          "price": 134.4,
          "quantity": 2400.0,
          "value": 322560.0
        },
        {
          "level": 66,
          "price": 134.3,
          "quantity": 1600.0,
          "value": 214880.00000000003
        },
        {
          "level": 67,
          "price": 134.2,
          "quantity": 1200.0,
          "value": 161040.0
        },
        {
          "level": 68,
          "price": 134.0,
          "quantity": 16800.0,
          "value": 2251200.0
        },
        {
          "level": 69,
          "price": 133.8,
          "quantity": 8400.0,
          "value": 1123920.0
        },
        {
          "level": 70,
          "price": 133.5,
          "quantity": 11200.0,
          "value": 1495200.0
        },
        {
          "level": 71,
          "price": 133.4,
          "quantity": 400.0,
          "value": 53360.0
        },
        {
          "level": 72,
          "price": 133.3,
          "quantity": 400.0,
          "value": 53320.00000000001
        },
        {
          "level": 73,
          "price": 133.2,
          "quantity": 4400.0,
          "value": 586080.0
        },
        {
          "level": 74,
          "price": 133.1,
          "quantity": 800.0,
          "value": 106480.0
        },
        {
          "level": 75,
          "price": 133.0,
          "quantity": 31200.0,
          "value": 4149600.0
        },
        {
          "level": 76,
          "price": 132.8,
          "quantity": 1600.0,
          "value": 212480.00000000003
        },
        {
          "level": 77,
          "price": 132.6,
          "quantity": 400.0,
          "value": 53040.0
        },
        {
          "level": 78,
          "price": 132.5,
          "quantity": 1600.0,
          "value": 212000.0
        },
        {
          "level": 79,
          "price": 132.2,
          "quantity": 1600.0,
          "value": 211519.99999999997
        },
        {
          "level": 80,
          "price": 132.1,
          "quantity": 400.0,
          "value": 52840.0
        },
        {
          "level": 81,
          "price": 132.0,
          "quantity": 22000.0,
          "value": 2904000.0
        },
        {
          "level": 82,
          "price": 131.8,
          "quantity": 1600.0,
          "value": 210880.00000000003
        },
        {
          "level": 83,
          "price": 131.7,
          "quantity": 400.0,
          "value": 52679.99999999999
        },
        {
          "level": 84,
          "price": 131.6,
          "quantity": 2000.0,
          "value": 263200.0
        },
        {
          "level": 85,
          "price": 131.5,
          "quantity": 3200.0,
          "value": 420800.0
        },
        {
          "level": 86,
          "price": 131.4,
          "quantity": 400.0,
          "value": 52560.0
        },
        {
          "level": 87,
          "price": 131.3,
          "quantity": 400.0,
          "value": 52520.00000000001
        },
        {
          "level": 88,
          "price": 131.2,
          "quantity": 1600.0,
          "value": 209919.99999999997
        },
        {
          "level": 89,
          "price": 131.0,
          "quantity": 800.0,
          "value": 104800.0
        },
        {
          "level": 90,
          "price": 130.8,
          "quantity": 800.0,
          "value": 104640.00000000001
        },
        {
          "level": 91,
          "price": 130.5,
          "quantity": 800.0,
          "value": 104400.0
        },
        {
          "level": 92,
          "price": 130.3,
          "quantity": 400.0,
          "value": 52120.00000000001
        },
        {
          "level": 93,
          "price": 130.2,
          "quantity": 400.0,
          "value": 52079.99999999999
        },
        {
          "level": 94,
          "price": 130.1,
          "quantity": 800.0,
          "value": 104080.0
        },
        {
          "level": 95,
          "price": 130.0,
          "quantity": 28000.0,
          "value": 3640000.0
        },
        {
          "level": 96,
          "price": 129.9,
          "quantity": 800.0,
          "value": 103920.0
        },
        {
          "level": 97,
          "price": 129.3,
          "quantity": 400.0,
          "value": 51720.00000000001
        },
        {
          "level": 98,
          "price": 129.2,
          "quantity": 400.0,
          "value": 51679.99999999999
        },
        {
          "level": 99,
          "price": 129.0,
          "quantity": 2000.0,
          "value": 258000.0
        },
        {
          "level": 100,
          "price": 128.8,
          "quantity": 800.0,
          "value": 103040.00000000001
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 141.1,
          "quantity": 80800.0,
          "value": 11400880.0
        },
        {
          "level": 2,
          "price": 141.2,
          "quantity": 93600.0,
          "value": 13216319.999999998
        },
        {
          "level": 3,
          "price": 141.3,
          "quantity": 43600.0,
          "value": 6160680.000000001
        },
        {
          "level": 4,
          "price": 141.4,
          "quantity": 111600.0,
          "value": 15780240.0
        },
        {
          "level": 5,
          "price": 141.5,
          "quantity": 137600.0,
          "value": 19470400.0
        },
        {
          "level": 6,
          "price": 141.6,
          "quantity": 24000.0,
          "value": 3398400.0
        },
        {
          "level": 7,
          "price": 141.7,
          "quantity": 38400.0,
          "value": 5441280.0
        },
        {
          "level": 8,
          "price": 141.8,
          "quantity": 69200.0,
          "value": 9812560.0
        },
        {
          "level": 9,
          "price": 141.9,
          "quantity": 8000.0,
          "value": 1135200.0
        },
        {
          "level": 10,
          "price": 142.0,
          "quantity": 151600.0,
          "value": 21527200.0
        },
        {
          "level": 11,
          "price": 142.1,
          "quantity": 12400.0,
          "value": 1762040.0
        },
        {
          "level": 12,
          "price": 142.2,
          "quantity": 49200.0,
          "value": 6996239.999999999
        },
        {
          "level": 13,
          "price": 142.3,
          "quantity": 3600.0,
          "value": 512280.00000000006
        },
        {
          "level": 14,
          "price": 142.4,
          "quantity": 62000.0,
          "value": 8828800.0
        },
        {
          "level": 15,
          "price": 142.5,
          "quantity": 28400.0,
          "value": 4047000.0
        },
        {
          "level": 16,
          "price": 142.6,
          "quantity": 33600.0,
          "value": 4791360.0
        },
        {
          "level": 17,
          "price": 142.7,
          "quantity": 4000.0,
          "value": 570800.0
        },
        {
          "level": 18,
          "price": 142.8,
          "quantity": 43600.0,
          "value": 6226080.000000001
        },
        {
          "level": 19,
          "price": 142.9,
          "quantity": 7200.0,
          "value": 1028880.0
        },
        {
          "level": 20,
          "price": 143.0,
          "quantity": 110400.0,
          "value": 15787200.0
        },
        {
          "level": 21,
          "price": 143.1,
          "quantity": 8400.0,
          "value": 1202040.0
        },
        {
          "level": 22,
          "price": 143.2,
          "quantity": 8000.0,
          "value": 1145600.0
        },
        {
          "level": 23,
          "price": 143.3,
          "quantity": 9200.0,
          "value": 1318360.0
        },
        {
          "level": 24,
          "price": 143.4,
          "quantity": 1200.0,
          "value": 172080.0
        },
        {
          "level": 25,
          "price": 143.5,
          "quantity": 22400.0,
          "value": 3214400.0
        },
        {
          "level": 26,
          "price": 143.6,
          "quantity": 7200.0,
          "value": 1033920.0
        },
        {
          "level": 27,
          "price": 143.7,
          "quantity": 2000.0,
          "value": 287400.0
        },
        {
          "level": 28,
          "price": 143.8,
          "quantity": 33200.0,
          "value": 4774160.0
        },
        {
          "level": 29,
          "price": 143.9,
          "quantity": 10000.0,
          "value": 1439000.0
        },
        {
          "level": 30,
          "price": 144.0,
          "quantity": 120000.0,
          "value": 17280000.0
        },
        {
          "level": 31,
          "price": 144.1,
          "quantity": 2400.0,
          "value": 345840.0
        },
        {
          "level": 32,
          "price": 144.2,
          "quantity": 19200.0,
          "value": 2768640.0
        },
        {
          "level": 33,
          "price": 144.3,
          "quantity": 36000.0,
          "value": 5194800.0
        },
        {
          "level": 34,
          "price": 144.4,
          "quantity": 6400.0,
          "value": 924160.0
        },
        {
          "level": 35,
          "price": 144.5,
          "quantity": 130800.0,
          "value": 18900600.0
        },
        {
          "level": 36,
          "price": 144.6,
          "quantity": 6800.0,
          "value": 983280.0
        },
        {
          "level": 37,
          "price": 144.7,
          "quantity": 8000.0,
          "value": 1157600.0
        },
        {
          "level": 38,
          "price": 144.8,
          "quantity": 62400.0,
          "value": 9035520.0
        },
        {
          "level": 39,
          "price": 144.9,
          "quantity": 6800.0,
          "value": 985320.0
        },
        {
          "level": 40,
          "price": 145.0,
          "quantity": 761200.0,
          "value": 110374000.0
        },
        {
          "level": 41,
          "price": 145.2,
          "quantity": 4400.0,
          "value": 638880.0
        },
        {
          "level": 42,
          "price": 145.3,
          "quantity": 6000.0,
          "value": 871800.0000000001
        },
        {
          "level": 43,
          "price": 145.4,
          "quantity": 800.0,
          "value": 116320.0
        },
        {
          "level": 44,
          "price": 145.5,
          "quantity": 4800.0,
          "value": 698400.0
        },
        {
          "level": 45,
          "price": 145.6,
          "quantity": 800.0,
          "value": 116480.0
        },
        {
          "level": 46,
          "price": 145.7,
          "quantity": 400.0,
          "value": 58279.99999999999
        },
        {
          "level": 47,
          "price": 145.8,
          "quantity": 12800.0,
          "value": 1866240.0000000002
        },
        {
          "level": 48,
          "price": 145.9,
          "quantity": 400.0,
          "value": 58360.0
        },
        {
          "level": 49,
          "price": 146.0,
          "quantity": 71600.0,
          "value": 10453600.0
        },
        {
          "level": 50,
          "price": 146.1,
          "quantity": 400.0,
          "value": 58440.0
        },
        {
          "level": 51,
          "price": 146.2,
          "quantity": 2000.0,
          "value": 292400.0
        },
        {
          "level": 52,
          "price": 146.3,
          "quantity": 1200.0,
          "value": 175560.0
        },
        {
          "level": 53,
          "price": 146.4,
          "quantity": 400.0,
          "value": 58560.0
        },
        {
          "level": 54,
          "price": 146.5,
          "quantity": 126400.0,
          "value": 18517600.0
        },
        {
          "level": 55,
          "price": 146.6,
          "quantity": 4800.0,
          "value": 703680.0
        },
        {
          "level": 56,
          "price": 146.8,
          "quantity": 8000.0,
          "value": 1174400.0
        },
        {
          "level": 57,
          "price": 146.9,
          "quantity": 1200.0,
          "value": 176280.0
        },
        {
          "level": 58,
          "price": 147.0,
          "quantity": 102800.0,
          "value": 15111600.0
        },
        {
          "level": 59,
          "price": 147.2,
          "quantity": 1200.0,
          "value": 176640.0
        },
        {
          "level": 60,
          "price": 147.3,
          "quantity": 2800.0,
          "value": 412440.00000000006
        },
        {
          "level": 61,
          "price": 147.4,
          "quantity": 400.0,
          "value": 58960.0
        },
        {
          "level": 62,
          "price": 147.5,
          "quantity": 2000.0,
          "value": 295000.0
        },
        {
          "level": 63,
          "price": 147.7,
          "quantity": 1200.0,
          "value": 177240.0
        },
        {
          "level": 64,
          "price": 147.8,
          "quantity": 22000.0,
          "value": 3251600.0000000005
        },
        {
          "level": 65,
          "price": 147.9,
          "quantity": 1600.0,
          "value": 236640.0
        },
        {
          "level": 66,
          "price": 148.0,
          "quantity": 118400.0,
          "value": 17523200.0
        },
        {
          "level": 67,
          "price": 148.1,
          "quantity": 400.0,
          "value": 59240.0
        },
        {
          "level": 68,
          "price": 148.3,
          "quantity": 1200.0,
          "value": 177960.0
        },
        {
          "level": 69,
          "price": 148.5,
          "quantity": 400.0,
          "value": 59400.0
        },
        {
          "level": 70,
          "price": 148.6,
          "quantity": 4000.0,
          "value": 594400.0
        },
        {
          "level": 71,
          "price": 148.8,
          "quantity": 16800.0,
          "value": 2499840.0
        },
        {
          "level": 72,
          "price": 149.0,
          "quantity": 4400.0,
          "value": 655600.0
        },
        {
          "level": 73,
          "price": 149.1,
          "quantity": 2800.0,
          "value": 417480.0
        },
        {
          "level": 74,
          "price": 149.4,
          "quantity": 400.0,
          "value": 59760.0
        },
        {
          "level": 75,
          "price": 149.5,
          "quantity": 7600.0,
          "value": 1136200.0
        },
        {
          "level": 76,
          "price": 149.8,
          "quantity": 3600.0,
          "value": 539280.0
        },
        {
          "level": 77,
          "price": 149.9,
          "quantity": 400.0,
          "value": 59960.0
        },
        {
          "level": 78,
          "price": 150.0,
          "quantity": 602800.0,
          "value": 90420000.0
        },
        {
          "level": 79,
          "price": 150.5,
          "quantity": 400.0,
          "value": 60200.0
        },
        {
          "level": 80,
          "price": 151.0,
          "quantity": 2400.0,
          "value": 362400.0
        },
        {
          "level": 81,
          "price": 151.9,
          "quantity": 400.0,
          "value": 60760.0
        },
        {
          "level": 82,
          "price": 152.0,
          "quantity": 26000.0,
          "value": 3952000.0
        },
        {
          "level": 83,
          "price": 152.3,
          "quantity": 400.0,
          "value": 60920.00000000001
        },
        {
          "level": 84,
          "price": 152.5,
          "quantity": 1200.0,
          "value": 183000.0
        },
        {
          "level": 85,
          "price": 152.8,
          "quantity": 50000.0,
          "value": 7640000.000000001
        },
        {
          "level": 86,
          "price": 153.0,
          "quantity": 2400.0,
          "value": 367200.0
        },
        {
          "level": 87,
          "price": 153.1,
          "quantity": 400.0,
          "value": 61240.0
        },
        {
          "level": 88,
          "price": 153.3,
          "quantity": 400.0,
          "value": 61320.00000000001
        },
        {
          "level": 89,
          "price": 153.7,
          "quantity": 400.0,
          "value": 61479.99999999999
        },
        {
          "level": 90,
          "price": 153.8,
          "quantity": 400.0,
          "value": 61520.00000000001
        },
        {
          "level": 91,
          "price": 154.0,
          "quantity": 3200.0,
          "value": 492800.0
        },
        {
          "level": 92,
          "price": 154.5,
          "quantity": 2800.0,
          "value": 432600.0
        },
        {
          "level": 93,
          "price": 154.7,
          "quantity": 400.0,
          "value": 61879.99999999999
        },
        {
          "level": 94,
          "price": 154.8,
          "quantity": 2000.0,
          "value": 309600.0
        },
        {
          "level": 95,
          "price": 154.9,
          "quantity": 400.0,
          "value": 61960.0
        },
        {
          "level": 96,
          "price": 155.0,
          "quantity": 47200.0,
          "value": 7316000.0
        },
        {
          "level": 97,
          "price": 155.3,
          "quantity": 1200.0,
          "value": 186360.0
        },
        {
          "level": 98,
          "price": 155.8,
          "quantity": 1200.0,
          "value": 186960.0
        },
        {
          "level": 99,
          "price": 156.0,
          "quantity": 1600.0,
          "value": 249600.0
        },
        {
          "level": 100,
          "price": 156.1,
          "quantity": 400.0,
          "value": 62440.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-11 07:59:59.459000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 141.05,
        "spread_pct": 0.0007089684509038944,
        "spread_ticks": 1.0,
        "tick_size": 0.1,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 307666560.0,
        "ask_depth_notional_displayed": 532680520.0,
        "bid_depth_notional_top10": 307666560.0,
        "ask_depth_notional_top10": 532680520.0,
        "bid_ask_depth_ratio": 0.5776
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 241,
        "n_trades_used": 2255192,
        "first_trade_date": "2025-05-12",
        "last_trade_date": "2026-05-11",
        "window_label": "May 12, 2025 to May 11, 2026",
        "window_short_label": "May 12, 2025 to May 11, 2026",
        "trade_days_label": "241 trading days",
        "trade_count_label": "2,255,192 trades",
        "window_detail_label": "241 trading days • 2,255,192 trades",
        "history_note": "Trade-size percentiles use May 12, 2025 to May 11, 2026 history (241 trading days • 2,255,192 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 399080.0,
            "impact_pct": -0.0007630000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 0.13,
            "pct_of_adv": 0.02
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 721440.0,
            "impact_pct": -0.000897,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 0.23,
            "pct_of_adv": 0.04
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 19178289.9,
            "impact_pct": -0.0012540000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 6.23,
            "pct_of_adv": 1.02
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
            "order_id": "156674",
            "timestamp": "2026-05-11 01:20:06.487000000",
            "local_timestamp": "2026-05-11 09:20:06",
            "posted_price": 150.0,
            "size_shares": 344000.0,
            "notional": 51600000.0,
            "impact_pct": -0.00193,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 16.77,
            "price_vs_mid_pct": 6.345,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "36294658",
            "timestamp": "2026-05-11 01:30:17.002000000",
            "local_timestamp": "2026-05-11 09:30:17",
            "posted_price": 145.0,
            "size_shares": 130000.0,
            "notional": 18850000.0,
            "impact_pct": -0.001245,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 6.13,
            "price_vs_mid_pct": 2.8,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "2267650",
            "timestamp": "2026-05-11 01:20:06.487000000",
            "local_timestamp": "2026-05-11 09:20:06",
            "posted_price": 150.0,
            "size_shares": 117200.0,
            "notional": 17580000.0,
            "impact_pct": -0.001207,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 5.71,
            "price_vs_mid_pct": 6.345,
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
        "tick_size": 0.1,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0007181328545782603,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 237747040.0,
            "ask_depth_notional": 460584800.0,
            "mid_price": 139.25
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0007171029042667216,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 251593840.0,
            "ask_depth_notional": 486571560.0,
            "mid_price": 139.45
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0007165890361877055,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 271524000.0,
            "ask_depth_notional": 485025920.0,
            "mid_price": 139.55
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0007160759040457883,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 267861520.0,
            "ask_depth_notional": 500939600.0,
            "mid_price": 139.64999999999998
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0007155635062613434,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 251084440.0,
            "ask_depth_notional": 490842760.0,
            "mid_price": 139.75
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0007140307033202021,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 267180720.0,
            "ask_depth_notional": 510548640.0,
            "mid_price": 140.05
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0007130124777185221,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 270859120.0,
            "ask_depth_notional": 506166160.0,
            "mid_price": 140.25
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0007114905727498706,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 282076320.0,
            "ask_depth_notional": 524732080.0,
            "mid_price": 140.55
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0007109847138286123,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 285268400.0,
            "ask_depth_notional": 518759680.0,
            "mid_price": 140.64999999999998
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0007104795737124173,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 266578280.0,
            "ask_depth_notional": 552207760.0,
            "mid_price": 140.75
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0007089684509038944,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 307666560.0,
            "ask_depth_notional": 532680520.0,
            "mid_price": 141.05
          }
        ],
        "summary": {
          "median_spread_pct": 0.0007140307033202021,
          "median_spread_ticks": 0.9999999999999432,
          "median_bid_depth_notional": 267861520.0,
          "median_ask_depth_notional": 506166160.0,
          "tightest_bucket": "15:30",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "15:30",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "939",
          "pct": 0.0
        },
        {
          "ticker": "1398",
          "pct": 0.1
        },
        {
          "ticker": "3988",
          "pct": 0.1
        },
        {
          "ticker": "3968",
          "pct": 0.1
        },
        {
          "ticker": "1288",
          "pct": 0.2
        },
        {
          "ticker": "998",
          "pct": 0.5
        },
        {
          "ticker": "2888",
          "pct": 0.6
        },
        {
          "ticker": "3328",
          "pct": 0.7
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 3411,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-11",
          "last_trade_date": "2026-05-11",
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.4769862210495456,
            "mixed_pct": 0.38786279683377306,
            "instit_pct": 0.13515098211668133,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.06935999544583576,
            "mixed_qty_pct": 0.21842206359208716,
            "instit_qty_pct": 0.712217940962077,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.06930208496903514,
            "mixed_notional_pct": 0.2184630996199283,
            "instit_notional_pct": 0.7122348154110366,
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
              "retail": 1627,
              "mixed": 1323,
              "institutional": 461,
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
            "avg": 332717.17921430664,
            "median": 111440.00000000001
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 89221,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-10",
          "last_trade_date": "2026-05-11",
          "period_days": 31,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.4688694365676242,
            "mixed_pct": 0.3654632877909909,
            "instit_pct": 0.16566727564138486,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.057093071578778846,
            "mixed_qty_pct": 0.15397085056451426,
            "instit_qty_pct": 0.7889360778567069,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.057112140979160425,
            "mixed_notional_pct": 0.15394877515389252,
            "instit_notional_pct": 0.788939083866947,
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
              "retail": 41833,
              "mixed": 32607,
              "institutional": 14781,
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
            "avg": 413874.71565606754,
            "median": 111200.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 340164,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-03",
          "last_trade_date": "2026-05-11",
          "period_days": 97,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.4776137392551828,
            "mixed_pct": 0.3574217142319587,
            "instit_pct": 0.1649645465128585,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.05937244039776865,
            "mixed_qty_pct": 0.1524920209102815,
            "instit_qty_pct": 0.7881355386919499,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.05940978766002457,
            "mixed_notional_pct": 0.15239307353690407,
            "instit_notional_pct": 0.7881971388030714,
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
              "retail": 162467,
              "mixed": 121582,
              "institutional": 56115,
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
            "avg": 400612.9978508308,
            "median": 99520.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 592318,
          "n_runs": 0,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-23",
          "last_trade_date": "2026-05-11",
          "period_days": 200,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.4737100679027144,
            "mixed_pct": 0.3659284370895364,
            "instit_pct": 0.1603614950077492,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.05899278009149587,
            "mixed_qty_pct": 0.16023611037001387,
            "instit_qty_pct": 0.7807711095384903,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.05927456737854198,
            "mixed_notional_pct": 0.15955733597087968,
            "instit_notional_pct": 0.7811680966505784,
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
              "retail": 280587,
              "mixed": 216746,
              "institutional": 94985,
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
            "avg": 378156.6949769482,
            "median": 88560.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 592318,
      "n_runs": 0,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-23",
      "last_trade_date": "2026-05-11",
      "period_days": 200,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 78000.0,
        "instit_min": 390000.0
      },
      "composition": {
        "retail_pct": 0.4737100679027144,
        "mixed_pct": 0.3659284370895364,
        "instit_pct": 0.1603614950077492,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.05927456737854198,
        "mixed_notional_pct": 0.15955733597087968,
        "instit_notional_pct": 0.7811680966505784,
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
        "avg": 378156.6949769482,
        "median": 88560.0
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
            "n_trades": 30376,
            "n_runs": 0,
            "retail_pct": 0.4862720568870161,
            "mixed_pct": 0.3566631551224651,
            "instit_pct": 0.15706478799051882,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 396775.415036542,
            "avg_run_notional": null,
            "retail_qty_pct": 0.06303489386852937,
            "mixed_qty_pct": 0.16333196278477619,
            "instit_qty_pct": 0.7736331433466944,
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
            "total_quantity": 86430113.0
          },
          {
            "month": "2026-04",
            "n_trades": 86577,
            "n_runs": 0,
            "retail_pct": 0.44909156011411805,
            "mixed_pct": 0.3820067685412985,
            "instit_pct": 0.16890167134458342,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 419474.69300611014,
            "avg_run_notional": null,
            "retail_qty_pct": 0.053260755444157905,
            "mixed_qty_pct": 0.1537948940512162,
            "instit_qty_pct": 0.7929443505046259,
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
            "total_quantity": 261878655.0
          },
          {
            "month": "2026-03",
            "n_trades": 140934,
            "n_runs": 0,
            "retail_pct": 0.48438985624476705,
            "mixed_pct": 0.35073864362041807,
            "instit_pct": 0.16487150013481489,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 384513.3831381356,
            "avg_run_notional": null,
            "retail_qty_pct": 0.061252609104265957,
            "mixed_qty_pct": 0.15246856934362485,
            "instit_qty_pct": 0.7862788215521092,
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
            "total_quantity": 422243091.0
          },
          {
            "month": "2026-02",
            "n_trades": 84055,
            "n_runs": 0,
            "retail_pct": 0.4919992861816668,
            "mixed_pct": 0.34076497531378264,
            "instit_pct": 0.1672357385045506,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 410939.6112592945,
            "avg_run_notional": null,
            "retail_qty_pct": 0.06118690340253631,
            "mixed_qty_pct": 0.14548339275765607,
            "instit_qty_pct": 0.7933297038398076,
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
            "total_quantity": 249408536.0
          },
          {
            "month": "2026-01",
            "n_trades": 89222,
            "n_runs": 0,
            "retail_pct": 0.5029028714890946,
            "mixed_pct": 0.3380668445002354,
            "instit_pct": 0.15903028401067001,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 340795.6370323463,
            "avg_run_notional": null,
            "retail_qty_pct": 0.06998391385960781,
            "mixed_qty_pct": 0.1673613843152996,
            "instit_qty_pct": 0.7626547018250925,
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
            "total_quantity": 234539169.0
          },
          {
            "month": "2025-12",
            "n_trades": 61962,
            "n_runs": 0,
            "retail_pct": 0.44283593170007424,
            "mixed_pct": 0.40489332171330816,
            "instit_pct": 0.1522707465866176,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 360665.02553639334,
            "avg_run_notional": null,
            "retail_qty_pct": 0.05285729384884182,
            "mixed_qty_pct": 0.1750825669274096,
            "instit_qty_pct": 0.7720601392237486,
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
            "total_quantity": 189622534.0
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
      "recent_trades": [],
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
      "total_trades": 539225,
      "price_moving_trades": 220952,
      "pct_price_moving": 40.97584496267792,
      "all_movers": {
        "count": 220952,
        "avg_size": 377254.261553713,
        "median_size": 84640.0,
        "retail_count": 110329,
        "mixed_count": 76844,
        "institutional_count": 33779,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 49.93346971287881,
        "mixed_pct": 34.7785944458525,
        "instit_pct": 15.287935841268691,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 110725,
        "avg_size": 385385.3944751954,
        "median_size": 88080.0,
        "retail_count": 53835,
        "mixed_count": 40142,
        "institutional_count": 16748,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 48.62045608489501,
        "mixed_pct": 36.25378189207496,
        "instit_pct": 15.12576202303003,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 110227,
        "avg_size": 369086.39258575486,
        "median_size": 57600.0,
        "retail_count": 56494,
        "mixed_count": 36702,
        "institutional_count": 17031,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 51.25241546989394,
        "mixed_pct": 33.29674217750642,
        "instit_pct": 15.450842352599636,
        "unclear_pct": null
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
          "opening": 0.017648587114745283,
          "continuous": 0.8919376328786839,
          "closing": 0.08242977893868858,
          "auctions": 0.10007836605343387,
          "other": 0.007984001067882244
        },
        "1M": {
          "opening": 0.015983149067319336,
          "continuous": 0.9026280579998304,
          "closing": 0.05214172119338917,
          "auctions": 0.0681248702607085,
          "other": 0.029247071739461093
        },
        "3M": {
          "opening": 0.016192014471378698,
          "continuous": 0.8687291543843453,
          "closing": 0.08028648835422027,
          "auctions": 0.09647850282559897,
          "other": 0.03479234279005585
        },
        "6M": {
          "opening": 0.01592406506677562,
          "continuous": 0.8805860367391641,
          "closing": 0.07927145932724967,
          "auctions": 0.09519552439402529,
          "other": 0.02421843886681056
        }
      },
      "hhi": {
        "1D": 0.1107839494102337,
        "1M": 0.11482589056687859,
        "3M": 0.12092759977352231,
        "6M": 0.11757131882320974
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0138
        },
        {
          "time": "09:30",
          "avg_share": 0.1843
        },
        {
          "time": "10:00",
          "avg_share": 0.0802
        },
        {
          "time": "10:30",
          "avg_share": 0.0672
        },
        {
          "time": "11:00",
          "avg_share": 0.0575
        },
        {
          "time": "11:30",
          "avg_share": 0.0453
        },
        {
          "time": "12:00",
          "avg_share": 0.0333
        },
        {
          "time": "13:00",
          "avg_share": 0.063
        },
        {
          "time": "13:30",
          "avg_share": 0.0524
        },
        {
          "time": "14:00",
          "avg_share": 0.0581
        },
        {
          "time": "14:30",
          "avg_share": 0.0582
        },
        {
          "time": "15:00",
          "avg_share": 0.0871
        },
        {
          "time": "15:30",
          "avg_share": 0.1323
        },
        {
          "time": "16:00",
          "avg_share": 0.0673
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "5",
          "auctions_pct": 8.836425086568616,
          "hhi": 0.11609580679097287,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "939",
          "auctions_pct": 14.655464423511393,
          "hhi": 0.11014733220018008,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1398",
          "auctions_pct": 11.560122861647073,
          "hhi": 0.11081216710605839,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3988",
          "auctions_pct": 12.6776214970506,
          "hhi": 0.1140673892110537,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3968",
          "auctions_pct": 10.77820562974125,
          "hhi": 0.11254144423197918,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1288",
          "auctions_pct": 10.276925922808463,
          "hhi": 0.11660870186776635,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "998",
          "auctions_pct": 10.623830273377086,
          "hhi": 0.11786050027845107,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3328",
          "auctions_pct": 13.454437424692097,
          "hhi": 0.12104620823519074,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2888",
          "auctions_pct": 5.485207831639658,
          "hhi": 0.12037867556813209,
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
