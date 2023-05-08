import { useSelector } from 'react-redux';
import { emptyObject } from '@utils/tools';

export const useIsLoggedOut = () => {
  const user = useSelector((state) => state.auth);
  const isLoggedOut = emptyObject(user) || user === 'Unauthorized';
  return { isLoggedOut };
};
