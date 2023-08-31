import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPosts } = PostSlice.actions;
export default PostSlice.reducer;
