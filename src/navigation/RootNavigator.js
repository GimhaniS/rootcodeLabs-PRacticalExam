import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, LoginScreen } from '../screens';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { TabNavigator } from './TabNavigator';
import { useDispatch, useSelector } from 'react-redux';
const Stack = createStackNavigator();
export const RootNavigator = () => {
  const [logged, setLogged] = useState(false);
  const { token, userId } = useSelector((store) => store.userSlice);

  const isLogged = () => {
    console.log('token1111', token, userId);
    if (token && userId) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };

  useEffect(() => {
    isLogged();
  }, [token, userId]);

  console.log('root stack LOADING');
  return !logged ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </>
    </Stack.Navigator>
  ) : (
    <TabNavigator />
  );
};
