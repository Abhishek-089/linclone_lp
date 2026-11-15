import type { Locale } from '@/i18n/config';

// The fictional cast (spec §1.3, §10). No real people. A portrait is an
// AI-generated picture of the fictional creator (public/cast/<id>.webp, see
// docs/site-redesign/CAST_PORTRAITS.md); without one the faceless aura shows.
export type PersonaId = 'yuzu' | 'ren' | 'kai' | 'sora' | 'nagi' | 'aoi';
/** `size` in px; `focal` is the face centre as fractions of width and height (top-left origin). */
export type Portrait = { src: string; size: [number, number]; alt: Record<Locale, string>; focal: [number, number]; licensed: true; rightsRef: string };
export type PersonaDef = { id: PersonaId; color: string; ring: 'story' | 'live'; voiceSeed: number; monogram: string; portrait?: Portrait };

/** Provenance and prompts: docs/site-redesign/CAST_PORTRAITS.md. */
const CAST_RIGHTS =
  'AI-generated: OpenAI ChatGPT Images (built-in image_gen); plan: ChatGPT Prolite (session-reported); 2026-11-13; generated at the request of Kensei Shiraishi; commercial use permitted subject to OpenAI Terms of Use and ChatGPT FAQ. https://openai.com/policies/terms-of-use/ https://help.openai.com/en/articles/6783457-what-is-chatgpt';

/** An AI-generated portrait in public/cast (1086×1448). `face`: its face centre (scripts/face-centre.swift). */
const castPortrait = (id: PersonaId, face: [number, number]): Portrait => ({
  src: `/cast/${id}.webp`,
  size: [1086, 1448],
  alt: { ja: 'クリエイターのイメージ画像（AIで生成）', en: 'Creator picture (AI-generated)' },
  focal: face,
  licensed: true,
  rightsRef: CAST_RIGHTS,
});

// Ids are internal and predate the 2026-11-13 cast (Kensei: creators from all
// over the world); display names live in personas.json.
export const PERSONAS: Record<PersonaId, PersonaDef> = {
  // Yuzu: fan-page protagonist; rendered with var(--oshi)
  yuzu: { id: 'yuzu', color: '#e14b81', ring: 'story', voiceSeed: 7, monogram: 'Y', portrait: castPortrait('yuzu', [0.546, 0.371]) },
  ren: { id: 'ren', color: '#00afc4', ring: 'story', voiceSeed: 3, monogram: 'E', portrait: castPortrait('ren', [0.584, 0.364]) }, // Emma
  // Amara: LIVE host
  kai: { id: 'kai', color: '#f0a53a', ring: 'live', voiceSeed: 11, monogram: 'A', portrait: castPortrait('kai', [0.572, 0.341]) },
  // Priya: 育成 profile
  sora: { id: 'sora', color: '#5b8def', ring: 'story', voiceSeed: 5, monogram: 'P', portrait: castPortrait('sora', [0.542, 0.345]) },
  nagi: { id: 'nagi', color: '#3fb98a', ring: 'story', voiceSeed: 9, monogram: 'J', portrait: castPortrait('nagi', [0.522, 0.369]) }, // Jiwoo
  // Sofia: /creators persona
  aoi: { id: 'aoi', color: '#8b55d6', ring: 'story', voiceSeed: 13, monogram: 'S', portrait: castPortrait('aoi', [0.478, 0.297]) },
};

// A photo may only ship with a licence record; otherwise the build fails here.
for (const p of Object.values(PERSONAS)) {
  if (p.portrait && !(p.portrait.licensed === true && p.portrait.rightsRef.trim())) {
    throw new Error(`Unlicensed portrait for ${p.id}`);
  }
}

/** True once any creator has a portrait: the notes then also say the pictures are AI-generated. */
export const HAS_PORTRAITS = Object.values(PERSONAS).some((p) => p.portrait);

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/**
 * `object-position` for a portrait under `object-fit: cover` in a box of
 * `boxAspect` (width / height): the face centre lands 50% across and 45% down
 * the box, as far as the image's overflow allows.
 */
export function portraitPosition({ size: [w, h], focal: [fx, fy] }: Portrait, boxAspect: number): string {
  const img = w / h;
  if (img > boxAspect) {
    const shown = boxAspect / img; // share of the width in view
    return `${(clamp01((fx - shown * 0.5) / (1 - shown)) * 100).toFixed(1)}% 50%`;
  }
  if (img < boxAspect) {
    const shown = img / boxAspect; // share of the height in view
    return `50% ${(clamp01((fy - shown * 0.45) / (1 - shown)) * 100).toFixed(1)}%`;
  }
  return '50% 50%';
}
