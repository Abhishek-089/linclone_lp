import type { Metadata } from 'next';
import LegalDocument, { legalTitle } from '../LegalDocument';

export const metadata: Metadata = {
  title: `${legalTitle('privacy', 'en')} | LinClone`,
};

export default function LcStudioPrivacyPage() {
  return <LegalDocument doc="privacy" language="en" />;
}
