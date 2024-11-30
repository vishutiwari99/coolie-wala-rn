import styles from "@/globalStyles/styles";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({ onPress, title }: any) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
