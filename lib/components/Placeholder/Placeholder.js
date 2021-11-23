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
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../theme");
var CenteredHelperContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: center;\n  & > * {\n    display: block;\n    margin: auto;\n  }\n  padding: 0 20px;\n"], ["\n  text-align: center;\n  & > * {\n    display: block;\n    margin: auto;\n  }\n  padding: 0 20px;\n"])));
var CenteredHelperTitle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n"], ["\n  color: ", ";\n  font-size: ", ";\n"])), (0, theme_1.getColor)('grey', 140), (0, theme_1.getFontSize)('big'));
var Placeholder = function (_a) {
    var illustration = _a.illustration, title = _a.title, children = _a.children, rest = __rest(_a, ["illustration", "title", "children"]);
    return (react_1.default.createElement(CenteredHelperContainer, __assign({}, rest),
        react_1.default.cloneElement(illustration, { size: 120 }),
        react_1.default.createElement(CenteredHelperTitle, null, title),
        children));
};
exports.Placeholder = Placeholder;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Placeholder.js.map