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
      "ticker": "K6S",
      "name": "Prudential USD",
      "marketCap": 39813673718.6,
      "sector": "Insurance - Life",
      "industry": "Financial Services"
    },
    {
      "ticker": "G07",
      "name": "Great Eastern",
      "marketCap": 14767554952.8,
      "sector": "Insurance - Life",
      "industry": "Financial Services"
    },
    {
      "ticker": "S68",
      "name": "SGX",
      "marketCap": 22646204783.09,
      "sector": "Financial Data & Stock Exchanges",
      "industry": "Financial Services"
    },
    {
      "ticker": "U11",
      "name": "UOB",
      "marketCap": 59995201693.48,
      "sector": "Banks - Regional",
      "industry": "Financial Services"
    },
    {
      "ticker": "O39",
      "name": "OCBC Bank",
      "marketCap": 97994845506.73999,
      "sector": "Banks - Regional",
      "industry": "Financial Services"
    },
    {
      "ticker": "D05",
      "name": "DBS",
      "marketCap": 166496906428.35,
      "sector": "Banks - Regional",
      "industry": "Financial Services"
    },
    {
      "ticker": "8A1",
      "name": "Heptamax",
      "marketCap": 4664499.905,
      "sector": "Asset Management",
      "industry": "Financial Services"
    },
    {
      "ticker": "CJN",
      "name": "B&M Hldg",
      "marketCap": 16815513.599999998,
      "sector": "Asset Management",
      "industry": "Financial Services"
    },
    {
      "ticker": "T55",
      "name": "TIH",
      "marketCap": 49545555.79,
      "sector": "Asset Management",
      "industry": "Financial Services"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "USD",
    "ticker": "K6S",
    "company": "Prudential USD",
    "asof_date": "2026-04-24",
    "industry": "Financial Services",
    "sector": "Insurance - Life",
    "market_cap_display": "39.8B",
    "market_cap_category": "large",
    "universe_total": 558,
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
          "score_pca": 6.810035842293908,
          "score_pca_percentile": 6.810035842293908,
          "rank_pca": 521,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.282341742027606,
          "spread_ticks": 494.3333333333333,
          "amihud": null,
          "volatility": 0.0
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5068140110142934,
          "loadings": {
            "log_adv": 0.5596690616572341,
            "log_trades": 0.5207911490945569,
            "log_turnover": 0.5156477880649224,
            "neg_spread": 0.339418423325347,
            "neg_amihud": 0.05758732148043109,
            "neg_vol": -0.17644634715482418
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
          "peer_median_adv": 15122193.504312698,
          "peer_median_score_pca": 81.89964157706093,
          "peer_median_trades": 3001.5,
          "peer_median_volatility": 0.07566251440468032,
          "peer_median_spread_pct": 0.0012592867834304283,
          "peer_median_spread_ticks": 1.6191021943517314,
          "peer_median_amihud": 1.455655045277697e-10,
          "peer_median_turnover_ratio": 0.0008907627327087388,
          "target_vs_peer": {
            "score_pca_delta": -75.09,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": 100.0,
            "spread_pct_delta_pct": -22320.77,
            "spread_ticks_delta_pct": 30431.32,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 6.810035842293908,
            "rank_pca": 521,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.282341742027606,
            "spread_ticks": 494.3333333333333,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 67.02508960573476,
            "rank_pca": 185,
            "adv": 525622.3162119046,
            "trades": 96.0,
            "volatility": 0.06087896525983152,
            "spread_pct": 0.0017329531123422444,
            "spread_ticks": 2.7162790697674417,
            "amihud": 1.2110163853312933e-08,
            "turnover_ratio": 4.62047646475801e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 96.7741935483871,
            "rank_pca": 19,
            "adv": 29718764.69241349,
            "trades": 5907.0,
            "volatility": 0.17194035009557512,
            "spread_pct": 0.0007856204545186123,
            "spread_ticks": 1.699439413540319,
            "amihud": 2.4959684088075315e-10,
            "turnover_ratio": 0.0021415318997515384,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 97.67025089605734,
            "rank_pca": 14,
            "adv": 78488380.28797679,
            "trades": 7922.0,
            "volatility": 0.1325975973332286,
            "spread_pct": 0.000414702045368233,
            "spread_ticks": 1.4917210235825389,
            "amihud": 3.107497417190955e-10,
            "turnover_ratio": 0.0019456413060300567,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 98.38709677419355,
            "rank_pca": 10,
            "adv": 99398652.9259222,
            "trades": 11460.0,
            "volatility": 0.1231295619753542,
            "spread_pct": 0.000542837701770255,
            "spread_ticks": 1.1777172468774915,
            "amihud": 4.153416817478627e-11,
            "turnover_ratio": 0.001529753789701543,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 98.74551971326166,
            "rank_pca": 8,
            "adv": 240236088.54554778,
            "trades": 13070.0,
            "volatility": 0.09044606354952911,
            "spread_pct": 0.0002705286818559187,
            "spread_ticks": 1.538764975163144,
            "amihud": 7.302757781038638e-12,
            "turnover_ratio": 0.002150418973706386,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 12.007168458781361,
            "rank_pca": 492,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.15155615696887687,
            "spread_ticks": 16.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 7.347670250896058,
            "rank_pca": 518,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.25511536787113626,
            "spread_ticks": 58.6,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "T55",
            "score_pca": 40.50179211469534,
            "rank_pca": 333,
            "adv": 9130.635113196384,
            "trades": 4.0,
            "volatility": 0.0,
            "spread_pct": 0.03278688524590167,
            "spread_ticks": 1.4444444444444444,
            "amihud": 0.0,
            "turnover_ratio": 0.0002517716757159345,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.31585265414247027,
              "median": 0.12394919669524194,
              "min": 0.0,
              "max": 8.735561749401638,
              "p5": 0.0,
              "p95": 1.153466588903262,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3067218.7384401094,
              "median": 18090.0512411869,
              "min": 0.0,
              "max": 240236088.54554778,
              "p5": 0.0,
              "p95": 11436452.032529475,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10544672943156559,
              "median": 0.029044688503870306,
              "min": 0.0002705286818559187,
              "max": 1.2394366197183098,
              "p5": 0.003296204084312154,
              "p95": 0.5566502463054188,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.017071164691173955,
              "median": 0.0003954153387023689,
              "min": 0.0,
              "max": 4.283587040225631,
              "p5": 0.0,
              "p95": 0.02219528383958148,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002462322319773838,
              "median": 1.345124688827511e-08,
              "min": 0.0,
              "max": 0.0417326666666666,
              "p5": 0.0,
              "p95": 0.0001059261286093482,
              "count": 423
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 555.9354838709677,
              "median": 10.5,
              "min": 0.0,
              "max": 15074.0,
              "p5": 0.0,
              "p95": 3051.999999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.03043948262991576,
              "median": 0.03043948262991576,
              "min": 0.0,
              "max": 0.06087896525983152,
              "p5": 0.003043948262991576,
              "p95": 0.05783501699683994,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 262811.1581059523,
              "median": 262811.1581059523,
              "min": 0.0,
              "max": 525622.3162119046,
              "p5": 26281.115810595235,
              "p95": 499341.20040130935,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1420373475699741,
              "median": 0.1420373475699741,
              "min": 0.0017329531123422444,
              "max": 0.282341742027606,
              "p5": 0.015763392558105434,
              "p95": 0.26831130258184277,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 2.310238232379005e-05,
              "median": 2.310238232379005e-05,
              "min": 0.0,
              "max": 4.62047646475801e-05,
              "p5": 2.310238232379005e-06,
              "p95": 4.389452641520109e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2110163853312933e-08,
              "median": 1.2110163853312933e-08,
              "min": 1.2110163853312933e-08,
              "max": 1.2110163853312933e-08,
              "p5": 1.2110163853312933e-08,
              "p95": 1.2110163853312933e-08,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 48.0,
              "median": 48.0,
              "min": 0.0,
              "max": 96.0,
              "p5": 4.800000000000001,
              "p95": 91.19999999999999,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 56047079.92539817,
              "median": 15122193.504312698,
              "min": 0.0,
              "max": 240236088.54554778,
              "p5": 0.0,
              "p95": 190942986.07867876,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4807.375,
              "median": 3001.5,
              "min": 0.0,
              "max": 13070.0,
              "p5": 0.0,
              "p95": 12506.5,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.07237406727668982,
              "median": 0.07566251440468032,
              "min": 0.0,
              "max": 0.17194035009557512,
              "p5": 0.0,
              "p95": 0.15817038662875382,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05540063151022126,
              "median": 0.0012592867834304283,
              "min": 0.0002705286818559187,
              "max": 0.25511536787113626,
              "p5": 0.0003209893590852287,
              "p95": 0.21886964405534542,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 10.583545771671922,
              "median": 1.6191021943517314,
              "min": 1.1777172468774915,
              "max": 58.6,
              "p5": 1.271071766025925,
              "p95": 43.689999999999976,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.1198912269781013e-09,
              "median": 1.455655045277697e-10,
              "min": 0.0,
              "max": 1.2110163853312933e-08,
              "p5": 1.8256894452596595e-12,
              "p95": 9.160310325414474e-09,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00100816530119413,
              "median": 0.0008907627327087388,
              "min": 0.0,
              "max": 0.002150418973706386,
              "p5": 0.0,
              "p95": 0.0021473084978221894,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.004298043649438088,
            "sector": -0.0031826861871420142,
            "peers": -0.0008771929824561431,
            "vs_market": 0.004298043649438088,
            "vs_sector": 0.0031826861871420142,
            "vs_peers": 0.0008771929824561431
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 11.648745519713263,
          "score_pca_percentile": 11.648745519713263,
          "rank_pca": 494,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.2864772077055121,
          "spread_ticks": 380.0,
          "amihud": 8.900403682317374e-06,
          "volatility": 0.5347186031946422
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5342213096641714,
          "loadings": {
            "log_adv": 0.5382323442898671,
            "log_trades": 0.4931078174104526,
            "log_turnover": 0.4885622206369738,
            "neg_spread": 0.4112330320721206,
            "neg_amihud": 0.14709223948350203,
            "neg_vol": 0.19418765911278024
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
          "peer_median_adv": 19156637.063362222,
          "peer_median_score_pca": 86.55913978494624,
          "peer_median_trades": 3137.5,
          "peer_median_volatility": 0.18758710999567807,
          "peer_median_spread_pct": 0.002082393656281636,
          "peer_median_spread_ticks": 1.687350054525627,
          "peer_median_amihud": 4.871031728515376e-09,
          "peer_median_turnover_ratio": 0.0007662855788268191,
          "target_vs_peer": {
            "score_pca_delta": -74.91,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": -185.05,
            "spread_pct_delta_pct": -13657.11,
            "spread_ticks_delta_pct": 22420.52,
            "amihud_delta_pct": -182621.12,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 11.648745519713263,
            "rank_pca": 494,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5347186031946422,
            "spread_pct": 0.2864772077055121,
            "spread_ticks": 380.0,
            "amihud": 8.900403682317374e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 74.55197132616487,
            "rank_pca": 143,
            "adv": 477549.44403359195,
            "trades": 111.0,
            "volatility": 0.12377378593806168,
            "spread_pct": 0.003501934931839843,
            "spread_ticks": 5.503667481662592,
            "amihud": 9.550017367254107e-09,
            "turnover_ratio": 4.1369382300740317e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 98.56630824372759,
            "rank_pca": 9,
            "adv": 37835724.68269085,
            "trades": 6614.0,
            "volatility": 0.18630801895987714,
            "spread_pct": 0.000662852380723429,
            "spread_ticks": 1.3750121441756533,
            "amihud": 1.920460897766452e-10,
            "turnover_ratio": 0.0027880991890381034,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 98.74551971326166,
            "rank_pca": 8,
            "adv": 62812897.31183453,
            "trades": 6164.0,
            "volatility": 0.11608147631635857,
            "spread_pct": 0.0004124960462212466,
            "spread_ticks": 1.5175572519083969,
            "amihud": 4.450462529647899e-11,
            "turnover_ratio": 0.0014912017753528977,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 99.6415770609319,
            "rank_pca": 3,
            "adv": 115161496.34664965,
            "trades": 11222.0,
            "volatility": 0.18886620103147903,
            "spread_pct": 0.0005382494734671777,
            "spread_ticks": 1.2028556503569563,
            "amihud": 4.5376718121106255e-11,
            "turnover_ratio": 0.0016817140074375108,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 100.0,
            "rank_pca": 1,
            "adv": 200145237.55156147,
            "trades": 10152.0,
            "volatility": 0.06084434023068423,
            "spread_pct": 0.00024245657871967925,
            "spread_ticks": 1.397220254957507,
            "amihud": 8.678927743986693e-12,
            "turnover_ratio": 0.0017821585284354294,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 16.845878136200717,
            "rank_pca": 465,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.42999066342553416,
            "spread_pct": 0.13989239046887006,
            "spread_ticks": 14.368421052631579,
            "amihud": 6.449593939393945e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 10.21505376344086,
            "rank_pca": 502,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.9819082614399601,
            "spread_pct": 0.27906976744186046,
            "spread_ticks": 63.42857142857143,
            "amihud": 5.203597528449513e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "T55",
            "score_pca": 32.25806451612903,
            "rank_pca": 379,
            "adv": 67.34430700985325,
            "trades": 1.0,
            "volatility": 0.3740337289165599,
            "spread_pct": 0.03722334004024141,
            "spread_ticks": 1.8571428571428572,
            "amihud": 1.2359849012775853e-05,
            "turnover_ratio": 1.9001635903089395e-06,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6493200685509802,
              "median": 0.3792880674478144,
              "min": 0.0,
              "max": 8.916277250063505,
              "p5": 0.0,
              "p95": 2.0693875633849914,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2419384.2309102523,
              "median": 9348.603576640484,
              "min": 0.0,
              "max": 200145237.55156147,
              "p5": 0.0,
              "p95": 9937310.359214505,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.105916326490922,
              "median": 0.03154699706423847,
              "min": 0.00024245657871967925,
              "max": 1.2394366197183098,
              "p5": 0.003329744753170141,
              "p95": 0.49318433573818654,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00387959997158843,
              "median": 0.00022687969614216334,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.011863690743146225,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.7869217634631426e-05,
              "median": 1.5350328302061187e-07,
              "min": 0.0,
              "max": 0.0053746616161616115,
              "p5": 0.0,
              "p95": 0.00010790516819376106,
              "count": 543
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 466.3817204301075,
              "median": 6.0,
              "min": 0.0,
              "max": 11222.0,
              "p5": 0.0,
              "p95": 2682.5499999999934,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3292461945663519,
              "median": 0.3292461945663519,
              "min": 0.12377378593806168,
              "max": 0.5347186031946422,
              "p5": 0.1443210268008907,
              "p95": 0.5141713623318132,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 238774.72201679597,
              "median": 238774.72201679597,
              "min": 0.0,
              "max": 477549.44403359195,
              "p5": 23877.4722016796,
              "p95": 453671.97183191235,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14498957131867599,
              "median": 0.14498957131867599,
              "min": 0.003501934931839843,
              "max": 0.2864772077055121,
              "p5": 0.017650698570523454,
              "p95": 0.2723284440668285,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 2.0684691150370158e-05,
              "median": 2.0684691150370158e-05,
              "min": 0.0,
              "max": 4.1369382300740317e-05,
              "p5": 2.068469115037016e-06,
              "p95": 3.93009131857033e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.454976849842314e-06,
              "median": 4.454976849842314e-06,
              "min": 9.550017367254107e-09,
              "max": 8.900403682317374e-06,
              "p5": 4.540927006147601e-07,
              "p95": 8.455860999069868e-06,
              "count": 2
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 55.5,
              "median": 55.5,
              "min": 0.0,
              "max": 111.0,
              "p5": 5.550000000000001,
              "p95": 105.44999999999999,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 52054121.58513464,
              "median": 19156637.063362222,
              "min": 0.0,
              "max": 200145237.55156147,
              "p5": 0.0,
              "p95": 170400928.12984228,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4283.0,
              "median": 3137.5,
              "min": 0.0,
              "max": 11222.0,
              "p5": 0.0,
              "p95": 10847.5,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3077258095323143,
              "median": 0.18758710999567807,
              "min": 0.06084434023068423,
              "max": 0.9819082614399601,
              "p5": 0.08017733786067024,
              "p95": 0.7887371021349108,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05769293592024292,
              "median": 0.002082393656281636,
              "min": 0.00024245657871967925,
              "max": 0.27906976744186046,
              "p5": 0.00030197039234522785,
              "p95": 0.23035768550131375,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 11.331306015175873,
              "median": 1.687350054525627,
              "min": 1.2028556503569563,
              "max": 63.42857142857143,
              "p5": 1.2631104231935002,
              "p95": 46.25751879699246,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6112700539367327e-05,
              "median": 4.871031728515376e-09,
              "min": 8.678927743986693e-12,
              "max": 6.449593939393945e-05,
              "p5": 2.1217921887358998e-11,
              "p95": 6.0134951955633934e-05,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009733053807693739,
              "median": 0.0007662855788268191,
              "min": 0.0,
              "max": 0.0027880991890381034,
              "p5": 0.0,
              "p95": 0.0024360199578271667,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.1984126984126986,
            "market": 0.0037352787565891887,
            "sector": 0.08740325653192493,
            "peers": 0.015933678423728503,
            "vs_market": 0.1946774196561094,
            "vs_sector": 0.11100944188077366,
            "vs_peers": 0.1824790199889701
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 13.799283154121863,
          "score_pca_percentile": 13.799283154121863,
          "rank_pca": 482,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.26086956521739124,
          "spread_ticks": 300.0,
          "amihud": 8.900403682317374e-06,
          "volatility": 0.379994089985329
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5714113361341,
          "loadings": {
            "log_adv": 0.5092004925344152,
            "log_trades": 0.4583082834372496,
            "log_turnover": 0.4659344579963723,
            "neg_spread": 0.4267973836355187,
            "neg_amihud": 0.2666766137403146,
            "neg_vol": 0.24556268770522147
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
          "peer_median_adv": 21654215.409066543,
          "peer_median_score_pca": 85.30465949820788,
          "peer_median_trades": 3542.0,
          "peer_median_volatility": 0.22386659030936068,
          "peer_median_spread_pct": 0.0019480422786804536,
          "peer_median_spread_ticks": 1.8058042375410324,
          "peer_median_amihud": 5.578635595890485e-09,
          "peer_median_turnover_ratio": 0.0008046036045659225,
          "target_vs_peer": {
            "score_pca_delta": -71.51,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": -69.74,
            "spread_pct_delta_pct": -13291.37,
            "spread_ticks_delta_pct": 16513.1,
            "amihud_delta_pct": -159444.45,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 13.799283154121863,
            "rank_pca": 482,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.379994089985329,
            "spread_pct": 0.26086956521739124,
            "spread_ticks": 300.0,
            "amihud": 8.900403682317374e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 72.04301075268818,
            "rank_pca": 157,
            "adv": 370953.5859903795,
            "trades": 83.0,
            "volatility": 0.11248654915772441,
            "spread_pct": 0.0032108746941193205,
            "spread_ticks": 5.085106382978723,
            "amihud": 1.0959415911861028e-08,
            "turnover_ratio": 3.191352348914253e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 98.56630824372759,
            "rank_pca": 9,
            "adv": 42937477.23214271,
            "trades": 7344.0,
            "volatility": 0.24984774103225182,
            "spread_pct": 0.0006852098632415868,
            "spread_ticks": 1.3222812723090347,
            "amihud": 1.978552799199416e-10,
            "turnover_ratio": 0.0036540309540564466,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 99.2831541218638,
            "rank_pca": 5,
            "adv": 85848897.69898598,
            "trades": 7001.0,
            "volatility": 0.1945568015061833,
            "spread_pct": 0.0004353004910545347,
            "spread_ticks": 1.611608475082065,
            "amihud": 5.2067851017588465e-11,
            "turnover_ratio": 0.002049205720064125,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 99.82078853046595,
            "rank_pca": 2,
            "adv": 102818100.83416104,
            "trades": 10551.0,
            "volatility": 0.19788543958646954,
            "spread_pct": 0.0005586335749371048,
            "spread_ticks": 1.2157165612781773,
            "amihud": 7.3084504531386e-11,
            "turnover_ratio": 0.0015772936856427023,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 100.0,
            "rank_pca": 1,
            "adv": 227213748.32461458,
            "trades": 11391.0,
            "volatility": 0.13714616004115057,
            "spread_pct": 0.0002652156920799096,
            "spread_ticks": 1.538764975163144,
            "amihud": 1.8971939222876612e-11,
            "turnover_ratio": 0.002018812290583946,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 16.129032258064516,
            "rank_pca": 469,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.253560342448848,
            "spread_pct": 0.15155615696887687,
            "spread_ticks": 16.0,
            "amihud": 4.542397583025717e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 1.4336917562724014,
            "rank_pca": 551,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.7223566957483132,
            "spread_pct": 0.49763481551561034,
            "spread_ticks": 87.66666666666667,
            "amihud": 0.0003088131551901337,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "T55",
            "score_pca": 35.842293906810035,
            "rank_pca": 359,
            "adv": 850.8091810023902,
            "trades": 2.0,
            "volatility": 0.5574858757327128,
            "spread_pct": 0.03410852713178298,
            "spread_ticks": 2.0,
            "amihud": 4.076770166775457e-06,
            "turnover_ratio": 2.517716757159345e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6889123993039211,
              "median": 0.452112169600442,
              "min": 0.0,
              "max": 7.957548658045471,
              "p5": 0.15553385229349628,
              "p95": 2.174302758288653,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2553139.8591177557,
              "median": 9264.853883213695,
              "min": 0.0,
              "max": 227213748.32461458,
              "p5": 0.0,
              "p95": 10494580.858430045,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09915657346283728,
              "median": 0.0295413398861675,
              "min": 0.0002652156920799096,
              "max": 1.3542204201990415,
              "p5": 0.003529891848465083,
              "p95": 0.4829600840602094,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0058688563520536445,
              "median": 0.0002947980462652054,
              "min": 0.0,
              "max": 2.0071188451651176,
              "p5": 0.0,
              "p95": 0.010301631636607375,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4829534594203356e-05,
              "median": 1.848484522710513e-07,
              "min": 0.0,
              "max": 0.0007352863550926598,
              "p5": 0.0,
              "p95": 7.084025851000005e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 461.747311827957,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2625.0499999999943,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2462403195715267,
              "median": 0.2462403195715267,
              "min": 0.11248654915772441,
              "max": 0.379994089985329,
              "p5": 0.12586192619910463,
              "p95": 0.36661871294394877,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 185476.79299518975,
              "median": 185476.79299518975,
              "min": 0.0,
              "max": 370953.5859903795,
              "p5": 18547.679299518975,
              "p95": 352405.9066908605,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1320402199557553,
              "median": 0.1320402199557553,
              "min": 0.0032108746941193205,
              "max": 0.26086956521739124,
              "p5": 0.016093809220282917,
              "p95": 0.24798663069122764,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 1.5956761744571264e-05,
              "median": 1.5956761744571264e-05,
              "min": 0.0,
              "max": 3.191352348914253e-05,
              "p5": 1.5956761744571265e-06,
              "p95": 3.03178473146854e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.455681549114617e-06,
              "median": 4.455681549114617e-06,
              "min": 1.0959415911861028e-08,
              "max": 8.900403682317374e-06,
              "p5": 4.554316292321367e-07,
              "p95": 8.455931468997098e-06,
              "count": 2
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 41.5,
              "median": 41.5,
              "min": 0.0,
              "max": 83.0,
              "p5": 4.15,
              "p95": 78.85,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 57398753.560634464,
              "median": 21654215.409066543,
              "min": 0.0,
              "max": 227213748.32461458,
              "p5": 0.0,
              "p95": 183675271.70295578,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4546.5,
              "median": 3542.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 11097.0,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4281657006567067,
              "median": 0.22386659030936068,
              "min": 0.11248654915772441,
              "max": 1.7223566957483132,
              "p5": 0.12111741296692356,
              "p95": 1.3146519087428525,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.08605684174146283,
              "median": 0.0019480422786804536,
              "min": 0.0002652156920799096,
              "max": 0.49763481551561034,
              "p5": 0.0003247453717210284,
              "p95": 0.37650728502425346,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 14.555018041684727,
              "median": 1.8058042375410324,
              "min": 1.2157165612781773,
              "max": 87.66666666666667,
              "p5": 1.2530142101389774,
              "p95": 62.5833333333333,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.479065032283161e-05,
              "median": 5.578635595890485e-09,
              "min": 1.8971939222876612e-11,
              "max": 0.0003088131551901337,
              "p5": 3.0555508351025765e-11,
              "p95": 0.0002166269424141768,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0011695541676759943,
              "median": 0.0008046036045659225,
              "min": 0.0,
              "max": 0.0036540309540564466,
              "p5": 0.0,
              "p95": 0.003092342122159133,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.08711303095752365,
            "market": 0.019580318310376432,
            "sector": 0.051531308030512646,
            "peers": 0.015032607721857216,
            "vs_market": 0.06753271264714722,
            "vs_sector": 0.035581722927011006,
            "vs_peers": 0.07208042323566644
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 14.695340501792115,
          "score_pca_percentile": 14.695340501792115,
          "rank_pca": 477,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.24083158140621352,
          "spread_ticks": 264.6666666666667,
          "amihud": 6.530953082677226e-06,
          "volatility": 0.28025685959014607
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5786611844012315,
          "loadings": {
            "log_adv": 0.5007571578053702,
            "log_trades": 0.44682802063311977,
            "log_turnover": 0.45434899676671875,
            "neg_spread": 0.4337250993813861,
            "neg_amihud": 0.26644038418829064,
            "neg_vol": 0.28990694690030216
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
          "peer_median_adv": 17126763.363694653,
          "peer_median_score_pca": 85.3942652329749,
          "peer_median_trades": 3141.5,
          "peer_median_volatility": 0.18627106590792167,
          "peer_median_spread_pct": 0.0016350364899262648,
          "peer_median_spread_ticks": 1.7023427233213455,
          "peer_median_amihud": 4.607337130824218e-09,
          "peer_median_turnover_ratio": 0.0006970402842456682,
          "target_vs_peer": {
            "score_pca_delta": -70.7,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": -50.46,
            "spread_pct_delta_pct": -14629.43,
            "spread_ticks_delta_pct": 15447.2,
            "amihud_delta_pct": -141651.14,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 14.695340501792115,
            "rank_pca": 477,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.28025685959014607,
            "spread_pct": 0.24083158140621352,
            "spread_ticks": 264.6666666666667,
            "amihud": 6.530953082677226e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 71.86379928315412,
            "rank_pca": 158,
            "adv": 290603.213920914,
            "trades": 63.0,
            "volatility": 0.08784941578388487,
            "spread_pct": 0.0025800886689748823,
            "spread_ticks": 3.980889724310777,
            "amihud": 9.01032869556611e-09,
            "turnover_ratio": 2.562752643825082e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 98.9247311827957,
            "rank_pca": 7,
            "adv": 33962923.51346839,
            "trades": 6220.0,
            "volatility": 0.2038735078025855,
            "spread_pct": 0.0006899843108776473,
            "spread_ticks": 1.21904200584238,
            "amihud": 2.0434556608232694e-10,
            "turnover_ratio": 0.002925861060745567,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 99.46236559139786,
            "rank_pca": 4,
            "adv": 75443740.25269464,
            "trades": 6423.0,
            "volatility": 0.15413339548460878,
            "spread_pct": 0.00041705550450987994,
            "spread_ticks": 1.499339681058933,
            "amihud": 4.406919339168671e-11,
            "turnover_ratio": 0.0019008123103466186,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 99.6415770609319,
            "rank_pca": 3,
            "adv": 83371802.59410271,
            "trades": 8564.0,
            "volatility": 0.16866862401325783,
            "spread_pct": 0.0005924898380799459,
            "spread_ticks": 1.185023598721119,
            "amihud": 7.680846018832716e-11,
            "turnover_ratio": 0.0013684530420530856,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 100.0,
            "rank_pca": 1,
            "adv": 193746982.8184313,
            "trades": 10145.5,
            "volatility": 0.1364329974052529,
            "spread_pct": 0.00027198195406526475,
            "spread_ticks": 1.542780684737929,
            "amihud": 2.426141408806973e-11,
            "turnover_ratio": 0.0017708497974384882,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 11.827956989247312,
            "rank_pca": 493,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5061887304545605,
            "spread_pct": 0.14583333333333331,
            "spread_ticks": 14.0,
            "amihud": 0.00010762361933647507,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 0.35842293906810035,
            "rank_pca": 557,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.3003378330992528,
            "spread_pct": 1.267605633802817,
            "spread_ticks": 260.0,
            "amihud": 0.000433746855642899,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "T55",
            "score_pca": 32.25806451612903,
            "rank_pca": 379,
            "adv": 551.479397810339,
            "trades": 1.0,
            "volatility": 0.43315371477198106,
            "spread_pct": 0.03568585994228551,
            "spread_ticks": 1.861904761904762,
            "amihud": 2.62518162195497e-06,
            "turnover_ratio": 1.4963788273682899e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6940754945604555,
              "median": 0.44376361421495614,
              "min": 0.0,
              "max": 6.912950809089335,
              "p5": 0.1534615334903452,
              "p95": 2.1348110223568884,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2032895.045439383,
              "median": 9310.546212446545,
              "min": 0.0,
              "max": 193746982.8184313,
              "p5": 0.0,
              "p95": 8243981.934576415,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0952367594140434,
              "median": 0.028786401116318996,
              "min": 0.00027198195406526475,
              "max": 1.267605633802817,
              "p5": 0.003578842457396328,
              "p95": 0.4855922098569158,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003282236301684725,
              "median": 0.0002747135406527494,
              "min": 0.0,
              "max": 0.8651374332608266,
              "p5": 0.0,
              "p95": 0.007047808976737865,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2291304144350672e-05,
              "median": 2.1975879877169237e-07,
              "min": 0.0,
              "max": 0.0008454377296450365,
              "p5": 0.0,
              "p95": 5.3352015248003984e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 377.93817204301075,
              "median": 6.5,
              "min": 0.0,
              "max": 10145.5,
              "p5": 0.0,
              "p95": 2044.2499999999977,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.18405313768701548,
              "median": 0.18405313768701548,
              "min": 0.08784941578388487,
              "max": 0.28025685959014607,
              "p5": 0.09746978797419793,
              "p95": 0.270636487399833,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 145301.606960457,
              "median": 145301.606960457,
              "min": 0.0,
              "max": 290603.213920914,
              "p5": 14530.1606960457,
              "p95": 276073.05322486826,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1217058350375942,
              "median": 0.1217058350375942,
              "min": 0.0025800886689748823,
              "max": 0.24083158140621352,
              "p5": 0.014492663305836815,
              "p95": 0.2289190067693516,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 1.281376321912541e-05,
              "median": 1.281376321912541e-05,
              "min": 0.0,
              "max": 2.562752643825082e-05,
              "p5": 1.281376321912541e-06,
              "p95": 2.434615011633828e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.269981705686396e-06,
              "median": 3.269981705686396e-06,
              "min": 9.01032869556611e-09,
              "max": 6.530953082677226e-06,
              "p5": 3.351074663946491e-07,
              "p95": 6.2048559449781426e-06,
              "count": 2
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 31.5,
              "median": 31.5,
              "min": 0.0,
              "max": 63.0,
              "p5": 3.1500000000000004,
              "p95": 59.849999999999994,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 48352075.484001964,
              "median": 17126763.363694653,
              "min": 0.0,
              "max": 193746982.8184313,
              "p5": 0.0,
              "p95": 155115669.73991624,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3927.0625,
              "median": 3141.5,
              "min": 0.0,
              "max": 10145.5,
              "p5": 0.0,
              "p95": 9591.974999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.373829777351923,
              "median": 0.18627106590792167,
              "min": 0.08784941578388487,
              "max": 1.3003378330992528,
              "p5": 0.10485366935136368,
              "p95": 1.0223856471736101,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.18170955341936793,
              "median": 0.0016350364899262648,
              "min": 0.00027198195406526475,
              "max": 1.267605633802817,
              "p5": 0.00032275769672088006,
              "p95": 0.8749853286384971,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 35.66112255707199,
              "median": 1.7023427233213455,
              "min": 1.185023598721119,
              "max": 260.0,
              "p5": 1.1969300412135604,
              "p95": 173.89999999999986,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.80006270518323e-05,
              "median": 4.607337130824218e-09,
              "min": 2.426141408806973e-11,
              "max": 0.000433746855642899,
              "p5": 3.1194136844335674e-11,
              "p95": 0.0003196037229356505,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0010008209406619617,
              "median": 0.0006970402842456682,
              "min": 0.0,
              "max": 0.002925861060745567,
              "p5": 0.0,
              "p95": 0.0025670939981059346,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.23770491803278748,
            "market": 0.11470988900351942,
            "sector": 0.1400048991568208,
            "peers": 0.06078189520081323,
            "vs_market": 0.12299502902926807,
            "vs_sector": 0.09770001887596669,
            "vs_peers": 0.17692302283197425
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Current tradability looks weak, with screen depth on the bid side outweighing the ask but a 488-tick spread still pointing to costly access.",
        "market_comparison": "The stock was flat on the day while peers were down 0.1%, which shows price held up but does not change the weaker trading setup."
      },
      "30d": {
        "liquidity": "Monthly tradability remains weak, with a 1M liquidity score of 11.6 showing access is still thin.",
        "market_comparison": "The stock returned 19.8% compared with 1.6% for peers, which gives the tape a stronger backdrop even though liquidity remains below peer standards."
      },
      "3m": {
        "liquidity": "Three-month tradability is still weak, with a 3M liquidity score of 13.8 indicating little improvement in access.",
        "market_comparison": "The stock returned 8.7% compared with 1.5% for peers, which supports sentiment but does not close the liquidity gap."
      },
      "6m": {
        "liquidity": "Six-month tradability is weak, with a liquidity score of 14.7 confirming structurally thin access.",
        "market_comparison": "The stock returned 23.8% compared with 6.1% for peers, which shows strong performance but leaves liquidity well behind the peer group."
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
          "median": 0.3333333333333333,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "33.3%",
          "display_range": null,
          "display_text": "33.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 33.3,
          "plain_english": "Market explains about 33.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.3333333333333333,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "33.3%",
          "display_range": null,
          "display_text": "33.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 33.3,
          "plain_english": "Sector explains about 33.3% of price moves in the current state."
        },
        "company_share": {
          "median": 0.3333333333333333,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "33.3%",
          "display_range": null,
          "display_text": "33.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 33.3,
          "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.00% stock move in the same direction in this state.",
          "value_num": 0.0
        },
        "beta_stock_lag": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.0
        },
        "beta_sector": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.00% stock move in the same direction in this state.",
          "value_num": 0.0
        },
        "beta_market_lag": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.0
        },
        "beta_sector_lag": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.0
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
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
            "median": 0.4743277103613509,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.4%",
            "display_range": null,
            "display_text": "47.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 47.4,
            "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26308116796116754,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.3%",
              "display_range": null,
              "display_text": "26.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.3,
              "plain_english": "Market explains about 26.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.26259112167748166,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.3%",
              "display_range": null,
              "display_text": "26.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.3,
              "plain_english": "Sector explains about 26.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4743277103613509,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
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
            "median": 0.4712872513816686,
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
              "median": 0.24956715672804503,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.0%",
              "display_range": null,
              "display_text": "25.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 25.0,
              "plain_english": "Market explains about 25.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27914559189028637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.9%",
              "display_range": null,
              "display_text": "27.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 27.9,
              "plain_english": "Sector explains about 27.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4712872513816686,
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
          "summary": "Jun: Mostly company-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4329206662680639,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.3%",
            "display_range": null,
            "display_text": "43.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 43.3,
            "plain_english": "Market explains about 43.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4329206662680639,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.3%",
              "display_range": null,
              "display_text": "43.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 43.3,
              "plain_english": "Market explains about 43.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.391538344233002,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.2%",
              "display_range": null,
              "display_text": "39.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 39.2,
              "plain_english": "Sector explains about 39.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.17554098949893418,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.6%",
              "display_range": null,
              "display_text": "17.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 17.6,
              "plain_english": "Company-specific explains about 17.6% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3333333333333333,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "33.3%",
            "display_range": null,
            "display_text": "33.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 33.3,
            "plain_english": "Market explains about 33.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Market explains about 33.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Sector explains about 33.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
            }
          },
          "summary": "Aug: Much more balanced across company, sector, and market factors."
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
            "median": 0.5251771335594325,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.5%",
            "display_range": null,
            "display_text": "52.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 52.5,
            "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2465806200480266,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.7%",
              "display_range": null,
              "display_text": "24.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.7,
              "plain_english": "Market explains about 24.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22824224639254073,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.8%",
              "display_range": null,
              "display_text": "22.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 22.8,
              "plain_english": "Sector explains about 22.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5251771335594325,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.5%",
              "display_range": null,
              "display_text": "52.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.5,
              "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47300268261199785,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.3%",
            "display_range": null,
            "display_text": "47.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 47.3,
            "plain_english": "Market explains about 47.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47300268261199785,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.3%",
              "display_range": null,
              "display_text": "47.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.3,
              "plain_english": "Market explains about 47.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28048721744805594,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.0%",
              "display_range": null,
              "display_text": "28.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.0,
              "plain_english": "Sector explains about 28.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.24651009993994616,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.7%",
              "display_range": null,
              "display_text": "24.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.7,
              "plain_english": "Company-specific explains about 24.7% of price moves in the current state."
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
            "median": 0.45704172485967764,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.7%",
            "display_range": null,
            "display_text": "45.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 45.7,
            "plain_english": "Market explains about 45.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.45704172485967764,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.7%",
              "display_range": null,
              "display_text": "45.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 45.7,
              "plain_english": "Market explains about 45.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19744619810304867,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.7%",
              "display_range": null,
              "display_text": "19.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 19.7,
              "plain_english": "Sector explains about 19.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.34551207703727377,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.6%",
              "display_range": null,
              "display_text": "34.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.6,
              "plain_english": "Company-specific explains about 34.6% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly market-driven."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3638967687748571,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.4%",
            "display_range": null,
            "display_text": "36.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 36.4,
            "plain_english": "Market explains about 36.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3638967687748571,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.4%",
              "display_range": null,
              "display_text": "36.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.4,
              "plain_english": "Market explains about 36.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27759210624020475,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Sector explains about 27.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3585111249849382,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.9%",
              "display_range": null,
              "display_text": "35.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.9,
              "plain_english": "Company-specific explains about 35.9% of price moves in the current state."
            }
          },
          "summary": "Dec: Much more balanced across company, sector, and market factors."
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
            "median": 0.6740837909943584,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "67.4%",
            "display_range": null,
            "display_text": "67.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 67.4,
            "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.13138401170565542,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.1%",
              "display_range": null,
              "display_text": "13.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.1,
              "plain_english": "Market explains about 13.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.194532197299986,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.5%",
              "display_range": null,
              "display_text": "19.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.5,
              "plain_english": "Sector explains about 19.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6740837909943584,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.4%",
              "display_range": null,
              "display_text": "67.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 67.4,
              "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47461420274641536,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.5%",
            "display_range": null,
            "display_text": "47.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 47.5,
            "plain_english": "Market explains about 47.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47461420274641536,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.5%",
              "display_range": null,
              "display_text": "47.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 47.5,
              "plain_english": "Market explains about 47.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3127047871140637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.3%",
              "display_range": null,
              "display_text": "31.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 31.3,
              "plain_english": "Sector explains about 31.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.21268101013952107,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.3%",
              "display_range": null,
              "display_text": "21.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 21.3,
              "plain_english": "Company-specific explains about 21.3% of price moves in the current state."
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
            "median": 0.48325313249380314,
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
            "plain_english": "Market explains about 48.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.48325313249380314,
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
              "plain_english": "Market explains about 48.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3140983893822498,
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
              "plain_english": "Sector explains about 31.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.20264847812394698,
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
              "plain_english": "Company-specific explains about 20.3% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-24",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3744803571291371,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.4%",
            "display_range": null,
            "display_text": "37.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 37.4,
            "plain_english": "Company-specific explains about 37.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26952222624989935,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.0%",
              "display_range": null,
              "display_text": "27.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 27.0,
              "plain_english": "Market explains about 27.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.35599741662096357,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.6%",
              "display_range": null,
              "display_text": "35.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 35.6,
              "plain_english": "Sector explains about 35.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3744803571291371,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.4%",
              "display_range": null,
              "display_text": "37.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 37.4,
              "plain_english": "Company-specific explains about 37.4% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though company-driven still has the largest share."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5341365461847389,
          "expected_duration_days": 13.3,
          "current_probability": 0.0,
          "n_days_effective": 133.0,
          "volatility": {
            "median": 0.00038828707987510384,
            "low": 0.00038828707987510384,
            "high": 0.00038828707987510384
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.46586345381526106,
          "expected_duration_days": 11.6,
          "current_probability": 1.0,
          "n_days_effective": 116.0,
          "volatility": {
            "median": 0.022784580062985275,
            "low": 0.022784580062985275,
            "high": 0.022784580062985275
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.924812030075188,
            0.07518796992481203
          ],
          [
            0.0782608695652174,
            0.9217391304347826
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            123.0,
            10.0
          ],
          [
            9.0,
            106.0
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
        "market_link_display": "0.00",
        "sector_link_display": "0.00",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.00",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 33.3,
        "driver_share_display": "33.3%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9217391304347826,
        "effective_days": 116.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 11.6 days.",
        "expected_duration_days": 11.6
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
          "pct_time": 0.5341365461847389,
          "expected_duration_days": 13.3,
          "current_probability": 0.0,
          "n_days_effective": 133.0,
          "volatility": {
            "median": 0.00038828707987510384,
            "low": 0.00038828707987510384,
            "high": 0.00038828707987510384
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.46586345381526106,
          "expected_duration_days": 11.6,
          "current_probability": 1.0,
          "n_days_effective": 116.0,
          "volatility": {
            "median": 0.022784580062985275,
            "low": 0.022784580062985275,
            "high": 0.022784580062985275
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.924812030075188,
          0.07518796992481203
        ],
        [
          0.0782608695652174,
          0.9217391304347826
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.924812030075188,
            0.07518796992481203
          ],
          [
            0.0782608695652174,
            0.9217391304347826
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            123.0,
            10.0
          ],
          [
            9.0,
            106.0
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
        "text": "Liquidity score: 14.7 — Weak",
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
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "short": {
        "text": "High short interest",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "header_health": {
        "text": "Liquidity Health: WEAK",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400",
        "dot": "bg-red-500"
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
    "liq_subtitle": "Monthly liquidity looks weak for the stock's size, so access already screens below peers before current conditions are considered. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are strong compared with peers and the market, with a 1M gain of 19.8% against 1.6% for peers and 0.4% for the market.",
    "perf_insight": "Performance is clearly ahead of peers, but liquidity still lags badly, with a 6M score of 14.7 against a peer median of 85.4. That matters because stronger returns improve the backdrop without closing the access gap.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 33.3% of price changes. Other influences are sector 33.3%, and company-specific 33.3%. Based on 251 trading days relative to the 252-day target.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 33.3% of price changes. Other influences are sector 33.3%, and company-specific 33.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 33.3%, sector 33.3%, and company-specific 33.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to company-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 33.3%, sector 33.3%, and company-specific 33.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Market factors account for 33.3% of trading, so broader moves still shape the tape. That matters because the stock is not trading on company-specific factors alone, even with bid depth at 3.06 times ask depth.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market moves are the clearest influence, with market at 33.3% of current price action.",
      "Monthly change: the pattern has moved from mostly market-driven in February and March to a more mixed read in April, with company factors taking the largest share."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current market state is High Volatility. The market has been in this state about 46.6% of the time. Based on 251 trading days relative to the 252-day target. This state looks more persistent, with a typical run length of about 11.6 days.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Apr 25, 2025 to Apr 16, 2026 (27 trading days • 43 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Execution is mixed: displayed bid depth is 3.06x ask depth, but the spread is 488 ticks. That matters because visible buy-side support is present, while trading costs remain high.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 50.0% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity is present on the bid side, but execution quality remains the more important constraint.",
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
    "intraday_insight": "Session split is open 0.0%, continuous 100.0%, and close 0.0%. Current trading concentration score is 0.856.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The main trading picture is still defined more by weak liquidity and market influence than by short activity.",
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
    "exec_subtitle": "Trading access remains weak relative to peers, despite a much stronger recent share-price backdrop.",
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
        "value": "14.7/100",
        "sub": "Peer median 85.4 (-70.7 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "US$0",
        "sub": "Peer median US$17.1M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "24.08%",
        "sub": "264.67 ticks; peers 0.16%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is weak for the stock’s size, with a 6M score of 14.7 compared with a peer median of 85.4. That gap points to materially thinner access than comparable names. Current trading is not uniformly weak, because displayed bid depth is 3.06 times ask depth, but the 488-tick spread means execution quality remains poor.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "17.540",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "27.82%",
        "note": "488.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "3.06x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-34.22% with 61.2% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-34.22% with 6.1% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-34.22% with 2.4% fill.",
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
        "value": "15",
        "suffix": "/100",
        "bar_pct": 15,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Rank 477/558",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Trading Cost (Spread)",
          "body": "The gap between best buy and sell prices in the selected window."
        },
        "value": "24.08",
        "suffix": "%",
        "bar_pct": 100,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "24.08% • 264.67 ticks vs peers 0.16%",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Average Traded Volume",
          "body": "Average daily trading value in local currency for the selected window."
        },
        "value": "0",
        "value_prefix": "US$",
        "suffix": "",
        "bar_pct": 0,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median US$17.1M",
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
        "value": "33.3",
        "suffix": "market",
        "bar_pct": 33,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 33.3% • Company 33.3%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the company’s size, with a 6M liquidity score of 14.7 compared with a peer median of 85.4. That leaves access materially below comparable names before current conditions are considered.",
      "Recent price performance is much stronger than the main comparison groups, with a 1M return of 19.8% against 1.6% for peers and 0.4% for the market. That matters because the return backdrop is firm even though liquidity remains weak.",
      "Current trading is mixed, with displayed bid depth at 3.06 times ask depth, a spread of 488 ticks, and market factors accounting for 33.3% of the tape. That matters because visible support is present, but execution remains expensive and broader market moves still matter."
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
      "overall": "6M liquidity is weak: score 14.7 vs peer median 85.4 (-70.7 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 14.7 vs peer median 85.4 (-70.7 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -70.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 23.8%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 23.8% vs market 11.5%.",
        "vs_sector": "Better than sector: 23.8% vs sector 14.0%.",
        "vs_peers": "Better than peers: 23.8% vs peers 6.1%."
      },
      "adv": {
        "insight": "average daily volume is US$0, worse than market, sector, and peers, which suggests smaller day-to-day trading size than comparable names.",
        "vs_market": "Worse than market: US$0 vs market US$9.3K.",
        "vs_sector": "Worse than sector: US$0 vs sector US$145.3K.",
        "vs_peers": "Worse than peers: US$0 vs peers US$17.1M."
      },
      "spread": {
        "insight": "Spread is 24.08%, worse than market, sector, and peers, which suggests trading costs are heavier than comparable names.",
        "vs_market": "Worse than market: 24.08% vs market 2.88%.",
        "vs_sector": "Worse than sector: 24.08% vs sector 12.17%.",
        "vs_peers": "Worse than peers: 24.08% vs peers 0.16%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.00%, worse than market, sector, and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "Worse than market: 0.00% vs market 0.03%.",
        "vs_sector": "Worse than sector: 0.00% vs sector 0.00%.",
        "vs_peers": "Worse than peers: 0.00% vs peers 0.07%."
      },
      "volatility": {
        "insight": "Volatility is 28.03%, better than market, but worse than sector and peers, which shows price variability is mixed across comparison groups.",
        "vs_market": "Better than market: 28.03% vs market 44.38%.",
        "vs_sector": "Worse than sector: 28.03% vs sector 18.41%.",
        "vs_peers": "Worse than peers: 28.03% vs peers 18.63%."
      },
      "trades": {
        "insight": "Trades is 0, worse than market, sector, and peers, which suggests activity is thinner than comparable names.",
        "vs_market": "Worse than market: 0 vs market 6.",
        "vs_sector": "Worse than sector: 0 vs sector 32.",
        "vs_peers": "Worse than peers: 0 vs peers 3142."
      },
      "amihud": {
        "insight": "Price impact is 6.53e-06, worse than market, sector, and peers, which suggests trades move price more than comparable names.",
        "vs_market": "Worse than market: 6.53e-06 vs market 2.20e-07.",
        "vs_sector": "Worse than sector: 6.53e-06 vs sector 3.27e-06.",
        "vs_peers": "Worse than peers: 6.53e-06 vs peers 4.61e-09."
      }
    },
    "performance": {
      "overall": "Recent returns are clearly ahead of peers and the market, with the stock up 19.8% over 1M compared with 1.6% for peers and 0.4% for the market. Liquidity does not fully confirm that strength because the 6M liquidity score is 14.7, which sits 70.7 points below the peer median of 85.4, so access remains weak despite the stronger tape. The driver mix also points to a broader backdrop rather than a purely company-specific move, with market factors accounting for 33.3% of trading.",
      "conclusion": "The move looks partly broad-market rather than purely company-specific, and it is happening against weak underlying liquidity for the stock's size."
    },
    "drivers": {
      "overall": "Market moves are the clearest influence right now, with market at 33.3% of current price action. That matters because the stock is still responding to broader conditions rather than trading only on company news, while recent returns remain strong at +19.8% over one month compared with +1.6% for peers and +0.4% for the market.",
      "beta": "Current trading conditions look balanced rather than one-way, because displayed bid depth is 3.06 times ask depth even though the spread is wide at 488 ticks. That combination points to buying interest on screen, but with trading still likely to be costly when investors need immediate execution.",
      "rolling_change": "The driver mix is more balanced now than it was earlier in the quarter. February and March were mostly market-driven, while April has become more mixed, with company factors taking the largest share, so the current pattern looks less purely macro-led than it did before."
    },
    "regime": {
      "overall": "High volatility matters because it makes trading conditions less steady, and that sits on top of a weak six-month liquidity score of 14.7 compared with a peer median of 85.4. That combination leaves access more exposed when the tape is moving around.",
      "current": "The active state is high volatility, while the stock has also risen 19.8% over one month compared with 1.6% for peers and 0.4% for the market. That points to a firmer price backdrop, but one that is still arriving with more movement day to day.",
      "transitions": "This looks more settled than short-lived, with a typical run length of about 11.6 days, although the read is mixed. That suggests the current backdrop can persist rather than fade quickly.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 11.6 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced on the surface because bid depth is 3.06x ask depth. That matters because there is visible buy-side support in the book even though the stock screens poorly on broader liquidity measures.",
      "concern": "The clearest stress point is the 488-tick spread, which indicates execution remains expensive despite the stronger bid side. Trade-size context is also less settled because the percentile history is based on 27 trading days and 43 trades, which makes size calibration less firm.",
      "peer_context": "The displayed book is better than the broader profile implies, but it does not overturn it. The 6M liquidity score is 14.7 compared with a peer median of 85.4, so the stronger near-term depth may be read as a local offset rather than a change in overall standing."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like.",
      "retail_heavy": "Retail-like trades account for 78.9% of trade count and 37.2% of trade value, while institution-like trades are 0.0% of count and 0.0% of value. That leaves the tape led by smaller individual flow rather than larger committed participation.",
      "institutional_gap": "There is no institution-like activity in either trade count or trade value. That absence makes the flow base look less fully reflective of day-to-day access when liquidity is tested.",
      "peer_comparison": "Relative to peers, the mix stands out for its lack of institution-like participation. That makes this trading profile look less supported than a peer set with broader buyer depth."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the signal is mixed because the observed flow is mainly retail-like rather than backed by institutional value. Retail-like trades dominate both count and value, at 78.9% of trades and 37.2% of trade value, while institution-like activity is absent. That makes price moves harder to read as durable sponsorship. Positive and negative price-moving trade asymmetry is available in the report data.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears material, but it does not look like the main force behind trading right now. Short interest is flagged as high, while the stronger 1M share price gain of 19.8% compared with peers at 1.6% points to a firmer tape rather than clear short-led pressure.",
      "level": "High short interest",
      "correlation": "Strong negative - high shorts coincide with price drops",
      "trend": "Short positioning is falling in the near term, with shorts covering by 20% month on month even though levels are still up 120% year on year. That suggests short activity remains relevant, but the recent direction is easing rather than adding fresh pressure.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity sits entirely in the continuous session, with 100.0% of activity there and none at the open or close. That keeps access away from the auctions but concentrates it into a narrower trading window.",
      "hhi_interpretation": "Intraday activity is highly concentrated, with a trading concentration score of 0.856. That points to liquidity appearing in a limited part of the session rather than being evenly available through the day.",
      "best_times": "Peak buckets show where activity clusters through the day.",
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
        "K6S",
        "G07",
        "S68",
        "U11",
        "O39",
        "D05",
        "8A1",
        "CJN",
        "T55"
      ],
      "scores": [
        14.695340501792115,
        71.86379928315412,
        98.9247311827957,
        99.46236559139786,
        99.6415770609319,
        100.0,
        11.827956989247312,
        0.35842293906810035,
        32.25806451612903
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
        0.0,
        290603.213920914,
        33962923.51346839,
        75443740.25269464,
        83371802.59410271,
        193746982.8184313,
        0.0,
        0.0,
        551.479397810339
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Insurance - Life",
      "sector_count": 2,
      "market_count": 558,
      "company": {
        "volatility": 0.28025685959014607,
        "adv": 0.0,
        "spread_pct": 0.24083158140621352,
        "turnover_ratio": 0.0,
        "amihud": 6.530953082677226e-06,
        "trades": 0.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6940754945604555,
          "median": 0.44376361421495614,
          "min": 0.0,
          "max": 6.912950809089335,
          "p5": 0.1534615334903452,
          "p95": 2.1348110223568884,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2032895.045439383,
          "median": 9310.546212446545,
          "min": 0.0,
          "max": 193746982.8184313,
          "p5": 0.0,
          "p95": 8243981.934576415,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0952367594140434,
          "median": 0.028786401116318996,
          "min": 0.00027198195406526475,
          "max": 1.267605633802817,
          "p5": 0.003578842457396328,
          "p95": 0.4855922098569158,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003282236301684725,
          "median": 0.0002747135406527494,
          "min": 0.0,
          "max": 0.8651374332608266,
          "p5": 0.0,
          "p95": 0.007047808976737865,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.2291304144350672e-05,
          "median": 2.1975879877169237e-07,
          "min": 0.0,
          "max": 0.0008454377296450365,
          "p5": 0.0,
          "p95": 5.3352015248003984e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 377.93817204301075,
          "median": 6.5,
          "min": 0.0,
          "max": 10145.5,
          "p5": 0.0,
          "p95": 2044.2499999999977,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.18405313768701548,
          "median": 0.18405313768701548,
          "min": 0.08784941578388487,
          "max": 0.28025685959014607,
          "p5": 0.09746978797419793,
          "p95": 0.270636487399833,
          "count": 2
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 145301.606960457,
          "median": 145301.606960457,
          "min": 0.0,
          "max": 290603.213920914,
          "p5": 14530.1606960457,
          "p95": 276073.05322486826,
          "count": 2
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1217058350375942,
          "median": 0.1217058350375942,
          "min": 0.0025800886689748823,
          "max": 0.24083158140621352,
          "p5": 0.014492663305836815,
          "p95": 0.2289190067693516,
          "count": 2
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 1.281376321912541e-05,
          "median": 1.281376321912541e-05,
          "min": 0.0,
          "max": 2.562752643825082e-05,
          "p5": 1.281376321912541e-06,
          "p95": 2.434615011633828e-05,
          "count": 2
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.269981705686396e-06,
          "median": 3.269981705686396e-06,
          "min": 9.01032869556611e-09,
          "max": 6.530953082677226e-06,
          "p5": 3.351074663946491e-07,
          "p95": 6.2048559449781426e-06,
          "count": 2
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 31.5,
          "median": 31.5,
          "min": 0.0,
          "max": 63.0,
          "p5": 3.1500000000000004,
          "p95": 59.849999999999994,
          "count": 2
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 48352075.484001964,
          "median": 17126763.363694653,
          "min": 0.0,
          "max": 193746982.8184313,
          "p5": 0.0,
          "p95": 155115669.73991624,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 3927.0625,
          "median": 3141.5,
          "min": 0.0,
          "max": 10145.5,
          "p5": 0.0,
          "p95": 9591.974999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.373829777351923,
          "median": 0.18627106590792167,
          "min": 0.08784941578388487,
          "max": 1.3003378330992528,
          "p5": 0.10485366935136368,
          "p95": 1.0223856471736101,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.18170955341936793,
          "median": 0.0016350364899262648,
          "min": 0.00027198195406526475,
          "max": 1.267605633802817,
          "p5": 0.00032275769672088006,
          "p95": 0.8749853286384971,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 35.66112255707199,
          "median": 1.7023427233213455,
          "min": 1.185023598721119,
          "max": 260.0,
          "p5": 1.1969300412135604,
          "p95": 173.89999999999986,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.80006270518323e-05,
          "median": 4.607337130824218e-09,
          "min": 2.426141408806973e-11,
          "max": 0.000433746855642899,
          "p5": 3.1194136844335674e-11,
          "p95": 0.0003196037229356505,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0010008209406619617,
          "median": 0.0006970402842456682,
          "min": 0.0,
          "max": 0.002925861060745567,
          "p5": 0.0,
          "p95": 0.0025670939981059346,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.1984126984126986,
        "market": 0.0037352787565891887,
        "sector": 0.08740325653192493,
        "peers": 0.015933678423728503
      },
      {
        "horizon": "3M",
        "stock": 0.08711303095752365,
        "market": 0.019580318310376432,
        "sector": 0.051531308030512646,
        "peers": 0.015032607721857216
      },
      {
        "horizon": "6M",
        "stock": 0.23770491803278748,
        "market": 0.11470988900351942,
        "sector": 0.1400048991568208,
        "peers": 0.06078189520081323
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
      "share_market": 0.3333333333333333,
      "share_sector": 0.3333333333333333,
      "share_idio": 0.3333333333333333,
      "beta_market": 0,
      "beta_sector": 0,
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
            "median": 0.3333333333333333,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "33.3%",
            "display_range": null,
            "display_text": "33.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 33.3,
            "plain_english": "Market explains about 33.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.3333333333333333,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "33.3%",
            "display_range": null,
            "display_text": "33.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 33.3,
            "plain_english": "Sector explains about 33.3% of price moves in the current state."
          },
          "company_share": {
            "median": 0.3333333333333333,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "33.3%",
            "display_range": null,
            "display_text": "33.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 33.3,
            "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.00% stock move in the same direction in this state.",
            "value_num": 0.0
          },
          "beta_stock_lag": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.0
          },
          "beta_sector": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.00% stock move in the same direction in this state.",
            "value_num": 0.0
          },
          "beta_market_lag": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.0
          },
          "beta_sector_lag": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.0
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
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
              "median": 0.4743277103613509,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26308116796116754,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.3%",
                "display_range": null,
                "display_text": "26.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.3,
                "plain_english": "Market explains about 26.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.26259112167748166,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.3%",
                "display_range": null,
                "display_text": "26.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.3,
                "plain_english": "Sector explains about 26.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4743277103613509,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.4%",
                "display_range": null,
                "display_text": "47.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 47.4,
                "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
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
              "median": 0.4712872513816686,
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
                "median": 0.24956715672804503,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.0%",
                "display_range": null,
                "display_text": "25.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 25.0,
                "plain_english": "Market explains about 25.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27914559189028637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.9%",
                "display_range": null,
                "display_text": "27.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 27.9,
                "plain_english": "Sector explains about 27.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4712872513816686,
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
            "summary": "Jun: Mostly company-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-01 to 2025-07-31",
            "n_obs": 23,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4329206662680639,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.3%",
              "display_range": null,
              "display_text": "43.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 43.3,
              "plain_english": "Market explains about 43.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4329206662680639,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.3%",
                "display_range": null,
                "display_text": "43.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 43.3,
                "plain_english": "Market explains about 43.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.391538344233002,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.2%",
                "display_range": null,
                "display_text": "39.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 39.2,
                "plain_english": "Sector explains about 39.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.17554098949893418,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.6%",
                "display_range": null,
                "display_text": "17.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 17.6,
                "plain_english": "Company-specific explains about 17.6% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Market explains about 33.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3333333333333333,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Market explains about 33.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3333333333333333,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Sector explains about 33.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3333333333333333,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
              }
            },
            "summary": "Aug: Much more balanced across company, sector, and market factors."
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
              "median": 0.5251771335594325,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.5%",
              "display_range": null,
              "display_text": "52.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.5,
              "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2465806200480266,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.7%",
                "display_range": null,
                "display_text": "24.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.7,
                "plain_english": "Market explains about 24.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22824224639254073,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.8%",
                "display_range": null,
                "display_text": "22.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 22.8,
                "plain_english": "Sector explains about 22.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5251771335594325,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.5%",
                "display_range": null,
                "display_text": "52.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 52.5,
                "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47300268261199785,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.3%",
              "display_range": null,
              "display_text": "47.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.3,
              "plain_english": "Market explains about 47.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47300268261199785,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.3%",
                "display_range": null,
                "display_text": "47.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 47.3,
                "plain_english": "Market explains about 47.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28048721744805594,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.0%",
                "display_range": null,
                "display_text": "28.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.0,
                "plain_english": "Sector explains about 28.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.24651009993994616,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.7%",
                "display_range": null,
                "display_text": "24.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.7,
                "plain_english": "Company-specific explains about 24.7% of price moves in the current state."
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
              "median": 0.45704172485967764,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.7%",
              "display_range": null,
              "display_text": "45.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 45.7,
              "plain_english": "Market explains about 45.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.45704172485967764,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.7%",
                "display_range": null,
                "display_text": "45.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 45.7,
                "plain_english": "Market explains about 45.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19744619810304867,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.7%",
                "display_range": null,
                "display_text": "19.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 19.7,
                "plain_english": "Sector explains about 19.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.34551207703727377,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.6%",
                "display_range": null,
                "display_text": "34.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.6,
                "plain_english": "Company-specific explains about 34.6% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly market-driven."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3638967687748571,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.4%",
              "display_range": null,
              "display_text": "36.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.4,
              "plain_english": "Market explains about 36.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3638967687748571,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.4%",
                "display_range": null,
                "display_text": "36.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.4,
                "plain_english": "Market explains about 36.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27759210624020475,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Sector explains about 27.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3585111249849382,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.9%",
                "display_range": null,
                "display_text": "35.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.9,
                "plain_english": "Company-specific explains about 35.9% of price moves in the current state."
              }
            },
            "summary": "Dec: Much more balanced across company, sector, and market factors."
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
              "median": 0.6740837909943584,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.4%",
              "display_range": null,
              "display_text": "67.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 67.4,
              "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.13138401170565542,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.1%",
                "display_range": null,
                "display_text": "13.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.1,
                "plain_english": "Market explains about 13.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.194532197299986,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.5%",
                "display_range": null,
                "display_text": "19.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.5,
                "plain_english": "Sector explains about 19.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6740837909943584,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "67.4%",
                "display_range": null,
                "display_text": "67.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 67.4,
                "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47461420274641536,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.5%",
              "display_range": null,
              "display_text": "47.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 47.5,
              "plain_english": "Market explains about 47.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47461420274641536,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.5%",
                "display_range": null,
                "display_text": "47.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 47.5,
                "plain_english": "Market explains about 47.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3127047871140637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.3%",
                "display_range": null,
                "display_text": "31.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 31.3,
                "plain_english": "Sector explains about 31.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.21268101013952107,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.3%",
                "display_range": null,
                "display_text": "21.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 21.3,
                "plain_english": "Company-specific explains about 21.3% of price moves in the current state."
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
              "median": 0.48325313249380314,
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
              "plain_english": "Market explains about 48.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.48325313249380314,
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
                "plain_english": "Market explains about 48.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3140983893822498,
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
                "plain_english": "Sector explains about 31.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.20264847812394698,
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
                "plain_english": "Company-specific explains about 20.3% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-24",
            "n_obs": 17,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3744803571291371,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.4%",
              "display_range": null,
              "display_text": "37.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 37.4,
              "plain_english": "Company-specific explains about 37.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26952222624989935,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.0%",
                "display_range": null,
                "display_text": "27.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 27.0,
                "plain_english": "Market explains about 27.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.35599741662096357,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.6%",
                "display_range": null,
                "display_text": "35.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 35.6,
                "plain_english": "Sector explains about 35.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3744803571291371,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.4%",
                "display_range": null,
                "display_text": "37.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 37.4,
                "plain_english": "Company-specific explains about 37.4% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though company-driven still has the largest share."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5341365461847389,
            "expected_duration_days": 13.3,
            "current_probability": 0.0,
            "n_days_effective": 133.0,
            "volatility": {
              "median": 0.00038828707987510384,
              "low": 0.00038828707987510384,
              "high": 0.00038828707987510384
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.46586345381526106,
            "expected_duration_days": 11.6,
            "current_probability": 1.0,
            "n_days_effective": 116.0,
            "volatility": {
              "median": 0.022784580062985275,
              "low": 0.022784580062985275,
              "high": 0.022784580062985275
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.924812030075188,
              0.07518796992481203
            ],
            [
              0.0782608695652174,
              0.9217391304347826
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              123.0,
              10.0
            ],
            [
              9.0,
              106.0
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
          "market_link_display": "0.00",
          "sector_link_display": "0.00",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.00",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 33.3,
          "driver_share_display": "33.3%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9217391304347826,
          "effective_days": 116.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 11.6 days.",
          "expected_duration_days": 11.6
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
          "share_market": 0.26308116796116754,
          "share_sector": 0.26259112167748166,
          "share_company": 0.4743277103613509,
          "share_market_display": "26.3%",
          "share_sector_display": "26.3%",
          "share_company_display": "47.4%",
          "dominant_share_display": "47.4%"
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
          "share_market": 0.24956715672804503,
          "share_sector": 0.27914559189028637,
          "share_company": 0.4712872513816686,
          "share_market_display": "25.0%",
          "share_sector_display": "27.9%",
          "share_company_display": "47.1%",
          "dominant_share_display": "47.1%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jul: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4329206662680639,
          "share_sector": 0.391538344233002,
          "share_company": 0.17554098949893418,
          "share_market_display": "43.3%",
          "share_sector_display": "39.2%",
          "share_company_display": "17.6%",
          "dominant_share_display": "43.3%"
        },
        {
          "month_key": "2025-08",
          "month_label": "August 2025",
          "month_short_label": "Aug",
          "period_label": "2025-08-01 to 2025-08-29",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Aug: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3333333333333333,
          "share_sector": 0.3333333333333333,
          "share_company": 0.3333333333333333,
          "share_market_display": "33.3%",
          "share_sector_display": "33.3%",
          "share_company_display": "33.3%",
          "dominant_share_display": "33.3%"
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
          "share_market": 0.2465806200480266,
          "share_sector": 0.22824224639254073,
          "share_company": 0.5251771335594325,
          "share_market_display": "24.7%",
          "share_sector_display": "22.8%",
          "share_company_display": "52.5%",
          "dominant_share_display": "52.5%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-01 to 2025-10-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Oct: Mostly market-driven.",
          "share_market": 0.47300268261199785,
          "share_sector": 0.28048721744805594,
          "share_company": 0.24651009993994616,
          "share_market_display": "47.3%",
          "share_sector_display": "28.0%",
          "share_company_display": "24.7%",
          "dominant_share_display": "47.3%"
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
          "share_market": 0.45704172485967764,
          "share_sector": 0.19744619810304867,
          "share_company": 0.34551207703727377,
          "share_market_display": "45.7%",
          "share_sector_display": "19.7%",
          "share_company_display": "34.6%",
          "dominant_share_display": "45.7%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Dec: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3638967687748571,
          "share_sector": 0.27759210624020475,
          "share_company": 0.3585111249849382,
          "share_market_display": "36.4%",
          "share_sector_display": "27.8%",
          "share_company_display": "35.9%",
          "dominant_share_display": "36.4%"
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
          "share_market": 0.13138401170565542,
          "share_sector": 0.194532197299986,
          "share_company": 0.6740837909943584,
          "share_market_display": "13.1%",
          "share_sector_display": "19.5%",
          "share_company_display": "67.4%",
          "dominant_share_display": "67.4%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 18,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Feb: Mostly market-driven.",
          "share_market": 0.47461420274641536,
          "share_sector": 0.3127047871140637,
          "share_company": 0.21268101013952107,
          "share_market_display": "47.5%",
          "share_sector_display": "31.3%",
          "share_company_display": "21.3%",
          "dominant_share_display": "47.5%"
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
          "share_market": 0.48325313249380314,
          "share_sector": 0.3140983893822498,
          "share_company": 0.20264847812394698,
          "share_market_display": "48.3%",
          "share_sector_display": "31.4%",
          "share_company_display": "20.3%",
          "dominant_share_display": "48.3%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-24",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: More mixed, though company-driven still has the largest share.",
          "share_market": 0.26952222624989935,
          "share_sector": 0.35599741662096357,
          "share_company": 0.3744803571291371,
          "share_market_display": "27.0%",
          "share_sector_display": "35.6%",
          "share_company_display": "37.4%",
          "dominant_share_display": "37.4%"
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
          0.5341365461847389,
          0.46586345381526106
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5341365461847389,
            "expected_duration_days": 13.3,
            "current_probability": 0.0,
            "n_days_effective": 133.0,
            "volatility": {
              "median": 0.00038828707987510384,
              "low": 0.00038828707987510384,
              "high": 0.00038828707987510384
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.46586345381526106,
            "expected_duration_days": 11.6,
            "current_probability": 1.0,
            "n_days_effective": 116.0,
            "volatility": {
              "median": 0.022784580062985275,
              "low": 0.022784580062985275,
              "high": 0.022784580062985275
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.924812030075188,
            0.07518796992481203
          ],
          [
            0.0782608695652174,
            0.9217391304347826
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 15.1,
          "quantity": 100.0,
          "value": 1510.0
        },
        {
          "level": 2,
          "price": 14.91,
          "quantity": 100.0,
          "value": 1491.0
        },
        {
          "level": 3,
          "price": 13.05,
          "quantity": 2400.0,
          "value": 31320.0
        },
        {
          "level": 4,
          "price": 12.62,
          "quantity": 700.0,
          "value": 8834.0
        },
        {
          "level": 5,
          "price": 9.0,
          "quantity": 2000.0,
          "value": 18000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 19.98,
          "quantity": 1000.0,
          "value": 19980.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-24 01:58:21.669100000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 17.54,
        "spread_pct": 0.27822120866590655,
        "spread_ticks": 488.0,
        "tick_size": 0.01,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 61155.0,
        "ask_depth_notional_displayed": 19980.0,
        "bid_depth_notional_top10": 61155.0,
        "ask_depth_notional_top10": 19980.0,
        "bid_ask_depth_ratio": 3.0608
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 357,
        "history_limited": true,
        "trade_days_used": 27,
        "n_trades_used": 43,
        "first_trade_date": "2025-04-25",
        "last_trade_date": "2026-04-16",
        "window_label": "Apr 25, 2025 to Apr 16, 2026",
        "window_short_label": "Apr 25, 2025 to Apr 16, 2026",
        "trade_days_label": "27 trading days",
        "trade_count_label": "43 trades",
        "window_detail_label": "27 trading days • 43 trades",
        "history_note": "Trade-size percentiles use available history from Apr 25, 2025 to Apr 16, 2026 (27 trading days • 43 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9604.8,
            "impact_pct": -0.22441299999999997,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 15.71,
            "pct_of_adv": null
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14239.5,
            "impact_pct": -0.23498000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 23.28,
            "pct_of_adv": null
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 22515.28,
            "impact_pct": -0.242837,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 36.82,
            "pct_of_adv": null
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": false,
        "trade_date": null,
        "selection_method": null,
        "orders": []
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-24",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.01,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.27822120866590655,
            "spread_ticks": 488.00000000000006,
            "bid_depth_notional": 61155.0,
            "ask_depth_notional": 19980.0,
            "mid_price": 17.54
          }
        ],
        "summary": {
          "median_spread_pct": 0.27822120866590655,
          "median_spread_ticks": 488.00000000000006,
          "median_bid_depth_notional": 61155.0,
          "median_ask_depth_notional": 19980.0,
          "tightest_bucket": "09:30",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "09:30",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": null,
      "peers": [
        {
          "ticker": "D05",
          "pct": 0.5
        },
        {
          "ticker": "O39",
          "pct": 0.9
        },
        {
          "ticker": "U11",
          "pct": 1.6
        },
        {
          "ticker": "S68",
          "pct": 2.7
        },
        {
          "ticker": "G07",
          "pct": 224.5
        },
        {
          "ticker": "T55",
          "pct": 724550.1
        },
        {
          "ticker": "8A1",
          "pct": null
        },
        {
          "ticker": "CJN",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": false,
          "currency": "USD",
          "n_trades": 0,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": null,
          "last_trade_date": null,
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": null,
            "mixed_qty_pct": null,
            "instit_qty_pct": null,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
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
            "avg": 0.0,
            "median": 0.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "T55",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3886.6666666666665,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8123015873015873,
              "mixed_pct": 0.17261904761904762,
              "instit_pct": 0.01507936507936508,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.362552421675849,
              "mixed_qty_pct": 0.4447002713592632,
              "instit_qty_pct": 0.19274730696488776,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.36214589853691465,
              "mixed_notional_pct": 0.44470684383729137,
              "instit_notional_pct": 0.193147257625794,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10445.25634920635,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8032786885245902,
              "mixed_pct": 0.18032786885245902,
              "instit_pct": 0.01639344262295082,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.30424528301886794,
              "mixed_qty_pct": 0.37735849056603776,
              "instit_qty_pct": 0.31839622641509435,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3041119562386822,
              "mixed_notional_pct": 0.37725170133562935,
              "instit_notional_pct": 0.3186363424256884,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10890.672131147541,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7066139061616733,
              "mixed_pct": 0.2426983229696627,
              "instit_pct": 0.05068777086866403,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.20191460757498494,
              "mixed_qty_pct": 0.41750498354271937,
              "instit_qty_pct": 0.38058040888229566,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.20201088213429363,
              "mixed_notional_pct": 0.4175618372065883,
              "instit_notional_pct": 0.38042728065911807,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 17631.407574901074,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7022299372412872,
              "mixed_pct": 0.2168513820269729,
              "instit_pct": 0.08091868073173988,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.21664337835739791,
              "mixed_qty_pct": 0.27629250116441545,
              "instit_qty_pct": 0.5070641204781866,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.21671110881648672,
              "mixed_notional_pct": 0.27617520977276744,
              "instit_notional_pct": 0.5071136814107459,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 24456.22993724129,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6401590457256461,
              "mixed_pct": 0.2786140301050838,
              "instit_pct": 0.08122692416927009,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1595934624364785,
              "mixed_qty_pct": 0.36327427551160557,
              "instit_qty_pct": 0.47713226205191595,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.15954839978742064,
              "mixed_notional_pct": 0.36316298719345586,
              "instit_notional_pct": 0.4772886130191235,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 22317.407270661744,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        },
        "30d": {
          "valid": true,
          "currency": "USD",
          "n_trades": 6,
          "n_runs": 0,
          "n_trade_days": 2,
          "first_trade_date": "2026-04-15",
          "last_trade_date": "2026-04-16",
          "period_days": 1,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3333333333333333,
            "mixed_qty_pct": 0.6666666666666666,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3360805860805861,
            "mixed_notional_pct": 0.6639194139194139,
            "instit_notional_pct": 0.0,
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
              "retail": 5,
              "mixed": 1,
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
            "avg": 3640.0,
            "median": 1480.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "K6S",
              "currency": "USD",
              "is_target": true,
              "retail_pct": 0.8333333333333334,
              "mixed_pct": 0.16666666666666666,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3333333333333333,
              "mixed_qty_pct": 0.6666666666666666,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3360805860805861,
              "mixed_notional_pct": 0.6639194139194139,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3640.0,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "T55",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2018.4818181818182,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "8A1",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 558.3190476190476,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "CJN",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3610.6666666666665,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8537859007832899,
              "mixed_pct": 0.13446475195822455,
              "instit_pct": 0.01174934725848564,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4338948443083206,
              "mixed_qty_pct": 0.39127105666156203,
              "instit_qty_pct": 0.1748340990301174,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4340612048517725,
              "mixed_notional_pct": 0.39113070204785316,
              "instit_notional_pct": 0.17480809310037435,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8073.601827676241,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.778638020581309,
              "mixed_pct": 0.19792573953998516,
              "instit_pct": 0.023436239878705765,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2747671779509373,
              "mixed_qty_pct": 0.48550471932723144,
              "instit_qty_pct": 0.23972810272183126,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2757810638184079,
              "mixed_notional_pct": 0.4855122896714066,
              "instit_notional_pct": 0.23870664651018553,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11600.421223265266,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6956595873671447,
              "mixed_pct": 0.2388932042513688,
              "instit_pct": 0.06544720838148646,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.17261685098967658,
              "mixed_qty_pct": 0.36883811473459704,
              "instit_qty_pct": 0.45854503427572635,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.17266531509183575,
              "mixed_notional_pct": 0.36854439573250075,
              "instit_notional_pct": 0.4587902891756635,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 20008.422285584373,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.69492468060764,
              "mixed_pct": 0.24087904404754337,
              "instit_pct": 0.06419627534481663,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1923219740073067,
              "mixed_qty_pct": 0.3779211834461281,
              "instit_qty_pct": 0.42975684254656527,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.19258975724161143,
              "mixed_notional_pct": 0.3778674140790262,
              "instit_notional_pct": 0.4295428286793624,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 19658.194304964087,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5947440155107212,
              "mixed_pct": 0.28709231566621235,
              "instit_pct": 0.11816366882306643,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.13495125846044886,
              "mixed_qty_pct": 0.27693312487054594,
              "instit_qty_pct": 0.5881156166690051,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.1349066404184892,
              "mixed_notional_pct": 0.2769394814134279,
              "instit_notional_pct": 0.5881538781680828,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 32936.723043403144,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        },
        "3m": {
          "valid": true,
          "currency": "USD",
          "n_trades": 8,
          "n_runs": 0,
          "n_trade_days": 4,
          "first_trade_date": "2026-02-13",
          "last_trade_date": "2026-04-16",
          "period_days": 62,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.75,
            "mixed_pct": 0.25,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1875,
            "mixed_qty_pct": 0.8125,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.18848075742964845,
            "mixed_notional_pct": 0.8115192425703516,
            "instit_notional_pct": 0.0,
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
              "retail": 6,
              "mixed": 2,
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
            "avg": 5703.5,
            "median": 1480.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "K6S",
              "currency": "USD",
              "is_target": true,
              "retail_pct": 0.75,
              "mixed_pct": 0.25,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1875,
              "mixed_qty_pct": 0.8125,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.18848075742964845,
              "mixed_notional_pct": 0.8115192425703516,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5703.5,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "8A1",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 366.7702702702702,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "CJN",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1684.857142857143,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "T55",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9414893617021277,
              "mixed_pct": 0.05851063829787234,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.677283057520566,
              "mixed_qty_pct": 0.32271694247943405,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6867403938515122,
              "mixed_notional_pct": 0.31325960614848786,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3463.747340425532,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8099547511312217,
              "mixed_pct": 0.1754059089699228,
              "instit_pct": 0.01463933989885547,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.38167099300453167,
              "mixed_qty_pct": 0.43754674644727,
              "instit_qty_pct": 0.18078226054819835,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.38157217266625676,
              "mixed_notional_pct": 0.43771012643495166,
              "instit_notional_pct": 0.1807177008987916,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9573.022624434388,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7610115542691204,
              "mixed_pct": 0.21250301508250685,
              "instit_pct": 0.0264854306483728,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2554079791499599,
              "mixed_qty_pct": 0.48293547370832857,
              "instit_qty_pct": 0.26165654714171155,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2563448813452285,
              "mixed_notional_pct": 0.48314743369742275,
              "instit_notional_pct": 0.2605076849573488,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 12402.499775346794,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6950981334907271,
              "mixed_pct": 0.24608808968794246,
              "instit_pct": 0.0588137768213304,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1764249358523922,
              "mixed_qty_pct": 0.39942249179164147,
              "instit_qty_pct": 0.4241525723559663,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.17648058936479502,
              "mixed_notional_pct": 0.39862026499776154,
              "instit_notional_pct": 0.4248991456374434,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 18907.10351848106,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6294651380567501,
              "mixed_pct": 0.2873735123782855,
              "instit_pct": 0.0831613495649644,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1468394294971462,
              "mixed_qty_pct": 0.3734248171292589,
              "instit_qty_pct": 0.4797357533735949,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.1464253793790833,
              "mixed_notional_pct": 0.3725136515957111,
              "instit_notional_pct": 0.4810609690252056,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 23987.844960042185,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5456424227414073,
              "mixed_pct": 0.3211838520597705,
              "instit_pct": 0.1331737251988222,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1135240055956336,
              "mixed_qty_pct": 0.29634907477765055,
              "instit_qty_pct": 0.5901269196267158,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.11362853147483297,
              "mixed_notional_pct": 0.2958476133793017,
              "instit_notional_pct": 0.5905238551458654,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 35547.21103497619,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        },
        "6m": {
          "valid": true,
          "currency": "USD",
          "n_trades": 19,
          "n_runs": 0,
          "n_trade_days": 12,
          "first_trade_date": "2025-11-03",
          "last_trade_date": "2026-04-16",
          "period_days": 164,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.7894736842105263,
            "mixed_pct": 0.21052631578947367,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.379746835443038,
            "mixed_qty_pct": 0.620253164556962,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.37246616044899306,
            "mixed_notional_pct": 0.6275338395510069,
            "instit_notional_pct": 0.0,
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
              "retail": 15,
              "mixed": 4,
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
            "avg": 5579.736842105263,
            "median": 2500.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "K6S",
              "currency": "USD",
              "is_target": true,
              "retail_pct": 0.7894736842105263,
              "mixed_pct": 0.21052631578947367,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.379746835443038,
              "mixed_qty_pct": 0.620253164556962,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.37246616044899306,
              "mixed_notional_pct": 0.6275338395510069,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5579.736842105263,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "8A1",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 258.1950819672131,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "CJN",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1515.5,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "T55",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9591078066914498,
              "mixed_pct": 0.040892193308550186,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7253609370743667,
              "mixed_qty_pct": 0.27463906292563334,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.740523316862948,
              "mixed_notional_pct": 0.25947668313705186,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2922.522304832714,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8004625041295012,
              "mixed_pct": 0.18417575156921043,
              "instit_pct": 0.015361744301288404,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3562138144607513,
              "mixed_qty_pct": 0.4623401104079709,
              "instit_qty_pct": 0.18144607513127778,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35685443571278047,
              "mixed_notional_pct": 0.46183192304442094,
              "instit_notional_pct": 0.1813136412427986,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9560.267096134787,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7761710977736656,
              "mixed_pct": 0.2003919353033814,
              "instit_pct": 0.02343696692295305,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.27138666996836347,
              "mixed_qty_pct": 0.4844067405848273,
              "instit_qty_pct": 0.24420658944680923,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.27103488967939154,
              "mixed_notional_pct": 0.4844746900370141,
              "instit_notional_pct": 0.24449042028359436,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11550.884343603895,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6945684466542493,
              "mixed_pct": 0.24445645983098072,
              "instit_pct": 0.06097509351476994,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.17146992245100534,
              "mixed_qty_pct": 0.39054331896237776,
              "instit_qty_pct": 0.4379867585866169,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.17210825999517382,
              "mixed_notional_pct": 0.39138444413899437,
              "instit_notional_pct": 0.4365072958658318,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 18987.066595600572,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6314190359992974,
              "mixed_pct": 0.2873226264342988,
              "instit_pct": 0.08125833756640383,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1496731514045974,
              "mixed_qty_pct": 0.3786315948615009,
              "instit_qty_pct": 0.47169525373390175,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.14937904939281443,
              "mixed_notional_pct": 0.3777207516348835,
              "instit_notional_pct": 0.47290019897230207,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 23327.161422406632,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5556624878512052,
              "mixed_pct": 0.31300368942844775,
              "instit_pct": 0.13133382272034702,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.11579407269391456,
              "mixed_qty_pct": 0.2899945233995456,
              "instit_qty_pct": 0.5942114039065398,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.11575673857581863,
              "mixed_notional_pct": 0.2898614093734386,
              "instit_notional_pct": 0.5943818520507428,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 35117.45512833725,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        }
      },
      "valid": true,
      "currency": "USD",
      "n_trades": 19,
      "n_runs": 0,
      "n_trade_days": 12,
      "first_trade_date": "2025-11-03",
      "last_trade_date": "2026-04-16",
      "period_days": 164,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 10000.0,
        "instit_min": 50000.0
      },
      "composition": {
        "retail_pct": 0.7894736842105263,
        "mixed_pct": 0.21052631578947367,
        "instit_pct": 0.0,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.37246616044899306,
        "mixed_notional_pct": 0.6275338395510069,
        "instit_notional_pct": 0.0,
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
        "avg": 5579.736842105263,
        "median": 2500.0
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
            "month": "2026-04",
            "n_trades": 6,
            "n_runs": 0,
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 3640.0,
            "avg_run_notional": null,
            "retail_qty_pct": 0.3333333333333333,
            "mixed_qty_pct": 0.6666666666666666,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 1500.0
          },
          {
            "month": "2026-03",
            "n_trades": 1,
            "n_runs": 0,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1260.0,
            "avg_run_notional": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 100.0
          },
          {
            "month": "2026-02",
            "n_trades": 1,
            "n_runs": 0,
            "retail_pct": 0.0,
            "mixed_pct": 1.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 22528.0,
            "avg_run_notional": null,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 1.0,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 1600.0
          },
          {
            "month": "2026-01",
            "n_trades": 1,
            "n_runs": 0,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1389.0,
            "avg_run_notional": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 100.0
          },
          {
            "month": "2025-12",
            "n_trades": 2,
            "n_runs": 0,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1344.0,
            "avg_run_notional": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 200.0
          },
          {
            "month": "2025-11",
            "n_trades": 8,
            "n_runs": 0,
            "retail_pct": 0.75,
            "mixed_pct": 0.25,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 7038.75,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4772727272727273,
            "mixed_qty_pct": 0.5227272727272727,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 4400.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "K6S",
          "currency": "USD",
          "is_target": true,
          "retail_pct": 0.7894736842105263,
          "mixed_pct": 0.21052631578947367,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.379746835443038,
          "mixed_qty_pct": 0.620253164556962,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.37246616044899306,
          "mixed_notional_pct": 0.6275338395510069,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5579.736842105263,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "8A1",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 1.0,
          "mixed_pct": 0.0,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 1.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 1.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 258.1950819672131,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "CJN",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 1.0,
          "mixed_pct": 0.0,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 1.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 1.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1515.5,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "T55",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9591078066914498,
          "mixed_pct": 0.040892193308550186,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.7253609370743667,
          "mixed_qty_pct": 0.27463906292563334,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.740523316862948,
          "mixed_notional_pct": 0.25947668313705186,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2922.522304832714,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "G07",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8004625041295012,
          "mixed_pct": 0.18417575156921043,
          "instit_pct": 0.015361744301288404,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3562138144607513,
          "mixed_qty_pct": 0.4623401104079709,
          "instit_qty_pct": 0.18144607513127778,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.35685443571278047,
          "mixed_notional_pct": 0.46183192304442094,
          "instit_notional_pct": 0.1813136412427986,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 9560.267096134787,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "S68",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.7761710977736656,
          "mixed_pct": 0.2003919353033814,
          "instit_pct": 0.02343696692295305,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.27138666996836347,
          "mixed_qty_pct": 0.4844067405848273,
          "instit_qty_pct": 0.24420658944680923,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.27103488967939154,
          "mixed_notional_pct": 0.4844746900370141,
          "instit_notional_pct": 0.24449042028359436,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 11550.884343603895,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "O39",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6945684466542493,
          "mixed_pct": 0.24445645983098072,
          "instit_pct": 0.06097509351476994,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.17146992245100534,
          "mixed_qty_pct": 0.39054331896237776,
          "instit_qty_pct": 0.4379867585866169,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.17210825999517382,
          "mixed_notional_pct": 0.39138444413899437,
          "instit_notional_pct": 0.4365072958658318,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 18987.066595600572,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "U11",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6314190359992974,
          "mixed_pct": 0.2873226264342988,
          "instit_pct": 0.08125833756640383,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.1496731514045974,
          "mixed_qty_pct": 0.3786315948615009,
          "instit_qty_pct": 0.47169525373390175,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.14937904939281443,
          "mixed_notional_pct": 0.3777207516348835,
          "instit_notional_pct": 0.47290019897230207,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 23327.161422406632,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "D05",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5556624878512052,
          "mixed_pct": 0.31300368942844775,
          "instit_pct": 0.13133382272034702,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.11579407269391456,
          "mixed_qty_pct": 0.2899945233995456,
          "instit_qty_pct": 0.5942114039065398,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.11575673857581863,
          "mixed_notional_pct": 0.2898614093734386,
          "instit_notional_pct": 0.5943818520507428,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 35117.45512833725,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "T55",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3886.6666666666665,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8123015873015873,
            "mixed_pct": 0.17261904761904762,
            "instit_pct": 0.01507936507936508,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.362552421675849,
            "mixed_qty_pct": 0.4447002713592632,
            "instit_qty_pct": 0.19274730696488776,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.36214589853691465,
            "mixed_notional_pct": 0.44470684383729137,
            "instit_notional_pct": 0.193147257625794,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10445.25634920635,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8032786885245902,
            "mixed_pct": 0.18032786885245902,
            "instit_pct": 0.01639344262295082,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.30424528301886794,
            "mixed_qty_pct": 0.37735849056603776,
            "instit_qty_pct": 0.31839622641509435,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3041119562386822,
            "mixed_notional_pct": 0.37725170133562935,
            "instit_notional_pct": 0.3186363424256884,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10890.672131147541,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7066139061616733,
            "mixed_pct": 0.2426983229696627,
            "instit_pct": 0.05068777086866403,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.20191460757498494,
            "mixed_qty_pct": 0.41750498354271937,
            "instit_qty_pct": 0.38058040888229566,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.20201088213429363,
            "mixed_notional_pct": 0.4175618372065883,
            "instit_notional_pct": 0.38042728065911807,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 17631.407574901074,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7022299372412872,
            "mixed_pct": 0.2168513820269729,
            "instit_pct": 0.08091868073173988,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.21664337835739791,
            "mixed_qty_pct": 0.27629250116441545,
            "instit_qty_pct": 0.5070641204781866,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.21671110881648672,
            "mixed_notional_pct": 0.27617520977276744,
            "instit_notional_pct": 0.5071136814107459,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 24456.22993724129,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6401590457256461,
            "mixed_pct": 0.2786140301050838,
            "instit_pct": 0.08122692416927009,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1595934624364785,
            "mixed_qty_pct": 0.36327427551160557,
            "instit_qty_pct": 0.47713226205191595,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.15954839978742064,
            "mixed_notional_pct": 0.36316298719345586,
            "instit_notional_pct": 0.4772886130191235,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 22317.407270661744,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "K6S",
            "currency": "USD",
            "is_target": true,
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3333333333333333,
            "mixed_qty_pct": 0.6666666666666666,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3360805860805861,
            "mixed_notional_pct": 0.6639194139194139,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3640.0,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "T55",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2018.4818181818182,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "8A1",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 558.3190476190476,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "CJN",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3610.6666666666665,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8537859007832899,
            "mixed_pct": 0.13446475195822455,
            "instit_pct": 0.01174934725848564,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4338948443083206,
            "mixed_qty_pct": 0.39127105666156203,
            "instit_qty_pct": 0.1748340990301174,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4340612048517725,
            "mixed_notional_pct": 0.39113070204785316,
            "instit_notional_pct": 0.17480809310037435,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8073.601827676241,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.778638020581309,
            "mixed_pct": 0.19792573953998516,
            "instit_pct": 0.023436239878705765,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2747671779509373,
            "mixed_qty_pct": 0.48550471932723144,
            "instit_qty_pct": 0.23972810272183126,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2757810638184079,
            "mixed_notional_pct": 0.4855122896714066,
            "instit_notional_pct": 0.23870664651018553,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11600.421223265266,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6956595873671447,
            "mixed_pct": 0.2388932042513688,
            "instit_pct": 0.06544720838148646,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.17261685098967658,
            "mixed_qty_pct": 0.36883811473459704,
            "instit_qty_pct": 0.45854503427572635,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.17266531509183575,
            "mixed_notional_pct": 0.36854439573250075,
            "instit_notional_pct": 0.4587902891756635,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 20008.422285584373,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.69492468060764,
            "mixed_pct": 0.24087904404754337,
            "instit_pct": 0.06419627534481663,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1923219740073067,
            "mixed_qty_pct": 0.3779211834461281,
            "instit_qty_pct": 0.42975684254656527,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19258975724161143,
            "mixed_notional_pct": 0.3778674140790262,
            "instit_notional_pct": 0.4295428286793624,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 19658.194304964087,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5947440155107212,
            "mixed_pct": 0.28709231566621235,
            "instit_pct": 0.11816366882306643,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.13495125846044886,
            "mixed_qty_pct": 0.27693312487054594,
            "instit_qty_pct": 0.5881156166690051,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1349066404184892,
            "mixed_notional_pct": 0.2769394814134279,
            "instit_notional_pct": 0.5881538781680828,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 32936.723043403144,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "K6S",
            "currency": "USD",
            "is_target": true,
            "retail_pct": 0.75,
            "mixed_pct": 0.25,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1875,
            "mixed_qty_pct": 0.8125,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.18848075742964845,
            "mixed_notional_pct": 0.8115192425703516,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5703.5,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "8A1",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 366.7702702702702,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "CJN",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1684.857142857143,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "T55",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9414893617021277,
            "mixed_pct": 0.05851063829787234,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.677283057520566,
            "mixed_qty_pct": 0.32271694247943405,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6867403938515122,
            "mixed_notional_pct": 0.31325960614848786,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3463.747340425532,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8099547511312217,
            "mixed_pct": 0.1754059089699228,
            "instit_pct": 0.01463933989885547,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.38167099300453167,
            "mixed_qty_pct": 0.43754674644727,
            "instit_qty_pct": 0.18078226054819835,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.38157217266625676,
            "mixed_notional_pct": 0.43771012643495166,
            "instit_notional_pct": 0.1807177008987916,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9573.022624434388,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7610115542691204,
            "mixed_pct": 0.21250301508250685,
            "instit_pct": 0.0264854306483728,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2554079791499599,
            "mixed_qty_pct": 0.48293547370832857,
            "instit_qty_pct": 0.26165654714171155,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2563448813452285,
            "mixed_notional_pct": 0.48314743369742275,
            "instit_notional_pct": 0.2605076849573488,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 12402.499775346794,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6950981334907271,
            "mixed_pct": 0.24608808968794246,
            "instit_pct": 0.0588137768213304,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1764249358523922,
            "mixed_qty_pct": 0.39942249179164147,
            "instit_qty_pct": 0.4241525723559663,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.17648058936479502,
            "mixed_notional_pct": 0.39862026499776154,
            "instit_notional_pct": 0.4248991456374434,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 18907.10351848106,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6294651380567501,
            "mixed_pct": 0.2873735123782855,
            "instit_pct": 0.0831613495649644,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1468394294971462,
            "mixed_qty_pct": 0.3734248171292589,
            "instit_qty_pct": 0.4797357533735949,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1464253793790833,
            "mixed_notional_pct": 0.3725136515957111,
            "instit_notional_pct": 0.4810609690252056,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 23987.844960042185,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5456424227414073,
            "mixed_pct": 0.3211838520597705,
            "instit_pct": 0.1331737251988222,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1135240055956336,
            "mixed_qty_pct": 0.29634907477765055,
            "instit_qty_pct": 0.5901269196267158,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.11362853147483297,
            "mixed_notional_pct": 0.2958476133793017,
            "instit_notional_pct": 0.5905238551458654,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 35547.21103497619,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "6m": [
          {
            "ticker": "K6S",
            "currency": "USD",
            "is_target": true,
            "retail_pct": 0.7894736842105263,
            "mixed_pct": 0.21052631578947367,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.379746835443038,
            "mixed_qty_pct": 0.620253164556962,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.37246616044899306,
            "mixed_notional_pct": 0.6275338395510069,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5579.736842105263,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "8A1",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 258.1950819672131,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "CJN",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1515.5,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "T55",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9591078066914498,
            "mixed_pct": 0.040892193308550186,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7253609370743667,
            "mixed_qty_pct": 0.27463906292563334,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.740523316862948,
            "mixed_notional_pct": 0.25947668313705186,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2922.522304832714,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8004625041295012,
            "mixed_pct": 0.18417575156921043,
            "instit_pct": 0.015361744301288404,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3562138144607513,
            "mixed_qty_pct": 0.4623401104079709,
            "instit_qty_pct": 0.18144607513127778,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35685443571278047,
            "mixed_notional_pct": 0.46183192304442094,
            "instit_notional_pct": 0.1813136412427986,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9560.267096134787,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7761710977736656,
            "mixed_pct": 0.2003919353033814,
            "instit_pct": 0.02343696692295305,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.27138666996836347,
            "mixed_qty_pct": 0.4844067405848273,
            "instit_qty_pct": 0.24420658944680923,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27103488967939154,
            "mixed_notional_pct": 0.4844746900370141,
            "instit_notional_pct": 0.24449042028359436,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11550.884343603895,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6945684466542493,
            "mixed_pct": 0.24445645983098072,
            "instit_pct": 0.06097509351476994,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.17146992245100534,
            "mixed_qty_pct": 0.39054331896237776,
            "instit_qty_pct": 0.4379867585866169,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.17210825999517382,
            "mixed_notional_pct": 0.39138444413899437,
            "instit_notional_pct": 0.4365072958658318,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 18987.066595600572,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6314190359992974,
            "mixed_pct": 0.2873226264342988,
            "instit_pct": 0.08125833756640383,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1496731514045974,
            "mixed_qty_pct": 0.3786315948615009,
            "instit_qty_pct": 0.47169525373390175,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.14937904939281443,
            "mixed_notional_pct": 0.3777207516348835,
            "instit_notional_pct": 0.47290019897230207,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 23327.161422406632,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5556624878512052,
            "mixed_pct": 0.31300368942844775,
            "instit_pct": 0.13133382272034702,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.11579407269391456,
            "mixed_qty_pct": 0.2899945233995456,
            "instit_qty_pct": 0.5942114039065398,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.11575673857581863,
            "mixed_notional_pct": 0.2898614093734386,
            "instit_notional_pct": 0.5943818520507428,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 35117.45512833725,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ]
      },
      "peer_activity_enabled": true,
      "peer_activity_reason": null,
      "recent_trades": [],
      "currency_thresholds": {
        "SGD": {
          "retail_max": 13500.0,
          "instit_min": 67500.0
        },
        "USD": {
          "retail_max": 10000.0,
          "instit_min": 50000.0
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
      "total_trades": 18,
      "price_moving_trades": 9,
      "pct_price_moving": 50.0,
      "all_movers": {
        "count": 9,
        "avg_size": 2988.777777777778,
        "median_size": 1450.0,
        "retail_count": 8,
        "mixed_count": 1,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.88888888888889,
        "mixed_pct": 11.11111111111111,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 7,
        "avg_size": 3459.8571428571427,
        "median_size": 1480.0,
        "retail_count": 6,
        "mixed_count": 1,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 85.71428571428571,
        "mixed_pct": 14.285714285714285,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 2,
        "avg_size": 1340.0,
        "median_size": 1340.0,
        "retail_count": 2,
        "mixed_count": 0,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 100.0,
        "mixed_pct": 0.0,
        "instit_pct": 0.0,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "DFIRG USD",
      "mapping": {
        "ticker_to_security": "DFIRG USD",
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
            "avg_short_ratio": 1118.2932291666666,
            "max_short_ratio": 21462.6,
            "interpretation": "High short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 1083.377145522388,
            "max_short_ratio": 43473.0,
            "interpretation": "High short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 1510.0382724358974,
            "max_short_ratio": 43473.0,
            "interpretation": "High short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.3263139744970619,
        "interpretation": "Strong negative - high shorts coincide with price drops"
      },
      "peaks": [
        {
          "date": "2026-03-09",
          "short_ratio": 43473.0,
          "return_pct": -10.511363636363635
        },
        {
          "date": "2026-01-15",
          "short_ratio": 42678.7,
          "return_pct": 2.2827687776141525
        },
        {
          "date": "2025-12-10",
          "short_ratio": 36864.85,
          "return_pct": 2.105263157894721
        },
        {
          "date": "2025-12-09",
          "short_ratio": 22633.3,
          "return_pct": 2.3076923076923217
        },
        {
          "date": "2026-04-16",
          "short_ratio": 21462.6,
          "return_pct": 4.137931034482767
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-04",
            "avg_short_ratio": 1578.7669117647058
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 1976.0454545454545
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 126.34618055555555
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 2032.3190476190475
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 2704.4613636363633
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 1077.0928333333334
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 2319.8012727272726
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 3251.472195322793
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 1216.513043478261
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 711.2285714285714
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 716.8615224358974
          }
        ],
        "mom_change": [
          {
            "month": "2026-04",
            "avg_short_ratio": 1578.7669117647058,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 1976.0454545454545,
            "change_pct": 25.163850332832272
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 126.34618055555555,
            "change_pct": -93.60610960315087
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 2032.3190476190475,
            "change_pct": 1508.5322395047936
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 2704.4613636363633,
            "change_pct": 33.07267708801728
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 1077.0928333333334,
            "change_pct": -60.1734804639584
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 2319.8012727272726,
            "change_pct": 115.3761682312997
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 3251.472195322793,
            "change_pct": 40.16166960285362
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.0,
            "change_pct": -100.0
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 1216.513043478261,
            "change_pct": null
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 711.2285714285714,
            "change_pct": -41.535475082534035
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 716.8615224358974,
            "change_pct": 0.7920029134954043
          }
        ],
        "interpretation": "Shorts covering significantly (-20% MoM) | YoY: +120% ⬆️"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-04-24",
            "short_ratio": 0.0,
            "short_vol": 4740215,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.0,
            "short_vol": 3129900,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 3119475,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 2494570,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 2583500,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 2644270,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-16",
            "short_ratio": 21462.6,
            "short_vol": 6438780,
            "total_vol": 300,
            "close": 15.1,
            "return": 0.04137931034482767
          },
          {
            "date": "2026-04-15",
            "short_ratio": 5376.4375,
            "short_vol": 6451725,
            "total_vol": 1200,
            "close": 14.5,
            "return": 0.15079365079365092
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 3235200,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 3672390,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 3834430,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 3267230,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 5588480,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 3341010,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 992270,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 1917430,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 3134841,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 4494123,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 5681500,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 3440380,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 3103890,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.0,
            "short_vol": 3866110,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.0,
            "short_vol": 2889733,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 8165870,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 13891210,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 3784600,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0,
            "short_vol": 3184200,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.0,
            "short_vol": 3332778,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 5395650,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.0,
            "short_vol": 4995981,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 3656715,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.0,
            "short_vol": 3933992,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 2341126,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-09",
            "short_ratio": 43473.0,
            "short_vol": 4347300,
            "total_vol": 100,
            "close": 12.6,
            "return": -0.10511363636363635
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 2942537,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 3601521,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0,
            "short_vol": 9460380,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 22389959,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 5367242,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 8799670,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 4775511,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 2205520,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 4581433,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 3486730,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 3996994,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 4006166,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 1758400,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 2274.23125,
            "short_vol": 3638770,
            "total_vol": 1600,
            "close": 14.08,
            "return": 0.01367890568754504
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0,
            "short_vol": 4387830,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 5538420,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 2931230,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0,
            "short_vol": 4071130,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 3029405,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.0,
            "short_vol": 3878880,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 6880030,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0,
            "short_vol": 3265170,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.0,
            "short_vol": 5424883,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0,
            "short_vol": 11091750,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.0,
            "short_vol": 9093500,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 3203280,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 8163569,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.0,
            "short_vol": 4918620,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.0,
            "short_vol": 5160130,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 6234206,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.0,
            "short_vol": 3726930,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.0,
            "short_vol": 6193270,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.0,
            "short_vol": 2111120,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.0,
            "short_vol": 2875800,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-15",
            "short_ratio": 42678.7,
            "short_vol": 4267870,
            "total_vol": 100,
            "close": 13.89,
            "return": 0.022827687776141525
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0,
            "short_vol": 2999360,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 3832240,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 3552540,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0,
            "short_vol": 2416690,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.0,
            "short_vol": 3128896,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 2909530,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0,
            "short_vol": 6001121,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0,
            "short_vol": 9875140,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.0,
            "short_vol": 1214290,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.0,
            "short_vol": 1335330,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0,
            "short_vol": 2557057,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.0,
            "short_vol": 1221350,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0,
            "short_vol": 1429690,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0,
            "short_vol": 1158306,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.0,
            "short_vol": 2991350,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.0,
            "short_vol": 2360970,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.0,
            "short_vol": 12874230,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.0,
            "short_vol": 2633470,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.0,
            "short_vol": 2152230,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.0,
            "short_vol": 2543970,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.0,
            "short_vol": 2183850,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.0,
            "short_vol": 3183610,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.0,
            "short_vol": 2363580,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-10",
            "short_ratio": 36864.85,
            "short_vol": 3686485,
            "total_vol": 100,
            "close": 13.58,
            "return": 0.021052631578947212
          },
          {
            "date": "2025-12-09",
            "short_ratio": 22633.3,
            "short_vol": 2263330,
            "total_vol": 100,
            "close": 13.3,
            "return": 0.023076923076923217
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.0,
            "short_vol": 3663160,
            "total_vol": 0,
            "close": 13.0,
            "return": 0.0
          },
          {
            "date": "2025-12-05",
            "short_ratio": 0.0,
            "short_vol": 7541500,
            "total_vol": 0,
            "close": 13.0,
            "return": 0.0
          },
          {
            "date": "2025-12-04",
            "short_ratio": 0.0,
            "short_vol": 1766812,
            "total_vol": 0,
            "close": 13.0,
            "return": 0.0
          },
          {
            "date": "2025-12-03",
            "short_ratio": 0.0,
            "short_vol": 1585750,
            "total_vol": 0,
            "close": 13.0,
            "return": 0.0
          },
          {
            "date": "2025-12-02",
            "short_ratio": 0.0,
            "short_vol": 1725690,
            "total_vol": 0,
            "close": 13.0,
            "return": 0.0
          },
          {
            "date": "2025-12-01",
            "short_ratio": 0.0,
            "short_vol": 4535400,
            "total_vol": 0,
            "close": 13.0,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "K6S",
          "avg_short_ratio": 1083.377145522388,
          "max_short_ratio": 43473.0,
          "is_target": true
        },
        {
          "ticker": "G07",
          "avg_short_ratio": 0.0006115971294325253,
          "max_short_ratio": 0.12048192771084337,
          "is_target": false
        },
        {
          "ticker": "D05",
          "avg_short_ratio": 0.06020805987973428,
          "max_short_ratio": 0.4500000874898293,
          "is_target": false
        },
        {
          "ticker": "O39",
          "avg_short_ratio": 0.07513365998304361,
          "max_short_ratio": 0.6282301538337058,
          "is_target": false
        },
        {
          "ticker": "S68",
          "avg_short_ratio": 0.08176393849189044,
          "max_short_ratio": 0.4301208053691275,
          "is_target": false
        },
        {
          "ticker": "U11",
          "avg_short_ratio": 0.08817130262213056,
          "max_short_ratio": 0.5729590452942772,
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
        "1M": {
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        },
        "3M": {
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        },
        "6M": {
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        }
      },
      "hhi": {
        "1M": 0.631554785916329,
        "3M": 0.8157773929581644,
        "6M": 0.8559168831639159
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.1703
        },
        {
          "time": "09:30",
          "avg_share": 0.1135
        },
        {
          "time": "10:00",
          "avg_share": 0.0742
        },
        {
          "time": "10:30",
          "avg_share": 0.1703
        },
        {
          "time": "11:30",
          "avg_share": 0.1222
        },
        {
          "time": "14:30",
          "avg_share": 0.1422
        },
        {
          "time": "15:30",
          "avg_share": 0.0227
        },
        {
          "time": "16:00",
          "avg_share": 0.1703
        },
        {
          "time": "16:30",
          "avg_share": 0.0142
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "K6S",
          "auctions_pct": 0.0,
          "hhi": 0.8413279120200242,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "G07",
          "auctions_pct": 4.037698411159189,
          "hhi": 0.18342474608404466,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "S68",
          "auctions_pct": 30.159430584963907,
          "hhi": 0.13604113014159303,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "U11",
          "auctions_pct": 27.036612488338356,
          "hhi": 0.1303485986202326,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "O39",
          "auctions_pct": 29.75049439466142,
          "hhi": 0.1384246067151205,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "D05",
          "auctions_pct": 29.09678618417484,
          "hhi": 0.12154967303677856,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "8A1",
          "auctions_pct": 15.654430010025447,
          "hhi": 0.8324254814638751,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "CJN",
          "auctions_pct": 0.7287316793580612,
          "hhi": 0.8650668762327416,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "T55",
          "auctions_pct": 2.133024228557,
          "hhi": 0.7700710603042555,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
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
