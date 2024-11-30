import useAuth from "@/features/auth/hooks/useAuth";
import { useStore } from "@/features/auth/store/authStore";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";

const OTPScreen = () => {
  const { verifyOtp } = useAuth();
  const { mobileNumber } = useLocalSearchParams();
  const { confirmationResult, setUser } = useStore();
  const [loading, setLoading] = useState<boolean>(false);

  const handleFilled = async (otp: string) => {
    setLoading(true);
    try {
      const result = await verifyOtp(otp, confirmationResult);
      setUser(result);
      if (result.user) {
        Alert.alert("Success", "OTP verified successfully");
        router.push("/profile");
      } else {
        Alert.alert("Error", "OTP verification failed");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "An error occurred while verifying OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter OTP</Text>
      <Text style={styles.subHeader}>
        Please enter the code sent to {mobileNumber || "Phone Number"}
      </Text>
      <OtpInput
        numberOfDigits={6}
        focusColor="#00a859"
        focusStickBlinkingDuration={500}
        onTextChange={(text) => console.log(text)}
        onFilled={handleFilled}
        textInputProps={{
          accessibilityLabel: "One-Time Password",
        }}
        theme={{
          containerStyle: styles.otpContainer,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusStickStyle: styles.focusStick,
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Didn't get the code?</Text>
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend it</Text>
        </TouchableOpacity>
        <Text style={styles.timer}>03:45</Text>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/profile")}
        style={styles.continueButton}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.continueText}>Continue</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  subHeader: {
    marginBottom: 20,
    textAlign: "center",
    color: "#666666",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  pinCodeContainer: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    marginHorizontal: 5,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  pinCodeText: {
    fontSize: 18,
    color: "#333333",
  },
  focusStick: {
    backgroundColor: "#00a859",
    height: 2,
  },
  activePinCodeContainer: {
    borderColor: "#00a859",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  footerText: {
    color: "#333333",
  },
  resendText: {
    color: "#00a859",
    marginLeft: 5,
  },
  timer: {
    marginLeft: 10,
    color: "#CCCCCC",
  },
  continueButton: {
    backgroundColor: "#00a859",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  continueText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OTPScreen;
