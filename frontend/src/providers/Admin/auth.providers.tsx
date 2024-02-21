import { AdminLogOut, AdminVerify, UserLogOut, UserVerify } from "@/api";
import React, { createContext, useContext, useState } from "react";

// Create a context for authentication
const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// Custom hook for managing authentication
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    AdminVerify()
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  };

  const logout = () => {
    AdminLogOut()
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch(() => {
        setIsLoggedIn(true);
      });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
