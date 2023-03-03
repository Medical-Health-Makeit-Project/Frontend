import { Welcome } from './components/welcome';
import './home.pages.scss';
import { Departments } from './components/our-departments/departments.pages';

export const Home = () => {
  return (
    <main>
      <Welcome />
      <Departments />
    </main>
  );
};
