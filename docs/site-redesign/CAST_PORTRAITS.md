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

Every prompt is the shared style plus that creator's line.

**Shared style.** *Photorealistic portrait photo of a fictional woman in her early twenties,
{creator}. Head and shoulders, face in the upper third of the frame, looking at the camera with a
warm, friendly smile. Soft natural light, shallow depth of field, plain pastel {colour} background.
Stylish, modern and tasteful, fully clothed. Vertical 3:4. No text, no logo, no watermark, no other
people.*

| id | Name now | Role on the site | Colour | {creator} |
|---|---|---|---|---|
| `yuzu` | Yuzu | Idol; the fan's 推し (hero, call, download) | blush pink `#e14b81` | a Japanese pop idol with long straight black hair and see-through bangs, light pink idol outfit with a small ribbon |
| `ren` | Ren | Athlete | soft aqua `#00afc4` | a blonde athlete with a high ponytail and light freckles, sporty teal zip-up top |
| `kai` | Kai | Singer; the LIVE host | warm amber `#f0a53a` | a Black singer with voluminous natural curls and small gold hoops, cream knit top |
| `sora` | Sora | Actor & voice actor | periwinkle `#5b8def` | an Indian actress with long dark wavy hair and a small nose stud, elegant blue blouse |
| `nagi` | Nagi | Gaming streamer | mint green `#3fb98a` | a Korean gaming streamer with a glossy short bob, headphones around her neck, oversized mint hoodie |
| `aoi` | Aoi | Singer-songwriter; the LC Studio creator (`/creators`) | lavender `#8b55d6` | a Latina singer-songwriter with long brunette waves, lavender cardigan |

The names are Japanese stage names. A creator's name can be changed in
`src/i18n/dictionaries/{ja,en}/personas.json`, together with the strings that mention it
(`grep -rn "Kai" src/i18n/dictionaries`).
