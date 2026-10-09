import type { SectionProps } from '@/i18n/types';
import type { Locale } from '@/i18n/config';
import { localePath } from '@/i18n/paths';
import { LEGAL_PAGES } from '@/content/legal/pages';
import { Section, Eyebrow } from '@/components/site';
import texts from './lc-studio-legal.json';
import './legal.css';

/**
 * LC Studio's Privacy Policy and Terms of Service, word for word as the app
 * shows them in its in-app reader. Google Play links to the privacy page as
 * the app's privacy policy.
 *
 * lc-studio-legal.json is copied verbatim from clone-net-web
 * `prisma/migrations/20261002200000_studio_legal_docs_v0_2/migration.sql`
 * (version 0.2, English and Japanese): the rows `GET /studio/v1/legal/:doc`
 * serves. When a new version is published there, replace the JSON with it so
 * the web copy and the in-app copy never disagree.
 *
 * The bodies use four block shapes, one per blank-line-separated block: "## "
 * headings, numbered clauses ("1. "), sub-clauses ("(a) ", "（1）") and plain
 * paragraphs. Numbers stay in the text: the clauses refer to each other by
 * number. The first block is the effective date and version.
 */
export type StudioLegalDoc = 'privacy' | 'terms';

const PAGE = { privacy: 'studioPrivacy', terms: 'studioTerms' } as const;

/** The document's own Contact section names only the company; Google Play
 *  wants a privacy point of contact, so the page adds the addresses the rest
 *  of linclone.com already publishes, outside the document's text. */
const CONTACT = { privacy: 'privacy@linclone.com', terms: 'legal@linclone.com' } as const;
const CONTACT_LABEL: Record<Locale, Record<StudioLegalDoc, string>> = {
  en: { privacy: 'Questions about this policy or your personal information', terms: 'Questions about these terms' },
  ja: { privacy: '本ポリシー及び個人情報の取扱いに関するお問い合わせ', terms: '本規約に関するお問い合わせ' },
};

export function studioLegalTitle(doc: StudioLegalDoc, lang: Locale): string {
  return texts[doc][lang].title;
}

function Block({ text }: { text: string }) {
  if (text.startsWith('## ')) return <h2 className="t-h3 lg-h">{text.slice(3)}</h2>;
  if (/^(\([a-z0-9]+\)|（[0-9０-９]+）)/.test(text)) return <p className="t-body lg-sub">{text}</p>;
  if (/^\d+\. /.test(text)) return <p className="t-body lg-clause">{text}</p>;
  return <p className="t-body">{text}</p>;
}

/** Same recipe as the creators FAQ: a sticky title column beside the reading column. */
export function StudioLegal({ d, lang, doc }: SectionProps & { doc: StudioLegalDoc }) {
  const { title, body } = texts[doc][lang];
  const [effective, ...blocks] = body
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);
  const other: StudioLegalDoc = doc === 'privacy' ? 'terms' : 'privacy';
  return (
    <Section id="document" surface="studio" labelledBy="legal-title" className="lg-page">
      <div className="container-site lg-grid">
        <header className="lg-aside">
          <Eyebrow label={d.footer.columns.legal} tone="violet" />
          <h1 id="legal-title" className="t-h2">
            {title}
          </h1>
          <p className="t-small">{effective}</p>
          <p className="lg-cross">
            <a href={localePath(lang, PAGE[other])}>{LEGAL_PAGES[other].label[lang]}</a>
          </p>
        </header>
        <div className="lg-doc">
          <article className="lg-text">
            {blocks.map((text, i) => (
              <Block key={i} text={text} />
            ))}
          </article>
          <p className="lg-contact t-body">
            {CONTACT_LABEL[lang][doc]}
            <br />
            <a href={`mailto:${CONTACT[doc]}`}>{CONTACT[doc]}</a>
          </p>
        </div>
      </div>
    </Section>
  );
}
