"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeFetcher = exports.ListContextContainer = exports.SpaceContainer = exports.Scrollable = exports.MessageBarContainer = exports.Content = exports.Subtitle = exports.LabelContainer = exports.PreviewContainer = exports.PreviewCard = exports.PreviewGrid = exports.StoryStyle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../theme");
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
var PreviewContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 20px;\n  color: ", ";\n  overflow: hidden;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"], ["\n  padding: 20px;\n  color: ", ";\n  overflow: hidden;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"])), theme_1.getColor('grey100'));
exports.PreviewContainer = PreviewContainer;
var LabelContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 8px 0px;\n  max-width: 100%;\n  white-space: nowrap;\n  word-break: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  padding: 8px 0px;\n  max-width: 100%;\n  white-space: nowrap;\n  word-break: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
exports.LabelContainer = LabelContainer;
var Subtitle = styled_components_1.default.h2(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  text-transform: Capitalize;\n"], ["\n  text-transform: Capitalize;\n"])));
exports.Subtitle = Subtitle;
var Content = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ", ";\n  background-color: ", ";\n  box-sizing: border-box;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ", ";\n  background-color: ", ";\n  box-sizing: border-box;\n"])), function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, theme_1.getColor('blue', 40), theme_1.getColor('blue', 10));
exports.Content = Content;
var ListContextContainer = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  gap: 10px;\n\n  & > * {\n    max-width: 120px;\n  }\n"], ["\n  display: flex;\n  gap: 10px;\n\n  & > * {\n    max-width: 120px;\n  }\n"])));
exports.ListContextContainer = ListContextContainer;
var MessageBarContainer = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  padding: 5px;\n  width: 600px;\n  height: 110px;\n  overflow: clip;\n"], ["\n  padding: 5px;\n  width: 600px;\n  height: 110px;\n  overflow: clip;\n"])));
exports.MessageBarContainer = MessageBarContainer;
var Scrollable = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  overflow: auto;\n  height: ", "px;\n"], ["\n  overflow: auto;\n  height: ", "px;\n"])), function (_a) {
    var height = _a.height;
    return height;
});
exports.Scrollable = Scrollable;
var SpaceContainer = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: ", ";\n  height: ", ";\n  display: flex;\n  flex-direction: column;\n"])), function (_a) {
    var width = _a.width;
    return (width ? width + "px" : 'auto');
}, function (_a) {
    var height = _a.height;
    return (height ? height + "px" : 'auto');
});
exports.SpaceContainer = SpaceContainer;
var fakeFetcher = function (page, searchValue) {
    if (page === void 0) { page = 0; }
    if (searchValue === void 0) { searchValue = ''; }
    return __awaiter(void 0, void 0, void 0, function () {
        var items, filteredItems;
        return __generator(this, function (_a) {
            items = [
                {
                    id: "name_" + page,
                    text: "Name (page " + page + ")",
                },
                {
                    id: "collection_" + page,
                    text: 'Collection',
                },
                {
                    id: "description_" + page,
                    text: 'Description',
                },
                {
                    id: "brand_" + page,
                    text: 'Brand',
                },
                {
                    id: "response_time_" + page,
                    text: 'Response time (ms)',
                },
                {
                    id: "variation_name_" + page,
                    text: 'Variant Name',
                },
                {
                    id: "variation_description_" + page,
                    text: 'Variant description',
                },
                {
                    id: "release_date_" + page,
                    text: 'Release date',
                },
                {
                    id: "release_date_" + page,
                    text: 'Release date',
                },
                {
                    id: "asset_collection_" + page,
                    text: 'Asset collection',
                },
                {
                    id: "associations_" + page,
                    text: 'Associations',
                },
                {
                    id: "enabled_" + page,
                    text: 'Enabled',
                },
                {
                    id: "price_" + page,
                    text: 'Price',
                },
                {
                    id: "promotion_" + page,
                    text: 'Promotion',
                },
                {
                    id: "city_" + page,
                    text: 'City',
                },
                {
                    id: "supplier_" + page,
                    text: 'Supplier',
                },
                {
                    id: "label_" + page,
                    text: 'Label',
                },
                {
                    id: "category_" + page,
                    text: 'Category',
                },
                {
                    id: "updated_at_" + page,
                    text: 'Updated at',
                },
                {
                    id: "created_at_" + page,
                    text: 'Created at',
                },
            ];
            if (page > 3)
                return [2, Promise.resolve([])];
            filteredItems = searchValue !== '' && 0 === page ? items.filter(function (item) { return -1 !== item.text.indexOf(searchValue); }) : items;
            if (searchValue !== '' && page > 0)
                return [2, Promise.resolve([])];
            return [2, new Promise(function (resolve) {
                    setTimeout(function () { return resolve(filteredItems); }, 200);
                })];
        });
    });
};
exports.fakeFetcher = fakeFetcher;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=PreviewGallery.js.map