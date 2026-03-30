"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptService = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let BcryptService = class BcryptService {
    constructor(config) {
        this.config = config;
        this.encryptRounds = +this.config.get("PASSWD_ENCRYP_ROUNDS");
        if (!this.encryptRounds)
            throw new Error("No value passed for env var PASSWD_ENCRYP_ROUNDS");
    }
    async hash(rawPassword) {
        return await bcrypt.hash(rawPassword, this.encryptRounds);
    }
    async verify(rawData, hashedData) {
        const isMatch = await bcrypt.compare(rawData, hashedData);
        if (!isMatch)
            throw new common_1.UnauthorizedException("Invalid email or password");
    }
};
exports.BcryptService = BcryptService;
exports.BcryptService = BcryptService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], BcryptService);
//# sourceMappingURL=bcrypt.service.js.map