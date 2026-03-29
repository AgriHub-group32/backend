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
exports.HarvestService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let HarvestService = class HarvestService {
    constructor(db) {
        this.db = db;
    }
    async create(ownerId, dto) {
        const category = await this.db.harvest_category.findUnique({
            where: { category: dto.category },
        });
        if (!category)
            throw new common_1.BadRequestException(`Category '${dto.category}' does not exist`);
        const harvest = await this.db.harvest.create({
            data: {
                ...dto,
                owner_id: ownerId,
            },
        });
        return { message: 'Harvest listing created', harvest };
    }
    async getMyHarvests(ownerId) {
        return this.db.harvest.findMany({
            where: { owner_id: ownerId },
            include: { harvest_image: true },
            orderBy: { created_at: 'desc' },
        });
    }
    async getById(id) {
        const harvest = await this.db.harvest.findUnique({
            where: { id },
            include: {
                harvest_image: true,
                user: { select: { id: true, full_name: true, profile: true, type: true, location: true } },
            },
        });
        if (!harvest)
            throw new common_1.NotFoundException('Harvest not found');
        return harvest;
    }
    async update(id, ownerId, dto) {
        const harvest = await this.db.harvest.findUnique({ where: { id } });
        if (!harvest)
            throw new common_1.NotFoundException('Harvest not found');
        if (harvest.owner_id !== ownerId)
            throw new common_1.ForbiddenException('Not the owner of this harvest');
        if (dto.category) {
            const category = await this.db.harvest_category.findUnique({
                where: { category: dto.category },
            });
            if (!category)
                throw new common_1.BadRequestException(`Category '${dto.category}' does not exist`);
        }
        const updated = await this.db.harvest.update({
            where: { id },
            data: dto,
        });
        return { message: 'Harvest updated', harvest: updated };
    }
    async delete(id, ownerId) {
        const harvest = await this.db.harvest.findUnique({ where: { id } });
        if (!harvest)
            throw new common_1.NotFoundException('Harvest not found');
        if (harvest.owner_id !== ownerId)
            throw new common_1.ForbiddenException('Not the owner of this harvest');
        await this.db.harvest_image.deleteMany({ where: { harvest_id: id } });
        await this.db.harvest.delete({ where: { id } });
        return { message: 'Harvest deleted' };
    }
    async addImages(harvestId, ownerId, files) {
        const harvest = await this.db.harvest.findUnique({ where: { id: harvestId } });
        if (!harvest)
            throw new common_1.NotFoundException('Harvest not found');
        if (harvest.owner_id !== ownerId)
            throw new common_1.ForbiddenException('Not the owner of this harvest');
        const images = await Promise.all(files.map((file) => this.db.harvest_image.create({
            data: { harvest_id: harvestId, img_url: `/uploads/${file.filename}` },
        })));
        return { message: 'Images uploaded', images };
    }
    async removeImage(harvestId, imageId, ownerId) {
        const harvest = await this.db.harvest.findUnique({ where: { id: harvestId } });
        if (!harvest)
            throw new common_1.NotFoundException('Harvest not found');
        if (harvest.owner_id !== ownerId)
            throw new common_1.ForbiddenException('Not the owner of this harvest');
        const image = await this.db.harvest_image.findFirst({
            where: { id: imageId, harvest_id: harvestId },
        });
        if (!image)
            throw new common_1.NotFoundException('Image not found');
        await this.db.harvest_image.delete({ where: { id: imageId } });
        return { message: 'Image removed' };
    }
    async createCategory(category) {
        const existing = await this.db.harvest_category.findUnique({ where: { category } });
        if (existing)
            throw new common_1.BadRequestException('Category already exists');
        return this.db.harvest_category.create({ data: { category } });
    }
    async getCategories() {
        return this.db.harvest_category.findMany({ orderBy: { category: 'asc' } });
    }
};
exports.HarvestService = HarvestService;
exports.HarvestService = HarvestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HarvestService);
//# sourceMappingURL=harvest.service.js.map