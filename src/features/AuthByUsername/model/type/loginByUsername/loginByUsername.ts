import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { userActions } from "entities/User";
import { User } from "entities/User/model/types/user";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  ThunkConfig<string>
>(
  "auth/loginByUsername",
  async (authData, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>("/login", authData);

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      dispatch(userActions.setAuthData(response.data));
      if (extra.navigate) {
        extra.navigate("/about");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t("Вы ввели непрверный логин или пароль"));
    }
  }
);
