import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TouchableOpacity, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test 1</Text>
      <Text style={styles.text}>Test 2</Text>
      <Text style={styles.text}>Test 3</Text>
      <Button title='Click me' onPress={() => { Linking.openURL('https://github.com/TonyCallaghan/React-Native') }}></Button>
      {/* <Button> elements are difficult to style -> TouchableOpacity is better */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Hello world')}>
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
