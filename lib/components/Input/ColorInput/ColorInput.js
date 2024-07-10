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
exports.ColorInput = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var icons_1 = require("../../../icons");
var theme_1 = require("../../../theme");
var Color_1 = require("./Color");
var ColorInputContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 12px;\n  border: 1px solid ", ";\n  border-radius: 2px;\n  height: 74px;\n  gap: 10px;\n  outline-style: none;\n  box-sizing: border-box;\n  background: ", ";\n  cursor: ", ";\n  overflow: hidden;\n  ", "\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 12px;\n  border: 1px solid ", ";\n  border-radius: 2px;\n  height: 74px;\n  gap: 10px;\n  outline-style: none;\n  box-sizing: border-box;\n  background: ", ";\n  cursor: ", ";\n  overflow: hidden;\n  ", "\n"])), function (_a) {
    var invalid = _a.invalid;
    return (invalid ? (0, theme_1.getColor)('red', 100) : (0, theme_1.getColor)('grey', 80));
}, function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? (0, theme_1.getColor)('grey', 20) : (0, theme_1.getColor)('white'));
}, function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? 'not-allowed' : 'auto');
}, function (_a) {
    var readOnly = _a.readOnly;
    return !readOnly && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      &:focus-within {\n        box-shadow: 0 0 0 2px ", ";\n      }\n    "], ["\n      &:focus-within {\n        box-shadow: 0 0 0 2px ", ";\n      }\n    "])), (0, theme_1.getColor)('blue', 40));
});
var ColorPicker = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 47px;\n  height: 47px;\n  border: none;\n  padding: 0;\n  ::-moz-color-swatch-wrapper {\n    padding: 0;\n  }\n  ::-webkit-color-swatch-wrapper {\n    padding: 0;\n  }\n  ::-webkit-color-swatch {\n    border: none;\n  }\n  ::-moz-color-swatch {\n    border: none;\n  }\n"], ["\n  width: 47px;\n  height: 47px;\n  border: none;\n  padding: 0;\n  ::-moz-color-swatch-wrapper {\n    padding: 0;\n  }\n  ::-webkit-color-swatch-wrapper {\n    padding: 0;\n  }\n  ::-webkit-color-swatch {\n    border: none;\n  }\n  ::-moz-color-swatch {\n    border: none;\n  }\n"])));
var TextInput = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: none;\n  flex: 1;\n  outline: none;\n  color: ", ";\n  background: transparent;\n  cursor: ", ";\n  height: 100%;\n\n  &::placeholder {\n    opacity: 1;\n    color: ", ";\n  }\n"], ["\n  border: none;\n  flex: 1;\n  outline: none;\n  color: ", ";\n  background: transparent;\n  cursor: ", ";\n  height: 100%;\n\n  &::placeholder {\n    opacity: 1;\n    color: ", ";\n  }\n"])), function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? (0, theme_1.getColor)('grey', 100) : (0, theme_1.getColor)('grey', 140));
}, function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? 'not-allowed' : 'auto');
}, (0, theme_1.getColor)('grey', 100));
var ReadOnlyIcon = (0, styled_components_1.default)(icons_1.LockIcon)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-left: 4px;\n"], ["\n  margin-left: 4px;\n"])));
var ErrorIcon = (0, styled_components_1.default)(icons_1.DangerIcon)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 0 15px 0 16px;\n  box-sizing: content-box;\n"], ["\n  padding: 0 15px 0 16px;\n  box-sizing: content-box;\n"])));
var ColorInput = (0, react_1.forwardRef)(function (_a, forwardedRef) {
    var invalid = _a.invalid, onChange = _a.onChange, value = _a.value, readOnly = _a.readOnly, rest = __rest(_a, ["invalid", "onChange", "value", "readOnly"]);
    var handleChange = (0, react_1.useCallback)(function (event) {
        if (!readOnly && onChange)
            onChange(event.currentTarget.value);
    }, [readOnly, onChange]);
    if (!value.startsWith('#')) {
        value = "#".concat(value);
    }
    return (react_1.default.createElement(ColorInputContainer, { invalid: invalid || !(0, Color_1.isValidColor)(value), readOnly: readOnly },
        (0, Color_1.isValidColor)(value) ? (react_1.default.createElement(ColorPicker, { type: "color", value: (0, Color_1.convertColorToLongHexColor)(value), onChange: handleChange, disabled: readOnly })) : (react_1.default.createElement(ErrorIcon, { role: "alert", size: 16 })),
        react_1.default.createElement(TextInput, __assign({ ref: forwardedRef, value: value, onChange: handleChange, type: "text", readOnly: readOnly, disabled: readOnly, "aria-invalid": invalid || !(0, Color_1.isValidColor)(value) }, rest)),
        readOnly && react_1.default.createElement(ReadOnlyIcon, { size: 16 })));
});
exports.ColorInput = ColorInput;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=ColorInput.js.map