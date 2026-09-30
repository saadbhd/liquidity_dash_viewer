import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { buildSync } from 'esbuild';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
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
const seatriumDetailed = { ...detailed, scope: 'XSES:5E2' };
assert.equal(resolveTotalReturns(report(seatriumDetailed, null, 'XSES', '5E2')).mode, 'none');
assert.equal(resolveTotalReturns(report(null, seatriumDetailed, 'XSES', '5E2')).mode, 'none');
assert.equal(resolveTotalReturns(report(seatriumDetailed, legacy, 'XSES', '5E2')).block, legacy);
assert.equal(isScopedReturnsReport(report(null, null, 'XSES', '5E2')), false);
assert.equal(isScopedReturnsReport(report(null, null, 'XSES', 'TKU')), false);
assert.equal(isScopedReturnsReport(report(null, null, 'XHKG', 'CRPU')), false);
assert.equal(resolveTotalReturns(report()).mode, 'none');
assert.equal(resolveTotalReturns(report({ ...detailed, scope: {} }, legacy)).block, legacy);


// Exercise the actual workbook function, not a second implementation of its gate.
const exportSource = readFileSync(new URL('../src/utils/reportExport.ts', import.meta.url), 'utf8');
const exportCompiled = ts.transpileModule(`${exportSource}\nexport { buildPerformanceReturnsSheet };`, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
});
const exportFunctions = {};
vm.runInNewContext(exportCompiled.outputText, {
  exports: exportFunctions,
  require: (id) => {
    assert.equal(id, '@/utils/totalReturnPresentation');
    return exports;
  },
});
const { buildPerformanceReturnsSheet } = exportFunctions;
const quarterBlock = {
  ...detailed,
  rows: [{
    key: 'target', name: 'Target', stock_code: 'CRPU', is_target: true,
    ytd_total_return: { value: 0.1, available: true },
    since_listing_total_return: { value: 0.45, available: true },
    period_returns: { '2026-Q3': { value: 0.07, available: true } },
  }],
};
const staleSeatrium = { ...quarterBlock, scope: 'XSES:5E2' };
assert.equal(buildPerformanceReturnsSheet(report(staleSeatrium, null, 'XSES', '5E2')).length, 0);
assert.equal(buildPerformanceReturnsSheet(report(null, staleSeatrium, 'XSES', '5E2')).length, 0);
const classicExport = buildPerformanceReturnsSheet(report(legacy));
assert(classicExport.some((row) => row.includes('YTD total return')));
assert.deepEqual(buildPerformanceReturnsSheet(report(staleSeatrium, legacy, 'XSES', '5E2')), classicExport);
assert.deepEqual(buildPerformanceReturnsSheet(report(legacy, null, 'XSES', 'TKU')), classicExport);
// Unrelated companies retain their exact legacy raw-payload export behavior.
const unrelatedLegacy = { ...legacy, scope: 'XSES:ANOTHER' };
assert.deepEqual(buildPerformanceReturnsSheet(report(unrelatedLegacy, null, 'XSES', 'TKU')), classicExport);
assert.deepEqual(buildPerformanceReturnsSheet(report(null, unrelatedLegacy, 'XSES', 'TKU')), classicExport);
const enhancedExport = buildPerformanceReturnsSheet(report(quarterBlock));
assert(enhancedExport.some((row) => row[2] === 'Since IPO' && row[3] === 0.45));
assert(enhancedExport.some((row) => row[2] === 'Q3 2026' && row[3] === 0.07));

// Render the real section so a lingering v2 payload cannot expose the controls.
const root = fileURLToPath(new URL('../', import.meta.url));
const uiBundle = buildSync({
  stdin: {
    contents: "export { PerformanceContext } from './src/sections/PerformanceContext'; export { ReportProvider } from './src/context/ReportContext';",
    resolveDir: root,
    loader: 'tsx',
  },
  tsconfig: fileURLToPath(new URL('../tsconfig.app.json', import.meta.url)),
  bundle: true, platform: 'node', format: 'cjs', packages: 'external', write: false,
});
const uiModule = { exports: {} };
vm.runInNewContext(uiBundle.outputFiles[0].text, {
  module: uiModule, exports: uiModule.exports, require: createRequire(import.meta.url),
});
const { PerformanceContext, ReportProvider } = uiModule.exports;
const uiReport = (ticker, block) => ({
  ...report(block, null, 'XSES', ticker),
  labels: { perf_title: 'Performance', perf_subtitle: 'Context', perf_insight: '' },
  theme: { badges: { perf: { bg: '', textColor: '', text: '' } } },
});
const render = (data) => renderToStaticMarkup(createElement(ReportProvider, { report: data }, createElement(PerformanceContext)));
const sasseurUi = render(uiReport('CRPU', quarterBlock));
assert(sasseurUi.includes('Since IPO'));
assert(sasseurUi.includes('Returns period'));
const sasseurLegacyUi = render(uiReport('CRPU', legacy));
assert(sasseurLegacyUi.includes('YTD Total Return'));
assert(!sasseurLegacyUi.includes('Since IPO'));
assert(!sasseurLegacyUi.includes('Returns period'));
const seatriumUi = render(uiReport('5E2', staleSeatrium));
assert.equal(seatriumUi, render(uiReport('5E2')));
assert(seatriumUi.includes('Market Performance'));
assert(!seatriumUi.includes('Since IPO'));
assert(!seatriumUi.includes('Returns period'));
assert.equal(render(uiReport('TKU', { ...quarterBlock, scope: 'XSES:TKU' })), render(uiReport('TKU')));
console.log('PASS: return contract compatibility, Sasseur-only IPO/quarter UI and exports, retired Seatrium payload suppression, classic fallback, and unchanged standard market performance.');
