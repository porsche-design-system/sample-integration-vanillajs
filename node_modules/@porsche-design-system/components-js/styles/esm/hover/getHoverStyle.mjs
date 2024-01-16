import { themeLightStateHover } from '../theme/themeLightStateHover.mjs';
import { borderRadiusSmall } from '../border/borderRadiusSmall.mjs';
import { borderRadiusMedium } from '../border/borderRadiusMedium.mjs';
import { motionDurationShort } from '../motion/motionDurationShort.mjs';
import { motionEasingBase } from '../motion/motionEasingBase.mjs';

const offsetHorizontal = '2px';
const getHoverStyle = (opts) => {
    const { borderRadius = 'small' } = opts || {};
    const borderRadiusValue = borderRadius === 'small'
        ? borderRadiusSmall
        : borderRadius === 'medium'
            ? borderRadiusMedium
            : borderRadius || borderRadiusSmall;
    return {
        borderRadius: borderRadiusValue, // it's visually being reflected on both (when placed here), element and hover
        marginLeft: `-${offsetHorizontal}`,
        marginRight: `-${offsetHorizontal}`,
        paddingLeft: offsetHorizontal,
        paddingRight: offsetHorizontal,
        transition: `background var(--p-transition-duration, ${motionDurationShort}) ${motionEasingBase}`,
        // TODO: how can we test this later in vrt?
        '@media(hover:hover)': {
            '&:hover': {
                // ...frostedGlassStyle,
                background: themeLightStateHover, // hover color is equal for light and dark theme
            },
        },
    };
};

export { getHoverStyle };
