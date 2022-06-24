"use strict";
exports.__esModule = true;
// eslint-disable-next-line no-unused-vars
exports["default"] = (function (err, _, res, __) {
    if (err.isJoi) {
        err.statusCode = 422;
    }
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    res.status(err.statusCode).json({
        message: err.message
    });
});
