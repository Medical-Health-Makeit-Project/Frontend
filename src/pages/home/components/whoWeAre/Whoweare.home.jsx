import { useEffect, useState } from 'react';
import { Info } from './components/info';
import { Schedule } from './components/schedule';
import { Achievements } from './components/achievements';
import { achievementsService } from './service';
import './whoWeAre.home.scss';

export const WhoWeAre = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    try {
      setTimeout(() => {
        achievementsService().then((res) => setAchievements(res.data));
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className="whoWeAre">
      <Info />
      <Schedule />
      <Achievements achievements={achievements} />
    </section>
  );
};
