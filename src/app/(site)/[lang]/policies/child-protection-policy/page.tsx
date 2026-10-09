import type { ResolvingMetadata } from 'next';
import { legalMetadata, legalStaticParams, LegalRoute } from '@/components/legal/route';

// `/policies/child-protection-policy` (via rewrite) and `/en/policies/child-protection-policy` (content: src/content/legal/{ja,en}/child-protection.ts).
type PageProps = { params: Promise<{ lang: string }> };

export const dynamicParams = false;
export const generateStaticParams = legalStaticParams;
export const generateMetadata = ({ params }: PageProps, parent: ResolvingMetadata) => legalMetadata('childProtection', params, parent);

export default function Page({ params }: PageProps) {
  return <LegalRoute page="childProtection" params={params} />;
}
