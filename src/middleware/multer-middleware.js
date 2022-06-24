"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var multer_1 = require("multer");
var storage = multer_1["default"].diskStorage({
    destination: function (_, __, cb) {
        var path = 'storage/img';
        if (!fs_1["default"].existsSync(path)) {
            fs_1["default"].mkdirSync(path, { recursive: true });
        }
        cb(null, path);
    },
    filename: function (_, file, cb) {
        cb(null, "".concat(new Date().toISOString(), "-").concat(file.originalname));
    }
});
var fileFilter = function (_, file, cb) {
    if (file.mimetype === 'image/png' || file.mimetype === 'images/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, true);
    }
};
exports["default"] = (0, multer_1["default"])({ storage: storage, fileFilter: fileFilter }).single('avatar');
