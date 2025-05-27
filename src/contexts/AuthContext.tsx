import React, { createContext, useContext, ReactNode } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { toast } from 'sonner';

interface User {
  email: string;
  name: string;
  profileImage?: string;
  phone?: string;
  address?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, name: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoaded: boolean;
  isSignedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user: clerkUser, isSignedIn } = useUser();
  const { signOut } = useClerk();

  // Map Clerk user to our app's user type
  const user = isSignedIn && clerkUser ? {
    email: clerkUser.primaryEmailAddress?.emailAddress || '',
    name: clerkUser.fullName || 'User',
    profileImage: clerkUser.imageUrl,
    phone: clerkUser.phoneNumbers[0]?.phoneNumber,
    address: clerkUser.unsafeMetadata?.address as string | undefined
  } : null;

  const login = async (email: string, password: string) => {
    // This is a no-op since Clerk handles the login
    // The actual login is handled by Clerk's <SignIn /> component
    console.log('Login attempt handled by Clerk');
  };

  const signup = (email: string, password: string, name: string) => {
    // This is a no-op since Clerk handles the signup
    // The actual signup is handled by Clerk's <SignUp /> component
    console.log('Signup attempt handled by Clerk');
  };

  const logout = () => {
    signOut();
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        signup, 
        logout, 
        isAuthenticated: !!user,
        isLoaded: true, // Clerk's useUser hook is synchronous
        isSignedIn: isSignedIn || false
      }}
    >
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