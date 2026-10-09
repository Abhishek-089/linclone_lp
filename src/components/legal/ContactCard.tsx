import { useId } from 'react';
import type { ContactCard as ContactCardData } from '@/content/legal/types';
import type { LegalUi } from '@/content/legal/ui';
import { LegalIcon } from './icons/LegalIcon';
import { Inline } from './Inline';

/** mailto: with an optional prefilled subject and body (RFC 6068: %20, CRLF line breaks). */
export function mailtoHref(email: string, subject?: string, body?: string): string {
  const q: string[] = [];
  if (subject) q.push(`subject=${encodeURIComponent(subject)}`);
  if (body) q.push(`body=${encodeURIComponent(body.replace(/\r?\n/g, '\r\n'))}`);
  return `mailto:${email}${q.length ? `?${q.join('&')}` : ''}`;
}

/**
 * Mail card (no forms): a mailto button with a prefilled subject and a short
 * fill-in template, the address in plain text (selectable, works without a
 * mail app), and the template shown as a list so it can be copied by hand.
 */
export function ContactCard({ card, ui, headingLevel: H = 'h3' }: { card: ContactCardData; ui: LegalUi; headingLevel?: 'h2' | 'h3' }) {
  const hint = `mail-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const fields = card.bodyTemplate
    ? card.bodyTemplate
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)
    : [];
  return (
    <div className="legal-contact glass">
      <span className="legal-contact-icon" aria-hidden="true">
        <LegalIcon name="mail" size={24} />
      </span>
      <div className="legal-contact-body">
        <H className="legal-contact-title">{card.title}</H>
        {card.body ? (
          <p className="legal-contact-text">
            <Inline text={card.body} />
          </p>
        ) : null}
        {fields.length ? (
          <div className="legal-contact-template">
            <p className="legal-contact-template-label">{ui.templateLabel}</p>
            <ul>
              {fields.map((f) => (
                // a line ending in ":" is a field to fill in; any other line is fixed text
                <li key={f} data-field={/[:：]$/.test(f) ? '' : undefined}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="legal-contact-actions">
          <a
            href={mailtoHref(card.email, card.subject, card.bodyTemplate)}
            className="btn-primary legal-contact-btn"
            aria-describedby={hint}
            data-print={card.email}
          >
            <LegalIcon name="send" size={18} />
            {card.label}
          </a>
          <p className="legal-contact-addr">
            <span className="legal-contact-addr-label">{ui.sendTo}</span>
            <span className="legal-contact-addr-value">{card.email}</span>
          </p>
          <span id={hint} hidden>
            {ui.opensMail}
          </span>
        </div>
        {card.note ? (
          <p className="legal-contact-note">
            <LegalIcon name="info" size={16} />
            <span>
              <Inline text={card.note} />
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
}
