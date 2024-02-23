import { UserLogOut, UserVerify } from "@/api";
import { UserSchemeType } from "@/types/schema.types";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context for authentication
const AuthContext = createContext<{
  isLoggedIn: boolean;
  logout: () => void;
  user: UserSchemeType | null;
}>({
  isLoggedIn: false,
  logout: () => {},
  user: null,
});

// Custom hook for managing authentication
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserSchemeType | null>(null);

  useEffect(() => {
    UserVerify()
      .then((res) => {
        setIsLoggedIn(true);
        setUser(res.data.data);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }, []);
  // const login = () => {};

  const logout = () => {
    UserLogOut()
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch(() => {
        setIsLoggedIn(true);
      });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
