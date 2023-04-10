import { LayoutAdmin } from './components/layout';
import { Welcome } from './components/welcome';
import { Doctors } from './components/doctors';
import { Loading } from '@components/loading';
import { useIsLoading } from '@hooks';
import { PrivateRoutes } from '@routes';
import { Route, Routes } from 'react-router-dom';

export const Dashboard = () => {
  const [isLoading] = useIsLoading();

  if (isLoading) return <Loading />;

  return (
    <Routes>
      <Route path="/" element={<LayoutAdmin />}>
        <Route index path={PrivateRoutes.ADMIN.HOME} element={<Welcome />} />
        <Route path={PrivateRoutes.ADMIN.DOCTORS} element={<Doctors />} />
      </Route>
    </Routes>
  );
};
