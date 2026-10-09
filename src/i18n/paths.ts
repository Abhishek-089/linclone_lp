import type { Metadata } from 'next';
import type { Locale } from './config';
import { LEGAL_PAGES, type LegalPageKey } from '@/content/legal/pages';

export type { LegalPageKey } from '@/content/legal/pages';
export type StudioLegalKey = 'studioPrivacy' | 'studioTerms';
export type PageKey = 'home' | 'creators' | StudioLegalKey | LegalPageKey;

const PATHS: Record<PageKey, Record<Locale, string>> = {
  home: { ja: '/', en: '/en' },
  creators: { ja: '/creators', en: '/en/creators' },
  // LC Studio's legal pages keep the URLs Google Play and the app already link
  // to: English unprefixed, Japanese with /ja at the end. next.config.ts
  // rewrites both onto [lang] and redirects the [lang] forms here.
  studioPrivacy: { ja: '/lc-studio/privacy/ja', en: '/lc-studio/privacy' },
  studioTerms: { ja: '/lc-studio/terms/ja', en: '/lc-studio/terms' },
  // Fan legal/support pages: JA at the store-registered URLs, EN under /en (src/content/legal/pages.ts).
  ...(Object.fromEntries(Object.entries(LEGAL_PAGES).map(([k, p]) => [k, { ja: p.ja, en: p.en }])) as Record<LegalPageKey, Record<Locale, string>>),
};

/** True for the fan legal/support pages (src/content/legal/pages.ts); not the LC Studio legal pages. */
export const isLegalPage = (page: PageKey): page is LegalPageKey => Object.hasOwn(LEGAL_PAGES, page);

/** True for LC Studio's own legal pages (src/app/(site)/[lang]/lc-studio/*). */
export const isStudioLegalPage = (page: PageKey): page is StudioLegalKey => page === 'studioPrivacy' || page === 'studioTerms';

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
