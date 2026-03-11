import bcrypt from "bcrypt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class BcryptService {
  private encryptRounds: number;

  constructor(private readonly config: ConfigService) {
    this.encryptRounds = +this.config.get("PASSWD_ENCRYP_ROUNDS");
    if (!this.encryptRounds)
      throw new Error("No value passed for env var PASSWD_ENCRYP_ROUNDS");
  }

  async hash(rawPassword: string): Promise<string> {
    return await bcrypt.hash(rawPassword, this.encryptRounds);
  }

  async verify(rawData: string, hashedData: string): Promise<void> {
    const isMatch = await bcrypt.compare(rawData, hashedData);
    if (!isMatch)
      throw new UnauthorizedException("Invalid email or password");
  }
}
