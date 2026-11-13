import type { Locale } from '@/i18n/config';

// The fictional cast (spec §1.3, §10). No real people. A portrait is an
// AI-generated picture of the fictional creator (public/cast/<id>.webp, see
// docs/site-redesign/CAST_PORTRAITS.md); without one the faceless aura shows.
export type PersonaId = 'yuzu' | 'ren' | 'kai' | 'sora' | 'nagi' | 'aoi';
type Portrait = { src: string; alt: Record<Locale, string>; focal: [number, number]; licensed: true; rightsRef: string };
export type PersonaDef = { id: PersonaId; color: string; ring: 'story' | 'live'; voiceSeed: number; monogram: string; portrait?: Portrait };

// Ids are internal and predate the 2026-11-13 cast (Kensei: creators from all
// over the world); display names live in personas.json.
export const PERSONAS: Record<PersonaId, PersonaDef> = {
  yuzu: { id: 'yuzu', color: '#e14b81', ring: 'story', voiceSeed: 7, monogram: 'Y' }, // Yuzu: fan-page protagonist; rendered with var(--oshi)
  ren: { id: 'ren', color: '#00afc4', ring: 'story', voiceSeed: 3, monogram: 'E' }, // Emma
  kai: { id: 'kai', color: '#f0a53a', ring: 'live', voiceSeed: 11, monogram: 'A' }, // Amara: LIVE host
  sora: { id: 'sora', color: '#5b8def', ring: 'story', voiceSeed: 5, monogram: 'P' }, // Priya: 育成 profile
  nagi: { id: 'nagi', color: '#3fb98a', ring: 'story', voiceSeed: 9, monogram: 'J' }, // Jiwoo
  aoi: { id: 'aoi', color: '#8b55d6', ring: 'story', voiceSeed: 13, monogram: 'S' }, // Sofia: /creators persona
};

// A photo may only ship with a licence record; otherwise the build fails here.
for (const p of Object.values(PERSONAS)) {
  if (p.portrait && !(p.portrait.licensed === true && p.portrait.rightsRef)) {
    throw new Error(`Unlicensed portrait for ${p.id}`);
  }
}

/** True once any creator has a portrait: the notes then also say the pictures are AI-generated. */
export const HAS_PORTRAITS = Object.values(PERSONAS).some((p) => p.portrait);
