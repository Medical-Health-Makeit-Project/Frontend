import './departments.pages.scss';

import { Ophthalmology } from './components/Ophthalmology.department';
import { Pediatrics } from './components/Pediatrics.department';
import { Psychiatry } from './components/Psychiatry.components';
import { Nutrition } from './components/Nutrition.components';
import { Cardiology } from './components/Cardiology.department';
import { Orthopedics } from './components/Orthopedics.department';
export const Departments = () => {
  return (
    <section className="departments__scroll">
      <div className="text__container">
        <p>Our department</p>
        <h3>Our hospital has all kinds of department services</h3>
      </div>
      <div className="scroll__container">
        <Orthopedics />
        <Cardiology />
        <Ophthalmology />
        <Pediatrics />
        <Psychiatry />
        <Nutrition />
      </div>
    </section>
  );
};
