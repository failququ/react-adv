import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitch } from "shared/ui/ThemeSwitch";

import styles from "./Sidebar.module.scss";

import { useState, type FC } from "react";

interface Props {
  className?: string;
}

const Sidebar: FC<Props> = (props) => {
  const { className } = props;

  const [isCollapsed, setIsCollapsed] = useState<boolean>();

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        styles.sidebar,
        { [styles.collapsed]: isCollapsed },
        [className]
      )}
    >
      <button onClick={handleCollapse}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Sidebar;
