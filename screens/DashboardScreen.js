import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, ImageBackground } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/smart_park_traf.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
        <View style={styles.iconContainer}>    
          <Pressable onPress={() => navigation.navigate('ParkingScreen')}>
            <View style={styles.iconWrapper}>
              <Image source={require('../assets/parking_icon.png')} style={styles.icon} />
              <Text style={styles.iconText}>Parking</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('TrafficScreen')}>
            <View style={styles.iconWrapper}>
              <Image source={require('../assets/smart-traffic-manag-icon.png')} style={styles.icon} />
              <Text style={styles.iconText}>Traffic</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('SettingsScreen')}>
            <View style={styles.iconWrapper}>
              <Image source={require('../assets/settings.png')} style={styles.icon} />
              <Text style={styles.iconText}>Settings</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background color
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-around',
    width: '100%',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
  },
  iconText: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default DashboardScreen;



/*import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.iconContainer}>    
        <Pressable onPress={() => navigation.navigate('ParkingScreen')}>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/parking_icon.png')} style={styles.icon} />
            <Text style={styles.iconText}>Parking</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('TrafficScreen')}>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/smart-traffic-manag-icon.png')} style={styles.icon} />
            <Text style={styles.iconText}>Traffic</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('SettingsScreen')}>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/settings.png')} style={styles.icon} />
            <Text style={styles.iconText}>Settings</Text>
          </View>
        </Pressable>
      </View>
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
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-around',
    width: '100%',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
  },
  iconText: {
    fontSize: 16,
    marginTop: 8,
  },
  logout: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});

export default DashboardScreen;*/
