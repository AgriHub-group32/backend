import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { BcryptService } from '../../utils/bcrypt.service';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { ChangePasswordDto } from './dtos/change-password.dto';
import type { user } from '../../generated/prisma/index';

@Injectable()
export class AccountService {
  constructor(
    private readonly db: PrismaService,
    private readonly bcrypt: BcryptService,
  ) {}

  async getProfile(userId: number) {
    const user = await this.db.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');
    const { passwd, ...profile } = user;
    return profile;
  }

  async updateProfile(userId: number, dto: UpdateProfileDto) {
    const user = await this.db.user.update({
      where: { id: userId },
      data: dto,
    });
    const { passwd, ...profile } = user;
    return { message: 'Profile updated successfully', profile };
  }

  async updateProfilePhoto(userId: number, photoUrl: string) {
    await this.db.user.update({
      where: { id: userId },
      data: { profile: photoUrl },
    });
    return { message: 'Profile photo updated', profile_url: photoUrl };
  }

  async getPublicProfile(userId: number) {
    const user = await this.db.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const avgRating = await this.db.review.aggregate({
      where: { reviewee_id: userId },
      _avg: { rating: true },
      _count: { rating: true },
    });

    const { passwd, email, ...publicProfile } = user;
    return {
      ...publicProfile,
      avg_rating: avgRating._avg.rating,
      total_reviews: avgRating._count.rating,
    };
  }

  async deactivateAccount(userId: number) {
    await this.db.user.update({
      where: { id: userId },
      data: { is_active: false },
    });
    return { message: 'Account deactivated successfully' };
  }

  async changePassword(userId: number, dto: ChangePasswordDto) {
    const user = await this.db.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    await this.bcrypt.verify(dto.old_password, user.passwd);

    const hashedPassword = await this.bcrypt.hash(dto.new_password);
    await this.db.user.update({
      where: { id: userId },
      data: { passwd: hashedPassword },
    });

    return { message: 'Password changed successfully' };
  }
}
