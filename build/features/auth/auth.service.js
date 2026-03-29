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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const bcrypt_service_1 = require("../../utils/bcrypt.service");
const authToken_service_1 = require("../../utils/authToken.service");
let AuthService = class AuthService {
    constructor(db, bcrypt, authToken) {
        this.db = db;
        this.bcrypt = bcrypt;
        this.authToken = authToken;
        this.resetTokens = new Map();
    }
    async signup(dto) {
        const existing = await this.db.user.findUnique({ where: { email: dto.email } });
        if (existing)
            throw new common_1.ConflictException("Email already in use");
        const hashedPassword = await this.bcrypt.hash(dto.password);
        const user = await this.db.user.create({
            data: {
                full_name: dto.full_name,
                email: dto.email,
                passwd: hashedPassword,
                type: dto.type,
            },
        });
        const accessToken = await this.authToken.genToken(user.id, "access");
        const refreshToken = await this.authToken.genToken(user.id, "refresh");
        return {
            message: "Account created successfully",
            user: { id: user.id, full_name: user.full_name, email: user.email, type: user.type },
            accessToken,
            refreshToken,
        };
    }
    async login(dto) {
        const user = await this.db.user.findUnique({ where: { email: dto.email } });
        if (!user)
            throw new common_1.UnauthorizedException("Invalid email or password");
        if (user.type === "admin")
            throw new common_1.UnauthorizedException("Admins must use the admin login route");
        await this.bcrypt.verify(dto.password, user.passwd);
        const accessToken = await this.authToken.genToken(user.id, "access");
        const refreshToken = await this.authToken.genToken(user.id, "refresh");
        return {
            message: "Login successful",
            user: { id: user.id, full_name: user.full_name, email: user.email, type: user.type },
            accessToken,
            refreshToken,
        };
    }
    async adminLogin(dto) {
        const user = await this.db.user.findUnique({ where: { email: dto.email } });
        if (!user)
            throw new common_1.UnauthorizedException("Invalid email or password");
        if (user.type !== "admin")
            throw new common_1.UnauthorizedException("This route is for admin users only");
        await this.bcrypt.verify(dto.password, user.passwd);
        const accessToken = await this.authToken.genToken(user.id, "access");
        const refreshToken = await this.authToken.genToken(user.id, "refresh");
        return {
            message: "Admin login successful",
            user: { id: user.id, full_name: user.full_name, email: user.email, type: user.type },
            accessToken,
            refreshToken,
        };
    }
    async requestPasswordReset(dto) {
        const user = await this.db.user.findUnique({ where: { email: dto.email } });
        if (!user)
            throw new common_1.NotFoundException("No account found with that email");
        const resetToken = await this.authToken.genToken(user.id, "access");
        this.resetTokens.set(resetToken, {
            userId: user.id,
            expiresAt: Date.now() + 15 * 60 * 1000,
        });
        return {
            message: "Password reset token generated. Use it to reset your password.",
            resetToken,
        };
    }
    async confirmPasswordReset(dto) {
        const entry = this.resetTokens.get(dto.token);
        if (!entry || entry.expiresAt < Date.now()) {
            this.resetTokens.delete(dto.token);
            throw new common_1.BadRequestException("Invalid or expired reset token");
        }
        const hashedPassword = await this.bcrypt.hash(dto.new_password);
        await this.db.user.update({
            where: { id: entry.userId },
            data: { passwd: hashedPassword },
        });
        this.resetTokens.delete(dto.token);
        return { message: "Password reset successfully" };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        bcrypt_service_1.BcryptService,
        authToken_service_1.AuthTokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map