import { useState, useCallback } from "react";
import { FirebaseAuthService } from "../domain/FirebaseAuthService";

// Create a useAuth custom hook
const useAuth = () => {
  const authService = new FirebaseAuthService();

  const [error, setError] = useState<string | null>(null);

  // Function to authenticate user by sending OTP
  const authenticateUser = useCallback(
    async (phoneNumber: string) => {
      setError(null); // Reset error before authentication attempt
      try {
        const result = await authService.authenticateUser(phoneNumber);
        return result;
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to authenticate user"
        );
      }
    },
    [authService]
  );

  // Function to verify OTP
  const verifyOtp = useCallback(
    async (otp: string, confirmationResult: any) => {
      try {
        const userCredential = await authService.verifyOtp(
          otp,
          confirmationResult
        );
        return userCredential; // Return user credential on successful verification
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to verify OTP");
      }
    },
    [authService]
  );

  return {
    authenticateUser,
    verifyOtp,
    error,
  };
};

export default useAuth;
