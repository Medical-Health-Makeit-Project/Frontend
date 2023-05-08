import './departments.pages.scss';
import { Carousel } from './components/Carousel.departments';
import departments from './departmnets.json';

export const Departments = () => {
  return (
    <section className="departments__scroll">
      <div className="text__container">
        <p>Our departments</p>
        <h3>Our hospital has all kinds of department services</h3>
      </div>
      <Carousel departments={departments} />
    </section>
  );
};
