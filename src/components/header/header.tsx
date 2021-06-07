import React, { memo } from "react";
import styles from "./header.module.css";

export type IHeader = {
  title: string;
};

export default memo(function Header({ title }: IHeader) {
  return <h2 className={styles.root}>{title}</h2>;
});
