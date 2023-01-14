import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExploreScreen, SingleTrackScreen } from '../screens';
import { StyleSheet, TouchableOpacity } from 'react-native';
// import { LibraryScreen } from '../screens/libraryscreen/LibraryScreen';
const Stack = createStackNavigator();

const YourLibraryStack = () => {
  console.log('YourLibraryStack LOADING');
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <>
        {/* <Stack.Screen name="LibraryScreen" component={LibraryScreen} /> */}
        {/* <Stack.Screen name="SingleTrackScreen" component={SingleTrackScreen} /> */}
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      </>
    </Stack.Navigator>
  );
};

export { YourLibraryStack };
