import { TfiMedallAlt, TfiThumbUp } from 'react-icons/tfi';
import { TbBed } from 'react-icons/tb';
import { AiOutlineExperiment } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { Icon } from '@components/icon';
import './achievements.whoWeAre.scss';

export const Achievements = () => {
  const achievements = [
    {
      id: uuidv4(),
      icon: <TfiMedallAlt color="white" size="24" />,
      quantity: '20+',
      achievement: 'Years of Experience',
    },
    {
      id: uuidv4(),
      icon: <TfiThumbUp color="white" size="24" />,
      quantity: '99%',
      achievement: 'Patients Satisfied',
    },
    {
      id: uuidv4(),
      icon: <TbBed color="white" size="24" />,
      quantity: '700+',
      achievement: 'Medical Beds',
    },
    {
      id: uuidv4(),
      icon: <AiOutlineExperiment color="white" size="24" />,
      quantity: '50+',
      achievement: 'Laboratory Experts',
    },
  ];

  return (
    <article className="whoWeAre-achievements">
      <ul className="whoWeAre-achievements__ul">
        {achievements.map((element) => {
          return (
            <li key={element.id} className="whoWeAre-achievements__li">
              <Icon color="info" size="md">
                {element.icon}
              </Icon>
              <div className="whoWeAre-achievements-info">
                <p className="whoWeAre-achievements-info__quantity">{element.quantity}</p>
                <p className="whoWeAre-achievements-info__achievement">{element.achievement}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
