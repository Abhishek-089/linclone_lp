import { defineLegalDoc } from '../types';

// Child Safety Standards (Child Protection Policy). English equivalent of
// ../ja/child-protection.ts (same section ids, same facts). This URL is the
// Google Play child-safety standards URL and LC Studio's child-safety report opens
// it, so keep the path. Age rules, prohibitions, reporting and enforcement follow
// the owner-approved Terms (Arts. 3, 9, 15, 16, 18) and Privacy Policy (Arts. 7, 14).
// Do not describe mechanisms that do not exist (CSAM hash matching, NCMEC reports,
// response-time promises).
export default defineLegalDoc({
  status: 'final',
  meta: {
    title: 'Child Safety Standards | LinClone',
    description:
      'LinClone K.K. has zero tolerance for child sexual abuse and exploitation (CSAE) and CSAM in the LinClone app: what is banned, how to report, what we do.',
  },
  eyebrow: 'Legal',
  title: 'Child Safety Standards (Child Protection Policy)',
  lead: 'LinClone K.K. (the “Company”) does not tolerate child sexual abuse or exploitation in any form in the LinClone app and the services related to it (the “Service”). This policy sets out what we prohibit to protect children, how to report a concern, and what we do once we receive a report.',
  establishedDate: '2026-10-09',
  lastUpdated: '2026-10-09',
  atAGlance: [
    {
      icon: 'shield',
      title: 'Zero tolerance',
      body: 'Content or conduct that sexualises children is banned, including AI-generated and fictional material.',
    },
    {
      icon: 'flag',
      title: 'Report in the app or by email',
      body: 'You can [report by email](#contact) even without an account.',
    },
    {
      icon: 'crisis_alert',
      title: 'In danger right now? Call 110',
      body: 'The Service is not an emergency service. In Japan, call the police (110) or an ambulance (119) first.',
    },
  ],
  sections: [
    {
      id: 'scope',
      heading: 'Who this policy covers',
      blocks: [
        {
          kind: 'definitionList',
          items: [
            { term: 'App', definition: 'LinClone (iPhone and Android)' },
            { term: 'Developer', definition: 'LinClone K.K. (Representative: Kensei Shiraishi)' },
            { term: 'Address', definition: 'Soshiso 402, 2-5-10 Yayoi, Bunkyo-ku, Tokyo 113-0032, Japan' },
            { term: 'Child safety contact', definition: 'LinClone K.K., Child Protection Officer ([info@linclone.com](#contact))' },
          ],
        },
        {
          kind: 'paragraph',
          text: 'This policy applies to everyone who uses the Service. In this policy, a “child” means anyone under 18.',
        },
        {
          kind: 'paragraph',
          text: 'This policy brings together, in line with the [Terms of Service](/en/terms) and the [Privacy Policy](/en/privacy), what the Company does to protect children. Creators who publish AI Clones are also bound by the separate contract they conclude with the Company.',
        },
      ],
    },
    {
      id: 'commitment',
      heading: 'Our commitment',
      blocks: [
        {
          kind: 'callout',
          tone: 'important',
          title: 'Zero tolerance for child sexual abuse and exploitation (CSAE)',
          body: [
            'The Company does not allow child sexual abuse and exploitation (CSAE) or child sexual abuse material (CSAM) anywhere in the Service, in any form.',
            'When we confirm a violation, we remove the content, suspend or delete the account, and report the matter to the police and other relevant authorities in accordance with the law.',
          ],
        },
        {
          kind: 'paragraph',
          text: 'Article 15 of the Terms of Service prohibits, among other things, conduct that violates laws (item 1), altering AI-Generated Content for sexual purposes (item 5), input intended to make an AI Clone say something illegal or harmful (item 6), and posting child sexual exploitation (item 8) ([Terms, Article 15](/en/terms#art-15)). This policy spells out what those rules mean for the protection of children.',
        },
      ],
    },
    {
      id: 'prohibited',
      heading: 'What is prohibited',
      blocks: [
        {
          kind: 'paragraph',
          text: 'The following are prohibited on the Service, whether or not a real child is involved, and whether the material is a photo or video, AI-generated, or a drawing, animation, text or other creative work.',
        },
        {
          kind: 'list',
          items: [
            'Posting, sending or sharing images, video, audio, text or other content that depicts a child as a sexual object (CSAM), or pointing others to where it can be found',
            'Conversations, role-play or any other expression that sexualises a child (including where a character is set up as a child)',
            {
              text: 'Grooming: trying to befriend a child, or exploiting a child’s trust, for a sexual purpose. For example:',
              items: [
                'asking a child for sexual images or personal information',
                'asking a child to make contact or meet outside the Service',
              ],
            },
            'Sextortion: using sexual images or similar material to threaten a child, or to demand money, images or anything else',
            'Soliciting, advertising or assisting child sexual exploitation, child prostitution or human trafficking',
            'Trying to make an AI Clone generate or say anything listed above',
            'Altering text, voice or images generated by an AI Clone into content that sexualises a child',
            'Assisting or facilitating any of the above',
          ],
        },
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Prohibited whatever the legal classification',
          body: 'Material whose legal treatment may differ, such as drawings or AI-generated content, is prohibited on the Service all the same.',
        },
      ],
    },
    {
      id: 'age',
      heading: 'Age and use by minors',
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Service may be used by people of any age, but minors should obtain the consent of a legal representative, such as a person with parental authority, before using the Service and purchasing paid features. Article 3 of the Terms sets the main age-based conditions as follows ([Terms, Article 3](/en/terms#art-3); [Privacy Policy, Article 14](/en/privacy#art-14)).',
        },
        {
          kind: 'table',
          caption: 'Main conditions by age (Terms, Article 3)',
          columns: ['Age', 'Guardian consent at registration', 'Purchase limit (1st to last day of each month)', 'Paid relationship modes and similar features'],
          rows: [
            ['Under 16', 'The guardian operates the checkbox on the registration screen personally to confirm consent', '¥5,000 (US$35 if priced in U.S. dollars)', 'Not available'],
            ['16 to 17', 'The guardian’s consent is confirmed with a checkbox on the registration screen', '¥10,000 (US$70 if priced in U.S. dollars)', 'Not available'],
            ['18 and over', '—', '—', 'Available'],
          ],
        },
        {
          kind: 'list',
          items: [
            'The paid relationship modes (Tsundere, Best Friend, Romantic Partner and others designated by the Company) and other features designated by the Company may be used only by people aged 18 or over.',
            'The purchase limit covers Coin Passes and Subscriptions combined, counted in Japan time.',
            'A person under 18 who misrepresents their age to use the paid relationship modes breaches the Terms ([Terms, Article 15, item 7](/en/terms#art-15)).',
            'Relationship modes (Romantic Partner, Best Friend, etc.) are a staged experience within the Service. They do not create any real romantic or other relationship between the User and the Creator themselves ([Terms, Article 5](/en/terms#art-5)).',
          ],
        },
      ],
    },
    {
      id: 'how-to-report',
      heading: 'How to report',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'If someone is in danger right now',
          body: 'The Service is not a means of making emergency calls. If a child’s life or safety is at immediate risk, contact the police (110) or an ambulance (119) in Japan, or your local emergency services, before reporting to us.',
        },
        {
          kind: 'steps',
          items: [
            {
              title: 'Report in the app',
              body: 'Content on the Service can be reported to the Company with the reporting feature within the Service ([Terms, Article 16](/en/terms#art-16)). For example, a Story can be reported with the flag icon (Report this story) on the Story screen. If you cannot find a way to report something in the app, or if it involves a child, please also report it by email as described next.',
            },
            {
              title: 'Report by email',
              body: 'Anyone, including people without an account, parents and guardians, and Creators using LC Studio, can report by email to our [child safety contact](#contact). Please include “Child protection” in the subject.',
            },
            {
              title: 'Tell us what you can',
              body: 'As far as you know them, tell us who or what is involved (username, display name, Creator name or AI Clone name), where (chat, call, LIVE stream, Story, etc.), when, and what happened.',
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'important',
          title: 'Do not send the images or videos themselves',
          body: 'Do not save, forward or attach images or videos that sexually depict a child. Doing so may itself break the law. A description of who, where and when is enough for your report.',
        },
        {
          kind: 'paragraph',
          text: 'Illegal material you find outside the Service can also be reported to the [Internet Hotline Center Japan](https://www.internethotline.jp/) or the police (see [Where to get help](#help)).',
        },
      ],
    },
    {
      id: 'how-we-respond',
      heading: 'What we do with a report',
      blocks: [
        {
          kind: 'steps',
          items: [
            {
              title: 'We review it',
              body: 'Staff authorized by the Company review the reported content in accordance with [Article 9 of the Terms](/en/terms#art-9). The date and time of the review, the staff member and the subject are recorded.',
            },
            {
              title: 'We remove content and act on the account',
              body: 'If we confirm a violation, or reasonably determine that there is a risk of one, we delete User Content, restrict features, temporarily suspend use or delete the account, without prior notice ([Terms, Article 18](/en/terms#art-18)).',
            },
            {
              title: 'We keep the records',
              body: 'We keep the records needed to comply with the law, such as to cooperate with investigating authorities, in accordance with the law ([Privacy Policy, Article 11](/en/privacy#art-11)).',
            },
            {
              title: 'We report to the authorities',
              body: 'In accordance with the law, we report to the police (including the cybercrime consultation desks of the prefectural police) and, where appropriate, provide information to the Internet Hotline Center Japan and other relevant bodies. We cooperate with requests based on law, such as inquiries from investigating authorities ([Privacy Policy, Article 7](/en/privacy#art-7)).',
            },
          ],
        },
        {
          kind: 'list',
          items: [
            'The Company may use mechanisms that automatically detect content in User Content and in AI Clone utterances that may fall under the prohibited conduct, and restrict its storage or display. In this automatic detection, the Company’s staff do not view the content ([Terms, Article 9, paragraph 5](/en/terms#art-9)).',
            'The Company may choose not to inform the reporting person individually of the outcome ([Terms, Article 16, paragraph 2](/en/terms#art-16)).',
            'We do not provide a reporting person’s personal information to third parties, including the person reported, except in the cases set out in [Article 7 of the Privacy Policy](/en/privacy#art-7).',
          ],
        },
      ],
    },
    {
      id: 'laws',
      heading: 'Relevant laws in Japan',
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Company complies with Japanese laws for the protection of children and cooperates with the relevant authorities. The main laws are:',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Act on Child Prostitution and Child Pornography',
              definition: 'Formally the “Act on Regulation and Punishment of Acts Relating to Child Prostitution and Child Pornography, and the Protection of Children”. It defines a “child” as anyone under 18 and makes the production, provision and possession of child pornography, among other acts, punishable.',
            },
            {
              term: 'Penal Code (soliciting meetings with children)',
              definition: 'Makes it punishable, among other things, to ask a person under 16 to meet for an obscene purpose, or to ask them to send sexual images.',
            },
            {
              term: 'Act on Youth Internet Environment',
              definition: 'Formally the “Act on Development of an Environment that Provides Safe and Secure Internet Use for Young People”. It asks businesses to keep to a minimum the chances of young people under 18 viewing harmful information.',
            },
          ],
        },
      ],
    },
    {
      id: 'help',
      heading: 'Where to get help',
      blocks: [
        {
          kind: 'paragraph',
          text: 'If you have been harmed, or have seen or heard of harm to a child, please do not deal with it alone. The services below are public bodies or services set up by them in Japan. Most offer support in Japanese.',
        },
        {
          kind: 'table',
          caption: 'Main places to get help in Japan',
          columns: ['Service', 'How to reach it', 'When to use it'],
          rows: [
            ['Police', '110', 'Someone is in danger right now, or a crime is happening'],
            ['Ambulance', '119', 'Someone is injured or ill and needs help immediately'],
            ['Police consultation line', '#9110', 'Not an emergency, but you want to consult the police'],
            ['Sexual crime victim consultation line (police)', '#8103', 'You want to talk about harm from a sexual crime'],
            ['Prefectural police cybercrime consultation desks', '[National Police Agency single contact point](https://www.npa.go.jp/bureau/cyber/soudan.html)', 'You want to consult or report harm online to your local police'],
            ['Internet Hotline Center Japan', '[Website](https://www.internethotline.jp/)', 'You want to report illegal material online, such as child pornography'],
            ['Child guidance centre abuse hotline', '189 (24 hours, every day)', 'A child is being abused, or may be'],
            ['24-hour Children’s SOS Dial (Ministry of Education)', '0120-0-78310', 'A child wants to talk about a worry'],
            ['Children’s Human Rights 110 (Ministry of Justice)', '0120-007-110', 'You want to talk about a child’s human rights'],
          ],
        },
      ],
    },
    {
      id: 'parents',
      heading: 'For parents and guardians',
      blocks: [
        {
          kind: 'list',
          items: [
            'When a person under 18 registers, a checkbox on the registration screen is used to confirm that a guardian (legal representative) has agreed to the Terms and to the contents of Articles 8 and 9, and the date and time are recorded. For a person under 16, the guardian operates the checkbox personally ([Terms, Article 3](/en/terms#art-3)).',
            'Under Article 8 of the Terms, the Creator of an AI Clone a User follows can see the content of chats and the transcripts of calls with that AI Clone. Please check with your child that they do not send information they would not want known ([Terms, Article 8](/en/terms#art-8)).',
            'The personal information of persons under 16 is handled with the consent of a parent or guardian, and the parent or guardian may request that the Company cease using or erase it ([Privacy Policy, Article 14](/en/privacy#art-14)).',
            'A purchase made by a minor without the consent of a legal representative may be rescinded in accordance with law. However, it cannot be rescinded if the minor lied about their age or about a legal representative’s consent and thereby led the Company to believe that they were an adult or had that consent ([Terms, Article 3, paragraph 6](/en/terms#art-3)). Refunds follow each app store’s terms and procedures ([Terms, Article 13](/en/terms#art-13)).',
            'Users can set the Service so that they do not receive reactions from specific other Users. The other User is not notified of this setting ([Terms, Article 16, paragraph 3](/en/terms#art-16)).',
            'To delete an account, see [Delete your account](/en/delete-user).',
          ],
        },
        {
          kind: 'storeLinks',
          body: 'Withdrawing from the Service does not cancel an app store Subscription automatically. Cancel it in the app store ([Terms, Article 19](/en/terms#art-19)).',
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
              q: 'Can I report without an account?',
              a: 'Yes. Anyone can report by email to our [child safety contact](#contact).',
            },
            {
              q: 'Will the person I report find out it was me?',
              a: 'We do not provide a reporting person’s personal information to third parties, including the person reported, except in the cases set out in [Article 7 of the Privacy Policy](/en/privacy#art-7) (such as where required by law).',
            },
            {
              q: 'Will you tell me the outcome?',
              a: 'The Company may choose not to inform the reporting person individually of the outcome ([Terms, Article 16, paragraph 2](/en/terms#art-16)).',
            },
            {
              q: 'Should I send images as evidence?',
              a: 'No. Do not save, forward or attach images or videos that sexually depict a child. A description of who, where and when lets us start our review.',
            },
            {
              q: 'An AI Clone said something inappropriate.',
              a: 'An AI Clone is an AI and is not the Creator themselves ([Terms, Article 5](/en/terms#art-5)). If what it said involves a child, such as anything that sexualises a child, please email our [child safety contact](#contact) with the AI Clone’s name and when it was said.',
            },
            {
              q: 'I am a Creator and saw something worrying in a fan’s messages.',
              a: 'Creators using LC Studio can also report by email to our [child safety contact](#contact). Tell us the fan’s display name or username, when it happened and what you saw.',
            },
          ],
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Child safety contact',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Reports and questions about child safety are handled by the Child Protection Officer of LinClone K.K.',
        },
        {
          kind: 'contact',
          title: 'LinClone K.K., Child Protection Officer',
          body: 'Reports of child sexual abuse or exploitation, and questions about this policy. Please do not attach images or videos.',
          email: 'info@linclone.com',
          subject: '[LinClone] Child protection',
          bodyTemplate: 'Who or what you are reporting (username, display name, Creator or AI Clone name):\nWhere (chat, call, LIVE stream, Story, etc.):\nDate and time:\nWhat happened:\nHow to reach you (if you would like a reply):\n',
          label: 'Report by email',
          note: 'If someone is in danger, contact the police (110 in Japan) first.',
        },
      ],
    },
  ],
  closing: ['LinClone K.K.', 'Soshiso 402, 2-5-10 Yayoi, Bunkyo-ku, Tokyo 113-0032, Japan'],
  related: ['terms', 'privacy', 'support'],
});
