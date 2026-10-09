import type { LegalDoc } from '@/content/legal/types';
import type { LegalPageDef } from '@/content/legal/pages';
import type { LegalUi } from '@/content/legal/ui';
import { LegalIcon } from './icons/LegalIcon';
import { Inline } from './Inline';
import { LegalBlock } from './Blocks';

export const pad = (n: number) => String(n).padStart(2, '0');

/** Automatic "01, 02 …" section counters: legal pages, unless the headings carry their own numbers. */
export function sectionNumbersOn(def: Pick<LegalPageDef, 'group'>, doc: Pick<LegalDoc, 'sectionNumbers'>): boolean {
  return def.group === 'legal' && doc.sectionNumbers !== false;
}

/**
 * The document body: every section (h2 + blocks), then the document's own
 * closing lines. Shared by LegalPage and scripts/legal-verbatim-check.mjs, which
 * renders this component to check the generated documents against their source.
 */
export function LegalSections({ doc, ui, numbered }: { doc: LegalDoc; ui: LegalUi; numbered: boolean }) {
  return (
    <>
      {doc.sections.map((s, i) => (
        <section key={s.id} id={s.id} className="legal-section" aria-labelledby={`${s.id}-h`} data-legal-section="">
          <h2 id={`${s.id}-h`} className="legal-h2">
            {numbered ? <span className="legal-num">{pad(i + 1)}</span> : null}
            <span className="legal-h2-text">{s.heading}</span>
            <a href={`#${s.id}`} className="legal-anchor" data-copy-link="" aria-label={`${ui.copyLink}: ${s.heading}`}>
              <LegalIcon name="link" size={18} />
            </a>
          </h2>
          <div className="legal-blocks">
            {s.blocks.map((b, j) => (
              <LegalBlock key={j} block={b} ui={ui} />
            ))}
          </div>
        </section>
      ))}
      {doc.closing?.length ? (
        <div className="legal-colophon">
          {doc.closing.map((line, i) => (
            <p key={i} className="legal-p">
              <Inline text={line} />
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
}
