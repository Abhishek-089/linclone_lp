import type { ResolvingMetadata } from 'next';
import { legalMetadata, legalStaticParams, LegalRoute } from '@/components/legal/route';

// `/cookies` (via rewrite) and `/en/cookies` (content: src/content/legal/{ja,en}/cookies.ts).
type PageProps = { params: Promise<{ lang: string }> };

export const dynamicParams = false;
export const generateStaticParams = legalStaticParams;
export const generateMetadata = ({ params }: PageProps, parent: ResolvingMetadata) => legalMetadata('cookies', params, parent);

export default function Page({ params }: PageProps) {
  return <LegalRoute page="cookies" params={params} />;
}
