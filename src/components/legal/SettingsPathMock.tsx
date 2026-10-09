import type { SettingsPathIllustration } from '@/content/legal/types';
import { PhoneFrame, Screen } from '@/components/mockups/kit';
import { Icon } from '@/components/site/icons/Icon';

/**
 * A light Cream Glass settings screen (spec §4.8 kit) that points at one row:
 * the delete-user "in the app" steps. Faceless, no numbers; every label comes
 * from the content file so it can follow the real app copy.
 */
export function SettingsPathMock({ data }: { data: SettingsPathIllustration }) {
  return (
    <div className="legal-mock">
      <PhoneFrame size={{ mobile: 220, desktop: 248 }} label={data.alt} statusTime="9:41">
        <Screen theme="cream">
          <div className="lm-screen">
            <div className="lm-nav">
              <span className="lm-back">
                <Icon name="arrow_back" size={22} />
              </span>
              <span className="lm-title">{data.screenTitle}</span>
            </div>
            {data.groups.map((g) => (
              <div key={g.label} className="lm-group">
                <span className="lm-group-label">{g.label}</span>
                <div className="lm-card">
                  {g.rows.map((row) => {
                    const hit = row === data.highlight;
                    return (
                      <span key={row} className="lm-row" data-hit={hit ? '' : undefined}>
                        <span className="lm-row-label">{row}</span>
                        <Icon name="chevron_right" size={18} />
                        {hit ? <span className="lm-tap" data-loop="" /> : null}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Screen>
      </PhoneFrame>
      {data.caption ? <p className="legal-mock-caption">{data.caption}</p> : null}
    </div>
  );
}
