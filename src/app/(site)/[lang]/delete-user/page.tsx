import type { ResolvingMetadata } from 'next';
import { legalMetadata, legalStaticParams, LegalRoute } from '@/components/legal/route';

// `/delete-user` (via rewrite) and `/en/delete-user` (content: src/content/legal/{ja,en}/delete-user.ts).
type PageProps = { params: Promise<{ lang: string }> };

export const dynamicParams = false;
export const generateStaticParams = legalStaticParams;
export const generateMetadata = ({ params }: PageProps, parent: ResolvingMetadata) => legalMetadata('deleteUser', params, parent);

export default function Page({ params }: PageProps) {
  return <LegalRoute page="deleteUser" params={params} />;
}
