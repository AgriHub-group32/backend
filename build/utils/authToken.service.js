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
exports.AuthTokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../database/prisma.service");
let AuthTokenService = class AuthTokenService extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(jwtService, config, dbClient) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get("JWT_SECRET"),
        });
        this.jwtService = jwtService;
        this.config = config;
        this.dbClient = dbClient;
    }
    async genToken(userId, type = "refresh") {
        return type === "refresh"
            ? await this.jwtService.signAsync({ sub: userId }, { expiresIn: "30d" })
            : await this.jwtService.signAsync({ sub: userId }, { expiresIn: "10m" });
    }
    async validate(payload) {
        return await this.dbClient.user.findUnique({ where: { id: payload.sub } });
    }
    async verifyToken(token) {
        const payload = await this.jwtService.verifyAsync(token);
        return payload.sub;
    }
};
exports.AuthTokenService = AuthTokenService;
exports.AuthTokenService = AuthTokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        prisma_service_1.PrismaService])
], AuthTokenService);
//# sourceMappingURL=authToken.service.js.map