import type { MetadataRoute } from 'next';
import { SITE, SITE_LAST_MODIFIED } from '@/lib/site-config';
import { LEGAL_PAGE_KEYS, getLegalDoc } from '@/content/legal';
import { localePath, type PageKey } from '@/i18n/paths';

// Marketing and legal/support pages, each with reciprocal hreflang (spec §8.4;
// x-default = JA). /invite, /share/* and /get are deliberately absent.
export default function sitemap(): MetadataRoute.Sitemap {
  const O = SITE.origin;
  // Never a future lastmod (a mis-typed date would make crawlers distrust it).
  const notFuture = (iso: string) => new Date(Math.min(Date.parse(iso), Date.now()));
  const entries = (page: PageKey, lastModified: { ja?: string; en?: string }) => {
    const ja = O + localePath('ja', page);
    const en = O + localePath('en', page);
    const alternates = { languages: { ja, en, 'x-default': ja } };
    return [
      { url: ja, alternates, ...(lastModified.ja ? { lastModified: notFuture(lastModified.ja) } : {}) },
      { url: en, alternates, ...(lastModified.en ? { lastModified: notFuture(lastModified.en) } : {}) },
    ];
  };
  const marketing = (['home', 'creators'] as const).flatMap((p) => entries(p, { ja: SITE_LAST_MODIFIED, en: SITE_LAST_MODIFIED }));
  const modified = (p: (typeof LEGAL_PAGE_KEYS)[number], l: 'ja' | 'en') => {
    const doc = getLegalDoc(p, l);
    return doc.lastUpdated ?? doc.establishedDate;
  };
  const legal = LEGAL_PAGE_KEYS.flatMap((p) => entries(p, { ja: modified(p, 'ja'), en: modified(p, 'en') }));
  return [...marketing, ...legal];
}
