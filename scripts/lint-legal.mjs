#!/usr/bin/env node
// Legal/support content lint (src/content/legal/**). Runs in `prebuild` after
// the copy lint, and as `npm run legal:lint`.
//
// Always (errors):
//   - every page in pages.ts has src/content/legal/{ja,en}/<file>.ts and both load
//   - the document shape is valid (required fields, block kinds, table widths, list
//     numbering, ISO dates, closing lines)
//   - ja and en have the same section ids in the same order; ids are slugs, unique, not reserved
//   - inline markdown is well formed (balanced **, links with an allowed href); the
//     token syntax is src/components/legal/inline-syntax.ts, shared with the renderer
//   - every mailto: / contact email is info@linclone.com (or in ALLOWED_EMAILS below)
//   - internal links point at a registered page of the SAME locale; #anchors exist
//   - related keys exist; quick-action hrefs resolve
// With LEGAL_STRICT=1 (release gate), also:
//   - no status 'draft', and no TODO, 【要確認】, 【ドラフト】, [DRAFT] or [[…]] anywhere
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import ts from 'typescript';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'src/content/legal');
const LOCALES = ['ja', 'en'];
const STRICT = process.env.LEGAL_STRICT === '1';

/** Mail addresses a document may link to. Add one here only with the owner's sign-off. */
const ALLOWED_EMAILS = new Set(['info@linclone.com']);
/** Ids the page itself uses (hero, skip link target, landmarks). */
const RESERVED_IDS = new Set(['top', 'main', 'legal-title', 'legal-glance-title', 'legal-related-title']);
const PLACEHOLDERS = [/\bTODO\b/, /【要確認】/, /【ドラフト】/, /\[DRAFT\]/, /\[\[/];
const BLOCK_KINDS = new Set(['paragraph', 'list', 'table', 'callout', 'definitionList', 'steps', 'faq', 'contact', 'storeLinks']);

// ── tiny TS module loader (the content files are plain data + one helper) ────
const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file);
  const src = readFileSync(file, 'utf8');
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    fileName: file,
  });
  const mod = { exports: {} };
  const req = (spec) => {
    if (!spec.startsWith('.')) throw new Error(`${file}: content files may only import relative modules (got "${spec}")`);
    const base = resolve(dirname(file), spec);
    const hit = [`${base}.ts`, join(base, 'index.ts')].find(existsSync);
    if (!hit) throw new Error(`${file}: cannot resolve "${spec}"`);
    return load(hit);
  };
  vm.runInNewContext(outputText, { module: mod, exports: mod.exports, require: req }, { filename: file });
  cache.set(file, mod.exports);
  return mod.exports;
}

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

// ── registry ─────────────────────────────────────────────────────────────────
const { LEGAL_PAGES } = load(join(DIR, 'pages.ts'));
const pathToKey = { ja: new Map(), en: new Map() };
for (const [key, p] of Object.entries(LEGAL_PAGES)) {
  for (const l of LOCALES) pathToKey[l].set(p[l], key);
  if (!p.en.startsWith('/en/')) err(`pages.ts:${key}`, `EN path must start with /en/ (got ${p.en})`);
  if (p.ja.startsWith('/en') || p.ja.startsWith('/ja')) err(`pages.ts:${key}`, `JA path is served unprefixed (got ${p.ja})`);
}
// Non-legal pages documents may link to.
// Non-legal pages legal content may link to. The LC Studio legal pages keep the
// store-registered URLs (English unprefixed, Japanese with /ja at the end; src/i18n/paths.ts).
const OTHER_PATHS = {
  ja: new Set(['/', '/creators', '/lc-studio/privacy/ja', '/lc-studio/terms/ja']),
  en: new Set(['/en', '/en/creators', '/lc-studio/privacy', '/lc-studio/terms']),
};

// ── load documents ───────────────────────────────────────────────────────────
const docs = {};
for (const [key, p] of Object.entries(LEGAL_PAGES)) {
  docs[key] = {};
  for (const l of LOCALES) {
    const file = join(DIR, l, `${p.file}.ts`);
    const where = `${l}/${p.file}.ts`;
    if (!existsSync(file)) {
      err(where, 'missing (every page needs ja and en)');
      continue;
    }
    try {
      const doc = load(file).default;
      if (!doc || typeof doc !== 'object') err(where, 'no default export');
      else docs[key][l] = doc;
    } catch (e) {
      err(where, `does not load: ${e.message}`);
    }
  }
}

// ── checks ───────────────────────────────────────────────────────────────────
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const isIso = (s) => ISO.test(s) && !Number.isNaN(Date.parse(`${s}T00:00:00Z`)) && new Date(`${s}T00:00:00Z`).toISOString().startsWith(s);
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const isStr = (v) => typeof v === 'string' && v.trim().length > 0;

/** Every user-visible string of a document, with a path for messages. */
function* strings(value, path) {
  if (typeof value === 'string') yield [path, value];
  else if (Array.isArray(value)) for (let i = 0; i < value.length; i++) yield* strings(value[i], `${path}[${i}]`);
  else if (value && typeof value === 'object') for (const [k, v] of Object.entries(value)) yield* strings(v, path ? `${path}.${k}` : k);
}

function checkHref(where, href, lang, doc) {
  if (href.startsWith('mailto:')) {
    const addr = decodeURIComponent(href.slice(7).split('?')[0]).toLowerCase();
    if (!ALLOWED_EMAILS.has(addr)) err(where, `mailto "${addr}" is not allowed (only ${[...ALLOWED_EMAILS].join(', ')})`);
    return;
  }
  if (href.startsWith('https://')) {
    if (/\s/.test(href)) err(where, `bad URL "${href}"`);
    return;
  }
  if (href.startsWith('#')) {
    const id = href.slice(1);
    if (!doc.sections.some((s) => s.id === id)) err(where, `"${href}" is not a section of this page`);
    return;
  }
  if (href.startsWith('/') && !href.startsWith('//')) {
    const [path, hash] = href.split('#');
    const key = pathToKey[lang].get(path);
    if (!key && !OTHER_PATHS[lang].has(path)) {
      const other = LOCALES.find((x) => x !== lang);
      const hint = pathToKey[other].has(path) ? ` (that is the ${other.toUpperCase()} URL; use ${LEGAL_PAGES[pathToKey[other].get(path)][lang]})` : '';
      err(where, `internal link "${path}" is not a ${lang.toUpperCase()} page${hint}`);
      return;
    }
    if (hash && key) {
      const target = docs[key]?.[lang];
      if (target && !target.sections.some((s) => s.id === hash)) err(where, `"${href}": no section #${hash} on that page`);
    }
    return;
  }
  err(where, `href "${href}" must be https://, mailto:, /path or #id`);
}

const { INLINE_TOKEN: TOKEN } = load(join(ROOT, 'src/components/legal/inline-syntax.ts'));
function checkInline(where, text, lang, doc) {
  // links (groups: 1 escape, 2 bold, 3 placeholder, 4 label, 5 href)
  for (const m of text.matchAll(TOKEN)) if (m[5] !== undefined) checkHref(where, m[5], lang, doc);
  // what remains after removing well-formed tokens must not hold markup fragments
  const rest = text.replace(TOKEN, '');
  if (rest.includes('**')) err(where, 'unbalanced **bold**');
  if (/\]\(|\[[^\]]*\]\([^)]*$/.test(rest)) err(where, 'malformed [link](href)');
}

function checkContact(where, c, lang, doc) {
  if (!isStr(c.title)) err(where, 'contact needs a title');
  if (!isStr(c.label)) err(where, 'contact needs a button label');
  if (!ALLOWED_EMAILS.has(String(c.email).toLowerCase())) err(where, `contact email "${c.email}" is not allowed`);
  if (c.body) checkInline(`${where}.body`, c.body, lang, doc);
  if (c.note) checkInline(`${where}.note`, c.note, lang, doc);
}

function checkBlock(where, b, lang, doc) {
  if (!b || !BLOCK_KINDS.has(b.kind)) return err(where, `unknown block kind "${b?.kind}"`);
  const inl = (w, t) => (isStr(t) ? checkInline(w, t, lang, doc) : err(w, 'empty text'));
  switch (b.kind) {
    case 'paragraph':
      return inl(where, b.text);
    case 'list':
      if (!b.items?.length) return err(where, 'empty list');
      if (b.start !== undefined && (!b.ordered || !Number.isInteger(b.start) || b.start < 1)) err(where, `start ${b.start} needs ordered: true and a whole number ≥ 1`);
      return b.items.forEach((it, i) => {
        if (typeof it === 'string') return inl(`${where}.items[${i}]`, it);
        inl(`${where}.items[${i}].text`, it.text);
        if (it.ordered !== undefined && typeof it.ordered !== 'boolean') err(`${where}.items[${i}]`, 'ordered must be true or false');
        if (!it.items?.length) err(`${where}.items[${i}]`, 'nested list is empty');
        it.items?.forEach((n, j) => (typeof n === 'string' ? inl(`${where}.items[${i}].items[${j}]`, n) : err(`${where}.items[${i}].items[${j}]`, 'lists nest one level only')));
      });
    case 'table':
      if (b.caption !== undefined && !isStr(b.caption)) err(where, 'table caption is empty (omit it instead)');
      if (!b.columns?.length) return err(where, 'table needs columns');
      return b.rows.forEach((r, i) => {
        if (r.length !== b.columns.length) err(`${where}.rows[${i}]`, `${r.length} cells for ${b.columns.length} columns`);
        r.forEach((c, j) => inl(`${where}.rows[${i}][${j}]`, c));
      });
    case 'callout':
      if (!['info', 'warning', 'important'].includes(b.tone)) err(where, `callout tone "${b.tone}"`);
      return (typeof b.body === 'string' ? [b.body] : b.body ?? []).forEach((p, i) => inl(`${where}.body[${i}]`, p));
    case 'definitionList':
      return b.items.forEach((it, i) => {
        if (!isStr(it.term)) err(`${where}.items[${i}]`, 'empty term');
        inl(`${where}.items[${i}].definition`, it.definition);
      });
    case 'steps':
      if (b.illustration) {
        const il = b.illustration;
        if (il.kind !== 'settingsPath') err(where, `unknown illustration "${il.kind}"`);
        else if (!il.groups?.some((g) => g.rows.includes(il.highlight))) err(`${where}.illustration`, `highlight "${il.highlight}" is not one of the rows`);
        if (!isStr(il.alt)) err(`${where}.illustration`, 'needs alt text');
      }
      return b.items.forEach((s, i) => {
        if (!isStr(s.title)) err(`${where}.items[${i}]`, 'step needs a title');
        inl(`${where}.items[${i}].body`, s.body);
      });
    case 'faq':
      return b.items.forEach((f, i) => {
        if (!isStr(f.q)) err(`${where}.items[${i}]`, 'empty question');
        inl(`${where}.items[${i}].a`, f.a);
      });
    case 'contact':
      return checkContact(where, b, lang, doc);
    case 'storeLinks':
      if (b.body) inl(`${where}.body`, b.body);
  }
}

for (const [key, byLang] of Object.entries(docs)) {
  for (const l of LOCALES) {
    const doc = byLang[l];
    if (!doc) continue;
    const at = `${l}/${LEGAL_PAGES[key].file}.ts`;
    if (!['draft', 'final'].includes(doc.status)) err(at, `status must be 'draft' or 'final'`);
    for (const f of ['title', 'lead']) if (!isStr(doc[f])) err(at, `${f} is required`);
    if (!isStr(doc.meta?.title) || !isStr(doc.meta?.description)) err(at, 'meta.title and meta.description are required');
    for (const f of ['establishedDate', 'effectiveDate', 'lastUpdated']) if (doc[f] !== undefined && !isIso(doc[f])) err(at, `${f} "${doc[f]}" is not an ISO date (YYYY-MM-DD)`);
    if (doc.meta) {
      const [tMax, dMax] = l === 'ja' ? [32, 120] : [60, 155];
      if ([...doc.meta.title].length > tMax) warnings.push(`${at}: meta.title is ${[...doc.meta.title].length} chars (aim ≤${tMax})`);
      if ([...doc.meta.description].length > dMax) warnings.push(`${at}: meta.description is ${[...doc.meta.description].length} chars (aim ≤${dMax})`);
    }
    if (!doc.sections?.length) err(at, 'needs at least one section');
    const ids = new Set();
    for (const [i, s] of (doc.sections ?? []).entries()) {
      const w = `${at} sections[${i}]`;
      if (!SLUG.test(s.id ?? '')) err(w, `id "${s.id}" must be a lowercase slug (a-z, 0-9, -)`);
      if (RESERVED_IDS.has(s.id)) err(w, `id "${s.id}" is reserved by the page layout`);
      if (ids.has(s.id)) err(w, `duplicate id "${s.id}"`);
      ids.add(s.id);
      if (!isStr(s.heading)) err(w, 'heading is required');
      if (!s.blocks?.length) err(w, 'needs at least one block');
      s.blocks?.forEach((b, j) => checkBlock(`${w}(${s.id}).blocks[${j}]`, b, l, doc));
    }
    if (doc.sectionNumbers !== undefined && typeof doc.sectionNumbers !== 'boolean') err(at, 'sectionNumbers must be true or false');
    if (doc.closing !== undefined) {
      if (!Array.isArray(doc.closing) || !doc.closing.length) err(at, 'closing must be a non-empty list of lines (or omitted)');
      else doc.closing.forEach((c, i) => (isStr(c) ? checkInline(`${at} closing[${i}]`, c, l, doc) : err(`${at} closing[${i}]`, 'empty line')));
    }
    doc.atAGlance?.forEach((g, i) => checkInline(`${at} atAGlance[${i}]`, g.body, l, doc));
    doc.quickActions?.forEach((q, i) => checkHref(`${at} quickActions[${i}]`, q.href, l, doc));
    if (doc.contactCard) checkContact(`${at} contactCard`, doc.contactCard, l, doc);
    checkInline(`${at} lead`, doc.lead ?? '', l, doc);
    doc.related?.forEach((r) => {
      if (!(r in LEGAL_PAGES)) err(at, `related "${r}" is not a page in pages.ts`);
      if (r === key) err(at, 'related lists the page itself');
    });

    if (STRICT) {
      if (doc.status !== 'final') err(at, `status is '${doc.status}' (LEGAL_STRICT=1 needs 'final')`);
      for (const [p, v] of strings(doc, '')) {
        const hit = PLACEHOLDERS.find((re) => re.test(v));
        if (hit) err(`${at} ${p}`, `placeholder ${hit} left in "${v.length > 60 ? `${v.slice(0, 57)}…` : v}"`);
      }
    }
  }

  // ja ↔ en: same section ids, same order
  const { ja, en } = byLang;
  if (ja && en) {
    const a = ja.sections.map((s) => s.id).join(', ');
    const b = en.sections.map((s) => s.id).join(', ');
    if (a !== b) err(`${LEGAL_PAGES[key].file}`, `section ids differ\n    ja: ${a}\n    en: ${b}`);
    const ra = JSON.stringify(ja.related ?? []);
    const rb = JSON.stringify(en.related ?? []);
    if (ra !== rb) warnings.push(`${LEGAL_PAGES[key].file}: related differs between ja and en`);
  }
}

// ── report ───────────────────────────────────────────────────────────────────
for (const w of warnings) console.warn(`warn  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`error ${e}`);
  console.error(`\nlegal lint${STRICT ? ' (strict)' : ''}: ${errors.length} error(s), ${warnings.length} warning(s)`);
  process.exit(1);
}
const n = Object.keys(docs).length;
const drafts = Object.values(docs).flatMap((d) => Object.values(d)).filter((d) => d.status === 'draft').length;
console.log(
  `legal lint${STRICT ? ' (strict)' : ''}: ok (${n} pages × ${LOCALES.length} locales${drafts ? `, ${drafts} draft document(s): set LEGAL_STRICT=1 to gate a release` : ''}, ${warnings.length} warning(s))`,
);
