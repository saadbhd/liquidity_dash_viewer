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
      "marketCap": 6790516.644,
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
      "marketCap": 67406733.30600001,
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
      "marketCap": 108471542.4,
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
      "marketCap": 148931333.9,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 238650000.0,
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
    "asof_date": "2026-05-25",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "136.9M",
    "market_cap_category": "small",
    "universe_total": 556,
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
          "score_pca": 69.60431654676259,
          "score_pca_percentile": 69.60431654676259,
          "rank_pca": 170,
          "total": 556,
          "adv_notional_sgd": 219000.0,
          "adv_volume_shares": 912500.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0016001999013557867,
          "votes": 35.0,
          "trades": 35.0,
          "spread_pct": 0.023166023166023186,
          "spread_ticks": 1.1111111111111112,
          "amihud": 0.0,
          "volatility": 0.19657631614338103
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5015236933755156,
          "loadings": {
            "log_adv": 0.5631848269075088,
            "log_trades": 0.5187810243754641,
            "log_turnover": 0.516229378803972,
            "neg_spread": 0.3411523083316072,
            "neg_amihud": 0.04418254130507761,
            "neg_vol": -0.1698803505783105
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
          "peer_median_adv": 2180.0,
          "peer_median_score_pca": 32.55395683453237,
          "peer_median_trades": 4.5,
          "peer_median_volatility": 0.05153354820189707,
          "peer_median_spread_pct": 0.06011957021614611,
          "peer_median_spread_ticks": 2.599090909090909,
          "peer_median_amihud": 5.012531347586902e-07,
          "peer_median_turnover_ratio": 0.00011246461936297443,
          "target_vs_peer": {
            "score_pca_delta": 37.05,
            "adv_delta_pct": 9945.9,
            "trades_delta_pct": 677.78,
            "volatility_delta_pct": -281.45,
            "spread_pct_delta_pct": 61.47,
            "spread_ticks_delta_pct": -57.25,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 1322.85
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 69.60431654676259,
            "rank_pca": 170,
            "adv": 219000.0,
            "trades": 35.0,
            "volatility": 0.19657631614338103,
            "spread_pct": 0.023166023166023186,
            "spread_ticks": 1.1111111111111112,
            "amihud": 0.0,
            "turnover_ratio": 0.0016001999013557867,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 24.640287769784173,
            "rank_pca": 420,
            "adv": 620.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.8178343949044588,
            "spread_ticks": 40.125,
            "amihud": 0.0005017921146953405,
            "turnover_ratio": 0.00019451172523973935,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 9.892086330935252,
            "rank_pca": 502,
            "adv": 2.0,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 2.1681170310660005e-07,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 23.201438848920862,
            "rank_pca": 428,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.020408163265306138,
            "spread_ticks": 4.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 67.44604316546763,
            "rank_pca": 182,
            "adv": 55658.4,
            "trades": 31.0,
            "volatility": 0.3467150657358996,
            "spread_pct": 0.03874092009685234,
            "spread_ticks": 1.0847457627118644,
            "amihud": 6.654348137394711e-07,
            "turnover_ratio": 0.0033988144453724377,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 16.18705035971223,
            "rank_pca": 467,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.08102345415778253,
            "spread_ticks": 6.333333333333333,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 68.70503597122301,
            "rank_pca": 175,
            "adv": 114105.0,
            "trades": 24.0,
            "volatility": 0.3739151228838485,
            "spread_pct": 0.0392156862745097,
            "spread_ticks": 1.0,
            "amihud": 3.3707145577790915e-07,
            "turnover_ratio": 0.0055657930034974795,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 40.46762589928058,
            "rank_pca": 332,
            "adv": 3740.0,
            "trades": 7.0,
            "volatility": 0.5512294452549547,
            "spread_pct": 0.09412861136999065,
            "spread_ticks": 15.538461538461538,
            "amihud": 1.2017064231208316e-05,
            "turnover_ratio": 3.04175134862095e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 79.31654676258992,
            "rank_pca": 116,
            "adv": 333277.5,
            "trades": 262.0,
            "volatility": 0.10306709640379413,
            "spread_pct": 0.006476881268643151,
            "spread_ticks": 1.1981818181818182,
            "amihud": 1.630707926186306e-08,
            "turnover_ratio": 0.005336307328647217,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26073149701675813,
              "median": 0.12314863947395847,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.867247527938474,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2763806.6923070587,
              "median": 15882.0,
              "min": 0.0,
              "max": 158512738.0,
              "p5": 0.0,
              "p95": 14302418.75,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10357585320035632,
              "median": 0.03125000000000003,
              "min": 0.0002630736276341987,
              "max": 1.7037037037037037,
              "p5": 0.003318113744926958,
              "p95": 0.4954250655588474,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0050018210540971894,
              "median": 0.0003191309690936439,
              "min": 0.0,
              "max": 0.6855184233076264,
              "p5": 0.0,
              "p95": 0.013918336424207405,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.770481718289762e-05,
              "median": 1.826969541677288e-08,
              "min": 0.0,
              "max": 0.012499999999999997,
              "p5": 0.0,
              "p95": 6.509435796140764e-05,
              "count": 423
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 495.64208633093523,
              "median": 9.0,
              "min": 0.0,
              "max": 13347.0,
              "p5": 0.0,
              "p95": 3312.25,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.15143439999235303,
              "median": 0.05153354820189707,
              "min": 0.0,
              "max": 0.5512294452549547,
              "p5": 0.0,
              "p95": 0.4845099591635635,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2320263.9375,
              "median": 2180.0,
              "min": 0.0,
              "max": 18005472.0,
              "p5": 0.0,
              "p95": 11820203.92499999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.2138773242858079,
              "median": 0.05209473866190286,
              "min": 0.0013143994875922515,
              "max": 0.8178343949044588,
              "p5": 0.0031212681109600666,
              "p95": 0.7649256900212315,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023467284640043677,
              "median": 0.00011246461936297443,
              "min": 0.0,
              "max": 0.01161217443160288,
              "p5": 0.0,
              "p95": 0.009415620945568394,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.563791875039787e-05,
              "median": 9.166787919174699e-09,
              "min": 0.0,
              "max": 0.0005017921146953405,
              "p5": 0.0,
              "p95": 0.0003793483520793075,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 497.875,
              "median": 4.5,
              "min": 0.0,
              "max": 3676.0,
              "p5": 0.0,
              "p95": 2481.099999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 63425.3625,
              "median": 2180.0,
              "min": 0.0,
              "max": 333277.5,
              "p5": 0.0,
              "p95": 256567.12499999988,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 40.875,
              "median": 4.5,
              "min": 0.0,
              "max": 262.0,
              "p5": 0.0,
              "p95": 181.14999999999986,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.17186584128481208,
              "median": 0.05153354820189707,
              "min": 0.0,
              "max": 0.5512294452549547,
              "p5": 0.0,
              "p95": 0.4891694324250674,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.22056184725052622,
              "median": 0.06011957021614611,
              "min": 0.006476881268643151,
              "max": 0.8178343949044588,
              "p5": 0.011352829967475197,
              "p95": 0.7649256900212315,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.784965306586068,
              "median": 2.599090909090909,
              "min": 1.0,
              "max": 40.125,
              "p5": 1.0,
              "p95": 31.519711538461525,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.580466537922136e-05,
              "median": 5.012531347586902e-07,
              "min": 0.0,
              "max": 0.0005017921146953405,
              "p5": 4.076769815465765e-09,
              "p95": 0.0003793483520793075,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001815757603493274,
              "median": 0.00011246461936297443,
              "min": 0.0,
              "max": 0.0055657930034974795,
              "p5": 0.0,
              "p95": 0.0054854730172998875,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.0004735263143342827,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.0004735263143342827,
            "vs_sector": 0.0,
            "vs_peers": 0.0
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 71.58273381294964,
          "score_pca_percentile": 71.58273381294964,
          "rank_pca": 159,
          "total": 556,
          "adv_notional_sgd": 219000.0,
          "adv_volume_shares": 912500.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0016001999013557867,
          "votes": 35.0,
          "trades": 35.0,
          "spread_pct": 0.022742125212390562,
          "spread_ticks": 1.0875,
          "amihud": 7.388399518246806e-08,
          "volatility": 0.4298191436443606
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5163370505901359,
          "loadings": {
            "log_adv": 0.5507261749059892,
            "log_trades": 0.5042453426048755,
            "log_turnover": 0.5075613495428005,
            "neg_spread": 0.39618478208525,
            "neg_amihud": 0.13569077342564914,
            "neg_vol": 0.09718242452322666
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
          "peer_median_adv": 1870.0,
          "peer_median_score_pca": 32.82374100719424,
          "peer_median_trades": 2.5,
          "peer_median_volatility": 0.25063366021311295,
          "peer_median_spread_pct": 0.043403234100908544,
          "peer_median_spread_ticks": 2.430145278450363,
          "peer_median_amihud": 2.4955049947428733e-07,
          "peer_median_turnover_ratio": 1.520875674310475e-05,
          "target_vs_peer": {
            "score_pca_delta": 38.76,
            "adv_delta_pct": 11611.2,
            "trades_delta_pct": 1300.0,
            "volatility_delta_pct": -71.49,
            "spread_pct_delta_pct": 47.6,
            "spread_ticks_delta_pct": -55.25,
            "amihud_delta_pct": 70.39,
            "turnover_ratio_delta_pct": 10421.57
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.58273381294964,
            "rank_pca": 159,
            "adv": 219000.0,
            "trades": 35.0,
            "volatility": 0.4298191436443606,
            "spread_pct": 0.022742125212390562,
            "spread_ticks": 1.0875,
            "amihud": 7.388399518246806e-08,
            "turnover_ratio": 0.0016001999013557867,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 0.1798561151079137,
            "rank_pca": 556,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 3.5623202181175504,
            "spread_pct": 0.6000000000000001,
            "spread_ticks": 24.0,
            "amihud": 0.03619860847564832,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.327338129496403,
            "rank_pca": 536,
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
            "score_pca": 25.179856115107913,
            "rank_pca": 417,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.03603703421177363,
            "spread_pct": 0.018348623853211024,
            "spread_ticks": 3.6,
            "amihud": 1.7091387649762962e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 73.7410071942446,
            "rank_pca": 147,
            "adv": 159899.4,
            "trades": 67.0,
            "volatility": 1.2218335404923506,
            "spread_pct": 0.04029484029484029,
            "spread_ticks": 1.1306122448979592,
            "amihud": 1.6202954317066548e-07,
            "turnover_ratio": 0.010125998042250051,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 21.223021582733814,
            "rank_pca": 439,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.17748239349298867,
            "spread_pct": 0.07108118219229327,
            "spread_ticks": 5.588235294117647,
            "amihud": 1.4568764568764581e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 63.48920863309353,
            "rank_pca": 204,
            "adv": 42365.0,
            "trades": 21.0,
            "volatility": 0.6227930977488007,
            "spread_pct": 0.0392156862745097,
            "spread_ticks": 1.0,
            "amihud": 3.3707145577790915e-07,
            "turnover_ratio": 0.0020664722894980126,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 40.46762589928058,
            "rank_pca": 332,
            "adv": 3740.0,
            "trades": 5.0,
            "volatility": 0.31906947144806913,
            "spread_pct": 0.04651162790697679,
            "spread_ticks": 8.11111111111111,
            "amihud": 0.0,
            "turnover_ratio": 3.04175134862095e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 82.73381294964028,
            "rank_pca": 97,
            "adv": 383230.0,
            "trades": 426.0,
            "volatility": 0.18219784897815677,
            "spread_pct": 0.006715197569369371,
            "spread_ticks": 1.2602905569007263,
            "amihud": 2.3031883917877102e-08,
            "turnover_ratio": 0.00597464994831054,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4763734656286523,
              "median": 0.25754314231415376,
              "min": 0.0,
              "max": 11.536355577044253,
              "p5": 0.0,
              "p95": 1.4496423929435742,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3406438.420700383,
              "median": 12870.400000000001,
              "min": 0.0,
              "max": 313263925.0,
              "p5": 0.0,
              "p95": 15071136.375,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10356054424387248,
              "median": 0.03169443315725318,
              "min": 0.0002900530277874263,
              "max": 1.7037037037037037,
              "p5": 0.0034379498093766803,
              "p95": 0.4884220646992928,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005342699675986687,
              "median": 0.00023683535578855277,
              "min": 0.0,
              "max": 1.6478808252587174,
              "p5": 0.0,
              "p95": 0.013918336424207405,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002182289753985764,
              "median": 9.1764657862448e-08,
              "min": 0.0,
              "max": 0.03619860847564832,
              "p5": 0.0,
              "p95": 0.00016087926664412277,
              "count": 517
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 525.2194244604317,
              "median": 7.0,
              "min": 0.0,
              "max": 13347.0,
              "p5": 0.0,
              "p95": 3139.5,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.620990884421935,
              "median": 0.22159940723036847,
              "min": 0.0,
              "max": 3.5623202181175504,
              "p5": 0.01261296197412077,
              "p95": 2.4659448420519325,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 898216.5,
              "median": 1870.0,
              "min": 0.0,
              "max": 6579762.0,
              "p5": 0.0,
              "p95": 4410975.799999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1791724778610625,
              "median": 0.034626876559683675,
              "min": 0.0013143994875922515,
              "max": 0.6666666666666666,
              "p5": 0.0032046788162142436,
              "p95": 0.6433333333333333,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0015106609257347703,
              "median": 1.520875674310475e-05,
              "min": 0.0,
              "max": 0.00597464994831054,
              "p5": 0.0,
              "p95": 0.005451529481355819,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0045252341045886645,
              "median": 4.845793955017258e-08,
              "min": 0.0,
              "max": 0.03619860847564832,
              "p5": 0.0,
              "p95": 0.02352969370773913,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 293.75,
              "median": 2.5,
              "min": 0.0,
              "max": 1884.0,
              "p5": 0.0,
              "p95": 1373.6999999999994,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 73654.3,
              "median": 1870.0,
              "min": 0.0,
              "max": 383230.0,
              "p5": 0.0,
              "p95": 305064.28999999986,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 64.875,
              "median": 2.5,
              "min": 0.0,
              "max": 426.0,
              "p5": 0.0,
              "p95": 300.3499999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7652167005612113,
              "median": 0.25063366021311295,
              "min": 0.0,
              "max": 3.5623202181175504,
              "p5": 0.01261296197412077,
              "p95": 2.7431498809487294,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.18610422809473337,
              "median": 0.043403234100908544,
              "min": 0.006715197569369371,
              "max": 0.6666666666666666,
              "p5": 0.01078689676871395,
              "p95": 0.6433333333333333,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.71128115087843,
              "median": 2.430145278450363,
              "min": 1.0,
              "max": 24.0,
              "p5": 1.0,
              "p95": 18.43888888888888,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00452528707796913,
              "median": 2.4955049947428733e-07,
              "min": 0.0,
              "max": 0.03619860847564832,
              "p5": 0.0,
              "p95": 0.02352969370773913,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022746922241931016,
              "median": 1.520875674310475e-05,
              "min": 0.0,
              "max": 0.010125998042250051,
              "p5": 0.0,
              "p95": 0.00867302620937122,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.020408163265306367,
            "market": 0.014769561152249366,
            "sector": -0.004645760743321681,
            "peers": 0.002538071065989911,
            "vs_market": -0.035177724417555734,
            "vs_sector": -0.015762402521984686,
            "vs_peers": -0.022946234331296278
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 71.94244604316546,
          "score_pca_percentile": 71.94244604316546,
          "rank_pca": 157,
          "total": 556,
          "adv_notional_sgd": 219000.0,
          "adv_volume_shares": 912500.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0016001999013557867,
          "votes": 44.0,
          "trades": 44.0,
          "spread_pct": 0.023280423280423297,
          "spread_ticks": 1.1111111111111112,
          "amihud": 7.388399518246806e-08,
          "volatility": 0.39887278086766076
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5221699736735255,
          "loadings": {
            "log_adv": 0.5447396713545345,
            "log_trades": 0.496801986627357,
            "log_turnover": 0.4907051999051254,
            "neg_spread": 0.41069274561715624,
            "neg_amihud": 0.13269705279571542,
            "neg_vol": 0.17139966218901767
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
          "peer_median_adv": 4675.0,
          "peer_median_score_pca": 40.28776978417267,
          "peer_median_trades": 2.5,
          "peer_median_volatility": 0.4658477218222725,
          "peer_median_spread_pct": 0.04279467384143233,
          "peer_median_spread_ticks": 1.9187271062271063,
          "peer_median_amihud": 2.9458040383370093e-07,
          "peer_median_turnover_ratio": 0.00016291621487552567,
          "target_vs_peer": {
            "score_pca_delta": 31.65,
            "adv_delta_pct": 4584.5,
            "trades_delta_pct": 1660.0,
            "volatility_delta_pct": 14.38,
            "spread_pct_delta_pct": 45.6,
            "spread_ticks_delta_pct": -42.09,
            "amihud_delta_pct": 74.92,
            "turnover_ratio_delta_pct": 882.22
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.94244604316546,
            "rank_pca": 157,
            "adv": 219000.0,
            "trades": 44.0,
            "volatility": 0.39887278086766076,
            "spread_pct": 0.023280423280423297,
            "spread_ticks": 1.1111111111111112,
            "amihud": 7.388399518246806e-08,
            "turnover_ratio": 0.0016001999013557867,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.9784172661870503,
            "rank_pca": 546,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.805270311363609,
            "spread_pct": 0.5660377358490567,
            "spread_ticks": 27.0,
            "amihud": 0.0005017921146953405,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.338129496402878,
            "rank_pca": 544,
            "adv": 2.0,
            "trades": 1.0,
            "volatility": 3.9496835316263,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 2.1681170310660005e-07,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 41.54676258992806,
            "rank_pca": 326,
            "adv": 3800.0,
            "trades": 3.0,
            "volatility": 0.17912328766997784,
            "spread_pct": 0.013081395348837219,
            "spread_ticks": 2.5714285714285716,
            "amihud": 1.731297625287483e-06,
            "turnover_ratio": 5.884631003903183e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 69.24460431654677,
            "rank_pca": 172,
            "adv": 218727.69999999998,
            "trades": 67.0,
            "volatility": 1.5396145554500753,
            "spread_pct": 0.04231268616818148,
            "spread_ticks": 1.0672268907563025,
            "amihud": 1.3388326150764117e-07,
            "turnover_ratio": 0.01626038107156019,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 39.02877697841727,
            "rank_pca": 340,
            "adv": 5550.0,
            "trades": 1.0,
            "volatility": 0.3140826143912728,
            "spread_pct": 0.043276661514683186,
            "spread_ticks": 3.25,
            "amihud": 1.2620526023524643e-06,
            "turnover_ratio": 0.0002669861197120195,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 67.98561151079137,
            "rank_pca": 179,
            "adv": 114105.0,
            "trades": 35.0,
            "volatility": 0.5795850241793632,
            "spread_pct": 0.037027894347074826,
            "spread_ticks": 1.0,
            "amihud": 1.3645275986350166e-07,
            "turnover_ratio": 0.005194106024954463,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 35.97122302158273,
            "rank_pca": 357,
            "adv": 2700.0,
            "trades": 2.0,
            "volatility": 0.3521104194651819,
            "spread_pct": 0.0481066920695404,
            "spread_ticks": 8.416666666666666,
            "amihud": 4.5270804780390017e-07,
            "turnover_ratio": 2.0739213740597384e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.45323741007195,
            "rank_pca": 93,
            "adv": 636577.5,
            "trades": 419.0,
            "volatility": 0.3052270995580588,
            "spread_pct": 0.007302907148751972,
            "spread_ticks": 1.266025641025641,
            "amihud": 1.630707926186306e-08,
            "turnover_ratio": 0.009669927990213068,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6297220784465721,
              "median": 0.39883545547780097,
              "min": 0.0,
              "max": 5.873670062235366,
              "p5": 0.08535081743222095,
              "p95": 1.9553610033578983,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3496280.6573026506,
              "median": 18393.9,
              "min": 0.0,
              "max": 313263925.0,
              "p5": 0.0,
              "p95": 14896319.5,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09673839167482731,
              "median": 0.03100958693336488,
              "min": 0.0002872245650042818,
              "max": 1.4782608695652175,
              "p5": 0.003311744120331952,
              "p95": 0.4356284569902718,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006419063748871638,
              "median": 0.0003313476048005184,
              "min": 0.0,
              "max": 2.0301891767187397,
              "p5": 0.0,
              "p95": 0.01379731142668417,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.714425133466879e-05,
              "median": 1.2312475230762787e-07,
              "min": 0.0,
              "max": 0.011904761904761915,
              "p5": 0.0,
              "p95": 5.412093995505483e-05,
              "count": 549
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 538.6474820143885,
              "median": 9.0,
              "min": 0.0,
              "max": 12629.0,
              "p5": 0.0,
              "p95": 3203.25,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.944144213521372,
              "median": 0.33309651692822734,
              "min": 0.17912328766997784,
              "max": 3.9496835316263,
              "p5": 0.2035044191156057,
              "p95": 3.1991389045343572,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1281968.4375,
              "median": 4675.0,
              "min": 0.0,
              "max": 9388118.0,
              "p5": 0.7000000000000001,
              "p95": 6325078.8249999955,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17112928634181113,
              "median": 0.03327854239755324,
              "min": 0.0012818088565294324,
              "max": 0.6666666666666666,
              "p5": 0.0033891932588073215,
              "p95": 0.6314465408805031,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00225862953598871,
              "median": 0.00016291621487552567,
              "min": 0.0,
              "max": 0.009669927990213068,
              "p5": 7.588409608731002e-08,
              "p95": 0.008543695173039616,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.31661270930166e-05,
              "median": 2.6329602149318414e-07,
              "min": 0.0,
              "max": 0.0005017921146953405,
              "p5": 2.2844461645260412e-10,
              "p95": 0.00032677082872082167,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 316.875,
              "median": 2.5,
              "min": 0.0,
              "max": 2065.0,
              "p5": 0.35000000000000003,
              "p95": 1488.8999999999992,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 122682.775,
              "median": 4675.0,
              "min": 0.0,
              "max": 636577.5,
              "p5": 0.7000000000000001,
              "p95": 490330.0699999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 66.0,
              "median": 2.5,
              "min": 0.0,
              "max": 419.0,
              "p5": 0.35000000000000003,
              "p95": 295.79999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.12808710546298,
              "median": 0.4658477218222725,
              "min": 0.17912328766997784,
              "max": 3.9496835316263,
              "p5": 0.2232596218308062,
              "p95": 3.1991389045343572,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17797657988909907,
              "median": 0.04279467384143233,
              "min": 0.007302907148751972,
              "max": 0.6666666666666666,
              "p5": 0.009325378018781808,
              "p95": 0.6314465408805031,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.696418471234647,
              "median": 1.9187271062271063,
              "min": 1.0,
              "max": 27.0,
              "p5": 1.0,
              "p95": 20.495833333333323,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.319060200892716e-05,
              "median": 2.9458040383370093e-07,
              "min": 0.0,
              "max": 0.0005017921146953405,
              "p5": 5.707477741652071e-09,
              "p95": 0.00032677082872082167,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003933900442740309,
              "median": 0.00016291621487552567,
              "min": 0.0,
              "max": 0.01626038107156019,
              "p5": 7.588409608731002e-08,
              "p95": 0.013953722493088693,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.058823529411765274,
            "market": 0.02557385351512753,
            "sector": -0.02851816497531856,
            "peers": -0.016247600979618526,
            "vs_market": -0.0843973829268928,
            "vs_sector": -0.030305364436446713,
            "vs_peers": -0.04257592843214675
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 72.12230215827337,
          "score_pca_percentile": 72.12230215827337,
          "rank_pca": 156,
          "total": 556,
          "adv_notional_sgd": 201552.0,
          "adv_volume_shares": 839800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0014727100023655777,
          "votes": 52.0,
          "trades": 52.0,
          "spread_pct": 0.023904382470119483,
          "spread_ticks": 1.144927536231884,
          "amihud": 8.557943697288424e-08,
          "volatility": 0.5072588165941068
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5573968456489309,
          "loadings": {
            "log_adv": 0.5218861373608259,
            "log_trades": 0.4708871345832243,
            "log_turnover": 0.4786825209128084,
            "neg_spread": 0.41504764795594734,
            "neg_amihud": 0.21481201207342746,
            "neg_vol": 0.24156667750821592
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
          "peer_median_adv": 6520.5,
          "peer_median_score_pca": 47.66187050359712,
          "peer_median_trades": 4.5,
          "peer_median_volatility": 0.5541793334089038,
          "peer_median_spread_pct": 0.042046494022647735,
          "peer_median_spread_ticks": 1.6688394683026584,
          "peer_median_amihud": 5.948719141418362e-07,
          "peer_median_turnover_ratio": 7.661505324325498e-05,
          "target_vs_peer": {
            "score_pca_delta": 24.46,
            "adv_delta_pct": 2991.1,
            "trades_delta_pct": 1055.56,
            "volatility_delta_pct": 8.47,
            "spread_pct_delta_pct": 43.15,
            "spread_ticks_delta_pct": -31.39,
            "amihud_delta_pct": 85.61,
            "turnover_ratio_delta_pct": 1822.22
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.12230215827337,
            "rank_pca": 156,
            "adv": 201552.0,
            "trades": 52.0,
            "volatility": 0.5072588165941068,
            "spread_pct": 0.023904382470119483,
            "spread_ticks": 1.144927536231884,
            "amihud": 8.557943697288424e-08,
            "turnover_ratio": 0.0014727100023655777,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.2589928057553956,
            "rank_pca": 550,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.505307335410556,
            "spread_pct": 0.49504950495049505,
            "spread_ticks": 21.083333333333332,
            "amihud": 0.00036013640690511566,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.597122302158273,
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
            "score_pca": 47.302158273381295,
            "rank_pca": 294,
            "adv": 5544.0,
            "trades": 4.0,
            "volatility": 0.3165962924050557,
            "spread_pct": 0.017320427916454422,
            "spread_ticks": 2.0416666666666665,
            "amihud": 1.4078062858550678e-06,
            "turnover_ratio": 8.548200826722518e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 55.39568345323741,
            "rank_pca": 249,
            "adv": 48666.2,
            "trades": 28.0,
            "volatility": 1.346490745333862,
            "spread_pct": 0.06209987195902694,
            "spread_ticks": 1.08,
            "amihud": 1.8455706458297627e-07,
            "turnover_ratio": 0.0033988144453724377,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 36.15107913669065,
            "rank_pca": 356,
            "adv": 639.0,
            "trades": 1.0,
            "volatility": 0.3556408267829746,
            "spread_pct": 0.043276661514683186,
            "spread_ticks": 3.25,
            "amihud": 1.5365538898466613e-06,
            "turnover_ratio": 3.2038334365442344e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 64.74820143884892,
            "rank_pca": 197,
            "adv": 68715.0,
            "trades": 29.0,
            "volatility": 0.6096118504143366,
            "spread_pct": 0.040816326530612276,
            "spread_ticks": 1.0273972602739727,
            "amihud": 0.0,
            "turnover_ratio": 0.0031358040200897786,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 48.02158273381295,
            "rank_pca": 290,
            "adv": 7497.0,
            "trades": 5.0,
            "volatility": 0.3673085055662263,
            "spread_pct": 0.02033100898933044,
            "spread_ticks": 3.2941176470588234,
            "amihud": 1.005186763700696e-06,
            "turnover_ratio": 6.774809821928479e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.09352517985612,
            "rank_pca": 95,
            "adv": 636577.5,
            "trades": 371.0,
            "volatility": 0.4987468164034709,
            "spread_pct": 0.010698983624287645,
            "spread_ticks": 1.2960122699386503,
            "amihud": 1.8590900468111437e-08,
            "turnover_ratio": 0.009644749743033771,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6986582433961841,
              "median": 0.47067780794993297,
              "min": 0.0,
              "max": 6.916553309085341,
              "p5": 0.1556209011664717,
              "p95": 2.250447984076117,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3341228.847952133,
              "median": 14132.8,
              "min": 0.0,
              "max": 284335480.0,
              "p5": 0.0,
              "p95": 14143887.75,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1012652678512444,
              "median": 0.032338308457711476,
              "min": 0.0002805689255457263,
              "max": 1.2394366197183098,
              "p5": 0.0034758312328819923,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006547639250074105,
              "median": 0.0002650704022521927,
              "min": 0.0,
              "max": 2.3103289170127215,
              "p5": 0.0,
              "p95": 0.01128061556452464,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2996056164139764e-05,
              "median": 1.487180622012699e-07,
              "min": 0.0,
              "max": 0.0007680491551459317,
              "p5": 0.0,
              "p95": 3.46248922276352e-05,
              "count": 551
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 497.78057553956836,
              "median": 7.0,
              "min": 0.0,
              "max": 11380.0,
              "p5": 0.0,
              "p95": 2997.75,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.883470615996335,
              "median": 0.4330276609848486,
              "min": 0.26645835073217383,
              "max": 2.505307335410556,
              "p5": 0.2840066303176825,
              "p95": 2.416106562443502,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1643847.1874999998,
              "median": 6520.5,
              "min": 0.0,
              "max": 12298967.999999998,
              "p5": 0.0,
              "p95": 8217131.324999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15982488147488264,
              "median": 0.02211769572972496,
              "min": 0.0013514156670242764,
              "max": 0.6666666666666666,
              "p5": 0.004623064452066456,
              "p95": 0.6066006600660064,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002438168824214038,
              "median": 7.661505324325498e-05,
              "min": 0.0,
              "max": 0.009644749743033771,
              "p5": 0.0,
              "p95": 0.009140005175583301,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.552387193372554e-05,
              "median": 5.453831003367901e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 2.979507458473297e-10,
              "p95": 0.00023462645834977132,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 436.625,
              "median": 4.5,
              "min": 0.0,
              "max": 3060.0,
              "p5": 0.0,
              "p95": 2118.8499999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 95954.8375,
              "median": 6520.5,
              "min": 0.0,
              "max": 636577.5,
              "p5": 0.0,
              "p95": 437825.6249999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 54.75,
              "median": 4.5,
              "min": 0.0,
              "max": 371.0,
              "p5": 0.0,
              "p95": 251.2999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0312687945490748,
              "median": 0.5541793334089038,
              "min": 0.3165962924050557,
              "max": 2.505307335410556,
              "p5": 0.3302618794373273,
              "p95": 2.416106562443502,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16953243151894457,
              "median": 0.042046494022647735,
              "min": 0.010698983624287645,
              "max": 0.6666666666666666,
              "p5": 0.013016489126546018,
              "p95": 0.6066006600660064,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.259065897158931,
              "median": 1.6688394683026584,
              "min": 1.0,
              "max": 21.083333333333332,
              "p5": 1.0095890410958905,
              "p95": 14.857107843137245,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.553613772619614e-05,
              "median": 5.948719141418362e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.00023462645834977132,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0020455795811684923,
              "median": 7.661505324325498e-05,
              "min": 0.0,
              "max": 0.009644749743033771,
              "p5": 0.0,
              "p95": 0.007458672388852301,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.0769230769230781,
            "market": 0.005796035195015259,
            "sector": -0.08590416029131964,
            "peers": -0.025806350069266015,
            "vs_market": -0.08271911211809335,
            "vs_sector": 0.00898108336824155,
            "vs_peers": -0.05111672685381208
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability still looks solid, but the displayed book is less balanced. Bid depth is only 0.23x ask depth, which matters because immediate buy-side support is thin even with a 1 tick spread.",
        "market_comparison": "Return 0.0% vs peers 0.0%."
      },
      "1w": {
        "liquidity": "1W score 71.6 vs peer median 32.8 (+38.8 pts).",
        "market_comparison": "The stock fell 2.0% over the week while peers rose 0.3%, which matters because weaker tape can make trading feel less supported."
      },
      "30d": {
        "liquidity": "Monthly tradability remains strong for the stock’s size. The 1M liquidity score is 71.9, which supports a view that access is still good in normal conditions.",
        "market_comparison": "The stock returned -5.9% over 1M compared with peers at -1.6% and the market at +2.6%, which matters because weaker relative performance is not helping liquidity conditions."
      },
      "3m": {
        "liquidity": "Structural liquidity is strong. The 3M score of 72.1 stands 24.5 points above the peer median, which indicates the name is more accessible than most companies of similar size.",
        "market_comparison": "Primary average daily volume is S$201.6K compared with a peer median of S$6.5K, reinforcing that peer standing is a clear strength for tradability."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "regime_method": "hmm_jump_aware",
      "estimation_window_days": 82,
      "reporting_window_days": 63,
      "available_history_days": 82,
      "n_regimes": 3,
      "current_regime": 1,
      "current_regime_label": "Normal / Active",
      "current_regime_probability": 0.9999999999744726,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.2759208747601891,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "27.6%",
          "display_range": null,
          "display_text": "27.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
          "kind": "share_pct",
          "value_pct": 27.6,
          "plain_english": "Market explains about 27.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.35224918443744885,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "35.2%",
          "display_range": null,
          "display_text": "35.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
          "kind": "share_pct",
          "value_pct": 35.2,
          "plain_english": "Sector explains about 35.2% of price moves in the current state."
        },
        "company_share": {
          "median": 0.3718299408023621,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "37.2%",
          "display_range": null,
          "display_text": "37.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
          "kind": "share_pct",
          "value_pct": 37.2,
          "plain_english": "Company-specific explains about 37.2% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.30926186769740577,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.31",
          "display_range": null,
          "display_text": "0.31",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.31% stock move in the same direction in this state.",
          "value_num": 0.31
        },
        "beta_stock_lag": {
          "median": -0.6903758782399716,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.69",
          "display_range": null,
          "display_text": "-0.69",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
          "kind": "lag_beta",
          "value_num": -0.69
        },
        "beta_sector": {
          "median": 6.2411196134097,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "6.24",
          "display_range": null,
          "display_text": "6.24",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 6.24% stock move in the same direction in this state. The multiplier is unusually large and comes from only 82 trading days of history.",
          "value_num": 6.24
        },
        "beta_market_lag": {
          "median": 2.1040950005595263,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.10",
          "display_range": null,
          "display_text": "2.10",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
          "kind": "lag_beta",
          "value_num": 2.1
        },
        "beta_sector_lag": {
          "median": 9.093181769437477,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "9.09",
          "display_range": null,
          "display_text": "9.09",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
          "kind": "lag_beta",
          "value_num": 9.09
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 82 trading days relative to the 252-day target."
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
          "period_label": "2026-05-04 to 2026-05-25",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6258888718461285,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.6%",
            "display_range": null,
            "display_text": "62.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 62.6,
            "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.03573183279175198,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "3.6%",
              "display_range": null,
              "display_text": "3.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 3.6,
              "plain_english": "Market explains about 3.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3383792953621196,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Sector explains about 33.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6258888718461285,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.6%",
              "display_range": null,
              "display_text": "62.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 62.6,
              "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.2805645301987535,
          "expected_duration_days": 2.570112092915776,
          "current_probability": 2.5351355636780556e-11,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 23.006291476297786,
          "volatility": {
            "median": 0.019670413553014264,
            "low": 0.019670413553014264,
            "high": 0.019670413553014264
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.10628549318765912,
          "jump_rate": 5.026476149255578e-29,
          "risk_score": 0.15917237610844018,
          "metrics": {
            "rolling_vol_10d": 0.03405639989100273,
            "downside_vol_10d": 0.01773104788344116,
            "drawdown_21d": 0.04873061453279478,
            "amihud_stress": 0.9187815233669672,
            "spread_rel": 222.11990362970047,
            "spread_ticks": 1.1146056724551332,
            "log_notional": 13.433660856771247,
            "log_trade_count": 5.042132173435468
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.4388319952004604,
          "expected_duration_days": 3.204198229627143,
          "current_probability": 0.9999999999744726,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 35.98422360643775,
          "volatility": {
            "median": 0.016586358983189765,
            "low": 0.016586358983189765,
            "high": 0.016586358983189765
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.1431725842253957,
          "jump_rate": 1.3000625829771122e-24,
          "risk_score": 0.23123853598771166,
          "metrics": {
            "rolling_vol_10d": 0.03153079948409472,
            "downside_vol_10d": 0.017033214755507103,
            "drawdown_21d": 0.0910888183549751,
            "amihud_stress": 1.6071260929557738,
            "spread_rel": 247.2239630234675,
            "spread_ticks": 1.15621628227666,
            "log_notional": 11.984230379950555,
            "log_trade_count": 3.8380355621870135
          }
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "pct_time": 0.280603474600786,
          "expected_duration_days": 1.5432044986343905,
          "current_probability": 1.7606786284725718e-13,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 23.00948491726445,
          "volatility": {
            "median": 0.057160383775783564,
            "low": 0.057160383775783564,
            "high": 0.057160383775783564
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.4014905169782017,
          "jump_rate": 0.26076203016166116,
          "risk_score": 0.960050849613053,
          "metrics": {
            "rolling_vol_10d": 0.03841266632817649,
            "downside_vol_10d": 0.021575711487935096,
            "drawdown_21d": 0.07859868226028796,
            "amihud_stress": 2.5917333137329743,
            "spread_rel": 242.24348549966456,
            "spread_ticks": 1.1512008749152276,
            "log_notional": 13.003013263784867,
            "log_trade_count": 4.625975637539673
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.6109119120693657,
            0.1279400430501851,
            0.2611480448804492
          ],
          [
            0.057142448522269226,
            0.6879094461904234,
            0.25494810528730755
          ],
          [
            0.2591070406798951,
            0.38889521753339956,
            0.3519977417867055
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            14.0,
            3.0,
            6.0
          ],
          [
            2.0,
            24.0,
            9.0
          ],
          [
            6.0,
            9.0,
            8.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 2.5351355636780556e-11,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 0.9999999999744726,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "probability": 1.7606786284725718e-13,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.14317258422450604,
        "current_score": 0.05547460390421184,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 3,
        "criterion": "bic_with_min_state_support",
        "bic": 4092.07736563478,
        "loglik": -1737.5683355088925,
        "n_params": 140,
        "bic_delta_vs_next_best": 43.251086643144845,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 4135.328452277925,
            "loglik": -1867.1585003884388,
            "n_params": 91,
            "converged": true,
            "iterations": 8,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4135.328452277925,
                "loglik": -1867.1585003884388,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4135.328452438536,
                "loglik": -1867.1585004687447,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4135.328452905582,
                "loglik": -1867.1585007022675,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 4092.07736563478,
            "loglik": -1737.5683355088925,
            "n_params": 140,
            "converged": true,
            "iterations": 21,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4092.07737028843,
                "loglik": -1737.5683378357173,
                "n_params": 140,
                "converged": true,
                "iterations": 14
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4113.654616181591,
                "loglik": -1748.3569607822978,
                "n_params": 140,
                "converged": true,
                "iterations": 14
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4092.07736563478,
                "loglik": -1737.5683355088925,
                "n_params": 140,
                "converged": true,
                "iterations": 21
              }
            ]
          }
        ],
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 3,
              "bic": 4092.07737028843,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4113.654616181591,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4092.07736563478,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "insufficient_history",
          "minimum_history_days": 160,
          "windows": [],
          "stable": null
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 82,
        "n_features": 22,
        "candidate_states": [
          2,
          3
        ],
        "selected_states": 3,
        "bic_delta_vs_next_best": 43.251086643144845,
        "state_count_interpretation": "82 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 43.25 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 140,
          "observations_per_parameter": 0.5857142857142857,
          "parameter_pressure_label": "underidentified_pressure"
        },
        "state_occupancy": {
          "min_effective_days_required": 3.0,
          "min_effective_days_observed": 23.006291476297786,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 23.006291476297786,
              "pct_time": 0.2805645301987535,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 35.98422360643775,
              "pct_time": 0.4388319952004604,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "effective_days": 23.00948491726445,
              "pct_time": 0.280603474600786,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.6109119120693657,
            0.6879094461904234,
            0.3519977417867055
          ],
          "expected_duration_days": [
            2.570112092915776,
            3.204198229627143,
            1.5432044986343905
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [
            2
          ],
          "warnings": [
            "fast_switching_states"
          ]
        },
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 3,
              "bic": 4092.07737028843,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4113.654616181591,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4092.07736563478,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "insufficient_history",
          "minimum_history_days": 160,
          "windows": [],
          "stable": null
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.15917237610844018,
            "jump_probability": 0.10628549318765912,
            "jump_rate": 5.026476149255578e-29,
            "rolling_vol_10d": 0.03405639989100273,
            "downside_vol_10d": 0.01773104788344116,
            "drawdown_21d": 0.04873061453279478,
            "amihud_stress": 0.9187815233669672,
            "spread_rel": 222.11990362970047,
            "spread_ticks": 1.1146056724551332,
            "log_notional": 13.433660856771247,
            "log_trade_count": 5.042132173435468
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.23123853598771166,
            "jump_probability": 0.1431725842253957,
            "jump_rate": 1.3000625829771122e-24,
            "rolling_vol_10d": 0.03153079948409472,
            "downside_vol_10d": 0.017033214755507103,
            "drawdown_21d": 0.0910888183549751,
            "amihud_stress": 1.6071260929557738,
            "spread_rel": 247.2239630234675,
            "spread_ticks": 1.15621628227666,
            "log_notional": 11.984230379950555,
            "log_trade_count": 3.8380355621870135
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "risk_score": 0.960050849613053,
            "jump_probability": 0.4014905169782017,
            "jump_rate": 0.26076203016166116,
            "rolling_vol_10d": 0.03841266632817649,
            "downside_vol_10d": 0.021575711487935096,
            "drawdown_21d": 0.07859868226028796,
            "amihud_stress": 2.5917333137329743,
            "spread_rel": 242.24348549966456,
            "spread_ticks": 1.1512008749152276,
            "log_notional": 13.003013263784867,
            "log_trade_count": 4.625975637539673
          }
        ],
        "jump_model_definition": {
          "type": "jump_score_feature_overlay",
          "method_name": "hmm_jump_aware",
          "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
        },
        "probability_basis": {
          "current_state": "filtered_forward_probability",
          "historical_states": "smoothed_forward_backward_probability",
          "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
        }
      },
      "feature_columns": [
        "stock_ret",
        "market_ret",
        "sector_ret",
        "abs_stock_ret",
        "residual_ret",
        "abs_residual_ret",
        "rolling_vol_5d",
        "rolling_vol_10d",
        "rolling_vol_21d",
        "downside_vol_10d",
        "rolling_skew_21d",
        "rolling_kurtosis_21d",
        "drawdown_21d",
        "market_corr_21d",
        "sector_corr_21d",
        "log_notional",
        "log_volume",
        "log_trade_count",
        "amihud_stress",
        "spread_rel",
        "spread_ticks",
        "jump_score"
      ],
      "smoothed_probability_tail": [
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.9955996909479425,
            0.004400227356571511,
            8.169548597540187e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9548808338582393,
            0.0451189814013678,
            1.8474039291532542e-07
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.9999999999390392,
            6.095695466871363e-11,
            3.802753723070051e-15
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999993483004,
            6.516907795698035e-10,
            8.965972489311174e-15
          ],
          "jump_probability": 0.12092808068493223,
          "jump_score": 0.5250689396280732
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999999068318327,
            5.1451753437187473e-08,
            4.171641394989263e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.999999916347503,
            5.270298020407991e-08,
            3.094951686981208e-08
          ],
          "jump_probability": 0.17505760462748585,
          "jump_score": 0.9020013295244436
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            1.9538213286200196e-10,
            1.6023371453076114e-17,
            0.9999999998046178
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.935595485224778e-10,
            9.059231990771967e-18,
            0.9999999994064405
          ],
          "jump_probability": 0.4129553242945577,
          "jump_score": 1.9441204243737138
        },
        {
          "trade_date": "2026-05-18",
          "state": 1,
          "probabilities": [
            9.084220226675587e-05,
            0.999902854732619,
            6.3030651142560455e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            8.868585473505257e-05,
            0.9999067488865223,
            4.565258742632447e-06
          ],
          "jump_probability": 0.15769829378294362,
          "jump_score": 0.7930829596014012
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            1.0298468018772394e-12,
            1.4374831185153547e-09,
            0.9999999985614871
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.8820431624591696e-12,
            8.348560810755981e-10,
            0.9999999991622619
          ],
          "jump_probability": 0.4106251183053611,
          "jump_score": 1.9357549779928687
        },
        {
          "trade_date": "2026-05-20",
          "state": 1,
          "probabilities": [
            0.0068829364359895015,
            0.9582799127510234,
            0.03483715081298699
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0350150489789825,
            0.9066805439327145,
            0.058304407088303034
          ],
          "jump_probability": 0.1601303448011056,
          "jump_score": 0.8089055923259515
        },
        {
          "trade_date": "2026-05-21",
          "state": 1,
          "probabilities": [
            2.2405354420523346e-11,
            0.999996844564424,
            3.155413170830132e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.204687594121729e-10,
            0.9999944183465319,
            5.581532999300241e-06
          ],
          "jump_probability": 0.14818030915919836,
          "jump_score": 0.729178229042145
        },
        {
          "trade_date": "2026-05-22",
          "state": 1,
          "probabilities": [
            3.391171234007768e-13,
            0.99999943445751,
            5.655421508539255e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.8233679246706736e-12,
            0.999998999621723,
            1.000376453637136e-06
          ],
          "jump_probability": 0.15274659476511307,
          "jump_score": 0.7602438915642197
        },
        {
          "trade_date": "2026-05-25",
          "state": 1,
          "probabilities": [
            2.5351355636780556e-11,
            0.9999999999744726,
            1.7606786284725718e-13
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.5351355636780556e-11,
            0.9999999999744726,
            1.7606786284725718e-13
          ],
          "jump_probability": 0.0742130442528476,
          "jump_score": 0.05547460390421184
        }
      ],
      "methodology": {
        "estimation_window_days": 82,
        "reporting_window_days": 63,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "hmm_jump_aware",
        "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
        "regime_scaling": "robust_median_iqr",
        "regime_model_selection": "bic_with_min_state_support",
        "jump_component": "robust_residual_and_return_jump_overlay",
        "jump_model_definition": "jump_score_feature_overlay_not_full_jump_diffusion",
        "current_state_probability_basis": "filtered",
        "historical_state_probability_basis": "smoothed",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "0.31",
        "sector_link_display": "6.24",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.31% stock move in the same direction in this state. This is a point estimate from 82 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 6.24% stock move in the same direction in this state. This is a point estimate from 82 trading days.",
        "stock_persistence_display": "-0.69",
        "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
        "history_limited_note": "Read is based on 82 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Normal / Active",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 37.2,
        "driver_share_display": "37.2%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 82 trading days relative to the 252-day target.",
        "history_days": 82,
        "history_limited": true,
        "volatility_label": "Normal / Active",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 14.3,
        "jump_risk_score": 0.06,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.6879094461904234,
        "effective_days": 36.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 3.2 days.",
        "expected_duration_days": 3.2
      },
      "display_notes": {
        "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "hmm_jump_aware",
      "n_regimes": 3,
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.2805645301987535,
          "expected_duration_days": 2.570112092915776,
          "current_probability": 2.5351355636780556e-11,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 23.006291476297786,
          "volatility": {
            "median": 0.019670413553014264,
            "low": 0.019670413553014264,
            "high": 0.019670413553014264
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.10628549318765912,
          "jump_rate": 5.026476149255578e-29,
          "risk_score": 0.15917237610844018,
          "metrics": {
            "rolling_vol_10d": 0.03405639989100273,
            "downside_vol_10d": 0.01773104788344116,
            "drawdown_21d": 0.04873061453279478,
            "amihud_stress": 0.9187815233669672,
            "spread_rel": 222.11990362970047,
            "spread_ticks": 1.1146056724551332,
            "log_notional": 13.433660856771247,
            "log_trade_count": 5.042132173435468
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.4388319952004604,
          "expected_duration_days": 3.204198229627143,
          "current_probability": 0.9999999999744726,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 35.98422360643775,
          "volatility": {
            "median": 0.016586358983189765,
            "low": 0.016586358983189765,
            "high": 0.016586358983189765
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.1431725842253957,
          "jump_rate": 1.3000625829771122e-24,
          "risk_score": 0.23123853598771166,
          "metrics": {
            "rolling_vol_10d": 0.03153079948409472,
            "downside_vol_10d": 0.017033214755507103,
            "drawdown_21d": 0.0910888183549751,
            "amihud_stress": 1.6071260929557738,
            "spread_rel": 247.2239630234675,
            "spread_ticks": 1.15621628227666,
            "log_notional": 11.984230379950555,
            "log_trade_count": 3.8380355621870135
          }
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "pct_time": 0.280603474600786,
          "expected_duration_days": 1.5432044986343905,
          "current_probability": 1.7606786284725718e-13,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 23.00948491726445,
          "volatility": {
            "median": 0.057160383775783564,
            "low": 0.057160383775783564,
            "high": 0.057160383775783564
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.4014905169782017,
          "jump_rate": 0.26076203016166116,
          "risk_score": 0.960050849613053,
          "metrics": {
            "rolling_vol_10d": 0.03841266632817649,
            "downside_vol_10d": 0.021575711487935096,
            "drawdown_21d": 0.07859868226028796,
            "amihud_stress": 2.5917333137329743,
            "spread_rel": 242.24348549966456,
            "spread_ticks": 1.1512008749152276,
            "log_notional": 13.003013263784867,
            "log_trade_count": 4.625975637539673
          }
        }
      ],
      "transitions": [
        [
          0.6109119120693657,
          0.1279400430501851,
          0.2611480448804492
        ],
        [
          0.057142448522269226,
          0.6879094461904234,
          0.25494810528730755
        ],
        [
          0.2591070406798951,
          0.38889521753339956,
          0.3519977417867055
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.6109119120693657,
            0.1279400430501851,
            0.2611480448804492
          ],
          [
            0.057142448522269226,
            0.6879094461904234,
            0.25494810528730755
          ],
          [
            0.2591070406798951,
            0.38889521753339956,
            0.3519977417867055
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            14.0,
            3.0,
            6.0
          ],
          [
            2.0,
            24.0,
            9.0
          ],
          [
            6.0,
            9.0,
            8.0
          ]
        ]
      },
      "current_regime": 1,
      "current_regime_label": "Normal / Active",
      "current_regime_probability": 0.9999999999744726,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 2.5351355636780556e-11,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 0.9999999999744726,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Jump / Tail Shock",
          "probability": 1.7606786284725718e-13,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.14317258422450604,
        "current_score": 0.05547460390421184,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 3,
        "criterion": "bic_with_min_state_support",
        "bic": 4092.07736563478,
        "loglik": -1737.5683355088925,
        "n_params": 140,
        "bic_delta_vs_next_best": 43.251086643144845,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 4135.328452277925,
            "loglik": -1867.1585003884388,
            "n_params": 91,
            "converged": true,
            "iterations": 8,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4135.328452277925,
                "loglik": -1867.1585003884388,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4135.328452438536,
                "loglik": -1867.1585004687447,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 4135.328452905582,
                "loglik": -1867.1585007022675,
                "n_params": 91,
                "converged": true,
                "iterations": 8
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 4092.07736563478,
            "loglik": -1737.5683355088925,
            "n_params": 140,
            "converged": true,
            "iterations": 21,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4092.07737028843,
                "loglik": -1737.5683378357173,
                "n_params": 140,
                "converged": true,
                "iterations": 14
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4113.654616181591,
                "loglik": -1748.3569607822978,
                "n_params": 140,
                "converged": true,
                "iterations": 14
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 4092.07736563478,
                "loglik": -1737.5683355088925,
                "n_params": 140,
                "converged": true,
                "iterations": 21
              }
            ]
          }
        ],
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 3,
              "bic": 4092.07737028843,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4113.654616181591,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4092.07736563478,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "insufficient_history",
          "minimum_history_days": 160,
          "windows": [],
          "stable": null
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 82,
        "n_features": 22,
        "candidate_states": [
          2,
          3
        ],
        "selected_states": 3,
        "bic_delta_vs_next_best": 43.251086643144845,
        "state_count_interpretation": "82 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 43.25 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 140,
          "observations_per_parameter": 0.5857142857142857,
          "parameter_pressure_label": "underidentified_pressure"
        },
        "state_occupancy": {
          "min_effective_days_required": 3.0,
          "min_effective_days_observed": 23.006291476297786,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 23.006291476297786,
              "pct_time": 0.2805645301987535,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 35.98422360643775,
              "pct_time": 0.4388319952004604,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "effective_days": 23.00948491726445,
              "pct_time": 0.280603474600786,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.6109119120693657,
            0.6879094461904234,
            0.3519977417867055
          ],
          "expected_duration_days": [
            2.570112092915776,
            3.204198229627143,
            1.5432044986343905
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [
            2
          ],
          "warnings": [
            "fast_switching_states"
          ]
        },
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 3,
              "bic": 4092.07737028843,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 4113.654616181591,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 4092.07736563478,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "3": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "insufficient_history",
          "minimum_history_days": 160,
          "windows": [],
          "stable": null
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.15917237610844018,
            "jump_probability": 0.10628549318765912,
            "jump_rate": 5.026476149255578e-29,
            "rolling_vol_10d": 0.03405639989100273,
            "downside_vol_10d": 0.01773104788344116,
            "drawdown_21d": 0.04873061453279478,
            "amihud_stress": 0.9187815233669672,
            "spread_rel": 222.11990362970047,
            "spread_ticks": 1.1146056724551332,
            "log_notional": 13.433660856771247,
            "log_trade_count": 5.042132173435468
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.23123853598771166,
            "jump_probability": 0.1431725842253957,
            "jump_rate": 1.3000625829771122e-24,
            "rolling_vol_10d": 0.03153079948409472,
            "downside_vol_10d": 0.017033214755507103,
            "drawdown_21d": 0.0910888183549751,
            "amihud_stress": 1.6071260929557738,
            "spread_rel": 247.2239630234675,
            "spread_ticks": 1.15621628227666,
            "log_notional": 11.984230379950555,
            "log_trade_count": 3.8380355621870135
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "risk_score": 0.960050849613053,
            "jump_probability": 0.4014905169782017,
            "jump_rate": 0.26076203016166116,
            "rolling_vol_10d": 0.03841266632817649,
            "downside_vol_10d": 0.021575711487935096,
            "drawdown_21d": 0.07859868226028796,
            "amihud_stress": 2.5917333137329743,
            "spread_rel": 242.24348549966456,
            "spread_ticks": 1.1512008749152276,
            "log_notional": 13.003013263784867,
            "log_trade_count": 4.625975637539673
          }
        ],
        "jump_model_definition": {
          "type": "jump_score_feature_overlay",
          "method_name": "hmm_jump_aware",
          "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
        },
        "probability_basis": {
          "current_state": "filtered_forward_probability",
          "historical_states": "smoothed_forward_backward_probability",
          "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
        }
      },
      "feature_columns": [
        "stock_ret",
        "market_ret",
        "sector_ret",
        "abs_stock_ret",
        "residual_ret",
        "abs_residual_ret",
        "rolling_vol_5d",
        "rolling_vol_10d",
        "rolling_vol_21d",
        "downside_vol_10d",
        "rolling_skew_21d",
        "rolling_kurtosis_21d",
        "drawdown_21d",
        "market_corr_21d",
        "sector_corr_21d",
        "log_notional",
        "log_volume",
        "log_trade_count",
        "amihud_stress",
        "spread_rel",
        "spread_ticks",
        "jump_score"
      ],
      "smoothed_probability_tail": [
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.9955996909479425,
            0.004400227356571511,
            8.169548597540187e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9548808338582393,
            0.0451189814013678,
            1.8474039291532542e-07
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.9999999999390392,
            6.095695466871363e-11,
            3.802753723070051e-15
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999993483004,
            6.516907795698035e-10,
            8.965972489311174e-15
          ],
          "jump_probability": 0.12092808068493223,
          "jump_score": 0.5250689396280732
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999999068318327,
            5.1451753437187473e-08,
            4.171641394989263e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.999999916347503,
            5.270298020407991e-08,
            3.094951686981208e-08
          ],
          "jump_probability": 0.17505760462748585,
          "jump_score": 0.9020013295244436
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            1.9538213286200196e-10,
            1.6023371453076114e-17,
            0.9999999998046178
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.935595485224778e-10,
            9.059231990771967e-18,
            0.9999999994064405
          ],
          "jump_probability": 0.4129553242945577,
          "jump_score": 1.9441204243737138
        },
        {
          "trade_date": "2026-05-18",
          "state": 1,
          "probabilities": [
            9.084220226675587e-05,
            0.999902854732619,
            6.3030651142560455e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            8.868585473505257e-05,
            0.9999067488865223,
            4.565258742632447e-06
          ],
          "jump_probability": 0.15769829378294362,
          "jump_score": 0.7930829596014012
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            1.0298468018772394e-12,
            1.4374831185153547e-09,
            0.9999999985614871
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.8820431624591696e-12,
            8.348560810755981e-10,
            0.9999999991622619
          ],
          "jump_probability": 0.4106251183053611,
          "jump_score": 1.9357549779928687
        },
        {
          "trade_date": "2026-05-20",
          "state": 1,
          "probabilities": [
            0.0068829364359895015,
            0.9582799127510234,
            0.03483715081298699
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0350150489789825,
            0.9066805439327145,
            0.058304407088303034
          ],
          "jump_probability": 0.1601303448011056,
          "jump_score": 0.8089055923259515
        },
        {
          "trade_date": "2026-05-21",
          "state": 1,
          "probabilities": [
            2.2405354420523346e-11,
            0.999996844564424,
            3.155413170830132e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.204687594121729e-10,
            0.9999944183465319,
            5.581532999300241e-06
          ],
          "jump_probability": 0.14818030915919836,
          "jump_score": 0.729178229042145
        },
        {
          "trade_date": "2026-05-22",
          "state": 1,
          "probabilities": [
            3.391171234007768e-13,
            0.99999943445751,
            5.655421508539255e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.8233679246706736e-12,
            0.999998999621723,
            1.000376453637136e-06
          ],
          "jump_probability": 0.15274659476511307,
          "jump_score": 0.7602438915642197
        },
        {
          "trade_date": "2026-05-25",
          "state": 1,
          "probabilities": [
            2.5351355636780556e-11,
            0.9999999999744726,
            1.7606786284725718e-13
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.5351355636780556e-11,
            0.9999999999744726,
            1.7606786284725718e-13
          ],
          "jump_probability": 0.0742130442528476,
          "jump_score": 0.05547460390421184
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 72.1 — Strong",
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
    "liq_subtitle": "Liquidity is strong for the stock’s size, but near-term trading has pulled back. The 3M score is well above peers, while 1W trades are 20.5% below the monthly average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance has lagged, with the stock down 5.9% over one month compared with peers down 1.6% and the market up 2.6%.",
    "perf_insight": "Recent performance is weak, with the stock down 5.9% over one month compared with peers down 1.6% and the market up 2.6%. That matters because weaker price momentum sits alongside a thinner near-term trading backdrop, with 1W trades down 20.5% from the monthly average.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Company-specific factors are leading the tape, with stock-level drivers accounting for 37.2% of recent moves. That leaves the name more exposed to company news than to broader market direction.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 37.2% of price changes. Other influences are market 27.6%, and sector 35.2%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 27.6%, sector 35.2%, and company-specific 37.2%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 27.6%, sector 35.2%, and company-specific 37.2%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the stock has underperformed both peers and the market over one month, so company-led moves are landing against a weaker price backdrop.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price action is still led by company-specific factors at 37.2%.",
      "Monthly change: the pattern has stayed company-driven from March through May, even as recent trading activity has dropped relative to the monthly average."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Conditions still look active overall, but the near-term backdrop is less supportive as trading activity has dropped and buy-side depth is thin.",
    "regime_badge_text": "Normal / Active",
    "regime_pie_title": "State Mix",
    "transition_title": "State Transitions",
    "transition_cols": [
      "From \\",
      "Calm / Liquid",
      "Normal / Active",
      "Jump / Tail Shock"
    ],
    "transition_note_template": "Rows sum to 100%. Each row shows how states tend to transition across the observed sample.",
    "market_state_strip": [],
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to May 25, 2026 (84 trading days • 12,575 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The book is skewed to the sell side, with displayed bid depth at just 0.23x ask depth despite a 1 tick spread. That matters because immediate buy-side support looks thin even with a tight quoted spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 19.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading conditions are better judged through overall liquidity and current book depth, with the main watchpoint on thin buy-side support.",
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
    "intraday_insight": "The clearest intraday signal is the displayed book imbalance, with bid depth at 0.23x ask depth and a 1 tick spread. That matters because execution can feel less supported on the buy side even though the quoted spread remains tight.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is defined more by liquidity, price weakness, and book imbalance than by short activity.",
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
    "exec_subtitle": "Liquidity remains strong relative to peers, but recent activity has dropped and the current book shows thin buy-side support.",
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
        "value": "72.1/100",
        "sub": "Peer median 47.7 (+24.5 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$201.6K",
        "sub": "Peer median S$6.5K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.39%",
        "sub": "1.14 ticks; peers 4.20%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity remains strong overall, with a 3M score of 72.1 compared with a peer median of 47.7. That keeps the stock looking accessible for its size. Near-term conditions are less robust, with 1W trades down 20.5% from the monthly average and displayed bid depth at just 0.23x ask depth, which suggests thinner immediate visible support.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.237",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.11%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.23x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.05% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-5.29% with 55.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-5.29% with 22.0% fill.",
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
        "subtext": "Rank 156/556",
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
        "value": "2.39",
        "suffix": "%",
        "bar_pct": 24,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.39% • 1.14 ticks vs peers 4.20%",
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
        "value": "201.6K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$6.5K",
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
        "value": "37.2",
        "suffix": "company-specific",
        "bar_pct": 37,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 27.6% • Sector 35.2%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for the stock’s size, with a 3M liquidity score of 72.1 compared with a peer median of 47.7. That keeps the name accessible relative to peers.",
      "Recent trading activity has pulled back, with 1W trades down 20.5% compared with the monthly",
      "The current backdrop is less supportive, with displayed bid depth at just 0.23x ask depth and the stock down 5.9% over one month compared with peers down 1.6% and the market up 2.6%. That matters because weaker price performance and thin buy-side support can make trading feel harder in the near term."
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
      "overall": "3M liquidity is strong: score 72.1 vs peer median 47.7 (+24.5",
      "strengths": [
        "3M score 72.1 vs peer median 47.7 (+24.5 pts)."
      ],
      "concerns": [
        "1W trades down -20.5% vs 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +24.5 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is -7.7%, better than sector, but worse than market and peers, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -7.7% vs market 0.6%.",
        "vs_sector": "Better than sector: -7.7% vs sector -8.6%.",
        "vs_peers": "Worse than peers: -7.7% vs peers -2.6%."
      },
      "adv": {
        "insight": "ADV is S$201.6K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$201.6K vs market S$14.1K.",
        "vs_sector": "Better than sector: S$201.6K vs sector S$6.5K.",
        "vs_peers": "Better than peers: S$201.6K vs peers S$6.5K."
      },
      "spread": {
        "insight": "Spread is 2.39%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.39% vs market 3.23%.",
        "vs_sector": "In line with sector: 2.39% vs secto%.",
        "vs_peers": "Better than peers: 2.39% vs peers 4.20%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.15%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.15% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.15% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.15% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 50.73%, worse than sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "In line with market: 50.73% vs market 47.07%.",
        "vs_sector": "Worse than sector: 50.73% vs sector 43.30%.",
        "vs_peers": "In line with peers: 50.73% vs peers 55.42%."
      },
      "trades": {
        "insight": "Trades is 52, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 52 vs market 7.",
        "vs_sector": "Better than sector: 52 vs sector 4.",
        "vs_peers": "Better than peers: 52 vs peers 4."
      },
      "amihud": {
        "insight": "Price impact is 8.56e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 8.56e-08 vs market 1.49e-07.",
        "vs_sector": "Better than sector: 8.56e-08 vs sector 5.45e-07.",
        "vs_peers": "Better than peers: 8.56e-08 vs peers 5.95e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to peers and the market, with the stock down 5.9% over one month compared with peers down 1.6% and the market up 2.6%. Liquidity gives a mixed read on that move because the 3M liquidity score remains strong at 72.1 compared with a 47.7 peer median, while 1W trades are down 20.5% from the monthly average, pointing to less visible support in the near term.",
      "conclusion": "The move looks mainly company-specific rather than broad-market, with weaker recent activity reinforcing near-term pressure even though structural liquidity remains strong for the stock's size."
    },
    "drivers": {
      "overall": "Current driver: Company-specific at 37.2%. Price moves are being driven mainly by stock-specific factors, so company news matters more than broad market moves right now.",
      "beta": "The current pattern may be read as directional rather than fully settled, because recent trading activity is down 20.5% from the monthly average. Lower activity can make company-led moves look more pronounced in day-to-day trading.",
      "rolling_change": "This has been a stable pattern rather than a fresh shift, with the stock mostly company-driven in March and April and still clearly company-driven in May. That consistency suggests the main influence on the shares has remained stock-specific over the past three months."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The active state is Normal / Active, pointing to a market that is still trading in an orderly way rather than one under obvious strain.",
      "transitions": "This state looks reasonably stable, with a typical run length of about 3.2 days, though the 1W trade count is 20.5% below the 1M average, so it is not fully settled.",
      "trading_implications": "Trading conditions may remain workable in the near term, but with activity below the monthly average and bid depth at only 0.23x of ask depth, they look steadier on the surface than they do in the book."
    },
    "execution": {
      "overall": "Displayed liquidity is thin buy-side right now because bid depth is only 0.23x ask depth while the spread remains 1 tick. That matters because the quoted spread looks orderly, but the book does not offer even visible support on the buy side.",
      "concern": "Trade-size percentiles use available history from Jan 22, 2026 to May 25, 2026 (84 trading days • 12,575 trades), not a full year.",
      "peer_context": "The broader liquidity picture still screens well, with a 3M score of 72.1 compared with a peer median of 47.7, but the displayed book is weaker than that headline suggests. In other words, the stock looks accessible over the month, while the current book points to less visible support in the near term."
    },
    "trader_composition": {
      "overall": "Flow looks mainly retail-like on both trade count and trade value, which makes the day-to-day base of activity look broad rather than block-driven.",
      "retail_heavy": "Retail-like trades account for 86.8% of trade count and 33.9% of trade value, compared with institution-like trades at 1.3% of count and 18.7% of value. That mix points to a market carried mainly by many smaller tickets rather than a large institutional presence.",
      "institutional_gap": "Institution-like activity is a small share of trade count at 1.3%, even though it contributes 18.7% of trade value. That leaves the flow picture retail-leaning overall, with some larger tickets present but not setting the tone.",
      "peer_comparison": "The mix stands out as retail-leaning, with retail-like trades dominating both count and value. Relative to peers, that suggests participation is broader at the smaller-ticket end than institution-led."
    },
    "price_moving": {
      "overall": "Price-moving activity is being shaped more by stock-specific factors than by broad market flow. Company-specific drivers account for 37.2%, which makes single-name news more important for how trades translate into price moves. The signal is mixed but readable: flow leans retail-like by count and value, while the stock is also underperforming with a 1M return of -5.9% compared with peers at -1.6% and the market at +2.6%.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low and is not the main issue in the stock today. The bigger change is that trading activity is down 20.5% over the past week compared with the 1M average, while the shares have fallen 5.9% over one month compared with a 1.6% drop for peers and a 2.6% gain for the market, which points more to weaker flow and price pressure than to short selling.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short interest appears stable rather than rising, so it does not add a new source of pressure to the broader liquidity picture. That leaves the recent pullback in trading activity and weaker share-price performance as the more relevant context.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 2.6%, continuous 95.6%, and close 1.2%. Current trading concentration score is 0.310.",
      "hhi_interpretation": "A concentration score of 0.310 suggests activity is reasonably distributed through the session rather than confined to a few short windows. That supports a steadier flow profile when the market is active.",
      "best_times": "The continuous session is the clearest source of liquidity, given it accounts for 95.6% of trading activity. That matters because the open and close are too small a share of flow to define the day’s trading conditions.",
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
        72.12230215827337,
        1.2589928057553956,
        3.597122302158273,
        47.302158273381295,
        55.39568345323741,
        36.15107913669065,
        64.74820143884892,
        48.02158273381295,
        83.09352517985612
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
        201552.0,
        0.0,
        0.0,
        5544.0,
        48666.2,
        639.0,
        68715.0,
        7497.0,
        636577.5
      ],
      "total": 556
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 556,
      "company": {
        "volatility": 0.5072588165941068,
        "adv": 201552.0,
        "spread_pct": 0.023904382470119483,
        "turnover_ratio": 0.0014727100023655777,
        "amihud": 8.557943697288424e-08,
        "trades": 52.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6986582433961841,
          "median": 0.47067780794993297,
          "min": 0.0,
          "max": 6.916553309085341,
          "p5": 0.1556209011664717,
          "p95": 2.250447984076117,
          "count": 556
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3341228.847952133,
          "median": 14132.8,
          "min": 0.0,
          "max": 284335480.0,
          "p5": 0.0,
          "p95": 14143887.75,
          "count": 556
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1012652678512444,
          "median": 0.032338308457711476,
          "min": 0.0002805689255457263,
          "max": 1.2394366197183098,
          "p5": 0.0034758312328819923,
          "p95": 0.44957360805416136,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.006547639250074105,
          "median": 0.0002650704022521927,
          "min": 0.0,
          "max": 2.3103289170127215,
          "p5": 0.0,
          "p95": 0.01128061556452464,
          "count": 549
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.2996056164139764e-05,
          "median": 1.487180622012699e-07,
          "min": 0.0,
          "max": 0.0007680491551459317,
          "p5": 0.0,
          "p95": 3.46248922276352e-05,
          "count": 551
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 497.78057553956836,
          "median": 7.0,
          "min": 0.0,
          "max": 11380.0,
          "p5": 0.0,
          "p95": 2997.75,
          "count": 556
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.883470615996335,
          "median": 0.4330276609848486,
          "min": 0.26645835073217383,
          "max": 2.505307335410556,
          "p5": 0.2840066303176825,
          "p95": 2.416106562443502,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1643847.1874999998,
          "median": 6520.5,
          "min": 0.0,
          "max": 12298967.999999998,
          "p5": 0.0,
          "p95": 8217131.324999993,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15982488147488264,
          "median": 0.02211769572972496,
          "min": 0.0013514156670242764,
          "max": 0.6666666666666666,
          "p5": 0.004623064452066456,
          "p95": 0.6066006600660064,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002438168824214038,
          "median": 7.661505324325498e-05,
          "min": 0.0,
          "max": 0.009644749743033771,
          "p5": 0.0,
          "p95": 0.009140005175583301,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.552387193372554e-05,
          "median": 5.453831003367901e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 2.979507458473297e-10,
          "p95": 0.00023462645834977132,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 436.625,
          "median": 4.5,
          "min": 0.0,
          "max": 3060.0,
          "p5": 0.0,
          "p95": 2118.8499999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 95954.8375,
          "median": 6520.5,
          "min": 0.0,
          "max": 636577.5,
          "p5": 0.0,
          "p95": 437825.6249999997,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 54.75,
          "median": 4.5,
          "min": 0.0,
          "max": 371.0,
          "p5": 0.0,
          "p95": 251.2999999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.0312687945490748,
          "median": 0.5541793334089038,
          "min": 0.3165962924050557,
          "max": 2.505307335410556,
          "p5": 0.3302618794373273,
          "p95": 2.416106562443502,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16953243151894457,
          "median": 0.042046494022647735,
          "min": 0.010698983624287645,
          "max": 0.6666666666666666,
          "p5": 0.013016489126546018,
          "p95": 0.6066006600660064,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.259065897158931,
          "median": 1.6688394683026584,
          "min": 1.0,
          "max": 21.083333333333332,
          "p5": 1.0095890410958905,
          "p95": 14.857107843137245,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.553613772619614e-05,
          "median": 5.948719141418362e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.00023462645834977132,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0020455795811684923,
          "median": 7.661505324325498e-05,
          "min": 0.0,
          "max": 0.009644749743033771,
          "p5": 0.0,
          "p95": 0.007458672388852301,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.020408163265306367,
        "market": 0.014769561152249366,
        "sector": -0.004645760743321681,
        "peers": 0.002538071065989911
      },
      {
        "horizon": "1M",
        "stock": -0.058823529411765274,
        "market": 0.02557385351512753,
        "sector": -0.02851816497531856,
        "peers": -0.016247600979618526
      },
      {
        "horizon": "3M",
        "stock": -0.0769230769230781,
        "market": 0.005796035195015259,
        "sector": -0.08590416029131964,
        "peers": -0.025806350069266015
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
      "share_market": 0.2759208747601891,
      "share_sector": 0.35224918443744885,
      "share_idio": 0.3718299408023621,
      "beta_market": 0.30926186769740577,
      "beta_sector": 6.2411196134097,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 82,
        "reporting_window_days": 63,
        "available_history_days": 82,
        "n_regimes": 3,
        "current_regime": 1,
        "current_regime_label": "Normal / Active",
        "current_regime_probability": 0.9999999999744726,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.2759208747601891,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "27.6%",
            "display_range": null,
            "display_text": "27.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
            "kind": "share_pct",
            "value_pct": 27.6,
            "plain_english": "Market explains about 27.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.35224918443744885,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "35.2%",
            "display_range": null,
            "display_text": "35.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
            "kind": "share_pct",
            "value_pct": 35.2,
            "plain_english": "Sector explains about 35.2% of price moves in the current state."
          },
          "company_share": {
            "median": 0.3718299408023621,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.2%",
            "display_range": null,
            "display_text": "37.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
            "kind": "share_pct",
            "value_pct": 37.2,
            "plain_english": "Company-specific explains about 37.2% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.30926186769740577,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.31",
            "display_range": null,
            "display_text": "0.31",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.31% stock move in the same direction in this state.",
            "value_num": 0.31
          },
          "beta_stock_lag": {
            "median": -0.6903758782399716,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.69",
            "display_range": null,
            "display_text": "-0.69",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
            "kind": "lag_beta",
            "value_num": -0.69
          },
          "beta_sector": {
            "median": 6.2411196134097,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "6.24",
            "display_range": null,
            "display_text": "6.24",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 6.24% stock move in the same direction in this state. The multiplier is unusually large and comes from only 82 trading days of history.",
            "value_num": 6.24
          },
          "beta_market_lag": {
            "median": 2.1040950005595263,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.10",
            "display_range": null,
            "display_text": "2.10",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
            "kind": "lag_beta",
            "value_num": 2.1
          },
          "beta_sector_lag": {
            "median": 9.093181769437477,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "9.09",
            "display_range": null,
            "display_text": "9.09",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
            "kind": "lag_beta",
            "value_num": 9.09
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 82 trading days relative to the 252-day target."
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
            "period_label": "2026-05-04 to 2026-05-25",
            "n_obs": 16,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6258888718461285,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.6%",
              "display_range": null,
              "display_text": "62.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 62.6,
              "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.03573183279175198,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "3.6%",
                "display_range": null,
                "display_text": "3.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 3.6,
                "plain_english": "Market explains about 3.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3383792953621196,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Sector explains about 33.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6258888718461285,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.6%",
                "display_range": null,
                "display_text": "62.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 62.6,
                "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.2805645301987535,
            "expected_duration_days": 2.570112092915776,
            "current_probability": 2.5351355636780556e-11,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 23.006291476297786,
            "volatility": {
              "median": 0.019670413553014264,
              "low": 0.019670413553014264,
              "high": 0.019670413553014264
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.10628549318765912,
            "jump_rate": 5.026476149255578e-29,
            "risk_score": 0.15917237610844018,
            "metrics": {
              "rolling_vol_10d": 0.03405639989100273,
              "downside_vol_10d": 0.01773104788344116,
              "drawdown_21d": 0.04873061453279478,
              "amihud_stress": 0.9187815233669672,
              "spread_rel": 222.11990362970047,
              "spread_ticks": 1.1146056724551332,
              "log_notional": 13.433660856771247,
              "log_trade_count": 5.042132173435468
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.4388319952004604,
            "expected_duration_days": 3.204198229627143,
            "current_probability": 0.9999999999744726,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 35.98422360643775,
            "volatility": {
              "median": 0.016586358983189765,
              "low": 0.016586358983189765,
              "high": 0.016586358983189765
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.1431725842253957,
            "jump_rate": 1.3000625829771122e-24,
            "risk_score": 0.23123853598771166,
            "metrics": {
              "rolling_vol_10d": 0.03153079948409472,
              "downside_vol_10d": 0.017033214755507103,
              "drawdown_21d": 0.0910888183549751,
              "amihud_stress": 1.6071260929557738,
              "spread_rel": 247.2239630234675,
              "spread_ticks": 1.15621628227666,
              "log_notional": 11.984230379950555,
              "log_trade_count": 3.8380355621870135
            }
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "pct_time": 0.280603474600786,
            "expected_duration_days": 1.5432044986343905,
            "current_probability": 1.7606786284725718e-13,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 23.00948491726445,
            "volatility": {
              "median": 0.057160383775783564,
              "low": 0.057160383775783564,
              "high": 0.057160383775783564
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.4014905169782017,
            "jump_rate": 0.26076203016166116,
            "risk_score": 0.960050849613053,
            "metrics": {
              "rolling_vol_10d": 0.03841266632817649,
              "downside_vol_10d": 0.021575711487935096,
              "drawdown_21d": 0.07859868226028796,
              "amihud_stress": 2.5917333137329743,
              "spread_rel": 242.24348549966456,
              "spread_ticks": 1.1512008749152276,
              "log_notional": 13.003013263784867,
              "log_trade_count": 4.625975637539673
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.6109119120693657,
              0.1279400430501851,
              0.2611480448804492
            ],
            [
              0.057142448522269226,
              0.6879094461904234,
              0.25494810528730755
            ],
            [
              0.2591070406798951,
              0.38889521753339956,
              0.3519977417867055
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              14.0,
              3.0,
              6.0
            ],
            [
              2.0,
              24.0,
              9.0
            ],
            [
              6.0,
              9.0,
              8.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 2.5351355636780556e-11,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 0.9999999999744726,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "probability": 1.7606786284725718e-13,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.14317258422450604,
          "current_score": 0.05547460390421184,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 3,
          "criterion": "bic_with_min_state_support",
          "bic": 4092.07736563478,
          "loglik": -1737.5683355088925,
          "n_params": 140,
          "bic_delta_vs_next_best": 43.251086643144845,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 4135.328452277925,
              "loglik": -1867.1585003884388,
              "n_params": 91,
              "converged": true,
              "iterations": 8,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4135.328452277925,
                  "loglik": -1867.1585003884388,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 8
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4135.328452438536,
                  "loglik": -1867.1585004687447,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 8
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4135.328452905582,
                  "loglik": -1867.1585007022675,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 8
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 4092.07736563478,
              "loglik": -1737.5683355088925,
              "n_params": 140,
              "converged": true,
              "iterations": 21,
              "best_seed": 2027,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4092.07737028843,
                  "loglik": -1737.5683378357173,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 14
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4113.654616181591,
                  "loglik": -1748.3569607822978,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 14
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 4092.07736563478,
                  "loglik": -1737.5683355088925,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 21
                }
              ]
            }
          ],
          "seed_stability": {
            "seeds_tested": [
              42,
              1337,
              2027
            ],
            "valid_seed_count": 3,
            "selected_by_seed": [
              {
                "seed": 42,
                "selected_states": 3,
                "bic": 4092.07737028843,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 4113.654616181591,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 4092.07736563478,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "3": 3
            },
            "selected_state_share": 1.0,
            "stable": true,
            "majority_support": true
          },
          "rolling_window_stability": {
            "status": "insufficient_history",
            "minimum_history_days": 160,
            "windows": [],
            "stable": null
          }
        },
        "robustness_diagnostics": {
          "history_used_days": 82,
          "n_features": 22,
          "candidate_states": [
            2,
            3
          ],
          "selected_states": 3,
          "bic_delta_vs_next_best": 43.251086643144845,
          "state_count_interpretation": "82 observations allowed the current rule to test up to 3 states; BIC preferred 3 with a 43.25 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 140,
            "observations_per_parameter": 0.5857142857142857,
            "parameter_pressure_label": "underidentified_pressure"
          },
          "state_occupancy": {
            "min_effective_days_required": 3.0,
            "min_effective_days_observed": 23.006291476297786,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 23.006291476297786,
                "pct_time": 0.2805645301987535,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 35.98422360643775,
                "pct_time": 0.4388319952004604,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Jump / Tail Shock",
                "effective_days": 23.00948491726445,
                "pct_time": 0.280603474600786,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.6109119120693657,
              0.6879094461904234,
              0.3519977417867055
            ],
            "expected_duration_days": [
              2.570112092915776,
              3.204198229627143,
              1.5432044986343905
            ],
            "nearly_absorbing_state_ids": [],
            "fast_switching_state_ids": [
              2
            ],
            "warnings": [
              "fast_switching_states"
            ]
          },
          "seed_stability": {
            "seeds_tested": [
              42,
              1337,
              2027
            ],
            "valid_seed_count": 3,
            "selected_by_seed": [
              {
                "seed": 42,
                "selected_states": 3,
                "bic": 4092.07737028843,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 4113.654616181591,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 4092.07736563478,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "3": 3
            },
            "selected_state_share": 1.0,
            "stable": true,
            "majority_support": true
          },
          "rolling_window_stability": {
            "status": "insufficient_history",
            "minimum_history_days": 160,
            "windows": [],
            "stable": null
          },
          "feature_profile_by_state": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "risk_score": 0.15917237610844018,
              "jump_probability": 0.10628549318765912,
              "jump_rate": 5.026476149255578e-29,
              "rolling_vol_10d": 0.03405639989100273,
              "downside_vol_10d": 0.01773104788344116,
              "drawdown_21d": 0.04873061453279478,
              "amihud_stress": 0.9187815233669672,
              "spread_rel": 222.11990362970047,
              "spread_ticks": 1.1146056724551332,
              "log_notional": 13.433660856771247,
              "log_trade_count": 5.042132173435468
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.23123853598771166,
              "jump_probability": 0.1431725842253957,
              "jump_rate": 1.3000625829771122e-24,
              "rolling_vol_10d": 0.03153079948409472,
              "downside_vol_10d": 0.017033214755507103,
              "drawdown_21d": 0.0910888183549751,
              "amihud_stress": 1.6071260929557738,
              "spread_rel": 247.2239630234675,
              "spread_ticks": 1.15621628227666,
              "log_notional": 11.984230379950555,
              "log_trade_count": 3.8380355621870135
            },
            {
              "id": 2,
              "label": "Jump / Tail Shock",
              "risk_score": 0.960050849613053,
              "jump_probability": 0.4014905169782017,
              "jump_rate": 0.26076203016166116,
              "rolling_vol_10d": 0.03841266632817649,
              "downside_vol_10d": 0.021575711487935096,
              "drawdown_21d": 0.07859868226028796,
              "amihud_stress": 2.5917333137329743,
              "spread_rel": 242.24348549966456,
              "spread_ticks": 1.1512008749152276,
              "log_notional": 13.003013263784867,
              "log_trade_count": 4.625975637539673
            }
          ],
          "jump_model_definition": {
            "type": "jump_score_feature_overlay",
            "method_name": "hmm_jump_aware",
            "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
          },
          "probability_basis": {
            "current_state": "filtered_forward_probability",
            "historical_states": "smoothed_forward_backward_probability",
            "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
          }
        },
        "feature_columns": [
          "stock_ret",
          "market_ret",
          "sector_ret",
          "abs_stock_ret",
          "residual_ret",
          "abs_residual_ret",
          "rolling_vol_5d",
          "rolling_vol_10d",
          "rolling_vol_21d",
          "downside_vol_10d",
          "rolling_skew_21d",
          "rolling_kurtosis_21d",
          "drawdown_21d",
          "market_corr_21d",
          "sector_corr_21d",
          "log_notional",
          "log_volume",
          "log_trade_count",
          "amihud_stress",
          "spread_rel",
          "spread_ticks",
          "jump_score"
        ],
        "smoothed_probability_tail": [
          {
            "trade_date": "2026-05-12",
            "state": 0,
            "probabilities": [
              0.9955996909479425,
              0.004400227356571511,
              8.169548597540187e-08
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9548808338582393,
              0.0451189814013678,
              1.8474039291532542e-07
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 0,
            "probabilities": [
              0.9999999999390392,
              6.095695466871363e-11,
              3.802753723070051e-15
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999993483004,
              6.516907795698035e-10,
              8.965972489311174e-15
            ],
            "jump_probability": 0.12092808068493223,
            "jump_score": 0.5250689396280732
          },
          {
            "trade_date": "2026-05-14",
            "state": 0,
            "probabilities": [
              0.9999999068318327,
              5.1451753437187473e-08,
              4.171641394989263e-08
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.999999916347503,
              5.270298020407991e-08,
              3.094951686981208e-08
            ],
            "jump_probability": 0.17505760462748585,
            "jump_score": 0.9020013295244436
          },
          {
            "trade_date": "2026-05-15",
            "state": 2,
            "probabilities": [
              1.9538213286200196e-10,
              1.6023371453076114e-17,
              0.9999999998046178
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              5.935595485224778e-10,
              9.059231990771967e-18,
              0.9999999994064405
            ],
            "jump_probability": 0.4129553242945577,
            "jump_score": 1.9441204243737138
          },
          {
            "trade_date": "2026-05-18",
            "state": 1,
            "probabilities": [
              9.084220226675587e-05,
              0.999902854732619,
              6.3030651142560455e-06
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              8.868585473505257e-05,
              0.9999067488865223,
              4.565258742632447e-06
            ],
            "jump_probability": 0.15769829378294362,
            "jump_score": 0.7930829596014012
          },
          {
            "trade_date": "2026-05-19",
            "state": 2,
            "probabilities": [
              1.0298468018772394e-12,
              1.4374831185153547e-09,
              0.9999999985614871
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.8820431624591696e-12,
              8.348560810755981e-10,
              0.9999999991622619
            ],
            "jump_probability": 0.4106251183053611,
            "jump_score": 1.9357549779928687
          },
          {
            "trade_date": "2026-05-20",
            "state": 1,
            "probabilities": [
              0.0068829364359895015,
              0.9582799127510234,
              0.03483715081298699
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0350150489789825,
              0.9066805439327145,
              0.058304407088303034
            ],
            "jump_probability": 0.1601303448011056,
            "jump_score": 0.8089055923259515
          },
          {
            "trade_date": "2026-05-21",
            "state": 1,
            "probabilities": [
              2.2405354420523346e-11,
              0.999996844564424,
              3.155413170830132e-06
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              1.204687594121729e-10,
              0.9999944183465319,
              5.581532999300241e-06
            ],
            "jump_probability": 0.14818030915919836,
            "jump_score": 0.729178229042145
          },
          {
            "trade_date": "2026-05-22",
            "state": 1,
            "probabilities": [
              3.391171234007768e-13,
              0.99999943445751,
              5.655421508539255e-07
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              1.8233679246706736e-12,
              0.999998999621723,
              1.000376453637136e-06
            ],
            "jump_probability": 0.15274659476511307,
            "jump_score": 0.7602438915642197
          },
          {
            "trade_date": "2026-05-25",
            "state": 1,
            "probabilities": [
              2.5351355636780556e-11,
              0.9999999999744726,
              1.7606786284725718e-13
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.5351355636780556e-11,
              0.9999999999744726,
              1.7606786284725718e-13
            ],
            "jump_probability": 0.0742130442528476,
            "jump_score": 0.05547460390421184
          }
        ],
        "methodology": {
          "estimation_window_days": 82,
          "reporting_window_days": 63,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "hmm_jump_aware",
          "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
          "regime_scaling": "robust_median_iqr",
          "regime_model_selection": "bic_with_min_state_support",
          "jump_component": "robust_residual_and_return_jump_overlay",
          "jump_model_definition": "jump_score_feature_overlay_not_full_jump_diffusion",
          "current_state_probability_basis": "filtered",
          "historical_state_probability_basis": "smoothed",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "0.31",
          "sector_link_display": "6.24",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.31% stock move in the same direction in this state. This is a point estimate from 82 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 6.24% stock move in the same direction in this state. This is a point estimate from 82 trading days.",
          "stock_persistence_display": "-0.69",
          "point_estimate_note": "Point estimate only because the current state has 82 trading days.",
          "history_limited_note": "Read is based on 82 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Normal / Active",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 37.2,
          "driver_share_display": "37.2%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 82 trading days relative to the 252-day target.",
          "history_days": 82,
          "history_limited": true,
          "volatility_label": "Normal / Active",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 14.3,
          "jump_risk_score": 0.06,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.6879094461904234,
          "effective_days": 36.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 3.2 days.",
          "expected_duration_days": 3.2
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
          "period_label": "2026-05-04 to 2026-05-25",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.03573183279175198,
          "share_sector": 0.3383792953621196,
          "share_company": 0.6258888718461285,
          "share_market_display": "3.6%",
          "share_sector_display": "33.8%",
          "share_company_display": "62.6%",
          "dominant_share_display": "62.6%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 3,
        "current_regime_label": "Normal / Active",
        "current_regime_probability": 0.9999999999744726,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.2805645301987535,
          0.4388319952004604,
          0.280603474600786
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.2805645301987535,
            "expected_duration_days": 2.570112092915776,
            "current_probability": 2.5351355636780556e-11,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 23.006291476297786,
            "volatility": {
              "median": 0.019670413553014264,
              "low": 0.019670413553014264,
              "high": 0.019670413553014264
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.10628549318765912,
            "jump_rate": 5.026476149255578e-29,
            "risk_score": 0.15917237610844018,
            "metrics": {
              "rolling_vol_10d": 0.03405639989100273,
              "downside_vol_10d": 0.01773104788344116,
              "drawdown_21d": 0.04873061453279478,
              "amihud_stress": 0.9187815233669672,
              "spread_rel": 222.11990362970047,
              "spread_ticks": 1.1146056724551332,
              "log_notional": 13.433660856771247,
              "log_trade_count": 5.042132173435468
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.4388319952004604,
            "expected_duration_days": 3.204198229627143,
            "current_probability": 0.9999999999744726,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 35.98422360643775,
            "volatility": {
              "median": 0.016586358983189765,
              "low": 0.016586358983189765,
              "high": 0.016586358983189765
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.1431725842253957,
            "jump_rate": 1.3000625829771122e-24,
            "risk_score": 0.23123853598771166,
            "metrics": {
              "rolling_vol_10d": 0.03153079948409472,
              "downside_vol_10d": 0.017033214755507103,
              "drawdown_21d": 0.0910888183549751,
              "amihud_stress": 1.6071260929557738,
              "spread_rel": 247.2239630234675,
              "spread_ticks": 1.15621628227666,
              "log_notional": 11.984230379950555,
              "log_trade_count": 3.8380355621870135
            }
          },
          {
            "id": 2,
            "label": "Jump / Tail Shock",
            "pct_time": 0.280603474600786,
            "expected_duration_days": 1.5432044986343905,
            "current_probability": 1.7606786284725718e-13,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 23.00948491726445,
            "volatility": {
              "median": 0.057160383775783564,
              "low": 0.057160383775783564,
              "high": 0.057160383775783564
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.4014905169782017,
            "jump_rate": 0.26076203016166116,
            "risk_score": 0.960050849613053,
            "metrics": {
              "rolling_vol_10d": 0.03841266632817649,
              "downside_vol_10d": 0.021575711487935096,
              "drawdown_21d": 0.07859868226028796,
              "amihud_stress": 2.5917333137329743,
              "spread_rel": 242.24348549966456,
              "spread_ticks": 1.1512008749152276,
              "log_notional": 13.003013263784867,
              "log_trade_count": 4.625975637539673
            }
          }
        ],
        "transitions": [
          [
            0.6109119120693657,
            0.1279400430501851,
            0.2611480448804492
          ],
          [
            0.057142448522269226,
            0.6879094461904234,
            0.25494810528730755
          ],
          [
            0.2591070406798951,
            0.38889521753339956,
            0.3519977417867055
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.235,
          "quantity": 572700.0,
          "value": 134584.5
        },
        {
          "level": 2,
          "price": 0.23,
          "quantity": 485100.0,
          "value": 111573.0
        },
        {
          "level": 3,
          "price": 0.225,
          "quantity": 611000.0,
          "value": 137475.0
        },
        {
          "level": 4,
          "price": 0.22,
          "quantity": 200000.0,
          "value": 44000.0
        },
        {
          "level": 5,
          "price": 0.215,
          "quantity": 473300.0,
          "value": 101759.5
        },
        {
          "level": 6,
          "price": 0.21,
          "quantity": 5000.0,
          "value": 1050.0
        },
        {
          "level": 7,
          "price": 0.2,
          "quantity": 100000.0,
          "value": 20000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.24,
          "quantity": 315200.0,
          "value": 75648.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 179200.0,
          "value": 43904.0
        },
        {
          "level": 3,
          "price": 0.25,
          "quantity": 380000.0,
          "value": 95000.0
        },
        {
          "level": 4,
          "price": 0.255,
          "quantity": 269000.0,
          "value": 68595.0
        },
        {
          "level": 5,
          "price": 0.26,
          "quantity": 943300.0,
          "value": 245258.0
        },
        {
          "level": 6,
          "price": 0.265,
          "quantity": 986700.0,
          "value": 261475.5
        },
        {
          "level": 7,
          "price": 0.27,
          "quantity": 695700.0,
          "value": 187839.0
        },
        {
          "level": 8,
          "price": 0.275,
          "quantity": 180000.0,
          "value": 49500.00000000001
        },
        {
          "level": 9,
          "price": 0.28,
          "quantity": 161800.0,
          "value": 45304.00000000001
        },
        {
          "level": 10,
          "price": 0.285,
          "quantity": 314000.0,
          "value": 89489.99999999999
        },
        {
          "level": 11,
          "price": 0.29,
          "quantity": 116800.0,
          "value": 33872.0
        },
        {
          "level": 12,
          "price": 0.295,
          "quantity": 107200.0,
          "value": 31624.0
        },
        {
          "level": 13,
          "price": 0.3,
          "quantity": 3549000.0,
          "value": 1064700.0
        },
        {
          "level": 14,
          "price": 0.305,
          "quantity": 190000.0,
          "value": 57950.0
        },
        {
          "level": 15,
          "price": 0.31,
          "quantity": 50000.0,
          "value": 15500.0
        },
        {
          "level": 16,
          "price": 0.33,
          "quantity": 8000.0,
          "value": 2640.0
        },
        {
          "level": 17,
          "price": 0.335,
          "quantity": 10000.0,
          "value": 3350.0
        },
        {
          "level": 18,
          "price": 0.34,
          "quantity": 2000.0,
          "value": 680.0
        },
        {
          "level": 19,
          "price": 0.35,
          "quantity": 86000.0,
          "value": 30099.999999999996
        },
        {
          "level": 20,
          "price": 0.355,
          "quantity": 10000.0,
          "value": 3550.0
        },
        {
          "level": 21,
          "price": 0.385,
          "quantity": 1000.0,
          "value": 385.0
        },
        {
          "level": 22,
          "price": 0.39,
          "quantity": 10000.0,
          "value": 3900.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-25 08:59:48.685100000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2375,
        "spread_pct": 0.02105263157894739,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 550442.0,
        "ask_depth_notional_displayed": 2410264.5,
        "bid_depth_notional_top10": 550442.0,
        "ask_depth_notional_top10": 2410264.5,
        "bid_ask_depth_ratio": 0.2284
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 124,
        "history_limited": true,
        "trade_days_used": 84,
        "n_trades_used": 12575,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-05-25",
        "window_label": "Jan 22, 2026 to May 25, 2026",
        "window_short_label": "Jan 22-May 25",
        "trade_days_label": "84 trading days",
        "trade_count_label": "12,575 trades",
        "window_detail_label": "84 trading days • 12,575 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to May 25, 2026 (84 trading days • 12,575 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 11000.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.0,
            "pct_of_adv": 4.84
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14512.65,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.64,
            "pct_of_adv": 6.38
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 165563.71,
            "impact_pct": -0.014535,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 30.08,
            "pct_of_adv": 72.79
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-25",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8146327279925059584",
            "timestamp": "2026-05-24 22:59:01.612800000",
            "local_timestamp": "2026-05-25 06:59:01",
            "posted_price": 0.3,
            "size_shares": 3284000.0,
            "notional": 985200.0,
            "impact_pct": -0.052899,
            "filled_pct": 55.9,
            "levels_consumed": 7,
            "pct_of_bid_depth": 178.98,
            "price_vs_mid_pct": 26.316,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8151077170159746048",
            "timestamp": "2026-05-24 22:59:01.612800000",
            "local_timestamp": "2026-05-25 06:59:01",
            "posted_price": 0.26,
            "size_shares": 384500.0,
            "notional": 99970.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 18.16,
            "price_vs_mid_pct": 9.474,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8149098049227101184",
            "timestamp": "2026-05-24 22:59:01.612800000",
            "local_timestamp": "2026-05-25 06:59:01",
            "posted_price": 0.27,
            "size_shares": 250000.0,
            "notional": 67500.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 12.26,
            "price_vs_mid_pct": 13.684,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-25",
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
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 632417.0,
            "ask_depth_notional": 2339189.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 635537.0,
            "ask_depth_notional": 2331101.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 653807.0,
            "ask_depth_notional": 2338936.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 659312.0,
            "ask_depth_notional": 2338618.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 701182.0,
            "ask_depth_notional": 2332988.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 688942.0,
            "ask_depth_notional": 2332988.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 688942.0,
            "ask_depth_notional": 2335488.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 564239.5,
            "ask_depth_notional": 2433696.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 564022.5,
            "ask_depth_notional": 2448096.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 563905.0,
            "ask_depth_notional": 2448276.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 560478.0,
            "ask_depth_notional": 2432744.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 550442.0,
            "ask_depth_notional": 2410264.5,
            "mid_price": 0.2375
          }
        ],
        "summary": {
          "median_spread_pct": 0.020618556701030948,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 633977.0,
          "median_ask_depth_notional": 2339063.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "14:30",
          "deepest_bid_bucket": "13:00",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 22.0,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 159.0
        },
        {
          "ticker": "J03",
          "pct": 464.5
        },
        {
          "ticker": "42F",
          "pct": 872.9
        },
        {
          "ticker": "NXR",
          "pct": 15100.0
        },
        {
          "ticker": "U77",
          "pct": 33394.6
        },
        {
          "ticker": "LVR",
          "pct": 49800.8
        },
        {
          "ticker": "532",
          "pct": 100000000.0
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
          "n_trades": 19,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-25",
          "last_trade_date": "2026-05-25",
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
            "retail_pct": 0.7368421052631579,
            "mixed_pct": 0.21052631578947367,
            "instit_pct": 0.05263157894736842,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.12986301369863013,
            "mixed_qty_pct": 0.4602739726027397,
            "instit_qty_pct": 0.40986301369863015,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.12990671701421388,
            "mixed_notional_pct": 0.4602508549798869,
            "instit_notional_pct": 0.40984242800589926,
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
              "retail": 14,
              "mixed": 4,
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
            "avg": 11526.894736842105,
            "median": 1056.0
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
              "retail_pct": 0.7368421052631579,
              "mixed_pct": 0.21052631578947367,
              "instit_pct": 0.05263157894736842,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.12986301369863013,
              "mixed_qty_pct": 0.4602739726027397,
              "instit_qty_pct": 0.40986301369863015,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.12990671701421388,
              "mixed_notional_pct": 0.4602508549798869,
              "instit_notional_pct": 0.40984242800589926,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11526.894736842105,
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
              "avg_trade_size": 4029.0,
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
              "avg_trade_size": 746.2,
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
              "avg_trade_size": 1.0,
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
              "avg_trade_size": 620.0,
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
              "retail_pct": 0.9470588235294117,
              "mixed_pct": 0.052941176470588235,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.499581356405247,
              "mixed_qty_pct": 0.500418643594753,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4994792914746978,
              "mixed_notional_pct": 0.5005207085253022,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1951.5264705882353,
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
              "retail_pct": 0.9333333333333333,
              "mixed_pct": 0.06666666666666667,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7256418881040475,
              "mixed_qty_pct": 0.27435811189595244,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.722811531584015,
              "mixed_notional_pct": 0.27718846841598505,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3295.76,
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
          "n_trades": 105,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-05-19",
          "last_trade_date": "2026-05-25",
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
            "retail_pct": 0.7428571428571429,
            "mixed_pct": 0.21904761904761905,
            "instit_pct": 0.0380952380952381,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.17697258641239572,
            "mixed_qty_pct": 0.4530472785061581,
            "instit_qty_pct": 0.36998013508144617,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.17727239876331496,
            "mixed_notional_pct": 0.4541307151970846,
            "instit_notional_pct": 0.36859688603960045,
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
              "retail": 78,
              "mixed": 23,
              "institutional": 4,
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
            "avg": 14297.82380952381,
            "median": 4800.0
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
              "retail_pct": 0.7428571428571429,
              "mixed_pct": 0.21904761904761905,
              "instit_pct": 0.0380952380952381,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.17697258641239572,
              "mixed_qty_pct": 0.4530472785061581,
              "instit_qty_pct": 0.36998013508144617,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.17727239876331496,
              "mixed_notional_pct": 0.4541307151970846,
              "instit_notional_pct": 0.36859688603960045,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 14297.82380952381,
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
              "avg_trade_size": 4390.0,
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
              "avg_trade_size": 489.8333333333333,
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
              "avg_trade_size": 1956.4545454545455,
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
              "avg_trade_size": 150.5,
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
              "avg_trade_size": 312.25,
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
              "retail_pct": 0.9826589595375722,
              "mixed_pct": 0.017341040462427744,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7021566878312431,
              "mixed_qty_pct": 0.29784331216875687,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7025986040991025,
              "mixed_notional_pct": 0.29740139590089754,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1291.7673410404625,
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
              "retail_pct": 0.8897338403041825,
              "mixed_pct": 0.11026615969581749,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5424232735921868,
              "mixed_qty_pct": 0.4575767264078133,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5399942630933141,
              "mixed_notional_pct": 0.4600057369066859,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5208.090114068441,
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
              "retail_pct": 0.8048780487804879,
              "mixed_pct": 0.1951219512195122,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4271773758917268,
              "mixed_qty_pct": 0.5728226241082732,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4240689764855511,
              "mixed_notional_pct": 0.5759310235144489,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6768.230894308942,
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
          "n_trades": 687,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-24",
          "last_trade_date": "2026-05-25",
          "period_days": 31,
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
            "retail_pct": 0.7991266375545851,
            "mixed_pct": 0.17758369723435224,
            "instit_pct": 0.023289665211062592,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2728554219955404,
            "mixed_qty_pct": 0.49324012609887996,
            "instit_qty_pct": 0.23390445190557962,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2726947633462688,
            "mixed_notional_pct": 0.49355782432706397,
            "instit_notional_pct": 0.2337474123266672,
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
              "retail": 549,
              "mixed": 122,
              "institutional": 16,
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
            "avg": 11358.576419213974,
            "median": 4800.0
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
              "retail_pct": 0.7991266375545851,
              "mixed_pct": 0.17758369723435224,
              "instit_pct": 0.023289665211062592,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2728554219955404,
              "mixed_qty_pct": 0.49324012609887996,
              "instit_qty_pct": 0.23390445190557962,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2726947633462688,
              "mixed_notional_pct": 0.49355782432706397,
              "instit_notional_pct": 0.2337474123266672,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11358.576419213974,
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
              "avg_trade_size": 352.84758064516126,
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
              "avg_trade_size": 350.45000000000005,
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
              "retail_pct": 0.9866666666666667,
              "mixed_pct": 0.013333333333333334,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8565829583393816,
              "mixed_qty_pct": 0.1434170416606184,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8573516284264822,
              "mixed_notional_pct": 0.14264837157351776,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1819.2613333333334,
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
              "retail_pct": 0.9811320754716981,
              "mixed_pct": 0.018867924528301886,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8508575689783744,
              "mixed_qty_pct": 0.14914243102162567,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.847727233793895,
              "mixed_notional_pct": 0.152272766206105,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4956.3490566037735,
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
              "retail_pct": 0.98,
              "mixed_pct": 0.02,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8529411764705882,
              "mixed_qty_pct": 0.14705882352941177,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8496685106203286,
              "mixed_notional_pct": 0.15033148937967147,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2368.1,
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
              "retail_pct": 0.9405526992287918,
              "mixed_pct": 0.055751928020565555,
              "instit_pct": 0.0036953727506426736,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.38415405942981135,
              "mixed_qty_pct": 0.49311875916661646,
              "instit_qty_pct": 0.12272718140357222,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.38339576544999493,
              "mixed_notional_pct": 0.4936711607166511,
              "instit_notional_pct": 0.12293307383335396,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3165.7348971722363,
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
              "retail_pct": 0.9271043093032622,
              "mixed_pct": 0.07289569069673782,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5325881506512616,
              "mixed_qty_pct": 0.4674118493487383,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5310364372526959,
              "mixed_notional_pct": 0.468963562747304,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3470.154369714056,
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
              "retail_pct": 0.8830985915492958,
              "mixed_pct": 0.11267605633802817,
              "instit_pct": 0.004225352112676056,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.505773485116118,
              "mixed_qty_pct": 0.43492010138669285,
              "instit_qty_pct": 0.05930641349718923,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5060331989299864,
              "mixed_notional_pct": 0.43117115015096447,
              "instit_notional_pct": 0.06279565091904919,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5774.4691549295785,
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
          "n_trades": 2733,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-24",
          "last_trade_date": "2026-05-25",
          "period_days": 90,
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
            "retail_pct": 0.8675448225393341,
            "mixed_pct": 0.11964873765093303,
            "instit_pct": 0.012806439809732895,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34244419489952566,
            "mixed_qty_pct": 0.473135214444045,
            "instit_qty_pct": 0.18442059065642935,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3385949999273582,
            "mixed_notional_pct": 0.47449679420837526,
            "instit_notional_pct": 0.18690820586426654,
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
              "retail": 2371,
              "mixed": 327,
              "institutional": 35,
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
            "avg": 7593.310830589096,
            "median": 2208.0
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
              "retail_pct": 0.8675448225393341,
              "mixed_pct": 0.11964873765093303,
              "instit_pct": 0.012806439809732895,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.34244419489952566,
              "mixed_qty_pct": 0.473135214444045,
              "instit_qty_pct": 0.18442059065642935,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3385949999273582,
              "mixed_notional_pct": 0.47449679420837526,
              "instit_notional_pct": 0.18690820586426654,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7593.310830589096,
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
              "avg_trade_size": 420.05221843003415,
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
              "avg_trade_size": 464.5142857142857,
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
              "retail_pct": 0.9927927927927928,
              "mixed_pct": 0.007207207207207207,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8814197027654104,
              "mixed_qty_pct": 0.11858029723458957,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.881027791373682,
              "mixed_notional_pct": 0.11897220862631797,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1160.701081081081,
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
              "retail_pct": 0.9807692307692307,
              "mixed_pct": 0.009615384615384616,
              "instit_pct": 0.009615384615384616,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.38734323194464465,
              "mixed_qty_pct": 0.0360386334150209,
              "instit_qty_pct": 0.5766181346403344,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.39379522556189045,
              "mixed_notional_pct": 0.03836739078722212,
              "instit_notional_pct": 0.5678373836508874,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10024.538461538461,
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
              "retail_pct": 0.931864308495216,
              "mixed_pct": 0.06813569150478399,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6008664562656567,
              "mixed_qty_pct": 0.3991335437343433,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5850676000102171,
              "mixed_notional_pct": 0.4149323999897829,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3639.1599304146134,
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
              "retail_pct": 0.9287833827893175,
              "mixed_pct": 0.0712166172106825,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5729323308270676,
              "mixed_qty_pct": 0.4270676691729323,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5767101019449598,
              "mixed_notional_pct": 0.42328989805504025,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4060.6364985163204,
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
              "retail_pct": 0.9280753384343732,
              "mixed_pct": 0.06527369040612124,
              "instit_pct": 0.006650971159505591,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3693903953395662,
              "mixed_qty_pct": 0.45865071643172556,
              "instit_qty_pct": 0.17195888822870828,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.36943474685165245,
              "mixed_notional_pct": 0.4579895509924773,
              "instit_notional_pct": 0.17257570215587026,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3952.3989405532666,
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
              "retail_pct": 0.891647855530474,
              "mixed_pct": 0.10214446952595936,
              "instit_pct": 0.006207674943566591,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.46038859590375925,
              "mixed_qty_pct": 0.41600951382174395,
              "instit_qty_pct": 0.12360189027449679,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.45471347137587925,
              "mixed_notional_pct": 0.42042031307094935,
              "instit_notional_pct": 0.1248662155531714,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5654.806151241535,
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
      "n_trades": 2733,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-02-24",
      "last_trade_date": "2026-05-25",
      "period_days": 90,
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
        "retail_pct": 0.8675448225393341,
        "mixed_pct": 0.11964873765093303,
        "instit_pct": 0.012806439809732895,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.3385949999273582,
        "mixed_notional_pct": 0.47449679420837526,
        "instit_notional_pct": 0.18690820586426654,
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
        "avg": 7593.310830589096,
        "median": 2208.0
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
            "n_trades": 558,
            "n_runs": 0,
            "retail_pct": 0.7885304659498208,
            "mixed_pct": 0.1863799283154122,
            "instit_pct": 0.025089605734767026,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 12132.685483870968,
            "avg_run_notional": null,
            "retail_qty_pct": 0.262377137009614,
            "mixed_qty_pct": 0.4919154205798058,
            "instit_qty_pct": 0.2457074424105802,
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
            "total_quantity": 26971100.0
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
          "retail_pct": 0.8675448225393341,
          "mixed_pct": 0.11964873765093303,
          "instit_pct": 0.012806439809732895,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.34244419489952566,
          "mixed_qty_pct": 0.473135214444045,
          "instit_qty_pct": 0.18442059065642935,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3385949999273582,
          "mixed_notional_pct": 0.47449679420837526,
          "instit_notional_pct": 0.18690820586426654,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 7593.310830589096,
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
          "avg_trade_size": 420.05221843003415,
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
          "avg_trade_size": 464.5142857142857,
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
          "retail_pct": 0.9927927927927928,
          "mixed_pct": 0.007207207207207207,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8814197027654104,
          "mixed_qty_pct": 0.11858029723458957,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.881027791373682,
          "mixed_notional_pct": 0.11897220862631797,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1160.701081081081,
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
          "retail_pct": 0.9807692307692307,
          "mixed_pct": 0.009615384615384616,
          "instit_pct": 0.009615384615384616,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.38734323194464465,
          "mixed_qty_pct": 0.0360386334150209,
          "instit_qty_pct": 0.5766181346403344,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.39379522556189045,
          "mixed_notional_pct": 0.03836739078722212,
          "instit_notional_pct": 0.5678373836508874,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 10024.538461538461,
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
          "retail_pct": 0.931864308495216,
          "mixed_pct": 0.06813569150478399,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6008664562656567,
          "mixed_qty_pct": 0.3991335437343433,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5850676000102171,
          "mixed_notional_pct": 0.4149323999897829,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3639.1599304146134,
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
          "retail_pct": 0.9287833827893175,
          "mixed_pct": 0.0712166172106825,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5729323308270676,
          "mixed_qty_pct": 0.4270676691729323,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5767101019449598,
          "mixed_notional_pct": 0.42328989805504025,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4060.6364985163204,
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
          "retail_pct": 0.9280753384343732,
          "mixed_pct": 0.06527369040612124,
          "instit_pct": 0.006650971159505591,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3693903953395662,
          "mixed_qty_pct": 0.45865071643172556,
          "instit_qty_pct": 0.17195888822870828,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.36943474685165245,
          "mixed_notional_pct": 0.4579895509924773,
          "instit_notional_pct": 0.17257570215587026,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3952.3989405532666,
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
          "retail_pct": 0.891647855530474,
          "mixed_pct": 0.10214446952595936,
          "instit_pct": 0.006207674943566591,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.46038859590375925,
          "mixed_qty_pct": 0.41600951382174395,
          "instit_qty_pct": 0.12360189027449679,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.45471347137587925,
          "mixed_notional_pct": 0.42042031307094935,
          "instit_notional_pct": 0.1248662155531714,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5654.806151241535,
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
            "retail_pct": 0.7368421052631579,
            "mixed_pct": 0.21052631578947367,
            "instit_pct": 0.05263157894736842,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.12986301369863013,
            "mixed_qty_pct": 0.4602739726027397,
            "instit_qty_pct": 0.40986301369863015,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.12990671701421388,
            "mixed_notional_pct": 0.4602508549798869,
            "instit_notional_pct": 0.40984242800589926,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11526.894736842105,
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
            "avg_trade_size": 4029.0,
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
            "avg_trade_size": 746.2,
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
            "avg_trade_size": 1.0,
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
            "avg_trade_size": 620.0,
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
            "retail_pct": 0.9470588235294117,
            "mixed_pct": 0.052941176470588235,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.499581356405247,
            "mixed_qty_pct": 0.500418643594753,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4994792914746978,
            "mixed_notional_pct": 0.5005207085253022,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1951.5264705882353,
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
            "retail_pct": 0.9333333333333333,
            "mixed_pct": 0.06666666666666667,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7256418881040475,
            "mixed_qty_pct": 0.27435811189595244,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.722811531584015,
            "mixed_notional_pct": 0.27718846841598505,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3295.76,
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
            "retail_pct": 0.7428571428571429,
            "mixed_pct": 0.21904761904761905,
            "instit_pct": 0.0380952380952381,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.17697258641239572,
            "mixed_qty_pct": 0.4530472785061581,
            "instit_qty_pct": 0.36998013508144617,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.17727239876331496,
            "mixed_notional_pct": 0.4541307151970846,
            "instit_notional_pct": 0.36859688603960045,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 14297.82380952381,
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
            "avg_trade_size": 4390.0,
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
            "avg_trade_size": 489.8333333333333,
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
            "avg_trade_size": 1956.4545454545455,
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
            "avg_trade_size": 150.5,
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
            "avg_trade_size": 312.25,
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
            "retail_pct": 0.9826589595375722,
            "mixed_pct": 0.017341040462427744,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7021566878312431,
            "mixed_qty_pct": 0.29784331216875687,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7025986040991025,
            "mixed_notional_pct": 0.29740139590089754,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1291.7673410404625,
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
            "retail_pct": 0.8897338403041825,
            "mixed_pct": 0.11026615969581749,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5424232735921868,
            "mixed_qty_pct": 0.4575767264078133,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5399942630933141,
            "mixed_notional_pct": 0.4600057369066859,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5208.090114068441,
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
            "retail_pct": 0.8048780487804879,
            "mixed_pct": 0.1951219512195122,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4271773758917268,
            "mixed_qty_pct": 0.5728226241082732,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4240689764855511,
            "mixed_notional_pct": 0.5759310235144489,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6768.230894308942,
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
            "retail_pct": 0.7991266375545851,
            "mixed_pct": 0.17758369723435224,
            "instit_pct": 0.023289665211062592,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2728554219955404,
            "mixed_qty_pct": 0.49324012609887996,
            "instit_qty_pct": 0.23390445190557962,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2726947633462688,
            "mixed_notional_pct": 0.49355782432706397,
            "instit_notional_pct": 0.2337474123266672,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11358.576419213974,
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
            "avg_trade_size": 352.84758064516126,
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
            "avg_trade_size": 350.45000000000005,
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
            "retail_pct": 0.9866666666666667,
            "mixed_pct": 0.013333333333333334,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8565829583393816,
            "mixed_qty_pct": 0.1434170416606184,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8573516284264822,
            "mixed_notional_pct": 0.14264837157351776,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1819.2613333333334,
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
            "retail_pct": 0.9811320754716981,
            "mixed_pct": 0.018867924528301886,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8508575689783744,
            "mixed_qty_pct": 0.14914243102162567,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.847727233793895,
            "mixed_notional_pct": 0.152272766206105,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4956.3490566037735,
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
            "retail_pct": 0.98,
            "mixed_pct": 0.02,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8529411764705882,
            "mixed_qty_pct": 0.14705882352941177,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8496685106203286,
            "mixed_notional_pct": 0.15033148937967147,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2368.1,
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
            "retail_pct": 0.9405526992287918,
            "mixed_pct": 0.055751928020565555,
            "instit_pct": 0.0036953727506426736,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.38415405942981135,
            "mixed_qty_pct": 0.49311875916661646,
            "instit_qty_pct": 0.12272718140357222,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.38339576544999493,
            "mixed_notional_pct": 0.4936711607166511,
            "instit_notional_pct": 0.12293307383335396,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3165.7348971722363,
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
            "retail_pct": 0.9271043093032622,
            "mixed_pct": 0.07289569069673782,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5325881506512616,
            "mixed_qty_pct": 0.4674118493487383,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5310364372526959,
            "mixed_notional_pct": 0.468963562747304,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3470.154369714056,
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
            "retail_pct": 0.8830985915492958,
            "mixed_pct": 0.11267605633802817,
            "instit_pct": 0.004225352112676056,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.505773485116118,
            "mixed_qty_pct": 0.43492010138669285,
            "instit_qty_pct": 0.05930641349718923,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5060331989299864,
            "mixed_notional_pct": 0.43117115015096447,
            "instit_notional_pct": 0.06279565091904919,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5774.4691549295785,
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
            "retail_pct": 0.8675448225393341,
            "mixed_pct": 0.11964873765093303,
            "instit_pct": 0.012806439809732895,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34244419489952566,
            "mixed_qty_pct": 0.473135214444045,
            "instit_qty_pct": 0.18442059065642935,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3385949999273582,
            "mixed_notional_pct": 0.47449679420837526,
            "instit_notional_pct": 0.18690820586426654,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7593.310830589096,
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
            "avg_trade_size": 420.05221843003415,
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
            "avg_trade_size": 464.5142857142857,
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
            "retail_pct": 0.9927927927927928,
            "mixed_pct": 0.007207207207207207,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8814197027654104,
            "mixed_qty_pct": 0.11858029723458957,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.881027791373682,
            "mixed_notional_pct": 0.11897220862631797,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1160.701081081081,
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
            "retail_pct": 0.9807692307692307,
            "mixed_pct": 0.009615384615384616,
            "instit_pct": 0.009615384615384616,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.38734323194464465,
            "mixed_qty_pct": 0.0360386334150209,
            "instit_qty_pct": 0.5766181346403344,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.39379522556189045,
            "mixed_notional_pct": 0.03836739078722212,
            "instit_notional_pct": 0.5678373836508874,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10024.538461538461,
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
            "retail_pct": 0.931864308495216,
            "mixed_pct": 0.06813569150478399,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6008664562656567,
            "mixed_qty_pct": 0.3991335437343433,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5850676000102171,
            "mixed_notional_pct": 0.4149323999897829,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3639.1599304146134,
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
            "retail_pct": 0.9287833827893175,
            "mixed_pct": 0.0712166172106825,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5729323308270676,
            "mixed_qty_pct": 0.4270676691729323,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5767101019449598,
            "mixed_notional_pct": 0.42328989805504025,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4060.6364985163204,
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
            "retail_pct": 0.9280753384343732,
            "mixed_pct": 0.06527369040612124,
            "instit_pct": 0.006650971159505591,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3693903953395662,
            "mixed_qty_pct": 0.45865071643172556,
            "instit_qty_pct": 0.17195888822870828,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.36943474685165245,
            "mixed_notional_pct": 0.4579895509924773,
            "instit_notional_pct": 0.17257570215587026,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3952.3989405532666,
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
            "retail_pct": 0.891647855530474,
            "mixed_pct": 0.10214446952595936,
            "instit_pct": 0.006207674943566591,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.46038859590375925,
            "mixed_qty_pct": 0.41600951382174395,
            "instit_qty_pct": 0.12360189027449679,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.45471347137587925,
            "mixed_notional_pct": 0.42042031307094935,
            "instit_notional_pct": 0.1248662155531714,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5654.806151241535,
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
      "total_trades": 7057,
      "price_moving_trades": 1384,
      "pct_price_moving": 19.611733031033015,
      "all_movers": {
        "count": 1384,
        "avg_size": 7209.26950867052,
        "median_size": 975.0,
        "retail_count": 1176,
        "mixed_count": 189,
        "institutional_count": 19,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 84.97109826589595,
        "mixed_pct": 13.65606936416185,
        "instit_pct": 1.3728323699421965,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 692,
        "avg_size": 5187.862716763006,
        "median_size": 71.25,
        "retail_count": 613,
        "mixed_count": 73,
        "institutional_count": 6,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.58381502890174,
        "mixed_pct": 10.54913294797688,
        "instit_pct": 0.8670520231213872,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 692,
        "avg_size": 9230.676300578034,
        "median_size": 2450.0,
        "retail_count": 563,
        "mixed_count": 116,
        "institutional_count": 13,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.35838150289018,
        "mixed_pct": 16.76300578034682,
        "instit_pct": 1.8786127167630058,
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
        "n_days_short_data": 66,
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
            "avg_short_ratio": 0.002332243703022513,
            "max_short_ratio": 0.07371154614462645,
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
            "date": "2026-05-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 912500,
            "close": 0.24,
            "return": 0.0
          },
          {
            "date": "2026-05-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 783200,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-05-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 857800,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-05-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1845400,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-05-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2350800,
            "close": 0.235,
            "return": -0.04081632653061229
          },
          {
            "date": "2026-05-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 666400,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2026-05-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2861300,
            "close": 0.24,
            "return": -0.05882352941176472
          },
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
          "avg_short_ratio": 2.918345318686114e-05,
          "max_short_ratio": 0.0071947622131088565,
          "is_target": false
        },
        {
          "ticker": "532",
          "avg_short_ratio": 7.7619427677031e-05,
          "max_short_ratio": 0.0287968076681785,
          "is_target": false
        },
        {
          "ticker": "J03",
          "avg_short_ratio": 0.0005163621444912032,
          "max_short_ratio": 0.04373162853885592,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.004744088001131344,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.006010464497695429,
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
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        },
        "1W": {
          "opening": 0.05524075447404166,
          "continuous": 0.9380313061008083,
          "closing": 0.0054031534978717455,
          "auctions": 0.06196869389919168,
          "other": 0.0
        },
        "1M": {
          "opening": 0.053204758748681885,
          "continuous": 0.9231902292893472,
          "closing": 0.011321585927806153,
          "auctions": 0.07680977071065276,
          "other": 0.0
        },
        "3M": {
          "opening": 0.02613294356748319,
          "continuous": 0.9564896877609326,
          "closing": 0.011612160786745433,
          "auctions": 0.04351031223906741,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.5451643830828676,
        "1W": 0.41032856311558746,
        "1M": 0.3258494228182206,
        "3M": 0.3095953187505466
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0203
        },
        {
          "time": "09:00",
          "avg_share": 0.157
        },
        {
          "time": "09:30",
          "avg_share": 0.1091
        },
        {
          "time": "10:00",
          "avg_share": 0.0563
        },
        {
          "time": "10:30",
          "avg_share": 0.0704
        },
        {
          "time": "11:00",
          "avg_share": 0.0459
        },
        {
          "time": "11:30",
          "avg_share": 0.0507
        },
        {
          "time": "12:30",
          "avg_share": 0.0027
        },
        {
          "time": "13:00",
          "avg_share": 0.0809
        },
        {
          "time": "13:30",
          "avg_share": 0.0594
        },
        {
          "time": "14:00",
          "avg_share": 0.0502
        },
        {
          "time": "14:30",
          "avg_share": 0.0658
        },
        {
          "time": "15:00",
          "avg_share": 0.0523
        },
        {
          "time": "15:30",
          "avg_share": 0.0481
        },
        {
          "time": "16:00",
          "avg_share": 0.0358
        },
        {
          "time": "16:30",
          "avg_share": 0.0624
        },
        {
          "time": "17:00",
          "avg_share": 0.0328
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.274256234917966,
          "hhi": 0.2772271281284679,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 15.210173342617365,
          "hhi": 0.769457199880753,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 11.73912217847603,
          "hhi": 0.816166933245045,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 4.071860611022048,
          "hhi": 0.5642699957835485,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 4.688227612775221,
          "hhi": 0.5080898438242525,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 1.7747362296588156,
          "hhi": 0.7714179056351557,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 10.457138564242292,
          "hhi": 0.4723912796360515,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 3.2459710649688867,
          "hhi": 0.5059868362465384,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.1873511626289854,
          "hhi": 0.18347908069047944,
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
