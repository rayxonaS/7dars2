import { configureStore } from "@reduxjs/toolkit";
import сartReducer from "./features/CartSlice";

export const store = configureStore({
  reducer: {
    cart: сartReducer,
  },
});
