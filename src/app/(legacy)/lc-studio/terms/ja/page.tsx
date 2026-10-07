import type { Metadata } from 'next';
import LegalDocument, { legalTitle } from '../../LegalDocument';

export const metadata: Metadata = {
  title: `${legalTitle('terms', 'ja')} | LinClone`,
};

export default function LcStudioTermsJaPage() {
  return <LegalDocument doc="terms" language="ja" />;
}
