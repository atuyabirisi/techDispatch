import { createSlice } from "@reduxjs/toolkit";

interface AdminDashScreen {
  adminScreenState: number;
}

const initialState: AdminDashScreen = {
  adminScreenState: 1,
};

const toggleAdminPageScreenSlice = createSlice({
  name: "adminDashScreen",
  initialState,
  reducers: {
    showEditor: (state) => {
      state.adminScreenState = 1;
    },
    manageArticlesScreen: (state) => {
      state.adminScreenState = 2;
    },
  },
});

export const { showEditor, manageArticlesScreen } =
  toggleAdminPageScreenSlice.actions;
export default toggleAdminPageScreenSlice.reducer;
