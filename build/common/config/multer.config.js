"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = exports.multerStorage = exports.imageFileFilter = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const imageFileFilter = (_req, file, callback) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const ext = (0, path_1.extname)(file.originalname).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
        return callback(new common_1.BadRequestException('Only image files (jpg, jpeg, png, webp) are allowed'), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
exports.multerStorage = (0, multer_1.diskStorage)({
    destination: './uploads',
    filename: (_req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = (0, path_1.extname)(file.originalname).toLowerCase();
        callback(null, `${uniqueSuffix}${ext}`);
    },
});
exports.multerOptions = {
    storage: exports.multerStorage,
    fileFilter: exports.imageFileFilter,
    limits: { fileSize: 5 * 1024 * 1024 },
};
//# sourceMappingURL=multer.config.js.map