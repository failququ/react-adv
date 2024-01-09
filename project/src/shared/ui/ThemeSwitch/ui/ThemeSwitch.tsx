import { classNames } from "shared/lib/classNames/classNames";

import { Theme, useTheme } from "app/providers/ThemeProvider";
import Button from "shared/ui/Button/Button";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";

import styles from "./ThemeSwitch.module.scss";

import type { FC } from "react";

interface Props {
  className?: string;
}

const ThemeSwitch: FC<Props> = (props) => {
  const { className } = props;

  const { theme, handleChangeTheme } = useTheme();

  return (
    <Button
      className={classNames(styles.themeSwitch, {}, [className])}
      theme="clean"
      onClick={handleChangeTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

export default ThemeSwitch;
