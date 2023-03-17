import { useEffect } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { findUserWithToken } from '@redux/features';
import { useSelector, useDispatch } from 'react-redux';

export const RequireAuth = ({ allowedRoles }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isToken = localStorage.getItem('token');
  if (!isToken) {
    return <Navigate to="home/login" state={{ from: location }} replace />;
  } else {
    useEffect(() => {
      dispatch(findUserWithToken(isToken));
    }, []);
  }
  const isAuth = useSelector((state) => state.auth);
  if (allowedRoles.find((e) => isAuth.role === e)) return <Outlet />;
  if (isToken)
    return (
      <Navigate to="home/unauthorized" state={{ from: location }} replace />
    );
};
