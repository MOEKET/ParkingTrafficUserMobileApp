/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { MoniteSDK } from '@monite/sdk-api';
import { MoniteProvider, CounterpartsTable } from '@monite/sdk-react';

// Initialize the SDK with the access token and entityId
const monite = new MoniteSDK({
  apiUrl: 'https://api.sandbox.monite.com/v1', // Or 'https://api.monite.com/v1' to use Production
  entityId: 'd39f4bf7-5d8f-4889-a4fb-3a651c75b1be', // Replaced with your actual entityId
  fetchToken: async () => {
    return {
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNyZWRlbnRpYWxfaWQiOiIyNWI2Mjg5ZS0zMTRkLTRiNTctYTNlNy02MGY1MDBlYjJhOGUiLCJ0b2tlbl9pZCI6ImY1ZmJlMmEyLWUzODMtNGQ4OS1hMTAzLTA2NmJjYWEwNGUyNSIsInByb2plY3RfaWQiOiJlYmNlYzVhOC1jZDUzLTQwODUtYmM1My1iOTliMDQ3MjFhNTQiLCJwYXJ0bmVyX2lkIjoiYzRlZjc4MzktZTkzOS00ZjMwLTllYzctZTY2ZmMyMjk2MzA5IiwiY3JlYXRlZF9hdCI6IjIwMjQtMDUtMTRUMTc6MzY6NTMuNzI2NzE3IiwiZXhwIjoxNzE1NzEwMDEzfX0.nRlqMVCyMQDPRqBygzaPWeiNVvkVzpDiSpjupWLtKks',
    };
  }
});

const PayParkingScreen = () => {
  const [parkingLocation, setParkingLocation] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async () => {
    try {
      // Placeholder logic for handling payment
      console.log('Payment processing...');
      
      // Here you can add logic to interact with Monite SDK to process payment if needed
      // e.g., create an invoice, send payment request, etc.

      // Set payment status to success if payment is successful
      setPaymentStatus('success');
    } catch (error) {
      // Set payment status to error if there is an error
      console.error('Payment error:', error);
      setPaymentStatus('error');
    }
  };

  return (
    <MoniteProvider monite={monite} locale={{ code: "en-US" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Pay for Parking Slot</Text>
        <TextInput
          style={styles.input}
          value={parkingLocation}
          onChangeText={setParkingLocation}
          placeholder="Enter parking slot location"
        />
        <TextInput
          style={styles.input}
          value={bankName}
          onChangeText={setBankName}
          placeholder="Enter bank name"
        />
        <TextInput
          style={styles.input}
          value={accountNumber}
          onChangeText={setAccountNumber}
          placeholder="Enter account number"
          keyboardType="numeric"
        />
        <Button title="Pay" onPress={handlePayment} />
        {paymentStatus === 'success' && <Text style={styles.successMessage}>Payment successful!</Text>}
        {paymentStatus === 'error' && <Text style={styles.errorMessage}>Payment failed. Please try again.</Text>}
      </View>
      <CounterpartsTable />
    </MoniteProvider>
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
  successMessage: {
    color: 'green',
    marginTop: 10,
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});

export default PayParkingScreen;*/






import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PayParkingScreen = () => {
  const [parkingLocations, setParkingLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    number: '',
    names: '',
    pin: ''
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/parkingData')
      .then(response => response.json())
      .then(data => {
        setParkingLocations(data.map(spot => spot.location));
        setLoading(false);
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to fetch parking locations');
        setLoading(false);
      });
  }, []);

  const handlePayment = () => {
    const { number, names, pin } = paymentDetails;
    fetch('http://localhost:3000/parkingtransactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parking_location: selectedLocation,
        payment_option: paymentOption,
        payment_number: number,
        payment_names: names,
        payment_pin: pin
      })
    })
    .then(response => response.text())
    .then(message => {
      setMessage(message);
      // Reset form
      setSelectedLocation('');
      setPaymentOption('');
      setPaymentDetails({ number: '', names: '', pin: '' });
    })
    .catch(error => {
      console.error(error);
      Alert.alert('Error', 'Failed to process payment');
    });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pay for Parking Slot</Text>
      {message && <Text style={styles.successMessage}>{message}</Text>}
      <Picker
        selectedValue={selectedLocation}
        onValueChange={(itemValue) => setSelectedLocation(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Select parking slot location" value="" />
        {parkingLocations.map((location, index) => (
          <Picker.Item key={index} label={location} value={location} />
        ))}
      </Picker>
      <Picker
        selectedValue={paymentOption}
        onValueChange={(itemValue) => {
          setPaymentOption(itemValue);
          setPaymentDetails({ number: '', names: '', pin: '' }); // Reset payment details on option change
        }}
        style={styles.input}
      >
        <Picker.Item label="Select payment option" value="" />
        <Picker.Item label="MPESA" value="MPESA" />
        <Picker.Item label="Ecocash" value="Ecocash" />
      </Picker>
      {paymentOption !== '' && (
        <>
          <TextInput
            style={styles.input}
            value={paymentDetails.number}
            onChangeText={(text) => setPaymentDetails({ ...paymentDetails, number: text })}
            placeholder={`Enter ${paymentOption} number`}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={paymentDetails.names}
            onChangeText={(text) => setPaymentDetails({ ...paymentDetails, names: text })}
            placeholder={`Enter ${paymentOption} names`}
          />
          <TextInput
            style={styles.input}
            value={paymentDetails.pin}
            onChangeText={(text) => setPaymentDetails({ ...paymentDetails, pin: text })}
            placeholder={`Enter ${paymentOption} PIN`}
            secureTextEntry={true}
            keyboardType="numeric"
          />
        </>
      )}
      <Button title="Pay" onPress={handlePayment} />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  successMessage: {
    color: 'green',
    marginBottom: 16,
  },
});

export default PayParkingScreen;

