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
exports.Block = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../theme");
var IconButton_1 = require("../IconButton/IconButton");
var ActionsContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: none;\n  align-items: center;\n"], ["\n  display: none;\n  align-items: center;\n"])));
var Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  padding: 0 20px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 2px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: inherit;\n  font-size: ", ";\n  font-weight: 400;\n\n  background-color: ", ";\n  border-color: ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    ", " {\n      display: flex;\n    }\n  }\n"], ["\n  box-sizing: border-box;\n  padding: 0 20px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 2px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: inherit;\n  font-size: ", ";\n  font-weight: 400;\n\n  background-color: ", ";\n  border-color: ", ";\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n    ", " {\n      display: flex;\n    }\n  }\n"])), (0, theme_1.getFontSize)('default'), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', 80), (0, theme_1.getColor)('grey', 140), (0, theme_1.getColor)('grey', 20), ActionsContainer);
var Block = react_1.default.forwardRef(function (_a, forwardedRef) {
    var action = _a.action, ariaDescribedBy = _a.ariaDescribedBy, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, children = _a.children, rest = __rest(_a, ["action", "ariaDescribedBy", "ariaLabel", "ariaLabelledBy", "children"]);
    return (react_1.default.createElement(Container, __assign({ "aria-describedby": ariaDescribedBy, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ref: forwardedRef }, rest),
        react_1.default.createElement("div", null, react_1.default.Children.map(children, function (child) {
            var _a;
            if ((0, react_1.isValidElement)(child)) {
                return react_1.default.cloneElement(child, { size: (_a = child.props.size) !== null && _a !== void 0 ? _a : 18 });
            }
            return child;
        })),
        react_1.default.createElement(ActionsContainer, null, (0, react_1.isValidElement)(action) && action.type === IconButton_1.IconButton
            ? (0, react_1.cloneElement)(action, {
                level: 'tertiary',
                ghost: 'borderless',
                size: 'small',
            })
            : action)));
});
exports.Block = Block;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Block.js.map