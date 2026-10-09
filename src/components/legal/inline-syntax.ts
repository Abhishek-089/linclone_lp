// The inline markdown subset of the legal pages (src/content/legal/types.ts
// `Inline`), shared by the renderer (./Inline.tsx), the content lint
// (scripts/lint-legal.mjs) and the converter/verbatim check
// (scripts/legal-from-markdown.mjs, scripts/legal-verbatim-check.mjs).
// Plain TS, no imports: the scripts load it with a tiny TS transpiler.

/**
 * One token per match, tried left to right:
 *   1. `\x` escape (x one of \ * [ ]) → the literal character x
 *   2. `**bold**`
 *   3. `[[placeholder]]`
 *   4. `[label](href)`
 * Anything that is not a token is literal text.
 */
export const INLINE_TOKEN = /\\([\\*[\]])|\*\*(.+?)\*\*|\[\[(.+?)\]\]|\[([^\]\n]+)\]\(([^)\s]+)\)/g;

/** Characters the renderer would read as markup; `escapeInline` prefixes them with a backslash. */
const MARKUP_CHARS = /[\\*[\]]/g;

/** Makes arbitrary text safe to use as an `Inline` string: it renders exactly as given. */
export function escapeInline(text: string): string {
  return text.replace(MARKUP_CHARS, (c) => `\\${c}`);
}

/** Hrefs the renderer will link; anything else prints as plain text. */
export function isSafeHref(href: string): boolean {
  return /^https:\/\/[^\s]+$/.test(href) || /^mailto:[^\s]+$/.test(href) || /^\/(?!\/)[^\s]*$/.test(href) || /^#[a-z0-9-]+$/.test(href);
}
