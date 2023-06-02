import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArgHomeScreen from '../screens/ArgHomeScreen';
import App from '../../App';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{ headerShown: false }}
          component={(props) => <App {...props} />}
        //   options={{title: 'Welcome'}}
        /> 
        <Stack.Screen
          name="ArgHomeScreen"
          component={ArgHomeScreen}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};