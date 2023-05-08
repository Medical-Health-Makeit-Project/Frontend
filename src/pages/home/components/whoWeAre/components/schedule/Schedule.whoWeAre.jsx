import { FaPhoneAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { Icon } from '@components/icon';
import emergency from '@assets/emergency-whoweare.jpeg';
import './schedule.whoWeAre.scss';

export const Schedule = () => {
  const schedule = [
    {
      id: uuidv4(),
      days: 'Mon - Fri',
      hours: '08:00 - 08:00',
    },
    {
      id: uuidv4(),
      days: 'Saturday',
      hours: '09:00 - 06:00',
    },
    {
      id: uuidv4(),
      days: 'Sunday',
      hours: '09:00 - 03:00',
    },
  ];
  return (
    <article className="whoWeAre-schedule">
      <div className="whoWeAre-schedule-image-container">
        <img src={emergency} alt="emergency" className="whoWeAre-schedule-container__image" />
      </div>
      <div className="whoWeAre-schedule-info">
        <header className="whoWeAre-schedule-info__header">
          <span className="whoWeAre-schedule-icon">
            <Icon color="regular" size="md">
              <FaPhoneAlt size={24} />
            </Icon>
          </span>
          <div className="whoWeAre-schedule-info-emergency">
            <p className="whoWeAre-schedule-info-emergency__message">Emergency 24 hours</p>
            <p className="whoWeAre-schedule-info-emergency__phone">+04 8544 3322</p>
          </div>
        </header>
        <ul className="whoWeAre-schedule-info-ul">
          {schedule.map((element) => {
            return (
              <li key={element.id} className="whoWeAre-schedule-info-ul__li">
                <p className="whoWeAre-schedule-info-ul__days">{element.days}</p>
                <p className="whoWeAre-schedule-info-ul__hours">{element.hours}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};
