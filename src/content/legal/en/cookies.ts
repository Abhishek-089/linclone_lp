import { defineLegalDoc } from '../types';

// [DRAFT] Structural placeholder. The real text comes from the drafting step.
export default defineLegalDoc({
  status: 'draft',
  meta: {
    title: 'Cookie Policy | LinClone',
    description: '[DRAFT] Which cookies and similar technologies the LinClone website and app use, why, and how to turn them off.',
  },
  eyebrow: 'Legal',
  title: 'Cookie Policy',
  lead: '[DRAFT] How this website and the app use cookies and similar technologies. [[Confirm current usage]]',
  effectiveDate: '2026-11-01',
  lastUpdated: '2026-10-09',
  atAGlance: [
    { icon: 'cookie', title: 'Only what is needed', body: '[DRAFT] Mostly what the site needs to display properly.' },
    { icon: 'visibility', title: 'No advertising cookies', body: '[DRAFT] [[Confirm there are no ad cookies]]' },
    { icon: 'settings', title: 'Turn them off in your browser', body: '[DRAFT] See [how to turn them off](#choices).' },
  ],
  sections: [
    {
      id: 'what-are-cookies',
      heading: 'What cookies are',
      blocks: [
        { kind: 'paragraph', text: '[DRAFT] A cookie is a small text file a website stores in your browser.' },
        {
          kind: 'definitionList',
          items: [
            { term: 'Cookie', definition: '[DRAFT] A small piece of data stored by your browser.' },
            { term: 'Local storage', definition: '[DRAFT] Browser storage for settings such as display preferences.' },
          ],
        },
      ],
    },
    {
      id: 'cookies-we-use',
      heading: 'Cookies we use',
      blocks: [
        {
          kind: 'table',
          caption: '[DRAFT] Cookies and similar technologies we use (example)',
          columns: ['Name', 'Type', 'Purpose', 'Kept for'],
          rows: [
            ['lc.langPill', 'Local storage', 'Remembers that you closed the language hint', 'Until you clear it'],
            ['lc.oshi', 'Local storage', 'Remembers the colour you picked', 'Until you clear it'],
            ['[[Name]]', '[[Type]]', '[[Purpose]]', '[[Period]]'],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          body: '[DRAFT] Payments happen in the App Store and Google Play; this site sets no payment cookies.',
        },
      ],
    },
    {
      id: 'in-the-app',
      heading: 'In the app',
      blocks: [
        {
          kind: 'list',
          items: [
            {
              text: '[DRAFT] The app stores information on your device to:',
              items: ['keep you signed in', 'remember display settings'],
            },
            '[[Confirm analytics SDKs]]',
          ],
        },
        { kind: 'storeLinks', body: '[DRAFT] Subscription details live in your store account.' },
      ],
    },
    {
      id: 'choices',
      heading: 'How to turn them off',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'Open your browser settings', body: '[DRAFT] In Safari, Chrome or your browser of choice.' },
            { title: 'Change the cookie setting', body: '[DRAFT] Under Privacy, change how cookies are stored.' },
            { title: 'Reload the page', body: '[DRAFT] The change applies after a reload.' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Some features may stop working',
          body: '[DRAFT] Blocking necessary cookies can break parts of the site.',
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
            { q: 'Can cookies identify me?', a: '[DRAFT] [[Draft the answer]]' },
            { q: 'How do I withdraw consent?', a: '[DRAFT] Delete cookies in your browser settings.' },
          ],
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      blocks: [
        {
          kind: 'paragraph',
          text: '[DRAFT] For personal data in general, see the [Privacy Policy](/en/privacy).',
        },
        {
          kind: 'contact',
          title: 'Questions about cookies',
          email: 'info@linclone.com',
          subject: 'Question about cookies',
          label: 'Email us',
        },
      ],
    },
  ],
  related: ['privacy', 'terms'],
});
