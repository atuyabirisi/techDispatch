import  { createSlice } from "@reduxjs/toolkit";
import type {  AuthModalState as SignInModalState } from "../interfaces/types";

const initialState: SignInModalState = {
    isOpen: false,
}

const signInModalSlice = createSlice({
  name: "signUpModal",
  initialState,
  reducers: {
    openSignInModal(state) {
      state.isOpen = true;
    },
    closeSignInModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openSignInModal, closeSignInModal } = signInModalSlice.actions;
export default signInModalSlice.reducer;