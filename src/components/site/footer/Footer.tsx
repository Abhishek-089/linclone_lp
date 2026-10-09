import type { ReactNode } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localePath, type PageKey } from '@/i18n/paths';
import { LEGAL_PAGES, LEGAL_PAGE_KEYS } from '@/content/legal/pages';
import { mailtoStudio } from '@/lib/store-links';
import { SOCIAL } from '@/lib/site-config';
import { Icon } from '../icons/Icon';
import { StoreBadges } from '../download/StoreBadges';
import { StudioStoreCTA } from '../download/StudioStoreCTA';
import { LangPill } from '../header/LangPill';

type Link = { href: string; label: string; analytics?: string };

function Column({ title, links }: { title: string; links: Link[] }): ReactNode {
  return (
    <details className="footer-col">
      <summary>
        {title}
        <Icon name="expand_more" size={20} />
      </summary>
      <nav aria-label={title}>
        <ul>
          {links.map((l) => (
            <li key={l.href + l.label}>
              <a href={l.href} data-analytics={l.analytics}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}

/**
 * Site footer (spec §4.1, §5.14): night-deep with a 4% watermark wordmark;
 * four link columns on desktop, <details> accordions on mobile. Links are
 * plain <a> (the legacy pages live under a different root layout).
 */
export function Footer({ d, lang, page }: { d: Dictionary; lang: Locale; page: PageKey }) {
  const L = d.footer.links;
  const anchor = (hash: string) => (page === 'home' ? hash : localePath(lang, 'home', hash));
  const home = page === 'home';
  const creators = page === 'creators';
  // Support and legal columns come from the legal page registry, in the locale of this page.
  const legalLinks = (group: 'support' | 'legal'): Link[] =>
    LEGAL_PAGE_KEYS.filter((k) => LEGAL_PAGES[k].group === group).map((k) => ({ href: localePath(lang, k), label: LEGAL_PAGES[k].label[lang] }));
  return (
    <footer className="site-footer" data-surface="dark" data-page={home ? 'home' : 'creators'} data-download-block={home ? '' : undefined}>
      <span className="footer-watermark" aria-hidden="true">
        {d.common.brand}
      </span>
      <div className="container-site">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element -- brand mark */}
            <img src="/brand/mark-white-256.png" alt="" width={36} height={36} loading="lazy" decoding="async" fetchPriority="low" />
            <p className="wordmark">{d.common.brand}</p>
            <p className="footer-tagline t-small">{d.footer.tagline}</p>
            {creators ? <StudioStoreCTA d={d} lang={lang} compact labelled /> : <StoreBadges d={d} lang={lang} placement="footer" />}
          </div>
          <div className="footer-cols">
            <Column
              title={d.footer.columns.app}
              links={[
                { href: anchor('#call'), label: L.call },
                { href: anchor('#morning-call'), label: L.morning },
                { href: anchor('#chat'), label: L.chat },
                { href: anchor('#live'), label: L.live },
                { href: anchor('#grow'), label: L.grow },
                { href: anchor('#faq'), label: L.faq },
                { href: localePath(lang, 'home'), label: L.fanApp },
              ]}
            />
            <Column
              title={d.footer.columns.creators}
              links={[
                { href: localePath(lang, 'creators'), label: L.studio, analytics: home ? 'creators_nav:footer' : undefined },
                { href: mailtoStudio(lang, d), label: L.requestInvite, analytics: 'studio_mailto:footer' },
              ]}
            />
            <Column title={d.footer.columns.support} links={legalLinks('support')} />
            <Column title={d.footer.columns.legal} links={legalLinks('legal')} />
          </div>
        </div>
        {SOCIAL.length ? (
          <ul className="footer-social">
            {SOCIAL.map((s) => (
              <li key={s.url}>
                <a href={s.url} rel="me noopener">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="footer-bottom">
          <LangPill lang={lang} page={page} d={d} />
          <p className="t-small">{d.footer.copyright}</p>
          <p className="t-small">{d.common.disclosure}</p>
        </div>
      </div>
    </footer>
  );
}
