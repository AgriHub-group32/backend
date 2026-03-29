import { AuthService } from "./auth.service";
import { SignupDto } from "./dtos/signup.dto";
import { LoginDto } from "./dtos/login.dto";
import { RequestResetDto, ConfirmResetDto } from "./dtos/reset-password.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    requestReset(dto: RequestResetDto): Promise<{
        message: string;
        resetToken: string;
    }>;
    confirmReset(dto: ConfirmResetDto): Promise<{
        message: string;
    }>;
}
