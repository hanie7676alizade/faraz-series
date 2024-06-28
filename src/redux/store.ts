import { configureStore } from "@reduxjs/toolkit";

import commonReducer from "./Common/slice";

const rootReducer = {
  Common: commonReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type TStore = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
