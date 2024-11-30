import React from "react";
import { Image } from "expo-image";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
const SelectProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login as</Text>
      <Text style={styles.subtitle}>Select your profile</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            router.navigate("/address/address");
          }}
          style={styles.profileButton}
        >
          <View
            style={{
              width: 100,
              height: 100,
              padding: 5,
              overflow: "hidden",
              backgroundColor: "#E6F6F0",
              borderRadius: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/delivery_boy.svg")}
              style={{
                width: 49,
                height: 45,
                objectFit: "contain",
              }}
            />
          </View>

          <Text style={styles.profileText}>Wholeseller</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.navigate("/address/address");
          }}
          style={styles.profileButton}
        >
          <View
            style={{
              width: 100,
              height: 100,
              padding: 5,
              overflow: "hidden",
              backgroundColor: "#E6F6F0",
              borderRadius: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/wholeseller.svg")}
              style={{
                width: 65,
                height: 45,
                objectFit: "contain",
              }}
            />
          </View>
          <Text style={styles.profileText}>Delivery Boy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileButton: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 160,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  profileText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    textAlign: "center",
  },
});

export default SelectProfile;
