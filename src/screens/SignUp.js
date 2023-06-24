import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subheading}>This Is the Sign Up Page!</Text>

      <Text style={styles.bodyText}>Have an account?</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subheading: {
    fontSize: 30,
    marginBottom: 20,
    color: "black",
  },
  bodyText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "black",
    marginHorizontal: 13,
    borderColor: "red",
  },
  button: {
    backgroundColor: "#BA90C6",
    padding: 5,
    width: 200,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});