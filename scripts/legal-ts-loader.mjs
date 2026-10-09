// A tiny CommonJS-style loader for the project's .ts/.tsx modules, used by the
// legal scripts (legal-from-markdown.mjs, legal-verbatim-check.mjs) to run the
// SAME code the site renders with: TypeScript transpiles each file (react-jsx),
// `@/…` resolves to src/, stylesheet imports and 'server-only' are no-ops, and
// packages (react, react-dom/server) come from node_modules.
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const nodeRequire = createRequire(join(ROOT, 'package.json'));
const EXTS = ['.ts', '.tsx', '.js', '.mjs', '.json'];
const cache = new Map();

function resolveFile(base) {
  const candidates = [base, ...EXTS.map((e) => `${base}${e}`), ...EXTS.map((e) => join(base, `index${e}`))];
  return candidates.find((f) => EXTS.some((e) => f.endsWith(e)) && existsSync(f));
}

export function loadTs(file) {
  if (cache.has(file)) return cache.get(file);
  const mod = { exports: {} };
  cache.set(file, mod.exports);
  if (file.endsWith('.json')) {
    mod.exports = JSON.parse(readFileSync(file, 'utf8'));
    cache.set(file, mod.exports);
    return mod.exports;
  }
  const { outputText } = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
    fileName: file,
  });
  const req = (spec) => {
    if (/\.(css|scss)$/.test(spec) || spec === 'server-only' || spec === 'client-only') return {};
    let base;
    if (spec.startsWith('@/')) base = join(ROOT, 'src', spec.slice(2));
    else if (spec.startsWith('.')) base = resolve(dirname(file), spec);
    else return nodeRequire(spec);
    const hit = resolveFile(base);
    if (!hit) throw new Error(`${file}: cannot resolve "${spec}"`);
    return loadTs(hit);
  };
  const fn = vm.runInThisContext(`(function (exports, require, module, __filename, __dirname) {${outputText}\n})`, { filename: file });
  fn(mod.exports, req, mod, file, dirname(file));
  cache.set(file, mod.exports);
  return mod.exports;
}

/** Loads a module by path relative to the repository root. */
export const loadFromRoot = (rel) => loadTs(join(ROOT, rel));
