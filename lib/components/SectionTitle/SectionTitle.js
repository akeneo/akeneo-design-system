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
exports.SectionTitle = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../theme");
var __1 = require("..");
var SectionTitleContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  height: 44px;\n  line-height: 44px;\n  border-bottom: 1px solid ", ";\n"], ["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  height: 44px;\n  line-height: 44px;\n  border-bottom: 1px solid ", ";\n"])), theme_1.getColor('grey', 140));
var Title = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: 400;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: 400;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"])), theme_1.getColor('grey', 140), theme_1.getFontSize('big'));
var Spacer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-grow: 1;\n"], ["\n  flex-grow: 1;\n"])));
var Separator = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-left: 1px solid ", ";\n  margin: 0 10px;\n  height: 24px;\n"], ["\n  border-left: 1px solid ", ";\n  margin: 0 10px;\n  height: 24px;\n"])), theme_1.getColor('grey', 100));
var Information = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: normal;\n  color: ", ";\n"], ["\n  font-size: ", ";\n  font-weight: normal;\n  color: ", ";\n"])), theme_1.getFontSize('default'), theme_1.getColor('brand', 100));
var SectionTitle = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var decoratedChildren = react_1.default.Children.map(children, function (child) {
        if (react_1.default.isValidElement(child) && child.type === __1.IconButton) {
            return react_1.default.cloneElement(child, {
                level: 'tertiary',
                size: 'small',
                ghost: 'borderless',
            });
        }
        if (react_1.default.isValidElement(child) && child.type === __1.Button) {
            return react_1.default.cloneElement(child, {
                level: 'tertiary',
                size: 'small',
                ghost: true,
            });
        }
        return child;
    });
    return react_1.default.createElement(SectionTitleContainer, __assign({}, rest), decoratedChildren);
};
exports.SectionTitle = SectionTitle;
SectionTitle.Title = Title;
SectionTitle.Spacer = Spacer;
SectionTitle.Separator = Separator;
SectionTitle.Information = Information;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=SectionTitle.js.map