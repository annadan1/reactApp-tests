import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, { payload }) => {
      state.users = payload;
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
  },
});

export const { addUsers, deleteUser } = counterSlice.actions;

export default counterSlice.reducer;
