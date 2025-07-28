import { createSlice } from "@reduxjs/toolkit";

interface EditorScreenState {
  editorScreenState: number;
}

const initialState: EditorScreenState = {
  editorScreenState: 1,
};

const toggleEditorScreenSlice = createSlice({
  name: "toggleEditorScreenSlice",
  initialState,
  reducers: {
    goToEditor(state) {
      state.editorScreenState = 2;
    },
    goBackToStartWriting(state) {
      state.editorScreenState = 1;
    },
  },
});

export const { goToEditor, goBackToStartWriting } =
  toggleEditorScreenSlice.actions;

export default toggleEditorScreenSlice.reducer;
