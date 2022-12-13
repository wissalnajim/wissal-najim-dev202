import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PostsSliceReducer from './PostsSlice';
import UserSliceReducer from './UserSlice';


const reducer = combineReducers({
    postsSlice:PostsSliceReducer,
    UserSlice:UserSliceReducer,
});
const store = configureStore({reducer});

export default store;