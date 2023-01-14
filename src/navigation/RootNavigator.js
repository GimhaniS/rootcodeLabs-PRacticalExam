import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, LoginScreen } from '../screens';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();
export const RootNavigator = () => {
  console.log('root stack LOADING');
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </>
    </Stack.Navigator>
  );
};
