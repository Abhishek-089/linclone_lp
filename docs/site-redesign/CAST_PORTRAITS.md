# Cast portraits (AI-generated)

The six creators on the site are fictional. Each one shows a faceless colour "aura" with a letter
until it has a portrait. Add a portrait and that creator's photo replaces the aura in every avatar,
badge and card on both pages. Two places keep the aura: the full-screen backdrop behind the call
screens and the OG image. The notes under the mockups then also say the pictures are AI-generated
(`HAS_PORTRAITS` in `src/lib/personas.ts`).

## Adding a portrait

1. Save the image as `public/cast/<id>.webp` (or `.jpg`). It must be portrait 3:4, at least
   1024×1365, and under 400 KB. `next/image` serves resized AVIF/WebP from it.
2. In `src/lib/personas.ts`, give the creator a `portrait`:

   ```ts
   yuzu: { id: 'yuzu', color: '#e14b81', ring: 'story', voiceSeed: 7, monogram: 'Y',
     portrait: {
       src: '/cast/yuzu.webp',
       alt: { ja: 'Yuzuのイメージ画像（AI生成）', en: 'Yuzu, AI-generated picture' },
       focal: [0.5, 0.3], // x, y of the face (0–1): round avatars crop around it
       licensed: true,
       rightsRef: 'AI-generated: <tool> <plan>, 2026-11-xx, by <name>; commercial use per the tool terms',
     } },
   ```

   The build fails if a portrait has no `licensed: true` and no `rightsRef`. Only use an image
   generator whose terms allow commercial use on your plan, and record the tool and plan in the
   `rightsRef`.
3. Check `/` and `/creators` on a phone, then deploy.

## Rules for the pictures

- They must show fictional adults (early to mid 20s). Never name a real person or celebrity in a
  prompt, and throw away any result that looks like someone real.
- Make them attractive and stylish, but not sexualised. That means no lingerie, swimwear or
  suggestive poses. This page is the public face of an app that under-18s may use with a
  guardian's consent, and the store listings link to it.
- Use one consistent look for all six: photoreal, soft light, head and shoulders, and a plain pastel
  background in the creator's colour. Do not include text, logos, watermarks or other people.
- Keep the face in the upper-middle of the frame. The same image is cropped to circles (avatars)
  and to tall cards.

## Cast and prompts

Yuzu keeps her Japanese name; the other five have names that match their looks (2026-11-13). The
file names use the internal ids, which predate the new names.

| File | Name | Role on the site | Background colour |
|---|---|---|---|
| `public/cast/yuzu.webp` | Yuzu | Japanese idol; the fan's 推し (hero, call, download) | blush pink `#e14b81` |
| `public/cast/ren.webp` | Emma | Athlete | soft aqua `#00afc4` |
| `public/cast/kai.webp` | Amara | Singer; the LIVE host | warm amber `#f0a53a` |
| `public/cast/sora.webp` | Priya | Actor & voice actor | periwinkle `#5b8def` |
| `public/cast/nagi.webp` | Jiwoo | Gaming streamer | mint green `#3fb98a` |
| `public/cast/aoi.webp` | Sofia | Singer-songwriter; the LC Studio creator (`/creators`) | lavender `#8b55d6` |

Paste each prompt as-is into the image tool and pick a portrait (3:4) format. Generate a few
results for each and keep the most natural one.

**Yuzu**
> Photorealistic portrait photo of a fictional Japanese woman in her early twenties, a pop idol with
> long straight black hair and see-through bangs, wearing a light pink idol outfit with a small
> ribbon. Head and shoulders, face in the upper third of the frame, looking at the camera with a
> warm, friendly smile. Soft natural light, shallow depth of field, plain pastel blush-pink
> background. Stylish, modern and tasteful, fully clothed. Vertical 3:4. No text, no logo, no
> watermark, no other people.

**Emma**
> Photorealistic portrait photo of a fictional blonde woman in her early twenties, an athlete with a
> high ponytail and light freckles, wearing a sporty teal zip-up top. Head and shoulders, face in the
> upper third of the frame, looking at the camera with a warm, friendly smile. Soft natural light,
> shallow depth of field, plain pastel aqua background. Stylish, modern and tasteful, fully clothed.
> Vertical 3:4. No text, no logo, no watermark, no other people.

**Amara**
> Photorealistic portrait photo of a fictional Black woman in her early twenties, a singer with
> voluminous natural curls and small gold hoop earrings, wearing a cream knit top. Head and
> shoulders, face in the upper third of the frame, looking at the camera with a warm, friendly
> smile. Soft natural light, shallow depth of field, plain pastel warm-amber background. Stylish,
> modern and tasteful, fully clothed. Vertical 3:4. No text, no logo, no watermark, no other people.

**Priya**
> Photorealistic portrait photo of a fictional Indian woman in her early twenties, an actress with
> long dark wavy hair and a small nose stud, wearing an elegant blue blouse. Head and shoulders, face
> in the upper third of the frame, looking at the camera with a warm, friendly smile. Soft natural
> light, shallow depth of field, plain pastel periwinkle background. Stylish, modern and tasteful,
> fully clothed. Vertical 3:4. No text, no logo, no watermark, no other people.

**Jiwoo**
> Photorealistic portrait photo of a fictional Korean woman in her early twenties, a gaming streamer
> with a glossy short bob and headphones around her neck, wearing an oversized mint hoodie. Head and
> shoulders, face in the upper third of the frame, looking at the camera with a warm, friendly
> smile. Soft natural light, shallow depth of field, plain pastel mint-green background. Stylish,
> modern and tasteful, fully clothed. Vertical 3:4. No text, no logo, no watermark, no other people.

**Sofia**
> Photorealistic portrait photo of a fictional Latina woman in her early twenties, a
> singer-songwriter with long brunette waves, wearing a lavender cardigan. Head and shoulders, face
> in the upper third of the frame, looking at the camera with a warm, friendly smile. Soft natural
> light, shallow depth of field, plain pastel lavender background. Stylish, modern and tasteful,
> fully clothed. Vertical 3:4. No text, no logo, no watermark, no other people.

Names live in `src/i18n/dictionaries/{ja,en}/personas.json`; two strings in `mock.fan.json` name
Amara directly.
