import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        // тест
        resolve(import("./MainPage"));
      }, 1500);
    })
);
