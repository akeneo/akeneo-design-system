"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelection = exports.SpaceContainer = exports.Scrollable = exports.MessageBarContainer = exports.Content = exports.Subtitle = exports.LabelContainer = exports.PreviewContainer = exports.PreviewCard = exports.PreviewGrid = exports.StoryStyle = void 0;
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../theme");
var useSelection = function () {
    var _a = react_1.useState(false), checked = _a[0], setChecked = _a[1];
    return { checked: checked, onChange: function () { return setChecked(!checked); } };
};
exports.useSelection = useSelection;
var StoryStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  & > * {\n    margin: 0 10px 20px 0;\n  }\n"], ["\n  ", "\n  & > * {\n    margin: 0 10px 20px 0;\n  }\n"])), theme_1.CommonStyle);
exports.StoryStyle = StoryStyle;
var PreviewGrid = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, ", "px);\n  gap: 16px;\n  margin-bottom: 50px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, ", "px);\n  gap: 16px;\n  margin-bottom: 50px;\n"])), function (_a) {
    var width = _a.width;
    return width;
});
exports.PreviewGrid = PreviewGrid;
PreviewGrid.defaultProps = {
    width: 140,
};
var PreviewCard = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  text-align: center;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;\n  border-radius: 4px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  text-align: center;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;\n  border-radius: 4px;\n"])));
exports.PreviewCard = PreviewCard;
var PreviewContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 20px;\n  color: #a1a9b7;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"], ["\n  padding: 20px;\n  color: #a1a9b7;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"])));
exports.PreviewContainer = PreviewContainer;
var LabelContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 8px 0px;\n  max-width: 100%;\n  white-space: nowrap;\n  word-break: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  padding: 8px 0px;\n  max-width: 100%;\n  white-space: nowrap;\n  word-break: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
exports.LabelContainer = LabelContainer;
var Subtitle = styled_components_1.default.h2(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  text-transform: Capitalize;\n"], ["\n  text-transform: Capitalize;\n"])));
exports.Subtitle = Subtitle;
var Content = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ", ";\n  background-color: ", ";\n  margin-top: 30px;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ", ";\n  background-color: ", ";\n  margin-top: 30px;\n"])), function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, theme_1.getColor('blue', 40), theme_1.getColor('blue', 10));
exports.Content = Content;
var MessageBarContainer = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: 5px;\n  width: 600px;\n  height: 110px;\n  overflow: clip;\n"], ["\n  padding: 5px;\n  width: 600px;\n  height: 110px;\n  overflow: clip;\n"])));
exports.MessageBarContainer = MessageBarContainer;
var Scrollable = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  overflow: auto;\n  height: ", "px;\n"], ["\n  overflow: auto;\n  height: ", "px;\n"])), function (_a) {
    var height = _a.height;
    return height;
});
exports.Scrollable = Scrollable;
var SpaceContainer = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n"])), function (_a) {
    var width = _a.width;
    return width + "px";
}, function (_a) {
    var height = _a.height;
    return height + "px";
});
exports.SpaceContainer = SpaceContainer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=PreviewGallery.js.map