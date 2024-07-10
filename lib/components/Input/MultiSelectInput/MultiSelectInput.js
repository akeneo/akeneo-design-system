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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelectInput = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var shared_1 = require("../../../shared");
var common_1 = require("../common");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var theme_1 = require("../../../theme");
var icons_1 = require("../../../icons");
var ChipInput_1 = require("./ChipInput");
var usePagination_1 = require("../../../hooks/usePagination");
var MultiSelectInputContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n\n  & input[type='text'] {\n    cursor: ", ";\n    background: ", ";\n\n    &:focus {\n      z-index: 2;\n    }\n  }\n"], ["\n  width: 100%;\n\n  & input[type='text'] {\n    cursor: ", ";\n    background: ", ";\n\n    &:focus {\n      z-index: 2;\n    }\n  }\n"])), function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? 'not-allowed' : 'pointer');
}, function (_a) {
    var value = _a.value, readOnly = _a.readOnly;
    return (null === value && readOnly ? (0, theme_1.getColor)('grey', 20) : 'transparent');
});
var InputContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var ActionContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  right: 8px;\n  top: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"], ["\n  position: absolute;\n  right: 8px;\n  top: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"])));
var OptionContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: ", ";\n  height: 34px;\n  padding: 0 20px;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 34px;\n\n  &:focus {\n    color: ", ";\n  }\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n  &:active {\n    color: ", ";\n    font-weight: 700;\n  }\n  &:disabled {\n    color: ", ";\n  }\n"], ["\n  background: ", ";\n  height: 34px;\n  padding: 0 20px;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 34px;\n\n  &:focus {\n    color: ", ";\n  }\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n  &:active {\n    color: ", ";\n    font-weight: 700;\n  }\n  &:disabled {\n    color: ", ";\n  }\n"])), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', 120), (0, theme_1.getColor)('grey', 120), (0, theme_1.getColor)('grey', 20), (0, theme_1.getColor)('brand', 140), (0, theme_1.getColor)('brand', 100), (0, theme_1.getColor)('grey', 100));
var EmptyResultContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: ", ";\n  height: 20px;\n  padding: 0 20px;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 20px;\n  text-align: center;\n"], ["\n  background: ", ";\n  height: 20px;\n  padding: 0 20px;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 20px;\n  text-align: center;\n"])), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', 100));
var OptionCollection = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  max-height: 320px;\n  overflow-y: auto;\n"], ["\n  max-height: 320px;\n  overflow-y: auto;\n"])));
var Option = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return react_1.default.createElement("span", __assign({}, rest), children);
};
var MultiSelectInput = function (_a) {
    var id = _a.id, placeholder = _a.placeholder, invalid = _a.invalid, value = _a.value, _b = _a.invalidValue, invalidValue = _b === void 0 ? [] : _b, emptyResultLabel = _a.emptyResultLabel, _c = _a.children, children = _c === void 0 ? [] : _c, onChange = _a.onChange, removeLabel = _a.removeLabel, onSubmit = _a.onSubmit, openLabel = _a.openLabel, _d = _a.readOnly, readOnly = _d === void 0 ? false : _d, verticalPosition = _a.verticalPosition, onNextPage = _a.onNextPage, onSearchChange = _a.onSearchChange, _e = _a.disableInternalSearch, disableInternalSearch = _e === void 0 ? false : _e, _f = _a.lockedValues, lockedValues = _f === void 0 ? [] : _f, ariaLabelledby = _a["aria-labelledby"], rest = __rest(_a, ["id", "placeholder", "invalid", "value", "invalidValue", "emptyResultLabel", "children", "onChange", "removeLabel", "onSubmit", "openLabel", "readOnly", "verticalPosition", "onNextPage", "onSearchChange", "disableInternalSearch", "lockedValues", 'aria-labelledby']);
    var _g = (0, react_1.useState)(''), searchValue = _g[0], setSearchValue = _g[1];
    var _h = (0, hooks_1.useBooleanState)(), dropdownIsOpen = _h[0], openOverlay = _h[1], closeOverlay = _h[2];
    var inputRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    var optionsContainerRef = (0, react_1.useRef)(null);
    var lastOptionRef = (0, react_1.useRef)(null);
    var validChildren = react_1.default.Children.toArray(children).filter(function (child) {
        return (0, react_1.isValidElement)(child);
    });
    var indexedChips = validChildren.reduce(function (indexedChips, _a) {
        var _b = _a.props, value = _b.value, children = _b.children;
        if ('string' !== typeof children) {
            throw new Error('Multi select only accepts string as Option');
        }
        if (value in indexedChips) {
            throw new Error("Duplicate option value ".concat(value));
        }
        indexedChips[value] = { code: value, label: children };
        return indexedChips;
    }, {});
    var filteredChildren = disableInternalSearch
        ? validChildren
        : validChildren.filter(function (_a) {
            var props = _a.props;
            var childValue = props.value;
            var optionValue = childValue + props.children;
            return !value.includes(childValue) && optionValue.toLowerCase().includes(searchValue.toLowerCase());
        });
    var handleEnter = function () {
        if (filteredChildren.length > 0 && dropdownIsOpen) {
            var newValue = filteredChildren[0].props.value;
            onChange === null || onChange === void 0 ? void 0 : onChange((0, shared_1.arrayUnique)(__spreadArray(__spreadArray([], value, true), [newValue], false)));
            setSearchValue('');
            onSearchChange === null || onSearchChange === void 0 ? void 0 : onSearchChange('');
            closeOverlay();
        }
        else {
            !readOnly && (onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit());
        }
    };
    var handleSearch = function (value) {
        setSearchValue(value);
        onSearchChange === null || onSearchChange === void 0 ? void 0 : onSearchChange(value);
        openOverlay();
    };
    var handleRemove = function (chipsCode) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value.filter(function (value) { return value !== chipsCode; }));
    };
    var handleOptionClick = function (newValue) { return function () {
        var _a;
        onChange === null || onChange === void 0 ? void 0 : onChange((0, shared_1.arrayUnique)(__spreadArray(__spreadArray([], value, true), [newValue], false)));
        setSearchValue('');
        onSearchChange === null || onSearchChange === void 0 ? void 0 : onSearchChange('');
        closeOverlay();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }; };
    var handleBlur = function () {
        var _a;
        setSearchValue('');
        onSearchChange === null || onSearchChange === void 0 ? void 0 : onSearchChange('');
        closeOverlay();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    };
    (0, usePagination_1.usePagination)(optionsContainerRef, lastOptionRef, onNextPage, dropdownIsOpen);
    var handleFocus = function () { return openOverlay(); };
    (0, hooks_1.useShortcut)(shared_1.Key.Enter, handleEnter, inputRef);
    (0, hooks_1.useShortcut)(shared_1.Key.Escape, handleBlur, inputRef);
    return (react_1.default.createElement(MultiSelectInputContainer, __assign({ ref: containerRef, readOnly: readOnly, value: value }, rest),
        react_1.default.createElement(InputContainer, null,
            react_1.default.createElement(ChipInput_1.ChipInput, { ref: inputRef, id: id, placeholder: placeholder, value: value.map(function (chipCode) { var _a; return (_a = indexedChips[chipCode]) !== null && _a !== void 0 ? _a : { code: chipCode, label: chipCode }; }), invalidValue: invalidValue, searchValue: searchValue, removeLabel: removeLabel, readOnly: readOnly, invalid: invalid, onSearchChange: handleSearch, onRemove: handleRemove, onFocus: handleFocus, lockedValues: lockedValues }),
            !readOnly && (react_1.default.createElement(ActionContainer, null,
                react_1.default.createElement(components_1.IconButton, { ghost: "borderless", level: "tertiary", size: "small", icon: react_1.default.createElement(icons_1.ArrowDownIcon, null), title: openLabel, onClick: openOverlay, onFocus: handleBlur, tabIndex: 0 })))),
        dropdownIsOpen && !readOnly && (react_1.default.createElement(common_1.Overlay, { parentRef: containerRef, onClose: handleBlur },
            react_1.default.createElement(OptionCollection, { ref: optionsContainerRef }, 0 === filteredChildren.length ? (react_1.default.createElement(EmptyResultContainer, null, emptyResultLabel)) : (filteredChildren.map(function (child, index) {
                return (react_1.default.createElement(OptionContainer, { key: child.props.value, onClick: handleOptionClick(child.props.value), ref: index === filteredChildren.length - 1 ? lastOptionRef : undefined }, react_1.default.cloneElement(child)));
            })))))));
};
exports.MultiSelectInput = MultiSelectInput;
Option.displayName = 'MultiSelectInput.Option';
MultiSelectInput.Option = Option;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=MultiSelectInput.js.map