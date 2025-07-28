import { createSlice } from "@reduxjs/toolkit";
import type { ArticleData } from "../interfaces/types";

const initialState: ArticleData = {
  articleData: {
    tittle: "",
    articleImage: null,
    content: "",
  },
};

const editorContentSlice = createSlice({
  name: "articleForm",
  initialState,
  reducers: {
    setEditorContent(state, action) {
      state.articleData = { ...state.articleData, ...action.payload };
    },
    setArticleImage(state, action) {
      state.articleData.articleImage = action.payload;
    },
  },
});

export const { setEditorContent, setArticleImage } = editorContentSlice.actions;

export default editorContentSlice.reducer;
