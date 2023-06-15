import React from 'react';
import { View, Text } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux'

export default function componentName() {
  return (
     <Provider>
       <Navigation />
     </Provider>
    
  );
}
