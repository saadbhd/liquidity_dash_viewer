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
      "ticker": "69",
      "name": "SHANGRI-LA ASIA",
      "marketCap": 16421704756.48,
      "sector": "Hotels & Resorts",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "45",
      "name": "HK&S HOTELS",
      "marketCap": 9962582604.24,
      "sector": "Hotels & Resorts",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "1179",
      "name": "HWORLD-S",
      "marketCap": 130538180767.59999,
      "sector": "Hotels & Resorts",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "62",
      "name": "TRANSPORT INT'L",
      "marketCap": 5795530276.89,
      "sector": "Transportation",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "9658",
      "name": "SUPER HI",
      "marketCap": 7530462420.0,
      "sector": "Restaurants",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "999",
      "name": "XIAOCAIYUAN",
      "marketCap": 7670902575.999999,
      "sector": "Restaurants",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "308",
      "name": "CHINA TRAVEL HK",
      "marketCap": 6588594113.71,
      "sector": "Travel & Tourism",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "2255",
      "name": "HAICHANG HLDG",
      "marketCap": 6607001000.0,
      "sector": "Leisure & Recreational Facilities",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "3918",
      "name": "NAGACORP",
      "marketCap": 19240007196.0,
      "sector": "Casinos & Gaming",
      "industry": "Consumer Discretionary - Travel & Leisure"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "69",
    "company": "SHANGRI-LA ASIA",
    "asof_date": "2026-04-10",
    "industry": "Consumer Discretionary - Travel & Leisure",
    "sector": "Hotels & Resorts",
    "market_cap_display": "16.4B",
    "market_cap_category": "large",
    "universe_total": 2574,
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
          "score_pca": 55.78865578865578,
          "score_pca_percentile": 55.78865578865578,
          "rank_pca": 1139,
          "total": 2574,
          "adv_notional_sgd": 970960.0,
          "adv_volume_shares": 212000.0,
          "free_float_shares": 1257968127.0,
          "turnover_ratio": 0.00016852573244886354,
          "votes": 79.0,
          "trades": 79.0,
          "spread_pct": 0.00802946103718788,
          "spread_ticks": 3.6266666666666665,
          "amihud": 1.830948522882291e-08,
          "volatility": 0.21046359254417513
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5400284995128607,
          "loadings": {
            "log_adv": 0.5402014817070511,
            "log_trades": 0.5011820747796301,
            "log_turnover": 0.5017339771427008,
            "neg_spread": 0.39367231960440763,
            "neg_amihud": 0.04034519723306978,
            "neg_vol": -0.22058166990747446
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
          "peer_median_adv": 9195076.825,
          "peer_median_score_pca": 73.07692307692308,
          "peer_median_trades": 553.5,
          "peer_median_volatility": 0.2852632445707649,
          "peer_median_spread_pct": 0.00673503236991612,
          "peer_median_spread_ticks": 1.7886178861788617,
          "peer_median_amihud": 2.028801173598884e-09,
          "peer_median_turnover_ratio": 0.005042549006605612,
          "target_vs_peer": {
            "score_pca_delta": -17.29,
            "adv_delta_pct": -89.4,
            "trades_delta_pct": -85.73,
            "volatility_delta_pct": 26.22,
            "spread_pct_delta_pct": -19.22,
            "spread_ticks_delta_pct": 102.76,
            "amihud_delta_pct": -802.48,
            "turnover_ratio_delta_pct": -96.66
          }
        },
        "peer_liquidity": [
          {
            "ticker": "69",
            "score_pca": 55.78865578865578,
            "rank_pca": 1139,
            "adv": 970960.0,
            "trades": 79.0,
            "volatility": 0.21046359254417513,
            "spread_pct": 0.00802946103718788,
            "spread_ticks": 3.6266666666666665,
            "amihud": 1.830948522882291e-08,
            "turnover_ratio": 0.00016852573244886354,
            "is_target": true
          },
          {
            "ticker": "45",
            "score_pca": 52.7972027972028,
            "rank_pca": 1216,
            "adv": 410720.0,
            "trades": 76.0,
            "volatility": 0.14288780723382727,
            "spread_pct": 0.011074550205374864,
            "spread_ticks": 6.675675675675675,
            "amihud": 4.024378072612537e-09,
            "turnover_ratio": 0.00018321750847850472,
            "is_target": false
          },
          {
            "ticker": "1179",
            "score_pca": 93.82284382284382,
            "rank_pca": 160,
            "adv": 530443904.0,
            "trades": 4546.0,
            "volatility": 0.20814601047040393,
            "spread_pct": 0.002030396895173963,
            "spread_ticks": null,
            "amihud": 0.0,
            "turnover_ratio": 0.02537233243307897,
            "is_target": false
          },
          {
            "ticker": "62",
            "score_pca": 60.994560994561,
            "rank_pca": 1005,
            "adv": 1647557.07,
            "trades": 129.0,
            "volatility": 0.2103088273464341,
            "spread_pct": 0.007668649546125931,
            "spread_ticks": null,
            "amihud": 5.002411383393361e-09,
            "turnover_ratio": 0.0005770929473763338,
            "is_target": false
          },
          {
            "ticker": "9658",
            "score_pca": 69.85236985236986,
            "rank_pca": 777,
            "adv": 4557888.0,
            "trades": 240.0,
            "volatility": 0.5063285509621948,
            "spread_pct": 0.005801415193706308,
            "spread_ticks": null,
            "amihud": 9.487561616968922e-09,
            "turnover_ratio": 0.0019992871139499634,
            "is_target": false
          },
          {
            "ticker": "999",
            "score_pca": 80.73038073038073,
            "rank_pca": 497,
            "adv": 18829760.0,
            "trades": 1150.0,
            "volatility": 0.31829890889073476,
            "spread_pct": 0.0037670872084488195,
            "spread_ticks": 2.4696557971014492,
            "amihud": 1.0381901936323779e-09,
            "turnover_ratio": 0.016360863545412725,
            "is_target": false
          },
          {
            "ticker": "308",
            "score_pca": 81.85703185703186,
            "rank_pca": 468,
            "adv": 29093120.0,
            "trades": 1086.0,
            "volatility": 0.4848644963496282,
            "spread_pct": 0.009754149791797397,
            "spread_ticks": 1.1539434837621256,
            "amihud": 1.195561311253389e-09,
            "turnover_ratio": 0.013862985422863858,
            "is_target": false
          },
          {
            "ticker": "2255",
            "score_pca": 71.75602175602177,
            "rank_pca": 728,
            "adv": 6851000.0,
            "trades": 609.0,
            "volatility": 0.2846066143911051,
            "spread_pct": 0.01943234456007333,
            "spread_ticks": 1.082226438962682,
            "amihud": 2.8620410359443792e-09,
            "turnover_ratio": 0.004380554715698802,
            "is_target": false
          },
          {
            "ticker": "3918",
            "score_pca": 74.3978243978244,
            "rank_pca": 660,
            "adv": 11539153.649999999,
            "trades": 498.0,
            "volatility": 0.28591987475042474,
            "spread_pct": 0.004130534916788498,
            "spread_ticks": 1.7886178861788617,
            "amihud": 8.042827698543392e-10,
            "turnover_ratio": 0.005704543297512423,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Hotels & Resorts",
          "sector_count": 25,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4494884703154094,
              "median": 0.3061697294598438,
              "min": 0.0,
              "max": 9.393313124786681,
              "p5": 0.0,
              "p95": 1.3813199111878136,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 67524991.66783933,
              "median": 281655.0,
              "min": 0.0,
              "max": 10425795200.0,
              "p5": 0.0,
              "p95": 282285197.7139998,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04878238946505183,
              "median": 0.028148482980643118,
              "min": 0.0004478493785191276,
              "max": 0.7648559970834851,
              "p5": 0.0013854669278569338,
              "p95": 0.16126579974852753,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006513092251608542,
              "median": 0.0011510789284790428,
              "min": 0.0,
              "max": 0.7118303545605582,
              "p5": 0.0,
              "p95": 0.022427266731968105,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1276946212907057e-05,
              "median": 5.654850542300145e-09,
              "min": 0.0,
              "max": 0.014034878165312945,
              "p5": 0.0,
              "p95": 5.854475045424379e-06,
              "count": 2211
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1262.1495726495727,
              "median": 23.0,
              "min": 0.0,
              "max": 97719.0,
              "p5": 0.0,
              "p95": 6548.449999999997,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2669030749632345,
              "median": 0.14288780723382727,
              "min": 0.0,
              "max": 1.2730366958631603,
              "p5": 0.0,
              "p95": 1.0652388013151586,
              "count": 25
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 21330890.624,
              "median": 24192.0,
              "min": 0.0,
              "max": 530443904.0,
              "p5": 0.0,
              "p95": 858911.9999999984,
              "count": 25
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06228347363804617,
              "median": 0.04480651731160891,
              "min": 0.002030396895173963,
              "max": 0.22924144532184743,
              "p5": 0.008638478870825276,
              "p95": 0.1294969774277632,
              "count": 25
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001957825967643945,
              "median": 0.00011650468790673233,
              "min": 0.0,
              "max": 0.02537233243307897,
              "p5": 0.0,
              "p95": 0.010091313880889793,
              "count": 25
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3949639004447126e-05,
              "median": 2.0598117606257715e-07,
              "min": 0.0,
              "max": 0.00020885547201336674,
              "p5": 0.0,
              "p95": 5.978814223057619e-05,
              "count": 18
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 202.36,
              "median": 4.0,
              "min": 0.0,
              "max": 4546.0,
              "p5": 0.0,
              "p95": 78.39999999999999,
              "count": 25
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 75421637.84,
              "median": 9195076.825,
              "min": 410720.0,
              "max": 530443904.0,
              "p5": 843612.9745,
              "p95": 354971129.5999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1041.75,
              "median": 553.5,
              "min": 76.0,
              "max": 4546.0,
              "p5": 94.55,
              "p95": 3357.3999999999983,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3051701362993441,
              "median": 0.2852632445707649,
              "min": 0.14288780723382727,
              "max": 0.5063285509621948,
              "p5": 0.1657281783666291,
              "p95": 0.49881613184779644,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007957391039686137,
              "median": 0.00673503236991612,
              "min": 0.002030396895173963,
              "max": 0.01943234456007333,
              "p5": 0.002638238504820163,
              "p95": 0.016507116535928863,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.634023856336159,
              "median": 1.7886178861788617,
              "min": 1.082226438962682,
              "max": 6.675675675675675,
              "p5": 1.0965698479225707,
              "p95": 5.8344716999608295,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.051803297957413e-09,
              "median": 2.028801173598884e-09,
              "min": 0.0,
              "max": 9.487561616968922e-09,
              "p5": 2.8149896944901874e-10,
              "p95": 7.917759035217474e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008555109623046448,
              "median": 0.005042549006605612,
              "min": 0.00018321750847850472,
              "max": 0.02537233243307897,
              "p5": 0.0003210739120927449,
              "p95": 0.022218318322395778,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.017777777777777892,
            "market": 0.005388454653585173,
            "sector": 0.0,
            "peers": -0.0008264462809917106,
            "vs_market": 0.01238932312419272,
            "vs_sector": 0.017777777777777892,
            "vs_peers": 0.018604224058769603
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 65.73426573426573,
          "score_pca_percentile": 65.73426573426573,
          "rank_pca": 883,
          "total": 2574,
          "adv_notional_sgd": 1865600.0000000002,
          "adv_volume_shares": 424000.0,
          "free_float_shares": 1257968127.0,
          "turnover_ratio": 0.0003370514648977271,
          "votes": 110.0,
          "trades": 110.0,
          "spread_pct": 0.007643658972222863,
          "spread_ticks": 3.553223388305847,
          "amihud": 7.383779313603836e-09,
          "volatility": 0.29871812118106017
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5765277475911126,
          "loadings": {
            "log_adv": 0.5181555550034231,
            "log_trades": 0.4722099042357569,
            "log_turnover": 0.4789912604935159,
            "neg_spread": 0.45881035349043897,
            "neg_amihud": 0.24955194829127933,
            "neg_vol": 0.07947882841102738
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
          "peer_median_adv": 9950695.0,
          "peer_median_score_pca": 75.5050505050505,
          "peer_median_trades": 529.0,
          "peer_median_volatility": 0.34889915762148443,
          "peer_median_spread_pct": 0.006425236799683371,
          "peer_median_spread_ticks": 1.6694444444444445,
          "peer_median_amihud": 1.6445172791870427e-09,
          "peer_median_turnover_ratio": 0.004937590043561591,
          "target_vs_peer": {
            "score_pca_delta": -9.77,
            "adv_delta_pct": -81.3,
            "trades_delta_pct": -79.21,
            "volatility_delta_pct": 14.38,
            "spread_pct_delta_pct": -18.96,
            "spread_ticks_delta_pct": 112.84,
            "amihud_delta_pct": -348.99,
            "turnover_ratio_delta_pct": -93.17
          }
        },
        "peer_liquidity": [
          {
            "ticker": "69",
            "score_pca": 65.73426573426573,
            "rank_pca": 883,
            "adv": 1865600.0000000002,
            "trades": 110.0,
            "volatility": 0.29871812118106017,
            "spread_pct": 0.007643658972222863,
            "spread_ticks": 3.553223388305847,
            "amihud": 7.383779313603836e-09,
            "turnover_ratio": 0.0003370514648977271,
            "is_target": true
          },
          {
            "ticker": "45",
            "score_pca": 60.95571095571095,
            "rank_pca": 1006,
            "adv": 765900.0,
            "trades": 53.0,
            "volatility": 0.34066387468656284,
            "spread_pct": 0.01000176367846433,
            "spread_ticks": 6.463235294117647,
            "amihud": 2.104202750456026e-08,
            "turnover_ratio": 0.0003098531393386477,
            "is_target": false
          },
          {
            "ticker": "1179",
            "score_pca": 90.28749028749029,
            "rank_pca": 251,
            "adv": 98124880.0,
            "trades": 3909.0,
            "volatility": 0.4086647989364213,
            "spread_pct": 0.0014409284946526567,
            "spread_ticks": null,
            "amihud": 2.1155464881174842e-10,
            "turnover_ratio": 0.005143801227160158,
            "is_target": false
          },
          {
            "ticker": "62",
            "score_pca": 66.55011655011654,
            "rank_pca": 862,
            "adv": 1647557.07,
            "trades": 109.0,
            "volatility": 0.22678113784871864,
            "spread_pct": 0.006692373047513226,
            "spread_ticks": null,
            "amihud": 4.8003533060033105e-09,
            "turnover_ratio": 0.0005770929473763338,
            "is_target": false
          },
          {
            "ticker": "9658",
            "score_pca": 70.9013209013209,
            "rank_pca": 750,
            "adv": 4525718.68,
            "trades": 185.0,
            "volatility": 0.3284050119813379,
            "spread_pct": 0.006158100551853516,
            "spread_ticks": null,
            "amihud": 2.97500203592406e-09,
            "turnover_ratio": 0.0018058398313085242,
            "is_target": false
          },
          {
            "ticker": "999",
            "score_pca": 77.66122766122766,
            "rank_pca": 576,
            "adv": 10722240.0,
            "trades": 549.0,
            "volatility": 0.2993332890894064,
            "spread_pct": 0.004633059244387276,
            "spread_ticks": 3.4926470588235294,
            "amihud": 1.2820440061776084e-09,
            "turnover_ratio": 0.008076193583912875,
            "is_target": false
          },
          {
            "ticker": "308",
            "score_pca": 76.10722610722611,
            "rank_pca": 616,
            "adv": 9579500.0,
            "trades": 571.0,
            "volatility": 0.35713444055640603,
            "spread_pct": 0.009504723733180544,
            "spread_ticks": 1.0927272727272728,
            "amihud": 1.6953775463383922e-09,
            "turnover_ratio": 0.004731378859963025,
            "is_target": false
          },
          {
            "ticker": "2255",
            "score_pca": 74.9028749028749,
            "rank_pca": 647,
            "adv": 10321890.0,
            "trades": 509.0,
            "volatility": 0.4059656632064507,
            "spread_pct": 0.017072771509500456,
            "spread_ticks": 1.0221729490022173,
            "amihud": 1.5175973301942083e-09,
            "turnover_ratio": 0.00647044569340447,
            "is_target": false
          },
          {
            "ticker": "3918",
            "score_pca": 77.81662781662781,
            "rank_pca": 572,
            "adv": 13500235.71,
            "trades": 550.0,
            "volatility": 0.4079922464961165,
            "spread_pct": 0.004130534916788498,
            "spread_ticks": 1.6694444444444445,
            "amihud": 1.5936570120356933e-09,
            "turnover_ratio": 0.007501818760947387,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Hotels & Resorts",
          "sector_count": 25,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6796127168974047,
              "median": 0.5580095690772611,
              "min": 0.0,
              "max": 10.049160326010377,
              "p5": 0.2064489296469208,
              "p95": 1.6006843710794219,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 65051119.21526279,
              "median": 227185.035,
              "min": 0.0,
              "max": 12576080000.0,
              "p5": 0.0,
              "p95": 244040953.27849993,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.046246612984016784,
              "median": 0.028969965419434997,
              "min": 0.0005957156584162828,
              "max": 0.8377358490566037,
              "p5": 0.001483608700860973,
              "p95": 0.14692304000951856,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00458375444702725,
              "median": 0.0008905645172358846,
              "min": 0.0,
              "max": 0.74849980977415,
              "p5": 0.0,
              "p95": 0.016778360261496133,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2527321305846246e-06,
              "median": 4.606596646397586e-08,
              "min": 0.0,
              "max": 0.00021538348509114532,
              "p5": 3.7239762836912706e-11,
              "p95": 5.145790517540841e-06,
              "count": 2567
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1166.7696192696192,
              "median": 21.0,
              "min": 0.0,
              "max": 83841.0,
              "p5": 0.0,
              "p95": 5967.499999999997,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7067234102439235,
              "median": 0.5112020323252668,
              "min": 0.20053842738677177,
              "max": 3.852611742880379,
              "p5": 0.21562656708445585,
              "p95": 1.5744947181483897,
              "count": 25
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4080087.4168000002,
              "median": 28000.000000000004,
              "min": 0.0,
              "max": 98124880.0,
              "p5": 0.0,
              "p95": 1645659.999999997,
              "count": 25
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06287442240765355,
              "median": 0.0597451430958846,
              "min": 0.0014409284946526567,
              "max": 0.20114643043251698,
              "p5": 0.008115279913471158,
              "p95": 0.1403316990025125,
              "count": 25
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005859835861657632,
              "median": 0.00018925909240192143,
              "min": 0.0,
              "max": 0.005143801227160158,
              "p5": 0.0,
              "p95": 0.0027599947083748293,
              "count": 25
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5985764156616457e-06,
              "median": 2.295497427542253e-07,
              "min": 0.0,
              "max": 1.8541291855495552e-05,
              "p5": 0.0,
              "p95": 4.972816102945198e-06,
              "count": 25
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 172.2,
              "median": 5.0,
              "min": 0.0,
              "max": 3909.0,
              "p5": 0.0,
              "p95": 98.59999999999984,
              "count": 25
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 18648490.1825,
              "median": 9950695.0,
              "min": 765900.0,
              "max": 98124880.0,
              "p5": 1074479.9745,
              "p95": 68506254.49849996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 804.375,
              "median": 529.0,
              "min": 53.0,
              "max": 3909.0,
              "p5": 72.6,
              "p95": 2740.699999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34686755785017753,
              "median": 0.34889915762148443,
              "min": 0.22678113784871864,
              "max": 0.4086647989364213,
              "p5": 0.25217439078295933,
              "p95": 0.4084294055823146,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007454281897042563,
              "median": 0.006425236799683371,
              "min": 0.0014409284946526567,
              "max": 0.017072771509500456,
              "p5": 0.0023822907424002012,
              "p95": 0.014597918768637808,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.7480454038230215,
              "median": 1.6694444444444445,
              "min": 1.0221729490022173,
              "max": 6.463235294117647,
              "p5": 1.0362838137472283,
              "p95": 5.869117647058823,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.38970167375566e-09,
              "median": 1.6445172791870427e-09,
              "min": 2.1155464881174842e-10,
              "max": 2.104202750456026e-08,
              "p5": 5.862259238897994e-10,
              "p95": 1.535744153506532e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0043270530054264275,
              "median": 0.004937590043561591,
              "min": 0.0003098531393386477,
              "max": 0.008076193583912875,
              "p5": 0.00040338707215183784,
              "p95": 0.007875162395874954,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.02966101694915224,
            "market": 0.005817570896814672,
            "sector": 0.001295672454003638,
            "peers": -0.049534487757306844,
            "vs_market": -0.035478587845966914,
            "vs_sector": -0.03095668940315588,
            "vs_peers": 0.019873470808154603
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 67.09401709401709,
          "score_pca_percentile": 67.09401709401709,
          "rank_pca": 848,
          "total": 2574,
          "adv_notional_sgd": 2270916.0,
          "adv_volume_shares": 464400.0,
          "free_float_shares": 1257968127.0,
          "turnover_ratio": 0.00036916674598703883,
          "votes": 111.0,
          "trades": 111.0,
          "spread_pct": 0.005430683360989608,
          "spread_ticks": 2.582089552238806,
          "amihud": 4.700142292099454e-09,
          "volatility": 0.2992620299344484
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6182558458869569,
          "loadings": {
            "log_adv": 0.49909213747302106,
            "log_trades": 0.4512126098883448,
            "log_turnover": 0.45331307911878305,
            "neg_spread": 0.4603409312256307,
            "neg_amihud": 0.3325096349136359,
            "neg_vol": 0.1390864515980156
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
          "peer_median_adv": 11269441.515,
          "peer_median_score_pca": 76.12665112665113,
          "peer_median_trades": 567.5,
          "peer_median_volatility": 0.3231078659999763,
          "peer_median_spread_pct": 0.0053805682229472905,
          "peer_median_spread_ticks": 1.8229098090849243,
          "peer_median_amihud": 1.3397423206908333e-09,
          "peer_median_turnover_ratio": 0.00465797683092165,
          "target_vs_peer": {
            "score_pca_delta": -9.03,
            "adv_delta_pct": -79.8,
            "trades_delta_pct": -80.44,
            "volatility_delta_pct": 7.38,
            "spread_pct_delta_pct": -0.93,
            "spread_ticks_delta_pct": 41.65,
            "amihud_delta_pct": -250.82,
            "turnover_ratio_delta_pct": -92.07
          }
        },
        "peer_liquidity": [
          {
            "ticker": "69",
            "score_pca": 67.09401709401709,
            "rank_pca": 848,
            "adv": 2270916.0,
            "trades": 111.0,
            "volatility": 0.2992620299344484,
            "spread_pct": 0.005430683360989608,
            "spread_ticks": 2.582089552238806,
            "amihud": 4.700142292099454e-09,
            "turnover_ratio": 0.00036916674598703883,
            "is_target": true
          },
          {
            "ticker": "45",
            "score_pca": 65.22921522921523,
            "rank_pca": 896,
            "adv": 1092960.0,
            "trades": 76.0,
            "volatility": 0.309293251535911,
            "spread_pct": 0.0066380559844010575,
            "spread_ticks": 4.481927710843373,
            "amihud": 8.2351393840414e-09,
            "turnover_ratio": 0.0004957650229418363,
            "is_target": false
          },
          {
            "ticker": "1179",
            "score_pca": 89.8989898989899,
            "rank_pca": 261,
            "adv": 84944380.0,
            "trades": 3550.0,
            "volatility": 0.3335926931292708,
            "spread_pct": 0.0014409284946526567,
            "spread_ticks": null,
            "amihud": 1.7422202004185632e-10,
            "turnover_ratio": 0.004134345317842566,
            "is_target": false
          },
          {
            "ticker": "62",
            "score_pca": 68.57031857031856,
            "rank_pca": 810,
            "adv": 1932840.0,
            "trades": 124.0,
            "volatility": 0.2405432876766652,
            "spread_pct": 0.004603035894041065,
            "spread_ticks": null,
            "amihud": 2.4935269988513423e-09,
            "turnover_ratio": 0.0006714397102827934,
            "is_target": false
          },
          {
            "ticker": "9658",
            "score_pca": 71.60062160062161,
            "rank_pca": 732,
            "adv": 4557888.0,
            "trades": 200.0,
            "volatility": 0.31262303887068177,
            "spread_pct": 0.006158100551853516,
            "spread_ticks": null,
            "amihud": 2.8546902714063505e-09,
            "turnover_ratio": 0.0018058398313085242,
            "is_target": false
          },
          {
            "ticker": "999",
            "score_pca": 78.39937839937839,
            "rank_pca": 557,
            "adv": 11083098.03,
            "trades": 578.0,
            "volatility": 0.34424250468147827,
            "spread_pct": 0.004445982975138353,
            "spread_ticks": 3.503086419753086,
            "amihud": 1.169868767556393e-09,
            "turnover_ratio": 0.008062280051756526,
            "is_target": false
          },
          {
            "ticker": "308",
            "score_pca": 77.58352758352758,
            "rank_pca": 578,
            "adv": 12008800.0,
            "trades": 634.0,
            "volatility": 0.2944820940120891,
            "spread_pct": 0.008503655997784867,
            "spread_ticks": 1.0925892371806487,
            "amihud": 9.243534979200262e-10,
            "turnover_ratio": 0.005181608344000734,
            "is_target": false
          },
          {
            "ticker": "2255",
            "score_pca": 74.66977466977467,
            "rank_pca": 653,
            "adv": 11455785.0,
            "trades": 557.0,
            "volatility": 0.5345020960922069,
            "spread_pct": 0.01907400079145233,
            "spread_ticks": 1.02725086828747,
            "amihud": 1.5096158738252734e-09,
            "turnover_ratio": 0.007020972274957042,
            "is_target": false
          },
          {
            "ticker": "3918",
            "score_pca": 79.6037296037296,
            "rank_pca": 526,
            "adv": 17861134.5,
            "trades": 689.0,
            "volatility": 0.3875463628037685,
            "spread_pct": 0.004158095193056281,
            "spread_ticks": 1.8229098090849243,
            "amihud": 1.031504998737555e-09,
            "turnover_ratio": 0.008652566314072048,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Hotels & Resorts",
          "sector_count": 25,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7050481990725268,
              "median": 0.5783560432490424,
              "min": 0.0,
              "max": 8.223126969362776,
              "p5": 0.22085230509755144,
              "p95": 1.5710900513988801,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61996073.903859206,
              "median": 229028.0,
              "min": 0.0,
              "max": 14268680000.0,
              "p5": 0.0,
              "p95": 239286703.94299993,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04282931079238141,
              "median": 0.02701177101118201,
              "min": 0.0005617553716258445,
              "max": 0.6003953685399606,
              "p5": 0.0014362734329899636,
              "p95": 0.13628709614692394,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004119328995950241,
              "median": 0.0008952838912855968,
              "min": 0.0,
              "max": 0.4275637256597378,
              "p5": 0.0,
              "p95": 0.016356808590783773,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.20596480762886e-07,
              "median": 4.322802925070572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.533679427385981e-11,
              "p95": 3.6004832555031596e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1095.4201631701633,
              "median": 20.0,
              "min": 0.0,
              "max": 83841.0,
              "p5": 0.0,
              "p95": 5986.75,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6675684749590302,
              "median": 0.5229528360886389,
              "min": 0.1931607052308529,
              "max": 2.270174305072115,
              "p5": 0.25939500199737153,
              "p95": 1.29444134391529,
              "count": 25
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3587812.1348,
              "median": 23400.0,
              "min": 0.0,
              "max": 84944380.0,
              "p5": 0.0,
              "p95": 2035324.7999999966,
              "count": 25
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.061456547529519984,
              "median": 0.055617352614015465,
              "min": 0.0014409284946526567,
              "max": 0.21586029201259666,
              "p5": 0.005672157885671898,
              "p95": 0.12065470824172411,
              "count": 25
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005975630608991786,
              "median": 0.00012097731109444792,
              "min": 0.0,
              "max": 0.004134345317842566,
              "p5": 0.0,
              "p95": 0.0032359881172397383,
              "count": 25
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.209440215761765e-06,
              "median": 1.3510656818032939e-07,
              "min": 0.0,
              "max": 1.0001869181827557e-05,
              "p5": 3.4844404008371296e-11,
              "p95": 4.812873750585543e-06,
              "count": 25
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 158.88,
              "median": 5.0,
              "min": 0.0,
              "max": 3550.0,
              "p5": 0.0,
              "p95": 103.9999999999999,
              "count": 25
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 18117110.69125,
              "median": 11269441.515,
              "min": 1092960.0,
              "max": 84944380.0,
              "p5": 1386918.0,
              "p95": 61465244.074999966,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 801.0,
              "median": 567.5,
              "min": 76.0,
              "max": 3550.0,
              "p5": 92.8,
              "p95": 2548.6499999999987,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34460316610025893,
              "median": 0.3231078659999763,
              "min": 0.2405432876766652,
              "max": 0.5345020960922069,
              "p5": 0.2594218698940636,
              "p95": 0.4830675894412534,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006877731985297516,
              "median": 0.0053805682229472905,
              "min": 0.0014409284946526567,
              "max": 0.01907400079145233,
              "p5": 0.0023919368390939253,
              "p95": 0.015374380113668713,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3855528090299005,
              "median": 1.8229098090849243,
              "min": 1.02725086828747,
              "max": 4.481927710843373,
              "p5": 1.0403185420661056,
              "p95": 4.2861594526253155,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2991152265475246e-09,
              "median": 1.3397423206908333e-09,
              "min": 1.7422202004185632e-10,
              "max": 8.2351393840414e-09,
              "p5": 4.367680372992158e-10,
              "p95": 6.3519821946191294e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004503102108395258,
              "median": 0.00465797683092165,
              "min": 0.0004957650229418363,
              "max": 0.008652566314072048,
              "p5": 0.0005572511635111713,
              "p95": 0.008445966122261615,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.04384133611691088,
            "market": 0.07151156981189555,
            "sector": -0.00900552141919464,
            "peers": -0.10598639004922528,
            "vs_market": -0.11535290592880643,
            "vs_sector": -0.03483581469771624,
            "vs_peers": 0.0621450539323144
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 66.62781662781663,
          "score_pca_percentile": 66.62781662781663,
          "rank_pca": 860,
          "total": 2574,
          "adv_notional_sgd": 2286580.0,
          "adv_volume_shares": 500000.0,
          "free_float_shares": 1257968127.0,
          "turnover_ratio": 0.0003974663501152442,
          "votes": 117.0,
          "trades": 117.0,
          "spread_pct": 0.005138259061703013,
          "spread_ticks": 2.3813731514481176,
          "amihud": 2.7124058325483433e-09,
          "volatility": 0.25031797538452993
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6224653367380784,
          "loadings": {
            "log_adv": 0.49903291784430553,
            "log_trades": 0.45352576016047375,
            "log_turnover": 0.4522110148130319,
            "neg_spread": 0.46252219754274,
            "neg_amihud": 0.3374910730722831,
            "neg_vol": 0.11383638362661222
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
          "peer_median_adv": 13056326.23,
          "peer_median_score_pca": 77.03962703962705,
          "peer_median_trades": 690.5,
          "peer_median_volatility": 0.3417353077700388,
          "peer_median_spread_pct": 0.0048712029323362965,
          "peer_median_spread_ticks": 1.847193693750632,
          "peer_median_amihud": 1.0770759581025399e-09,
          "peer_median_turnover_ratio": 0.005103956180177367,
          "target_vs_peer": {
            "score_pca_delta": -10.41,
            "adv_delta_pct": -82.5,
            "trades_delta_pct": -83.06,
            "volatility_delta_pct": 26.75,
            "spread_pct_delta_pct": -5.48,
            "spread_ticks_delta_pct": 28.92,
            "amihud_delta_pct": -151.83,
            "turnover_ratio_delta_pct": -92.21
          }
        },
        "peer_liquidity": [
          {
            "ticker": "69",
            "score_pca": 66.62781662781663,
            "rank_pca": 860,
            "adv": 2286580.0,
            "trades": 117.0,
            "volatility": 0.25031797538452993,
            "spread_pct": 0.005138259061703013,
            "spread_ticks": 2.3813731514481176,
            "amihud": 2.7124058325483433e-09,
            "turnover_ratio": 0.0003974663501152442,
            "is_target": true
          },
          {
            "ticker": "45",
            "score_pca": 60.256410256410255,
            "rank_pca": 1024,
            "adv": 705827.5,
            "trades": 38.0,
            "volatility": 0.2649797015817215,
            "spread_pct": 0.0077876151641418515,
            "spread_ticks": 4.826068154298564,
            "amihud": 9.666038374172314e-09,
            "turnover_ratio": 0.00030783235799513475,
            "is_target": false
          },
          {
            "ticker": "1179",
            "score_pca": 87.87878787878788,
            "rank_pca": 313,
            "adv": 62368636.0,
            "trades": 2842.5,
            "volatility": 0.3127285844270071,
            "spread_pct": 0.0014596134652365453,
            "spread_ticks": null,
            "amihud": 2.2025559767108112e-10,
            "turnover_ratio": 0.0034402941084780907,
            "is_target": false
          },
          {
            "ticker": "62",
            "score_pca": 66.47241647241647,
            "rank_pca": 864,
            "adv": 1575695.9,
            "trades": 105.0,
            "volatility": 0.18335441930863802,
            "spread_pct": 0.0041607068704132754,
            "spread_ticks": null,
            "amihud": 2.4587084054706495e-09,
            "turnover_ratio": 0.0005579891599131465,
            "is_target": false
          },
          {
            "ticker": "9658",
            "score_pca": 72.14452214452216,
            "rank_pca": 718,
            "adv": 5855604.0,
            "trades": 236.5,
            "volatility": 0.2962242792735295,
            "spread_pct": 0.005046094970455435,
            "spread_ticks": null,
            "amihud": 1.7589626497955833e-09,
            "turnover_ratio": 0.0022675476594415348,
            "is_target": false
          },
          {
            "ticker": "999",
            "score_pca": 78.16627816627818,
            "rank_pca": 563,
            "adv": 12674352.46,
            "trades": 639.5,
            "volatility": 0.3707420311130706,
            "spread_pct": 0.004696310894217157,
            "spread_ticks": 3.6336447562483354,
            "amihud": 1.067851793030461e-09,
            "turnover_ratio": 0.007869697165401078,
            "is_target": false
          },
          {
            "ticker": "308",
            "score_pca": 78.36052836052836,
            "rank_pca": 558,
            "adv": 16704120.0,
            "trades": 812.5,
            "volatility": 0.44468457322909016,
            "spread_pct": 0.008032315202759602,
            "spread_ticks": 1.0947677418368267,
            "amihud": 6.248778448341726e-10,
            "turnover_ratio": 0.006767618251876642,
            "is_target": false
          },
          {
            "ticker": "2255",
            "score_pca": 75.91297591297591,
            "rank_pca": 621,
            "adv": 13438300.0,
            "trades": 741.5,
            "volatility": 0.7417524776411677,
            "spread_pct": 0.014539786114052242,
            "spread_ticks": 1.0297494235971172,
            "amihud": 1.0863001231746187e-09,
            "turnover_ratio": 0.007622331450276663,
            "is_target": false
          },
          {
            "ticker": "3918",
            "score_pca": 81.11888111888112,
            "rank_pca": 487,
            "adv": 21901577.9,
            "trades": 823.0,
            "volatility": 0.4111734564242278,
            "spread_pct": 0.00407952705270007,
            "spread_ticks": 1.847193693750632,
            "amihud": 7.495301059062292e-10,
            "turnover_ratio": 0.010444442987850064,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Hotels & Resorts",
          "sector_count": 25,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7392811363447659,
              "median": 0.5981546596018028,
              "min": 0.0,
              "max": 33.69284958669689,
              "p5": 0.22530761419840245,
              "p95": 1.5551236721277741,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 56751885.99842481,
              "median": 221248.3125,
              "min": 0.0,
              "max": 11530530000.0,
              "p5": 0.0,
              "p95": 211998477.29999983,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04197546340436465,
              "median": 0.02664491311247985,
              "min": 0.000558678699550006,
              "max": 0.6003953685399606,
              "p5": 0.001386836666578392,
              "p95": 0.13589358247871558,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003682172566532977,
              "median": 0.0008713899321640519,
              "min": 0.0,
              "max": 0.18632,
              "p5": 0.0,
              "p95": 0.014686982968052754,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.369209259933948e-07,
              "median": 4.6009826461052226e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.9617717549704375e-11,
              "p95": 3.4747662267446528e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1040.1926961926963,
              "median": 21.0,
              "min": 0.0,
              "max": 93269.5,
              "p5": 0.0,
              "p95": 5605.64999999998,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7128422643176322,
              "median": 0.5760504536737222,
              "min": 0.22985007356641865,
              "max": 1.7826665305683562,
              "p5": 0.24131208730057144,
              "p95": 1.4670342937849656,
              "count": 25
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2674247.8441999997,
              "median": 33452.5,
              "min": 0.0,
              "max": 62368636.0,
              "p5": 0.0,
              "p95": 1970429.4999999956,
              "count": 25
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06253289195704774,
              "median": 0.052529042772945206,
              "min": 0.0014596134652365453,
              "max": 0.2207481815526441,
              "p5": 0.0056681302821907815,
              "p95": 0.16607988931112336,
              "count": 25
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005590585609280242,
              "median": 0.00016353806191352427,
              "min": 0.0,
              "max": 0.003542715897846593,
              "p5": 0.0,
              "p95": 0.0031557646431688044,
              "count": 25
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.225924032280587e-06,
              "median": 9.999270053286133e-08,
              "min": 0.0,
              "max": 1.1671335200746922e-05,
              "p5": 4.4051119534216264e-11,
              "p95": 4.177582738588672e-06,
              "count": 25
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 131.2,
              "median": 5.0,
              "min": 0.0,
              "max": 2842.5,
              "p5": 0.0,
              "p95": 110.59999999999991,
              "count": 25
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 16903014.22,
              "median": 13056326.23,
              "min": 705827.5,
              "max": 62368636.0,
              "p5": 1010281.44,
              "p95": 48205165.66499998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 779.8125,
              "median": 690.5,
              "min": 38.0,
              "max": 2842.5,
              "p5": 61.45,
              "p95": 2135.674999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.37820494037480656,
              "median": 0.3417353077700388,
              "min": 0.18335441930863802,
              "max": 0.7417524776411677,
              "p5": 0.21192326810421724,
              "p95": 0.6377787110969404,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0062252462167470225,
              "median": 0.0048712029323362965,
              "min": 0.0014596134652365453,
              "max": 0.014539786114052242,
              "p5": 0.002376583220848779,
              "p95": 0.012262171295099815,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.4862847539462956,
              "median": 1.847193693750632,
              "min": 1.0297494235971172,
              "max": 4.826068154298564,
              "p5": 1.042753087245059,
              "p95": 4.587583474688518,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2040656117568885e-09,
              "median": 1.0770759581025399e-09,
              "min": 2.2025559767108112e-10,
              "max": 9.666038374172314e-09,
              "p5": 3.618733841781631e-10,
              "p95": 7.143472885126727e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004909719142654045,
              "median": 0.005103956180177367,
              "min": 0.00030783235799513475,
              "max": 0.010444442987850064,
              "p5": 0.00039538723866643885,
              "p95": 0.009543281949992918,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.006593406593405904,
            "market": 0.11289080174108235,
            "sector": -0.0050667995683783,
            "peers": -0.17910702168314907,
            "vs_market": -0.10629739514767644,
            "vs_sector": 0.011660206161784203,
            "vs_peers": 0.18570042827655497
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 55.8 vs peer median 73.1 (-17.3 pts).",
        "market_comparison": "The stock rose 1.8% on the day compared with peers down 0.1%. That matters because price outperformance did not translate into stronger trading access."
      },
      "30d": {
        "liquidity": "Monthly tradability is weak for the company’s size, with a 1M liquidity score of 65.7. That matters because access screens below where peers typically sit.",
        "market_comparison": "The stock fell 3.0% over 1M compared with peers down 5.0% and the market up 0.6%. That matters because relative resilience against peers has not been enough to lift liquidity closer to market standards."
      },
      "3m": {
        "liquidity": "Three-month tradability remains weak, with a 3M liquidity score of 67.1. That matters because the stock has stayed below stronger peer access levels over a sustained window.",
        "market_comparison": "The stock fell 4.4% over 3M compared with peers down 10.6%. That matters because better relative performance has not closed the liquidity gap."
      },
      "6m": {
        "liquidity": "Six-month tradability is weak, with a liquidity score of 66.6 against a peer median of 77.0. That matters because structural access is below peers before day-to-day conditions are considered.",
        "market_comparison": "The stock returned 0.7% over 6M compared with peers down 17.9%. That matters because strong relative performance has not translated into peer-level liquidity."
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
          "median": 0.09735839675138243,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "9.7%",
          "display_range": null,
          "display_text": "9.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 9.7,
          "plain_english": "Market explains about 9.7% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.32320419522567834,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "32.3%",
          "display_range": null,
          "display_text": "32.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 32.3,
          "plain_english": "Sector explains about 32.3% of price moves in the current state."
        },
        "company_share": {
          "median": 0.5794374080229393,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "57.9%",
          "display_range": null,
          "display_text": "57.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 57.9,
          "plain_english": "Company-specific explains about 57.9% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.07573269176835364,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.08",
          "display_range": null,
          "display_text": "0.08",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.08% stock move in the same direction in this state.",
          "value_num": 0.08
        },
        "beta_stock_lag": {
          "median": -0.7871110056604044,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.79",
          "display_range": null,
          "display_text": "-0.79",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.79
        },
        "beta_sector": {
          "median": 0.5340196815374593,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.53",
          "display_range": null,
          "display_text": "0.53",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.53% stock move in the same direction in this state.",
          "value_num": 0.53
        },
        "beta_market_lag": {
          "median": 0.04967666683385909,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.05",
          "display_range": null,
          "display_text": "0.05",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.05
        },
        "beta_sector_lag": {
          "median": 0.16280200197347988,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.16",
          "display_range": null,
          "display_text": "0.16",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.16
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
          "period_label": "2025-03-24 to 2025-03-31",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.45097641368201985,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.1%",
            "display_range": null,
            "display_text": "45.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 45.1,
            "plain_english": "Market explains about 45.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.45097641368201985,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.1%",
              "display_range": null,
              "display_text": "45.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 45.1,
              "plain_english": "Market explains about 45.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4101552356818764,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.0%",
              "display_range": null,
              "display_text": "41.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 41.0,
              "plain_english": "Sector explains about 41.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.13886835063610387,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.9%",
              "display_range": null,
              "display_text": "13.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 13.9,
              "plain_english": "Company-specific explains about 13.9% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven, though based on only 6 trading days."
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47386183493807804,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.4%",
            "display_range": null,
            "display_text": "47.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 47.4,
            "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.33345917651027795,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Market explains about 33.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19267898855164406,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.3%",
              "display_range": null,
              "display_text": "19.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 19.3,
              "plain_english": "Sector explains about 19.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47386183493807804,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
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
            "median": 0.5088323464691614,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.9%",
            "display_range": null,
            "display_text": "50.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 50.9,
            "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34788543581948694,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.8%",
              "display_range": null,
              "display_text": "34.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.8,
              "plain_english": "Market explains about 34.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14328221771135158,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.3%",
              "display_range": null,
              "display_text": "14.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 14.3,
              "plain_english": "Sector explains about 14.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5088323464691614,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.9%",
              "display_range": null,
              "display_text": "50.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 50.9,
              "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
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
            "median": 0.5767119181109127,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.7%",
            "display_range": null,
            "display_text": "57.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 57.7,
            "plain_english": "Market explains about 57.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5767119181109127,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.7%",
              "display_range": null,
              "display_text": "57.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 57.7,
              "plain_english": "Market explains about 57.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16398525056208382,
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
              "median": 0.2593028313270034,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.9%",
              "display_range": null,
              "display_text": "25.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 25.9,
              "plain_english": "Company-specific explains about 25.9% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5688507981483798,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.9%",
            "display_range": null,
            "display_text": "56.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 56.9,
            "plain_english": "Company-specific explains about 56.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.32407783536629053,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.4%",
              "display_range": null,
              "display_text": "32.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 32.4,
              "plain_english": "Market explains about 32.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10707136648532971,
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
              "median": 0.5688507981483798,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.9%",
              "display_range": null,
              "display_text": "56.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 56.9,
              "plain_english": "Company-specific explains about 56.9% of price moves in the current state."
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
            "median": 0.5096839295546808,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.0%",
            "display_range": null,
            "display_text": "51.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 51.0,
            "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.28456323169863273,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.5%",
              "display_range": null,
              "display_text": "28.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 28.5,
              "plain_english": "Market explains about 28.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20575283874668648,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.6%",
              "display_range": null,
              "display_text": "20.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.6,
              "plain_english": "Sector explains about 20.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5096839295546808,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.0%",
              "display_range": null,
              "display_text": "51.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 51.0,
              "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
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
            "median": 0.5006798070559755,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.1%",
            "display_range": null,
            "display_text": "50.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 50.1,
            "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3466098819568363,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.7%",
              "display_range": null,
              "display_text": "34.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 34.7,
              "plain_english": "Market explains about 34.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.15271031098718826,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.3%",
              "display_range": null,
              "display_text": "15.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 15.3,
              "plain_english": "Sector explains about 15.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5006798070559755,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.1%",
              "display_range": null,
              "display_text": "50.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.1,
              "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.400404730899818,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.0%",
            "display_range": null,
            "display_text": "40.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 40.0,
            "plain_english": "Market explains about 40.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.400404730899818,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.0%",
              "display_range": null,
              "display_text": "40.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.0,
              "plain_english": "Market explains about 40.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2984700172263254,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.8%",
              "display_range": null,
              "display_text": "29.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.8,
              "plain_english": "Sector explains about 29.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3011252518738565,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.1%",
              "display_range": null,
              "display_text": "30.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 30.1,
              "plain_english": "Company-specific explains about 30.1% of price moves in the current state."
            }
          },
          "summary": "Oct: More mixed, though market-driven still has the largest share."
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
            "median": 0.6186851144999824,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.9%",
            "display_range": null,
            "display_text": "61.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 61.9,
            "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2990922458429439,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.9%",
              "display_range": null,
              "display_text": "29.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.9,
              "plain_english": "Market explains about 29.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.08222263965707363,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.2%",
              "display_range": null,
              "display_text": "8.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 8.2,
              "plain_english": "Sector explains about 8.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6186851144999824,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.9%",
              "display_range": null,
              "display_text": "61.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.9,
              "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
            }
          },
          "summary": "Nov: Still clearly company-driven."
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
            "median": 0.5311058744526369,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.1%",
            "display_range": null,
            "display_text": "53.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 53.1,
            "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.35008318670527255,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.0%",
              "display_range": null,
              "display_text": "35.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 35.0,
              "plain_english": "Market explains about 35.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11881093884209064,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.9%",
              "display_range": null,
              "display_text": "11.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 11.9,
              "plain_english": "Sector explains about 11.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5311058744526369,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.1%",
              "display_range": null,
              "display_text": "53.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 53.1,
              "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
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
            "median": 0.7526568569282558,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "75.3%",
            "display_range": null,
            "display_text": "75.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 75.3,
            "plain_english": "Company-specific explains about 75.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.13304733066815133,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.3%",
              "display_range": null,
              "display_text": "13.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.3,
              "plain_english": "Market explains about 13.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1142958124035929,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.4%",
              "display_range": null,
              "display_text": "11.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 11.4,
              "plain_english": "Sector explains about 11.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7526568569282558,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "75.3%",
              "display_range": null,
              "display_text": "75.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 75.3,
              "plain_english": "Company-specific explains about 75.3% of price moves in the current state."
            }
          },
          "summary": "Jan: Still clearly company-driven."
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
            "median": 0.5624435254091853,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.2%",
            "display_range": null,
            "display_text": "56.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 56.2,
            "plain_english": "Market explains about 56.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5624435254091853,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.2%",
              "display_range": null,
              "display_text": "56.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 56.2,
              "plain_english": "Market explains about 56.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.013583335752256766,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "1.4%",
              "display_range": null,
              "display_text": "1.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 1.4,
              "plain_english": "Sector explains about 1.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4239731388385578,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.4%",
              "display_range": null,
              "display_text": "42.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 42.4,
              "plain_english": "Company-specific explains about 42.4% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5077188094786689,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.8%",
            "display_range": null,
            "display_text": "50.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 50.8,
            "plain_english": "Market explains about 50.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5077188094786689,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.8%",
              "display_range": null,
              "display_text": "50.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.8,
              "plain_english": "Market explains about 50.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1588612869392564,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.9%",
              "display_range": null,
              "display_text": "15.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 15.9,
              "plain_english": "Sector explains about 15.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3334199035820747,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 5,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5794374080229393,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.9%",
            "display_range": null,
            "display_text": "57.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 57.9,
            "plain_english": "Company-specific explains about 57.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.09735839675138243,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.7%",
              "display_range": null,
              "display_text": "9.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 9.7,
              "plain_english": "Market explains about 9.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.32320419522567834,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.3%",
              "display_range": null,
              "display_text": "32.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 32.3,
              "plain_english": "Sector explains about 32.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5794374080229393,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.9%",
              "display_range": null,
              "display_text": "57.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 57.9,
              "plain_english": "Company-specific explains about 57.9% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven, though based on only 5 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 8.928571428571429,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.011281237883853785,
            "low": 0.011281237883853785,
            "high": 0.011281237883853785
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 8.857142857142858,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.021864091244506494,
            "low": 0.021864091244506494,
            "high": 0.021864091244506494
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.888,
            0.112
          ],
          [
            0.10569105691056911,
            0.8943089430894309
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            111.0,
            14.0
          ],
          [
            13.0,
            110.0
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
        "market_link_display": "0.08",
        "sector_link_display": "0.53",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.08% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.53% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.79",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 57.9,
        "driver_share_display": "57.9%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8943089430894309,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 8.9 days.",
        "expected_duration_days": 8.9
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
          "expected_duration_days": 8.928571428571429,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.011281237883853785,
            "low": 0.011281237883853785,
            "high": 0.011281237883853785
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 8.857142857142858,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.021864091244506494,
            "low": 0.021864091244506494,
            "high": 0.021864091244506494
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.888,
          0.112
        ],
        [
          0.10569105691056911,
          0.8943089430894309
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.888,
            0.112
          ],
          [
            0.10569105691056911,
            0.8943089430894309
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            111.0,
            14.0
          ],
          [
            13.0,
            110.0
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
        "text": "Liquidity score: 66.6 — Weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Liquidity screens below peers for the company’s size, and the latest session was lighter than the recent average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The stock has underperformed the market over one month, down 3.0% compared with peers at -5.0% and the market at +0.6%.",
    "perf_insight": "Recent performance sits in a weak trading backdrop, with the six-month liquidity score 10.4 points below the peer median and company-specific factors driving 57.9% of price moves. That matters because weaker momentum is not being offset by stronger market support or deeper liquidity.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price action is being driven mainly by company-specific factors, with stock-specific drivers accounting for 57.9% of the current mix.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 57.9% of price changes. Other influences are market 9.7%, and sector 32.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 9.7%, sector 32.3%, and company-specific 57.9%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to company-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 9.7%, sector 32.3%, and company-specific 57.9%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "This matters because stock-specific news is likely to shape trading more than broader market moves, while daily volume is running 48.0% below the monthly average.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price moves are primarily company-driven, at 57.9% of the current mix.",
      "Monthly change: the pattern has shifted from mostly market-driven in Feb and Mar to more company-driven in Apr."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current conditions look balanced rather than dislocated, with a 2-tick spread and bid depth close to ask depth.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 10, 2025 to Apr 10, 2026 (239 trading days • 41,250 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book is broadly balanced, with top-10 bid depth at 0.84x of ask depth and a 2-tick spread. That matters because immediate execution conditions look orderly even though the broader liquidity profile sits below peers.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 26.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks orderly in the current session, with no sign of a one-sided book.",
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
    "intraday_insight": "Immediate trading conditions look balanced, with a 2-tick spread and top-10 bid depth at 0.84x of ask depth. That matters because the book is not showing a clear dislocation even as overall liquidity screens weak for the stock’s size.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading conditions are better explained by liquidity and company-specific drivers.",
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
    "exec_subtitle": "Trading access screens below peers for the company’s size, while the latest session ran at lighter volume than the monthly average.",
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
        "value": "66.6/100",
        "sub": "Peer median 77.0 (-10.4 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$2.3M",
        "sub": "Peer median HK$13.1M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.51%",
        "sub": "2.38 ticks; peers 0.49%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity screens weak for the stock’s size, with a six-month score of 66.6 against a peer median of 77.0. The latest session was also lighter, with one-day average volume down 48.0% from the one-month average. That matters because access already sits below peers and recent flow is offering less immediate capacity.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "4.550",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.44%",
        "note": "2.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.84x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.36% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-1.41% with 89.7% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.41% with 35.9% fill.",
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
        "value": "67",
        "suffix": "/100",
        "bar_pct": 67,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 860/2574",
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
        "value": "0.51",
        "suffix": "%",
        "bar_pct": 5,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.51% • 2.38 ticks vs peers 0.49%",
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
        "value": "2.3M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$13.1M",
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
        "value": "57.9",
        "suffix": "company-specific",
        "bar_pct": 58,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 9.7% • Sector 32.3%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the stock’s size, with a six-month liquidity score of 66.6 compared with a peer median of 77.0. That leaves access screening below peers before current trading conditions are considered.",
      "Recent flow is lighter than the monthly average, with one-day average volume down 48.0% from one month. That matters because thinner daily activity reduces immediate trading capacity on top of an already weaker structural base.",
      "The near-term book remains orderly, with a 2-tick spread and top-10 bid depth at 0.84x of ask depth, while company-specific factors account for 57.9% of the driver mix. That means current tradability is being shaped more by stock news than by broad market moves."
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
      "overall": "6M liquidity is weak: score 66.6 vs peer median 77.0 (-10.4 pts). 1D average volume down -48.0% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 66.6 vs peer median 77.0 (-10.4 pts)."
      ],
      "concerns": [
        "1D average volume down -48.0% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -10.4 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 0.7%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: 0.7% vs market 11.3%.",
        "vs_sector": "Better than sector: 0.7% vs sector -0.5%.",
        "vs_peers": "Better than peers: 0.7% vs peers -17.9%."
      },
      "adv": {
        "insight": "ADV is HK$2.3M, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$2.3M vs market HK$221.2K.",
        "vs_sector": "Better than sector: HK$2.3M vs sector HK$33.5K.",
        "vs_peers": "Worse than peers: HK$2.3M vs peers HK$13.1M."
      },
      "spread": {
        "insight": "Spread is 0.51%, better than market and sector, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.51% vs market 2.66%.",
        "vs_sector": "Better than sector: 0.51% vs sector 5.25%.",
        "vs_peers": "In line with peers: 0.51% vs peers 0.49%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.04%, better than sector, but worse than market and peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Worse than market: 0.04% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.04% vs sector 0.02%.",
        "vs_peers": "Worse than peers: 0.04% vs peers 0.51%."
      },
      "volatility": {
        "insight": "Volatility is 25.03%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 25.03% vs market 59.82%.",
        "vs_sector": "Better than sector: 25.03% vs sector 57.61%.",
        "vs_peers": "Better than peers: 25.03% vs peers 34.17%."
      },
      "trades": {
        "insight": "Trades is 117, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 117 vs market 21.",
        "vs_sector": "Better than sector: 117 vs sector 5.",
        "vs_peers": "Worse than peers: 117 vs peers 690."
      },
      "amihud": {
        "insight": "Price impact is 2.71e-09, better than market and sector, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 2.71e-09 vs market 4.60e-08.",
        "vs_sector": "Better than sector: 2.71e-09 vs sector 1.00e-07.",
        "vs_peers": "Worse than peers: 2.71e-09 vs peers 1.08e-09."
      }
    },
    "performance": {
      "overall": "Performance is strong relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent flow does not show a clear deterioration from the monthly baseline.",
      "conclusion": "The recent move looks primarily company-specific rather than broad-market driven."
    },
    "drivers": {
      "overall": "Price moves are being driven mainly by company-specific factors, with stock-specific drivers at 57.9% of the current mix. That matters because the stock is reacting more to its own developments than to the broader tape.",
      "beta": "The current pattern looks real but not fully settled, because average volume is 48.0% below the 1M average. Lower activity can make short-term price moves more sensitive while this company-driven phase is taking hold.",
      "rolling_change": "The monthly picture has changed from mostly market-driven in Feb and Mar to mostly company-driven in Apr. That points to a more stock-led trading pattern now, even as the latest shift is still early."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop, and that matters because price conditions are less steady even before considering its weaker liquidity standing relative to peers.",
      "current": "High volatility is in place now, with price moves being driven mainly by company-specific factors at 57.9%, which keeps the backdrop more exposed to stock-level developments.",
      "transitions": "The state looks fairly persistent, with a typical run length of about 8.9 days, although the picture is mixed by 1D average volume running 48.0% below the 1M average.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 8.9 days."
    },
    "execution": {
      "overall": "top-10 bid depth is 0.84x ask depth; spread is 2 ticks. Immediate displayed depth broadly matches the stronger monthly liquidity read.",
      "concern": "Trade-size percentiles use Apr 10, 2025 to Apr 10, 2026 history (239 trading days • 41,250 trades).",
      "peer_context": "The book is holding up better than the longer-term peer standing implies, even though the 6M liquidity score of 66.6 sits 10.4 points below the peer median of 77.0. That matters because the immediate screen does not add fresh stress to an already weaker structural liquidity picture."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 45.9% of trade count and 54.5% of trade value, compared with retail-like trades at 0.4% of count and 0.2% of value. That gap matters because the observed flow is being carried by larger participants rather than fragmented small-ticket activity.",
      "institutional_gap": "",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "Price moves are being driven mainly by company-specific factors, with stock-specific drivers at 57.9% of the current mix. That makes the trading signal cleaner because moves are being shaped more by company news than by broader market direction. The recent share price is down 3.0% over one month, compared with peers at -5.0% and the market at +0.6%, so stock-specific trading is occurring against a weaker market-relative backdrop.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main issue in current trading. The clearer signals are weaker structural liquidity for the stock’s size, with a 6M score of 66.6 compared with a peer median of 77.0, and a 1D average volume that is 48.0% below the 1M average, which points more to thin flow than to short pressure.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is changing the picture. Recent price performance is down 3.0% over one month while company-specific factors account for 57.9% of the current driver mix, so the near-term tape looks more tied to stock-specific news and lighter trading than to a rising short overhang.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 1.0%, continuous 88.5%, and close 3.3%. Current trading concentration score is 0.205.",
      "hhi_interpretation": "A concentration score of 0.205 indicates trading is not heavily concentrated into a few points in the day, which supports a more usable intraday market.",
      "best_times": "The continuous session is the clearest source of liquidity, while the open at 1.0% and close at 3.3% play a much smaller role.",
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
        "69",
        "45",
        "1179",
        "62",
        "9658",
        "999",
        "308",
        "2255",
        "3918"
      ],
      "scores": [
        66.62781662781663,
        60.256410256410255,
        87.87878787878788,
        66.47241647241647,
        72.14452214452216,
        78.16627816627818,
        78.36052836052836,
        75.91297591297591,
        81.11888111888112
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
        2286580.0,
        705827.5,
        62368636.0,
        1575695.9,
        5855604.0,
        12674352.46,
        16704120.0,
        13438300.0,
        21901577.9
      ],
      "total": 2574
    },
    "market_comparison": {
      "sector_name": "Hotels & Resorts",
      "sector_count": 25,
      "market_count": 2574,
      "company": {
        "volatility": 0.25031797538452993,
        "adv": 2286580.0,
        "spread_pct": 0.005138259061703013,
        "turnover_ratio": 0.0003974663501152442,
        "amihud": 2.7124058325483433e-09,
        "trades": 117.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7392811363447659,
          "median": 0.5981546596018028,
          "min": 0.0,
          "max": 33.69284958669689,
          "p5": 0.22530761419840245,
          "p95": 1.5551236721277741,
          "count": 2574
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 56751885.99842481,
          "median": 221248.3125,
          "min": 0.0,
          "max": 11530530000.0,
          "p5": 0.0,
          "p95": 211998477.29999983,
          "count": 2574
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04197546340436465,
          "median": 0.02664491311247985,
          "min": 0.000558678699550006,
          "max": 0.6003953685399606,
          "p5": 0.001386836666578392,
          "p95": 0.13589358247871558,
          "count": 2574
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003682172566532977,
          "median": 0.0008713899321640519,
          "min": 0.0,
          "max": 0.18632,
          "p5": 0.0,
          "p95": 0.014686982968052754,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.369209259933948e-07,
          "median": 4.6009826461052226e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 4.9617717549704375e-11,
          "p95": 3.4747662267446528e-06,
          "count": 2574
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1040.1926961926963,
          "median": 21.0,
          "min": 0.0,
          "max": 93269.5,
          "p5": 0.0,
          "p95": 5605.64999999998,
          "count": 2574
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7128422643176322,
          "median": 0.5760504536737222,
          "min": 0.22985007356641865,
          "max": 1.7826665305683562,
          "p5": 0.24131208730057144,
          "p95": 1.4670342937849656,
          "count": 25
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2674247.8441999997,
          "median": 33452.5,
          "min": 0.0,
          "max": 62368636.0,
          "p5": 0.0,
          "p95": 1970429.4999999956,
          "count": 25
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.06253289195704774,
          "median": 0.052529042772945206,
          "min": 0.0014596134652365453,
          "max": 0.2207481815526441,
          "p5": 0.0056681302821907815,
          "p95": 0.16607988931112336,
          "count": 25
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0005590585609280242,
          "median": 0.00016353806191352427,
          "min": 0.0,
          "max": 0.003542715897846593,
          "p5": 0.0,
          "p95": 0.0031557646431688044,
          "count": 25
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.225924032280587e-06,
          "median": 9.999270053286133e-08,
          "min": 0.0,
          "max": 1.1671335200746922e-05,
          "p5": 4.4051119534216264e-11,
          "p95": 4.177582738588672e-06,
          "count": 25
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 131.2,
          "median": 5.0,
          "min": 0.0,
          "max": 2842.5,
          "p5": 0.0,
          "p95": 110.59999999999991,
          "count": 25
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 16903014.22,
          "median": 13056326.23,
          "min": 705827.5,
          "max": 62368636.0,
          "p5": 1010281.44,
          "p95": 48205165.66499998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 779.8125,
          "median": 690.5,
          "min": 38.0,
          "max": 2842.5,
          "p5": 61.45,
          "p95": 2135.674999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.37820494037480656,
          "median": 0.3417353077700388,
          "min": 0.18335441930863802,
          "max": 0.7417524776411677,
          "p5": 0.21192326810421724,
          "p95": 0.6377787110969404,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0062252462167470225,
          "median": 0.0048712029323362965,
          "min": 0.0014596134652365453,
          "max": 0.014539786114052242,
          "p5": 0.002376583220848779,
          "p95": 0.012262171295099815,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.4862847539462956,
          "median": 1.847193693750632,
          "min": 1.0297494235971172,
          "max": 4.826068154298564,
          "p5": 1.042753087245059,
          "p95": 4.587583474688518,
          "count": 5
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.2040656117568885e-09,
          "median": 1.0770759581025399e-09,
          "min": 2.2025559767108112e-10,
          "max": 9.666038374172314e-09,
          "p5": 3.618733841781631e-10,
          "p95": 7.143472885126727e-09,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004909719142654045,
          "median": 0.005103956180177367,
          "min": 0.00030783235799513475,
          "max": 0.010444442987850064,
          "p5": 0.00039538723866643885,
          "p95": 0.009543281949992918,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.02966101694915224,
        "market": 0.005817570896814672,
        "sector": 0.001295672454003638,
        "peers": -0.049534487757306844
      },
      {
        "horizon": "3M",
        "stock": -0.04384133611691088,
        "market": 0.07151156981189555,
        "sector": -0.00900552141919464,
        "peers": -0.10598639004922528
      },
      {
        "horizon": "6M",
        "stock": 0.006593406593405904,
        "market": 0.11289080174108235,
        "sector": -0.0050667995683783,
        "peers": -0.17910702168314907
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
      "share_market": 0.09735839675138243,
      "share_sector": 0.32320419522567834,
      "share_idio": 0.5794374080229393,
      "beta_market": 0.07573269176835364,
      "beta_sector": 0.5340196815374593,
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
            "median": 0.09735839675138243,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "9.7%",
            "display_range": null,
            "display_text": "9.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 9.7,
            "plain_english": "Market explains about 9.7% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.32320419522567834,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "32.3%",
            "display_range": null,
            "display_text": "32.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 32.3,
            "plain_english": "Sector explains about 32.3% of price moves in the current state."
          },
          "company_share": {
            "median": 0.5794374080229393,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.9%",
            "display_range": null,
            "display_text": "57.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 57.9,
            "plain_english": "Company-specific explains about 57.9% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.07573269176835364,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.08",
            "display_range": null,
            "display_text": "0.08",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.08% stock move in the same direction in this state.",
            "value_num": 0.08
          },
          "beta_stock_lag": {
            "median": -0.7871110056604044,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.79",
            "display_range": null,
            "display_text": "-0.79",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.79
          },
          "beta_sector": {
            "median": 0.5340196815374593,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.53",
            "display_range": null,
            "display_text": "0.53",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.53% stock move in the same direction in this state.",
            "value_num": 0.53
          },
          "beta_market_lag": {
            "median": 0.04967666683385909,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.05",
            "display_range": null,
            "display_text": "0.05",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.05
          },
          "beta_sector_lag": {
            "median": 0.16280200197347988,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.16",
            "display_range": null,
            "display_text": "0.16",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.16
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
            "period_label": "2025-03-24 to 2025-03-31",
            "n_obs": 6,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.45097641368201985,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.1%",
              "display_range": null,
              "display_text": "45.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 45.1,
              "plain_english": "Market explains about 45.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.45097641368201985,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.1%",
                "display_range": null,
                "display_text": "45.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 45.1,
                "plain_english": "Market explains about 45.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4101552356818764,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.0%",
                "display_range": null,
                "display_text": "41.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 41.0,
                "plain_english": "Sector explains about 41.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.13886835063610387,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.9%",
                "display_range": null,
                "display_text": "13.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 13.9,
                "plain_english": "Company-specific explains about 13.9% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven, though based on only 6 trading days."
          },
          {
            "month_key": "2025-04",
            "month_label": "April 2025",
            "month_short_label": "Apr",
            "period_label": "2025-04-01 to 2025-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47386183493807804,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.33345917651027795,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Market explains about 33.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19267898855164406,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.3%",
                "display_range": null,
                "display_text": "19.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 19.3,
                "plain_english": "Sector explains about 19.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47386183493807804,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.4%",
                "display_range": null,
                "display_text": "47.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 47.4,
                "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
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
              "median": 0.5088323464691614,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.9%",
              "display_range": null,
              "display_text": "50.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 50.9,
              "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34788543581948694,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.8%",
                "display_range": null,
                "display_text": "34.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.8,
                "plain_english": "Market explains about 34.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14328221771135158,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.3%",
                "display_range": null,
                "display_text": "14.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 14.3,
                "plain_english": "Sector explains about 14.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5088323464691614,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.9%",
                "display_range": null,
                "display_text": "50.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 50.9,
                "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
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
              "median": 0.5767119181109127,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.7%",
              "display_range": null,
              "display_text": "57.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 57.7,
              "plain_english": "Market explains about 57.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5767119181109127,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.7%",
                "display_range": null,
                "display_text": "57.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 57.7,
                "plain_english": "Market explains about 57.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16398525056208382,
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
                "median": 0.2593028313270034,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.9%",
                "display_range": null,
                "display_text": "25.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 25.9,
                "plain_english": "Company-specific explains about 25.9% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5688507981483798,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.9%",
              "display_range": null,
              "display_text": "56.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 56.9,
              "plain_english": "Company-specific explains about 56.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.32407783536629053,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.4%",
                "display_range": null,
                "display_text": "32.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 32.4,
                "plain_english": "Market explains about 32.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10707136648532971,
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
                "median": 0.5688507981483798,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.9%",
                "display_range": null,
                "display_text": "56.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 56.9,
                "plain_english": "Company-specific explains about 56.9% of price moves in the current state."
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
              "median": 0.5096839295546808,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.0%",
              "display_range": null,
              "display_text": "51.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 51.0,
              "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.28456323169863273,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.5%",
                "display_range": null,
                "display_text": "28.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 28.5,
                "plain_english": "Market explains about 28.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20575283874668648,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.6%",
                "display_range": null,
                "display_text": "20.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.6,
                "plain_english": "Sector explains about 20.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5096839295546808,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.0%",
                "display_range": null,
                "display_text": "51.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 51.0,
                "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
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
              "median": 0.5006798070559755,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.1%",
              "display_range": null,
              "display_text": "50.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.1,
              "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3466098819568363,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.7%",
                "display_range": null,
                "display_text": "34.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 34.7,
                "plain_english": "Market explains about 34.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.15271031098718826,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.3%",
                "display_range": null,
                "display_text": "15.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 15.3,
                "plain_english": "Sector explains about 15.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5006798070559755,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.1%",
                "display_range": null,
                "display_text": "50.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 50.1,
                "plain_english": "Company-specific explains about 50.1% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.400404730899818,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.0%",
              "display_range": null,
              "display_text": "40.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.0,
              "plain_english": "Market explains about 40.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.400404730899818,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.0%",
                "display_range": null,
                "display_text": "40.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 40.0,
                "plain_english": "Market explains about 40.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2984700172263254,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.8%",
                "display_range": null,
                "display_text": "29.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.8,
                "plain_english": "Sector explains about 29.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3011252518738565,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.1%",
                "display_range": null,
                "display_text": "30.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 30.1,
                "plain_english": "Company-specific explains about 30.1% of price moves in the current state."
              }
            },
            "summary": "Oct: More mixed, though market-driven still has the largest share."
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
              "median": 0.6186851144999824,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.9%",
              "display_range": null,
              "display_text": "61.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.9,
              "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2990922458429439,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.9%",
                "display_range": null,
                "display_text": "29.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.9,
                "plain_english": "Market explains about 29.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.08222263965707363,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.2%",
                "display_range": null,
                "display_text": "8.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 8.2,
                "plain_english": "Sector explains about 8.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6186851144999824,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.9%",
                "display_range": null,
                "display_text": "61.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 61.9,
                "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
              }
            },
            "summary": "Nov: Still clearly company-driven."
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
              "median": 0.5311058744526369,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.1%",
              "display_range": null,
              "display_text": "53.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 53.1,
              "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.35008318670527255,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.0%",
                "display_range": null,
                "display_text": "35.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 35.0,
                "plain_english": "Market explains about 35.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11881093884209064,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.9%",
                "display_range": null,
                "display_text": "11.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 11.9,
                "plain_english": "Sector explains about 11.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5311058744526369,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.1%",
                "display_range": null,
                "display_text": "53.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 53.1,
                "plain_english": "Company-specific explains about 53.1% of price moves in the current state."
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
              "median": 0.7526568569282558,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "75.3%",
              "display_range": null,
              "display_text": "75.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 75.3,
              "plain_english": "Company-specific explains about 75.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.13304733066815133,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.3%",
                "display_range": null,
                "display_text": "13.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.3,
                "plain_english": "Market explains about 13.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1142958124035929,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.4%",
                "display_range": null,
                "display_text": "11.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 11.4,
                "plain_english": "Sector explains about 11.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7526568569282558,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "75.3%",
                "display_range": null,
                "display_text": "75.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 75.3,
                "plain_english": "Company-specific explains about 75.3% of price moves in the current state."
              }
            },
            "summary": "Jan: Still clearly company-driven."
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
              "median": 0.5624435254091853,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.2%",
              "display_range": null,
              "display_text": "56.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 56.2,
              "plain_english": "Market explains about 56.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5624435254091853,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.2%",
                "display_range": null,
                "display_text": "56.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 56.2,
                "plain_english": "Market explains about 56.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.013583335752256766,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "1.4%",
                "display_range": null,
                "display_text": "1.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 1.4,
                "plain_english": "Sector explains about 1.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4239731388385578,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.4%",
                "display_range": null,
                "display_text": "42.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 42.4,
                "plain_english": "Company-specific explains about 42.4% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5077188094786689,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.8%",
              "display_range": null,
              "display_text": "50.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.8,
              "plain_english": "Market explains about 50.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5077188094786689,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.8%",
                "display_range": null,
                "display_text": "50.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 50.8,
                "plain_english": "Market explains about 50.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1588612869392564,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.9%",
                "display_range": null,
                "display_text": "15.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 15.9,
                "plain_english": "Sector explains about 15.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3334199035820747,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-10",
            "n_obs": 5,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5794374080229393,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.9%",
              "display_range": null,
              "display_text": "57.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 57.9,
              "plain_english": "Company-specific explains about 57.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.09735839675138243,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.7%",
                "display_range": null,
                "display_text": "9.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 9.7,
                "plain_english": "Market explains about 9.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.32320419522567834,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.3%",
                "display_range": null,
                "display_text": "32.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 32.3,
                "plain_english": "Sector explains about 32.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5794374080229393,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.9%",
                "display_range": null,
                "display_text": "57.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 57.9,
                "plain_english": "Company-specific explains about 57.9% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven, though based on only 5 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 8.928571428571429,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.011281237883853785,
              "low": 0.011281237883853785,
              "high": 0.011281237883853785
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 8.857142857142858,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.021864091244506494,
              "low": 0.021864091244506494,
              "high": 0.021864091244506494
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.888,
              0.112
            ],
            [
              0.10569105691056911,
              0.8943089430894309
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              111.0,
              14.0
            ],
            [
              13.0,
              110.0
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
          "market_link_display": "0.08",
          "sector_link_display": "0.53",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.08% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.53% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.79",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 57.9,
          "driver_share_display": "57.9%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8943089430894309,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 8.9 days.",
          "expected_duration_days": 8.9
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
          "period_label": "2025-03-24 to 2025-03-31",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven, though based on only 6 trading days.",
          "share_market": 0.45097641368201985,
          "share_sector": 0.4101552356818764,
          "share_company": 0.13886835063610387,
          "share_market_display": "45.1%",
          "share_sector_display": "41.0%",
          "share_company_display": "13.9%",
          "dominant_share_display": "45.1%"
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.33345917651027795,
          "share_sector": 0.19267898855164406,
          "share_company": 0.47386183493807804,
          "share_market_display": "33.3%",
          "share_sector_display": "19.3%",
          "share_company_display": "47.4%",
          "dominant_share_display": "47.4%"
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
          "share_market": 0.34788543581948694,
          "share_sector": 0.14328221771135158,
          "share_company": 0.5088323464691614,
          "share_market_display": "34.8%",
          "share_sector_display": "14.3%",
          "share_company_display": "50.9%",
          "dominant_share_display": "50.9%"
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
          "share_market": 0.5767119181109127,
          "share_sector": 0.16398525056208382,
          "share_company": 0.2593028313270034,
          "share_market_display": "57.7%",
          "share_sector_display": "16.4%",
          "share_company_display": "25.9%",
          "dominant_share_display": "57.7%"
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
          "share_market": 0.32407783536629053,
          "share_sector": 0.10707136648532971,
          "share_company": 0.5688507981483798,
          "share_market_display": "32.4%",
          "share_sector_display": "10.7%",
          "share_company_display": "56.9%",
          "dominant_share_display": "56.9%"
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
          "share_market": 0.28456323169863273,
          "share_sector": 0.20575283874668648,
          "share_company": 0.5096839295546808,
          "share_market_display": "28.5%",
          "share_sector_display": "20.6%",
          "share_company_display": "51.0%",
          "dominant_share_display": "51.0%"
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
          "share_market": 0.3466098819568363,
          "share_sector": 0.15271031098718826,
          "share_company": 0.5006798070559755,
          "share_market_display": "34.7%",
          "share_sector_display": "15.3%",
          "share_company_display": "50.1%",
          "dominant_share_display": "50.1%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-02 to 2025-10-31",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Oct: More mixed, though market-driven still has the largest share.",
          "share_market": 0.400404730899818,
          "share_sector": 0.2984700172263254,
          "share_company": 0.3011252518738565,
          "share_market_display": "40.0%",
          "share_sector_display": "29.8%",
          "share_company_display": "30.1%",
          "dominant_share_display": "40.0%"
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
          "summary": "Nov: Still clearly company-driven.",
          "share_market": 0.2990922458429439,
          "share_sector": 0.08222263965707363,
          "share_company": 0.6186851144999824,
          "share_market_display": "29.9%",
          "share_sector_display": "8.2%",
          "share_company_display": "61.9%",
          "dominant_share_display": "61.9%"
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
          "share_market": 0.35008318670527255,
          "share_sector": 0.11881093884209064,
          "share_company": 0.5311058744526369,
          "share_market_display": "35.0%",
          "share_sector_display": "11.9%",
          "share_company_display": "53.1%",
          "dominant_share_display": "53.1%"
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
          "share_market": 0.13304733066815133,
          "share_sector": 0.1142958124035929,
          "share_company": 0.7526568569282558,
          "share_market_display": "13.3%",
          "share_sector_display": "11.4%",
          "share_company_display": "75.3%",
          "dominant_share_display": "75.3%"
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
          "share_market": 0.5624435254091853,
          "share_sector": 0.013583335752256766,
          "share_company": 0.4239731388385578,
          "share_market_display": "56.2%",
          "share_sector_display": "1.4%",
          "share_company_display": "42.4%",
          "dominant_share_display": "56.2%"
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
          "share_market": 0.5077188094786689,
          "share_sector": 0.1588612869392564,
          "share_company": 0.3334199035820747,
          "share_market_display": "50.8%",
          "share_sector_display": "15.9%",
          "share_company_display": "33.3%",
          "dominant_share_display": "50.8%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 5,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven, though based on only 5 trading days.",
          "share_market": 0.09735839675138243,
          "share_sector": 0.32320419522567834,
          "share_company": 0.5794374080229393,
          "share_market_display": "9.7%",
          "share_sector_display": "32.3%",
          "share_company_display": "57.9%",
          "dominant_share_display": "57.9%"
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
            "expected_duration_days": 8.928571428571429,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.011281237883853785,
              "low": 0.011281237883853785,
              "high": 0.011281237883853785
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 8.857142857142858,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.021864091244506494,
              "low": 0.021864091244506494,
              "high": 0.021864091244506494
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.888,
            0.112
          ],
          [
            0.10569105691056911,
            0.8943089430894309
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 4.54,
          "quantity": 10000.0,
          "value": 45400.0
        },
        {
          "level": 2,
          "price": 4.53,
          "quantity": 10000.0,
          "value": 45300.0
        },
        {
          "level": 3,
          "price": 4.52,
          "quantity": 4000.0,
          "value": 18080.0
        },
        {
          "level": 4,
          "price": 4.51,
          "quantity": 22000.0,
          "value": 99220.0
        },
        {
          "level": 5,
          "price": 4.5,
          "quantity": 20000.0,
          "value": 90000.0
        },
        {
          "level": 6,
          "price": 4.49,
          "quantity": 22000.0,
          "value": 98780.0
        },
        {
          "level": 7,
          "price": 4.48,
          "quantity": 44000.0,
          "value": 197120.00000000003
        },
        {
          "level": 8,
          "price": 4.47,
          "quantity": 24000.0,
          "value": 107280.0
        },
        {
          "level": 9,
          "price": 4.46,
          "quantity": 18000.0,
          "value": 80280.0
        },
        {
          "level": 10,
          "price": 4.45,
          "quantity": 26000.0,
          "value": 115700.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 4.56,
          "quantity": 2000.0,
          "value": 9120.0
        },
        {
          "level": 2,
          "price": 4.57,
          "quantity": 4000.0,
          "value": 18280.0
        },
        {
          "level": 3,
          "price": 4.58,
          "quantity": 14000.0,
          "value": 64120.0
        },
        {
          "level": 4,
          "price": 4.59,
          "quantity": 4000.0,
          "value": 18360.0
        },
        {
          "level": 5,
          "price": 4.6,
          "quantity": 184000.0,
          "value": 846399.9999999999
        },
        {
          "level": 6,
          "price": 4.61,
          "quantity": 2000.0,
          "value": 9220.0
        },
        {
          "level": 7,
          "price": 4.64,
          "quantity": 6000.0,
          "value": 27839.999999999996
        },
        {
          "level": 8,
          "price": 4.68,
          "quantity": 4000.0,
          "value": 18720.0
        },
        {
          "level": 9,
          "price": 4.69,
          "quantity": 2000.0,
          "value": 9380.0
        },
        {
          "level": 10,
          "price": 4.7,
          "quantity": 10000.0,
          "value": 47000.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-10 07:59:31.566000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 4.55,
        "spread_pct": 0.004395604395604302,
        "spread_ticks": 2.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 897160.0,
        "ask_depth_notional_top10": 1068440.0,
        "bid_ask_depth_ratio": 0.8397
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 239,
        "n_trades_used": 41250,
        "first_trade_date": "2025-04-10",
        "last_trade_date": "2026-04-10",
        "window_label": "Apr 10, 2025 to Apr 10, 2026",
        "window_short_label": "Apr 10, 2025 to Apr 10, 2026",
        "trade_days_label": "239 trading days",
        "trade_count_label": "41,250 trades",
        "window_detail_label": "239 trading days • 41,250 trades",
        "history_note": "Trade-size percentiles use Apr 10, 2025 to Apr 10, 2026 history (239 trading days • 41,250 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 37440.0,
            "impact_pct": -0.002198,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 4.17,
            "pct_of_adv": 2.05
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 57240.0,
            "impact_pct": -0.002653,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 6.38,
            "pct_of_adv": 3.14
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 2392624.09,
            "impact_pct": -0.014110000000000001,
            "filled_pct": 37.5,
            "levels_consumed": 10,
            "pct_of_bid_depth": 266.69,
            "pct_of_adv": 131.19
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-10",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "3880707.0",
            "timestamp": "2026-04-10 01:20:28.642000000",
            "local_timestamp": "2026-04-10 09:20:28",
            "posted_price": 4.6,
            "size_shares": 50000.0,
            "notional": 230000.0,
            "impact_pct": -0.006670000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 25.64,
            "price_vs_mid_pct": 1.099,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "1682179.0",
            "timestamp": "2026-04-10 01:20:28.642000000",
            "local_timestamp": "2026-04-10 09:20:28",
            "posted_price": 4.6,
            "size_shares": 30000.0,
            "notional": 138000.0,
            "impact_pct": -0.004897,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 15.38,
            "price_vs_mid_pct": 1.099,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "1682435.0",
            "timestamp": "2026-04-10 01:20:28.642000000",
            "local_timestamp": "2026-04-10 09:20:28",
            "posted_price": 4.6,
            "size_shares": 30000.0,
            "notional": 138000.0,
            "impact_pct": -0.004897,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 15.38,
            "price_vs_mid_pct": 1.099,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-10",
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
            "spread_pct": 0.006659267480576995,
            "spread_ticks": 2.999999999999936,
            "bid_depth_notional": 738220.0,
            "ask_depth_notional": 1137740.0,
            "mid_price": 4.505
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.008869179600886927,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 1621400.0,
            "ask_depth_notional": 1229220.0,
            "mid_price": 4.51
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.004424778761062049,
            "spread_ticks": 2.000000000000046,
            "bid_depth_notional": 875100.0,
            "ask_depth_notional": 1157380.0,
            "mid_price": 4.52
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0022002200220021533,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 833260.0,
            "ask_depth_notional": 1185880.0,
            "mid_price": 4.545
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.004405286343612241,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 938980.0,
            "ask_depth_notional": 1140280.0,
            "mid_price": 4.54
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.004405286343612241,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 911780.0,
            "ask_depth_notional": 1295920.0,
            "mid_price": 4.54
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.004424778761062049,
            "spread_ticks": 2.000000000000046,
            "bid_depth_notional": 1200060.0,
            "ask_depth_notional": 1248560.0,
            "mid_price": 4.52
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0022099447513813644,
            "spread_ticks": 1.0000000000000675,
            "bid_depth_notional": 973980.0,
            "ask_depth_notional": 1257380.0,
            "mid_price": 4.525
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.00660066006600646,
            "spread_ticks": 2.999999999999936,
            "bid_depth_notional": 948900.0,
            "ask_depth_notional": 1241720.0,
            "mid_price": 4.545
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.00660066006600646,
            "spread_ticks": 2.999999999999936,
            "bid_depth_notional": 931040.0,
            "ask_depth_notional": 1287520.0,
            "mid_price": 4.545
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.004395604395604302,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 897160.0,
            "ask_depth_notional": 1068440.0,
            "mid_price": 4.55
          }
        ],
        "summary": {
          "median_spread_pct": 0.004424778761062049,
          "median_spread_ticks": 2.000000000000046,
          "median_bid_depth_notional": 931040.0,
          "median_ask_depth_notional": 1229220.0,
          "tightest_bucket": "11:00",
          "widest_bucket": "10:00",
          "deepest_bid_bucket": "10:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 2.7,
      "peers": [
        {
          "ticker": "1179",
          "pct": 1.0
        },
        {
          "ticker": "3918",
          "pct": 7.6
        },
        {
          "ticker": "999",
          "pct": 9.3
        },
        {
          "ticker": "308",
          "pct": 10.5
        },
        {
          "ticker": "2255",
          "pct": 10.8
        },
        {
          "ticker": "9658",
          "pct": 22.6
        },
        {
          "ticker": "62",
          "pct": 60.0
        },
        {
          "ticker": "45",
          "pct": 119.6
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 70,
          "n_runs": 38,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-10",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.2,
            "mixed_pct": 0.0,
            "instit_pct": 0.44285714285714284,
            "ambiguous_pct": 0.14285714285714285,
            "unobservable_pct": 0.21428571428571427,
            "unclear_pct": 0.3571428571428571,
            "retail_qty_pct": 0.14736842105263157,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5368421052631579,
            "ambiguous_qty_pct": 0.11578947368421053,
            "unobservable_qty_pct": 0.2,
            "unclear_qty_pct": 0.3157894736842105,
            "retail_notional_pct": 0.14674685875469148,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5369839382707415,
            "ambiguous_notional_pct": 0.11620859267547848,
            "unobservable_notional_pct": 0.2000606102990885,
            "unclear_notional_pct": 0.31626920297456695
          },
          "run_composition": {
            "retail_pct": 0.3684210526315789,
            "mixed_pct": 0.0,
            "instit_pct": 0.18421052631578946,
            "ambiguous_pct": 0.21052631578947367,
            "unobservable_pct": 0.23684210526315788,
            "unclear_pct": 0.4473684210526315,
            "retail_notional_pct": 0.14674685875469148,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5369839382707415,
            "unclear_notional_pct": 0.31626920297456695
          },
          "counts": {
            "trades": {
              "retail": 14,
              "mixed": 0,
              "institutional": 31,
              "ambiguous": 10,
              "unobservable": 15,
              "unclear": 25
            },
            "runs": {
              "retail": 14,
              "mixed": 0,
              "institutional": 7,
              "ambiguous": 8,
              "unobservable": 9,
              "unclear": 17
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.5526315789473685,
            "na": 0.4473684210526316
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 21,
            "na": 17
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.6428571428571429,
            "na": 0.35714285714285715
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 45,
            "na": 25
          },
          "observability": {
            "avg_feature_coverage": 0.6763157894736843,
            "observable_run_pct": 0.7631578947368421,
            "ambiguous_run_pct": 0.21052631578947367,
            "unobservable_run_pct": 0.23684210526315788
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.3684210526315789,
          "dominance_gap": 0.13157894736842105,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 70
            },
            "d2_information": {
              "UNOBSERVABLE": 70
            },
            "d3_urgency": {
              "IMMEDIATE": 38
            },
            "participant_confidence": {
              "LOW": 21,
              "NA": 17
            }
          },
          "trade_size": {
            "avg": 12256.285714285714,
            "median": 9060.0
          },
          "run_size": {
            "avg": 22577.36842105263,
            "median": 9060.0,
            "avg_length": 1.8421052631578947
          },
          "recent_trades": [
            {
              "trade_id": "71",
              "timestamp": "2026-04-10T07:52:41.427599",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11739,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-10T07:52:37.938317",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11739,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-10T06:56:04.990118",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11738,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-10T06:53:46.741534",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-10T06:53:44.760443",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-10T06:53:44.760443",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-10T06:53:41.943625",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-10T06:53:41.943625",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "59",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "58",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "57",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "56",
              "timestamp": "2026-04-10T06:52:27.567080",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11735,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "55",
              "timestamp": "2026-04-10T06:52:27.567080",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11735,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "54",
              "timestamp": "2026-04-10T05:55:30.309410",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11734,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "53",
              "timestamp": "2026-04-10T05:46:16.287662",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11733,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "52",
              "timestamp": "2026-04-10T05:43:08.149505",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11732,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "51",
              "timestamp": "2026-04-10T05:36:42.274419",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11731,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "50",
              "timestamp": "2026-04-10T05:31:00.071323",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11730,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "49",
              "timestamp": "2026-04-10T05:27:24.250537",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11729,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "48",
              "timestamp": "2026-04-10T05:17:46.234837",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11728,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "47",
              "timestamp": "2026-04-10T05:08:58.218473",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11727,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "46",
              "timestamp": "2026-04-10T05:01:34.196392",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11726,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "45",
              "timestamp": "2026-04-10T03:57:50.079527",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11725,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "44",
              "timestamp": "2026-04-10T03:45:08.153314",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11724,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "43",
              "timestamp": "2026-04-10T03:45:08.153314",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11724,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "42",
              "timestamp": "2026-04-10T03:43:06.051240",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11723,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 2440,
          "n_runs": 897,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-10",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.02622950819672131,
            "mixed_pct": 0.0,
            "instit_pct": 0.5282786885245901,
            "ambiguous_pct": 0.10983606557377049,
            "unobservable_pct": 0.335655737704918,
            "unclear_pct": 0.44549180327868854,
            "retail_qty_pct": 0.014062132206460633,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6118499391603321,
            "ambiguous_qty_pct": 0.09057734110441631,
            "unobservable_qty_pct": 0.2835105875287909,
            "unclear_qty_pct": 0.37408792863320717,
            "retail_notional_pct": 0.013698502928027661,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6122532425378318,
            "ambiguous_notional_pct": 0.08945992051815535,
            "unobservable_notional_pct": 0.28458833401598527,
            "unclear_notional_pct": 0.3740482545341406
          },
          "run_composition": {
            "retail_pct": 0.07023411371237458,
            "mixed_pct": 0.0,
            "instit_pct": 0.22519509476031216,
            "ambiguous_pct": 0.12374581939799331,
            "unobservable_pct": 0.5808249721293199,
            "unclear_pct": 0.7045707915273133,
            "retail_notional_pct": 0.013698502928027661,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6122532425378318,
            "unclear_notional_pct": 0.3740482545341406
          },
          "counts": {
            "trades": {
              "retail": 64,
              "mixed": 0,
              "institutional": 1289,
              "ambiguous": 268,
              "unobservable": 819,
              "unclear": 1087
            },
            "runs": {
              "retail": 63,
              "mixed": 0,
              "institutional": 202,
              "ambiguous": 111,
              "unobservable": 521,
              "unclear": 632
            }
          },
          "confidence": {
            "high": 0.05128205128205128,
            "medium": 0.014492753623188406,
            "low": 0.22965440356744704,
            "na": 0.7045707915273133
          },
          "confidence_counts": {
            "high": 46,
            "medium": 13,
            "low": 206,
            "na": 632
          },
          "trade_confidence": {
            "high": 0.05327868852459016,
            "medium": 0.027868852459016394,
            "low": 0.4733606557377049,
            "na": 0.44549180327868854
          },
          "trade_confidence_counts": {
            "high": 130,
            "medium": 68,
            "low": 1155,
            "na": 1087
          },
          "observability": {
            "avg_feature_coverage": 0.621571906354515,
            "observable_run_pct": 0.41917502787068006,
            "ambiguous_run_pct": 0.12374581939799331,
            "unobservable_run_pct": 0.5808249721293199
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.5808249721293199,
          "dominance_gap": 0.35562987736900775,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 2440
            },
            "d2_information": {
              "UNOBSERVABLE": 2440
            },
            "d3_urgency": {
              "IMMEDIATE": 891,
              "ADAPTIVE": 6
            },
            "participant_confidence": {
              "NA": 632,
              "LOW": 206,
              "HIGH": 46,
              "MEDIUM": 13
            }
          },
          "trade_size": {
            "avg": 16751.800643442624,
            "median": 9460.0
          },
          "run_size": {
            "avg": 45567.885808249725,
            "median": 18360.0,
            "avg_length": 2.720178372352285
          },
          "recent_trades": [
            {
              "trade_id": "71",
              "timestamp": "2026-04-10T07:52:41.427599",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11739,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-10T07:52:37.938317",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11739,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-10T06:56:04.990118",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11738,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-10T06:53:46.741534",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-10T06:53:44.760443",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-10T06:53:44.760443",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-10T06:53:41.943625",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-10T06:53:41.943625",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "59",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "58",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "57",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "56",
              "timestamp": "2026-04-10T06:52:27.567080",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11735,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "55",
              "timestamp": "2026-04-10T06:52:27.567080",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11735,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "54",
              "timestamp": "2026-04-10T05:55:30.309410",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11734,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "53",
              "timestamp": "2026-04-10T05:46:16.287662",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11733,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "52",
              "timestamp": "2026-04-10T05:43:08.149505",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11732,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "51",
              "timestamp": "2026-04-10T05:36:42.274419",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11731,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "50",
              "timestamp": "2026-04-10T05:31:00.071323",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11730,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "49",
              "timestamp": "2026-04-10T05:27:24.250537",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11729,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "48",
              "timestamp": "2026-04-10T05:17:46.234837",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11728,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "47",
              "timestamp": "2026-04-10T05:08:58.218473",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11727,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "46",
              "timestamp": "2026-04-10T05:01:34.196392",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11726,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "45",
              "timestamp": "2026-04-10T03:57:50.079527",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11725,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "44",
              "timestamp": "2026-04-10T03:45:08.153314",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11724,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "43",
              "timestamp": "2026-04-10T03:45:08.153314",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11724,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "42",
              "timestamp": "2026-04-10T03:43:06.051240",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11723,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 7875,
          "n_runs": 2846,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-06",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.008126984126984127,
            "mixed_pct": 0.0,
            "instit_pct": 0.4782222222222222,
            "ambiguous_pct": 0.10044444444444445,
            "unobservable_pct": 0.4132063492063492,
            "unclear_pct": 0.5136507936507937,
            "retail_qty_pct": 0.0034328714969508803,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5705974169328017,
            "ambiguous_qty_pct": 0.07070278010628303,
            "unobservable_qty_pct": 0.3552669314639644,
            "unclear_qty_pct": 0.42596971157024743,
            "retail_notional_pct": 0.003205206814099511,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5692524192274557,
            "ambiguous_notional_pct": 0.07006532018379488,
            "unobservable_notional_pct": 0.3574770537746498,
            "unclear_notional_pct": 0.42754237395844463
          },
          "run_composition": {
            "retail_pct": 0.02213633169360506,
            "mixed_pct": 0.0,
            "instit_pct": 0.19676739283204497,
            "ambiguous_pct": 0.0994378074490513,
            "unobservable_pct": 0.6816584680252986,
            "unclear_pct": 0.7810962754743499,
            "retail_notional_pct": 0.003205206814099511,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5692524192274557,
            "unclear_notional_pct": 0.42754237395844463
          },
          "counts": {
            "trades": {
              "retail": 64,
              "mixed": 0,
              "institutional": 3766,
              "ambiguous": 791,
              "unobservable": 3254,
              "unclear": 4045
            },
            "runs": {
              "retail": 63,
              "mixed": 0,
              "institutional": 560,
              "ambiguous": 283,
              "unobservable": 1940,
              "unclear": 2223
            }
          },
          "confidence": {
            "high": 0.024595924104005622,
            "medium": 0.009135628952916374,
            "low": 0.18517217146872805,
            "na": 0.78109627547435
          },
          "confidence_counts": {
            "high": 70,
            "medium": 26,
            "low": 527,
            "na": 2223
          },
          "trade_confidence": {
            "high": 0.052825396825396824,
            "medium": 0.014984126984126983,
            "low": 0.41853968253968254,
            "na": 0.5136507936507937
          },
          "trade_confidence_counts": {
            "high": 416,
            "medium": 118,
            "low": 3296,
            "na": 4045
          },
          "observability": {
            "avg_feature_coverage": 0.6004919184820802,
            "observable_run_pct": 0.3183415319747014,
            "ambiguous_run_pct": 0.0994378074490513,
            "unobservable_run_pct": 0.6816584680252986
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.6816584680252986,
          "dominance_gap": 0.48489107519325364,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7875
            },
            "d2_information": {
              "UNOBSERVABLE": 7875
            },
            "d3_urgency": {
              "IMMEDIATE": 2810,
              "ADAPTIVE": 35,
              "SCHEDULED": 1
            },
            "participant_confidence": {
              "NA": 2223,
              "LOW": 527,
              "HIGH": 70,
              "MEDIUM": 26
            }
          },
          "trade_size": {
            "avg": 22182.873847619045,
            "median": 9860.0
          },
          "run_size": {
            "avg": 61380.93167603653,
            "median": 20360.0,
            "avg_length": 2.7670414617006323
          },
          "recent_trades": [
            {
              "trade_id": "71",
              "timestamp": "2026-04-10T07:52:41.427599",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11739,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-10T07:52:37.938317",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11739,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-10T06:56:04.990118",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11738,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-10T06:53:46.741534",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-10T06:53:44.760443",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-10T06:53:44.760443",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-10T06:53:41.943625",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-10T06:53:41.943625",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "59",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "58",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "57",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "56",
              "timestamp": "2026-04-10T06:52:27.567080",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11735,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "55",
              "timestamp": "2026-04-10T06:52:27.567080",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11735,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "54",
              "timestamp": "2026-04-10T05:55:30.309410",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11734,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "53",
              "timestamp": "2026-04-10T05:46:16.287662",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11733,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "52",
              "timestamp": "2026-04-10T05:43:08.149505",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11732,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "51",
              "timestamp": "2026-04-10T05:36:42.274419",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11731,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "50",
              "timestamp": "2026-04-10T05:31:00.071323",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11730,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "49",
              "timestamp": "2026-04-10T05:27:24.250537",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11729,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "48",
              "timestamp": "2026-04-10T05:17:46.234837",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11728,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "47",
              "timestamp": "2026-04-10T05:08:58.218473",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11727,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "46",
              "timestamp": "2026-04-10T05:01:34.196392",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11726,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "45",
              "timestamp": "2026-04-10T03:57:50.079527",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11725,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "44",
              "timestamp": "2026-04-10T03:45:08.153314",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11724,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "43",
              "timestamp": "2026-04-10T03:45:08.153314",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11724,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "42",
              "timestamp": "2026-04-10T03:43:06.051240",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11723,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 16754,
          "n_runs": 6559,
          "n_trade_days": 126,
          "first_trade_date": "2025-09-23",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.0038199832875731167,
            "mixed_pct": 0.0,
            "instit_pct": 0.45857705622537903,
            "ambiguous_pct": 0.07729497433448729,
            "unobservable_pct": 0.4603079861525606,
            "unclear_pct": 0.5376029604870478,
            "retail_qty_pct": 0.0017156205594331987,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5452771051817681,
            "ambiguous_qty_pct": 0.05504413855196928,
            "unobservable_qty_pct": 0.39796313570682945,
            "unclear_qty_pct": 0.4530072742587987,
            "retail_notional_pct": 0.0016284386727546717,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5447287507607615,
            "ambiguous_notional_pct": 0.05489917958870645,
            "unobservable_notional_pct": 0.39874363097777726,
            "unclear_notional_pct": 0.4536428105664837
          },
          "run_composition": {
            "retail_pct": 0.0096051227321238,
            "mixed_pct": 0.0,
            "instit_pct": 0.19362707729836864,
            "ambiguous_pct": 0.07348681201402653,
            "unobservable_pct": 0.723280987955481,
            "unclear_pct": 0.7967677999695075,
            "retail_notional_pct": 0.0016284386727546717,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5447287507607615,
            "unclear_notional_pct": 0.4536428105664837
          },
          "counts": {
            "trades": {
              "retail": 64,
              "mixed": 0,
              "institutional": 7683,
              "ambiguous": 1295,
              "unobservable": 7712,
              "unclear": 9007
            },
            "runs": {
              "retail": 63,
              "mixed": 0,
              "institutional": 1270,
              "ambiguous": 482,
              "unobservable": 4744,
              "unclear": 5226
            }
          },
          "confidence": {
            "high": 0.0407074249123342,
            "medium": 0.006555877420338466,
            "low": 0.1559688976978198,
            "na": 0.7967677999695075
          },
          "confidence_counts": {
            "high": 267,
            "medium": 43,
            "low": 1023,
            "na": 5226
          },
          "trade_confidence": {
            "high": 0.08672555807568341,
            "medium": 0.013966813895189209,
            "low": 0.3617046675420795,
            "na": 0.5376029604870479
          },
          "trade_confidence_counts": {
            "high": 1453,
            "medium": 234,
            "low": 6060,
            "na": 9007
          },
          "observability": {
            "avg_feature_coverage": 0.5926970574782742,
            "observable_run_pct": 0.276719012044519,
            "ambiguous_run_pct": 0.07348681201402653,
            "unobservable_run_pct": 0.723280987955481
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.723280987955481,
          "dominance_gap": 0.5296539106571123,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 16754
            },
            "d2_information": {
              "UNOBSERVABLE": 16754
            },
            "d3_urgency": {
              "IMMEDIATE": 6478,
              "ADAPTIVE": 80,
              "SCHEDULED": 1
            },
            "participant_confidence": {
              "NA": 5226,
              "LOW": 1023,
              "HIGH": 267,
              "MEDIUM": 43
            }
          },
          "trade_size": {
            "avg": 20522.700652978394,
            "median": 9640.0
          },
          "run_size": {
            "avg": 52422.21782893734,
            "median": 18840.0,
            "avg_length": 2.5543527976825735
          },
          "recent_trades": [
            {
              "trade_id": "71",
              "timestamp": "2026-04-10T07:52:41.427599",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11739,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-10T07:52:37.938317",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11739,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-10T06:56:04.990118",
              "price": 4.56,
              "size": 2000.0,
              "notional": 9120.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11738,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-10T06:55:12.438930",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11737,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-10T06:53:46.741534",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-10T06:53:44.760443",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-10T06:53:44.760443",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-10T06:53:41.943625",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-10T06:53:41.943625",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "59",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "58",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "57",
              "timestamp": "2026-04-10T06:53:41.786431",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 11736,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "56",
              "timestamp": "2026-04-10T06:52:27.567080",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11735,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "55",
              "timestamp": "2026-04-10T06:52:27.567080",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11735,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "54",
              "timestamp": "2026-04-10T05:55:30.309410",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11734,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "53",
              "timestamp": "2026-04-10T05:46:16.287662",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11733,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "52",
              "timestamp": "2026-04-10T05:43:08.149505",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11732,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "51",
              "timestamp": "2026-04-10T05:36:42.274419",
              "price": 4.51,
              "size": 2000.0,
              "notional": 9020.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11731,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "50",
              "timestamp": "2026-04-10T05:31:00.071323",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11730,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "49",
              "timestamp": "2026-04-10T05:27:24.250537",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11729,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "48",
              "timestamp": "2026-04-10T05:17:46.234837",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11728,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "47",
              "timestamp": "2026-04-10T05:08:58.218473",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11727,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "46",
              "timestamp": "2026-04-10T05:01:34.196392",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11726,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "45",
              "timestamp": "2026-04-10T03:57:50.079527",
              "price": 4.53,
              "size": 2000.0,
              "notional": 9060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 11725,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "44",
              "timestamp": "2026-04-10T03:45:08.153314",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11724,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "43",
              "timestamp": "2026-04-10T03:45:08.153314",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 11724,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "42",
              "timestamp": "2026-04-10T03:43:06.051240",
              "price": 4.54,
              "size": 2000.0,
              "notional": 9080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 11723,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 16754,
      "n_runs": 6559,
      "n_trade_days": 126,
      "first_trade_date": "2025-09-23",
      "last_trade_date": "2026-04-10",
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
        "retail_pct": 0.0038199832875731167,
        "mixed_pct": 0.0,
        "instit_pct": 0.45857705622537903,
        "ambiguous_pct": 0.07729497433448729,
        "unobservable_pct": 0.4603079861525606,
        "unclear_pct": 0.5376029604870478,
        "retail_qty_pct": 0.0017156205594331987,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.5452771051817681,
        "ambiguous_qty_pct": 0.05504413855196928,
        "unobservable_qty_pct": 0.39796313570682945,
        "unclear_qty_pct": 0.4530072742587987,
        "retail_notional_pct": 0.0016284386727546717,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.5447287507607615,
        "ambiguous_notional_pct": 0.05489917958870645,
        "unobservable_notional_pct": 0.39874363097777726,
        "unclear_notional_pct": 0.4536428105664837
      },
      "run_composition": {
        "retail_pct": 0.0096051227321238,
        "mixed_pct": 0.0,
        "instit_pct": 0.19362707729836864,
        "ambiguous_pct": 0.07348681201402653,
        "unobservable_pct": 0.723280987955481,
        "unclear_pct": 0.7967677999695075
      },
      "trade_size": {
        "avg": 20522.700652978394,
        "median": 9640.0
      },
      "run_size": {
        "avg": 52422.21782893734,
        "median": 18840.0,
        "avg_length": 2.5543527976825735
      },
      "confidence": {
        "high": 0.0407074249123342,
        "medium": 0.006555877420338466,
        "low": 0.1559688976978198,
        "na": 0.7967677999695075
      },
      "confidence_counts": {
        "high": 267,
        "medium": 43,
        "low": 1023,
        "na": 5226
      },
      "trade_confidence": {
        "high": 0.08672555807568341,
        "medium": 0.013966813895189209,
        "low": 0.3617046675420795,
        "na": 0.5376029604870479
      },
      "trade_confidence_counts": {
        "high": 1453,
        "medium": 234,
        "low": 6060,
        "na": 9007
      },
      "counts": {
        "trades": {
          "retail": 64,
          "mixed": 0,
          "institutional": 7683,
          "ambiguous": 1295,
          "unobservable": 7712,
          "unclear": 9007
        },
        "runs": {
          "retail": 63,
          "mixed": 0,
          "institutional": 1270,
          "ambiguous": 482,
          "unobservable": 4744,
          "unclear": 5226
        }
      },
      "observability": {
        "avg_feature_coverage": 0.5926970574782742,
        "observable_run_pct": 0.276719012044519,
        "ambiguous_run_pct": 0.07348681201402653,
        "unobservable_run_pct": 0.723280987955481
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.723280987955481,
      "dominance_gap": 0.5296539106571123,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 3341,
            "n_runs": 1511,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.46393295420532776,
            "ambiguous_pct": 0.04250224483687519,
            "unobservable_pct": 0.4935648009577971,
            "unclear_pct": 0.5360670457946722,
            "avg_trade_size": 17338.061727027838,
            "avg_run_notional": 38336.50842488419,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5672122682449532,
            "ambiguous_qty_pct": 0.033749711018099406,
            "unobservable_qty_pct": 0.39903802073694744,
            "unclear_qty_pct": 0.43278773175504687,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5654468246145187,
            "ambiguous_notional_pct": 0.033198297627219084,
            "unobservable_notional_pct": 0.40135487775826223,
            "unclear_notional_pct": 0.4345531753854813,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1985440105890139,
            "run_ambiguous_pct": 0.0357379219060225,
            "run_unobservable_pct": 0.7657180675049636,
            "run_unclear_pct": 0.8014559894109862,
            "avg_feature_coverage": 0.5851422898742554,
            "high_confidence_pct": 0.042356055592322965,
            "medium_confidence_pct": 0.00727994705493051,
            "low_confidence_pct": 0.14890800794176043,
            "na_confidence_pct": 0.8014559894109861,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 1856,
            "n_runs": 735,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.4234913793103448,
            "ambiguous_pct": 0.06088362068965517,
            "unobservable_pct": 0.515625,
            "unclear_pct": 0.5765086206896551,
            "avg_trade_size": 21251.688038793105,
            "avg_run_notional": 53664.126530612244,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4855631876481673,
            "ambiguous_qty_pct": 0.04157801957327822,
            "unobservable_qty_pct": 0.47285879277855447,
            "unclear_qty_pct": 0.5144368123518327,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.4856211599621156,
            "ambiguous_notional_pct": 0.04170764021204908,
            "unobservable_notional_pct": 0.47267119982583533,
            "unclear_notional_pct": 0.5143788400378844,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1782312925170068,
            "run_ambiguous_pct": 0.0653061224489796,
            "run_unobservable_pct": 0.7564625850340136,
            "run_unclear_pct": 0.8217687074829932,
            "avg_feature_coverage": 0.5865306122448979,
            "high_confidence_pct": 0.08435374149659863,
            "medium_confidence_pct": 0.0013605442176870747,
            "low_confidence_pct": 0.09251700680272108,
            "na_confidence_pct": 0.8217687074829932,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 2616,
            "n_runs": 932,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.4602446483180428,
            "ambiguous_pct": 0.09671253822629969,
            "unobservable_pct": 0.4430428134556575,
            "unclear_pct": 0.5397553516819572,
            "avg_trade_size": 24990.973279816513,
            "avg_run_notional": 70146.33701716739,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5612388957668165,
            "ambiguous_qty_pct": 0.06588330690761134,
            "unobservable_qty_pct": 0.37287779732557214,
            "unclear_qty_pct": 0.4387611042331835,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5611579683203076,
            "ambiguous_notional_pct": 0.06544289544325241,
            "unobservable_notional_pct": 0.37339913623644,
            "unclear_notional_pct": 0.4388420316796924,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1781115879828326,
            "run_ambiguous_pct": 0.08690987124463519,
            "run_unobservable_pct": 0.7349785407725322,
            "run_unclear_pct": 0.8218884120171674,
            "avg_feature_coverage": 0.5897532188841201,
            "high_confidence_pct": 0.02575107296137339,
            "medium_confidence_pct": 0.013948497854077254,
            "low_confidence_pct": 0.13841201716738197,
            "na_confidence_pct": 0.8218884120171673,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 2207,
            "n_runs": 837,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.4114182147711826,
            "ambiguous_pct": 0.10466696873584051,
            "unobservable_pct": 0.4839148164929769,
            "unclear_pct": 0.5885817852288174,
            "avg_trade_size": 24914.307720888082,
            "avg_run_notional": 65693.9989725209,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5206642336770833,
            "ambiguous_qty_pct": 0.06954586549829612,
            "unobservable_qty_pct": 0.4097899008246206,
            "unclear_qty_pct": 0.4793357663229167,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5199196864171366,
            "ambiguous_notional_pct": 0.0695407657181551,
            "unobservable_notional_pct": 0.4105395478647083,
            "unclear_notional_pct": 0.4800803135828634,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.17323775388291518,
            "run_ambiguous_pct": 0.0908004778972521,
            "run_unobservable_pct": 0.7359617682198327,
            "run_unclear_pct": 0.8267622461170848,
            "avg_feature_coverage": 0.589605734767025,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.17323775388291518,
            "na_confidence_pct": 0.8267622461170848,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 2808,
            "n_runs": 980,
            "retail_pct": 0.0035612535612535613,
            "mixed_pct": 0.0,
            "instit_pct": 0.5430911680911681,
            "ambiguous_pct": 0.0811965811965812,
            "unobservable_pct": 0.37215099715099714,
            "unclear_pct": 0.45334757834757833,
            "avg_trade_size": 17674.45167735043,
            "avg_run_notional": 50642.71460204082,
            "retail_qty_pct": 0.0017086500980765156,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6337193363754899,
            "ambiguous_qty_pct": 0.05999260344357544,
            "unobservable_qty_pct": 0.30457941008285816,
            "unclear_qty_pct": 0.3645720135264336,
            "retail_notional_pct": 0.0015909776797032454,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6340150829249835,
            "ambiguous_notional_pct": 0.05903059129525082,
            "unobservable_notional_pct": 0.3053633481000624,
            "unclear_notional_pct": 0.36439393939531317,
            "run_retail_pct": 0.009183673469387756,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.22448979591836735,
            "run_ambiguous_pct": 0.08979591836734693,
            "run_unobservable_pct": 0.676530612244898,
            "run_unclear_pct": 0.7663265306122449,
            "avg_feature_coverage": 0.6020408163265306,
            "high_confidence_pct": 0.00816326530612245,
            "medium_confidence_pct": 0.012244897959183673,
            "low_confidence_pct": 0.21326530612244898,
            "na_confidence_pct": 0.7663265306122449,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 441,
            "n_runs": 201,
            "retail_pct": 0.12244897959183673,
            "mixed_pct": 0.0,
            "instit_pct": 0.4489795918367347,
            "ambiguous_pct": 0.17913832199546487,
            "unobservable_pct": 0.2494331065759637,
            "unclear_pct": 0.4285714285714286,
            "avg_trade_size": 17467.38775510204,
            "avg_run_notional": 38323.97014925373,
            "retail_qty_pct": 0.062243582229515884,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5157660297737663,
            "ambiguous_qty_pct": 0.15707419997655608,
            "unobservable_qty_pct": 0.26491618802016176,
            "unclear_qty_pct": 0.42199038799671784,
            "retail_notional_pct": 0.06243679507441013,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5143501631417304,
            "ambiguous_notional_pct": 0.15680144066337812,
            "unobservable_notional_pct": 0.26641160112048135,
            "unclear_notional_pct": 0.42321304178385943,
            "run_retail_pct": 0.26865671641791045,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.19402985074626866,
            "run_ambiguous_pct": 0.1890547263681592,
            "run_unobservable_pct": 0.3482587064676617,
            "run_unclear_pct": 0.5373134328358209,
            "avg_feature_coverage": 0.6694029850746269,
            "high_confidence_pct": 0.1890547263681592,
            "medium_confidence_pct": 0.004975124378109453,
            "low_confidence_pct": 0.26865671641791045,
            "na_confidence_pct": 0.5373134328358209,
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
          "trade_id": "71",
          "timestamp": "2026-04-10T07:52:41.427599",
          "price": 4.56,
          "size": 2000.0,
          "notional": 9120.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 11739,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "70",
          "timestamp": "2026-04-10T07:52:37.938317",
          "price": 4.56,
          "size": 2000.0,
          "notional": 9120.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 11739,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "69",
          "timestamp": "2026-04-10T06:56:04.990118",
          "price": 4.56,
          "size": 2000.0,
          "notional": 9120.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 11738,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "68",
          "timestamp": "2026-04-10T06:55:12.438930",
          "price": 4.54,
          "size": 2000.0,
          "notional": 9080.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 11737,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "67",
          "timestamp": "2026-04-10T06:55:12.438930",
          "price": 4.54,
          "size": 2000.0,
          "notional": 9080.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 11737,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "66",
          "timestamp": "2026-04-10T06:55:12.438930",
          "price": 4.54,
          "size": 2000.0,
          "notional": 9080.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 11737,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "65",
          "timestamp": "2026-04-10T06:53:46.741534",
          "price": 4.54,
          "size": 2000.0,
          "notional": 9080.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 11736,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "64",
          "timestamp": "2026-04-10T06:53:44.760443",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 11736,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "63",
          "timestamp": "2026-04-10T06:53:44.760443",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 11736,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "62",
          "timestamp": "2026-04-10T06:53:41.943625",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 11736,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "61",
          "timestamp": "2026-04-10T06:53:41.943625",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 11736,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "60",
          "timestamp": "2026-04-10T06:53:41.786431",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 11736,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "59",
          "timestamp": "2026-04-10T06:53:41.786431",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 11736,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "58",
          "timestamp": "2026-04-10T06:53:41.786431",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 11736,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "57",
          "timestamp": "2026-04-10T06:53:41.786431",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 11736,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "56",
          "timestamp": "2026-04-10T06:52:27.567080",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 11735,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "55",
          "timestamp": "2026-04-10T06:52:27.567080",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 11735,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "54",
          "timestamp": "2026-04-10T05:55:30.309410",
          "price": 4.51,
          "size": 2000.0,
          "notional": 9020.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 11734,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "53",
          "timestamp": "2026-04-10T05:46:16.287662",
          "price": 4.51,
          "size": 2000.0,
          "notional": 9020.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 11733,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "52",
          "timestamp": "2026-04-10T05:43:08.149505",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 11732,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "51",
          "timestamp": "2026-04-10T05:36:42.274419",
          "price": 4.51,
          "size": 2000.0,
          "notional": 9020.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 11731,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "50",
          "timestamp": "2026-04-10T05:31:00.071323",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 11730,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "49",
          "timestamp": "2026-04-10T05:27:24.250537",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 11729,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "48",
          "timestamp": "2026-04-10T05:17:46.234837",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 11728,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "47",
          "timestamp": "2026-04-10T05:08:58.218473",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 11727,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "46",
          "timestamp": "2026-04-10T05:01:34.196392",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 11726,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "45",
          "timestamp": "2026-04-10T03:57:50.079527",
          "price": 4.53,
          "size": 2000.0,
          "notional": 9060.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 11725,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "44",
          "timestamp": "2026-04-10T03:45:08.153314",
          "price": 4.54,
          "size": 2000.0,
          "notional": 9080.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 11724,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "43",
          "timestamp": "2026-04-10T03:45:08.153314",
          "price": 4.54,
          "size": 2000.0,
          "notional": 9080.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 11724,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "42",
          "timestamp": "2026-04-10T03:43:06.051240",
          "price": 4.54,
          "size": 2000.0,
          "notional": 9080.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 11723,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
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
      "total_trades": 16753,
      "price_moving_trades": 4481,
      "pct_price_moving": 26.747448218229568,
      "all_movers": {
        "count": 4481,
        "avg_size": 20340.697692479356,
        "median_size": 9600.0,
        "retail_count": 30,
        "mixed_count": 0,
        "institutional_count": 1703,
        "ambiguous_count": 435,
        "unobservable_count": 2313,
        "retail_pct": 0.6694934166480696,
        "mixed_pct": 0.0,
        "instit_pct": 38.00490961838875,
        "unclear_pct": 61.32559696496318
      },
      "positive_movers": {
        "count": 2222,
        "avg_size": 18787.125571557153,
        "median_size": 9600.0,
        "retail_count": 1,
        "mixed_count": 0,
        "institutional_count": 809,
        "ambiguous_count": 213,
        "unobservable_count": 1199,
        "retail_pct": 0.045004500450045004,
        "mixed_pct": 0.0,
        "instit_pct": 36.40864086408641,
        "unclear_pct": 63.54635463546355
      },
      "negative_movers": {
        "count": 2259,
        "avg_size": 21868.8239663568,
        "median_size": 9600.0,
        "retail_count": 29,
        "mixed_count": 0,
        "institutional_count": 894,
        "ambiguous_count": 222,
        "unobservable_count": 1114,
        "retail_pct": 1.2837538733953076,
        "mixed_pct": 0.0,
        "instit_pct": 39.57503320053121,
        "unclear_pct": 59.141212926073486
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
          "opening": 0.003543707042968936,
          "continuous": 0.936780742551469,
          "closing": 0.059675550405561995,
          "auctions": 0.06321925744853094,
          "other": 0.0
        },
        "1M": {
          "opening": 0.0005369027566813648,
          "continuous": 0.8341273999450703,
          "closing": 0.06081105562539964,
          "auctions": 0.061347958382081,
          "other": 0.10452464167284863
        },
        "3M": {
          "opening": 0.0022394192771760736,
          "continuous": 0.9289684362181758,
          "closing": 0.031724528579791494,
          "auctions": 0.03396394785696757,
          "other": 0.03706761592485677
        },
        "6M": {
          "opening": 0.009828974579043845,
          "continuous": 0.8853612637414034,
          "closing": 0.03333537466757418,
          "auctions": 0.04316434924661802,
          "other": 0.07147438701197849
        }
      },
      "hhi": {
        "1D": 0.27685251977202985,
        "1M": 0.20922460304960344,
        "3M": 0.20193519973872526,
        "6M": 0.2045298577474116
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0155
        },
        {
          "time": "09:30",
          "avg_share": 0.121
        },
        {
          "time": "10:00",
          "avg_share": 0.0815
        },
        {
          "time": "10:30",
          "avg_share": 0.0772
        },
        {
          "time": "11:00",
          "avg_share": 0.0612
        },
        {
          "time": "11:30",
          "avg_share": 0.0544
        },
        {
          "time": "12:00",
          "avg_share": 0.0216
        },
        {
          "time": "13:00",
          "avg_share": 0.0883
        },
        {
          "time": "13:30",
          "avg_share": 0.0804
        },
        {
          "time": "14:00",
          "avg_share": 0.0807
        },
        {
          "time": "14:30",
          "avg_share": 0.0836
        },
        {
          "time": "15:00",
          "avg_share": 0.0885
        },
        {
          "time": "15:30",
          "avg_share": 0.1139
        },
        {
          "time": "16:00",
          "avg_share": 0.0323
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "69",
          "auctions_pct": 4.323006575180781,
          "hhi": 0.20563194371669838,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "45",
          "auctions_pct": 2.6368842215595545,
          "hhi": 0.3681542260500774,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1179",
          "auctions_pct": 10.220193682964293,
          "hhi": 0.14427559012694155,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "62",
          "auctions_pct": 1.789889005772789,
          "hhi": 0.2192899917692964,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "9658",
          "auctions_pct": 3.7563013263985368,
          "hhi": 0.17040443018221058,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "999",
          "auctions_pct": 0.6678767409892707,
          "hhi": 0.16423079636544405,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "308",
          "auctions_pct": 1.8292127050532532,
          "hhi": 0.15628715816609812,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2255",
          "auctions_pct": 1.9627576210592599,
          "hhi": 0.20325581441797036,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "3918",
          "auctions_pct": 2.08238430072991,
          "hhi": 0.1372806645401942,
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
