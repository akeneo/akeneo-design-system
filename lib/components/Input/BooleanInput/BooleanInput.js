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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanInput = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../../theme");
var icons_1 = require("../../../icons");
var BooleanInputContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var BooleanButton = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  height: ", "px;\n  width: ", "px;\n  display: inline-block;\n  line-height: ", "px;\n  text-align: center;\n  vertical-align: middle;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  background: ", ";\n\n  ", "\n"], ["\n  ", "\n  height: ", "px;\n  width: ", "px;\n  display: inline-block;\n  line-height: ", "px;\n  text-align: center;\n  vertical-align: middle;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  background: ", ";\n\n  ", "\n"])), theme_1.CommonStyle, function (_a) {
    var size = _a.size;
    return ('small' === size ? 30 : 40);
}, function (_a) {
    var size = _a.size;
    return ('small' === size ? 48 : 60);
}, function (_a) {
    var size = _a.size;
    return ('small' === size ? 26 : 36);
}, (0, theme_1.getColor)('white'), function (_a) {
    var readOnly = _a.readOnly, invalid = _a.invalid;
    return readOnly
        ? (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          border: 1px solid ", ";\n          color: ", ";\n          &:hover {\n            background: ", ";\n            color: ", ";\n          }\n        "], ["\n          border: 1px solid ", ";\n          color: ", ";\n          &:hover {\n            background: ", ";\n            color: ", ";\n          }\n        "])), (0, theme_1.getColor)('grey', 60), (0, theme_1.getColor)('grey', 80), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', 80)) : (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          border: 1px solid ", ";\n          cursor: pointer;\n          &:hover {\n            background: ", ";\n            color: ", ";\n          }\n        "], ["\n          border: 1px solid ", ";\n          cursor: pointer;\n          &:hover {\n            background: ", ";\n            color: ", ";\n          }\n        "])), invalid ? (0, theme_1.getColor)('red', 100) : (0, theme_1.getColor)('grey', 80), (0, theme_1.getColor)('grey', 20), (0, theme_1.getColor)('grey', 140));
});
var NoButton = (0, styled_components_1.default)(BooleanButton)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border-radius: 2px 0 0 2px;\n  border-right-width: 1px;\n\n  ", "\n"], ["\n  border-radius: 2px 0 0 2px;\n  border-right-width: 1px;\n\n  ", "\n"])), function (_a) {
    var value = _a.value, readOnly = _a.readOnly, invalid = _a.invalid;
    return value === false && (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n      &:active {\n        background: ", ";\n      }\n    "], ["\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n      &:active {\n        background: ", ";\n      }\n    "])), (0, theme_1.getColor)('grey', readOnly ? 80 : 100), invalid ? (0, theme_1.getColor)('red', 100) : (0, theme_1.getColor)('grey', readOnly ? 80 : 100), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', readOnly ? 80 : 120), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', readOnly ? 80 : 140));
});
var YesButton = (0, styled_components_1.default)(BooleanButton)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  border-radius: 0 2px 2px 0;\n  border-left-width: 0;\n\n  ", "\n"], ["\n  border-radius: 0 2px 2px 0;\n  border-left-width: 0;\n\n  ", "\n"])), function (_a) {
    var value = _a.value, readOnly = _a.readOnly, invalid = _a.invalid;
    return value === true && (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n\n      &:active {\n        background: ", ";\n      }\n    "], ["\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n\n      &:active {\n        background: ", ";\n      }\n    "])), (0, theme_1.getColor)('blue', readOnly ? 60 : 100), invalid ? (0, theme_1.getColor)('red', 100) : (0, theme_1.getColor)('grey', readOnly ? 60 : 100), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('blue', readOnly ? 60 : 120), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('blue', readOnly ? 60 : 140));
});
var ClearButton = styled_components_1.default.button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", "\n  border: 0;\n  margin-left: 5px;\n  padding: 5px;\n  vertical-align: middle;\n  background: ", ";\n  color: ", ";\n"], ["\n  ", "\n  border: 0;\n  margin-left: 5px;\n  padding: 5px;\n  vertical-align: middle;\n  background: ", ";\n  color: ", ";\n"])), theme_1.CommonStyle, (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', 100));
var BooleanInputEraseIcon = (0, styled_components_1.default)(icons_1.EraseIcon)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  vertical-align: bottom;\n  margin-right: 6px;\n"], ["\n  vertical-align: bottom;\n  margin-right: 6px;\n"])));
var IconContainer = styled_components_1.default.span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  color: 1px solid ", ";\n  vertical-align: middle;\n  margin-left: 10px;\n"], ["\n  color: 1px solid ", ";\n  vertical-align: middle;\n  margin-left: 10px;\n"])), (0, theme_1.getColor)('grey', 100));
var BooleanInputLockIcon = (0, styled_components_1.default)(icons_1.LockIcon)(templateObject_12 || (templateObject_12 = __makeTemplateObject([""], [""])));
var ContainerInvalid = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: flex;\n  font-weight: 400;\n  padding-right: 20px;\n  color: ", ";\n"], ["\n  display: flex;\n  font-weight: 400;\n  padding-right: 20px;\n  color: ", ";\n"])), (0, theme_1.getColor)('red', 100));
var IconInvalidContainer = styled_components_1.default.span(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  margin: 2px 0;\n  color: ", ";\n"], ["\n  margin: 2px 0;\n  color: ", ";\n"])), (0, theme_1.getColor)('red', 100));
var TextInvalidContainer = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  font-size: 11px;\n  padding-left: 4px;\n  white-space: break-spaces;\n  flex: 1;\n\n  a {\n    color: ", ";\n  }\n"], ["\n  font-size: 11px;\n  padding-left: 4px;\n  white-space: break-spaces;\n  flex: 1;\n\n  a {\n    color: ", ";\n  }\n"])), (0, theme_1.getColor)('red', 100));
var BooleanInput = react_1.default.forwardRef(function (_a, forwardedRef) {
    var value = _a.value, _b = _a.readOnly, readOnly = _b === void 0 ? false : _b, onChange = _a.onChange, _c = _a.clearable, clearable = _c === void 0 ? false : _c, yesLabel = _a.yesLabel, noLabel = _a.noLabel, clearLabel = _a.clearLabel, invalid = _a.invalid, children = _a.children, _d = _a.size, size = _d === void 0 ? 'normal' : _d, rest = __rest(_a, ["value", "readOnly", "onChange", "clearable", "yesLabel", "noLabel", "clearLabel", "invalid", "children", "size"]);
    var handleChange = (0, react_1.useCallback)(function (value) {
        if (!onChange) {
            return;
        }
        onChange(value);
    }, [onChange, readOnly]);
    return (react_1.default.createElement(BooleanInputContainer, __assign({ role: "switch", "aria-checked": null === value ? undefined : value, ref: forwardedRef }, rest),
        react_1.default.createElement(NoButton, { value: value, readOnly: readOnly, "aria-readonly": readOnly, disabled: readOnly, onClick: function () {
                handleChange(false);
            }, title: noLabel, "aria-invalid": invalid, invalid: invalid, size: size }, noLabel),
        react_1.default.createElement(YesButton, { value: value, readOnly: readOnly, "aria-readonly": readOnly, disabled: readOnly, onClick: function () {
                handleChange(true);
            }, title: yesLabel, "aria-invalid": invalid, invalid: invalid, size: size }, yesLabel),
        value !== null && !readOnly && clearable && (react_1.default.createElement(ClearButton, { onClick: function () {
                handleChange(null);
            } },
            react_1.default.createElement(BooleanInputEraseIcon, { size: 16 }),
            clearLabel)),
        readOnly && (react_1.default.createElement(IconContainer, null,
            react_1.default.createElement(BooleanInputLockIcon, { size: 16 }))),
        invalid && children && (react_1.default.createElement(ContainerInvalid, null,
            react_1.default.createElement(IconInvalidContainer, null, react_1.default.cloneElement(react_1.default.createElement(icons_1.DangerIcon, { size: 13 }))),
            react_1.default.createElement(TextInvalidContainer, null, children)))));
});
exports.BooleanInput = BooleanInput;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
//# sourceMappingURL=BooleanInput.js.map