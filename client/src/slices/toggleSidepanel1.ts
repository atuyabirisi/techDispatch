import { createSlice } from "@reduxjs/toolkit";

interface SidepanelToggleState {
  isOpen: boolean;
}

const initialState: SidepanelToggleState = {
  isOpen: false,
};

const sidePanelToggleSlice = createSlice({
  name: "sidepanelToggle",
  initialState,
  reducers: {
    openSidepanel(state) {
      state.isOpen = true;
    },
    closeSidepanel(state) {
      state.isOpen = false;
    },
  },
});

export const { openSidepanel, closeSidepanel } = sidePanelToggleSlice.actions;
export default sidePanelToggleSlice.reducer;
