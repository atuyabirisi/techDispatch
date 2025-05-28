import { configureStore } from "@reduxjs/toolkit";
import menuToggleReducer from "../slices/menuToggleSlice";

export const store = configureStore({
  reducer: {
    mobileMenuCanvas: menuToggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
