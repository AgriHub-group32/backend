import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(["farmer", "wholesaler"], { message: "type must be farmer or wholesaler" })
  type: "farmer" | "wholesaler";
}
