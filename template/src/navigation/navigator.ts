import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {HomeStackParamList} from './homeType';

export const navigationRef =
  React.createRef<NavigationContainerRef<HomeStackParamList>>();
