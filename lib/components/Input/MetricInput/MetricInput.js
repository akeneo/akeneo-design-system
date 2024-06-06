"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricInput = void 0;
var react_1 = __importStar(require("react"));
var NumberInput_1 = require("../NumberInput/NumberInput");
var SelectInput_1 = require("../SelectInput/SelectInput");
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../../theme");
var MetricInputContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  > *:nth-child(2) {\n    width: auto;\n  }\n"], ["\n  display: flex;\n  > *:nth-child(2) {\n    width: auto;\n  }\n"])));
var CustomNumberInput = (0, styled_components_1.default)(NumberInput_1.NumberInput)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  min-width: 60px;\n  &:focus {\n    border-right: 1px solid ", ";\n    width: calc(100% - 2px);\n  }\n"], ["\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  min-width: 60px;\n  &:focus {\n    border-right: 1px solid ", ";\n    width: calc(100% - 2px);\n  }\n"])), (0, theme_1.getColor)('grey', 80));
var CustomSelectInput = (0, styled_components_1.default)(SelectInput_1.SelectInput)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  input {\n    border-left: none;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    &:focus {\n      border-left: 1px solid ", ";\n    }\n  }\n  span {\n    text-transform: uppercase;\n    color: ", ";\n  }\n"], ["\n  input {\n    border-left: none;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    &:focus {\n      border-left: 1px solid ", ";\n    }\n  }\n  span {\n    text-transform: uppercase;\n    color: ", ";\n  }\n"])), (0, theme_1.getColor)('grey', 80), (0, theme_1.getColor)('grey', 100));
var MetricInput = function (_a) {
    var amount = _a.amount, onAmountChange = _a.onAmountChange, unit = _a.unit, onUnitChange = _a.onUnitChange, unitOptions = _a.unitOptions, openLabel = _a.openLabel, min = _a.min, max = _a.max;
    var getLabel = (0, react_1.useCallback)(function (unit, amount) {
        var option = unitOptions.find(function (o) { return o.value === unit; });
        return option ? (typeof option.label === 'string' ? option.label : option.label(amount)) : '';
    }, [unitOptions]);
    return (react_1.default.createElement(MetricInputContainer, null,
        react_1.default.createElement(CustomNumberInput, { value: amount, onChange: onAmountChange, withIncrementIcons: false, min: min, max: max }),
        react_1.default.createElement(CustomSelectInput, { onChange: onUnitChange, value: unit, clearable: false, openLabel: openLabel }, unitOptions.map(function (unitOption) { return (react_1.default.createElement(SelectInput_1.SelectInput.Option, { key: unitOption.value, value: unitOption.value, title: getLabel(unitOption.value, amount) }, getLabel(unitOption.value, amount))); }))));
};
exports.MetricInput = MetricInput;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=MetricInput.js.map