import { Avatar, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import './header.administration.scss';

export const Header = () => {
  const { username, avatar } = useSelector((state) => state.auth);

  return (
    <header className="admin-header">
      <h1 className="admin-header__title">ADMINISTRATION PANEL</h1>
      <Menu>
        <MenuButton as={Button} className="admin-header__avatar-container">
          <Avatar name={username} src={avatar} />
        </MenuButton>
        <MenuList>
          <MenuItem>Doctors</MenuItem>
          <MenuItem>Products</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </header>
  );
};
