import { createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
