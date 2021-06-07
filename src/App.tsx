import React from "react";
import commentsPayload from "commentsPayload";

import Comments from "components/comments";
import Comment, { IComment } from "components/comment";

import Users from "components/users";

import { AuthorProvider } from "./store/AuthorContext";
import { UsersProvider } from "./store/UsersContext";

import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.root}>
      <UsersProvider comments={commentsPayload}>
        <AuthorProvider>
          <Comments>
            {commentsPayload.map((comment: IComment, index) => (
              <Comment {...comment} key={`${comment.author}-${index}`} />
            ))}
          </Comments>
          <Users />
        </AuthorProvider>
      </UsersProvider>
    </div>
  );
}
