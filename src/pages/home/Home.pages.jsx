import { Welcome } from './components/welcome';
import { WhoWeAre } from './components/whoWeAre';
import './home.pages.scss';

export const Home = () => {
  return (
    <main>
      <Welcome />
      <WhoWeAre />
    </main>
  );
};
