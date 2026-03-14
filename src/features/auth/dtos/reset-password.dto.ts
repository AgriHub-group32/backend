import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RequestResetDto {
  @IsEmail()
  email: string;
}

export class ConfirmResetDto {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsString()
  @MinLength(6)
  new_password: string;
}
