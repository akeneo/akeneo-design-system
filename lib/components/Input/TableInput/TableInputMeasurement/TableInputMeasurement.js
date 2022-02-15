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
exports.TableInputMeasurement = void 0;
var react_1 = __importDefault(require("react"));
var NumberInput_1 = require("../../NumberInput/NumberInput");
var styled_components_1 = __importDefault(require("styled-components"));
var SelectInput_1 = require("../../SelectInput/SelectInput");
var theme_1 = require("../../../../theme");
var TableInputContext_1 = require("../TableInputContext");
var TableInputReadOnlyCell_1 = require("../shared/TableInputReadOnlyCell");
var highlightCell_1 = require("../shared/highlightCell");
var TableInputMeasurementContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  & > *:nth-child(1) {\n    margin-right: -5px;\n  }\n  & > *:nth-child(2) {\n    margin-left: -5px;\n  }\n\n  ", ";\n"], ["\n  display: flex;\n  & > *:nth-child(1) {\n    margin-right: -5px;\n  }\n  & > *:nth-child(2) {\n    margin-left: -5px;\n  }\n\n  ", ";\n"])), highlightCell_1.highlightCell);
var TableInputMeasurementAmount = (0, styled_components_1.default)(NumberInput_1.NumberInput)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 39px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 0;\n  border: none;\n  background: none;\n\n  & + div {\n    display: none; // Hide arrow buttons\n  }\n"], ["\n  height: 39px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 0;\n  border: none;\n  background: none;\n\n  & + div {\n    display: none; // Hide arrow buttons\n  }\n"])));
var TableInputMeasurementUnit = (0, styled_components_1.default)(SelectInput_1.SelectInput)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  & > div {\n    background: none;\n\n    & > div:nth-child(1) {\n      justify-content: flex-end;\n    }\n\n    & > div {\n      background: none;\n      color: ", ";\n\n      & > input {\n        border: none;\n        text-align: right;\n        padding-right: 38px;\n      }\n    }\n  }\n"], ["\n  & > div {\n    background: none;\n\n    & > div:nth-child(1) {\n      justify-content: flex-end;\n    }\n\n    & > div {\n      background: none;\n      color: ", ";\n\n      & > input {\n        border: none;\n        text-align: right;\n        padding-right: 38px;\n      }\n    }\n  }\n"])), (0, theme_1.getColor)('grey', 100));
var TableInputMeasurement = function (_a) {
    var amount = _a.amount, unit = _a.unit, emptyResultLabel = _a.emptyResultLabel, openLabel = _a.openLabel, onChange = _a.onChange, units = _a.units, rest = __rest(_a, ["amount", "unit", "emptyResultLabel", "openLabel", "onChange", "units"]);
    var readOnly = react_1.default.useContext(TableInputContext_1.TableInputContext).readOnly;
    var handleUnitChange = function (unit) {
        onChange(amount, unit);
    };
    var handleAmountChange = function (amount) {
        onChange(amount, unit);
    };
    var selectedUnit = units.find(function (_a) {
        var value = _a.value;
        return value === unit;
    });
    return readOnly ? (react_1.default.createElement(TableInputReadOnlyCell_1.TableInputReadOnlyCell, null,
        amount,
        " ",
        react_1.default.createElement("span", null, (selectedUnit === null || selectedUnit === void 0 ? void 0 : selectedUnit.symbol) || (selectedUnit === null || selectedUnit === void 0 ? void 0 : selectedUnit.label)))) : (react_1.default.createElement(TableInputMeasurementContainer, __assign({}, rest),
        react_1.default.createElement(TableInputMeasurementAmount, { value: amount, onChange: handleAmountChange }),
        react_1.default.createElement(TableInputMeasurementUnit, { value: unit || null, emptyResultLabel: emptyResultLabel, openLabel: openLabel, onChange: handleUnitChange, clearable: false }, units.map(function (unit) { return (react_1.default.createElement(SelectInput_1.SelectInput.Option, { title: unit.label, key: unit.value, value: unit.value }, unit.symbol || unit.label)); }))));
};
exports.TableInputMeasurement = TableInputMeasurement;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=TableInputMeasurement.js.map