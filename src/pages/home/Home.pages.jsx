import { Welcome } from './components/welcome';
import { WhoWeAre } from './components/whoWeAre';
import { Departments } from './components/our-departments';
import { Video } from './components/video';
import { FrequentlyAskQuestions } from './components/frequently-ask-questions';
import './home.pages.scss';

export const Home = () => {
  return (
    <main>
      <Welcome />
      <WhoWeAre />
      <Departments />
      <Video />
      <FrequentlyAskQuestions />
    </main>
  );
};
