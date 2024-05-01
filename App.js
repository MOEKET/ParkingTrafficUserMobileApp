import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './screens/DashboardScreen';
import ParkingScreen from './screens/ParkingScreen';
import TrafficScreen from './screens/TrafficScreen';
import SettingsScreen from './screens/SettingsScreen';
import SearchParkingScreen from './screens/SearchParkingScreen';
import PayParkingScreen from './screens/PayParkingScreen';
import TrafficRouteDetailsScreen from './screens/TrafficRouteDetailsScreen';
import TrafficAlertsScreen from './screens/TrafficAlertsScreen';

const firebaseConfig = {
  apiKey: "AIzaSyDuSnwWhEpp3oEh73H5_XGbkHbdxifU7Lg",
  authDomain: "iot-smart-parking-traffic-man.firebaseapp.com",
  projectId: "iot-smart-parking-traffic-man",
  storageBucket: "iot-smart-parking-traffic-man.appspot.com",
  messagingSenderId: "317089773676",
  appId: "1:317089773676:web:1d13aaa7a7ebb503230049",
  measurementId: "G-8L19HJF1VD"
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (userCredential) => {
      setUser(userCredential);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthentication = async () => {
    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

      if (user) {
        console.log('User logged out successfully!');
        await signOut(auth);
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <NavigationContainer>
      {user ? (
        <>
          <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="ParkingScreen" component={ParkingScreen} />
            <Stack.Screen name="TrafficScreen" component={TrafficScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            <Stack.Screen name="SearchParking" component={SearchParkingScreen} />
            <Stack.Screen name="PayParking" component={PayParkingScreen} />
            <Stack.Screen name="TrafficRouteDetailsScreen" component={TrafficRouteDetailsScreen} />
            <Stack.Screen name="TrafficAlertsScreen" component={TrafficAlertsScreen} />
          </Stack.Navigator>
          <View style={styles.logoutContainer}>
            <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />
          </View>
        </>
      ) : (
        <ImageBackground source={require('./assets/smart_park_traf.jpg')} style={styles.container}>
          <View style={styles.centeredContent}>
            <ScrollView contentContainerStyle={styles.content}>
              <AuthScreen
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                handleAuthentication={handleAuthentication}
              />
            </ScrollView>
          </View>
        </ImageBackground>
      )}
    </NavigationContainer>
  );
}

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? 'Smart Parking & Traffic for Lesotho Mobile App' : 'Smart Parking & Traffic for Lesotho Mobile App'}</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 16,
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
  logoutContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
});






/*import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ImageBackground } from 'react-native'; // Import ImageBackground
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import DashboardScreen from './screens/DashboardScreen'; // Import DashboardScreen

const firebaseConfig = {
  apiKey: "AIzaSyDuSnwWhEpp3oEh73H5_XGbkHbdxifUw7Lg",
  authDomain: "iot-smart-parking-traffic-man.firebaseapp.com",
  projectId: "iot-smart-parking-traffic-man",
  storageBucket: "iot-smart-parking-traffic-man.appspot.com",
  messagingSenderId: "317089773676",
  appId: "1:317089773676:web:37e06ad2f081f83b230049",
  measurementId: "G-KL7LE767SL"
};

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (userCredential) => {
      setUser(userCredential);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthentication = async () => {
    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

      if (user) {
        // If user is already authenticated, log out
        console.log('User logged out successfully!');
        await signOut(auth);
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
        } else {
          // Sign up
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <ImageBackground source={require('./assets/smart_park_traf.jpg')} style={styles.container}>
      <View style={styles.centeredContent}>
        <ScrollView contentContainerStyle={styles.content}>
          {user ? (
            // Show user's email if user is authenticated
            <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
          ) : (
            // Show sign-in or sign-up form if user is not authenticated
            <AuthScreen
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              handleAuthentication={handleAuthentication}
            />
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? 'Smart Parking & Traffic for Lesotho Mobile App' : 'Smart Parking & Traffic for Lesotho Mobile App'}</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
    </View>
  );
}

const AuthenticatedScreen = ({ user, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <DashboardScreen /> {}
      <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 16,
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent background color
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});*/
