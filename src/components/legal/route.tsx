import type { Metadata, ResolvingMetadata } from 'next';
import { LOCALES, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { alternatesFor, localePath } from '@/i18n/paths';
import { getLegalDoc, type LegalPageKey } from '@/content/legal';
import { LegalPage } from './LegalPage';

// Shared route plumbing for src/app/(site)/[lang]/<legal page>/page.tsx: each
// route file only names its page key. SSG for ja and en; no Smart App Banner.

type Params = Promise<{ lang: string }>;

export function legalStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function legalMetadata(page: LegalPageKey, params: Params, parent: ResolvingMetadata): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const doc = getLegalDoc(page, lang);
  const url = localePath(lang, page);
  // Reuse the fan OG card of [lang]/opengraph-image.tsx: a page-level openGraph
  // replaces the inherited one, so carry its images over (twitter:image falls back to them).
  const inherited = await parent;
  const images = inherited.openGraph?.images ?? [];
  return {
    title: { absolute: doc.meta.title },
    description: doc.meta.description,
    alternates: alternatesFor(page, lang),
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      siteName: 'LinClone',
      url,
      title: doc.meta.title,
      description: doc.meta.description,
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
      alternateLocale: [lang === 'ja' ? 'en_US' : 'ja_JP'],
      ...(doc.lastUpdated ? { modifiedTime: doc.lastUpdated } : {}),
      images,
    },
    twitter: { card: 'summary_large_image', title: doc.meta.title, description: doc.meta.description },
  };
}

export async function LegalRoute({ page, params }: { page: LegalPageKey; params: Params }) {
  const lang = (await params).lang as Locale;
  return <LegalPage page={page} lang={lang} d={getDictionary(lang)} doc={getLegalDoc(page, lang)} />;
}
