import { PrismaService } from '../../database/prisma.service';
import { BcryptService } from '../../utils/bcrypt.service';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { ChangePasswordDto } from './dtos/change-password.dto';
export declare class AccountService {
    private readonly db;
    private readonly bcrypt;
    constructor(db: PrismaService, bcrypt: BcryptService);
    getProfile(userId: number): Promise<{
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
    updateProfile(userId: number, dto: UpdateProfileDto): Promise<{
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
    updateProfilePhoto(userId: number, photoUrl: string): Promise<{
        message: string;
        profile_url: string;
    }>;
    getPublicProfile(userId: number): Promise<{
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
    deactivateAccount(userId: number): Promise<{
        message: string;
    }>;
    changePassword(userId: number, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
}
