"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.multerMiddleware = exports.errorMiddleware = void 0;
var error_middleware_1 = require("./error-middleware");
__createBinding(exports, error_middleware_1, "default", "errorMiddleware");
var multer_middleware_1 = require("./multer-middleware");
__createBinding(exports, multer_middleware_1, "default", "multerMiddleware");
