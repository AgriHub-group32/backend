import { ConfigService } from "@nestjs/config";
export declare class BcryptService {
    private readonly config;
    private encryptRounds;
    constructor(config: ConfigService);
    hash(rawPassword: string): Promise<string>;
    verify(rawData: string, hashedData: string): Promise<void>;
}
