import { AccountService } from './account.service';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { ChangePasswordDto } from './dtos/change-password.dto';
import type { user } from '../../generated/prisma/index';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    getProfile(user: user): Promise<{
        id: number;
        full_name: string;
        email: string;
        profile: string | null;
        phone: string | null;
        location: string | null;
        bio: string | null;
        farm_name: string | null;
        business_name: string | null;
        is_verified: boolean;
        is_active: boolean;
        type: import("../../generated/prisma/index").$Enums.user_type;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    updateProfile(user: user, dto: UpdateProfileDto): Promise<{
        message: string;
        profile: {
            id: number;
            full_name: string;
            email: string;
            profile: string | null;
            phone: string | null;
            location: string | null;
            bio: string | null;
            farm_name: string | null;
            business_name: string | null;
            is_verified: boolean;
            is_active: boolean;
            type: import("../../generated/prisma/index").$Enums.user_type;
            created_at: Date | null;
            updated_at: Date | null;
        };
    }>;
    updateProfilePhoto(user: user, file: Express.Multer.File): Promise<{
        message: string;
        profile_url: string;
    }>;
    getPublicProfile(id: number): Promise<{
        avg_rating: number;
        total_reviews: number;
        id: number;
        full_name: string;
        profile: string | null;
        phone: string | null;
        location: string | null;
        bio: string | null;
        farm_name: string | null;
        business_name: string | null;
        is_verified: boolean;
        is_active: boolean;
        type: import("../../generated/prisma/index").$Enums.user_type;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    deactivateAccount(user: user): Promise<{
        message: string;
    }>;
    changePassword(user: user, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
}
