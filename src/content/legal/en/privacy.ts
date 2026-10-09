import { defineLegalDoc } from '../types';

// English translation of the owner-approved Japanese Privacy Policy
// (docs/legal/source/privacy_policy_ja.md; JA page: ../ja/privacy.ts, generated).
// Article by article, with the same section ids, lists, table and closing line as
// the Japanese text. Change it only together with the Japanese source, and keep it a
// translation: no summaries, notes or added obligations. The Japanese version
// prevails (ui.langPrevails, shown on the page).
//
// Glossary (as in the Terms of Service): 当社 the Company · 本サービス the Service ·
// 本ポリシー this Policy · 利用規約 the Terms of Service · ユーザー User ·
// クリエイター Creator · AIクローン AI Clone · やり取り履歴 Interaction History ·
// コイン Coins · コインパス Coin Pass · サブスクリプション Subscription ·
// アプリストア App Store(s) · 投稿等 Posts · 本人 the individual concerned ·
// 個人情報 personal information · 個人データ personal data ·
// 保有個人データ retained personal data · 退会 withdrawal · 育成 Grow (the app's feature name) ·
// トラブル trouble · 紛争 dispute · 保護者 parent or guardian · 禁止事項 prohibited conduct ·
// 個人情報保護法 Act on the Protection of Personal Information (APPI).
export default defineLegalDoc({
  status: 'final',
  meta: {
    title: 'Privacy Policy | LinClone',
    description:
      'LinClone K.K. Privacy Policy: information collected, purposes of use, provision to Creators and third parties abroad, retention, and disclosure requests.',
  },
  title: 'LinClone Privacy Policy',
  lead: 'LinClone K.K. (the “Company”) handles the personal information of users of the application “LinClone” and its related services (the “Service”) as set out below, in accordance with the Act on the Protection of Personal Information (the “APPI”), the Telecommunications Business Act and other laws and regulations. Terms used in this Policy have the meanings defined in the Terms of Service of the Service.',
  establishedDate: '2026-10-09',
  sectionNumbers: false,
  sections: [
    {
      id: 'art-1',
      heading: 'Article 1 (Business Operator Information)',
      blocks: [
        {
          kind: 'list',
          items: [
            'Name: LinClone K.K.',
            'Address: Soshiso 402, 2-5-10 Yayoi, Bunkyo-ku, Tokyo 113-0032, Japan',
            'Representative: Kensei Shiraishi',
          ],
        },
      ],
    },
    {
      id: 'art-2',
      heading: 'Article 2 (Information Collected)',
      blocks: [
        { kind: 'paragraph', text: 'The Company collects the following information.' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Registration information: the email address, name (where provided) and account identifier received through linking a Google account or Apple ID. Where the User has chosen to keep their email address private through Apple ID, the Company receives the relay address issued by Apple.',
            'Profile information: display name, username, profile image, date of birth or age category, language settings, and the record of consent by a parent or guardian (for persons under 18)',
            'Interaction History: chats with AI Clones (text, voice messages and images); the date, time and duration of calls and transcripts of the conversations; records of comments, gifts and viewing in LIVE streams; Stories and reactions to them; posts to Grow; and relationship, form-of-address and memory settings',
            'Purchase information: date and time of purchase, item, amount, the transaction identifier issued by the App Store, and records of the granting, consumption and expiry of Coins. Payment information such as credit card numbers is collected by the App Stores and is not collected by the Company.',
            'Device and log information: device type, OS, app version, IP address, push notification token, information on the occurrence of malfunctions, and logs of use of the Service',
            'The content of inquiries, reports and claims of rights infringement',
          ],
        },
      ],
    },
    {
      id: 'art-3',
      heading: 'Article 3 (Purposes of Use)',
      blocks: [
        { kind: 'paragraph', text: 'The Company uses the information it collects for the following purposes.' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Provision of the Service (account management; provision of chats, calls and LIVE with AI Clones; and the memory function that maintains the context of conversations)',
            'Provision to Creators as set out in Article 5',
            'Management of Coin Passes, Coins and Subscriptions, confirmation of purchases, and prevention of fraudulent purchases',
            'Feature restrictions according to age (including the restriction of paid relationship modes to persons aged 18 or over, and the purchase limits for minors)',
            'Investigation of trouble between Users or between Users and Creators, responding to requests from the individual concerned, investigation of failures, handling of reports and claims of rights infringement, and responses based on laws and regulations',
            'Notices, push notifications, advance notice of Coin expiry, and other communications',
            'Responding to inquiries',
            'Statistics and internal analysis as set out in Article 4, and improvement of the Service and development of new features',
            'Email delivery of campaigns, new features and other announcements',
          ],
        },
        {
          kind: 'paragraph',
          text: 'The emails under item 9 are sent to the registered email address only to persons who agreed at registration to receive them. Delivery can be stopped at any time via the link included in each email. Even after delivery is stopped, the Company will continue to send the notices necessary for using the Service, such as changes to the Terms of Service and purchase confirmations.',
        },
      ],
    },
    {
      id: 'art-4',
      heading: 'Article 4 (Statistics and Internal Analysis)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'The Company processes the information it collects into statistical information that cannot identify individuals and uses it to improve the Service and for business analysis.',
            'What the Company discloses externally is limited to statistical information that cannot identify individuals.',
          ],
        },
      ],
    },
    {
      id: 'art-5',
      heading: 'Article 5 (Provision to Creators)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            {
              text: 'Based on the User’s consent, the Company provides the following information to the Creators of the AI Clones the User follows.',
              ordered: true,
              items: [
                'Display name, username and profile image',
                'The date on which the User started following, and the follow status',
                'The content of chats with that AI Clone',
                'The date, time and duration of calls with that AI Clone, and transcripts of the conversations',
                'Records of comments, gifts and viewing in that Creator’s LIVE streams',
                'Relationship, form-of-address and memory settings for that AI Clone, and posts to Grow',
                'Coin consumption relating to the above',
              ],
            },
            'Creators may view the information in the preceding paragraph (including the content of chats and the transcripts of calls) at any time, for the purpose of interacting with their followers.',
            'Method of provision: viewing in the app for Creators (LC Studio)',
            'Recipients: the Creators of the AI Clones the User follows. Where a Creator’s agency or similar organization jointly manages the Creator’s account, this includes the persons in charge at that agency or organization.',
            'The Company does not provide Creators with email addresses, names or other contact details, or with payment information.',
            'If the User unfollows, any further provision stops.',
          ],
        },
      ],
    },
    {
      id: 'art-6',
      heading: 'Article 6 (Review of Interaction History by the Company)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'What the Company’s staff can ordinarily review is limited to records (logs) of the date, time, duration, type and similar details of interactions.',
            'The Company reviews the content of chats and the transcripts of calls, to the extent necessary, only in the case of the investigation of trouble, a request from the individual concerned, or the investigation of a failure (Article 9 of the Terms of Service). In cases based on a court warrant or otherwise based on laws and regulations, the Company will act in accordance with those laws and regulations.',
            'Staff who may view them are limited to persons authorized by the Company, and the date and time, the staff member and the subject of each viewing are recorded.',
            'What is reviewed is used solely to resolve trouble, respond to the individual concerned, resolve failures and comply with laws and regulations. Where necessary, it is submitted to lawyers engaged by the Company, courts and other public authorities, but it is not disclosed to any other third party, including the other party to a dispute.',
          ],
        },
      ],
    },
    {
      id: 'art-7',
      heading: 'Article 7 (Other Provision to Third Parties)',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Apart from Article 5, the Company does not provide personal data to third parties except in the following cases.',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Where the individual concerned has consented',
            'Where based on laws and regulations (such as court orders, inquiries from investigative authorities and inquiries from bar associations)',
            'Where necessary for the protection of the life, body or property of a person and it is difficult to obtain the consent of the individual concerned',
            'Where provided in connection with the succession of a business as a result of a merger, business transfer or other reason',
          ],
        },
      ],
    },
    {
      id: 'art-8',
      heading: 'Article 8 (Outsourcing)',
      blocks: [
        {
          kind: 'paragraph',
          text: 'To the extent necessary to achieve the purposes of use, the Company may outsource the following operations to external parties and entrust personal data to them. The Company enters into contracts with its contractors and supervises them appropriately.',
        },
        {
          kind: 'list',
          items: [
            'Storage of data on cloud servers',
            'Generation of AI Clone responses, and voice synthesis and recognition',
            'Delivery of push notifications, and email delivery',
            'Analysis of app malfunctions',
            'Development and maintenance of the Service',
            'Handling of inquiries',
          ],
        },
      ],
    },
    {
      id: 'art-9',
      heading: 'Article 9 (Provision to Third Parties in Foreign Countries, etc.)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'The Company stores the Service’s data on the cloud service provided by Amazon Web Services Japan G.K. (Amazon Web Services; “AWS”). The generation of AI Clone responses and voice synthesis and recognition are processed by outsourcing them to external AI providers.',
          ],
        },
        {
          kind: 'table',
          columns: ['Processing', 'Country where the provider is located', 'Country where data is processed and stored'],
          rows: [
            ['Data storage (AWS)', 'Japan (parent company: Amazon Web Services, Inc., United States)', 'Japan (Tokyo Region)'],
            ['Generation of AI Clone responses, voice synthesis and recognition', 'United States, etc.', 'United States, etc.'],
          ],
        },
        {
          kind: 'list',
          ordered: true,
          start: 2,
          items: [
            'The Company uses AWS for storage under contractual terms under which AWS does not handle the content of the stored data, and manages it as the Company’s own security control measures (Article 12).',
            'AI processing is carried out as outsourcing to third parties in foreign countries; the Company has its contractors take, by contract, measures consistent with the purpose of the APPI, and the processing is carried out with consent obtained on the consent screen at registration.',
            'The United States has no comprehensive federal law equivalent to Japan’s APPI; personal information is protected by state laws and sector-specific laws. The systems of each country can be checked in the Personal Information Protection Commission’s “Survey on Systems, etc. for the Protection of Personal Information in Foreign Countries.”',
          ],
        },
      ],
    },
    {
      id: 'art-10',
      heading: 'Article 10 (External Transmission)',
      blocks: [
        {
          kind: 'paragraph',
          text: 'At present, the Service does not incorporate any tool that transmits information from Users’ devices to external businesses for usage analysis or advertising. If such a tool is introduced in the future, the Company will revise this Policy in advance and publish the information transmitted, the recipients and the purposes of use.',
        },
      ],
    },
    {
      id: 'art-11',
      heading: 'Article 11 (Retention Periods)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'Interaction History is retained while the account exists and, after the User withdraws from the Service, is retained for one year and then deleted. While retained after such withdrawal, it is used solely for the investigation of trouble and compliance with laws and regulations.',
            'Purchase records are retained for the period prescribed by laws and regulations.',
            'Records of viewing of Interaction History are retained until the Interaction History concerned is deleted.',
          ],
        },
      ],
    },
    {
      id: 'art-12',
      heading: 'Article 12 (Security Control Measures)',
      blocks: [
        {
          kind: 'paragraph',
          text: 'To prevent leakage and other incidents involving personal data, the Company has taken the following measures.',
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Formulation of a basic policy: The Company has established and published this Policy.',
            'Establishment of rules: The handling of personal data at each stage of collection, use, storage, provision and deletion is set out in internal rules.',
            'Organizational measures: The Company has appointed a personal information protection manager and established a system for reporting leakage and other incidents.',
            'Human measures: The Company imposes confidentiality obligations on its employees and contractors and provides regular training.',
            'Physical measures: The Company has taken measures to prevent the theft and loss of devices that handle personal data.',
            'Technical measures: The Company manages access rights, encrypts communications and stored data, records viewing, and monitors for unauthorized access.',
            'Understanding the external environment: The Company has taken the measures in Article 9 based on an understanding of the personal information protection system of the foreign country (the United States) in which personal data is handled.',
          ],
        },
      ],
    },
    {
      id: 'art-13',
      heading: 'Article 13 (Requests for Disclosure, etc.)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'Users may request that the Company notify them of the purposes of use of retained personal data; to disclose it (including disclosure by electromagnetic record); to correct, add to or delete it; to cease using or erase it; to cease providing it to third parties; and to disclose the records of its provision to third parties.',
            'Requests are accepted at the contact point in Article 17. After verifying the identity of the individual concerned, the Company will respond without delay in accordance with laws and regulations.',
          ],
        },
      ],
    },
    {
      id: 'art-14',
      heading: 'Article 14 (Minors)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'The Service may be used regardless of age, but minors should use it only after obtaining the consent of their legal representative.',
            'When a person under 18 registers, the Company confirms the consent of a parent or guardian (legal representative) by means of a checkbox and records the date and time. The personal information of persons under 16 is handled with the consent of a parent or guardian, and the parent or guardian may request that the Company cease using or erase that personal information.',
          ],
        },
      ],
    },
    {
      id: 'art-15',
      heading: 'Article 15 (Automated Processing by AI)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'The Company may use AI to determine automatically whether Posts or the utterances of AI Clones contain content that constitutes prohibited conduct. Depending on the result, the Company may restrict their storage or display.',
            'The Company uses Interaction History to maintain the context of conversations with the AI Clone concerned, and does not use it for AI model training beyond that purpose.',
          ],
        },
      ],
    },
    {
      id: 'art-16',
      heading: 'Article 16 (Revisions)',
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Company will revise this Policy in response to amendments to laws and regulations or changes to the Service. Material revisions will be notified within the Service before their effective date. Revisions that expand the scope of Article 5 or Article 6 will be made after obtaining consent anew.',
        },
      ],
    },
    {
      id: 'art-17',
      heading: 'Article 17 (Contact Point)',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Inquiries regarding the handling of personal information, and requests for disclosure, etc., are accepted at the following contact points.',
        },
        {
          kind: 'list',
          items: [
            'The inquiry form within the Service',
            'By post: Personal Information Inquiries, LinClone K.K., Soshiso 402, 2-5-10 Yayoi, Bunkyo-ku, Tokyo 113-0032, Japan',
          ],
        },
      ],
    },
  ],
  closing: ['Established: October 9, 2026'],
  related: ['terms', 'cookies', 'childProtection', 'deleteUser', 'support'],
});
