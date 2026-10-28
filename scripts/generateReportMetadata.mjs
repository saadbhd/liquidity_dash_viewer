#!/usr/bin/env node
// Read report headers only; never import or compile the large report payloads.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = path.resolve(process.argv[2] || path.join(root, 'src/data'));
const output = path.resolve(process.argv[3] || path.join(dataDir, 'reportsMetadata.json'));
const pattern = /^([a-z0-9]{4})_(.+)_(\d{4}-\d{2}-\d{2})(?:_([a-z0-9][a-z0-9._-]*))?\.ts$/i;

function readMeta(file) {
    const fd = fs.openSync(file, 'r');
    try {
        // Generated reports put meta at the start of REPORT_DATA. Bound reads
        // even if a malformed report or a large unrelated file reaches here.
        for (const limit of [64 * 1024, 256 * 1024, 1024 * 1024]) {
            const buffer = Buffer.alloc(limit);
            const length = fs.readSync(fd, buffer, 0, limit, 0);
            const source = buffer.subarray(0, length).toString('utf8');
            const declaration = /export\s+const\s+REPORT_DATA\b[^=]*=/.exec(source);
            const body = declaration ? source.slice(declaration.index + declaration[0].length) : source;
            const start = /["']meta["']\s*:\s*\{/.exec(body);
            if (start) {
                const objectStart = start.index + start[0].lastIndexOf('{');
                let depth = 0;
                let quoted = false;
                let escaped = false;
                for (let i = objectStart; i < body.length; i++) {
                    const ch = body[i];
                    if (quoted) {
                        if (escaped) escaped = false;
                        else if (ch === '\\') escaped = true;
                        else if (ch === '"') quoted = false;
                    } else if (ch === '"') quoted = true;
                    else if (ch === '{') depth++;
                    else if (ch === '}' && --depth === 0) {
                        try { return JSON.parse(body.slice(objectStart, i + 1)); }
                        catch { return {}; }
                    }
                }
            }
            if (length < limit) break;
        }
        return {};
    } finally {
        fs.closeSync(fd);
    }
}

const catalog = {};
for (const name of fs.readdirSync(dataDir).sort()) {
    const match = pattern.exec(name);
    if (!match) continue;
    const [, market, ticker, date] = match;
    const meta = readMeta(path.join(dataDir, name));
    catalog[`./${name}`] = {
        market: meta.market || market.toUpperCase(),
        ticker: meta.ticker || ticker.toUpperCase(),
        company: meta.company || meta.company_name || ticker.toUpperCase(),
        asof_date: meta.asof_date || date,
        sector: meta.sector || meta.industry || '—',
        market_cap_category: meta.market_cap_category || '—',
    };
}
fs.writeFileSync(output, `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`Report metadata: ${Object.keys(catalog).length} reports (${fs.statSync(output).size} bytes)`);
