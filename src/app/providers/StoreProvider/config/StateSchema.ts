import { CounterSchema } from "entities/Counter";
import { UserShema } from "entities/User";
import { loginSchema } from "features/AuthByUsername";

export interface StateSchema {
  counter: CounterSchema;
  user: UserShema;
  loginForm?: loginSchema;
}
