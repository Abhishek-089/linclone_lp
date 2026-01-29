# Android Deep Linking - Next Steps

## ✅ What I've Done

1. Created `assetlinks.json` file in your website project at:
   - `/Users/abhishek/Desktop/linclone_lp/public/.well-known/assetlinks.json`

2. Added your debug keystore fingerprint to the file

## ⏳ What You Need to Do

### Step 1: Get Production Keystore Fingerprint

The easiest way is through **Google Play Console**:

1. Go to [Google Play Console](https://play.google.com/console)
2. Select LinClone app
3. Go to: **Release** → **Setup** → **App signing**
4. Copy the **SHA-256 certificate fingerprint**

See `GET_PRODUCTION_FINGERPRINT.md` for alternative methods.

### Step 2: Add Production Fingerprint

Once you have the fingerprint, update this file:
`/Users/abhishek/Desktop/linclone_lp/public/.well-known/assetlinks.json`

Add your production fingerprint to the array:
```json
"sha256_cert_fingerprints": [
  "FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C",
  "YOUR:PRODUCTION:FINGERPRINT:HERE"
]
```

### Step 3: Deploy Your Website

Deploy your website to make the file accessible at:
- `https://linclone.com/.well-known/assetlinks.json`
- `https://www.linclone.com/.well-known/assetlinks.json`

If using Vercel/Netlify, just push to your git repository and it will auto-deploy.

### Step 4: Test on Android

1. Uninstall the app from your Android device
2. Reinstall it
3. Click a deep link like: `https://linclone.com/share/profile/123`
4. The app should open directly (not redirect to Play Store)

## Need Help?

If you send me the production fingerprint, I can update the file for you!
