import styles from "@/globalStyles/styles";
import React from "react";
import { View, Text } from "react-native";

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      {/* List previous orders here */}
    </View>
  );
};

export default HistoryScreen;
