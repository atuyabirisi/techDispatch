import { createSlice } from "@reduxjs/toolkit";
import type { DeleteModalState } from "../interfaces/types";

const initialState: DeleteModalState = {
  isOpen: false,
  articleId: "",
};

const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState,
  reducers: {
    openDeleteModal(state, action) {
      state.isOpen = true;
      state.articleId = action.payload;
    },
    closeDeleteModal(state) {
      state.isOpen = false;
      state.articleId = "";
    },
  },
});

export const { openDeleteModal, closeDeleteModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;
