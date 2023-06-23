import { configureStore ,combineReducers } from '@reduxjs/toolkit'
import ChatReducer from '../reducers/ChatReducer'
import EventReducer from '../reducers/EventReducer'
import HomeReducer from '../reducers/HomeReducer'
import RatingReducer from '../reducers/RatingReducer'
import UserReducer from '../reducers/UserReducer'
import {  
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Rootreducers = combineReducers({
    chats: ChatReducer,
    events: EventReducer,
    home: HomeReducer,
    reviews: RatingReducer,
    users: UserReducer            
 });

const persistConfig  = {
    key: 'root',
    version: 1,
    storage : AsyncStorage
  };

  const persistedReducer = persistReducer(persistConfig, Rootreducers);

  

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export default store;

