import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title: 'My home',
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: '#BA90C6',
          // },
          }}/>
      <HomeStack.Screen name="SignIn" component={SignIn} options={{ title: 'Sign In' }}/>
      <HomeStack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }}/>
    </HomeStack.Navigator>
  );
}