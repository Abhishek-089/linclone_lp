import { defineLegalDoc } from '../types';

// 【ドラフト】構成確認用のプレースホルダーです。本文は別途の起案工程で差し替えます。
export default defineLegalDoc({
  status: 'draft',
  meta: {
    title: 'サポート・お問い合わせ｜LinClone',
    description: '【ドラフト】LinCloneアプリのよくある質問とお問い合わせ窓口。アカウント、通話・チャット、コインとサブスクリプション、安全に関するご相談はこちら。',
  },
  eyebrow: 'サポート',
  title: 'お困りのことはありますか？',
  lead: '【ドラフト】よくある質問で解決しない場合は、メールでお気軽にお問い合わせください。[[返信の目安を要確認]]',
  lastUpdated: '2026-10-09',
  quickActions: [
    { icon: 'mail', title: 'お問い合わせ', body: 'メールで相談する', href: '#contact' },
    { icon: 'person_remove', title: 'アカウント削除', body: '削除の手順と注意点', href: '/delete-user' },
    { icon: 'payments', title: 'サブスクリプション', body: '解約・プランの管理', href: '#coins-subscriptions' },
    { icon: 'flag', title: '安全に関する報告', body: '不適切な行為を知らせる', href: '#safety' },
  ],
  sections: [
    {
      id: 'getting-started',
      heading: 'はじめての方',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: 'LinCloneとは何ですか？', a: '【ドラフト】推しの公式AIクローンと、通話・チャット・LIVE配信を楽しめるアプリです。' },
            { q: '話している相手は本人ですか？', a: '【ドラフト】いいえ。クリエイターのプロフィールはすべて公式のAIクローンです。' },
            { q: '対応している端末は？', a: '【ドラフト】[動作環境](#app-info)をご覧ください。' },
          ],
        },
      ],
    },
    {
      id: 'account',
      heading: 'アカウント・ログイン',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: 'ログインできません', a: '【ドラフト】[[パスキー・メールリンクの手順を起案]]' },
            { q: 'ユーザー名を変更したい', a: '【ドラフト】マイページの「設定」→「ユーザー名」から変更できます。' },
            { q: '退会したい', a: '【ドラフト】[アカウント削除](/delete-user)の手順をご覧ください。' },
          ],
        },
      ],
    },
    {
      id: 'calls-chat',
      heading: '通話・チャット',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: '通話の音声が聞こえません', a: '【ドラフト】端末のマナーモードと、アプリのマイク・音声の許可を確認してください。' },
            { q: 'AIクローンが覚えていることを消したい', a: '【ドラフト】「2人の関係と記憶」から、いつでも編集・削除できます。' },
          ],
        },
      ],
    },
    {
      id: 'coins-subscriptions',
      heading: 'コイン・サブスクリプション',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: 'サブスクリプションを解約したい', a: '【ドラフト】解約は、購入したストア（App Store・Google Play）で行います。アプリを削除しても解約にはなりません。' },
            { q: 'コインが反映されません', a: '【ドラフト】[[復元手順を起案]]' },
          ],
        },
        { kind: 'storeLinks' },
      ],
    },
    {
      id: 'safety',
      heading: '安全・報告',
      blocks: [
        {
          kind: 'callout',
          tone: 'important',
          title: '危険を感じたら',
          body: '【ドラフト】身の危険があるときは、すぐに110番へ連絡してください。',
        },
        {
          kind: 'faq',
          items: [
            { q: '不適切な行為を報告したい', a: '【ドラフト】プロフィールや会話の「…」から「報告」を選ぶか、[メール](mailto:info@linclone.com?subject=%E5%AE%89%E5%85%A8%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E5%A0%B1%E5%91%8A)でお知らせください。' },
            { q: '未成年の利用について', a: '【ドラフト】[児童保護方針](/policies/child-protection-policy)をご覧ください。' },
          ],
        },
      ],
    },
    {
      id: 'troubleshooting',
      heading: 'うまく動かないとき',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'アプリを最新版に', body: '【ドラフト】App Store・Google Playでアップデートを確認します。' },
            { title: 'アプリを再起動', body: '【ドラフト】アプリを完全に終了してから開き直します。' },
            { title: '通信環境を確認', body: '【ドラフト】Wi-Fiとモバイル通信を切り替えてお試しください。' },
          ],
        },
        {
          kind: 'list',
          items: [
            {
              text: '解決しない場合は、次の情報を添えてお問い合わせください。',
              items: ['ご利用の端末とOSのバージョン', 'アプリのバージョン（設定画面の下部）', '発生した日時と操作'],
            },
          ],
        },
      ],
    },
    {
      id: 'app-info',
      heading: '動作環境',
      blocks: [
        {
          kind: 'table',
          caption: '【ドラフト】動作環境',
          columns: ['項目', 'iPhone', 'Android'],
          rows: [
            ['対応OS', '[[iOSのバージョン]]', '[[Androidのバージョン]]'],
            ['ダウンロード', 'App Store', 'Google Play'],
          ],
        },
        { kind: 'paragraph', text: '【ドラフト】タブレットでの表示は[[要確認]]。' },
      ],
    },
    {
      id: 'contact',
      heading: 'お問い合わせ',
      blocks: [
        {
          kind: 'contact',
          title: 'メールでのお問い合わせ',
          body: '【ドラフト】下のボタンを押すと、必要な項目が入ったメールが開きます。わかる範囲でご記入ください。',
          email: 'info@linclone.com',
          subject: '【LinClone】お問い合わせ',
          bodyTemplate:
            'アカウントのメールアドレスまたは@ユーザー名：\nご利用の端末（例：iPhone 15、Pixel 8）：\nアプリのバージョン（設定画面の下部）：\nお問い合わせ内容：\n',
          label: 'メールで問い合わせる',
          note: '【ドラフト】パスワードやカード番号は送らないでください。',
        },
        {
          kind: 'definitionList',
          items: [
            { term: '受付', definition: '【ドラフト】24時間（返信は営業日） [[要確認]]' },
            { term: '運営', definition: 'LinClone K.K.' },
          ],
        },
      ],
    },
  ],
  related: ['deleteUser', 'privacy', 'terms', 'cookies', 'childProtection'],
});
