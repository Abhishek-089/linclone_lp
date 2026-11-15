import type { Dictionary } from '@/i18n/dictionaries';
import { STUDIO_APP, STUDIO_LIVE, type StudioPlacement } from '@/lib/site-config';
import { Icon } from '../icons/Icon';

/**
 * LC Studio on the web (studio.linclone.com), which creators can use today
 * while the apps are 近日公開. `button` (hero, join, final): a violet outline
 * button, with the "apps are coming soon" line under it until STUDIO_LIVE
 * flips (the store badges take over then); `compact` (header
 * menu, footer): a short text link. Analytics `studio_web{loc}` via the
 * delegated listener.
 */
export function StudioWebLink({ d, placement, variant = 'button' }: { d: Dictionary; placement: StudioPlacement; variant?: 'button' | 'compact' }) {
  const t = d.creators.web;
  if (variant === 'compact') {
    return (
      <a href={STUDIO_APP.webUrl} className="studio-web-link" data-analytics={`studio_web:${placement}`}>
        <Icon name="language" size={16} />
        {t.short}
        <Icon name="arrow_forward" size={14} />
      </a>
    );
  }
  return (
    <div className="studio-web">
      <a href={STUDIO_APP.webUrl} className="btn-ghost btn-lg studio-web-btn" data-analytics={`studio_web:${placement}`}>
        <Icon name="language" size={20} />
        {t.cta}
      </a>
      {STUDIO_LIVE ? null : <p className="t-small studio-web-note">{t.note}</p>}
    </div>
  );
}
