import { Link, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./UILink.module.scss";

import type { FC } from "react";

type LinkThemes = "primary" | "secondary";

interface Props extends LinkProps {
  className?: string;
  theme?: LinkThemes;
}

const UILink: FC<Props> = (props) => {
  const { className, to, children, theme = "primary", ...restProps } = props;
  return (
    <Link
      to={to}
      className={classNames(
        styles.link,
        {
          [styles.primary]: theme === "primary",
          [styles.secondary]: theme === "secondary",
        },
        [className]
      )}
      {...restProps}
    >
      {children}
    </Link>
  );
};

export default UILink;
