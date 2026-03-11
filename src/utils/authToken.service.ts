import { Injectable } from "@nestjs/common";
import { AuthTokenType } from "../types/general.js";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../database/prisma.service.js";

@Injectable()
export class AuthTokenService extends PassportStrategy(Strategy) {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
    private readonly dbClient: PrismaService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>("JWT_SECRET")!,
    });
  }

  async genToken(userId: number, type: AuthTokenType = "refresh") {
    return type === "refresh"
      ? await this.jwtService.signAsync({ sub: userId }, { expiresIn: "30d" })
      : await this.jwtService.signAsync({ sub: userId }, { expiresIn: "10m" });
  }

  async validate(payload: { sub: number }) {
    return await this.dbClient.user.findUnique({ where: { id: payload.sub } });
  }

  async verifyToken(token: string): Promise<number> {
    const payload = await this.jwtService.verifyAsync<{ sub: number }>(token);
    return payload.sub;
  }
}
