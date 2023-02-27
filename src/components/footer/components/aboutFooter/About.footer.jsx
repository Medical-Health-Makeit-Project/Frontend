import { HiPhone, HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { colorIcons } from '../../../../constants';
import './about.footer.css';

export const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">About</h2>
      <p className="about__paragraph">
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet. Nulla portitor accumsan.
      </p>
      <ul className="about__ul">
        <li className="about__li">
          <HiPhone color={colorIcons} size="20" />
          <span className="about__text">(04) 8544 3322</span>
        </li>
        <li className="about__li">
          <HiOutlineMail color={colorIcons} size="20" />
          <span className="about__text">mebid@gmail.com</span>
        </li>
        <li className="about__li">
          <HiLocationMarker color={colorIcons} size="20" />
          <span className="about__text">24 Newport road, Carlton IP19</span>
        </li>
      </ul>
    </section>
  );
};
