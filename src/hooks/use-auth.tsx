import { useContext } from 'react';
import { AuthContext } from 'src/providers';

export const useAuth = () => {
  return useContext(AuthContext);
};
