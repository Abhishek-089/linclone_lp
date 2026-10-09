import { defineLegalDoc } from '../types';

// Account deletion page (/en/delete-user): the Google Play account-deletion URL.
// App name "LinClone" and developer "LinClone K.K." exactly as on the store
// listing. English equivalent of ja/delete-user.ts (the Japanese version
// prevails). What happens after deletion follows Terms Article 19 and Privacy
// Policy Article 11 (established 2026-10-09). Screen names are the shipped
// app's English labels (v1.3.46).
export default defineLegalDoc({
  status: 'final',
  meta: {
    title: 'Delete your LinClone account | LinClone',
    description:
      'Delete your account in the LinClone app by LinClone K.K.: steps in the app, how to ask by email without the app, and what happens to your coins and data.',
  },
  eyebrow: 'Support',
  title: 'Delete your account',
  lead: 'You can delete your account in the LinClone app (developer: LinClone K.K.) from Settings at any time. If you cannot use the app, you can ask us to delete it by email.',
  lastUpdated: '2026-10-09',
  atAGlance: [
    {
      icon: 'autorenew',
      title: 'Cancel in the store first',
      body: 'Deleting your account does not cancel an App Store or Google Play subscription.',
    },
    {
      icon: 'person_remove',
      title: 'Immediate and final',
      body: 'Your account is closed at once and you can no longer sign in. Unused coins, LIVE Tickets and perks are forfeited.',
    },
    {
      icon: 'history',
      title: 'Interaction History deleted after a year',
      body: 'Kept for one year after you leave, then deleted. Until then it is used only to investigate trouble and to comply with the law.',
    },
  ],
  sections: [
    {
      id: 'before-you-start',
      heading: 'First: cancel your subscription',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Cancel in the store before you delete',
          body: [
            'Deleting your account does not automatically cancel an App Store or Google Play subscription. To stop being charged, cancel it in the store ([Terms, Article 19(3)](/en/terms#art-19)).',
            '**Before you delete your account**, cancel your subscription in the store you bought it from.',
          ],
        },
        {
          kind: 'storeLinks',
          body: 'Open the store’s subscription page with the Apple ID or Google account you used to subscribe.',
        },
      ],
    },
    {
      id: 'in-the-app',
      heading: 'Delete in the app',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'Open My Page', body: 'Tap My Page in the tab bar at the bottom of the screen.' },
            { title: 'Open Settings', body: 'Tap the gear icon at the top right.' },
            {
              title: 'Open Security & passkeys',
              body: 'Under Privacy & safety, tap Security & passkeys. On Android it is called Security.',
            },
            { title: 'Tap Delete account', body: 'When Security opens, tap Delete account (in red).' },
            {
              title: 'Tap Delete anyway',
              body: 'When “Delete your account?” appears, read it, then tap Delete anyway. To stop, tap Keep my account.',
            },
          ],
          illustration: {
            kind: 'settingsPath',
            alt: 'Illustration of the LinClone Settings screen with Security & passkeys highlighted under Privacy & safety.',
            screenTitle: 'Settings',
            groups: [
              { label: 'Account settings', rows: ['Rate the app', 'Send feedback', 'Notification settings'] },
              { label: 'Privacy & safety', rows: ['Privacy', 'Security & passkeys', 'Blocked users', 'Language'] },
              { label: 'Account', rows: ['View the tutorial', 'Log out'] },
            ],
            highlight: 'Security & passkeys',
            caption: 'Delete account is on the Security screen behind this row (called Security on Android). Illustration only.',
          },
        },
        {
          kind: 'paragraph',
          text: 'Once you delete, your account is closed at once and the app signs you out.',
        },
      ],
    },
    {
      id: 'without-the-app',
      heading: 'Ask us to delete it without the app',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Lost your phone, cannot sign in, or already removed the app? Ask us by email to delete your account.',
        },
        {
          kind: 'contact',
          title: 'Request deletion by email',
          body: 'The button opens an email with the details to fill in. If you can, send it from the email address registered to your account. We use what you send to confirm it is you and to handle your request.',
          email: 'info@linclone.com',
          subject: '[LinClone] Account deletion request',
          bodyTemplate:
            'Email address registered to the account (the email of the Google account or Apple ID you sign in with):\n@username (if you know it):\nDisplay name (if you know it):\nDevice (iPhone or Android):\n\nPlease delete my LinClone account.\n',
          label: 'Request deletion',
          note: 'If you hid your email address with your Apple ID, please give your @username. Never send a password.',
        },
        {
          kind: 'steps',
          items: [
            { title: 'Send the email', body: 'Use the button above to send your request to info@linclone.com.' },
            {
              title: 'We confirm it is you',
              body: 'We check that the request comes from the account holder. We may write to you from info@linclone.com with further questions.',
            },
            {
              title: 'We delete the account',
              body: 'Once we have confirmed it is you, we delete the account. What happens afterwards is the same as deleting in the app. [[Confirm the time from request to deletion, and whether we confirm completion]]',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          body: 'Besides deletion, you can also ask us to disclose, or stop using, the personal data we hold about you. See [Privacy Policy, Article 13](/en/privacy#art-13).',
        },
      ],
    },
    {
      id: 'what-happens',
      heading: 'What happens when you delete',
      blocks: [
        {
          kind: 'table',
          caption: 'What happens to your account and data, and for how long',
          columns: ['What', 'What happens', 'When / how long'],
          rows: [
            ['Your account', 'It is closed and you can no longer sign in.', 'At once'],
            ['Email address, display name, username and profile picture', 'Deleted.', 'At once'],
            [
              'Unused coins (paid and free), LIVE Tickets and perks',
              'They are forfeited. They cannot be refunded or moved to another account ([Terms, Article 7](/en/terms#art-7) and [Article 19(2)](/en/terms#art-19)).',
              'At once',
            ],
            [
              'Interaction History',
              'Kept, then deleted. While it is kept, it is used only to investigate trouble and to comply with the law ([Terms, Article 19(4)](/en/terms#art-19); [Privacy Policy, Article 11(1)](/en/privacy#art-11)).',
              'Kept for one year after you leave, then deleted',
            ],
            ['Purchase records', 'Kept ([Privacy Policy, Article 11(2)](/en/privacy#art-11)).', 'For the period the law requires'],
            [
              'Records of access to Interaction History (records of our staff reviewing its content)',
              'Kept ([Privacy Policy, Article 11(3)](/en/privacy#art-11)).',
              'Until the Interaction History concerned is deleted',
            ],
            [
              'Other personal information (date of birth, device and log information, etc.)',
              'Handled as set out in the [Privacy Policy](/en/privacy) ([Terms, Article 19(5)](/en/terms#art-19)).',
              '[[Confirm how long it is kept and when it is deleted]]',
            ],
          ],
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'What “Interaction History” means',
              definition:
                'The record of your chats with AI Clones (including text, voice messages and images), calls (including AI calls and morning calls), LIVE comments, gifts and viewing, Stories, posts to Grow, relationship, nickname and memory settings, and your other activity on the Service ([Terms, Article 1(4)](/en/terms#art-1)).',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'important',
          title: 'Coins are not refunded',
          body: 'Coins are not refunded, except where a refund is required by law ([Terms, Article 7(8)](/en/terms#art-7)). Use any remaining coins or LIVE Tickets before you delete.',
        },
      ],
    },
    {
      id: 'not-affected',
      heading: 'What deleting does not change',
      blocks: [
        {
          kind: 'list',
          items: [
            '**App Store and Google Play subscriptions** are not cancelled. [Cancel in the store](#before-you-start).',
            '**Information already shared with creators** (such as chat content and call transcripts; [Terms, Article 8](/en/terms#art-8)) may not be deleted from the creator’s side, just as when you unfollow (Article 8(6)). Nothing new is shared after your account is deleted.',
            '**Anything posted outside the Service** (such as LIVE clips posted to social media) does not disappear when you delete your account.',
            '**Sign in with Apple** is not unlinked automatically. If you want, remove it in your iPhone’s Settings, under your Apple Account.',
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
            {
              q: 'Can I undo a deletion?',
              a: 'No. Deletion happens at once, and it cannot be undone or the account restored.',
            },
            {
              q: 'Does removing the app from my phone delete my account?',
              a: 'No. Your account stays if you uninstall the app. To leave, [delete it in the app](#in-the-app) or [ask us by email](#without-the-app).',
            },
            {
              q: 'Can I use LinClone again after deleting?',
              a: 'Yes, by signing up again, but it will be a new account. The coins, LIVE Tickets, perks and Interaction History of the deleted account do not carry over.',
            },
            {
              q: 'Can I get my data before I delete?',
              a: 'The app has no data export feature. To ask for disclosure of the personal data we hold, make a request under [Privacy Policy, Article 13](/en/privacy#art-13) before you delete.',
            },
            {
              q: 'What about a refund for my subscription?',
              a: 'Cancellations and refunds of subscriptions and Coin Passes follow each store’s terms and procedures ([Terms, Article 13](/en/terms#art-13)). See [Support](/en/support#subscriptions).',
            },
            {
              q: 'Can a parent delete a child’s account?',
              a: 'Your child can delete the account in the app. A parent or guardian of a child under 16 can ask us to stop using and erase the child’s personal information ([Privacy Policy, Article 14(2)](/en/privacy#art-14)). [Email us](#without-the-app) with the child’s @username; we will explain how we confirm that you are the parent or guardian.',
            },
            {
              q: 'I cannot sign in, so I cannot delete in the app',
              a: '[Ask us by email](#without-the-app). We delete the account once we have confirmed it is you.',
            },
          ],
        },
      ],
    },
  ],
  related: ['support', 'privacy', 'terms'],
});
