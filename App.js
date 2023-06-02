import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import AppNavigator from "./src/navigation/AppNavigator"
import PlayholderWooper from "./assets/images/placeholder_wooper.png";

export default function App({ navigation }) {
  const onPress = () => navigation.navigate('ArgHomeScreen');

  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text style={styles.header}>Title TBD</Text>
        <Image source={PlayholderWooper} style={styles.image} />
        <Text style={styles.subheading}>Words Words Words</Text>
        <Text style={styles.bodyText}>
          Words Words Words Words Words Words Words Words Words Words Words
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8A0BF",
  },
  header: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "white",
  },
  subheading: {
    fontSize: 30,
    marginBottom: 20,
    color: "white",
  },
  bodyText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "white",
    marginHorizontal: 13,
    borderColor: "red",
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
    borderRadius: 50,
  },
  button: {
    backgroundColor: "#BA90C6",
    padding: 15,
    width: 300,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 28,
    textAlign: "center",
    color: "white",
  },
});
