import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

import type { ButtonHTMLAttributes, FC } from "react";

type ButtonThemes = "clean";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
}

const Button: FC<Props> = (props) => {
  const { className, children, theme = "clean", ...restProps } = props;
  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.clean]: theme === "clean",
        },
        [className]
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
