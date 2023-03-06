import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import './heading.components.scss';

export const Heading = ({ title, image }) => {
  let pathname = new URL(window.location).pathname.split('/').splice(1);
  return (
    <header className="header-container">
      <img src={image} alt="background-image" className="header__image" />
      <div className="header-title-breadcrumb">
        <h1 className="header__title">{title}</h1>
        <Breadcrumb className="breadcrump">
          {pathname.map((element) => {
            return (
              <BreadcrumbItem key={element}>
                <BreadcrumbLink href="#">{element}</BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      </div>
    </header>
  );
};
