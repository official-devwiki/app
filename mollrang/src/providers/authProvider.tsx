import React, {ReactNode, useState} from "react";
import useLocalStorage from "@hooks/useLocalStorage";
import {User} from "@pages/_app";

type AuthContextType = {
  userInfo: User;
  setId: (id: string) => void;
};

const USER_KEY = 'user';

export const AuthContext = React.createContext<AuthContextType>(null!);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({children}: { children: ReactNode }) => {
  const {getStorageItems, removeStorageItems, setStorageItems} =
    useLocalStorage<User>();
  const [userInfo, setUserInfo] = useState<User>(getStorageItems(USER_KEY));

  const setId = (id: string) => {
    setUserInfo({id});
  }

  const value = {
    userInfo,
    setId
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

