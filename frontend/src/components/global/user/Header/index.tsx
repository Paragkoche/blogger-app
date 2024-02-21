import { useAuth } from "@/providers/User/auth.providers";

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  return <header></header>;
};

export default Header;
