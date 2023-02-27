import './footer.components.css';
import { About } from './components/aboutFooter';
import { Departments } from './components/departments';
import { UsefulLinks } from './components/usefulLinks';
import { NewsLetter } from './components/newsLetter';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <About />
        <div className="first">
          <Departments />
          <UsefulLinks />
        </div>
        <NewsLetter />
      </div>
      <section className="footer__credits">Coded by Jean Vittory & Sebastian Alvarez</section>
    </footer>
  );
};
