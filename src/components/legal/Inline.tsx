import type { ReactNode } from 'react';
import { SITE } from '@/lib/site-config';

// Tiny, safe renderer for the inline markdown subset documented in
// src/content/legal/types.ts. It never builds HTML strings: every token
// becomes a React element, everything else stays literal text.

const TOKEN = /\*\*(.+?)\*\*|\[\[(.+?)\]\]|\[([^\]\n]+)\]\(([^)\s]+)\)/g;

/** Hrefs the renderer will link; anything else prints as plain text. */
export function isSafeHref(href: string): boolean {
  return /^https:\/\/[^\s]+$/.test(href) || /^mailto:[^\s]+$/.test(href) || /^\/(?!\/)[^\s]*$/.test(href) || /^#[a-z0-9-]+$/.test(href);
}

/** Address shown after the link text when printed (print stylesheet reads data-print). */
function printLabel(href: string): string | undefined {
  if (href.startsWith('#')) return undefined;
  if (href.startsWith('mailto:')) return href.slice(7).split('?')[0];
  if (href.startsWith('/')) return `${SITE.origin.replace(/^https:\/\//, '')}${href}`;
  return href.replace(/^https:\/\//, '');
}

export function InlineLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const external = href.startsWith('https://');
  return (
    <a href={href} className={className} data-print={printLabel(href)} rel={external ? 'noopener' : undefined}>
      {children}
    </a>
  );
}

function parse(text: string, allowBold: boolean, keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    const key = `${keyPrefix}${i++}`;
    const [whole, bold, note, label, href] = m;
    if (bold !== undefined) {
      out.push(allowBold ? <strong key={key}>{parse(bold, false, `${key}.`)}</strong> : whole);
    } else if (note !== undefined) {
      out.push(
        <mark key={key} className="legal-placeholder">
          {note}
        </mark>,
      );
    } else if (label !== undefined && href !== undefined) {
      out.push(
        isSafeHref(href) ? (
          <InlineLink key={key} href={href}>
            {parse(label, allowBold, `${key}.`)}
          </InlineLink>
        ) : (
          whole
        ),
      );
    }
    last = at + whole.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Renders one `Inline` string (bold, links, [[placeholders]]). */
export function Inline({ text }: { text: string }) {
  return <>{parse(text, true, 'i')}</>;
}
