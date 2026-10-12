import type { ResolvingMetadata } from 'next';
import { legalMetadata, legalStaticParams, LegalRoute } from '@/components/legal/route';

// LC Studio's Terms of Service: `/lc-studio/terms` (English) and `/lc-studio/terms/ja`, both via
// rewrite (src/i18n/paths.ts). Content: src/content/legal/{ja,en}/studio-terms.ts, generated
// verbatim from docs/legal/source/ (scripts/legal-from-markdown.mjs). Google Play links here.
type PageProps = { params: Promise<{ lang: string }> };

export const dynamicParams = false;
export const generateStaticParams = legalStaticParams;
export const generateMetadata = ({ params }: PageProps, parent: ResolvingMetadata) => legalMetadata('studioTerms', params, parent);

export default function Page({ params }: PageProps) {
  return <LegalRoute page="studioTerms" params={params} />;
}
