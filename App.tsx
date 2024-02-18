/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  NativeModules,
} from 'react-native';
import Video from 'react-native-video';
import UIExam from './src/pages/UIExam';
import NativeModuleExam from './src/pages/NativeModuleExam';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {MoviesModule} = NativeModules;

  useEffect(() => {
    MoviesModule.fetchMovies(movies => {
      console.log(movies);
    });
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flexGrow: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <NativeModuleExam /> */}
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
