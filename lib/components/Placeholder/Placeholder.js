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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.Placeholder = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../theme");
var CenteredHelperContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: ", "px;\n"], ["\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: ", "px;\n"])), function (_a) {
    var size = _a.size;
    return ('large' === size ? 20 : 5);
});
var CenteredHelperTitle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  text-align: center;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  text-align: center;\n"])), (0, theme_1.getColor)('grey', 140), function (_a) {
    var size = _a.size;
    return (0, theme_1.getFontSize)('large' === size ? 'title' : 'big');
}, function (_a) {
    var size = _a.size;
    return (0, theme_1.getFontSize)('large' === size ? 'title' : 'big');
});
var Placeholder = function (_a) {
    var illustration = _a.illustration, title = _a.title, _b = _a.size, size = _b === void 0 ? 'default' : _b, children = _a.children, rest = __rest(_a, ["illustration", "title", "size", "children"]);
    return (react_1.default.createElement(CenteredHelperContainer, __assign({ size: size }, rest),
        (0, react_1.cloneElement)(illustration, { size: 'large' === size ? 256 : 120 }),
        react_1.default.createElement(CenteredHelperTitle, { size: size }, title),
        children));
};
exports.Placeholder = Placeholder;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Placeholder.js.map