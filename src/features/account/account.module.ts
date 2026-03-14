import { Module } from '@nestjs/common';
import { AccountController } from './account.controller.js';
import { AccountService } from './account.service.js';
import { BcryptService } from '../../utils/bcrypt.service.js';

@Module({
  controllers: [AccountController],
  providers: [AccountService, BcryptService],
  exports: [AccountService],
})
export class AccountModule {}
