#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

function loadTsModule(tsFilePath) {
  const source = fs.readFileSync(tsFilePath, 'utf8');

  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
      esModuleInterop: true,
    },
    fileName: tsFilePath,
  }).outputText;

  const module = { exports: {} };
  const context = vm.createContext({
    module,
    exports: module.exports,
    require: () => {
      throw new Error('External require() is not supported while parsing report TS files.');
    },
    __dirname: path.dirname(tsFilePath),
    __filename: tsFilePath,
    console,
  });

  const script = new vm.Script(transpiled, { filename: tsFilePath });
  script.runInContext(context);

  return module.exports;
}

function extractReportJson(tsFilePath) {
  const resolvedPath = path.resolve(tsFilePath);
  const exported = loadTsModule(resolvedPath);

  const reportData = exported.REPORT_DATA ?? exported.default;
  const peerMethodology = exported.PEER_METHODOLOGY;

  if (!reportData || typeof reportData !== 'object') {
    throw new Error(`Could not find REPORT_DATA/default export in ${resolvedPath}`);
  }

  const reportJson = { reportData };
  if (peerMethodology && typeof peerMethodology === 'object') {
    reportJson.peerMethodology = peerMethodology;
  }
  return reportJson;
}

function main() {
  const tsFile = process.argv[2];
  if (!tsFile) {
    console.error('Usage: node scripts/report_json_from_ts.mjs <report.ts>');
    process.exit(1);
  }

  const jsonObject = extractReportJson(tsFile);
  process.stdout.write(JSON.stringify(jsonObject));
}

main();
