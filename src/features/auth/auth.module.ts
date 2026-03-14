import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthTokenService } from "../../utils/authToken.service";
import { BcryptService } from "../../utils/bcrypt.service";

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>("JWT_SECRET"),
        signOptions: { expiresIn: "10m" },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthTokenService, BcryptService],
  exports: [AuthTokenService],
})
export class AuthModule {}
