import type { ReportData } from '@/types/report';

type CellValue = string | number | boolean | null | undefined;
type Row = CellValue[];
type Sheet = {
  name: string;
  rows: Row[];
};
type AnyRecord = Record<string, unknown>;

const EMPTY_ROW: Row = [''];

function asRecord(value: unknown): AnyRecord {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as AnyRecord) : {};
}

function asArray<T = unknown>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function hasDataRows(rows: Row[]): boolean {
  return rows.some((row) => row.some((cell) => cell !== null && cell !== undefined && cell !== ''));
}

function pushSection(rows: Row[], title: string): void {
  if (rows.length > 0) rows.push(EMPTY_ROW);
  rows.push([title]);
}

function addSheet(sheets: Sheet[], name: string, rows: Row[]): void {
  if (hasDataRows(rows)) {
    sheets.push({ name, rows });
  }
}

function valueAt(source: AnyRecord, key: string): CellValue {
  const value = source[key];
  if (value === null || value === undefined) return '';
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return value;
  return '';
}

function tableFromRecords(records: AnyRecord[], columns: Array<[string, string]>): Row[] {
  if (!records.length) return [];
  return [
    columns.map(([header]) => header),
    ...records.map((record) => columns.map(([, key]) => valueAt(record, key))),
  ];
}

function metricRows(record: AnyRecord, columns: Array<[string, string]>): Row[] {
  return columns.map(([label, key]) => [label, valueAt(record, key)]);
}

function hasKeys(record: AnyRecord): boolean {
  return Object.keys(record).length > 0;
}

function periodLabel(key: string): string {
  const labels: Record<string, string> = {
    '1d': '1D',
    '1w': '1W',
    '2w': '2W',
    '30d': '1M',
    '3m': '3M',
    '6m': '6M',
    max: 'MAX',
  };
  return labels[key] ?? key.toUpperCase();
}

function pctCell(value: unknown): CellValue {
  return isFiniteNumber(value) ? value : '';
}

function normalizedSeriesValue(series: AnyRecord[], key: string, index: number): CellValue {
  const values = series.map((row) => row[key]);
  const first = values.find(isFiniteNumber);
  const value = values[index];
  if (!isFiniteNumber(first) || first === 0 || !isFiniteNumber(value)) return '';
  return (value / first) * 100;
}

function buildOverviewSheet(report: ReportData): Row[] {
  const rows: Row[] = [
    ['Field', 'Value'],
    ['Company', report.meta.company],
    ['Ticker', report.meta.ticker],
    ['Market', report.meta.market],
    ['As of', report.meta.asof_date],
    ['Sector', report.meta.sector],
    ['Industry', report.meta.industry],
    ['Market cap', report.meta.market_cap_display],
    ['Market cap category', report.meta.market_cap_category],
    ['Universe total', report.meta.universe_total],
    ['Peers count', report.meta.peers_count],
  ];

  if (report.content.exec_metrics?.length) {
    pushSection(rows, 'Executive Metrics');
    rows.push(['Metric', 'Value', 'Suffix', 'Subtext']);
    report.content.exec_metrics.forEach((metric) => {
      rows.push([
        metric.title,
        `${metric.value_prefix ?? ''}${metric.value ?? ''}`,
        metric.suffix ?? '',
        metric.subtext ?? '',
      ]);
    });
  }

  const etf = asRecord(report.etf);
  if (Object.keys(etf).length) {
    const etfMeta = asRecord(etf.meta);
    const headline = asRecord(etf.headline);
    const latestDay = asRecord(asRecord(etf.extras).latest_day);
    pushSection(rows, 'ETF Product Profile');
    rows.push(...metricRows(etfMeta, [
      ['Name', 'name'],
      ['Issuer', 'issuer'],
      ['Underlying', 'underlying'],
      ['Asset class', 'asset_class'],
      ['Strategy', 'strategy'],
      ['Base currency', 'base_currency'],
      ['Trading currency', 'trading_currency'],
      ['Listing date', 'listing_date'],
      ['TER', 'ter'],
      ['AUM HKD m', 'aum_hkd_m'],
      ['NAV latest', 'nav_latest'],
      ['NAV date', 'nav_date'],
      ['Premium vs NAV fraction', 'premium_vs_nav_frac'],
    ]));

    pushSection(rows, 'ETF Headline Metrics');
    rows.push(...metricRows(headline, [
      ['Market-quality score', 'score'],
      ['Score label', 'score_label'],
      ['Spread bps', 'spread_bps'],
      ['ADV turnover HKD', 'adv_turnover_hkd'],
      ['Average trades per day', 'avg_trades_per_day'],
      ['Quote uptime pct', 'quote_uptime_pct'],
      ['L1 depth avg notional', 'depth_l1_avg_notional'],
      ['Depth band 5pct avg notional', 'depth_band_5pct_avg_notional'],
      ['Period return', 'period_return'],
      ['Realized annual volatility', 'realized_vol_annual'],
    ]));

    if (Object.keys(latestDay).length) {
      pushSection(rows, 'Latest Trading Day');
      rows.push(...metricRows(latestDay, [
        ['Date', 'date'],
        ['Open', 'open'],
        ['High', 'high'],
        ['Low', 'low'],
        ['Close', 'close'],
        ['VWAP', 'vwap'],
        ['Spread bps TW', 'spread_bps_tw'],
        ['Volume', 'volume'],
        ['Turnover HKD', 'turnover_hkd'],
        ['Trades', 'n_trades'],
        ['Auction share pct', 'auction_share_pct'],
      ]));
    }
  }

  return rows;
}

function buildLiquiditySheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const q01Periods = asRecord(report.q01?.periods);

  if (report.content.liq_tiles?.length) {
    pushSection(rows, 'Liquidity Tiles');
    rows.push(['Metric', 'Value', 'Subtext']);
    report.content.liq_tiles.forEach((tile) => rows.push([tile.title, tile.value, tile.sub]));
  }

  const periodKeys = Object.keys(q01Periods);
  if (periodKeys.length) {
    pushSection(rows, 'Liquidity Metrics By Period');
    rows.push([
      'Period',
      'Window days',
      'Score PCA',
      'Score percentile',
      'Rank',
      'Total universe',
      'ADV notional',
      'ADV volume shares',
      'Free float shares',
      'Turnover ratio',
      'Votes',
      'Trades',
      'Spread pct',
      'Spread ticks',
      'Amihud',
      'Volatility',
    ]);
    periodKeys.forEach((key) => {
      const period = asRecord(q01Periods[key]);
      const liquidity = asRecord(period.liquidity);
      rows.push([
        periodLabel(key),
        valueAt(period, 'window_days'),
        valueAt(liquidity, 'score_pca'),
        valueAt(liquidity, 'score_pca_percentile'),
        valueAt(liquidity, 'rank_pca'),
        valueAt(liquidity, 'total'),
        valueAt(liquidity, 'adv_notional_sgd'),
        valueAt(liquidity, 'adv_volume_shares'),
        valueAt(liquidity, 'free_float_shares'),
        valueAt(liquidity, 'turnover_ratio'),
        valueAt(liquidity, 'votes'),
        valueAt(liquidity, 'trades'),
        valueAt(liquidity, 'spread_pct'),
        valueAt(liquidity, 'spread_ticks'),
        valueAt(liquidity, 'amihud'),
        valueAt(liquidity, 'volatility'),
      ]);
    });

    pushSection(rows, 'Peer Liquidity');
    rows.push(['Period', 'Ticker', 'Company', 'Label', 'Score PCA', 'Rank', 'ADV', 'Trades', 'Volatility', 'Spread pct', 'Spread ticks', 'Amihud', 'Turnover ratio', 'Target']);
    periodKeys.forEach((key) => {
      const period = asRecord(q01Periods[key]);
      asArray<AnyRecord>(period.peer_liquidity).forEach((peer) => {
        rows.push([
          periodLabel(key),
          valueAt(peer, 'ticker'),
          valueAt(peer, 'company_name'),
          valueAt(peer, 'label'),
          valueAt(peer, 'score_pca'),
          valueAt(peer, 'rank_pca'),
          valueAt(peer, 'adv'),
          valueAt(peer, 'trades'),
          valueAt(peer, 'volatility'),
          valueAt(peer, 'spread_pct'),
          valueAt(peer, 'spread_ticks'),
          valueAt(peer, 'amihud'),
          valueAt(peer, 'turnover_ratio'),
          valueAt(peer, 'is_target'),
        ]);
      });
    });
  } else if (report.series.peers_liquidity?.labels?.length) {
    pushSection(rows, 'Peer Liquidity');
    rows.push(['Label', 'Ticker', 'Score', 'ADV', 'Target']);
    report.series.peers_liquidity.labels.forEach((label, index) => {
      rows.push([
        label,
        report.series.peers_liquidity.tickers?.[index] ?? label,
        report.series.peers_liquidity.scores[index] ?? '',
        report.series.peers_liquidity.adv[index] ?? '',
        report.series.peers_liquidity.is_target[index] ?? false,
      ]);
    });
  }

  const etf = asRecord(report.etf);
  const windows = asRecord(etf.windows);
  if (Object.keys(windows).length) {
    pushSection(rows, 'ETF Liquidity Windows');
    rows.push([
      'Window',
      'Label',
      'Days',
      'ADV volume shares',
      'ADV turnover HKD',
      'Median turnover HKD',
      'Average trades/day',
      'Spread bps TW',
      'Spread bps median',
      'Quote uptime pct',
      'Liquidity score',
    ]);
    Object.entries(windows).forEach(([key, rawWindow]) => {
      const window = asRecord(rawWindow);
      rows.push([
        key,
        valueAt(window, 'label'),
        valueAt(window, 'window_days'),
        valueAt(window, 'adv_volume_shares'),
        valueAt(window, 'adv_turnover_hkd'),
        valueAt(window, 'median_turnover_hkd'),
        valueAt(window, 'avg_trades_per_day'),
        valueAt(window, 'spread_bps_tw'),
        valueAt(window, 'spread_bps_median'),
        valueAt(window, 'quote_uptime_pct'),
        valueAt(window, 'liquidity_score'),
      ]);
    });
  }

  return rows;
}

function buildPerformanceReturnsSheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const totalReturns = report.series.total_returns ?? report.q01?.total_returns;
  const q01Periods = asRecord(report.q01?.periods);

  if (totalReturns?.rows?.length) {
    pushSection(rows, totalReturns.title || 'Total Returns');
    rows.push(['Name', 'Stock code', 'YTD total return', '1Y total return', 'Metric return', 'Note', 'Target']);
    totalReturns.rows.forEach((row) => {
      rows.push([
        row.name ?? row.label ?? row.key,
        row.stock_code ?? '',
        row.ytd_total_return?.value ?? '',
        row.one_year_total_return?.value ?? '',
        row.value ?? '',
        row.note ?? '',
        row.is_target ?? false,
      ]);
    });
  }

  if (Object.keys(q01Periods).length) {
    pushSection(rows, 'Market Comparison Returns');
    rows.push(['Period', 'Window days', 'Observations', 'Stock', 'Market', 'Sector', 'Peers', 'Vs market', 'Vs sector', 'Vs peers']);
    Object.entries(q01Periods).forEach(([key, rawPeriod]) => {
      const returns = asRecord(asRecord(asRecord(rawPeriod).market_comparison).returns);
      if (!Object.keys(returns).length) return;
      rows.push([
        periodLabel(key),
        valueAt(returns, 'window_days'),
        valueAt(returns, 'n_obs'),
        pctCell(returns.stock),
        pctCell(returns.market),
        pctCell(returns.sector),
        pctCell(returns.peers),
        pctCell(returns.vs_market),
        pctCell(returns.vs_sector),
        pctCell(returns.vs_peers),
      ]);
    });
  } else if (report.series.returns?.length) {
    pushSection(rows, 'Return Comparisons');
    rows.push(['Horizon', 'Stock', 'Market', 'Sector', 'Peers']);
    report.series.returns.forEach((row) => rows.push([row.horizon, row.stock ?? '', row.market ?? '', row.sector ?? '', row.peers ?? '']));
  }

  return rows;
}

function buildMarketPerformanceSheet(report: ReportData): Row[] {
  const block = report.series.market_performance ?? report.q01?.market_performance;
  const rows: Row[] = [];
  if (block?.rows?.length) {
    rows.push(['Name', 'Label', 'Stock code', 'Best month return', 'Best month', 'Worst month return', 'Worst month', 'Window start', 'Window end', 'Observations', 'Target']);
    block.rows.forEach((row) => {
      rows.push([
        row.name ?? '',
        row.label ?? row.key,
        row.stock_code ?? '',
        row.best_month?.value ?? '',
        row.best_month?.month ?? '',
        row.worst_month?.value ?? '',
        row.worst_month?.month ?? '',
        row.history_window?.start_date ?? '',
        row.history_window?.end_date ?? '',
        row.history_window?.n_obs ?? '',
        row.is_target ?? false,
      ]);
    });
  }
  return rows;
}

function buildPeerAnalysisSheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const periods = asRecord(report.peer_analysis?.periods);
  const peerProfiles = asArray<AnyRecord>(report.peer_analysis?.peers);
  if (!report.peer_analysis?.enabled) return rows;

  if (Object.keys(periods).length) {
    pushSection(rows, 'Peer Market Comparison Detail');
    rows.push([
      'Period',
      'Company',
      'Ticker',
      'Return',
      'ADV',
      'Trades',
      'Volatility',
      'Spread pct',
      'Spread ticks',
      'Amihud',
      'Turnover ratio',
      'Score PCA',
      'Rank PCA',
      'Target',
    ]);
    Object.entries(periods).forEach(([key, rawPeriod]) => {
      const period = asRecord(rawPeriod);
      const liquidity = asRecord(period.liquidity);
      const marketComparison = asRecord(period.market_comparison);
      const metricRows = asArray<AnyRecord>(liquidity.rows).length
        ? asArray<AnyRecord>(liquidity.rows)
        : asArray<AnyRecord>(marketComparison.metric_rows);
      const returns = asRecord(marketComparison.returns);
      const returnRows = asArray<AnyRecord>(returns.peer_rows);
      metricRows.forEach((peer) => {
        const peerTicker = String(valueAt(peer, 'ticker') || '');
        const returnRow = returnRows.find((row) => String(valueAt(row, 'ticker') || valueAt(row, 'stock_code')) === peerTicker);
        rows.push([
          periodLabel(key),
          valueAt(peer, 'label') || valueAt(peer, 'company_name') || valueAt(peer, 'ticker'),
          valueAt(peer, 'ticker'),
          pctCell(returnRow ? returnRow.return : ''),
          valueAt(peer, 'adv'),
          valueAt(peer, 'trades'),
          valueAt(peer, 'volatility'),
          valueAt(peer, 'spread_pct'),
          valueAt(peer, 'spread_ticks'),
          valueAt(peer, 'amihud'),
          valueAt(peer, 'turnover_ratio'),
          valueAt(peer, 'score_pca'),
          valueAt(peer, 'rank_pca'),
          valueAt(peer, 'is_target'),
        ]);
      });
    });

    pushSection(rows, 'Peer Takeaways');
    rows.push(['Period', 'Takeaway']);
    Object.entries(periods).forEach(([key, rawPeriod]) => {
      asArray<CellValue>(asRecord(rawPeriod).takeaways).forEach((line) => {
        rows.push([periodLabel(key), line]);
      });
    });

    pushSection(rows, 'Peer Performance');
    rows.push(['Period', 'Company', 'Ticker', 'Return', 'Observations', 'Target']);
    const performancePeriods = asRecord(asRecord(report.peer_analysis?.performance).periods);
    Object.entries(periods).forEach(([key, rawPeriod]) => {
      const period = asRecord(rawPeriod);
      const marketComparison = asRecord(period.market_comparison);
      const returns = asRecord(marketComparison.returns);
      const explicitPerformance = asRecord(performancePeriods[key] ?? period.performance);
      const performanceRows = asArray<AnyRecord>(explicitPerformance.rows).length
        ? asArray<AnyRecord>(explicitPerformance.rows)
        : asArray<AnyRecord>(returns.peer_rows);
      performanceRows.forEach((peer) => {
        rows.push([
          periodLabel(key),
          valueAt(peer, 'name') || valueAt(peer, 'stock_code') || valueAt(peer, 'ticker'),
          valueAt(peer, 'ticker') || valueAt(peer, 'stock_code'),
          pctCell(valueAt(peer, 'return')),
          valueAt(peer, 'n_obs'),
          valueAt(peer, 'is_target'),
        ]);
      });
    });
  }

  if (peerProfiles.length) {
    pushSection(rows, 'Peer Driver Profiles');
    rows.push(['Company', 'Ticker', 'Valid', 'Dominant driver', 'Market share', 'Sector share', 'Company-specific share', 'Summary', 'Limitation']);
    peerProfiles.forEach((profile) => {
      const identity = asRecord(profile.identity);
      const drivers = asRecord(profile.drivers);
      const driverMix = asRecord(drivers.driver_mix);
      rows.push([
        valueAt(identity, 'company_name') || valueAt(identity, 'ticker'),
        valueAt(identity, 'ticker'),
        valueAt(profile, 'valid'),
        valueAt(drivers, 'dominant_driver_label') || valueAt(drivers, 'dominant_driver'),
        pctCell(valueAt(asRecord(driverMix.market_share), 'median')),
        pctCell(valueAt(asRecord(driverMix.sector_share), 'median')),
        pctCell(valueAt(asRecord(driverMix.company_share), 'median')),
        valueAt(drivers, 'summary'),
        valueAt(drivers, 'limitation'),
      ]);
    });

    pushSection(rows, 'Peer Driver Monthly History');
    rows.push(['Company', 'Ticker', 'Month', 'Dominant driver']);
    peerProfiles.forEach((profile) => {
      const identity = asRecord(profile.identity);
      const drivers = asRecord(profile.drivers);
      asArray<AnyRecord>(drivers.monthly_history).slice(-3).forEach((month) => {
        rows.push([
          valueAt(identity, 'company_name') || valueAt(identity, 'ticker'),
          valueAt(identity, 'ticker'),
          valueAt(month, 'month_short_label') || valueAt(month, 'month_label') || valueAt(month, 'month_key'),
          valueAt(month, 'dominant_driver_label') || valueAt(month, 'dominant_driver'),
        ]);
      });
    });

    pushSection(rows, 'Peer State Profiles');
    rows.push(['Company', 'Ticker', 'Active state', 'Active probability', 'State', 'Pct time', 'Avg duration', 'Summary', 'Limitation']);
    peerProfiles.forEach((profile) => {
      const identity = asRecord(profile.identity);
      const state = asRecord(profile.market_state);
      asArray<AnyRecord>(state.state_profiles).forEach((stateProfile) => {
        rows.push([
          valueAt(identity, 'company_name') || valueAt(identity, 'ticker'),
          valueAt(identity, 'ticker'),
          valueAt(state, 'active_state_label'),
          valueAt(state, 'active_state_probability_display') || valueAt(state, 'active_state_probability'),
          valueAt(stateProfile, 'label'),
          valueAt(stateProfile, 'pct_time'),
          valueAt(stateProfile, 'expected_duration_days'),
          valueAt(state, 'summary'),
          valueAt(state, 'limitation'),
        ]);
      });
    });
  }

  return rows;
}

function buildDriversSheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const drivers = asRecord(report.series?.drivers);
  const driverModel = report.q02?.driver_model?.valid ? report.q02.driver_model : null;
  const currentSummary = asRecord(driverModel?.current_summary);
  if (!driverModel && !hasKeys(drivers)) return rows;

  pushSection(rows, 'Current Driver Mix');
  rows.push(['Metric', 'Value']);
  rows.push(['Market share', driverModel?.current_driver_mix?.market_share?.median ?? valueAt(drivers, 'share_market')]);
  rows.push(['Sector share', driverModel?.current_driver_mix?.sector_share?.median ?? valueAt(drivers, 'share_sector')]);
  rows.push(['Company-specific share', driverModel?.current_driver_mix?.company_share?.median ?? valueAt(drivers, 'share_idio')]);
  rows.push(['Beta market', valueAt(drivers, 'beta_market')]);
  rows.push(['Beta sector', valueAt(drivers, 'beta_sector')]);
  rows.push(['R-squared', valueAt(drivers, 'r_squared')]);
  rows.push(['Dominant driver', valueAt(currentSummary, 'dominant_driver_label')]);
  rows.push(['Confidence', valueAt(currentSummary, 'confidence_display')]);

  const monthlyHistory = asArray<AnyRecord>(driverModel?.monthly_history).length
    ? asArray<AnyRecord>(driverModel?.monthly_history)
    : asArray<AnyRecord>(drivers.monthly_history);
  if (monthlyHistory.length) {
    pushSection(rows, 'Monthly Driver History');
    rows.push(['Month', 'Period', 'Observations', 'Dominant driver', 'Regime', 'Market share', 'Sector share', 'Company share', 'Partial month']);
    monthlyHistory.forEach((item) => {
      const shares = asRecord(item.shares);
      rows.push([
        valueAt(item, 'month_label') || valueAt(item, 'month_key'),
        valueAt(item, 'period_label'),
        valueAt(item, 'n_obs'),
        valueAt(item, 'dominant_driver_label') || valueAt(item, 'dominant_driver'),
        valueAt(item, 'regime_label'),
        valueAt(asRecord(shares.market_share), 'median') || valueAt(item, 'share_market'),
        valueAt(asRecord(shares.sector_share), 'median') || valueAt(item, 'share_sector'),
        valueAt(asRecord(shares.company_share), 'median') || valueAt(item, 'share_company'),
        valueAt(item, 'partial_month'),
      ]);
    });
  }

  const leadLag = asRecord(drivers.lead_lag);
  const lags = asArray<CellValue>(leadLag.lags);
  const corrMarket = asArray<CellValue>(leadLag.corr_market);
  const corrSector = asArray<CellValue>(leadLag.corr_sector);
  if (lags.length) {
    pushSection(rows, 'Lead Lag');
    rows.push(['Lag', 'Market correlation', 'Sector correlation']);
    lags.forEach((lag, index) => rows.push([lag, corrMarket[index] ?? '', corrSector[index] ?? '']));
  }

  return rows;
}

function buildMarketStateSheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const q02Regime = report.q02?.regime_switching;
  const drivers = asRecord(report.series?.drivers);
  const driverRegime = asRecord(drivers.regime);
  const regimes: AnyRecord[] = q02Regime?.regimes?.length
    ? q02Regime.regimes.map((regime) => regime as unknown as AnyRecord)
    : asArray<AnyRecord>(driverRegime.regimes);
  const transitions = q02Regime?.transitions ?? asArray<unknown[]>(driverRegime.transitions);

  if (regimes.length) {
    pushSection(rows, 'State Profiles');
    rows.push(['ID', 'Label', 'Pct time', 'Days', 'Current probability', 'Dominant driver', 'Jump probability', 'Risk score', 'Liquidity score', 'Mean return pct', 'Volatility pct', 'Spread ticks']);
    regimes.forEach((regime) => {
      rows.push([
        valueAt(regime, 'id'),
        valueAt(regime, 'label'),
        valueAt(regime, 'pct_time'),
        valueAt(regime, 'n_days'),
        valueAt(regime, 'current_probability'),
        valueAt(regime, 'dominant_driver_label') || valueAt(regime, 'dominant_driver'),
        valueAt(regime, 'jump_probability'),
        valueAt(regime, 'risk_score'),
        valueAt(regime, 'liquidity_score'),
        valueAt(regime, 'mean_ret_pct'),
        valueAt(regime, 'volatility_pct'),
        asRecord(regime.metrics ?? regime.metrics_median).spread_ticks as CellValue,
      ]);
    });
  }

  if (transitions.length && regimes.length) {
    pushSection(rows, 'State Transitions');
    rows.push(['From \\ To', ...regimes.map((regime) => String(valueAt(regime, 'label') || `State ${valueAt(regime, 'id')}`))]);
    transitions.forEach((transitionRow, index) => {
      rows.push([
        valueAt(regimes[index] ?? {}, 'label') || `State ${index}`,
        ...asArray<CellValue>(transitionRow),
      ]);
    });
  }

  const stateProbabilities = asArray<AnyRecord>(q02Regime?.state_probabilities ?? report.q02?.driver_model?.state_probabilities);
  if (stateProbabilities.length) {
    pushSection(rows, 'State Probabilities');
    rows.push(...tableFromRecords(stateProbabilities, [
      ['ID', 'id'],
      ['Label', 'label'],
      ['Probability', 'probability'],
      ['Display', 'probability_display'],
      ['Basis', 'basis'],
    ]));
  }

  return rows;
}

function buildExecutionSheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const execution = asRecord(report.series.execution_dynamic);

  if (report.content.exec_check_tiles?.length) {
    pushSection(rows, 'Execution Tiles');
    rows.push(['Metric', 'Value', 'Note']);
    report.content.exec_check_tiles.forEach((tile) => rows.push([tile.title, tile.value, tile.note]));
  }

  const snapshot = asRecord(execution.snapshot);
  if (Object.keys(snapshot).length) {
    pushSection(rows, 'Current Book Snapshot');
    rows.push(...metricRows(snapshot, [
      ['Valid', 'valid'],
      ['Snapshot label', 'snapshot_label'],
      ['Spread pct', 'spread_pct'],
      ['Spread ticks', 'spread_ticks'],
      ['Mid price', 'mid_price'],
      ['Bid depth notional displayed', 'bid_depth_notional_displayed'],
      ['Ask depth notional displayed', 'ask_depth_notional_displayed'],
      ['Bid depth notional top10', 'bid_depth_notional_top10'],
      ['Ask depth notional top10', 'ask_depth_notional_top10'],
    ]));
  }

  if (report.series.order_book?.bids?.length || report.series.order_book?.asks?.length) {
    pushSection(rows, 'Order Book');
    rows.push(['Side', 'Level', 'Price', 'Quantity', 'Value']);
    report.series.order_book.bids?.forEach((level) => rows.push(['Bid', level.level, level.price, level.quantity, level.value]));
    report.series.order_book.asks?.forEach((level) => rows.push(['Ask', level.level, level.price, level.quantity, level.value]));
  }

  const historical = asRecord(execution.historical_trade_scenarios);
  const historicalScenarios = asArray<AnyRecord>(historical.scenarios);
  if (historicalScenarios.length) {
    pushSection(rows, 'Historical Trade Scenarios');
    rows.push(...tableFromRecords(historicalScenarios, [
      ['Key', 'key'],
      ['Label', 'label'],
      ['Quantile', 'quantile'],
      ['Trade notional', 'trade_notional'],
      ['Impact pct', 'impact_pct'],
      ['Filled pct', 'filled_pct'],
      ['Pct of bid depth', 'pct_of_bid_depth'],
      ['Pct of ADV', 'pct_of_adv'],
    ]));
  }

  const l3Orders = asArray<AnyRecord>(asRecord(execution.l3_sell_order_scenarios).orders);
  if (l3Orders.length) {
    pushSection(rows, 'L3 Sell Order Scenarios');
    rows.push(...tableFromRecords(l3Orders, [
      ['Rank', 'rank'],
      ['Notional', 'notional'],
      ['Impact pct', 'impact_pct'],
      ['Filled pct', 'filled_pct'],
      ['Pct of bid depth', 'pct_of_bid_depth'],
    ]));
  }

  const intradayRows = asArray<AnyRecord>(asRecord(execution.intraday_liquidity_profile).rows);
  if (intradayRows.length) {
    pushSection(rows, 'Execution Intraday Liquidity');
    rows.push(...tableFromRecords(intradayRows, [
      ['Bucket', 'bucket'],
      ['Spread pct', 'spread_pct'],
      ['Spread ticks', 'spread_ticks'],
      ['Bid depth notional', 'bid_depth_notional'],
      ['Ask depth notional', 'ask_depth_notional'],
    ]));
  }

  const peerExecutionRows = asArray<AnyRecord>(asRecord(execution.peer_execution_metrics).rows);
  if (peerExecutionRows.length) {
    pushSection(rows, 'Peer Trading Costs');
    rows.push([
      'Company',
      'Ticker',
      'L2 available',
      'Reason',
      'Spread pct',
      'Spread ticks',
      'Bid depth displayed',
      'Ask depth displayed',
      'ADV',
      'Replay size',
      'Replay impact pct',
      'Replay fill pct',
      'Replay pct ADV',
    ]);
    peerExecutionRows.forEach((peer) => {
      const snapshot = asRecord(peer.current_book_snapshot);
      const advMetrics = asRecord(peer.adv_metrics);
      const impacts = asArray<AnyRecord>(peer.sell_impact);
      const preferredImpact =
        impacts.find((impact) => valueAt(impact, 'valid') === true && valueAt(impact, 'trade_size_sgd') === 50000) ??
        impacts.find((impact) => valueAt(impact, 'valid') === true) ??
        impacts[0] ??
        {};
      rows.push([
        valueAt(peer, 'company_name') || valueAt(peer, 'ticker'),
        valueAt(peer, 'ticker'),
        valueAt(peer, 'valid'),
        valueAt(peer, 'reason'),
        valueAt(snapshot, 'spread_pct'),
        valueAt(snapshot, 'spread_ticks'),
        valueAt(snapshot, 'bid_depth_notional_displayed'),
        valueAt(snapshot, 'ask_depth_notional_displayed'),
        valueAt(advMetrics, 'adv_sgd'),
        valueAt(preferredImpact, 'trade_size_sgd'),
        valueAt(preferredImpact, 'impact_pct'),
        valueAt(preferredImpact, 'filled_pct'),
        valueAt(preferredImpact, 'pct_of_adv'),
      ]);
    });
  }

  const etf = asRecord(report.etf);
  const orderBook = asRecord(etf.order_book_snapshot);
  if (hasKeys(orderBook)) {
    pushSection(rows, 'ETF Order Book Snapshot');
    rows.push(...metricRows(orderBook, [
      ['Trading day', 'trading_day'],
      ['Snapshot timestamp', 'snapshot_timestamp'],
      ['Best bid', 'best_bid'],
      ['Best ask', 'best_ask'],
      ['Mid', 'mid'],
      ['Spread', 'spread'],
      ['Spread bps', 'spread_bps'],
      ['Band label', 'price_band_label'],
      ['Band bid levels', 'band_n_bid_levels'],
      ['Band ask levels', 'band_n_ask_levels'],
      ['Band bid value HKD', 'band_total_bid_value_hkd'],
      ['Band ask value HKD', 'band_total_ask_value_hkd'],
    ]));
  }

  const stress = asRecord(asRecord(etf.extras).stress_test);
  const stressScenarios = asArray<AnyRecord>(stress.scenarios);
  if (stressScenarios.length) {
    pushSection(rows, 'Stress-Test Depth Cover');
    rows.push(['Scenario', 'Notional HKD', 'Top-5 cover', 'Pct of top-5 depth']);
    stressScenarios.forEach((scenario) => {
      rows.push([
        valueAt(scenario, 'scenario'),
        valueAt(scenario, 'notional_hkd'),
        valueAt(scenario, 'cover_x'),
        valueAt(scenario, 'pct_of_top5_depth'),
      ]);
    });
  }

  const bandBids = asArray<AnyRecord>(orderBook.band_bids);
  const bandAsks = asArray<AnyRecord>(orderBook.band_asks);
  if (bandBids.length || bandAsks.length) {
    pushSection(rows, 'All Snapshot Levels Inside Band');
    rows.push(['Side', 'Level', 'Price', 'Size', 'Notional HKD']);
    bandBids.forEach((level) => rows.push(['Bid', valueAt(level, 'level'), valueAt(level, 'price'), valueAt(level, 'size'), valueAt(level, 'value_hkd')]));
    bandAsks.forEach((level) => rows.push(['Ask', valueAt(level, 'level'), valueAt(level, 'price'), valueAt(level, 'size'), valueAt(level, 'value_hkd')]));
  }

  return rows;
}

function buildTradingActivitySheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const trader = asRecord(report.series.trader_composition);
  const periods = asRecord(trader.periods);

  if (Object.keys(periods).length) {
    pushSection(rows, 'Trader Composition Periods');
    rows.push([
      'Period',
      'Trades',
      'Runs',
      'Trade days',
      'Retail trade pct',
      'Mixed trade pct',
      'Institution trade pct',
      'Unclassified trade pct',
      'Retail volume pct',
      'Mixed volume pct',
      'Institution volume pct',
      'Unclassified volume pct',
      'Avg trade size',
      'Median trade size',
      'Dominant bucket',
      'Dominant share',
    ]);
    Object.entries(periods).forEach(([key, rawSnapshot]) => {
      const snapshot = asRecord(rawSnapshot);
      const comp = asRecord(snapshot.composition);
      const tradeSize = asRecord(snapshot.trade_size);
      const tradeUnclear = valueAt(comp, 'unclear_pct') || (
        Number(valueAt(comp, 'ambiguous_pct') || 0) + Number(valueAt(comp, 'unobservable_pct') || 0)
      );
      const volumeUnclear = valueAt(comp, 'unclear_qty_pct') || (
        Number(valueAt(comp, 'ambiguous_qty_pct') || 0) + Number(valueAt(comp, 'unobservable_qty_pct') || 0)
      );
      rows.push([
        periodLabel(key),
        valueAt(snapshot, 'n_trades'),
        valueAt(snapshot, 'n_runs'),
        valueAt(snapshot, 'n_trade_days'),
        valueAt(comp, 'retail_pct'),
        valueAt(comp, 'mixed_pct'),
        valueAt(comp, 'instit_pct'),
        tradeUnclear,
        valueAt(comp, 'retail_qty_pct'),
        valueAt(comp, 'mixed_qty_pct'),
        valueAt(comp, 'instit_qty_pct'),
        volumeUnclear,
        valueAt(tradeSize, 'avg'),
        valueAt(tradeSize, 'median'),
        valueAt(snapshot, 'dominant_label') || valueAt(snapshot, 'dominant_bucket'),
        valueAt(snapshot, 'dominant_share'),
      ]);
    });
  } else if (Object.keys(trader).length) {
    pushSection(rows, 'Trader Composition');
    const comp = asRecord(trader.composition);
    rows.push(['Bucket', 'Pct']);
    rows.push(['Retail-like', valueAt(comp, 'retail_pct')]);
    rows.push(['Mixed', valueAt(comp, 'mixed_pct')]);
    rows.push(['Institution-like', valueAt(comp, 'instit_pct')]);
    rows.push(['Ambiguous', valueAt(comp, 'ambiguous_pct')]);
    rows.push(['Unobservable', valueAt(comp, 'unobservable_pct')]);
  }

  const overTime = Array.isArray(trader.over_time)
    ? asArray<AnyRecord>(trader.over_time)
    : asArray<AnyRecord>(asRecord(trader.over_time).periods);
  if (overTime.length) {
    pushSection(rows, 'Trader Composition Over Time');
    rows.push(...tableFromRecords(overTime, [
      ['Month', 'month'],
      ['Trades', 'n_trades'],
      ['Retail pct', 'retail_pct'],
      ['Mixed pct', 'mixed_pct'],
      ['Institution pct', 'instit_pct'],
      ['Retail qty pct', 'retail_qty_pct'],
      ['Mixed qty pct', 'mixed_qty_pct'],
      ['Institution qty pct', 'instit_qty_pct'],
      ['Avg trade size', 'avg_trade_size'],
      ['Total quantity', 'total_quantity'],
    ]));
  }

  const peerComparison = asArray<AnyRecord>(trader.peer_comparison);
  if (peerComparison.length) {
    pushSection(rows, 'Peer Trader Composition');
    rows.push(...tableFromRecords(peerComparison, [
      ['Ticker', 'ticker'],
      ['Currency', 'currency'],
      ['Target', 'is_target'],
      ['Retail pct', 'retail_pct'],
      ['Mixed pct', 'mixed_pct'],
      ['Institution pct', 'instit_pct'],
      ['Avg trade size', 'avg_trade_size'],
      ['Dominant bucket', 'dominant_label'],
    ]));
  }

  const priceMoving = report.series.price_moving_trades;
  if (priceMoving) {
    pushSection(rows, 'Price-Moving Trades');
    rows.push(['Metric', 'Value']);
    rows.push(['Total trades', priceMoving.total_trades]);
    rows.push(['Price-moving trades', priceMoving.price_moving_trades]);
    rows.push(['Pct price-moving', priceMoving.pct_price_moving]);
    rows.push(['All movers count', priceMoving.all_movers?.count]);
    rows.push(['All movers avg size', priceMoving.all_movers?.avg_size]);
    rows.push(['Positive movers count', priceMoving.positive_movers?.count]);
    rows.push(['Negative movers count', priceMoving.negative_movers?.count]);

    const moverRows: Array<[string, AnyRecord]> = [
      ['All price-moving', asRecord(priceMoving.all_movers)],
      ['Positive (up)', asRecord(priceMoving.positive_movers)],
      ['Negative (down)', asRecord(priceMoving.negative_movers)],
    ];
    const hasBreakdown = moverRows.some(([, row]) => (
      isFiniteNumber(row.retail_pct)
      || isFiniteNumber(row.mixed_pct)
      || isFiniteNumber(row.instit_pct)
      || isFiniteNumber(row.unclear_pct)
    ));
    if (hasBreakdown) {
      pushSection(rows, 'Who Sat Behind Price-Moving Trades');
      rows.push(['Direction', 'Retail-like', 'Mixed', 'Institution-like', 'Unclassified']);
      moverRows.forEach(([label, row]) => {
        rows.push([
          label,
          valueAt(row, 'retail_pct'),
          valueAt(row, 'mixed_pct'),
          valueAt(row, 'instit_pct'),
          valueAt(row, 'unclear_pct'),
        ]);
      });
    }
  }

  const etf = asRecord(report.etf);
  const etfPersona = asRecord(etf.etf_persona);
  const etfPersonaPeriods = asRecord(etfPersona.periods);
  const primaryPeriodKey = String(valueAt(etfPersona, 'primary_period') || '');
  const primaryPeriod = asRecord(etfPersonaPeriods[primaryPeriodKey] ?? Object.values(etfPersonaPeriods)[0]);
  const primaryComposition = Object.values(asRecord(primaryPeriod.composition)).map(asRecord);
  if (primaryComposition.length) {
    pushSection(rows, 'ETF Execution Segments');
    rows.push(['Period', 'Bucket', 'Turnover share', 'Turnover HKD', 'Market orders', 'Trades', 'Avg market order HKD']);
    primaryComposition.forEach((bucket) => {
      rows.push([
        valueAt(primaryPeriod, 'label') || primaryPeriodKey,
        valueAt(bucket, 'label'),
        valueAt(bucket, 'turnover_share'),
        valueAt(bucket, 'turnover_hkd'),
        valueAt(bucket, 'runs'),
        valueAt(bucket, 'prints'),
        valueAt(bucket, 'avg_run_hkd'),
      ]);
    });
  }

  const etfOverTime = asArray<AnyRecord>(etfPersona.over_time);
  if (etfOverTime.length) {
    pushSection(rows, 'ETF Execution Segment Mix Through Time');
    rows.push(['Month', 'Retail-sized turnover share', 'Mixed turnover share', 'Institutional stable turnover share', 'Institutional active turnover share', 'Unclassified turnover share']);
    etfOverTime.forEach((item) => {
      const shares = asRecord(item.shares);
      rows.push([
        valueAt(item, 'month'),
        valueAt(asRecord(shares.retail_sized), 'turnover_share'),
        valueAt(asRecord(shares.mixed_tickets), 'turnover_share'),
        valueAt(asRecord(shares.institutional_stable), 'turnover_share'),
        valueAt(asRecord(shares.institutional_active), 'turnover_share'),
        valueAt(asRecord(shares.unclassified), 'turnover_share'),
      ]);
    });
  }

  const flow = asRecord(asRecord(etf.extras).flow_signal_latest);
  if (hasKeys(flow)) {
    pushSection(rows, 'Trade-Imbalance Flow Signal');
    rows.push(['Metric', 'Value']);
    rows.push(['Buy-triggered share', valueAt(flow, 'buy_trigger_share')]);
    rows.push(['Sell-triggered share', valueAt(flow, 'sell_trigger_share')]);
    rows.push(['30-day average net trigger', valueAt(flow, 'avg_net_buy_trigger_share')]);
  }

  const dailySeries = asRecord(etf.daily_series);
  const dates = asArray<string>(dailySeries.trading_day);
  if (dates.length) {
    pushSection(rows, 'ETF Daily Trading Series');
    rows.push(['Date', 'Close', 'Volume', 'Turnover HKD', 'Spread bps TW', 'Bid depth 2pct', 'Ask depth 2pct', 'Bid depth 5pct', 'Ask depth 5pct']);
    dates.forEach((date, index) => {
      rows.push([
        date,
        asArray(dailySeries.close)[index] as CellValue,
        asArray(dailySeries.volume)[index] as CellValue,
        asArray(dailySeries.turnover_hkd)[index] as CellValue,
        asArray(dailySeries.spread_bps_tw)[index] as CellValue,
        asArray(dailySeries.bid_notional_band_2pct_tw)[index] as CellValue,
        asArray(dailySeries.ask_notional_band_2pct_tw)[index] as CellValue,
        asArray(dailySeries.bid_notional_band_5pct_tw)[index] as CellValue,
        asArray(dailySeries.ask_notional_band_5pct_tw)[index] as CellValue,
      ]);
    });
  }

  return rows;
}

function buildIntradaySheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const intraday = report.series.intraday;

  if (intraday?.session) {
    pushSection(rows, 'Session Distribution');
    rows.push(['Period', 'Opening', 'Continuous', 'Closing', 'Auctions', 'Other']);
    Object.entries(intraday.session).forEach(([period, session]) => {
      rows.push([period, session.opening, session.continuous, session.closing, session.auctions, session.other ?? '']);
    });
  }

  if (intraday?.profile_buckets?.length) {
    pushSection(rows, 'Trading Activity By Time Of Day');
    rows.push(['Time', 'Average share']);
    intraday.profile_buckets.forEach((bucket) => rows.push([bucket.time, bucket.avg_share]));
  }

  if (intraday?.peers_hhi_rows?.length) {
    pushSection(rows, 'Peer Intraday Concentration');
    rows.push(['Ticker', 'Auction pct', 'HHI', 'Interpretation', 'Target']);
    intraday.peers_hhi_rows.forEach((row) => rows.push([row.ticker, row.auctions_pct, row.hhi, row.interp?.text ?? '', row.interp?.you ?? false]));
  }

  const etf = asRecord(report.etf);
  const intradayBuckets = asArray<AnyRecord>(asRecord(etf.intraday_profile).buckets);
  if (intradayBuckets.length) {
    pushSection(rows, 'ETF Intraday Trading Pattern');
    rows.push(['Time', 'Average volume share', 'Average trade share']);
    intradayBuckets.forEach((bucket) => {
      rows.push([
        valueAt(bucket, 'time') || valueAt(bucket, 'bucket'),
        valueAt(bucket, 'avg_volume_share'),
        valueAt(bucket, 'avg_trades_share'),
      ]);
    });
  }

  return rows;
}

function buildShortSellingSheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const short = asRecord(report.series.short_selling ?? asRecord(report.etf).short_block);
  if (!Object.keys(short).length) return rows;

  const periods = asRecord(short.periods);
  if (Object.keys(periods).length) {
    pushSection(rows, 'Short Selling Periods');
    rows.push(['Period', 'Valid', 'Average short ratio', 'Max short ratio', 'Interpretation']);
    Object.entries(periods).forEach(([key, rawPeriod]) => {
      const stats = asRecord(asRecord(rawPeriod).stats ?? rawPeriod);
      rows.push([
        key,
        valueAt(stats, 'valid'),
        valueAt(stats, 'avg_short_ratio'),
        valueAt(stats, 'max_short_ratio'),
        valueAt(stats, 'interpretation'),
      ]);
    });
  } else {
    pushSection(rows, 'Short Selling Summary');
    rows.push(...metricRows(short, [
      ['30D average', 'avg_short_pct_30d'],
      ['7D average', 'avg_short_pct_7d'],
      ['30D peak', 'max_short_pct_30d'],
      ['Return correlation', 'correlation_with_return'],
    ]));
  }

  const sblPool = asRecord(short.sbl_pool);
  if (Object.keys(sblPool).length) {
    pushSection(rows, 'SBL Lending Pool');
    rows.push(...metricRows(sblPool, [
      ['Valid', 'valid'],
      ['Lending pool', 'lending_pool'],
      ['Lending pool value', 'lending_pool_value'],
      ['Latest price', 'latest_price'],
      ['Lending rate pct', 'lending_rate_pct'],
      ['Borrowing rate pct', 'borrowing_rate_pct'],
      ['Pool as pct ADV', 'pool_as_pct_adv'],
      ['Days to liquidate', 'days_to_liquidate'],
      ['Estimated impact pct', 'estimated_impact_pct'],
      ['Timestamp', 'timestamp'],
    ]));
  }

  const peaks = asArray<AnyRecord>(short.peaks);
  if (peaks.length) {
    pushSection(rows, 'Short Selling Peak Days');
    const isEtfShort = peaks.some((peak) => 'short_pct' in peak || 'short_value_hkd' in peak);
    if (isEtfShort) {
      rows.push(['Date', 'Short share', 'Short value HKD', 'Turnover HKD', 'Close']);
      peaks.forEach((peak) => rows.push([
        valueAt(peak, 'date'),
        valueAt(peak, 'short_pct'),
        valueAt(peak, 'short_value_hkd'),
        valueAt(peak, 'turnover_hkd'),
        valueAt(peak, 'close'),
      ]));
    } else {
      rows.push(...tableFromRecords(peaks, [
        ['Date', 'date'],
        ['Short ratio', 'short_ratio'],
        ['Return pct', 'return_pct'],
      ]));
    }
  }

  const shortRows = asArray<AnyRecord>(asRecord(short.short_series).rows).length
    ? asArray<AnyRecord>(asRecord(short.short_series).rows)
    : asArray<AnyRecord>(short.series);
  if (shortRows.length) {
    pushSection(rows, 'Short Selling Time Series');
    const isEtfShortSeries = shortRows.some((row) => 'short_pct' in row || 'short_value_hkd' in row);
    if (isEtfShortSeries) {
      rows.push(['Date', 'Short share', 'Close']);
      shortRows.forEach((row) => rows.push([
        valueAt(row, 'date'),
        valueAt(row, 'short_pct'),
        valueAt(row, 'close'),
      ]));
    } else {
      rows.push(...tableFromRecords(shortRows, [
        ['Date', 'date'],
        ['Short ratio', 'short_ratio'],
        ['Short volume', 'short_vol'],
        ['Total volume', 'total_vol'],
        ['Return', 'return'],
        ['Close', 'close'],
      ]));
    }
  }

  const peerComparison = asArray<AnyRecord>(short.peer_comparison);
  if (peerComparison.length) {
    pushSection(rows, 'Peer Short Selling');
    rows.push(...tableFromRecords(peerComparison, [
      ['Ticker', 'ticker'],
      ['Average short ratio', 'avg_short_ratio'],
      ['Max short ratio', 'max_short_ratio'],
      ['Target', 'is_target'],
    ]));
  }

  return rows;
}

function buildEtfRegimeStudySheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const etf = asRecord(report.etf);
  const regimeStudy = asRecord(etf.regime_study);
  if (!hasKeys(regimeStudy)) return rows;

  const current = asRecord(regimeStudy.current);
  if (hasKeys(current)) {
    pushSection(rows, 'Current ETF Regime');
    rows.push(...metricRows(current, [
      ['Key', 'key'],
      ['Label', 'label'],
      ['Short label', 'short_label'],
      ['Similarity', 'similarity'],
      ['Close', 'close'],
      ['Turnover HKD', 'turnover_hkd'],
      ['Spread bps', 'spread_bps'],
      ['Quote uptime', 'quote_uptime'],
      ['L1 depth HKD', 'depth_l1_hkd'],
      ['Depth band 5pct HKD', 'depth_band_5pct_hkd'],
      ['Realized volatility 10D', 'rv_10d'],
      ['Abs return 1D', 'abs_ret_1d'],
      ['Net buy trigger', 'net_buy_trigger'],
      ['Buy trigger share', 'buy_trigger_share'],
      ['Sell trigger share', 'sell_trigger_share'],
      ['Short pct', 'short_pct'],
    ]));
  }

  const regimes = asArray<AnyRecord>(regimeStudy.regimes);
  if (regimes.length) {
    pushSection(rows, 'ETF Regime Profiles');
    rows.push(...tableFromRecords(regimes, [
      ['Key', 'key'],
      ['Label', 'label'],
      ['Short label', 'short_label'],
      ['Days', 'n_days'],
      ['Share of days', 'share_days'],
      ['Start', 'date_start'],
      ['End', 'date_end'],
      ['Avg abs return 1D', 'avg_abs_ret_1d'],
      ['Avg RV 10D', 'avg_rv_10d'],
      ['Avg turnover HKD', 'avg_turnover_hkd'],
      ['Avg spread bps', 'avg_spread_bps'],
      ['Avg quote uptime', 'avg_quote_uptime'],
      ['Avg L1 depth HKD', 'avg_depth_l1_hkd'],
      ['Avg 5pct depth HKD', 'avg_depth_band_5pct_hkd'],
      ['Avg abs net trigger', 'avg_abs_net_trigger'],
    ]));
  }

  const timeline = asArray<AnyRecord>(regimeStudy.timeline);
  if (timeline.length) {
    pushSection(rows, 'ETF Regime Timeline');
    rows.push(...tableFromRecords(timeline, [
      ['Date', 'date'],
      ['Regime key', 'regime_key'],
      ['Regime label', 'regime_label'],
      ['Short label', 'regime_short_label'],
      ['Similarity', 'similarity'],
      ['Close', 'close'],
      ['Turnover HKD', 'turnover_hkd'],
      ['Spread bps', 'spread_bps'],
      ['RV 10D', 'rv_10d'],
      ['L1 depth HKD', 'depth_l1_hkd'],
      ['Depth band 5pct HKD', 'depth_band_5pct_hkd'],
      ['Net buy trigger', 'net_buy_trigger'],
    ]));
  }

  return rows;
}

function buildEtfMacroSheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const etf = asRecord(report.etf);
  const macro = asRecord(etf.macro_regime);
  if (!hasKeys(macro)) return rows;

  pushSection(rows, 'Macro Regime Summary');
  rows.push(['Metric', 'Value']);
  rows.push(['Sample period', valueAt(macro, 'sample_period')]);

  const playbookRows: Row[] = [
    ['Range-Bound Income', 'High', 'Sideways or gradually rising market', 'Available premium with controlled realized volatility', 'Best alignment with income objective', 'Position as income-oriented China equity exposure', 'Income-oriented China equity exposure in a range-bound market'],
    ['RMB Strength / China Recovery', 'Constructive', 'Improving China/HK equity tone', 'Moderate, not panic-driven', 'Participates, but may lag sharp rallies', 'Explain recovery participation with income', 'Recovery participation with income'],
    ['HKD Funding Shift / Liquidity Watch', 'Monitoring', 'Equity signal can be mixed', 'Liquidity and funding quality matter', 'Trading quality more important than return forecast', 'Watch spreads, premium/discount, market-maker depth, creations/redemptions', 'Liquidity-aware positioning'],
    ['Equity Drawdown / Volatility Stress', 'Caution', 'Equities falling or risk sentiment deteriorating', 'High realized stress, not clean premium', 'Option income can cushion, but equity risk remains', 'Emphasize risk disclosure and equity exposure', 'Income cushion, not downside protection'],
  ];
  pushSection(rows, 'Macro Regime Playbook');
  rows.push(['Regime', 'Product fit', 'Market backdrop', 'Volatility quality', 'ETF behavior', 'Issuer action', 'Client message']);
  rows.push(...playbookRows);

  const performance = asArray<AnyRecord>(macro.regime_performance);
  if (performance.length) {
    const performanceRowFor = (needle: string) => performance.find((item) => String(valueAt(item, 'empirical_label')).toLowerCase() === needle.toLowerCase());
    const dayCountRows: Array<[CellValue, AnyRecord | undefined]> = [
      ['Range-Bound Income', performanceRowFor('Range-bound income regime')],
      ['RMB Strength / China Recovery', performanceRowFor('RMB strength / China recovery')],
      ['HKD Funding Shift / Liquidity Watch', performanceRowFor('Liquidity normalization / HKD funding shift')],
      ['Equity Drawdown / Volatility Stress', performanceRowFor('Equity drawdown / volatility stress')],
    ];
    pushSection(rows, 'Macro Regime Day Counts');
    rows.push(['Regime', 'Days']);
    dayCountRows.forEach(([label, perfRow]) => rows.push([label, perfRow ? valueAt(perfRow, 'number_of_days') : '']));
  }

  const series = asArray<AnyRecord>(macro.regime_series);
  if (series.length) {
    pushSection(rows, 'Macro Regime Chart Data');
    rows.push(['Date', 'Regime', 'HSCEI context indexed', 'Range-bound income indexed', 'HKD funding shift indexed', 'RMB recovery indexed', 'Stress indexed']);
    series.forEach((item, index) => {
      const regimeId = Number(valueAt(item, 'regime_id'));
      const etfIndexed = normalizedSeriesValue(series, 'market_total_return', index);
      rows.push([
        valueAt(item, 'date'),
        valueAt(item, 'regime_label'),
        normalizedSeriesValue(series, 'hscei_index', index),
        regimeId === 0 ? etfIndexed : '',
        regimeId === 1 ? etfIndexed : '',
        regimeId === 2 ? etfIndexed : '',
        regimeId === 3 ? etfIndexed : '',
      ]);
    });
  }

  return rows;
}

function buildEtfProductSheet(report: ReportData): Row[] {
  const rows: Row[] = [];
  const etf = asRecord(report.etf);
  const meta = asRecord(etf.meta);
  if (!hasKeys(meta)) return rows;

  pushSection(rows, 'ETF Profile');
  rows.push(...metricRows(meta, [
    ['Ticker', 'ticker'],
    ['Ticker full', 'ticker_full'],
    ['Name', 'name'],
    ['Short name', 'short_name'],
    ['Exchange', 'exchange'],
    ['Market code', 'market_code'],
    ['Issuer', 'issuer'],
    ['Fund manager', 'fund_manager'],
    ['Underlying', 'underlying'],
    ['Asset class', 'asset_class'],
    ['Strategy', 'strategy'],
    ['Base currency', 'base_currency'],
    ['Trading currency', 'trading_currency'],
    ['Lot size', 'lot_size'],
    ['Listing date', 'listing_date'],
    ['TER', 'ter'],
    ['Distribution', 'distribution'],
    ['Replication', 'replication'],
    ['Stamp duty', 'stamp_duty'],
    ['Short sell allowed', 'short_sell_allowed'],
    ['IOPV provider', 'iopv_provider'],
  ]));

  const marketMakers = asArray<CellValue>(meta.market_makers);
  if (marketMakers.length) {
    pushSection(rows, 'Market Makers');
    rows.push(['Market maker']);
    marketMakers.forEach((maker) => rows.push([maker]));
  }

  const counters = asArray<AnyRecord>(meta.counters);
  if (counters.length) {
    pushSection(rows, 'Listed Counters');
    rows.push(...tableFromRecords(counters, [
      ['Code', 'code'],
      ['Currency', 'currency'],
    ]));
  }

  pushSection(rows, 'NAV / AUM');
  rows.push(...metricRows(meta, [
    ['AUM HKD m', 'aum_hkd_m'],
    ['Units outstanding m', 'units_outstanding_m'],
    ['NAV latest', 'nav_latest'],
    ['NAV date', 'nav_date'],
    ['Premium vs NAV fraction', 'premium_vs_nav_frac'],
    ['Gross TTM yield pct', 'yield_gross_ttm_pct'],
    ['TTM distribution payment count', 'ttm_distribution_payment_count'],
    ['Market data as of', 'market_data_asof'],
    ['NAV snapshot date', 'nav_snapshot_date'],
  ]));

  const dividends = asArray<AnyRecord>(etf.dividend_history);
  if (dividends.length) {
    pushSection(rows, 'Distributions');
    rows.push(['Announcement', 'Description', 'Currency', 'Amount', 'Ex-date', 'Payable']);
    dividends.forEach((dividend) => {
      rows.push([
        valueAt(dividend, 'announce_date'),
        valueAt(dividend, 'description'),
        valueAt(dividend, 'currency'),
        valueAt(dividend, 'amount'),
        valueAt(dividend, 'ex_date'),
        valueAt(dividend, 'payable_date'),
      ]);
    });
  }

  return rows;
}

function sanitizeSheetName(name: string, usedNames: Set<string>): string {
  const base = name.replace(/[\\/?*[\]:]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 31) || 'Sheet';
  let candidate = base;
  let suffix = 2;
  while (usedNames.has(candidate)) {
    const suffixText = ` ${suffix}`;
    candidate = `${base.slice(0, 31 - suffixText.length)}${suffixText}`;
    suffix += 1;
  }
  usedNames.add(candidate);
  return candidate;
}

function escapeXml(value: string): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function cellXml(value: CellValue): string {
  if (value === null || value === undefined || value === '') return '<Cell><Data ss:Type="String"></Data></Cell>';
  if (typeof value === 'boolean') return `<Cell><Data ss:Type="Boolean">${value ? 1 : 0}</Data></Cell>`;
  if (typeof value === 'number' && Number.isFinite(value)) return `<Cell><Data ss:Type="Number">${value}</Data></Cell>`;
  return `<Cell><Data ss:Type="String">${escapeXml(String(value))}</Data></Cell>`;
}

function sheetXml(sheet: Sheet, usedNames: Set<string>): string {
  const name = sanitizeSheetName(sheet.name, usedNames);
  const rows = sheet.rows
    .map((row) => `<Row>${row.map(cellXml).join('')}</Row>`)
    .join('');
  return `<Worksheet ss:Name="${escapeXml(name)}"><Table>${rows}</Table></Worksheet>`;
}

function buildWorkbookXml(sheets: Sheet[]): string {
  const usedNames = new Set<string>();
  return `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:x="urn:schemas-microsoft-com:office:excel"
  xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
  xmlns:html="http://www.w3.org/TR/REC-html40">
  ${sheets.map((sheet) => sheetXml(sheet, usedNames)).join('')}
</Workbook>`;
}

function buildWorkbookSheets(report: ReportData): Sheet[] {
  const sheets: Sheet[] = [];
  addSheet(sheets, 'Overview', buildOverviewSheet(report));
  addSheet(sheets, 'Liquidity', buildLiquiditySheet(report));
  addSheet(sheets, 'Performance Returns', buildPerformanceReturnsSheet(report));
  addSheet(sheets, 'Market Performance', buildMarketPerformanceSheet(report));
  addSheet(sheets, 'Peer Analysis', buildPeerAnalysisSheet(report));
  addSheet(sheets, 'Drivers', buildDriversSheet(report));
  addSheet(sheets, 'Market State', buildMarketStateSheet(report));
  addSheet(sheets, 'Execution', buildExecutionSheet(report));
  addSheet(sheets, 'Trading Activity', buildTradingActivitySheet(report));
  addSheet(sheets, 'Intraday', buildIntradaySheet(report));
  addSheet(sheets, 'Short Selling', buildShortSellingSheet(report));
  addSheet(sheets, 'ETF Regime Study', buildEtfRegimeStudySheet(report));
  addSheet(sheets, 'ETF Macro', buildEtfMacroSheet(report));
  addSheet(sheets, 'ETF Product NAV', buildEtfProductSheet(report));
  return sheets;
}

function filenameForReport(report: ReportData): string {
  const slug = [report.meta.market, report.meta.ticker, report.meta.asof_date]
    .filter(Boolean)
    .join('_')
    .replace(/[^A-Za-z0-9_-]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
  return `${slug || 'liquidityiq_report'}_export.xls`;
}

export function downloadReportWorkbook(report: ReportData): void {
  const sheets = buildWorkbookSheets(report);
  const workbookXml = buildWorkbookXml(sheets.length ? sheets : [{ name: 'Overview', rows: buildOverviewSheet(report) }]);
  const blob = new Blob([workbookXml], { type: 'application/vnd.ms-excel;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filenameForReport(report);
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
