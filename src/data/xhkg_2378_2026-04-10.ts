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
      "ticker": "2378",
      "name": "PRU",
      "marketCap": 294424972681.39996,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1828",
      "name": "FWD",
      "marketCap": 40487242484.64,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "82318",
      "name": "PING AN-R",
      "marketCap": 399190122483.2,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "376",
      "name": "YUNFENG FIN",
      "marketCap": 11528388351.32,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "945",
      "name": "MANULIFE-S",
      "marketCap": 472905076156.80005,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1508",
      "name": "CHINA RE",
      "marketCap": 9150800879.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "6963",
      "name": "SUNSHINE INS",
      "marketCap": 12975806553.49,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "81299",
      "name": "AIA-R",
      "marketCap": 794427397142.3999,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "6060",
      "name": "ZA ONLINE",
      "marketCap": 20778471959.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "2378",
    "company": "PRU",
    "asof_date": "2026-04-10",
    "industry": "Financials - Insurance",
    "sector": "Insurance",
    "market_cap_display": "294.4B",
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
          "score_pca": 59.945609945609945,
          "score_pca_percentile": 59.945609945609945,
          "rank_pca": 1032,
          "total": 2574,
          "adv_notional_sgd": 5421262.0,
          "adv_volume_shares": 46060.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 1.8009708413671257e-05,
          "votes": 270.0,
          "trades": 270.0,
          "spread_pct": 0.0032166956297300926,
          "spread_ticks": 3.798185941043084,
          "amihud": 2.0601079379164935e-09,
          "volatility": 0.15383659283520662
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5400311351591687,
          "loadings": {
            "log_adv": 0.5402029833535159,
            "log_trades": 0.5011844939658837,
            "log_turnover": 0.5017366694515694,
            "neg_spread": 0.39366793713877407,
            "neg_amihud": 0.04034419997132453,
            "neg_vol": -0.2205743754594915
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
          "peer_median_adv": 24638710.0,
          "peer_median_score_pca": 75.85470085470087,
          "peer_median_trades": 1597.0,
          "peer_median_volatility": 0.2164447008257852,
          "peer_median_spread_pct": 0.0033913121275143824,
          "peer_median_spread_ticks": 1.943063294559985,
          "peer_median_amihud": 6.740503668073887e-10,
          "peer_median_turnover_ratio": 0.0027137920712443082,
          "target_vs_peer": {
            "score_pca_delta": -15.91,
            "adv_delta_pct": -78.0,
            "trades_delta_pct": -83.09,
            "volatility_delta_pct": 28.93,
            "spread_pct_delta_pct": 5.15,
            "spread_ticks_delta_pct": 95.47,
            "amihud_delta_pct": -205.63,
            "turnover_ratio_delta_pct": -99.34
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 59.945609945609945,
            "rank_pca": 1032,
            "adv": 5421262.0,
            "trades": 270.0,
            "volatility": 0.15383659283520662,
            "spread_pct": 0.0032166956297300926,
            "spread_ticks": 3.798185941043084,
            "amihud": 2.0601079379164935e-09,
            "turnover_ratio": 1.8009708413671257e-05,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 68.37606837606837,
            "rank_pca": 815,
            "adv": 3915296.0,
            "trades": 611.0,
            "volatility": 0.17932090226824324,
            "spread_pct": 0.003622316382493332,
            "spread_ticks": null,
            "amihud": 1.2923897839524044e-09,
            "turnover_ratio": 0.00044740268162781236,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 45.18259518259518,
            "rank_pca": 1412,
            "adv": 3168867.0294594103,
            "trades": 18.0,
            "volatility": 0.09555410215124281,
            "spread_pct": 0.0022509582704103226,
            "spread_ticks": 2.4722316865417375,
            "amihud": 2.6176329894760664e-09,
            "turnover_ratio": 8.915980346073379e-06,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 97.3970473970474,
            "rank_pca": 68,
            "adv": 102883048.0,
            "trades": 3553.0,
            "volatility": 1.4648992351177357,
            "spread_pct": 0.004522565296739838,
            "spread_ticks": 1.4138949025782326,
            "amihud": 8.156453910277227e-10,
            "turnover_ratio": 0.02609843094972532,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 51.24320124320124,
            "rank_pca": 1256,
            "adv": 6645760.000000001,
            "trades": 80.0,
            "volatility": 0.16113533271350444,
            "spread_pct": 0.03037465313357818,
            "spread_ticks": 42.747368421052634,
            "amihud": 5.324553425870548e-10,
            "turnover_ratio": 1.3817138453483665e-05,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 83.33333333333334,
            "rank_pca": 430,
            "adv": 42631660.0,
            "trades": 2583.0,
            "volatility": 0.3442111619622445,
            "spread_pct": 0.008082919839992623,
            "spread_ticks": 1.1218848467487825,
            "amihud": 3.375071298803024e-10,
            "turnover_ratio": 0.004980181460860804,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 86.24708624708624,
            "rank_pca": 355,
            "adv": 69720840.0,
            "trades": 3207.0,
            "volatility": 0.25356849938332715,
            "spread_pct": 0.0031603078725354326,
            "spread_ticks": 1.1955854126679462,
            "amihud": 5.094477588488612e-10,
            "turnover_ratio": 0.007819653147773638,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 23.115773115773116,
            "rank_pca": 1980,
            "adv": 197862.75643606318,
            "trades": 2.0,
            "volatility": 0.048765393094814445,
            "spread_pct": 0.0018683603944185804,
            "spread_ticks": 2.918856767411301,
            "amihud": 1.0193510424072723e-07,
            "turnover_ratio": 2.2504278791207042e-07,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 98.71794871794873,
            "rank_pca": 34,
            "adv": 577480480.0,
            "trades": 18597.0,
            "volatility": 0.7233420339338641,
            "spread_pct": 0.0013640836418801758,
            "spread_ticks": null,
            "amihud": 9.255194280560431e-11,
            "turnover_ratio": 0.03416543763136566,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
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
              "mean": 0.006494092693337297,
              "median": 0.0011575575535619843,
              "min": 0.0,
              "max": 0.7118303545605582,
              "p5": 0.0,
              "p95": 0.022477492092257197,
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
              "mean": 0.57679813128688,
              "median": 0.25356849938332715,
              "min": 0.0,
              "max": 4.6690260186976955,
              "p5": 0.048765393094814445,
              "p95": 1.4648992351177357,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 353422130.21885216,
              "median": 69720840.0,
              "min": 0.0,
              "max": 1726222693.75,
              "p5": 152028.0,
              "p95": 1502260361.1000001,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.009024815543716704,
              "median": 0.0022509582704103226,
              "min": 0.0006002340088087456,
              "max": 0.041956800162172556,
              "p5": 0.0006342435891456758,
              "p95": 0.03467838593687578,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00632452771305684,
              "median": 0.004856918499600282,
              "min": 0.0,
              "max": 0.03416543763136566,
              "p5": 2.2504278791207042e-07,
              "p95": 0.02609843094972532,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5452518346168163e-08,
              "median": 4.2347744436458184e-10,
              "min": 1.5819976491144706e-12,
              "max": 1.0193510424072723e-07,
              "p5": 3.294593414508488e-12,
              "p95": 1.0044176105762222e-07,
              "count": 20
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 6015.952380952381,
              "median": 3207.0,
              "min": 0.0,
              "max": 19336.0,
              "p5": 2.0,
              "p95": 18597.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 100830476.72323695,
              "median": 24638710.0,
              "min": 197862.75643606318,
              "max": 577480480.0,
              "p5": 1237714.2519942347,
              "p95": 411371378.7999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3581.375,
              "median": 1597.0,
              "min": 2.0,
              "max": 18597.0,
              "p5": 7.6000000000000005,
              "p95": 13331.599999999991,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.40884958257812204,
              "median": 0.2164447008257852,
              "min": 0.048765393094814445,
              "max": 1.4648992351177357,
              "p5": 0.06514144126456438,
              "p95": 1.2053542147033802,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006905770604006061,
              "median": 0.0033913121275143824,
              "min": 0.0013640836418801758,
              "max": 0.03037465313357818,
              "p5": 0.0015405805052686175,
              "p95": 0.022572546480823224,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3516591822413154e-08,
              "median": 6.740503668073887e-10,
              "min": 9.255194280560431e-11,
              "max": 1.0193510424072723e-07,
              "p5": 1.7828625828174866e-10,
              "p95": 6.717398930278927e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009191758004117588,
              "median": 0.0027137920712443082,
              "min": 2.2504278791207042e-07,
              "max": 0.03416543763136566,
              "p5": 3.266870933268529e-06,
              "p95": 0.03134198529279154,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.644970339500105,
              "median": 1.943063294559985,
              "min": 1.1218848467487825,
              "max": 42.747368421052634,
              "p5": 1.1403099882285734,
              "p95": 32.7902405076423,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.011168384879725046,
            "market": 0.005388454653585173,
            "sector": 0.008294930875575979,
            "peers": 0.01423204578912185,
            "vs_market": 0.005779930226139873,
            "vs_sector": 0.0028734540041490675,
            "vs_peers": -0.0030636609093968037
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 66.93861693861693,
          "score_pca_percentile": 66.93861693861693,
          "rank_pca": 852,
          "total": 2574,
          "adv_notional_sgd": 7577640.0,
          "adv_volume_shares": 65850.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.574770514633635e-05,
          "votes": 301.0,
          "trades": 301.0,
          "spread_pct": 0.004075071549070851,
          "spread_ticks": 4.658627087198516,
          "amihud": 2.0289729662383813e-09,
          "volatility": 0.4626548369110163
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5765422124926693,
          "loadings": {
            "log_adv": 0.5181501785345138,
            "log_trades": 0.4722097727257014,
            "log_turnover": 0.47900559362064843,
            "neg_spread": 0.4588008942753266,
            "neg_amihud": 0.24954419274815193,
            "neg_vol": 0.07950722976532218
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
          "peer_median_adv": 16006168.0,
          "peer_median_score_pca": 76.86480186480186,
          "peer_median_trades": 802.0,
          "peer_median_volatility": 0.3882543642908738,
          "peer_median_spread_pct": 0.00303894066758989,
          "peer_median_spread_ticks": 1.9395204865754025,
          "peer_median_amihud": 1.1640318482881645e-09,
          "peer_median_turnover_ratio": 0.002088011363725676,
          "target_vs_peer": {
            "score_pca_delta": -9.93,
            "adv_delta_pct": -52.7,
            "trades_delta_pct": -62.47,
            "volatility_delta_pct": -19.16,
            "spread_pct_delta_pct": -34.1,
            "spread_ticks_delta_pct": 140.19,
            "amihud_delta_pct": -74.31,
            "turnover_ratio_delta_pct": -98.77
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 66.93861693861693,
            "rank_pca": 852,
            "adv": 7577640.0,
            "trades": 301.0,
            "volatility": 0.4626548369110163,
            "spread_pct": 0.004075071549070851,
            "spread_ticks": 4.658627087198516,
            "amihud": 2.0289729662383813e-09,
            "turnover_ratio": 2.574770514633635e-05,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 75.13597513597513,
            "rank_pca": 641,
            "adv": 7978320.0,
            "trades": 823.0,
            "volatility": 0.35084031164838964,
            "spread_pct": 0.0027557546679385027,
            "spread_ticks": null,
            "amihud": 1.2923897839524044e-09,
            "turnover_ratio": 0.0009518201530409871,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 56.526806526806524,
            "rank_pca": 1120,
            "adv": 3576741.0035482454,
            "trades": 29.0,
            "volatility": 0.33424043508939505,
            "spread_pct": 0.0023603366461267573,
            "spread_ticks": 2.5530888030888033,
            "amihud": 2.7523803324936493e-09,
            "turnover_ratio": 1.006358177675609e-05,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 78.5936285936286,
            "rank_pca": 552,
            "adv": 24034016.0,
            "trades": 781.0,
            "volatility": 0.8183622172559547,
            "spread_pct": 0.004655706795804602,
            "spread_ticks": 1.3259521700620018,
            "amihud": 1.035673912623925e-09,
            "turnover_ratio": 0.006385088258778144,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 52.75835275835276,
            "rank_pca": 1217,
            "adv": 1756920.0,
            "trades": 40.0,
            "volatility": 0.2671463920197952,
            "spread_pct": 0.007022678728388111,
            "spread_ticks": 9.518518518518519,
            "amihud": 5.3844676845248625e-09,
            "turnover_ratio": 3.864114991228483e-06,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 81.42968142968144,
            "rank_pca": 479,
            "adv": 35295260.0,
            "trades": 1679.0,
            "volatility": 0.5799853776671091,
            "spread_pct": 0.006603479316561898,
            "spread_ticks": 1.0958274398868457,
            "amihud": 5.366566548001128e-10,
            "turnover_ratio": 0.0032242025744103654,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 86.51903651903652,
            "rank_pca": 348,
            "adv": 55781200.0,
            "trades": 2226.0,
            "volatility": 0.3442025292356445,
            "spread_pct": 0.0033221266672412773,
            "spread_ticks": 1.227710843373494,
            "amihud": 2.993343373073522e-10,
            "turnover_ratio": 0.006408408939760566,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 30.419580419580424,
            "rank_pca": 1792,
            "adv": 197862.75643606318,
            "trades": 2.0,
            "volatility": 0.4844381694818097,
            "spread_pct": 0.002098844338696529,
            "spread_ticks": 3.139436321254503,
            "amihud": 3.109857463784565e-08,
            "turnover_ratio": 2.2504278791207042e-07,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 94.01709401709401,
            "rank_pca": 155,
            "adv": 123242676.0,
            "trades": 6710.0,
            "volatility": 0.425668416933358,
            "spread_pct": 0.001226036951762419,
            "spread_ticks": null,
            "amihud": 1.4393356444561903e-10,
            "turnover_ratio": 0.006939329004139014,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
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
              "mean": 0.004578026865091349,
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
              "mean": 0.4907187338555888,
              "median": 0.4607853401877455,
              "min": 0.2671463920197952,
              "max": 1.4608245422543575,
              "p5": 0.2952427260934319,
              "p95": 0.8183622172559547,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 389950389.6833326,
              "median": 35295260.0,
              "min": 0.0,
              "max": 2498867294.2999997,
              "p5": 11360.0,
              "p95": 2159393254.15,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.009642299949108733,
              "median": 0.0023603366461267573,
              "min": 0.0006755619765274845,
              "max": 0.05326530976292833,
              "p5": 0.0008828658038295879,
              "p95": 0.038732525687007,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003618149925065765,
              "median": 0.0032242025744103654,
              "min": 0.0,
              "max": 0.010301486361053689,
              "p5": 2.2504278791207042e-07,
              "p95": 0.00799541155049597,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.3075483061907754e-08,
              "median": 5.366566548001128e-10,
              "min": 5.752147511323922e-12,
              "max": 5.805717470565019e-07,
              "p5": 8.849418762602096e-12,
              "p95": 2.294200994031404e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4935.333333333333,
              "median": 1679.0,
              "min": 0.0,
              "max": 17148.0,
              "p5": 1.0,
              "p95": 15383.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 31482874.46999804,
              "median": 16006168.0,
              "min": 197862.75643606318,
              "max": 123242676.0,
              "p5": 743532.7916834411,
              "p95": 99631159.39999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1536.25,
              "median": 802.0,
              "min": 2.0,
              "max": 6710.0,
              "p5": 11.450000000000001,
              "p95": 5140.599999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.450610481166432,
              "median": 0.3882543642908738,
              "min": 0.2671463920197952,
              "max": 0.8183622172559547,
              "p5": 0.29062930709415513,
              "p95": 0.7349303233998586,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0037556205140650122,
              "median": 0.00303894066758989,
              "min": 0.001226036951762419,
              "max": 0.007022678728388111,
              "p5": 0.0015315195371893575,
              "p95": 0.006875958934248937,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.317926363499197e-09,
              "median": 1.1640318482881645e-09,
              "min": 1.4393356444561903e-10,
              "max": 3.109857463784565e-08,
              "p5": 1.9832383494722563e-10,
              "p95": 2.209863720418336e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029903752087106212,
              "median": 0.002088011363725676,
              "min": 2.2504278791207042e-07,
              "max": 0.006939329004139014,
              "p5": 1.4987180590728149e-06,
              "p95": 0.006753506981606557,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.143422349364027,
              "median": 1.9395204865754025,
              "min": 1.0958274398868457,
              "max": 9.518518518518519,
              "p5": 1.1287982907585077,
              "p95": 7.923747969202515,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.07586837294332649,
            "market": 0.005817570896814672,
            "sector": 0.007070978641441128,
            "peers": -0.02299075494692604,
            "vs_market": 0.07005080204651182,
            "vs_sector": 0.06879739430188536,
            "vs_peers": 0.09885912789025253
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 67.52136752136752,
          "score_pca_percentile": 67.52136752136752,
          "rank_pca": 837,
          "total": 2574,
          "adv_notional_sgd": 7820505.0,
          "adv_volume_shares": 68550.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.6803419708145128e-05,
          "votes": 264.0,
          "trades": 264.0,
          "spread_pct": 0.0037790472142184613,
          "spread_ticks": 4.43709327548807,
          "amihud": 1.964611550373641e-09,
          "volatility": 0.40191543166244065
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6182698953679459,
          "loadings": {
            "log_adv": 0.49908895981340645,
            "log_trades": 0.4512156351514548,
            "log_turnover": 0.45332862908270105,
            "neg_spread": 0.46033139109407134,
            "neg_amihud": 0.33249734124833735,
            "neg_vol": 0.13909832233864095
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
          "peer_median_adv": 20221043.0,
          "peer_median_score_pca": 78.96270396270396,
          "peer_median_trades": 967.0,
          "peer_median_volatility": 0.37217304525580874,
          "peer_median_spread_pct": 0.00275076512382249,
          "peer_median_spread_ticks": 1.9575601697237928,
          "peer_median_amihud": 7.847881155382993e-10,
          "peer_median_turnover_ratio": 0.0022166590230476317,
          "target_vs_peer": {
            "score_pca_delta": -11.44,
            "adv_delta_pct": -61.3,
            "trades_delta_pct": -72.7,
            "volatility_delta_pct": -7.99,
            "spread_pct_delta_pct": -37.38,
            "spread_ticks_delta_pct": 126.66,
            "amihud_delta_pct": -150.34,
            "turnover_ratio_delta_pct": -98.79
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 67.52136752136752,
            "rank_pca": 837,
            "adv": 7820505.0,
            "trades": 264.0,
            "volatility": 0.40191543166244065,
            "spread_pct": 0.0037790472142184613,
            "spread_ticks": 4.43709327548807,
            "amihud": 1.964611550373641e-09,
            "turnover_ratio": 2.6803419708145128e-05,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 78.63247863247864,
            "rank_pca": 551,
            "adv": 13827109.999999998,
            "trades": 1024.0,
            "volatility": 0.2549306326691994,
            "spread_pct": 0.0019336963333307718,
            "spread_ticks": null,
            "amihud": 5.927835895728272e-10,
            "turnover_ratio": 0.0014812950798375377,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 59.09090909090909,
            "rank_pca": 1054,
            "adv": 4518762.971407616,
            "trades": 33.0,
            "volatility": 0.34023747050012865,
            "spread_pct": 0.0021675502774838053,
            "spread_ticks": 2.5616720635855166,
            "amihud": 2.7523803324936493e-09,
            "turnover_ratio": 1.1829122439344879e-05,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 79.29292929292929,
            "rank_pca": 534,
            "adv": 26614976.0,
            "trades": 910.0,
            "volatility": 0.693238809673624,
            "spread_pct": 0.0044833235949544945,
            "spread_ticks": 1.353448275862069,
            "amihud": 9.767926415037712e-10,
            "turnover_ratio": 0.006548969779189169,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 59.67365967365967,
            "rank_pca": 1039,
            "adv": 3204680.0000000005,
            "trades": 60.0,
            "volatility": 0.2689858442817907,
            "spread_pct": 0.004246909869632234,
            "spread_ticks": 6.038759689922481,
            "amihud": 3.598635478347293e-09,
            "turnover_ratio": 6.615833242557856e-06,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 80.41958041958041,
            "rank_pca": 505,
            "adv": 31226300.0,
            "trades": 1308.0,
            "volatility": 0.42584028755634984,
            "spread_pct": 0.006603479316561898,
            "spread_ticks": 1.1015262110152622,
            "amihud": 4.2668890574159036e-10,
            "turnover_ratio": 0.002952022966257726,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 86.4024864024864,
            "rank_pca": 351,
            "adv": 49328845.0,
            "trades": 2226.0,
            "volatility": 0.35692127186718975,
            "spread_pct": 0.0033339799701611744,
            "spread_ticks": 1.3244206773618539,
            "amihud": 2.993343373073522e-10,
            "turnover_ratio": 0.005244982615263042,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 33.68298368298368,
            "rank_pca": 1708,
            "adv": 306223.81843137,
            "trades": 2.0,
            "volatility": 0.42257167083634095,
            "spread_pct": 0.0020107417044644142,
            "spread_ticks": 3.029016890428757,
            "amihud": 3.109857463784565e-08,
            "turnover_ratio": 3.6825183476520614e-07,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 95.37684537684538,
            "rank_pca": 120,
            "adv": 156825120.0,
            "trades": 7471.0,
            "volatility": 0.3874248186444278,
            "spread_pct": 0.0011996570289123682,
            "spread_ticks": null,
            "amihud": 9.875971039129866e-11,
            "turnover_ratio": 0.007826015679451058,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
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
              "mean": 0.0041162209707571425,
              "median": 0.0008952838912855968,
              "min": 0.0,
              "max": 0.4275637256597378,
              "p5": 0.0,
              "p95": 0.016367626506232615,
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
              "mean": 0.4802023680599769,
              "median": 0.3908453203380387,
              "min": 0.2549306326691994,
              "max": 2.4151452566721407,
              "p5": 0.26518680239339903,
              "p95": 0.693238809673624,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 452567122.25142086,
              "median": 31226300.0,
              "min": 0.0,
              "max": 2604752929.7999997,
              "p5": 33000.0,
              "p95": 2418608267.45,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007401242227151123,
              "median": 0.002020967701928999,
              "min": 0.0006669768997651502,
              "max": 0.034655152823542805,
              "p5": 0.000813633815622186,
              "p95": 0.03333872794950646,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003937257123492185,
              "median": 0.002952022966257726,
              "min": 0.0,
              "max": 0.010571909313792843,
              "p5": 3.6825183476520614e-07,
              "p95": 0.010314452977410248,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.74408480099752e-08,
              "median": 4.2668890574159036e-10,
              "min": 5.3002557405654205e-12,
              "max": 2.073417129137153e-07,
              "p5": 6.880184524268378e-12,
              "p95": 1.3594652769910502e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5528.666666666667,
              "median": 1308.0,
              "min": 0.0,
              "max": 19411.0,
              "p5": 2.0,
              "p95": 19394.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 35731502.22372987,
              "median": 20221043.0,
              "min": 306223.81843137,
              "max": 156825120.0,
              "p5": 1320683.4819803908,
              "p95": 119201423.74999994,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1629.25,
              "median": 967.0,
              "min": 2.0,
              "max": 7471.0,
              "p5": 12.850000000000001,
              "p95": 5635.249999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3937688507536314,
              "median": 0.37217304525580874,
              "min": 0.2549306326691994,
              "max": 0.693238809673624,
              "p5": 0.25984995673360634,
              "p95": 0.5996493269325779,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003247417261937645,
              "median": 0.00275076512382249,
              "min": 0.0011996570289123682,
              "max": 0.006603479316561898,
              "p5": 0.0014565707854588095,
              "p95": 0.005861424813999306,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.980493704150429e-09,
              "median": 7.847881155382993e-10,
              "min": 9.875971039129866e-11,
              "max": 3.109857463784565e-08,
              "p5": 1.689608298119174e-10,
              "p95": 2.147359593202121e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0030090124159394003,
              "median": 0.0022166590230476317,
              "min": 3.6825183476520614e-07,
              "max": 0.007826015679451058,
              "p5": 2.5549053274926338e-06,
              "p95": 0.007379049614359396,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.5681406346959896,
              "median": 1.9575601697237928,
              "min": 1.1015262110152622,
              "max": 6.038759689922481,
              "p5": 1.15724982760191,
              "p95": 5.28632399004905,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.01752921535893226,
            "market": 0.07151156981189555,
            "sector": -0.1014383553039041,
            "peers": -0.16932289735199724,
            "vs_market": -0.08904078517082781,
            "vs_sector": 0.08390913994497184,
            "vs_peers": 0.15179368199306498
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 67.09401709401709,
          "score_pca_percentile": 67.09401709401709,
          "rank_pca": 848,
          "total": 2574,
          "adv_notional_sgd": 7940847.5,
          "adv_volume_shares": 71675.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.8025311562090475e-05,
          "votes": 269.0,
          "trades": 269.0,
          "spread_pct": 0.0034590032742212572,
          "spread_ticks": 4.0941548864439135,
          "amihud": 1.3157816278965552e-09,
          "volatility": 0.33340527509220524
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6224803396219781,
          "loadings": {
            "log_adv": 0.49902979504185463,
            "log_trades": 0.45352858976720734,
            "log_turnover": 0.4522276880256036,
            "neg_spread": 0.46251268825128455,
            "neg_amihud": 0.3374776004918131,
            "neg_vol": 0.11385114176032164
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
          "peer_median_adv": 22275703.880000003,
          "peer_median_score_pca": 78.47707847707846,
          "peer_median_trades": 1003.5,
          "peer_median_volatility": 0.35106951721889235,
          "peer_median_spread_pct": 0.0027600263511056424,
          "peer_median_spread_ticks": 1.9648882009244324,
          "peer_median_amihud": 6.832195906319372e-10,
          "peer_median_turnover_ratio": 0.0020995212596936043,
          "target_vs_peer": {
            "score_pca_delta": -11.38,
            "adv_delta_pct": -64.4,
            "trades_delta_pct": -73.19,
            "volatility_delta_pct": 5.03,
            "spread_pct_delta_pct": -25.33,
            "spread_ticks_delta_pct": 108.37,
            "amihud_delta_pct": -92.59,
            "turnover_ratio_delta_pct": -98.67
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 67.09401709401709,
            "rank_pca": 848,
            "adv": 7940847.5,
            "trades": 269.0,
            "volatility": 0.33340527509220524,
            "spread_pct": 0.0034590032742212572,
            "spread_ticks": 4.0941548864439135,
            "amihud": 1.3157816278965552e-09,
            "turnover_ratio": 2.8025311562090475e-05,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 76.88422688422688,
            "rank_pca": 596,
            "adv": 13572623.0,
            "trades": 870.0,
            "volatility": 0.23088495789811928,
            "spread_pct": 0.0021516238350374234,
            "spread_ticks": null,
            "amihud": 6.278628592190549e-10,
            "turnover_ratio": 0.0012212785862941013,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 59.09090909090909,
            "rank_pca": 1054,
            "adv": 4930565.980403649,
            "trades": 34.0,
            "volatility": 0.31219027212341344,
            "spread_pct": 0.0022533770236019515,
            "spread_ticks": 2.5616720635855166,
            "amihud": 2.043568759769726e-09,
            "turnover_ratio": 1.3462247552239506e-05,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 82.36208236208236,
            "rank_pca": 455,
            "adv": 33925103.0,
            "trades": 1203.5,
            "volatility": 0.6812284396052083,
            "spread_pct": 0.0041285747938858775,
            "spread_ticks": 1.3681043382633482,
            "amihud": 7.385763220448195e-10,
            "turnover_ratio": 0.008084422454871665,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 58.080808080808076,
            "rank_pca": 1080,
            "adv": 3037010.0,
            "trades": 54.5,
            "volatility": 0.21880776308980499,
            "spread_pct": 0.004218407070582721,
            "spread_ticks": 5.6625179649324515,
            "amihud": 3.1583317367850257e-09,
            "turnover_ratio": 6.557286045721061e-06,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 80.06993006993007,
            "rank_pca": 514,
            "adv": 30978784.76,
            "trades": 1137.0,
            "volatility": 0.3592560575637074,
            "spread_pct": 0.006605868854809339,
            "spread_ticks": 1.0849096143909158,
            "amihud": 4.2050119510568814e-10,
            "turnover_ratio": 0.002977763933093107,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 86.63558663558663,
            "rank_pca": 345,
            "adv": 48962487.5,
            "trades": 2240.5,
            "volatility": 0.35679397052096795,
            "spread_pct": 0.003266675678609333,
            "spread_ticks": 1.2375668875623878,
            "amihud": 2.785793944401954e-10,
            "turnover_ratio": 0.005397265216925898,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 37.06293706293706,
            "rank_pca": 1621,
            "adv": 412749.41886419023,
            "trades": 4.0,
            "volatility": 0.3770393385680384,
            "spread_pct": 0.0020414982312978304,
            "spread_ticks": 3.0004170581516725,
            "amihud": 2.8864468449866917e-08,
            "turnover_ratio": 5.114608816183419e-07,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 95.60994560994561,
            "rank_pca": 114,
            "adv": 162242990.5,
            "trades": 7803.0,
            "volatility": 0.3453450639168168,
            "spread_pct": 0.0010362653220338134,
            "spread_ticks": null,
            "amihud": 7.974695924680895e-11,
            "turnover_ratio": 0.008344711292191448,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
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
              "mean": 0.003679889452205205,
              "median": 0.0008690629810280508,
              "min": 0.0,
              "max": 0.18632,
              "p5": 0.0,
              "p95": 0.014621663938525271,
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
              "mean": 0.4298501620492039,
              "median": 0.35679397052096795,
              "min": 0.21880776308980499,
              "max": 1.7697387934025868,
              "p5": 0.23088495789811928,
              "p95": 0.6812284396052083,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 405888656.2575842,
              "median": 33925103.0,
              "min": 0.0,
              "max": 2369472990.6,
              "p5": 54080.0,
              "p95": 2106529895.55,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008449969835177314,
              "median": 0.0021516238350374234,
              "min": 0.0006855428586916405,
              "max": 0.046039005437009034,
              "p5": 0.0008304755736837132,
              "p95": 0.04255319148936175,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038934258804738434,
              "median": 0.002977763933093107,
              "min": 0.0,
              "max": 0.010698112273136653,
              "p5": 5.114608816183419e-07,
              "p95": 0.009947883859286162,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.310809046919851e-08,
              "median": 4.2050119510568814e-10,
              "min": 4.883409595552578e-12,
              "max": 1.7076502732240377e-07,
              "p5": 7.122807834281049e-12,
              "p95": 1.3153740923918786e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5086.0952380952385,
              "median": 1203.5,
              "min": 0.0,
              "max": 17311.0,
              "p5": 4.0,
              "p95": 16627.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 37257789.26990848,
              "median": 22275703.880000003,
              "min": 412749.41886419023,
              "max": 162242990.5,
              "p5": 1331240.6222617237,
              "p95": 122594814.44999993,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1668.3125,
              "median": 1003.5,
              "min": 4.0,
              "max": 7803.0,
              "p5": 14.500000000000002,
              "p95": 5856.124999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.36019323291075955,
              "median": 0.35106951721889235,
              "min": 0.21880776308980499,
              "max": 0.6812284396052083,
              "p5": 0.22303478127271498,
              "p95": 0.5747622542421986,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003212786351232286,
              "median": 0.0027600263511056424,
              "min": 0.0010362653220338134,
              "max": 0.006605868854809339,
              "p5": 0.0013880968402762194,
              "p95": 0.0057702572303300215,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.52645445955978e-09,
              "median": 6.832195906319372e-10,
              "min": 7.974695924680895e-11,
              "max": 2.8864468449866917e-08,
              "p5": 1.4933831156449422e-10,
              "p95": 1.986732060028824e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0032557465597319746,
              "median": 0.0020995212596936043,
              "min": 5.114608816183419e-07,
              "max": 0.008344711292191448,
              "p5": 2.627499689054294e-06,
              "p95": 0.008253610199129523,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.4858646544810488,
              "median": 1.9648882009244324,
              "min": 1.0849096143909158,
              "max": 5.6625179649324515,
              "p5": 1.1230739326837837,
              "p95": 4.996992738237257,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.10102899906454499,
            "market": 0.11289080174108235,
            "sector": -0.04417793801994607,
            "peers": -0.1499974134629205,
            "vs_market": -0.011861802676537359,
            "vs_sector": 0.14520693708449106,
            "vs_peers": 0.2510264125274655
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity is weak today, and trading has pulled back with average volume down 28.5% from the 1M average, which makes access thinner at the margin.",
        "market_comparison": "The stock rose 1.1% compared with 1.4% for peers, so today’s tape is not being helped by stronger relative momentum."
      },
      "30d": {
        "liquidity": "1M score 66.9 vs peer median 76.9 (-9.9 pts).",
        "market_comparison": "Return 7.6% vs peers -2.3%."
      },
      "3m": {
        "liquidity": "Liquidity remains weak over 3M, with a score of 67.5 compared with a peer median of 79.0, keeping tradability below the sector standard.",
        "market_comparison": "The stock fell 1.8% over 3M while peers fell 16.9%, which gives the tape a firmer backdrop than the group despite weaker liquidity."
      },
      "6m": {
        "liquidity": "Liquidity is weak on the core structural view, with a 6M score of 67.1 compared with a peer median of 78.5, which means access screens below peers on a sustained basis.",
        "market_comparison": "The stock returned 10.1% over 6M while peers fell 15.0%, which matters because relative outperformance can help keep interest in the name despite weaker trading access."
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
          "median": 0.6268807996339049,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "62.7%",
          "display_range": null,
          "display_text": "62.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 62.7,
          "plain_english": "Market explains about 62.7% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.06669535023992107,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "6.7%",
          "display_range": null,
          "display_text": "6.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 6.7,
          "plain_english": "Sector explains about 6.7% of price moves in the current state."
        },
        "company_share": {
          "median": 0.30642385012617407,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "30.6%",
          "display_range": null,
          "display_text": "30.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 30.6,
          "plain_english": "Company-specific explains about 30.6% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 4.250334463566923,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.25",
          "display_range": null,
          "display_text": "4.25",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 4.25% stock move in the same direction in this state.",
          "value_num": 4.25
        },
        "beta_stock_lag": {
          "median": -2.4478178832095487,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.45",
          "display_range": null,
          "display_text": "-2.45",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -2.45
        },
        "beta_sector": {
          "median": 0.3340181567952111,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.33",
          "display_range": null,
          "display_text": "0.33",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.33% stock move in the same direction in this state.",
          "value_num": 0.33
        },
        "beta_market_lag": {
          "median": 5.679728117988769,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "5.68",
          "display_range": null,
          "display_text": "5.68",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 5.68
        },
        "beta_sector_lag": {
          "median": 0.6724723665308834,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.67",
          "display_range": null,
          "display_text": "0.67",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.67
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
            "median": 0.45687342690246396,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.7%",
            "display_range": null,
            "display_text": "45.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 45.7,
            "plain_english": "Market explains about 45.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.45687342690246396,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.7%",
              "display_range": null,
              "display_text": "45.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 45.7,
              "plain_english": "Market explains about 45.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.39396886896346234,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.4%",
              "display_range": null,
              "display_text": "39.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 39.4,
              "plain_english": "Sector explains about 39.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.14915770413407375,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.9%",
              "display_range": null,
              "display_text": "14.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 14.9,
              "plain_english": "Company-specific explains about 14.9% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4461263968668964,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.6%",
            "display_range": null,
            "display_text": "44.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 44.6,
            "plain_english": "Market explains about 44.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4461263968668964,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Market explains about 44.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3750746203208251,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.5%",
              "display_range": null,
              "display_text": "37.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 37.5,
              "plain_english": "Sector explains about 37.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.1787989828122783,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.9%",
              "display_range": null,
              "display_text": "17.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 17.9,
              "plain_english": "Company-specific explains about 17.9% of price moves in the current state."
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
            "median": 0.4998154798497232,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.0%",
            "display_range": null,
            "display_text": "50.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 50.0,
            "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26740162513715554,
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
              "median": 0.2327828950131212,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.3%",
              "display_range": null,
              "display_text": "23.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 23.3,
              "plain_english": "Sector explains about 23.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4998154798497232,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.0%",
              "display_range": null,
              "display_text": "50.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 50.0,
              "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
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
            "median": 0.48152258134277476,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.2%",
            "display_range": null,
            "display_text": "48.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 48.2,
            "plain_english": "Company-specific explains about 48.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3247453529324499,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.5%",
              "display_range": null,
              "display_text": "32.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 32.5,
              "plain_english": "Market explains about 32.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1937320657247754,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.4%",
              "display_range": null,
              "display_text": "19.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.4,
              "plain_english": "Sector explains about 19.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48152258134277476,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.2%",
              "display_range": null,
              "display_text": "48.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.2,
              "plain_english": "Company-specific explains about 48.2% of price moves in the current state."
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
            "median": 0.49730998055028297,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.7%",
            "display_range": null,
            "display_text": "49.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 49.7,
            "plain_english": "Company-specific explains about 49.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3552802176625259,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.5%",
              "display_range": null,
              "display_text": "35.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.5,
              "plain_english": "Market explains about 35.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14740980178719118,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.7%",
              "display_range": null,
              "display_text": "14.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 14.7,
              "plain_english": "Sector explains about 14.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.49730998055028297,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.7%",
              "display_range": null,
              "display_text": "49.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 49.7,
              "plain_english": "Company-specific explains about 49.7% of price moves in the current state."
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
            "median": 0.6540920936881196,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.4%",
            "display_range": null,
            "display_text": "65.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 65.4,
            "plain_english": "Company-specific explains about 65.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.29660054761333804,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.7%",
              "display_range": null,
              "display_text": "29.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 29.7,
              "plain_english": "Market explains about 29.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.04930735869854244,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.9%",
              "display_range": null,
              "display_text": "4.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 4.9,
              "plain_english": "Sector explains about 4.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6540920936881196,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.4%",
              "display_range": null,
              "display_text": "65.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 65.4,
              "plain_english": "Company-specific explains about 65.4% of price moves in the current state."
            }
          },
          "summary": "Aug: Still clearly company-driven."
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
            "median": 0.5869745736684729,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.7%",
            "display_range": null,
            "display_text": "58.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 58.7,
            "plain_english": "Company-specific explains about 58.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12369982887903691,
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
              "median": 0.2893255974524901,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.9%",
              "display_range": null,
              "display_text": "28.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.9,
              "plain_english": "Sector explains about 28.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5869745736684729,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.7%",
              "display_range": null,
              "display_text": "58.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 58.7,
              "plain_english": "Company-specific explains about 58.7% of price moves in the current state."
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
            "median": 0.4708039190781022,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.1%",
            "display_range": null,
            "display_text": "47.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 47.1,
            "plain_english": "Market explains about 47.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4708039190781022,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Market explains about 47.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13657994710478183,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.7%",
              "display_range": null,
              "display_text": "13.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 13.7,
              "plain_english": "Sector explains about 13.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3926161338171159,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.3%",
              "display_range": null,
              "display_text": "39.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 39.3,
              "plain_english": "Company-specific explains about 39.3% of price moves in the current state."
            }
          },
          "summary": "Oct: Mostly market-driven."
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
            "median": 0.5647010127693882,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.5%",
            "display_range": null,
            "display_text": "56.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 56.5,
            "plain_english": "Market explains about 56.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5647010127693882,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Market explains about 56.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1452060694305866,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.5%",
              "display_range": null,
              "display_text": "14.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 14.5,
              "plain_english": "Sector explains about 14.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2900929178000251,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.0%",
              "display_range": null,
              "display_text": "29.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.0,
              "plain_english": "Company-specific explains about 29.0% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6448618526830895,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.5%",
            "display_range": null,
            "display_text": "64.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 64.5,
            "plain_english": "Company-specific explains about 64.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.216872314621538,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.7%",
              "display_range": null,
              "display_text": "21.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 21.7,
              "plain_english": "Market explains about 21.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1382658326953726,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.8%",
              "display_range": null,
              "display_text": "13.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 13.8,
              "plain_english": "Sector explains about 13.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6448618526830895,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.5%",
              "display_range": null,
              "display_text": "64.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 64.5,
              "plain_english": "Company-specific explains about 64.5% of price moves in the current state."
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
            "median": 0.4784308939023619,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.8%",
            "display_range": null,
            "display_text": "47.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.8,
            "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1477160880556185,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.8%",
              "display_range": null,
              "display_text": "14.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 14.8,
              "plain_english": "Market explains about 14.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37385301804201954,
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
              "plain_english": "Sector explains about 37.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4784308939023619,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.8%",
              "display_range": null,
              "display_text": "47.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.8,
              "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
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
            "median": 0.39695253468750463,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.7%",
            "display_range": null,
            "display_text": "39.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 39.7,
            "plain_english": "Market explains about 39.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.39695253468750463,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.7%",
              "display_range": null,
              "display_text": "39.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 39.7,
              "plain_english": "Market explains about 39.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2864772596276536,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.6%",
              "display_range": null,
              "display_text": "28.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 28.6,
              "plain_english": "Sector explains about 28.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3165702056848417,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.7%",
              "display_range": null,
              "display_text": "31.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 31.7,
              "plain_english": "Company-specific explains about 31.7% of price moves in the current state."
            }
          },
          "summary": "Feb: More mixed, though market-driven still has the largest share."
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
            "median": 0.3871188335107719,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.7%",
            "display_range": null,
            "display_text": "38.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 38.7,
            "plain_english": "Market explains about 38.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3871188335107719,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.7%",
              "display_range": null,
              "display_text": "38.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.7,
              "plain_english": "Market explains about 38.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.368833267950062,
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
              "median": 0.24404789853916614,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.4%",
              "display_range": null,
              "display_text": "24.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.4,
              "plain_english": "Company-specific explains about 24.4% of price moves in the current state."
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
            "median": 0.6268807996339049,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.7%",
            "display_range": null,
            "display_text": "62.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 62.7,
            "plain_english": "Market explains about 62.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.6268807996339049,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.7%",
              "display_range": null,
              "display_text": "62.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 62.7,
              "plain_english": "Market explains about 62.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.06669535023992107,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.7%",
              "display_range": null,
              "display_text": "6.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 6.7,
              "plain_english": "Sector explains about 6.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.30642385012617407,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.6%",
              "display_range": null,
              "display_text": "30.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 30.6,
              "plain_english": "Company-specific explains about 30.6% of price moves in the current state."
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
          "expected_duration_days": 10.416666666666666,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.012308477827940735,
            "low": 0.012308477827940735,
            "high": 0.012308477827940735
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
            "median": 0.0255393336342816,
            "low": 0.0255393336342816,
            "high": 0.0255393336342816
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.904,
            0.096
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
            113.0,
            12.0
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
        "market_link_display": "4.25",
        "sector_link_display": "0.33",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 4.25% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.33% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-2.45",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 62.7,
        "driver_share_display": "62.7%",
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
          "expected_duration_days": 10.416666666666666,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.012308477827940735,
            "low": 0.012308477827940735,
            "high": 0.012308477827940735
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
            "median": 0.0255393336342816,
            "low": 0.0255393336342816,
            "high": 0.0255393336342816
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.904,
          0.096
        ],
        [
          0.08943089430894309,
          0.9105691056910569
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.904,
            0.096
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
            113.0,
            12.0
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
        "text": "Liquidity score: 67.1 — Weak",
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
    "liq_subtitle": "Liquidity screens weak for the stock’s size, while recent trading looks quieter rather than materially worse.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns are strong relative to peers, with the stock up 7.6% over one month while peers fell 2.3% and the market rose 0.6%.",
    "perf_insight": "The return backdrop is firmer than peers, but trading conditions still start from a weaker base. The 6M liquidity score is 67.1 compared with a peer median of 78.5, while market factors explain 62.7% of the tape.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Recent price moves are being driven mainly by the market, with 62.7% of the tape explained by broader moves.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 62.7% of price changes. Other influences are sector 6.7%, and company-specific 30.6%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 62.7%, sector 6.7%, and company-specific 30.6%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently market-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 62.7%, sector 6.7%, and company-specific 30.6%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "This matters because the tape is being shaped more by wider market conditions than by company-specific flow, even as one-month returns remain ahead of peers.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, accounting for 62.7% of recent price moves.",
      "The monthly pattern looks broadly stable, with Feb to Apr remaining market-led even as the mix became more balanced in Feb and Mar."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop is the main influence on trading, with broader moves explaining most of the tape.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 10, 2025 to Apr 10, 2026 (239 trading days • 144,130 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Displayed liquidity looks broadly balanced, with top-10 bid depth at 0.92x of ask depth and a 6-tick spread. That matters because the current book is not showing a clear near-term imbalance even though structural liquidity screens below peers.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 28.0% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks broadly balanced in the current book.",
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
    "intraday_insight": "Top-10 bid depth is 0.92x of ask depth and the spread is 6 ticks. That points to a book that is usable in the near term even though the broader liquidity standing remains below peers.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Recent trading is quieter than the monthly average, but the displayed book remains broadly balanced.",
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
    "exec_subtitle": "Trading access screens below peers, while the near-term picture is steadier than the structural score implies.",
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
        "value": "67.1/100",
        "sub": "Peer median 78.5 (-11.4 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$7.9M",
        "sub": "Peer median HK$22.3M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.35%",
        "sub": "4.09 ticks; peers 0.28%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks weak for the stock’s size: its 6M score is 67.1 versus a peer median of 78.5. Recent trading is quieter, with 1D average volume 28.5% below the 1M average, but this does not point to a clear deterioration from the monthly baseline. The current book is broadly balanced, with top-10 bid depth at 0.92x ask depth and a 6-tick spread.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "118.000",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.51%",
        "note": "6.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.92x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.30% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.63% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.71% with 48.3% fill.",
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
        "subtext": "Rank 848/2574",
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
        "value": "0.35",
        "suffix": "%",
        "bar_pct": 3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.35% • 4.09 ticks vs peers 0.28%",
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
        "value": "7.9M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$22.3M",
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
        "value": "62.7",
        "suffix": "market",
        "bar_pct": 63,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 6.7% • Company 30.6%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the company’s size. The 6M liquidity score is 67.1 compared with a peer median of 78.5, so access starts from a weaker base than comparable names.",
      "1D average volume down -28.5% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "The price backdrop is firmer, but the tape is still market-led. The stock is up 7.6% over one month compared with peers at -2.3%, while market factors explain 62.7% of current trading and the displayed book remains broadly balanced at 0.92x bid depth to ask depth with a 6-tick spread."
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
      "overall": "6M liquidity is weak: score 67.1 vs peer median 78.5 (-11.4 pts). 1D average volume down -28.5% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 67.1 vs peer median 78.5 (-11.4 pts)."
      ],
      "concerns": [
        "1D average volume down -28.5% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -11.4 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 10.1%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: 10.1% vs market 11.3%.",
        "vs_sector": "Better than sector: 10.1% vs sector -4.4%.",
        "vs_peers": "Better than peers: 10.1% vs peers -15.0%."
      },
      "adv": {
        "insight": "ADV is HK$7.9M, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$7.9M vs market HK$221.2K.",
        "vs_sector": "Worse than sector: HK$7.9M vs sector HK$33.9M.",
        "vs_peers": "Worse than peers: HK$7.9M vs peers HK$22.3M."
      },
      "spread": {
        "insight": "Spread is 0.35%, better than market, but worse than sector and peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.35% vs market 2.66%.",
        "vs_sector": "Worse than sector: 0.35% vs sector 0.22%.",
        "vs_peers": "Worse than peers: 0.35% vs peers 0.28%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.00%, worse than market, sector, and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "Worse than market: 0.00% vs market 0.09%.",
        "vs_sector": "Worse than sector: 0.00% vs sector 0.30%.",
        "vs_peers": "Worse than peers: 0.00% vs peers 0.21%."
      },
      "volatility": {
        "insight": "Volatility is 33.34%, better than market, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 33.34% vs market 59.82%.",
        "vs_sector": "In line with sector: 33.34% vs sector 35.68%.",
        "vs_peers": "In line with peers: 33.34% vs peers 35.11%."
      },
      "trades": {
        "insight": "Trades is 269, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 269 vs market 21.",
        "vs_sector": "Worse than sector: 269 vs sector 1204.",
        "vs_peers": "Worse than peers: 269 vs peers 1004."
      },
      "amihud": {
        "insight": "Price impact is 1.32e-09, better than market, but worse than sector and peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 1.32e-09 vs market 4.60e-08.",
        "vs_sector": "Worse than sector: 1.32e-09 vs sector 4.21e-10.",
        "vs_peers": "Worse than peers: 1.32e-09 vs peers 6.83e-10."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to peers, with the stock up 7.6% over one month compared with a 2.3% decline for peers and a 0.6% gain for the market. Liquidity gives a mixed read on that move because the six-month liquidity score of 67.1 sits 11.4 points below the peer median of 78.5, and one-day average volume is 28.5% below the monthly average. The driver mix points to a broad market-led move rather than a company-specific one, with market factors accounting for 62.7% of current trading.",
      "conclusion": "The move looks more broad-market than company-specific, with strong relative returns but only mixed confirmation from liquidity."
    },
    "drivers": {
      "overall": "The stock is moving mainly with the market right now, with broader moves explaining 62.7% of recent price action. That matters because the current tape is being shaped more by external sentiment than by company-specific news, even as the stock has outperformed with a 7.6% 1M return compared with peers at -2.3%.",
      "beta": "Based on the last 5 trading days, current mix is market 62.7%, sector 6.7%, and company-specific 30.6%.",
      "rolling_change": "The monthly picture is broadly stable rather than temporary, because Feb and Mar were more mixed but still led by the market, and Apr remains clearly market-driven. That matters because the stock has been taking its cue from wider conditions for several months, not just over the last few sessions."
    },
    "regime": {
      "overall": "High volatility is the key feature of the tape, and its typical duration of about 10.3 days suggests a backdrop that can persist long enough to shape trading conditions. That matters because liquidity already screens below peers on a six-month view, so a choppier market state leaves less room for trading conditions to absorb pressure smoothly.",
      "current": "The stock is currently in a high-volatility state, while recent price performance remains firm with a 7.6% one-month return compared with peers at -2.3%. That combination points to an active tape rather than a stalled one.",
      "transitions": "The state looks more settled than fleeting because high volatility typically lasts about 10.3 days, although the picture is mixed with one-day average volume running 28.5% below the one-month average. That matters because activity is present, but it is not broad enough to make conditions look fully steady.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 10.3 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced today, with bid depth close to ask depth at 0.92x and a 6-tick spread. That matters because the book is not showing a clear near-term air pocket despite the stock screening below peers on six-month liquidity.",
      "concern": "The main stress point is slightly lighter buy-side support, as bid depth sits below ask depth at 0.92x. That matters because a 28.5% drop in one-day average volume compared with the monthly average leaves less flow to absorb selling pressure.",
      "peer_context": "The book partly offsets the broader concern, because current depth is reasonably even even though the six-month liquidity score of 67.1 sits 11.4 points below the peer median of 78.5. That matters because the weaker structural ranking is not being amplified by an obviously thin screen today."
    },
    "trader_composition": {
      "overall": "Flow looks mainly institution-like, with a mixed edge from the unclear share of trading. Institution-like trades account for 55.4% of count and 67.9% of value, which matters because the activity base is supported by larger-value participation.",
      "retail_heavy": "By trade count and value, flow leans institution-like: institution-like trades are 55.4% of count and 67.9% of value, compared with retail-like at 6.0% of count and 2.7% of value.",
      "institutional_gap": "The institution-like lead is clear in both count and value, but 18.9% of trade count is unclear. That means the direction of the mix is visible, while the read is not fully clean.",
      "peer_comparison": "The mix stands out as institution-like on both trade count and trade value, and the peer comparison in the report tables provides the cross-check on how unusual that is. That matters because relative positioning helps judge whether this participation profile is typical for the group."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that the stock is trading with a strong market influence. Market factors account for 62.7% of the current driver mix, which means moves are still being shaped more by broader conditions than by stock-specific flow alone. The read is mixed rather than fully clean because 18.9% of trade count is unclear. That matters because the institution-like skew is real, but not every trade can be confidently assigned to one side of the mix.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The recent picture looks stable rather than driven by rising short pressure. One-day average volume is down 28.5% from the one-month average, but displayed depth remains broadly balanced with top-10 bid depth at 0.92x ask depth, so short activity does not appear to be changing the broader trading setup.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.5%, continuous 83.8%, and close 5.8%. Current trading concentration score is 0.203.",
      "hhi_interpretation": "A concentration score of 0.203 suggests activity is spread through the session rather than packed into a narrow part of the day. That matters because a broader intraday footprint usually supports more consistent access.",
      "best_times": "The continuous session is the clearest window for usable liquidity because it accounts for 83.8% of activity. That concentration in regular trading hours makes the flow picture look steadier through the day.",
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
        "2378",
        "1828",
        "82318",
        "376",
        "945",
        "1508",
        "6963",
        "81299",
        "6060"
      ],
      "scores": [
        67.09401709401709,
        76.88422688422688,
        59.09090909090909,
        82.36208236208236,
        58.080808080808076,
        80.06993006993007,
        86.63558663558663,
        37.06293706293706,
        95.60994560994561
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
        7940847.5,
        13572623.0,
        4930565.980403649,
        33925103.0,
        3037010.0,
        30978784.76,
        48962487.5,
        412749.41886419023,
        162242990.5
      ],
      "total": 2574
    },
    "market_comparison": {
      "sector_name": "Insurance",
      "sector_count": 21,
      "market_count": 2574,
      "company": {
        "volatility": 0.33340527509220524,
        "adv": 7940847.5,
        "spread_pct": 0.0034590032742212572,
        "turnover_ratio": 2.8025311562090475e-05,
        "amihud": 1.3157816278965552e-09,
        "trades": 269.0
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
          "mean": 0.003679889452205205,
          "median": 0.0008690629810280508,
          "min": 0.0,
          "max": 0.18632,
          "p5": 0.0,
          "p95": 0.014621663938525271,
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
          "mean": 0.4298501620492039,
          "median": 0.35679397052096795,
          "min": 0.21880776308980499,
          "max": 1.7697387934025868,
          "p5": 0.23088495789811928,
          "p95": 0.6812284396052083,
          "count": 21
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 405888656.2575842,
          "median": 33925103.0,
          "min": 0.0,
          "max": 2369472990.6,
          "p5": 54080.0,
          "p95": 2106529895.55,
          "count": 21
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.008449969835177314,
          "median": 0.0021516238350374234,
          "min": 0.0006855428586916405,
          "max": 0.046039005437009034,
          "p5": 0.0008304755736837132,
          "p95": 0.04255319148936175,
          "count": 21
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0038934258804738434,
          "median": 0.002977763933093107,
          "min": 0.0,
          "max": 0.010698112273136653,
          "p5": 5.114608816183419e-07,
          "p95": 0.009947883859286162,
          "count": 21
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.310809046919851e-08,
          "median": 4.2050119510568814e-10,
          "min": 4.883409595552578e-12,
          "max": 1.7076502732240377e-07,
          "p5": 7.122807834281049e-12,
          "p95": 1.3153740923918786e-07,
          "count": 21
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 5086.0952380952385,
          "median": 1203.5,
          "min": 0.0,
          "max": 17311.0,
          "p5": 4.0,
          "p95": 16627.0,
          "count": 21
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 37257789.26990848,
          "median": 22275703.880000003,
          "min": 412749.41886419023,
          "max": 162242990.5,
          "p5": 1331240.6222617237,
          "p95": 122594814.44999993,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1668.3125,
          "median": 1003.5,
          "min": 4.0,
          "max": 7803.0,
          "p5": 14.500000000000002,
          "p95": 5856.124999999997,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.36019323291075955,
          "median": 0.35106951721889235,
          "min": 0.21880776308980499,
          "max": 0.6812284396052083,
          "p5": 0.22303478127271498,
          "p95": 0.5747622542421986,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.003212786351232286,
          "median": 0.0027600263511056424,
          "min": 0.0010362653220338134,
          "max": 0.006605868854809339,
          "p5": 0.0013880968402762194,
          "p95": 0.0057702572303300215,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.52645445955978e-09,
          "median": 6.832195906319372e-10,
          "min": 7.974695924680895e-11,
          "max": 2.8864468449866917e-08,
          "p5": 1.4933831156449422e-10,
          "p95": 1.986732060028824e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0032557465597319746,
          "median": 0.0020995212596936043,
          "min": 5.114608816183419e-07,
          "max": 0.008344711292191448,
          "p5": 2.627499689054294e-06,
          "p95": 0.008253610199129523,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.4858646544810488,
          "median": 1.9648882009244324,
          "min": 1.0849096143909158,
          "max": 5.6625179649324515,
          "p5": 1.1230739326837837,
          "p95": 4.996992738237257,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.07586837294332649,
        "market": 0.005817570896814672,
        "sector": 0.007070978641441128,
        "peers": -0.02299075494692604
      },
      {
        "horizon": "3M",
        "stock": -0.01752921535893226,
        "market": 0.07151156981189555,
        "sector": -0.1014383553039041,
        "peers": -0.16932289735199724
      },
      {
        "horizon": "6M",
        "stock": 0.10102899906454499,
        "market": 0.11289080174108235,
        "sector": -0.04417793801994607,
        "peers": -0.1499974134629205
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
      "share_market": 0.6268807996339049,
      "share_sector": 0.06669535023992107,
      "share_idio": 0.30642385012617407,
      "beta_market": 4.250334463566923,
      "beta_sector": 0.3340181567952111,
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
            "median": 0.6268807996339049,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.7%",
            "display_range": null,
            "display_text": "62.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 62.7,
            "plain_english": "Market explains about 62.7% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.06669535023992107,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "6.7%",
            "display_range": null,
            "display_text": "6.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 6.7,
            "plain_english": "Sector explains about 6.7% of price moves in the current state."
          },
          "company_share": {
            "median": 0.30642385012617407,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "30.6%",
            "display_range": null,
            "display_text": "30.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 30.6,
            "plain_english": "Company-specific explains about 30.6% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 4.250334463566923,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.25",
            "display_range": null,
            "display_text": "4.25",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 4.25% stock move in the same direction in this state.",
            "value_num": 4.25
          },
          "beta_stock_lag": {
            "median": -2.4478178832095487,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.45",
            "display_range": null,
            "display_text": "-2.45",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -2.45
          },
          "beta_sector": {
            "median": 0.3340181567952111,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.33",
            "display_range": null,
            "display_text": "0.33",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.33% stock move in the same direction in this state.",
            "value_num": 0.33
          },
          "beta_market_lag": {
            "median": 5.679728117988769,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "5.68",
            "display_range": null,
            "display_text": "5.68",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 5.68
          },
          "beta_sector_lag": {
            "median": 0.6724723665308834,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.67",
            "display_range": null,
            "display_text": "0.67",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.67
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
              "median": 0.45687342690246396,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.7%",
              "display_range": null,
              "display_text": "45.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 45.7,
              "plain_english": "Market explains about 45.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.45687342690246396,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.7%",
                "display_range": null,
                "display_text": "45.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 45.7,
                "plain_english": "Market explains about 45.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.39396886896346234,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.4%",
                "display_range": null,
                "display_text": "39.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 39.4,
                "plain_english": "Sector explains about 39.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.14915770413407375,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.9%",
                "display_range": null,
                "display_text": "14.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 14.9,
                "plain_english": "Company-specific explains about 14.9% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4461263968668964,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Market explains about 44.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4461263968668964,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.6%",
                "display_range": null,
                "display_text": "44.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 44.6,
                "plain_english": "Market explains about 44.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3750746203208251,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.5%",
                "display_range": null,
                "display_text": "37.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 37.5,
                "plain_english": "Sector explains about 37.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.1787989828122783,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.9%",
                "display_range": null,
                "display_text": "17.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 17.9,
                "plain_english": "Company-specific explains about 17.9% of price moves in the current state."
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
              "median": 0.4998154798497232,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.0%",
              "display_range": null,
              "display_text": "50.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 50.0,
              "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26740162513715554,
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
                "median": 0.2327828950131212,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.3%",
                "display_range": null,
                "display_text": "23.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 23.3,
                "plain_english": "Sector explains about 23.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4998154798497232,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.0%",
                "display_range": null,
                "display_text": "50.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 50.0,
                "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
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
              "median": 0.48152258134277476,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.2%",
              "display_range": null,
              "display_text": "48.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.2,
              "plain_english": "Company-specific explains about 48.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3247453529324499,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.5%",
                "display_range": null,
                "display_text": "32.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 32.5,
                "plain_english": "Market explains about 32.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1937320657247754,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.4%",
                "display_range": null,
                "display_text": "19.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.4,
                "plain_english": "Sector explains about 19.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48152258134277476,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.2%",
                "display_range": null,
                "display_text": "48.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 48.2,
                "plain_english": "Company-specific explains about 48.2% of price moves in the current state."
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
              "median": 0.49730998055028297,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.7%",
              "display_range": null,
              "display_text": "49.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 49.7,
              "plain_english": "Company-specific explains about 49.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3552802176625259,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.5%",
                "display_range": null,
                "display_text": "35.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.5,
                "plain_english": "Market explains about 35.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14740980178719118,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.7%",
                "display_range": null,
                "display_text": "14.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 14.7,
                "plain_english": "Sector explains about 14.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.49730998055028297,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.7%",
                "display_range": null,
                "display_text": "49.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 49.7,
                "plain_english": "Company-specific explains about 49.7% of price moves in the current state."
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
              "median": 0.6540920936881196,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.4%",
              "display_range": null,
              "display_text": "65.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 65.4,
              "plain_english": "Company-specific explains about 65.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.29660054761333804,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.7%",
                "display_range": null,
                "display_text": "29.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 29.7,
                "plain_english": "Market explains about 29.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.04930735869854244,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.9%",
                "display_range": null,
                "display_text": "4.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 4.9,
                "plain_english": "Sector explains about 4.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6540920936881196,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "65.4%",
                "display_range": null,
                "display_text": "65.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 65.4,
                "plain_english": "Company-specific explains about 65.4% of price moves in the current state."
              }
            },
            "summary": "Aug: Still clearly company-driven."
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
              "median": 0.5869745736684729,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.7%",
              "display_range": null,
              "display_text": "58.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 58.7,
              "plain_english": "Company-specific explains about 58.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12369982887903691,
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
                "median": 0.2893255974524901,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.9%",
                "display_range": null,
                "display_text": "28.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.9,
                "plain_english": "Sector explains about 28.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5869745736684729,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.7%",
                "display_range": null,
                "display_text": "58.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 58.7,
                "plain_english": "Company-specific explains about 58.7% of price moves in the current state."
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
              "median": 0.4708039190781022,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Market explains about 47.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4708039190781022,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.1%",
                "display_range": null,
                "display_text": "47.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 47.1,
                "plain_english": "Market explains about 47.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13657994710478183,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.7%",
                "display_range": null,
                "display_text": "13.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 13.7,
                "plain_english": "Sector explains about 13.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3926161338171159,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.3%",
                "display_range": null,
                "display_text": "39.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 39.3,
                "plain_english": "Company-specific explains about 39.3% of price moves in the current state."
              }
            },
            "summary": "Oct: Mostly market-driven."
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
              "median": 0.5647010127693882,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Market explains about 56.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5647010127693882,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.5%",
                "display_range": null,
                "display_text": "56.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 56.5,
                "plain_english": "Market explains about 56.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1452060694305866,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.5%",
                "display_range": null,
                "display_text": "14.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 14.5,
                "plain_english": "Sector explains about 14.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2900929178000251,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.0%",
                "display_range": null,
                "display_text": "29.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.0,
                "plain_english": "Company-specific explains about 29.0% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6448618526830895,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.5%",
              "display_range": null,
              "display_text": "64.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 64.5,
              "plain_english": "Company-specific explains about 64.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.216872314621538,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.7%",
                "display_range": null,
                "display_text": "21.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 21.7,
                "plain_english": "Market explains about 21.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1382658326953726,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.8%",
                "display_range": null,
                "display_text": "13.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 13.8,
                "plain_english": "Sector explains about 13.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6448618526830895,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.5%",
                "display_range": null,
                "display_text": "64.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 64.5,
                "plain_english": "Company-specific explains about 64.5% of price moves in the current state."
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
              "median": 0.4784308939023619,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.8%",
              "display_range": null,
              "display_text": "47.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.8,
              "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1477160880556185,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.8%",
                "display_range": null,
                "display_text": "14.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 14.8,
                "plain_english": "Market explains about 14.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37385301804201954,
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
                "plain_english": "Sector explains about 37.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4784308939023619,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.8%",
                "display_range": null,
                "display_text": "47.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.8,
                "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
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
              "median": 0.39695253468750463,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.7%",
              "display_range": null,
              "display_text": "39.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 39.7,
              "plain_english": "Market explains about 39.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.39695253468750463,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.7%",
                "display_range": null,
                "display_text": "39.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 39.7,
                "plain_english": "Market explains about 39.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2864772596276536,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.6%",
                "display_range": null,
                "display_text": "28.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 28.6,
                "plain_english": "Sector explains about 28.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3165702056848417,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.7%",
                "display_range": null,
                "display_text": "31.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 31.7,
                "plain_english": "Company-specific explains about 31.7% of price moves in the current state."
              }
            },
            "summary": "Feb: More mixed, though market-driven still has the largest share."
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
              "median": 0.3871188335107719,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.7%",
              "display_range": null,
              "display_text": "38.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.7,
              "plain_english": "Market explains about 38.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3871188335107719,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.7%",
                "display_range": null,
                "display_text": "38.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.7,
                "plain_english": "Market explains about 38.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.368833267950062,
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
                "median": 0.24404789853916614,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.4%",
                "display_range": null,
                "display_text": "24.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.4,
                "plain_english": "Company-specific explains about 24.4% of price moves in the current state."
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
              "median": 0.6268807996339049,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.7%",
              "display_range": null,
              "display_text": "62.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 62.7,
              "plain_english": "Market explains about 62.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.6268807996339049,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.7%",
                "display_range": null,
                "display_text": "62.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 62.7,
                "plain_english": "Market explains about 62.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.06669535023992107,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.7%",
                "display_range": null,
                "display_text": "6.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 6.7,
                "plain_english": "Sector explains about 6.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.30642385012617407,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.6%",
                "display_range": null,
                "display_text": "30.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 30.6,
                "plain_english": "Company-specific explains about 30.6% of price moves in the current state."
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
            "expected_duration_days": 10.416666666666666,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.012308477827940735,
              "low": 0.012308477827940735,
              "high": 0.012308477827940735
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
              "median": 0.0255393336342816,
              "low": 0.0255393336342816,
              "high": 0.0255393336342816
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.904,
              0.096
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
              113.0,
              12.0
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
          "market_link_display": "4.25",
          "sector_link_display": "0.33",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 4.25% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.33% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-2.45",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 62.7,
          "driver_share_display": "62.7%",
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
          "share_market": 0.45687342690246396,
          "share_sector": 0.39396886896346234,
          "share_company": 0.14915770413407375,
          "share_market_display": "45.7%",
          "share_sector_display": "39.4%",
          "share_company_display": "14.9%",
          "dominant_share_display": "45.7%"
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
          "share_market": 0.4461263968668964,
          "share_sector": 0.3750746203208251,
          "share_company": 0.1787989828122783,
          "share_market_display": "44.6%",
          "share_sector_display": "37.5%",
          "share_company_display": "17.9%",
          "dominant_share_display": "44.6%"
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
          "share_market": 0.26740162513715554,
          "share_sector": 0.2327828950131212,
          "share_company": 0.4998154798497232,
          "share_market_display": "26.7%",
          "share_sector_display": "23.3%",
          "share_company_display": "50.0%",
          "dominant_share_display": "50.0%"
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
          "share_market": 0.3247453529324499,
          "share_sector": 0.1937320657247754,
          "share_company": 0.48152258134277476,
          "share_market_display": "32.5%",
          "share_sector_display": "19.4%",
          "share_company_display": "48.2%",
          "dominant_share_display": "48.2%"
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
          "share_market": 0.3552802176625259,
          "share_sector": 0.14740980178719118,
          "share_company": 0.49730998055028297,
          "share_market_display": "35.5%",
          "share_sector_display": "14.7%",
          "share_company_display": "49.7%",
          "dominant_share_display": "49.7%"
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
          "summary": "Aug: Still clearly company-driven.",
          "share_market": 0.29660054761333804,
          "share_sector": 0.04930735869854244,
          "share_company": 0.6540920936881196,
          "share_market_display": "29.7%",
          "share_sector_display": "4.9%",
          "share_company_display": "65.4%",
          "dominant_share_display": "65.4%"
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
          "share_market": 0.12369982887903691,
          "share_sector": 0.2893255974524901,
          "share_company": 0.5869745736684729,
          "share_market_display": "12.4%",
          "share_sector_display": "28.9%",
          "share_company_display": "58.7%",
          "dominant_share_display": "58.7%"
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
          "summary": "Oct: Mostly market-driven.",
          "share_market": 0.4708039190781022,
          "share_sector": 0.13657994710478183,
          "share_company": 0.3926161338171159,
          "share_market_display": "47.1%",
          "share_sector_display": "13.7%",
          "share_company_display": "39.3%",
          "dominant_share_display": "47.1%"
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
          "share_market": 0.5647010127693882,
          "share_sector": 0.1452060694305866,
          "share_company": 0.2900929178000251,
          "share_market_display": "56.5%",
          "share_sector_display": "14.5%",
          "share_company_display": "29.0%",
          "dominant_share_display": "56.5%"
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
          "summary": "Dec: Still clearly company-driven.",
          "share_market": 0.216872314621538,
          "share_sector": 0.1382658326953726,
          "share_company": 0.6448618526830895,
          "share_market_display": "21.7%",
          "share_sector_display": "13.8%",
          "share_company_display": "64.5%",
          "dominant_share_display": "64.5%"
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
          "share_market": 0.1477160880556185,
          "share_sector": 0.37385301804201954,
          "share_company": 0.4784308939023619,
          "share_market_display": "14.8%",
          "share_sector_display": "37.4%",
          "share_company_display": "47.8%",
          "dominant_share_display": "47.8%"
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
          "summary": "Feb: More mixed, though market-driven still has the largest share.",
          "share_market": 0.39695253468750463,
          "share_sector": 0.2864772596276536,
          "share_company": 0.3165702056848417,
          "share_market_display": "39.7%",
          "share_sector_display": "28.6%",
          "share_company_display": "31.7%",
          "dominant_share_display": "39.7%"
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
          "share_market": 0.3871188335107719,
          "share_sector": 0.368833267950062,
          "share_company": 0.24404789853916614,
          "share_market_display": "38.7%",
          "share_sector_display": "36.9%",
          "share_company_display": "24.4%",
          "dominant_share_display": "38.7%"
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
          "share_market": 0.6268807996339049,
          "share_sector": 0.06669535023992107,
          "share_company": 0.30642385012617407,
          "share_market_display": "62.7%",
          "share_sector_display": "6.7%",
          "share_company_display": "30.6%",
          "dominant_share_display": "62.7%"
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
            "expected_duration_days": 10.416666666666666,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.012308477827940735,
              "low": 0.012308477827940735,
              "high": 0.012308477827940735
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
              "median": 0.0255393336342816,
              "low": 0.0255393336342816,
              "high": 0.0255393336342816
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.904,
            0.096
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
          "price": 117.7,
          "quantity": 350.0,
          "value": 41195.0
        },
        {
          "level": 2,
          "price": 117.6,
          "quantity": 3000.0,
          "value": 352800.0
        },
        {
          "level": 3,
          "price": 117.4,
          "quantity": 100.0,
          "value": 11740.0
        },
        {
          "level": 4,
          "price": 117.3,
          "quantity": 150.0,
          "value": 17595.0
        },
        {
          "level": 5,
          "price": 117.2,
          "quantity": 1000.0,
          "value": 117200.0
        },
        {
          "level": 6,
          "price": 117.0,
          "quantity": 3100.0,
          "value": 362700.0
        },
        {
          "level": 7,
          "price": 116.9,
          "quantity": 550.0,
          "value": 64295.0
        },
        {
          "level": 8,
          "price": 116.8,
          "quantity": 1600.0,
          "value": 186880.0
        },
        {
          "level": 9,
          "price": 116.6,
          "quantity": 200.0,
          "value": 23320.0
        },
        {
          "level": 10,
          "price": 116.4,
          "quantity": 250.0,
          "value": 29100.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 118.3,
          "quantity": 3150.0,
          "value": 372645.0
        },
        {
          "level": 2,
          "price": 118.5,
          "quantity": 100.0,
          "value": 11850.0
        },
        {
          "level": 3,
          "price": 118.7,
          "quantity": 100.0,
          "value": 11870.0
        },
        {
          "level": 4,
          "price": 118.8,
          "quantity": 1150.0,
          "value": 136620.0
        },
        {
          "level": 5,
          "price": 118.9,
          "quantity": 800.0,
          "value": 95120.0
        },
        {
          "level": 6,
          "price": 119.0,
          "quantity": 2250.0,
          "value": 267750.0
        },
        {
          "level": 7,
          "price": 119.1,
          "quantity": 200.0,
          "value": 23820.0
        },
        {
          "level": 8,
          "price": 119.2,
          "quantity": 2000.0,
          "value": 238400.0
        },
        {
          "level": 9,
          "price": 119.3,
          "quantity": 750.0,
          "value": 89475.0
        },
        {
          "level": 10,
          "price": 119.5,
          "quantity": 500.0,
          "value": 59750.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-10 07:59:53.381000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 118.0,
        "spread_pct": 0.005084745762711816,
        "spread_ticks": 6.0,
        "tick_size": 0.1,
        "bid_depth_notional_top10": 1206825.0,
        "ask_depth_notional_top10": 1307300.0,
        "bid_ask_depth_ratio": 0.9231
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 239,
        "n_trades_used": 144130,
        "first_trade_date": "2025-04-10",
        "last_trade_date": "2026-04-10",
        "window_label": "Apr 10, 2025 to Apr 10, 2026",
        "window_short_label": "Apr 10, 2025 to Apr 10, 2026",
        "trade_days_label": "239 trading days",
        "trade_count_label": "144,130 trades",
        "window_detail_label": "239 trading days • 144,130 trades",
        "history_note": "Trade-size percentiles use Apr 10, 2025 to Apr 10, 2026 history (239 trading days • 144,130 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 36015.0,
            "impact_pct": -0.002542,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.98,
            "pct_of_adv": 0.48
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 55255.5,
            "impact_pct": -0.002758,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 4.58,
            "pct_of_adv": 0.74
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 8829550.19,
            "impact_pct": -0.0070550000000000005,
            "filled_pct": 13.7,
            "levels_consumed": 10,
            "pct_of_bid_depth": 731.63,
            "pct_of_adv": 117.99
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
            "order_id": "4477524227.0",
            "timestamp": "2026-04-10 07:28:44.294000000",
            "local_timestamp": "2026-04-10 15:28:44",
            "posted_price": 118.9,
            "size_shares": 3000.0,
            "notional": 356700.0,
            "impact_pct": -0.003292,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 29.56,
            "price_vs_mid_pct": 0.763,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "4469958915.0",
            "timestamp": "2026-04-10 07:27:43.947000000",
            "local_timestamp": "2026-04-10 15:27:43",
            "posted_price": 118.8,
            "size_shares": 3000.0,
            "notional": 356400.0,
            "impact_pct": -0.003292,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 29.53,
            "price_vs_mid_pct": 0.678,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 3,
            "order_id": "4339663363.0",
            "timestamp": "2026-04-10 07:12:14.667000000",
            "local_timestamp": "2026-04-10 15:12:14",
            "posted_price": 118.7,
            "size_shares": 3000.0,
            "notional": 356100.0,
            "impact_pct": -0.003292,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 29.51,
            "price_vs_mid_pct": 0.593,
            "executed_event_count": 0,
            "event_count": 3
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-10",
        "bucket_minutes": 30,
        "tick_size": 0.1,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.005084745762711816,
            "spread_ticks": 5.999999999999943,
            "bid_depth_notional": 855855.0,
            "ask_depth_notional": 569880.0,
            "mid_price": 118.0
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0016949152542371918,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 803645.0,
            "ask_depth_notional": 629360.0,
            "mid_price": 118.0
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.003392705682781946,
            "spread_ticks": 3.9999999999999147,
            "bid_depth_notional": 785100.0,
            "ask_depth_notional": 825545.0,
            "mid_price": 117.9
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.003392705682781946,
            "spread_ticks": 3.9999999999999147,
            "bid_depth_notional": 785055.0,
            "ask_depth_notional": 849135.0,
            "mid_price": 117.9
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.004231908590774439,
            "spread_ticks": 5.0,
            "bid_depth_notional": 725930.0,
            "ask_depth_notional": 694875.0,
            "mid_price": 118.15
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.004235493434985176,
            "spread_ticks": 5.0,
            "bid_depth_notional": 925745.0,
            "ask_depth_notional": 777390.0,
            "mid_price": 118.05
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.00338696020321754,
            "spread_ticks": 3.9999999999999147,
            "bid_depth_notional": 704255.0,
            "ask_depth_notional": 753845.0,
            "mid_price": 118.1
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0008485362749258255,
            "spread_ticks": 1.0000000000000853,
            "bid_depth_notional": 878805.0,
            "ask_depth_notional": 550355.0,
            "mid_price": 117.85
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0033898305084746243,
            "spread_ticks": 4.000000000000057,
            "bid_depth_notional": 1806080.0,
            "ask_depth_notional": 1633470.0,
            "mid_price": 118.0
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.002530577815267795,
            "spread_ticks": 2.9999999999999716,
            "bid_depth_notional": 848415.0,
            "ask_depth_notional": 1548715.0,
            "mid_price": 118.55000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.005084745762711816,
            "spread_ticks": 5.999999999999943,
            "bid_depth_notional": 1206825.0,
            "ask_depth_notional": 1307300.0,
            "mid_price": 118.0
          }
        ],
        "summary": {
          "median_spread_pct": 0.003392705682781946,
          "median_spread_ticks": 3.9999999999999147,
          "median_bid_depth_notional": 848415.0,
          "median_ask_depth_notional": 777390.0,
          "tightest_bucket": "14:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "14:30",
          "thinnest_bid_bucket": "13:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.7,
      "peers": [
        {
          "ticker": "6060",
          "pct": 0.8
        },
        {
          "ticker": "6963",
          "pct": 1.7
        },
        {
          "ticker": "1508",
          "pct": 3.0
        },
        {
          "ticker": "376",
          "pct": 4.0
        },
        {
          "ticker": "1828",
          "pct": 11.6
        },
        {
          "ticker": "82318",
          "pct": 25.4
        },
        {
          "ticker": "945",
          "pct": 57.7
        },
        {
          "ticker": "81299",
          "pct": 336.5
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 942,
          "n_runs": 617,
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
            "retail_pct": 0.01167728237791932,
            "mixed_pct": 0.0,
            "instit_pct": 0.346072186836518,
            "ambiguous_pct": 0.06263269639065817,
            "unobservable_pct": 0.5796178343949044,
            "unclear_pct": 0.6422505307855626,
            "retail_qty_pct": 0.006261869321973002,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5017194477236565,
            "ambiguous_qty_pct": 0.043114510085715756,
            "unobservable_qty_pct": 0.44890417286865475,
            "unclear_qty_pct": 0.4920186829543705,
            "retail_notional_pct": 0.006253498726770793,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5010563150756657,
            "ambiguous_notional_pct": 0.04310597686799278,
            "unobservable_notional_pct": 0.44958420932957066,
            "unclear_notional_pct": 0.49269018619756344
          },
          "run_composition": {
            "retail_pct": 0.017828200972447326,
            "mixed_pct": 0.0,
            "instit_pct": 0.1507293354943274,
            "ambiguous_pct": 0.05186385737439222,
            "unobservable_pct": 0.779578606158833,
            "unclear_pct": 0.8314424635332253,
            "retail_notional_pct": 0.006253498726770793,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5010563150756657,
            "unclear_notional_pct": 0.49269018619756344
          },
          "counts": {
            "trades": {
              "retail": 11,
              "mixed": 0,
              "institutional": 326,
              "ambiguous": 59,
              "unobservable": 546,
              "unclear": 605
            },
            "runs": {
              "retail": 11,
              "mixed": 0,
              "institutional": 93,
              "ambiguous": 32,
              "unobservable": 481,
              "unclear": 513
            }
          },
          "confidence": {
            "high": 0.08914100486223663,
            "medium": 0.07941653160453808,
            "low": 0.0,
            "na": 0.8314424635332253
          },
          "confidence_counts": {
            "high": 55,
            "medium": 49,
            "low": 0,
            "na": 513
          },
          "trade_confidence": {
            "high": 0.22929936305732485,
            "medium": 0.12845010615711253,
            "low": 0.0,
            "na": 0.6422505307855626
          },
          "trade_confidence_counts": {
            "high": 216,
            "medium": 121,
            "low": 0,
            "na": 605
          },
          "observability": {
            "avg_feature_coverage": 0.6022690437601296,
            "observable_run_pct": 0.220421393841167,
            "ambiguous_run_pct": 0.05186385737439222,
            "unobservable_run_pct": 0.779578606158833
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.779578606158833,
          "dominance_gap": 0.6288492706645056,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 942
            },
            "d2_information": {
              "UNOBSERVABLE": 942
            },
            "d3_urgency": {
              "IMMEDIATE": 614,
              "ADAPTIVE": 3
            },
            "participant_confidence": {
              "NA": 513,
              "HIGH": 55,
              "MEDIUM": 49
            }
          },
          "trade_size": {
            "avg": 9766.405414012737,
            "median": 5915.0
          },
          "run_size": {
            "avg": 14910.784278768231,
            "median": 5920.0,
            "avg_length": 1.526742301458671
          },
          "recent_trades": [
            {
              "trade_id": "943",
              "timestamp": "2026-04-10T07:59:13.616642",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 43465,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "942",
              "timestamp": "2026-04-10T07:59:05.242513",
              "price": 118.2,
              "size": 1250.0,
              "notional": 147750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43464,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "941",
              "timestamp": "2026-04-10T07:59:05.242178",
              "price": 118.2,
              "size": 600.0,
              "notional": 70920.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43464,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "940",
              "timestamp": "2026-04-10T07:58:46.669572",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "939",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 100.0,
              "notional": 11820.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "938",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 200.0,
              "notional": 23640.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "937",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "936",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "935",
              "timestamp": "2026-04-10T07:58:34.544112",
              "price": 118.1,
              "size": 450.0,
              "notional": 53145.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43462,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "934",
              "timestamp": "2026-04-10T07:58:34.543621",
              "price": 118.1,
              "size": 600.0,
              "notional": 70860.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43462,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "933",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 100.0,
              "notional": 11810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "932",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 100.0,
              "notional": 11810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "931",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 200.0,
              "notional": 23620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "930",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 50.0,
              "notional": 5905.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "929",
              "timestamp": "2026-04-10T07:57:47.507345",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "928",
              "timestamp": "2026-04-10T07:57:47.501397",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "927",
              "timestamp": "2026-04-10T07:57:47.501060",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "926",
              "timestamp": "2026-04-10T07:57:39.640390",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43459,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "925",
              "timestamp": "2026-04-10T07:56:46.270031",
              "price": 117.9,
              "size": 150.0,
              "notional": 17685.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43458,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "924",
              "timestamp": "2026-04-10T07:55:50.579768",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "923",
              "timestamp": "2026-04-10T07:55:50.012166",
              "price": 117.9,
              "size": 200.0,
              "notional": 23580.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "922",
              "timestamp": "2026-04-10T07:53:21.116940",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "921",
              "timestamp": "2026-04-10T07:53:21.116609",
              "price": 117.8,
              "size": 150.0,
              "notional": 17670.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "920",
              "timestamp": "2026-04-10T07:53:10.190474",
              "price": 117.9,
              "size": 400.0,
              "notional": 47160.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43455,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "919",
              "timestamp": "2026-04-10T07:52:30.176208",
              "price": 117.9,
              "size": 150.0,
              "notional": 17685.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43454,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "918",
              "timestamp": "2026-04-10T07:52:20.314584",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "917",
              "timestamp": "2026-04-10T07:52:20.314584",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "916",
              "timestamp": "2026-04-10T07:51:43.281262",
              "price": 117.9,
              "size": 200.0,
              "notional": 23580.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43452,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "915",
              "timestamp": "2026-04-10T07:50:17.499596",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 43451,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "914",
              "timestamp": "2026-04-10T07:49:46.340583",
              "price": 118.3,
              "size": 50.0,
              "notional": 5915.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43450,
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
          "n_trades": 13687,
          "n_runs": 5198,
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
            "retail_pct": 0.09417695623584423,
            "mixed_pct": 0.0,
            "instit_pct": 0.50573536932856,
            "ambiguous_pct": 0.2110762036969387,
            "unobservable_pct": 0.18901147073865712,
            "unclear_pct": 0.4000876744355958,
            "retail_qty_pct": 0.04713087813246541,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.612310742706279,
            "ambiguous_qty_pct": 0.17676270488955872,
            "unobservable_qty_pct": 0.16379567427169678,
            "unclear_qty_pct": 0.34055837916125553,
            "retail_notional_pct": 0.046642889966380434,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6122141747231346,
            "ambiguous_notional_pct": 0.17659260404150803,
            "unobservable_notional_pct": 0.16455033126897706,
            "unclear_notional_pct": 0.3411429353104851
          },
          "run_composition": {
            "retail_pct": 0.2360523278183917,
            "mixed_pct": 0.0,
            "instit_pct": 0.2116198537899192,
            "ambiguous_pct": 0.2431704501731435,
            "unobservable_pct": 0.3091573682185456,
            "unclear_pct": 0.5523278183916891,
            "retail_notional_pct": 0.046642889966380434,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6122141747231346,
            "unclear_notional_pct": 0.3411429353104851
          },
          "counts": {
            "trades": {
              "retail": 1289,
              "mixed": 0,
              "institutional": 6922,
              "ambiguous": 2889,
              "unobservable": 2587,
              "unclear": 5476
            },
            "runs": {
              "retail": 1227,
              "mixed": 0,
              "institutional": 1100,
              "ambiguous": 1264,
              "unobservable": 1607,
              "unclear": 2871
            }
          },
          "confidence": {
            "high": 0.028664871104270875,
            "medium": 0.22547133512889572,
            "low": 0.19353597537514428,
            "na": 0.5523278183916891
          },
          "confidence_counts": {
            "high": 149,
            "medium": 1172,
            "low": 1006,
            "na": 2871
          },
          "trade_confidence": {
            "high": 0.05581939066267261,
            "medium": 0.3365237086286257,
            "low": 0.20756922627310587,
            "na": 0.40008767443559584
          },
          "trade_confidence_counts": {
            "high": 764,
            "medium": 4606,
            "low": 2841,
            "na": 5476
          },
          "observability": {
            "avg_feature_coverage": 0.6836667949211235,
            "observable_run_pct": 0.6908426317814544,
            "ambiguous_run_pct": 0.2431704501731435,
            "unobservable_run_pct": 0.3091573682185456
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Mixed, partly unobservable",
          "dominant_share": 0.3091573682185456,
          "dominance_gap": 0.0659869180454021,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 13687
            },
            "d2_information": {
              "UNOBSERVABLE": 13687
            },
            "d3_urgency": {
              "IMMEDIATE": 5086,
              "ADAPTIVE": 112
            },
            "participant_confidence": {
              "NA": 2871,
              "MEDIUM": 1172,
              "LOW": 1006,
              "HIGH": 149
            }
          },
          "trade_size": {
            "avg": 15336.561810477095,
            "median": 10600.0
          },
          "run_size": {
            "avg": 40383.13226240862,
            "median": 16515.0,
            "avg_length": 2.6331281262023856
          },
          "recent_trades": [
            {
              "trade_id": "943",
              "timestamp": "2026-04-10T07:59:13.616642",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 43465,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "942",
              "timestamp": "2026-04-10T07:59:05.242513",
              "price": 118.2,
              "size": 1250.0,
              "notional": 147750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43464,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "941",
              "timestamp": "2026-04-10T07:59:05.242178",
              "price": 118.2,
              "size": 600.0,
              "notional": 70920.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43464,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "940",
              "timestamp": "2026-04-10T07:58:46.669572",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "939",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 100.0,
              "notional": 11820.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "938",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 200.0,
              "notional": 23640.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "937",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "936",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "935",
              "timestamp": "2026-04-10T07:58:34.544112",
              "price": 118.1,
              "size": 450.0,
              "notional": 53145.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43462,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "934",
              "timestamp": "2026-04-10T07:58:34.543621",
              "price": 118.1,
              "size": 600.0,
              "notional": 70860.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43462,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "933",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 100.0,
              "notional": 11810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "932",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 100.0,
              "notional": 11810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "931",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 200.0,
              "notional": 23620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "930",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 50.0,
              "notional": 5905.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "929",
              "timestamp": "2026-04-10T07:57:47.507345",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "928",
              "timestamp": "2026-04-10T07:57:47.501397",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "927",
              "timestamp": "2026-04-10T07:57:47.501060",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "926",
              "timestamp": "2026-04-10T07:57:39.640390",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43459,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "925",
              "timestamp": "2026-04-10T07:56:46.270031",
              "price": 117.9,
              "size": 150.0,
              "notional": 17685.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43458,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "924",
              "timestamp": "2026-04-10T07:55:50.579768",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "923",
              "timestamp": "2026-04-10T07:55:50.012166",
              "price": 117.9,
              "size": 200.0,
              "notional": 23580.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "922",
              "timestamp": "2026-04-10T07:53:21.116940",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "921",
              "timestamp": "2026-04-10T07:53:21.116609",
              "price": 117.8,
              "size": 150.0,
              "notional": 17670.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "920",
              "timestamp": "2026-04-10T07:53:10.190474",
              "price": 117.9,
              "size": 400.0,
              "notional": 47160.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43455,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "919",
              "timestamp": "2026-04-10T07:52:30.176208",
              "price": 117.9,
              "size": 150.0,
              "notional": 17685.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43454,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "918",
              "timestamp": "2026-04-10T07:52:20.314584",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "917",
              "timestamp": "2026-04-10T07:52:20.314584",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "916",
              "timestamp": "2026-04-10T07:51:43.281262",
              "price": 117.9,
              "size": 200.0,
              "notional": 23580.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43452,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "915",
              "timestamp": "2026-04-10T07:50:17.499596",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 43451,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "914",
              "timestamp": "2026-04-10T07:49:46.340583",
              "price": 118.3,
              "size": 50.0,
              "notional": 5915.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43450,
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
          "n_trades": 40669,
          "n_runs": 13861,
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
            "retail_pct": 0.060144090093191376,
            "mixed_pct": 0.0,
            "instit_pct": 0.5650249575844009,
            "ambiguous_pct": 0.17177702918684992,
            "unobservable_pct": 0.20305392313555778,
            "unclear_pct": 0.3748309523224077,
            "retail_qty_pct": 0.02826427300037349,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6773229990750825,
            "ambiguous_qty_pct": 0.1396008476406238,
            "unobservable_qty_pct": 0.15481188028392023,
            "unclear_qty_pct": 0.29441272792454404,
            "retail_notional_pct": 0.027682929443968714,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6795128792436601,
            "ambiguous_notional_pct": 0.1381429505167316,
            "unobservable_notional_pct": 0.15466124079563956,
            "unclear_notional_pct": 0.2928041913123711
          },
          "run_composition": {
            "retail_pct": 0.16701536685664814,
            "mixed_pct": 0.0,
            "instit_pct": 0.23367722386552198,
            "ambiguous_pct": 0.20251064136786667,
            "unobservable_pct": 0.3967967679099632,
            "unclear_pct": 0.5993074092778299,
            "retail_notional_pct": 0.027682929443968714,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6795128792436601,
            "unclear_notional_pct": 0.2928041913123711
          },
          "counts": {
            "trades": {
              "retail": 2446,
              "mixed": 0,
              "institutional": 22979,
              "ambiguous": 6986,
              "unobservable": 8258,
              "unclear": 15244
            },
            "runs": {
              "retail": 2315,
              "mixed": 0,
              "institutional": 3239,
              "ambiguous": 2807,
              "unobservable": 5500,
              "unclear": 8307
            }
          },
          "confidence": {
            "high": 0.05547940264050213,
            "medium": 0.2061178847125027,
            "low": 0.13909530336916529,
            "na": 0.5993074092778299
          },
          "confidence_counts": {
            "high": 769,
            "medium": 2857,
            "low": 1928,
            "na": 8307
          },
          "trade_confidence": {
            "high": 0.11856696746907965,
            "medium": 0.34252133074331803,
            "low": 0.16408074946519463,
            "na": 0.3748309523224077
          },
          "trade_confidence_counts": {
            "high": 4822,
            "medium": 13930,
            "low": 6673,
            "na": 15244
          },
          "observability": {
            "avg_feature_coverage": 0.6720150061323137,
            "observable_run_pct": 0.6032032320900368,
            "ambiguous_run_pct": 0.20251064136786667,
            "unobservable_run_pct": 0.3967967679099632
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.3967967679099632,
          "dominance_gap": 0.16311954404444123,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 40669
            },
            "d2_information": {
              "UNOBSERVABLE": 40669
            },
            "d3_urgency": {
              "IMMEDIATE": 13440,
              "ADAPTIVE": 415,
              "SCHEDULED": 6
            },
            "participant_confidence": {
              "NA": 8307,
              "MEDIUM": 2857,
              "LOW": 1928,
              "HIGH": 769
            }
          },
          "trade_size": {
            "avg": 16760.41152966633,
            "median": 6480.0
          },
          "run_size": {
            "avg": 49176.046208787244,
            "median": 16255.0,
            "avg_length": 2.9340595916600534
          },
          "recent_trades": [
            {
              "trade_id": "943",
              "timestamp": "2026-04-10T07:59:13.616642",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 43465,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "942",
              "timestamp": "2026-04-10T07:59:05.242513",
              "price": 118.2,
              "size": 1250.0,
              "notional": 147750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43464,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "941",
              "timestamp": "2026-04-10T07:59:05.242178",
              "price": 118.2,
              "size": 600.0,
              "notional": 70920.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43464,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "940",
              "timestamp": "2026-04-10T07:58:46.669572",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "939",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 100.0,
              "notional": 11820.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "938",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 200.0,
              "notional": 23640.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "937",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "936",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "935",
              "timestamp": "2026-04-10T07:58:34.544112",
              "price": 118.1,
              "size": 450.0,
              "notional": 53145.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43462,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "934",
              "timestamp": "2026-04-10T07:58:34.543621",
              "price": 118.1,
              "size": 600.0,
              "notional": 70860.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43462,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "933",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 100.0,
              "notional": 11810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "932",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 100.0,
              "notional": 11810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "931",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 200.0,
              "notional": 23620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "930",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 50.0,
              "notional": 5905.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "929",
              "timestamp": "2026-04-10T07:57:47.507345",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "928",
              "timestamp": "2026-04-10T07:57:47.501397",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "927",
              "timestamp": "2026-04-10T07:57:47.501060",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "926",
              "timestamp": "2026-04-10T07:57:39.640390",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43459,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "925",
              "timestamp": "2026-04-10T07:56:46.270031",
              "price": 117.9,
              "size": 150.0,
              "notional": 17685.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43458,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "924",
              "timestamp": "2026-04-10T07:55:50.579768",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "923",
              "timestamp": "2026-04-10T07:55:50.012166",
              "price": 117.9,
              "size": 200.0,
              "notional": 23580.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "922",
              "timestamp": "2026-04-10T07:53:21.116940",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "921",
              "timestamp": "2026-04-10T07:53:21.116609",
              "price": 117.8,
              "size": 150.0,
              "notional": 17670.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "920",
              "timestamp": "2026-04-10T07:53:10.190474",
              "price": 117.9,
              "size": 400.0,
              "notional": 47160.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43455,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "919",
              "timestamp": "2026-04-10T07:52:30.176208",
              "price": 117.9,
              "size": 150.0,
              "notional": 17685.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43454,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "918",
              "timestamp": "2026-04-10T07:52:20.314584",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "917",
              "timestamp": "2026-04-10T07:52:20.314584",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "916",
              "timestamp": "2026-04-10T07:51:43.281262",
              "price": 117.9,
              "size": 200.0,
              "notional": 23580.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43452,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "915",
              "timestamp": "2026-04-10T07:50:17.499596",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 43451,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "914",
              "timestamp": "2026-04-10T07:49:46.340583",
              "price": 118.3,
              "size": 50.0,
              "notional": 5915.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43450,
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
          "n_trades": 78779,
          "n_runs": 26571,
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
            "retail_pct": 0.05963518196473679,
            "mixed_pct": 0.0,
            "instit_pct": 0.5541197527259802,
            "ambiguous_pct": 0.18865433681564883,
            "unobservable_pct": 0.1975907284936341,
            "unclear_pct": 0.38624506530928293,
            "retail_qty_pct": 0.027340327986285197,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6779703156160293,
            "ambiguous_qty_pct": 0.1455240402123214,
            "unobservable_qty_pct": 0.1491653161853642,
            "unclear_qty_pct": 0.29468935639768556,
            "retail_notional_pct": 0.027119328032729508,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6789162993689227,
            "ambiguous_notional_pct": 0.144911234466655,
            "unobservable_notional_pct": 0.14905313813169277,
            "unclear_notional_pct": 0.29396437259834773
          },
          "run_composition": {
            "retail_pct": 0.16585751383086825,
            "mixed_pct": 0.0,
            "instit_pct": 0.22991231041360882,
            "ambiguous_pct": 0.21655187986903016,
            "unobservable_pct": 0.3876782958864928,
            "unclear_pct": 0.604230175755523,
            "retail_notional_pct": 0.027119328032729508,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6789162993689227,
            "unclear_notional_pct": 0.29396437259834773
          },
          "counts": {
            "trades": {
              "retail": 4698,
              "mixed": 0,
              "institutional": 43653,
              "ambiguous": 14862,
              "unobservable": 15566,
              "unclear": 30428
            },
            "runs": {
              "retail": 4407,
              "mixed": 0,
              "institutional": 6109,
              "ambiguous": 5754,
              "unobservable": 10301,
              "unclear": 16055
            }
          },
          "confidence": {
            "high": 0.04749538971058673,
            "medium": 0.20703022091754167,
            "low": 0.14124421361634865,
            "na": 0.604230175755523
          },
          "confidence_counts": {
            "high": 1262,
            "medium": 5501,
            "low": 3753,
            "na": 16055
          },
          "trade_confidence": {
            "high": 0.092994325899034,
            "medium": 0.3508295357899948,
            "low": 0.16993107300168828,
            "na": 0.38624506530928293
          },
          "trade_confidence_counts": {
            "high": 7326,
            "medium": 27638,
            "low": 13387,
            "na": 30428
          },
          "observability": {
            "avg_feature_coverage": 0.6769805426969253,
            "observable_run_pct": 0.6123217041135072,
            "ambiguous_run_pct": 0.21655187986903016,
            "unobservable_run_pct": 0.3876782958864928
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.3876782958864928,
          "dominance_gap": 0.15776598547288395,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 78779
            },
            "d2_information": {
              "UNOBSERVABLE": 78779
            },
            "d3_urgency": {
              "IMMEDIATE": 25849,
              "ADAPTIVE": 715,
              "SCHEDULED": 7
            },
            "participant_confidence": {
              "NA": 16055,
              "MEDIUM": 5501,
              "LOW": 3753,
              "HIGH": 1262
            }
          },
          "trade_size": {
            "avg": 16524.19014585105,
            "median": 6434.999999999999
          },
          "run_size": {
            "avg": 48991.726901509166,
            "median": 16380.0,
            "avg_length": 2.964848895412292
          },
          "recent_trades": [
            {
              "trade_id": "943",
              "timestamp": "2026-04-10T07:59:13.616642",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 43465,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "942",
              "timestamp": "2026-04-10T07:59:05.242513",
              "price": 118.2,
              "size": 1250.0,
              "notional": 147750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43464,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "941",
              "timestamp": "2026-04-10T07:59:05.242178",
              "price": 118.2,
              "size": 600.0,
              "notional": 70920.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43464,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "940",
              "timestamp": "2026-04-10T07:58:46.669572",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "939",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 100.0,
              "notional": 11820.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "938",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 200.0,
              "notional": 23640.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "937",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "936",
              "timestamp": "2026-04-10T07:58:46.669254",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43463,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "935",
              "timestamp": "2026-04-10T07:58:34.544112",
              "price": 118.1,
              "size": 450.0,
              "notional": 53145.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43462,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "934",
              "timestamp": "2026-04-10T07:58:34.543621",
              "price": 118.1,
              "size": 600.0,
              "notional": 70860.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43462,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "933",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 100.0,
              "notional": 11810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "932",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 100.0,
              "notional": 11810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "931",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 200.0,
              "notional": 23620.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "930",
              "timestamp": "2026-04-10T07:58:27.454091",
              "price": 118.1,
              "size": 50.0,
              "notional": 5905.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43461,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "929",
              "timestamp": "2026-04-10T07:57:47.507345",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "928",
              "timestamp": "2026-04-10T07:57:47.501397",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "927",
              "timestamp": "2026-04-10T07:57:47.501060",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43460,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "926",
              "timestamp": "2026-04-10T07:57:39.640390",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43459,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "925",
              "timestamp": "2026-04-10T07:56:46.270031",
              "price": 117.9,
              "size": 150.0,
              "notional": 17685.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43458,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "924",
              "timestamp": "2026-04-10T07:55:50.579768",
              "price": 118.2,
              "size": 50.0,
              "notional": 5910.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "923",
              "timestamp": "2026-04-10T07:55:50.012166",
              "price": 117.9,
              "size": 200.0,
              "notional": 23580.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 43457,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "922",
              "timestamp": "2026-04-10T07:53:21.116940",
              "price": 117.8,
              "size": 50.0,
              "notional": 5890.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "921",
              "timestamp": "2026-04-10T07:53:21.116609",
              "price": 117.8,
              "size": 150.0,
              "notional": 17670.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 43456,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "920",
              "timestamp": "2026-04-10T07:53:10.190474",
              "price": 117.9,
              "size": 400.0,
              "notional": 47160.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43455,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "919",
              "timestamp": "2026-04-10T07:52:30.176208",
              "price": 117.9,
              "size": 150.0,
              "notional": 17685.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43454,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "918",
              "timestamp": "2026-04-10T07:52:20.314584",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "917",
              "timestamp": "2026-04-10T07:52:20.314584",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43453,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "916",
              "timestamp": "2026-04-10T07:51:43.281262",
              "price": 117.9,
              "size": 200.0,
              "notional": 23580.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 43452,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "915",
              "timestamp": "2026-04-10T07:50:17.499596",
              "price": 117.9,
              "size": 50.0,
              "notional": 5895.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 43451,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "914",
              "timestamp": "2026-04-10T07:49:46.340583",
              "price": 118.3,
              "size": 50.0,
              "notional": 5915.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 43450,
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
      "n_trades": 78779,
      "n_runs": 26571,
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
        "retail_pct": 0.05963518196473679,
        "mixed_pct": 0.0,
        "instit_pct": 0.5541197527259802,
        "ambiguous_pct": 0.18865433681564883,
        "unobservable_pct": 0.1975907284936341,
        "unclear_pct": 0.38624506530928293,
        "retail_qty_pct": 0.027340327986285197,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.6779703156160293,
        "ambiguous_qty_pct": 0.1455240402123214,
        "unobservable_qty_pct": 0.1491653161853642,
        "unclear_qty_pct": 0.29468935639768556,
        "retail_notional_pct": 0.027119328032729508,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.6789162993689227,
        "ambiguous_notional_pct": 0.144911234466655,
        "unobservable_notional_pct": 0.14905313813169277,
        "unclear_notional_pct": 0.29396437259834773
      },
      "run_composition": {
        "retail_pct": 0.16585751383086825,
        "mixed_pct": 0.0,
        "instit_pct": 0.22991231041360882,
        "ambiguous_pct": 0.21655187986903016,
        "unobservable_pct": 0.3876782958864928,
        "unclear_pct": 0.604230175755523
      },
      "trade_size": {
        "avg": 16524.19014585105,
        "median": 6434.999999999999
      },
      "run_size": {
        "avg": 48991.726901509166,
        "median": 16380.0,
        "avg_length": 2.964848895412292
      },
      "confidence": {
        "high": 0.04749538971058673,
        "medium": 0.20703022091754167,
        "low": 0.14124421361634865,
        "na": 0.604230175755523
      },
      "confidence_counts": {
        "high": 1262,
        "medium": 5501,
        "low": 3753,
        "na": 16055
      },
      "trade_confidence": {
        "high": 0.092994325899034,
        "medium": 0.3508295357899948,
        "low": 0.16993107300168828,
        "na": 0.38624506530928293
      },
      "trade_confidence_counts": {
        "high": 7326,
        "medium": 27638,
        "low": 13387,
        "na": 30428
      },
      "counts": {
        "trades": {
          "retail": 4698,
          "mixed": 0,
          "institutional": 43653,
          "ambiguous": 14862,
          "unobservable": 15566,
          "unclear": 30428
        },
        "runs": {
          "retail": 4407,
          "mixed": 0,
          "institutional": 6109,
          "ambiguous": 5754,
          "unobservable": 10301,
          "unclear": 16055
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6769805426969253,
        "observable_run_pct": 0.6123217041135072,
        "ambiguous_run_pct": 0.21655187986903016,
        "unobservable_run_pct": 0.3876782958864928
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.3876782958864928,
      "dominance_gap": 0.15776598547288395,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 13907,
            "n_runs": 4730,
            "retail_pct": 0.0453728338246926,
            "mixed_pct": 0.0,
            "instit_pct": 0.5244840727691091,
            "ambiguous_pct": 0.19134248939383044,
            "unobservable_pct": 0.23880060401236788,
            "unclear_pct": 0.43014309340619833,
            "avg_trade_size": 15853.177514920542,
            "avg_run_notional": 46611.023192389,
            "retail_qty_pct": 0.021887703751317794,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6657256987234246,
            "ambiguous_qty_pct": 0.1405446900900354,
            "unobservable_qty_pct": 0.1718419074352222,
            "unclear_qty_pct": 0.3123865975252576,
            "retail_notional_pct": 0.021951343191351915,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6654097021919745,
            "ambiguous_notional_pct": 0.14101210459749167,
            "unobservable_notional_pct": 0.17162685001918201,
            "unclear_notional_pct": 0.3126389546166737,
            "run_retail_pct": 0.12050739957716702,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2167019027484144,
            "run_ambiguous_pct": 0.19661733615221988,
            "run_unobservable_pct": 0.46617336152219874,
            "run_unclear_pct": 0.6627906976744187,
            "avg_feature_coverage": 0.6648942917547569,
            "high_confidence_pct": 0.057928118393234675,
            "medium_confidence_pct": 0.1697674418604651,
            "low_confidence_pct": 0.10951374207188161,
            "na_confidence_pct": 0.6627906976744186,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 8991,
            "n_runs": 3129,
            "retail_pct": 0.06817929040151262,
            "mixed_pct": 0.0,
            "instit_pct": 0.5248581915248582,
            "ambiguous_pct": 0.21454788121454788,
            "unobservable_pct": 0.1924146368590813,
            "unclear_pct": 0.40696251807362915,
            "avg_trade_size": 15696.958647536423,
            "avg_run_notional": 45104.30015979546,
            "retail_qty_pct": 0.02754243073432415,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6594486218027487,
            "ambiguous_qty_pct": 0.1651726646029496,
            "unobservable_qty_pct": 0.14783628285997755,
            "unclear_qty_pct": 0.3130089474629272,
            "retail_notional_pct": 0.027461017394099254,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6596452862517401,
            "ambiguous_notional_pct": 0.16591134101148347,
            "unobservable_notional_pct": 0.14698235534267726,
            "unclear_notional_pct": 0.31289369635416076,
            "run_retail_pct": 0.19015659955257272,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.22690955576861618,
            "run_ambiguous_pct": 0.2339405560882071,
            "run_unobservable_pct": 0.348993288590604,
            "run_unclear_pct": 0.5829338446788112,
            "avg_feature_coverage": 0.6916586768935762,
            "high_confidence_pct": 0.02524768296580377,
            "medium_confidence_pct": 0.22371364653243847,
            "low_confidence_pct": 0.16810482582294664,
            "na_confidence_pct": 0.5829338446788112,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 15727,
            "n_runs": 4600,
            "retail_pct": 0.05099510396134037,
            "mixed_pct": 0.0,
            "instit_pct": 0.6231957779614675,
            "ambiguous_pct": 0.15667323710815795,
            "unobservable_pct": 0.16913588096903415,
            "unclear_pct": 0.3258091180771921,
            "avg_trade_size": 16427.09041139442,
            "avg_run_notional": 56162.793673913045,
            "retail_qty_pct": 0.02445333616135791,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7195383058795204,
            "ambiguous_qty_pct": 0.12540139318426968,
            "unobservable_qty_pct": 0.13060696477485198,
            "unclear_qty_pct": 0.2560083579591217,
            "retail_notional_pct": 0.024406766192432868,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7193551732573238,
            "ambiguous_notional_pct": 0.12516804850243674,
            "unobservable_notional_pct": 0.13107001204780663,
            "unclear_notional_pct": 0.25623806055024334,
            "run_retail_pct": 0.16369565217391305,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.24608695652173912,
            "run_ambiguous_pct": 0.18934782608695652,
            "run_unobservable_pct": 0.4008695652173913,
            "run_unclear_pct": 0.5902173913043478,
            "avg_feature_coverage": 0.677304347826087,
            "high_confidence_pct": 0.058478260869565216,
            "medium_confidence_pct": 0.20804347826086955,
            "low_confidence_pct": 0.14326086956521739,
            "na_confidence_pct": 0.5902173913043478,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 9698,
            "n_runs": 3142,
            "retail_pct": 0.04423592493297587,
            "mixed_pct": 0.0,
            "instit_pct": 0.5739327696432254,
            "ambiguous_pct": 0.1607547948030522,
            "unobservable_pct": 0.22107651062074654,
            "unclear_pct": 0.38183130542379873,
            "avg_trade_size": 19876.703701794184,
            "avg_run_notional": 61350.81874602164,
            "retail_qty_pct": 0.01760087166221565,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7039148605454746,
            "ambiguous_qty_pct": 0.12645261162140092,
            "unobservable_qty_pct": 0.15203165617090877,
            "unclear_qty_pct": 0.2784842677923097,
            "retail_notional_pct": 0.017714692436068515,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.70460083104871,
            "ambiguous_notional_pct": 0.12537589350225675,
            "unobservable_notional_pct": 0.1523085830129647,
            "unclear_notional_pct": 0.27768447651522143,
            "run_retail_pct": 0.1282622533418205,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.24156588160407383,
            "run_ambiguous_pct": 0.19032463399108848,
            "run_unobservable_pct": 0.4398472310630172,
            "run_unclear_pct": 0.6301718650541057,
            "avg_feature_coverage": 0.6635264162953534,
            "high_confidence_pct": 0.044239338001273075,
            "medium_confidence_pct": 0.2005092297899427,
            "low_confidence_pct": 0.12507956715467855,
            "na_confidence_pct": 0.6301718650541057,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 12683,
            "n_runs": 5125,
            "retail_pct": 0.09343215327603879,
            "mixed_pct": 0.0,
            "instit_pct": 0.511393203500749,
            "ambiguous_pct": 0.20113537806512655,
            "unobservable_pct": 0.19403926515808562,
            "unclear_pct": 0.39517464322321216,
            "avg_trade_size": 14182.980596073485,
            "avg_run_notional": 35099.07178536585,
            "retail_qty_pct": 0.047448248861400616,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6243458319085354,
            "ambiguous_qty_pct": 0.1668029516857218,
            "unobservable_qty_pct": 0.1614029675443422,
            "unclear_qty_pct": 0.328205919230064,
            "retail_notional_pct": 0.04716172081452066,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6247915980605163,
            "ambiguous_notional_pct": 0.1663134768666016,
            "unobservable_notional_pct": 0.16173320425836132,
            "unclear_notional_pct": 0.32804668112496294,
            "run_retail_pct": 0.22263414634146342,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.22809756097560976,
            "run_ambiguous_pct": 0.24253658536585365,
            "run_unobservable_pct": 0.30673170731707317,
            "run_unclear_pct": 0.5492682926829269,
            "avg_feature_coverage": 0.6821756097560977,
            "high_confidence_pct": 0.057951219512195125,
            "medium_confidence_pct": 0.22126829268292683,
            "low_confidence_pct": 0.17151219512195123,
            "na_confidence_pct": 0.5492682926829269,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 4596,
            "n_runs": 1541,
            "retail_pct": 0.04242819843342036,
            "mixed_pct": 0.0,
            "instit_pct": 0.5193646649260226,
            "ambiguous_pct": 0.19930374238468232,
            "unobservable_pct": 0.23890339425587467,
            "unclear_pct": 0.438207136640557,
            "avg_trade_size": 17595.95,
            "avg_run_notional": 52479.54977287476,
            "retail_qty_pct": 0.026555074386202346,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6200095982196576,
            "ambiguous_qty_pct": 0.1702749649268596,
            "unobservable_qty_pct": 0.1831603624672804,
            "unclear_qty_pct": 0.35343532739413996,
            "retail_notional_pct": 0.026244127835305164,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6195437480642471,
            "ambiguous_notional_pct": 0.1705194588068471,
            "unobservable_notional_pct": 0.18369266529360068,
            "unclear_notional_pct": 0.3542121241004478,
            "run_retail_pct": 0.10577547047371837,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.20960415314730693,
            "run_ambiguous_pct": 0.1836469824789098,
            "run_unobservable_pct": 0.5009733939000649,
            "run_unclear_pct": 0.6846203763789747,
            "avg_feature_coverage": 0.6597988319273199,
            "high_confidence_pct": 0.04412719013627515,
            "medium_confidence_pct": 0.16482803374432187,
            "low_confidence_pct": 0.10642439974042829,
            "na_confidence_pct": 0.6846203763789747,
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
          "trade_id": "943",
          "timestamp": "2026-04-10T07:59:13.616642",
          "price": 117.8,
          "size": 50.0,
          "notional": 5890.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 43465,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "942",
          "timestamp": "2026-04-10T07:59:05.242513",
          "price": 118.2,
          "size": 1250.0,
          "notional": 147750.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 43464,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "941",
          "timestamp": "2026-04-10T07:59:05.242178",
          "price": 118.2,
          "size": 600.0,
          "notional": 70920.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 43464,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "940",
          "timestamp": "2026-04-10T07:58:46.669572",
          "price": 118.2,
          "size": 50.0,
          "notional": 5910.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43463,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "939",
          "timestamp": "2026-04-10T07:58:46.669254",
          "price": 118.2,
          "size": 100.0,
          "notional": 11820.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43463,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "938",
          "timestamp": "2026-04-10T07:58:46.669254",
          "price": 118.2,
          "size": 200.0,
          "notional": 23640.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43463,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "937",
          "timestamp": "2026-04-10T07:58:46.669254",
          "price": 118.2,
          "size": 50.0,
          "notional": 5910.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43463,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "936",
          "timestamp": "2026-04-10T07:58:46.669254",
          "price": 118.2,
          "size": 50.0,
          "notional": 5910.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43463,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "935",
          "timestamp": "2026-04-10T07:58:34.544112",
          "price": 118.1,
          "size": 450.0,
          "notional": 53145.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 43462,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "934",
          "timestamp": "2026-04-10T07:58:34.543621",
          "price": 118.1,
          "size": 600.0,
          "notional": 70860.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 43462,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "933",
          "timestamp": "2026-04-10T07:58:27.454091",
          "price": 118.1,
          "size": 100.0,
          "notional": 11810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43461,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "932",
          "timestamp": "2026-04-10T07:58:27.454091",
          "price": 118.1,
          "size": 100.0,
          "notional": 11810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43461,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "931",
          "timestamp": "2026-04-10T07:58:27.454091",
          "price": 118.1,
          "size": 200.0,
          "notional": 23620.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43461,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "930",
          "timestamp": "2026-04-10T07:58:27.454091",
          "price": 118.1,
          "size": 50.0,
          "notional": 5905.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43461,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "929",
          "timestamp": "2026-04-10T07:57:47.507345",
          "price": 117.8,
          "size": 50.0,
          "notional": 5890.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43460,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "928",
          "timestamp": "2026-04-10T07:57:47.501397",
          "price": 117.8,
          "size": 50.0,
          "notional": 5890.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43460,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "927",
          "timestamp": "2026-04-10T07:57:47.501060",
          "price": 117.8,
          "size": 50.0,
          "notional": 5890.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43460,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "926",
          "timestamp": "2026-04-10T07:57:39.640390",
          "price": 117.9,
          "size": 50.0,
          "notional": 5895.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 43459,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "925",
          "timestamp": "2026-04-10T07:56:46.270031",
          "price": 117.9,
          "size": 150.0,
          "notional": 17685.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 43458,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "924",
          "timestamp": "2026-04-10T07:55:50.579768",
          "price": 118.2,
          "size": 50.0,
          "notional": 5910.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 43457,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "923",
          "timestamp": "2026-04-10T07:55:50.012166",
          "price": 117.9,
          "size": 200.0,
          "notional": 23580.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 43457,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "922",
          "timestamp": "2026-04-10T07:53:21.116940",
          "price": 117.8,
          "size": 50.0,
          "notional": 5890.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43456,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "921",
          "timestamp": "2026-04-10T07:53:21.116609",
          "price": 117.8,
          "size": 150.0,
          "notional": 17670.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 43456,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "920",
          "timestamp": "2026-04-10T07:53:10.190474",
          "price": 117.9,
          "size": 400.0,
          "notional": 47160.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 43455,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "919",
          "timestamp": "2026-04-10T07:52:30.176208",
          "price": 117.9,
          "size": 150.0,
          "notional": 17685.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 43454,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "918",
          "timestamp": "2026-04-10T07:52:20.314584",
          "price": 117.9,
          "size": 50.0,
          "notional": 5895.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 43453,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "917",
          "timestamp": "2026-04-10T07:52:20.314584",
          "price": 117.9,
          "size": 50.0,
          "notional": 5895.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 43453,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "916",
          "timestamp": "2026-04-10T07:51:43.281262",
          "price": 117.9,
          "size": 200.0,
          "notional": 23580.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 43452,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "915",
          "timestamp": "2026-04-10T07:50:17.499596",
          "price": 117.9,
          "size": 50.0,
          "notional": 5895.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 43451,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "914",
          "timestamp": "2026-04-10T07:49:46.340583",
          "price": 118.3,
          "size": 50.0,
          "notional": 5915.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 43450,
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
      "total_trades": 78778,
      "price_moving_trades": 22047,
      "pct_price_moving": 27.9862398131458,
      "all_movers": {
        "count": 22047,
        "avg_size": 16727.485104549374,
        "median_size": 6310.0,
        "retail_count": 1784,
        "mixed_count": 0,
        "institutional_count": 10257,
        "ambiguous_count": 4960,
        "unobservable_count": 5046,
        "retail_pct": 8.091803873542885,
        "mixed_pct": 0.0,
        "instit_pct": 46.52333650836849,
        "unclear_pct": 45.384859618088626
      },
      "positive_movers": {
        "count": 11094,
        "avg_size": 16909.38842617631,
        "median_size": 6360.0,
        "retail_count": 273,
        "mixed_count": 0,
        "institutional_count": 4960,
        "ambiguous_count": 2039,
        "unobservable_count": 3822,
        "retail_pct": 2.4607896160086535,
        "mixed_pct": 0.0,
        "instit_pct": 44.70885163151253,
        "unclear_pct": 52.830358752478816
      },
      "negative_movers": {
        "count": 10953,
        "avg_size": 16543.24010773304,
        "median_size": 6280.0,
        "retail_count": 1511,
        "mixed_count": 0,
        "institutional_count": 5297,
        "ambiguous_count": 2921,
        "unobservable_count": 1224,
        "retail_pct": 13.795307221765727,
        "mixed_pct": 0.0,
        "instit_pct": 48.36117958550169,
        "unclear_pct": 37.84351319273258
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
          "opening": 0.00034330701913969384,
          "continuous": 0.9946803196264112,
          "closing": 0.0046304027463677615,
          "auctions": 0.004973709765507455,
          "other": 0.00034597060808129487
        },
        "1M": {
          "opening": 0.002643076899489309,
          "continuous": 0.8203218670844964,
          "closing": 0.10387885493723593,
          "auctions": 0.10652193183672524,
          "other": 0.07315620107877845
        },
        "3M": {
          "opening": 0.005305466612707512,
          "continuous": 0.8773414880811341,
          "closing": 0.0706825771495062,
          "auctions": 0.07598804376221371,
          "other": 0.04667046815665212
        },
        "6M": {
          "opening": 0.005060683707300374,
          "continuous": 0.8377712039236044,
          "closing": 0.05815015370178722,
          "auctions": 0.06321083740908759,
          "other": 0.09901795866730799
        }
      },
      "hhi": {
        "1D": 0.1476240930706201,
        "1M": 0.20492971980354033,
        "3M": 0.19732056212052135,
        "6M": 0.20291471291040103
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.008
        },
        {
          "time": "09:30",
          "avg_share": 0.1355
        },
        {
          "time": "10:00",
          "avg_share": 0.0489
        },
        {
          "time": "10:30",
          "avg_share": 0.049
        },
        {
          "time": "11:00",
          "avg_share": 0.032
        },
        {
          "time": "11:30",
          "avg_share": 0.0339
        },
        {
          "time": "12:00",
          "avg_share": 0.033
        },
        {
          "time": "13:00",
          "avg_share": 0.0763
        },
        {
          "time": "13:30",
          "avg_share": 0.0584
        },
        {
          "time": "14:00",
          "avg_share": 0.0543
        },
        {
          "time": "14:30",
          "avg_share": 0.0869
        },
        {
          "time": "15:00",
          "avg_share": 0.1091
        },
        {
          "time": "15:30",
          "avg_share": 0.248
        },
        {
          "time": "16:00",
          "avg_share": 0.0267
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "2378",
          "auctions_pct": 4.939045829415735,
          "hhi": 0.20030502136907855,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "1828",
          "auctions_pct": 8.119112574207602,
          "hhi": 0.16845816850331305,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "82318",
          "auctions_pct": 0.2198051610622286,
          "hhi": 0.22639527064409376,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "376",
          "auctions_pct": 1.215182626833692,
          "hhi": 0.15267618233266378,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "945",
          "auctions_pct": 2.7513794077598446,
          "hhi": 0.21872937033521028,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1508",
          "auctions_pct": 3.80325787630499,
          "hhi": 0.14733445841169251,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6963",
          "auctions_pct": 3.905162484396295,
          "hhi": 0.14292169635615176,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "81299",
          "auctions_pct": 3.828000468107545,
          "hhi": 0.5973668393005358,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "6060",
          "auctions_pct": 3.558182057854853,
          "hhi": 0.12443163653605885,
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
