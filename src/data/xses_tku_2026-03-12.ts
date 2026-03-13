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
      "marketCap": 142560313.75,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 268320000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 143048079.95999998,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 105690220.8,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 69825469.63499999,
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
      "ticker": "9MT",
      "name": "METAOPTICS LTD",
      "marketCap": 186839160.20000002,
      "sector": "Computer Hardware",
      "industry": "Technology"
    },
    {
      "ticker": "QS9",
      "name": "G Invacom",
      "marketCap": 15213084.712000001,
      "sector": "Communication Equipment",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-03-12",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "142.6M",
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
          "score_pca": 81.54121863799283,
          "score_pca_percentile": 81.54121863799283,
          "rank_pca": 104,
          "total": 558,
          "adv_notional_sgd": 615300.0,
          "adv_volume_shares": 2461200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0043160679421554654,
          "votes": 176.0,
          "trades": 176.0,
          "spread_pct": 0.023967896212412753,
          "spread_ticks": 1.1720430107526882,
          "amihud": 1.0373766818469451e-07,
          "volatility": 0.7786867843083977
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.525261174907994,
          "loadings": {
            "log_adv": 0.5487294860767431,
            "log_trades": 0.5050222210527616,
            "log_turnover": 0.5141220699613235,
            "neg_spread": 0.36515611124188607,
            "neg_amihud": 0.04964299685884721,
            "neg_vol": -0.20910186947311038
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
          "peer_median_adv": 9259.75,
          "peer_median_score_pca": 47.84946236559139,
          "peer_median_trades": 4.5,
          "peer_median_volatility": 0.2545604405770364,
          "peer_median_spread_pct": 0.0234952829014492,
          "peer_median_spread_ticks": 1.6875,
          "peer_median_amihud": 1.0854905711326389e-07,
          "peer_median_turnover_ratio": 0.0002948427786585597,
          "target_vs_peer": {
            "score_pca_delta": 33.69,
            "adv_delta_pct": 6544.9,
            "trades_delta_pct": 3811.11,
            "volatility_delta_pct": -205.89,
            "spread_pct_delta_pct": -2.01,
            "spread_ticks_delta_pct": -30.55,
            "amihud_delta_pct": 4.43,
            "turnover_ratio_delta_pct": 1363.85
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 81.54121863799283,
            "rank_pca": 104,
            "adv": 615300.0,
            "trades": 176.0,
            "volatility": 0.7786867843083977,
            "spread_pct": 0.023967896212412753,
            "spread_ticks": 1.1720430107526882,
            "amihud": 1.0373766818469451e-07,
            "turnover_ratio": 0.0043160679421554654,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 72.93906810035843,
            "rank_pca": 152,
            "adv": 123344.0,
            "trades": 111.0,
            "volatility": 0.2737110548470368,
            "spread_pct": 0.013841414525045375,
            "spread_ticks": 1.4385964912280702,
            "amihud": 1.5296994201827315e-07,
            "turnover_ratio": 0.0017565530090967525,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 45.340501792114694,
            "rank_pca": 306,
            "adv": 8200.0,
            "trades": 5.0,
            "volatility": 0.0,
            "spread_pct": 0.011411182959300124,
            "spread_ticks": 1.875,
            "amihud": 7.390983000739146e-07,
            "turnover_ratio": 6.913071246865795e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 49.283154121863795,
            "rank_pca": 284,
            "adv": 9766.0,
            "trades": 4.0,
            "volatility": 0.383955791071961,
            "spread_pct": 0.07940780619111715,
            "spread_ticks": 5.9,
            "amihud": 2.767461297053755e-06,
            "turnover_ratio": 0.00045743621843992677,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.415770609319,
            "rank_pca": 300,
            "adv": 8753.5,
            "trades": 3.0,
            "volatility": 0.23540982630703605,
            "spread_pct": 0.024420456556361606,
            "spread_ticks": 1.5,
            "amihud": 0.0,
            "turnover_ratio": 0.00013224933887719258,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.5089605734767026,
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
            "ticker": "KUX",
            "score_pca": 6.810035842293908,
            "rank_pca": 520,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.39999999999999997,
            "spread_ticks": 15.714285714285714,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 80.28673835125448,
            "rank_pca": 111,
            "adv": 394779.0,
            "trades": 169.0,
            "volatility": 0.5591342999796692,
            "spread_pct": 0.018475147007086513,
            "spread_ticks": 2.8190184049079754,
            "amihud": 6.412817220825464e-08,
            "turnover_ratio": 0.006215091930628664,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 80.10752688172043,
            "rank_pca": 112,
            "adv": 230076.0,
            "trades": 246.0,
            "volatility": 0.3405223967533752,
            "spread_pct": 0.02257010924653679,
            "spread_ticks": 1.2651515151515151,
            "amihud": 0.0,
            "turnover_ratio": 0.018053670775078953,
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
              "mean": 0.2414122632082402,
              "median": 0.11464877407380544,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8672897785875878,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3304453.124298606,
              "median": 8809.75,
              "min": 0.0,
              "max": 228390176.0,
              "p5": 0.0,
              "p95": 15603030.099999953,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11379733351039764,
              "median": 0.033865967088003844,
              "min": 0.0002854442826014152,
              "max": 1.4382566585956416,
              "p5": 0.003772547160556751,
              "p95": 0.5154373303661484,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010869846269635946,
              "median": 0.0002461946108804993,
              "min": 0.0,
              "max": 4.482235844703711,
              "p5": 0.0,
              "p95": 0.013512085676905186,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0024628379534643555,
              "median": 1.0676256421824967e-08,
              "min": 0.0,
              "max": 0.8333333333333331,
              "p5": 0.0,
              "p95": 3.8805038805038656e-05,
              "count": 393
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 548.2150537634409,
              "median": 6.0,
              "min": 0.0,
              "max": 11866.0,
              "p5": 0.0,
              "p95": 3170.8999999999987,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.23205825257094853,
              "median": 0.21005619517009644,
              "min": 0.0,
              "max": 0.7786867843083977,
              "p5": 0.0,
              "p95": 0.6405309366756446,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1906163.3125,
              "median": 9259.75,
              "min": 0.0,
              "max": 14483943.0,
              "p5": 0.0,
              "p95": 9629917.949999992,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15264512859028562,
              "median": 0.02419417638438718,
              "min": 0.0014456056113814426,
              "max": 0.6666666666666666,
              "p5": 0.004933557683152981,
              "p95": 0.5733333333333331,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002057211066671572,
              "median": 0.0002948427786585597,
              "min": 0.0,
              "max": 0.00972625131233458,
              "p5": 0.0,
              "p95": 0.007832687132771887,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.274183012529501e-07,
              "median": 1.2835380510148383e-07,
              "min": 0.0,
              "max": 2.767461297053755e-06,
              "p5": 3.106500467658369e-10,
              "p95": 2.260370547808795e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 432.5,
              "median": 4.5,
              "min": 0.0,
              "max": 3161.0,
              "p5": 0.0,
              "p95": 2116.249999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 96864.8125,
              "median": 9259.75,
              "min": 0.0,
              "max": 394779.0,
              "p5": 0.0,
              "p95": 337132.9499999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 67.25,
              "median": 4.5,
              "min": 0.0,
              "max": 246.0,
              "p5": 0.0,
              "p95": 219.04999999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22409167111988476,
              "median": 0.2545604405770364,
              "min": 0.0,
              "max": 0.5591342999796692,
              "p5": 0.0,
              "p95": 0.49782182186197127,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15459909789401427,
              "median": 0.0234952829014492,
              "min": 0.011411182959300124,
              "max": 0.6666666666666666,
              "p5": 0.012261764007310962,
              "p95": 0.5733333333333331,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.9390065156966596,
              "median": 1.6875,
              "min": 1.0,
              "max": 15.714285714285714,
              "p5": 1.0928030303030303,
              "p95": 12.27928571428571,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.206096185590329e-07,
              "median": 1.0854905711326389e-07,
              "min": 0.0,
              "max": 2.767461297053755e-06,
              "p5": 0.0,
              "p95": 2.260370547808795e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003335516498073768,
              "median": 0.0002948427786585597,
              "min": 0.0,
              "max": 0.018053670775078953,
              "p5": 0.0,
              "p95": 0.013910168179521346,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.06382978723404253,
            "market": -0.001743485121045607,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.06557327235508814,
            "vs_sector": 0.06382978723404253,
            "vs_peers": 0.06382978723404253
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 72.22222222222221,
          "score_pca_percentile": 72.22222222222221,
          "rank_pca": 156,
          "total": 558,
          "adv_notional_sgd": 186825.0,
          "adv_volume_shares": 795000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0013941467633729868,
          "votes": 85.0,
          "trades": 85.0,
          "spread_pct": 0.02611025597172341,
          "spread_ticks": 1.1720430107526882,
          "amihud": 1.0373766818469451e-07,
          "volatility": 0.6283471208785856
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5239458318311543,
          "loadings": {
            "log_adv": 0.5499196190146208,
            "log_trades": 0.5042271515266965,
            "log_turnover": 0.5125139438965624,
            "neg_spread": 0.40288132655991965,
            "neg_amihud": 0.13327326605978723,
            "neg_vol": 0.02444837133136083
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
          "peer_median_adv": 10930.0,
          "peer_median_score_pca": 50.537634408602145,
          "peer_median_trades": 5.5,
          "peer_median_volatility": 0.34933736826371875,
          "peer_median_spread_pct": 0.02427608462636146,
          "peer_median_spread_ticks": 1.6898864809081529,
          "peer_median_amihud": 1.0233110251529874e-07,
          "peer_median_turnover_ratio": 0.00012855866684430446,
          "target_vs_peer": {
            "score_pca_delta": 21.68,
            "adv_delta_pct": 1609.3,
            "trades_delta_pct": 1445.45,
            "volatility_delta_pct": -79.87,
            "spread_pct_delta_pct": -7.56,
            "spread_ticks_delta_pct": -30.64,
            "amihud_delta_pct": -1.37,
            "turnover_ratio_delta_pct": 984.44
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.22222222222221,
            "rank_pca": 156,
            "adv": 186825.0,
            "trades": 85.0,
            "volatility": 0.6283471208785856,
            "spread_pct": 0.02611025597172341,
            "spread_ticks": 1.1720430107526882,
            "amihud": 1.0373766818469451e-07,
            "turnover_ratio": 0.0013941467633729868,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 80.28673835125448,
            "rank_pca": 111,
            "adv": 277826.0,
            "trades": 326.0,
            "volatility": 0.5072022296061407,
            "spread_pct": 0.013841414525045375,
            "spread_ticks": 1.4385964912280702,
            "amihud": 5.876805237032714e-08,
            "turnover_ratio": 0.003881893285702014,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 49.46236559139785,
            "rank_pca": 283,
            "adv": 10790.0,
            "trades": 5.0,
            "volatility": 0.27090298802489,
            "spread_pct": 0.011766803351756118,
            "spread_ticks": 1.9411764705882353,
            "amihud": 7.390983000739146e-07,
            "turnover_ratio": 8.986992620925533e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 32.07885304659498,
            "rank_pca": 380,
            "adv": 74.0,
            "trades": 1.0,
            "volatility": 0.37397343886501616,
            "spread_pct": 0.054257724189902067,
            "spread_ticks": 4.0,
            "amihud": 1.6983887951629893e-06,
            "turnover_ratio": 3.5598149294935937e-06,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 51.61290322580645,
            "rank_pca": 271,
            "adv": 11070.0,
            "trades": 6.0,
            "volatility": 0.3247012976624213,
            "spread_pct": 0.025982060006186133,
            "spread_ticks": 1.4,
            "amihud": 0.0,
            "turnover_ratio": 0.00016724740747935362,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.136200716845878,
            "rank_pca": 538,
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
            "score_pca": 7.347670250896058,
            "rank_pca": 518,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4309392265193369,
            "spread_ticks": 16.714285714285715,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 78.13620071684588,
            "rank_pca": 123,
            "adv": 274525.0,
            "trades": 151.0,
            "volatility": 0.47455053138550995,
            "spread_pct": 0.016695290969365333,
            "spread_ticks": 2.759075907590759,
            "amihud": 1.0233110251529874e-07,
            "turnover_ratio": 0.004212491605019428,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 79.74910394265234,
            "rank_pca": 114,
            "adv": 259646.4,
            "trades": 179.0,
            "volatility": 1.261424966009805,
            "spread_pct": 0.02257010924653679,
            "spread_ticks": 1.25,
            "amihud": 1.924289995490082e-07,
            "turnover_ratio": 0.021941241064652364,
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
              "mean": 0.5665447187551345,
              "median": 0.33077256855298476,
              "min": 0.0,
              "max": 9.513056291224183,
              "p5": 0.0,
              "p95": 1.7784474114640962,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3717469.4091618,
              "median": 11517.8,
              "min": 0.0,
              "max": 278393500.0,
              "p5": 0.0,
              "p95": 15495136.14999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11333850127321153,
              "median": 0.037225042301184466,
              "min": 0.00028468976419645744,
              "max": 1.4382566585956416,
              "p5": 0.003900777023463213,
              "p95": 0.5154738379585868,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.011168140774093676,
              "median": 0.0002419614559721273,
              "min": 0.0,
              "max": 4.62395359567596,
              "p5": 0.0,
              "p95": 0.009847755942585676,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00011020370541292739,
              "median": 9.165498810414486e-08,
              "min": 0.0,
              "max": 0.011985371926548392,
              "p5": 0.0,
              "p95": 8.15662756786206e-05,
              "count": 492
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 553.2007168458781,
              "median": 6.5,
              "min": 0.0,
              "max": 11866.0,
              "p5": 0.0,
              "p95": 3515.4499999999994,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.30021418615249473,
              "median": 0.3106438559226625,
              "min": 0.0,
              "max": 0.6283471208785856,
              "p5": 0.0,
              "p95": 0.5859464089332298,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1871316.0,
              "median": 10930.0,
              "min": 0.0,
              "max": 14483943.0,
              "p5": 0.0,
              "p95": 9511802.049999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15387621960524978,
              "median": 0.026046157988954773,
              "min": 0.0014456056113814426,
              "max": 0.6666666666666666,
              "p5": 0.005058024820512579,
              "p95": 0.5841620626151011,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019078710637534602,
              "median": 0.00012855866684430446,
              "min": 0.0,
              "max": 0.00972625131233458,
              "p5": 0.0,
              "p95": 0.007680726003013179,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.7159489740481693e-07,
              "median": 5.876805237032714e-08,
              "min": 0.0,
              "max": 1.6983887951629893e-06,
              "p5": 0.0,
              "p95": 1.410601646636266e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 458.75,
              "median": 5.5,
              "min": 0.0,
              "max": 3247.0,
              "p5": 0.0,
              "p95": 2224.6499999999987,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 104241.425,
              "median": 10930.0,
              "min": 0.0,
              "max": 277826.0,
              "p5": 0.0,
              "p95": 276670.65,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 83.5,
              "median": 5.5,
              "min": 0.0,
              "max": 326.0,
              "p5": 0.0,
              "p95": 274.5499999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4015944314442229,
              "median": 0.34933736826371875,
              "min": 0.0,
              "max": 1.261424966009805,
              "p5": 0.0,
              "p95": 0.9974470082685221,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15533991193434943,
              "median": 0.02427608462636146,
              "min": 0.011766803351756118,
              "max": 0.6666666666666666,
              "p5": 0.012492917262407359,
              "p95": 0.5841620626151011,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.8128918229615976,
              "median": 1.6898864809081529,
              "min": 1.0,
              "max": 16.714285714285715,
              "p5": 1.0875,
              "p95": 12.264285714285709,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.987164642387911e-07,
              "median": 1.0233110251529874e-07,
              "min": 0.0,
              "max": 1.6983887951629893e-06,
              "p5": 0.0,
              "p95": 1.410601646636266e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0037870378879989886,
              "median": 0.00012855866684430446,
              "min": 0.0,
              "max": 0.021941241064652364,
              "p5": 0.0,
              "p95": 0.015736178753780826,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.13636363636363624,
            "market": 0.001809534891804132,
            "sector": -0.023390186396307078,
            "peers": -0.03712757830404889,
            "vs_market": 0.1345541014718321,
            "vs_sector": 0.15975382275994332,
            "vs_peers": 0.17349121466768513
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 71.68458781362007,
          "score_pca_percentile": 71.68458781362007,
          "rank_pca": 159,
          "total": 558,
          "adv_notional_sgd": 272595.75,
          "adv_volume_shares": 1228650.0,
          "free_float_shares": null,
          "turnover_ratio": 0.002154614365809082,
          "votes": 87.0,
          "trades": 87.0,
          "spread_pct": 0.025959814424621055,
          "spread_ticks": 1.1748245941794329,
          "amihud": 1.0163175359127058e-07,
          "volatility": 0.7652220368118129
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5304449487988457,
          "loadings": {
            "log_adv": 0.5435254334651023,
            "log_trades": 0.4933976288748355,
            "log_turnover": 0.5022059015740401,
            "neg_spread": 0.41987144373414514,
            "neg_amihud": 0.1521150638861013,
            "neg_vol": 0.0974530322616979
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
          "peer_median_adv": 10925.125,
          "peer_median_score_pca": 48.83512544802868,
          "peer_median_trades": 7.5,
          "peer_median_volatility": 0.4050803340241962,
          "peer_median_spread_pct": 0.02566372146867228,
          "peer_median_spread_ticks": 1.9303374908290536,
          "peer_median_amihud": 1.0284600477058013e-07,
          "peer_median_turnover_ratio": 0.00017809696193864686,
          "target_vs_peer": {
            "score_pca_delta": 22.85,
            "adv_delta_pct": 2395.1,
            "trades_delta_pct": 1060.0,
            "volatility_delta_pct": -88.91,
            "spread_pct_delta_pct": -1.15,
            "spread_ticks_delta_pct": -39.14,
            "amihud_delta_pct": 1.18,
            "turnover_ratio_delta_pct": 1109.8
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.68458781362007,
            "rank_pca": 159,
            "adv": 272595.75,
            "trades": 87.0,
            "volatility": 0.7652220368118129,
            "spread_pct": 0.025959814424621055,
            "spread_ticks": 1.1748245941794329,
            "amihud": 1.0163175359127058e-07,
            "turnover_ratio": 0.002154614365809082,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.07885304659499,
            "rank_pca": 101,
            "adv": 747838.5,
            "trades": 443.0,
            "volatility": 0.9423255260421631,
            "spread_pct": 0.013297940724671067,
            "spread_ticks": 1.4259851757052204,
            "amihud": 4.863661605618e-08,
            "turnover_ratio": 0.010500069610448083,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 46.236559139784944,
            "rank_pca": 301,
            "adv": 9973.75,
            "trades": 5.0,
            "volatility": 0.19727812075908022,
            "spread_pct": 0.014292752112242613,
            "spread_ticks": 2.410674981658107,
            "amihud": 6.984651416035493e-07,
            "turnover_ratio": 8.330250852473283e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 40.14336917562724,
            "rank_pca": 335,
            "adv": 3995.5,
            "trades": 2.0,
            "volatility": 0.3900977573342433,
            "spread_pct": 0.04931555617301906,
            "spread_ticks": 3.75,
            "amihud": 0.0,
            "turnover_ratio": 0.0001788807002070531,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 51.4336917562724,
            "rank_pca": 272,
            "adv": 11876.5,
            "trades": 10.0,
            "volatility": 0.4200629107141491,
            "spread_pct": 0.028827946300947052,
            "spread_ticks": 1.45,
            "amihud": 1.0342414093123116e-06,
            "turnover_ratio": 0.00017731322367024063,
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
            "score_pca": 6.989247311827956,
            "rank_pca": 520,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4507962541664463,
            "spread_ticks": 18.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 76.52329749103941,
            "rank_pca": 132,
            "adv": 296418.25,
            "trades": 160.0,
            "volatility": 0.5252325658725974,
            "spread_pct": 0.015748712556203137,
            "spread_ticks": 2.6961861498399324,
            "amihud": 1.0284600477058013e-07,
            "turnover_ratio": 0.004389476863820244,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 79.21146953405018,
            "rank_pca": 117,
            "adv": 426428.1,
            "trades": 179.5,
            "volatility": 0.9558784447569351,
            "spread_pct": 0.022499496636397505,
            "spread_ticks": 1.245,
            "amihud": 1.0982775574845762e-07,
            "turnover_ratio": 0.03237444795798812,
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
              "mean": 0.6346092921596342,
              "median": 0.44618021733376684,
              "min": 0.0,
              "max": 8.197560612767678,
              "p5": 0.0,
              "p95": 1.7217996048766144,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4450780.144692606,
              "median": 16838.4,
              "min": 0.0,
              "max": 382575336.74,
              "p5": 0.0,
              "p95": 18191526.449999955,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10499633355413547,
              "median": 0.03485933297842469,
              "min": 0.0002850670233989363,
              "max": 1.3819263342778674,
              "p5": 0.003829454935309239,
              "p95": 0.4874202838027121,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.011346526283794192,
              "median": 0.00032657666056619004,
              "min": 0.0,
              "max": 4.5530947201898355,
              "p5": 0.0,
              "p95": 0.012584312709287001,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.193663626989926e-05,
              "median": 1.117362278814444e-07,
              "min": 0.0,
              "max": 0.012127022859756413,
              "p5": 0.0,
              "p95": 5.886925691422693e-05,
              "count": 530
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 602.2903225806451,
              "median": 7.75,
              "min": 0.0,
              "max": 16138.0,
              "p5": 0.0,
              "p95": 3548.2749999999996,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.37278101331125885,
              "median": 0.32867975608143274,
              "min": 0.0,
              "max": 0.9423255260421631,
              "p5": 0.0,
              "p95": 0.8803393048115404,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2321563.8125,
              "median": 10925.125,
              "min": 0.0,
              "max": 17526230.5,
              "p5": 0.0,
              "p95": 11653793.299999991,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1563257719702785,
              "median": 0.027393880362784055,
              "min": 0.0014492451936142002,
              "max": 0.6666666666666666,
              "p5": 0.005596288629484104,
              "p95": 0.5911120222915894,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003091188898210063,
              "median": 0.00017809696193864686,
              "min": 0.0,
              "max": 0.011635330777021313,
              "p5": 0.0,
              "p95": 0.011237989368720683,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.691073446531488e-07,
              "median": 4.863661605618e-08,
              "min": 0.0,
              "max": 1.0342414093123116e-06,
              "p5": 0.0,
              "p95": 9.335085289996826e-07,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 592.625,
              "median": 7.5,
              "min": 0.0,
              "max": 4194.0,
              "p5": 0.0,
              "p95": 2881.149999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 187066.325,
              "median": 10925.125,
              "min": 0.0,
              "max": 747838.5,
              "p5": 0.0,
              "p95": 635344.8599999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 99.9375,
              "median": 7.5,
              "min": 0.0,
              "max": 443.0,
              "p5": 0.0,
              "p95": 350.77499999999986,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.42885941568489605,
              "median": 0.4050803340241962,
              "min": 0.0,
              "max": 0.9558784447569351,
              "p5": 0.0,
              "p95": 0.9511349232067648,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15768066566707417,
              "median": 0.02566372146867228,
              "min": 0.013297940724671067,
              "max": 0.6666666666666666,
              "p5": 0.013646124710321108,
              "p95": 0.5911120222915894,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.9972307884004072,
              "median": 1.9303374908290536,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.08575,
              "p95": 13.012499999999992,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.848595610701541e-07,
              "median": 1.0284600477058013e-07,
              "min": 0.0,
              "max": 1.0342414093123116e-06,
              "p5": 0.0,
              "p95": 9.335085289996826e-07,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005962936358082309,
              "median": 0.00017809696193864686,
              "min": 0.0,
              "max": 0.03237444795798812,
              "p5": 0.0,
              "p95": 0.024718415536349094,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -1.1102230246251565e-16,
            "market": -0.02196645044531098,
            "sector": -0.06295550297099661,
            "peers": -0.08142233952984945,
            "vs_market": 0.02196645044531087,
            "vs_sector": 0.0629555029709965,
            "vs_peers": 0.08142233952984934
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 73.65591397849462,
          "score_pca_percentile": 73.65591397849462,
          "rank_pca": 148,
          "total": 558,
          "adv_notional_sgd": 405925.0,
          "adv_volume_shares": 1623700.0,
          "free_float_shares": null,
          "turnover_ratio": 0.002847391320363168,
          "votes": 104.0,
          "trades": 104.0,
          "spread_pct": 0.0258093728775187,
          "spread_ticks": 1.1888111888111887,
          "amihud": 7.83519022118116e-08,
          "volatility": 0.6588338132206711
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5348121513139358,
          "loadings": {
            "log_adv": 0.5380321275307328,
            "log_trades": 0.48816351407500047,
            "log_turnover": 0.49550959138800743,
            "neg_spread": 0.4152815832265003,
            "neg_amihud": 0.16538925175503283,
            "neg_vol": 0.16393797653378683
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
          "peer_median_adv": 9443.75,
          "peer_median_score_pca": 47.93906810035842,
          "peer_median_trades": 6.0,
          "peer_median_volatility": 0.3491239915355879,
          "peer_median_spread_pct": 0.02715977230925669,
          "peer_median_spread_ticks": 1.465873015873016,
          "peer_median_amihud": 2.2972878224214264e-07,
          "peer_median_turnover_ratio": 0.00014242162840435557,
          "target_vs_peer": {
            "score_pca_delta": 25.72,
            "adv_delta_pct": 4198.3,
            "trades_delta_pct": 1633.33,
            "volatility_delta_pct": -88.71,
            "spread_pct_delta_pct": 4.97,
            "spread_ticks_delta_pct": -18.9,
            "amihud_delta_pct": 65.89,
            "turnover_ratio_delta_pct": 1899.27
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.65591397849462,
            "rank_pca": 148,
            "adv": 405925.0,
            "trades": 104.0,
            "volatility": 0.6588338132206711,
            "spread_pct": 0.0258093728775187,
            "spread_ticks": 1.1888111888111887,
            "amihud": 7.83519022118116e-08,
            "turnover_ratio": 0.002847391320363168,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 83.51254480286738,
            "rank_pca": 93,
            "adv": 1001222.0,
            "trades": 412.0,
            "volatility": 0.793666035159647,
            "spread_pct": 0.011266735778723733,
            "spread_ticks": 1.3005940594059406,
            "amihud": 3.238348582200699e-08,
            "turnover_ratio": 0.015527573142808056,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 50.7168458781362,
            "rank_pca": 276,
            "adv": 11470.0,
            "trades": 8.0,
            "volatility": 0.18962269776672208,
            "spread_pct": 0.012931310415466373,
            "spread_ticks": 2.3333333333333335,
            "amihud": 4.738258595201016e-07,
            "turnover_ratio": 8.986992620925533e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 37.634408602150536,
            "rank_pca": 349,
            "adv": 3850.0,
            "trades": 1.0,
            "volatility": 0.33632406136110343,
            "spread_pct": 0.054257724189902067,
            "spread_ticks": 4.0,
            "amihud": 3.438232394432282e-07,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 45.16129032258064,
            "rank_pca": 307,
            "adv": 7417.5,
            "trades": 4.0,
            "volatility": 0.3619239217100723,
            "spread_pct": 0.031890660592255156,
            "spread_ticks": 1.5,
            "amihud": 1.592450829504778e-06,
            "turnover_ratio": 0.00010685251033403148,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.942652329749104,
            "rank_pca": 535,
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
            "score_pca": 3.046594982078853,
            "rank_pca": 542,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.20784609690826467,
            "spread_pct": 0.4331210191082802,
            "spread_ticks": 18.0,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 75.98566308243727,
            "rank_pca": 135,
            "adv": 280240.0,
            "trades": 151.0,
            "volatility": 0.5287213047660204,
            "spread_pct": 0.01241723480755252,
            "spread_ticks": 1.4317460317460318,
            "amihud": 8.798246150573749e-08,
            "turnover_ratio": 0.003492428291816107,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 75.44802867383513,
            "rank_pca": 138,
            "adv": 259646.4,
            "trades": 165.0,
            "volatility": 1.107716042637687,
            "spread_pct": 0.022428884026258217,
            "spread_ticks": 1.226792009400705,
            "amihud": 1.1563432504105707e-07,
            "turnover_ratio": 0.021941241064652364,
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
              "mean": 0.627493133920931,
              "median": 0.4307721298992465,
              "min": 0.0,
              "max": 7.784600182411427,
              "p5": 0.070483863475354,
              "p95": 1.7340456068698364,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3774587.956380049,
              "median": 14171.25,
              "min": 0.0,
              "max": 369342000.0,
              "p5": 0.0,
              "p95": 15402791.549999967,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09799881375332058,
              "median": 0.027429934406678614,
              "min": 0.0002742695631217783,
              "max": 1.3868092691622103,
              "p5": 0.003768504163455663,
              "p95": 0.47917040907977393,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010589261474447062,
              "median": 0.0003281420996411105,
              "min": 0.0,
              "max": 4.482235844703711,
              "p5": 0.0,
              "p95": 0.01114930661718843,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.358462051476102e-05,
              "median": 1.1059626296268936e-07,
              "min": 0.0,
              "max": 0.0059715821812596145,
              "p5": 0.0,
              "p95": 5.3907365415301896e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 508.39426523297493,
              "median": 7.0,
              "min": 0.0,
              "max": 14972.0,
              "p5": 0.0,
              "p95": 2789.0999999999985,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34736921851114394,
              "median": 0.2835305916618872,
              "min": 0.0,
              "max": 0.793666035159647,
              "p5": 0.06636794421835274,
              "p95": 0.7464747574810053,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2808210.8125,
              "median": 9443.75,
              "min": 0.0,
              "max": 21035802.0,
              "p5": 0.0,
              "p95": 14023698.999999989,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15466065523832612,
              "median": 0.028850016734886928,
              "min": 0.001341752277795996,
              "max": 0.6666666666666666,
              "p5": 0.004815496503120704,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0039198800652833566,
              "median": 0.00014242162840435557,
              "min": 0.0,
              "max": 0.015527573142808056,
              "p5": 0.0,
              "p95": 0.014506199549452417,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023616421001004925,
              "median": 2.110875708275199e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.371767980752788e-10,
              "p95": 0.0012269724521299448,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 642.375,
              "median": 6.0,
              "min": 0.0,
              "max": 4610.0,
              "p5": 0.0,
              "p95": 3140.699999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 195480.7375,
              "median": 9443.75,
              "min": 0.0,
              "max": 1001222.0,
              "p5": 0.0,
              "p95": 748878.2999999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 92.625,
              "median": 6.0,
              "min": 0.0,
              "max": 412.0,
              "p5": 0.0,
              "p95": 325.54999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.44072752003868965,
              "median": 0.3491239915355879,
              "min": 0.0,
              "max": 1.107716042637687,
              "p5": 0.06636794421835274,
              "p95": 0.9977985400203728,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15562252944813812,
              "median": 0.02715977230925669,
              "min": 0.011266735778723733,
              "max": 0.6666666666666666,
              "p5": 0.011669410438813808,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.8490581792357514,
              "median": 1.465873015873016,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.0793772032902467,
              "p95": 13.099999999999993,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023617981912887754,
              "median": 2.2972878224214264e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.1334220037702447e-08,
              "p95": 0.0012269724521299448,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0051669944602868115,
              "median": 0.00014242162840435557,
              "min": 0.0,
              "max": 0.021941241064652364,
              "p5": 0.0,
              "p95": 0.019696457292006853,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.13636363636363624,
            "market": -0.02126660222957566,
            "sector": -0.061938397130716805,
            "peers": -0.06349456670865505,
            "vs_market": 0.1576302385932119,
            "vs_sector": 0.19830203349435305,
            "vs_peers": 0.1998582030722913
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity looks strong on the day, but this is only a snapshot, so day-to-day access can still vary.",
        "market_comparison": "Return 6.4% vs peers 0.0%."
      },
      "1w": {
        "liquidity": "Liquidity is still solid over the week, but average volume has dropped 54.0% from the 1M average, so access is weaker than the monthly picture implies.",
        "market_comparison": "The stock outperformed peers over the week, which matters because stronger returns can help keep trading interest above peer levels."
      },
      "2w": {
        "liquidity": "Liquidity appears solid over two weeks, though recent conditions are less consistent than the broader monthly view.",
        "market_comparison": "The stock held up better than peers over two weeks, which matters because relative resilience can help sustain tradability."
      },
      "30d": {
        "liquidity": "Liquidity is strong over the month, with a score of 73.7 compared with a peer median of 47.9, so the name looks accessible relative to similar stocks.",
        "market_comparison": "Return 13.6% vs peers -6.3%."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 32,
      "reporting_window_days": 32,
      "available_history_days": 32,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.3154748509570571,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "31.5%",
          "display_range": null,
          "display_text": "31.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
          "kind": "share_pct",
          "value_pct": 31.5,
          "plain_english": "Market explains about 31.5% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.4463266633635134,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "44.6%",
          "display_range": null,
          "display_text": "44.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
          "kind": "share_pct",
          "value_pct": 44.6,
          "plain_english": "Sector explains about 44.6% of price moves in the current state."
        },
        "company_share": {
          "median": 0.23819848567942956,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "23.8%",
          "display_range": null,
          "display_text": "23.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
          "kind": "share_pct",
          "value_pct": 23.8,
          "plain_english": "Company-specific explains about 23.8% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.29688677055831686,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.30",
          "display_range": null,
          "display_text": "0.30",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.30% stock move in the same direction in this state.",
          "value_num": 0.3
        },
        "beta_stock_lag": {
          "median": 0.7818473360037257,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.78",
          "display_range": null,
          "display_text": "0.78",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
          "kind": "lag_beta",
          "value_num": 0.78
        },
        "beta_sector": {
          "median": 1.2674841936954753,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.27",
          "display_range": null,
          "display_text": "1.27",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.27% stock move in the same direction in this state.",
          "value_num": 1.27
        },
        "beta_market_lag": {
          "median": 2.157811357051565,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.16",
          "display_range": null,
          "display_text": "2.16",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
          "kind": "lag_beta",
          "value_num": 2.16
        },
        "beta_sector_lag": {
          "median": -1.2054985948236592,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.21",
          "display_range": null,
          "display_text": "-1.21",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
          "kind": "lag_beta",
          "value_num": -1.21
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 32 trading days relative to the 252-day target."
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
          "period_label": "2026-03-02 to 2026-03-12",
          "n_obs": 9,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5240129271349421,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.4%",
            "display_range": null,
            "display_text": "52.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
            "kind": "share_pct",
            "value_pct": 52.4,
            "plain_english": "Market explains about 52.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5240129271349421,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.4%",
              "display_range": null,
              "display_text": "52.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 52.4,
              "plain_english": "Market explains about 52.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1215131150422941,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.2%",
              "display_range": null,
              "display_text": "12.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 12.2,
              "plain_english": "Sector explains about 12.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3544739578227638,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.4%",
              "display_range": null,
              "display_text": "35.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 35.4,
              "plain_english": "Company-specific explains about 35.4% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 3.0,
          "current_probability": 0.0,
          "n_days_effective": 15.0,
          "volatility": {
            "median": 0.03379138753496864,
            "low": 0.03379138753496864,
            "high": 0.03379138753496864
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 3.0,
          "current_probability": 1.0,
          "n_days_effective": 15.0,
          "volatility": {
            "median": 0.044625971140688746,
            "low": 0.044625971140688746,
            "high": 0.044625971140688746
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.6666666666666666,
            0.3333333333333333
          ],
          [
            0.2857142857142857,
            0.7142857142857143
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            10.0,
            5.0
          ],
          [
            4.0,
            10.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 32,
        "reporting_window_days": 32,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "0.30",
        "sector_link_display": "1.27",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.30% stock move in the same direction in this state. This is a point estimate from 32 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.27% stock move in the same direction in this state. This is a point estimate from 32 trading days.",
        "stock_persistence_display": "0.78",
        "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
        "history_limited_note": "Read is based on 32 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 44.6,
        "driver_share_display": "44.6%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 32 trading days relative to the 252-day target.",
        "history_days": 32,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.7142857142857143,
        "effective_days": 15.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 3.0 days.",
        "expected_duration_days": 3.0
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
          "pct_time": 0.5,
          "expected_duration_days": 3.0,
          "current_probability": 0.0,
          "n_days_effective": 15.0,
          "volatility": {
            "median": 0.03379138753496864,
            "low": 0.03379138753496864,
            "high": 0.03379138753496864
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 3.0,
          "current_probability": 1.0,
          "n_days_effective": 15.0,
          "volatility": {
            "median": 0.044625971140688746,
            "low": 0.044625971140688746,
            "high": 0.044625971140688746
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.6666666666666666,
          0.3333333333333333
        ],
        [
          0.2857142857142857,
          0.7142857142857143
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.6666666666666666,
            0.3333333333333333
          ],
          [
            0.2857142857142857,
            0.7142857142857143
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            10.0,
            5.0
          ],
          [
            4.0,
            10.0
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
        "text": "Liquidity score: 73.7 — Strong",
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
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Liquidity still screens well for the stock’s size, but recent volume has dropped and near-term access looks less robust than the monthly picture.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is strong, with the stock up 13.6% over 1M while peers fell 6.3% and the market fell 2.1%.",
    "perf_insight": "The return backdrop is firm, with 1M performance at +13.6% compared with peers at -6.3% and the market at -2.1%. Liquidity still looks strong for size, with a 1M score of 73.7 compared with a peer median of 47.9, but 1W average volume is 54.0% below the 1M average. Sector explains 44.6% of the tape, which means the move is being shaped meaningfully by the broader group.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector is the main driver at 44.6%, so the stock is moving meaningfully with the broader group rather than on company news alone.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 44.6% of price changes. Other influences are market 31.5%, and company-specific 23.8%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 31.5%, sector 44.6%, and company-specific 23.8%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been mostly market-driven across Jan to Mar, with some variation in the middle months."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 31.5%, sector 44.6%, and company-specific 23.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because sector-led trading can dominate the tape while recent average volume is 54.0% below the 1M average. The monthly liquidity picture is still strong for size, but day-to-day access can feel thinner.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves are leading, accounting for 44.6% of recent price action.",
      "Monthly change: the pattern has shifted from company-driven in February to more market-led in March, although history is limited."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Recent price action is being driven meaningfully by the sector, while trading activity has pulled back from the monthly average.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Mar 12, 2026 (34 trading days • 9,273 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate buy-side support looks lighter, with top-10 bid depth at 0.71x ask depth even though the spread is 1 tick. That means the stronger monthly liquidity picture is not fully reflected in the displayed book.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 16.2% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "History is limited for trade-size context, and the near-term read is better anchored on volume, depth, and spread.",
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
    "intraday_insight": "Session split is open 1.3%, continuous 96.5%, and close 1.7%. Current trading concentration score is 0.213.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Snapshot unavailable.",
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
    "exec_subtitle": "Trading access is strong for the company’s size, but recent activity is thinner and immediate buy-side depth is lighter.",
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
        "value": "73.7/100",
        "sub": "Peer median 47.9 (+25.7 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$405.9K",
        "sub": "Peer median S$9.4K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.58%",
        "sub": "1.19 ticks; peers 2.72%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity remains strong for the stock’s size, with a 1M score of 73.7 compared with a peer median of 47.9. Recent activity has dropped, with 1W average volume 54.0% below the 1M average, so near-term access looks weaker than the monthly picture. The displayed book also looks lighter on the buy side, with top-10 bid depth at 0.71x ask depth and a 1 tick spread, which can make day-to-day execution feel thinner.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.247",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.02%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.71x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.30% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-7.25% with 51.3% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-7.25% with 20.5% fill.",
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
        "value": "74",
        "suffix": "/100",
        "bar_pct": 74,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 148/558",
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
        "value": "2.58",
        "suffix": "%",
        "bar_pct": 26,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.58% • 1.19 ticks vs peers 2.72%",
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
        "value": "S$405.9K",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$9.4K",
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
        "value": "44.6",
        "suffix": "sector",
        "bar_pct": 45,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 31.5% • Company 23.8%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for the stock’s size, with a 1M score of 73.7 compared with a peer median of 47.9. That keeps the name looking accessible relative to peers.",
      "Recent trading activity has dropped sharply, with 1W average volume 54.0% below the 1M",
      "The return backdrop is strong, but the tape needs a balanced read. The stock is up 13.6% over 1M compared with peers at -6.3% and the market at -2.1%, while sector explains 44.6% of trading and top-10 bid depth is only 0.71x ask depth."
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
      "overall": "1M liquidity is strong: score 73.7 vs peer median 47.9 (+25.7",
      "strengths": [
        "1M score 73.7 vs peer median 47.9 (+25.7 pts)."
      ],
      "concerns": [
        "1W average volume down -54.0% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +25.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is 13.6%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 13.6% vs market -2.1%.",
        "vs_sector": "Better than sector: 13.6% vs sector -6.2%.",
        "vs_peers": "Better than peers: 13.6% vs peers -6.3%."
      },
      "adv": {
        "insight": "ADV is S$405.9K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$405.9K vs market S$14.2K.",
        "vs_sector": "Better than sector: S$405.9K vs sector S$9.4K.",
        "vs_peers": "Better than peers: S$405.9K vs peers S$9.4K."
      },
      "spread": {
        "insight": "Spread is 2.58%, better than sector, which keeps trading costs more competitive than comparable names.",
        "vs_market": "In line with market: 2.58% vs market 2.74%.",
        "vs_sector": "Better than sector: 2.58% vs secto%.",
        "vs_peers": "In line with peers: 2.58% vs peers 2.72%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.28%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.28% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.28% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.28% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 65.88%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 65.88% vs market 43.08%.",
        "vs_sector": "Worse than sector: 65.88% vs secto%.",
        "vs_peers": "Worse than peers: 65.88% vs peers 34.91%."
      },
      "trades": {
        "insight": "Trades is 104, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 104 vs market 7.",
        "vs_sector": "Better than sector: 104 vs sector 6.",
        "vs_peers": "Better than peers: 104 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 7.84e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.84e-08 vs market 1.11e-07.",
        "vs_sector": "Better than sector: 7.84e-08 vs sectoe-07.",
        "vs_peers": "Better than peers: 7.84e-08 vs peers 2.30e-07."
      }
    },
    "performance": {
      "overall": "Returns are strong relative to peers and the market, but the liquidity read is mixed. The stock gained 13.6% over 1M while peers fell 6.3% and the market fell 2.1%, which suggests clear outperformance. That move is supported by a 1M liquidity score of 73.7 compared with a 47.9 peer median, but recent participation has pulled back with 1W average volume down 54.0% from the 1M average, so near-term trading conditions are not fully confirming the strength of the move.",
      "conclusion": "The move looks stronger than the market and peers, with mixed liquidity confirmation, and it appears meaningfully sector-linked."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock right now, with 44.6% of recent price action tied to the sector. That matters because the name is reacting to broader group moves rather than trading mainly on company-specific news, even as its 1M return of +13.6% is stronger than peers at -6.3% and the market at -2.1%.",
      "beta": "The current read is more tied to the broader tape than to stock-specific news, and the signal is mixed rather than fully settled. Recent average volume is down 54.0% from the 1M average, so the sector-led pattern is playing out in thinner trading conditions.",
      "rolling_change": "The monthly pattern has not been stable. January was mostly market-driven on only five trading days, February turned mostly sector, and March has moved back to a more market-driven profile, so the recent shift looks real but still based on limited history."
    },
    "regime": {
      "overall": "High volatility is the key feature of the tape, and that matters because trading conditions can feel less steady even when the stock remains accessible for its size. The state has typically lasted about 3.0 days, while recent average volume is down 54.0% from the 1M average, which leaves less room for volatility to be absorbed smoothly.",
      "current": "High volatility is in place now, with sector moves still explaining a meaningful share of trading at 44.6%. That points to a market backdrop driven more by broader conditions than by a single company-specific move.",
      "transitions": "The state looks moderately persistent rather than short-lived, with a typical run length of about 3.0 days, although evidence is mixed. History is limited, so the backdrop looks changeable even if it is not purely one-day noise.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 3.0 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks mixed and currently bid-light because the spread is 1 tick but top-10 bid depth is only 0.71x ask depth. That matters because access is still visible on screen, yet buy-side support is thinner than the headline liquidity profile implies.",
      "concern": "Trade-size percentiles use available history from Jan 22, 2026 to Mar 12, 2026 (34 trading days • 9,273 trades), not a full year.",
      "peer_context": "The broader liquidity profile still screens well, with a 1M score of 73.7 compared with a peer median of 47.9, but the current book is less supportive than that ranking suggests. The recent picture is also weaker, with 1W average volume down 54.0% from 1M, and trade-size history is limited to 34 trading days, so historical size context is less settled."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Retail-like activity is present in count but much lighter in value. Retail-like trades make up 28.4% of count but only 7.1% of value, which matters because the tape is not being driven mainly by lower-value tickets.",
      "institutional_gap": "The read is not fully clean because unclear flow accounts for 18.4% of trade count. That matters because the institution-like skew is visible, but not decisive across the full tape.",
      "peer_comparison": "The mix looks institution-like in this stock, while peer comparison is available in the report tables. That matters because the relative standing may be read with some caution rather than as a clear outlier call."
    },
    "price_moving": {
      "overall": "Evidence on price-moving flow is mixed. The institution-like skew in count and value suggests larger tickets matter, but the signal is not fully clean. Ambiguous or unclear flow is 18.4% of trade count, so the read is not fully clean. Asymmetry in positive and negative price-moving trades is available in the report tables. For now, the cleaner conclusion is that the signal is mixed rather than one-sided.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low and does not appear material to the current trading picture, with a 1M average short ratio of 0.75%. That matters because the recent backdrop is better explained by strong 1M share price performance, up 13.6% while peers fell 6.3%, than by short pressure.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning has fallen sharply, with shorts covering by 92% month on month. That points away from rising short pressure as a driver of current trading conditions, although the read is mixed because recent history is limited.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.3%, continuous 96.5%, and close 1.7%. Current trading concentration score is 0.213.",
      "hhi_interpretation": "The concentration score of 0.213 suggests activity is not heavily concentrated into a narrow part of the session. That matters because liquidity looks reasonably distributed once continuous trading begins.",
      "best_times": "The continuous session is the clearest source of liquidity. With only 1.3% at the open and 1.7% at the close, the best access appears during the main body of the day.",
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
        "LVR",
        "NXR",
        "U77",
        "532",
        "KUX",
        "9MT",
        "QS9"
      ],
      "scores": [
        73.65591397849462,
        83.51254480286738,
        50.7168458781362,
        37.634408602150536,
        45.16129032258064,
        3.942652329749104,
        3.046594982078853,
        75.98566308243727,
        75.44802867383513
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
        405925.0,
        1001222.0,
        11470.0,
        3850.0,
        7417.5,
        0.0,
        0.0,
        280240.0,
        259646.4
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.6588338132206711,
        "adv": 405925.0,
        "spread_pct": 0.0258093728775187,
        "turnover_ratio": 0.002847391320363168,
        "amihud": 7.83519022118116e-08,
        "trades": 104.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.627493133920931,
          "median": 0.4307721298992465,
          "min": 0.0,
          "max": 7.784600182411427,
          "p5": 0.070483863475354,
          "p95": 1.7340456068698364,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3774587.956380049,
          "median": 14171.25,
          "min": 0.0,
          "max": 369342000.0,
          "p5": 0.0,
          "p95": 15402791.549999967,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09799881375332058,
          "median": 0.027429934406678614,
          "min": 0.0002742695631217783,
          "max": 1.3868092691622103,
          "p5": 0.003768504163455663,
          "p95": 0.47917040907977393,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.010589261474447062,
          "median": 0.0003281420996411105,
          "min": 0.0,
          "max": 4.482235844703711,
          "p5": 0.0,
          "p95": 0.01114930661718843,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.358462051476102e-05,
          "median": 1.1059626296268936e-07,
          "min": 0.0,
          "max": 0.0059715821812596145,
          "p5": 0.0,
          "p95": 5.3907365415301896e-05,
          "count": 546
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 508.39426523297493,
          "median": 7.0,
          "min": 0.0,
          "max": 14972.0,
          "p5": 0.0,
          "p95": 2789.0999999999985,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.34736921851114394,
          "median": 0.2835305916618872,
          "min": 0.0,
          "max": 0.793666035159647,
          "p5": 0.06636794421835274,
          "p95": 0.7464747574810053,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2808210.8125,
          "median": 9443.75,
          "min": 0.0,
          "max": 21035802.0,
          "p5": 0.0,
          "p95": 14023698.999999989,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15466065523832612,
          "median": 0.028850016734886928,
          "min": 0.001341752277795996,
          "max": 0.6666666666666666,
          "p5": 0.004815496503120704,
          "p95": 0.5849256900212313,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0039198800652833566,
          "median": 0.00014242162840435557,
          "min": 0.0,
          "max": 0.015527573142808056,
          "p5": 0.0,
          "p95": 0.014506199549452417,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023616421001004925,
          "median": 2.110875708275199e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 1.371767980752788e-10,
          "p95": 0.0012269724521299448,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 642.375,
          "median": 6.0,
          "min": 0.0,
          "max": 4610.0,
          "p5": 0.0,
          "p95": 3140.699999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 195480.7375,
          "median": 9443.75,
          "min": 0.0,
          "max": 1001222.0,
          "p5": 0.0,
          "p95": 748878.2999999996,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 92.625,
          "median": 6.0,
          "min": 0.0,
          "max": 412.0,
          "p5": 0.0,
          "p95": 325.54999999999984,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.44072752003868965,
          "median": 0.3491239915355879,
          "min": 0.0,
          "max": 1.107716042637687,
          "p5": 0.06636794421835274,
          "p95": 0.9977985400203728,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15562252944813812,
          "median": 0.02715977230925669,
          "min": 0.011266735778723733,
          "max": 0.6666666666666666,
          "p5": 0.011669410438813808,
          "p95": 0.5849256900212313,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.8490581792357514,
          "median": 1.465873015873016,
          "min": 1.0,
          "max": 18.0,
          "p5": 1.0793772032902467,
          "p95": 13.099999999999993,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023617981912887754,
          "median": 2.2972878224214264e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 1.1334220037702447e-08,
          "p95": 0.0012269724521299448,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0051669944602868115,
          "median": 0.00014242162840435557,
          "min": 0.0,
          "max": 0.021941241064652364,
          "p5": 0.0,
          "p95": 0.019696457292006853,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.13636363636363624,
        "market": 0.001809534891804132,
        "sector": -0.023390186396307078,
        "peers": -0.03712757830404889
      },
      {
        "horizon": "2W",
        "stock": -1.1102230246251565e-16,
        "market": -0.02196645044531098,
        "sector": -0.06295550297099661,
        "peers": -0.08142233952984945
      },
      {
        "horizon": "1M",
        "stock": 0.13636363636363624,
        "market": -0.02126660222957566,
        "sector": -0.061938397130716805,
        "peers": -0.06349456670865505
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
      "share_market": 0.3154748509570571,
      "share_sector": 0.4463266633635134,
      "share_idio": 0.23819848567942956,
      "beta_market": 0.29688677055831686,
      "beta_sector": 1.2674841936954753,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 32,
        "reporting_window_days": 32,
        "available_history_days": 32,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.3154748509570571,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "31.5%",
            "display_range": null,
            "display_text": "31.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
            "kind": "share_pct",
            "value_pct": 31.5,
            "plain_english": "Market explains about 31.5% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.4463266633635134,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.6%",
            "display_range": null,
            "display_text": "44.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
            "kind": "share_pct",
            "value_pct": 44.6,
            "plain_english": "Sector explains about 44.6% of price moves in the current state."
          },
          "company_share": {
            "median": 0.23819848567942956,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "23.8%",
            "display_range": null,
            "display_text": "23.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
            "kind": "share_pct",
            "value_pct": 23.8,
            "plain_english": "Company-specific explains about 23.8% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.29688677055831686,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.30",
            "display_range": null,
            "display_text": "0.30",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.30% stock move in the same direction in this state.",
            "value_num": 0.3
          },
          "beta_stock_lag": {
            "median": 0.7818473360037257,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.78",
            "display_range": null,
            "display_text": "0.78",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
            "kind": "lag_beta",
            "value_num": 0.78
          },
          "beta_sector": {
            "median": 1.2674841936954753,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.27",
            "display_range": null,
            "display_text": "1.27",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.27% stock move in the same direction in this state.",
            "value_num": 1.27
          },
          "beta_market_lag": {
            "median": 2.157811357051565,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.16",
            "display_range": null,
            "display_text": "2.16",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
            "kind": "lag_beta",
            "value_num": 2.16
          },
          "beta_sector_lag": {
            "median": -1.2054985948236592,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.21",
            "display_range": null,
            "display_text": "-1.21",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
            "kind": "lag_beta",
            "value_num": -1.21
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 32 trading days relative to the 252-day target."
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
            "period_label": "2026-03-02 to 2026-03-12",
            "n_obs": 9,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5240129271349421,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.4%",
              "display_range": null,
              "display_text": "52.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 52.4,
              "plain_english": "Market explains about 52.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5240129271349421,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.4%",
                "display_range": null,
                "display_text": "52.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 52.4,
                "plain_english": "Market explains about 52.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1215131150422941,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.2%",
                "display_range": null,
                "display_text": "12.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 12.2,
                "plain_english": "Sector explains about 12.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3544739578227638,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.4%",
                "display_range": null,
                "display_text": "35.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 35.4,
                "plain_english": "Company-specific explains about 35.4% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 3.0,
            "current_probability": 0.0,
            "n_days_effective": 15.0,
            "volatility": {
              "median": 0.03379138753496864,
              "low": 0.03379138753496864,
              "high": 0.03379138753496864
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 3.0,
            "current_probability": 1.0,
            "n_days_effective": 15.0,
            "volatility": {
              "median": 0.044625971140688746,
              "low": 0.044625971140688746,
              "high": 0.044625971140688746
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.6666666666666666,
              0.3333333333333333
            ],
            [
              0.2857142857142857,
              0.7142857142857143
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              10.0,
              5.0
            ],
            [
              4.0,
              10.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 32,
          "reporting_window_days": 32,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "0.30",
          "sector_link_display": "1.27",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.30% stock move in the same direction in this state. This is a point estimate from 32 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.27% stock move in the same direction in this state. This is a point estimate from 32 trading days.",
          "stock_persistence_display": "0.78",
          "point_estimate_note": "Point estimate only because the current state has 32 trading days.",
          "history_limited_note": "Read is based on 32 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 44.6,
          "driver_share_display": "44.6%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 32 trading days relative to the 252-day target.",
          "history_days": 32,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.7142857142857143,
          "effective_days": 15.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 3.0 days.",
          "expected_duration_days": 3.0
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
          "period_label": "2026-03-02 to 2026-03-12",
          "n_obs": 9,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven.",
          "share_market": 0.5240129271349421,
          "share_sector": 0.1215131150422941,
          "share_company": 0.3544739578227638,
          "share_market_display": "52.4%",
          "share_sector_display": "12.2%",
          "share_company_display": "35.4%",
          "dominant_share_display": "52.4%"
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
          0.5,
          0.5
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 3.0,
            "current_probability": 0.0,
            "n_days_effective": 15.0,
            "volatility": {
              "median": 0.03379138753496864,
              "low": 0.03379138753496864,
              "high": 0.03379138753496864
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 3.0,
            "current_probability": 1.0,
            "n_days_effective": 15.0,
            "volatility": {
              "median": 0.044625971140688746,
              "low": 0.044625971140688746,
              "high": 0.044625971140688746
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.6666666666666666,
            0.3333333333333333
          ],
          [
            0.2857142857142857,
            0.7142857142857143
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.245,
          "quantity": 350000.0,
          "value": 85750.0
        },
        {
          "level": 2,
          "price": 0.24,
          "quantity": 674500.0,
          "value": 161880.0
        },
        {
          "level": 3,
          "price": 0.235,
          "quantity": 103000.0,
          "value": 24205.0
        },
        {
          "level": 4,
          "price": 0.23,
          "quantity": 161100.0,
          "value": 37053.0
        },
        {
          "level": 5,
          "price": 0.225,
          "quantity": 172000.0,
          "value": 38700.0
        },
        {
          "level": 6,
          "price": 0.22,
          "quantity": 275400.0,
          "value": 60588.0
        },
        {
          "level": 7,
          "price": 0.215,
          "quantity": 313000.0,
          "value": 67295.0
        },
        {
          "level": 8,
          "price": 0.21,
          "quantity": 40000.0,
          "value": 8400.0
        },
        {
          "level": 9,
          "price": 0.2,
          "quantity": 136100.0,
          "value": 27220.0
        },
        {
          "level": 10,
          "price": 0.199,
          "quantity": 10000.0,
          "value": 1990.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.25,
          "quantity": 31600.0,
          "value": 7900.0
        },
        {
          "level": 2,
          "price": 0.255,
          "quantity": 239600.0,
          "value": 61098.0
        },
        {
          "level": 3,
          "price": 0.26,
          "quantity": 633300.0,
          "value": 164658.0
        },
        {
          "level": 4,
          "price": 0.265,
          "quantity": 509500.0,
          "value": 135017.5
        },
        {
          "level": 5,
          "price": 0.27,
          "quantity": 185000.0,
          "value": 49950.0
        },
        {
          "level": 6,
          "price": 0.275,
          "quantity": 218000.0,
          "value": 59950.00000000001
        },
        {
          "level": 7,
          "price": 0.28,
          "quantity": 341000.0,
          "value": 95480.00000000001
        },
        {
          "level": 8,
          "price": 0.285,
          "quantity": 144000.0,
          "value": 41040.0
        },
        {
          "level": 9,
          "price": 0.29,
          "quantity": 46000.0,
          "value": 13339.999999999998
        },
        {
          "level": 10,
          "price": 0.295,
          "quantity": 303000.0,
          "value": 89385.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-12 08:59:57.995000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2475,
        "spread_pct": 0.02020202020202022,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 513081.0,
        "ask_depth_notional_top10": 717818.5,
        "bid_ask_depth_ratio": 0.7148
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 50,
        "history_limited": true,
        "trade_days_used": 34,
        "n_trades_used": 9273,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-03-12",
        "window_label": "Jan 22, 2026 to Mar 12, 2026",
        "window_short_label": "Jan 22-Mar 12",
        "trade_days_label": "34 trading days",
        "trade_count_label": "9,273 trades",
        "window_detail_label": "34 trading days • 9,273 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Mar 12, 2026 (34 trading days • 9,273 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9868.8,
            "impact_pct": -0.010101,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.92,
            "pct_of_adv": 2.54
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13750.0,
            "impact_pct": -0.010101,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.68,
            "pct_of_adv": 3.54
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 108818.26,
            "impact_pct": -0.014454,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 21.21,
            "pct_of_adv": 28.05
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-12",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8117432114348421120",
            "timestamp": "2026-03-11 22:59:01.922300000",
            "local_timestamp": "2026-03-12 06:59:01",
            "posted_price": 0.3,
            "size_shares": 200000.0,
            "notional": 60000.0,
            "impact_pct": -0.010101,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 11.69,
            "price_vs_mid_pct": 21.212,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8119594029086503936",
            "timestamp": "2026-03-11 22:59:01.922300000",
            "local_timestamp": "2026-03-12 06:59:01",
            "posted_price": 0.28,
            "size_shares": 200000.0,
            "notional": 56000.0,
            "impact_pct": -0.010101,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 10.91,
            "price_vs_mid_pct": 13.131,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8116823259784643584",
            "timestamp": "2026-03-11 22:59:01.922300000",
            "local_timestamp": "2026-03-12 06:59:01",
            "posted_price": 0.265,
            "size_shares": 200000.0,
            "notional": 53000.0,
            "impact_pct": -0.010101,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 10.33,
            "price_vs_mid_pct": 7.071,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-12",
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
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 357117.5,
            "ask_depth_notional": 596250.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 346591.0,
            "ask_depth_notional": 665536.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 377108.5,
            "ask_depth_notional": 671654.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 374493.0,
            "ask_depth_notional": 692032.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 391317.0,
            "ask_depth_notional": 734939.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 380754.0,
            "ask_depth_notional": 727429.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 501978.0,
            "ask_depth_notional": 737259.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 499794.0,
            "ask_depth_notional": 869589.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 500794.0,
            "ask_depth_notional": 869589.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 489296.0,
            "ask_depth_notional": 820879.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 569760.5,
            "ask_depth_notional": 730830.5,
            "mid_price": 0.2475
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 565018.5,
            "ask_depth_notional": 773833.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 614629.0,
            "ask_depth_notional": 832640.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 513081.0,
            "ask_depth_notional": 717818.5,
            "mid_price": 0.2475
          }
        ],
        "summary": {
          "median_spread_pct": 0.020618556701030948,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 494545.0,
          "median_ask_depth_notional": 732884.75,
          "tightest_bucket": "16:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "16:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 12.9,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 101.1
        },
        {
          "ticker": "QS9",
          "pct": 314.7
        },
        {
          "ticker": "9MT",
          "pct": 336.0
        },
        {
          "ticker": "LVR",
          "pct": 8984.7
        },
        {
          "ticker": "U77",
          "pct": 12367.8
        },
        {
          "ticker": "NXR",
          "pct": 25157.2
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
          "n_trades": 175,
          "n_runs": 73,
          "n_trade_days": 1,
          "first_trade_date": "2026-03-12",
          "last_trade_date": "2026-03-12",
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
            "retail_pct": 0.1657142857142857,
            "mixed_pct": 0.21714285714285714,
            "instit_pct": 0.3485714285714286,
            "ambiguous_pct": 0.26857142857142857,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.26857142857142857,
            "retail_qty_pct": 0.05954800422729859,
            "mixed_qty_pct": 0.30404032192504676,
            "instit_qty_pct": 0.43175351597431105,
            "ambiguous_qty_pct": 0.20465815787334363,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20465815787334363,
            "retail_notional_pct": 0.05947820436526026,
            "mixed_notional_pct": 0.30492587809960164,
            "instit_notional_pct": 0.43174867346414414,
            "ambiguous_notional_pct": 0.20384724407099392,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20384724407099392
          },
          "run_composition": {
            "retail_pct": 0.3835616438356164,
            "mixed_pct": 0.1643835616438356,
            "instit_pct": 0.2054794520547945,
            "ambiguous_pct": 0.2465753424657534,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2465753424657534,
            "retail_notional_pct": 0.05947820436526026,
            "mixed_notional_pct": 0.30492587809960164,
            "instit_notional_pct": 0.43174867346414414,
            "unclear_notional_pct": 0.20384724407099392
          },
          "counts": {
            "trades": {
              "retail": 29,
              "mixed": 38,
              "institutional": 61,
              "ambiguous": 47,
              "unobservable": 0,
              "unclear": 47
            },
            "runs": {
              "retail": 28,
              "mixed": 12,
              "institutional": 15,
              "ambiguous": 18,
              "unobservable": 0,
              "unclear": 18
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.2876712328767123,
            "low": 0.3013698630136986,
            "na": 0.410958904109589
          },
          "confidence_counts": {
            "high": 0,
            "medium": 21,
            "low": 22,
            "na": 30
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.13142857142857142,
            "low": 0.38285714285714284,
            "na": 0.4857142857142857
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 23,
            "low": 67,
            "na": 85
          },
          "observability": {
            "avg_feature_coverage": 0.8787671232876713,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.2465753424657534,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.3835616438356164,
          "dominance_gap": 0.136986301369863,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 93,
              "SINGLE_FILL": 82
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 118,
              "MOMENTUM_REACTIVE": 29,
              "PERSISTENT_POSITIVE_IMPACT": 28
            },
            "d3_urgency": {
              "IMMEDIATE": 71,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "NA": 30,
              "LOW": 22,
              "MEDIUM": 21
            }
          },
          "trade_size": {
            "avg": 3447.217142857143,
            "median": 1296.0
          },
          "run_size": {
            "avg": 8263.876712328767,
            "median": 3120.0,
            "avg_length": 1.5068493150684932
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-176",
              "timestamp": "2026-03-12T08:56:11.981700",
              "price": 0.25,
              "size": 16700.0,
              "notional": 4175.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-175",
              "timestamp": "2026-03-12T08:56:11.981700",
              "price": 0.25,
              "size": 37300.0,
              "notional": 9325.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-174",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-173",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-172",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 4200.0,
              "notional": 1050.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-171",
              "timestamp": "2026-03-12T08:55:31.068400",
              "price": 0.25,
              "size": 3800.0,
              "notional": 950.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3690,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-170",
              "timestamp": "2026-03-12T08:55:31.068400",
              "price": 0.25,
              "size": 6200.0,
              "notional": 1550.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3690,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-169",
              "timestamp": "2026-03-12T08:54:51.219600",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3689,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-168",
              "timestamp": "2026-03-12T08:54:49.561300",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3689,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-167",
              "timestamp": "2026-03-12T08:45:04.034900",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3688,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-166",
              "timestamp": "2026-03-12T08:44:27.313300",
              "price": 0.25,
              "size": 500.0,
              "notional": 125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-165",
              "timestamp": "2026-03-12T08:44:27.253000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-164",
              "timestamp": "2026-03-12T08:44:27.222900",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-163",
              "timestamp": "2026-03-12T08:44:27.132300",
              "price": 0.25,
              "size": 2100.0,
              "notional": 525.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-162",
              "timestamp": "2026-03-12T08:44:27.132300",
              "price": 0.25,
              "size": 25900.0,
              "notional": 6475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-161",
              "timestamp": "2026-03-12T08:44:27.102100",
              "price": 0.25,
              "size": 3600.0,
              "notional": 900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-160",
              "timestamp": "2026-03-12T08:44:27.102000",
              "price": 0.25,
              "size": 21400.0,
              "notional": 5350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-159",
              "timestamp": "2026-03-12T08:44:27.102000",
              "price": 0.25,
              "size": 128600.0,
              "notional": 32150.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-158",
              "timestamp": "2026-03-12T08:43:05.935800",
              "price": 0.25,
              "size": 400.0,
              "notional": 100.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3686,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-157",
              "timestamp": "2026-03-12T08:42:58.061300",
              "price": 0.25,
              "size": 13000.0,
              "notional": 3250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3685,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-156",
              "timestamp": "2026-03-12T08:37:24.793200",
              "price": 0.25,
              "size": 1500.0,
              "notional": 375.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3684,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-155",
              "timestamp": "2026-03-12T08:37:16.109200",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3683,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-154",
              "timestamp": "2026-03-12T08:15:47.620800",
              "price": 0.25,
              "size": 1400.0,
              "notional": 350.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3682,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-153",
              "timestamp": "2026-03-12T08:15:40.445200",
              "price": 0.255,
              "size": 15000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3681,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-152",
              "timestamp": "2026-03-12T08:07:07.938000",
              "price": 0.25,
              "size": 5100.0,
              "notional": 1275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3680,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-151",
              "timestamp": "2026-03-12T08:07:05.586300",
              "price": 0.25,
              "size": 20000.0,
              "notional": 5000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3680,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-150",
              "timestamp": "2026-03-12T08:06:56.512600",
              "price": 0.25,
              "size": 300.0,
              "notional": 75.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3679,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-149",
              "timestamp": "2026-03-12T08:06:55.789700",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3679,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-148",
              "timestamp": "2026-03-12T08:06:48.105400",
              "price": 0.25,
              "size": 400.0,
              "notional": 100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3678,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-147",
              "timestamp": "2026-03-12T08:06:44.941200",
              "price": 0.25,
              "size": 600.0,
              "notional": 150.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3678,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.1657142857142857,
              "mixed_pct": 0.21714285714285714,
              "instit_pct": 0.3485714285714286,
              "ambiguous_pct": 0.26857142857142857,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.26857142857142857,
              "retail_qty_pct": 0.05954800422729859,
              "mixed_qty_pct": 0.30404032192504676,
              "instit_qty_pct": 0.43175351597431105,
              "ambiguous_qty_pct": 0.20465815787334363,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.20465815787334363,
              "retail_notional_pct": 0.05947820436526026,
              "mixed_notional_pct": 0.30492587809960164,
              "instit_notional_pct": 0.43174867346414414,
              "ambiguous_notional_pct": 0.20384724407099392,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.20384724407099392,
              "run_retail_pct": 0.3835616438356164,
              "run_mixed_pct": 0.1643835616438356,
              "run_instit_pct": 0.2054794520547945,
              "run_unclear_pct": 0.2465753424657534,
              "avg_trade_size": 3447.217142857143,
              "avg_run_notional": 8263.876712328767,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.2876712328767123,
              "low_confidence_pct": 0.3013698630136986,
              "na_confidence_pct": 0.410958904109589,
              "avg_feature_coverage": 0.8787671232876713,
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
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.75,
              "ambiguous_pct": 0.25,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.9727626459143969,
              "ambiguous_qty_pct": 0.027237354085603113,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.027237354085603113,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.972834067547724,
              "ambiguous_notional_pct": 0.027165932452276064,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.027165932452276064,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.6666666666666666,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 2383.5,
              "avg_run_notional": 3178.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6666666666666666,
              "na_confidence_pct": 0.3333333333333333,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.525,
              "mixed_pct": 0.17083333333333334,
              "instit_pct": 0.21666666666666667,
              "ambiguous_pct": 0.0875,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0875,
              "retail_qty_pct": 0.029125481023164566,
              "mixed_qty_pct": 0.14711134585879926,
              "instit_qty_pct": 0.5021253049623985,
              "ambiguous_qty_pct": 0.3216378681556377,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3216378681556377,
              "retail_notional_pct": 0.02972525361135717,
              "mixed_notional_pct": 0.14844089678202682,
              "instit_notional_pct": 0.4988318452515186,
              "ambiguous_notional_pct": 0.3230020043550974,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3230020043550974,
              "run_retail_pct": 0.7368421052631579,
              "run_mixed_pct": 0.11695906432748537,
              "run_instit_pct": 0.08187134502923976,
              "run_unclear_pct": 0.06432748538011696,
              "avg_trade_size": 923.8216666666667,
              "avg_run_notional": 1296.591812865497,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.543859649122807,
              "medium_confidence_pct": 0.27485380116959063,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.18128654970760233,
              "avg_feature_coverage": 0.8570175438596489,
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
              "retail_pct": 0.46808510638297873,
              "mixed_pct": 0.06382978723404255,
              "instit_pct": 0.2978723404255319,
              "ambiguous_pct": 0.1702127659574468,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1702127659574468,
              "retail_qty_pct": 0.12476370510396975,
              "mixed_qty_pct": 0.10680529300567108,
              "instit_qty_pct": 0.387523629489603,
              "ambiguous_qty_pct": 0.3809073724007561,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3809073724007561,
              "retail_notional_pct": 0.1254630974865611,
              "mixed_notional_pct": 0.10671218945227372,
              "instit_notional_pct": 0.3872130611651896,
              "ambiguous_notional_pct": 0.38061165189597557,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.38061165189597557,
              "run_retail_pct": 0.7333333333333333,
              "run_mixed_pct": 0.06666666666666667,
              "run_instit_pct": 0.11666666666666667,
              "run_unclear_pct": 0.08333333333333333,
              "avg_trade_size": 1171.5744680851064,
              "avg_run_notional": 1835.4666666666667,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.45,
              "medium_confidence_pct": 0.4,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.15,
              "avg_feature_coverage": 0.85,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.20238095238095238,
              "mixed_pct": 0.047619047619047616,
              "instit_pct": 0.2857142857142857,
              "ambiguous_pct": 0.4523809523809524,
              "unobservable_pct": 0.011904761904761904,
              "unclear_pct": 0.4642857142857143,
              "retail_qty_pct": 0.0630120952009364,
              "mixed_qty_pct": 0.03296917674600078,
              "instit_qty_pct": 0.37690206788919234,
              "ambiguous_qty_pct": 0.5243854857588763,
              "unobservable_qty_pct": 0.0027311744049941474,
              "unclear_qty_pct": 0.5271166601638705,
              "retail_notional_pct": 0.06344220378046098,
              "mixed_notional_pct": 0.032919787775334226,
              "instit_notional_pct": 0.3768261783217368,
              "ambiguous_notional_pct": 0.5240592921640816,
              "unobservable_notional_pct": 0.002752537958386362,
              "unclear_notional_pct": 0.526811830122468,
              "run_retail_pct": 0.3333333333333333,
              "run_mixed_pct": 0.04597701149425287,
              "run_instit_pct": 0.1724137931034483,
              "run_unclear_pct": 0.4482758620689655,
              "avg_trade_size": 2312.8005952380954,
              "avg_run_notional": 4466.097701149425,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.26436781609195403,
              "low_confidence_pct": 0.2413793103448276,
              "na_confidence_pct": 0.4942528735632184,
              "avg_feature_coverage": 0.8212643678160917,
              "observable_run_pct": 0.9885057471264368,
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
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.8,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.8,
              "retail_qty_pct": 0.2,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.8,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.8,
              "retail_notional_pct": 0.2,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.8,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.8,
              "run_retail_pct": 0.2,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.8,
              "avg_trade_size": 1640.0,
              "avg_run_notional": 1640.0,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.2,
              "na_confidence_pct": 0.8,
              "avg_feature_coverage": 0.8200000000000001,
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
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 1.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 1.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 1.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 1.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 1.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 1.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 1.0,
              "avg_trade_size": 2863.3333333333335,
              "avg_run_notional": 2863.3333333333335,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.75,
              "observable_run_pct": 1.0,
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
          "n_trades": 493,
          "n_runs": 261,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-06",
          "last_trade_date": "2026-03-12",
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
            "retail_pct": 0.29411764705882354,
            "mixed_pct": 0.18052738336713997,
            "instit_pct": 0.27586206896551724,
            "ambiguous_pct": 0.24949290060851928,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24949290060851928,
            "retail_qty_pct": 0.06346673005416235,
            "mixed_qty_pct": 0.23288113146679798,
            "instit_qty_pct": 0.3708508073416303,
            "ambiguous_qty_pct": 0.3328013311374094,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3328013311374094,
            "retail_notional_pct": 0.06305436033201452,
            "mixed_notional_pct": 0.23553123202272913,
            "instit_notional_pct": 0.37562920448008263,
            "ambiguous_notional_pct": 0.3257852031651737,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3257852031651737
          },
          "run_composition": {
            "retail_pct": 0.5287356321839081,
            "mixed_pct": 0.16091954022988506,
            "instit_pct": 0.1417624521072797,
            "ambiguous_pct": 0.1685823754789272,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1685823754789272,
            "retail_notional_pct": 0.06305436033201452,
            "mixed_notional_pct": 0.23553123202272913,
            "instit_notional_pct": 0.37562920448008263,
            "unclear_notional_pct": 0.3257852031651737
          },
          "counts": {
            "trades": {
              "retail": 145,
              "mixed": 89,
              "institutional": 136,
              "ambiguous": 123,
              "unobservable": 0,
              "unclear": 123
            },
            "runs": {
              "retail": 138,
              "mixed": 42,
              "institutional": 37,
              "ambiguous": 44,
              "unobservable": 0,
              "unclear": 44
            }
          },
          "confidence": {
            "high": 0.10344827586206896,
            "medium": 0.31800766283524906,
            "low": 0.24904214559386972,
            "na": 0.32950191570881227
          },
          "confidence_counts": {
            "high": 27,
            "medium": 83,
            "low": 65,
            "na": 86
          },
          "trade_confidence": {
            "high": 0.05476673427991886,
            "medium": 0.21703853955375255,
            "low": 0.29817444219066935,
            "na": 0.4300202839756592
          },
          "trade_confidence_counts": {
            "high": 27,
            "medium": 107,
            "low": 147,
            "na": 212
          },
          "observability": {
            "avg_feature_coverage": 0.8586206896551722,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1685823754789272,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5287356321839081,
          "dominance_gap": 0.3601532567049809,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 250,
              "SINGLE_FILL": 243
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 370,
              "MOMENTUM_REACTIVE": 62,
              "PERSISTENT_POSITIVE_IMPACT": 61
            },
            "d3_urgency": {
              "IMMEDIATE": 259,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "NA": 86,
              "MEDIUM": 83,
              "LOW": 65,
              "HIGH": 27
            }
          },
          "trade_size": {
            "avg": 2764.3651115618663,
            "median": 1075.0
          },
          "run_size": {
            "avg": 5221.578544061303,
            "median": 1100.0,
            "avg_length": 1.2260536398467432
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-176",
              "timestamp": "2026-03-12T08:56:11.981700",
              "price": 0.25,
              "size": 16700.0,
              "notional": 4175.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-175",
              "timestamp": "2026-03-12T08:56:11.981700",
              "price": 0.25,
              "size": 37300.0,
              "notional": 9325.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-174",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-173",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-172",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 4200.0,
              "notional": 1050.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-171",
              "timestamp": "2026-03-12T08:55:31.068400",
              "price": 0.25,
              "size": 3800.0,
              "notional": 950.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3690,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-170",
              "timestamp": "2026-03-12T08:55:31.068400",
              "price": 0.25,
              "size": 6200.0,
              "notional": 1550.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3690,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-169",
              "timestamp": "2026-03-12T08:54:51.219600",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3689,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-168",
              "timestamp": "2026-03-12T08:54:49.561300",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3689,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-167",
              "timestamp": "2026-03-12T08:45:04.034900",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3688,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-166",
              "timestamp": "2026-03-12T08:44:27.313300",
              "price": 0.25,
              "size": 500.0,
              "notional": 125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-165",
              "timestamp": "2026-03-12T08:44:27.253000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-164",
              "timestamp": "2026-03-12T08:44:27.222900",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-163",
              "timestamp": "2026-03-12T08:44:27.132300",
              "price": 0.25,
              "size": 2100.0,
              "notional": 525.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-162",
              "timestamp": "2026-03-12T08:44:27.132300",
              "price": 0.25,
              "size": 25900.0,
              "notional": 6475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-161",
              "timestamp": "2026-03-12T08:44:27.102100",
              "price": 0.25,
              "size": 3600.0,
              "notional": 900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-160",
              "timestamp": "2026-03-12T08:44:27.102000",
              "price": 0.25,
              "size": 21400.0,
              "notional": 5350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-159",
              "timestamp": "2026-03-12T08:44:27.102000",
              "price": 0.25,
              "size": 128600.0,
              "notional": 32150.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-158",
              "timestamp": "2026-03-12T08:43:05.935800",
              "price": 0.25,
              "size": 400.0,
              "notional": 100.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3686,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-157",
              "timestamp": "2026-03-12T08:42:58.061300",
              "price": 0.25,
              "size": 13000.0,
              "notional": 3250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3685,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-156",
              "timestamp": "2026-03-12T08:37:24.793200",
              "price": 0.25,
              "size": 1500.0,
              "notional": 375.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3684,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-155",
              "timestamp": "2026-03-12T08:37:16.109200",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3683,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-154",
              "timestamp": "2026-03-12T08:15:47.620800",
              "price": 0.25,
              "size": 1400.0,
              "notional": 350.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3682,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-153",
              "timestamp": "2026-03-12T08:15:40.445200",
              "price": 0.255,
              "size": 15000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3681,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-152",
              "timestamp": "2026-03-12T08:07:07.938000",
              "price": 0.25,
              "size": 5100.0,
              "notional": 1275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3680,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-151",
              "timestamp": "2026-03-12T08:07:05.586300",
              "price": 0.25,
              "size": 20000.0,
              "notional": 5000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3680,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-150",
              "timestamp": "2026-03-12T08:06:56.512600",
              "price": 0.25,
              "size": 300.0,
              "notional": 75.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3679,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-149",
              "timestamp": "2026-03-12T08:06:55.789700",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3679,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-148",
              "timestamp": "2026-03-12T08:06:48.105400",
              "price": 0.25,
              "size": 400.0,
              "notional": 100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3678,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-147",
              "timestamp": "2026-03-12T08:06:44.941200",
              "price": 0.25,
              "size": 600.0,
              "notional": 150.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3678,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.29411764705882354,
              "mixed_pct": 0.18052738336713997,
              "instit_pct": 0.27586206896551724,
              "ambiguous_pct": 0.24949290060851928,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.24949290060851928,
              "retail_qty_pct": 0.06346673005416235,
              "mixed_qty_pct": 0.23288113146679798,
              "instit_qty_pct": 0.3708508073416303,
              "ambiguous_qty_pct": 0.3328013311374094,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3328013311374094,
              "retail_notional_pct": 0.06305436033201452,
              "mixed_notional_pct": 0.23553123202272913,
              "instit_notional_pct": 0.37562920448008263,
              "ambiguous_notional_pct": 0.3257852031651737,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3257852031651737,
              "run_retail_pct": 0.5287356321839081,
              "run_mixed_pct": 0.16091954022988506,
              "run_instit_pct": 0.1417624521072797,
              "run_unclear_pct": 0.1685823754789272,
              "avg_trade_size": 2764.3651115618663,
              "avg_run_notional": 5221.578544061303,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.10344827586206896,
              "medium_confidence_pct": 0.31800766283524906,
              "low_confidence_pct": 0.24904214559386972,
              "na_confidence_pct": 0.32950191570881227,
              "avg_feature_coverage": 0.8586206896551722,
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
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.6923076923076923,
              "ambiguous_pct": 0.3076923076923077,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3076923076923077,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8589306029579067,
              "ambiguous_qty_pct": 0.1410693970420933,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1410693970420933,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.859655562693096,
              "ambiguous_notional_pct": 0.14034443730690405,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.14034443730690405,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5555555555555556,
              "run_unclear_pct": 0.4444444444444444,
              "avg_trade_size": 2514.6923076923076,
              "avg_run_notional": 3632.3333333333335,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5555555555555556,
              "na_confidence_pct": 0.4444444444444444,
              "avg_feature_coverage": 0.8500000000000001,
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
              "retail_pct": 0.4066305818673884,
              "mixed_pct": 0.2361299052774019,
              "instit_pct": 0.2408660351826793,
              "ambiguous_pct": 0.10960757780784844,
              "unobservable_pct": 0.006765899864682003,
              "unclear_pct": 0.11637347767253044,
              "retail_qty_pct": 0.07967686604326897,
              "mixed_qty_pct": 0.19731090577103969,
              "instit_qty_pct": 0.5242073811763404,
              "ambiguous_qty_pct": 0.17899629281248272,
              "unobservable_qty_pct": 0.019808554196868257,
              "unclear_qty_pct": 0.19880484700935097,
              "retail_notional_pct": 0.0799969149305394,
              "mixed_notional_pct": 0.19826943560515897,
              "instit_notional_pct": 0.5228764549360446,
              "ambiguous_notional_pct": 0.1792962584224391,
              "unobservable_notional_pct": 0.019560936105817883,
              "unclear_notional_pct": 0.19885719452825698,
              "run_retail_pct": 0.7017543859649122,
              "run_mixed_pct": 0.17076023391812867,
              "run_instit_pct": 0.07485380116959064,
              "run_unclear_pct": 0.052631578947368425,
              "avg_trade_size": 1272.004397834912,
              "avg_run_notional": 2198.8567251461986,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.39883040935672515,
              "medium_confidence_pct": 0.3321637426900585,
              "low_confidence_pct": 0.0456140350877193,
              "na_confidence_pct": 0.22339181286549709,
              "avg_feature_coverage": 0.8737426900584793,
              "observable_run_pct": 0.9988304093567252,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3320659062103929,
              "mixed_pct": 0.10392902408111533,
              "instit_pct": 0.3257287705956908,
              "ambiguous_pct": 0.23827629911280102,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.23827629911280102,
              "retail_qty_pct": 0.08160159164386968,
              "mixed_qty_pct": 0.08290806598690209,
              "instit_qty_pct": 0.5133582027687972,
              "ambiguous_qty_pct": 0.3221321396004311,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3221321396004311,
              "retail_notional_pct": 0.0816431924882629,
              "mixed_notional_pct": 0.08297748273077958,
              "instit_notional_pct": 0.5128666008791603,
              "ambiguous_notional_pct": 0.3225127239017972,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3225127239017972,
              "run_retail_pct": 0.5613636363636364,
              "run_mixed_pct": 0.09318181818181819,
              "run_instit_pct": 0.13863636363636364,
              "run_unclear_pct": 0.20681818181818182,
              "avg_trade_size": 2119.2015209125475,
              "avg_run_notional": 3800.1136363636365,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.2318181818181818,
              "medium_confidence_pct": 0.32272727272727275,
              "low_confidence_pct": 0.14545454545454545,
              "na_confidence_pct": 0.3,
              "avg_feature_coverage": 0.8404545454545453,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.27982954545454547,
              "mixed_pct": 0.07528409090909091,
              "instit_pct": 0.3053977272727273,
              "ambiguous_pct": 0.3210227272727273,
              "unobservable_pct": 0.018465909090909092,
              "unclear_pct": 0.3394886363636364,
              "retail_qty_pct": 0.06292631967062004,
              "mixed_qty_pct": 0.06581453942112701,
              "instit_qty_pct": 0.45252872856879495,
              "ambiguous_qty_pct": 0.3821053278436674,
              "unobservable_qty_pct": 0.03662508449579057,
              "unclear_qty_pct": 0.41873041233945796,
              "retail_notional_pct": 0.06351303997306576,
              "mixed_notional_pct": 0.06721649767875425,
              "instit_notional_pct": 0.45372357440545036,
              "ambiguous_notional_pct": 0.3781527296491144,
              "unobservable_notional_pct": 0.037394158293615254,
              "unclear_notional_pct": 0.41554688794272965,
              "run_retail_pct": 0.4640198511166253,
              "run_mixed_pct": 0.06699751861042183,
              "run_instit_pct": 0.1588089330024814,
              "run_unclear_pct": 0.3101736972704715,
              "avg_trade_size": 1860.5923295454545,
              "avg_run_notional": 3250.2655086848636,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3349875930521092,
              "low_confidence_pct": 0.2878411910669975,
              "na_confidence_pct": 0.3771712158808933,
              "avg_feature_coverage": 0.8339950372208436,
              "observable_run_pct": 0.9925558312655087,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7793427230046949,
              "mixed_pct": 0.11267605633802817,
              "instit_pct": 0.051643192488262914,
              "ambiguous_pct": 0.056338028169014086,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.056338028169014086,
              "retail_qty_pct": 0.09783089862771138,
              "mixed_qty_pct": 0.04161133244798584,
              "instit_qty_pct": 0.3749446657813192,
              "ambiguous_qty_pct": 0.4856131031429836,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4856131031429836,
              "retail_notional_pct": 0.09933063835847547,
              "mixed_notional_pct": 0.0422212727730853,
              "instit_notional_pct": 0.3722570962193666,
              "ambiguous_notional_pct": 0.4861909926490726,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4861909926490726,
              "run_retail_pct": 0.8177339901477833,
              "run_mixed_pct": 0.10837438423645321,
              "run_instit_pct": 0.019704433497536946,
              "run_unclear_pct": 0.054187192118226604,
              "avg_trade_size": 214.27464788732394,
              "avg_run_notional": 224.83004926108376,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.8177339901477833,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.019704433497536946,
              "na_confidence_pct": 0.1625615763546798,
              "avg_feature_coverage": 0.8485221674876846,
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
              "retail_pct": 0.15625,
              "mixed_pct": 0.03125,
              "instit_pct": 0.25,
              "ambiguous_pct": 0.5625,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5625,
              "retail_qty_pct": 0.0768277571251549,
              "mixed_qty_pct": 0.024783147459727387,
              "instit_qty_pct": 0.3469640644361834,
              "ambiguous_qty_pct": 0.5514250309789344,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5514250309789344,
              "retail_notional_pct": 0.07639341560086013,
              "mixed_notional_pct": 0.024875062749593533,
              "instit_notional_pct": 0.3469097230026898,
              "ambiguous_notional_pct": 0.5518217986468565,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5518217986468565,
              "run_retail_pct": 0.20833333333333334,
              "run_mixed_pct": 0.041666666666666664,
              "run_instit_pct": 0.20833333333333334,
              "run_unclear_pct": 0.5416666666666666,
              "avg_trade_size": 2085.421875,
              "avg_run_notional": 2780.5625,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4166666666666667,
              "na_confidence_pct": 0.5833333333333334,
              "avg_feature_coverage": 0.8312500000000002,
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
              "avg_trade_size": 240.00000000000003,
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
        "2w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 994,
          "n_runs": 504,
          "n_trade_days": 10,
          "first_trade_date": "2026-02-27",
          "last_trade_date": "2026-03-12",
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
            "retail_pct": 0.2796780684104628,
            "mixed_pct": 0.15995975855130784,
            "instit_pct": 0.3762575452716298,
            "ambiguous_pct": 0.1841046277665996,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1841046277665996,
            "retail_qty_pct": 0.06633399422278657,
            "mixed_qty_pct": 0.19081883460684504,
            "instit_qty_pct": 0.5324095732436306,
            "ambiguous_qty_pct": 0.2104375979267378,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2104375979267378,
            "retail_notional_pct": 0.06591405264378847,
            "mixed_notional_pct": 0.19189067658994347,
            "instit_notional_pct": 0.536425936106724,
            "ambiguous_notional_pct": 0.2057693346595441,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2057693346595441
          },
          "run_composition": {
            "retail_pct": 0.5257936507936508,
            "mixed_pct": 0.1488095238095238,
            "instit_pct": 0.17857142857142858,
            "ambiguous_pct": 0.14682539682539683,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14682539682539683,
            "retail_notional_pct": 0.06591405264378847,
            "mixed_notional_pct": 0.19189067658994347,
            "instit_notional_pct": 0.536425936106724,
            "unclear_notional_pct": 0.2057693346595441
          },
          "counts": {
            "trades": {
              "retail": 278,
              "mixed": 159,
              "institutional": 374,
              "ambiguous": 183,
              "unobservable": 0,
              "unclear": 183
            },
            "runs": {
              "retail": 265,
              "mixed": 75,
              "institutional": 90,
              "ambiguous": 74,
              "unobservable": 0,
              "unclear": 74
            }
          },
          "confidence": {
            "high": 0.08928571428571429,
            "medium": 0.33134920634920634,
            "low": 0.2837301587301587,
            "na": 0.29563492063492064
          },
          "confidence_counts": {
            "high": 45,
            "medium": 167,
            "low": 143,
            "na": 149
          },
          "trade_confidence": {
            "high": 0.05130784708249497,
            "medium": 0.29577464788732394,
            "low": 0.30885311871227367,
            "na": 0.3440643863179074
          },
          "trade_confidence_counts": {
            "high": 51,
            "medium": 294,
            "low": 307,
            "na": 342
          },
          "observability": {
            "avg_feature_coverage": 0.8589285714285713,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.14682539682539683,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5257936507936508,
          "dominance_gap": 0.3472222222222222,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 539,
              "SINGLE_FILL": 445,
              "WALK_BOOK": 10
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 740,
              "PERSISTENT_POSITIVE_IMPACT": 174,
              "MOMENTUM_REACTIVE": 79,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 502,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "MEDIUM": 167,
              "NA": 149,
              "LOW": 143,
              "HIGH": 45
            }
          },
          "trade_size": {
            "avg": 3165.804828973843,
            "median": 1259.25
          },
          "run_size": {
            "avg": 6243.670634920635,
            "median": 1839.5,
            "avg_length": 1.2242063492063493
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-176",
              "timestamp": "2026-03-12T08:56:11.981700",
              "price": 0.25,
              "size": 16700.0,
              "notional": 4175.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-175",
              "timestamp": "2026-03-12T08:56:11.981700",
              "price": 0.25,
              "size": 37300.0,
              "notional": 9325.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-174",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-173",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-172",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 4200.0,
              "notional": 1050.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-171",
              "timestamp": "2026-03-12T08:55:31.068400",
              "price": 0.25,
              "size": 3800.0,
              "notional": 950.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3690,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-170",
              "timestamp": "2026-03-12T08:55:31.068400",
              "price": 0.25,
              "size": 6200.0,
              "notional": 1550.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3690,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-169",
              "timestamp": "2026-03-12T08:54:51.219600",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3689,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-168",
              "timestamp": "2026-03-12T08:54:49.561300",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3689,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-167",
              "timestamp": "2026-03-12T08:45:04.034900",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3688,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-166",
              "timestamp": "2026-03-12T08:44:27.313300",
              "price": 0.25,
              "size": 500.0,
              "notional": 125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-165",
              "timestamp": "2026-03-12T08:44:27.253000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-164",
              "timestamp": "2026-03-12T08:44:27.222900",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-163",
              "timestamp": "2026-03-12T08:44:27.132300",
              "price": 0.25,
              "size": 2100.0,
              "notional": 525.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-162",
              "timestamp": "2026-03-12T08:44:27.132300",
              "price": 0.25,
              "size": 25900.0,
              "notional": 6475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-161",
              "timestamp": "2026-03-12T08:44:27.102100",
              "price": 0.25,
              "size": 3600.0,
              "notional": 900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-160",
              "timestamp": "2026-03-12T08:44:27.102000",
              "price": 0.25,
              "size": 21400.0,
              "notional": 5350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-159",
              "timestamp": "2026-03-12T08:44:27.102000",
              "price": 0.25,
              "size": 128600.0,
              "notional": 32150.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-158",
              "timestamp": "2026-03-12T08:43:05.935800",
              "price": 0.25,
              "size": 400.0,
              "notional": 100.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3686,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-157",
              "timestamp": "2026-03-12T08:42:58.061300",
              "price": 0.25,
              "size": 13000.0,
              "notional": 3250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3685,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-156",
              "timestamp": "2026-03-12T08:37:24.793200",
              "price": 0.25,
              "size": 1500.0,
              "notional": 375.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3684,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-155",
              "timestamp": "2026-03-12T08:37:16.109200",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3683,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-154",
              "timestamp": "2026-03-12T08:15:47.620800",
              "price": 0.25,
              "size": 1400.0,
              "notional": 350.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3682,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-153",
              "timestamp": "2026-03-12T08:15:40.445200",
              "price": 0.255,
              "size": 15000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3681,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-152",
              "timestamp": "2026-03-12T08:07:07.938000",
              "price": 0.25,
              "size": 5100.0,
              "notional": 1275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3680,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-151",
              "timestamp": "2026-03-12T08:07:05.586300",
              "price": 0.25,
              "size": 20000.0,
              "notional": 5000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3680,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-150",
              "timestamp": "2026-03-12T08:06:56.512600",
              "price": 0.25,
              "size": 300.0,
              "notional": 75.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3679,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-149",
              "timestamp": "2026-03-12T08:06:55.789700",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3679,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-148",
              "timestamp": "2026-03-12T08:06:48.105400",
              "price": 0.25,
              "size": 400.0,
              "notional": 100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3678,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-147",
              "timestamp": "2026-03-12T08:06:44.941200",
              "price": 0.25,
              "size": 600.0,
              "notional": 150.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3678,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2796780684104628,
              "mixed_pct": 0.15995975855130784,
              "instit_pct": 0.3762575452716298,
              "ambiguous_pct": 0.1841046277665996,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1841046277665996,
              "retail_qty_pct": 0.06633399422278657,
              "mixed_qty_pct": 0.19081883460684504,
              "instit_qty_pct": 0.5324095732436306,
              "ambiguous_qty_pct": 0.2104375979267378,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2104375979267378,
              "retail_notional_pct": 0.06591405264378847,
              "mixed_notional_pct": 0.19189067658994347,
              "instit_notional_pct": 0.536425936106724,
              "ambiguous_notional_pct": 0.2057693346595441,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2057693346595441,
              "run_retail_pct": 0.5257936507936508,
              "run_mixed_pct": 0.1488095238095238,
              "run_instit_pct": 0.17857142857142858,
              "run_unclear_pct": 0.14682539682539683,
              "avg_trade_size": 3165.804828973843,
              "avg_run_notional": 6243.670634920635,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.08928571428571429,
              "medium_confidence_pct": 0.33134920634920634,
              "low_confidence_pct": 0.2837301587301587,
              "na_confidence_pct": 0.29563492063492064,
              "avg_feature_coverage": 0.8589285714285713,
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
              "retail_pct": 0.03333333333333333,
              "mixed_pct": 0.06666666666666667,
              "instit_pct": 0.5333333333333333,
              "ambiguous_pct": 0.3,
              "unobservable_pct": 0.06666666666666667,
              "unclear_pct": 0.36666666666666664,
              "retail_qty_pct": 0.016271501627150162,
              "mixed_qty_pct": 0.046490004649000466,
              "instit_qty_pct": 0.6369130636913064,
              "ambiguous_qty_pct": 0.25383542538354253,
              "unobservable_qty_pct": 0.046490004649000466,
              "unclear_qty_pct": 0.300325430032543,
              "retail_notional_pct": 0.016416610320230503,
              "mixed_notional_pct": 0.046782770782697686,
              "instit_notional_pct": 0.6349969237891607,
              "ambiguous_notional_pct": 0.25305945919604295,
              "unobservable_notional_pct": 0.048744235911868085,
              "unclear_notional_pct": 0.30180369510791105,
              "run_retail_pct": 0.05,
              "run_mixed_pct": 0.05,
              "run_instit_pct": 0.45,
              "run_unclear_pct": 0.45,
              "avg_trade_size": 2736.05,
              "avg_run_notional": 4104.075,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8150000000000001,
              "observable_run_pct": 0.95,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.17582417582417584,
              "mixed_pct": 0.02197802197802198,
              "instit_pct": 0.3516483516483517,
              "ambiguous_pct": 0.3956043956043956,
              "unobservable_pct": 0.054945054945054944,
              "unclear_pct": 0.4505494505494505,
              "retail_qty_pct": 0.05179900744416874,
              "mixed_qty_pct": 0.018610421836228287,
              "instit_qty_pct": 0.607940446650124,
              "ambiguous_qty_pct": 0.29311414392059554,
              "unobservable_qty_pct": 0.028535980148883373,
              "unclear_qty_pct": 0.3216501240694789,
              "retail_notional_pct": 0.05159357893420745,
              "mixed_notional_pct": 0.018047695928939914,
              "instit_notional_pct": 0.611604885924428,
              "ambiguous_notional_pct": 0.29009496784574657,
              "unobservable_notional_pct": 0.028658871366678083,
              "unclear_notional_pct": 0.31875383921242467,
              "run_retail_pct": 0.2711864406779661,
              "run_mixed_pct": 0.03389830508474576,
              "run_instit_pct": 0.22033898305084745,
              "run_unclear_pct": 0.4745762711864407,
              "avg_trade_size": 3032.2582417582416,
              "avg_run_notional": 4676.872881355932,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4915254237288136,
              "na_confidence_pct": 0.5084745762711864,
              "avg_feature_coverage": 0.8211864406779662,
              "observable_run_pct": 0.9661016949152542,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.30170002151925973,
              "mixed_pct": 0.18398967075532602,
              "instit_pct": 0.32537120723047125,
              "ambiguous_pct": 0.18678717452119648,
              "unobservable_pct": 0.002151925973746503,
              "unclear_pct": 0.18893910049494297,
              "retail_qty_pct": 0.1002911942216655,
              "mixed_qty_pct": 0.13246896910738398,
              "instit_qty_pct": 0.5391810772559418,
              "ambiguous_qty_pct": 0.2251468171983537,
              "unobservable_qty_pct": 0.002911942216655008,
              "unclear_qty_pct": 0.2280587594150087,
              "retail_notional_pct": 0.10048610559394913,
              "mixed_notional_pct": 0.13267663572954355,
              "instit_notional_pct": 0.5396301489009694,
              "ambiguous_notional_pct": 0.22443381286546576,
              "unobservable_notional_pct": 0.0027732969100721433,
              "unclear_notional_pct": 0.2272071097755379,
              "run_retail_pct": 0.6208712302537099,
              "run_mixed_pct": 0.15509813307802778,
              "run_instit_pct": 0.11728099569171853,
              "run_unclear_pct": 0.10674964097654381,
              "avg_trade_size": 2853.537873897138,
              "avg_run_notional": 6347.72163714696,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.2173288654858784,
              "medium_confidence_pct": 0.36476783149832454,
              "low_confidence_pct": 0.15605552896122546,
              "na_confidence_pct": 0.26184777405457155,
              "avg_feature_coverage": 0.8686931546194351,
              "observable_run_pct": 0.9995213020584012,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2862190812720848,
              "mixed_pct": 0.08362779740871613,
              "instit_pct": 0.31507656065959955,
              "ambiguous_pct": 0.29858657243816256,
              "unobservable_pct": 0.016489988221436984,
              "unclear_pct": 0.31507656065959955,
              "retail_qty_pct": 0.054172069759441076,
              "mixed_qty_pct": 0.059253182311376926,
              "instit_qty_pct": 0.5158652446608623,
              "ambiguous_qty_pct": 0.34662714690237384,
              "unobservable_qty_pct": 0.02408235636594596,
              "unclear_qty_pct": 0.3707095032683198,
              "retail_notional_pct": 0.05370044033341852,
              "mixed_notional_pct": 0.06072376574439391,
              "instit_notional_pct": 0.5232149214091261,
              "ambiguous_notional_pct": 0.33921020639982746,
              "unobservable_notional_pct": 0.02315066611323408,
              "unclear_notional_pct": 0.36236087251306154,
              "run_retail_pct": 0.4941675503711559,
              "run_mixed_pct": 0.06998939554612937,
              "run_instit_pct": 0.15906680805938495,
              "run_unclear_pct": 0.27677624602332984,
              "avg_trade_size": 1993.4835100117787,
              "avg_run_notional": 3589.538706256628,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.016967126193001062,
              "medium_confidence_pct": 0.36585365853658536,
              "low_confidence_pct": 0.2704135737009544,
              "na_confidence_pct": 0.34676564156945916,
              "avg_feature_coverage": 0.8370625662778365,
              "observable_run_pct": 0.9925768822905621,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2703889585947302,
              "mixed_pct": 0.09347553324968633,
              "instit_pct": 0.32810539523212046,
              "ambiguous_pct": 0.308030112923463,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.308030112923463,
              "retail_qty_pct": 0.07632772923112098,
              "mixed_qty_pct": 0.07086748072622305,
              "instit_qty_pct": 0.4591338768335989,
              "ambiguous_qty_pct": 0.39367091320905706,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.39367091320905706,
              "retail_notional_pct": 0.07631548987937345,
              "mixed_notional_pct": 0.07096297838283512,
              "instit_notional_pct": 0.45707212664635666,
              "ambiguous_notional_pct": 0.39564940509143476,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.39564940509143476,
              "run_retail_pct": 0.48074534161490684,
              "run_mixed_pct": 0.08571428571428572,
              "run_instit_pct": 0.15403726708074533,
              "run_unclear_pct": 0.2795031055900621,
              "avg_trade_size": 2570.669071518193,
              "avg_run_notional": 5090.244099378882,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1267080745341615,
              "medium_confidence_pct": 0.3142857142857143,
              "low_confidence_pct": 0.1937888198757764,
              "na_confidence_pct": 0.3652173913043478,
              "avg_feature_coverage": 0.8377018633540372,
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
              "retail_pct": 0.6544502617801047,
              "mixed_pct": 0.14136125654450263,
              "instit_pct": 0.09162303664921466,
              "ambiguous_pct": 0.112565445026178,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.112565445026178,
              "retail_qty_pct": 0.08234806056834681,
              "mixed_qty_pct": 0.06399087326280854,
              "instit_qty_pct": 0.4344534328977391,
              "ambiguous_qty_pct": 0.4192076332711056,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4192076332711056,
              "retail_notional_pct": 0.08213978300904796,
              "mixed_notional_pct": 0.06442419329009529,
              "instit_notional_pct": 0.43506285531267513,
              "ambiguous_notional_pct": 0.4183731683881816,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4183731683881816,
              "run_retail_pct": 0.7307692307692307,
              "run_mixed_pct": 0.13609467455621302,
              "run_instit_pct": 0.038461538461538464,
              "run_unclear_pct": 0.09467455621301775,
              "avg_trade_size": 523.0994764397906,
              "avg_run_notional": 591.1952662721893,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5828402366863905,
              "medium_confidence_pct": 0.1390532544378698,
              "low_confidence_pct": 0.047337278106508875,
              "na_confidence_pct": 0.23076923076923078,
              "avg_feature_coverage": 0.8477810650887573,
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
              "run_unclear_pct": 1.0,
              "avg_trade_size": 300.0,
              "avg_run_notional": 300.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.55,
              "observable_run_pct": 0.0,
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
          "n_trades": 2314,
          "n_runs": 1159,
          "n_trade_days": 21,
          "first_trade_date": "2026-02-10",
          "last_trade_date": "2026-03-12",
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
            "retail_pct": 0.2843560933448574,
            "mixed_pct": 0.1581676750216076,
            "instit_pct": 0.37337942955920483,
            "ambiguous_pct": 0.18409680207433016,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18409680207433016,
            "retail_qty_pct": 0.0710477758703243,
            "mixed_qty_pct": 0.18737810788401127,
            "instit_qty_pct": 0.49671256233285455,
            "ambiguous_qty_pct": 0.24486155391280992,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24486155391280992,
            "retail_notional_pct": 0.07091477329711324,
            "mixed_notional_pct": 0.18866982097520718,
            "instit_notional_pct": 0.49798455109997086,
            "ambiguous_notional_pct": 0.24243085462770872,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24243085462770872
          },
          "run_composition": {
            "retail_pct": 0.5470232959447799,
            "mixed_pct": 0.14236410698878343,
            "instit_pct": 0.15703192407247626,
            "ambiguous_pct": 0.1535806729939603,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1535806729939603,
            "retail_notional_pct": 0.07091477329711324,
            "mixed_notional_pct": 0.18866982097520718,
            "instit_notional_pct": 0.49798455109997086,
            "unclear_notional_pct": 0.24243085462770872
          },
          "counts": {
            "trades": {
              "retail": 658,
              "mixed": 366,
              "institutional": 864,
              "ambiguous": 426,
              "unobservable": 0,
              "unclear": 426
            },
            "runs": {
              "retail": 634,
              "mixed": 165,
              "institutional": 182,
              "ambiguous": 178,
              "unobservable": 0,
              "unclear": 178
            }
          },
          "confidence": {
            "high": 0.06471095772217429,
            "medium": 0.3796376186367558,
            "low": 0.25970664365832613,
            "na": 0.29594477998274377
          },
          "confidence_counts": {
            "high": 75,
            "medium": 440,
            "low": 301,
            "na": 343
          },
          "trade_confidence": {
            "high": 0.035868625756266204,
            "medium": 0.37640449438202245,
            "low": 0.24546240276577355,
            "na": 0.34226447709593777
          },
          "trade_confidence_counts": {
            "high": 83,
            "medium": 871,
            "low": 568,
            "na": 792
          },
          "observability": {
            "avg_feature_coverage": 0.85,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1535806729939603,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5470232959447799,
          "dominance_gap": 0.3899913718723037,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 1284,
              "SINGLE_FILL": 1020,
              "WALK_BOOK": 10
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 1755,
              "PERSISTENT_POSITIVE_IMPACT": 363,
              "MOMENTUM_REACTIVE": 189,
              "SHORT_HORIZON_POSITIVE_IMPACT": 5,
              "UNOBSERVABLE": 2
            },
            "d3_urgency": {
              "IMMEDIATE": 1152,
              "ADAPTIVE": 7
            },
            "participant_confidence": {
              "MEDIUM": 440,
              "NA": 343,
              "LOW": 301,
              "HIGH": 75
            }
          },
          "trade_size": {
            "avg": 3507.4788245462405,
            "median": 1315.5
          },
          "run_size": {
            "avg": 7002.852459016393,
            "median": 1856.5,
            "avg_length": 1.1915444348576358
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-176",
              "timestamp": "2026-03-12T08:56:11.981700",
              "price": 0.25,
              "size": 16700.0,
              "notional": 4175.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-175",
              "timestamp": "2026-03-12T08:56:11.981700",
              "price": 0.25,
              "size": 37300.0,
              "notional": 9325.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-174",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-173",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-172",
              "timestamp": "2026-03-12T08:56:11.981600",
              "price": 0.25,
              "size": 4200.0,
              "notional": 1050.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3691,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-171",
              "timestamp": "2026-03-12T08:55:31.068400",
              "price": 0.25,
              "size": 3800.0,
              "notional": 950.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3690,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-170",
              "timestamp": "2026-03-12T08:55:31.068400",
              "price": 0.25,
              "size": 6200.0,
              "notional": 1550.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3690,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-169",
              "timestamp": "2026-03-12T08:54:51.219600",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3689,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-168",
              "timestamp": "2026-03-12T08:54:49.561300",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3689,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-167",
              "timestamp": "2026-03-12T08:45:04.034900",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3688,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-166",
              "timestamp": "2026-03-12T08:44:27.313300",
              "price": 0.25,
              "size": 500.0,
              "notional": 125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-165",
              "timestamp": "2026-03-12T08:44:27.253000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-164",
              "timestamp": "2026-03-12T08:44:27.222900",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-163",
              "timestamp": "2026-03-12T08:44:27.132300",
              "price": 0.25,
              "size": 2100.0,
              "notional": 525.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-162",
              "timestamp": "2026-03-12T08:44:27.132300",
              "price": 0.25,
              "size": 25900.0,
              "notional": 6475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-161",
              "timestamp": "2026-03-12T08:44:27.102100",
              "price": 0.25,
              "size": 3600.0,
              "notional": 900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-160",
              "timestamp": "2026-03-12T08:44:27.102000",
              "price": 0.25,
              "size": 21400.0,
              "notional": 5350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-159",
              "timestamp": "2026-03-12T08:44:27.102000",
              "price": 0.25,
              "size": 128600.0,
              "notional": 32150.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3687,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-158",
              "timestamp": "2026-03-12T08:43:05.935800",
              "price": 0.25,
              "size": 400.0,
              "notional": 100.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3686,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-157",
              "timestamp": "2026-03-12T08:42:58.061300",
              "price": 0.25,
              "size": 13000.0,
              "notional": 3250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3685,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-156",
              "timestamp": "2026-03-12T08:37:24.793200",
              "price": 0.25,
              "size": 1500.0,
              "notional": 375.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3684,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-155",
              "timestamp": "2026-03-12T08:37:16.109200",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3683,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-154",
              "timestamp": "2026-03-12T08:15:47.620800",
              "price": 0.25,
              "size": 1400.0,
              "notional": 350.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3682,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-153",
              "timestamp": "2026-03-12T08:15:40.445200",
              "price": 0.255,
              "size": 15000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3681,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-152",
              "timestamp": "2026-03-12T08:07:07.938000",
              "price": 0.25,
              "size": 5100.0,
              "notional": 1275.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3680,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-151",
              "timestamp": "2026-03-12T08:07:05.586300",
              "price": 0.25,
              "size": 20000.0,
              "notional": 5000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3680,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-150",
              "timestamp": "2026-03-12T08:06:56.512600",
              "price": 0.25,
              "size": 300.0,
              "notional": 75.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3679,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-149",
              "timestamp": "2026-03-12T08:06:55.789700",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3679,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-148",
              "timestamp": "2026-03-12T08:06:48.105400",
              "price": 0.25,
              "size": 400.0,
              "notional": 100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3678,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-147",
              "timestamp": "2026-03-12T08:06:44.941200",
              "price": 0.25,
              "size": 600.0,
              "notional": 150.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3678,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2843560933448574,
              "mixed_pct": 0.1581676750216076,
              "instit_pct": 0.37337942955920483,
              "ambiguous_pct": 0.18409680207433016,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.18409680207433016,
              "retail_qty_pct": 0.0710477758703243,
              "mixed_qty_pct": 0.18737810788401127,
              "instit_qty_pct": 0.49671256233285455,
              "ambiguous_qty_pct": 0.24486155391280992,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24486155391280992,
              "retail_notional_pct": 0.07091477329711324,
              "mixed_notional_pct": 0.18866982097520718,
              "instit_notional_pct": 0.49798455109997086,
              "ambiguous_notional_pct": 0.24243085462770872,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24243085462770872,
              "run_retail_pct": 0.5470232959447799,
              "run_mixed_pct": 0.14236410698878343,
              "run_instit_pct": 0.15703192407247626,
              "run_unclear_pct": 0.1535806729939603,
              "avg_trade_size": 3507.4788245462405,
              "avg_run_notional": 7002.852459016393,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.06471095772217429,
              "medium_confidence_pct": 0.3796376186367558,
              "low_confidence_pct": 0.25970664365832613,
              "na_confidence_pct": 0.29594477998274377,
              "avg_feature_coverage": 0.85,
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
              "retail_pct": 0.21487603305785125,
              "mixed_pct": 0.03305785123966942,
              "instit_pct": 0.32231404958677684,
              "ambiguous_pct": 0.40082644628099173,
              "unobservable_pct": 0.028925619834710745,
              "unclear_pct": 0.4297520661157025,
              "retail_qty_pct": 0.06419815493491722,
              "mixed_qty_pct": 0.01339567799823076,
              "instit_qty_pct": 0.5217995703273095,
              "ambiguous_qty_pct": 0.38759004170352584,
              "unobservable_qty_pct": 0.013016555036016682,
              "unclear_qty_pct": 0.4006065967395425,
              "retail_notional_pct": 0.06471698408386584,
              "mixed_notional_pct": 0.013157726315310408,
              "instit_notional_pct": 0.5209209483973644,
              "ambiguous_notional_pct": 0.3885173717827464,
              "unobservable_notional_pct": 0.01268696942071302,
              "unclear_notional_pct": 0.40120434120345944,
              "run_retail_pct": 0.31875,
              "run_mixed_pct": 0.0375,
              "run_instit_pct": 0.19375,
              "run_unclear_pct": 0.45,
              "avg_trade_size": 2905.46694214876,
              "avg_run_notional": 4394.51875,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5125,
              "na_confidence_pct": 0.4875,
              "avg_feature_coverage": 0.8171875,
              "observable_run_pct": 0.98125,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.22762148337595908,
              "mixed_pct": 0.09820971867007673,
              "instit_pct": 0.3838874680306905,
              "ambiguous_pct": 0.289769820971867,
              "unobservable_pct": 0.0005115089514066496,
              "unclear_pct": 0.29028132992327366,
              "retail_qty_pct": 0.06200201523209414,
              "mixed_qty_pct": 0.09392857341189406,
              "instit_qty_pct": 0.5051716680333963,
              "ambiguous_qty_pct": 0.3388965092551971,
              "unobservable_qty_pct": 1.2340674183371311e-06,
              "unclear_qty_pct": 0.3388977433226154,
              "retail_notional_pct": 0.06082333894261773,
              "mixed_notional_pct": 0.09328319347731667,
              "instit_notional_pct": 0.5065394841255171,
              "ambiguous_notional_pct": 0.3393526871775505,
              "unobservable_notional_pct": 1.296276998092513e-06,
              "unclear_notional_pct": 0.3393539834545486,
              "run_retail_pct": 0.45475773496789257,
              "run_mixed_pct": 0.10332749562171628,
              "run_instit_pct": 0.17104495037945125,
              "run_unclear_pct": 0.2708698190309399,
              "avg_trade_size": 2466.240588235294,
              "avg_run_notional": 5629.305720957384,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.06129597197898424,
              "medium_confidence_pct": 0.30939871570344424,
              "low_confidence_pct": 0.2551079976649154,
              "na_confidence_pct": 0.37419731465265615,
              "avg_feature_coverage": 0.8450087565674255,
              "observable_run_pct": 0.9994162288382954,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.26830631637786473,
              "mixed_pct": 0.10368921185019564,
              "instit_pct": 0.3077138065958636,
              "ambiguous_pct": 0.3124650642817216,
              "unobservable_pct": 0.007825600894354388,
              "unclear_pct": 0.320290665176076,
              "retail_qty_pct": 0.05437374797290852,
              "mixed_qty_pct": 0.08160150447663564,
              "instit_qty_pct": 0.49418786879437454,
              "ambiguous_qty_pct": 0.357435848516646,
              "unobservable_qty_pct": 0.012401030239435276,
              "unclear_qty_pct": 0.3698368787560813,
              "retail_notional_pct": 0.05432377772079044,
              "mixed_notional_pct": 0.08556477144944831,
              "instit_notional_pct": 0.4938206888922587,
              "ambiguous_notional_pct": 0.35592142574915636,
              "unobservable_notional_pct": 0.01036933618834616,
              "unclear_notional_pct": 0.36629076193750254,
              "run_retail_pct": 0.4937466014138119,
              "run_mixed_pct": 0.09135399673735727,
              "run_instit_pct": 0.14355628058727568,
              "run_unclear_pct": 0.2713431212615552,
              "avg_trade_size": 2112.139183901621,
              "avg_run_notional": 4109.425774877651,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.010331702011963024,
              "medium_confidence_pct": 0.3828167482327352,
              "low_confidence_pct": 0.24415443175638935,
              "na_confidence_pct": 0.36269711799891247,
              "avg_feature_coverage": 0.8445078847199563,
              "observable_run_pct": 0.9961935834692768,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2721830645939944,
              "mixed_pct": 0.1555469730616974,
              "instit_pct": 0.3136043255769045,
              "ambiguous_pct": 0.2577001062083615,
              "unobservable_pct": 0.0009655305590421936,
              "unclear_pct": 0.2586656367674037,
              "retail_qty_pct": 0.0814881036069853,
              "mixed_qty_pct": 0.12318715629915933,
              "instit_qty_pct": 0.46469016853112904,
              "ambiguous_qty_pct": 0.3296848762345376,
              "unobservable_qty_pct": 0.0009496953281887082,
              "unclear_qty_pct": 0.33063457156272635,
              "retail_notional_pct": 0.0823709460310899,
              "mixed_notional_pct": 0.12406766162491452,
              "instit_notional_pct": 0.4685374946813531,
              "ambiguous_notional_pct": 0.32405441443740446,
              "unobservable_notional_pct": 0.0009694832252380407,
              "unclear_notional_pct": 0.3250238976626425,
              "run_retail_pct": 0.578215527230591,
              "run_mixed_pct": 0.146234067207416,
              "run_instit_pct": 0.12166859791425261,
              "run_unclear_pct": 0.15388180764774045,
              "avg_trade_size": 3662.5065173312737,
              "avg_run_notional": 8790.864426419466,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.15388180764774045,
              "medium_confidence_pct": 0.3733487833140209,
              "low_confidence_pct": 0.17265353418308227,
              "na_confidence_pct": 0.30011587485515645,
              "avg_feature_coverage": 0.8669293163383545,
              "observable_run_pct": 0.9997682502896872,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6174334140435835,
              "mixed_pct": 0.14043583535108958,
              "instit_pct": 0.10411622276029056,
              "ambiguous_pct": 0.13801452784503632,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13801452784503632,
              "retail_qty_pct": 0.07697513111148706,
              "mixed_qty_pct": 0.060649636271358484,
              "instit_qty_pct": 0.40475384875655557,
              "ambiguous_qty_pct": 0.45762138386059886,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.45762138386059886,
              "retail_notional_pct": 0.07653066372315373,
              "mixed_notional_pct": 0.06075434918162134,
              "instit_notional_pct": 0.4035592560230692,
              "ambiguous_notional_pct": 0.45915573107215574,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.45915573107215574,
              "run_retail_pct": 0.7,
              "run_mixed_pct": 0.1361111111111111,
              "run_instit_pct": 0.044444444444444446,
              "run_unclear_pct": 0.11944444444444445,
              "avg_trade_size": 599.9430992736078,
              "avg_run_notional": 688.2680555555555,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5472222222222223,
              "medium_confidence_pct": 0.13055555555555556,
              "low_confidence_pct": 0.06666666666666667,
              "na_confidence_pct": 0.25555555555555554,
              "avg_feature_coverage": 0.8445833333333332,
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
              "retail_pct": 0.08695652173913043,
              "mixed_pct": 0.10869565217391304,
              "instit_pct": 0.43478260869565216,
              "ambiguous_pct": 0.30434782608695654,
              "unobservable_pct": 0.06521739130434782,
              "unclear_pct": 0.3695652173913044,
              "retail_qty_pct": 0.01654385204450224,
              "mixed_qty_pct": 0.01509897413668545,
              "instit_qty_pct": 0.1540962288686606,
              "ambiguous_qty_pct": 0.08459760150267302,
              "unobservable_qty_pct": 0.7296633434474787,
              "unclear_qty_pct": 0.8142609449501518,
              "retail_notional_pct": 0.016532200397705588,
              "mixed_notional_pct": 0.014908038553575934,
              "instit_notional_pct": 0.14989747649155535,
              "ambiguous_notional_pct": 0.08264096185360317,
              "unobservable_notional_pct": 0.7360213227035599,
              "unclear_notional_pct": 0.8186622845571631,
              "run_retail_pct": 0.12121212121212122,
              "run_mixed_pct": 0.12121212121212122,
              "run_instit_pct": 0.36363636363636365,
              "run_unclear_pct": 0.3939393939393939,
              "avg_trade_size": 11932.576086956522,
              "avg_run_notional": 16633.28787878788,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.48484848484848486,
              "na_confidence_pct": 0.5151515151515151,
              "avg_feature_coverage": 0.8015151515151516,
              "observable_run_pct": 0.9393939393939394,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.3333333333333333,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.6666666666666666,
              "unclear_pct": 0.6666666666666666,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.09090909090909091,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.9090909090909091,
              "unclear_qty_pct": 0.9090909090909091,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.09090909090909091,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.9090909090909091,
              "unclear_notional_pct": 0.9090909090909091,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.6666666666666666,
              "avg_trade_size": 220.0,
              "avg_run_notional": 220.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3333333333333333,
              "na_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.6,
              "observable_run_pct": 0.33333333333333337,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5,
              "mixed_pct": 0.5,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.16666666666666666,
              "mixed_qty_pct": 0.8333333333333334,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.20895522388059704,
              "mixed_notional_pct": 0.7910447761194029,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.5,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 16.75,
              "avg_run_notional": 16.75,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
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
      "n_trades": 2314,
      "n_runs": 1159,
      "n_trade_days": 21,
      "first_trade_date": "2026-02-10",
      "last_trade_date": "2026-03-12",
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
        "retail_pct": 0.2843560933448574,
        "mixed_pct": 0.1581676750216076,
        "instit_pct": 0.37337942955920483,
        "ambiguous_pct": 0.18409680207433016,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.18409680207433016,
        "retail_qty_pct": 0.0710477758703243,
        "mixed_qty_pct": 0.18737810788401127,
        "instit_qty_pct": 0.49671256233285455,
        "ambiguous_qty_pct": 0.24486155391280992,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.24486155391280992,
        "retail_notional_pct": 0.07091477329711324,
        "mixed_notional_pct": 0.18866982097520718,
        "instit_notional_pct": 0.49798455109997086,
        "ambiguous_notional_pct": 0.24243085462770872,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.24243085462770872
      },
      "run_composition": {
        "retail_pct": 0.5470232959447799,
        "mixed_pct": 0.14236410698878343,
        "instit_pct": 0.15703192407247626,
        "ambiguous_pct": 0.1535806729939603,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.1535806729939603
      },
      "trade_size": {
        "avg": 3507.4788245462405,
        "median": 1315.5
      },
      "run_size": {
        "avg": 7002.852459016393,
        "median": 1856.5,
        "avg_length": 1.1915444348576358
      },
      "confidence": {
        "high": 0.06471095772217429,
        "medium": 0.3796376186367558,
        "low": 0.25970664365832613,
        "na": 0.29594477998274377
      },
      "confidence_counts": {
        "high": 75,
        "medium": 440,
        "low": 301,
        "na": 343
      },
      "trade_confidence": {
        "high": 0.035868625756266204,
        "medium": 0.37640449438202245,
        "low": 0.24546240276577355,
        "na": 0.34226447709593777
      },
      "trade_confidence_counts": {
        "high": 83,
        "medium": 871,
        "low": 568,
        "na": 792
      },
      "counts": {
        "trades": {
          "retail": 658,
          "mixed": 366,
          "institutional": 864,
          "ambiguous": 426,
          "unobservable": 0,
          "unclear": 426
        },
        "runs": {
          "retail": 634,
          "mixed": 165,
          "institutional": 182,
          "ambiguous": 178,
          "unobservable": 0,
          "unclear": 178
        }
      },
      "observability": {
        "avg_feature_coverage": 0.85,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.1535806729939603,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5470232959447799,
      "dominance_gap": 0.3899913718723037,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-01",
            "n_trades": 4547,
            "n_runs": 1810,
            "retail_pct": 0.27996481196393225,
            "mixed_pct": 0.15350780734550254,
            "instit_pct": 0.3597976687926105,
            "ambiguous_pct": 0.2067297118979547,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2067297118979547,
            "avg_trade_size": 3936.658346162305,
            "avg_run_notional": 9889.494751381215,
            "retail_qty_pct": 0.07277836792045625,
            "mixed_qty_pct": 0.15789513963932247,
            "instit_qty_pct": 0.5176925455285722,
            "ambiguous_qty_pct": 0.25163394691164903,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25163394691164903,
            "retail_notional_pct": 0.07160620325642163,
            "mixed_notional_pct": 0.15785828429861018,
            "instit_notional_pct": 0.5175693857405639,
            "ambiguous_notional_pct": 0.2529661267044043,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2529661267044043,
            "run_retail_pct": 0.6430939226519337,
            "run_mixed_pct": 0.13425414364640884,
            "run_instit_pct": 0.1011049723756906,
            "run_ambiguous_pct": 0.12154696132596685,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12154696132596685,
            "avg_feature_coverage": 0.8573204419889502,
            "high_confidence_pct": 0.14585635359116023,
            "medium_confidence_pct": 0.46243093922651934,
            "low_confidence_pct": 0.13591160220994475,
            "na_confidence_pct": 0.2558011049723757,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 3236,
            "n_runs": 1422,
            "retail_pct": 0.2778121137206428,
            "mixed_pct": 0.16718170580964153,
            "instit_pct": 0.32169344870210137,
            "ambiguous_pct": 0.23331273176761433,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23331273176761433,
            "avg_trade_size": 3472.6229913473426,
            "avg_run_notional": 7902.537271448664,
            "retail_qty_pct": 0.0936751369857047,
            "mixed_qty_pct": 0.18777930710060717,
            "instit_qty_pct": 0.44697847429721327,
            "ambiguous_qty_pct": 0.27156708161647486,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.27156708161647486,
            "retail_notional_pct": 0.09379533963704086,
            "mixed_notional_pct": 0.18970958427423834,
            "instit_notional_pct": 0.44554998803994655,
            "ambiguous_notional_pct": 0.27094508804877426,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.27094508804877426,
            "run_retail_pct": 0.5759493670886076,
            "run_mixed_pct": 0.14627285513361463,
            "run_instit_pct": 0.12447257383966245,
            "run_ambiguous_pct": 0.15330520393811534,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15330520393811534,
            "avg_feature_coverage": 0.85210970464135,
            "high_confidence_pct": 0.053445850914205346,
            "medium_confidence_pct": 0.4310829817158931,
            "low_confidence_pct": 0.2158931082981716,
            "na_confidence_pct": 0.29957805907172996,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 914,
            "n_runs": 460,
            "retail_pct": 0.26914660831509846,
            "mixed_pct": 0.1652078774617068,
            "instit_pct": 0.36980306345733044,
            "ambiguous_pct": 0.19584245076586435,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19584245076586435,
            "avg_trade_size": 2941.1230853391685,
            "avg_run_notional": 5843.883695652174,
            "retail_qty_pct": 0.0659782329248436,
            "mixed_qty_pct": 0.19364984146027936,
            "instit_qty_pct": 0.5120061701945325,
            "ambiguous_qty_pct": 0.2283657554203445,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2283657554203445,
            "retail_notional_pct": 0.06537567240963378,
            "mixed_notional_pct": 0.1952221320953736,
            "instit_notional_pct": 0.514567906653798,
            "ambiguous_notional_pct": 0.2248342888411946,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2248342888411946,
            "run_retail_pct": 0.508695652173913,
            "run_mixed_pct": 0.15434782608695652,
            "run_instit_pct": 0.1826086956521739,
            "run_ambiguous_pct": 0.15434782608695652,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15434782608695652,
            "avg_feature_coverage": 0.8588043478260868,
            "high_confidence_pct": 0.058695652173913045,
            "medium_confidence_pct": 0.32608695652173914,
            "low_confidence_pct": 0.3065217391304348,
            "na_confidence_pct": 0.30869565217391304,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.2843560933448574,
          "mixed_pct": 0.1581676750216076,
          "instit_pct": 0.37337942955920483,
          "ambiguous_pct": 0.18409680207433016,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.18409680207433016,
          "retail_qty_pct": 0.0710477758703243,
          "mixed_qty_pct": 0.18737810788401127,
          "instit_qty_pct": 0.49671256233285455,
          "ambiguous_qty_pct": 0.24486155391280992,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.24486155391280992,
          "retail_notional_pct": 0.07091477329711324,
          "mixed_notional_pct": 0.18866982097520718,
          "instit_notional_pct": 0.49798455109997086,
          "ambiguous_notional_pct": 0.24243085462770872,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.24243085462770872,
          "run_retail_pct": 0.5470232959447799,
          "run_mixed_pct": 0.14236410698878343,
          "run_instit_pct": 0.15703192407247626,
          "run_unclear_pct": 0.1535806729939603,
          "avg_trade_size": 3507.4788245462405,
          "avg_run_notional": 7002.852459016393,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.06471095772217429,
          "medium_confidence_pct": 0.3796376186367558,
          "low_confidence_pct": 0.25970664365832613,
          "na_confidence_pct": 0.29594477998274377,
          "avg_feature_coverage": 0.85,
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
          "retail_pct": 0.21487603305785125,
          "mixed_pct": 0.03305785123966942,
          "instit_pct": 0.32231404958677684,
          "ambiguous_pct": 0.40082644628099173,
          "unobservable_pct": 0.028925619834710745,
          "unclear_pct": 0.4297520661157025,
          "retail_qty_pct": 0.06419815493491722,
          "mixed_qty_pct": 0.01339567799823076,
          "instit_qty_pct": 0.5217995703273095,
          "ambiguous_qty_pct": 0.38759004170352584,
          "unobservable_qty_pct": 0.013016555036016682,
          "unclear_qty_pct": 0.4006065967395425,
          "retail_notional_pct": 0.06471698408386584,
          "mixed_notional_pct": 0.013157726315310408,
          "instit_notional_pct": 0.5209209483973644,
          "ambiguous_notional_pct": 0.3885173717827464,
          "unobservable_notional_pct": 0.01268696942071302,
          "unclear_notional_pct": 0.40120434120345944,
          "run_retail_pct": 0.31875,
          "run_mixed_pct": 0.0375,
          "run_instit_pct": 0.19375,
          "run_unclear_pct": 0.45,
          "avg_trade_size": 2905.46694214876,
          "avg_run_notional": 4394.51875,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5125,
          "na_confidence_pct": 0.4875,
          "avg_feature_coverage": 0.8171875,
          "observable_run_pct": 0.98125,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "QS9",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.22762148337595908,
          "mixed_pct": 0.09820971867007673,
          "instit_pct": 0.3838874680306905,
          "ambiguous_pct": 0.289769820971867,
          "unobservable_pct": 0.0005115089514066496,
          "unclear_pct": 0.29028132992327366,
          "retail_qty_pct": 0.06200201523209414,
          "mixed_qty_pct": 0.09392857341189406,
          "instit_qty_pct": 0.5051716680333963,
          "ambiguous_qty_pct": 0.3388965092551971,
          "unobservable_qty_pct": 1.2340674183371311e-06,
          "unclear_qty_pct": 0.3388977433226154,
          "retail_notional_pct": 0.06082333894261773,
          "mixed_notional_pct": 0.09328319347731667,
          "instit_notional_pct": 0.5065394841255171,
          "ambiguous_notional_pct": 0.3393526871775505,
          "unobservable_notional_pct": 1.296276998092513e-06,
          "unclear_notional_pct": 0.3393539834545486,
          "run_retail_pct": 0.45475773496789257,
          "run_mixed_pct": 0.10332749562171628,
          "run_instit_pct": 0.17104495037945125,
          "run_unclear_pct": 0.2708698190309399,
          "avg_trade_size": 2466.240588235294,
          "avg_run_notional": 5629.305720957384,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.06129597197898424,
          "medium_confidence_pct": 0.30939871570344424,
          "low_confidence_pct": 0.2551079976649154,
          "na_confidence_pct": 0.37419731465265615,
          "avg_feature_coverage": 0.8450087565674255,
          "observable_run_pct": 0.9994162288382954,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "9MT",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.26830631637786473,
          "mixed_pct": 0.10368921185019564,
          "instit_pct": 0.3077138065958636,
          "ambiguous_pct": 0.3124650642817216,
          "unobservable_pct": 0.007825600894354388,
          "unclear_pct": 0.320290665176076,
          "retail_qty_pct": 0.05437374797290852,
          "mixed_qty_pct": 0.08160150447663564,
          "instit_qty_pct": 0.49418786879437454,
          "ambiguous_qty_pct": 0.357435848516646,
          "unobservable_qty_pct": 0.012401030239435276,
          "unclear_qty_pct": 0.3698368787560813,
          "retail_notional_pct": 0.05432377772079044,
          "mixed_notional_pct": 0.08556477144944831,
          "instit_notional_pct": 0.4938206888922587,
          "ambiguous_notional_pct": 0.35592142574915636,
          "unobservable_notional_pct": 0.01036933618834616,
          "unclear_notional_pct": 0.36629076193750254,
          "run_retail_pct": 0.4937466014138119,
          "run_mixed_pct": 0.09135399673735727,
          "run_instit_pct": 0.14355628058727568,
          "run_unclear_pct": 0.2713431212615552,
          "avg_trade_size": 2112.139183901621,
          "avg_run_notional": 4109.425774877651,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.010331702011963024,
          "medium_confidence_pct": 0.3828167482327352,
          "low_confidence_pct": 0.24415443175638935,
          "na_confidence_pct": 0.36269711799891247,
          "avg_feature_coverage": 0.8445078847199563,
          "observable_run_pct": 0.9961935834692768,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2721830645939944,
          "mixed_pct": 0.1555469730616974,
          "instit_pct": 0.3136043255769045,
          "ambiguous_pct": 0.2577001062083615,
          "unobservable_pct": 0.0009655305590421936,
          "unclear_pct": 0.2586656367674037,
          "retail_qty_pct": 0.0814881036069853,
          "mixed_qty_pct": 0.12318715629915933,
          "instit_qty_pct": 0.46469016853112904,
          "ambiguous_qty_pct": 0.3296848762345376,
          "unobservable_qty_pct": 0.0009496953281887082,
          "unclear_qty_pct": 0.33063457156272635,
          "retail_notional_pct": 0.0823709460310899,
          "mixed_notional_pct": 0.12406766162491452,
          "instit_notional_pct": 0.4685374946813531,
          "ambiguous_notional_pct": 0.32405441443740446,
          "unobservable_notional_pct": 0.0009694832252380407,
          "unclear_notional_pct": 0.3250238976626425,
          "run_retail_pct": 0.578215527230591,
          "run_mixed_pct": 0.146234067207416,
          "run_instit_pct": 0.12166859791425261,
          "run_unclear_pct": 0.15388180764774045,
          "avg_trade_size": 3662.5065173312737,
          "avg_run_notional": 8790.864426419466,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.15388180764774045,
          "medium_confidence_pct": 0.3733487833140209,
          "low_confidence_pct": 0.17265353418308227,
          "na_confidence_pct": 0.30011587485515645,
          "avg_feature_coverage": 0.8669293163383545,
          "observable_run_pct": 0.9997682502896872,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6174334140435835,
          "mixed_pct": 0.14043583535108958,
          "instit_pct": 0.10411622276029056,
          "ambiguous_pct": 0.13801452784503632,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.13801452784503632,
          "retail_qty_pct": 0.07697513111148706,
          "mixed_qty_pct": 0.060649636271358484,
          "instit_qty_pct": 0.40475384875655557,
          "ambiguous_qty_pct": 0.45762138386059886,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.45762138386059886,
          "retail_notional_pct": 0.07653066372315373,
          "mixed_notional_pct": 0.06075434918162134,
          "instit_notional_pct": 0.4035592560230692,
          "ambiguous_notional_pct": 0.45915573107215574,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.45915573107215574,
          "run_retail_pct": 0.7,
          "run_mixed_pct": 0.1361111111111111,
          "run_instit_pct": 0.044444444444444446,
          "run_unclear_pct": 0.11944444444444445,
          "avg_trade_size": 599.9430992736078,
          "avg_run_notional": 688.2680555555555,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.5472222222222223,
          "medium_confidence_pct": 0.13055555555555556,
          "low_confidence_pct": 0.06666666666666667,
          "na_confidence_pct": 0.25555555555555554,
          "avg_feature_coverage": 0.8445833333333332,
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
          "retail_pct": 0.08695652173913043,
          "mixed_pct": 0.10869565217391304,
          "instit_pct": 0.43478260869565216,
          "ambiguous_pct": 0.30434782608695654,
          "unobservable_pct": 0.06521739130434782,
          "unclear_pct": 0.3695652173913044,
          "retail_qty_pct": 0.01654385204450224,
          "mixed_qty_pct": 0.01509897413668545,
          "instit_qty_pct": 0.1540962288686606,
          "ambiguous_qty_pct": 0.08459760150267302,
          "unobservable_qty_pct": 0.7296633434474787,
          "unclear_qty_pct": 0.8142609449501518,
          "retail_notional_pct": 0.016532200397705588,
          "mixed_notional_pct": 0.014908038553575934,
          "instit_notional_pct": 0.14989747649155535,
          "ambiguous_notional_pct": 0.08264096185360317,
          "unobservable_notional_pct": 0.7360213227035599,
          "unclear_notional_pct": 0.8186622845571631,
          "run_retail_pct": 0.12121212121212122,
          "run_mixed_pct": 0.12121212121212122,
          "run_instit_pct": 0.36363636363636365,
          "run_unclear_pct": 0.3939393939393939,
          "avg_trade_size": 11932.576086956522,
          "avg_run_notional": 16633.28787878788,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.48484848484848486,
          "na_confidence_pct": 0.5151515151515151,
          "avg_feature_coverage": 0.8015151515151516,
          "observable_run_pct": 0.9393939393939394,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "532",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.0,
          "mixed_pct": 0.0,
          "instit_pct": 0.3333333333333333,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.6666666666666666,
          "unclear_pct": 0.6666666666666666,
          "retail_qty_pct": 0.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.09090909090909091,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.9090909090909091,
          "unclear_qty_pct": 0.9090909090909091,
          "retail_notional_pct": 0.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.09090909090909091,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.9090909090909091,
          "unclear_notional_pct": 0.9090909090909091,
          "run_retail_pct": 0.0,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.3333333333333333,
          "run_unclear_pct": 0.6666666666666666,
          "avg_trade_size": 220.0,
          "avg_run_notional": 220.0,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.3333333333333333,
          "na_confidence_pct": 0.6666666666666666,
          "avg_feature_coverage": 0.6,
          "observable_run_pct": 0.33333333333333337,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "KUX",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5,
          "mixed_pct": 0.5,
          "instit_pct": 0.0,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0,
          "retail_qty_pct": 0.16666666666666666,
          "mixed_qty_pct": 0.8333333333333334,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0,
          "retail_notional_pct": 0.20895522388059704,
          "mixed_notional_pct": 0.7910447761194029,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.0,
          "run_retail_pct": 0.5,
          "run_mixed_pct": 0.5,
          "run_instit_pct": 0.0,
          "run_unclear_pct": 0.0,
          "avg_trade_size": 16.75,
          "avg_run_notional": 16.75,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5,
          "na_confidence_pct": 0.5,
          "avg_feature_coverage": 0.8500000000000001,
          "observable_run_pct": 1.0,
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
            "retail_pct": 0.1657142857142857,
            "mixed_pct": 0.21714285714285714,
            "instit_pct": 0.3485714285714286,
            "ambiguous_pct": 0.26857142857142857,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.26857142857142857,
            "retail_qty_pct": 0.05954800422729859,
            "mixed_qty_pct": 0.30404032192504676,
            "instit_qty_pct": 0.43175351597431105,
            "ambiguous_qty_pct": 0.20465815787334363,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20465815787334363,
            "retail_notional_pct": 0.05947820436526026,
            "mixed_notional_pct": 0.30492587809960164,
            "instit_notional_pct": 0.43174867346414414,
            "ambiguous_notional_pct": 0.20384724407099392,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20384724407099392,
            "run_retail_pct": 0.3835616438356164,
            "run_mixed_pct": 0.1643835616438356,
            "run_instit_pct": 0.2054794520547945,
            "run_unclear_pct": 0.2465753424657534,
            "avg_trade_size": 3447.217142857143,
            "avg_run_notional": 8263.876712328767,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.2876712328767123,
            "low_confidence_pct": 0.3013698630136986,
            "na_confidence_pct": 0.410958904109589,
            "avg_feature_coverage": 0.8787671232876713,
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
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.75,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.9727626459143969,
            "ambiguous_qty_pct": 0.027237354085603113,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.027237354085603113,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.972834067547724,
            "ambiguous_notional_pct": 0.027165932452276064,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.027165932452276064,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.6666666666666666,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 2383.5,
            "avg_run_notional": 3178.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6666666666666666,
            "na_confidence_pct": 0.3333333333333333,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.525,
            "mixed_pct": 0.17083333333333334,
            "instit_pct": 0.21666666666666667,
            "ambiguous_pct": 0.0875,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0875,
            "retail_qty_pct": 0.029125481023164566,
            "mixed_qty_pct": 0.14711134585879926,
            "instit_qty_pct": 0.5021253049623985,
            "ambiguous_qty_pct": 0.3216378681556377,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3216378681556377,
            "retail_notional_pct": 0.02972525361135717,
            "mixed_notional_pct": 0.14844089678202682,
            "instit_notional_pct": 0.4988318452515186,
            "ambiguous_notional_pct": 0.3230020043550974,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3230020043550974,
            "run_retail_pct": 0.7368421052631579,
            "run_mixed_pct": 0.11695906432748537,
            "run_instit_pct": 0.08187134502923976,
            "run_unclear_pct": 0.06432748538011696,
            "avg_trade_size": 923.8216666666667,
            "avg_run_notional": 1296.591812865497,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.543859649122807,
            "medium_confidence_pct": 0.27485380116959063,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.18128654970760233,
            "avg_feature_coverage": 0.8570175438596489,
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
            "retail_pct": 0.46808510638297873,
            "mixed_pct": 0.06382978723404255,
            "instit_pct": 0.2978723404255319,
            "ambiguous_pct": 0.1702127659574468,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1702127659574468,
            "retail_qty_pct": 0.12476370510396975,
            "mixed_qty_pct": 0.10680529300567108,
            "instit_qty_pct": 0.387523629489603,
            "ambiguous_qty_pct": 0.3809073724007561,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3809073724007561,
            "retail_notional_pct": 0.1254630974865611,
            "mixed_notional_pct": 0.10671218945227372,
            "instit_notional_pct": 0.3872130611651896,
            "ambiguous_notional_pct": 0.38061165189597557,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.38061165189597557,
            "run_retail_pct": 0.7333333333333333,
            "run_mixed_pct": 0.06666666666666667,
            "run_instit_pct": 0.11666666666666667,
            "run_unclear_pct": 0.08333333333333333,
            "avg_trade_size": 1171.5744680851064,
            "avg_run_notional": 1835.4666666666667,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.45,
            "medium_confidence_pct": 0.4,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.15,
            "avg_feature_coverage": 0.85,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.20238095238095238,
            "mixed_pct": 0.047619047619047616,
            "instit_pct": 0.2857142857142857,
            "ambiguous_pct": 0.4523809523809524,
            "unobservable_pct": 0.011904761904761904,
            "unclear_pct": 0.4642857142857143,
            "retail_qty_pct": 0.0630120952009364,
            "mixed_qty_pct": 0.03296917674600078,
            "instit_qty_pct": 0.37690206788919234,
            "ambiguous_qty_pct": 0.5243854857588763,
            "unobservable_qty_pct": 0.0027311744049941474,
            "unclear_qty_pct": 0.5271166601638705,
            "retail_notional_pct": 0.06344220378046098,
            "mixed_notional_pct": 0.032919787775334226,
            "instit_notional_pct": 0.3768261783217368,
            "ambiguous_notional_pct": 0.5240592921640816,
            "unobservable_notional_pct": 0.002752537958386362,
            "unclear_notional_pct": 0.526811830122468,
            "run_retail_pct": 0.3333333333333333,
            "run_mixed_pct": 0.04597701149425287,
            "run_instit_pct": 0.1724137931034483,
            "run_unclear_pct": 0.4482758620689655,
            "avg_trade_size": 2312.8005952380954,
            "avg_run_notional": 4466.097701149425,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.26436781609195403,
            "low_confidence_pct": 0.2413793103448276,
            "na_confidence_pct": 0.4942528735632184,
            "avg_feature_coverage": 0.8212643678160917,
            "observable_run_pct": 0.9885057471264368,
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
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.8,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.8,
            "retail_qty_pct": 0.2,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.8,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.8,
            "retail_notional_pct": 0.2,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.8,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.8,
            "run_retail_pct": 0.2,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.8,
            "avg_trade_size": 1640.0,
            "avg_run_notional": 1640.0,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.2,
            "na_confidence_pct": 0.8,
            "avg_feature_coverage": 0.8200000000000001,
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
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 1.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 1.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 1.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 1.0,
            "avg_trade_size": 2863.3333333333335,
            "avg_run_notional": 2863.3333333333335,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.75,
            "observable_run_pct": 1.0,
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
            "retail_pct": 0.29411764705882354,
            "mixed_pct": 0.18052738336713997,
            "instit_pct": 0.27586206896551724,
            "ambiguous_pct": 0.24949290060851928,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24949290060851928,
            "retail_qty_pct": 0.06346673005416235,
            "mixed_qty_pct": 0.23288113146679798,
            "instit_qty_pct": 0.3708508073416303,
            "ambiguous_qty_pct": 0.3328013311374094,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3328013311374094,
            "retail_notional_pct": 0.06305436033201452,
            "mixed_notional_pct": 0.23553123202272913,
            "instit_notional_pct": 0.37562920448008263,
            "ambiguous_notional_pct": 0.3257852031651737,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3257852031651737,
            "run_retail_pct": 0.5287356321839081,
            "run_mixed_pct": 0.16091954022988506,
            "run_instit_pct": 0.1417624521072797,
            "run_unclear_pct": 0.1685823754789272,
            "avg_trade_size": 2764.3651115618663,
            "avg_run_notional": 5221.578544061303,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.10344827586206896,
            "medium_confidence_pct": 0.31800766283524906,
            "low_confidence_pct": 0.24904214559386972,
            "na_confidence_pct": 0.32950191570881227,
            "avg_feature_coverage": 0.8586206896551722,
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
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.6923076923076923,
            "ambiguous_pct": 0.3076923076923077,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3076923076923077,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8589306029579067,
            "ambiguous_qty_pct": 0.1410693970420933,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1410693970420933,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.859655562693096,
            "ambiguous_notional_pct": 0.14034443730690405,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14034443730690405,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5555555555555556,
            "run_unclear_pct": 0.4444444444444444,
            "avg_trade_size": 2514.6923076923076,
            "avg_run_notional": 3632.3333333333335,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5555555555555556,
            "na_confidence_pct": 0.4444444444444444,
            "avg_feature_coverage": 0.8500000000000001,
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
            "retail_pct": 0.4066305818673884,
            "mixed_pct": 0.2361299052774019,
            "instit_pct": 0.2408660351826793,
            "ambiguous_pct": 0.10960757780784844,
            "unobservable_pct": 0.006765899864682003,
            "unclear_pct": 0.11637347767253044,
            "retail_qty_pct": 0.07967686604326897,
            "mixed_qty_pct": 0.19731090577103969,
            "instit_qty_pct": 0.5242073811763404,
            "ambiguous_qty_pct": 0.17899629281248272,
            "unobservable_qty_pct": 0.019808554196868257,
            "unclear_qty_pct": 0.19880484700935097,
            "retail_notional_pct": 0.0799969149305394,
            "mixed_notional_pct": 0.19826943560515897,
            "instit_notional_pct": 0.5228764549360446,
            "ambiguous_notional_pct": 0.1792962584224391,
            "unobservable_notional_pct": 0.019560936105817883,
            "unclear_notional_pct": 0.19885719452825698,
            "run_retail_pct": 0.7017543859649122,
            "run_mixed_pct": 0.17076023391812867,
            "run_instit_pct": 0.07485380116959064,
            "run_unclear_pct": 0.052631578947368425,
            "avg_trade_size": 1272.004397834912,
            "avg_run_notional": 2198.8567251461986,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.39883040935672515,
            "medium_confidence_pct": 0.3321637426900585,
            "low_confidence_pct": 0.0456140350877193,
            "na_confidence_pct": 0.22339181286549709,
            "avg_feature_coverage": 0.8737426900584793,
            "observable_run_pct": 0.9988304093567252,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3320659062103929,
            "mixed_pct": 0.10392902408111533,
            "instit_pct": 0.3257287705956908,
            "ambiguous_pct": 0.23827629911280102,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23827629911280102,
            "retail_qty_pct": 0.08160159164386968,
            "mixed_qty_pct": 0.08290806598690209,
            "instit_qty_pct": 0.5133582027687972,
            "ambiguous_qty_pct": 0.3221321396004311,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3221321396004311,
            "retail_notional_pct": 0.0816431924882629,
            "mixed_notional_pct": 0.08297748273077958,
            "instit_notional_pct": 0.5128666008791603,
            "ambiguous_notional_pct": 0.3225127239017972,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3225127239017972,
            "run_retail_pct": 0.5613636363636364,
            "run_mixed_pct": 0.09318181818181819,
            "run_instit_pct": 0.13863636363636364,
            "run_unclear_pct": 0.20681818181818182,
            "avg_trade_size": 2119.2015209125475,
            "avg_run_notional": 3800.1136363636365,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.2318181818181818,
            "medium_confidence_pct": 0.32272727272727275,
            "low_confidence_pct": 0.14545454545454545,
            "na_confidence_pct": 0.3,
            "avg_feature_coverage": 0.8404545454545453,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.27982954545454547,
            "mixed_pct": 0.07528409090909091,
            "instit_pct": 0.3053977272727273,
            "ambiguous_pct": 0.3210227272727273,
            "unobservable_pct": 0.018465909090909092,
            "unclear_pct": 0.3394886363636364,
            "retail_qty_pct": 0.06292631967062004,
            "mixed_qty_pct": 0.06581453942112701,
            "instit_qty_pct": 0.45252872856879495,
            "ambiguous_qty_pct": 0.3821053278436674,
            "unobservable_qty_pct": 0.03662508449579057,
            "unclear_qty_pct": 0.41873041233945796,
            "retail_notional_pct": 0.06351303997306576,
            "mixed_notional_pct": 0.06721649767875425,
            "instit_notional_pct": 0.45372357440545036,
            "ambiguous_notional_pct": 0.3781527296491144,
            "unobservable_notional_pct": 0.037394158293615254,
            "unclear_notional_pct": 0.41554688794272965,
            "run_retail_pct": 0.4640198511166253,
            "run_mixed_pct": 0.06699751861042183,
            "run_instit_pct": 0.1588089330024814,
            "run_unclear_pct": 0.3101736972704715,
            "avg_trade_size": 1860.5923295454545,
            "avg_run_notional": 3250.2655086848636,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3349875930521092,
            "low_confidence_pct": 0.2878411910669975,
            "na_confidence_pct": 0.3771712158808933,
            "avg_feature_coverage": 0.8339950372208436,
            "observable_run_pct": 0.9925558312655087,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7793427230046949,
            "mixed_pct": 0.11267605633802817,
            "instit_pct": 0.051643192488262914,
            "ambiguous_pct": 0.056338028169014086,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.056338028169014086,
            "retail_qty_pct": 0.09783089862771138,
            "mixed_qty_pct": 0.04161133244798584,
            "instit_qty_pct": 0.3749446657813192,
            "ambiguous_qty_pct": 0.4856131031429836,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4856131031429836,
            "retail_notional_pct": 0.09933063835847547,
            "mixed_notional_pct": 0.0422212727730853,
            "instit_notional_pct": 0.3722570962193666,
            "ambiguous_notional_pct": 0.4861909926490726,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4861909926490726,
            "run_retail_pct": 0.8177339901477833,
            "run_mixed_pct": 0.10837438423645321,
            "run_instit_pct": 0.019704433497536946,
            "run_unclear_pct": 0.054187192118226604,
            "avg_trade_size": 214.27464788732394,
            "avg_run_notional": 224.83004926108376,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.8177339901477833,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.019704433497536946,
            "na_confidence_pct": 0.1625615763546798,
            "avg_feature_coverage": 0.8485221674876846,
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
            "retail_pct": 0.15625,
            "mixed_pct": 0.03125,
            "instit_pct": 0.25,
            "ambiguous_pct": 0.5625,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5625,
            "retail_qty_pct": 0.0768277571251549,
            "mixed_qty_pct": 0.024783147459727387,
            "instit_qty_pct": 0.3469640644361834,
            "ambiguous_qty_pct": 0.5514250309789344,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5514250309789344,
            "retail_notional_pct": 0.07639341560086013,
            "mixed_notional_pct": 0.024875062749593533,
            "instit_notional_pct": 0.3469097230026898,
            "ambiguous_notional_pct": 0.5518217986468565,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5518217986468565,
            "run_retail_pct": 0.20833333333333334,
            "run_mixed_pct": 0.041666666666666664,
            "run_instit_pct": 0.20833333333333334,
            "run_unclear_pct": 0.5416666666666666,
            "avg_trade_size": 2085.421875,
            "avg_run_notional": 2780.5625,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4166666666666667,
            "na_confidence_pct": 0.5833333333333334,
            "avg_feature_coverage": 0.8312500000000002,
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
            "avg_trade_size": 240.00000000000003,
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
        "2w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2796780684104628,
            "mixed_pct": 0.15995975855130784,
            "instit_pct": 0.3762575452716298,
            "ambiguous_pct": 0.1841046277665996,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1841046277665996,
            "retail_qty_pct": 0.06633399422278657,
            "mixed_qty_pct": 0.19081883460684504,
            "instit_qty_pct": 0.5324095732436306,
            "ambiguous_qty_pct": 0.2104375979267378,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2104375979267378,
            "retail_notional_pct": 0.06591405264378847,
            "mixed_notional_pct": 0.19189067658994347,
            "instit_notional_pct": 0.536425936106724,
            "ambiguous_notional_pct": 0.2057693346595441,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2057693346595441,
            "run_retail_pct": 0.5257936507936508,
            "run_mixed_pct": 0.1488095238095238,
            "run_instit_pct": 0.17857142857142858,
            "run_unclear_pct": 0.14682539682539683,
            "avg_trade_size": 3165.804828973843,
            "avg_run_notional": 6243.670634920635,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.08928571428571429,
            "medium_confidence_pct": 0.33134920634920634,
            "low_confidence_pct": 0.2837301587301587,
            "na_confidence_pct": 0.29563492063492064,
            "avg_feature_coverage": 0.8589285714285713,
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
            "retail_pct": 0.03333333333333333,
            "mixed_pct": 0.06666666666666667,
            "instit_pct": 0.5333333333333333,
            "ambiguous_pct": 0.3,
            "unobservable_pct": 0.06666666666666667,
            "unclear_pct": 0.36666666666666664,
            "retail_qty_pct": 0.016271501627150162,
            "mixed_qty_pct": 0.046490004649000466,
            "instit_qty_pct": 0.6369130636913064,
            "ambiguous_qty_pct": 0.25383542538354253,
            "unobservable_qty_pct": 0.046490004649000466,
            "unclear_qty_pct": 0.300325430032543,
            "retail_notional_pct": 0.016416610320230503,
            "mixed_notional_pct": 0.046782770782697686,
            "instit_notional_pct": 0.6349969237891607,
            "ambiguous_notional_pct": 0.25305945919604295,
            "unobservable_notional_pct": 0.048744235911868085,
            "unclear_notional_pct": 0.30180369510791105,
            "run_retail_pct": 0.05,
            "run_mixed_pct": 0.05,
            "run_instit_pct": 0.45,
            "run_unclear_pct": 0.45,
            "avg_trade_size": 2736.05,
            "avg_run_notional": 4104.075,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8150000000000001,
            "observable_run_pct": 0.95,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.17582417582417584,
            "mixed_pct": 0.02197802197802198,
            "instit_pct": 0.3516483516483517,
            "ambiguous_pct": 0.3956043956043956,
            "unobservable_pct": 0.054945054945054944,
            "unclear_pct": 0.4505494505494505,
            "retail_qty_pct": 0.05179900744416874,
            "mixed_qty_pct": 0.018610421836228287,
            "instit_qty_pct": 0.607940446650124,
            "ambiguous_qty_pct": 0.29311414392059554,
            "unobservable_qty_pct": 0.028535980148883373,
            "unclear_qty_pct": 0.3216501240694789,
            "retail_notional_pct": 0.05159357893420745,
            "mixed_notional_pct": 0.018047695928939914,
            "instit_notional_pct": 0.611604885924428,
            "ambiguous_notional_pct": 0.29009496784574657,
            "unobservable_notional_pct": 0.028658871366678083,
            "unclear_notional_pct": 0.31875383921242467,
            "run_retail_pct": 0.2711864406779661,
            "run_mixed_pct": 0.03389830508474576,
            "run_instit_pct": 0.22033898305084745,
            "run_unclear_pct": 0.4745762711864407,
            "avg_trade_size": 3032.2582417582416,
            "avg_run_notional": 4676.872881355932,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4915254237288136,
            "na_confidence_pct": 0.5084745762711864,
            "avg_feature_coverage": 0.8211864406779662,
            "observable_run_pct": 0.9661016949152542,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.30170002151925973,
            "mixed_pct": 0.18398967075532602,
            "instit_pct": 0.32537120723047125,
            "ambiguous_pct": 0.18678717452119648,
            "unobservable_pct": 0.002151925973746503,
            "unclear_pct": 0.18893910049494297,
            "retail_qty_pct": 0.1002911942216655,
            "mixed_qty_pct": 0.13246896910738398,
            "instit_qty_pct": 0.5391810772559418,
            "ambiguous_qty_pct": 0.2251468171983537,
            "unobservable_qty_pct": 0.002911942216655008,
            "unclear_qty_pct": 0.2280587594150087,
            "retail_notional_pct": 0.10048610559394913,
            "mixed_notional_pct": 0.13267663572954355,
            "instit_notional_pct": 0.5396301489009694,
            "ambiguous_notional_pct": 0.22443381286546576,
            "unobservable_notional_pct": 0.0027732969100721433,
            "unclear_notional_pct": 0.2272071097755379,
            "run_retail_pct": 0.6208712302537099,
            "run_mixed_pct": 0.15509813307802778,
            "run_instit_pct": 0.11728099569171853,
            "run_unclear_pct": 0.10674964097654381,
            "avg_trade_size": 2853.537873897138,
            "avg_run_notional": 6347.72163714696,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.2173288654858784,
            "medium_confidence_pct": 0.36476783149832454,
            "low_confidence_pct": 0.15605552896122546,
            "na_confidence_pct": 0.26184777405457155,
            "avg_feature_coverage": 0.8686931546194351,
            "observable_run_pct": 0.9995213020584012,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2862190812720848,
            "mixed_pct": 0.08362779740871613,
            "instit_pct": 0.31507656065959955,
            "ambiguous_pct": 0.29858657243816256,
            "unobservable_pct": 0.016489988221436984,
            "unclear_pct": 0.31507656065959955,
            "retail_qty_pct": 0.054172069759441076,
            "mixed_qty_pct": 0.059253182311376926,
            "instit_qty_pct": 0.5158652446608623,
            "ambiguous_qty_pct": 0.34662714690237384,
            "unobservable_qty_pct": 0.02408235636594596,
            "unclear_qty_pct": 0.3707095032683198,
            "retail_notional_pct": 0.05370044033341852,
            "mixed_notional_pct": 0.06072376574439391,
            "instit_notional_pct": 0.5232149214091261,
            "ambiguous_notional_pct": 0.33921020639982746,
            "unobservable_notional_pct": 0.02315066611323408,
            "unclear_notional_pct": 0.36236087251306154,
            "run_retail_pct": 0.4941675503711559,
            "run_mixed_pct": 0.06998939554612937,
            "run_instit_pct": 0.15906680805938495,
            "run_unclear_pct": 0.27677624602332984,
            "avg_trade_size": 1993.4835100117787,
            "avg_run_notional": 3589.538706256628,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.016967126193001062,
            "medium_confidence_pct": 0.36585365853658536,
            "low_confidence_pct": 0.2704135737009544,
            "na_confidence_pct": 0.34676564156945916,
            "avg_feature_coverage": 0.8370625662778365,
            "observable_run_pct": 0.9925768822905621,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2703889585947302,
            "mixed_pct": 0.09347553324968633,
            "instit_pct": 0.32810539523212046,
            "ambiguous_pct": 0.308030112923463,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.308030112923463,
            "retail_qty_pct": 0.07632772923112098,
            "mixed_qty_pct": 0.07086748072622305,
            "instit_qty_pct": 0.4591338768335989,
            "ambiguous_qty_pct": 0.39367091320905706,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.39367091320905706,
            "retail_notional_pct": 0.07631548987937345,
            "mixed_notional_pct": 0.07096297838283512,
            "instit_notional_pct": 0.45707212664635666,
            "ambiguous_notional_pct": 0.39564940509143476,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.39564940509143476,
            "run_retail_pct": 0.48074534161490684,
            "run_mixed_pct": 0.08571428571428572,
            "run_instit_pct": 0.15403726708074533,
            "run_unclear_pct": 0.2795031055900621,
            "avg_trade_size": 2570.669071518193,
            "avg_run_notional": 5090.244099378882,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1267080745341615,
            "medium_confidence_pct": 0.3142857142857143,
            "low_confidence_pct": 0.1937888198757764,
            "na_confidence_pct": 0.3652173913043478,
            "avg_feature_coverage": 0.8377018633540372,
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
            "retail_pct": 0.6544502617801047,
            "mixed_pct": 0.14136125654450263,
            "instit_pct": 0.09162303664921466,
            "ambiguous_pct": 0.112565445026178,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.112565445026178,
            "retail_qty_pct": 0.08234806056834681,
            "mixed_qty_pct": 0.06399087326280854,
            "instit_qty_pct": 0.4344534328977391,
            "ambiguous_qty_pct": 0.4192076332711056,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4192076332711056,
            "retail_notional_pct": 0.08213978300904796,
            "mixed_notional_pct": 0.06442419329009529,
            "instit_notional_pct": 0.43506285531267513,
            "ambiguous_notional_pct": 0.4183731683881816,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4183731683881816,
            "run_retail_pct": 0.7307692307692307,
            "run_mixed_pct": 0.13609467455621302,
            "run_instit_pct": 0.038461538461538464,
            "run_unclear_pct": 0.09467455621301775,
            "avg_trade_size": 523.0994764397906,
            "avg_run_notional": 591.1952662721893,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5828402366863905,
            "medium_confidence_pct": 0.1390532544378698,
            "low_confidence_pct": 0.047337278106508875,
            "na_confidence_pct": 0.23076923076923078,
            "avg_feature_coverage": 0.8477810650887573,
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
            "run_unclear_pct": 1.0,
            "avg_trade_size": 300.0,
            "avg_run_notional": 300.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.55,
            "observable_run_pct": 0.0,
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
            "retail_pct": 0.2843560933448574,
            "mixed_pct": 0.1581676750216076,
            "instit_pct": 0.37337942955920483,
            "ambiguous_pct": 0.18409680207433016,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18409680207433016,
            "retail_qty_pct": 0.0710477758703243,
            "mixed_qty_pct": 0.18737810788401127,
            "instit_qty_pct": 0.49671256233285455,
            "ambiguous_qty_pct": 0.24486155391280992,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24486155391280992,
            "retail_notional_pct": 0.07091477329711324,
            "mixed_notional_pct": 0.18866982097520718,
            "instit_notional_pct": 0.49798455109997086,
            "ambiguous_notional_pct": 0.24243085462770872,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24243085462770872,
            "run_retail_pct": 0.5470232959447799,
            "run_mixed_pct": 0.14236410698878343,
            "run_instit_pct": 0.15703192407247626,
            "run_unclear_pct": 0.1535806729939603,
            "avg_trade_size": 3507.4788245462405,
            "avg_run_notional": 7002.852459016393,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.06471095772217429,
            "medium_confidence_pct": 0.3796376186367558,
            "low_confidence_pct": 0.25970664365832613,
            "na_confidence_pct": 0.29594477998274377,
            "avg_feature_coverage": 0.85,
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
            "retail_pct": 0.21487603305785125,
            "mixed_pct": 0.03305785123966942,
            "instit_pct": 0.32231404958677684,
            "ambiguous_pct": 0.40082644628099173,
            "unobservable_pct": 0.028925619834710745,
            "unclear_pct": 0.4297520661157025,
            "retail_qty_pct": 0.06419815493491722,
            "mixed_qty_pct": 0.01339567799823076,
            "instit_qty_pct": 0.5217995703273095,
            "ambiguous_qty_pct": 0.38759004170352584,
            "unobservable_qty_pct": 0.013016555036016682,
            "unclear_qty_pct": 0.4006065967395425,
            "retail_notional_pct": 0.06471698408386584,
            "mixed_notional_pct": 0.013157726315310408,
            "instit_notional_pct": 0.5209209483973644,
            "ambiguous_notional_pct": 0.3885173717827464,
            "unobservable_notional_pct": 0.01268696942071302,
            "unclear_notional_pct": 0.40120434120345944,
            "run_retail_pct": 0.31875,
            "run_mixed_pct": 0.0375,
            "run_instit_pct": 0.19375,
            "run_unclear_pct": 0.45,
            "avg_trade_size": 2905.46694214876,
            "avg_run_notional": 4394.51875,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5125,
            "na_confidence_pct": 0.4875,
            "avg_feature_coverage": 0.8171875,
            "observable_run_pct": 0.98125,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.22762148337595908,
            "mixed_pct": 0.09820971867007673,
            "instit_pct": 0.3838874680306905,
            "ambiguous_pct": 0.289769820971867,
            "unobservable_pct": 0.0005115089514066496,
            "unclear_pct": 0.29028132992327366,
            "retail_qty_pct": 0.06200201523209414,
            "mixed_qty_pct": 0.09392857341189406,
            "instit_qty_pct": 0.5051716680333963,
            "ambiguous_qty_pct": 0.3388965092551971,
            "unobservable_qty_pct": 1.2340674183371311e-06,
            "unclear_qty_pct": 0.3388977433226154,
            "retail_notional_pct": 0.06082333894261773,
            "mixed_notional_pct": 0.09328319347731667,
            "instit_notional_pct": 0.5065394841255171,
            "ambiguous_notional_pct": 0.3393526871775505,
            "unobservable_notional_pct": 1.296276998092513e-06,
            "unclear_notional_pct": 0.3393539834545486,
            "run_retail_pct": 0.45475773496789257,
            "run_mixed_pct": 0.10332749562171628,
            "run_instit_pct": 0.17104495037945125,
            "run_unclear_pct": 0.2708698190309399,
            "avg_trade_size": 2466.240588235294,
            "avg_run_notional": 5629.305720957384,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.06129597197898424,
            "medium_confidence_pct": 0.30939871570344424,
            "low_confidence_pct": 0.2551079976649154,
            "na_confidence_pct": 0.37419731465265615,
            "avg_feature_coverage": 0.8450087565674255,
            "observable_run_pct": 0.9994162288382954,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.26830631637786473,
            "mixed_pct": 0.10368921185019564,
            "instit_pct": 0.3077138065958636,
            "ambiguous_pct": 0.3124650642817216,
            "unobservable_pct": 0.007825600894354388,
            "unclear_pct": 0.320290665176076,
            "retail_qty_pct": 0.05437374797290852,
            "mixed_qty_pct": 0.08160150447663564,
            "instit_qty_pct": 0.49418786879437454,
            "ambiguous_qty_pct": 0.357435848516646,
            "unobservable_qty_pct": 0.012401030239435276,
            "unclear_qty_pct": 0.3698368787560813,
            "retail_notional_pct": 0.05432377772079044,
            "mixed_notional_pct": 0.08556477144944831,
            "instit_notional_pct": 0.4938206888922587,
            "ambiguous_notional_pct": 0.35592142574915636,
            "unobservable_notional_pct": 0.01036933618834616,
            "unclear_notional_pct": 0.36629076193750254,
            "run_retail_pct": 0.4937466014138119,
            "run_mixed_pct": 0.09135399673735727,
            "run_instit_pct": 0.14355628058727568,
            "run_unclear_pct": 0.2713431212615552,
            "avg_trade_size": 2112.139183901621,
            "avg_run_notional": 4109.425774877651,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.010331702011963024,
            "medium_confidence_pct": 0.3828167482327352,
            "low_confidence_pct": 0.24415443175638935,
            "na_confidence_pct": 0.36269711799891247,
            "avg_feature_coverage": 0.8445078847199563,
            "observable_run_pct": 0.9961935834692768,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2721830645939944,
            "mixed_pct": 0.1555469730616974,
            "instit_pct": 0.3136043255769045,
            "ambiguous_pct": 0.2577001062083615,
            "unobservable_pct": 0.0009655305590421936,
            "unclear_pct": 0.2586656367674037,
            "retail_qty_pct": 0.0814881036069853,
            "mixed_qty_pct": 0.12318715629915933,
            "instit_qty_pct": 0.46469016853112904,
            "ambiguous_qty_pct": 0.3296848762345376,
            "unobservable_qty_pct": 0.0009496953281887082,
            "unclear_qty_pct": 0.33063457156272635,
            "retail_notional_pct": 0.0823709460310899,
            "mixed_notional_pct": 0.12406766162491452,
            "instit_notional_pct": 0.4685374946813531,
            "ambiguous_notional_pct": 0.32405441443740446,
            "unobservable_notional_pct": 0.0009694832252380407,
            "unclear_notional_pct": 0.3250238976626425,
            "run_retail_pct": 0.578215527230591,
            "run_mixed_pct": 0.146234067207416,
            "run_instit_pct": 0.12166859791425261,
            "run_unclear_pct": 0.15388180764774045,
            "avg_trade_size": 3662.5065173312737,
            "avg_run_notional": 8790.864426419466,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.15388180764774045,
            "medium_confidence_pct": 0.3733487833140209,
            "low_confidence_pct": 0.17265353418308227,
            "na_confidence_pct": 0.30011587485515645,
            "avg_feature_coverage": 0.8669293163383545,
            "observable_run_pct": 0.9997682502896872,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6174334140435835,
            "mixed_pct": 0.14043583535108958,
            "instit_pct": 0.10411622276029056,
            "ambiguous_pct": 0.13801452784503632,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13801452784503632,
            "retail_qty_pct": 0.07697513111148706,
            "mixed_qty_pct": 0.060649636271358484,
            "instit_qty_pct": 0.40475384875655557,
            "ambiguous_qty_pct": 0.45762138386059886,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.45762138386059886,
            "retail_notional_pct": 0.07653066372315373,
            "mixed_notional_pct": 0.06075434918162134,
            "instit_notional_pct": 0.4035592560230692,
            "ambiguous_notional_pct": 0.45915573107215574,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.45915573107215574,
            "run_retail_pct": 0.7,
            "run_mixed_pct": 0.1361111111111111,
            "run_instit_pct": 0.044444444444444446,
            "run_unclear_pct": 0.11944444444444445,
            "avg_trade_size": 599.9430992736078,
            "avg_run_notional": 688.2680555555555,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5472222222222223,
            "medium_confidence_pct": 0.13055555555555556,
            "low_confidence_pct": 0.06666666666666667,
            "na_confidence_pct": 0.25555555555555554,
            "avg_feature_coverage": 0.8445833333333332,
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
            "retail_pct": 0.08695652173913043,
            "mixed_pct": 0.10869565217391304,
            "instit_pct": 0.43478260869565216,
            "ambiguous_pct": 0.30434782608695654,
            "unobservable_pct": 0.06521739130434782,
            "unclear_pct": 0.3695652173913044,
            "retail_qty_pct": 0.01654385204450224,
            "mixed_qty_pct": 0.01509897413668545,
            "instit_qty_pct": 0.1540962288686606,
            "ambiguous_qty_pct": 0.08459760150267302,
            "unobservable_qty_pct": 0.7296633434474787,
            "unclear_qty_pct": 0.8142609449501518,
            "retail_notional_pct": 0.016532200397705588,
            "mixed_notional_pct": 0.014908038553575934,
            "instit_notional_pct": 0.14989747649155535,
            "ambiguous_notional_pct": 0.08264096185360317,
            "unobservable_notional_pct": 0.7360213227035599,
            "unclear_notional_pct": 0.8186622845571631,
            "run_retail_pct": 0.12121212121212122,
            "run_mixed_pct": 0.12121212121212122,
            "run_instit_pct": 0.36363636363636365,
            "run_unclear_pct": 0.3939393939393939,
            "avg_trade_size": 11932.576086956522,
            "avg_run_notional": 16633.28787878788,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.48484848484848486,
            "na_confidence_pct": 0.5151515151515151,
            "avg_feature_coverage": 0.8015151515151516,
            "observable_run_pct": 0.9393939393939394,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.3333333333333333,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.6666666666666666,
            "unclear_pct": 0.6666666666666666,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.09090909090909091,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.9090909090909091,
            "unclear_qty_pct": 0.9090909090909091,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.09090909090909091,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.9090909090909091,
            "unclear_notional_pct": 0.9090909090909091,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.6666666666666666,
            "avg_trade_size": 220.0,
            "avg_run_notional": 220.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.6,
            "observable_run_pct": 0.33333333333333337,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5,
            "mixed_pct": 0.5,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.16666666666666666,
            "mixed_qty_pct": 0.8333333333333334,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.20895522388059704,
            "mixed_notional_pct": 0.7910447761194029,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.5,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 16.75,
            "avg_run_notional": 16.75,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "recent_trades": [
        {
          "trade_id": "BMLL-176",
          "timestamp": "2026-03-12T08:56:11.981700",
          "price": 0.25,
          "size": 16700.0,
          "notional": 4175.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3691,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-175",
          "timestamp": "2026-03-12T08:56:11.981700",
          "price": 0.25,
          "size": 37300.0,
          "notional": 9325.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3691,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-174",
          "timestamp": "2026-03-12T08:56:11.981600",
          "price": 0.25,
          "size": 10000.0,
          "notional": 2500.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3691,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-173",
          "timestamp": "2026-03-12T08:56:11.981600",
          "price": 0.25,
          "size": 200.0,
          "notional": 50.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3691,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-172",
          "timestamp": "2026-03-12T08:56:11.981600",
          "price": 0.25,
          "size": 4200.0,
          "notional": 1050.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3691,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-171",
          "timestamp": "2026-03-12T08:55:31.068400",
          "price": 0.25,
          "size": 3800.0,
          "notional": 950.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3690,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-170",
          "timestamp": "2026-03-12T08:55:31.068400",
          "price": 0.25,
          "size": 6200.0,
          "notional": 1550.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3690,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-169",
          "timestamp": "2026-03-12T08:54:51.219600",
          "price": 0.25,
          "size": 1000.0,
          "notional": 250.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3689,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-168",
          "timestamp": "2026-03-12T08:54:49.561300",
          "price": 0.25,
          "size": 1000.0,
          "notional": 250.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3689,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-167",
          "timestamp": "2026-03-12T08:45:04.034900",
          "price": 0.25,
          "size": 200.0,
          "notional": 50.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 3688,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-166",
          "timestamp": "2026-03-12T08:44:27.313300",
          "price": 0.25,
          "size": 500.0,
          "notional": 125.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3687,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-165",
          "timestamp": "2026-03-12T08:44:27.253000",
          "price": 0.25,
          "size": 100.0,
          "notional": 25.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3687,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-164",
          "timestamp": "2026-03-12T08:44:27.222900",
          "price": 0.25,
          "size": 1000.0,
          "notional": 250.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3687,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-163",
          "timestamp": "2026-03-12T08:44:27.132300",
          "price": 0.25,
          "size": 2100.0,
          "notional": 525.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3687,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-162",
          "timestamp": "2026-03-12T08:44:27.132300",
          "price": 0.25,
          "size": 25900.0,
          "notional": 6475.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3687,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-161",
          "timestamp": "2026-03-12T08:44:27.102100",
          "price": 0.25,
          "size": 3600.0,
          "notional": 900.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3687,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-160",
          "timestamp": "2026-03-12T08:44:27.102000",
          "price": 0.25,
          "size": 21400.0,
          "notional": 5350.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3687,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-159",
          "timestamp": "2026-03-12T08:44:27.102000",
          "price": 0.25,
          "size": 128600.0,
          "notional": 32150.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3687,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-158",
          "timestamp": "2026-03-12T08:43:05.935800",
          "price": 0.25,
          "size": 400.0,
          "notional": 100.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 3686,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-157",
          "timestamp": "2026-03-12T08:42:58.061300",
          "price": 0.25,
          "size": 13000.0,
          "notional": 3250.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3685,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-156",
          "timestamp": "2026-03-12T08:37:24.793200",
          "price": 0.25,
          "size": 1500.0,
          "notional": 375.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 3684,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-155",
          "timestamp": "2026-03-12T08:37:16.109200",
          "price": 0.25,
          "size": 50000.0,
          "notional": 12500.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3683,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-154",
          "timestamp": "2026-03-12T08:15:47.620800",
          "price": 0.25,
          "size": 1400.0,
          "notional": 350.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 3682,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-153",
          "timestamp": "2026-03-12T08:15:40.445200",
          "price": 0.255,
          "size": 15000.0,
          "notional": 3825.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3681,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-152",
          "timestamp": "2026-03-12T08:07:07.938000",
          "price": 0.25,
          "size": 5100.0,
          "notional": 1275.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3680,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-151",
          "timestamp": "2026-03-12T08:07:05.586300",
          "price": 0.25,
          "size": 20000.0,
          "notional": 5000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3680,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-150",
          "timestamp": "2026-03-12T08:06:56.512600",
          "price": 0.25,
          "size": 300.0,
          "notional": 75.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3679,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-149",
          "timestamp": "2026-03-12T08:06:55.789700",
          "price": 0.25,
          "size": 50000.0,
          "notional": 12500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3679,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-148",
          "timestamp": "2026-03-12T08:06:48.105400",
          "price": 0.25,
          "size": 400.0,
          "notional": 100.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3678,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-147",
          "timestamp": "2026-03-12T08:06:44.941200",
          "price": 0.25,
          "size": 600.0,
          "notional": 150.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3678,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
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
      "total_trades": 2313,
      "price_moving_trades": 375,
      "pct_price_moving": 16.212710765239947,
      "all_movers": {
        "count": 375,
        "avg_size": 2828.2613333333334,
        "median_size": 225.0,
        "retail_count": 231,
        "mixed_count": 49,
        "institutional_count": 51,
        "ambiguous_count": 44,
        "unobservable_count": 0,
        "retail_pct": 61.6,
        "mixed_pct": 13.066666666666665,
        "instit_pct": 13.600000000000001,
        "unclear_pct": 11.733333333333333
      },
      "positive_movers": {
        "count": 193,
        "avg_size": 1056.4663212435232,
        "median_size": 25.0,
        "retail_count": 153,
        "mixed_count": 20,
        "institutional_count": 15,
        "ambiguous_count": 5,
        "unobservable_count": 0,
        "retail_pct": 79.27461139896373,
        "mixed_pct": 10.362694300518134,
        "instit_pct": 7.772020725388601,
        "unclear_pct": 2.5906735751295336
      },
      "negative_movers": {
        "count": 182,
        "avg_size": 4707.142857142857,
        "median_size": 2200.0,
        "retail_count": 78,
        "mixed_count": 29,
        "institutional_count": 36,
        "ambiguous_count": 39,
        "unobservable_count": 0,
        "retail_pct": 42.857142857142854,
        "mixed_pct": 15.934065934065933,
        "instit_pct": 19.78021978021978,
        "unclear_pct": 21.428571428571427
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
        "n_days_short_data": 22,
        "window_days": 21
      },
      "periods": {
        "1W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0014961530196973046,
            "max_short_ratio": 0.008460492521528931,
            "interpretation": "Low short interest"
          }
        },
        "2W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.000872755928156761,
            "max_short_ratio": 0.008460492521528931,
            "interpretation": "Low short interest"
          }
        },
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.007541666533716993,
            "max_short_ratio": 0.0924792304328815,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.20531643273392206,
        "interpretation": "Moderate negative - shorts somewhat predict drops"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.0011636745708756813
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
            "month": "2026-03",
            "avg_short_ratio": 0.0011636745708756813,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205,
            "change_pct": 1167.8087061345889
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": -38.527221284554955
          }
        ],
        "interpretation": "Shorts covering significantly (-92% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          "avg_short_ratio": 0.000872755928156761,
          "max_short_ratio": 0.008460492521528931,
          "is_target": true
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.65901786755033e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "QS9",
          "avg_short_ratio": 0.0004945944075723653,
          "max_short_ratio": 0.036503810997868175,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.003416866095868938,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0035167804224893948,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "9MT",
          "avg_short_ratio": 0.012545882872684346,
          "max_short_ratio": 0.14153787262548448,
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
          "opening": 0.0002478450662484589,
          "continuous": 0.9915643031387732,
          "closing": 0.007831904093451301,
          "auctions": 0.008435696861226801,
          "other": 0.0
        },
        "1W": {
          "opening": 0.006013747419613731,
          "continuous": 0.9839414626647555,
          "closing": 0.007780089200509489,
          "auctions": 0.016058537335244583,
          "other": 0.0
        },
        "2W": {
          "opening": 0.009215233814932933,
          "continuous": 0.9817270978403775,
          "closing": 0.004232534528262442,
          "auctions": 0.018272902159622465,
          "other": 0.0
        },
        "1M": {
          "opening": 0.012797989711527874,
          "continuous": 0.9652315186609177,
          "closing": 0.016847877251796244,
          "auctions": 0.034768481339082294,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.19292860599910022,
        "1W": 0.1818154451953586,
        "2W": 0.19984656418999922,
        "1M": 0.213496849346013
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0151
        },
        {
          "time": "09:00",
          "avg_share": 0.11
        },
        {
          "time": "09:30",
          "avg_share": 0.0962
        },
        {
          "time": "10:00",
          "avg_share": 0.0502
        },
        {
          "time": "10:30",
          "avg_share": 0.0608
        },
        {
          "time": "11:00",
          "avg_share": 0.0239
        },
        {
          "time": "11:30",
          "avg_share": 0.0504
        },
        {
          "time": "12:00",
          "avg_share": 0.0023
        },
        {
          "time": "12:30",
          "avg_share": 0.0335
        },
        {
          "time": "13:00",
          "avg_share": 0.0595
        },
        {
          "time": "13:30",
          "avg_share": 0.0563
        },
        {
          "time": "14:00",
          "avg_share": 0.0573
        },
        {
          "time": "14:30",
          "avg_share": 0.0673
        },
        {
          "time": "15:00",
          "avg_share": 0.0671
        },
        {
          "time": "15:30",
          "avg_share": 0.0919
        },
        {
          "time": "16:00",
          "avg_share": 0.0668
        },
        {
          "time": "16:30",
          "avg_share": 0.0691
        },
        {
          "time": "17:00",
          "avg_share": 0.0224
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 7.01666376517198,
          "hhi": 0.19108459651695994,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 5.766364857520304,
          "hhi": 0.2466878381010111,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.6370733758085194,
          "hhi": 0.34778245202278707,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.5077390068045617,
          "hhi": 0.6533276907163382,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 8.293779336068509,
          "hhi": 0.5071386783499799,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.79975231762423,
          "hhi": 0.7812223267735395,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.79465970455815,
          "hhi": 0.8104933195309614,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "9MT",
          "auctions_pct": 4.754670680975788,
          "hhi": 0.17242855591464423,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "QS9",
          "auctions_pct": 5.972005011960147,
          "hhi": 0.45323538195100804,
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
