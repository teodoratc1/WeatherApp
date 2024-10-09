"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../config/firebase/firebase";

interface AuthContextProps {
  currentUser: {
    name: string | null;
    email: string | null;
    uid: string | null;
  };
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<{
    name: string | null;
    email: string | null;
    uid: string | null;
  }>({ name: null, email: null, uid: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        const name = user.email?.split("@")[0] || null;
        setCurrentUser({ name, email: user.email, uid: user.uid });
      } else {
        setCurrentUser({ name: null, email: null, uid: null });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
