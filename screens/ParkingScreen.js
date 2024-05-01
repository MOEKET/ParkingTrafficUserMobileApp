import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ParkingScreen = ({ navigation }) => {
  // Simulated parking data
  const parkingData = [
    { id: 1, location: 'Maseru Mall Parking Lot', availableSpaces: 50 },
    { id: 2, location: 'Pioneer Mall Parking Lot', availableSpaces: 20 },
    { id: 3, location: 'LNDC Maseru Parking Lot', availableSpaces: 10 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parking Availability</Text>
      {parkingData.map(parking => (
        <TouchableOpacity key={parking.id} style={styles.parkingItem}>
          <Text style={styles.parkingLocation}>{parking.location}</Text>
          <Text style={styles.availableSpaces}>Available Spaces: {parking.availableSpaces}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchParking')}>
        <Text style={styles.buttonText}>Search for Parking Slot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PayParking')}>
        <Text style={styles.buttonText}>Pay for Parking Slot</Text>
      </TouchableOpacity>
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
  parkingItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
  },
  parkingLocation: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  availableSpaces: {
    fontSize: 16,
    marginTop: 8,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3498db',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ParkingScreen;
