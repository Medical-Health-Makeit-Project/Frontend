import { PropTypes } from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import './layout.components.scss';

export const Layout = () => {
  return (
    <>
      <div className="content-wrap">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
