#!/usr/bin/env node
// Verbatim check for the owner-approved legal texts (runs in `legal:lint` and prebuild).
//
// For each document in VERBATIM_DOCS (scripts/legal-from-markdown.mjs) it
//   1. renders the generated content (src/content/legal/ja/*.ts) with the site's
//      own components — the H1 and lead as LegalPage renders them, then
//      LegalSections (src/components/legal/Sections.tsx → Blocks.tsx → Inline.tsx)
//      — to static HTML, and reads the text a visitor sees: tags dropped, entities
//      decoded, and the CSS list counters (legal.css `legal-ol`, including a
//      `counter-reset` start) written out as "N.";
//   2. reads the markdown source (docs/legal/source/*.md) and strips only the
//      markdown syntax: '#' heading marks, '- ' bullets, table pipes and the
//      | --- | divider, and '---'. Numbered markers ("1.") are kept, so the
//      rendered numbering must match the source's;
//   3. normalises whitespace in both and requires them to be identical, block by
//      block (heading, paragraph, list item, table cell, closing line) — every
//      source character in order, nothing added, nothing dropped.
// It also checks that the hero's 制定日 chip shows the source's 制定日.
// On a mismatch it prints a line diff and the first differing character, and exits 1.
//
//   node scripts/legal-verbatim-check.mjs              check
//   node scripts/legal-verbatim-check.mjs --self-test  prove it catches tampering
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { ROOT, loadFromRoot } from './legal-ts-loader.mjs';
import { VERBATIM_DOCS } from './legal-from-markdown.mjs';

const require = createRequire(join(ROOT, 'package.json'));
const { createElement: h, Fragment } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const { LegalSections, sectionNumbersOn } = loadFromRoot('src/components/legal/Sections.tsx');
const { Inline } = loadFromRoot('src/components/legal/Inline.tsx');
const { LEGAL_PAGES } = loadFromRoot('src/content/legal/pages.ts');
const { LEGAL_UI } = loadFromRoot('src/content/legal/ui.ts');

const norm = (s) => s.replace(/\s+/g, ' ').trim();

// ── rendered page → text blocks ──────────────────────────────────────────────
/** The document as LegalPage renders it: H1, lead, then LegalSections. */
export function renderDoc(page, doc, lang = 'ja') {
  return renderToStaticMarkup(
    h(
      Fragment,
      null,
      h('h1', { className: 'legal-h1' }, doc.title),
      h('p', { className: 'legal-lead' }, h(Inline, { text: doc.lead })),
      h(LegalSections, { doc, ui: LEGAL_UI[lang], numbered: sectionNumbersOn(LEGAL_PAGES[page], doc) }),
    ),
  );
}

const BLOCK_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'p', 'li', 'ol', 'ul', 'table', 'caption', 'thead', 'tbody', 'tr', 'th', 'td', 'section', 'div', 'dl', 'dt', 'dd', 'br']);
const VOID = new Set(['br', 'hr', 'img', 'input', 'meta', 'link']);
const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const decode = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) =>
    e[0] === '#' ? String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : Number(e.slice(1))) : (ENTITIES[e] ?? m),
  );
const attr = (attrs, name) => {
  const m = new RegExp(`\\s${name}="([^"]*)"`).exec(attrs);
  return m ? decode(m[1]) : undefined;
};

/** Visible text, one entry per block element; ordered-list numbers emulate legal.css. */
export function htmlToBlocks(html) {
  const out = [];
  let cur = '';
  const flush = () => {
    const t = norm(cur);
    if (t) out.push(t);
    cur = '';
  };
  const lists = []; // per open <ol>/<ul>: counter (number) or null (bullets: no text)
  const problems = [];
  for (const m of html.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*?)(\/?)>|([^<]+)/g)) {
    const [, close, rawTag, attrs, selfClose, text] = m;
    if (text !== undefined) {
      cur += decode(text);
      continue;
    }
    const tag = rawTag.toLowerCase();
    if (BLOCK_TAGS.has(tag)) flush();
    if (tag === 'ol' || tag === 'ul') {
      if (close) lists.pop();
      else {
        const counted = tag === 'ol' && attr(attrs, 'data-ordered') !== undefined;
        // .legal-list[data-ordered] { counter-reset: legal-ol } — an inline counter-reset sets the start
        const reset = /counter-reset:\s*legal-ol\s+(-?\d+)/.exec(attr(attrs, 'style') ?? '');
        const counter = counted ? (reset ? Number(reset[1]) : 0) : null;
        const start = attr(attrs, 'start');
        if (counted && (start === undefined ? 1 : Number(start)) !== counter + 1) {
          problems.push(`<ol start="${start ?? 1}"> but the CSS counter starts at ${counter + 1}`);
        }
        if (tag === 'ol' && !counted) problems.push('an <ol> without data-ordered shows no numbers');
        lists.push(counter);
      }
    } else if (tag === 'li' && !close) {
      const top = lists.length - 1;
      if (top >= 0 && lists[top] !== null) cur += `${++lists[top]}. `;
    }
    if (VOID.has(tag) || selfClose) continue;
  }
  flush();
  return { blocks: out, problems };
}

// ── markdown source → text blocks ────────────────────────────────────────────
export function markdownToBlocks(md) {
  const out = [];
  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || /^-{3,}$/.test(line) || /^\|(\s*:?-+:?\s*\|)+$/.test(line)) continue;
    if (/^\|.*\|$/.test(line)) {
      for (const cell of line.slice(1, -1).split('|')) out.push(norm(cell));
      continue;
    }
    const t = line
      .replace(/^#{1,6}\s+/, '')
      .replace(/^[-*+]\s+/, '')
      .replace(/^(\d+)\.\s+/, '$1. ');
    out.push(norm(t));
  }
  return out.filter(Boolean);
}

// ── diff ─────────────────────────────────────────────────────────────────────
function diff(a, b) {
  // LCS over blocks; fine for a few hundred lines
  const n = a.length;
  const m = b.length;
  const L = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const ops = [];
  let i = 0;
  let j = 0;
  while (i < n || j < m) {
    if (i < n && j < m && a[i] === b[j]) ops.push([' ', a[i++], j++]);
    else if (i < n && (j === m || L[i + 1][j] >= L[i][j + 1])) ops.push(['-', a[i++]]);
    else ops.push(['+', b[j++]]);
  }
  const lines = [];
  ops.forEach((op, k) => {
    const near = ops.slice(Math.max(0, k - 2), k + 3).some((o) => o[0] !== ' ');
    if (op[0] !== ' ' || near) lines.push(`  ${op[0]} ${op[1]}`);
    else if (lines.at(-1) !== '    …') lines.push('    …');
  });
  return lines.join('\n');
}

function firstDifference(a, b) {
  const x = a.join(' ');
  const y = b.join(' ');
  let i = 0;
  while (i < x.length && i < y.length && x[i] === y[i]) i++;
  if (i === x.length && i === y.length) return null;
  const ctx = (s) => JSON.stringify(s.slice(Math.max(0, i - 24), i + 24));
  return `first difference at character ${i}:\n    source:   ${ctx(x)}\n    rendered: ${ctx(y)}`;
}

// ── check ────────────────────────────────────────────────────────────────────
export function checkDoc(def, doc) {
  const errors = [];
  const md = readFileSync(join(ROOT, def.source), 'utf8');
  const source = markdownToBlocks(md);
  const { blocks: rendered, problems } = htmlToBlocks(renderDoc(def.page, doc));
  errors.push(...problems);
  if (JSON.stringify(source) !== JSON.stringify(rendered)) {
    errors.push(
      `rendered text differs from ${def.source} (- source only, + page only):\n${diff(source, rendered)}\n  ${firstDifference(source, rendered) ?? 'same characters, different block boundaries'}`,
    );
  }
  const est = /^制定日：(\d{4})年(\d{1,2})月(\d{1,2})日$/m.exec(md);
  const iso = est ? `${est[1]}-${est[2].padStart(2, '0')}-${est[3].padStart(2, '0')}` : undefined;
  if (doc.establishedDate !== iso) errors.push(`hero 制定日 chip shows ${doc.establishedDate ?? '(none)'}, the source says ${iso ?? '(none)'}`);
  if (doc.status !== 'final') errors.push(`status is '${doc.status}' (an approved text is 'final')`);
  return { errors, blocks: source.length, chars: source.join('').length };
}

function selfTest() {
  // Each tampering must be caught; the untouched documents must pass.
  const clone = (x) => JSON.parse(JSON.stringify(x));
  const cases = [
    ['one character changed', (d) => (d.sections[0].heading = d.sections[0].heading.replace('条', '項'))],
    ['a word added to the lead', (d) => (d.lead += '（詳細）')],
    ['a list item dropped', (d) => d.sections[1].blocks.find((b) => b.kind === 'list').items.pop()],
    ['a closing line dropped', (d) => d.closing.pop()],
    ['automatic section numbers turned back on', (d) => (d.sectionNumbers = true)],
    ['a table caption added', (d) => d.sections.flatMap((s) => s.blocks).filter((b) => b.kind === 'table').forEach((b) => (b.caption = '委託先'))],
    ['a list renumbered', (d) => d.sections.flatMap((s) => s.blocks).filter((b) => b.kind === 'list' && b.ordered).forEach((b) => (b.start = 3))],
    ['bold markup in the text', (d) => (d.sections[2].heading = `**${d.sections[2].heading}**`)],
    ['a paragraph split in two', (d) => {
      const s = d.sections.find((x) => x.blocks.some((b) => b.kind === 'paragraph'));
      const i = s.blocks.findIndex((b) => b.kind === 'paragraph');
      const t = s.blocks[i].text;
      s.blocks.splice(i, 1, { kind: 'paragraph', text: t.slice(0, 5) }, { kind: 'paragraph', text: t.slice(5) });
    }],
  ];
  let failed = 0;
  for (const def of VERBATIM_DOCS) {
    const doc = loadFromRoot(def.out).default;
    if (checkDoc(def, doc).errors.length) {
      console.error(`self-test: ${def.out} does not pass untouched`);
      failed++;
    }
    for (const [name, mutate] of cases) {
      const d = clone(doc);
      mutate(d);
      if (JSON.stringify(d) === JSON.stringify(doc)) continue; // not applicable (e.g. no table in this document)
      const caught = checkDoc(def, d).errors.length > 0;
      console.log(`  ${caught ? 'caught ' : 'MISSED '} ${def.page}: ${name}`);
      if (!caught) failed++;
    }
  }
  if (failed) {
    console.error(`legal verbatim self-test: ${failed} failure(s)`);
    process.exit(1);
  }
  console.log('legal verbatim self-test: ok');
}

const isMain = import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain && process.argv.includes('--self-test')) selfTest();
else if (isMain) {
  let failed = 0;
  const summary = [];
  for (const def of VERBATIM_DOCS) {
    const doc = loadFromRoot(def.out).default;
    const { errors, blocks, chars } = checkDoc(def, doc);
    if (errors.length) {
      failed++;
      for (const e of errors) console.error(`error ${def.out}: ${e}`);
    } else summary.push(`${def.page} ${blocks} blocks / ${chars} chars`);
  }
  if (failed) {
    console.error(`\nlegal verbatim check: ${failed} document(s) differ from the approved source. Edit docs/legal/source/*.md (with approval) and run npm run legal:convert; never edit the generated files.`);
    process.exit(1);
  }
  console.log(`legal verbatim check: ok (${summary.join('; ')} — identical to docs/legal/source)`);
}
