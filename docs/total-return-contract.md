# Total Return payload compatibility

The renderer supports both existing classic reports and the expanded return
section for `XSES:CRPU` (Sasseur) and `XSES:5E2` (Seatrium). No manual mode
setting is required.

The report payload may carry the section in `reportData.series.total_returns`
or `reportData.q01.total_returns`. For the two supported companies, the UI and
Excel export share `resolveTotalReturns` and prefer a valid block containing:

```json
{
  "schema_version": 2,
  "scope": "XSES:CRPU",
  "default_period": "summary",
  "periods": [
    {"key": "2026-Q3", "label": "Q3 2026 (QTD)", "start_date": "2026-07-01", "end_date": "2026-09-28"}
  ],
  "rows": []
}
```

`rows` must contain the company and available benchmark rows; the empty array
above only illustrates the envelope. Each row contains summary metrics and
`period_returns` keyed by quarter. Metric metadata includes `basis_label`,
`basis`, `source`, `coverage_note`, `available`, and actual endpoint dates.
Unavailable metrics display N/A even if a stale numeric value is present.

A matching v2 block takes precedence over a classic copy in the other
location. Unversioned or version-1 blocks retain the classic view. Unknown,
malformed or mismatched versions fall back to a valid classic copy; the UI
never interprets an unknown version as v2. Other companies are unchanged.

Company cash-inclusive returns and index price returns carry distinct labels.
Quarterly selection uses the metrics provided by the report and does not
recalculate financial values in the browser.

Publishing through the report service uploads data; this UI code must also be
deployed in the hosted renderer. The publication envelope remains unchanged:
`{exchangeCode, ticker, date, report: {reportData, peerMethodology}}`.

Run the compatibility checks with:

```sh
node scripts/check_total_return_compatibility.mjs
```
