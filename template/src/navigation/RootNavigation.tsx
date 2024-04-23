import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigator from './HomeNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import OnboardingNavigator from './auth/OnboardingNavigator';

const RootStack = () => {

  const isAuth = useSelector((state: RootState) => state?.app?.isAuth);

  if (!isAuth) {
    return (
      <OnboardingNavigator />
    );
  }

  return (
    <HomeNavigator />
  );
}

export default RootStack;
