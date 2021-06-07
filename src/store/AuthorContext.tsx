import React, { createContext, useState, ReactNode } from "react";

export interface AuthorContextData {
  author: string | null;
  setAuthor: (author: string | null) => void;
}

export const AuthorContext = createContext<AuthorContextData>({
  author: null,
  setAuthor: () => null,
});

function useAuthorContextValue(): AuthorContextData {
  const [author, setAuthor] = useState<AuthorContextData["author"]>(null);

  return {
    author,
    setAuthor,
  };
}

interface IAuthorProvider {
  children: ReactNode;
}

export const AuthorProvider = ({ children }: IAuthorProvider) => {
  const authorContextValue = useAuthorContextValue();

  return (
    <AuthorContext.Provider value={authorContextValue}>
      {children}
    </AuthorContext.Provider>
  );
};
