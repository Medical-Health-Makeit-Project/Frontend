import { HiOutlineMinus } from 'react-icons/hi2';
import { colorIcons } from '../../../../constants';
import './usefulLinks.footer.scss';

export const UsefulLinks = () => {
  const links = [
    'About',
    'Find a Doctor',
    'Patients and Visitors',
    'International Services',
    'Terms and Conditions',
    'Privacy Policy',
  ];
  return (
    <section className="links">
      <h2 className="links__title">Useful Links</h2>
      <ul className="links__ul">
        {links.map((link) => {
          return (
            <li key={link} className="links__li">
              <HiOutlineMinus color={colorIcons} />
              <span className="links__text">{link}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
