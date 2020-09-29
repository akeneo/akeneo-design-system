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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "styled-components", "../../theme", "../../icons", "../../hooks", "../../shared"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Checkbox = void 0;
    var react_1 = __importStar(require("react"));
    var styled_components_1 = __importStar(require("styled-components"));
    var theme_1 = require("../../theme");
    var icons_1 = require("../../icons");
    var hooks_1 = require("../../hooks");
    var shared_1 = require("../../shared");
    var checkTick = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  to {\n    stroke-dashoffset: 0;\n  }\n"], ["\n  to {\n    stroke-dashoffset: 0;\n  }\n"])));
    var uncheckTick = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  to {\n    stroke-dashoffset: 17px;\n  }\n"], ["\n  to {\n    stroke-dashoffset: 17px;\n  }\n"])));
    var Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
    var TickIcon = styled_components_1.default(icons_1.CheckIcon)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  animation: ", " 0.2s ease-in forwards;\n  opacity: 0;\n  stroke-dasharray: 17px;\n  stroke-dashoffset: 0;\n  transition-delay: 0.2s;\n  transition: opacity 0.1s ease-out;\n"], ["\n  animation: ", " 0.2s ease-in forwards;\n  opacity: 0;\n  stroke-dasharray: 17px;\n  stroke-dashoffset: 0;\n  transition-delay: 0.2s;\n  transition: opacity 0.1s ease-out;\n"])), uncheckTick);
    var CheckboxContainer = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  background-color: transparent;\n  height: 20px;\n  width: 20px;\n  border: 1px solid ", ";\n  border-radius: 3px;\n  overflow: hidden;\n  background-color: ", ";\n  transition: background-color 0.2s ease-out;\n  box-sizing: border-box;\n  color: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  background-color: transparent;\n  height: 20px;\n  width: 20px;\n  border: 1px solid ", ";\n  border-radius: 3px;\n  overflow: hidden;\n  background-color: ", ";\n  transition: background-color 0.2s ease-out;\n  box-sizing: border-box;\n  color: ", ";\n\n  ",
        "\n\n  ",
        "\n\n  ",
        "\n"])), theme_1.getColor('grey80'), theme_1.getColor('grey20'), theme_1.getColor('white'), function (props) {
        return props.checked && styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      background-color: ", ";\n      border-color: ", ";\n\n      ", " {\n        animation-delay: 0.2s;\n        animation: ", " 0.2s ease-out forwards;\n        stroke-dashoffset: 17px;\n        opacity: 1;\n        transition-delay: 0s;\n      }\n    "], ["\n      background-color: ", ";\n      border-color: ", ";\n\n      ", " {\n        animation-delay: 0.2s;\n        animation: ", " 0.2s ease-out forwards;\n        stroke-dashoffset: 17px;\n        opacity: 1;\n        transition-delay: 0s;\n      }\n    "])), theme_1.getColor('blue100'), theme_1.getColor('blue100'), TickIcon, checkTick);
    }, function (props) {
        return props.checked &&
            props.readOnly && styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      background-color: ", ";\n      border-color: ", ";\n    "], ["\n      background-color: ", ";\n      border-color: ", ";\n    "])), theme_1.getColor('blue20'), theme_1.getColor('blue40'));
    }, function (props) {
        return !props.checked &&
            props.readOnly && styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      background-color: ", ";\n      border-color: ", ";\n    "], ["\n      background-color: ", ";\n      border-color: ", ";\n    "])), theme_1.getColor('grey60'), theme_1.getColor('grey100'));
    });
    var LabelContainer = styled_components_1.default.label(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 15px;\n  padding-left: 10px;\n\n  ", "\n"], ["\n  color: ", ";\n  font-weight: 400;\n  font-size: 15px;\n  padding-left: 10px;\n\n  ",
        "\n"])), theme_1.getColor('grey140'), function (props) {
        return props.readOnly && styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), theme_1.getColor('grey100'));
    });
    var Checkbox = react_1.default.forwardRef(function (_a, forwardedRef) {
        var checked = _a.checked, onChange = _a.onChange, _b = _a.readOnly, readOnly = _b === void 0 ? false : _b, children = _a.children, rest = __rest(_a, ["checked", "onChange", "readOnly", "children"]);
        var checkboxId = react_1.useState("checkbox_" + shared_1.uuid())[0];
        var labelId = react_1.useState("label_" + shared_1.uuid())[0];
        var isChecked = 'true' === checked;
        var isMixed = 'mixed' === checked;
        var handleChange = function () {
            if (!onChange || readOnly)
                return;
            switch (checked) {
                case 'true':
                    onChange('false');
                    break;
                case 'mixed':
                case 'false':
                    onChange('true');
                    break;
            }
        };
        var ref = hooks_1.useShortcut(shared_1.Key.Space, handleChange);
        var forProps = children
            ? {
                'aria-labelledby': labelId,
                id: checkboxId,
            }
            : {};
        return (react_1.default.createElement(Container, __assign({ ref: forwardedRef }, rest),
            react_1.default.createElement(CheckboxContainer, __assign({ checked: isChecked || isMixed, readOnly: readOnly, role: "checkbox", ref: ref, "aria-checked": isChecked, tabIndex: readOnly ? -1 : 0, onClick: handleChange }, forProps), isMixed ? react_1.default.createElement(icons_1.PartialCheckIcon, { height: 20, width: 20 }) : react_1.default.createElement(TickIcon, { height: 20, width: 20 })),
            children ? (react_1.default.createElement(LabelContainer, { onClick: handleChange, id: labelId, readOnly: readOnly, htmlFor: checkboxId }, children)) : null));
    });
    exports.Checkbox = Checkbox;
    var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
});
//# sourceMappingURL=Checkbox.js.map