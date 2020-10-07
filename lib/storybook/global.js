"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryStyle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var fontUrl = 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap';
var StoryStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @import url(", ");\n\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;\n\n  color: #67768a;\n  font-size: 13px;\n  line-height: 20px;\n  padding: 10px;\n\n  & > * {\n    margin: 0 10px 10px 0;\n  }\n"], ["\n  @import url(", ");\n\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;\n\n  color: #67768a;\n  font-size: 13px;\n  line-height: 20px;\n  padding: 10px;\n\n  & > * {\n    margin: 0 10px 10px 0;\n  }\n"])), fontUrl);
exports.StoryStyle = StoryStyle;
var templateObject_1;
//# sourceMappingURL=global.js.map