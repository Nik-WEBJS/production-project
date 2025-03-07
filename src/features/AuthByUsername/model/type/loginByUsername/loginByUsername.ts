import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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
  { rejectValue: string }
>("auth/loginByUsername", async (authData, thunkApi) => {
  try {
    const response = await axios.post<User>(
      "http://localhost:8000/login",
      authData
    );

    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkApi.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(
      i18n.t("Вы ввели непрверный логин или пароль")
    );
  }
});
