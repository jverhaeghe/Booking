import type { FunctionComponent } from "react";
import React, { createContext, useContext, useState } from "react";

interface AuthenticationContextProps {
  user: string;
  setUser: (user: string) => void;
}

const AuthenticationContext = createContext<AuthenticationContextProps>(
  {} as AuthenticationContextProps
);

export const AuthenticationProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<string>("");

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);
