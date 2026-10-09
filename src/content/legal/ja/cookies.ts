import { defineLegalDoc } from '../types';

// 【ドラフト】構成確認用のプレースホルダーです。本文は別途の起案工程で差し替えます。
export default defineLegalDoc({
  status: 'draft',
  meta: {
    title: 'Cookieポリシー｜LinClone',
    description: '【ドラフト】LinCloneのウェブサイトとアプリで使うCookieや類似技術の種類、目的、無効にする方法を説明します。',
  },
  eyebrow: '規約・ポリシー',
  title: 'Cookieポリシー',
  lead: '【ドラフト】このウェブサイトとアプリで使うCookieと類似の技術について説明します。[[現在の利用実態を要確認]]',
  effectiveDate: '2026-11-01',
  lastUpdated: '2026-10-09',
  atAGlance: [
    { icon: 'cookie', title: '必要最小限', body: '【ドラフト】サイトの表示に必要なものを中心に使います。' },
    { icon: 'visibility', title: '広告目的では使いません', body: '【ドラフト】[[広告用Cookieの有無を要確認]]' },
    { icon: 'settings', title: 'ブラウザで無効化できます', body: '【ドラフト】設定方法は[無効にする方法](#choices)をご覧ください。' },
  ],
  sections: [
    {
      id: 'what-are-cookies',
      heading: 'Cookieとは',
      blocks: [
        { kind: 'paragraph', text: '【ドラフト】Cookieは、ウェブサイトがブラウザに保存する小さなテキストファイルです。' },
        {
          kind: 'definitionList',
          items: [
            { term: 'Cookie', definition: '【ドラフト】ブラウザに保存される小さなデータ。' },
            { term: 'ローカルストレージ', definition: '【ドラフト】表示設定などを端末内に保存する仕組み。' },
          ],
        },
      ],
    },
    {
      id: 'cookies-we-use',
      heading: '使用しているCookie',
      blocks: [
        {
          kind: 'table',
          caption: '【ドラフト】使用しているCookieと類似技術（例）',
          columns: ['名前', '種類', '目的', '保存期間'],
          rows: [
            ['lc.langPill', 'ローカルストレージ', '言語案内を閉じたことの記憶', '削除するまで'],
            ['lc.oshi', 'ローカルストレージ', '選んだ推し色の記憶', '削除するまで'],
            ['[[名前]]', '[[種類]]', '[[目的]]', '[[期間]]'],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          body: '【ドラフト】決済はApp Store・Google Playで行われ、このサイトで決済用のCookieは使いません。',
        },
      ],
    },
    {
      id: 'in-the-app',
      heading: 'アプリでの扱い',
      blocks: [
        {
          kind: 'list',
          items: [
            {
              text: '【ドラフト】アプリでは、次の目的で端末内に情報を保存します。',
              items: ['ログイン状態の維持', '表示設定の記憶'],
            },
            '[[解析SDKの有無を要確認]]',
          ],
        },
        { kind: 'storeLinks', body: '【ドラフト】サブスクリプションの情報は各ストアのアカウントで管理されます。' },
      ],
    },
    {
      id: 'choices',
      heading: '無効にする方法',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'ブラウザの設定を開く', body: '【ドラフト】Safari・Chromeなどの設定画面を開きます。' },
            { title: 'Cookieの設定を変更', body: '【ドラフト】「プライバシー」からCookieの保存を変更します。' },
            { title: 'ページを再読み込み', body: '【ドラフト】変更はページの再読み込み後に反映されます。' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: '一部の機能が使えなくなることがあります',
          body: '【ドラフト】必要なCookieを無効にすると、表示が崩れる場合があります。',
        },
      ],
    },
    {
      id: 'faq',
      heading: 'よくある質問',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: 'Cookieで個人が特定されますか？', a: '【ドラフト】[[回答を起案]]' },
            { q: '同意を取り消すには？', a: '【ドラフト】ブラウザの設定でCookieを削除してください。' },
          ],
        },
      ],
    },
    {
      id: 'contact',
      heading: 'お問い合わせ',
      blocks: [
        {
          kind: 'paragraph',
          text: '【ドラフト】個人情報の扱い全般は[プライバシーポリシー](/privacy)をご覧ください。',
        },
        {
          kind: 'contact',
          title: 'Cookieに関するお問い合わせ',
          email: 'info@linclone.com',
          subject: '【Cookie】お問い合わせ',
          label: 'メールで問い合わせる',
        },
      ],
    },
  ],
  related: ['privacy', 'terms'],
});
