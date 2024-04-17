"use client";
import Header from "@/components/global/user/Header";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/User/auth.providers";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AuthProvider>
      <Header />
      <main className="sm:px-12 md:px-12 px-4 py-5 ">{children}</main>
      <Toaster />
    </AuthProvider>
  );
};

export default Layout;
