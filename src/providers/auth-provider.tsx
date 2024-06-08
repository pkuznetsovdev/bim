import { createContext, PropsWithChildren, useCallback, useMemo } from 'react';
import { useLocalStorage } from '@hooks/use-local-storage.tsx';
import type { User } from '@types';
import { useStoreDispatch, UserApi } from '@store';

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

  const dispatch = useStoreDispatch();

  const handleLogin = useCallback(
    authData => {
      dispatch(UserApi.authLocal(authData));
    },
    [dispatch]
  );

  const value = useMemo(
    () =>
      ({
        user,
        login: handleLogin,
        logout: () => setUser(null),
      }) as const,
    [user, setUser, handleLogin]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
