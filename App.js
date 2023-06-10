import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";

import HomeScreen from "./src/screens/HomeScreen.js"
import ArgHomeScreen from "./src/screens/ArgHomeScreen.js"

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ArgHomeScreen" component={ArgHomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
