import { configureStore } from '@reduxjs/toolkit'
import ChatReducer from '../reducers/ChatReducer'
import EventReducer from '../reducers/EventReducer'
import HomeReducer from '../reducers/HomeReducer'
import RatingReducer from '../reducers/RatingReducer'
import UserReducer from '../reducers/UserReducer'




export const store = configureStore({
    reducer: {
        chats: ChatReducer,
        events: EventReducer,
        home: HomeReducer,
        reviews: RatingReducer,
        users: UserReducer

    }
})