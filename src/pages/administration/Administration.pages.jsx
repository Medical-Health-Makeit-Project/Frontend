import { Header } from './components/header';
import { Welcome } from './components/welcome';
import './administration.pages.scss';

export const Administration = () => {
  return (
    <main>
      <Header />
      <Welcome />
    </main>
  );
};
