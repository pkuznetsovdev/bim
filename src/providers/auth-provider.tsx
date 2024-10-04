import { createContext, PropsWithChildren, useCallback, useMemo } from 'react';
import { useLocalStorage } from '@hooks/use-local-storage.tsx';
import type { User } from '@types';
import { UserApi } from '@models';
import { useStoreDispatch } from '@store';

type AuthLocalParams = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (data: AuthLocalParams) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<
  AuthContextType | Record<string, never>
>({});

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useLocalStorage<User>('user');

  const dispatch = useStoreDispatch();

  const handleLogin = useCallback(
    (authData: AuthLocalParams) => {
      dispatch(UserApi.authLocal(authData));
    },
    [dispatch],
  );

  const value = useMemo(
    () =>
      ({
        user,
        login: handleLogin,
        logout: () => setUser(null),
      }) as const,
    [user, setUser, handleLogin],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
