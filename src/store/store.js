import { configureStore } from "@reduxjs/toolkit";
import usersRedusers from "./reducers/usersRedusers.js";
import counterReducers from "./reducers/counterReducers.js";

export const store = configureStore({
  reducer: { users: usersRedusers, counter: counterReducers },
});
