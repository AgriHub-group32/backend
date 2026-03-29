import { AuthTokenType } from "../types/general";
import { JwtService } from "@nestjs/jwt";
import { Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../database/prisma.service";
declare const AuthTokenService_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class AuthTokenService extends AuthTokenService_base {
    private readonly jwtService;
    private readonly config;
    private readonly dbClient;
    constructor(jwtService: JwtService, config: ConfigService, dbClient: PrismaService);
    genToken(userId: number, type?: AuthTokenType): Promise<string>;
    validate(payload: {
        sub: number;
    }): Promise<{
        id: number;
        full_name: string;
        email: string;
        passwd: string;
        profile: string | null;
        phone: string | null;
        location: string | null;
        bio: string | null;
        farm_name: string | null;
        business_name: string | null;
        is_verified: boolean;
        is_active: boolean;
        type: import("src/generated/prisma").$Enums.user_type;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    verifyToken(token: string): Promise<number>;
}
export {};
