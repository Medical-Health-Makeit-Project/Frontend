import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './heading.components.scss';

export const Heading = ({ title, image }) => {
  const pathname = new URL(window.location).pathname.split('/').splice(1);
  return (
    <header className="header-container">
      <img src={image} alt="background" className="header__image" />
      <div className="header-title-breadcrumb">
        <h1 className="header__title">{title}</h1>
        <Breadcrumb className="breadcrump">
          {pathname.map((element, idx) => {
            const route = pathname.slice(0, idx + 1).join('/');
            return (
              <BreadcrumbItem key={element}>
                <BreadcrumbLink as={Link} to={`/${route}`}>
                  {element}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      </div>
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

Heading.defaultProps = {
  image: PropTypes.string,
};
