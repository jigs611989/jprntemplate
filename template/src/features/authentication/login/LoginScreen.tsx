import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {useAppDispatch} from '../../../store/store';
import appSlice from '../../../store/appState/appSlice';
import Logger from '../../../utils/logger';
import Validator from '../../../utils/validator';
import { OnboardingNavigationProp } from '../../../navigation/auth/onboardingTypes';
import { theme } from '../../../theme/theme';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>(__DEV__ ? 'test@test.com' : '');
  const [password, setPassword] = useState<string>(__DEV__ ? 'Test@321' : '');
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const {navigate} = useNavigation<OnboardingNavigationProp>();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={[theme.textVariants.h1SemiBold, {padding: theme.spacing.l}]}>Login Screen</Text>
      <View style={styles.bottomContainer}>
        <View>
          <Input
            type="primary"
            placeholder="E-mail"
            value={email}
            onChange={() => {}}
            onChangeText={(t: string) => setEmail(t?.trim() ?? '')}
            disabledAutoCap={true}
            containerStyle={{
              marginBottom: theme.spacing.l
            }}
          />
          <Input
            type="password"
            isOpen={isOpen}
            setOpen={setOpen}
            placeholder="Password"
            value={password}
            onChange={() => {}}
            onChangeText={setPassword}
            disabledAutoCap={true}
            style={{
              marginBottom: 16,
            }}
          />
        </View>
        <Button
          isLoading={isLogin}
          title="SIGN IN"
          type="primary"
          style={styles.buttonStyle}
          onPress={async () => {
            if (email?.length === 0) {
              Alert.alert('', 'Email is Required')
              return;
            }
            if (password?.length === 0) {
              Alert.alert('', 'Password is Required')
              return;
            }
            if (!Validator.isValidEmail(email)) {
              Alert.alert('', 'Invalid Email Address')
              return;
            }
            try {
              Keyboard.dismiss();
              setIsLogin(true);
              // const data = await loginAPI(email, password);
              // Logger.prettyPrintToConsole(data, 'Login response');
              dispatch(appSlice.actions.setIsAuth(true));
            } catch (error: any) {
              Logger.error(error, 'Login Error:');
              let errMessage = 'Something went wrong, Please try again.';
              if ((error?.message?.length ?? 0) > 0) {
                errMessage = error?.message;
              }
              Alert.alert('Error', errMessage);
            } finally {
              setIsLogin(false);
            }
          }}
        />
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => navigate('Signup')}>
            <Text>
              Don't you have account yet?{' '}
              <Text>
                Sign up now
              </Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 8,
  },
  pagerView: {
    flex: 0.4,
  },
  bottomContainer: {
    flex: 0.65,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '80%',
  },
});

export default LoginScreen;
