import { configureStore } from "@reduxjs/toolkit";
import menuToggleReducer from "../slices/menuToggleSlice";
import signUpModalReducer from "../slices/signUpModalSlice";
import signInModalReducer from "../slices/signInModalSlice";
import deleteModalReducer from "../slices/deleteModalSlice";
import editorScreenStateReducer from "../slices/editorScreensSlice";
import editorContentReducer from "../slices/editorContentSlice";
import toggleSidepanelReducer from "../slices/toggleSidepanel1";
import adminDashScreenReducer from "../slices/adminDashScreens";
import paginationReducer from "../slices/paginationSlice";

export const store = configureStore({
  reducer: {
    mobileMenuCanvas: menuToggleReducer,
    signUpModal: signUpModalReducer,
    signInModal: signInModalReducer,
    deleteModal: deleteModalReducer,
    editorScreenState: editorScreenStateReducer,
    editorContent: editorContentReducer,
    sidepanelCanvas: toggleSidepanelReducer,
    adminDashScreen: adminDashScreenReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
