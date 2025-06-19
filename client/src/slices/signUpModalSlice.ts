import { createSlice } from "@reduxjs/toolkit";
import type { AuthModalState as SignUpModalState } from "../interfaces/types";

const initialState:  SignUpModalState = {
  isOpen: false,
};

const signUpModalSlice = createSlice({
  name: "signUpModal",
  initialState,
  reducers: {
    openSignUpModal(state) {
      state.isOpen = true;
    },
    closeSignUpModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openSignUpModal, closeSignUpModal } = signUpModalSlice.actions;
export default signUpModalSlice.reducer;
