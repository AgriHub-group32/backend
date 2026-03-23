import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
  let guard: RolesGuard;
  let reflector: jest.Mocked<Reflector>;

  beforeEach(() => {
    reflector = {
      getAllAndOverride: jest.fn(),
    } as any;
    guard = new RolesGuard(reflector);
  });

  const createMockContext = (userType: string): ExecutionContext => ({
    switchToHttp: () => ({
      getRequest: () => ({ user: { type: userType } }),
    }),
    getHandler: () => jest.fn(),
    getClass: () => jest.fn(),
  } as any);

  it('should allow access when no roles are required', () => {
    reflector.getAllAndOverride.mockReturnValue(undefined);

    const result = guard.canActivate(createMockContext('farmer'));

    expect(result).toBe(true);
  });

  it('should allow access when user has required role', () => {
    reflector.getAllAndOverride.mockReturnValue(['farmer']);

    const result = guard.canActivate(createMockContext('farmer'));

    expect(result).toBe(true);
  });

  it('should deny access when user does not have required role', () => {
    reflector.getAllAndOverride.mockReturnValue(['admin']);

    const result = guard.canActivate(createMockContext('farmer'));

    expect(result).toBe(false);
  });

  it('should allow access when user has one of multiple required roles', () => {
    reflector.getAllAndOverride.mockReturnValue(['farmer', 'admin']);

    const result = guard.canActivate(createMockContext('admin'));

    expect(result).toBe(true);
  });

  it('should deny access for wholesaler when only farmer is allowed', () => {
    reflector.getAllAndOverride.mockReturnValue(['farmer']);

    const result = guard.canActivate(createMockContext('wholesaler'));

    expect(result).toBe(false);
  });
});
