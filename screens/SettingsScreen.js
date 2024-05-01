import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
        <Text style={styles.settingText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
        <Text style={styles.settingText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
        <Text style={styles.settingText}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
        <Text style={styles.settingText}>About</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  settingItem: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
