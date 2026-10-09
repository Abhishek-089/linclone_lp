import { defineLegalDoc } from '../types';

// English translation of the owner-approved Japanese Terms of Service
// (docs/legal/source/terms_of_service_ja.md; JA page: ../ja/terms.ts, generated).
// Article by article, with the same section ids, lists and closing lines as the
// Japanese page. Do not add, drop or reword obligations here: change the Japanese
// source first (with the owner's approval), then mirror the change in this file.
// Article 29 itself provides that the Japanese version prevails.
export default defineLegalDoc({
  status: 'final',
  meta: {
    title: 'Terms of Service | LinClone',
    description:
      'Terms of Service for the LinClone app by LinClone K.K.: AI Clones, Coins, Subscriptions, sharing information with Creators, prohibited conduct, withdrawal.',
  },
  title: 'LinClone Terms of Service',
  lead: 'These Terms of Service (“these Terms”) set out the conditions for using the application “LinClone” and the services related to it (the “Service”) provided by LinClone K.K. (the “Company”). Anyone using the Service should do so after agreeing to these Terms.',
  establishedDate: '2026-10-09',
  sectionNumbers: false,
  sections: [
    {
      id: 'art-1',
      heading: 'Article 1 (Definitions)',
      blocks: [
        { kind: 'paragraph', text: 'The terms used in these Terms have the following meanings.' },
        {
          kind: 'list',
          ordered: true,
          items: [
            '“User” means an individual who has agreed to these Terms and uses the Service as a follower.',
            '“Creator” means an individual who has entered into a separate contract with the Company and publishes their own AI Clone on the Service. Where a Creator’s account is jointly managed by the agency or similar organization to which the Creator belongs, “Creator” includes that agency or organization.',
            '“AI Clone” means a conversational AI modeled on a Creator, built by the Company using generative AI technology on the basis of information, voice recordings and other materials provided by the Creator.',
            '“Interaction History” means chats with AI Clones (including text, voice messages and images), calls (including AI Calls and Morning Calls), comments, Gifts and viewing in LIVE streams, Stories, posts to Grow, relationship, nickname and memory settings, and other records of a User’s activity on the Service.',
            '“Coins” means the unit that expresses, as a number of coins, the amount of the Service’s paid features and digital content that can be used. Coins are divided into Paid Coins and Free Coins.',
            '“Paid Coins” means Coins granted through the purchase of a Coin Pass or as a benefit of a Subscription.',
            '“Coin Pass” means a fixed-term right of use, which does not renew automatically, that allows the use of paid features up to the number of coins displayed, for six months from the date of purchase.',
            '“Free Coins” means Coins granted free of charge through login bonuses, quests, invitations, campaigns or otherwise.',
            '“Subscription” means an automatically renewing paid plan under which the payment of a monthly fee entitles the User to benefits specified by the Company.',
            '“LIVE Ticket” means a right granted by the Company to view a LIVE stream.',
            '“App Stores” means the App Store operated by Apple Inc., Google Play operated by Google LLC, and any other app distribution provider designated by the Company.',
            '“User Content” means text, audio, images and other information that a User sends, posts or enters on the Service.',
          ],
        },
      ],
    },
    {
      id: 'art-2',
      heading: 'Article 2 (Agreement to and Application of these Terms)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'These Terms apply to all relationships between the Company and Users concerning the use of the Service.',
            'When a User agrees to these Terms through the prescribed registration procedure, a usage agreement whose terms are these Terms is formed between the User and the Company.',
            'The guidelines, purchase-screen notices, Privacy Policy and other individual provisions that the Company posts on the Service form part of these Terms. Where these Terms and an individual provision differ, the individual provision prevails.',
            'Separately from agreeing to these Terms, Users must give individual consent to Article 8 (Sharing of Information with Creators) and Article 9 (Review of Interaction History by the Company) on the consent screen at registration. Users who do not consent to them cannot use the features for interacting with AI Clones.',
          ],
        },
      ],
    },
    {
      id: 'art-3',
      heading: 'Article 3 (Age; Use by Minors)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'The Service may be used by persons of any age. However, the paid relationship modes (Tsundere, Best Friend, Romantic Partner and others designated by the Company) and other features designated by the Company may be used only by persons aged 18 or over.',
            'Minors should obtain the consent of a legal representative, such as a person with parental authority, before using the Service and purchasing paid features.',
            'When a person under 18 registers, a checkbox on the registration screen is used to confirm that a guardian (legal representative) has agreed to these Terms and to the contents of Articles 8 and 9, and the Company records the date and time of that confirmation. For a person under 16, the guardian shall operate the checkbox personally.',
            'A guardian who has given consent under the preceding paragraph is also deemed to have agreed to these Terms.',
            {
              text: 'Purchases by a minor (Coin Passes and Subscriptions combined) are limited, per month running from the 1st to the last day of each month in Japan time, to the following amounts.',
              ordered: true,
              items: ['Under 16: ¥5,000 (US$35 if priced in U.S. dollars)', '16 or over and under 18: ¥10,000 (US$70 if priced in U.S. dollars)'],
            },
            'A purchase made by a minor without the consent of a legal representative may be rescinded in accordance with law. However, it cannot be rescinded if the minor lied about their age or about the consent of a legal representative and thereby led the Company to believe that they were an adult or a person who had obtained such consent.',
          ],
        },
      ],
    },
    {
      id: 'art-4',
      heading: 'Article 4 (Accounts)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'Users register using an external account designated by the Company (a Google Account or an Apple ID).',
            'Users shall register their display name, username, date of birth and other registration information truthfully and accurately, and shall promptly update it if it changes.',
            'An account belongs exclusively to the User personally and may not be transferred or lent to a third party, bought or sold, or inherited.',
            'Coins, LIVE Tickets, Interaction History and other data are managed in association with the account. Users who change their device or operating system can continue to use them by logging in with the same external account. If the link to the external account is lost, it may not be possible to carry the data over.',
            'Users shall manage their accounts and devices at their own responsibility. Unless the Company has acted intentionally or negligently, the Company will deem any operation performed with the registered authentication credentials to be an operation performed by the User personally.',
          ],
        },
      ],
    },
    {
      id: 'art-5',
      heading: 'Article 5 (Important Matters Concerning AI Clones)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'An AI Clone is an AI and is not the Creator themselves. What an AI Clone says is produced automatically by generative AI and is not a statement, opinion or promise of the Creator themselves.',
            'What an AI Clone says is generated primarily on the basis of information provided by the Creator, while also drawing on information on the web and other sources, and may therefore contain inaccurate or inappropriate content.',
            'Users should not use what an AI Clone says as medical, legal, financial or other professional advice.',
            'Relationship modes (Romantic Partner, Best Friend, etc.) are a staged experience within the Service. They do not create any real romantic or other relationship between the User and the Creator themselves.',
            'The Company does not guarantee the words and conduct of the Creator themselves, the continuation of the Creator’s activities, or the continued publication of an AI Clone.',
            'The Service is not a means of making emergency calls, and the Company does not provide medical or counseling services. Depending on the content of a conversation, an AI Clone may provide information such as helplines and support services. If there is an imminent danger to life or body, please contact the police (110), an ambulance (119) or another specialized organization.',
          ],
        },
      ],
    },
    {
      id: 'art-6',
      heading: 'Article 6 (Fees and Payment)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'The prices of Coin Passes and Subscriptions are the latest prices (including consumption tax) shown on the Coin Wallet screen, the Subscription screen and the purchase confirmation screen.',
            'Coin Passes and Subscriptions can currently be purchased only through in-app purchase on the App Stores. Payment is subject to the terms of the relevant App Store.',
            'The Company may revise its prices. A revision does not apply to Coin Passes purchased, or Subscription periods paid for, before the revision.',
          ],
        },
      ],
    },
    {
      id: 'art-7',
      heading: 'Article 7 (Coins)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'The Company distinguishes between Paid Coins and Free Coins, and displays and manages them on the balance screen.',
            {
              text: 'Paid Coins may be used only within the following periods. Paid Coins whose period has passed expire unused and can no longer be used.',
              ordered: true,
              items: ['Paid Coins granted through a Coin Pass: six months from the date of purchase of the Coin Pass', 'Paid Coins granted as a Subscription benefit: six months from the date of grant'],
            },
            'Free Coins may be used only for 30 days from the date of grant. Free Coins whose period has passed expire.',
            'The Company displays the validity period (six months) and the number of coins to be granted on the Coin Pass purchase screen before purchase. The remaining period of each coin can be checked on the Coin Wallet screen, and the Company sends notifications one month and one week before Paid Coins expire.',
            'Coins are consumed starting with those whose expiry date is soonest, regardless of whether they are Paid Coins or Free Coins. Where the expiry dates are the same, Free Coins are consumed first.',
            'Consumption of Free Coins is limited to 200 coins per day. Once the limit has been reached, Paid Coins are consumed.',
            'Coins may be used only for the features and content within the Service designated by the Company, and cannot be exchanged for cash, points of other services or the like. Coins and Coin Passes also cannot be transferred, lent, bought or sold, or moved to another account.',
            'Coins are not refunded, except where a refund is required by law.',
            'If the Company’s system processing for a feature on which Coins were consumed is not completed (for example, if an image fails to generate), the Company will return the Coins consumed.',
            'In the event of withdrawal or account deletion under Article 18, unused Coins are forfeited.',
          ],
        },
      ],
    },
    {
      id: 'art-8',
      heading: 'Article 8 (Sharing of Information with Creators)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            {
              text: 'When a User follows an AI Clone, the Company provides the following information to the Creator of that AI Clone, or makes it available for the Creator to view. Users shall give their consent to this on the consent screen at registration.',
              ordered: true,
              items: [
                'Display name, username and profile image',
                'The date on which the follow began, and the follow status',
                'The content of chats with that AI Clone (text, voice messages and images)',
                'The date, time and duration of calls with that AI Clone, and transcripts of the conversations',
                'Records of comments, Gifts and viewing in that Creator’s LIVE streams',
                'Relationship, nickname and memory settings for that AI Clone, and posts to Grow',
                'Coin consumption relating to the above',
              ],
            },
            'Creators may view the information in the preceding paragraph (including chat content and call transcripts) at any time for the purpose of interacting with their followers.',
            'The Company does not provide Users’ email addresses, real names or other contact details, or information relating to payments, to Creators.',
            'In its contracts with Creators, the Company obliges them to use the information they receive only for interacting with followers and improving the AI Clone, and not to disclose it to third parties.',
            'With the understanding that the content of their interactions reaches the Creator themselves, Users should take care not to send other people’s personal information or information they do not want others to know.',
            'If a User unfollows an AI Clone, the Company stops sharing from that point on. Information shared before the unfollow may remain in the Creator’s hands and not be deleted.',
          ],
        },
      ],
    },
    {
      id: 'art-9',
      heading: 'Article 9 (Review of Interaction History by the Company)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'The Company stores Interaction History (including chat content and call transcripts) on its servers.',
            'What the Company’s staff can normally see is limited to the date and time, duration and type of interactions, Coin consumption and other records (logs). Chat content, call transcripts and other content of interactions are reviewed only in the cases set out in the next paragraph.',
            {
              text: 'The Company reviews the content of interactions, to the extent necessary, only where any of the following applies. Users shall give their consent to this on the consent screen at registration.',
              ordered: true,
              items: [
                'Investigation of trouble: where a complaint or report has been made concerning trouble between Users, or between a User and a Creator',
                'User’s request: where a User requests a review of their own interactions',
                'Investigation of failures: where necessary to investigate the cause of a defect or failure of the Service',
              ],
            },
            'Notwithstanding the preceding paragraph, where a court warrant or another legal basis applies, the Company will act as the law provides.',
            'The Company may use mechanisms that automatically detect content in User Content and in AI Clone utterances that may fall under the prohibited conduct, and restrict its storage or display. In this automatic detection, the Company’s staff do not view the content.',
            'Reviews under Paragraph 3 are carried out only by staff authorized by the Company, and the date and time of viewing, the staff member and the subject are recorded.',
            'The Company uses the content it reviews only for resolving trouble, responding to the User, resolving failures and complying with law. Where necessary, the Company may submit such content to attorneys it engages, to courts or to other public authorities, but will not disclose it to any other third party (including the opposing party in a dispute).',
          ],
        },
      ],
    },
    {
      id: 'art-10',
      heading: 'Article 10 (Rights in User Content)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'Copyright in User Content is retained by the User or the legitimate rights holder.',
            'Users grant the Company a free, non-exclusive license to use User Content (including to reproduce, adapt and transmit it to the public) to the extent necessary to provide and improve the Service, to generate AI Clone responses and to promote the Service. Posts adopted into Grow continue to be used as information for the AI Clone concerned.',
            'Users will not exercise moral rights of authors in User Content against the Company or persons licensed by the Company.',
            'Rights in text, audio and images generated by AI Clones belong to the Company or the Creator. Users may use them privately within the Service and to the extent permitted by Article 11.',
            'The Company uses Interaction History to maintain (remember) the context of conversations with the AI Clone concerned, and does not use it for any other AI model training.',
            'Whether to adopt suggestions for Grow and other opinions or proposals concerning the Service (“Suggestions”) is decided by the Creator and the Company. Even if a Suggestion is adopted, the User cannot claim payment, attribution (credit) or any other return.',
            'Users must not include third parties’ personal information, or information that infringes third parties’ rights, in Suggestions.',
          ],
        },
      ],
    },
    {
      id: 'art-11',
      heading: 'Article 11 (Posting AI-Generated Content Outside the Service)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'Only where the Creator permits it, Users may post screen recordings of LIVE streams, images of chat screens, AI Clone voices and other content generated by AI on the Service (“AI-Generated Content”) to their own social media accounts.',
            {
              text: 'When posting, Users shall observe the following conditions.',
              ordered: true,
              items: [
                'State clearly that the content was generated by AI',
                'Do not remove, alter or conceal the watermark displayed by the Service',
                'Do not make edits that could lead others to mistake the content for statements of the Creator themselves, or edits that damage the reputation or credibility of the Creator or the Company',
                'Follow the labeling rules for AI-generated content set by the service on which the content is posted',
                'For posts that involve monetization, follow the official clip program separately established by the Company',
              ],
            },
            'If the Company or the Creator so requests, the User shall promptly delete the post.',
          ],
        },
      ],
    },
    {
      id: 'art-12',
      heading: 'Article 12 (Subscriptions)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'Plan types, fees and benefits are shown on the Subscription screen and the purchase confirmation screen.',
            'Unless the User cancels through the relevant App Store before the end of the period, a Subscription renews automatically on the same terms. Cancellation is made from the subscription management screen of each App Store.',
            'A change to a higher plan takes effect immediately, and the benefits of the new plan are granted. A change to a lower plan takes effect from the next renewal date.',
            'The benefits of the same plan are granted only once every 30 days.',
            'Even after cancellation, the benefits can be used until the end of the period already paid for. No prorated refunds are made for part of a period.',
            'Paid Coins and LIVE Tickets granted as benefits are each valid for six months from the date of grant.',
            'Even after a Subscription has been cancelled, Paid Coins and LIVE Tickets within their validity period can still be used.',
            'If the Company changes the content of the benefits, it will give notice on the Service at least 30 days before the change.',
          ],
        },
      ],
    },
    {
      id: 'art-13',
      heading: 'Article 13 (Cancellations and Refunds)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'Cancellations and refunds of Coin Passes and Subscriptions are subject to the terms and procedures of each App Store. The Company has no authority to reverse App Store payments.',
            'If the Company is unable to provide a paid feature for reasons attributable to the Company, the Company will grant an equivalent amount of Coins or take other measures.',
            'The preceding two paragraphs do not limit Users’ rights under law (including rescission by minors).',
            'If an App Store issues a refund, the Company will revoke the Coins and benefits granted through the refunded purchase. As a result of the revocation, the Coin balance may become negative.',
          ],
        },
      ],
    },
    {
      id: 'art-14',
      heading: 'Article 14 (Gifts)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'A Gift is a digital item that a User obtains from the Company by consuming Coins and displays in LIVE streams and elsewhere.',
            'A Gift does not send money or other property from the User to the Creator. The Company pays remuneration to Creators at its own expense under its contracts with them.',
            'Once a Gift has been sent, it cannot be cancelled and the Coins cannot be returned.',
          ],
        },
      ],
    },
    {
      id: 'art-15',
      heading: 'Article 15 (Prohibited Conduct)',
      blocks: [
        { kind: 'paragraph', text: 'In using the Service, Users must not engage in any of the following conduct.' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Conduct that violates laws or regulations or public order and morals, or conduct related to crime',
            'Conduct that infringes the copyright, portrait rights, privacy, reputation or other rights of the Company, Creators, other Users or other third parties',
            'Stalking the Creator themselves, prying into their whereabouts, forcing contact outside the Service, or other harassing conduct',
            'Presenting what an AI Clone says to third parties as if it were a statement of the Creator themselves',
            'Replicating a voice or appearance from an AI Clone’s voice or images, altering AI-Generated Content for sexual or defamatory purposes, or otherwise misusing AI-Generated Content',
            'Entering input intended to make an AI Clone say something illegal or harmful, or attempting to circumvent the off-limits (NG) topics set by the Creator',
            'Use of the paid relationship modes by a person under 18 who misrepresents their age',
            'Posting or otherwise submitting sexually explicit expression, child sexual exploitation, violence, discrimination, or expression that induces or promotes self-harm or suicide',
            'Posting or otherwise submitting another person’s personal information',
            'Impersonating the Company, a Creator or a third party',
            'Exchanging Coins, Coin Passes, accounts, benefits or other rights on the Service for cash or other economic benefits',
            'Creating or holding multiple accounts for wrongful purposes, or using the Service by bots or other automated means',
            'Reverse engineering or scraping the Service, or collecting AI Clone output in bulk and using it to train other AI',
            'Intentionally exploiting defects in the Service',
            'Conduct aimed at meeting people or dating, or sales, advertising or solicitation',
            'Providing benefits to antisocial forces',
            'Placing an excessive load on the Company’s servers or network, or other conduct that interferes with the operation of the Service',
            'Assisting or facilitating any of the foregoing',
            'Any other conduct that the Company determines, on reasonable grounds, to be inappropriate',
          ],
        },
      ],
    },
    {
      id: 'art-16',
      heading: 'Article 16 (Reports, Muting and Inquiries)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'Users may use the reporting feature within the Service to report to the Company inappropriate statements by AI Clones, comments in LIVE streams, reactions to Stories and other content that may violate these Terms.',
            'The Company reviews reported content in accordance with Article 9 and, where necessary, takes the measures under Article 18. The Company may choose not to inform the reporting User individually of the outcome.',
            'Users can set the Service so that they do not receive reactions from specific other Users. The other User is not notified of this setting.',
            'Inquiries about the Service are accepted through the inquiry form within the Service.',
          ],
        },
      ],
    },
    {
      id: 'art-17',
      heading: 'Article 17 (Claims of Rights Infringement)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            {
              text: 'Anyone who believes that content on the Service (including User Content, AI-Generated Content and clips posted to social media) has infringed their copyright, portrait rights, privacy or other rights may request deletion or other action, through the inquiry form within the Service or in writing, by stating the following.',
              ordered: true,
              items: ['The claimant’s name and contact details', 'The right claimed to have been infringed, and the reasons', 'Information sufficient to identify the content in question'],
            },
            'On receiving a claim, the Company reviews the content in question (reviews of non-public interactions are governed by Article 9) and, where necessary, takes measures such as deletion or suspension of publication. As part of the review, the Company may ask the User who posted the content for their opinion.',
            'The Company may take the measures under Article 18 against Users who repeatedly infringe rights.',
          ],
        },
      ],
    },
    {
      id: 'art-18',
      heading: 'Article 18 (Suspension of Use, etc.)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'If a User violates Article 15, or if the Company reasonably determines that there is a risk of such a violation, the Company may, without prior notice, delete User Content, restrict features, temporarily suspend use, or delete the account.',
            'If an account is deleted through a measure under the preceding paragraph, unused Coins and benefits are forfeited. However, this does not apply where the deletion is due to the Company’s intent or negligence.',
          ],
        },
      ],
    },
    {
      id: 'art-19',
      heading: 'Article 19 (Withdrawal)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'Users may withdraw at any time through the procedure prescribed by the Company.',
            'Upon withdrawal, unused Coins, LIVE Tickets and benefits are forfeited.',
            'Withdrawal does not automatically cancel a Subscription purchased through an App Store. To stop being charged, please cancel it through the relevant App Store.',
            'The Company stores Interaction History for one year after withdrawal and then deletes it. Interaction History being stored is used only for the investigation of trouble under Article 9, Paragraph 3, Item 1 and for compliance with law.',
            'Other handling of personal information after withdrawal is governed by the Privacy Policy.',
          ],
        },
      ],
    },
    {
      id: 'art-20',
      heading: 'Article 20 (Change, Interruption and Termination of the Service)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'The Company may temporarily interrupt all or part of the Service due to maintenance, failures, natural disasters or other unavoidable reasons.',
            'If a Creator stops publishing their AI Clone, Users will no longer be able to interact with that AI Clone. Even in that case, Subscriptions, and Coins that are within their validity period, can continue to be used to interact with other AI Clones.',
            'If the Company terminates the Service in its entirety, it will give notice on the Service at least 30 days before the termination date, and will stop selling Coin Passes at the same time as the notice. Unused Paid Coins will be handled in accordance with law.',
          ],
        },
      ],
    },
    {
      id: 'art-21',
      heading: 'Article 21 (Notices)',
      blocks: [
        { kind: 'paragraph', text: 'Notices from the Company to Users are given by display on the Service, by push notification, or by sending them to the registered email address.' },
      ],
    },
    {
      id: 'art-22',
      heading: 'Article 22 (Liability of the Company)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            'If a User suffers damage due to the Company’s non-performance of obligations or tort, the Company will compensate for it in accordance with this Article.',
            'Except where the Company has acted intentionally or with gross negligence, the damages the Company compensates are limited to direct damages that would ordinarily arise, and the amount is capped at the total amount the User paid to the Company during the 12 months going back from the date on which the event that caused the damage occurred.',
            'The Company does not guarantee the accuracy, completeness or fitness for a particular purpose of what AI Clones say.',
            'Disputes between Users, or between a User and a Creator, are in principle to be resolved between the parties. The Company will endeavor to carry out the investigation and provide the cooperation needed to resolve the dispute, in accordance with Article 9.',
          ],
        },
      ],
    },
    {
      id: 'art-23',
      heading: 'Article 23 (Exclusion of Antisocial Forces)',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Users represent and warrant that they do not fall under organized crime groups (boryokudan) or other antisocial forces, and that they will not do so in the future. In the event of a breach of this representation and warranty, the Company may immediately terminate the usage agreement.',
        },
      ],
    },
    {
      id: 'art-24',
      heading: 'Article 24 (Liability of Users)',
      blocks: [
        { kind: 'paragraph', text: 'If a User violates these Terms and causes damage to the Company, the User shall compensate the Company for that damage.' },
      ],
    },
    {
      id: 'art-25',
      heading: 'Article 25 (Assignment of Contractual Position)',
      blocks: [
        {
          kind: 'paragraph',
          text: 'If the Company transfers the business relating to the Service to a third party, the Company may have that third party succeed to its position under the usage agreement, its rights and obligations, and Users’ information. Users shall consent to this in advance.',
        },
      ],
    },
    {
      id: 'art-26',
      heading: 'Article 26 (Changes to these Terms)',
      blocks: [
        {
          kind: 'list',
          ordered: true,
          items: [
            {
              text: 'The Company may change these Terms under Article 548-4 of the Civil Code where any of the following applies.',
              ordered: true,
              items: [
                'The change conforms to the general interests of Users',
                'The change does not run counter to the purpose of the agreement and is reasonable in light of the necessity of the change, the appropriateness of the content after the change and other circumstances',
              ],
            },
            'The Company will make the amended content and its effective date known on the Service at least 14 days before the effective date. Changes that are disadvantageous to Users will be notified to them individually, such as by a notice shown when the app is launched.',
            'A change that expands the scope of Articles 8 and 9 will be made upon obtaining individual consent anew.',
          ],
        },
      ],
    },
    {
      id: 'art-27',
      heading: 'Article 27 (Severability)',
      blocks: [
        { kind: 'paragraph', text: 'Even if any part of these Terms is held invalid under law, the remaining parts continue in effect.' },
      ],
    },
    {
      id: 'art-28',
      heading: 'Article 28 (Governing Law and Jurisdiction)',
      blocks: [
        {
          kind: 'paragraph',
          text: 'These Terms are governed by the laws of Japan. If a dispute arises between the Company and a User in connection with the Service, the Tokyo District Court shall have exclusive agreed jurisdiction as the court of first instance.',
        },
      ],
    },
    {
      id: 'art-29',
      heading: 'Article 29 (Language)',
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Japanese version of these Terms is the authoritative text. If an English or other translated version differs from it in content, the Japanese version prevails.',
        },
      ],
    },
  ],
  closing: ['Established: October 9, 2026', 'LinClone K.K.', 'Soshiso 402, 2-5-10 Yayoi, Bunkyo-ku, Tokyo 113-0032, Japan'],
  related: ['privacy', 'cookies', 'childProtection', 'support'],
});
