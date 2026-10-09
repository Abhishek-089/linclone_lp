import type { Block, ListItem } from '@/content/legal/types';
import type { LegalUi } from '@/content/legal/ui';
import { FaqList } from '@/components/site/faq/FaqList';
import { LegalIcon, type LegalIconName } from './icons/LegalIcon';
import { Inline } from './Inline';
import { ContactCard } from './ContactCard';
import { StoreLinks } from './StoreLinks';
import { SettingsPathMock } from './SettingsPathMock';

const CALLOUT_ICON: Record<'info' | 'warning' | 'important', LegalIconName> = {
  info: 'info',
  warning: 'warning',
  important: 'policy',
};

function Item({ item }: { item: ListItem }) {
  if (typeof item === 'string') {
    return (
      <li>
        <Inline text={item} />
      </li>
    );
  }
  return (
    <li>
      <Inline text={item.text} />
      <ul className="legal-list legal-list-nested">
        {item.items.map((t) => (
          <li key={t}>
            <Inline text={t} />
          </li>
        ))}
      </ul>
    </li>
  );
}

/** One content block (src/content/legal/types.ts `Block`). Headings inside blocks are h3. */
export function LegalBlock({ block, ui }: { block: Block; ui: LegalUi }) {
  switch (block.kind) {
    case 'paragraph':
      return (
        <p className="legal-p">
          <Inline text={block.text} />
        </p>
      );

    case 'list': {
      const L = block.ordered ? 'ol' : 'ul';
      return (
        <L className="legal-list" data-ordered={block.ordered ? '' : undefined}>
          {block.items.map((item) => (
            <Item key={typeof item === 'string' ? item : item.text} item={item} />
          ))}
        </L>
      );
    }

    case 'table':
      return (
        // explicit roles: below 640px the cells are display:block (stacked cards), which
        // drops the implicit table semantics in WebKit/VoiceOver
        <div className="legal-table-wrap">
          <table className="legal-table" role="table">
            <caption>{block.caption}</caption>
            <thead role="rowgroup">
              <tr role="row">
                {block.columns.map((c) => (
                  <th key={c} scope="col" role="columnheader">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody role="rowgroup">
              {block.rows.map((row, r) => (
                <tr key={r} role="row">
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row" role="rowheader" data-label={block.columns[c]}>
                        <Inline text={cell} />
                      </th>
                    ) : (
                      <td key={c} role="cell" data-label={block.columns[c]}>
                        <span className="legal-cell">
                          <Inline text={cell} />
                        </span>
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'callout': {
      const paras = typeof block.body === 'string' ? [block.body] : block.body;
      return (
        <div className="legal-callout" data-tone={block.tone} role="note">
          <span className="legal-callout-icon" aria-hidden="true">
            <LegalIcon name={CALLOUT_ICON[block.tone]} size={22} />
          </span>
          <div className="legal-callout-body">
            {block.title ? <p className="legal-callout-title">{block.title}</p> : null}
            {paras.map((p) => (
              <p key={p}>
                <Inline text={p} />
              </p>
            ))}
          </div>
        </div>
      );
    }

    case 'definitionList':
      return (
        <dl className="legal-dl">
          {block.items.map((it) => (
            <div key={it.term} className="legal-dl-row">
              <dt>{it.term}</dt>
              <dd>
                <Inline text={it.definition} />
              </dd>
            </div>
          ))}
        </dl>
      );

    case 'steps':
      return (
        <div className="legal-steps-wrap" data-illustrated={block.illustration ? '' : undefined}>
          <ol className="legal-steps">
            {block.items.map((s) => (
              <li key={s.title} className="legal-step">
                <h3 className="legal-step-title">{s.title}</h3>
                <p className="legal-step-body">
                  <Inline text={s.body} />
                </p>
              </li>
            ))}
          </ol>
          {block.illustration?.kind === 'settingsPath' ? <SettingsPathMock data={block.illustration} /> : null}
        </div>
      );

    case 'faq':
      return (
        <div className="legal-faq">
          <FaqList headingLevel="h3" items={block.items.map((it) => ({ q: it.q, a: <Inline text={it.a} /> }))} />
        </div>
      );

    case 'contact':
      return <ContactCard card={block} ui={ui} />;

    case 'storeLinks':
      return <StoreLinks ui={ui} title={block.title} body={block.body} />;
  }
}
