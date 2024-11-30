import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Sample icons for the package sizes (replace with your own icons)
const icons = {
  S: require("../assets/images/small_package.svg"), // replace with actual image path
  M: require("../assets/images/medium_package.svg"), // replace with actual image path
  L: require("../assets/images/large_package.svg"), // replace with actual image path
};

const packageSizes = [
  {
    label: "S",
    value: "20kg - 25kg",
    price: "50",
    icon: icons.S,
    style: {
      width: 30,
      height: 25,
    },
  },
  {
    label: "M",
    value: "50kg - 60kg",
    price: "70",
    icon: icons.M,
    style: {
      width: 60,
      height: 25,
    },
  },
  {
    label: "L",
    value: "> 70kg",
    price: "120",
    icon: icons.L,
    style: {
      width: 100,
      height: 25,
      marginTop: 10,
    },
  },
];

const PackageSizeSelector = ({ onSelect }: any) => {
  const [selectedSize, setSelectedSize] = useState(packageSizes[0].label);

  useEffect(() => {
    const item = {
      label: packageSizes[0].label,
      price: packageSizes[0].price,
    };
    onSelect(item);
  }, [onSelect]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Package Size</Text>
      <View style={styles.buttonContainer}>
        {packageSizes.map((size) => (
          <TouchableOpacity
            key={size.label}
            style={[
              styles.button,
              selectedSize === size.label
                ? styles.selectedButton
                : styles.defaultButton,
            ]}
            onPress={() => {
              setSelectedSize(size.label);
              const item = {
                label: size.label,
                price: size.price,
              };
              onSelect(item);
            }}
          >
            <Text style={styles.label}>{size.label}</Text>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={size.icon} style={[styles.icon, size.style]} />
              <Text style={styles.value}>{size.value}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {selectedSize && (
        <Text style={styles.selectedText}>
          Selected Size:{" "}
          {packageSizes.find((size) => size.label === selectedSize)?.value}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    position: "relative",
  },
  button: {
    height: 100,
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white", // Default background
  },
  selectedButton: {
    borderColor: "#4CAF50",
    backgroundColor: "#DFFFD6", // Light green
  },
  defaultButton: {
    borderColor: "#ccc",
  },
  icon: {
    marginBottom: 5,
  },

  label: {
    fontSize: 14,
    backgroundColor: "#6bcda9",
    paddingHorizontal: 8,

    position: "absolute",
    left: 5,
    top: 5,
  },
  value: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PackageSizeSelector;
