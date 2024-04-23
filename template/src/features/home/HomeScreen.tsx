import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme/theme';
import { useAppDispatch } from '../../store/store';
import appSlice from '../../store/appState/appSlice';

const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()

  const LogoutButton = useCallback(() => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          dispatch(appSlice.actions.signOut())
        }}
      >
        <Text style={theme.textVariants.small16SemiBold}>Logout</Text>
      </TouchableOpacity>
    );
  }, []);


  useEffect(() => {
    navigation.setOptions({
      title: 'Home Screen',
      headerRight: LogoutButton
    })
  }, [navigation])

  useEffect(() => {
    console.log('Hello Home Screen')
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
