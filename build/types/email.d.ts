export declare enum EmailType {
    Verification = 0,
    Congratulation = 1,
    PasswordChange = 2,
    PasswordReset = 3,
    LoginOtp = 4
}
export type EmailArgs = {
    username: string;
    recipeint: string;
    type: EmailType;
    otp?: number;
};
