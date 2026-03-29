"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailType = void 0;
var EmailType;
(function (EmailType) {
    EmailType[EmailType["Verification"] = 0] = "Verification";
    EmailType[EmailType["Congratulation"] = 1] = "Congratulation";
    EmailType[EmailType["PasswordChange"] = 2] = "PasswordChange";
    EmailType[EmailType["PasswordReset"] = 3] = "PasswordReset";
    EmailType[EmailType["LoginOtp"] = 4] = "LoginOtp";
})(EmailType || (exports.EmailType = EmailType = {}));
//# sourceMappingURL=email.js.map