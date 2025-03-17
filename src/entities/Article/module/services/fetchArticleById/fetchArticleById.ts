import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/article";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(
  "articleDetails/fetchArticleById",
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`);

      return response.data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
