import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { userActions } from "entities/User";
import { User } from "entities/User/model/types/user";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Profile>("/profile");

    return response.data;
  } catch (error) {
    return rejectWithValue(i18n.t("Вы ввели непрверный логин или пароль"));
  }
});
