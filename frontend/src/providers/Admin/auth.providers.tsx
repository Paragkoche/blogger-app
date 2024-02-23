import { AdminLogOut, AdminVerify } from "@/api";
import { AdminSchemaType } from "@/types/schema.types";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context for authentication
const AuthContext = createContext<{
  isLoggedIn: boolean;
  logout: () => void;
  user: AdminSchemaType | null;
}>({
  isLoggedIn: false,
  logout: () => {},
  user: null,
});
// Custom hook for managing authentication
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AdminSchemaType | null>(null);

  useEffect(() => {
    AdminVerify()
      .then((res) => {
        setIsLoggedIn(true);
        setUser(res.data.data);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }, []);

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
    <AuthContext.Provider value={{ isLoggedIn, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
