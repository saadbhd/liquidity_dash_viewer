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
      "ticker": "1723",
      "name": "MOON INC",
      "marketCap": 836976000.0,
      "sector": "Diversified Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "2136",
      "name": "LIFESTYLE CHI",
      "marketCap": 951891525.0,
      "sector": "Diversified Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "1268",
      "name": "MEIDONG AUTO",
      "marketCap": 1278934840.95,
      "sector": "Automotive Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "1137",
      "name": "HK TECH VENTURE",
      "marketCap": 878535896.9100001,
      "sector": "Online Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "493",
      "name": "GOME RETAIL",
      "marketCap": 875993180.544,
      "sector": "Home Improvement Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "398",
      "name": "ORIENTAL WATCH",
      "marketCap": 1603408556.96,
      "sector": "Other Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "887",
      "name": "EMPEROR WATCH&J",
      "marketCap": 2104445357.4099998,
      "sector": "Other Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "2420",
      "name": "ZIBUYU",
      "marketCap": 2150000000.0,
      "sector": "Apparel Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    },
    {
      "ticker": "2519",
      "name": "AUGROUP",
      "marketCap": 2065642626.4800003,
      "sector": "Home Improvement Retailers",
      "industry": "Consumer Discretionary - Specialty Retail"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1723",
    "company": "MOON INC",
    "asof_date": "2026-05-13",
    "industry": "Consumer Discretionary - Specialty Retail",
    "sector": "Diversified Retailers",
    "market_cap_display": "837.0M",
    "market_cap_category": "mid",
    "universe_total": 2571,
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
          "score_pca": 77.71295215869311,
          "score_pca_percentile": 77.71295215869311,
          "rank_pca": 574,
          "total": 2571,
          "adv_notional_sgd": 3451000.0,
          "adv_volume_shares": 1972000.0,
          "free_float_shares": 145094000.0,
          "turnover_ratio": 0.013591189160130674,
          "votes": 334.0,
          "trades": 334.0,
          "spread_pct": 0.0253659120763148,
          "spread_ticks": 4.642465753424657,
          "amihud": 1.1145041571005084e-08,
          "volatility": 1.6622178165059922
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5415139979625669,
          "loadings": {
            "log_adv": 0.539795955156232,
            "log_trades": 0.5007996938517408,
            "log_turnover": 0.5020930980137885,
            "neg_spread": 0.3973403395701007,
            "neg_amihud": 0.03913572685208539,
            "neg_vol": -0.21520121699462244
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
          "peer_median_adv": 744662.5,
          "peer_median_score_pca": 55.192532088681446,
          "peer_median_trades": 81.0,
          "peer_median_volatility": 0.4360654483168603,
          "peer_median_spread_pct": 0.021181754524530555,
          "peer_median_spread_ticks": 1.712128252788104,
          "peer_median_amihud": 7.274104009205003e-09,
          "peer_median_turnover_ratio": 0.0008447880069510224,
          "target_vs_peer": {
            "score_pca_delta": 22.52,
            "adv_delta_pct": 363.4,
            "trades_delta_pct": 312.35,
            "volatility_delta_pct": -281.19,
            "spread_pct_delta_pct": -19.75,
            "spread_ticks_delta_pct": 171.15,
            "amihud_delta_pct": -53.22,
            "turnover_ratio_delta_pct": 1508.83
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1723",
            "score_pca": 77.71295215869311,
            "rank_pca": 574,
            "adv": 3451000.0,
            "trades": 334.0,
            "volatility": 1.6622178165059922,
            "spread_pct": 0.0253659120763148,
            "spread_ticks": 4.642465753424657,
            "amihud": 1.1145041571005084e-08,
            "turnover_ratio": 0.013591189160130674,
            "is_target": true
          },
          {
            "ticker": "2136",
            "score_pca": 52.70322831583042,
            "rank_pca": 1217,
            "adv": 910975.0,
            "trades": 30.0,
            "volatility": 0.43673041404043145,
            "spread_pct": 0.02466458869765553,
            "spread_ticks": 1.625,
            "amihud": 1.6632196439545695e-08,
            "turnover_ratio": 0.0009570155590995518,
            "is_target": false
          },
          {
            "ticker": "1268",
            "score_pca": 57.526254375729295,
            "rank_pca": 1093,
            "adv": 341781.5,
            "trades": 106.0,
            "volatility": 0.7065167684798602,
            "spread_pct": 0.018687980230896965,
            "spread_ticks": 1.7992565055762082,
            "amihud": 0.0,
            "turnover_ratio": 0.0007325604548024931,
            "is_target": false
          },
          {
            "ticker": "1137",
            "score_pca": 62.19369894982497,
            "rank_pca": 973,
            "adv": 1222706.07,
            "trades": 122.0,
            "volatility": 0.4354004825932891,
            "spread_pct": 0.018576092025493565,
            "spread_ticks": 2.051502145922747,
            "amihud": 0.0,
            "turnover_ratio": 0.002860801866970086,
            "is_target": false
          },
          {
            "ticker": "493",
            "score_pca": 51.65305328665889,
            "rank_pca": 1244,
            "adv": 232488.0,
            "trades": 359.0,
            "volatility": 0.763096243526681,
            "spread_pct": 0.07999999999999993,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00041702728584069214,
            "is_target": false
          },
          {
            "ticker": "398",
            "score_pca": 55.73706728899261,
            "rank_pca": 1139,
            "adv": 1209479.67,
            "trades": 38.0,
            "volatility": 0.1749335972835939,
            "spread_pct": 0.003980130686180807,
            "spread_ticks": 1.309278350515464,
            "amihud": 2.5207372752325735e-09,
            "turnover_ratio": 0.001215523418721487,
            "is_target": false
          },
          {
            "ticker": "887",
            "score_pca": 75.65149747180085,
            "rank_pca": 627,
            "adv": 4088999.9999999995,
            "trades": 207.0,
            "volatility": 1.8957672440241442,
            "spread_pct": 0.023675528818164142,
            "spread_ticks": 1.3656716417910448,
            "amihud": 1.2027470743177432e-08,
            "turnover_ratio": 0.004935284543090039,
            "is_target": false
          },
          {
            "ticker": "2420",
            "score_pca": 54.64799688837029,
            "rank_pca": 1167,
            "adv": 578350.0,
            "trades": 56.0,
            "volatility": 0.3361198967613164,
            "spread_pct": 0.011213604850388007,
            "spread_ticks": 4.782805429864253,
            "amihud": 5.073981578714727e-08,
            "turnover_ratio": 0.0006919121986980878,
            "is_target": false
          },
          {
            "ticker": "2519",
            "score_pca": 37.06728899260988,
            "rank_pca": 1619,
            "adv": 219618.00000000003,
            "trades": 21.0,
            "volatility": 0.38139540068101324,
            "spread_pct": 0.0510691977456306,
            "spread_ticks": 25.612244897959183,
            "amihud": 7.434058507155547e-08,
            "turnover_ratio": 0.00022038109778631135,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Diversified Retailers",
          "sector_count": 12,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5060275237141258,
              "median": 0.3232042928751561,
              "min": 0.0,
              "max": 10.473745016150396,
              "p5": 0.0,
              "p95": 1.6136677699860567,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 76680566.54049411,
              "median": 315650.0,
              "min": 0.0,
              "max": 12307843080.0,
              "p5": 0.0,
              "p95": 303731318.55,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04428403255950007,
              "median": 0.025075323160657016,
              "min": 0.0004705526210834868,
              "max": 1.0959752321981422,
              "p5": 0.0013279044262458311,
              "p95": 0.14550755907591303,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007293044804018578,
              "median": 0.001317109260391724,
              "min": 0.0,
              "max": 1.166388526205764,
              "p5": 0.0,
              "p95": 0.02673403916685832,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.468634989908863e-06,
              "median": 6.149074472055994e-09,
              "min": 0.0,
              "max": 0.0034902020509696395,
              "p5": 0.0,
              "p95": 4.166733892878599e-06,
              "count": 2231
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1362.7183975106961,
              "median": 29.0,
              "min": 0.0,
              "max": 71810.0,
              "p5": 0.0,
              "p95": 7450.5,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.45634906568572026,
              "median": 0.21255814338618984,
              "min": 0.0,
              "max": 1.6622178165059922,
              "p5": 0.0,
              "p95": 1.4618053663825263,
              "count": 12
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 22868276.358333334,
              "median": 6448.25,
              "min": 0.0,
              "max": 269502679.8,
              "p5": 0.0,
              "p95": 123174255.90999982,
              "count": 12
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.058115959324340716,
              "median": 0.048541233694450556,
              "min": 0.0014429630162199004,
              "max": 0.14676258992805757,
              "p5": 0.007118917172128467,
              "p95": 0.12609279325918912,
              "count": 12
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003065707433047431,
              "median": 7.212309409138015e-05,
              "min": 0.0,
              "max": 0.021638037533759754,
              "p5": 0.0,
              "p95": 0.017212270928263756,
              "count": 12
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3416353381296937e-06,
              "median": 1.138970613545749e-08,
              "min": 0.0,
              "max": 7.06526538903117e-06,
              "p5": 0.0,
              "p95": 5.897781581696223e-06,
              "count": 9
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1007.4166666666666,
              "median": 4.0,
              "min": 0.0,
              "max": 11698.0,
              "p5": 0.0,
              "p95": 5447.799999999992,
              "count": 12
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1100549.78,
              "median": 744662.5,
              "min": 219618.00000000003,
              "max": 4088999.9999999995,
              "p5": 224122.50000000003,
              "p95": 3085797.124499998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 117.375,
              "median": 81.0,
              "min": 21.0,
              "max": 359.0,
              "p5": 24.15,
              "p95": 305.7999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6412450059237912,
              "median": 0.4360654483168603,
              "min": 0.1749335972835939,
              "max": 1.8957672440241442,
              "p5": 0.23134880210079678,
              "p95": 1.4993323938500316,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.028983390381801193,
              "median": 0.021181754524530555,
              "min": 0.003980130686180807,
              "max": 0.07999999999999993,
              "p5": 0.006511846643653327,
              "p95": 0.06987421921097065,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.943219871453613,
              "median": 1.712128252788104,
              "min": 1.0,
              "max": 25.612244897959183,
              "p5": 1.1082474226804124,
              "p95": 18.321941084125946,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9532600664582307e-08,
              "median": 7.274104009205003e-09,
              "min": 0.0,
              "max": 7.434058507155547e-08,
              "p5": 0.0,
              "p95": 6.608031582201258e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0015038133031260936,
              "median": 0.0008447880069510224,
              "min": 0.00022038109778631135,
              "max": 0.004935284543090039,
              "p5": 0.0002892072636053446,
              "p95": 0.004209215606448055,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.03846153846153855,
            "market": 0.0029893238287395096,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.04145086229027806,
            "vs_sector": -0.03846153846153855,
            "vs_peers": -0.03846153846153855
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 40.49008168028005,
          "score_pca_percentile": 40.49008168028005,
          "rank_pca": 1531,
          "total": 2571,
          "adv_notional_sgd": 146640.0,
          "adv_volume_shares": 156000.0,
          "free_float_shares": 145094000.0,
          "turnover_ratio": 0.0010751650654058748,
          "votes": 16.0,
          "trades": 16.0,
          "spread_pct": 0.04751324559904293,
          "spread_ticks": 4.75,
          "amihud": 1.1336634561317547e-07,
          "volatility": 2.17210208814035
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5692277918071348,
          "loadings": {
            "log_adv": 0.5237381055673225,
            "log_trades": 0.47901586209148317,
            "log_turnover": 0.4752069126691627,
            "neg_spread": 0.4563399145933451,
            "neg_amihud": 0.23918268370930182,
            "neg_vol": 0.0704706815314182
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
          "peer_median_adv": 494706.125,
          "peer_median_score_pca": 59.06262154803578,
          "peer_median_trades": 51.5,
          "peer_median_volatility": 0.4018306389613756,
          "peer_median_spread_pct": 0.02082159312018715,
          "peer_median_spread_ticks": 1.6340136054421768,
          "peer_median_amihud": 2.4403681438524192e-08,
          "peer_median_turnover_ratio": 0.0008500038557563432,
          "target_vs_peer": {
            "score_pca_delta": -18.57,
            "adv_delta_pct": -70.4,
            "trades_delta_pct": -68.93,
            "volatility_delta_pct": -440.55,
            "spread_pct_delta_pct": -128.19,
            "spread_ticks_delta_pct": 190.7,
            "amihud_delta_pct": -364.55,
            "turnover_ratio_delta_pct": 26.49
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1723",
            "score_pca": 40.49008168028005,
            "rank_pca": 1531,
            "adv": 146640.0,
            "trades": 16.0,
            "volatility": 2.17210208814035,
            "spread_pct": 0.04751324559904293,
            "spread_ticks": 4.75,
            "amihud": 1.1336634561317547e-07,
            "turnover_ratio": 0.0010751650654058748,
            "is_target": true
          },
          {
            "ticker": "2136",
            "score_pca": 44.651886425515364,
            "rank_pca": 1424,
            "adv": 129280.0,
            "trades": 13.0,
            "volatility": 0.2504883436790345,
            "spread_pct": 0.02335025380710662,
            "spread_ticks": 1.5333333333333334,
            "amihud": 3.311082856537402e-08,
            "turnover_ratio": 0.0001379358850789222,
            "is_target": false
          },
          {
            "ticker": "1268",
            "score_pca": 63.166083236094906,
            "rank_pca": 948,
            "adv": 618340.25,
            "trades": 111.0,
            "volatility": 0.41642123480145743,
            "spread_pct": 0.01879013180128423,
            "spread_ticks": 1.8699551569506727,
            "amihud": 2.5152137471925002e-08,
            "turnover_ratio": 0.0010855952594100375,
            "is_target": false
          },
          {
            "ticker": "1137",
            "score_pca": 63.55503695060288,
            "rank_pca": 938,
            "adv": 657600.0,
            "trades": 83.0,
            "volatility": 0.38724004312129373,
            "spread_pct": 0.015402909438449481,
            "spread_ticks": 1.7346938775510203,
            "amihud": 2.2246738697783588e-08,
            "turnover_ratio": 0.0014855412645302785,
            "is_target": false
          },
          {
            "ticker": "493",
            "score_pca": 52.04200700116686,
            "rank_pca": 1234,
            "adv": 371072.0,
            "trades": 359.0,
            "volatility": 1.2170377214866743,
            "spread_pct": 0.076944837340877,
            "spread_ticks": 1.0,
            "amihud": 1.583412725647396e-07,
            "turnover_ratio": 0.0006144124521026488,
            "is_target": false
          },
          {
            "ticker": "398",
            "score_pca": 64.29404900816803,
            "rank_pca": 919,
            "adv": 1209479.67,
            "trades": 39.0,
            "volatility": 0.06569597710960219,
            "spread_pct": 0.004474636944229761,
            "spread_ticks": 1.4732142857142858,
            "amihud": 2.533556448448333e-09,
            "turnover_ratio": 0.0012167699466287668,
            "is_target": false
          },
          {
            "ticker": "887",
            "score_pca": 62.77712952158693,
            "rank_pca": 958,
            "adv": 1064700.0,
            "trades": 63.0,
            "volatility": 0.5027836982651241,
            "spread_pct": 0.018283881315156392,
            "spread_ticks": 1.1338028169014085,
            "amihud": 1.5148898523588337e-08,
            "turnover_ratio": 0.0011830682096201654,
            "is_target": false
          },
          {
            "ticker": "2420",
            "score_pca": 55.348113574484636,
            "rank_pca": 1149,
            "adv": 330000.0,
            "trades": 40.0,
            "volatility": 0.31475714480383743,
            "spread_pct": 0.02285305443909007,
            "spread_ticks": 10.055555555555555,
            "amihud": 2.3655225405123383e-08,
            "turnover_ratio": 0.0003858246461141753,
            "is_target": false
          },
          {
            "ticker": "2519",
            "score_pca": 23.453908984830804,
            "rank_pca": 1969,
            "adv": 25920.0,
            "trades": 5.0,
            "volatility": 0.9587866437304204,
            "spread_pct": 0.06602768903088396,
            "spread_ticks": 28.416666666666668,
            "amihud": 3.2898199810506255e-07,
            "turnover_ratio": 2.8484631686666093e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Diversified Retailers",
          "sector_count": 12,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6765907278531678,
              "median": 0.5026229041614776,
              "min": 0.0,
              "max": 28.006605574957277,
              "p5": 0.1599103149961085,
              "p95": 1.6866023855547383,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59007735.444801785,
              "median": 222580.0,
              "min": 0.0,
              "max": 11673799200.0,
              "p5": 0.0,
              "p95": 239961984.0,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04391901617583294,
              "median": 0.028232636928289128,
              "min": 0.0004584442003279162,
              "max": 0.5912209998910793,
              "p5": 0.0014121504324399992,
              "p95": 0.13940532486882165,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004224062730296432,
              "median": 0.0009200875717149073,
              "min": 0.0,
              "max": 0.2696492050568763,
              "p5": 0.0,
              "p95": 0.015764399573093096,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0595046488645971e-06,
              "median": 4.445297941649259e-08,
              "min": 0.0,
              "max": 0.0001747485275627021,
              "p5": 2.8137227212814984e-11,
              "p95": 4.352979149950278e-06,
              "count": 2563
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1055.5309218203033,
              "median": 21.0,
              "min": 0.0,
              "max": 65087.0,
              "p5": 0.0,
              "p95": 5850.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7181684896051094,
              "median": 0.5648113398926015,
              "min": 0.1454843084512843,
              "max": 2.17210208814035,
              "p5": 0.20323652782654691,
              "p95": 1.6536290996382164,
              "count": 12
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 7291744.573333334,
              "median": 7978.14,
              "min": 0.0,
              "max": 86915788.60000001,
              "p5": 0.0,
              "p95": 39259614.869999945,
              "count": 12
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06384053986170611,
              "median": 0.04990957312061656,
              "min": 0.0012551172755304813,
              "max": 0.15561959654178673,
              "p5": 0.013407442367897357,
              "p95": 0.1333582982125901,
              "count": 12
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0006745441307440869,
              "median": 7.778557781000218e-05,
              "min": 0.0,
              "max": 0.006306147828318751,
              "p5": 0.0,
              "p95": 0.0034291073087166658,
              "count": 12
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.555351535590933e-06,
              "median": 8.180175620950255e-07,
              "min": 1.7569993676281915e-10,
              "max": 1.0521885521885568e-05,
              "p5": 8.674923576126084e-09,
              "p95": 8.431393909990309e-06,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 373.75,
              "median": 5.0,
              "min": 0.0,
              "max": 4429.0,
              "p5": 0.0,
              "p95": 2001.849999999997,
              "count": 12
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 550798.99,
              "median": 494706.125,
              "min": 25920.0,
              "max": 1209479.67,
              "p5": 62096.0,
              "p95": 1158806.7854999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 89.125,
              "median": 51.5,
              "min": 5.0,
              "max": 359.0,
              "p5": 7.800000000000001,
              "p95": 272.1999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5141513508746806,
              "median": 0.4018306389613756,
              "min": 0.06569597710960219,
              "max": 1.2170377214866743,
              "p5": 0.13037330540890352,
              "p95": 1.1266498442719852,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03076592426463469,
              "median": 0.02082159312018715,
              "min": 0.004474636944229761,
              "max": 0.076944837340877,
              "p5": 0.008299532317206664,
              "p95": 0.07312383543237942,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.902152711584118,
              "median": 1.6340136054421768,
              "min": 1.0,
              "max": 28.416666666666668,
              "p5": 1.046830985915493,
              "p95": 21.99027777777777,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.614633197275561e-08,
              "median": 2.4403681438524192e-08,
              "min": 2.533556448448333e-09,
              "max": 3.2898199810506255e-07,
              "p5": 6.948926174747335e-09,
              "p95": 2.692577441659494e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0007672040368964575,
              "median": 0.0008500038557563432,
              "min": 2.8484631686666093e-05,
              "max": 0.0014855412645302785,
              "p5": 6.679257037395574e-05,
              "p95": 0.0013914713032647493,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.7857142857142863,
            "market": 0.05399728657881919,
            "sector": 0.02393328165299824,
            "peers": -0.026298313161848608,
            "vs_market": 0.7317169991354671,
            "vs_sector": 0.761781004061288,
            "vs_peers": 0.8120125988761349
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 44.729677168416956,
          "score_pca_percentile": 44.729677168416956,
          "rank_pca": 1422,
          "total": 2571,
          "adv_notional_sgd": 203820.0,
          "adv_volume_shares": 204000.0,
          "free_float_shares": 145094000.0,
          "turnover_ratio": 0.0014059850855307593,
          "votes": 25.0,
          "trades": 25.0,
          "spread_pct": 0.03992821893225662,
          "spread_ticks": 4.576923076923077,
          "amihud": 1.4060563217157057e-07,
          "volatility": 1.5016480582025282
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6059103200765169,
          "loadings": {
            "log_adv": 0.5056992051472851,
            "log_trades": 0.4610970958075381,
            "log_turnover": 0.45752130307646877,
            "neg_spread": 0.4631582097310855,
            "neg_amihud": 0.3024829103101352,
            "neg_vol": 0.1277521080510029
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
          "peer_median_adv": 475347.525,
          "peer_median_score_pca": 59.15985997666277,
          "peer_median_trades": 43.0,
          "peer_median_volatility": 0.5257633406998727,
          "peer_median_spread_pct": 0.019479057197719994,
          "peer_median_spread_ticks": 1.7134905708331214,
          "peer_median_amihud": 2.4620747475497097e-08,
          "peer_median_turnover_ratio": 0.0007815838801948848,
          "target_vs_peer": {
            "score_pca_delta": -14.43,
            "adv_delta_pct": -57.1,
            "trades_delta_pct": -41.86,
            "volatility_delta_pct": -185.61,
            "spread_pct_delta_pct": -104.98,
            "spread_ticks_delta_pct": 167.11,
            "amihud_delta_pct": -471.09,
            "turnover_ratio_delta_pct": 79.89
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1723",
            "score_pca": 44.729677168416956,
            "rank_pca": 1422,
            "adv": 203820.0,
            "trades": 25.0,
            "volatility": 1.5016480582025282,
            "spread_pct": 0.03992821893225662,
            "spread_ticks": 4.576923076923077,
            "amihud": 1.4060563217157057e-07,
            "turnover_ratio": 0.0014059850855307593,
            "is_target": true
          },
          {
            "ticker": "2136",
            "score_pca": 56.43718397510696,
            "rank_pca": 1121,
            "adv": 471900.0,
            "trades": 24.0,
            "volatility": 0.3158193695348647,
            "spread_pct": 0.019767186470459053,
            "spread_ticks": 1.3076923076923077,
            "amihud": 1.683534277178761e-08,
            "turnover_ratio": 0.0004957497651846412,
            "is_target": false
          },
          {
            "ticker": "1268",
            "score_pca": 65.65538700894594,
            "rank_pca": 884,
            "adv": 899358.25,
            "trades": 151.0,
            "volatility": 0.5937001116546112,
            "spread_pct": 0.018257538360993128,
            "spread_ticks": 2.595667870036101,
            "amihud": 2.5830021924522794e-08,
            "turnover_ratio": 0.0013744839373042847,
            "is_target": false
          },
          {
            "ticker": "1137",
            "score_pca": 61.88253597821859,
            "rank_pca": 981,
            "adv": 478795.05000000005,
            "trades": 48.0,
            "volatility": 0.3158671825028812,
            "spread_pct": 0.014907429670593901,
            "spread_ticks": 1.8638743455497382,
            "amihud": 2.34114730264714e-08,
            "turnover_ratio": 0.000950538641290353,
            "is_target": false
          },
          {
            "ticker": "493",
            "score_pca": 50.369506028782574,
            "rank_pca": 1277,
            "adv": 385620.0,
            "trades": 277.0,
            "volatility": 0.9083277139779744,
            "spread_pct": 0.07407407407407414,
            "spread_ticks": 1.0,
            "amihud": 3.073658095432964e-08,
            "turnover_ratio": 0.0006126291190994168,
            "is_target": false
          },
          {
            "ticker": "398",
            "score_pca": 66.04434072345391,
            "rank_pca": 874,
            "adv": 1223880.0,
            "trades": 38.0,
            "volatility": 0.07955110773309797,
            "spread_pct": 0.004638759183006208,
            "spread_ticks": 1.5631067961165048,
            "amihud": 2.6723369618799996e-09,
            "turnover_ratio": 0.0012243813716753414,
            "is_target": false
          },
          {
            "ticker": "887",
            "score_pca": 65.07195643718397,
            "rank_pca": 899,
            "adv": 1597200.0,
            "trades": 80.0,
            "volatility": 0.6399394127436918,
            "spread_pct": 0.01919092792498094,
            "spread_ticks": 1.2272727272727273,
            "amihud": 1.2027470743177432e-08,
            "turnover_ratio": 0.0017220992873760988,
            "is_target": false
          },
          {
            "ticker": "2420",
            "score_pca": 54.25904317386231,
            "rank_pca": 1177,
            "adv": 364100.0,
            "trades": 32.0,
            "volatility": 0.45782656974513414,
            "spread_pct": 0.025975934600900145,
            "spread_ticks": 10.112903225806452,
            "amihud": 3.9013732833957414e-08,
            "turnover_ratio": 0.0004183162256456037,
            "is_target": false
          },
          {
            "ticker": "2519",
            "score_pca": 31.03850641773629,
            "rank_pca": 1774,
            "adv": 66150.0,
            "trades": 6.0,
            "volatility": 0.6862725904717581,
            "spread_pct": 0.058317134129408484,
            "spread_ticks": 27.857142857142858,
            "amihud": 1.2344615241797717e-07,
            "turnover_ratio": 6.746360136315654e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Diversified Retailers",
          "sector_count": 12,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7148286914582817,
              "median": 0.5770274845083568,
              "min": 0.0,
              "max": 16.151536543674005,
              "p5": 0.21833075311833355,
              "p95": 1.6150731977291657,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 58843366.05154943,
              "median": 219145.125,
              "min": 0.0,
              "max": 12576080000.0,
              "p5": 0.0,
              "p95": 231594937.53000003,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0431485186857789,
              "median": 0.028615115771079076,
              "min": 0.0005715613899913342,
              "max": 0.586235634471959,
              "p5": 0.0014588781982334312,
              "p95": 0.13441364628991034,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038031252211868597,
              "median": 0.0008797395970792645,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.014509309515262244,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.120915108258492e-07,
              "median": 4.86139674810363e-08,
              "min": 0.0,
              "max": 6.966637265889136e-05,
              "p5": 4.683240293522914e-11,
              "p95": 3.6783420905338023e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1058.081096849475,
              "median": 20.0,
              "min": 0.0,
              "max": 68317.0,
              "p5": 0.0,
              "p95": 5797.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7595257982086713,
              "median": 0.5238802468268327,
              "min": 0.22050747499151563,
              "max": 1.8739009792353671,
              "p5": 0.27292901699035765,
              "p95": 1.6691618726673054,
              "count": 12
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 7499646.449999999,
              "median": 12650.0,
              "min": 0.0,
              "max": 89002094.39999999,
              "p5": 594.0,
              "p95": 40310487.47999993,
              "count": 12
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.059664481338003235,
              "median": 0.039833180328652726,
              "min": 0.001187686352211297,
              "max": 0.18021201413427573,
              "p5": 0.00931517571559324,
              "p95": 0.13406293155639265,
              "count": 12
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0007221427410965603,
              "median": 0.00011780614465659262,
              "min": 0.0,
              "max": 0.006096337225599761,
              "p5": 8.024782863966216e-06,
              "p95": 0.003516643548561807,
              "count": 12
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.8695730435247416e-06,
              "median": 3.8265950053762494e-07,
              "min": 2.0547006685765776e-10,
              "max": 9.300595238095234e-06,
              "p5": 9.351900054569133e-09,
              "p95": 7.272742001077877e-06,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 375.4166666666667,
              "median": 5.5,
              "min": 0.0,
              "max": 4417.0,
              "p5": 0.55,
              "p95": 2001.399999999997,
              "count": 12
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 685875.4125,
              "median": 475347.525,
              "min": 66150.0,
              "max": 1597200.0,
              "p5": 170432.5,
              "p95": 1466537.9999999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 82.0,
              "median": 43.0,
              "min": 6.0,
              "max": 277.0,
              "p5": 12.3,
              "p95": 232.89999999999992,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4996630072955017,
              "median": 0.5257633406998727,
              "min": 0.07955110773309797,
              "max": 0.9083277139779744,
              "p5": 0.16224499936371634,
              "p95": 0.8306084207507985,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.029391123051802,
              "median": 0.019479057197719994,
              "min": 0.004638759183006208,
              "max": 0.07407407407407414,
              "p5": 0.0082327938536619,
              "p95": 0.06855914509344115,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.9409575162020865,
              "median": 1.7134905708331214,
              "min": 1.0,
              "max": 27.857142857142858,
              "p5": 1.0795454545454546,
              "p95": 21.646658986175105,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.424663895426293e-08,
              "median": 2.4620747475497097e-08,
              "min": 2.6723369618799996e-09,
              "max": 1.2344615241797717e-07,
              "p5": 5.946633785334102e-09,
              "p95": 9.389480556357021e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.000858207743617362,
              "median": 0.0007815838801948848,
              "min": 6.746360136315654e-05,
              "max": 0.0017220992873760988,
              "p5": 0.00019026201986201306,
              "p95": 0.0016004339148509637,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.42276422764227606,
            "market": 0.06291748924226126,
            "sector": -0.08035351964528159,
            "peers": -0.023087024036762216,
            "vs_market": 0.3598467384000148,
            "vs_sector": 0.5031177472875576,
            "vs_peers": 0.4458512516790383
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 51.4196810579541,
          "score_pca_percentile": 51.4196810579541,
          "rank_pca": 1250,
          "total": 2571,
          "adv_notional_sgd": 313010.0,
          "adv_volume_shares": 259000.0,
          "free_float_shares": 145094000.0,
          "turnover_ratio": 0.0017850496919238562,
          "votes": 33.0,
          "trades": 33.0,
          "spread_pct": 0.03602496617208825,
          "spread_ticks": 4.5725524475524475,
          "amihud": 8.178844056706644e-08,
          "volatility": 1.235506714185951
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6314765432314754,
          "loadings": {
            "log_adv": 0.49539758964263403,
            "log_trades": 0.44875812169581863,
            "log_turnover": 0.44822096168770015,
            "neg_spread": 0.45942114842089377,
            "neg_amihud": 0.35498791464739143,
            "neg_vol": 0.12333342908549058
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
          "peer_median_adv": 492527.5,
          "peer_median_score_pca": 57.09840528977051,
          "peer_median_trades": 45.0,
          "peer_median_volatility": 0.6746939965707801,
          "peer_median_spread_pct": 0.018197699957303484,
          "peer_median_spread_ticks": 1.6737117513540802,
          "peer_median_amihud": 1.923798950693285e-08,
          "peer_median_turnover_ratio": 0.0008047236650128189,
          "target_vs_peer": {
            "score_pca_delta": -5.68,
            "adv_delta_pct": -36.4,
            "trades_delta_pct": -26.67,
            "volatility_delta_pct": -83.12,
            "spread_pct_delta_pct": -97.96,
            "spread_ticks_delta_pct": 173.2,
            "amihud_delta_pct": -325.14,
            "turnover_ratio_delta_pct": 121.82
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1723",
            "score_pca": 51.4196810579541,
            "rank_pca": 1250,
            "adv": 313010.0,
            "trades": 33.0,
            "volatility": 1.235506714185951,
            "spread_pct": 0.03602496617208825,
            "spread_ticks": 4.5725524475524475,
            "amihud": 8.178844056706644e-08,
            "turnover_ratio": 0.0017850496919238562,
            "is_target": true
          },
          {
            "ticker": "2136",
            "score_pca": 53.247763516141575,
            "rank_pca": 1203,
            "adv": 379765.0,
            "trades": 19.0,
            "volatility": 0.7692920212566036,
            "spread_pct": 0.017857896863835546,
            "spread_ticks": 1.2184977184977184,
            "amihud": 4.111779712608777e-09,
            "turnover_ratio": 0.0003991263605377724,
            "is_target": false
          },
          {
            "ticker": "1268",
            "score_pca": 67.52236483858421,
            "rank_pca": 836,
            "adv": 1319514.42,
            "trades": 189.0,
            "volatility": 0.5598896839766718,
            "spread_pct": 0.01389843768211662,
            "spread_ticks": 1.848513198985546,
            "amihud": 1.6229240316082113e-08,
            "turnover_ratio": 0.0017974435788308952,
            "is_target": false
          },
          {
            "ticker": "1137",
            "score_pca": 60.87125632049786,
            "rank_pca": 1007,
            "adv": 457744.99999999994,
            "trades": 40.5,
            "volatility": 0.29643152911945775,
            "spread_pct": 0.013648053171170847,
            "spread_ticks": 1.7836120401337792,
            "amihud": 2.2246738697783588e-08,
            "turnover_ratio": 0.0008518488370033764,
            "is_target": false
          },
          {
            "ticker": "493",
            "score_pca": 53.32555425904317,
            "rank_pca": 1201,
            "adv": 527310.0,
            "trades": 330.0,
            "volatility": 0.9738775736483907,
            "spread_pct": 0.06990460201012742,
            "spread_ticks": 1.0,
            "amihud": 3.4748711769893365e-08,
            "turnover_ratio": 0.0007575984930222614,
            "is_target": false
          },
          {
            "ticker": "398",
            "score_pca": 66.54998055231427,
            "rank_pca": 861,
            "adv": 1626776.92,
            "trades": 49.5,
            "volatility": 0.12901961010301374,
            "spread_pct": 0.00462137647653675,
            "spread_ticks": 1.5638114625743813,
            "amihud": 2.05035183044087e-09,
            "turnover_ratio": 0.0015970105549502566,
            "is_target": false
          },
          {
            "ticker": "887",
            "score_pca": 65.11085180863478,
            "rank_pca": 898,
            "adv": 1734475.0,
            "trades": 83.5,
            "volatility": 0.7434628974412213,
            "spread_pct": 0.018537503050771426,
            "spread_ticks": 1.2459939276376824,
            "amihud": 1.0989998468925768e-08,
            "turnover_ratio": 0.0021526241092201235,
            "is_target": false
          },
          {
            "ticker": "2420",
            "score_pca": 52.23648385842085,
            "rank_pca": 1229,
            "adv": 314760.0,
            "trades": 33.0,
            "volatility": 0.6398320009005513,
            "spread_pct": 0.029893322909884803,
            "spread_ticks": 10.432945246855951,
            "amihud": 4.696158542312372e-08,
            "turnover_ratio": 0.0004449844251850155,
            "is_target": false
          },
          {
            "ticker": "2519",
            "score_pca": 35.316997277324,
            "rank_pca": 1664,
            "adv": 109377.0,
            "trades": 9.5,
            "volatility": 0.7095559922410091,
            "spread_pct": 0.05228905429538258,
            "spread_ticks": 28.086956521739133,
            "amihud": 1.19558614433132e-07,
            "turnover_ratio": 0.00010569297546894523,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Diversified Retailers",
          "sector_count": 12,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7483395173581348,
              "median": 0.6010704658896161,
              "min": 0.0,
              "max": 33.691723975352446,
              "p5": 0.2240393935048951,
              "p95": 1.6180538366359474,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 55800514.346325465,
              "median": 216062.5,
              "min": 0.0,
              "max": 11740043474.75,
              "p5": 0.0,
              "p95": 220612537.45999998,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042140920312480366,
              "median": 0.027532649823324016,
              "min": 0.0005759578485903171,
              "max": 0.586235634471959,
              "p5": 0.001410484441170142,
              "p95": 0.13379366933689363,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003514195778375408,
              "median": 0.0008560319628529737,
              "min": 0.0,
              "max": 0.18138989186589122,
              "p5": 0.0,
              "p95": 0.01405517153536917,
              "count": 2555
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.197288464275746e-07,
              "median": 4.780297525718026e-08,
              "min": 0.0,
              "max": 1.9778481012658228e-05,
              "p5": 5.212610210840887e-11,
              "p95": 3.234072087966345e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1017.8096071567484,
              "median": 19.5,
              "min": 0.0,
              "max": 85041.0,
              "p5": 0.0,
              "p95": 5569.75,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.786688544356326,
              "median": 0.7126546536901915,
              "min": 0.19960869873886897,
              "max": 1.5394945545060463,
              "p5": 0.2839166569777476,
              "p95": 1.4940152143370167,
              "count": 12
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8624959.245833332,
              "median": 23998.5,
              "min": 0.0,
              "max": 102445049.94999999,
              "p5": 745.2500000000001,
              "p95": 46309143.227499925,
              "count": 12
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05249731134114861,
              "median": 0.04345387313945101,
              "min": 0.001104125722249826,
              "max": 0.12247415009725306,
              "p5": 0.00845187575391259,
              "p95": 0.10558732060542488,
              "count": 12
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0007837611068354767,
              "median": 0.00014520887625604995,
              "min": 0.0,
              "max": 0.006320912691478178,
              "p5": 1.1683366733466935e-05,
              "p95": 0.003826188041723298,
              "count": 12
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4978095068869371e-06,
              "median": 3.3090102757757493e-07,
              "min": 1.424688823841773e-10,
              "max": 6.646644094049406e-06,
              "p5": 2.3255898390077073e-09,
              "p95": 5.63629560295307e-06,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 384.625,
              "median": 5.5,
              "min": 0.0,
              "max": 4518.0,
              "p5": 0.8250000000000001,
              "p95": 2051.249999999997,
              "count": 12
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 808715.4175,
              "median": 492527.5,
              "min": 109377.0,
              "max": 1734475.0,
              "p5": 181261.05,
              "p95": 1696780.672,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 94.25,
              "median": 45.0,
              "min": 9.5,
              "max": 330.0,
              "p5": 12.825,
              "p95": 280.6499999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6026701635858649,
              "median": 0.6746939965707801,
              "min": 0.12901961010301374,
              "max": 0.9738775736483907,
              "p5": 0.18761378175876914,
              "p95": 0.902272630311265,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02758128080747825,
              "median": 0.018197699957303484,
              "min": 0.00462137647653675,
              "max": 0.06990460201012742,
              "p5": 0.007780713319658685,
              "p95": 0.06373916030996672,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.897541264553023,
              "median": 1.6737117513540802,
              "min": 1.0,
              "max": 28.086956521739133,
              "p5": 1.0764742014742015,
              "p95": 21.90805257553001,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.211212758149877e-08,
              "median": 1.923798950693285e-08,
              "min": 2.05035183044087e-09,
              "max": 1.19558614433132e-07,
              "p5": 2.7718515891996374e-09,
              "p95": 9.414965427962908e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0010132911667773308,
              "median": 0.0008047236650128189,
              "min": 0.00010569297546894523,
              "max": 0.0021526241092201235,
              "p5": 0.00020839466024303476,
              "p95": 0.0020283109235838936,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.42434210526315785,
            "market": 0.16364143082724758,
            "sector": -0.07148896577962016,
            "peers": -0.04698035783067389,
            "vs_market": -0.5879835360904054,
            "vs_sector": -0.3528531394835377,
            "vs_peers": -0.37736174743248396
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks firm on the day, with the 1D liquidity score at 77.7 compared with a peer median of 55.2, although the thin bid still points to uneven immediate depth.",
        "market_comparison": "The stock fell 3.8% on the day while peers were flat, which matters because weaker price action alongside thin buy-side depth can make exits feel less orderly."
      },
      "30d": {
        "liquidity": "Monthly tradability is weak relative to peers, with the 1M liquidity score at 40.5 compared with a peer median of 59.1, pointing to below-par access over the recent month.",
        "market_comparison": "Return 78.6% vs peers -2.6%."
      },
      "3m": {
        "liquidity": "Three-month tradability remains below peers, with the 3M liquidity score at 44.7 compared with a peer median of 59.2, suggesting access has been consistently thinner over the quarter.",
        "market_comparison": "The stock gained 42.3% over 3M while peers fell 2.3%, which matters because the return backdrop has been stronger than the liquidity profile alone would imply."
      },
      "6m": {
        "liquidity": "Six-month tradability is mixed for its size, with a liquidity score of 51.4 compared with a peer median of 57.1, leaving access slightly behind the peer group rather than clearly weak.",
        "market_comparison": "Return -42.4% vs peers -4.7%."
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
          "median": 0.192854817551866,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "19.3%",
          "display_range": null,
          "display_text": "19.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 19.3,
          "plain_english": "Market explains about 19.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.7842862114523831,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "78.4%",
          "display_range": null,
          "display_text": "78.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 78.4,
          "plain_english": "Sector explains about 78.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.022858970995750846,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.3%",
          "display_range": null,
          "display_text": "2.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 2.3,
          "plain_english": "Company-specific explains about 2.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 48.40615228364975,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "48.41",
          "display_range": null,
          "display_text": "48.41",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 48.41% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": 48.41
        },
        "beta_stock_lag": {
          "median": -0.399705270364605,
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
          "median": 151.56383029053703,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "151.56",
          "display_range": null,
          "display_text": "151.56",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 151.56% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": 151.56
        },
        "beta_market_lag": {
          "median": -36.130360808563246,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-36.13",
          "display_range": null,
          "display_text": "-36.13",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -36.13
        },
        "beta_sector_lag": {
          "median": 128.08538991941563,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "128.09",
          "display_range": null,
          "display_text": "128.09",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 128.09
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
          "period_label": "2025-04-28 to 2025-04-30",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47415011714812033,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.4%",
            "display_range": null,
            "display_text": "47.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
            "kind": "share_pct",
            "value_pct": 47.4,
            "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1618846027875128,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.2%",
              "display_range": null,
              "display_text": "16.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 16.2,
              "plain_english": "Market explains about 16.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.36396528006436674,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.4%",
              "display_range": null,
              "display_text": "36.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 36.4,
              "plain_english": "Sector explains about 36.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47415011714812033,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven, though based on only 3 trading days."
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
            "median": 0.7507195119990905,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "75.1%",
            "display_range": null,
            "display_text": "75.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 75.1,
            "plain_english": "Company-specific explains about 75.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.17745951959138495,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.7%",
              "display_range": null,
              "display_text": "17.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 17.7,
              "plain_english": "Market explains about 17.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.0718209684095246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.2%",
              "display_range": null,
              "display_text": "7.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 7.2,
              "plain_english": "Sector explains about 7.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7507195119990905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "75.1%",
              "display_range": null,
              "display_text": "75.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 75.1,
              "plain_english": "Company-specific explains about 75.1% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
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
            "median": 0.49987295296337164,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.0%",
            "display_range": null,
            "display_text": "50.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 50.0,
            "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.04908479818224867,
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
              "plain_english": "Market explains about 4.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4510422488543797,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.1%",
              "display_range": null,
              "display_text": "45.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.1,
              "plain_english": "Sector explains about 45.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.49987295296337164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.0%",
              "display_range": null,
              "display_text": "50.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.0,
              "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
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
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
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
            "median": 0.3572231178717511,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "35.7%",
            "display_range": null,
            "display_text": "35.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 35.7,
            "plain_english": "Company-specific explains about 35.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.33027319843893216,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.0%",
              "display_range": null,
              "display_text": "33.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 33.0,
              "plain_english": "Market explains about 33.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.31250368368931686,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.3%",
              "display_range": null,
              "display_text": "31.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.3,
              "plain_english": "Sector explains about 31.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3572231178717511,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.7%",
              "display_range": null,
              "display_text": "35.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.7,
              "plain_english": "Company-specific explains about 35.7% of price moves in the current state."
            }
          },
          "summary": "Sep: Much more balanced across company, sector, and market factors."
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
            "median": 0.480433174451072,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.0%",
            "display_range": null,
            "display_text": "48.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 48.0,
            "plain_english": "Company-specific explains about 48.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2905073722011332,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.1%",
              "display_range": null,
              "display_text": "29.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.1,
              "plain_english": "Market explains about 29.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2290594533477949,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.9%",
              "display_range": null,
              "display_text": "22.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.9,
              "plain_english": "Sector explains about 22.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.480433174451072,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.0%",
              "display_range": null,
              "display_text": "48.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 48.0,
              "plain_english": "Company-specific explains about 48.0% of price moves in the current state."
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
            "median": 0.6245288744850199,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.5%",
            "display_range": null,
            "display_text": "62.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 62.5,
            "plain_english": "Company-specific explains about 62.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.07990388444158093,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.0%",
              "display_range": null,
              "display_text": "8.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 8.0,
              "plain_english": "Market explains about 8.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.29556724107339916,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.6%",
              "display_range": null,
              "display_text": "29.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.6,
              "plain_english": "Sector explains about 29.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6245288744850199,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.5%",
              "display_range": null,
              "display_text": "62.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 62.5,
              "plain_english": "Company-specific explains about 62.5% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4380522507954391,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.8%",
            "display_range": null,
            "display_text": "43.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 43.8,
            "plain_english": "Company-specific explains about 43.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.36439233164873275,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.4%",
              "display_range": null,
              "display_text": "36.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 36.4,
              "plain_english": "Market explains about 36.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1975554175558281,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.8%",
              "display_range": null,
              "display_text": "19.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 19.8,
              "plain_english": "Sector explains about 19.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4380522507954391,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.8%",
              "display_range": null,
              "display_text": "43.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 43.8,
              "plain_english": "Company-specific explains about 43.8% of price moves in the current state."
            }
          },
          "summary": "Dec: More mixed, though company-driven still has the largest share."
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
            "median": 0.5035233823297013,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.4%",
            "display_range": null,
            "display_text": "50.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 50.4,
            "plain_english": "Company-specific explains about 50.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3784161074776748,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.8%",
              "display_range": null,
              "display_text": "37.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 37.8,
              "plain_english": "Market explains about 37.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11806051019262397,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.8%",
              "display_range": null,
              "display_text": "11.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 11.8,
              "plain_english": "Sector explains about 11.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5035233823297013,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.4%",
              "display_range": null,
              "display_text": "50.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.4,
              "plain_english": "Company-specific explains about 50.4% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.7083663221043859,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "70.8%",
            "display_range": null,
            "display_text": "70.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 70.8,
            "plain_english": "Company-specific explains about 70.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.239913844232869,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.0%",
              "display_range": null,
              "display_text": "24.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 24.0,
              "plain_english": "Market explains about 24.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.05171983366274511,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.2%",
              "display_range": null,
              "display_text": "5.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 5.2,
              "plain_english": "Sector explains about 5.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7083663221043859,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "70.8%",
              "display_range": null,
              "display_text": "70.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 70.8,
              "plain_english": "Company-specific explains about 70.8% of price moves in the current state."
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
            "median": 0.4625011786677131,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.3%",
            "display_range": null,
            "display_text": "46.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 46.3,
            "plain_english": "Market explains about 46.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4625011786677131,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Market explains about 46.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10630490324607876,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.6%",
              "display_range": null,
              "display_text": "10.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.6,
              "plain_english": "Sector explains about 10.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4311939180862082,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.1%",
              "display_range": null,
              "display_text": "43.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 43.1,
              "plain_english": "Company-specific explains about 43.1% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.7118260237113185,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "71.2%",
            "display_range": null,
            "display_text": "71.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 71.2,
            "plain_english": "Company-specific explains about 71.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.16880785422480504,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.9%",
              "display_range": null,
              "display_text": "16.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 16.9,
              "plain_english": "Market explains about 16.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11936612206387642,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.9%",
              "display_range": null,
              "display_text": "11.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 11.9,
              "plain_english": "Sector explains about 11.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7118260237113185,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "71.2%",
              "display_range": null,
              "display_text": "71.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 71.2,
              "plain_english": "Company-specific explains about 71.2% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly company-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-13",
          "n_obs": 8,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.43375409886793154,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.4%",
            "display_range": null,
            "display_text": "43.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
            "kind": "share_pct",
            "value_pct": 43.4,
            "plain_english": "Market explains about 43.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.43375409886793154,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.4%",
              "display_range": null,
              "display_text": "43.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 43.4,
              "plain_english": "Market explains about 43.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2709538360715201,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.1%",
              "display_range": null,
              "display_text": "27.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 27.1,
              "plain_english": "Sector explains about 27.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2952920650605483,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.5%",
              "display_range": null,
              "display_text": "29.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 29.5,
              "plain_english": "Company-specific explains about 29.5% of price moves in the current state."
            }
          },
          "summary": "May: More mixed, though market-driven still has the largest share."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 11.363636363636363,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.016124829645200622,
            "low": 0.016124829645200622,
            "high": 0.016124829645200622
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
            "median": 0.07935765331079116,
            "low": 0.07935765331079116,
            "high": 0.07935765331079116
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.912,
            0.088
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
            114.0,
            11.0
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
        "market_link_display": "48.41",
        "sector_link_display": "151.56",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 48.41% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 151.56% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.40",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 78.4,
        "driver_share_display": "78.4%",
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
          "expected_duration_days": 11.363636363636363,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.016124829645200622,
            "low": 0.016124829645200622,
            "high": 0.016124829645200622
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
            "median": 0.07935765331079116,
            "low": 0.07935765331079116,
            "high": 0.07935765331079116
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.912,
          0.088
        ],
        [
          0.08130081300813008,
          0.9186991869918699
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.912,
            0.088
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
            114.0,
            11.0
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
        "text": "Liquidity score: 51.4 — Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Monthly liquidity looks mixed for the stock's size, so peer-relative access is not clearly strong or weak. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is very strong, with the stock up 78.6% over one month compared with peers down 2.6% and ahead of the market by 5.4%.",
    "perf_insight": "That return backdrop is stronger than peers, but it sits alongside a six-month liquidity score of 51.4 against a peer median of 57.1. This matters because price strength has outpaced the stock’s underlying peer-relative trading depth.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are setting the tape, with 78.4% of current trading explained by the sector rather than company-specific factors.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 78.4% of price changes. Other influences are market 19.3%, and company-specific 2.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 19.3%, sector 78.4%, and company-specific 2.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been mostly market-driven across Mar to May, with some variation in the middle months."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 19.3%, sector 78.4%, and company-specific 2.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because a sector-led tape is meeting a thin bid book, with displayed bid depth at 0.22x of ask depth and a 2-tick spread. In that setup, downside trading can feel less supported than the monthly liquidity score implies.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Sector is the main driver now, accounting for 78.4% of recent price moves.",
      "Liquidity looks mixed for the stock’s size, with a 6M score of 51.4 versus a peer median of 57.1, and recent trend context versus the 1M baseline is limited. The displayed book shows thin buy-side support, with bid depth at 0.22x ask depth and a 2-tick spread. Sector moves still explain 78.4% of trading, while 1M return is +78.6% versus peers at -2.6% and the market at +5.4%."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market state is being shaped more by sector direction than by stock-specific trading, which keeps the tape tied to the broader group.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 13, 2025 to May 13, 2026 (170 trading days • 20,462 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The clearest execution watchpoint is the thin buy side, with displayed bid depth at 0.22x of ask depth despite a 2-tick",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 49.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The live trading picture is defined more by book imbalance than by broad depth, with buy-side support notably thinner than sell-side depth.",
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
    "intraday_insight": "Session split is open 0.2%, continuous 98.9%, and close 0.9%. Current trading concentration score is 0.320.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by sector leadership and book imbalance than by short activity.",
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
    "exec_subtitle": "Liquidity is mixed for its size, but the displayed book shows thin buy-side support.",
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
        "value": "51.4/100",
        "sub": "Peer median 57.1 (-5.7 pts)",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$313.0K",
        "sub": "Peer median HK$492.5K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "3.60%",
        "sub": "4.57 ticks; peers 1.82%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is mixed: score 51.4 vs peer median 57.1 (-5.7 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "1.760",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.14%",
        "note": "2.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.22x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.57% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-4.50% with 32.3% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-4.50% with 12.9% fill.",
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
        "value": "51",
        "suffix": "/100",
        "bar_pct": 51,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 1250/2571",
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
        "value": "3.60",
        "suffix": "%",
        "bar_pct": 36,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "3.60% • 4.57 ticks vs peers 1.82%",
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
        "value": "313.0K",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$492.5K",
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
        "value": "78.4",
        "suffix": "sector",
        "bar_pct": 78,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 19.3% • Company 2.3%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the stock’s size, with a six-month liquidity score of 51.4 compared with a peer median of 57.1. That leaves peer-relative access serviceable, but not especially strong.",
      "Recent price performance is exceptionally strong, with the stock up 78.6% over one month compared with peers down 2.6% and ahead of the market by 5.4%. That gives the tape a firmer return backdrop than the main comparison groups.",
      "displayed bid depth is 0.22x ask depth; spread is 2 ticks. Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score suggests. Current driver: Sector at 78.4%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone."
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
      "overall": "6M liquidity is mixed: score 51.4 vs peer median 57.1 (-5.7 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 51.4 vs peer median 57.1 (-5.7 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -5.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -42.4%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -42.4% vs market 16.4%.",
        "vs_sector": "Worse than sector: -42.4% vs sector -7.1%.",
        "vs_peers": "Worse than peers: -42.4% vs peers -4.7%."
      },
      "adv": {
        "insight": "ADV is HK$313.0K, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$313.0K vs market HK$216.1K.",
        "vs_sector": "Better than sector: HK$313.0K vs sector HK$24.0K.",
        "vs_peers": "Worse than peers: HK$313.0K vs peers HK$492.5K."
      },
      "spread": {
        "insight": "Spread is 3.60%, better than sector, but worse than market and peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Worse than market: 3.60% vs market 2.75%.",
        "vs_sector": "Better than sector: 3.60% vs sector 4.35%.",
        "vs_peers": "Worse than peers: 3.60% vs peers 1.82%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.18%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.18% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.18% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.18% vs peers 0.08%."
      },
      "volatility": {
        "insight": "Volatility is 123.55%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 123.55% vs market 60.11%.",
        "vs_sector": "Worse than sector: 123.55% vs sector 71.27%.",
        "vs_peers": "Worse than peers: 123.55% vs peers 67.47%."
      },
      "trades": {
        "insight": "Trades is 33, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 33 vs market 20.",
        "vs_sector": "Better than sector: 33 vs sector 6.",
        "vs_peers": "Worse than peers: 33 vs peers 45."
      },
      "amihud": {
        "insight": "Price impact is 8.18e-08, better than sector, but worse than market and peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Worse than market: 8.18e-08 vs market 4.78e-08.",
        "vs_sector": "Better than sector: 8.18e-08 vs sector 3.31e-07.",
        "vs_peers": "Worse than peers: 8.18e-08 vs peers 1.92e-08."
      }
    },
    "performance": {
      "overall": "Recent returns are very strong relative to peers and the market, with the stock up 78.6% over one month while peers fell 2.6% and the market rose",
      "conclusion": "Performance is weak relative to comparison groups."
    },
    "drivers": {
      "overall": "Sector factors are setting the tone now, with 78.4% of recent price moves tied to the sector. That matters because the stock has already risen 78.6% over 1 month while peers fell 2.6%, so trading is more exposed to how the group behaves from here.",
      "beta": "The current pattern looks real but not fully settled. Displayed bid depth is only 0.22x of ask depth with a 2-tick spread, which means price moves can feel less stable when sector pressure turns negative.",
      "rolling_change": "Mar: Mostly market-driven. | Apr: Still clearly company-driven. | May: More mixed, though market-driven still has the largest share."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, and that matters because liquidity can feel less reliable even when the broader liquidity score sits near the middle of peers.",
      "current": "Current market state is High Volatility. The market has been in this state about 49.8% of the time. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This looks more settled than short-lived, with a typical run length of about 11.3 days, although the overall picture is still mixed rather than fully stable.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 11.3 days."
    },
    "execution": {
      "overall": "The current book reads as thin buy-side because displayed bid depth is only 0.22x of ask depth while the spread is 2 ticks. That matters because immediate sell-side pressure would meet much less visible support than the headline liquidity picture implies.",
      "concern": "Trade-size percentiles use May 13, 2025 to May 13, 2026 history (170 trading days • 20,462 trades).",
      "peer_context": "This makes the broader liquidity picture look less comfortable than the 6M score alone, which is already 5.7 points below the peer median. In that context, the current book reinforces a mixed standing rather than offsetting it."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like.",
      "retail_heavy": "Retail-like trades account for 95.9% of trade count and 70.3% of trade value, compared with institution-like trades at 0.1% of count and 3.3% of value. That makes the tape look retail-led on both measures.",
      "institutional_gap": "Institution-like participation is minimal in both count and value, so the flow base does not appear to rely on large institutional activity.",
      "peer_comparison": "The mix stands out as retail-leaning relative to peers, which suggests this name is being driven more by broad individual participation than by institutional sponsorship."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that the tape is being driven by a retail-leaning flow mix alongside very strong recent returns. A 1M return of 78.6%, compared with peers at -2.6% and the market at 5.4%, shows the stock has attracted strong trading interest. With retail-like trades dominating both count and value, that signal looks active but less anchored by institutional participation.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not stand out as a separate driver of trading conditions. The clearer signals are the strong 1M share price gain of 78.6% and a tape still led mainly by sector moves at 78.4%, which leaves short flow as a secondary consideration.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is rising or falling enough to change the picture. What matters more near term is that the displayed bid is only 0.22x of ask depth, so trading pressure is more likely to show up through thinner buy-side support than through short covering or fresh short build.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Trading is concentrated in the continuous session, with 98.9% of activity during the day and only 0.2% at the open and 0.9% at the close. That points to liquidity being available through regular hours rather than only around auction periods.",
      "hhi_interpretation": "A concentration score of 0.320 suggests activity is reasonably spread through the session, which supports a steadier intraday market.",
      "best_times": "The continuous session is clearly the main window for liquidity, while the open and close contribute very little to total activity.",
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
        "1723",
        "2136",
        "1268",
        "1137",
        "493",
        "398",
        "887",
        "2420",
        "2519"
      ],
      "scores": [
        51.4196810579541,
        53.247763516141575,
        67.52236483858421,
        60.87125632049786,
        53.32555425904317,
        66.54998055231427,
        65.11085180863478,
        52.23648385842085,
        35.316997277324
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
        313010.0,
        379765.0,
        1319514.42,
        457744.99999999994,
        527310.0,
        1626776.92,
        1734475.0,
        314760.0,
        109377.0
      ],
      "total": 2571
    },
    "market_comparison": {
      "sector_name": "Diversified Retailers",
      "sector_count": 12,
      "market_count": 2571,
      "company": {
        "volatility": 1.235506714185951,
        "adv": 313010.0,
        "spread_pct": 0.03602496617208825,
        "turnover_ratio": 0.0017850496919238562,
        "amihud": 8.178844056706644e-08,
        "trades": 33.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7483395173581348,
          "median": 0.6010704658896161,
          "min": 0.0,
          "max": 33.691723975352446,
          "p5": 0.2240393935048951,
          "p95": 1.6180538366359474,
          "count": 2570
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 55800514.346325465,
          "median": 216062.5,
          "min": 0.0,
          "max": 11740043474.75,
          "p5": 0.0,
          "p95": 220612537.45999998,
          "count": 2571
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042140920312480366,
          "median": 0.027532649823324016,
          "min": 0.0005759578485903171,
          "max": 0.586235634471959,
          "p5": 0.001410484441170142,
          "p95": 0.13379366933689363,
          "count": 2571
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003514195778375408,
          "median": 0.0008560319628529737,
          "min": 0.0,
          "max": 0.18138989186589122,
          "p5": 0.0,
          "p95": 0.01405517153536917,
          "count": 2555
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.197288464275746e-07,
          "median": 4.780297525718026e-08,
          "min": 0.0,
          "max": 1.9778481012658228e-05,
          "p5": 5.212610210840887e-11,
          "p95": 3.234072087966345e-06,
          "count": 2571
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1017.8096071567484,
          "median": 19.5,
          "min": 0.0,
          "max": 85041.0,
          "p5": 0.0,
          "p95": 5569.75,
          "count": 2571
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.786688544356326,
          "median": 0.7126546536901915,
          "min": 0.19960869873886897,
          "max": 1.5394945545060463,
          "p5": 0.2839166569777476,
          "p95": 1.4940152143370167,
          "count": 12
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8624959.245833332,
          "median": 23998.5,
          "min": 0.0,
          "max": 102445049.94999999,
          "p5": 745.2500000000001,
          "p95": 46309143.227499925,
          "count": 12
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.05249731134114861,
          "median": 0.04345387313945101,
          "min": 0.001104125722249826,
          "max": 0.12247415009725306,
          "p5": 0.00845187575391259,
          "p95": 0.10558732060542488,
          "count": 12
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0007837611068354767,
          "median": 0.00014520887625604995,
          "min": 0.0,
          "max": 0.006320912691478178,
          "p5": 1.1683366733466935e-05,
          "p95": 0.003826188041723298,
          "count": 12
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.4978095068869371e-06,
          "median": 3.3090102757757493e-07,
          "min": 1.424688823841773e-10,
          "max": 6.646644094049406e-06,
          "p5": 2.3255898390077073e-09,
          "p95": 5.63629560295307e-06,
          "count": 12
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 384.625,
          "median": 5.5,
          "min": 0.0,
          "max": 4518.0,
          "p5": 0.8250000000000001,
          "p95": 2051.249999999997,
          "count": 12
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 808715.4175,
          "median": 492527.5,
          "min": 109377.0,
          "max": 1734475.0,
          "p5": 181261.05,
          "p95": 1696780.672,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 94.25,
          "median": 45.0,
          "min": 9.5,
          "max": 330.0,
          "p5": 12.825,
          "p95": 280.6499999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6026701635858649,
          "median": 0.6746939965707801,
          "min": 0.12901961010301374,
          "max": 0.9738775736483907,
          "p5": 0.18761378175876914,
          "p95": 0.902272630311265,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.02758128080747825,
          "median": 0.018197699957303484,
          "min": 0.00462137647653675,
          "max": 0.06990460201012742,
          "p5": 0.007780713319658685,
          "p95": 0.06373916030996672,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 5.897541264553023,
          "median": 1.6737117513540802,
          "min": 1.0,
          "max": 28.086956521739133,
          "p5": 1.0764742014742015,
          "p95": 21.90805257553001,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.211212758149877e-08,
          "median": 1.923798950693285e-08,
          "min": 2.05035183044087e-09,
          "max": 1.19558614433132e-07,
          "p5": 2.7718515891996374e-09,
          "p95": 9.414965427962908e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0010132911667773308,
          "median": 0.0008047236650128189,
          "min": 0.00010569297546894523,
          "max": 0.0021526241092201235,
          "p5": 0.00020839466024303476,
          "p95": 0.0020283109235838936,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.7857142857142863,
        "market": 0.05399728657881919,
        "sector": 0.02393328165299824,
        "peers": -0.026298313161848608
      },
      {
        "horizon": "3M",
        "stock": 0.42276422764227606,
        "market": 0.06291748924226126,
        "sector": -0.08035351964528159,
        "peers": -0.023087024036762216
      },
      {
        "horizon": "6M",
        "stock": -0.42434210526315785,
        "market": 0.16364143082724758,
        "sector": -0.07148896577962016,
        "peers": -0.04698035783067389
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
      "share_market": 0.192854817551866,
      "share_sector": 0.7842862114523831,
      "share_idio": 0.022858970995750846,
      "beta_market": 48.40615228364975,
      "beta_sector": 151.56383029053703,
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
            "median": 0.192854817551866,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "19.3%",
            "display_range": null,
            "display_text": "19.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 19.3,
            "plain_english": "Market explains about 19.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.7842862114523831,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "78.4%",
            "display_range": null,
            "display_text": "78.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 78.4,
            "plain_english": "Sector explains about 78.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.022858970995750846,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.3%",
            "display_range": null,
            "display_text": "2.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 2.3,
            "plain_english": "Company-specific explains about 2.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 48.40615228364975,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.41",
            "display_range": null,
            "display_text": "48.41",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 48.41% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": 48.41
          },
          "beta_stock_lag": {
            "median": -0.399705270364605,
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
            "median": 151.56383029053703,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "151.56",
            "display_range": null,
            "display_text": "151.56",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 151.56% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": 151.56
          },
          "beta_market_lag": {
            "median": -36.130360808563246,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-36.13",
            "display_range": null,
            "display_text": "-36.13",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -36.13
          },
          "beta_sector_lag": {
            "median": 128.08538991941563,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "128.09",
            "display_range": null,
            "display_text": "128.09",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 128.09
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
            "period_label": "2025-04-28 to 2025-04-30",
            "n_obs": 3,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47415011714812033,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1618846027875128,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.2%",
                "display_range": null,
                "display_text": "16.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 16.2,
                "plain_english": "Market explains about 16.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.36396528006436674,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.4%",
                "display_range": null,
                "display_text": "36.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 36.4,
                "plain_english": "Sector explains about 36.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47415011714812033,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.4%",
                "display_range": null,
                "display_text": "47.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 47.4,
                "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven, though based on only 3 trading days."
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
              "median": 0.7507195119990905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "75.1%",
              "display_range": null,
              "display_text": "75.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 75.1,
              "plain_english": "Company-specific explains about 75.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.17745951959138495,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.7%",
                "display_range": null,
                "display_text": "17.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 17.7,
                "plain_english": "Market explains about 17.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.0718209684095246,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.2%",
                "display_range": null,
                "display_text": "7.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 7.2,
                "plain_english": "Sector explains about 7.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7507195119990905,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "75.1%",
                "display_range": null,
                "display_text": "75.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 75.1,
                "plain_english": "Company-specific explains about 75.1% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
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
              "median": 0.49987295296337164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.0%",
              "display_range": null,
              "display_text": "50.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.0,
              "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.04908479818224867,
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
                "plain_english": "Market explains about 4.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4510422488543797,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.1%",
                "display_range": null,
                "display_text": "45.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.1,
                "plain_english": "Sector explains about 45.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.49987295296337164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.0%",
                "display_range": null,
                "display_text": "50.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 50.0,
                "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
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
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
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
              "median": 0.3572231178717511,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.7%",
              "display_range": null,
              "display_text": "35.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.7,
              "plain_english": "Company-specific explains about 35.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.33027319843893216,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.0%",
                "display_range": null,
                "display_text": "33.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 33.0,
                "plain_english": "Market explains about 33.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.31250368368931686,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.3%",
                "display_range": null,
                "display_text": "31.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.3,
                "plain_english": "Sector explains about 31.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3572231178717511,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.7%",
                "display_range": null,
                "display_text": "35.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.7,
                "plain_english": "Company-specific explains about 35.7% of price moves in the current state."
              }
            },
            "summary": "Sep: Much more balanced across company, sector, and market factors."
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
              "median": 0.480433174451072,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.0%",
              "display_range": null,
              "display_text": "48.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 48.0,
              "plain_english": "Company-specific explains about 48.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2905073722011332,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.1%",
                "display_range": null,
                "display_text": "29.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.1,
                "plain_english": "Market explains about 29.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2290594533477949,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.9%",
                "display_range": null,
                "display_text": "22.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.9,
                "plain_english": "Sector explains about 22.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.480433174451072,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.0%",
                "display_range": null,
                "display_text": "48.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 48.0,
                "plain_english": "Company-specific explains about 48.0% of price moves in the current state."
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
              "median": 0.6245288744850199,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.5%",
              "display_range": null,
              "display_text": "62.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 62.5,
              "plain_english": "Company-specific explains about 62.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.07990388444158093,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.0%",
                "display_range": null,
                "display_text": "8.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 8.0,
                "plain_english": "Market explains about 8.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.29556724107339916,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.6%",
                "display_range": null,
                "display_text": "29.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.6,
                "plain_english": "Sector explains about 29.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6245288744850199,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.5%",
                "display_range": null,
                "display_text": "62.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 62.5,
                "plain_english": "Company-specific explains about 62.5% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4380522507954391,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.8%",
              "display_range": null,
              "display_text": "43.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 43.8,
              "plain_english": "Company-specific explains about 43.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.36439233164873275,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.4%",
                "display_range": null,
                "display_text": "36.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 36.4,
                "plain_english": "Market explains about 36.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1975554175558281,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.8%",
                "display_range": null,
                "display_text": "19.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 19.8,
                "plain_english": "Sector explains about 19.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4380522507954391,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.8%",
                "display_range": null,
                "display_text": "43.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 43.8,
                "plain_english": "Company-specific explains about 43.8% of price moves in the current state."
              }
            },
            "summary": "Dec: More mixed, though company-driven still has the largest share."
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
              "median": 0.5035233823297013,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.4%",
              "display_range": null,
              "display_text": "50.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 50.4,
              "plain_english": "Company-specific explains about 50.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3784161074776748,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.8%",
                "display_range": null,
                "display_text": "37.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 37.8,
                "plain_english": "Market explains about 37.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11806051019262397,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.8%",
                "display_range": null,
                "display_text": "11.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 11.8,
                "plain_english": "Sector explains about 11.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5035233823297013,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.4%",
                "display_range": null,
                "display_text": "50.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 50.4,
                "plain_english": "Company-specific explains about 50.4% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.7083663221043859,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "70.8%",
              "display_range": null,
              "display_text": "70.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 70.8,
              "plain_english": "Company-specific explains about 70.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.239913844232869,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.0%",
                "display_range": null,
                "display_text": "24.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 24.0,
                "plain_english": "Market explains about 24.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.05171983366274511,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.2%",
                "display_range": null,
                "display_text": "5.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 5.2,
                "plain_english": "Sector explains about 5.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7083663221043859,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "70.8%",
                "display_range": null,
                "display_text": "70.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 70.8,
                "plain_english": "Company-specific explains about 70.8% of price moves in the current state."
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
              "median": 0.4625011786677131,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Market explains about 46.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4625011786677131,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.3%",
                "display_range": null,
                "display_text": "46.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 46.3,
                "plain_english": "Market explains about 46.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10630490324607876,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.6%",
                "display_range": null,
                "display_text": "10.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.6,
                "plain_english": "Sector explains about 10.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4311939180862082,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.1%",
                "display_range": null,
                "display_text": "43.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 43.1,
                "plain_english": "Company-specific explains about 43.1% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.7118260237113185,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "71.2%",
              "display_range": null,
              "display_text": "71.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 71.2,
              "plain_english": "Company-specific explains about 71.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.16880785422480504,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.9%",
                "display_range": null,
                "display_text": "16.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 16.9,
                "plain_english": "Market explains about 16.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11936612206387642,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.9%",
                "display_range": null,
                "display_text": "11.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 11.9,
                "plain_english": "Sector explains about 11.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7118260237113185,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "71.2%",
                "display_range": null,
                "display_text": "71.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 71.2,
                "plain_english": "Company-specific explains about 71.2% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly company-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-13",
            "n_obs": 8,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.43375409886793154,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.4%",
              "display_range": null,
              "display_text": "43.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 43.4,
              "plain_english": "Market explains about 43.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.43375409886793154,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.4%",
                "display_range": null,
                "display_text": "43.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 43.4,
                "plain_english": "Market explains about 43.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2709538360715201,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.1%",
                "display_range": null,
                "display_text": "27.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 27.1,
                "plain_english": "Sector explains about 27.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2952920650605483,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.5%",
                "display_range": null,
                "display_text": "29.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 29.5,
                "plain_english": "Company-specific explains about 29.5% of price moves in the current state."
              }
            },
            "summary": "May: More mixed, though market-driven still has the largest share."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 11.363636363636363,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.016124829645200622,
              "low": 0.016124829645200622,
              "high": 0.016124829645200622
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
              "median": 0.07935765331079116,
              "low": 0.07935765331079116,
              "high": 0.07935765331079116
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.912,
              0.088
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
              114.0,
              11.0
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
          "market_link_display": "48.41",
          "sector_link_display": "151.56",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 48.41% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 151.56% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.40",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 78.4,
          "driver_share_display": "78.4%",
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
          "period_label": "2025-04-28 to 2025-04-30",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven, though based on only 3 trading days.",
          "share_market": 0.1618846027875128,
          "share_sector": 0.36396528006436674,
          "share_company": 0.47415011714812033,
          "share_market_display": "16.2%",
          "share_sector_display": "36.4%",
          "share_company_display": "47.4%",
          "dominant_share_display": "47.4%"
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
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.17745951959138495,
          "share_sector": 0.0718209684095246,
          "share_company": 0.7507195119990905,
          "share_market_display": "17.7%",
          "share_sector_display": "7.2%",
          "share_company_display": "75.1%",
          "dominant_share_display": "75.1%"
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
          "share_market": 0.04908479818224867,
          "share_sector": 0.4510422488543797,
          "share_company": 0.49987295296337164,
          "share_market_display": "4.9%",
          "share_sector_display": "45.1%",
          "share_company_display": "50.0%",
          "dominant_share_display": "50.0%"
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
          "summary": "Jul: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3333333333333333,
          "share_sector": 0.3333333333333333,
          "share_company": 0.3333333333333333,
          "share_market_display": "33.3%",
          "share_sector_display": "33.3%",
          "share_company_display": "33.3%",
          "dominant_share_display": "33.3%"
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
          "summary": "Sep: Much more balanced across company, sector, and market factors.",
          "share_market": 0.33027319843893216,
          "share_sector": 0.31250368368931686,
          "share_company": 0.3572231178717511,
          "share_market_display": "33.0%",
          "share_sector_display": "31.3%",
          "share_company_display": "35.7%",
          "dominant_share_display": "35.7%"
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
          "share_market": 0.2905073722011332,
          "share_sector": 0.2290594533477949,
          "share_company": 0.480433174451072,
          "share_market_display": "29.1%",
          "share_sector_display": "22.9%",
          "share_company_display": "48.0%",
          "dominant_share_display": "48.0%"
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
          "share_market": 0.07990388444158093,
          "share_sector": 0.29556724107339916,
          "share_company": 0.6245288744850199,
          "share_market_display": "8.0%",
          "share_sector_display": "29.6%",
          "share_company_display": "62.5%",
          "dominant_share_display": "62.5%"
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
          "summary": "Dec: More mixed, though company-driven still has the largest share.",
          "share_market": 0.36439233164873275,
          "share_sector": 0.1975554175558281,
          "share_company": 0.4380522507954391,
          "share_market_display": "36.4%",
          "share_sector_display": "19.8%",
          "share_company_display": "43.8%",
          "dominant_share_display": "43.8%"
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
          "share_market": 0.3784161074776748,
          "share_sector": 0.11806051019262397,
          "share_company": 0.5035233823297013,
          "share_market_display": "37.8%",
          "share_sector_display": "11.8%",
          "share_company_display": "50.4%",
          "dominant_share_display": "50.4%"
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
          "share_market": 0.239913844232869,
          "share_sector": 0.05171983366274511,
          "share_company": 0.7083663221043859,
          "share_market_display": "24.0%",
          "share_sector_display": "5.2%",
          "share_company_display": "70.8%",
          "dominant_share_display": "70.8%"
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
          "share_market": 0.4625011786677131,
          "share_sector": 0.10630490324607876,
          "share_company": 0.4311939180862082,
          "share_market_display": "46.3%",
          "share_sector_display": "10.6%",
          "share_company_display": "43.1%",
          "dominant_share_display": "46.3%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Still clearly company-driven.",
          "share_market": 0.16880785422480504,
          "share_sector": 0.11936612206387642,
          "share_company": 0.7118260237113185,
          "share_market_display": "16.9%",
          "share_sector_display": "11.9%",
          "share_company_display": "71.2%",
          "dominant_share_display": "71.2%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-13",
          "n_obs": 8,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "May: More mixed, though market-driven still has the largest share.",
          "share_market": 0.43375409886793154,
          "share_sector": 0.2709538360715201,
          "share_company": 0.2952920650605483,
          "share_market_display": "43.4%",
          "share_sector_display": "27.1%",
          "share_company_display": "29.5%",
          "dominant_share_display": "43.4%"
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
            "expected_duration_days": 11.363636363636363,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.016124829645200622,
              "low": 0.016124829645200622,
              "high": 0.016124829645200622
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
              "median": 0.07935765331079116,
              "low": 0.07935765331079116,
              "high": 0.07935765331079116
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.912,
            0.088
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
          "price": 1.75,
          "quantity": 64000.0,
          "value": 112000.0
        },
        {
          "level": 2,
          "price": 1.72,
          "quantity": 2000.0,
          "value": 3440.0
        },
        {
          "level": 3,
          "price": 1.7,
          "quantity": 10000.0,
          "value": 17000.0
        },
        {
          "level": 4,
          "price": 1.69,
          "quantity": 10000.0,
          "value": 16900.0
        },
        {
          "level": 5,
          "price": 1.68,
          "quantity": 50000.0,
          "value": 84000.0
        },
        {
          "level": 6,
          "price": 1.67,
          "quantity": 2000.0,
          "value": 3340.0
        },
        {
          "level": 7,
          "price": 1.65,
          "quantity": 22000.0,
          "value": 36300.0
        },
        {
          "level": 8,
          "price": 1.63,
          "quantity": 2000.0,
          "value": 3260.0
        },
        {
          "level": 9,
          "price": 1.62,
          "quantity": 2000.0,
          "value": 3240.0
        },
        {
          "level": 10,
          "price": 1.61,
          "quantity": 2000.0,
          "value": 3220.0
        },
        {
          "level": 11,
          "price": 1.55,
          "quantity": 20000.0,
          "value": 31000.0
        },
        {
          "level": 12,
          "price": 1.5,
          "quantity": 6000.0,
          "value": 9000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 1.77,
          "quantity": 48000.0,
          "value": 84960.0
        },
        {
          "level": 2,
          "price": 1.79,
          "quantity": 6000.0,
          "value": 10740.0
        },
        {
          "level": 3,
          "price": 1.8,
          "quantity": 86000.0,
          "value": 154800.0
        },
        {
          "level": 4,
          "price": 1.82,
          "quantity": 6000.0,
          "value": 10920.0
        },
        {
          "level": 5,
          "price": 1.83,
          "quantity": 2000.0,
          "value": 3660.0
        },
        {
          "level": 6,
          "price": 1.84,
          "quantity": 68000.0,
          "value": 125120.0
        },
        {
          "level": 7,
          "price": 1.88,
          "quantity": 20000.0,
          "value": 37600.0
        },
        {
          "level": 8,
          "price": 1.89,
          "quantity": 54000.0,
          "value": 102060.0
        },
        {
          "level": 9,
          "price": 1.91,
          "quantity": 10000.0,
          "value": 19100.0
        },
        {
          "level": 10,
          "price": 1.92,
          "quantity": 2000.0,
          "value": 3840.0
        },
        {
          "level": 11,
          "price": 1.93,
          "quantity": 40000.0,
          "value": 77200.0
        },
        {
          "level": 12,
          "price": 1.95,
          "quantity": 40000.0,
          "value": 78000.0
        },
        {
          "level": 13,
          "price": 1.96,
          "quantity": 24000.0,
          "value": 47040.0
        },
        {
          "level": 14,
          "price": 1.97,
          "quantity": 30000.0,
          "value": 59100.0
        },
        {
          "level": 15,
          "price": 1.98,
          "quantity": 60000.0,
          "value": 118800.0
        },
        {
          "level": 16,
          "price": 1.99,
          "quantity": 10000.0,
          "value": 19900.0
        },
        {
          "level": 17,
          "price": 2.0,
          "quantity": 142000.0,
          "value": 284000.0
        },
        {
          "level": 18,
          "price": 2.01,
          "quantity": 10000.0,
          "value": 20099.999999999996
        },
        {
          "level": 19,
          "price": 2.1,
          "quantity": 80000.0,
          "value": 168000.0
        },
        {
          "level": 20,
          "price": 2.18,
          "quantity": 12000.0,
          "value": 26160.000000000004
        },
        {
          "level": 21,
          "price": 2.19,
          "quantity": 2000.0,
          "value": 4380.0
        },
        {
          "level": 22,
          "price": 2.22,
          "quantity": 2000.0,
          "value": 4440.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-13 07:59:48.999000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 1.76,
        "spread_pct": 0.011363636363636374,
        "spread_ticks": 2.0,
        "tick_size": 0.01,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 322700.0,
        "ask_depth_notional_displayed": 1459920.0,
        "bid_depth_notional_top10": 322700.0,
        "ask_depth_notional_top10": 1459920.0,
        "bid_ask_depth_ratio": 0.221
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 170,
        "n_trades_used": 20462,
        "first_trade_date": "2025-05-13",
        "last_trade_date": "2026-05-13",
        "window_label": "May 13, 2025 to May 13, 2026",
        "window_short_label": "May 13, 2025 to May 13, 2026",
        "trade_days_label": "170 trading days",
        "trade_count_label": "20,462 trades",
        "window_detail_label": "170 trading days • 20,462 trades",
        "history_note": "Trade-size percentiles use May 13, 2025 to May 13, 2026 history (170 trading days • 20,462 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 39360.0,
            "impact_pct": -0.005682,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 12.2,
            "pct_of_adv": 25.29
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 63680.0,
            "impact_pct": -0.005682,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 19.73,
            "pct_of_adv": 40.91
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 910988.93,
            "impact_pct": -0.04504,
            "filled_pct": 35.4,
            "levels_consumed": 12,
            "pct_of_bid_depth": 282.3,
            "pct_of_adv": 585.32
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-13",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "3463406594",
            "timestamp": "2026-05-13 05:11:25.498000000",
            "local_timestamp": "2026-05-13 13:11:25",
            "posted_price": 2.0,
            "size_shares": 96000.0,
            "notional": 192000.0,
            "impact_pct": -0.020665,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 59.5,
            "price_vs_mid_pct": 13.636,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "2411095554",
            "timestamp": "2026-05-13 03:04:46.632000000",
            "local_timestamp": "2026-05-13 11:04:46",
            "posted_price": 1.92,
            "size_shares": 100000.0,
            "notional": 192000.0,
            "impact_pct": -0.020665,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 59.5,
            "price_vs_mid_pct": 9.091,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 3,
            "order_id": "4754651650",
            "timestamp": "2026-05-13 06:44:49.220000000",
            "local_timestamp": "2026-05-13 14:44:49",
            "posted_price": 1.84,
            "size_shares": 80000.0,
            "notional": 147200.0,
            "impact_pct": -0.012950999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 45.62,
            "price_vs_mid_pct": 4.545,
            "executed_event_count": 0,
            "event_count": 4
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-13",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.01,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.028985507246376836,
            "spread_ticks": 5.000000000000004,
            "bid_depth_notional": 189600.0,
            "ask_depth_notional": 311720.0,
            "mid_price": 1.725
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.023121387283237014,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 401060.0,
            "ask_depth_notional": 421560.0,
            "mid_price": 1.73
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.041666666666666706,
            "spread_ticks": 8.000000000000007,
            "bid_depth_notional": 485540.0,
            "ask_depth_notional": 573160.0,
            "mid_price": 1.92
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.01690140845070424,
            "spread_ticks": 3.0000000000000027,
            "bid_depth_notional": 478880.0,
            "ask_depth_notional": 719320.0,
            "mid_price": 1.775
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.03794037940379395,
            "spread_ticks": 6.999999999999984,
            "bid_depth_notional": 579360.0,
            "ask_depth_notional": 825680.0,
            "mid_price": 1.845
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.020725388601036288,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 853460.0,
            "ask_depth_notional": 1119020.0,
            "mid_price": 1.93
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.015999999999999896,
            "spread_ticks": 2.9999999999999805,
            "bid_depth_notional": 719460.0,
            "ask_depth_notional": 1198960.0,
            "mid_price": 1.875
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.00542005420054201,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 687320.0,
            "ask_depth_notional": 1448900.0,
            "mid_price": 1.8450000000000002
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.022346368715083817,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 598040.0,
            "ask_depth_notional": 1436480.0,
            "mid_price": 1.79
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.016806722689075643,
            "spread_ticks": 3.0000000000000027,
            "bid_depth_notional": 500700.0,
            "ask_depth_notional": 1421040.0,
            "mid_price": 1.7850000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.011363636363636374,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 322700.0,
            "ask_depth_notional": 1459920.0,
            "mid_price": 1.76
          }
        ],
        "summary": {
          "median_spread_pct": 0.020725388601036288,
          "median_spread_ticks": 4.0000000000000036,
          "median_bid_depth_notional": 500700.0,
          "median_ask_depth_notional": 1119020.0,
          "tightest_bucket": "14:00",
          "widest_bucket": "10:30",
          "deepest_bid_bucket": "13:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 32.1,
      "peers": [
        {
          "ticker": "398",
          "pct": 82.8
        },
        {
          "ticker": "887",
          "pct": 95.7
        },
        {
          "ticker": "1137",
          "pct": 142.7
        },
        {
          "ticker": "1268",
          "pct": 165.6
        },
        {
          "ticker": "493",
          "pct": 278.1
        },
        {
          "ticker": "2420",
          "pct": 306.1
        },
        {
          "ticker": "2136",
          "pct": 851.4
        },
        {
          "ticker": "2519",
          "pct": 2635.0
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 228,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-13",
          "last_trade_date": "2026-05-13",
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.9824561403508771,
            "mixed_pct": 0.017543859649122806,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9004065040650406,
            "mixed_qty_pct": 0.09959349593495935,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8992199204993393,
            "mixed_notional_pct": 0.10078007950066066,
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
              "retail": 224,
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
            "avg": 15866.578947368422,
            "median": 10500.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 924,
          "n_runs": 0,
          "n_trade_days": 19,
          "first_trade_date": "2026-04-14",
          "last_trade_date": "2026-05-13",
          "period_days": 29,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.9816017316017316,
            "mixed_pct": 0.0183982683982684,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.85038771476357,
            "mixed_qty_pct": 0.14961228523642997,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8494937162854896,
            "mixed_notional_pct": 0.15050628371451033,
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
              "retail": 907,
              "mixed": 17,
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
            "avg": 14936.742424242424,
            "median": 7370.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 2015,
          "n_runs": 0,
          "n_trade_days": 60,
          "first_trade_date": "2026-02-05",
          "last_trade_date": "2026-05-13",
          "period_days": 97,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.975682382133995,
            "mixed_pct": 0.02382133995037221,
            "instit_pct": 0.0004962779156327543,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7869308650259528,
            "mixed_qty_pct": 0.19364897669186287,
            "instit_qty_pct": 0.019420158282184373,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.786283227602223,
            "mixed_notional_pct": 0.19277054066344457,
            "instit_notional_pct": 0.02094623173433235,
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
              "retail": 1966,
              "mixed": 48,
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
            "avg": 15616.967741935483,
            "median": 7380.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 3967,
          "n_runs": 0,
          "n_trade_days": 123,
          "first_trade_date": "2025-10-27",
          "last_trade_date": "2026-05-13",
          "period_days": 198,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.95916309553819,
            "mixed_pct": 0.039828585833123265,
            "instit_pct": 0.001008318628686665,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7246223730954015,
            "mixed_qty_pct": 0.2487598865541684,
            "instit_qty_pct": 0.026617740350430217,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7027925535714514,
            "mixed_notional_pct": 0.26415095090750457,
            "instit_notional_pct": 0.03305649552104403,
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
              "retail": 3805,
              "mixed": 158,
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
            "avg": 19629.524451726746,
            "median": 9360.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 3967,
      "n_runs": 0,
      "n_trade_days": 123,
      "first_trade_date": "2025-10-27",
      "last_trade_date": "2026-05-13",
      "period_days": 198,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 78000.0,
        "instit_min": 390000.0
      },
      "composition": {
        "retail_pct": 0.95916309553819,
        "mixed_pct": 0.039828585833123265,
        "instit_pct": 0.001008318628686665,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.7027925535714514,
        "mixed_notional_pct": 0.26415095090750457,
        "instit_notional_pct": 0.03305649552104403,
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
        "avg": 19629.524451726746,
        "median": 9360.0
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
            "n_trades": 540,
            "n_runs": 0,
            "retail_pct": 0.9796296296296296,
            "mixed_pct": 0.020370370370370372,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 16176.055555555555,
            "avg_run_notional": null,
            "retail_qty_pct": 0.8377998281115712,
            "mixed_qty_pct": 0.16220017188842878,
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
            "total_quantity": 6399500.0
          },
          {
            "month": "2026-04",
            "n_trades": 263,
            "n_runs": 0,
            "retail_pct": 0.9885931558935361,
            "mixed_pct": 0.011406844106463879,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 11068.441064638784,
            "avg_run_notional": null,
            "retail_qty_pct": 0.8896309314586994,
            "mixed_qty_pct": 0.11036906854130053,
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
            "total_quantity": 2845000.0
          },
          {
            "month": "2026-03",
            "n_trades": 470,
            "n_runs": 0,
            "retail_pct": 0.9787234042553191,
            "mixed_pct": 0.02127659574468085,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 14061.872340425532,
            "avg_run_notional": null,
            "retail_qty_pct": 0.8276206322795341,
            "mixed_qty_pct": 0.1723793677204659,
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
            "total_quantity": 6010000.0
          },
          {
            "month": "2026-02",
            "n_trades": 572,
            "n_runs": 0,
            "retail_pct": 0.9527972027972028,
            "mixed_pct": 0.045454545454545456,
            "instit_pct": 0.0017482517482517483,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 19162.552447552447,
            "avg_run_notional": null,
            "retail_qty_pct": 0.6283974777125462,
            "mixed_qty_pct": 0.3181126331811263,
            "instit_qty_pct": 0.05348988910632746,
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
            "total_quantity": 9198000.0
          },
          {
            "month": "2026-01",
            "n_trades": 473,
            "n_runs": 0,
            "retail_pct": 0.9619450317124736,
            "mixed_pct": 0.03805496828752643,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 19575.158562367866,
            "avg_run_notional": null,
            "retail_qty_pct": 0.7176026701494703,
            "mixed_qty_pct": 0.2823973298505297,
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
            "total_quantity": 6891000.0
          },
          {
            "month": "2025-12",
            "n_trades": 466,
            "n_runs": 0,
            "retail_pct": 0.9635193133047211,
            "mixed_pct": 0.03648068669527897,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 18485.622317596568,
            "avg_run_notional": null,
            "retail_qty_pct": 0.7530707863745726,
            "mixed_qty_pct": 0.24692921362542739,
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
            "total_quantity": 6317600.0
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
      "recent_trades": [],
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
      "total_trades": 3176,
      "price_moving_trades": 1576,
      "pct_price_moving": 49.622166246851386,
      "all_movers": {
        "count": 1576,
        "avg_size": 21889.304251269037,
        "median_size": 10040.0,
        "retail_count": 1499,
        "mixed_count": 74,
        "institutional_count": 3,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 95.11421319796955,
        "mixed_pct": 4.695431472081219,
        "instit_pct": 0.1903553299492386,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 787,
        "avg_size": 22133.75031766201,
        "median_size": 11399.999999999998,
        "retail_count": 754,
        "mixed_count": 31,
        "institutional_count": 2,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 95.80686149936467,
        "mixed_pct": 3.9390088945362134,
        "instit_pct": 0.25412960609911056,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 789,
        "avg_size": 21645.47782002535,
        "median_size": 8720.0,
        "retail_count": 745,
        "mixed_count": 43,
        "institutional_count": 1,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 94.4233206590621,
        "mixed_pct": 5.4499366286438535,
        "instit_pct": 0.12674271229404308,
        "unclear_pct": null
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
          "opening": 0.0,
          "continuous": 0.9892400903602558,
          "closing": 0.010759909639744146,
          "auctions": 0.010759909639744146,
          "other": 0.0
        },
        "1M": {
          "opening": 0.0,
          "continuous": 0.9903073243668673,
          "closing": 0.009692675633132657,
          "auctions": 0.009692675633132657,
          "other": 0.0
        },
        "3M": {
          "opening": 0.000587095368597278,
          "continuous": 0.9891066289029802,
          "closing": 0.010306275728422526,
          "auctions": 0.010893371097019804,
          "other": 0.0
        },
        "6M": {
          "opening": 0.002158002587906871,
          "continuous": 0.9887720501964523,
          "closing": 0.008839764011188222,
          "auctions": 0.010997766599095094,
          "other": 0.00023018320445258427
        }
      },
      "hhi": {
        "1D": 0.1973288410510288,
        "1M": 0.3830862051404995,
        "3M": 0.3498130401869657,
        "6M": 0.3200483801965877
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0143
        },
        {
          "time": "09:30",
          "avg_share": 0.1156
        },
        {
          "time": "10:00",
          "avg_share": 0.104
        },
        {
          "time": "10:30",
          "avg_share": 0.0871
        },
        {
          "time": "11:00",
          "avg_share": 0.0511
        },
        {
          "time": "11:30",
          "avg_share": 0.0416
        },
        {
          "time": "13:00",
          "avg_share": 0.1102
        },
        {
          "time": "13:30",
          "avg_share": 0.0824
        },
        {
          "time": "14:00",
          "avg_share": 0.0987
        },
        {
          "time": "14:30",
          "avg_share": 0.0794
        },
        {
          "time": "15:00",
          "avg_share": 0.0847
        },
        {
          "time": "15:30",
          "avg_share": 0.1131
        },
        {
          "time": "16:00",
          "avg_share": 0.0176
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1723",
          "auctions_pct": 0.9465564723022127,
          "hhi": 0.29206350850617546,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "2136",
          "auctions_pct": 2.4672742754948436,
          "hhi": 0.39180809538709127,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1268",
          "auctions_pct": 6.028237513428587,
          "hhi": 0.20688921891083947,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1137",
          "auctions_pct": 2.7513436132875553,
          "hhi": 0.2578108131223488,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "493",
          "auctions_pct": 2.402144253235254,
          "hhi": 0.23141499258944398,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "398",
          "auctions_pct": 2.0459194855827705,
          "hhi": 0.2019275751036751,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "887",
          "auctions_pct": 1.7211829491202413,
          "hhi": 0.23910851007693235,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2420",
          "auctions_pct": 1.0876347221867102,
          "hhi": 0.2990798996392145,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2519",
          "auctions_pct": 4.902249503934443,
          "hhi": 0.5367599449214467,
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
