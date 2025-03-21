import { ThunkConfig } from "app/providers/StoreProvider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  "articleDetails/fetchCommentsByArticleId",
  async (articleId, { extra, rejectWithValue }) => {
    if (!articleId) {
      return rejectWithValue("error");
    }

    try {
      const response = await extra.api.get<Comment[]>(`/comments`, {
        params: {
          articleId,
          _expand: "user",
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
