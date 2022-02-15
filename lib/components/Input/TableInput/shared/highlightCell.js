"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlightCell = void 0;
var theme_1 = require("../../../../theme");
var styled_components_1 = require("styled-components");
var highlightCell = (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n\n  ", ";\n"], ["\n  ", ";\n\n  ", ";\n"])), function (_a) {
    var highlighted = _a.highlighted, inError = _a.inError;
    return highlighted &&
        !inError && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "], ["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "])), (0, theme_1.getColor)('green', 10), (0, theme_1.getColor)('green', 80));
}, function (_a) {
    var inError = _a.inError;
    return inError && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "], ["\n      background: ", ";\n      box-shadow: 0 0 0 1px ", ";\n    "])), (0, theme_1.getColor)('red', 10), (0, theme_1.getColor)('red', 80));
});
exports.highlightCell = highlightCell;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=highlightCell.js.map