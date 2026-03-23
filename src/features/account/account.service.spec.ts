import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AccountService } from './account.service';
import { PrismaService } from '../../database/prisma.service';
import { BcryptService } from '../../utils/bcrypt.service';

describe('AccountService', () => {
  let service: AccountService;
  let db: jest.Mocked<PrismaService>;
  let bcrypt: jest.Mocked<BcryptService>;

  const mockUser = {
    id: 1,
    full_name: 'John Farmer',
    email: 'john@example.com',
    passwd: 'hashed_password',
    profile: null,
    is_verified: false,
    type: 'farmer' as const,
    phone: null,
    location: 'Accra',
    bio: null,
    farm_name: 'John Farm',
    business_name: null,
    is_active: true,
    created_at: new Date(),
  };

  beforeEach(async () => {
    const mockDb = {
      user: {
        findUnique: jest.fn(),
        update: jest.fn(),
      },
      review: {
        aggregate: jest.fn(),
      },
    };

    const mockBcrypt = {
      hash: jest.fn(),
      verify: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountService,
        { provide: PrismaService, useValue: mockDb },
        { provide: BcryptService, useValue: mockBcrypt },
      ],
    }).compile();

    service = module.get<AccountService>(AccountService);
    db = module.get(PrismaService);
    bcrypt = module.get(BcryptService);
  });

  describe('getProfile', () => {
    it('should return user profile without password', async () => {
      db.user.findUnique.mockResolvedValue(mockUser);

      const result = await service.getProfile(1);

      expect(result).not.toHaveProperty('passwd');
      expect(result).toHaveProperty('full_name', 'John Farmer');
      expect(result).toHaveProperty('email', 'john@example.com');
    });

    it('should throw NotFoundException if user not found', async () => {
      db.user.findUnique.mockResolvedValue(null);

      await expect(service.getProfile(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('updateProfile', () => {
    it('should update profile and return without password', async () => {
      const updatedUser = { ...mockUser, full_name: 'John Updated' };
      db.user.update.mockResolvedValue(updatedUser);

      const result = await service.updateProfile(1, { full_name: 'John Updated' });

      expect(result.message).toBe('Profile updated successfully');
      expect(result.profile).not.toHaveProperty('passwd');
      expect(result.profile.full_name).toBe('John Updated');
    });

    it('should pass the DTO directly to prisma update', async () => {
      db.user.update.mockResolvedValue(mockUser);
      const dto = { full_name: 'New Name', location: 'Kumasi' };

      await service.updateProfile(1, dto);

      expect(db.user.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: dto,
      });
    });
  });

  describe('updateProfilePhoto', () => {
    it('should update profile photo URL', async () => {
      db.user.update.mockResolvedValue(mockUser);

      const result = await service.updateProfilePhoto(1, '/uploads/photo.jpg');

      expect(result.message).toBe('Profile photo updated');
      expect(result.profile_url).toBe('/uploads/photo.jpg');
      expect(db.user.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { profile: '/uploads/photo.jpg' },
      });
    });
  });

  describe('getPublicProfile', () => {
    it('should return public profile without email and password', async () => {
      db.user.findUnique.mockResolvedValue(mockUser);
      (db.review.aggregate as jest.Mock).mockResolvedValue({
        _avg: { rating: 4.5 },
        _count: { rating: 10 },
      });

      const result = await service.getPublicProfile(1);

      expect(result).not.toHaveProperty('passwd');
      expect(result).not.toHaveProperty('email');
      expect(result.avg_rating).toBe(4.5);
      expect(result.total_reviews).toBe(10);
    });

    it('should throw NotFoundException if user not found', async () => {
      db.user.findUnique.mockResolvedValue(null);

      await expect(service.getPublicProfile(999)).rejects.toThrow(NotFoundException);
    });

    it('should handle user with no reviews', async () => {
      db.user.findUnique.mockResolvedValue(mockUser);
      (db.review.aggregate as jest.Mock).mockResolvedValue({
        _avg: { rating: null },
        _count: { rating: 0 },
      });

      const result = await service.getPublicProfile(1);

      expect(result.avg_rating).toBeNull();
      expect(result.total_reviews).toBe(0);
    });
  });

  describe('deactivateAccount', () => {
    it('should set is_active to false', async () => {
      db.user.update.mockResolvedValue({ ...mockUser, is_active: false });

      const result = await service.deactivateAccount(1);

      expect(result.message).toBe('Account deactivated successfully');
      expect(db.user.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { is_active: false },
      });
    });
  });

  describe('changePassword', () => {
    it('should change password when old password is correct', async () => {
      db.user.findUnique.mockResolvedValue(mockUser);
      bcrypt.verify.mockResolvedValue(undefined);
      bcrypt.hash.mockResolvedValue('new_hashed_password');
      db.user.update.mockResolvedValue(mockUser);

      const result = await service.changePassword(1, {
        old_password: 'oldpass',
        new_password: 'newpass123',
      });

      expect(result.message).toBe('Password changed successfully');
      expect(bcrypt.verify).toHaveBeenCalledWith('oldpass', 'hashed_password');
      expect(bcrypt.hash).toHaveBeenCalledWith('newpass123');
    });

    it('should throw NotFoundException if user not found', async () => {
      db.user.findUnique.mockResolvedValue(null);

      await expect(
        service.changePassword(999, { old_password: 'old', new_password: 'new' }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw UnauthorizedException if old password is wrong', async () => {
      db.user.findUnique.mockResolvedValue(mockUser);
      bcrypt.verify.mockRejectedValue(new UnauthorizedException());

      await expect(
        service.changePassword(1, { old_password: 'wrong', new_password: 'new' }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});
