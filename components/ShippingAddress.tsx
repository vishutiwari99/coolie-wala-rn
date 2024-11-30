import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Formik } from "formik";
import * as yup from "yup";

interface Address {
  address: string;
  address2: string;
  city: string;
  price: string;
  shopName: string;
  phone: string;
}

interface ShippingAddressProps {
  onAddressChange: (address: Address) => void;
}

const cityPriceMap: Record<string, string> = {
  Bilaspur: "30",
  Takhatpur: "30",
  Tifra: "40",
  Sarkanda: "50",
};

const validationSchema = yup.object().shape({
  shopName: yup.string().required("Shop Name is required"),
  address: yup.string().required("Address line 01 is required"),
  address2: yup.string().required("Address line 02 is required"),
  city: yup.string().required("City is required"),
  phone: yup.string().required("Phone number is required"),
});

const ShippingAddress: React.FC<ShippingAddressProps> = ({
  onAddressChange,
}) => {
  const [address, setAddress] = useState<Address>({
    address: "",
    address2: "",
    city: "",
    price: "",
    shopName: "",
    phone: "",
  });

  useEffect(() => {
    onAddressChange(address);
  }, [address]);

  const handleCityChange = (setFieldValue: any, city: string | null) => {
    if (city) {
      setFieldValue("city", city);
      setFieldValue("price", cityPriceMap[city]); // Map the selected city to its price
    } else {
      setFieldValue("city", "");
      setFieldValue("price", ""); // Reset price if no city is selected
    }
  };

  return (
    <Formik
      initialValues={address}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setAddress(values);
        console.log("Submitted values: ", values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <View style={styles.container}>
          <Text style={styles.header}>Enter your Shipping Address</Text>

          <TextInput
            style={styles.input}
            placeholder="Shop Name"
            value={values.shopName}
            onChangeText={handleChange("shopName")}
            onBlur={handleBlur("shopName")}
          />
          {touched.shopName && errors.shopName && (
            <Text style={styles.error}>{errors.shopName}</Text>
          )}

          <RNPickerSelect
            placeholder={{ label: "Select City", value: null }}
            onValueChange={(city) => handleCityChange(setFieldValue, city)}
            items={[
              { label: "Bilaspur", value: "Bilaspur" },
              { label: "Takhatpur", value: "Takhatpur" },
              { label: "Tifra", value: "Tifra" },
              { label: "Sarkanda", value: "Sarkanda" },
            ]}
            style={{
              inputAndroid: {
                fontSize: 16,
                borderWidth: 2,
                borderColor: "#000",
                borderRadius: 8,
                color: "black",
                paddingRight: 30,
              },
            }}
          />
          {touched.city && errors.city && (
            <Text style={styles.error}>{errors.city}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Address line "
            value={values.address}
            onChangeText={handleChange("address")}
            onBlur={handleBlur("address")}
          />
          {touched.address && errors.address && (
            <Text style={styles.error}>{errors.address}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={values.phone}
            onChangeText={handleChange("phone")}
            onBlur={handleBlur("phone")}
          />
          {touched.phone && errors.phone && (
            <Text style={styles.error}>{errors.phone}</Text>
          )}

          <TouchableOpacity
            onPress={(event) => {
              event.preventDefault();
              if (!Object.keys(errors).length) {
                handleSubmit();
              } else {
                console.log("Errors: ", errors);
              }
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
    paddingVertical: 15,
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
  error: {
    fontSize: 12,
    color: "red",
  },
});

export default ShippingAddress;
