import { Outlet } from 'react-router-dom';
import { Header } from '../header';

export const LayoutAdmin = () => (
  <>
    <Header />
    <Outlet />
  </>
);
