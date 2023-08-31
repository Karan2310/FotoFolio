import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slice/UserSlice";
import PostsReducer from "./slice/PostSlice.js";

const store = configureStore({
  reducer: {
    user: UserReducer,
    posts: PostsReducer,
  },
});

export default store;
