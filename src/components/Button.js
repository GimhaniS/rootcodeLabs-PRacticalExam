import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS } from '../Utils/colors';
const Button = ({ onPress }) => {
  return (
    <View style={styles.ButtonView}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.ButtonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Button };

const styles = StyleSheet.create({
  ButtonView: {
    borderRadius: 35,
    backgroundColor: COLORS.branchColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: COLORS.white,
    fontWeight: 600,
    marginVertical: 20,
    fontSize: 20,
  },
});
