import React, {useState} from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {theme} from '../../../theme/theme';
import {
  OnboardingNavigationProp,
  OnboardingStackParamList,
} from '../../../navigation/auth/onboardingTypes';
import Logger from '../../../utils/logger';
import Signup from '../../../api/signup';
import Validator from '../../../utils/validator';
import {useAppDispatch} from '../../../store/store';
import appSlice from '../../../store/appState/appSlice';

type Route = RouteProp<OnboardingStackParamList, 'Signup'>;
const SignupScreen = (): React.JSX.Element => {
  const {params} = useRoute<Route>();
  const [firstName, setFirstName] = useState<string>(
    __DEV__ ? '' : ''
  );
  const [lastName, setLastName] = useState<string>(
    __DEV__ ? '' : ''
  );
  const [dialCode, setDialCode] = useState<string>(__DEV__ ? '+91' : '+1');
  const [mobile, setMobile] = useState<string>(__DEV__ ? '' : '');
  const [email, setEmail] = useState<string>(
    __DEV__ ? 'test@test.com' : ''
  );
  const [password, setPassword] = useState<string>(__DEV__ ? 'Test@123' : '');
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isVerifyEmail, setVerifyingEmail] = useState<boolean>(false);
  const [validationError, setValidationError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    mobile: false,
    password: false,
  });
  const {goBack, navigate} = useNavigation<OnboardingNavigationProp>();
  const dispatch = useAppDispatch();

  const registerUser = async () => {
    if (firstName.length === 0) {
      setValidationError({
        ...validationError,
        firstName: true,
      });
      Alert.alert('', 'First name cannot be empty')
      return;
    }
    if (lastName.length === 0) {
      setValidationError({
        ...validationError,
        lastName: true,
      });
      Alert.alert(
        '',
        'Last name cannot be empty',
      );
      return;
    }
    if (email.length === 0) {
      setValidationError({
        ...validationError,
        email: true,
      });
      Alert.alert(
        '',
        'Email cannot be empty',
      );
      return;
    }
    if (!Validator.isValidEmail(email)) {
      setValidationError({
        ...validationError,
        email: true,
      });
      Alert.alert(
        '',
        'Invalid Email Id',
      );
      return;
    }
    if (mobile.length !== 10) {
      setValidationError({
        ...validationError,
        mobile: true,
      });
      Alert.alert(
        '',
        'Phone number must contain 10 numbers',
      );
      return;
    }
    if (password.length <= 6) {
      setValidationError({
        ...validationError,
        password: true,
      });
      Alert.alert(
        '',
        'Password must contain minimum 6 characters',
      );
      return;
    }
    try {
      setVerifyingEmail(true);
      const res = await Signup.registerUser({
        firstName,
        lastName,
        email,
        password,
        phoneCode: dialCode,
        phoneNumber: mobile,
      });
      if (res?.status?.status === 200) {
        dispatch(
          appSlice.actions.setUser({
            userId: res.data.userId ?? '',
            email,
            firstName,
            lastName,
          })
        );
      } else {
        Alert.alert(
          '',
          res?.status?.msg ??
            'Something went wrong, Please try again.'
        );
      }
    } catch (error: any) {
      Logger.error(error, 'Signup API error:');
      Alert.alert(
        '',
        error?.message ??
          'Something went wrong, Please try again.'
      );
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.titleContainer}>
          <Text style={theme.textVariants.h1SemiBold}>Sign up</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <View style={styles.nameInputContainer}>
              <Input
                isError={validationError.firstName}
                type="primary"
                placeholder="First name"
                value={firstName}
                onChange={() =>
                  setValidationError({...validationError, firstName: false})
                }
                onChangeText={e => setFirstName(e.trim())}
                containerStyle={styles.nameInput}
              />
              <Input
                isError={validationError.lastName}
                type="primary"
                placeholder="Last name"
                value={lastName}
                onChange={() =>
                  setValidationError({...validationError, lastName: false})
                }
                onChangeText={e => setLastName(e.trim())}
                containerStyle={styles.nameInput}
              />
            </View>
            <Input
              isError={validationError.email}
              type="primary"
              placeholder="Work E-mail"
              disabledAutoCap={true}
              value={email}
              onChange={() =>
                setValidationError({...validationError, email: false})
              }
              onChangeText={e => setEmail(e.trim())}
              containerStyle={styles.emailInput}
            />
            <Input
              isError={validationError.mobile}
              type="mobile"
              dialCode={dialCode}
              setDialCode={setDialCode}
              placeholder="Enter phone number"
              value={mobile}
              onChange={() =>
                setValidationError({...validationError, mobile: false})
              }
              onChangeText={e => setMobile(e.trim())}
              containerStyle={styles.emailInput}
            />
            <Input
              isError={validationError.password}
              type="password"
              disabledAutoCap={true}
              isOpen={isOpen}
              setOpen={setOpen}
              placeholder="Create Password"
              value={password}
              onChange={() =>
                setValidationError({...validationError, password: false})
              }
              onChangeText={e => setPassword(e.trim())}
              style={styles.emailInput}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Back"
              type="primaryGrey"
              style={styles.backButton}
              onPress={() => goBack()}
            />
            <Button
              title="Next"
              type="primary"
              isLoading={isVerifyEmail}
              style={styles.nextButton}
              onPress={registerUser}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: 16,
  },
  pagerView: {
    flex: 0.4,
  },
  bottomContainer: {
    flex: 0.6,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleImage: {
    width: '100%',
    height: 300,
  },
  nameInputContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInput: {
    width: '49%',
  },
  emailInput: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  backButton: {
    paddingHorizontal: 32,
    marginRight: 16,
  },
  nextButton: {
    width: '50%',
  },
});

export default SignupScreen;
