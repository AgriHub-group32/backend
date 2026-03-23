import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { HarvestService } from './harvest.service';
import { PrismaService } from '../../database/prisma.service';

describe('HarvestService', () => {
  let service: HarvestService;
  let db: jest.Mocked<PrismaService>;

  const mockHarvest = {
    id: 1,
    name: 'Tomatoes',
    quantity: 100,
    unit: 'kg',
    owner_id: 1,
    category: 'Vegetables',
    unit_price: 5.0,
    is_available: true,
    description: 'Fresh tomatoes',
    location: 'Accra',
    created_at: new Date(),
    updated_at: new Date(),
  };

  const mockCategory = { category: 'Vegetables' };

  beforeEach(async () => {
    const mockDb = {
      harvest: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
      harvest_category: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
      },
      harvest_image: {
        create: jest.fn(),
        findFirst: jest.fn(),
        delete: jest.fn(),
        deleteMany: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HarvestService,
        { provide: PrismaService, useValue: mockDb },
      ],
    }).compile();

    service = module.get<HarvestService>(HarvestService);
    db = module.get(PrismaService);
  });

  describe('create', () => {
    const createDto = {
      name: 'Tomatoes',
      quantity: 100,
      unit: 'kg',
      category: 'Vegetables',
      unit_price: 5.0,
    };

    it('should create a harvest listing', async () => {
      (db.harvest_category.findUnique as jest.Mock).mockResolvedValue(mockCategory);
      db.harvest.create.mockResolvedValue(mockHarvest);

      const result = await service.create(1, createDto);

      expect(result.message).toBe('Harvest listing created');
      expect(result.harvest).toEqual(mockHarvest);
    });

    it('should throw BadRequestException if category does not exist', async () => {
      (db.harvest_category.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.create(1, createDto)).rejects.toThrow(BadRequestException);
    });

    it('should set owner_id to the calling user', async () => {
      (db.harvest_category.findUnique as jest.Mock).mockResolvedValue(mockCategory);
      db.harvest.create.mockResolvedValue(mockHarvest);

      await service.create(42, createDto);

      expect(db.harvest.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ owner_id: 42 }),
        }),
      );
    });
  });

  describe('getMyHarvests', () => {
    it('should return harvests for the owner', async () => {
      db.harvest.findMany.mockResolvedValue([mockHarvest]);

      const result = await service.getMyHarvests(1);

      expect(result).toEqual([mockHarvest]);
      expect(db.harvest.findMany).toHaveBeenCalledWith({
        where: { owner_id: 1 },
        include: { harvest_image: true },
        orderBy: { created_at: 'desc' },
      });
    });

    it('should return empty array if farmer has no harvests', async () => {
      db.harvest.findMany.mockResolvedValue([]);

      const result = await service.getMyHarvests(1);

      expect(result).toEqual([]);
    });
  });

  describe('getById', () => {
    it('should return harvest with images and user', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);

      const result = await service.getById(1);

      expect(result).toEqual(mockHarvest);
    });

    it('should throw NotFoundException if harvest not found', async () => {
      db.harvest.findUnique.mockResolvedValue(null);

      await expect(service.getById(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update harvest fields', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      db.harvest.update.mockResolvedValue({ ...mockHarvest, name: 'Cherry Tomatoes' });

      const result = await service.update(1, 1, { name: 'Cherry Tomatoes' });

      expect(result.message).toBe('Harvest updated');
    });

    it('should throw NotFoundException if harvest not found', async () => {
      db.harvest.findUnique.mockResolvedValue(null);

      await expect(service.update(999, 1, { name: 'Test' })).rejects.toThrow(NotFoundException);
    });

    it('should throw ForbiddenException if not the owner', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest); // owner_id: 1

      await expect(service.update(1, 2, { name: 'Test' })).rejects.toThrow(ForbiddenException);
    });

    it('should validate category if being updated', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      (db.harvest_category.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(
        service.update(1, 1, { category: 'NonExistentCategory' }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should skip category validation if not updating category', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      db.harvest.update.mockResolvedValue(mockHarvest);

      await service.update(1, 1, { name: 'New Name' });

      expect(db.harvest_category.findUnique).not.toHaveBeenCalled();
    });
  });

  describe('delete', () => {
    it('should delete harvest and its images', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      (db.harvest_image.deleteMany as jest.Mock).mockResolvedValue({ count: 2 });
      db.harvest.delete.mockResolvedValue(mockHarvest);

      const result = await service.delete(1, 1);

      expect(result.message).toBe('Harvest deleted');
      expect(db.harvest_image.deleteMany).toHaveBeenCalledWith({ where: { harvest_id: 1 } });
      expect(db.harvest.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw NotFoundException if harvest not found', async () => {
      db.harvest.findUnique.mockResolvedValue(null);

      await expect(service.delete(999, 1)).rejects.toThrow(NotFoundException);
    });

    it('should throw ForbiddenException if not the owner', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);

      await expect(service.delete(1, 2)).rejects.toThrow(ForbiddenException);
    });
  });

  describe('addImages', () => {
    const mockFiles = [
      { filename: 'image1.jpg' },
      { filename: 'image2.png' },
    ] as Express.Multer.File[];

    it('should add images to a harvest', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      (db.harvest_image.create as jest.Mock).mockResolvedValue({ id: 1, harvest_id: 1, img_url: '/uploads/image1.jpg' });

      const result = await service.addImages(1, 1, mockFiles);

      expect(result.message).toBe('Images uploaded');
      expect(db.harvest_image.create).toHaveBeenCalledTimes(2);
    });

    it('should throw ForbiddenException if not the owner', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);

      await expect(service.addImages(1, 2, mockFiles)).rejects.toThrow(ForbiddenException);
    });
  });

  describe('removeImage', () => {
    it('should remove an image', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      (db.harvest_image.findFirst as jest.Mock).mockResolvedValue({ id: 10, harvest_id: 1 });
      (db.harvest_image.delete as jest.Mock).mockResolvedValue({});

      const result = await service.removeImage(1, 10, 1);

      expect(result.message).toBe('Image removed');
    });

    it('should throw NotFoundException if image not found', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      (db.harvest_image.findFirst as jest.Mock).mockResolvedValue(null);

      await expect(service.removeImage(1, 999, 1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('createCategory', () => {
    it('should create a new category', async () => {
      (db.harvest_category.findUnique as jest.Mock).mockResolvedValue(null);
      (db.harvest_category.create as jest.Mock).mockResolvedValue({ category: 'Fruits' });

      const result = await service.createCategory('Fruits');

      expect(result).toEqual({ category: 'Fruits' });
    });

    it('should throw BadRequestException if category exists', async () => {
      (db.harvest_category.findUnique as jest.Mock).mockResolvedValue(mockCategory);

      await expect(service.createCategory('Vegetables')).rejects.toThrow(BadRequestException);
    });
  });

  describe('getCategories', () => {
    it('should return all categories sorted alphabetically', async () => {
      const categories = [{ category: 'Fruits' }, { category: 'Vegetables' }];
      (db.harvest_category.findMany as jest.Mock).mockResolvedValue(categories);

      const result = await service.getCategories();

      expect(result).toEqual(categories);
      expect(db.harvest_category.findMany).toHaveBeenCalledWith({ orderBy: { category: 'asc' } });
    });
  });
});
