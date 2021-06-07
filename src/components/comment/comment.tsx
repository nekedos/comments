import React, { memo, useContext } from "react";
import classnames from "classnames";

import { AuthorContext } from "store/AuthorContext";
import User from "components/user";

import styles from "./comment.module.css";

export type IComment = {
  author: string;
  message: string;
  comments: IComment[];
};

export default memo(function Comment({ author, message, comments }: IComment) {
  const { author: selectedAuthor, setAuthor } = useContext(AuthorContext);

  const isAuthorSelected = selectedAuthor === author;

  return (
    <div className={styles.root}>
      <div className={styles.author}>
        <User onClick={setAuthor} name={author} />
      </div>
      <div
        className={classnames(
          styles.message,
          isAuthorSelected && styles.selectedMessage
        )}
      >
        {message}
      </div>
      {!!comments.length &&
        comments.map((comment: IComment, index) => (
          <Comment key={`${comment.author}-${index}`} {...comment} />
        ))}
    </div>
  );
});
