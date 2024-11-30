import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const [address, setAddress] = useState({
    address1: "",
    address2: "",
    gstDetails: "",
    shopName: "",
    phone: "",
  });

  const handleInputChange = (field: string, value: string) => {
    const newValue = field === "gstDetails" ? value.toUpperCase() : value;
    setAddress((prevState) => ({
      ...prevState,
      [field]: newValue,
    }));
  };

  const saveData = async () => {
    router.navigate("/(tabs)/create-order-screen/CreateOrderScreen");
    try {
      Alert.alert("Success", "Data saved successfully!", [
        { text: "OK", onPress: () => console.log(address) },
      ]);
    } catch (error) {
      Alert.alert("Error", "Failed to save data: " + error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your details</Text>

      <TextInput
        style={styles.input}
        placeholder="Address line 01"
        value={address.address1}
        onChangeText={(value) => handleInputChange("address1", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address line 02"
        value={address.address2}
        onChangeText={(value) => handleInputChange("address2", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="GST Details"
        value={address.gstDetails}
        onChangeText={(value) => handleInputChange("gstDetails", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Shop Name"
        value={address.shopName}
        onChangeText={(value) => handleInputChange("shopName", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Alternate phone number"
        value={address.phone}
        onChangeText={(value) => handleInputChange("phone", value)}
      />
      <View style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}>
        <TouchableOpacity style={styles.button} onPress={saveData}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
    paddingVertical: 15,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
    minWidth: 150,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
