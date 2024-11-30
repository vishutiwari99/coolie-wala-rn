import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import "react-native-get-random-values";
// Initialize Geocoder with API key
Geocoder.init("AIzaSyDTlEgkqK4k4pGro2_lZRR3apkRd2niRDI");

const Address = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [address, setAddress] = useState("");

  const handleSelectLocation = async (location: any) => {
    Alert.alert("Location Selected", `Selected Location: ${location}`);
    const result = await Geocoder.from(location.latitude, location.longitude);
    const formattedAddress = result.results[0].formatted_address;
    setAddress(formattedAddress);
    // setSelectedLocation(location);
  };

  const handleSubmit = () => {
    Alert.alert("Location Submitted", `Selected Address: ${address}`);
  };

  const fetchPlaceDetails = async (placeId: string) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=AIzaSyDTlEgkqK4k4pGro2_lZRR3apkRd2niRDI`
      );
      const data = await response.json();
      if (data.result && data.result.geometry) {
        const location = {
          latitude: data.result.geometry.location.lat,
          longitude: data.result.geometry.location.lng,
        };
        handleSelectLocation(location);
      } else {
        Alert.alert("Error", "Location details not available.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details: any) => {
          fetchPlaceDetails(details.place_id);
        }}
        query={{
          key: "AIzaSyDTlEgkqK4k4pGro2_lZRR3apkRd2niRDI",
          language: "en",
        }}
        styles={{
          textInput: styles.input,
        }}
        enablePoweredByContainer={false}
      />

      {/* <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {selectedLocation && (
          <Marker coordinate={selectedLocation} title="Selected Location" />
        )}
      </MapView> */}

      <TextInput
        style={styles.input}
        value={address}
        placeholder="Selected Address"
        editable={true}
      />

      <Button title="Add Pickup Address" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  map: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
});

export default Address;
