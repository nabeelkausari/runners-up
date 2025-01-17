import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from "sonner";

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, name: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    console.log('Login attempt:', { email, password });
    
    if (email === 'demo' && password === 'demo') {
      setUser({ email: 'demo', name: 'Demo User' });
      toast.success('Successfully logged in!');
    } else {
      toast.error('Invalid credentials. Use demo/demo');
    }
  };

  const signup = (email: string, password: string, name: string) => {
    console.log('Signup attempt:', { email, password, name });
    
    if (email === 'demo' && password === 'demo') {
      setUser({ email, name });
      toast.success('Account created successfully!');
    } else {
      toast.error('Please use demo/demo credentials');
    }
  };

  const logout = () => {
    setUser(null);
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}