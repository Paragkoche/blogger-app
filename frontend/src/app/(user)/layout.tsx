"use client";
import Header from "@/components/global/user/Header";
import AuthProvider from "@/providers/User/auth.providers";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AuthProvider>
      <Header />
      {children}
    </AuthProvider>
  );
};

export default Layout;
