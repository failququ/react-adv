import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

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
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
