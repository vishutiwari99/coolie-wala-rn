import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { create } from "zustand";

interface AuthStore {
  user: any;
  phoneNumber: string | null;
  confirmationResult: any | null; // Store confirmation result
  setUser: (user: any) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setConfirmationResult: (result: any) => void; // Method to set confirmation result
}

export const useStore = create<AuthStore>((set: any) => ({
  user: null,
  phoneNumber: null,
  confirmationResult: null,
  setUser: (user: any) => set({ user }),
  setPhoneNumber: (phoneNumber: any) => set({ phoneNumber }),
  setConfirmationResult: (result: any) => set({ confirmationResult: result }),
}));
