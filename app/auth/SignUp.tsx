import useAuth from "@/features/auth/hooks/useAuth";
import { useStore } from "@/features/auth/store/authStore";
import { router } from "expo-router";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const SignUp: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const phoneInput = useRef<PhoneInput>(null);

  const { authenticateUser } = useAuth();
  const setConfirmationResult = useStore(
    (state) => state.setConfirmationResult
  );

  const handleRegister = async () => {
    const isValid = phoneInput.current?.isValidNumber(mobileNumber);

    if (!isValid) {
      Alert.alert("Invalid Input", "Please enter a valid mobile number.");
      return;
    }

    setLoading(true);
    try {
      const confirmationResult = await authenticateUser(mobileNumber);
      if (confirmationResult?.verificationId) {
        setConfirmationResult(confirmationResult);
        router.navigate("/auth/OtpScreen");
      } else {
        Alert.alert("Registration Failed", "Unable to register. Try again.");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "An error occurred during registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <Text style={styles.subtitle}>
        Enter your mobile number, we will send you OTP for verification
      </Text>
      <PhoneInput
        ref={phoneInput}
        defaultValue={mobileNumber}
        defaultCode="IN"
        layout="first"
        onChangeFormattedText={(text) => {
          setMobileNumber(text);
        }}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        textInputStyle={{ height: 50 }}
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Register</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 30,
  },
  phoneContainer: {
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  textInput: {
    paddingVertical: 0,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#28a745",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUp;
