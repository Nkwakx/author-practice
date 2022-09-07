import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';


const { Navigator, Screen } = createStackNavigator();

export default function AuthStack() {

    return (
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="signup" component={SignupScreen} />
        <Screen name="login" component={SigninScreen} />
      </Navigator>
 )
}
