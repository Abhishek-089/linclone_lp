// Chrome strings shared by every legal/support page (not page content).
// Plain data, typed so en must have every ja key.

const ja = {
  breadcrumbHome: 'LinClone',
  breadcrumb: 'パンくずリスト',
  contents: '目次',
  effective: '施行日',
  updated: '最終更新日',
  atAGlance: 'ポイント',
  related: '関連するページ',
  backToTop: 'ページの先頭へ',
  copyLink: 'このセクションへのリンクをコピー',
  linkCopied: 'リンクをコピーしました',
  langNote: 'This page is also available in English.',
  langNoteLink: 'Read in English',
  /** EN pages only (the JA text is the reference) */
  langPrevails: '',
  draftBanner: '【ドラフト】この文書は作成中の下書きです。内容は確定していません。',
  opensMail: 'メールアプリが開きます',
  sendTo: '宛先',
  templateLabel: 'メールに記入いただく項目',
  manageSubscriptions: 'サブスクリプションを管理',
  appStore: 'App Store（iPhone・iPad）',
  googlePlay: 'Google Play（Android）',
  storeLinksTitle: 'サブスクリプションの解約・管理',
  quickActions: 'よく使うメニュー',
} as const;

type LegalUi = { readonly [K in keyof typeof ja]: string };

const en: LegalUi = {
  breadcrumbHome: 'LinClone',
  breadcrumb: 'Breadcrumb',
  contents: 'Contents',
  effective: 'Effective',
  updated: 'Last updated',
  atAGlance: 'At a glance',
  related: 'Related pages',
  backToTop: 'Back to top',
  copyLink: 'Copy a link to this section',
  linkCopied: 'Link copied',
  langNote: 'このページは日本語でもご覧いただけます。',
  langNoteLink: '日本語で読む',
  langPrevails: 'If this English version and the Japanese version differ, the Japanese version prevails.',
  draftBanner: '[DRAFT] This document is a working draft. Nothing in it is final.',
  opensMail: 'Opens your email app',
  sendTo: 'To',
  templateLabel: 'The email asks for',
  manageSubscriptions: 'Manage subscriptions',
  appStore: 'App Store (iPhone, iPad)',
  googlePlay: 'Google Play (Android)',
  storeLinksTitle: 'Cancel or manage a subscription',
  quickActions: 'Quick links',
};

export const LEGAL_UI = { ja, en } as const satisfies Record<'ja' | 'en', LegalUi>;
export type { LegalUi };
