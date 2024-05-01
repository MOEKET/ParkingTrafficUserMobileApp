// SearchParkingScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SearchParkingScreen = ({ navigation }) => {
  const [parkingLocation, setParkingLocation] = useState('');

  const handleSearch = () => {
    // Perform search logic here based on the parkingLocation
    console.log('Searching for parking location:', parkingLocation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for Parking Slot</Text>
      <TextInput
        style={styles.input}
        value={parkingLocation}
        onChangeText={setParkingLocation}
        placeholder="Enter parking slot location"
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SearchParkingScreen;
