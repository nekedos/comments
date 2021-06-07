import React, { memo, useContext } from "react";
import User from "../user";
import Header from "components/header";
import styles from "./users.module.css";
import { AuthorContext } from "store/AuthorContext";
import { UsersContext } from "store/UsersContext";

export default memo(function Users() {
  const { author: selectedAuthor, setAuthor } = useContext(AuthorContext);
  const { users } = useContext(UsersContext);

  return (
    <div className={styles.root}>
      <Header title="Users" />
      {users.map((userName) => (
        <div key={userName} className={styles.user}>
          <User
            name={userName}
            isSelected={userName === selectedAuthor}
            onClick={setAuthor}
          />{" "}
        </div>
      ))}
    </div>
  );
});
