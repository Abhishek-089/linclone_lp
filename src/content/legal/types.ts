// Content schema for the legal/support pages (src/content/legal/{ja,en}/*.ts).
// Server-only DATA: no JSX, no imports beyond this file. Rendered by
// src/components/legal/**; validated by scripts/lint-legal.mjs (prebuild).
//
// ── Inline rich text (`Inline`) ──────────────────────────────────────────────
// Every string typed `Inline` accepts a tiny markdown subset, parsed by
// src/components/legal/Inline.tsx (never injected as HTML):
//   **bold**                     strong emphasis
//   [label](https://…)           external link (opens in the same tab, rel=noopener)
//   [label](/privacy)            internal link (use the JA or EN path of the same locale)
//   [label](#section-id)         jump to a section on the same page
//   [label](mailto:info@linclone.com?subject=…)   mail link (lint: info@ only)
//   [[note for drafters]]        a visible placeholder, highlighted on the page
//   \\  \*  \[  \]                 a literal \ * [ or ] (escapeInline() in
//                                src/components/legal/inline-syntax.ts adds these)
// Anything else is printed literally. Line breaks are not supported: use
// another paragraph or a list.
//
// ── Verbatim documents ───────────────────────────────────────────────────────
// ja/privacy.ts and ja/terms.ts are GENERATED from the owner-approved texts in
// docs/legal/source/*.md by scripts/legal-from-markdown.mjs, and
// scripts/legal-verbatim-check.mjs (in `legal:lint` and prebuild) fails when
// the rendered text differs from the source by a single character. Edit the
// markdown, never the generated file.
//
// ── Placeholders ─────────────────────────────────────────────────────────────
// Drafts may contain TODO, 【要確認】, 【ドラフト】, [DRAFT] and [[…]].
// `LEGAL_STRICT=1 npm run build` fails while any of them (or status 'draft')
// remains, so a release build can be gated on finished copy.

/** A string with the inline markdown subset above. */
export type Inline = string;
/** ISO calendar date, e.g. '2026-10-09'. */
export type IsoDate = `${number}-${number}-${number}`;

/** Glyph name (a LegalIconName: site sprite icons + src/components/legal/icons/legal-paths.ts). */
export type IconRef = string;

/** A list item; an object item carries ONE nested level (`ordered` numbers it 1., 2., …). */
export type ListItem = Inline | { readonly text: Inline; readonly items: readonly Inline[]; readonly ordered?: boolean };

export type Block =
  /** One paragraph. */
  | { readonly kind: 'paragraph'; readonly text: Inline }
  /**
   * Bulleted or numbered list; an item may carry ONE nested level. `start`
   * (ordered lists) is the first number, for a list a table interrupts.
   */
  | { readonly kind: 'list'; readonly ordered?: boolean; readonly start?: number; readonly items: readonly ListItem[] }
  /**
   * Data table; becomes stacked cards below 640px (each cell labelled by its column).
   * Give it a caption unless the text must stay verbatim (a source without one).
   */
  | {
      readonly kind: 'table';
      readonly caption?: string;
      readonly columns: readonly string[];
      readonly rows: readonly (readonly Inline[])[];
    }
  /** Highlighted note. `warning` = act before you continue; `important` = legal weight. */
  | {
      readonly kind: 'callout';
      readonly tone: 'info' | 'warning' | 'important';
      readonly title?: string;
      readonly body: Inline | readonly Inline[];
    }
  /** Term → definition pairs (glossaries, "who we are"). */
  | { readonly kind: 'definitionList'; readonly items: readonly { readonly term: string; readonly definition: Inline }[] }
  /** Numbered how-to. `illustration` adds a small coded phone mockup beside the steps. */
  | {
      readonly kind: 'steps';
      readonly items: readonly { readonly title: string; readonly body: Inline }[];
      readonly illustration?: SettingsPathIllustration;
    }
  /** Question/answer accordion (native <details>). */
  | { readonly kind: 'faq'; readonly items: readonly { readonly q: string; readonly a: Inline }[] }
  /** Mail card: a mailto button with a prefilled subject/body (no forms). */
  | ({ readonly kind: 'contact' } & ContactCard)
  /** Official App Store / Google Play subscription-management links. */
  | { readonly kind: 'storeLinks'; readonly title?: string; readonly body?: Inline };

/** A coded settings-screen mockup that highlights one row (delete-user page). */
export type SettingsPathIllustration = {
  readonly kind: 'settingsPath';
  /** accessible description of the picture */
  readonly alt: string;
  readonly screenTitle: string;
  readonly groups: readonly { readonly label: string; readonly rows: readonly string[] }[];
  /** the row to highlight, exactly as written in `groups` */
  readonly highlight: string;
  /** short caption under the phone */
  readonly caption?: string;
};

export type ContactCard = {
  readonly title: string;
  readonly body?: Inline;
  /** must be info@linclone.com unless allowlisted in scripts/lint-legal.mjs */
  readonly email: string;
  readonly subject?: string;
  /** prefilled mail body; use \n for new lines (a short form the sender fills in) */
  readonly bodyTemplate?: string;
  /** button label */
  readonly label: string;
  /** small print under the button (e.g. identity verification) */
  readonly note?: Inline;
};

export type Section = {
  /** URL fragment: lowercase a–z, 0–9 and '-'; identical in ja and en. */
  readonly id: string;
  readonly heading: string;
  readonly blocks: readonly Block[];
};

export type GlanceCard = { readonly icon: IconRef; readonly title: string; readonly body: Inline };
export type QuickAction = { readonly icon: IconRef; readonly title: string; readonly body: string; readonly href: string };

/** Keys of src/content/legal/pages.ts (kept as string here so this file stays import-free). */
export type RelatedKey = string;

export type LegalDoc = {
  /** 'draft' shows a banner on the page and fails LEGAL_STRICT builds. */
  readonly status: 'draft' | 'final';
  /** The full <title>, brand included (rendered as-is; ≤32 JA / ≤60 EN chars), and the meta description (≤120 JA / ≤155 EN). */
  readonly meta: { readonly title: string; readonly description: string };
  /** H1 */
  readonly title: string;
  readonly eyebrow?: string;
  readonly lead: Inline;
  /** 制定日 / "Established": the date the document was first adopted (hero chip). */
  readonly establishedDate?: IsoDate;
  readonly effectiveDate?: IsoDate;
  readonly lastUpdated?: IsoDate;
  /**
   * false: no automatic "01, 02 …" counters before the section headings and in
   * the contents (for documents whose headings carry their own numbers, 第1条…).
   * Default: counters on the 'legal' group's pages.
   */
  readonly sectionNumbers?: boolean;
  /** "At a glance" summary cards under the hero (policy pages). */
  readonly atAGlance?: readonly GlanceCard[];
  /** Hero tiles linking to sections or pages (support page). */
  readonly quickActions?: readonly QuickAction[];
  readonly sections: readonly Section[];
  /**
   * Lines after the last section, below a rule (a document's own trailing
   * lines: 制定日, company name, address). One paragraph each.
   */
  readonly closing?: readonly Inline[];
  /** Contact card closing the article. */
  readonly contactCard?: ContactCard;
  /** Related pages, by key of src/content/legal/pages.ts. */
  readonly related?: readonly RelatedKey[];
};

/**
 * Identity helper that keeps section ids as literal types, so ./index.ts can
 * check at compile time that ja and en have the same sections.
 */
export function defineLegalDoc<const D extends LegalDoc>(doc: D): D {
  return doc;
}

/** The section ids of a document, as a union of string literals. */
export type SectionIds<D extends LegalDoc> = D['sections'][number]['id'];
