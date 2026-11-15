# Cast portraits (AI-generated)

The six creators on the site are fictional adults. Each has an AI-generated portrait in
`public/cast/<id>.webp`. Every avatar, badge, card and reel that `Aura` draws on `/` and
`/creators` shows that photo. Two places keep the colour "aura" instead:

- the full-screen backdrop behind the call screens (shape `scene-portrait`);
- the OG images.

While a portrait is present (`HAS_PORTRAITS` in `src/lib/personas.ts`), the notes under the
mockups say that the pictures are AI-generated. So does the hero phone's label.

## Provenance and permitted use

- **Generated:** 2026-11-13 with OpenAI ChatGPT Images (the built-in image_gen tool), at the
  request of Kensei Shiraishi.
- **Plan:** ChatGPT Prolite, as reported by the generating session. Billing was not independently
  inspected.
- **Process:** three candidates per prompt, with one selected per creator. No real person,
  celebrity, photo reference or other person's likeness was supplied. The prompts are below.
- **Commercial use:** OpenAI's [ChatGPT FAQ](https://help.openai.com/en/articles/6783457-what-is-chatgpt)
  permits commercial use of output on free and paid plans, subject to OpenAI's terms and policies.
  The content-ownership section of the
  [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assigns OpenAI's rights in
  output to the user, to the extent the law allows. It does not promise that outputs are unique.
- **Rights record:** `CAST_RIGHTS` in `src/lib/personas.ts` records all of this. Every portrait
  carries it with `licensed: true`. The build fails if a portrait has no licence or a blank
  `rightsRef`.
- **Earlier set not used:** a set delivered earlier the same day (`cast-portraits-v2.zip`) had no
  provenance and lower quality.

| File | Name | Role on the site | Size | Bytes | SHA-256 |
|---|---|---|---|---:|---|
| `yuzu.webp` | Yuzu | Japanese idol; the fan's 推し (hero, call, download) | 1086×1448 | 214460 | `89a49c966e9a8cbf50a7bba36506aa2e1c72b6186ecc222573bcaef0675ade89` |
| `ren.webp` | Emma | Athlete | 1086×1448 | 186722 | `d39a1fbccfbc7e058975da884ed40866835b43989433bdcff180c5d44448736b` |
| `kai.webp` | Amara | Singer; the radio host | 1086×1448 | 367018 | `6e7675a1074f60a80deaf9b60ce1ea5caccdd384c34928caa366e76846585cb8` |
| `sora.webp` | Priya | Actor & voice actor | 1086×1448 | 194438 | `44cfdb6ef70d0e9a67bf48705b10695057b0b8fd22eb0637a87cedf7ab495bbf` |
| `nagi.webp` | Jiwoo | Gaming streamer | 1086×1448 | 202900 | `7a38f5ca40d85cfcd82360944854ddfa20d39fbf8b8c5d8a517d8e2989beeb98` |
| `aoi.webp` | Sofia | Singer-songwriter; the LC Studio creator (`/creators`) | 1086×1448 | 245712 | `b7b251c715fd5a584141806887d15b7f11f458ab3ad7c2b7b19105de173330df` |

The file names use the internal persona ids, which predate the names. The display names live in
`src/i18n/dictionaries/{ja,en}/personas.json`.

## Replacing a portrait

1. **Prepare the file.** Save it as `public/cast/<id>.webp`, portrait 3:4, at least 1024 px wide
   and under 400 KB. `next/image` serves resized AVIF/WebP. If the size is not 1086×1448, update
   `size` in `castPortrait()`.
2. **Measure the face.** Run `swift scripts/face-centre.swift public/cast/<id>.webp` and pass
   the printed centre to `castPortrait('<id>', [x, y])` in `src/lib/personas.ts`. Every crop is
   computed from it (`portraitPosition()`): the face lands 50% across and 45% down each box, as
   far as the image allows. Fills that CSS reshapes pass their real aspect to `Aura`
   (`CreatorProfile08`, `GrowPicker07`, and the full-screen reels in `Welcome00a`,
   `PickReel00b`, `GuestGate02` and `LiveFeedCard`); `faceY` moves the face lower
   where the status bar covers the top of the photo (`CreatorProfile08`).
3. **Update the rights record.** If the new image came from a different tool, plan or person,
   update `CAST_RIGHTS` and this file.
4. **Clear the local cache.** `next dev` caches optimised images by URL for hours, so delete
   `.next/dev/cache/images` before checking a replacement locally.
5. **Check both pages on a phone.** Look closely at the How-it-works phones, the 育成 picker and
   profile, the radio screen and the LC Studio 公式写真 picker.

## Rules for the pictures

- They must show fictional adults. Never name a real person or celebrity in a prompt.
- Make them attractive and stylish, but not sexualised. This page is the public face of an app
  that under-18s may use with a guardian's consent, and the store listings link to it.
- Use one consistent look: photoreal, soft light, head and shoulders, and a plain pastel
  background in the creator's colour (yuzu `#e14b81`, ren `#00afc4`, kai `#f0a53a`, sora
  `#5b8def`, nagi `#3fb98a`, aoi `#8b55d6`). Do not include text, logos, watermarks or other
  people.

## Prompts used

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
