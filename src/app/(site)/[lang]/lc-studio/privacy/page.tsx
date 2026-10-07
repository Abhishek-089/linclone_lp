import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { alternatesFor } from '@/i18n/paths';
import { SkipLink, Header, Footer } from '@/components/site';
import { StudioLegal, studioLegalTitle } from '@/components/sections/legal/StudioLegal';

// LC Studio's Privacy Policy: `/lc-studio/privacy` (English) and
// `/lc-studio/privacy/ja`, both via rewrite (see paths.ts).

type PageProps = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return { title: studioLegalTitle('privacy', lang), alternates: alternatesFor('studioPrivacy', lang) };
}

export default async function StudioPrivacyPage({ params }: PageProps) {
  const lang = (await params).lang as Locale;
  const d = getDictionary(lang);
  return (
    <>
      <SkipLink href="#main" label={d.common.skip.toContent} />
      <Header d={d} lang={lang} page="studioPrivacy" />
      <main id="main" className="overflow-x-clip">
        <StudioLegal d={d} lang={lang} doc="privacy" />
      </main>
      <Footer d={d} lang={lang} page="studioPrivacy" />
    </>
  );
}
