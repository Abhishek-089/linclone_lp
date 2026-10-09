import type { LegalUi } from '@/content/legal/ui';
import { SUBSCRIPTION_MANAGEMENT } from '@/lib/site-config';
import { LegalIcon } from './icons/LegalIcon';
import { Inline } from './Inline';

/** The two official subscription-management pages (Apple, Google), as large tap targets. */
export function StoreLinks({ ui, title, body }: { ui: LegalUi; title?: string; body?: string }) {
  const links = [
    { href: SUBSCRIPTION_MANAGEMENT.apple, icon: 'apple', label: ui.appStore },
    { href: SUBSCRIPTION_MANAGEMENT.google, icon: 'google-g', label: ui.googlePlay },
  ] as const;
  return (
    <div className="legal-stores">
      <p className="legal-stores-title">
        <LegalIcon name="autorenew" size={18} />
        {title ?? ui.storeLinksTitle}
      </p>
      {body ? (
        <p className="legal-stores-body">
          <Inline text={body} />
        </p>
      ) : null}
      <ul className="legal-stores-list">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} rel="noopener" className="legal-store-link" data-print={l.href.replace(/^https:\/\//, '')}>
              <span className="legal-store-icon" aria-hidden="true">
                <LegalIcon name={l.icon} size={22} />
              </span>
              <span className="legal-store-text">
                <span className="legal-store-action">{ui.manageSubscriptions}</span>
                <span className="legal-store-name">{l.label}</span>
              </span>
              <LegalIcon name="open_in_new" size={18} className="legal-store-ext" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
