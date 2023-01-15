import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { UserInput, Button } from '../../components';
import { COLORS } from '../../Utils/colors';
import logo from '../../assets/practical_test_logo.png';
import fb from '../../assets/fb.png';
import google from '../../assets/google.png';
import { useDispatch, useSelector } from 'react-redux';
import { userLogIn } from '../../features/user/userSlice';
const emailRegex =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const intialState = {
  userName: '',
  password: '',
};
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const { token, userId } = useSelector((store) => store.userSlice);

  useEffect(() => {
    console.log('Login screen');
  }, []);
  const dispatch = useDispatch();
  //login handler
  const logInHandler = () => {
    //checking whether email is empty ir not
    if (email === '') {
      setEmailError('Please enter email');
      setLoading(false);

      return null;
    }
    //checking whether password is empty ir not
    if (password === '') {
      setPasswordError('Please enter a password');
      setLoading(false);

      return null;
    }
    //checking whether email is valid ir not
    const valid = emailRegex.test(email);

    if (!valid) {
      setEmailError('Please enter a valid email');
      setLoading(false);

      return null;
    }
    //checking whether email  and password are empty ir not
    if (email === '' && password === '') {
      setEmailError('Please enter email');
      setLoading(false);
      setPasswordError('Please enter a valid password');

      return null;
    }

    setEmailError('');
    setPasswordError('');
    setLoading(false);
    dispatch(userLogIn({ email, password }));
    // return true;
  };
  console.log('token', token, userId);
  return (
    <View style={styles.logInWrapper}>
      <View>
        <Image source={logo} style={styles.logoView} />
      </View>
      <View style={styles.inputAreaBody}>
        <UserInput
          title="User name"
          value={email}
          keyboardType="email-address"
          error={emailError}
          onChangeText={(val) => setEmail(val)}
          textContentType="emailAddress"
          autoCompleteType="email"
        />
        <UserInput
          title="Password"
          value={password}
          onChangeText={(val) => setPassword(val)}
          error={passwordError}
          type="password"
        />
        <Text style={styles.forgetPwdText}> Forget your password?</Text>
        <View>
          <Button onPress={logInHandler} />
        </View>
        <View style={styles.otherTextvIew}>
          <Text style={styles.Texttitle}> or Continue with </Text>
        </View>
        <View style={styles.iconView}>
          <Image source={fb} style={styles.fblogoItem} />
          <Image source={google} style={styles.logoItem} />
        </View>
        <Text style={styles.description}>
          By continuing you agree to out terms of Service, privacy policy
        </Text>
        <View style={styles.Hline} />
        <View style={styles.footer}>
          <Text style={styles.notHaveText}> Not Have an account yet?</Text>
          <Text style={styles.JOinUsText}> Join us </Text>
        </View>
      </View>
    </View>
  );
};

export { LoginScreen };

const styles = StyleSheet.create({
  logInWrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.backgroundColor,
    paddingHorizontal: 25,
    paddingTop: 50,
  },
  logoView: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  inputAreaBody: {
    // flex: 1,
    justifyContent: 'center',
  },
  Texttitle: {
    color: COLORS.white,
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
  },
  forgetPwdText: {
    color: COLORS.white,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 30,
  },
  otherTextvIew: {},
  iconView: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fblogoItem: {
    width: 55,
    height: 55,
  },
  logoItem: {
    width: 100,
    height: 100,
  },
  description: {
    color: COLORS.white,
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  Hline: {
    height: 2,
    backgroundColor: COLORS.white,
    marginHorizontal: 30,
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  notHaveText: {
    color: COLORS.white,
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  JOinUsText: {
    color: COLORS.branchColor,
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
});
