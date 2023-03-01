import { HiOutlineMinus } from 'react-icons/hi2';
import './departments.footer.scss';

export const Departments = () => {
  const departments = [
    'Orthopedic',
    'Dental Service',
    'Neurology',
    'Emergency Department',
    'Diagnosis Department',
    'Therapy Department',
  ];
  return (
    <section className="departments">
      <h2 className="departments__title">Our Departments</h2>
      <ul className="departments__ul">
        {departments.map((department) => {
          return (
            <li key={department} className="departments__li">
              <HiOutlineMinus color="rgba(63, 182, 214)" />
              <span className="departments__text">{department}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
