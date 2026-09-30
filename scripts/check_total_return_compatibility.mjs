import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import vm from 'node:vm';

// Use the project's existing TypeScript dependency; no test runner installation.
const source = readFileSync(new URL('../src/utils/totalReturnPresentation.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
const exports = {};
vm.runInNewContext(compiled.outputText, { exports }, { filename: fileURLToPath(new URL('../src/utils/totalReturnPresentation.ts', import.meta.url)) });
const { isScopedReturnsReport, resolveTotalReturns } = exports;
const legacy = { rows: [{ key: 'target', ytd_total_return: { value: 0.1 } }] };
const detailed = { ...legacy, schema_version: 2, scope: 'XSES:CRPU', periods: [{ key: '2026-Q3', label: 'Q3 2026' }] };
const report = (series, q01, market = 'XSES', ticker = 'CRPU') => ({ meta: { market, ticker }, series: { total_returns: series }, q01: { total_returns: q01 } });

assert.equal(resolveTotalReturns(report(legacy)).mode, 'classic');
assert.equal(resolveTotalReturns(report({ ...legacy, schema_version: 1 })).mode, 'classic');
assert.equal(resolveTotalReturns(report(detailed)).mode, 'quarterly');
assert.equal(resolveTotalReturns(report(null, detailed)).mode, 'quarterly');
assert.equal(resolveTotalReturns(report(legacy, detailed)).block, detailed);
assert.equal(resolveTotalReturns(report(detailed, legacy)).block, detailed);
assert.equal(resolveTotalReturns(report({}, detailed)).block, detailed);
assert.equal(resolveTotalReturns(report({ rows: [] }, legacy)).block, legacy);
assert.equal(resolveTotalReturns(report({ ...detailed, scope: 'XSES:5E2' }, legacy)).block, legacy);
assert.equal(resolveTotalReturns(report({ ...detailed, scope: undefined }, legacy)).block, legacy);
assert.equal(resolveTotalReturns(report({ ...detailed, schema_version: 3 }, legacy)).block, legacy);
assert.equal(resolveTotalReturns(report({ ...detailed, schema_version: 3 })).mode, 'none');
assert.equal(resolveTotalReturns(report({ ...detailed, periods: {} }, legacy)).block, legacy);
assert.equal(resolveTotalReturns(report({ ...detailed, periods: [null] }, legacy)).block, legacy);
assert.equal(resolveTotalReturns(report({ ...detailed, rows: [null] }, legacy)).block, legacy);
assert.equal(resolveTotalReturns(report(detailed, null, ' xses ', ' crpu ')).mode, 'quarterly');
assert.equal(resolveTotalReturns(report({ ...detailed, scope: 'XSES:5E2' }, null, 'XSES', '5E2')).mode, 'quarterly');
assert.equal(isScopedReturnsReport(report(null, null, 'XSES', 'TKU')), false);
assert.equal(isScopedReturnsReport(report(null, null, 'XHKG', 'CRPU')), false);
assert.equal(resolveTotalReturns(report()).mode, 'none');
assert.equal(resolveTotalReturns(report({ ...detailed, scope: {} }, legacy)).block, legacy);
console.log('PASS: 21 return-contract checks — v2 in either Alerts payload location, classic compatibility, empty/malformed/stale copy fallback, unknown versions, and exact company scope.');
