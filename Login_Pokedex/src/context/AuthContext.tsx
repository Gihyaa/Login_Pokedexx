import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextData {
  isAuthenticated: boolean;
  user: string | null;
  isLoading: boolean;
  signIn: (username: string, password: string) => boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const storedUser = await AsyncStorage.getItem("@Auth:user");
        if (storedUser) {
          setUser(storedUser);
          setIsAuthenticated(true);
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadStorageData();
  }, []);

  function signIn(username: string, password: string): boolean {
    if (username.trim().toLowerCase() === "pokemon" && password.trim() === "pikachu") {
      const name = username.trim();
      setUser(name);
      setIsAuthenticated(true);
      AsyncStorage.setItem("@Auth:user", name);
      return true;
    }
    return false;
  }

  async function signOut() {
    setUser(null);
    setIsAuthenticated(false);
    await AsyncStorage.removeItem("@Auth:user");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
}