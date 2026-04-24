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
      "ticker": "1836",
      "name": "STELLA HOLDINGS",
      "marketCap": 12729572545.0,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "1361",
      "name": "361 DEGREES",
      "marketCap": 14267005800.0,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "1440",
      "name": "STAR SHINE HLDG",
      "marketCap": 16666757100.0,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "1368",
      "name": "XTEP INT'L",
      "marketCap": 12627325602.0,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "551",
      "name": "YUE YUEN IND",
      "marketCap": 25672903776.0,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "2331",
      "name": "LI NING",
      "marketCap": 57434561591.659996,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "933",
      "name": "VIVA GOODS",
      "marketCap": 6174316651.28,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "82331",
      "name": "LI NING-R",
      "marketCap": 51696275060.0,
      "sector": "Footwear",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    },
    {
      "ticker": "2232",
      "name": "CRYSTAL INTL",
      "marketCap": 18029835040.0,
      "sector": "Apparel",
      "industry": "Consumer Discretionary - Textiles & Clothing"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1836",
    "company": "STELLA HOLDINGS",
    "asof_date": "2026-04-13",
    "industry": "Consumer Discretionary - Textiles & Clothing",
    "sector": "Footwear",
    "market_cap_display": "12.7B",
    "market_cap_category": "large",
    "universe_total": 2576,
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
          "score_pca": 75.65993788819875,
          "score_pca_percentile": 75.65993788819875,
          "rank_pca": 628,
          "total": 2576,
          "adv_notional_sgd": 15757895.0,
          "adv_volume_shares": 1041500.0,
          "free_float_shares": 614758989.0,
          "turnover_ratio": 0.001694159855546252,
          "votes": 1059.0,
          "trades": 1059.0,
          "spread_pct": 0.0017870116790548415,
          "spread_ticks": null,
          "amihud": 4.580464439589669e-10,
          "volatility": 0.13899484000876147
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5365337895742821,
          "loadings": {
            "log_adv": 0.5421941507658652,
            "log_trades": 0.5059716800137949,
            "log_turnover": 0.5023732484268949,
            "neg_spread": 0.40255774248878545,
            "neg_amihud": 0.02972322281039682,
            "neg_vol": -0.1862876140606398
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
          "peer_median_adv": 38960960.0,
          "peer_median_score_pca": 86.54891304347827,
          "peer_median_trades": 1517.5,
          "peer_median_volatility": 0.44849187589392314,
          "peer_median_spread_pct": 0.0034485855582785723,
          "peer_median_spread_ticks": 1.759041942074838,
          "peer_median_amihud": 4.169256516610065e-10,
          "peer_median_turnover_ratio": 0.005464067249988385,
          "target_vs_peer": {
            "score_pca_delta": -10.89,
            "adv_delta_pct": -59.6,
            "trades_delta_pct": -30.21,
            "volatility_delta_pct": 69.01,
            "spread_pct_delta_pct": 48.18,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": -9.86,
            "turnover_ratio_delta_pct": -68.99
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1836",
            "score_pca": 75.65993788819875,
            "rank_pca": 628,
            "adv": 15757895.0,
            "trades": 1059.0,
            "volatility": 0.13899484000876147,
            "spread_pct": 0.0017870116790548415,
            "spread_ticks": null,
            "amihud": 4.580464439589669e-10,
            "turnover_ratio": 0.001694159855546252,
            "is_target": true
          },
          {
            "ticker": "1361",
            "score_pca": 86.95652173913044,
            "rank_pca": 337,
            "adv": 70766400.0,
            "trades": 1584.0,
            "volatility": 0.4318371809022496,
            "spread_pct": 0.003832103064835433,
            "spread_ticks": 2.6147110332749564,
            "amihud": 2.2892636266377769e-10,
            "turnover_ratio": 0.014299965291072934,
            "is_target": false
          },
          {
            "ticker": "1440",
            "score_pca": 70.72981366459628,
            "rank_pca": 755,
            "adv": 17761275.0,
            "trades": 246.0,
            "volatility": 0.46514657088559663,
            "spread_pct": 0.017195802798406268,
            "spread_ticks": null,
            "amihud": 1.2795969167345398e-10,
            "turnover_ratio": 0.0015407303693162255,
            "is_target": false
          },
          {
            "ticker": "1368",
            "score_pca": 92.2748447204969,
            "rank_pca": 200,
            "adv": 67344750.0,
            "trades": 6248.0,
            "volatility": 0.3763757277661102,
            "spread_pct": 0.0026832612485111237,
            "spread_ticks": 1.2167457047345098,
            "amihud": 4.169256516610065e-10,
            "turnover_ratio": 0.011268367269233687,
            "is_target": false
          },
          {
            "ticker": "551",
            "score_pca": 86.1413043478261,
            "rank_pca": 358,
            "adv": 56712000.0,
            "trades": 2383.0,
            "volatility": 0.3092896975213419,
            "spread_pct": 0.0019860905685304977,
            "spread_ticks": null,
            "amihud": 4.300720112575634e-10,
            "turnover_ratio": 0.005909608272449891,
            "is_target": false
          },
          {
            "ticker": "2331",
            "score_pca": 95.69099378881988,
            "rank_pca": 112,
            "adv": 307462761.76,
            "trades": 7435.0,
            "volatility": 0.6014182437592125,
            "spread_pct": 0.0010376382972049733,
            "spread_ticks": null,
            "amihud": 1.1029967754187053e-10,
            "turnover_ratio": 0.007620193156992962,
            "is_target": false
          },
          {
            "ticker": "933",
            "score_pca": 95.45807453416148,
            "rank_pca": 118,
            "adv": 3572440.0,
            "trades": 349.0,
            "volatility": 5.182619594867629,
            "spread_pct": 0.019250112725885345,
            "spread_ticks": 1.1550468262226847,
            "amihud": 9.330690881675671e-09,
            "turnover_ratio": 0.00166226622264826,
            "is_target": false
          },
          {
            "ticker": "82331",
            "score_pca": 15.372670807453417,
            "rank_pca": 2181,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.0032433852908330487,
            "spread_ticks": null,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "2232",
            "score_pca": 82.95807453416148,
            "rank_pca": 440,
            "adv": 21209920.0,
            "trades": 1451.0,
            "volatility": 0.6085772441151442,
            "spread_pct": 0.0036537858257240964,
            "spread_ticks": 2.301338179415166,
            "amihud": 1.234994985281066e-09,
            "turnover_ratio": 0.00501852622752688,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Footwear",
          "sector_count": 14,
          "market_count": 2576,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.45538068815349253,
              "median": 0.2995098745205822,
              "min": 0.0,
              "max": 21.951956473421735,
              "p5": 0.0,
              "p95": 1.4093731639647114,
              "count": 2576
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59122167.303579345,
              "median": 252316.0,
              "min": 0.0,
              "max": 10355121000.0,
              "p5": 0.0,
              "p95": 254971566.54,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04854834441141965,
              "median": 0.027987082884822406,
              "min": 0.0004461756629917344,
              "max": 0.7648559970834851,
              "p5": 0.0014324597898074246,
              "p95": 0.1599403098239771,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0065250122747281215,
              "median": 0.0010286626312121148,
              "min": 0.0,
              "max": 2.271727824179446,
              "p5": 0.0,
              "p95": 0.021300561369894604,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3905492798207699e-05,
              "median": 6.909472437596244e-09,
              "min": 0.0,
              "max": 0.019525148391127775,
              "p5": 0.0,
              "p95": 8.165515057712393e-06,
              "count": 2183
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1126.8377329192547,
              "median": 22.0,
              "min": 0.0,
              "max": 69247.0,
              "p5": 0.0,
              "p95": 6156.5,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.583661361973686,
              "median": 0.23031003716706708,
              "min": 0.0,
              "max": 5.182619594867629,
              "p5": 0.0,
              "p95": 2.2048387166471564,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 38592488.697142854,
              "median": 2010220.0,
              "min": 0.0,
              "max": 307462761.76,
              "p5": 0.0,
              "p95": 153610126.6159999,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.020996359456936422,
              "median": 0.01671077617874458,
              "min": 0.0010376382972049733,
              "max": 0.10138248847926272,
              "p5": 0.0015247309954073876,
              "p95": 0.06234673884501177,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003219575669371669,
              "median": 0.0009567319259234257,
              "min": 0.0,
              "max": 0.014299965291072934,
              "p5": 0.0,
              "p95": 0.012329426576877422,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5054731839976424e-08,
              "median": 4.2349883145928494e-10,
              "min": 0.0,
              "max": 2.3140916611707012e-07,
              "p5": 0.0,
              "p95": 1.2142537223759083e-07,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1382.7142857142858,
              "median": 135.0,
              "min": 0.0,
              "max": 7435.0,
              "p5": 0.0,
              "p95": 6663.45,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 68103693.345,
              "median": 38960960.0,
              "min": 0.0,
              "max": 307462761.76,
              "p5": 1250354.0000000002,
              "p95": 224619035.14399987,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2462.0,
              "median": 1517.5,
              "min": 0.0,
              "max": 7435.0,
              "p5": 86.10000000000001,
              "p95": 7019.549999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9969080324771605,
              "median": 0.44849187589392314,
              "min": 0.0,
              "max": 5.182619594867629,
              "p5": 0.10825139413246967,
              "p95": 3.5817047721042568,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006610272477491347,
              "median": 0.0034485855582785723,
              "min": 0.0010376382972049733,
              "max": 0.019250112725885345,
              "p5": 0.0013695965921689068,
              "p95": 0.018531104251267666,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.821960435911829,
              "median": 1.759041942074838,
              "min": 1.1550468262226847,
              "max": 2.6147110332749564,
              "p5": 1.1643016579994585,
              "p95": 2.5677051051959876,
              "count": 4
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.69712418025063e-09,
              "median": 4.169256516610065e-10,
              "min": 1.1029967754187053e-10,
              "max": 9.330690881675671e-09,
              "p5": 1.1559768178134557e-10,
              "p95": 6.9019821127572844e-09,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0059149571011551045,
              "median": 0.005464067249988385,
              "min": 0.0,
              "max": 0.014299965291072934,
              "p5": 0.000539255629260679,
              "p95": 0.013238905983429196,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.0072178477690287846,
            "market": -0.003911099438221655,
            "sector": -0.0036089238845143923,
            "peers": -0.012195121951219523,
            "vs_market": -0.00330674833080713,
            "vs_sector": -0.0036089238845143923,
            "vs_peers": 0.0049772741821907385
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 79.11490683229813,
          "score_pca_percentile": 79.11490683229813,
          "rank_pca": 539,
          "total": 2576,
          "adv_notional_sgd": 18419989.41,
          "adv_volume_shares": 1287211.0,
          "free_float_shares": 614758989.0,
          "turnover_ratio": 0.0020938465691959164,
          "votes": 1056.0,
          "trades": 1056.0,
          "spread_pct": 0.002028125776344734,
          "spread_ticks": null,
          "amihud": 3.3409773558845345e-10,
          "volatility": 0.23928347379679912
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5652953676446191,
          "loadings": {
            "log_adv": 0.5257653882334109,
            "log_trades": 0.481742192444087,
            "log_turnover": 0.4845905077124492,
            "neg_spread": 0.461239295655666,
            "neg_amihud": 0.1945902144220682,
            "neg_vol": 0.07784739548735399
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
          "peer_median_adv": 32383871.049999997,
          "peer_median_score_pca": 84.4138198757764,
          "peer_median_trades": 1869.5,
          "peer_median_volatility": 0.46235031529158577,
          "peer_median_spread_pct": 0.0028569629039305097,
          "peer_median_spread_ticks": 1.4686917646848774,
          "peer_median_amihud": 4.854841276882336e-10,
          "peer_median_turnover_ratio": 0.007432627672474096,
          "target_vs_peer": {
            "score_pca_delta": -5.3,
            "adv_delta_pct": -43.1,
            "trades_delta_pct": -43.51,
            "volatility_delta_pct": 48.25,
            "spread_pct_delta_pct": 29.01,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 31.18,
            "turnover_ratio_delta_pct": -71.83
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1836",
            "score_pca": 79.11490683229813,
            "rank_pca": 539,
            "adv": 18419989.41,
            "trades": 1056.0,
            "volatility": 0.23928347379679912,
            "spread_pct": 0.002028125776344734,
            "spread_ticks": null,
            "amihud": 3.3409773558845345e-10,
            "turnover_ratio": 0.0020938465691959164,
            "is_target": true
          },
          {
            "ticker": "1361",
            "score_pca": 85.40372670807453,
            "rank_pca": 377,
            "adv": 39044810.0,
            "trades": 1819.0,
            "volatility": 0.3878847147859292,
            "spread_pct": 0.002765647376170968,
            "spread_ticks": 1.5811249323958896,
            "amihud": 3.5374225646802713e-10,
            "turnover_ratio": 0.009242830529887138,
            "is_target": false
          },
          {
            "ticker": "1440",
            "score_pca": 71.70031055900621,
            "rank_pca": 730,
            "adv": 16797000.0,
            "trades": 238.0,
            "volatility": 0.6393138423661134,
            "spread_pct": 0.014869077535659707,
            "spread_ticks": null,
            "amihud": 1.1579259863696586e-09,
            "turnover_ratio": 0.0014690017673927515,
            "is_target": false
          },
          {
            "ticker": "1368",
            "score_pca": 90.06211180124224,
            "rank_pca": 257,
            "adv": 65326222.300000004,
            "trades": 3456.0,
            "volatility": 0.4558755794973738,
            "spread_pct": 0.0027699260358701183,
            "spread_ticks": 1.3562585969738652,
            "amihud": 4.169256516610065e-10,
            "turnover_ratio": 0.010363187319127101,
            "is_target": false
          },
          {
            "ticker": "551",
            "score_pca": 91.07142857142857,
            "rank_pca": 231,
            "adv": 87677840.0,
            "trades": 3684.0,
            "volatility": 0.497035261207922,
            "spread_pct": 0.0017343705417793413,
            "spread_ticks": null,
            "amihud": 2.732259344415528e-10,
            "turnover_ratio": 0.009156900087962714,
            "is_target": false
          },
          {
            "ticker": "2331",
            "score_pca": 97.86490683229813,
            "rank_pca": 56,
            "adv": 507594843.0,
            "trades": 10763.0,
            "volatility": 0.4688250510857978,
            "spread_pct": 0.0010482035282097556,
            "spread_ticks": null,
            "amihud": 4.101871038383395e-11,
            "turnover_ratio": 0.01215365421026729,
            "is_target": false
          },
          {
            "ticker": "933",
            "score_pca": 60.36490683229814,
            "rank_pca": 1022,
            "adv": 946156.0,
            "trades": 62.0,
            "volatility": 0.5761983848264,
            "spread_pct": 0.020453178263484903,
            "spread_ticks": 1.1590909090909092,
            "amihud": 2.7287857720040156e-08,
            "turnover_ratio": 0.0005034687628888829,
            "is_target": false
          },
          {
            "ticker": "82331",
            "score_pca": 23.253105590062113,
            "rank_pca": 1978,
            "adv": 10854.170248590706,
            "trades": 1.0,
            "volatility": 0.45408018791985694,
            "spread_pct": 0.0029439997719909014,
            "spread_ticks": null,
            "amihud": 6.958264504872654e-07,
            "turnover_ratio": 2.753515433530002e-07,
            "is_target": false
          },
          {
            "ticker": "2232",
            "score_pca": 83.42391304347827,
            "rank_pca": 428,
            "adv": 25722932.099999998,
            "trades": 1920.0,
            "volatility": 0.4213376038251599,
            "spread_pct": 0.0034470796506989357,
            "spread_ticks": 2.18756145526057,
            "amihud": 5.540426037154608e-10,
            "turnover_ratio": 0.005708355256985479,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Footwear",
          "sector_count": 14,
          "market_count": 2576,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6804640536670991,
              "median": 0.5557149783127365,
              "min": 0.0,
              "max": 10.049160326010378,
              "p5": 0.20727705144473446,
              "p95": 1.5941721104879674,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 64309155.04327383,
              "median": 221797.5,
              "min": 0.0,
              "max": 12484489600.0,
              "p5": 0.0,
              "p95": 245012729.9,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04641870402197923,
              "median": 0.029013203613620597,
              "min": 0.0005957156584162828,
              "max": 0.7873945213823746,
              "p5": 0.0014889976315259788,
              "p95": 0.1485737622237792,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004498458752410253,
              "median": 0.0008751640932674877,
              "min": 0.0,
              "max": 0.6759592138881427,
              "p5": 0.0,
              "p95": 0.016590545900840005,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3048494165648461e-06,
              "median": 4.6395854066480917e-08,
              "min": 0.0,
              "max": 0.0004281949934123848,
              "p5": 3.630791306986329e-11,
              "p95": 4.973974037584155e-06,
              "count": 2567
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1153.1350931677018,
              "median": 20.0,
              "min": 0.0,
              "max": 79388.0,
              "p5": 0.0,
              "p95": 6002.25,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.42188461306906166,
              "median": 0.46235031529158577,
              "min": 0.11712962697710219,
              "max": 0.6393138423661134,
              "p5": 0.12480541684229766,
              "p95": 0.5982887949652996,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 52645641.06573205,
              "median": 767778.0,
              "min": 0.0,
              "max": 507594843.0,
              "p5": 0.0,
              "p95": 234648791.04999986,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.025461606383819696,
              "median": 0.017661127899572304,
              "min": 0.0010482035282097556,
              "max": 0.12723373838456029,
              "p5": 0.0014942120870299863,
              "p95": 0.07767274157552917,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0033730620620709612,
              "median": 0.0007756330091681648,
              "min": 0.0,
              "max": 0.01215365421026729,
              "p5": 0.0,
              "p95": 0.010989850731026166,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.198240487258254e-07,
              "median": 2.5855407177070874e-08,
              "min": 4.101871038383395e-11,
              "max": 6.958264504872654e-07,
              "p5": 1.9195340602135122e-10,
              "p95": 6.053015408914513e-07,
              "count": 14
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1511.2142857142858,
              "median": 45.5,
              "min": 0.0,
              "max": 10763.0,
              "p5": 0.0,
              "p95": 6161.649999999998,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 92890082.19628108,
              "median": 32383871.049999997,
              "min": 10854.170248590706,
              "max": 507594843.0,
              "p5": 338209.81066158396,
              "p95": 360623891.9499998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2742.875,
              "median": 1869.5,
              "min": 1.0,
              "max": 10763.0,
              "p5": 22.35,
              "p95": 8285.349999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4875688281893191,
              "median": 0.46235031529158577,
              "min": 0.3878847147859292,
              "max": 0.6393138423661134,
              "p5": 0.3995932259496599,
              "p95": 0.6172234322272137,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0062539353379830786,
              "median": 0.0028569629039305097,
              "min": 0.0010482035282097556,
              "max": 0.020453178263484903,
              "p5": 0.0012883619829591106,
              "p95": 0.018498743008746082,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.5710089734303085,
              "median": 1.4686917646848774,
              "min": 1.1590909090909092,
              "max": 2.18756145526057,
              "p5": 1.1886660622733525,
              "p95": 2.096595976830868,
              "count": 4
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.073889866879313e-08,
              "median": 4.854841276882336e-10,
              "min": 4.101871038383395e-11,
              "max": 6.958264504872654e-07,
              "p5": 1.2229123880403556e-10,
              "p95": 4.618379430187362e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006074709160756839,
              "median": 0.007432627672474096,
              "min": 2.753515433530002e-07,
              "max": 0.01215365421026729,
              "p5": 0.00017639304551428847,
              "p95": 0.011526990798368223,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.04705882352941182,
            "market": -0.007811259659372016,
            "sector": 0.037448983653362244,
            "peers": 0.04781455264533885,
            "vs_market": 0.054870083188783836,
            "vs_sector": 0.009609839876049575,
            "vs_peers": -0.0007557291159270285
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 81.09472049689441,
          "score_pca_percentile": 81.09472049689441,
          "rank_pca": 488,
          "total": 2576,
          "adv_notional_sgd": 22241652.2,
          "adv_volume_shares": 1523277.0,
          "free_float_shares": 614758989.0,
          "turnover_ratio": 0.0024778442076590764,
          "votes": 1095.0,
          "trades": 1095.0,
          "spread_pct": 0.0017359815101868072,
          "spread_ticks": null,
          "amihud": 3.3467472921362077e-10,
          "volatility": 0.21493030775612387
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6168955913599982,
          "loadings": {
            "log_adv": 0.49906876739352124,
            "log_trades": 0.45259708956768363,
            "log_turnover": 0.4522303786631408,
            "neg_spread": 0.46143935024373584,
            "neg_amihud": 0.3308549211253371,
            "neg_vol": 0.1385015225734064
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
          "peer_median_adv": 23054644.5,
          "peer_median_score_pca": 82.91925465838509,
          "peer_median_trades": 1537.0,
          "peer_median_volatility": 0.3894404219223495,
          "peer_median_spread_pct": 0.0030095240393496294,
          "peer_median_spread_ticks": 1.7145041502839669,
          "peer_median_amihud": 4.715684851995354e-10,
          "peer_median_turnover_ratio": 0.005299589913578788,
          "target_vs_peer": {
            "score_pca_delta": -1.82,
            "adv_delta_pct": -3.5,
            "trades_delta_pct": -28.76,
            "volatility_delta_pct": 44.81,
            "spread_pct_delta_pct": 42.32,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 29.03,
            "turnover_ratio_delta_pct": -53.24
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1836",
            "score_pca": 81.09472049689441,
            "rank_pca": 488,
            "adv": 22241652.2,
            "trades": 1095.0,
            "volatility": 0.21493030775612387,
            "spread_pct": 0.0017359815101868072,
            "spread_ticks": null,
            "amihud": 3.3467472921362077e-10,
            "turnover_ratio": 0.0024778442076590764,
            "is_target": true
          },
          {
            "ticker": "1361",
            "score_pca": 80.86180124223603,
            "rank_pca": 494,
            "adv": 19640489.0,
            "trades": 930.0,
            "volatility": 0.2921353748403396,
            "spread_pct": 0.0030035935851822834,
            "spread_ticks": 1.7145041502839669,
            "amihud": 3.6761898374822473e-10,
            "turnover_ratio": 0.004979051038854414,
            "is_target": false
          },
          {
            "ticker": "1440",
            "score_pca": 69.56521739130434,
            "rank_pca": 785,
            "adv": 9481425.0,
            "trades": 188.0,
            "volatility": 0.6277756034809155,
            "spread_pct": 0.0188553935804538,
            "spread_ticks": 18.80016934801016,
            "amihud": 2.0463794234536362e-09,
            "turnover_ratio": 0.0014230954621617278,
            "is_target": false
          },
          {
            "ticker": "1368",
            "score_pca": 87.15062111801242,
            "rank_pca": 332,
            "adv": 46399575.12,
            "trades": 2290.0,
            "volatility": 0.33439556366536843,
            "spread_pct": 0.0027182059840505147,
            "spread_ticks": 1.3844033083891296,
            "amihud": 2.76750831888784e-10,
            "turnover_ratio": 0.006641987008504322,
            "is_target": false
          },
          {
            "ticker": "551",
            "score_pca": 89.16925465838509,
            "rank_pca": 280,
            "adv": 65206300.800000004,
            "trades": 3137.0,
            "volatility": 0.39335554293602776,
            "spread_pct": 0.0019010770196399558,
            "spread_ticks": null,
            "amihud": 2.0304055092990913e-10,
            "turnover_ratio": 0.006569303620964458,
            "is_target": false
          },
          {
            "ticker": "2331",
            "score_pca": 97.82608695652173,
            "rank_pca": 57,
            "adv": 449578752.0,
            "trades": 10414.0,
            "volatility": 0.4038426774060998,
            "spread_pct": 0.0010778533986257654,
            "spread_ticks": null,
            "amihud": 4.0938117946152935e-11,
            "turnover_ratio": 0.011518022794935663,
            "is_target": false
          },
          {
            "ticker": "933",
            "score_pca": 62.69409937888199,
            "rank_pca": 962,
            "adv": 1062720.0,
            "trades": 82.0,
            "volatility": 0.5074941052760301,
            "spread_pct": 0.018691588785046745,
            "spread_ticks": 1.1699604743083003,
            "amihud": 1.4954562368753663e-08,
            "turnover_ratio": 0.0005469727105416697,
            "is_target": false
          },
          {
            "ticker": "82331",
            "score_pca": 29.076086956521742,
            "rank_pca": 1828,
            "adv": 33355.03746233589,
            "trades": 1.0,
            "volatility": 0.3855253009086713,
            "spread_pct": 0.0030154544935169754,
            "spread_ticks": null,
            "amihud": 1.9039595648133032e-07,
            "turnover_ratio": 8.260546300590006e-07,
            "is_target": false
          },
          {
            "ticker": "2232",
            "score_pca": 84.97670807453416,
            "rank_pca": 388,
            "adv": 26468800.0,
            "trades": 2144.0,
            "volatility": 0.3662705121182928,
            "spread_pct": 0.0035539671624465327,
            "spread_ticks": 2.426017060367454,
            "amihud": 5.755179866508461e-10,
            "turnover_ratio": 0.005620128788303161,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Footwear",
          "sector_count": 14,
          "market_count": 2576,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7071491439943555,
              "median": 0.5794542716508736,
              "min": 0.0,
              "max": 8.224981731095266,
              "p5": 0.22121190865710774,
              "p95": 1.5865266729904104,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61519254.895679474,
              "median": 230944.0,
              "min": 0.0,
              "max": 13968603216.0,
              "p5": 0.0,
              "p95": 239325014.14999998,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04284195883727662,
              "median": 0.027128862094951047,
              "min": 0.0005607359268088029,
              "max": 0.5173652694610777,
              "p5": 0.0014388773987694728,
              "p95": 0.1353564638187657,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0040854276768171535,
              "median": 0.0008904739471300301,
              "min": 0.0,
              "max": 0.4102056640783613,
              "p5": 0.0,
              "p95": 0.01626861087639243,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.24868725009713e-07,
              "median": 4.322802925070572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.6644375118181316e-11,
              "p95": 3.663689956299134e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1089.9708850931677,
              "median": 20.0,
              "min": 0.0,
              "max": 80215.0,
              "p5": 0.0,
              "p95": 5980.0,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.40714265120227555,
              "median": 0.39859911017106375,
              "min": 0.21493030775612387,
              "max": 0.6569899113577429,
              "p5": 0.22346929075326646,
              "p95": 0.638000611237805,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 43922447.5112473,
              "median": 874760.0,
              "min": 0.0,
              "max": 449578752.0,
              "p5": 7605.0,
              "p95": 199736658.71999988,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.025260165011205753,
              "median": 0.018773491182750273,
              "min": 0.0010778533986257654,
              "max": 0.13320369470102103,
              "p5": 0.0015056366711404426,
              "p95": 0.07747180414483767,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025577582398221893,
              "median": 0.0005720506803856215,
              "min": 0.0,
              "max": 0.011518022794935663,
              "p5": 5.369355095383504e-07,
              "p95": 0.00834859953375529,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.309506233895068e-08,
              "median": 2.1600655753444408e-08,
              "min": 4.0938117946152935e-11,
              "max": 5.5293582079296e-07,
              "p5": 1.4630469938559446e-10,
              "p95": 3.2838454735239054e-07,
              "count": 14
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1301.857142857143,
              "median": 59.5,
              "min": 0.0,
              "max": 10414.0,
              "p5": 0.65,
              "p95": 5683.949999999997,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 77233927.11968279,
              "median": 23054644.5,
              "min": 33355.03746233589,
              "max": 449578752.0,
              "p5": 393632.77435051836,
              "p95": 315048394.0799998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2398.25,
              "median": 1537.0,
              "min": 1.0,
              "max": 10414.0,
              "p5": 29.35,
              "p95": 7867.049999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.41384933507896815,
              "median": 0.3894404219223495,
              "min": 0.2921353748403396,
              "max": 0.6277756034809155,
              "p5": 0.30692644092909965,
              "p95": 0.5856770791092056,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006602141751120321,
              "median": 0.0030095240393496294,
              "min": 0.0010778533986257654,
              "max": 0.0188553935804538,
              "p5": 0.001365981665980732,
              "p95": 0.01879806190206133,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.099010868271803,
              "median": 1.7145041502839669,
              "min": 1.1699604743083003,
              "max": 18.80016934801016,
              "p5": 1.2128490411244661,
              "p95": 15.525338890481617,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.6107595593087693e-08,
              "median": 4.715684851995354e-10,
              "min": 4.0938117946152935e-11,
              "max": 1.9039595648133032e-07,
              "p5": 9.76739694904676e-11,
              "p95": 1.289914685419284e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0046624234348619335,
              "median": 0.005299589913578788,
              "min": 8.260546300590006e-07,
              "max": 0.011518022794935663,
              "p5": 0.00019197738419912273,
              "p95": 0.00981141026968469,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.002636783124587705,
            "market": 0.058957371688082016,
            "sector": 0.03444869584893073,
            "peers": 0.11372430837473302,
            "vs_market": -0.06159415481266972,
            "vs_sector": -0.03708547897351844,
            "vs_peers": -0.11636109149932072
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 79.27018633540372,
          "score_pca_percentile": 79.27018633540372,
          "rank_pca": 535,
          "total": 2576,
          "adv_notional_sgd": 18790505.0,
          "adv_volume_shares": 1204500.0,
          "free_float_shares": 614758989.0,
          "turnover_ratio": 0.0019593044128713016,
          "votes": 1077.0,
          "trades": 1077.0,
          "spread_pct": 0.0019084563698073766,
          "spread_ticks": null,
          "amihud": 4.284018590795504e-10,
          "volatility": 0.2135303554851704
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6216687403222395,
          "loadings": {
            "log_adv": 0.4991145262019067,
            "log_trades": 0.4541151172880886,
            "log_turnover": 0.4521541573785128,
            "neg_spread": 0.4647282542844904,
            "neg_amihud": 0.33336737825935425,
            "neg_vol": 0.11451903218318861
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
          "peer_median_adv": 21183638.525,
          "peer_median_score_pca": 82.08462732919256,
          "peer_median_trades": 1443.0,
          "peer_median_volatility": 0.3610934634901677,
          "peer_median_spread_pct": 0.0030915136306753914,
          "peer_median_spread_ticks": 1.6547061933308194,
          "peer_median_amihud": 5.300666934310538e-10,
          "peer_median_turnover_ratio": 0.004919635131000121,
          "target_vs_peer": {
            "score_pca_delta": -2.81,
            "adv_delta_pct": -11.3,
            "trades_delta_pct": -25.36,
            "volatility_delta_pct": 40.87,
            "spread_pct_delta_pct": 38.27,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 19.18,
            "turnover_ratio_delta_pct": -60.17
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1836",
            "score_pca": 79.27018633540372,
            "rank_pca": 535,
            "adv": 18790505.0,
            "trades": 1077.0,
            "volatility": 0.2135303554851704,
            "spread_pct": 0.0019084563698073766,
            "spread_ticks": null,
            "amihud": 4.284018590795504e-10,
            "turnover_ratio": 0.0019593044128713016,
            "is_target": true
          },
          {
            "ticker": "1361",
            "score_pca": 80.90062111801242,
            "rank_pca": 493,
            "adv": 20423740.0,
            "trades": 1050.5,
            "volatility": 0.35102253005471107,
            "spread_pct": 0.0028201842615171685,
            "spread_ticks": 1.6547061933308194,
            "amihud": 4.798726150790111e-10,
            "turnover_ratio": 0.004979317350610517,
            "is_target": false
          },
          {
            "ticker": "1440",
            "score_pca": 69.21583850931677,
            "rank_pca": 794,
            "adv": 9235187.5,
            "trades": 161.0,
            "volatility": 0.5538822104383234,
            "spread_pct": 0.016561293520887577,
            "spread_ticks": 15.285759039066678,
            "amihud": 1.8815047606767213e-09,
            "turnover_ratio": 0.0013901003052769298,
            "is_target": false
          },
          {
            "ticker": "1368",
            "score_pca": 86.60714285714286,
            "rank_pca": 346,
            "adv": 39702852.5,
            "trades": 2243.5,
            "volatility": 0.2925837719873559,
            "spread_pct": 0.0025901853710260892,
            "spread_ticks": 1.3640005050104949,
            "amihud": 2.6860375883123886e-10,
            "turnover_ratio": 0.00566793791187537,
            "is_target": false
          },
          {
            "ticker": "551",
            "score_pca": 89.82919254658384,
            "rank_pca": 263,
            "adv": 64956034.620000005,
            "trades": 2982.5,
            "volatility": 0.3383180669271031,
            "spread_pct": 0.0015220681276167086,
            "spread_ticks": null,
            "amihud": 1.780763612893796e-10,
            "turnover_ratio": 0.006636147467729604,
            "is_target": false
          },
          {
            "ticker": "2331",
            "score_pca": 97.28260869565217,
            "rank_pca": 71,
            "adv": 335876216.19,
            "trades": 9123.5,
            "volatility": 0.36799957513447423,
            "spread_pct": 0.0008371865105221171,
            "spread_ticks": null,
            "amihud": 4.6027532043844856e-11,
            "turnover_ratio": 0.009774581906051362,
            "is_target": false
          },
          {
            "ticker": "933",
            "score_pca": 63.58695652173913,
            "rank_pca": 939,
            "adv": 1349273.46,
            "trades": 99.5,
            "volatility": 0.48929568760963393,
            "spread_pct": 0.019108011147452596,
            "spread_ticks": 1.1799930727489643,
            "amihud": 1.336861128620455e-08,
            "turnover_ratio": 0.0006234219554222301,
            "is_target": false
          },
          {
            "ticker": "82331",
            "score_pca": 32.64751552795031,
            "rank_pca": 1736,
            "adv": 54155.992298524,
            "trades": 2.0,
            "volatility": 0.3627325562021457,
            "spread_pct": 0.0033628429998336143,
            "spread_ticks": null,
            "amihud": 1.207187475069603e-07,
            "turnover_ratio": 1.376757716765001e-06,
            "is_target": false
          },
          {
            "ticker": "2232",
            "score_pca": 83.26863354037268,
            "rank_pca": 432,
            "adv": 21943537.05,
            "trades": 1835.5,
            "volatility": 0.35945437077818976,
            "spread_pct": 0.003463735080504459,
            "spread_ticks": 2.3304007308508514,
            "amihud": 5.802607717830965e-10,
            "turnover_ratio": 0.004859952911389725,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Footwear",
          "sector_count": 14,
          "market_count": 2576,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7408307343871665,
              "median": 0.5978604855525683,
              "min": 0.0,
              "max": 33.69234598783136,
              "p5": 0.22381753945873362,
              "p95": 1.5543264436522564,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 56542891.208101414,
              "median": 219410.125,
              "min": 0.0,
              "max": 11530530000.0,
              "p5": 0.0,
              "p95": 214127775.0,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042004487177423104,
              "median": 0.026651223195499653,
              "min": 0.000558678699550006,
              "max": 0.49098715795419084,
              "p5": 0.001390744598616606,
              "p95": 0.13470487233538153,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003659746886055854,
              "median": 0.000864143138348958,
              "min": 0.0,
              "max": 0.17601894736842105,
              "p5": 0.0,
              "p95": 0.014489803074043354,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.470128402567895e-07,
              "median": 4.630396367913572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 5.0443531668434034e-11,
              "p95": 3.6564790403449536e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1037.5366847826087,
              "median": 21.0,
              "min": 0.0,
              "max": 93269.5,
              "p5": 0.0,
              "p95": 5730.375,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4853519513894543,
              "median": 0.36536606566831,
              "min": 0.2135303554851704,
              "max": 1.8933946032986415,
              "p5": 0.2248465786830324,
              "p95": 1.0244811090037822,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 35141831.697307035,
              "median": 1132330.48,
              "min": 0.0,
              "max": 335876216.19,
              "p5": 1196.65,
              "p95": 159778098.1694999,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.024019909287536386,
              "median": 0.017834652334170087,
              "min": 0.0008371865105221171,
              "max": 0.10835639479625465,
              "p5": 0.0012823595616336014,
              "p95": 0.08104935628836177,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023468807604244716,
              "median": 0.0007528759980500979,
              "min": 0.0,
              "max": 0.009774581906051362,
              "p5": 8.948925158972507e-07,
              "p95": 0.007734599521142218,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.901700575318036e-08,
              "median": 1.9260146810965952e-08,
              "min": 4.6027532043844856e-11,
              "max": 5.46205565540752e-07,
              "p5": 1.3185927105344243e-10,
              "p95": 3.434367105936346e-07,
              "count": 14
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1204.392857142857,
              "median": 77.0,
              "min": 0.0,
              "max": 9123.5,
              "p5": 1.3,
              "p95": 5131.849999999998,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 61692624.66403732,
              "median": 21183638.525,
              "min": 54155.992298524,
              "max": 335876216.19,
              "p5": 507447.10599404067,
              "p95": 241054152.64049986,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2187.25,
              "median": 1443.0,
              "min": 2.0,
              "max": 9123.5,
              "p5": 36.125,
              "p95": 6974.149999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.38941109614149216,
              "median": 0.3610934634901677,
              "min": 0.2925837719873559,
              "max": 0.5538822104383234,
              "p5": 0.30859077521626743,
              "p95": 0.531276927448282,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006283188377420042,
              "median": 0.0030915136306753914,
              "min": 0.0008371865105221171,
              "max": 0.019108011147452596,
              "p5": 0.001076895076505224,
              "p95": 0.018216659978154838,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.362971908201561,
              "median": 1.6547061933308194,
              "min": 1.1799930727489643,
              "max": 15.285759039066678,
              "p5": 1.2167945592012703,
              "p95": 12.69468737742351,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.719021307410852e-08,
              "median": 5.300666934310538e-10,
              "min": 4.6027532043844856e-11,
              "max": 1.207187475069603e-07,
              "p5": 9.224462227978203e-11,
              "p95": 8.314619982969573e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004241604570759063,
              "median": 0.004919635131000121,
              "min": 1.376757716765001e-06,
              "max": 0.009774581906051362,
              "p5": 0.00021909257691367782,
              "p95": 0.008676129852638746,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.0013201320132021355,
            "market": 0.10999472576257396,
            "sector": 0.009907735482836744,
            "peers": 0.18870282530707505,
            "vs_market": -0.1113148577757761,
            "vs_sector": -0.011227867496038879,
            "vs_peers": -0.19002295732027719
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 75.7 vs peer median 86.5 (-10.9 pts).",
        "market_comparison": "Return -0.7% vs peers -1.2%."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average, with a 1M score of 79.1 showing workable access but not standout depth for the company’s size.",
        "market_comparison": "The stock returned 4.7% compared with 4.8% for peers, so trading conditions have sat alongside broadly in-line sector performance."
      },
      "3m": {
        "liquidity": "Three-month liquidity looks close to peer norms, with a 3M score of 81.1 keeping access broadly steady over the quarter.",
        "market_comparison": "The stock returned -0.3% compared with 11.4% for peers, which means tradability held near peer levels despite much weaker share performance."
      },
      "6m": {
        "liquidity": "Six-month tradability is average for its size, with a score of 79.3 sitting 2.8 points below the peer median and pointing to access that is serviceable rather than strong.",
        "market_comparison": "Primary average daily volume is HK$18.8M compared with a peer median of HK$21.2M, which helps explain why peer-relative access is a little less robust."
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
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.3260321320374468,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "32.6%",
          "display_range": null,
          "display_text": "32.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 32.6,
          "plain_english": "Market explains about 32.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.635320924513423,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "63.5%",
          "display_range": null,
          "display_text": "63.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 63.5,
          "plain_english": "Sector explains about 63.5% of price moves in the current state."
        },
        "company_share": {
          "median": 0.03864694344913013,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.9%",
          "display_range": null,
          "display_text": "3.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 3.9,
          "plain_english": "Company-specific explains about 3.9% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.11756729764237411,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.12",
          "display_range": null,
          "display_text": "0.12",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.12% stock move in the same direction in this state.",
          "value_num": 0.12
        },
        "beta_stock_lag": {
          "median": -0.02857694002544993,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.03",
          "display_range": null,
          "display_text": "-0.03",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.03
        },
        "beta_sector": {
          "median": 0.6114143275083215,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.61",
          "display_range": null,
          "display_text": "0.61",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.61% stock move in the same direction in this state.",
          "value_num": 0.61
        },
        "beta_market_lag": {
          "median": -0.19573432392822362,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.20",
          "display_range": null,
          "display_text": "-0.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.2
        },
        "beta_sector_lag": {
          "median": -0.4406394621603027,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.44",
          "display_range": null,
          "display_text": "-0.44",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.44
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
          "period_label": "2025-03-25 to 2025-03-31",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5094861644468438,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.9%",
            "display_range": null,
            "display_text": "50.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 50.9,
            "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.28507318450335273,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.5%",
              "display_range": null,
              "display_text": "28.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 28.5,
              "plain_english": "Market explains about 28.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20544065104980339,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.5%",
              "display_range": null,
              "display_text": "20.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 20.5,
              "plain_english": "Sector explains about 20.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5094861644468438,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.9%",
              "display_range": null,
              "display_text": "50.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 50.9,
              "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven, though based on only 5 trading days."
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
            "median": 0.5857893689995743,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.6%",
            "display_range": null,
            "display_text": "58.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 58.6,
            "plain_english": "Company-specific explains about 58.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.28927769475588316,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.9%",
              "display_range": null,
              "display_text": "28.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 28.9,
              "plain_english": "Market explains about 28.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12493293624454252,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.5%",
              "display_range": null,
              "display_text": "12.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 12.5,
              "plain_english": "Sector explains about 12.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5857893689995743,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.6%",
              "display_range": null,
              "display_text": "58.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 58.6,
              "plain_english": "Company-specific explains about 58.6% of price moves in the current state."
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
            "median": 0.5087607085193987,
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
              "median": 0.2973985645694836,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.7%",
              "display_range": null,
              "display_text": "29.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.7,
              "plain_english": "Market explains about 29.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19384072691111776,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.4%",
              "display_range": null,
              "display_text": "19.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 19.4,
              "plain_english": "Sector explains about 19.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5087607085193987,
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5893351983618303,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.9%",
            "display_range": null,
            "display_text": "58.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 58.9,
            "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12392963233164259,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.4%",
              "display_range": null,
              "display_text": "12.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.4,
              "plain_english": "Market explains about 12.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28673516930652704,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.7%",
              "display_range": null,
              "display_text": "28.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 28.7,
              "plain_english": "Sector explains about 28.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5893351983618303,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.9%",
              "display_range": null,
              "display_text": "58.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 58.9,
              "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
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
            "median": 0.37013914210096716,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.0%",
            "display_range": null,
            "display_text": "37.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 37.0,
            "plain_english": "Company-specific explains about 37.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3438814830466568,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Market explains about 34.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28597937485237596,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.6%",
              "display_range": null,
              "display_text": "28.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.6,
              "plain_english": "Sector explains about 28.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.37013914210096716,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.0%",
              "display_range": null,
              "display_text": "37.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.0,
              "plain_english": "Company-specific explains about 37.0% of price moves in the current state."
            }
          },
          "summary": "Jul: Much more balanced across company, sector, and market factors."
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
            "median": 0.6283987854080294,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.8%",
            "display_range": null,
            "display_text": "62.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 62.8,
            "plain_english": "Company-specific explains about 62.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24337099560410755,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.3%",
              "display_range": null,
              "display_text": "24.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 24.3,
              "plain_english": "Market explains about 24.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12823021898786308,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.8%",
              "display_range": null,
              "display_text": "12.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.8,
              "plain_english": "Sector explains about 12.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6283987854080294,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.8%",
              "display_range": null,
              "display_text": "62.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.8,
              "plain_english": "Company-specific explains about 62.8% of price moves in the current state."
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
            "median": 0.4680896446021471,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.8%",
            "display_range": null,
            "display_text": "46.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 46.8,
            "plain_english": "Company-specific explains about 46.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.31011130621123423,
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
              "plain_english": "Market explains about 31.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22179904918661877,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.2%",
              "display_range": null,
              "display_text": "22.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 22.2,
              "plain_english": "Sector explains about 22.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4680896446021471,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.8%",
              "display_range": null,
              "display_text": "46.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 46.8,
              "plain_english": "Company-specific explains about 46.8% of price moves in the current state."
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
            "median": 0.49884761764677116,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.9%",
            "display_range": null,
            "display_text": "49.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 49.9,
            "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2528229412685015,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.3%",
              "display_range": null,
              "display_text": "25.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 25.3,
              "plain_english": "Market explains about 25.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.24832944108472738,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.8%",
              "display_range": null,
              "display_text": "24.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 24.8,
              "plain_english": "Sector explains about 24.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.49884761764677116,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6524186186307419,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.2%",
            "display_range": null,
            "display_text": "65.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 65.2,
            "plain_english": "Company-specific explains about 65.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12989551117896084,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Market explains about 13.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21768587019029717,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.8%",
              "display_range": null,
              "display_text": "21.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 21.8,
              "plain_english": "Sector explains about 21.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6524186186307419,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.2%",
              "display_range": null,
              "display_text": "65.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 65.2,
              "plain_english": "Company-specific explains about 65.2% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.44525924647639775,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.5%",
            "display_range": null,
            "display_text": "44.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 44.5,
            "plain_english": "Sector explains about 44.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2799768876625096,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.0%",
              "display_range": null,
              "display_text": "28.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 28.0,
              "plain_english": "Market explains about 28.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.44525924647639775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.5%",
              "display_range": null,
              "display_text": "44.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 44.5,
              "plain_english": "Sector explains about 44.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.27476386586109264,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.5%",
              "display_range": null,
              "display_text": "27.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 27.5,
              "plain_english": "Company-specific explains about 27.5% of price moves in the current state."
            }
          },
          "summary": "Dec: More mixed, though sector-driven still has the largest share."
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
            "median": 0.6109740116619783,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.1%",
            "display_range": null,
            "display_text": "61.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 61.1,
            "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26328596001238486,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.3%",
              "display_range": null,
              "display_text": "26.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 26.3,
              "plain_english": "Market explains about 26.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1257400283256368,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.6%",
              "display_range": null,
              "display_text": "12.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.6,
              "plain_english": "Sector explains about 12.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6109740116619783,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.1%",
              "display_range": null,
              "display_text": "61.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 61.1,
              "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5475412658516527,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.8%",
            "display_range": null,
            "display_text": "54.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 54.8,
            "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.17942264059917745,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.9%",
              "display_range": null,
              "display_text": "17.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 17.9,
              "plain_english": "Market explains about 17.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27303609354916974,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.3%",
              "display_range": null,
              "display_text": "27.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 27.3,
              "plain_english": "Sector explains about 27.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5475412658516527,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.8%",
              "display_range": null,
              "display_text": "54.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 54.8,
              "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
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
            "median": 0.4212189408466004,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.1%",
            "display_range": null,
            "display_text": "42.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 42.1,
            "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2712310772334802,
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
              "plain_english": "Market explains about 27.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.30754998191991945,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.8%",
              "display_range": null,
              "display_text": "30.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 30.8,
              "plain_english": "Sector explains about 30.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4212189408466004,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.1%",
              "display_range": null,
              "display_text": "42.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.1,
              "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3486035314989711,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.9%",
            "display_range": null,
            "display_text": "34.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 34.9,
            "plain_english": "Market explains about 34.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3486035314989711,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.9%",
              "display_range": null,
              "display_text": "34.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 34.9,
              "plain_english": "Market explains about 34.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3333247182895809,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Sector explains about 33.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3180717502114479,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.8%",
              "display_range": null,
              "display_text": "31.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 31.8,
              "plain_english": "Company-specific explains about 31.8% of price moves in the current state."
            }
          },
          "summary": "Apr: Much more balanced across company, sector, and market factors, though based on only 6 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 9.615384615384615,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.012078716745857405,
            "low": 0.012078716745857405,
            "high": 0.012078716745857405
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.025798210272150714,
            "low": 0.025798210272150714,
            "high": 0.025798210272150714
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9032258064516129,
            0.0967741935483871
          ],
          [
            0.0967741935483871,
            0.9032258064516129
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            112.0,
            12.0
          ],
          [
            12.0,
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
        "market_link_display": "0.12",
        "sector_link_display": "0.61",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.12% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.61% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.03",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 63.5,
        "driver_share_display": "63.5%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9032258064516129,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 9.6 days.",
        "expected_duration_days": 9.6
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
          "expected_duration_days": 9.615384615384615,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.012078716745857405,
            "low": 0.012078716745857405,
            "high": 0.012078716745857405
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.025798210272150714,
            "low": 0.025798210272150714,
            "high": 0.025798210272150714
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9032258064516129,
          0.0967741935483871
        ],
        [
          0.0967741935483871,
          0.9032258064516129
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9032258064516129,
            0.0967741935483871
          ],
          [
            0.0967741935483871,
            0.9032258064516129
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            112.0,
            12.0
          ],
          [
            12.0,
            112.0
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
        "text": "Liquidity score: 79.3 — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "perf": {
        "text": "Performance is weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Liquidity is reasonable for the stock’s size, though it sits modestly behind peers and looks less supported on the bid side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "One-month performance has been firm, with the stock up 4.7%, broadly in line with peers at 4.8% and ahead of the market at -0.8%.",
    "perf_insight": "That return backdrop looks firmer than the trading setup, as the six-month liquidity score is 79.3 compared with a peer median of 82.1 and sector factors account for 63.5% of the tape. This matters because price has held up even as access remains only middle-of-the-pack.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on trading, with sector factors explaining 63.5% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 63.5% of price changes. Other influences are market 32.6%, and company-specific 3.9%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 32.6%, sector 63.5%, and company-specific 3.9%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 32.6%, sector 63.5%, and company-specific 3.9%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "This matters because broader sector moves can shape day-to-day trading conditions, especially with top-10 bid depth at 0.61x of ask depth and spread at 2.5 ticks.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves are leading, accounting for 63.5% of recent price action.",
      "Monthly change: the pattern has moved from mostly sector in February to a more balanced mix by April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look balanced overall, with a firmer price backdrop than the liquidity profile implies.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 14, 2025 to Apr 13, 2026 (238 trading days • 315,594 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book is bid-light, with top-10 bid depth at 0.61x of ask depth and a 2.5-tick spread. That leaves near-term buy-side access looking weaker than the broader six-month profile.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 24.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity currently points to thinner buy-side support than the broader monthly picture.",
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
    "intraday_insight": "Top-10 bid depth is only 0.61x of ask depth and spread is 2.5 ticks. That matters because immediate buy-side access can feel less resilient even though the broader liquidity score remains serviceable for the stock’s size.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is defined more by peer-relative liquidity and displayed depth than by short activity.",
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
    "exec_subtitle": "Trading access is serviceable overall, but peer standing is slightly below median and the bid side looks thinner today.",
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
        "value": "79.3/100",
        "sub": "Peer median 82.1 (-2.8 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$18.8M",
        "sub": "Peer median HK$21.2M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.19%",
        "sub": "N/A ticks; peers 0.31%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks mixed for its size: the six-month score is 79.3 versus a peer median of 82.1. Recent trend context versus the one-month baseline is limited. Near-term trading looks less supported on the buy side, with top-10 bid depth at 0.61x ask depth and spread at 2.5 ticks, so immediate buy-side access may feel weaker than the one-month score suggests. Sector moves still explain 63.5% of trading, and one-month returns are +4.7% versus peers +4.8% and the market -0.8%.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "15.105",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.33%",
        "note": "2.50 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.61x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.19% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.53% with 79.6% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.53% with 31.9% fill.",
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
        "value": "79",
        "suffix": "/100",
        "bar_pct": 79,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 535/2576",
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
        "value": "0.19",
        "suffix": "%",
        "bar_pct": 2,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.19% vs peers 0.31%",
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
        "value": "18.8M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$21.2M",
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
        "value": "63.5",
        "suffix": "sector",
        "bar_pct": 64,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 32.6% • Company 3.9%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is serviceable rather than leading, with a six-month score of 79.3 compared with a peer median of 82.1. That leaves access reasonable for the stock’s size, but not strong enough to stand out against peers.",
      "Price performance has been firm, with a one-month return of 4.7% compared with 4.8% for peers and -0.8% for the market. That matters because the return backdrop is holding up better than the liquidity profile alone would suggest.",
      "The main near-term watchpoint is thinner buy-side support, as top-10 bid depth is 0.61x of ask depth and spread is 2.5 ticks. With sector factors driving 63.5% of trading, day-to-day access can feel less robust when the group moves together."
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
      "overall": "6M liquidity is strong: score 79.3 vs peer median 82.1 (-2.8 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 79.3 vs peer median 82.1 (-2.8 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -2.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -0.1%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -0.1% vs market 11.0%.",
        "vs_sector": "Worse than sector: -0.1% vs sector 1.0%.",
        "vs_peers": "Worse than peers: -0.1% vs peers 18.9%."
      },
      "adv": {
        "insight": "ADV is HK$18.8M, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$18.8M vs market HK$219.4K.",
        "vs_sector": "Better than sector: HK$18.8M vs sector HK$1.1M.",
        "vs_peers": "Worse than peers: HK$18.8M vs peers HK$21.2M."
      },
      "spread": {
        "insight": "Spread is 0.19%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 2.67%.",
        "vs_sector": "Better than sector: 0.19% vs sector 1.78%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.31%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.20%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.20% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.20% vs sector 0.08%.",
        "vs_peers": "Worse than peers: 0.20% vs peers 0.49%."
      },
      "volatility": {
        "insight": "Volatility is 21.35%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 21.35% vs market 59.79%.",
        "vs_sector": "Better than sector: 21.35% vs sector 36.54%.",
        "vs_peers": "Better than peers: 21.35% vs peers 36.11%."
      },
      "trades": {
        "insight": "Trades is 1077, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 1077 vs market 21.",
        "vs_sector": "Better than sector: 1077 vs sector 77.",
        "vs_peers": "Worse than peers: 1077 vs peers 1443."
      },
      "amihud": {
        "insight": "Price impact is 4.28e-10, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 4.28e-10 vs market 4.63e-08.",
        "vs_sector": "Better than sector: 4.28e-10 vs sector 1.93e-08.",
        "vs_peers": "Better than peers: 4.28e-10 vs peers 5.30e-10."
      }
    },
    "performance": {
      "overall": "Recent returns look solid relative to the market and broadly in line with peers, with the stock up 4.7% over one month compared with peers at 4.8% and the market at -0.8%. Liquidity only partly supports that move because the six-month liquidity score of 79.3 is 2.8 points below the peer median of 82.1, and displayed buy-side depth is thinner with top-10 bid depth at 0.61x of ask depth and a 2.5-tick spread.",
      "conclusion": "Performance is weak relative to comparison groups."
    },
    "drivers": {
      "overall": "The stock is currently being driven mainly by sector moves, with sector factors explaining 63.5% of recent price action. That matters because the tape is responding more to group moves than to company-specific news, even as the 1M return of +4.7% sits ahead of the market at -0.8%.",
      "beta": "Based on the last 5 trading days, current mix is market 32.6%, sector 63.5%, and company-specific 3.9%.",
      "rolling_change": "The driver mix has become more balanced over the last three months. February was mostly sector, March was more mixed with company factors still the largest share, and April has shifted further toward a split across company, sector, and market influences."
    },
    "regime": {
      "overall": "The market is in a calmer phase, which supports a steadier trading backdrop, but conditions are still mixed because displayed buy-side depth is lighter than sell-side depth.",
      "current": "Low volatility is the active state, pointing to a more orderly tape at the moment.",
      "transitions": "This looks relatively stable because low volatility typically lasts about 9.6 days rather than flipping quickly.",
      "trading_implications": "Trading conditions may feel steadier day to day, although the 0.61x bid-to-ask depth and 2.5-tick spread mean buy-side access can still feel thinner than the calmer state alone would suggest."
    },
    "execution": {
      "overall": "Displayed liquidity looks bid-light rather than balanced because top-10 bid depth is only 0.61x of ask depth and the spread is 2.5 ticks. That matters because immediate buy-side support is thinner than the headline liquidity picture implies.",
      "concern": "The clearest stress point is the imbalance in the book, with materially less depth on the bid than the ask. That leaves the stock more exposed to weaker execution quality on sell pressure even if the spread is still orderly.",
      "peer_context": "This book does not fully visible support a stronger reading on liquidity because the 6M score of 79.3 already sits 2.8 points below the peer median of 82.1, and the current bid-side shortfall makes that relative gap more visible in day-to-day trading."
    },
    "trader_composition": {
      "overall": "Flow looks mainly institution-like, with count and value pointing the same way.",
      "retail_heavy": "By trade count and value, flow leans institution-like: institution-like trades are 53.9% of count and 66.5% of value, compared with retail-like at 0.1% of count and 0.1% of value.",
      "institutional_gap": "",
      "peer_comparison": "The mix stands out as institution-like relative to peers, with both trade count and trade value led by institution-like activity. That matters because peer-relative flow quality looks supported by larger participants rather than scattered small trades."
    },
    "price_moving": {
      "overall": "Price-moving trades account fo% of total trades, so a meaningful share of activity is still setting price. The signal is reasonably clean because the broader flow mix is institution-like by both trade count and trade value. That matters because price formation is more likely to reflect committed participation than very small tickets. Positive and negative price-moving trade asymmetry is tracked in the report, while the broader read remains that institution-like flow is the main influence on trading.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not stand out as a separate driver of trading conditions. The clearer signals are a liquidity score slightly below the peer median at 79.3 compared with 82.1 and lighter displayed bid depth at 0.61x of ask depth, which matter more for day-to-day access.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is rising or falling in a way that changes the picture. Recent performance remains firm at +4.7% over one month, broadly in line with peers and ahead of the market, so the main read remains mixed liquidity rather than short pressure.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Trading is concentrated in the continuous session, which carries 82.7% of activity, compared with 0.2% at the open and 10.8% at the close. That points to liquidity being available through the main session rather than relying on auction windows.",
      "hhi_interpretation": "A concentration score of 0.135 suggests activity is present across the day rather than packed into a few short intervals. That supports a steadier intraday flow picture.",
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
        "1836",
        "1361",
        "1440",
        "1368",
        "551",
        "2331",
        "933",
        "82331",
        "2232"
      ],
      "scores": [
        79.27018633540372,
        80.90062111801242,
        69.21583850931677,
        86.60714285714286,
        89.82919254658384,
        97.28260869565217,
        63.58695652173913,
        32.64751552795031,
        83.26863354037268
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
        18790505.0,
        20423740.0,
        9235187.5,
        39702852.5,
        64956034.620000005,
        335876216.19,
        1349273.46,
        54155.992298524,
        21943537.05
      ],
      "total": 2576
    },
    "market_comparison": {
      "sector_name": "Footwear",
      "sector_count": 14,
      "market_count": 2576,
      "company": {
        "volatility": 0.2135303554851704,
        "adv": 18790505.0,
        "spread_pct": 0.0019084563698073766,
        "turnover_ratio": 0.0019593044128713016,
        "amihud": 4.284018590795504e-10,
        "trades": 1077.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7408307343871665,
          "median": 0.5978604855525683,
          "min": 0.0,
          "max": 33.69234598783136,
          "p5": 0.22381753945873362,
          "p95": 1.5543264436522564,
          "count": 2574
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 56542891.208101414,
          "median": 219410.125,
          "min": 0.0,
          "max": 11530530000.0,
          "p5": 0.0,
          "p95": 214127775.0,
          "count": 2576
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042004487177423104,
          "median": 0.026651223195499653,
          "min": 0.000558678699550006,
          "max": 0.49098715795419084,
          "p5": 0.001390744598616606,
          "p95": 0.13470487233538153,
          "count": 2575
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003659746886055854,
          "median": 0.000864143138348958,
          "min": 0.0,
          "max": 0.17601894736842105,
          "p5": 0.0,
          "p95": 0.014489803074043354,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.470128402567895e-07,
          "median": 4.630396367913572e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 5.0443531668434034e-11,
          "p95": 3.6564790403449536e-06,
          "count": 2574
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1037.5366847826087,
          "median": 21.0,
          "min": 0.0,
          "max": 93269.5,
          "p5": 0.0,
          "p95": 5730.375,
          "count": 2576
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4853519513894543,
          "median": 0.36536606566831,
          "min": 0.2135303554851704,
          "max": 1.8933946032986415,
          "p5": 0.2248465786830324,
          "p95": 1.0244811090037822,
          "count": 14
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 35141831.697307035,
          "median": 1132330.48,
          "min": 0.0,
          "max": 335876216.19,
          "p5": 1196.65,
          "p95": 159778098.1694999,
          "count": 14
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.024019909287536386,
          "median": 0.017834652334170087,
          "min": 0.0008371865105221171,
          "max": 0.10835639479625465,
          "p5": 0.0012823595616336014,
          "p95": 0.08104935628836177,
          "count": 14
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023468807604244716,
          "median": 0.0007528759980500979,
          "min": 0.0,
          "max": 0.009774581906051362,
          "p5": 8.948925158972507e-07,
          "p95": 0.007734599521142218,
          "count": 14
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.901700575318036e-08,
          "median": 1.9260146810965952e-08,
          "min": 4.6027532043844856e-11,
          "max": 5.46205565540752e-07,
          "p5": 1.3185927105344243e-10,
          "p95": 3.434367105936346e-07,
          "count": 14
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1204.392857142857,
          "median": 77.0,
          "min": 0.0,
          "max": 9123.5,
          "p5": 1.3,
          "p95": 5131.849999999998,
          "count": 14
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 61692624.66403732,
          "median": 21183638.525,
          "min": 54155.992298524,
          "max": 335876216.19,
          "p5": 507447.10599404067,
          "p95": 241054152.64049986,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2187.25,
          "median": 1443.0,
          "min": 2.0,
          "max": 9123.5,
          "p5": 36.125,
          "p95": 6974.149999999997,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.38941109614149216,
          "median": 0.3610934634901677,
          "min": 0.2925837719873559,
          "max": 0.5538822104383234,
          "p5": 0.30859077521626743,
          "p95": 0.531276927448282,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.006283188377420042,
          "median": 0.0030915136306753914,
          "min": 0.0008371865105221171,
          "max": 0.019108011147452596,
          "p5": 0.001076895076505224,
          "p95": 0.018216659978154838,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.362971908201561,
          "median": 1.6547061933308194,
          "min": 1.1799930727489643,
          "max": 15.285759039066678,
          "p5": 1.2167945592012703,
          "p95": 12.69468737742351,
          "count": 5
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.719021307410852e-08,
          "median": 5.300666934310538e-10,
          "min": 4.6027532043844856e-11,
          "max": 1.207187475069603e-07,
          "p5": 9.224462227978203e-11,
          "p95": 8.314619982969573e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004241604570759063,
          "median": 0.004919635131000121,
          "min": 1.376757716765001e-06,
          "max": 0.009774581906051362,
          "p5": 0.00021909257691367782,
          "p95": 0.008676129852638746,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.04705882352941182,
        "market": -0.007811259659372016,
        "sector": 0.037448983653362244,
        "peers": 0.04781455264533885
      },
      {
        "horizon": "3M",
        "stock": -0.002636783124587705,
        "market": 0.058957371688082016,
        "sector": 0.03444869584893073,
        "peers": 0.11372430837473302
      },
      {
        "horizon": "6M",
        "stock": -0.0013201320132021355,
        "market": 0.10999472576257396,
        "sector": 0.009907735482836744,
        "peers": 0.18870282530707505
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
      "share_market": 0.3260321320374468,
      "share_sector": 0.635320924513423,
      "share_idio": 0.03864694344913013,
      "beta_market": 0.11756729764237411,
      "beta_sector": 0.6114143275083215,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.3260321320374468,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "32.6%",
            "display_range": null,
            "display_text": "32.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 32.6,
            "plain_english": "Market explains about 32.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.635320924513423,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.5%",
            "display_range": null,
            "display_text": "63.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 63.5,
            "plain_english": "Sector explains about 63.5% of price moves in the current state."
          },
          "company_share": {
            "median": 0.03864694344913013,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.9%",
            "display_range": null,
            "display_text": "3.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 3.9,
            "plain_english": "Company-specific explains about 3.9% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.11756729764237411,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.12",
            "display_range": null,
            "display_text": "0.12",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.12% stock move in the same direction in this state.",
            "value_num": 0.12
          },
          "beta_stock_lag": {
            "median": -0.02857694002544993,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.03",
            "display_range": null,
            "display_text": "-0.03",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.03
          },
          "beta_sector": {
            "median": 0.6114143275083215,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.61",
            "display_range": null,
            "display_text": "0.61",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.61% stock move in the same direction in this state.",
            "value_num": 0.61
          },
          "beta_market_lag": {
            "median": -0.19573432392822362,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.20",
            "display_range": null,
            "display_text": "-0.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.2
          },
          "beta_sector_lag": {
            "median": -0.4406394621603027,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.44",
            "display_range": null,
            "display_text": "-0.44",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.44
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
            "period_label": "2025-03-25 to 2025-03-31",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5094861644468438,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.9%",
              "display_range": null,
              "display_text": "50.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 50.9,
              "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.28507318450335273,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.5%",
                "display_range": null,
                "display_text": "28.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 28.5,
                "plain_english": "Market explains about 28.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20544065104980339,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.5%",
                "display_range": null,
                "display_text": "20.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 20.5,
                "plain_english": "Sector explains about 20.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5094861644468438,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.9%",
                "display_range": null,
                "display_text": "50.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 50.9,
                "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven, though based on only 5 trading days."
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
              "median": 0.5857893689995743,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.6%",
              "display_range": null,
              "display_text": "58.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 58.6,
              "plain_english": "Company-specific explains about 58.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.28927769475588316,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.9%",
                "display_range": null,
                "display_text": "28.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 28.9,
                "plain_english": "Market explains about 28.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12493293624454252,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.5%",
                "display_range": null,
                "display_text": "12.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 12.5,
                "plain_english": "Sector explains about 12.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5857893689995743,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.6%",
                "display_range": null,
                "display_text": "58.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 58.6,
                "plain_english": "Company-specific explains about 58.6% of price moves in the current state."
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
              "median": 0.5087607085193987,
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
                "median": 0.2973985645694836,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.7%",
                "display_range": null,
                "display_text": "29.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.7,
                "plain_english": "Market explains about 29.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19384072691111776,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.4%",
                "display_range": null,
                "display_text": "19.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 19.4,
                "plain_english": "Sector explains about 19.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5087607085193987,
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5893351983618303,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.9%",
              "display_range": null,
              "display_text": "58.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 58.9,
              "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12392963233164259,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.4%",
                "display_range": null,
                "display_text": "12.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.4,
                "plain_english": "Market explains about 12.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28673516930652704,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.7%",
                "display_range": null,
                "display_text": "28.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 28.7,
                "plain_english": "Sector explains about 28.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5893351983618303,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.9%",
                "display_range": null,
                "display_text": "58.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 58.9,
                "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
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
              "median": 0.37013914210096716,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.0%",
              "display_range": null,
              "display_text": "37.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.0,
              "plain_english": "Company-specific explains about 37.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3438814830466568,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Market explains about 34.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28597937485237596,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.6%",
                "display_range": null,
                "display_text": "28.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.6,
                "plain_english": "Sector explains about 28.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.37013914210096716,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.0%",
                "display_range": null,
                "display_text": "37.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.0,
                "plain_english": "Company-specific explains about 37.0% of price moves in the current state."
              }
            },
            "summary": "Jul: Much more balanced across company, sector, and market factors."
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
              "median": 0.6283987854080294,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.8%",
              "display_range": null,
              "display_text": "62.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.8,
              "plain_english": "Company-specific explains about 62.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24337099560410755,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.3%",
                "display_range": null,
                "display_text": "24.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 24.3,
                "plain_english": "Market explains about 24.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12823021898786308,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.8%",
                "display_range": null,
                "display_text": "12.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.8,
                "plain_english": "Sector explains about 12.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6283987854080294,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.8%",
                "display_range": null,
                "display_text": "62.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 62.8,
                "plain_english": "Company-specific explains about 62.8% of price moves in the current state."
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
              "median": 0.4680896446021471,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.8%",
              "display_range": null,
              "display_text": "46.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 46.8,
              "plain_english": "Company-specific explains about 46.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.31011130621123423,
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
                "plain_english": "Market explains about 31.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22179904918661877,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.2%",
                "display_range": null,
                "display_text": "22.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 22.2,
                "plain_english": "Sector explains about 22.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4680896446021471,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.8%",
                "display_range": null,
                "display_text": "46.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 46.8,
                "plain_english": "Company-specific explains about 46.8% of price moves in the current state."
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
              "median": 0.49884761764677116,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2528229412685015,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.3%",
                "display_range": null,
                "display_text": "25.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 25.3,
                "plain_english": "Market explains about 25.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.24832944108472738,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.8%",
                "display_range": null,
                "display_text": "24.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 24.8,
                "plain_english": "Sector explains about 24.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.49884761764677116,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.9%",
                "display_range": null,
                "display_text": "49.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 49.9,
                "plain_english": "Company-specific explains about 49.9% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6524186186307419,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.2%",
              "display_range": null,
              "display_text": "65.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 65.2,
              "plain_english": "Company-specific explains about 65.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12989551117896084,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Market explains about 13.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21768587019029717,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.8%",
                "display_range": null,
                "display_text": "21.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 21.8,
                "plain_english": "Sector explains about 21.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6524186186307419,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "65.2%",
                "display_range": null,
                "display_text": "65.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 65.2,
                "plain_english": "Company-specific explains about 65.2% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.44525924647639775,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.5%",
              "display_range": null,
              "display_text": "44.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 44.5,
              "plain_english": "Sector explains about 44.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2799768876625096,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.0%",
                "display_range": null,
                "display_text": "28.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 28.0,
                "plain_english": "Market explains about 28.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.44525924647639775,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.5%",
                "display_range": null,
                "display_text": "44.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 44.5,
                "plain_english": "Sector explains about 44.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.27476386586109264,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.5%",
                "display_range": null,
                "display_text": "27.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 27.5,
                "plain_english": "Company-specific explains about 27.5% of price moves in the current state."
              }
            },
            "summary": "Dec: More mixed, though sector-driven still has the largest share."
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
              "median": 0.6109740116619783,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.1%",
              "display_range": null,
              "display_text": "61.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 61.1,
              "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26328596001238486,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.3%",
                "display_range": null,
                "display_text": "26.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 26.3,
                "plain_english": "Market explains about 26.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1257400283256368,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.6%",
                "display_range": null,
                "display_text": "12.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.6,
                "plain_english": "Sector explains about 12.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6109740116619783,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.1%",
                "display_range": null,
                "display_text": "61.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 61.1,
                "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5475412658516527,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.8%",
              "display_range": null,
              "display_text": "54.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 54.8,
              "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.17942264059917745,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.9%",
                "display_range": null,
                "display_text": "17.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 17.9,
                "plain_english": "Market explains about 17.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27303609354916974,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.3%",
                "display_range": null,
                "display_text": "27.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 27.3,
                "plain_english": "Sector explains about 27.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5475412658516527,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.8%",
                "display_range": null,
                "display_text": "54.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 54.8,
                "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
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
              "median": 0.4212189408466004,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.1%",
              "display_range": null,
              "display_text": "42.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.1,
              "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2712310772334802,
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
                "plain_english": "Market explains about 27.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.30754998191991945,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.8%",
                "display_range": null,
                "display_text": "30.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 30.8,
                "plain_english": "Sector explains about 30.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4212189408466004,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.1%",
                "display_range": null,
                "display_text": "42.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.1,
                "plain_english": "Company-specific explains about 42.1% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-13",
            "n_obs": 6,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3486035314989711,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.9%",
              "display_range": null,
              "display_text": "34.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 34.9,
              "plain_english": "Market explains about 34.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3486035314989711,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.9%",
                "display_range": null,
                "display_text": "34.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 34.9,
                "plain_english": "Market explains about 34.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3333247182895809,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Sector explains about 33.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3180717502114479,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.8%",
                "display_range": null,
                "display_text": "31.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 31.8,
                "plain_english": "Company-specific explains about 31.8% of price moves in the current state."
              }
            },
            "summary": "Apr: Much more balanced across company, sector, and market factors, though based on only 6 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 9.615384615384615,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.012078716745857405,
              "low": 0.012078716745857405,
              "high": 0.012078716745857405
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.025798210272150714,
              "low": 0.025798210272150714,
              "high": 0.025798210272150714
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9032258064516129,
              0.0967741935483871
            ],
            [
              0.0967741935483871,
              0.9032258064516129
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              112.0,
              12.0
            ],
            [
              12.0,
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
          "market_link_display": "0.12",
          "sector_link_display": "0.61",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.12% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.61% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.03",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 63.5,
          "driver_share_display": "63.5%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9032258064516129,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 9.6 days.",
          "expected_duration_days": 9.6
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
          "period_label": "2025-03-25 to 2025-03-31",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Mar: Mostly company-driven, though based on only 5 trading days.",
          "share_market": 0.28507318450335273,
          "share_sector": 0.20544065104980339,
          "share_company": 0.5094861644468438,
          "share_market_display": "28.5%",
          "share_sector_display": "20.5%",
          "share_company_display": "50.9%",
          "dominant_share_display": "50.9%"
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
          "share_market": 0.28927769475588316,
          "share_sector": 0.12493293624454252,
          "share_company": 0.5857893689995743,
          "share_market_display": "28.9%",
          "share_sector_display": "12.5%",
          "share_company_display": "58.6%",
          "dominant_share_display": "58.6%"
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
          "share_market": 0.2973985645694836,
          "share_sector": 0.19384072691111776,
          "share_company": 0.5087607085193987,
          "share_market_display": "29.7%",
          "share_sector_display": "19.4%",
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jun: Mostly company-driven.",
          "share_market": 0.12392963233164259,
          "share_sector": 0.28673516930652704,
          "share_company": 0.5893351983618303,
          "share_market_display": "12.4%",
          "share_sector_display": "28.7%",
          "share_company_display": "58.9%",
          "dominant_share_display": "58.9%"
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
          "summary": "Jul: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3438814830466568,
          "share_sector": 0.28597937485237596,
          "share_company": 0.37013914210096716,
          "share_market_display": "34.4%",
          "share_sector_display": "28.6%",
          "share_company_display": "37.0%",
          "dominant_share_display": "37.0%"
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
          "share_market": 0.24337099560410755,
          "share_sector": 0.12823021898786308,
          "share_company": 0.6283987854080294,
          "share_market_display": "24.3%",
          "share_sector_display": "12.8%",
          "share_company_display": "62.8%",
          "dominant_share_display": "62.8%"
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
          "share_market": 0.31011130621123423,
          "share_sector": 0.22179904918661877,
          "share_company": 0.4680896446021471,
          "share_market_display": "31.0%",
          "share_sector_display": "22.2%",
          "share_company_display": "46.8%",
          "dominant_share_display": "46.8%"
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
          "share_market": 0.2528229412685015,
          "share_sector": 0.24832944108472738,
          "share_company": 0.49884761764677116,
          "share_market_display": "25.3%",
          "share_sector_display": "24.8%",
          "share_company_display": "49.9%",
          "dominant_share_display": "49.9%"
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
          "share_market": 0.12989551117896084,
          "share_sector": 0.21768587019029717,
          "share_company": 0.6524186186307419,
          "share_market_display": "13.0%",
          "share_sector_display": "21.8%",
          "share_company_display": "65.2%",
          "dominant_share_display": "65.2%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Dec: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.2799768876625096,
          "share_sector": 0.44525924647639775,
          "share_company": 0.27476386586109264,
          "share_market_display": "28.0%",
          "share_sector_display": "44.5%",
          "share_company_display": "27.5%",
          "dominant_share_display": "44.5%"
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
          "share_market": 0.26328596001238486,
          "share_sector": 0.1257400283256368,
          "share_company": 0.6109740116619783,
          "share_market_display": "26.3%",
          "share_sector_display": "12.6%",
          "share_company_display": "61.1%",
          "dominant_share_display": "61.1%"
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
          "summary": "Feb: Mostly company-driven.",
          "share_market": 0.17942264059917745,
          "share_sector": 0.27303609354916974,
          "share_company": 0.5475412658516527,
          "share_market_display": "17.9%",
          "share_sector_display": "27.3%",
          "share_company_display": "54.8%",
          "dominant_share_display": "54.8%"
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
          "share_market": 0.2712310772334802,
          "share_sector": 0.30754998191991945,
          "share_company": 0.4212189408466004,
          "share_market_display": "27.1%",
          "share_sector_display": "30.8%",
          "share_company_display": "42.1%",
          "dominant_share_display": "42.1%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Much more balanced across company, sector, and market factors, though based on only 6 trading days.",
          "share_market": 0.3486035314989711,
          "share_sector": 0.3333247182895809,
          "share_company": 0.3180717502114479,
          "share_market_display": "34.9%",
          "share_sector_display": "33.3%",
          "share_company_display": "31.8%",
          "dominant_share_display": "34.9%"
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
          0.5020080321285141,
          0.4979919678714859
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 9.615384615384615,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.012078716745857405,
              "low": 0.012078716745857405,
              "high": 0.012078716745857405
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.025798210272150714,
              "low": 0.025798210272150714,
              "high": 0.025798210272150714
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9032258064516129,
            0.0967741935483871
          ],
          [
            0.0967741935483871,
            0.9032258064516129
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 15.08,
          "quantity": 4500.0,
          "value": 67860.0
        },
        {
          "level": 2,
          "price": 15.07,
          "quantity": 7500.0,
          "value": 113025.0
        },
        {
          "level": 3,
          "price": 15.05,
          "quantity": 1000.0,
          "value": 15050.0
        },
        {
          "level": 4,
          "price": 15.04,
          "quantity": 1500.0,
          "value": 22560.0
        },
        {
          "level": 5,
          "price": 15.03,
          "quantity": 11000.0,
          "value": 165330.0
        },
        {
          "level": 6,
          "price": 15.02,
          "quantity": 5000.0,
          "value": 75100.0
        },
        {
          "level": 7,
          "price": 15.01,
          "quantity": 8500.0,
          "value": 127585.0
        },
        {
          "level": 8,
          "price": 15.0,
          "quantity": 2500.0,
          "value": 37500.0
        },
        {
          "level": 9,
          "price": 14.99,
          "quantity": 5000.0,
          "value": 74950.0
        },
        {
          "level": 10,
          "price": 14.98,
          "quantity": 6500.0,
          "value": 97370.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 15.13,
          "quantity": 2000.0,
          "value": 30260.0
        },
        {
          "level": 2,
          "price": 15.14,
          "quantity": 1500.0,
          "value": 22710.0
        },
        {
          "level": 3,
          "price": 15.15,
          "quantity": 8000.0,
          "value": 121200.0
        },
        {
          "level": 4,
          "price": 15.16,
          "quantity": 15000.0,
          "value": 227400.0
        },
        {
          "level": 5,
          "price": 15.17,
          "quantity": 6000.0,
          "value": 91020.0
        },
        {
          "level": 6,
          "price": 15.18,
          "quantity": 2500.0,
          "value": 37950.0
        },
        {
          "level": 7,
          "price": 15.19,
          "quantity": 1500.0,
          "value": 22785.0
        },
        {
          "level": 8,
          "price": 15.2,
          "quantity": 46000.0,
          "value": 699200.0
        },
        {
          "level": 9,
          "price": 15.21,
          "quantity": 1500.0,
          "value": 22815.0
        },
        {
          "level": 10,
          "price": 15.22,
          "quantity": 2500.0,
          "value": 38050.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-13 07:59:53.081000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 15.105,
        "spread_pct": 0.0033101621979477465,
        "spread_ticks": 2.5,
        "tick_size": 0.02,
        "bid_depth_notional_top10": 796330.0,
        "ask_depth_notional_top10": 1313390.0,
        "bid_ask_depth_ratio": 0.6063
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 238,
        "n_trades_used": 315594,
        "first_trade_date": "2025-04-14",
        "last_trade_date": "2026-04-13",
        "window_label": "Apr 14, 2025 to Apr 13, 2026",
        "window_short_label": "Apr 14, 2025 to Apr 13, 2026",
        "trade_days_label": "238 trading days",
        "trade_count_label": "315,594 trades",
        "window_detail_label": "238 trading days • 315,594 trades",
        "history_note": "Trade-size percentiles use Apr 14, 2025 to Apr 13, 2026 history (238 trading days • 315,594 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 34400.0,
            "impact_pct": -0.001655,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 4.32,
            "pct_of_adv": 0.18
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 57440.0,
            "impact_pct": -0.001655,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 7.21,
            "pct_of_adv": 0.31
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 4197770.4,
            "impact_pct": -0.00529,
            "filled_pct": 19.0,
            "levels_consumed": 10,
            "pct_of_bid_depth": 527.14,
            "pct_of_adv": 22.34
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-13",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "21213955.0",
            "timestamp": "2026-04-13 01:30:02.109000000",
            "local_timestamp": "2026-04-13 09:30:02",
            "posted_price": 15.65,
            "size_shares": 40000.0,
            "notional": 626000.0,
            "impact_pct": -0.004552,
            "filled_pct": 100.0,
            "levels_consumed": 9,
            "pct_of_bid_depth": 78.61,
            "price_vs_mid_pct": 3.608,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "10937347.0",
            "timestamp": "2026-04-13 01:20:11.562000000",
            "local_timestamp": "2026-04-13 09:20:11",
            "posted_price": 15.6,
            "size_shares": 40000.0,
            "notional": 624000.0,
            "impact_pct": -0.004542,
            "filled_pct": 100.0,
            "levels_consumed": 8,
            "pct_of_bid_depth": 78.36,
            "price_vs_mid_pct": 3.277,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "2718006531.0",
            "timestamp": "2026-04-13 05:00:22.499000000",
            "local_timestamp": "2026-04-13 13:00:22",
            "posted_price": 15.27,
            "size_shares": 34000.0,
            "notional": 519180.0,
            "impact_pct": -0.004141000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 7,
            "pct_of_bid_depth": 65.2,
            "price_vs_mid_pct": 1.092,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-13",
        "bucket_minutes": 30,
        "tick_size": 0.02,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.001995344196874036,
            "spread_ticks": 1.5000000000000568,
            "bid_depth_notional": 1489250.0,
            "ask_depth_notional": 1713830.0,
            "mid_price": 15.035
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.004662004662004681,
            "spread_ticks": 3.500000000000014,
            "bid_depth_notional": 1261500.0,
            "ask_depth_notional": 2835195.0,
            "mid_price": 15.015
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0006651147322913061,
            "spread_ticks": 0.49999999999998934,
            "bid_depth_notional": 1624245.0,
            "ask_depth_notional": 2336135.0,
            "mid_price": 15.035
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.000665557404326109,
            "spread_ticks": 0.49999999999998934,
            "bid_depth_notional": 1496780.0,
            "ask_depth_notional": 1500100.0,
            "mid_price": 15.024999999999999
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.000665557404326109,
            "spread_ticks": 0.49999999999998934,
            "bid_depth_notional": 1765550.0,
            "ask_depth_notional": 1130875.0,
            "mid_price": 15.024999999999999
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0006651147322913061,
            "spread_ticks": 0.49999999999998934,
            "bid_depth_notional": 1437145.0,
            "ask_depth_notional": 1628545.0,
            "mid_price": 15.035
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0006651147322913061,
            "spread_ticks": 0.49999999999998934,
            "bid_depth_notional": 1744645.0,
            "ask_depth_notional": 1613995.0,
            "mid_price": 15.035
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0006642311524410353,
            "spread_ticks": 0.49999999999998934,
            "bid_depth_notional": 1919210.0,
            "ask_depth_notional": 1194155.0,
            "mid_price": 15.055
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0026490066225165,
            "spread_ticks": 1.9999999999999574,
            "bid_depth_notional": 1344220.0,
            "ask_depth_notional": 1601050.0,
            "mid_price": 15.1
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0006624710168929969,
            "spread_ticks": 0.49999999999998934,
            "bid_depth_notional": 1465320.0,
            "ask_depth_notional": 1606985.0,
            "mid_price": 15.094999999999999
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0033101621979477465,
            "spread_ticks": 2.5000000000000355,
            "bid_depth_notional": 796330.0,
            "ask_depth_notional": 1313390.0,
            "mid_price": 15.105
          }
        ],
        "summary": {
          "median_spread_pct": 0.000665557404326109,
          "median_spread_ticks": 0.49999999999998934,
          "median_bid_depth_notional": 1489250.0,
          "median_ask_depth_notional": 1606985.0,
          "tightest_bucket": "15:00",
          "widest_bucket": "10:00",
          "deepest_bid_bucket": "14:00",
          "thinnest_bid_bucket": "15:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.3,
      "peers": [
        {
          "ticker": "2331",
          "pct": 0.2
        },
        {
          "ticker": "551",
          "pct": 1.2
        },
        {
          "ticker": "1368",
          "pct": 1.5
        },
        {
          "ticker": "1361",
          "pct": 2.3
        },
        {
          "ticker": "2232",
          "pct": 3.8
        },
        {
          "ticker": "1440",
          "pct": 5.9
        },
        {
          "ticker": "933",
          "pct": 104.0
        },
        {
          "ticker": "82331",
          "pct": 9314.1
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 1019,
          "n_runs": 511,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-13",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.017664376840039256,
            "mixed_pct": 0.0,
            "instit_pct": 0.4573110893032385,
            "ambiguous_pct": 0.0647693817468106,
            "unobservable_pct": 0.4602551521099117,
            "unclear_pct": 0.5250245338567223,
            "retail_qty_pct": 0.009942438513867086,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5855572998430141,
            "ambiguous_qty_pct": 0.04866562009419152,
            "unobservable_qty_pct": 0.35583464154892724,
            "unclear_qty_pct": 0.40450026164311875,
            "retail_notional_pct": 0.009929350789535182,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5853431056163271,
            "ambiguous_notional_pct": 0.04870852019184759,
            "unobservable_notional_pct": 0.35601902340229014,
            "unclear_notional_pct": 0.4047275435941377
          },
          "run_composition": {
            "retail_pct": 0.03522504892367906,
            "mixed_pct": 0.0,
            "instit_pct": 0.18395303326810175,
            "ambiguous_pct": 0.08023483365949119,
            "unobservable_pct": 0.700587084148728,
            "unclear_pct": 0.7808219178082192,
            "retail_notional_pct": 0.009929350789535182,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5853431056163271,
            "unclear_notional_pct": 0.4047275435941377
          },
          "counts": {
            "trades": {
              "retail": 18,
              "mixed": 0,
              "institutional": 466,
              "ambiguous": 66,
              "unobservable": 469,
              "unclear": 535
            },
            "runs": {
              "retail": 18,
              "mixed": 0,
              "institutional": 94,
              "ambiguous": 41,
              "unobservable": 358,
              "unclear": 399
            }
          },
          "confidence": {
            "high": 0.06653620352250489,
            "medium": 0.15264187866927592,
            "low": 0.0,
            "na": 0.7808219178082192
          },
          "confidence_counts": {
            "high": 34,
            "medium": 78,
            "low": 0,
            "na": 399
          },
          "trade_confidence": {
            "high": 0.21099116781157998,
            "medium": 0.26398429833169773,
            "low": 0.0,
            "na": 0.5250245338567223
          },
          "trade_confidence_counts": {
            "high": 215,
            "medium": 269,
            "low": 0,
            "na": 535
          },
          "observability": {
            "avg_feature_coverage": 0.6063600782778865,
            "observable_run_pct": 0.29941291585127205,
            "ambiguous_run_pct": 0.08023483365949119,
            "unobservable_run_pct": 0.700587084148728
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.700587084148728,
          "dominance_gap": 0.5166340508806262,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 1019
            },
            "d2_information": {
              "UNOBSERVABLE": 1019
            },
            "d3_urgency": {
              "IMMEDIATE": 501,
              "ADAPTIVE": 10
            },
            "participant_confidence": {
              "NA": 399,
              "MEDIUM": 78,
              "HIGH": 34
            }
          },
          "trade_size": {
            "avg": 14109.990186457311,
            "median": 7530.0
          },
          "run_size": {
            "avg": 28137.14285714286,
            "median": 7550.0,
            "avg_length": 1.99412915851272
          },
          "recent_trades": [
            {
              "trade_id": "1022",
              "timestamp": "2026-04-13T07:59:44.011289",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80280,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1021",
              "timestamp": "2026-04-13T07:59:43.112490",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80280,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1020",
              "timestamp": "2026-04-13T07:59:30.227208",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1019",
              "timestamp": "2026-04-13T07:59:26.311813",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1018",
              "timestamp": "2026-04-13T07:59:26.311813",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1017",
              "timestamp": "2026-04-13T07:59:22.275657",
              "price": 15.13,
              "size": 1000.0,
              "notional": 15130.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1016",
              "timestamp": "2026-04-13T07:59:07.540755",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80278,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1015",
              "timestamp": "2026-04-13T07:58:57.188753",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1014",
              "timestamp": "2026-04-13T07:58:55.074062",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1013",
              "timestamp": "2026-04-13T07:58:55.074062",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1012",
              "timestamp": "2026-04-13T07:58:42.992987",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80276,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1011",
              "timestamp": "2026-04-13T07:58:34.207924",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80275,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1010",
              "timestamp": "2026-04-13T07:58:20.594166",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80274,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1009",
              "timestamp": "2026-04-13T07:58:11.890171",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80273,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1008",
              "timestamp": "2026-04-13T07:57:58.333051",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80272,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1007",
              "timestamp": "2026-04-13T07:57:44.694814",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80271,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1006",
              "timestamp": "2026-04-13T07:57:36.032761",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80270,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1005",
              "timestamp": "2026-04-13T07:57:30.538889",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 80269,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1004",
              "timestamp": "2026-04-13T07:57:22.611986",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80268,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1003",
              "timestamp": "2026-04-13T07:57:09.001852",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80267,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1002",
              "timestamp": "2026-04-13T07:56:56.739464",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80266,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1001",
              "timestamp": "2026-04-13T07:56:55.316297",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80266,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1000",
              "timestamp": "2026-04-13T07:56:37.574429",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80265,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "999",
              "timestamp": "2026-04-13T07:56:25.806386",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "998",
              "timestamp": "2026-04-13T07:56:21.341028",
              "price": 15.07,
              "size": 4500.0,
              "notional": 67815.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "997",
              "timestamp": "2026-04-13T07:56:19.713027",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "996",
              "timestamp": "2026-04-13T07:56:01.933699",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80263,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "995",
              "timestamp": "2026-04-13T07:55:53.432535",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80262,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "994",
              "timestamp": "2026-04-13T07:55:51.750232",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80262,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "993",
              "timestamp": "2026-04-13T07:55:46.143660",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80261,
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
          "n_trades": 23262,
          "n_runs": 7080,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-11",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.005545524890379159,
            "mixed_pct": 0.0,
            "instit_pct": 0.4960880405812054,
            "ambiguous_pct": 0.1141346401857106,
            "unobservable_pct": 0.3842317943427048,
            "unclear_pct": 0.49836643452841545,
            "retail_qty_pct": 0.002784000945058114,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.604700040282067,
            "ambiguous_qty_pct": 0.07944520922398197,
            "unobservable_qty_pct": 0.3130707495488929,
            "unclear_qty_pct": 0.3925159587728749,
            "retail_notional_pct": 0.002913329666410117,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6048256344783492,
            "ambiguous_notional_pct": 0.07938782787042488,
            "unobservable_notional_pct": 0.3128732079848157,
            "unclear_notional_pct": 0.3922610358552406
          },
          "run_composition": {
            "retail_pct": 0.01765536723163842,
            "mixed_pct": 0.0,
            "instit_pct": 0.18333333333333332,
            "ambiguous_pct": 0.13135593220338984,
            "unobservable_pct": 0.6676553672316384,
            "unclear_pct": 0.7990112994350282,
            "retail_notional_pct": 0.002913329666410117,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6048256344783492,
            "unclear_notional_pct": 0.3922610358552406
          },
          "counts": {
            "trades": {
              "retail": 129,
              "mixed": 0,
              "institutional": 11540,
              "ambiguous": 2655,
              "unobservable": 8938,
              "unclear": 11593
            },
            "runs": {
              "retail": 125,
              "mixed": 0,
              "institutional": 1298,
              "ambiguous": 930,
              "unobservable": 4727,
              "unclear": 5657
            }
          },
          "confidence": {
            "high": 0.1271186440677966,
            "medium": 0.07090395480225989,
            "low": 0.0029661016949152543,
            "na": 0.7990112994350282
          },
          "confidence_counts": {
            "high": 900,
            "medium": 502,
            "low": 21,
            "na": 5657
          },
          "trade_confidence": {
            "high": 0.3629524546470639,
            "medium": 0.1330925973690998,
            "low": 0.005588513455420858,
            "na": 0.49836643452841545
          },
          "trade_confidence_counts": {
            "high": 8443,
            "medium": 3096,
            "low": 130,
            "na": 11593
          },
          "observability": {
            "avg_feature_coverage": 0.6047881355932203,
            "observable_run_pct": 0.33234463276836157,
            "ambiguous_run_pct": 0.13135593220338984,
            "unobservable_run_pct": 0.6676553672316384
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.6676553672316384,
          "dominance_gap": 0.4843220338983051,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 23262
            },
            "d2_information": {
              "UNOBSERVABLE": 23262
            },
            "d3_urgency": {
              "IMMEDIATE": 6915,
              "ADAPTIVE": 165
            },
            "participant_confidence": {
              "NA": 5657,
              "HIGH": 900,
              "MEDIUM": 502,
              "LOW": 21
            }
          },
          "trade_size": {
            "avg": 18903.597589201272,
            "median": 7502.5
          },
          "run_size": {
            "avg": 62109.53207909605,
            "median": 15160.0,
            "avg_length": 3.285593220338983
          },
          "recent_trades": [
            {
              "trade_id": "1022",
              "timestamp": "2026-04-13T07:59:44.011289",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80280,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1021",
              "timestamp": "2026-04-13T07:59:43.112490",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80280,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1020",
              "timestamp": "2026-04-13T07:59:30.227208",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1019",
              "timestamp": "2026-04-13T07:59:26.311813",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1018",
              "timestamp": "2026-04-13T07:59:26.311813",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1017",
              "timestamp": "2026-04-13T07:59:22.275657",
              "price": 15.13,
              "size": 1000.0,
              "notional": 15130.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1016",
              "timestamp": "2026-04-13T07:59:07.540755",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80278,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1015",
              "timestamp": "2026-04-13T07:58:57.188753",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1014",
              "timestamp": "2026-04-13T07:58:55.074062",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1013",
              "timestamp": "2026-04-13T07:58:55.074062",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1012",
              "timestamp": "2026-04-13T07:58:42.992987",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80276,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1011",
              "timestamp": "2026-04-13T07:58:34.207924",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80275,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1010",
              "timestamp": "2026-04-13T07:58:20.594166",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80274,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1009",
              "timestamp": "2026-04-13T07:58:11.890171",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80273,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1008",
              "timestamp": "2026-04-13T07:57:58.333051",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80272,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1007",
              "timestamp": "2026-04-13T07:57:44.694814",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80271,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1006",
              "timestamp": "2026-04-13T07:57:36.032761",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80270,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1005",
              "timestamp": "2026-04-13T07:57:30.538889",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 80269,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1004",
              "timestamp": "2026-04-13T07:57:22.611986",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80268,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1003",
              "timestamp": "2026-04-13T07:57:09.001852",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80267,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1002",
              "timestamp": "2026-04-13T07:56:56.739464",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80266,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1001",
              "timestamp": "2026-04-13T07:56:55.316297",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80266,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1000",
              "timestamp": "2026-04-13T07:56:37.574429",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80265,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "999",
              "timestamp": "2026-04-13T07:56:25.806386",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "998",
              "timestamp": "2026-04-13T07:56:21.341028",
              "price": 15.07,
              "size": 4500.0,
              "notional": 67815.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "997",
              "timestamp": "2026-04-13T07:56:19.713027",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "996",
              "timestamp": "2026-04-13T07:56:01.933699",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80263,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "995",
              "timestamp": "2026-04-13T07:55:53.432535",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80262,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "994",
              "timestamp": "2026-04-13T07:55:51.750232",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80262,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "993",
              "timestamp": "2026-04-13T07:55:46.143660",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80261,
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
          "n_trades": 73423,
          "n_runs": 20528,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-07",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.0017841820682892283,
            "mixed_pct": 0.0,
            "instit_pct": 0.5404982090080764,
            "ambiguous_pct": 0.10458575650681666,
            "unobservable_pct": 0.3531318524168176,
            "unclear_pct": 0.4577176089236343,
            "retail_qty_pct": 0.0008577868665349015,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6633522309956013,
            "ambiguous_qty_pct": 0.06799066820578191,
            "unobservable_qty_pct": 0.26779931393208195,
            "unclear_qty_pct": 0.3357899821378639,
            "retail_notional_pct": 0.0008794429388339658,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6640442268847259,
            "ambiguous_notional_pct": 0.06786314022788381,
            "unobservable_notional_pct": 0.26721318994855625,
            "unclear_notional_pct": 0.33507633017644006
          },
          "run_composition": {
            "retail_pct": 0.006137957911145752,
            "mixed_pct": 0.0,
            "instit_pct": 0.19631722525331255,
            "ambiguous_pct": 0.12344115354637568,
            "unobservable_pct": 0.674103663289166,
            "unclear_pct": 0.7975448168355417,
            "retail_notional_pct": 0.0008794429388339658,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6640442268847259,
            "unclear_notional_pct": 0.33507633017644006
          },
          "counts": {
            "trades": {
              "retail": 131,
              "mixed": 0,
              "institutional": 39685,
              "ambiguous": 7679,
              "unobservable": 25928,
              "unclear": 33607
            },
            "runs": {
              "retail": 126,
              "mixed": 0,
              "institutional": 4030,
              "ambiguous": 2534,
              "unobservable": 13838,
              "unclear": 16372
            }
          },
          "confidence": {
            "high": 0.1597817614964926,
            "medium": 0.041260717069368666,
            "low": 0.0014127045985970381,
            "na": 0.7975448168355417
          },
          "confidence_counts": {
            "high": 3280,
            "medium": 847,
            "low": 29,
            "na": 16372
          },
          "trade_confidence": {
            "high": 0.46082290290508426,
            "medium": 0.0777140677989186,
            "low": 0.0037454203723628838,
            "na": 0.4577176089236343
          },
          "trade_confidence_counts": {
            "high": 33835,
            "medium": 5706,
            "low": 275,
            "na": 33607
          },
          "observability": {
            "avg_feature_coverage": 0.600587003117693,
            "observable_run_pct": 0.32589633671083396,
            "ambiguous_run_pct": 0.12344115354637568,
            "unobservable_run_pct": 0.674103663289166
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.674103663289166,
          "dominance_gap": 0.4777864380358535,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 73423
            },
            "d2_information": {
              "UNOBSERVABLE": 73423
            },
            "d3_urgency": {
              "IMMEDIATE": 19944,
              "ADAPTIVE": 584
            },
            "participant_confidence": {
              "NA": 16372,
              "HIGH": 3280,
              "MEDIUM": 847,
              "LOW": 29
            }
          },
          "trade_size": {
            "avg": 20059.278034267194,
            "median": 7555.0
          },
          "run_size": {
            "avg": 71746.51067371396,
            "median": 15200.0,
            "avg_length": 3.576724473889322
          },
          "recent_trades": [
            {
              "trade_id": "1022",
              "timestamp": "2026-04-13T07:59:44.011289",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80280,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1021",
              "timestamp": "2026-04-13T07:59:43.112490",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80280,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1020",
              "timestamp": "2026-04-13T07:59:30.227208",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1019",
              "timestamp": "2026-04-13T07:59:26.311813",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1018",
              "timestamp": "2026-04-13T07:59:26.311813",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1017",
              "timestamp": "2026-04-13T07:59:22.275657",
              "price": 15.13,
              "size": 1000.0,
              "notional": 15130.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1016",
              "timestamp": "2026-04-13T07:59:07.540755",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80278,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1015",
              "timestamp": "2026-04-13T07:58:57.188753",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1014",
              "timestamp": "2026-04-13T07:58:55.074062",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1013",
              "timestamp": "2026-04-13T07:58:55.074062",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1012",
              "timestamp": "2026-04-13T07:58:42.992987",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80276,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1011",
              "timestamp": "2026-04-13T07:58:34.207924",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80275,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1010",
              "timestamp": "2026-04-13T07:58:20.594166",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80274,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1009",
              "timestamp": "2026-04-13T07:58:11.890171",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80273,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1008",
              "timestamp": "2026-04-13T07:57:58.333051",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80272,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1007",
              "timestamp": "2026-04-13T07:57:44.694814",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80271,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1006",
              "timestamp": "2026-04-13T07:57:36.032761",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80270,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1005",
              "timestamp": "2026-04-13T07:57:30.538889",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 80269,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1004",
              "timestamp": "2026-04-13T07:57:22.611986",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80268,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1003",
              "timestamp": "2026-04-13T07:57:09.001852",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80267,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1002",
              "timestamp": "2026-04-13T07:56:56.739464",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80266,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1001",
              "timestamp": "2026-04-13T07:56:55.316297",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80266,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1000",
              "timestamp": "2026-04-13T07:56:37.574429",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80265,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "999",
              "timestamp": "2026-04-13T07:56:25.806386",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "998",
              "timestamp": "2026-04-13T07:56:21.341028",
              "price": 15.07,
              "size": 4500.0,
              "notional": 67815.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "997",
              "timestamp": "2026-04-13T07:56:19.713027",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "996",
              "timestamp": "2026-04-13T07:56:01.933699",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80263,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "995",
              "timestamp": "2026-04-13T07:55:53.432535",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80262,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "994",
              "timestamp": "2026-04-13T07:55:51.750232",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80262,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "993",
              "timestamp": "2026-04-13T07:55:46.143660",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80261,
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
          "n_trades": 137417,
          "n_runs": 46311,
          "n_trade_days": 126,
          "first_trade_date": "2025-09-24",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.0009533027209151706,
            "mixed_pct": 0.0,
            "instit_pct": 0.5391472670775814,
            "ambiguous_pct": 0.07977178951658091,
            "unobservable_pct": 0.38012764068492255,
            "unclear_pct": 0.4598994302015035,
            "retail_qty_pct": 0.0005337718110242534,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6648721599162837,
            "ambiguous_qty_pct": 0.054367030904140884,
            "unobservable_qty_pct": 0.2802270373685512,
            "unclear_qty_pct": 0.3345940682726921,
            "retail_notional_pct": 0.0005291228121197755,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6654932708487388,
            "ambiguous_notional_pct": 0.05356281764598673,
            "unobservable_notional_pct": 0.2804147886931547,
            "unclear_notional_pct": 0.3339776063391415
          },
          "run_composition": {
            "retail_pct": 0.0027207358942799766,
            "mixed_pct": 0.0,
            "instit_pct": 0.211720757487422,
            "ambiguous_pct": 0.08399732245038975,
            "unobservable_pct": 0.7015611841679082,
            "unclear_pct": 0.785558506618298,
            "retail_notional_pct": 0.0005291228121197755,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6654932708487388,
            "unclear_notional_pct": 0.3339776063391415
          },
          "counts": {
            "trades": {
              "retail": 131,
              "mixed": 0,
              "institutional": 74088,
              "ambiguous": 10962,
              "unobservable": 52236,
              "unclear": 63198
            },
            "runs": {
              "retail": 126,
              "mixed": 0,
              "institutional": 9805,
              "ambiguous": 3890,
              "unobservable": 32490,
              "unclear": 36380
            }
          },
          "confidence": {
            "high": 0.18811945326164412,
            "medium": 0.02535034872924359,
            "low": 0.0009716913908142774,
            "na": 0.7855585066182981
          },
          "confidence_counts": {
            "high": 8712,
            "medium": 1174,
            "low": 45,
            "na": 36380
          },
          "trade_confidence": {
            "high": 0.48434327630496954,
            "medium": 0.05264268613053698,
            "low": 0.003114607362990023,
            "na": 0.4598994302015035
          },
          "trade_confidence_counts": {
            "high": 66557,
            "medium": 7234,
            "low": 428,
            "na": 63198
          },
          "observability": {
            "avg_feature_coverage": 0.5955205026883462,
            "observable_run_pct": 0.29843881583209175,
            "ambiguous_run_pct": 0.08399732245038975,
            "unobservable_run_pct": 0.7015611841679082
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.7015611841679082,
          "dominance_gap": 0.4898404266804862,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 137417
            },
            "d2_information": {
              "UNOBSERVABLE": 137417
            },
            "d3_urgency": {
              "IMMEDIATE": 45101,
              "ADAPTIVE": 1210
            },
            "participant_confidence": {
              "NA": 36380,
              "HIGH": 8712,
              "MEDIUM": 1174,
              "LOW": 45
            }
          },
          "trade_size": {
            "avg": 17813.864349752945,
            "median": 7905.0
          },
          "run_size": {
            "avg": 52858.452578221164,
            "median": 14980.0,
            "avg_length": 2.967264796700568
          },
          "recent_trades": [
            {
              "trade_id": "1022",
              "timestamp": "2026-04-13T07:59:44.011289",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80280,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1021",
              "timestamp": "2026-04-13T07:59:43.112490",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80280,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1020",
              "timestamp": "2026-04-13T07:59:30.227208",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1019",
              "timestamp": "2026-04-13T07:59:26.311813",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1018",
              "timestamp": "2026-04-13T07:59:26.311813",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1017",
              "timestamp": "2026-04-13T07:59:22.275657",
              "price": 15.13,
              "size": 1000.0,
              "notional": 15130.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80279,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "1016",
              "timestamp": "2026-04-13T07:59:07.540755",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80278,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1015",
              "timestamp": "2026-04-13T07:58:57.188753",
              "price": 15.13,
              "size": 500.0,
              "notional": 7565.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1014",
              "timestamp": "2026-04-13T07:58:55.074062",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1013",
              "timestamp": "2026-04-13T07:58:55.074062",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 80277,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1012",
              "timestamp": "2026-04-13T07:58:42.992987",
              "price": 15.12,
              "size": 500.0,
              "notional": 7560.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80276,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1011",
              "timestamp": "2026-04-13T07:58:34.207924",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80275,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1010",
              "timestamp": "2026-04-13T07:58:20.594166",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80274,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1009",
              "timestamp": "2026-04-13T07:58:11.890171",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80273,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1008",
              "timestamp": "2026-04-13T07:57:58.333051",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80272,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1007",
              "timestamp": "2026-04-13T07:57:44.694814",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80271,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1006",
              "timestamp": "2026-04-13T07:57:36.032761",
              "price": 15.11,
              "size": 500.0,
              "notional": 7555.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80270,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1005",
              "timestamp": "2026-04-13T07:57:30.538889",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 80269,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1004",
              "timestamp": "2026-04-13T07:57:22.611986",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80268,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1003",
              "timestamp": "2026-04-13T07:57:09.001852",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80267,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1002",
              "timestamp": "2026-04-13T07:56:56.739464",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80266,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1001",
              "timestamp": "2026-04-13T07:56:55.316297",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80266,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1000",
              "timestamp": "2026-04-13T07:56:37.574429",
              "price": 15.09,
              "size": 500.0,
              "notional": 7545.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80265,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "999",
              "timestamp": "2026-04-13T07:56:25.806386",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "998",
              "timestamp": "2026-04-13T07:56:21.341028",
              "price": 15.07,
              "size": 4500.0,
              "notional": 67815.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "997",
              "timestamp": "2026-04-13T07:56:19.713027",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 80264,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "996",
              "timestamp": "2026-04-13T07:56:01.933699",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80263,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "995",
              "timestamp": "2026-04-13T07:55:53.432535",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80262,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "994",
              "timestamp": "2026-04-13T07:55:51.750232",
              "price": 15.07,
              "size": 500.0,
              "notional": 7535.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 80262,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "993",
              "timestamp": "2026-04-13T07:55:46.143660",
              "price": 15.08,
              "size": 500.0,
              "notional": 7540.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 80261,
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
      "n_trades": 137417,
      "n_runs": 46311,
      "n_trade_days": 126,
      "first_trade_date": "2025-09-24",
      "last_trade_date": "2026-04-13",
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
        "retail_pct": 0.0009533027209151706,
        "mixed_pct": 0.0,
        "instit_pct": 0.5391472670775814,
        "ambiguous_pct": 0.07977178951658091,
        "unobservable_pct": 0.38012764068492255,
        "unclear_pct": 0.4598994302015035,
        "retail_qty_pct": 0.0005337718110242534,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.6648721599162837,
        "ambiguous_qty_pct": 0.054367030904140884,
        "unobservable_qty_pct": 0.2802270373685512,
        "unclear_qty_pct": 0.3345940682726921,
        "retail_notional_pct": 0.0005291228121197755,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.6654932708487388,
        "ambiguous_notional_pct": 0.05356281764598673,
        "unobservable_notional_pct": 0.2804147886931547,
        "unclear_notional_pct": 0.3339776063391415
      },
      "run_composition": {
        "retail_pct": 0.0027207358942799766,
        "mixed_pct": 0.0,
        "instit_pct": 0.211720757487422,
        "ambiguous_pct": 0.08399732245038975,
        "unobservable_pct": 0.7015611841679082,
        "unclear_pct": 0.785558506618298
      },
      "trade_size": {
        "avg": 17813.864349752945,
        "median": 7905.0
      },
      "run_size": {
        "avg": 52858.452578221164,
        "median": 14980.0,
        "avg_length": 2.967264796700568
      },
      "confidence": {
        "high": 0.18811945326164412,
        "medium": 0.02535034872924359,
        "low": 0.0009716913908142774,
        "na": 0.7855585066182981
      },
      "confidence_counts": {
        "high": 8712,
        "medium": 1174,
        "low": 45,
        "na": 36380
      },
      "trade_confidence": {
        "high": 0.48434327630496954,
        "medium": 0.05264268613053698,
        "low": 0.003114607362990023,
        "na": 0.4598994302015035
      },
      "trade_confidence_counts": {
        "high": 66557,
        "medium": 7234,
        "low": 428,
        "na": 63198
      },
      "counts": {
        "trades": {
          "retail": 131,
          "mixed": 0,
          "institutional": 74088,
          "ambiguous": 10962,
          "unobservable": 52236,
          "unclear": 63198
        },
        "runs": {
          "retail": 126,
          "mixed": 0,
          "institutional": 9805,
          "ambiguous": 3890,
          "unobservable": 32490,
          "unclear": 36380
        }
      },
      "observability": {
        "avg_feature_coverage": 0.5955205026883462,
        "observable_run_pct": 0.29843881583209175,
        "ambiguous_run_pct": 0.08399732245038975,
        "unobservable_run_pct": 0.7015611841679082
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.7015611841679082,
      "dominance_gap": 0.4898404266804862,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 21372,
            "n_runs": 9140,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.5542766236196893,
            "ambiguous_pct": 0.04814710836608647,
            "unobservable_pct": 0.39757626801422424,
            "unclear_pct": 0.44572337638031073,
            "avg_trade_size": 15508.864513381995,
            "avg_run_notional": 36264.272689277896,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6971638243690215,
            "ambiguous_qty_pct": 0.030869753353105232,
            "unobservable_qty_pct": 0.27196642227787327,
            "unclear_qty_pct": 0.3028361756309785,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6975901609997223,
            "ambiguous_notional_pct": 0.030693400657463038,
            "unobservable_notional_pct": 0.2717164383428146,
            "unclear_notional_pct": 0.3024098390002776,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.24234135667396062,
            "run_ambiguous_pct": 0.04365426695842451,
            "run_unobservable_pct": 0.7140043763676149,
            "run_unclear_pct": 0.7576586433260395,
            "avg_feature_coverage": 0.5928993435448578,
            "high_confidence_pct": 0.23172866520787747,
            "medium_confidence_pct": 0.010612691466083152,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.7576586433260394,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 14011,
            "n_runs": 5607,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.5275854685604168,
            "ambiguous_pct": 0.05709799443294554,
            "unobservable_pct": 0.4153165370066376,
            "unclear_pct": 0.4724145314395832,
            "avg_trade_size": 14610.775731924918,
            "avg_run_notional": 36510.001565899765,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6482263213878459,
            "ambiguous_qty_pct": 0.03578060355905001,
            "unobservable_qty_pct": 0.3159930750531041,
            "unclear_qty_pct": 0.3517736786121541,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6483412552478777,
            "ambiguous_notional_pct": 0.036014182949187845,
            "unobservable_notional_pct": 0.3156445618029345,
            "unclear_notional_pct": 0.35165874475212233,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2241840556447298,
            "run_ambiguous_pct": 0.06206527554842162,
            "run_unobservable_pct": 0.7137506688068486,
            "run_unclear_pct": 0.7758159443552701,
            "avg_feature_coverage": 0.5929373996789726,
            "high_confidence_pct": 0.2154449794899233,
            "medium_confidence_pct": 0.008739076154806492,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.7758159443552702,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 29896,
            "n_runs": 8900,
            "retail_pct": 6.68985817500669e-05,
            "mixed_pct": 0.0,
            "instit_pct": 0.5496721969494247,
            "ambiguous_pct": 0.09352421728659352,
            "unobservable_pct": 0.3567366871822317,
            "unclear_pct": 0.4502609044688253,
            "avg_trade_size": 20063.41887510035,
            "avg_run_notional": 67395.05288651685,
            "retail_qty_pct": 2.425795580292633e-05,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6856996609392744,
            "ambiguous_qty_pct": 0.06301008871401274,
            "unobservable_qty_pct": 0.25126599239090996,
            "unclear_qty_pct": 0.3142760811049227,
            "retail_notional_pct": 2.360724070703053e-05,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6849634707915082,
            "ambiguous_notional_pct": 0.06291124333783783,
            "unobservable_notional_pct": 0.25210167862994687,
            "unclear_notional_pct": 0.3150129219677847,
            "run_retail_pct": 0.00011235955056179776,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2051685393258427,
            "run_ambiguous_pct": 0.10168539325842697,
            "run_unobservable_pct": 0.6930337078651685,
            "run_unclear_pct": 0.7947191011235955,
            "avg_feature_coverage": 0.5960449438202247,
            "high_confidence_pct": 0.18483146067415732,
            "medium_confidence_pct": 0.02044943820224719,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.7947191011235955,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 16352,
            "n_runs": 4000,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.5834148727984344,
            "ambiguous_pct": 0.09637964774951076,
            "unobservable_pct": 0.3202054794520548,
            "unclear_pct": 0.41658512720156554,
            "avg_trade_size": 19901.346910469667,
            "avg_run_notional": 81356.70617,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.701123455506168,
            "ambiguous_qty_pct": 0.05691027834973429,
            "unobservable_qty_pct": 0.24196626614409777,
            "unclear_qty_pct": 0.29887654449383205,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7023425011897824,
            "ambiguous_notional_pct": 0.05695501389052855,
            "unobservable_notional_pct": 0.24070248491968907,
            "unclear_notional_pct": 0.29765749881021764,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.20025,
            "run_ambiguous_pct": 0.1265,
            "run_unobservable_pct": 0.67325,
            "run_unclear_pct": 0.79975,
            "avg_feature_coverage": 0.5990125000000001,
            "high_confidence_pct": 0.16525,
            "medium_confidence_pct": 0.033,
            "low_confidence_pct": 0.002,
            "na_confidence_pct": 0.79975,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 24331,
            "n_runs": 6707,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.4997328510953105,
            "ambiguous_pct": 0.1096132505856726,
            "unobservable_pct": 0.39065389831901687,
            "unclear_pct": 0.5002671489046895,
            "avg_trade_size": 20017.25071719206,
            "avg_run_notional": 72616.62847770986,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.609686104565325,
            "ambiguous_qty_pct": 0.07200086432565832,
            "unobservable_qty_pct": 0.3183130311090167,
            "unclear_qty_pct": 0.39031389543467504,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6099324995679737,
            "ambiguous_notional_pct": 0.07170095725201449,
            "unobservable_notional_pct": 0.3183665431800119,
            "unclear_notional_pct": 0.39006750043202637,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1783211570001491,
            "run_ambiguous_pct": 0.12658416579692858,
            "run_unobservable_pct": 0.6950946772029223,
            "run_unclear_pct": 0.8216788429998508,
            "avg_feature_coverage": 0.5957357984195616,
            "high_confidence_pct": 0.14507231250931862,
            "medium_confidence_pct": 0.03324884449083047,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.821678842999851,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 5440,
            "n_runs": 2142,
            "retail_pct": 0.023713235294117646,
            "mixed_pct": 0.0,
            "instit_pct": 0.5084558823529411,
            "ambiguous_pct": 0.12830882352941175,
            "unobservable_pct": 0.3395220588235294,
            "unclear_pct": 0.4678308823529412,
            "avg_trade_size": 16828.71594117647,
            "avg_run_notional": 42739.596041083096,
            "retail_qty_pct": 0.014042370870915458,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6356642217959081,
            "ambiguous_qty_pct": 0.1012396431274027,
            "unobservable_qty_pct": 0.24905376420577377,
            "unclear_qty_pct": 0.3502934073331765,
            "retail_notional_pct": 0.013993658357164302,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6350189370465094,
            "ambiguous_notional_pct": 0.1009729138713673,
            "unobservable_notional_pct": 0.25001449072495907,
            "unclear_notional_pct": 0.3509874045963264,
            "run_retail_pct": 0.05835667600373483,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.20214752567693745,
            "run_ambiguous_pct": 0.14098972922502334,
            "run_unobservable_pct": 0.5985060690943044,
            "run_unclear_pct": 0.7394957983193278,
            "avg_feature_coverage": 0.6265406162464986,
            "high_confidence_pct": 0.10270774976657329,
            "medium_confidence_pct": 0.14799253034547152,
            "low_confidence_pct": 0.00980392156862745,
            "na_confidence_pct": 0.7394957983193278,
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
          "trade_id": "1022",
          "timestamp": "2026-04-13T07:59:44.011289",
          "price": 15.13,
          "size": 500.0,
          "notional": 7565.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 80280,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1021",
          "timestamp": "2026-04-13T07:59:43.112490",
          "price": 15.13,
          "size": 500.0,
          "notional": 7565.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 80280,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1020",
          "timestamp": "2026-04-13T07:59:30.227208",
          "price": 15.13,
          "size": 500.0,
          "notional": 7565.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 80279,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "1019",
          "timestamp": "2026-04-13T07:59:26.311813",
          "price": 15.13,
          "size": 500.0,
          "notional": 7565.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 80279,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "1018",
          "timestamp": "2026-04-13T07:59:26.311813",
          "price": 15.13,
          "size": 500.0,
          "notional": 7565.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 80279,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "1017",
          "timestamp": "2026-04-13T07:59:22.275657",
          "price": 15.13,
          "size": 1000.0,
          "notional": 15130.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 80279,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "1016",
          "timestamp": "2026-04-13T07:59:07.540755",
          "price": 15.13,
          "size": 500.0,
          "notional": 7565.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80278,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1015",
          "timestamp": "2026-04-13T07:58:57.188753",
          "price": 15.13,
          "size": 500.0,
          "notional": 7565.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 80277,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1014",
          "timestamp": "2026-04-13T07:58:55.074062",
          "price": 15.12,
          "size": 500.0,
          "notional": 7560.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 80277,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1013",
          "timestamp": "2026-04-13T07:58:55.074062",
          "price": 15.12,
          "size": 500.0,
          "notional": 7560.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 80277,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1012",
          "timestamp": "2026-04-13T07:58:42.992987",
          "price": 15.12,
          "size": 500.0,
          "notional": 7560.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80276,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1011",
          "timestamp": "2026-04-13T07:58:34.207924",
          "price": 15.11,
          "size": 500.0,
          "notional": 7555.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80275,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1010",
          "timestamp": "2026-04-13T07:58:20.594166",
          "price": 15.11,
          "size": 500.0,
          "notional": 7555.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80274,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1009",
          "timestamp": "2026-04-13T07:58:11.890171",
          "price": 15.11,
          "size": 500.0,
          "notional": 7555.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80273,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1008",
          "timestamp": "2026-04-13T07:57:58.333051",
          "price": 15.11,
          "size": 500.0,
          "notional": 7555.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80272,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1007",
          "timestamp": "2026-04-13T07:57:44.694814",
          "price": 15.11,
          "size": 500.0,
          "notional": 7555.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80271,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1006",
          "timestamp": "2026-04-13T07:57:36.032761",
          "price": 15.11,
          "size": 500.0,
          "notional": 7555.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80270,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1005",
          "timestamp": "2026-04-13T07:57:30.538889",
          "price": 15.07,
          "size": 500.0,
          "notional": 7535.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 80269,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1004",
          "timestamp": "2026-04-13T07:57:22.611986",
          "price": 15.09,
          "size": 500.0,
          "notional": 7545.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80268,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1003",
          "timestamp": "2026-04-13T07:57:09.001852",
          "price": 15.09,
          "size": 500.0,
          "notional": 7545.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80267,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1002",
          "timestamp": "2026-04-13T07:56:56.739464",
          "price": 15.07,
          "size": 500.0,
          "notional": 7535.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 80266,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1001",
          "timestamp": "2026-04-13T07:56:55.316297",
          "price": 15.09,
          "size": 500.0,
          "notional": 7545.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 80266,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1000",
          "timestamp": "2026-04-13T07:56:37.574429",
          "price": 15.09,
          "size": 500.0,
          "notional": 7545.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80265,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "999",
          "timestamp": "2026-04-13T07:56:25.806386",
          "price": 15.07,
          "size": 500.0,
          "notional": 7535.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 80264,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "998",
          "timestamp": "2026-04-13T07:56:21.341028",
          "price": 15.07,
          "size": 4500.0,
          "notional": 67815.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 80264,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "997",
          "timestamp": "2026-04-13T07:56:19.713027",
          "price": 15.08,
          "size": 500.0,
          "notional": 7540.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 80264,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "996",
          "timestamp": "2026-04-13T07:56:01.933699",
          "price": 15.08,
          "size": 500.0,
          "notional": 7540.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80263,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "995",
          "timestamp": "2026-04-13T07:55:53.432535",
          "price": 15.07,
          "size": 500.0,
          "notional": 7535.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 80262,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "994",
          "timestamp": "2026-04-13T07:55:51.750232",
          "price": 15.07,
          "size": 500.0,
          "notional": 7535.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 80262,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "993",
          "timestamp": "2026-04-13T07:55:46.143660",
          "price": 15.08,
          "size": 500.0,
          "notional": 7540.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 80261,
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
      "total_trades": 137416,
      "price_moving_trades": 33371,
      "pct_price_moving": 24.28465389765384,
      "all_movers": {
        "count": 33371,
        "avg_size": 18277.904344191065,
        "median_size": 7945.0,
        "retail_count": 71,
        "mixed_count": 0,
        "institutional_count": 15908,
        "ambiguous_count": 3453,
        "unobservable_count": 13939,
        "retail_pct": 0.2127595816727098,
        "mixed_pct": 0.0,
        "instit_pct": 47.67013274999251,
        "unclear_pct": 52.11710766833478
      },
      "positive_movers": {
        "count": 16514,
        "avg_size": 17961.643810706068,
        "median_size": 7935.0,
        "retail_count": 6,
        "mixed_count": 0,
        "institutional_count": 7990,
        "ambiguous_count": 1597,
        "unobservable_count": 6921,
        "retail_pct": 0.03633280852609907,
        "mixed_pct": 0.0,
        "instit_pct": 48.38319002058859,
        "unclear_pct": 51.58047717088531
      },
      "negative_movers": {
        "count": 16857,
        "avg_size": 18587.729725336656,
        "median_size": 7955.0,
        "retail_count": 65,
        "mixed_count": 0,
        "institutional_count": 7918,
        "ambiguous_count": 1856,
        "unobservable_count": 7018,
        "retail_pct": 0.3855964881058314,
        "mixed_pct": 0.0,
        "instit_pct": 46.971584504953434,
        "unclear_pct": 52.64281900694074
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
          "opening": 0.006301134937720488,
          "continuous": 0.9169860549123501,
          "closing": 0.07671281014992938,
          "auctions": 0.08301394508764987,
          "other": 0.0
        },
        "1M": {
          "opening": 0.005880656218705113,
          "continuous": 0.7310766341054401,
          "closing": 0.2445576674767323,
          "auctions": 0.2504383236954374,
          "other": 0.01848504219912261
        },
        "3M": {
          "opening": 0.0026569074834423907,
          "continuous": 0.8030267428244036,
          "closing": 0.120343554851376,
          "auctions": 0.1230004623348184,
          "other": 0.07397279484077801
        },
        "6M": {
          "opening": 0.001983072764742556,
          "continuous": 0.8274403245937195,
          "closing": 0.1084338538825955,
          "auctions": 0.11041692664733804,
          "other": 0.06214274875894238
        }
      },
      "hhi": {
        "1D": 0.10106212865284514,
        "1M": 0.12832078325531757,
        "3M": 0.13020309355429935,
        "6M": 0.1352094905987421
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0015
        },
        {
          "time": "09:30",
          "avg_share": 0.1061
        },
        {
          "time": "10:00",
          "avg_share": 0.0877
        },
        {
          "time": "10:30",
          "avg_share": 0.0786
        },
        {
          "time": "11:00",
          "avg_share": 0.0655
        },
        {
          "time": "11:30",
          "avg_share": 0.0416
        },
        {
          "time": "12:00",
          "avg_share": 0.0429
        },
        {
          "time": "13:00",
          "avg_share": 0.0743
        },
        {
          "time": "13:30",
          "avg_share": 0.0709
        },
        {
          "time": "14:00",
          "avg_share": 0.0867
        },
        {
          "time": "14:30",
          "avg_share": 0.0721
        },
        {
          "time": "15:00",
          "avg_share": 0.0652
        },
        {
          "time": "15:30",
          "avg_share": 0.1343
        },
        {
          "time": "16:00",
          "avg_share": 0.0729
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1836",
          "auctions_pct": 10.135561099059826,
          "hhi": 0.13225064020627783,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "1361",
          "auctions_pct": 3.1750510783764723,
          "hhi": 0.15600517747148746,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1440",
          "auctions_pct": 2.1684962212519694,
          "hhi": 0.1415351667896148,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1368",
          "auctions_pct": 5.536036556754357,
          "hhi": 0.1243834873732215,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "551",
          "auctions_pct": 10.36677602097901,
          "hhi": 0.11757586051079,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2331",
          "auctions_pct": 8.040985297390515,
          "hhi": 0.11362638990926285,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "933",
          "auctions_pct": 8.590514038827049,
          "hhi": 0.2435484880250314,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "82331",
          "auctions_pct": 0.11578766694345609,
          "hhi": 0.6933567684891452,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2232",
          "auctions_pct": 3.435842932633731,
          "hhi": 0.1490248881853812,
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
