import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { BcryptService } from '../../utils/bcrypt.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService, BcryptService],
  exports: [AccountService],
})
export class AccountModule {}
