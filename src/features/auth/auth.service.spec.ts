import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, UnauthorizedException, NotFoundException, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from '../../database/prisma.service';
import { BcryptService } from '../../utils/bcrypt.service';
import { AuthTokenService } from '../../utils/authToken.service';

describe('AuthService', () => {
  let service: AuthService;
  let db: jest.Mocked<PrismaService>;
  let bcrypt: jest.Mocked<BcryptService>;
  let authToken: jest.Mocked<AuthTokenService>;

  const mockUser = {
    id: 1,
    full_name: 'John Farmer',
    email: 'john@example.com',
    passwd: 'hashed_password',
    profile: null,
    is_verified: false,
    type: 'farmer' as const,
  };

  beforeEach(async () => {
    const mockDb = {
      user: {
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
      },
    };

    const mockBcrypt = {
      hash: jest.fn(),
      verify: jest.fn(),
    };

    const mockAuthToken = {
      genToken: jest.fn(),
      verifyToken: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockDb },
        { provide: BcryptService, useValue: mockBcrypt },
        { provide: AuthTokenService, useValue: mockAuthToken },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    db = module.get(PrismaService);
    bcrypt = module.get(BcryptService);
    authToken = module.get(AuthTokenService);
  });

  describe('signup', () => {
    const signupDto = {
      full_name: 'John Farmer',
      email: 'john@example.com',
      password: 'password123',
      type: 'farmer' as const,
    };

    it('should create a new user and return tokens', async () => {
      db.user.findUnique.mockResolvedValue(null);
      db.user.create.mockResolvedValue(mockUser);
      bcrypt.hash.mockResolvedValue('hashed_password');
      authToken.genToken.mockResolvedValueOnce('access_token').mockResolvedValueOnce('refresh_token');

      const result = await service.signup(signupDto);

      expect(db.user.findUnique).toHaveBeenCalledWith({ where: { email: signupDto.email } });
      expect(bcrypt.hash).toHaveBeenCalledWith(signupDto.password);
      expect(db.user.create).toHaveBeenCalledWith({
        data: {
          full_name: signupDto.full_name,
          email: signupDto.email,
          passwd: 'hashed_password',
          type: signupDto.type,
        },
      });
      expect(result).toEqual({
        message: 'Account created successfully',
        user: { id: 1, full_name: 'John Farmer', email: 'john@example.com', type: 'farmer' },
        accessToken: 'access_token',
        refreshToken: 'refresh_token',
      });
    });

    it('should throw ConflictException if email already exists', async () => {
      db.user.findUnique.mockResolvedValue(mockUser);

      await expect(service.signup(signupDto)).rejects.toThrow(ConflictException);
      expect(db.user.create).not.toHaveBeenCalled();
    });

    it('should generate access token first, then refresh token', async () => {
      db.user.findUnique.mockResolvedValue(null);
      db.user.create.mockResolvedValue(mockUser);
      bcrypt.hash.mockResolvedValue('hashed');
      authToken.genToken.mockResolvedValue('token');

      await service.signup(signupDto);

      expect(authToken.genToken).toHaveBeenNthCalledWith(1, 1, 'access');
      expect(authToken.genToken).toHaveBeenNthCalledWith(2, 1, 'refresh');
    });
  });

  describe('login', () => {
    const loginDto = { email: 'john@example.com', password: 'password123' };

    it('should return tokens on valid credentials', async () => {
      db.user.findUnique.mockResolvedValue(mockUser);
      bcrypt.verify.mockResolvedValue(undefined);
      authToken.genToken.mockResolvedValueOnce('access_token').mockResolvedValueOnce('refresh_token');

      const result = await service.login(loginDto);

      expect(result.accessToken).toBe('access_token');
      expect(result.refreshToken).toBe('refresh_token');
      expect(result.message).toBe('Login successful');
    });

    it('should throw UnauthorizedException if user not found', async () => {
      db.user.findUnique.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if password is wrong', async () => {
      db.user.findUnique.mockResolvedValue(mockUser);
      bcrypt.verify.mockRejectedValue(new UnauthorizedException());

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });

    it('should block admin users from normal login', async () => {
      const adminUser = { ...mockUser, type: 'admin' as const };
      db.user.findUnique.mockResolvedValue(adminUser);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
      expect(bcrypt.verify).not.toHaveBeenCalled();
    });
  });

  describe('adminLogin', () => {
    const loginDto = { email: 'admin@example.com', password: 'admin123' };

    it('should allow admin users to log in', async () => {
      const adminUser = { ...mockUser, type: 'admin' as const, email: 'admin@example.com' };
      db.user.findUnique.mockResolvedValue(adminUser);
      bcrypt.verify.mockResolvedValue(undefined);
      authToken.genToken.mockResolvedValue('token');

      const result = await service.adminLogin(loginDto);

      expect(result.message).toBe('Admin login successful');
    });

    it('should reject non-admin users', async () => {
      db.user.findUnique.mockResolvedValue(mockUser); // type: 'farmer'

      await expect(service.adminLogin(loginDto)).rejects.toThrow(UnauthorizedException);
    });

    it('should throw if user not found', async () => {
      db.user.findUnique.mockResolvedValue(null);

      await expect(service.adminLogin(loginDto)).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('requestPasswordReset', () => {
    it('should generate a reset token for existing user', async () => {
      db.user.findUnique.mockResolvedValue(mockUser);
      authToken.genToken.mockResolvedValue('reset_token_abc');

      const result = await service.requestPasswordReset({ email: 'john@example.com' });

      expect(result.resetToken).toBe('reset_token_abc');
    });

    it('should throw NotFoundException if email not found', async () => {
      db.user.findUnique.mockResolvedValue(null);

      await expect(
        service.requestPasswordReset({ email: 'nonexistent@example.com' }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('confirmPasswordReset', () => {
    it('should reset password with valid token', async () => {
      // First generate a reset token
      db.user.findUnique.mockResolvedValue(mockUser);
      authToken.genToken.mockResolvedValue('valid_reset_token');
      await service.requestPasswordReset({ email: 'john@example.com' });

      // Now confirm
      bcrypt.hash.mockResolvedValue('new_hashed_password');
      db.user.update.mockResolvedValue({ ...mockUser, passwd: 'new_hashed_password' });

      const result = await service.confirmPasswordReset({
        token: 'valid_reset_token',
        new_password: 'newpassword123',
      });

      expect(result.message).toBe('Password reset successfully');
      expect(db.user.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { passwd: 'new_hashed_password' },
      });
    });

    it('should throw BadRequestException for invalid token', async () => {
      await expect(
        service.confirmPasswordReset({
          token: 'invalid_token',
          new_password: 'newpassword123',
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException for expired token', async () => {
      // Manually set an expired token via the internal map
      // We need to use the service's internal state
      db.user.findUnique.mockResolvedValue(mockUser);
      authToken.genToken.mockResolvedValue('expired_token');
      await service.requestPasswordReset({ email: 'john@example.com' });

      // Manually expire it by accessing private field
      const resetTokens = (service as any).resetTokens as Map<string, { userId: number; expiresAt: number }>;
      const entry = resetTokens.get('expired_token');
      if (entry) entry.expiresAt = Date.now() - 1000; // Set to past

      await expect(
        service.confirmPasswordReset({
          token: 'expired_token',
          new_password: 'newpassword123',
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should delete token after successful reset', async () => {
      db.user.findUnique.mockResolvedValue(mockUser);
      authToken.genToken.mockResolvedValue('one_time_token');
      await service.requestPasswordReset({ email: 'john@example.com' });

      bcrypt.hash.mockResolvedValue('hashed');
      db.user.update.mockResolvedValue(mockUser);
      await service.confirmPasswordReset({
        token: 'one_time_token',
        new_password: 'newpass123',
      });

      // Token should be consumed - second attempt should fail
      await expect(
        service.confirmPasswordReset({
          token: 'one_time_token',
          new_password: 'newpass456',
        }),
      ).rejects.toThrow(BadRequestException);
    });
  });
});
