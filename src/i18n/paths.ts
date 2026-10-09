import type { Metadata } from 'next';
import type { Locale } from './config';
import { LEGAL_PAGES, type LegalPageKey } from '@/content/legal/pages';

export type { LegalPageKey } from '@/content/legal/pages';
export type PageKey = 'home' | 'creators' | LegalPageKey;

const PATHS: Record<PageKey, Record<Locale, string>> = {
  home: { ja: '/', en: '/en' },
  creators: { ja: '/creators', en: '/en/creators' },
  // Legal/support pages: JA at the store-registered URLs, EN under /en (src/content/legal/pages.ts).
  ...(Object.fromEntries(Object.entries(LEGAL_PAGES).map(([k, p]) => [k, { ja: p.ja, en: p.en }])) as Record<LegalPageKey, Record<Locale, string>>),
};

/** True for the legal/support pages (src/content/legal/pages.ts). */
export const isLegalPage = (page: PageKey): page is LegalPageKey => page !== 'home' && page !== 'creators';

/** ('ja','home') → '/', ('en','creators','#faq') → '/en/creators#faq'. JA is served unprefixed. */
export function localePath(lang: Locale, page: PageKey, hash?: string): string {
  const base = PATHS[page][lang];
  if (!hash) return base;
  return `${base}${hash.startsWith('#') ? hash : `#${hash}`}`;
}

/** Self-canonical plus reciprocal hreflang; x-default is the JA page (spec §8.1). */
export function alternatesFor(page: PageKey, lang: Locale): NonNullable<Metadata['alternates']> {
  const p = PATHS[page];
  return {
    canonical: p[lang],
    languages: { ja: p.ja, en: p.en, 'x-default': p.ja },
  };
}
