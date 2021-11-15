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
exports.SubNavigationItem = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../../theme");
var Tags_1 = require("../../Tags/Tags");
var Container = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  cursor: ", ";\n  color: ", ";\n  display: flex;\n  height: 38px;\n  margin: 0;\n  outline: none;\n  text-decoration: none;\n  overflow: hidden;\n  line-height: 38px;\n\n  :hover {\n    color: ", ";\n  }\n  :focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n"], ["\n  box-sizing: border-box;\n  cursor: ", ";\n  color: ", ";\n  display: flex;\n  height: 38px;\n  margin: 0;\n  outline: none;\n  text-decoration: none;\n  overflow: hidden;\n  line-height: 38px;\n\n  :hover {\n    color: ", ";\n  }\n  :focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
}, function (_a) {
    var active = _a.active, disabled = _a.disabled;
    return disabled ? (0, theme_1.getColor)('grey', 100) : active ? (0, theme_1.getColor)('brand', 100) : (0, theme_1.getColor)('grey', 140);
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled && (0, theme_1.getColor)('brand', 100);
}, (0, theme_1.getColor)('blue', 40));
var Label = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-shrink: 0;\n  margin-right: ", ";\n  max-width: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: ", ";\n"], ["\n  flex-shrink: 0;\n  margin-right: ", ";\n  max-width: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: ", ";\n"])), function (_a) {
    var hasTag = _a.hasTag;
    return (hasTag ? '10px' : '0px');
}, function (_a) {
    var hasTag = _a.hasTag;
    return (hasTag ? '84%' : '100%');
}, (0, theme_1.getFontSize)('big'));
var SubNavigationItem = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, href = _a.href, disabled = _a.disabled, active = _a.active, onClick = _a.onClick, rest = __rest(_a, ["children", "href", "disabled", "active", "onClick"]);
    var handleClick = function (event) {
        if (disabled) {
            event.preventDefault();
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    };
    var tag = null;
    var label = react_1.default.Children.map(children, function (child) {
        if (react_1.default.isValidElement(child) && child.type === Tags_1.Tag) {
            if (null === tag) {
                tag = child;
                return null;
            }
            throw new Error('You can only provide one component of type Tag.');
        }
        return child;
    });
    return (react_1.default.createElement(Container, __assign({ ref: forwardedRef, href: disabled ? undefined : href, active: active, disabled: disabled, "aria-disabled": disabled, onClick: handleClick }, rest),
        react_1.default.createElement(Label, { hasTag: !!tag }, label),
        tag));
});
exports.SubNavigationItem = SubNavigationItem;
var templateObject_1, templateObject_2;
//# sourceMappingURL=SubNavigationItem.js.map