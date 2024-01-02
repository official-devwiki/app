import React from "react";

type AuthContextType = {
  userId: string;
};

export const AuthContext = React.createContext<AuthContextType>(null!);

export const useAuth = () => {
  return React.useContext(AuthContext);
};
