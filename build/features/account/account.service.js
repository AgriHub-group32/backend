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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const bcrypt_service_1 = require("../../utils/bcrypt.service");
let AccountService = class AccountService {
    constructor(db, bcrypt) {
        this.db = db;
        this.bcrypt = bcrypt;
    }
    async getProfile(userId) {
        const user = await this.db.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const { passwd, ...profile } = user;
        return profile;
    }
    async updateProfile(userId, dto) {
        const user = await this.db.user.update({
            where: { id: userId },
            data: dto,
        });
        const { passwd, ...profile } = user;
        return { message: 'Profile updated successfully', profile };
    }
    async updateProfilePhoto(userId, photoUrl) {
        await this.db.user.update({
            where: { id: userId },
            data: { profile: photoUrl },
        });
        return { message: 'Profile photo updated', profile_url: photoUrl };
    }
    async getPublicProfile(userId) {
        const user = await this.db.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const avgRating = await this.db.review.aggregate({
            where: { reviewee_id: userId },
            _avg: { rating: true },
            _count: { rating: true },
        });
        const { passwd, email, ...publicProfile } = user;
        return {
            ...publicProfile,
            avg_rating: avgRating._avg.rating,
            total_reviews: avgRating._count.rating,
        };
    }
    async deactivateAccount(userId) {
        await this.db.user.update({
            where: { id: userId },
            data: { is_active: false },
        });
        return { message: 'Account deactivated successfully' };
    }
    async changePassword(userId, dto) {
        const user = await this.db.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        await this.bcrypt.verify(dto.old_password, user.passwd);
        const hashedPassword = await this.bcrypt.hash(dto.new_password);
        await this.db.user.update({
            where: { id: userId },
            data: { passwd: hashedPassword },
        });
        return { message: 'Password changed successfully' };
    }
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        bcrypt_service_1.BcryptService])
], AccountService);
//# sourceMappingURL=account.service.js.map