// https://snack.expo.dev/@tonycallaghan/usestate-example

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Linking } from 'react-native';

export default function App() {
  const [message, setMessage] = useState("Hello T");
  const [session, setSession] = useState({number:6, title:'state'});
  const [changeOccured, yesChangeHasOccured] = useState(false)

  const onClickHandler = () => {
    setMessage('Goodbye T');
    yesChangeHasOccured(true);
  };

  const sessionHandler = () => {
    setSession( {number: session.number + 1, title: session.title});
    yesChangeHasOccured(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>

      <TouchableOpacity style={styles.button} onPress={onClickHandler}>
        <Text style={styles.buttonText}>Update Message</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={sessionHandler}>
        <Text style={styles.buttonText}>{session.title}: {session.number}</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{changeOccured ? 'Changes made.' : 'No changes made.'}</Text>

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
    margin: 10,
  },
  buttonText: {
    fontSize: 60,
    color: '#917FB3',
    textAlign: 'center',
  },
});
