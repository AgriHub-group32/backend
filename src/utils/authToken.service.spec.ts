import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthTokenService } from './authToken.service';
import { PrismaService } from '../database/prisma.service';

describe('AuthTokenService', () => {
  let service: AuthTokenService;
  let jwtService: jest.Mocked<JwtService>;
  let dbClient: jest.Mocked<PrismaService>;

  const mockUser = {
    id: 1,
    full_name: 'Test User',
    email: 'test@example.com',
    passwd: 'hashed',
    type: 'farmer',
  };

  beforeEach(async () => {
    const mockJwt = {
      signAsync: jest.fn(),
      verifyAsync: jest.fn(),
    };

    const mockConfig = {
      get: jest.fn().mockReturnValue('test-secret'),
    };

    const mockDb = {
      user: {
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthTokenService,
        { provide: JwtService, useValue: mockJwt },
        { provide: ConfigService, useValue: mockConfig },
        { provide: PrismaService, useValue: mockDb },
      ],
    }).compile();

    service = module.get<AuthTokenService>(AuthTokenService);
    jwtService = module.get(JwtService);
    dbClient = module.get(PrismaService);
  });

  describe('genToken', () => {
    it('should generate an access token with 10m expiry', async () => {
      jwtService.signAsync.mockResolvedValue('access_token');

      const result = await service.genToken(1, 'access');

      expect(result).toBe('access_token');
      expect(jwtService.signAsync).toHaveBeenCalledWith({ sub: 1 }, { expiresIn: '10m' });
    });

    it('should generate a refresh token with 30d expiry', async () => {
      jwtService.signAsync.mockResolvedValue('refresh_token');

      const result = await service.genToken(1, 'refresh');

      expect(result).toBe('refresh_token');
      expect(jwtService.signAsync).toHaveBeenCalledWith({ sub: 1 }, { expiresIn: '30d' });
    });

    it('should default to refresh token type', async () => {
      jwtService.signAsync.mockResolvedValue('refresh_token');

      await service.genToken(1);

      expect(jwtService.signAsync).toHaveBeenCalledWith({ sub: 1 }, { expiresIn: '30d' });
    });
  });

  describe('validate', () => {
    it('should return user from database', async () => {
      dbClient.user.findUnique.mockResolvedValue(mockUser as any);

      const result = await service.validate({ sub: 1 });

      expect(result).toEqual(mockUser);
      expect(dbClient.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should return null if user not found', async () => {
      dbClient.user.findUnique.mockResolvedValue(null);

      const result = await service.validate({ sub: 999 });

      expect(result).toBeNull();
    });
  });

  describe('verifyToken', () => {
    it('should return userId from token', async () => {
      jwtService.verifyAsync.mockResolvedValue({ sub: 42 });

      const result = await service.verifyToken('valid_token');

      expect(result).toBe(42);
    });

    it('should throw if token is invalid', async () => {
      jwtService.verifyAsync.mockRejectedValue(new Error('Invalid token'));

      await expect(service.verifyToken('invalid')).rejects.toThrow();
    });
  });
});
