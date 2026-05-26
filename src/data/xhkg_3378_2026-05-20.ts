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
      "ticker": "3378",
      "name": "HANXBIO-B",
      "marketCap": 4027352147.6,
      "sector": "Biotechnology",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "1349",
      "name": "FUDANZHANGJIANG",
      "marketCap": 860640000.0,
      "sector": "Biotechnology",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "2126",
      "name": "JW THERAP-B",
      "marketCap": 858462631.98,
      "sector": "Biotechnology",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "3681",
      "name": "SINOMAB BIO-B",
      "marketCap": 1830362603.52,
      "sector": "Biotechnology",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "1228",
      "name": "CANBRIDGE-B",
      "marketCap": 1226613294.82,
      "sector": "Biotechnology",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "2509",
      "name": "QYUNS-B",
      "marketCap": 3581853220.0,
      "sector": "Biotechnology",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "6628",
      "name": "TRANSCENTA-B",
      "marketCap": 878545488.06,
      "sector": "Biotechnology",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "3839",
      "name": "CT ENTERPRISE",
      "marketCap": 2019626620.9,
      "sector": "Biotechnology",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "2137",
      "name": "BRII-B",
      "marketCap": 873386467.5799999,
      "sector": "Biotechnology",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "3378",
    "company": "HANXBIO-B",
    "asof_date": "2026-05-20",
    "industry": "Healthcare - Pharmaceuticals & Biotechnology",
    "sector": "Biotechnology",
    "market_cap_display": "4.0B",
    "market_cap_category": "mid",
    "universe_total": 2570,
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
          "score_pca": 64.74708171206225,
          "score_pca_percentile": 64.74708171206225,
          "rank_pca": 907,
          "total": 2570,
          "adv_notional_sgd": 1173940.0,
          "adv_volume_shares": 39500.0,
          "free_float_shares": 31858520.0,
          "turnover_ratio": 0.0012398567165078603,
          "votes": 195.0,
          "trades": 195.0,
          "spread_pct": 0.02003088588116281,
          "spread_ticks": null,
          "amihud": 5.7712214854911564e-09,
          "volatility": 0.5670306065254733
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5502813418519003,
          "loadings": {
            "log_adv": 0.5350611583441586,
            "log_trades": 0.49691547907135625,
            "log_turnover": 0.5014634894702156,
            "neg_spread": 0.39964956938798574,
            "neg_amihud": 0.05312299889769208,
            "neg_vol": -0.2297326726766546
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
          "peer_median_adv": 1214325.0,
          "peer_median_score_pca": 61.070038910505836,
          "peer_median_trades": 121.0,
          "peer_median_volatility": 0.5759267747513988,
          "peer_median_spread_pct": 0.021334805481014442,
          "peer_median_spread_ticks": 4.870283018867925,
          "peer_median_amihud": 1.086210103640739e-08,
          "peer_median_turnover_ratio": 0.0016183468651233548,
          "target_vs_peer": {
            "score_pca_delta": 3.68,
            "adv_delta_pct": -3.3,
            "trades_delta_pct": 61.16,
            "volatility_delta_pct": 1.54,
            "spread_pct_delta_pct": 6.11,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 46.87,
            "turnover_ratio_delta_pct": -23.39
          }
        },
        "peer_liquidity": [
          {
            "ticker": "3378",
            "score_pca": 64.74708171206225,
            "rank_pca": 907,
            "adv": 1173940.0,
            "trades": 195.0,
            "volatility": 0.5670306065254733,
            "spread_pct": 0.02003088588116281,
            "spread_ticks": null,
            "amihud": 5.7712214854911564e-09,
            "turnover_ratio": 0.0012398567165078603,
            "is_target": true
          },
          {
            "ticker": "1349",
            "score_pca": 68.52140077821012,
            "rank_pca": 810,
            "adv": 3006960.0,
            "trades": 282.0,
            "volatility": 0.2175063213958839,
            "spread_pct": 0.006790667412060859,
            "spread_ticks": 1.7886855241264559,
            "amihud": 2.5004645863201566e-09,
            "turnover_ratio": 0.004459042578180053,
            "is_target": false
          },
          {
            "ticker": "2126",
            "score_pca": 61.63424124513619,
            "rank_pca": 987,
            "adv": 1093851.76,
            "trades": 128.0,
            "volatility": 0.40962158246338837,
            "spread_pct": 0.023169055566463804,
            "spread_ticks": 4.870283018867925,
            "amihud": 1.7413345888495064e-08,
            "turnover_ratio": 0.0015324635379949764,
            "is_target": false
          },
          {
            "ticker": "3681",
            "score_pca": 77.78210116731518,
            "rank_pca": 572,
            "adv": 16640448.0,
            "trades": 339.0,
            "volatility": 0.7686927294892051,
            "spread_pct": 0.014038110475252797,
            "spread_ticks": 1.89060773480663,
            "amihud": 3.026343535355282e-09,
            "turnover_ratio": 0.014570127181131189,
            "is_target": false
          },
          {
            "ticker": "1228",
            "score_pca": 58.79377431906615,
            "rank_pca": 1060,
            "adv": 1120640.0,
            "trades": 68.0,
            "volatility": 0.6003773994366115,
            "spread_pct": 0.03668320489813155,
            "spread_ticks": 7.533875338753387,
            "amihud": 4.3108561843197155e-09,
            "turnover_ratio": 0.0017042301922517331,
            "is_target": false
          },
          {
            "ticker": "2509",
            "score_pca": 60.505836575875485,
            "rank_pca": 1016,
            "adv": 1339800.0,
            "trades": 114.0,
            "volatility": 0.29702133011506915,
            "spread_pct": 0.015336045195758635,
            "spread_ticks": null,
            "amihud": 2.3324376772652965e-09,
            "turnover_ratio": 0.0007990107485969752,
            "is_target": false
          },
          {
            "ticker": "6628",
            "score_pca": 57.937743190661486,
            "rank_pca": 1082,
            "adv": 723620.0,
            "trades": 74.0,
            "volatility": 0.7140801275146964,
            "spread_pct": 0.04337473170552727,
            "spread_ticks": 8.141873278236915,
            "amihud": 2.909349047697332e-08,
            "turnover_ratio": 0.0013084385488643356,
            "is_target": false
          },
          {
            "ticker": "3839",
            "score_pca": 28.132295719844358,
            "rank_pca": 1848,
            "adv": 117292.20000000001,
            "trades": 14.0,
            "volatility": 0.5978778523021965,
            "spread_pct": 0.13194897779435688,
            "spread_ticks": 102.69354838709677,
            "amihud": 2.1887535265040601e-07,
            "turnover_ratio": 0.00026204386303113484,
            "is_target": false
          },
          {
            "ticker": "2137",
            "score_pca": 64.28015564202335,
            "rank_pca": 919,
            "adv": 1308010.0,
            "trades": 136.0,
            "volatility": 0.5539756972006009,
            "spread_pct": 0.019500555395565083,
            "spread_ticks": 2.3311475409836064,
            "amihud": 1.9436952938860754e-08,
            "turnover_ratio": 0.0017128208642496377,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Biotechnology",
          "sector_count": 75,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4607468868158824,
              "median": 0.3126054996063373,
              "min": 0.0,
              "max": 5.197984003613531,
              "p5": 0.0,
              "p95": 1.4931458902138883,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 70770066.38516714,
              "median": 246300.0,
              "min": 0.0,
              "max": 19427078128.050003,
              "p5": 0.0,
              "p95": 281617146.57999945,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0479597041881861,
              "median": 0.02788735717654246,
              "min": 0.0004649470857657017,
              "max": 0.7662226887999475,
              "p5": 0.0013949511880232718,
              "p95": 0.15842293255545944,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006637080591520298,
              "median": 0.0010699107756735504,
              "min": 0.0,
              "max": 1.0615469704283622,
              "p5": 0.0,
              "p95": 0.02327147986814193,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.352439084355239e-06,
              "median": 6.348045563731802e-09,
              "min": 0.0,
              "max": 0.0016339869281045726,
              "p5": 0.0,
              "p95": 5.267441813848235e-06,
              "count": 2199
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1271.7501945525291,
              "median": 24.0,
              "min": 0.0,
              "max": 149367.0,
              "p5": 0.0,
              "p95": 6804.999999999989,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.50786950976107,
              "median": 0.4890104470839755,
              "min": 0.0,
              "max": 1.9597745783009939,
              "p5": 0.0,
              "p95": 1.1601173362193775,
              "count": 75
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 87237135.5048,
              "median": 10473750.0,
              "min": 0.0,
              "max": 941779200.0,
              "p5": 6152.000000000001,
              "p95": 501426057.4399998,
              "count": 75
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.020911609707164283,
              "median": 0.006024958063691184,
              "min": 0.0006562298389865398,
              "max": 0.21855965603726263,
              "p5": 0.0015624860377572328,
              "p95": 0.07295115172288413,
              "count": 75
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008123963236276987,
              "median": 0.004422209667526679,
              "min": 0.0,
              "max": 0.06778171192008237,
              "p5": 8.28514617775008e-06,
              "p95": 0.030522204038380674,
              "count": 75
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5317022673558293e-07,
              "median": 7.423212760642049e-10,
              "min": 0.0,
              "max": 8.23146890562622e-06,
              "p5": 0.0,
              "p95": 2.627558191501311e-07,
              "count": 73
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2190.653333333333,
              "median": 596.0,
              "min": 0.0,
              "max": 14389.0,
              "p5": 1.0,
              "p95": 11115.099999999999,
              "count": 75
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3168827.7449999996,
              "median": 1214325.0,
              "min": 117292.20000000001,
              "max": 16640448.0,
              "p5": 329506.93000000005,
              "p95": 11868727.199999992,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 144.375,
              "median": 121.0,
              "min": 14.0,
              "max": 339.0,
              "p5": 32.900000000000006,
              "p95": 319.04999999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5198941299897065,
              "median": 0.5759267747513988,
              "min": 0.2175063213958839,
              "max": 0.7686927294892051,
              "p5": 0.24533657444759874,
              "p95": 0.749578318798127,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03635516855538961,
              "median": 0.021334805481014442,
              "min": 0.006790667412060859,
              "max": 0.13194897779435688,
              "p5": 0.009327272484178037,
              "p95": 0.10094799166326647,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 18.464288688981668,
              "median": 4.870283018867925,
              "min": 1.7886855241264559,
              "max": 102.69354838709677,
              "p5": 1.8192621873305082,
              "p95": 74.32804585443874,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.7123655492249447e-08,
              "median": 1.086210103640739e-08,
              "min": 2.3324376772652965e-09,
              "max": 2.1887535265040601e-07,
              "p5": 2.3912470954344977e-09,
              "p95": 1.5245170088970447e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003293522189287504,
              "median": 0.0016183468651233548,
              "min": 0.00026204386303113484,
              "max": 0.014570127181131189,
              "p5": 0.000449982272979179,
              "p95": 0.011031247570098286,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.006775067750677488,
            "market": -0.003547814367408031,
            "sector": -0.005586592178770999,
            "peers": -0.0039779589371979895,
            "vs_market": 0.010322882118085519,
            "vs_sector": 0.012361659929448487,
            "vs_peers": 0.010753026687875478
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 67.12062256809338,
          "score_pca_percentile": 67.12062256809338,
          "rank_pca": 846,
          "total": 2570,
          "adv_notional_sgd": 1543896.0,
          "adv_volume_shares": 52300.0,
          "free_float_shares": 31858520.0,
          "turnover_ratio": 0.0016416330702116733,
          "votes": 226.0,
          "trades": 226.0,
          "spread_pct": 0.02021559069892856,
          "spread_ticks": null,
          "amihud": 1.0571746761515363e-08,
          "volatility": 0.5178414370338685
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5539460705028124,
          "loadings": {
            "log_adv": 0.5328786283301842,
            "log_trades": 0.49106609464873396,
            "log_turnover": 0.4869491564124465,
            "neg_spread": 0.4474767055546101,
            "neg_amihud": 0.19078812210188228,
            "neg_vol": 0.033756002065084424
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
          "peer_median_adv": 1566883.6749999998,
          "peer_median_score_pca": 66.284046692607,
          "peer_median_trades": 157.5,
          "peer_median_volatility": 0.37930773730193224,
          "peer_median_spread_pct": 0.017615730170682548,
          "peer_median_spread_ticks": 3.4008498583569406,
          "peer_median_amihud": 1.2227516337133438e-08,
          "peer_median_turnover_ratio": 0.0018160111191042492,
          "target_vs_peer": {
            "score_pca_delta": 0.84,
            "adv_delta_pct": -1.5,
            "trades_delta_pct": 43.49,
            "volatility_delta_pct": -36.52,
            "spread_pct_delta_pct": -14.76,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 13.54,
            "turnover_ratio_delta_pct": -9.6
          }
        },
        "peer_liquidity": [
          {
            "ticker": "3378",
            "score_pca": 67.12062256809338,
            "rank_pca": 846,
            "adv": 1543896.0,
            "trades": 226.0,
            "volatility": 0.5178414370338685,
            "spread_pct": 0.02021559069892856,
            "spread_ticks": null,
            "amihud": 1.0571746761515363e-08,
            "turnover_ratio": 0.0016416330702116733,
            "is_target": true
          },
          {
            "ticker": "1349",
            "score_pca": 72.52918287937743,
            "rank_pca": 707,
            "adv": 3106030.0,
            "trades": 359.0,
            "volatility": 0.21053851435908721,
            "spread_pct": 0.006787090388490239,
            "spread_ticks": 1.7886855241264559,
            "amihud": 2.6685048276721358e-09,
            "turnover_ratio": 0.004623467326453593,
            "is_target": false
          },
          {
            "ticker": "2126",
            "score_pca": 66.42023346303502,
            "rank_pca": 864,
            "adv": 1409800.0,
            "trades": 145.0,
            "volatility": 0.3218730410905253,
            "spread_pct": 0.015866145504647156,
            "spread_ticks": 3.4008498583569406,
            "amihud": 1.7413345888495064e-08,
            "turnover_ratio": 0.001919201373958861,
            "is_target": false
          },
          {
            "ticker": "3681",
            "score_pca": 70.07782101167315,
            "rank_pca": 770,
            "adv": 2785380.0,
            "trades": 339.0,
            "volatility": 0.7415332208476649,
            "spread_pct": 0.014196350435938148,
            "spread_ticks": 1.9210526315789473,
            "amihud": 3.550833231424371e-09,
            "turnover_ratio": 0.0024763576039386094,
            "is_target": false
          },
          {
            "ticker": "1228",
            "score_pca": 61.36186770428016,
            "rank_pca": 994,
            "adv": 1723967.3499999999,
            "trades": 68.0,
            "volatility": 0.19543427702817878,
            "spread_pct": 0.03668320489813155,
            "spread_ticks": 7.533875338753387,
            "amihud": 5.678484911175297e-09,
            "turnover_ratio": 0.0024888496275466,
            "is_target": false
          },
          {
            "ticker": "2509",
            "score_pca": 67.70428015564202,
            "rank_pca": 831,
            "adv": 2296584.0,
            "trades": 186.0,
            "volatility": 0.39302898679527704,
            "spread_pct": 0.015336045195758635,
            "spread_ticks": null,
            "amihud": 7.0416867857718116e-09,
            "turnover_ratio": 0.0012708075715780463,
            "is_target": false
          },
          {
            "ticker": "6628",
            "score_pca": 60.46692607003891,
            "rank_pca": 1017,
            "adv": 723620.0,
            "trades": 87.0,
            "volatility": 0.6373529329937194,
            "spread_pct": 0.027051607035739823,
            "spread_ticks": 5.102189781021898,
            "amihud": 2.2313618804846876e-08,
            "turnover_ratio": 0.0013084385488643356,
            "is_target": false
          },
          {
            "ticker": "3839",
            "score_pca": 45.13618677042802,
            "rank_pca": 1411,
            "adv": 278120.0,
            "trades": 17.0,
            "volatility": 0.36558648780858743,
            "spread_pct": 0.04685148260114493,
            "spread_ticks": 39.58695652173913,
            "amihud": 9.416969721874126e-08,
            "turnover_ratio": 0.000637302671177295,
            "is_target": false
          },
          {
            "ticker": "2137",
            "score_pca": 66.14785992217898,
            "rank_pca": 871,
            "adv": 1308010.0,
            "trades": 170.0,
            "volatility": 0.5067311024634673,
            "spread_pct": 0.01936531483671794,
            "spread_ticks": 2.3311475409836064,
            "amihud": 1.9594017828792763e-08,
            "turnover_ratio": 0.0017128208642496377,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Biotechnology",
          "sector_count": 75,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5692704336646084,
              "median": 0.3932125504882497,
              "min": 0.0,
              "max": 27.02876396216287,
              "p5": 0.05613719105657874,
              "p95": 1.5390897214865655,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 68923261.79120016,
              "median": 242850.0,
              "min": 0.0,
              "max": 13244167880.0,
              "p5": 0.0,
              "p95": 282807475.39999986,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.045475846162772234,
              "median": 0.027697364929572046,
              "min": 0.00047792175451553015,
              "max": 0.5910931174089069,
              "p5": 0.0014329253086842848,
              "p95": 0.14493118082851397,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005783128489093528,
              "median": 0.0009976354436179368,
              "min": 0.0,
              "max": 0.7498380704596732,
              "p5": 0.0,
              "p95": 0.021220920834018737,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2238900806831325e-06,
              "median": 3.1515804293410704e-08,
              "min": 0.0,
              "max": 0.00028607582394791315,
              "p5": 0.0,
              "p95": 6.558771805187879e-06,
              "count": 2511
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1284.6350194552529,
              "median": 23.0,
              "min": 0.0,
              "max": 84952.0,
              "p5": 0.0,
              "p95": 6912.1499999999905,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5276086999026307,
              "median": 0.4152408405984677,
              "min": 0.0,
              "max": 6.037027489594855,
              "p5": 0.12842825024158003,
              "p95": 0.9853749870155997,
              "count": 75
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 93116444.8484,
              "median": 10491704.0,
              "min": 0.0,
              "max": 948760596.6,
              "p5": 9270.0,
              "p95": 490428888.3839996,
              "count": 75
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01799574304701177,
              "median": 0.006288148529594337,
              "min": 0.0007360441342180751,
              "max": 0.14212152420185376,
              "p5": 0.0012087164742887045,
              "p95": 0.058491572624022665,
              "count": 75
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008079052472906662,
              "median": 0.00456158571027646,
              "min": 0.0,
              "max": 0.06778171192008237,
              "p5": 8.313650388592886e-06,
              "p95": 0.02361981579554388,
              "count": 75
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.70879565626748e-08,
              "median": 1.2572580676872276e-09,
              "min": 0.0,
              "max": 3.0513217432722136e-06,
              "p5": 3.485119362980518e-11,
              "p95": 2.6548639761015646e-07,
              "count": 74
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2340.04,
              "median": 798.0,
              "min": 0.0,
              "max": 16071.0,
              "p5": 1.0,
              "p95": 11117.899999999998,
              "count": 75
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1703938.91875,
              "median": 1566883.6749999998,
              "min": 278120.0,
              "max": 3106030.0,
              "p5": 434045.0,
              "p95": 2993802.5,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 171.375,
              "median": 157.5,
              "min": 17.0,
              "max": 359.0,
              "p5": 34.85,
              "p95": 352.0,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4215098204233134,
              "median": 0.37930773730193224,
              "min": 0.19543427702817878,
              "max": 0.7415332208476649,
              "p5": 0.20072076009399673,
              "p95": 0.7050701200987839,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.022767155112071055,
              "median": 0.017615730170682548,
              "min": 0.006787090388490239,
              "max": 0.04685148260114493,
              "p5": 0.009380331405097007,
              "p95": 0.04329258540509025,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.809251028080054,
              "median": 3.4008498583569406,
              "min": 1.7886855241264559,
              "max": 39.58695652173913,
              "p5": 1.8283956563622032,
              "p95": 29.971032166843386,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.1553773687114946e-08,
              "median": 1.2227516337133438e-08,
              "min": 2.6685048276721358e-09,
              "max": 9.416969721874126e-08,
              "p5": 2.977319768985418e-09,
              "p95": 6.902006977387818e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002054655698470872,
              "median": 0.0018160111191042492,
              "min": 0.000637302671177295,
              "max": 0.004623467326453593,
              "p5": 0.000859029386317558,
              "p95": 0.0038763511318361445,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.03880983182406228,
            "market": -0.016958849694274747,
            "sector": -0.0608289715983068,
            "peers": -0.07502829497873031,
            "vs_market": -0.021850982129787533,
            "vs_sector": 0.022019139774244523,
            "vs_peers": 0.036218463154668035
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 69.64980544747081,
          "score_pca_percentile": 69.64980544747081,
          "rank_pca": 781,
          "total": 2570,
          "adv_notional_sgd": 2394144.0,
          "adv_volume_shares": 81600.0,
          "free_float_shares": 31858520.0,
          "turnover_ratio": 0.0025613242548618077,
          "votes": 226.0,
          "trades": 226.0,
          "spread_pct": 0.01521742247813082,
          "spread_ticks": null,
          "amihud": 9.01660702350192e-09,
          "volatility": 0.5773970688347926
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5688709427000682,
          "loadings": {
            "log_adv": 0.5229845807340547,
            "log_trades": 0.4802835549715877,
            "log_turnover": 0.47170379200532275,
            "neg_spread": 0.45545356808837106,
            "neg_amihud": 0.2398202087148972,
            "neg_vol": 0.09142583088817526
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
          "peer_median_adv": 1812440.0,
          "peer_median_score_pca": 68.03501945525292,
          "peer_median_trades": 166.5,
          "peer_median_volatility": 0.4983496866109864,
          "peer_median_spread_pct": 0.014682460036116333,
          "peer_median_spread_ticks": 3.147222222222222,
          "peer_median_amihud": 1.197851809818561e-08,
          "peer_median_turnover_ratio": 0.0022076528197440782,
          "target_vs_peer": {
            "score_pca_delta": 1.61,
            "adv_delta_pct": 32.1,
            "trades_delta_pct": 35.74,
            "volatility_delta_pct": -15.86,
            "spread_pct_delta_pct": -3.64,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 24.73,
            "turnover_ratio_delta_pct": 16.02
          }
        },
        "peer_liquidity": [
          {
            "ticker": "3378",
            "score_pca": 69.64980544747081,
            "rank_pca": 781,
            "adv": 2394144.0,
            "trades": 226.0,
            "volatility": 0.5773970688347926,
            "spread_pct": 0.01521742247813082,
            "spread_ticks": null,
            "amihud": 9.01660702350192e-09,
            "turnover_ratio": 0.0025613242548618077,
            "is_target": true
          },
          {
            "ticker": "1349",
            "score_pca": 72.99610894941634,
            "rank_pca": 695,
            "adv": 3006960.0,
            "trades": 306.0,
            "volatility": 0.22759983408365744,
            "spread_pct": 0.006787090388490239,
            "spread_ticks": 1.857421875,
            "amihud": 3.4783931493278597e-09,
            "turnover_ratio": 0.004267213705194256,
            "is_target": false
          },
          {
            "ticker": "2126",
            "score_pca": 68.56031128404669,
            "rank_pca": 809,
            "adv": 2058140.0,
            "trades": 171.0,
            "volatility": 0.6777207489726309,
            "spread_pct": 0.01293032761034931,
            "spread_ticks": 3.147222222222222,
            "amihud": 1.1425419318601715e-08,
            "turnover_ratio": 0.0024646586065576953,
            "is_target": false
          },
          {
            "ticker": "3681",
            "score_pca": 69.37743190661479,
            "rank_pca": 788,
            "adv": 3098601.8,
            "trades": 162.0,
            "volatility": 0.43890390458512224,
            "spread_pct": 0.015347574407048833,
            "spread_ticks": 2.1929133858267718,
            "amihud": 6.2284282281087085e-09,
            "turnover_ratio": 0.0025580556763504492,
            "is_target": false
          },
          {
            "ticker": "1228",
            "score_pca": 63.19066147859922,
            "rank_pca": 947,
            "adv": 1494250.0,
            "trades": 68.0,
            "volatility": 0.5709646709659694,
            "spread_pct": 0.02402336680667672,
            "spread_ticks": 5.28125,
            "amihud": 1.253263530426441e-08,
            "turnover_ratio": 0.0021772793816451368,
            "is_target": false
          },
          {
            "ticker": "2509",
            "score_pca": 71.16731517509727,
            "rank_pca": 742,
            "adv": 3709134.0000000005,
            "trades": 287.0,
            "volatility": 0.5253202575270584,
            "spread_pct": 0.012890529502500967,
            "spread_ticks": null,
            "amihud": 3.141842134779687e-09,
            "turnover_ratio": 0.0020717207267192997,
            "is_target": false
          },
          {
            "ticker": "6628",
            "score_pca": 66.07003891050583,
            "rank_pca": 873,
            "adv": 1566740.0,
            "trades": 110.0,
            "volatility": 0.4713791156949144,
            "spread_pct": 0.016805598894485786,
            "spread_ticks": 3.546218487394958,
            "amihud": 1.6365846050413948e-08,
            "turnover_ratio": 0.0022380262578430192,
            "is_target": false
          },
          {
            "ticker": "3839",
            "score_pca": 55.797665369649806,
            "rank_pca": 1137,
            "adv": 643500.0,
            "trades": 37.0,
            "volatility": 0.5284664059281712,
            "spread_pct": 0.037047031275841975,
            "spread_ticks": 30.53846153846154,
            "amihud": 2.9799153704034698e-08,
            "turnover_ratio": 0.0013402100290934294,
            "is_target": false
          },
          {
            "ticker": "2137",
            "score_pca": 67.50972762645915,
            "rank_pca": 836,
            "adv": 1190640.0,
            "trades": 173.0,
            "volatility": 0.35235224877923643,
            "spread_pct": 0.014017345665183836,
            "spread_ticks": 1.8645533141210375,
            "amihud": 1.2531616877769507e-08,
            "turnover_ratio": 0.0015591264851264046,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Biotechnology",
          "sector_count": 75,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6715294854390154,
              "median": 0.5022840954788743,
              "min": 0.0,
              "max": 12.716269334404805,
              "p5": 0.16720681306353216,
              "p95": 1.6713677432925578,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61493670.80147341,
              "median": 221406.0,
              "min": 0.0,
              "max": 12214990420.0,
              "p5": 0.0,
              "p95": 255279270.25199974,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04369335707278293,
              "median": 0.02823258916804223,
              "min": 0.0004644488055358157,
              "max": 0.5912209998910793,
              "p5": 0.001428450818730307,
              "p95": 0.13850979779937872,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004308608814045892,
              "median": 0.0009751414348347415,
              "min": 0.0,
              "max": 0.2531131591700725,
              "p5": 0.0,
              "p95": 0.01693603156896355,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.93114515345098e-07,
              "median": 4.676515253409587e-08,
              "min": 0.0,
              "max": 0.00018237082066869308,
              "p5": 2.7452315734562228e-11,
              "p95": 4.1840515782900976e-06,
              "count": 2563
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1103.5110894941633,
              "median": 21.0,
              "min": 0.0,
              "max": 71810.0,
              "p5": 0.0,
              "p95": 6110.549999999999,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5731571683955665,
              "median": 0.46698267266401566,
              "min": 0.1367879776269428,
              "max": 2.903830308353303,
              "p5": 0.27221540718714343,
              "p95": 1.2692294483304014,
              "count": 75
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 81509879.33186667,
              "median": 13637200.000000002,
              "min": 0.0,
              "max": 948760596.6,
              "p5": 26359.199999999997,
              "p95": 510476808.43999976,
              "count": 75
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01583329747725509,
              "median": 0.006474085835101985,
              "min": 0.0007178257918496521,
              "max": 0.13778855654360905,
              "p5": 0.0013260052816655755,
              "p95": 0.05321707585881541,
              "count": 75
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005956774797710917,
              "median": 0.004375270743180463,
              "min": 0.0,
              "max": 0.03114982128873892,
              "p5": 2.4042755949948504e-05,
              "p95": 0.01766466022317838,
              "count": 75
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.254665050363967e-07,
              "median": 1.465732758758521e-09,
              "min": 1.6400225525131725e-11,
              "max": 2.0852001510361195e-05,
              "p5": 4.7125788974448664e-11,
              "p95": 3.192391393973505e-07,
              "count": 75
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1904.2133333333334,
              "median": 600.0,
              "min": 0.0,
              "max": 14962.0,
              "p5": 4.4,
              "p95": 9464.599999999995,
              "count": 75
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2095995.725,
              "median": 1812440.0,
              "min": 643500.0,
              "max": 3709134.0000000005,
              "p5": 834999.0,
              "p95": 3495447.73,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 164.25,
              "median": 166.5,
              "min": 37.0,
              "max": 306.0,
              "p5": 47.85,
              "p95": 299.34999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.47408839831709504,
              "median": 0.4983496866109864,
              "min": 0.22759983408365744,
              "max": 0.6777207489726309,
              "p5": 0.2712631792271101,
              "p95": 0.6403561216702993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.017481108068822207,
              "median": 0.014682460036116333,
              "min": 0.006787090388490239,
              "max": 0.037047031275841975,
              "p5": 0.008923294078393994,
              "p95": 0.03248874871163413,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.918291546146648,
              "median": 3.147222222222222,
              "min": 1.857421875,
              "max": 30.53846153846154,
              "p5": 1.8595613067363113,
              "p95": 22.96129807692306,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1937916845912565e-08,
              "median": 1.197851809818561e-08,
              "min": 3.141842134779687e-09,
              "max": 2.9799153704034698e-08,
              "p5": 3.2596349898715475e-09,
              "p95": 2.509749602526743e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023345363585662113,
              "median": 0.0022076528197440782,
              "min": 0.0013402100290934294,
              "max": 0.004267213705194256,
              "p5": 0.0014168307887049707,
              "p95": 0.003669008395098923,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.06423173803526472,
            "market": 0.01655570232671688,
            "sector": -0.18157572171488623,
            "peers": -0.1674686548592086,
            "vs_market": -0.0807874403619816,
            "vs_sector": 0.11734398367962151,
            "vs_peers": 0.10323691682394387
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 69.6887159533074,
          "score_pca_percentile": 69.6887159533074,
          "rank_pca": 780,
          "total": 2570,
          "adv_notional_sgd": 2525128.0,
          "adv_volume_shares": 89300.0,
          "free_float_shares": 31858520.0,
          "turnover_ratio": 0.0028030178426367578,
          "votes": 233.0,
          "trades": 233.0,
          "spread_pct": 0.01614453716371144,
          "spread_ticks": null,
          "amihud": 8.183417320867052e-09,
          "volatility": 0.7470349878622176
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6070361177986145,
          "loadings": {
            "log_adv": 0.5056164741043646,
            "log_trades": 0.4604726020166664,
            "log_turnover": 0.4570616655455383,
            "neg_spread": 0.46276733113223634,
            "neg_amihud": 0.3073770239355957,
            "neg_vol": 0.12156216594094399
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
          "peer_median_adv": 1908392.5,
          "peer_median_score_pca": 68.57976653696498,
          "peer_median_trades": 197.0,
          "peer_median_volatility": 0.6022123686321503,
          "peer_median_spread_pct": 0.013729785237570012,
          "peer_median_spread_ticks": 2.6856516976998903,
          "peer_median_amihud": 1.1577366736624766e-08,
          "peer_median_turnover_ratio": 0.0024775327078200094,
          "target_vs_peer": {
            "score_pca_delta": 1.11,
            "adv_delta_pct": 32.3,
            "trades_delta_pct": 18.27,
            "volatility_delta_pct": -24.05,
            "spread_pct_delta_pct": -17.59,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 29.32,
            "turnover_ratio_delta_pct": 13.14
          }
        },
        "peer_liquidity": [
          {
            "ticker": "3378",
            "score_pca": 69.6887159533074,
            "rank_pca": 780,
            "adv": 2525128.0,
            "trades": 233.0,
            "volatility": 0.7470349878622176,
            "spread_pct": 0.01614453716371144,
            "spread_ticks": null,
            "amihud": 8.183417320867052e-09,
            "turnover_ratio": 0.0028030178426367578,
            "is_target": true
          },
          {
            "ticker": "1349",
            "score_pca": 73.2295719844358,
            "rank_pca": 689,
            "adv": 3054170.0,
            "trades": 276.0,
            "volatility": 0.2633511376509089,
            "spread_pct": 0.006756418239466396,
            "spread_ticks": 1.9098786828422878,
            "amihud": 3.6819042735264708e-09,
            "turnover_ratio": 0.00435334095428992,
            "is_target": false
          },
          {
            "ticker": "2126",
            "score_pca": 69.88326848249027,
            "rank_pca": 775,
            "adv": 1925385.0,
            "trades": 221.0,
            "volatility": 0.6552330899318841,
            "spread_pct": 0.012550840340099461,
            "spread_ticks": 2.6856516976998903,
            "amihud": 1.388518617257619e-08,
            "turnover_ratio": 0.0025396950512538313,
            "is_target": false
          },
          {
            "ticker": "3681",
            "score_pca": 71.71206225680933,
            "rank_pca": 728,
            "adv": 5261490.0,
            "trades": 248.0,
            "volatility": 0.6005764162145226,
            "spread_pct": 0.013624041799067064,
            "spread_ticks": 2.1563829787234043,
            "amihud": 3.61207941273226e-09,
            "turnover_ratio": 0.003564748323451812,
            "is_target": false
          },
          {
            "ticker": "1228",
            "score_pca": 66.61478599221789,
            "rank_pca": 859,
            "adv": 1868390.0,
            "trades": 96.0,
            "volatility": 0.603848321049778,
            "spread_pct": 0.01654414409230194,
            "spread_ticks": 4.291878172588833,
            "amihud": 1.0297416858656443e-08,
            "turnover_ratio": 0.002415370364386188,
            "is_target": false
          },
          {
            "ticker": "2509",
            "score_pca": 71.1284046692607,
            "rank_pca": 743,
            "adv": 3709134.0000000005,
            "trades": 319.0,
            "volatility": 0.6315984864035639,
            "spread_pct": 0.01383552867607296,
            "spread_ticks": null,
            "amihud": 5.366118687212128e-09,
            "turnover_ratio": 0.002029867782745173,
            "is_target": false
          },
          {
            "ticker": "6628",
            "score_pca": 67.04280155642023,
            "rank_pca": 848,
            "adv": 1891400.0,
            "trades": 138.0,
            "volatility": 0.7630590078285703,
            "spread_pct": 0.01825363308905726,
            "spread_ticks": 4.186071817192601,
            "amihud": 1.6365846050413948e-08,
            "turnover_ratio": 0.0029027691667164552,
            "is_target": false
          },
          {
            "ticker": "3839",
            "score_pca": 55.91439688715953,
            "rank_pca": 1134,
            "adv": 482625.0,
            "trades": 28.0,
            "volatility": 0.5470586038782246,
            "spread_pct": 0.030128722825639078,
            "spread_ticks": 21.479674796747968,
            "amihud": 2.9532418751239933e-08,
            "turnover_ratio": 0.0013402100290934294,
            "is_target": false
          },
          {
            "ticker": "2137",
            "score_pca": 67.2762645914397,
            "rank_pca": 842,
            "adv": 1213120.0,
            "trades": 173.0,
            "volatility": 0.5674862552232571,
            "spread_pct": 0.013588995414756118,
            "spread_ticks": 1.9347181008902077,
            "amihud": 1.285731661459309e-08,
            "turnover_ratio": 0.001372950304229705,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Biotechnology",
          "sector_count": 75,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7196460852017147,
              "median": 0.5812854371406497,
              "min": 0.0,
              "max": 16.15738820474862,
              "p5": 0.2214873247536304,
              "p95": 1.6584354579762783,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59017183.756557405,
              "median": 219744.0,
              "min": 0.0,
              "max": 12307843080.0,
              "p5": 0.0,
              "p95": 234558909.2199998,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04313643407672629,
              "median": 0.02876493065556507,
              "min": 0.0005681922931204329,
              "max": 0.586235634471959,
              "p5": 0.0014449401568078955,
              "p95": 0.1331169221520889,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038550792784433022,
              "median": 0.0008788385287665518,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.014650219493673951,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.939396995815482e-07,
              "median": 4.819284733514202e-08,
              "min": 0.0,
              "max": 6.966637265889136e-05,
              "p5": 4.956422516864857e-11,
              "p95": 3.4821132579018315e-06,
              "count": 2570
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1070.2317120622567,
              "median": 20.0,
              "min": 0.0,
              "max": 68317.0,
              "p5": 0.0,
              "p95": 5871.399999999998,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.662708468371809,
              "median": 0.5865083735467184,
              "min": 0.2633511376509089,
              "max": 1.8231005018359154,
              "p5": 0.40683376997072646,
              "p95": 1.127539067443391,
              "count": 75
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 84453390.4354,
              "median": 11953872.0,
              "min": 0.0,
              "max": 986086447.16,
              "p5": 52900.00000000001,
              "p95": 492077006.3999999,
              "count": 75
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.015717553583458988,
              "median": 0.006688175745089656,
              "min": 0.0007360441342180751,
              "max": 0.11890985324947594,
              "p5": 0.0013075191280164703,
              "p95": 0.053696058490408684,
              "count": 75
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006046069440244989,
              "median": 0.00435334095428992,
              "min": 0.0,
              "max": 0.030777267799749965,
              "p5": 3.3678948547284343e-05,
              "p95": 0.01795117825842709,
              "count": 75
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1444070125663485e-07,
              "median": 1.9503353918635834e-09,
              "min": 2.124449742124862e-11,
              "max": 5.737454100367195e-06,
              "p5": 4.0447681075606446e-11,
              "p95": 1.9863592646101923e-07,
              "count": 75
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1911.0,
              "median": 586.0,
              "min": 0.0,
              "max": 16295.0,
              "p5": 5.1000000000000005,
              "p95": 8764.899999999994,
              "count": 75
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2425714.25,
              "median": 1908392.5,
              "min": 482625.0,
              "max": 5261490.0,
              "p5": 738298.25,
              "p95": 4718165.399999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 187.375,
              "median": 197.0,
              "min": 28.0,
              "max": 319.0,
              "p5": 51.8,
              "p95": 303.95,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5790264147725888,
              "median": 0.6022123686321503,
              "min": 0.2633511376509089,
              "max": 0.7630590078285703,
              "p5": 0.3626487508304694,
              "p95": 0.72531993656473,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.015660290559557533,
              "median": 0.013729785237570012,
              "min": 0.006756418239466396,
              "max": 0.030128722825639078,
              "p5": 0.00878446597468797,
              "p95": 0.025972441417835435,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.520608035240741,
              "median": 2.6856516976998903,
              "min": 1.9098786828422878,
              "max": 21.479674796747968,
              "p5": 1.9173305082566638,
              "p95": 16.323335809500215,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1949785852618807e-08,
              "median": 1.1577366736624766e-08,
              "min": 3.61207941273226e-09,
              "max": 2.9532418751239933e-08,
              "p5": 3.636518114010234e-09,
              "p95": 2.4924118305950832e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002564868997020814,
              "median": 0.0024775327078200094,
              "min": 0.0013402100290934294,
              "max": 0.00435334095428992,
              "p5": 0.0013516691253911259,
              "p95": 0.004077333533496582,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.8436724565756815,
            "market": 0.024009398025444995,
            "sector": -0.21011917073107977,
            "peers": -0.22225560465788718,
            "vs_market": 0.8196630585502365,
            "vs_sector": 1.0537916273067611,
            "vs_peers": 1.0659280612335686
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks average, with thin buy-side support shaping the tape today. Bid depth is only 0.43x ask depth and the spread is 14 ticks, which can make immediate access less even.",
        "market_comparison": "The stock rose 0.7% while peers fell 0.4%, so price held up better on the day even as displayed liquidity stayed uneven."
      },
      "1w": {
        "liquidity": "1W score 67.1 vs peer median 66.3 (+0.8 pts).",
        "market_comparison": "The stock fell 3.9% compared with a 7.5% drop for peers, so relative performance was better even as trading activity pulled back."
      },
      "30d": {
        "liquidity": "Monthly tradability is average for its size. The 1M score of 69.6 is close to the peer range, which suggests access is broadly comparable rather than clearly strong.",
        "market_comparison": "The stock returned -6.4% compared with -16.7% for peers and +1.7% for the market, which shows relative resilience against peers but weaker momentum than the broader market."
      },
      "3m": {
        "liquidity": "Three-month tradability is mixed but slightly ahead of peers. The liquidity score of 69.7 is 1.1 points above the peer median, which supports average access rather than a clear liquidity advantage.",
        "market_comparison": "Primary average daily volume is HK$2.5M compared with a peer median of HK$1.9M, which supports peer-relative access even though the recent slowdown matters more for current trading conditions."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "regime_method": "hmm_jump_aware",
      "estimation_window_days": 95,
      "reporting_window_days": 63,
      "available_history_days": 95,
      "n_regimes": 3,
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9960005013601791,
      "current_regime_probability_display": "99.6%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.24726459653402233,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "24.7%",
          "display_range": null,
          "display_text": "24.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
          "kind": "share_pct",
          "value_pct": 24.7,
          "plain_english": "Market explains about 24.7% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.6857820152211707,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "68.6%",
          "display_range": null,
          "display_text": "68.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
          "kind": "share_pct",
          "value_pct": 68.6,
          "plain_english": "Sector explains about 68.6% of price moves in the current state."
        },
        "company_share": {
          "median": 0.06695338824480705,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "6.7%",
          "display_range": null,
          "display_text": "6.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
          "kind": "share_pct",
          "value_pct": 6.7,
          "plain_english": "Company-specific explains about 6.7% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.13011236470911475,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.13",
          "display_range": null,
          "display_text": "-0.13",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.13% stock move in the opposite direction in this state.",
          "value_num": -0.13
        },
        "beta_stock_lag": {
          "median": 0.21384730798674104,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.21",
          "display_range": null,
          "display_text": "0.21",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
          "kind": "lag_beta",
          "value_num": 0.21
        },
        "beta_sector": {
          "median": -0.37746496697742976,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.38",
          "display_range": null,
          "display_text": "-0.38",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.38% stock move in the opposite direction in this state.",
          "value_num": -0.38
        },
        "beta_market_lag": {
          "median": -3.038112428658222,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-3.04",
          "display_range": null,
          "display_text": "-3.04",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
          "kind": "lag_beta",
          "value_num": -3.04
        },
        "beta_sector_lag": {
          "median": 3.672576882578532,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.67",
          "display_range": null,
          "display_text": "3.67",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
          "kind": "lag_beta",
          "value_num": 3.67
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 95 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-29 to 2025-12-31",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.8466347181525152,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "84.7%",
            "display_range": null,
            "display_text": "84.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
            "kind": "share_pct",
            "value_pct": 84.7,
            "plain_english": "Sector explains about 84.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15195002425346496,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.2%",
              "display_range": null,
              "display_text": "15.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 15.2,
              "plain_english": "Market explains about 15.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.8466347181525152,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "84.7%",
              "display_range": null,
              "display_text": "84.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 84.7,
              "plain_english": "Sector explains about 84.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.0014152575940196475,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "0.1%",
              "display_range": null,
              "display_text": "0.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 0.1,
              "plain_english": "Company-specific explains about 0.1% of price moves in the current state."
            }
          },
          "summary": "Dec: Still clearly sector-driven, though based on only 3 trading days."
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
            "median": 0.47088651529062353,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.1%",
            "display_range": null,
            "display_text": "47.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.1,
            "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3741554855044681,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.4%",
              "display_range": null,
              "display_text": "37.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 37.4,
              "plain_english": "Market explains about 37.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.15495799920490846,
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
              "plain_english": "Sector explains about 15.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47088651529062353,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.42129282693609826,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.1%",
            "display_range": null,
            "display_text": "42.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 42.1,
            "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.30744870907444666,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.7%",
              "display_range": null,
              "display_text": "30.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 30.7,
              "plain_english": "Market explains about 30.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2712584639894551,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.1%",
              "display_range": null,
              "display_text": "27.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 27.1,
              "plain_english": "Sector explains about 27.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.42129282693609826,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.1%",
              "display_range": null,
              "display_text": "42.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 42.1,
              "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4483462463959706,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.8%",
            "display_range": null,
            "display_text": "44.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 44.8,
            "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19747192322948803,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.7%",
              "display_range": null,
              "display_text": "19.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 19.7,
              "plain_english": "Market explains about 19.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3541818303745414,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.4%",
              "display_range": null,
              "display_text": "35.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.4,
              "plain_english": "Sector explains about 35.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4483462463959706,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.8%",
              "display_range": null,
              "display_text": "44.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.8,
              "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though company-driven still has the largest share."
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
            "median": 0.58121664602,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.1%",
            "display_range": null,
            "display_text": "58.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 58.1,
            "plain_english": "Company-specific explains about 58.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.16168929164829418,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.2%",
              "display_range": null,
              "display_text": "16.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 16.2,
              "plain_english": "Market explains about 16.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2570940623317058,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.7%",
              "display_range": null,
              "display_text": "25.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 25.7,
              "plain_english": "Sector explains about 25.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.58121664602,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.1%",
              "display_range": null,
              "display_text": "58.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 58.1,
              "plain_english": "Company-specific explains about 58.1% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5425794850572682,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.3%",
            "display_range": null,
            "display_text": "54.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
            "kind": "share_pct",
            "value_pct": 54.3,
            "plain_english": "Sector explains about 54.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.209723546649538,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.0%",
              "display_range": null,
              "display_text": "21.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 21.0,
              "plain_english": "Market explains about 21.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5425794850572682,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.3%",
              "display_range": null,
              "display_text": "54.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 54.3,
              "plain_english": "Sector explains about 54.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.24769696829319374,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.8%",
              "display_range": null,
              "display_text": "24.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 24.8,
              "plain_english": "Company-specific explains about 24.8% of price moves in the current state."
            }
          },
          "summary": "May: Mostly sector-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.32246915538565973,
          "expected_duration_days": 7.541267267923268,
          "current_probability": 0.9960005013601791,
          "current_probability_display": "99.6%",
          "current_probability_basis": "filtered",
          "n_days_effective": 30.634569761637675,
          "volatility": {
            "median": 0.009917040252590114,
            "low": 0.009917040252590114,
            "high": 0.009917040252590114
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.2552459393059597,
          "jump_rate": 0.13057143876784877,
          "risk_score": 0.1019941894904785,
          "metrics": {
            "rolling_vol_10d": 0.019923808365743628,
            "downside_vol_10d": 0.007928784492348394,
            "drawdown_21d": 0.03618112069861169,
            "amihud_stress": 0.46527832042251777,
            "spread_rel": 136.11778477646888,
            "spread_ticks": 0.0,
            "log_notional": 14.023912261776161,
            "log_trade_count": 4.620739681839195
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.43490674399338053,
          "expected_duration_days": 3.4699268006563755,
          "current_probability": 0.003999498639820886,
          "current_probability_display": "0.4%",
          "current_probability_basis": "filtered",
          "n_days_effective": 41.31614067937115,
          "volatility": {
            "median": 0.029782557787950262,
            "low": 0.029782557787950262,
            "high": 0.029782557787950262
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.2667846282615796,
          "jump_rate": 0.1221905630620906,
          "risk_score": 0.5157226291290061,
          "metrics": {
            "rolling_vol_10d": 0.044453834079429835,
            "downside_vol_10d": 0.01887615924274839,
            "drawdown_21d": 0.04823320837021077,
            "amihud_stress": 0.6730747465060962,
            "spread_rel": 179.5907059970687,
            "spread_ticks": 0.0,
            "log_notional": 14.647980316863244,
            "log_trade_count": 5.304415648253315
          }
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "pct_time": 0.24262410062095968,
          "expected_duration_days": 2.313714009477092,
          "current_probability": 6.5023205614163e-28,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 23.04928955899117,
          "volatility": {
            "median": 0.06443943253153202,
            "low": 0.06443943253153202,
            "high": 0.06443943253153202
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.37537375064614914,
          "jump_rate": 0.30159531118009375,
          "risk_score": 0.8,
          "metrics": {
            "rolling_vol_10d": 0.06286173519999189,
            "downside_vol_10d": 0.03179028794031715,
            "drawdown_21d": 0.0033124750069691367,
            "amihud_stress": 0.5598547007672391,
            "spread_rel": 103.31546620112984,
            "spread_ticks": 0.0,
            "log_notional": 15.667667356569892,
            "log_trade_count": 6.2373331126775104
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.867396292364084,
            0.09868035364952835,
            0.033923353986387704
          ],
          [
            0.09493324050341374,
            0.7118094826061349,
            0.19325727689045138
          ],
          [
            0.04358572551007277,
            0.3886198089267453,
            0.5677944655631818
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            26.0,
            3.0,
            1.0
          ],
          [
            4.0,
            29.0,
            8.0
          ],
          [
            1.0,
            9.0,
            13.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9960005013601791,
          "probability_display": "99.6%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 0.003999498639820886,
          "probability_display": "0.4%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "probability": 6.5023205614163e-28,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.255292088276743,
        "current_score": 0.6744907594765952,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 3,
        "criterion": "bic_with_min_state_support",
        "bic": 4778.53619963381,
        "loglik": -2084.1583480796685,
        "n_params": 134,
        "bic_delta_vs_next_best": 175.47254505305864,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 4954.008744686868,
            "loglik": -2278.910727558811,
            "n_params": 87,
            "converged": true,
            "iterations": 25,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4954.008744686868,
                "loglik": -2278.910727558811,
                "n_params": 87,
                "converged": true,
                "iterations": 25
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4954.008752930738,
                "loglik": -2278.910731680746,
                "n_params": 87,
                "converged": true,
                "iterations": 25
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4954.008756951568,
                "loglik": -2278.9107336911607,
                "n_params": 87,
                "converged": true,
                "iterations": 24
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 4778.53619963381,
            "loglik": -2084.1583480796685,
            "n_params": 134,
            "converged": true,
            "iterations": 20,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4778.53619963381,
                "loglik": -2084.1583480796685,
                "n_params": 134,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4813.3818386994035,
                "loglik": -2101.5811676124654,
                "n_params": 134,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4778.536227581361,
                "loglik": -2084.1583620534443,
                "n_params": 134,
                "converged": true,
                "iterations": 18
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
              "bic": 4778.53619963381,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4813.3818386994035,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4778.536227581361,
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
        "history_used_days": 95,
        "n_features": 21,
        "candidate_states": [
          2,
          3
        ],
        "selected_states": 3,
        "bic_delta_vs_next_best": 175.47254505305864,
        "state_count_interpretation": "95 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 175.47 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 134,
          "observations_per_parameter": 0.7089552238805971,
          "parameter_pressure_label": "underidentified_pressure"
        },
        "state_occupancy": {
          "min_effective_days_required": 3.0,
          "min_effective_days_observed": 23.04928955899117,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 30.634569761637675,
              "pct_time": 0.32246915538565973,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 41.31614067937115,
              "pct_time": 0.43490674399338053,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "effective_days": 23.04928955899117,
              "pct_time": 0.24262410062095968,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.867396292364084,
            0.7118094826061349,
            0.5677944655631818
          ],
          "expected_duration_days": [
            7.541267267923268,
            3.4699268006563755,
            2.313714009477092
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [],
          "warnings": []
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
              "bic": 4778.53619963381,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4813.3818386994035,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4778.536227581361,
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
            "risk_score": 0.1019941894904785,
            "jump_probability": 0.2552459393059597,
            "jump_rate": 0.13057143876784877,
            "rolling_vol_10d": 0.019923808365743628,
            "downside_vol_10d": 0.007928784492348394,
            "drawdown_21d": 0.03618112069861169,
            "amihud_stress": 0.46527832042251777,
            "spread_rel": 136.11778477646888,
            "spread_ticks": 0.0,
            "log_notional": 14.023912261776161,
            "log_trade_count": 4.620739681839195
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.5157226291290061,
            "jump_probability": 0.2667846282615796,
            "jump_rate": 0.1221905630620906,
            "rolling_vol_10d": 0.044453834079429835,
            "downside_vol_10d": 0.01887615924274839,
            "drawdown_21d": 0.04823320837021077,
            "amihud_stress": 0.6730747465060962,
            "spread_rel": 179.5907059970687,
            "spread_ticks": 0.0,
            "log_notional": 14.647980316863244,
            "log_trade_count": 5.304415648253315
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8,
            "jump_probability": 0.37537375064614914,
            "jump_rate": 0.30159531118009375,
            "rolling_vol_10d": 0.06286173519999189,
            "downside_vol_10d": 0.03179028794031715,
            "drawdown_21d": 0.0033124750069691367,
            "amihud_stress": 0.5598547007672391,
            "spread_rel": 103.31546620112984,
            "spread_ticks": 0.0,
            "log_notional": 15.667667356569892,
            "log_trade_count": 6.2373331126775104
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
        "jump_score"
      ],
      "smoothed_probability_tail": [
        {
          "trade_date": "2026-05-07",
          "state": 1,
          "probabilities": [
            2.8437594204957393e-07,
            0.9999997125249541,
            3.0991038717219525e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.051109876934334e-06,
            0.9999979432214916,
            5.6686315061206636e-09
          ],
          "jump_probability": 0.11719564806300317,
          "jump_score": 0.49412273027588594
        },
        {
          "trade_date": "2026-05-08",
          "state": 1,
          "probabilities": [
            2.9393745938608854e-13,
            0.9996865782864524,
            0.00031342171325357695
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.5635081307367026e-14,
            0.9993301358023631,
            0.0006698641976012197
          ],
          "jump_probability": 0.3423143405956616,
          "jump_score": 1.6821759509259522
        },
        {
          "trade_date": "2026-05-11",
          "state": 0,
          "probabilities": [
            0.9009416784150074,
            0.09905831269574733,
            8.889245208914318e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.7866244251964124,
            0.2133755382263987,
            3.657718888506477e-08
          ],
          "jump_probability": 0.10143975893598821,
          "jump_score": 0.3531924904617123
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.8890482401217769,
            0.11095170429697429,
            5.558124887602652e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9822792423930327,
            0.01772074134547032,
            1.626149697522843e-08
          ],
          "jump_probability": 0.12875201523750512,
          "jump_score": 0.587357863235687
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.03706556694788914,
            0.962934433047687,
            4.423898068442721e-12
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.21731668376399818,
            0.7826833162294157,
            6.586175619964979e-12
          ],
          "jump_probability": 0.15413054081413255,
          "jump_score": 0.7695085798549264
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            1.2214729654904424e-09,
            0.9999999987785271,
            9.792085896080905e-24
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            8.810832154801283e-09,
            0.9999999911891679,
            1.793552305445608e-23
          ],
          "jump_probability": 0.26710985499688994,
          "jump_score": 1.3723166916987588
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            3.3682047151444695e-14,
            0.9999999999999664,
            3.3481491668027077e-41
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.42958194506751e-13,
            0.9999999999997571,
            6.132585811030344e-41
          ],
          "jump_probability": 0.3463755125639131,
          "jump_score": 1.6978178040481284
        },
        {
          "trade_date": "2026-05-18",
          "state": 1,
          "probabilities": [
            1.9478893734295238e-18,
            1.0,
            1.8144614192315752e-24
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.5842380254916644e-19,
            1.0,
            3.8235040730093395e-24
          ],
          "jump_probability": 0.44544358316843713,
          "jump_score": 2.059480049181965
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.8222625069418638,
            0.17773749305813621,
            5.978996304804286e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.3408127197109454,
            0.6591872802890545,
            4.810726560827863e-28
          ],
          "jump_probability": 0.09792665871481301,
          "jump_score": 0.31915042751916783
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9960005013601791,
            0.003999498639820886,
            6.5023205614163e-28
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9960005013601791,
            0.003999498639820886,
            6.5023205614163e-28
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        }
      ],
      "methodology": {
        "estimation_window_days": 95,
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
        "market_link_display": "-0.13",
        "sector_link_display": "-0.38",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.13% stock move in the opposite direction in this state. This is a point estimate from 95 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.38% stock move in the opposite direction in this state. This is a point estimate from 95 trading days.",
        "stock_persistence_display": "0.21",
        "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
        "history_limited_note": "Read is based on 95 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Calm / Liquid",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 68.6,
        "driver_share_display": "68.6%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.6,
        "confidence_display": "99.6%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 95 trading days relative to the 252-day target.",
        "history_days": 95,
        "history_limited": true,
        "volatility_label": "Calm / Liquid",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 25.5,
        "jump_risk_score": 0.67,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.867396292364084,
        "effective_days": 30.6,
        "persistence_note": "This state looks more persistent, with a typical run length of about 7.5 days.",
        "expected_duration_days": 7.5
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
          "pct_time": 0.32246915538565973,
          "expected_duration_days": 7.541267267923268,
          "current_probability": 0.9960005013601791,
          "current_probability_display": "99.6%",
          "current_probability_basis": "filtered",
          "n_days_effective": 30.634569761637675,
          "volatility": {
            "median": 0.009917040252590114,
            "low": 0.009917040252590114,
            "high": 0.009917040252590114
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.2552459393059597,
          "jump_rate": 0.13057143876784877,
          "risk_score": 0.1019941894904785,
          "metrics": {
            "rolling_vol_10d": 0.019923808365743628,
            "downside_vol_10d": 0.007928784492348394,
            "drawdown_21d": 0.03618112069861169,
            "amihud_stress": 0.46527832042251777,
            "spread_rel": 136.11778477646888,
            "spread_ticks": 0.0,
            "log_notional": 14.023912261776161,
            "log_trade_count": 4.620739681839195
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.43490674399338053,
          "expected_duration_days": 3.4699268006563755,
          "current_probability": 0.003999498639820886,
          "current_probability_display": "0.4%",
          "current_probability_basis": "filtered",
          "n_days_effective": 41.31614067937115,
          "volatility": {
            "median": 0.029782557787950262,
            "low": 0.029782557787950262,
            "high": 0.029782557787950262
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.2667846282615796,
          "jump_rate": 0.1221905630620906,
          "risk_score": 0.5157226291290061,
          "metrics": {
            "rolling_vol_10d": 0.044453834079429835,
            "downside_vol_10d": 0.01887615924274839,
            "drawdown_21d": 0.04823320837021077,
            "amihud_stress": 0.6730747465060962,
            "spread_rel": 179.5907059970687,
            "spread_ticks": 0.0,
            "log_notional": 14.647980316863244,
            "log_trade_count": 5.304415648253315
          }
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "pct_time": 0.24262410062095968,
          "expected_duration_days": 2.313714009477092,
          "current_probability": 6.5023205614163e-28,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 23.04928955899117,
          "volatility": {
            "median": 0.06443943253153202,
            "low": 0.06443943253153202,
            "high": 0.06443943253153202
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.37537375064614914,
          "jump_rate": 0.30159531118009375,
          "risk_score": 0.8,
          "metrics": {
            "rolling_vol_10d": 0.06286173519999189,
            "downside_vol_10d": 0.03179028794031715,
            "drawdown_21d": 0.0033124750069691367,
            "amihud_stress": 0.5598547007672391,
            "spread_rel": 103.31546620112984,
            "spread_ticks": 0.0,
            "log_notional": 15.667667356569892,
            "log_trade_count": 6.2373331126775104
          }
        }
      ],
      "transitions": [
        [
          0.867396292364084,
          0.09868035364952835,
          0.033923353986387704
        ],
        [
          0.09493324050341374,
          0.7118094826061349,
          0.19325727689045138
        ],
        [
          0.04358572551007277,
          0.3886198089267453,
          0.5677944655631818
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.867396292364084,
            0.09868035364952835,
            0.033923353986387704
          ],
          [
            0.09493324050341374,
            0.7118094826061349,
            0.19325727689045138
          ],
          [
            0.04358572551007277,
            0.3886198089267453,
            0.5677944655631818
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            26.0,
            3.0,
            1.0
          ],
          [
            4.0,
            29.0,
            8.0
          ],
          [
            1.0,
            9.0,
            13.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9960005013601791,
      "current_regime_probability_display": "99.6%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9960005013601791,
          "probability_display": "99.6%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 0.003999498639820886,
          "probability_display": "0.4%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "probability": 6.5023205614163e-28,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.255292088276743,
        "current_score": 0.6744907594765952,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 3,
        "criterion": "bic_with_min_state_support",
        "bic": 4778.53619963381,
        "loglik": -2084.1583480796685,
        "n_params": 134,
        "bic_delta_vs_next_best": 175.47254505305864,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 4954.008744686868,
            "loglik": -2278.910727558811,
            "n_params": 87,
            "converged": true,
            "iterations": 25,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4954.008744686868,
                "loglik": -2278.910727558811,
                "n_params": 87,
                "converged": true,
                "iterations": 25
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4954.008752930738,
                "loglik": -2278.910731680746,
                "n_params": 87,
                "converged": true,
                "iterations": 25
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4954.008756951568,
                "loglik": -2278.9107336911607,
                "n_params": 87,
                "converged": true,
                "iterations": 24
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 4778.53619963381,
            "loglik": -2084.1583480796685,
            "n_params": 134,
            "converged": true,
            "iterations": 20,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4778.53619963381,
                "loglik": -2084.1583480796685,
                "n_params": 134,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4813.3818386994035,
                "loglik": -2101.5811676124654,
                "n_params": 134,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4778.536227581361,
                "loglik": -2084.1583620534443,
                "n_params": 134,
                "converged": true,
                "iterations": 18
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
              "bic": 4778.53619963381,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4813.3818386994035,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4778.536227581361,
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
        "history_used_days": 95,
        "n_features": 21,
        "candidate_states": [
          2,
          3
        ],
        "selected_states": 3,
        "bic_delta_vs_next_best": 175.47254505305864,
        "state_count_interpretation": "95 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 175.47 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 134,
          "observations_per_parameter": 0.7089552238805971,
          "parameter_pressure_label": "underidentified_pressure"
        },
        "state_occupancy": {
          "min_effective_days_required": 3.0,
          "min_effective_days_observed": 23.04928955899117,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 30.634569761637675,
              "pct_time": 0.32246915538565973,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 41.31614067937115,
              "pct_time": 0.43490674399338053,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "effective_days": 23.04928955899117,
              "pct_time": 0.24262410062095968,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.867396292364084,
            0.7118094826061349,
            0.5677944655631818
          ],
          "expected_duration_days": [
            7.541267267923268,
            3.4699268006563755,
            2.313714009477092
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [],
          "warnings": []
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
              "bic": 4778.53619963381,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4813.3818386994035,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4778.536227581361,
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
            "risk_score": 0.1019941894904785,
            "jump_probability": 0.2552459393059597,
            "jump_rate": 0.13057143876784877,
            "rolling_vol_10d": 0.019923808365743628,
            "downside_vol_10d": 0.007928784492348394,
            "drawdown_21d": 0.03618112069861169,
            "amihud_stress": 0.46527832042251777,
            "spread_rel": 136.11778477646888,
            "spread_ticks": 0.0,
            "log_notional": 14.023912261776161,
            "log_trade_count": 4.620739681839195
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.5157226291290061,
            "jump_probability": 0.2667846282615796,
            "jump_rate": 0.1221905630620906,
            "rolling_vol_10d": 0.044453834079429835,
            "downside_vol_10d": 0.01887615924274839,
            "drawdown_21d": 0.04823320837021077,
            "amihud_stress": 0.6730747465060962,
            "spread_rel": 179.5907059970687,
            "spread_ticks": 0.0,
            "log_notional": 14.647980316863244,
            "log_trade_count": 5.304415648253315
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8,
            "jump_probability": 0.37537375064614914,
            "jump_rate": 0.30159531118009375,
            "rolling_vol_10d": 0.06286173519999189,
            "downside_vol_10d": 0.03179028794031715,
            "drawdown_21d": 0.0033124750069691367,
            "amihud_stress": 0.5598547007672391,
            "spread_rel": 103.31546620112984,
            "spread_ticks": 0.0,
            "log_notional": 15.667667356569892,
            "log_trade_count": 6.2373331126775104
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
        "jump_score"
      ],
      "smoothed_probability_tail": [
        {
          "trade_date": "2026-05-07",
          "state": 1,
          "probabilities": [
            2.8437594204957393e-07,
            0.9999997125249541,
            3.0991038717219525e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.051109876934334e-06,
            0.9999979432214916,
            5.6686315061206636e-09
          ],
          "jump_probability": 0.11719564806300317,
          "jump_score": 0.49412273027588594
        },
        {
          "trade_date": "2026-05-08",
          "state": 1,
          "probabilities": [
            2.9393745938608854e-13,
            0.9996865782864524,
            0.00031342171325357695
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            3.5635081307367026e-14,
            0.9993301358023631,
            0.0006698641976012197
          ],
          "jump_probability": 0.3423143405956616,
          "jump_score": 1.6821759509259522
        },
        {
          "trade_date": "2026-05-11",
          "state": 0,
          "probabilities": [
            0.9009416784150074,
            0.09905831269574733,
            8.889245208914318e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.7866244251964124,
            0.2133755382263987,
            3.657718888506477e-08
          ],
          "jump_probability": 0.10143975893598821,
          "jump_score": 0.3531924904617123
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.8890482401217769,
            0.11095170429697429,
            5.558124887602652e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9822792423930327,
            0.01772074134547032,
            1.626149697522843e-08
          ],
          "jump_probability": 0.12875201523750512,
          "jump_score": 0.587357863235687
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.03706556694788914,
            0.962934433047687,
            4.423898068442721e-12
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.21731668376399818,
            0.7826833162294157,
            6.586175619964979e-12
          ],
          "jump_probability": 0.15413054081413255,
          "jump_score": 0.7695085798549264
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            1.2214729654904424e-09,
            0.9999999987785271,
            9.792085896080905e-24
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            8.810832154801283e-09,
            0.9999999911891679,
            1.793552305445608e-23
          ],
          "jump_probability": 0.26710985499688994,
          "jump_score": 1.3723166916987588
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            3.3682047151444695e-14,
            0.9999999999999664,
            3.3481491668027077e-41
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.42958194506751e-13,
            0.9999999999997571,
            6.132585811030344e-41
          ],
          "jump_probability": 0.3463755125639131,
          "jump_score": 1.6978178040481284
        },
        {
          "trade_date": "2026-05-18",
          "state": 1,
          "probabilities": [
            1.9478893734295238e-18,
            1.0,
            1.8144614192315752e-24
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.5842380254916644e-19,
            1.0,
            3.8235040730093395e-24
          ],
          "jump_probability": 0.44544358316843713,
          "jump_score": 2.059480049181965
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.8222625069418638,
            0.17773749305813621,
            5.978996304804286e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.3408127197109454,
            0.6591872802890545,
            4.810726560827863e-28
          ],
          "jump_probability": 0.09792665871481301,
          "jump_score": 0.31915042751916783
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9960005013601791,
            0.003999498639820886,
            6.5023205614163e-28
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9960005013601791,
            0.003999498639820886,
            6.5023205614163e-28
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 69.7 — Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
        "text": "Liquidity Health: MODERATE",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400",
        "dot": "bg-amber-500"
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
    "liq_subtitle": "Monthly liquidity is broadly in line with peers, but recent average volume has dropped and near-term access looks thinner.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The stock has fallen over one month, underperforming the market while holding up better than peers.",
    "perf_insight": "Performance is weak in absolute terms, with a 1M return of -6.4% compared with +1.7% for the market. It has still done better than peers at -16.7%, which suggests pressure that is broad rather than stock-specific.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main driver of trading, so the tape is being led more by the broader group than by company-specific news.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 68.6% of price changes. Other influences are market 24.7%, and company-specific 6.7%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 24.7%, sector 68.6%, and company-specific 6.7%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 24.7%, sector 68.6%, and company-specific 6.7%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because sector explains 68.6% of trading, while 1W average volume is 35.5% below the 1M",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves are driving 68.6% of recent price action.",
      "Monthly change: the pattern has shifted from mostly sector in April to mostly sector-driven in May."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Conditions look balanced at a monthly level, but the recent drop in average volume and thin bid depth make the near-term market less supportive.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Dec 23, 2025 to May 20, 2026 (97 trading days • 55,578 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The clearest execution watchpoint is on the buy side, where displayed bid depth is only 0.43x ask depth and the spread is 14 ticks. That matters because selling pressure may meet a thinner book than the 3M liquidity score implies.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 48.5% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The current read is driven by weaker recent activity and a thinner bid rather than by a strong underlying improvement in trading conditions.",
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
    "intraday_insight": "Near-term trading conditions look less supportive because 1W average volume is 35.5% below the 1M average, while displayed bid depth is only 0.43x ask depth. That matters because day-to-day execution can feel weaker even though the 3M liquidity score remains close to peers.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity is not a defining feature of the current liquidity picture.",
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
    "exec_subtitle": "Liquidity is mixed for its size, with recent activity lower and the current book offering thin buy-side support.",
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
        "value": "69.7/100",
        "sub": "Peer median 68.6 (+1.1 pts)",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$2.5M",
        "sub": "Peer median HK$1.9M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "1.61%",
        "sub": "N/A ticks; peers 1.37%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is mixed for the stock’s size. The 3M liquidity score is 69.7 versus a peer median of 68.6, but 1W average volume is down 35.5% from 1M. The displayed book also shows thin buy-side support, with bid depth at 0.43x ask depth and a 14-tick spread. Sector moves still explain a meaningful part of trading, and 1M return is -6.4% versus peers at -16.7% and the market at +1.7%.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "29.370",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.38%",
        "note": "14.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.43x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.24% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-5.18% with 40.7% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-5.18% with 16.3% fill.",
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
        "value": "70",
        "suffix": "/100",
        "bar_pct": 70,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 780/2570",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Trading Cost (Spread)",
          "body": "The gap between best buy and sell prices in the selected window."
        },
        "value": "1.61",
        "suffix": "%",
        "bar_pct": 16,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "1.61% vs peers 1.37%",
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
        "value": "2.5M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$1.9M",
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
        "value": "68.6",
        "suffix": "sector",
        "bar_pct": 69,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 24.7% • Company 6.7%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is mixed for the stock’s size, with a 3M score of 69.7 compared with the peer median of 68.6. That keeps peer-relative access broadly in line with peers rather than clearly strong or weak.",
      "Recent trading activity has pulled back, with 1W average volume down 35.5% from the 1M",
      "The main execution watchpoint is thin buy-side support, with displayed bid depth at 0.43x ask depth and a 14-tick"
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
      "overall": "3M liquidity is mixed: score 69.7 vs peer median 68.6 (+1.1",
      "strengths": [
        "3M score 69.7 vs peer median 68.6 (+1.1 pts)."
      ],
      "concerns": [
        "1W average volume down -35.5% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +1.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is 84.4%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 84.4% vs market 2.4%.",
        "vs_sector": "Better than sector: 84.4% vs sector -21.0%.",
        "vs_peers": "Better than peers: 84.4% vs peers -22.2%."
      },
      "adv": {
        "insight": "ADV is HK$2.5M, better than market and peers, but worse than sector, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$2.5M vs market HK$219.7K.",
        "vs_sector": "Worse than sector: HK$2.5M vs sector HK$12.0M.",
        "vs_peers": "Better than peers: HK$2.5M vs peers HK$1.9M."
      },
      "spread": {
        "insight": "Spread is 1.61%, better than market, but worse than sector and peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 1.61% vs market 2.88%.",
        "vs_sector": "Worse than sector: 1.61% vs sector 0.67%.",
        "vs_peers": "Worse than peers: 1.61% vs peers 1.37%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.28%, better than market and peers, but worse than sector, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.28% vs market 0.09%.",
        "vs_sector": "Worse than sector: 0.28% vs sector 0.44%.",
        "vs_peers": "Better than peers: 0.28% vs peers 0.25%."
      },
      "volatility": {
        "insight": "Volatility is 74.70%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 74.70% vs market 58.13%.",
        "vs_sector": "Worse than sector: 74.70% vs sector 58.65%.",
        "vs_peers": "Worse than peers: 74.70% vs peers 60.22%."
      },
      "trades": {
        "insight": "Trades is 233, better than market and peers, but worse than sector, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 233 vs market 20.",
        "vs_sector": "Worse than sector: 233 vs sector 586.",
        "vs_peers": "Better than peers: 233 vs peers 197."
      },
      "amihud": {
        "insight": "Price impact is 8.18e-09, better than market and peers, but worse than sector, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 8.18e-09 vs market 4.82e-08.",
        "vs_sector": "Worse than sector: 8.18e-09 vs sector 1.95e-09.",
        "vs_peers": "Better than peers: 8.18e-09 vs peers 1.16e-08."
      }
    },
    "performance": {
      "overall": "Returns are mixed, with the stock down 6.4% over one month while peers fell 16.7% and the market rose 1.7%, which suggests relative resilience within the sector but weaker performance against the broader market. Liquidity only partly confirms that move because the 3M liquidity score of 69.7 is just above the peer median of 68.6, while recent average volume has dropped 35.5% from the monthly average, implying weaker near-term trading support.",
      "conclusion": "This looks mainly sector-linked, with mixed liquidity conditions reinforcing the move only in part."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock right now, accounting for 68.6% of recent price action. That means the tape is being set more by the broader group than by company-specific developments, which matters when the stock is already down 6.4% over the last month.",
      "beta": "This looks directionally clear but not fully settled, because recent average volume is down 35.5% compared with the 1M average. Lower activity can make sector-led moves feel sharper in day-to-day trading.",
      "rolling_change": "Mar: More mixed, though company-driven still has the largest share. | Apr: mostly sector. | May: Mostly sector-driven."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "Current market state is Calm / Liquid. Current-state posterior is 99.6% on a filtered basis. The market has been in this state about 32.2% of the time. Jump risk is 26% on the current read. Based on 95 trading days relative to the 252-day target.",
      "transitions": "This state looks reasonably persistent, with a typical run length of about 7.5 days, so it appears more settled than short-lived.",
      "trading_implications": "Trading conditions may be steadier than in a more volatile regime, but the recent pullback in average volume and thinner bid depth mean that stability may not translate into consistently deep liquidity."
    },
    "execution": {
      "overall": "Displayed liquidity is mixed in practice because the book is not balanced, with bid depth at 0.43x ask depth and a 14-tick spread. That matters because immediate sell-side pressure is likely to meet less visible support than the broader liquidity profile implies.",
      "concern": "The clearest stress point is the thin buy side, with materially less depth on the bid than on the ask. That matters more with 1W average volume down 35.5% from 1M, as lower recent activity can make the displayed imbalance more noticeable.",
      "peer_context": "The broader standing still looks around peer levels, with a 3M liquidity score of 69.7 compared with a peer median of 68.6. Even so, the current book suggests near-term execution conditions are weaker than that monthly comparison would indicate."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 37.9% of count and 56.7% of trade value, compared with retail-like trades at 34.9% of count and 17.0% of trade value. That gap in value matters because the larger share of money is coming from institution-like flow.",
      "institutional_gap": "",
      "peer_comparison": "The mix stands out as institution-leaning relative to peers, which supports a steadier flow profile than a retail-dominated tape."
    },
    "price_moving": {
      "overall": "Price-moving activity looks meaningful, with 48.5% of total trades moving price. That matters because a large share of trading is still setting levels rather than simply matching existing liquidity. The signal is mixed but still leans institution-like, as trade count and trade value both point in that direction. That matters because the larger share of money behind the tape is not coming from retail-like flow.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not stand out as a separate driver here. The clearer signals are a 35.5% drop in 1W average volume from the 1M average and a thinner bid side at 0.43x of ask depth, which matter more for near-term trading conditions.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short trend is not showing a clear change that alters the read-through. With the stock down 6.4% over 1M while peers are down 16.7%, the broader picture still looks more tied to general market trading conditions than to rising short pressure.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity is available mainly during the continuous session, which carries 98.7% of activity, while the open and close contribute only 0.4% and 0.9%. That matters because access depends more on steady daytime trading than on auction windows.",
      "hhi_interpretation": "Concentrated - liquidity clustered at open/close",
      "best_times": "The continuous session is clearly the best window for liquidity because almost all trading happens there. That matters because the open and close offer only a small share of daily activity.",
      "peer_ranking": "Relative to peers, the intraday profile looks anchored by the continuous session rather than by auction spikes. That matters because the stock’s liquidity appears to come from regular daytime participation."
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
        "3378",
        "1349",
        "2126",
        "3681",
        "1228",
        "2509",
        "6628",
        "3839",
        "2137"
      ],
      "scores": [
        69.6887159533074,
        73.2295719844358,
        69.88326848249027,
        71.71206225680933,
        66.61478599221789,
        71.1284046692607,
        67.04280155642023,
        55.91439688715953,
        67.2762645914397
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
        2525128.0,
        3054170.0,
        1925385.0,
        5261490.0,
        1868390.0,
        3709134.0000000005,
        1891400.0,
        482625.0,
        1213120.0
      ],
      "total": 2570
    },
    "market_comparison": {
      "sector_name": "Biotechnology",
      "sector_count": 75,
      "market_count": 2570,
      "company": {
        "volatility": 0.7470349878622176,
        "adv": 2525128.0,
        "spread_pct": 0.01614453716371144,
        "turnover_ratio": 0.0028030178426367578,
        "amihud": 8.183417320867052e-09,
        "trades": 233.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7196460852017147,
          "median": 0.5812854371406497,
          "min": 0.0,
          "max": 16.15738820474862,
          "p5": 0.2214873247536304,
          "p95": 1.6584354579762783,
          "count": 2570
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 59017183.756557405,
          "median": 219744.0,
          "min": 0.0,
          "max": 12307843080.0,
          "p5": 0.0,
          "p95": 234558909.2199998,
          "count": 2570
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04313643407672629,
          "median": 0.02876493065556507,
          "min": 0.0005681922931204329,
          "max": 0.586235634471959,
          "p5": 0.0014449401568078955,
          "p95": 0.1331169221520889,
          "count": 2570
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0038550792784433022,
          "median": 0.0008788385287665518,
          "min": 0.0,
          "max": 0.38612653752209847,
          "p5": 0.0,
          "p95": 0.014650219493673951,
          "count": 2554
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.939396995815482e-07,
          "median": 4.819284733514202e-08,
          "min": 0.0,
          "max": 6.966637265889136e-05,
          "p5": 4.956422516864857e-11,
          "p95": 3.4821132579018315e-06,
          "count": 2570
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1070.2317120622567,
          "median": 20.0,
          "min": 0.0,
          "max": 68317.0,
          "p5": 0.0,
          "p95": 5871.399999999998,
          "count": 2570
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.662708468371809,
          "median": 0.5865083735467184,
          "min": 0.2633511376509089,
          "max": 1.8231005018359154,
          "p5": 0.40683376997072646,
          "p95": 1.127539067443391,
          "count": 75
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 84453390.4354,
          "median": 11953872.0,
          "min": 0.0,
          "max": 986086447.16,
          "p5": 52900.00000000001,
          "p95": 492077006.3999999,
          "count": 75
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.015717553583458988,
          "median": 0.006688175745089656,
          "min": 0.0007360441342180751,
          "max": 0.11890985324947594,
          "p5": 0.0013075191280164703,
          "p95": 0.053696058490408684,
          "count": 75
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.006046069440244989,
          "median": 0.00435334095428992,
          "min": 0.0,
          "max": 0.030777267799749965,
          "p5": 3.3678948547284343e-05,
          "p95": 0.01795117825842709,
          "count": 75
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.1444070125663485e-07,
          "median": 1.9503353918635834e-09,
          "min": 2.124449742124862e-11,
          "max": 5.737454100367195e-06,
          "p5": 4.0447681075606446e-11,
          "p95": 1.9863592646101923e-07,
          "count": 75
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1911.0,
          "median": 586.0,
          "min": 0.0,
          "max": 16295.0,
          "p5": 5.1000000000000005,
          "p95": 8764.899999999994,
          "count": 75
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 2425714.25,
          "median": 1908392.5,
          "min": 482625.0,
          "max": 5261490.0,
          "p5": 738298.25,
          "p95": 4718165.399999999,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 187.375,
          "median": 197.0,
          "min": 28.0,
          "max": 319.0,
          "p5": 51.8,
          "p95": 303.95,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5790264147725888,
          "median": 0.6022123686321503,
          "min": 0.2633511376509089,
          "max": 0.7630590078285703,
          "p5": 0.3626487508304694,
          "p95": 0.72531993656473,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.015660290559557533,
          "median": 0.013729785237570012,
          "min": 0.006756418239466396,
          "max": 0.030128722825639078,
          "p5": 0.00878446597468797,
          "p95": 0.025972441417835435,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 5.520608035240741,
          "median": 2.6856516976998903,
          "min": 1.9098786828422878,
          "max": 21.479674796747968,
          "p5": 1.9173305082566638,
          "p95": 16.323335809500215,
          "count": 7
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.1949785852618807e-08,
          "median": 1.1577366736624766e-08,
          "min": 3.61207941273226e-09,
          "max": 2.9532418751239933e-08,
          "p5": 3.636518114010234e-09,
          "p95": 2.4924118305950832e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002564868997020814,
          "median": 0.0024775327078200094,
          "min": 0.0013402100290934294,
          "max": 0.00435334095428992,
          "p5": 0.0013516691253911259,
          "p95": 0.004077333533496582,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.03880983182406228,
        "market": -0.016958849694274747,
        "sector": -0.0608289715983068,
        "peers": -0.07502829497873031
      },
      {
        "horizon": "1M",
        "stock": -0.06423173803526472,
        "market": 0.01655570232671688,
        "sector": -0.18157572171488623,
        "peers": -0.1674686548592086
      },
      {
        "horizon": "3M",
        "stock": 0.8436724565756815,
        "market": 0.024009398025444995,
        "sector": -0.21011917073107977,
        "peers": -0.22225560465788718
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
      "share_market": 0.24726459653402233,
      "share_sector": 0.6857820152211707,
      "share_idio": 0.06695338824480705,
      "beta_market": -0.13011236470911475,
      "beta_sector": -0.37746496697742976,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 95,
        "reporting_window_days": 63,
        "available_history_days": 95,
        "n_regimes": 3,
        "current_regime": 0,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9960005013601791,
        "current_regime_probability_display": "99.6%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.24726459653402233,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "24.7%",
            "display_range": null,
            "display_text": "24.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
            "kind": "share_pct",
            "value_pct": 24.7,
            "plain_english": "Market explains about 24.7% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.6857820152211707,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.6%",
            "display_range": null,
            "display_text": "68.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
            "kind": "share_pct",
            "value_pct": 68.6,
            "plain_english": "Sector explains about 68.6% of price moves in the current state."
          },
          "company_share": {
            "median": 0.06695338824480705,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "6.7%",
            "display_range": null,
            "display_text": "6.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
            "kind": "share_pct",
            "value_pct": 6.7,
            "plain_english": "Company-specific explains about 6.7% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.13011236470911475,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.13",
            "display_range": null,
            "display_text": "-0.13",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.13% stock move in the opposite direction in this state.",
            "value_num": -0.13
          },
          "beta_stock_lag": {
            "median": 0.21384730798674104,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.21",
            "display_range": null,
            "display_text": "0.21",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
            "kind": "lag_beta",
            "value_num": 0.21
          },
          "beta_sector": {
            "median": -0.37746496697742976,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.38",
            "display_range": null,
            "display_text": "-0.38",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.38% stock move in the opposite direction in this state.",
            "value_num": -0.38
          },
          "beta_market_lag": {
            "median": -3.038112428658222,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-3.04",
            "display_range": null,
            "display_text": "-3.04",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
            "kind": "lag_beta",
            "value_num": -3.04
          },
          "beta_sector_lag": {
            "median": 3.672576882578532,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.67",
            "display_range": null,
            "display_text": "3.67",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
            "kind": "lag_beta",
            "value_num": 3.67
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 95 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-29 to 2025-12-31",
            "n_obs": 3,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.8466347181525152,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "84.7%",
              "display_range": null,
              "display_text": "84.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 84.7,
              "plain_english": "Sector explains about 84.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15195002425346496,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.2%",
                "display_range": null,
                "display_text": "15.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 15.2,
                "plain_english": "Market explains about 15.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.8466347181525152,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "84.7%",
                "display_range": null,
                "display_text": "84.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 84.7,
                "plain_english": "Sector explains about 84.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.0014152575940196475,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "0.1%",
                "display_range": null,
                "display_text": "0.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 0.1,
                "plain_english": "Company-specific explains about 0.1% of price moves in the current state."
              }
            },
            "summary": "Dec: Still clearly sector-driven, though based on only 3 trading days."
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
              "median": 0.47088651529062353,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3741554855044681,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.4%",
                "display_range": null,
                "display_text": "37.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 37.4,
                "plain_english": "Market explains about 37.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.15495799920490846,
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
                "plain_english": "Sector explains about 15.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47088651529062353,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.1%",
                "display_range": null,
                "display_text": "47.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.1,
                "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.42129282693609826,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.1%",
              "display_range": null,
              "display_text": "42.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 42.1,
              "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.30744870907444666,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.7%",
                "display_range": null,
                "display_text": "30.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 30.7,
                "plain_english": "Market explains about 30.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2712584639894551,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.1%",
                "display_range": null,
                "display_text": "27.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 27.1,
                "plain_english": "Sector explains about 27.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.42129282693609826,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.1%",
                "display_range": null,
                "display_text": "42.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 42.1,
                "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4483462463959706,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.8%",
              "display_range": null,
              "display_text": "44.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.8,
              "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19747192322948803,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.7%",
                "display_range": null,
                "display_text": "19.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 19.7,
                "plain_english": "Market explains about 19.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3541818303745414,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.4%",
                "display_range": null,
                "display_text": "35.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.4,
                "plain_english": "Sector explains about 35.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4483462463959706,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.8%",
                "display_range": null,
                "display_text": "44.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 44.8,
                "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though company-driven still has the largest share."
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
              "median": 0.58121664602,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.1%",
              "display_range": null,
              "display_text": "58.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 58.1,
              "plain_english": "Company-specific explains about 58.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.16168929164829418,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.2%",
                "display_range": null,
                "display_text": "16.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 16.2,
                "plain_english": "Market explains about 16.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2570940623317058,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.7%",
                "display_range": null,
                "display_text": "25.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 25.7,
                "plain_english": "Sector explains about 25.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.58121664602,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.1%",
                "display_range": null,
                "display_text": "58.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 58.1,
                "plain_english": "Company-specific explains about 58.1% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5425794850572682,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.3%",
              "display_range": null,
              "display_text": "54.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 54.3,
              "plain_english": "Sector explains about 54.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.209723546649538,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.0%",
                "display_range": null,
                "display_text": "21.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 21.0,
                "plain_english": "Market explains about 21.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5425794850572682,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.3%",
                "display_range": null,
                "display_text": "54.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 54.3,
                "plain_english": "Sector explains about 54.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.24769696829319374,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.8%",
                "display_range": null,
                "display_text": "24.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 24.8,
                "plain_english": "Company-specific explains about 24.8% of price moves in the current state."
              }
            },
            "summary": "May: Mostly sector-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.32246915538565973,
            "expected_duration_days": 7.541267267923268,
            "current_probability": 0.9960005013601791,
            "current_probability_display": "99.6%",
            "current_probability_basis": "filtered",
            "n_days_effective": 30.634569761637675,
            "volatility": {
              "median": 0.009917040252590114,
              "low": 0.009917040252590114,
              "high": 0.009917040252590114
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.2552459393059597,
            "jump_rate": 0.13057143876784877,
            "risk_score": 0.1019941894904785,
            "metrics": {
              "rolling_vol_10d": 0.019923808365743628,
              "downside_vol_10d": 0.007928784492348394,
              "drawdown_21d": 0.03618112069861169,
              "amihud_stress": 0.46527832042251777,
              "spread_rel": 136.11778477646888,
              "spread_ticks": 0.0,
              "log_notional": 14.023912261776161,
              "log_trade_count": 4.620739681839195
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.43490674399338053,
            "expected_duration_days": 3.4699268006563755,
            "current_probability": 0.003999498639820886,
            "current_probability_display": "0.4%",
            "current_probability_basis": "filtered",
            "n_days_effective": 41.31614067937115,
            "volatility": {
              "median": 0.029782557787950262,
              "low": 0.029782557787950262,
              "high": 0.029782557787950262
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.2667846282615796,
            "jump_rate": 0.1221905630620906,
            "risk_score": 0.5157226291290061,
            "metrics": {
              "rolling_vol_10d": 0.044453834079429835,
              "downside_vol_10d": 0.01887615924274839,
              "drawdown_21d": 0.04823320837021077,
              "amihud_stress": 0.6730747465060962,
              "spread_rel": 179.5907059970687,
              "spread_ticks": 0.0,
              "log_notional": 14.647980316863244,
              "log_trade_count": 5.304415648253315
            }
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "pct_time": 0.24262410062095968,
            "expected_duration_days": 2.313714009477092,
            "current_probability": 6.5023205614163e-28,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 23.04928955899117,
            "volatility": {
              "median": 0.06443943253153202,
              "low": 0.06443943253153202,
              "high": 0.06443943253153202
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.37537375064614914,
            "jump_rate": 0.30159531118009375,
            "risk_score": 0.8,
            "metrics": {
              "rolling_vol_10d": 0.06286173519999189,
              "downside_vol_10d": 0.03179028794031715,
              "drawdown_21d": 0.0033124750069691367,
              "amihud_stress": 0.5598547007672391,
              "spread_rel": 103.31546620112984,
              "spread_ticks": 0.0,
              "log_notional": 15.667667356569892,
              "log_trade_count": 6.2373331126775104
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.867396292364084,
              0.09868035364952835,
              0.033923353986387704
            ],
            [
              0.09493324050341374,
              0.7118094826061349,
              0.19325727689045138
            ],
            [
              0.04358572551007277,
              0.3886198089267453,
              0.5677944655631818
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              26.0,
              3.0,
              1.0
            ],
            [
              4.0,
              29.0,
              8.0
            ],
            [
              1.0,
              9.0,
              13.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 0.9960005013601791,
            "probability_display": "99.6%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 0.003999498639820886,
            "probability_display": "0.4%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "probability": 6.5023205614163e-28,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.255292088276743,
          "current_score": 0.6744907594765952,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 3,
          "criterion": "bic_with_min_state_support",
          "bic": 4778.53619963381,
          "loglik": -2084.1583480796685,
          "n_params": 134,
          "bic_delta_vs_next_best": 175.47254505305864,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 4954.008744686868,
              "loglik": -2278.910727558811,
              "n_params": 87,
              "converged": true,
              "iterations": 25,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4954.008744686868,
                  "loglik": -2278.910727558811,
                  "n_params": 87,
                  "converged": true,
                  "iterations": 25
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4954.008752930738,
                  "loglik": -2278.910731680746,
                  "n_params": 87,
                  "converged": true,
                  "iterations": 25
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4954.008756951568,
                  "loglik": -2278.9107336911607,
                  "n_params": 87,
                  "converged": true,
                  "iterations": 24
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 4778.53619963381,
              "loglik": -2084.1583480796685,
              "n_params": 134,
              "converged": true,
              "iterations": 20,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4778.53619963381,
                  "loglik": -2084.1583480796685,
                  "n_params": 134,
                  "converged": true,
                  "iterations": 20
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4813.3818386994035,
                  "loglik": -2101.5811676124654,
                  "n_params": 134,
                  "converged": true,
                  "iterations": 20
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4778.536227581361,
                  "loglik": -2084.1583620534443,
                  "n_params": 134,
                  "converged": true,
                  "iterations": 18
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
                "bic": 4778.53619963381,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 4813.3818386994035,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 4778.536227581361,
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
          "history_used_days": 95,
          "n_features": 21,
          "candidate_states": [
            2,
            3
          ],
          "selected_states": 3,
          "bic_delta_vs_next_best": 175.47254505305864,
          "state_count_interpretation": "95 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 175.47 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 134,
            "observations_per_parameter": 0.7089552238805971,
            "parameter_pressure_label": "underidentified_pressure"
          },
          "state_occupancy": {
            "min_effective_days_required": 3.0,
            "min_effective_days_observed": 23.04928955899117,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 30.634569761637675,
                "pct_time": 0.32246915538565973,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 41.31614067937115,
                "pct_time": 0.43490674399338053,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Jump / Tail Shock",
                "effective_days": 23.04928955899117,
                "pct_time": 0.24262410062095968,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.867396292364084,
              0.7118094826061349,
              0.5677944655631818
            ],
            "expected_duration_days": [
              7.541267267923268,
              3.4699268006563755,
              2.313714009477092
            ],
            "nearly_absorbing_state_ids": [],
            "fast_switching_state_ids": [],
            "warnings": []
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
                "bic": 4778.53619963381,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 4813.3818386994035,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 4778.536227581361,
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
              "risk_score": 0.1019941894904785,
              "jump_probability": 0.2552459393059597,
              "jump_rate": 0.13057143876784877,
              "rolling_vol_10d": 0.019923808365743628,
              "downside_vol_10d": 0.007928784492348394,
              "drawdown_21d": 0.03618112069861169,
              "amihud_stress": 0.46527832042251777,
              "spread_rel": 136.11778477646888,
              "spread_ticks": 0.0,
              "log_notional": 14.023912261776161,
              "log_trade_count": 4.620739681839195
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.5157226291290061,
              "jump_probability": 0.2667846282615796,
              "jump_rate": 0.1221905630620906,
              "rolling_vol_10d": 0.044453834079429835,
              "downside_vol_10d": 0.01887615924274839,
              "drawdown_21d": 0.04823320837021077,
              "amihud_stress": 0.6730747465060962,
              "spread_rel": 179.5907059970687,
              "spread_ticks": 0.0,
              "log_notional": 14.647980316863244,
              "log_trade_count": 5.304415648253315
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "risk_score": 0.8,
              "jump_probability": 0.37537375064614914,
              "jump_rate": 0.30159531118009375,
              "rolling_vol_10d": 0.06286173519999189,
              "downside_vol_10d": 0.03179028794031715,
              "drawdown_21d": 0.0033124750069691367,
              "amihud_stress": 0.5598547007672391,
              "spread_rel": 103.31546620112984,
              "spread_ticks": 0.0,
              "log_notional": 15.667667356569892,
              "log_trade_count": 6.2373331126775104
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
          "jump_score"
        ],
        "smoothed_probability_tail": [
          {
            "trade_date": "2026-05-07",
            "state": 1,
            "probabilities": [
              2.8437594204957393e-07,
              0.9999997125249541,
              3.0991038717219525e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.051109876934334e-06,
              0.9999979432214916,
              5.6686315061206636e-09
            ],
            "jump_probability": 0.11719564806300317,
            "jump_score": 0.49412273027588594
          },
          {
            "trade_date": "2026-05-08",
            "state": 1,
            "probabilities": [
              2.9393745938608854e-13,
              0.9996865782864524,
              0.00031342171325357695
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              3.5635081307367026e-14,
              0.9993301358023631,
              0.0006698641976012197
            ],
            "jump_probability": 0.3423143405956616,
            "jump_score": 1.6821759509259522
          },
          {
            "trade_date": "2026-05-11",
            "state": 0,
            "probabilities": [
              0.9009416784150074,
              0.09905831269574733,
              8.889245208914318e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.7866244251964124,
              0.2133755382263987,
              3.657718888506477e-08
            ],
            "jump_probability": 0.10143975893598821,
            "jump_score": 0.3531924904617123
          },
          {
            "trade_date": "2026-05-12",
            "state": 0,
            "probabilities": [
              0.8890482401217769,
              0.11095170429697429,
              5.558124887602652e-08
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9822792423930327,
              0.01772074134547032,
              1.626149697522843e-08
            ],
            "jump_probability": 0.12875201523750512,
            "jump_score": 0.587357863235687
          },
          {
            "trade_date": "2026-05-13",
            "state": 1,
            "probabilities": [
              0.03706556694788914,
              0.962934433047687,
              4.423898068442721e-12
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.21731668376399818,
              0.7826833162294157,
              6.586175619964979e-12
            ],
            "jump_probability": 0.15413054081413255,
            "jump_score": 0.7695085798549264
          },
          {
            "trade_date": "2026-05-14",
            "state": 1,
            "probabilities": [
              1.2214729654904424e-09,
              0.9999999987785271,
              9.792085896080905e-24
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              8.810832154801283e-09,
              0.9999999911891679,
              1.793552305445608e-23
            ],
            "jump_probability": 0.26710985499688994,
            "jump_score": 1.3723166916987588
          },
          {
            "trade_date": "2026-05-15",
            "state": 1,
            "probabilities": [
              3.3682047151444695e-14,
              0.9999999999999664,
              3.3481491668027077e-41
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.42958194506751e-13,
              0.9999999999997571,
              6.132585811030344e-41
            ],
            "jump_probability": 0.3463755125639131,
            "jump_score": 1.6978178040481284
          },
          {
            "trade_date": "2026-05-18",
            "state": 1,
            "probabilities": [
              1.9478893734295238e-18,
              1.0,
              1.8144614192315752e-24
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.5842380254916644e-19,
              1.0,
              3.8235040730093395e-24
            ],
            "jump_probability": 0.44544358316843713,
            "jump_score": 2.059480049181965
          },
          {
            "trade_date": "2026-05-19",
            "state": 0,
            "probabilities": [
              0.8222625069418638,
              0.17773749305813621,
              5.978996304804286e-29
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.3408127197109454,
              0.6591872802890545,
              4.810726560827863e-28
            ],
            "jump_probability": 0.09792665871481301,
            "jump_score": 0.31915042751916783
          },
          {
            "trade_date": "2026-05-20",
            "state": 0,
            "probabilities": [
              0.9960005013601791,
              0.003999498639820886,
              6.5023205614163e-28
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9960005013601791,
              0.003999498639820886,
              6.5023205614163e-28
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          }
        ],
        "methodology": {
          "estimation_window_days": 95,
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
          "market_link_display": "-0.13",
          "sector_link_display": "-0.38",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.13% stock move in the opposite direction in this state. This is a point estimate from 95 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.38% stock move in the opposite direction in this state. This is a point estimate from 95 trading days.",
          "stock_persistence_display": "0.21",
          "point_estimate_note": "Point estimate only because the current state has 95 trading days.",
          "history_limited_note": "Read is based on 95 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Calm / Liquid",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 68.6,
          "driver_share_display": "68.6%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.6,
          "confidence_display": "99.6%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 95 trading days relative to the 252-day target.",
          "history_days": 95,
          "history_limited": true,
          "volatility_label": "Calm / Liquid",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 25.5,
          "jump_risk_score": 0.67,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.867396292364084,
          "effective_days": 30.6,
          "persistence_note": "This state looks more persistent, with a typical run length of about 7.5 days.",
          "expected_duration_days": 7.5
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
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-29 to 2025-12-31",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Dec: Still clearly sector-driven, though based on only 3 trading days.",
          "share_market": 0.15195002425346496,
          "share_sector": 0.8466347181525152,
          "share_company": 0.0014152575940196475,
          "share_market_display": "15.2%",
          "share_sector_display": "84.7%",
          "share_company_display": "0.1%",
          "dominant_share_display": "84.7%"
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
          "share_market": 0.3741554855044681,
          "share_sector": 0.15495799920490846,
          "share_company": 0.47088651529062353,
          "share_market_display": "37.4%",
          "share_sector_display": "15.5%",
          "share_company_display": "47.1%",
          "dominant_share_display": "47.1%"
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
          "share_market": 0.30744870907444666,
          "share_sector": 0.2712584639894551,
          "share_company": 0.42129282693609826,
          "share_market_display": "30.7%",
          "share_sector_display": "27.1%",
          "share_company_display": "42.1%",
          "dominant_share_display": "42.1%"
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
          "summary": "Mar: More mixed, though company-driven still has the largest share.",
          "share_market": 0.19747192322948803,
          "share_sector": 0.3541818303745414,
          "share_company": 0.4483462463959706,
          "share_market_display": "19.7%",
          "share_sector_display": "35.4%",
          "share_company_display": "44.8%",
          "dominant_share_display": "44.8%"
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
          "share_market": 0.16168929164829418,
          "share_sector": 0.2570940623317058,
          "share_company": 0.58121664602,
          "share_market_display": "16.2%",
          "share_sector_display": "25.7%",
          "share_company_display": "58.1%",
          "dominant_share_display": "58.1%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-20",
          "n_obs": 13,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "May: Mostly sector-driven.",
          "share_market": 0.209723546649538,
          "share_sector": 0.5425794850572682,
          "share_company": 0.24769696829319374,
          "share_market_display": "21.0%",
          "share_sector_display": "54.3%",
          "share_company_display": "24.8%",
          "dominant_share_display": "54.3%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 3,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9960005013601791,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.32246915538565973,
          0.43490674399338053,
          0.24262410062095968
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.32246915538565973,
            "expected_duration_days": 7.541267267923268,
            "current_probability": 0.9960005013601791,
            "current_probability_display": "99.6%",
            "current_probability_basis": "filtered",
            "n_days_effective": 30.634569761637675,
            "volatility": {
              "median": 0.009917040252590114,
              "low": 0.009917040252590114,
              "high": 0.009917040252590114
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.2552459393059597,
            "jump_rate": 0.13057143876784877,
            "risk_score": 0.1019941894904785,
            "metrics": {
              "rolling_vol_10d": 0.019923808365743628,
              "downside_vol_10d": 0.007928784492348394,
              "drawdown_21d": 0.03618112069861169,
              "amihud_stress": 0.46527832042251777,
              "spread_rel": 136.11778477646888,
              "spread_ticks": 0.0,
              "log_notional": 14.023912261776161,
              "log_trade_count": 4.620739681839195
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.43490674399338053,
            "expected_duration_days": 3.4699268006563755,
            "current_probability": 0.003999498639820886,
            "current_probability_display": "0.4%",
            "current_probability_basis": "filtered",
            "n_days_effective": 41.31614067937115,
            "volatility": {
              "median": 0.029782557787950262,
              "low": 0.029782557787950262,
              "high": 0.029782557787950262
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.2667846282615796,
            "jump_rate": 0.1221905630620906,
            "risk_score": 0.5157226291290061,
            "metrics": {
              "rolling_vol_10d": 0.044453834079429835,
              "downside_vol_10d": 0.01887615924274839,
              "drawdown_21d": 0.04823320837021077,
              "amihud_stress": 0.6730747465060962,
              "spread_rel": 179.5907059970687,
              "spread_ticks": 0.0,
              "log_notional": 14.647980316863244,
              "log_trade_count": 5.304415648253315
            }
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "pct_time": 0.24262410062095968,
            "expected_duration_days": 2.313714009477092,
            "current_probability": 6.5023205614163e-28,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 23.04928955899117,
            "volatility": {
              "median": 0.06443943253153202,
              "low": 0.06443943253153202,
              "high": 0.06443943253153202
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.37537375064614914,
            "jump_rate": 0.30159531118009375,
            "risk_score": 0.8,
            "metrics": {
              "rolling_vol_10d": 0.06286173519999189,
              "downside_vol_10d": 0.03179028794031715,
              "drawdown_21d": 0.0033124750069691367,
              "amihud_stress": 0.5598547007672391,
              "spread_rel": 103.31546620112984,
              "spread_ticks": 0.0,
              "log_notional": 15.667667356569892,
              "log_trade_count": 6.2373331126775104
            }
          }
        ],
        "transitions": [
          [
            0.867396292364084,
            0.09868035364952835,
            0.033923353986387704
          ],
          [
            0.09493324050341374,
            0.7118094826061349,
            0.19325727689045138
          ],
          [
            0.04358572551007277,
            0.3886198089267453,
            0.5677944655631818
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 29.02,
          "quantity": 1800.0,
          "value": 52236.0
        },
        {
          "level": 2,
          "price": 29.0,
          "quantity": 1600.0,
          "value": 46400.0
        },
        {
          "level": 3,
          "price": 28.72,
          "quantity": 500.0,
          "value": 14360.0
        },
        {
          "level": 4,
          "price": 28.7,
          "quantity": 700.0,
          "value": 20090.0
        },
        {
          "level": 5,
          "price": 28.32,
          "quantity": 700.0,
          "value": 19824.0
        },
        {
          "level": 6,
          "price": 28.0,
          "quantity": 1700.0,
          "value": 47600.0
        },
        {
          "level": 7,
          "price": 27.7,
          "quantity": 700.0,
          "value": 19390.0
        },
        {
          "level": 8,
          "price": 27.4,
          "quantity": 700.0,
          "value": 19180.0
        },
        {
          "level": 9,
          "price": 27.02,
          "quantity": 6200.0,
          "value": 167524.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 29.72,
          "quantity": 500.0,
          "value": 14860.0
        },
        {
          "level": 2,
          "price": 29.98,
          "quantity": 500.0,
          "value": 14990.0
        },
        {
          "level": 3,
          "price": 30.0,
          "quantity": 2800.0,
          "value": 84000.0
        },
        {
          "level": 4,
          "price": 30.1,
          "quantity": 900.0,
          "value": 27090.0
        },
        {
          "level": 5,
          "price": 30.2,
          "quantity": 500.0,
          "value": 15100.0
        },
        {
          "level": 6,
          "price": 30.46,
          "quantity": 700.0,
          "value": 21322.0
        },
        {
          "level": 7,
          "price": 30.48,
          "quantity": 600.0,
          "value": 18288.0
        },
        {
          "level": 8,
          "price": 30.5,
          "quantity": 6200.0,
          "value": 189100.0
        },
        {
          "level": 9,
          "price": 30.52,
          "quantity": 1400.0,
          "value": 42728.0
        },
        {
          "level": 10,
          "price": 30.9,
          "quantity": 1000.0,
          "value": 30900.0
        },
        {
          "level": 11,
          "price": 30.98,
          "quantity": 1200.0,
          "value": 37176.0
        },
        {
          "level": 12,
          "price": 31.0,
          "quantity": 500.0,
          "value": 15500.0
        },
        {
          "level": 13,
          "price": 31.4,
          "quantity": 1000.0,
          "value": 31400.0
        },
        {
          "level": 14,
          "price": 31.5,
          "quantity": 5000.0,
          "value": 157500.0
        },
        {
          "level": 15,
          "price": 31.9,
          "quantity": 1000.0,
          "value": 31900.0
        },
        {
          "level": 16,
          "price": 32.0,
          "quantity": 5200.0,
          "value": 166400.0
        },
        {
          "level": 17,
          "price": 32.5,
          "quantity": 100.0,
          "value": 3250.0
        },
        {
          "level": 18,
          "price": 32.8,
          "quantity": 300.0,
          "value": 9840.0
        },
        {
          "level": 19,
          "price": 32.88,
          "quantity": 100.0,
          "value": 3288.0000000000005
        },
        {
          "level": 20,
          "price": 32.9,
          "quantity": 100.0,
          "value": 3290.0
        },
        {
          "level": 21,
          "price": 32.98,
          "quantity": 100.0,
          "value": 3297.9999999999995
        },
        {
          "level": 22,
          "price": 33.0,
          "quantity": 400.0,
          "value": 13200.0
        },
        {
          "level": 23,
          "price": 33.26,
          "quantity": 100.0,
          "value": 3326.0
        },
        {
          "level": 24,
          "price": 33.4,
          "quantity": 100.0,
          "value": 3340.0
        },
        {
          "level": 25,
          "price": 33.5,
          "quantity": 300.0,
          "value": 10050.0
        },
        {
          "level": 26,
          "price": 33.8,
          "quantity": 100.0,
          "value": 3379.9999999999995
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-20 07:59:20.323000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 29.369999999999997,
        "spread_pct": 0.023833844058563137,
        "spread_ticks": 14.0,
        "tick_size": 0.05,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 406604.0,
        "ask_depth_notional_displayed": 954516.0,
        "bid_depth_notional_top10": 406604.0,
        "ask_depth_notional_top10": 954516.0,
        "bid_ask_depth_ratio": 0.426
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 149,
        "history_limited": true,
        "trade_days_used": 97,
        "n_trades_used": 55578,
        "first_trade_date": "2025-12-23",
        "last_trade_date": "2026-05-20",
        "window_label": "Dec 23, 2025 to May 20, 2026",
        "window_short_label": "Dec 23, 2025 to May 20, 2026",
        "trade_days_label": "97 trading days",
        "trade_count_label": "55,578 trades",
        "window_detail_label": "97 trading days • 55,578 trades",
        "history_note": "Trade-size percentiles use available history from Dec 23, 2025 to May 20, 2026 (97 trading days • 55,578 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 21672.0,
            "impact_pct": -0.011917,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 5.33,
            "pct_of_adv": 0.98
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 37050.9,
            "impact_pct": -0.011917,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 9.11,
            "pct_of_adv": 1.68
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 760201.05,
            "impact_pct": -0.051767,
            "filled_pct": 53.5,
            "levels_consumed": 9,
            "pct_of_bid_depth": 186.96,
            "pct_of_adv": 34.48
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
            "order_id": "17566209",
            "timestamp": "2026-05-20 01:20:08.424000000",
            "local_timestamp": "2026-05-20 09:20:08",
            "posted_price": 32.0,
            "size_shares": 5000.0,
            "notional": 160000.0,
            "impact_pct": -0.018994,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 39.35,
            "price_vs_mid_pct": 8.955,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "1963009",
            "timestamp": "2026-05-20 01:20:08.424000000",
            "local_timestamp": "2026-05-20 09:20:08",
            "posted_price": 31.5,
            "size_shares": 5000.0,
            "notional": 157500.0,
            "impact_pct": -0.018542,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 38.74,
            "price_vs_mid_pct": 7.252,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "171813633",
            "timestamp": "2026-05-20 01:32:46.299000000",
            "local_timestamp": "2026-05-20 09:32:46",
            "posted_price": 30.5,
            "size_shares": 5000.0,
            "notional": 152500.0,
            "impact_pct": -0.017624,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 37.51,
            "price_vs_mid_pct": 3.847,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-20",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.05,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0332316039335368,
            "spread_ticks": 19.60000000000001,
            "bid_depth_notional": 354292.0,
            "ask_depth_notional": 943642.0,
            "mid_price": 29.490000000000002
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.021798365122615824,
            "spread_ticks": 12.800000000000011,
            "bid_depth_notional": 313924.0,
            "ask_depth_notional": 1011968.0,
            "mid_price": 29.36
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.01436879917892582,
            "spread_ticks": 8.400000000000034,
            "bid_depth_notional": 311014.0,
            "ask_depth_notional": 1026340.0,
            "mid_price": 29.23
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.023144996596324022,
            "spread_ticks": 13.599999999999994,
            "bid_depth_notional": 328432.0,
            "ask_depth_notional": 973382.0,
            "mid_price": 29.38
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.019707781175671027,
            "spread_ticks": 11.599999999999966,
            "bid_depth_notional": 348860.0,
            "ask_depth_notional": 952448.0,
            "mid_price": 29.43
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.008327550312283206,
            "spread_ticks": 4.80000000000004,
            "bid_depth_notional": 293608.0,
            "ask_depth_notional": 1011112.0,
            "mid_price": 28.82
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.014487754398068235,
            "spread_ticks": 8.399999999999963,
            "bid_depth_notional": 319478.0,
            "ask_depth_notional": 976264.0,
            "mid_price": 28.990000000000002
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.017906336088154257,
            "spread_ticks": 10.399999999999991,
            "bid_depth_notional": 319478.0,
            "ask_depth_notional": 991000.0,
            "mid_price": 29.04
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.017906336088154257,
            "spread_ticks": 10.399999999999991,
            "bid_depth_notional": 316600.0,
            "ask_depth_notional": 982194.0,
            "mid_price": 29.04
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.018614270941054903,
            "spread_ticks": 10.800000000000054,
            "bid_depth_notional": 316590.0,
            "ask_depth_notional": 1042888.0,
            "mid_price": 29.009999999999998
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.023833844058563137,
            "spread_ticks": 13.999999999999986,
            "bid_depth_notional": 406604.0,
            "ask_depth_notional": 954516.0,
            "mid_price": 29.369999999999997
          }
        ],
        "summary": {
          "median_spread_pct": 0.018614270941054903,
          "median_spread_ticks": 10.800000000000054,
          "median_bid_depth_notional": 319478.0,
          "median_ask_depth_notional": 982194.0,
          "tightest_bucket": "13:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "15:30",
          "thinnest_bid_bucket": "13:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 2.3,
      "peers": [
        {
          "ticker": "2509",
          "pct": 27.5
        },
        {
          "ticker": "3681",
          "pct": 31.6
        },
        {
          "ticker": "1349",
          "pct": 33.0
        },
        {
          "ticker": "2126",
          "pct": 48.7
        },
        {
          "ticker": "6628",
          "pct": 62.1
        },
        {
          "ticker": "1228",
          "pct": 68.1
        },
        {
          "ticker": "2137",
          "pct": 80.0
        },
        {
          "ticker": "3839",
          "pct": 130.0
        }
      ]
    },
    "trader_composition": {
      "primary_period": "3m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 188,
          "n_runs": 66,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-20",
          "last_trade_date": "2026-05-20",
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
            "retail_pct": 0.3617021276595745,
            "mixed_pct": 0.16489361702127658,
            "instit_pct": 0.40425531914893614,
            "ambiguous_pct": 0.06914893617021277,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.06914893617021277,
            "retail_qty_pct": 0.3601036269430052,
            "mixed_qty_pct": 0.16062176165803108,
            "instit_qty_pct": 0.4119170984455959,
            "ambiguous_qty_pct": 0.06735751295336788,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.06735751295336788,
            "retail_notional_pct": 0.3588308842644747,
            "mixed_notional_pct": 0.1608038157017471,
            "instit_notional_pct": 0.41290788093793823,
            "ambiguous_notional_pct": 0.06745741909583998,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.06745741909583998
          },
          "run_composition": {
            "retail_pct": 0.45454545454545453,
            "mixed_pct": 0.21212121212121213,
            "instit_pct": 0.24242424242424243,
            "ambiguous_pct": 0.09090909090909091,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09090909090909091,
            "retail_notional_pct": 0.14030298665130125,
            "mixed_notional_pct": 0.21830164217804668,
            "instit_notional_pct": 0.5605493133583022,
            "unclear_notional_pct": 0.08084605781234995
          },
          "counts": {
            "trades": {
              "retail": 68,
              "mixed": 31,
              "institutional": 76,
              "ambiguous": 13,
              "unobservable": 0,
              "unclear": 13
            },
            "runs": {
              "retail": 30,
              "mixed": 14,
              "institutional": 16,
              "ambiguous": 6,
              "unobservable": 0,
              "unclear": 6
            }
          },
          "confidence": {
            "high": 0.696969696969697,
            "medium": 0.21212121212121213,
            "low": 0.09090909090909091,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 46,
            "medium": 14,
            "low": 6,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5638297872340425,
            "medium": 0.16489361702127658,
            "low": 0.2712765957446808,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 106,
            "medium": 31,
            "low": 51,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.9045454545454545,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09090909090909091,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.45454545454545453,
          "dominance_gap": 0.2121212121212121,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 127,
              "UNOBSERVABLE": 41,
              "WALK_BOOK": 20
            },
            "d2_information": {
              "UNOBSERVABLE": 188
            },
            "d3_urgency": {
              "UNOBSERVABLE": 66
            },
            "participant_confidence": {
              "HIGH": 46,
              "MEDIUM": 14,
              "LOW": 6
            }
          },
          "trade_size": {
            "avg": 6015.45744680851,
            "median": 5804.0
          },
          "run_size": {
            "avg": 12621.818181818182,
            "median": 8763.0,
            "avg_length": 1.878787878787879
          },
          "recent_trades": [
            {
              "trade_id": "189",
              "timestamp": "2026-05-20T07:58:48.211836",
              "price": 29.72,
              "size": 100.0,
              "notional": 2972.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14811,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "188",
              "timestamp": "2026-05-20T07:58:48.211836",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "187",
              "timestamp": "2026-05-20T07:58:43.746951",
              "price": 29.6,
              "size": 300.0,
              "notional": 8880.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "186",
              "timestamp": "2026-05-20T07:58:35.467667",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "185",
              "timestamp": "2026-05-20T07:58:35.467667",
              "price": 29.58,
              "size": 300.0,
              "notional": 8874.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "184",
              "timestamp": "2026-05-20T07:58:28.403613",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "183",
              "timestamp": "2026-05-20T07:58:28.403613",
              "price": 29.56,
              "size": 400.0,
              "notional": 11824.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "182",
              "timestamp": "2026-05-20T07:58:03.152519",
              "price": 29.56,
              "size": 100.0,
              "notional": 2956.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "181",
              "timestamp": "2026-05-20T07:58:03.152519",
              "price": 29.5,
              "size": 300.0,
              "notional": 8850.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "180",
              "timestamp": "2026-05-20T07:57:56.959616",
              "price": 29.5,
              "size": 100.0,
              "notional": 2950.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "179",
              "timestamp": "2026-05-20T07:57:49.647270",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "178",
              "timestamp": "2026-05-20T07:57:43.175836",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "177",
              "timestamp": "2026-05-20T07:57:41.022331",
              "price": 29.38,
              "size": 200.0,
              "notional": 5876.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "176",
              "timestamp": "2026-05-20T07:57:41.022331",
              "price": 29.36,
              "size": 300.0,
              "notional": 8808.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "175",
              "timestamp": "2026-05-20T07:57:36.702010",
              "price": 29.38,
              "size": 300.0,
              "notional": 8814.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "174",
              "timestamp": "2026-05-20T07:57:34.370531",
              "price": 29.38,
              "size": 300.0,
              "notional": 8814.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "173",
              "timestamp": "2026-05-20T07:57:17.512416",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "172",
              "timestamp": "2026-05-20T07:57:15.485189",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "171",
              "timestamp": "2026-05-20T07:57:13.455770",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "170",
              "timestamp": "2026-05-20T07:57:09.421834",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "169",
              "timestamp": "2026-05-20T07:57:09.421834",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "168",
              "timestamp": "2026-05-20T07:57:03.332629",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "167",
              "timestamp": "2026-05-20T07:57:01.236943",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14807,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "166",
              "timestamp": "2026-05-20T07:53:04.041128",
              "price": 29.54,
              "size": 200.0,
              "notional": 5908.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 14806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "165",
              "timestamp": "2026-05-20T07:52:59.455741",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 14806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "164",
              "timestamp": "2026-05-20T07:52:59.455741",
              "price": 29.34,
              "size": 100.0,
              "notional": 2934.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14805,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "163",
              "timestamp": "2026-05-20T07:52:56.281012",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "162",
              "timestamp": "2026-05-20T07:52:56.281012",
              "price": 29.36,
              "size": 100.0,
              "notional": 2936.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "161",
              "timestamp": "2026-05-20T07:52:47.866971",
              "price": 29.36,
              "size": 200.0,
              "notional": 5872.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "160",
              "timestamp": "2026-05-20T07:52:41.984103",
              "price": 29.32,
              "size": 100.0,
              "notional": 2932.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
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
          "n_trades": 1107,
          "n_runs": 455,
          "n_trade_days": 5,
          "first_trade_date": "2026-05-14",
          "last_trade_date": "2026-05-20",
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
            "retail_pct": 0.35953026196928634,
            "mixed_pct": 0.15447154471544716,
            "instit_pct": 0.3866305329719964,
            "ambiguous_pct": 0.0993676603432701,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0993676603432701,
            "retail_qty_pct": 0.2436320047947258,
            "mixed_qty_pct": 0.1330536409949056,
            "instit_qty_pct": 0.503146538807312,
            "ambiguous_qty_pct": 0.12016781540305664,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12016781540305664,
            "retail_notional_pct": 0.24337515953697442,
            "mixed_notional_pct": 0.1332353629035056,
            "instit_notional_pct": 0.5032644111835675,
            "ambiguous_notional_pct": 0.12012506637595258,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12012506637595258
          },
          "run_composition": {
            "retail_pct": 0.4461538461538462,
            "mixed_pct": 0.1956043956043956,
            "instit_pct": 0.23956043956043957,
            "ambiguous_pct": 0.11868131868131868,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11868131868131868,
            "retail_notional_pct": 0.11570992859557888,
            "mixed_notional_pct": 0.16423947650174686,
            "instit_notional_pct": 0.6203749637745327,
            "unclear_notional_pct": 0.09967563112814155
          },
          "counts": {
            "trades": {
              "retail": 398,
              "mixed": 171,
              "institutional": 428,
              "ambiguous": 110,
              "unobservable": 0,
              "unclear": 110
            },
            "runs": {
              "retail": 203,
              "mixed": 89,
              "institutional": 109,
              "ambiguous": 54,
              "unobservable": 0,
              "unclear": 54
            }
          },
          "confidence": {
            "high": 0.6857142857142857,
            "medium": 0.1956043956043956,
            "low": 0.11868131868131868,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 312,
            "medium": 89,
            "low": 54,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5808491418247516,
            "medium": 0.15447154471544716,
            "low": 0.2646793134598013,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 643,
            "medium": 171,
            "low": 293,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8875824175824174,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.11868131868131868,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4461538461538462,
          "dominance_gap": 0.2065934065934066,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 677,
              "WALK_BOOK": 227,
              "UNOBSERVABLE": 203
            },
            "d2_information": {
              "UNOBSERVABLE": 1107
            },
            "d3_urgency": {
              "UNOBSERVABLE": 455
            },
            "participant_confidence": {
              "HIGH": 312,
              "MEDIUM": 89,
              "LOW": 54
            }
          },
          "trade_size": {
            "avg": 8852.968383017163,
            "median": 5872.0
          },
          "run_size": {
            "avg": 17472.984615384616,
            "median": 8694.0,
            "avg_length": 1.5274725274725274
          },
          "recent_trades": [
            {
              "trade_id": "189",
              "timestamp": "2026-05-20T07:58:48.211836",
              "price": 29.72,
              "size": 100.0,
              "notional": 2972.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14811,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "188",
              "timestamp": "2026-05-20T07:58:48.211836",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "187",
              "timestamp": "2026-05-20T07:58:43.746951",
              "price": 29.6,
              "size": 300.0,
              "notional": 8880.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "186",
              "timestamp": "2026-05-20T07:58:35.467667",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "185",
              "timestamp": "2026-05-20T07:58:35.467667",
              "price": 29.58,
              "size": 300.0,
              "notional": 8874.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "184",
              "timestamp": "2026-05-20T07:58:28.403613",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "183",
              "timestamp": "2026-05-20T07:58:28.403613",
              "price": 29.56,
              "size": 400.0,
              "notional": 11824.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "182",
              "timestamp": "2026-05-20T07:58:03.152519",
              "price": 29.56,
              "size": 100.0,
              "notional": 2956.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "181",
              "timestamp": "2026-05-20T07:58:03.152519",
              "price": 29.5,
              "size": 300.0,
              "notional": 8850.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "180",
              "timestamp": "2026-05-20T07:57:56.959616",
              "price": 29.5,
              "size": 100.0,
              "notional": 2950.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "179",
              "timestamp": "2026-05-20T07:57:49.647270",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "178",
              "timestamp": "2026-05-20T07:57:43.175836",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "177",
              "timestamp": "2026-05-20T07:57:41.022331",
              "price": 29.38,
              "size": 200.0,
              "notional": 5876.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "176",
              "timestamp": "2026-05-20T07:57:41.022331",
              "price": 29.36,
              "size": 300.0,
              "notional": 8808.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "175",
              "timestamp": "2026-05-20T07:57:36.702010",
              "price": 29.38,
              "size": 300.0,
              "notional": 8814.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "174",
              "timestamp": "2026-05-20T07:57:34.370531",
              "price": 29.38,
              "size": 300.0,
              "notional": 8814.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "173",
              "timestamp": "2026-05-20T07:57:17.512416",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "172",
              "timestamp": "2026-05-20T07:57:15.485189",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "171",
              "timestamp": "2026-05-20T07:57:13.455770",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "170",
              "timestamp": "2026-05-20T07:57:09.421834",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "169",
              "timestamp": "2026-05-20T07:57:09.421834",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "168",
              "timestamp": "2026-05-20T07:57:03.332629",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "167",
              "timestamp": "2026-05-20T07:57:01.236943",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14807,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "166",
              "timestamp": "2026-05-20T07:53:04.041128",
              "price": 29.54,
              "size": 200.0,
              "notional": 5908.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 14806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "165",
              "timestamp": "2026-05-20T07:52:59.455741",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 14806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "164",
              "timestamp": "2026-05-20T07:52:59.455741",
              "price": 29.34,
              "size": 100.0,
              "notional": 2934.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14805,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "163",
              "timestamp": "2026-05-20T07:52:56.281012",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "162",
              "timestamp": "2026-05-20T07:52:56.281012",
              "price": 29.36,
              "size": 100.0,
              "notional": 2936.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "161",
              "timestamp": "2026-05-20T07:52:47.866971",
              "price": 29.36,
              "size": 200.0,
              "notional": 5872.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "160",
              "timestamp": "2026-05-20T07:52:41.984103",
              "price": 29.32,
              "size": 100.0,
              "notional": 2932.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
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
          "n_trades": 5352,
          "n_runs": 2274,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-21",
          "last_trade_date": "2026-05-20",
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
            "retail_pct": 0.35014947683109116,
            "mixed_pct": 0.15508221225710014,
            "instit_pct": 0.398542600896861,
            "ambiguous_pct": 0.09622571001494769,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09622571001494769,
            "retail_qty_pct": 0.18519073297383662,
            "mixed_qty_pct": 0.13446175354503695,
            "instit_qty_pct": 0.585879768324346,
            "ambiguous_qty_pct": 0.09446774515678051,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.09446774515678051,
            "retail_notional_pct": 0.1855962335532831,
            "mixed_notional_pct": 0.13508598013892148,
            "instit_notional_pct": 0.5848605452691769,
            "ambiguous_notional_pct": 0.0944572410386185,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0944572410386185
          },
          "run_composition": {
            "retail_pct": 0.4331574318381706,
            "mixed_pct": 0.20140721196130168,
            "instit_pct": 0.24890061565523308,
            "ambiguous_pct": 0.11653474054529464,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11653474054529464,
            "retail_notional_pct": 0.09012815340248428,
            "mixed_notional_pct": 0.13131706957960212,
            "instit_notional_pct": 0.6982293362032729,
            "unclear_notional_pct": 0.0803254408146407
          },
          "counts": {
            "trades": {
              "retail": 1874,
              "mixed": 830,
              "institutional": 2133,
              "ambiguous": 515,
              "unobservable": 0,
              "unclear": 515
            },
            "runs": {
              "retail": 985,
              "mixed": 458,
              "institutional": 566,
              "ambiguous": 265,
              "unobservable": 0,
              "unclear": 265
            }
          },
          "confidence": {
            "high": 0.6816182937554969,
            "medium": 0.20184696569920843,
            "low": 0.11653474054529464,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 1550,
            "medium": 459,
            "low": 265,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5904334828101644,
            "medium": 0.15134529147982062,
            "low": 0.25822122571001493,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 3160,
            "medium": 810,
            "low": 1382,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.882541776605101,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.11653474054529464,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4331574318381706,
          "dominance_gap": 0.18425681618293754,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 2968,
              "WALK_BOOK": 1427,
              "UNOBSERVABLE": 957
            },
            "d2_information": {
              "UNOBSERVABLE": 5352
            },
            "d3_urgency": {
              "UNOBSERVABLE": 2274
            },
            "participant_confidence": {
              "HIGH": 1550,
              "MEDIUM": 459,
              "LOW": 265
            }
          },
          "trade_size": {
            "avg": 11229.450523168909,
            "median": 5912.0
          },
          "run_size": {
            "avg": 21877.131574318384,
            "median": 8886.0,
            "avg_length": 1.4050131926121372
          },
          "recent_trades": [
            {
              "trade_id": "189",
              "timestamp": "2026-05-20T07:58:48.211836",
              "price": 29.72,
              "size": 100.0,
              "notional": 2972.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14811,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "188",
              "timestamp": "2026-05-20T07:58:48.211836",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "187",
              "timestamp": "2026-05-20T07:58:43.746951",
              "price": 29.6,
              "size": 300.0,
              "notional": 8880.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "186",
              "timestamp": "2026-05-20T07:58:35.467667",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "185",
              "timestamp": "2026-05-20T07:58:35.467667",
              "price": 29.58,
              "size": 300.0,
              "notional": 8874.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "184",
              "timestamp": "2026-05-20T07:58:28.403613",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "183",
              "timestamp": "2026-05-20T07:58:28.403613",
              "price": 29.56,
              "size": 400.0,
              "notional": 11824.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "182",
              "timestamp": "2026-05-20T07:58:03.152519",
              "price": 29.56,
              "size": 100.0,
              "notional": 2956.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "181",
              "timestamp": "2026-05-20T07:58:03.152519",
              "price": 29.5,
              "size": 300.0,
              "notional": 8850.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "180",
              "timestamp": "2026-05-20T07:57:56.959616",
              "price": 29.5,
              "size": 100.0,
              "notional": 2950.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "179",
              "timestamp": "2026-05-20T07:57:49.647270",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "178",
              "timestamp": "2026-05-20T07:57:43.175836",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "177",
              "timestamp": "2026-05-20T07:57:41.022331",
              "price": 29.38,
              "size": 200.0,
              "notional": 5876.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "176",
              "timestamp": "2026-05-20T07:57:41.022331",
              "price": 29.36,
              "size": 300.0,
              "notional": 8808.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "175",
              "timestamp": "2026-05-20T07:57:36.702010",
              "price": 29.38,
              "size": 300.0,
              "notional": 8814.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "174",
              "timestamp": "2026-05-20T07:57:34.370531",
              "price": 29.38,
              "size": 300.0,
              "notional": 8814.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "173",
              "timestamp": "2026-05-20T07:57:17.512416",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "172",
              "timestamp": "2026-05-20T07:57:15.485189",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "171",
              "timestamp": "2026-05-20T07:57:13.455770",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "170",
              "timestamp": "2026-05-20T07:57:09.421834",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "169",
              "timestamp": "2026-05-20T07:57:09.421834",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "168",
              "timestamp": "2026-05-20T07:57:03.332629",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "167",
              "timestamp": "2026-05-20T07:57:01.236943",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14807,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "166",
              "timestamp": "2026-05-20T07:53:04.041128",
              "price": 29.54,
              "size": 200.0,
              "notional": 5908.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 14806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "165",
              "timestamp": "2026-05-20T07:52:59.455741",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 14806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "164",
              "timestamp": "2026-05-20T07:52:59.455741",
              "price": 29.34,
              "size": 100.0,
              "notional": 2934.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14805,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "163",
              "timestamp": "2026-05-20T07:52:56.281012",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "162",
              "timestamp": "2026-05-20T07:52:56.281012",
              "price": 29.36,
              "size": 100.0,
              "notional": 2936.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "161",
              "timestamp": "2026-05-20T07:52:47.866971",
              "price": 29.36,
              "size": 200.0,
              "notional": 5872.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "160",
              "timestamp": "2026-05-20T07:52:41.984103",
              "price": 29.32,
              "size": 100.0,
              "notional": 2932.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 16536,
          "n_runs": 6673,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-12",
          "last_trade_date": "2026-05-20",
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
            "retail_pct": 0.3491775520077407,
            "mixed_pct": 0.15451136913401065,
            "instit_pct": 0.37929366231253026,
            "ambiguous_pct": 0.11701741654571843,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11701741654571843,
            "retail_qty_pct": 0.16900180438928183,
            "mixed_qty_pct": 0.1587699380353138,
            "instit_qty_pct": 0.5641047758034661,
            "ambiguous_qty_pct": 0.10812348177193824,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.10812348177193824,
            "retail_notional_pct": 0.16975245028449898,
            "mixed_notional_pct": 0.1568402024292062,
            "instit_notional_pct": 0.5671720127725278,
            "ambiguous_notional_pct": 0.10623533451376692,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10623533451376692
          },
          "run_composition": {
            "retail_pct": 0.4257455417353514,
            "mixed_pct": 0.19856136670163343,
            "instit_pct": 0.2541585493780908,
            "ambiguous_pct": 0.12153454218492432,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12153454218492432,
            "retail_notional_pct": 0.07601017717905648,
            "mixed_notional_pct": 0.13183463718210384,
            "instit_notional_pct": 0.7085608134290552,
            "unclear_notional_pct": 0.08359437220978444
          },
          "counts": {
            "trades": {
              "retail": 5774,
              "mixed": 2555,
              "institutional": 6272,
              "ambiguous": 1935,
              "unobservable": 0,
              "unclear": 1935
            },
            "runs": {
              "retail": 2841,
              "mixed": 1325,
              "institutional": 1696,
              "ambiguous": 811,
              "unobservable": 0,
              "unclear": 811
            }
          },
          "confidence": {
            "high": 0.6794545182077026,
            "medium": 0.19886108197212649,
            "low": 0.12168439982017083,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 4534,
            "medium": 1327,
            "low": 812,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5575108853410741,
            "medium": 0.1450169327527818,
            "low": 0.29747218190614416,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 9219,
            "medium": 2398,
            "low": 4919,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8771167390978569,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.12153454218492432,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4257455417353514,
          "dominance_gap": 0.1715869923572606,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 8298,
              "WALK_BOOK": 4655,
              "UNOBSERVABLE": 3581,
              "MULTI_FILL_SINGLE_PRICE": 2
            },
            "d2_information": {
              "UNOBSERVABLE": 16536
            },
            "d3_urgency": {
              "UNOBSERVABLE": 6673
            },
            "participant_confidence": {
              "HIGH": 4534,
              "MEDIUM": 1327,
              "LOW": 812
            }
          },
          "trade_size": {
            "avg": 12921.604825834544,
            "median": 5809.5
          },
          "run_size": {
            "avg": 24972.34233478196,
            "median": 9318.0,
            "avg_length": 1.3158998950996554
          },
          "recent_trades": [
            {
              "trade_id": "189",
              "timestamp": "2026-05-20T07:58:48.211836",
              "price": 29.72,
              "size": 100.0,
              "notional": 2972.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14811,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "188",
              "timestamp": "2026-05-20T07:58:48.211836",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "187",
              "timestamp": "2026-05-20T07:58:43.746951",
              "price": 29.6,
              "size": 300.0,
              "notional": 8880.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "186",
              "timestamp": "2026-05-20T07:58:35.467667",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "185",
              "timestamp": "2026-05-20T07:58:35.467667",
              "price": 29.58,
              "size": 300.0,
              "notional": 8874.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "184",
              "timestamp": "2026-05-20T07:58:28.403613",
              "price": 29.6,
              "size": 100.0,
              "notional": 2960.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "183",
              "timestamp": "2026-05-20T07:58:28.403613",
              "price": 29.56,
              "size": 400.0,
              "notional": 11824.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "182",
              "timestamp": "2026-05-20T07:58:03.152519",
              "price": 29.56,
              "size": 100.0,
              "notional": 2956.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "181",
              "timestamp": "2026-05-20T07:58:03.152519",
              "price": 29.5,
              "size": 300.0,
              "notional": 8850.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "180",
              "timestamp": "2026-05-20T07:57:56.959616",
              "price": 29.5,
              "size": 100.0,
              "notional": 2950.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "179",
              "timestamp": "2026-05-20T07:57:49.647270",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "178",
              "timestamp": "2026-05-20T07:57:43.175836",
              "price": 29.38,
              "size": 500.0,
              "notional": 14690.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "177",
              "timestamp": "2026-05-20T07:57:41.022331",
              "price": 29.38,
              "size": 200.0,
              "notional": 5876.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "176",
              "timestamp": "2026-05-20T07:57:41.022331",
              "price": 29.36,
              "size": 300.0,
              "notional": 8808.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "175",
              "timestamp": "2026-05-20T07:57:36.702010",
              "price": 29.38,
              "size": 300.0,
              "notional": 8814.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "174",
              "timestamp": "2026-05-20T07:57:34.370531",
              "price": 29.38,
              "size": 300.0,
              "notional": 8814.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "173",
              "timestamp": "2026-05-20T07:57:17.512416",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "172",
              "timestamp": "2026-05-20T07:57:15.485189",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "171",
              "timestamp": "2026-05-20T07:57:13.455770",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "170",
              "timestamp": "2026-05-20T07:57:09.421834",
              "price": 29.4,
              "size": 100.0,
              "notional": 2940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "169",
              "timestamp": "2026-05-20T07:57:09.421834",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "168",
              "timestamp": "2026-05-20T07:57:03.332629",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 14808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "167",
              "timestamp": "2026-05-20T07:57:01.236943",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14807,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "166",
              "timestamp": "2026-05-20T07:53:04.041128",
              "price": 29.54,
              "size": 200.0,
              "notional": 5908.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 14806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "165",
              "timestamp": "2026-05-20T07:52:59.455741",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 14806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "164",
              "timestamp": "2026-05-20T07:52:59.455741",
              "price": 29.34,
              "size": 100.0,
              "notional": 2934.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 14805,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "163",
              "timestamp": "2026-05-20T07:52:56.281012",
              "price": 29.38,
              "size": 100.0,
              "notional": 2938.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "162",
              "timestamp": "2026-05-20T07:52:56.281012",
              "price": 29.36,
              "size": 100.0,
              "notional": 2936.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "161",
              "timestamp": "2026-05-20T07:52:47.866971",
              "price": 29.36,
              "size": 200.0,
              "notional": 5872.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "160",
              "timestamp": "2026-05-20T07:52:41.984103",
              "price": 29.32,
              "size": 100.0,
              "notional": 2932.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 14804,
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
      "n_trades": 16536,
      "n_runs": 6673,
      "n_trade_days": 63,
      "first_trade_date": "2026-02-12",
      "last_trade_date": "2026-05-20",
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
        "retail_pct": 0.3491775520077407,
        "mixed_pct": 0.15451136913401065,
        "instit_pct": 0.37929366231253026,
        "ambiguous_pct": 0.11701741654571843,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.11701741654571843,
        "retail_qty_pct": 0.16900180438928183,
        "mixed_qty_pct": 0.1587699380353138,
        "instit_qty_pct": 0.5641047758034661,
        "ambiguous_qty_pct": 0.10812348177193824,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.10812348177193824,
        "retail_notional_pct": 0.16975245028449898,
        "mixed_notional_pct": 0.1568402024292062,
        "instit_notional_pct": 0.5671720127725278,
        "ambiguous_notional_pct": 0.10623533451376692,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.10623533451376692
      },
      "run_composition": {
        "retail_pct": 0.4257455417353514,
        "mixed_pct": 0.19856136670163343,
        "instit_pct": 0.2541585493780908,
        "ambiguous_pct": 0.12153454218492432,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12153454218492432
      },
      "trade_size": {
        "avg": 12921.604825834544,
        "median": 5809.5
      },
      "run_size": {
        "avg": 24972.34233478196,
        "median": 9318.0,
        "avg_length": 1.3158998950996554
      },
      "confidence": {
        "high": 0.6794545182077026,
        "medium": 0.19886108197212649,
        "low": 0.12168439982017083,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 4534,
        "medium": 1327,
        "low": 812,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5575108853410741,
        "medium": 0.1450169327527818,
        "low": 0.29747218190614416,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 9219,
        "medium": 2398,
        "low": 4919,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 5774,
          "mixed": 2555,
          "institutional": 6272,
          "ambiguous": 1935,
          "unobservable": 0,
          "unclear": 1935
        },
        "runs": {
          "retail": 2841,
          "mixed": 1325,
          "institutional": 1696,
          "ambiguous": 811,
          "unobservable": 0,
          "unclear": 811
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8771167390978569,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.12153454218492432,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.4257455417353514,
      "dominance_gap": 0.1715869923572606,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 19532,
            "n_runs": 5545,
            "retail_pct": 0.21492934671308622,
            "mixed_pct": 0.17591644480851934,
            "instit_pct": 0.47522015154618064,
            "ambiguous_pct": 0.1339340569322138,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1339340569322138,
            "avg_trade_size": 11180.388746672128,
            "avg_run_notional": 34581.5561767358,
            "retail_qty_pct": 0.09248404550499445,
            "mixed_qty_pct": 0.14414539400665927,
            "instit_qty_pct": 0.678040024972253,
            "ambiguous_qty_pct": 0.08533053551609324,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08533053551609324,
            "retail_notional_pct": 0.0889190961033043,
            "mixed_notional_pct": 0.14630177151905965,
            "instit_notional_pct": 0.6797457311952233,
            "ambiguous_notional_pct": 0.08503340118241275,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08503340118241275,
            "run_retail_pct": 0.3886384129846709,
            "run_mixed_pct": 0.20919747520288548,
            "run_instit_pct": 0.24905320108205592,
            "run_ambiguous_pct": 0.15311091073038774,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15311091073038774,
            "avg_feature_coverage": 0.9071686203787196,
            "high_confidence_pct": 0.6375112714156899,
            "medium_confidence_pct": 0.20937781785392245,
            "low_confidence_pct": 0.15311091073038774,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 4677,
            "n_runs": 2228,
            "retail_pct": 0.4006841992730383,
            "mixed_pct": 0.17190506735086594,
            "instit_pct": 0.28308744921958523,
            "ambiguous_pct": 0.14432328415651058,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14432328415651058,
            "avg_trade_size": 12225.871071199486,
            "avg_run_notional": 18649.283213644525,
            "retail_qty_pct": 0.13759901062984012,
            "mixed_qty_pct": 0.18712640970525013,
            "instit_qty_pct": 0.563734872353582,
            "ambiguous_qty_pct": 0.1115397073113277,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1115397073113277,
            "retail_notional_pct": 0.13765699676212473,
            "mixed_notional_pct": 0.18744421493106406,
            "instit_notional_pct": 0.5632244713787324,
            "ambiguous_notional_pct": 0.1116743169280788,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1116743169280788,
            "run_retail_pct": 0.4618491921005386,
            "run_mixed_pct": 0.20287253141831238,
            "run_instit_pct": 0.20377019748653502,
            "run_ambiguous_pct": 0.131508078994614,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.131508078994614,
            "avg_feature_coverage": 0.8629937163375222,
            "high_confidence_pct": 0.6656193895870736,
            "medium_confidence_pct": 0.20287253141831238,
            "low_confidence_pct": 0.131508078994614,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 2106,
            "n_runs": 937,
            "retail_pct": 0.3817663817663818,
            "mixed_pct": 0.15527065527065528,
            "instit_pct": 0.301994301994302,
            "ambiguous_pct": 0.16096866096866097,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16096866096866097,
            "avg_trade_size": 16408.113105413107,
            "avg_run_notional": 24268.062113127,
            "retail_qty_pct": 0.14581700424899963,
            "mixed_qty_pct": 0.2039932346025329,
            "instit_qty_pct": 0.5138505012169465,
            "ambiguous_qty_pct": 0.136339259931521,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.136339259931521,
            "retail_notional_pct": 0.14539929118404357,
            "mixed_notional_pct": 0.20364439265218615,
            "instit_notional_pct": 0.5119231978857238,
            "ambiguous_notional_pct": 0.13903311827804637,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13903311827804637,
            "run_retail_pct": 0.4407684098185699,
            "run_mixed_pct": 0.192102454642476,
            "run_instit_pct": 0.2294557097118463,
            "run_ambiguous_pct": 0.1376734258271078,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1376734258271078,
            "avg_feature_coverage": 0.865368196371398,
            "high_confidence_pct": 0.6702241195304163,
            "medium_confidence_pct": 0.192102454642476,
            "low_confidence_pct": 0.1376734258271078,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 7300,
            "n_runs": 2755,
            "retail_pct": 0.3494520547945206,
            "mixed_pct": 0.15452054794520548,
            "instit_pct": 0.37054794520547946,
            "ambiguous_pct": 0.12547945205479452,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12547945205479452,
            "avg_trade_size": 12875.172328767123,
            "avg_run_notional": 25992.501270417422,
            "retail_qty_pct": 0.17406018698870276,
            "mixed_qty_pct": 0.15229353330736267,
            "instit_qty_pct": 0.5731155044799376,
            "ambiguous_qty_pct": 0.10053077522399688,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.10053077522399688,
            "retail_notional_pct": 0.17295647209211978,
            "mixed_notional_pct": 0.15215735694688082,
            "instit_notional_pct": 0.5737921869336756,
            "ambiguous_notional_pct": 0.10109398402732378,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10109398402732378,
            "run_retail_pct": 0.42323049001814883,
            "run_mixed_pct": 0.20217785843920144,
            "run_instit_pct": 0.25045372050816694,
            "run_ambiguous_pct": 0.12413793103448276,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12413793103448276,
            "avg_feature_coverage": 0.8770417422867512,
            "high_confidence_pct": 0.6733212341197822,
            "medium_confidence_pct": 0.20217785843920144,
            "low_confidence_pct": 0.12450090744101633,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 5334,
            "n_runs": 2298,
            "retail_pct": 0.3445819272590926,
            "mixed_pct": 0.15579302587176602,
            "instit_pct": 0.39838770153730785,
            "ambiguous_pct": 0.10123734533183353,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10123734533183353,
            "avg_trade_size": 13191.580052493438,
            "avg_run_notional": 25213.580504786773,
            "retail_qty_pct": 0.15852041907205475,
            "mixed_qty_pct": 0.1565961086166346,
            "instit_qty_pct": 0.5889245242676929,
            "ambiguous_qty_pct": 0.09595894804361771,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.09595894804361771,
            "retail_notional_pct": 0.15865732149423012,
            "mixed_notional_pct": 0.15750368996096406,
            "instit_notional_pct": 0.5873432690359578,
            "ambiguous_notional_pct": 0.09649571950884805,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09649571950884805,
            "run_retail_pct": 0.42645778938207135,
            "run_mixed_pct": 0.19930374238468232,
            "run_instit_pct": 0.2628372497824195,
            "run_ambiguous_pct": 0.1114012184508268,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1114012184508268,
            "avg_feature_coverage": 0.876000870322019,
            "high_confidence_pct": 0.6888598781549173,
            "medium_confidence_pct": 0.19973890339425587,
            "low_confidence_pct": 0.1114012184508268,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-05",
            "n_trades": 2585,
            "n_runs": 1049,
            "retail_pct": 0.3547388781431335,
            "mixed_pct": 0.14816247582205028,
            "instit_pct": 0.39729206963249514,
            "ambiguous_pct": 0.09980657640232109,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09980657640232109,
            "avg_trade_size": 9761.372998065764,
            "avg_run_notional": 19326.72564346997,
            "retail_qty_pct": 0.2156649770697562,
            "mixed_qty_pct": 0.13046101858556602,
            "instit_qty_pct": 0.5523775042239922,
            "ambiguous_qty_pct": 0.10149650012068549,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.10149650012068549,
            "retail_notional_pct": 0.21468985726125697,
            "mixed_notional_pct": 0.13068967229821635,
            "instit_notional_pct": 0.5533993355058512,
            "ambiguous_notional_pct": 0.10122113493467554,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10122113493467554,
            "run_retail_pct": 0.43374642516682554,
            "run_mixed_pct": 0.1954242135367016,
            "run_instit_pct": 0.25166825548141086,
            "run_ambiguous_pct": 0.11916110581506197,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.11916110581506197,
            "avg_feature_coverage": 0.8860819828408005,
            "high_confidence_pct": 0.684461391801716,
            "medium_confidence_pct": 0.19637750238322213,
            "low_confidence_pct": 0.11916110581506197,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [],
      "peer_comparison_periods": {
        "1d": [],
        "1w": [],
        "30d": [],
        "3m": []
      },
      "peer_activity_enabled": false,
      "peer_activity_reason": "Disabled for XHKG to avoid fetching peer L2/L3 history.",
      "recent_trades": [
        {
          "trade_id": "189",
          "timestamp": "2026-05-20T07:58:48.211836",
          "price": 29.72,
          "size": 100.0,
          "notional": 2972.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 14811,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "188",
          "timestamp": "2026-05-20T07:58:48.211836",
          "price": 29.6,
          "size": 100.0,
          "notional": 2960.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "187",
          "timestamp": "2026-05-20T07:58:43.746951",
          "price": 29.6,
          "size": 300.0,
          "notional": 8880.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "186",
          "timestamp": "2026-05-20T07:58:35.467667",
          "price": 29.6,
          "size": 100.0,
          "notional": 2960.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 14810,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "185",
          "timestamp": "2026-05-20T07:58:35.467667",
          "price": 29.58,
          "size": 300.0,
          "notional": 8874.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 14810,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "184",
          "timestamp": "2026-05-20T07:58:28.403613",
          "price": 29.6,
          "size": 100.0,
          "notional": 2960.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 14810,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "183",
          "timestamp": "2026-05-20T07:58:28.403613",
          "price": 29.56,
          "size": 400.0,
          "notional": 11824.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "182",
          "timestamp": "2026-05-20T07:58:03.152519",
          "price": 29.56,
          "size": 100.0,
          "notional": 2956.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 14809,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "181",
          "timestamp": "2026-05-20T07:58:03.152519",
          "price": 29.5,
          "size": 300.0,
          "notional": 8850.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "180",
          "timestamp": "2026-05-20T07:57:56.959616",
          "price": 29.5,
          "size": 100.0,
          "notional": 2950.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 14809,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "179",
          "timestamp": "2026-05-20T07:57:49.647270",
          "price": 29.4,
          "size": 100.0,
          "notional": 2940.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 14809,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "178",
          "timestamp": "2026-05-20T07:57:43.175836",
          "price": 29.38,
          "size": 500.0,
          "notional": 14690.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "177",
          "timestamp": "2026-05-20T07:57:41.022331",
          "price": 29.38,
          "size": 200.0,
          "notional": 5876.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 14809,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "176",
          "timestamp": "2026-05-20T07:57:41.022331",
          "price": 29.36,
          "size": 300.0,
          "notional": 8808.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 14809,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "175",
          "timestamp": "2026-05-20T07:57:36.702010",
          "price": 29.38,
          "size": 300.0,
          "notional": 8814.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 14809,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "174",
          "timestamp": "2026-05-20T07:57:34.370531",
          "price": 29.38,
          "size": 300.0,
          "notional": 8814.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 14809,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "173",
          "timestamp": "2026-05-20T07:57:17.512416",
          "price": 29.4,
          "size": 100.0,
          "notional": 2940.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 14808,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "172",
          "timestamp": "2026-05-20T07:57:15.485189",
          "price": 29.4,
          "size": 100.0,
          "notional": 2940.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 14808,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "171",
          "timestamp": "2026-05-20T07:57:13.455770",
          "price": 29.4,
          "size": 100.0,
          "notional": 2940.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "170",
          "timestamp": "2026-05-20T07:57:09.421834",
          "price": 29.4,
          "size": 100.0,
          "notional": 2940.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 14808,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "169",
          "timestamp": "2026-05-20T07:57:09.421834",
          "price": 29.38,
          "size": 100.0,
          "notional": 2938.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "168",
          "timestamp": "2026-05-20T07:57:03.332629",
          "price": 29.38,
          "size": 100.0,
          "notional": 2938.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 14808,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "167",
          "timestamp": "2026-05-20T07:57:01.236943",
          "price": 29.38,
          "size": 100.0,
          "notional": 2938.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 14807,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "166",
          "timestamp": "2026-05-20T07:53:04.041128",
          "price": 29.54,
          "size": 200.0,
          "notional": 5908.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 14806,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "165",
          "timestamp": "2026-05-20T07:52:59.455741",
          "price": 29.38,
          "size": 100.0,
          "notional": 2938.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 14806,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "164",
          "timestamp": "2026-05-20T07:52:59.455741",
          "price": 29.34,
          "size": 100.0,
          "notional": 2934.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 14805,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "163",
          "timestamp": "2026-05-20T07:52:56.281012",
          "price": 29.38,
          "size": 100.0,
          "notional": 2938.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 14804,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "162",
          "timestamp": "2026-05-20T07:52:56.281012",
          "price": 29.36,
          "size": 100.0,
          "notional": 2936.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 14804,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "161",
          "timestamp": "2026-05-20T07:52:47.866971",
          "price": 29.36,
          "size": 200.0,
          "notional": 5872.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 14804,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "160",
          "timestamp": "2026-05-20T07:52:41.984103",
          "price": 29.32,
          "size": 100.0,
          "notional": 2932.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 14804,
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
      "total_trades": 16535,
      "price_moving_trades": 8022,
      "pct_price_moving": 48.51527063804052,
      "all_movers": {
        "count": 8022,
        "avg_size": 12827.653253552731,
        "median_size": 5875.0,
        "retail_count": 2358,
        "mixed_count": 1447,
        "institutional_count": 3382,
        "ambiguous_count": 835,
        "unobservable_count": 0,
        "retail_pct": 29.394166043380704,
        "mixed_pct": 18.037895786586887,
        "instit_pct": 42.159062577910746,
        "unclear_pct": 10.408875592121666
      },
      "positive_movers": {
        "count": 4171,
        "avg_size": 12919.687652841047,
        "median_size": 5600.0,
        "retail_count": 1287,
        "mixed_count": 744,
        "institutional_count": 1711,
        "ambiguous_count": 429,
        "unobservable_count": 0,
        "retail_pct": 30.8559098537521,
        "mixed_pct": 17.837449052984898,
        "instit_pct": 41.02133780867898,
        "unclear_pct": 10.285303284584032
      },
      "negative_movers": {
        "count": 3851,
        "avg_size": 12727.971228252403,
        "median_size": 6412.0,
        "retail_count": 1071,
        "mixed_count": 703,
        "institutional_count": 1671,
        "ambiguous_count": 406,
        "unobservable_count": 0,
        "retail_pct": 27.810958192677226,
        "mixed_pct": 18.254998701635937,
        "instit_pct": 43.39132692807063,
        "unclear_pct": 10.542716177616205
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
        "1W"
      ],
      "session": {
        "1D": {
          "opening": 0.0028548358216014783,
          "continuous": 0.9870695001696491,
          "closing": 0.01007566400874936,
          "auctions": 0.012930499830350838,
          "other": 0.0
        },
        "1W": {
          "opening": 0.003261253732969562,
          "continuous": 0.9900541735449243,
          "closing": 0.0066845727221061,
          "auctions": 0.009945826455075663,
          "other": 0.0
        },
        "1M": {
          "opening": 0.001970757497196662,
          "continuous": 0.9892121475934709,
          "closing": 0.008721668756836639,
          "auctions": 0.010692426254033301,
          "other": 9.542615249583836e-05
        },
        "3M": {
          "opening": 0.0038559358061408294,
          "continuous": 0.9868061938375157,
          "closing": 0.009276670911945345,
          "auctions": 0.013132606718086174,
          "other": 6.119944439803905e-05
        }
      },
      "hhi": {
        "1D": 0.17821050958869367,
        "1W": 0.19141899748003405,
        "1M": 0.2001078832442631,
        "3M": 0.21280110047262643
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0068
        },
        {
          "time": "09:30",
          "avg_share": 0.1462
        },
        {
          "time": "10:00",
          "avg_share": 0.0963
        },
        {
          "time": "10:30",
          "avg_share": 0.0665
        },
        {
          "time": "11:00",
          "avg_share": 0.0747
        },
        {
          "time": "11:30",
          "avg_share": 0.0504
        },
        {
          "time": "12:00",
          "avg_share": 0.1279
        },
        {
          "time": "13:00",
          "avg_share": 0.0919
        },
        {
          "time": "13:30",
          "avg_share": 0.0489
        },
        {
          "time": "14:00",
          "avg_share": 0.0369
        },
        {
          "time": "14:30",
          "avg_share": 0.0279
        },
        {
          "time": "15:00",
          "avg_share": 0.0735
        },
        {
          "time": "15:30",
          "avg_share": 0.1443
        },
        {
          "time": "16:00",
          "avg_share": 0.0079
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "3378",
          "auctions_pct": 1.355155700674183,
          "hhi": 0.20636780332998866,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "1349",
          "auctions_pct": 1.0252861677450107,
          "hhi": 0.1772655016384727,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2126",
          "auctions_pct": 1.2935136988569031,
          "hhi": 0.17316799350788367,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "3681",
          "auctions_pct": 0.5456805645607751,
          "hhi": 0.1867209498226984,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1228",
          "auctions_pct": 0.5555731119298276,
          "hhi": 0.2106758866688988,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2509",
          "auctions_pct": 0.992822042704057,
          "hhi": 0.17362553504976036,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6628",
          "auctions_pct": 0.5084229809602863,
          "hhi": 0.19271749346750172,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "3839",
          "auctions_pct": 1.5321446083607047,
          "hhi": 0.3771500768393012,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2137",
          "auctions_pct": 0.6684898576699165,
          "hhi": 0.2050788481780705,
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
