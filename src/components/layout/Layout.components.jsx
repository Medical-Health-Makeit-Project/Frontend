import { PropTypes } from 'prop-types';
import { Header } from '../header';
import { Footer } from '../footer';
import './layout.components.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <div className="content-wrap">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
