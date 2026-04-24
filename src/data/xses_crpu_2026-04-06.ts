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
      "ticker": "CRPU",
      "name": "Sasseur Reit",
      "marketCap": 794239715.8100001,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "ODBU",
      "name": "UtdHampshReitUSD",
      "marketCap": 300742170.81,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "D5IU",
      "name": "LANDMARK REIT",
      "marketCap": 46180859.874,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "BMGU",
      "name": "BHG Retail Reit",
      "marketCap": 231223157.445,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "AU8U",
      "name": "CapLand China T",
      "marketCap": 1118238764.5,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "JYEU",
      "name": "Lendlease Reit",
      "marketCap": 1308284083.6200001,
      "sector": "REIT - Diversified",
      "industry": "Real Estate"
    },
    {
      "ticker": "AJBU",
      "name": "Keppel DC Reit",
      "marketCap": 4595276926.7699995,
      "sector": "REIT - Office",
      "industry": "Real Estate"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "CRPU",
    "company": "Sasseur Reit",
    "asof_date": "2026-04-06",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "794.2M",
    "market_cap_category": "small",
    "universe_total": 558,
    "peers_count": 6,
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
          "score_pca": 81.54121863799283,
          "score_pca_percentile": 81.54121863799283,
          "rank_pca": 104,
          "total": 558,
          "adv_notional_sgd": 799528.5,
          "adv_volume_shares": 1259100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002754775726216784,
          "votes": 176.0,
          "trades": 176.0,
          "spread_pct": 0.008002447231569294,
          "spread_ticks": 1.0186915887850467,
          "amihud": 0.0,
          "volatility": 0.15013874959251794
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5152824414129847,
          "loadings": {
            "log_adv": 0.5557545370459273,
            "log_trades": 0.518119824928134,
            "log_turnover": 0.5168652642831851,
            "neg_spread": 0.353351294132773,
            "neg_amihud": 0.0188223036121847,
            "neg_vol": -0.17414828155398185
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 240943.16654039366,
          "peer_median_score_pca": 69.89247311827958,
          "peer_median_trades": 67.5,
          "peer_median_volatility": 0.15774232022049234,
          "peer_median_spread_pct": 0.009950472039991987,
          "peer_median_spread_ticks": 1.0040444893832152,
          "peer_median_amihud": 8.070658820580093e-11,
          "peer_median_turnover_ratio": 0.0003806411996015498,
          "target_vs_peer": {
            "score_pca_delta": 11.65,
            "adv_delta_pct": 231.8,
            "trades_delta_pct": 160.74,
            "volatility_delta_pct": 4.82,
            "spread_pct_delta_pct": 19.58,
            "spread_ticks_delta_pct": 1.46,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 623.72
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 81.54121863799283,
            "rank_pca": 104,
            "adv": 799528.5,
            "trades": 176.0,
            "volatility": 0.15013874959251794,
            "spread_pct": 0.008002447231569294,
            "spread_ticks": 1.0186915887850467,
            "amihud": 0.0,
            "turnover_ratio": 0.002754775726216784,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 64.69534050179212,
            "rank_pca": 198,
            "adv": 112686.33308078736,
            "trades": 22.0,
            "volatility": 0.18693958878551895,
            "spread_pct": 0.010667804565820364,
            "spread_ticks": 1.0869565217391304,
            "amihud": 0.0,
            "turnover_ratio": 0.0002911696745559579,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 54.48028673835126,
            "rank_pca": 255,
            "adv": 1695.0,
            "trades": 18.0,
            "volatility": 1.469613012006543,
            "spread_pct": 0.15384615384615385,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 8.913284961750925e-05,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 30.64516129032258,
            "rank_pca": 388,
            "adv": 44.5,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.10881392818280736,
            "spread_ticks": 9.090909090909092,
            "amihud": 0.0,
            "turnover_ratio": 1.9245477179587867e-07,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 75.08960573476703,
            "rank_pca": 140,
            "adv": 369200.0,
            "trades": 113.0,
            "volatility": 0.07361900337800631,
            "spread_pct": 0.007722007722007728,
            "spread_ticks": 1.0,
            "amihud": 2.099658175649008e-08,
            "turnover_ratio": 0.0004701127246471417,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 99.2831541218638,
            "rank_pca": 5,
            "adv": 57899823.300000004,
            "trades": 1273.0,
            "volatility": 0.35313717009689455,
            "spread_pct": 0.009233139514163609,
            "spread_ticks": 1.0,
            "amihud": 1.6141317641160185e-10,
            "turnover_ratio": 0.12729861732174433,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 92.831541218638,
            "rank_pca": 41,
            "adv": 11727793.0,
            "trades": 2108.0,
            "volatility": 0.12854505165546576,
            "spread_pct": 0.004524719171663215,
            "spread_ticks": 1.0080889787664307,
            "amihud": 3.8408799545698485e-10,
            "turnover_ratio": 0.0032317256189181485,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.24383308453615124,
              "median": 0.08869309203663919,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8881110962463872,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2293736.4798603957,
              "median": 9567.5,
              "min": 0.0,
              "max": 232041432.0,
              "p5": 0.0,
              "p95": 11466100.949999994,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11049300854193582,
              "median": 0.03300635008261086,
              "min": 0.00026170922585241186,
              "max": 1.2704402515723272,
              "p5": 0.003358439243305416,
              "p95": 0.5056306306306306,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0072652148276420745,
              "median": 0.0001674418899664362,
              "min": 0.0,
              "max": 2.4059060048777274,
              "p5": 0.0,
              "p95": 0.011941364928125241,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0011162155690917434,
              "median": 2.020588993609274e-08,
              "min": 0.0,
              "max": 0.4166666666666667,
              "p5": 0.0,
              "p95": 0.0001194457716196852,
              "count": 401
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 316.9695340501792,
              "median": 6.5,
              "min": 0.0,
              "max": 7289.0,
              "p5": 0.0,
              "p95": 1868.35,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.27225043670909455,
              "median": 0.10570775262552813,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.02576665118230221,
              "p95": 1.0206773138791838,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4813944.291635098,
              "median": 421838.5,
              "min": 44.5,
              "max": 32253258.0,
              "p5": 622.1750000000001,
              "p95": 22539850.449999984,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.038408110679564435,
              "median": 0.00861120125054662,
              "min": 0.004332557752007294,
              "max": 0.15384615384615385,
              "p5": 0.004447173342123722,
              "p95": 0.13808487486398255,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0013602966944160392,
              "median": 0.0005541599005092948,
              "min": 1.9245477179587867e-07,
              "max": 0.0039026226833059055,
              "p5": 3.1321592967795566e-05,
              "p95": 0.0035008762483247123,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.7675217650670333e-09,
              "median": 0.0,
              "min": 0.0,
              "max": 2.099658175649008e-08,
              "p5": 0.0,
              "p95": 1.4001261258304432e-08,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 652.625,
              "median": 144.5,
              "min": 1.0,
              "max": 3613.0,
              "p5": 6.95,
              "p95": 2716.9999999999986,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 11685207.022180133,
              "median": 240943.16654039366,
              "min": 44.5,
              "max": 57899823.300000004,
              "p5": 457.125,
              "p95": 46356815.725,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 589.1666666666666,
              "median": 67.5,
              "min": 1.0,
              "max": 2108.0,
              "p5": 5.25,
              "p95": 1899.25,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.36864230432040473,
              "median": 0.15774232022049234,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.018404750844501577,
              "p95": 1.190494051529131,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04913462550043601,
              "median": 0.009950472039991987,
              "min": 0.004524719171663215,
              "max": 0.15384615384615385,
              "p5": 0.005324041309249343,
              "p95": 0.14258809743031722,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3643257652357756,
              "median": 1.0040444893832152,
              "min": 1.0,
              "max": 9.090909090909092,
              "p5": 1.0,
              "p95": 7.0899209486166015,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.5903471547264443e-09,
              "median": 8.070658820580093e-11,
              "min": 0.0,
              "max": 2.099658175649008e-08,
              "p5": 0.0,
              "p95": 1.5843458316231805e-08,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.021896825107375815,
              "median": 0.0003806411996015498,
              "min": 1.9245477179587867e-07,
              "max": 0.12729861732174433,
              "p5": 2.2427553483224222e-05,
              "p95": 0.09628189439603778,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.005032825132642804,
            "sector": 0.0,
            "peers": 0.0022522522522523403,
            "vs_market": -0.005032825132642804,
            "vs_sector": 0.0,
            "vs_peers": -0.0022522522522523403
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 83.87096774193549,
          "score_pca_percentile": 83.87096774193549,
          "rank_pca": 91,
          "total": 558,
          "adv_notional_sgd": 799528.5,
          "adv_volume_shares": 1196400.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002617594852550044,
          "votes": 483.0,
          "trades": 483.0,
          "spread_pct": 0.00784313725490197,
          "spread_ticks": 1.002724795640327,
          "amihud": 8.32452224276545e-09,
          "volatility": 0.26837268326413216
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5300170077054485,
          "loadings": {
            "log_adv": 0.5442258934488241,
            "log_trades": 0.4995880067876183,
            "log_turnover": 0.5019850703150761,
            "neg_spread": 0.4154040524439197,
            "neg_amihud": 0.07778461992834784,
            "neg_vol": 0.1537205766003475
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 687304.6665403937,
          "peer_median_score_pca": 75.89605734767025,
          "peer_median_trades": 482.5,
          "peer_median_volatility": 0.2323049171087742,
          "peer_median_spread_pct": 0.009976200295793195,
          "peer_median_spread_ticks": 1.0029448165361776,
          "peer_median_amihud": 4.042279135649762e-09,
          "peer_median_turnover_ratio": 0.0009551399167443885,
          "target_vs_peer": {
            "score_pca_delta": 7.97,
            "adv_delta_pct": 16.3,
            "trades_delta_pct": 0.1,
            "volatility_delta_pct": -15.53,
            "spread_pct_delta_pct": 21.38,
            "spread_ticks_delta_pct": -0.02,
            "amihud_delta_pct": -105.94,
            "turnover_ratio_delta_pct": 174.05
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 799528.5,
            "trades": 483.0,
            "volatility": 0.26837268326413216,
            "spread_pct": 0.00784313725490197,
            "spread_ticks": 1.002724795640327,
            "amihud": 8.32452224276545e-09,
            "turnover_ratio": 0.002617594852550044,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.94982078853047,
            "rank_pca": 191,
            "adv": 112686.33308078736,
            "trades": 22.0,
            "volatility": 0.2353033328613543,
            "spread_pct": 0.010944700460829501,
            "spread_ticks": 1.1176470588235294,
            "amihud": 3.782457071321774e-08,
            "turnover_ratio": 0.0002911696745559579,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 46.236559139784944,
            "rank_pca": 301,
            "adv": 7004.2,
            "trades": 17.0,
            "volatility": 1.101328820138667,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.000315703820627539,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 22.043010752688172,
            "rank_pca": 436,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.42148710513453097,
            "spread_pct": 0.09027777777777773,
            "spread_ticks": 7.428571428571429,
            "amihud": 2.6492083834199356e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.84229390681004,
            "rank_pca": 80,
            "adv": 1261923.0,
            "trades": 943.0,
            "volatility": 0.2293065013561941,
            "spread_pct": 0.00777260922685255,
            "spread_ticks": 1.0038372985418265,
            "amihud": 7.015741183414496e-09,
            "turnover_ratio": 0.001594576012861238,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.51971326164875,
            "rank_pca": 26,
            "adv": 8353694.499999999,
            "trades": 2680.0,
            "volatility": 0.2072964063957638,
            "spread_pct": 0.009007700130756888,
            "spread_ticks": 1.0,
            "amihud": 1.0688170878850281e-09,
            "turnover_ratio": 0.01787990388404784,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.31182795698925,
            "rank_pca": 16,
            "adv": 25054129.999999996,
            "trades": 3666.0,
            "volatility": 0.19128110158376735,
            "spread_pct": 0.004485769548383292,
            "spread_ticks": 1.0020523345305286,
            "amihud": 2.2102382661384021e-10,
            "turnover_ratio": 0.006693827905808462,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6472370493162689,
              "median": 0.4034013159639276,
              "min": 0.0,
              "max": 10.33172044141643,
              "p5": 0.0,
              "p95": 2.002191103403035,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3308777.8979608407,
              "median": 8932.5,
              "min": 0.0,
              "max": 270730200.0,
              "p5": 0.0,
              "p95": 13765455.499999994,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11050490347360561,
              "median": 0.03508218119822047,
              "min": 0.00028468976419645744,
              "max": 1.3716475095785436,
              "p5": 0.0036409657461023022,
              "p95": 0.5115096833985253,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007378630126277346,
              "median": 0.00021524958028112956,
              "min": 0.0,
              "max": 2.831059257794476,
              "p5": 0.0,
              "p95": 0.009711780348739272,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0012868258883812394,
              "median": 1.6795132636201003e-07,
              "min": 0.0,
              "max": 0.4166666666666667,
              "p5": 0.0,
              "p95": 0.00013819789939192924,
              "count": 541
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 483.6254480286738,
              "median": 5.5,
              "min": 0.0,
              "max": 11380.0,
              "p5": 0.0,
              "p95": 2920.449999999997,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34908313789060785,
              "median": 0.2323049171087742,
              "min": 0.14609062301989653,
              "max": 1.101328820138667,
              "p5": 0.15718348118945388,
              "p95": 0.863384219887219,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9218544.379135098,
              "median": 807842.25,
              "min": 0.0,
              "max": 60332454.0,
              "p5": 2451.4700000000003,
              "p95": 42862606.149999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0361139292804222,
              "median": 0.00856435152537906,
              "min": 0.004341209680886184,
              "max": 0.15384615384615383,
              "p5": 0.004431884362617922,
              "p95": 0.13159722222222217,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024380509396734152,
              "median": 0.0013512658235841947,
              "min": 0.0,
              "max": 0.007268989272675978,
              "p5": 0.00010190938609458527,
              "p95": 0.00693278941467268,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.386877677217866e-07,
              "median": 6.6406434907655585e-09,
              "min": 0.0,
              "max": 2.6492083834199356e-06,
              "p5": 2.918508333345036e-11,
              "p95": 1.735224048972583e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1187.375,
              "median": 555.0,
              "min": 0.0,
              "max": 5742.0,
              "p5": 5.95,
              "p95": 4315.049999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5798239.672180131,
              "median": 687304.6665403937,
              "min": 0.0,
              "max": 25054129.999999996,
              "p5": 1751.05,
              "p95": 20879021.124999996,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1221.3333333333333,
              "median": 482.5,
              "min": 0.0,
              "max": 3666.0,
              "p5": 4.25,
              "p95": 3419.5,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3976672112450463,
              "median": 0.2323049171087742,
              "min": 0.19128110158376735,
              "max": 1.101328820138667,
              "p5": 0.19528492778676645,
              "p95": 0.931368391387633,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04605578516512563,
              "median": 0.009976200295793195,
              "min": 0.004485769548383292,
              "max": 0.15384615384615383,
              "p5": 0.0053074794680006065,
              "p95": 0.1379540598290598,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.0920180200778855,
              "median": 1.0029448165361776,
              "min": 1.0,
              "max": 7.428571428571429,
              "p5": 1.0,
              "p95": 5.850840336134453,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.4922308937184437e-07,
              "median": 4.042279135649762e-09,
              "min": 0.0,
              "max": 2.6492083834199356e-06,
              "p5": 5.5255956653460053e-11,
              "p95": 1.9963624302432564e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00446253021631684,
              "median": 0.0009551399167443885,
              "min": 0.0,
              "max": 0.01787990388404784,
              "p5": 7.279241863898947e-05,
              "p95": 0.015083384889487995,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.06617647058823561,
            "market": 0.02596477547551812,
            "sector": -0.015719011996606636,
            "peers": -0.023394151376556316,
            "vs_market": -0.09214124606375373,
            "vs_sector": -0.05045745859162898,
            "vs_peers": -0.0427823192116793
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 84.05017921146953,
          "score_pca_percentile": 84.05017921146953,
          "rank_pca": 90,
          "total": 558,
          "adv_notional_sgd": 629544.0,
          "adv_volume_shares": 925800.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002025551081988324,
          "votes": 321.0,
          "trades": 321.0,
          "spread_pct": 0.007331622621388294,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.17278867331627837
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5569530178828404,
          "loadings": {
            "log_adv": 0.5205532425850989,
            "log_trades": 0.46821303352382126,
            "log_turnover": 0.4776700606769672,
            "neg_spread": 0.4242684116807423,
            "neg_amihud": 0.18406162394300818,
            "neg_vol": 0.26028796254684133
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 772930.4165403937,
          "peer_median_score_pca": 75.89605734767025,
          "peer_median_trades": 461.5,
          "peer_median_volatility": 0.20262976305091723,
          "peer_median_spread_pct": 0.009163143232462881,
          "peer_median_spread_ticks": 1.0014467446018531,
          "peer_median_amihud": 2.764220568058663e-09,
          "peer_median_turnover_ratio": 0.0015891203490637864,
          "target_vs_peer": {
            "score_pca_delta": 8.15,
            "adv_delta_pct": -18.6,
            "trades_delta_pct": -30.44,
            "volatility_delta_pct": 14.73,
            "spread_pct_delta_pct": 19.99,
            "spread_ticks_delta_pct": -0.14,
            "amihud_delta_pct": -83.08,
            "turnover_ratio_delta_pct": 27.46
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.05017921146953,
            "rank_pca": 90,
            "adv": 629544.0,
            "trades": 321.0,
            "volatility": 0.17278867331627837,
            "spread_pct": 0.007331622621388294,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.002025551081988324,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 64.87455197132617,
            "rank_pca": 197,
            "adv": 112686.33308078736,
            "trades": 20.0,
            "volatility": 0.2033325258459083,
            "spread_pct": 0.01022912047302292,
            "spread_ticks": 1.0649350649350648,
            "amihud": 3.489506474345647e-08,
            "turnover_ratio": 0.0002884563869654539,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 50.0,
            "rank_pca": 280,
            "adv": 42658.2,
            "trades": 39.0,
            "volatility": 1.3461640423372998,
            "spread_pct": 0.13333333333333333,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0015469992033968483,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 25.806451612903224,
            "rank_pca": 415,
            "adv": 44.5,
            "trades": 1.0,
            "volatility": 0.7906918285592107,
            "spread_pct": 0.09140767824497252,
            "spread_ticks": 7.833333333333333,
            "amihud": 8.783627207968937e-06,
            "turnover_ratio": 1.9245477179587867e-07,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.91756272401435,
            "rank_pca": 74,
            "adv": 1433174.5,
            "trades": 884.0,
            "volatility": 0.18444183903398184,
            "spread_pct": 0.0069686411149825845,
            "spread_ticks": 1.0024061597690086,
            "amihud": 4.698317266192312e-09,
            "turnover_ratio": 0.0016312414947307246,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.87813620071685,
            "rank_pca": 24,
            "adv": 8353694.499999999,
            "trades": 2236.0,
            "volatility": 0.20192700025592614,
            "spread_pct": 0.008097165991902843,
            "spread_ticks": 1.0,
            "amihud": 8.301238699250139e-10,
            "turnover_ratio": 0.01628590926554036,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.84946236559139,
            "rank_pca": 13,
            "adv": 25242931.0,
            "trades": 3621.0,
            "volatility": 0.13716811588530042,
            "spread_pct": 0.004458497793866408,
            "spread_ticks": 1.0004873294346979,
            "amihud": 2.0820116263752226e-10,
            "turnover_ratio": 0.006955974309001116,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6737429784768489,
              "median": 0.4537237394744746,
              "min": 0.0,
              "max": 8.24425508675489,
              "p5": 0.1547392122638277,
              "p95": 1.973248904872976,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2996040.212609261,
              "median": 14388.75,
              "min": 0.0,
              "max": 278393500.0,
              "p5": 0.0,
              "p95": 12332492.799999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09539327762043677,
              "median": 0.02672850383023476,
              "min": 0.00027050510432176795,
              "max": 1.3542204201990415,
              "p5": 0.003536940461532936,
              "p95": 0.48854351179932576,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005694471705419732,
              "median": 0.00029935272710479593,
              "min": 0.0,
              "max": 1.9774569903104608,
              "p5": 0.0,
              "p95": 0.009527282899512091,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.541497454673059e-05,
              "median": 1.490903994728166e-07,
              "min": 0.0,
              "max": 0.002226165307560656,
              "p5": 0.0,
              "p95": 4.513075158544833e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 427.2410394265233,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2418.0499999999993,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.39601043460836793,
              "median": 0.19171808850109984,
              "min": 0.10809449631070123,
              "max": 1.3461640423372998,
              "p5": 0.1275129293253267,
              "p95": 1.1517487675149682,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9811628.629135098,
              "median": 680364.25,
              "min": 44.5,
              "max": 64247854.0,
              "p5": 14959.295,
              "p95": 45714664.149999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.033342682047820454,
              "median": 0.008035120914024892,
              "min": 0.004233817506281146,
              "max": 0.13333333333333333,
              "p5": 0.004326499737755231,
              "p95": 0.11865935405240702,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002571875671719363,
              "median": 0.0015891203490637864,
              "min": 1.9245477179587867e-07,
              "max": 0.007512096170210739,
              "p5": 0.0001010848310395762,
              "p95": 0.007202445315844786,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1044140882738388e-06,
              "median": 4.879525464221817e-09,
              "min": 0.0,
              "max": 8.783627207968937e-06,
              "p5": 2.918508333345036e-11,
              "p95": 5.721570957840014e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1141.0,
              "median": 381.0,
              "min": 1.0,
              "max": 5570.0,
              "p5": 7.65,
              "p95": 4268.699999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5864198.172180131,
              "median": 772930.4165403937,
              "min": 44.5,
              "max": 25242931.0,
              "p5": 10697.925,
              "p95": 21020621.875,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1133.5,
              "median": 461.5,
              "min": 1.0,
              "max": 3621.0,
              "p5": 5.75,
              "p95": 3274.75,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.47728755865293787,
              "median": 0.20262976305091723,
              "min": 0.13716811588530042,
              "max": 1.3461640423372998,
              "p5": 0.14898654667247077,
              "p95": 1.2072959888927774,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04241573949201344,
              "median": 0.009163143232462881,
              "min": 0.004458497793866408,
              "max": 0.13333333333333333,
              "p5": 0.0050860336241454526,
              "p95": 0.12285191956124313,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.1501936479120176,
              "median": 1.0014467446018531,
              "min": 1.0,
              "max": 7.833333333333333,
              "p5": 1.0,
              "p95": 6.141233766233766,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4707098191685245e-06,
              "median": 2.764220568058663e-09,
              "min": 0.0,
              "max": 8.783627207968937e-06,
              "p5": 5.2050290659380566e-11,
              "p95": 6.5964441721625674e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004451462185734383,
              "median": 0.0015891203490637864,
              "min": 1.9245477179587867e-07,
              "max": 0.01628590926554036,
              "p5": 7.225843782021038e-05,
              "p95": 0.01395342552640555,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.06617647058823439,
            "market": 0.06792775469617851,
            "sector": -0.04345560169911744,
            "peers": -0.04945852173283283,
            "vs_market": -0.1341042252844129,
            "vs_sector": -0.022720868889116952,
            "vs_peers": -0.016717948855401565
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.84229390681004,
          "score_pca_percentile": 85.84229390681004,
          "rank_pca": 80,
          "total": 558,
          "adv_notional_sgd": 619303.5,
          "adv_volume_shares": 904150.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0019781832045579423,
          "votes": 389.0,
          "trades": 389.0,
          "spread_pct": 0.007380073800738015,
          "spread_ticks": 1.0,
          "amihud": 3.980548718363465e-09,
          "volatility": 0.13901219018860933
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5697234831224889,
          "loadings": {
            "log_adv": 0.5094917812705859,
            "log_trades": 0.4557201971833247,
            "log_turnover": 0.46294475610320523,
            "neg_spread": 0.42977107294384687,
            "neg_amihud": 0.2019805104876138,
            "neg_vol": 0.3048279477628637
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 671013.6166412513,
          "peer_median_score_pca": 76.52329749103943,
          "peer_median_trades": 379.0,
          "peer_median_volatility": 0.18480640851159008,
          "peer_median_spread_pct": 0.009063064508121966,
          "peer_median_spread_ticks": 1.0037522679316346,
          "peer_median_amihud": 3.0762075833309116e-09,
          "peer_median_turnover_ratio": 0.0012695313433650247,
          "target_vs_peer": {
            "score_pca_delta": 9.32,
            "adv_delta_pct": -7.7,
            "trades_delta_pct": 2.64,
            "volatility_delta_pct": 24.78,
            "spread_pct_delta_pct": 18.57,
            "spread_ticks_delta_pct": -0.37,
            "amihud_delta_pct": -29.4,
            "turnover_ratio_delta_pct": 55.82
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.84229390681004,
            "rank_pca": 80,
            "adv": 619303.5,
            "trades": 389.0,
            "volatility": 0.13901219018860933,
            "spread_pct": 0.007380073800738015,
            "spread_ticks": 1.0,
            "amihud": 3.980548718363465e-09,
            "turnover_ratio": 0.0019781832045579423,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.77060931899642,
            "rank_pca": 192,
            "adv": 92489.73328250242,
            "trades": 20.5,
            "volatility": 0.1723156532887815,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 1.0134169363538295,
            "amihud": 3.142304005074917e-08,
            "turnover_ratio": 0.00023368189373215492,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 51.971326164874554,
            "rank_pca": 269,
            "adv": 39783.8,
            "trades": 36.5,
            "volatility": 1.1892114497280408,
            "spread_pct": 0.10781808891159944,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.001196841198067603,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 19.17562724014337,
            "rank_pca": 452,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5708389910004622,
            "spread_pct": 0.10831368728946546,
            "spread_ticks": 9.026315789473685,
            "amihud": 5.174814574617042e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.27598566308244,
            "rank_pca": 72,
            "adv": 1249537.5,
            "trades": 721.5,
            "volatility": 0.17183270738454137,
            "spread_pct": 0.006512475778450749,
            "spread_ticks": 1.0068890023314194,
            "amihud": 5.138802991109125e-09,
            "turnover_ratio": 0.0013422214886624467,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 96.05734767025089,
            "rank_pca": 23,
            "adv": 7996143.75,
            "trades": 1857.5,
            "volatility": 0.19729716373439868,
            "spread_pct": 0.008075877759962515,
            "spread_ticks": 1.0001924197290017,
            "amihud": 1.0136121755526981e-09,
            "turnover_ratio": 0.016007559765831528,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.4910394265233,
            "rank_pca": 15,
            "adv": 18173019.0,
            "trades": 3146.0,
            "volatility": 0.13063926041393006,
            "spread_pct": 0.004419880108575927,
            "spread_ticks": 1.0006155335318496,
            "amihud": 2.7130394186595765e-10,
            "turnover_ratio": 0.004796093190244207,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6911287686142853,
              "median": 0.44070046803402957,
              "min": 0.0,
              "max": 6.584291069575289,
              "p5": 0.15086057942041392,
              "p95": 2.108587833800838,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2502343.1482691336,
              "median": 10991.025,
              "min": 0.0,
              "max": 240530215.0,
              "p5": 0.0,
              "p95": 10400961.624999996,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0923363837076019,
              "median": 0.028476053662381214,
              "min": 0.0002778915930896397,
              "max": 1.267605633802817,
              "p5": 0.0036093878001467136,
              "p95": 0.46306020197645814,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003186822670593208,
              "median": 0.0002764549244685424,
              "min": 0.0,
              "max": 0.8816162415134138,
              "p5": 0.0,
              "p95": 0.0070276147833225975,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3061497423891439e-05,
              "median": 1.9372335707093265e-07,
              "min": 0.0,
              "max": 0.0012875000252631538,
              "p5": 0.0,
              "p95": 4.516130238396277e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 362.95071684587816,
              "median": 6.5,
              "min": 0.0,
              "max": 10172.0,
              "p5": 0.0,
              "p95": 1995.6749999999997,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.331843743080659,
              "median": 0.1673875898093727,
              "min": 0.11083705015864194,
              "max": 1.1892114497280408,
              "p5": 0.12025988333481398,
              "p95": 0.972781089173388,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8542875.910410313,
              "median": 662481.125,
              "min": 0.0,
              "max": 55261396.0,
              "p5": 13924.330000000002,
              "p95": 39551100.69999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03219139324159462,
              "median": 0.008056849127443248,
              "min": 0.0042692302128051595,
              "max": 0.10831368728946546,
              "p5": 0.004333799618567233,
              "p95": 0.10814022785721235,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022991318976921873,
              "median": 0.0012695313433650247,
              "min": 0.0,
              "max": 0.006623598677944939,
              "p5": 8.178866280625423e-05,
              "p95": 0.006445405507433012,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.526816450362135e-07,
              "median": 4.559675854736295e-09,
              "min": 0.0,
              "max": 5.174814574617042e-06,
              "p5": 3.3848990888613956e-11,
              "p95": 3.3746275375188366e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1077.0625,
              "median": 398.25,
              "min": 0.0,
              "max": 5285.0,
              "p5": 7.175000000000001,
              "p95": 4050.024999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4591828.963880417,
              "median": 671013.6166412513,
              "min": 0.0,
              "max": 18173019.0,
              "p5": 9945.95,
              "p95": 15628800.1875,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 963.6666666666666,
              "median": 379.0,
              "min": 0.0,
              "max": 3146.0,
              "p5": 5.125,
              "p95": 2823.875,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4053558709250258,
              "median": 0.18480640851159008,
              "min": 0.13063926041393006,
              "max": 1.1892114497280408,
              "p5": 0.1409376221565829,
              "p95": 1.0346183350461462,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04086504351738925,
              "median": 0.009063064508121966,
              "min": 0.004419880108575927,
              "max": 0.10831368728946546,
              "p5": 0.004943029026044632,
              "p95": 0.10818978769499896,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.341238280236631,
              "median": 1.0037522679316346,
              "min": 1.0,
              "max": 9.026315789473685,
              "p5": 1.0000481049322505,
              "p95": 7.023091076193721,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.687768889627199e-07,
              "median": 3.0762075833309116e-09,
              "min": 0.0,
              "max": 5.174814574617042e-06,
              "p5": 6.782598546648941e-11,
              "p95": 3.888966690975469e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00392939958942299,
              "median": 0.0012695313433650247,
              "min": 0.0,
              "max": 0.016007559765831528,
              "p5": 5.842047343303873e-05,
              "p95": 0.013204693121934698,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.07299270072992758,
            "market": 0.13132249574788046,
            "sector": -0.041686733515474694,
            "peers": -0.06868859073752076,
            "vs_market": -0.20431519647780805,
            "vs_sector": -0.03130596721445289,
            "vs_peers": -0.004304109992406824
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Tradability is softer today, with trades down 63.6% compared with the 1M average, so immediate access looks thinner than the recent norm.",
        "market_comparison": "Peer standing remains supportive on score, which matters less today because lighter flow can dominate actual access."
      },
      "30d": {
        "liquidity": "Tradability is average over the month, with a solid liquidity score but current conditions not fully matching that monthly picture.",
        "market_comparison": "The stock fell 6.6% over 1M compared with peers down 2.3%, which matters because weaker price performance is not helping attract flow."
      },
      "3m": {
        "liquidity": "3M score 84.1 vs peer median 75.9 (+8.2 pts).",
        "market_comparison": "Relative standing remains ahead of peers on liquidity score, which supports baseline access even as recent trading activity has dropped."
      },
      "6m": {
        "liquidity": "6M score 85.8 vs peer median 76.5 (+9.3 pts).",
        "market_comparison": "That stronger six-month score matters because it places the stock above peers on structural liquidity even though day-to-day conditions are less even."
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
          "median": 0.26658399949551376,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "26.7%",
          "display_range": null,
          "display_text": "26.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 26.7,
          "plain_english": "Market explains about 26.7% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.39939962808660645,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "39.9%",
          "display_range": null,
          "display_text": "39.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 39.9,
          "plain_english": "Sector explains about 39.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.3340163724178798,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "33.4%",
          "display_range": null,
          "display_text": "33.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 33.4,
          "plain_english": "Company-specific explains about 33.4% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.34088523883742816,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.34",
          "display_range": null,
          "display_text": "-0.34",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.34% stock move in the opposite direction in this state.",
          "value_num": -0.34
        },
        "beta_stock_lag": {
          "median": -1.197313053104401,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.20",
          "display_range": null,
          "display_text": "-1.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.2
        },
        "beta_sector": {
          "median": 2.5334915697312397,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.53",
          "display_range": null,
          "display_text": "2.53",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 2.53% stock move in the same direction in this state.",
          "value_num": 2.53
        },
        "beta_market_lag": {
          "median": 0.665507177045184,
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
        "beta_sector_lag": {
          "median": -0.7641380960639326,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.76",
          "display_range": null,
          "display_text": "-0.76",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.76
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
          "period_label": "2025-04-08 to 2025-04-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.43581302290411894,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.6%",
            "display_range": null,
            "display_text": "43.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 43.6,
            "plain_english": "Company-specific explains about 43.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.13628262208008984,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.6%",
              "display_range": null,
              "display_text": "13.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 13.6,
              "plain_english": "Market explains about 13.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4279043550157913,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.8%",
              "display_range": null,
              "display_text": "42.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 42.8,
              "plain_english": "Sector explains about 42.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.43581302290411894,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.6%",
              "display_range": null,
              "display_text": "43.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 43.6,
              "plain_english": "Company-specific explains about 43.6% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though company-driven still has the largest share."
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
            "median": 0.5595856147097945,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.0%",
            "display_range": null,
            "display_text": "56.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 56.0,
            "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.32623166932132414,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.6%",
              "display_range": null,
              "display_text": "32.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 32.6,
              "plain_english": "Market explains about 32.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11418271596888128,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.4%",
              "display_range": null,
              "display_text": "11.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 11.4,
              "plain_english": "Sector explains about 11.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5595856147097945,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.0%",
              "display_range": null,
              "display_text": "56.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.0,
              "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
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
            "median": 0.623404724325774,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.3%",
            "display_range": null,
            "display_text": "62.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 62.3,
            "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1986365726091789,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.9%",
              "display_range": null,
              "display_text": "19.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.9,
              "plain_english": "Market explains about 19.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17795870306504716,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.8%",
              "display_range": null,
              "display_text": "17.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 17.8,
              "plain_english": "Sector explains about 17.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            }
          },
          "summary": "Jun: Still clearly company-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6156446349712698,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.6%",
            "display_range": null,
            "display_text": "61.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 61.6,
            "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15572514972889717,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.6%",
              "display_range": null,
              "display_text": "15.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 15.6,
              "plain_english": "Market explains about 15.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22863021529983313,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.9%",
              "display_range": null,
              "display_text": "22.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 22.9,
              "plain_english": "Sector explains about 22.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6156446349712698,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
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
            "median": 0.4539874874240681,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.4%",
            "display_range": null,
            "display_text": "45.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 45.4,
            "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3380759283078133,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Market explains about 33.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20793658426811862,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.8%",
              "display_range": null,
              "display_text": "20.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.8,
              "plain_english": "Sector explains about 20.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4539874874240681,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
            "median": 0.47594380520699603,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.6%",
            "display_range": null,
            "display_text": "47.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 47.6,
            "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3064722257863164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.6%",
              "display_range": null,
              "display_text": "30.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 30.6,
              "plain_english": "Market explains about 30.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2175839690066876,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.8%",
              "display_range": null,
              "display_text": "21.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.8,
              "plain_english": "Sector explains about 21.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47594380520699603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.48281505654789303,
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
              "median": 0.31423525143745396,
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
              "plain_english": "Market explains about 31.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20294969201465304,
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
              "plain_english": "Sector explains about 20.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48281505654789303,
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
            "median": 0.4219146512462775,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.2%",
            "display_range": null,
            "display_text": "42.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 42.2,
            "plain_english": "Market explains about 42.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4219146512462775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27759022888224905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Sector explains about 27.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.30049511987147337,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.0%",
              "display_range": null,
              "display_text": "30.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 30.0,
              "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
            }
          },
          "summary": "Nov: More mixed, though market-driven still has the largest share."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.7687417314818246,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "76.9%",
            "display_range": null,
            "display_text": "76.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 76.9,
            "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12378967681730312,
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
              "median": 0.10746859170087232,
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
              "median": 0.7687417314818246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
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
            "median": 0.6344784334204319,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.4%",
            "display_range": null,
            "display_text": "63.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 63.4,
            "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20419511848433786,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.4%",
              "display_range": null,
              "display_text": "20.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.4,
              "plain_english": "Market explains about 20.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16132644809523028,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.1%",
              "display_range": null,
              "display_text": "16.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.1,
              "plain_english": "Sector explains about 16.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6344784334204319,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.8241639016384482,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.4%",
            "display_range": null,
            "display_text": "82.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 82.4,
            "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12970195459975553,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Market explains about 13.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.04613414376179617,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.6%",
              "display_range": null,
              "display_text": "4.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 4.6,
              "plain_english": "Sector explains about 4.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8241639016384482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.45949639356129446,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.9%",
            "display_range": null,
            "display_text": "45.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 45.9,
            "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23035600504921908,
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
              "median": 0.31014760138948644,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.0%",
              "display_range": null,
              "display_text": "31.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.0,
              "plain_english": "Sector explains about 31.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.45949639356129446,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-06",
          "n_obs": 3,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.7074319265117541,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "70.7%",
            "display_range": null,
            "display_text": "70.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
            "kind": "share_pct",
            "value_pct": 70.7,
            "plain_english": "Market explains about 70.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.7074319265117541,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "70.7%",
              "display_range": null,
              "display_text": "70.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 70.7,
              "plain_english": "Market explains about 70.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17037391829750717,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.0%",
              "display_range": null,
              "display_text": "17.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 17.0,
              "plain_english": "Sector explains about 17.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.12219415519073867,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.2%",
              "display_range": null,
              "display_text": "12.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 12.2,
              "plain_english": "Company-specific explains about 12.2% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly market-driven, though based on only 3 trading days."
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
            "median": 0.005601401852451505,
            "low": 0.005601401852451505,
            "high": 0.005601401852451505
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
            "median": 0.014980717227981747,
            "low": 0.014980717227981747,
            "high": 0.014980717227981747
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
        "market_link_display": "-0.34",
        "sector_link_display": "2.53",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.34% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.53% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-1.20",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 39.9,
        "driver_share_display": "39.9%",
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
            "median": 0.005601401852451505,
            "low": 0.005601401852451505,
            "high": 0.005601401852451505
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
            "median": 0.014980717227981747,
            "low": 0.014980717227981747,
            "high": 0.014980717227981747
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
        "text": "Liquidity score: 85.8 — Strong",
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
        "text": "Elevated short interest",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Peer-relative liquidity is solid over six months, but current trading conditions look less even because flow is lighter and bid depth is thinner.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is weak, with the stock down 6.6% over one month compared with peers down 2.3% and the market up 2.6%.",
    "perf_insight": "The stock has underperformed over one month, falling 6.6% while peers fell 2.3% and the market rose 2.6%. That matters because weaker price momentum can make trading conditions feel less supportive even with a six-month liquidity score above the peer median.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main current driver, so the tape is still being shaped more by the group than by company-specific news.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 39.9% of price changes. Other influences are market 26.7%, and company-specific 33.4%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 26.7%, sector 39.9%, and company-specific 33.4%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 26.7%, sector 39.9%, and company-specific 33.4%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Sector explains 39.9% of the current move, which keeps the stock tied to broader group direction. That matters more with the shares down 6.6% over one month compared with peers and the market.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves are the biggest influence on the tape at 39.9%.",
      "Monthly change: the pattern has moved away from clearly company-driven in February and March to more market-led in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look balanced overall, but the near-term book is less supportive on the bid side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 7, 2025 to Apr 6, 2026 (252 trading days • 97,900 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The main execution watchpoint is lighter buy-side support, with top-10 bid depth at 0.64x ask depth even as the spread remains 1 tick.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 26.1% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Current trading conditions are defined more by lighter flow and an uneven book than by wider spreads.",
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
    "intraday_insight": "Today’s trade count is 63.6% below the monthly average, pointing to a quieter session. That matters because lighter activity can make access feel thinner when bid depth is already only 0.64x of ask depth.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Near-term liquidity looks quieter rather than disrupted.",
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
    "exec_subtitle": "Liquidity is mixed for its size, with stronger peer standing over six months but thinner day-to-day buy-side support.",
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
        "value": "85.8/100",
        "sub": "Peer median 76.5 (+9.3 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$619.3K",
        "sub": "Peer median S$671.0K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.74%",
        "sub": "1.00 ticks; peers 0.91%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is mixed for the stock’s size. The six-month liquidity score is 85.8, which is 9.3 points above the peer median of 76.5, but today’s trade count is 63.6% below the monthly average and top-10 bid depth is only 0.64x of ask depth. That matters because peer-relative access looks solid over time, while day-to-day execution can still feel thinner on the buy side.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.637",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.78%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.64x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.39% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.72% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.83% with 100.0% fill.",
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
        "value": "86",
        "suffix": "/100",
        "bar_pct": 86,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 80/558",
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
        "value": "0.74",
        "suffix": "%",
        "bar_pct": 7,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.74% • 1.00 ticks vs peers 0.91%",
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
        "value": "619.3K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$671.0K",
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
        "value": "39.9",
        "suffix": "sector",
        "bar_pct": 40,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 26.7% • Company 33.4%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is respectable in peer terms, with a six-month score of 85.8 compared with a peer median of 76.5. That supports the view that access is reasonable for the stock’s size.",
      "Near-term flow is lighter, with today’s trade count down 63.6% compared with the monthly average. That matters because trading can feel less active than the longer-term score implies.",
      "The clearest execution watchpoint is on the buy side, where top-10 bid depth is only 0.64x of ask depth while the spread is 1 tick. That matters because immediate liquidity can feel thinner even though the broader liquidity backdrop remains sound."
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
      "overall": "6M liquidity is strong: score 85.8 vs peer median 76.5 (+9.3 pts). 1D trades down -63.6% vs 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 85.8 vs peer median 76.5 (+9.3 pts)."
      ],
      "concerns": [
        "1D trades down -63.6% vs 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +9.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -7.3%, worse than market and sector, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -7.3% vs market 13.1%.",
        "vs_sector": "Worse than sector: -7.3% vs sector -4.2%.",
        "vs_peers": "In line with peers: -7.3% vs peers -6.9%."
      },
      "adv": {
        "insight": "ADV is S$619.3K, better than market, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$619.3K vs market S$11.0K.",
        "vs_sector": "In line with sector: S$619.3K vs sector S$662.5K.",
        "vs_peers": "In line with peers: S$619.3K vs peers S$671.0K."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.74% vs market 2.85%.",
        "vs_sector": "In line with sector: 0.74% vs sector 0.81%.",
        "vs_peers": "Better than peers: 0.74% vs peers 0.91%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.20%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.20% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.20% vs sector 0.13%.",
        "vs_peers": "Better than peers: 0.20% vs peers 0.13%."
      },
      "volatility": {
        "insight": "Volatility is 13.90%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 13.90% vs market 44.07%.",
        "vs_sector": "Better than sector: 13.90% vs sector 16.74%.",
        "vs_peers": "Better than peers: 13.90% vs peers 18.48%."
      },
      "trades": {
        "insight": "Trades is 389, better than market, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 389 vs market 6.",
        "vs_sector": "In line with sector: 389 vs sector 398.",
        "vs_peers": "In line with peers: 389 vs peers 379."
      },
      "amihud": {
        "insight": "Price impact is 3.98e-09, better than market and sector, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 3.98e-09 vs market 1.94e-07.",
        "vs_sector": "Better than sector: 3.98e-09 vs sector 4.56e-09.",
        "vs_peers": "Worse than peers: 3.98e-09 vs peers 3.08e-09."
      }
    },
    "performance": {
      "overall": "Performance is mixed relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent flow does not show a clear deterioration from the monthly baseline.",
      "conclusion": "The move looks mixed but mainly sector-linked, with clear underperformance relative to peers and the market and thinner near-term buy-side support."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock right now, with sector influence at 39.9%. That matters because the shares have fallen 6.6% over the last month compared with peers down 2.3% and the market up 2.6%, so external pressure is landing on a weaker tape.",
      "beta": "The current pattern looks mixed rather than fully settled because today’s trade count is 63.6% below the monthly average. That makes the sector-led read useful for direction, but less convincing as a durable shift in trading conditions.",
      "rolling_change": "The driver mix has become less company-led over time. February was still clearly company-driven, March was mostly sector, and April has turned more market-led so far."
    },
    "regime": {
      "overall": "High volatility is setting the tone, and that matters because trading conditions are likely to feel less steady even though the broader liquidity picture remains serviceable for the stock's size.",
      "current": "The stock is currently in a high-volatility state, while recent price performance has dropped 6.6% over one month compared with a 2.3% decline for peers and a 2.6% gain for the market.",
      "transitions": "This looks more settled than fleeting, with high volatility typically lasting about 11.3 days, although the sharp 63.6% drop in one-day trades compared with the monthly average keeps the picture mixed.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 11.3 days."
    },
    "execution": {
      "overall": "Displayed liquidity is bid-light rather than fully balanced, because top-10 bid depth is only 0.64x of ask depth even with a 1 tick spread. That matters because the screen looks orderly at the touch, but buy-side support is thinner just below it.",
      "concern": "The clearest stress point is the thinner bid stack, and that matters more with 1D trades down 63.6% from the 1M average because lighter activity can make that imbalance more noticeable in day-to-day execution.",
      "peer_context": "The broader liquidity profile still screens well, with a 6M score of 85.8 compared with a peer median of 76.5, but the current book does not fully confirm that strength. In practical terms, the stock can look solid on a monthly basis while the live book feels less supportive on the buy side today."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and trade value, so the trading base appears balanced rather than clearly retail-led or institution-led.",
      "retail_heavy": "Retail-like trades account for 61.2% of individual trade count but only 10.0% of trade value, while institution-like trades are 10.8% of count and 48.6% of value. That split shows broad day-to-day participation alongside meaningful larger-value involvement, which makes the flow look mixed but still usable.",
      "institutional_gap": "Institution-like activity is a small share of individual trades but nearly half of trade value, so larger-value participation is present even without dominating the tape by count.",
      "peer_comparison": "The mix looks unusual only in that count is led by retail-like trades while value is led by institution-like trades, leaving the stock balanced on participation rather than clearly skewed to one side relative to peers."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner read is that trading is being shaped by a mixed participant base rather than a single dominant source of pressure. The signal is mixed because retail-like trades dominate count while institution-like trades account for much more of the value. That matters because price formation is likely being set by larger-value trades even as day-to-day activity remains broad.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Elevated short interest Recent flow does not show a clear deterioration from the monthly baseline.",
      "level": "Elevated short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "The near-term trend is easing, with short covering down 48% month on month even though levels remain up 123% year on year. That matters because short positioning is still relevant, but the recent direction suggests it is becoming less of a separate source of trading pressure.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 4.2%, continuous 86.4%, and close 8.2%. Current trading concentration score is 0.226.",
      "hhi_interpretation": "Concentrated - liquidity clustered at open/close",
      "best_times": "The continuous session is the clearest window for liquidity because it accounts for the large majority of trading activity at 86.4%.",
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
        "CRPU",
        "ODBU",
        "D5IU",
        "BMGU",
        "AU8U",
        "JYEU",
        "AJBU"
      ],
      "scores": [
        85.84229390681004,
        65.77060931899642,
        51.971326164874554,
        19.17562724014337,
        87.27598566308244,
        96.05734767025089,
        97.4910394265233
      ],
      "is_target": [
        true,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      "adv": [
        619303.5,
        92489.73328250242,
        39783.8,
        0.0,
        1249537.5,
        7996143.75,
        18173019.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.13901219018860933,
        "adv": 619303.5,
        "spread_pct": 0.007380073800738015,
        "turnover_ratio": 0.0019781832045579423,
        "amihud": 3.980548718363465e-09,
        "trades": 389.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6911287686142853,
          "median": 0.44070046803402957,
          "min": 0.0,
          "max": 6.584291069575289,
          "p5": 0.15086057942041392,
          "p95": 2.108587833800838,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2502343.1482691336,
          "median": 10991.025,
          "min": 0.0,
          "max": 240530215.0,
          "p5": 0.0,
          "p95": 10400961.624999996,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0923363837076019,
          "median": 0.028476053662381214,
          "min": 0.0002778915930896397,
          "max": 1.267605633802817,
          "p5": 0.0036093878001467136,
          "p95": 0.46306020197645814,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003186822670593208,
          "median": 0.0002764549244685424,
          "min": 0.0,
          "max": 0.8816162415134138,
          "p5": 0.0,
          "p95": 0.0070276147833225975,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.3061497423891439e-05,
          "median": 1.9372335707093265e-07,
          "min": 0.0,
          "max": 0.0012875000252631538,
          "p5": 0.0,
          "p95": 4.516130238396277e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 362.95071684587816,
          "median": 6.5,
          "min": 0.0,
          "max": 10172.0,
          "p5": 0.0,
          "p95": 1995.6749999999997,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.331843743080659,
          "median": 0.1673875898093727,
          "min": 0.11083705015864194,
          "max": 1.1892114497280408,
          "p5": 0.12025988333481398,
          "p95": 0.972781089173388,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8542875.910410313,
          "median": 662481.125,
          "min": 0.0,
          "max": 55261396.0,
          "p5": 13924.330000000002,
          "p95": 39551100.69999997,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03219139324159462,
          "median": 0.008056849127443248,
          "min": 0.0042692302128051595,
          "max": 0.10831368728946546,
          "p5": 0.004333799618567233,
          "p95": 0.10814022785721235,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0022991318976921873,
          "median": 0.0012695313433650247,
          "min": 0.0,
          "max": 0.006623598677944939,
          "p5": 8.178866280625423e-05,
          "p95": 0.006445405507433012,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.526816450362135e-07,
          "median": 4.559675854736295e-09,
          "min": 0.0,
          "max": 5.174814574617042e-06,
          "p5": 3.3848990888613956e-11,
          "p95": 3.3746275375188366e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1077.0625,
          "median": 398.25,
          "min": 0.0,
          "max": 5285.0,
          "p5": 7.175000000000001,
          "p95": 4050.024999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 4591828.963880417,
          "median": 671013.6166412513,
          "min": 0.0,
          "max": 18173019.0,
          "p5": 9945.95,
          "p95": 15628800.1875,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 963.6666666666666,
          "median": 379.0,
          "min": 0.0,
          "max": 3146.0,
          "p5": 5.125,
          "p95": 2823.875,
          "count": 6
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4053558709250258,
          "median": 0.18480640851159008,
          "min": 0.13063926041393006,
          "max": 1.1892114497280408,
          "p5": 0.1409376221565829,
          "p95": 1.0346183350461462,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04086504351738925,
          "median": 0.009063064508121966,
          "min": 0.004419880108575927,
          "max": 0.10831368728946546,
          "p5": 0.004943029026044632,
          "p95": 0.10818978769499896,
          "count": 6
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.341238280236631,
          "median": 1.0037522679316346,
          "min": 1.0,
          "max": 9.026315789473685,
          "p5": 1.0000481049322505,
          "p95": 7.023091076193721,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 8.687768889627199e-07,
          "median": 3.0762075833309116e-09,
          "min": 0.0,
          "max": 5.174814574617042e-06,
          "p5": 6.782598546648941e-11,
          "p95": 3.888966690975469e-06,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00392939958942299,
          "median": 0.0012695313433650247,
          "min": 0.0,
          "max": 0.016007559765831528,
          "p5": 5.842047343303873e-05,
          "p95": 0.013204693121934698,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.06617647058823561,
        "market": 0.02596477547551812,
        "sector": -0.015719011996606636,
        "peers": -0.023394151376556316
      },
      {
        "horizon": "3M",
        "stock": -0.06617647058823439,
        "market": 0.06792775469617851,
        "sector": -0.04345560169911744,
        "peers": -0.04945852173283283
      },
      {
        "horizon": "6M",
        "stock": -0.07299270072992758,
        "market": 0.13132249574788046,
        "sector": -0.041686733515474694,
        "peers": -0.06868859073752076
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
      "share_market": 0.26658399949551376,
      "share_sector": 0.39939962808660645,
      "share_idio": 0.3340163724178798,
      "beta_market": -0.34088523883742816,
      "beta_sector": 2.5334915697312397,
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
            "median": 0.26658399949551376,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "26.7%",
            "display_range": null,
            "display_text": "26.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 26.7,
            "plain_english": "Market explains about 26.7% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.39939962808660645,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.9%",
            "display_range": null,
            "display_text": "39.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 39.9,
            "plain_english": "Sector explains about 39.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.3340163724178798,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "33.4%",
            "display_range": null,
            "display_text": "33.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 33.4,
            "plain_english": "Company-specific explains about 33.4% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.34088523883742816,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.34",
            "display_range": null,
            "display_text": "-0.34",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.34% stock move in the opposite direction in this state.",
            "value_num": -0.34
          },
          "beta_stock_lag": {
            "median": -1.197313053104401,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.20",
            "display_range": null,
            "display_text": "-1.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.2
          },
          "beta_sector": {
            "median": 2.5334915697312397,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.53",
            "display_range": null,
            "display_text": "2.53",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 2.53% stock move in the same direction in this state.",
            "value_num": 2.53
          },
          "beta_market_lag": {
            "median": 0.665507177045184,
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
          "beta_sector_lag": {
            "median": -0.7641380960639326,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.76",
            "display_range": null,
            "display_text": "-0.76",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.76
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
            "period_label": "2025-04-08 to 2025-04-30",
            "n_obs": 16,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.43581302290411894,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.6%",
              "display_range": null,
              "display_text": "43.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 43.6,
              "plain_english": "Company-specific explains about 43.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.13628262208008984,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.6%",
                "display_range": null,
                "display_text": "13.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 13.6,
                "plain_english": "Market explains about 13.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4279043550157913,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.8%",
                "display_range": null,
                "display_text": "42.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 42.8,
                "plain_english": "Sector explains about 42.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.43581302290411894,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.6%",
                "display_range": null,
                "display_text": "43.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 43.6,
                "plain_english": "Company-specific explains about 43.6% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though company-driven still has the largest share."
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
              "median": 0.5595856147097945,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.0%",
              "display_range": null,
              "display_text": "56.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.0,
              "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.32623166932132414,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.6%",
                "display_range": null,
                "display_text": "32.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 32.6,
                "plain_english": "Market explains about 32.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11418271596888128,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.4%",
                "display_range": null,
                "display_text": "11.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 11.4,
                "plain_english": "Sector explains about 11.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5595856147097945,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.0%",
                "display_range": null,
                "display_text": "56.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 56.0,
                "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
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
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1986365726091789,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.9%",
                "display_range": null,
                "display_text": "19.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.9,
                "plain_english": "Market explains about 19.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17795870306504716,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.8%",
                "display_range": null,
                "display_text": "17.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 17.8,
                "plain_english": "Sector explains about 17.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.623404724325774,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.3%",
                "display_range": null,
                "display_text": "62.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 62.3,
                "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
              }
            },
            "summary": "Jun: Still clearly company-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-01 to 2025-07-31",
            "n_obs": 23,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6156446349712698,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15572514972889717,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.6%",
                "display_range": null,
                "display_text": "15.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 15.6,
                "plain_english": "Market explains about 15.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22863021529983313,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.9%",
                "display_range": null,
                "display_text": "22.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 22.9,
                "plain_english": "Sector explains about 22.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6156446349712698,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.6%",
                "display_range": null,
                "display_text": "61.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 61.6,
                "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
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
              "median": 0.4539874874240681,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3380759283078133,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Market explains about 33.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20793658426811862,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.8%",
                "display_range": null,
                "display_text": "20.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.8,
                "plain_english": "Sector explains about 20.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4539874874240681,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.4%",
                "display_range": null,
                "display_text": "45.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.4,
                "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
              "median": 0.47594380520699603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3064722257863164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.6%",
                "display_range": null,
                "display_text": "30.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 30.6,
                "plain_english": "Market explains about 30.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2175839690066876,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.8%",
                "display_range": null,
                "display_text": "21.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.8,
                "plain_english": "Sector explains about 21.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47594380520699603,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.6%",
                "display_range": null,
                "display_text": "47.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 47.6,
                "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.48281505654789303,
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
                "median": 0.31423525143745396,
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
                "plain_english": "Market explains about 31.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20294969201465304,
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
                "plain_english": "Sector explains about 20.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48281505654789303,
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
              "median": 0.4219146512462775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4219146512462775,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.2%",
                "display_range": null,
                "display_text": "42.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 42.2,
                "plain_english": "Market explains about 42.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27759022888224905,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Sector explains about 27.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.30049511987147337,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.0%",
                "display_range": null,
                "display_text": "30.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 30.0,
                "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
              }
            },
            "summary": "Nov: More mixed, though market-driven still has the largest share."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.7687417314818246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12378967681730312,
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
                "median": 0.10746859170087232,
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
                "median": 0.7687417314818246,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "76.9%",
                "display_range": null,
                "display_text": "76.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 76.9,
                "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
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
              "median": 0.6344784334204319,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20419511848433786,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.4%",
                "display_range": null,
                "display_text": "20.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.4,
                "plain_english": "Market explains about 20.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16132644809523028,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.1%",
                "display_range": null,
                "display_text": "16.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.1,
                "plain_english": "Sector explains about 16.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6344784334204319,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "63.4%",
                "display_range": null,
                "display_text": "63.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 63.4,
                "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.8241639016384482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12970195459975553,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Market explains about 13.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.04613414376179617,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.6%",
                "display_range": null,
                "display_text": "4.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 4.6,
                "plain_english": "Sector explains about 4.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8241639016384482,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "82.4%",
                "display_range": null,
                "display_text": "82.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 82.4,
                "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.45949639356129446,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23035600504921908,
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
                "median": 0.31014760138948644,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.0%",
                "display_range": null,
                "display_text": "31.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.0,
                "plain_english": "Sector explains about 31.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.45949639356129446,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.9%",
                "display_range": null,
                "display_text": "45.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 45.9,
                "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-06",
            "n_obs": 3,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.7074319265117541,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "70.7%",
              "display_range": null,
              "display_text": "70.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 70.7,
              "plain_english": "Market explains about 70.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.7074319265117541,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "70.7%",
                "display_range": null,
                "display_text": "70.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 70.7,
                "plain_english": "Market explains about 70.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17037391829750717,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.0%",
                "display_range": null,
                "display_text": "17.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 17.0,
                "plain_english": "Sector explains about 17.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.12219415519073867,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.2%",
                "display_range": null,
                "display_text": "12.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 12.2,
                "plain_english": "Company-specific explains about 12.2% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly market-driven, though based on only 3 trading days."
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
              "median": 0.005601401852451505,
              "low": 0.005601401852451505,
              "high": 0.005601401852451505
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
              "median": 0.014980717227981747,
              "low": 0.014980717227981747,
              "high": 0.014980717227981747
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
          "market_link_display": "-0.34",
          "sector_link_display": "2.53",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.34% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.53% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-1.20",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 39.9,
          "driver_share_display": "39.9%",
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
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-08 to 2025-04-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: More mixed, though company-driven still has the largest share.",
          "share_market": 0.13628262208008984,
          "share_sector": 0.4279043550157913,
          "share_company": 0.43581302290411894,
          "share_market_display": "13.6%",
          "share_sector_display": "42.8%",
          "share_company_display": "43.6%",
          "dominant_share_display": "43.6%"
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
          "share_market": 0.32623166932132414,
          "share_sector": 0.11418271596888128,
          "share_company": 0.5595856147097945,
          "share_market_display": "32.6%",
          "share_sector_display": "11.4%",
          "share_company_display": "56.0%",
          "dominant_share_display": "56.0%"
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
          "summary": "Jun: Still clearly company-driven.",
          "share_market": 0.1986365726091789,
          "share_sector": 0.17795870306504716,
          "share_company": 0.623404724325774,
          "share_market_display": "19.9%",
          "share_sector_display": "17.8%",
          "share_company_display": "62.3%",
          "dominant_share_display": "62.3%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jul: Still clearly company-driven.",
          "share_market": 0.15572514972889717,
          "share_sector": 0.22863021529983313,
          "share_company": 0.6156446349712698,
          "share_market_display": "15.6%",
          "share_sector_display": "22.9%",
          "share_company_display": "61.6%",
          "dominant_share_display": "61.6%"
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
          "share_market": 0.3380759283078133,
          "share_sector": 0.20793658426811862,
          "share_company": 0.4539874874240681,
          "share_market_display": "33.8%",
          "share_sector_display": "20.8%",
          "share_company_display": "45.4%",
          "dominant_share_display": "45.4%"
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
          "share_market": 0.3064722257863164,
          "share_sector": 0.2175839690066876,
          "share_company": 0.47594380520699603,
          "share_market_display": "30.6%",
          "share_sector_display": "21.8%",
          "share_company_display": "47.6%",
          "dominant_share_display": "47.6%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-01 to 2025-10-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Oct: Mostly company-driven.",
          "share_market": 0.31423525143745396,
          "share_sector": 0.20294969201465304,
          "share_company": 0.48281505654789303,
          "share_market_display": "31.4%",
          "share_sector_display": "20.3%",
          "share_company_display": "48.3%",
          "dominant_share_display": "48.3%"
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
          "summary": "Nov: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4219146512462775,
          "share_sector": 0.27759022888224905,
          "share_company": 0.30049511987147337,
          "share_market_display": "42.2%",
          "share_sector_display": "27.8%",
          "share_company_display": "30.0%",
          "dominant_share_display": "42.2%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Dec: Still clearly company-driven.",
          "share_market": 0.12378967681730312,
          "share_sector": 0.10746859170087232,
          "share_company": 0.7687417314818246,
          "share_market_display": "12.4%",
          "share_sector_display": "10.7%",
          "share_company_display": "76.9%",
          "dominant_share_display": "76.9%"
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
          "share_market": 0.20419511848433786,
          "share_sector": 0.16132644809523028,
          "share_company": 0.6344784334204319,
          "share_market_display": "20.4%",
          "share_sector_display": "16.1%",
          "share_company_display": "63.4%",
          "dominant_share_display": "63.4%"
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
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.12970195459975553,
          "share_sector": 0.04613414376179617,
          "share_company": 0.8241639016384482,
          "share_market_display": "13.0%",
          "share_sector_display": "4.6%",
          "share_company_display": "82.4%",
          "dominant_share_display": "82.4%"
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
          "share_market": 0.23035600504921908,
          "share_sector": 0.31014760138948644,
          "share_company": 0.45949639356129446,
          "share_market_display": "23.0%",
          "share_sector_display": "31.0%",
          "share_company_display": "45.9%",
          "dominant_share_display": "45.9%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-06",
          "n_obs": 3,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Still clearly market-driven, though based on only 3 trading days.",
          "share_market": 0.7074319265117541,
          "share_sector": 0.17037391829750717,
          "share_company": 0.12219415519073867,
          "share_market_display": "70.7%",
          "share_sector_display": "17.0%",
          "share_company_display": "12.2%",
          "dominant_share_display": "70.7%"
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
              "median": 0.005601401852451505,
              "low": 0.005601401852451505,
              "high": 0.005601401852451505
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
              "median": 0.014980717227981747,
              "low": 0.014980717227981747,
              "high": 0.014980717227981747
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
          "price": 0.635,
          "quantity": 914800.0,
          "value": 580898.0
        },
        {
          "level": 2,
          "price": 0.63,
          "quantity": 1814900.0,
          "value": 1143387.0
        },
        {
          "level": 3,
          "price": 0.625,
          "quantity": 269700.0,
          "value": 168562.5
        },
        {
          "level": 4,
          "price": 0.62,
          "quantity": 284100.0,
          "value": 176142.0
        },
        {
          "level": 5,
          "price": 0.615,
          "quantity": 149200.0,
          "value": 91758.0
        },
        {
          "level": 6,
          "price": 0.61,
          "quantity": 159900.0,
          "value": 97539.0
        },
        {
          "level": 7,
          "price": 0.605,
          "quantity": 128000.0,
          "value": 77440.0
        },
        {
          "level": 8,
          "price": 0.6,
          "quantity": 229500.0,
          "value": 137700.0
        },
        {
          "level": 9,
          "price": 0.595,
          "quantity": 79300.0,
          "value": 47183.5
        },
        {
          "level": 10,
          "price": 0.59,
          "quantity": 100.0,
          "value": 59.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.64,
          "quantity": 1393300.0,
          "value": 891712.0
        },
        {
          "level": 2,
          "price": 0.645,
          "quantity": 1198400.0,
          "value": 772968.0
        },
        {
          "level": 3,
          "price": 0.65,
          "quantity": 974200.0,
          "value": 633230.0
        },
        {
          "level": 4,
          "price": 0.655,
          "quantity": 625600.0,
          "value": 409768.0
        },
        {
          "level": 5,
          "price": 0.66,
          "quantity": 150800.0,
          "value": 99528.0
        },
        {
          "level": 6,
          "price": 0.665,
          "quantity": 102800.0,
          "value": 68362.0
        },
        {
          "level": 7,
          "price": 0.67,
          "quantity": 302700.0,
          "value": 202809.0
        },
        {
          "level": 8,
          "price": 0.675,
          "quantity": 85300.0,
          "value": 57577.50000000001
        },
        {
          "level": 9,
          "price": 0.68,
          "quantity": 1121800.0,
          "value": 762824.0
        },
        {
          "level": 10,
          "price": 0.685,
          "quantity": 80800.0,
          "value": 55348.00000000001
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-06 08:59:47.431900",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6375,
        "spread_pct": 0.007843137254901968,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 2520669.0,
        "ask_depth_notional_top10": 3954126.5,
        "bid_ask_depth_ratio": 0.6375
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 252,
        "n_trades_used": 97900,
        "first_trade_date": "2025-04-07",
        "last_trade_date": "2026-04-06",
        "window_label": "Apr 7, 2025 to Apr 6, 2026",
        "window_short_label": "Apr 7, 2025 to Apr 6, 2026",
        "trade_days_label": "252 trading days",
        "trade_count_label": "97,900 trades",
        "window_detail_label": "252 trading days • 97,900 trades",
        "history_note": "Trade-size percentiles use Apr 7, 2025 to Apr 6, 2026 history (252 trading days • 97,900 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3475.0,
            "impact_pct": -0.003922,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.14,
            "pct_of_adv": 0.44
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 8118.35,
            "impact_pct": -0.003922,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.32,
            "pct_of_adv": 1.03
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.003922,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 13.49,
            "pct_of_adv": 43.29
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-06",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8125135567689201664",
            "timestamp": "2026-04-05 22:59:00.792400000",
            "local_timestamp": "2026-04-06 06:59:00",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.00517,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 27.37,
            "price_vs_mid_pct": 8.235,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8131681785044905984",
            "timestamp": "2026-04-06 00:56:28.047300000",
            "local_timestamp": "2026-04-06 08:56:28",
            "posted_price": 0.64,
            "size_shares": 974600.0,
            "notional": 623744.0,
            "impact_pct": -0.004464,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 24.75,
            "price_vs_mid_pct": 0.392,
            "executed_event_count": 0,
            "event_count": 22
          },
          {
            "rank": 3,
            "order_id": "8131681785046007808",
            "timestamp": "2026-04-05 22:59:00.792400000",
            "local_timestamp": "2026-04-06 06:59:00",
            "posted_price": 0.655,
            "size_shares": 500000.0,
            "notional": 327500.0,
            "impact_pct": -0.003922,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 12.99,
            "price_vs_mid_pct": 2.745,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-06",
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
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1958315.0,
            "ask_depth_notional": 4110810.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007905138339920955,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1836449.5,
            "ask_depth_notional": 3945770.5,
            "mid_price": 0.6325000000000001
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007905138339920955,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1838672.5,
            "ask_depth_notional": 3946532.5,
            "mid_price": 0.6325000000000001
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2147380.5,
            "ask_depth_notional": 3940658.5,
            "mid_price": 0.6375
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2160514.0,
            "ask_depth_notional": 3932852.5,
            "mid_price": 0.6375
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2333250.5,
            "ask_depth_notional": 4010716.5,
            "mid_price": 0.6375
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2384482.0,
            "ask_depth_notional": 4019356.5,
            "mid_price": 0.6375
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2397953.0,
            "ask_depth_notional": 4017948.5,
            "mid_price": 0.6375
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2450990.0,
            "ask_depth_notional": 3993564.5,
            "mid_price": 0.6375
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2456934.0,
            "ask_depth_notional": 3988444.5,
            "mid_price": 0.6375
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2467990.5,
            "ask_depth_notional": 3986716.5,
            "mid_price": 0.6375
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2467736.5,
            "ask_depth_notional": 3984360.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2471577.0,
            "ask_depth_notional": 3979240.0,
            "mid_price": 0.6375
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2520669.0,
            "ask_depth_notional": 3954126.5,
            "mid_price": 0.6375
          }
        ],
        "summary": {
          "median_spread_pct": 0.007843137254901968,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2391217.5,
          "median_ask_depth_notional": 3985538.25,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "16:30",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 6.4,
      "peers": [
        {
          "ticker": "AJBU",
          "pct": 4.2
        },
        {
          "ticker": "JYEU",
          "pct": 12.2
        },
        {
          "ticker": "AU8U",
          "pct": 77.9
        },
        {
          "ticker": "ODBU",
          "pct": 957.6
        },
        {
          "ticker": "D5IU",
          "pct": 14280.0
        },
        {
          "ticker": "BMGU",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 152,
          "n_runs": 93,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-06",
          "last_trade_date": "2026-04-06",
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
            "retail_pct": 0.4934210526315789,
            "mixed_pct": 0.17105263157894737,
            "instit_pct": 0.07894736842105263,
            "ambiguous_pct": 0.2565789473684211,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2565789473684211,
            "retail_qty_pct": 0.07071409933026007,
            "mixed_qty_pct": 0.15134382882491085,
            "instit_qty_pct": 0.2701574323736627,
            "ambiguous_qty_pct": 0.5077846394711664,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5077846394711664,
            "retail_notional_pct": 0.07097432821595685,
            "mixed_notional_pct": 0.15175753193738642,
            "instit_notional_pct": 0.26962083211800775,
            "ambiguous_notional_pct": 0.507647307728649,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.507647307728649
          },
          "run_composition": {
            "retail_pct": 0.8064516129032258,
            "mixed_pct": 0.13978494623655913,
            "instit_pct": 0.03225806451612903,
            "ambiguous_pct": 0.021505376344086023,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.021505376344086023,
            "retail_notional_pct": 0.07097432821595685,
            "mixed_notional_pct": 0.15175753193738642,
            "instit_notional_pct": 0.26962083211800775,
            "unclear_notional_pct": 0.507647307728649
          },
          "counts": {
            "trades": {
              "retail": 75,
              "mixed": 26,
              "institutional": 12,
              "ambiguous": 39,
              "unobservable": 0,
              "unclear": 39
            },
            "runs": {
              "retail": 75,
              "mixed": 13,
              "institutional": 3,
              "ambiguous": 2,
              "unobservable": 0,
              "unclear": 2
            }
          },
          "confidence": {
            "high": 0.5053763440860215,
            "medium": 0.3333333333333333,
            "low": 0.0,
            "na": 0.16129032258064516
          },
          "confidence_counts": {
            "high": 47,
            "medium": 31,
            "low": 0,
            "na": 15
          },
          "trade_confidence": {
            "high": 0.3092105263157895,
            "medium": 0.2631578947368421,
            "low": 0.0,
            "na": 0.4276315789473684
          },
          "trade_confidence_counts": {
            "high": 47,
            "medium": 40,
            "low": 0,
            "na": 65
          },
          "observability": {
            "avg_feature_coverage": 0.8580645161290318,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.021505376344086023,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8064516129032258,
          "dominance_gap": 0.6666666666666666,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 90,
              "MULTI_FILL_SINGLE_PRICE": 62
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 152
            },
            "d3_urgency": {
              "IMMEDIATE": 93
            },
            "participant_confidence": {
              "HIGH": 47,
              "MEDIUM": 31,
              "NA": 15
            }
          },
          "trade_size": {
            "avg": 4804.3223684210525,
            "median": 317.5
          },
          "run_size": {
            "avg": 7852.225806451613,
            "median": 254.0,
            "avg_length": 1.086021505376344
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-164",
              "timestamp": "2026-04-06T08:59:30.064900",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56999,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-163",
              "timestamp": "2026-04-06T08:59:29.037300",
              "price": 0.64,
              "size": 100.0,
              "notional": 64.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56998,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-162",
              "timestamp": "2026-04-06T08:59:22.669300",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56997,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-161",
              "timestamp": "2026-04-06T08:59:14.492700",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56996,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-160",
              "timestamp": "2026-04-06T08:58:36.874100",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56995,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-159",
              "timestamp": "2026-04-06T08:58:32.719500",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56994,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-158",
              "timestamp": "2026-04-06T08:58:17.752100",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56993,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-157",
              "timestamp": "2026-04-06T08:58:12.110200",
              "price": 0.635,
              "size": 300.0,
              "notional": 190.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56992,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-156",
              "timestamp": "2026-04-06T08:58:09.309400",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56991,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-155",
              "timestamp": "2026-04-06T08:57:46.636000",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56990,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-154",
              "timestamp": "2026-04-06T08:57:37.391200",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56989,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-153",
              "timestamp": "2026-04-06T08:57:18.396300",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56988,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-152",
              "timestamp": "2026-04-06T08:57:14.903600",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56988,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-151",
              "timestamp": "2026-04-06T08:57:10.750800",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56987,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-150",
              "timestamp": "2026-04-06T08:56:37.244700",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56986,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-149",
              "timestamp": "2026-04-06T08:56:31.315800",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56985,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-148",
              "timestamp": "2026-04-06T08:56:29.930500",
              "price": 0.635,
              "size": 400.0,
              "notional": 254.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56985,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-147",
              "timestamp": "2026-04-06T08:56:18.428600",
              "price": 0.635,
              "size": 1200.0,
              "notional": 762.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56984,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-146",
              "timestamp": "2026-04-06T08:56:13.522000",
              "price": 0.635,
              "size": 400.0,
              "notional": 254.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56984,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-145",
              "timestamp": "2026-04-06T08:56:13.100400",
              "price": 0.64,
              "size": 10000.0,
              "notional": 6400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56983,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-144",
              "timestamp": "2026-04-06T08:56:10.271300",
              "price": 0.64,
              "size": 100.0,
              "notional": 64.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56983,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-143",
              "timestamp": "2026-04-06T08:54:13.317300",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56982,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-142",
              "timestamp": "2026-04-06T08:51:40.778900",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56981,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-141",
              "timestamp": "2026-04-06T08:50:28.303300",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56980,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-140",
              "timestamp": "2026-04-06T08:46:38.760900",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56979,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-139",
              "timestamp": "2026-04-06T08:43:09.669800",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56978,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-138",
              "timestamp": "2026-04-06T08:43:03.318400",
              "price": 0.64,
              "size": 800.0,
              "notional": 512.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 56977,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-137",
              "timestamp": "2026-04-06T08:32:28.413000",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56976,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-136",
              "timestamp": "2026-04-06T08:17:22.282300",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56975,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-135",
              "timestamp": "2026-04-06T08:16:06.312900",
              "price": 0.635,
              "size": 900.0,
              "notional": 571.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 56974,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.4934210526315789,
              "mixed_pct": 0.17105263157894737,
              "instit_pct": 0.07894736842105263,
              "ambiguous_pct": 0.2565789473684211,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2565789473684211,
              "retail_qty_pct": 0.07071409933026007,
              "mixed_qty_pct": 0.15134382882491085,
              "instit_qty_pct": 0.2701574323736627,
              "ambiguous_qty_pct": 0.5077846394711664,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5077846394711664,
              "retail_notional_pct": 0.07097432821595685,
              "mixed_notional_pct": 0.15175753193738642,
              "instit_notional_pct": 0.26962083211800775,
              "ambiguous_notional_pct": 0.507647307728649,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.507647307728649,
              "run_retail_pct": 0.8064516129032258,
              "run_mixed_pct": 0.13978494623655913,
              "run_instit_pct": 0.03225806451612903,
              "run_unclear_pct": 0.021505376344086023,
              "avg_trade_size": 4804.3223684210525,
              "avg_run_notional": 7852.225806451613,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5053763440860215,
              "medium_confidence_pct": 0.3333333333333333,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.16129032258064516,
              "avg_feature_coverage": 0.8580645161290318,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.48215183509301157,
              "mixed_pct": 0.2171945701357466,
              "instit_pct": 0.27702362996480645,
              "ambiguous_pct": 0.023629964806435394,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.023629964806435394,
              "retail_qty_pct": 0.11159319290515478,
              "mixed_qty_pct": 0.22026392104849044,
              "instit_qty_pct": 0.651597239394825,
              "ambiguous_qty_pct": 0.0165456466515298,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0165456466515298,
              "retail_notional_pct": 0.11152129678365226,
              "mixed_notional_pct": 0.22019650192690468,
              "instit_notional_pct": 0.6517354241912748,
              "ambiguous_notional_pct": 0.01654677709816828,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.01654677709816828,
              "run_retail_pct": 0.8038029386343993,
              "run_mixed_pct": 0.1495246326707001,
              "run_instit_pct": 0.018150388936905792,
              "run_unclear_pct": 0.028522039757994815,
              "avg_trade_size": 4986.153846153846,
              "avg_run_notional": 8571.702679343129,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5929127052722558,
              "medium_confidence_pct": 0.22904062229904926,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.1780466724286949,
              "avg_feature_coverage": 0.8611927398444251,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4,
              "mixed_pct": 0.06666666666666667,
              "instit_pct": 0.3333333333333333,
              "ambiguous_pct": 0.2,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2,
              "retail_qty_pct": 0.13928273561301086,
              "mixed_qty_pct": 0.058381984987489574,
              "instit_qty_pct": 0.5879899916597164,
              "ambiguous_qty_pct": 0.21434528773978315,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.21434528773978315,
              "retail_notional_pct": 0.13904338153503892,
              "mixed_notional_pct": 0.05839822024471635,
              "instit_notional_pct": 0.5881535038932146,
              "ambiguous_notional_pct": 0.21440489432703003,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.21440489432703003,
              "run_retail_pct": 0.45454545454545453,
              "run_mixed_pct": 0.09090909090909091,
              "run_instit_pct": 0.18181818181818182,
              "run_unclear_pct": 0.2727272727272727,
              "avg_trade_size": 4075.4666666666667,
              "avg_run_notional": 5557.454545454545,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6363636363636364,
              "na_confidence_pct": 0.36363636363636365,
              "avg_feature_coverage": 0.7954545454545454,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5641025641025641,
              "mixed_pct": 0.38461538461538464,
              "instit_pct": 0.05128205128205128,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.19518518518518518,
              "mixed_qty_pct": 0.73,
              "instit_qty_pct": 0.07481481481481482,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.19492464349147065,
              "mixed_notional_pct": 0.7300900623068972,
              "instit_notional_pct": 0.0749852942016322,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.7333333333333333,
              "run_mixed_pct": 0.25,
              "run_instit_pct": 0.016666666666666666,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 2244.8846153846152,
              "avg_run_notional": 2918.35,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.23333333333333334,
              "medium_confidence_pct": 0.43333333333333335,
              "low_confidence_pct": 0.08333333333333333,
              "na_confidence_pct": 0.25,
              "avg_feature_coverage": 0.8650000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.34038950042337,
              "mixed_pct": 0.32260795935647757,
              "instit_pct": 0.2193056731583404,
              "ambiguous_pct": 0.11515664690939881,
              "unobservable_pct": 0.002540220152413209,
              "unclear_pct": 0.11769686706181201,
              "retail_qty_pct": 0.00508231241825567,
              "mixed_qty_pct": 0.035176983432913735,
              "instit_qty_pct": 0.0726663342795429,
              "ambiguous_qty_pct": 0.014011666063075376,
              "unobservable_qty_pct": 0.8730627038062123,
              "unclear_qty_pct": 0.8870743698692877,
              "retail_notional_pct": 0.005085462729526222,
              "mixed_notional_pct": 0.03524024591903101,
              "instit_notional_pct": 0.0725250579245563,
              "ambiguous_notional_pct": 0.01408816149266088,
              "unobservable_notional_pct": 0.8730610719342256,
              "unclear_notional_pct": 0.8871492334268865,
              "run_retail_pct": 0.7655038759689923,
              "run_mixed_pct": 0.18604651162790697,
              "run_instit_pct": 0.027131782945736434,
              "run_unclear_pct": 0.02131782945736434,
              "avg_trade_size": 48744.06256562236,
              "avg_run_notional": 111563.44552325581,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4806201550387597,
              "medium_confidence_pct": 0.31007751937984496,
              "low_confidence_pct": 0.001937984496124031,
              "na_confidence_pct": 0.20736434108527133,
              "avg_feature_coverage": 0.8752906976744185,
              "observable_run_pct": 0.9941860465116279,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8666666666666667,
              "mixed_pct": 0.13333333333333333,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.04652936689549962,
              "mixed_qty_pct": 0.9534706331045004,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.04616558565433041,
              "mixed_notional_pct": 0.9538344143456696,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8666666666666667,
              "run_mixed_pct": 0.13333333333333333,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 122.3133333333333,
              "avg_run_notional": 122.3133333333333,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.8666666666666667,
              "na_confidence_pct": 0.13333333333333333,
              "avg_feature_coverage": 0.8499999999999999,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 1.0,
              "unclear_pct": 1.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 1.0,
              "unclear_qty_pct": 1.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 1.0,
              "unclear_notional_pct": 1.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 44.5,
              "avg_run_notional": null,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": null,
              "observable_run_pct": 1.0,
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
          "n_trades": 9351,
          "n_runs": 6359,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-06",
          "last_trade_date": "2026-04-06",
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
            "retail_pct": 0.5596192920543257,
            "mixed_pct": 0.24147150037429152,
            "instit_pct": 0.14896802481018073,
            "ambiguous_pct": 0.04994118276120201,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04994118276120201,
            "retail_qty_pct": 0.08313323572474378,
            "mixed_qty_pct": 0.30301976573938505,
            "instit_qty_pct": 0.45986090775988286,
            "ambiguous_qty_pct": 0.1539860907759883,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1539860907759883,
            "retail_notional_pct": 0.08334512661799767,
            "mixed_notional_pct": 0.3042248647112328,
            "instit_notional_pct": 0.45908195862984136,
            "ambiguous_notional_pct": 0.1533480500409282,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1533480500409282
          },
          "run_composition": {
            "retail_pct": 0.8169523509985847,
            "mixed_pct": 0.15867274728730932,
            "instit_pct": 0.01541122818053153,
            "ambiguous_pct": 0.00896367353357446,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.00896367353357446,
            "retail_notional_pct": 0.08334512661799767,
            "mixed_notional_pct": 0.3042248647112328,
            "instit_notional_pct": 0.45908195862984136,
            "unclear_notional_pct": 0.1533480500409282
          },
          "counts": {
            "trades": {
              "retail": 5233,
              "mixed": 2258,
              "institutional": 1393,
              "ambiguous": 467,
              "unobservable": 0,
              "unclear": 467
            },
            "runs": {
              "retail": 5195,
              "mixed": 1009,
              "institutional": 98,
              "ambiguous": 57,
              "unobservable": 0,
              "unclear": 57
            }
          },
          "confidence": {
            "high": 0.5021229753105835,
            "medium": 0.30272055354615507,
            "low": 0.027520050322377733,
            "na": 0.16763642082088379
          },
          "confidence_counts": {
            "high": 3193,
            "medium": 1925,
            "low": 175,
            "na": 1066
          },
          "trade_confidence": {
            "high": 0.3997433429579724,
            "medium": 0.2791145332050048,
            "low": 0.029729440701529247,
            "na": 0.2914126831354935
          },
          "trade_confidence_counts": {
            "high": 3738,
            "medium": 2610,
            "low": 278,
            "na": 2725
          },
          "observability": {
            "avg_feature_coverage": 0.8651674791633902,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.00896367353357446,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8169523509985847,
          "dominance_gap": 0.6582796037112754,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 6892,
              "MULTI_FILL_SINGLE_PRICE": 2393,
              "WALK_BOOK": 66
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 8801,
              "MOMENTUM_REACTIVE": 327,
              "PERSISTENT_POSITIVE_IMPACT": 215,
              "UNOBSERVABLE": 7,
              "SHORT_HORIZON_POSITIVE_IMPACT": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 6295,
              "ADAPTIVE": 64
            },
            "participant_confidence": {
              "HIGH": 3193,
              "MEDIUM": 1925,
              "NA": 1066,
              "LOW": 175
            }
          },
          "trade_size": {
            "avg": 1902.3717784194205,
            "median": 127.0
          },
          "run_size": {
            "avg": 2797.464774335587,
            "median": 127.0,
            "avg_length": 1.1541122818053153
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-164",
              "timestamp": "2026-04-06T08:59:30.064900",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56999,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-163",
              "timestamp": "2026-04-06T08:59:29.037300",
              "price": 0.64,
              "size": 100.0,
              "notional": 64.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56998,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-162",
              "timestamp": "2026-04-06T08:59:22.669300",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56997,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-161",
              "timestamp": "2026-04-06T08:59:14.492700",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56996,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-160",
              "timestamp": "2026-04-06T08:58:36.874100",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56995,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-159",
              "timestamp": "2026-04-06T08:58:32.719500",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56994,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-158",
              "timestamp": "2026-04-06T08:58:17.752100",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56993,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-157",
              "timestamp": "2026-04-06T08:58:12.110200",
              "price": 0.635,
              "size": 300.0,
              "notional": 190.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56992,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-156",
              "timestamp": "2026-04-06T08:58:09.309400",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56991,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-155",
              "timestamp": "2026-04-06T08:57:46.636000",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56990,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-154",
              "timestamp": "2026-04-06T08:57:37.391200",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56989,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-153",
              "timestamp": "2026-04-06T08:57:18.396300",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56988,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-152",
              "timestamp": "2026-04-06T08:57:14.903600",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56988,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-151",
              "timestamp": "2026-04-06T08:57:10.750800",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56987,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-150",
              "timestamp": "2026-04-06T08:56:37.244700",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56986,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-149",
              "timestamp": "2026-04-06T08:56:31.315800",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56985,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-148",
              "timestamp": "2026-04-06T08:56:29.930500",
              "price": 0.635,
              "size": 400.0,
              "notional": 254.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56985,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-147",
              "timestamp": "2026-04-06T08:56:18.428600",
              "price": 0.635,
              "size": 1200.0,
              "notional": 762.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56984,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-146",
              "timestamp": "2026-04-06T08:56:13.522000",
              "price": 0.635,
              "size": 400.0,
              "notional": 254.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56984,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-145",
              "timestamp": "2026-04-06T08:56:13.100400",
              "price": 0.64,
              "size": 10000.0,
              "notional": 6400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56983,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-144",
              "timestamp": "2026-04-06T08:56:10.271300",
              "price": 0.64,
              "size": 100.0,
              "notional": 64.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56983,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-143",
              "timestamp": "2026-04-06T08:54:13.317300",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56982,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-142",
              "timestamp": "2026-04-06T08:51:40.778900",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56981,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-141",
              "timestamp": "2026-04-06T08:50:28.303300",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56980,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-140",
              "timestamp": "2026-04-06T08:46:38.760900",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56979,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-139",
              "timestamp": "2026-04-06T08:43:09.669800",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56978,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-138",
              "timestamp": "2026-04-06T08:43:03.318400",
              "price": 0.64,
              "size": 800.0,
              "notional": 512.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 56977,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-137",
              "timestamp": "2026-04-06T08:32:28.413000",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56976,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-136",
              "timestamp": "2026-04-06T08:17:22.282300",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56975,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-135",
              "timestamp": "2026-04-06T08:16:06.312900",
              "price": 0.635,
              "size": 900.0,
              "notional": 571.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 56974,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5596192920543257,
              "mixed_pct": 0.24147150037429152,
              "instit_pct": 0.14896802481018073,
              "ambiguous_pct": 0.04994118276120201,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04994118276120201,
              "retail_qty_pct": 0.08313323572474378,
              "mixed_qty_pct": 0.30301976573938505,
              "instit_qty_pct": 0.45986090775988286,
              "ambiguous_qty_pct": 0.1539860907759883,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1539860907759883,
              "retail_notional_pct": 0.08334512661799767,
              "mixed_notional_pct": 0.3042248647112328,
              "instit_notional_pct": 0.45908195862984136,
              "ambiguous_notional_pct": 0.1533480500409282,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.1533480500409282,
              "run_retail_pct": 0.8169523509985847,
              "run_mixed_pct": 0.15867274728730932,
              "run_instit_pct": 0.01541122818053153,
              "run_unclear_pct": 0.00896367353357446,
              "avg_trade_size": 1902.3717784194205,
              "avg_run_notional": 2797.464774335587,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5021229753105835,
              "medium_confidence_pct": 0.30272055354615507,
              "low_confidence_pct": 0.027520050322377733,
              "na_confidence_pct": 0.16763642082088379,
              "avg_feature_coverage": 0.8651674791633902,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.36149696952121335,
              "mixed_pct": 0.3157497897514717,
              "instit_pct": 0.27597656816402283,
              "ambiguous_pct": 0.04599367804425369,
              "unobservable_pct": 0.0007829945190383667,
              "unclear_pct": 0.04677667256329206,
              "retail_qty_pct": 0.09199512228256197,
              "mixed_qty_pct": 0.21516651562623598,
              "instit_qty_pct": 0.6170601671131961,
              "ambiguous_qty_pct": 0.057580044263157715,
              "unobservable_qty_pct": 0.018198150714848278,
              "unclear_qty_pct": 0.07577819497800599,
              "retail_notional_pct": 0.09177688510007824,
              "mixed_notional_pct": 0.2153088215873249,
              "instit_notional_pct": 0.61702272254326,
              "ambiguous_notional_pct": 0.057614669691548485,
              "unobservable_notional_pct": 0.018276901077788475,
              "unclear_notional_pct": 0.07589157076933696,
              "run_retail_pct": 0.7235058065300662,
              "run_mixed_pct": 0.23460205508603393,
              "run_instit_pct": 0.022253298473885814,
              "run_unclear_pct": 0.019638839910013983,
              "avg_trade_size": 6044.220512136416,
              "avg_run_notional": 12672.393501550436,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3358667234146045,
              "medium_confidence_pct": 0.3678786404815468,
              "low_confidence_pct": 0.04201374110780082,
              "na_confidence_pct": 0.2542408949960479,
              "avg_feature_coverage": 0.8817732717212864,
              "observable_run_pct": 0.9994223870614701,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4592362689131519,
              "mixed_pct": 0.29584880563099264,
              "instit_pct": 0.1927617358532395,
              "ambiguous_pct": 0.052153189602615974,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.052153189602615974,
              "retail_qty_pct": 0.09981960911160598,
              "mixed_qty_pct": 0.2797178437690499,
              "instit_qty_pct": 0.5452482551846829,
              "ambiguous_qty_pct": 0.07521429193466117,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07521429193466117,
              "retail_notional_pct": 0.09974654519800609,
              "mixed_notional_pct": 0.27975367529430845,
              "instit_notional_pct": 0.5452681243376974,
              "ambiguous_notional_pct": 0.07523165516998798,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07523165516998798,
              "run_retail_pct": 0.7731681551906271,
              "run_mixed_pct": 0.19715739940459043,
              "run_instit_pct": 0.019878997407087293,
              "run_unclear_pct": 0.00979544799769519,
              "avg_trade_size": 1443.3145264091338,
              "avg_run_notional": 2500.885815807164,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4585614136175934,
              "medium_confidence_pct": 0.3034668203207529,
              "low_confidence_pct": 0.031018918659368098,
              "na_confidence_pct": 0.20695284740228562,
              "avg_feature_coverage": 0.8761211946605204,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2847682119205298,
              "mixed_pct": 0.09536423841059603,
              "instit_pct": 0.2993377483443709,
              "ambiguous_pct": 0.3205298013245033,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3205298013245033,
              "retail_qty_pct": 0.05030838069899625,
              "mixed_qty_pct": 0.07553167596703696,
              "instit_qty_pct": 0.5378781334761502,
              "ambiguous_qty_pct": 0.33628180985781664,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.33628180985781664,
              "retail_notional_pct": 0.050324721098599236,
              "mixed_notional_pct": 0.07581151398473232,
              "instit_notional_pct": 0.5380090317885938,
              "ambiguous_notional_pct": 0.3358547331280747,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3358547331280747,
              "run_retail_pct": 0.5039164490861618,
              "run_mixed_pct": 0.13054830287206268,
              "run_instit_pct": 0.12010443864229765,
              "run_unclear_pct": 0.2454308093994778,
              "avg_trade_size": 3898.8119205298012,
              "avg_run_notional": 7685.647519582246,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.21409921671018275,
              "medium_confidence_pct": 0.08877284595300261,
              "low_confidence_pct": 0.32114882506527415,
              "na_confidence_pct": 0.37597911227154046,
              "avg_feature_coverage": 0.8331592689295036,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.48275926865475316,
              "mixed_pct": 0.3602984008869346,
              "instit_pct": 0.11314053779807204,
              "ambiguous_pct": 0.043651464757502305,
              "unobservable_pct": 0.00015032790273784692,
              "unclear_pct": 0.04380179266024015,
              "retail_qty_pct": 0.08689832451461156,
              "mixed_qty_pct": 0.2583507059618942,
              "instit_qty_pct": 0.39806603002659147,
              "ambiguous_qty_pct": 0.03670823882985408,
              "unobservable_qty_pct": 0.2199767006670487,
              "unclear_qty_pct": 0.25668493949690274,
              "retail_notional_pct": 0.08732700785295279,
              "mixed_notional_pct": 0.259241748682809,
              "instit_notional_pct": 0.3990236758908904,
              "ambiguous_notional_pct": 0.03694426299998033,
              "unobservable_notional_pct": 0.21746330457336735,
              "unclear_notional_pct": 0.2544075675733477,
              "run_retail_pct": 0.7575431034482759,
              "run_mixed_pct": 0.23038793103448277,
              "run_instit_pct": 0.0045566502463054185,
              "run_unclear_pct": 0.007512315270935961,
              "avg_trade_size": 4466.723190709736,
              "avg_run_notional": 7318.522415024631,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3624692118226601,
              "medium_confidence_pct": 0.35095443349753697,
              "low_confidence_pct": 0.048676108374384235,
              "na_confidence_pct": 0.23790024630541873,
              "avg_feature_coverage": 0.8871813423645318,
              "observable_run_pct": 0.9997536945812808,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.10410557184750734,
              "mixed_pct": 0.35777126099706746,
              "instit_pct": 0.0747800586510264,
              "ambiguous_pct": 0.45454545454545453,
              "unobservable_pct": 0.008797653958944282,
              "unclear_pct": 0.4633431085043988,
              "retail_qty_pct": 0.05219454329774614,
              "mixed_qty_pct": 0.15480427046263345,
              "instit_qty_pct": 0.370699881376038,
              "ambiguous_qty_pct": 0.3790035587188612,
              "unobservable_qty_pct": 0.04329774614472123,
              "unclear_qty_pct": 0.4223013048635824,
              "retail_notional_pct": 0.053582425136408554,
              "mixed_notional_pct": 0.16463545619889156,
              "instit_notional_pct": 0.3536669196729059,
              "ambiguous_notional_pct": 0.3868560871869048,
              "unobservable_notional_pct": 0.041259111804889226,
              "unclear_notional_pct": 0.428115198991794,
              "run_retail_pct": 0.3959731543624161,
              "run_mixed_pct": 0.28187919463087246,
              "run_instit_pct": 0.06711409395973154,
              "run_unclear_pct": 0.2550335570469799,
              "avg_trade_size": 102.38563049853373,
              "avg_run_notional": 468.63758389261744,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.2751677852348993,
              "low_confidence_pct": 0.18791946308724833,
              "na_confidence_pct": 0.5369127516778524,
              "avg_feature_coverage": 0.9137583892617448,
              "observable_run_pct": 0.9932885906040269,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7478813559322034,
              "mixed_pct": 0.24152542372881355,
              "instit_pct": 0.01059322033898305,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.14206916848529727,
              "mixed_qty_pct": 0.7273964685931691,
              "instit_qty_pct": 0.13053436292153364,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.14435909090653914,
              "mixed_notional_pct": 0.7321393651884937,
              "instit_notional_pct": 0.12350154390496709,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8405797101449275,
              "run_mixed_pct": 0.1570048309178744,
              "run_instit_pct": 0.0024154589371980675,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 1132.1858050847457,
              "avg_run_notional": 1290.8012077294684,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6352657004830918,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.20772946859903382,
              "na_confidence_pct": 0.1570048309178744,
              "avg_feature_coverage": 0.8518115942028982,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "3m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 20578,
          "n_runs": 14420,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-05",
          "last_trade_date": "2026-04-06",
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
            "retail_pct": 0.5843133443483332,
            "mixed_pct": 0.24302653319078626,
            "instit_pct": 0.13009038779278842,
            "ambiguous_pct": 0.042569734668092135,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.042569734668092135,
            "retail_qty_pct": 0.07540247974309351,
            "mixed_qty_pct": 0.3151331320048489,
            "instit_qty_pct": 0.47286318878798833,
            "ambiguous_qty_pct": 0.13660119946406923,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13660119946406923,
            "retail_notional_pct": 0.07543806756600709,
            "mixed_notional_pct": 0.31614122110180604,
            "instit_notional_pct": 0.4722370616480959,
            "ambiguous_notional_pct": 0.136183649684091,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.136183649684091
          },
          "run_composition": {
            "retail_pct": 0.829126213592233,
            "mixed_pct": 0.1486130374479889,
            "instit_pct": 0.015048543689320388,
            "ambiguous_pct": 0.007212205270457697,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.007212205270457697,
            "retail_notional_pct": 0.07543806756600709,
            "mixed_notional_pct": 0.31614122110180604,
            "instit_notional_pct": 0.4722370616480959,
            "unclear_notional_pct": 0.136183649684091
          },
          "counts": {
            "trades": {
              "retail": 12024,
              "mixed": 5001,
              "institutional": 2677,
              "ambiguous": 876,
              "unobservable": 0,
              "unclear": 876
            },
            "runs": {
              "retail": 11956,
              "mixed": 2143,
              "institutional": 217,
              "ambiguous": 104,
              "unobservable": 0,
              "unclear": 104
            }
          },
          "confidence": {
            "high": 0.5443134535367545,
            "medium": 0.2804438280166435,
            "low": 0.019417475728155338,
            "na": 0.1558252427184466
          },
          "confidence_counts": {
            "high": 7849,
            "medium": 4044,
            "low": 280,
            "na": 2247
          },
          "trade_confidence": {
            "high": 0.42249003790455825,
            "medium": 0.2711147827777238,
            "low": 0.02079891145883954,
            "na": 0.2855962678588784
          },
          "trade_confidence_counts": {
            "high": 8694,
            "medium": 5579,
            "low": 428,
            "na": 5877
          },
          "observability": {
            "avg_feature_coverage": 0.8633668515950067,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.007212205270457697,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.829126213592233,
          "dominance_gap": 0.6805131761442441,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 15318,
              "MULTI_FILL_SINGLE_PRICE": 5146,
              "WALK_BOOK": 114
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 19805,
              "MOMENTUM_REACTIVE": 485,
              "PERSISTENT_POSITIVE_IMPACT": 277,
              "UNOBSERVABLE": 10,
              "SHORT_HORIZON_POSITIVE_IMPACT": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 14315,
              "ADAPTIVE": 105
            },
            "participant_confidence": {
              "HIGH": 7849,
              "MEDIUM": 4044,
              "NA": 2247,
              "LOW": 280
            }
          },
          "trade_size": {
            "avg": 2456.799203032365,
            "median": 136.0
          },
          "run_size": {
            "avg": 3505.9649098474342,
            "median": 128.0,
            "avg_length": 1.133633841886269
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-164",
              "timestamp": "2026-04-06T08:59:30.064900",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56999,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-163",
              "timestamp": "2026-04-06T08:59:29.037300",
              "price": 0.64,
              "size": 100.0,
              "notional": 64.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56998,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-162",
              "timestamp": "2026-04-06T08:59:22.669300",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56997,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-161",
              "timestamp": "2026-04-06T08:59:14.492700",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56996,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-160",
              "timestamp": "2026-04-06T08:58:36.874100",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56995,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-159",
              "timestamp": "2026-04-06T08:58:32.719500",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56994,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-158",
              "timestamp": "2026-04-06T08:58:17.752100",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56993,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-157",
              "timestamp": "2026-04-06T08:58:12.110200",
              "price": 0.635,
              "size": 300.0,
              "notional": 190.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56992,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-156",
              "timestamp": "2026-04-06T08:58:09.309400",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56991,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-155",
              "timestamp": "2026-04-06T08:57:46.636000",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56990,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-154",
              "timestamp": "2026-04-06T08:57:37.391200",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56989,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-153",
              "timestamp": "2026-04-06T08:57:18.396300",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56988,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-152",
              "timestamp": "2026-04-06T08:57:14.903600",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56988,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-151",
              "timestamp": "2026-04-06T08:57:10.750800",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56987,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-150",
              "timestamp": "2026-04-06T08:56:37.244700",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56986,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-149",
              "timestamp": "2026-04-06T08:56:31.315800",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56985,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-148",
              "timestamp": "2026-04-06T08:56:29.930500",
              "price": 0.635,
              "size": 400.0,
              "notional": 254.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56985,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-147",
              "timestamp": "2026-04-06T08:56:18.428600",
              "price": 0.635,
              "size": 1200.0,
              "notional": 762.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56984,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-146",
              "timestamp": "2026-04-06T08:56:13.522000",
              "price": 0.635,
              "size": 400.0,
              "notional": 254.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56984,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-145",
              "timestamp": "2026-04-06T08:56:13.100400",
              "price": 0.64,
              "size": 10000.0,
              "notional": 6400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56983,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-144",
              "timestamp": "2026-04-06T08:56:10.271300",
              "price": 0.64,
              "size": 100.0,
              "notional": 64.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56983,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-143",
              "timestamp": "2026-04-06T08:54:13.317300",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56982,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-142",
              "timestamp": "2026-04-06T08:51:40.778900",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56981,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-141",
              "timestamp": "2026-04-06T08:50:28.303300",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56980,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-140",
              "timestamp": "2026-04-06T08:46:38.760900",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56979,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-139",
              "timestamp": "2026-04-06T08:43:09.669800",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56978,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-138",
              "timestamp": "2026-04-06T08:43:03.318400",
              "price": 0.64,
              "size": 800.0,
              "notional": 512.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 56977,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-137",
              "timestamp": "2026-04-06T08:32:28.413000",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56976,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-136",
              "timestamp": "2026-04-06T08:17:22.282300",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56975,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-135",
              "timestamp": "2026-04-06T08:16:06.312900",
              "price": 0.635,
              "size": 900.0,
              "notional": 571.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 56974,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5843133443483332,
              "mixed_pct": 0.24302653319078626,
              "instit_pct": 0.13009038779278842,
              "ambiguous_pct": 0.042569734668092135,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.042569734668092135,
              "retail_qty_pct": 0.07540247974309351,
              "mixed_qty_pct": 0.3151331320048489,
              "instit_qty_pct": 0.47286318878798833,
              "ambiguous_qty_pct": 0.13660119946406923,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.13660119946406923,
              "retail_notional_pct": 0.07543806756600709,
              "mixed_notional_pct": 0.31614122110180604,
              "instit_notional_pct": 0.4722370616480959,
              "ambiguous_notional_pct": 0.136183649684091,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.136183649684091,
              "run_retail_pct": 0.829126213592233,
              "run_mixed_pct": 0.1486130374479889,
              "run_instit_pct": 0.015048543689320388,
              "run_unclear_pct": 0.007212205270457697,
              "avg_trade_size": 2456.799203032365,
              "avg_run_notional": 3505.9649098474342,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5443134535367545,
              "medium_confidence_pct": 0.2804438280166435,
              "low_confidence_pct": 0.019417475728155338,
              "na_confidence_pct": 0.1558252427184466,
              "avg_feature_coverage": 0.8633668515950067,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3800379304100868,
              "mixed_pct": 0.3458767356974716,
              "instit_pct": 0.22646742082741664,
              "ambiguous_pct": 0.04713663524859667,
              "unobservable_pct": 0.0004812778164282515,
              "unclear_pct": 0.04761791306502492,
              "retail_qty_pct": 0.09855900621245074,
              "mixed_qty_pct": 0.23248078265013986,
              "instit_qty_pct": 0.6042223806230048,
              "ambiguous_qty_pct": 0.04833642221128352,
              "unobservable_qty_pct": 0.016401408303121104,
              "unclear_qty_pct": 0.06473783051440463,
              "retail_notional_pct": 0.09845293244606573,
              "mixed_notional_pct": 0.2325551091790874,
              "instit_notional_pct": 0.6042195867185236,
              "ambiguous_notional_pct": 0.048482695618948385,
              "unobservable_notional_pct": 0.01628967603737485,
              "unclear_notional_pct": 0.06477237165632324,
              "run_retail_pct": 0.7203603026391414,
              "run_mixed_pct": 0.24979035738177569,
              "run_instit_pct": 0.0151319570727295,
              "run_unclear_pct": 0.01471738290635335,
              "avg_trade_size": 6497.2587309037535,
              "avg_run_notional": 12847.10431958015,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3145487265977594,
              "medium_confidence_pct": 0.3692159837185418,
              "low_confidence_pct": 0.05172754939556971,
              "na_confidence_pct": 0.26450774028812907,
              "avg_feature_coverage": 0.8866492985216662,
              "observable_run_pct": 0.9994912044321748,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4674076053870254,
              "mixed_pct": 0.32897530699214517,
              "instit_pct": 0.1571933419454467,
              "ambiguous_pct": 0.04605995812731079,
              "unobservable_pct": 0.00036378754807192597,
              "unclear_pct": 0.04642374567538272,
              "retail_qty_pct": 0.08374431002796816,
              "mixed_qty_pct": 0.22949202474347213,
              "instit_qty_pct": 0.5380252079386943,
              "ambiguous_qty_pct": 0.04229860822733201,
              "unobservable_qty_pct": 0.1064398490625334,
              "unclear_qty_pct": 0.1487384572898654,
              "retail_notional_pct": 0.08356519831441561,
              "mixed_notional_pct": 0.22776503184410457,
              "instit_notional_pct": 0.5458860548150309,
              "ambiguous_notional_pct": 0.0425611738326089,
              "unobservable_notional_pct": 0.10022254119383985,
              "unclear_notional_pct": 0.14278371502644874,
              "run_retail_pct": 0.7642805859606253,
              "run_mixed_pct": 0.21852602939879837,
              "run_instit_pct": 0.007696086458162764,
              "run_unclear_pct": 0.009497298182413624,
              "avg_trade_size": 4448.6549823303185,
              "avg_run_notional": 7547.54486264186,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.38071065989847713,
              "medium_confidence_pct": 0.3496995881145218,
              "low_confidence_pct": 0.04156642440578907,
              "na_confidence_pct": 0.22802332758121197,
              "avg_feature_coverage": 0.8840491995314329,
              "observable_run_pct": 0.9994457810079228,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.47489324901356683,
              "mixed_pct": 0.2900563933481073,
              "instit_pct": 0.19534079238960056,
              "ambiguous_pct": 0.03970956524872529,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.03970956524872529,
              "retail_qty_pct": 0.11044686196626718,
              "mixed_qty_pct": 0.27912258036465726,
              "instit_qty_pct": 0.5476846345197686,
              "ambiguous_qty_pct": 0.06274592314930699,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.06274592314930699,
              "retail_notional_pct": 0.11189310625553674,
              "mixed_notional_pct": 0.2801466232966345,
              "instit_notional_pct": 0.5453274209516187,
              "ambiguous_notional_pct": 0.0626328494962101,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0626328494962101,
              "run_retail_pct": 0.7824116602363892,
              "run_mixed_pct": 0.1918059893441117,
              "run_instit_pct": 0.018402841570212505,
              "run_unclear_pct": 0.0073795088492865455,
              "avg_trade_size": 1656.788597012774,
              "avg_run_notional": 2815.7492038704145,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.45725396533774265,
              "medium_confidence_pct": 0.31685957498928286,
              "low_confidence_pct": 0.026700961479576214,
              "na_confidence_pct": 0.19918549819339826,
              "avg_feature_coverage": 0.8736618898891542,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.13775829680651222,
              "mixed_pct": 0.19661865998747652,
              "instit_pct": 0.21540388227927365,
              "ambiguous_pct": 0.443331246086412,
              "unobservable_pct": 0.0068879148403256105,
              "unclear_pct": 0.45021916092673764,
              "retail_qty_pct": 0.0603386167146974,
              "mixed_qty_pct": 0.09672190201729107,
              "instit_qty_pct": 0.426693083573487,
              "ambiguous_qty_pct": 0.3937319884726225,
              "unobservable_qty_pct": 0.022514409221902017,
              "unclear_qty_pct": 0.4162463976945245,
              "retail_notional_pct": 0.06176698263396965,
              "mixed_notional_pct": 0.09843532546440517,
              "instit_notional_pct": 0.41886706630305737,
              "ambiguous_notional_pct": 0.3999132011459118,
              "unobservable_notional_pct": 0.021017424452656024,
              "unclear_notional_pct": 0.4209306255985678,
              "run_retail_pct": 0.5062034739454094,
              "run_mixed_pct": 0.17121588089330025,
              "run_instit_pct": 0.0794044665012407,
              "run_unclear_pct": 0.24317617866004965,
              "avg_trade_size": 150.05291170945523,
              "avg_run_notional": 594.6265508684863,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.228287841191067,
              "medium_confidence_pct": 0.18858560794044665,
              "low_confidence_pct": 0.1687344913151365,
              "na_confidence_pct": 0.4143920595533499,
              "avg_feature_coverage": 0.8842431761786598,
              "observable_run_pct": 0.9900744416873449,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3722365038560411,
              "mixed_pct": 0.15012853470437018,
              "instit_pct": 0.20051413881748073,
              "ambiguous_pct": 0.27712082262210797,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.27712082262210797,
              "retail_qty_pct": 0.08350783204612205,
              "mixed_qty_pct": 0.13668008267159795,
              "instit_qty_pct": 0.39995104971173717,
              "ambiguous_qty_pct": 0.3798610355705428,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3798610355705428,
              "retail_notional_pct": 0.08450176117226588,
              "mixed_notional_pct": 0.138456851440136,
              "instit_notional_pct": 0.3964165057062187,
              "ambiguous_notional_pct": 0.3806248816813794,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3806248816813794,
              "run_retail_pct": 0.5817104149026249,
              "run_mixed_pct": 0.1642675698560542,
              "run_instit_pct": 0.07112616426756986,
              "run_unclear_pct": 0.18289585097375105,
              "avg_trade_size": 4000.46118251928,
              "avg_run_notional": 6588.397121083827,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1896697713801863,
              "medium_confidence_pct": 0.14394580863674852,
              "low_confidence_pct": 0.31922099915325997,
              "na_confidence_pct": 0.3471634208298052,
              "avg_feature_coverage": 0.8370448772226926,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6010911424903723,
              "mixed_pct": 0.2086007702182285,
              "instit_pct": 0.15661103979460847,
              "ambiguous_pct": 0.033697047496790755,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.033697047496790755,
              "retail_qty_pct": 0.11652656732479515,
              "mixed_qty_pct": 0.46780506842319913,
              "instit_qty_pct": 0.3767980795923053,
              "ambiguous_qty_pct": 0.038870284659700396,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.038870284659700396,
              "retail_notional_pct": 0.11460621100533805,
              "mixed_notional_pct": 0.4645662005786456,
              "instit_notional_pct": 0.37917048851182006,
              "ambiguous_notional_pct": 0.041657099904196304,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.041657099904196304,
              "run_retail_pct": 0.8175735950044603,
              "run_mixed_pct": 0.1480820695807315,
              "run_instit_pct": 0.019625334522747548,
              "run_unclear_pct": 0.014719000892060661,
              "avg_trade_size": 2256.2315147625163,
              "avg_run_notional": 3135.7793933987514,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4335414808206958,
              "medium_confidence_pct": 0.21721677074041035,
              "low_confidence_pct": 0.1864406779661017,
              "na_confidence_pct": 0.16280107047279216,
              "avg_feature_coverage": 0.8546833184656555,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "6m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 48830,
          "n_runs": 35512,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-03",
          "last_trade_date": "2026-04-06",
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
            "retail_pct": 0.6118574646733566,
            "mixed_pct": 0.2406717182060209,
            "instit_pct": 0.10810976858488634,
            "ambiguous_pct": 0.03936104853573623,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.03936104853573623,
            "retail_qty_pct": 0.10017250392054365,
            "mixed_qty_pct": 0.30462250765439475,
            "instit_qty_pct": 0.4855283399298036,
            "ambiguous_qty_pct": 0.109676648495258,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.109676648495258,
            "retail_notional_pct": 0.10025269762406175,
            "mixed_notional_pct": 0.30486407772102464,
            "instit_notional_pct": 0.48556519805399295,
            "ambiguous_notional_pct": 0.10931802660092067,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10931802660092067
          },
          "run_composition": {
            "retail_pct": 0.8325073214687992,
            "mixed_pct": 0.1486539761207479,
            "instit_pct": 0.012812570398738454,
            "ambiguous_pct": 0.00602613201171435,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.00602613201171435,
            "retail_notional_pct": 0.10025269762406175,
            "mixed_notional_pct": 0.30486407772102464,
            "instit_notional_pct": 0.48556519805399295,
            "unclear_notional_pct": 0.10931802660092067
          },
          "counts": {
            "trades": {
              "retail": 29877,
              "mixed": 11752,
              "institutional": 5279,
              "ambiguous": 1922,
              "unobservable": 0,
              "unclear": 1922
            },
            "runs": {
              "retail": 29564,
              "mixed": 5279,
              "institutional": 455,
              "ambiguous": 214,
              "unobservable": 0,
              "unclear": 214
            }
          },
          "confidence": {
            "high": 0.4959731921603965,
            "medium": 0.32228542464519033,
            "low": 0.02706127506195089,
            "na": 0.15468010813246227
          },
          "confidence_counts": {
            "high": 17613,
            "medium": 11445,
            "low": 961,
            "na": 5493
          },
          "trade_confidence": {
            "high": 0.39287323366782717,
            "medium": 0.29973377022322345,
            "low": 0.0273602293671923,
            "na": 0.28003276674175714
          },
          "trade_confidence_counts": {
            "high": 19184,
            "medium": 14636,
            "low": 1336,
            "na": 13674
          },
          "observability": {
            "avg_feature_coverage": 0.8643317751745887,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.00602613201171435,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8325073214687992,
          "dominance_gap": 0.6838533453480513,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 38370,
              "MULTI_FILL_SINGLE_PRICE": 10260,
              "WALK_BOOK": 200
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 47512,
              "MOMENTUM_REACTIVE": 878,
              "PERSISTENT_POSITIVE_IMPACT": 404,
              "UNOBSERVABLE": 32,
              "SHORT_HORIZON_POSITIVE_IMPACT": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 35218,
              "ADAPTIVE": 288,
              "SCHEDULED": 6
            },
            "participant_confidence": {
              "HIGH": 17613,
              "MEDIUM": 11445,
              "NA": 5493,
              "LOW": 961
            }
          },
          "trade_size": {
            "avg": 1853.2484845381937,
            "median": 137.0
          },
          "run_size": {
            "avg": 2548.2688527821583,
            "median": 137.0,
            "avg_length": 1.141839378238342
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-164",
              "timestamp": "2026-04-06T08:59:30.064900",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56999,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-163",
              "timestamp": "2026-04-06T08:59:29.037300",
              "price": 0.64,
              "size": 100.0,
              "notional": 64.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56998,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-162",
              "timestamp": "2026-04-06T08:59:22.669300",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56997,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-161",
              "timestamp": "2026-04-06T08:59:14.492700",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56996,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-160",
              "timestamp": "2026-04-06T08:58:36.874100",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56995,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-159",
              "timestamp": "2026-04-06T08:58:32.719500",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56994,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-158",
              "timestamp": "2026-04-06T08:58:17.752100",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56993,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-157",
              "timestamp": "2026-04-06T08:58:12.110200",
              "price": 0.635,
              "size": 300.0,
              "notional": 190.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56992,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-156",
              "timestamp": "2026-04-06T08:58:09.309400",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56991,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-155",
              "timestamp": "2026-04-06T08:57:46.636000",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56990,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-154",
              "timestamp": "2026-04-06T08:57:37.391200",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56989,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-153",
              "timestamp": "2026-04-06T08:57:18.396300",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56988,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-152",
              "timestamp": "2026-04-06T08:57:14.903600",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56988,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-151",
              "timestamp": "2026-04-06T08:57:10.750800",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56987,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-150",
              "timestamp": "2026-04-06T08:56:37.244700",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56986,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-149",
              "timestamp": "2026-04-06T08:56:31.315800",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56985,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-148",
              "timestamp": "2026-04-06T08:56:29.930500",
              "price": 0.635,
              "size": 400.0,
              "notional": 254.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56985,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-147",
              "timestamp": "2026-04-06T08:56:18.428600",
              "price": 0.635,
              "size": 1200.0,
              "notional": 762.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56984,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-146",
              "timestamp": "2026-04-06T08:56:13.522000",
              "price": 0.635,
              "size": 400.0,
              "notional": 254.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56984,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-145",
              "timestamp": "2026-04-06T08:56:13.100400",
              "price": 0.64,
              "size": 10000.0,
              "notional": 6400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56983,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-144",
              "timestamp": "2026-04-06T08:56:10.271300",
              "price": 0.64,
              "size": 100.0,
              "notional": 64.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 56983,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-143",
              "timestamp": "2026-04-06T08:54:13.317300",
              "price": 0.64,
              "size": 200.0,
              "notional": 128.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56982,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-142",
              "timestamp": "2026-04-06T08:51:40.778900",
              "price": 0.635,
              "size": 100.0,
              "notional": 63.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56981,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-141",
              "timestamp": "2026-04-06T08:50:28.303300",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56980,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-140",
              "timestamp": "2026-04-06T08:46:38.760900",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56979,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-139",
              "timestamp": "2026-04-06T08:43:09.669800",
              "price": 0.635,
              "size": 200.0,
              "notional": 127.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56978,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-138",
              "timestamp": "2026-04-06T08:43:03.318400",
              "price": 0.64,
              "size": 800.0,
              "notional": 512.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 56977,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-137",
              "timestamp": "2026-04-06T08:32:28.413000",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56976,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-136",
              "timestamp": "2026-04-06T08:17:22.282300",
              "price": 0.64,
              "size": 300.0,
              "notional": 192.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 56975,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-135",
              "timestamp": "2026-04-06T08:16:06.312900",
              "price": 0.635,
              "size": 900.0,
              "notional": 571.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 56974,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.6118574646733566,
              "mixed_pct": 0.2406717182060209,
              "instit_pct": 0.10810976858488634,
              "ambiguous_pct": 0.03936104853573623,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.03936104853573623,
              "retail_qty_pct": 0.10017250392054365,
              "mixed_qty_pct": 0.30462250765439475,
              "instit_qty_pct": 0.4855283399298036,
              "ambiguous_qty_pct": 0.109676648495258,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.109676648495258,
              "retail_notional_pct": 0.10025269762406175,
              "mixed_notional_pct": 0.30486407772102464,
              "instit_notional_pct": 0.48556519805399295,
              "ambiguous_notional_pct": 0.10931802660092067,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.10931802660092067,
              "run_retail_pct": 0.8325073214687992,
              "run_mixed_pct": 0.1486539761207479,
              "run_instit_pct": 0.012812570398738454,
              "run_unclear_pct": 0.00602613201171435,
              "avg_trade_size": 1853.2484845381937,
              "avg_run_notional": 2548.2688527821583,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4959731921603965,
              "medium_confidence_pct": 0.32228542464519033,
              "low_confidence_pct": 0.02706127506195089,
              "na_confidence_pct": 0.15468010813246227,
              "avg_feature_coverage": 0.8643317751745887,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3640952969123575,
              "mixed_pct": 0.3314635102618179,
              "instit_pct": 0.23223305051084864,
              "ambiguous_pct": 0.07186219515007701,
              "unobservable_pct": 0.0003459471648989194,
              "unclear_pct": 0.07220814231497592,
              "retail_qty_pct": 0.09906674232968514,
              "mixed_qty_pct": 0.22665445861094843,
              "instit_qty_pct": 0.6132417609800268,
              "ambiguous_qty_pct": 0.0460466607286452,
              "unobservable_qty_pct": 0.014990377350694402,
              "unclear_qty_pct": 0.061037038079339606,
              "retail_notional_pct": 0.09899735662798469,
              "mixed_notional_pct": 0.22664684103046706,
              "instit_notional_pct": 0.6133703262496583,
              "ambiguous_notional_pct": 0.04599867085473872,
              "unobservable_notional_pct": 0.014986805237151275,
              "unclear_notional_pct": 0.06098547609189,
              "run_retail_pct": 0.7215499717974097,
              "run_mixed_pct": 0.24601704926407203,
              "run_instit_pct": 0.01536775113608548,
              "run_unclear_pct": 0.017065227802432872,
              "avg_trade_size": 5564.145233104325,
              "avg_run_notional": 11554.085580228388,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.30955269627406534,
              "medium_confidence_pct": 0.3740993795430116,
              "low_confidence_pct": 0.053265647116418166,
              "na_confidence_pct": 0.2630822770665049,
              "avg_feature_coverage": 0.8865891361493352,
              "observable_run_pct": 0.9995849430094824,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4406420920806776,
              "mixed_pct": 0.30782649750133034,
              "instit_pct": 0.1706377309118844,
              "ambiguous_pct": 0.08062160659056627,
              "unobservable_pct": 0.0002720729155413651,
              "unclear_pct": 0.08089367950610764,
              "retail_qty_pct": 0.08107698870422139,
              "mixed_qty_pct": 0.21232101990772073,
              "instit_qty_pct": 0.5750253277668449,
              "ambiguous_qty_pct": 0.06514461215847983,
              "unobservable_qty_pct": 0.06643205146273315,
              "unclear_qty_pct": 0.13157666362121298,
              "retail_notional_pct": 0.08088946933138244,
              "mixed_notional_pct": 0.2108041139911716,
              "instit_notional_pct": 0.5806835404821725,
              "ambiguous_notional_pct": 0.06619054501256233,
              "unobservable_notional_pct": 0.06143233118271116,
              "unclear_notional_pct": 0.1276228761952735,
              "run_retail_pct": 0.7645936277817685,
              "run_mixed_pct": 0.21277491165821344,
              "run_instit_pct": 0.009723038522098144,
              "run_unclear_pct": 0.01290842203791985,
              "avg_trade_size": 4196.422110685663,
              "avg_run_notional": 7610.268453021035,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.379720934282418,
              "medium_confidence_pct": 0.3537662262275336,
              "low_confidence_pct": 0.040829505793915116,
              "na_confidence_pct": 0.22568333369613328,
              "avg_feature_coverage": 0.8834189541203189,
              "observable_run_pct": 0.9995573840672777,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4919371727748691,
              "mixed_pct": 0.26586387434554976,
              "instit_pct": 0.20010471204188482,
              "ambiguous_pct": 0.042094240837696334,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.042094240837696334,
              "retail_qty_pct": 0.12093863957812732,
              "mixed_qty_pct": 0.26485252983520036,
              "instit_qty_pct": 0.5380318031260873,
              "ambiguous_qty_pct": 0.076177027460585,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.076177027460585,
              "retail_notional_pct": 0.12229737032157428,
              "mixed_notional_pct": 0.2643944787676955,
              "instit_notional_pct": 0.5364515754959194,
              "ambiguous_notional_pct": 0.07685657541481089,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07685657541481089,
              "run_retail_pct": 0.7965066419307979,
              "run_mixed_pct": 0.17577051647793898,
              "run_instit_pct": 0.019742023557414636,
              "run_unclear_pct": 0.00798081803384847,
              "avg_trade_size": 1728.6663664921466,
              "avg_run_notional": 2889.329821306684,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.46335999439942593,
              "medium_confidence_pct": 0.3295587797749269,
              "low_confidence_pct": 0.02332989131385967,
              "na_confidence_pct": 0.18375133451178746,
              "avg_feature_coverage": 0.8701918196615152,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5332906530089628,
              "mixed_pct": 0.20918693982074263,
              "instit_pct": 0.17941741357234314,
              "ambiguous_pct": 0.07810499359795134,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.07810499359795134,
              "retail_qty_pct": 0.11438901599543166,
              "mixed_qty_pct": 0.41677621015355665,
              "instit_qty_pct": 0.39824263923997644,
              "ambiguous_qty_pct": 0.07059213461103524,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07059213461103524,
              "retail_notional_pct": 0.10981864204644819,
              "mixed_notional_pct": 0.39006792342526747,
              "instit_notional_pct": 0.4120655106880714,
              "ambiguous_notional_pct": 0.08804792384021298,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.08804792384021298,
              "run_retail_pct": 0.7739445114595899,
              "run_mixed_pct": 0.1609167671893848,
              "run_instit_pct": 0.030880579010856453,
              "run_unclear_pct": 0.03425814234016888,
              "avg_trade_size": 1824.4376600512164,
              "avg_run_notional": 2750.0811821471652,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3551266586248492,
              "medium_confidence_pct": 0.21302774427020507,
              "low_confidence_pct": 0.23667068757539203,
              "na_confidence_pct": 0.1951749095295537,
              "avg_feature_coverage": 0.8546320868516282,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.42301458670988656,
              "mixed_pct": 0.18268117619819402,
              "instit_pct": 0.1539708265802269,
              "ambiguous_pct": 0.23732345450335726,
              "unobservable_pct": 0.003009956008335263,
              "unclear_pct": 0.24033341051169252,
              "retail_qty_pct": 0.09855750874352827,
              "mixed_qty_pct": 0.1621599951127877,
              "instit_qty_pct": 0.37045832887884295,
              "ambiguous_qty_pct": 0.3581410266200345,
              "unobservable_qty_pct": 0.010683140644806573,
              "unclear_qty_pct": 0.3688241672648411,
              "retail_notional_pct": 0.0986557538923984,
              "mixed_notional_pct": 0.162539986700712,
              "instit_notional_pct": 0.36949166829380153,
              "ambiguous_notional_pct": 0.3589585465138571,
              "unobservable_notional_pct": 0.010354044599230958,
              "unclear_notional_pct": 0.36931259111308806,
              "run_retail_pct": 0.6434166355837374,
              "run_mixed_pct": 0.1525550167847818,
              "run_instit_pct": 0.05594927265945543,
              "run_unclear_pct": 0.14807907497202535,
              "avg_trade_size": 3134.073396619588,
              "avg_run_notional": 5048.885863483774,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.2215591197314435,
              "medium_confidence_pct": 0.1980604252144722,
              "low_confidence_pct": 0.27974636329727715,
              "na_confidence_pct": 0.30063409175680716,
              "avg_feature_coverage": 0.8458224543080939,
              "observable_run_pct": 0.999627004848937,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.14344262295081966,
              "mixed_pct": 0.19613583138173302,
              "instit_pct": 0.2148711943793911,
              "ambiguous_pct": 0.4385245901639344,
              "unobservable_pct": 0.00702576112412178,
              "unclear_pct": 0.4455503512880562,
              "retail_qty_pct": 0.008635853735446224,
              "mixed_qty_pct": 0.016238920891844172,
              "instit_qty_pct": 0.08101881099895733,
              "ambiguous_qty_pct": 0.05559468180834338,
              "unobservable_qty_pct": 0.8385117325654089,
              "unclear_qty_pct": 0.8941064143737523,
              "retail_notional_pct": 0.008672241724581921,
              "mixed_notional_pct": 0.016129236112476433,
              "instit_notional_pct": 0.0780855345543518,
              "ambiguous_notional_pct": 0.05525187468076561,
              "unobservable_notional_pct": 0.8418611129278243,
              "unclear_notional_pct": 0.8971129876085899,
              "run_retail_pct": 0.48283261802575106,
              "run_mixed_pct": 0.18454935622317598,
              "run_instit_pct": 0.09012875536480687,
              "run_unclear_pct": 0.24248927038626608,
              "avg_trade_size": 1167.3494145199063,
              "avg_run_notional": 4278.611158798283,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.19742489270386265,
              "medium_confidence_pct": 0.1630901287553648,
              "low_confidence_pct": 0.21244635193133046,
              "na_confidence_pct": 0.4270386266094421,
              "avg_feature_coverage": 0.8799356223175965,
              "observable_run_pct": 0.9892703862660944,
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
      "n_trades": 48830,
      "n_runs": 35512,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-03",
      "last_trade_date": "2026-04-06",
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
        "retail_pct": 0.6118574646733566,
        "mixed_pct": 0.2406717182060209,
        "instit_pct": 0.10810976858488634,
        "ambiguous_pct": 0.03936104853573623,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.03936104853573623,
        "retail_qty_pct": 0.10017250392054365,
        "mixed_qty_pct": 0.30462250765439475,
        "instit_qty_pct": 0.4855283399298036,
        "ambiguous_qty_pct": 0.109676648495258,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.109676648495258,
        "retail_notional_pct": 0.10025269762406175,
        "mixed_notional_pct": 0.30486407772102464,
        "instit_notional_pct": 0.48556519805399295,
        "ambiguous_notional_pct": 0.10931802660092067,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.10931802660092067
      },
      "run_composition": {
        "retail_pct": 0.8325073214687992,
        "mixed_pct": 0.1486539761207479,
        "instit_pct": 0.012812570398738454,
        "ambiguous_pct": 0.00602613201171435,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.00602613201171435
      },
      "trade_size": {
        "avg": 1853.2484845381937,
        "median": 137.0
      },
      "run_size": {
        "avg": 2548.2688527821583,
        "median": 137.0,
        "avg_length": 1.141839378238342
      },
      "confidence": {
        "high": 0.4959731921603965,
        "medium": 0.32228542464519033,
        "low": 0.02706127506195089,
        "na": 0.15468010813246227
      },
      "confidence_counts": {
        "high": 17613,
        "medium": 11445,
        "low": 961,
        "na": 5493
      },
      "trade_confidence": {
        "high": 0.39287323366782717,
        "medium": 0.29973377022322345,
        "low": 0.0273602293671923,
        "na": 0.28003276674175714
      },
      "trade_confidence_counts": {
        "high": 19184,
        "medium": 14636,
        "low": 1336,
        "na": 13674
      },
      "counts": {
        "trades": {
          "retail": 29877,
          "mixed": 11752,
          "institutional": 5279,
          "ambiguous": 1922,
          "unobservable": 0,
          "unclear": 1922
        },
        "runs": {
          "retail": 29564,
          "mixed": 5279,
          "institutional": 455,
          "ambiguous": 214,
          "unobservable": 0,
          "unclear": 214
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8643317751745887,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.00602613201171435,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.8325073214687992,
      "dominance_gap": 0.6838533453480513,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 9842,
            "n_runs": 7179,
            "retail_pct": 0.6181670392196708,
            "mixed_pct": 0.23470839260312945,
            "instit_pct": 0.09185124974598659,
            "ambiguous_pct": 0.05527331843121317,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05527331843121317,
            "avg_trade_size": 1573.244411704938,
            "avg_run_notional": 2156.8284580025074,
            "retail_qty_pct": 0.13906937147948673,
            "mixed_qty_pct": 0.2441389105762063,
            "instit_qty_pct": 0.5242361285712396,
            "ambiguous_qty_pct": 0.09255558937306745,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.09255558937306745,
            "retail_notional_pct": 0.13879874939545966,
            "mixed_notional_pct": 0.2440253395282956,
            "instit_notional_pct": 0.5245362569690661,
            "ambiguous_notional_pct": 0.09263965410717856,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09263965410717856,
            "run_retail_pct": 0.8322886195849004,
            "run_mixed_pct": 0.15043877977434184,
            "run_instit_pct": 0.011561498815991085,
            "run_ambiguous_pct": 0.005711101824766681,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.005711101824766681,
            "avg_feature_coverage": 0.865900543251149,
            "high_confidence_pct": 0.45048056832427913,
            "medium_confidence_pct": 0.3535311324697033,
            "low_confidence_pct": 0.03983841760690904,
            "na_confidence_pct": 0.1561498815991085,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 7506,
            "n_runs": 5481,
            "retail_pct": 0.6020516919797495,
            "mixed_pct": 0.2740474287236877,
            "instit_pct": 0.09592326139088729,
            "ambiguous_pct": 0.027977617905675458,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.027977617905675458,
            "avg_trade_size": 982.2464028776978,
            "avg_run_notional": 1345.1453201970444,
            "retail_qty_pct": 0.12156722835135482,
            "mixed_qty_pct": 0.3816528532484403,
            "instit_qty_pct": 0.4224436028322081,
            "ambiguous_qty_pct": 0.07433631556799677,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07433631556799677,
            "retail_notional_pct": 0.12161432758764158,
            "mixed_notional_pct": 0.3815530491608854,
            "instit_notional_pct": 0.42238596050058175,
            "ambiguous_notional_pct": 0.07444666275089123,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07444666275089123,
            "run_retail_pct": 0.8137201240649516,
            "run_mixed_pct": 0.16894727239554827,
            "run_instit_pct": 0.011859149790184273,
            "run_ambiguous_pct": 0.005473453749315818,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.005473453749315818,
            "avg_feature_coverage": 0.8674329501915709,
            "high_confidence_pct": 0.4796569968983762,
            "medium_confidence_pct": 0.3061485130450648,
            "low_confidence_pct": 0.039773763911694945,
            "na_confidence_pct": 0.17442072614486406,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 5045,
            "n_runs": 3679,
            "retail_pct": 0.6166501486620416,
            "mixed_pct": 0.25867195242814667,
            "instit_pct": 0.08126858275520317,
            "ambiguous_pct": 0.043409316154608524,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.043409316154608524,
            "avg_trade_size": 2718.34271555996,
            "avg_run_notional": 3727.6539820603425,
            "retail_qty_pct": 0.06846663473818647,
            "mixed_qty_pct": 0.3614054517879949,
            "instit_qty_pct": 0.4431423611111111,
            "ambiguous_qty_pct": 0.12698555236270753,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12698555236270753,
            "retail_notional_pct": 0.06868578250360817,
            "mixed_notional_pct": 0.362438884707853,
            "instit_notional_pct": 0.4414249879266057,
            "ambiguous_notional_pct": 0.1274503448619331,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1274503448619331,
            "run_retail_pct": 0.8426202772492525,
            "run_mixed_pct": 0.13998369122044033,
            "run_instit_pct": 0.010872519706441968,
            "run_ambiguous_pct": 0.006523511823865181,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.006523511823865181,
            "avg_feature_coverage": 0.8626393041587386,
            "high_confidence_pct": 0.6588746942103832,
            "medium_confidence_pct": 0.19189997281870072,
            "low_confidence_pct": 0.002718129926610492,
            "na_confidence_pct": 0.1465072030443055,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 4649,
            "n_runs": 3458,
            "retail_pct": 0.6263712626371263,
            "mixed_pct": 0.22628522262852227,
            "instit_pct": 0.12088621208862121,
            "ambiguous_pct": 0.026457302645730263,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.026457302645730263,
            "avg_trade_size": 2790.37459668746,
            "avg_run_notional": 3751.431897050318,
            "retail_qty_pct": 0.08098770128058831,
            "mixed_qty_pct": 0.2951639829254892,
            "instit_qty_pct": 0.5494220447149317,
            "ambiguous_qty_pct": 0.07442627107899075,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07442627107899075,
            "retail_notional_pct": 0.08103094469075486,
            "mixed_notional_pct": 0.2955381640856395,
            "instit_notional_pct": 0.5487301686963332,
            "ambiguous_notional_pct": 0.0747007225272725,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0747007225272725,
            "run_retail_pct": 0.8403701561596298,
            "run_mixed_pct": 0.137941006362059,
            "run_instit_pct": 0.0167727009832273,
            "run_ambiguous_pct": 0.004916136495083863,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.004916136495083863,
            "avg_feature_coverage": 0.8607142857142854,
            "high_confidence_pct": 0.5326778484673221,
            "medium_confidence_pct": 0.30624638519375363,
            "low_confidence_pct": 0.018218623481781375,
            "na_confidence_pct": 0.14285714285714285,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 9747,
            "n_runs": 6347,
            "retail_pct": 0.5349338257925516,
            "mixed_pct": 0.24612701344003282,
            "instit_pct": 0.1694880476043911,
            "ambiguous_pct": 0.04945111316302452,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04945111316302452,
            "avg_trade_size": 2229.761003385657,
            "avg_run_notional": 3424.2130927997478,
            "retail_qty_pct": 0.07765442987925424,
            "mixed_qty_pct": 0.30682198363697194,
            "instit_qty_pct": 0.4704583472733356,
            "ambiguous_qty_pct": 0.14506523921043826,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14506523921043826,
            "retail_notional_pct": 0.07757777223026933,
            "mixed_notional_pct": 0.307640209767598,
            "instit_notional_pct": 0.4683636843164628,
            "ambiguous_notional_pct": 0.1464183336856699,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1464183336856699,
            "run_retail_pct": 0.8134551756735465,
            "run_mixed_pct": 0.15944540727902945,
            "run_instit_pct": 0.01780368678115645,
            "run_ambiguous_pct": 0.009295730266267527,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.009295730266267527,
            "avg_feature_coverage": 0.8650543563888449,
            "high_confidence_pct": 0.45753899480069327,
            "medium_confidence_pct": 0.34110603434693554,
            "low_confidence_pct": 0.03261383330707421,
            "na_confidence_pct": 0.168741137545297,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 1311,
            "n_runs": 1068,
            "retail_pct": 0.6849733028222731,
            "mixed_pct": 0.2234935163996949,
            "instit_pct": 0.04042715484363082,
            "ambiguous_pct": 0.05110602593440122,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05110602593440122,
            "avg_trade_size": 1757.4942791762014,
            "avg_run_notional": 2157.373595505618,
            "retail_qty_pct": 0.06758023602073453,
            "mixed_qty_pct": 0.2742638138303739,
            "instit_qty_pct": 0.22730781956545715,
            "ambiguous_qty_pct": 0.4308481305834344,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4308481305834344,
            "retail_notional_pct": 0.06761455247767542,
            "mixed_notional_pct": 0.27467834163384436,
            "instit_notional_pct": 0.22705662793094844,
            "ambiguous_notional_pct": 0.43065047795753175,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.43065047795753175,
            "run_retail_pct": 0.8408239700374532,
            "run_mixed_pct": 0.14887640449438203,
            "run_instit_pct": 0.0056179775280898875,
            "run_ambiguous_pct": 0.0046816479400749065,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.0046816479400749065,
            "avg_feature_coverage": 0.8634831460674156,
            "high_confidence_pct": 0.7078651685393258,
            "medium_confidence_pct": 0.13857677902621723,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.15355805243445692,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.6118574646733566,
          "mixed_pct": 0.2406717182060209,
          "instit_pct": 0.10810976858488634,
          "ambiguous_pct": 0.03936104853573623,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.03936104853573623,
          "retail_qty_pct": 0.10017250392054365,
          "mixed_qty_pct": 0.30462250765439475,
          "instit_qty_pct": 0.4855283399298036,
          "ambiguous_qty_pct": 0.109676648495258,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.109676648495258,
          "retail_notional_pct": 0.10025269762406175,
          "mixed_notional_pct": 0.30486407772102464,
          "instit_notional_pct": 0.48556519805399295,
          "ambiguous_notional_pct": 0.10931802660092067,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.10931802660092067,
          "run_retail_pct": 0.8325073214687992,
          "run_mixed_pct": 0.1486539761207479,
          "run_instit_pct": 0.012812570398738454,
          "run_unclear_pct": 0.00602613201171435,
          "avg_trade_size": 1853.2484845381937,
          "avg_run_notional": 2548.2688527821583,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.4959731921603965,
          "medium_confidence_pct": 0.32228542464519033,
          "low_confidence_pct": 0.02706127506195089,
          "na_confidence_pct": 0.15468010813246227,
          "avg_feature_coverage": 0.8643317751745887,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AJBU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.3640952969123575,
          "mixed_pct": 0.3314635102618179,
          "instit_pct": 0.23223305051084864,
          "ambiguous_pct": 0.07186219515007701,
          "unobservable_pct": 0.0003459471648989194,
          "unclear_pct": 0.07220814231497592,
          "retail_qty_pct": 0.09906674232968514,
          "mixed_qty_pct": 0.22665445861094843,
          "instit_qty_pct": 0.6132417609800268,
          "ambiguous_qty_pct": 0.0460466607286452,
          "unobservable_qty_pct": 0.014990377350694402,
          "unclear_qty_pct": 0.061037038079339606,
          "retail_notional_pct": 0.09899735662798469,
          "mixed_notional_pct": 0.22664684103046706,
          "instit_notional_pct": 0.6133703262496583,
          "ambiguous_notional_pct": 0.04599867085473872,
          "unobservable_notional_pct": 0.014986805237151275,
          "unclear_notional_pct": 0.06098547609189,
          "run_retail_pct": 0.7215499717974097,
          "run_mixed_pct": 0.24601704926407203,
          "run_instit_pct": 0.01536775113608548,
          "run_unclear_pct": 0.017065227802432872,
          "avg_trade_size": 5564.145233104325,
          "avg_run_notional": 11554.085580228388,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.30955269627406534,
          "medium_confidence_pct": 0.3740993795430116,
          "low_confidence_pct": 0.053265647116418166,
          "na_confidence_pct": 0.2630822770665049,
          "avg_feature_coverage": 0.8865891361493352,
          "observable_run_pct": 0.9995849430094824,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "JYEU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4406420920806776,
          "mixed_pct": 0.30782649750133034,
          "instit_pct": 0.1706377309118844,
          "ambiguous_pct": 0.08062160659056627,
          "unobservable_pct": 0.0002720729155413651,
          "unclear_pct": 0.08089367950610764,
          "retail_qty_pct": 0.08107698870422139,
          "mixed_qty_pct": 0.21232101990772073,
          "instit_qty_pct": 0.5750253277668449,
          "ambiguous_qty_pct": 0.06514461215847983,
          "unobservable_qty_pct": 0.06643205146273315,
          "unclear_qty_pct": 0.13157666362121298,
          "retail_notional_pct": 0.08088946933138244,
          "mixed_notional_pct": 0.2108041139911716,
          "instit_notional_pct": 0.5806835404821725,
          "ambiguous_notional_pct": 0.06619054501256233,
          "unobservable_notional_pct": 0.06143233118271116,
          "unclear_notional_pct": 0.1276228761952735,
          "run_retail_pct": 0.7645936277817685,
          "run_mixed_pct": 0.21277491165821344,
          "run_instit_pct": 0.009723038522098144,
          "run_unclear_pct": 0.01290842203791985,
          "avg_trade_size": 4196.422110685663,
          "avg_run_notional": 7610.268453021035,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.379720934282418,
          "medium_confidence_pct": 0.3537662262275336,
          "low_confidence_pct": 0.040829505793915116,
          "na_confidence_pct": 0.22568333369613328,
          "avg_feature_coverage": 0.8834189541203189,
          "observable_run_pct": 0.9995573840672777,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4919371727748691,
          "mixed_pct": 0.26586387434554976,
          "instit_pct": 0.20010471204188482,
          "ambiguous_pct": 0.042094240837696334,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.042094240837696334,
          "retail_qty_pct": 0.12093863957812732,
          "mixed_qty_pct": 0.26485252983520036,
          "instit_qty_pct": 0.5380318031260873,
          "ambiguous_qty_pct": 0.076177027460585,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.076177027460585,
          "retail_notional_pct": 0.12229737032157428,
          "mixed_notional_pct": 0.2643944787676955,
          "instit_notional_pct": 0.5364515754959194,
          "ambiguous_notional_pct": 0.07685657541481089,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.07685657541481089,
          "run_retail_pct": 0.7965066419307979,
          "run_mixed_pct": 0.17577051647793898,
          "run_instit_pct": 0.019742023557414636,
          "run_unclear_pct": 0.00798081803384847,
          "avg_trade_size": 1728.6663664921466,
          "avg_run_notional": 2889.329821306684,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.46335999439942593,
          "medium_confidence_pct": 0.3295587797749269,
          "low_confidence_pct": 0.02332989131385967,
          "na_confidence_pct": 0.18375133451178746,
          "avg_feature_coverage": 0.8701918196615152,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "D5IU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5332906530089628,
          "mixed_pct": 0.20918693982074263,
          "instit_pct": 0.17941741357234314,
          "ambiguous_pct": 0.07810499359795134,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.07810499359795134,
          "retail_qty_pct": 0.11438901599543166,
          "mixed_qty_pct": 0.41677621015355665,
          "instit_qty_pct": 0.39824263923997644,
          "ambiguous_qty_pct": 0.07059213461103524,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.07059213461103524,
          "retail_notional_pct": 0.10981864204644819,
          "mixed_notional_pct": 0.39006792342526747,
          "instit_notional_pct": 0.4120655106880714,
          "ambiguous_notional_pct": 0.08804792384021298,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.08804792384021298,
          "run_retail_pct": 0.7739445114595899,
          "run_mixed_pct": 0.1609167671893848,
          "run_instit_pct": 0.030880579010856453,
          "run_unclear_pct": 0.03425814234016888,
          "avg_trade_size": 1824.4376600512164,
          "avg_run_notional": 2750.0811821471652,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.3551266586248492,
          "medium_confidence_pct": 0.21302774427020507,
          "low_confidence_pct": 0.23667068757539203,
          "na_confidence_pct": 0.1951749095295537,
          "avg_feature_coverage": 0.8546320868516282,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ODBU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.42301458670988656,
          "mixed_pct": 0.18268117619819402,
          "instit_pct": 0.1539708265802269,
          "ambiguous_pct": 0.23732345450335726,
          "unobservable_pct": 0.003009956008335263,
          "unclear_pct": 0.24033341051169252,
          "retail_qty_pct": 0.09855750874352827,
          "mixed_qty_pct": 0.1621599951127877,
          "instit_qty_pct": 0.37045832887884295,
          "ambiguous_qty_pct": 0.3581410266200345,
          "unobservable_qty_pct": 0.010683140644806573,
          "unclear_qty_pct": 0.3688241672648411,
          "retail_notional_pct": 0.0986557538923984,
          "mixed_notional_pct": 0.162539986700712,
          "instit_notional_pct": 0.36949166829380153,
          "ambiguous_notional_pct": 0.3589585465138571,
          "unobservable_notional_pct": 0.010354044599230958,
          "unclear_notional_pct": 0.36931259111308806,
          "run_retail_pct": 0.6434166355837374,
          "run_mixed_pct": 0.1525550167847818,
          "run_instit_pct": 0.05594927265945543,
          "run_unclear_pct": 0.14807907497202535,
          "avg_trade_size": 3134.073396619588,
          "avg_run_notional": 5048.885863483774,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.2215591197314435,
          "medium_confidence_pct": 0.1980604252144722,
          "low_confidence_pct": 0.27974636329727715,
          "na_confidence_pct": 0.30063409175680716,
          "avg_feature_coverage": 0.8458224543080939,
          "observable_run_pct": 0.999627004848937,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "BMGU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.14344262295081966,
          "mixed_pct": 0.19613583138173302,
          "instit_pct": 0.2148711943793911,
          "ambiguous_pct": 0.4385245901639344,
          "unobservable_pct": 0.00702576112412178,
          "unclear_pct": 0.4455503512880562,
          "retail_qty_pct": 0.008635853735446224,
          "mixed_qty_pct": 0.016238920891844172,
          "instit_qty_pct": 0.08101881099895733,
          "ambiguous_qty_pct": 0.05559468180834338,
          "unobservable_qty_pct": 0.8385117325654089,
          "unclear_qty_pct": 0.8941064143737523,
          "retail_notional_pct": 0.008672241724581921,
          "mixed_notional_pct": 0.016129236112476433,
          "instit_notional_pct": 0.0780855345543518,
          "ambiguous_notional_pct": 0.05525187468076561,
          "unobservable_notional_pct": 0.8418611129278243,
          "unclear_notional_pct": 0.8971129876085899,
          "run_retail_pct": 0.48283261802575106,
          "run_mixed_pct": 0.18454935622317598,
          "run_instit_pct": 0.09012875536480687,
          "run_unclear_pct": 0.24248927038626608,
          "avg_trade_size": 1167.3494145199063,
          "avg_run_notional": 4278.611158798283,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.19742489270386265,
          "medium_confidence_pct": 0.1630901287553648,
          "low_confidence_pct": 0.21244635193133046,
          "na_confidence_pct": 0.4270386266094421,
          "avg_feature_coverage": 0.8799356223175965,
          "observable_run_pct": 0.9892703862660944,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.4934210526315789,
            "mixed_pct": 0.17105263157894737,
            "instit_pct": 0.07894736842105263,
            "ambiguous_pct": 0.2565789473684211,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2565789473684211,
            "retail_qty_pct": 0.07071409933026007,
            "mixed_qty_pct": 0.15134382882491085,
            "instit_qty_pct": 0.2701574323736627,
            "ambiguous_qty_pct": 0.5077846394711664,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5077846394711664,
            "retail_notional_pct": 0.07097432821595685,
            "mixed_notional_pct": 0.15175753193738642,
            "instit_notional_pct": 0.26962083211800775,
            "ambiguous_notional_pct": 0.507647307728649,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.507647307728649,
            "run_retail_pct": 0.8064516129032258,
            "run_mixed_pct": 0.13978494623655913,
            "run_instit_pct": 0.03225806451612903,
            "run_unclear_pct": 0.021505376344086023,
            "avg_trade_size": 4804.3223684210525,
            "avg_run_notional": 7852.225806451613,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5053763440860215,
            "medium_confidence_pct": 0.3333333333333333,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.16129032258064516,
            "avg_feature_coverage": 0.8580645161290318,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.48215183509301157,
            "mixed_pct": 0.2171945701357466,
            "instit_pct": 0.27702362996480645,
            "ambiguous_pct": 0.023629964806435394,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.023629964806435394,
            "retail_qty_pct": 0.11159319290515478,
            "mixed_qty_pct": 0.22026392104849044,
            "instit_qty_pct": 0.651597239394825,
            "ambiguous_qty_pct": 0.0165456466515298,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0165456466515298,
            "retail_notional_pct": 0.11152129678365226,
            "mixed_notional_pct": 0.22019650192690468,
            "instit_notional_pct": 0.6517354241912748,
            "ambiguous_notional_pct": 0.01654677709816828,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.01654677709816828,
            "run_retail_pct": 0.8038029386343993,
            "run_mixed_pct": 0.1495246326707001,
            "run_instit_pct": 0.018150388936905792,
            "run_unclear_pct": 0.028522039757994815,
            "avg_trade_size": 4986.153846153846,
            "avg_run_notional": 8571.702679343129,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5929127052722558,
            "medium_confidence_pct": 0.22904062229904926,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.1780466724286949,
            "avg_feature_coverage": 0.8611927398444251,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4,
            "mixed_pct": 0.06666666666666667,
            "instit_pct": 0.3333333333333333,
            "ambiguous_pct": 0.2,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2,
            "retail_qty_pct": 0.13928273561301086,
            "mixed_qty_pct": 0.058381984987489574,
            "instit_qty_pct": 0.5879899916597164,
            "ambiguous_qty_pct": 0.21434528773978315,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21434528773978315,
            "retail_notional_pct": 0.13904338153503892,
            "mixed_notional_pct": 0.05839822024471635,
            "instit_notional_pct": 0.5881535038932146,
            "ambiguous_notional_pct": 0.21440489432703003,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21440489432703003,
            "run_retail_pct": 0.45454545454545453,
            "run_mixed_pct": 0.09090909090909091,
            "run_instit_pct": 0.18181818181818182,
            "run_unclear_pct": 0.2727272727272727,
            "avg_trade_size": 4075.4666666666667,
            "avg_run_notional": 5557.454545454545,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6363636363636364,
            "na_confidence_pct": 0.36363636363636365,
            "avg_feature_coverage": 0.7954545454545454,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5641025641025641,
            "mixed_pct": 0.38461538461538464,
            "instit_pct": 0.05128205128205128,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.19518518518518518,
            "mixed_qty_pct": 0.73,
            "instit_qty_pct": 0.07481481481481482,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.19492464349147065,
            "mixed_notional_pct": 0.7300900623068972,
            "instit_notional_pct": 0.0749852942016322,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.7333333333333333,
            "run_mixed_pct": 0.25,
            "run_instit_pct": 0.016666666666666666,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 2244.8846153846152,
            "avg_run_notional": 2918.35,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.23333333333333334,
            "medium_confidence_pct": 0.43333333333333335,
            "low_confidence_pct": 0.08333333333333333,
            "na_confidence_pct": 0.25,
            "avg_feature_coverage": 0.8650000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.34038950042337,
            "mixed_pct": 0.32260795935647757,
            "instit_pct": 0.2193056731583404,
            "ambiguous_pct": 0.11515664690939881,
            "unobservable_pct": 0.002540220152413209,
            "unclear_pct": 0.11769686706181201,
            "retail_qty_pct": 0.00508231241825567,
            "mixed_qty_pct": 0.035176983432913735,
            "instit_qty_pct": 0.0726663342795429,
            "ambiguous_qty_pct": 0.014011666063075376,
            "unobservable_qty_pct": 0.8730627038062123,
            "unclear_qty_pct": 0.8870743698692877,
            "retail_notional_pct": 0.005085462729526222,
            "mixed_notional_pct": 0.03524024591903101,
            "instit_notional_pct": 0.0725250579245563,
            "ambiguous_notional_pct": 0.01408816149266088,
            "unobservable_notional_pct": 0.8730610719342256,
            "unclear_notional_pct": 0.8871492334268865,
            "run_retail_pct": 0.7655038759689923,
            "run_mixed_pct": 0.18604651162790697,
            "run_instit_pct": 0.027131782945736434,
            "run_unclear_pct": 0.02131782945736434,
            "avg_trade_size": 48744.06256562236,
            "avg_run_notional": 111563.44552325581,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4806201550387597,
            "medium_confidence_pct": 0.31007751937984496,
            "low_confidence_pct": 0.001937984496124031,
            "na_confidence_pct": 0.20736434108527133,
            "avg_feature_coverage": 0.8752906976744185,
            "observable_run_pct": 0.9941860465116279,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8666666666666667,
            "mixed_pct": 0.13333333333333333,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.04652936689549962,
            "mixed_qty_pct": 0.9534706331045004,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.04616558565433041,
            "mixed_notional_pct": 0.9538344143456696,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8666666666666667,
            "run_mixed_pct": 0.13333333333333333,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 122.3133333333333,
            "avg_run_notional": 122.3133333333333,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.8666666666666667,
            "na_confidence_pct": 0.13333333333333333,
            "avg_feature_coverage": 0.8499999999999999,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 1.0,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 1.0,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 1.0,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 44.5,
            "avg_run_notional": null,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": null,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.5596192920543257,
            "mixed_pct": 0.24147150037429152,
            "instit_pct": 0.14896802481018073,
            "ambiguous_pct": 0.04994118276120201,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04994118276120201,
            "retail_qty_pct": 0.08313323572474378,
            "mixed_qty_pct": 0.30301976573938505,
            "instit_qty_pct": 0.45986090775988286,
            "ambiguous_qty_pct": 0.1539860907759883,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1539860907759883,
            "retail_notional_pct": 0.08334512661799767,
            "mixed_notional_pct": 0.3042248647112328,
            "instit_notional_pct": 0.45908195862984136,
            "ambiguous_notional_pct": 0.1533480500409282,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1533480500409282,
            "run_retail_pct": 0.8169523509985847,
            "run_mixed_pct": 0.15867274728730932,
            "run_instit_pct": 0.01541122818053153,
            "run_unclear_pct": 0.00896367353357446,
            "avg_trade_size": 1902.3717784194205,
            "avg_run_notional": 2797.464774335587,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5021229753105835,
            "medium_confidence_pct": 0.30272055354615507,
            "low_confidence_pct": 0.027520050322377733,
            "na_confidence_pct": 0.16763642082088379,
            "avg_feature_coverage": 0.8651674791633902,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.36149696952121335,
            "mixed_pct": 0.3157497897514717,
            "instit_pct": 0.27597656816402283,
            "ambiguous_pct": 0.04599367804425369,
            "unobservable_pct": 0.0007829945190383667,
            "unclear_pct": 0.04677667256329206,
            "retail_qty_pct": 0.09199512228256197,
            "mixed_qty_pct": 0.21516651562623598,
            "instit_qty_pct": 0.6170601671131961,
            "ambiguous_qty_pct": 0.057580044263157715,
            "unobservable_qty_pct": 0.018198150714848278,
            "unclear_qty_pct": 0.07577819497800599,
            "retail_notional_pct": 0.09177688510007824,
            "mixed_notional_pct": 0.2153088215873249,
            "instit_notional_pct": 0.61702272254326,
            "ambiguous_notional_pct": 0.057614669691548485,
            "unobservable_notional_pct": 0.018276901077788475,
            "unclear_notional_pct": 0.07589157076933696,
            "run_retail_pct": 0.7235058065300662,
            "run_mixed_pct": 0.23460205508603393,
            "run_instit_pct": 0.022253298473885814,
            "run_unclear_pct": 0.019638839910013983,
            "avg_trade_size": 6044.220512136416,
            "avg_run_notional": 12672.393501550436,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3358667234146045,
            "medium_confidence_pct": 0.3678786404815468,
            "low_confidence_pct": 0.04201374110780082,
            "na_confidence_pct": 0.2542408949960479,
            "avg_feature_coverage": 0.8817732717212864,
            "observable_run_pct": 0.9994223870614701,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4592362689131519,
            "mixed_pct": 0.29584880563099264,
            "instit_pct": 0.1927617358532395,
            "ambiguous_pct": 0.052153189602615974,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.052153189602615974,
            "retail_qty_pct": 0.09981960911160598,
            "mixed_qty_pct": 0.2797178437690499,
            "instit_qty_pct": 0.5452482551846829,
            "ambiguous_qty_pct": 0.07521429193466117,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07521429193466117,
            "retail_notional_pct": 0.09974654519800609,
            "mixed_notional_pct": 0.27975367529430845,
            "instit_notional_pct": 0.5452681243376974,
            "ambiguous_notional_pct": 0.07523165516998798,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07523165516998798,
            "run_retail_pct": 0.7731681551906271,
            "run_mixed_pct": 0.19715739940459043,
            "run_instit_pct": 0.019878997407087293,
            "run_unclear_pct": 0.00979544799769519,
            "avg_trade_size": 1443.3145264091338,
            "avg_run_notional": 2500.885815807164,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4585614136175934,
            "medium_confidence_pct": 0.3034668203207529,
            "low_confidence_pct": 0.031018918659368098,
            "na_confidence_pct": 0.20695284740228562,
            "avg_feature_coverage": 0.8761211946605204,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2847682119205298,
            "mixed_pct": 0.09536423841059603,
            "instit_pct": 0.2993377483443709,
            "ambiguous_pct": 0.3205298013245033,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3205298013245033,
            "retail_qty_pct": 0.05030838069899625,
            "mixed_qty_pct": 0.07553167596703696,
            "instit_qty_pct": 0.5378781334761502,
            "ambiguous_qty_pct": 0.33628180985781664,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.33628180985781664,
            "retail_notional_pct": 0.050324721098599236,
            "mixed_notional_pct": 0.07581151398473232,
            "instit_notional_pct": 0.5380090317885938,
            "ambiguous_notional_pct": 0.3358547331280747,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3358547331280747,
            "run_retail_pct": 0.5039164490861618,
            "run_mixed_pct": 0.13054830287206268,
            "run_instit_pct": 0.12010443864229765,
            "run_unclear_pct": 0.2454308093994778,
            "avg_trade_size": 3898.8119205298012,
            "avg_run_notional": 7685.647519582246,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.21409921671018275,
            "medium_confidence_pct": 0.08877284595300261,
            "low_confidence_pct": 0.32114882506527415,
            "na_confidence_pct": 0.37597911227154046,
            "avg_feature_coverage": 0.8331592689295036,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.48275926865475316,
            "mixed_pct": 0.3602984008869346,
            "instit_pct": 0.11314053779807204,
            "ambiguous_pct": 0.043651464757502305,
            "unobservable_pct": 0.00015032790273784692,
            "unclear_pct": 0.04380179266024015,
            "retail_qty_pct": 0.08689832451461156,
            "mixed_qty_pct": 0.2583507059618942,
            "instit_qty_pct": 0.39806603002659147,
            "ambiguous_qty_pct": 0.03670823882985408,
            "unobservable_qty_pct": 0.2199767006670487,
            "unclear_qty_pct": 0.25668493949690274,
            "retail_notional_pct": 0.08732700785295279,
            "mixed_notional_pct": 0.259241748682809,
            "instit_notional_pct": 0.3990236758908904,
            "ambiguous_notional_pct": 0.03694426299998033,
            "unobservable_notional_pct": 0.21746330457336735,
            "unclear_notional_pct": 0.2544075675733477,
            "run_retail_pct": 0.7575431034482759,
            "run_mixed_pct": 0.23038793103448277,
            "run_instit_pct": 0.0045566502463054185,
            "run_unclear_pct": 0.007512315270935961,
            "avg_trade_size": 4466.723190709736,
            "avg_run_notional": 7318.522415024631,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3624692118226601,
            "medium_confidence_pct": 0.35095443349753697,
            "low_confidence_pct": 0.048676108374384235,
            "na_confidence_pct": 0.23790024630541873,
            "avg_feature_coverage": 0.8871813423645318,
            "observable_run_pct": 0.9997536945812808,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.10410557184750734,
            "mixed_pct": 0.35777126099706746,
            "instit_pct": 0.0747800586510264,
            "ambiguous_pct": 0.45454545454545453,
            "unobservable_pct": 0.008797653958944282,
            "unclear_pct": 0.4633431085043988,
            "retail_qty_pct": 0.05219454329774614,
            "mixed_qty_pct": 0.15480427046263345,
            "instit_qty_pct": 0.370699881376038,
            "ambiguous_qty_pct": 0.3790035587188612,
            "unobservable_qty_pct": 0.04329774614472123,
            "unclear_qty_pct": 0.4223013048635824,
            "retail_notional_pct": 0.053582425136408554,
            "mixed_notional_pct": 0.16463545619889156,
            "instit_notional_pct": 0.3536669196729059,
            "ambiguous_notional_pct": 0.3868560871869048,
            "unobservable_notional_pct": 0.041259111804889226,
            "unclear_notional_pct": 0.428115198991794,
            "run_retail_pct": 0.3959731543624161,
            "run_mixed_pct": 0.28187919463087246,
            "run_instit_pct": 0.06711409395973154,
            "run_unclear_pct": 0.2550335570469799,
            "avg_trade_size": 102.38563049853373,
            "avg_run_notional": 468.63758389261744,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.2751677852348993,
            "low_confidence_pct": 0.18791946308724833,
            "na_confidence_pct": 0.5369127516778524,
            "avg_feature_coverage": 0.9137583892617448,
            "observable_run_pct": 0.9932885906040269,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7478813559322034,
            "mixed_pct": 0.24152542372881355,
            "instit_pct": 0.01059322033898305,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.14206916848529727,
            "mixed_qty_pct": 0.7273964685931691,
            "instit_qty_pct": 0.13053436292153364,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.14435909090653914,
            "mixed_notional_pct": 0.7321393651884937,
            "instit_notional_pct": 0.12350154390496709,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8405797101449275,
            "run_mixed_pct": 0.1570048309178744,
            "run_instit_pct": 0.0024154589371980675,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 1132.1858050847457,
            "avg_run_notional": 1290.8012077294684,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6352657004830918,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.20772946859903382,
            "na_confidence_pct": 0.1570048309178744,
            "avg_feature_coverage": 0.8518115942028982,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.5843133443483332,
            "mixed_pct": 0.24302653319078626,
            "instit_pct": 0.13009038779278842,
            "ambiguous_pct": 0.042569734668092135,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.042569734668092135,
            "retail_qty_pct": 0.07540247974309351,
            "mixed_qty_pct": 0.3151331320048489,
            "instit_qty_pct": 0.47286318878798833,
            "ambiguous_qty_pct": 0.13660119946406923,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13660119946406923,
            "retail_notional_pct": 0.07543806756600709,
            "mixed_notional_pct": 0.31614122110180604,
            "instit_notional_pct": 0.4722370616480959,
            "ambiguous_notional_pct": 0.136183649684091,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.136183649684091,
            "run_retail_pct": 0.829126213592233,
            "run_mixed_pct": 0.1486130374479889,
            "run_instit_pct": 0.015048543689320388,
            "run_unclear_pct": 0.007212205270457697,
            "avg_trade_size": 2456.799203032365,
            "avg_run_notional": 3505.9649098474342,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5443134535367545,
            "medium_confidence_pct": 0.2804438280166435,
            "low_confidence_pct": 0.019417475728155338,
            "na_confidence_pct": 0.1558252427184466,
            "avg_feature_coverage": 0.8633668515950067,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3800379304100868,
            "mixed_pct": 0.3458767356974716,
            "instit_pct": 0.22646742082741664,
            "ambiguous_pct": 0.04713663524859667,
            "unobservable_pct": 0.0004812778164282515,
            "unclear_pct": 0.04761791306502492,
            "retail_qty_pct": 0.09855900621245074,
            "mixed_qty_pct": 0.23248078265013986,
            "instit_qty_pct": 0.6042223806230048,
            "ambiguous_qty_pct": 0.04833642221128352,
            "unobservable_qty_pct": 0.016401408303121104,
            "unclear_qty_pct": 0.06473783051440463,
            "retail_notional_pct": 0.09845293244606573,
            "mixed_notional_pct": 0.2325551091790874,
            "instit_notional_pct": 0.6042195867185236,
            "ambiguous_notional_pct": 0.048482695618948385,
            "unobservable_notional_pct": 0.01628967603737485,
            "unclear_notional_pct": 0.06477237165632324,
            "run_retail_pct": 0.7203603026391414,
            "run_mixed_pct": 0.24979035738177569,
            "run_instit_pct": 0.0151319570727295,
            "run_unclear_pct": 0.01471738290635335,
            "avg_trade_size": 6497.2587309037535,
            "avg_run_notional": 12847.10431958015,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3145487265977594,
            "medium_confidence_pct": 0.3692159837185418,
            "low_confidence_pct": 0.05172754939556971,
            "na_confidence_pct": 0.26450774028812907,
            "avg_feature_coverage": 0.8866492985216662,
            "observable_run_pct": 0.9994912044321748,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4674076053870254,
            "mixed_pct": 0.32897530699214517,
            "instit_pct": 0.1571933419454467,
            "ambiguous_pct": 0.04605995812731079,
            "unobservable_pct": 0.00036378754807192597,
            "unclear_pct": 0.04642374567538272,
            "retail_qty_pct": 0.08374431002796816,
            "mixed_qty_pct": 0.22949202474347213,
            "instit_qty_pct": 0.5380252079386943,
            "ambiguous_qty_pct": 0.04229860822733201,
            "unobservable_qty_pct": 0.1064398490625334,
            "unclear_qty_pct": 0.1487384572898654,
            "retail_notional_pct": 0.08356519831441561,
            "mixed_notional_pct": 0.22776503184410457,
            "instit_notional_pct": 0.5458860548150309,
            "ambiguous_notional_pct": 0.0425611738326089,
            "unobservable_notional_pct": 0.10022254119383985,
            "unclear_notional_pct": 0.14278371502644874,
            "run_retail_pct": 0.7642805859606253,
            "run_mixed_pct": 0.21852602939879837,
            "run_instit_pct": 0.007696086458162764,
            "run_unclear_pct": 0.009497298182413624,
            "avg_trade_size": 4448.6549823303185,
            "avg_run_notional": 7547.54486264186,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.38071065989847713,
            "medium_confidence_pct": 0.3496995881145218,
            "low_confidence_pct": 0.04156642440578907,
            "na_confidence_pct": 0.22802332758121197,
            "avg_feature_coverage": 0.8840491995314329,
            "observable_run_pct": 0.9994457810079228,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.47489324901356683,
            "mixed_pct": 0.2900563933481073,
            "instit_pct": 0.19534079238960056,
            "ambiguous_pct": 0.03970956524872529,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.03970956524872529,
            "retail_qty_pct": 0.11044686196626718,
            "mixed_qty_pct": 0.27912258036465726,
            "instit_qty_pct": 0.5476846345197686,
            "ambiguous_qty_pct": 0.06274592314930699,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.06274592314930699,
            "retail_notional_pct": 0.11189310625553674,
            "mixed_notional_pct": 0.2801466232966345,
            "instit_notional_pct": 0.5453274209516187,
            "ambiguous_notional_pct": 0.0626328494962101,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0626328494962101,
            "run_retail_pct": 0.7824116602363892,
            "run_mixed_pct": 0.1918059893441117,
            "run_instit_pct": 0.018402841570212505,
            "run_unclear_pct": 0.0073795088492865455,
            "avg_trade_size": 1656.788597012774,
            "avg_run_notional": 2815.7492038704145,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.45725396533774265,
            "medium_confidence_pct": 0.31685957498928286,
            "low_confidence_pct": 0.026700961479576214,
            "na_confidence_pct": 0.19918549819339826,
            "avg_feature_coverage": 0.8736618898891542,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.13775829680651222,
            "mixed_pct": 0.19661865998747652,
            "instit_pct": 0.21540388227927365,
            "ambiguous_pct": 0.443331246086412,
            "unobservable_pct": 0.0068879148403256105,
            "unclear_pct": 0.45021916092673764,
            "retail_qty_pct": 0.0603386167146974,
            "mixed_qty_pct": 0.09672190201729107,
            "instit_qty_pct": 0.426693083573487,
            "ambiguous_qty_pct": 0.3937319884726225,
            "unobservable_qty_pct": 0.022514409221902017,
            "unclear_qty_pct": 0.4162463976945245,
            "retail_notional_pct": 0.06176698263396965,
            "mixed_notional_pct": 0.09843532546440517,
            "instit_notional_pct": 0.41886706630305737,
            "ambiguous_notional_pct": 0.3999132011459118,
            "unobservable_notional_pct": 0.021017424452656024,
            "unclear_notional_pct": 0.4209306255985678,
            "run_retail_pct": 0.5062034739454094,
            "run_mixed_pct": 0.17121588089330025,
            "run_instit_pct": 0.0794044665012407,
            "run_unclear_pct": 0.24317617866004965,
            "avg_trade_size": 150.05291170945523,
            "avg_run_notional": 594.6265508684863,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.228287841191067,
            "medium_confidence_pct": 0.18858560794044665,
            "low_confidence_pct": 0.1687344913151365,
            "na_confidence_pct": 0.4143920595533499,
            "avg_feature_coverage": 0.8842431761786598,
            "observable_run_pct": 0.9900744416873449,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3722365038560411,
            "mixed_pct": 0.15012853470437018,
            "instit_pct": 0.20051413881748073,
            "ambiguous_pct": 0.27712082262210797,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.27712082262210797,
            "retail_qty_pct": 0.08350783204612205,
            "mixed_qty_pct": 0.13668008267159795,
            "instit_qty_pct": 0.39995104971173717,
            "ambiguous_qty_pct": 0.3798610355705428,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3798610355705428,
            "retail_notional_pct": 0.08450176117226588,
            "mixed_notional_pct": 0.138456851440136,
            "instit_notional_pct": 0.3964165057062187,
            "ambiguous_notional_pct": 0.3806248816813794,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3806248816813794,
            "run_retail_pct": 0.5817104149026249,
            "run_mixed_pct": 0.1642675698560542,
            "run_instit_pct": 0.07112616426756986,
            "run_unclear_pct": 0.18289585097375105,
            "avg_trade_size": 4000.46118251928,
            "avg_run_notional": 6588.397121083827,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1896697713801863,
            "medium_confidence_pct": 0.14394580863674852,
            "low_confidence_pct": 0.31922099915325997,
            "na_confidence_pct": 0.3471634208298052,
            "avg_feature_coverage": 0.8370448772226926,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6010911424903723,
            "mixed_pct": 0.2086007702182285,
            "instit_pct": 0.15661103979460847,
            "ambiguous_pct": 0.033697047496790755,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.033697047496790755,
            "retail_qty_pct": 0.11652656732479515,
            "mixed_qty_pct": 0.46780506842319913,
            "instit_qty_pct": 0.3767980795923053,
            "ambiguous_qty_pct": 0.038870284659700396,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.038870284659700396,
            "retail_notional_pct": 0.11460621100533805,
            "mixed_notional_pct": 0.4645662005786456,
            "instit_notional_pct": 0.37917048851182006,
            "ambiguous_notional_pct": 0.041657099904196304,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.041657099904196304,
            "run_retail_pct": 0.8175735950044603,
            "run_mixed_pct": 0.1480820695807315,
            "run_instit_pct": 0.019625334522747548,
            "run_unclear_pct": 0.014719000892060661,
            "avg_trade_size": 2256.2315147625163,
            "avg_run_notional": 3135.7793933987514,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4335414808206958,
            "medium_confidence_pct": 0.21721677074041035,
            "low_confidence_pct": 0.1864406779661017,
            "na_confidence_pct": 0.16280107047279216,
            "avg_feature_coverage": 0.8546833184656555,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "6m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.6118574646733566,
            "mixed_pct": 0.2406717182060209,
            "instit_pct": 0.10810976858488634,
            "ambiguous_pct": 0.03936104853573623,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.03936104853573623,
            "retail_qty_pct": 0.10017250392054365,
            "mixed_qty_pct": 0.30462250765439475,
            "instit_qty_pct": 0.4855283399298036,
            "ambiguous_qty_pct": 0.109676648495258,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.109676648495258,
            "retail_notional_pct": 0.10025269762406175,
            "mixed_notional_pct": 0.30486407772102464,
            "instit_notional_pct": 0.48556519805399295,
            "ambiguous_notional_pct": 0.10931802660092067,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10931802660092067,
            "run_retail_pct": 0.8325073214687992,
            "run_mixed_pct": 0.1486539761207479,
            "run_instit_pct": 0.012812570398738454,
            "run_unclear_pct": 0.00602613201171435,
            "avg_trade_size": 1853.2484845381937,
            "avg_run_notional": 2548.2688527821583,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4959731921603965,
            "medium_confidence_pct": 0.32228542464519033,
            "low_confidence_pct": 0.02706127506195089,
            "na_confidence_pct": 0.15468010813246227,
            "avg_feature_coverage": 0.8643317751745887,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3640952969123575,
            "mixed_pct": 0.3314635102618179,
            "instit_pct": 0.23223305051084864,
            "ambiguous_pct": 0.07186219515007701,
            "unobservable_pct": 0.0003459471648989194,
            "unclear_pct": 0.07220814231497592,
            "retail_qty_pct": 0.09906674232968514,
            "mixed_qty_pct": 0.22665445861094843,
            "instit_qty_pct": 0.6132417609800268,
            "ambiguous_qty_pct": 0.0460466607286452,
            "unobservable_qty_pct": 0.014990377350694402,
            "unclear_qty_pct": 0.061037038079339606,
            "retail_notional_pct": 0.09899735662798469,
            "mixed_notional_pct": 0.22664684103046706,
            "instit_notional_pct": 0.6133703262496583,
            "ambiguous_notional_pct": 0.04599867085473872,
            "unobservable_notional_pct": 0.014986805237151275,
            "unclear_notional_pct": 0.06098547609189,
            "run_retail_pct": 0.7215499717974097,
            "run_mixed_pct": 0.24601704926407203,
            "run_instit_pct": 0.01536775113608548,
            "run_unclear_pct": 0.017065227802432872,
            "avg_trade_size": 5564.145233104325,
            "avg_run_notional": 11554.085580228388,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.30955269627406534,
            "medium_confidence_pct": 0.3740993795430116,
            "low_confidence_pct": 0.053265647116418166,
            "na_confidence_pct": 0.2630822770665049,
            "avg_feature_coverage": 0.8865891361493352,
            "observable_run_pct": 0.9995849430094824,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4406420920806776,
            "mixed_pct": 0.30782649750133034,
            "instit_pct": 0.1706377309118844,
            "ambiguous_pct": 0.08062160659056627,
            "unobservable_pct": 0.0002720729155413651,
            "unclear_pct": 0.08089367950610764,
            "retail_qty_pct": 0.08107698870422139,
            "mixed_qty_pct": 0.21232101990772073,
            "instit_qty_pct": 0.5750253277668449,
            "ambiguous_qty_pct": 0.06514461215847983,
            "unobservable_qty_pct": 0.06643205146273315,
            "unclear_qty_pct": 0.13157666362121298,
            "retail_notional_pct": 0.08088946933138244,
            "mixed_notional_pct": 0.2108041139911716,
            "instit_notional_pct": 0.5806835404821725,
            "ambiguous_notional_pct": 0.06619054501256233,
            "unobservable_notional_pct": 0.06143233118271116,
            "unclear_notional_pct": 0.1276228761952735,
            "run_retail_pct": 0.7645936277817685,
            "run_mixed_pct": 0.21277491165821344,
            "run_instit_pct": 0.009723038522098144,
            "run_unclear_pct": 0.01290842203791985,
            "avg_trade_size": 4196.422110685663,
            "avg_run_notional": 7610.268453021035,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.379720934282418,
            "medium_confidence_pct": 0.3537662262275336,
            "low_confidence_pct": 0.040829505793915116,
            "na_confidence_pct": 0.22568333369613328,
            "avg_feature_coverage": 0.8834189541203189,
            "observable_run_pct": 0.9995573840672777,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4919371727748691,
            "mixed_pct": 0.26586387434554976,
            "instit_pct": 0.20010471204188482,
            "ambiguous_pct": 0.042094240837696334,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.042094240837696334,
            "retail_qty_pct": 0.12093863957812732,
            "mixed_qty_pct": 0.26485252983520036,
            "instit_qty_pct": 0.5380318031260873,
            "ambiguous_qty_pct": 0.076177027460585,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.076177027460585,
            "retail_notional_pct": 0.12229737032157428,
            "mixed_notional_pct": 0.2643944787676955,
            "instit_notional_pct": 0.5364515754959194,
            "ambiguous_notional_pct": 0.07685657541481089,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07685657541481089,
            "run_retail_pct": 0.7965066419307979,
            "run_mixed_pct": 0.17577051647793898,
            "run_instit_pct": 0.019742023557414636,
            "run_unclear_pct": 0.00798081803384847,
            "avg_trade_size": 1728.6663664921466,
            "avg_run_notional": 2889.329821306684,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.46335999439942593,
            "medium_confidence_pct": 0.3295587797749269,
            "low_confidence_pct": 0.02332989131385967,
            "na_confidence_pct": 0.18375133451178746,
            "avg_feature_coverage": 0.8701918196615152,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5332906530089628,
            "mixed_pct": 0.20918693982074263,
            "instit_pct": 0.17941741357234314,
            "ambiguous_pct": 0.07810499359795134,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.07810499359795134,
            "retail_qty_pct": 0.11438901599543166,
            "mixed_qty_pct": 0.41677621015355665,
            "instit_qty_pct": 0.39824263923997644,
            "ambiguous_qty_pct": 0.07059213461103524,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07059213461103524,
            "retail_notional_pct": 0.10981864204644819,
            "mixed_notional_pct": 0.39006792342526747,
            "instit_notional_pct": 0.4120655106880714,
            "ambiguous_notional_pct": 0.08804792384021298,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08804792384021298,
            "run_retail_pct": 0.7739445114595899,
            "run_mixed_pct": 0.1609167671893848,
            "run_instit_pct": 0.030880579010856453,
            "run_unclear_pct": 0.03425814234016888,
            "avg_trade_size": 1824.4376600512164,
            "avg_run_notional": 2750.0811821471652,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3551266586248492,
            "medium_confidence_pct": 0.21302774427020507,
            "low_confidence_pct": 0.23667068757539203,
            "na_confidence_pct": 0.1951749095295537,
            "avg_feature_coverage": 0.8546320868516282,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.42301458670988656,
            "mixed_pct": 0.18268117619819402,
            "instit_pct": 0.1539708265802269,
            "ambiguous_pct": 0.23732345450335726,
            "unobservable_pct": 0.003009956008335263,
            "unclear_pct": 0.24033341051169252,
            "retail_qty_pct": 0.09855750874352827,
            "mixed_qty_pct": 0.1621599951127877,
            "instit_qty_pct": 0.37045832887884295,
            "ambiguous_qty_pct": 0.3581410266200345,
            "unobservable_qty_pct": 0.010683140644806573,
            "unclear_qty_pct": 0.3688241672648411,
            "retail_notional_pct": 0.0986557538923984,
            "mixed_notional_pct": 0.162539986700712,
            "instit_notional_pct": 0.36949166829380153,
            "ambiguous_notional_pct": 0.3589585465138571,
            "unobservable_notional_pct": 0.010354044599230958,
            "unclear_notional_pct": 0.36931259111308806,
            "run_retail_pct": 0.6434166355837374,
            "run_mixed_pct": 0.1525550167847818,
            "run_instit_pct": 0.05594927265945543,
            "run_unclear_pct": 0.14807907497202535,
            "avg_trade_size": 3134.073396619588,
            "avg_run_notional": 5048.885863483774,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.2215591197314435,
            "medium_confidence_pct": 0.1980604252144722,
            "low_confidence_pct": 0.27974636329727715,
            "na_confidence_pct": 0.30063409175680716,
            "avg_feature_coverage": 0.8458224543080939,
            "observable_run_pct": 0.999627004848937,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.14344262295081966,
            "mixed_pct": 0.19613583138173302,
            "instit_pct": 0.2148711943793911,
            "ambiguous_pct": 0.4385245901639344,
            "unobservable_pct": 0.00702576112412178,
            "unclear_pct": 0.4455503512880562,
            "retail_qty_pct": 0.008635853735446224,
            "mixed_qty_pct": 0.016238920891844172,
            "instit_qty_pct": 0.08101881099895733,
            "ambiguous_qty_pct": 0.05559468180834338,
            "unobservable_qty_pct": 0.8385117325654089,
            "unclear_qty_pct": 0.8941064143737523,
            "retail_notional_pct": 0.008672241724581921,
            "mixed_notional_pct": 0.016129236112476433,
            "instit_notional_pct": 0.0780855345543518,
            "ambiguous_notional_pct": 0.05525187468076561,
            "unobservable_notional_pct": 0.8418611129278243,
            "unclear_notional_pct": 0.8971129876085899,
            "run_retail_pct": 0.48283261802575106,
            "run_mixed_pct": 0.18454935622317598,
            "run_instit_pct": 0.09012875536480687,
            "run_unclear_pct": 0.24248927038626608,
            "avg_trade_size": 1167.3494145199063,
            "avg_run_notional": 4278.611158798283,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.19742489270386265,
            "medium_confidence_pct": 0.1630901287553648,
            "low_confidence_pct": 0.21244635193133046,
            "na_confidence_pct": 0.4270386266094421,
            "avg_feature_coverage": 0.8799356223175965,
            "observable_run_pct": 0.9892703862660944,
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
          "trade_id": "BMLL-164",
          "timestamp": "2026-04-06T08:59:30.064900",
          "price": 0.635,
          "size": 200.0,
          "notional": 127.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56999,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-163",
          "timestamp": "2026-04-06T08:59:29.037300",
          "price": 0.64,
          "size": 100.0,
          "notional": 64.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56998,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-162",
          "timestamp": "2026-04-06T08:59:22.669300",
          "price": 0.635,
          "size": 100.0,
          "notional": 63.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56997,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-161",
          "timestamp": "2026-04-06T08:59:14.492700",
          "price": 0.635,
          "size": 200.0,
          "notional": 127.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56996,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-160",
          "timestamp": "2026-04-06T08:58:36.874100",
          "price": 0.64,
          "size": 200.0,
          "notional": 128.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56995,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-159",
          "timestamp": "2026-04-06T08:58:32.719500",
          "price": 0.635,
          "size": 100.0,
          "notional": 63.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56994,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-158",
          "timestamp": "2026-04-06T08:58:17.752100",
          "price": 0.635,
          "size": 100.0,
          "notional": 63.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56993,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-157",
          "timestamp": "2026-04-06T08:58:12.110200",
          "price": 0.635,
          "size": 300.0,
          "notional": 190.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56992,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-156",
          "timestamp": "2026-04-06T08:58:09.309400",
          "price": 0.64,
          "size": 200.0,
          "notional": 128.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56991,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-155",
          "timestamp": "2026-04-06T08:57:46.636000",
          "price": 0.635,
          "size": 200.0,
          "notional": 127.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56990,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-154",
          "timestamp": "2026-04-06T08:57:37.391200",
          "price": 0.64,
          "size": 200.0,
          "notional": 128.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56989,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-153",
          "timestamp": "2026-04-06T08:57:18.396300",
          "price": 0.635,
          "size": 100.0,
          "notional": 63.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 56988,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-152",
          "timestamp": "2026-04-06T08:57:14.903600",
          "price": 0.635,
          "size": 200.0,
          "notional": 127.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 56988,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-151",
          "timestamp": "2026-04-06T08:57:10.750800",
          "price": 0.64,
          "size": 200.0,
          "notional": 128.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56987,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-150",
          "timestamp": "2026-04-06T08:56:37.244700",
          "price": 0.64,
          "size": 200.0,
          "notional": 128.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56986,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-149",
          "timestamp": "2026-04-06T08:56:31.315800",
          "price": 0.635,
          "size": 100.0,
          "notional": 63.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 56985,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-148",
          "timestamp": "2026-04-06T08:56:29.930500",
          "price": 0.635,
          "size": 400.0,
          "notional": 254.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 56985,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-147",
          "timestamp": "2026-04-06T08:56:18.428600",
          "price": 0.635,
          "size": 1200.0,
          "notional": 762.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 56984,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-146",
          "timestamp": "2026-04-06T08:56:13.522000",
          "price": 0.635,
          "size": 400.0,
          "notional": 254.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 56984,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-145",
          "timestamp": "2026-04-06T08:56:13.100400",
          "price": 0.64,
          "size": 10000.0,
          "notional": 6400.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 56983,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-144",
          "timestamp": "2026-04-06T08:56:10.271300",
          "price": 0.64,
          "size": 100.0,
          "notional": 64.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 56983,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-143",
          "timestamp": "2026-04-06T08:54:13.317300",
          "price": 0.64,
          "size": 200.0,
          "notional": 128.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56982,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-142",
          "timestamp": "2026-04-06T08:51:40.778900",
          "price": 0.635,
          "size": 100.0,
          "notional": 63.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56981,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-141",
          "timestamp": "2026-04-06T08:50:28.303300",
          "price": 0.635,
          "size": 200.0,
          "notional": 127.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56980,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-140",
          "timestamp": "2026-04-06T08:46:38.760900",
          "price": 0.64,
          "size": 300.0,
          "notional": 192.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56979,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-139",
          "timestamp": "2026-04-06T08:43:09.669800",
          "price": 0.635,
          "size": 200.0,
          "notional": 127.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56978,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-138",
          "timestamp": "2026-04-06T08:43:03.318400",
          "price": 0.64,
          "size": 800.0,
          "notional": 512.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 56977,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-137",
          "timestamp": "2026-04-06T08:32:28.413000",
          "price": 0.64,
          "size": 300.0,
          "notional": 192.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56976,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-136",
          "timestamp": "2026-04-06T08:17:22.282300",
          "price": 0.64,
          "size": 300.0,
          "notional": 192.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 56975,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-135",
          "timestamp": "2026-04-06T08:16:06.312900",
          "price": 0.635,
          "size": 900.0,
          "notional": 571.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 56974,
          "d1": "SINGLE_FILL",
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
      "total_trades": 48829,
      "price_moving_trades": 12758,
      "pct_price_moving": 26.127915787749085,
      "all_movers": {
        "count": 12758,
        "avg_size": 1386.8705126195327,
        "median_size": 202.5,
        "retail_count": 10421,
        "mixed_count": 2057,
        "institutional_count": 217,
        "ambiguous_count": 63,
        "unobservable_count": 0,
        "retail_pct": 81.68208183100799,
        "mixed_pct": 16.123216805141872,
        "instit_pct": 1.7008935569838532,
        "unclear_pct": 0.49380780686627995
      },
      "positive_movers": {
        "count": 6370,
        "avg_size": 1360.9722135007848,
        "median_size": 138.0,
        "retail_count": 5207,
        "mixed_count": 1042,
        "institutional_count": 99,
        "ambiguous_count": 22,
        "unobservable_count": 0,
        "retail_pct": 81.7425431711146,
        "mixed_pct": 16.357927786499214,
        "instit_pct": 1.554160125588697,
        "unclear_pct": 0.3453689167974882
      },
      "negative_movers": {
        "count": 6388,
        "avg_size": 1412.695835942392,
        "median_size": 204.00000000000003,
        "retail_count": 5214,
        "mixed_count": 1015,
        "institutional_count": 118,
        "ambiguous_count": 41,
        "unobservable_count": 0,
        "retail_pct": 81.62179085785849,
        "mixed_pct": 15.889167188478398,
        "instit_pct": 1.8472135253600501,
        "unclear_pct": 0.6418284283030683
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "Sasseur Reit",
      "mapping": {
        "ticker_to_security": "Sasseur Reit",
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
            "avg_short_ratio": 0.1513950652032717,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Elevated short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06461417129083272,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0674427555237921,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.12759032288040129,
        "interpretation": "Moderate negative - shorts somewhat predict drops"
      },
      "peaks": [
        {
          "date": "2026-03-25",
          "short_ratio": 0.36836158192090396,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-27",
          "short_ratio": 0.26441708229426436,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-24",
          "short_ratio": 0.2476085356880059,
          "return_pct": 0.7936507936507908
        },
        {
          "date": "2025-12-02",
          "short_ratio": 0.23535638673253353,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-09",
          "short_ratio": 0.20926869577193224,
          "return_pct": -0.7407407407407418
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.07623436707753818
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.03425148828958405
          }
        ],
        "mom_change": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.07623436707753818,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 90.6731381664805
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306,
            "change_pct": -86.54362251882017
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978,
            "change_pct": -13.175978023528142
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508,
            "change_pct": 363.4885487569835
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344,
            "change_pct": -15.008538631225035
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901,
            "change_pct": -3.2825191323453518
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607,
            "change_pct": 7.664814402874552
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169,
            "change_pct": -22.95440661798473
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575,
            "change_pct": -56.329848434615435
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631,
            "change_pct": 5.067221970287669
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.03425148828958405,
            "change_pct": 39.08434243757299
          }
        ],
        "interpretation": "Shorts covering significantly (-48% MoM) | YoY: +123% ⬆️"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-04-06",
            "short_ratio": 0.1613056945437217,
            "short_vol": 203100,
            "total_vol": 1259100,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.05267156242086604,
            "short_vol": 41600,
            "total_vol": 789800,
            "close": 0.635,
            "return": -0.0078125
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.01472584426802682,
            "short_vol": 35800,
            "total_vol": 2431100,
            "close": 0.64,
            "return": 0.007874015748031482
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.10057279872119355,
            "short_vol": 151000,
            "total_vol": 1501400,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.06768748912476075,
            "short_vol": 38900,
            "total_vol": 574700,
            "close": 0.63,
            "return": -0.007874015748031482
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.26441708229426436,
            "short_vol": 339300,
            "total_vol": 1283200,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.1595657756507529,
            "short_vol": 136700,
            "total_vol": 856700,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.36836158192090396,
            "short_vol": 97800,
            "total_vol": 265500,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.2476085356880059,
            "short_vol": 134600,
            "total_vol": 543600,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.18642151319994102,
            "short_vol": 379200,
            "total_vol": 2034100,
            "close": 0.63,
            "return": -0.015625
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.1987347631538343,
            "short_vol": 386400,
            "total_vol": 1944300,
            "close": 0.64,
            "return": 0.0
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.17494422918868147,
            "short_vol": 149000,
            "total_vol": 851700,
            "close": 0.64,
            "return": -0.015384615384615441
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.11682385153635534,
            "short_vol": 192000,
            "total_vol": 1643500,
            "close": 0.65,
            "return": 0.007751937984496138
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.13784764207980654,
            "short_vol": 114000,
            "total_vol": 827000,
            "close": 0.645,
            "return": 0.015748031496062964
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.18052071005917159,
            "short_vol": 762700,
            "total_vol": 4225000,
            "close": 0.635,
            "return": -0.06617647058823539
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.17986120035985093,
            "short_vol": 559800,
            "total_vol": 3112400,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.16983923463852452,
            "short_vol": 172200,
            "total_vol": 1013900,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.11613756613756614,
            "short_vol": 131700,
            "total_vol": 1134000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.1979909267660402,
            "short_vol": 183300,
            "total_vol": 925800,
            "close": 0.68,
            "return": 0.014925373134328401
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.20926869577193224,
            "short_vol": 607800,
            "total_vol": 2904400,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.02449013707790037,
            "short_vol": 29300,
            "total_vol": 1196400,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0008945998698763826,
            "short_vol": 1100,
            "total_vol": 1229600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0033744990977901718,
            "short_vol": 14400,
            "total_vol": 4267300,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.03416203059805285,
            "short_vol": 39300,
            "total_vol": 1150400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.05836125856291332,
            "short_vol": 196800,
            "total_vol": 3372100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0067413905133203375,
            "short_vol": 16600,
            "total_vol": 2462400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0060887923385246154,
            "short_vol": 39800,
            "total_vol": 6536600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0008496176720475786,
            "short_vol": 800,
            "total_vol": 941600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 382700,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1809900,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.09221772379667116,
            "short_vol": 20500,
            "total_vol": 222300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.04595755760968624,
            "short_vol": 105900,
            "total_vol": 2304300,
            "close": 0.69,
            "return": 0.014705882352941124
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.06251680559290132,
            "short_vol": 46500,
            "total_vol": 743800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.009060706735125339,
            "short_vol": 18000,
            "total_vol": 1986600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.022450728363324766,
            "short_vol": 13100,
            "total_vol": 583500,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.006556033599672198,
            "short_vol": 3200,
            "total_vol": 488100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 726400,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.002091020910209102,
            "short_vol": 1700,
            "total_vol": 813000,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.030951223464592448,
            "short_vol": 19100,
            "total_vol": 617100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.01563966218329684,
            "short_vol": 10000,
            "total_vol": 639400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 775000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.025183823529411765,
            "short_vol": 13700,
            "total_vol": 544000,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.025774609267891418,
            "short_vol": 9400,
            "total_vol": 364700,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.004020369874028411,
            "short_vol": 4500,
            "total_vol": 1119300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.03738632536207477,
            "short_vol": 11100,
            "total_vol": 296900,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0007983273141988215,
            "short_vol": 2100,
            "total_vol": 2630500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.025203641590800192,
            "short_vol": 26300,
            "total_vol": 1043500,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.016331658291457288,
            "short_vol": 3900,
            "total_vol": 238800,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.09597292724196277,
            "short_vol": 141800,
            "total_vol": 1477500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 285400,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.018341650418057437,
            "short_vol": 55500,
            "total_vol": 3025900,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.043049733771383256,
            "short_vol": 38000,
            "total_vol": 882700,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.012526652452025586,
            "short_vol": 14100,
            "total_vol": 1125600,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.05860180641490648,
            "short_vol": 82400,
            "total_vol": 1406100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.008310957678046285,
            "short_vol": 6500,
            "total_vol": 782100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0022742213456994117,
            "short_vol": 12800,
            "total_vol": 5628300,
            "close": 0.68,
            "return": -0.014492753623188248
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 540300,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 319100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0015347885402455662,
            "short_vol": 900,
            "total_vol": 586400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.007297551789077213,
            "short_vol": 6200,
            "total_vol": 849600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 772400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0003454231433506045,
            "short_vol": 200,
            "total_vol": 579000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0045684058667949026,
            "short_vol": 3800,
            "total_vol": 831800,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.020073603211776515,
            "short_vol": 6000,
            "total_vol": 298900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.00038550501156515033,
            "short_vol": 200,
            "total_vol": 518800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0137524557956778,
            "short_vol": 7700,
            "total_vol": 559900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.023554603854389723,
            "short_vol": 4400,
            "total_vol": 186800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0009287925696594427,
            "short_vol": 300,
            "total_vol": 323000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0002644802962179318,
            "short_vol": 100,
            "total_vol": 378100,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.002872737719046251,
            "short_vol": 2000,
            "total_vol": 696200,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.013897662665824383,
            "short_vol": 4400,
            "total_vol": 316600,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.04928861788617886,
            "short_vol": 58200,
            "total_vol": 1180800,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.10728476821192053,
            "short_vol": 24300,
            "total_vol": 226500,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.13839969372128638,
            "short_vol": 72300,
            "total_vol": 522400,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.04323945307935024,
            "short_vol": 37000,
            "total_vol": 855700,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.01097147416716537,
            "short_vol": 5500,
            "total_vol": 501300,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.03396362760448031,
            "short_vol": 28200,
            "total_vol": 830300,
            "close": 0.67,
            "return": 0.0
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.04602865135203865,
            "short_vol": 54300,
            "total_vol": 1179700,
            "close": 0.67,
            "return": 0.0
          },
          {
            "date": "2025-12-10",
            "short_ratio": 0.16329378925331473,
            "short_vol": 23400,
            "total_vol": 143300,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2025-12-09",
            "short_ratio": 0.08530183727034121,
            "short_vol": 84500,
            "total_vol": 990600,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.1941747572815534,
            "short_vol": 98000,
            "total_vol": 504700,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2025-12-05",
            "short_ratio": 0.09750975097509751,
            "short_vol": 130000,
            "total_vol": 1333200,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-12-04",
            "short_ratio": 0.20565704183853858,
            "short_vol": 69800,
            "total_vol": 339400,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-03",
            "short_ratio": 0.1316745876432765,
            "short_vol": 47100,
            "total_vol": 357700,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2025-12-02",
            "short_ratio": 0.23535638673253353,
            "short_vol": 66700,
            "total_vol": 283400,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-01",
            "short_ratio": 0.1338889874091151,
            "short_vol": 75500,
            "total_vol": 563900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-28",
            "short_ratio": 0.09212067955477446,
            "short_vol": 62900,
            "total_vol": 682800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-27",
            "short_ratio": 0.06048687147868608,
            "short_vol": 56900,
            "total_vol": 940700,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-26",
            "short_ratio": 0.0897165991902834,
            "short_vol": 55400,
            "total_vol": 617500,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-25",
            "short_ratio": 0.0633817215293396,
            "short_vol": 93000,
            "total_vol": 1467300,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-24",
            "short_ratio": 0.16246397694524495,
            "short_vol": 135300,
            "total_vol": 832800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-21",
            "short_ratio": 0.15066529020417527,
            "short_vol": 262700,
            "total_vol": 1743600,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2025-11-20",
            "short_ratio": 0.06797493793592624,
            "short_vol": 57500,
            "total_vol": 845900,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2025-11-19",
            "short_ratio": 0.12824858757062146,
            "short_vol": 90800,
            "total_vol": 708000,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-11-18",
            "short_ratio": 0.18656074147633234,
            "short_vol": 281800,
            "total_vol": 1510500,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2025-11-17",
            "short_ratio": 0.16113818581983966,
            "short_vol": 307500,
            "total_vol": 1908300,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-11-14",
            "short_ratio": 0.05037980339588918,
            "short_vol": 90200,
            "total_vol": 1790400,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2025-11-13",
            "short_ratio": 0.00460510027234464,
            "short_vol": 18600,
            "total_vol": 4039000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-12",
            "short_ratio": 0.020994314039947514,
            "short_vol": 14400,
            "total_vol": 685900,
            "close": 0.68,
            "return": -0.014492753623188248
          },
          {
            "date": "2025-11-11",
            "short_ratio": 0.01329845214737301,
            "short_vol": 12200,
            "total_vol": 917400,
            "close": 0.69,
            "return": 0.007299270072992581
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06461417129083272,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "BMGU",
          "avg_short_ratio": 1.981924845409862e-05,
          "max_short_ratio": 0.007352941176470588,
          "is_target": false
        },
        {
          "ticker": "ODBU",
          "avg_short_ratio": 0.0008421957837138251,
          "max_short_ratio": 0.1091703056768559,
          "is_target": false
        },
        {
          "ticker": "D5IU",
          "avg_short_ratio": 0.0014677085570263477,
          "max_short_ratio": 0.2702329197017246,
          "is_target": false
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06297014548312115,
          "max_short_ratio": 0.583009889700239,
          "is_target": false
        },
        {
          "ticker": "AJBU",
          "avg_short_ratio": 0.08210123718363345,
          "max_short_ratio": 0.4312404120096428,
          "is_target": false
        },
        {
          "ticker": "JYEU",
          "avg_short_ratio": 0.10075553445084393,
          "max_short_ratio": 0.6966426355939308,
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
        "1D": {
          "opening": 0.07470197814777185,
          "continuous": 0.9126010849882465,
          "closing": 0.011824022454582831,
          "auctions": 0.08739891501175343,
          "other": 0.0
        },
        "1M": {
          "opening": 0.06476687882069085,
          "continuous": 0.872320201868416,
          "closing": 0.051195207029760076,
          "auctions": 0.127679798131584,
          "other": 0.0
        },
        "3M": {
          "opening": 0.05445779130275737,
          "continuous": 0.8475109870984798,
          "closing": 0.08545198384608499,
          "auctions": 0.15248901290152023,
          "other": 0.0
        },
        "6M": {
          "opening": 0.042377375289955076,
          "continuous": 0.8643309109686644,
          "closing": 0.08164946067880503,
          "auctions": 0.1356690890313356,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.2790782420882152,
        "1M": 0.1992472608106356,
        "3M": 0.23698223492656467,
        "6M": 0.22576570390895173
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0222
        },
        {
          "time": "09:00",
          "avg_share": 0.0942
        },
        {
          "time": "09:30",
          "avg_share": 0.0417
        },
        {
          "time": "10:00",
          "avg_share": 0.0429
        },
        {
          "time": "10:30",
          "avg_share": 0.0403
        },
        {
          "time": "11:00",
          "avg_share": 0.0357
        },
        {
          "time": "11:30",
          "avg_share": 0.0419
        },
        {
          "time": "12:00",
          "avg_share": 0.2279
        },
        {
          "time": "12:30",
          "avg_share": 0.0093
        },
        {
          "time": "13:00",
          "avg_share": 0.0228
        },
        {
          "time": "13:30",
          "avg_share": 0.0202
        },
        {
          "time": "14:00",
          "avg_share": 0.0359
        },
        {
          "time": "14:30",
          "avg_share": 0.0345
        },
        {
          "time": "15:00",
          "avg_share": 0.0294
        },
        {
          "time": "15:30",
          "avg_share": 0.0484
        },
        {
          "time": "16:00",
          "avg_share": 0.0375
        },
        {
          "time": "16:30",
          "avg_share": 0.0996
        },
        {
          "time": "17:00",
          "avg_share": 0.1157
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.98034869780942,
          "hhi": 0.22842863744028086,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ODBU",
          "auctions_pct": 6.683933895123413,
          "hhi": 0.3845211120742808,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D5IU",
          "auctions_pct": 11.669609968684174,
          "hhi": 0.4068927505736781,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BMGU",
          "auctions_pct": 0.7919102239682794,
          "hhi": 0.7450822550560073,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.151549346196278,
          "hhi": 0.17440558840584186,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "JYEU",
          "auctions_pct": 13.469875407287182,
          "hhi": 0.21027340325822574,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "AJBU",
          "auctions_pct": 19.565809144464296,
          "hhi": 0.1488144223441999,
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
