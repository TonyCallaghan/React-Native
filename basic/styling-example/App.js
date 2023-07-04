// https://snack.expo.dev/@tonycallaghan/styling-example

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import styling from './design/styles.js';

export default function App() {
  const [state, setState] = useState(0);

  const onClickHandler = () => {
    setState(4)
  }

  return (
    <>
      <View style={{
        width: '100%',
        height: '34%',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '10',
        borderColor: '#ff00ff',
        margin: '5',
        padding: '10',
        borderTopLeftRadius: '50',
      }}>       
        <Text style={styles.text}>Style inline</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Style Test</Text>
      </View>

      <View style={styling.container}>
        <Text style={styling.text}>Style from StyleSheet</Text>
      </View>
    </>
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
