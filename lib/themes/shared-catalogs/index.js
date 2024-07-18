"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedCatalogsTheme = void 0;
var theme_1 = require("../../theme");
var sharedCatalogsTheme = {
    name: 'Shared Catalogs',
    color: __assign(__assign({}, theme_1.color), { brand20: '#fdf0d8', brand40: '#fce1b2', brand60: '#fbd28b', brand80: '#fac365', brand100: '#f9b53f', brand120: '#c79032', brand140: '#956c25' }),
    colorAlternative: theme_1.colorAlternative,
    fontSize: theme_1.fontSize,
    palette: theme_1.palette,
    fontFamily: theme_1.fontFamily,
};
exports.sharedCatalogsTheme = sharedCatalogsTheme;
//# sourceMappingURL=index.js.map