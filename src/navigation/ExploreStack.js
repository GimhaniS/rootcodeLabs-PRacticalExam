import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExploreScreen, SingleTrackScreen } from '../screens';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const ExploreStack = () => {
  console.log('ExploreStack LOADING');
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <>
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
        <Stack.Screen name="SingleTrackScreen" component={SingleTrackScreen} />
        {/* <Stack.Screen name="ExploreScreen" component={ExploreScreen} /> */}
      </>
    </Stack.Navigator>
  );
};

export { ExploreStack };
