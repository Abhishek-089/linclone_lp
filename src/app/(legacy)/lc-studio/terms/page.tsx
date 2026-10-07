import type { Metadata } from 'next';
import LegalDocument, { legalTitle } from '../LegalDocument';

export const metadata: Metadata = {
  title: `${legalTitle('terms', 'en')} | LinClone`,
};

export default function LcStudioTermsPage() {
  return <LegalDocument doc="terms" language="en" />;
}
