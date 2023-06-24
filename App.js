import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from "./src/screens/HomeScreen.js"
import Journals from "./src/screens/Journals.js"
import MoodEntry from "./src/screens/MoodEntry.js"
import Calendar from "./src/screens/Calendar.js"
import Settings from "./src/screens/Settings.js"

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
              <Ionicons name="md-home-outline" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="Journals" 
          component={Journals} 
          options={{
            tabBarLabel: 'Journals',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="MoodEntry" 
          component={MoodEntry} 
          options={{
            tabBarLabel: 'Add Entry',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="Calendar" 
          component={Calendar} 
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
