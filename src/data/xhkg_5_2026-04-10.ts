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
      "marketCap": 2400541426352.3,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "939",
      "name": "CCB",
      "marketCap": 2031526352985.9998,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "1398",
      "name": "ICBC",
      "marketCap": 604954490513.5,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "3988",
      "name": "BANK OF CHINA",
      "marketCap": 421456273030.8,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "3968",
      "name": "CM BANK",
      "marketCap": 229545058600.0,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "1288",
      "name": "ABC",
      "marketCap": 177977785725.84,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "998",
      "name": "CITIC BANK",
      "marketCap": 117717909148.07,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "2888",
      "name": "STANCHART",
      "marketCap": 404471959930.5,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "1658",
      "name": "PSBC",
      "marketCap": 98288026650.0,
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
    "asof_date": "2026-04-10",
    "industry": "Financials - Banks",
    "sector": "Banks",
    "market_cap_display": "2400.5B",
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
          "score_pca": 94.05594405594405,
          "score_pca_percentile": 94.05594405594405,
          "rank_pca": 154,
          "total": 2574,
          "adv_notional_sgd": 2336080862.5,
          "adv_volume_shares": 16722125.0,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0009736181348475656,
          "votes": 10059.0,
          "trades": 10059.0,
          "spread_pct": 0.0007755532236819676,
          "spread_ticks": 1.0846991646399493,
          "amihud": 2.4654708359270293e-12,
          "volatility": 0.1843290977615709
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
          "peer_median_adv": 383976212.5,
          "peer_median_score_pca": 89.16083916083917,
          "peer_median_trades": 6269.5,
          "peer_median_volatility": 0.16850952960063761,
          "peer_median_spread_pct": 0.0016176259237513672,
          "peer_median_spread_ticks": 1.0231460470182445,
          "peer_median_amihud": 8.200297413994516e-12,
          "peer_median_turnover_ratio": 0.002324445722970962,
          "target_vs_peer": {
            "score_pca_delta": 4.9,
            "adv_delta_pct": 508.4,
            "trades_delta_pct": 60.44,
            "volatility_delta_pct": -9.39,
            "spread_pct_delta_pct": 52.06,
            "spread_ticks_delta_pct": 6.02,
            "amihud_delta_pct": 69.93,
            "turnover_ratio_delta_pct": -58.11
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 94.05594405594405,
            "rank_pca": 154,
            "adv": 2336080862.5,
            "trades": 10059.0,
            "volatility": 0.1843290977615709,
            "spread_pct": 0.0007755532236819676,
            "spread_ticks": 1.0846991646399493,
            "amihud": 2.4654708359270293e-12,
            "turnover_ratio": 0.0009736181348475656,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 94.7940947940948,
            "rank_pca": 135,
            "adv": 1395758468.6499999,
            "trades": 11425.0,
            "volatility": 0.23821094681003815,
            "spread_pct": 0.0012103959907549834,
            "spread_ticks": 1.0229899711031787,
            "amihud": 0.0,
            "turnover_ratio": 0.0018360956614601148,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 94.36674436674437,
            "rank_pca": 146,
            "adv": 977300487.66,
            "trades": 12153.0,
            "volatility": 0.1792344566338764,
            "spread_pct": 0.001468313134718053,
            "spread_ticks": 1.0207967820617057,
            "amihud": 5.906070696665749e-12,
            "turnover_ratio": 0.002213509708750301,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 93.27894327894329,
            "rank_pca": 174,
            "adv": 794653579.44,
            "trades": 7366.0,
            "volatility": 0.2846066143911051,
            "spread_pct": 0.002013881746267644,
            "spread_ticks": 1.0125551408211741,
            "amihud": 2.5018091178516656e-12,
            "turnover_ratio": 0.0027971549843981616,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 88.92773892773893,
            "rank_pca": 286,
            "adv": 395033450.0,
            "trades": 4577.0,
            "volatility": 0.1319486183095695,
            "spread_pct": 0.0006439772347750087,
            "spread_ticks": null,
            "amihud": 5.052756884339766e-12,
            "turnover_ratio": 0.0030602567613953594,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 88.96658896658897,
            "rank_pca": 285,
            "adv": 303826822.32,
            "trades": 6020.0,
            "volatility": 0.1157608237336319,
            "spread_pct": 0.0017720729354532955,
            "spread_ticks": 1.0231460470182445,
            "amihud": 2.86702843653276e-11,
            "turnover_ratio": 0.0028400552090338056,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 83.02253302253303,
            "rank_pca": 438,
            "adv": 120617454.3,
            "trades": 2856.0,
            "volatility": 0.15778460256739882,
            "spread_pct": 0.0017669387127846813,
            "spread_ticks": 1.3916589434661724,
            "amihud": 1.0494524131323284e-11,
            "turnover_ratio": 0.001677417609341655,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 89.35508935508936,
            "rank_pca": 275,
            "adv": 372918975.0,
            "trades": 6519.0,
            "volatility": 0.26410590740547846,
            "spread_pct": 0.0010046120600913878,
            "spread_ticks": 1.8184522139289523,
            "amihud": 4.201641528877373e-11,
            "turnover_ratio": 0.0010973465500297955,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 82.2066822066822,
            "rank_pca": 459,
            "adv": 84521121.3,
            "trades": 2890.0,
            "volatility": 0.05772134825168955,
            "spread_pct": 0.002073625261758164,
            "spread_ticks": 1.0262212165579663,
            "amihud": 4.799741259284477e-11,
            "turnover_ratio": 0.0024353817371916228,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
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
              "mean": 0.13945388346548093,
              "median": 0.1412413027839655,
              "min": 0.0,
              "max": 0.2846066143911051,
              "p5": 0.0,
              "p95": 0.26795582631589315,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 194996692.80219907,
              "median": 6076520.0,
              "min": 0.0,
              "max": 2336080862.5,
              "p5": 0.0,
              "p95": 1060992083.8579981,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01965930360153383,
              "median": 0.003467282088954486,
              "min": 0.0006439772347750087,
              "max": 0.16553067185978573,
              "p5": 0.0009588002928095037,
              "p95": 0.09950342830613867,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019774209520402306,
              "median": 0.0011071248969662935,
              "min": 0.0,
              "max": 0.013512593830001574,
              "p5": 0.0,
              "p95": 0.006689581379873094,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6334827078982225e-06,
              "median": 1.5221858805082844e-10,
              "min": 0.0,
              "max": 5.433207765864972e-05,
              "p5": 0.0,
              "p95": 3.862847200750455e-07,
              "count": 34
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2174.675675675676,
              "median": 345.0,
              "min": 0.0,
              "max": 12153.0,
              "p5": 0.0,
              "p95": 10332.199999999993,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 555578794.83375,
              "median": 383976212.5,
              "min": 84521121.3,
              "max": 1395758468.6499999,
              "p5": 97154837.85,
              "p95": 1249298175.3034997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 6725.75,
              "median": 6269.5,
              "min": 2856.0,
              "max": 12153.0,
              "p5": 2867.9,
              "p95": 11898.199999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1786716647628485,
              "median": 0.16850952960063761,
              "min": 0.05772134825168955,
              "max": 0.2846066143911051,
              "p5": 0.07803516467036938,
              "p95": 0.27743136694613574,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0014942271345754021,
              "median": 0.0016176259237513672,
              "min": 0.0006439772347750087,
              "max": 0.002073625261758164,
              "p5": 0.0007701994236357413,
              "p95": 0.002052715031336482,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.1879743307081991,
              "median": 1.0231460470182445,
              "min": 1.0125551408211741,
              "max": 1.8184522139289523,
              "p5": 1.0150276331933337,
              "p95": 1.690414232790118,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.7829909134640822e-11,
              "median": 8.200297413994516e-12,
              "min": 0.0,
              "max": 4.799741259284477e-11,
              "p5": 8.756331912480831e-13,
              "p95": 4.5904063536419904e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002244652277700102,
              "median": 0.002324445722970962,
              "min": 0.0010973465500297955,
              "max": 0.0030602567613953594,
              "p5": 0.0013003714207889465,
              "p95": 0.0029831862180688157,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.005759539236861011,
            "market": 0.005388454653585173,
            "sector": 0.002358490566037652,
            "peers": 0.003022433351211218,
            "vs_market": 0.00037108458327583804,
            "vs_sector": 0.003401048670823359,
            "vs_peers": 0.002737105885649793
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 97.00854700854701,
          "score_pca_percentile": 97.00854700854701,
          "rank_pca": 78,
          "total": 2574,
          "adv_notional_sgd": 2336080862.5,
          "adv_volume_shares": 17917824.0,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0010432357360925688,
          "votes": 11816.0,
          "trades": 11816.0,
          "spread_pct": 0.0008704784094407152,
          "spread_ticks": 1.091278219912295,
          "amihud": 1.0182162275433757e-11,
          "volatility": 0.4669956070266988
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
          "peer_median_adv": 574461150.39,
          "peer_median_score_pca": 96.56177156177156,
          "peer_median_trades": 7553.5,
          "peer_median_volatility": 0.21633286824373732,
          "peer_median_spread_pct": 0.0016690034663344275,
          "peer_median_spread_ticks": 1.0611595857457392,
          "peer_median_amihud": 1.293456795964358e-11,
          "peer_median_turnover_ratio": 0.0042130529918116616,
          "target_vs_peer": {
            "score_pca_delta": 0.45,
            "adv_delta_pct": 306.7,
            "trades_delta_pct": 56.43,
            "volatility_delta_pct": -115.87,
            "spread_pct_delta_pct": 47.84,
            "spread_ticks_delta_pct": 2.84,
            "amihud_delta_pct": 21.28,
            "turnover_ratio_delta_pct": -75.24
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 97.00854700854701,
            "rank_pca": 78,
            "adv": 2336080862.5,
            "trades": 11816.0,
            "volatility": 0.4669956070266988,
            "spread_pct": 0.0008704784094407152,
            "spread_ticks": 1.091278219912295,
            "amihud": 1.0182162275433757e-11,
            "turnover_ratio": 0.0010432357360925688,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 98.79564879564879,
            "rank_pca": 32,
            "adv": 2085114067.83,
            "trades": 15440.0,
            "volatility": 0.218741484792817,
            "spread_pct": 0.0012618911693754893,
            "spread_ticks": 1.0229899711031787,
            "amihud": 4.587321756871219e-12,
            "turnover_ratio": 0.002864989525767373,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 98.4071484071484,
            "rank_pca": 42,
            "adv": 1568405954.88,
            "trades": 11866.0,
            "volatility": 0.21392425169465762,
            "spread_pct": 0.0015966599596973128,
            "spread_ticks": 1.0328778467908903,
            "amihud": 6.804631389029595e-12,
            "turnover_ratio": 0.003820934302837371,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 98.56254856254856,
            "rank_pca": 38,
            "adv": 1357898808.0,
            "trades": 12778.0,
            "volatility": 0.16036831775152077,
            "spread_pct": 0.002189380703693833,
            "spread_ticks": 1.0245970215851414,
            "amihud": 4.674008833497951e-12,
            "turnover_ratio": 0.005105187587977764,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 96.93084693084693,
            "rank_pca": 80,
            "adv": 694554185.7,
            "trades": 7360.0,
            "volatility": 0.18688810400757022,
            "spread_pct": 0.0005957156584162828,
            "spread_ticks": null,
            "amihud": 7.135732465309718e-12,
            "turnover_ratio": 0.005369853109260454,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 96.19269619269619,
            "rank_pca": 99,
            "adv": 454368115.08,
            "trades": 7747.0,
            "volatility": 0.22626909835683806,
            "spread_pct": 0.0020070842902263353,
            "spread_ticks": 1.0611595857457392,
            "amihud": 1.873340345397744e-11,
            "turnover_ratio": 0.004605171680785952,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 93.47319347319348,
            "rank_pca": 169,
            "adv": 244371054.42,
            "trades": 5032.0,
            "volatility": 0.2748666216361743,
            "spread_pct": 0.0017413469729715423,
            "spread_ticks": 1.3410413717162184,
            "amihud": 2.358398585689473e-11,
            "turnover_ratio": 0.0036425114372046047,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 86.05283605283606,
            "rank_pca": 360,
            "adv": 204379604.99999997,
            "trades": 3234.0,
            "volatility": 0.5461277221327984,
            "spread_pct": 0.0012770740098055637,
            "spread_ticks": 2.131377312651841,
            "amihud": 1.057372174780786e-10,
            "turnover_ratio": 0.0006697090533228832,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 91.37529137529138,
            "rank_pca": 223,
            "adv": 160065761.0,
            "trades": 2959.0,
            "volatility": 0.13019735996932139,
            "spread_pct": 0.002166388829461598,
            "spread_ticks": 1.0671182266009853,
            "amihud": 3.393202710609999e-11,
            "turnover_ratio": 0.004630826590343063,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
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
              "mean": 0.28427846410751084,
              "median": 0.257992486241209,
              "min": 0.13019735996932139,
              "max": 0.9709183659253714,
              "p5": 0.13849383180915587,
              "p95": 0.5096900428948914,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 260538053.95171723,
              "median": 10826640.0,
              "min": 0.0,
              "max": 2336080862.5,
              "p5": 0.0,
              "p95": 1671747577.469998,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.015468022641038333,
              "median": 0.0035131833605278203,
              "min": 0.0005957156584162828,
              "max": 0.08487654320987646,
              "p5": 0.0011836086173885344,
              "p95": 0.06382445852897312,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028921032624652254,
              "median": 0.0009821419207413937,
              "min": 0.0,
              "max": 0.02620250310414308,
              "p5": 0.0,
              "p95": 0.008491086005224675,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.3142744753710275e-07,
              "median": 9.795627575300167e-10,
              "min": 4.587321756871219e-12,
              "max": 8.482861743731326e-06,
              "p5": 6.378506877923267e-12,
              "p95": 9.339119440639294e-07,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2617.5945945945946,
              "median": 605.0,
              "min": 0.0,
              "max": 15440.0,
              "p5": 0.0,
              "p95": 12048.399999999996,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 846144693.98875,
              "median": 574461150.39,
              "min": 160065761.0,
              "max": 2085114067.83,
              "p5": 175575606.39999998,
              "p95": 1904266228.2974997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 8302.0,
              "median": 7553.5,
              "min": 2959.0,
              "max": 15440.0,
              "p5": 3055.25,
              "p95": 14508.3,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2446728700427122,
              "median": 0.21633286824373732,
              "min": 0.13019735996932139,
              "max": 0.5461277221327984,
              "p5": 0.14075719519309118,
              "p95": 0.4511863369589798,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0016044426992059945,
              "median": 0.0016690034663344275,
              "min": 0.0005957156584162828,
              "max": 0.002189380703693833,
              "p5": 0.0008288770872520051,
              "p95": 0.002181333547712551,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2401659051705707,
              "median": 1.0611595857457392,
              "min": 1.0229899711031787,
              "max": 2.131377312651841,
              "p5": 1.0234720862477675,
              "p95": 1.8942765303711537,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5648541042469903e-11,
              "median": 1.293456795964358e-11,
              "min": 4.587321756871219e-12,
              "max": 1.057372174780786e-10,
              "p5": 4.617662233690576e-12,
              "p95": 8.060540084788606e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003838647910937433,
              "median": 0.0042130529918116616,
              "min": 0.0006697090533228832,
              "max": 0.005369853109260454,
              "p5": 0.0014380572186784546,
              "p95": 0.0052772201768115125,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.07544264819091606,
            "market": 0.005817570896814672,
            "sector": 0.019888401383184817,
            "peers": 0.06236290761742547,
            "vs_market": 0.06962507729410139,
            "vs_sector": 0.055554246807731245,
            "vs_peers": 0.013079740573490595
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 97.04739704739704,
          "score_pca_percentile": 97.04739704739704,
          "rank_pca": 77,
          "total": 2574,
          "adv_notional_sgd": 2059379381.4,
          "adv_volume_shares": 15081463.0,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0008780932971636423,
          "votes": 10830.0,
          "trades": 10830.0,
          "spread_pct": 0.0008276186162499637,
          "spread_ticks": 1.0923226433430515,
          "amihud": 6.407060179181344e-12,
          "volatility": 0.38164309954713566
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
          "peer_median_adv": 587042614.4399999,
          "peer_median_score_pca": 97.02797202797203,
          "peer_median_trades": 7336.5,
          "peer_median_volatility": 0.20815648354055893,
          "peer_median_spread_pct": 0.0017230393541425235,
          "peer_median_spread_ticks": 1.0477218733859923,
          "peer_median_amihud": 1.3706165530604455e-11,
          "peer_median_turnover_ratio": 0.003211824452533492,
          "target_vs_peer": {
            "score_pca_delta": 0.02,
            "adv_delta_pct": 250.8,
            "trades_delta_pct": 47.62,
            "volatility_delta_pct": -83.34,
            "spread_pct_delta_pct": 51.97,
            "spread_ticks_delta_pct": 4.26,
            "amihud_delta_pct": 53.25,
            "turnover_ratio_delta_pct": -72.66
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 97.04739704739704,
            "rank_pca": 77,
            "adv": 2059379381.4,
            "trades": 10830.0,
            "volatility": 0.38164309954713566,
            "spread_pct": 0.0008276186162499637,
            "spread_ticks": 1.0923226433430515,
            "amihud": 6.407060179181344e-12,
            "turnover_ratio": 0.0008780932971636423,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 98.83449883449883,
            "rank_pca": 31,
            "adv": 1798853212.8,
            "trades": 14069.0,
            "volatility": 0.21266704147766008,
            "spread_pct": 0.001292814526482078,
            "spread_ticks": 1.0185340489768535,
            "amihud": 4.889877300282989e-12,
            "turnover_ratio": 0.0025111193711883197,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 98.21289821289821,
            "rank_pca": 47,
            "adv": 1248261878.16,
            "trades": 11077.0,
            "volatility": 0.2036459256034578,
            "spread_pct": 0.0016042279173565433,
            "spread_ticks": 1.0272108843537415,
            "amihud": 6.901968291986873e-12,
            "turnover_ratio": 0.0030886672451031845,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 97.66899766899768,
            "rank_pca": 61,
            "adv": 858528246.75,
            "trades": 9318.0,
            "volatility": 0.17404713799963087,
            "spread_pct": 0.0022302122981064246,
            "spread_ticks": 1.0170094325034793,
            "amihud": 6.853923926784943e-12,
            "turnover_ratio": 0.0033349816599637988,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 97.82439782439782,
            "rank_pca": 57,
            "adv": 754386558.4,
            "trades": 7706.0,
            "volatility": 0.18722657400959025,
            "spread_pct": 0.0005617553716258445,
            "spread_ticks": 1.0660981837452426,
            "amihud": 8.014270523175956e-12,
            "turnover_ratio": 0.0061225067820063804,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 96.38694638694638,
            "rank_pca": 94,
            "adv": 419698670.47999996,
            "trades": 6967.0,
            "volatility": 0.2205451827612013,
            "spread_pct": 0.001916671413097265,
            "spread_ticks": 1.0341642228739003,
            "amihud": 1.9398060538032954e-11,
            "turnover_ratio": 0.004254941322012727,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 92.3076923076923,
            "rank_pca": 199,
            "adv": 169556413.6,
            "trades": 4544.0,
            "volatility": 0.2542006840006713,
            "spread_pct": 0.0018418507909285036,
            "spread_ticks": 1.3410413717162184,
            "amihud": 6.107668945529553e-11,
            "turnover_ratio": 0.0024898737970860496,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 85.58663558663558,
            "rank_pca": 372,
            "adv": 183241090.0,
            "trades": 2869.0,
            "volatility": 0.4288121026134239,
            "spread_pct": 0.001166625270595089,
            "spread_ticks": 1.9870832413336277,
            "amihud": 8.781709175929143e-11,
            "turnover_ratio": 0.0005013671787606018,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 93.5120435120435,
            "rank_pca": 168,
            "adv": 182449164.1,
            "trades": 3550.0,
            "volatility": 0.14828652258912323,
            "spread_pct": 0.0021178035241813135,
            "spread_ticks": 1.0612795238980843,
            "amihud": 3.393202710609999e-11,
            "turnover_ratio": 0.005136044484102729,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
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
              "mean": 0.28063308322945457,
              "median": 0.2542006840006713,
              "min": 0.07796038942830265,
              "max": 0.6329269637734478,
              "p5": 0.16538421868979836,
              "p95": 0.6083009809312512,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 220892883.5699159,
              "median": 10283992.0,
              "min": 0.0,
              "max": 2059379381.4,
              "p5": 0.0,
              "p95": 1358380145.0879977,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.015034585369128614,
              "median": 0.0035663249267646096,
              "min": 0.0005617553716258445,
              "max": 0.09008255826105138,
              "p5": 0.001098823939726064,
              "p95": 0.06581412380609371,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028324736575032973,
              "median": 0.0008908372698181988,
              "min": 0.0,
              "max": 0.03276855421560123,
              "p5": 0.0,
              "p95": 0.007111078723613942,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.3229392056834791e-07,
              "median": 8.384455594950687e-10,
              "min": 4.889877300282989e-12,
              "max": 5.783021050196618e-06,
              "p5": 6.764551177264223e-12,
              "p95": 7.761402539210462e-07,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2443.2702702702704,
              "median": 659.0,
              "min": 0.0,
              "max": 14069.0,
              "p5": 0.0,
              "p95": 10879.4,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 701871904.2862501,
              "median": 587042614.4399999,
              "min": 169556413.6,
              "max": 1798853212.8,
              "p5": 174068876.275,
              "p95": 1606146245.6759996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7512.5,
              "median": 7336.5,
              "min": 2869.0,
              "max": 14069.0,
              "p5": 3107.35,
              "p95": 13021.8,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22867889638184485,
              "median": 0.20815648354055893,
              "min": 0.14828652258912323,
              "max": 0.4288121026134239,
              "p5": 0.1573027379828009,
              "p95": 0.3676981060989604,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0015914951390466328,
              "median": 0.0017230393541425235,
              "min": 0.0005617553716258445,
              "max": 0.0022302122981064246,
              "p5": 0.0007734598362650801,
              "p95": 0.0021908692272326357,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.1940526136751435,
              "median": 1.0477218733859923,
              "min": 1.0170094325034793,
              "max": 1.9870832413336277,
              "p5": 1.0175430482691603,
              "p95": 1.760968586967534,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.8610488612618834e-11,
              "median": 1.3706165530604455e-11,
              "min": 4.889877300282989e-12,
              "max": 8.781709175929143e-11,
              "p5": 5.577293619558673e-12,
              "p95": 7.845795095289285e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003429937730027974,
              "median": 0.003211824452533492,
              "min": 0.0005013671787606018,
              "max": 0.0061225067820063804,
              "p5": 0.0011973444951745085,
              "p95": 0.0057772449777401015,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.11849479583666955,
            "market": 0.07151156981189555,
            "sector": -0.0031084560923073656,
            "peers": 0.03047948713086157,
            "vs_market": 0.046983226024774005,
            "vs_sector": 0.12160325192897692,
            "vs_peers": 0.08801530870580798
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 96.1149961149961,
          "score_pca_percentile": 96.1149961149961,
          "rank_pca": 101,
          "total": 2574,
          "adv_notional_sgd": 1613718512.1,
          "adv_volume_shares": 14022877.5,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0008164589032043411,
          "votes": 8261.0,
          "trades": 8261.0,
          "spread_pct": 0.0008887652262665198,
          "spread_ticks": 1.0728874489249653,
          "amihud": 6.311283376109957e-12,
          "volatility": 0.315802906189602
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
          "peer_median_adv": 685270911.8299999,
          "peer_median_score_pca": 97.22222222222223,
          "peer_median_trades": 7457.0,
          "peer_median_volatility": 0.21082617428095113,
          "peer_median_spread_pct": 0.0017553868036067708,
          "peer_median_spread_ticks": 1.0515185831860905,
          "peer_median_amihud": 1.3006833869741483e-11,
          "peer_median_turnover_ratio": 0.00331320815992385,
          "target_vs_peer": {
            "score_pca_delta": -1.11,
            "adv_delta_pct": 135.5,
            "trades_delta_pct": 10.78,
            "volatility_delta_pct": -49.79,
            "spread_pct_delta_pct": 49.37,
            "spread_ticks_delta_pct": 2.03,
            "amihud_delta_pct": 51.48,
            "turnover_ratio_delta_pct": -75.36
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 96.1149961149961,
            "rank_pca": 101,
            "adv": 1613718512.1,
            "trades": 8261.0,
            "volatility": 0.315802906189602,
            "spread_pct": 0.0008887652262665198,
            "spread_ticks": 1.0728874489249653,
            "amihud": 6.311283376109957e-12,
            "turnover_ratio": 0.0008164589032043411,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 98.75679875679876,
            "rank_pca": 33,
            "adv": 1786736479.64,
            "trades": 13666.5,
            "volatility": 0.21909560581640977,
            "spread_pct": 0.0012965265898414817,
            "spread_ticks": 1.0184762044328792,
            "amihud": 4.766860062189818e-12,
            "turnover_ratio": 0.0025068934787163487,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 98.0963480963481,
            "rank_pca": 50,
            "adv": 1242464214.08,
            "trades": 10996.5,
            "volatility": 0.2018409277272548,
            "spread_pct": 0.0016263115723042709,
            "spread_ticks": 1.0241912014662047,
            "amihud": 6.197000668583443e-12,
            "turnover_ratio": 0.0031516124992699273,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 97.55244755244755,
            "rank_pca": 64,
            "adv": 893243230.54,
            "trades": 9195.5,
            "volatility": 0.18290076513365097,
            "spread_pct": 0.0022481983681800826,
            "spread_ticks": 1.011979468544335,
            "amihud": 7.256500594206154e-12,
            "turnover_ratio": 0.003474803820577773,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 97.86324786324786,
            "rank_pca": 56,
            "adv": 811034062.75,
            "trades": 7479.5,
            "volatility": 0.20255674274549249,
            "spread_pct": 0.0006476149172923417,
            "spread_ticks": 1.147767491992754,
            "amihud": 8.184507507376075e-12,
            "turnover_ratio": 0.0064772188022092,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 96.8919968919969,
            "rank_pca": 81,
            "adv": 559507760.91,
            "trades": 7434.5,
            "volatility": 0.2262447528063511,
            "spread_pct": 0.0018865697232161238,
            "spread_ticks": 1.0433900137638203,
            "amihud": 1.782916023210689e-11,
            "turnover_ratio": 0.005799998037457766,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 92.11344211344212,
            "rank_pca": 204,
            "adv": 171463091.755,
            "trades": 4527.5,
            "volatility": 0.22868109871366804,
            "spread_pct": 0.0018844620349092707,
            "spread_ticks": 1.3585310499333438,
            "amihud": 5.0319657323208755e-11,
            "turnover_ratio": 0.0025833030691176833,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 83.41103341103342,
            "rank_pca": 428,
            "adv": 132824805.0,
            "trades": 2277.5,
            "volatility": 0.36000531997344853,
            "spread_pct": 0.0011664841162830418,
            "spread_ticks": 1.9804850966340528,
            "amihud": 8.920693364028488e-11,
            "turnover_ratio": 0.00040857085672634923,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 91.6083916083916,
            "rank_pca": 217,
            "adv": 157335704.01,
            "trades": 3194.0,
            "volatility": 0.1940515477844806,
            "spread_pct": 0.0020407364151767294,
            "spread_ticks": 1.0596471526083606,
            "amihud": 3.9525928810089206e-11,
            "turnover_ratio": 0.0041650297067097174,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
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
              "mean": 0.2679434984390944,
              "median": 0.25050709275963057,
              "min": 0.09133572282948321,
              "max": 0.5392396166024552,
              "p5": 0.17756532571964284,
              "p95": 0.47343793443094245,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 212965675.84547022,
              "median": 10870195.0,
              "min": 0.0,
              "max": 1786736479.64,
              "p5": 0.0,
              "p95": 1316715073.6839983,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.013957802256286893,
              "median": 0.0034243714399770915,
              "min": 0.0006476149172923417,
              "max": 0.0721540591421831,
              "p5": 0.0011109403382797373,
              "p95": 0.0642380532765919,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028134089096807932,
              "median": 0.0009221663892589855,
              "min": 0.0,
              "max": 0.0335423918759571,
              "p5": 0.0,
              "p95": 0.00685561076116691,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.603637720859374e-08,
              "median": 8.654394066579286e-10,
              "min": 4.766860062189818e-12,
              "max": 1.447425445567088e-06,
              "p5": 6.288426834604654e-12,
              "p95": 5.040318596144096e-07,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2357.945945945946,
              "median": 661.5,
              "min": 0.0,
              "max": 13666.5,
              "p5": 0.0,
              "p95": 9555.699999999992,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 719326168.585625,
              "median": 685270911.8299999,
              "min": 132824805.0,
              "max": 1786736479.64,
              "p5": 141403619.6535,
              "p95": 1596241186.6939998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7346.4375,
              "median": 7457.0,
              "min": 2277.5,
              "max": 13666.5,
              "p5": 2598.275,
              "p95": 12731.999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22692209508759453,
              "median": 0.21082617428095113,
              "min": 0.18290076513365097,
              "max": 0.36000531997344853,
              "p5": 0.18680353906144134,
              "p95": 0.3140418425325253,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0015996129671504177,
              "median": 0.0017553868036067708,
              "min": 0.0006476149172923417,
              "max": 0.0022481983681800826,
              "p5": 0.0008292191369390868,
              "p95": 0.002175586684628909,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2055584599219689,
              "median": 1.0515185831860905,
              "min": 1.011979468544335,
              "max": 1.9804850966340528,
              "p5": 1.0142533261053255,
              "p95": 1.7628011802888044,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.7910818604755653e-11,
              "median": 1.3006833869741483e-11,
              "min": 4.766860062189818e-12,
              "max": 8.920693364028488e-11,
              "p5": 5.267409274427587e-12,
              "p95": 7.559638692930822e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035709287838480955,
              "median": 0.00331320815992385,
              "min": 0.00040857085672634923,
              "max": 0.0064772188022092,
              "p5": 0.0011429837744228492,
              "p95": 0.006240191534546198,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.30317164179104483,
            "market": 0.11289080174108235,
            "sector": -0.01720151145309312,
            "peers": 0.11127284591345488,
            "vs_market": 0.19028084004996249,
            "vs_sector": 0.32037315324413795,
            "vs_peers": 0.19189879587758996
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 94.1 vs peer median 89.2 (+4.9 pts).",
        "market_comparison": "The stock rose 0.6% compared with 0.3% for peers. That firmer tape can help participation, even if displayed buy-side support remains light."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average for its size rather than clearly ahead of peers. That matters because access appears serviceable, but not strong enough to offset the thinner bid side.",
        "market_comparison": "The stock returned 7.5% over 1M, ahead of peers by 6.2% and the market by 0.6%. That stronger performance gives the tape a firmer backdrop than the peer group."
      },
      "3m": {
        "liquidity": "Tradability appears steady over the medium term, with no clear sign of a material shift in access. That matters because the stock still screens as broadly usable rather than moving into a clearly stronger or weaker liquidity tier.",
        "market_comparison": "The stock returned 11.8% over 3M compared with 3.0% for peers. That stronger relative performance supports a more constructive trading backdrop."
      },
      "6m": {
        "liquidity": "Six-month liquidity is average for the company’s size, with a score of 96.1 compared with a peer median of 97.2. That matters because peer-relative access is close to the pack rather than a clear strength.",
        "market_comparison": "Primary average daily volume is HK$1.6B compared with a peer median of HK$685.3M. That larger turnover supports day-to-day accessibility even though the overall liquidity score sits slightly below peers."
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
          "median": 0.6847268034225207,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "68.5%",
          "display_range": null,
          "display_text": "68.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 68.5,
          "plain_english": "Market explains about 68.5% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.1513227545391001,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "15.1%",
          "display_range": null,
          "display_text": "15.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 15.1,
          "plain_english": "Sector explains about 15.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.16395044203837913,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "16.4%",
          "display_range": null,
          "display_text": "16.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 16.4,
          "plain_english": "Company-specific explains about 16.4% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 2.403638409326137,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.40",
          "display_range": null,
          "display_text": "2.40",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 2.40% stock move in the same direction in this state.",
          "value_num": 2.4
        },
        "beta_stock_lag": {
          "median": -0.3988016108716667,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.40",
          "display_range": null,
          "display_text": "-0.40",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.4
        },
        "beta_sector": {
          "median": -1.4995801425917277,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.50",
          "display_range": null,
          "display_text": "-1.50",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.50% stock move in the opposite direction in this state.",
          "value_num": -1.5
        },
        "beta_market_lag": {
          "median": 0.7114626037394551,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.71",
          "display_range": null,
          "display_text": "0.71",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.71
        },
        "beta_sector_lag": {
          "median": 0.4342235170548318,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.43",
          "display_range": null,
          "display_text": "0.43",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.43
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
            "median": 0.46850951345076375,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.9%",
            "display_range": null,
            "display_text": "46.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 46.9,
            "plain_english": "Market explains about 46.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.46850951345076375,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.9%",
              "display_range": null,
              "display_text": "46.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 46.9,
              "plain_english": "Market explains about 46.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2459245417442982,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.6%",
              "display_range": null,
              "display_text": "24.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 24.6,
              "plain_english": "Sector explains about 24.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2855659448049381,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.6%",
              "display_range": null,
              "display_text": "28.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 28.6,
              "plain_english": "Company-specific explains about 28.6% of price moves in the current state."
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
            "median": 0.5370655352872886,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.7%",
            "display_range": null,
            "display_text": "53.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 53.7,
            "plain_english": "Market explains about 53.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5370655352872886,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.7%",
              "display_range": null,
              "display_text": "53.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 53.7,
              "plain_english": "Market explains about 53.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3571302290886084,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.7%",
              "display_range": null,
              "display_text": "35.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 35.7,
              "plain_english": "Sector explains about 35.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.10580423562410303,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.6%",
              "display_range": null,
              "display_text": "10.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 10.6,
              "plain_english": "Company-specific explains about 10.6% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven."
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
            "median": 0.4923321951220486,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.2%",
            "display_range": null,
            "display_text": "49.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 49.2,
            "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22792304112439007,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.8%",
              "display_range": null,
              "display_text": "22.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.8,
              "plain_english": "Market explains about 22.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2797447637535613,
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
              "median": 0.4923321951220486,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.2%",
              "display_range": null,
              "display_text": "49.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.2,
              "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
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
            "median": 0.48179600305510895,
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
            "plain_english": "Market explains about 48.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.48179600305510895,
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
              "plain_english": "Market explains about 48.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16498937205776296,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.5%",
              "display_range": null,
              "display_text": "16.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.5,
              "plain_english": "Sector explains about 16.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.35321462488712807,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.3%",
              "display_range": null,
              "display_text": "35.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 35.3,
              "plain_english": "Company-specific explains about 35.3% of price moves in the current state."
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
            "median": 0.39721055479331346,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.7%",
            "display_range": null,
            "display_text": "39.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 39.7,
            "plain_english": "Market explains about 39.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.39721055479331346,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.7%",
              "display_range": null,
              "display_text": "39.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.7,
              "plain_english": "Market explains about 39.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2173607464346231,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.7%",
              "display_range": null,
              "display_text": "21.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.7,
              "plain_english": "Sector explains about 21.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3854286987720635,
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
            "median": 0.39238693636971556,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.2%",
            "display_range": null,
            "display_text": "39.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 39.2,
            "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22352692756712236,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.4%",
              "display_range": null,
              "display_text": "22.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 22.4,
              "plain_english": "Market explains about 22.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3840861360631621,
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
              "plain_english": "Sector explains about 38.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.39238693636971556,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.2%",
              "display_range": null,
              "display_text": "39.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 39.2,
              "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
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
            "median": 0.5255373598991685,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.6%",
            "display_range": null,
            "display_text": "52.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 52.6,
            "plain_english": "Company-specific explains about 52.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.09251006506380914,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.3%",
              "display_range": null,
              "display_text": "9.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 9.3,
              "plain_english": "Market explains about 9.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3819525750370224,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.2%",
              "display_range": null,
              "display_text": "38.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.2,
              "plain_english": "Sector explains about 38.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5255373598991685,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.6%",
              "display_range": null,
              "display_text": "52.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.6,
              "plain_english": "Company-specific explains about 52.6% of price moves in the current state."
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
            "median": 0.46351083561789835,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.4%",
            "display_range": null,
            "display_text": "46.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 46.4,
            "plain_english": "Company-specific explains about 46.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2685951119819158,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.9%",
              "display_range": null,
              "display_text": "26.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.9,
              "plain_english": "Market explains about 26.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2678940524001858,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.8%",
              "display_range": null,
              "display_text": "26.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.8,
              "plain_english": "Sector explains about 26.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.46351083561789835,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.4%",
              "display_range": null,
              "display_text": "46.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.4,
              "plain_english": "Company-specific explains about 46.4% of price moves in the current state."
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
            "median": 0.573452687103915,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.3%",
            "display_range": null,
            "display_text": "57.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 57.3,
            "plain_english": "Market explains about 57.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.573452687103915,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Market explains about 57.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14656716433322203,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.7%",
              "display_range": null,
              "display_text": "14.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 14.7,
              "plain_english": "Sector explains about 14.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.27998014856286296,
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
              "plain_english": "Company-specific explains about 28.0% of price moves in the current state."
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
            "median": 0.5060420237915503,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.6%",
            "display_range": null,
            "display_text": "50.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 50.6,
            "plain_english": "Market explains about 50.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5060420237915503,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.6%",
              "display_range": null,
              "display_text": "50.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 50.6,
              "plain_english": "Market explains about 50.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2844672547666903,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.4%",
              "display_range": null,
              "display_text": "28.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 28.4,
              "plain_english": "Sector explains about 28.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.20949072144175934,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.9%",
              "display_range": null,
              "display_text": "20.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 20.9,
              "plain_english": "Company-specific explains about 20.9% of price moves in the current state."
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
            "median": 0.3897171894239575,
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
            "plain_english": "Company-specific explains about 39.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34962870066476953,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.0%",
              "display_range": null,
              "display_text": "35.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 35.0,
              "plain_english": "Market explains about 35.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.26065410991127297,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.1%",
              "display_range": null,
              "display_text": "26.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 26.1,
              "plain_english": "Sector explains about 26.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3897171894239575,
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
              "plain_english": "Company-specific explains about 39.0% of price moves in the current state."
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
            "median": 0.3843083871800968,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.4%",
            "display_range": null,
            "display_text": "38.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 38.4,
            "plain_english": "Company-specific explains about 38.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3517063105942029,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.2%",
              "display_range": null,
              "display_text": "35.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 35.2,
              "plain_english": "Market explains about 35.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2639853022257003,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.4%",
              "display_range": null,
              "display_text": "26.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 26.4,
              "plain_english": "Sector explains about 26.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3843083871800968,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.4%",
              "display_range": null,
              "display_text": "38.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 38.4,
              "plain_english": "Company-specific explains about 38.4% of price moves in the current state."
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
            "median": 0.5095553887043056,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.0%",
            "display_range": null,
            "display_text": "51.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 51.0,
            "plain_english": "Market explains about 51.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5095553887043056,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.0%",
              "display_range": null,
              "display_text": "51.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.0,
              "plain_english": "Market explains about 51.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1475757781634781,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.8%",
              "display_range": null,
              "display_text": "14.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 14.8,
              "plain_english": "Sector explains about 14.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3428688331322161,
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
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 5,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6847268034225207,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.5%",
            "display_range": null,
            "display_text": "68.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 68.5,
            "plain_english": "Market explains about 68.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.6847268034225207,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.5%",
              "display_range": null,
              "display_text": "68.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 68.5,
              "plain_english": "Market explains about 68.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1513227545391001,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.1%",
              "display_range": null,
              "display_text": "15.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 15.1,
              "plain_english": "Sector explains about 15.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.16395044203837913,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.4%",
              "display_range": null,
              "display_text": "16.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 16.4,
              "plain_english": "Company-specific explains about 16.4% of price moves in the current state."
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
          "expected_duration_days": 12.5,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.008945986248446535,
            "low": 0.008945986248446535,
            "high": 0.008945986248446535
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.022626735828422322,
            "low": 0.022626735828422322,
            "high": 0.022626735828422322
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
            0.08130081300813008,
            0.9186991869918699
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
            10.0,
            113.0
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
        "market_link_display": "2.40",
        "sector_link_display": "-1.50",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.40% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.50% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.40",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 68.5,
        "driver_share_display": "68.5%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9186991869918699,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 11.3 days.",
        "expected_duration_days": 11.3
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
            "median": 0.008945986248446535,
            "low": 0.008945986248446535,
            "high": 0.008945986248446535
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.022626735828422322,
            "low": 0.022626735828422322,
            "high": 0.022626735828422322
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
          0.08130081300813008,
          0.9186991869918699
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.92,
            0.08
          ],
          [
            0.08130081300813008,
            0.9186991869918699
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
            10.0,
            113.0
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
        "text": "Liquidity score: 96.1 — Strong",
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
    "liq_subtitle": "Monthly liquidity is close to peers, but the displayed book is notably thinner on the bid.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are ahead of peers and the market, giving the tape a firmer backdrop.",
    "perf_insight": "Performance has been strong, with a 1M return of +7.5% compared with +6.2% for peers and +0.6% for the market. That matters because the stock is trading from a position of relative strength even as the liquidity profile remains only mixed for its size.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "The tape is still being led mainly by broader market moves.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 68.5% of price changes. Other influences are sector 15.1%, and company-specific 16.4%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 68.5%, sector 15.1%, and company-specific 16.4%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 68.5%, sector 15.1%, and company-specific 16.4%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Market factors account for 68.5% of trading, so current price action is being shaped more by the broader backdrop than by company-specific drivers. That matters because the stronger 1M return is arriving in a market-led tape rather than on stock-specific momentum alone.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market factors are leading, accounting for 68.5% of recent price moves.",
      "Monthly change: the pattern has shifted from more mixed in February to mostly market-driven in March and still market-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current market state is High Volatility. The market has been in this state about 49.8% of the time. Based on 251 trading days relative to the 252-day target. This state looks more persistent, with a typical run length of about 11.3 days.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 10, 2025 to Apr 10, 2026 (239 trading days • 2,286,163 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The key execution watchpoint is the bid, because top-10 bid depth is only 0.25x ask depth while the spread is 1 tick.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 19.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The clearest intraday read is the imbalance in displayed depth rather than a broad issue with spread.",
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
    "intraday_insight": "Displayed liquidity is skewed to the sell side, with top-10 bid depth at just 0.25x ask depth while the spread remains 1 tick. That matters because trading can feel orderly at the touch but still become thinner when selling into the book.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by market leadership and book shape.",
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
    "exec_subtitle": "Liquidity is mixed for its size, and the current book shows thin buy-side support.",
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
        "value": "96.1/100",
        "sub": "Peer median 97.2 (-1.1 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$1.6B",
        "sub": "Peer median HK$685.3M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.09%",
        "sub": "1.07 ticks; peers 0.18%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 96.1 vs peer median 97.2 (-1.1 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "139.750",
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
        "value": "0.25x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
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
        "text": "Estimated impact ~-0.04% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.04% with 100.0% fill.",
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
        "subtext": "Rank 101/2574",
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
        "subtext": "0.09% • 1.07 ticks vs peers 0.18%",
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
        "subtext": "Peer median HK$685.3M",
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
        "value": "68.5",
        "suffix": "market",
        "bar_pct": 68,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 15.1% • Company 16.4%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the stock’s size, with a 6M score of 96.1 compared with a peer median of 97.2. That matters because peer-relative access looks broadly in line rather than clearly strong.",
      "The return backdrop is firm, with a 1M gain of +7.5% compared with +6.2% for peers and +0.6% for the market. That matters because recent trading has been supported by stronger price performance than the main comparison groups.",
      "The main watchpoint is the displayed book, with top-10 bid depth at 0.25x ask depth despite a 1 tick spread. That matters because downside execution can feel thinner than the headline liquidity score implies, while market factors still explain 68.5% of the tape."
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
      "overall": "6M liquidity is strong: score 96.1 vs peer median 97.2 (-1.1 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 96.1 vs peer median 97.2 (-1.1 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -1.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 30.3%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 30.3% vs market 11.3%.",
        "vs_sector": "Better than sector: 30.3% vs sector -1.7%.",
        "vs_peers": "Better than peers: 30.3% vs peers 11.1%."
      },
      "adv": {
        "insight": "ADV is HK$1.6B, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$1.6B vs market HK$221.2K.",
        "vs_sector": "Better than sector: HK$1.6B vs sector HK$10.9M.",
        "vs_peers": "Better than peers: HK$1.6B vs peers HK$685.3M."
      },
      "spread": {
        "insight": "Spread is 0.09%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.09% vs market 2.66%.",
        "vs_sector": "Better than sector: 0.09% vs sector 0.34%.",
        "vs_peers": "Better than peers: 0.09% vs peers 0.18%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.08%, worse than sector and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "In line with market: 0.08% vs market 0.09%.",
        "vs_sector": "Worse than sector: 0.08% vs sector 0.09%.",
        "vs_peers": "Worse than peers: 0.08% vs peers 0.33%."
      },
      "volatility": {
        "insight": "Volatility is 31.58%, better than market, but worse than sector and peers, which shows price variability is mixed across comparison groups.",
        "vs_market": "Better than market: 31.58% vs market 59.82%.",
        "vs_sector": "Worse than sector: 31.58% vs secto%.",
        "vs_peers": "Worse than peers: 31.58% vs peers 21.08%."
      },
      "trades": {
        "insight": "Trades is 8261, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 8261 vs market 21.",
        "vs_sector": "Better than sector: 8261 vs sector 662.",
        "vs_peers": "Better than peers: 8261 vs peers 7457."
      },
      "amihud": {
        "insight": "Price impact is 6.31e-12, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 6.31e-12 vs market 4.60e-08.",
        "vs_sector": "Better than sector: 6.31e-12 vs sector 8.65e-10.",
        "vs_peers": "Better than peers: 6.31e-12 vs peers 1.30e-11."
      }
    },
    "performance": {
      "overall": "Performance is strong relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "conclusion": "The recent gain looks broad and market-linked rather than driven mainly by company-specific trading."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by the market now, with 68.5% of recent price moves explained by broader market factors. That matters because the current tape is being set more by external conditions than by company-specific news, even as the shares have risen 7.5% over the past month.",
      "beta": "This market-led pattern sits alongside a firmer recent return backdrop, with the stock up 7.5% over one month compared with 6.2% for peers and 0.6% for the market. That makes the current move look supported by a constructive backdrop rather than a purely stock-specific rerating.",
      "rolling_change": "The driver mix has become more market-led over the past three months, moving from a more mixed pattern in February to mostly market-driven in March and still clearly market-driven in April. That points to a pattern that is more established than a one-day swing, although the April read is still early."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "High volatility is the active state, while the stock has still outperformed over one month with a 7.5% return, ahead of peers at 6.2% and the market at 0.6%.",
      "transitions": "This looks more settled than fleeting, with a typical run length of about 11.3 days, although the overall read is still mixed rather than fully entrenched.",
      "trading_implications": "Trading conditions look workable on the spread but less robust beneath the surface, because a persistent high-volatility state combined with thin bid depth can make price moves feel sharper when sellers press."
    },
    "execution": {
      "overall": "Displayed liquidity is thin buy-side, with top-10 bid depth at 0.25x ask depth despite a 1 tick spread. That means the quoted spread looks orderly, but immediate visible support on the buy side is materially lighter.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with bids at only a quarter of ask depth. That leaves downside execution more exposed if selling pressure meets a book that is thinner on the buy side.",
      "peer_context": "This book does not fully visible support the broader liquidity profile, because the 6M liquidity score of 96.1 sits only 1.1 points below the peer median of 97.2 while the live depth is much less even. The trade-size history is broad at 239 trading days and 2,286,163 trades, so the current imbalance stands out as a live book issue rather than a structural shift in the longer profile."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 50.7% of trade count and 61.0% of trade value, compared with retail-like at 4.2% of count and 1.7% of value. That gap shows the tape is being driven more by larger participants than by retail flow.",
      "institutional_gap": "The read is directionally clear but not fully clean because 41.6% of trade count is classified as ambiguous or unclear. That leaves a meaningful share of activity outside the institution-like and retail-like buckets.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "The price-moving signal is mixed because the dominant read is institution-like, but a large unclear share reduces how cleanly that can be linked to direction. Ambiguous or unclear flow is 41.6% of trade count, so the read is not fully clean. Recent returns are firm at +7.5% over one month, ahead of peers at +6.2% and the market at +0.6%. That gives the tape a stronger backdrop, even though the trade classification signal is not fully clean.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is becoming a bigger factor. The broader picture is still defined more by market-led trading and a thinner buy side in the displayed book, so short selling does not stand out as a separate source of pressure.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 1.5%, continuous 88.7%, and close 7.8%. Current trading concentration score is 0.118.",
      "hhi_interpretation": "A trading concentration score of 0.118 indicates activity is not heavily concentrated into a narrow part of the session. That supports a steadier intraday flow profile.",
      "best_times": "The continuous session is the clearest source of liquidity, while the open at 1.5% and close at 7.8% play a much smaller role. That means the middle of the day carries most of the usable flow.",
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
        "2888",
        "1658"
      ],
      "scores": [
        96.1149961149961,
        98.75679875679876,
        98.0963480963481,
        97.55244755244755,
        97.86324786324786,
        96.8919968919969,
        92.11344211344212,
        83.41103341103342,
        91.6083916083916
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
        1613718512.1,
        1786736479.64,
        1242464214.08,
        893243230.54,
        811034062.75,
        559507760.91,
        171463091.755,
        132824805.0,
        157335704.01
      ],
      "total": 2574
    },
    "market_comparison": {
      "sector_name": "Banks",
      "sector_count": 37,
      "market_count": 2574,
      "company": {
        "volatility": 0.315802906189602,
        "adv": 1613718512.1,
        "spread_pct": 0.0008887652262665198,
        "turnover_ratio": 0.0008164589032043411,
        "amihud": 6.311283376109957e-12,
        "trades": 8261.0
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
          "mean": 0.2679434984390944,
          "median": 0.25050709275963057,
          "min": 0.09133572282948321,
          "max": 0.5392396166024552,
          "p5": 0.17756532571964284,
          "p95": 0.47343793443094245,
          "count": 37
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 212965675.84547022,
          "median": 10870195.0,
          "min": 0.0,
          "max": 1786736479.64,
          "p5": 0.0,
          "p95": 1316715073.6839983,
          "count": 37
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.013957802256286893,
          "median": 0.0034243714399770915,
          "min": 0.0006476149172923417,
          "max": 0.0721540591421831,
          "p5": 0.0011109403382797373,
          "p95": 0.0642380532765919,
          "count": 37
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0028134089096807932,
          "median": 0.0009221663892589855,
          "min": 0.0,
          "max": 0.0335423918759571,
          "p5": 0.0,
          "p95": 0.00685561076116691,
          "count": 37
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.603637720859374e-08,
          "median": 8.654394066579286e-10,
          "min": 4.766860062189818e-12,
          "max": 1.447425445567088e-06,
          "p5": 6.288426834604654e-12,
          "p95": 5.040318596144096e-07,
          "count": 37
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2357.945945945946,
          "median": 661.5,
          "min": 0.0,
          "max": 13666.5,
          "p5": 0.0,
          "p95": 9555.699999999992,
          "count": 37
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 719326168.585625,
          "median": 685270911.8299999,
          "min": 132824805.0,
          "max": 1786736479.64,
          "p5": 141403619.6535,
          "p95": 1596241186.6939998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 7346.4375,
          "median": 7457.0,
          "min": 2277.5,
          "max": 13666.5,
          "p5": 2598.275,
          "p95": 12731.999999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.22692209508759453,
          "median": 0.21082617428095113,
          "min": 0.18290076513365097,
          "max": 0.36000531997344853,
          "p5": 0.18680353906144134,
          "p95": 0.3140418425325253,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0015996129671504177,
          "median": 0.0017553868036067708,
          "min": 0.0006476149172923417,
          "max": 0.0022481983681800826,
          "p5": 0.0008292191369390868,
          "p95": 0.002175586684628909,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.2055584599219689,
          "median": 1.0515185831860905,
          "min": 1.011979468544335,
          "max": 1.9804850966340528,
          "p5": 1.0142533261053255,
          "p95": 1.7628011802888044,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.7910818604755653e-11,
          "median": 1.3006833869741483e-11,
          "min": 4.766860062189818e-12,
          "max": 8.920693364028488e-11,
          "p5": 5.267409274427587e-12,
          "p95": 7.559638692930822e-11,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035709287838480955,
          "median": 0.00331320815992385,
          "min": 0.00040857085672634923,
          "max": 0.0064772188022092,
          "p5": 0.0011429837744228492,
          "p95": 0.006240191534546198,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.07544264819091606,
        "market": 0.005817570896814672,
        "sector": 0.019888401383184817,
        "peers": 0.06236290761742547
      },
      {
        "horizon": "3M",
        "stock": 0.11849479583666955,
        "market": 0.07151156981189555,
        "sector": -0.0031084560923073656,
        "peers": 0.03047948713086157
      },
      {
        "horizon": "6M",
        "stock": 0.30317164179104483,
        "market": 0.11289080174108235,
        "sector": -0.01720151145309312,
        "peers": 0.11127284591345488
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
      "share_market": 0.6847268034225207,
      "share_sector": 0.1513227545391001,
      "share_idio": 0.16395044203837913,
      "beta_market": 2.403638409326137,
      "beta_sector": -1.4995801425917277,
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
            "median": 0.6847268034225207,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.5%",
            "display_range": null,
            "display_text": "68.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 68.5,
            "plain_english": "Market explains about 68.5% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.1513227545391001,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "15.1%",
            "display_range": null,
            "display_text": "15.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 15.1,
            "plain_english": "Sector explains about 15.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.16395044203837913,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "16.4%",
            "display_range": null,
            "display_text": "16.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 16.4,
            "plain_english": "Company-specific explains about 16.4% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 2.403638409326137,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.40",
            "display_range": null,
            "display_text": "2.40",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 2.40% stock move in the same direction in this state.",
            "value_num": 2.4
          },
          "beta_stock_lag": {
            "median": -0.3988016108716667,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.40",
            "display_range": null,
            "display_text": "-0.40",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.4
          },
          "beta_sector": {
            "median": -1.4995801425917277,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.50",
            "display_range": null,
            "display_text": "-1.50",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.50% stock move in the opposite direction in this state.",
            "value_num": -1.5
          },
          "beta_market_lag": {
            "median": 0.7114626037394551,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.71",
            "display_range": null,
            "display_text": "0.71",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.71
          },
          "beta_sector_lag": {
            "median": 0.4342235170548318,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.43",
            "display_range": null,
            "display_text": "0.43",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.43
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
              "median": 0.46850951345076375,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.9%",
              "display_range": null,
              "display_text": "46.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 46.9,
              "plain_english": "Market explains about 46.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.46850951345076375,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.9%",
                "display_range": null,
                "display_text": "46.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 46.9,
                "plain_english": "Market explains about 46.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2459245417442982,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.6%",
                "display_range": null,
                "display_text": "24.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 24.6,
                "plain_english": "Sector explains about 24.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2855659448049381,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.6%",
                "display_range": null,
                "display_text": "28.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 28.6,
                "plain_english": "Company-specific explains about 28.6% of price moves in the current state."
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
              "median": 0.5370655352872886,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.7%",
              "display_range": null,
              "display_text": "53.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 53.7,
              "plain_english": "Market explains about 53.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5370655352872886,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.7%",
                "display_range": null,
                "display_text": "53.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 53.7,
                "plain_english": "Market explains about 53.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3571302290886084,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.7%",
                "display_range": null,
                "display_text": "35.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 35.7,
                "plain_english": "Sector explains about 35.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.10580423562410303,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.6%",
                "display_range": null,
                "display_text": "10.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 10.6,
                "plain_english": "Company-specific explains about 10.6% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven."
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
              "median": 0.4923321951220486,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.2%",
              "display_range": null,
              "display_text": "49.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.2,
              "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22792304112439007,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.8%",
                "display_range": null,
                "display_text": "22.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.8,
                "plain_english": "Market explains about 22.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2797447637535613,
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
                "median": 0.4923321951220486,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.2%",
                "display_range": null,
                "display_text": "49.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 49.2,
                "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
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
              "median": 0.48179600305510895,
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
              "plain_english": "Market explains about 48.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.48179600305510895,
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
                "plain_english": "Market explains about 48.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16498937205776296,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.5%",
                "display_range": null,
                "display_text": "16.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.5,
                "plain_english": "Sector explains about 16.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.35321462488712807,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.3%",
                "display_range": null,
                "display_text": "35.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 35.3,
                "plain_english": "Company-specific explains about 35.3% of price moves in the current state."
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
              "median": 0.39721055479331346,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.7%",
              "display_range": null,
              "display_text": "39.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.7,
              "plain_english": "Market explains about 39.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.39721055479331346,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.7%",
                "display_range": null,
                "display_text": "39.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 39.7,
                "plain_english": "Market explains about 39.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2173607464346231,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.7%",
                "display_range": null,
                "display_text": "21.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.7,
                "plain_english": "Sector explains about 21.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3854286987720635,
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
              "median": 0.39238693636971556,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.2%",
              "display_range": null,
              "display_text": "39.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 39.2,
              "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22352692756712236,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.4%",
                "display_range": null,
                "display_text": "22.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 22.4,
                "plain_english": "Market explains about 22.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3840861360631621,
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
                "plain_english": "Sector explains about 38.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.39238693636971556,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.2%",
                "display_range": null,
                "display_text": "39.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 39.2,
                "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
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
              "median": 0.5255373598991685,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.6%",
              "display_range": null,
              "display_text": "52.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.6,
              "plain_english": "Company-specific explains about 52.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.09251006506380914,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.3%",
                "display_range": null,
                "display_text": "9.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 9.3,
                "plain_english": "Market explains about 9.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3819525750370224,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.2%",
                "display_range": null,
                "display_text": "38.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.2,
                "plain_english": "Sector explains about 38.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5255373598991685,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.6%",
                "display_range": null,
                "display_text": "52.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 52.6,
                "plain_english": "Company-specific explains about 52.6% of price moves in the current state."
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
              "median": 0.46351083561789835,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.4%",
              "display_range": null,
              "display_text": "46.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.4,
              "plain_english": "Company-specific explains about 46.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2685951119819158,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.9%",
                "display_range": null,
                "display_text": "26.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.9,
                "plain_english": "Market explains about 26.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2678940524001858,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.8%",
                "display_range": null,
                "display_text": "26.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.8,
                "plain_english": "Sector explains about 26.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.46351083561789835,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.4%",
                "display_range": null,
                "display_text": "46.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 46.4,
                "plain_english": "Company-specific explains about 46.4% of price moves in the current state."
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
              "median": 0.573452687103915,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Market explains about 57.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.573452687103915,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.3%",
                "display_range": null,
                "display_text": "57.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 57.3,
                "plain_english": "Market explains about 57.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14656716433322203,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.7%",
                "display_range": null,
                "display_text": "14.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 14.7,
                "plain_english": "Sector explains about 14.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.27998014856286296,
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
                "plain_english": "Company-specific explains about 28.0% of price moves in the current state."
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
              "median": 0.5060420237915503,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.6%",
              "display_range": null,
              "display_text": "50.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 50.6,
              "plain_english": "Market explains about 50.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5060420237915503,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.6%",
                "display_range": null,
                "display_text": "50.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 50.6,
                "plain_english": "Market explains about 50.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2844672547666903,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.4%",
                "display_range": null,
                "display_text": "28.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 28.4,
                "plain_english": "Sector explains about 28.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.20949072144175934,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.9%",
                "display_range": null,
                "display_text": "20.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 20.9,
                "plain_english": "Company-specific explains about 20.9% of price moves in the current state."
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
              "median": 0.3897171894239575,
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
              "plain_english": "Company-specific explains about 39.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34962870066476953,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.0%",
                "display_range": null,
                "display_text": "35.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 35.0,
                "plain_english": "Market explains about 35.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.26065410991127297,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.1%",
                "display_range": null,
                "display_text": "26.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 26.1,
                "plain_english": "Sector explains about 26.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3897171894239575,
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
                "plain_english": "Company-specific explains about 39.0% of price moves in the current state."
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
              "median": 0.3843083871800968,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.4%",
              "display_range": null,
              "display_text": "38.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 38.4,
              "plain_english": "Company-specific explains about 38.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3517063105942029,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.2%",
                "display_range": null,
                "display_text": "35.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 35.2,
                "plain_english": "Market explains about 35.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2639853022257003,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.4%",
                "display_range": null,
                "display_text": "26.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 26.4,
                "plain_english": "Sector explains about 26.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3843083871800968,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.4%",
                "display_range": null,
                "display_text": "38.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 38.4,
                "plain_english": "Company-specific explains about 38.4% of price moves in the current state."
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
              "median": 0.5095553887043056,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.0%",
              "display_range": null,
              "display_text": "51.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.0,
              "plain_english": "Market explains about 51.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5095553887043056,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.0%",
                "display_range": null,
                "display_text": "51.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 51.0,
                "plain_english": "Market explains about 51.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1475757781634781,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.8%",
                "display_range": null,
                "display_text": "14.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 14.8,
                "plain_english": "Sector explains about 14.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3428688331322161,
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
            "period_label": "2026-04-01 to 2026-04-10",
            "n_obs": 5,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6847268034225207,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.5%",
              "display_range": null,
              "display_text": "68.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 68.5,
              "plain_english": "Market explains about 68.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.6847268034225207,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "68.5%",
                "display_range": null,
                "display_text": "68.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 68.5,
                "plain_english": "Market explains about 68.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1513227545391001,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.1%",
                "display_range": null,
                "display_text": "15.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 15.1,
                "plain_english": "Sector explains about 15.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.16395044203837913,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.4%",
                "display_range": null,
                "display_text": "16.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 16.4,
                "plain_english": "Company-specific explains about 16.4% of price moves in the current state."
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
            "expected_duration_days": 12.5,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.008945986248446535,
              "low": 0.008945986248446535,
              "high": 0.008945986248446535
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.022626735828422322,
              "low": 0.022626735828422322,
              "high": 0.022626735828422322
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
              0.08130081300813008,
              0.9186991869918699
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
              10.0,
              113.0
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
          "market_link_display": "2.40",
          "sector_link_display": "-1.50",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.40% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.50% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.40",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 68.5,
          "driver_share_display": "68.5%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9186991869918699,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 11.3 days.",
          "expected_duration_days": 11.3
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
          "share_market": 0.46850951345076375,
          "share_sector": 0.2459245417442982,
          "share_company": 0.2855659448049381,
          "share_market_display": "46.9%",
          "share_sector_display": "24.6%",
          "share_company_display": "28.6%",
          "dominant_share_display": "46.9%"
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
          "summary": "Apr: Mostly market-driven.",
          "share_market": 0.5370655352872886,
          "share_sector": 0.3571302290886084,
          "share_company": 0.10580423562410303,
          "share_market_display": "53.7%",
          "share_sector_display": "35.7%",
          "share_company_display": "10.6%",
          "dominant_share_display": "53.7%"
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
          "share_market": 0.22792304112439007,
          "share_sector": 0.2797447637535613,
          "share_company": 0.4923321951220486,
          "share_market_display": "22.8%",
          "share_sector_display": "28.0%",
          "share_company_display": "49.2%",
          "dominant_share_display": "49.2%"
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
          "share_market": 0.48179600305510895,
          "share_sector": 0.16498937205776296,
          "share_company": 0.35321462488712807,
          "share_market_display": "48.2%",
          "share_sector_display": "16.5%",
          "share_company_display": "35.3%",
          "dominant_share_display": "48.2%"
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
          "share_market": 0.39721055479331346,
          "share_sector": 0.2173607464346231,
          "share_company": 0.3854286987720635,
          "share_market_display": "39.7%",
          "share_sector_display": "21.7%",
          "share_company_display": "38.5%",
          "dominant_share_display": "39.7%"
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
          "share_market": 0.22352692756712236,
          "share_sector": 0.3840861360631621,
          "share_company": 0.39238693636971556,
          "share_market_display": "22.4%",
          "share_sector_display": "38.4%",
          "share_company_display": "39.2%",
          "dominant_share_display": "39.2%"
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
          "share_market": 0.09251006506380914,
          "share_sector": 0.3819525750370224,
          "share_company": 0.5255373598991685,
          "share_market_display": "9.3%",
          "share_sector_display": "38.2%",
          "share_company_display": "52.6%",
          "dominant_share_display": "52.6%"
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
          "share_market": 0.2685951119819158,
          "share_sector": 0.2678940524001858,
          "share_company": 0.46351083561789835,
          "share_market_display": "26.9%",
          "share_sector_display": "26.8%",
          "share_company_display": "46.4%",
          "dominant_share_display": "46.4%"
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
          "share_market": 0.573452687103915,
          "share_sector": 0.14656716433322203,
          "share_company": 0.27998014856286296,
          "share_market_display": "57.3%",
          "share_sector_display": "14.7%",
          "share_company_display": "28.0%",
          "dominant_share_display": "57.3%"
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
          "share_market": 0.5060420237915503,
          "share_sector": 0.2844672547666903,
          "share_company": 0.20949072144175934,
          "share_market_display": "50.6%",
          "share_sector_display": "28.4%",
          "share_company_display": "20.9%",
          "dominant_share_display": "50.6%"
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
          "share_market": 0.34962870066476953,
          "share_sector": 0.26065410991127297,
          "share_company": 0.3897171894239575,
          "share_market_display": "35.0%",
          "share_sector_display": "26.1%",
          "share_company_display": "39.0%",
          "dominant_share_display": "39.0%"
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
          "share_market": 0.3517063105942029,
          "share_sector": 0.2639853022257003,
          "share_company": 0.3843083871800968,
          "share_market_display": "35.2%",
          "share_sector_display": "26.4%",
          "share_company_display": "38.4%",
          "dominant_share_display": "38.4%"
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
          "share_market": 0.5095553887043056,
          "share_sector": 0.1475757781634781,
          "share_company": 0.3428688331322161,
          "share_market_display": "51.0%",
          "share_sector_display": "14.8%",
          "share_company_display": "34.3%",
          "dominant_share_display": "51.0%"
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
          "share_market": 0.6847268034225207,
          "share_sector": 0.1513227545391001,
          "share_company": 0.16395044203837913,
          "share_market_display": "68.5%",
          "share_sector_display": "15.1%",
          "share_company_display": "16.4%",
          "dominant_share_display": "68.5%"
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
              "median": 0.008945986248446535,
              "low": 0.008945986248446535,
              "high": 0.008945986248446535
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.022626735828422322,
              "low": 0.022626735828422322,
              "high": 0.022626735828422322
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
            0.08130081300813008,
            0.9186991869918699
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 139.7,
          "quantity": 40000.0,
          "value": 5588000.0
        },
        {
          "level": 2,
          "price": 139.6,
          "quantity": 47600.0,
          "value": 6644960.0
        },
        {
          "level": 3,
          "price": 139.5,
          "quantity": 56000.0,
          "value": 7812000.0
        },
        {
          "level": 4,
          "price": 139.4,
          "quantity": 56000.0,
          "value": 7806400.0
        },
        {
          "level": 5,
          "price": 139.3,
          "quantity": 40000.0,
          "value": 5572000.0
        },
        {
          "level": 6,
          "price": 139.2,
          "quantity": 34400.0,
          "value": 4788480.0
        },
        {
          "level": 7,
          "price": 139.1,
          "quantity": 60400.0,
          "value": 8401640.0
        },
        {
          "level": 8,
          "price": 139.0,
          "quantity": 62800.0,
          "value": 8729200.0
        },
        {
          "level": 9,
          "price": 138.9,
          "quantity": 24800.0,
          "value": 3444720.0
        },
        {
          "level": 10,
          "price": 138.8,
          "quantity": 57200.0,
          "value": 7939360.000000001
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 139.8,
          "quantity": 46400.0,
          "value": 6486720.000000001
        },
        {
          "level": 2,
          "price": 139.9,
          "quantity": 58000.0,
          "value": 8114200.0
        },
        {
          "level": 3,
          "price": 140.0,
          "quantity": 373200.0,
          "value": 52248000.0
        },
        {
          "level": 4,
          "price": 140.1,
          "quantity": 137200.0,
          "value": 19221720.0
        },
        {
          "level": 5,
          "price": 140.2,
          "quantity": 124400.0,
          "value": 17440880.0
        },
        {
          "level": 6,
          "price": 140.3,
          "quantity": 169200.0,
          "value": 23738760.000000004
        },
        {
          "level": 7,
          "price": 140.4,
          "quantity": 144800.0,
          "value": 20329920.0
        },
        {
          "level": 8,
          "price": 140.5,
          "quantity": 710800.0,
          "value": 99867400.0
        },
        {
          "level": 9,
          "price": 140.6,
          "quantity": 112800.0,
          "value": 15859680.0
        },
        {
          "level": 10,
          "price": 140.7,
          "quantity": 53600.0,
          "value": 7541519.999999999
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-10 07:59:59.944000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 139.75,
        "spread_pct": 0.0007155635062613434,
        "spread_ticks": 1.0,
        "tick_size": 0.1,
        "bid_depth_notional_top10": 66726760.0,
        "ask_depth_notional_top10": 270848800.0,
        "bid_ask_depth_ratio": 0.2464
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 239,
        "n_trades_used": 2286163,
        "first_trade_date": "2025-04-10",
        "last_trade_date": "2026-04-10",
        "window_label": "Apr 10, 2025 to Apr 10, 2026",
        "window_short_label": "Apr 10, 2025 to Apr 10, 2026",
        "trade_days_label": "239 trading days",
        "trade_count_label": "2,286,163 trades",
        "window_detail_label": "239 trading days • 2,286,163 trades",
        "history_note": "Trade-size percentiles use Apr 10, 2025 to Apr 10, 2026 history (239 trading days • 2,286,163 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 392000.0,
            "impact_pct": -0.000358,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.59,
            "pct_of_adv": 0.02
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 709840.0,
            "impact_pct": -0.000358,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.06,
            "pct_of_adv": 0.03
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 18699111.81,
            "impact_pct": -0.0011070000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 28.02,
            "pct_of_adv": 0.81
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
            "order_id": "781547266.0",
            "timestamp": "2026-04-10 01:48:26.363000000",
            "local_timestamp": "2026-04-10 09:48:26",
            "posted_price": 140.0,
            "size_shares": 500000.0,
            "notional": 70000000.0,
            "impact_pct": -0.0036049999999999997,
            "filled_pct": 95.3,
            "levels_consumed": 10,
            "pct_of_bid_depth": 104.91,
            "price_vs_mid_pct": 0.179,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "3380558082.0",
            "timestamp": "2026-04-10 05:32:47.079000000",
            "local_timestamp": "2026-04-10 13:32:47",
            "posted_price": 140.0,
            "size_shares": 359600.0,
            "notional": 50344000.0,
            "impact_pct": -0.002754,
            "filled_pct": 100.0,
            "levels_consumed": 8,
            "pct_of_bid_depth": 75.45,
            "price_vs_mid_pct": 0.179,
            "executed_event_count": 0,
            "event_count": 160
          },
          {
            "rank": 3,
            "order_id": "3380558338.0",
            "timestamp": "2026-04-10 05:32:47.085000000",
            "local_timestamp": "2026-04-10 13:32:47",
            "posted_price": 140.0,
            "size_shares": 359600.0,
            "notional": 50344000.0,
            "impact_pct": -0.002754,
            "filled_pct": 100.0,
            "levels_consumed": 8,
            "pct_of_bid_depth": 75.45,
            "price_vs_mid_pct": 0.179,
            "executed_event_count": 0,
            "event_count": 135
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
            "spread_pct": 0.0007155635062613434,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 85882040.0,
            "ask_depth_notional": 209339120.0,
            "mid_price": 139.75
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0007160759040457883,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 71698720.0,
            "ask_depth_notional": 190942120.0,
            "mid_price": 139.64999999999998
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0007155635062613434,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 71675320.0,
            "ask_depth_notional": 236838960.0,
            "mid_price": 139.75
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0007155635062613434,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 84701080.0,
            "ask_depth_notional": 280701200.0,
            "mid_price": 139.75
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0007155635062613434,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 64060600.0,
            "ask_depth_notional": 311768360.0,
            "mid_price": 139.75
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0014306151645208658,
            "spread_ticks": 2.0000000000001705,
            "bid_depth_notional": 73515400.0,
            "ask_depth_notional": 336708800.0,
            "mid_price": 139.8
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0007119971520113516,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 85872120.0,
            "ask_depth_notional": 269073880.0,
            "mid_price": 140.45
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0007155635062613434,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 57932720.0,
            "ask_depth_notional": 194581000.0,
            "mid_price": 139.75
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0007150518412584505,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 73364800.0,
            "ask_depth_notional": 254061440.0,
            "mid_price": 139.85000000000002
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0007140307033202021,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 94538640.0,
            "ask_depth_notional": 344016360.0,
            "mid_price": 140.05
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0007155635062613434,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 66726760.0,
            "ask_depth_notional": 270848800.0,
            "mid_price": 139.75
          }
        ],
        "summary": {
          "median_spread_pct": 0.0007155635062613434,
          "median_spread_ticks": 1.0000000000002274,
          "median_bid_depth_notional": 73364800.0,
          "median_ask_depth_notional": 269073880.0,
          "tightest_bucket": "13:30",
          "widest_bucket": "13:00",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "14:00"
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
          "pct": 0.4
        },
        {
          "ticker": "2888",
          "pct": 0.5
        },
        {
          "ticker": "1658",
          "pct": 0.6
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 10053,
          "n_runs": 1297,
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
            "retail_pct": 0.042574355913657616,
            "mixed_pct": 0.0,
            "instit_pct": 0.5627175967372924,
            "ambiguous_pct": 0.36775092012334626,
            "unobservable_pct": 0.02695712722570377,
            "unclear_pct": 0.39470804734905,
            "retail_qty_pct": 0.014513325823170756,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6899704182186731,
            "ambiguous_qty_pct": 0.2819013079386224,
            "unobservable_qty_pct": 0.013614948019533734,
            "unclear_qty_pct": 0.2955162559581561,
            "retail_notional_pct": 0.014504851879021886,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6900227388973618,
            "ambiguous_notional_pct": 0.2818699431385553,
            "unobservable_notional_pct": 0.013602466085061186,
            "unclear_notional_pct": 0.29547240922361645
          },
          "run_composition": {
            "retail_pct": 0.2582883577486507,
            "mixed_pct": 0.0,
            "instit_pct": 0.1141094834232845,
            "ambiguous_pct": 0.4618350038550501,
            "unobservable_pct": 0.16576715497301464,
            "unclear_pct": 0.6276021588280647,
            "retail_notional_pct": 0.014504851879021886,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6900227388973618,
            "unclear_notional_pct": 0.29547240922361645
          },
          "counts": {
            "trades": {
              "retail": 428,
              "mixed": 0,
              "institutional": 5657,
              "ambiguous": 3697,
              "unobservable": 271,
              "unclear": 3968
            },
            "runs": {
              "retail": 335,
              "mixed": 0,
              "institutional": 148,
              "ambiguous": 599,
              "unobservable": 215,
              "unclear": 814
            }
          },
          "confidence": {
            "high": 0.13492675404780263,
            "medium": 0.15728604471858135,
            "low": 0.08018504240555127,
            "na": 0.6276021588280648
          },
          "confidence_counts": {
            "high": 175,
            "medium": 204,
            "low": 104,
            "na": 814
          },
          "trade_confidence": {
            "high": 0.017407738983388044,
            "medium": 0.4483238834178852,
            "low": 0.1395603302496767,
            "na": 0.39470804734905
          },
          "trade_confidence_counts": {
            "high": 175,
            "medium": 4507,
            "low": 1403,
            "na": 3968
          },
          "observability": {
            "avg_feature_coverage": 0.7528527370855822,
            "observable_run_pct": 0.8342328450269854,
            "ambiguous_run_pct": 0.4618350038550501,
            "unobservable_run_pct": 0.16576715497301464
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.4618350038550501,
          "dominance_gap": 0.2035466461063994,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 10053
            },
            "d2_information": {
              "UNOBSERVABLE": 10053
            },
            "d3_urgency": {
              "IMMEDIATE": 1013,
              "ADAPTIVE": 282,
              "OPPORTUNISTIC": 1,
              "SCHEDULED": 1
            },
            "participant_confidence": {
              "NA": 814,
              "MEDIUM": 204,
              "HIGH": 175,
              "LOW": 104
            }
          },
          "trade_size": {
            "avg": 223312.321466229,
            "median": 56160.0
          },
          "run_size": {
            "avg": 1730885.7114109483,
            "median": 223800.0,
            "avg_length": 7.7509637625289125
          },
          "recent_trades": [
            {
              "trade_id": "10197",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 1600.0,
              "notional": 223519.99999999997,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10196",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 5200.0,
              "notional": 726439.9999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10195",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10194",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10193",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10192",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10191",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10190",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10189",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10188",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10187",
              "timestamp": "2026-04-10T07:59:54.882510",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10186",
              "timestamp": "2026-04-10T07:59:48.816480",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10185",
              "timestamp": "2026-04-10T07:59:47.408796",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10184",
              "timestamp": "2026-04-10T07:59:47.282104",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10183",
              "timestamp": "2026-04-10T07:59:46.803177",
              "price": 139.6,
              "size": 1600.0,
              "notional": 223360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10182",
              "timestamp": "2026-04-10T07:59:45.988271",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10181",
              "timestamp": "2026-04-10T07:59:44.597665",
              "price": 139.7,
              "size": 16400.0,
              "notional": 2291080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10180",
              "timestamp": "2026-04-10T07:59:43.106065",
              "price": 139.6,
              "size": 800.0,
              "notional": 111680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10179",
              "timestamp": "2026-04-10T07:59:43.003106",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10178",
              "timestamp": "2026-04-10T07:59:39.573995",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10177",
              "timestamp": "2026-04-10T07:59:39.528427",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10176",
              "timestamp": "2026-04-10T07:59:39.357996",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10175",
              "timestamp": "2026-04-10T07:59:36.696133",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10174",
              "timestamp": "2026-04-10T07:59:36.696133",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10173",
              "timestamp": "2026-04-10T07:59:35.834193",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10172",
              "timestamp": "2026-04-10T07:59:34.995550",
              "price": 139.6,
              "size": 800.0,
              "notional": 111680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10171",
              "timestamp": "2026-04-10T07:59:34.407538",
              "price": 139.6,
              "size": 20400.0,
              "notional": 2847840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10170",
              "timestamp": "2026-04-10T07:59:30.078416",
              "price": 139.6,
              "size": 2400.0,
              "notional": 335040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10169",
              "timestamp": "2026-04-10T07:59:30.003997",
              "price": 139.6,
              "size": 1600.0,
              "notional": 223360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10168",
              "timestamp": "2026-04-10T07:59:29.691349",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
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
          "n_trades": 268752,
          "n_runs": 25514,
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
            "retail_pct": 0.036044382925522415,
            "mixed_pct": 0.0,
            "instit_pct": 0.5282007203667322,
            "ambiguous_pct": 0.40762859439185567,
            "unobservable_pct": 0.028126302315889744,
            "unclear_pct": 0.4357548967077454,
            "retail_qty_pct": 0.014731796895302646,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6158374038068872,
            "ambiguous_qty_pct": 0.3494448377909659,
            "unobservable_qty_pct": 0.01998596150684423,
            "unclear_qty_pct": 0.36943079929781014,
            "retail_notional_pct": 0.014708466555396144,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6174663403420849,
            "ambiguous_notional_pct": 0.3479815483146749,
            "unobservable_notional_pct": 0.019843644787843968,
            "unclear_notional_pct": 0.3678251931025189
          },
          "run_composition": {
            "retail_pct": 0.2249353296229521,
            "mixed_pct": 0.0,
            "instit_pct": 0.12338324057380262,
            "ambiguous_pct": 0.4561809202790625,
            "unobservable_pct": 0.1955005095241828,
            "unclear_pct": 0.6516814298032453,
            "retail_notional_pct": 0.014708466555396144,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6174663403420849,
            "unclear_notional_pct": 0.3678251931025189
          },
          "counts": {
            "trades": {
              "retail": 9687,
              "mixed": 0,
              "institutional": 141955,
              "ambiguous": 109551,
              "unobservable": 7559,
              "unclear": 117110
            },
            "runs": {
              "retail": 5739,
              "mixed": 0,
              "institutional": 3148,
              "ambiguous": 11639,
              "unobservable": 4988,
              "unclear": 16627
            }
          },
          "confidence": {
            "high": 0.10288469075801521,
            "medium": 0.1663400486007682,
            "low": 0.07909383083797131,
            "na": 0.6516814298032453
          },
          "confidence_counts": {
            "high": 2625,
            "medium": 4244,
            "low": 2018,
            "na": 16627
          },
          "trade_confidence": {
            "high": 0.014876168363398225,
            "medium": 0.43721349050425673,
            "low": 0.11215544442459963,
            "na": 0.4357548967077454
          },
          "trade_confidence_counts": {
            "high": 3998,
            "medium": 117502,
            "low": 30142,
            "na": 117110
          },
          "observability": {
            "avg_feature_coverage": 0.746374539468527,
            "observable_run_pct": 0.8044994904758171,
            "ambiguous_run_pct": 0.4561809202790625,
            "unobservable_run_pct": 0.1955005095241828
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.4561809202790625,
          "dominance_gap": 0.2312455906561104,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 268752
            },
            "d2_information": {
              "UNOBSERVABLE": 268752
            },
            "d3_urgency": {
              "IMMEDIATE": 18962,
              "ADAPTIVE": 6516,
              "SCHEDULED": 27,
              "OPPORTUNISTIC": 9
            },
            "participant_confidence": {
              "NA": 16627,
              "MEDIUM": 4244,
              "HIGH": 2625,
              "LOW": 2018
            }
          },
          "trade_size": {
            "avg": 179445.55211600286,
            "median": 55520.00000000001
          },
          "run_size": {
            "avg": 1890191.6995484831,
            "median": 278080.0,
            "avg_length": 10.533511013561181
          },
          "recent_trades": [
            {
              "trade_id": "10197",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 1600.0,
              "notional": 223519.99999999997,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10196",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 5200.0,
              "notional": 726439.9999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10195",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10194",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10193",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10192",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10191",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10190",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10189",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10188",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10187",
              "timestamp": "2026-04-10T07:59:54.882510",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10186",
              "timestamp": "2026-04-10T07:59:48.816480",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10185",
              "timestamp": "2026-04-10T07:59:47.408796",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10184",
              "timestamp": "2026-04-10T07:59:47.282104",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10183",
              "timestamp": "2026-04-10T07:59:46.803177",
              "price": 139.6,
              "size": 1600.0,
              "notional": 223360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10182",
              "timestamp": "2026-04-10T07:59:45.988271",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10181",
              "timestamp": "2026-04-10T07:59:44.597665",
              "price": 139.7,
              "size": 16400.0,
              "notional": 2291080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10180",
              "timestamp": "2026-04-10T07:59:43.106065",
              "price": 139.6,
              "size": 800.0,
              "notional": 111680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10179",
              "timestamp": "2026-04-10T07:59:43.003106",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10178",
              "timestamp": "2026-04-10T07:59:39.573995",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10177",
              "timestamp": "2026-04-10T07:59:39.528427",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10176",
              "timestamp": "2026-04-10T07:59:39.357996",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10175",
              "timestamp": "2026-04-10T07:59:36.696133",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10174",
              "timestamp": "2026-04-10T07:59:36.696133",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10173",
              "timestamp": "2026-04-10T07:59:35.834193",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10172",
              "timestamp": "2026-04-10T07:59:34.995550",
              "price": 139.6,
              "size": 800.0,
              "notional": 111680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10171",
              "timestamp": "2026-04-10T07:59:34.407538",
              "price": 139.6,
              "size": 20400.0,
              "notional": 2847840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10170",
              "timestamp": "2026-04-10T07:59:30.078416",
              "price": 139.6,
              "size": 2400.0,
              "notional": 335040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10169",
              "timestamp": "2026-04-10T07:59:30.003997",
              "price": 139.6,
              "size": 1600.0,
              "notional": 223360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10168",
              "timestamp": "2026-04-10T07:59:29.691349",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
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
          "n_trades": 717663,
          "n_runs": 76649,
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
            "retail_pct": 0.0365073857785618,
            "mixed_pct": 0.0,
            "instit_pct": 0.5324880898137426,
            "ambiguous_pct": 0.397678297473884,
            "unobservable_pct": 0.03332622693381155,
            "unclear_pct": 0.43100452440769554,
            "retail_qty_pct": 0.015148120316427018,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6320503099882322,
            "ambiguous_qty_pct": 0.33136321629724874,
            "unobservable_qty_pct": 0.021438353398092035,
            "unclear_qty_pct": 0.35280156969534077,
            "retail_notional_pct": 0.01510902317782832,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6331666642117701,
            "ambiguous_notional_pct": 0.3304616036198019,
            "unobservable_notional_pct": 0.02126270899059952,
            "unclear_notional_pct": 0.35172431261040144
          },
          "run_composition": {
            "retail_pct": 0.20934389228822295,
            "mixed_pct": 0.0,
            "instit_pct": 0.12203681717961096,
            "ambiguous_pct": 0.44772925935106783,
            "unobservable_pct": 0.22089003118109826,
            "unclear_pct": 0.6686192905321661,
            "retail_notional_pct": 0.01510902317782832,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6331666642117701,
            "unclear_notional_pct": 0.35172431261040144
          },
          "counts": {
            "trades": {
              "retail": 26200,
              "mixed": 0,
              "institutional": 382147,
              "ambiguous": 285399,
              "unobservable": 23917,
              "unclear": 309316
            },
            "runs": {
              "retail": 16046,
              "mixed": 0,
              "institutional": 9354,
              "ambiguous": 34318,
              "unobservable": 16931,
              "unclear": 51249
            }
          },
          "confidence": {
            "high": 0.09561768581455726,
            "medium": 0.16505107698730578,
            "low": 0.07071194666597086,
            "na": 0.6686192905321661
          },
          "confidence_counts": {
            "high": 7329,
            "medium": 12651,
            "low": 5420,
            "na": 51249
          },
          "trade_confidence": {
            "high": 0.03380138031360123,
            "medium": 0.4243259022688922,
            "low": 0.11086819300981102,
            "na": 0.43100452440769554
          },
          "trade_confidence_counts": {
            "high": 24258,
            "medium": 304523,
            "low": 79566,
            "na": 309316
          },
          "observability": {
            "avg_feature_coverage": 0.7390285587548435,
            "observable_run_pct": 0.7791099688189017,
            "ambiguous_run_pct": 0.44772925935106783,
            "unobservable_run_pct": 0.22089003118109826
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.44772925935106783,
          "dominance_gap": 0.22683922816996957,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 717663
            },
            "d2_information": {
              "UNOBSERVABLE": 717663
            },
            "d3_urgency": {
              "IMMEDIATE": 58101,
              "ADAPTIVE": 18435,
              "SCHEDULED": 91,
              "OPPORTUNISTIC": 22
            },
            "participant_confidence": {
              "NA": 51249,
              "MEDIUM": 12651,
              "HIGH": 7329,
              "LOW": 5420
            }
          },
          "trade_size": {
            "avg": 183398.09176769597,
            "median": 56320.00000000001
          },
          "run_size": {
            "avg": 1717152.5360054274,
            "median": 253200.0,
            "avg_length": 9.3629792952289
          },
          "recent_trades": [
            {
              "trade_id": "10197",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 1600.0,
              "notional": 223519.99999999997,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10196",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 5200.0,
              "notional": 726439.9999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10195",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10194",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10193",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10192",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10191",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10190",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10189",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10188",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10187",
              "timestamp": "2026-04-10T07:59:54.882510",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10186",
              "timestamp": "2026-04-10T07:59:48.816480",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10185",
              "timestamp": "2026-04-10T07:59:47.408796",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10184",
              "timestamp": "2026-04-10T07:59:47.282104",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10183",
              "timestamp": "2026-04-10T07:59:46.803177",
              "price": 139.6,
              "size": 1600.0,
              "notional": 223360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10182",
              "timestamp": "2026-04-10T07:59:45.988271",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10181",
              "timestamp": "2026-04-10T07:59:44.597665",
              "price": 139.7,
              "size": 16400.0,
              "notional": 2291080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10180",
              "timestamp": "2026-04-10T07:59:43.106065",
              "price": 139.6,
              "size": 800.0,
              "notional": 111680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10179",
              "timestamp": "2026-04-10T07:59:43.003106",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10178",
              "timestamp": "2026-04-10T07:59:39.573995",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10177",
              "timestamp": "2026-04-10T07:59:39.528427",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10176",
              "timestamp": "2026-04-10T07:59:39.357996",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10175",
              "timestamp": "2026-04-10T07:59:36.696133",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10174",
              "timestamp": "2026-04-10T07:59:36.696133",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10173",
              "timestamp": "2026-04-10T07:59:35.834193",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10172",
              "timestamp": "2026-04-10T07:59:34.995550",
              "price": 139.6,
              "size": 800.0,
              "notional": 111680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10171",
              "timestamp": "2026-04-10T07:59:34.407538",
              "price": 139.6,
              "size": 20400.0,
              "notional": 2847840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10170",
              "timestamp": "2026-04-10T07:59:30.078416",
              "price": 139.6,
              "size": 2400.0,
              "notional": 335040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10169",
              "timestamp": "2026-04-10T07:59:30.003997",
              "price": 139.6,
              "size": 1600.0,
              "notional": 223360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10168",
              "timestamp": "2026-04-10T07:59:29.691349",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
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
          "n_trades": 1255207,
          "n_runs": 149736,
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
            "retail_pct": 0.041856044461192454,
            "mixed_pct": 0.0,
            "instit_pct": 0.5072008043294851,
            "ambiguous_pct": 0.4156987652235846,
            "unobservable_pct": 0.035244385985737814,
            "unclear_pct": 0.45094315120932243,
            "retail_qty_pct": 0.01726776005347823,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6063844580712575,
            "ambiguous_qty_pct": 0.35467512464020545,
            "unobservable_qty_pct": 0.02167265723505882,
            "unclear_qty_pct": 0.3763477818752643,
            "retail_notional_pct": 0.017065101618339518,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6095332621218822,
            "ambiguous_notional_pct": 0.3517910261989793,
            "unobservable_notional_pct": 0.021610610060798983,
            "unclear_notional_pct": 0.3734016362597783
          },
          "run_composition": {
            "retail_pct": 0.23162098626916708,
            "mixed_pct": 0.0,
            "instit_pct": 0.10663434311054122,
            "ambiguous_pct": 0.4480886359993589,
            "unobservable_pct": 0.21365603462093286,
            "unclear_pct": 0.6617446706202917,
            "retail_notional_pct": 0.017065101618339518,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6095332621218822,
            "unclear_notional_pct": 0.3734016362597783
          },
          "counts": {
            "trades": {
              "retail": 52538,
              "mixed": 0,
              "institutional": 636642,
              "ambiguous": 521788,
              "unobservable": 44239,
              "unclear": 566027
            },
            "runs": {
              "retail": 34682,
              "mixed": 0,
              "institutional": 15967,
              "ambiguous": 67095,
              "unobservable": 31992,
              "unclear": 99087
            }
          },
          "confidence": {
            "high": 0.10507827109045254,
            "medium": 0.16155099642036652,
            "low": 0.07162606186888924,
            "na": 0.6617446706202917
          },
          "confidence_counts": {
            "high": 15734,
            "medium": 24190,
            "low": 10725,
            "na": 99087
          },
          "trade_confidence": {
            "high": 0.031083319325019697,
            "medium": 0.40105815216135665,
            "low": 0.1169153773043012,
            "na": 0.45094315120932243
          },
          "trade_confidence_counts": {
            "high": 39016,
            "medium": 503411,
            "low": 146753,
            "na": 566027
          },
          "observability": {
            "avg_feature_coverage": 0.7397730004808464,
            "observable_run_pct": 0.7863439653790671,
            "ambiguous_run_pct": 0.4480886359993589,
            "unobservable_run_pct": 0.21365603462093286
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.4480886359993589,
          "dominance_gap": 0.2164676497301918,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 1255207
            },
            "d2_information": {
              "UNOBSERVABLE": 1255207
            },
            "d3_urgency": {
              "IMMEDIATE": 117148,
              "ADAPTIVE": 32423,
              "SCHEDULED": 129,
              "OPPORTUNISTIC": 36
            },
            "participant_confidence": {
              "NA": 99087,
              "MEDIUM": 24190,
              "HIGH": 15734,
              "LOW": 10725
            }
          },
          "trade_size": {
            "avg": 184224.46382072917,
            "median": 56720.00000000001
          },
          "run_size": {
            "avg": 1544316.9081518538,
            "median": 214520.0,
            "avg_length": 8.382800395362505
          },
          "recent_trades": [
            {
              "trade_id": "10197",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 1600.0,
              "notional": 223519.99999999997,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10196",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 5200.0,
              "notional": 726439.9999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10195",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10194",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10193",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10192",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10191",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10190",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10189",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10188",
              "timestamp": "2026-04-10T07:59:55.092799",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10187",
              "timestamp": "2026-04-10T07:59:54.882510",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10186",
              "timestamp": "2026-04-10T07:59:48.816480",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10185",
              "timestamp": "2026-04-10T07:59:47.408796",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10184",
              "timestamp": "2026-04-10T07:59:47.282104",
              "price": 139.7,
              "size": 800.0,
              "notional": 111759.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10183",
              "timestamp": "2026-04-10T07:59:46.803177",
              "price": 139.6,
              "size": 1600.0,
              "notional": 223360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10182",
              "timestamp": "2026-04-10T07:59:45.988271",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10181",
              "timestamp": "2026-04-10T07:59:44.597665",
              "price": 139.7,
              "size": 16400.0,
              "notional": 2291080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10180",
              "timestamp": "2026-04-10T07:59:43.106065",
              "price": 139.6,
              "size": 800.0,
              "notional": 111680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10179",
              "timestamp": "2026-04-10T07:59:43.003106",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10178",
              "timestamp": "2026-04-10T07:59:39.573995",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10177",
              "timestamp": "2026-04-10T07:59:39.528427",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10176",
              "timestamp": "2026-04-10T07:59:39.357996",
              "price": 139.6,
              "size": 1200.0,
              "notional": 167520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10175",
              "timestamp": "2026-04-10T07:59:36.696133",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10174",
              "timestamp": "2026-04-10T07:59:36.696133",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10173",
              "timestamp": "2026-04-10T07:59:35.834193",
              "price": 139.6,
              "size": 400.0,
              "notional": 55840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10172",
              "timestamp": "2026-04-10T07:59:34.995550",
              "price": 139.6,
              "size": 800.0,
              "notional": 111680.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10171",
              "timestamp": "2026-04-10T07:59:34.407538",
              "price": 139.6,
              "size": 20400.0,
              "notional": 2847840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10170",
              "timestamp": "2026-04-10T07:59:30.078416",
              "price": 139.6,
              "size": 2400.0,
              "notional": 335040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10169",
              "timestamp": "2026-04-10T07:59:30.003997",
              "price": 139.6,
              "size": 1600.0,
              "notional": 223360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10168",
              "timestamp": "2026-04-10T07:59:29.691349",
              "price": 139.7,
              "size": 400.0,
              "notional": 55879.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241692,
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
      "n_trades": 1255207,
      "n_runs": 149736,
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
        "retail_pct": 0.041856044461192454,
        "mixed_pct": 0.0,
        "instit_pct": 0.5072008043294851,
        "ambiguous_pct": 0.4156987652235846,
        "unobservable_pct": 0.035244385985737814,
        "unclear_pct": 0.45094315120932243,
        "retail_qty_pct": 0.01726776005347823,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.6063844580712575,
        "ambiguous_qty_pct": 0.35467512464020545,
        "unobservable_qty_pct": 0.02167265723505882,
        "unclear_qty_pct": 0.3763477818752643,
        "retail_notional_pct": 0.017065101618339518,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.6095332621218822,
        "ambiguous_notional_pct": 0.3517910261989793,
        "unobservable_notional_pct": 0.021610610060798983,
        "unclear_notional_pct": 0.3734016362597783
      },
      "run_composition": {
        "retail_pct": 0.23162098626916708,
        "mixed_pct": 0.0,
        "instit_pct": 0.10663434311054122,
        "ambiguous_pct": 0.4480886359993589,
        "unobservable_pct": 0.21365603462093286,
        "unclear_pct": 0.6617446706202917
      },
      "trade_size": {
        "avg": 184224.46382072917,
        "median": 56720.00000000001
      },
      "run_size": {
        "avg": 1544316.9081518538,
        "median": 214520.0,
        "avg_length": 8.382800395362505
      },
      "confidence": {
        "high": 0.10507827109045254,
        "medium": 0.16155099642036652,
        "low": 0.07162606186888924,
        "na": 0.6617446706202917
      },
      "confidence_counts": {
        "high": 15734,
        "medium": 24190,
        "low": 10725,
        "na": 99087
      },
      "trade_confidence": {
        "high": 0.031083319325019697,
        "medium": 0.40105815216135665,
        "low": 0.1169153773043012,
        "na": 0.45094315120932243
      },
      "trade_confidence_counts": {
        "high": 39016,
        "medium": 503411,
        "low": 146753,
        "na": 566027
      },
      "counts": {
        "trades": {
          "retail": 52538,
          "mixed": 0,
          "institutional": 636642,
          "ambiguous": 521788,
          "unobservable": 44239,
          "unclear": 566027
        },
        "runs": {
          "retail": 34682,
          "mixed": 0,
          "institutional": 15967,
          "ambiguous": 67095,
          "unobservable": 31992,
          "unclear": 99087
        }
      },
      "observability": {
        "avg_feature_coverage": 0.7397730004808464,
        "observable_run_pct": 0.7863439653790671,
        "ambiguous_run_pct": 0.4480886359993589,
        "unobservable_run_pct": 0.21365603462093286
      },
      "dominant_bucket": "AMBIGUOUS",
      "dominant_label": "Unclassified Flow",
      "dominant_share": 0.4480886359993589,
      "dominance_gap": 0.2164676497301918,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 130529,
            "n_runs": 23891,
            "retail_pct": 0.05661577120793081,
            "mixed_pct": 0.0,
            "instit_pct": 0.41403059856430374,
            "ambiguous_pct": 0.47443096936313,
            "unobservable_pct": 0.054922660864635445,
            "unclear_pct": 0.5293536302277655,
            "avg_trade_size": 175062.38785633844,
            "avg_run_notional": 956457.1773680466,
            "retail_qty_pct": 0.022354753475751228,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5457940844941518,
            "ambiguous_qty_pct": 0.39786715828777014,
            "unobservable_qty_pct": 0.03398400374232682,
            "unclear_qty_pct": 0.43185116203009694,
            "retail_notional_pct": 0.022326726968592604,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5460371633708501,
            "ambiguous_notional_pct": 0.3976647256506918,
            "unobservable_notional_pct": 0.033971384009865574,
            "unclear_notional_pct": 0.4316361096605573,
            "run_retail_pct": 0.24867104767485665,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.09384286969988699,
            "run_ambiguous_pct": 0.44037503662467037,
            "run_unobservable_pct": 0.217111046000586,
            "run_unclear_pct": 0.6574860826252564,
            "avg_feature_coverage": 0.7361956385249676,
            "high_confidence_pct": 0.11493867983759574,
            "medium_confidence_pct": 0.15436775354736093,
            "low_confidence_pct": 0.07320748398978695,
            "na_confidence_pct": 0.6574860826252563,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 119348,
            "n_runs": 16945,
            "retail_pct": 0.04892415457318095,
            "mixed_pct": 0.0,
            "instit_pct": 0.5001508194523578,
            "ambiguous_pct": 0.41113382712739216,
            "unobservable_pct": 0.039791198847069074,
            "unclear_pct": 0.4509250259744612,
            "avg_trade_size": 187246.7599983745,
            "avg_run_notional": 1318827.1650803187,
            "retail_qty_pct": 0.021067765079017454,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6098390447624753,
            "ambiguous_qty_pct": 0.34829796652754363,
            "unobservable_qty_pct": 0.020795223630963606,
            "unclear_qty_pct": 0.3690931901585072,
            "retail_notional_pct": 0.021028172188778133,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6099638806562668,
            "ambiguous_notional_pct": 0.3483071457760718,
            "unobservable_notional_pct": 0.020700801378883263,
            "unclear_notional_pct": 0.36900794715495505,
            "run_retail_pct": 0.23865447034523457,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1055768663322514,
            "run_ambiguous_pct": 0.44024786072587785,
            "run_unobservable_pct": 0.21552080259663617,
            "run_unclear_pct": 0.655768663322514,
            "avg_feature_coverage": 0.738967246975509,
            "high_confidence_pct": 0.10362938920035408,
            "medium_confidence_pct": 0.16299793449395103,
            "low_confidence_pct": 0.07760401298318088,
            "na_confidence_pct": 0.655768663322514,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 171594,
            "n_runs": 26776,
            "retail_pct": 0.04277538841684441,
            "mixed_pct": 0.0,
            "instit_pct": 0.4834726155926198,
            "ambiguous_pct": 0.42125016026201384,
            "unobservable_pct": 0.052501835728521976,
            "unclear_pct": 0.4737519959905358,
            "avg_trade_size": 177200.0671777568,
            "avg_run_notional": 1135586.6569801315,
            "retail_qty_pct": 0.018753089382694963,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6100044508983486,
            "ambiguous_qty_pct": 0.340346004210495,
            "unobservable_qty_pct": 0.03089645550846136,
            "unclear_qty_pct": 0.37124245971895636,
            "retail_notional_pct": 0.01878386719075824,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6093990804141961,
            "ambiguous_notional_pct": 0.34113309581195483,
            "unobservable_notional_pct": 0.03068395658309084,
            "unclear_notional_pct": 0.3718170523950457,
            "run_retail_pct": 0.19207499253062443,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.11741858380639379,
            "run_ambiguous_pct": 0.43322378249178367,
            "run_unobservable_pct": 0.2572826411711981,
            "run_unclear_pct": 0.6905064236629818,
            "avg_feature_coverage": 0.7287010755900806,
            "high_confidence_pct": 0.10483268598745145,
            "medium_confidence_pct": 0.14826710487003286,
            "low_confidence_pct": 0.056393785479533914,
            "na_confidence_pct": 0.6905064236629818,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 174154,
            "n_runs": 19847,
            "retail_pct": 0.03211525431514636,
            "mixed_pct": 0.0,
            "instit_pct": 0.5500246907909092,
            "ambiguous_pct": 0.38161052861260725,
            "unobservable_pct": 0.03624952628133721,
            "unclear_pct": 0.41786005489394445,
            "avg_trade_size": 198338.99321520035,
            "avg_run_notional": 1740390.438071245,
            "retail_qty_pct": 0.012202910328618423,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6638284465131539,
            "ambiguous_qty_pct": 0.3025095179581183,
            "unobservable_qty_pct": 0.02145912520010943,
            "unclear_qty_pct": 0.32396864315822776,
            "retail_notional_pct": 0.012200768104454822,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6645636197513042,
            "ambiguous_notional_pct": 0.301905523624432,
            "unobservable_notional_pct": 0.02133008851980889,
            "unclear_notional_pct": 0.3232356121442409,
            "run_retail_pct": 0.1981659696679599,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.12193278581145765,
            "run_ambiguous_pct": 0.45195747468131203,
            "run_unobservable_pct": 0.22794376983927042,
            "run_unclear_pct": 0.6799012445205824,
            "avg_feature_coverage": 0.7331637023227693,
            "high_confidence_pct": 0.08762029525872927,
            "medium_confidence_pct": 0.1709578273794528,
            "low_confidence_pct": 0.06152063284123545,
            "na_confidence_pct": 0.6799012445205824,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 309382,
            "n_runs": 26591,
            "retail_pct": 0.03673129012030435,
            "mixed_pct": 0.0,
            "instit_pct": 0.5243582367429263,
            "ambiguous_pct": 0.41351791636229646,
            "unobservable_pct": 0.025392556774472982,
            "unclear_pct": 0.43891047313676945,
            "avg_trade_size": 175158.89463249317,
            "avg_run_notional": 2037945.5131130836,
            "retail_qty_pct": 0.015640509319784227,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6071164299997984,
            "ambiguous_qty_pct": 0.3587747182345252,
            "unobservable_qty_pct": 0.018468342445892145,
            "unclear_qty_pct": 0.37724306068041735,
            "retail_notional_pct": 0.015653043288440208,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6076199315594102,
            "ambiguous_notional_pct": 0.35837483795730407,
            "unobservable_notional_pct": 0.01835218719484553,
            "unclear_notional_pct": 0.3767270251521496,
            "run_retail_pct": 0.22330863826106578,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.12237223120604716,
            "run_ambiguous_pct": 0.4598548381031176,
            "run_unobservable_pct": 0.19446429242976948,
            "run_unclear_pct": 0.654319130532887,
            "avg_feature_coverage": 0.7487213718927457,
            "high_confidence_pct": 0.09074498890602084,
            "medium_confidence_pct": 0.17340453536910985,
            "low_confidence_pct": 0.08153134519198225,
            "na_confidence_pct": 0.654319130532887,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 76342,
            "n_runs": 5936,
            "retail_pct": 0.033363024285452306,
            "mixed_pct": 0.0,
            "instit_pct": 0.6147598962563202,
            "ambiguous_pct": 0.3320583689188127,
            "unobservable_pct": 0.01981871053941474,
            "unclear_pct": 0.35187707945822744,
            "avg_trade_size": 194163.78355282807,
            "avg_run_notional": 2497111.1125320084,
            "retail_qty_pct": 0.013219216894655534,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6870984361140687,
            "ambiguous_qty_pct": 0.28579719414630467,
            "unobservable_qty_pct": 0.013885152844971056,
            "unclear_qty_pct": 0.2996823469912757,
            "retail_notional_pct": 0.01326438322958387,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6873537992137498,
            "ambiguous_notional_pct": 0.28574066503435286,
            "unobservable_notional_pct": 0.013641152522313446,
            "unclear_notional_pct": 0.2993818175566663,
            "run_retail_pct": 0.26246630727762804,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.13359164420485176,
            "run_ambiguous_pct": 0.4432277628032345,
            "run_unobservable_pct": 0.16071428571428573,
            "run_unclear_pct": 0.6039420485175202,
            "avg_feature_coverage": 0.7570333557951483,
            "high_confidence_pct": 0.11809299191374663,
            "medium_confidence_pct": 0.16863207547169812,
            "low_confidence_pct": 0.10933288409703504,
            "na_confidence_pct": 0.6039420485175202,
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
          "trade_id": "10197",
          "timestamp": "2026-04-10T07:59:55.092799",
          "price": 139.7,
          "size": 1600.0,
          "notional": 223519.99999999997,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10196",
          "timestamp": "2026-04-10T07:59:55.092799",
          "price": 139.7,
          "size": 5200.0,
          "notional": 726439.9999999999,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10195",
          "timestamp": "2026-04-10T07:59:55.092799",
          "price": 139.7,
          "size": 400.0,
          "notional": 55879.99999999999,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10194",
          "timestamp": "2026-04-10T07:59:55.092799",
          "price": 139.7,
          "size": 400.0,
          "notional": 55879.99999999999,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10193",
          "timestamp": "2026-04-10T07:59:55.092799",
          "price": 139.7,
          "size": 800.0,
          "notional": 111759.99999999999,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10192",
          "timestamp": "2026-04-10T07:59:55.092799",
          "price": 139.7,
          "size": 400.0,
          "notional": 55879.99999999999,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10191",
          "timestamp": "2026-04-10T07:59:55.092799",
          "price": 139.7,
          "size": 400.0,
          "notional": 55879.99999999999,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10190",
          "timestamp": "2026-04-10T07:59:55.092799",
          "price": 139.7,
          "size": 400.0,
          "notional": 55879.99999999999,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10189",
          "timestamp": "2026-04-10T07:59:55.092799",
          "price": 139.7,
          "size": 400.0,
          "notional": 55879.99999999999,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10188",
          "timestamp": "2026-04-10T07:59:55.092799",
          "price": 139.7,
          "size": 800.0,
          "notional": 111759.99999999999,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10187",
          "timestamp": "2026-04-10T07:59:54.882510",
          "price": 139.6,
          "size": 1200.0,
          "notional": 167520.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10186",
          "timestamp": "2026-04-10T07:59:48.816480",
          "price": 139.7,
          "size": 400.0,
          "notional": 55879.99999999999,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10185",
          "timestamp": "2026-04-10T07:59:47.408796",
          "price": 139.6,
          "size": 400.0,
          "notional": 55840.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10184",
          "timestamp": "2026-04-10T07:59:47.282104",
          "price": 139.7,
          "size": 800.0,
          "notional": 111759.99999999999,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10183",
          "timestamp": "2026-04-10T07:59:46.803177",
          "price": 139.6,
          "size": 1600.0,
          "notional": 223360.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10182",
          "timestamp": "2026-04-10T07:59:45.988271",
          "price": 139.6,
          "size": 1200.0,
          "notional": 167520.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10181",
          "timestamp": "2026-04-10T07:59:44.597665",
          "price": 139.7,
          "size": 16400.0,
          "notional": 2291080.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10180",
          "timestamp": "2026-04-10T07:59:43.106065",
          "price": 139.6,
          "size": 800.0,
          "notional": 111680.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10179",
          "timestamp": "2026-04-10T07:59:43.003106",
          "price": 139.6,
          "size": 400.0,
          "notional": 55840.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10178",
          "timestamp": "2026-04-10T07:59:39.573995",
          "price": 139.6,
          "size": 400.0,
          "notional": 55840.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10177",
          "timestamp": "2026-04-10T07:59:39.528427",
          "price": 139.6,
          "size": 400.0,
          "notional": 55840.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10176",
          "timestamp": "2026-04-10T07:59:39.357996",
          "price": 139.6,
          "size": 1200.0,
          "notional": 167520.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10175",
          "timestamp": "2026-04-10T07:59:36.696133",
          "price": 139.6,
          "size": 400.0,
          "notional": 55840.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10174",
          "timestamp": "2026-04-10T07:59:36.696133",
          "price": 139.6,
          "size": 400.0,
          "notional": 55840.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10173",
          "timestamp": "2026-04-10T07:59:35.834193",
          "price": 139.6,
          "size": 400.0,
          "notional": 55840.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10172",
          "timestamp": "2026-04-10T07:59:34.995550",
          "price": 139.6,
          "size": 800.0,
          "notional": 111680.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10171",
          "timestamp": "2026-04-10T07:59:34.407538",
          "price": 139.6,
          "size": 20400.0,
          "notional": 2847840.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10170",
          "timestamp": "2026-04-10T07:59:30.078416",
          "price": 139.6,
          "size": 2400.0,
          "notional": 335040.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10169",
          "timestamp": "2026-04-10T07:59:30.003997",
          "price": 139.6,
          "size": 1600.0,
          "notional": 223360.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10168",
          "timestamp": "2026-04-10T07:59:29.691349",
          "price": 139.7,
          "size": 400.0,
          "notional": 55879.99999999999,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241692,
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
      "total_trades": 1255206,
      "price_moving_trades": 247224,
      "pct_price_moving": 19.69589055501647,
      "all_movers": {
        "count": 247224,
        "avg_size": 139518.6746690289,
        "median_size": 54320.00000000001,
        "retail_count": 23788,
        "mixed_count": 0,
        "institutional_count": 90757,
        "ambiguous_count": 119122,
        "unobservable_count": 13557,
        "retail_pct": 9.622043167330032,
        "mixed_pct": 0.0,
        "instit_pct": 36.71043264407986,
        "unclear_pct": 53.66752418859011
      },
      "positive_movers": {
        "count": 123604,
        "avg_size": 146092.99971834244,
        "median_size": 55160.0,
        "retail_count": 6494,
        "mixed_count": 0,
        "institutional_count": 45603,
        "ambiguous_count": 59453,
        "unobservable_count": 12054,
        "retail_pct": 5.253875279117181,
        "mixed_pct": 0.0,
        "instit_pct": 36.894437073233874,
        "unclear_pct": 57.851687647648944
      },
      "negative_movers": {
        "count": 123620,
        "avg_size": 132945.20052734186,
        "median_size": 53679.99999999999,
        "retail_count": 17294,
        "mixed_count": 0,
        "institutional_count": 45154,
        "ambiguous_count": 59669,
        "unobservable_count": 1503,
        "retail_pct": 13.989645688399936,
        "mixed_pct": 0.0,
        "instit_pct": 36.52645203041579,
        "unclear_pct": 49.48390228118427
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
          "opening": 0.021391512061880825,
          "continuous": 0.9393003982364735,
          "closing": 0.03352068383696406,
          "auctions": 0.054912195898844884,
          "other": 0.005787405864681541
        },
        "1M": {
          "opening": 0.016473602364249808,
          "continuous": 0.8631922765665291,
          "closing": 0.06440917794709705,
          "auctions": 0.08088278031134685,
          "other": 0.05592494312212419
        },
        "3M": {
          "opening": 0.016802077579338045,
          "continuous": 0.8678737282073817,
          "closing": 0.08681033845938882,
          "auctions": 0.10361241603872687,
          "other": 0.028513855753891554
        },
        "6M": {
          "opening": 0.015346887290874097,
          "continuous": 0.8867374587148189,
          "closing": 0.07753385708539057,
          "auctions": 0.09288074437626466,
          "other": 0.020381796908916325
        }
      },
      "hhi": {
        "1D": 0.11804202509519586,
        "1M": 0.11713223801373268,
        "3M": 0.11908353505995142,
        "6M": 0.11793725223276294
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.014
        },
        {
          "time": "09:30",
          "avg_share": 0.1913
        },
        {
          "time": "10:00",
          "avg_share": 0.0832
        },
        {
          "time": "10:30",
          "avg_share": 0.0657
        },
        {
          "time": "11:00",
          "avg_share": 0.0568
        },
        {
          "time": "11:30",
          "avg_share": 0.045
        },
        {
          "time": "12:00",
          "avg_share": 0.0327
        },
        {
          "time": "13:00",
          "avg_share": 0.0659
        },
        {
          "time": "13:30",
          "avg_share": 0.0486
        },
        {
          "time": "14:00",
          "avg_share": 0.0564
        },
        {
          "time": "14:30",
          "avg_share": 0.0629
        },
        {
          "time": "15:00",
          "avg_share": 0.0845
        },
        {
          "time": "15:30",
          "avg_share": 0.1273
        },
        {
          "time": "16:00",
          "avg_share": 0.0659
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "5",
          "auctions_pct": 8.839766658187937,
          "hhi": 0.11544924494740177,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "939",
          "auctions_pct": 14.634838080359467,
          "hhi": 0.10988980294292233,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1398",
          "auctions_pct": 11.599241320610888,
          "hhi": 0.10947550053772423,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3988",
          "auctions_pct": 12.523381741889722,
          "hhi": 0.11404562638493992,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3968",
          "auctions_pct": 10.50423547378544,
          "hhi": 0.11179762673157599,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1288",
          "auctions_pct": 9.981627630163656,
          "hhi": 0.11591165145999266,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "998",
          "auctions_pct": 10.363981316239347,
          "hhi": 0.11759755780061795,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2888",
          "auctions_pct": 5.127345498451806,
          "hhi": 0.11865797966584027,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1658",
          "auctions_pct": 9.374687523989635,
          "hhi": 0.13172040597928822,
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
