import { defineLegalDoc } from '../types';

// [DRAFT] Structural placeholder. The real text comes from the drafting step.
export default defineLegalDoc({
  status: 'draft',
  meta: {
    title: 'How to delete your account | LinClone',
    description:
      '[DRAFT] Delete your LinClone account in the app or by email. What is deleted, what is kept and for how long, and what happens to coins and subscriptions.',
  },
  eyebrow: 'Support',
  title: 'Delete your account',
  lead: '[DRAFT] You can delete your LinClone account from Settings in the app at any time. If you cannot use the app, ask us by email.',
  lastUpdated: '2026-10-09',
  sections: [
    {
      id: 'before-you-start',
      heading: 'First: cancel your subscription',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Cancel subscriptions first',
          body: [
            '[DRAFT] Deleting your account does not cancel an App Store or Google Play subscription.',
            '**Before you delete**, cancel it in the store you bought it from.',
          ],
        },
        { kind: 'storeLinks' },
      ],
    },
    {
      id: 'in-the-app',
      heading: 'Delete in the app',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'Open My Page', body: '[DRAFT] Tap My Page in the tab bar.' },
            { title: 'Open Settings', body: '[DRAFT] Tap the gear icon at the top right.' },
            { title: 'Choose Delete account', body: '[DRAFT] Under Account, tap Delete account.' },
            { title: 'Confirm', body: '[DRAFT] Read the confirmation, then tap Delete.' },
          ],
          illustration: {
            kind: 'settingsPath',
            alt: 'Illustration of the LinClone Settings screen with Delete account highlighted under Account.',
            screenTitle: 'Settings',
            groups: [
              { label: 'Account settings', rows: ['Rate the app', 'Send feedback', 'Notification settings'] },
              { label: 'Privacy & safety', rows: ['Privacy', 'Blocked users', 'Language'] },
              { label: 'Account', rows: ['View the tutorial', 'Log out', 'Delete account'] },
            ],
            highlight: 'Delete account',
            caption: 'Illustration only.',
          },
        },
      ],
    },
    {
      id: 'without-the-app',
      heading: 'Request deletion without the app',
      blocks: [
        {
          kind: 'paragraph',
          text: '[DRAFT] Lost your phone or cannot sign in? Ask us to delete your account by email.',
        },
        {
          kind: 'contact',
          title: 'Request deletion by email',
          body: '[DRAFT] The button opens an email with the details we need.',
          email: 'info@linclone.com',
          subject: 'Account deletion request',
          bodyTemplate:
            'Email address registered to the account:\n@username (if you know it):\nReason (optional):\n\nPlease delete the account above.\n',
          label: 'Request deletion',
          note: '[DRAFT] To confirm it is you, send this from the email address registered to the account. We may write back to verify. [[Confirm verification steps]]',
        },
      ],
    },
    {
      id: 'what-is-deleted',
      heading: 'What is deleted, what is kept',
      blocks: [
        {
          kind: 'table',
          caption: '[DRAFT] What happens to your data',
          columns: ['Data', 'What happens', 'When'],
          rows: [
            ['Profile (username, photo)', 'Deleted', 'Within [[N]] days'],
            ['Conversation memories and chat history', 'Deleted', 'Within [[N]] days'],
            ['Purchase and payment records', 'Kept (required by law)', '[[N]] years'],
            ['Abuse investigation records', 'Kept', '[[N]] days'],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          body: '[DRAFT] Details in the [Privacy Policy](/en/privacy#retention).',
        },
      ],
    },
    {
      id: 'coins',
      heading: 'What happens to coins',
      blocks: [
        {
          kind: 'callout',
          tone: 'important',
          title: 'Unused coins are voided',
          body: '[DRAFT] When you delete your account, remaining coins are voided. They cannot be refunded or moved to another account. [[Confirm refund policy]]',
        },
      ],
    },
    {
      id: 'after-deletion',
      heading: 'After deletion',
      blocks: [
        {
          kind: 'list',
          items: [
            '[DRAFT] You can sign up again with the same email address.',
            {
              text: '[DRAFT] These cannot be restored:',
              items: ['conversation memories', 'purchased coins'],
            },
          ],
        },
        {
          kind: 'definitionList',
          items: [
            { term: 'Request received', definition: '[DRAFT] You are signed out right away.' },
            { term: 'Data erased', definition: '[DRAFT] Within [[N]] days.' },
          ],
        },
      ],
    },
    {
      id: 'faq',
      heading: 'Questions people ask',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: 'Does deleting the app delete my account?', a: '[DRAFT] No. Your account stays until you delete it with the steps above.' },
            { q: 'Can I undo a deletion?', a: '[DRAFT] [[Confirm whether there is a grace period]]' },
          ],
        },
      ],
    },
  ],
  related: ['support', 'privacy', 'terms'],
});
