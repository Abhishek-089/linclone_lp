import { defineLegalDoc } from '../types';

// 【ドラフト】構成確認用のプレースホルダーです。本文は別途の起案工程で差し替えます。
export default defineLegalDoc({
  status: 'draft',
  meta: {
    title: 'アカウント削除の方法｜LinClone',
    description: '【ドラフト】LinCloneのアカウントを削除する方法。アプリからの手順、アプリを使わずに依頼する方法、削除されるデータと保存期間、コインとサブスクリプションの扱い。',
  },
  eyebrow: 'サポート',
  title: 'アカウントを削除する',
  lead: '【ドラフト】LinCloneのアカウントは、アプリの設定からいつでも削除できます。アプリを使えない場合は、メールで削除をご依頼いただけます。',
  lastUpdated: '2026-10-09',
  sections: [
    {
      id: 'before-you-start',
      heading: 'はじめに：サブスクリプションの解約',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: '先にサブスクリプションを解約してください',
          body: [
            '【ドラフト】アカウントを削除しても、App Store・Google Playのサブスクリプションは自動では解約されません。',
            '**削除の前に**、購入したストアで解約してください。',
          ],
        },
        { kind: 'storeLinks' },
      ],
    },
    {
      id: 'in-the-app',
      heading: 'アプリで削除する',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'マイページを開く', body: '【ドラフト】画面下のタブから「マイページ」を開きます。' },
            { title: '「設定」を開く', body: '【ドラフト】右上の歯車アイコンをタップします。' },
            { title: '「アカウント削除」を選ぶ', body: '【ドラフト】「アカウント」の項目にある「アカウント削除」をタップします。' },
            { title: '内容を確認して削除', body: '【ドラフト】確認画面の内容を読み、「削除する」をタップします。' },
          ],
          illustration: {
            kind: 'settingsPath',
            alt: 'LinCloneアプリの設定画面のイメージ。「アカウント」の項目にある「アカウント削除」が強調されている。',
            screenTitle: '設定',
            groups: [
              { label: 'アカウント設定', rows: ['アプリを評価', '意見を送る', '通知設定'] },
              { label: 'プライバシーと安全', rows: ['プライバシー', 'ブロック中のユーザー', '言語'] },
              { label: 'アカウント', rows: ['チュートリアルを見る', 'ログアウト', 'アカウント削除'] },
            ],
            highlight: 'アカウント削除',
            caption: '※画面はイメージです。',
          },
        },
      ],
    },
    {
      id: 'without-the-app',
      heading: 'アプリを使わずに削除を依頼する',
      blocks: [
        {
          kind: 'paragraph',
          text: '【ドラフト】端末をなくした、アプリにログインできないなどの場合は、メールで削除をご依頼ください。',
        },
        {
          kind: 'contact',
          title: 'メールで削除を依頼する',
          body: '【ドラフト】ボタンを押すと、必要な項目が入ったメールが開きます。',
          email: 'info@linclone.com',
          subject: '【アカウント削除の依頼】',
          bodyTemplate:
            'アカウントに登録したメールアドレス：\n@ユーザー名（わかる場合）：\n削除を希望する理由（任意）：\n\n上記アカウントの削除を依頼します。\n',
          label: '削除を依頼する',
          note: '【ドラフト】ご本人確認のため、登録メールアドレスから送信してください。確認のご連絡を差し上げる場合があります。[[確認手順を要確認]]',
        },
      ],
    },
    {
      id: 'what-is-deleted',
      heading: '削除されるデータと保存期間',
      blocks: [
        {
          kind: 'table',
          caption: '【ドラフト】データの扱い',
          columns: ['データ', '扱い', '期間'],
          rows: [
            ['プロフィール（ユーザー名・写真など）', '削除', '[[N]]日以内'],
            ['会話の記憶・チャット履歴', '削除', '[[N]]日以内'],
            ['購入・決済の記録', '保存（法令に基づく）', '[[N]]年'],
            ['不正利用の調査記録', '保存', '[[N]]日'],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          body: '【ドラフト】詳しくは[プライバシーポリシー](/privacy#retention)をご覧ください。',
        },
      ],
    },
    {
      id: 'coins',
      heading: 'コインの扱い',
      blocks: [
        {
          kind: 'callout',
          tone: 'important',
          title: '未使用のコインは失効します',
          body: '【ドラフト】アカウントを削除すると、残っているコインは失効し、払い戻しや別のアカウントへの移行はできません。[[返金方針を要確認]]',
        },
      ],
    },
    {
      id: 'after-deletion',
      heading: '削除したあと',
      blocks: [
        {
          kind: 'list',
          items: [
            '【ドラフト】同じメールアドレスで、あらためて登録できます。',
            {
              text: '【ドラフト】次の情報は元に戻せません。',
              items: ['会話の記憶', '購入したコイン'],
            },
          ],
        },
        {
          kind: 'definitionList',
          items: [
            { term: '削除の受付', definition: '【ドラフト】すぐにログアウトされます。' },
            { term: 'データの消去', definition: '【ドラフト】[[N]]日以内に完了します。' },
          ],
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
            { q: 'アプリを削除すればアカウントも消えますか？', a: '【ドラフト】いいえ。アプリを削除してもアカウントは残ります。上の手順で削除してください。' },
            { q: '削除を取り消せますか？', a: '【ドラフト】[[取り消し期間の有無を要確認]]' },
          ],
        },
      ],
    },
  ],
  related: ['support', 'privacy', 'terms'],
});
