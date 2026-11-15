import type { CSSProperties, ReactNode } from 'react';
import { PhoneFrame } from './PhoneFrame';

/** Width of a whole phone image on mobile (px): a full screen that fits a card without crowding it. */
export const PHONE_SLICE_W = 260;

type ScreenSliceProps = {
  label: string;
  width: { mobile: number; desktop?: number };
  /** A window onto the screen, in screen px. Omit it to show the whole screen in a phone, never cut. */
  crop?: { y: number; h: number };
  radius?: number;
  children: ReactNode;
};

/**
 * A 390×844 screen at `width` px (spec §4.8). Without `crop`: the whole
 * screen in a phone frame, status bar and island included (every phone image
 * on mobile). With `crop`: a window onto part of the screen, for small UI
 * snippets inside cards; `crop.y`/`crop.h` are in screen px. Keep the
 * effective scale ≥0.65 when the screen carries meaning (`width.mobile` ≥ 254).
 */
export function ScreenSlice({ label, width, crop, radius = 28, children }: ScreenSliceProps) {
  if (!crop) {
    return (
      <PhoneFrame size={{ mobile: width.mobile, desktop: width.desktop ?? width.mobile }} label={label} theme="auto">
        {children}
      </PhoneFrame>
    );
  }
  const style = {
    '--sw-m': width.mobile,
    '--sw-d': width.desktop ?? width.mobile,
    '--crop-y': crop.y,
    '--crop-h': crop.h,
    borderRadius: radius,
  } as CSSProperties;
  return (
    <figure role="img" aria-label={label} className="screen-slice" style={style} data-nosnippet="">
      <div className="screen-slice-inner" aria-hidden="true">
        {children}
      </div>
    </figure>
  );
}
