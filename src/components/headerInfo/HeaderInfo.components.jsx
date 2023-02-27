import { BiPhone } from 'react-icons/bi';
import { BiUserVoice } from 'react-icons/bi';
import { BiPhoneCall } from 'react-icons/bi';
import { BiWorld } from 'react-icons/bi';
import './headerInfo.components.css';

export const HeaderInfo = () => {
  return (
    <section className="container-info">
      <div className="main-info-container">
        <article className="info__emergencies-container">
          <div className="info__emergencies">
            <span className="info-icon-phone-emergency">{<BiPhoneCall size={14} />}</span>
            <p className="info-paragraph-emergency">Emergency 24 hours</p>
          </div>
          <div className="line"></div>
          <div className="info__patients">
            <span className="info-icon-voice">{<BiUserVoice size={14} />}</span>
            <p className="info__paragraph-patients">Patients & Visitors</p>
          </div>
        </article>
        <article className="info__options-container">
          <div className="info__phone">
            <span className="info-icon-phone">{<BiPhone size={14} />}</span>
            <p className="info__paragraph-phone">(04) 8544 3322</p>
          </div>
          <div className="line"></div>
          <div className="info__languages">
            <span className="info-icon-languages">{<BiWorld size={14} />}</span>
            <select className="info__languages-select" id="languages">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="portuguese">Portuguese</option>
            </select>
          </div>
        </article>
      </div>
    </section>
  );
};
