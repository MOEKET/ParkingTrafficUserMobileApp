import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ParkingScreen = ({ navigation }) => {
  // State to store parking data
  const [parkingData, setParkingData] = useState([]);

  // Function to fetch parking data from the server
  const fetchParkingData = async () => {
    try {
      const response = await fetch('http://localhost:3000/parkingData');
      if (!response.ok) {
        throw new Error('Failed to fetch parking data');
      }
      const data = await response.json();
      setParkingData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch parking data when the component mounts
  useEffect(() => {
    fetchParkingData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parking Availability</Text>
      {parkingData.map(parking => (
        <TouchableOpacity key={parking.parking_id} style={styles.parkingItem}>
          <Text style={styles.parkingLocation}>{parking.location}</Text>
          <Text style={styles.availableSpaces}>Available Spaces: {parking.available_spots}</Text>
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



