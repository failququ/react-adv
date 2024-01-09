import { classNames } from "shared/lib/classNames/classNames";
import UILink from "shared/ui/UILink/UILink";
import { ThemeSwitch } from "shared/ui/ThemeSwitch";

import styles from "./Navbar.module.scss";

import type { FC } from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <ThemeSwitch />
      <div className={styles.links}>
        <UILink theme="primary" to="/">
          Главная
        </UILink>
        <UILink theme="primary" to="/about">
          О нас
        </UILink>
      </div>
    </div>
  );
};

export default Navbar;
