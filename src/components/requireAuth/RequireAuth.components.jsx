import { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { findUserWithToken } from '@redux/features';
import { useSelector, useDispatch } from 'react-redux';
import { PublicRoutes } from '@routes';

export const RequireAuth = ({ allowedRoles }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isToken = localStorage.getItem('token');
  const isAuth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isToken) return navigate(PublicRoutes.LOGIN);
    if (allowedRoles.find((e) => isAuth.role === e)) return <Outlet />;
    return navigate(PublicRoutes.UNATHORIZED);
  }, []);

  // if (!isToken) {
  //   useEffect(() => {
  //     navigate(PublicRoutes.LOGIN);
  //   }, []);
  // } else {
  //   const isAuth = useSelector((state) => state.auth);
  //   if (allowedRoles.find((e) => isAuth.role === e)) return <Outlet />;
  //   useEffect(() => {
  //     dispatch(findUserWithToken(isToken));
  //   }, []);
  // }
  // if (isToken)
  //   return (
  //     <Navigate to="home/unauthorized" state={{ from: location }} replace />
  //   );
};
//<Navigate to="home/login" state={{ from: location }} replace />
