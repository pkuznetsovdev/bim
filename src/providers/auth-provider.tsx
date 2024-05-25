import { createContext, PropsWithChildren } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';

type User = {
  id: string;
};

type AuthContextType = {
  user: User | null;
  login: (data: User) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | Record<string, never>>({
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User>('user');

  const login = async (data: User) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  } as const;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
