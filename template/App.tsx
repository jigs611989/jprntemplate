/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import RootStack from './src/navigation/RootNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './src/navigation/navigator';
import Logger from './src/utils/logger';

function App(): React.JSX.Element {

  useEffect(() => {
    Logger.init();
  }, [])

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={styles.container}>
            <NavigationContainer
              ref={navigationRef}
              // theme={theme}
              fallback={<ActivityIndicator animating />}>
                <RootStack />
            </NavigationContainer>
          </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
