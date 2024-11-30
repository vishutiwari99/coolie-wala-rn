import { IAuthService } from "./interfaces";
import auth from "@react-native-firebase/auth";

export class FirebaseAuthService implements IAuthService {
  async authenticateUser(phoneNumber: string) {
    try {
      const confirmationResult = await auth().signInWithPhoneNumber(
        phoneNumber
      );
      return confirmationResult;
    } catch (error) {
      console.log(error);
    }
  }

  async verifyOtp(otp: string, confirmationResult: any): Promise<any> {
    if (!confirmationResult) {
      throw new Error(
        "No confirmation result available. Please authenticate first."
      );
    }

    try {
      const userCredential = await confirmationResult.confirm(otp);
      return userCredential;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Failed to verify OTP: " + error.message);
      } else {
        throw new Error("Failed to verify OTP: Unknown error occurred.");
      }
    }
  }
}
