import { configureStore } from "@reduxjs/toolkit";

import serialReducer from "./serial/slice";

const rootReducer = {
  Serial: serialReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type TStore = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
