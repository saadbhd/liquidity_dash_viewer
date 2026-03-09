// Auto-generated from LiquidityIQ_Reports/src/methodology_tooltips.py
// Do NOT edit manually — update the Python source and re-run:
//   python generate_ts_with_openai.py --methodology-only --methodology-output <path>

export interface MethodologyEntry {
  title: string;
  body: string;
  glossaryKey?: string;
}

export const METHODOLOGY: Record<string, MethodologyEntry> = {
  liquidity_score: {
    title: "Liquidity Score",
    body: "A single score that sums up how easy this stock is to trade. It combines trading value, trading activity, spread, price impact, turnover, and price stability over the selected period. Higher score means better liquidity.",
    glossaryKey: "liquidity_score",
  },
  drivers: {
    title: "Drivers of Moves",
    body: "Shows what has been driving the share price lately: the wider market, the sector, or the company's own story. It also shows the current driver regime and how confident the model is in that read.",
    glossaryKey: "drivers",
  },
  regime_switching: {
    title: "Price Driver Regimes",
    body: "Groups past trading days into a small number of driver states, such as market-led, sector-led, or company-led phases. It helps show what is leading the stock now, how stable that state has been, and how likely it is to change.",
    glossaryKey: "regime_switching",
  },
  execution: {
    title: "Execution Impact Simulation",
    body: "Shows trading cost from three views: the latest displayed book, large trade sizes from the stock's available history up to one year, and large sell-side orders observed during the day. The current view uses the top 10 price levels on the bid side and ask side of the order book. Results are shown as approximate price move in percent.",
    glossaryKey: "execution",
  },
  intraday: {
    title: "Intraday Liquidity Patterns",
    body: "Shows when trading happens during the day and whether activity is spread out or clustered into a few busy periods. It highlights the split between auctions and normal trading, and the time windows where most volume usually appears.",
    glossaryKey: "intraday",
  },
  trader_composition: {
    title: "Trader Persona Classification",
    body: "Estimates whether trading behavior looks more like retail flow, institutional flow, a mixed style, or an unclear pattern. The method reads how trades are grouped, how much visible depth they consume, and how price reacts around them. The dashboard now also shows how many trades and runs fall in each bucket, plus the confidence mix behind those classifications.",
    glossaryKey: "trader_composition",
  },
  peer_traders: {
    title: "Peer Trader Comparison",
    body: "Compares the same behavioral trader-persona mix across similar stocks. This shows whether this name looks more retail-like, more institution-like, or simply less observable than its peers. Peer rows also show the full run-confidence mix instead of only the highest-confidence slice.",
    glossaryKey: "peer_traders",
  },
  trader_dominant_persona: {
    title: "Dominant Persona",
    body: "Shows the main trading style seen in the selected window. It is based on runs, which means short sequences of nearby trades treated as one broader flow.",
    glossaryKey: "trader_dominant_persona",
  },
  trader_classified_flow: {
    title: "Classified Flow",
    body: "Shows how much trading the model was able to classify in the selected window. Trades are individual prints. Runs are short sequences of nearby trades grouped into one broader action. If there is any continuous-session activity, the headline counts focus on continuous trading (auctions are excluded) so the mix reflects normal intraday flow rather than auction prints.",
    glossaryKey: "trader_classified_flow",
  },
  trader_trade_confidence: {
    title: "Trade Confidence",
    body: "Shows how strong the model's evidence is at the individual trade level. The percent is the share of trades in each confidence bucket, and the number in brackets is the trade count.",
    glossaryKey: "trader_trade_confidence",
  },
  trader_run_confidence: {
    title: "Run Confidence",
    body: "Shows how strong the model's evidence is after nearby trades are grouped into runs. A run is a short sequence of nearby trades treated as one broader flow.",
    glossaryKey: "trader_run_confidence",
  },
  trader_typical_size: {
    title: "Typical Size",
    body: "Shows the average trade value and the average run value. Run value is usually larger because it adds together nearby trades that look like one sequence.",
    glossaryKey: "trader_typical_size",
  },
  trader_recent_trades: {
    title: "Recent Classified Trades",
    body: "Shows recent trades in local market time, with the bucket and confidence tag assigned by the method. This is a quick way to inspect what the model saw most recently.",
    glossaryKey: "trader_recent_trades",
  },
  price_moving_trades: {
    title: "Price-Moving Trades",
    body: "Counts how often individual trades actually move the price. It also shows which trader personas sit behind those price-moving trades. A higher share means the price is more sensitive to each trade, which usually points to thinner trading conditions. The denominator counts trades with a previous print to compare against (the first trade of a window has no prior price). If continuous trading exists, auctions are excluded to keep the universe consistent with the persona mix.",
    glossaryKey: "price_moving_trades",
  },
  short_selling: {
    title: "Short Selling Analysis",
    body: "Shows how much trading is coming from short sellers, whether short activity has spiked, and how much stock is available to borrow. It helps you see whether short interest is low, normal, or unusually high.",
    glossaryKey: "short_selling",
  },
  pca_score: {
    title: "Liquidity Score",
    body: "This is the main score used to summarize how easy the stock is to trade. It blends trading value, trading activity, spread, price impact, turnover, and price stability into one number. Higher score means better liquidity.",
    glossaryKey: "pca_score",
  },
  spread: {
    title: "Bid-Ask Spread",
    body: "Spread is the gap between the best buy price and the best sell price. We show it as a percent, and in some places also in ticks. Lower spread usually means lower trading cost.",
    glossaryKey: "spread",
  },
  amihud: {
    title: "Price Impact Score",
    body: "Shows how easily the price moves when trading happens. Higher values mean even smaller trades can move the stock more, which usually means weaker liquidity.",
    glossaryKey: "amihud",
  },
  price_impact: {
    title: "Price Impact Score",
    body: "Shows how easily the price moves when trading happens. Higher values mean even smaller trades can move the stock more, which usually means weaker liquidity.",
    glossaryKey: "price_impact",
  },
  adv: {
    title: "Average Daily Trading Value",
    body: "The typical daily trading value over the selected period. It is shown in money terms, such as S$ or HK$. Higher ADV usually means more liquidity is available.",
    glossaryKey: "adv",
  },
  turnover: {
    title: "Turnover Ratio",
    body: "Shows what share of the company changes hands on a typical day. Higher turnover means the stock is trading more actively relative to its size.",
    glossaryKey: "turnover",
  },
  volatility: {
    title: "Price Variability",
    body: "Shows how much the share price tends to move from day to day. More movement means more uncertainty, which can make trading feel less stable.",
    glossaryKey: "volatility",
  },
  kyles_lambda: {
    title: "Historical Price Impact",
    body: "A historical measure of how strongly price reacted when trading value changed. Higher values mean trading has tended to move the price more.",
    glossaryKey: "kyles_lambda",
  },
  hhi: {
    title: "Trading Concentration",
    body: "Shows whether trading is spread through the day or packed into only a few time windows. Lower values mean trading is more evenly spread. Higher values mean volume is more concentrated.",
    glossaryKey: "hhi",
  },
  granger: {
    title: "Lead-Lag Signal",
    body: "Checks whether earlier order flow gave a useful signal about later price moves. This is a directional test only, not proof of cause in a real-world sense.",
    glossaryKey: "granger",
  },
  beta_market: {
    title: "Market Link",
    body: "Shows how strongly the stock tends to move with the broader market in the current regime. If you only see one number, the run produced a point estimate rather than a wider uncertainty range.",
    glossaryKey: "beta_market",
  },
  beta_sector: {
    title: "Sector Link",
    body: "Shows how strongly the stock tends to move with its sector or industry in the current regime. If the range collapses to one value, treat it as a point estimate from limited or highly stable inputs.",
    glossaryKey: "beta_sector",
  },
  share_of_moves: {
    title: "Share of Moves",
    body: "Splits recent price moves into three buckets: market-driven, sector-driven, and company-driven. A high company share means the stock has recently been moving more on its own story than on wider market moves.",
    glossaryKey: "share_of_moves",
  },
  r_squared: {
    title: "Base Model Fit",
    body: "A background check from the simpler market-plus-sector model. Useful for context, but the main Q02 reading now comes from regime probabilities and driver ranges.",
    glossaryKey: "r_squared",
  },
  short_ratio: {
    title: "Short Ratio",
    body: "Shows what share of trading came from short sellers. Higher levels mean short activity is a bigger part of the market in this stock.",
    glossaryKey: "short_ratio",
  },
  days_to_cover: {
    title: "Days to Cover",
    body: "Shows how long it could take for short sellers to buy back stock using normal trading volume. Higher values mean it could take longer to unwind.",
    glossaryKey: "days_to_cover",
  },
  unusual_short: {
    title: "Unusual Short Activity",
    body: "Flags days when short activity was much higher than normal for this stock. It is meant to highlight shorting spikes, not small day-to-day noise.",
    glossaryKey: "unusual_short",
  },
  sbl_pool: {
    title: "Borrowable Share Pool",
    body: "Shows how many shares are available to borrow for short selling. We also compare that pool with normal trading volume to show whether it is small or large.",
    glossaryKey: "sbl_pool",
  },
  correlation_short_return: {
    title: "Shorts vs Price Moves",
    body: "Shows whether short selling tended to rise when the price was falling, rising, or moving independently. It is a simple relationship check, not a full explanation of price moves.",
    glossaryKey: "correlation_short_return",
  },
  peer_selection: {
    title: "Peer Selection",
    body: "Peers are chosen to look like this stock in size, sector, industry, and trading profile. The process first looks for similar businesses and then for names with similar trading value.",
    glossaryKey: "peer_selection",
  },
  session_distribution: {
    title: "Session Distribution",
    body: "Shows how trading is split between the open, the main session, the close, and auction periods.",
    glossaryKey: "session_distribution",
  },
  volume_profile: {
    title: "Volume Profile",
    body: "Shows which parts of the day usually carry the most trading volume. This helps identify the quieter and busier time windows.",
    glossaryKey: "volume_profile",
  },
  impact_simulation: {
    title: "Order Book Impact Simulation",
    body: "This simulates what could happen if a sell order is pushed through the visible order book. The current model uses the top 10 price levels on each side and reports the estimated price move in percent.",
    glossaryKey: "impact_simulation",
  },
  historical_trade_scenarios: {
    title: "Historical Trade Stress Test",
    body: "Uses the stock's own trade sizes over available history up to one year. It takes large real trade sizes from that history and asks what would happen if those sizes were sold into today's displayed book.",
    glossaryKey: "historical_trade_scenarios",
  },
  l3_sell_orders: {
    title: "Large Sell Orders Seen Today",
    body: "Looks at the biggest sell-side orders observed during the day and estimates what price impact they could create if they crossed the market immediately.",
    glossaryKey: "l3_sell_orders",
  },
  intraday_book_profile: {
    title: "Spread & Depth Through The Day",
    body: "Shows how spread and visible depth changed during the day in local market time, using bucket-start labels. This helps identify when trading conditions were tighter, wider, deeper, or thinner.",
    glossaryKey: "intraday_book_profile",
  },
  adv_execution: {
    title: "% of Daily Trading Value",
    body: "Shows how large an order is compared with a normal trading day for this stock. A bigger share of daily volume usually means a harder trade.",
    glossaryKey: "adv_execution",
  },
};
