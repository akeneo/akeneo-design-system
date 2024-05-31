"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../theme");
var EMPTY_IMAGE = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
var ImageContainer = styled_components_1.default.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  object-fit: ", ";\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  border: 1px solid ", ";\n  object-fit: ", ";\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), (0, theme_1.getColor)('grey', 80), function (_a) {
    var fit = _a.fit;
    return fit;
}, function (_a) {
    var isStacked = _a.isStacked;
    return isStacked && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      box-shadow: 1px -1px 0 0 ", ", 2px -2px 0 0 ", ",\n        3px -3px 0 0 ", ", 4px -4px 0 0 ", ";\n    "], ["\n      box-shadow: 1px -1px 0 0 ", ", 2px -2px 0 0 ", ",\n        3px -3px 0 0 ", ", 4px -4px 0 0 ", ";\n    "])), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', 80), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', 80));
}, function (_a) {
    var background = _a.background, isLoading = _a.isLoading;
    return background === 'checkerboard' && !isLoading
        ? (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          background-image: linear-gradient(45deg, ", " 25%, transparent 25%),\n            linear-gradient(135deg, ", " 25%, transparent 25%),\n            linear-gradient(45deg, transparent 75%, ", " 75%),\n            linear-gradient(135deg, transparent 75%, ", " 75%);\n          background-size: 25px 25px; /* Must be a square */\n          background-position: 0 0, 12.5px 0, 12.5px -12.5px, 0px 12.5px; /* Must be half of one side of the square */\n        "], ["\n          background-image: linear-gradient(45deg, ", " 25%, transparent 25%),\n            linear-gradient(135deg, ", " 25%, transparent 25%),\n            linear-gradient(45deg, transparent 75%, ", " 75%),\n            linear-gradient(135deg, transparent 75%, ", " 75%);\n          background-size: 25px 25px; /* Must be a square */\n          background-position: 0 0, 12.5px 0, 12.5px -12.5px, 0px 12.5px; /* Must be half of one side of the square */\n        "])), (0, theme_1.getColor)('grey', 60), (0, theme_1.getColor)('grey', 60), (0, theme_1.getColor)('grey', 60), (0, theme_1.getColor)('grey', 60)) : (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          background: ", ";\n        "], ["\n          background: ", ";\n        "])), (0, theme_1.getColor)(background));
}, function (_a) {
    var isLoading = _a.isLoading;
    return isLoading && theme_1.placeholderStyle;
});
var Image = react_1.default.forwardRef(function (_a, forwardedRef) {
    var _b = _a.fit, fit = _b === void 0 ? 'cover' : _b, _c = _a.isStacked, isStacked = _c === void 0 ? false : _c, _d = _a.background, background = _d === void 0 ? 'white' : _d, src = _a.src, rest = __rest(_a, ["fit", "isStacked", "background", "src"]);
    return (react_1.default.createElement(ImageContainer, __assign({ isLoading: null === src, src: src !== null && src !== void 0 ? src : EMPTY_IMAGE, ref: forwardedRef, fit: fit, isStacked: isStacked, background: background }, rest)));
});
exports.Image = Image;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Image.js.map