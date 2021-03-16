"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFakeMediaStorage = void 0;
var react_1 = require("react");
var useFakeMediaStorage = function (defaultPath) {
    if (defaultPath === void 0) { defaultPath = null; }
    var _a = react_1.useState(defaultPath), uploadedFile = _a[0], setUploadedFile = _a[1];
    var uploader = function (file, onProgress) {
        return new Promise(function (resolve) {
            var normalizedFile = URL.createObjectURL(file);
            setUploadedFile(normalizedFile);
            var progress = 0;
            var interval = setInterval(function () {
                onProgress(++progress / 20);
            }, 100);
            setTimeout(function () {
                clearInterval(interval);
                resolve({
                    filePath: "/file/" + file.name,
                    originalFilename: file.name,
                });
            }, 2000);
        });
    };
    var downloader = function () { return uploadedFile; };
    var previewer = function () { return uploadedFile; };
    return [uploader, downloader, previewer];
};
exports.useFakeMediaStorage = useFakeMediaStorage;
//# sourceMappingURL=useFakeMediaStorage.js.map