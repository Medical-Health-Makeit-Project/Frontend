import { Welcome } from './components/welcome';
import { Departments } from './components/our-departments/departments.pages';
import './home.pages.css';

export const Home = () => {
  return (
    <main>
      <Welcome />
      <Departments />
    </main>
  );
};
