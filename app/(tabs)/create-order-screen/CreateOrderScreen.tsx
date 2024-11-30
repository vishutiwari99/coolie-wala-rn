import Address from "@/components/Address";
import CustomButton from "@/components/CustomButton";
import PackageContent from "@/components/PackageContent";
import PackageSize from "@/components/PackageSize";
import styles from "@/globalStyles/styles";
import { Image } from "expo-image";
import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import StepIndicator from "react-native-step-indicator";
import NumericInput from "react-native-numeric-input";
import { Ionicons } from "@expo/vector-icons";
import QuantitySelector from "@/components/QuantitySelector";
import ShippingAddress from "@/components/ShippingAddress";
const labels = ["Create Order", "Estimated Cost"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: "#000",
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: "#000",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#000",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#000",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#000",
  labelSize: 12,
  currentStepLabelColor: "#000",
};

const CreateOrderScreen = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [address, setAddress] = useState<any>("");
  const handleContinue = () => {
    const item = {
      quantity,
      address,
    };
    console.log(item);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 1,
          paddingBottom: 20,
          marginBottom: 20,
        }}
      >
        <View style={{ maxWidth: 100, maxHeight: 45, marginBottom: 20 }}>
          <Image
            source={require("../../../assets/images/coolie-wala-logo.svg")}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>

        <StepIndicator
          customStyles={customStyles}
          currentPosition={1}
          labels={labels}
          stepCount={2}
        />
      </View>

      <View
        style={{
          alignItems: "flex-start",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginRight: 10,
            marginBottom: 10,
          }}
        >
          Select quantity
        </Text>
        <QuantitySelector initialQuantity={1} onQuantityChange={setQuantity} />
      </View>
      <ShippingAddress onAddressChange={setAddress} />

      <CustomButton onPress={handleContinue} title="Continue" />
    </View>
  );
};

export default CreateOrderScreen;
