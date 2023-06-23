import 'react-native-gesture-handler'
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from './src/redux/store/store';

export default function componentName() {
  let persistor = persistStore(store);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <Navigation />
        </PersistGate>
      </Provider>



    </>
  );
}
