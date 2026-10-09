// The legal/support page registry: ONE entry per page. It drives the URL map
// (src/i18n/paths.ts), the sitemap, the footer columns, "related" links and
// scripts/lint-legal.mjs. Plain data (no imports) so the lint script can load it.
//
// Adding a page (e.g. 特定商取引法に基づく表記):
//   1. add an entry below (uncomment `commerceDisclosure`);
//   2. write src/content/legal/{ja,en}/<file>.ts and register both in ./index.ts;
//   3. add src/app/(site)/[lang]/<path>/page.tsx (copy any legal page, change the key);
//   4. add ONE explicit beforeFiles rewrite '<ja path>' → '/ja<ja path>' in next.config.ts.
// `npm run legal:lint` checks steps 1–2 agree.

export type LegalPageDef = {
  /** JA is served unprefixed at the store-registered URL; EN under /en. */
  readonly ja: string;
  readonly en: string;
  /** content file basename in src/content/legal/{ja,en}/ */
  readonly file: string;
  /** footer column */
  readonly group: 'support' | 'legal';
  /** short nav label (footer, related links) */
  readonly label: { readonly ja: string; readonly en: string };
  /** glyph for related-policy cards (a LegalIconName) */
  readonly icon: string;
};

export const LEGAL_PAGES = {
  support: {
    ja: '/support',
    en: '/en/support',
    file: 'support',
    group: 'support',
    label: { ja: 'サポート', en: 'Support' },
    icon: 'support_agent',
  },
  deleteUser: {
    ja: '/delete-user',
    en: '/en/delete-user',
    file: 'delete-user',
    group: 'support',
    label: { ja: 'アカウント削除', en: 'Delete your account' },
    icon: 'person_remove',
  },
  privacy: {
    ja: '/privacy',
    en: '/en/privacy',
    file: 'privacy',
    group: 'legal',
    label: { ja: 'プライバシーポリシー', en: 'Privacy Policy' },
    icon: 'lock',
  },
  terms: {
    ja: '/terms',
    en: '/en/terms',
    file: 'terms',
    group: 'legal',
    label: { ja: '利用規約', en: 'Terms of Service' },
    icon: 'gavel',
  },
  cookies: {
    ja: '/cookies',
    en: '/en/cookies',
    file: 'cookies',
    group: 'legal',
    label: { ja: 'Cookieポリシー', en: 'Cookie Policy' },
    icon: 'cookie',
  },
  childProtection: {
    ja: '/policies/child-protection-policy',
    en: '/en/policies/child-protection-policy',
    file: 'child-protection',
    group: 'legal',
    label: { ja: '児童保護方針', en: 'Child Protection Policy' },
    icon: 'child_care',
  },
  // commerceDisclosure: {
  //   ja: '/legal/commerce-disclosure',
  //   en: '/en/legal/commerce-disclosure',
  //   file: 'commerce-disclosure',
  //   group: 'legal',
  //   label: { ja: '特定商取引法に基づく表記', en: 'Commercial Transactions Act disclosure' },
  //   icon: 'storefront',
  // },
} as const satisfies Record<string, LegalPageDef>;

export type LegalPageKey = keyof typeof LEGAL_PAGES;
export const LEGAL_PAGE_KEYS = Object.keys(LEGAL_PAGES) as LegalPageKey[];
