import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { IComment } from "components/comment";

export type IUsers = string[];

export interface UsersContextData {
  users: IUsers;
}

export const UsersContext = createContext<UsersContextData>({
  users: [],
});

function useUsersContextValue(comments: IComment[]): UsersContextData {
  const [users, setUsers] = useState<UsersContextData["users"]>([]);

  const getUsers = useCallback((): IUsers => {
    const users: Set<string> = new Set();

    const prepareComments = (comments: IComment[]): void => {
      comments.forEach((comment) => {
        users.add(comment.author);

        if (!!comment.comments.length) {
          prepareComments(comment.comments);
        }
      });
    };

    prepareComments(comments);

    return Array.from(users);
  }, [comments]);

  useEffect(() => {
    setUsers(getUsers());
  }, [getUsers, comments]);

  return {
    users,
  };
}

interface IUsersProvider {
  children: ReactNode;
  comments: IComment[];
}

export const UsersProvider = ({ children, comments }: IUsersProvider) => {
  const usersContextValue = useUsersContextValue(comments);

  return (
    <UsersContext.Provider value={usersContextValue}>
      {children}
    </UsersContext.Provider>
  );
};
