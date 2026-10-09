import { defineLegalDoc } from '../types';

// 【ドラフト】構成確認用のプレースホルダーです。本文は別途の起案工程で差し替えます。
export default defineLegalDoc({
  status: 'draft',
  meta: {
    title: '利用規約｜LinClone',
    description:
      '【ドラフト】LinCloneアプリとAIクローン、コイン・サブスクリプション、禁止事項、免責、準拠法など、本サービスのご利用条件を定めます。',
  },
  eyebrow: '規約・ポリシー',
  title: '利用規約',
  lead: '【ドラフト】この利用規約は、LinClone K.K.が提供するアプリ「LinClone」と関連サービスのご利用条件を定めるものです。ご利用前にお読みください。',
  effectiveDate: '2026-11-01',
  lastUpdated: '2026-10-09',
  atAGlance: [
    { icon: 'verified', title: 'AIクローンです', body: '【ドラフト】クリエイターのプロフィールはすべて公式のAIクローンで、本人ではありません。' },
    { icon: 'paid', title: 'コインは前払い', body: '【ドラフト】コインはApp Store・Google Playで購入する前払いの利用権です。' },
    { icon: 'flag', title: '安全のためのルール', body: '【ドラフト】禁止事項に反する利用は、利用停止の対象になります。' },
  ],
  sections: [
    {
      id: 'definitions',
      heading: '用語の定義',
      blocks: [
        {
          kind: 'definitionList',
          items: [
            { term: '本サービス', definition: '【ドラフト】当社が提供するアプリ「LinClone」と関連サービス。' },
            { term: 'AIクローン', definition: '【ドラフト】クリエイターの公認のもと、AIで再現した会話相手。' },
            { term: 'コイン', definition: '【ドラフト】本サービス内で利用できる前払式の利用権。[[資金決済法上の扱いを要確認]]' },
          ],
        },
      ],
    },
    {
      id: 'account',
      heading: 'アカウント',
      blocks: [
        {
          kind: 'list',
          items: [
            '【ドラフト】1つのアカウントを1人で利用してください。',
            {
              text: '【ドラフト】次の場合は登録できません。',
              items: ['[[年齢要件]]に満たない場合', '過去に利用停止となった場合'],
            },
          ],
        },
      ],
    },
    {
      id: 'ai-clones',
      heading: 'AIクローンについて',
      blocks: [
        {
          kind: 'callout',
          tone: 'important',
          title: '会話の相手はAIです',
          body: [
            '【ドラフト】AIクローンの発言はAIが生成したもので、クリエイター本人の発言ではありません。',
            '【ドラフト】内容の正確性は保証されません。[[文言を要確認]]',
          ],
        },
      ],
    },
    {
      id: 'coins-and-subscriptions',
      heading: 'コインとサブスクリプション',
      blocks: [
        {
          kind: 'table',
          caption: '【ドラフト】購入できるもの',
          columns: ['種類', '購入先', '解約・返金'],
          rows: [
            ['コイン', 'App Store・Google Play', '[[返金方針]]'],
            ['サブスクリプション', 'App Store・Google Play', '各ストアで解約'],
          ],
        },
        { kind: 'storeLinks' },
      ],
    },
    {
      id: 'prohibited',
      heading: '禁止事項',
      blocks: [
        { kind: 'paragraph', text: '【ドラフト】次の行為を禁止します。' },
        {
          kind: 'list',
          ordered: true,
          items: ['法令または公序良俗に反する行為', 'AIクローンを本人と偽って公開する行為', '未成年者を害する行為（[児童保護方針](/policies/child-protection-policy)）'],
        },
      ],
    },
    {
      id: 'reporting',
      heading: '違反の報告',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'アプリで報告', body: '【ドラフト】会話やプロフィールの「…」から「報告」を選びます。' },
            { title: 'メールで報告', body: '[info@linclone.com](mailto:info@linclone.com)へ、内容をお送りください。' },
          ],
        },
      ],
    },
    {
      id: 'termination',
      heading: '利用停止・退会',
      blocks: [
        {
          kind: 'paragraph',
          text: '【ドラフト】退会は[アカウント削除](/delete-user)の手順で行えます。当社は、規約違反があった場合に利用を停止できます。',
        },
      ],
    },
    {
      id: 'disclaimer',
      heading: '免責',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          body: '【ドラフト】当社の責任は、法令で認められる範囲で制限されます。[[消費者契約法との整合を要確認]]',
        },
      ],
    },
    {
      id: 'governing-law',
      heading: '準拠法・管轄',
      blocks: [
        { kind: 'paragraph', text: '【ドラフト】本規約は日本法に準拠し、[[管轄裁判所]]を専属的合意管轄裁判所とします。' },
      ],
    },
    {
      id: 'faq',
      heading: 'よくある質問',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: 'コインに有効期限はありますか？', a: '【ドラフト】[[有効期限を要確認]]' },
            { q: '規約が変わったら知らせてもらえますか？', a: '【ドラフト】重要な変更は、アプリ内とこのページでお知らせします。' },
          ],
        },
      ],
    },
    {
      id: 'contact',
      heading: 'お問い合わせ',
      blocks: [
        {
          kind: 'contact',
          title: '規約に関するお問い合わせ',
          email: 'info@linclone.com',
          subject: '【利用規約】お問い合わせ',
          label: 'メールで問い合わせる',
        },
      ],
    },
  ],
  related: ['privacy', 'cookies', 'childProtection', 'support'],
});
