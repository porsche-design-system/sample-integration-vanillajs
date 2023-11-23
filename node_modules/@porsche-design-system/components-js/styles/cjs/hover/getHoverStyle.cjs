'use strict';

var themeLightStateHover = require('../theme/themeLightStateHover.cjs');
var borderRadiusSmall = require('../border/borderRadiusSmall.cjs');
var borderRadiusMedium = require('../border/borderRadiusMedium.cjs');
var motionDurationShort = require('../motion/motionDurationShort.cjs');
var motionEasingBase = require('../motion/motionEasingBase.cjs');

const offsetHorizontal = '2px';
const getHoverStyle = (opts) => {
    const { borderRadius = 'small' } = opts || {};
    const borderRadiusValue = borderRadius === 'small'
        ? borderRadiusSmall.borderRadiusSmall
        : borderRadius === 'medium'
            ? borderRadiusMedium.borderRadiusMedium
            : borderRadius || borderRadiusSmall.borderRadiusSmall;
    return {
        borderRadius: borderRadiusValue,
        marginLeft: `-${offsetHorizontal}`,
        marginRight: `-${offsetHorizontal}`,
        paddingLeft: offsetHorizontal,
        paddingRight: offsetHorizontal,
        transition: `background var(--p-transition-duration, ${motionDurationShort.motionDurationShort}) ${motionEasingBase.motionEasingBase}`,
        // TODO: how can we test this later in vrt?
        '@media(hover:hover)': {
            '&:hover': {
                // ...frostedGlassStyle,
                background: themeLightStateHover.themeLightStateHover, // hover color is equal for light and dark theme
            },
        },
    };
};

exports.getHoverStyle = getHoverStyle;
