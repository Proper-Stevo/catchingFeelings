import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from "./src/screens/HomeScreen.js"
import ArgHomeScreen from "./src/screens/ArgHomeScreen.js"

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={24} color="black" />
            ),
          }}
        />
        {/* <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={24} color="black" />
            ),
          }}
        /> */}
        <Tab.Screen name="ArgHomeScreen" component={ArgHomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
