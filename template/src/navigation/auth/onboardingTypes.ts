import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type OnboardingStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type OnboardingNavigationProp =
  NativeStackNavigationProp<OnboardingStackParamList>;
