import type { ResolvingMetadata } from 'next';
import { legalMetadata, legalStaticParams, LegalRoute } from '@/components/legal/route';

// `/support` (via rewrite) and `/en/support` (content: src/content/legal/{ja,en}/support.ts).
type PageProps = { params: Promise<{ lang: string }> };

export const dynamicParams = false;
export const generateStaticParams = legalStaticParams;
export const generateMetadata = ({ params }: PageProps, parent: ResolvingMetadata) => legalMetadata('support', params, parent);

export default function Page({ params }: PageProps) {
  return <LegalRoute page="support" params={params} />;
}
