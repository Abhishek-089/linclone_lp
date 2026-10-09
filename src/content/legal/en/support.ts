import { defineLegalDoc } from '../types';

// [DRAFT] Structural placeholder. The real text comes from the drafting step.
export default defineLegalDoc({
  status: 'draft',
  meta: {
    title: 'Support and contact | LinClone',
    description:
      '[DRAFT] Answers to common LinClone questions and how to reach us: accounts, calls and chat, coins and subscriptions, and safety.',
  },
  eyebrow: 'Support',
  title: 'How can we help?',
  lead: '[DRAFT] If the answers below do not solve it, email us. [[Confirm reply time]]',
  lastUpdated: '2026-10-09',
  quickActions: [
    { icon: 'mail', title: 'Contact us', body: 'Email the team', href: '#contact' },
    { icon: 'person_remove', title: 'Delete your account', body: 'Steps and what to know', href: '/en/delete-user' },
    { icon: 'payments', title: 'Manage subscription', body: 'Cancel or change a plan', href: '#coins-subscriptions' },
    { icon: 'flag', title: 'Report a safety concern', body: 'Tell us about harmful behaviour', href: '#safety' },
  ],
  sections: [
    {
      id: 'getting-started',
      heading: 'Getting started',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: 'What is LinClone?', a: '[DRAFT] An app for calls, chats and LIVE shows with official AI clones of the creators you love.' },
            { q: 'Am I talking to the real person?', a: '[DRAFT] No. Every creator profile is an official AI clone.' },
            { q: 'Which devices are supported?', a: '[DRAFT] See [requirements](#app-info).' },
          ],
        },
      ],
    },
    {
      id: 'account',
      heading: 'Account and sign-in',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: 'I cannot sign in', a: '[DRAFT] [[Draft the passkey and email-link steps]]' },
            { q: 'How do I change my username?', a: '[DRAFT] My Page → Settings → Username.' },
            { q: 'I want to leave', a: '[DRAFT] Follow [Delete your account](/en/delete-user).' },
          ],
        },
      ],
    },
    {
      id: 'calls-chat',
      heading: 'Calls and chat',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: 'I cannot hear the call', a: '[DRAFT] Check silent mode and the app\'s microphone and audio permissions.' },
            { q: 'How do I erase what a clone remembers?', a: '[DRAFT] Edit or delete memories any time in the app.' },
          ],
        },
      ],
    },
    {
      id: 'coins-subscriptions',
      heading: 'Coins and subscriptions',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: 'How do I cancel a subscription?', a: '[DRAFT] Cancel in the store you bought it from (App Store or Google Play). Deleting the app does not cancel it.' },
            { q: 'My coins did not arrive', a: '[DRAFT] [[Draft the restore steps]]' },
          ],
        },
        { kind: 'storeLinks' },
      ],
    },
    {
      id: 'safety',
      heading: 'Safety and reporting',
      blocks: [
        {
          kind: 'callout',
          tone: 'important',
          title: 'If you feel unsafe',
          body: '[DRAFT] If someone is in danger, contact local emergency services first (110 in Japan).',
        },
        {
          kind: 'faq',
          items: [
            { q: 'How do I report harmful behaviour?', a: '[DRAFT] Tap "…" on a profile or conversation, then Report, or [email us](mailto:info@linclone.com?subject=Safety%20report).' },
            { q: 'What about minors?', a: '[DRAFT] See the [Child Protection Policy](/en/policies/child-protection-policy).' },
          ],
        },
      ],
    },
    {
      id: 'troubleshooting',
      heading: 'When something does not work',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'Update the app', body: '[DRAFT] Check for updates in the App Store or Google Play.' },
            { title: 'Restart the app', body: '[DRAFT] Close it completely, then open it again.' },
            { title: 'Check your connection', body: '[DRAFT] Switch between Wi-Fi and mobile data.' },
          ],
        },
        {
          kind: 'list',
          items: [
            {
              text: 'Still stuck? Include these when you write:',
              items: ['your device and OS version', 'the app version (bottom of Settings)', 'when it happened and what you did'],
            },
          ],
        },
      ],
    },
    {
      id: 'app-info',
      heading: 'Requirements',
      blocks: [
        {
          kind: 'table',
          caption: '[DRAFT] Requirements',
          columns: ['Item', 'iPhone', 'Android'],
          rows: [
            ['Supported OS', '[[iOS version]]', '[[Android version]]'],
            ['Download', 'App Store', 'Google Play'],
          ],
        },
        { kind: 'paragraph', text: '[DRAFT] Tablet layout: [[confirm]].' },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        {
          kind: 'contact',
          title: 'Email the team',
          body: '[DRAFT] The button opens an email with a few questions filled in. Answer what you can.',
          email: 'info@linclone.com',
          subject: 'LinClone support request',
          bodyTemplate:
            'Account email or @username:\nDevice (e.g. iPhone 15, Pixel 8):\nApp version (bottom of Settings):\nWhat happened:\n',
          label: 'Email us',
          note: '[DRAFT] Never send passwords or card numbers.',
        },
        {
          kind: 'definitionList',
          items: [
            { term: 'Hours', definition: '[DRAFT] We read mail every business day [[confirm]]' },
            { term: 'Operator', definition: 'LinClone K.K.' },
          ],
        },
      ],
    },
  ],
  related: ['deleteUser', 'privacy', 'terms', 'cookies', 'childProtection'],
});
