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
exports.Preview = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../theme");
var PreviewContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px;\n  background: ", ";\n  border-radius: 3px;\n  border: 1px solid ", ";\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"], ["\n  padding: 10px;\n  background: ", ";\n  border-radius: 3px;\n  border: 1px solid ", ";\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"])), theme_1.getColor('blue', 10), theme_1.getColor('blue', 40));
var PreviewTitle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-transform: uppercase;\n  font-size: ", ";\n  color: ", ";\n"], ["\n  text-transform: uppercase;\n  font-size: ", ";\n  color: ", ";\n"])), theme_1.getFontSize('small'), theme_1.getColor('blue', 100));
var PreviewList = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  overflow-wrap: break-word;\n  color: ", ";\n"], ["\n  overflow-wrap: break-word;\n  color: ", ";\n"])), theme_1.getColor('grey', 140));
var Highlight = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: bold;\n"], ["\n  color: ", ";\n  font-weight: bold;\n"])), theme_1.getColor('brand', 100));
var Preview = function (_a) {
    var title = _a.title, children = _a.children, rest = __rest(_a, ["title", "children"]);
    return (react_1.default.createElement(PreviewContainer, __assign({}, rest),
        react_1.default.createElement(PreviewTitle, null, title),
        react_1.default.createElement(PreviewList, null, children)));
};
exports.Preview = Preview;
Highlight.displayName = 'Preview.Highlight';
Preview.Highlight = Highlight;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Preview.js.map