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
exports.TableInputSelect = void 0;
var react_1 = __importDefault(require("react"));
var Dropdown_1 = require("../../../Dropdown/Dropdown");
var hooks_1 = require("../../../../hooks");
var icons_1 = require("../../../../icons");
var Search_1 = require("../../../Search/Search");
var styled_components_1 = __importStar(require("styled-components"));
var IconButton_1 = require("../../../IconButton/IconButton");
var theme_1 = require("../../../../theme");
var TableInputContext_1 = require("../TableInputContext");
var TableInputReadOnlyCell_1 = require("../TableInputReadOnlyCell");
var SelectButtonDropdown = (0, styled_components_1.default)(Dropdown_1.Dropdown)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  color: ", ";\n"], ["\n  width: 100%;\n  color: ", ";\n"])), (0, theme_1.getColor)('grey', 140));
var SelectButton = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  width: 100%;\n  background: none;\n  border: none;\n  text-align: left;\n  display: inline-block;\n  justify-content: space-between;\n  padding: 0 70px 0 10px;\n  height: 39px;\n  line-height: 39px;\n  align-items: center;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: none;\n\n  ", ";\n\n  ", ";\n"], ["\n  color: ", ";\n  width: 100%;\n  background: none;\n  border: none;\n  text-align: left;\n  display: inline-block;\n  justify-content: space-between;\n  padding: 0 70px 0 10px;\n  height: 39px;\n  line-height: 39px;\n  align-items: center;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: none;\n\n  ", ";\n\n  ", ";\n"])), (0, theme_1.getColor)('grey', 140), function (_a) {
    var highlighted = _a.highlighted, inError = _a.inError;
    return highlighted &&
        !inError && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "], ["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "])), (0, theme_1.getColor)('green', 10), (0, theme_1.getColor)('green', 80));
}, function (_a) {
    var inError = _a.inError;
    return inError && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "], ["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "])), (0, theme_1.getColor)('red', 10), (0, theme_1.getColor)('red', 80));
});
var IconsPart = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-flex;\n  gap: 10px;\n  position: absolute;\n  right: 10px;\n  height: 39px;\n  align-items: center;\n"], ["\n  display: inline-flex;\n  gap: 10px;\n  position: absolute;\n  right: 10px;\n  height: 39px;\n  align-items: center;\n"])));
var TableInputSelect = function (_a) {
    var value = _a.value, onClear = _a.onClear, clearLabel = _a.clearLabel, openDropdownLabel = _a.openDropdownLabel, _b = _a.highlighted, highlighted = _b === void 0 ? false : _b, _c = _a.searchValue, searchValue = _c === void 0 ? '' : _c, searchPlaceholder = _a.searchPlaceholder, onSearchChange = _a.onSearchChange, searchTitle = _a.searchTitle, onNextPage = _a.onNextPage, children = _a.children, inError = _a.inError, _d = _a.closeTick, closeTick = _d === void 0 ? false : _d, bottomHelper = _a.bottomHelper, _e = _a.withSearch, withSearch = _e === void 0 ? true : _e, onOpenChange = _a.onOpenChange, rest = __rest(_a, ["value", "onClear", "clearLabel", "openDropdownLabel", "highlighted", "searchValue", "searchPlaceholder", "onSearchChange", "searchTitle", "onNextPage", "children", "inError", "closeTick", "bottomHelper", "withSearch", "onOpenChange"]);
    var _f = (0, hooks_1.useBooleanState)(false), isOpen = _f[0], open = _f[1], close = _f[2];
    var handleOpen = function () {
        open();
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(true);
    };
    var handleClose = function () {
        close();
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
    };
    var searchRef = react_1.default.createRef();
    var focus = function (ref) {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    react_1.default.useEffect(function () {
        if (isOpen) {
            focus(searchRef);
        }
    }, [isOpen]);
    react_1.default.useEffect(function () {
        isOpen ? handleClose() : handleOpen();
    }, [closeTick]);
    react_1.default.useEffect(function () {
        handleClose();
        handleSearchChange('');
    }, [value]);
    var handleSearchChange = function (search) {
        if (onSearchChange)
            onSearchChange(search);
    };
    var readOnly = react_1.default.useContext(TableInputContext_1.TableInputContext).readOnly;
    if (readOnly) {
        return react_1.default.createElement(TableInputReadOnlyCell_1.TableInputReadOnlyCell, { title: value }, value);
    }
    return (react_1.default.createElement(SelectButtonDropdown, __assign({}, rest),
        react_1.default.createElement(SelectButton, { onClick: function (e) {
                e.preventDefault();
                handleOpen();
            }, tabIndex: -1, highlighted: highlighted, title: value, inError: inError },
            value,
            "\u00A0"),
        react_1.default.createElement(IconsPart, null,
            value && !isOpen && (react_1.default.createElement(IconButton_1.IconButton, { icon: react_1.default.createElement(icons_1.CloseIcon, null), size: "small", title: clearLabel, ghost: "borderless", level: "tertiary", onClick: onClear })),
            react_1.default.createElement(IconButton_1.IconButton, { icon: react_1.default.createElement(icons_1.ArrowDownIcon, null), size: "small", title: openDropdownLabel, ghost: "borderless", level: "tertiary", onClick: handleOpen })),
        isOpen && (react_1.default.createElement(Dropdown_1.Dropdown.Overlay, { onClose: handleClose, dropdownOpenerVisible: true, horizontalPosition: "left" },
            withSearch && (react_1.default.createElement(Dropdown_1.Dropdown.Header, null,
                react_1.default.createElement(Search_1.Search, { inputRef: searchRef, onSearchChange: handleSearchChange, placeholder: searchPlaceholder, searchValue: searchValue, title: searchTitle }))),
            react_1.default.createElement(Dropdown_1.Dropdown.ItemCollection, { onNextPage: onNextPage }, children),
            bottomHelper))));
};
exports.TableInputSelect = TableInputSelect;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=TableInputSelect.js.map