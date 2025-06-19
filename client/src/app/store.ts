import { configureStore } from "@reduxjs/toolkit";
import menuToggleReducer from "../slices/menuToggleSlice";
import signUpModalReducer from "../slices/signUpModalSlice"
import signInModalReducer from "../slices/signInModalSlice"

export const store = configureStore({
  reducer: {
    mobileMenuCanvas: menuToggleReducer,
    signUpModal: signUpModalReducer,
    signInModal: signInModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
