import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { articleDetailsSchema } from "../types/articleDetailsSchema";
import { Article } from "../types/article";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";

const initialState: articleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchArticleById.pending, (state) => {
          state.error = undefined;
          state.isLoading = true;
        })
        .addCase(
          fetchArticleById.fulfilled,
          (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.data = action.payload;
          }
        )
        .addCase(fetchArticleById.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        })
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
