import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./actions";

export const store = configureStore({
  reducer: {
    taskName: slice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
