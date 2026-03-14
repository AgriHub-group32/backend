import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service";
import { BcryptService } from "../../utils/bcrypt.service";
import { AuthTokenService } from "../../utils/authToken.service";
import { SignupDto } from "./dtos/signup.dto";
import { LoginDto } from "./dtos/login.dto";
import { RequestResetDto, ConfirmResetDto } from "./dtos/reset-password.dto";

@Injectable()
export class AuthService {
  // In-memory store for reset tokens (replace with Redis/DB in production)
  private resetTokens = new Map<string, { userId: number; expiresAt: number }>();

  constructor(
    private readonly db: PrismaService,
    private readonly bcrypt: BcryptService,
    private readonly authToken: AuthTokenService,
  ) {}

  async signup(dto: SignupDto) {
    const existing = await this.db.user.findUnique({ where: { email: dto.email } });
    if (existing) throw new ConflictException("Email already in use");

    const hashedPassword = await this.bcrypt.hash(dto.password);

    const user = await this.db.user.create({
      data: {
        full_name: dto.full_name,
        email: dto.email,
        passwd: hashedPassword,
        type: dto.type,
      },
    });

    const accessToken = await this.authToken.genToken(user.id, "access");
    const refreshToken = await this.authToken.genToken(user.id, "refresh");

    return {
      message: "Account created successfully",
      user: { id: user.id, full_name: user.full_name, email: user.email, type: user.type },
      accessToken,
      refreshToken,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.db.user.findUnique({ where: { email: dto.email } });
    if (!user) throw new UnauthorizedException("Invalid email or password");

    // Block admin users from using normal login
    if (user.type === "admin")
      throw new UnauthorizedException("Admins must use the admin login route");

    await this.bcrypt.verify(dto.password, user.passwd);

    const accessToken = await this.authToken.genToken(user.id, "access");
    const refreshToken = await this.authToken.genToken(user.id, "refresh");

    return {
      message: "Login successful",
      user: { id: user.id, full_name: user.full_name, email: user.email, type: user.type },
      accessToken,
      refreshToken,
    };
  }

  async adminLogin(dto: LoginDto) {
    const user = await this.db.user.findUnique({ where: { email: dto.email } });
    if (!user) throw new UnauthorizedException("Invalid email or password");

    if (user.type !== "admin")
      throw new UnauthorizedException("This route is for admin users only");

    await this.bcrypt.verify(dto.password, user.passwd);

    const accessToken = await this.authToken.genToken(user.id, "access");
    const refreshToken = await this.authToken.genToken(user.id, "refresh");

    return {
      message: "Admin login successful",
      user: { id: user.id, full_name: user.full_name, email: user.email, type: user.type },
      accessToken,
      refreshToken,
    };
  }

  async requestPasswordReset(dto: RequestResetDto) {
    const user = await this.db.user.findUnique({ where: { email: dto.email } });
    if (!user) throw new NotFoundException("No account found with that email");

    // Generate a reset token (valid for 15 minutes)
    const resetToken = await this.authToken.genToken(user.id, "access");
    this.resetTokens.set(resetToken, {
      userId: user.id,
      expiresAt: Date.now() + 15 * 60 * 1000,
    });

    // In production, send this token via email
    return {
      message: "Password reset token generated. Use it to reset your password.",
      resetToken,
    };
  }

  async confirmPasswordReset(dto: ConfirmResetDto) {
    const entry = this.resetTokens.get(dto.token);
    if (!entry || entry.expiresAt < Date.now()) {
      this.resetTokens.delete(dto.token);
      throw new BadRequestException("Invalid or expired reset token");
    }

    const hashedPassword = await this.bcrypt.hash(dto.new_password);
    await this.db.user.update({
      where: { id: entry.userId },
      data: { passwd: hashedPassword },
    });

    this.resetTokens.delete(dto.token);

    return { message: "Password reset successfully" };
  }
}
