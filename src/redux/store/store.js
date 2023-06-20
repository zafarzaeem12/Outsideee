import { configureStore ,combineReducers } from '@reduxjs/toolkit'
import {  persistReducer ,persistStore } from 'redux-persist';
import ChatReducer from '../reducers/ChatReducer'
import EventReducer from '../reducers/EventReducer'
import HomeReducer from '../reducers/HomeReducer'
import RatingReducer from '../reducers/RatingReducer'
import UserReducer from '../reducers/UserReducer'
import storage from 'redux-persist/lib/storage'


const Rootreducers = combineReducers({
    chats: ChatReducer,
    events: EventReducer,
    home: HomeReducer,
    reviews: RatingReducer,
    users: UserReducer            
 });

const persistConfig = {
    key: 'root',
    storage ,
    whitelist: ['chats', 'events', 'home', 'reviews', 'users'] // Specify the reducers you want to persist
  };

  const persistedReducer = persistReducer(persistConfig, Rootreducers);

  

export const store = configureStore({
    reducer: persistedReducer
})

 export const persistor = persistStore(store)

