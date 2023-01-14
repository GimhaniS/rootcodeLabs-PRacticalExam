import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ExploreScreen } from '../screens';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();
const HomeStack = () => {
  console.log('HomeStack LOADING');
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="ExploreScreen" component={ExploreScreen} /> */}
      </>
    </Stack.Navigator>
  );
};

export { HomeStack };
