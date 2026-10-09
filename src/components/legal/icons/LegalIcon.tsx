import { Icon, type IconName } from '@/components/site/icons/Icon';
import { LEGAL_PATHS, type LegalOnlyIconName } from './legal-paths';

/** Every glyph a legal page may name: the site sprite plus the legal-only set. */
export type LegalIconName = IconName | LegalOnlyIconName;

const isLegalOnly = (name: LegalIconName): name is LegalOnlyIconName => Object.hasOwn(LEGAL_PATHS, name);

/**
 * Decorative glyph for the legal pages. Sprite icons go through `Icon`; the
 * legal-only glyphs (scripts/build-icons.mjs → legal-paths.ts) are inlined, so
 * the marketing pages' sprite never grows for them.
 */
export function LegalIcon({ name, size = 20, filled, className }: { name: LegalIconName; size?: number; filled?: boolean; className?: string }) {
  if (!isLegalOnly(name)) return <Icon name={name} size={size} filled={filled} className={className} />;
  return (
    <svg viewBox="0 -960 960 960" width={size} height={size} className={className} aria-hidden="true" focusable="false">
      <path d={LEGAL_PATHS[name]} fill="currentColor" />
    </svg>
  );
}
