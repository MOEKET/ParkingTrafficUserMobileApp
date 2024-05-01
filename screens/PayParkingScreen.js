// PayParkingScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PayParkingScreen = () => {
  const [parkingLocation, setParkingLocation] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handlePayment = () => {
    // Perform payment logic here based on parkingLocation, bankName, and accountNumber
    console.log('Paying for parking location:', parkingLocation);
    console.log('Bank Name:', bankName);
    console.log('Account Number:', accountNumber);
  };

  return (
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

export default PayParkingScreen;
