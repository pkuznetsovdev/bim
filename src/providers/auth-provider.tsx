import { createContext, PropsWithChildren, useMemo } from 'react';
import { useLocalStorage } from '@hooks/use-local-storage.tsx';

type User = {
  id: string;
};

type AuthContextType = {
  user: User | null;
  login: (data: User) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<
  AuthContextType | Record<string, never>
>({});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User>('user');

  const value = useMemo(
    () =>
      ({
        user,
        login: async (data: User) => setUser(data),
        logout: () => setUser(null),
      }) as const,
    [user, setUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
