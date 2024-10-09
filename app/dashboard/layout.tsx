"use client";
import { useAuth } from "@/components/AuthProvider";
import Sidebar from "../QuickNavigation/Navbar/Sidebar";
import QuickNavigation from "../QuickNavigation/QuickNavigation";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentUser } = useAuth();
  return (
    <main className="lg:flex flex-grow mb-20">
      {/* <Sidebar user={currentUser} /> */}
      {children}
      <footer className="w-full h-full flex justify-center text-center text-xs lg:hidden">
        <QuickNavigation />
      </footer>
    </main>
  );
}
