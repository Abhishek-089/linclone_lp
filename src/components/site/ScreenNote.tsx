import type { Dictionary } from '@/i18n/dictionaries';
import { LAUNCH } from '@/lib/site-config';
import { HAS_PORTRAITS } from '@/lib/personas';

/** Required under every mockup cluster (spec §4.2, §1.2.8). */
export function ScreenNote({ d, tone = 'light' }: { d: Dictionary; tone?: 'light' | 'dark' }) {
  return (
    <p className="t-small screen-note" data-tone={tone}>
      {HAS_PORTRAITS ? d.common.screenNoteAi : d.common.screenNote}
      {!LAUNCH.v3PublicOnStores ? (
        <>
          <br />
          {d.common.devNote}
        </>
      ) : null}
    </p>
  );
}
