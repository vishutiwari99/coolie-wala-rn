export interface IAuthService {
  authenticateUser(phoneNumber: string, appVerifier: any): Promise<any>;
  verifyOtp(confirmationResult: any, otp: string): Promise<any>;
}
