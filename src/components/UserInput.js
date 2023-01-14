import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { COLORS } from '../Utils/colors';
const UserInput = ({ title, type, error, ...props }) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.InputTextView}>
        <Text style={styles.InputText}>{title}</Text>
      </View>
      <View style={styles.inputViewWrapper}>
        {type === 'password' ? (
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            secureTextEntry
            {...props}
          />
        ) : (
          <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
        )}
      </View>
      <Text style={styles.errorLabel}>{error}</Text>
    </View>
  );
};

export { UserInput };

const styles = StyleSheet.create({
  inputWrapper: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  InputTextView: {},
  InputText: {
    fontSize: 18,
    color: COLORS.loginLabelColor,
  },
  inputViewWrapper: {
    backgroundColor: COLORS.textInputColor,
    marginTop: 10,
  },
  input: {
    color: COLORS.white,
    textDecorationLine: 'none',
    fontSize: 18,
  },
  errorLabel: {
    fontSize: 18,
    color: COLORS.ErrorColor,
  },
});
