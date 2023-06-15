import React from 'react';
import { View, Text } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux'
import { store } from './src/redux/store/store';

export default function componentName() {
  return (
     <Provider store={store}>
       <Navigation />
     </Provider>
    
  );
}
