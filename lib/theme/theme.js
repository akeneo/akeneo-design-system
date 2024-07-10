"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFontSize = exports.getColorAlternative = exports.getColorForLevel = exports.getFontFamily = exports.getColor = void 0;
var getColor = function (color, gradient) {
    return function (_a) {
        var theme = _a.theme;
        return theme.color["".concat(color).concat(gradient !== null && gradient !== void 0 ? gradient : '')];
    };
};
exports.getColor = getColor;
var getColorForLevel = function (level, gradient) {
    return function (_a) {
        var theme = _a.theme;
        return theme.color["".concat(theme.palette[level]).concat(gradient)];
    };
};
exports.getColorForLevel = getColorForLevel;
var getColorAlternative = function (color, gradient) {
    return function (_a) {
        var theme = _a.theme;
        return theme.colorAlternative["".concat(color).concat(gradient !== null && gradient !== void 0 ? gradient : '')];
    };
};
exports.getColorAlternative = getColorAlternative;
var getFontSize = function (fontSize) {
    return function (_a) {
        var theme = _a.theme;
        return theme.fontSize[fontSize];
    };
};
exports.getFontSize = getFontSize;
var getFontFamily = function (fontFamilyType) {
    return function (_a) {
        var theme = _a.theme;
        return theme.fontFamily[fontFamilyType];
    };
};
exports.getFontFamily = getFontFamily;
//# sourceMappingURL=theme.js.map