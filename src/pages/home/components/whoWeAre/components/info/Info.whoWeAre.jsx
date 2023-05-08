import { BsArrowRight } from 'react-icons/bs';
import { Button } from '@components/buttons';
import nurse from '@assets/nurse-whoweare.jpeg';
import './info.whoWeAre.scss';

export const Info = () => {
  return (
    <article className="whoWeAre-info">
      <div className="whoWeAre-info-header">
        <h2 className="whoWeAre-info-header-title">Who we are</h2>
        <h3 className="whoWeAre-info-header-subtitle">We provide highest level of care</h3>
        <p className="whoWeAre-info-header-paragraph">
          Nulla portitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit vivamus
          magna justo lacinia eget consectetur convallis at tellus proin eget tortor.
        </p>
      </div>
      <div className="whoWeAre-info-figure">
        <div className="whoWeAre-info-image-container">
          <img className="whoWeAre-info-imagen-container__imagen" src={nurse} alt="nurse" />
        </div>
        <p className="whoWeAre-info-figure__caption">
          Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula. Lorem ipsum
          dolor sit amet consectetur adipiscing elit. Vivamus magna justo acinia eget consectetur
          sed convallis at tellus.
        </p>
      </div>
      <div className="whoWeAre-info-button">
        <Button variant="solid" color="info">
          About Us{' '}
          <span className="arrow-button">
            <BsArrowRight size={18} />
          </span>
        </Button>
      </div>
    </article>
  );
};
