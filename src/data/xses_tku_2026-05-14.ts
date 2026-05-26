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
      "marketCap": 136857901.2,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 9857201.58,
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
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 66385419.165,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "J03",
      "name": "Jadason",
      "marketCap": 29467060.0,
      "sector": "Electronic Components",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 111252864.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "42F",
      "name": "Totm Tech",
      "marketCap": 37968515.550000004,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 157692000.6,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 245100000.0,
      "sector": "Software - Application",
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
    "asof_date": "2026-05-14",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "136.9M",
    "market_cap_category": "small",
    "universe_total": 557,
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
          "score_pca": 74.1472172351885,
          "score_pca_percentile": 74.1472172351885,
          "rank_pca": 145,
          "total": 557,
          "adv_notional_sgd": 587239.5,
          "adv_volume_shares": 2302900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.004038466140090127,
          "votes": 89.0,
          "trades": 89.0,
          "spread_pct": 0.019256308100929632,
          "spread_ticks": 1.0,
          "amihud": 3.2747744711943376e-08,
          "volatility": 0.36672265663294706
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5227530850212775,
          "loadings": {
            "log_adv": 0.547946254880704,
            "log_trades": 0.5034196611324426,
            "log_turnover": 0.5142651878673885,
            "neg_spread": 0.3681858634430157,
            "neg_amihud": 0.04363022149780936,
            "neg_vol": -0.2106903814320915
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
          "peer_median_adv": 23031.05,
          "peer_median_score_pca": 47.48653500897666,
          "peer_median_trades": 9.5,
          "peer_median_volatility": 0.13089774447040065,
          "peer_median_spread_pct": 0.040145138191730115,
          "peer_median_spread_ticks": 1.6934606804238705,
          "peer_median_amihud": 2.495619842260899e-07,
          "peer_median_turnover_ratio": 0.0008477077807793405,
          "target_vs_peer": {
            "score_pca_delta": 26.66,
            "adv_delta_pct": 2449.8,
            "trades_delta_pct": 836.84,
            "volatility_delta_pct": -180.16,
            "spread_pct_delta_pct": 52.03,
            "spread_ticks_delta_pct": -40.95,
            "amihud_delta_pct": 86.88,
            "turnover_ratio_delta_pct": 376.4
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 74.1472172351885,
            "rank_pca": 145,
            "adv": 587239.5,
            "trades": 89.0,
            "volatility": 0.36672265663294706,
            "spread_pct": 0.019256308100929632,
            "spread_ticks": 1.0,
            "amihud": 3.2747744711943376e-08,
            "turnover_ratio": 0.004038466140090127,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 4.488330341113106,
            "rank_pca": 533,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.49504950495049505,
            "spread_ticks": 20.833333333333332,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.423698384201077,
            "rank_pca": 542,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 47.57630161579892,
            "rank_pca": 293,
            "adv": 10925.1,
            "trades": 13.0,
            "volatility": 0.14481716778346201,
            "spread_pct": 0.010562571756601616,
            "spread_ticks": 2.090909090909091,
            "amihud": 1.4010052492864747e-06,
            "turnover_ratio": 0.0001700348642706762,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 84.73967684021544,
            "rank_pca": 86,
            "adv": 615225.0,
            "trades": 297.0,
            "volatility": 0.9384896133532701,
            "spread_pct": 0.038544545833175556,
            "spread_ticks": 1.1621004566210045,
            "amihud": 1.4776559942962483e-07,
            "turnover_ratio": 0.035064486989875875,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 47.3967684021544,
            "rank_pca": 294,
            "adv": 35137.0,
            "trades": 6.0,
            "volatility": 0.11697832115733929,
            "spread_pct": 0.08016877637130797,
            "spread_ticks": 6.333333333333333,
            "amihud": 3.513583690225549e-07,
            "turnover_ratio": 0.001525380697288005,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 73.78815080789947,
            "rank_pca": 147,
            "adv": 186482.5,
            "trades": 64.0,
            "volatility": 0.7337168256278094,
            "spread_pct": 0.038509627406851675,
            "spread_ticks": 1.0,
            "amihud": 3.972172942451649e-07,
            "turnover_ratio": 0.009096209576922297,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 33.39317773788151,
            "rank_pca": 372,
            "adv": 2700.0,
            "trades": 2.0,
            "volatility": 0.10652193013009179,
            "spread_pct": 0.041745730550284674,
            "spread_ticks": 7.333333333333333,
            "amihud": 0.0,
            "turnover_ratio": 2.0739213740597384e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 81.68761220825853,
            "rank_pca": 103,
            "adv": 636577.5,
            "trades": 306.0,
            "volatility": 0.47917690978781463,
            "spread_pct": 0.007302907148751972,
            "spread_ticks": 1.2960122699386503,
            "amihud": 6.930443985033024e-08,
            "turnover_ratio": 0.009669927990213068,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2761300460653999,
              "median": 0.1305994883757059,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.9891535904428602,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4343714.224729807,
              "median": 25194.0,
              "min": 0.0,
              "max": 432605285.0,
              "p5": 0.0,
              "p95": 17645718.799999975,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10128100731613544,
              "median": 0.028886503366839098,
              "min": 0.0002502086688440683,
              "max": 1.6923076923076923,
              "p5": 0.003167164232101539,
              "p95": 0.4963829851134757,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008721905758425423,
              "median": 0.00045833446415375343,
              "min": 0.0,
              "max": 1.9379078505042515,
              "p5": 0.0,
              "p95": 0.022773327137361566,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00016879118547933418,
              "median": 2.108238679081148e-08,
              "min": 0.0,
              "max": 0.04166666666666666,
              "p5": 0.0,
              "p95": 4.58803147756635e-05,
              "count": 418
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 656.8456014362657,
              "median": 10.0,
              "min": 0.0,
              "max": 15762.0,
              "p5": 0.0,
              "p95": 3837.3999999999705,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.16961524788704468,
              "median": 0.1298416593810211,
              "min": 0.0,
              "max": 0.47917690978781463,
              "p5": 0.0,
              "p95": 0.4398179211836109,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1037773.6374999998,
              "median": 23031.05,
              "min": 0.0,
              "max": 7029609.999999999,
              "p5": 0.0,
              "p95": 4792048.624999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1652437786734489,
              "median": 0.030501019325607153,
              "min": 0.0011977638425537255,
              "max": 0.6666666666666666,
              "p5": 0.003334563999723112,
              "p95": 0.6066006600660064,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002525663540058911,
              "median": 0.0008477077807793405,
              "min": 0.0,
              "max": 0.009669927990213068,
              "p5": 0.0,
              "p95": 0.007958718988842577,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.0920603193040037e-07,
              "median": 5.1026092281136806e-08,
              "min": 0.0,
              "max": 1.4010052492864747e-06,
              "p5": 2.0509717777472592e-10,
              "p95": 1.1385935292204947e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 426.25,
              "median": 9.5,
              "min": 0.0,
              "max": 2994.0,
              "p5": 0.0,
              "p95": 2053.1999999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 185880.8875,
              "median": 23031.05,
              "min": 0.0,
              "max": 636577.5,
              "p5": 0.0,
              "p95": 629104.125,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 86.0,
              "median": 9.5,
              "min": 0.0,
              "max": 306.0,
              "p5": 0.0,
              "p95": 302.85,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3149625959799734,
              "median": 0.13089774447040065,
              "min": 0.0,
              "max": 0.9384896133532701,
              "p5": 0.0,
              "p95": 0.8668191376493587,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1723187913355169,
              "median": 0.040145138191730115,
              "min": 0.007302907148751972,
              "max": 0.6666666666666666,
              "p5": 0.008443789761499348,
              "p95": 0.6066006600660064,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.131127727183593,
              "median": 1.6934606804238705,
              "min": 1.0,
              "max": 20.833333333333332,
              "p5": 1.0,
              "p95": 16.108333333333327,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006943347416538815,
              "median": 0.0008477077807793405,
              "min": 0.0,
              "max": 0.035064486989875875,
              "p5": 0.0,
              "p95": 0.02617639133999388,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.944418253056916e-07,
              "median": 2.495619842260899e-07,
              "min": 0.0,
              "max": 1.4010052492864747e-06,
              "p5": 1.732610996258256e-08,
              "p95": 1.1500582605261472e-06,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.019230769230769273,
            "market": -0.0016027345530054138,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.01762803467776386,
            "vs_sector": -0.019230769230769273,
            "vs_peers": -0.019230769230769273
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 75.22441651705566,
          "score_pca_percentile": 75.22441651705566,
          "rank_pca": 139,
          "total": 557,
          "adv_notional_sgd": 587239.5,
          "adv_volume_shares": 2302900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.004038466140090127,
          "votes": 89.0,
          "trades": 89.0,
          "spread_pct": 0.020834715679118855,
          "spread_ticks": 1.0751072961373391,
          "amihud": 8.855297792595651e-09,
          "volatility": 0.2597853596313038
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5109287288972414,
          "loadings": {
            "log_adv": 0.5570471536088919,
            "log_trades": 0.5094543683974453,
            "log_turnover": 0.5161150331107577,
            "neg_spread": 0.3950784482907365,
            "neg_amihud": 0.08721594747144608,
            "neg_vol": 0.00929440567845961
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
          "peer_median_adv": 7744.5,
          "peer_median_score_pca": 41.92100538599641,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.2835933256843492,
          "peer_median_spread_pct": 0.048530789950655906,
          "peer_median_spread_ticks": 1.7142956812949137,
          "peer_median_amihud": 2.678888767547984e-08,
          "peer_median_turnover_ratio": 0.0002702986407313453,
          "target_vs_peer": {
            "score_pca_delta": 33.3,
            "adv_delta_pct": 7482.7,
            "trades_delta_pct": 2125.0,
            "volatility_delta_pct": 8.4,
            "spread_pct_delta_pct": 57.07,
            "spread_ticks_delta_pct": -37.29,
            "amihud_delta_pct": 66.94,
            "turnover_ratio_delta_pct": 1394.08
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 75.22441651705566,
            "rank_pca": 139,
            "adv": 587239.5,
            "trades": 89.0,
            "volatility": 0.2597853596313038,
            "spread_pct": 0.020834715679118855,
            "spread_ticks": 1.0751072961373391,
            "amihud": 8.855297792595651e-09,
            "turnover_ratio": 0.004038466140090127,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 3.5906642728904847,
            "rank_pca": 538,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.611036339165545,
            "spread_ticks": 27.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.423698384201077,
            "rank_pca": 542,
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
            "ticker": "U77",
            "score_pca": 42.010771992818675,
            "rank_pca": 324,
            "adv": 5544.0,
            "trades": 5.0,
            "volatility": 0.15511456992130127,
            "spread_pct": 0.010562571756601616,
            "spread_ticks": 2.090909090909091,
            "amihud": 1.1537065954351498e-06,
            "turnover_ratio": 8.672087795225743e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 81.14901256732495,
            "rank_pca": 106,
            "adv": 615225.0,
            "trades": 297.0,
            "volatility": 2.5365128171902414,
            "spread_pct": 0.038544545833175556,
            "spread_ticks": 1.0784313725490196,
            "amihud": 1.3388326150764117e-07,
            "turnover_ratio": 0.035064486989875875,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 41.83123877917414,
            "rank_pca": 325,
            "adv": 9945.0,
            "trades": 3.0,
            "volatility": 0.2650889603168034,
            "spread_pct": 0.05851703406813625,
            "spread_ticks": 4.5625,
            "amihud": 1.7567918451127745e-07,
            "turnover_ratio": 0.00045387640351043316,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 65.1705565529623,
            "rank_pca": 195,
            "adv": 68715.0,
            "trades": 36.0,
            "volatility": 0.5236050586993884,
            "spread_pct": 0.03734827264239031,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0031034887151967674,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 27.648114901256733,
            "rank_pca": 404,
            "adv": 90.0,
            "trades": 1.0,
            "volatility": 0.302097691051895,
            "spread_pct": 0.060393258426966336,
            "spread_ticks": 10.75,
            "amihud": 0.0,
            "turnover_ratio": 6.913071246865795e-07,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 80.96947935368043,
            "rank_pca": 107,
            "adv": 544292.0,
            "trades": 306.0,
            "volatility": 0.4796305946388268,
            "spread_pct": 0.007486126809762643,
            "spread_ticks": 1.3376822716807368,
            "amihud": 2.678888767547984e-08,
            "turnover_ratio": 0.00822588146081228,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5252603706772975,
              "median": 0.2677941979545599,
              "min": 0.0,
              "max": 8.694826047713665,
              "p5": 0.0,
              "p95": 1.774823934929885,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3977276.0915498184,
              "median": 19400.0,
              "min": 0.0,
              "max": 432605285.0,
              "p5": 0.0,
              "p95": 16446447.799999904,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09847623098582388,
              "median": 0.027972027972027996,
              "min": 0.0002850746728976322,
              "max": 1.2847682119205297,
              "p5": 0.0032942305488191702,
              "p95": 0.4963002114164902,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007054167124082058,
              "median": 0.00038372635627385106,
              "min": 0.0,
              "max": 1.9543866587568388,
              "p5": 0.0,
              "p95": 0.017164202808067845,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023995261672136068,
              "median": 4.853762211762363e-08,
              "min": 0.0,
              "max": 0.0694472195581131,
              "p5": 0.0,
              "p95": 7.680155335376918e-05,
              "count": 515
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 564.9245960502693,
              "median": 9.0,
              "min": 0.0,
              "max": 15542.0,
              "p5": 0.0,
              "p95": 3402.9999999999995,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.19036678608883434,
              "median": 0.2074499647763025,
              "min": 0.0,
              "max": 0.4796305946388268,
              "p5": 0.0,
              "p95": 0.4174940783834006,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1139505.3125,
              "median": 7744.5,
              "min": 0.0,
              "max": 7968932.0,
              "p5": 0.0,
              "p95": 5385339.624999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17960393937487804,
              "median": 0.03967587487362755,
              "min": 0.0013348024262270612,
              "max": 0.6666666666666666,
              "p5": 0.0034877659604645155,
              "p95": 0.6471960520412741,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00227502316463691,
              "median": 0.0002702986407313453,
              "min": 0.0,
              "max": 0.00822588146081228,
              "p5": 0.0,
              "p95": 0.0072349151441899046,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9508248243527372e-07,
              "median": 8.855297792595651e-09,
              "min": 0.0,
              "max": 1.1537065954351498e-06,
              "p5": 0.0,
              "p95": 8.602983721579874e-07,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 233.875,
              "median": 4.0,
              "min": 0.0,
              "max": 1467.0,
              "p5": 0.0,
              "p95": 1060.6499999999994,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 155476.375,
              "median": 7744.5,
              "min": 0.0,
              "max": 615225.0,
              "p5": 0.0,
              "p95": 590398.45,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 81.0,
              "median": 4.0,
              "min": 0.0,
              "max": 306.0,
              "p5": 0.0,
              "p95": 302.85,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.532756211477307,
              "median": 0.2835933256843492,
              "min": 0.0,
              "max": 2.5365128171902414,
              "p5": 0.0,
              "p95": 1.8319951017184417,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.18631935192115556,
              "median": 0.048530789950655906,
              "min": 0.007486126809762643,
              "max": 0.6666666666666666,
              "p5": 0.008562882541156284,
              "p95": 0.6471960520412741,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.102440341892356,
              "median": 1.7142956812949137,
              "min": 1.0,
              "max": 27.0,
              "p5": 1.0,
              "p95": 21.312499999999993,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005866893219309038,
              "median": 0.0002702986407313453,
              "min": 0.0,
              "max": 0.035064486989875875,
              "p5": 0.0,
              "p95": 0.0256709750547036,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.1286541844707834e-07,
              "median": 2.678888767547984e-08,
              "min": 0.0,
              "max": 1.1537065954351498e-06,
              "p5": 0.0,
              "p95": 8.602983721579874e-07,
              "count": 7
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.020000000000000018,
            "market": 0.010922787901039621,
            "sector": -0.0017064846416381396,
            "peers": -0.0024999999999999467,
            "vs_market": 0.009077212098960397,
            "vs_sector": 0.021706484641638157,
            "vs_peers": 0.022499999999999964
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 71.0951526032316,
          "score_pca_percentile": 71.0951526032316,
          "rank_pca": 162,
          "total": 557,
          "adv_notional_sgd": 235900.5,
          "adv_volume_shares": 925100.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001622295812322453,
          "votes": 54.0,
          "trades": 54.0,
          "spread_pct": 0.023280423280423297,
          "spread_ticks": 1.1176470588235294,
          "amihud": 4.3233054263968095e-08,
          "volatility": 0.5231188989159192
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5298188435876381,
          "loadings": {
            "log_adv": 0.5371100655755844,
            "log_trades": 0.4887188249415284,
            "log_turnover": 0.4875302267770856,
            "neg_spread": 0.4153501120941171,
            "neg_amihud": 0.17887013166220547,
            "neg_vol": 0.17455866053105792
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
          "peer_median_adv": 5166.5,
          "peer_median_score_pca": 43.626570915619396,
          "peer_median_trades": 5.0,
          "peer_median_volatility": 0.53249383887418,
          "peer_median_spread_pct": 0.03873167656700548,
          "peer_median_spread_ticks": 1.6548758865248225,
          "peer_median_amihud": 5.265908475187126e-07,
          "peer_median_turnover_ratio": 9.811081430312289e-05,
          "target_vs_peer": {
            "score_pca_delta": 27.47,
            "adv_delta_pct": 4466.0,
            "trades_delta_pct": 980.0,
            "volatility_delta_pct": 1.76,
            "spread_pct_delta_pct": 39.89,
            "spread_ticks_delta_pct": -32.46,
            "amihud_delta_pct": 91.79,
            "turnover_ratio_delta_pct": 1553.53
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.0951526032316,
            "rank_pca": 162,
            "adv": 235900.5,
            "trades": 54.0,
            "volatility": 0.5231188989159192,
            "spread_pct": 0.023280423280423297,
            "spread_ticks": 1.1176470588235294,
            "amihud": 4.3233054263968095e-08,
            "turnover_ratio": 0.001622295812322453,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 2.333931777378815,
            "rank_pca": 545,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 4.014372790730359,
            "spread_pct": 0.5862068965517243,
            "spread_ticks": 28.375,
            "amihud": 0.00031763779127385455,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 12.567324955116696,
            "rank_pca": 488,
            "adv": 1010.1,
            "trades": 2.0,
            "volatility": 3.9496835316263,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00010950075065398836,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.49910233393178,
            "rank_pca": 299,
            "adv": 5658.0,
            "trades": 5.0,
            "volatility": 0.2584261928106594,
            "spread_pct": 0.01418439716312058,
            "spread_ticks": 2.1333333333333333,
            "amihud": 1.4010052492864747e-06,
            "turnover_ratio": 8.672087795225743e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 65.70915619389586,
            "rank_pca": 192,
            "adv": 218727.69999999998,
            "trades": 79.0,
            "volatility": 1.9316946764691214,
            "spread_pct": 0.04450877510403476,
            "spread_ticks": 1.0672268907563025,
            "amihud": 1.4776559942962483e-07,
            "turnover_ratio": 0.017712716814542052,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 32.13644524236984,
            "rank_pca": 379,
            "adv": 639.0,
            "trades": 1.0,
            "volatility": 0.3207757245268202,
            "spread_pct": 0.040435458786936135,
            "spread_ticks": 3.0,
            "amihud": 1.5081625527762664e-06,
            "turnover_ratio": 3.2038334365442344e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 72.5314183123878,
            "rank_pca": 154,
            "adv": 186482.5,
            "trades": 50.0,
            "volatility": 0.590307516542264,
            "spread_pct": 0.037027894347074826,
            "spread_ticks": 1.0,
            "amihud": 9.118963998147742e-08,
            "turnover_ratio": 0.00872110815106983,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 40.754039497307005,
            "rank_pca": 331,
            "adv": 4675.0,
            "trades": 5.0,
            "volatility": 0.47468016120609613,
            "spread_pct": 0.03682393555811281,
            "spread_ticks": 6.4,
            "amihud": 9.054160956078003e-07,
            "turnover_ratio": 3.5256663359015555e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 84.73967684021544,
            "rank_pca": 86,
            "adv": 1027979.0000000001,
            "trades": 495.0,
            "volatility": 0.36702852475123815,
            "spread_pct": 0.010043675720823408,
            "spread_ticks": 1.176418439716312,
            "amihud": 1.2112369650917102e-08,
            "turnover_ratio": 0.014581167263539233,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6292467158514021,
              "median": 0.40184911398028356,
              "min": 0.0,
              "max": 5.558776843874919,
              "p5": 0.07730711202459883,
              "p95": 1.8466915740460033,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3469068.5016560317,
              "median": 16296.0,
              "min": 0.0,
              "max": 312928590.0,
              "p5": 0.0,
              "p95": 14827633.399999956,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10095262763778023,
              "median": 0.029205841168233673,
              "min": 0.00027741427863602243,
              "max": 1.2847682119205297,
              "p5": 0.0033085084347113524,
              "p95": 0.49078320294937416,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006547849135086362,
              "median": 0.00035556556271540245,
              "min": 0.0,
              "max": 1.9379078505042515,
              "p5": 0.0,
              "p95": 0.014135967236243059,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.835583191649715e-05,
              "median": 8.665573123725239e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 4.8475101666932894e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 509.4721723518851,
              "median": 8.0,
              "min": 0.0,
              "max": 12136.0,
              "p5": 0.0,
              "p95": 3001.3999999999796,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.266780554264739,
              "median": 0.42085434297866714,
              "min": 0.22615860955051856,
              "max": 4.014372790730359,
              "p5": 0.23745226369156786,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1643848.95,
              "median": 5166.5,
              "min": 0.0,
              "max": 11874930.0,
              "p5": 223.65000000000003,
              "p95": 8078497.149999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1723632061574959,
              "median": 0.030052179419268053,
              "min": 0.0012641955321598915,
              "max": 0.6666666666666666,
              "p5": 0.004337013598192122,
              "p95": 0.6385057471264368,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003003166011760922,
              "median": 9.811081430312289e-05,
              "min": 0.0,
              "max": 0.014581167263539233,
              "p5": 1.1213417027904821e-05,
              "p95": 0.012123180658463743,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.0188532962720305e-05,
              "median": 4.743245749358842e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 1.9008721285119093e-10,
              "p95": 0.000206992421221477,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 389.125,
              "median": 5.0,
              "min": 0.0,
              "max": 2551.0,
              "p5": 0.35000000000000003,
              "p95": 1831.399999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 180646.4125,
              "median": 5166.5,
              "min": 0.0,
              "max": 1027979.0000000001,
              "p5": 223.65000000000003,
              "p95": 744741.0449999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 79.625,
              "median": 5.0,
              "min": 0.0,
              "max": 495.0,
              "p5": 0.35000000000000003,
              "p95": 349.39999999999975,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.4883711398328574,
              "median": 0.53249383887418,
              "min": 0.2584261928106594,
              "max": 4.014372790730359,
              "p5": 0.2802485289113157,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17948721248731167,
              "median": 0.03873167656700548,
              "min": 0.010043675720823408,
              "max": 0.6666666666666666,
              "p5": 0.011492928225627419,
              "p95": 0.6385057471264368,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.518997332975744,
              "median": 1.6548758865248225,
              "min": 1.0,
              "max": 28.375,
              "p5": 1.0,
              "p95": 20.68374999999999,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.021293034757339e-05,
              "median": 5.265908475187126e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 4.2393293778209865e-09,
              "p95": 0.000206992421221477,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005159813606935227,
              "median": 9.811081430312289e-05,
              "min": 0.0,
              "max": 0.017712716814542052,
              "p5": 1.1213417027904821e-05,
              "p95": 0.016616674471691063,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.10869565217391197,
            "market": -0.0023224604390442716,
            "sector": -0.015429868789901269,
            "peers": -0.002153270188289702,
            "vs_market": 0.11101811261295624,
            "vs_sector": 0.12412552096381324,
            "vs_peers": 0.11084892236220167
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 72.35188509874327,
          "score_pca_percentile": 72.35188509874327,
          "rank_pca": 155,
          "total": 557,
          "adv_notional_sgd": 228475.0,
          "adv_volume_shares": 913900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001602655002574305,
          "votes": 62.0,
          "trades": 62.0,
          "spread_pct": 0.024846815447748628,
          "spread_ticks": 1.1699029126213591,
          "amihud": 7.83519022118116e-08,
          "volatility": 0.5322307652025258
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5603097453816666,
          "loadings": {
            "log_adv": 0.5187355651115553,
            "log_trades": 0.46693589083924003,
            "log_turnover": 0.4750605851760777,
            "neg_spread": 0.415607412556328,
            "neg_amihud": 0.24375257362156216,
            "neg_vol": 0.23464204488501922
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
          "peer_median_adv": 7234.5,
          "peer_median_score_pca": 48.29443447037701,
          "peer_median_trades": 5.0,
          "peer_median_volatility": 0.575546627618909,
          "peer_median_spread_pct": 0.042588765095614475,
          "peer_median_spread_ticks": 1.6442953020134228,
          "peer_median_amihud": 5.541930170827328e-07,
          "peer_median_turnover_ratio": 7.834332105497143e-05,
          "target_vs_peer": {
            "score_pca_delta": 24.06,
            "adv_delta_pct": 3058.1,
            "trades_delta_pct": 1140.0,
            "volatility_delta_pct": 7.53,
            "spread_pct_delta_pct": 41.66,
            "spread_ticks_delta_pct": -28.85,
            "amihud_delta_pct": 85.86,
            "turnover_ratio_delta_pct": 1945.68
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.35188509874327,
            "rank_pca": 155,
            "adv": 228475.0,
            "trades": 62.0,
            "volatility": 0.5322307652025258,
            "spread_pct": 0.024846815447748628,
            "spread_ticks": 1.1699029126213591,
            "amihud": 7.83519022118116e-08,
            "turnover_ratio": 0.001602655002574305,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.0771992818671454,
            "rank_pca": 552,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.2850987672846097,
            "spread_pct": 0.47943262411347515,
            "spread_ticks": 20.555555555555557,
            "amihud": 0.00036013640690511566,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.7701974865350087,
            "rank_pca": 536,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.250447984076117,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 47.57630161579892,
            "rank_pca": 293,
            "adv": 5544.0,
            "trades": 4.0,
            "volatility": 0.3285404099541311,
            "spread_pct": 0.01833180568285978,
            "spread_ticks": 2.0,
            "amihud": 1.436039027347683e-06,
            "turnover_ratio": 8.548200826722518e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 49.012567324955114,
            "rank_pca": 285,
            "adv": 15000.0,
            "trades": 13.0,
            "volatility": 1.3053251175940335,
            "spread_pct": 0.06896551724137925,
            "spread_ticks": 1.0910780669144982,
            "amihud": 1.9887426030493094e-07,
            "turnover_ratio": 0.001709837229787925,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 35.36804308797127,
            "rank_pca": 361,
            "adv": 702.0,
            "trades": 1.0,
            "volatility": 0.36230308720096555,
            "spread_pct": 0.043276661514683186,
            "spread_ticks": 3.25,
            "amihud": 1.659685614052556e-06,
            "turnover_ratio": 3.2038334365442344e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 64.81149012567326,
            "rank_pca": 197,
            "adv": 66671.8,
            "trades": 27.0,
            "volatility": 0.6166523254677403,
            "spread_pct": 0.04190086867654577,
            "spread_ticks": 1.0434782608695652,
            "amihud": 0.0,
            "turnover_ratio": 0.0031034887151967674,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 49.730700179533216,
            "rank_pca": 281,
            "adv": 8925.0,
            "trades": 6.0,
            "volatility": 0.35914057325014537,
            "spread_pct": 0.01761204309539038,
            "spread_ticks": 3.0,
            "amihud": 9.095117738605346e-07,
            "turnover_ratio": 7.120463384271768e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.12387791741472,
            "rank_pca": 95,
            "adv": 753474.0,
            "trades": 358.0,
            "volatility": 0.5344409297700777,
            "spread_pct": 0.010698983624287645,
            "spread_ticks": 1.2885906040268456,
            "amihud": 1.8590900468111437e-08,
            "turnover_ratio": 0.01094068893608576,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6878670155246315,
              "median": 0.482979446750165,
              "min": 0.0,
              "max": 7.249026630988066,
              "p5": 0.15862109294690366,
              "p95": 2.2216886585700646,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3380819.646512347,
              "median": 11970.0,
              "min": 0.0,
              "max": 306786193.7,
              "p5": 0.0,
              "p95": 13186323.999999953,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10047319259566122,
              "median": 0.030981067125645443,
              "min": 0.0002742695631217783,
              "max": 1.3378196500672945,
              "p5": 0.0035508696516023982,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006541844883717037,
              "median": 0.0002797779694726035,
              "min": 0.0,
              "max": 2.3103289170127215,
              "p5": 0.0,
              "p95": 0.011825604431881466,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2193733857074052e-05,
              "median": 1.4914138535550758e-07,
              "min": 0.0,
              "max": 0.0005935746352413022,
              "p5": 0.0,
              "p95": 3.5075538625651146e-05,
              "count": 552
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 485.5278276481149,
              "median": 6.0,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 2841.999999999995,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8647138159394031,
              "median": 0.4472669262017457,
              "min": 0.26550801077665254,
              "max": 2.2850987672846097,
              "p5": 0.28756935048877,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1935132.875,
              "median": 7234.5,
              "min": 0.0,
              "max": 14483943.0,
              "p5": 0.0,
              "p95": 9678278.849999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15777660144307623,
              "median": 0.021589310565304203,
              "min": 0.0013472113994984552,
              "max": 0.6666666666666666,
              "p5": 0.004620331678174671,
              "p95": 0.6011347517730495,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0027981300816701336,
              "median": 7.834332105497143e-05,
              "min": 0.0,
              "max": 0.01094068893608576,
              "p5": 0.0,
              "p95": 0.01048998791683471,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.552990452800949e-05,
              "median": 4.939318380361731e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 2.2753535685562302e-10,
              "p95": 0.0002346695544532434,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 492.75,
              "median": 5.0,
              "min": 0.0,
              "max": 3511.0,
              "p5": 0.0,
              "p95": 2407.449999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 106289.6,
              "median": 7234.5,
              "min": 0.0,
              "max": 753474.0,
              "p5": 0.0,
              "p95": 513093.22999999963,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 51.125,
              "median": 5.0,
              "min": 0.0,
              "max": 358.0,
              "p5": 0.0,
              "p95": 242.1499999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0052436493247274,
              "median": 0.575546627618909,
              "min": 0.3285404099541311,
              "max": 2.2850987672846097,
              "p5": 0.3392504671077361,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16836064632691097,
              "median": 0.042588765095614475,
              "min": 0.010698983624287645,
              "max": 0.6666666666666666,
              "p5": 0.013118554439173603,
              "p95": 0.6011347517730495,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.153587810920808,
              "median": 1.6442953020134228,
              "min": 1.0,
              "max": 20.555555555555557,
              "p5": 1.0152173913043478,
              "p95": 14.498611111111103,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.5544888560143686e-05,
              "median": 5.541930170827328e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.0002346695544532434,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019928424821932297,
              "median": 7.834332105497143e-05,
              "min": 0.0,
              "max": 0.01094068893608576,
              "p5": 0.0,
              "p95": 0.008197668858774609,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.15909090909090806,
            "market": 0.006383631244649468,
            "sector": -0.0698069342412716,
            "peers": -0.021046100711363147,
            "vs_market": 0.1527072778462586,
            "vs_sector": 0.22889784333217966,
            "vs_peers": 0.1801370098022712
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 74.1 vs peer median 47.5 (+26.7 pts).",
        "market_comparison": "The stock was down 1.9% on the day while peers were flat. That matters because weaker price action can feel less forgiving when buy-side support is thin."
      },
      "1w": {
        "liquidity": "Liquidity remains strong over the week, with a 1W score of 75.2 compared with a peer median of 41.9. That keeps the name accessible relative to similar stocks.",
        "market_comparison": "Return 2.0% vs peers -0.2%."
      },
      "30d": {
        "liquidity": "Monthly liquidity is strong and looks stable, with a 1M score of 71.1 compared with a peer median of 43.6. That supports a clear accessibility advantage relative to peers.",
        "market_comparison": "The stock returned 10.9% over the month while peers fell 0.2% and the market fell 0.2%. That matters because the return backdrop has been firmer than the main comparison groups."
      },
      "3m": {
        "liquidity": "Structural liquidity is strong over 3M, with a score of 72.4 compared with a peer median of 48.3. That points to better access than the peer group on a sustained basis.",
        "market_comparison": "The stock returned 15.9% over 3M while peers fell 2.1%. That matters because stronger relative performance has coincided with solid tradability."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 75,
      "reporting_window_days": 63,
      "available_history_days": 75,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.41156338305889417,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "41.2%",
          "display_range": null,
          "display_text": "41.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
          "kind": "share_pct",
          "value_pct": 41.2,
          "plain_english": "Market explains about 41.2% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.37131700740486234,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "37.1%",
          "display_range": null,
          "display_text": "37.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
          "kind": "share_pct",
          "value_pct": 37.1,
          "plain_english": "Sector explains about 37.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.21711960953624343,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "21.7%",
          "display_range": null,
          "display_text": "21.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
          "kind": "share_pct",
          "value_pct": 21.7,
          "plain_english": "Company-specific explains about 21.7% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.871733413993207,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.87",
          "display_range": null,
          "display_text": "1.87",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 1.87% stock move in the same direction in this state.",
          "value_num": 1.87
        },
        "beta_stock_lag": {
          "median": -0.8243338808026155,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.82",
          "display_range": null,
          "display_text": "-0.82",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
          "kind": "lag_beta",
          "value_num": -0.82
        },
        "beta_sector": {
          "median": -3.848240067704165,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-3.85",
          "display_range": null,
          "display_text": "-3.85",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.85% stock move in the opposite direction in this state.",
          "value_num": -3.85
        },
        "beta_market_lag": {
          "median": -2.2042884289044093,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.20",
          "display_range": null,
          "display_text": "-2.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
          "kind": "lag_beta",
          "value_num": -2.2
        },
        "beta_sector_lag": {
          "median": 2.0898719524103435,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.09",
          "display_range": null,
          "display_text": "2.09",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
          "kind": "lag_beta",
          "value_num": 2.09
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 75 trading days relative to the 252-day target."
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
            "median": 0.47931948471963903,
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
              "median": 0.47931948471963903,
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
              "median": 0.2984396411024004,
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
              "median": 0.2222408741779605,
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
            "median": 0.5656898926629685,
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
              "median": 0.26479317957873116,
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
              "median": 0.16951692775830024,
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
              "median": 0.5656898926629685,
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
            "median": 0.537921465360335,
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
              "median": 0.22982068067655398,
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
              "median": 0.537921465360335,
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
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5202476822091704,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.0%",
            "display_range": null,
            "display_text": "52.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.0,
            "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34425966677405034,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Market explains about 34.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1354926510167792,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.5%",
              "display_range": null,
              "display_text": "13.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.5,
              "plain_english": "Sector explains about 13.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5202476822091704,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-14",
          "n_obs": 9,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6157487313240366,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.6%",
            "display_range": null,
            "display_text": "61.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
            "kind": "share_pct",
            "value_pct": 61.6,
            "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1558214240297599,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.6%",
              "display_range": null,
              "display_text": "15.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 15.6,
              "plain_english": "Market explains about 15.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22842984464620347,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.8%",
              "display_range": null,
              "display_text": "22.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 22.8,
              "plain_english": "Sector explains about 22.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6157487313240366,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5068493150684932,
          "expected_duration_days": 5.285714285714286,
          "current_probability": 1.0,
          "n_days_effective": 37.0,
          "volatility": {
            "median": 0.02685236077838492,
            "low": 0.02685236077838492,
            "high": 0.02685236077838492
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4931506849315068,
          "expected_duration_days": 6.0,
          "current_probability": 0.0,
          "n_days_effective": 36.0,
          "volatility": {
            "median": 0.04240249322200865,
            "low": 0.04240249322200865,
            "high": 0.04240249322200865
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.16666666666666666,
            0.8333333333333334
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            30.0,
            6.0
          ],
          [
            6.0,
            30.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 75,
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
        "market_link_display": "1.87",
        "sector_link_display": "-3.85",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 1.87% stock move in the same direction in this state. This is a point estimate from 75 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.85% stock move in the opposite direction in this state. This is a point estimate from 75 trading days.",
        "stock_persistence_display": "-0.82",
        "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
        "history_limited_note": "Read is based on 75 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 41.2,
        "driver_share_display": "41.2%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 75 trading days relative to the 252-day target.",
        "history_days": 75,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8333333333333334,
        "effective_days": 37.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.3 days.",
        "expected_duration_days": 5.3
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
          "pct_time": 0.5068493150684932,
          "expected_duration_days": 5.285714285714286,
          "current_probability": 1.0,
          "n_days_effective": 37.0,
          "volatility": {
            "median": 0.02685236077838492,
            "low": 0.02685236077838492,
            "high": 0.02685236077838492
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4931506849315068,
          "expected_duration_days": 6.0,
          "current_probability": 0.0,
          "n_days_effective": 36.0,
          "volatility": {
            "median": 0.04240249322200865,
            "low": 0.04240249322200865,
            "high": 0.04240249322200865
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8333333333333334,
          0.16666666666666666
        ],
        [
          0.16666666666666666,
          0.8333333333333334
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.16666666666666666,
            0.8333333333333334
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            30.0,
            6.0
          ],
          [
            6.0,
            30.0
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
        "text": "Liquidity score: 72.4 — Strong",
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
    "liq_subtitle": "Monthly liquidity screens well relative to peers, while the displayed book is less supportive for sellers.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The stock has outperformed over one month, rising 10.9% while peers and the market were both down 0.2%.",
    "perf_insight": "The return backdrop is firm, with the stock up 10.9% over one month compared with declines of 0.2% for both peers and the market. That matters because stronger price performance supports trading interest even as the displayed bid side remains thinner than the offer.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Broader market moves are the main current driver, accounting for 41.2% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 41.2% of price changes. Other influences are sector 37.1%, and company-specific 21.7%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 41.2%, sector 37.1%, and company-specific 21.7%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 41.2%, sector 37.1%, and company-specific 21.7%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Current driver: Market at 41.2%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: broader market moves are the largest influence at 41.2%.",
      "Monthly change: the stock was mostly market through March to May, so the current mix looks more balanced now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop is supportive, with returns ahead of both peers and the broader market over one month.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to May 14, 2026 (77 trading days • 12,237 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Thin buy-side support is the key execution watchpoint, with displayed bid depth at 0.38x of ask depth and a 1 tick",
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
    "intraday_subtitle": "The displayed book is the key near-term watchpoint, with thinner depth on the bid side than the ask.",
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
    "intraday_insight": "Session split is open 2.2%, continuous 95.6%, and close 1.5%. Current trading concentration score is 0.290.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The main near-term trading feature is the thinner bid side rather than spread friction.",
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
    "exec_subtitle": "Liquid for its size, but the displayed book shows thin buy-side support.",
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
        "value": "72.4/100",
        "sub": "Peer median 48.3 (+24.1 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$228.5K",
        "sub": "Peer median S$7.2K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.48%",
        "sub": "1.17 ticks; peers 4.26%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks strong for the stock’s size, with a 3M liquidity score of 72.4 compared with a peer median of 48.3. The near-term picture is less supportive because displayed bid depth is only 0.38x ask depth, even with a 1 tick spread. That matters because the stock screens accessible on a monthly basis, but immediate sell-side execution can meet a thinner buy book than peer standing alone would imply.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.258",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.94%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.38x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.97% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-4.53% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-5.83% with 44.2% fill.",
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
        "subtext": "Rank 155/557",
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
        "value": "2.48",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.48% • 1.17 ticks vs peers 4.26%",
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
        "value": "228.5K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$7.2K",
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
        "value": "41.2",
        "suffix": "market",
        "bar_pct": 41,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 37.1% • Company 21.7%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a 3M liquidity score of 72.4 compared with a peer median of 48.3. That leaves the name looking accessible relative to peers for routine trading.",
      "The return backdrop is firm, with the shares up 10.9% over one month while peers and the market were both down 0.2%. That matters because stronger recent performance gives the tape a better backdrop than the wider group.",
      "The main watchpoint is the displayed book, where bid depth is only 0.38x ask depth despite a 1 tick",
      "labels.drivers_bottom_line",
      "Market moves are the main current driver at 41.2%. That matters because the tape is still being shaped meaningfully by broader market or sector moves rather than company news alone.",
      "labels.drivers_wtd_list"
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
      "overall": "3M liquidity is strong: score 72.4 vs peer median 48.3 (+24.1 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "3M score 72.4 vs peer median 48.3 (+24.1 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +24.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is 15.9%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 15.9% vs market 0.6%.",
        "vs_sector": "Better than sector: 15.9% vs sector -7.0%.",
        "vs_peers": "Better than peers: 15.9% vs peers -2.1%."
      },
      "adv": {
        "insight": "ADV is S$228.5K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$228.5K vs market S$12.0K.",
        "vs_sector": "Better than sector: S$228.5K vs sector S$7.2K.",
        "vs_peers": "Better than peers: S$228.5K vs peers S$7.2K."
      },
      "spread": {
        "insight": "Spread is 2.48%, better than market and peers, but worse than sector, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 2.48% vs market 3.10%.",
        "vs_sector": "Worse than sector: 2.48% vs secto%.",
        "vs_peers": "Better than peers: 2.48% vs peers 4.26%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.16%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.16% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.16% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.16% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 53.22%, worse than market and sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 53.22% vs market 48.30%.",
        "vs_sector": "Worse than sector: 53.22% vs sector 44.73%.",
        "vs_peers": "In line with peers: 53.22% vs peers 57.55%."
      },
      "trades": {
        "insight": "Trades is 62, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 62 vs market 6.",
        "vs_sector": "Better than sector: 62 vs sector 5.",
        "vs_peers": "Better than peers: 62 vs peers 5."
      },
      "amihud": {
        "insight": "Price impact is 7.84e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.84e-08 vs market 1.49e-07.",
        "vs_sector": "Better than sector: 7.84e-08 vs sector 4.94e-07.",
        "vs_peers": "Better than peers: 7.84e-08 vs peers 5.54e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to peers and the market, with the stock up 10.9% over one month while both comparison groups were down 0.2%. That move is partly confirmed by liquidity, because the 3M liquidity score of 72.4 sits 24.1 points above the peer median, showing the name remains accessible for its size.",
      "conclusion": "The move looks more broad-market or sector-linked than company-specific, with market factors driving 41.2% of the tape."
    },
    "drivers": {
      "overall": "Broader market moves are the main driver now, with market factors accounting for 41.2% of price moves. That matters because trading conditions are being shaped more by the wider tape than by stock-specific news, and the thin bid side can make selling pressure show up more quickly.",
      "beta": "The current read is more balanced than the recent monthly pattern, even though the stock has outperformed with a 1M return of 10.9% compared with -0.2% for both peers and the market. That matters because strong recent returns have not made the name purely company-led in the near term.",
      "rolling_change": "The monthly pattern has been steady, with the stock mostly market in March and April and still clearly company-driven in May. That suggests the current market-led read is more likely a near-term shift in the tape than a full change in how the stock has been trading."
    },
    "regime": {
      "overall": "The backdrop is relatively steady rather than disorderly, which supports a more stable trading environment even as the order book remains uneven.",
      "current": "Low volatility is in place now, pointing to a calmer tape than a high-volatility phase.",
      "transitions": "This state looks fairly persistent, with a typical run length of about 5.3 days, although the read is mixed.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 5.3 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks orderly on the surface because the spread is 1 tick, but the book is thin buy-side with bid depth at 0.38x of ask depth. That matters because immediate sell-side pressure would meet less visible support than the headline liquidity score implies.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with bids materially lighter than offers at 0.38x ask depth. That leaves downside execution feeling less robust even while the quoted spread remains tight.",
      "peer_context": "The broader liquidity picture is still strong for size, with a 3M score of 72.4 compared with a peer median of 48.3, but the current book does not fully match that standing. Trade-size context is based on 77 trading days and 12,237 trades, so the displayed imbalance carries more weight in the near-term read."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like.",
      "retail_heavy": "Retail-like trades account for 88.1% of trade count and 36.2% of trade value, compared with institution-like trades at 1.1% of count and 16.9% of value. That keeps the flow read retail-like overall, even with some larger-value participation present.",
      "institutional_gap": "Institution-like activity is small in count at 1.1% of trades and remains below retail-like flow on value at 16.9% compared with 36.2%. That leaves the tape supported more by breadth of participation than by a deep institutional bid.",
      "peer_comparison": "The mix stands out as retail-leaning relative to peers, which makes the trading base look broader but less anchored by institutional value."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that the tape is being set within a retail-leaning flow mix. By trade count and value, flow looks mainly retail-like. The return backdrop is firm, with the stock up 10.9% over one month compared with peers and the market both at -0.2%. That suggests price-moving flow has recently landed in a stronger tape than the wider group.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low and is not the main factor shaping trading conditions. The stronger signal in the tape is price strength, with the stock up 10.9% over one month while peers and the market are both down 0.2%, which matters more for the current picture.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short interest looks stable rather than rising, so there is no sign of a new short-driven pressure point. That means the broader trading picture is still better explained by the stock’s recent outperformance than by short positioning.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 2.2%, continuous 95.6%, and close 1.5%. Current trading concentration score is 0.290.",
      "hhi_interpretation": "A trading concentration score of 0.290 indicates activity is relatively well distributed through the session rather than heavily concentrated in a few periods.",
      "best_times": "The continuous session carries 95.6% of activity, compared with 2.2% at the open and 1.5% at the close. That means the most usable liquidity is available during regular trading hours.",
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
        "KUX",
        "532",
        "U77",
        "J03",
        "NXR",
        "42F",
        "LVR",
        "ITS"
      ],
      "scores": [
        72.35188509874327,
        1.0771992818671454,
        3.7701974865350087,
        47.57630161579892,
        49.012567324955114,
        35.36804308797127,
        64.81149012567326,
        49.730700179533216,
        83.12387791741472
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
        228475.0,
        0.0,
        0.0,
        5544.0,
        15000.0,
        702.0,
        66671.8,
        8925.0,
        753474.0
      ],
      "total": 557
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 557,
      "company": {
        "volatility": 0.5322307652025258,
        "adv": 228475.0,
        "spread_pct": 0.024846815447748628,
        "turnover_ratio": 0.001602655002574305,
        "amihud": 7.83519022118116e-08,
        "trades": 62.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6878670155246315,
          "median": 0.482979446750165,
          "min": 0.0,
          "max": 7.249026630988066,
          "p5": 0.15862109294690366,
          "p95": 2.2216886585700646,
          "count": 557
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3380819.646512347,
          "median": 11970.0,
          "min": 0.0,
          "max": 306786193.7,
          "p5": 0.0,
          "p95": 13186323.999999953,
          "count": 557
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.10047319259566122,
          "median": 0.030981067125645443,
          "min": 0.0002742695631217783,
          "max": 1.3378196500672945,
          "p5": 0.0035508696516023982,
          "p95": 0.44957360805416136,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.006541844883717037,
          "median": 0.0002797779694726035,
          "min": 0.0,
          "max": 2.3103289170127215,
          "p5": 0.0,
          "p95": 0.011825604431881466,
          "count": 550
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.2193733857074052e-05,
          "median": 1.4914138535550758e-07,
          "min": 0.0,
          "max": 0.0005935746352413022,
          "p5": 0.0,
          "p95": 3.5075538625651146e-05,
          "count": 552
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 485.5278276481149,
          "median": 6.0,
          "min": 0.0,
          "max": 11430.0,
          "p5": 0.0,
          "p95": 2841.999999999995,
          "count": 557
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8647138159394031,
          "median": 0.4472669262017457,
          "min": 0.26550801077665254,
          "max": 2.2850987672846097,
          "p5": 0.28756935048877,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1935132.875,
          "median": 7234.5,
          "min": 0.0,
          "max": 14483943.0,
          "p5": 0.0,
          "p95": 9678278.849999994,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15777660144307623,
          "median": 0.021589310565304203,
          "min": 0.0013472113994984552,
          "max": 0.6666666666666666,
          "p5": 0.004620331678174671,
          "p95": 0.6011347517730495,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0027981300816701336,
          "median": 7.834332105497143e-05,
          "min": 0.0,
          "max": 0.01094068893608576,
          "p5": 0.0,
          "p95": 0.01048998791683471,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.552990452800949e-05,
          "median": 4.939318380361731e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 2.2753535685562302e-10,
          "p95": 0.0002346695544532434,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 492.75,
          "median": 5.0,
          "min": 0.0,
          "max": 3511.0,
          "p5": 0.0,
          "p95": 2407.449999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 106289.6,
          "median": 7234.5,
          "min": 0.0,
          "max": 753474.0,
          "p5": 0.0,
          "p95": 513093.22999999963,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 51.125,
          "median": 5.0,
          "min": 0.0,
          "max": 358.0,
          "p5": 0.0,
          "p95": 242.1499999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.0052436493247274,
          "median": 0.575546627618909,
          "min": 0.3285404099541311,
          "max": 2.2850987672846097,
          "p5": 0.3392504671077361,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16836064632691097,
          "median": 0.042588765095614475,
          "min": 0.010698983624287645,
          "max": 0.6666666666666666,
          "p5": 0.013118554439173603,
          "p95": 0.6011347517730495,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.153587810920808,
          "median": 1.6442953020134228,
          "min": 1.0,
          "max": 20.555555555555557,
          "p5": 1.0152173913043478,
          "p95": 14.498611111111103,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.5544888560143686e-05,
          "median": 5.541930170827328e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.0002346695544532434,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0019928424821932297,
          "median": 7.834332105497143e-05,
          "min": 0.0,
          "max": 0.01094068893608576,
          "p5": 0.0,
          "p95": 0.008197668858774609,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.020000000000000018,
        "market": 0.010922787901039621,
        "sector": -0.0017064846416381396,
        "peers": -0.0024999999999999467
      },
      {
        "horizon": "1M",
        "stock": 0.10869565217391197,
        "market": -0.0023224604390442716,
        "sector": -0.015429868789901269,
        "peers": -0.002153270188289702
      },
      {
        "horizon": "3M",
        "stock": 0.15909090909090806,
        "market": 0.006383631244649468,
        "sector": -0.0698069342412716,
        "peers": -0.021046100711363147
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
      "share_market": 0.41156338305889417,
      "share_sector": 0.37131700740486234,
      "share_idio": 0.21711960953624343,
      "beta_market": 1.871733413993207,
      "beta_sector": -3.848240067704165,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 75,
        "reporting_window_days": 63,
        "available_history_days": 75,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.41156338305889417,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.2%",
            "display_range": null,
            "display_text": "41.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
            "kind": "share_pct",
            "value_pct": 41.2,
            "plain_english": "Market explains about 41.2% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.37131700740486234,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.1%",
            "display_range": null,
            "display_text": "37.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
            "kind": "share_pct",
            "value_pct": 37.1,
            "plain_english": "Sector explains about 37.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.21711960953624343,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "21.7%",
            "display_range": null,
            "display_text": "21.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
            "kind": "share_pct",
            "value_pct": 21.7,
            "plain_english": "Company-specific explains about 21.7% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.871733413993207,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.87",
            "display_range": null,
            "display_text": "1.87",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 1.87% stock move in the same direction in this state.",
            "value_num": 1.87
          },
          "beta_stock_lag": {
            "median": -0.8243338808026155,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.82",
            "display_range": null,
            "display_text": "-0.82",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
            "kind": "lag_beta",
            "value_num": -0.82
          },
          "beta_sector": {
            "median": -3.848240067704165,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-3.85",
            "display_range": null,
            "display_text": "-3.85",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.85% stock move in the opposite direction in this state.",
            "value_num": -3.85
          },
          "beta_market_lag": {
            "median": -2.2042884289044093,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.20",
            "display_range": null,
            "display_text": "-2.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
            "kind": "lag_beta",
            "value_num": -2.2
          },
          "beta_sector_lag": {
            "median": 2.0898719524103435,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.09",
            "display_range": null,
            "display_text": "2.09",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
            "kind": "lag_beta",
            "value_num": 2.09
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 75 trading days relative to the 252-day target."
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
              "median": 0.47931948471963903,
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
                "median": 0.47931948471963903,
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
                "median": 0.2984396411024004,
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
                "median": 0.2222408741779605,
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
              "median": 0.5656898926629685,
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
                "median": 0.26479317957873116,
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
                "median": 0.16951692775830024,
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
                "median": 0.5656898926629685,
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
              "median": 0.537921465360335,
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
                "median": 0.22982068067655398,
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
                "median": 0.537921465360335,
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
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5202476822091704,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34425966677405034,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Market explains about 34.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1354926510167792,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.5%",
                "display_range": null,
                "display_text": "13.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.5,
                "plain_english": "Sector explains about 13.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5202476822091704,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.0%",
                "display_range": null,
                "display_text": "52.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.0,
                "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-14",
            "n_obs": 9,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6157487313240366,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1558214240297599,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.6%",
                "display_range": null,
                "display_text": "15.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 15.6,
                "plain_english": "Market explains about 15.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22842984464620347,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.8%",
                "display_range": null,
                "display_text": "22.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 22.8,
                "plain_english": "Sector explains about 22.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6157487313240366,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.6%",
                "display_range": null,
                "display_text": "61.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 61.6,
                "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5068493150684932,
            "expected_duration_days": 5.285714285714286,
            "current_probability": 1.0,
            "n_days_effective": 37.0,
            "volatility": {
              "median": 0.02685236077838492,
              "low": 0.02685236077838492,
              "high": 0.02685236077838492
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4931506849315068,
            "expected_duration_days": 6.0,
            "current_probability": 0.0,
            "n_days_effective": 36.0,
            "volatility": {
              "median": 0.04240249322200865,
              "low": 0.04240249322200865,
              "high": 0.04240249322200865
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8333333333333334,
              0.16666666666666666
            ],
            [
              0.16666666666666666,
              0.8333333333333334
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              30.0,
              6.0
            ],
            [
              6.0,
              30.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 75,
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
          "market_link_display": "1.87",
          "sector_link_display": "-3.85",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 1.87% stock move in the same direction in this state. This is a point estimate from 75 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.85% stock move in the opposite direction in this state. This is a point estimate from 75 trading days.",
          "stock_persistence_display": "-0.82",
          "point_estimate_note": "Point estimate only because the current state has 75 trading days.",
          "history_limited_note": "Read is based on 75 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 41.2,
          "driver_share_display": "41.2%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 75 trading days relative to the 252-day target.",
          "history_days": 75,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8333333333333334,
          "effective_days": 37.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.3 days.",
          "expected_duration_days": 5.3
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
          "share_market": 0.47931948471963903,
          "share_sector": 0.2984396411024004,
          "share_company": 0.2222408741779605,
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
          "share_market": 0.26479317957873116,
          "share_sector": 0.16951692775830024,
          "share_company": 0.5656898926629685,
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
          "share_market": 0.22982068067655398,
          "share_sector": 0.23225785396311108,
          "share_company": 0.537921465360335,
          "share_market_display": "23.0%",
          "share_sector_display": "23.2%",
          "share_company_display": "53.8%",
          "dominant_share_display": "53.8%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.34425966677405034,
          "share_sector": 0.1354926510167792,
          "share_company": 0.5202476822091704,
          "share_market_display": "34.4%",
          "share_sector_display": "13.5%",
          "share_company_display": "52.0%",
          "dominant_share_display": "52.0%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-14",
          "n_obs": 9,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.1558214240297599,
          "share_sector": 0.22842984464620347,
          "share_company": 0.6157487313240366,
          "share_market_display": "15.6%",
          "share_sector_display": "22.8%",
          "share_company_display": "61.6%",
          "dominant_share_display": "61.6%"
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
          0.5068493150684932,
          0.4931506849315068
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5068493150684932,
            "expected_duration_days": 5.285714285714286,
            "current_probability": 1.0,
            "n_days_effective": 37.0,
            "volatility": {
              "median": 0.02685236077838492,
              "low": 0.02685236077838492,
              "high": 0.02685236077838492
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4931506849315068,
            "expected_duration_days": 6.0,
            "current_probability": 0.0,
            "n_days_effective": 36.0,
            "volatility": {
              "median": 0.04240249322200865,
              "low": 0.04240249322200865,
              "high": 0.04240249322200865
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.16666666666666666,
            0.8333333333333334
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.255,
          "quantity": 1082000.0,
          "value": 275910.0
        },
        {
          "level": 2,
          "price": 0.25,
          "quantity": 1203700.0,
          "value": 300925.0
        },
        {
          "level": 3,
          "price": 0.245,
          "quantity": 346000.0,
          "value": 84770.0
        },
        {
          "level": 4,
          "price": 0.24,
          "quantity": 879000.0,
          "value": 210960.0
        },
        {
          "level": 5,
          "price": 0.235,
          "quantity": 218000.0,
          "value": 51230.0
        },
        {
          "level": 6,
          "price": 0.23,
          "quantity": 35100.0,
          "value": 8073.0
        },
        {
          "level": 7,
          "price": 0.225,
          "quantity": 255000.0,
          "value": 57375.0
        },
        {
          "level": 8,
          "price": 0.22,
          "quantity": 160000.0,
          "value": 35200.0
        },
        {
          "level": 9,
          "price": 0.215,
          "quantity": 335000.0,
          "value": 72025.0
        },
        {
          "level": 10,
          "price": 0.21,
          "quantity": 5000.0,
          "value": 1050.0
        },
        {
          "level": 11,
          "price": 0.2,
          "quantity": 30000.0,
          "value": 6000.0
        },
        {
          "level": 12,
          "price": 0.19,
          "quantity": 10000.0,
          "value": 1900.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.26,
          "quantity": 464000.0,
          "value": 120640.0
        },
        {
          "level": 2,
          "price": 0.265,
          "quantity": 1582600.0,
          "value": 419389.0
        },
        {
          "level": 3,
          "price": 0.27,
          "quantity": 1296800.0,
          "value": 350136.0
        },
        {
          "level": 4,
          "price": 0.275,
          "quantity": 1079100.0,
          "value": 296752.5
        },
        {
          "level": 5,
          "price": 0.28,
          "quantity": 531900.0,
          "value": 148932.0
        },
        {
          "level": 6,
          "price": 0.285,
          "quantity": 409000.0,
          "value": 116564.99999999999
        },
        {
          "level": 7,
          "price": 0.29,
          "quantity": 317000.0,
          "value": 91930.0
        },
        {
          "level": 8,
          "price": 0.295,
          "quantity": 397200.0,
          "value": 117174.0
        },
        {
          "level": 9,
          "price": 0.3,
          "quantity": 3555300.0,
          "value": 1066590.0
        },
        {
          "level": 10,
          "price": 0.305,
          "quantity": 222000.0,
          "value": 67710.0
        },
        {
          "level": 11,
          "price": 0.31,
          "quantity": 50000.0,
          "value": 15500.0
        },
        {
          "level": 12,
          "price": 0.33,
          "quantity": 8000.0,
          "value": 2640.0
        },
        {
          "level": 13,
          "price": 0.35,
          "quantity": 136000.0,
          "value": 47600.0
        },
        {
          "level": 14,
          "price": 0.355,
          "quantity": 10000.0,
          "value": 3550.0
        },
        {
          "level": 15,
          "price": 0.36,
          "quantity": 2000.0,
          "value": 720.0
        },
        {
          "level": 16,
          "price": 0.365,
          "quantity": 20000.0,
          "value": 7300.0
        },
        {
          "level": 17,
          "price": 0.395,
          "quantity": 20000.0,
          "value": 7900.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-14 08:59:52.155100000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2575,
        "spread_pct": 0.019417475728155355,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 1105418.0,
        "ask_depth_notional_displayed": 2881028.5,
        "bid_depth_notional_top10": 1105418.0,
        "ask_depth_notional_top10": 2881028.5,
        "bid_ask_depth_ratio": 0.3837
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 113,
        "history_limited": true,
        "trade_days_used": 77,
        "n_trades_used": 12237,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-05-14",
        "window_label": "Jan 22, 2026 to May 14, 2026",
        "window_short_label": "Jan 22-May 14",
        "trade_days_label": "77 trading days",
        "trade_count_label": "12,237 trades",
        "window_detail_label": "77 trading days • 12,237 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to May 14, 2026 (77 trading days • 12,237 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10600.0,
            "impact_pct": -0.009709,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.96,
            "pct_of_adv": 3.85
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14250.0,
            "impact_pct": -0.009709,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.29,
            "pct_of_adv": 5.17
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 166277.57,
            "impact_pct": -0.009709,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 15.04,
            "pct_of_adv": 60.35
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-14",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8146327279925059584",
            "timestamp": "2026-05-13 22:59:01.173900000",
            "local_timestamp": "2026-05-14 06:59:01",
            "posted_price": 0.3,
            "size_shares": 3284000.0,
            "notional": 985200.0,
            "impact_pct": -0.043694,
            "filled_pct": 100.0,
            "levels_consumed": 7,
            "pct_of_bid_depth": 89.12,
            "price_vs_mid_pct": 16.505,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8148702225041435648",
            "timestamp": "2026-05-14 01:28:10.759800000",
            "local_timestamp": "2026-05-14 09:28:10",
            "posted_price": 0.26,
            "size_shares": 600000.0,
            "notional": 156000.0,
            "impact_pct": -0.009709,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 14.11,
            "price_vs_mid_pct": 0.971,
            "executed_event_count": 0,
            "event_count": 20
          },
          {
            "rank": 3,
            "order_id": "8148306400857847808",
            "timestamp": "2026-05-13 22:59:01.173900000",
            "local_timestamp": "2026-05-14 06:59:01",
            "posted_price": 0.275,
            "size_shares": 540000.0,
            "notional": 148500.0,
            "impact_pct": -0.009709,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 13.43,
            "price_vs_mid_pct": 6.796,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-14",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.005,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "reason": null,
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 943908.0,
            "ask_depth_notional": 2917586.5,
            "mid_price": 0.2575
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 974403.0,
            "ask_depth_notional": 2900396.5,
            "mid_price": 0.2575
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 974403.0,
            "ask_depth_notional": 2925365.5,
            "mid_price": 0.2575
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 974403.0,
            "ask_depth_notional": 3030460.5,
            "mid_price": 0.2575
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1040653.0,
            "ask_depth_notional": 3037035.5,
            "mid_price": 0.2575
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 972109.0,
            "ask_depth_notional": 3037905.5,
            "mid_price": 0.2575
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 965047.5,
            "ask_depth_notional": 2982593.5,
            "mid_price": 0.2575
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 977797.5,
            "ask_depth_notional": 3025793.5,
            "mid_price": 0.2575
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 980602.5,
            "ask_depth_notional": 3027398.5,
            "mid_price": 0.2575
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 980602.5,
            "ask_depth_notional": 3025608.5,
            "mid_price": 0.2575
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 965602.5,
            "ask_depth_notional": 2896987.0,
            "mid_price": 0.2575
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1091852.5,
            "ask_depth_notional": 2914397.0,
            "mid_price": 0.2575
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1107152.5,
            "ask_depth_notional": 2897572.0,
            "mid_price": 0.2575
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1105418.0,
            "ask_depth_notional": 2881028.5,
            "mid_price": 0.2575
          }
        ],
        "summary": {
          "median_spread_pct": 0.019417475728155355,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 976100.25,
          "median_ask_depth_notional": 2953979.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "16:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 18.1,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 91.3
        },
        {
          "ticker": "J03",
          "pct": 458.4
        },
        {
          "ticker": "42F",
          "pct": 507.8
        },
        {
          "ticker": "U77",
          "pct": 17854.0
        },
        {
          "ticker": "LVR",
          "pct": 21706.1
        },
        {
          "ticker": "NXR",
          "pct": 134138.2
        },
        {
          "ticker": "532",
          "pct": 197413.9
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "3m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 42,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-14",
          "last_trade_date": "2026-05-14",
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8095238095238095,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.023809523809523808,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.30374273075202546,
            "mixed_qty_pct": 0.5664297430289775,
            "instit_qty_pct": 0.12982752621899696,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.30507180204517514,
            "mixed_notional_pct": 0.5655940558704754,
            "instit_notional_pct": 0.12933414208434943,
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
              "retail": 34,
              "mixed": 7,
              "institutional": 1,
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
            "avg": 12502.130952380952,
            "median": 5900.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8095238095238095,
              "mixed_pct": 0.16666666666666666,
              "instit_pct": 0.023809523809523808,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.30374273075202546,
              "mixed_qty_pct": 0.5664297430289775,
              "instit_qty_pct": 0.12982752621899696,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.30507180204517514,
              "mixed_notional_pct": 0.5655940558704754,
              "instit_notional_pct": 0.12933414208434943,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 12502.130952380952,
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
              "ticker": "U77",
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
              "avg_trade_size": 807.2454545454544,
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
              "ticker": "LVR",
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
              "avg_trade_size": 2690.0,
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
              "ticker": "NXR",
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
              "avg_trade_size": 5834.75,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9696969696969697,
              "mixed_pct": 0.030303030303030304,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8972775852108608,
              "mixed_qty_pct": 0.10272241478913922,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8971348788828211,
              "mixed_notional_pct": 0.10286512111717891,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4358.163636363636,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9157303370786517,
              "mixed_pct": 0.08426966292134831,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4472204677938725,
              "mixed_qty_pct": 0.5527795322061275,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4473947103809513,
              "mixed_notional_pct": 0.5526052896190488,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3269.5797752808985,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9123711340206185,
              "mixed_pct": 0.08762886597938144,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3522159800249688,
              "mixed_qty_pct": 0.6477840199750312,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3528869313334524,
              "mixed_notional_pct": 0.6471130686665476,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3247.615979381443,
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
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 268,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-05-08",
          "last_trade_date": "2026-05-14",
          "period_days": 6,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.7611940298507462,
            "mixed_pct": 0.208955223880597,
            "instit_pct": 0.029850746268656716,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.24103950525497617,
            "mixed_qty_pct": 0.5092156398905072,
            "instit_qty_pct": 0.24974485485451658,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.24120065221977519,
            "mixed_notional_pct": 0.5087431230706644,
            "instit_notional_pct": 0.25005622470956046,
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
              "retail": 204,
              "mixed": 56,
              "institutional": 8,
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
            "avg": 14193.777985074626,
            "median": 5300.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.7611940298507462,
              "mixed_pct": 0.208955223880597,
              "instit_pct": 0.029850746268656716,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.24103950525497617,
              "mixed_qty_pct": 0.5092156398905072,
              "instit_qty_pct": 0.24974485485451658,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.24120065221977519,
              "mixed_notional_pct": 0.5087431230706644,
              "instit_notional_pct": 0.25005622470956046,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 14193.777985074626,
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
              "ticker": "LVR",
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
              "avg_trade_size": 2426.6666666666665,
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
              "ticker": "NXR",
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
              "avg_trade_size": 4743.333333333333,
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
              "ticker": "532",
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
              "avg_trade_size": 770.03,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9714285714285714,
              "mixed_pct": 0.02857142857142857,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6866476371709483,
              "mixed_qty_pct": 0.3133523628290517,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6872282233156675,
              "mixed_notional_pct": 0.3127717766843325,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1777.9828571428573,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9435215946843853,
              "mixed_pct": 0.054817275747508304,
              "instit_pct": 0.0016611295681063123,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.41447799416354,
              "mixed_qty_pct": 0.5376987671967125,
              "instit_qty_pct": 0.04782323863974748,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.41554170400245094,
              "mixed_notional_pct": 0.5372903103368849,
              "instit_notional_pct": 0.04716798566066416,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2774.701411960133,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9125,
              "mixed_pct": 0.08125,
              "instit_pct": 0.00625,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5360119002443801,
              "mixed_qty_pct": 0.37534342223099226,
              "instit_qty_pct": 0.08864467752462774,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5334988380410662,
              "mixed_notional_pct": 0.3758621569737885,
              "instit_notional_pct": 0.09063900498514528,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5436.40125,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8974654377880185,
              "mixed_pct": 0.10253456221198157,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5397854594520766,
              "mixed_qty_pct": 0.46021454054792343,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5419109261208415,
              "mixed_notional_pct": 0.45808907387915854,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4632.83940092166,
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
          "currency": "SGD",
          "n_trades": 981,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-15",
          "last_trade_date": "2026-05-14",
          "period_days": 29,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8154943934760448,
            "mixed_pct": 0.1580020387359837,
            "instit_pct": 0.026503567787971458,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2651116223077748,
            "mixed_qty_pct": 0.4629089738852668,
            "instit_qty_pct": 0.27197940380695834,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.26459409005447193,
            "mixed_notional_pct": 0.46352837077867426,
            "instit_notional_pct": 0.2718775391668538,
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
              "retail": 800,
              "mixed": 155,
              "institutional": 26,
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
            "avg": 10679.40112130479,
            "median": 2900.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8154943934760448,
              "mixed_pct": 0.1580020387359837,
              "instit_pct": 0.026503567787971458,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2651116223077748,
              "mixed_qty_pct": 0.4629089738852668,
              "instit_qty_pct": 0.27197940380695834,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.26459409005447193,
              "mixed_notional_pct": 0.46352837077867426,
              "instit_notional_pct": 0.2718775391668538,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10679.40112130479,
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
              "ticker": "NXR",
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
              "avg_trade_size": 3316.5116279069766,
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
              "ticker": "532",
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
              "avg_trade_size": 363.0596078431373,
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
              "ticker": "KUX",
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
              "avg_trade_size": 510.14,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9821428571428571,
              "mixed_pct": 0.017857142857142856,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.843833464257659,
              "mixed_qty_pct": 0.15616653574234093,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8446040984289316,
              "mixed_notional_pct": 0.1553959015710684,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2261.711607142857,
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
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9523809523809523,
              "mixed_pct": 0.047619047619047616,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7609180745935608,
              "mixed_qty_pct": 0.23908192540643927,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7545641294806475,
              "mixed_notional_pct": 0.24543587051935242,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3288.779761904762,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9290662233305624,
              "mixed_pct": 0.06483790523690773,
              "instit_pct": 0.006095871432529786,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3571899938612646,
              "mixed_qty_pct": 0.4784952424800491,
              "instit_qty_pct": 0.1643147636586863,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35871752199784346,
              "mixed_notional_pct": 0.47676063206397495,
              "instit_notional_pct": 0.1645218459381816,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3674.1224023275145,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9130434782608695,
              "mixed_pct": 0.08695652173913043,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6013465843441573,
              "mixed_qty_pct": 0.39865341565584267,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5975189612554173,
              "mixed_notional_pct": 0.40248103874458263,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4806.821739130434,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8710888610763454,
              "mixed_pct": 0.1214017521902378,
              "instit_pct": 0.007509386733416771,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4249052605480852,
              "mixed_qty_pct": 0.4610466173137634,
              "instit_qty_pct": 0.11404812213815144,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.42664724553964983,
              "mixed_notional_pct": 0.45807656078147396,
              "instit_notional_pct": 0.11527619367887623,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6347.85181476846,
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
          "currency": "SGD",
          "n_trades": 3160,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-11",
          "last_trade_date": "2026-05-14",
          "period_days": 92,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8813291139240507,
            "mixed_pct": 0.1079113924050633,
            "instit_pct": 0.010759493670886076,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3663658684856667,
            "mixed_qty_pct": 0.4677563974596257,
            "instit_qty_pct": 0.1658777340547076,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3618279442475437,
            "mixed_notional_pct": 0.468873988834875,
            "instit_notional_pct": 0.16929806691758129,
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
              "retail": 2785,
              "mixed": 341,
              "institutional": 34,
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
            "avg": 6803.253639240506,
            "median": 1821.25
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8813291139240507,
              "mixed_pct": 0.1079113924050633,
              "instit_pct": 0.010759493670886076,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3663658684856667,
              "mixed_qty_pct": 0.4677563974596257,
              "instit_qty_pct": 0.1658777340547076,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3618279442475437,
              "mixed_notional_pct": 0.468873988834875,
              "instit_notional_pct": 0.16929806691758129,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6803.253639240506,
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
              "ticker": "532",
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
              "avg_trade_size": 420.66541095890415,
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
              "ticker": "KUX",
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
              "avg_trade_size": 452.0941176470588,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9928571428571429,
              "mixed_pct": 0.007142857142857143,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8849056603773585,
              "mixed_qty_pct": 0.11509433962264151,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8851178918938446,
              "mixed_notional_pct": 0.1148821081061554,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1191.2926785714287,
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
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9696969696969697,
              "mixed_pct": 0.020202020202020204,
              "instit_pct": 0.010101010101010102,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.35,
              "mixed_qty_pct": 0.03744257274119449,
              "instit_qty_pct": 0.6125574272588055,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35469197069528047,
              "mixed_notional_pct": 0.039059987834076465,
              "instit_notional_pct": 0.606248041470643,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9863.61616161616,
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
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9329896907216495,
              "mixed_pct": 0.06701030927835051,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5844748858447488,
              "mixed_qty_pct": 0.4155251141552511,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5895292227638924,
              "mixed_notional_pct": 0.4104707772361076,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3900.0541237113403,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9205267938237965,
              "mixed_pct": 0.07947320617620345,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.630603783814704,
              "mixed_qty_pct": 0.369396216185296,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6159914324567091,
              "mixed_notional_pct": 0.384008567543291,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4551.618119891008,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9197760094311819,
              "mixed_pct": 0.07291482463896257,
              "instit_pct": 0.007309165929855585,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3597885807431412,
              "mixed_qty_pct": 0.46541886431054186,
              "instit_qty_pct": 0.17479255494631693,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3608795589810105,
              "mixed_notional_pct": 0.4640996166980517,
              "instit_notional_pct": 0.17502082432093777,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4314.227055702918,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9002375296912114,
              "mixed_pct": 0.09323040380047506,
              "instit_pct": 0.006532066508313539,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4670784524656339,
              "mixed_qty_pct": 0.3988377023158352,
              "instit_qty_pct": 0.1340838452185309,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4604543895522275,
              "mixed_notional_pct": 0.4041095776234729,
              "instit_notional_pct": 0.1354360328242997,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5485.927672209025,
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
      "currency": "SGD",
      "n_trades": 3160,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-02-11",
      "last_trade_date": "2026-05-14",
      "period_days": 92,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 13500.0,
        "instit_min": 67500.0
      },
      "composition": {
        "retail_pct": 0.8813291139240507,
        "mixed_pct": 0.1079113924050633,
        "instit_pct": 0.010759493670886076,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.3618279442475437,
        "mixed_notional_pct": 0.468873988834875,
        "instit_notional_pct": 0.16929806691758129,
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
        "avg": 6803.253639240506,
        "median": 1821.25
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
            "n_trades": 358,
            "n_runs": 0,
            "retail_pct": 0.8072625698324022,
            "mixed_pct": 0.16759776536312848,
            "instit_pct": 0.025139664804469275,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 11443.363128491621,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2772254478840004,
            "mixed_qty_pct": 0.47091626044027696,
            "instit_qty_pct": 0.25185829167572266,
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
            "total_quantity": 16103500.0
          },
          {
            "month": "2026-04",
            "n_trades": 913,
            "n_runs": 0,
            "retail_pct": 0.8499452354874042,
            "mixed_pct": 0.13143483023001096,
            "instit_pct": 0.018619934282584884,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 8334.989594742607,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27906226883902663,
            "mixed_qty_pct": 0.48092862697494454,
            "instit_qty_pct": 0.24000910418602886,
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
            "total_quantity": 31633800.0
          },
          {
            "month": "2026-03",
            "n_trades": 1026,
            "n_runs": 0,
            "retail_pct": 0.928849902534113,
            "mixed_pct": 0.06920077972709551,
            "instit_pct": 0.001949317738791423,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 4442.360623781677,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5525152116368385,
            "mixed_qty_pct": 0.4064222944197647,
            "instit_qty_pct": 0.0410624939433969,
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
            "total_quantity": 19606700.0
          },
          {
            "month": "2026-02",
            "n_trades": 2084,
            "n_runs": 0,
            "retail_pct": 0.9021113243761996,
            "mixed_pct": 0.09213051823416507,
            "instit_pct": 0.005758157389635317,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 5392.230326295586,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4015510527645414,
            "mixed_qty_pct": 0.4952392567491049,
            "instit_qty_pct": 0.1032096904863537,
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
            "total_quantity": 45917200.0
          },
          {
            "month": "2026-01",
            "n_trades": 2477,
            "n_runs": 0,
            "retail_pct": 0.8389180460234155,
            "mixed_pct": 0.14937424303593055,
            "instit_pct": 0.011707710940654016,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 7226.47779572063,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27654494081056014,
            "mixed_qty_pct": 0.5780789376207284,
            "instit_qty_pct": 0.1453761215687115,
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
            "total_quantity": 65332600.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.8813291139240507,
          "mixed_pct": 0.1079113924050633,
          "instit_pct": 0.010759493670886076,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3663658684856667,
          "mixed_qty_pct": 0.4677563974596257,
          "instit_qty_pct": 0.1658777340547076,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3618279442475437,
          "mixed_notional_pct": 0.468873988834875,
          "instit_notional_pct": 0.16929806691758129,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 6803.253639240506,
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
          "ticker": "532",
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
          "avg_trade_size": 420.66541095890415,
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
          "ticker": "KUX",
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
          "avg_trade_size": 452.0941176470588,
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
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9928571428571429,
          "mixed_pct": 0.007142857142857143,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8849056603773585,
          "mixed_qty_pct": 0.11509433962264151,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8851178918938446,
          "mixed_notional_pct": 0.1148821081061554,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1191.2926785714287,
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
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9696969696969697,
          "mixed_pct": 0.020202020202020204,
          "instit_pct": 0.010101010101010102,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.35,
          "mixed_qty_pct": 0.03744257274119449,
          "instit_qty_pct": 0.6125574272588055,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.35469197069528047,
          "mixed_notional_pct": 0.039059987834076465,
          "instit_notional_pct": 0.606248041470643,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 9863.61616161616,
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
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9329896907216495,
          "mixed_pct": 0.06701030927835051,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5844748858447488,
          "mixed_qty_pct": 0.4155251141552511,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5895292227638924,
          "mixed_notional_pct": 0.4104707772361076,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3900.0541237113403,
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
          "ticker": "J03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9205267938237965,
          "mixed_pct": 0.07947320617620345,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.630603783814704,
          "mixed_qty_pct": 0.369396216185296,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6159914324567091,
          "mixed_notional_pct": 0.384008567543291,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4551.618119891008,
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
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9197760094311819,
          "mixed_pct": 0.07291482463896257,
          "instit_pct": 0.007309165929855585,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3597885807431412,
          "mixed_qty_pct": 0.46541886431054186,
          "instit_qty_pct": 0.17479255494631693,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3608795589810105,
          "mixed_notional_pct": 0.4640996166980517,
          "instit_notional_pct": 0.17502082432093777,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4314.227055702918,
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
          "ticker": "42F",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9002375296912114,
          "mixed_pct": 0.09323040380047506,
          "instit_pct": 0.006532066508313539,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.4670784524656339,
          "mixed_qty_pct": 0.3988377023158352,
          "instit_qty_pct": 0.1340838452185309,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.4604543895522275,
          "mixed_notional_pct": 0.4041095776234729,
          "instit_notional_pct": 0.1354360328242997,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5485.927672209025,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8095238095238095,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.023809523809523808,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.30374273075202546,
            "mixed_qty_pct": 0.5664297430289775,
            "instit_qty_pct": 0.12982752621899696,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.30507180204517514,
            "mixed_notional_pct": 0.5655940558704754,
            "instit_notional_pct": 0.12933414208434943,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 12502.130952380952,
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
            "ticker": "U77",
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
            "avg_trade_size": 807.2454545454544,
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
            "ticker": "LVR",
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
            "avg_trade_size": 2690.0,
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
            "ticker": "NXR",
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
            "avg_trade_size": 5834.75,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9696969696969697,
            "mixed_pct": 0.030303030303030304,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8972775852108608,
            "mixed_qty_pct": 0.10272241478913922,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8971348788828211,
            "mixed_notional_pct": 0.10286512111717891,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4358.163636363636,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9157303370786517,
            "mixed_pct": 0.08426966292134831,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4472204677938725,
            "mixed_qty_pct": 0.5527795322061275,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4473947103809513,
            "mixed_notional_pct": 0.5526052896190488,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3269.5797752808985,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9123711340206185,
            "mixed_pct": 0.08762886597938144,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3522159800249688,
            "mixed_qty_pct": 0.6477840199750312,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3528869313334524,
            "mixed_notional_pct": 0.6471130686665476,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3247.615979381443,
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
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.7611940298507462,
            "mixed_pct": 0.208955223880597,
            "instit_pct": 0.029850746268656716,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.24103950525497617,
            "mixed_qty_pct": 0.5092156398905072,
            "instit_qty_pct": 0.24974485485451658,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.24120065221977519,
            "mixed_notional_pct": 0.5087431230706644,
            "instit_notional_pct": 0.25005622470956046,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 14193.777985074626,
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
            "ticker": "LVR",
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
            "avg_trade_size": 2426.6666666666665,
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
            "ticker": "NXR",
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
            "avg_trade_size": 4743.333333333333,
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
            "ticker": "532",
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
            "avg_trade_size": 770.03,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9714285714285714,
            "mixed_pct": 0.02857142857142857,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6866476371709483,
            "mixed_qty_pct": 0.3133523628290517,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6872282233156675,
            "mixed_notional_pct": 0.3127717766843325,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1777.9828571428573,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9435215946843853,
            "mixed_pct": 0.054817275747508304,
            "instit_pct": 0.0016611295681063123,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.41447799416354,
            "mixed_qty_pct": 0.5376987671967125,
            "instit_qty_pct": 0.04782323863974748,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.41554170400245094,
            "mixed_notional_pct": 0.5372903103368849,
            "instit_notional_pct": 0.04716798566066416,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2774.701411960133,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9125,
            "mixed_pct": 0.08125,
            "instit_pct": 0.00625,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5360119002443801,
            "mixed_qty_pct": 0.37534342223099226,
            "instit_qty_pct": 0.08864467752462774,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5334988380410662,
            "mixed_notional_pct": 0.3758621569737885,
            "instit_notional_pct": 0.09063900498514528,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5436.40125,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8974654377880185,
            "mixed_pct": 0.10253456221198157,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5397854594520766,
            "mixed_qty_pct": 0.46021454054792343,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5419109261208415,
            "mixed_notional_pct": 0.45808907387915854,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4632.83940092166,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8154943934760448,
            "mixed_pct": 0.1580020387359837,
            "instit_pct": 0.026503567787971458,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2651116223077748,
            "mixed_qty_pct": 0.4629089738852668,
            "instit_qty_pct": 0.27197940380695834,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.26459409005447193,
            "mixed_notional_pct": 0.46352837077867426,
            "instit_notional_pct": 0.2718775391668538,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10679.40112130479,
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
            "ticker": "NXR",
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
            "avg_trade_size": 3316.5116279069766,
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
            "ticker": "532",
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
            "avg_trade_size": 363.0596078431373,
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
            "ticker": "KUX",
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
            "avg_trade_size": 510.14,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9821428571428571,
            "mixed_pct": 0.017857142857142856,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.843833464257659,
            "mixed_qty_pct": 0.15616653574234093,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8446040984289316,
            "mixed_notional_pct": 0.1553959015710684,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2261.711607142857,
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
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9523809523809523,
            "mixed_pct": 0.047619047619047616,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7609180745935608,
            "mixed_qty_pct": 0.23908192540643927,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7545641294806475,
            "mixed_notional_pct": 0.24543587051935242,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3288.779761904762,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9290662233305624,
            "mixed_pct": 0.06483790523690773,
            "instit_pct": 0.006095871432529786,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3571899938612646,
            "mixed_qty_pct": 0.4784952424800491,
            "instit_qty_pct": 0.1643147636586863,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35871752199784346,
            "mixed_notional_pct": 0.47676063206397495,
            "instit_notional_pct": 0.1645218459381816,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3674.1224023275145,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9130434782608695,
            "mixed_pct": 0.08695652173913043,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6013465843441573,
            "mixed_qty_pct": 0.39865341565584267,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5975189612554173,
            "mixed_notional_pct": 0.40248103874458263,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4806.821739130434,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8710888610763454,
            "mixed_pct": 0.1214017521902378,
            "instit_pct": 0.007509386733416771,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4249052605480852,
            "mixed_qty_pct": 0.4610466173137634,
            "instit_qty_pct": 0.11404812213815144,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.42664724553964983,
            "mixed_notional_pct": 0.45807656078147396,
            "instit_notional_pct": 0.11527619367887623,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6347.85181476846,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8813291139240507,
            "mixed_pct": 0.1079113924050633,
            "instit_pct": 0.010759493670886076,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3663658684856667,
            "mixed_qty_pct": 0.4677563974596257,
            "instit_qty_pct": 0.1658777340547076,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3618279442475437,
            "mixed_notional_pct": 0.468873988834875,
            "instit_notional_pct": 0.16929806691758129,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6803.253639240506,
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
            "ticker": "532",
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
            "avg_trade_size": 420.66541095890415,
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
            "ticker": "KUX",
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
            "avg_trade_size": 452.0941176470588,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9928571428571429,
            "mixed_pct": 0.007142857142857143,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8849056603773585,
            "mixed_qty_pct": 0.11509433962264151,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8851178918938446,
            "mixed_notional_pct": 0.1148821081061554,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1191.2926785714287,
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
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9696969696969697,
            "mixed_pct": 0.020202020202020204,
            "instit_pct": 0.010101010101010102,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.35,
            "mixed_qty_pct": 0.03744257274119449,
            "instit_qty_pct": 0.6125574272588055,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35469197069528047,
            "mixed_notional_pct": 0.039059987834076465,
            "instit_notional_pct": 0.606248041470643,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9863.61616161616,
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
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9329896907216495,
            "mixed_pct": 0.06701030927835051,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5844748858447488,
            "mixed_qty_pct": 0.4155251141552511,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5895292227638924,
            "mixed_notional_pct": 0.4104707772361076,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3900.0541237113403,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9205267938237965,
            "mixed_pct": 0.07947320617620345,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.630603783814704,
            "mixed_qty_pct": 0.369396216185296,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6159914324567091,
            "mixed_notional_pct": 0.384008567543291,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4551.618119891008,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9197760094311819,
            "mixed_pct": 0.07291482463896257,
            "instit_pct": 0.007309165929855585,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3597885807431412,
            "mixed_qty_pct": 0.46541886431054186,
            "instit_qty_pct": 0.17479255494631693,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3608795589810105,
            "mixed_notional_pct": 0.4640996166980517,
            "instit_notional_pct": 0.17502082432093777,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4314.227055702918,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9002375296912114,
            "mixed_pct": 0.09323040380047506,
            "instit_pct": 0.006532066508313539,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4670784524656339,
            "mixed_qty_pct": 0.3988377023158352,
            "instit_qty_pct": 0.1340838452185309,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4604543895522275,
            "mixed_notional_pct": 0.4041095776234729,
            "instit_notional_pct": 0.1354360328242997,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5485.927672209025,
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
      "total_trades": 6857,
      "price_moving_trades": 1348,
      "pct_price_moving": 19.658742890476884,
      "all_movers": {
        "count": 1348,
        "avg_size": 7071.836053412463,
        "median_size": 970.5,
        "retail_count": 1144,
        "mixed_count": 186,
        "institutional_count": 18,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 84.86646884272997,
        "mixed_pct": 13.798219584569733,
        "instit_pct": 1.3353115727002967,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 676,
        "avg_size": 5258.667899408284,
        "median_size": 73.5,
        "retail_count": 597,
        "mixed_count": 73,
        "institutional_count": 6,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.31360946745562,
        "mixed_pct": 10.798816568047338,
        "instit_pct": 0.8875739644970414,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 672,
        "avg_size": 8895.796875,
        "median_size": 2419.0,
        "retail_count": 547,
        "mixed_count": 113,
        "institutional_count": 12,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.39880952380952,
        "mixed_pct": 16.815476190476193,
        "instit_pct": 1.7857142857142856,
        "unclear_pct": null
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
        "n_days_short_data": 65,
        "window_days": 63
      },
      "periods": {
        "1W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0,
            "max_short_ratio": 0.0,
            "interpretation": "Low short interest"
          }
        },
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0,
            "max_short_ratio": 0.0,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0047595642615904385,
            "max_short_ratio": 0.0924792304328815,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": false,
        "correlation": null,
        "interpretation": "No clear relationship (correlation undefined)"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-05",
            "avg_short_ratio": 0.0
          },
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
            "month": "2026-05",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
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
        "interpretation": "Short interest stable"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2302900,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-05-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2771200,
            "close": 0.26,
            "return": 0.0
          },
          {
            "date": "2026-05-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1212000,
            "close": 0.26,
            "return": 0.019607843137254832
          },
          {
            "date": "2026-05-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 925100,
            "close": 0.255,
            "return": 0.0
          },
          {
            "date": "2026-05-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8857000,
            "close": 0.255,
            "return": 0.020000000000000018
          },
          {
            "date": "2026-05-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1731600,
            "close": 0.25,
            "return": 0.020408163265306145
          },
          {
            "date": "2026-05-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 439300,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2026-05-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 570000,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-05-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 674700,
            "close": 0.245,
            "return": 0.042553191489361764
          },
          {
            "date": "2026-04-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 757800,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-04-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 460300,
            "close": 0.24,
            "return": 0.0
          },
          {
            "date": "2026-04-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 417500,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1888200,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 444200,
            "close": 0.25,
            "return": -0.019607843137254943
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1814600,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5476800,
            "close": 0.26,
            "return": 0.019607843137254832
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 7842700,
            "close": 0.255,
            "return": 0.08510638297872353
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 824200,
            "close": 0.235,
            "return": 0.021739130434782483
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 818600,
            "close": 0.23,
            "return": -0.061224489795918324
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9893900,
            "close": 0.245,
            "return": 0.06521739130434767
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 550400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 512100,
            "close": 0.23,
            "return": 0.045454545454545414
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1064200,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 777400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1029700,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1591000,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 730200,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1221000,
            "close": 0.22,
            "return": -0.0434782608695653
          },
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
            "return": -0.07692307692307698
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1797700,
            "close": 0.26,
            "return": 0.040000000000000036
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1722300,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1623700,
            "close": 0.25,
            "return": -0.019607843137254943
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1450400,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3005400,
            "close": 0.26,
            "return": 0.061224489795918435
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 655800,
            "close": 0.245,
            "return": 0.0
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2119900,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1310400,
            "close": 0.25,
            "return": 0.08695652173913038
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2619400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0629643621710112,
            "short_vol": 100000,
            "total_vol": 1588200,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1992800,
            "close": 0.23,
            "return": 0.045454545454545414
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3371800,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0924792304328815,
            "short_vol": 380700,
            "total_vol": 4116600,
            "close": 0.22,
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.0,
          "max_short_ratio": 0.0,
          "is_target": true
        },
        {
          "ticker": "42F",
          "avg_short_ratio": 2.4900385074969807e-05,
          "max_short_ratio": 0.0071947622131088565,
          "is_target": false
        },
        {
          "ticker": "532",
          "avg_short_ratio": 7.741077330155511e-05,
          "max_short_ratio": 0.0287968076681785,
          "is_target": false
        },
        {
          "ticker": "J03",
          "avg_short_ratio": 0.00046092725365772777,
          "max_short_ratio": 0.04373162853885592,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0033299183715099975,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.005721447676585759,
          "max_short_ratio": 0.28210566910914,
          "is_target": false
        }
      ]
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
          "opening": 0.043852909903320775,
          "continuous": 0.9497181981893389,
          "closing": 0.0062690915348825775,
          "auctions": 0.05028180181066114,
          "other": 0.0
        },
        "1W": {
          "opening": 0.06887721616827856,
          "continuous": 0.9231327815343688,
          "closing": 0.007725128541204584,
          "auctions": 0.07686721846563117,
          "other": 0.0
        },
        "1M": {
          "opening": 0.029841596658431488,
          "continuous": 0.9458993154989603,
          "closing": 0.015983226940503997,
          "auctions": 0.05410068450103962,
          "other": 0.0
        },
        "3M": {
          "opening": 0.022242689997383464,
          "continuous": 0.9559403916569027,
          "closing": 0.015462718900893208,
          "auctions": 0.04405960834309726,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.274038753121005,
        "1W": 0.3078147822323645,
        "1M": 0.3410230889495545,
        "3M": 0.2895909034285496
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0153
        },
        {
          "time": "09:00",
          "avg_share": 0.113
        },
        {
          "time": "09:30",
          "avg_share": 0.1003
        },
        {
          "time": "10:00",
          "avg_share": 0.051
        },
        {
          "time": "10:30",
          "avg_share": 0.0778
        },
        {
          "time": "11:00",
          "avg_share": 0.067
        },
        {
          "time": "11:30",
          "avg_share": 0.0574
        },
        {
          "time": "12:00",
          "avg_share": 0.0024
        },
        {
          "time": "12:30",
          "avg_share": 0.0026
        },
        {
          "time": "13:00",
          "avg_share": 0.086
        },
        {
          "time": "13:30",
          "avg_share": 0.061
        },
        {
          "time": "14:00",
          "avg_share": 0.0586
        },
        {
          "time": "14:30",
          "avg_share": 0.0568
        },
        {
          "time": "15:00",
          "avg_share": 0.0503
        },
        {
          "time": "15:30",
          "avg_share": 0.0574
        },
        {
          "time": "16:00",
          "avg_share": 0.0405
        },
        {
          "time": "16:30",
          "avg_share": 0.0702
        },
        {
          "time": "17:00",
          "avg_share": 0.0324
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.341939077606755,
          "hhi": 0.2678357703742867,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 3.2801850519491573,
          "hhi": 0.6756866005597023,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 10.677436590719086,
          "hhi": 0.8192821260298468,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 4.701021232784132,
          "hhi": 0.5506894531077315,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 4.865811400637839,
          "hhi": 0.5346417507711456,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.443238776226585,
          "hhi": 0.7628673262464465,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 9.14383009964429,
          "hhi": 0.4572710408093805,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.913604382305126,
          "hhi": 0.4717558259023083,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.186396700192672,
          "hhi": 0.1906831144288627,
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
