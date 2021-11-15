"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableInputReadOnlyCell = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../../theme");
var TableInputReadOnlyCell = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: not-allowed;\n  padding: 0 10px;\n  color: ", ";\n  height: 39px;\n  line-height: 39px;\n"], ["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: not-allowed;\n  padding: 0 10px;\n  color: ", ";\n  height: 39px;\n  line-height: 39px;\n"])), (0, theme_1.getColor)('grey', 100));
exports.TableInputReadOnlyCell = TableInputReadOnlyCell;
var templateObject_1;
//# sourceMappingURL=TableInputReadOnlyCell.js.map