import { defineLegalDoc } from '../types';

// Cookie and External Transmission Policy for the website www.linclone.com.
// English equivalent of ../ja/cookies.ts (same section ids, same facts). Facts come
// from this repository's code; the app is covered by Privacy Policy Article 10
// (owner-approved text), which is quoted here in translation, not reworded.
export default defineLegalDoc({
  status: 'final',
  meta: {
    title: 'Cookie and External Transmission Policy | LinClone',
    description:
      'What the LinClone website stores in your browser (cookies, local storage) and what it sends elsewhere. No advertising or analytics cookies or tags.',
  },
  eyebrow: 'Legal',
  title: 'Cookie and External Transmission Policy',
  lead: 'How this website (www.linclone.com), operated by LinClone K.K. (the “Company”), stores information in your browser and what information your browser sends elsewhere. For the LinClone app, see the [Privacy Policy](/en/privacy).',
  establishedDate: '2026-10-09',
  lastUpdated: '2026-10-09',
  atAGlance: [
    {
      icon: 'block',
      title: 'No advertising or analytics cookies',
      body: 'We use no advertising cookies, no analytics tools and no third-party scripts.',
    },
    {
      icon: 'cookie',
      title: 'Only display settings',
      body: 'We only remember things like the colour you picked and the notices you closed. [See the list](#what-we-store).',
    },
    {
      icon: 'settings',
      title: 'Delete them any time',
      body: 'Clear them in your browser settings. The site keeps working if you do.',
    },
  ],
  sections: [
    {
      id: 'scope',
      heading: 'What this page covers',
      blocks: [
        {
          kind: 'paragraph',
          text: 'This page covers the website www.linclone.com (the “Site”). It explains both the information the Site stores in your browser (cookies, local storage and session storage) and the information sent from your device to outside parties when you browse the Site (known in Japan as “external transmission”).',
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'About the app',
          body: 'External transmission in the LinClone app is covered by [Article 10 (External Transmission) of the Privacy Policy](/en/privacy#art-10). See [In the app](#in-the-app) for details.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Cookie',
              definition: 'A small piece of data a website stores in your browser. Your browser sends it back to that site’s server each time you visit.',
            },
            {
              term: 'Local storage',
              definition: 'A way of storing information inside your browser. It stays until you delete it and, unlike a cookie, is not sent to the server.',
            },
            {
              term: 'Session storage',
              definition: 'Like local storage, but cleared when you close the tab or window. It is not sent to the server.',
            },
          ],
        },
      ],
    },
    {
      id: 'what-we-store',
      heading: 'What we store in your browser',
      blocks: [
        {
          kind: 'paragraph',
          text: 'The table below lists everything the Site stores in your browser. All of it is stored by the Site itself (first party), and none of it contains information that identifies you, such as your name or email address.',
        },
        {
          kind: 'table',
          caption: 'Information the Site stores in your browser',
          columns: ['Name', 'Type', 'Purpose', 'What is stored', 'Kept for'],
          rows: [
            ['lc.oshi', 'Local storage', 'Keeps the colour you chose with “Pick their color” on the home page, so the page shows it next time', 'The colour code you picked', 'Until you delete it in your browser'],
            ['lc.langPill', 'Local storage', 'Remembers that you closed the language notice under the header (such as “日本語で見る”), so it is not shown again', 'A record that you closed it', 'Until you delete it in your browser'],
            ['lc.qrDock', 'Session storage', 'Remembers whether you collapsed or opened the download QR code panel shown when you view the home page on a computer', 'Open or collapsed', 'Until you close the tab or window'],
            ['lc.stickyDismissed', 'Session storage', 'Remembers that you closed the download bar shown at the bottom of the screen when you view the home page on a phone', 'A record that you closed it', 'Until you close the tab or window'],
            ['i18next', 'Cookie', 'Decides whether the invitation page (/invite) and the share pages (/share/…) are shown in Japanese or English', 'Display language (ja or en)', 'Up to 1 year from when it was stored'],
          ],
        },
        {
          kind: 'list',
          items: [
            'Local storage and session storage are used only inside your browser. They are never sent to our servers or to third parties.',
            'The “i18next” cookie is sent by your browser to the Site’s server when you visit the Site, and is used only to decide the display language. The current Site does not normally store it anew, but one stored when you visited an earlier version of the Site may still be in your browser.',
            'If storage is turned off in your browser settings, the Site still works normally.',
          ],
        },
      ],
    },
    {
      id: 'not-used',
      heading: 'What we do not use',
      blocks: [
        {
          kind: 'callout',
          tone: 'info',
          title: 'No cookies or tags for advertising or analytics',
          body: [
            'At present, the Site does not include any cookies, tags or tools for advertising or for analytics (analysing how the Site is used). There are no social media buttons, no embedded videos or other outside content, and no scripts provided by third parties.',
            'The fonts, images and QR codes are all served by the Site itself. Simply viewing a page does not send information to any third-party server (apart from our hosting provider and the automatic redirect from the invitation and share pages to the app stores; see [the next section](#external-transmission)).',
          ],
        },
        {
          kind: 'paragraph',
          text: 'As [Article 10 of the Privacy Policy](/en/privacy#art-10) provides for the app, if we introduce such a tool on the Site, we will first revise this page and publish the information sent, the recipient and the purpose of use.',
        },
      ],
    },
    {
      id: 'external-transmission',
      heading: 'Information sent elsewhere',
      blocks: [
        {
          kind: 'paragraph',
          text: 'When you browse the Site, information is sent from your device to outside parties only in the following cases.',
        },
        {
          kind: 'table',
          caption: 'Information sent when you browse the Site',
          columns: ['When', 'Recipient', 'Information sent', 'Purpose'],
          rows: [
            [
              'When you open any page',
              'The hosting provider the Company uses to deliver the Site (Vercel Inc., United States)',
              'Information normally sent when you visit a website, such as your IP address, browser type (user agent), the URL of the page you viewed, and the date and time',
              'To deliver the page. This information is kept as the server’s access records for the period set by the hosting provider.',
            ],
            [
              'When you tap an App Store button or link, or when an iPhone or iPad is sent to the App Store automatically from the invitation page (/invite) or a share page (/share/…)',
              'Apple Inc. (App Store)',
              'The information normally sent when an App Store page opens. If you came from a button on the home page or another page, the link URL also carries a value showing which button on which page you came from, and the display language (for example, lp_hero_ja).',
              'To take you to the page where you can get the app. The value in the link URL is used to see, through the App Store’s reporting tools, which of our pages led people to get the app.',
            ],
            [
              'When you tap a Google Play button or link, or when an Android device is sent to Google Play automatically from the invitation page (/invite) or a share page (/share/…)',
              'Google LLC (Google Play)',
              'The information normally sent when a Google Play page opens. If you came from a button on the home page or another page, the link URL also carries a value showing which button on which page you came from, and the display language. If you came from the invitation page, it carries the invitation code.',
              'To take you to the page where you can get the app. The value in the link URL is used to see, through Google Play’s reporting tools, which of our pages led people to get the app. The invitation code is used by the app’s invitation feature.',
            ],
          ],
        },
        {
          kind: 'list',
          items: [
            'The information the Site adds to the link URL when you go to a store does not include anything that identifies you, such as your name or email address.',
            'On a phone, the invitation page (/invite) and the share pages (/share/…) take you to the app or a store automatically, without your tapping a button. On every other page, you only go to a store when you tap a button or link.',
            'If you arrive through a download QR code or link (/get), the Site works out your device type (iPhone or Android) from the user agent and sends you to the matching store. This is used only to route you.',
            'Tapping an email link (info@linclone.com) opens the mail app on your device. Nothing is sent to us until you send the email.',
            'Once you are in a store, Apple’s or Google’s privacy policy applies.',
          ],
        },
      ],
    },
    {
      id: 'manage',
      heading: 'Deleting stored information or stopping storage',
      blocks: [
        {
          kind: 'paragraph',
          text: 'You can delete what the Site has stored in your browser at any time in your browser settings. The names of the settings differ between browsers and versions.',
        },
        {
          kind: 'steps',
          items: [
            {
              title: 'Open your browser settings',
              body: 'Open the settings of Safari, Google Chrome or the browser you use (for Safari on iPhone, use the device’s Settings app).',
            },
            {
              title: 'Find the site data settings',
              body: 'Look for an item such as “Privacy”, “Cookies and site data” or “Website Data”.',
            },
            {
              title: 'Delete the data for linclone.com',
              body: 'Choose linclone.com from the list and delete it, or delete the data for all sites. You can also turn off storing cookies and site data altogether.',
            },
          ],
        },
        {
          kind: 'list',
          items: [
            'Session storage is cleared automatically when you close the tab or window.',
            'If you browse in a private (incognito) window, what is stored is cleared when you close that window.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'The Site keeps working',
          body: 'Deleting stored information or turning storage off does not stop you from using the Site. Display settings simply go back to their defaults: the colour you picked resets, and notices you closed may appear again.',
        },
      ],
    },
    {
      id: 'in-the-app',
      heading: 'In the app',
      blocks: [
        {
          kind: 'paragraph',
          text: 'External transmission in the LinClone app is governed by Article 10 of the Privacy Policy, which reads as follows.',
        },
        {
          kind: 'callout',
          tone: 'important',
          title: 'Privacy Policy, Article 10 (External Transmission)',
          body: 'At present, the Service does not incorporate any tool that transmits information from Users’ devices to external businesses for usage analysis or advertising. If such a tool is introduced in the future, the Company will revise this Policy in advance and publish the information transmitted, the recipients and the purposes of use.',
        },
        {
          kind: 'paragraph',
          text: 'For the information the app collects, outsourcing, and provision to third parties in foreign countries, see [Article 2](/en/privacy#art-2), [Article 8](/en/privacy#art-8) and [Article 9](/en/privacy#art-9).',
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
              q: 'Can the Site’s cookies and storage identify me?',
              a: 'No. The Site stores only a colour code, records that you closed notices, whether the QR code panel is open, and your display language; nothing like your name or email address. The Company does not use this information to identify you.',
            },
            {
              q: 'The colour I picked was gone the next time I opened the Site.',
              a: 'The Site cannot remember your colour if you deleted site data in your browser settings, are browsing in a private (incognito) window, or have turned off storing site data. Please pick it again.',
            },
            {
              q: 'Is my browsing on the Site linked to my app account?',
              a: 'The Site has no sign-in, and what it stores in your browser is not linked to your app account. However, if you go from the invitation page (/invite) to Google Play on an Android device, the invitation code is used by the app’s invitation feature. And if a link to the invitation page or a share page opens the app on a device where it is installed, the app receives that link’s URL.',
            },
            {
              q: 'Where can I read about the information used in the app?',
              a: 'See the [Privacy Policy](/en/privacy). External transmission is covered in [Article 10](/en/privacy#art-10).',
            },
          ],
        },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this page',
      blocks: [
        {
          kind: 'paragraph',
          text: 'If we change what the Site stores or sends elsewhere, we will revise this page and update the “Last updated” date at the top.',
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Questions about this page can be sent to the email address below. Requests for disclosure and other requests about personal information in the app are accepted at the contact points set out in [Article 17 of the Privacy Policy](/en/privacy#art-17).',
        },
        {
          kind: 'contact',
          title: 'Questions about cookies and external transmission',
          email: 'info@linclone.com',
          subject: 'Cookies and external transmission',
          label: 'Email us',
        },
      ],
    },
  ],
  closing: ['LinClone K.K.', 'Soshiso 402, 2-5-10 Yayoi, Bunkyo-ku, Tokyo 113-0032, Japan'],
  related: ['privacy', 'terms'],
});
