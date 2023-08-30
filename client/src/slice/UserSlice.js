import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    logoutUser: (state, action) => {
      return {};
    },
  },
});

export const { setUser, logoutUser } = UserSlice.actions;
export default UserSlice.reducer;
