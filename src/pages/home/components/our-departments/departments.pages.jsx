import { useState, useEffect } from 'react';
import './departments.pages.scss';
import { Carousel } from './components/Carousel.departments';
import { departmentsService } from './service/departments.service';

export const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      departmentsService().then((res) => {
        setDepartments(res.data);
      });
    }, 5000);
  }, []);
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
