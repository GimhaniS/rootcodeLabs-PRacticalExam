import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../../Utils/colors';
import logo from '../../assets/practical_test_logo.png';
const SplashScreen = ({ navigation }) => {
  // handling Naviagtion to log in screen
  const navigationHandler = () => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3000);
  };
  return (
    <View style={styles.splashWrapper}>
      <Image source={logo} style={styles.logoView} />
      {navigationHandler()}
    </View>
  );
};

export { SplashScreen };

const styles = StyleSheet.create({
  splashWrapper: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    width: 150,
    height: 150,
  },
});
