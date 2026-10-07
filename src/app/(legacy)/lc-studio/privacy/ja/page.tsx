import type { Metadata } from 'next';
import LegalDocument, { legalTitle } from '../../LegalDocument';

export const metadata: Metadata = {
  title: `${legalTitle('privacy', 'ja')} | LinClone`,
};

export default function LcStudioPrivacyJaPage() {
  return <LegalDocument doc="privacy" language="ja" />;
}
