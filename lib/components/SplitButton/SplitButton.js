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
exports.SplitButton = void 0;
var react_1 = __importStar(require("react"));
var icons_1 = require("../../icons");
var Button_1 = require("../Button/Button");
var Dropdown_1 = require("../Dropdown/Dropdown");
var hooks_1 = require("../../hooks");
var styled_components_1 = __importDefault(require("styled-components"));
var SplitButton = function (_a) {
    var label = _a.label, children = _a.children, rest = __rest(_a, ["label", "children"]);
    var _b = (0, hooks_1.useBooleanState)(), isOpen = _b[0], open = _b[1], close = _b[2];
    var decoratedChildren = react_1.Children.map(children, function (child) {
        if (!(0, react_1.isValidElement)(child))
            return child;
        return (0, react_1.cloneElement)(child, {
            onClick: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (child.props.onClick) {
                    (_a = child.props).onClick.apply(_a, args);
                }
                close();
            },
        });
    });
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(CollapsedButton, __assign({}, rest), label),
        react_1.default.createElement(Dropdown_1.Dropdown, null,
            react_1.default.createElement(CollapsedDropdownButton, __assign({}, rest, { type: "button", onClick: open }),
                react_1.default.createElement(icons_1.ArrowDownIcon, null)),
            isOpen && (react_1.default.createElement(Dropdown_1.Dropdown.Overlay, { verticalPosition: "down", onClose: close },
                react_1.default.createElement(Dropdown_1.Dropdown.ItemCollection, null, decoratedChildren))))));
};
exports.SplitButton = SplitButton;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n"], ["\n  display: inline-flex;\n"])));
var CollapsedButton = (0, styled_components_1.default)(Button_1.Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: 1px white solid;\n"], ["\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: 1px white solid;\n"])));
var CollapsedDropdownButton = (0, styled_components_1.default)(Button_1.Button)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  padding-left: 10px;\n"], ["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  padding-left: 10px;\n"])));
var Item = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, onClick = _a.onClick;
    return (react_1.default.createElement(Dropdown_1.Dropdown.Item, { onClick: onClick, ref: ref }, children));
});
Item.displayName = 'SplitButton.Item';
SplitButton.Item = Item;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=SplitButton.js.map