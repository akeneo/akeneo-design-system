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
exports.KeyFigureGrid = exports.KeyFigure = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../theme");
var FigureContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 16px;\n  margin: 0 15px 0 3px;\n  display: flex;\n  align-items: center;\n\n  :only-child {\n    margin: 0;\n  }\n"], ["\n  color: ", ";\n  font-size: 16px;\n  margin: 0 15px 0 3px;\n  display: flex;\n  align-items: center;\n\n  :only-child {\n    margin: 0;\n  }\n"])), (0, theme_1.getColor)('brand', 100));
var Figure = function (_a) {
    var label = _a.label, children = _a.children;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        label && "".concat(label, " "),
        react_1.default.createElement(FigureContainer, null, children)));
};
var KeyFigureContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 80px;\n  display: inline-flex;\n  box-sizing: border-box;\n  background: ", ";\n"], ["\n  height: 80px;\n  display: inline-flex;\n  box-sizing: border-box;\n  background: ", ";\n"])), (0, theme_1.getColor)('white'));
var IconContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: 1px ", " solid;\n  margin: 10px 0;\n\n  svg {\n    color: ", ";\n  }\n"], ["\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: 1px ", " solid;\n  margin: 10px 0;\n\n  svg {\n    color: ", ";\n  }\n"])), (0, theme_1.getColor)('grey', 80), (0, theme_1.getColor)('grey', 100));
var ContentContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 15px 20px;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  min-width: 0;\n"], ["\n  margin: 15px 20px;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  min-width: 0;\n"])));
var Title = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"])), (0, theme_1.getColor)('grey', 140), (0, theme_1.getFontSize)('big'));
var Values = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  color: ", ";\n  font-size: 16px;\n"], ["\n  display: flex;\n  color: ", ";\n  font-size: 16px;\n"])), (0, theme_1.getColor)('grey', 100));
var KeyFigure = function (_a) {
    var icon = _a.icon, title = _a.title, children = _a.children, props = __rest(_a, ["icon", "title", "children"]);
    var validIcon = (0, react_1.isValidElement)(icon) && react_1.default.cloneElement(icon, { size: 30 });
    return (react_1.default.createElement(KeyFigureContainer, __assign({}, props),
        react_1.default.createElement(IconContainer, null, validIcon),
        react_1.default.createElement(ContentContainer, null,
            react_1.default.createElement(Title, null, title),
            react_1.default.createElement(Values, null, children))));
};
exports.KeyFigure = KeyFigure;
var KeyFigureGrid = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n"])));
exports.KeyFigureGrid = KeyFigureGrid;
KeyFigure.Figure = Figure;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=KeyFigure.js.map