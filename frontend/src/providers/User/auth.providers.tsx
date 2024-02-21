import { UserLogOut, UserVerify } from "@/api";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context for authentication
const AuthContext = createContext({
  isLoggedIn: false,
  logout: () => {},
});

// Custom hook for managing authentication
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    UserVerify()
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }, []);
  const login = () => {};

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
    <AuthContext.Provider value={{ isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
