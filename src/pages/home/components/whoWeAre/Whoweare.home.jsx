import './whoWeAre.home.scss';
import { Info } from './components/info';
import { Schedule } from './components/schedule';
import { Achievements } from './components/achievements';
import './whoWeAre.home.scss';

export const WhoWeAre = () => {
  return (
    <section className="whoWeAre">
      <Info />
      <Schedule />
      <Achievements />
    </section>
  );
};
