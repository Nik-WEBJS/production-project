import { lazy } from 'react';

export const AboutPageAsync = lazy( () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        // тест
        resolve(import("./AboutPage"));
      }, 1500);
    }));
