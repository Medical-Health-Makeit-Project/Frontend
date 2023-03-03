import { Welcome } from './components/welcome';
import { WhoWeAre } from './components/whoWeAre';
import './home.pages.scss';
import { Departments } from './components/our-departments/departments.pages';

export const Home = () => {
  return (
    <main>
      <Welcome />
      <WhoWeAre />
      <Departments />
    </main>
  );
};
