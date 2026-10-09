import type { ResolvingMetadata } from 'next';
import { legalMetadata, legalStaticParams, LegalRoute } from '@/components/legal/route';

// `/privacy` (via rewrite) and `/en/privacy` (content: src/content/legal/{ja,en}/privacy.ts).
type PageProps = { params: Promise<{ lang: string }> };

export const dynamicParams = false;
export const generateStaticParams = legalStaticParams;
export const generateMetadata = ({ params }: PageProps, parent: ResolvingMetadata) => legalMetadata('privacy', params, parent);

export default function Page({ params }: PageProps) {
  return <LegalRoute page="privacy" params={params} />;
}
