import { defineLegalDoc } from '../types';

// 【ドラフト】構成確認用のプレースホルダーです。本文は別途の起案工程で差し替えます。
export default defineLegalDoc({
  status: 'draft',
  meta: {
    title: 'プライバシーポリシー｜LinClone',
    description:
      '【ドラフト】LinCloneが取得する情報、その利用目的、第三者提供、保存期間、お客様の権利とお問い合わせ先について説明します。',
  },
  eyebrow: '規約・ポリシー',
  title: 'プライバシーポリシー',
  lead: '【ドラフト】LinClone K.K.（以下「当社」）が、アプリ「LinClone」とこのウェブサイトでお預かりする情報をどのように扱うかを説明します。[[リード文は起案後に差し替え]]',
  effectiveDate: '2026-11-01',
  lastUpdated: '2026-10-09',
  atAGlance: [
    {
      icon: 'block',
      title: '個人データは売りません',
      body: '【ドラフト】お預かりした個人データを第三者に販売することはありません。',
    },
    {
      icon: 'psychology',
      title: '記憶はご自身で管理',
      body: '【ドラフト】AIクローンとの「2人の関係と記憶」は、アプリからいつでも確認・削除できます。',
    },
    {
      icon: 'delete',
      title: '削除はいつでも',
      body: '【ドラフト】アカウントはアプリの設定から削除できます。詳しくは[アカウント削除](/delete-user)へ。',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'このポリシーについて',
      blocks: [
        {
          kind: 'paragraph',
          text: '【ドラフト】このポリシーは、当社が提供するアプリ、ウェブサイト、関連サービス（以下「本サービス」）に適用されます。[[適用範囲を要確認]]',
        },
        {
          kind: 'definitionList',
          items: [
            { term: '事業者', definition: 'LinClone K.K.【要確認】' },
            { term: '所在地', definition: '[[所在地]]' },
            { term: 'お問い合わせ', definition: '[info@linclone.com](mailto:info@linclone.com)' },
          ],
        },
      ],
    },
    {
      id: 'information-we-collect',
      heading: '取得する情報',
      blocks: [
        { kind: 'paragraph', text: '【ドラフト】当社は、本サービスの提供に必要な範囲で、次の情報を取得します。' },
        {
          kind: 'list',
          items: [
            {
              text: '**アカウント情報**',
              items: ['ユーザー名、表示名、メールアドレス', '生年月日 [[取得目的を要確認]]'],
            },
            {
              text: '**ご利用の記録**',
              items: ['チャット・通話の内容', 'コインの購入・利用履歴'],
            },
            '端末情報（OSの種類、アプリのバージョンなど）',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: '連絡先は取得しません',
          body: '【ドラフト】端末の連絡先・アドレス帳にアクセスすることはありません。[[事実確認]]',
        },
      ],
    },
    {
      id: 'how-we-use',
      heading: '利用目的',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            '本サービスの提供・本人確認のため',
            'AIクローンとの会話をお客様に合わせるため',
            '不正利用の防止と安全の確保のため',
            'お問い合わせへの対応のため',
          ],
        },
      ],
    },
    {
      id: 'sharing',
      heading: '第三者への提供と委託',
      blocks: [
        {
          kind: 'paragraph',
          text: '【ドラフト】法令に基づく場合を除き、ご本人の同意なく個人データを第三者に提供しません。業務委託先は次のとおりです。',
        },
        {
          kind: 'table',
          caption: '【ドラフト】主な委託先（例）',
          columns: ['委託先の種類', '目的', '所在国'],
          rows: [
            ['クラウド基盤', 'データの保管・処理', '[[国名]]'],
            ['決済（App Store・Google Play）', 'コイン・サブスクリプションの決済', '[[国名]]'],
            ['音声合成・AI処理', 'AIクローンの応答生成', '[[国名]]'],
          ],
        },
        {
          kind: 'storeLinks',
          body: '【ドラフト】お支払い情報はApple・Googleが管理し、当社はカード番号を受け取りません。サブスクリプションの管理は各ストアから行えます。',
        },
      ],
    },
    {
      id: 'retention',
      heading: '保存期間',
      blocks: [
        {
          kind: 'paragraph',
          text: '【ドラフト】アカウントを削除すると、プロフィールと会話の記憶は[[N]]日以内に削除されます。法令で保存が求められる記録は、定められた期間保存します。',
        },
        {
          kind: 'callout',
          tone: 'important',
          title: '購入済みのコインについて',
          body: '【ドラフト】アカウントを削除すると、未使用のコインは失効し、払い戻しはできません。[[返金方針を要確認]]',
        },
      ],
    },
    {
      id: 'your-rights',
      heading: 'お客様の権利',
      blocks: [
        { kind: 'paragraph', text: '【ドラフト】ご本人の情報について、開示・訂正・利用停止・削除を求めることができます。' },
        {
          kind: 'steps',
          items: [
            { title: 'メールでご連絡', body: '[info@linclone.com](mailto:info@linclone.com)へ、ご請求の内容をお送りください。' },
            { title: 'ご本人の確認', body: '【ドラフト】アカウントに登録されたメールアドレスから確認のご連絡をします。' },
            { title: '対応', body: '【ドラフト】確認後、[[N]]日以内に対応します。' },
          ],
        },
      ],
    },
    {
      id: 'children',
      heading: '未成年の方の利用',
      blocks: [
        {
          kind: 'paragraph',
          text: '【ドラフト】未成年の方の保護については[児童保護方針](/policies/child-protection-policy)をご覧ください。',
        },
      ],
    },
    {
      id: 'security',
      heading: '安全管理',
      blocks: [
        {
          kind: 'paragraph',
          text: '【ドラフト】通信の暗号化、アクセス権限の管理など、必要かつ適切な安全管理措置を講じます。Cookieの扱いは[Cookieポリシー](/cookies)をご覧ください。',
        },
      ],
    },
    {
      id: 'changes',
      heading: 'このポリシーの変更',
      blocks: [
        {
          kind: 'paragraph',
          text: '【ドラフト】重要な変更は、施行日の前にアプリ内またはこのページでお知らせします。',
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
            {
              q: 'クリエイター本人は私の会話を読めますか？',
              a: '【ドラフト】クリエイターに共有されるのは統計情報のみで、ひとりひとりの会話は共有されません。[[事実確認]]',
            },
            {
              q: '会話の記憶を消すには？',
              a: '【ドラフト】アプリの「2人の関係と記憶」から、いつでも編集・削除できます。',
            },
          ],
        },
      ],
    },
    {
      id: 'contact',
      heading: 'お問い合わせ窓口',
      blocks: [
        {
          kind: 'contact',
          title: '個人情報に関するお問い合わせ',
          body: '【ドラフト】開示等のご請求、このポリシーへのご質問はこちらへ。',
          email: 'info@linclone.com',
          subject: '【個人情報】お問い合わせ',
          bodyTemplate: 'アカウントのメールアドレスまたは@ユーザー名：\nご請求・ご質問の内容：\n',
          label: 'メールで問い合わせる',
          note: '【ドラフト】ご本人確認のため、登録メールアドレスからのご連絡をお願いします。',
        },
      ],
    },
  ],
  related: ['terms', 'cookies', 'childProtection', 'deleteUser', 'support'],
});
