const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const file = path.join(__dirname, '../src/lib/newsTransport.ts');
const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const mod = { exports: {} };
vm.runInNewContext(compiled, { module: mod, exports: mod.exports });
const { decodeEventStudySeries, decodeNewsTransport } = mod.exports;
const plain = value => JSON.parse(JSON.stringify(value));
const series = { encoding: 'news-series.columns.v1', row_count: 3, columns: {
    session: { constant: '2026-09-21' },
    offset: { start: -1, step: 1 },
    volume: { dictionary: [0, 250], indices: [0, 1, 0] },
    mid: { runs: [[2, null], [1, 0.345]] },
    side: { values: ['buy', 'sell', null] },
}};
const expected = [
    { session: '2026-09-21', offset: -1, volume: 0, mid: null, side: 'buy' },
    { session: '2026-09-21', offset: 0, volume: 250, mid: null, side: 'sell' },
    { session: '2026-09-21', offset: 1, volume: 0, mid: 0.345, side: null },
];
assert.deepEqual(plain(decodeEventStudySeries(series)), expected);
assert.strictEqual(decodeEventStudySeries(expected), expected);
assert.throws(() => decodeEventStudySeries({ ...series, encoding: 'unknown' }));
assert.throws(() => decodeEventStudySeries({ ...series, row_count: 4 }));
assert.throws(() => decodeEventStudySeries({ ...series, columns: { mid: { runs: [[-1, null]] } } }));
assert.throws(() => decodeEventStudySeries({ ...series, columns: { mid: { dictionary: [1], indices: [2, 2, 2] } } }));
const report = { meta: { ticker: '9MT' }, news: { annual_chart: { events: [{ event_study: { series, status: 'ready' } }] } } };
const before = JSON.stringify(report);
const restored = decodeNewsTransport(report);
assert.deepEqual(plain(restored.news.annual_chart.events[0].event_study.series), expected);
assert.equal(JSON.stringify(report), before);
assert.strictEqual(decodeNewsTransport({}).news, undefined);
// Shared studies use the same lossless decoder as legacy inline studies.
// Event references remain intact; ordinary arrays and unrelated data stay valid.
const registryReport = {
    meta: { ticker: 'CRPU' },
    news: {
        delivery: { profile: 'essential.v1', publication_history_included: false },
        annual_chart: {
            events: [{ document_id: 'a', event_study_ref: 'shared', event_study: { series } }],
            dots: [{ document_id: 'b', event_study_ref: 'shared' }],
            intraday_studies: {
                shared: { status: 'ready', series },
                plain: { status: 'ready', series: expected },
                missing: { status: 'unavailable', reason: 'session_not_in_base' },
            },
            macro_comparison: { all: { median_abs_return: 0.13430000000000003 } },
        },
        unrelated: { series: { encoding: 'another-format' } },
    },
};
const registryBefore = JSON.stringify(registryReport);
const registryRestored = decodeNewsTransport(registryReport);
const chart = registryRestored.news.annual_chart;
assert.deepEqual(plain(chart.intraday_studies.shared.series), expected);
assert.deepEqual(plain(chart.intraday_studies.plain.series), expected);
assert.deepEqual(plain(chart.events[0].event_study.series), expected);
assert.equal(chart.events[0].event_study_ref, 'shared');
assert.equal(chart.dots[0].event_study_ref, 'shared');
assert.deepEqual(plain(chart.intraday_studies.missing), registryReport.news.annual_chart.intraday_studies.missing);
assert.deepEqual(plain(chart.macro_comparison), registryReport.news.annual_chart.macro_comparison);
assert.deepEqual(plain(registryRestored.news.delivery), registryReport.news.delivery);
assert.deepEqual(plain(registryRestored.news.unrelated), registryReport.news.unrelated);
assert.equal(JSON.stringify(registryReport), registryBefore);
assert.throws(() => decodeNewsTransport({ news: { annual_chart: {
    intraday_studies: { bad: { series: { ...series, row_count: 4 } } },
} } }));
if (process.argv[2]) {
    const fixture = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
    const result = decodeNewsTransport(fixture.packed.report.reportData);
    assert.deepEqual(plain(result), fixture.original.report.reportData);
    console.log('Real Python→TypeScript complete report round-trip: PASS');
}
console.log('News transport decoder: PASS');
