#!/usr/bin/env node
// Owner-approved legal texts → page content, VERBATIM.
//
//   docs/legal/source/privacy_policy_ja.md   → src/content/legal/ja/privacy.ts
//   docs/legal/source/terms_of_service_ja.md → src/content/legal/ja/terms.ts
//   docs/legal/source/lc_studio_*_{ja,en}.md  → src/content/legal/{ja,en}/studio-*.ts
//     (LC Studio's creator Terms and Privacy Policy, Japanese and English: the
//     same text the app's in-app reader serves from clone-net-web)
//
// The markdown is the approved original: never reword it here or in the
// generated files. This script only maps its structure onto the content schema
// (src/content/legal/types.ts):
//   '# '            → title (H1)            the paragraph before the first '## ' → lead
//   '## 第N条（…）' → section id 'art-N', heading exactly as written
//                     (English documents: '## Article N (…)')
//   more plain paragraphs before the first article (documents with
//   `preamble: true` only) → preamble, shown at the top of the article
//   '1. ' / '- '    → ordered / bulleted list ('    1. ' = numbered sub-items)
//   '| … |' table   → table (header row = columns, no caption)
//   other lines     → paragraphs           '---' and what follows → closing lines
//   closing '制定日：…' / 'Established: …' → hero date; '改定日：…' / 'Revised: …' → 'Updated' date
// Text is escaped (escapeInline) so the Inline renderer prints every character
// as-is. Anything the mapping cannot represent exactly fails loudly.
//
//   npm run legal:convert            write the files
//   node scripts/legal-from-markdown.mjs --check   fail if a file is out of date
//
// scripts/legal-verbatim-check.mjs then renders the result with the site's own
// components and compares it with the source, character by character.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT, loadFromRoot } from './legal-ts-loader.mjs';

const { escapeInline } = loadFromRoot('src/components/legal/inline-syntax.ts');
const CHECK = process.argv.includes('--check');

/** Page metadata (not body text): the <title>, meta description and related links. */
export const VERBATIM_DOCS = [
  {
    source: 'docs/legal/source/privacy_policy_ja.md',
    out: 'src/content/legal/ja/privacy.ts',
    page: 'privacy',
    meta: {
      title: 'プライバシーポリシー｜LinClone',
      description:
        'LinClone株式会社のプライバシーポリシーです。アプリ「LinClone」で取得する情報、利用目的、クリエイターへの提供、外国にある第三者への提供、保存期間、開示等の請求について定めています。',
    },
    related: ['terms', 'cookies', 'childProtection', 'deleteUser', 'support'],
  },
  {
    source: 'docs/legal/source/terms_of_service_ja.md',
    out: 'src/content/legal/ja/terms.ts',
    page: 'terms',
    meta: {
      title: '利用規約｜LinClone',
      description:
        'LinClone株式会社が提供するアプリ「LinClone」の利用規約です。AIクローン、コイン・サブスクリプション、クリエイターへの情報の共有、禁止事項、退会などの利用条件を定めています。',
    },
    related: ['privacy', 'cookies', 'childProtection', 'support'],
  },
  // LC Studio (the creator app): owner-approved v1.1, Japanese original and its
  // English translation. Pages: src/app/(site)/[lang]/lc-studio/*, keys in
  // STUDIO_LEGAL_PAGES (src/content/legal/pages.ts).
  {
    source: 'docs/legal/source/lc_studio_privacy_policy_ja.md',
    out: 'src/content/legal/ja/studio-privacy.ts',
    page: 'studioPrivacy',
    lang: 'ja',
    preamble: true,
    meta: {
      title: 'LC Studio プライバシーポリシー｜LinClone',
      description:
        'LinClone株式会社のクリエイター向けアプリ「LC Studio」のプライバシーポリシーです。取得する情報、声のデータの取扱い、外国にある第三者への提供、保存期間、開示等の請求について定めています。',
    },
    related: ['studioTerms'],
  },
  {
    source: 'docs/legal/source/lc_studio_privacy_policy_en.md',
    out: 'src/content/legal/en/studio-privacy.ts',
    page: 'studioPrivacy',
    lang: 'en',
    preamble: true,
    meta: {
      title: 'LC Studio Privacy Policy (for Creators) | LinClone',
      description:
        'How LinClone K.K. handles creators’ personal information in LC Studio: what we obtain, how voice data is used, transfers abroad, retention and your rights. English translation; the Japanese text prevails.',
    },
    related: ['studioTerms'],
  },
  {
    source: 'docs/legal/source/lc_studio_terms_of_service_ja.md',
    out: 'src/content/legal/ja/studio-terms.ts',
    page: 'studioTerms',
    lang: 'ja',
    preamble: true,
    meta: {
      title: 'LC Studio 利用規約｜LinClone',
      description:
        'LinClone株式会社のクリエイター向けアプリ「LC Studio」の利用規約です。AIクローンの作成・公開、声などの利用許諾、報酬の計算と支払い、禁止事項、契約の終了などの条件を定めています。',
    },
    related: ['studioPrivacy'],
  },
  {
    source: 'docs/legal/source/lc_studio_terms_of_service_en.md',
    out: 'src/content/legal/en/studio-terms.ts',
    page: 'studioTerms',
    lang: 'en',
    preamble: true,
    meta: {
      title: 'LC Studio Terms of Service (for Creators) | LinClone',
      description:
        'The terms for creators who build and publish an AI clone with LC Studio: licence to use voice and likeness, rewards and payouts, prohibited acts and termination. English translation; the Japanese text prevails.',
    },
    related: ['studioPrivacy'],
  },
];

// ── markdown → document ──────────────────────────────────────────────────────
const RE = {
  h1: /^# (.+)$/,
  h2: /^## (.+)$/,
  rule: /^-{3,}$/,
  table: /^\|.*\|$/,
  ol: /^( *)(\d+)\. (.+)$/,
  ul: /^( *)[-*+] (.+)$/,
};
const ARTICLE = /^第(\d+)条（[^（）]+）$/;
const ESTABLISHED = /^制定日：(\d{4})年(\d{1,2})月(\d{1,2})日$/;
const REVISED = /^改定日：(\d{4})年(\d{1,2})月(\d{1,2})日/;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const EN_DATE = `(\\d{1,2}) (${MONTHS.join('|')}) (\\d{4})`;
/** The English documents' patterns; dates are captured as [year, month, day]. */
const PATTERNS = {
  ja: { article: ARTICLE, articleLabel: '第N条（…）', established: ESTABLISHED, revised: REVISED, ymd: (m) => [m[1], m[2], m[3]] },
  en: {
    article: /^Article (\d+) \([^()]+\)$/,
    articleLabel: 'Article N (…)',
    established: new RegExp(`^Established: ${EN_DATE}$`),
    revised: new RegExp(`^Revised: ${EN_DATE}`),
    ymd: (m) => [m[3], String(MONTHS.indexOf(m[2]) + 1), m[1]],
  },
};
/** The ISO date of a closing line matching `re`, or undefined. */
export function closingDate(closing, re, ymd) {
  const m = closing.map((c) => re.exec(c)).find(Boolean);
  if (!m) return undefined;
  const [y, mo, d] = ymd(m);
  return `${y}-${mo.padStart(2, '0')}-${d.padStart(2, '0')}`;
}
/** Characters a markdown viewer would not print literally (we print them literally). */
const MD_INLINE = /[*_`<>\\[\]]|https?:\/\//;

export function parseMarkdown(md, file, { lang = 'ja', preamble = false } = {}) {
  const P = PATTERNS[lang];
  const fail = (n, msg) => {
    throw new Error(`${file}:${n + 1}: ${msg}`);
  };
  if (md.includes('\r')) fail(0, 'CRLF line endings: save the file with LF');
  const lines = md.split('\n');
  if (lines.at(-1) === '') lines.pop();
  const warnings = [];
  const text = (n, s) => {
    if (s !== s.trim()) fail(n, 'leading or trailing whitespace would be lost');
    if (MD_INLINE.test(s)) warnings.push(`${file}:${n + 1}: markdown-like characters are printed literally: ${s}`);
    return escapeInline(s);
  };

  const h1 = RE.h1.exec(lines[0] ?? '');
  if (!h1) fail(0, "the first line must be the '# ' title");
  const doc = { title: text(0, h1[1]), lead: null, preamble: [], sections: [], closing: [] };
  let mode = 'lead'; // lead → sections → closing
  let blocks = null; // blocks of the current section
  let list = null; // { block, ordered, last } of the list being built (null once interrupted)

  for (let n = 1; n < lines.length; n++) {
    const line = lines[n];
    if (line.trim() === '') continue; // blank lines separate blocks (a list may continue after one)

    if (mode === 'closing') {
      if (/^\s|^[#|>]|^\d+\. |^[-*+] /.test(line)) fail(n, 'only plain lines may follow the closing rule');
      doc.closing.push(text(n, line));
      continue;
    }
    if (RE.rule.test(line)) {
      if (mode !== 'sections') fail(n, "'---' before the first article");
      mode = 'closing';
      list = null;
      continue;
    }
    const h2 = RE.h2.exec(line);
    if (h2) {
      const heading = h2[1];
      const m = P.article.exec(heading);
      if (!m) fail(n, `section heading "${heading}" is not ${P.articleLabel}`);
      const num = Number(m[1]);
      if (num !== doc.sections.length + 1) fail(n, `${heading}: expected article ${doc.sections.length + 1}`);
      blocks = [];
      doc.sections.push({ id: `art-${num}`, heading: text(n, heading), blocks });
      mode = 'sections';
      list = null;
      continue;
    }
    if (/^#/.test(line)) fail(n, 'only one # title and ## article headings are supported');

    if (mode === 'lead') {
      if (doc.lead !== null && !preamble) fail(n, 'the lead must be one paragraph');
      if (!/^\S/.test(line) || RE.ol.test(line) || RE.ul.test(line) || RE.table.test(line)) fail(n, 'the lead must be a plain paragraph');
      if (lines[n + 1]?.trim()) fail(n + 1, 'a paragraph must be one line (soft line breaks are not supported)');
      // The first paragraph is the hero lead; with `preamble`, the others open the article.
      if (doc.lead === null) doc.lead = text(n, line);
      else doc.preamble.push({ kind: 'paragraph', text: text(n, line) });
      continue;
    }

    // ── tables ──
    if (RE.table.test(line)) {
      const rows = [];
      let k = n;
      while (k < lines.length && RE.table.test(lines[k])) rows.push([k, lines[k++]]);
      if (rows.length < 2 || !/^\|(\s*:?-+:?\s*\|)+$/.test(rows[1][1])) fail(n, 'a table needs a header row and a | --- | divider');
      const cells = ([at, l]) => {
        if (l.includes('\\|')) fail(at, 'escaped pipes are not supported');
        return l.slice(1, -1).split('|').map((c) => text(at, c.trim()));
      };
      const columns = cells(rows[0]);
      const body = rows.slice(2).map((r) => {
        const c = cells(r);
        if (c.length !== columns.length) fail(r[0], `${c.length} cells for ${columns.length} columns`);
        if (c.some((x) => x === '')) fail(r[0], 'empty cell');
        return c;
      });
      blocks.push({ kind: 'table', columns, rows: body });
      list = null;
      n = k - 1;
      continue;
    }

    // ── lists ──
    const ol = RE.ol.exec(line);
    const ul = ol ? null : RE.ul.exec(line);
    if (ol || ul) {
      const indent = (ol ?? ul)[1].length;
      const ordered = Boolean(ol);
      const body = text(n, ol ? ol[3] : ul[2]);
      const number = ol ? Number(ol[2]) : null;
      if (indent === 0) {
        if (list && list.ordered === ordered) {
          if (ordered && number !== list.next) fail(n, `list number ${number}, expected ${list.next}`);
        } else {
          if (list) fail(n, 'a bulleted and a numbered list touch: separate them with a paragraph');
          const block = { kind: 'list' };
          if (ordered) {
            block.ordered = true;
            if (number !== 1) block.start = number;
          }
          block.items = [];
          blocks.push(block);
          list = { block, ordered, next: number };
        }
        list.block.items.push(body);
        if (ordered) list.next = number + 1;
        list.nested = null;
        continue;
      }
      if (!list) fail(n, 'an indented list item outside a list');
      if (indent < 2 || indent > 4) fail(n, `sub-items must be indented by 2-4 spaces (got ${indent})`);
      const items = list.block.items;
      const parentAt = items.length - 1;
      if (!list.nested) {
        if (ordered && number !== 1) fail(n, `sub-list starts at ${number}, expected 1`);
        const parent = items[parentAt];
        const obj = { text: parent, ...(ordered ? { ordered: true } : {}), items: [] };
        items[parentAt] = obj;
        list.nested = { ordered, next: 1, obj };
      }
      if (list.nested.ordered !== ordered) fail(n, 'a sub-list mixes numbered and bulleted items');
      if (ordered && number !== list.nested.next) fail(n, `sub-item number ${number}, expected ${list.nested.next}`);
      list.nested.obj.items.push(body);
      list.nested.next++;
      continue;
    }

    // ── paragraphs ──
    if (/^\s/.test(line)) fail(n, 'indented text (a list item continuation?) is not supported');
    if (lines[n + 1]?.trim() && !RE.h2.test(lines[n + 1]) && !RE.rule.test(lines[n + 1])) {
      fail(n + 1, 'a paragraph must be one line, followed by a blank line (soft line breaks are not supported)');
    }
    blocks.push({ kind: 'paragraph', text: text(n, line) });
    list = null;
  }

  if (doc.lead === null) fail(0, 'no lead paragraph before the first article');
  if (!doc.sections.length) fail(0, 'no articles');
  if (doc.sections.some((s) => !s.blocks.length)) fail(0, 'an article without text');
  if (!doc.closing.length) fail(lines.length - 1, "no closing lines after '---'");
  doc.establishedDate = closingDate(doc.closing, P.established, P.ymd);
  if (!doc.establishedDate) fail(lines.length - 1, `no ${lang === 'ja' ? '制定日：YYYY年M月D日' : 'Established: D Month YYYY'} line in the closing`);
  doc.lastUpdated = closingDate(doc.closing, P.revised, P.ymd);
  if (!doc.preamble.length) delete doc.preamble;
  return { doc, warnings };
}

// ── document → TypeScript ────────────────────────────────────────────────────
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`;
const IDENT = /^[A-Za-z_$][\w$]*$/;
function ser(v, ind) {
  const pad = '  '.repeat(ind);
  if (typeof v === 'string') return q(v);
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) {
    const flat = v.map((x) => ser(x, ind + 1));
    const one = `[${flat.join(', ')}]`;
    if (v.every((x) => typeof x !== 'object') && one.length + pad.length < 100) return one;
    return `[\n${flat.map((x) => `${pad}  ${x},`).join('\n')}\n${pad}]`;
  }
  const entries = Object.entries(v).filter(([, x]) => x !== undefined);
  const flat = entries.map(([k, x]) => `${IDENT.test(k) ? k : q(k)}: ${ser(x, ind + 1)}`);
  const one = `{ ${flat.join(', ')} }`;
  if (!one.includes('\n') && one.length + pad.length < 100) return one;
  return `{\n${flat.map((x) => `${pad}  ${x},`).join('\n')}\n${pad}}`;
}

export function render(def, doc) {
  const out = {
    status: 'final',
    meta: def.meta,
    title: doc.title,
    lead: doc.lead,
    establishedDate: doc.establishedDate,
    lastUpdated: doc.lastUpdated,
    sectionNumbers: false,
    preamble: doc.preamble,
    sections: doc.sections,
    closing: doc.closing,
    related: def.related,
  };
  return `// GENERATED by scripts/legal-from-markdown.mjs from ${def.source}.
// That text is owner-approved and published VERBATIM: do not edit this file. Change
// the markdown (with the owner's approval) and run \`npm run legal:convert\`;
// \`npm run legal:lint\` checks the rendered page against the source, character by character.
import { defineLegalDoc } from '../types';

export default defineLegalDoc(${ser(out, 0)});
`;
}

// ── main ─────────────────────────────────────────────────────────────────────
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  let stale = 0;
  for (const def of VERBATIM_DOCS) {
    const md = readFileSync(join(ROOT, def.source), 'utf8');
    let parsed;
    try {
      parsed = parseMarkdown(md, def.source, def);
    } catch (e) {
      console.error(`legal:convert: ${e.message}`);
      process.exit(1);
    }
    for (const w of parsed.warnings) console.warn(`warn  ${w}`);
    const ts = render(def, parsed.doc);
    const target = join(ROOT, def.out);
    let current = null;
    try {
      current = readFileSync(target, 'utf8');
    } catch {}
    if (CHECK) {
      if (current !== ts) {
        stale++;
        console.error(`error ${def.out} is out of date with ${def.source} (run npm run legal:convert)`);
      }
      continue;
    }
    if (current !== ts) writeFileSync(target, ts);
    console.log(`${current === ts ? 'unchanged' : 'wrote'} ${def.out} (${parsed.doc.sections.length} articles, art-1…art-${parsed.doc.sections.length})`);
  }
  if (CHECK) {
    if (stale) process.exit(1);
    console.log(`legal:convert --check: ok (${VERBATIM_DOCS.length} generated documents up to date)`);
  }
}
