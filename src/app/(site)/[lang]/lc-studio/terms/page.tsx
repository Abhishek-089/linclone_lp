import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { alternatesFor } from '@/i18n/paths';
import { SkipLink, Header, Footer } from '@/components/site';
import { StudioLegal, studioLegalTitle } from '@/components/sections/legal/StudioLegal';

// LC Studio's Terms of Service: `/lc-studio/terms` (English) and
// `/lc-studio/terms/ja`, both via rewrite (see paths.ts).

type PageProps = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return { title: studioLegalTitle('terms', lang), alternates: alternatesFor('studioTerms', lang) };
}

export default async function StudioTermsPage({ params }: PageProps) {
  const lang = (await params).lang as Locale;
  const d = getDictionary(lang);
  return (
    <>
      <SkipLink href="#main" label={d.common.skip.toContent} />
      <Header d={d} lang={lang} page="studioTerms" />
      <main id="main" className="overflow-x-clip">
        <StudioLegal d={d} lang={lang} doc="terms" />
      </main>
      <Footer d={d} lang={lang} page="studioTerms" />
    </>
  );
}
