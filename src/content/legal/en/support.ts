import { defineLegalDoc } from '../types';

// Support page (/en/support). Covers the fan app "LinClone" only. English
// equivalent of ja/support.ts (the Japanese version prevails). Facts come from
// the Terms of Service and Privacy Policy (LinClone K.K., established
// 2026-10-09) and the shipped app (v1.3.46); screen names follow the app's
// English labels.
export default defineLegalDoc({
  status: 'final',
  meta: {
    title: 'Support and contact | LinClone',
    description:
      'LinClone app help and contact: sign-in, coins, cancelling and refunding subscriptions, calls and morning calls, LIVE, reporting and account deletion.',
  },
  eyebrow: 'Support',
  title: 'How can we help?',
  lead: 'Answers to common questions about the LinClone app, and how to reach us. If this page does not solve it, [email us](#contact).',
  lastUpdated: '2026-10-09',
  quickActions: [
    { icon: 'mail', title: 'Contact us', body: 'Email the team', href: '#contact' },
    { icon: 'person_remove', title: 'Delete your account', body: 'Steps and what happens', href: '/en/delete-user' },
    { icon: 'autorenew', title: 'Subscriptions', body: 'Cancel, refund, restore', href: '#subscriptions' },
    { icon: 'flag', title: 'Report a safety concern', body: 'Tell us about harmful content', href: '#safety' },
  ],
  sections: [
    {
      id: 'about',
      heading: 'LinClone and AI Clones',
      blocks: [
        {
          kind: 'callout',
          tone: 'important',
          title: 'An AI Clone is not the creator',
          body: [
            'What an AI Clone says is generated automatically by generative AI. It is not a statement, opinion or promise of the creator, and it may be inaccurate. Do not use it as medical, legal, financial or other professional advice ([Terms, Article 5](/en/terms#art-5)).',
          ],
        },
        {
          kind: 'faq',
          items: [
            {
              q: 'What is LinClone?',
              a: 'An app where you chat, call and watch LIVE shows with creators’ official AI Clones. An AI Clone is a conversational AI modelled on a creator, built by LinClone K.K. with generative AI from information, voice and other material the creator provided ([Terms, Article 1](/en/terms#art-1)).',
            },
            {
              q: 'What are relationship modes (partner, best friend and so on)?',
              a: 'They are part of the in-app experience. They do not create a real relationship of any kind with the creator ([Terms, Article 5(4)](/en/terms#art-5)). Paid relationship modes are only for people aged 18 or over ([Terms, Article 3](/en/terms#art-3)).',
            },
            {
              q: 'Who can see my conversations with an AI Clone?',
              a: 'The creator of an AI Clone you follow can read, at any time, your chats with that AI Clone, the date, time, length and transcript of your calls, your LIVE comments and gifts, and your relationship, nickname and memory settings, among other things ([Terms, Article 8](/en/terms#art-8)). Your email address, name, other contact details and payment information are not given to creators. LinClone staff look at the content of your interactions only in limited cases, such as investigating trouble, a request from you, or investigating a fault ([Terms, Article 9](/en/terms#art-9)).',
            },
            {
              q: 'Can other users see anything?',
              a: 'Your display name and profile picture are shown with your LIVE comments and gifts, and your display name, username and profile picture with Stories you post, and other users can see them. Other users can also see LIVE comments in the show’s archive. Please do not send other people’s personal information, or anything you would not want known.',
            },
            {
              q: 'Are my conversations used to train AI?',
              a: 'Your Interaction History is used to keep the context of your conversations with that AI Clone (its memory), and not to train any other AI model ([Terms, Article 10(5)](/en/terms#art-10)).',
            },
          ],
        },
      ],
    },
    {
      id: 'account',
      heading: 'Account and sign-in',
      blocks: [
        {
          kind: 'table',
          caption: 'Ways to sign in',
          columns: ['Method', 'iPhone, iPad', 'Android'],
          rows: [
            ['Google account', 'Available', 'Available'],
            ['Apple ID (Sign in with Apple)', 'Available', 'Not currently available'],
            ['Passkey (Face ID, fingerprint)', 'Available once set up', 'Not currently available'],
          ],
        },
        {
          kind: 'faq',
          items: [
            {
              q: 'I cannot sign in',
              a: 'Sign in the same way you signed up (Google account or Apple ID), and choose the same account. If you choose a different account, it may be registered as a separate LinClone account. Sign in with Apple is not currently available in the Android app. If you registered with an Apple ID and want to use your account on Android, [contact us](#contact).',
            },
            {
              q: 'Will my coins and data move to a new phone?',
              a: 'Coins, LIVE Tickets, Interaction History and other data are managed with your account. On a new device, sign in with the same Google account or Apple ID to keep using them. If the link to your external account is lost, your data may not carry over ([Terms, Article 4(4)](/en/terms#art-4)).',
            },
            {
              q: 'I want to sign in with Face ID or a fingerprint (iPhone)',
              a: 'Go to My Page → Settings (the gear at the top right) → Privacy & safety → Security & passkeys, and turn on Biometric passkey. From then on you can sign in with Face ID or a fingerprint.',
            },
            {
              q: 'How do I change my display name or username?',
              a: 'In My Page → Settings you can change your profile photo and, under Personal info, your display name, username (your ID starting with @) and date of birth. A username is 3–20 characters: letters, digits, dots and underscores.',
            },
            {
              q: 'Can I give or share my account with someone else?',
              a: 'No. Your account is yours alone. It cannot be transferred, lent or sold ([Terms, Article 4(3)](/en/terms#art-4)).',
            },
            {
              q: 'I want to delete my account',
              a: 'The [account deletion page](/en/delete-user) has the steps in the app and how to ask without the app. Cancel any subscription in the store before you delete.',
            },
          ],
        },
      ],
    },
    {
      id: 'coins',
      heading: 'Coins',
      blocks: [
        {
          kind: 'paragraph',
          text: 'There are **Paid Coins**, granted when you buy a Coin Pass or as a subscription perk, and **Free Coins**, granted at no charge for login bonuses, quests, invitations, campaigns and the like ([Terms, Article 1](/en/terms#art-1) and [Article 7](/en/terms#art-7)).',
        },
        {
          kind: 'table',
          caption: 'How long coins last (Terms, Article 7)',
          columns: ['Coin type', 'Granted', 'Valid for'],
          rows: [
            ['Paid Coins', 'When you buy a Coin Pass', '6 months from the purchase date'],
            ['Paid Coins', 'As a subscription perk', '6 months from the grant date'],
            ['Free Coins', 'Login bonuses, quests, invitations, campaigns and the like', '30 days from the grant date'],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          body: 'Coins that pass their expiry date expire and can no longer be used. You can see how long each batch has left under My Page → Settings → LinCoin Wallet, in the Expiry schedule. We notify you one month and one week before Paid Coins expire.',
        },
        {
          kind: 'faq',
          items: [
            {
              q: 'Which coins are used first?',
              a: 'Coins are used in order of the soonest expiry, whether paid or free. If the expiry date is the same, Free Coins are used first. Up to 200 Free Coins can be used per day; after that limit, Paid Coins are used ([Terms, Article 7(5) and (6)](/en/terms#art-7)).',
            },
            {
              q: 'Can I get a refund for coins, or exchange them for cash?',
              a: 'Coins are not refunded, except where a refund is required by law. They cannot be exchanged for cash or for points of other services, and cannot be transferred or moved to another account ([Terms, Article 7(7) and (8)](/en/terms#art-7)).',
            },
            {
              q: 'I spent coins and it did not work',
              a: 'If our system did not complete the processing, for example when an image failed to generate, we return the coins you spent ([Terms, Article 7(9)](/en/terms#art-7)). This does not apply when the processing completed, for example when the result was not what you imagined.',
            },
            {
              q: 'Coins or a plan I bought have not arrived',
              a: 'If the store took payment, the purchase is normally delivered automatically the next time you open the app. Close the app completely and open it again. If it still has not arrived, [contact us](#contact) with your store receipt.',
            },
            {
              q: 'Can I take back a gift?',
              a: 'No. Once a gift is sent, it cannot be cancelled and the coins are not returned ([Terms, Article 14](/en/terms#art-14)).',
            },
          ],
        },
      ],
    },
    {
      id: 'subscriptions',
      heading: 'Subscriptions and refunds',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Cancel in the store',
          body: [
            'A subscription renews automatically on the same terms unless you cancel it in the store before the period ends. You cancel it from the subscription management screen of the App Store or Google Play ([Terms, Article 12](/en/terms#art-12)).',
            '**Deleting the app from your phone, or deleting your LinClone account, does not cancel a subscription.**',
          ],
        },
        { kind: 'storeLinks' },
        {
          kind: 'faq',
          items: [
            {
              q: 'Can I open the cancellation screen from the app?',
              a: 'Open My Page → Settings → Subscription, tap your plan (Manage), then choose Go back to Free. On the confirmation screen, choose Go back to Free anyway. This opens the store’s subscription management screen, where you complete the cancellation.',
            },
            {
              q: 'If I cancel, how long can I keep using it?',
              a: 'You keep your perks until the end of the period you have paid for. There are no pro-rated refunds for the rest of a period ([Terms, Article 12(5)](/en/terms#art-12)). After you cancel, Paid Coins and LIVE Tickets that have not expired can still be used ([Article 12(7)](/en/terms#art-12)).',
            },
            {
              q: 'Where can I see what each plan includes and costs?',
              a: 'Plan types, prices (including consumption tax) and perks are shown on the app’s subscription screen (the plan list) and on the purchase confirmation screen. Purchases are currently made only through in-app purchase on the App Store or Google Play ([Terms, Article 6](/en/terms#art-6) and [Article 12](/en/terms#art-12)).',
            },
            {
              q: 'I want a refund',
              a: 'Cancellations and refunds of Coin Passes and subscriptions follow each store’s terms and procedures. We cannot reverse a store payment, so please apply through Apple’s [Report a Problem](https://reportaproblem.apple.com) for the App Store, or as described in [Google Play Help](https://support.google.com/googleplay/answer/2479637) for Google Play ([Terms, Article 13](/en/terms#art-13)). If a store refunds a purchase, the coins and perks it granted are cancelled, and your coin balance may become negative.',
            },
            {
              q: 'My plan does not show after changing phones or reinstalling',
              a: 'Sign in with the same Google account or Apple ID you signed up with, open My Page → Settings → Subscription and your plan, then tap Restore purchases.',
            },
          ],
        },
      ],
    },
    {
      id: 'calls-notifications',
      heading: 'Calls, morning calls and notifications',
      blocks: [
        {
          kind: 'faq',
          items: [
            {
              q: 'The AI Clone cannot hear me on a call',
              a: 'Calls need microphone access. Allow it when the app asks before your first call. If you declined, turn on the microphone for LinClone in your device’s Settings app.',
            },
            {
              q: 'Are calls recorded?',
              a: 'The date, time and length of a call and the transcript of the conversation are kept as Interaction History, and the creator of that AI Clone can read them too ([Terms, Article 8](/en/terms#art-8) and [Article 9](/en/terms#art-9)).',
            },
            {
              q: 'What does a morning call cost?',
              a: 'Each call costs coins, charged when the call is placed. Coins are not returned if you miss it. If the call never reaches your device, you are not charged. When you answer, you get the talk time included with the morning call; anything beyond that uses your normal call time.',
            },
            {
              q: 'My morning call did not ring',
              a: 'A morning call rings even when Mute during sleep hours is on in the app. Your device’s own Do Not Disturb or Focus settings can still silence it. On Android, if LinClone’s full-screen incoming-call display is off, the call shows only as a small notification. Please check your device settings.',
            },
            {
              q: 'I want fewer notifications, or none',
              a: 'In My Page → Settings → Account settings → Notification settings you can switch push notifications on or off, mute during sleep hours, and mute individual creators. Important notices still come through when push notifications are off. Vibration and lock-screen previews are set in your device settings.',
            },
          ],
        },
      ],
    },
    {
      id: 'live',
      heading: 'LIVE shows and LIVE Tickets',
      blocks: [
        {
          kind: 'faq',
          items: [
            {
              q: 'What is a LIVE Ticket?',
              a: 'A right we grant to watch a LIVE show ([Terms, Article 1](/en/terms#art-1)). LIVE Tickets come mainly as a subscription perk and cannot be bought with coins. LIVE Tickets granted as a perk are valid for 6 months from the grant date ([Terms, Article 12(6)](/en/terms#art-12)).',
            },
            {
              q: 'The LIVE show I requested did not start',
              a: 'If the show could not start, the LIVE Ticket you used is returned. It can take a little while to show in your remaining count.',
            },
            {
              q: 'Who can see my LIVE comments and gifts?',
              a: 'Your display name and profile picture are shown with each comment and gift, and other users watching the show can see them. Comments can also be seen in the show’s archive. The AI may read comments aloud. The creator can also see your LIVE comments, gifts and viewing record ([Terms, Article 8](/en/terms#art-8)).',
            },
            {
              q: 'Can I post a clip of a LIVE show on social media?',
              a: 'Only if the creator allows it, and only to your own social media account. Conditions apply: say that it is AI-generated, do not remove or hide the watermark, and do not edit it so it looks like the creator’s own words, among others ([Terms, Article 11](/en/terms#art-11)).',
            },
          ],
        },
      ],
    },
    {
      id: 'safety',
      heading: 'Safety and reporting',
      blocks: [
        {
          kind: 'callout',
          tone: 'important',
          title: 'If a life or someone’s safety is in danger',
          body: 'LinClone is not an emergency service, and it does not provide medical care or counselling. Contact the police (110 in Japan), an ambulance (119 in Japan) or another emergency service right away ([Terms, Article 5(6)](/en/terms#art-5)).',
        },
        {
          kind: 'faq',
          items: [
            {
              q: 'I want to report something inappropriate',
              a: 'You can report a Story with the flag icon on the Story screen (after 3 reports it is hidden and reviewed again). For anything else, such as something an AI Clone said or a LIVE comment, you can also [email us](mailto:info@linclone.com?subject=%5BLinClone%5D%20Safety%20report) with the date and time, the creator’s name and enough detail to find it. We review reported content under [Terms, Article 9](/en/terms#art-9) and act where needed. We may not tell you the outcome individually ([Terms, Article 16](/en/terms#art-16)).',
            },
            {
              q: 'I do not want reactions from a particular user',
              a: 'You can stop receiving Story reactions from a particular user. They are not notified ([Terms, Article 16(3)](/en/terms#art-16)). You can see and undo this under Muted users in Notification settings.',
            },
            {
              q: 'Someone is infringing my rights',
              a: 'If you believe your copyright, portrait rights, privacy or other rights are infringed, send a claim by [email](mailto:info@linclone.com?subject=%5BLinClone%5D%20Rights%20infringement%20claim) or in writing, with your name and contact details, the right you say is infringed and why, and information that identifies the content ([Terms, Article 17](/en/terms#art-17)). For a written claim, use the address under [Contact us](#contact).',
            },
            {
              q: 'I found something that puts a child at risk',
              a: 'Child sexual abuse and exploitation (CSAE) and child sexual abuse material (CSAM) are prohibited, including AI-generated and fictional material. If you find any, [email us](mailto:info@linclone.com?subject=%5BLinClone%5D%20Child%20protection) with “Child protection” in the subject. You can also report a Story with its flag icon. Do not save, forward or attach images or videos. How we respond is set out in our [Child Protection Policy](/en/policies/child-protection-policy). If a child is in immediate danger, call the police (110 in Japan) right away.',
            },
            {
              q: 'Can minors use LinClone?',
              a: 'LinClone can be used at any age, but minors must have the consent of a parent or other legal guardian to use it and to buy paid features. Some features, such as paid relationship modes, are only for people aged 18 or over ([Terms, Article 3](/en/terms#art-3)).',
            },
            {
              q: 'What is not allowed?',
              a: 'Prohibited conduct, such as stalking a creator or presenting an AI Clone’s words as the creator’s own, is listed in [Terms, Article 15](/en/terms#art-15). If you break these rules, we may remove content, restrict features, suspend use or delete the account ([Article 18](/en/terms#art-18)).',
            },
          ],
        },
      ],
    },
    {
      id: 'privacy',
      heading: 'Your data and privacy',
      blocks: [
        {
          kind: 'faq',
          items: [
            {
              q: 'I want to see or delete what an AI Clone remembers',
              a: 'Each creator’s Our bond & memories page lists the memories the AI Clone keeps. Viewing and deleting are free. Unlock a locked memory before deleting it. Deleting a memory does not delete the underlying Interaction History, such as chats and call transcripts.',
            },
            {
              q: 'I want a copy of my data, or want it deleted',
              a: 'You can ask us to notify you of the purposes of use, or to disclose, correct, add to, delete, stop using or erase your retained personal data, among other requests. We verify your identity and respond as the law requires ([Privacy Policy, Article 13](/en/privacy#art-13)). The app has no data export feature. See [Contact](#contact) for where to send a request.',
            },
            {
              q: 'How long is my data kept?',
              a: 'Interaction History is kept while your account exists, and for one year after you withdraw, then deleted. Purchase records are kept for the period the law requires ([Privacy Policy, Article 11](/en/privacy#art-11)). For what happens when you leave, see the [account deletion page](/en/delete-user).',
            },
            {
              q: 'Where is the Privacy Policy?',
              a: 'Read the [Privacy Policy](/en/privacy). It covers the information we collect, how we use it, what is provided to creators, and transfers to third parties abroad, among other things.',
            },
          ],
        },
      ],
    },
    {
      id: 'troubleshooting',
      heading: 'When something is not working',
      blocks: [
        {
          kind: 'steps',
          items: [
            { title: 'Update the app', body: 'Check the App Store or Google Play for a LinClone update.' },
            { title: 'Restart the app', body: 'Close the app completely, then open it again.' },
            { title: 'Check your connection', body: 'Switch between Wi-Fi and mobile data, then try again.' },
            { title: 'Still not working?', body: '[Contact us](#contact) with when it happened, your device and OS, and what you did.' },
          ],
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        {
          kind: 'contact',
          title: 'Email us',
          body: 'The button opens an email with the details to fill in. Fill in what you can.',
          email: 'info@linclone.com',
          subject: '[LinClone] Support request',
          bodyTemplate:
            'Account email or @username:\nDevice and OS (e.g. iPhone 15, iOS 18):\nApp version (if you know it):\nWhen it happened:\nWhat happened (what you did, what you saw):\n',
          label: 'Email support',
          note: 'Never send a password or card number. If you hid your email address with your Apple ID, please give your @username.',
        },
        {
          kind: 'paragraph',
          text: 'In the app, you can also send comments and requests from My Page → Settings → Account settings → Send feedback. For anything that needs a personal reply, please use the email above.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Privacy questions and requests for disclosure',
              definition:
                'Besides email (info@linclone.com), we accept them at the contact point in [Privacy Policy, Article 17](/en/privacy#art-17). By post: Personal Information Inquiries, LinClone K.K., Soshiso 402, 2-5-10 Yayoi, Bunkyo-ku, Tokyo 113-0032, Japan.',
            },
            { term: 'Operator', definition: 'LinClone K.K. (LinClone株式会社)' },
            { term: 'Address', definition: 'Soshiso 402, 2-5-10 Yayoi, Bunkyo-ku, Tokyo 113-0032, Japan' },
            { term: 'Representative', definition: 'Kensei Shiraishi' },
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Creators using LC Studio',
          body: 'This is the support page for the fan app LinClone. For LC Studio, the app for creators, please see the guidance in LC Studio. Creators are covered by their separate agreement with us and the [LC Studio Terms of Service](/lc-studio/terms); how we handle their personal information is set out in the [LC Studio Privacy Policy](/lc-studio/privacy).',
        },
      ],
    },
  ],
  related: ['deleteUser', 'privacy', 'terms', 'childProtection', 'cookies'],
});
