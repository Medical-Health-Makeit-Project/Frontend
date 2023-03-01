import { BsArrowRight } from 'react-icons/bs';
import { RiFacebookLine, RiTwitterFill, RiInstagramFill, RiLinkedinFill } from 'react-icons/ri';
import { colorIcons } from '../../../../constants';
import './newsLetter.footer.scss';

export const NewsLetter = () => {
  const socials = [
    <RiFacebookLine color={colorIcons} size={22} />,
    <RiTwitterFill color={colorIcons} size={22} />,
    <RiInstagramFill color={colorIcons} size={22} />,
    <RiLinkedinFill color={colorIcons} size={22} />,
  ];

  return (
    <section className="news-letter-container">
      <article className="news-letter">
        <h2 className="news-letter__title">Newsletter</h2>
        <p className="news-letter__paragraph">Sign up for weekly news and updates</p>
        <form className="news-letter-form">
          <input type="email" placeholder="Email address" className="news-letter-form__input-email" />
          <button className="news-letter-form__button">{<BsArrowRight color="white" size={22} />}</button>
        </form>
      </article>
      <article className="socials">
        <ul className="socials__ul">
          {socials.map((social) => {
            return (
              <li className="socials__li">
                <span className="social-icon">{social}</span>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};
