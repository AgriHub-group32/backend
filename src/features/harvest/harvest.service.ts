import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateHarvestDto } from './dtos/create-harvest.dto';
import { UpdateHarvestDto } from './dtos/update-harvest.dto';

@Injectable()
export class HarvestService {
  constructor(private readonly db: PrismaService) {}

  async create(ownerId: number, dto: CreateHarvestDto) {
    const category = await this.db.harvest_category.findUnique({
      where: { category: dto.category },
    });
    if (!category) throw new BadRequestException(`Category '${dto.category}' does not exist`);

    const harvest = await this.db.harvest.create({
      data: {
        ...dto,
        owner_id: ownerId,
      },
    });
    return { message: 'Harvest listing created', harvest };
  }

  async getMyHarvests(ownerId: number) {
    return this.db.harvest.findMany({
      where: { owner_id: ownerId },
      include: { harvest_image: true },
      orderBy: { created_at: 'desc' },
    });
  }

  async getById(id: number) {
    const harvest = await this.db.harvest.findUnique({
      where: { id },
      include: {
        harvest_image: true,
        user: { select: { id: true, full_name: true, profile: true, type: true, location: true } },
      },
    });
    if (!harvest) throw new NotFoundException('Harvest not found');
    return harvest;
  }

  async update(id: number, ownerId: number, dto: UpdateHarvestDto) {
    const harvest = await this.db.harvest.findUnique({ where: { id } });
    if (!harvest) throw new NotFoundException('Harvest not found');
    if (harvest.owner_id !== ownerId) throw new ForbiddenException('Not the owner of this harvest');

    if (dto.category) {
      const category = await this.db.harvest_category.findUnique({
        where: { category: dto.category },
      });
      if (!category) throw new BadRequestException(`Category '${dto.category}' does not exist`);
    }

    const updated = await this.db.harvest.update({
      where: { id },
      data: dto,
    });
    return { message: 'Harvest updated', harvest: updated };
  }

  async delete(id: number, ownerId: number) {
    const harvest = await this.db.harvest.findUnique({ where: { id } });
    if (!harvest) throw new NotFoundException('Harvest not found');
    if (harvest.owner_id !== ownerId) throw new ForbiddenException('Not the owner of this harvest');

    await this.db.harvest_image.deleteMany({ where: { harvest_id: id } });
    await this.db.harvest.delete({ where: { id } });
    return { message: 'Harvest deleted' };
  }

  async addImages(harvestId: number, ownerId: number, files: Express.Multer.File[]) {
    const harvest = await this.db.harvest.findUnique({ where: { id: harvestId } });
    if (!harvest) throw new NotFoundException('Harvest not found');
    if (harvest.owner_id !== ownerId) throw new ForbiddenException('Not the owner of this harvest');

    const images = await Promise.all(
      files.map((file) =>
        this.db.harvest_image.create({
          data: { harvest_id: harvestId, img_url: `/uploads/${file.filename}` },
        }),
      ),
    );
    return { message: 'Images uploaded', images };
  }

  async removeImage(harvestId: number, imageId: number, ownerId: number) {
    const harvest = await this.db.harvest.findUnique({ where: { id: harvestId } });
    if (!harvest) throw new NotFoundException('Harvest not found');
    if (harvest.owner_id !== ownerId) throw new ForbiddenException('Not the owner of this harvest');

    const image = await this.db.harvest_image.findFirst({
      where: { id: imageId, harvest_id: harvestId },
    });
    if (!image) throw new NotFoundException('Image not found');

    await this.db.harvest_image.delete({ where: { id: imageId } });
    return { message: 'Image removed' };
  }

  async createCategory(category: string) {
    const existing = await this.db.harvest_category.findUnique({ where: { category } });
    if (existing) throw new BadRequestException('Category already exists');
    return this.db.harvest_category.create({ data: { category } });
  }

  async getCategories() {
    return this.db.harvest_category.findMany({ orderBy: { category: 'asc' } });
  }
}
