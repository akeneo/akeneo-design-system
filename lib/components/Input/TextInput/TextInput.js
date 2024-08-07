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
exports.TextInput = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var icons_1 = require("../../../icons");
var shared_1 = require("../../../shared");
var theme_1 = require("../../../theme");
var hooks_1 = require("../../../hooks");
var TextInputContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
var Input = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 40px;\n  border: 1px solid ", ";\n  border-radius: 2px;\n  box-sizing: border-box;\n  background: ", ";\n  color: ", ";\n  font-size: ", ";\n  line-height: 40px;\n  padding: 0 ", " 0 15px;\n  outline-style: none;\n  cursor: ", ";\n  ", "\n  &:focus-within {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &::placeholder {\n    opacity: 1;\n    color: ", ";\n  }\n"], ["\n  width: 100%;\n  height: 40px;\n  border: 1px solid ", ";\n  border-radius: 2px;\n  box-sizing: border-box;\n  background: ", ";\n  color: ", ";\n  font-size: ", ";\n  line-height: 40px;\n  padding: 0 ", " 0 15px;\n  outline-style: none;\n  cursor: ", ";\n  ", "\n  &:focus-within {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &::placeholder {\n    opacity: 1;\n    color: ", ";\n  }\n"])), function (_a) {
    var invalid = _a.invalid;
    return (invalid ? (0, theme_1.getColor)('red', 100) : (0, theme_1.getColor)('grey', 80));
}, function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? (0, theme_1.getColor)('grey', 20) : (0, theme_1.getColor)('white'));
}, function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? (0, theme_1.getColor)('grey', 100) : (0, theme_1.getColor)('grey', 140));
}, (0, theme_1.getFontSize)('default'), function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? '35px' : '15px');
}, function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? 'not-allowed' : 'auto');
}, function (_a) {
    var readOnly = _a.readOnly;
    return readOnly && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n    "], ["\n      overflow: hidden;\n      text-overflow: ellipsis;\n    "])));
}, (0, theme_1.getColor)('blue', 40), (0, theme_1.getColor)('grey', 100));
var ReadOnlyIcon = (0, styled_components_1.default)(icons_1.LockIcon)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 12px;\n  color: ", ";\n"], ["\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 12px;\n  color: ", ";\n"])), (0, theme_1.getColor)('grey', 100));
var CharacterLeftLabel = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", ";\n  align-self: flex-end;\n  color: ", ";\n"], ["\n  font-size: ", ";\n  align-self: flex-end;\n  color: ", ";\n"])), (0, theme_1.getFontSize)('small'), (0, theme_1.getColor)('grey', 100));
var TextInput = (0, react_1.forwardRef)(function (_a, forwardedRef) {
    var invalid = _a.invalid, onChange = _a.onChange, readOnly = _a.readOnly, characterLeftLabel = _a.characterLeftLabel, onSubmit = _a.onSubmit, rest = __rest(_a, ["invalid", "onChange", "readOnly", "characterLeftLabel", "onSubmit"]);
    var internalRef = (0, react_1.useRef)(null);
    forwardedRef = forwardedRef !== null && forwardedRef !== void 0 ? forwardedRef : internalRef;
    var handleChange = (0, react_1.useCallback)(function (event) {
        if (!readOnly && onChange)
            onChange(event.currentTarget.value);
    }, [readOnly, onChange]);
    var handleEnter = function () {
        !readOnly && (onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit());
    };
    (0, hooks_1.useShortcut)(shared_1.Key.Enter, handleEnter, forwardedRef);
    return (react_1.default.createElement(TextInputContainer, null,
        react_1.default.createElement(Input, __assign({ ref: forwardedRef, onChange: handleChange, type: "text", readOnly: readOnly, disabled: readOnly, "aria-invalid": invalid, invalid: invalid, title: rest.value }, rest)),
        readOnly && react_1.default.createElement(ReadOnlyIcon, { size: 16 }),
        characterLeftLabel && react_1.default.createElement(CharacterLeftLabel, null, characterLeftLabel)));
});
exports.TextInput = TextInput;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=TextInput.js.map