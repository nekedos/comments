import React, { memo, ReactNode } from "react";
import Header from "components/header";
import styles from "./comments.module.css";

export type IComments = {
  children: ReactNode;
};

export default memo(function Comments({ children }: IComments) {
  return (
    <div className={styles.root}>
      <Header title="Comments from users" />
      {children}
    </div>
  );
});
