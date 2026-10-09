import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries';
import { localePath } from '@/i18n/paths';
import { LEGAL_PAGES, type LegalPageKey, type LegalDoc } from '@/content/legal';
import { LEGAL_UI, type LegalUi } from '@/content/legal/ui';
import { legalGraph } from '@/lib/jsonld';
import { JsonLd } from '@/components/seo/JsonLd';
import { SkipLink, Header, Footer, Eyebrow } from '@/components/site';
import { LegalIcon, type LegalIconName } from './icons/LegalIcon';
import { Inline } from './Inline';
import { LegalSections, pad, sectionNumbersOn } from './Sections';
import { ContactCard } from './ContactCard';
import { LegalEnhancer } from './LegalEnhancer.client';
import './legal.css';

export function formatDate(iso: string, lang: Locale): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (lang === 'ja') return `${y}年${m}月${d}日`;
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(Date.UTC(y, m - 1, d));
}

function Dates({ doc, ui, lang }: { doc: LegalDoc; ui: LegalUi; lang: Locale }) {
  const items = [
    doc.establishedDate ? { icon: 'calendar_month' as const, label: ui.established, iso: doc.establishedDate } : null,
    doc.effectiveDate ? { icon: 'calendar_month' as const, label: ui.effective, iso: doc.effectiveDate } : null,
    doc.lastUpdated ? { icon: 'update' as const, label: ui.updated, iso: doc.lastUpdated } : null,
  ].filter((x) => x !== null);
  if (!items.length) return null;
  return (
    <dl className="legal-dates">
      {items.map((it) => (
        <div key={it.label} className="legal-date">
          <LegalIcon name={it.icon} size={16} />
          <dt>{it.label}</dt>
          <dd>
            <time dateTime={it.iso}>{formatDate(it.iso, lang)}</time>
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Toc({ doc, ui, numbered, variant }: { doc: LegalDoc; ui: LegalUi; numbered: boolean; variant: 'desktop' | 'mobile' }) {
  const list = (
    <ol className="legal-toc-list" data-numbered={numbered ? '' : undefined}>
      {doc.sections.map((s, i) => (
        <li key={s.id}>
          <a href={`#${s.id}`} className="legal-toc-link" data-toc-link="">
            {numbered ? <span className="legal-toc-num">{pad(i + 1)}</span> : null}
            <span>{s.heading}</span>
          </a>
        </li>
      ))}
    </ol>
  );
  if (variant === 'mobile') {
    return (
      <details className="legal-toc-mobile glass" data-toc-mobile="">
        <summary>
          <LegalIcon name="toc" size={20} />
          <span>{ui.contents}</span>
          <span className="legal-toc-count" aria-hidden="true">
            {doc.sections.length}
          </span>
          <LegalIcon name="expand_more" size={20} className="legal-toc-chevron" />
        </summary>
        <nav aria-label={ui.contents}>{list}</nav>
      </details>
    );
  }
  return (
    <nav className="legal-toc" aria-label={ui.contents}>
      <p className="legal-toc-title" aria-hidden="true">
        {ui.contents}
      </p>
      <div className="legal-toc-scroll" data-toc-scroll="">
        {list}
      </div>
    </nav>
  );
}

function Related({ keys, lang, ui }: { keys: readonly string[]; lang: Locale; ui: LegalUi }) {
  const pages = keys.filter((k): k is LegalPageKey => k in LEGAL_PAGES);
  if (!pages.length) return null;
  return (
    <section className="legal-related" aria-labelledby="legal-related-title">
      <div className="legal-frame">
        <h2 id="legal-related-title" className="legal-related-title">
          {ui.related}
        </h2>
        <ul className="legal-related-grid">
          {pages.map((k) => (
            <li key={k}>
              <a href={localePath(lang, k)} className="legal-related-card glass">
                <span className="legal-disc" aria-hidden="true">
                  <LegalIcon name={LEGAL_PAGES[k].icon as LegalIconName} size={22} />
                </span>
                <span className="legal-related-label">{LEGAL_PAGES[k].label[lang]}</span>
                <LegalIcon name="arrow_forward" size={20} className="legal-related-arrow" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * Shared layout of every legal/support page (src/content/legal/**): hero
 * (eyebrow, H1, lead, dates, language note, optional quick actions or "at a
 * glance" cards), then a sticky scroll-spied TOC beside a readable article
 * (./Sections.tsx: sections, then the document's closing lines), related
 * pages, and the site footer. All text is server-rendered.
 */
export function LegalPage({ page, lang, d, doc }: { page: LegalPageKey; lang: Locale; d: Dictionary; doc: LegalDoc }) {
  const ui = LEGAL_UI[lang];
  const def = LEGAL_PAGES[page];
  const other: Locale = lang === 'ja' ? 'en' : 'ja';
  const numbered = sectionNumbersOn(def, doc);
  return (
    <>
      <SkipLink href="#main" label={d.common.skip.toContent} />
      <Header d={d} lang={lang} page={page} />
      <main id="main" className="legal" data-legal-root="" data-legal-page={page} data-group={def.group}>
        <header id="top" className="legal-hero" data-surface="light" data-legal-hero="">
          <div className="legal-frame legal-hero-inner">
            <nav className="legal-crumbs" aria-label={ui.breadcrumb}>
              <ol>
                <li>
                  <a href={localePath(lang, 'home')}>{ui.breadcrumbHome}</a>
                </li>
                <li aria-current="page">{def.label[lang]}</li>
              </ol>
            </nav>
            {doc.eyebrow ? <Eyebrow label={doc.eyebrow} /> : null}
            <h1 id="legal-title" className="legal-h1">
              {doc.title}
            </h1>
            <p className="legal-lead">
              <Inline text={doc.lead} />
            </p>
            <div className="legal-meta">
              <Dates doc={doc} ui={ui} lang={lang} />
              <p className="legal-lang-note" lang={other}>
                <LegalIcon name="language" size={16} />
                <span>{ui.langNote}</span>
                <a href={localePath(other, page)} hrefLang={other} data-analytics={`lang_switch:${other}`}>
                  {ui.langNoteLink}
                </a>
              </p>
            </div>
            {ui.langPrevails && def.group === 'legal' ? <p className="legal-prevails">{ui.langPrevails}</p> : null}
            {doc.status === 'draft' ? (
              <p className="legal-draft" role="note">
                <LegalIcon name="edit_note" size={18} />
                <span>{ui.draftBanner}</span>
              </p>
            ) : null}

            {doc.quickActions?.length ? (
              <nav className="legal-quick" aria-label={ui.quickActions}>
                <ul>
                  {doc.quickActions.map((q) => (
                    <li key={q.href}>
                      <a href={q.href} className="legal-quick-tile glass">
                        <span className="legal-disc" aria-hidden="true">
                          <LegalIcon name={q.icon as LegalIconName} size={22} />
                        </span>
                        <span className="legal-quick-title">{q.title}</span>
                        <span className="legal-quick-body">{q.body}</span>
                        <LegalIcon name="arrow_forward" size={18} className="legal-quick-arrow" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}

            {doc.atAGlance?.length ? (
              <section className="legal-glance" aria-labelledby="legal-glance-title">
                <h2 id="legal-glance-title" className="legal-glance-title">
                  {ui.atAGlance}
                </h2>
                <ul className="legal-glance-grid">
                  {doc.atAGlance.map((g) => (
                    <li key={g.title} className="legal-glance-card glass">
                      <span className="legal-disc" aria-hidden="true">
                        <LegalIcon name={g.icon as LegalIconName} size={22} />
                      </span>
                      <h3 className="legal-glance-card-title">{g.title}</h3>
                      <p className="legal-glance-card-body">
                        <Inline text={g.body} />
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </header>

        <div className="legal-frame legal-body">
          <aside className="legal-aside">
            <Toc doc={doc} ui={ui} numbered={numbered} variant="desktop" />
          </aside>
          <article className="legal-article" aria-labelledby="legal-title">
            <Toc doc={doc} ui={ui} numbered={numbered} variant="mobile" />
            <LegalSections doc={doc} ui={ui} numbered={numbered} />
            {doc.contactCard ? (
              <div className="legal-closing">
                <ContactCard card={doc.contactCard} ui={ui} headingLevel="h2" />
              </div>
            ) : null}
            <p className="legal-end">
              <a href="#top" className="legal-end-link">
                <LegalIcon name="arrow_upward" size={18} />
                {ui.backToTop}
              </a>
            </p>
          </article>
        </div>

        {doc.related?.length ? <Related keys={doc.related} lang={lang} ui={ui} /> : null}
      </main>
      <Footer d={d} lang={lang} page={page} />
      <a href="#top" className="legal-totop glass-live" data-legal-totop="" aria-label={ui.backToTop}>
        <LegalIcon name="arrow_upward" size={22} />
      </a>
      <LegalEnhancer copiedLabel={ui.linkCopied} />
      <JsonLd data={legalGraph(lang, page, doc, ui.breadcrumbHome)} />
    </>
  );
}
