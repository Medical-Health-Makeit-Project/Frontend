import { HiPhone, HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { Icon } from '@components/icon';
import { colorIcons } from '@constants';
import './about.footer.scss';

export const About = () => {
  const icons = [
    {
      icon: <HiPhone color={colorIcons} size="20" />,
      message: '(04) 8544 3322',
    },
    {
      icon: <HiOutlineMail color={colorIcons} size="20" />,
      message: 'mebid@gmail.com',
    },
    {
      icon: <HiLocationMarker color={colorIcons} size="20" />,
      message: '24 Newport road, Carlton IP19',
    },
  ];

  return (
    <section className="about">
      <h2 className="about__title">About</h2>
      <p className="about__paragraph">
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet. Nulla
        portitor accumsan.
      </p>
      <ul className="about__ul">
        {icons.map((icon) => {
          return (
            <li key={icon.message} className="about__li">
              <Icon color="transparent" size="sm">
                {icon.icon}
              </Icon>
              <span className="about__text">{icon.message}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
