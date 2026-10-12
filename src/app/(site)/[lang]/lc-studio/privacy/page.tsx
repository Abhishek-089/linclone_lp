import type { ResolvingMetadata } from 'next';
import { legalMetadata, legalStaticParams, LegalRoute } from '@/components/legal/route';

// LC Studio's Privacy Policy: `/lc-studio/privacy` (English) and `/lc-studio/privacy/ja`, both via
// rewrite (src/i18n/paths.ts). Content: src/content/legal/{ja,en}/studio-privacy.ts, generated
// verbatim from docs/legal/source/ (scripts/legal-from-markdown.mjs). Google Play links here.
type PageProps = { params: Promise<{ lang: string }> };

export const dynamicParams = false;
export const generateStaticParams = legalStaticParams;
export const generateMetadata = ({ params }: PageProps, parent: ResolvingMetadata) => legalMetadata('studioPrivacy', params, parent);

export default function Page({ params }: PageProps) {
  return <LegalRoute page="studioPrivacy" params={params} />;
}
