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
exports.TableInputBoolean = void 0;
var react_1 = __importDefault(require("react"));
var Badge_1 = require("../../../Badge/Badge");
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../../../theme");
var Dropdown_1 = require("../../../Dropdown/Dropdown");
var icons_1 = require("../../../../icons");
var hooks_1 = require("../../../../hooks");
var IconButton_1 = require("../../../IconButton/IconButton");
var TableInputReadOnlyCell_1 = require("../TableInputReadOnlyCell");
var TableInputContext_1 = require("../TableInputContext");
var BooleanButtonDropdown = (0, styled_components_1.default)(Dropdown_1.Dropdown)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  color: ", ";\n"], ["\n  width: 100%;\n  color: ", ";\n"])), (0, theme_1.getColor)('grey', 140));
var BooleanButton = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  width: 100%;\n  background: none;\n  border: none;\n  text-align: left;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10px;\n  height: 39px;\n  line-height: 39px;\n  align-items: center;\n  cursor: pointer;\n  background: none;\n\n  ", ";\n\n  ", ";\n"], ["\n  color: ", ";\n  width: 100%;\n  background: none;\n  border: none;\n  text-align: left;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10px;\n  height: 39px;\n  line-height: 39px;\n  align-items: center;\n  cursor: pointer;\n  background: none;\n\n  ", ";\n\n  ", ";\n"])), (0, theme_1.getColor)('grey', 140), function (_a) {
    var highlighted = _a.highlighted, inError = _a.inError;
    return highlighted &&
        !inError && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "], ["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "])), (0, theme_1.getColor)('green', 10), (0, theme_1.getColor)('green', 80));
}, function (_a) {
    var inError = _a.inError;
    return inError && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "], ["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "])), (0, theme_1.getColor)('red', 10), (0, theme_1.getColor)('red', 80));
});
var IconsPart = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-flex;\n  gap: 10px;\n  position: absolute;\n  right: 10px;\n  height: 39px;\n  align-items: center;\n"], ["\n  display: inline-flex;\n  gap: 10px;\n  position: absolute;\n  right: 10px;\n  height: 39px;\n  align-items: center;\n"])));
var TableInputBoolean = function (_a) {
    var value = _a.value, onChange = _a.onChange, yesLabel = _a.yesLabel, noLabel = _a.noLabel, _b = _a.highlighted, highlighted = _b === void 0 ? false : _b, clearLabel = _a.clearLabel, openDropdownLabel = _a.openDropdownLabel, _c = _a.inError, inError = _c === void 0 ? false : _c, rest = __rest(_a, ["value", "onChange", "yesLabel", "noLabel", "highlighted", "clearLabel", "openDropdownLabel", "inError"]);
    var _d = (0, hooks_1.useBooleanState)(false), isOpen = _d[0], open = _d[1], close = _d[2];
    var handleChange = function (value) {
        onChange(value);
        close();
    };
    var YesBadge = react_1.default.createElement(Badge_1.Badge, { level: "primary" }, yesLabel);
    var NoBadge = react_1.default.createElement(Badge_1.Badge, { level: "tertiary" }, noLabel);
    var readOnly = react_1.default.useContext(TableInputContext_1.TableInputContext).readOnly;
    if (readOnly) {
        return (react_1.default.createElement(TableInputReadOnlyCell_1.TableInputReadOnlyCell, { title: value !== null ? (value ? yesLabel : noLabel) : undefined }, value !== null && (value ? YesBadge : NoBadge)));
    }
    return (react_1.default.createElement(BooleanButtonDropdown, __assign({}, rest),
        react_1.default.createElement(BooleanButton, { tabIndex: -1, highlighted: highlighted, onClick: function (e) {
                e.preventDefault();
                open();
            }, inError: inError },
            value !== null && (value ? YesBadge : NoBadge),
            "\u00A0"),
        react_1.default.createElement(IconsPart, null,
            value !== null && !isOpen && (react_1.default.createElement(IconButton_1.IconButton, { icon: react_1.default.createElement(icons_1.CloseIcon, null), size: "small", title: clearLabel, ghost: "borderless", level: "tertiary", onClick: function () { return handleChange(null); } })),
            react_1.default.createElement(IconButton_1.IconButton, { icon: react_1.default.createElement(icons_1.ArrowDownIcon, null), size: "small", title: openDropdownLabel, ghost: "borderless", level: "tertiary", onClick: open })),
        isOpen && (react_1.default.createElement(Dropdown_1.Dropdown.Overlay, { onClose: close, dropdownOpenerVisible: true, horizontalPosition: "left" },
            react_1.default.createElement(Dropdown_1.Dropdown.ItemCollection, null,
                react_1.default.createElement(Dropdown_1.Dropdown.Item, { onClick: function () { return handleChange(true); } }, YesBadge),
                react_1.default.createElement(Dropdown_1.Dropdown.Item, { onClick: function () { return handleChange(false); } }, NoBadge))))));
};
exports.TableInputBoolean = TableInputBoolean;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=TableInputBoolean.js.map