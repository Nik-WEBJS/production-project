import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export enum ValidateProfileError {
  INCOREECT_USER_DATA = "INCOREECT_USER_DATA",
  INCOREECT_USER_AGE = "INCOREECT_USER_AGE",
  INCOREECT_USER_COUNTRY = "INCOREECT_USER_COUNTRY",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateError?: ValidateProfileError[];
}
