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
exports.connectorTheme = void 0;
var theme_1 = require("../../theme");
var connectorTheme = {
    name: 'Connector',
    color: __assign(__assign({}, theme_1.color), { brand20: '#dbdef3', brand40: '#b8bde8', brand60: '#959cdc', brand80: '#727bd1', brand100: '#4f5bc6', brand120: '#3b4494', brand140: '#272d62' }),
    colorAlternative: theme_1.colorAlternative,
    fontSize: theme_1.fontSize,
    palette: theme_1.palette,
    fontFamily: theme_1.fontFamily,
};
exports.connectorTheme = connectorTheme;
//# sourceMappingURL=index.js.map