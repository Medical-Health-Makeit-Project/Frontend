import { Avatar, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '@redux/features';
import { PublicRoutes, PrivateRoutes } from '@routes';
import './header.administration.scss';

export const Header = () => {
  const { username, avatar } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(PublicRoutes.LOGIN);
  };

  return (
    <header className="admin-header">
      <h1 className="admin-header__title">ADMINISTRATION PANEL</h1>
      <Menu>
        <MenuButton as={Button} className="admin-header__avatar-container">
          <Avatar name={username} src={avatar} />
        </MenuButton>
        <MenuList>
          <Link to={PrivateRoutes.ADMIN.DOCTORS}>
            <MenuItem>Doctors</MenuItem>
          </Link>
          <Link to={PrivateRoutes.ADMIN.PRODUCTS}>
            <MenuItem>Products</MenuItem>
          </Link>
          <Link to={PublicRoutes.HOME}>
            <MenuItem>Go app</MenuItem>
          </Link>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </header>
  );
};
