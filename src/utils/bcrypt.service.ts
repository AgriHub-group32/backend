import bcrypt from "bcrypt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class BcryptService {
  encryptRo: number;
  constructor(private readonly config: ConfigService) {
    this.encryptRo = +this.config.get("PASSWD_ENCRYP_ROUNDS");

    if (!this.encryptRo)
      throw new Error("No value passed for evn var PASSWD_ENCRYP_ROUNDS");
  }
  encryptData = async (rawPassword: string): Promise<string> => {
    return await bcrypt.hash(
      rawPassword,
      Number(process.env.PasswordEncrptRounds!),
    );
  };

  verifyEncryptedData = async (rawData: string, encryptedData: string) => {
    const isPasswordCorrect = await bcrypt.compare(rawData, encryptedData);
    if (!isPasswordCorrect)
      throw new UnauthorizedException("Invalid email or password");
  };
}
