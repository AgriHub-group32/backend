import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignupDto } from "./dtos/signup.dto";
import { LoginDto } from "./dtos/login.dto";
import { RequestResetDto, ConfirmResetDto } from "./dtos/reset-password.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  @Post("login")
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post("admin/login")
  adminLogin(@Body() dto: LoginDto) {
    return this.authService.adminLogin(dto);
  }

  @Post("reset-password")
  requestReset(@Body() dto: RequestResetDto) {
    return this.authService.requestPasswordReset(dto);
  }

  @Post("reset-password/confirm")
  confirmReset(@Body() dto: ConfirmResetDto) {
    return this.authService.confirmPasswordReset(dto);
  }
}
