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
      "ticker": "TKU",
      "name": "Toku Ltd",
      "marketCap": 131155488.65,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 255420000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 98736916.8,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 127347680.94,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 65397513.024000004,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "532",
      "name": "DISA",
      "marketCap": 14089803.417,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 11609592.972,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "S69",
      "name": "Serial System",
      "marketCap": 59719566.324,
      "sector": "Electronics & Computer Distribution",
      "industry": "Technology"
    },
    {
      "ticker": "S71",
      "name": "Sunright",
      "marketCap": 52806580.0,
      "sector": "Semiconductors",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-04-02",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "131.2M",
    "market_cap_category": "small",
    "universe_total": 558,
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
          "score_pca": 68.99641577060932,
          "score_pca_percentile": 68.99641577060932,
          "rank_pca": 174,
          "total": 558,
          "adv_notional_sgd": 107180.0,
          "adv_volume_shares": 466000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0008171979770211469,
          "votes": 34.0,
          "trades": 34.0,
          "spread_pct": 0.025406504065040632,
          "spread_ticks": 1.1627906976744187,
          "amihud": 0.0,
          "volatility": 0.4145702529941132
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5108910707179195,
          "loadings": {
            "log_adv": 0.5584929385657076,
            "log_trades": 0.5199635891691764,
            "log_turnover": 0.5238611527634245,
            "neg_spread": 0.3353325031857625,
            "neg_amihud": 0.040767511874861516,
            "neg_vol": -0.17083067177362937
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
          "peer_median_adv": 11351.0,
          "peer_median_score_pca": 56.810035842293914,
          "peer_median_trades": 14.5,
          "peer_median_volatility": 0.21897325686882335,
          "peer_median_spread_pct": 0.026429529477170914,
          "peer_median_spread_ticks": 2.5416666666666665,
          "peer_median_amihud": 2.0707852528392182e-06,
          "peer_median_turnover_ratio": 0.0003142374568551266,
          "target_vs_peer": {
            "score_pca_delta": 12.19,
            "adv_delta_pct": 844.2,
            "trades_delta_pct": 134.48,
            "volatility_delta_pct": -89.32,
            "spread_pct_delta_pct": 3.87,
            "spread_ticks_delta_pct": -54.25,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 160.06
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 68.99641577060932,
            "rank_pca": 174,
            "adv": 107180.0,
            "trades": 34.0,
            "volatility": 0.4145702529941132,
            "spread_pct": 0.025406504065040632,
            "spread_ticks": 1.1627906976744187,
            "amihud": 0.0,
            "turnover_ratio": 0.0008171979770211469,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 77.77777777777779,
            "rank_pca": 125,
            "adv": 226215.0,
            "trades": 147.0,
            "volatility": 0.24137019759426565,
            "spread_pct": 0.007280166859298825,
            "spread_ticks": 1.4199475065616798,
            "amihud": 4.420573348363287e-08,
            "turnover_ratio": 0.0033842526355700505,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 28.85304659498208,
            "rank_pca": 398,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.02585193889541718,
            "spread_ticks": 1.8333333333333333,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 44.086021505376344,
            "rank_pca": 313,
            "adv": 4380.0,
            "trades": 7.0,
            "volatility": 0.13150020296500828,
            "spread_pct": 0.02700712005892465,
            "spread_ticks": 3.9285714285714284,
            "amihud": 3.0852770578797915e-06,
            "turnover_ratio": 4.147842748119477e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 53.40501792114696,
            "rank_pca": 261,
            "adv": 9888.0,
            "trades": 12.0,
            "volatility": 0.19657631614338103,
            "spread_pct": 0.01833180568285978,
            "spread_ticks": 3.5714285714285716,
            "amihud": 4.0453074433657e-06,
            "turnover_ratio": 0.00015950447194790207,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 74.19354838709677,
            "rank_pca": 145,
            "adv": 13993.800000000001,
            "trades": 37.0,
            "volatility": 6.608197362010048,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00151700980546657,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 3.225806451612903,
            "rank_pca": 541,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6056644880174292,
            "spread_ticks": 27.8,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 63.44086021505376,
            "rank_pca": 205,
            "adv": 18361.2,
            "trades": 36.0,
            "volatility": 0.2846066143911051,
            "spread_pct": 0.02461490827463428,
            "spread_ticks": 1.65625,
            "amihud": 2.3679422297870126e-06,
            "turnover_ratio": 0.0004689704417623512,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 60.215053763440864,
            "rank_pca": 223,
            "adv": 12814.0,
            "trades": 17.0,
            "volatility": 0.5387655742636033,
            "spread_pct": 0.03700349333678357,
            "spread_ticks": 3.25,
            "amihud": 1.773628275891424e-06,
            "turnover_ratio": 0.0006344030155857706,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.29017298063593877,
              "median": 0.12144894893604596,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.9131263014776855,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2914112.7878651754,
              "median": 11436.0,
              "min": 0.0,
              "max": 245600380.0,
              "p5": 0.0,
              "p95": 12689618.774999995,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11252936549158786,
              "median": 0.03231188069703618,
              "min": 0.0002671610380959682,
              "max": 1.3400402414486918,
              "p5": 0.0034691714780117336,
              "p95": 0.5462753950338599,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035451845469250468,
              "median": 0.00018963018166556688,
              "min": 0.0,
              "max": 0.4116033354924642,
              "p5": 0.0,
              "p95": 0.01222049733796755,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00017942207639727668,
              "median": 1.976647291170524e-08,
              "min": 0.0,
              "max": 0.037986704653371325,
              "p5": 0.0,
              "p95": 0.00013094998944055469,
              "count": 388
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 469.25985663082434,
              "median": 6.0,
              "min": 0.0,
              "max": 11204.0,
              "p5": 0.0,
              "p95": 2946.999999999993,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9914028719883072,
              "median": 0.21897325686882335,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 4.440427873854468,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2360103.6,
              "median": 11940.900000000001,
              "min": 0.0,
              "max": 18519172.0,
              "p5": 0.0,
              "p95": 12116637.04999999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17220805378344942,
              "median": 0.025629221480228906,
              "min": 0.0014557400219584542,
              "max": 0.6666666666666666,
              "p5": 0.003494289415027584,
              "p95": 0.6453159041394335,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002271620072711425,
              "median": 0.0004883512244845244,
              "min": 0.0,
              "max": 0.012253517264204533,
              "p5": 0.0,
              "p95": 0.00914927464418246,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.196064518594305e-06,
              "median": 2.2901305160168847e-08,
              "min": 0.0,
              "max": 4.0453074433657e-06,
              "p5": 0.0,
              "p95": 3.8052998469942226e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 490.875,
              "median": 23.0,
              "min": 0.0,
              "max": 3690.0,
              "p5": 0.0,
              "p95": 2449.949999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 35706.5,
              "median": 11351.0,
              "min": 0.0,
              "max": 226215.0,
              "p5": 0.0,
              "p95": 153466.1699999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 32.0,
              "median": 14.5,
              "min": 0.0,
              "max": 147.0,
              "p5": 0.0,
              "p95": 108.49999999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0001270334209265,
              "median": 0.21897325686882335,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 4.48389623629879,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17655257347400177,
              "median": 0.026429529477170914,
              "min": 0.007280166859298825,
              "max": 0.6666666666666666,
              "p5": 0.01114824044754516,
              "p95": 0.6453159041394335,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.557441354986876,
              "median": 2.5416666666666665,
              "min": 1.0,
              "max": 27.8,
              "p5": 1.146981627296588,
              "p95": 19.444999999999986,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.88606012340126e-06,
              "median": 2.0707852528392182e-06,
              "min": 0.0,
              "max": 4.0453074433657e-06,
              "p5": 1.1051433370908217e-08,
              "p95": 3.8052998469942226e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0007757023497267299,
              "median": 0.0003142374568551266,
              "min": 0.0,
              "max": 0.0033842526355700505,
              "p5": 0.0,
              "p95": 0.002730717645033831,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.005693538099210027,
            "sector": -0.0050000000000000044,
            "peers": -0.011756756756756692,
            "vs_market": 0.005693538099210027,
            "vs_sector": 0.0050000000000000044,
            "vs_peers": 0.011756756756756692
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 69.53405017921148,
          "score_pca_percentile": 69.53405017921148,
          "rank_pca": 171,
          "total": 558,
          "adv_notional_sgd": 109664.0,
          "adv_volume_shares": 476800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0008361373292782895,
          "votes": 34.0,
          "trades": 34.0,
          "spread_pct": 0.025406504065040632,
          "spread_ticks": 1.1627906976744187,
          "amihud": 0.0,
          "volatility": 0.24674141819365403
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5187436054443112,
          "loadings": {
            "log_adv": 0.5501481390090509,
            "log_trades": 0.5088001302628754,
            "log_turnover": 0.509674344204797,
            "neg_spread": 0.40082156435758276,
            "neg_amihud": 0.09372731510962494,
            "neg_vol": 0.09617057448643467
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
          "peer_median_adv": 5090.0,
          "peer_median_score_pca": 47.4910394265233,
          "peer_median_trades": 5.0,
          "peer_median_volatility": 0.2634091383719366,
          "peer_median_spread_pct": 0.02556997057161981,
          "peer_median_spread_ticks": 1.9166666666666665,
          "peer_median_amihud": 4.569338477677361e-07,
          "peer_median_turnover_ratio": 0.00013390439931975886,
          "target_vs_peer": {
            "score_pca_delta": 22.04,
            "adv_delta_pct": 2054.5,
            "trades_delta_pct": 580.0,
            "volatility_delta_pct": 6.33,
            "spread_pct_delta_pct": 0.64,
            "spread_ticks_delta_pct": -39.33,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 524.43
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 69.53405017921148,
            "rank_pca": 171,
            "adv": 109664.0,
            "trades": 34.0,
            "volatility": 0.24674141819365403,
            "spread_pct": 0.025406504065040632,
            "spread_ticks": 1.1627906976744187,
            "amihud": 0.0,
            "turnover_ratio": 0.0008361373292782895,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.61648745519713,
            "rank_pca": 98,
            "adv": 329373.0,
            "trades": 434.0,
            "volatility": 0.18253433025721752,
            "spread_pct": 0.007787235775668969,
            "spread_ticks": 1.4199475065616798,
            "amihud": 2.036493971977856e-08,
            "turnover_ratio": 0.004927531080324532,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 43.54838709677419,
            "rank_pca": 316,
            "adv": 3550.0,
            "trades": 1.0,
            "volatility": 0.27195836415816127,
            "spread_pct": 0.02585193889541718,
            "spread_ticks": 1.8333333333333333,
            "amihud": 2.495757212738346e-06,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 48.028673835125446,
            "rank_pca": 291,
            "adv": 4380.0,
            "trades": 7.0,
            "volatility": 0.25485991258571195,
            "spread_pct": 0.025288002247822447,
            "spread_ticks": 3.7333333333333334,
            "amihud": 3.0852770578797915e-06,
            "turnover_ratio": 4.147842748119477e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.95340501792115,
            "rank_pca": 297,
            "adv": 5800.0,
            "trades": 3.0,
            "volatility": 0.3145289764488348,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 2.0,
            "amihud": 4.125260954651724e-06,
            "turnover_ratio": 8.981805216483805e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.494623655913978,
            "rank_pca": 537,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 6.989247311827956,
            "rank_pca": 520,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4408945686900958,
            "spread_ticks": 17.25,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 68.45878136200717,
            "rank_pca": 177,
            "adv": 71576.1,
            "trades": 30.0,
            "volatility": 0.5169916275670062,
            "spread_pct": 0.022995899332636505,
            "spread_ticks": 1.5714285714285714,
            "amihud": 4.569338477677361e-07,
            "turnover_ratio": 0.0018008667251427743,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 66.48745519713262,
            "rank_pca": 188,
            "adv": 70224.0,
            "trades": 17.0,
            "volatility": 0.4313123485581449,
            "spread_pct": 0.03700349333678357,
            "spread_ticks": 3.25,
            "amihud": 3.9642896785753787e-07,
            "turnover_ratio": 0.0033976752109895632,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5685046855156171,
              "median": 0.2948951324116674,
              "min": 0.0,
              "max": 10.648943609579309,
              "p5": 0.0,
              "p95": 1.9596506378844314,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3472338.665810097,
              "median": 9364.599999999999,
              "min": 0.0,
              "max": 270730200.0,
              "p5": 0.0,
              "p95": 14126941.849999996,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11386900713570655,
              "median": 0.03338216536825001,
              "min": 0.0002674471588617271,
              "max": 1.3546483030004917,
              "p5": 0.0036673135527688265,
              "p95": 0.5514993370278448,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003953834287225416,
              "median": 0.00017553618729528373,
              "min": 0.0,
              "max": 0.6360819985498649,
              "p5": 0.0,
              "p95": 0.010772991528425653,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0016683134810411846,
              "median": 1.4996971964907266e-07,
              "min": 0.0,
              "max": 0.4168860803931893,
              "p5": 0.0,
              "p95": 0.00021650384322008986,
              "count": 504
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 479.5268817204301,
              "median": 5.0,
              "min": 0.0,
              "max": 10655.0,
              "p5": 0.0,
              "p95": 3174.1499999999983,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.20994999161652075,
              "median": 0.250800665389683,
              "min": 0.0,
              "max": 0.4089769312885865,
              "p5": 0.0,
              "p95": 0.37592014709467336,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2371492.375,
              "median": 5090.0,
              "min": 0.0,
              "max": 18519172.0,
              "p5": 0.0,
              "p95": 12152742.34999999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15042074492960886,
              "median": 0.02534725315643154,
              "min": 0.0014207918398778216,
              "max": 0.6666666666666666,
              "p5": 0.0036490472174047234,
              "p95": 0.5876464323748667,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022908091124910082,
              "median": 0.00013390439931975886,
              "min": 0.0,
              "max": 0.012253517264204533,
              "p5": 0.0,
              "p95": 0.00968942209984653,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.389691960931885e-06,
              "median": 2.036493971977856e-08,
              "min": 0.0,
              "max": 4.125260954651724e-06,
              "p5": 0.0,
              "p95": 3.8132657856201436e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 521.25,
              "median": 5.0,
              "min": 0.0,
              "max": 3691.0,
              "p5": 0.0,
              "p95": 2551.0499999999984,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 60612.8875,
              "median": 5090.0,
              "min": 0.0,
              "max": 329373.0,
              "p5": 0.0,
              "p95": 239144.08499999985,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 61.5,
              "median": 5.0,
              "min": 0.0,
              "max": 434.0,
              "p5": 0.0,
              "p95": 292.5999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.24652319494688457,
              "median": 0.2634091383719366,
              "min": 0.0,
              "max": 0.5169916275670062,
              "p5": 0.0,
              "p95": 0.4870038799139047,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15456725702517157,
              "median": 0.02556997057161981,
              "min": 0.007787235775668969,
              "max": 0.6666666666666666,
              "p5": 0.008579291193883325,
              "p95": 0.5876464323748667,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.0072553430821145,
              "median": 1.9166666666666665,
              "min": 1.0,
              "max": 17.25,
              "p5": 1.146981627296588,
              "p95": 12.51916666666666,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.511431854373559e-06,
              "median": 4.569338477677361e-07,
              "min": 0.0,
              "max": 4.125260954651724e-06,
              "p5": 6.109481915933569e-09,
              "p95": 3.8132657856201436e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0013044200303221978,
              "median": 0.00013390439931975886,
              "min": 0.0,
              "max": 0.004927531080324532,
              "p5": 0.0,
              "p95": 0.004392081526057292,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -1.1102230246251565e-16,
            "market": 0.012222416247857915,
            "sector": 0.005050505050505194,
            "peers": -0.012409006372074316,
            "vs_market": -0.012222416247858026,
            "vs_sector": -0.005050505050505305,
            "vs_peers": 0.012409006372074205
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 68.27956989247312,
          "score_pca_percentile": 68.27956989247312,
          "rank_pca": 178,
          "total": 558,
          "adv_notional_sgd": 119868.25,
          "adv_volume_shares": 527450.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0009249593840768326,
          "votes": 38.5,
          "trades": 38.5,
          "spread_pct": 0.025467120466491855,
          "spread_ticks": 1.159173126614987,
          "amihud": 1.3765828005227433e-07,
          "volatility": 0.346268223372874
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5197520702234453,
          "loadings": {
            "log_adv": 0.550658686990122,
            "log_trades": 0.5025183256803418,
            "log_turnover": 0.5087768503282348,
            "neg_spread": 0.41533672428940266,
            "neg_amihud": 0.08467809974736297,
            "neg_vol": 0.07564049343801804
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
          "peer_median_adv": 7609.25,
          "peer_median_score_pca": 48.38709677419355,
          "peer_median_trades": 4.75,
          "peer_median_volatility": 0.3146867895323868,
          "peer_median_spread_pct": 0.02268351977031465,
          "peer_median_spread_ticks": 1.8739630325814538,
          "peer_median_amihud": 3.3119592387786906e-07,
          "peer_median_turnover_ratio": 0.000236786245492466,
          "target_vs_peer": {
            "score_pca_delta": 19.89,
            "adv_delta_pct": 1475.3,
            "trades_delta_pct": 710.53,
            "volatility_delta_pct": -10.04,
            "spread_pct_delta_pct": -12.27,
            "spread_ticks_delta_pct": -38.14,
            "amihud_delta_pct": 58.44,
            "turnover_ratio_delta_pct": 290.63
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 68.27956989247312,
            "rank_pca": 178,
            "adv": 119868.25,
            "trades": 38.5,
            "volatility": 0.346268223372874,
            "spread_pct": 0.025467120466491855,
            "spread_ticks": 1.159173126614987,
            "amihud": 1.3765828005227433e-07,
            "turnover_ratio": 0.0009249593840768326,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.97491039426524,
            "rank_pca": 96,
            "adv": 543677.5,
            "trades": 338.0,
            "volatility": 0.18656826573068622,
            "spread_pct": 0.010312299629089357,
            "spread_ticks": 1.420712008314397,
            "amihud": 1.468361112717436e-08,
            "turnover_ratio": 0.00800890421306129,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 47.132616487455195,
            "rank_pca": 296,
            "adv": 8050.0,
            "trades": 1.5,
            "volatility": 0.5562593092636959,
            "spread_pct": 0.02560202578573677,
            "spread_ticks": 1.8166666666666667,
            "amihud": 2.012072434607639e-06,
            "turnover_ratio": 0.00040047917956802925,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 49.6415770609319,
            "rank_pca": 282,
            "adv": 7168.5,
            "trades": 6.0,
            "volatility": 0.31209568180001823,
            "spread_pct": 0.019744062742914174,
            "spread_ticks": 3.0,
            "amihud": 2.5378119379064083e-06,
            "turnover_ratio": 6.636548396991164e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.59498207885305,
            "rank_pca": 299,
            "adv": 4720.0,
            "trades": 3.5,
            "volatility": 0.31727789726475536,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 2.0,
            "amihud": 1.3235323869320423e-06,
            "turnover_ratio": 7.30933114169027e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.6881720430107525,
            "rank_pca": 541,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 7.616487455197133,
            "rank_pca": 516,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4,
            "spread_ticks": 15.666666666666666,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 68.81720430107528,
            "rank_pca": 175,
            "adv": 85526.70000000001,
            "trades": 37.5,
            "volatility": 0.5099032526717658,
            "spread_pct": 0.02251746191445252,
            "spread_ticks": 1.55943859290316,
            "amihud": 3.3119592387786906e-07,
            "turnover_ratio": 0.0021155927548948627,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 73.83512544802868,
            "rank_pca": 147,
            "adv": 133388.5,
            "trades": 56.5,
            "volatility": 0.824296773822959,
            "spread_pct": 0.022849577626176783,
            "spread_ticks": 1.9312593984962407,
            "amihud": 3.042004542597556e-07,
            "turnover_ratio": 0.006389800843223793,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6249311263185745,
              "median": 0.36682215108401484,
              "min": 0.0,
              "max": 15.028761679224345,
              "p5": 0.0,
              "p95": 1.8129575855324458,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3382636.0785534773,
              "median": 9616.325,
              "min": 0.0,
              "max": 264260256.0,
              "p5": 0.0,
              "p95": 14951501.77499999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11216285484584944,
              "median": 0.03377564531823278,
              "min": 0.0003015714112095303,
              "max": 1.3650386390847784,
              "p5": 0.003554393941669096,
              "p95": 0.5487305487305487,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00735939439950683,
              "median": 0.00021529821392680978,
              "min": 0.0,
              "max": 2.4454551446839363,
              "p5": 0.0,
              "p95": 0.010983769536470294,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0006467786028464284,
              "median": 1.7030037909104954e-07,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 0.00015980873583011933,
              "count": 523
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 479.915770609319,
              "median": 5.5,
              "min": 0.0,
              "max": 10929.5,
              "p5": 0.0,
              "p95": 3125.0499999999965,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.255395379899213,
              "median": 0.3146867895323868,
              "min": 0.0,
              "max": 0.5562593092636959,
              "p5": 0.0,
              "p95": 0.48276242920190815,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1650486.90625,
              "median": 7609.25,
              "min": 0.0,
              "max": 12520411.0,
              "p5": 0.0,
              "p95": 8328554.274999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14490495920462015,
              "median": 0.022605591604703015,
              "min": 0.001397247089780917,
              "max": 0.6666666666666666,
              "p5": 0.004425798548056092,
              "p95": 0.5733333333333331,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022124109008344953,
              "median": 0.000236786245492466,
              "min": 0.0,
              "max": 0.008225485634582997,
              "p5": 0.0,
              "p95": 0.008149682137050399,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.6099492340801e-07,
              "median": 1.3765828005227433e-07,
              "min": 0.0,
              "max": 2.5378119379064083e-06,
              "p5": 3.617439691594115e-10,
              "p95": 2.380090086916777e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 466.5625,
              "median": 4.75,
              "min": 0.0,
              "max": 3345.0,
              "p5": 0.0,
              "p95": 2292.5499999999984,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 97816.4,
              "median": 7609.25,
              "min": 0.0,
              "max": 543677.5,
              "p5": 0.0,
              "p95": 400076.34999999974,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 55.375,
              "median": 4.75,
              "min": 0.0,
              "max": 338.0,
              "p5": 0.0,
              "p95": 239.47499999999985,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.33830014756923504,
              "median": 0.3146867895323868,
              "min": 0.0,
              "max": 0.824296773822959,
              "p5": 0.0,
              "p95": 0.7304836612272168,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1472177932026647,
              "median": 0.02268351977031465,
              "min": 0.010050251256281416,
              "max": 0.6666666666666666,
              "p5": 0.010141968186764196,
              "p95": 0.5733333333333331,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.549342916630891,
              "median": 1.8739630325814538,
              "min": 1.0,
              "max": 15.666666666666666,
              "p5": 1.147249202910039,
              "p95": 11.233333333333327,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.319281069586985e-07,
              "median": 3.3119592387786906e-07,
              "min": 0.0,
              "max": 2.5378119379064083e-06,
              "p5": 4.405083338152308e-09,
              "p95": 2.380090086916777e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0021317794732668488,
              "median": 0.000236786245492466,
              "min": 0.0,
              "max": 0.00800890421306129,
              "p5": 0.0,
              "p95": 0.007442218033618165,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -0.021276595744680993,
            "market": -0.004048196987024522,
            "sector": 0.009463859573717981,
            "peers": -0.02012528788853518,
            "vs_market": -0.01722839875765647,
            "vs_sector": -0.030740455318398974,
            "vs_peers": -0.0011513078561458112
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 70.96774193548387,
          "score_pca_percentile": 70.96774193548387,
          "rank_pca": 163,
          "total": 558,
          "adv_notional_sgd": 145406.0,
          "adv_volume_shares": 632200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0011086535645338392,
          "votes": 46.0,
          "trades": 46.0,
          "spread_pct": 0.025405786873676804,
          "spread_ticks": 1.170940170940171,
          "amihud": 1.0373766818469451e-07,
          "volatility": 0.4379487678280238
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5306379975624421,
          "loadings": {
            "log_adv": 0.5436203839967068,
            "log_trades": 0.49801953018501277,
            "log_turnover": 0.5012803994211672,
            "neg_spread": 0.41741169107370113,
            "neg_amihud": 0.07475864479898425,
            "neg_vol": 0.15921687095449155
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
          "peer_median_adv": 9771.75,
          "peer_median_score_pca": 52.5089605734767,
          "peer_median_trades": 6.5,
          "peer_median_volatility": 0.3600041006034894,
          "peer_median_spread_pct": 0.02626725325810239,
          "peer_median_spread_ticks": 1.875,
          "peer_median_amihud": 4.0428760489677053e-07,
          "peer_median_turnover_ratio": 0.00015512004267593613,
          "target_vs_peer": {
            "score_pca_delta": 18.46,
            "adv_delta_pct": 1388.0,
            "trades_delta_pct": 607.69,
            "volatility_delta_pct": -21.65,
            "spread_pct_delta_pct": 3.28,
            "spread_ticks_delta_pct": -37.55,
            "amihud_delta_pct": 74.34,
            "turnover_ratio_delta_pct": 614.71
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 70.96774193548387,
            "rank_pca": 163,
            "adv": 145406.0,
            "trades": 46.0,
            "volatility": 0.4379487678280238,
            "spread_pct": 0.025405786873676804,
            "spread_ticks": 1.170940170940171,
            "amihud": 1.0373766818469451e-07,
            "turnover_ratio": 0.0011086535645338392,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.61648745519713,
            "rank_pca": 98,
            "adv": 510615.0,
            "trades": 298.0,
            "volatility": 0.34476241078000097,
            "spread_pct": 0.013261761919797927,
            "spread_ticks": 1.4241164241164241,
            "amihud": 3.427976331880202e-08,
            "turnover_ratio": 0.0073461238829004155,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 41.03942652329749,
            "rank_pca": 330,
            "adv": 3550.0,
            "trades": 1.0,
            "volatility": 0.4435207580228546,
            "spread_pct": 0.05007085498346713,
            "spread_ticks": 3.533333333333333,
            "amihud": 1.855230614885314e-06,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 53.76344086021505,
            "rank_pca": 259,
            "adv": 10790.0,
            "trades": 8.0,
            "volatility": 0.31280697145607433,
            "spread_pct": 0.019672131147541,
            "spread_ticks": 3.0,
            "amihud": 1.0611205432937245e-06,
            "turnover_ratio": 8.986992620925533e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 51.25448028673835,
            "rank_pca": 273,
            "adv": 8753.5,
            "trades": 5.0,
            "volatility": 0.37524579042697787,
            "spread_pct": 0.01833180568285978,
            "spread_ticks": 1.75,
            "amihud": 1.365669336393555e-06,
            "turnover_ratio": 0.00013224933887719258,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.046594982078853,
            "rank_pca": 540,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 8.60215053763441,
            "rank_pca": 511,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4183673469387756,
            "spread_ticks": 16.4,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 68.99641577060932,
            "rank_pca": 174,
            "adv": 97659.4,
            "trades": 39.0,
            "volatility": 0.7514531395971304,
            "spread_pct": 0.022450800807853062,
            "spread_ticks": 1.5669291338582678,
            "amihud": 3.6756626451535687e-07,
            "turnover_ratio": 0.0022551713047795595,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 68.63799283154121,
            "rank_pca": 176,
            "adv": 95472.0,
            "trades": 29.0,
            "volatility": 0.7216606300079051,
            "spread_pct": 0.030083705708351716,
            "spread_ticks": 2.0,
            "amihud": 4.0428760489677053e-07,
            "turnover_ratio": 0.0049176878053796315,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6450386508604602,
              "median": 0.40652426849656087,
              "min": 0.0,
              "max": 10.424621821966237,
              "p5": 0.0,
              "p95": 2.002191103403035,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3401378.0466548093,
              "median": 8892.0,
              "min": 0.0,
              "max": 278393500.0,
              "p5": 0.0,
              "p95": 14115266.000000002,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11015762052077444,
              "median": 0.036315604015351305,
              "min": 0.0002854442826014152,
              "max": 1.3716475095785439,
              "p5": 0.0037518628589434623,
              "p95": 0.4924799276263712,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007420125077540505,
              "median": 0.0002144937479553005,
              "min": 0.0,
              "max": 2.831059257794476,
              "p5": 0.0,
              "p95": 0.009711780348739272,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005327125826500479,
              "median": 1.6797283667611684e-07,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 0.00013363806468858605,
              "count": 542
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 494.9623655913978,
              "median": 5.0,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 3002.299999999994,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.27773262655611447,
              "median": 0.32878469111803765,
              "min": 0.0,
              "max": 0.4435207580228546,
              "p5": 0.0,
              "p95": 0.44157056145466383,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1849033.5625000002,
              "median": 9771.75,
              "min": 0.0,
              "max": 14113154.000000002,
              "p5": 0.0,
              "p95": 9352265.349999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15164744746149253,
              "median": 0.0225389590106089,
              "min": 0.001403225479155513,
              "max": 0.6666666666666666,
              "p5": 0.0055537132333803585,
              "p95": 0.5797619047619046,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002258229600774466,
              "median": 0.00015512004267593613,
              "min": 0.0,
              "max": 0.009210949347200346,
              "p5": 0.0,
              "p95": 0.00855826043469537,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.316056505650463e-07,
              "median": 1.0373766818469451e-07,
              "min": 0.0,
              "max": 1.855230614885314e-06,
              "p5": 3.6048836377019974e-10,
              "p95": 1.708362231337786e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 479.0,
              "median": 6.5,
              "min": 0.0,
              "max": 3474.0,
              "p5": 0.0,
              "p95": 2362.3999999999983,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 90854.9875,
              "median": 9771.75,
              "min": 0.0,
              "max": 510615.0,
              "p5": 0.0,
              "p95": 366080.5399999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 47.5,
              "median": 6.5,
              "min": 0.0,
              "max": 298.0,
              "p5": 0.0,
              "p95": 207.34999999999985,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3686812125363679,
              "median": 0.3600041006034894,
              "min": 0.0,
              "max": 0.7514531395971304,
              "p5": 0.0,
              "p95": 0.7410257612409016,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1548631342319141,
              "median": 0.02626725325810239,
              "min": 0.013261761919797927,
              "max": 0.6666666666666666,
              "p5": 0.015036277236869575,
              "p95": 0.5797619047619046,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.834297361413503,
              "median": 1.875,
              "min": 1.0,
              "max": 16.4,
              "p5": 1.1484407484407484,
              "p95": 11.896666666666658,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.268791610433604e-07,
              "median": 4.0428760489677053e-07,
              "min": 0.0,
              "max": 1.855230614885314e-06,
              "p5": 1.0283928995640608e-08,
              "p95": 1.708362231337786e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001864886625577592,
              "median": 0.00015512004267593613,
              "min": 0.0,
              "max": 0.0073461238829004155,
              "p5": 0.0,
              "p95": 0.0064961712557681395,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.04545454545454519,
            "market": 0.027998545530102392,
            "sector": -0.029371271274008737,
            "peers": -0.05315204644342364,
            "vs_market": 0.0174559999244428,
            "vs_sector": 0.07482581672855393,
            "vs_peers": 0.09860659189796883
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 69.0 vs peer median 56.8 (+12.2 pts).",
        "market_comparison": "Return 0.0% vs peers -1.2%."
      },
      "1w": {
        "liquidity": "Liquidity is still good for the stock’s size, but it has pulled back as 1W average volume sits 24.6% below the 1M average.",
        "market_comparison": "The stock was broadly flat over the week while peers fell 1.2%, which helps explain why trading conditions still screen better than the recent slowdown alone would suggest."
      },
      "2w": {
        "liquidity": "Tradability remains sound over two weeks, though the recent drop in activity suggests access is less robust than the monthly profile.",
        "market_comparison": "The stock fell 2.1% over two weeks compared with a 2.0% drop for peers, indicating liquidity is being tested in a tape that is moving much like the group."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong, with a liquidity score of 71.0 compared with a peer median of 52.5, which places the stock in a better access tier than most peers.",
        "market_comparison": "The stock rose 4.5% over the month while peers fell 5.3%, giving liquidity a firmer return backdrop than the sector group."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 47,
      "reporting_window_days": 47,
      "available_history_days": 47,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.4517160124662019,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "45.2%",
          "display_range": null,
          "display_text": "45.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
          "kind": "share_pct",
          "value_pct": 45.2,
          "plain_english": "Market explains about 45.2% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.500827478286867,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "50.1%",
          "display_range": null,
          "display_text": "50.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
          "kind": "share_pct",
          "value_pct": 50.1,
          "plain_english": "Sector explains about 50.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.04745650924693098,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.7%",
          "display_range": null,
          "display_text": "4.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
          "kind": "share_pct",
          "value_pct": 4.7,
          "plain_english": "Company-specific explains about 4.7% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.211683987569504,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.21",
          "display_range": null,
          "display_text": "1.21",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.21% stock move in the same direction in this state.",
          "value_num": 1.21
        },
        "beta_stock_lag": {
          "median": -0.11416178144568766,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.11",
          "display_range": null,
          "display_text": "-0.11",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
          "kind": "lag_beta",
          "value_num": -0.11
        },
        "beta_sector": {
          "median": 0.011517204589449574,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.01",
          "display_range": null,
          "display_text": "0.01",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.01% stock move in the same direction in this state.",
          "value_num": 0.01
        },
        "beta_market_lag": {
          "median": -0.477371484728696,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.48",
          "display_range": null,
          "display_text": "-0.48",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
          "kind": "lag_beta",
          "value_num": -0.48
        },
        "beta_sector_lag": {
          "median": 1.5450266604957885,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.55",
          "display_range": null,
          "display_text": "1.55",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
          "kind": "lag_beta",
          "value_num": 1.55
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 47 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-26 to 2026-01-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47931948471963925,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.9%",
            "display_range": null,
            "display_text": "47.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 47.9,
            "plain_english": "Market explains about 47.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47931948471963925,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2984396411024003,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.8%",
              "display_range": null,
              "display_text": "29.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 29.8,
              "plain_english": "Sector explains about 29.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.22224087417796046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.2%",
              "display_range": null,
              "display_text": "22.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 22.2,
              "plain_english": "Company-specific explains about 22.2% of price moves in the current state."
            }
          },
          "summary": "Jan: Mostly market-driven, though based on only 5 trading days."
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 18,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5656898926629687,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.6%",
            "display_range": null,
            "display_text": "56.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 56.6,
            "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2647931795787311,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.5%",
              "display_range": null,
              "display_text": "26.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 26.5,
              "plain_english": "Market explains about 26.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1695169277583002,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.0%",
              "display_range": null,
              "display_text": "17.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 17.0,
              "plain_english": "Sector explains about 17.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5656898926629687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
            }
          },
          "summary": "Feb: Mostly company-driven."
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
            "median": 0.5379214653603349,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.8%",
            "display_range": null,
            "display_text": "53.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 53.8,
            "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22982068067655406,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.0%",
              "display_range": null,
              "display_text": "23.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.0,
              "plain_english": "Market explains about 23.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.23225785396311108,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.2%",
              "display_range": null,
              "display_text": "23.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.2,
              "plain_english": "Sector explains about 23.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5379214653603349,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5111111111111111,
          "expected_duration_days": 7.666666666666667,
          "current_probability": 1.0,
          "n_days_effective": 23.0,
          "volatility": {
            "median": 0.029772617425338887,
            "low": 0.029772617425338887,
            "high": 0.029772617425338887
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4888888888888889,
          "expected_duration_days": 11.0,
          "current_probability": 0.0,
          "n_days_effective": 22.0,
          "volatility": {
            "median": 0.04300354637129311,
            "low": 0.04300354637129311,
            "high": 0.04300354637129311
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9090909090909091,
            0.09090909090909091
          ],
          [
            0.09090909090909091,
            0.9090909090909091
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            20.0,
            2.0
          ],
          [
            2.0,
            20.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 47,
        "reporting_window_days": 47,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "1.21",
        "sector_link_display": "0.01",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.21% stock move in the same direction in this state. This is a point estimate from 47 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.01% stock move in the same direction in this state. This is a point estimate from 47 trading days.",
        "stock_persistence_display": "-0.11",
        "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
        "history_limited_note": "Read is based on 47 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 50.1,
        "driver_share_display": "50.1%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 47 trading days relative to the 252-day target.",
        "history_days": 47,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9090909090909091,
        "effective_days": 23.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 7.7 days.",
        "expected_duration_days": 7.7
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
          "pct_time": 0.5111111111111111,
          "expected_duration_days": 7.666666666666667,
          "current_probability": 1.0,
          "n_days_effective": 23.0,
          "volatility": {
            "median": 0.029772617425338887,
            "low": 0.029772617425338887,
            "high": 0.029772617425338887
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4888888888888889,
          "expected_duration_days": 11.0,
          "current_probability": 0.0,
          "n_days_effective": 22.0,
          "volatility": {
            "median": 0.04300354637129311,
            "low": 0.04300354637129311,
            "high": 0.04300354637129311
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9090909090909091,
          0.09090909090909091
        ],
        [
          0.09090909090909091,
          0.9090909090909091
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9090909090909091,
            0.09090909090909091
          ],
          [
            0.09090909090909091,
            0.9090909090909091
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            20.0,
            2.0
          ],
          [
            2.0,
            20.0
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
        "text": "Liquidity score: 71.0 — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "perf": {
        "text": "Performance is mixed",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "short": {
        "text": "Low short interest",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
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
    "liq_subtitle": "Monthly liquidity still screens well relative to peers, but recent average volume has dropped from that stronger baseline.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The return backdrop is firm, with the stock up 4.5% over one month compared with peers at -5.3% and the market at +2.8%.",
    "perf_insight": "Recent performance is ahead of the main comparison groups, with a 1M return of +4.5% compared with peers at -5.3% and the market at +2.8%. That matters because the stock is trading against a stronger price backdrop even as recent average volume has dropped from the monthly average.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence now, accounting for 50.1% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 50.1% of price changes. Other influences are market 45.2%, and company-specific 4.7%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 45.2%, sector 50.1%, and company-specific 4.7%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to company-driven over Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 45.2%, sector 50.1%, and company-specific 4.7%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader sector moves are still shaping trading, while recent average volume is running 24.6% below the monthly average.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves account for 50.1% of recent price action.",
      "Monthly change: the pattern was mostly sector through February and March, and is more sector-led now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look accessible at a monthly level, but the near-term book is less supportive on the bid side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Apr 2, 2026 (49 trading days • 9,901 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The immediate book looks less supportive than the monthly liquidity score suggests, because top-10 bid depth is only 0.42x ask depth even with a 1 tick spread. That matters because buy-side support looks thin if the stock comes under pressure.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 13.8% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity is the key near-term watchpoint, with the bid side notably thinner than the ask side.",
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
    "intraday_insight": "The order book is imbalanced to the sell side, with top-10 bid depth at 0.42x ask depth and spread at 1 tick. That matters because displayed liquidity can feel less reliable on down moves even though the spread remains tight.",
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
    "exec_subtitle": "Liquidity is strong for the stock’s size, but recent activity has dropped and the displayed book is thin on the bid side.",
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
        "value": "71.0/100",
        "sub": "Peer median 52.5 (+18.5 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$145.4K",
        "sub": "Peer median S$9.8K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.54%",
        "sub": "1.17 ticks; peers 2.63%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity remains strong for its size, with a 1M score of 71.0 versus a peer median of 52.5. Near-term trading has softened, with 1W average volume down 24.6% versus 1M. The displayed book also shows thin buy-side support, with top-10 bid depth at 0.42x ask depth and the spread at 1 tick. Sector moves remain a meaningful driver at 50.1%, while 1M return is +4.5% versus peers at -5.3% and the market at +2.8%.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.228",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.20%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.42x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-2.81% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-5.67% with 22.9% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-5.67% with 9.2% fill.",
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
        "value": "71",
        "suffix": "/100",
        "bar_pct": 71,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 163/558",
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
        "value": "2.54",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.54% • 1.17 ticks vs peers 2.63%",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Average Traded Volume",
          "body": "Average daily trading value in local currency for the selected window."
        },
        "value": "145.4K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$9.8K",
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
        "value": "50.1",
        "suffix": "sector",
        "bar_pct": 50,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 45.2% • Company 4.7%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for the stock’s size, with a 1M liquidity score of 71.0 compared with a peer median of 52.5. That keeps the name accessible relative to peers.",
      "Recent trading activity has pulled back, with 1W average volume down 24.6% from the 1M average. That matters because near-term access may feel weaker than the monthly score implies.",
      "The return backdrop is firm, but the displayed book is less supportive on the bid side. The stock is up 4.5% over one month compared with peers at -5.3%, yet top-10 bid depth is only 0.42x ask depth and sector moves still account for 50.1% of the tape."
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
      "overall": "1M liquidity is strong: score 71.0 vs peer median 52.5 (+18.5",
      "strengths": [
        "1M score 71.0 vs peer median 52.5 (+18.5 pts)."
      ],
      "concerns": [
        "1W average volume down -24.6% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +18.5 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is 4.5%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 4.5% vs market 2.8%.",
        "vs_sector": "Better than sector: 4.5% vs sector -2.9%.",
        "vs_peers": "Better than peers: 4.5% vs peers -5.3%."
      },
      "adv": {
        "insight": "ADV is S$145.4K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$145.4K vs market S$8.9K.",
        "vs_sector": "Better than sector: S$145.4K vs sector S$9.8K.",
        "vs_peers": "Better than peers: S$145.4K vs peers S$9.8K."
      },
      "spread": {
        "insight": "Spread is 2.54%, better than market, but worse than sector, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 2.54% vs market 3.63%.",
        "vs_sector": "Worse than sector: 2.54% vs secto%.",
        "vs_peers": "In line with peers: 2.54% vs peers 2.63%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.11%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.11% vs market 0.02%.",
        "vs_sector": "Better than sector: 0.11% vs sector 0.02%.",
        "vs_peers": "Better than peers: 0.11% vs peers 0.02%."
      },
      "volatility": {
        "insight": "Volatility is 43.79%, worse than sector and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "In line with market: 43.79% vs market 40.65%.",
        "vs_sector": "Worse than sector: 43.79% vs sector 32.88%.",
        "vs_peers": "Worse than peers: 43.79% vs peers 36.00%."
      },
      "trades": {
        "insight": "Trades is 46, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 46 vs market 5.",
        "vs_sector": "Better than sector: 46 vs sector 6.",
        "vs_peers": "Better than peers: 46 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 1.04e-07, better than market and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 1.04e-07 vs market 1.68e-07.",
        "vs_sector": "In line with sector: 1.04e-07 vs sector 1.04e-07.",
        "vs_peers": "Better than peers: 1.04e-07 vs peers 4.04e-07."
      }
    },
    "performance": {
      "overall": "Recent returns are strong relative to peers and the market, with the stock up 4.5% over one month compared with peers down 5.3% and the market up 2.8%. Liquidity partly confirms that move because the one-month liquidity score of 71.0 is well above the peer median of 52.5, but the confirmation is weaker in the near term as one-week average volume has dropped 24.6% from the monthly average. The move looks more sector-linked than company-specific, with sector factors explaining 50.1% of current trading.",
      "conclusion": "The move looks mainly sector-linked, with strong relative returns supported by solid structural liquidity but less fully backed by recent trading activity."
    },
    "drivers": {
      "overall": "Sector moves are the main force right now, accounting for 50.1% of recent price action, which means the stock is currently moving more with its group than on stock-specific news. That matters because the shares still carry a firm one-month return backdrop, up 4.5% while peers are down 5.3%, so sector strength is landing on a stronger tape than the peer group.",
      "beta": "The current pattern looks real but not fully settled, because sector influence is now the largest driver while one-week average volume is 24.6% below the monthly average. That combination points to a tape that is being steered by broader sector moves, but with less trading activity behind it than the monthly picture would suggest.",
      "rolling_change": "The monthly picture had been mostly sector through February and March, so the stock is now more sector-led than it was over the prior two months. That shift suggests the current pattern is more balanced than the earlier company-led phase, rather than a clean continuation of it."
    },
    "regime": {
      "overall": "Low volatility points to a steadier trading backdrop, and the roughly 7.7-day typical run length suggests this calmer state has some durability. That matters because price conditions look more orderly even as activity has pulled back from the monthly average.",
      "current": "The stock is currently in a Low Volatility state, which signals a calmer tape than a higher-volatility backdrop would imply.",
      "transitions": "This state looks fairly stable, with a typical run length of about 7.7 days, although the recent 24.6% drop in 1W average volume compared with 1M shows the backdrop is not fully settled.",
      "trading_implications": "Trading conditions may feel steadier on price moves while volume is lighter, so execution may be orderly but less resilient when activity thins out."
    },
    "execution": {
      "overall": "Displayed liquidity looks mixed in the near term, because the spread is still 1 tick but the book is not balanced. That matters because immediate access can feel less reliable than the broader liquidity profile implies.",
      "concern": "Trade-size percentiles use available history from Jan 22, 2026 to Apr 2, 2026 (49 trading days • 9,901 trades), not a full year.",
      "peer_context": "The broader standing still looks strong, with a 1M liquidity score of 71.0 compared with a peer median of 52.5, but the current book does not fully back that up. With 1W average volume down 24.6% from the 1M average, the stronger monthly ranking looks less representative of immediate trading conditions."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 37.9% of count and 50.5% of value, compared with retail-like trades at 27.9% of count and 6.9% of value. That gap shows larger value is coming from institution-like activity rather than from a high number of smaller retail trades.",
      "institutional_gap": "The read is mixed rather than absolute because 21.5% of trade count is ambiguous or unclear. That leaves the institution-like skew intact, but it reduces how cleanly the flow can be classified.",
      "peer_comparison": "The mix stands out as more institution-like than a retail-dominated tape because institution-like activity leads on both count and value. Relative to peers, the report tables provide the direct ranking context."
    },
    "price_moving": {
      "overall": "Price-moving activity is present but not dominant, with 13.8% of total trades moving price. That suggests most trading is being absorbed without constant repricing. The signal is mixed because 21.5% of trade count is ambiguous or unclear. That means the direction of price-setting flow is less clean than the headline trader mix. The clearer read is that institution-like flow leads on both count and value, while the price-moving split is less definitive.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low and does not appear to be driving trading conditions. With shorts covering significantly month on month and the stock up 4.5% over one month compared with peers down 5.3%, the bigger picture still points to price strength rather than short pressure.",
      "level": "Low short interest",
      "correlation": "Positive - unusual (shorts during up days?)",
      "trend": "Short positioning has fallen sharply, with shorts covering significantly month on month. That reduces the case for short selling as a separate source of pressure, so the current picture is better explained by lower recent volume than by elevated short activity.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.1%, continuous 97.8%, and close 0.8%. Current trading concentration score is 0.264.",
      "hhi_interpretation": "A concentration score of 0.264 indicates activity is not heavily concentrated into a narrow part of the day. That supports a more usable intraday profile rather than one reliant on brief bursts of turnover.",
      "best_times": "The best liquidity appears in the continuous session, which carries nearly all trading activity at 97.8%. By contrast, the open at 1.1% and the close at 0.8% contribute little to overall flow.",
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
        "TKU",
        "ITS",
        "NXR",
        "LVR",
        "U77",
        "532",
        "KUX",
        "S69",
        "S71"
      ],
      "scores": [
        70.96774193548387,
        82.61648745519713,
        41.03942652329749,
        53.76344086021505,
        51.25448028673835,
        3.046594982078853,
        8.60215053763441,
        68.99641577060932,
        68.63799283154121
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
        145406.0,
        510615.0,
        3550.0,
        10790.0,
        8753.5,
        0.0,
        0.0,
        97659.4,
        95472.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.4379487678280238,
        "adv": 145406.0,
        "spread_pct": 0.025405786873676804,
        "turnover_ratio": 0.0011086535645338392,
        "amihud": 1.0373766818469451e-07,
        "trades": 46.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6450386508604602,
          "median": 0.40652426849656087,
          "min": 0.0,
          "max": 10.424621821966237,
          "p5": 0.0,
          "p95": 2.002191103403035,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3401378.0466548093,
          "median": 8892.0,
          "min": 0.0,
          "max": 278393500.0,
          "p5": 0.0,
          "p95": 14115266.000000002,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.11015762052077444,
          "median": 0.036315604015351305,
          "min": 0.0002854442826014152,
          "max": 1.3716475095785439,
          "p5": 0.0037518628589434623,
          "p95": 0.4924799276263712,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.007420125077540505,
          "median": 0.0002144937479553005,
          "min": 0.0,
          "max": 2.831059257794476,
          "p5": 0.0,
          "p95": 0.009711780348739272,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.0005327125826500479,
          "median": 1.6797283667611684e-07,
          "min": 0.0,
          "max": 0.25,
          "p5": 0.0,
          "p95": 0.00013363806468858605,
          "count": 542
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 494.9623655913978,
          "median": 5.0,
          "min": 0.0,
          "max": 11430.0,
          "p5": 0.0,
          "p95": 3002.299999999994,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.27773262655611447,
          "median": 0.32878469111803765,
          "min": 0.0,
          "max": 0.4435207580228546,
          "p5": 0.0,
          "p95": 0.44157056145466383,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1849033.5625000002,
          "median": 9771.75,
          "min": 0.0,
          "max": 14113154.000000002,
          "p5": 0.0,
          "p95": 9352265.349999994,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15164744746149253,
          "median": 0.0225389590106089,
          "min": 0.001403225479155513,
          "max": 0.6666666666666666,
          "p5": 0.0055537132333803585,
          "p95": 0.5797619047619046,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002258229600774466,
          "median": 0.00015512004267593613,
          "min": 0.0,
          "max": 0.009210949347200346,
          "p5": 0.0,
          "p95": 0.00855826043469537,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.316056505650463e-07,
          "median": 1.0373766818469451e-07,
          "min": 0.0,
          "max": 1.855230614885314e-06,
          "p5": 3.6048836377019974e-10,
          "p95": 1.708362231337786e-06,
          "count": 7
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 479.0,
          "median": 6.5,
          "min": 0.0,
          "max": 3474.0,
          "p5": 0.0,
          "p95": 2362.3999999999983,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 90854.9875,
          "median": 9771.75,
          "min": 0.0,
          "max": 510615.0,
          "p5": 0.0,
          "p95": 366080.5399999998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 47.5,
          "median": 6.5,
          "min": 0.0,
          "max": 298.0,
          "p5": 0.0,
          "p95": 207.34999999999985,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3686812125363679,
          "median": 0.3600041006034894,
          "min": 0.0,
          "max": 0.7514531395971304,
          "p5": 0.0,
          "p95": 0.7410257612409016,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1548631342319141,
          "median": 0.02626725325810239,
          "min": 0.013261761919797927,
          "max": 0.6666666666666666,
          "p5": 0.015036277236869575,
          "p95": 0.5797619047619046,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.834297361413503,
          "median": 1.875,
          "min": 1.0,
          "max": 16.4,
          "p5": 1.1484407484407484,
          "p95": 11.896666666666658,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.268791610433604e-07,
          "median": 4.0428760489677053e-07,
          "min": 0.0,
          "max": 1.855230614885314e-06,
          "p5": 1.0283928995640608e-08,
          "p95": 1.708362231337786e-06,
          "count": 7
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.001864886625577592,
          "median": 0.00015512004267593613,
          "min": 0.0,
          "max": 0.0073461238829004155,
          "p5": 0.0,
          "p95": 0.0064961712557681395,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -1.1102230246251565e-16,
        "market": 0.012222416247857915,
        "sector": 0.005050505050505194,
        "peers": -0.012409006372074316
      },
      {
        "horizon": "2W",
        "stock": -0.021276595744680993,
        "market": -0.004048196987024522,
        "sector": 0.009463859573717981,
        "peers": -0.02012528788853518
      },
      {
        "horizon": "1M",
        "stock": 0.04545454545454519,
        "market": 0.027998545530102392,
        "sector": -0.029371271274008737,
        "peers": -0.05315204644342364
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
      "share_market": 0.4517160124662019,
      "share_sector": 0.500827478286867,
      "share_idio": 0.04745650924693098,
      "beta_market": 1.211683987569504,
      "beta_sector": 0.011517204589449574,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 47,
        "reporting_window_days": 47,
        "available_history_days": 47,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.4517160124662019,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.2%",
            "display_range": null,
            "display_text": "45.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
            "kind": "share_pct",
            "value_pct": 45.2,
            "plain_english": "Market explains about 45.2% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.500827478286867,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.1%",
            "display_range": null,
            "display_text": "50.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
            "kind": "share_pct",
            "value_pct": 50.1,
            "plain_english": "Sector explains about 50.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.04745650924693098,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.7%",
            "display_range": null,
            "display_text": "4.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
            "kind": "share_pct",
            "value_pct": 4.7,
            "plain_english": "Company-specific explains about 4.7% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.211683987569504,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.21",
            "display_range": null,
            "display_text": "1.21",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.21% stock move in the same direction in this state.",
            "value_num": 1.21
          },
          "beta_stock_lag": {
            "median": -0.11416178144568766,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.11",
            "display_range": null,
            "display_text": "-0.11",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
            "kind": "lag_beta",
            "value_num": -0.11
          },
          "beta_sector": {
            "median": 0.011517204589449574,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.01",
            "display_range": null,
            "display_text": "0.01",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.01% stock move in the same direction in this state.",
            "value_num": 0.01
          },
          "beta_market_lag": {
            "median": -0.477371484728696,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.48",
            "display_range": null,
            "display_text": "-0.48",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
            "kind": "lag_beta",
            "value_num": -0.48
          },
          "beta_sector_lag": {
            "median": 1.5450266604957885,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.55",
            "display_range": null,
            "display_text": "1.55",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
            "kind": "lag_beta",
            "value_num": 1.55
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 47 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2026-01",
            "month_label": "January 2026",
            "month_short_label": "Jan",
            "period_label": "2026-01-26 to 2026-01-30",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47931948471963925,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47931948471963925,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.9%",
                "display_range": null,
                "display_text": "47.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 47.9,
                "plain_english": "Market explains about 47.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2984396411024003,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.8%",
                "display_range": null,
                "display_text": "29.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 29.8,
                "plain_english": "Sector explains about 29.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.22224087417796046,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.2%",
                "display_range": null,
                "display_text": "22.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 22.2,
                "plain_english": "Company-specific explains about 22.2% of price moves in the current state."
              }
            },
            "summary": "Jan: Mostly market-driven, though based on only 5 trading days."
          },
          {
            "month_key": "2026-02",
            "month_label": "February 2026",
            "month_short_label": "Feb",
            "period_label": "2026-02-02 to 2026-02-27",
            "n_obs": 18,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5656898926629687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2647931795787311,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.5%",
                "display_range": null,
                "display_text": "26.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 26.5,
                "plain_english": "Market explains about 26.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1695169277583002,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.0%",
                "display_range": null,
                "display_text": "17.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 17.0,
                "plain_english": "Sector explains about 17.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5656898926629687,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.6%",
                "display_range": null,
                "display_text": "56.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 56.6,
                "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
              }
            },
            "summary": "Feb: Mostly company-driven."
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
              "median": 0.5379214653603349,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22982068067655406,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.0%",
                "display_range": null,
                "display_text": "23.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.0,
                "plain_english": "Market explains about 23.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.23225785396311108,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.2%",
                "display_range": null,
                "display_text": "23.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.2,
                "plain_english": "Sector explains about 23.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5379214653603349,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.8%",
                "display_range": null,
                "display_text": "53.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 53.8,
                "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5111111111111111,
            "expected_duration_days": 7.666666666666667,
            "current_probability": 1.0,
            "n_days_effective": 23.0,
            "volatility": {
              "median": 0.029772617425338887,
              "low": 0.029772617425338887,
              "high": 0.029772617425338887
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4888888888888889,
            "expected_duration_days": 11.0,
            "current_probability": 0.0,
            "n_days_effective": 22.0,
            "volatility": {
              "median": 0.04300354637129311,
              "low": 0.04300354637129311,
              "high": 0.04300354637129311
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9090909090909091,
              0.09090909090909091
            ],
            [
              0.09090909090909091,
              0.9090909090909091
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              20.0,
              2.0
            ],
            [
              2.0,
              20.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 47,
          "reporting_window_days": 47,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "1.21",
          "sector_link_display": "0.01",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.21% stock move in the same direction in this state. This is a point estimate from 47 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.01% stock move in the same direction in this state. This is a point estimate from 47 trading days.",
          "stock_persistence_display": "-0.11",
          "point_estimate_note": "Point estimate only because the current state has 47 trading days.",
          "history_limited_note": "Read is based on 47 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 50.1,
          "driver_share_display": "50.1%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 47 trading days relative to the 252-day target.",
          "history_days": 47,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9090909090909091,
          "effective_days": 23.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 7.7 days.",
          "expected_duration_days": 7.7
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
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-26 to 2026-01-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jan: Mostly market-driven, though based on only 5 trading days.",
          "share_market": 0.47931948471963925,
          "share_sector": 0.2984396411024003,
          "share_company": 0.22224087417796046,
          "share_market_display": "47.9%",
          "share_sector_display": "29.8%",
          "share_company_display": "22.2%",
          "dominant_share_display": "47.9%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 18,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Feb: Mostly company-driven.",
          "share_market": 0.2647931795787311,
          "share_sector": 0.1695169277583002,
          "share_company": 0.5656898926629687,
          "share_market_display": "26.5%",
          "share_sector_display": "17.0%",
          "share_company_display": "56.6%",
          "dominant_share_display": "56.6%"
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
          "summary": "Mar: Mostly company-driven.",
          "share_market": 0.22982068067655406,
          "share_sector": 0.23225785396311108,
          "share_company": 0.5379214653603349,
          "share_market_display": "23.0%",
          "share_sector_display": "23.2%",
          "share_company_display": "53.8%",
          "dominant_share_display": "53.8%"
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
          0.5111111111111111,
          0.4888888888888889
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5111111111111111,
            "expected_duration_days": 7.666666666666667,
            "current_probability": 1.0,
            "n_days_effective": 23.0,
            "volatility": {
              "median": 0.029772617425338887,
              "low": 0.029772617425338887,
              "high": 0.029772617425338887
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4888888888888889,
            "expected_duration_days": 11.0,
            "current_probability": 0.0,
            "n_days_effective": 22.0,
            "volatility": {
              "median": 0.04300354637129311,
              "low": 0.04300354637129311,
              "high": 0.04300354637129311
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9090909090909091,
            0.09090909090909091
          ],
          [
            0.09090909090909091,
            0.9090909090909091
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.225,
          "quantity": 99400.0,
          "value": 22365.0
        },
        {
          "level": 2,
          "price": 0.22,
          "quantity": 353000.0,
          "value": 77660.0
        },
        {
          "level": 3,
          "price": 0.215,
          "quantity": 286300.0,
          "value": 61554.5
        },
        {
          "level": 4,
          "price": 0.21,
          "quantity": 162800.0,
          "value": 34188.0
        },
        {
          "level": 5,
          "price": 0.205,
          "quantity": 25000.0,
          "value": 5125.0
        },
        {
          "level": 6,
          "price": 0.2,
          "quantity": 130000.0,
          "value": 26000.0
        },
        {
          "level": 7,
          "price": 0.199,
          "quantity": 10000.0,
          "value": 1990.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.23,
          "quantity": 179000.0,
          "value": 41170.0
        },
        {
          "level": 2,
          "price": 0.235,
          "quantity": 351200.0,
          "value": 82532.0
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 140700.0,
          "value": 33768.0
        },
        {
          "level": 4,
          "price": 0.245,
          "quantity": 94100.0,
          "value": 23054.5
        },
        {
          "level": 5,
          "price": 0.25,
          "quantity": 126400.0,
          "value": 31600.0
        },
        {
          "level": 6,
          "price": 0.255,
          "quantity": 400000.0,
          "value": 102000.0
        },
        {
          "level": 7,
          "price": 0.26,
          "quantity": 339500.0,
          "value": 88270.0
        },
        {
          "level": 8,
          "price": 0.265,
          "quantity": 300500.0,
          "value": 79632.5
        },
        {
          "level": 9,
          "price": 0.27,
          "quantity": 89000.0,
          "value": 24030.0
        },
        {
          "level": 10,
          "price": 0.275,
          "quantity": 134000.0,
          "value": 36850.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-02 08:59:59.414800",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2275,
        "spread_pct": 0.021978021978021997,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 228882.5,
        "ask_depth_notional_top10": 542907.0,
        "bid_ask_depth_ratio": 0.4216
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 71,
        "history_limited": true,
        "trade_days_used": 49,
        "n_trades_used": 9901,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-04-02",
        "window_label": "Jan 22, 2026 to Apr 2, 2026",
        "window_short_label": "Jan 22-Apr 2",
        "trade_days_label": "49 trading days",
        "trade_count_label": "9,901 trades",
        "window_detail_label": "49 trading days • 9,901 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Apr 2, 2026 (49 trading days • 9,901 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9646.0,
            "impact_pct": -0.010989,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 4.21,
            "pct_of_adv": 6.71
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13750.0,
            "impact_pct": -0.010989,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 6.01,
            "pct_of_adv": 9.56
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 104606.64,
            "impact_pct": -0.029344000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 45.7,
            "pct_of_adv": 72.75
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-02",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8123765301325001728",
            "timestamp": "2026-04-01 22:59:01.020300000",
            "local_timestamp": "2026-04-02 06:59:01",
            "posted_price": 0.3,
            "size_shares": 140000.0,
            "notional": 42000.0,
            "impact_pct": -0.021387,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 18.35,
            "price_vs_mid_pct": 31.868,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8126536070628204544",
            "timestamp": "2026-04-01 22:59:01.020300000",
            "local_timestamp": "2026-04-02 06:59:01",
            "posted_price": 0.365,
            "size_shares": 100000.0,
            "notional": 36500.0,
            "impact_pct": -0.019618,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 15.95,
            "price_vs_mid_pct": 60.44,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8123765301323656192",
            "timestamp": "2026-04-01 22:59:01.020300000",
            "local_timestamp": "2026-04-02 06:59:01",
            "posted_price": 0.255,
            "size_shares": 140000.0,
            "notional": 35700.0,
            "impact_pct": -0.019314,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 15.6,
            "price_vs_mid_pct": 12.088,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-02",
        "bucket_minutes": 30,
        "tick_size": 0.005,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 265669.5,
            "ask_depth_notional": 531137.0,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 259194.0,
            "ask_depth_notional": 515870.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 233219.0,
            "ask_depth_notional": 541860.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 233219.0,
            "ask_depth_notional": 539560.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 244219.0,
            "ask_depth_notional": 539560.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 237491.5,
            "ask_depth_notional": 543010.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 242441.5,
            "ask_depth_notional": 542145.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 237491.5,
            "ask_depth_notional": 542145.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 240371.5,
            "ask_depth_notional": 542145.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 239741.5,
            "ask_depth_notional": 541915.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 239741.5,
            "ask_depth_notional": 554415.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 239741.5,
            "ask_depth_notional": 552915.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 228882.5,
            "ask_depth_notional": 542907.0,
            "mid_price": 0.2275
          }
        ],
        "summary": {
          "median_spread_pct": 0.021978021978021997,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 239741.5,
          "median_ask_depth_notional": 542145.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "09:00",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 34.8,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 198.7
        },
        {
          "ticker": "S69",
          "pct": 1014.5
        },
        {
          "ticker": "S71",
          "pct": 1020.6
        },
        {
          "ticker": "LVR",
          "pct": 10026.3
        },
        {
          "ticker": "U77",
          "pct": 13742.4
        },
        {
          "ticker": "NXR",
          "pct": 55187.6
        },
        {
          "ticker": "532",
          "pct": null
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "30d",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 34,
          "n_runs": 16,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-02",
          "last_trade_date": "2026-04-02",
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
            "retail_pct": 0.29411764705882354,
            "mixed_pct": 0.0,
            "instit_pct": 0.38235294117647056,
            "ambiguous_pct": 0.3235294117647059,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3235294117647059,
            "retail_qty_pct": 0.06974248927038626,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6113733905579399,
            "ambiguous_qty_pct": 0.31888412017167383,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.31888412017167383,
            "retail_notional_pct": 0.0705702239913324,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6101891325340933,
            "ambiguous_notional_pct": 0.31924064347457426,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.31924064347457426
          },
          "run_composition": {
            "retail_pct": 0.5625,
            "mixed_pct": 0.0,
            "instit_pct": 0.25,
            "ambiguous_pct": 0.1875,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1875,
            "retail_notional_pct": 0.0705702239913324,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6101891325340933,
            "unclear_notional_pct": 0.31924064347457426
          },
          "counts": {
            "trades": {
              "retail": 10,
              "mixed": 0,
              "institutional": 13,
              "ambiguous": 11,
              "unobservable": 0,
              "unclear": 11
            },
            "runs": {
              "retail": 9,
              "mixed": 0,
              "institutional": 4,
              "ambiguous": 3,
              "unobservable": 0,
              "unclear": 3
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.8125,
            "na": 0.1875
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 13,
            "na": 3
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.6764705882352942,
            "na": 0.3235294117647059
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 23,
            "na": 11
          },
          "observability": {
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1875,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5625,
          "dominance_gap": 0.3125,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 25,
              "SINGLE_FILL": 9
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 30,
              "PERSISTENT_POSITIVE_IMPACT": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 16
            },
            "participant_confidence": {
              "LOW": 13,
              "NA": 3
            }
          },
          "trade_size": {
            "avg": 3121.8382352941176,
            "median": 1460.5
          },
          "run_size": {
            "avg": 6633.90625,
            "median": 1886.0,
            "avg_length": 1.0625
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-02T07:24:18.492300",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1540,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-02T02:56:08.736100",
              "price": 0.23,
              "size": 7000.0,
              "notional": 1610.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-02T02:56:08.736100",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-02T01:57:38.563900",
              "price": 0.23,
              "size": 6400.0,
              "notional": 1472.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1538,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 15600.0,
              "notional": 3510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 25000.0,
              "notional": 5625.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 16000.0,
              "notional": 3600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 50000.0,
              "notional": 11250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 50000.0,
              "notional": 11250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-02T01:51:43.051700",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-02T01:51:43.051700",
              "price": 0.23,
              "size": 6300.0,
              "notional": 1449.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-02T01:51:43.021600",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-02T01:51:43.021600",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-02T01:38:03.314700",
              "price": 0.235,
              "size": 2700.0,
              "notional": 634.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1534,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-02T01:38:03.284500",
              "price": 0.23,
              "size": 48000.0,
              "notional": 11040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1533,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-02T01:25:16.107000",
              "price": 0.23,
              "size": 900.0,
              "notional": 207.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1532,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-02T01:25:01.094900",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1531,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 800.0,
              "notional": 184.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 10200.0,
              "notional": 2346.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-04-02T01:20:44.283700",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1529,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-04-02T01:15:00.742000",
              "price": 0.235,
              "size": 400.0,
              "notional": 94.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1528,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-04-02T01:14:59.925600",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1527,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-04-02T01:02:38.717400",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1526,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.29411764705882354,
              "mixed_pct": 0.0,
              "instit_pct": 0.38235294117647056,
              "ambiguous_pct": 0.3235294117647059,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3235294117647059,
              "retail_qty_pct": 0.06974248927038626,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.6113733905579399,
              "ambiguous_qty_pct": 0.31888412017167383,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.31888412017167383,
              "retail_notional_pct": 0.0705702239913324,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.6101891325340933,
              "ambiguous_notional_pct": 0.31924064347457426,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.31924064347457426,
              "run_retail_pct": 0.5625,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.25,
              "run_unclear_pct": 0.1875,
              "avg_trade_size": 3121.8382352941176,
              "avg_run_notional": 6633.90625,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.8125,
              "na_confidence_pct": 0.1875,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.16666666666666666,
              "mixed_pct": 0.0,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.3333333333333333,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3333333333333333,
              "retail_qty_pct": 0.0196078431372549,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.6862745098039216,
              "ambiguous_qty_pct": 0.29411764705882354,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.29411764705882354,
              "retail_notional_pct": 0.019807353140686473,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.6857956857956858,
              "ambiguous_notional_pct": 0.2943969610636277,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2943969610636277,
              "run_retail_pct": 0.2,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.4,
              "run_unclear_pct": 0.4,
              "avg_trade_size": 614.25,
              "avg_run_notional": 737.1,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6,
              "na_confidence_pct": 0.4,
              "avg_feature_coverage": 0.85,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23741007194244604,
              "mixed_pct": 0.1510791366906475,
              "instit_pct": 0.460431654676259,
              "ambiguous_pct": 0.1510791366906475,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1510791366906475,
              "retail_qty_pct": 0.07136563876651983,
              "mixed_qty_pct": 0.053744493392070485,
              "instit_qty_pct": 0.6321585903083701,
              "ambiguous_qty_pct": 0.24273127753303964,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24273127753303964,
              "retail_notional_pct": 0.07147592654185539,
              "mixed_notional_pct": 0.05392392122022487,
              "instit_notional_pct": 0.6327807081965164,
              "ambiguous_notional_pct": 0.24181944404140335,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24181944404140335,
              "run_retail_pct": 0.5423728813559322,
              "run_mixed_pct": 0.11864406779661017,
              "run_instit_pct": 0.22033898305084745,
              "run_unclear_pct": 0.11864406779661017,
              "avg_trade_size": 1611.4496402877699,
              "avg_run_notional": 3796.4661016949153,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.4067796610169492,
              "low_confidence_pct": 0.3559322033898305,
              "na_confidence_pct": 0.23728813559322035,
              "avg_feature_coverage": 0.8830508474576272,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.11764705882352941,
              "mixed_pct": 0.058823529411764705,
              "instit_pct": 0.35294117647058826,
              "ambiguous_pct": 0.47058823529411764,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.47058823529411764,
              "retail_qty_pct": 0.010067114093959731,
              "mixed_qty_pct": 0.05704697986577181,
              "instit_qty_pct": 0.5805369127516778,
              "ambiguous_qty_pct": 0.3523489932885906,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3523489932885906,
              "retail_notional_pct": 0.01040187310482478,
              "mixed_notional_pct": 0.05611637815222815,
              "instit_notional_pct": 0.5752120677081334,
              "ambiguous_notional_pct": 0.35826968103481366,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.35826968103481366,
              "run_retail_pct": 0.15384615384615385,
              "run_mixed_pct": 0.07692307692307693,
              "run_instit_pct": 0.23076923076923078,
              "run_unclear_pct": 0.5384615384615384,
              "avg_trade_size": 766.2647058823529,
              "avg_run_notional": 1002.0384615384615,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.38461538461538464,
              "na_confidence_pct": 0.6153846153846154,
              "avg_feature_coverage": 0.8384615384615385,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4166666666666667,
              "mixed_pct": 0.08333333333333333,
              "instit_pct": 0.16666666666666666,
              "ambiguous_pct": 0.3333333333333333,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3333333333333333,
              "retail_qty_pct": 0.13980582524271845,
              "mixed_qty_pct": 0.12815533980582525,
              "instit_qty_pct": 0.37281553398058254,
              "ambiguous_qty_pct": 0.3592233009708738,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3592233009708738,
              "retail_notional_pct": 0.13972323321201455,
              "mixed_notional_pct": 0.12868455785305763,
              "instit_notional_pct": 0.37243530776306843,
              "ambiguous_notional_pct": 0.35915690117185933,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.35915690117185933,
              "run_retail_pct": 0.2857142857142857,
              "run_mixed_pct": 0.14285714285714285,
              "run_instit_pct": 0.14285714285714285,
              "run_unclear_pct": 0.42857142857142855,
              "avg_trade_size": 833.4333333333334,
              "avg_run_notional": 1428.742857142857,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.42857142857142855,
              "na_confidence_pct": 0.5714285714285714,
              "avg_feature_coverage": 0.8285714285714286,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2857142857142857,
              "mixed_pct": 0.11428571428571428,
              "instit_pct": 0.08571428571428572,
              "ambiguous_pct": 0.5142857142857142,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5142857142857142,
              "retail_qty_pct": 0.010787486515641856,
              "mixed_qty_pct": 0.2588996763754045,
              "instit_qty_pct": 0.24271844660194175,
              "ambiguous_qty_pct": 0.48759439050701187,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.48759439050701187,
              "retail_notional_pct": 0.010635791097210918,
              "mixed_notional_pct": 0.25526434171629325,
              "instit_notional_pct": 0.24581209031318282,
              "ambiguous_notional_pct": 0.4882877768733131,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4882877768733131,
              "run_retail_pct": 0.5263157894736842,
              "run_mixed_pct": 0.15789473684210525,
              "run_instit_pct": 0.05263157894736842,
              "run_unclear_pct": 0.2631578947368421,
              "avg_trade_size": 533.5085714285714,
              "avg_run_notional": 982.778947368421,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5789473684210527,
              "na_confidence_pct": 0.42105263157894735,
              "avg_feature_coverage": 0.8105263157894737,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.13513513513513514,
              "mixed_pct": 0.08108108108108109,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.21621621621621623,
              "unobservable_pct": 0.5675675675675675,
              "unclear_pct": 0.7837837837837838,
              "retail_qty_pct": 0.06439994854864298,
              "mixed_qty_pct": 0.1282710914833712,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.17865054524146406,
              "unobservable_qty_pct": 0.6286784147265218,
              "unclear_qty_pct": 0.8073289599679858,
              "retail_notional_pct": 0.06441331999428326,
              "mixed_notional_pct": 0.12826925825353724,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.17864799199656997,
              "unobservable_notional_pct": 0.6286694297556096,
              "unclear_notional_pct": 0.8073174217521796,
              "run_retail_pct": 0.22727272727272727,
              "run_mixed_pct": 0.13636363636363635,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.6363636363636364,
              "avg_trade_size": 378.2162162162162,
              "avg_run_notional": 636.0909090909091,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.22727272727272727,
              "na_confidence_pct": 0.7727272727272727,
              "avg_feature_coverage": 0.7272727272727273,
              "observable_run_pct": 0.5909090909090908,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 190,
          "n_runs": 97,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-27",
          "last_trade_date": "2026-04-02",
          "period_days": 5,
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
            "retail_pct": 0.26842105263157895,
            "mixed_pct": 0.07894736842105263,
            "instit_pct": 0.4473684210526316,
            "ambiguous_pct": 0.20526315789473684,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20526315789473684,
            "retail_qty_pct": 0.09330070357907617,
            "mixed_qty_pct": 0.10591924135821353,
            "instit_qty_pct": 0.5474151116549404,
            "ambiguous_qty_pct": 0.25336494340776994,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25336494340776994,
            "retail_notional_pct": 0.09306040795793055,
            "mixed_notional_pct": 0.10566744707037345,
            "instit_notional_pct": 0.5478661160375906,
            "ambiguous_notional_pct": 0.25340602893410535,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25340602893410535
          },
          "run_composition": {
            "retail_pct": 0.44329896907216493,
            "mixed_pct": 0.10309278350515463,
            "instit_pct": 0.23711340206185566,
            "ambiguous_pct": 0.21649484536082475,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21649484536082475,
            "retail_notional_pct": 0.09306040795793055,
            "mixed_notional_pct": 0.10566744707037345,
            "instit_notional_pct": 0.5478661160375906,
            "unclear_notional_pct": 0.25340602893410535
          },
          "counts": {
            "trades": {
              "retail": 51,
              "mixed": 15,
              "institutional": 85,
              "ambiguous": 39,
              "unobservable": 0,
              "unclear": 39
            },
            "runs": {
              "retail": 43,
              "mixed": 10,
              "institutional": 23,
              "ambiguous": 21,
              "unobservable": 0,
              "unclear": 21
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.6804123711340206,
            "na": 0.31958762886597936
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 66,
            "na": 31
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.7157894736842105,
            "na": 0.28421052631578947
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 136,
            "na": 54
          },
          "observability": {
            "avg_feature_coverage": 0.8561855670103091,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.21649484536082475,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.44329896907216493,
          "dominance_gap": 0.20618556701030927,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 116,
              "SINGLE_FILL": 74
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 146,
              "PERSISTENT_POSITIVE_IMPACT": 41,
              "MOMENTUM_REACTIVE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 97
            },
            "participant_confidence": {
              "LOW": 66,
              "NA": 31
            }
          },
          "trade_size": {
            "avg": 3128.1605263157894,
            "median": 2288.5
          },
          "run_size": {
            "avg": 6127.3247422680415,
            "median": 4400.0,
            "avg_length": 1.1649484536082475
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-02T07:24:18.492300",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1540,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-02T02:56:08.736100",
              "price": 0.23,
              "size": 7000.0,
              "notional": 1610.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-02T02:56:08.736100",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-02T01:57:38.563900",
              "price": 0.23,
              "size": 6400.0,
              "notional": 1472.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1538,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 15600.0,
              "notional": 3510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 25000.0,
              "notional": 5625.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 16000.0,
              "notional": 3600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 50000.0,
              "notional": 11250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 50000.0,
              "notional": 11250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-02T01:51:43.051700",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-02T01:51:43.051700",
              "price": 0.23,
              "size": 6300.0,
              "notional": 1449.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-02T01:51:43.021600",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-02T01:51:43.021600",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-02T01:38:03.314700",
              "price": 0.235,
              "size": 2700.0,
              "notional": 634.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1534,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-02T01:38:03.284500",
              "price": 0.23,
              "size": 48000.0,
              "notional": 11040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1533,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-02T01:25:16.107000",
              "price": 0.23,
              "size": 900.0,
              "notional": 207.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1532,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-02T01:25:01.094900",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1531,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 800.0,
              "notional": 184.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 10200.0,
              "notional": 2346.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-04-02T01:20:44.283700",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1529,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-04-02T01:15:00.742000",
              "price": 0.235,
              "size": 400.0,
              "notional": 94.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1528,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-04-02T01:14:59.925600",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1527,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-04-02T01:02:38.717400",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1526,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.26842105263157895,
              "mixed_pct": 0.07894736842105263,
              "instit_pct": 0.4473684210526316,
              "ambiguous_pct": 0.20526315789473684,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.20526315789473684,
              "retail_qty_pct": 0.09330070357907617,
              "mixed_qty_pct": 0.10591924135821353,
              "instit_qty_pct": 0.5474151116549404,
              "ambiguous_qty_pct": 0.25336494340776994,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.25336494340776994,
              "retail_notional_pct": 0.09306040795793055,
              "mixed_notional_pct": 0.10566744707037345,
              "instit_notional_pct": 0.5478661160375906,
              "ambiguous_notional_pct": 0.25340602893410535,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.25340602893410535,
              "run_retail_pct": 0.44329896907216493,
              "run_mixed_pct": 0.10309278350515463,
              "run_instit_pct": 0.23711340206185566,
              "run_unclear_pct": 0.21649484536082475,
              "avg_trade_size": 3128.1605263157894,
              "avg_run_notional": 6127.3247422680415,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6804123711340206,
              "na_confidence_pct": 0.31958762886597936,
              "avg_feature_coverage": 0.8561855670103091,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.16666666666666666,
              "mixed_pct": 0.0,
              "instit_pct": 0.6666666666666666,
              "ambiguous_pct": 0.16666666666666666,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.16666666666666666,
              "retail_qty_pct": 0.0014970059880239522,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7889221556886228,
              "ambiguous_qty_pct": 0.20958083832335328,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.20958083832335328,
              "retail_notional_pct": 0.0015202702702702704,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7856418918918919,
              "ambiguous_notional_pct": 0.21283783783783783,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.21283783783783783,
              "run_retail_pct": 0.2,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.6,
              "run_unclear_pct": 0.2,
              "avg_trade_size": 3946.6666666666665,
              "avg_run_notional": 4736.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.8,
              "na_confidence_pct": 0.2,
              "avg_feature_coverage": 0.85,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.29318448883666276,
              "mixed_pct": 0.20681551116333724,
              "instit_pct": 0.31668625146886015,
              "ambiguous_pct": 0.18331374853113983,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.18331374853113983,
              "retail_qty_pct": 0.06456541668485616,
              "mixed_qty_pct": 0.11088313615925263,
              "instit_qty_pct": 0.5711354607761819,
              "ambiguous_qty_pct": 0.25341598637970925,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.25341598637970925,
              "retail_notional_pct": 0.06461937403536912,
              "mixed_notional_pct": 0.1113370618532579,
              "instit_notional_pct": 0.571241574069125,
              "ambiguous_notional_pct": 0.252801990042248,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.252801990042248,
              "run_retail_pct": 0.6069142125480154,
              "run_mixed_pct": 0.17157490396927016,
              "run_instit_pct": 0.11011523687580026,
              "run_unclear_pct": 0.11139564660691421,
              "avg_trade_size": 1324.5737367802585,
              "avg_run_notional": 2886.5870678617157,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.10115236875800256,
              "medium_confidence_pct": 0.40973111395646605,
              "low_confidence_pct": 0.20614596670934698,
              "na_confidence_pct": 0.28297055057618437,
              "avg_feature_coverage": 0.8757362355953903,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.21374045801526717,
              "mixed_pct": 0.022900763358778626,
              "instit_pct": 0.31297709923664124,
              "ambiguous_pct": 0.45038167938931295,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.45038167938931295,
              "retail_qty_pct": 0.04172856178257934,
              "mixed_qty_pct": 0.007832545577312626,
              "instit_qty_pct": 0.513166779203241,
              "ambiguous_qty_pct": 0.437272113436867,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.437272113436867,
              "retail_notional_pct": 0.0415361621139203,
              "mixed_notional_pct": 0.007662070141428789,
              "instit_notional_pct": 0.5110960231889757,
              "ambiguous_notional_pct": 0.4397057445556752,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4397057445556752,
              "run_retail_pct": 0.3176470588235294,
              "run_mixed_pct": 0.023529411764705882,
              "run_instit_pct": 0.2,
              "run_unclear_pct": 0.4588235294117647,
              "avg_trade_size": 2484.7290076335876,
              "avg_run_notional": 3829.4058823529413,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.023529411764705882,
              "medium_confidence_pct": 0.15294117647058825,
              "low_confidence_pct": 0.3411764705882353,
              "na_confidence_pct": 0.4823529411764706,
              "avg_feature_coverage": 0.8199999999999997,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2,
              "mixed_pct": 0.08571428571428572,
              "instit_pct": 0.37142857142857144,
              "ambiguous_pct": 0.22857142857142856,
              "unobservable_pct": 0.11428571428571428,
              "unclear_pct": 0.34285714285714286,
              "retail_qty_pct": 0.09036144578313253,
              "mixed_qty_pct": 0.25421686746987954,
              "instit_qty_pct": 0.42168674698795183,
              "ambiguous_qty_pct": 0.18795180722891566,
              "unobservable_qty_pct": 0.04578313253012048,
              "unclear_qty_pct": 0.23373493975903614,
              "retail_notional_pct": 0.08992013672067571,
              "mixed_notional_pct": 0.2565813257961679,
              "instit_notional_pct": 0.4204735925329477,
              "ambiguous_notional_pct": 0.1872761034607421,
              "unobservable_notional_pct": 0.04574884148946659,
              "unclear_notional_pct": 0.2330249449502087,
              "run_retail_pct": 0.2692307692307692,
              "run_mixed_pct": 0.11538461538461539,
              "run_instit_pct": 0.2692307692307692,
              "run_unclear_pct": 0.34615384615384615,
              "avg_trade_size": 1738.6857142857143,
              "avg_run_notional": 2340.5384615384614,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5384615384615384,
              "na_confidence_pct": 0.46153846153846156,
              "avg_feature_coverage": 0.8000000000000002,
              "observable_run_pct": 0.9230769230769231,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2692307692307692,
              "mixed_pct": 0.15384615384615385,
              "instit_pct": 0.23076923076923078,
              "ambiguous_pct": 0.34615384615384615,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.34615384615384615,
              "retail_qty_pct": 0.12089447938504543,
              "mixed_qty_pct": 0.1893780573025856,
              "instit_qty_pct": 0.36477987421383645,
              "ambiguous_qty_pct": 0.3249475890985325,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3249475890985325,
              "retail_notional_pct": 0.12107709363806925,
              "mixed_notional_pct": 0.1913838194325999,
              "instit_notional_pct": 0.3645318096537608,
              "ambiguous_notional_pct": 0.32300727727557,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.32300727727557,
              "run_retail_pct": 0.26666666666666666,
              "run_mixed_pct": 0.26666666666666666,
              "run_instit_pct": 0.13333333333333333,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 1082.4,
              "avg_run_notional": 1876.16,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4,
              "na_confidence_pct": 0.6,
              "avg_feature_coverage": 0.8199999999999998,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.26875,
              "mixed_pct": 0.06875,
              "instit_pct": 0.1125,
              "ambiguous_pct": 0.525,
              "unobservable_pct": 0.025,
              "unclear_pct": 0.55,
              "retail_qty_pct": 0.06931446262715613,
              "mixed_qty_pct": 0.041999115435647945,
              "instit_qty_pct": 0.11518796992481203,
              "ambiguous_qty_pct": 0.7406457319770013,
              "unobservable_qty_pct": 0.032852720035382574,
              "unclear_qty_pct": 0.7734984520123839,
              "retail_notional_pct": 0.06837197339287555,
              "mixed_notional_pct": 0.041526590124509696,
              "instit_notional_pct": 0.11586022461213517,
              "ambiguous_notional_pct": 0.7407507955586273,
              "unobservable_notional_pct": 0.033490416311852234,
              "unclear_notional_pct": 0.7742412118704796,
              "run_retail_pct": 0.43617021276595747,
              "run_mixed_pct": 0.07446808510638298,
              "run_instit_pct": 0.05319148936170213,
              "run_unclear_pct": 0.4361702127659574,
              "avg_trade_size": 2408.095625,
              "avg_run_notional": 4098.886170212766,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0851063829787234,
              "low_confidence_pct": 0.40425531914893614,
              "na_confidence_pct": 0.5106382978723404,
              "avg_feature_coverage": 0.8106382978723402,
              "observable_run_pct": 0.9787234042553191,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.13513513513513514,
              "mixed_pct": 0.08108108108108109,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.21621621621621623,
              "unobservable_pct": 0.5675675675675675,
              "unclear_pct": 0.7837837837837838,
              "retail_qty_pct": 0.06439994854864298,
              "mixed_qty_pct": 0.1282710914833712,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.17865054524146406,
              "unobservable_qty_pct": 0.6286784147265218,
              "unclear_qty_pct": 0.8073289599679858,
              "retail_notional_pct": 0.06441331999428326,
              "mixed_notional_pct": 0.12826925825353724,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.17864799199656997,
              "unobservable_notional_pct": 0.6286694297556096,
              "unclear_notional_pct": 0.8073174217521796,
              "run_retail_pct": 0.22727272727272727,
              "run_mixed_pct": 0.13636363636363635,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.6363636363636364,
              "avg_trade_size": 378.2162162162162,
              "avg_run_notional": 636.0909090909091,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.22727272727272727,
              "na_confidence_pct": 0.7727272727272727,
              "avg_feature_coverage": 0.7272727272727273,
              "observable_run_pct": 0.5909090909090908,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "2w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 383,
          "n_runs": 205,
          "n_trade_days": 10,
          "first_trade_date": "2026-03-20",
          "last_trade_date": "2026-04-02",
          "period_days": 10,
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
            "retail_pct": 0.2741514360313316,
            "mixed_pct": 0.0731070496083551,
            "instit_pct": 0.4386422976501306,
            "ambiguous_pct": 0.21409921671018275,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21409921671018275,
            "retail_qty_pct": 0.0802895384786271,
            "mixed_qty_pct": 0.09609937612233185,
            "instit_qty_pct": 0.5605272414239961,
            "ambiguous_qty_pct": 0.2630838439750449,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2630838439750449,
            "retail_notional_pct": 0.08021673617241484,
            "mixed_notional_pct": 0.09641634450498716,
            "instit_notional_pct": 0.5597438941483263,
            "ambiguous_notional_pct": 0.2636230251742717,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2636230251742717
          },
          "run_composition": {
            "retail_pct": 0.4682926829268293,
            "mixed_pct": 0.08780487804878048,
            "instit_pct": 0.21951219512195122,
            "ambiguous_pct": 0.22439024390243903,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22439024390243903,
            "retail_notional_pct": 0.08021673617241484,
            "mixed_notional_pct": 0.09641634450498716,
            "instit_notional_pct": 0.5597438941483263,
            "unclear_notional_pct": 0.2636230251742717
          },
          "counts": {
            "trades": {
              "retail": 105,
              "mixed": 28,
              "institutional": 168,
              "ambiguous": 82,
              "unobservable": 0,
              "unclear": 82
            },
            "runs": {
              "retail": 96,
              "mixed": 18,
              "institutional": 45,
              "ambiguous": 46,
              "unobservable": 0,
              "unclear": 46
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.6878048780487804,
            "na": 0.3121951219512195
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 141,
            "na": 64
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.7127937336814621,
            "na": 0.28720626631853785
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 273,
            "na": 110
          },
          "observability": {
            "avg_feature_coverage": 0.8573170731707315,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.22439024390243903,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4682926829268293,
          "dominance_gap": 0.24390243902439027,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 193,
              "SINGLE_FILL": 190
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 309,
              "PERSISTENT_POSITIVE_IMPACT": 71,
              "MOMENTUM_REACTIVE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 205
            },
            "participant_confidence": {
              "LOW": 141,
              "NA": 64
            }
          },
          "trade_size": {
            "avg": 3216.481723237598,
            "median": 2250.0
          },
          "run_size": {
            "avg": 6009.329268292683,
            "median": 2925.0,
            "avg_length": 1.248780487804878
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-02T07:24:18.492300",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1540,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-02T02:56:08.736100",
              "price": 0.23,
              "size": 7000.0,
              "notional": 1610.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-02T02:56:08.736100",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-02T01:57:38.563900",
              "price": 0.23,
              "size": 6400.0,
              "notional": 1472.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1538,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 15600.0,
              "notional": 3510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 25000.0,
              "notional": 5625.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 16000.0,
              "notional": 3600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 50000.0,
              "notional": 11250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 50000.0,
              "notional": 11250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-02T01:51:43.051700",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-02T01:51:43.051700",
              "price": 0.23,
              "size": 6300.0,
              "notional": 1449.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-02T01:51:43.021600",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-02T01:51:43.021600",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-02T01:38:03.314700",
              "price": 0.235,
              "size": 2700.0,
              "notional": 634.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1534,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-02T01:38:03.284500",
              "price": 0.23,
              "size": 48000.0,
              "notional": 11040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1533,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-02T01:25:16.107000",
              "price": 0.23,
              "size": 900.0,
              "notional": 207.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1532,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-02T01:25:01.094900",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1531,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 800.0,
              "notional": 184.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 10200.0,
              "notional": 2346.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-04-02T01:20:44.283700",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1529,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-04-02T01:15:00.742000",
              "price": 0.235,
              "size": 400.0,
              "notional": 94.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1528,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-04-02T01:14:59.925600",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1527,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-04-02T01:02:38.717400",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1526,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2741514360313316,
              "mixed_pct": 0.0731070496083551,
              "instit_pct": 0.4386422976501306,
              "ambiguous_pct": 0.21409921671018275,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.21409921671018275,
              "retail_qty_pct": 0.0802895384786271,
              "mixed_qty_pct": 0.09609937612233185,
              "instit_qty_pct": 0.5605272414239961,
              "ambiguous_qty_pct": 0.2630838439750449,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2630838439750449,
              "retail_notional_pct": 0.08021673617241484,
              "mixed_notional_pct": 0.09641634450498716,
              "instit_notional_pct": 0.5597438941483263,
              "ambiguous_notional_pct": 0.2636230251742717,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2636230251742717,
              "run_retail_pct": 0.4682926829268293,
              "run_mixed_pct": 0.08780487804878048,
              "run_instit_pct": 0.21951219512195122,
              "run_unclear_pct": 0.22439024390243903,
              "avg_trade_size": 3216.481723237598,
              "avg_run_notional": 6009.329268292683,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6878048780487804,
              "na_confidence_pct": 0.3121951219512195,
              "avg_feature_coverage": 0.8573170731707315,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.13333333333333333,
              "mixed_pct": 0.06666666666666667,
              "instit_pct": 0.4666666666666667,
              "ambiguous_pct": 0.3333333333333333,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3333333333333333,
              "retail_qty_pct": 0.0006174225415356983,
              "mixed_qty_pct": 0.0033116299955096543,
              "instit_qty_pct": 0.9501010327795241,
              "ambiguous_qty_pct": 0.045969914683430625,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.045969914683430625,
              "retail_notional_pct": 0.0005952693593851218,
              "mixed_notional_pct": 0.003053990626410625,
              "instit_notional_pct": 0.9510668795021051,
              "ambiguous_notional_pct": 0.045283860512099115,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.045283860512099115,
              "run_retail_pct": 0.14285714285714285,
              "run_mixed_pct": 0.07142857142857142,
              "run_instit_pct": 0.42857142857142855,
              "run_unclear_pct": 0.35714285714285715,
              "avg_trade_size": 43789.7,
              "avg_run_notional": 46917.53571428572,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5714285714285714,
              "na_confidence_pct": 0.42857142857142855,
              "avg_feature_coverage": 0.8392857142857142,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.26627981947130885,
              "mixed_pct": 0.18375241779497098,
              "instit_pct": 0.36363636363636365,
              "ambiguous_pct": 0.18633139909735655,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.18633139909735655,
              "retail_qty_pct": 0.06548428454873927,
              "mixed_qty_pct": 0.11301915381327945,
              "instit_qty_pct": 0.5852014452775943,
              "ambiguous_qty_pct": 0.23629511636038697,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.23629511636038697,
              "retail_notional_pct": 0.06572104354164103,
              "mixed_notional_pct": 0.11327487918590146,
              "instit_notional_pct": 0.5851428453761174,
              "ambiguous_notional_pct": 0.23586123189634012,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.23586123189634012,
              "run_retail_pct": 0.5743740795287187,
              "run_mixed_pct": 0.15905743740795286,
              "run_instit_pct": 0.12960235640648013,
              "run_unclear_pct": 0.13696612665684832,
              "avg_trade_size": 1659.4717923920052,
              "avg_run_notional": 3790.634388807069,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.11119293078055964,
              "medium_confidence_pct": 0.4167893961708395,
              "low_confidence_pct": 0.17599410898379972,
              "na_confidence_pct": 0.2960235640648012,
              "avg_feature_coverage": 0.8692194403534609,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2528925619834711,
              "mixed_pct": 0.10909090909090909,
              "instit_pct": 0.3140495867768595,
              "ambiguous_pct": 0.3239669421487603,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3239669421487603,
              "retail_qty_pct": 0.04688898168585575,
              "mixed_qty_pct": 0.027918630316769076,
              "instit_qty_pct": 0.5499015689315755,
              "ambiguous_qty_pct": 0.3752908190657997,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3752908190657997,
              "retail_notional_pct": 0.04637686024627741,
              "mixed_notional_pct": 0.02749097633249898,
              "instit_notional_pct": 0.5528652985520869,
              "ambiguous_notional_pct": 0.37326686486913674,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.37326686486913674,
              "run_retail_pct": 0.423728813559322,
              "run_mixed_pct": 0.07909604519774012,
              "run_instit_pct": 0.19491525423728814,
              "run_unclear_pct": 0.3022598870056497,
              "avg_trade_size": 2363.390082644628,
              "avg_run_notional": 4039.1271186440677,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.005649717514124294,
              "medium_confidence_pct": 0.2937853107344633,
              "low_confidence_pct": 0.3192090395480226,
              "na_confidence_pct": 0.3813559322033898,
              "avg_feature_coverage": 0.8419491525423728,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.17307692307692307,
              "mixed_pct": 0.11538461538461539,
              "instit_pct": 0.3269230769230769,
              "ambiguous_pct": 0.38461538461538464,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.38461538461538464,
              "retail_qty_pct": 0.06350148367952523,
              "mixed_qty_pct": 0.12492581602373887,
              "instit_qty_pct": 0.4685459940652819,
              "ambiguous_qty_pct": 0.343026706231454,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.343026706231454,
              "retail_notional_pct": 0.06321947424330834,
              "mixed_notional_pct": 0.12517019016413064,
              "instit_notional_pct": 0.46977572302766435,
              "ambiguous_notional_pct": 0.3418346125648967,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3418346125648967,
              "run_retail_pct": 0.20689655172413793,
              "run_mixed_pct": 0.20689655172413793,
              "run_instit_pct": 0.20689655172413793,
              "run_unclear_pct": 0.3793103448275862,
              "avg_trade_size": 1285.326923076923,
              "avg_run_notional": 2304.7241379310344,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.41379310344827586,
              "na_confidence_pct": 0.5862068965517241,
              "avg_feature_coverage": 0.8293103448275865,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.22666666666666666,
              "mixed_pct": 0.04,
              "instit_pct": 0.36,
              "ambiguous_pct": 0.32,
              "unobservable_pct": 0.05333333333333334,
              "unclear_pct": 0.37333333333333335,
              "retail_qty_pct": 0.09834938101788171,
              "mixed_qty_pct": 0.1451169188445667,
              "instit_qty_pct": 0.4408528198074278,
              "ambiguous_qty_pct": 0.2895460797799175,
              "unobservable_qty_pct": 0.026134800550206328,
              "unclear_qty_pct": 0.3156808803301238,
              "retail_notional_pct": 0.09820557064148884,
              "mixed_notional_pct": 0.144461046681069,
              "instit_notional_pct": 0.4403360333812896,
              "ambiguous_notional_pct": 0.2912397244748322,
              "unobservable_notional_pct": 0.025757624821320355,
              "unclear_notional_pct": 0.3169973492961526,
              "run_retail_pct": 0.3090909090909091,
              "run_mixed_pct": 0.05454545454545454,
              "run_instit_pct": 0.2727272727272727,
              "run_unclear_pct": 0.36363636363636365,
              "avg_trade_size": 1441.1266666666668,
              "avg_run_notional": 1965.1727272727273,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5818181818181818,
              "na_confidence_pct": 0.41818181818181815,
              "avg_feature_coverage": 0.8154545454545457,
              "observable_run_pct": 0.9636363636363636,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2851153039832285,
              "mixed_pct": 0.09014675052410902,
              "instit_pct": 0.16142557651991615,
              "ambiguous_pct": 0.44654088050314467,
              "unobservable_pct": 0.016771488469601678,
              "unclear_pct": 0.46331236897274636,
              "retail_qty_pct": 0.06972313944627889,
              "mixed_qty_pct": 0.06006364953906378,
              "instit_qty_pct": 0.22290038697724454,
              "ambiguous_qty_pct": 0.6323641470812353,
              "unobservable_qty_pct": 0.014948676956177442,
              "unclear_qty_pct": 0.6473128240374127,
              "retail_notional_pct": 0.06868654885204818,
              "mixed_notional_pct": 0.06137188214567698,
              "instit_notional_pct": 0.22438385766697833,
              "ambiguous_notional_pct": 0.6306065998566567,
              "unobservable_notional_pct": 0.014951111478639841,
              "unclear_notional_pct": 0.6455577113352965,
              "run_retail_pct": 0.4980544747081712,
              "run_mixed_pct": 0.07003891050583658,
              "run_instit_pct": 0.07392996108949416,
              "run_unclear_pct": 0.35797665369649806,
              "avg_trade_size": 1957.1545073375262,
              "avg_run_notional": 3632.539688715953,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1245136186770428,
              "medium_confidence_pct": 0.14007782101167315,
              "low_confidence_pct": 0.30739299610894943,
              "na_confidence_pct": 0.4280155642023346,
              "avg_feature_coverage": 0.8260700389105058,
              "observable_run_pct": 0.9844357976653697,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1282051282051282,
              "mixed_pct": 0.07692307692307693,
              "instit_pct": 0.02564102564102564,
              "ambiguous_pct": 0.20512820512820512,
              "unobservable_pct": 0.5641025641025641,
              "unclear_pct": 0.7692307692307692,
              "retail_qty_pct": 0.060104442473272464,
              "mixed_qty_pct": 0.11971535090936981,
              "instit_qty_pct": 0.06669378880744836,
              "ambiguous_qty_pct": 0.1667344720186209,
              "unobservable_qty_pct": 0.5867519457912884,
              "unclear_qty_pct": 0.7534864178099093,
              "retail_notional_pct": 0.06011697934520911,
              "mixed_notional_pct": 0.11971375407660347,
              "instit_notional_pct": 0.06669289920702143,
              "ambiguous_notional_pct": 0.16673224801755357,
              "unobservable_notional_pct": 0.5867441193536125,
              "unclear_notional_pct": 0.7534763673711661,
              "run_retail_pct": 0.20833333333333334,
              "run_mixed_pct": 0.125,
              "run_instit_pct": 0.041666666666666664,
              "run_unclear_pct": 0.625,
              "avg_trade_size": 384.4641025641026,
              "avg_run_notional": 624.7541666666667,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.25,
              "na_confidence_pct": 0.75,
              "avg_feature_coverage": 0.71875,
              "observable_run_pct": 0.5833333333333333,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "30d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 1156,
          "n_runs": 610,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-05",
          "last_trade_date": "2026-04-02",
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
            "retail_pct": 0.27941176470588236,
            "mixed_pct": 0.12716262975778547,
            "instit_pct": 0.3788927335640138,
            "ambiguous_pct": 0.21453287197231835,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21453287197231835,
            "retail_qty_pct": 0.0692805627054716,
            "mixed_qty_pct": 0.15012487576135988,
            "instit_qty_pct": 0.5031091516093682,
            "ambiguous_qty_pct": 0.2774854099238003,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2774854099238003,
            "retail_notional_pct": 0.0689600108498542,
            "mixed_notional_pct": 0.1516640362332631,
            "instit_notional_pct": 0.5046851518870216,
            "ambiguous_notional_pct": 0.27469080102986115,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.27469080102986115
          },
          "run_composition": {
            "retail_pct": 0.5,
            "mixed_pct": 0.12459016393442623,
            "instit_pct": 0.19508196721311474,
            "ambiguous_pct": 0.18032786885245902,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18032786885245902,
            "retail_notional_pct": 0.0689600108498542,
            "mixed_notional_pct": 0.1516640362332631,
            "instit_notional_pct": 0.5046851518870216,
            "unclear_notional_pct": 0.27469080102986115
          },
          "counts": {
            "trades": {
              "retail": 323,
              "mixed": 147,
              "institutional": 438,
              "ambiguous": 248,
              "unobservable": 0,
              "unclear": 248
            },
            "runs": {
              "retail": 305,
              "mixed": 76,
              "institutional": 119,
              "ambiguous": 110,
              "unobservable": 0,
              "unclear": 110
            }
          },
          "confidence": {
            "high": 0.04426229508196721,
            "medium": 0.1819672131147541,
            "low": 0.46885245901639344,
            "na": 0.30491803278688523
          },
          "confidence_counts": {
            "high": 27,
            "medium": 111,
            "low": 286,
            "na": 186
          },
          "trade_confidence": {
            "high": 0.023356401384083045,
            "medium": 0.12975778546712802,
            "low": 0.5051903114186851,
            "na": 0.3416955017301038
          },
          "trade_confidence_counts": {
            "high": 27,
            "medium": 150,
            "low": 584,
            "na": 395
          },
          "observability": {
            "avg_feature_coverage": 0.8593442622950819,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.18032786885245902,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5,
          "dominance_gap": 0.30491803278688523,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 593,
              "SINGLE_FILL": 561,
              "WALK_BOOK": 2
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 898,
              "PERSISTENT_POSITIVE_IMPACT": 188,
              "MOMENTUM_REACTIVE": 68,
              "UNOBSERVABLE": 2
            },
            "d3_urgency": {
              "IMMEDIATE": 608,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "LOW": 286,
              "NA": 186,
              "MEDIUM": 111,
              "HIGH": 27
            }
          },
          "trade_size": {
            "avg": 3163.6608996539794,
            "median": 1278.75
          },
          "run_size": {
            "avg": 5995.396721311476,
            "median": 2200.0,
            "avg_length": 1.2360655737704918
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-02T07:24:18.492300",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1540,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-02T02:56:08.736100",
              "price": 0.23,
              "size": 7000.0,
              "notional": 1610.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-02T02:56:08.736100",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-02T01:57:38.563900",
              "price": 0.23,
              "size": 6400.0,
              "notional": 1472.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1538,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 15600.0,
              "notional": 3510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 25000.0,
              "notional": 5625.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-02T01:55:49.470800",
              "price": 0.225,
              "size": 16000.0,
              "notional": 3600.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1537,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 50000.0,
              "notional": 11250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 50000.0,
              "notional": 11250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-02T01:55:23.705500",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-02T01:51:43.051700",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-02T01:51:43.051700",
              "price": 0.23,
              "size": 6300.0,
              "notional": 1449.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-02T01:51:43.021600",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-02T01:51:43.021600",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1535,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-02T01:38:03.314700",
              "price": 0.235,
              "size": 2700.0,
              "notional": 634.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1534,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-02T01:38:03.284500",
              "price": 0.23,
              "size": 48000.0,
              "notional": 11040.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1533,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-02T01:25:16.107000",
              "price": 0.23,
              "size": 900.0,
              "notional": 207.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1532,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-02T01:25:01.094900",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1531,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 800.0,
              "notional": 184.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 10200.0,
              "notional": 2346.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 3000.0,
              "notional": 690.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-02T01:21:35.184200",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1530,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-04-02T01:20:44.283700",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1529,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-04-02T01:15:00.742000",
              "price": 0.235,
              "size": 400.0,
              "notional": 94.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1528,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-04-02T01:14:59.925600",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1527,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-04-02T01:02:38.717400",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1526,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.27941176470588236,
              "mixed_pct": 0.12716262975778547,
              "instit_pct": 0.3788927335640138,
              "ambiguous_pct": 0.21453287197231835,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.21453287197231835,
              "retail_qty_pct": 0.0692805627054716,
              "mixed_qty_pct": 0.15012487576135988,
              "instit_qty_pct": 0.5031091516093682,
              "ambiguous_qty_pct": 0.2774854099238003,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2774854099238003,
              "retail_notional_pct": 0.0689600108498542,
              "mixed_notional_pct": 0.1516640362332631,
              "instit_notional_pct": 0.5046851518870216,
              "ambiguous_notional_pct": 0.27469080102986115,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.27469080102986115,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.12459016393442623,
              "run_instit_pct": 0.19508196721311474,
              "run_unclear_pct": 0.18032786885245902,
              "avg_trade_size": 3163.6608996539794,
              "avg_run_notional": 5995.396721311476,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.04426229508196721,
              "medium_confidence_pct": 0.1819672131147541,
              "low_confidence_pct": 0.46885245901639344,
              "na_confidence_pct": 0.30491803278688523,
              "avg_feature_coverage": 0.8593442622950819,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.07317073170731707,
              "mixed_pct": 0.07317073170731707,
              "instit_pct": 0.4634146341463415,
              "ambiguous_pct": 0.3902439024390244,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3902439024390244,
              "retail_qty_pct": 0.002340966921119593,
              "mixed_qty_pct": 0.008091603053435115,
              "instit_qty_pct": 0.9148600508905852,
              "ambiguous_qty_pct": 0.07470737913486004,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07470737913486004,
              "retail_notional_pct": 0.002393266640327197,
              "mixed_notional_pct": 0.00804776346238297,
              "instit_notional_pct": 0.9144171428650093,
              "ambiguous_notional_pct": 0.07514182703228053,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07514182703228053,
              "run_retail_pct": 0.09375,
              "run_mixed_pct": 0.0625,
              "run_instit_pct": 0.40625,
              "run_unclear_pct": 0.4375,
              "avg_trade_size": 17717.39024390244,
              "avg_run_notional": 22700.40625,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.83125,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.31143552311435524,
              "mixed_pct": 0.18264395782643958,
              "instit_pct": 0.3320356853203569,
              "ambiguous_pct": 0.1711273317112733,
              "unobservable_pct": 0.00275750202757502,
              "unclear_pct": 0.17388483373884833,
              "retail_qty_pct": 0.06683513674371408,
              "mixed_qty_pct": 0.1333775648593535,
              "instit_qty_pct": 0.5597857372842493,
              "ambiguous_qty_pct": 0.23565971646290892,
              "unobservable_qty_pct": 0.004341844649774126,
              "unclear_qty_pct": 0.24000156111268306,
              "retail_notional_pct": 0.06707040742096922,
              "mixed_notional_pct": 0.1342361663002264,
              "instit_notional_pct": 0.5593564265301681,
              "ambiguous_notional_pct": 0.2349623323407518,
              "unobservable_notional_pct": 0.004374667407884502,
              "unclear_notional_pct": 0.23933699974863631,
              "run_retail_pct": 0.6211512717536813,
              "run_mixed_pct": 0.15127175368139223,
              "run_instit_pct": 0.11546184738955824,
              "run_unclear_pct": 0.11211512717536813,
              "avg_trade_size": 1692.6324412003244,
              "avg_run_notional": 3492.328982597055,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.21586345381526104,
              "medium_confidence_pct": 0.3852074966532798,
              "low_confidence_pct": 0.1355421686746988,
              "na_confidence_pct": 0.2633868808567604,
              "avg_feature_coverage": 0.866850736278447,
              "observable_run_pct": 0.999330655957162,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24078091106290672,
              "mixed_pct": 0.09436008676789588,
              "instit_pct": 0.3004338394793926,
              "ambiguous_pct": 0.3633405639913232,
              "unobservable_pct": 0.0010845986984815619,
              "unclear_pct": 0.36442516268980474,
              "retail_qty_pct": 0.05960992583096786,
              "mixed_qty_pct": 0.03333028110978848,
              "instit_qty_pct": 0.4981778225437231,
              "ambiguous_qty_pct": 0.40760003662668254,
              "unobservable_qty_pct": 0.0012819338888380185,
              "unclear_qty_pct": 0.40888197051552055,
              "retail_notional_pct": 0.056050368621891146,
              "mixed_notional_pct": 0.031465484518066876,
              "instit_notional_pct": 0.5041526726659031,
              "ambiguous_notional_pct": 0.4073370870091116,
              "unobservable_notional_pct": 0.000994387185027277,
              "unclear_notional_pct": 0.40833147419413884,
              "run_retail_pct": 0.40264650283553877,
              "run_mixed_pct": 0.07372400756143667,
              "run_instit_pct": 0.1890359168241966,
              "run_unclear_pct": 0.334593572778828,
              "avg_trade_size": 2328.688720173536,
              "avg_run_notional": 4058.697542533081,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.003780718336483932,
              "medium_confidence_pct": 0.24574669187145556,
              "low_confidence_pct": 0.34215500945179583,
              "na_confidence_pct": 0.40831758034026466,
              "avg_feature_coverage": 0.8372400756143666,
              "observable_run_pct": 0.998109640831758,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6132075471698113,
              "mixed_pct": 0.1391509433962264,
              "instit_pct": 0.12735849056603774,
              "ambiguous_pct": 0.12028301886792453,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12028301886792453,
              "retail_qty_pct": 0.11211855318319197,
              "mixed_qty_pct": 0.10119918104708979,
              "instit_qty_pct": 0.4167885346592571,
              "ambiguous_qty_pct": 0.36989373111046114,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.36989373111046114,
              "retail_notional_pct": 0.11331154743179477,
              "mixed_notional_pct": 0.10285751090586476,
              "instit_notional_pct": 0.41523837934588054,
              "ambiguous_notional_pct": 0.3685925623164599,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3685925623164599,
              "run_retail_pct": 0.7094972067039106,
              "run_mixed_pct": 0.1424581005586592,
              "run_instit_pct": 0.04748603351955307,
              "run_unclear_pct": 0.1005586592178771,
              "avg_trade_size": 487.01509433962264,
              "avg_run_notional": 576.8,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5502793296089385,
              "medium_confidence_pct": 0.13128491620111732,
              "low_confidence_pct": 0.07541899441340782,
              "na_confidence_pct": 0.2430167597765363,
              "avg_feature_coverage": 0.8445530726256981,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19148936170212766,
              "mixed_pct": 0.05851063829787234,
              "instit_pct": 0.2925531914893617,
              "ambiguous_pct": 0.425531914893617,
              "unobservable_pct": 0.031914893617021274,
              "unclear_pct": 0.4574468085106383,
              "retail_qty_pct": 0.08167380892361986,
              "mixed_qty_pct": 0.0783967733803882,
              "instit_qty_pct": 0.3952609024451727,
              "ambiguous_qty_pct": 0.42223342576254097,
              "unobservable_qty_pct": 0.022435089488278295,
              "unclear_qty_pct": 0.44466851525081924,
              "retail_notional_pct": 0.08115263553134038,
              "mixed_notional_pct": 0.07591033281671913,
              "instit_notional_pct": 0.39576749165162095,
              "ambiguous_notional_pct": 0.42450029558854074,
              "unobservable_notional_pct": 0.022669244411778804,
              "unclear_notional_pct": 0.44716954000031955,
              "run_retail_pct": 0.2647058823529412,
              "run_mixed_pct": 0.051470588235294115,
              "run_instit_pct": 0.21323529411764705,
              "run_unclear_pct": 0.47058823529411764,
              "avg_trade_size": 1664.5478723404256,
              "avg_run_notional": 2300.9926470588234,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.47794117647058826,
              "na_confidence_pct": 0.5220588235294118,
              "avg_feature_coverage": 0.8220588235294117,
              "observable_run_pct": 0.9779411764705882,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.27017841971113,
              "mixed_pct": 0.08326253186066271,
              "instit_pct": 0.205607476635514,
              "ambiguous_pct": 0.42480883602378927,
              "unobservable_pct": 0.016142735768903994,
              "unclear_pct": 0.4409515717926933,
              "retail_qty_pct": 0.09597430932514385,
              "mixed_qty_pct": 0.0652537129487915,
              "instit_qty_pct": 0.30204328037053085,
              "ambiguous_qty_pct": 0.5173078898126554,
              "unobservable_qty_pct": 0.019420807542878327,
              "unclear_qty_pct": 0.5367286973555337,
              "retail_notional_pct": 0.09637378973330858,
              "mixed_notional_pct": 0.06568110821210121,
              "instit_notional_pct": 0.30567971640759173,
              "ambiguous_notional_pct": 0.5135331656873329,
              "unobservable_notional_pct": 0.018732219959665643,
              "unclear_notional_pct": 0.5322653856469985,
              "run_retail_pct": 0.46360759493670883,
              "run_mixed_pct": 0.07436708860759493,
              "run_instit_pct": 0.09651898734177215,
              "run_unclear_pct": 0.36550632911392406,
              "avg_trade_size": 2429.5641461342398,
              "avg_run_notional": 4524.678797468355,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0680379746835443,
              "medium_confidence_pct": 0.18670886075949367,
              "low_confidence_pct": 0.30537974683544306,
              "na_confidence_pct": 0.439873417721519,
              "avg_feature_coverage": 0.8249208860759493,
              "observable_run_pct": 0.9873417721518988,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.11904761904761904,
              "mixed_pct": 0.07142857142857142,
              "instit_pct": 0.023809523809523808,
              "ambiguous_pct": 0.19047619047619047,
              "unobservable_pct": 0.5952380952380952,
              "unclear_pct": 0.7857142857142857,
              "retail_qty_pct": 0.05970623894420925,
              "mixed_qty_pct": 0.11892221360947137,
              "instit_qty_pct": 0.06625192958744923,
              "ambiguous_qty_pct": 0.16562982396862308,
              "unobservable_qty_pct": 0.589489793890247,
              "unclear_qty_pct": 0.7551196178588702,
              "retail_notional_pct": 0.059718698034331295,
              "mixed_notional_pct": 0.1189206378651261,
              "instit_notional_pct": 0.06625105173544629,
              "ambiguous_notional_pct": 0.16562762933861574,
              "unobservable_notional_pct": 0.5894819830264806,
              "unclear_notional_pct": 0.7551096123650963,
              "run_retail_pct": 0.2,
              "run_mixed_pct": 0.12,
              "run_instit_pct": 0.04,
              "run_unclear_pct": 0.64,
              "avg_trade_size": 359.3833333333333,
              "avg_run_notional": 603.764,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.24,
              "na_confidence_pct": 0.76,
              "avg_feature_coverage": 0.7120000000000002,
              "observable_run_pct": 0.56,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        }
      },
      "valid": true,
      "currency": "SGD",
      "n_trades": 1156,
      "n_runs": 610,
      "n_trade_days": 21,
      "first_trade_date": "2026-03-05",
      "last_trade_date": "2026-04-02",
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
        "retail_pct": 0.27941176470588236,
        "mixed_pct": 0.12716262975778547,
        "instit_pct": 0.3788927335640138,
        "ambiguous_pct": 0.21453287197231835,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.21453287197231835,
        "retail_qty_pct": 0.0692805627054716,
        "mixed_qty_pct": 0.15012487576135988,
        "instit_qty_pct": 0.5031091516093682,
        "ambiguous_qty_pct": 0.2774854099238003,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2774854099238003,
        "retail_notional_pct": 0.0689600108498542,
        "mixed_notional_pct": 0.1516640362332631,
        "instit_notional_pct": 0.5046851518870216,
        "ambiguous_notional_pct": 0.27469080102986115,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.27469080102986115
      },
      "run_composition": {
        "retail_pct": 0.5,
        "mixed_pct": 0.12459016393442623,
        "instit_pct": 0.19508196721311474,
        "ambiguous_pct": 0.18032786885245902,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.18032786885245902
      },
      "trade_size": {
        "avg": 3163.6608996539794,
        "median": 1278.75
      },
      "run_size": {
        "avg": 5995.396721311476,
        "median": 2200.0,
        "avg_length": 1.2360655737704918
      },
      "confidence": {
        "high": 0.04426229508196721,
        "medium": 0.1819672131147541,
        "low": 0.46885245901639344,
        "na": 0.30491803278688523
      },
      "confidence_counts": {
        "high": 27,
        "medium": 111,
        "low": 286,
        "na": 186
      },
      "trade_confidence": {
        "high": 0.023356401384083045,
        "medium": 0.12975778546712802,
        "low": 0.5051903114186851,
        "na": 0.3416955017301038
      },
      "trade_confidence_counts": {
        "high": 27,
        "medium": 150,
        "low": 584,
        "na": 395
      },
      "counts": {
        "trades": {
          "retail": 323,
          "mixed": 147,
          "institutional": 438,
          "ambiguous": 248,
          "unobservable": 0,
          "unclear": 248
        },
        "runs": {
          "retail": 305,
          "mixed": 76,
          "institutional": 119,
          "ambiguous": 110,
          "unobservable": 0,
          "unclear": 110
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8593442622950819,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.18032786885245902,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5,
      "dominance_gap": 0.30491803278688523,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-02",
            "n_trades": 1551,
            "n_runs": 764,
            "retail_pct": 0.2978723404255319,
            "mixed_pct": 0.15860735009671179,
            "instit_pct": 0.3520309477756286,
            "ambiguous_pct": 0.19148936170212766,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19148936170212766,
            "avg_trade_size": 4037.716956802063,
            "avg_run_notional": 8196.988219895287,
            "retail_qty_pct": 0.08204026661274384,
            "mixed_qty_pct": 0.18223370201790898,
            "instit_qty_pct": 0.45190249634685603,
            "ambiguous_qty_pct": 0.28382353502249114,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.28382353502249114,
            "retail_notional_pct": 0.08168959388256988,
            "mixed_notional_pct": 0.1837088516900362,
            "instit_notional_pct": 0.4538614696784782,
            "ambiguous_notional_pct": 0.2807400847489157,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2807400847489157,
            "run_retail_pct": 0.5798429319371727,
            "run_mixed_pct": 0.13612565445026178,
            "run_instit_pct": 0.13612565445026178,
            "run_ambiguous_pct": 0.14790575916230367,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.14790575916230367,
            "avg_feature_coverage": 0.8446989528795811,
            "high_confidence_pct": 0.06282722513089005,
            "medium_confidence_pct": 0.4175392670157068,
            "low_confidence_pct": 0.2356020942408377,
            "na_confidence_pct": 0.28403141361256545,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 1431,
            "n_runs": 745,
            "retail_pct": 0.27113906359189377,
            "mixed_pct": 0.14255765199161424,
            "instit_pct": 0.3941299790356394,
            "ambiguous_pct": 0.19217330538085256,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19217330538085256,
            "avg_trade_size": 3185.088749126485,
            "avg_run_notional": 6117.935570469798,
            "retail_qty_pct": 0.06899682251475261,
            "mixed_qty_pct": 0.16353083384761333,
            "instit_qty_pct": 0.5271616335232344,
            "ambiguous_qty_pct": 0.24031071011439967,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24031071011439967,
            "retail_notional_pct": 0.06849428525918512,
            "mixed_notional_pct": 0.16450322541577608,
            "instit_notional_pct": 0.5287911305783282,
            "ambiguous_notional_pct": 0.23821135874671062,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23821135874671062,
            "run_retail_pct": 0.4966442953020134,
            "run_mixed_pct": 0.13691275167785236,
            "run_instit_pct": 0.19731543624161074,
            "run_ambiguous_pct": 0.1691275167785235,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1691275167785235,
            "avg_feature_coverage": 0.8594630872483221,
            "high_confidence_pct": 0.036241610738255034,
            "medium_confidence_pct": 0.23221476510067113,
            "low_confidence_pct": 0.425503355704698,
            "na_confidence_pct": 0.30604026845637583,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 83,
            "n_runs": 32,
            "retail_pct": 0.24096385542168675,
            "mixed_pct": 0.0,
            "instit_pct": 0.4939759036144578,
            "ambiguous_pct": 0.26506024096385544,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.26506024096385544,
            "avg_trade_size": 3027.9337349397592,
            "avg_run_notional": 7853.703125,
            "retail_qty_pct": 0.06780896828290194,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6691578563616478,
            "ambiguous_qty_pct": 0.26303317535545023,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26303317535545023,
            "retail_notional_pct": 0.06815057387339173,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6688962412237858,
            "ambiguous_notional_pct": 0.2629531849028225,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2629531849028225,
            "run_retail_pct": 0.46875,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.25,
            "run_ambiguous_pct": 0.28125,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.28125,
            "avg_feature_coverage": 0.859375,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.71875,
            "na_confidence_pct": 0.28125,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.27941176470588236,
          "mixed_pct": 0.12716262975778547,
          "instit_pct": 0.3788927335640138,
          "ambiguous_pct": 0.21453287197231835,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.21453287197231835,
          "retail_qty_pct": 0.0692805627054716,
          "mixed_qty_pct": 0.15012487576135988,
          "instit_qty_pct": 0.5031091516093682,
          "ambiguous_qty_pct": 0.2774854099238003,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2774854099238003,
          "retail_notional_pct": 0.0689600108498542,
          "mixed_notional_pct": 0.1516640362332631,
          "instit_notional_pct": 0.5046851518870216,
          "ambiguous_notional_pct": 0.27469080102986115,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.27469080102986115,
          "run_retail_pct": 0.5,
          "run_mixed_pct": 0.12459016393442623,
          "run_instit_pct": 0.19508196721311474,
          "run_unclear_pct": 0.18032786885245902,
          "avg_trade_size": 3163.6608996539794,
          "avg_run_notional": 5995.396721311476,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.04426229508196721,
          "medium_confidence_pct": 0.1819672131147541,
          "low_confidence_pct": 0.46885245901639344,
          "na_confidence_pct": 0.30491803278688523,
          "avg_feature_coverage": 0.8593442622950819,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.07317073170731707,
          "mixed_pct": 0.07317073170731707,
          "instit_pct": 0.4634146341463415,
          "ambiguous_pct": 0.3902439024390244,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.3902439024390244,
          "retail_qty_pct": 0.002340966921119593,
          "mixed_qty_pct": 0.008091603053435115,
          "instit_qty_pct": 0.9148600508905852,
          "ambiguous_qty_pct": 0.07470737913486004,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.07470737913486004,
          "retail_notional_pct": 0.002393266640327197,
          "mixed_notional_pct": 0.00804776346238297,
          "instit_notional_pct": 0.9144171428650093,
          "ambiguous_notional_pct": 0.07514182703228053,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.07514182703228053,
          "run_retail_pct": 0.09375,
          "run_mixed_pct": 0.0625,
          "run_instit_pct": 0.40625,
          "run_unclear_pct": 0.4375,
          "avg_trade_size": 17717.39024390244,
          "avg_run_notional": 22700.40625,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5,
          "na_confidence_pct": 0.5,
          "avg_feature_coverage": 0.83125,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.31143552311435524,
          "mixed_pct": 0.18264395782643958,
          "instit_pct": 0.3320356853203569,
          "ambiguous_pct": 0.1711273317112733,
          "unobservable_pct": 0.00275750202757502,
          "unclear_pct": 0.17388483373884833,
          "retail_qty_pct": 0.06683513674371408,
          "mixed_qty_pct": 0.1333775648593535,
          "instit_qty_pct": 0.5597857372842493,
          "ambiguous_qty_pct": 0.23565971646290892,
          "unobservable_qty_pct": 0.004341844649774126,
          "unclear_qty_pct": 0.24000156111268306,
          "retail_notional_pct": 0.06707040742096922,
          "mixed_notional_pct": 0.1342361663002264,
          "instit_notional_pct": 0.5593564265301681,
          "ambiguous_notional_pct": 0.2349623323407518,
          "unobservable_notional_pct": 0.004374667407884502,
          "unclear_notional_pct": 0.23933699974863631,
          "run_retail_pct": 0.6211512717536813,
          "run_mixed_pct": 0.15127175368139223,
          "run_instit_pct": 0.11546184738955824,
          "run_unclear_pct": 0.11211512717536813,
          "avg_trade_size": 1692.6324412003244,
          "avg_run_notional": 3492.328982597055,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.21586345381526104,
          "medium_confidence_pct": 0.3852074966532798,
          "low_confidence_pct": 0.1355421686746988,
          "na_confidence_pct": 0.2633868808567604,
          "avg_feature_coverage": 0.866850736278447,
          "observable_run_pct": 0.999330655957162,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "S71",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.24078091106290672,
          "mixed_pct": 0.09436008676789588,
          "instit_pct": 0.3004338394793926,
          "ambiguous_pct": 0.3633405639913232,
          "unobservable_pct": 0.0010845986984815619,
          "unclear_pct": 0.36442516268980474,
          "retail_qty_pct": 0.05960992583096786,
          "mixed_qty_pct": 0.03333028110978848,
          "instit_qty_pct": 0.4981778225437231,
          "ambiguous_qty_pct": 0.40760003662668254,
          "unobservable_qty_pct": 0.0012819338888380185,
          "unclear_qty_pct": 0.40888197051552055,
          "retail_notional_pct": 0.056050368621891146,
          "mixed_notional_pct": 0.031465484518066876,
          "instit_notional_pct": 0.5041526726659031,
          "ambiguous_notional_pct": 0.4073370870091116,
          "unobservable_notional_pct": 0.000994387185027277,
          "unclear_notional_pct": 0.40833147419413884,
          "run_retail_pct": 0.40264650283553877,
          "run_mixed_pct": 0.07372400756143667,
          "run_instit_pct": 0.1890359168241966,
          "run_unclear_pct": 0.334593572778828,
          "avg_trade_size": 2328.688720173536,
          "avg_run_notional": 4058.697542533081,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.003780718336483932,
          "medium_confidence_pct": 0.24574669187145556,
          "low_confidence_pct": 0.34215500945179583,
          "na_confidence_pct": 0.40831758034026466,
          "avg_feature_coverage": 0.8372400756143666,
          "observable_run_pct": 0.998109640831758,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6132075471698113,
          "mixed_pct": 0.1391509433962264,
          "instit_pct": 0.12735849056603774,
          "ambiguous_pct": 0.12028301886792453,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.12028301886792453,
          "retail_qty_pct": 0.11211855318319197,
          "mixed_qty_pct": 0.10119918104708979,
          "instit_qty_pct": 0.4167885346592571,
          "ambiguous_qty_pct": 0.36989373111046114,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.36989373111046114,
          "retail_notional_pct": 0.11331154743179477,
          "mixed_notional_pct": 0.10285751090586476,
          "instit_notional_pct": 0.41523837934588054,
          "ambiguous_notional_pct": 0.3685925623164599,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3685925623164599,
          "run_retail_pct": 0.7094972067039106,
          "run_mixed_pct": 0.1424581005586592,
          "run_instit_pct": 0.04748603351955307,
          "run_unclear_pct": 0.1005586592178771,
          "avg_trade_size": 487.01509433962264,
          "avg_run_notional": 576.8,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.5502793296089385,
          "medium_confidence_pct": 0.13128491620111732,
          "low_confidence_pct": 0.07541899441340782,
          "na_confidence_pct": 0.2430167597765363,
          "avg_feature_coverage": 0.8445530726256981,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.19148936170212766,
          "mixed_pct": 0.05851063829787234,
          "instit_pct": 0.2925531914893617,
          "ambiguous_pct": 0.425531914893617,
          "unobservable_pct": 0.031914893617021274,
          "unclear_pct": 0.4574468085106383,
          "retail_qty_pct": 0.08167380892361986,
          "mixed_qty_pct": 0.0783967733803882,
          "instit_qty_pct": 0.3952609024451727,
          "ambiguous_qty_pct": 0.42223342576254097,
          "unobservable_qty_pct": 0.022435089488278295,
          "unclear_qty_pct": 0.44466851525081924,
          "retail_notional_pct": 0.08115263553134038,
          "mixed_notional_pct": 0.07591033281671913,
          "instit_notional_pct": 0.39576749165162095,
          "ambiguous_notional_pct": 0.42450029558854074,
          "unobservable_notional_pct": 0.022669244411778804,
          "unclear_notional_pct": 0.44716954000031955,
          "run_retail_pct": 0.2647058823529412,
          "run_mixed_pct": 0.051470588235294115,
          "run_instit_pct": 0.21323529411764705,
          "run_unclear_pct": 0.47058823529411764,
          "avg_trade_size": 1664.5478723404256,
          "avg_run_notional": 2300.9926470588234,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.47794117647058826,
          "na_confidence_pct": 0.5220588235294118,
          "avg_feature_coverage": 0.8220588235294117,
          "observable_run_pct": 0.9779411764705882,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "S69",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.27017841971113,
          "mixed_pct": 0.08326253186066271,
          "instit_pct": 0.205607476635514,
          "ambiguous_pct": 0.42480883602378927,
          "unobservable_pct": 0.016142735768903994,
          "unclear_pct": 0.4409515717926933,
          "retail_qty_pct": 0.09597430932514385,
          "mixed_qty_pct": 0.0652537129487915,
          "instit_qty_pct": 0.30204328037053085,
          "ambiguous_qty_pct": 0.5173078898126554,
          "unobservable_qty_pct": 0.019420807542878327,
          "unclear_qty_pct": 0.5367286973555337,
          "retail_notional_pct": 0.09637378973330858,
          "mixed_notional_pct": 0.06568110821210121,
          "instit_notional_pct": 0.30567971640759173,
          "ambiguous_notional_pct": 0.5135331656873329,
          "unobservable_notional_pct": 0.018732219959665643,
          "unclear_notional_pct": 0.5322653856469985,
          "run_retail_pct": 0.46360759493670883,
          "run_mixed_pct": 0.07436708860759493,
          "run_instit_pct": 0.09651898734177215,
          "run_unclear_pct": 0.36550632911392406,
          "avg_trade_size": 2429.5641461342398,
          "avg_run_notional": 4524.678797468355,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0680379746835443,
          "medium_confidence_pct": 0.18670886075949367,
          "low_confidence_pct": 0.30537974683544306,
          "na_confidence_pct": 0.439873417721519,
          "avg_feature_coverage": 0.8249208860759493,
          "observable_run_pct": 0.9873417721518988,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "532",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.11904761904761904,
          "mixed_pct": 0.07142857142857142,
          "instit_pct": 0.023809523809523808,
          "ambiguous_pct": 0.19047619047619047,
          "unobservable_pct": 0.5952380952380952,
          "unclear_pct": 0.7857142857142857,
          "retail_qty_pct": 0.05970623894420925,
          "mixed_qty_pct": 0.11892221360947137,
          "instit_qty_pct": 0.06625192958744923,
          "ambiguous_qty_pct": 0.16562982396862308,
          "unobservable_qty_pct": 0.589489793890247,
          "unclear_qty_pct": 0.7551196178588702,
          "retail_notional_pct": 0.059718698034331295,
          "mixed_notional_pct": 0.1189206378651261,
          "instit_notional_pct": 0.06625105173544629,
          "ambiguous_notional_pct": 0.16562762933861574,
          "unobservable_notional_pct": 0.5894819830264806,
          "unclear_notional_pct": 0.7551096123650963,
          "run_retail_pct": 0.2,
          "run_mixed_pct": 0.12,
          "run_instit_pct": 0.04,
          "run_unclear_pct": 0.64,
          "avg_trade_size": 359.3833333333333,
          "avg_run_notional": 603.764,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.24,
          "na_confidence_pct": 0.76,
          "avg_feature_coverage": 0.7120000000000002,
          "observable_run_pct": 0.56,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.29411764705882354,
            "mixed_pct": 0.0,
            "instit_pct": 0.38235294117647056,
            "ambiguous_pct": 0.3235294117647059,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3235294117647059,
            "retail_qty_pct": 0.06974248927038626,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6113733905579399,
            "ambiguous_qty_pct": 0.31888412017167383,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.31888412017167383,
            "retail_notional_pct": 0.0705702239913324,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6101891325340933,
            "ambiguous_notional_pct": 0.31924064347457426,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.31924064347457426,
            "run_retail_pct": 0.5625,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.25,
            "run_unclear_pct": 0.1875,
            "avg_trade_size": 3121.8382352941176,
            "avg_run_notional": 6633.90625,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.8125,
            "na_confidence_pct": 0.1875,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.16666666666666666,
            "mixed_pct": 0.0,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.3333333333333333,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3333333333333333,
            "retail_qty_pct": 0.0196078431372549,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6862745098039216,
            "ambiguous_qty_pct": 0.29411764705882354,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.29411764705882354,
            "retail_notional_pct": 0.019807353140686473,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6857956857956858,
            "ambiguous_notional_pct": 0.2943969610636277,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2943969610636277,
            "run_retail_pct": 0.2,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.4,
            "run_unclear_pct": 0.4,
            "avg_trade_size": 614.25,
            "avg_run_notional": 737.1,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6,
            "na_confidence_pct": 0.4,
            "avg_feature_coverage": 0.85,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23741007194244604,
            "mixed_pct": 0.1510791366906475,
            "instit_pct": 0.460431654676259,
            "ambiguous_pct": 0.1510791366906475,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1510791366906475,
            "retail_qty_pct": 0.07136563876651983,
            "mixed_qty_pct": 0.053744493392070485,
            "instit_qty_pct": 0.6321585903083701,
            "ambiguous_qty_pct": 0.24273127753303964,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24273127753303964,
            "retail_notional_pct": 0.07147592654185539,
            "mixed_notional_pct": 0.05392392122022487,
            "instit_notional_pct": 0.6327807081965164,
            "ambiguous_notional_pct": 0.24181944404140335,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24181944404140335,
            "run_retail_pct": 0.5423728813559322,
            "run_mixed_pct": 0.11864406779661017,
            "run_instit_pct": 0.22033898305084745,
            "run_unclear_pct": 0.11864406779661017,
            "avg_trade_size": 1611.4496402877699,
            "avg_run_notional": 3796.4661016949153,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.4067796610169492,
            "low_confidence_pct": 0.3559322033898305,
            "na_confidence_pct": 0.23728813559322035,
            "avg_feature_coverage": 0.8830508474576272,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.11764705882352941,
            "mixed_pct": 0.058823529411764705,
            "instit_pct": 0.35294117647058826,
            "ambiguous_pct": 0.47058823529411764,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.47058823529411764,
            "retail_qty_pct": 0.010067114093959731,
            "mixed_qty_pct": 0.05704697986577181,
            "instit_qty_pct": 0.5805369127516778,
            "ambiguous_qty_pct": 0.3523489932885906,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3523489932885906,
            "retail_notional_pct": 0.01040187310482478,
            "mixed_notional_pct": 0.05611637815222815,
            "instit_notional_pct": 0.5752120677081334,
            "ambiguous_notional_pct": 0.35826968103481366,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.35826968103481366,
            "run_retail_pct": 0.15384615384615385,
            "run_mixed_pct": 0.07692307692307693,
            "run_instit_pct": 0.23076923076923078,
            "run_unclear_pct": 0.5384615384615384,
            "avg_trade_size": 766.2647058823529,
            "avg_run_notional": 1002.0384615384615,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.38461538461538464,
            "na_confidence_pct": 0.6153846153846154,
            "avg_feature_coverage": 0.8384615384615385,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4166666666666667,
            "mixed_pct": 0.08333333333333333,
            "instit_pct": 0.16666666666666666,
            "ambiguous_pct": 0.3333333333333333,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3333333333333333,
            "retail_qty_pct": 0.13980582524271845,
            "mixed_qty_pct": 0.12815533980582525,
            "instit_qty_pct": 0.37281553398058254,
            "ambiguous_qty_pct": 0.3592233009708738,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3592233009708738,
            "retail_notional_pct": 0.13972323321201455,
            "mixed_notional_pct": 0.12868455785305763,
            "instit_notional_pct": 0.37243530776306843,
            "ambiguous_notional_pct": 0.35915690117185933,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.35915690117185933,
            "run_retail_pct": 0.2857142857142857,
            "run_mixed_pct": 0.14285714285714285,
            "run_instit_pct": 0.14285714285714285,
            "run_unclear_pct": 0.42857142857142855,
            "avg_trade_size": 833.4333333333334,
            "avg_run_notional": 1428.742857142857,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.42857142857142855,
            "na_confidence_pct": 0.5714285714285714,
            "avg_feature_coverage": 0.8285714285714286,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2857142857142857,
            "mixed_pct": 0.11428571428571428,
            "instit_pct": 0.08571428571428572,
            "ambiguous_pct": 0.5142857142857142,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5142857142857142,
            "retail_qty_pct": 0.010787486515641856,
            "mixed_qty_pct": 0.2588996763754045,
            "instit_qty_pct": 0.24271844660194175,
            "ambiguous_qty_pct": 0.48759439050701187,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.48759439050701187,
            "retail_notional_pct": 0.010635791097210918,
            "mixed_notional_pct": 0.25526434171629325,
            "instit_notional_pct": 0.24581209031318282,
            "ambiguous_notional_pct": 0.4882877768733131,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4882877768733131,
            "run_retail_pct": 0.5263157894736842,
            "run_mixed_pct": 0.15789473684210525,
            "run_instit_pct": 0.05263157894736842,
            "run_unclear_pct": 0.2631578947368421,
            "avg_trade_size": 533.5085714285714,
            "avg_run_notional": 982.778947368421,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5789473684210527,
            "na_confidence_pct": 0.42105263157894735,
            "avg_feature_coverage": 0.8105263157894737,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.13513513513513514,
            "mixed_pct": 0.08108108108108109,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.21621621621621623,
            "unobservable_pct": 0.5675675675675675,
            "unclear_pct": 0.7837837837837838,
            "retail_qty_pct": 0.06439994854864298,
            "mixed_qty_pct": 0.1282710914833712,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.17865054524146406,
            "unobservable_qty_pct": 0.6286784147265218,
            "unclear_qty_pct": 0.8073289599679858,
            "retail_notional_pct": 0.06441331999428326,
            "mixed_notional_pct": 0.12826925825353724,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.17864799199656997,
            "unobservable_notional_pct": 0.6286694297556096,
            "unclear_notional_pct": 0.8073174217521796,
            "run_retail_pct": 0.22727272727272727,
            "run_mixed_pct": 0.13636363636363635,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.6363636363636364,
            "avg_trade_size": 378.2162162162162,
            "avg_run_notional": 636.0909090909091,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.22727272727272727,
            "na_confidence_pct": 0.7727272727272727,
            "avg_feature_coverage": 0.7272727272727273,
            "observable_run_pct": 0.5909090909090908,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.26842105263157895,
            "mixed_pct": 0.07894736842105263,
            "instit_pct": 0.4473684210526316,
            "ambiguous_pct": 0.20526315789473684,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20526315789473684,
            "retail_qty_pct": 0.09330070357907617,
            "mixed_qty_pct": 0.10591924135821353,
            "instit_qty_pct": 0.5474151116549404,
            "ambiguous_qty_pct": 0.25336494340776994,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25336494340776994,
            "retail_notional_pct": 0.09306040795793055,
            "mixed_notional_pct": 0.10566744707037345,
            "instit_notional_pct": 0.5478661160375906,
            "ambiguous_notional_pct": 0.25340602893410535,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25340602893410535,
            "run_retail_pct": 0.44329896907216493,
            "run_mixed_pct": 0.10309278350515463,
            "run_instit_pct": 0.23711340206185566,
            "run_unclear_pct": 0.21649484536082475,
            "avg_trade_size": 3128.1605263157894,
            "avg_run_notional": 6127.3247422680415,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6804123711340206,
            "na_confidence_pct": 0.31958762886597936,
            "avg_feature_coverage": 0.8561855670103091,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.16666666666666666,
            "mixed_pct": 0.0,
            "instit_pct": 0.6666666666666666,
            "ambiguous_pct": 0.16666666666666666,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16666666666666666,
            "retail_qty_pct": 0.0014970059880239522,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7889221556886228,
            "ambiguous_qty_pct": 0.20958083832335328,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20958083832335328,
            "retail_notional_pct": 0.0015202702702702704,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7856418918918919,
            "ambiguous_notional_pct": 0.21283783783783783,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21283783783783783,
            "run_retail_pct": 0.2,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.6,
            "run_unclear_pct": 0.2,
            "avg_trade_size": 3946.6666666666665,
            "avg_run_notional": 4736.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.8,
            "na_confidence_pct": 0.2,
            "avg_feature_coverage": 0.85,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.29318448883666276,
            "mixed_pct": 0.20681551116333724,
            "instit_pct": 0.31668625146886015,
            "ambiguous_pct": 0.18331374853113983,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18331374853113983,
            "retail_qty_pct": 0.06456541668485616,
            "mixed_qty_pct": 0.11088313615925263,
            "instit_qty_pct": 0.5711354607761819,
            "ambiguous_qty_pct": 0.25341598637970925,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25341598637970925,
            "retail_notional_pct": 0.06461937403536912,
            "mixed_notional_pct": 0.1113370618532579,
            "instit_notional_pct": 0.571241574069125,
            "ambiguous_notional_pct": 0.252801990042248,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.252801990042248,
            "run_retail_pct": 0.6069142125480154,
            "run_mixed_pct": 0.17157490396927016,
            "run_instit_pct": 0.11011523687580026,
            "run_unclear_pct": 0.11139564660691421,
            "avg_trade_size": 1324.5737367802585,
            "avg_run_notional": 2886.5870678617157,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.10115236875800256,
            "medium_confidence_pct": 0.40973111395646605,
            "low_confidence_pct": 0.20614596670934698,
            "na_confidence_pct": 0.28297055057618437,
            "avg_feature_coverage": 0.8757362355953903,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.21374045801526717,
            "mixed_pct": 0.022900763358778626,
            "instit_pct": 0.31297709923664124,
            "ambiguous_pct": 0.45038167938931295,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.45038167938931295,
            "retail_qty_pct": 0.04172856178257934,
            "mixed_qty_pct": 0.007832545577312626,
            "instit_qty_pct": 0.513166779203241,
            "ambiguous_qty_pct": 0.437272113436867,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.437272113436867,
            "retail_notional_pct": 0.0415361621139203,
            "mixed_notional_pct": 0.007662070141428789,
            "instit_notional_pct": 0.5110960231889757,
            "ambiguous_notional_pct": 0.4397057445556752,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4397057445556752,
            "run_retail_pct": 0.3176470588235294,
            "run_mixed_pct": 0.023529411764705882,
            "run_instit_pct": 0.2,
            "run_unclear_pct": 0.4588235294117647,
            "avg_trade_size": 2484.7290076335876,
            "avg_run_notional": 3829.4058823529413,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.023529411764705882,
            "medium_confidence_pct": 0.15294117647058825,
            "low_confidence_pct": 0.3411764705882353,
            "na_confidence_pct": 0.4823529411764706,
            "avg_feature_coverage": 0.8199999999999997,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2,
            "mixed_pct": 0.08571428571428572,
            "instit_pct": 0.37142857142857144,
            "ambiguous_pct": 0.22857142857142856,
            "unobservable_pct": 0.11428571428571428,
            "unclear_pct": 0.34285714285714286,
            "retail_qty_pct": 0.09036144578313253,
            "mixed_qty_pct": 0.25421686746987954,
            "instit_qty_pct": 0.42168674698795183,
            "ambiguous_qty_pct": 0.18795180722891566,
            "unobservable_qty_pct": 0.04578313253012048,
            "unclear_qty_pct": 0.23373493975903614,
            "retail_notional_pct": 0.08992013672067571,
            "mixed_notional_pct": 0.2565813257961679,
            "instit_notional_pct": 0.4204735925329477,
            "ambiguous_notional_pct": 0.1872761034607421,
            "unobservable_notional_pct": 0.04574884148946659,
            "unclear_notional_pct": 0.2330249449502087,
            "run_retail_pct": 0.2692307692307692,
            "run_mixed_pct": 0.11538461538461539,
            "run_instit_pct": 0.2692307692307692,
            "run_unclear_pct": 0.34615384615384615,
            "avg_trade_size": 1738.6857142857143,
            "avg_run_notional": 2340.5384615384614,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5384615384615384,
            "na_confidence_pct": 0.46153846153846156,
            "avg_feature_coverage": 0.8000000000000002,
            "observable_run_pct": 0.9230769230769231,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2692307692307692,
            "mixed_pct": 0.15384615384615385,
            "instit_pct": 0.23076923076923078,
            "ambiguous_pct": 0.34615384615384615,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.34615384615384615,
            "retail_qty_pct": 0.12089447938504543,
            "mixed_qty_pct": 0.1893780573025856,
            "instit_qty_pct": 0.36477987421383645,
            "ambiguous_qty_pct": 0.3249475890985325,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3249475890985325,
            "retail_notional_pct": 0.12107709363806925,
            "mixed_notional_pct": 0.1913838194325999,
            "instit_notional_pct": 0.3645318096537608,
            "ambiguous_notional_pct": 0.32300727727557,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.32300727727557,
            "run_retail_pct": 0.26666666666666666,
            "run_mixed_pct": 0.26666666666666666,
            "run_instit_pct": 0.13333333333333333,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 1082.4,
            "avg_run_notional": 1876.16,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4,
            "na_confidence_pct": 0.6,
            "avg_feature_coverage": 0.8199999999999998,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.26875,
            "mixed_pct": 0.06875,
            "instit_pct": 0.1125,
            "ambiguous_pct": 0.525,
            "unobservable_pct": 0.025,
            "unclear_pct": 0.55,
            "retail_qty_pct": 0.06931446262715613,
            "mixed_qty_pct": 0.041999115435647945,
            "instit_qty_pct": 0.11518796992481203,
            "ambiguous_qty_pct": 0.7406457319770013,
            "unobservable_qty_pct": 0.032852720035382574,
            "unclear_qty_pct": 0.7734984520123839,
            "retail_notional_pct": 0.06837197339287555,
            "mixed_notional_pct": 0.041526590124509696,
            "instit_notional_pct": 0.11586022461213517,
            "ambiguous_notional_pct": 0.7407507955586273,
            "unobservable_notional_pct": 0.033490416311852234,
            "unclear_notional_pct": 0.7742412118704796,
            "run_retail_pct": 0.43617021276595747,
            "run_mixed_pct": 0.07446808510638298,
            "run_instit_pct": 0.05319148936170213,
            "run_unclear_pct": 0.4361702127659574,
            "avg_trade_size": 2408.095625,
            "avg_run_notional": 4098.886170212766,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0851063829787234,
            "low_confidence_pct": 0.40425531914893614,
            "na_confidence_pct": 0.5106382978723404,
            "avg_feature_coverage": 0.8106382978723402,
            "observable_run_pct": 0.9787234042553191,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.13513513513513514,
            "mixed_pct": 0.08108108108108109,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.21621621621621623,
            "unobservable_pct": 0.5675675675675675,
            "unclear_pct": 0.7837837837837838,
            "retail_qty_pct": 0.06439994854864298,
            "mixed_qty_pct": 0.1282710914833712,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.17865054524146406,
            "unobservable_qty_pct": 0.6286784147265218,
            "unclear_qty_pct": 0.8073289599679858,
            "retail_notional_pct": 0.06441331999428326,
            "mixed_notional_pct": 0.12826925825353724,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.17864799199656997,
            "unobservable_notional_pct": 0.6286694297556096,
            "unclear_notional_pct": 0.8073174217521796,
            "run_retail_pct": 0.22727272727272727,
            "run_mixed_pct": 0.13636363636363635,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.6363636363636364,
            "avg_trade_size": 378.2162162162162,
            "avg_run_notional": 636.0909090909091,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.22727272727272727,
            "na_confidence_pct": 0.7727272727272727,
            "avg_feature_coverage": 0.7272727272727273,
            "observable_run_pct": 0.5909090909090908,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "2w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2741514360313316,
            "mixed_pct": 0.0731070496083551,
            "instit_pct": 0.4386422976501306,
            "ambiguous_pct": 0.21409921671018275,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21409921671018275,
            "retail_qty_pct": 0.0802895384786271,
            "mixed_qty_pct": 0.09609937612233185,
            "instit_qty_pct": 0.5605272414239961,
            "ambiguous_qty_pct": 0.2630838439750449,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2630838439750449,
            "retail_notional_pct": 0.08021673617241484,
            "mixed_notional_pct": 0.09641634450498716,
            "instit_notional_pct": 0.5597438941483263,
            "ambiguous_notional_pct": 0.2636230251742717,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2636230251742717,
            "run_retail_pct": 0.4682926829268293,
            "run_mixed_pct": 0.08780487804878048,
            "run_instit_pct": 0.21951219512195122,
            "run_unclear_pct": 0.22439024390243903,
            "avg_trade_size": 3216.481723237598,
            "avg_run_notional": 6009.329268292683,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6878048780487804,
            "na_confidence_pct": 0.3121951219512195,
            "avg_feature_coverage": 0.8573170731707315,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.13333333333333333,
            "mixed_pct": 0.06666666666666667,
            "instit_pct": 0.4666666666666667,
            "ambiguous_pct": 0.3333333333333333,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3333333333333333,
            "retail_qty_pct": 0.0006174225415356983,
            "mixed_qty_pct": 0.0033116299955096543,
            "instit_qty_pct": 0.9501010327795241,
            "ambiguous_qty_pct": 0.045969914683430625,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.045969914683430625,
            "retail_notional_pct": 0.0005952693593851218,
            "mixed_notional_pct": 0.003053990626410625,
            "instit_notional_pct": 0.9510668795021051,
            "ambiguous_notional_pct": 0.045283860512099115,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.045283860512099115,
            "run_retail_pct": 0.14285714285714285,
            "run_mixed_pct": 0.07142857142857142,
            "run_instit_pct": 0.42857142857142855,
            "run_unclear_pct": 0.35714285714285715,
            "avg_trade_size": 43789.7,
            "avg_run_notional": 46917.53571428572,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5714285714285714,
            "na_confidence_pct": 0.42857142857142855,
            "avg_feature_coverage": 0.8392857142857142,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.26627981947130885,
            "mixed_pct": 0.18375241779497098,
            "instit_pct": 0.36363636363636365,
            "ambiguous_pct": 0.18633139909735655,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18633139909735655,
            "retail_qty_pct": 0.06548428454873927,
            "mixed_qty_pct": 0.11301915381327945,
            "instit_qty_pct": 0.5852014452775943,
            "ambiguous_qty_pct": 0.23629511636038697,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23629511636038697,
            "retail_notional_pct": 0.06572104354164103,
            "mixed_notional_pct": 0.11327487918590146,
            "instit_notional_pct": 0.5851428453761174,
            "ambiguous_notional_pct": 0.23586123189634012,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23586123189634012,
            "run_retail_pct": 0.5743740795287187,
            "run_mixed_pct": 0.15905743740795286,
            "run_instit_pct": 0.12960235640648013,
            "run_unclear_pct": 0.13696612665684832,
            "avg_trade_size": 1659.4717923920052,
            "avg_run_notional": 3790.634388807069,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.11119293078055964,
            "medium_confidence_pct": 0.4167893961708395,
            "low_confidence_pct": 0.17599410898379972,
            "na_confidence_pct": 0.2960235640648012,
            "avg_feature_coverage": 0.8692194403534609,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2528925619834711,
            "mixed_pct": 0.10909090909090909,
            "instit_pct": 0.3140495867768595,
            "ambiguous_pct": 0.3239669421487603,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3239669421487603,
            "retail_qty_pct": 0.04688898168585575,
            "mixed_qty_pct": 0.027918630316769076,
            "instit_qty_pct": 0.5499015689315755,
            "ambiguous_qty_pct": 0.3752908190657997,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3752908190657997,
            "retail_notional_pct": 0.04637686024627741,
            "mixed_notional_pct": 0.02749097633249898,
            "instit_notional_pct": 0.5528652985520869,
            "ambiguous_notional_pct": 0.37326686486913674,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.37326686486913674,
            "run_retail_pct": 0.423728813559322,
            "run_mixed_pct": 0.07909604519774012,
            "run_instit_pct": 0.19491525423728814,
            "run_unclear_pct": 0.3022598870056497,
            "avg_trade_size": 2363.390082644628,
            "avg_run_notional": 4039.1271186440677,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.005649717514124294,
            "medium_confidence_pct": 0.2937853107344633,
            "low_confidence_pct": 0.3192090395480226,
            "na_confidence_pct": 0.3813559322033898,
            "avg_feature_coverage": 0.8419491525423728,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.17307692307692307,
            "mixed_pct": 0.11538461538461539,
            "instit_pct": 0.3269230769230769,
            "ambiguous_pct": 0.38461538461538464,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.38461538461538464,
            "retail_qty_pct": 0.06350148367952523,
            "mixed_qty_pct": 0.12492581602373887,
            "instit_qty_pct": 0.4685459940652819,
            "ambiguous_qty_pct": 0.343026706231454,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.343026706231454,
            "retail_notional_pct": 0.06321947424330834,
            "mixed_notional_pct": 0.12517019016413064,
            "instit_notional_pct": 0.46977572302766435,
            "ambiguous_notional_pct": 0.3418346125648967,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3418346125648967,
            "run_retail_pct": 0.20689655172413793,
            "run_mixed_pct": 0.20689655172413793,
            "run_instit_pct": 0.20689655172413793,
            "run_unclear_pct": 0.3793103448275862,
            "avg_trade_size": 1285.326923076923,
            "avg_run_notional": 2304.7241379310344,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.41379310344827586,
            "na_confidence_pct": 0.5862068965517241,
            "avg_feature_coverage": 0.8293103448275865,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.22666666666666666,
            "mixed_pct": 0.04,
            "instit_pct": 0.36,
            "ambiguous_pct": 0.32,
            "unobservable_pct": 0.05333333333333334,
            "unclear_pct": 0.37333333333333335,
            "retail_qty_pct": 0.09834938101788171,
            "mixed_qty_pct": 0.1451169188445667,
            "instit_qty_pct": 0.4408528198074278,
            "ambiguous_qty_pct": 0.2895460797799175,
            "unobservable_qty_pct": 0.026134800550206328,
            "unclear_qty_pct": 0.3156808803301238,
            "retail_notional_pct": 0.09820557064148884,
            "mixed_notional_pct": 0.144461046681069,
            "instit_notional_pct": 0.4403360333812896,
            "ambiguous_notional_pct": 0.2912397244748322,
            "unobservable_notional_pct": 0.025757624821320355,
            "unclear_notional_pct": 0.3169973492961526,
            "run_retail_pct": 0.3090909090909091,
            "run_mixed_pct": 0.05454545454545454,
            "run_instit_pct": 0.2727272727272727,
            "run_unclear_pct": 0.36363636363636365,
            "avg_trade_size": 1441.1266666666668,
            "avg_run_notional": 1965.1727272727273,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5818181818181818,
            "na_confidence_pct": 0.41818181818181815,
            "avg_feature_coverage": 0.8154545454545457,
            "observable_run_pct": 0.9636363636363636,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2851153039832285,
            "mixed_pct": 0.09014675052410902,
            "instit_pct": 0.16142557651991615,
            "ambiguous_pct": 0.44654088050314467,
            "unobservable_pct": 0.016771488469601678,
            "unclear_pct": 0.46331236897274636,
            "retail_qty_pct": 0.06972313944627889,
            "mixed_qty_pct": 0.06006364953906378,
            "instit_qty_pct": 0.22290038697724454,
            "ambiguous_qty_pct": 0.6323641470812353,
            "unobservable_qty_pct": 0.014948676956177442,
            "unclear_qty_pct": 0.6473128240374127,
            "retail_notional_pct": 0.06868654885204818,
            "mixed_notional_pct": 0.06137188214567698,
            "instit_notional_pct": 0.22438385766697833,
            "ambiguous_notional_pct": 0.6306065998566567,
            "unobservable_notional_pct": 0.014951111478639841,
            "unclear_notional_pct": 0.6455577113352965,
            "run_retail_pct": 0.4980544747081712,
            "run_mixed_pct": 0.07003891050583658,
            "run_instit_pct": 0.07392996108949416,
            "run_unclear_pct": 0.35797665369649806,
            "avg_trade_size": 1957.1545073375262,
            "avg_run_notional": 3632.539688715953,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1245136186770428,
            "medium_confidence_pct": 0.14007782101167315,
            "low_confidence_pct": 0.30739299610894943,
            "na_confidence_pct": 0.4280155642023346,
            "avg_feature_coverage": 0.8260700389105058,
            "observable_run_pct": 0.9844357976653697,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1282051282051282,
            "mixed_pct": 0.07692307692307693,
            "instit_pct": 0.02564102564102564,
            "ambiguous_pct": 0.20512820512820512,
            "unobservable_pct": 0.5641025641025641,
            "unclear_pct": 0.7692307692307692,
            "retail_qty_pct": 0.060104442473272464,
            "mixed_qty_pct": 0.11971535090936981,
            "instit_qty_pct": 0.06669378880744836,
            "ambiguous_qty_pct": 0.1667344720186209,
            "unobservable_qty_pct": 0.5867519457912884,
            "unclear_qty_pct": 0.7534864178099093,
            "retail_notional_pct": 0.06011697934520911,
            "mixed_notional_pct": 0.11971375407660347,
            "instit_notional_pct": 0.06669289920702143,
            "ambiguous_notional_pct": 0.16673224801755357,
            "unobservable_notional_pct": 0.5867441193536125,
            "unclear_notional_pct": 0.7534763673711661,
            "run_retail_pct": 0.20833333333333334,
            "run_mixed_pct": 0.125,
            "run_instit_pct": 0.041666666666666664,
            "run_unclear_pct": 0.625,
            "avg_trade_size": 384.4641025641026,
            "avg_run_notional": 624.7541666666667,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.25,
            "na_confidence_pct": 0.75,
            "avg_feature_coverage": 0.71875,
            "observable_run_pct": 0.5833333333333333,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.27941176470588236,
            "mixed_pct": 0.12716262975778547,
            "instit_pct": 0.3788927335640138,
            "ambiguous_pct": 0.21453287197231835,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21453287197231835,
            "retail_qty_pct": 0.0692805627054716,
            "mixed_qty_pct": 0.15012487576135988,
            "instit_qty_pct": 0.5031091516093682,
            "ambiguous_qty_pct": 0.2774854099238003,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2774854099238003,
            "retail_notional_pct": 0.0689600108498542,
            "mixed_notional_pct": 0.1516640362332631,
            "instit_notional_pct": 0.5046851518870216,
            "ambiguous_notional_pct": 0.27469080102986115,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.27469080102986115,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.12459016393442623,
            "run_instit_pct": 0.19508196721311474,
            "run_unclear_pct": 0.18032786885245902,
            "avg_trade_size": 3163.6608996539794,
            "avg_run_notional": 5995.396721311476,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.04426229508196721,
            "medium_confidence_pct": 0.1819672131147541,
            "low_confidence_pct": 0.46885245901639344,
            "na_confidence_pct": 0.30491803278688523,
            "avg_feature_coverage": 0.8593442622950819,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.07317073170731707,
            "mixed_pct": 0.07317073170731707,
            "instit_pct": 0.4634146341463415,
            "ambiguous_pct": 0.3902439024390244,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3902439024390244,
            "retail_qty_pct": 0.002340966921119593,
            "mixed_qty_pct": 0.008091603053435115,
            "instit_qty_pct": 0.9148600508905852,
            "ambiguous_qty_pct": 0.07470737913486004,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07470737913486004,
            "retail_notional_pct": 0.002393266640327197,
            "mixed_notional_pct": 0.00804776346238297,
            "instit_notional_pct": 0.9144171428650093,
            "ambiguous_notional_pct": 0.07514182703228053,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07514182703228053,
            "run_retail_pct": 0.09375,
            "run_mixed_pct": 0.0625,
            "run_instit_pct": 0.40625,
            "run_unclear_pct": 0.4375,
            "avg_trade_size": 17717.39024390244,
            "avg_run_notional": 22700.40625,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.83125,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.31143552311435524,
            "mixed_pct": 0.18264395782643958,
            "instit_pct": 0.3320356853203569,
            "ambiguous_pct": 0.1711273317112733,
            "unobservable_pct": 0.00275750202757502,
            "unclear_pct": 0.17388483373884833,
            "retail_qty_pct": 0.06683513674371408,
            "mixed_qty_pct": 0.1333775648593535,
            "instit_qty_pct": 0.5597857372842493,
            "ambiguous_qty_pct": 0.23565971646290892,
            "unobservable_qty_pct": 0.004341844649774126,
            "unclear_qty_pct": 0.24000156111268306,
            "retail_notional_pct": 0.06707040742096922,
            "mixed_notional_pct": 0.1342361663002264,
            "instit_notional_pct": 0.5593564265301681,
            "ambiguous_notional_pct": 0.2349623323407518,
            "unobservable_notional_pct": 0.004374667407884502,
            "unclear_notional_pct": 0.23933699974863631,
            "run_retail_pct": 0.6211512717536813,
            "run_mixed_pct": 0.15127175368139223,
            "run_instit_pct": 0.11546184738955824,
            "run_unclear_pct": 0.11211512717536813,
            "avg_trade_size": 1692.6324412003244,
            "avg_run_notional": 3492.328982597055,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.21586345381526104,
            "medium_confidence_pct": 0.3852074966532798,
            "low_confidence_pct": 0.1355421686746988,
            "na_confidence_pct": 0.2633868808567604,
            "avg_feature_coverage": 0.866850736278447,
            "observable_run_pct": 0.999330655957162,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24078091106290672,
            "mixed_pct": 0.09436008676789588,
            "instit_pct": 0.3004338394793926,
            "ambiguous_pct": 0.3633405639913232,
            "unobservable_pct": 0.0010845986984815619,
            "unclear_pct": 0.36442516268980474,
            "retail_qty_pct": 0.05960992583096786,
            "mixed_qty_pct": 0.03333028110978848,
            "instit_qty_pct": 0.4981778225437231,
            "ambiguous_qty_pct": 0.40760003662668254,
            "unobservable_qty_pct": 0.0012819338888380185,
            "unclear_qty_pct": 0.40888197051552055,
            "retail_notional_pct": 0.056050368621891146,
            "mixed_notional_pct": 0.031465484518066876,
            "instit_notional_pct": 0.5041526726659031,
            "ambiguous_notional_pct": 0.4073370870091116,
            "unobservable_notional_pct": 0.000994387185027277,
            "unclear_notional_pct": 0.40833147419413884,
            "run_retail_pct": 0.40264650283553877,
            "run_mixed_pct": 0.07372400756143667,
            "run_instit_pct": 0.1890359168241966,
            "run_unclear_pct": 0.334593572778828,
            "avg_trade_size": 2328.688720173536,
            "avg_run_notional": 4058.697542533081,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.003780718336483932,
            "medium_confidence_pct": 0.24574669187145556,
            "low_confidence_pct": 0.34215500945179583,
            "na_confidence_pct": 0.40831758034026466,
            "avg_feature_coverage": 0.8372400756143666,
            "observable_run_pct": 0.998109640831758,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6132075471698113,
            "mixed_pct": 0.1391509433962264,
            "instit_pct": 0.12735849056603774,
            "ambiguous_pct": 0.12028301886792453,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12028301886792453,
            "retail_qty_pct": 0.11211855318319197,
            "mixed_qty_pct": 0.10119918104708979,
            "instit_qty_pct": 0.4167885346592571,
            "ambiguous_qty_pct": 0.36989373111046114,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.36989373111046114,
            "retail_notional_pct": 0.11331154743179477,
            "mixed_notional_pct": 0.10285751090586476,
            "instit_notional_pct": 0.41523837934588054,
            "ambiguous_notional_pct": 0.3685925623164599,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3685925623164599,
            "run_retail_pct": 0.7094972067039106,
            "run_mixed_pct": 0.1424581005586592,
            "run_instit_pct": 0.04748603351955307,
            "run_unclear_pct": 0.1005586592178771,
            "avg_trade_size": 487.01509433962264,
            "avg_run_notional": 576.8,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5502793296089385,
            "medium_confidence_pct": 0.13128491620111732,
            "low_confidence_pct": 0.07541899441340782,
            "na_confidence_pct": 0.2430167597765363,
            "avg_feature_coverage": 0.8445530726256981,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19148936170212766,
            "mixed_pct": 0.05851063829787234,
            "instit_pct": 0.2925531914893617,
            "ambiguous_pct": 0.425531914893617,
            "unobservable_pct": 0.031914893617021274,
            "unclear_pct": 0.4574468085106383,
            "retail_qty_pct": 0.08167380892361986,
            "mixed_qty_pct": 0.0783967733803882,
            "instit_qty_pct": 0.3952609024451727,
            "ambiguous_qty_pct": 0.42223342576254097,
            "unobservable_qty_pct": 0.022435089488278295,
            "unclear_qty_pct": 0.44466851525081924,
            "retail_notional_pct": 0.08115263553134038,
            "mixed_notional_pct": 0.07591033281671913,
            "instit_notional_pct": 0.39576749165162095,
            "ambiguous_notional_pct": 0.42450029558854074,
            "unobservable_notional_pct": 0.022669244411778804,
            "unclear_notional_pct": 0.44716954000031955,
            "run_retail_pct": 0.2647058823529412,
            "run_mixed_pct": 0.051470588235294115,
            "run_instit_pct": 0.21323529411764705,
            "run_unclear_pct": 0.47058823529411764,
            "avg_trade_size": 1664.5478723404256,
            "avg_run_notional": 2300.9926470588234,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.47794117647058826,
            "na_confidence_pct": 0.5220588235294118,
            "avg_feature_coverage": 0.8220588235294117,
            "observable_run_pct": 0.9779411764705882,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.27017841971113,
            "mixed_pct": 0.08326253186066271,
            "instit_pct": 0.205607476635514,
            "ambiguous_pct": 0.42480883602378927,
            "unobservable_pct": 0.016142735768903994,
            "unclear_pct": 0.4409515717926933,
            "retail_qty_pct": 0.09597430932514385,
            "mixed_qty_pct": 0.0652537129487915,
            "instit_qty_pct": 0.30204328037053085,
            "ambiguous_qty_pct": 0.5173078898126554,
            "unobservable_qty_pct": 0.019420807542878327,
            "unclear_qty_pct": 0.5367286973555337,
            "retail_notional_pct": 0.09637378973330858,
            "mixed_notional_pct": 0.06568110821210121,
            "instit_notional_pct": 0.30567971640759173,
            "ambiguous_notional_pct": 0.5135331656873329,
            "unobservable_notional_pct": 0.018732219959665643,
            "unclear_notional_pct": 0.5322653856469985,
            "run_retail_pct": 0.46360759493670883,
            "run_mixed_pct": 0.07436708860759493,
            "run_instit_pct": 0.09651898734177215,
            "run_unclear_pct": 0.36550632911392406,
            "avg_trade_size": 2429.5641461342398,
            "avg_run_notional": 4524.678797468355,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0680379746835443,
            "medium_confidence_pct": 0.18670886075949367,
            "low_confidence_pct": 0.30537974683544306,
            "na_confidence_pct": 0.439873417721519,
            "avg_feature_coverage": 0.8249208860759493,
            "observable_run_pct": 0.9873417721518988,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.11904761904761904,
            "mixed_pct": 0.07142857142857142,
            "instit_pct": 0.023809523809523808,
            "ambiguous_pct": 0.19047619047619047,
            "unobservable_pct": 0.5952380952380952,
            "unclear_pct": 0.7857142857142857,
            "retail_qty_pct": 0.05970623894420925,
            "mixed_qty_pct": 0.11892221360947137,
            "instit_qty_pct": 0.06625192958744923,
            "ambiguous_qty_pct": 0.16562982396862308,
            "unobservable_qty_pct": 0.589489793890247,
            "unclear_qty_pct": 0.7551196178588702,
            "retail_notional_pct": 0.059718698034331295,
            "mixed_notional_pct": 0.1189206378651261,
            "instit_notional_pct": 0.06625105173544629,
            "ambiguous_notional_pct": 0.16562762933861574,
            "unobservable_notional_pct": 0.5894819830264806,
            "unclear_notional_pct": 0.7551096123650963,
            "run_retail_pct": 0.2,
            "run_mixed_pct": 0.12,
            "run_instit_pct": 0.04,
            "run_unclear_pct": 0.64,
            "avg_trade_size": 359.3833333333333,
            "avg_run_notional": 603.764,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.24,
            "na_confidence_pct": 0.76,
            "avg_feature_coverage": 0.7120000000000002,
            "observable_run_pct": 0.56,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "peer_activity_enabled": true,
      "peer_activity_reason": null,
      "recent_trades": [
        {
          "trade_id": "BMLL-34",
          "timestamp": "2026-04-02T07:24:18.492300",
          "price": 0.23,
          "size": 1000.0,
          "notional": 230.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1540,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-33",
          "timestamp": "2026-04-02T02:56:08.736100",
          "price": 0.23,
          "size": 7000.0,
          "notional": 1610.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1539,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-32",
          "timestamp": "2026-04-02T02:56:08.736100",
          "price": 0.23,
          "size": 3000.0,
          "notional": 690.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1539,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-31",
          "timestamp": "2026-04-02T01:57:38.563900",
          "price": 0.23,
          "size": 6400.0,
          "notional": 1472.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1538,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-30",
          "timestamp": "2026-04-02T01:55:49.470800",
          "price": 0.225,
          "size": 15600.0,
          "notional": 3510.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1537,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-29",
          "timestamp": "2026-04-02T01:55:49.470800",
          "price": 0.225,
          "size": 25000.0,
          "notional": 5625.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1537,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-28",
          "timestamp": "2026-04-02T01:55:49.470800",
          "price": 0.225,
          "size": 2000.0,
          "notional": 450.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1537,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-27",
          "timestamp": "2026-04-02T01:55:49.470800",
          "price": 0.225,
          "size": 16000.0,
          "notional": 3600.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1537,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-26",
          "timestamp": "2026-04-02T01:55:23.705500",
          "price": 0.225,
          "size": 2000.0,
          "notional": 450.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1536,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-25",
          "timestamp": "2026-04-02T01:55:23.705500",
          "price": 0.225,
          "size": 50000.0,
          "notional": 11250.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1536,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-24",
          "timestamp": "2026-04-02T01:55:23.705500",
          "price": 0.225,
          "size": 50000.0,
          "notional": 11250.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1536,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-23",
          "timestamp": "2026-04-02T01:55:23.705500",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1536,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-22",
          "timestamp": "2026-04-02T01:55:23.705500",
          "price": 0.225,
          "size": 30000.0,
          "notional": 6750.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1536,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-21",
          "timestamp": "2026-04-02T01:51:43.051700",
          "price": 0.23,
          "size": 600.0,
          "notional": 138.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1535,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-20",
          "timestamp": "2026-04-02T01:51:43.051700",
          "price": 0.23,
          "size": 6300.0,
          "notional": 1449.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1535,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-19",
          "timestamp": "2026-04-02T01:51:43.021600",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1535,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-18",
          "timestamp": "2026-04-02T01:51:43.021600",
          "price": 0.23,
          "size": 30000.0,
          "notional": 6900.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1535,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-17",
          "timestamp": "2026-04-02T01:38:03.314700",
          "price": 0.235,
          "size": 2700.0,
          "notional": 634.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1534,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-16",
          "timestamp": "2026-04-02T01:38:03.284500",
          "price": 0.23,
          "size": 48000.0,
          "notional": 11040.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1533,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-15",
          "timestamp": "2026-04-02T01:25:16.107000",
          "price": 0.23,
          "size": 900.0,
          "notional": 207.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1532,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-14",
          "timestamp": "2026-04-02T01:25:01.094900",
          "price": 0.23,
          "size": 1100.0,
          "notional": 253.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1531,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-9",
          "timestamp": "2026-04-02T01:21:35.184200",
          "price": 0.23,
          "size": 3000.0,
          "notional": 690.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1530,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-13",
          "timestamp": "2026-04-02T01:21:35.184200",
          "price": 0.23,
          "size": 800.0,
          "notional": 184.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1530,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-12",
          "timestamp": "2026-04-02T01:21:35.184200",
          "price": 0.23,
          "size": 10200.0,
          "notional": 2346.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1530,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-11",
          "timestamp": "2026-04-02T01:21:35.184200",
          "price": 0.23,
          "size": 3000.0,
          "notional": 690.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1530,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-10",
          "timestamp": "2026-04-02T01:21:35.184200",
          "price": 0.23,
          "size": 30000.0,
          "notional": 6900.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1530,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-8",
          "timestamp": "2026-04-02T01:20:44.283700",
          "price": 0.23,
          "size": 5000.0,
          "notional": 1150.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1529,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-7",
          "timestamp": "2026-04-02T01:15:00.742000",
          "price": 0.235,
          "size": 400.0,
          "notional": 94.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1528,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-6",
          "timestamp": "2026-04-02T01:14:59.925600",
          "price": 0.23,
          "size": 5000.0,
          "notional": 1150.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1527,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-5",
          "timestamp": "2026-04-02T01:02:38.717400",
          "price": 0.23,
          "size": 30000.0,
          "notional": 6900.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1526,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        }
      ],
      "currency_thresholds": {
        "SGD": {
          "retail_max": 13500.0,
          "instit_min": 67500.0
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
      "total_trades": 1155,
      "price_moving_trades": 159,
      "pct_price_moving": 13.766233766233766,
      "all_movers": {
        "count": 159,
        "avg_size": 2926.2295597484276,
        "median_size": 735.0,
        "retail_count": 87,
        "mixed_count": 22,
        "institutional_count": 29,
        "ambiguous_count": 21,
        "unobservable_count": 0,
        "retail_pct": 54.71698113207547,
        "mixed_pct": 13.836477987421384,
        "instit_pct": 18.238993710691823,
        "unclear_pct": 13.20754716981132
      },
      "positive_movers": {
        "count": 81,
        "avg_size": 2241.4444444444443,
        "median_size": 125.0,
        "retail_count": 56,
        "mixed_count": 12,
        "institutional_count": 8,
        "ambiguous_count": 5,
        "unobservable_count": 0,
        "retail_pct": 69.1358024691358,
        "mixed_pct": 14.814814814814813,
        "instit_pct": 9.876543209876543,
        "unclear_pct": 6.172839506172839
      },
      "negative_movers": {
        "count": 78,
        "avg_size": 3637.352564102564,
        "median_size": 2137.5,
        "retail_count": 31,
        "mixed_count": 10,
        "institutional_count": 21,
        "ambiguous_count": 16,
        "unobservable_count": 0,
        "retail_pct": 39.743589743589745,
        "mixed_pct": 12.82051282051282,
        "instit_pct": 26.923076923076923,
        "unclear_pct": 20.51282051282051
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "$ Toku Ltd",
      "mapping": {
        "ticker_to_security": "$ Toku Ltd",
        "confidence": "high"
      },
      "coverage": {
        "n_days_short_data": 24,
        "window_days": 21
      },
      "periods": {
        "1W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.005439129739241722,
            "max_short_ratio": 0.03807390817469205,
            "interpretation": "Low short interest"
          }
        },
        "2W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0052010207716203846,
            "max_short_ratio": 0.03807390817469205,
            "interpretation": "Low short interest"
          }
        },
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.006413670183311911,
            "max_short_ratio": 0.07371154614462645,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": 0.14745537851326598,
        "interpretation": "Positive - unusual (shorts during up days?)"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604
          }
        ],
        "mom_change": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205,
            "change_pct": 110.85800341128693
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": -38.527221284554955
          }
        ],
        "interpretation": "Shorts covering significantly (-100% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 466000,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 632200,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 578100,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 463200,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 476800,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 458600,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.03807390817469205,
            "short_vol": 17000,
            "total_vol": 446500,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.02231404958677686,
            "short_vol": 13500,
            "total_vol": 605000,
            "close": 0.235,
            "return": 0.04444444444444429
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 788800,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 586700,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 581900,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0020242914979757085,
            "short_vol": 1700,
            "total_vol": 839800,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.07371154614462645,
            "short_vol": 36900,
            "total_vol": 500600,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 921800,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.007331217857533647,
            "short_vol": 6700,
            "total_vol": 913900,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2461200,
            "close": 0.25,
            "return": 0.06382978723404253
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.002012578616352201,
            "short_vol": 1600,
            "total_vol": 795000,
            "close": 0.235,
            "return": 0.06818181818181812
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 732800,
            "close": 0.22,
            "return": 0.023255813953488413
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1332500,
            "close": 0.215,
            "return": -0.022727272727272707
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 682900,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 791200,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.008460492521528931,
            "short_vol": 16800,
            "total_vol": 1985700,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1124800,
            "close": 0.23,
            "return": -0.04166666666666663
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1989800,
            "close": 0.24,
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.0052010207716203846,
          "max_short_ratio": 0.03807390817469205,
          "is_target": true
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.65901786755033e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "S69",
          "avg_short_ratio": 0.00011381540561362179,
          "max_short_ratio": 0.02815622161671208,
          "is_target": false
        },
        {
          "ticker": "S71",
          "avg_short_ratio": 0.00036975177747255886,
          "max_short_ratio": 0.05687909469922573,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.003289502072808035,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0036008850613087648,
          "max_short_ratio": 1.0,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1W",
        "2W",
        "1M"
      ],
      "session": {
        "1D": {
          "opening": 0.0,
          "continuous": 0.9993971814300429,
          "closing": 0.0,
          "auctions": 0.0006028185699570951,
          "other": 0.0
        },
        "1W": {
          "opening": 2.8668956443753066e-05,
          "continuous": 0.999655972522675,
          "closing": 0.0,
          "auctions": 0.00034402747732503676,
          "other": 0.0
        },
        "2W": {
          "opening": 0.014258764960509734,
          "continuous": 0.9838103214797305,
          "closing": 0.0017583931492802518,
          "auctions": 0.016189678520269583,
          "other": 0.0
        },
        "1M": {
          "opening": 0.01124086548702923,
          "continuous": 0.9784675035447515,
          "closing": 0.007786449394945649,
          "auctions": 0.021532496455248438,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.3302772011400441,
        "1W": 0.2914105012820517,
        "2W": 0.2999621041311653,
        "1M": 0.2640988919642102
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0121
        },
        {
          "time": "09:00",
          "avg_share": 0.0827
        },
        {
          "time": "09:30",
          "avg_share": 0.073
        },
        {
          "time": "10:00",
          "avg_share": 0.0519
        },
        {
          "time": "10:30",
          "avg_share": 0.0546
        },
        {
          "time": "11:00",
          "avg_share": 0.0868
        },
        {
          "time": "11:30",
          "avg_share": 0.0767
        },
        {
          "time": "12:30",
          "avg_share": 0.0019
        },
        {
          "time": "13:00",
          "avg_share": 0.0384
        },
        {
          "time": "13:30",
          "avg_share": 0.0459
        },
        {
          "time": "14:00",
          "avg_share": 0.0357
        },
        {
          "time": "14:30",
          "avg_share": 0.0904
        },
        {
          "time": "15:00",
          "avg_share": 0.1451
        },
        {
          "time": "15:30",
          "avg_share": 0.0478
        },
        {
          "time": "16:00",
          "avg_share": 0.0775
        },
        {
          "time": "16:30",
          "avg_share": 0.0519
        },
        {
          "time": "17:00",
          "avg_share": 0.0277
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.745711502943674,
          "hhi": 0.22841545816059616,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 5.577116355611398,
          "hhi": 0.24168059298648265,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.462761214907187,
          "hhi": 0.6583843286223173,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.741543929315251,
          "hhi": 0.35377370410699627,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 8.24875959967987,
          "hhi": 0.5091852238906166,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.713838238656959,
          "hhi": 0.7778259940882774,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.988060157704368,
          "hhi": 0.8066141419943307,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "S69",
          "auctions_pct": 4.961558817553989,
          "hhi": 0.46386693815591346,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "S71",
          "auctions_pct": 2.028723172547329,
          "hhi": 0.6913730296873443,
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
