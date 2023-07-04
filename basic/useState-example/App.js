// https://snack.expo.dev/@tonycallaghan/usestate-example

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Linking } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You clicked {count} times</Text>

      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2F4F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#FDE2F3',
    color: '#917FB3',
    fontFamily: 'Helvetica',
    fontSize: 40,
    padding: 10,
    margin: 10,
    borderRadius: 25,
    overflow: 'hidden',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#E5BEEC',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 60,
    color: '#917FB3',
    textAlign: 'center',
  },
});
