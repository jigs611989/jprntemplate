import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import defaultScreenOptions from './defaultScreenOptions';
import { HomeStackParamList } from './homeType';
import HomeScreen from '../features/home/HomeScreen';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default memo(HomeStackScreen);
