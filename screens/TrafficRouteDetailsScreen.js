import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrafficRouteDetailsScreen = ({ route }) => {
  const { route: selectedRoute } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traffic Route Details</Text>
      <Text style={styles.routeName}>{selectedRoute.route}</Text>
      <Text style={styles.congestionLevel}>Congestion Level: {selectedRoute.congestionLevel}</Text>
      {/* Add more details here */}
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
  routeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  congestionLevel: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default TrafficRouteDetailsScreen;
