import { StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../Utils/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// stacks
import { HomeStack } from './HomeStack';
import { ExploreStack } from './ExploreStack';
import { YourLibraryStack } from './YourLibraryStack';
//icons
import exploreIcon from '../assets/tabBarIcons/explore.png';
import homeIcon from '../assets/tabBarIcons/home.png';
import libraryIcon from '../assets/tabBarIcons/library.png';
import homeYellowIcon from '../assets/tabBarIcons/home_yellow.png';
import searchYellowIcon from '../assets/tabBarIcons/search_yellow.png';
import libraryYellowIcon from '../assets/tabBarIcons/library_yellow.png';

const BottomBar = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <BottomBar.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        showIcon: true,
        tabBarActiveTintColor: COLORS.branchColor,
        // tabStyle: {
        //   backgroundColor: COLORS.branchColor,
        // },
        tabBarInactiveTintColor: COLORS.white,
        tabBarActiveBackgroundColor: COLORS.backgroundColor,
        tabBarInactiveBackgroundColor: COLORS.backgroundColor,
        tabBarStyle: { borderWidth: 0 },
        // indicatorStyle: {
        //   backgroundColor: COLORS.branchColor,
        //   // height: '100%',
        //   // borderBottomColor: 'your indicator bottom bar color',
        //   // borderBottomWidth: 1
        // },
        tabBarIcon: ({ focused, color, size }) =>
          //   <Image
          //     source={require('../assets/tabNavigator/Home_red.png')}
          //     style={{width: 20, height: 20}}
          //   />
          {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? homeYellowIcon : homeIcon;
            } else if (route.name === 'Explore') {
              iconName = focused ? searchYellowIcon : exploreIcon;
            } else {
              iconName = focused ? libraryYellowIcon : libraryIcon;
            }
            return <Image source={iconName} style={{ width: 22, height: 20 }} />;
          },
      })}
    >
      <BottomBar.Screen name="Home" component={HomeStack} />
      <BottomBar.Screen name="Explore" component={ExploreStack} />
      <BottomBar.Screen name=" Your Library" component={YourLibraryStack} />
    </BottomBar.Navigator>
  );
};

const styles = StyleSheet.create({});
