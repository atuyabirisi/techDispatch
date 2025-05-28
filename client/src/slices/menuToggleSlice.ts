import { createSlice } from "@reduxjs/toolkit";

interface MenuToggleState {
  isOpen: boolean;
}

const initialState: MenuToggleState = {
  isOpen: false,
};

const menuToggleSlice = createSlice({
  name: "menuToggle",
  initialState,
  reducers: {
    openMenu(state) {
      state.isOpen = true;
    },
    closeMenu(state) {
      state.isOpen = false;
    }
  },
});

export const { openMenu, closeMenu } = menuToggleSlice.actions;
export default menuToggleSlice.reducer;
