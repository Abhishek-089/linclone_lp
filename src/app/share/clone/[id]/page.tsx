import { Metadata } from 'next';
import Script from 'next/script';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  // Actual numeric Apple App ID
  const APPLE_APP_ID = "6748680628"; 
  
  return {
    title: `Share Clone ${id} - LinClone`,
    other: {
      "apple-itunes-app": `app-id=${APPLE_APP_ID}, app-argument=https://linclonelanding-page.vercel.app/share/clone/${id}`,
    },
  };
}

export default async function ShareClonePage({ params }: Props) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Opening LinClone...</h1>
      <p className="mb-8">If the app doesn't open automatically, please click the button below.</p>
      
      <Script id="app-redirect" strategy="afterInteractive">
        {`
          // 1. Detect if on mobile
          var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          var isAndroid = /Android/i.test(navigator.userAgent);
          var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
          
          if (isMobile) {
            // 2. Redirect to App Store / Play Store
            var appStoreUrl = "https://apps.apple.com/us/app/linclone/id6748680628"; 
            
            // For Android fallback
            var playStoreUrl = "https://play.google.com/store/apps/details?id=com.linclone.app";
            
            if (isIOS) {
               window.location.href = appStoreUrl;
            } else if (isAndroid) {
               window.location.href = playStoreUrl;
            }
          } else {
            // 3. For Web/Desktop, redirect to main website
            window.location.href = "/" + window.location.search;
          }
        `}
      </Script>
      
      <div className="flex flex-col sm:flex-row gap-4">
         <a 
           href="https://apps.apple.com/us/app/linclone/id6748680628"
           className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
         >
           Download on App Store
         </a>
         <a 
           href="https://play.google.com/store/apps/details?id=com.linclone.app"
           className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
         >
           Get it on Google Play
         </a>
      </div>
    </div>
  );
}

