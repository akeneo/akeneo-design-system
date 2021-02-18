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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectInput = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var shared_1 = require("../../../shared");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var theme_1 = require("../../../theme");
var icons_1 = require("../../../icons");
var SelectInputContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & input[type='text'] {\n    cursor: ", ";\n    background: ", ";\n\n    &:focus {\n      z-index: 2;\n    }\n  }\n"], ["\n  & input[type='text'] {\n    cursor: ", ";\n    background: ", ";\n\n    &:focus {\n      z-index: 2;\n    }\n  }\n"])), function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? 'not-allowed' : 'pointer');
}, function (_a) {
    var value = _a.value, readOnly = _a.readOnly;
    return (null === value && readOnly ? theme_1.getColor('grey', 20) : 'transparent');
});
var InputContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var ActionContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  right: 10px;\n  top: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"], ["\n  position: absolute;\n  right: 10px;\n  top: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"])));
var SelectedOptionContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  background: ", ";\n  box-sizing: border-box;\n"], ["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  background: ", ";\n  box-sizing: border-box;\n"])), function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? theme_1.getColor('grey', 20) : theme_1.getColor('white'));
});
var OptionContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: ", ";\n  height: 34px;\n  padding: 0 20px;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 34px;\n\n  &:focus {\n    color: ", ";\n  }\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n  &:active {\n    color: ", ";\n    font-weight: 700;\n  }\n  &:disabled {\n    color: ", ";\n  }\n"], ["\n  background: ", ";\n  height: 34px;\n  padding: 0 20px;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 34px;\n\n  &:focus {\n    color: ", ";\n  }\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n  &:active {\n    color: ", ";\n    font-weight: 700;\n  }\n  &:disabled {\n    color: ", ";\n  }\n"])), theme_1.getColor('white'), theme_1.getColor('grey', 120), theme_1.getColor('grey', 120), theme_1.getColor('grey', 20), theme_1.getColor('brand', 140), theme_1.getColor('brand', 100), theme_1.getColor('grey', 100));
var EmptyResultContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background: ", ";\n  height: 20px;\n  padding: 0 20px;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 20px;\n  text-align: center;\n"], ["\n  background: ", ";\n  height: 20px;\n  padding: 0 20px;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 20px;\n  text-align: center;\n"])), theme_1.getColor('white'), theme_1.getColor('grey', 100));
var OverlayContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Overlay = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);\n  padding: 10px 0 10px 0;\n  position: absolute;\n  transition: opacity 0.15s ease-in-out;\n  z-index: 2;\n  left: 0;\n  right: 0;\n\n  ", ";\n"], ["\n  background: ", ";\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);\n  padding: 10px 0 10px 0;\n  position: absolute;\n  transition: opacity 0.15s ease-in-out;\n  z-index: 2;\n  left: 0;\n  right: 0;\n\n  ",
    ";\n"])), theme_1.getColor('white'), function (_a) {
    var verticalPosition = _a.verticalPosition;
    return 'up' === verticalPosition
        ? styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n          bottom: 46px;\n        "], ["\n          bottom: 46px;\n        "]))) : styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n          top: 6px;\n        "], ["\n          top: 6px;\n        "])));
});
var Backdrop = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n"])));
var OptionCollection = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  max-height: 320px;\n  overflow-y: auto;\n"], ["\n  max-height: 320px;\n  overflow-y: auto;\n"])));
var Option = styled_components_1.default.span(templateObject_13 || (templateObject_13 = __makeTemplateObject([""], [""])));
var SelectInput = function (_a) {
    var _b;
    var id = _a.id, placeholder = _a.placeholder, invalid = _a.invalid, value = _a.value, emptyResultLabel = _a.emptyResultLabel, children = _a.children, onChange = _a.onChange, _c = _a.clearSelectLabel, clearSelectLabel = _c === void 0 ? '' : _c, _d = _a.openSelectLabel, openSelectLabel = _d === void 0 ? '' : _d, _e = _a.readOnly, readOnly = _e === void 0 ? false : _e, _f = _a.verticalPosition, verticalPosition = _f === void 0 ? 'down' : _f, ariaLabelledby = _a["aria-labelledby"], rest = __rest(_a, ["id", "placeholder", "invalid", "value", "emptyResultLabel", "children", "onChange", "clearSelectLabel", "openSelectLabel", "readOnly", "verticalPosition", 'aria-labelledby']);
    var _g = react_1.useState(''), searchValue = _g[0], setSearchValue = _g[1];
    var _h = hooks_1.useBooleanState(), dropdownIsOpen = _h[0], openOverlay = _h[1], closeOverlay = _h[2];
    var inputRef = react_1.useRef(null);
    var validChildren = react_1.default.Children.toArray(children).filter(function (child) {
        return react_1.isValidElement(child);
    });
    validChildren.reduce(function (optionCodes, child) {
        if (optionCodes.includes(child.props.value)) {
            throw new Error("Duplicate option value " + child.props.value);
        }
        optionCodes.push(child.props.value);
        return optionCodes;
    }, []);
    var filteredChildren = validChildren.filter(function (child) {
        var _a;
        var content = typeof child.props.children === 'string' ? child.props.children : '';
        var title = (_a = child.props.title) !== null && _a !== void 0 ? _a : '';
        var value = child.props.value;
        var optionValue = value + content + title;
        return -1 !== optionValue.toLowerCase().indexOf(searchValue.toLowerCase());
    });
    var currentValueElement = (_b = validChildren.find(function (child) {
        var childrenValue = child.props.value;
        return value === childrenValue;
    })) !== null && _b !== void 0 ? _b : value;
    var handleEnter = function () {
        if (filteredChildren.length > 0) {
            var value_1 = filteredChildren[0].props.value;
            onChange === null || onChange === void 0 ? void 0 : onChange(value_1);
            handleBlur();
        }
    };
    var handleSearch = function (value) {
        setSearchValue(value);
    };
    var handleClick = function () {
        if (dropdownIsOpen) {
            setSearchValue('');
            closeOverlay();
        }
        else {
            openOverlay();
        }
    };
    var handleOptionClick = function (value) { return function () {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        handleBlur();
    }; };
    var handleClear = function () {
        onChange === null || onChange === void 0 ? void 0 : onChange(null);
    };
    var handleBlur = function () {
        var _a;
        setSearchValue('');
        closeOverlay();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    };
    hooks_1.useShortcut(shared_1.Key.Enter, handleEnter, inputRef);
    hooks_1.useShortcut(shared_1.Key.Escape, handleBlur, inputRef);
    return (react_1.default.createElement(SelectInputContainer, __assign({ readOnly: readOnly, value: value }, rest),
        react_1.default.createElement(InputContainer, null,
            null !== value && '' === searchValue && (react_1.default.createElement(SelectedOptionContainer, { readOnly: readOnly }, currentValueElement)),
            react_1.default.createElement(components_1.TextInput, { id: id, ref: inputRef, value: searchValue, readOnly: readOnly, invalid: invalid, placeholder: null === value ? placeholder : '', onChange: handleSearch, onClick: handleClick, "aria-labelledby": ariaLabelledby, "data-testid": "select_input" }),
            !readOnly && (react_1.default.createElement(ActionContainer, null,
                !dropdownIsOpen && null !== value && (react_1.default.createElement(components_1.IconButton, { ghost: "borderless", level: "tertiary", size: "small", icon: react_1.default.createElement(icons_1.CloseIcon, null), title: clearSelectLabel, onClick: handleClear, tabIndex: 0, onKeyDown: function (event) {
                        if ([shared_1.Key.Enter, shared_1.Key.Space].includes(event.key)) {
                            handleClear();
                        }
                    } })),
                react_1.default.createElement(components_1.IconButton, { ghost: "borderless", level: "tertiary", size: "small", icon: react_1.default.createElement(icons_1.ArrowDownIcon, null), title: openSelectLabel, onClick: openOverlay, tabIndex: 0, onKeyDown: function (event) {
                        if ([shared_1.Key.Enter, shared_1.Key.Space].includes(event.key)) {
                            openOverlay();
                        }
                    } })))),
        react_1.default.createElement(OverlayContainer, null, dropdownIsOpen && !readOnly && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Backdrop, { "data-testid": "backdrop", onClick: handleBlur }),
            react_1.default.createElement(Overlay, { verticalPosition: verticalPosition, onClose: handleBlur },
                react_1.default.createElement(OptionCollection, null, filteredChildren.length === 0 ? (react_1.default.createElement(EmptyResultContainer, null, emptyResultLabel)) : (filteredChildren.map(function (child) {
                    var value = child.props.value;
                    return (react_1.default.createElement(OptionContainer, { key: value, onClick: handleOptionClick(value) }, react_1.default.cloneElement(child)));
                })))))))));
};
exports.SelectInput = SelectInput;
Option.displayName = 'SelectInput.Option';
SelectInput.Option = Option;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=SelectInput.js.map