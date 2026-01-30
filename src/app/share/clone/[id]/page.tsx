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
      "apple-itunes-app": `app-id=${APPLE_APP_ID}, app-argument=https://www.linclone.com/share/clone/${id}`,
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
          (function() {
            // Prevent re-execution on page reload
            var hasAttempted = sessionStorage.getItem('deeplink_attempted');
            if (hasAttempted === 'true') {
              // Already attempted, don't run again
              return;
            }
            sessionStorage.setItem('deeplink_attempted', 'true');
            
            // 1. Detect platform
            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            var isAndroid = /Android/i.test(navigator.userAgent);
            var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            
            if (isMobile) {
              // 2. Get the clone ID from the URL
              var pathParts = window.location.pathname.split('/');
              var cloneId = pathParts[pathParts.length - 1];
              
              // 3. Construct deep link URLs
              var appDeepLink = "linclone://share/clone/" + cloneId;
              var appStoreUrl = "https://apps.apple.com/us/app/linclone/id6748680628";
              var playStoreUrl = "https://play.google.com/store/apps/details?id=com.linclone.app";
              
              // 4. Track if we've left the page (app opened)
              var appOpened = false;
              var startTime = Date.now();
              
              // 5. Set up visibility change listener
              document.addEventListener('visibilitychange', function() {
                if (document.hidden) {
                  appOpened = true;
                }
              });
              
              // 6. Set up blur listener (backup for app opening)
              window.addEventListener('blur', function() {
                appOpened = true;
              });
              
              // 7. Try to open the app
              if (isIOS) {
                // Detect iPad specifically (including modern iPads that report as MacOS)
                var isIPad = /iPad/i.test(navigator.userAgent) || 
                             (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
                
                console.log('[iOS] Device detected:', isIPad ? 'iPad' : 'iPhone');
                console.log('[iOS] Deep link:', appDeepLink);
                console.log('[iOS] App Store URL:', appStoreUrl);
                
                if (isIPad) {
                  // iPad-specific handling: ONLY use iframe, do NOT use window.location
                  // window.location causes navigation issues on iPad Safari
                  console.log('[iPad] Using iframe-only approach (no window.location)');
                  
                  var iframe = document.createElement('iframe');
                  iframe.style.display = 'none';
                  iframe.style.width = '0';
                  iframe.style.height = '0';
                  iframe.style.border = 'none';
                  iframe.src = appDeepLink;
                  
                  try {
                    document.body.appendChild(iframe);
                    console.log('[iPad] Iframe created and appended');
                  } catch(e) {
                    console.error('[iPad] Failed to append iframe:', e);
                  }
                  
                  // Clean up iframe
                  setTimeout(function() {
                    try {
                      if (iframe && iframe.parentNode) {
                        document.body.removeChild(iframe);
                        console.log('[iPad] Iframe removed');
                      }
                    } catch(e) {
                      console.log('[iPad] Iframe cleanup error:', e);
                    }
                  }, 3000);
                  
                  // Wait longer before redirecting to App Store
                  setTimeout(function() {
                    console.log('[iPad] Checking if app opened... appOpened =', appOpened);
                    if (!appOpened) {
                      console.log('[iPad] App did NOT open. Redirecting to App Store:', appStoreUrl);
                      window.location.href = appStoreUrl;
                    } else {
                      console.log('[iPad] App opened successfully!');
                    }
                  }, 3000);
                } else {
                  // iPhone: use direct window.location
                  console.log('[iPhone] Using direct window.location');
                  window.location.href = appDeepLink;
                  
                  // If app didn't open after 2.5 seconds, redirect to App Store
                  setTimeout(function() {
                    if (!appOpened && Date.now() - startTime < 3000) {
                      console.log('[iPhone] App did not open, redirecting to App Store');
                      window.location.href = appStoreUrl;
                    }
                  }, 2500);
                }
                
              } else if (isAndroid) {
                // For Android, try intent first
                var intentUrl = "intent://share/clone/" + cloneId + "#Intent;" +
                  "scheme=linclone;" +
                  "package=com.linclone.app;" +
                  "S.browser_fallback_url=" + encodeURIComponent(playStoreUrl) + ";" +
                  "end";
                
                window.location.href = intentUrl;
                
                // Backup fallback to Play Store
                setTimeout(function() {
                  if (!appOpened && Date.now() - startTime < 3000) {
                    window.location.href = playStoreUrl;
                  }
                }, 2500);
              }
            } else {
              // For Web/Desktop, redirect to main website
              window.location.href = "/" + window.location.search;
            }
          })();
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

