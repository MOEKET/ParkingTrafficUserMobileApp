import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TrafficAlertsScreen = () => {
  // Simulated traffic alerts data
  const trafficAlertsData = [
    { id: 1, message: 'Accident reported on Kingsway Road. Expect delays.', timestamp: '2024-04-12 10:30' },
    { id: 2, message: 'Construction work on Pioneer Road. Use alternative routes.', timestamp: '2024-04-12 09:45' },
    { id: 3, message: 'Traffic congestion on Main North 1. Consider postponing travel.', timestamp: '2024-04-12 08:15' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Traffic Alerts</Text>
      {trafficAlertsData.map(alert => (
        <View key={alert.id} style={styles.alertItem}>
          <Text style={styles.alertMessage}>{alert.message}</Text>
          <Text style={styles.timestamp}>{alert.timestamp}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  alertItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  alertMessage: {
    fontSize: 16,
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
  },
});

export default TrafficAlertsScreen;
