import { PrismaService } from "../../database/prisma.service";
import { BcryptService } from "../../utils/bcrypt.service";
import { AuthTokenService } from "../../utils/authToken.service";
import { SignupDto } from "./dtos/signup.dto";
import { LoginDto } from "./dtos/login.dto";
import { RequestResetDto, ConfirmResetDto } from "./dtos/reset-password.dto";
export declare class AuthService {
    private readonly db;
    private readonly bcrypt;
    private readonly authToken;
    private resetTokens;
    constructor(db: PrismaService, bcrypt: BcryptService, authToken: AuthTokenService);
    signup(dto: SignupDto): Promise<{
        message: string;
        user: {
            id: number;
            full_name: string;
            email: string;
            type: import("src/generated/prisma").$Enums.user_type;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    login(dto: LoginDto): Promise<{
        message: string;
        user: {
            id: number;
            full_name: string;
            email: string;
            type: "farmer" | "wholesaler";
        };
        accessToken: string;
        refreshToken: string;
    }>;
    adminLogin(dto: LoginDto): Promise<{
        message: string;
        user: {
            id: number;
            full_name: string;
            email: string;
            type: "admin";
        };
        accessToken: string;
        refreshToken: string;
    }>;
    requestPasswordReset(dto: RequestResetDto): Promise<{
        message: string;
        resetToken: string;
    }>;
    confirmPasswordReset(dto: ConfirmResetDto): Promise<{
        message: string;
    }>;
}
