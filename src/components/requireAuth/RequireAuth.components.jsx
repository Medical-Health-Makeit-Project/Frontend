import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { findUserWithToken } from '@redux/thunks';
import { useDispatch } from 'react-redux';
import { PublicRoutes } from '@routes';
import { errorMessage } from '@utils/toastify';
import { TOKEN } from '@constants';

export const RequireAuth = ({ allowedRoles }) => {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isToken = localStorage.getItem(TOKEN);
  const userData = async () => {
    try {
      const isValiduser = await dispatch(findUserWithToken(isToken));
      if (isValiduser instanceof Error) throw isValiduser;
      return isValiduser;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (!isToken) return navigate(PublicRoutes.LOGIN);
    userData()
      .then(({ payload }) => {
        if (allowedRoles.find((e) => payload.role === e)) {
          return setIsAuth(true);
        }
        return navigate(PublicRoutes.UNAUTHORIZED);
      })
      .catch((error) => {
        localStorage.removeItem(TOKEN);
        navigate(PublicRoutes.LOGIN);
        errorMessage('Invalid credentials, please login again.');
      });
  }, []);

  return isAuth && <Outlet />;
};

RequireAuth.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.number) || PropTypes.number,
};
