import { lazy } from "react";

export const MainPageLazy = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      //Временно
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
