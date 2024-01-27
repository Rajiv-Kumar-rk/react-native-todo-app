import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Splash from './src/screens/Splash';
import AppNavigator from './src/AppNavigator';

function App(){
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar backgroundColor={'#2d4ef7'}/>
      <AppNavigator /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#2d4ef7',
    flex: 1
  },
});

export default App;
