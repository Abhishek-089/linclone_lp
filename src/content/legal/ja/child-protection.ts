import { defineLegalDoc } from '../types';

// 【ドラフト】構成確認用のプレースホルダーです。本文は別途の起案工程で差し替えます。
export default defineLegalDoc({
  status: 'draft',
  meta: {
    title: '児童保護方針｜LinClone',
    description: '【ドラフト】LinCloneは児童の性的搾取・虐待（CSAE）を一切容認しません。年齢要件、禁止事項、検知と通報の方法、関係機関との連携を説明します。',
  },
  eyebrow: '規約・ポリシー',
  title: '児童保護方針',
  lead: '【ドラフト】LinCloneは、児童の性的搾取・虐待（CSAE）を一切容認しません。この方針は、未成年の方を守るための当社の取り組みを定めます。',
  effectiveDate: '2026-11-01',
  lastUpdated: '2026-10-09',
  atAGlance: [
    { icon: 'shield', title: 'ゼロ・トレランス', body: '【ドラフト】CSAEに関わる利用は、例外なく停止し通報します。' },
    { icon: 'flag', title: 'すぐに報告できます', body: '【ドラフト】アプリ内の報告機能とメールで受け付けます。' },
    { icon: 'account_balance', title: '関係機関と連携', body: '【ドラフト】法令に基づき、関係機関へ通報します。' },
  ],
  sections: [
    {
      id: 'commitment',
      heading: '基本方針',
      blocks: [
        {
          kind: 'callout',
          tone: 'important',
          title: 'CSAEは一切容認しません',
          body: '【ドラフト】児童を性的に搾取・虐待するコンテンツや行為は、本サービスのどこでも禁止します。',
        },
        { kind: 'paragraph', text: '【ドラフト】この方針は[利用規約](/terms)の一部です。' },
      ],
    },
    {
      id: 'age-requirements',
      heading: '年齢要件',
      blocks: [
        {
          kind: 'table',
          caption: '【ドラフト】年齢による利用条件（例）',
          columns: ['年齢', '利用', '条件'],
          rows: [
            ['[[N]]歳未満', '利用できません', '—'],
            ['[[N]]〜17歳', '[[要確認]]', '保護者の同意'],
            ['18歳以上', '利用できます', '—'],
          ],
        },
      ],
    },
    {
      id: 'prohibited',
      heading: '禁止する行為',
      blocks: [
        {
          kind: 'list',
          items: [
            '児童を性的に描写するコンテンツの作成・共有',
            {
              text: '未成年者への性的な働きかけ（グルーミング）',
              items: ['個人情報を聞き出す行為', 'アプリ外での接触を求める行為'],
            },
            'AIクローンに上記を行わせようとする行為',
          ],
        },
      ],
    },
    {
      id: 'detection',
      heading: '検知と対応',
      blocks: [
        {
          kind: 'definitionList',
          items: [
            { term: '自動検知', definition: '【ドラフト】[[検知の仕組みを要確認]]' },
            { term: '人による確認', definition: '【ドラフト】報告を受けた内容は担当者が確認します。' },
            { term: '措置', definition: '【ドラフト】アカウントの停止、証拠の保全、関係機関への通報。' },
          ],
        },
      ],
    },
    {
      id: 'how-to-report',
      heading: '報告の方法',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'アプリで報告', body: '【ドラフト】プロフィールや会話の「…」から「報告」を選びます。' },
            { title: 'メールで報告', body: '[info@linclone.com](mailto:info@linclone.com?subject=%E5%85%90%E7%AB%A5%E4%BF%9D%E8%AD%B7%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E5%A0%B1%E5%91%8A)へ、内容と日時をお送りください。' },
            { title: '緊急の場合', body: '【ドラフト】身の危険があるときは、すぐに110番へ連絡してください。' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          body: '【ドラフト】違法なコンテンツを保存・転送しないでください。報告には日時と場所の説明で十分です。',
        },
      ],
    },
    {
      id: 'parents',
      heading: '保護者の方へ',
      blocks: [
        {
          kind: 'paragraph',
          text: '【ドラフト】お子さまのアカウントを削除したい場合は、[アカウント削除](/delete-user)の「アプリを使わずに削除を依頼する」をご利用ください。',
        },
        { kind: 'storeLinks', body: '【ドラフト】お子さまの購入やサブスクリプションは、各ストアのファミリー設定でも管理できます。' },
      ],
    },
    {
      id: 'faq',
      heading: 'よくある質問',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: '報告したことは相手に知られますか？', a: '【ドラフト】報告者の情報が相手に伝わることはありません。' },
            { q: '対応までどれくらいかかりますか？', a: '【ドラフト】[[目安を要確認]]' },
          ],
        },
      ],
    },
    {
      id: 'contact',
      heading: '担当窓口',
      blocks: [
        {
          kind: 'contact',
          title: '児童保護に関する窓口',
          body: '【ドラフト】児童の安全に関するご報告・お問い合わせはこちらへ。',
          email: 'info@linclone.com',
          subject: '【児童保護】報告・お問い合わせ',
          bodyTemplate: '報告の対象（@ユーザー名・クリエイター名など）：\n日時：\n内容：\n',
          label: 'メールで報告する',
        },
      ],
    },
  ],
  related: ['terms', 'privacy', 'support'],
});
