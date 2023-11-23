import { configureStore } from "@reduxjs/toolkit";
import cursorSlice from "./cursorSlice";
export const store = configureStore({
  reducer: {
    cursor: cursorSlice,
  },
});
export type RootType = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
