import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
//ProductSlice
//ApplicationSlice
//dfdfdfd

export const store = configureStore({
  reducer: {
    counter : counterReducer
  },
});
