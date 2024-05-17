import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TrafficScreen = ({ navigation }) => {
  // State to store traffic data
  const [trafficData, setTrafficData] = useState([]);

  // Function to fetch traffic data from the server
  const fetchTrafficData = async () => {
    try {
      const response = await fetch('http://localhost:3000/trafficData');
      if (!response.ok) {
        throw new Error('Failed to fetch traffic data');
      }
      const data = await response.json();
      setTrafficData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch traffic data when the component mounts
  useEffect(() => {
    fetchTrafficData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traffic Routes</Text>
      {trafficData.map(route => (
        <TouchableOpacity
          key={route.traffic_id}
          style={styles.routeItem}
          onPress={() => navigation.navigate('TrafficRouteDetailsScreen', { routeId: route.traffic_id })}
        >
          <Text style={styles.routeName}>{route.route}</Text>
          <Text style={styles.congestionLevel}>Congestion Level: {route.congestionLevel}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TrafficAlertsScreen')}
      >
        <Text style={styles.buttonText}>View Traffic Alerts</Text>
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
  routeItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
  },
  routeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  congestionLevel: {
    fontSize: 16,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TrafficScreen;
