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
exports.MainNavigationItem = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../../theme");
var Tags_1 = require("../../Tags/Tags");
var Link = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  box-sizing: border-box;\n  cursor: ", ";\n  display: flex;\n  flex-direction: column;\n  font-size: ", ";\n  height: 70px;\n  justify-content: center;\n  line-height: 1.15;\n  margin: 0;\n  outline-style: none;\n  padding: 7px;\n  position: relative;\n  text-decoration: none;\n  width: 80px;\n\n  border-left: 4px solid\n    ", ";\n\n  color: ", ";\n\n  svg {\n    color: ", ";\n  }\n\n  :hover {\n    border-color: ", ";\n    color: ", ";\n    svg {\n      color: ", ";\n    }\n  }\n\n  :focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n    outline: none;\n  }\n"], ["\n  align-items: center;\n  box-sizing: border-box;\n  cursor: ", ";\n  display: flex;\n  flex-direction: column;\n  font-size: ", ";\n  height: 70px;\n  justify-content: center;\n  line-height: 1.15;\n  margin: 0;\n  outline-style: none;\n  padding: 7px;\n  position: relative;\n  text-decoration: none;\n  width: 80px;\n\n  border-left: 4px solid\n    ",
    ";\n\n  color: ",
    ";\n\n  svg {\n    color: ",
    ";\n  }\n\n  :hover {\n    border-color: ", ";\n    color: ", ";\n    svg {\n      color: ", ";\n    }\n  }\n\n  :focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n    outline: none;\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
}, theme_1.getFontSize('small'), function (_a) {
    var active = _a.active, disabled = _a.disabled;
    return !disabled && active ? theme_1.getColor('brand', 100) : 'transparent';
}, function (_a) {
    var active = _a.active, disabled = _a.disabled;
    return disabled ? theme_1.getColor('grey', 100) : active ? theme_1.getColor('brand', 100) : theme_1.getColor('grey', 120);
}, function (_a) {
    var active = _a.active, disabled = _a.disabled;
    return disabled ? theme_1.getColor('grey', 80) : active ? theme_1.getColor('brand', 100) : theme_1.getColor('grey', 100);
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled && theme_1.getColor('brand', 100);
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled && theme_1.getColor('brand', 100);
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled && theme_1.getColor('brand', 100);
}, theme_1.getColor('blue', 40));
var Label = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 7px;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  margin-top: 7px;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var TagContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 7px;\n  width: 50%;\n"], ["\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 7px;\n  width: 50%;\n"])));
var MainNavigationItem = react_1.default.forwardRef(function (_a, forwardedRef) {
    var children = _a.children, href = _a.href, icon = _a.icon, _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, onClick = _a.onClick, rest = __rest(_a, ["children", "href", "icon", "active", "disabled", "onClick"]);
    var handleClick = function (event) {
        if (disabled) {
            event.preventDefault();
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    };
    var tag = null;
    var taglessChildren = react_1.default.Children.map(children, function (child) {
        if (react_1.default.isValidElement(child) && child.type === Tags_1.Tag) {
            if (null === tag) {
                tag = child;
                return null;
            }
            throw new Error('You can only provide one component of type Tag.');
        }
        return child;
    });
    return (react_1.default.createElement(Link, __assign({ ref: forwardedRef, href: disabled ? undefined : href, active: active, disabled: disabled, "aria-disabled": disabled, onClick: handleClick }, rest),
        react_1.default.cloneElement(icon, { size: 20 }),
        tag && react_1.default.createElement(TagContainer, null, tag),
        react_1.default.createElement(Label, null, taglessChildren)));
});
exports.MainNavigationItem = MainNavigationItem;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=MainNavigationItem.js.map