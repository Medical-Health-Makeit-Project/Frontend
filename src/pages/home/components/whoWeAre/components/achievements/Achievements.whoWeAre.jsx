import { TfiMedallAlt, TfiThumbUp } from 'react-icons/tfi';
import { TbBed } from 'react-icons/tb';
import { AiOutlineExperiment } from 'react-icons/ai';
import { Skeleton } from '@chakra-ui/react';
import { Icon } from '@components/icon';
import './achievements.whoWeAre.scss';

export const Achievements = ({ achievements }) => {
  const icons = {
    TfiMedallAlt: <TfiMedallAlt color="white" size={24} />,
    TfiThumbUp: <TfiThumbUp color="white" size={24} />,
    TbBed: <TbBed color="white" size={24} />,
    AiOutlineExperiment: <AiOutlineExperiment color="white" size={24} />,
  };

  return (
    <article className="whoWeAre-achievements">
      <ul className="whoWeAre-achievements__ul">
        {!achievements.length
          ? Object.keys(icons).map((element) => {
              return (
                <Skeleton className="whoWeAre-achievements__li" height={'230px'}>
                  <li>
                    <Icon color="info" size="md"></Icon>
                    <div className="whoWeAre-achievements-info">
                      <p className="whoWeAre-achievements-info__quantity">hola miuund</p>
                      <p className="whoWeAre-achievements-info__achievement"></p>
                    </div>
                  </li>
                </Skeleton>
              );
            })
          : achievements.map((element) => {
              let icon = icons[element.icon];
              return (
                <li key={element.id} className="whoWeAre-achievements__li">
                  <Icon color="info" size="md">
                    {icon}
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
