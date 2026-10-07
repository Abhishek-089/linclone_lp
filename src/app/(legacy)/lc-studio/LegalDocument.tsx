import React from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import texts from './legal-texts.json';

const montserrat = Montserrat({ subsets: ['latin'], weight: '700' });

/**
 * LC Studio's Terms of Service and Privacy Policy, word for word as the app
 * shows them in its in-app reader.
 *
 * legal-texts.json is copied verbatim from clone-net-web
 * `prisma/migrations/20261002200000_studio_legal_docs_v0_2/migration.sql`
 * (version 0.2, English and Japanese) — the rows `GET /studio/v1/legal/:doc`
 * serves. When a new version is published there, replace the JSON with it so
 * the web copy and the in-app copy never disagree. Google Play links to the
 * privacy page as the app's privacy policy.
 *
 * These live under /lc-studio/, not /studio/: apple-app-site-association
 * claims /studio/* for the LC Studio app, so an iPhone with the app installed
 * would open a /studio/ link in the app instead of showing the page.
 *
 * The bodies use four block shapes, one per blank-line-separated block: "## "
 * headings, numbered clauses ("1. "), sub-clauses ("(a) ", "（1）"), and plain
 * paragraphs. Numbers stay in the text because the clauses refer to each
 * other by number.
 */
export type LegalDoc = 'privacy' | 'terms';
export type LegalLanguage = 'en' | 'ja';

const PATH: Record<LegalDoc, string> = {
  privacy: '/lc-studio/privacy',
  terms: '/lc-studio/terms',
};

export const legalHref = (doc: LegalDoc, language: LegalLanguage) =>
  language === 'en' ? PATH[doc] : `${PATH[doc]}/ja`;

/** The page around the document; the document itself is never edited here. */
const CHROME = {
  en: {
    switchTo: '日本語',
    other: { privacy: 'Terms of Service', terms: 'Privacy Policy' },
    contact: {
      privacy: 'Questions about this policy or your personal information:',
      terms: 'Questions about these terms:',
    },
  },
  ja: {
    switchTo: 'English',
    other: { privacy: '利用規約', terms: 'プライバシーポリシー' },
    contact: {
      privacy: '本ポリシー及び個人情報の取扱いに関するお問い合わせ：',
      terms: '本規約に関するお問い合わせ：',
    },
  },
} as const;

/** The addresses the rest of linclone.com already publishes for each subject. */
const CONTACT: Record<LegalDoc, string> = {
  privacy: 'privacy@linclone.com',
  terms: 'legal@linclone.com',
};

export function legalTitle(doc: LegalDoc, language: LegalLanguage): string {
  return texts[doc][language].title;
}

function Block({ text }: { text: string }) {
  if (text.startsWith('## ')) {
    return <h2 className="text-2xl font-semibold text-white pt-4">{text.slice(3)}</h2>;
  }
  if (/^(\([a-z0-9]+\)|（[0-9０-９]+）)/.test(text)) {
    return <p className="text-gray-300 leading-relaxed pl-10">{text}</p>;
  }
  if (/^\d+\. /.test(text)) {
    return <p className="text-gray-300 leading-relaxed pl-5">{text}</p>;
  }
  return <p className="text-gray-300 leading-relaxed">{text}</p>;
}

export default function LegalDocument({
  doc,
  language,
}: {
  doc: LegalDoc;
  language: LegalLanguage;
}) {
  const { title, body } = texts[doc][language];
  const chrome = CHROME[language];
  const other: LegalDoc = doc === 'privacy' ? 'terms' : 'privacy';
  const [effective, ...blocks] = body
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div
      lang={language}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
    >
      <header className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <span className={`${montserrat.className} text-2xl font-bold text-white tracking-widest`}>
              LinClone
            </span>
          </Link>
          <Link
            href={legalHref(doc, language === 'en' ? 'ja' : 'en')}
            hrefLang={language === 'en' ? 'ja' : 'en'}
            className="text-white/80 hover:text-white transition-colors duration-300"
          >
            {chrome.switchTo}
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <article className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 border border-white/20 break-words">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-300 mb-8">{effective}</p>
          <div className="space-y-4">
            {blocks.map((text, i) => (
              <Block key={i} text={text} />
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed mt-10 pt-6 border-t border-white/20">
            {chrome.contact[doc]}{' '}
            <a href={`mailto:${CONTACT[doc]}`} className="text-white underline">
              {CONTACT[doc]}
            </a>
          </p>
        </article>
        <p className="mt-8 text-center">
          <Link
            href={legalHref(other, language)}
            className="text-white/80 hover:text-white underline transition-colors duration-300"
          >
            {chrome.other[doc]}
          </Link>
        </p>
      </main>
    </div>
  );
}
