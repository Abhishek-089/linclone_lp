import 'server-only';
import type { Locale } from '@/i18n/config';
import type { LegalPageKey } from './pages';
import type { LegalDoc, SectionIds } from './types';

import jaSupport from './ja/support';
import jaDeleteUser from './ja/delete-user';
import jaPrivacy from './ja/privacy';
import jaTerms from './ja/terms';
import jaCookies from './ja/cookies';
import jaChildProtection from './ja/child-protection';
import enSupport from './en/support';
import enDeleteUser from './en/delete-user';
import enPrivacy from './en/privacy';
import enTerms from './en/terms';
import enCookies from './en/cookies';
import enChildProtection from './en/child-protection';

export { LEGAL_PAGES, LEGAL_PAGE_KEYS, type LegalPageKey } from './pages';
export type * from './types';

/** Every page in ./pages.ts must have both locales here (a missing key is a type error). */
const DOCS = {
  support: { ja: jaSupport, en: enSupport },
  deleteUser: { ja: jaDeleteUser, en: enDeleteUser },
  privacy: { ja: jaPrivacy, en: enPrivacy },
  terms: { ja: jaTerms, en: enTerms },
  cookies: { ja: jaCookies, en: enCookies },
  childProtection: { ja: jaChildProtection, en: enChildProtection },
} satisfies Record<LegalPageKey, Record<Locale, LegalDoc>>;

// ── compile-time parity: en must have exactly the ja section ids ─────────────
// A mismatch fails `tsc` and names the offending ids, e.g.
//   Type '"retention"' is not assignable to type 'never'.
// (Order is checked by scripts/lint-legal.mjs.)
type Parity<J extends LegalDoc, E extends LegalDoc> = {
  missingInEn: Exclude<SectionIds<J>, SectionIds<E>>;
  missingInJa: Exclude<SectionIds<E>, SectionIds<J>>;
};
type Clean = { missingInEn: never; missingInJa: never };
type AllParity = { [K in keyof typeof DOCS]: Parity<(typeof DOCS)[K]['ja'], (typeof DOCS)[K]['en']> };
const parity: { [K in keyof typeof DOCS]: Clean } = null as unknown as AllParity;
void parity;

export function getLegalDoc(page: LegalPageKey, lang: Locale): LegalDoc {
  return DOCS[page][lang];
}
