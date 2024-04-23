import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from './onboardingTypes';
import defaultScreenOptions from '../defaultScreenOptions';
import LoginScreen from '../../features/authentication/login/LoginScreen';
import SignupScreen from '../../features/authentication/signup/SignupScreen';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={defaultScreenOptions}
      initialRouteName="Login">
      <OnboardingStack.Screen name="Login" component={LoginScreen} />
      <OnboardingStack.Screen name="Signup" component={SignupScreen} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
