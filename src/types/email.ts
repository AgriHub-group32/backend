export enum EmailType {
  Verification,
  Congratulation,
  PasswordChange,
  PasswordReset,
  LoginOtp,
}

export type EmailArgs = {
  username: string;
  recipeint: string; // recipeint email address
  type: EmailType;
  otp?: number;
};
