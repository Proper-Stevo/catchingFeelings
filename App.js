import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import TestImage from "./assets/images/whoop.webp"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome To The Mopping Hour!</Text>
      <Image source={TestImage} 
      style={styles.imagess}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello There!!</Text>
      <StatusBar style="auto" />


      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.TextInput}>Log In!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C0DBEA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    color: "black",
    fontSize: 55,
    padding: 70,
  },

  imagess: {
    width: 350,
    height: 350,
    marginBottom: 40,
    borderRadius: 50,
  },

  TextInput: {
    height: 50,
    padding: 10,
    paddingTop: 20,
    marginLeft: 20,
    color: "white",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    marginBottom: 80,
    backgroundColor: "#497174",
  },
});
