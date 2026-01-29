# Getting Your Production Keystore Fingerprint

To complete the Android deep linking setup, you need to add your **production** keystore SHA-256 fingerprint to the `assetlinks.json` file.

## Current Status

✅ I've already added the `assetlinks.json` file to your website project at:
- `/Users/abhishek/Desktop/linclone_lp/public/.well-known/assetlinks.json`

✅ The file currently contains your **debug** keystore fingerprint

⏳ You need to add your **production** keystore fingerprint

## How to Get Your Production Fingerprint

### Option 1: Google Play Console (Easiest)

1. Go to [Google Play Console](https://play.google.com/console)
2. Select your LinClone app
3. Navigate to: **Release** → **Setup** → **App signing**
4. Copy the **SHA-256 certificate fingerprint** under "App signing key certificate"
5. Send me that fingerprint, and I'll add it to the file

### Option 2: Using EAS CLI

Run this command:
```bash
cd "/Volumes/SAGE ssd/LinClone"
eas credentials
```

Then:
1. Select **Android**
2. Select **production** build profile
3. Select **Keystore**
4. Select **View keystore details**
5. Copy the SHA-256 fingerprint

### Option 3: Local Keystore File

If you have a local production keystore file (`.keystore` or `.jks`), run:
```bash
keytool -list -v -keystore /path/to/your/production.keystore -alias your-key-alias
```

Look for the `SHA256:` line and copy that fingerprint.

## What to Do Next

1. **Get the production fingerprint** using one of the methods above
2. **Send it to me**, and I'll update the `assetlinks.json` file
3. **Deploy your website** to make the file live
4. **Test on Android device**

## After You Get the Fingerprint

Once you have it, just paste it here and I'll update the file. It will look something like:
```
AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90
```

Then you can deploy your website and the Android deep linking will work!
