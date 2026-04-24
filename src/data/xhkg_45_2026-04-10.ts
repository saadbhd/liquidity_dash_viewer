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
      "ticker": "45",
      "name": "HK&S HOTELS",
      "marketCap": 9962582604.24,
      "sector": "Hotels & Resorts",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "69",
      "name": "SHANGRI-LA ASIA",
      "marketCap": 16421704756.48,
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
    "ticker": "45",
    "company": "HK&S HOTELS",
    "asof_date": "2026-04-10",
    "industry": "Consumer Discretionary - Travel & Leisure",
    "sector": "Hotels & Resorts",
    "market_cap_display": "10.0B",
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
          "score_pca": 52.7972027972028,
          "score_pca_percentile": 52.7972027972028,
          "rank_pca": 1216,
          "total": 2574,
          "adv_notional_sgd": 410720.0,
          "adv_volume_shares": 68000.0,
          "free_float_shares": 371143569.0,
          "turnover_ratio": 0.00018321750847850472,
          "votes": 76.0,
          "trades": 76.0,
          "spread_pct": 0.011074550205374864,
          "spread_ticks": 6.675675675675675,
          "amihud": 4.024378072612537e-09,
          "volatility": 0.14288780723382727
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
            "score_pca_delta": -20.28,
            "adv_delta_pct": -95.5,
            "trades_delta_pct": -86.27,
            "volatility_delta_pct": 49.91,
            "spread_pct_delta_pct": -64.43,
            "spread_ticks_delta_pct": 273.23,
            "amihud_delta_pct": -98.36,
            "turnover_ratio_delta_pct": -96.37
          }
        },
        "peer_liquidity": [
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
            "is_target": true
          },
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
              "mean": 75491667.84,
              "median": 9195076.825,
              "min": 970960.0,
              "max": 530443904.0,
              "p5": 1207768.9745,
              "p95": 354971129.5999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1042.125,
              "median": 553.5,
              "min": 79.0,
              "max": 4546.0,
              "p5": 96.5,
              "p95": 3357.3999999999983,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3136171094631376,
              "median": 0.2852632445707649,
              "min": 0.20814601047040393,
              "max": 0.5063285509621948,
              "p5": 0.20890299637701448,
              "p95": 0.49881613184779644,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007576754893662765,
              "median": 0.00673503236991612,
              "min": 0.002030396895173963,
              "max": 0.01943234456007333,
              "p5": 0.002638238504820163,
              "p95": 0.016044976391176746,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.024222054534357,
              "median": 1.7886178861788617,
              "min": 1.082226438962682,
              "max": 3.6266666666666665,
              "p5": 1.0965698479225707,
              "p95": 3.395264492753623,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.83744169248371e-09,
              "median": 2.028801173598884e-09,
              "min": 0.0,
              "max": 1.830948522882291e-08,
              "p5": 2.8149896944901874e-10,
              "p95": 1.522181196467401e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008553273151042743,
              "median": 0.005042549006605612,
              "min": 0.00016852573244886354,
              "max": 0.02537233243307897,
              "p5": 0.00031152425767347813,
              "p95": 0.022218318322395778,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.0016528925619834212,
            "market": 0.005388454653585173,
            "sector": 0.0,
            "peers": 0.004640371229698292,
            "vs_market": -0.007041347215568594,
            "vs_sector": -0.0016528925619834212,
            "vs_peers": -0.006293263791681714
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 60.95571095571095,
          "score_pca_percentile": 60.95571095571095,
          "rank_pca": 1006,
          "total": 2574,
          "adv_notional_sgd": 765900.0,
          "adv_volume_shares": 115000.0,
          "free_float_shares": 371143569.0,
          "turnover_ratio": 0.0003098531393386477,
          "votes": 53.0,
          "trades": 53.0,
          "spread_pct": 0.01000176367846433,
          "spread_ticks": 6.463235294117647,
          "amihud": 2.104202750456026e-08,
          "volatility": 0.34066387468656284
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
          "peer_median_volatility": 0.342769726268872,
          "peer_median_spread_pct": 0.006425236799683371,
          "peer_median_spread_ticks": 1.6694444444444445,
          "peer_median_amihud": 1.6445172791870427e-09,
          "peer_median_turnover_ratio": 0.004937590043561591,
          "target_vs_peer": {
            "score_pca_delta": -14.55,
            "adv_delta_pct": -92.3,
            "trades_delta_pct": -89.98,
            "volatility_delta_pct": 0.61,
            "spread_pct_delta_pct": -55.66,
            "spread_ticks_delta_pct": 287.15,
            "amihud_delta_pct": -1179.53,
            "turnover_ratio_delta_pct": -93.72
          }
        },
        "peer_liquidity": [
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
            "is_target": true
          },
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
              "mean": 18785952.6825,
              "median": 9950695.0,
              "min": 1647557.07,
              "max": 98124880.0,
              "p5": 1723872.0955,
              "p95": 68506254.49849996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 811.5,
              "median": 529.0,
              "min": 109.0,
              "max": 3909.0,
              "p5": 109.35,
              "p95": 2740.699999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3416243386619897,
              "median": 0.342769726268872,
              "min": 0.22678113784871864,
              "max": 0.4086647989364213,
              "p5": 0.2519590820150382,
              "p95": 0.4084294055823146,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007159518808762379,
              "median": 0.006425236799683371,
              "min": 0.0014409284946526567,
              "max": 0.017072771509500456,
              "p5": 0.0023822907424002012,
              "p95": 0.014423954787788483,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.166043022660662,
              "median": 1.6694444444444445,
              "min": 1.0221729490022173,
              "max": 3.553223388305847,
              "p5": 1.0362838137472283,
              "p95": 3.5411081224093834,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.682420649886107e-09,
              "median": 1.6445172791870427e-09,
              "min": 2.1155464881174842e-10,
              "max": 7.383779313603836e-09,
              "p5": 5.862259238897994e-10,
              "p95": 6.47958021094365e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004330452796121312,
              "median": 0.004937590043561591,
              "min": 0.0003370514648977271,
              "max": 0.008076193583912875,
              "p5": 0.00042106598376523944,
              "p95": 0.007875162395874954,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.09445277361319337,
            "market": 0.005817570896814672,
            "sector": 0.001295672454003638,
            "peers": -0.026884187027611306,
            "vs_market": -0.10027034451000805,
            "vs_sector": -0.09574844606719701,
            "vs_peers": -0.06756858658558207
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 65.22921522921523,
          "score_pca_percentile": 65.22921522921523,
          "rank_pca": 896,
          "total": 2574,
          "adv_notional_sgd": 1092960.0,
          "adv_volume_shares": 184000.0,
          "free_float_shares": 371143569.0,
          "turnover_ratio": 0.0004957650229418363,
          "votes": 76.0,
          "trades": 76.0,
          "spread_pct": 0.0066380559844010575,
          "spread_ticks": 4.481927710843373,
          "amihud": 8.2351393840414e-09,
          "volatility": 0.309293251535911
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
          "peer_median_spread_pct": 0.005016859627515337,
          "peer_median_spread_ticks": 1.8229098090849243,
          "peer_median_amihud": 1.3397423206908333e-09,
          "peer_median_turnover_ratio": 0.00465797683092165,
          "target_vs_peer": {
            "score_pca_delta": -10.9,
            "adv_delta_pct": -90.3,
            "trades_delta_pct": -86.61,
            "volatility_delta_pct": 4.28,
            "spread_pct_delta_pct": -32.31,
            "spread_ticks_delta_pct": 145.87,
            "amihud_delta_pct": -514.68,
            "turnover_ratio_delta_pct": -89.36
          }
        },
        "peer_liquidity": [
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
            "is_target": true
          },
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
              "mean": 18264355.19125,
              "median": 11269441.515,
              "min": 1932840.0,
              "max": 84944380.0,
              "p5": 2051166.6,
              "p95": 61465244.074999966,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 805.375,
              "median": 567.5,
              "min": 111.0,
              "max": 3550.0,
              "p5": 115.55,
              "p95": 2548.6499999999987,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3433492634000761,
              "median": 0.3231078659999763,
              "min": 0.2405432876766652,
              "max": 0.5345020960922069,
              "p5": 0.2594218698940636,
              "p95": 0.4830675894412534,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006726810407371085,
              "median": 0.005016859627515337,
              "min": 0.0014409284946526567,
              "max": 0.01907400079145233,
              "p5": 0.0023919368390939253,
              "p95": 0.015374380113668713,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.0055851773089874,
              "median": 1.8229098090849243,
              "min": 1.02725086828747,
              "max": 3.503086419753086,
              "p5": 1.0403185420661056,
              "p95": 3.31888704625023,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.8572405900547813e-09,
              "median": 1.3397423206908333e-09,
              "min": 1.7422202004185632e-10,
              "max": 4.700142292099454e-09,
              "p5": 4.367680372992158e-10,
              "p95": 4.054234084856867e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0044872773237759084,
              "median": 0.00465797683092165,
              "min": 0.00036916674598703883,
              "max": 0.008652566314072048,
              "p5": 0.00047496228349055297,
              "p95": 0.008445966122261615,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.011725293132328174,
            "market": 0.07151156981189555,
            "sector": -0.00900552141919464,
            "peers": -0.10110784504489756,
            "vs_market": -0.059786276679567374,
            "vs_sector": 0.020730814551522814,
            "vs_peers": 0.11283313817722573
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 60.256410256410255,
          "score_pca_percentile": 60.256410256410255,
          "rank_pca": 1024,
          "total": 2574,
          "adv_notional_sgd": 705827.5,
          "adv_volume_shares": 114250.0,
          "free_float_shares": 371143569.0,
          "turnover_ratio": 0.00030783235799513475,
          "votes": 38.0,
          "trades": 38.0,
          "spread_pct": 0.0077876151641418515,
          "spread_ticks": 4.826068154298564,
          "amihud": 9.666038374172314e-09,
          "volatility": 0.2649797015817215
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
            "score_pca_delta": -16.78,
            "adv_delta_pct": -94.6,
            "trades_delta_pct": -94.5,
            "volatility_delta_pct": 22.46,
            "spread_pct_delta_pct": -59.87,
            "spread_ticks_delta_pct": 161.26,
            "amihud_delta_pct": -797.43,
            "turnover_ratio_delta_pct": -93.97
          }
        },
        "peer_liquidity": [
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
            "is_target": true
          },
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
              "mean": 17100608.2825,
              "median": 13056326.23,
              "min": 1575695.9,
              "max": 62368636.0,
              "p5": 1824505.335,
              "p95": 48205165.66499998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 789.6875,
              "median": 690.5,
              "min": 105.0,
              "max": 2842.5,
              "p5": 109.2,
              "p95": 2135.674999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3763722246001576,
              "median": 0.3417353077700388,
              "min": 0.18335441930863802,
              "max": 0.7417524776411677,
              "p5": 0.20679166393520018,
              "p95": 0.6377787110969404,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.005894076703942167,
              "median": 0.0048712029323362965,
              "min": 0.0014596134652365453,
              "max": 0.014539786114052242,
              "p5": 0.002376583220848779,
              "p95": 0.012262171295099815,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.9973457533762058,
              "median": 1.847193693750632,
              "min": 1.0297494235971172,
              "max": 3.6336447562483354,
              "p5": 1.042753087245059,
              "p95": 3.3831904352882916,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3348615440538922e-09,
              "median": 1.0770759581025399e-09,
              "min": 2.2025559767108112e-10,
              "max": 2.7124058325483433e-09,
              "p5": 3.618733841781631e-10,
              "p95": 2.6236117330711502e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004920923391669058,
              "median": 0.005103956180177367,
              "min": 0.0003974663501152442,
              "max": 0.010444442987850064,
              "p5": 0.00045364933354451,
              "p95": 0.009543281949992918,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.0066666666666659324,
            "market": 0.11289080174108235,
            "sector": -0.0050667995683783,
            "peers": -0.16157966948213975,
            "vs_market": -0.10622413507441641,
            "vs_sector": 0.011733466235044232,
            "vs_peers": 0.1682463361488057
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity is softer on the day, with average volume down 46.4% from the 1M average, which makes access thinner than the recent baseline.",
        "market_comparison": "The stock is also underperforming, with a 1M return of -9.4% compared with peers at -2.7% and the market at +0.6%, which adds pressure to trading conditions."
      },
      "30d": {
        "liquidity": "Monthly tradability is weak for its size, with primary average daily volume of HK$705.8K compared with a peer median of HK$13.1M, which leaves access below the peer group.",
        "market_comparison": "Price performance is weaker than both peers and the market over 1M, which means the tape is not being supported by stronger momentum."
      },
      "3m": {
        "liquidity": "Liquidity remains weak in the broader context, with the 6M score at 60.3 compared with a peer median of 77.0, pointing to structurally lower accessibility.",
        "market_comparison": "Market factors account for 62.5% of current trading, so broader moves are still a meaningful influence on liquidity conditions."
      },
      "6m": {
        "liquidity": "Structural liquidity is weak, with a 6M score 16.8 points below the peer median, which means access screens below peers before day-to-day conditions are considered.",
        "market_comparison": "Displayed depth is more supportive than the longer-term standing, with top-10 bid depth at 3.34x ask depth and a 6-tick spread, which suggests immediate liquidity is more balanced than the structural picture."
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
          "median": 0.62542579253624,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "62.5%",
          "display_range": null,
          "display_text": "62.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 62.5,
          "plain_english": "Market explains about 62.5% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.3047125406547881,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "30.5%",
          "display_range": null,
          "display_text": "30.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 30.5,
          "plain_english": "Sector explains about 30.5% of price moves in the current state."
        },
        "company_share": {
          "median": 0.06986166680897188,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "7.0%",
          "display_range": null,
          "display_text": "7.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 7.0,
          "plain_english": "Company-specific explains about 7.0% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.16745197631623,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.17",
          "display_range": null,
          "display_text": "1.17",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.17% stock move in the same direction in this state.",
          "value_num": 1.17
        },
        "beta_stock_lag": {
          "median": -0.13194983582625913,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.13",
          "display_range": null,
          "display_text": "-0.13",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.13
        },
        "beta_sector": {
          "median": 1.350953670587595,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.35",
          "display_range": null,
          "display_text": "1.35",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.35% stock move in the same direction in this state.",
          "value_num": 1.35
        },
        "beta_market_lag": {
          "median": 0.80896967986735,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.81",
          "display_range": null,
          "display_text": "0.81",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.81
        },
        "beta_sector_lag": {
          "median": 0.13341039898040036,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.13",
          "display_range": null,
          "display_text": "0.13",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.13
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
            "median": 0.6621234926756436,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "66.2%",
            "display_range": null,
            "display_text": "66.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 66.2,
            "plain_english": "Market explains about 66.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.6621234926756436,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.2%",
              "display_range": null,
              "display_text": "66.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 66.2,
              "plain_english": "Market explains about 66.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19726205724337392,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.7%",
              "display_range": null,
              "display_text": "19.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 19.7,
              "plain_english": "Sector explains about 19.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.14061445008098247,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.1%",
              "display_range": null,
              "display_text": "14.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 14.1,
              "plain_english": "Company-specific explains about 14.1% of price moves in the current state."
            }
          },
          "summary": "Mar: Still clearly market-driven, though based on only 6 trading days."
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
            "median": 0.4191917471588106,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.9%",
            "display_range": null,
            "display_text": "41.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 41.9,
            "plain_english": "Market explains about 41.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4191917471588106,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.9%",
              "display_range": null,
              "display_text": "41.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 41.9,
              "plain_english": "Market explains about 41.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17644800464233806,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.6%",
              "display_range": null,
              "display_text": "17.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 17.6,
              "plain_english": "Sector explains about 17.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.40436024819885136,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.4%",
              "display_range": null,
              "display_text": "40.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 40.4,
              "plain_english": "Company-specific explains about 40.4% of price moves in the current state."
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
            "median": 0.4179716532404688,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.8%",
            "display_range": null,
            "display_text": "41.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 41.8,
            "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3404931540528902,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.0%",
              "display_range": null,
              "display_text": "34.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.0,
              "plain_english": "Market explains about 34.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.24153519270664106,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.2%",
              "display_range": null,
              "display_text": "24.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 24.2,
              "plain_english": "Sector explains about 24.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4179716532404688,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.8%",
              "display_range": null,
              "display_text": "41.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.8,
              "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4884338277895001,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.8%",
            "display_range": null,
            "display_text": "48.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 48.8,
            "plain_english": "Market explains about 48.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4884338277895001,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.8%",
              "display_range": null,
              "display_text": "48.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.8,
              "plain_english": "Market explains about 48.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1063356427439171,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.6%",
              "display_range": null,
              "display_text": "10.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 10.6,
              "plain_english": "Sector explains about 10.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4052305294665827,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.5%",
              "display_range": null,
              "display_text": "40.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 40.5,
              "plain_english": "Company-specific explains about 40.5% of price moves in the current state."
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
            "median": 0.6899249543091515,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "69.0%",
            "display_range": null,
            "display_text": "69.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 69.0,
            "plain_english": "Company-specific explains about 69.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12433677414092331,
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
              "median": 0.18573827154992517,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.6%",
              "display_range": null,
              "display_text": "18.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 18.6,
              "plain_english": "Sector explains about 18.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6899249543091515,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "69.0%",
              "display_range": null,
              "display_text": "69.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 69.0,
              "plain_english": "Company-specific explains about 69.0% of price moves in the current state."
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
            "median": 0.5324387274148619,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.2%",
            "display_range": null,
            "display_text": "53.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 53.2,
            "plain_english": "Company-specific explains about 53.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23405496382753227,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.4%",
              "display_range": null,
              "display_text": "23.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 23.4,
              "plain_english": "Market explains about 23.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2335063087576059,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.4%",
              "display_range": null,
              "display_text": "23.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 23.4,
              "plain_english": "Sector explains about 23.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5324387274148619,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.2%",
              "display_range": null,
              "display_text": "53.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.2,
              "plain_english": "Company-specific explains about 53.2% of price moves in the current state."
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
            "median": 0.4834203626209099,
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
              "median": 0.24511810770996093,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.5%",
              "display_range": null,
              "display_text": "24.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.5,
              "plain_english": "Market explains about 24.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2714615296691292,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.1%",
              "display_range": null,
              "display_text": "27.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 27.1,
              "plain_english": "Sector explains about 27.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4834203626209099,
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
            "median": 0.4128044614975215,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.3%",
            "display_range": null,
            "display_text": "41.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 41.3,
            "plain_english": "Market explains about 41.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4128044614975215,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.3%",
              "display_range": null,
              "display_text": "41.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.3,
              "plain_english": "Market explains about 41.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.33549255519693777,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.5%",
              "display_range": null,
              "display_text": "33.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 33.5,
              "plain_english": "Sector explains about 33.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2517029833055408,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.2%",
              "display_range": null,
              "display_text": "25.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 25.2,
              "plain_english": "Company-specific explains about 25.2% of price moves in the current state."
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
            "median": 0.3956642510849709,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.6%",
            "display_range": null,
            "display_text": "39.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 39.6,
            "plain_english": "Company-specific explains about 39.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2754057466520017,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.5%",
              "display_range": null,
              "display_text": "27.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.5,
              "plain_english": "Market explains about 27.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3289300022630274,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.9%",
              "display_range": null,
              "display_text": "32.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 32.9,
              "plain_english": "Sector explains about 32.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3956642510849709,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.6%",
              "display_range": null,
              "display_text": "39.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 39.6,
              "plain_english": "Company-specific explains about 39.6% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5372231723867451,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.7%",
            "display_range": null,
            "display_text": "53.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 53.7,
            "plain_english": "Market explains about 53.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5372231723867451,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.7%",
              "display_range": null,
              "display_text": "53.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 53.7,
              "plain_english": "Market explains about 53.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28606841754805845,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.6%",
              "display_range": null,
              "display_text": "28.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 28.6,
              "plain_english": "Sector explains about 28.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.17670841006519655,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.7%",
              "display_range": null,
              "display_text": "17.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 17.7,
              "plain_english": "Company-specific explains about 17.7% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4432399542133159,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.3%",
            "display_range": null,
            "display_text": "44.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 44.3,
            "plain_english": "Market explains about 44.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4432399542133159,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.3%",
              "display_range": null,
              "display_text": "44.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.3,
              "plain_english": "Market explains about 44.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11458313846465165,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.5%",
              "display_range": null,
              "display_text": "11.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 11.5,
              "plain_english": "Sector explains about 11.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44217690732203246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.2%",
              "display_range": null,
              "display_text": "44.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.2,
              "plain_english": "Company-specific explains about 44.2% of price moves in the current state."
            }
          },
          "summary": "Jan: More mixed, though market-driven still has the largest share."
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
            "median": 0.6795248656127432,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.0%",
            "display_range": null,
            "display_text": "68.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 68.0,
            "plain_english": "Company-specific explains about 68.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19679788630140443,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.7%",
              "display_range": null,
              "display_text": "19.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 19.7,
              "plain_english": "Market explains about 19.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12367724808585245,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.4%",
              "display_range": null,
              "display_text": "12.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 12.4,
              "plain_english": "Sector explains about 12.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6795248656127432,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.0%",
              "display_range": null,
              "display_text": "68.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 68.0,
              "plain_english": "Company-specific explains about 68.0% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4109568492362037,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.1%",
            "display_range": null,
            "display_text": "41.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 41.1,
            "plain_english": "Market explains about 41.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4109568492362037,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.1%",
              "display_range": null,
              "display_text": "41.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 41.1,
              "plain_english": "Market explains about 41.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2056301346461602,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.6%",
              "display_range": null,
              "display_text": "20.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.6,
              "plain_english": "Sector explains about 20.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3834130161176363,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.3%",
              "display_range": null,
              "display_text": "38.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.3,
              "plain_english": "Company-specific explains about 38.3% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though market-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 5,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.62542579253624,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.5%",
            "display_range": null,
            "display_text": "62.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 62.5,
            "plain_english": "Market explains about 62.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.62542579253624,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.5%",
              "display_range": null,
              "display_text": "62.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 62.5,
              "plain_english": "Market explains about 62.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3047125406547881,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.5%",
              "display_range": null,
              "display_text": "30.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 30.5,
              "plain_english": "Sector explains about 30.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.06986166680897188,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.0%",
              "display_range": null,
              "display_text": "7.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 7.0,
              "plain_english": "Company-specific explains about 7.0% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly market-driven, though based on only 5 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 15.625,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.007490662488869546,
            "low": 0.007490662488869546,
            "high": 0.007490662488869546
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 15.5,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.019038317620632662,
            "low": 0.019038317620632662,
            "high": 0.019038317620632662
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.936,
            0.064
          ],
          [
            0.056910569105691054,
            0.943089430894309
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            117.0,
            8.0
          ],
          [
            7.0,
            116.0
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
        "market_link_display": "1.17",
        "sector_link_display": "1.35",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.17% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.35% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.13",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 62.5,
        "driver_share_display": "62.5%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.943089430894309,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 15.5 days.",
        "expected_duration_days": 15.5
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
          "expected_duration_days": 15.625,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.007490662488869546,
            "low": 0.007490662488869546,
            "high": 0.007490662488869546
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 15.5,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.019038317620632662,
            "low": 0.019038317620632662,
            "high": 0.019038317620632662
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.936,
          0.064
        ],
        [
          0.056910569105691054,
          0.943089430894309
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.936,
            0.064
          ],
          [
            0.056910569105691054,
            0.943089430894309
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            117.0,
            8.0
          ],
          [
            7.0,
            116.0
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
        "text": "Liquidity score: 60.3 — Weak",
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
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Liquidity screens below peers for the stock’s size, and recent activity is running below the monthly average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is weak relative to peers and the market, with a 1M return of -9.4% compared with peers at -2.7% and the market at +0.6%.",
    "perf_insight": "The shares have underperformed over the past month, falling 9.4% while peers fell 2.7% and the market rose 0.6%. That matters because weaker price performance is arriving alongside a market-led tape, with market factors explaining 62.5% of trading.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Broader market moves are the main driver of trading, rather than company-specific factors.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 62.5% of price changes. Other influences are sector 30.5%, and company-specific 7.0%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 62.5%, sector 30.5%, and company-specific 7.0%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 62.5%, sector 30.5%, and company-specific 7.0%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "This matters because market factors account for 62.5% of trading, while the shares have fallen 9.4% over 1M compared with peers down 2.7% and the market up 0.6%.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, accounting for 62.5% of recent price moves.",
      "The pattern has shifted from clearly company-driven in February to more mixed in March and clearly market-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Market direction is the main influence on the tape at present.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 10, 2025 to Apr 10, 2026 (236 trading days • 10,877 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book is holding up better than the broader liquidity profile, with top-10 bid depth at 3.34x ask depth and a 6-tick spread. That matters because near-term execution conditions look more balanced than the stock’s weaker peer standing would suggest.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 36.9% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks more balanced than the broader liquidity ranking.",
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
    "intraday_insight": "Session split is open 1.2%, continuous 95.3%, and close 1.2%. Current trading concentration score is 0.363.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Broader market direction remains the clearest influence on current trading.",
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
    "exec_subtitle": "Trading access screens below peers for the stock’s size, while the tape is being led mainly by broader market moves.",
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
        "value": "60.3/100",
        "sub": "Peer median 77.0 (-16.8 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$705.8K",
        "sub": "Peer median HK$13.1M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.78%",
        "sub": "4.83 ticks; peers 0.49%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is weak for the stock’s size, with a 6M score of 60.3 compared with a peer median of 77.0. Recent activity is also lighter, with 1D average volume down 46.4% from the 1M average. That leaves access below peer standards even though the displayed book currently looks more balanced, with top-10 bid depth at 3.34x ask depth and a 6-tick spread.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "6.010",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.00%",
        "note": "6.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "3.34x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.50% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-1.47% with 61.9% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.47% with 24.8% fill.",
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
        "value": "60",
        "suffix": "/100",
        "bar_pct": 60,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 1024/2574",
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
        "value": "0.78",
        "suffix": "%",
        "bar_pct": 8,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.78% • 4.83 ticks vs peers 0.49%",
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
        "value": "705.8K",
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
        "value": "62.5",
        "suffix": "market",
        "bar_pct": 63,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 30.5% • Company 7.0%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the company’s size, with a 6M liquidity score of 60.3 compared with a peer median of 77.0. That means access already screens below peers before day-to-day conditions are considered.",
      "Recent activity is running below the monthly average, with 1D average volume down 46.4% from 1M. That matters because lower daily flow leaves trading conditions thinner on the day.",
      "The tape is being driven mainly by the market, with market factors accounting for 62.5% of trading, and the shares are down 9.4% over 1M compared with peers down 2.7% and the market up 0.6%. That leaves trading conditions exposed to broader moves while price performance remains weak."
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
      "overall": "6M liquidity is weak: score 60.3 vs peer median 77.0 (-16.8 pts). 1D average volume down -46.4% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 60.3 vs peer median 77.0 (-16.8 pts)."
      ],
      "concerns": [
        "1D average volume down -46.4% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -16.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 0.7%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: 0.7% vs market 11.3%.",
        "vs_sector": "Better than sector: 0.7% vs sector -0.5%.",
        "vs_peers": "Better than peers: 0.7% vs peers -16.2%."
      },
      "adv": {
        "insight": "ADV is HK$705.8K, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$705.8K vs market HK$221.2K.",
        "vs_sector": "Better than sector: HK$705.8K vs sector HK$33.5K.",
        "vs_peers": "Worse than peers: HK$705.8K vs peers HK$13.1M."
      },
      "spread": {
        "insight": "Spread is 0.78%, better than market and sector, but worse than peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.78% vs market 2.66%.",
        "vs_sector": "Better than sector: 0.78% vs sector 5.25%.",
        "vs_peers": "Worse than peers: 0.78% vs peers 0.49%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.03%, better than sector, but worse than market and peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Worse than market: 0.03% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.03% vs sector 0.02%.",
        "vs_peers": "Worse than peers: 0.03% vs peers 0.51%."
      },
      "volatility": {
        "insight": "Volatility is 26.50%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 26.50% vs market 59.82%.",
        "vs_sector": "Better than sector: 26.50% vs sector 57.61%.",
        "vs_peers": "Better than peers: 26.50% vs peers 34.17%."
      },
      "trades": {
        "insight": "Trades is 38, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 38 vs market 21.",
        "vs_sector": "Better than sector: 38 vs sector 5.",
        "vs_peers": "Worse than peers: 38 vs peers 690."
      },
      "amihud": {
        "insight": "Price impact is 9.67e-09, better than market and sector, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 9.67e-09 vs market 4.60e-08.",
        "vs_sector": "Better than sector: 9.67e-09 vs sector 1.00e-07.",
        "vs_peers": "Worse than peers: 9.67e-09 vs peers 1.08e-09."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to peers and the market, with the stock down 9.4% over one month compared with peers down 2.7% and the market up 0.6%. That move is broadly confirmed by liquidity conditions, because the 6M liquidity score is 60.3 against a peer median of 77.0, leaving the stock less well supported as price pressure builds.",
      "conclusion": "The move looks mainly broad-market rather than company-specific, and weak structural liquidity leaves it less cushioned than peers."
    },
    "drivers": {
      "overall": "Recent moves are mainly market-driven, with the market accounting for 62.5% of price action. That matters because the stock is currently moving more with broader conditions than on company-specific news.",
      "beta": "Based on the last 5 trading days, current mix is market 62.5%, sector 30.5%, and company-specific 7.0%.",
      "rolling_change": "Feb: Still clearly company-driven. | Mar: More mixed, though market-driven still has the largest share. | Apr: Still clearly market-driven, though based on only 5 trading days."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a high-volatility state, while recent average volume is 46.4% below the 1M average, so heavier price movement is not being matched by stronger flow.",
      "transitions": "The state looks relatively persistent, with a typical run length of about 15.5 days, although the picture is mixed rather than fully entrenched.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 15.5 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced in the book today because bid depth is 3.34x ask depth and the spread is 6",
      "concern": "The main watchpoint is that recent average volume is down 46.4% from the 1M average. That matters because a supportive book can still prove thinner if current trading activity stays below the recent average.",
      "peer_context": "The book is more supportive than the longer-term peer standing implies, even though the 6M liquidity score of 60.3 remains 16.8 points below the peer median of 77.0. That matters because the current screen reduces some near-term pressure without changing the weaker structural picture."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "The mix is not retail-heavy: institution-like trades account for 39.4% of trade count and 54.4% of trade value, while retail-like trades are just 1.0% of count and 0.2% of value. That leaves the observed flow anchored by larger participants rather than small-ticket activity.",
      "institutional_gap": "Institution-like activity leads on both measures, with a much larger share of trade value than trade count. That gap suggests the heavier part of the tape is coming from larger trades, which supports a steadier flow read.",
      "peer_comparison": "The trader mix looks more institution-oriented than retail-oriented, which is a constructive feature when set against the broader liquidity picture."
    },
    "price_moving": {
      "overall": "Price-moving activity is meaningful, with 36.9% of total trades moving price. That matters because a sizeable share of executions is still influencing the tape rather than being absorbed cleanly. By trade count and value, flow looks mainly institution-like. Positive and negative price-moving trade asymmetry is available in the report data.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not stand out as a separate driver of trading conditions. The clearer signals are weaker liquidity for size over six months and a 1M share price decline of 9.4%, which matters more for how the stock is trading now.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is changing the picture in the near term. Recent average volume is 46.4% below the 1M average, so the current setup still looks more like thinner flow than a short-driven shift.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity appears through the continuous session rather than only at the edges of the day. With 95.3% of trading in continuous hours and a concentration score of 0.363, access looks present across the session.",
      "hhi_interpretation": "Highly concentrated - liquidity only in auctions",
      "best_times": "The main trading window is the continuous session, while the open and close each contribute only 1.2% of activity. That means the best access is during the middle of the day rather than in auction periods.",
      "peer_ranking": "The intraday profile is supported by broad participation through continuous trading, which is a steadier pattern than one concentrated at the session edges."
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
        "45",
        "69",
        "1179",
        "62",
        "9658",
        "999",
        "308",
        "2255",
        "3918"
      ],
      "scores": [
        60.256410256410255,
        66.62781662781663,
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
        705827.5,
        2286580.0,
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
        "volatility": 0.2649797015817215,
        "adv": 705827.5,
        "spread_pct": 0.0077876151641418515,
        "turnover_ratio": 0.00030783235799513475,
        "amihud": 9.666038374172314e-09,
        "trades": 38.0
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
          "mean": 17100608.2825,
          "median": 13056326.23,
          "min": 1575695.9,
          "max": 62368636.0,
          "p5": 1824505.335,
          "p95": 48205165.66499998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 789.6875,
          "median": 690.5,
          "min": 105.0,
          "max": 2842.5,
          "p5": 109.2,
          "p95": 2135.674999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3763722246001576,
          "median": 0.3417353077700388,
          "min": 0.18335441930863802,
          "max": 0.7417524776411677,
          "p5": 0.20679166393520018,
          "p95": 0.6377787110969404,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.005894076703942167,
          "median": 0.0048712029323362965,
          "min": 0.0014596134652365453,
          "max": 0.014539786114052242,
          "p5": 0.002376583220848779,
          "p95": 0.012262171295099815,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.9973457533762058,
          "median": 1.847193693750632,
          "min": 1.0297494235971172,
          "max": 3.6336447562483354,
          "p5": 1.042753087245059,
          "p95": 3.3831904352882916,
          "count": 5
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.3348615440538922e-09,
          "median": 1.0770759581025399e-09,
          "min": 2.2025559767108112e-10,
          "max": 2.7124058325483433e-09,
          "p5": 3.618733841781631e-10,
          "p95": 2.6236117330711502e-09,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004920923391669058,
          "median": 0.005103956180177367,
          "min": 0.0003974663501152442,
          "max": 0.010444442987850064,
          "p5": 0.00045364933354451,
          "p95": 0.009543281949992918,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.09445277361319337,
        "market": 0.005817570896814672,
        "sector": 0.001295672454003638,
        "peers": -0.026884187027611306
      },
      {
        "horizon": "3M",
        "stock": 0.011725293132328174,
        "market": 0.07151156981189555,
        "sector": -0.00900552141919464,
        "peers": -0.10110784504489756
      },
      {
        "horizon": "6M",
        "stock": 0.0066666666666659324,
        "market": 0.11289080174108235,
        "sector": -0.0050667995683783,
        "peers": -0.16157966948213975
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
      "share_market": 0.62542579253624,
      "share_sector": 0.3047125406547881,
      "share_idio": 0.06986166680897188,
      "beta_market": 1.16745197631623,
      "beta_sector": 1.350953670587595,
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
            "median": 0.62542579253624,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.5%",
            "display_range": null,
            "display_text": "62.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 62.5,
            "plain_english": "Market explains about 62.5% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.3047125406547881,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "30.5%",
            "display_range": null,
            "display_text": "30.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 30.5,
            "plain_english": "Sector explains about 30.5% of price moves in the current state."
          },
          "company_share": {
            "median": 0.06986166680897188,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "7.0%",
            "display_range": null,
            "display_text": "7.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 7.0,
            "plain_english": "Company-specific explains about 7.0% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.16745197631623,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.17",
            "display_range": null,
            "display_text": "1.17",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.17% stock move in the same direction in this state.",
            "value_num": 1.17
          },
          "beta_stock_lag": {
            "median": -0.13194983582625913,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.13",
            "display_range": null,
            "display_text": "-0.13",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.13
          },
          "beta_sector": {
            "median": 1.350953670587595,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.35",
            "display_range": null,
            "display_text": "1.35",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.35% stock move in the same direction in this state.",
            "value_num": 1.35
          },
          "beta_market_lag": {
            "median": 0.80896967986735,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.81",
            "display_range": null,
            "display_text": "0.81",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.81
          },
          "beta_sector_lag": {
            "median": 0.13341039898040036,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.13",
            "display_range": null,
            "display_text": "0.13",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.13
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
              "median": 0.6621234926756436,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.2%",
              "display_range": null,
              "display_text": "66.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 66.2,
              "plain_english": "Market explains about 66.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.6621234926756436,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "66.2%",
                "display_range": null,
                "display_text": "66.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 66.2,
                "plain_english": "Market explains about 66.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19726205724337392,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.7%",
                "display_range": null,
                "display_text": "19.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 19.7,
                "plain_english": "Sector explains about 19.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.14061445008098247,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.1%",
                "display_range": null,
                "display_text": "14.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 14.1,
                "plain_english": "Company-specific explains about 14.1% of price moves in the current state."
              }
            },
            "summary": "Mar: Still clearly market-driven, though based on only 6 trading days."
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
              "median": 0.4191917471588106,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.9%",
              "display_range": null,
              "display_text": "41.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 41.9,
              "plain_english": "Market explains about 41.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4191917471588106,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.9%",
                "display_range": null,
                "display_text": "41.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 41.9,
                "plain_english": "Market explains about 41.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17644800464233806,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.6%",
                "display_range": null,
                "display_text": "17.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 17.6,
                "plain_english": "Sector explains about 17.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.40436024819885136,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.4%",
                "display_range": null,
                "display_text": "40.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 40.4,
                "plain_english": "Company-specific explains about 40.4% of price moves in the current state."
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
              "median": 0.4179716532404688,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.8%",
              "display_range": null,
              "display_text": "41.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.8,
              "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3404931540528902,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.0%",
                "display_range": null,
                "display_text": "34.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.0,
                "plain_english": "Market explains about 34.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.24153519270664106,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.2%",
                "display_range": null,
                "display_text": "24.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 24.2,
                "plain_english": "Sector explains about 24.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4179716532404688,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.8%",
                "display_range": null,
                "display_text": "41.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 41.8,
                "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4884338277895001,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.8%",
              "display_range": null,
              "display_text": "48.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.8,
              "plain_english": "Market explains about 48.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4884338277895001,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.8%",
                "display_range": null,
                "display_text": "48.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 48.8,
                "plain_english": "Market explains about 48.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1063356427439171,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.6%",
                "display_range": null,
                "display_text": "10.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 10.6,
                "plain_english": "Sector explains about 10.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4052305294665827,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.5%",
                "display_range": null,
                "display_text": "40.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 40.5,
                "plain_english": "Company-specific explains about 40.5% of price moves in the current state."
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
              "median": 0.6899249543091515,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "69.0%",
              "display_range": null,
              "display_text": "69.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 69.0,
              "plain_english": "Company-specific explains about 69.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12433677414092331,
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
                "median": 0.18573827154992517,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.6%",
                "display_range": null,
                "display_text": "18.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 18.6,
                "plain_english": "Sector explains about 18.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6899249543091515,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "69.0%",
                "display_range": null,
                "display_text": "69.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 69.0,
                "plain_english": "Company-specific explains about 69.0% of price moves in the current state."
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
              "median": 0.5324387274148619,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.2%",
              "display_range": null,
              "display_text": "53.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.2,
              "plain_english": "Company-specific explains about 53.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23405496382753227,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.4%",
                "display_range": null,
                "display_text": "23.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 23.4,
                "plain_english": "Market explains about 23.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2335063087576059,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.4%",
                "display_range": null,
                "display_text": "23.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 23.4,
                "plain_english": "Sector explains about 23.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5324387274148619,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.2%",
                "display_range": null,
                "display_text": "53.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 53.2,
                "plain_english": "Company-specific explains about 53.2% of price moves in the current state."
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
              "median": 0.4834203626209099,
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
                "median": 0.24511810770996093,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.5%",
                "display_range": null,
                "display_text": "24.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.5,
                "plain_english": "Market explains about 24.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2714615296691292,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.1%",
                "display_range": null,
                "display_text": "27.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 27.1,
                "plain_english": "Sector explains about 27.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4834203626209099,
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
              "median": 0.4128044614975215,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.3%",
              "display_range": null,
              "display_text": "41.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.3,
              "plain_english": "Market explains about 41.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4128044614975215,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.3%",
                "display_range": null,
                "display_text": "41.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 41.3,
                "plain_english": "Market explains about 41.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.33549255519693777,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.5%",
                "display_range": null,
                "display_text": "33.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 33.5,
                "plain_english": "Sector explains about 33.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2517029833055408,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.2%",
                "display_range": null,
                "display_text": "25.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 25.2,
                "plain_english": "Company-specific explains about 25.2% of price moves in the current state."
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
              "median": 0.3956642510849709,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.6%",
              "display_range": null,
              "display_text": "39.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 39.6,
              "plain_english": "Company-specific explains about 39.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2754057466520017,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.5%",
                "display_range": null,
                "display_text": "27.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.5,
                "plain_english": "Market explains about 27.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3289300022630274,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.9%",
                "display_range": null,
                "display_text": "32.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 32.9,
                "plain_english": "Sector explains about 32.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3956642510849709,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.6%",
                "display_range": null,
                "display_text": "39.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 39.6,
                "plain_english": "Company-specific explains about 39.6% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5372231723867451,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.7%",
              "display_range": null,
              "display_text": "53.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 53.7,
              "plain_english": "Market explains about 53.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5372231723867451,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.7%",
                "display_range": null,
                "display_text": "53.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 53.7,
                "plain_english": "Market explains about 53.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28606841754805845,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.6%",
                "display_range": null,
                "display_text": "28.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 28.6,
                "plain_english": "Sector explains about 28.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.17670841006519655,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.7%",
                "display_range": null,
                "display_text": "17.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 17.7,
                "plain_english": "Company-specific explains about 17.7% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4432399542133159,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.3%",
              "display_range": null,
              "display_text": "44.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.3,
              "plain_english": "Market explains about 44.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4432399542133159,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.3%",
                "display_range": null,
                "display_text": "44.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 44.3,
                "plain_english": "Market explains about 44.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11458313846465165,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.5%",
                "display_range": null,
                "display_text": "11.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 11.5,
                "plain_english": "Sector explains about 11.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44217690732203246,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.2%",
                "display_range": null,
                "display_text": "44.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 44.2,
                "plain_english": "Company-specific explains about 44.2% of price moves in the current state."
              }
            },
            "summary": "Jan: More mixed, though market-driven still has the largest share."
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
              "median": 0.6795248656127432,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.0%",
              "display_range": null,
              "display_text": "68.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 68.0,
              "plain_english": "Company-specific explains about 68.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19679788630140443,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.7%",
                "display_range": null,
                "display_text": "19.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 19.7,
                "plain_english": "Market explains about 19.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12367724808585245,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.4%",
                "display_range": null,
                "display_text": "12.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 12.4,
                "plain_english": "Sector explains about 12.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6795248656127432,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "68.0%",
                "display_range": null,
                "display_text": "68.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 68.0,
                "plain_english": "Company-specific explains about 68.0% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4109568492362037,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.1%",
              "display_range": null,
              "display_text": "41.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 41.1,
              "plain_english": "Market explains about 41.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4109568492362037,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.1%",
                "display_range": null,
                "display_text": "41.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 41.1,
                "plain_english": "Market explains about 41.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2056301346461602,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.6%",
                "display_range": null,
                "display_text": "20.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.6,
                "plain_english": "Sector explains about 20.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3834130161176363,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.3%",
                "display_range": null,
                "display_text": "38.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.3,
                "plain_english": "Company-specific explains about 38.3% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though market-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-10",
            "n_obs": 5,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.62542579253624,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.5%",
              "display_range": null,
              "display_text": "62.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 62.5,
              "plain_english": "Market explains about 62.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.62542579253624,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.5%",
                "display_range": null,
                "display_text": "62.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 62.5,
                "plain_english": "Market explains about 62.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3047125406547881,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.5%",
                "display_range": null,
                "display_text": "30.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 30.5,
                "plain_english": "Sector explains about 30.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.06986166680897188,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.0%",
                "display_range": null,
                "display_text": "7.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 7.0,
                "plain_english": "Company-specific explains about 7.0% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly market-driven, though based on only 5 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 15.625,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.007490662488869546,
              "low": 0.007490662488869546,
              "high": 0.007490662488869546
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 15.5,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.019038317620632662,
              "low": 0.019038317620632662,
              "high": 0.019038317620632662
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.936,
              0.064
            ],
            [
              0.056910569105691054,
              0.943089430894309
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              117.0,
              8.0
            ],
            [
              7.0,
              116.0
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
          "market_link_display": "1.17",
          "sector_link_display": "1.35",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.17% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.35% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.13",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 62.5,
          "driver_share_display": "62.5%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.943089430894309,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 15.5 days.",
          "expected_duration_days": 15.5
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
          "summary": "Mar: Still clearly market-driven, though based on only 6 trading days.",
          "share_market": 0.6621234926756436,
          "share_sector": 0.19726205724337392,
          "share_company": 0.14061445008098247,
          "share_market_display": "66.2%",
          "share_sector_display": "19.7%",
          "share_company_display": "14.1%",
          "dominant_share_display": "66.2%"
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
          "share_market": 0.4191917471588106,
          "share_sector": 0.17644800464233806,
          "share_company": 0.40436024819885136,
          "share_market_display": "41.9%",
          "share_sector_display": "17.6%",
          "share_company_display": "40.4%",
          "dominant_share_display": "41.9%"
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
          "share_market": 0.3404931540528902,
          "share_sector": 0.24153519270664106,
          "share_company": 0.4179716532404688,
          "share_market_display": "34.0%",
          "share_sector_display": "24.2%",
          "share_company_display": "41.8%",
          "dominant_share_display": "41.8%"
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
          "share_market": 0.4884338277895001,
          "share_sector": 0.1063356427439171,
          "share_company": 0.4052305294665827,
          "share_market_display": "48.8%",
          "share_sector_display": "10.6%",
          "share_company_display": "40.5%",
          "dominant_share_display": "48.8%"
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
          "summary": "Jul: Still clearly company-driven.",
          "share_market": 0.12433677414092331,
          "share_sector": 0.18573827154992517,
          "share_company": 0.6899249543091515,
          "share_market_display": "12.4%",
          "share_sector_display": "18.6%",
          "share_company_display": "69.0%",
          "dominant_share_display": "69.0%"
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
          "share_market": 0.23405496382753227,
          "share_sector": 0.2335063087576059,
          "share_company": 0.5324387274148619,
          "share_market_display": "23.4%",
          "share_sector_display": "23.4%",
          "share_company_display": "53.2%",
          "dominant_share_display": "53.2%"
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
          "share_market": 0.24511810770996093,
          "share_sector": 0.2714615296691292,
          "share_company": 0.4834203626209099,
          "share_market_display": "24.5%",
          "share_sector_display": "27.1%",
          "share_company_display": "48.3%",
          "dominant_share_display": "48.3%"
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
          "share_market": 0.4128044614975215,
          "share_sector": 0.33549255519693777,
          "share_company": 0.2517029833055408,
          "share_market_display": "41.3%",
          "share_sector_display": "33.5%",
          "share_company_display": "25.2%",
          "dominant_share_display": "41.3%"
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
          "share_market": 0.2754057466520017,
          "share_sector": 0.3289300022630274,
          "share_company": 0.3956642510849709,
          "share_market_display": "27.5%",
          "share_sector_display": "32.9%",
          "share_company_display": "39.6%",
          "dominant_share_display": "39.6%"
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
          "share_market": 0.5372231723867451,
          "share_sector": 0.28606841754805845,
          "share_company": 0.17670841006519655,
          "share_market_display": "53.7%",
          "share_sector_display": "28.6%",
          "share_company_display": "17.7%",
          "dominant_share_display": "53.7%"
        },
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-02 to 2026-01-30",
          "n_obs": 21,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jan: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4432399542133159,
          "share_sector": 0.11458313846465165,
          "share_company": 0.44217690732203246,
          "share_market_display": "44.3%",
          "share_sector_display": "11.5%",
          "share_company_display": "44.2%",
          "dominant_share_display": "44.3%"
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
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.19679788630140443,
          "share_sector": 0.12367724808585245,
          "share_company": 0.6795248656127432,
          "share_market_display": "19.7%",
          "share_sector_display": "12.4%",
          "share_company_display": "68.0%",
          "dominant_share_display": "68.0%"
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
          "summary": "Mar: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4109568492362037,
          "share_sector": 0.2056301346461602,
          "share_company": 0.3834130161176363,
          "share_market_display": "41.1%",
          "share_sector_display": "20.6%",
          "share_company_display": "38.3%",
          "dominant_share_display": "41.1%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 5,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Still clearly market-driven, though based on only 5 trading days.",
          "share_market": 0.62542579253624,
          "share_sector": 0.3047125406547881,
          "share_company": 0.06986166680897188,
          "share_market_display": "62.5%",
          "share_sector_display": "30.5%",
          "share_company_display": "7.0%",
          "dominant_share_display": "62.5%"
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
            "expected_duration_days": 15.625,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.007490662488869546,
              "low": 0.007490662488869546,
              "high": 0.007490662488869546
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 15.5,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.019038317620632662,
              "low": 0.019038317620632662,
              "high": 0.019038317620632662
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.936,
            0.064
          ],
          [
            0.056910569105691054,
            0.943089430894309
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 5.98,
          "quantity": 47000.0,
          "value": 281060.0
        },
        {
          "level": 2,
          "price": 5.96,
          "quantity": 1000.0,
          "value": 5960.0
        },
        {
          "level": 3,
          "price": 5.95,
          "quantity": 1500.0,
          "value": 8925.0
        },
        {
          "level": 4,
          "price": 5.94,
          "quantity": 5000.0,
          "value": 29700.000000000004
        },
        {
          "level": 5,
          "price": 5.93,
          "quantity": 500.0,
          "value": 2965.0
        },
        {
          "level": 6,
          "price": 5.92,
          "quantity": 4500.0,
          "value": 26640.0
        },
        {
          "level": 7,
          "price": 5.9,
          "quantity": 21000.0,
          "value": 123900.00000000001
        },
        {
          "level": 8,
          "price": 5.83,
          "quantity": 2000.0,
          "value": 11660.0
        },
        {
          "level": 9,
          "price": 5.82,
          "quantity": 20000.0,
          "value": 116400.0
        },
        {
          "level": 10,
          "price": 5.81,
          "quantity": 2000.0,
          "value": 11620.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 6.04,
          "quantity": 2500.0,
          "value": 15100.0
        },
        {
          "level": 2,
          "price": 6.08,
          "quantity": 2000.0,
          "value": 12160.0
        },
        {
          "level": 3,
          "price": 6.1,
          "quantity": 4500.0,
          "value": 27450.0
        },
        {
          "level": 4,
          "price": 6.14,
          "quantity": 6000.0,
          "value": 36840.0
        },
        {
          "level": 5,
          "price": 6.18,
          "quantity": 3000.0,
          "value": 18540.0
        },
        {
          "level": 6,
          "price": 6.2,
          "quantity": 7000.0,
          "value": 43400.0
        },
        {
          "level": 7,
          "price": 6.34,
          "quantity": 2000.0,
          "value": 12680.0
        },
        {
          "level": 8,
          "price": 6.39,
          "quantity": 500.0,
          "value": 3195.0
        },
        {
          "level": 9,
          "price": 6.4,
          "quantity": 2000.0,
          "value": 12800.0
        },
        {
          "level": 10,
          "price": 6.43,
          "quantity": 500.0,
          "value": 3215.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-10 07:59:48.696000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 6.01,
        "spread_pct": 0.009983361064891783,
        "spread_ticks": 6.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 618830.0,
        "ask_depth_notional_top10": 185380.0,
        "bid_ask_depth_ratio": 3.3382
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 236,
        "n_trades_used": 10877,
        "first_trade_date": "2025-04-10",
        "last_trade_date": "2026-04-10",
        "window_label": "Apr 10, 2025 to Apr 10, 2026",
        "window_short_label": "Apr 10, 2025 to Apr 10, 2026",
        "trade_days_label": "236 trading days",
        "trade_count_label": "10,877 trades",
        "window_detail_label": "236 trading days • 10,877 trades",
        "history_note": "Trade-size percentiles use Apr 10, 2025 to Apr 10, 2026 history (236 trading days • 10,877 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 37294.0,
            "impact_pct": -0.004992,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 6.03,
            "pct_of_adv": 4.46
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 62140.0,
            "impact_pct": -0.004992,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 10.04,
            "pct_of_adv": 7.43
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 1961232.73,
            "impact_pct": -0.014673,
            "filled_pct": 31.6,
            "levels_consumed": 10,
            "pct_of_bid_depth": 316.93,
            "pct_of_adv": 234.58
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
            "order_id": "9838337.0",
            "timestamp": "2026-04-10 01:20:28.650000000",
            "local_timestamp": "2026-04-10 09:20:28",
            "posted_price": 6.64,
            "size_shares": 24500.0,
            "notional": 162680.0,
            "impact_pct": -0.004992,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 26.29,
            "price_vs_mid_pct": 10.483,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "1349468417.0",
            "timestamp": "2026-04-10 02:11:05.331000000",
            "local_timestamp": "2026-04-10 10:11:05",
            "posted_price": 6.18,
            "size_shares": 15500.0,
            "notional": 95790.0,
            "impact_pct": -0.004992,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 15.48,
            "price_vs_mid_pct": 2.829,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "64255489.0",
            "timestamp": "2026-04-10 01:30:56.841000000",
            "local_timestamp": "2026-04-10 09:30:56",
            "posted_price": 6.2,
            "size_shares": 7000.0,
            "notional": 43400.0,
            "impact_pct": -0.004992,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 7.01,
            "price_vs_mid_pct": 3.161,
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
            "spread_pct": 0.024489795918367405,
            "spread_ticks": 15.000000000000036,
            "bid_depth_notional": 246040.0,
            "ask_depth_notional": 244345.0,
            "mid_price": 6.125
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.004987531172069866,
            "spread_ticks": 3.000000000000025,
            "bid_depth_notional": 248870.0,
            "ask_depth_notional": 241900.0,
            "mid_price": 6.015000000000001
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.010000000000000083,
            "spread_ticks": 6.00000000000005,
            "bid_depth_notional": 358125.0,
            "ask_depth_notional": 173350.0,
            "mid_price": 6.0
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.01655629139072842,
            "spread_ticks": 9.999999999999964,
            "bid_depth_notional": 526390.0,
            "ask_depth_notional": 188795.0,
            "mid_price": 6.04
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.008312551953449678,
            "spread_ticks": 4.999999999999982,
            "bid_depth_notional": 520400.0,
            "ask_depth_notional": 176290.0,
            "mid_price": 6.015000000000001
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.00832639467110738,
            "spread_ticks": 4.999999999999982,
            "bid_depth_notional": 833405.0,
            "ask_depth_notional": 225645.0,
            "mid_price": 6.005000000000001
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.00832639467110738,
            "spread_ticks": 4.999999999999982,
            "bid_depth_notional": 988915.0,
            "ask_depth_notional": 210550.0,
            "mid_price": 6.005000000000001
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.00832639467110738,
            "spread_ticks": 4.999999999999982,
            "bid_depth_notional": 979945.0,
            "ask_depth_notional": 261810.0,
            "mid_price": 6.005000000000001
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.00832639467110738,
            "spread_ticks": 4.999999999999982,
            "bid_depth_notional": 938065.0,
            "ask_depth_notional": 186440.0,
            "mid_price": 6.005000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.00832639467110738,
            "spread_ticks": 4.999999999999982,
            "bid_depth_notional": 914165.0,
            "ask_depth_notional": 183425.0,
            "mid_price": 6.005000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.009983361064891783,
            "spread_ticks": 5.999999999999961,
            "bid_depth_notional": 618830.0,
            "ask_depth_notional": 185380.0,
            "mid_price": 6.01
          }
        ],
        "summary": {
          "median_spread_pct": 0.00832639467110738,
          "median_spread_ticks": 4.999999999999982,
          "median_bid_depth_notional": 618830.0,
          "median_ask_depth_notional": 188795.0,
          "tightest_bucket": "10:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "13:30",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 6.0,
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
          "ticker": "69",
          "pct": 54.8
        },
        {
          "ticker": "62",
          "pct": 60.0
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 71,
          "n_runs": 50,
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
            "retail_pct": 0.323943661971831,
            "mixed_pct": 0.0,
            "instit_pct": 0.29577464788732394,
            "ambiguous_pct": 0.16901408450704225,
            "unobservable_pct": 0.2112676056338028,
            "unclear_pct": 0.38028169014084506,
            "retail_qty_pct": 0.18837018837018837,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4995904995904996,
            "ambiguous_qty_pct": 0.15561015561015562,
            "unobservable_qty_pct": 0.15642915642915642,
            "unclear_qty_pct": 0.312039312039312,
            "retail_notional_pct": 0.18748772182568266,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5002128216881672,
            "ambiguous_notional_pct": 0.15526433545063628,
            "unobservable_notional_pct": 0.15703512103551392,
            "unclear_notional_pct": 0.3122994564861502
          },
          "run_composition": {
            "retail_pct": 0.46,
            "mixed_pct": 0.0,
            "instit_pct": 0.12,
            "ambiguous_pct": 0.24,
            "unobservable_pct": 0.18,
            "unclear_pct": 0.42,
            "retail_notional_pct": 0.18748772182568266,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5002128216881672,
            "unclear_notional_pct": 0.3122994564861502
          },
          "counts": {
            "trades": {
              "retail": 23,
              "mixed": 0,
              "institutional": 21,
              "ambiguous": 12,
              "unobservable": 15,
              "unclear": 27
            },
            "runs": {
              "retail": 23,
              "mixed": 0,
              "institutional": 6,
              "ambiguous": 12,
              "unobservable": 9,
              "unclear": 21
            }
          },
          "confidence": {
            "high": 0.58,
            "medium": 0.0,
            "low": 0.0,
            "na": 0.42
          },
          "confidence_counts": {
            "high": 29,
            "medium": 0,
            "low": 0,
            "na": 21
          },
          "trade_confidence": {
            "high": 0.6197183098591549,
            "medium": 0.0,
            "low": 0.0,
            "na": 0.38028169014084506
          },
          "trade_confidence_counts": {
            "high": 44,
            "medium": 0,
            "low": 0,
            "na": 27
          },
          "observability": {
            "avg_feature_coverage": 0.6850000000000002,
            "observable_run_pct": 0.8200000000000001,
            "ambiguous_run_pct": 0.24,
            "unobservable_run_pct": 0.18
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.46,
          "dominance_gap": 0.22000000000000003,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 71
            },
            "d2_information": {
              "UNOBSERVABLE": 71
            },
            "d3_urgency": {
              "IMMEDIATE": 50
            },
            "participant_confidence": {
              "HIGH": 29,
              "NA": 21
            }
          },
          "trade_size": {
            "avg": 5162.028169014085,
            "median": 3000.0
          },
          "run_size": {
            "avg": 7330.08,
            "median": 2995.0,
            "avg_length": 1.42
          },
          "recent_trades": [
            {
              "trade_id": "76",
              "timestamp": "2026-04-10T07:59:29.022884",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4254,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-10T07:59:29.022564",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4254,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-10T07:59:00.249630",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4253,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "73",
              "timestamp": "2026-04-10T07:55:15.190201",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4252,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "72",
              "timestamp": "2026-04-10T07:47:23.720748",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4251,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "71",
              "timestamp": "2026-04-10T07:08:43.506197",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4250,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-10T07:00:57.705757",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4249,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-10T07:00:00.494226",
              "price": 5.98,
              "size": 4000.0,
              "notional": 23920.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4248,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 1500.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 3500.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-10T06:58:35.827125",
              "price": 6.0,
              "size": 3000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-10T06:58:04.535393",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4246,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-10T06:57:52.662181",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4245,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-10T06:54:46.415033",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4244,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-10T06:51:01.682983",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4243,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-10T06:47:35.442243",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "59",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 1500.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "58",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "57",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "56",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "55",
              "timestamp": "2026-04-10T06:47:35.441564",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "53",
              "timestamp": "2026-04-10T06:39:29.077850",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4241,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "52",
              "timestamp": "2026-04-10T06:39:28.865919",
              "price": 6.0,
              "size": 6500.0,
              "notional": 39000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4241,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "51",
              "timestamp": "2026-04-10T06:36:59.422485",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4240,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "50",
              "timestamp": "2026-04-10T06:33:41.373166",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4239,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "49",
              "timestamp": "2026-04-10T06:28:03.432769",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4238,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "48",
              "timestamp": "2026-04-10T06:21:40.281979",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4237,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "47",
              "timestamp": "2026-04-10T06:16:13.693295",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4236,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "46",
              "timestamp": "2026-04-10T05:58:00.317950",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4235,
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
          "n_trades": 1153,
          "n_runs": 482,
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
            "retail_pct": 0.06157849089332177,
            "mixed_pct": 0.0,
            "instit_pct": 0.41543798785776237,
            "ambiguous_pct": 0.16305290546400694,
            "unobservable_pct": 0.3599306157849089,
            "unclear_pct": 0.5229835212489159,
            "retail_qty_pct": 0.01780177149829119,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5477202407835577,
            "ambiguous_qty_pct": 0.08763119400872267,
            "unobservable_qty_pct": 0.34684679370942845,
            "unclear_qty_pct": 0.4344779877181511,
            "retail_notional_pct": 0.01697103365177516,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5430647599912568,
            "ambiguous_notional_pct": 0.08517442858153625,
            "unobservable_notional_pct": 0.35478977777543175,
            "unclear_notional_pct": 0.439964206356968
          },
          "run_composition": {
            "retail_pct": 0.14730290456431536,
            "mixed_pct": 0.0,
            "instit_pct": 0.17219917012448133,
            "ambiguous_pct": 0.16390041493775934,
            "unobservable_pct": 0.516597510373444,
            "unclear_pct": 0.6804979253112033,
            "retail_notional_pct": 0.01697103365177516,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5430647599912568,
            "unclear_notional_pct": 0.439964206356968
          },
          "counts": {
            "trades": {
              "retail": 71,
              "mixed": 0,
              "institutional": 479,
              "ambiguous": 188,
              "unobservable": 415,
              "unclear": 603
            },
            "runs": {
              "retail": 71,
              "mixed": 0,
              "institutional": 83,
              "ambiguous": 79,
              "unobservable": 249,
              "unclear": 328
            }
          },
          "confidence": {
            "high": 0.06016597510373444,
            "medium": 0.024896265560165973,
            "low": 0.23443983402489627,
            "na": 0.6804979253112033
          },
          "confidence_counts": {
            "high": 29,
            "medium": 12,
            "low": 113,
            "na": 328
          },
          "trade_confidence": {
            "high": 0.03816131830008673,
            "medium": 0.010407632263660017,
            "low": 0.4284475281873374,
            "na": 0.5229835212489159
          },
          "trade_confidence_counts": {
            "high": 44,
            "medium": 12,
            "low": 494,
            "na": 603
          },
          "observability": {
            "avg_feature_coverage": 0.6424273858921161,
            "observable_run_pct": 0.48340248962655596,
            "ambiguous_run_pct": 0.16390041493775934,
            "unobservable_run_pct": 0.516597510373444
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.516597510373444,
          "dominance_gap": 0.3443983402489627,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 1153
            },
            "d2_information": {
              "UNOBSERVABLE": 1153
            },
            "d3_urgency": {
              "IMMEDIATE": 475,
              "ADAPTIVE": 7
            },
            "participant_confidence": {
              "NA": 328,
              "LOW": 113,
              "HIGH": 29,
              "MEDIUM": 12
            }
          },
          "trade_size": {
            "avg": 12931.017432784041,
            "median": 5920.0
          },
          "run_size": {
            "avg": 30932.496058091285,
            "median": 9832.5,
            "avg_length": 2.392116182572614
          },
          "recent_trades": [
            {
              "trade_id": "76",
              "timestamp": "2026-04-10T07:59:29.022884",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4254,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-10T07:59:29.022564",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4254,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-10T07:59:00.249630",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4253,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "73",
              "timestamp": "2026-04-10T07:55:15.190201",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4252,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "72",
              "timestamp": "2026-04-10T07:47:23.720748",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4251,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "71",
              "timestamp": "2026-04-10T07:08:43.506197",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4250,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-10T07:00:57.705757",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4249,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-10T07:00:00.494226",
              "price": 5.98,
              "size": 4000.0,
              "notional": 23920.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4248,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 1500.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 3500.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-10T06:58:35.827125",
              "price": 6.0,
              "size": 3000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-10T06:58:04.535393",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4246,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-10T06:57:52.662181",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4245,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-10T06:54:46.415033",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4244,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-10T06:51:01.682983",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4243,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-10T06:47:35.442243",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "59",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 1500.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "58",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "57",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "56",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "55",
              "timestamp": "2026-04-10T06:47:35.441564",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "53",
              "timestamp": "2026-04-10T06:39:29.077850",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4241,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "52",
              "timestamp": "2026-04-10T06:39:28.865919",
              "price": 6.0,
              "size": 6500.0,
              "notional": 39000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4241,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "51",
              "timestamp": "2026-04-10T06:36:59.422485",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4240,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "50",
              "timestamp": "2026-04-10T06:33:41.373166",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4239,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "49",
              "timestamp": "2026-04-10T06:28:03.432769",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4238,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "48",
              "timestamp": "2026-04-10T06:21:40.281979",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4237,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "47",
              "timestamp": "2026-04-10T06:16:13.693295",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4236,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "46",
              "timestamp": "2026-04-10T05:58:00.317950",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4235,
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
          "n_trades": 5530,
          "n_runs": 2094,
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
            "retail_pct": 0.013562386980108499,
            "mixed_pct": 0.0,
            "instit_pct": 0.4332730560578662,
            "ambiguous_pct": 0.17233273056057866,
            "unobservable_pct": 0.38083182640144664,
            "unclear_pct": 0.5531645569620253,
            "retail_qty_pct": 0.0024476819870754255,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.587126901323424,
            "ambiguous_qty_pct": 0.0687203918478856,
            "unobservable_qty_pct": 0.34170502484161497,
            "unclear_qty_pct": 0.41042541668950056,
            "retail_notional_pct": 0.0022686681310351464,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5886647796758222,
            "ambiguous_notional_pct": 0.06891402221223289,
            "unobservable_notional_pct": 0.3401525299809097,
            "unclear_notional_pct": 0.4090665521931426
          },
          "run_composition": {
            "retail_pct": 0.034861509073543455,
            "mixed_pct": 0.0,
            "instit_pct": 0.17478510028653296,
            "ambiguous_pct": 0.1571155682903534,
            "unobservable_pct": 0.6332378223495702,
            "unclear_pct": 0.7903533906399236,
            "retail_notional_pct": 0.0022686681310351464,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5886647796758222,
            "unclear_notional_pct": 0.4090665521931426
          },
          "counts": {
            "trades": {
              "retail": 75,
              "mixed": 0,
              "institutional": 2396,
              "ambiguous": 953,
              "unobservable": 2106,
              "unclear": 3059
            },
            "runs": {
              "retail": 73,
              "mixed": 0,
              "institutional": 366,
              "ambiguous": 329,
              "unobservable": 1326,
              "unclear": 1655
            }
          },
          "confidence": {
            "high": 0.033428844317096466,
            "medium": 0.011461318051575931,
            "low": 0.16475644699140402,
            "na": 0.7903533906399236
          },
          "confidence_counts": {
            "high": 70,
            "medium": 24,
            "low": 345,
            "na": 1655
          },
          "trade_confidence": {
            "high": 0.0674502712477396,
            "medium": 0.02007233273056058,
            "low": 0.3593128390596745,
            "na": 0.5531645569620253
          },
          "trade_confidence_counts": {
            "high": 373,
            "medium": 111,
            "low": 1987,
            "na": 3059
          },
          "observability": {
            "avg_feature_coverage": 0.6095988538681948,
            "observable_run_pct": 0.36676217765042984,
            "ambiguous_run_pct": 0.1571155682903534,
            "unobservable_run_pct": 0.6332378223495702
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.6332378223495702,
          "dominance_gap": 0.4584527220630372,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 5530
            },
            "d2_information": {
              "UNOBSERVABLE": 5530
            },
            "d3_urgency": {
              "IMMEDIATE": 2050,
              "ADAPTIVE": 44
            },
            "participant_confidence": {
              "NA": 1655,
              "LOW": 345,
              "HIGH": 70,
              "MEDIUM": 24
            }
          },
          "trade_size": {
            "avg": 21520.38163291139,
            "median": 6460.0
          },
          "run_size": {
            "avg": 56832.71749283668,
            "median": 13685.0,
            "avg_length": 2.640878701050621
          },
          "recent_trades": [
            {
              "trade_id": "76",
              "timestamp": "2026-04-10T07:59:29.022884",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4254,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-10T07:59:29.022564",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4254,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-10T07:59:00.249630",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4253,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "73",
              "timestamp": "2026-04-10T07:55:15.190201",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4252,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "72",
              "timestamp": "2026-04-10T07:47:23.720748",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4251,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "71",
              "timestamp": "2026-04-10T07:08:43.506197",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4250,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-10T07:00:57.705757",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4249,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-10T07:00:00.494226",
              "price": 5.98,
              "size": 4000.0,
              "notional": 23920.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4248,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 1500.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 3500.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-10T06:58:35.827125",
              "price": 6.0,
              "size": 3000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-10T06:58:04.535393",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4246,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-10T06:57:52.662181",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4245,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-10T06:54:46.415033",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4244,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-10T06:51:01.682983",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4243,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-10T06:47:35.442243",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "59",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 1500.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "58",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "57",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "56",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "55",
              "timestamp": "2026-04-10T06:47:35.441564",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "53",
              "timestamp": "2026-04-10T06:39:29.077850",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4241,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "52",
              "timestamp": "2026-04-10T06:39:28.865919",
              "price": 6.0,
              "size": 6500.0,
              "notional": 39000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4241,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "51",
              "timestamp": "2026-04-10T06:36:59.422485",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4240,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "50",
              "timestamp": "2026-04-10T06:33:41.373166",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4239,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "49",
              "timestamp": "2026-04-10T06:28:03.432769",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4238,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "48",
              "timestamp": "2026-04-10T06:21:40.281979",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4237,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "47",
              "timestamp": "2026-04-10T06:16:13.693295",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4236,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "46",
              "timestamp": "2026-04-10T05:58:00.317950",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4235,
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
          "n_trades": 7532,
          "n_runs": 3056,
          "n_trade_days": 125,
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
            "retail_pct": 0.009957514604354753,
            "mixed_pct": 0.0,
            "instit_pct": 0.39431757833244824,
            "ambiguous_pct": 0.14843335103558153,
            "unobservable_pct": 0.4472915560276155,
            "unclear_pct": 0.595724907063197,
            "retail_qty_pct": 0.001904262170530392,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5393405825270479,
            "ambiguous_qty_pct": 0.06274576615044429,
            "unobservable_qty_pct": 0.3960093891519774,
            "unclear_qty_pct": 0.4587551553024217,
            "retail_notional_pct": 0.0017953128593550284,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5437601098277357,
            "ambiguous_notional_pct": 0.06326091342302814,
            "unobservable_notional_pct": 0.39118366388988113,
            "unclear_notional_pct": 0.45444457731290927
          },
          "run_composition": {
            "retail_pct": 0.023887434554973823,
            "mixed_pct": 0.0,
            "instit_pct": 0.1587041884816754,
            "ambiguous_pct": 0.12467277486910995,
            "unobservable_pct": 0.6927356020942408,
            "unclear_pct": 0.8174083769633508,
            "retail_notional_pct": 0.0017953128593550284,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5437601098277357,
            "unclear_notional_pct": 0.45444457731290927
          },
          "counts": {
            "trades": {
              "retail": 75,
              "mixed": 0,
              "institutional": 2970,
              "ambiguous": 1118,
              "unobservable": 3369,
              "unclear": 4487
            },
            "runs": {
              "retail": 73,
              "mixed": 0,
              "institutional": 485,
              "ambiguous": 381,
              "unobservable": 2117,
              "unclear": 2498
            }
          },
          "confidence": {
            "high": 0.022905759162303665,
            "medium": 0.007853403141361256,
            "low": 0.1518324607329843,
            "na": 0.8174083769633508
          },
          "confidence_counts": {
            "high": 70,
            "medium": 24,
            "low": 464,
            "na": 2498
          },
          "trade_confidence": {
            "high": 0.049522039298990975,
            "medium": 0.014737121614445035,
            "low": 0.34001593202336694,
            "na": 0.595724907063197
          },
          "trade_confidence_counts": {
            "high": 373,
            "medium": 111,
            "low": 2561,
            "na": 4487
          },
          "observability": {
            "avg_feature_coverage": 0.5992310209424083,
            "observable_run_pct": 0.3072643979057592,
            "ambiguous_run_pct": 0.12467277486910995,
            "unobservable_run_pct": 0.6927356020942408
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.6927356020942408,
          "dominance_gap": 0.5340314136125655,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7532
            },
            "d2_information": {
              "UNOBSERVABLE": 7532
            },
            "d3_urgency": {
              "IMMEDIATE": 3008,
              "ADAPTIVE": 48
            },
            "participant_confidence": {
              "NA": 2498,
              "LOW": 464,
              "HIGH": 70,
              "MEDIUM": 24
            }
          },
          "trade_size": {
            "avg": 19966.20920605417,
            "median": 6110.0
          },
          "run_size": {
            "avg": 49209.91090968587,
            "median": 12960.0,
            "avg_length": 2.4646596858638743
          },
          "recent_trades": [
            {
              "trade_id": "76",
              "timestamp": "2026-04-10T07:59:29.022884",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4254,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-10T07:59:29.022564",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4254,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-10T07:59:00.249630",
              "price": 5.99,
              "size": 500.0,
              "notional": 2995.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4253,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "73",
              "timestamp": "2026-04-10T07:55:15.190201",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4252,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "72",
              "timestamp": "2026-04-10T07:47:23.720748",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4251,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "71",
              "timestamp": "2026-04-10T07:08:43.506197",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4250,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-10T07:00:57.705757",
              "price": 6.03,
              "size": 500.0,
              "notional": 3015.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4249,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-10T07:00:00.494226",
              "price": 5.98,
              "size": 4000.0,
              "notional": 23920.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 4248,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 1500.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-10T06:58:35.827466",
              "price": 6.0,
              "size": 3500.0,
              "notional": 21000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-10T06:58:35.827125",
              "price": 6.0,
              "size": 3000.0,
              "notional": 18000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4247,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-10T06:58:04.535393",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4246,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-10T06:57:52.662181",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 4245,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-10T06:54:46.415033",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4244,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-10T06:51:01.682983",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4243,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-10T06:47:35.442243",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "59",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 1500.0,
              "notional": 9000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "58",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "57",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "56",
              "timestamp": "2026-04-10T06:47:35.441902",
              "price": 6.0,
              "size": 500.0,
              "notional": 3000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "55",
              "timestamp": "2026-04-10T06:47:35.441564",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4242,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "53",
              "timestamp": "2026-04-10T06:39:29.077850",
              "price": 6.0,
              "size": 1000.0,
              "notional": 6000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4241,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "52",
              "timestamp": "2026-04-10T06:39:28.865919",
              "price": 6.0,
              "size": 6500.0,
              "notional": 39000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 4241,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "51",
              "timestamp": "2026-04-10T06:36:59.422485",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4240,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "50",
              "timestamp": "2026-04-10T06:33:41.373166",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4239,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "49",
              "timestamp": "2026-04-10T06:28:03.432769",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4238,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "48",
              "timestamp": "2026-04-10T06:21:40.281979",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4237,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "47",
              "timestamp": "2026-04-10T06:16:13.693295",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4236,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "46",
              "timestamp": "2026-04-10T05:58:00.317950",
              "price": 5.98,
              "size": 500.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 4235,
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
      "n_trades": 7532,
      "n_runs": 3056,
      "n_trade_days": 125,
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
        "retail_pct": 0.009957514604354753,
        "mixed_pct": 0.0,
        "instit_pct": 0.39431757833244824,
        "ambiguous_pct": 0.14843335103558153,
        "unobservable_pct": 0.4472915560276155,
        "unclear_pct": 0.595724907063197,
        "retail_qty_pct": 0.001904262170530392,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.5393405825270479,
        "ambiguous_qty_pct": 0.06274576615044429,
        "unobservable_qty_pct": 0.3960093891519774,
        "unclear_qty_pct": 0.4587551553024217,
        "retail_notional_pct": 0.0017953128593550284,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.5437601098277357,
        "ambiguous_notional_pct": 0.06326091342302814,
        "unobservable_notional_pct": 0.39118366388988113,
        "unclear_notional_pct": 0.45444457731290927
      },
      "run_composition": {
        "retail_pct": 0.023887434554973823,
        "mixed_pct": 0.0,
        "instit_pct": 0.1587041884816754,
        "ambiguous_pct": 0.12467277486910995,
        "unobservable_pct": 0.6927356020942408,
        "unclear_pct": 0.8174083769633508
      },
      "trade_size": {
        "avg": 19966.20920605417,
        "median": 6110.0
      },
      "run_size": {
        "avg": 49209.91090968587,
        "median": 12960.0,
        "avg_length": 2.4646596858638743
      },
      "confidence": {
        "high": 0.022905759162303665,
        "medium": 0.007853403141361256,
        "low": 0.1518324607329843,
        "na": 0.8174083769633508
      },
      "confidence_counts": {
        "high": 70,
        "medium": 24,
        "low": 464,
        "na": 2498
      },
      "trade_confidence": {
        "high": 0.049522039298990975,
        "medium": 0.014737121614445035,
        "low": 0.34001593202336694,
        "na": 0.595724907063197
      },
      "trade_confidence_counts": {
        "high": 373,
        "medium": 111,
        "low": 2561,
        "na": 4487
      },
      "counts": {
        "trades": {
          "retail": 75,
          "mixed": 0,
          "institutional": 2970,
          "ambiguous": 1118,
          "unobservable": 3369,
          "unclear": 4487
        },
        "runs": {
          "retail": 73,
          "mixed": 0,
          "institutional": 485,
          "ambiguous": 381,
          "unobservable": 2117,
          "unclear": 2498
        }
      },
      "observability": {
        "avg_feature_coverage": 0.5992310209424083,
        "observable_run_pct": 0.3072643979057592,
        "ambiguous_run_pct": 0.12467277486910995,
        "unobservable_run_pct": 0.6927356020942408
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.6927356020942408,
      "dominance_gap": 0.5340314136125655,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 1005,
            "n_runs": 449,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.33930348258706466,
            "ambiguous_pct": 0.10746268656716418,
            "unobservable_pct": 0.5532338308457712,
            "unclear_pct": 0.6606965174129353,
            "avg_trade_size": 16041.546029850746,
            "avg_run_notional": 35905.910378619155,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4336179410315654,
            "ambiguous_qty_pct": 0.059598093163739235,
            "unobservable_qty_pct": 0.5067839658046953,
            "unclear_qty_pct": 0.5663820589684345,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.43371687684181576,
            "ambiguous_notional_pct": 0.05894302903681119,
            "unobservable_notional_pct": 0.507340094121373,
            "unclear_notional_pct": 0.5662831231581842,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.14699331848552338,
            "run_ambiguous_pct": 0.0801781737193764,
            "run_unobservable_pct": 0.7728285077951003,
            "run_unclear_pct": 0.8530066815144767,
            "avg_feature_coverage": 0.5840757238307348,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.14699331848552338,
            "na_confidence_pct": 0.8530066815144766,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 308,
            "n_runs": 142,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.2012987012987013,
            "ambiguous_pct": 0.14935064935064934,
            "unobservable_pct": 0.6493506493506493,
            "unclear_pct": 0.7987012987012987,
            "avg_trade_size": 14666.401785714286,
            "avg_run_notional": 31811.63204225352,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.19410428186068895,
            "ambiguous_qty_pct": 0.06601140960922554,
            "unobservable_qty_pct": 0.7398843085300855,
            "unclear_qty_pct": 0.805895718139311,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.1940682185800249,
            "ambiguous_notional_pct": 0.06592245384596951,
            "unobservable_notional_pct": 0.7400093275740056,
            "unclear_notional_pct": 0.8059317814199751,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.11267605633802817,
            "run_ambiguous_pct": 0.08450704225352113,
            "run_unobservable_pct": 0.8028169014084507,
            "run_unclear_pct": 0.8873239436619719,
            "avg_feature_coverage": 0.5795774647887323,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.11267605633802817,
            "na_confidence_pct": 0.8873239436619719,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 1006,
            "n_runs": 446,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.3359840954274354,
            "ambiguous_pct": 0.11630218687872763,
            "unobservable_pct": 0.547713717693837,
            "unclear_pct": 0.6640159045725647,
            "avg_trade_size": 21453.351411530813,
            "avg_run_notional": 48390.29488789238,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.49220278584218413,
            "ambiguous_qty_pct": 0.050456826154771976,
            "unobservable_qty_pct": 0.4573403880030439,
            "unclear_qty_pct": 0.5077972141578159,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.4951160499166023,
            "ambiguous_notional_pct": 0.050861197405576944,
            "unobservable_notional_pct": 0.4540227526778208,
            "unclear_notional_pct": 0.5048839500833977,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1412556053811659,
            "run_ambiguous_pct": 0.08968609865470852,
            "run_unobservable_pct": 0.7690582959641256,
            "run_unclear_pct": 0.8587443946188341,
            "avg_feature_coverage": 0.5846412556053812,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.1412556053811659,
            "na_confidence_pct": 0.8587443946188341,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 2663,
            "n_runs": 967,
            "retail_pct": 0.0015020653398422831,
            "mixed_pct": 0.0,
            "instit_pct": 0.4532482162974089,
            "ambiguous_pct": 0.18174990612091627,
            "unobservable_pct": 0.36349981224183253,
            "unclear_pct": 0.5452497183627488,
            "avg_trade_size": 25758.868787082236,
            "avg_run_notional": 70936.78136504654,
            "retail_qty_pct": 0.000241024558763571,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5982333671121218,
            "ambiguous_qty_pct": 0.06541406524843317,
            "unobservable_qty_pct": 0.3361115430806814,
            "unclear_qty_pct": 0.4015256083291146,
            "retail_notional_pct": 0.0002472452145928526,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5984399656746786,
            "ambiguous_notional_pct": 0.06584682371328351,
            "unobservable_notional_pct": 0.33546596539744505,
            "unclear_notional_pct": 0.40131278911072854,
            "run_retail_pct": 0.002068252326783868,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18407445708376421,
            "run_ambiguous_pct": 0.17063081695966908,
            "run_unobservable_pct": 0.6432264736297828,
            "run_unclear_pct": 0.8138572905894519,
            "avg_feature_coverage": 0.6035160289555326,
            "high_confidence_pct": 0.04239917269906929,
            "medium_confidence_pct": 0.012409513960703205,
            "low_confidence_pct": 0.1313340227507756,
            "na_confidence_pct": 0.8138572905894519,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 1747,
            "n_runs": 625,
            "retail_pct": 0.024041213508872353,
            "mixed_pct": 0.0,
            "instit_pct": 0.44647967945048656,
            "ambiguous_pct": 0.18546078992558673,
            "unobservable_pct": 0.3440183171150544,
            "unclear_pct": 0.529479107040641,
            "avg_trade_size": 16312.511408128219,
            "avg_run_notional": 45596.731888,
            "retail_qty_pct": 0.006275628437848851,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6165469905352083,
            "ambiguous_qty_pct": 0.08692484535436784,
            "unobservable_qty_pct": 0.290252535672575,
            "unclear_qty_pct": 0.3771773810269428,
            "retail_notional_pct": 0.005731077407957234,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6171226146013652,
            "ambiguous_notional_pct": 0.08592457919184983,
            "unobservable_notional_pct": 0.2912217287988278,
            "unclear_notional_pct": 0.3771463079906776,
            "run_retail_pct": 0.0672,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.176,
            "run_ambiguous_pct": 0.1632,
            "run_unobservable_pct": 0.5936,
            "run_unclear_pct": 0.7568,
            "avg_feature_coverage": 0.6241599999999999,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0192,
            "low_confidence_pct": 0.224,
            "na_confidence_pct": 0.7568,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 183,
            "n_runs": 107,
            "retail_pct": 0.15846994535519127,
            "mixed_pct": 0.0,
            "instit_pct": 0.4098360655737705,
            "ambiguous_pct": 0.15300546448087432,
            "unobservable_pct": 0.2786885245901639,
            "unclear_pct": 0.43169398907103823,
            "avg_trade_size": 8398.709836065573,
            "avg_run_notional": 14364.14859813084,
            "retail_qty_pct": 0.05878664367455714,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.57610910801066,
            "ambiguous_qty_pct": 0.09013952030098761,
            "unobservable_qty_pct": 0.2749647280137953,
            "unclear_qty_pct": 0.3651042483147829,
            "retail_notional_pct": 0.05836506634931374,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5763440507613744,
            "ambiguous_notional_pct": 0.08986222773352062,
            "unobservable_notional_pct": 0.2754286551557913,
            "unclear_notional_pct": 0.3652908828893119,
            "run_retail_pct": 0.27102803738317754,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1588785046728972,
            "run_ambiguous_pct": 0.205607476635514,
            "run_unobservable_pct": 0.3644859813084112,
            "run_unclear_pct": 0.5700934579439252,
            "avg_feature_coverage": 0.6579439252336449,
            "high_confidence_pct": 0.27102803738317754,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.1588785046728972,
            "na_confidence_pct": 0.5700934579439252,
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
          "trade_id": "76",
          "timestamp": "2026-04-10T07:59:29.022884",
          "price": 5.99,
          "size": 500.0,
          "notional": 2995.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4254,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "75",
          "timestamp": "2026-04-10T07:59:29.022564",
          "price": 5.99,
          "size": 500.0,
          "notional": 2995.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4254,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "74",
          "timestamp": "2026-04-10T07:59:00.249630",
          "price": 5.99,
          "size": 500.0,
          "notional": 2995.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 4253,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "73",
          "timestamp": "2026-04-10T07:55:15.190201",
          "price": 6.03,
          "size": 500.0,
          "notional": 3015.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4252,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "72",
          "timestamp": "2026-04-10T07:47:23.720748",
          "price": 6.03,
          "size": 500.0,
          "notional": 3015.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4251,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "71",
          "timestamp": "2026-04-10T07:08:43.506197",
          "price": 6.03,
          "size": 500.0,
          "notional": 3015.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4250,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "70",
          "timestamp": "2026-04-10T07:00:57.705757",
          "price": 6.03,
          "size": 500.0,
          "notional": 3015.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4249,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "69",
          "timestamp": "2026-04-10T07:00:00.494226",
          "price": 5.98,
          "size": 4000.0,
          "notional": 23920.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 4248,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "68",
          "timestamp": "2026-04-10T06:58:35.827466",
          "price": 6.0,
          "size": 500.0,
          "notional": 3000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4247,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "67",
          "timestamp": "2026-04-10T06:58:35.827466",
          "price": 6.0,
          "size": 1500.0,
          "notional": 9000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4247,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "66",
          "timestamp": "2026-04-10T06:58:35.827466",
          "price": 6.0,
          "size": 3500.0,
          "notional": 21000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4247,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "65",
          "timestamp": "2026-04-10T06:58:35.827125",
          "price": 6.0,
          "size": 3000.0,
          "notional": 18000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4247,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "64",
          "timestamp": "2026-04-10T06:58:04.535393",
          "price": 5.98,
          "size": 500.0,
          "notional": 2990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 4246,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "63",
          "timestamp": "2026-04-10T06:57:52.662181",
          "price": 6.0,
          "size": 1000.0,
          "notional": 6000.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 4245,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "62",
          "timestamp": "2026-04-10T06:54:46.415033",
          "price": 5.98,
          "size": 500.0,
          "notional": 2990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 4244,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "61",
          "timestamp": "2026-04-10T06:51:01.682983",
          "price": 5.98,
          "size": 500.0,
          "notional": 2990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 4243,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "60",
          "timestamp": "2026-04-10T06:47:35.442243",
          "price": 6.0,
          "size": 500.0,
          "notional": 3000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4242,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "59",
          "timestamp": "2026-04-10T06:47:35.441902",
          "price": 6.0,
          "size": 1500.0,
          "notional": 9000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4242,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "58",
          "timestamp": "2026-04-10T06:47:35.441902",
          "price": 6.0,
          "size": 1000.0,
          "notional": 6000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4242,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "57",
          "timestamp": "2026-04-10T06:47:35.441902",
          "price": 6.0,
          "size": 500.0,
          "notional": 3000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4242,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "56",
          "timestamp": "2026-04-10T06:47:35.441902",
          "price": 6.0,
          "size": 500.0,
          "notional": 3000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4242,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "55",
          "timestamp": "2026-04-10T06:47:35.441564",
          "price": 5.98,
          "size": 500.0,
          "notional": 2990.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4242,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "53",
          "timestamp": "2026-04-10T06:39:29.077850",
          "price": 6.0,
          "size": 1000.0,
          "notional": 6000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4241,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "52",
          "timestamp": "2026-04-10T06:39:28.865919",
          "price": 6.0,
          "size": 6500.0,
          "notional": 39000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 4241,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "51",
          "timestamp": "2026-04-10T06:36:59.422485",
          "price": 5.98,
          "size": 500.0,
          "notional": 2990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 4240,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "50",
          "timestamp": "2026-04-10T06:33:41.373166",
          "price": 5.98,
          "size": 500.0,
          "notional": 2990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 4239,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "49",
          "timestamp": "2026-04-10T06:28:03.432769",
          "price": 5.98,
          "size": 500.0,
          "notional": 2990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 4238,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "48",
          "timestamp": "2026-04-10T06:21:40.281979",
          "price": 5.98,
          "size": 500.0,
          "notional": 2990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 4237,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "47",
          "timestamp": "2026-04-10T06:16:13.693295",
          "price": 5.98,
          "size": 500.0,
          "notional": 2990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 4236,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "46",
          "timestamp": "2026-04-10T05:58:00.317950",
          "price": 5.98,
          "size": 500.0,
          "notional": 2990.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 4235,
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
      "total_trades": 7531,
      "price_moving_trades": 2777,
      "pct_price_moving": 36.87425308723941,
      "all_movers": {
        "count": 2777,
        "avg_size": 20455.181037090388,
        "median_size": 6340.0,
        "retail_count": 32,
        "mixed_count": 0,
        "institutional_count": 1001,
        "ambiguous_count": 469,
        "unobservable_count": 1275,
        "retail_pct": 1.1523226503420958,
        "mixed_pct": 0.0,
        "instit_pct": 36.04609290601368,
        "unclear_pct": 62.801584443644224
      },
      "positive_movers": {
        "count": 1322,
        "avg_size": 25237.429062027233,
        "median_size": 6320.0,
        "retail_count": 9,
        "mixed_count": 0,
        "institutional_count": 446,
        "ambiguous_count": 184,
        "unobservable_count": 683,
        "retail_pct": 0.680786686838124,
        "mixed_pct": 0.0,
        "instit_pct": 33.73676248108926,
        "unclear_pct": 65.58245083207262
      },
      "negative_movers": {
        "count": 1455,
        "avg_size": 16110.073209621996,
        "median_size": 6380.0,
        "retail_count": 23,
        "mixed_count": 0,
        "institutional_count": 555,
        "ambiguous_count": 285,
        "unobservable_count": 592,
        "retail_pct": 1.5807560137457044,
        "mixed_pct": 0.0,
        "instit_pct": 38.144329896907216,
        "unclear_pct": 60.27491408934708
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
          "opening": 0.0102338360295524,
          "continuous": 0.9436874919380307,
          "closing": 0.004232533882510976,
          "auctions": 0.014466369912063376,
          "other": 0.041846138149905926
        },
        "1M": {
          "opening": 0.03407897023513518,
          "continuous": 0.8828304015005759,
          "closing": 0.018236654311997808,
          "auctions": 0.05231562454713299,
          "other": 0.06485397395229107
        },
        "3M": {
          "opening": 0.013408044812707394,
          "continuous": 0.9624685804947334,
          "closing": 0.010848158894367589,
          "auctions": 0.024256203707074982,
          "other": 0.013275215798191782
        },
        "6M": {
          "opening": 0.01173761639004943,
          "continuous": 0.9525897726976086,
          "closing": 0.011583914084177766,
          "auctions": 0.023321530474227196,
          "other": 0.024088696828164256
        }
      },
      "hhi": {
        "1D": 0.314969700537805,
        "1M": 0.34101950336244086,
        "3M": 0.31569961131376545,
        "6M": 0.36330412442917664
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0426
        },
        {
          "time": "09:30",
          "avg_share": 0.1188
        },
        {
          "time": "10:00",
          "avg_share": 0.0776
        },
        {
          "time": "10:30",
          "avg_share": 0.0849
        },
        {
          "time": "11:00",
          "avg_share": 0.0714
        },
        {
          "time": "11:30",
          "avg_share": 0.0846
        },
        {
          "time": "13:00",
          "avg_share": 0.0536
        },
        {
          "time": "13:30",
          "avg_share": 0.0661
        },
        {
          "time": "14:00",
          "avg_share": 0.074
        },
        {
          "time": "14:30",
          "avg_share": 0.1118
        },
        {
          "time": "15:00",
          "avg_share": 0.0896
        },
        {
          "time": "15:30",
          "avg_share": 0.114
        },
        {
          "time": "16:00",
          "avg_share": 0.011
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "45",
          "auctions_pct": 2.6368842215595545,
          "hhi": 0.3681542260500774,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "69",
          "auctions_pct": 4.323006575180781,
          "hhi": 0.20563194371669838,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
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
