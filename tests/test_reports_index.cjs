const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const dash = path.resolve(process.env.DASH_ROOT || root);
const ts = require(require.resolve('typescript', { paths: [dash, process.cwd()] }));
const source = fs.readFileSync(path.join(root, 'src/data/reportsIndex.ts'), 'utf8');
const metadata = JSON.parse(fs.readFileSync(path.join(root, 'src/data/reportsMetadata.json'), 'utf8'));
const lazyCall = "import.meta.glob<ReportModule>('./*_*_*.ts')";
assert(source.includes(lazyCall), 'the production index must use lazy report discovery');
assert(!source.includes('eager: true'), 'report bodies must not be eagerly imported');
const compiled = ts.transpileModule(source.replace(lazyCall, 'globalThis.__reportModules'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText;

function indexFor(modules, manifest = metadata) {
    const module = { exports: {} };
    vm.runInNewContext(compiled, {
        module, exports: module.exports, __reportModules: modules,
        require: (name) => {
            assert.equal(name, './reportsMetadata.json');
            return manifest;
        },
    });
    return module.exports;
}

// Generated report data is JSON, so inspect the one selected fixture without
// transpiling it or importing every report into the verification process.
function readSelectedReport(name) {
    const contents = fs.readFileSync(path.join(dash, 'src/data', name), 'utf8');
    const assignment = /export const REPORT_DATA[^=]*=\s*/.exec(contents);
    assert(assignment, `REPORT_DATA declaration missing: ${name}`);
    const start = assignment.index + assignment[0].length;
    const end = contents.indexOf('\n};', start);
    assert(end > start, `REPORT_DATA end missing: ${name}`);
    return { REPORT_DATA: JSON.parse(contents.slice(start, end + 2)) };
}

async function run() {
    const calls = [];
    const files = fs.readdirSync(path.join(dash, 'src/data')).filter((name) => /^[a-z0-9]{4}_.+_\d{4}-\d{2}-\d{2}(?:_.+)?\.ts$/i.test(name));
    const modules = Object.fromEntries(files.map((name) => [`./${name}`, async () => {
        calls.push(name);
        return readSelectedReport(name);
    }]));
    const { REPORTS_INDEX, loadReportData } = indexFor(modules);
    assert.equal(REPORTS_INDEX.length, files.length);
    assert.equal(calls.length, 0, 'building the home catalog must load no reports');
    const expectedCalls = [];
    const latest = REPORTS_INDEX.find((report) => report.id === 'xses-9mt_2026-10-09');
    if (latest) {
        assert.equal(latest.company, 'METAOPTICS LTD');
        assert.equal(latest.asof_date, '2026-10-09');
        const selected = await loadReportData(latest.id);
        assert.equal(selected.reportData.meta.ticker, '9MT');
        assert.equal(selected.reportData.news.status, 'ready');
        expectedCalls.push('xses_9mt_2026-10-09.ts');
        assert.deepEqual(calls, expectedCalls);
    }
    await assert.rejects(loadReportData('definitely-not-a-report'), /Report not found/);
    await assert.rejects(loadReportData('../xses_9mt_2026-10-09'), /Report not found/);
    assert.deepEqual(calls, expectedCalls, 'an unknown report must not invoke any loader');

    if (REPORTS_INDEX.some((report) => report.id === 'xnas-aapl_2026-09-11_v2')) {
        const nasdaq = await loadReportData('xnas-aapl_2026-09-11_v2');
        assert.equal(nasdaq.reportData.meta.market, 'XNAS');
        assert.equal(nasdaq.reportData.meta.asof_date, '2026-09-11');
        expectedCalls.push('xnas_aapl_2026-09-11_v2.ts');
        assert.deepEqual(calls, expectedCalls);
    }

    const etf = { meta: { ticker: '3416' }, series: {}, report_kind: 'etf', etf: { marker: 'preserve' } };
    const equity = { meta: { market: 'XNAS', ticker: 'DEMO' }, series: {}, news: { status: 'ready' } };
    const peers = { title: 'ETF peers', steps: [], peers: [] };
    let fixtureCalls = 0;
    const fixtures = indexFor({
        './xhkg_3416_2026-10-09_etf.ts': async () => { fixtureCalls++; return { default: etf, PEER_METHODOLOGY: peers }; },
        './xnas_demo_2026-10-09_v2.ts': async () => { fixtureCalls++; return { REPORT_DATA: equity }; },
        './xses_new_2026-10-12.ts': async () => { throw new Error('one report failed'); },
        './not_a_report.ts': async () => { throw new Error('not a report'); },
    }, { './xses_removed_2026-10-11.ts': { company: 'Stale metadata' } });
    assert.equal(fixtures.REPORTS_INDEX.length, 3);
    assert.equal(fixtures.REPORTS_INDEX[0].id, 'xses-new_2026-10-12');
    assert.equal(fixtures.REPORTS_INDEX[0].ticker, 'NEW');
    assert(fixtures.REPORTS_INDEX.some((report) => report.id === 'xnas-demo_2026-10-09_v2'));
    assert.equal(fixtureCalls, 0);
    const fund = await fixtures.loadReportData('xhkg-3416_2026-10-09_etf');
    assert.equal(fund.reportData, etf, 'ETF fields and existing normalizers must remain untouched');
    assert.equal(fund.peerMethodology, peers);
    assert.equal(fixtureCalls, 1);
    await assert.rejects(fixtures.loadReportData('xses-new_2026-10-12'), /one report failed/);
    assert.equal(fixtureCalls, 1, 'a failed report must not import unrelated reports');
    const variant = await fixtures.loadReportData('xnas-demo_2026-10-09_v2');
    assert.equal(variant.reportData, equity);
    assert.equal(variant.reportData.news.status, 'ready');
    assert.equal(fixtureCalls, 2);
    await assert.rejects(fixtures.loadReportData('xnas-demo_2026-10-09'), /Report not found/);
    assert.equal(fixtureCalls, 2, 'a variant must not silently become a different route');

    const invalid = indexFor({ './xses_bad_2026-10-12.ts': async () => ({ REPORT_DATA: { meta: {} } }) });
    await assert.rejects(invalid.loadReportData('xses-bad_2026-10-12'), /Invalid report data/);

    const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'report-metadata-test-'));
    try {
        const name = 'xnas_demo_2026-10-12_v2.ts';
        fs.writeFileSync(path.join(temp, name), `export const REPORT_DATA = {"meta": ${JSON.stringify({ company: 'Company {with} "quotes"', sector: 'Hardware', ticker: 'DEMO', asof_date: '2026-10-12' })}, "series": {}};\nthrow new Error('metadata generation must never execute reports');\n`);
        fs.writeFileSync(path.join(temp, 'unrelated.ts'), 'throw new Error("ignore");');
        const out = path.join(temp, 'catalog.json');
        execFileSync(process.execPath, [path.join(root, 'scripts/generateReportMetadata.mjs'), temp, out]);
        const generated = JSON.parse(fs.readFileSync(out, 'utf8'));
        assert.deepEqual(Object.keys(generated), [`./${name}`]);
        assert.equal(generated[`./${name}`].company, 'Company {with} "quotes"');
        assert.equal(generated[`./${name}`].market, 'XNAS');
        fs.unlinkSync(path.join(temp, name));
        execFileSync(process.execPath, [path.join(root, 'scripts/generateReportMetadata.mjs'), temp, out]);
        assert.deepEqual(JSON.parse(fs.readFileSync(out, 'utf8')), {}, 'deleted files leave the refreshed manifest');
    } finally {
        fs.rmSync(temp, { recursive: true, force: true });
    }

    console.log(JSON.stringify({ status: 'passed', reports: files.length, actual_routes_checked: calls,
        selected_only_loading: true, missing_and_variant_routes: true, etf_and_peer_passthrough: true,
        new_and_deleted_report_discovery: true, bounded_metadata_generator: true }));
}

run().catch((error) => { console.error(error); process.exitCode = 1; });
