import type { ResolvingMetadata } from 'next';
import { legalMetadata, legalStaticParams, LegalRoute } from '@/components/legal/route';

// `/terms` (via rewrite) and `/en/terms` (content: src/content/legal/{ja,en}/terms.ts).
type PageProps = { params: Promise<{ lang: string }> };

export const dynamicParams = false;
export const generateStaticParams = legalStaticParams;
export const generateMetadata = ({ params }: PageProps, parent: ResolvingMetadata) => legalMetadata('terms', params, parent);

export default function Page({ params }: PageProps) {
  return <LegalRoute page="terms" params={params} />;
}
