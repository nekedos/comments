import React, { memo } from "react";
import classnames from "classnames";
import { ReactComponent as Avatar } from "icons/avatar.svg";
import styles from "./user.module.css";

export type IUser = {
  name: string;
  isSelected?: boolean;
  onClick?: (name: string) => void;
};

export default memo(function User({ name, isSelected, onClick }: IUser) {
  const handleClick = () => {
    onClick && onClick(name);
  };

  return (
    <button
      onClick={handleClick}
      className={classnames(styles.btn, isSelected && styles.isSelected)}
    >
      <Avatar className={styles.avatar} />
      {name}
    </button>
  );
});
