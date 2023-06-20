import  'react-native-gesture-handler'
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { StatusBar  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function componentName() {

  return (
    <>
       <StatusBar
        barStyle="dark-content" 
        backgroundColor="transparent"
        translucent={true}
      />
      <Navigation />
    


    </>
  );
}
