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
var common_1 = require("../common");
var IconButton_1 = require("../../../components/IconButton/IconButton");
var TextInput_1 = require("../../../components/Input/TextInput/TextInput");
var hooks_1 = require("../../../hooks");
var theme_1 = require("../../../theme");
var icons_1 = require("../../../icons");
var usePagination_1 = require("../../../hooks/usePagination");
var areEveryChildrenDisabled = function (children) {
    return children.length > 0 && children.every(function (option) { var _a, _b; return (_b = (_a = option.props) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : false; });
};
var SelectInputContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n\n  & input[type='text'] {\n    cursor: ", ";\n    background: ", ";\n\n    &:focus {\n      z-index: 2;\n    }\n  }\n"], ["\n  width: 100%;\n\n  & input[type='text'] {\n    cursor: ", ";\n    background: ", ";\n\n    &:focus {\n      z-index: 2;\n    }\n  }\n"])), function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? 'not-allowed' : 'pointer');
}, function (_a) {
    var value = _a.value, readOnly = _a.readOnly;
    return (null === value && readOnly ? (0, theme_1.getColor)('grey', 20) : 'transparent');
});
var InputContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  background: ", ";\n"], ["\n  position: relative;\n  background: ", ";\n"])), (0, theme_1.getColor)('white'));
var SearchInput = (0, styled_components_1.default)(TextInput_1.TextInput)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &::placeholder {\n    opacity: ", ";\n  }\n"], ["\n  &::placeholder {\n    opacity: ", ";\n  }\n"])), function (_a) {
    var isPlaceholderVisible = _a.isPlaceholderVisible;
    return (isPlaceholderVisible ? 1 : 0);
});
var ActionContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  right: 8px;\n  top: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  z-index: 2;\n"], ["\n  position: absolute;\n  right: 8px;\n  top: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  z-index: 2;\n"])));
var SelectedOptionContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  margin-bottom: -34px;\n  top: 3px;\n  width: 100%;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  padding: 0 ", "px 0 16px;\n  background: ", ";\n  box-sizing: border-box;\n  color: ", ";\n"], ["\n  position: relative;\n  margin-bottom: -34px;\n  top: 3px;\n  width: 100%;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  padding: 0 ", "px 0 16px;\n  background: ", ";\n  box-sizing: border-box;\n  color: ", ";\n"])), function (_a) {
    var clearable = _a.clearable;
    return (clearable ? 68 : 38);
}, function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? (0, theme_1.getColor)('grey', 20) : (0, theme_1.getColor)('white'));
}, function (_a) {
    var readOnly = _a.readOnly;
    return (readOnly ? (0, theme_1.getColor)('grey', 100) : (0, theme_1.getColor)('grey', 140));
});
var OptionContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background: ", ";\n  height: 34px;\n  padding: 0 20px;\n  align-items: center;\n  gap: 10px;\n  cursor: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 34px;\n  display: flex;\n  justify-content: space-between;\n\n  ", "\n"], ["\n  background: ", ";\n  height: 34px;\n  padding: 0 20px;\n  align-items: center;\n  gap: 10px;\n  cursor: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 34px;\n  display: flex;\n  justify-content: space-between;\n\n  ", "\n"])), (0, theme_1.getColor)('white'), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? (0, theme_1.getColor)('grey', 100) : (0, theme_1.getColor)('grey', 120));
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled && (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      &:focus {\n        background: ", ";\n        color: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n      &:active {\n        color: ", ";\n        font-weight: 700;\n      }\n    "], ["\n      &:focus {\n        background: ", ";\n        color: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n      &:active {\n        color: ", ";\n        font-weight: 700;\n      }\n    "])), (0, theme_1.getColor)('grey', 20), (0, theme_1.getColor)('brand', 140), (0, theme_1.getColor)('grey', 20), (0, theme_1.getColor)('brand', 140), (0, theme_1.getColor)('brand', 100));
});
var EmptyResultContainer = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  background: ", ";\n  height: 20px;\n  padding: 0 20px;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 20px;\n  text-align: center;\n"], ["\n  background: ", ";\n  height: 20px;\n  padding: 0 20px;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: ", ";\n  line-height: 20px;\n  text-align: center;\n"])), (0, theme_1.getColor)('white'), (0, theme_1.getColor)('grey', 100));
var OptionCollection = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  max-height: 320px;\n  overflow-y: auto;\n"], ["\n  max-height: 320px;\n  overflow-y: auto;\n"])));
var Option = styled_components_1.default.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: block;\n  line-height: 34px;\n  min-height: 34px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  display: block;\n  line-height: 34px;\n  min-height: 34px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
var SelectInput = function (_a) {
    var _b;
    var id = _a.id, placeholder = _a.placeholder, invalid = _a.invalid, value = _a.value, emptyResultLabel = _a.emptyResultLabel, children = _a.children, onChange = _a.onChange, _c = _a.clearable, clearable = _c === void 0 ? true : _c, _d = _a.clearLabel, clearLabel = _d === void 0 ? '' : _d, openLabel = _a.openLabel, _e = _a.readOnly, readOnly = _e === void 0 ? false : _e, verticalPosition = _a.verticalPosition, onNextPage = _a.onNextPage, onSearchChange = _a.onSearchChange, _f = _a.disableInternalSearch, disableInternalSearch = _f === void 0 ? false : _f, ariaLabelledby = _a["aria-labelledby"], rest = __rest(_a, ["id", "placeholder", "invalid", "value", "emptyResultLabel", "children", "onChange", "clearable", "clearLabel", "openLabel", "readOnly", "verticalPosition", "onNextPage", "onSearchChange", "disableInternalSearch", 'aria-labelledby']);
    var _g = (0, react_1.useState)(''), searchValue = _g[0], setSearchValue = _g[1];
    var _h = (0, hooks_1.useBooleanState)(), dropdownIsOpen = _h[0], openOverlay = _h[1], closeOverlay = _h[2];
    var inputRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    var firstOptionRef = (0, react_1.useRef)(null);
    var lastOptionRef = (0, react_1.useRef)(null);
    var selectedOptionRef = (0, react_1.useRef)(null);
    var validChildren = react_1.default.Children.toArray(children).filter(function (child) {
        return (0, react_1.isValidElement)(child);
    });
    readOnly = readOnly || areEveryChildrenDisabled(validChildren);
    validChildren.reduce(function (optionCodes, child) {
        if (optionCodes.includes(child.props.value)) {
            throw new Error("Duplicate option value " + child.props.value);
        }
        optionCodes.push(child.props.value);
        return optionCodes;
    }, []);
    var filteredChildren = disableInternalSearch
        ? validChildren
        : validChildren.filter(function (child) {
            var _a;
            var content = typeof child.props.children === 'string' ? child.props.children : '';
            var title = (_a = child.props.title) !== null && _a !== void 0 ? _a : '';
            var value = child.props.value;
            var optionValue = value + content + title;
            return optionValue.toLowerCase().includes(searchValue.toLowerCase());
        });
    var currentValueElement = (_b = validChildren.find(function (child) {
        var childrenValue = child.props.value;
        return value === childrenValue;
    })) !== null && _b !== void 0 ? _b : value;
    var handleSearch = function (value) {
        onSearchChange === null || onSearchChange === void 0 ? void 0 : onSearchChange(value);
        setSearchValue(value);
        openOverlay();
    };
    var handleOptionClick = function (value, isOptionDisabled) { return function () {
        if (isOptionDisabled) {
            return;
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        handleEscape();
    }; };
    var handleClear = function (e) {
        var _a;
        onChange === null || onChange === void 0 ? void 0 : onChange(null);
        e.preventDefault();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var handleEscape = function () {
        var _a;
        setSearchValue('');
        closeOverlay();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    (0, hooks_1.useShortcut)(shared_1.Key.Escape, handleEscape, inputRef);
    var handleInputKeyDown = (0, react_1.useCallback)(function (event) {
        var _a;
        if (null !== event.currentTarget) {
            if (event.key === shared_1.Key.Tab) {
                setSearchValue('');
                closeOverlay();
            }
            if (event.key === shared_1.Key.ArrowDown) {
                event.preventDefault();
                if (!dropdownIsOpen) {
                    openOverlay();
                }
                else {
                    (_a = (firstOptionRef.current || selectedOptionRef.current)) === null || _a === void 0 ? void 0 : _a.focus();
                }
            }
            else if (event.key === shared_1.Key.ArrowUp) {
                event.preventDefault();
                openOverlay();
            }
            else if (event.key === shared_1.Key.Enter) {
                event.preventDefault();
                if (!dropdownIsOpen) {
                    openOverlay();
                }
            }
        }
    }, [value, dropdownIsOpen]);
    react_1.default.useEffect(function () {
        var _a;
        if (dropdownIsOpen && searchValue === '') {
            (_a = (selectedOptionRef.current || firstOptionRef.current)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [dropdownIsOpen, selectedOptionRef.current]);
    var handleOptionKeyDown = (0, react_1.useCallback)(function (event, isOptionDisabled) {
        var _a, _b;
        if (null !== event.currentTarget) {
            if (event.key === shared_1.Key.Tab) {
                setSearchValue('');
                closeOverlay();
            }
            if ([shared_1.Key.ArrowDown, shared_1.Key.ArrowUp, shared_1.Key.Enter, shared_1.Key.Escape].includes(event.key)) {
                if (event.key === shared_1.Key.ArrowDown) {
                    var nextSibling = event.currentTarget.nextSibling;
                    nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.focus();
                    event.preventDefault();
                }
                if (event.key === shared_1.Key.ArrowUp) {
                    var previousSibling = event.currentTarget.previousSibling;
                    previousSibling === null || previousSibling === void 0 ? void 0 : previousSibling.focus();
                    event.preventDefault();
                }
                if (event.key === shared_1.Key.Enter && !isOptionDisabled) {
                    var value_1 = (_a = event.currentTarget.firstChild) === null || _a === void 0 ? void 0 : _a.getAttribute('value');
                    onChange === null || onChange === void 0 ? void 0 : onChange(value_1);
                    handleEscape();
                }
                if (event.key === shared_1.Key.Escape) {
                    handleEscape();
                }
            }
            else {
                (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
    }, [onChange, value]);
    (0, usePagination_1.usePagination)(containerRef, lastOptionRef, onNextPage, dropdownIsOpen);
    return (react_1.default.createElement(SelectInputContainer, __assign({ readOnly: readOnly, value: value }, rest),
        react_1.default.createElement(InputContainer, null,
            null !== value && '' === searchValue && (react_1.default.createElement(SelectedOptionContainer, { readOnly: readOnly, clearable: clearable }, currentValueElement)),
            react_1.default.createElement(SearchInput, { id: id, ref: inputRef, value: searchValue, readOnly: readOnly, invalid: invalid, placeholder: placeholder, isPlaceholderVisible: null === value, onChange: handleSearch, onClick: function (event) {
                    openOverlay();
                    event.preventDefault();
                }, "aria-labelledby": ariaLabelledby, onKeyDown: handleInputKeyDown, "data-form-type": 'other', size: 1 }),
            !readOnly && (react_1.default.createElement(ActionContainer, null,
                !dropdownIsOpen && null !== value && clearable && (react_1.default.createElement(IconButton_1.IconButton, { ghost: "borderless", level: "tertiary", size: "small", icon: react_1.default.createElement(icons_1.CloseIcon, null), title: clearLabel, onClick: handleClear, tabIndex: 0 })),
                react_1.default.createElement(IconButton_1.IconButton, { ghost: "borderless", level: "tertiary", size: "small", icon: react_1.default.createElement(icons_1.ArrowDownIcon, null), title: openLabel, onClick: openOverlay, onFocus: handleEscape, tabIndex: -1 })))),
        dropdownIsOpen && !readOnly && (react_1.default.createElement(common_1.Overlay, { parentRef: inputRef, verticalPosition: verticalPosition, onClose: handleEscape },
            react_1.default.createElement(OptionCollection, { ref: containerRef }, filteredChildren.length === 0 ? (react_1.default.createElement(EmptyResultContainer, null, emptyResultLabel)) : (filteredChildren.map(function (child, index) {
                var _a, _b;
                var childValue = child.props.value;
                var ref = undefined;
                switch (index) {
                    case 0:
                        ref = firstOptionRef;
                        break;
                    case filteredChildren.length - 1:
                        ref = lastOptionRef;
                        break;
                }
                if (value === childValue) {
                    ref = selectedOptionRef;
                }
                var isOptionDisabled = (_b = (_a = child.props) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : false;
                return (react_1.default.createElement(OptionContainer, { role: "option", "data-testid": childValue, key: childValue, onClick: handleOptionClick(childValue, isOptionDisabled), onKeyDown: function (e) { return handleOptionKeyDown(e, isOptionDisabled); }, tabIndex: 0, ref: ref, disabled: isOptionDisabled },
                    react_1.default.cloneElement(child),
                    isOptionDisabled && react_1.default.createElement(icons_1.LockIcon, { size: 18 })));
            })))))));
};
exports.SelectInput = SelectInput;
Option.displayName = 'SelectInput.Option';
SelectInput.Option = Option;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=SelectInput.js.map