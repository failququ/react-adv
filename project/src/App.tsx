import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./utils/classNames/classNames";

import "./styles/index.scss";

const App = () => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={handleChangeTheme}>Сменить тему</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
