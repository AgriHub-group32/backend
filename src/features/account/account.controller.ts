import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { multerOptions } from '../../common/config/multer.config';
import { AccountService } from './account.service';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { ChangePasswordDto } from './dtos/change-password.dto';
import type { user } from '../../generated/prisma/index';

@Controller('account')
@UseGuards(JwtAuthGuard)
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('profile')
  getProfile(@CurrentUser() user: user) {
    return this.accountService.getProfile(user.id);
  }

  @Patch('profile')
  updateProfile(@CurrentUser() user: user, @Body() dto: UpdateProfileDto) {
    return this.accountService.updateProfile(user.id, dto);
  }

  @Patch('profile/photo')
  @UseInterceptors(FileInterceptor('photo', multerOptions))
  updateProfilePhoto(
    @CurrentUser() user: user,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const photoUrl = `/uploads/${file.filename}`;
    return this.accountService.updateProfilePhoto(user.id, photoUrl);
  }

  @Get('profile/:id')
  getPublicProfile(@Param('id', ParseIntPipe) id: number) {
    return this.accountService.getPublicProfile(id);
  }

  @Patch('deactivate')
  deactivateAccount(@CurrentUser() user: user) {
    return this.accountService.deactivateAccount(user.id);
  }

  @Patch('change-password')
  changePassword(@CurrentUser() user: user, @Body() dto: ChangePasswordDto) {
    return this.accountService.changePassword(user.id, dto);
  }
}
