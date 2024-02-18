import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import UIExam from '../../pages/UIExam';
import NativeModuleExam from '../../pages/NativeModuleExam';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="screenUIExam"
        screenOptions={{
          drawerType: 'front',
          headerStyle: {backgroundColor: 'black'},
          drawerActiveTintColor: 'black',
          drawerInactiveTintColor: 'black',
          headerTintColor: 'white',
          drawerStyle: {
            backgroundColor: '#b9babf',
          },
          drawerItemStyle: {
            marginHorizontal: 0,
            marginTop: 0,
            borderRadius: 0,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: 'black',
          },
          overlayColor: 'transparent',
        }}>
        <Drawer.Screen
          name="screenUIExam"
          component={UIExam}
          options={{title: 'UI EXAM'}}
        />
        <Drawer.Screen
          name="screeNativeModuleExam"
          component={NativeModuleExam}
          options={{title: 'NATIVE MODULE EXAM'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
