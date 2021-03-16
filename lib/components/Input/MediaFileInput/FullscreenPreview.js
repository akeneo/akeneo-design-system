"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullscreenPreview = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var components_1 = require("../../../components");
var Modal_1 = require("../../Modal/Modal");
var theme_1 = require("../../../theme");
var icons_1 = require("../../../icons");
var Border = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid ", ";\n  max-height: 100%;\n  gap: 20px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid ", ";\n  max-height: 100%;\n  gap: 20px;\n"])), theme_1.getColor('grey', 80));
var BrandedTitle = styled_components_1.default(Modal_1.Modal.Title)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), theme_1.getColor('brand', 100));
var Actions = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var PreviewImage = styled_components_1.default(components_1.Image)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: auto;\n  min-height: 250px;\n  max-width: 100%;\n  object-fit: contain;\n  max-height: calc(-250px + 100vh);\n"], ["\n  width: auto;\n  min-height: 250px;\n  max-width: 100%;\n  object-fit: contain;\n  max-height: calc(-250px + 100vh);\n"])));
var FullscreenPreview = function (_a) {
    var value = _a.value, previewUrl = _a.previewUrl, downloadUrl = _a.downloadUrl, downloadLabel = _a.downloadLabel, closeTitle = _a.closeTitle, label = _a.label, onClose = _a.onClose;
    return (react_1.default.createElement(Modal_1.Modal, { onClose: onClose, closeTitle: closeTitle },
        react_1.default.createElement(BrandedTitle, null, label),
        react_1.default.createElement(Border, null,
            react_1.default.createElement(PreviewImage, { src: previewUrl, alt: label }),
            react_1.default.createElement(Actions, null,
                react_1.default.createElement(components_1.Button, { ghost: true, href: downloadUrl, download: value.originalFilename, level: "tertiary" },
                    react_1.default.createElement(icons_1.DownloadIcon, null),
                    downloadLabel)))));
};
exports.FullscreenPreview = FullscreenPreview;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=FullscreenPreview.js.map