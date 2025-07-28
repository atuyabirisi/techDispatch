import { configureStore } from "@reduxjs/toolkit";
import menuToggleReducer from "../slices/menuToggleSlice";
import signUpModalReducer from "../slices/signUpModalSlice";
import signInModalReducer from "../slices/signInModalSlice";
import editorScreenStateReducer from "../slices/editorScreensSlice";
import editorContentReducer from "../slices/editorContentSlice";
import toggleSidepanelReducer from "../slices/toggleSidepanel1";

export const store = configureStore({
  reducer: {
    mobileMenuCanvas: menuToggleReducer,
    signUpModal: signUpModalReducer,
    signInModal: signInModalReducer,
    editorScreenState: editorScreenStateReducer,
    editorContent: editorContentReducer,
    sidepanelCanvas: toggleSidepanelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
