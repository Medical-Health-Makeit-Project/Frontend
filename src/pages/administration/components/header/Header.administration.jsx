import { Avatar, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import './header.administration.scss';

export const Header = () => {
  return (
    <header className="admin-header">
      <h1 className="admin-header__title">ADMINISTRATION PANEL</h1>
      <Menu>
        <MenuButton as={Button} className="admin-header__avatar-container">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
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
