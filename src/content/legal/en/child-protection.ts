import { defineLegalDoc } from '../types';

// [DRAFT] Structural placeholder. The real text comes from the drafting step.
export default defineLegalDoc({
  status: 'draft',
  meta: {
    title: 'Child Protection Policy | LinClone',
    description:
      '[DRAFT] Zero tolerance for child sexual abuse and exploitation (CSAE): age rules, prohibited conduct, detection, reporting and work with authorities.',
  },
  eyebrow: 'Legal',
  title: 'Child Protection Policy',
  lead: '[DRAFT] LinClone has zero tolerance for child sexual abuse and exploitation (CSAE). This policy sets out how we protect minors.',
  effectiveDate: '2026-11-01',
  lastUpdated: '2026-10-09',
  atAGlance: [
    { icon: 'shield', title: 'Zero tolerance', body: '[DRAFT] Any use involving CSAE is stopped and reported, without exception.' },
    { icon: 'flag', title: 'Easy to report', body: '[DRAFT] Report in the app or by email.' },
    { icon: 'account_balance', title: 'We work with authorities', body: '[DRAFT] We report to the relevant authorities as the law requires.' },
  ],
  sections: [
    {
      id: 'commitment',
      heading: 'Our commitment',
      blocks: [
        {
          kind: 'callout',
          tone: 'important',
          title: 'Zero tolerance for CSAE',
          body: '[DRAFT] Content or behaviour that sexually exploits or abuses children is banned everywhere in the Service.',
        },
        { kind: 'paragraph', text: '[DRAFT] This policy forms part of the [Terms of Service](/en/terms).' },
      ],
    },
    {
      id: 'age-requirements',
      heading: 'Age requirements',
      blocks: [
        {
          kind: 'table',
          caption: '[DRAFT] Who may use the Service (example)',
          columns: ['Age', 'Use', 'Condition'],
          rows: [
            ['Under [[N]]', 'Not allowed', '—'],
            ['[[N]] to 17', '[[Confirm]]', 'Parental consent'],
            ['18 and over', 'Allowed', '—'],
          ],
        },
      ],
    },
    {
      id: 'prohibited',
      heading: 'Prohibited conduct',
      blocks: [
        {
          kind: 'list',
          items: [
            'Creating or sharing content that sexualises children',
            {
              text: 'Grooming: sexual approaches to minors, including',
              items: ['asking for personal information', 'asking to meet outside the app'],
            },
            'Trying to make an AI clone do any of the above',
          ],
        },
      ],
    },
    {
      id: 'detection',
      heading: 'Detection and response',
      blocks: [
        {
          kind: 'definitionList',
          items: [
            { term: 'Automated detection', definition: '[DRAFT] [[Confirm detection methods]]' },
            { term: 'Human review', definition: '[DRAFT] Our team reviews every report.' },
            { term: 'Action', definition: '[DRAFT] Account suspension, evidence preservation and reports to authorities.' },
          ],
        },
      ],
    },
    {
      id: 'how-to-report',
      heading: 'How to report',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'Report in the app', body: '[DRAFT] Tap "…" on a profile or conversation, then Report.' },
            { title: 'Report by email', body: 'Write to [info@linclone.com](mailto:info@linclone.com?subject=Child%20safety%20report) with what happened and when.' },
            { title: 'In an emergency', body: '[DRAFT] If someone is in danger, contact local emergency services first (110 in Japan).' },
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          body: '[DRAFT] Do not save or forward illegal content. Describing when and where you saw it is enough.',
        },
      ],
    },
    {
      id: 'parents',
      heading: 'For parents and guardians',
      blocks: [
        {
          kind: 'paragraph',
          text: '[DRAFT] To delete your child\'s account, use "Request deletion without the app" on [Delete your account](/en/delete-user).',
        },
        { kind: 'storeLinks', body: '[DRAFT] Purchases and subscriptions can also be managed with each store\'s family settings.' },
      ],
    },
    {
      id: 'faq',
      heading: 'Questions people ask',
      blocks: [
        {
          kind: 'faq',
          items: [
            { q: 'Will the person I report know it was me?', a: '[DRAFT] We never share who made a report.' },
            { q: 'How quickly do you act?', a: '[DRAFT] [[Confirm target time]]' },
          ],
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Child safety contact',
      blocks: [
        {
          kind: 'contact',
          title: 'Child safety contact',
          body: '[DRAFT] Reports and questions about child safety.',
          email: 'info@linclone.com',
          subject: 'Child safety report',
          bodyTemplate: 'Who or what you are reporting (@username, creator name):\nDate and time:\nWhat happened:\n',
          label: 'Report by email',
        },
      ],
    },
  ],
  related: ['terms', 'privacy', 'support'],
});
