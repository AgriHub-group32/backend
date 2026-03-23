import { Test, TestingModule } from '@nestjs/testing';
import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BcryptService } from './bcrypt.service';

// Mock bcrypt module
jest.mock('bcrypt', () => ({
  __esModule: true,
  default: {
    hash: jest.fn(),
    compare: jest.fn(),
  },
}));

import bcrypt from 'bcrypt';

describe('BcryptService', () => {
  let service: BcryptService;

  beforeEach(async () => {
    const mockConfig = {
      get: jest.fn().mockReturnValue('12'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BcryptService,
        { provide: ConfigService, useValue: mockConfig },
      ],
    }).compile();

    service = module.get<BcryptService>(BcryptService);
  });

  describe('constructor', () => {
    it('should throw if PASSWD_ENCRYP_ROUNDS is not set', async () => {
      const mockConfig = { get: jest.fn().mockReturnValue(undefined) };

      await expect(
        Test.createTestingModule({
          providers: [
            BcryptService,
            { provide: ConfigService, useValue: mockConfig },
          ],
        }).compile(),
      ).rejects.toThrow('No value passed for env var PASSWD_ENCRYP_ROUNDS');
    });
  });

  describe('hash', () => {
    it('should hash a password', async () => {
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashed_password');

      const result = await service.hash('mypassword');

      expect(result).toBe('hashed_password');
      expect(bcrypt.hash).toHaveBeenCalledWith('mypassword', 12);
    });
  });

  describe('verify', () => {
    it('should not throw if passwords match', async () => {
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      await expect(service.verify('raw', 'hashed')).resolves.not.toThrow();
    });

    it('should throw UnauthorizedException if passwords do not match', async () => {
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(service.verify('wrong', 'hashed')).rejects.toThrow(UnauthorizedException);
    });
  });
});
