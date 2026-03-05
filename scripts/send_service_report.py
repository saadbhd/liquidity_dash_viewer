#!/usr/bin/env python3
import argparse
import json
import os
import subprocess
import urllib.error
import urllib.request
from pathlib import Path

try:
    import requests  # type: ignore
except ModuleNotFoundError:
    requests = None


DEFAULT_API_URL = "https://liquiditypulse-api.deltablock.io"


def extract_report_json(ts_file: Path) -> dict:
    cmd = ["node", "scripts/report_json_from_ts.mjs", str(ts_file)]
    result = subprocess.run(cmd, check=True, capture_output=True, text=True)
    return json.loads(result.stdout)


def post_payload(api_url: str, api_key: str, payload: dict) -> None:
    endpoint = f"{api_url.rstrip('/')}/api/v1/service/reports"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    if requests is not None:
        res = requests.post(endpoint, headers=headers, json=payload, timeout=30)
        print("status:", res.status_code)
        print("body:", res.text)
        res.raise_for_status()
        return

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(endpoint, data=data, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = resp.read().decode("utf-8")
            print("status:", resp.status)
            print("body:", body)
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        print("status:", e.code)
        print("body:", body)
        raise


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Load REPORT_DATA from a TS file, convert to JSON like message.txt "
            "(reportData + peerMethodology), and send it to the service API."
        )
    )
    parser.add_argument("ts_file", help="Path to report ts file (example: src/data/xses_tku_2026-03-03.ts)")
    parser.add_argument("--api-url", default=os.getenv("LIQUIDITYPULSE_API_URL", DEFAULT_API_URL))
    parser.add_argument("--api-key", default=os.getenv("SERVICE_API_KEY"))
    parser.add_argument("--ticker", default=None, help="Optional override. Default: reportData.meta.ticker")
    parser.add_argument("--date", default=None, help="Optional override. Default: reportData.meta.asof_date")
    parser.add_argument("--dry-run", action="store_true", help="Print payload summary without POST.")
    args = parser.parse_args()

    ts_file = Path(args.ts_file).expanduser().resolve()
    if not ts_file.exists():
        raise FileNotFoundError(f"TS file not found: {ts_file}")

    report_json = extract_report_json(ts_file)
    meta = (report_json.get("reportData") or {}).get("meta") or {}
    ticker = args.ticker or meta.get("ticker")
    date = args.date or meta.get("asof_date")

    if not ticker:
        raise ValueError("Ticker not found in reportData.meta.ticker (and --ticker not provided).")
    if not date:
        raise ValueError("Date not found in reportData.meta.asof_date (and --date not provided).")

    payload = {
        "ticker": ticker,
        "date": date,
        "report": report_json,
    }

    print(f"ts file: {ts_file}")
    print(f"ticker: {ticker}")
    print(f"date: {date}")
    print(f"report keys: {list(report_json.keys())}")

    if args.dry_run:
        print("dry-run: payload prepared, POST skipped")
        return

    if not args.api_key:
        raise ValueError("Missing API key. Set SERVICE_API_KEY or pass --api-key.")

    post_payload(args.api_url, args.api_key, payload)


if __name__ == "__main__":
    main()
