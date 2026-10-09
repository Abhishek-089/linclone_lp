import { defineLegalDoc } from '../types';

// [DRAFT] Structural placeholder. The real text comes from the drafting step.
export default defineLegalDoc({
  status: 'draft',
  meta: {
    title: 'Privacy Policy | LinClone',
    description:
      '[DRAFT] What LinClone collects, why, who we share it with, how long we keep it, your rights, and how to contact us about your personal data.',
  },
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  lead: '[DRAFT] How LinClone K.K. ("we") handles the information you give us in the LinClone app and on this website. [[Replace the lead once drafted]]',
  effectiveDate: '2026-11-01',
  lastUpdated: '2026-10-09',
  atAGlance: [
    {
      icon: 'block',
      title: 'We never sell your data',
      body: '[DRAFT] We do not sell the personal data you entrust to us.',
    },
    {
      icon: 'psychology',
      title: 'You control the memories',
      body: '[DRAFT] Review or delete what an AI clone remembers about you, any time, in the app.',
    },
    {
      icon: 'delete',
      title: 'Delete any time',
      body: '[DRAFT] Delete your account from Settings. See [Delete your account](/en/delete-user).',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'About this policy',
      blocks: [
        {
          kind: 'paragraph',
          text: '[DRAFT] This policy covers the LinClone app, this website and related services (the "Service"). [[Confirm scope]]',
        },
        {
          kind: 'definitionList',
          items: [
            { term: 'Operator', definition: 'LinClone K.K. 【要確認】' },
            { term: 'Address', definition: '[[Registered address]]' },
            { term: 'Contact', definition: '[info@linclone.com](mailto:info@linclone.com)' },
          ],
        },
      ],
    },
    {
      id: 'information-we-collect',
      heading: 'Information we collect',
      blocks: [
        { kind: 'paragraph', text: '[DRAFT] We collect only what we need to run the Service:' },
        {
          kind: 'list',
          items: [
            {
              text: '**Account details**',
              items: ['Username, display name and email address', 'Date of birth [[confirm purpose]]'],
            },
            {
              text: '**How you use the app**',
              items: ['Chat and call content', 'Coin purchases and spending'],
            },
            'Device details (operating system, app version)',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'We never read your contacts',
          body: '[DRAFT] The app does not access your address book. [[Fact-check]]',
        },
      ],
    },
    {
      id: 'how-we-use',
      heading: 'How we use it',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'To provide the Service and identify your account',
            'To tailor conversations with AI clones to you',
            'To prevent abuse and keep people safe',
            'To answer your questions',
          ],
        },
      ],
    },
    {
      id: 'sharing',
      heading: 'Sharing and processors',
      blocks: [
        {
          kind: 'paragraph',
          text: '[DRAFT] We do not share personal data without your consent unless the law requires it. We use these processors:',
        },
        {
          kind: 'table',
          caption: '[DRAFT] Main processors (example)',
          columns: ['Processor type', 'Purpose', 'Country'],
          rows: [
            ['Cloud hosting', 'Storing and processing data', '[[Country]]'],
            ['Payments (App Store, Google Play)', 'Coin and subscription payments', '[[Country]]'],
            ['Speech and AI processing', 'Generating AI clone replies', '[[Country]]'],
          ],
        },
        {
          kind: 'storeLinks',
          body: '[DRAFT] Apple and Google handle payment details; we never receive your card number. Manage subscriptions in your store account.',
        },
      ],
    },
    {
      id: 'retention',
      heading: 'How long we keep it',
      blocks: [
        {
          kind: 'paragraph',
          text: '[DRAFT] When you delete your account, your profile and conversation memories are erased within [[N]] days. Records the law requires us to keep are kept for the required period.',
        },
        {
          kind: 'callout',
          tone: 'important',
          title: 'Purchased coins',
          body: '[DRAFT] Deleting your account voids unused coins, and they cannot be refunded. [[Confirm refund policy]]',
        },
      ],
    },
    {
      id: 'your-rights',
      heading: 'Your rights',
      blocks: [
        { kind: 'paragraph', text: '[DRAFT] You can ask us to disclose, correct, stop using or delete your information.' },
        {
          kind: 'steps',
          items: [
            { title: 'Email us', body: 'Write to [info@linclone.com](mailto:info@linclone.com) with your request.' },
            { title: 'We confirm it is you', body: '[DRAFT] We reply to the email address registered to your account.' },
            { title: 'We act on it', body: '[DRAFT] We respond within [[N]] days of confirming your identity.' },
          ],
        },
      ],
    },
    {
      id: 'children',
      heading: 'Minors',
      blocks: [
        {
          kind: 'paragraph',
          text: '[DRAFT] See our [Child Protection Policy](/en/policies/child-protection-policy) for how we protect minors.',
        },
      ],
    },
    {
      id: 'security',
      heading: 'Security',
      blocks: [
        {
          kind: 'paragraph',
          text: '[DRAFT] We encrypt data in transit and limit who can access it. For cookies, see the [Cookie Policy](/en/cookies).',
        },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      blocks: [
        {
          kind: 'paragraph',
          text: '[DRAFT] We announce material changes in the app or on this page before they take effect.',
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
              q: 'Can the real creator read my conversations?',
              a: '[DRAFT] Creators see aggregate statistics only, never individual conversations. [[Fact-check]]',
            },
            {
              q: 'How do I erase what a clone remembers?',
              a: '[DRAFT] Edit or delete memories any time in the app.',
            },
          ],
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      blocks: [
        {
          kind: 'contact',
          title: 'Questions about your personal data',
          body: '[DRAFT] Requests about your data, or questions about this policy.',
          email: 'info@linclone.com',
          subject: 'Privacy request',
          bodyTemplate: 'Account email or @username:\nYour request or question:\n',
          label: 'Email us',
          note: '[DRAFT] Please write from the email address registered to your account so we can confirm it is you.',
        },
      ],
    },
  ],
  related: ['terms', 'cookies', 'childProtection', 'deleteUser', 'support'],
});
