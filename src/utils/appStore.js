import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice'
import GptSearchReducer from './GPTSearchSlice';
import langReducer from './langSlice'
export const store = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        GptSearch:GptSearchReducer,
        lang:langReducer,
    }
})